"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=n(e);function r(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,a,i=t.call(e),l=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(a)throw a.error}}return l}"function"==typeof SuppressedError&&SuppressedError;var a=function(e){var n=e.children,r=e.sshDir,a=e.fileDir,i=e.twindClass,l=void 0===i?"text-green-400":i,o=e.activeCursor,c=void 0!==o&&o;return t.default.createElement("div",{className:"react-terminal-line"},t.default.createElement("span",{className:"react-terminal-input-prompt"},t.default.createElement("span",{className:l},r),":",t.default.createElement("span",{className:l},a),"$"),t.default.createElement("span",{className:c?"react-terminal-active-input":""},n))};var i;!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===t&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}("/**\n * Modfied version of [termynal.js](https://github.com/ines/termynal/blob/master/termynal.css).\n *\n * @author Ines Montani <ines@ines.io>\n * @version 0.0.1\n * @license MIT\n */\n .react-terminal-wrapper {\n  width: 100%;\n  background: #252a33;\n  color: #eee;\n  font-size: 18px;\n  font-family: 'Fira Mono', Consolas, Menlo, Monaco, 'Courier New', Courier, monospace;\n  border-radius: 4px;\n  padding: 75px 45px 35px;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n }\n\n.react-terminal {\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.react-terminal-wrapper.react-terminal-light {\n  background: #ddd;\n  color: #1a1e24;\n}\n\n.react-terminal-window-buttons {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n\n.react-terminal-window-buttons button {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  border: 0;\n}\n\n.react-terminal-window-buttons button.clickable {\n  cursor: pointer;\n}\n\n.react-terminal-window-buttons button.red-btn {\n  background: #d9515d;\n}\n\n.react-terminal-window-buttons button.yellow-btn {\n  background: #f4c025;\n}\n\n.react-terminal-window-buttons button.green-btn {\n  background: #3ec930;\n}\n\n.react-terminal-wrapper:after {\n  content: attr(data-terminal-name);\n  position: absolute;\n  color: #a2a2a2;\n  top: 5px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  pointer-events: none;\n}\n\n.react-terminal-wrapper.react-terminal-light:after {\n  color: #D76D77;\n}\n\n.react-terminal-line {\n  white-space: pre;\n}\n\n.react-terminal-line:before {\n  /* Set up defaults and ensure empty lines are displayed. */\n  content: '';\n  display: inline-block;\n  vertical-align: middle;\n  color: #a2a2a2;\n}\n\n.react-terminal-light .react-terminal-line:before {\n  color: #D76D77;\n}\n\n.react-terminal-input:before {\n  margin-right: 0.75em;\n  content: '$';\n}\n\n.react-terminal-input[data-terminal-prompt]:before {\n  content: attr(data-terminal-prompt);\n}\n\n.react-terminal-wrapper:focus-within .react-terminal-active-input .cursor {\n  position: relative;\n  display: inline-block;\n  width: 0.55em;\n  height: 1em;\n  top: 0.225em;\n  background: #fff;\n  -webkit-animation: blink 1s infinite;\n          animation: blink 1s infinite;\n}\n\n/* Cursor animation */\n\n@-webkit-keyframes blink {\n  50% {\n      opacity: 0;\n  }\n}\n\n@keyframes blink {\n  50% {\n      opacity: 0;\n  }\n}\n\n.terminal-hidden-input {\n    position: fixed;\n    left: -1000px;\n}\n\n/* .react-terminal-progress {\n  display: flex;\n  margin: .5rem 0;\n}\n\n.react-terminal-progress-bar {\n  background-color: #fff;\n  border-radius: .25rem;\n  width: 25%;\n}\n\n.react-terminal-wrapper.react-terminal-light .react-terminal-progress-bar {\n  background-color: #000;\n} */\n"),exports.ColorMode=void 0,(i=exports.ColorMode||(exports.ColorMode={}))[i.Light=0]="Light",i[i.Dark=1]="Dark";exports.TerminalInput=a,exports.TerminalOutput=function(e){var n=e.children;return t.default.createElement("div",{className:"react-terminal-line"},n)},exports.default=function(n){var i=n.name,l=n.sshDir,o=n.fileDir,c=n.twindClass,s=n.height,d=void 0===s?"600px":s,u=n.colorMode,m=n.onInput,p=n.children,f=n.startingInputValue,b=void 0===f?"":f,h=n.redBtnCallback,v=n.yellowBtnCallback,y=n.greenBtnCallback,w=n.scrollToPosition,g=void 0===w||w,x=r(e.useState(""),2),k=x[0],E=x[1],C=r(e.useState(0),2),N=C[0],S=C[1],D=e.useRef(null);e.useEffect((function(){E(b.trim())}),[b]),e.useEffect((function(){var e,n;if(null!=m){var t=[],r=function(e){var n=function(){var n;return null===(n=null==e?void 0:e.querySelector(".terminal-hidden-input"))||void 0===n?void 0:n.focus()};null==e||e.addEventListener("click",n),t.push({terminalEl:e,listener:n})};try{for(var a=function(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}(document.getElementsByClassName("react-terminal-wrapper")),i=a.next();!i.done;i=a.next()){r(i.value)}}catch(n){e={error:n}}finally{try{i&&!i.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}return function(){t.forEach((function(e){e.terminalEl.removeEventListener("click",e.listener)}))}}}),[m]);var M=["react-terminal-wrapper"];return u===exports.ColorMode.Light&&M.push("react-terminal-light"),t.default.createElement("div",{className:M.join(" "),"data-terminal-name":i},t.default.createElement("div",{className:"react-terminal-window-buttons"},t.default.createElement("button",{className:(v?"clickable":"")+" red-btn",disabled:!h,onClick:h}),t.default.createElement("button",{className:(v?"clickable":"")+" yellow-btn",disabled:!v,onClick:v}),t.default.createElement("button",{className:(y?"clickable":"")+" green-btn",disabled:!y,onClick:y})),t.default.createElement("div",{className:"react-terminal",style:{height:d}},p,"function"==typeof m&&t.default.createElement(a,{sshDir:l,fileDir:o,twindClass:c,activeCursor:!0},k,t.default.createElement("span",{className:"cursor",style:{left:N+1+"px"}})),t.default.createElement("div",{ref:D})),t.default.createElement("input",{className:"terminal-hidden-input",placeholder:"Terminal Hidden Input",value:k,autoFocus:null!=m,onChange:function(e){E(e.target.value)},onKeyDown:function(e){var n,t,r;if(m)if("Enter"===e.key)m(k),S(0),E(""),g&&setTimeout((function(){var e;return null===(e=null==D?void 0:D.current)||void 0===e?void 0:e.scrollIntoView({behavior:"auto",block:"nearest"})}),500);else if(["ArrowLeft","ArrowRight","ArrowDown","ArrowUp","Delete"].includes(e.key)){var a=e.currentTarget,i="",l=k.length-(a.selectionStart||0);n=l,t=0,r=k.length,l=n>r?r:n<t?t:n,"ArrowLeft"===e.key?(l>k.length-1&&l--,i=k.slice(k.length-1-l)):"ArrowRight"===e.key||"Delete"===e.key?i=k.slice(k.length-l+1):"ArrowUp"===e.key&&(i=k.slice(0));var o=function(e,n){var t=document.createElement("span");t.style.visibility="hidden",t.style.position="absolute",t.style.fontSize=window.getComputedStyle(e).fontSize,t.style.fontFamily=window.getComputedStyle(e).fontFamily,t.innerText=n,document.body.appendChild(t);var r=t.getBoundingClientRect().width;return document.body.removeChild(t),-r}(a,i);S(o)}}}))};
//# sourceMappingURL=index.js.map
