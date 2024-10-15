"use strict";(self.webpackChunk_rocket_chat_meteor=self.webpackChunk_rocket_chat_meteor||[]).push([[2206],{"./client/components/InfiniteListAnchor.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@rocket.chat/fuselage/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_excluded=["loadMore"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var InfiniteListAnchor=function InfiniteListAnchor(_ref){var loadMore=_ref.loadMore,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){var target=ref.current;if(target){var observer=new IntersectionObserver((function(e){e[0].isIntersecting&&loadMore()}),{root:null,threshold:.1});return observer.observe(target),function(){return observer.disconnect()}}}),[loadMore]),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__.Box,_extends({width:5,height:5,ref:ref},props))};__webpack_exports__.A=InfiniteListAnchor,InfiniteListAnchor.__docgenInfo={description:"",methods:[],displayName:"InfiniteListAnchor",props:{loadMore:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./client/hooks/usePreventPropagation.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{K:function(){return usePreventPropagation}});var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@rocket.chat/fuselage-hooks/dist/index.module.js"),usePreventPropagation=function usePreventPropagation(fn){return(0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffectEvent)((function(e){e.stopPropagation(),null==fn||fn(e)}))}},"./client/views/room/contextualBar/RoomMembers/RoomMembers.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return RoomMembers_RoomMembers}});var fuselage=__webpack_require__("./node_modules/@rocket.chat/fuselage/index.js"),index_module=__webpack_require__("./node_modules/@rocket.chat/fuselage-hooks/dist/index.module.js"),dist=__webpack_require__("../../packages/ui-contexts/dist/index.js"),react=__webpack_require__("./node_modules/react/index.js"),react_virtuoso_dist=__webpack_require__("./node_modules/react-virtuoso/dist/index.mjs"),Contextualbar=__webpack_require__("./client/components/Contextualbar/index.ts"),CustomScrollbars=__webpack_require__("./client/components/CustomScrollbars/index.ts"),InfiniteListAnchor=__webpack_require__("./client/components/InfiniteListAnchor.tsx"),ui_avatar_dist=__webpack_require__("../../packages/ui-avatar/dist/index.js"),UserStatus=__webpack_require__("./client/components/UserStatus/index.ts"),usePreventPropagation=__webpack_require__("./client/hooks/usePreventPropagation.ts"),ui_client_dist=__webpack_require__("../../packages/ui-client/dist/index.js"),useUserInfoActions=__webpack_require__("./client/views/room/hooks/useUserInfoActions/index.ts"),RoomMembersActions=function RoomMembersActions(_ref){var username=_ref.username,_id=_ref._id,name=_ref.name,rid=_ref.rid,freeSwitchExtension=_ref.freeSwitchExtension,reload=_ref.reload,t=(0,dist.useTranslation)(),menuOptions=(0,useUserInfoActions.Q)({rid:rid,user:{_id:_id,username:username,name:name,freeSwitchExtension:freeSwitchExtension},reload:reload,size:0,isMember:!0}).menuActions;return menuOptions?react.createElement(ui_client_dist.h4,{title:t("More"),key:"menu","data-qa-id":"UserUserInfo-menu",sections:menuOptions,placement:"bottom-end"}):null},RoomMembers_RoomMembersActions=RoomMembersActions;function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}RoomMembersActions.__docgenInfo={description:"",methods:[],displayName:"RoomMembersActions",props:{rid:{required:!0,tsType:{name:"IRoom['_id']",raw:"IRoom['_id']"},description:""},reload:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};var RoomMembersItem=function RoomMembersItem(_ref){var _id=_ref._id,name=_ref.name,username=_ref.username,federated=_ref.federated,freeSwitchExtension=_ref.freeSwitchExtension,onClickView=_ref.onClickView,rid=_ref.rid,reload=_ref.reload,useRealName=_ref.useRealName,_useState2=_slicedToArray((0,react.useState)(),2),showButton=_useState2[0],setShowButton=_useState2[1],handleMenuEvent=_defineProperty({},(0,index_module.usePrefersReducedMotion)()?"onMouseEnter":"onTransitionEnd",setShowButton),preventPropagation=(0,usePreventPropagation.K)(),_getUserDisplayNames=function getUserDisplayNames(name,username,useRealName){if(!username)throw new Error("Username is required");return useRealName&&name?[name,username]:[username]}(name,username,useRealName),_getUserDisplayNames2=_slicedToArray(_getUserDisplayNames,2),nameOrUsername=_getUserDisplayNames2[0],displayUsername=_getUserDisplayNames2[1];return react.createElement(fuselage.Option,_extends({"data-username":username,"data-userid":_id,onClick:onClickView},handleMenuEvent),react.createElement(fuselage.OptionAvatar,null,react.createElement(ui_avatar_dist.H8,{username:username||"",size:"x28"})),react.createElement(fuselage.OptionColumn,null,federated?react.createElement(fuselage.Icon,{name:"globe",size:"x16"}):react.createElement(UserStatus.LO,{uid:_id})),react.createElement(fuselage.OptionContent,{"data-qa":"MemberItem-".concat(username)},nameOrUsername," ",displayUsername&&react.createElement(fuselage.OptionDescription,null,"(",displayUsername,")")),react.createElement(fuselage.OptionMenu,{onClick:preventPropagation},showButton?react.createElement(RoomMembers_RoomMembersActions,{username:username,name:name,rid:rid,_id:_id,freeSwitchExtension:freeSwitchExtension,reload:reload}):react.createElement(fuselage.IconButton,{tiny:!0,icon:"kebab"})))},RoomMembers_RoomMembersItem=Object.assign(RoomMembersItem,{Skeleton:fuselage.OptionSkeleton});RoomMembersItem.__docgenInfo={description:"",methods:[],displayName:"RoomMembersItem",props:{onClickView:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLElement"}],raw:"MouseEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},rid:{required:!0,tsType:{name:"IRoom['_id']",raw:"IRoom['_id']"},description:""},reload:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},useRealName:{required:!0,tsType:{name:"boolean"},description:""}}};var RoomMembersRow=function RoomMembersRow(_ref){var user=_ref.user,_ref$data=_ref.data,onClickView=_ref$data.onClickView,rid=_ref$data.rid,index=_ref.index,reload=_ref.reload,useRealName=_ref.useRealName;return null!=user&&user._id?react.createElement(RoomMembers_RoomMembersItem,{key:index,useRealName:useRealName,username:user.username,_id:user._id,rid:rid,name:user.name,federated:user.federated,freeSwitchExtension:user.freeSwitchExtension,onClickView:onClickView,reload:reload}):react.createElement(RoomMembers_RoomMembersItem.Skeleton,null)},RoomMembers_RoomMembersRow=(0,react.memo)(RoomMembersRow);RoomMembersRow.__docgenInfo={description:"",methods:[],displayName:"RoomMembersRow",props:{user:{required:!0,tsType:{name:"Pick",elements:[{name:"IUser"},{name:"union",raw:"'federated' | 'username' | 'name' | '_id' | 'freeSwitchExtension'",elements:[{name:"literal",value:"'federated'"},{name:"literal",value:"'username'"},{name:"literal",value:"'name'"},{name:"literal",value:"'_id'"},{name:"literal",value:"'freeSwitchExtension'"}]}],raw:"Pick<IUser, 'federated' | 'username' | 'name' | '_id' | 'freeSwitchExtension'>"},description:""},data:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n\tonClickView: (e: MouseEvent<HTMLElement>) => void;\n\trid: IRoom['_id'];\n}",signature:{properties:[{key:"onClickView",value:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLElement"}],raw:"MouseEvent<HTMLElement>"},name:"e"}],return:{name:"void"}},required:!0}},{key:"rid",value:{name:"IRoom['_id']",raw:"IRoom['_id']",required:!0}}]}},description:""},index:{required:!0,tsType:{name:"number"},description:""},reload:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},useRealName:{required:!0,tsType:{name:"boolean"},description:""}}};var RoomMembers=function RoomMembers(_ref){var loading=_ref.loading,_ref$members=_ref.members,members=void 0===_ref$members?[]:_ref$members,text=_ref.text,type=_ref.type,setText=_ref.setText,setType=_ref.setType,onClickClose=_ref.onClickClose,onClickView=_ref.onClickView,onClickAdd=_ref.onClickAdd,onClickInvite=_ref.onClickInvite,total=_ref.total,error=_ref.error,loadMoreItems=_ref.loadMoreItems,_ref$renderRow=_ref.renderRow,RowComponent=void 0===_ref$renderRow?RoomMembers_RoomMembersRow:_ref$renderRow,rid=_ref.rid,isTeam=_ref.isTeam,isDirect=_ref.isDirect,reload=_ref.reload,t=(0,dist.useTranslation)(),inputRef=(0,index_module.useAutoFocus)(!0),itemData=(0,react.useMemo)((function(){return{onClickView:onClickView,rid:rid}}),[onClickView,rid]),options=(0,react.useMemo)((function(){return[["online",t("Online")],["all",t("All")]]}),[t]),loadMoreMembers=(0,index_module.useDebouncedCallback)((function(){loadMoreItems()}),300,[loadMoreItems,members]),useRealName=Boolean((0,dist.useSetting)("UI_Use_Real_Name"));return react.createElement(react.Fragment,null,react.createElement(Contextualbar.mH,{"data-qa-id":"RoomHeader-Members"},react.createElement(Contextualbar.A4,{name:"members"}),react.createElement(Contextualbar.jY,null,t(isTeam?"Teams_members":"Members")),onClickClose&&react.createElement(Contextualbar.pi,{onClick:onClickClose})),react.createElement(Contextualbar.cI,null,react.createElement(fuselage.TextInput,{placeholder:t("Search_by_username"),value:text,ref:inputRef,onChange:setText,addon:react.createElement(fuselage.Icon,{name:"magnifier",size:"x20"})}),react.createElement(fuselage.Box,{w:"x144",mis:8},react.createElement(fuselage.Select,{onChange:function onChange(value){return setType(value)},value:type,options:options}))),react.createElement(Contextualbar.Ib,{p:12},loading&&react.createElement(fuselage.Box,{pi:24,pb:12},react.createElement(fuselage.Throbber,{size:"x12"})),error&&react.createElement(fuselage.Box,{pi:12,pb:12},react.createElement(fuselage.Callout,{type:"danger"},error.message)),!loading&&members.length<=0&&react.createElement(Contextualbar.lG,{title:t("No_members_found")}),!loading&&members.length>0&&react.createElement(react.Fragment,null,react.createElement(fuselage.Box,{pi:18,pb:12},react.createElement(fuselage.Box,{is:"span",color:"hint",fontScale:"p2"},t("Showing_current_of_total",{current:members.length,total:total}))),react.createElement(fuselage.Box,{w:"full",h:"full",overflow:"hidden",flexShrink:1},react.createElement(react_virtuoso_dist.Virtuoso,{style:{height:"100%",width:"100%"},totalCount:total,overscan:50,data:members,components:{Scroller:CustomScrollbars.Z,Footer:function Footer(){return react.createElement(InfiniteListAnchor.A,{loadMore:loadMoreMembers})}},itemContent:function itemContent(index,data){return react.createElement(RowComponent,{useRealName:useRealName,data:itemData,user:data,index:index,reload:reload})}})))),!isDirect&&(onClickInvite||onClickAdd)&&react.createElement(Contextualbar.kV,null,react.createElement(fuselage.ButtonGroup,{stretch:!0},onClickInvite&&react.createElement(fuselage.Button,{icon:"link",onClick:onClickInvite,width:"50%"},t("Invite_Link")),onClickAdd&&react.createElement(fuselage.Button,{icon:"user-plus",onClick:onClickAdd,width:"50%",primary:!0},t("Add")))))},RoomMembers_RoomMembers=RoomMembers;RoomMembers.__docgenInfo={description:"",methods:[],displayName:"RoomMembers",props:{rid:{required:!0,tsType:{name:"IRoom['_id']",raw:"IRoom['_id']"},description:""},isTeam:{required:!1,tsType:{name:"boolean"},description:""},isDirect:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""},text:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"string"},description:""},setText:{required:!0,tsType:{name:"FormEventHandler",elements:[{name:"HTMLElement"}],raw:"FormEventHandler<HTMLElement>"},description:""},setType:{required:!0,tsType:{name:"signature",type:"function",raw:"(type: 'online' | 'all') => void",signature:{arguments:[{type:{name:"union",raw:"'online' | 'all'",elements:[{name:"literal",value:"'online'"},{name:"literal",value:"'all'"}]},name:"type"}],return:{name:"void"}}},description:""},members:{required:!1,tsType:{name:"Array",elements:[{name:"Pick",elements:[{name:"IUser"},{name:"union",raw:"'username' | '_id' | 'name' | 'status' | 'freeSwitchExtension'",elements:[{name:"literal",value:"'username'"},{name:"literal",value:"'_id'"},{name:"literal",value:"'name'"},{name:"literal",value:"'status'"},{name:"literal",value:"'freeSwitchExtension'"}]}],raw:"Pick<IUser, 'username' | '_id' | 'name' | 'status' | 'freeSwitchExtension'>"}],raw:"RoomMemberUser[]"},description:"",defaultValue:{value:"[]",computed:!1}},total:{required:!0,tsType:{name:"number"},description:""},error:{required:!1,tsType:{name:"Error"},description:""},onClickClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickView:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLElement"}],raw:"MouseEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onClickAdd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickInvite:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loadMoreItems:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},renderRow:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: ComponentProps<typeof RoomMembersRow>) => ReactElement | null",signature:{arguments:[{type:{name:"ComponentProps",elements:[{name:"RoomMembersRow"}],raw:"ComponentProps<typeof RoomMembersRow>"},name:"props"}],return:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]}}},description:"",defaultValue:{value:"memo(RoomMembersRow)",computed:!0}},reload:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./client/views/room/contextualBar/RoomMembers/RoomMembers.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Loading:function(){return Loading},__namedExportsOrder:function(){return __namedExportsOrder}});var _rocket_chat_core_typings__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core-typings/dist/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_components_Contextualbar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./client/components/Contextualbar/index.ts"),_RoomMembers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./client/views/room/contextualBar/RoomMembers/RoomMembers.tsx");__webpack_exports__.default={title:"Room/Contextual Bar/RoomMembers",component:_RoomMembers__WEBPACK_IMPORTED_MODULE_4__.A,parameters:{layout:"fullscreen",actions:{argTypesRegex:"^on.*"}},decorators:[fn=>react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_Contextualbar__WEBPACK_IMPORTED_MODULE_3__.bc,{height:"100vh"},fn())]};const Template=args=>react__WEBPACK_IMPORTED_MODULE_2__.createElement(_RoomMembers__WEBPACK_IMPORTED_MODULE_4__.A,args),Default=Template.bind({});Default.args={loading:!1,members:[{_id:"rocket.cat",username:"rocket.cat",status:_rocket_chat_core_typings__WEBPACK_IMPORTED_MODULE_0__.UserStatus.ONLINE,name:"Rocket.Cat"}],text:"filter",type:"online",setText:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("Lorem Ipsum"),setType:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("online"),total:123,loadMoreItems:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("loadMoreItems"),rid:"!roomId",isTeam:!1,isDirect:!1,reload:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("reload")};const Loading=Template.bind({});Loading.args={loading:!0,setText:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("setText"),setType:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("setType"),loadMoreItems:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("loadMoreItems"),reload:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("reload")};const __namedExportsOrder=["Default","Loading"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <RoomMembers {...args} />",...Default.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"args => <RoomMembers {...args} />",...Loading.parameters?.docs?.source}}}}}]);