"use strict";(self.webpackChunk_rocket_chat_meteor=self.webpackChunk_rocket_chat_meteor||[]).push([[3374],{"./client/components/UserCard/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{qu:function(){return UserCard_UserCard},gG:function(){return UserCard_UserCardAction},MP:function(){return UserCard_UserCardInfo},Qv:function(){return UserCard_UserCardRole},rJ:function(){return UserCard_UserCardRoles},xP:function(){return UserCard_UserCardSkeleton},Cg:function(){return UserCard_UserCardUsername}});var index_module=__webpack_require__("./node_modules/@rocket.chat/css-in-js/dist/index.module.js"),fuselage=__webpack_require__("./node_modules/@rocket.chat/fuselage/index.js"),dist=__webpack_require__("../../packages/ui-avatar/dist/index.js"),ui_contexts_dist=__webpack_require__("../../packages/ui-contexts/dist/index.js"),react=__webpack_require__("./node_modules/react/index.js"),useEmbeddedLayout=__webpack_require__("./client/hooks/useEmbeddedLayout.ts"),MarkdownText=__webpack_require__("./client/components/MarkdownText.tsx"),UserStatus=__webpack_require__("./client/components/UserStatus/index.ts"),dist_import=__webpack_require__("./node_modules/@react-aria/toolbar/dist/import.mjs");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var UserCardActions=function UserCardActions(props){var ref=(0,react.useRef)(null),toolbarProps=(0,dist_import.t)(props,ref).toolbarProps;return react.createElement(fuselage.ButtonGroup,_extends({ref:ref,small:!0},toolbarProps,props))},UserCard_UserCardActions=UserCardActions;UserCardActions.__docgenInfo={description:"",methods:[],displayName:"UserCardActions"};var dialog_dist_import=__webpack_require__("./node_modules/@react-aria/dialog/dist/import.mjs");function UserCardDialog_extends(){return UserCardDialog_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},UserCardDialog_extends.apply(null,arguments)}var UserCardDialog=function UserCardDialog(props){var ref=(0,react.useRef)(null),dialogProps=(0,dialog_dist_import.s)(props,ref).dialogProps;return react.createElement(fuselage.Box,UserCardDialog_extends({ref:ref,minHeight:"x214","rcx-user-card":!0,bg:"surface",elevation:"2",p:24,display:"flex",borderRadius:"x4",width:"439px"},props,dialogProps))},UserCard_UserCardDialog=UserCardDialog;function UserCardInfo_extends(){return UserCardInfo_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},UserCardInfo_extends.apply(null,arguments)}UserCardDialog.__docgenInfo={description:"",methods:[],displayName:"UserCardDialog"};var UserCardInfo=function UserCardInfo(props){return react.createElement(fuselage.Box,UserCardInfo_extends({mb:8,is:"span",fontScale:"p2",color:"hint",withTruncatedText:!0},props))},UserCard_UserCardInfo=UserCardInfo;UserCardInfo.__docgenInfo={description:"",methods:[],displayName:"UserCardInfo"};var UserCardRoles=function UserCardRoles(_ref){var children=_ref.children;return react.createElement(fuselage.Box,{m:"neg-x2"},react.createElement(UserCard_UserCardInfo,{flexWrap:"wrap",display:"flex",flexShrink:0},children))},UserCard_UserCardRoles=UserCardRoles;UserCardRoles.__docgenInfo={description:"",methods:[],displayName:"UserCardRoles",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};var _excluded=["name","status"];function UserCardUsername_extends(){return UserCardUsername_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},UserCardUsername_extends.apply(null,arguments)}var UserCardUsername=function UserCardUsername(_ref){var name=_ref.name,_ref$status=_ref.status,status=void 0===_ref$status?react.createElement(UserStatus.mQ,null):_ref$status,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react.createElement(fuselage.Box,UserCardUsername_extends({display:"flex",title:name,flexGrow:2,flexShrink:1,flexBasis:0,alignItems:"center",fontScale:"h4",color:"default",withTruncatedText:!0},props),status,react.createElement(fuselage.Box,{mis:8,flexGrow:1,withTruncatedText:!0},name))},UserCard_UserCardUsername=UserCardUsername;UserCardUsername.__docgenInfo={description:"",methods:[],displayName:"UserCardUsername",props:{name:{required:!0,tsType:{name:"ReactNode"},description:""},status:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"<UserStatus.Offline />",computed:!1}}}};var _templateObject,UserCard_excluded=["onOpenUserInfo","name","username","etag","customStatus","roles","bio","status","actions","localTime","onClose","nickname"];function UserCard_extends(){return UserCard_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},UserCard_extends.apply(null,arguments)}var clampStyle=(0,index_module.css)(_templateObject||(_templateObject=function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n\tdisplay: -webkit-box;\n\toverflow: hidden;\n\t-webkit-line-clamp: 3;\n\t-webkit-box-orient: vertical;\n\tword-break: break-all;\n"]))),UserCard=function UserCard(_ref){var onOpenUserInfo=_ref.onOpenUserInfo,name=_ref.name,username=_ref.username,etag=_ref.etag,customStatus=_ref.customStatus,roles=_ref.roles,bio=_ref.bio,_ref$status=_ref.status,status=void 0===_ref$status?react.createElement(UserStatus.mQ,null):_ref$status,actions=_ref.actions,localTime=_ref.localTime,onClose=_ref.onClose,nickname=_ref.nickname,props=function UserCard_objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function UserCard_objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,UserCard_excluded),t=(0,ui_contexts_dist.useTranslation)(),isLayoutEmbedded=(0,useEmbeddedLayout.a)();return react.createElement(UserCard_UserCardDialog,UserCard_extends({"data-qa":"UserCard"},props),react.createElement("div",null,username&&react.createElement(dist.H8,{username:username,etag:etag,size:"x124"}),react.createElement(fuselage.Box,{flexGrow:0,display:"flex",mbs:12,alignItems:"center",justifyContent:"center"},react.createElement(UserCard_UserCardActions,{"aria-label":t("User_card_actions")},actions))),react.createElement(fuselage.Box,{display:"flex",flexDirection:"column",flexGrow:1,flexShrink:1,mis:16,width:"1px"},react.createElement(fuselage.Box,{mbe:4,withTruncatedText:!0,display:"flex",alignItems:"center"},react.createElement(UserCard_UserCardUsername,{status:status,name:name}),nickname&&react.createElement(fuselage.Box,{flexGrow:1,flexShrink:1,flexBasis:0,title:nickname,color:"hint",mis:4,fontScale:"p2",withTruncatedText:!0},"(",nickname,")")),customStatus&&react.createElement(UserCard_UserCardInfo,{mbe:16},"string"==typeof customStatus?react.createElement(MarkdownText.A,{withTruncatedText:!0,variant:"inlineWithoutBreaks",content:customStatus,parseEmoji:!0}):customStatus),react.createElement(UserCard_UserCardRoles,null,roles),react.createElement(UserCard_UserCardInfo,null,localTime),bio&&react.createElement(UserCard_UserCardInfo,{withTruncatedText:!1,className:clampStyle,height:"x60"},"string"==typeof bio?react.createElement(MarkdownText.A,{variant:"inline",content:bio}):bio),onOpenUserInfo&&!isLayoutEmbedded&&react.createElement("div",null,react.createElement(fuselage.Button,{small:!0,onClick:onOpenUserInfo},t("See_full_profile")))),onClose&&react.createElement(fuselage.IconButton,{mis:16,small:!0,"aria-label":t("Close"),icon:"cross",onClick:onClose}))},UserCard_UserCard=UserCard;UserCard.__docgenInfo={description:"",methods:[],displayName:"UserCard",props:{onOpenUserInfo:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:""},username:{required:!1,tsType:{name:"string"},description:""},etag:{required:!1,tsType:{name:"string"},description:""},customStatus:{required:!1,tsType:{name:"ReactNode"},description:""},roles:{required:!1,tsType:{name:"ReactNode"},description:""},bio:{required:!1,tsType:{name:"ReactNode"},description:""},status:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"<Status.Offline />",computed:!1}},actions:{required:!1,tsType:{name:"ReactNode"},description:""},localTime:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},nickname:{required:!1,tsType:{name:"string"},description:""}}};var UserCardAction_excluded=["label","icon"];function UserCardAction_extends(){return UserCardAction_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},UserCardAction_extends.apply(null,arguments)}var UserCardAction=function UserCardAction(_ref){var label=_ref.label,icon=_ref.icon,props=function UserCardAction_objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function UserCardAction_objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,UserCardAction_excluded);return react.createElement(fuselage.IconButton,UserCardAction_extends({icon:icon,small:!0,title:label},props))},UserCard_UserCardAction=UserCardAction;UserCardAction.__docgenInfo={description:"",methods:[],displayName:"UserCardAction"};var UserCardRole=function UserCardRole(_ref){var children=_ref.children;return react.createElement(fuselage.Box,{m:2,fontScale:"c2"},react.createElement(fuselage.Tag,{children:children}))},UserCard_UserCardRole=UserCardRole;UserCardRole.__docgenInfo={description:"",methods:[],displayName:"UserCardRole",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};var UserCardSkeleton=function UserCardSkeleton(props){return react.createElement(UserCard_UserCardDialog,props,react.createElement(fuselage.Box,null,react.createElement(fuselage.Skeleton,{borderRadius:"x4",width:"x124",height:"x124",variant:"rect"}),react.createElement(fuselage.Box,{flexGrow:0,display:"flex",mbs:12,alignItems:"center",justifyContent:"center"},Array.from({length:3}).map((function(_,i){return react.createElement(fuselage.Skeleton,{key:i,variant:"rect",height:"x28",width:"x28",borderRadius:"x4",mi:2})})))),react.createElement(fuselage.Box,{display:"flex",flexDirection:"column",flexGrow:1,flexShrink:1,mis:16,width:"1px"},react.createElement(fuselage.Box,{mbe:4,withTruncatedText:!0,display:"flex",alignItems:"center"},react.createElement(fuselage.Skeleton,{width:"100%"})),react.createElement(fuselage.Skeleton,{width:"100%"}),Array.from({length:3}).map((function(_,i){return react.createElement(fuselage.Skeleton,{key:i,flexGrow:1,mi:2})})),Array.from({length:2}).map((function(_,i){return react.createElement(fuselage.Skeleton,{key:i,width:"100%"})}))))},UserCard_UserCardSkeleton=UserCardSkeleton;UserCardSkeleton.__docgenInfo={description:"",methods:[],displayName:"UserCardSkeleton"}},"./client/hooks/useFormatTime.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:function(){return useFormatTime}});var _rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/ui-contexts/dist/index.js"),moment__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/moment/moment.js"),moment__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),dayFormat=["h:mm A","H:mm"],useFormatTime=function useFormatTime(){var clockMode=(0,_rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_0__.useUserPreference)("clockMode"),format=(0,_rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_0__.useSetting)("Message_TimeFormat"),sameDay=void 0!==clockMode?dayFormat[clockMode-1]:format;return(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((function(time){switch(clockMode){case 1:case 2:return moment__WEBPACK_IMPORTED_MODULE_1___default()(time).format(sameDay);default:return moment__WEBPACK_IMPORTED_MODULE_1___default()(time).format(format)}}),[clockMode,format,sameDay])}},"./client/hooks/useUTCClock.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{q:function(){return useUTCClock}});var moment=__webpack_require__("./node_modules/moment/moment.js"),moment_default=__webpack_require__.n(moment),react=__webpack_require__("./node_modules/react/index.js"),useFormatTime=__webpack_require__("./client/hooks/useFormatTime.ts");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var useUTCClock=function useUTCClock(utcOffset){var time=function useTimezoneTime(offset){var interval=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,_useState2=_slicedToArray((0,react.useState)((function(){return moment_default()().utcOffset(offset)})),2),time=_useState2[0],setTime=_useState2[1],format=(0,useFormatTime.a)();return(0,react.useEffect)((function(){if(void 0!==offset){var update=function update(){setTime(moment_default()().utcOffset(offset))},timer=setInterval(update,interval);return update(),function(){clearInterval(timer)}}}),[offset,interval]),format(time)}(utcOffset,1e4);return"".concat(time," (UTC ").concat(utcOffset,")")}},"./client/views/hooks/useMemberExists.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{M:function(){return useMemberExists}});var _rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/ui-contexts/dist/index.js"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@tanstack/react-query/build/lib/index.js"),useMemberExists=function useMemberExists(_ref){var roomId=_ref.roomId,username=_ref.username,checkMember=(0,_rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_0__.useEndpoint)("GET","/v1/rooms.isMember");return(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(["rooms/isMember",roomId,username],(function(){return checkMember({roomId:roomId,username:username})}))}},"./client/views/room/UserCard/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return UserCard_UserCardWithData}});var index_module=__webpack_require__("./node_modules/@rocket.chat/fuselage-hooks/dist/index.module.js"),dist=__webpack_require__("../../packages/ui-client/dist/index.js"),ui_contexts_dist=__webpack_require__("../../packages/ui-contexts/dist/index.js"),react=__webpack_require__("./node_modules/react/index.js"),getUserDisplayName=__webpack_require__("./lib/getUserDisplayName.ts"),useUTCClock=__webpack_require__("./client/hooks/useUTCClock.ts"),LocalTime=function LocalTime(_ref){var utcOffset=_ref.utcOffset,time=(0,useUTCClock.q)(utcOffset),t=(0,ui_contexts_dist.useTranslation)();return react.createElement(react.Fragment,null,t("Local_Time_time",{time:time}))},components_LocalTime=(0,react.memo)(LocalTime);LocalTime.__docgenInfo={description:"",methods:[],displayName:"LocalTime",props:{utcOffset:{required:!0,tsType:{name:"number"},description:""}}};var UserCard=__webpack_require__("./client/components/UserCard/index.ts"),UserStatus=__webpack_require__("./client/components/UserStatus/index.ts"),useUserInfoQuery=__webpack_require__("./client/hooks/useUserInfoQuery.ts"),useMemberExists=__webpack_require__("./client/views/hooks/useMemberExists.ts"),useUserInfoActions=__webpack_require__("./client/views/room/hooks/useUserInfoActions/index.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function _toConsumableArray(r){return function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}(r)||function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||_unsupportedIterableToArray(r)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||_unsupportedIterableToArray(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var UserCardWithData=function UserCardWithData(_ref){var _user$_id,username=_ref.username,rid=_ref.rid,onOpenUserInfo=_ref.onOpenUserInfo,onClose=_ref.onClose,t=(0,ui_contexts_dist.useTranslation)(),getRoles=(0,ui_contexts_dist.useRolesDescription)(),showRealNames=Boolean((0,ui_contexts_dist.useSetting)("UI_Use_Real_Name")),_useUserInfoQuery=(0,useUserInfoQuery.H)({username:username}),data=_useUserInfoQuery.data,isUserInfoLoading=_useUserInfoQuery.isLoading,_useMemberExists=(0,useMemberExists.M)({roomId:rid,username:username}),isMemberData=_useMemberExists.data,refetch=_useMemberExists.refetch,membershipCheckSuccess=_useMemberExists.isSuccess,isMembershipStatusLoading=_useMemberExists.isLoading,isLoading=isUserInfoLoading||isMembershipStatusLoading,isMember=membershipCheckSuccess&&(null==isMemberData?void 0:isMemberData.isMember),user=(0,react.useMemo)((function(){var defaultValue=isLoading?void 0:null,_ref2=(null==data?void 0:data.user)||{},_id=_ref2._id,name=_ref2.name,_ref2$roles=_ref2.roles,roles=void 0===_ref2$roles?defaultValue:_ref2$roles,_ref2$statusText=_ref2.statusText,statusText=void 0===_ref2$statusText?defaultValue:_ref2$statusText,_ref2$bio=_ref2.bio,bio=void 0===_ref2$bio?defaultValue:_ref2$bio,_ref2$utcOffset=_ref2.utcOffset,utcOffset=void 0===_ref2$utcOffset?defaultValue:_ref2$utcOffset,nickname=_ref2.nickname,avatarETag=_ref2.avatarETag,freeSwitchExtension=_ref2.freeSwitchExtension;return{_id:_id,name:(0,getUserDisplayName.N)(name,username,showRealNames),username:username,roles:roles&&getRoles(roles).map((function(role,index){return react.createElement(UserCard.Qv,{key:index},role)})),bio:bio,etag:avatarETag,localTime:utcOffset&&Number.isInteger(utcOffset)&&react.createElement(components_LocalTime,{utcOffset:utcOffset}),status:_id&&react.createElement(UserStatus.LO,{uid:_id}),customStatus:statusText,nickname:nickname,freeSwitchExtension:freeSwitchExtension}}),[data,username,showRealNames,isLoading,getRoles]),handleOpenUserInfo=(0,index_module.useEffectEvent)((function(){onOpenUserInfo(),onClose()})),_useUserInfoActions=(0,useUserInfoActions.Q)({rid:rid,user:{_id:null!==(_user$_id=user._id)&&void 0!==_user$_id?_user$_id:"",username:user.username,name:user.name,freeSwitchExtension:user.freeSwitchExtension},size:3,isMember:isMember,reload:refetch}),actionsDefinition=_useUserInfoActions.actions,menuOptions=_useUserInfoActions.menuActions,menu=(0,react.useMemo)((function(){return null!=menuOptions&&menuOptions.length?react.createElement(dist.h4,{title:t("More"),key:"menu","data-qa-id":"menu",sections:menuOptions,placement:"bottom-start",callbackAction:onClose}):null}),[menuOptions,onClose,t]),actions=(0,react.useMemo)((function(){return[].concat(_toConsumableArray(actionsDefinition.map((function mapAction(_ref3){var _ref4=_slicedToArray(_ref3,2),key=_ref4[0],_ref4$=_ref4[1],content=_ref4$.content,title=_ref4$.title,icon=_ref4$.icon,onClick=_ref4$.onClick;return react.createElement(UserCard.gG,{key:key,label:content||title,"aria-label":content||title,onClick:onClick,icon:icon})}))),[menu]).filter(Boolean)}),[actionsDefinition,menu]);return isLoading?react.createElement(UserCard.xP,null):react.createElement(UserCard.qu,_extends({},user,{onClose:onClose,onOpenUserInfo:handleOpenUserInfo,actions:actions}))},UserCard_UserCardWithData=UserCardWithData;UserCardWithData.__docgenInfo={description:"",methods:[],displayName:"UserCardWithData",props:{username:{required:!0,tsType:{name:"string"},description:""},rid:{required:!0,tsType:{name:"IRoom['_id']",raw:"IRoom['_id']"},description:""},onOpenUserInfo:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}}}]);