!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(5);var r=function(){function t(t,e){this.x=t,this.y=e}return t.prototype.getFromDirection=function(e){switch(e){case 0:return new t(this.x+1,this.y);case 90:return new t(this.x,this.y+1);case 180:return new t(this.x-1,this.y);case 270:return new t(this.x,this.y-1);default:throw new Error("Vector.getFromDirection: Wrong angle.")}},Object.defineProperty(t.prototype,"nearVectors",{get:function(){for(var e=[],n=0,r=-1,o=void 0;r<2;n++)o=n%3-1,0===r&&0===o||(e.push(new t(this.x+r,this.y+o)),1===o&&r++);return e},enumerable:!0,configurable:!0}),t}(),o=function(){return function(t,e,n,r){void 0===r&&(r=0);var o=this;this.amount=t,this.size=e,this.anchor=n,this.angle=r,this._getPosition=function(t,e){for(var n=[t],r=0;r<o.size-1;r++)n.push(n[r].getFromDirection(e));return n},this.position=this._getPosition(this.anchor,this.angle)}}(),i=function(){function t(t){this.ship=t,this._parents=[t]}return Object.defineProperty(t.prototype,"parents",{get:function(){return this._parents},enumerable:!0,configurable:!0}),t.prototype.addParent=function(t){return-1!==this._parents.indexOf(t)?this._parents:(this._parents.push(t),this._parents)},t.prototype.removeParent=function(t){var e=this._parents.indexOf(t);return-1!==e&&(this._parents.splice(e,1),!0)},t}(),a=function(){function t(t,e){void 0===t&&(t=10),void 0===e&&(e=10);var n=this;this.resetSpace=function(){n.space.splice(0),n.space.length=n.width*n.height},this.width=t,this.height=e,this.space=new Array(t*e)}return t.prototype.isInside=function(t){return t.x>=0&&t.x<this.width&&t.y>=0&&t.y<this.height},t.prototype.removeOutsideVectors=function(t){var e=this;return t.filter(function(t){return e.isInside(t)})},t.prototype.getValue=function(t){return this.space[t.x+this.width*t.y]},t.prototype.setValue=function(t,e){this.space[t.x+this.width*t.y]=e},t.prototype.getVector=function(t){return new r(t%this.width,Math.floor(t/this.width))},t.prototype.getVectorsWithValue=function(t){var e=this,n=[];return this.space.forEach(function(r,o){r===t&&n.push(e.getVector(o))}),n},t.prototype.isAbleToPlace=function(t){var e=this;return!t.some(function(t){var n=e.getValue(t);return!e.isInside(t)||n instanceof o||n instanceof i})},t.prototype.placeShip=function(t){var e=this;t.position.forEach(function(n){e.setValue(n,t),e.addGap(n,t)})},t.prototype.addGap=function(t,e){var n=this;this.removeOutsideVectors(t.nearVectors).forEach(function(t){var r=n.getValue(t);r instanceof o||(void 0===r?n.setValue(t,new i(e)):r.addParent(e))})},t}();function s(t){var e=document.createElement("DIV");e.className=t;for(var n=0;n<100;n++){var r=document.createElement("DIV");r.className=t+"__cell",e.appendChild(r)}return e}var c,u=(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}c(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),f=function(t){function e(n,r,o){var i=t.call(this,e.amount,e.size,r,o)||this;return i.name="battleship",i.id=n,i}return u(e,t),e.amount=1,e.size=4,e}(o);function l(t,e){var n=document.createElement("DIV");n.innerHTML=t.innerHTML,e.space.forEach(function(t,e){var r=n.children[e];t instanceof o?r.classList.add("_ship"):t instanceof i&&r.classList.add("_gap")}),t.innerHTML=n.innerHTML}var p=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),h=function(t){function e(n,r,o){var i=t.call(this,e.amount,e.size,r,o)||this;return i.name="submarine",i.id=n,i}return p(e,t),e.amount=4,e.size=1,e}(o),d=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),v=function(t){function e(n,r,o){var i=t.call(this,e.amount,e.size,r,o)||this;return i.name="cruiser",i.id=n,i}return d(e,t),e.amount=2,e.size=3,e}(o),m=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),y=function(t){function e(n,r,o){var i=t.call(this,e.amount,e.size,r,o)||this;return i.name="destroyer",i.id=n,i}return m(e,t),e.amount=3,e.size=2,e}(o);var b=document.querySelector(".help-message"),g=document.querySelector(".control"),x=document.querySelector(".battlefield"),w=new a(10,10),_=[];b.innerText="Choose ship!",x.innerHTML=s("battlefield").innerHTML,function(t,e,n,r,o){function i(t,e){for(var n=0,r=0,o=e.length;r<o;r++)e[r].size===t.size&&n++;return n}function a(t,n){var o=new t(0,e.getVector(n),function(){for(var t=document.getElementsByName("rotation"),e=0;e<t.length;e++)if(t[e].checked)return parseInt(t[e].value)}());if(!(i(o,r)<o.amount&&e.isAbleToPlace(o.position)))throw"You can't put this ship there. Chose ship again";r.push(o)}t.addEventListener("click",function(c){var u=c.target,p=u.dataset.decks;if(u.classList.contains("control__button"))return"reset"===p?(r.length=0,e.resetSpace(),n.innerHTML=s("battlefield").innerHTML,[].forEach.call(t.querySelectorAll("[disabled]"),function(t){t.disabled=!1}),void(o.innerText="Field reset. Choose ship by pressing buttons.")):(o.innerText="Place ship with "+p+" decks on field",void n.addEventListener("click",function t(s){var c=s.target;if(c.classList.contains("battlefield__cell")){var u,d=[].indexOf.call(c.parentElement.children,c);o.innerText="You've chosen "+d+" element as an anchor";try{switch(p){case"4":a(f,d);break;case"3":a(v,d);break;case"2":a(y,d);break;case"1":a(h,d);break;default:throw"Something went wrong!"}u=r[r.length-1],e.placeShip(u),function(t,e){t.amount<=i(t,e)&&(console.log("There aren't more ships with that class!"),document.querySelector('button[data-decks="'+t.size+'"').disabled=!0,o.innerText="You've placed all available "+t.size+"-decker ships")}(u,r),l(n,e),this.removeEventListener("click",t,!1)}catch(t){o.innerText=t}}},{once:!1}))})}(g,w,x,_,b),function(t,e,n,r,o){var i=[f,v,y,h];function a(t){for(var e=0,n=0,o=r.length;n<o;n++)r[n]instanceof t&&e++;return e}t.addEventListener("click",function(t){if("random-button"===t.target.id){for(var s=0,c=0,u=void 0,f=void 0,p=void 0;c<i.length;s++)for(u=!1,p=a(f=i[c]),a(f)>=f.amount&&c++;!u&&c<i.length&&p<f.amount;)h=f,d=Math.floor(100*Math.random()),v=90*Math.round(Math.random()),m=new h(0,e.getVector(d),v),u=!!e.isAbleToPlace(m.position)&&(r.push(m),e.placeShip(m),!0),console.log("this position is not available, next try");var h,d,v,m;l(n,e),o.innerText="Random position of ships"}})}(g,w,x,_,b)},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,u=0,f=[],l=n(1);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(b(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function h(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function d(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function m(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),y(e,t.attrs),d(t,e),e}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var a=u++;n=c||(c=m(e)),r=w.bind(null,n,a,!1),o=w.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),d(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&p(h(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var g,x=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function w(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,'* {\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n    font-family: sans-serif;\r\n}\r\nmain {\r\n    display: flex;\r\n\r\n}\r\n@media all and (max-width: 600px) {\r\n    main {\r\n        flex-direction: column;\r\n    }\r\n}\r\n.field {\r\n    display: grid;\r\n    grid-template-areas: ". letters"\r\n                        "numbers battlefield";\r\n    grid-template-rows: 25px auto;\r\n    grid-template-columns: 25px auto;\r\n    width: 275px;\r\n    width: fit-content;\r\n}\r\n.letters {\r\n    grid-area: letters;\r\n    display: grid;\r\n    grid-template: 25px / repeat(10, 25px);\r\n}\r\n.numbers {\r\n    grid-area: numbers;\r\n    display: grid;\r\n    grid-template: repeat(10, 25px) / 25px;\r\n}\r\n.battlefield {\r\n    grid-area: battlefield;\r\n    display: grid;\r\n    grid: repeat(10, 25px) / repeat(10, 25px);\r\n    border: thin solid black;\r\n}\r\n.battlefield__cell {\r\n    box-sizing: border-box;\r\n    border: thin dashed lightgray;\r\n}\r\n\r\n.control {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n}\r\n.control__button {\r\n    /*width: 50px;*/\r\n    /*height: 20px;*/\r\n}\r\n\r\n._ship {\r\n    background: #000;\r\n}\r\n._gap {\r\n    position: relative;\r\n}\r\n._gap::after {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    content: "\\B7";\r\n    font-size: 25px;\r\n    color: black;\r\n    line-height: 25px;\r\n    text-align: center;\r\n}',""])},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(t.exports=r.locals)}]);