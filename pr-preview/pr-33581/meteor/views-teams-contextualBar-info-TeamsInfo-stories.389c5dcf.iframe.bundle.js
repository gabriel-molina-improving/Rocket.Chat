(self.webpackChunk_rocket_chat_meteor=self.webpackChunk_rocket_chat_meteor||[]).push([[9087],{"./app/emoji/client/emojiParser.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{G:function(){return emojiParser}});var _client_lib_utils_isIE11__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./client/lib/utils/isIE11.ts"),_lib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/emoji/client/lib.ts");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var emojiParser=function emojiParser(_ref){var html=_ref.html;html=(html=(html=html.trim()).replace(/&#39;/g,"'")).replace(/<br>/g," <br> "),html=Object.entries(_lib__WEBPACK_IMPORTED_MODULE_1__.Z.packages).reverse().reduce((function(value,_ref2){return _slicedToArray(_ref2,2)[1].render(value)}),html);var checkEmojiOnly=document.createElement("div");checkEmojiOnly.innerHTML=html;var emojis=Array.from(checkEmojiOnly.querySelectorAll(".emoji:not(:empty), .emojione:not(:empty)")),hasText=!1;if(!_client_lib_utils_isIE11__WEBPACK_IMPORTED_MODULE_0__.l){for(var walker=document.createTreeWalker(checkEmojiOnly,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,(function filter(node){return node.nodeType===Node.ELEMENT_NODE&&(node.classList.contains("emojione")||node.classList.contains("emoji"))?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}));walker.nextNode();)if(walker.currentNode.nodeType===Node.TEXT_NODE&&""!==walker.currentNode.nodeValue.trim()){hasText=!0;break}if(emojis.length&&!hasText){for(var i=0,len=emojis.length;i<len;i++){emojis[i].classList.add("big")}html=checkEmojiOnly.innerHTML}}return{html:html=(html=html.replace(/\'/g,"&#39;")).replace(/ <br> /g,"<br>")}}},"./app/emoji/client/lib.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return emoji}});var emojione__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/emojione/lib/js/emojione.js"),emoji={packages:{base:{emojiCategories:[{key:"recent",i18n:"Frequently_Used"}],categoryIndex:0,emojisByCategory:{recent:[]},toneList:{},render:__webpack_require__.n(emojione__WEBPACK_IMPORTED_MODULE_0__)().toImage,renderPicker:function renderPicker(emojiToRender){var _emoji$packages$corre,correctPackage=emoji.list[emojiToRender].emojiPackage;if(correctPackage)return null===(_emoji$packages$corre=emoji.packages[correctPackage])||void 0===_emoji$packages$corre?void 0:_emoji$packages$corre.renderPicker(emojiToRender)}}},list:{}}},"./client/components/MarkdownText.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:function(){return components_MarkdownText}});var fuselage=__webpack_require__("./node_modules/@rocket.chat/fuselage/index.js"),dist=__webpack_require__("../../packages/ui-client/dist/index.js"),ui_contexts_dist=__webpack_require__("../../packages/ui-contexts/dist/index.js"),purify=__webpack_require__("./node_modules/dompurify/dist/purify.js"),purify_default=__webpack_require__.n(purify),marked_esm=__webpack_require__("./node_modules/marked/lib/marked.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),emojiParser=__webpack_require__("./app/emoji/client/emojiParser.js"),_excluded=["content","variant","withTruncatedText","preserveHtml","parseEmoji"];function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var documentRenderer=new marked_esm.xI.Renderer,inlineRenderer=new marked_esm.xI.Renderer,inlineWithoutBreaks=new marked_esm.xI.Renderer;marked_esm.xI.use({walkTokens:function walkTokens(token){/^\*[^*]+\*$|^\*\*[^*]+\*\*$/.test(token.raw)&&"em"===token.type?token.type="strong":/^__(?=\S)([\s\S]*?\S)__(?!_)|^_(?=\S)([\s\S]*?\S)_(?!_)/.test(token.raw)&&"strong"===token.type&&(token.type="em")}});var linkMarked=function linkMarked(href,_title,text){return'<a href="'.concat(href,'" rel="nofollow noopener noreferrer">').concat(text,"</a> ")},paragraphMarked=function paragraphMarked(text){return text},brMarked=function brMarked(){return" "},listItemMarked=function listItemMarked(text){var cleanText=text.replace(/<p.*?>|<\/p>/gi,"");return"<li>".concat(cleanText,"</li>")},horizontalRuleMarked=function horizontalRuleMarked(){return""};documentRenderer.link=linkMarked,documentRenderer.listitem=listItemMarked,inlineRenderer.link=linkMarked,inlineRenderer.paragraph=paragraphMarked,inlineRenderer.listitem=listItemMarked,inlineRenderer.hr=horizontalRuleMarked,inlineWithoutBreaks.link=linkMarked,inlineWithoutBreaks.paragraph=paragraphMarked,inlineWithoutBreaks.br=brMarked,inlineWithoutBreaks.image=brMarked,inlineWithoutBreaks.code=paragraphMarked,inlineWithoutBreaks.codespan=paragraphMarked,inlineWithoutBreaks.listitem=listItemMarked,inlineWithoutBreaks.hr=horizontalRuleMarked;var defaultOptions={gfm:!0,headerIds:!1},options=_objectSpread(_objectSpread({},defaultOptions),{},{renderer:documentRenderer}),inlineOptions=_objectSpread(_objectSpread({},defaultOptions),{},{renderer:inlineRenderer}),inlineWithoutBreaksOptions=_objectSpread(_objectSpread({},defaultOptions),{},{renderer:inlineWithoutBreaks}),getRegexp=function getRegexp(schemeSetting){var schemes=schemeSetting?schemeSetting.split(",").join("|"):"";return new RegExp("^(".concat(schemes,"):"),"gim")},MarkdownText=function MarkdownText(_ref){var markedOptions,content=_ref.content,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"document":_ref$variant,_ref$withTruncatedTex=_ref.withTruncatedText,withTruncatedText=void 0!==_ref$withTruncatedTex&&_ref$withTruncatedTex,_ref$preserveHtml=_ref.preserveHtml,preserveHtml=void 0!==_ref$preserveHtml&&_ref$preserveHtml,_ref$parseEmoji=_ref.parseEmoji,parseEmoji=void 0!==_ref$parseEmoji&&_ref$parseEmoji,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),sanitizer=purify_default().sanitize,t=(0,ui_contexts_dist.useTranslation)();switch(variant){case"inline":markedOptions=inlineOptions;break;case"inlineWithoutBreaks":markedOptions=inlineWithoutBreaksOptions;break;default:markedOptions=options}var __html=(0,react.useMemo)((function(){var html=function(){if(content&&"string"==typeof content){var markedHtml=/inline/.test(variant)?marked_esm.xI.parseInline(new Option(content).innerHTML,markedOptions):marked_esm.xI.parse(new Option(content).innerHTML,markedOptions);return parseEmoji?function renderMessageEmoji(_ref){var html=_ref.html;return(0,emojiParser.G)({html:html}).html}({html:markedHtml}):markedHtml}}();return purify_default().addHook("afterSanitizeAttributes",(function(node){if("target"in node){var href=node.getAttribute("href")||"";node.setAttribute("title","".concat(t("Go_to_href",{href:href.replace((0,dist.aw)(),"")}))),node.setAttribute("rel","nofollow noopener noreferrer"),(0,dist.ge)(node.getAttribute("href")||"")&&(node.setAttribute("target","_blank"),node.setAttribute("title",href))}})),preserveHtml?html:html&&sanitizer(html,{ADD_ATTR:["target"],ALLOWED_URI_REGEXP:getRegexp("http,https,notes,ftp,ftps,tel,mailto,sms,cid")})}),[preserveHtml,sanitizer,content,variant,markedOptions,parseEmoji,t]);return __html?react.createElement(fuselage.Box,_extends({dangerouslySetInnerHTML:{__html:__html},withTruncatedText:withTruncatedText,withRichContent:"inlineWithoutBreaks"!==variant||"inlineWithoutBreaks"},props)):null},components_MarkdownText=MarkdownText;MarkdownText.__docgenInfo={description:"",methods:[],displayName:"MarkdownText",props:{variant:{defaultValue:{value:"'document'",computed:!1},required:!1},withTruncatedText:{defaultValue:{value:"false",computed:!1},required:!1},preserveHtml:{defaultValue:{value:"false",computed:!1},required:!1},parseEmoji:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./client/lib/utils/isIE11.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{l:function(){return isIE11}});var userAgent,msieIdx,isIE11=(userAgent=window.navigator.userAgent,(msieIdx=userAgent.indexOf("MSIE"))>0?11===parseInt(userAgent.substring(msieIdx+5,userAgent.indexOf(".",msieIdx))):!!navigator.userAgent.match(/Trident\/7\./))},"./client/views/teams/contextualBar/info/TeamsInfo.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:function(){return info_TeamsInfo}});var fuselage=__webpack_require__("./node_modules/@rocket.chat/fuselage/index.js"),dist=__webpack_require__("../../packages/ui-avatar/dist/index.js"),ui_contexts_dist=__webpack_require__("../../packages/ui-contexts/dist/index.js"),react=__webpack_require__("./node_modules/react/index.js"),Contextualbar=__webpack_require__("./client/components/Contextualbar/index.ts"),InfoPanel=__webpack_require__("./client/components/InfoPanel/index.ts"),RetentionPolicyCallout=__webpack_require__("./client/components/InfoPanel/RetentionPolicyCallout.tsx"),MarkdownText=__webpack_require__("./client/components/MarkdownText.tsx");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var mapOptions=function mapOptions(_ref){var _ref2=_slicedToArray(_ref,2),key=_ref2[0],_ref2$=_ref2[1],action=_ref2$.action;return[key,{label:{label:_ref2$.label,icon:_ref2$.icon},action:action}]},useRetentionPolicy=__webpack_require__("./client/views/room/hooks/useRetentionPolicy.ts"),_excluded=["label"];function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toConsumableArray(r){return function _arrayWithoutHoles(r){if(Array.isArray(r))return TeamsInfo_arrayLikeToArray(r)}(r)||function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||TeamsInfo_unsupportedIterableToArray(r)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function TeamsInfo_slicedToArray(r,e){return function TeamsInfo_arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function TeamsInfo_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||TeamsInfo_unsupportedIterableToArray(r,e)||function TeamsInfo_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function TeamsInfo_unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return TeamsInfo_arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?TeamsInfo_arrayLikeToArray(r,a):void 0}}function TeamsInfo_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var TeamsInfo=function TeamsInfo(_ref){var room=_ref.room,onClickHide=_ref.onClickHide,onClickClose=_ref.onClickClose,onClickLeave=_ref.onClickLeave,onClickEdit=_ref.onClickEdit,onClickDelete=_ref.onClickDelete,onClickViewChannels=_ref.onClickViewChannels,onClickConvertToChannel=_ref.onClickConvertToChannel,t=(0,ui_contexts_dist.useTranslation)(),retentionPolicy=(0,useRetentionPolicy._)(room),_useActionSpread=function useActionSpread(actions){var size=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return(0,react.useMemo)((function(){var entries=Object.entries(actions),options=entries.slice(0,size),menuOptions=entries.slice(size,entries.length).map(mapOptions);return{actions:options,menu:menuOptions.length?Object.fromEntries(menuOptions):void 0}}),[actions,size])}((0,react.useMemo)((function(){return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({},onClickEdit&&{edit:{label:t("Edit"),action:onClickEdit,icon:"edit"}}),onClickDelete&&{delete:{label:t("Delete"),action:onClickDelete,icon:"trash"}}),onClickConvertToChannel&&{convertToChannel:{label:t("Convert_to_channel"),action:onClickConvertToChannel,icon:"hash"}}),onClickHide&&{hide:{label:t("Hide"),action:onClickHide,icon:"eye-off"}}),onClickLeave&&{leave:{label:t("Leave"),action:onClickLeave,icon:"sign-out"}})}),[t,onClickHide,onClickLeave,onClickEdit,onClickDelete,onClickConvertToChannel])),actionsDefinition=_useActionSpread.actions,menuOptions=_useActionSpread.menu,menu=(0,react.useMemo)((function(){return menuOptions?react.createElement(fuselage.Menu,{small:!1,flexShrink:0,flexGrow:0,key:"menu",maxHeight:"initial",title:t("More"),secondary:!0,renderItem:function renderItem(_ref2){var _ref2$label=_ref2.label,label=_ref2$label.label,icon=_ref2$label.icon,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref2,_excluded);return react.createElement(fuselage.Option,_extends({},props,{label:label,icon:icon}))},options:menuOptions}):null}),[t,menuOptions]),actions=(0,react.useMemo)((function(){return[].concat(_toConsumableArray(actionsDefinition.map((function mapAction(_ref3){var _ref4=TeamsInfo_slicedToArray(_ref3,2),key=_ref4[0],_ref4$=_ref4[1],label=_ref4$.label,icon=_ref4$.icon,action=_ref4$.action;return react.createElement(InfoPanel.ZF,{key:key,label:label,onClick:action,icon:icon})}))),[menu]).filter(Boolean)}),[actionsDefinition,menu]);return react.createElement(react.Fragment,null,react.createElement(Contextualbar.mH,null,react.createElement(Contextualbar.A4,{name:"info-circled"}),react.createElement(Contextualbar.jY,null,t("Teams_Info")),onClickClose&&react.createElement(Contextualbar.pi,{onClick:onClickClose})),react.createElement(Contextualbar.xN,{p:24},react.createElement(InfoPanel.jj,null,react.createElement(InfoPanel.st,{maxWidth:"x332",mi:"auto"},react.createElement(InfoPanel.Y$,null,react.createElement(dist.dD,{size:"x332",room:room})),react.createElement(InfoPanel._v,null,actions)),react.createElement(InfoPanel.st,null,room.archived&&react.createElement(fuselage.Box,{mb:16},react.createElement(fuselage.Callout,{type:"warning"},t("Room_archived")))),react.createElement(InfoPanel.st,null,react.createElement(InfoPanel.ly,{title:room.fname||room.name||"",icon:"team"})),react.createElement(InfoPanel.st,null,room.broadcast&&react.createElement(InfoPanel.z6,null,react.createElement(InfoPanel.pm,null,react.createElement("b",null,t("Broadcast_channel"))," ",t("Broadcast_channel_Description"))),room.description&&react.createElement(InfoPanel.z6,null,react.createElement(InfoPanel.pm,null,t("Description")),react.createElement(InfoPanel.kq,{withTruncatedText:!1},react.createElement(MarkdownText.A,{variant:"inline",content:room.description}))),room.announcement&&react.createElement(InfoPanel.z6,null,react.createElement(InfoPanel.pm,null,t("Announcement")),react.createElement(InfoPanel.kq,{withTruncatedText:!1},react.createElement(MarkdownText.A,{variant:"inline",content:room.announcement}))),room.topic&&react.createElement(InfoPanel.z6,null,react.createElement(InfoPanel.pm,null,t("Topic")),react.createElement(InfoPanel.kq,{withTruncatedText:!1},react.createElement(MarkdownText.A,{variant:"inline",content:room.topic}))),onClickViewChannels&&react.createElement(InfoPanel.z6,null,react.createElement(InfoPanel.pm,null,t("Teams_channels")),react.createElement(InfoPanel.kq,null,react.createElement(fuselage.Button,{onClick:onClickViewChannels,small:!0},t("View_channels")))),(null==retentionPolicy?void 0:retentionPolicy.isActive)&&react.createElement(RetentionPolicyCallout.A,{room:room})))))},info_TeamsInfo=TeamsInfo;TeamsInfo.__docgenInfo={description:"",methods:[],displayName:"TeamsInfo",props:{room:{required:!0,tsType:{name:"IRoom"},description:""},onClickHide:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickLeave:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickEdit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickDelete:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickViewChannels:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickConvertToChannel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./client/views/teams/contextualBar/info/TeamsInfo.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Archived:function(){return Archived},Broadcast:function(){return Broadcast},Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_Contextualbar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./client/components/Contextualbar/index.ts"),_TeamsInfo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./client/views/teams/contextualBar/info/TeamsInfo.tsx");const room={_id:"awdawd",fname:"rocketchat-frontend-team",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis nisi vel arcu bibendum vehicula. Integer vitae suscipit libero",announcement:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis nisi vel arcu bibendum vehicula. Integer vitae suscipit libero",topic:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis nisi vel arcu bibendum vehicula. Integer vitae suscipit libero"};__webpack_exports__.default={title:"Teams/Contextual Bar/TeamsInfo",component:_TeamsInfo__WEBPACK_IMPORTED_MODULE_2__.A,parameters:{layout:"fullscreen",actions:{argTypesRegex:"^on.*"}},decorators:[fn=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Contextualbar__WEBPACK_IMPORTED_MODULE_1__.bc,{height:"100vh"},fn())],args:{room:room}};const Template=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TeamsInfo__WEBPACK_IMPORTED_MODULE_2__.A,args),Default=Template.bind({}),Archived=Template.bind({});Archived.args={room:{...room,archived:!0}};const Broadcast=Template.bind({});Broadcast.args={room:{...room,broadcast:!0}};const __namedExportsOrder=["Default","Archived","Broadcast"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <TeamsInfo {...args} />",...Default.parameters?.docs?.source}}},Archived.parameters={...Archived.parameters,docs:{...Archived.parameters?.docs,source:{originalSource:"args => <TeamsInfo {...args} />",...Archived.parameters?.docs?.source}}},Broadcast.parameters={...Broadcast.parameters,docs:{...Broadcast.parameters?.docs,source:{originalSource:"args => <TeamsInfo {...args} />",...Broadcast.parameters?.docs?.source}}}},"./node_modules/date-fns/esm/_lib/requiredArgs/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function requiredArgs(required,args){if(args.length<required)throw new TypeError(required+" argument"+(required>1?"s":"")+" required, but only "+args.length+" present")}__webpack_require__.d(__webpack_exports__,{A:function(){return requiredArgs}})},"./node_modules/moment/locale sync recursive ^\\.\\/.*$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./af":"./node_modules/moment/locale/af.js","./af.js":"./node_modules/moment/locale/af.js","./ar":"./node_modules/moment/locale/ar.js","./ar-dz":"./node_modules/moment/locale/ar-dz.js","./ar-dz.js":"./node_modules/moment/locale/ar-dz.js","./ar-kw":"./node_modules/moment/locale/ar-kw.js","./ar-kw.js":"./node_modules/moment/locale/ar-kw.js","./ar-ly":"./node_modules/moment/locale/ar-ly.js","./ar-ly.js":"./node_modules/moment/locale/ar-ly.js","./ar-ma":"./node_modules/moment/locale/ar-ma.js","./ar-ma.js":"./node_modules/moment/locale/ar-ma.js","./ar-sa":"./node_modules/moment/locale/ar-sa.js","./ar-sa.js":"./node_modules/moment/locale/ar-sa.js","./ar-tn":"./node_modules/moment/locale/ar-tn.js","./ar-tn.js":"./node_modules/moment/locale/ar-tn.js","./ar.js":"./node_modules/moment/locale/ar.js","./az":"./node_modules/moment/locale/az.js","./az.js":"./node_modules/moment/locale/az.js","./be":"./node_modules/moment/locale/be.js","./be.js":"./node_modules/moment/locale/be.js","./bg":"./node_modules/moment/locale/bg.js","./bg.js":"./node_modules/moment/locale/bg.js","./bm":"./node_modules/moment/locale/bm.js","./bm.js":"./node_modules/moment/locale/bm.js","./bn":"./node_modules/moment/locale/bn.js","./bn-bd":"./node_modules/moment/locale/bn-bd.js","./bn-bd.js":"./node_modules/moment/locale/bn-bd.js","./bn.js":"./node_modules/moment/locale/bn.js","./bo":"./node_modules/moment/locale/bo.js","./bo.js":"./node_modules/moment/locale/bo.js","./br":"./node_modules/moment/locale/br.js","./br.js":"./node_modules/moment/locale/br.js","./bs":"./node_modules/moment/locale/bs.js","./bs.js":"./node_modules/moment/locale/bs.js","./ca":"./node_modules/moment/locale/ca.js","./ca.js":"./node_modules/moment/locale/ca.js","./cs":"./node_modules/moment/locale/cs.js","./cs.js":"./node_modules/moment/locale/cs.js","./cv":"./node_modules/moment/locale/cv.js","./cv.js":"./node_modules/moment/locale/cv.js","./cy":"./node_modules/moment/locale/cy.js","./cy.js":"./node_modules/moment/locale/cy.js","./da":"./node_modules/moment/locale/da.js","./da.js":"./node_modules/moment/locale/da.js","./de":"./node_modules/moment/locale/de.js","./de-at":"./node_modules/moment/locale/de-at.js","./de-at.js":"./node_modules/moment/locale/de-at.js","./de-ch":"./node_modules/moment/locale/de-ch.js","./de-ch.js":"./node_modules/moment/locale/de-ch.js","./de.js":"./node_modules/moment/locale/de.js","./dv":"./node_modules/moment/locale/dv.js","./dv.js":"./node_modules/moment/locale/dv.js","./el":"./node_modules/moment/locale/el.js","./el.js":"./node_modules/moment/locale/el.js","./en-au":"./node_modules/moment/locale/en-au.js","./en-au.js":"./node_modules/moment/locale/en-au.js","./en-ca":"./node_modules/moment/locale/en-ca.js","./en-ca.js":"./node_modules/moment/locale/en-ca.js","./en-gb":"./node_modules/moment/locale/en-gb.js","./en-gb.js":"./node_modules/moment/locale/en-gb.js","./en-ie":"./node_modules/moment/locale/en-ie.js","./en-ie.js":"./node_modules/moment/locale/en-ie.js","./en-il":"./node_modules/moment/locale/en-il.js","./en-il.js":"./node_modules/moment/locale/en-il.js","./en-in":"./node_modules/moment/locale/en-in.js","./en-in.js":"./node_modules/moment/locale/en-in.js","./en-nz":"./node_modules/moment/locale/en-nz.js","./en-nz.js":"./node_modules/moment/locale/en-nz.js","./en-sg":"./node_modules/moment/locale/en-sg.js","./en-sg.js":"./node_modules/moment/locale/en-sg.js","./eo":"./node_modules/moment/locale/eo.js","./eo.js":"./node_modules/moment/locale/eo.js","./es":"./node_modules/moment/locale/es.js","./es-do":"./node_modules/moment/locale/es-do.js","./es-do.js":"./node_modules/moment/locale/es-do.js","./es-mx":"./node_modules/moment/locale/es-mx.js","./es-mx.js":"./node_modules/moment/locale/es-mx.js","./es-us":"./node_modules/moment/locale/es-us.js","./es-us.js":"./node_modules/moment/locale/es-us.js","./es.js":"./node_modules/moment/locale/es.js","./et":"./node_modules/moment/locale/et.js","./et.js":"./node_modules/moment/locale/et.js","./eu":"./node_modules/moment/locale/eu.js","./eu.js":"./node_modules/moment/locale/eu.js","./fa":"./node_modules/moment/locale/fa.js","./fa.js":"./node_modules/moment/locale/fa.js","./fi":"./node_modules/moment/locale/fi.js","./fi.js":"./node_modules/moment/locale/fi.js","./fil":"./node_modules/moment/locale/fil.js","./fil.js":"./node_modules/moment/locale/fil.js","./fo":"./node_modules/moment/locale/fo.js","./fo.js":"./node_modules/moment/locale/fo.js","./fr":"./node_modules/moment/locale/fr.js","./fr-ca":"./node_modules/moment/locale/fr-ca.js","./fr-ca.js":"./node_modules/moment/locale/fr-ca.js","./fr-ch":"./node_modules/moment/locale/fr-ch.js","./fr-ch.js":"./node_modules/moment/locale/fr-ch.js","./fr.js":"./node_modules/moment/locale/fr.js","./fy":"./node_modules/moment/locale/fy.js","./fy.js":"./node_modules/moment/locale/fy.js","./ga":"./node_modules/moment/locale/ga.js","./ga.js":"./node_modules/moment/locale/ga.js","./gd":"./node_modules/moment/locale/gd.js","./gd.js":"./node_modules/moment/locale/gd.js","./gl":"./node_modules/moment/locale/gl.js","./gl.js":"./node_modules/moment/locale/gl.js","./gom-deva":"./node_modules/moment/locale/gom-deva.js","./gom-deva.js":"./node_modules/moment/locale/gom-deva.js","./gom-latn":"./node_modules/moment/locale/gom-latn.js","./gom-latn.js":"./node_modules/moment/locale/gom-latn.js","./gu":"./node_modules/moment/locale/gu.js","./gu.js":"./node_modules/moment/locale/gu.js","./he":"./node_modules/moment/locale/he.js","./he.js":"./node_modules/moment/locale/he.js","./hi":"./node_modules/moment/locale/hi.js","./hi.js":"./node_modules/moment/locale/hi.js","./hr":"./node_modules/moment/locale/hr.js","./hr.js":"./node_modules/moment/locale/hr.js","./hu":"./node_modules/moment/locale/hu.js","./hu.js":"./node_modules/moment/locale/hu.js","./hy-am":"./node_modules/moment/locale/hy-am.js","./hy-am.js":"./node_modules/moment/locale/hy-am.js","./id":"./node_modules/moment/locale/id.js","./id.js":"./node_modules/moment/locale/id.js","./is":"./node_modules/moment/locale/is.js","./is.js":"./node_modules/moment/locale/is.js","./it":"./node_modules/moment/locale/it.js","./it-ch":"./node_modules/moment/locale/it-ch.js","./it-ch.js":"./node_modules/moment/locale/it-ch.js","./it.js":"./node_modules/moment/locale/it.js","./ja":"./node_modules/moment/locale/ja.js","./ja.js":"./node_modules/moment/locale/ja.js","./jv":"./node_modules/moment/locale/jv.js","./jv.js":"./node_modules/moment/locale/jv.js","./ka":"./node_modules/moment/locale/ka.js","./ka.js":"./node_modules/moment/locale/ka.js","./kk":"./node_modules/moment/locale/kk.js","./kk.js":"./node_modules/moment/locale/kk.js","./km":"./node_modules/moment/locale/km.js","./km.js":"./node_modules/moment/locale/km.js","./kn":"./node_modules/moment/locale/kn.js","./kn.js":"./node_modules/moment/locale/kn.js","./ko":"./node_modules/moment/locale/ko.js","./ko.js":"./node_modules/moment/locale/ko.js","./ku":"./node_modules/moment/locale/ku.js","./ku.js":"./node_modules/moment/locale/ku.js","./ky":"./node_modules/moment/locale/ky.js","./ky.js":"./node_modules/moment/locale/ky.js","./lb":"./node_modules/moment/locale/lb.js","./lb.js":"./node_modules/moment/locale/lb.js","./lo":"./node_modules/moment/locale/lo.js","./lo.js":"./node_modules/moment/locale/lo.js","./lt":"./node_modules/moment/locale/lt.js","./lt.js":"./node_modules/moment/locale/lt.js","./lv":"./node_modules/moment/locale/lv.js","./lv.js":"./node_modules/moment/locale/lv.js","./me":"./node_modules/moment/locale/me.js","./me.js":"./node_modules/moment/locale/me.js","./mi":"./node_modules/moment/locale/mi.js","./mi.js":"./node_modules/moment/locale/mi.js","./mk":"./node_modules/moment/locale/mk.js","./mk.js":"./node_modules/moment/locale/mk.js","./ml":"./node_modules/moment/locale/ml.js","./ml.js":"./node_modules/moment/locale/ml.js","./mn":"./node_modules/moment/locale/mn.js","./mn.js":"./node_modules/moment/locale/mn.js","./mr":"./node_modules/moment/locale/mr.js","./mr.js":"./node_modules/moment/locale/mr.js","./ms":"./node_modules/moment/locale/ms.js","./ms-my":"./node_modules/moment/locale/ms-my.js","./ms-my.js":"./node_modules/moment/locale/ms-my.js","./ms.js":"./node_modules/moment/locale/ms.js","./mt":"./node_modules/moment/locale/mt.js","./mt.js":"./node_modules/moment/locale/mt.js","./my":"./node_modules/moment/locale/my.js","./my.js":"./node_modules/moment/locale/my.js","./nb":"./node_modules/moment/locale/nb.js","./nb.js":"./node_modules/moment/locale/nb.js","./ne":"./node_modules/moment/locale/ne.js","./ne.js":"./node_modules/moment/locale/ne.js","./nl":"./node_modules/moment/locale/nl.js","./nl-be":"./node_modules/moment/locale/nl-be.js","./nl-be.js":"./node_modules/moment/locale/nl-be.js","./nl.js":"./node_modules/moment/locale/nl.js","./nn":"./node_modules/moment/locale/nn.js","./nn.js":"./node_modules/moment/locale/nn.js","./oc-lnc":"./node_modules/moment/locale/oc-lnc.js","./oc-lnc.js":"./node_modules/moment/locale/oc-lnc.js","./pa-in":"./node_modules/moment/locale/pa-in.js","./pa-in.js":"./node_modules/moment/locale/pa-in.js","./pl":"./node_modules/moment/locale/pl.js","./pl.js":"./node_modules/moment/locale/pl.js","./pt":"./node_modules/moment/locale/pt.js","./pt-br":"./node_modules/moment/locale/pt-br.js","./pt-br.js":"./node_modules/moment/locale/pt-br.js","./pt.js":"./node_modules/moment/locale/pt.js","./ro":"./node_modules/moment/locale/ro.js","./ro.js":"./node_modules/moment/locale/ro.js","./ru":"./node_modules/moment/locale/ru.js","./ru.js":"./node_modules/moment/locale/ru.js","./sd":"./node_modules/moment/locale/sd.js","./sd.js":"./node_modules/moment/locale/sd.js","./se":"./node_modules/moment/locale/se.js","./se.js":"./node_modules/moment/locale/se.js","./si":"./node_modules/moment/locale/si.js","./si.js":"./node_modules/moment/locale/si.js","./sk":"./node_modules/moment/locale/sk.js","./sk.js":"./node_modules/moment/locale/sk.js","./sl":"./node_modules/moment/locale/sl.js","./sl.js":"./node_modules/moment/locale/sl.js","./sq":"./node_modules/moment/locale/sq.js","./sq.js":"./node_modules/moment/locale/sq.js","./sr":"./node_modules/moment/locale/sr.js","./sr-cyrl":"./node_modules/moment/locale/sr-cyrl.js","./sr-cyrl.js":"./node_modules/moment/locale/sr-cyrl.js","./sr.js":"./node_modules/moment/locale/sr.js","./ss":"./node_modules/moment/locale/ss.js","./ss.js":"./node_modules/moment/locale/ss.js","./sv":"./node_modules/moment/locale/sv.js","./sv.js":"./node_modules/moment/locale/sv.js","./sw":"./node_modules/moment/locale/sw.js","./sw.js":"./node_modules/moment/locale/sw.js","./ta":"./node_modules/moment/locale/ta.js","./ta.js":"./node_modules/moment/locale/ta.js","./te":"./node_modules/moment/locale/te.js","./te.js":"./node_modules/moment/locale/te.js","./tet":"./node_modules/moment/locale/tet.js","./tet.js":"./node_modules/moment/locale/tet.js","./tg":"./node_modules/moment/locale/tg.js","./tg.js":"./node_modules/moment/locale/tg.js","./th":"./node_modules/moment/locale/th.js","./th.js":"./node_modules/moment/locale/th.js","./tk":"./node_modules/moment/locale/tk.js","./tk.js":"./node_modules/moment/locale/tk.js","./tl-ph":"./node_modules/moment/locale/tl-ph.js","./tl-ph.js":"./node_modules/moment/locale/tl-ph.js","./tlh":"./node_modules/moment/locale/tlh.js","./tlh.js":"./node_modules/moment/locale/tlh.js","./tr":"./node_modules/moment/locale/tr.js","./tr.js":"./node_modules/moment/locale/tr.js","./tzl":"./node_modules/moment/locale/tzl.js","./tzl.js":"./node_modules/moment/locale/tzl.js","./tzm":"./node_modules/moment/locale/tzm.js","./tzm-latn":"./node_modules/moment/locale/tzm-latn.js","./tzm-latn.js":"./node_modules/moment/locale/tzm-latn.js","./tzm.js":"./node_modules/moment/locale/tzm.js","./ug-cn":"./node_modules/moment/locale/ug-cn.js","./ug-cn.js":"./node_modules/moment/locale/ug-cn.js","./uk":"./node_modules/moment/locale/uk.js","./uk.js":"./node_modules/moment/locale/uk.js","./ur":"./node_modules/moment/locale/ur.js","./ur.js":"./node_modules/moment/locale/ur.js","./uz":"./node_modules/moment/locale/uz.js","./uz-latn":"./node_modules/moment/locale/uz-latn.js","./uz-latn.js":"./node_modules/moment/locale/uz-latn.js","./uz.js":"./node_modules/moment/locale/uz.js","./vi":"./node_modules/moment/locale/vi.js","./vi.js":"./node_modules/moment/locale/vi.js","./x-pseudo":"./node_modules/moment/locale/x-pseudo.js","./x-pseudo.js":"./node_modules/moment/locale/x-pseudo.js","./yo":"./node_modules/moment/locale/yo.js","./yo.js":"./node_modules/moment/locale/yo.js","./zh-cn":"./node_modules/moment/locale/zh-cn.js","./zh-cn.js":"./node_modules/moment/locale/zh-cn.js","./zh-hk":"./node_modules/moment/locale/zh-hk.js","./zh-hk.js":"./node_modules/moment/locale/zh-hk.js","./zh-mo":"./node_modules/moment/locale/zh-mo.js","./zh-mo.js":"./node_modules/moment/locale/zh-mo.js","./zh-tw":"./node_modules/moment/locale/zh-tw.js","./zh-tw.js":"./node_modules/moment/locale/zh-tw.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./node_modules/moment/locale sync recursive ^\\.\\/.*$"}}]);