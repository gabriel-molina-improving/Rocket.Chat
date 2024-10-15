"use strict";(self.webpackChunk_rocket_chat_meteor=self.webpackChunk_rocket_chat_meteor||[]).push([[7144],{"./client/views/room/contextualBar/OTR/OTR.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return OTR_OTR}});var fuselage=__webpack_require__("./node_modules/@rocket.chat/fuselage/index.js"),dist=__webpack_require__("../../packages/ui-contexts/dist/index.js"),react=__webpack_require__("./node_modules/react/index.js"),OtrRoomState=__webpack_require__("./app/otr/lib/OtrRoomState.ts"),Contextualbar=__webpack_require__("./client/components/Contextualbar/index.ts"),RoomContext=__webpack_require__("./client/views/room/contexts/RoomContext.ts"),OTREstablished=function OTREstablished(_ref){var onClickRefresh=_ref.onClickRefresh,onClickEnd=_ref.onClickEnd,t=(0,dist.useTranslation)();return react.createElement(fuselage.ButtonGroup,{stretch:!0},react.createElement(fuselage.Button,{onClick:onClickRefresh},t("Refresh_keys")),react.createElement(fuselage.Button,{secondary:!0,danger:!0,onClick:onClickEnd},t("End_OTR")))},components_OTREstablished=OTREstablished;OTREstablished.__docgenInfo={description:"",methods:[],displayName:"OTREstablished",props:{onClickRefresh:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickEnd:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};var OTRStates=function OTRStates(_ref){var title=_ref.title,description=_ref.description,icon=_ref.icon,onClickStart=_ref.onClickStart,t=(0,dist.useTranslation)();return react.createElement(fuselage.States,null,react.createElement(fuselage.StatesIcon,{name:icon}),react.createElement(fuselage.StatesTitle,null,title),react.createElement(fuselage.StatesSubtitle,null,description),react.createElement(fuselage.StatesActions,null,react.createElement(fuselage.StatesAction,{onClick:onClickStart},t("New_OTR_Chat"))))},components_OTRStates=OTRStates;OTRStates.__docgenInfo={description:"",methods:[],displayName:"OTRStates",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"IconName"},description:""},onClickStart:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};var OTR=function OTR(_ref){var isOnline=_ref.isOnline,onClickClose=_ref.onClickClose,onClickStart=_ref.onClickStart,onClickEnd=_ref.onClickEnd,onClickRefresh=_ref.onClickRefresh,otrState=_ref.otrState,peerUsername=_ref.peerUsername,t=(0,dist.useTranslation)(),room=(0,RoomContext.nq)();return react.createElement(react.Fragment,null,react.createElement(Contextualbar.mH,null,react.createElement(Contextualbar.A4,{name:"stopwatch"}),react.createElement(Contextualbar.jY,null,t("OTR")),onClickClose&&react.createElement(Contextualbar.pi,{onClick:onClickClose})),react.createElement(Contextualbar.xN,{p:24,color:"default"},react.createElement(fuselage.Box,{fontScale:"h4"},t("Off_the_record_conversation")),function renderOTRBody(){return room.encrypted?react.createElement(fuselage.Callout,{title:t("OTR_not_available"),type:"warning"},t("OTR_not_available_e2ee")):isOnline?function renderOTRState(){switch(otrState){case OtrRoomState.Q.NOT_STARTED:return react.createElement(fuselage.Button,{onClick:onClickStart,primary:!0},t("Start_OTR"));case OtrRoomState.Q.ESTABLISHING:return react.createElement(fuselage.Box,null,react.createElement(fuselage.Box,{fontScale:"p2"},t("Please_wait_while_OTR_is_being_established")),react.createElement(fuselage.Box,{mb:16},react.createElement(fuselage.Throbber,null)));case OtrRoomState.Q.ESTABLISHED:return react.createElement(components_OTREstablished,{onClickEnd:onClickEnd,onClickRefresh:onClickRefresh});case OtrRoomState.Q.DECLINED:return react.createElement(components_OTRStates,{title:t("OTR_Chat_Declined_Title"),description:t("OTR_Chat_Declined_Description",peerUsername||""),icon:"cross",onClickStart:onClickStart});case OtrRoomState.Q.TIMEOUT:return react.createElement(components_OTRStates,{title:t("OTR_Chat_Timeout_Title"),description:t("OTR_Chat_Timeout_Description",peerUsername||""),icon:"clock",onClickStart:onClickStart});default:return react.createElement(components_OTRStates,{title:t("OTR_Chat_Error_Title"),description:t("OTR_Chat_Error_Description"),icon:"warning",onClickStart:onClickStart})}}():react.createElement(fuselage.Box,{fontScale:"p2m"},t("OTR_is_only_available_when_both_users_are_online"))}()))},OTR_OTR=OTR;OTR.__docgenInfo={description:"",methods:[],displayName:"OTR",props:{isOnline:{required:!0,tsType:{name:"boolean"},description:""},onClickClose:{required:!0,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLOrSVGElement"}],raw:"MouseEventHandler<HTMLOrSVGElement>"},description:""},onClickStart:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickEnd:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickRefresh:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},otrState:{required:!0,tsType:{name:"string"},description:""},peerUsername:{required:!0,tsType:{name:"IUser['username']",raw:"IUser['username']"},description:""}}}},"./client/views/room/contextualBar/OTR/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return OTR_OTRWithData}});var react=__webpack_require__("./node_modules/react/index.js"),OtrRoomState=__webpack_require__("./app/otr/lib/OtrRoomState.ts"),useOTR=__webpack_require__("./client/hooks/useOTR.ts"),usePresence=__webpack_require__("./client/hooks/usePresence.ts"),RoomToolboxContext=__webpack_require__("./client/views/room/contexts/RoomToolboxContext.ts"),OTR=__webpack_require__("./client/views/room/contextualBar/OTR/OTR.tsx"),OTRWithData=function OTRWithData(){var _useOTR=(0,useOTR.N)(),otr=_useOTR.otr,otrState=_useOTR.otrState,closeTab=(0,RoomToolboxContext.W)().closeTab,peerUserPresence=(0,usePresence.x)(null==otr?void 0:otr.getPeerId()),userStatus=null==peerUserPresence?void 0:peerUserPresence.status,peerUsername=null==peerUserPresence?void 0:peerUserPresence.username,isOnline=!["offline","loading"].includes(userStatus||"");return(0,react.useEffect)((function(){if(otrState===OtrRoomState.Q.ESTABLISHING){var timeout=setTimeout((function(){null==otr||otr.setState(OtrRoomState.Q.TIMEOUT)}),1e4);return function(){clearTimeout(timeout)}}}),[otr,otrState]),react.createElement(OTR.A,{isOnline:isOnline,onClickClose:closeTab,onClickStart:function handleStart(){null==otr||otr.handshake()},onClickEnd:function handleEnd(){null==otr||otr.end()},onClickRefresh:function handleReset(){null==otr||otr.reset(),null==otr||otr.handshake(!0)},otrState:otrState,peerUsername:peerUsername})},OTR_OTRWithData=OTRWithData;OTRWithData.__docgenInfo={description:"",methods:[],displayName:"OTRWithData"}}}]);