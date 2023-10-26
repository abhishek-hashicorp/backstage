/*
 * Copyright 2023 The Backstage Authors
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

import React from 'react';
import { createApp } from '@backstage/frontend-app-api';
import { pagesPlugin } from './examples/pagesPlugin';
import graphiqlPlugin from '@backstage/plugin-graphiql/alpha';
import techRadarPlugin from '@backstage/plugin-tech-radar/alpha';
import userSettingsPlugin from '@backstage/plugin-user-settings/alpha';
import homePlugin, {
  titleExtensionDataRef,
} from '@backstage/plugin-home/alpha';

import {
  coreExtensionData,
  createExtension,
  createApiExtension,
  createExtensionOverrides,
  createNotFoundErrorPageExtension,
} from '@backstage/frontend-plugin-api';
import techdocsPlugin from '@backstage/plugin-techdocs/alpha';
import { homePage } from './HomePage';
import { collectLegacyRoutes } from '@backstage/core-compat-api';
import { FlatRoutes } from '@backstage/core-app-api';
import { Route } from 'react-router';
import { CatalogImportPage } from '@backstage/plugin-catalog-import';
import { createApiFactory, configApiRef } from '@backstage/core-plugin-api';
import {
  ScmAuth,
  ScmIntegrationsApi,
  scmIntegrationsApiRef,
} from '@backstage/integration-react';
import { Box, Typography } from '@material-ui/core';
import { Button } from '@backstage/core-components';

/*

# Notes

TODO:
 - proper createApp
 - connect extensions and plugins, provide method?
 - higher level API for creating standard extensions + higher order framework API for creating those?
 - extension config schema + validation
 - figure out how to resolve configured extension ref to runtime value, e.g. '@backstage/plugin-graphiql#GraphiqlPage'
 - make sure all shorthands work + tests
 - figure out package structure / how to ship, frontend-plugin-api/frontend-app-api
 - figure out routing, useRouteRef in the new system
 - Legacy plugins / interop
 - dynamic updates, runtime API

*/

/* core */

// const discoverPackages = async () => {
//   // stub for now, deferring package discovery til later
//   return ['@backstage/plugin-graphiql'];
// };

/* graphiql package */

/* app.tsx */

const homePageExtension = createExtension({
  id: 'myhomepage',
  attachTo: { id: 'home', input: 'props' },
  output: {
    children: coreExtensionData.reactElement,
    title: titleExtensionDataRef,
  },
  factory({ bind }) {
    bind({ children: homePage, title: 'just a title' });
  },
});

const scmAuthExtension = createApiExtension({
  factory: ScmAuth.createDefaultApiFactory(),
});

const scmIntegrationApi = createApiExtension({
  factory: createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),
});

const customNotFoundErrorPage = createNotFoundErrorPageExtension({
  component: () => (
    <Box
      component="article"
      width="100%"
      height="100vh"
      display="grid"
      textAlign="center"
      alignContent="center"
      justifyContent="center"
      justifyItems="center"
    >
      <Typography variant="h1">404</Typography>
      <Typography color="textSecondary" paragraph style={{ width: 300 }}>
        Bowie was unable to locate this page. Please contact your support team
        if this page used to exist.
      </Typography>
      <img
        alt="Backstage bowie"
        src="https://info.backstage.spotify.com/hs-fs/hubfs/Call%20Bowie%202.png"
        width="200"
        style={{ filter: 'grayscale(50%)' }}
      />
      <Button
        variant="contained"
        to="/"
        style={{ marginTop: '1rem', width: 200 }}
      >
        Go home
      </Button>
    </Box>
  ),
});

const collectedLegacyPlugins = collectLegacyRoutes(
  <FlatRoutes>
    <Route path="/catalog-import" element={<CatalogImportPage />} />
  </FlatRoutes>,
);

const app = createApp({
  features: [
    graphiqlPlugin,
    pagesPlugin,
    techRadarPlugin,
    techdocsPlugin,
    userSettingsPlugin,
    homePlugin,
    ...collectedLegacyPlugins,
    createExtensionOverrides({
      extensions: [
        homePageExtension,
        scmAuthExtension,
        scmIntegrationApi,
        customNotFoundErrorPage,
      ],
    }),
  ],
  /* Handled through config instead */
  // bindRoutes({ bind }) {
  //   bind(pagesPlugin.externalRoutes, { pageX: pagesPlugin.routes.pageX });
  // },
});

// const legacyApp = createLegacyApp({ plugins: [legacyGraphiqlPlugin] });

export default app.createRoot();

// const routes = (
//   <FlatRoutes>
//     {/* <Route path="/" element={<Navigate to="catalog" />} />
//     <Route path="/catalog" element={<CatalogIndexPage />} />
//     <Route
//       path="/catalog/:namespace/:kind/:name"
//       element={<CatalogEntityPage />}
//     >
//       <EntityLayout>
//         <EntityLayout.Route path="/" title="Overview">
//           <Grid container spacing={3} alignItems="stretch">
//             <Grid item md={6} xs={12}>
//               <EntityAboutCard variant="gridItem" />
//             </Grid>

//             <Grid item md={4} xs={12}>
//               <EntityLinksCard />
//             </Grid>
//           </Grid>
//         </EntityLayout.Route>

//         <EntityLayout.Route path="/todos" title="TODOs">
//           <EntityTodoContent />
//         </EntityLayout.Route>
//       </EntityLayout>
//     </Route>
//     <Route
//       path="/catalog-import"
//       element={
//           <CatalogImportPage />
//       }
//     /> */}
//     {/* <Route
//       path="/tech-radar"
//       element={<TechRadarPage width={1500} height={800} />}
//     /> */}
//     <Route path="/graphiql" element={<GraphiQLPage />} />
//   </FlatRoutes>
// );

// export default app.createRoot(
//   <>
//     {/* <AlertDisplay transientTimeoutMs={2500} />
//     <OAuthRequestDialog /> */}
//     <AppRouter>{routes}</AppRouter>
//   </>,
// );
