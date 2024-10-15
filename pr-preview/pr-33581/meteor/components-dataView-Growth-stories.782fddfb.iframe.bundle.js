"use strict";(self.webpackChunk_rocket_chat_meteor=self.webpackChunk_rocket_chat_meteor||[]).push([[2457],{"./client/components/dataView/Growth.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@rocket.chat/fuselage/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_NegativeGrowthSymbol__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./client/components/dataView/NegativeGrowthSymbol.tsx"),_PositiveGrowthSymbol__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./client/components/dataView/PositiveGrowthSymbol.tsx"),_excluded=["children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var Growth=function Growth(_ref){var children=_ref.children,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return 0===children?null:react__WEBPACK_IMPORTED_MODULE_1__.createElement(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__.Box,_extends({is:"span",color:children<0?"status-font-on-danger":"status-font-on-success"},props),children<0?react__WEBPACK_IMPORTED_MODULE_1__.createElement(_NegativeGrowthSymbol__WEBPACK_IMPORTED_MODULE_2__.A,null):react__WEBPACK_IMPORTED_MODULE_1__.createElement(_PositiveGrowthSymbol__WEBPACK_IMPORTED_MODULE_3__.A,null),String(Math.abs(children)))};__webpack_exports__.A=Growth,Growth.__docgenInfo={description:"",methods:[],displayName:"Growth",props:{children:{required:!0,tsType:{name:"number"},description:""}}}},"./client/components/dataView/NegativeGrowthSymbol.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var style={width:"1.5em",height:"1.5em",verticalAlign:"-0.5em"},NegativeGrowthSymbol=function NegativeGrowthSymbol(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 24",style:style},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{clipRule:"evenodd",fill:"currentColor",fillRule:"evenodd",d:"M4.70712 8.50049L8.55757 12.3509C9.14335 12.9367 10.0931 12.9367\n\t\t\t10.6789 12.3509L11.9282 11.1016L15.9295 15.1029L14.2054 15.1029C13.6531\n\t\t\t15.1029 13.2054 15.5506 13.2054 16.1029C13.2054 16.6551 13.6531 17.1029\n\t\t\t14.2054 17.1029L18.3437 17.1029C18.896 17.1029 19.3437 16.6551 19.3437\n\t\t\t16.1029L19.3437 11.9645C19.3437 11.4123 18.896 10.9645 18.3437 10.9645\n\t\t\tC17.7914 10.9645 17.3437 11.4123 17.3437 11.9645L17.3437 13.6886L12.9889\n\t\t\t9.33382C12.4031 8.74803 11.4534 8.74803 10.8676 9.33382L9.61823 10.5832\n\t\t\tL6.12133 7.08627C5.73081 6.69575 5.09765 6.69575 4.70712 7.08628C4.3166\n\t\t\t7.4768 4.3166 8.10996 4.70712 8.50049Z"}))};__webpack_exports__.A=NegativeGrowthSymbol,NegativeGrowthSymbol.__docgenInfo={description:"",methods:[],displayName:"NegativeGrowthSymbol"}},"./client/components/dataView/PositiveGrowthSymbol.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var style={width:"1.5em",height:"1.5em",verticalAlign:"-0.5em"},PositiveGrowthSymbol=function PositiveGrowthSymbol(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",style:style},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{clipRule:"evenodd",fill:"currentColor",fillRule:"evenodd",d:"M4.70712 15.3265L8.55757 11.4761C9.14335 10.8903 10.0931 10.8903\n\t\t\t10.6789 11.4761L11.9282 12.7254L15.9295 8.72417L14.2054 8.72417C13.6531\n\t\t\t8.72417 13.2054 8.27646 13.2054 7.72417C13.2054 7.17189 13.6531 6.72417\n\t\t\t14.2054 6.72417L18.3437 6.72418C18.896 6.72417 19.3437 7.17189 19.3437\n\t\t\t7.72418L19.3437 11.8625C19.3437 12.4148 18.896 12.8625 18.3437 12.8625\n\t\t\tC17.7914 12.8625 17.3437 12.4148 17.3437 11.8625L17.3437 10.1384L12.9889\n\t\t\t14.4932C12.4031 15.079 11.4534 15.079 10.8676 14.4932L9.61823 13.2439\n\t\t\tL6.12133 16.7408C5.73081 17.1313 5.09765 17.1313 4.70712 16.7408C4.3166\n\t\t\t16.3502 4.3166 15.7171 4.70712 15.3265Z"}))};__webpack_exports__.A=PositiveGrowthSymbol,PositiveGrowthSymbol.__docgenInfo={description:"",methods:[],displayName:"PositiveGrowthSymbol"}},"./client/stories/hooks/useAutoSequence.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{M:function(){return useAutoSequence}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var useAutoSequence=function useAutoSequence(sequence){var delay=arguments.length>1&&void 0!==arguments[1]?arguments[1]:700,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),2),index=_useState2[0],setIndex=_useState2[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var timer=setInterval((function(){return setIndex((function(index){return index+1}))}),delay);return function(){clearInterval(timer)}}),[delay]),sequence[index%sequence.length]}},"./client/components/dataView/Growth.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:function(){return Example},Negative:function(){return Negative},Positive:function(){return Positive},WithTextStyle:function(){return WithTextStyle},Zero:function(){return Zero},__namedExportsOrder:function(){return __namedExportsOrder}});var _rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@rocket.chat/fuselage/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_stories_hooks_useAutoSequence__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./client/stories/hooks/useAutoSequence.ts"),_Growth__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./client/components/dataView/Growth.tsx");__webpack_exports__.default={title:"Components/Data/Growth",component:_Growth__WEBPACK_IMPORTED_MODULE_3__.A,parameters:{layout:"centered",controls:{hideNoControlsWarning:!0}}};const Example=()=>{const value=(0,_stories_hooks_useAutoSequence__WEBPACK_IMPORTED_MODULE_2__.M)([3,-2,1,-1,2,-3]);return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Growth__WEBPACK_IMPORTED_MODULE_3__.A,null,value)},Positive=()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Growth__WEBPACK_IMPORTED_MODULE_3__.A,null,3),Zero=()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Growth__WEBPACK_IMPORTED_MODULE_3__.A,null,0),Negative=()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Growth__WEBPACK_IMPORTED_MODULE_3__.A,null,-3),WithTextStyle=()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__.Box,{display:"flex",flexDirection:"column",alignItems:"center"},["h2","c1","micro"].map((fontScale=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__.Box,{key:fontScale},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Growth__WEBPACK_IMPORTED_MODULE_3__.A,{fontScale:fontScale},3),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Growth__WEBPACK_IMPORTED_MODULE_3__.A,{fontScale:fontScale},-3))))),__namedExportsOrder=["Example","Positive","Zero","Negative","WithTextStyle"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"() => {\n  const value = useAutoSequence([3, -2, 1, -1, 2, -3]);\n  return <Growth>{value}</Growth>;\n}",...Example.parameters?.docs?.source}}},Positive.parameters={...Positive.parameters,docs:{...Positive.parameters?.docs,source:{originalSource:"() => <Growth>{3}</Growth>",...Positive.parameters?.docs?.source}}},Zero.parameters={...Zero.parameters,docs:{...Zero.parameters?.docs,source:{originalSource:"() => <Growth>{0}</Growth>",...Zero.parameters?.docs?.source}}},Negative.parameters={...Negative.parameters,docs:{...Negative.parameters?.docs,source:{originalSource:"() => <Growth>{-3}</Growth>",...Negative.parameters?.docs?.source}}},WithTextStyle.parameters={...WithTextStyle.parameters,docs:{...WithTextStyle.parameters?.docs,source:{originalSource:"() => <Box display='flex' flexDirection='column' alignItems='center'>\n        {(['h2', 'c1', 'micro'] as const).map(fontScale => <Box key={fontScale}>\n                <Growth fontScale={fontScale}>{3}</Growth>\n                <Growth fontScale={fontScale}>{-3}</Growth>\n            </Box>)}\n    </Box>",...WithTextStyle.parameters?.docs?.source}}}}}]);