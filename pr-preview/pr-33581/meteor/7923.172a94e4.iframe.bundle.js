(self.webpackChunk_rocket_chat_meteor=self.webpackChunk_rocket_chat_meteor||[]).push([[7923],{"./node_modules/codemirror/addon/edit/matchbrackets.js":function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){!function(CodeMirror){var ie_lt8=/MSIE \d/.test(navigator.userAgent)&&(null==document.documentMode||document.documentMode<8),Pos=CodeMirror.Pos,matching={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function bracketRegex(config){return config&&config.bracketRegex||/[(){}[\]]/}function findMatchingBracket(cm,where,config){var line=cm.getLineHandle(where.line),pos=where.ch-1,afterCursor=config&&config.afterCursor;null==afterCursor&&(afterCursor=/(^| )cm-fat-cursor($| )/.test(cm.getWrapperElement().className));var re=bracketRegex(config),match=!afterCursor&&pos>=0&&re.test(line.text.charAt(pos))&&matching[line.text.charAt(pos)]||re.test(line.text.charAt(pos+1))&&matching[line.text.charAt(++pos)];if(!match)return null;var dir=">"==match.charAt(1)?1:-1;if(config&&config.strict&&dir>0!=(pos==where.ch))return null;var style=cm.getTokenTypeAt(Pos(where.line,pos+1)),found=scanForBracket(cm,Pos(where.line,pos+(dir>0?1:0)),dir,style,config);return null==found?null:{from:Pos(where.line,pos),to:found&&found.pos,match:found&&found.ch==match.charAt(0),forward:dir>0}}function scanForBracket(cm,where,dir,style,config){for(var maxScanLen=config&&config.maxScanLineLength||1e4,maxScanLines=config&&config.maxScanLines||1e3,stack=[],re=bracketRegex(config),lineEnd=dir>0?Math.min(where.line+maxScanLines,cm.lastLine()+1):Math.max(cm.firstLine()-1,where.line-maxScanLines),lineNo=where.line;lineNo!=lineEnd;lineNo+=dir){var line=cm.getLine(lineNo);if(line){var pos=dir>0?0:line.length-1,end=dir>0?line.length:-1;if(!(line.length>maxScanLen))for(lineNo==where.line&&(pos=where.ch-(dir<0?1:0));pos!=end;pos+=dir){var ch=line.charAt(pos);if(re.test(ch)&&(void 0===style||(cm.getTokenTypeAt(Pos(lineNo,pos+1))||"")==(style||""))){var match=matching[ch];if(match&&">"==match.charAt(1)==dir>0)stack.push(ch);else{if(!stack.length)return{pos:Pos(lineNo,pos),ch:ch};stack.pop()}}}}}return lineNo-dir!=(dir>0?cm.lastLine():cm.firstLine())&&null}function matchBrackets(cm,autoclear,config){for(var maxHighlightLen=cm.state.matchBrackets.maxHighlightLineLength||1e3,highlightNonMatching=config&&config.highlightNonMatching,marks=[],ranges=cm.listSelections(),i=0;i<ranges.length;i++){var match=ranges[i].empty()&&findMatchingBracket(cm,ranges[i].head,config);if(match&&(match.match||!1!==highlightNonMatching)&&cm.getLine(match.from.line).length<=maxHighlightLen){var style=match.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";marks.push(cm.markText(match.from,Pos(match.from.line,match.from.ch+1),{className:style})),match.to&&cm.getLine(match.to.line).length<=maxHighlightLen&&marks.push(cm.markText(match.to,Pos(match.to.line,match.to.ch+1),{className:style}))}}if(marks.length){ie_lt8&&cm.state.focused&&cm.focus();var clear=function(){cm.operation((function(){for(var i=0;i<marks.length;i++)marks[i].clear()}))};if(!autoclear)return clear;setTimeout(clear,800)}}function doMatchBrackets(cm){cm.operation((function(){cm.state.matchBrackets.currentlyHighlighted&&(cm.state.matchBrackets.currentlyHighlighted(),cm.state.matchBrackets.currentlyHighlighted=null),cm.state.matchBrackets.currentlyHighlighted=matchBrackets(cm,!1,cm.state.matchBrackets)}))}function clearHighlighted(cm){cm.state.matchBrackets&&cm.state.matchBrackets.currentlyHighlighted&&(cm.state.matchBrackets.currentlyHighlighted(),cm.state.matchBrackets.currentlyHighlighted=null)}CodeMirror.defineOption("matchBrackets",!1,(function(cm,val,old){old&&old!=CodeMirror.Init&&(cm.off("cursorActivity",doMatchBrackets),cm.off("focus",doMatchBrackets),cm.off("blur",clearHighlighted),clearHighlighted(cm)),val&&(cm.state.matchBrackets="object"==typeof val?val:{},cm.on("cursorActivity",doMatchBrackets),cm.on("focus",doMatchBrackets),cm.on("blur",clearHighlighted))})),CodeMirror.defineExtension("matchBrackets",(function(){matchBrackets(this,!0)})),CodeMirror.defineExtension("findMatchingBracket",(function(pos,config,oldConfig){return(oldConfig||"boolean"==typeof config)&&(oldConfig?(oldConfig.strict=config,config=oldConfig):config=config?{strict:!0}:null),findMatchingBracket(this,pos,config)})),CodeMirror.defineExtension("scanForBracket",(function(pos,dir,style,config){return scanForBracket(this,pos,dir,style,config)}))}(__webpack_require__("./node_modules/codemirror/lib/codemirror.js"))}}]);