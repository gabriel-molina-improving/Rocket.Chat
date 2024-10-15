"use strict";(self.webpackChunk_rocket_chat_meteor=self.webpackChunk_rocket_chat_meteor||[]).push([[2974],{"./client/components/message/header/MessageRoles.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@rocket.chat/fuselage/index.js"),_rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/ui-contexts/dist/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),MessageRoles=function MessageRoles(_ref){var roles=_ref.roles,isBot=_ref.isBot,t=(0,_rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__.MessageRoles,null,roles.map((function(role,index){return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__.MessageRole,{key:index},role)})),isBot&&react__WEBPACK_IMPORTED_MODULE_2__.createElement(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__.MessageRole,null,t("Bot")))};__webpack_exports__.A=MessageRoles,MessageRoles.__docgenInfo={description:"",methods:[],displayName:"MessageRoles",props:{roles:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},isBot:{required:!1,tsType:{name:"boolean"},description:""}}}},"./client/components/message/header/MessageRoles.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdministratorExample:function(){return AdministratorExample},BotExample:function(){return BotExample},__namedExportsOrder:function(){return __namedExportsOrder}});var _rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@rocket.chat/fuselage/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_MessageRoles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./client/components/message/header/MessageRoles.tsx");__webpack_exports__.default={title:"components/message/header/MessageRoles",component:_MessageRoles__WEBPACK_IMPORTED_MODULE_2__.A,decorators:[fn=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__.Box,null,fn())]};const AdministratorExample=args=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_MessageRoles__WEBPACK_IMPORTED_MODULE_2__.A,args);AdministratorExample.args={roles:["admin","user"]};const BotExample=args=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_MessageRoles__WEBPACK_IMPORTED_MODULE_2__.A,args);BotExample.args={roles:["user"],isBot:!0};const __namedExportsOrder=["AdministratorExample","BotExample"];AdministratorExample.parameters={...AdministratorExample.parameters,docs:{...AdministratorExample.parameters?.docs,source:{originalSource:"args => <MessageRoles {...args} />",...AdministratorExample.parameters?.docs?.source}}},BotExample.parameters={...BotExample.parameters,docs:{...BotExample.parameters?.docs,source:{originalSource:"args => <MessageRoles {...args} />",...BotExample.parameters?.docs?.source}}}}}]);