!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";e.r(t);e(1),e(3);console.log("Hello Coders! :)"),document.querySelector("#hamburger").addEventListener("click",(function(n){document.querySelector("#drawer ul").classList.toggle("active")}))},function(n,t,e){(function(n){function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var e=function(n){"use strict";var e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{u({},"")}catch(n){u=function(n,t,e){return n[t]=e}}function l(n,t,e,r){var o=t&&t.prototype instanceof p?t:p,i=Object.create(o.prototype),a=new E(r||[]);return i._invoke=function(n,t,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return k()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=w(a,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var u=s(n,t,e);if("normal"===u.type){if(r=e.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r="completed",e.method="throw",e.arg=u.arg)}}}(n,e,a),i}function s(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}n.wrap=l;var f={};function p(){}function d(){}function h(){}var g={};g[i]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(S([])));y&&y!==e&&r.call(y,i)&&(g=y);var v=h.prototype=p.prototype=Object.create(g);function b(n){["next","throw","return"].forEach((function(t){u(n,t,(function(n){return this._invoke(t,n)}))}))}function x(n,e){var o;this._invoke=function(i,a){function c(){return new e((function(o,c){!function o(i,a,c,u){var l=s(n[i],n,a);if("throw"!==l.type){var f=l.arg,p=f.value;return p&&"object"===t(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(n){o("next",n,c,u)}),(function(n){o("throw",n,c,u)})):e.resolve(p).then((function(n){f.value=n,c(f)}),(function(n){return o("throw",n,c,u)}))}u(l.arg)}(i,a,o,c)}))}return o=o?o.then(c,c):c()}}function w(n,t){var e=n.iterator[t.method];if(void 0===e){if(t.delegate=null,"throw"===t.method){if(n.iterator.return&&(t.method="return",t.arg=void 0,w(n,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=s(e,n.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,f;var o=r.arg;return o?o.done?(t[n.resultName]=o.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function j(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function L(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function E(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(j,this),this.reset(!0)}function S(n){if(n){var t=n[i];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var e=-1,o=function t(){for(;++e<n.length;)if(r.call(n,e))return t.value=n[e],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=v.constructor=h,h.constructor=d,d.displayName=u(h,c,"GeneratorFunction"),n.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,h):(n.__proto__=h,u(n,c,"GeneratorFunction")),n.prototype=Object.create(v),n},n.awrap=function(n){return{__await:n}},b(x.prototype),x.prototype[a]=function(){return this},n.AsyncIterator=x,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new x(l(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},b(v),u(v,c,"Generator"),v[i]=function(){return this},v.toString=function(){return"[object Generator]"},n.keys=function(n){var t=[];for(var e in n)t.push(e);return t.reverse(),function e(){for(;t.length;){var r=t.pop();if(r in n)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=S,E.prototype={constructor:E,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!n)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function e(e,r){return a.type="throw",a.arg=n,t.next=e,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),f},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),L(e),f}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var o=r.arg;L(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,e){return this.delegate={iterator:S(n),resultName:t,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},n}("object"===t(n)?n.exports:{});try{regeneratorRuntime=e}catch(n){Function("r","regeneratorRuntime = r")(e)}}).call(this,e(2)(n))},function(n,t){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},function(n,t,e){var r=e(4),o=e(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},function(n,t,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function c(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function u(n,t){for(var e={},r=[],o=0;o<n.length;o++){var i=n[o],u=t.base?i[0]+t.base:i[0],l=e[u]||0,s="".concat(u," ").concat(l);e[u]=l+1;var f=c(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:s,updater:m(p,t),references:1}),r.push(s)}return r}function l(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,f=(s=[],function(n,t){return s[n]=t,s.filter(Boolean).join("\n")});function p(n,t,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function d(n,t,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,g=0;function m(n,t){var e,r,o;if(t.singleton){var i=g++;e=h||(h=l(t)),r=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=l(t),r=d.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=u(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var o=c(e[r]);a[o].references--}for(var i=u(n,t),l=0;l<e.length;l++){var s=c(e[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}e=i}}}},function(n,t,e){(t=e(6)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),t.push([n.i,"html {\n    scroll-behavior: smooth;\n  }\n\nimg {\n    display: block;\n}\n\nbody, p{\n    font-family: 'Poppins', sans-serif;\n    margin: 0;\n    padding: 0;\n}\n\n.container {\n    padding-right: 25px;\n    padding-left: 25px;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n.highlight-container {\n    padding-right: 50px;\n    padding-left: 50px;\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 50px;\n}\n\n.highlight-container p {\n    text-align: center;\n}\n\n.btn-primary {\n    padding-left: 25px;\n    padding-right: 25px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    border-radius: 8px;\n    background: #ff7c57;\n    text-decoration: none;\n    color: #fff;\n}\n\n/* navbar */\n\n#drawer {\n    display: flex;\n    align-items: center;\n    background: #ff7c57;\n    justify-content: space-around;\n    flex-wrap: wrap;\n  }\n\n.navbar .logo {\n    font-weight: bold;\n    font-size: 32px;\n}\n\n.navbar a {\n    text-decoration: none;\n    font-size: 32px;\n    color: #fff;\n}\n\n.navbar a:hover{\n    color: #eee;\n}\n\n#drawer ul {\n    list-style: none;\n    display: flex;\n    justify-content: space-evenly;\n    width: 40%;\n  }\n\n.jumbotron {\n    width: 100%;\n}\n\n.jumbotron img {\n    position: relative;\n    height: 100vh;\n    width: 100%;\n    filter: sepia(8%) brightness(50%) contrast(103%);\n    -webkit-filter: sepia(8%) brightness(50%) contrast(103%);\n    -moz-filter: sepia(8%) brightness(50%) contrast(103%);\n}\n\n.jumbotron .description {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 55%;\n    left: 50%;\n    padding: 1.2em;\n    color: #fff;\n    align-items: center;\n    align-content: center;\n    transform: translate(-50%, -50%);\n\n}\n\n.jumbotron .description h1 {\n    font-size: 60pt;\n}\n\n.jumbotron .description p {\n    margin: 20px;\n    font-size: 14pt;\n}\n\n.section-title {\n    text-align: center;\n    margin: 25px;\n}\n\n.card {\n    position: relative;\n    border: 1px solid #eee;\n}\n\n.card .badge {\n    position: absolute;\n    top: 0;\n    padding: 10px;\n    background: #ff7c57;\n    color: #fff;\n}\n\n.card img {\n    width: 100%;\n    height: 300px;\n}\n\n.card-content{\n    padding: 25px;\n    \n}\n\n.card-content h4 {\n    margin: 15px 0 ;\n}\n\n.grid-wrapper {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    gap: 50px 25px;\n}\n\nfooter {\n    margin-top:20px;\n    text-align: center;\n    background: #ff7c57;\n    padding: 15px;\n    color: #eee;\n    font-size: 10pt;\n}\n\n#hamburger {\n    display: none;\n  }\n\n.active {\n    display: flex !important;\n}\n\n.span {\n    display: grid;\n    justify-items: center;\n}\n\n.social-media {\n    display: flex;\n    justify-content: space-evenly;\n    padding: 25px;\n    font-size: 55px;\n  }\n\n  .social-media a {\n    color: #fff;\n  }\n\n  footer {\n    font-size: 8pt;\n    background-color: #ff7c57;\n    text-align: center;\n    color: #fff;\n  }\n\n  footer p {\n    margin: 20px;\n  }\n  \n  .skip-link {\n    position: absolute;\n    top: -40px;\n    left: 0;\n    background-color: red;\n    color: white;\n    padding: 8px;\n    z-index: 100;\n }\n\n .skip-link:focus {\n    top: 0;\n }\n\n/* tablet */\n@media screen and (max-width:800px) {\n    \n    #hamburger {\n        display: flex;\n        width: 50%\n      }\n    \n      #drawer ul {\n        display: none;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n      }\n    \n      #drawer ul li {\n        display: list-item;\n        border-bottom: 1px solid #eee;\n        width: 100%;\n        text-align: left;\n        padding:5px;\n      }\n    \n      #drawer {\n        padding: 1em;\n        justify-content: space-around;\n        transition: transform 0.3s ease;\n        position: relative;\n      }\n    \n      #drawer .logo{\n        width: 50%;\n        align-items: center;\n      }\n\n\n    .jumbotron .description h1 {\n        font-size: 32pt;\n    }\n\n    .jumbotron .description p {\n        display: none;\n    }\n\n    .jumbotron .description {\n        align-items: center;\n        align-content: center;\n        padding: 5px;\n        top: 70%;\n    }\n\n    .grid-wrapper {\n        gap: 25px;\n    }\n\n}\n\n/* mobile */ \n@media screen and (max-width: 576px) {\n    /* .jumbotron .description h1 {\n        font-size: 25pt;\n    } */\n\n    .grid-wrapper {\n        grid-template-columns: 1fr;\n    }\n\n    .jumbotron .description {\n        align-items: center;\n        align-content: center;\n        padding: 5px;\n        width: 320px;\n    }\n    \n}",""]),n.exports=t},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}var a,c,u;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);r&&o[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),t.push(u))}},t}}]);