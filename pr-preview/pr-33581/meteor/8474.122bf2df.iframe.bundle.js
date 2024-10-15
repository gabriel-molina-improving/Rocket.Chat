"use strict";(self.webpackChunk_rocket_chat_meteor=self.webpackChunk_rocket_chat_meteor||[]).push([[8474],{"./client/hooks/lists/useStreamUpdatesForMessageList.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return useStreamUpdatesForMessageList}});var _rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/ui-contexts/dist/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_lib_minimongo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./client/lib/minimongo/index.ts"),useStreamUpdatesForMessageList=function useStreamUpdatesForMessageList(messageList,uid,rid){var subscribeToRoomMessages=(0,_rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_0__.useStream)("room-messages"),subscribeToNotifyRoom=(0,_rocket_chat_ui_contexts__WEBPACK_IMPORTED_MODULE_0__.useStream)("notify-room");(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){if(uid&&rid){var unsubscribeFromRoomMessages=subscribeToRoomMessages(rid,(function(message){messageList.handle(message)})),unsubscribeFromDeleteMessage=subscribeToNotifyRoom("".concat(rid,"/deleteMessage"),(function(_ref){var mid=_ref._id;messageList.remove(mid)})),unsubscribeFromDeleteMessageBulk=subscribeToNotifyRoom("".concat(rid,"/deleteMessageBulk"),(function(params){var matchDeleteCriteria=function createDeleteCriteria(params){var _params$users,query={};return params.ids?query._id={$in:params.ids}:query.ts=params.ts,params.excludePinned&&(query.pinned={$ne:!0}),params.ignoreDiscussion&&(query.drid={$exists:!1}),null!==(_params$users=params.users)&&void 0!==_params$users&&_params$users.length&&(query["u.username"]={$in:params.users}),(0,_lib_minimongo__WEBPACK_IMPORTED_MODULE_2__.Jy)(query)}(params);messageList.prune(matchDeleteCriteria)}));return function(){unsubscribeFromRoomMessages(),unsubscribeFromDeleteMessage(),unsubscribeFromDeleteMessageBulk()}}messageList.clear()}),[subscribeToRoomMessages,subscribeToNotifyRoom,uid,rid,messageList])}},"./client/lib/minimongo/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Jy:function(){return createFilterFromQuery}});var BSONType=function(BSONType){return BSONType[BSONType.Double=1]="Double",BSONType[BSONType.String=2]="String",BSONType[BSONType.Object=3]="Object",BSONType[BSONType.Array=4]="Array",BSONType[BSONType.BinData=5]="BinData",BSONType[BSONType.Undefined=6]="Undefined",BSONType[BSONType.ObjectId=7]="ObjectId",BSONType[BSONType.Boolean=8]="Boolean",BSONType[BSONType.Date=9]="Date",BSONType[BSONType.Null=10]="Null",BSONType[BSONType.Regex=11]="Regex",BSONType[BSONType.DBPointer=12]="DBPointer",BSONType[BSONType.JavaScript=13]="JavaScript",BSONType[BSONType.Symbol=14]="Symbol",BSONType[BSONType.JavaScriptWithScope=15]="JavaScriptWithScope",BSONType[BSONType.Int=16]="Int",BSONType[BSONType.Timestamp=17]="Timestamp",BSONType[BSONType.Long=18]="Long",BSONType[BSONType.Decimal=19]="Decimal",BSONType[BSONType.MinKey=-1]="MinKey",BSONType[BSONType.MaxKey=127]="MaxKey",BSONType}({});function _toConsumableArray(r){return function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}(r)||function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var getBSONType=function getBSONType(v){return"number"==typeof v?BSONType.Double:"string"==typeof v?BSONType.String:"boolean"==typeof v?BSONType.Boolean:Array.isArray(v)?BSONType.Array:null===v?BSONType.Null:v instanceof RegExp?BSONType.Regex:"function"==typeof v?BSONType.JavaScript:v instanceof Date?BSONType.Date:v instanceof Uint8Array?BSONType.BinData:BSONType.Object},getBSONTypeOrder=function getBSONTypeOrder(type){switch(type){case BSONType.Null:return 0;case BSONType.Double:case BSONType.Int:case BSONType.Long:return 1;case BSONType.String:case BSONType.Symbol:return 2;case BSONType.Object:return 3;case BSONType.Array:return 4;case BSONType.BinData:return 5;case BSONType.ObjectId:return 6;case BSONType.Boolean:return 7;case BSONType.Date:case BSONType.Timestamp:return 8;case BSONType.Regex:return 9;case BSONType.JavaScript:case BSONType.JavaScriptWithScope:return 100;default:return-1}},bson_compareBSONValues=function compareBSONValues(a,b){var _Array$prototype$conc,_Array$prototype$conc2;if(void 0===a)return void 0===b?0:-1;if(void 0===b)return 1;var ta=getBSONType(a),oa=getBSONTypeOrder(ta),tb=getBSONType(b),ob=getBSONTypeOrder(tb);if(oa!==ob)return oa<ob?-1:1;if(ta!==tb)throw Error("Missing type coercion logic in compareBSONValues");switch(ta){case BSONType.Double:return a-b;case BSONType.String:return a.localeCompare(b);case BSONType.Object:return compareBSONValues((_Array$prototype$conc=Array.prototype.concat).call.apply(_Array$prototype$conc,[[]].concat(_toConsumableArray(Object.entries(a)))),(_Array$prototype$conc2=Array.prototype.concat).call.apply(_Array$prototype$conc2,[[]].concat(_toConsumableArray(Object.entries(b)))));case BSONType.Array:for(var i=0;;i++){if(i===a.length)return i===b.length?0:-1;if(i===b.length)return 1;var s=compareBSONValues(a[i],b[i]);if(0!==s)return s}case BSONType.BinData:if(a.length!==b.length)return a.length-b.length;for(var _i=0;_i<a.length;_i++)if(a[_i]!==b[_i])return a[_i]<b[_i]?-1:1;return 0;case BSONType.Null:case BSONType.Undefined:return 0;case BSONType.ObjectId:return a.toHexString().localeCompare(b.toHexString());case BSONType.Boolean:return Number(a)-Number(b);case BSONType.Date:return a.getTime()-b.getTime();case BSONType.Regex:throw Error("Sorting not supported on regular expression");case BSONType.JavaScript:case BSONType.JavaScriptWithScope:throw Error("Sorting not supported on Javascript code")}throw Error("Unknown type to sort")};function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var equals=function equals(a,b){if(a===b)return!0;if(!a||!b)return!1;if("object"!==_typeof(a)||"object"!==_typeof(b))return!1;if(a instanceof Date&&b instanceof Date)return a.valueOf()===b.valueOf();if(a instanceof Uint8Array&&b instanceof Uint8Array){if(a.length!==b.length)return!1;for(var i=0;i<a.length;i++)if(a[i]!==b[i])return!1;return!0}if(Array.isArray(a)){if(!Array.isArray(b))return!1;if(a.length!==b.length)return!1;for(var _i=0;_i<a.length;_i++)if(!equals(a[_i],b[_i]))return!1;return!0}if(Object.keys(b).length!==Object.keys(a).length)return!1;for(var _i2=0,_Object$keys=Object.keys(a);_i2<_Object$keys.length;_i2++){var key=_Object$keys[_i2];if(!(key in b))return!1;if(!equals(a[key],b[key]))return!1}return!0},flatSome=function flatSome(x,f){return Array.isArray(x)?x.some(f):f(x)},some=function some(x,f){return!!f(x)||Array.isArray(x)&&x.some(f)};function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function lookups_unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return lookups_arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?lookups_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function lookups_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function lookups_typeof(o){return lookups_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},lookups_typeof(o)}var isNullDocument=function isNullDocument(doc){return null==doc},isRecordDocument=function isRecordDocument(doc){return null!=doc&&("object"===lookups_typeof(doc)||"function"==typeof doc)},lookups_createLookupFunction=function createLookupFunction(key){var _key$split2=_slicedToArray(key.split(/\.(.+)/),2),first=_key$split2[0],rest=_key$split2[1];if(!rest)return function(doc){return isNullDocument(doc)||!isRecordDocument(doc)?[void 0]:[doc[first]]};var lookupRest=createLookupFunction(rest),nextIsNumeric=/^\d+(\.|$)/.test(rest);return function(doc){if(isNullDocument(doc)||!isRecordDocument(doc))return[void 0];var firstLevel=doc[first];if(function isEmptyArray(value){return Array.isArray(value)&&0===value.length}(firstLevel))return[void 0];var docs=function isIndexedByNumber(value,_isIndexedByNumber){return Array.isArray(value)||_isIndexedByNumber}(firstLevel,nextIsNumeric)?firstLevel:[firstLevel];return Array.prototype.concat.apply([],docs.map(lookupRest))}};function query_slicedToArray(r,e){return function query_arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function query_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||query_unsupportedIterableToArray(r,e)||function query_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function query_unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return query_arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?query_arrayLikeToArray(r,a):void 0}}function query_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function query_typeof(o){return query_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},query_typeof(o)}var $in=function $in(operand,_options){var index=null;if(function isArrayOfFields(values){return values.every((function(value){return["number","string","symbol"].includes(query_typeof(value))}))}(operand)){index={};var _step,_iterator=function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=query_unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var _n=0,F=function F(){};return{s:F,n:function n(){return _n>=r.length?{done:!0}:{done:!1,value:r[_n++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function s(){t=t.call(r)},n:function n(){var r=t.next();return a=r.done,r},e:function e(r){u=!0,o=r},f:function f(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}(operand);try{for(_iterator.s();!(_step=_iterator.n()).done;){var operandElement=_step.value;index[operandElement]=operandElement}}catch(err){_iterator.e(err)}finally{_iterator.f()}}return function(value){return some(value,(function(x){return"string"==typeof x&&null!==index?!!index[x]:operand.some((function(operandElement){return equals(operandElement,x)}))}))}},dummyOperator=function dummyOperator(_operand,_options){return function(_value){return!0}},valueOperators={$in:$in,$nin:function $nin(operand,_options){var isIn=$in(operand);return function(value){return void 0===value||!isIn(value)}},$all:function $all(operand,_options){return function(value){return!!Array.isArray(value)&&operand.every((function(operandElement){return value.some((function(valueElement){return equals(operandElement,valueElement)}))}))}},$lt:function $lt(operand,_options){return function(value){return flatSome(value,(function(x){return bson_compareBSONValues(x,operand)<0}))}},$lte:function $lte(operand,_options){return function(value){return flatSome(value,(function(x){return bson_compareBSONValues(x,operand)<=0}))}},$gt:function $gt(operand,_options){return function(value){return flatSome(value,(function(x){return bson_compareBSONValues(x,operand)>0}))}},$gte:function $gte(operand,_options){return function(value){return flatSome(value,(function(x){return bson_compareBSONValues(x,operand)>=0}))}},$ne:function $ne(operand,_options){return function(value){return!some(value,(function(x){return equals(x,operand)}))}},$exists:function $exists(operand,_options){return function(value){return operand===(void 0!==value)}},$mod:function $mod(_ref,_options){var _ref2=query_slicedToArray(_ref,2),divisor=_ref2[0],remainder=_ref2[1];return function(value){return flatSome(value,(function(x){return Number(x)%divisor===remainder}))}},$size:function $size(operand,_options){return function(value){return Array.isArray(value)&&operand===value.length}},$type:function $type(operand,_options){return function(value){return void 0!==value&&flatSome(value,(function(x){return getBSONType(x)===operand}))}},$regex:function $regex(operand,options){var regex;if(void 0!==options){var regexSource=operand instanceof RegExp?operand.source:operand;regex=new RegExp(regexSource,options)}else operand instanceof RegExp||(regex=new RegExp(operand));return function(value){return void 0!==value&&flatSome(value,(function(x){return regex.test(String(x))}))}},$elemMatch:function $elemMatch(operand,_options){var matcher=compileDocumentSelector(operand);return function(value){return!!Array.isArray(value)&&value.some((function(x){return matcher(x)}))}},$not:function $not(operand,_options){var matcher=compileValueSelector(operand);return function(value){return!matcher(value)}},$options:dummyOperator,$near:dummyOperator,$geoIntersects:dummyOperator},$and=function $and(subSelector){var subSelectorFunctions=subSelector.map(compileDocumentSelector);return function(doc){return subSelectorFunctions.every((function(f){return f(doc)}))}},$or=function $or(subSelector){var subSelectorFunctions=subSelector.map(compileDocumentSelector);return function(doc){return subSelectorFunctions.some((function(f){return f(doc)}))}},$nor=function $nor(subSelector){var subSelectorFunctions=subSelector.map(compileDocumentSelector);return function(doc){return subSelectorFunctions.every((function(f){return!f(doc)}))}},$where=function $where(selectorValue){var fn=selectorValue instanceof Function?selectorValue:Function("return ".concat(selectorValue));return function(doc){return!!fn.call(doc)}},logicalOperators={$and:$and,$or:$or,$nor:$nor,$where:$where},isValueOperator=function isValueOperator(operator){return operator in valueOperators},compileValueSelector=function compileValueSelector(valueSelector){return null==valueSelector?function compileUndefinedOrNullSelector(){return function(value){return flatSome(value,(function(x){return null==x}))}}():function isObject(value){var type=_typeof(value);return!!value&&("object"===type||"function"===type)}(valueSelector)?valueSelector instanceof RegExp?function compileRegexSelector(regex){return function(value){return void 0!==value&&flatSome(value,(function(x){return regex.test(String(x))}))}}(valueSelector):Array.isArray(valueSelector)?function compileArraySelector(expected){return function(value){return!!Array.isArray(value)&&some(value,(function(x){return equals(expected,x)}))}}(valueSelector):function hasValueOperators(valueSelector){return Object.keys(valueSelector).every((function(key){return"$"===key.slice(0,1)}))}(valueSelector)?function compileValueOperatorsSelector(expression){for(var operatorFunctions=[],_i=0,_arr=Object.keys(expression);_i<_arr.length;_i++){var operator=_arr[_i];if(isValueOperator(operator)){var operand=expression[operator],operation=valueOperators[operator];operatorFunctions.push(operation(operand,expression.$options))}}return function(value){return operatorFunctions.every((function(f){return f(value)}))}}(valueSelector):function(value){return flatSome(value,(function(x){return equals(valueSelector,x)}))}:function compilePrimitiveSelector(primitive){return function(value){return flatSome(value,(function(x){return x===primitive}))}}(valueSelector)},compileDocumentSelector=function compileDocumentSelector(docSelector){var perKeySelectors=Object.entries(docSelector).map((function(_ref3){var _ref4=query_slicedToArray(_ref3,2),key=_ref4[0],subSelector=_ref4[1];if(void 0===subSelector)return function(){return!0};if(function isLogicalOperator(operator){return operator in logicalOperators}(key))switch(key){case"$and":return $and(subSelector);case"$or":return $or(subSelector);case"$nor":return $nor(subSelector);case"$where":return $where(subSelector)}var lookUpByIndex=lookups_createLookupFunction(key),valueSelectorFunc=compileValueSelector(subSelector);return function(doc){return lookUpByIndex(doc).some(valueSelectorFunc)}}));return function(doc){return perKeySelectors.every((function(f){return f(doc)}))}};var createFilterFromQuery=compileDocumentSelector}}]);