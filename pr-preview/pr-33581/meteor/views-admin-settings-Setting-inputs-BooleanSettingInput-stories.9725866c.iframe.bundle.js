"use strict";(self.webpackChunk_rocket_chat_meteor=self.webpackChunk_rocket_chat_meteor||[]).push([[343],{"./client/views/admin/settings/Setting/ResetSettingButton/ResetSettingButton.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@rocket.chat/fuselage/index.js"),_rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/ui-contexts/dist/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function ResetSettingButton(props){var t=(0,_rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__.IconButton,_extends({icon:"undo",danger:!0,small:!0,title:t("Reset")},props))}__webpack_exports__.A=ResetSettingButton,ResetSettingButton.__docgenInfo={description:"",methods:[],displayName:"ResetSettingButton"}},"./client/views/admin/settings/Setting/ResetSettingButton/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return _ResetSettingButton__WEBPACK_IMPORTED_MODULE_0__.A}});var _ResetSettingButton__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./client/views/admin/settings/Setting/ResetSettingButton/ResetSettingButton.tsx")},"./client/views/admin/settings/Setting/inputs/BooleanSettingInput.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@rocket.chat/fuselage/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_ResetSettingButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./client/views/admin/settings/Setting/ResetSettingButton/index.ts");function BooleanSettingInput(_ref){var _id=_ref._id,label=_ref.label,disabled=_ref.disabled,readonly=_ref.readonly,required=_ref.required,value=_ref.value,hasResetButton=_ref.hasResetButton,onChangeValue=_ref.onChangeValue,onResetButtonClick=_ref.onResetButtonClick;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__.Field,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__.FieldRow,{marginBlockEnd:8},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__.FieldLabel,{htmlFor:_id,title:_id,required:required},label),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__.Box,{display:"flex",alignItems:"center"},hasResetButton&&react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ResetSettingButton__WEBPACK_IMPORTED_MODULE_2__.A,{mie:8,"data-qa-reset-setting-id":_id,onClick:onResetButtonClick}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__.ToggleSwitch,{"data-qa-setting-id":_id,id:_id,checked:!0===value,disabled:disabled||readonly,onChange:function handleChange(event){var value=event.currentTarget.checked;null==onChangeValue||onChangeValue(value)}}))))}__webpack_exports__.A=BooleanSettingInput,BooleanSettingInput.__docgenInfo={description:"",methods:[],displayName:"BooleanSettingInput",props:{_id:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"ReactNode"},description:""},value:{required:!1,tsType:{name:"V"},description:""},packageValue:{required:!0,tsType:{name:"V"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},readonly:{required:!1,tsType:{name:"boolean"},description:""},autocomplete:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},editor:{required:!1,tsType:{name:"string"},description:""},hasResetButton:{required:!0,tsType:{name:"boolean"},description:""},onChangeValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: R) => void",signature:{arguments:[{type:{name:"R"},name:"value"}],return:{name:"void"}}},description:""},onResetButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onChangeEditor:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""}}}},"./client/views/admin/settings/Setting/inputs/BooleanSettingInput.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:function(){return Checked},Default:function(){return Default},Disabled:function(){return Disabled},WithResetButton:function(){return WithResetButton},__namedExportsOrder:function(){return __namedExportsOrder}});var _rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@rocket.chat/fuselage/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_BooleanSettingInput__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./client/views/admin/settings/Setting/inputs/BooleanSettingInput.tsx");__webpack_exports__.default={title:"Admin/Settings/Inputs/BooleanSettingInput",component:_BooleanSettingInput__WEBPACK_IMPORTED_MODULE_2__.A,parameters:{actions:{argTypesRegex:"^on.*"}},decorators:[fn=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__.Field,null,fn())]};const Template=args=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_BooleanSettingInput__WEBPACK_IMPORTED_MODULE_2__.A,args),Default=Template.bind({});Default.args={_id:"setting_id",label:"Label"};const Disabled=Template.bind({});Disabled.args={_id:"setting_id",label:"Label",disabled:!0};const Checked=Template.bind({});Checked.args={_id:"setting_id",label:"Label",value:!0};const WithResetButton=Template.bind({});WithResetButton.args={_id:"setting_id",label:"Label",hasResetButton:!0};const __namedExportsOrder=["Default","Disabled","Checked","WithResetButton"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <BooleanSettingInput {...args} />",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <BooleanSettingInput {...args} />",...Disabled.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"args => <BooleanSettingInput {...args} />",...Checked.parameters?.docs?.source}}},WithResetButton.parameters={...WithResetButton.parameters,docs:{...WithResetButton.parameters?.docs,source:{originalSource:"args => <BooleanSettingInput {...args} />",...WithResetButton.parameters?.docs?.source}}}}}]);