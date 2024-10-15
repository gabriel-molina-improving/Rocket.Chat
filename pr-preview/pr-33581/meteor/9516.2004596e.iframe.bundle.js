"use strict";(self.webpackChunk_rocket_chat_meteor=self.webpackChunk_rocket_chat_meteor||[]).push([[9516],{"./client/components/CustomScrollbars/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{z:function(){return CustomScrollbars_CustomScrollbars},Z:function(){return CustomScrollbars_VirtuosoScrollbars}});var fuselage=__webpack_require__("./node_modules/@rocket.chat/fuselage/index.js"),lib=__webpack_require__("./node_modules/rc-scrollbars/lib/index.js"),react=__webpack_require__("./node_modules/react/index.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["children","style","onScroll","overflowX","renderView"],_excluded2=["style"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var styleDefault={flexGrow:1,overflowY:"hidden"},CustomScrollbars=(0,react.forwardRef)((function CustomScrollbars(_ref,ref){var children=_ref.children,style=_ref.style,onScroll=_ref.onScroll,overflowX=_ref.overflowX,renderView=_ref.renderView,props=_objectWithoutProperties(_ref,_excluded),scrollbarsStyle=(0,react.useMemo)((function(){return _objectSpread(_objectSpread({},style),styleDefault)}),[style]),refSetter=(0,react.useCallback)((function(scrollbarRef){if(ref&&scrollbarRef){var _scrollbarRef$view;if("function"==typeof ref)return void ref(null!==(_scrollbarRef$view=scrollbarRef.view)&&void 0!==_scrollbarRef$view?_scrollbarRef$view:null);ref.current=scrollbarRef.view}}),[ref]);return react.createElement(lib.ur,_extends({},props,{autoHide:!0,autoHideTimeout:2e3,autoHideDuration:500,style:scrollbarsStyle,onScrollFrame:onScroll,renderView:renderView,renderTrackHorizontal:overflowX?void 0:function(props){return react.createElement("div",_extends({},props,{className:"track-horizontal",style:{display:"none"}}))},renderThumbVertical:function renderThumbVertical(_ref2){var style=_ref2.style,props=_objectWithoutProperties(_ref2,_excluded2);return react.createElement("div",_extends({},props,{style:_objectSpread(_objectSpread({},style),{},{backgroundColor:fuselage.Palette.stroke["stroke-dark"].toString(),borderRadius:"4px"})}))},children:children,ref:refSetter}))})),CustomScrollbars_CustomScrollbars=(0,react.memo)(CustomScrollbars);CustomScrollbars.__docgenInfo={description:"",methods:[],displayName:"CustomScrollbars"};var VirtuosoScrollbars_excluded=["style","children"];function VirtuosoScrollbars_extends(){return VirtuosoScrollbars_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},VirtuosoScrollbars_extends.apply(null,arguments)}var VirtuosoScrollbars=(0,react.forwardRef)((function VirtuosoScrollbars(_ref,ref){var style=_ref.style,children=_ref.children,props=function VirtuosoScrollbars_objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function VirtuosoScrollbars_objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,VirtuosoScrollbars_excluded);return react.createElement(CustomScrollbars_CustomScrollbars,{style:style,ref:ref,renderView:function renderView(viewProps){return react.createElement("div",VirtuosoScrollbars_extends({},viewProps,props,{tabIndex:-1}))}},children)})),CustomScrollbars_VirtuosoScrollbars=VirtuosoScrollbars;VirtuosoScrollbars.__docgenInfo={description:"",methods:[],displayName:"VirtuosoScrollbars"}},"./client/components/Header/HeaderToolbarAction.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _rocket_chat_ui_client__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/ui-client/dist/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var HeaderToolbarAction=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function HeaderToolbarAction(props,ref){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_rocket_chat_ui_client__WEBPACK_IMPORTED_MODULE_0__.TW,{feature:"newNavigation"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_rocket_chat_ui_client__WEBPACK_IMPORTED_MODULE_0__.sl,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_rocket_chat_ui_client__WEBPACK_IMPORTED_MODULE_0__.jJ,_extends({ref:ref},props))),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_rocket_chat_ui_client__WEBPACK_IMPORTED_MODULE_0__.Uq,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_rocket_chat_ui_client__WEBPACK_IMPORTED_MODULE_0__.P7,_extends({ref:ref},props))))}));__webpack_exports__.A=(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(HeaderToolbarAction),HeaderToolbarAction.__docgenInfo={description:"",methods:[],displayName:"HeaderToolbarAction"}},"./client/components/Header/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Y9:function(){return Header_Header},vr:function(){return Header_HeaderAvatar},V:function(){return Header_HeaderContent},LY:function(){return Header_HeaderContentRow},d:function(){return Header_HeaderIcon},p4:function(){return Header_HeaderState},AZ:function(){return Header_HeaderSubtitle},ot:function(){return Header_HeaderTag},r7:function(){return Header_HeaderTagIcon},vO:function(){return Header_HeaderTagSkeleton},gY:function(){return Header_HeaderTitle},yh:function(){return Header_HeaderTitleButton},NV:function(){return Header_HeaderToolbar},jJ:function(){return HeaderToolbarAction.A},M9:function(){return Header_HeaderToolbarActionBadge},ym:function(){return Header_HeaderToolbarDivider}});var dist=__webpack_require__("../../packages/ui-client/dist/index.js"),react=__webpack_require__("./node_modules/react/index.js"),Header=function Header(props){return react.createElement(dist.TW,{feature:"newNavigation"},react.createElement(dist.sl,null,react.createElement(dist.Y9,props)),react.createElement(dist.Uq,null,react.createElement(dist.M3,props)))},Header_Header=(0,react.memo)(Header);Header.__docgenInfo={description:"",methods:[],displayName:"Header"};var HeaderAvatar=function HeaderAvatar(props){return react.createElement(dist.TW,{feature:"newNavigation"},react.createElement(dist.sl,null,react.createElement(dist.vr,props)),react.createElement(dist.Uq,null,react.createElement(dist.nv,props)))},Header_HeaderAvatar=(0,react.memo)(HeaderAvatar);HeaderAvatar.__docgenInfo={description:"",methods:[],displayName:"HeaderAvatar"};var HeaderContent=function HeaderContent(props){return react.createElement(dist.TW,{feature:"newNavigation"},react.createElement(dist.sl,null,react.createElement(dist.V,props)),react.createElement(dist.Uq,null,react.createElement(dist.$F,props)))},Header_HeaderContent=(0,react.memo)(HeaderContent);HeaderContent.__docgenInfo={description:"",methods:[],displayName:"HeaderContent"};var HeaderContentRow=function HeaderContentRow(props){return react.createElement(dist.TW,{feature:"newNavigation"},react.createElement(dist.sl,null,react.createElement(dist.LY,props)),react.createElement(dist.Uq,null,react.createElement(dist.LA,props)))},Header_HeaderContentRow=(0,react.memo)(HeaderContentRow);HeaderContentRow.__docgenInfo={description:"",methods:[],displayName:"HeaderContentRow"};var HeaderDivider=function HeaderDivider(){return react.createElement(dist.TW,{feature:"newNavigation"},react.createElement(dist.sl,null,react.createElement(dist.Lf,null)),react.createElement(dist.Uq,null,react.createElement(dist.xI,null)))};HeaderDivider.__docgenInfo={description:"",methods:[],displayName:"HeaderDivider"};var HeaderIcon=function HeaderIcon(props){return react.createElement(dist.TW,{feature:"newNavigation"},react.createElement(dist.sl,null,react.createElement(dist.d,props)),react.createElement(dist.Uq,null,react.createElement(dist.nj,props)))},Header_HeaderIcon=(0,react.memo)(HeaderIcon);HeaderIcon.__docgenInfo={description:"",methods:[],displayName:"HeaderIcon"};var HeaderState=function HeaderState(props){return react.createElement(dist.TW,{feature:"newNavigation"},react.createElement(dist.sl,null,react.createElement(dist.p4,props)),react.createElement(dist.Uq,null,react.createElement(dist.Pj,props)))},Header_HeaderState=(0,react.memo)(HeaderState);HeaderState.__docgenInfo={description:"",methods:[],displayName:"HeaderState"};var HeaderSubtitle=function HeaderSubtitle(props){return react.createElement(dist.TW,{feature:"newNavigation"},react.createElement(dist.sl,null,react.createElement(dist.AZ,props)),react.createElement(dist.Uq,null,react.createElement(dist.Y3,props)))},Header_HeaderSubtitle=(0,react.memo)(HeaderSubtitle);HeaderSubtitle.__docgenInfo={description:"",methods:[],displayName:"HeaderSubtitle"};var HeaderTag=function HeaderTag(props){return react.createElement(dist.TW,{feature:"newNavigation"},react.createElement(dist.sl,null,react.createElement(dist.ot,props)),react.createElement(dist.Uq,null,react.createElement(dist._Y,props)))},Header_HeaderTag=(0,react.memo)(HeaderTag);HeaderTag.__docgenInfo={description:"",methods:[],displayName:"HeaderTag"};var HeaderTagIcon=function HeaderTagIcon(props){return react.createElement(dist.TW,{feature:"newNavigation"},react.createElement(dist.sl,null,react.createElement(dist.r7,props)),react.createElement(dist.Uq,null,react.createElement(dist.Tz,props)))},Header_HeaderTagIcon=(0,react.memo)(HeaderTagIcon);HeaderTagIcon.__docgenInfo={description:"",methods:[],displayName:"HeaderTagIcon"};var HeaderTagSkeleton=function HeaderTagSkeleton(){return react.createElement(dist.TW,{feature:"newNavigation"},react.createElement(dist.sl,null,react.createElement(dist.vO,null)),react.createElement(dist.Uq,null,react.createElement(dist.H_,null)))},Header_HeaderTagSkeleton=(0,react.memo)(HeaderTagSkeleton);HeaderTagSkeleton.__docgenInfo={description:"",methods:[],displayName:"HeaderTagSkeleton"};var HeaderTitle=function HeaderTitle(props){return react.createElement(dist.TW,{feature:"newNavigation"},react.createElement(dist.sl,null,react.createElement(dist.gY,props)),react.createElement(dist.Uq,null,react.createElement(dist.GZ,props)))},Header_HeaderTitle=(0,react.memo)(HeaderTitle);HeaderTitle.__docgenInfo={description:"",methods:[],displayName:"HeaderTitle"};var HeaderTitleButton=function HeaderTitleButton(props){return react.createElement(dist.TW,{feature:"newNavigation"},react.createElement(dist.sl,null,react.createElement(dist.yh,props)),react.createElement(dist.Uq,null,react.createElement(dist.GJ,props)))},Header_HeaderTitleButton=(0,react.memo)(HeaderTitleButton);HeaderTitleButton.__docgenInfo={description:"",methods:[],displayName:"HeaderTitleButton"};var HeaderToolbar=function HeaderToolbar(props){return react.createElement(dist.TW,{feature:"newNavigation"},react.createElement(dist.sl,null,react.createElement(dist.NV,props)),react.createElement(dist.Uq,null,react.createElement(dist.Rb,props)))},Header_HeaderToolbar=(0,react.memo)(HeaderToolbar);HeaderToolbar.__docgenInfo={description:"",methods:[],displayName:"HeaderToolbar"};var HeaderToolbarAction=__webpack_require__("./client/components/Header/HeaderToolbarAction.tsx"),HeaderToolbarActionBadge=function HeaderToolbarActionBadge(props){return react.createElement(dist.TW,{feature:"newNavigation"},react.createElement(dist.sl,null,react.createElement(dist.M9,props)),react.createElement(dist.Uq,null,react.createElement(dist._W,props)))},Header_HeaderToolbarActionBadge=(0,react.memo)(HeaderToolbarActionBadge);HeaderToolbarActionBadge.__docgenInfo={description:"",methods:[],displayName:"HeaderToolbarActionBadge"};var HeaderToolbarDivider=function HeaderToolbarDivider(){return react.createElement(dist.TW,{feature:"newNavigation"},react.createElement(dist.sl,null,react.createElement(dist.ym,null)),react.createElement(dist.Uq,null,react.createElement(dist.Gi,null)))},Header_HeaderToolbarDivider=(0,react.memo)(HeaderToolbarDivider);HeaderToolbarDivider.__docgenInfo={description:"",methods:[],displayName:"HeaderToolbarDivider"}},"./client/components/Page/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{YW:function(){return Page_Page},TK:function(){return Page_PageContent},FM:function(){return Page_PageFooter},zY:function(){return Page_PageHeader},YV:function(){return Page_PageScrollableContent},CA:function(){return Page_PageScrollableContentWithShadow}});var fuselage=__webpack_require__("./node_modules/@rocket.chat/fuselage/index.js"),react=__webpack_require__("./node_modules/react/index.js"),Page_PageContext=(0,react.createContext)([!1,function(){}]),_excluded=["background"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var Page=function Page(_ref){var _ref$background=_ref.background,background=void 0===_ref$background?"light":_ref$background,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),_useState2=_slicedToArray((0,react.useState)(!1),2),border=_useState2[0],setBorder=_useState2[1];return react.createElement(Page_PageContext.Provider,{value:[border,setBorder]},react.createElement(fuselage.Box,_extends({is:"section",display:"flex",flexDirection:"column",flexGrow:1,flexShrink:1,height:"full",overflow:"hidden",bg:background,color:"default"},props)))},Page_Page=Page;function PageContent_extends(){return PageContent_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},PageContent_extends.apply(null,arguments)}Page.__docgenInfo={description:"",methods:[],displayName:"Page",props:{background:{required:!1,tsType:{name:"union",raw:"'light' | 'tint' | 'neutral' | 'room'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'tint'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'room'"}]},description:"",defaultValue:{value:"'light'",computed:!1}}}};var PageContent=(0,react.forwardRef)((function PageContent(props,ref){return react.createElement(fuselage.Box,PageContent_extends({ref:ref,paddingInline:24,display:"flex",flexDirection:"column",overflowY:"hidden",height:"full"},props))})),Page_PageContent=PageContent;PageContent.__docgenInfo={description:"",methods:[],displayName:"PageContent"};var PageFooter_excluded=["children","isDirty"];function PageFooter_extends(){return PageFooter_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},PageFooter_extends.apply(null,arguments)}var PageFooter=function PageFooter(_ref){var children=_ref.children,isDirty=_ref.isDirty,props=function PageFooter_objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function PageFooter_objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,PageFooter_excluded);return react.createElement(fuselage.AnimatedVisibility,{visibility:isDirty?fuselage.AnimatedVisibility.VISIBLE:fuselage.AnimatedVisibility.HIDDEN},react.createElement(fuselage.Box,PageFooter_extends({elevation:"1",borderWidth:0,borderColor:"transparent",minHeight:"x64",pb:8},props),react.createElement(fuselage.Box,PageFooter_extends({height:"100%",marginInline:24,display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"end",color:"default"},props),children)))},Page_PageFooter=PageFooter;PageFooter.__docgenInfo={description:"",methods:[],displayName:"PageFooter",props:{isDirty:{required:!0,tsType:{name:"boolean"},description:""}}};var dist=__webpack_require__("../../packages/ui-client/dist/index.js"),ui_contexts_dist=__webpack_require__("../../packages/ui-contexts/dist/index.js"),Header=__webpack_require__("./client/components/Header/index.ts"),SidebarToggler=__webpack_require__("./client/components/SidebarToggler/index.ts"),PageHeader_excluded=["children","title","onClickBack","borderBlockEndColor"];function PageHeader_extends(){return PageHeader_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},PageHeader_extends.apply(null,arguments)}function PageHeader_slicedToArray(r,e){return function PageHeader_arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function PageHeader_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function PageHeader_unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return PageHeader_arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?PageHeader_arrayLikeToArray(r,a):void 0}}(r,e)||function PageHeader_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function PageHeader_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var PageHeader=function PageHeader(_ref){var _ref$children=_ref.children,children=void 0===_ref$children?void 0:_ref$children,title=_ref.title,onClickBack=_ref.onClickBack,borderBlockEndColor=_ref.borderBlockEndColor,props=function PageHeader_objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function PageHeader_objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,PageHeader_excluded),t=(0,ui_contexts_dist.useTranslation)(),border=PageHeader_slicedToArray((0,react.useContext)(Page_PageContext),1)[0],isMobile=(0,ui_contexts_dist.useLayout)().isMobile;return(0,dist.rN)("string"==typeof title?title:void 0),react.createElement(fuselage.Box,PageHeader_extends({is:"header",borderBlockEndWidth:"default",pb:8,borderBlockEndColor:(null!=borderBlockEndColor?borderBlockEndColor:border)?"extra-light":"transparent"},props),react.createElement(fuselage.Box,{height:"100%",marginInline:24,minHeight:"x64",display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",color:"default"},isMobile&&react.createElement(Header.NV,null,react.createElement(SidebarToggler.A,null)),onClickBack&&react.createElement(fuselage.IconButton,{small:!0,mie:8,icon:"arrow-back",onClick:onClickBack,title:t("Back")}),react.createElement(fuselage.Box,{is:"h1",fontScale:"h2",flexGrow:1,"data-qa-type":"PageHeader-title"},title),children))},Page_PageHeader=PageHeader;PageHeader.__docgenInfo={description:"",methods:[],displayName:"PageHeader",props:{title:{required:!0,tsType:{name:"ReactNode"},description:""},onClickBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},borderBlockEndColor:{required:!1,tsType:{name:"string"},description:""},children:{defaultValue:{value:"undefined",computed:!0},required:!1}}};var CustomScrollbars=__webpack_require__("./client/components/CustomScrollbars/index.ts"),PageScrollableContent_excluded=["onScrollContent","borderBlockEndColor"];function PageScrollableContent_extends(){return PageScrollableContent_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},PageScrollableContent_extends.apply(null,arguments)}var PageScrollableContent=(0,react.forwardRef)((function PageScrollableContent(_ref,ref){var onScrollContent=_ref.onScrollContent,borderBlockEndColor=_ref.borderBlockEndColor,props=function PageScrollableContent_objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function PageScrollableContent_objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,PageScrollableContent_excluded);return react.createElement(fuselage.Box,{height:"50vh",display:"flex",flexShrink:1,flexDirection:"column",flexGrow:1,overflow:"hidden",borderBlockEndColor:borderBlockEndColor},react.createElement(CustomScrollbars.z,{onScroll:onScrollContent,ref:ref},react.createElement(fuselage.Box,PageScrollableContent_extends({paddingBlock:16,paddingInline:24,display:"flex",flexDirection:"column"},props))))})),Page_PageScrollableContent=PageScrollableContent;function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}PageScrollableContent.__docgenInfo={description:"",methods:[],displayName:"PageScrollableContent"};var PageScrollableContentWithShadow_excluded=["onScrollContent"],_excluded2=["top"];function PageScrollableContentWithShadow_extends(){return PageScrollableContentWithShadow_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},PageScrollableContentWithShadow_extends.apply(null,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function PageScrollableContentWithShadow_slicedToArray(r,e){return function PageScrollableContentWithShadow_arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function PageScrollableContentWithShadow_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function PageScrollableContentWithShadow_unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return PageScrollableContentWithShadow_arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?PageScrollableContentWithShadow_arrayLikeToArray(r,a):void 0}}(r,e)||function PageScrollableContentWithShadow_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function PageScrollableContentWithShadow_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function PageScrollableContentWithShadow_objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function PageScrollableContentWithShadow_objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var PageScrollableContentWithShadow=function PageScrollableContentWithShadow(_ref){var _onScrollContent=_ref.onScrollContent,props=PageScrollableContentWithShadow_objectWithoutProperties(_ref,PageScrollableContentWithShadow_excluded),setBorder=PageScrollableContentWithShadow_slicedToArray((0,react.useContext)(Page_PageContext),2)[1];return react.createElement(Page_PageScrollableContent,PageScrollableContentWithShadow_extends({onScrollContent:function onScrollContent(_ref2){var top=_ref2.top,args=PageScrollableContentWithShadow_objectWithoutProperties(_ref2,_excluded2);setBorder(!!top),null==_onScrollContent||_onScrollContent(function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({top:top},args))}},props))},Page_PageScrollableContentWithShadow=PageScrollableContentWithShadow;PageScrollableContentWithShadow.__docgenInfo={description:"",methods:[],displayName:"PageScrollableContentWithShadow"}},"./client/components/SidebarToggler/SidebarTogglerButton.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return SidebarTogglerButton}});var _templateObject,fuselage=__webpack_require__("./node_modules/@rocket.chat/fuselage/index.js"),dist=__webpack_require__("../../packages/ui-contexts/dist/index.js"),react=__webpack_require__("./node_modules/react/index.js"),index_module=__webpack_require__("./node_modules/@rocket.chat/css-in-js/dist/index.module.js");var SidebarTogglerBadge=function SidebarTogglerBadge(_ref){var e,t,children=_ref.children;return react.createElement(fuselage.Box,{className:(0,index_module.css)(_templateObject||(e=["\n\t\t\tposition: absolute;\n\t\t\tz-index: 3;\n\t\t\ttop: -5px;\n\t\t\tright: 3px;\n\t\t"],t||(t=e.slice(0)),_templateObject=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))))},react.createElement(fuselage.Badge,{variant:"danger",children:children}))},SidebarToggler_SidebarTogglerBadge=SidebarTogglerBadge;SidebarTogglerBadge.__docgenInfo={description:"",methods:[],displayName:"SidebarTogglerBadge",props:{children:{required:!1,tsType:{name:"unknown"},description:""}}};var SideBarTogglerButton=function SideBarTogglerButton(_ref){var badge=_ref.badge,onClick=_ref.onClick,t=(0,dist.useTranslation)();return react.createElement(fuselage.Box,{position:"relative"},react.createElement(fuselage.IconButton,{icon:"burger-menu",small:!0,"aria-label":t("Open_sidebar"),marginInlineEnd:8,onClick:onClick}),badge&&react.createElement(SidebarToggler_SidebarTogglerBadge,null,badge))},SidebarTogglerButton=SideBarTogglerButton;SideBarTogglerButton.__docgenInfo={description:"",methods:[],displayName:"SideBarTogglerButton",props:{badge:{required:!1,tsType:{name:"union",raw:"number | unknown",elements:[{name:"number"},{name:"unknown"}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./client/components/SidebarToggler/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return SidebarToggler}});var index_module=__webpack_require__("./node_modules/@rocket.chat/fuselage-hooks/dist/index.module.js"),dist=__webpack_require__("../../packages/ui-contexts/dist/index.js"),react=__webpack_require__("./node_modules/react/index.js"),useEmbeddedLayout=__webpack_require__("./client/hooks/useEmbeddedLayout.ts"),SidebarTogglerButton=__webpack_require__("./client/components/SidebarToggler/SidebarTogglerButton.tsx"),SideBarToggler=function SideBarToggler(){var sidebar=(0,dist.useLayout)().sidebar,isLayoutEmbedded=(0,useEmbeddedLayout.a)(),unreadMessagesBadge=(0,dist.useSession)("unread"),toggleSidebar=(0,index_module.useEffectEvent)((function(){return sidebar.toggle()}));return react.createElement(SidebarTogglerButton.A,{onClick:toggleSidebar,badge:!isLayoutEmbedded&&unreadMessagesBadge&&unreadMessagesBadge})},SidebarToggler=(0,react.memo)(SideBarToggler);SideBarToggler.__docgenInfo={description:"",methods:[],displayName:"SideBarToggler"}},"./client/hooks/useEmbeddedLayout.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:function(){return useEmbeddedLayout}});var _rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/ui-contexts/dist/index.js"),useEmbeddedLayout=function useEmbeddedLayout(){return(0,_rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_0__.useLayout)().isEmbedded}}}]);