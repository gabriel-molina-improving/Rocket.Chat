"use strict";(self.webpackChunk_rocket_chat_meteor=self.webpackChunk_rocket_chat_meteor||[]).push([[5334],{"./client/views/room/Header/DirectRoomHeader.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var _rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/ui-contexts/dist/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_hooks_usePresence__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./client/hooks/usePresence.ts"),_RoomHeader__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./client/views/room/Header/RoomHeader.tsx"),DirectRoomHeader=function DirectRoomHeader(_ref){var _room$uids,room=_ref.room,slots=_ref.slots,userId=(0,_rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_0__.useUserId)(),directUserId=null===(_room$uids=room.uids)||void 0===_room$uids?void 0:_room$uids.filter((function(uid){return uid!==userId})).shift(),directUserData=(0,_hooks_usePresence__WEBPACK_IMPORTED_MODULE_2__.x)(directUserId);return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_RoomHeader__WEBPACK_IMPORTED_MODULE_3__.default,{slots:slots,room:room,topic:null==directUserData?void 0:directUserData.statusText})};__webpack_exports__.default=DirectRoomHeader,DirectRoomHeader.__docgenInfo={description:"",methods:[],displayName:"DirectRoomHeader",props:{room:{required:!0,tsType:{name:"IRoom"},description:""},slots:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n\tstart?: unknown;\n\tpreContent?: unknown;\n\tinsideContent?: unknown;\n\tposContent?: unknown;\n\tend?: unknown;\n\ttoolbox?: {\n\t\tpre?: unknown;\n\t\tcontent?: unknown;\n\t\tpos?: unknown;\n\t};\n}",signature:{properties:[{key:"start",value:{name:"unknown",required:!1}},{key:"preContent",value:{name:"unknown",required:!1}},{key:"insideContent",value:{name:"unknown",required:!1}},{key:"posContent",value:{name:"unknown",required:!1}},{key:"end",value:{name:"unknown",required:!1}},{key:"toolbox",value:{name:"signature",type:"object",raw:"{\n\tpre?: unknown;\n\tcontent?: unknown;\n\tpos?: unknown;\n}",signature:{properties:[{key:"pre",value:{name:"unknown",required:!1}},{key:"content",value:{name:"unknown",required:!1}},{key:"pos",value:{name:"unknown",required:!1}}]},required:!1}}]}},description:""}}}}}]);