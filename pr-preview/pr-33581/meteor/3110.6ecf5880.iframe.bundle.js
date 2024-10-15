"use strict";(self.webpackChunk_rocket_chat_meteor=self.webpackChunk_rocket_chat_meteor||[]).push([[3110],{"./client/hooks/useEndpointAction.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return useEndpointAction}});var _rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/ui-contexts/dist/index.js"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@tanstack/react-query/build/lib/index.js");function useEndpointAction(method,pathPattern){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{keys:{}},sendData=(0,_rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_0__.useEndpoint)(method,pathPattern,options.keys),dispatchToastMessage=(0,_rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_0__.useToastMessageDispatch)();return(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(sendData,{onSuccess:function onSuccess(){options.successMessage&&dispatchToastMessage({type:"success",message:options.successMessage})},onError:function onError(error){dispatchToastMessage({type:"error",message:error})}}).mutateAsync}},"./client/views/room/contextualBar/NotificationPreferences/NotificationPreferences.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return NotificationPreferences_NotificationPreferences}});var fuselage=__webpack_require__("./node_modules/@rocket.chat/fuselage/index.js"),dist=__webpack_require__("../../packages/ui-contexts/dist/index.js"),react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),Contextualbar=__webpack_require__("./client/components/Contextualbar/index.ts"),NotificationByDevice=function NotificationByDevice(_ref){var device=_ref.device,icon=_ref.icon,children=_ref.children;return react.createElement(fuselage.Accordion.Item,{title:react.createElement(fuselage.Box,{display:"flex",alignItems:"center"},react.createElement(fuselage.Icon,{name:icon,size:"x18"}),react.createElement(fuselage.Box,{fontScale:"p2m",mi:16},device)),"data-qa-id":"".concat(device,"-notifications")},react.createElement(fuselage.FieldGroup,null,children))},components_NotificationByDevice=(0,react.memo)(NotificationByDevice);NotificationByDevice.__docgenInfo={description:"",methods:[],displayName:"NotificationByDevice",props:{device:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"IconName"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};var _excluded=["name","options","onChange","optionValue","children"];var NotificationPreference=function NotificationPreference(_ref){var name=_ref.name,options=_ref.options,onChange=_ref.onChange,optionValue=_ref.optionValue,children=_ref.children,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react.createElement(fuselage.Field,props,react.createElement(fuselage.FieldLabel,null,name),react.createElement(fuselage.FieldRow,null,react.createElement(fuselage.Select,{onChange:onChange,options:options,value:optionValue}),children))},components_NotificationPreference=NotificationPreference;NotificationPreference.__docgenInfo={description:"",methods:[],displayName:"NotificationPreference",props:{id:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: unknown) => void",signature:{arguments:[{type:{name:"unknown"},name:"e"}],return:{name:"void"}}},description:""},optionValue:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactElement"},description:""}}};var index_module=__webpack_require__("./node_modules/@rocket.chat/fuselage-hooks/dist/index.module.js"),NotificationToggle=function NotificationToggle(_ref){var label=_ref.label,description=_ref.description,onChange=_ref.onChange,defaultChecked=_ref.defaultChecked,fieldId=(0,index_module.useUniqueId)();return react.createElement(fuselage.FieldGroup,null,react.createElement(fuselage.Field,null,react.createElement(fuselage.FieldRow,null,react.createElement(fuselage.FieldLabel,{htmlFor:fieldId},label),react.createElement(fuselage.ToggleSwitch,{id:fieldId,"aria-describedby":"".concat(fieldId,"-hint"),onChange:onChange,defaultChecked:defaultChecked})),description&&react.createElement(fuselage.FieldDescription,{id:"".concat(fieldId,"-hint")},description)))},components_NotificationToggle=(0,react.memo)(NotificationToggle);NotificationToggle.__docgenInfo={description:"",methods:[],displayName:"NotificationToggle",props:{label:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: unknown) => void",signature:{arguments:[{type:{name:"unknown"},name:"e"}],return:{name:"void"}}},description:""},defaultChecked:{required:!0,tsType:{name:"boolean"},description:""}}};var NotificationPreferencesForm=function NotificationPreferencesForm(_ref){var notificationOptions=_ref.notificationOptions,handlePlaySound=_ref.handlePlaySound,t=(0,dist.useTranslation)(),_useFormContext=(0,index_esm.xW)(),watch=_useFormContext.watch,control=_useFormContext.control,showCounter=watch().showCounter;return react.createElement(react.Fragment,null,react.createElement(index_esm.xI,{control:control,name:"turnOn",render:function render(_ref2){var _ref2$field=_ref2.field,value=_ref2$field.value,onChange=_ref2$field.onChange;return react.createElement(components_NotificationToggle,{label:t("Turn_ON"),description:t("Receive_alerts"),onChange:onChange,defaultChecked:value})}}),react.createElement(index_esm.xI,{control:control,name:"muteGroupMentions",render:function render(_ref3){var _ref3$field=_ref3.field,value=_ref3$field.value,onChange=_ref3$field.onChange;return react.createElement(components_NotificationToggle,{label:t("Mute_Group_Mentions"),onChange:onChange,defaultChecked:value})}}),react.createElement(index_esm.xI,{control:control,name:"showCounter",render:function render(_ref4){var _ref4$field=_ref4.field,value=_ref4$field.value,onChange=_ref4$field.onChange;return react.createElement(components_NotificationToggle,{label:t("Show_counter"),description:t("Display_unread_counter"),onChange:onChange,defaultChecked:value})}}),!showCounter&&react.createElement(index_esm.xI,{control:control,name:"showMentions",render:function render(_ref5){var _ref5$field=_ref5.field,value=_ref5$field.value,onChange=_ref5$field.onChange;return react.createElement(components_NotificationToggle,{label:t("Show_mentions"),description:t("Display_mentions_counter"),onChange:onChange,defaultChecked:value})}}),react.createElement(fuselage.FieldGroup,null,react.createElement(components_NotificationByDevice,{device:t("Desktop"),icon:"desktop"},react.createElement(index_esm.xI,{control:control,name:"desktopAlert",render:function render(_ref6){var _ref6$field=_ref6.field,value=_ref6$field.value,onChange=_ref6$field.onChange;return react.createElement(components_NotificationPreference,{id:"DesktopAlert",name:t("Alerts"),options:notificationOptions.alerts,optionValue:value,onChange:onChange})}}),react.createElement(fuselage.Margins,{blockStart:16},react.createElement(index_esm.xI,{control:control,name:"desktopSound",render:function render(_ref7){var _ref7$field=_ref7.field,value=_ref7$field.value,onChange=_ref7$field.onChange;return react.createElement(components_NotificationPreference,{id:"DesktopSound",name:t("Sound"),options:notificationOptions.sounds,optionValue:value,onChange:onChange},react.createElement(fuselage.IconButton,{icon:"play",mis:4,onClick:handlePlaySound}))}}))),react.createElement(components_NotificationByDevice,{device:t("Mobile"),icon:"mobile"},react.createElement(index_esm.xI,{control:control,name:"mobileAlert",render:function render(_ref8){var _ref8$field=_ref8.field,value=_ref8$field.value,onChange=_ref8$field.onChange;return react.createElement(components_NotificationPreference,{id:"MobileAlert",name:t("Alerts"),options:notificationOptions.alerts,optionValue:value,onChange:onChange})}})),react.createElement(components_NotificationByDevice,{device:t("Email"),icon:"mail"},react.createElement(index_esm.xI,{control:control,name:"emailAlert",render:function render(_ref9){var _ref9$field=_ref9.field,value=_ref9$field.value,onChange=_ref9$field.onChange;return react.createElement(components_NotificationPreference,{id:"EmailAlert",name:t("Alerts"),options:notificationOptions.alerts,optionValue:value,onChange:onChange})}}))))},NotificationPreferences_NotificationPreferencesForm=NotificationPreferencesForm;NotificationPreferencesForm.__docgenInfo={description:"",methods:[],displayName:"NotificationPreferencesForm",props:{notificationOptions:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n\t[key: string]: SelectOption[];\n}",signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]",required:!0}}]}},description:""},handlePlaySound:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};var NotificationPreferences=function NotificationPreferences(_ref){var handleClose=_ref.handleClose,handleSave=_ref.handleSave,notificationOptions=_ref.notificationOptions,handlePlaySound=_ref.handlePlaySound,t=(0,dist.useTranslation)(),_useFormContext$formS=(0,index_esm.xW)().formState,isDirty=_useFormContext$formS.isDirty,isSubmitting=_useFormContext$formS.isSubmitting;return react.createElement(react.Fragment,null,react.createElement(Contextualbar.mH,null,react.createElement(Contextualbar.A4,{name:"bell"}),react.createElement(Contextualbar.jY,null,t("Notifications_Preferences")),handleClose&&react.createElement(Contextualbar.pi,{onClick:handleClose})),react.createElement(Contextualbar.xN,null,react.createElement(NotificationPreferences_NotificationPreferencesForm,{notificationOptions:notificationOptions,handlePlaySound:handlePlaySound})),react.createElement(Contextualbar.kV,null,react.createElement(fuselage.ButtonGroup,{stretch:!0},handleClose&&react.createElement(fuselage.Button,{onClick:handleClose},t("Cancel")),react.createElement(fuselage.Button,{primary:!0,disabled:!isDirty,loading:isSubmitting,onClick:handleSave},t("Save")))))},NotificationPreferences_NotificationPreferences=NotificationPreferences;NotificationPreferences.__docgenInfo={description:"",methods:[],displayName:"NotificationPreferences",props:{handleClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},handleSave:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},notificationOptions:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n\t[key: string]: SelectOption[];\n}",signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]",required:!0}}]}},description:""},handlePlaySound:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./client/views/room/contextualBar/NotificationPreferences/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return NotificationPreferences_NotificationPreferencesWithData}});var dist=__webpack_require__("../../packages/ui-contexts/dist/index.js"),react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),useEndpointAction=__webpack_require__("./client/hooks/useEndpointAction.ts"),RoomContext=__webpack_require__("./client/views/room/contexts/RoomContext.ts"),RoomToolboxContext=__webpack_require__("./client/views/room/contexts/RoomToolboxContext.ts"),NotificationPreferences=__webpack_require__("./client/views/room/contextualBar/NotificationPreferences/NotificationPreferences.tsx");function _toConsumableArray(r){return function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}(r)||function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var NotificationPreferencesWithData=function NotificationPreferencesWithData(){var _customSound$getList,t=(0,dist.useTranslation)(),room=(0,RoomContext.nq)(),subscription=(0,RoomContext.Mq)(),closeTab=(0,RoomToolboxContext.W)().closeTab,customSound=(0,dist.useCustomSound)(),saveSettings=(0,useEndpointAction.r)("POST","/v1/rooms.saveNotification",{successMessage:t("Room_updated_successfully")}),customSoundAsset=null==customSound||null===(_customSound$getList=customSound.getList())||void 0===_customSound$getList?void 0:_customSound$getList.map((function(value){return[value._id,value.name]})),defaultOption=[["default",t("Default")],["all",t("All_messages")],["mentions",t("Mentions")],["nothing",t("Nothing")]],defaultSoundOption=[["none",t("None")],["default",t("Default")]],notificationOptions={alerts:defaultOption,sounds:customSoundAsset?[].concat(defaultSoundOption,_toConsumableArray(customSoundAsset)):defaultSoundOption},methods=(0,index_esm.mN)({defaultValues:{turnOn:!(null!=subscription&&subscription.disableNotifications),muteGroupMentions:!(null==subscription||!subscription.muteGroupMentions),showCounter:!(null!=subscription&&subscription.hideUnreadStatus),showMentions:!(null!=subscription&&subscription.hideMentionStatus),desktopAlert:"subscription"===(null==subscription?void 0:subscription.desktopPrefOrigin)&&subscription.desktopNotifications||"default",desktopSound:(null==subscription?void 0:subscription.audioNotificationValue)||"default",mobileAlert:"subscription"===(null==subscription?void 0:subscription.mobilePrefOrigin)&&subscription.mobilePushNotifications||"default",emailAlert:"subscription"===(null==subscription?void 0:subscription.emailPrefOrigin)&&subscription.emailNotifications||"default"}}),desktopSound=methods.watch().desktopSound,handleSave=methods.handleSubmit((function(_ref){var notifications={disableNotifications:_ref.turnOn?"0":"1",muteGroupMentions:_ref.muteGroupMentions?"1":"0",hideUnreadStatus:_ref.showCounter?"0":"1",hideMentionStatus:_ref.showMentions?"0":"1",desktopNotifications:_ref.desktopAlert,audioNotificationValue:_ref.desktopSound,mobilePushNotifications:_ref.mobileAlert,emailNotifications:_ref.emailAlert};saveSettings({roomId:room._id,notifications:notifications})}));return react.createElement(index_esm.Op,methods,react.createElement(NotificationPreferences.A,{handleClose:closeTab,handleSave:handleSave,handlePlaySound:function handlePlaySound(){customSound.play(desktopSound)},notificationOptions:notificationOptions}))},NotificationPreferences_NotificationPreferencesWithData=(0,react.memo)(NotificationPreferencesWithData);NotificationPreferencesWithData.__docgenInfo={description:"",methods:[],displayName:"NotificationPreferencesWithData"}}}]);