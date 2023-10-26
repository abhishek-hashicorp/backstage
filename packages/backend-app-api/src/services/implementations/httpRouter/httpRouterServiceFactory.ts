/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  LifecycleService,
  LoggerService,
  RootConfigService,
  coreServices,
  createServiceFactory,
} from '@backstage/backend-plugin-api';
import { Handler, RequestHandler, Router } from 'express';
import PromiseRouter from 'express-promise-router';
import { MiddlewareFactory } from '../../../http';
import { createLifecycleMiddleware } from './createLifecycleMiddleware';

/**
 * @public
 */
export interface HttpRouterConfigureContext {
  pluginRouter: Router;
  middleware: MiddlewareFactory;
  routes: RequestHandler;
  rootConfig: RootConfigService;
  logger: LoggerService;
  lifecycle: LifecycleService;
}

function defaultGetPath(pluginId: string): string {
  return `/api/${pluginId}`;
}

function defaultConfigure(context: HttpRouterConfigureContext): void {
  const { pluginRouter, routes, middleware, lifecycle } = context;
  pluginRouter.use(createLifecycleMiddleware({ lifecycle }));
  pluginRouter.use(routes);
  pluginRouter.use(middleware.notFound());
}

/**
 * @public
 */
export interface HttpRouterFactoryOptions {
  /**
   * A callback used to generate the path for each plugin, defaults to `/api/{pluginId}`.
   */
  getPath?(pluginId: string): string;

  /**
   * Allows you to customize the creation of the plugin router, by attaching a
   * set of middleware and the given routes in the desired order. If no
   * configure callback is given, a default set of middleware are added around
   * the routes, e.g. for 404 handling.
   */
  configure?(context: HttpRouterConfigureContext): void;
}

/** @public */
export const httpRouterServiceFactory = createServiceFactory(
  (options?: HttpRouterFactoryOptions) => ({
    service: coreServices.httpRouter,
    deps: {
      config: coreServices.rootConfig,
      logger: coreServices.rootLogger,
      plugin: coreServices.pluginMetadata,
      lifecycle: coreServices.lifecycle,
      rootHttpRouter: coreServices.rootHttpRouter,
    },
    createRootContext({ config, logger, rootHttpRouter }) {
      const { getPath = defaultGetPath } = options ?? {};

      const middleware = MiddlewareFactory.create({ config, logger });

      //   / [wrapper]
      //      / [pluginsRouter]   the router where plugins get registered
      //         /api/foo         foo plugin
      //         /api/bar         bar plugin
      //      /api/               404 handler

      const wrapper = PromiseRouter();
      rootHttpRouter.use('', wrapper);

      const pluginsRouter = PromiseRouter();
      wrapper.use(pluginsRouter);

      // This is the overarching 404 handler for all plugin routes. We want to
      // properly let the notFound middleware handle illegal but plugin-like
      // paths, instead of letting it fall down to the index route of the root
      // router. Failing to do so will for example make a request to
      // /api/not-a-valid-plugin return the index.html page rather than a 404.
      // The problem is that we can't know beforehand what exact path pattern
      // that the adopter uses. So we try to ask for the empty plugin ID, and if
      // that is nonempty (e.g. /api/), we put the notFound handler there.
      const pluginsRoot = getPath('');
      if (pluginsRoot !== '' && pluginsRoot !== '/') {
        wrapper.use(pluginsRoot, middleware.notFound());
      }

      return {
        pluginsRouter,
        middleware,
      };
    },
    async factory(
      { config, logger, plugin, lifecycle },
      { pluginsRouter, middleware },
    ) {
      const { getPath = defaultGetPath, configure = defaultConfigure } =
        options ?? {};

      const path = getPath(plugin.getId());
      const pluginRouter = PromiseRouter();
      const routes = PromiseRouter();

      pluginsRouter.use(path, pluginRouter);

      configure({
        pluginRouter,
        middleware,
        routes,
        rootConfig: config,
        logger,
        lifecycle,
      });

      return {
        use(handler: Handler) {
          routes.use(handler);
        },
      };
    },
  }),
);
