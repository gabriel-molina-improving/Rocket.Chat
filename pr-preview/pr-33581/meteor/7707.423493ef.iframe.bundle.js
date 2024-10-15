/*! For license information please see 7707.423493ef.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_rocket_chat_meteor=self.webpackChunk_rocket_chat_meteor||[]).push([[7707],{"./client/components/LoadingIndicator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),LoadingIndicator=function LoadingIndicator(_ref){var variation=_ref.variation;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"loading__animation"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:["loading__animation__bounce",variation&&"loading__animation__bounce--".concat(variation)].filter(Boolean).join(" ")}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:["loading__animation__bounce",variation&&"loading__animation__bounce--".concat(variation)].filter(Boolean).join(" ")}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:["loading__animation__bounce",variation&&"loading__animation__bounce--".concat(variation)].filter(Boolean).join(" ")}))};__webpack_exports__.A=LoadingIndicator,LoadingIndicator.__docgenInfo={description:"",methods:[],displayName:"LoadingIndicator",props:{variation:{required:!1,tsType:{name:"union",raw:"'medium' | 'large'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""}}}},"./client/views/room/body/LoadingMessagesIndicator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./client/components/LoadingIndicator.tsx"),LoadingMessagesIndicator=function LoadingMessagesIndicator(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_1__.A,null)};__webpack_exports__.A=LoadingMessagesIndicator,LoadingMessagesIndicator.__docgenInfo={description:"",methods:[],displayName:"LoadingMessagesIndicator"}},"./client/views/room/contextualBar/MessageSearchTab/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return MessageSearchTab_MessageSearchTab}});var fuselage=__webpack_require__("./node_modules/@rocket.chat/fuselage/index.js"),dist=__webpack_require__("../../packages/ui-contexts/dist/index.js"),react=__webpack_require__("./node_modules/react/index.js"),Contextualbar=__webpack_require__("./client/components/Contextualbar/index.ts"),RoomToolboxContext=__webpack_require__("./client/views/room/contexts/RoomToolboxContext.ts"),react_virtuoso_dist=__webpack_require__("./node_modules/react-virtuoso/dist/index.mjs"),client=__webpack_require__("./app/ui-utils/client/index.ts"),CustomScrollbars=__webpack_require__("./client/components/CustomScrollbars/index.ts"),RoomMessage=__webpack_require__("./client/components/message/variants/RoomMessage.tsx"),SystemMessage=__webpack_require__("./client/components/message/variants/SystemMessage.tsx"),useFormatDate=__webpack_require__("./client/hooks/useFormatDate.ts"),MessageListErrorBoundary=__webpack_require__("./client/views/room/MessageList/MessageListErrorBoundary.tsx"),isMessageNewDay=__webpack_require__("./client/views/room/MessageList/lib/isMessageNewDay.ts"),MessageListProvider=__webpack_require__("./client/views/room/MessageList/providers/MessageListProvider.tsx"),LoadingMessagesIndicator=__webpack_require__("./client/views/room/body/LoadingMessagesIndicator.tsx"),RoomContext=__webpack_require__("./client/views/room/contexts/RoomContext.ts"),lib=__webpack_require__("../../node_modules/@tanstack/react-query/build/lib/index.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)}))}}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var MessageSearch=function MessageSearch(_ref){var _useSetting,searchText=_ref.searchText,globalSearch=_ref.globalSearch,t=(0,dist.useTranslation)(),formatDate=(0,useFormatDate.l)(),pageSize=null!==(_useSetting=(0,dist.useSetting)("PageSize"))&&void 0!==_useSetting?_useSetting:10,_useState2=_slicedToArray((0,react.useState)(pageSize),2),limit=_useState2[0],setLimit=_useState2[1],showUserAvatar=!!(0,dist.useUserPreference)("displayAvatars"),subscription=(0,RoomContext.Mq)(),messageSearchQuery=function useMessageSearchQuery(_ref){var _useUserId,searchText=_ref.searchText,limit=_ref.limit,globalSearch=_ref.globalSearch,uid=null!==(_useUserId=(0,dist.useUserId)())&&void 0!==_useUserId?_useUserId:void 0,room=(0,RoomContext.nq)(),t=(0,dist.useTranslation)(),dispatchToastMessage=(0,dist.useToastMessageDispatch)(),searchMessages=(0,dist.useMethod)("rocketchatSearch.search");return(0,lib.useQuery)(["rooms",room._id,"message-search",{uid:uid,rid:room._id,searchText:searchText,limit:limit,globalSearch:globalSearch}],_asyncToGenerator(_regeneratorRuntime().mark((function _callee(){var _result$message$docs,_result$message,result;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,searchMessages(searchText,{uid:uid,rid:room._id},{limit:limit,searchAll:globalSearch});case 2:return result=_context.sent,_context.abrupt("return",null!==(_result$message$docs=null===(_result$message=result.message)||void 0===_result$message?void 0:_result$message.docs)&&void 0!==_result$message$docs?_result$message$docs:[]);case 4:case"end":return _context.stop()}}),_callee)}))),{keepPreviousData:!0,onError:function onError(){dispatchToastMessage({type:"error",message:t("Search_message_search_failed")})}})}({searchText:searchText,limit:limit,globalSearch:globalSearch});return react.createElement(fuselage.Box,{display:"flex",flexDirection:"column",flexGrow:1,flexShrink:1,flexBasis:0},messageSearchQuery.data&&react.createElement(react.Fragment,null,0===messageSearchQuery.data.length&&react.createElement(Contextualbar.lG,{title:t("No_results_found")}),messageSearchQuery.data.length>0&&react.createElement(MessageListErrorBoundary.A,null,react.createElement(MessageListProvider.A,null,react.createElement(fuselage.Box,{is:"section",display:"flex",flexDirection:"column",flexGrow:1,flexShrink:1,flexBasis:"auto",height:"full"},react.createElement(react_virtuoso_dist.Virtuoso,{totalCount:messageSearchQuery.data.length,overscan:25,data:messageSearchQuery.data,components:{Scroller:CustomScrollbars.Z},itemContent:function itemContent(index,message){var _subscription$tunread,_subscription$tunread2,_subscription$tunread3,_subscription$tunread4,_subscription$tunread5,_subscription$tunread6,previous=messageSearchQuery.data[index-1],newDay=(0,isMessageNewDay.O)(message,previous),system=client.MessageTypes.isSystemMessage(message),unread=null!==(_subscription$tunread=null==subscription||null===(_subscription$tunread2=subscription.tunread)||void 0===_subscription$tunread2?void 0:_subscription$tunread2.includes(message._id))&&void 0!==_subscription$tunread&&_subscription$tunread,mention=null!==(_subscription$tunread3=null==subscription||null===(_subscription$tunread4=subscription.tunreadUser)||void 0===_subscription$tunread4?void 0:_subscription$tunread4.includes(message._id))&&void 0!==_subscription$tunread3&&_subscription$tunread3,all=null!==(_subscription$tunread5=null==subscription||null===(_subscription$tunread6=subscription.tunreadGroup)||void 0===_subscription$tunread6?void 0:_subscription$tunread6.includes(message._id))&&void 0!==_subscription$tunread5&&_subscription$tunread5;return react.createElement(react.Fragment,{key:message._id},newDay&&react.createElement(fuselage.MessageDivider,null,formatDate(message.ts)),system?react.createElement(SystemMessage.A,{message:message,showUserAvatar:showUserAvatar}):react.createElement(RoomMessage.A,{message:message,sequential:!1,unread:unread,mention:mention,all:all,context:"search",searchText:searchText,showUserAvatar:showUserAvatar}))},endReached:function endReached(){setLimit((function(limit){return limit+pageSize}))}}))))),searchText&&messageSearchQuery.isLoading&&react.createElement(LoadingMessagesIndicator.A,null))},components_MessageSearch=(0,react.memo)(MessageSearch);MessageSearch.__docgenInfo={description:"",methods:[],displayName:"MessageSearch",props:{searchText:{required:!0,tsType:{name:"string"},description:""},globalSearch:{required:!0,tsType:{name:"boolean"},description:""}}};var index_module=__webpack_require__("./node_modules/@rocket.chat/fuselage-hooks/dist/index.module.js"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),core_typings_dist=__webpack_require__("../../packages/core-typings/dist/index.js"),i18n=__webpack_require__("./app/utils/lib/i18n.ts"),getRoomTypeTranslation=function getRoomTypeTranslation(room){return(0,core_typings_dist.isPublicRoom)(room)?(0,i18n.t)("Channel"):(0,core_typings_dist.isPrivateDiscussion)(room)?(0,i18n.t)("Private_Discussion"):(0,core_typings_dist.isPrivateRoom)(room)?(0,i18n.t)("Private_Group"):(0,core_typings_dist.isDirectMessageRoom)(room)?(0,i18n.t)("Direct_Message"):(0,core_typings_dist.isPrivateTeamRoom)(room)?(0,i18n.t)("Teams_Private_Team"):(0,core_typings_dist.isPublicTeamRoom)(room)?(0,i18n.t)("Teams_Public_Team"):(0,i18n.t)("Room")};function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var MessageSearchForm=function MessageSearchForm(_ref){var provider=_ref.provider,onSearch=_ref.onSearch,_useForm=(0,index_esm.mN)({defaultValues:{searchText:"",globalSearch:!1}}),handleSubmit=_useForm.handleSubmit,register=_useForm.register,setFocus=_useForm.setFocus,control=_useForm.control,room=(0,RoomContext.nq)();(0,react.useEffect)((function(){setFocus("searchText")}),[setFocus]);var debouncedOnSearch=(0,index_module.useDebouncedCallback)((0,index_module.useMutableCallback)(onSearch),300),submitHandler=handleSubmit((function(_ref2){var searchText=_ref2.searchText,globalSearch=_ref2.globalSearch;debouncedOnSearch.cancel(),onSearch({searchText:searchText,globalSearch:globalSearch})})),searchText=(0,index_esm.FH)({control:control,name:"searchText"}),globalSearch=(0,index_esm.FH)({control:control,name:"globalSearch"});(0,react.useEffect)((function(){debouncedOnSearch({searchText:searchText,globalSearch:globalSearch})}),[debouncedOnSearch,searchText,globalSearch]);var globalSearchEnabled=provider.settings.GlobalSearchEnabled,globalSearchToggleId=(0,index_module.useUniqueId)(),t=(0,dist.useTranslation)();return react.createElement(fuselage.Box,{is:"form",onSubmit:submitHandler,w:"full"},react.createElement(fuselage.Field,null,react.createElement(fuselage.TextInput,_extends({addon:react.createElement(fuselage.Icon,{name:"magnifier",size:"x20"}),placeholder:t("Search_Messages"),"aria-label":t("Search_Messages"),autoComplete:"off"},register("searchText"))),provider.description&&react.createElement(fuselage.FieldHint,{dangerouslySetInnerHTML:{__html:t(provider.description)}})),globalSearchEnabled&&react.createElement(fuselage.Field,null,react.createElement(fuselage.FieldLabel,{htmlFor:globalSearchToggleId},t("Global_Search")),react.createElement(fuselage.ToggleSwitch,_extends({id:globalSearchToggleId},register("globalSearch")))),room.encrypted&&react.createElement(fuselage.Callout,{type:"warning",mbs:12,icon:"circle-exclamation"},react.createElement(fuselage.Box,{fontScale:"p2b"},t("Encrypted_RoomType",{roomType:getRoomTypeTranslation(room).toLowerCase()})),t("Encrypted_content_cannot_be_searched")))},components_MessageSearchForm=MessageSearchForm;function useMessageSearchProviderQuery_typeof(o){return useMessageSearchProviderQuery_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},useMessageSearchProviderQuery_typeof(o)}function useMessageSearchProviderQuery_regeneratorRuntime(){useMessageSearchProviderQuery_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==useMessageSearchProviderQuery_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(useMessageSearchProviderQuery_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function useMessageSearchProviderQuery_asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function useMessageSearchProviderQuery_asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function _next(n){useMessageSearchProviderQuery_asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){useMessageSearchProviderQuery_asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)}))}}MessageSearchForm.__docgenInfo={description:"",methods:[],displayName:"MessageSearchForm",props:{provider:{required:!0,tsType:{name:"IMessageSearchProvider"},description:""},onSearch:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { searchText: string; globalSearch: boolean }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ searchText: string; globalSearch: boolean }",signature:{properties:[{key:"searchText",value:{name:"string",required:!0}},{key:"globalSearch",value:{name:"boolean",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};function MessageSearchTab_slicedToArray(r,e){return function MessageSearchTab_arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function MessageSearchTab_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function MessageSearchTab_unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return MessageSearchTab_arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?MessageSearchTab_arrayLikeToArray(r,a):void 0}}(r,e)||function MessageSearchTab_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function MessageSearchTab_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var MessageSearchTab=function MessageSearchTab(){var providerQuery=function useMessageSearchProviderQuery(){var getSearchProvider=(0,dist.useMethod)("rocketchatSearch.getProvider");return(0,lib.useQuery)(["search","provider"],useMessageSearchProviderQuery_asyncToGenerator(useMessageSearchProviderQuery_regeneratorRuntime().mark((function _callee(){var provider;return useMessageSearchProviderQuery_regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,getSearchProvider();case 2:if(void 0!==(provider=_context.sent)){_context.next=5;break}throw new Error("Search provider not found");case 5:return _context.abrupt("return",provider);case 6:case"end":return _context.stop()}}),_callee)}))))}(),closeTab=(0,RoomToolboxContext.W)().closeTab,_useState2=MessageSearchTab_slicedToArray((0,react.useState)({searchText:"",globalSearch:!1}),2),_useState2$=_useState2[0],searchText=_useState2$.searchText,globalSearch=_useState2$.globalSearch,handleSearch=_useState2[1],t=(0,dist.useTranslation)();return react.createElement(react.Fragment,null,react.createElement(Contextualbar.mH,null,react.createElement(Contextualbar.A4,{name:"magnifier"}),react.createElement(Contextualbar.jY,null,t("Search_Messages")),react.createElement(Contextualbar.pi,{onClick:closeTab})),providerQuery.data&&react.createElement(Contextualbar.cI,null,react.createElement(components_MessageSearchForm,{provider:providerQuery.data,onSearch:handleSearch})),react.createElement(Contextualbar.Ib,{flexShrink:1,flexGrow:1,paddingInline:0},providerQuery.isSuccess&&react.createElement(components_MessageSearch,{searchText:searchText,globalSearch:globalSearch}),providerQuery.isError&&react.createElement(fuselage.Callout,{m:24,type:"danger"},t("Search_current_provider_not_active"))))},MessageSearchTab_MessageSearchTab=MessageSearchTab;MessageSearchTab.__docgenInfo={description:"",methods:[],displayName:"MessageSearchTab"}},"./node_modules/react-error-boundary/dist/react-error-boundary.umd.js":function(__unused_webpack_module,exports,__webpack_require__){!function(exports,React){"use strict";function _interopNamespace(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach((function(k){if("default"!==k){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:!0,get:function(){return e[k]}})}})),n.default=e,Object.freeze(n)}var React__namespace=_interopNamespace(React);function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,_setPrototypeOf(subClass,superClass)}var changedArray=function changedArray(a,b){return void 0===a&&(a=[]),void 0===b&&(b=[]),a.length!==b.length||a.some((function(item,index){return!Object.is(item,b[index])}))},initialState={error:null},ErrorBoundary=function(_React$Component){function ErrorBoundary(){for(var _this,_len=arguments.length,_args=new Array(_len),_key=0;_key<_len;_key++)_args[_key]=arguments[_key];return(_this=_React$Component.call.apply(_React$Component,[this].concat(_args))||this).state=initialState,_this.resetErrorBoundary=function(){for(var _this$props,_len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];null==_this.props.onReset||(_this$props=_this.props).onReset.apply(_this$props,args),_this.reset()},_this}_inheritsLoose(ErrorBoundary,_React$Component),ErrorBoundary.getDerivedStateFromError=function getDerivedStateFromError(error){return{error:error}};var _proto=ErrorBoundary.prototype;return _proto.reset=function reset(){this.setState(initialState)},_proto.componentDidCatch=function componentDidCatch(error,info){var _this$props$onError,_this$props2;null==(_this$props$onError=(_this$props2=this.props).onError)||_this$props$onError.call(_this$props2,error,info)},_proto.componentDidUpdate=function componentDidUpdate(prevProps,prevState){var _this$props$onResetKe,_this$props3,error=this.state.error,resetKeys=this.props.resetKeys;null!==error&&null!==prevState.error&&changedArray(prevProps.resetKeys,resetKeys)&&(null==(_this$props$onResetKe=(_this$props3=this.props).onResetKeysChange)||_this$props$onResetKe.call(_this$props3,prevProps.resetKeys,resetKeys),this.reset())},_proto.render=function render(){var error=this.state.error,_this$props4=this.props,fallbackRender=_this$props4.fallbackRender,FallbackComponent=_this$props4.FallbackComponent,fallback=_this$props4.fallback;if(null!==error){var _props={error:error,resetErrorBoundary:this.resetErrorBoundary};if(React__namespace.isValidElement(fallback))return fallback;if("function"==typeof fallbackRender)return fallbackRender(_props);if(FallbackComponent)return React__namespace.createElement(FallbackComponent,_props);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},ErrorBoundary}(React__namespace.Component);function withErrorBoundary(Component,errorBoundaryProps){var Wrapped=function Wrapped(props){return React__namespace.createElement(ErrorBoundary,errorBoundaryProps,React__namespace.createElement(Component,props))},name=Component.displayName||Component.name||"Unknown";return Wrapped.displayName="withErrorBoundary("+name+")",Wrapped}function useErrorHandler(givenError){var _React$useState=React__namespace.useState(null),error=_React$useState[0],setError=_React$useState[1];if(null!=givenError)throw givenError;if(null!=error)throw error;return setError}exports.ErrorBoundary=ErrorBoundary,exports.useErrorHandler=useErrorHandler,exports.withErrorBoundary=withErrorBoundary,Object.defineProperty(exports,"__esModule",{value:!0})}(exports,__webpack_require__("./node_modules/react/index.js"))}}]);