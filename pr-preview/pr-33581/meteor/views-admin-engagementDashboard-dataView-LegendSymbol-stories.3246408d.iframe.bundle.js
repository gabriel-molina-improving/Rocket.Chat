"use strict";(self.webpackChunk_rocket_chat_meteor=self.webpackChunk_rocket_chat_meteor||[]).push([[5869],{"./client/views/admin/engagementDashboard/dataView/LegendSymbol.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@rocket.chat/fuselage/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),LegendSymbol=function LegendSymbol(_ref){var _ref$color=_ref.color,color=void 0===_ref$color?"currentColor":_ref$color;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__.Margins,{inlineEnd:8},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_rocket_chat_fuselage__WEBPACK_IMPORTED_MODULE_0__.Box,{is:"span","aria-hidden":"true",style:{display:"inline-block",width:12,height:12,borderRadius:2,backgroundColor:color,verticalAlign:"baseline"}}))};__webpack_exports__.A=LegendSymbol,LegendSymbol.__docgenInfo={description:"",methods:[],displayName:"LegendSymbol",props:{color:{required:!1,tsType:{name:"CSSProperties['backgroundColor']",raw:"CSSProperties['backgroundColor']"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}}},"./client/views/admin/engagementDashboard/dataView/LegendSymbol.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return LegendSymbol_stories},withColor:function(){return withColor},withoutColor:function(){return withoutColor}});var fuselage=__webpack_require__("./node_modules/@rocket.chat/fuselage/index.js"),react=__webpack_require__("./node_modules/react/index.js"),LegendSymbol=__webpack_require__("./client/views/admin/engagementDashboard/dataView/LegendSymbol.tsx"),colors=__webpack_require__("./node_modules/@rocket.chat/fuselage-tokens/colors.json"),monochromaticColors=[colors.a2,colors.rP,colors.Y_,colors.nM,colors.IT,colors.d4,colors.wI,colors.VL,colors.mq],polychromaticColors=[colors.JT,colors.ZG,colors.IT],LegendSymbol_stories={title:"Enterprise/Admin/Engagement Dashboard/LegendSymbol",component:LegendSymbol.A,decorators:[fn=>react.createElement(fuselage.Margins,{children:fn(),all:"x16"})]};const withoutColor=()=>react.createElement(fuselage.Box,null,react.createElement(LegendSymbol.A,null),"Legend text"),withColor=()=>react.createElement(react.Fragment,null,monochromaticColors.map((color=>react.createElement(fuselage.Box,{key:color},react.createElement(LegendSymbol.A,{color:color})," ",color))),polychromaticColors.map((color=>react.createElement(fuselage.Box,{key:color},react.createElement(LegendSymbol.A,{color:color})," ",color)))),__namedExportsOrder=["withoutColor","withColor"];withoutColor.parameters={...withoutColor.parameters,docs:{...withoutColor.parameters?.docs,source:{originalSource:"() => <Box>\n        <LegendSymbol />\n        Legend text\n    </Box>",...withoutColor.parameters?.docs?.source}}},withColor.parameters={...withColor.parameters,docs:{...withColor.parameters?.docs,source:{originalSource:"() => <>\n        {monochromaticColors.map(color => <Box key={color}>\n                <LegendSymbol color={color} /> {color}\n            </Box>)}\n        {polychromaticColors.map(color => <Box key={color}>\n                <LegendSymbol color={color} /> {color}\n            </Box>)}\n    </>",...withColor.parameters?.docs?.source}}}},"./node_modules/@rocket.chat/fuselage-tokens/colors.json":function(module){module.exports=JSON.parse('{"ON":"#FFFFFF","D5":"#F2F3F5","Nq":"#9EA2A8","re":"#2F343D","Ir":"#1F2329","PK":"#F5455C","u6":"#EC0D2A","VQ":"#F38C39","aF":"#9F22C7","JT":"#FFD031","ZG":"#2DE0A5","a2":"#E8F2FF","rP":"#D1EBFE","Y_":"#76B7FC","nM":"#549DF9","IT":"#156FF5","d4":"#095AD2","wI":"#10529E","VL":"#01336B","mq":"#012247"}')}}]);