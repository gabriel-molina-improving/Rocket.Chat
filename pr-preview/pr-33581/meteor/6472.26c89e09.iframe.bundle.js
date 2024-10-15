/*! For license information please see 6472.26c89e09.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_rocket_chat_meteor=self.webpackChunk_rocket_chat_meteor||[]).push([[6472],{"./client/components/UserStatusMenu.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _rocket_chat_core_typings__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core-typings/dist/index.js"),_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@rocket.chat/fuselage/index.js"),_rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/ui-contexts/dist/index.js"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_UserStatus__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./client/components/UserStatus/index.ts");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var UserStatusMenu=function UserStatusMenu(_ref){var margin=_ref.margin,onChange=_ref.onChange,_ref$initialStatus=_ref.initialStatus,initialStatus=void 0===_ref$initialStatus?_rocket_chat_core_typings__WEBPACK_IMPORTED_MODULE_0__.UserStatus.OFFLINE:_ref$initialStatus,_ref$optionWidth=_ref.optionWidth,optionWidth=void 0===_ref$optionWidth?void 0:_ref$optionWidth,_ref$placement=_ref.placement,placement=void 0===_ref$placement?"bottom-end":_ref$placement,t=(0,_rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_2__.useTranslation)(),_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialStatus),2),status=_useState2[0],setStatus=_useState2[1],allowInvisibleStatus=(0,_rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_2__.useSetting)("Accounts_AllowInvisibleStatusOption"),options=(0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)((function(){var renderOption=function renderOption(status,label){return react__WEBPACK_IMPORTED_MODULE_3__.createElement(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.Box,{display:"flex",flexDirection:"row",alignItems:"center"},react__WEBPACK_IMPORTED_MODULE_3__.createElement(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.Box,{marginInlineEnd:8},react__WEBPACK_IMPORTED_MODULE_3__.createElement(_UserStatus__WEBPACK_IMPORTED_MODULE_4__._O,{status:status})),label)},statuses=[[_rocket_chat_core_typings__WEBPACK_IMPORTED_MODULE_0__.UserStatus.ONLINE,renderOption(_rocket_chat_core_typings__WEBPACK_IMPORTED_MODULE_0__.UserStatus.ONLINE,t("Online"))],[_rocket_chat_core_typings__WEBPACK_IMPORTED_MODULE_0__.UserStatus.AWAY,renderOption(_rocket_chat_core_typings__WEBPACK_IMPORTED_MODULE_0__.UserStatus.AWAY,t("Away"))],[_rocket_chat_core_typings__WEBPACK_IMPORTED_MODULE_0__.UserStatus.BUSY,renderOption(_rocket_chat_core_typings__WEBPACK_IMPORTED_MODULE_0__.UserStatus.BUSY,t("Busy"))]];return allowInvisibleStatus&&statuses.push([_rocket_chat_core_typings__WEBPACK_IMPORTED_MODULE_0__.UserStatus.OFFLINE,renderOption(_rocket_chat_core_typings__WEBPACK_IMPORTED_MODULE_0__.UserStatus.OFFLINE,t("Offline"))]),statuses}),[t,allowInvisibleStatus]),_useCursor=(0,_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.useCursor)(-1,options,(function(_ref2,_ref3){var selected=_slicedToArray(_ref2,1)[0],hide=_slicedToArray(_ref3,2)[1];setStatus(selected),reset(),hide()})),_useCursor2=_slicedToArray(_useCursor,5),cursor=_useCursor2[0],handleKeyDown=_useCursor2[1],handleKeyUp=_useCursor2[2],reset=_useCursor2[3],_useCursor2$=_slicedToArray(_useCursor2[4],3),visible=_useCursor2$[0],hide=_useCursor2$[1],show=_useCursor2$[2],ref=(0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),onClick=(0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((function(){null!=ref&&ref.current&&(ref.current.focus(),show(),ref.current.classList.add("focus-visible"))}),[show]),handleSelection=(0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((function(_ref6){var selected=_slicedToArray(_ref6,1)[0];setStatus(selected),reset(),hide()}),[hide,reset]);return(0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)((function(){return onChange(status)}),[status,onChange]),react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_3__.createElement(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.Button,{ref:ref,small:!0,square:!0,secondary:!0,onClick:onClick,onBlur:hide,onKeyUp:handleKeyUp,onKeyDown:handleKeyDown,margin:margin,"aria-label":t("User_status_menu")},react__WEBPACK_IMPORTED_MODULE_3__.createElement(_UserStatus__WEBPACK_IMPORTED_MODULE_4__._O,{status:status})),react__WEBPACK_IMPORTED_MODULE_3__.createElement(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.PositionAnimated,{width:"auto",visible:visible,anchor:ref,placement:placement},react__WEBPACK_IMPORTED_MODULE_3__.createElement(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_1__.Options,{width:optionWidth,onSelect:handleSelection,options:options,cursor:cursor})))};__webpack_exports__.A=UserStatusMenu,UserStatusMenu.__docgenInfo={description:"",methods:[],displayName:"UserStatusMenu",props:{margin:{required:!0,tsType:{name:"ComponentProps['margin']",raw:"ComponentProps<typeof Box>['margin']"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(type: UserStatusType) => void",signature:{arguments:[{type:{name:"UserStatusType"},name:"type"}],return:{name:"void"}}},description:""},initialStatus:{required:!1,tsType:{name:"UserStatusType"},description:"",defaultValue:{value:"UserStatusType.OFFLINE",computed:!0}},optionWidth:{required:!1,tsType:{name:"ComponentProps['width']",raw:"ComponentProps<typeof Box>['width']"},description:"",defaultValue:{value:"undefined",computed:!0}},placement:{required:!1,tsType:{name:"ComponentProps['placement']",raw:"ComponentProps<typeof PositionAnimated>['placement']"},description:"",defaultValue:{value:"'bottom-end'",computed:!1}}}}},"./client/lib/constants.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{HJ:function(){return USER_STATUS_TEXT_MAX_LENGTH},ny:function(){return VIDEOCONF_STACK_MAX_USERS}});var USER_STATUS_TEXT_MAX_LENGTH=120,VIDEOCONF_STACK_MAX_USERS=6},"./client/lib/userStatuses.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{W:function(){return userStatuses}});var _rocket_chat_core_typings__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core-typings/dist/index.js"),_app_utils_client_lib_SDKClient__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/utils/client/lib/SDKClient.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var _n=0,F=function F(){};return{s:F,n:function n(){return _n>=r.length?{done:!0}:{done:!1,value:r[_n++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function s(){t=t.call(r)},n:function n(){var r=t.next();return a=r.done,r},e:function e(r){u=!0,o=r},f:function f(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var UserStatuses=function(){function UserStatuses(){!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,UserStatuses),_defineProperty(this,"invisibleAllowed",!0),_defineProperty(this,"store",new Map([_rocket_chat_core_typings__WEBPACK_IMPORTED_MODULE_0__.UserStatus.ONLINE,_rocket_chat_core_typings__WEBPACK_IMPORTED_MODULE_0__.UserStatus.AWAY,_rocket_chat_core_typings__WEBPACK_IMPORTED_MODULE_0__.UserStatus.BUSY,_rocket_chat_core_typings__WEBPACK_IMPORTED_MODULE_0__.UserStatus.OFFLINE].map((function(status){return[status,{id:status,name:status,statusType:status,localizeName:!0}]}))))}var _sync;return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(UserStatuses,[{key:"delete",value:function _delete(id){this.store.delete(id)}},{key:"put",value:function put(customUserStatus){this.store.set(customUserStatus.id,customUserStatus)}},{key:"createFromCustom",value:function createFromCustom(customUserStatus){if(!this.isValidType(customUserStatus.statusType))throw new Error("Invalid user status type");return{name:customUserStatus.name,id:customUserStatus._id,statusType:customUserStatus.statusType,localizeName:!1}}},{key:"isValidType",value:function isValidType(type){return Object.values(_rocket_chat_core_typings__WEBPACK_IMPORTED_MODULE_0__.UserStatus).includes(type)}},{key:Symbol.iterator,value:_regeneratorRuntime().mark((function value(){var _iterator,_step,value;return _regeneratorRuntime().wrap((function value$(_context){for(;;)switch(_context.prev=_context.next){case 0:_iterator=_createForOfIteratorHelper(this.store.values()),_context.prev=1,_iterator.s();case 3:if((_step=_iterator.n()).done){_context.next=10;break}if(value=_step.value,!this.invisibleAllowed&&value.statusType===_rocket_chat_core_typings__WEBPACK_IMPORTED_MODULE_0__.UserStatus.OFFLINE){_context.next=8;break}return _context.next=8,value;case 8:_context.next=3;break;case 10:_context.next=15;break;case 12:_context.prev=12,_context.t0=_context.catch(1),_iterator.e(_context.t0);case 15:return _context.prev=15,_iterator.f(),_context.finish(15);case 18:case"end":return _context.stop()}}),value,this,[[1,12,15,18]])}))},{key:"sync",value:(_sync=function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){var result,_iterator2,_step2,customStatus;return _regeneratorRuntime().wrap((function _callee$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,_app_utils_client_lib_SDKClient__WEBPACK_IMPORTED_MODULE_1__.sdk.call("listCustomUserStatus");case 2:if(result=_context2.sent){_context2.next=5;break}return _context2.abrupt("return");case 5:_iterator2=_createForOfIteratorHelper(result);try{for(_iterator2.s();!(_step2=_iterator2.n()).done;)customStatus=_step2.value,this.put(this.createFromCustom(customStatus))}catch(err){_iterator2.e(err)}finally{_iterator2.f()}case 7:case"end":return _context2.stop()}}),_callee,this)}))),function sync(){return _sync.apply(this,arguments)})},{key:"watch",value:function watch(cb){var _this=this,updateSubscription=_app_utils_client_lib_SDKClient__WEBPACK_IMPORTED_MODULE_1__.sdk.stream("notify-logged",["updateCustomUserStatus"],(function(data){_this.put(_this.createFromCustom(data.userStatusData)),null==cb||cb()})),deleteSubscription=_app_utils_client_lib_SDKClient__WEBPACK_IMPORTED_MODULE_1__.sdk.stream("notify-logged",["deleteCustomUserStatus"],(function(data){_this.delete(data.userStatusData._id),null==cb||cb()}));return function(){updateSubscription.stop(),deleteSubscription.stop()}}}]),UserStatuses}(),userStatuses=new UserStatuses},"./client/views/marketplace/hooks/useAppRequestStats.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:function(){return useAppRequestStats}});var _rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/ui-contexts/dist/index.js"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@tanstack/react-query/build/lib/index.js"),useAppRequestStats=function useAppRequestStats(){var canManageApp=(0,_rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_0__.usePermission)("manage-apps"),fetchRequestStats=(0,_rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_0__.useEndpoint)("GET","/apps/app-request/stats");return(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({queryKey:["app-requests-stats"],queryFn:function queryFn(){return fetchRequestStats()},select:function select(_ref){return _ref.data},refetchOnWindowFocus:!1,retry:!1,enabled:canManageApp})}}}]);