"use strict";(self.webpackChunk_rocket_chat_meteor=self.webpackChunk_rocket_chat_meteor||[]).push([[7386],{"./client/views/room/HeaderV2/RoomToolbox/RoomToolboxE2EESetup.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@rocket.chat/fuselage-hooks/dist/index.module.js"),_rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/ui-contexts/dist/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_components_Header__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./client/components/Header/index.ts"),_ui__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./client/ui.ts"),_contexts_RoomToolboxContext__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./client/views/room/contexts/RoomToolboxContext.ts"),RoomToolboxE2EESetup=function RoomToolboxE2EESetup(){var t=(0,_rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(),toolbox=(0,_contexts_RoomToolboxContext__WEBPACK_IMPORTED_MODULE_5__.W)(),tab=toolbox.tab,actions=(0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_0__.useStableArray)(_ui__WEBPACK_IMPORTED_MODULE_4__.Xy.map((function(roomActionHook){return roomActionHook()})).filter((function(roomAction){return!!roomAction})));return react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment,null,actions.map((function(_ref,index){var id=_ref.id,icon=_ref.icon,title=_ref.title,action=_ref.action,disabled=_ref.disabled,tooltip=_ref.tooltip;return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__.jJ,{key:id,index:index,id:id,icon:icon,title:t(title),pressed:id===(null==tab?void 0:tab.id),action:null!=action?action:function(){return toolbox.openTab(id)},disabled:disabled,tooltip:tooltip})})))};__webpack_exports__.default=RoomToolboxE2EESetup,RoomToolboxE2EESetup.__docgenInfo={description:"",methods:[],displayName:"RoomToolboxE2EESetup"}}}]);