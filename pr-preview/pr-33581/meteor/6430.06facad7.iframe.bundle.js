(self.webpackChunk_rocket_chat_meteor=self.webpackChunk_rocket_chat_meteor||[]).push([[6430],{"./node_modules/add-px-to-style/index.js":function(module){var IS_UNITLESS={animationIterationCount:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridColumn:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,stopOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0};module.exports=function(name,value){return"number"!=typeof value||IS_UNITLESS[name]?value:value+"px"}},"./node_modules/dom-css/index.js":function(module,__unused_webpack_exports,__webpack_require__){var prefix=__webpack_require__("./node_modules/prefix-style/index.js"),toCamelCase=__webpack_require__("./node_modules/to-camel-case/index.js"),cache={float:"cssFloat"},addPxToStyle=__webpack_require__("./node_modules/add-px-to-style/index.js");function style(element,property,value){var camel=cache[property];if(void 0===camel&&(camel=function detect(cssProp){var camel=toCamelCase(cssProp),result=prefix(camel);return cache[camel]=cache[cssProp]=cache[result]=result,result}(property)),camel){if(void 0===value)return element.style[camel];element.style[camel]=addPxToStyle(camel,value)}}function set(){2===arguments.length?"string"==typeof arguments[1]?arguments[0].style.cssText=arguments[1]:function each(element,properties){for(var k in properties)properties.hasOwnProperty(k)&&style(element,k,properties[k])}(arguments[0],arguments[1]):style(arguments[0],arguments[1],arguments[2])}module.exports=set,module.exports.set=set,module.exports.get=function(element,properties){return Array.isArray(properties)?properties.reduce((function(obj,prop){return obj[prop]=style(element,prop||""),obj}),{}):style(element,properties||"")}},"./node_modules/performance-now/lib/performance-now.js":function(module,__unused_webpack_exports,__webpack_require__){var process=__webpack_require__("./node_modules/process/browser.js");(function(){var getNanoSeconds,hrtime,loadTime,moduleLoadTime,nodeLoadTime,upTime;"undefined"!=typeof performance&&null!==performance&&performance.now?module.exports=function(){return performance.now()}:null!=process&&process.hrtime?(module.exports=function(){return(getNanoSeconds()-nodeLoadTime)/1e6},hrtime=process.hrtime,moduleLoadTime=(getNanoSeconds=function(){var hr;return 1e9*(hr=hrtime())[0]+hr[1]})(),upTime=1e9*process.uptime(),nodeLoadTime=moduleLoadTime-upTime):Date.now?(module.exports=function(){return Date.now()-loadTime},loadTime=Date.now()):(module.exports=function(){return(new Date).getTime()-loadTime},loadTime=(new Date).getTime())}).call(this)},"./node_modules/prefix-style/index.js":function(module){var div=null,prefixes=["Webkit","Moz","O","ms"];module.exports=function prefixStyle(prop){div||(div=document.createElement("div"));var style=div.style;if(prop in style)return prop;for(var titleCase=prop.charAt(0).toUpperCase()+prop.slice(1),i=prefixes.length;i>=0;i--){var name=prefixes[i]+titleCase;if(name in style)return name}return!1}},"./node_modules/raf/index.js":function(module,__unused_webpack_exports,__webpack_require__){for(var now=__webpack_require__("./node_modules/performance-now/lib/performance-now.js"),root="undefined"==typeof window?__webpack_require__.g:window,vendors=["moz","webkit"],suffix="AnimationFrame",raf=root["request"+suffix],caf=root["cancel"+suffix]||root["cancelRequest"+suffix],i=0;!raf&&i<vendors.length;i++)raf=root[vendors[i]+"Request"+suffix],caf=root[vendors[i]+"Cancel"+suffix]||root[vendors[i]+"CancelRequest"+suffix];if(!raf||!caf){var last=0,id=0,queue=[];raf=function(callback){if(0===queue.length){var _now=now(),next=Math.max(0,16.666666666666668-(_now-last));last=next+_now,setTimeout((function(){var cp=queue.slice(0);queue.length=0;for(var i=0;i<cp.length;i++)if(!cp[i].cancelled)try{cp[i].callback(last)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(next))}return queue.push({handle:++id,callback:callback,cancelled:!1}),id},caf=function(handle){for(var i=0;i<queue.length;i++)queue[i].handle===handle&&(queue[i].cancelled=!0)}}module.exports=function(fn){return raf.call(root,fn)},module.exports.cancel=function(){caf.apply(root,arguments)},module.exports.polyfill=function(object){object||(object=root),object.requestAnimationFrame=raf,object.cancelAnimationFrame=caf}},"./node_modules/rc-scrollbars/lib/Scrollbars/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var extendStatics,__extends=this&&this.__extends||(extendStatics=function(d,b){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&(d[p]=b[p])},extendStatics(d,b)},function(d,b){if("function"!=typeof b&&null!==b)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Scrollbars=void 0;var React=__importStar(__webpack_require__("./node_modules/react/index.js")),react_1=__webpack_require__("./node_modules/react/index.js"),raf_1=__importStar(__webpack_require__("./node_modules/raf/index.js")),dom_css_1=__importDefault(__webpack_require__("./node_modules/dom-css/index.js")),utils_1=__webpack_require__("./node_modules/rc-scrollbars/lib/utils/index.js"),styles_1=__webpack_require__("./node_modules/rc-scrollbars/lib/Scrollbars/styles.js"),Scrollbars=function(_super){function Scrollbars(props){var _this=_super.call(this,props)||this;return _this.container=null,_this.dragging=!1,_this.scrolling=!1,_this.trackMouseOver=!1,_this.styles=(0,styles_1.createStyles)(_this.props.disableDefaultStyles),_this.getScrollLeft=_this.getScrollLeft.bind(_this),_this.getScrollTop=_this.getScrollTop.bind(_this),_this.getScrollWidth=_this.getScrollWidth.bind(_this),_this.getScrollHeight=_this.getScrollHeight.bind(_this),_this.getClientWidth=_this.getClientWidth.bind(_this),_this.getClientHeight=_this.getClientHeight.bind(_this),_this.getValues=_this.getValues.bind(_this),_this.getThumbHorizontalWidth=_this.getThumbHorizontalWidth.bind(_this),_this.getThumbVerticalHeight=_this.getThumbVerticalHeight.bind(_this),_this.getScrollLeftForOffset=_this.getScrollLeftForOffset.bind(_this),_this.getScrollTopForOffset=_this.getScrollTopForOffset.bind(_this),_this.scrollLeft=_this.scrollLeft.bind(_this),_this.scrollTop=_this.scrollTop.bind(_this),_this.scrollToLeft=_this.scrollToLeft.bind(_this),_this.scrollToTop=_this.scrollToTop.bind(_this),_this.scrollToRight=_this.scrollToRight.bind(_this),_this.scrollToBottom=_this.scrollToBottom.bind(_this),_this.handleTrackMouseEnter=_this.handleTrackMouseEnter.bind(_this),_this.handleTrackMouseLeave=_this.handleTrackMouseLeave.bind(_this),_this.handleHorizontalTrackMouseDown=_this.handleHorizontalTrackMouseDown.bind(_this),_this.handleVerticalTrackMouseDown=_this.handleVerticalTrackMouseDown.bind(_this),_this.handleHorizontalThumbMouseDown=_this.handleHorizontalThumbMouseDown.bind(_this),_this.handleVerticalThumbMouseDown=_this.handleVerticalThumbMouseDown.bind(_this),_this.handleWindowResize=_this.handleWindowResize.bind(_this),_this.handleScroll=_this.handleScroll.bind(_this),_this.handleDrag=_this.handleDrag.bind(_this),_this.handleDragEnd=_this.handleDragEnd.bind(_this),_this.state={didMountUniversal:!1,scrollbarWidth:(0,utils_1.getScrollbarWidth)()},_this}return __extends(Scrollbars,_super),Scrollbars.prototype.componentDidMount=function(){this.addListeners(),this.update(),this.componentDidMountUniversal()},Scrollbars.prototype.componentDidMountUniversal=function(){this.props.universal&&this.setState({didMountUniversal:!0})},Scrollbars.prototype.componentDidUpdate=function(){this.update()},Scrollbars.prototype.componentWillUnmount=function(){this.removeListeners(),this.requestFrame&&(0,raf_1.cancel)(this.requestFrame),clearTimeout(this.hideTracksTimeout),clearInterval(this.detectScrollingInterval)},Scrollbars.prototype.getScrollLeft=function(){return this.view?this.view.scrollLeft:0},Scrollbars.prototype.getScrollTop=function(){return this.view?this.view.scrollTop:0},Scrollbars.prototype.getScrollWidth=function(){return this.view?this.view.scrollWidth:0},Scrollbars.prototype.getScrollHeight=function(){return this.view?this.view.scrollHeight:0},Scrollbars.prototype.getClientWidth=function(){return this.view?this.view.clientWidth:0},Scrollbars.prototype.getClientHeight=function(){return this.view?this.view.clientHeight:0},Scrollbars.prototype.getValues=function(){var _a=this.view||{},_b=_a.scrollLeft,scrollLeft=void 0===_b?0:_b,_c=_a.scrollTop,scrollTop=void 0===_c?0:_c,_d=_a.scrollWidth,scrollWidth=void 0===_d?0:_d,_e=_a.scrollHeight,scrollHeight=void 0===_e?0:_e,_f=_a.clientWidth,clientWidth=void 0===_f?0:_f,_g=_a.clientHeight,clientHeight=void 0===_g?0:_g;return{left:scrollLeft/(scrollWidth-clientWidth)||0,top:scrollTop/(scrollHeight-clientHeight)||0,scrollLeft:scrollLeft,scrollTop:scrollTop,scrollWidth:scrollWidth,scrollHeight:scrollHeight,clientWidth:clientWidth,clientHeight:clientHeight}},Scrollbars.prototype.getThumbHorizontalWidth=function(){if(!this.view||!this.trackHorizontal)return 0;var _a=this.props,thumbSize=_a.thumbSize,thumbMinSize=_a.thumbMinSize,_b=this.view,scrollWidth=_b.scrollWidth,clientWidth=_b.clientWidth,trackWidth=(0,utils_1.getInnerWidth)(this.trackHorizontal),width=Math.ceil(clientWidth/scrollWidth*trackWidth);return trackWidth===width?0:thumbSize||Math.max(width,thumbMinSize)},Scrollbars.prototype.getThumbVerticalHeight=function(){if(!this.view||!this.trackVertical)return 0;var _a=this.props,thumbSize=_a.thumbSize,thumbMinSize=_a.thumbMinSize,_b=this.view,scrollHeight=_b.scrollHeight,clientHeight=_b.clientHeight,trackHeight=(0,utils_1.getInnerHeight)(this.trackVertical),height=Math.ceil(clientHeight/scrollHeight*trackHeight);return trackHeight===height?0:thumbSize||Math.max(height,thumbMinSize)},Scrollbars.prototype.getScrollLeftForOffset=function(offset){if(!this.view||!this.trackHorizontal)return 0;var _a=this.view,scrollWidth=_a.scrollWidth,clientWidth=_a.clientWidth;return offset/((0,utils_1.getInnerWidth)(this.trackHorizontal)-this.getThumbHorizontalWidth())*(scrollWidth-clientWidth)},Scrollbars.prototype.getScrollTopForOffset=function(offset){if(!this.view||!this.trackVertical)return 0;var _a=this.view,scrollHeight=_a.scrollHeight,clientHeight=_a.clientHeight;return offset/((0,utils_1.getInnerHeight)(this.trackVertical)-this.getThumbVerticalHeight())*(scrollHeight-clientHeight)},Scrollbars.prototype.scrollLeft=function(left){void 0===left&&(left=0),this.view&&(this.view.scrollLeft=left)},Scrollbars.prototype.scrollTop=function(top){void 0===top&&(top=0),this.view&&(this.view.scrollTop=top)},Scrollbars.prototype.scrollToLeft=function(){this.view&&(this.view.scrollLeft=0)},Scrollbars.prototype.scrollToTop=function(){this.view&&(this.view.scrollTop=0)},Scrollbars.prototype.scrollToRight=function(){this.view&&(this.view.scrollLeft=this.view.scrollWidth)},Scrollbars.prototype.scrollToBottom=function(){this.view&&(this.view.scrollTop=this.view.scrollHeight)},Scrollbars.prototype.scrollToY=function(y){this.view&&(this.view.scrollTop=y)},Scrollbars.prototype.addListeners=function(){if("undefined"!=typeof document&&this.view&&this.trackHorizontal&&this.trackVertical&&this.thumbVertical&&this.thumbHorizontal){var _a=this,view=_a.view,trackHorizontal=_a.trackHorizontal,trackVertical=_a.trackVertical,thumbHorizontal=_a.thumbHorizontal,thumbVertical=_a.thumbVertical;view.addEventListener("scroll",this.handleScroll),this.state.scrollbarWidth&&(trackHorizontal.addEventListener("mouseenter",this.handleTrackMouseEnter),trackHorizontal.addEventListener("mouseleave",this.handleTrackMouseLeave),trackHorizontal.addEventListener("mousedown",this.handleHorizontalTrackMouseDown),trackVertical.addEventListener("mouseenter",this.handleTrackMouseEnter),trackVertical.addEventListener("mouseleave",this.handleTrackMouseLeave),trackVertical.addEventListener("mousedown",this.handleVerticalTrackMouseDown),thumbHorizontal.addEventListener("mousedown",this.handleHorizontalThumbMouseDown),thumbVertical.addEventListener("mousedown",this.handleVerticalThumbMouseDown),window.addEventListener("resize",this.handleWindowResize))}},Scrollbars.prototype.removeListeners=function(){if("undefined"!=typeof document&&this.view&&this.trackHorizontal&&this.trackVertical&&this.thumbVertical&&this.thumbHorizontal){var _a=this,view=_a.view,trackHorizontal=_a.trackHorizontal,trackVertical=_a.trackVertical,thumbHorizontal=_a.thumbHorizontal,thumbVertical=_a.thumbVertical;view.removeEventListener("scroll",this.handleScroll),this.state.scrollbarWidth&&(trackHorizontal.removeEventListener("mouseenter",this.handleTrackMouseEnter),trackHorizontal.removeEventListener("mouseleave",this.handleTrackMouseLeave),trackHorizontal.removeEventListener("mousedown",this.handleHorizontalTrackMouseDown),trackVertical.removeEventListener("mouseenter",this.handleTrackMouseEnter),trackVertical.removeEventListener("mouseleave",this.handleTrackMouseLeave),trackVertical.removeEventListener("mousedown",this.handleVerticalTrackMouseDown),thumbHorizontal.removeEventListener("mousedown",this.handleHorizontalThumbMouseDown),thumbVertical.removeEventListener("mousedown",this.handleVerticalThumbMouseDown),window.removeEventListener("resize",this.handleWindowResize),this.teardownDragging())}},Scrollbars.prototype.handleScroll=function(event){var _this=this,_a=this.props,onScroll=_a.onScroll,onScrollFrame=_a.onScrollFrame;onScroll&&onScroll(event),this.update((function(values){var scrollLeft=values.scrollLeft,scrollTop=values.scrollTop;_this.viewScrollLeft=scrollLeft,_this.viewScrollTop=scrollTop,onScrollFrame&&onScrollFrame(values)})),this.detectScrolling()},Scrollbars.prototype.handleScrollStart=function(){var onScrollStart=this.props.onScrollStart;onScrollStart&&onScrollStart(),this.handleScrollStartAutoHide()},Scrollbars.prototype.handleScrollStartAutoHide=function(){this.props.autoHide&&this.showTracks()},Scrollbars.prototype.handleScrollStop=function(){var onScrollStop=this.props.onScrollStop;onScrollStop&&onScrollStop(),this.handleScrollStopAutoHide()},Scrollbars.prototype.handleScrollStopAutoHide=function(){this.props.autoHide&&this.hideTracks()},Scrollbars.prototype.handleWindowResize=function(){this.update()},Scrollbars.prototype.handleHorizontalTrackMouseDown=function(event){if(this.view){event.preventDefault();var target=event.target,clientX=event.clientX,targetLeft=target.getBoundingClientRect().left,thumbWidth=this.getThumbHorizontalWidth(),offset=Math.abs(targetLeft-clientX)-thumbWidth/2;this.view.scrollLeft=this.getScrollLeftForOffset(offset)}},Scrollbars.prototype.handleVerticalTrackMouseDown=function(event){if(this.view){event.preventDefault();var target=event.target,clientY=event.clientY,targetTop=target.getBoundingClientRect().top,thumbHeight=this.getThumbVerticalHeight(),offset=Math.abs(targetTop-clientY)-thumbHeight/2;this.view.scrollTop=this.getScrollTopForOffset(offset)}},Scrollbars.prototype.handleHorizontalThumbMouseDown=function(event){event.preventDefault(),this.handleDragStart(event);var target=event.target,clientX=event.clientX,offsetWidth=target.offsetWidth,left=target.getBoundingClientRect().left;this.prevPageX=offsetWidth-(clientX-left)},Scrollbars.prototype.handleVerticalThumbMouseDown=function(event){event.preventDefault(),this.handleDragStart(event);var target=event.target,clientY=event.clientY,offsetHeight=target.offsetHeight,top=target.getBoundingClientRect().top;this.prevPageY=offsetHeight-(clientY-top)},Scrollbars.prototype.setupDragging=function(){(0,dom_css_1.default)(document.body,this.styles.disableSelectStyle),document.addEventListener("mousemove",this.handleDrag),document.addEventListener("mouseup",this.handleDragEnd),document.onselectstart=utils_1.returnFalse},Scrollbars.prototype.teardownDragging=function(){(0,dom_css_1.default)(document.body,this.styles.disableSelectStyleReset),document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.handleDragEnd),document.onselectstart=null},Scrollbars.prototype.handleDragStart=function(event){this.dragging=!0,event.stopImmediatePropagation(),this.setupDragging()},Scrollbars.prototype.handleDrag=function(event){if(this.prevPageX&&this.trackHorizontal&&this.view){var clientX=event.clientX,offset=-this.trackHorizontal.getBoundingClientRect().left+clientX-(this.getThumbHorizontalWidth()-this.prevPageX);this.view.scrollLeft=this.getScrollLeftForOffset(offset)}if(this.prevPageY&&this.trackVertical&&this.view){var clientY=event.clientY;offset=-this.trackVertical.getBoundingClientRect().top+clientY-(this.getThumbVerticalHeight()-this.prevPageY);this.view.scrollTop=this.getScrollTopForOffset(offset)}return!1},Scrollbars.prototype.handleDragEnd=function(){this.dragging=!1,this.prevPageX=this.prevPageY=0,this.teardownDragging(),this.handleDragEndAutoHide()},Scrollbars.prototype.handleDragEndAutoHide=function(){this.props.autoHide&&this.hideTracks()},Scrollbars.prototype.handleTrackMouseEnter=function(){this.trackMouseOver=!0,this.handleTrackMouseEnterAutoHide()},Scrollbars.prototype.handleTrackMouseEnterAutoHide=function(){this.props.autoHide&&this.showTracks()},Scrollbars.prototype.handleTrackMouseLeave=function(){this.trackMouseOver=!1,this.handleTrackMouseLeaveAutoHide()},Scrollbars.prototype.handleTrackMouseLeaveAutoHide=function(){this.props.autoHide&&this.hideTracks()},Scrollbars.prototype.showTracks=function(){clearTimeout(this.hideTracksTimeout),(0,dom_css_1.default)(this.trackHorizontal,{opacity:1}),(0,dom_css_1.default)(this.trackVertical,{opacity:1})},Scrollbars.prototype.hideTracks=function(){var _this=this;if(!this.dragging&&!this.scrolling&&!this.trackMouseOver){var autoHideTimeout=this.props.autoHideTimeout;clearTimeout(this.hideTracksTimeout),this.hideTracksTimeout=setTimeout((function(){(0,dom_css_1.default)(_this.trackHorizontal,{opacity:0}),(0,dom_css_1.default)(_this.trackVertical,{opacity:0})}),autoHideTimeout)}},Scrollbars.prototype.detectScrolling=function(){var _this=this;this.scrolling||(this.scrolling=!0,this.handleScrollStart(),this.detectScrollingInterval=setInterval((function(){_this.lastViewScrollLeft===_this.viewScrollLeft&&_this.lastViewScrollTop===_this.viewScrollTop&&(clearInterval(_this.detectScrollingInterval),_this.scrolling=!1,_this.handleScrollStop()),_this.lastViewScrollLeft=_this.viewScrollLeft,_this.lastViewScrollTop=_this.viewScrollTop}),100))},Scrollbars.prototype.raf=function(callback){var _this=this;this.requestFrame&&raf_1.default.cancel(this.requestFrame),this.requestFrame=(0,raf_1.default)((function(){_this.requestFrame=void 0,callback()}))},Scrollbars.prototype.update=function(callback){var _this=this;this.raf((function(){return _this._update(callback)}))},Scrollbars.prototype._update=function(callback){var _a=this.props,onUpdate=_a.onUpdate,hideTracksWhenNotNeeded=_a.hideTracksWhenNotNeeded,values=this.getValues(),freshScrollbarWidth=(0,utils_1.getScrollbarWidth)();if(this.state.scrollbarWidth!==freshScrollbarWidth&&this.setState({scrollbarWidth:freshScrollbarWidth}),this.state.scrollbarWidth){var scrollLeft=values.scrollLeft,clientWidth=values.clientWidth,scrollWidth=values.scrollWidth,trackHorizontalWidth=(0,utils_1.getInnerWidth)(this.trackHorizontal),thumbHorizontalWidth=this.getThumbHorizontalWidth(),thumbHorizontalStyle={width:thumbHorizontalWidth,transform:"translateX(".concat(scrollLeft/(scrollWidth-clientWidth)*(trackHorizontalWidth-thumbHorizontalWidth),"px)")},scrollTop=values.scrollTop,clientHeight=values.clientHeight,scrollHeight=values.scrollHeight,trackVerticalHeight=(0,utils_1.getInnerHeight)(this.trackVertical),thumbVerticalHeight=this.getThumbVerticalHeight(),thumbVerticalStyle={height:thumbVerticalHeight,transform:"translateY(".concat(scrollTop/(scrollHeight-clientHeight)*(trackVerticalHeight-thumbVerticalHeight),"px)")};if(hideTracksWhenNotNeeded){var trackHorizontalStyle={visibility:scrollWidth>clientWidth?"visible":"hidden"},trackVerticalStyle={visibility:scrollHeight>clientHeight?"visible":"hidden"};(0,dom_css_1.default)(this.trackHorizontal,trackHorizontalStyle),(0,dom_css_1.default)(this.trackVertical,trackVerticalStyle)}(0,dom_css_1.default)(this.thumbHorizontal,thumbHorizontalStyle),(0,dom_css_1.default)(this.thumbVertical,thumbVerticalStyle)}onUpdate&&onUpdate(values),"function"==typeof callback&&callback(values)},Scrollbars.prototype.render=function(){var _this=this,_a=this.state,scrollbarWidth=_a.scrollbarWidth,didMountUniversal=_a.didMountUniversal,_b=this.props,autoHeight=_b.autoHeight,autoHeightMax=_b.autoHeightMax,autoHeightMin=_b.autoHeightMin,autoHide=_b.autoHide,autoHideDuration=_b.autoHideDuration,children=(_b.autoHideTimeout,_b.children),renderThumbHorizontal=(_b.classes,_b.hideTracksWhenNotNeeded,_b.onScroll,_b.onScrollFrame,_b.onScrollStart,_b.onScrollStop,_b.onUpdate,_b.renderThumbHorizontal),renderThumbVertical=_b.renderThumbVertical,renderTrackHorizontal=_b.renderTrackHorizontal,renderTrackVertical=_b.renderTrackVertical,renderView=_b.renderView,style=_b.style,tagName=_b.tagName,universal=(_b.thumbMinSize,_b.thumbSize,_b.universal),props=(_b.disableDefaultStyles,__rest(_b,["autoHeight","autoHeightMax","autoHeightMin","autoHide","autoHideDuration","autoHideTimeout","children","classes","hideTracksWhenNotNeeded","onScroll","onScrollFrame","onScrollStart","onScrollStop","onUpdate","renderThumbHorizontal","renderThumbVertical","renderTrackHorizontal","renderTrackVertical","renderView","style","tagName","thumbMinSize","thumbSize","universal","disableDefaultStyles"])),_c=this.styles,containerStyleAutoHeight=_c.containerStyleAutoHeight,containerStyleDefault=_c.containerStyleDefault,thumbStyleDefault=_c.thumbStyleDefault,trackHorizontalStyleDefault=_c.trackHorizontalStyleDefault,trackVerticalStyleDefault=_c.trackVerticalStyleDefault,viewStyleAutoHeight=_c.viewStyleAutoHeight,viewStyleDefault=_c.viewStyleDefault,viewStyleUniversalInitial=_c.viewStyleUniversalInitial,containerStyle=__assign(__assign(__assign({},containerStyleDefault),autoHeight&&__assign(__assign({},containerStyleAutoHeight),{minHeight:autoHeightMin,maxHeight:autoHeightMax})),style),viewStyle=__assign(__assign(__assign(__assign(__assign({},viewStyleDefault),{marginRight:scrollbarWidth?-scrollbarWidth:0,marginBottom:scrollbarWidth?-scrollbarWidth:0}),autoHeight&&__assign(__assign({},viewStyleAutoHeight),{minHeight:"string"==typeof autoHeightMin?"calc(".concat(autoHeightMin," + ").concat(scrollbarWidth,"px)"):autoHeightMin+scrollbarWidth,maxHeight:"string"==typeof autoHeightMax?"calc(".concat(autoHeightMax," + ").concat(scrollbarWidth,"px)"):autoHeightMax+scrollbarWidth})),autoHeight&&universal&&!didMountUniversal&&{minHeight:autoHeightMin,maxHeight:autoHeightMax}),universal&&!didMountUniversal&&viewStyleUniversalInitial),trackAutoHeightStyle={transition:"opacity ".concat(autoHideDuration,"ms"),opacity:0},trackHorizontalStyle=__assign(__assign(__assign({},trackHorizontalStyleDefault),autoHide&&trackAutoHeightStyle),(!scrollbarWidth||universal&&!didMountUniversal)&&{display:"none"}),trackVerticalStyle=__assign(__assign(__assign({},trackVerticalStyleDefault),autoHide&&trackAutoHeightStyle),(!scrollbarWidth||universal&&!didMountUniversal)&&{display:"none"}),mergedClasses=(0,utils_1.getFinalClasses)(this.props);return(0,react_1.createElement)(tagName,__assign(__assign({},props),{className:mergedClasses.root,style:containerStyle,ref:function(ref){_this.container=ref}}),[(0,react_1.cloneElement)(renderView({style:viewStyle,className:mergedClasses.view}),{key:"view",ref:function(ref){_this.view=ref}},children),(0,react_1.cloneElement)(renderTrackHorizontal({style:trackHorizontalStyle,className:mergedClasses.trackHorizontal}),{key:"trackHorizontal",ref:function(ref){_this.trackHorizontal=ref}},(0,react_1.cloneElement)(renderThumbHorizontal({style:thumbStyleDefault,className:mergedClasses.thumbHorizontal}),{ref:function(ref){_this.thumbHorizontal=ref}})),(0,react_1.cloneElement)(renderTrackVertical({style:trackVerticalStyle,className:mergedClasses.trackVertical}),{key:"trackVertical",ref:function(ref){_this.trackVertical=ref}},(0,react_1.cloneElement)(renderThumbVertical({style:thumbStyleDefault,className:mergedClasses.thumbVertical}),{ref:function(ref){_this.thumbVertical=ref}}))])},Scrollbars.defaultProps={autoHeight:!1,autoHeightMax:200,autoHeightMin:0,autoHide:!1,autoHideDuration:200,autoHideTimeout:1e3,disableDefaultStyles:!1,hideTracksWhenNotNeeded:!1,renderThumbHorizontal:function(props){return React.createElement("div",__assign({},props))},renderThumbVertical:function(props){return React.createElement("div",__assign({},props))},renderTrackHorizontal:function(props){return React.createElement("div",__assign({},props))},renderTrackVertical:function(props){return React.createElement("div",__assign({},props))},renderView:function(props){return React.createElement("div",__assign({},props))},tagName:"div",thumbMinSize:30,universal:!1},Scrollbars}(react_1.Component);exports.Scrollbars=Scrollbars},"./node_modules/rc-scrollbars/lib/Scrollbars/styles.js":function(__unused_webpack_module,exports){"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.createStyles=void 0,exports.createStyles=function createStyles(disableDefaultStyles){var trackStyleDefault=__assign({position:"absolute",right:2,bottom:2,zIndex:100},!disableDefaultStyles&&{borderRadius:3});return{containerStyleDefault:{position:"relative",overflow:"hidden",width:"100%",height:"100%"},containerStyleAutoHeight:{height:"auto"},viewStyleDefault:{position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"scroll",WebkitOverflowScrolling:"touch"},viewStyleAutoHeight:{position:"relative",top:void 0,left:void 0,right:void 0,bottom:void 0},viewStyleUniversalInitial:{overflow:"hidden",marginRight:0,marginBottom:0},trackHorizontalStyleDefault:__assign(__assign({},trackStyleDefault),{left:2,height:6}),trackVerticalStyleDefault:__assign(__assign({},trackStyleDefault),{top:2,width:6}),thumbStyleDefault:__assign({position:"relative",display:"block",height:"100%",cursor:"pointer",borderRadius:"inherit"},!disableDefaultStyles&&{backgroundColor:"rgba(0,0,0,.2)"}),disableSelectStyle:{userSelect:"none"},disableSelectStyleReset:{userSelect:"auto"}}}},"./node_modules/rc-scrollbars/lib/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";exports.ur=void 0;var Scrollbars_1=__webpack_require__("./node_modules/rc-scrollbars/lib/Scrollbars/index.js");Object.defineProperty(exports,"ur",{enumerable:!0,get:function(){return Scrollbars_1.Scrollbars}}),Scrollbars_1.Scrollbars},"./node_modules/rc-scrollbars/lib/utils/getInnerHeight.js":function(__unused_webpack_module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function getInnerHeight(el){if(!el)return 0;var clientHeight=el.clientHeight,_a=getComputedStyle(el),paddingTop=_a.paddingTop,paddingBottom=_a.paddingBottom;return clientHeight-parseFloat(paddingTop)-parseFloat(paddingBottom)}},"./node_modules/rc-scrollbars/lib/utils/getInnerWidth.js":function(__unused_webpack_module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function getInnerWidth(el){if(!el)return 0;var clientWidth=el.clientWidth,_a=getComputedStyle(el),paddingLeft=_a.paddingLeft,paddingRight=_a.paddingRight;return clientWidth-parseFloat(paddingLeft)-parseFloat(paddingRight)}},"./node_modules/rc-scrollbars/lib/utils/getScrollbarWidth.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var dom_css_1=__importDefault(__webpack_require__("./node_modules/dom-css/index.js")),scrollbarWidth=void 0,pxRatio=getPxRatio();function getScrollbarWidthFromDom(){var div=document.createElement("div");(0,dom_css_1.default)(div,{width:100,height:100,position:"absolute",top:-9999,overflow:"scroll",MsOverflowStyle:"scrollbar"}),document.body.appendChild(div);var result=div.offsetWidth-div.clientWidth;return document.body.removeChild(div),result}function getPxRatio(){return"undefined"==typeof window?1:window.screen.availWidth/document.documentElement.clientWidth}exports.default=function getScrollbarWidth(){var newPxRatio=getPxRatio();return pxRatio!==newPxRatio&&(scrollbarWidth=getScrollbarWidthFromDom(),pxRatio=newPxRatio),"number"==typeof scrollbarWidth?scrollbarWidth:(scrollbarWidth="undefined"!=typeof document?getScrollbarWidthFromDom():0)||0}},"./node_modules/rc-scrollbars/lib/utils/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.returnFalse=exports.getFinalClasses=exports.isString=exports.getScrollbarWidth=exports.getInnerWidth=exports.getInnerHeight=void 0;var getInnerHeight_1=__webpack_require__("./node_modules/rc-scrollbars/lib/utils/getInnerHeight.js");Object.defineProperty(exports,"getInnerHeight",{enumerable:!0,get:function(){return __importDefault(getInnerHeight_1).default}});var getInnerWidth_1=__webpack_require__("./node_modules/rc-scrollbars/lib/utils/getInnerWidth.js");Object.defineProperty(exports,"getInnerWidth",{enumerable:!0,get:function(){return __importDefault(getInnerWidth_1).default}});var getScrollbarWidth_1=__webpack_require__("./node_modules/rc-scrollbars/lib/utils/getScrollbarWidth.js");Object.defineProperty(exports,"getScrollbarWidth",{enumerable:!0,get:function(){return __importDefault(getScrollbarWidth_1).default}});var isString_1=__webpack_require__("./node_modules/rc-scrollbars/lib/utils/isString.js");Object.defineProperty(exports,"isString",{enumerable:!0,get:function(){return __importDefault(isString_1).default}});var mergeClasses_1=__webpack_require__("./node_modules/rc-scrollbars/lib/utils/mergeClasses.js");Object.defineProperty(exports,"getFinalClasses",{enumerable:!0,get:function(){return __importDefault(mergeClasses_1).default}});var returnFalse_1=__webpack_require__("./node_modules/rc-scrollbars/lib/utils/returnFalse.js");Object.defineProperty(exports,"returnFalse",{enumerable:!0,get:function(){return __importDefault(returnFalse_1).default}})},"./node_modules/rc-scrollbars/lib/utils/isString.js":function(__unused_webpack_module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function isString(maybe){return"string"==typeof maybe}},"./node_modules/rc-scrollbars/lib/utils/mergeClasses.js":function(__unused_webpack_module,exports){"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};Object.defineProperty(exports,"__esModule",{value:!0});var defaultClasses={root:"rc-scrollbars-container",view:"rc-scrollbars-view",trackVertical:"rc-scrollbars-track rc-scrollbars-track-v",trackHorizontal:"rc-scrollbars-track rc-scrollbars-track-h",thumbVertical:"rc-scrollbars-thumb rc-scrollbars-thumb-v",thumbHorizontal:"rc-scrollbars-thumb rc-scrollbars-thumb-h"};exports.default=function getFinalClasses(props){var className=props.className,classes=props.classes,defaultRootClass=defaultClasses.root,rest=__rest(defaultClasses,["root"]);return __assign({root:[defaultRootClass,className,null==classes?void 0:classes.root].filter(Boolean).join(" ")},function mergeClasses(defaultClasses,providedClasses){return providedClasses?Object.keys(defaultClasses).reduce((function(result,classKey){return result[classKey]="".concat(defaultClasses[classKey]," ").concat(providedClasses[classKey]||""),result}),{}):defaultClasses}(rest,props.classes))}},"./node_modules/rc-scrollbars/lib/utils/returnFalse.js":function(__unused_webpack_module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function returnFalse(){return!1}},"./node_modules/to-camel-case/index.js":function(module,__unused_webpack_exports,__webpack_require__){var space=__webpack_require__("./node_modules/to-space-case/index.js");module.exports=function toCamelCase(string){return space(string).replace(/\s(\w)/g,(function(matches,letter){return letter.toUpperCase()}))}},"./node_modules/to-no-case/index.js":function(module){module.exports=function toNoCase(string){return hasSpace.test(string)?string.toLowerCase():hasSeparator.test(string)?(function unseparate(string){return string.replace(separatorSplitter,(function(m,next){return next?" "+next:""}))}(string)||string).toLowerCase():hasCamel.test(string)?function uncamelize(string){return string.replace(camelSplitter,(function(m,previous,uppers){return previous+" "+uppers.toLowerCase().split("").join(" ")}))}(string).toLowerCase():string.toLowerCase()};var hasSpace=/\s/,hasSeparator=/(_|-|\.|:)/,hasCamel=/([a-z][A-Z]|[A-Z][a-z])/;var separatorSplitter=/[\W_]+(.|$)/g;var camelSplitter=/(.)([A-Z]+)/g},"./node_modules/to-space-case/index.js":function(module,__unused_webpack_exports,__webpack_require__){var clean=__webpack_require__("./node_modules/to-no-case/index.js");module.exports=function toSpaceCase(string){return clean(string).replace(/[\W_]+(.|$)/g,(function(matches,match){return match?" "+match:""})).trim()}}}]);