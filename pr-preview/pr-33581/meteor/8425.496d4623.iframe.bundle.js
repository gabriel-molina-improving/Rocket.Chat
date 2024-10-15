/*! For license information please see 8425.496d4623.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_rocket_chat_meteor=self.webpackChunk_rocket_chat_meteor||[]).push([[8425],{"./client/sidebar/header/CreateChannel/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return CreateChannel_CreateChannelModal}});var fuselage=__webpack_require__("./node_modules/@rocket.chat/fuselage/index.js"),index_module=__webpack_require__("./node_modules/@rocket.chat/fuselage-hooks/dist/index.module.js"),dist=__webpack_require__("../../packages/ui-contexts/dist/index.js"),react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),UserAutoCompleteMultipleFederated=__webpack_require__("./client/components/UserAutoCompleteMultiple/UserAutoCompleteMultipleFederated.tsx"),useHasLicenseModule=__webpack_require__("./client/hooks/useHasLicenseModule.ts"),goToRoomById=__webpack_require__("./client/lib/utils/goToRoomById.ts"),useEncryptedRoomDescription=__webpack_require__("./client/sidebar/header/hooks/useEncryptedRoomDescription.tsx");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)}))}}var CreateChannelModal=function CreateChannelModal(_ref){var _ref2,_errors$name,_ref$teamId=_ref.teamId,teamId=void 0===_ref$teamId?"":_ref$teamId,onClose=_ref.onClose,reload=_ref.reload,t=(0,dist.useTranslation)(),canSetReadOnly=(0,dist.usePermissionWithScopedRoles)("set-readonly",["owner"]),e2eEnabled=(0,dist.useSetting)("E2E_Enable"),namesValidation=(0,dist.useSetting)("UTF8_Channel_Names_Validation"),allowSpecialNames=(0,dist.useSetting)("UI_Allow_room_names_with_special_chars"),federationEnabled=(0,dist.useSetting)("Federation_Matrix_enabled")||!1,e2eEnabledForPrivateByDefault=(0,dist.useSetting)("E2E_Enabled_Default_PrivateRooms")&&e2eEnabled,canCreateChannel=(0,dist.usePermission)("create-c"),canCreatePrivateChannel=(0,dist.usePermission)("create-p"),getEncryptedHint=(0,useEncryptedRoomDescription.f)("channel"),channelNameRegex=(0,react.useMemo)((function(){return new RegExp("^".concat(namesValidation,"$"))}),[namesValidation]),federatedModule=(0,useHasLicenseModule.b)("federation"),canUseFederation="loading"!==federatedModule&&federatedModule&&federationEnabled,channelNameExists=(0,dist.useEndpoint)("GET","/v1/rooms.nameExists"),createChannel=(0,dist.useEndpoint)("POST","/v1/channels.create"),createPrivateChannel=(0,dist.useEndpoint)("POST","/v1/groups.create"),dispatchToastMessage=(0,dist.useToastMessageDispatch)(),canOnlyCreateOneType=(0,react.useMemo)((function(){return!canCreateChannel&&canCreatePrivateChannel?"p":!(!canCreateChannel||canCreatePrivateChannel)&&"c"}),[canCreateChannel,canCreatePrivateChannel]),_useForm=(0,index_esm.mN)({mode:"onBlur",defaultValues:{members:[],name:"",topic:"",isPrivate:!canOnlyCreateOneType||"p"===canOnlyCreateOneType,readOnly:!1,encrypted:null!==(_ref2=e2eEnabledForPrivateByDefault)&&void 0!==_ref2&&_ref2,broadcast:!1,federated:!1}}),register=_useForm.register,errors=_useForm.formState.errors,handleSubmit=_useForm.handleSubmit,control=_useForm.control,setValue=_useForm.setValue,_watch=(0,_useForm.watch)(),isPrivate=_watch.isPrivate,broadcast=_watch.broadcast,readOnly=_watch.readOnly,federated=_watch.federated,encrypted=_watch.encrypted;(0,react.useEffect)((function(){isPrivate||setValue("encrypted",!1),broadcast&&setValue("encrypted",!1),federated&&(setValue("encrypted",!1),setValue("broadcast",!1),setValue("readOnly",!1)),setValue("readOnly",broadcast)}),[federated,setValue,broadcast,isPrivate]);var validateChannelName=function(){var _ref3=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(name){var _yield$channelNameExi;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(name){_context.next=2;break}return _context.abrupt("return");case 2:if(allowSpecialNames||channelNameRegex.test(name)){_context.next=4;break}return _context.abrupt("return",t("Name_cannot_have_special_characters"));case 4:return _context.next=6,channelNameExists({roomName:name});case 6:if(_yield$channelNameExi=_context.sent,!_yield$channelNameExi.exists){_context.next=10;break}return _context.abrupt("return",t("Channel_already_exist",name));case 10:case"end":return _context.stop()}}),_callee)})));return function validateChannelName(_x){return _ref3.apply(this,arguments)}}(),handleCreateChannel=function(){var _ref5=_asyncToGenerator(_regeneratorRuntime().mark((function _callee2(_ref4){var name,members,readOnly,topic,broadcast,encrypted,federated,roomData,params;return _regeneratorRuntime().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(name=_ref4.name,members=_ref4.members,readOnly=_ref4.readOnly,topic=_ref4.topic,broadcast=_ref4.broadcast,encrypted=_ref4.encrypted,federated=_ref4.federated,params={name:name,members:members,readOnly:readOnly,extraData:_objectSpread(_objectSpread({topic:topic,broadcast:broadcast,encrypted:encrypted},federated&&{federated:federated}),teamId&&{teamId:teamId})},_context2.prev=2,!isPrivate){_context2.next=10;break}return _context2.next=6,createPrivateChannel(params);case 6:roomData=_context2.sent,!teamId&&(0,goToRoomById.P)(roomData.group._id),_context2.next=14;break;case 10:return _context2.next=12,createChannel(params);case 12:roomData=_context2.sent,!teamId&&(0,goToRoomById.P)(roomData.channel._id);case 14:dispatchToastMessage({type:"success",message:t("Room_has_been_created")}),null==reload||reload(),_context2.next=21;break;case 18:_context2.prev=18,_context2.t0=_context2.catch(2),dispatchToastMessage({type:"error",message:_context2.t0});case 21:return _context2.prev=21,onClose(),_context2.finish(21);case 24:case"end":return _context2.stop()}}),_callee2,null,[[2,18,21,24]])})));return function handleCreateChannel(_x2){return _ref5.apply(this,arguments)}}(),e2eDisabled=(0,react.useMemo)((function(){return!isPrivate||broadcast||Boolean(!e2eEnabled)||Boolean(e2eEnabledForPrivateByDefault)}),[e2eEnabled,e2eEnabledForPrivateByDefault,broadcast,isPrivate]),createChannelFormId=(0,index_module.useUniqueId)(),nameId=(0,index_module.useUniqueId)(),topicId=(0,index_module.useUniqueId)(),privateId=(0,index_module.useUniqueId)(),federatedId=(0,index_module.useUniqueId)(),readOnlyId=(0,index_module.useUniqueId)(),encryptedId=(0,index_module.useUniqueId)(),broadcastId=(0,index_module.useUniqueId)(),addMembersId=(0,index_module.useUniqueId)();return react.createElement(fuselage.Modal,{"data-qa":"create-channel-modal","aria-labelledby":"".concat(createChannelFormId,"-title"),wrapperFunction:function wrapperFunction(props){return react.createElement(fuselage.Box,_extends({is:"form",id:createChannelFormId,onSubmit:handleSubmit(handleCreateChannel)},props))}},react.createElement(fuselage.Modal.Header,null,react.createElement(fuselage.Modal.Title,{id:"".concat(createChannelFormId,"-title")},t("Create_channel")),react.createElement(fuselage.Modal.Close,{tabIndex:-1,title:t("Close"),onClick:onClose})),react.createElement(fuselage.Modal.Content,{mbe:2},react.createElement(fuselage.FieldGroup,{mbe:24},react.createElement(fuselage.Field,null,react.createElement(fuselage.FieldLabel,{required:!0,htmlFor:nameId},t("Name")),react.createElement(fuselage.FieldRow,null,react.createElement(fuselage.TextInput,_extends({id:nameId,"data-qa-type":"channel-name-input"},register("name",{required:t("Required_field",{field:t("Name")}),validate:function validate(value){return validateChannelName(value)}}),{error:null===(_errors$name=errors.name)||void 0===_errors$name?void 0:_errors$name.message,addon:react.createElement(fuselage.Icon,{name:isPrivate?"hashtag-lock":"hashtag",size:"x20"}),"aria-invalid":errors.name?"true":"false","aria-describedby":"".concat(nameId,"-error ").concat(nameId,"-hint"),"aria-required":"true"}))),errors.name&&react.createElement(fuselage.FieldError,{"aria-live":"assertive",id:"".concat(nameId,"-error")},errors.name.message),!allowSpecialNames&&react.createElement(fuselage.FieldHint,{id:"".concat(nameId,"-hint")},t("No_spaces"))),react.createElement(fuselage.Field,null,react.createElement(fuselage.FieldLabel,{htmlFor:topicId},t("Topic")),react.createElement(fuselage.FieldRow,null,react.createElement(fuselage.TextInput,_extends({id:topicId,"aria-describedby":"".concat(topicId,"-hint")},register("topic"),{"data-qa-type":"channel-topic-input"}))),react.createElement(fuselage.FieldHint,{id:"".concat(topicId,"-hint")},t("Displayed_next_to_name"))),react.createElement(fuselage.Field,null,react.createElement(fuselage.FieldLabel,{htmlFor:addMembersId},t("Members")),react.createElement(index_esm.xI,{control:control,name:"members",render:function render(_ref6){var _ref6$field=_ref6.field,onChange=_ref6$field.onChange,value=_ref6$field.value;return react.createElement(UserAutoCompleteMultipleFederated.A,{id:addMembersId,value:value,onChange:onChange,placeholder:t("Add_people")})}})),react.createElement(fuselage.Field,null,react.createElement(fuselage.FieldRow,null,react.createElement(fuselage.FieldLabel,{htmlFor:privateId},t("Private")),react.createElement(index_esm.xI,{control:control,name:"isPrivate",render:function render(_ref7){var _ref7$field=_ref7.field,onChange=_ref7$field.onChange,value=_ref7$field.value,ref=_ref7$field.ref;return react.createElement(fuselage.ToggleSwitch,{id:privateId,"aria-describedby":"".concat(privateId,"-hint"),ref:ref,checked:value,disabled:!!canOnlyCreateOneType,onChange:onChange})}})),react.createElement(fuselage.FieldHint,{id:"".concat(privateId,"-hint")},t(isPrivate?"People_can_only_join_by_being_invited":"Anyone_can_access")))),react.createElement(fuselage.Accordion,null,react.createElement(fuselage.AccordionItem,{title:t("Advanced_settings")},react.createElement(fuselage.FieldGroup,null,react.createElement(fuselage.Box,{is:"h5",fontScale:"h5",color:"titles-labels"},t("Security_and_permissions")),react.createElement(fuselage.Field,null,react.createElement(fuselage.FieldRow,null,react.createElement(fuselage.FieldLabel,{htmlFor:federatedId},t("Federation_Matrix_Federated")),react.createElement(index_esm.xI,{control:control,name:"federated",render:function render(_ref8){var _ref8$field=_ref8.field,onChange=_ref8$field.onChange,value=_ref8$field.value,ref=_ref8$field.ref;return react.createElement(fuselage.ToggleSwitch,{"aria-describedby":"".concat(federatedId,"-hint"),id:federatedId,ref:ref,checked:value,disabled:!canUseFederation,onChange:onChange})}})),react.createElement(fuselage.FieldHint,{id:"".concat(federatedId,"-hint")},t(function getFederationHintKey(licenseModule,featureToggle){return"loading"!==licenseModule&&licenseModule?featureToggle?"Federation_Matrix_Federated_Description":"Federation_Matrix_Federated_Description_disabled":"error-this-is-a-premium-feature"}(federatedModule,federationEnabled)))),react.createElement(fuselage.Field,null,react.createElement(fuselage.FieldRow,null,react.createElement(fuselage.FieldLabel,{htmlFor:encryptedId},t("Encrypted")),react.createElement(index_esm.xI,{control:control,name:"encrypted",render:function render(_ref9){var _ref9$field=_ref9.field,onChange=_ref9$field.onChange,value=_ref9$field.value,ref=_ref9$field.ref;return react.createElement(fuselage.ToggleSwitch,{id:encryptedId,ref:ref,checked:value,disabled:e2eDisabled||federated,onChange:onChange,"aria-describedby":"".concat(encryptedId,"-hint"),"aria-labelledby":"Encrypted_channel_Label"})}})),react.createElement(fuselage.FieldDescription,{id:"".concat(encryptedId,"-hint")},getEncryptedHint({isPrivate:isPrivate,broadcast:broadcast,encrypted:encrypted}))),react.createElement(fuselage.Field,null,react.createElement(fuselage.FieldRow,null,react.createElement(fuselage.FieldLabel,{htmlFor:readOnlyId},t("Read_only")),react.createElement(index_esm.xI,{control:control,name:"readOnly",render:function render(_ref10){var _ref10$field=_ref10.field,onChange=_ref10$field.onChange,value=_ref10$field.value,ref=_ref10$field.ref;return react.createElement(fuselage.ToggleSwitch,{id:readOnlyId,"aria-describedby":"".concat(readOnlyId,"-hint"),ref:ref,checked:value,disabled:!canSetReadOnly||broadcast||federated,onChange:onChange})}})),react.createElement(fuselage.FieldHint,{id:"".concat(readOnlyId,"-hint")},readOnly?t("Read_only_field_hint_enabled",{roomType:"channel"}):t("Anyone_can_send_new_messages"))),react.createElement(fuselage.Field,null,react.createElement(fuselage.FieldRow,null,react.createElement(fuselage.FieldLabel,{htmlFor:broadcastId},t("Broadcast")),react.createElement(index_esm.xI,{control:control,name:"broadcast",render:function render(_ref11){var _ref11$field=_ref11.field,onChange=_ref11$field.onChange,value=_ref11$field.value,ref=_ref11$field.ref;return react.createElement(fuselage.ToggleSwitch,{"aria-describedby":"".concat(broadcastId,"-hint"),id:broadcastId,ref:ref,checked:value,disabled:!!federated,onChange:onChange})}})),broadcast&&react.createElement(fuselage.FieldHint,{id:"".concat(broadcastId,"-hint")},t("Broadcast_hint_enabled",{roomType:"channel"}))))))),react.createElement(fuselage.Modal.Footer,null,react.createElement(fuselage.Modal.FooterControllers,null,react.createElement(fuselage.Button,{onClick:onClose},t("Cancel")),react.createElement(fuselage.Button,{type:"submit",primary:!0,"data-qa-type":"create-channel-confirm-button"},t("Create")))))},CreateChannel_CreateChannelModal=CreateChannelModal;CreateChannelModal.__docgenInfo={description:"",methods:[],displayName:"CreateChannelModal",props:{teamId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},reload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./client/sidebar/header/hooks/useEncryptedRoomDescription.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{f:function(){return useEncryptedRoomDescription}});var _rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/ui-contexts/dist/index.js"),useEncryptedRoomDescription=function useEncryptedRoomDescription(roomType){var t=(0,_rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_0__.useTranslation)(),e2eEnabled=(0,_rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_0__.useSetting)("E2E_Enable"),e2eEnabledForPrivateByDefault=(0,_rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_0__.useSetting)("E2E_Enabled_Default_PrivateRooms");return function(_ref){var isPrivate=_ref.isPrivate,broadcast=_ref.broadcast,encrypted=_ref.encrypted;return e2eEnabled?isPrivate?broadcast?t("Not_available_for_broadcast",{roomType:roomType}):e2eEnabledForPrivateByDefault||encrypted?t("Encrypted_messages",{roomType:roomType}):t("Encrypted_messages_false"):t("Encrypted_not_available",{roomType:roomType}):t("Not_available_for_this_workspace")}}}}]);