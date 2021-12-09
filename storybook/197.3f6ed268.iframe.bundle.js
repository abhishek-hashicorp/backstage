(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{3241:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"RealLogViewer",(function(){return RealLogViewer}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(103),_material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1516),_material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_2__),react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3346),react_window__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3354),_AnsiProcessor__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3347),_styles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3348),classnames__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(63),classnames__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__),_LogLine__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(3349),_LogViewerControls__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(3350),_useLogViewerSearch__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(3351),_useLogViewerSelection__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(3352);const _jsxFileName="/home/runner/work/backstage/backstage/packages/core-components/src/components/LogViewer/RealLogViewer.tsx";var enterModule,reactHotLoader,leaveModule;function RealLogViewer(props){const classes=Object(_styles__WEBPACK_IMPORTED_MODULE_6__.b)(),listRef=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),lines=Object(react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>new _AnsiProcessor__WEBPACK_IMPORTED_MODULE_5__.a),[]).process(props.text),search=Object(_useLogViewerSearch__WEBPACK_IMPORTED_MODULE_10__.a)(lines),selection=Object(_useLogViewerSelection__WEBPACK_IMPORTED_MODULE_11__.a)(lines);Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{void 0!==search.resultLine&&listRef.current&&listRef.current.scrollToItem(search.resultLine-1,"center")}),[search.resultLine]);const handleSelectLine=(line,event)=>{event.preventDefault(),selection.setSelection(line,event.shiftKey)};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__.a,{__self:this,__source:{fileName:_jsxFileName,lineNumber:61}},(({height:height,width:width})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{width:width,height:height},className:classnames__WEBPACK_IMPORTED_MODULE_7___default()(classes.root,props.className),__self:this,__source:{fileName:_jsxFileName,lineNumber:63}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:classes.header,__self:this,__source:{fileName:_jsxFileName,lineNumber:67}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogViewerControls__WEBPACK_IMPORTED_MODULE_9__.a,{...search,__self:this,__source:{fileName:_jsxFileName,lineNumber:68}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_window__WEBPACK_IMPORTED_MODULE_4__.a,{ref:listRef,className:classes.log,height:height-_styles__WEBPACK_IMPORTED_MODULE_6__.a,width:width,itemData:search.lines,itemSize:20,itemCount:search.lines.length,__self:this,__source:{fileName:_jsxFileName,lineNumber:70}},(({index:index,style:style,data:data})=>{const line=data[index],{lineNumber:lineNumber}=line;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{...style},className:classnames__WEBPACK_IMPORTED_MODULE_7___default()(classes.line,{[classes.lineSelected]:selection.isSelected(lineNumber)}),__self:this,__source:{fileName:_jsxFileName,lineNumber:83}},selection.shouldShowButton(lineNumber)&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__.a,{"data-testid":"copy-button",size:"small",className:classes.lineCopyButton,onClick:()=>selection.copySelection(),__self:this,__source:{fileName:_jsxFileName,lineNumber:90}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_2___default.a,{fontSize:"inherit",__self:this,__source:{fileName:_jsxFileName,lineNumber:96}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{role:"row",target:"_self",href:`#line-${lineNumber}`,className:classes.lineNumber,onClick:event=>handleSelectLine(lineNumber,event),onKeyPress:event=>handleSelectLine(lineNumber,event),__self:this,__source:{fileName:_jsxFileName,lineNumber:99}},lineNumber),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogLine__WEBPACK_IMPORTED_MODULE_8__.a,{line:line,classes:classes,searchText:search.searchText,highlightResultIndex:search.resultLine===lineNumber?search.resultLineIndex:void 0,__self:this,__source:{fileName:_jsxFileName,lineNumber:109}}))})))))}(enterModule=__webpack_require__(1).enterModule)&&enterModule(module),reactHotLoader=__webpack_require__(1).default,leaveModule=__webpack_require__(1).leaveModule,reactHotLoader&&(reactHotLoader.register(RealLogViewer,"RealLogViewer","/home/runner/work/backstage/backstage/packages/core-components/src/components/LogViewer/RealLogViewer.tsx"),leaveModule(module));try{RealLogViewer.displayName="RealLogViewer",RealLogViewer.__docgenInfo={description:"",displayName:"RealLogViewer",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../core-components/src/components/LogViewer/RealLogViewer.tsx#RealLogViewer"]={docgenInfo:RealLogViewer.__docgenInfo,name:"RealLogViewer",path:"../core-components/src/components/LogViewer/RealLogViewer.tsx#RealLogViewer"})}catch(__react_docgen_typescript_loader_error){}}.call(this,__webpack_require__(3)(module))},3347:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return AnsiProcessor}));var ansi_regex__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1948),ansi_regex__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(ansi_regex__WEBPACK_IMPORTED_MODULE_0__),enterModule;function _nullishCoalesce(lhs,rhsFn){return null!=lhs?lhs:rhsFn()}function _optionalChain(ops){let lastAccessLHS,value=ops[0],i=1;for(;i<ops.length;){const op=ops[i],fn=ops[i+1];if(i+=2,("optionalAccess"===op||"optionalCall"===op)&&null==value)return;"access"===op||"optionalAccess"===op?(lastAccessLHS=value,value=fn(value)):"call"!==op&&"optionalCall"!==op||(value=fn(((...args)=>value.call(lastAccessLHS,...args))),lastAccessLHS=void 0)}return value}enterModule=__webpack_require__(1).enterModule,enterModule&&enterModule(module);const ansiRegex=ansi_regex__WEBPACK_IMPORTED_MODULE_0___default()(),newlineRegex=/\n\r?/g,codeModifiers=Object.fromEntries(Object.entries({1:m=>({...m,bold:!0}),3:m=>({...m,italic:!0}),4:m=>({...m,underline:!0}),22:({bold:_,...m})=>m,23:({italic:_,...m})=>m,24:({underline:_,...m})=>m,30:m=>({...m,foreground:"black"}),31:m=>({...m,foreground:"red"}),32:m=>({...m,foreground:"green"}),33:m=>({...m,foreground:"yellow"}),34:m=>({...m,foreground:"blue"}),35:m=>({...m,foreground:"magenta"}),36:m=>({...m,foreground:"cyan"}),37:m=>({...m,foreground:"white"}),39:({foreground:_,...m})=>m,90:m=>({...m,foreground:"grey"}),40:m=>({...m,background:"black"}),41:m=>({...m,background:"red"}),42:m=>({...m,background:"green"}),43:m=>({...m,background:"yellow"}),44:m=>({...m,background:"blue"}),45:m=>({...m,background:"magenta"}),46:m=>({...m,background:"cyan"}),47:m=>({...m,background:"white"}),49:({background:_,...m})=>m}).map((([code,modifier])=>[`[${code}m`,modifier])));class AnsiLine{__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}constructor(lineNumber=1,chunks=[]){this.lineNumber=lineNumber,this.chunks=chunks,this.text=chunks.map((c=>c.text)).join("").toLocaleLowerCase("en-US")}lastChunk(){return this.chunks[this.chunks.length-1]}replaceLastChunk(newChunks){newChunks&&(this.chunks.splice(this.chunks.length-1,1,...newChunks),this.text=this.chunks.map((c=>c.text)).join("").toLocaleLowerCase("en-US"))}}class AnsiProcessor{__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}constructor(){AnsiProcessor.prototype.__init.call(this),AnsiProcessor.prototype.__init2.call(this),AnsiProcessor.prototype.__init3.call(this),AnsiProcessor.prototype.__init4.call(this),AnsiProcessor.prototype.__init5.call(this)}__init(){this.text=""}__init2(){this.lines=[]}process(text){if(this.text===text)return this.lines;if(text.startsWith(this.text)){const lastLineIndex=this.lines.length>0?this.lines.length-1:0,lastLine=_nullishCoalesce(this.lines[lastLineIndex],(()=>new AnsiLine)),lastChunk=lastLine.lastChunk(),newLines=this.processLines(_nullishCoalesce(_optionalChain([lastChunk,"optionalAccess",_4=>_4.text]),(()=>""))+text.slice(this.text.length),_optionalChain([lastChunk,"optionalAccess",_5=>_5.modifiers]),_optionalChain([lastLine,"optionalAccess",_6=>_6.lineNumber]));lastLine.replaceLastChunk(_optionalChain([newLines,"access",_7=>_7[0],"optionalAccess",_8=>_8.chunks])),this.lines[lastLineIndex]=lastLine,this.lines.push(...newLines.slice(1))}else this.lines=this.processLines(text);return this.text=text,this.lines}__init3(){this.processLines=(text,modifiers={},startingLineNumber=1)=>{const lines=[];let currentModifiers=modifiers,currentLineNumber=startingLineNumber,prevIndex=0;for(newlineRegex.lastIndex=0;;){const match=newlineRegex.exec(text);if(!match){const chunks=this.processText(text.slice(prevIndex),currentModifiers);return lines.push(new AnsiLine(currentLineNumber,chunks)),lines}const line=text.slice(prevIndex,match.index);prevIndex=match.index+match[0].length;const chunks=this.processText(line,currentModifiers);lines.push(new AnsiLine(currentLineNumber,chunks)),currentModifiers=_nullishCoalesce(chunks[chunks.length-1].modifiers,(()=>currentModifiers)),currentLineNumber+=1}}}__init4(){this.processText=(fullText,modifiers)=>{const chunks=[];let currentModifiers=modifiers,prevIndex=0;for(ansiRegex.lastIndex=0;;){const match=ansiRegex.exec(fullText);if(!match)return chunks.push({text:fullText.slice(prevIndex),modifiers:currentModifiers}),chunks;const text=fullText.slice(prevIndex,match.index);chunks.push({text:text,modifiers:currentModifiers}),prevIndex=match.index+match[0].length,currentModifiers=this.processCode(match[0],currentModifiers)}}}__init5(){this.processCode=(code,modifiers)=>_nullishCoalesce(_optionalChain([codeModifiers,"access",_9=>_9[code],"optionalCall",_10=>_10(modifiers)]),(()=>modifiers))}}var reactHotLoader,leaveModule;reactHotLoader=__webpack_require__(1).default,leaveModule=__webpack_require__(1).leaveModule,reactHotLoader&&(reactHotLoader.register(ansiRegex,"ansiRegex","/home/runner/work/backstage/backstage/packages/core-components/src/components/LogViewer/AnsiProcessor.ts"),reactHotLoader.register(newlineRegex,"newlineRegex","/home/runner/work/backstage/backstage/packages/core-components/src/components/LogViewer/AnsiProcessor.ts"),reactHotLoader.register(codeModifiers,"codeModifiers","/home/runner/work/backstage/backstage/packages/core-components/src/components/LogViewer/AnsiProcessor.ts"),reactHotLoader.register(AnsiLine,"AnsiLine","/home/runner/work/backstage/backstage/packages/core-components/src/components/LogViewer/AnsiProcessor.ts"),reactHotLoader.register(AnsiProcessor,"AnsiProcessor","/home/runner/work/backstage/backstage/packages/core-components/src/components/LogViewer/AnsiProcessor.ts"),leaveModule(module))}).call(this,__webpack_require__(3)(module))},3348:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return HEADER_SIZE})),__webpack_require__.d(__webpack_exports__,"b",(function(){return useStyles}));var enterModule,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(23),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27),_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(427),_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(505),_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(508),_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(828),_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(507),_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1588),_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1589),_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(502);(enterModule=__webpack_require__(1).enterModule)&&enterModule(module);const HEADER_SIZE=40,useStyles=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.a)((theme=>({root:{background:theme.palette.background.paper},header:{height:HEADER_SIZE,display:"flex",alignItems:"center",justifyContent:"flex-end"},log:{fontFamily:'"Monaco", monospace',fontSize:theme.typography.pxToRem(12)},line:{position:"relative",whiteSpace:"pre","&:hover":{background:theme.palette.action.hover}},lineSelected:{background:theme.palette.action.selected,"&:hover":{background:theme.palette.action.selected}},lineCopyButton:{position:"absolute",paddingTop:0,paddingBottom:0},lineNumber:{display:"inline-block",textAlign:"end",width:60,marginRight:theme.spacing(1),cursor:"pointer"},textHighlight:{background:Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.a)(theme.palette.info.main,.15)},textSelectedHighlight:{background:Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.a)(theme.palette.info.main,.4)},modifierBold:{fontWeight:theme.typography.fontWeightBold},modifierItalic:{fontStyle:"italic"},modifierUnderline:{textDecoration:"underline"},modifierForegroundBlack:{color:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__.a.black},modifierForegroundRed:{color:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__.a[500]},modifierForegroundGreen:{color:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_4__.a[500]},modifierForegroundYellow:{color:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__.a[500]},modifierForegroundBlue:{color:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.a[500]},modifierForegroundMagenta:{color:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__.a[500]},modifierForegroundCyan:{color:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__.a[500]},modifierForegroundWhite:{color:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__.a.white},modifierForegroundGrey:{color:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__.a[500]},modifierBackgroundBlack:{background:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__.a.black},modifierBackgroundRed:{background:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__.a[500]},modifierBackgroundGreen:{background:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_4__.a[500]},modifierBackgroundYellow:{background:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__.a[500]},modifierBackgroundBlue:{background:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.a[500]},modifierBackgroundMagenta:{background:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__.a[500]},modifierBackgroundCyan:{background:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__.a[500]},modifierBackgroundWhite:{background:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__.a.white},modifierBackgroundGrey:{background:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__.a[500]}})),{name:"BackstageLogViewer"});var reactHotLoader,leaveModule;reactHotLoader=__webpack_require__(1).default,leaveModule=__webpack_require__(1).leaveModule,reactHotLoader&&(reactHotLoader.register(HEADER_SIZE,"HEADER_SIZE","/home/runner/work/backstage/backstage/packages/core-components/src/components/LogViewer/styles.ts"),reactHotLoader.register(useStyles,"useStyles","/home/runner/work/backstage/backstage/packages/core-components/src/components/LogViewer/styles.ts"),leaveModule(module))}).call(this,__webpack_require__(3)(module))},3349:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return LogLine}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),lodash_startCase__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1067),lodash_startCase__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_startCase__WEBPACK_IMPORTED_MODULE_1__),classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(63),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);var enterModule,reactHotLoader,leaveModule;function getModifierClasses(classes,modifiers){const classNames=new Array;if(modifiers.bold&&classNames.push(classes.modifierBold),modifiers.italic&&classNames.push(classes.modifierItalic),modifiers.underline&&classNames.push(classes.modifierUnderline),modifiers.foreground){const key=`modifierForeground${lodash_startCase__WEBPACK_IMPORTED_MODULE_1___default()(modifiers.foreground)}`;classNames.push(classes[key])}if(modifiers.background){const key=`modifierBackground${lodash_startCase__WEBPACK_IMPORTED_MODULE_1___default()(modifiers.background)}`;classNames.push(classes[key])}return classNames.length>0?classNames.join(" "):void 0}function findSearchResults(text,searchText){if(!searchText||!text.includes(searchText))return;const searchResults=new Array;let offset=0;for(;;){const start=text.indexOf(searchText,offset);if(-1===start)break;const end=start+searchText.length;searchResults.push({start:start,end:end}),offset=end}return searchResults}function calculateHighlightedChunks(line,searchText){const results=findSearchResults(line.text,searchText);if(!results)return line.chunks;const chunks=new Array;let lineOffset=0,resultIndex=0,result=results[resultIndex];for(const chunk of line.chunks){const{text:text,modifiers:modifiers}=chunk;if(!result||lineOffset+text.length<result.start){chunks.push(chunk),lineOffset+=text.length;continue}let localOffset=0;for(;result;){const localStart=Math.max(result.start-lineOffset,0);if(localStart>text.length)break;const localEnd=Math.min(result.end-lineOffset,text.length);localStart>localOffset&&chunks.push({text:text.slice(localOffset,localStart),modifiers:modifiers});localEnd>localStart&&chunks.push({modifiers:modifiers,highlight:resultIndex,text:text.slice(localStart,localEnd)}),localOffset=localEnd;if(!(result.end-lineOffset===localEnd))break;resultIndex+=1,result=results[resultIndex]}localOffset<text.length&&chunks.push({text:text.slice(localOffset),modifiers:modifiers}),lineOffset+=text.length}return chunks}function LogLine({line:line,classes:classes,searchText:searchText,highlightResultIndex:highlightResultIndex}){const chunks=Object(react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>calculateHighlightedChunks(line,searchText)),[line,searchText]),elements=Object(react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>chunks.map((({text:text,modifiers:modifiers,highlight:highlight},index)=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{key:index,className:classnames__WEBPACK_IMPORTED_MODULE_2___default()(getModifierClasses(classes,modifiers),void 0!==highlight&&(highlight===highlightResultIndex?classes.textSelectedHighlight:classes.textHighlight)),__self:this,__source:{fileName:"/home/runner/work/backstage/backstage/packages/core-components/src/components/LogViewer/LogLine.tsx",lineNumber:161}},text)))),[chunks,highlightResultIndex,classes]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,elements)}(enterModule=__webpack_require__(1).enterModule)&&enterModule(module),reactHotLoader=__webpack_require__(1).default,leaveModule=__webpack_require__(1).leaveModule,reactHotLoader&&(reactHotLoader.register(getModifierClasses,"getModifierClasses","/home/runner/work/backstage/backstage/packages/core-components/src/components/LogViewer/LogLine.tsx"),reactHotLoader.register(findSearchResults,"findSearchResults","/home/runner/work/backstage/backstage/packages/core-components/src/components/LogViewer/LogLine.tsx"),reactHotLoader.register(calculateHighlightedChunks,"calculateHighlightedChunks","/home/runner/work/backstage/backstage/packages/core-components/src/components/LogViewer/LogLine.tsx"),reactHotLoader.register(LogLine,"LogLine","/home/runner/work/backstage/backstage/packages/core-components/src/components/LogViewer/LogLine.tsx"),leaveModule(module));try{LogLine.displayName="LogLine",LogLine.__docgenInfo={description:"",displayName:"LogLine",props:{line:{defaultValue:null,description:"",name:"line",required:!0,type:{name:"AnsiLine"}},classes:{defaultValue:null,description:"",name:"classes",required:!0,type:{name:'ClassNameMap<"header" | "line" | "log" | "root" | "lineSelected" | "lineCopyButton" | "lineNumber" | "textHighlight" | "textSelectedHighlight" | "modifierBold" | "modifierItalic" | "modifierUnderline" | ... 17 more ... | "modifierBackgroundGrey">'}},searchText:{defaultValue:null,description:"",name:"searchText",required:!0,type:{name:"string"}},highlightResultIndex:{defaultValue:null,description:"",name:"highlightResultIndex",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../core-components/src/components/LogViewer/LogLine.tsx#LogLine"]={docgenInfo:LogLine.__docgenInfo,name:"LogLine",path:"../core-components/src/components/LogViewer/LogLine.tsx#LogLine"})}catch(__react_docgen_typescript_loader_error){}}).call(this,__webpack_require__(3)(module))},3350:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return LogViewerControls}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(103),_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(336),_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(16),_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(798),_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_4__),_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(621),_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_5__),_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(368),_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_6__);const _jsxFileName="/home/runner/work/backstage/backstage/packages/core-components/src/components/LogViewer/LogViewerControls.tsx";var enterModule,reactHotLoader,leaveModule;function LogViewerControls(props){const{resultCount:resultCount,resultIndexStep:resultIndexStep,toggleShouldFilter:toggleShouldFilter}=props,resultIndex=function _nullishCoalesce(lhs,rhsFn){return null!=lhs?lhs:rhsFn()}(props.resultIndex,(()=>0));return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,void 0!==resultCount&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__.a,{size:"small",onClick:()=>resultIndexStep(!0),__self:this,__source:{fileName:_jsxFileName,lineNumber:46}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_4___default.a,{__self:this,__source:{fileName:_jsxFileName,lineNumber:47}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.a,{__self:this,__source:{fileName:_jsxFileName,lineNumber:49}},Math.min(resultIndex+1,resultCount),"/",resultCount),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__.a,{size:"small",onClick:()=>resultIndexStep(),__self:this,__source:{fileName:_jsxFileName,lineNumber:52}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_5___default.a,{__self:this,__source:{fileName:_jsxFileName,lineNumber:53}}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__.a,{size:"small",variant:"standard",placeholder:"Search",value:props.searchInput,onKeyPress:event=>{"Enter"===event.key&&(event.metaKey||event.ctrlKey||event.altKey?toggleShouldFilter():resultIndexStep(event.shiftKey))},onChange:e=>props.setSearchInput(e.target.value),__self:this,__source:{fileName:_jsxFileName,lineNumber:57}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__.a,{size:"small",onClick:toggleShouldFilter,__self:this,__source:{fileName:_jsxFileName,lineNumber:65}},props.shouldFilter?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_6___default.a,{color:"primary",__self:this,__source:{fileName:_jsxFileName,lineNumber:67}}):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_6___default.a,{color:"disabled",__self:this,__source:{fileName:_jsxFileName,lineNumber:69}})))}(enterModule=__webpack_require__(1).enterModule)&&enterModule(module),reactHotLoader=__webpack_require__(1).default,leaveModule=__webpack_require__(1).leaveModule,reactHotLoader&&(reactHotLoader.register(LogViewerControls,"LogViewerControls","/home/runner/work/backstage/backstage/packages/core-components/src/components/LogViewer/LogViewerControls.tsx"),leaveModule(module));try{LogViewerControls.displayName="LogViewerControls",LogViewerControls.__docgenInfo={description:"",displayName:"LogViewerControls",props:{lines:{defaultValue:null,description:"",name:"lines",required:!0,type:{name:"AnsiLine[]"}},searchText:{defaultValue:null,description:"",name:"searchText",required:!0,type:{name:"string"}},searchInput:{defaultValue:null,description:"",name:"searchInput",required:!0,type:{name:"string"}},setSearchInput:{defaultValue:null,description:"",name:"setSearchInput",required:!0,type:{name:"(searchInput: string) => void"}},shouldFilter:{defaultValue:null,description:"",name:"shouldFilter",required:!0,type:{name:"boolean"}},toggleShouldFilter:{defaultValue:null,description:"",name:"toggleShouldFilter",required:!0,type:{name:"() => void"}},resultCount:{defaultValue:null,description:"",name:"resultCount",required:!0,type:{name:"number"}},resultIndex:{defaultValue:null,description:"",name:"resultIndex",required:!0,type:{name:"number"}},resultIndexStep:{defaultValue:null,description:"",name:"resultIndexStep",required:!0,type:{name:"(decrement?: boolean) => void"}},resultLine:{defaultValue:null,description:"",name:"resultLine",required:!0,type:{name:"number"}},resultLineIndex:{defaultValue:null,description:"",name:"resultLineIndex",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../core-components/src/components/LogViewer/LogViewerControls.tsx#LogViewerControls"]={docgenInfo:LogViewerControls.__docgenInfo,name:"LogViewerControls",path:"../core-components/src/components/LogViewer/LogViewerControls.tsx#LogViewerControls"})}catch(__react_docgen_typescript_loader_error){}}).call(this,__webpack_require__(3)(module))},3351:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return useLogViewerSearch}));var enterModule,reactHotLoader,leaveModule,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react_use__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3550);function _optionalChain(ops){let lastAccessLHS,value=ops[0],i=1;for(;i<ops.length;){const op=ops[i],fn=ops[i+1];if(i+=2,("optionalAccess"===op||"optionalCall"===op)&&null==value)return;"access"===op||"optionalAccess"===op?(lastAccessLHS=value,value=fn(value)):"call"!==op&&"optionalCall"!==op||(value=fn(((...args)=>value.call(lastAccessLHS,...args))),lastAccessLHS=void 0)}return value}function applySearchFilter(lines,searchText){if(!searchText)return{lines:lines};const matchingLines=[],searchResults=[];for(const line of lines)if(line.text.includes(searchText)){matchingLines.push(line);let offset=0,lineResultIndex=0;for(;;){const start=line.text.indexOf(searchText,offset);if(-1===start)break;searchResults.push({lineNumber:line.lineNumber,lineIndex:lineResultIndex++}),offset=start+searchText.length}}return{lines:matchingLines,results:searchResults}}function useLogViewerSearch(lines){const[searchInput,setSearchInput]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),searchText=searchInput.toLocaleLowerCase("en-US"),[resultIndex,setResultIndex]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),[shouldFilter,toggleShouldFilter]=Object(react_use__WEBPACK_IMPORTED_MODULE_1__.a)(!1),filter=Object(react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>applySearchFilter(lines,searchText)),[lines,searchText]),searchResult=filter.results?filter.results[Math.min(resultIndex,filter.results.length-1)]:void 0,resultCount=_optionalChain([filter,"access",_=>_.results,"optionalAccess",_2=>_2.length]);return{lines:shouldFilter?filter.lines:lines,searchText:searchText,searchInput:searchInput,setSearchInput:setSearchInput,shouldFilter:shouldFilter,toggleShouldFilter:toggleShouldFilter,resultCount:resultCount,resultIndex:resultIndex,resultIndexStep:decrement=>{if(decrement){if(void 0!==resultCount){const next=Math.min(resultIndex-1,resultCount-2);setResultIndex(next<0?resultCount-1:next)}}else if(void 0!==resultCount){const next=resultIndex+1;setResultIndex(next>=resultCount?0:next)}},resultLine:_optionalChain([searchResult,"optionalAccess",_3=>_3.lineNumber]),resultLineIndex:_optionalChain([searchResult,"optionalAccess",_4=>_4.lineIndex])}}(enterModule=__webpack_require__(1).enterModule)&&enterModule(module),reactHotLoader=__webpack_require__(1).default,leaveModule=__webpack_require__(1).leaveModule,reactHotLoader&&(reactHotLoader.register(applySearchFilter,"applySearchFilter","/home/runner/work/backstage/backstage/packages/core-components/src/components/LogViewer/useLogViewerSearch.tsx"),reactHotLoader.register(useLogViewerSearch,"useLogViewerSearch","/home/runner/work/backstage/backstage/packages/core-components/src/components/LogViewer/useLogViewerSearch.tsx"),leaveModule(module));try{useLogViewerSearch.displayName="useLogViewerSearch",useLogViewerSearch.__docgenInfo={description:"",displayName:"useLogViewerSearch",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../core-components/src/components/LogViewer/useLogViewerSearch.tsx#useLogViewerSearch"]={docgenInfo:useLogViewerSearch.__docgenInfo,name:"useLogViewerSearch",path:"../core-components/src/components/LogViewer/useLogViewerSearch.tsx#useLogViewerSearch"})}catch(__react_docgen_typescript_loader_error){}}).call(this,__webpack_require__(3)(module))},3352:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return useLogViewerSelection}));var enterModule,reactHotLoader,leaveModule,_backstage_core_plugin_api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react_use__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3238);function _optionalChain(ops){let lastAccessLHS,value=ops[0],i=1;for(;i<ops.length;){const op=ops[i],fn=ops[i+1];if(i+=2,("optionalAccess"===op||"optionalCall"===op)&&null==value)return;"access"===op||"optionalAccess"===op?(lastAccessLHS=value,value=fn(value)):"call"!==op&&"optionalCall"!==op||(value=fn(((...args)=>value.call(lastAccessLHS,...args))),lastAccessLHS=void 0)}return value}function useLogViewerSelection(lines){const errorApi=Object(_backstage_core_plugin_api__WEBPACK_IMPORTED_MODULE_0__.useApi)(_backstage_core_plugin_api__WEBPACK_IMPORTED_MODULE_0__.errorApiRef),[sel,setSelection]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(),start=sel?Math.min(sel.start,sel.end):void 0,end=sel?Math.max(sel.start,sel.end):void 0,[{error:error},copyToClipboard]=Object(react_use__WEBPACK_IMPORTED_MODULE_2__.a)();return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{error&&errorApi.post(error)}),[error,errorApi]),{shouldShowButton:line=>start===line||end===line,isSelected:line=>!!sel&&(start<=line&&line<=end),setSelection(line,add){setSelection(add?s=>s?{start:s.start,end:line}:{start:line,end:line}:s=>_optionalChain([s,"optionalAccess",_=>_.start])===line&&_optionalChain([s,"optionalAccess",_2=>_2.end])===line?void 0:{start:line,end:line})},copySelection(){if(sel){const copyText=lines.slice(Math.min(sel.start,sel.end)-1,Math.max(sel.start,sel.end)).map((l=>l.chunks.map((c=>c.text)).join(""))).join("\n");copyToClipboard(copyText),setSelection(void 0)}}}}(enterModule=__webpack_require__(1).enterModule)&&enterModule(module),reactHotLoader=__webpack_require__(1).default,leaveModule=__webpack_require__(1).leaveModule,reactHotLoader&&(reactHotLoader.register(useLogViewerSelection,"useLogViewerSelection","/home/runner/work/backstage/backstage/packages/core-components/src/components/LogViewer/useLogViewerSelection.tsx"),leaveModule(module));try{useLogViewerSelection.displayName="useLogViewerSelection",useLogViewerSelection.__docgenInfo={description:"",displayName:"useLogViewerSelection",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../core-components/src/components/LogViewer/useLogViewerSelection.tsx#useLogViewerSelection"]={docgenInfo:useLogViewerSelection.__docgenInfo,name:"useLogViewerSelection",path:"../core-components/src/components/LogViewer/useLogViewerSelection.tsx#useLogViewerSelection"})}catch(__react_docgen_typescript_loader_error){}}).call(this,__webpack_require__(3)(module))}}]);