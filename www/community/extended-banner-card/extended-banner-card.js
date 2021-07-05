/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,n,i){var r,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(s<3?r(o):s>3?r(e,n,o):r(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},i=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${i}--\x3e`,s=new RegExp(`${i}|${r}`);class o{constructor(t,e){this.parts=[],this.element=e;const n=[],r=[],o=document.createTreeWalker(e.content,133,null,!1);let c=0,u=-1,h=0;const{strings:p,values:{length:m}}=t;for(;h<m;){const t=o.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let i=0;for(let t=0;t<n;t++)a(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=p[h],n=d.exec(e)[2],i=n.toLowerCase()+"$lit$",r=t.getAttribute(i);t.removeAttribute(i);const o=r.split(s);this.parts.push({type:"attribute",index:u,name:n,strings:o}),h+=o.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,r=e.split(s),o=r.length-1;for(let e=0;e<o;e++){let n,s=r[e];if(""===s)n=l();else{const t=d.exec(s);null!==t&&a(t[2],"$lit$")&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),n=document.createTextNode(s)}i.insertBefore(n,t),this.parts.push({type:"node",index:++u})}""===r[o]?(i.insertBefore(l(),t),n.push(t)):t.data=r[o],h+=o}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&u!==c||(u++,e.insertBefore(l(),t)),c=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(n.push(t),u--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),h++}}else o.currentNode=r.pop()}for(const t of n)t.parentNode.removeChild(t)}}const a=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},c=t=>-1!==t.index,l=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(t,e){const{element:{content:n},parts:i}=t,r=document.createTreeWalker(n,133,null,!1);let s=p(i),o=i[s],a=-1,c=0;const l=[];let d=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-c,s=p(i,s),o=i[s]}l.forEach(t=>t.parentNode.removeChild(t))}const h=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,133,null,!1);for(;n.nextNode();)e++;return e},p=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(c(e))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,f=t=>"function"==typeof t&&m.has(t),g={},y={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class _{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],i=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let s,o=0,a=0,l=r.nextNode();for(;o<i.length;)if(s=i[o],c(s)){for(;a<s.index;)a++,"TEMPLATE"===l.nodeName&&(n.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=n.pop(),l=r.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,s.name,s.strings,this.options));o++}else this.__parts.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),b=` ${i} `;class w{constructor(t,e,n,i){this.strings=t,this.values=e,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let s=0;s<t;s++){const t=this.strings[s],o=t.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===t.indexOf("--\x3e",o+1);const a=d.exec(t);e+=null===a?t+(n?b:r):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==v&&(e=v.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const S=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class C{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new P(this)}_getValue(){const t=this.strings,e=t.length-1,n=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=n[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!x(t))return t}let i="";for(let r=0;r<e;r++){i+=t[r];const e=n[r];if(void 0!==e){const t=e.value;if(S(t)||!x(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===g||S(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=g,t(this)}this.value!==g&&this.committer.commit()}}class E{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(l()),this.endNode=t.appendChild(l())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=l()),t.__insert(this.endNode=l())}insertAfterPart(t){t.__insert(this.startNode=l()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}const t=this.__pendingValue;t!==g&&(S(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):x(t)?this.__commitIterable(t):t===y?(this.value=y,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof _&&this.value.template===e)this.value.update(t.values);else{const n=new _(e,t.processor,this.options),i=n._clone();n.update(t.values),this.__commitNode(i),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,i=0;for(const r of t)n=e[i],void 0===n&&(n=new E(this.options),e.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(r),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class N{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=g}}class T extends C{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new k(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class k extends P{}let M=!1;(()=>{try{const t={get capture(){return M=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class ${constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=A(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=g}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(M?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function D(t){let e=O.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},O.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const r=t.strings.join(i);return n=e.keyString.get(r),void 0===n&&(n=new o(t,t.getTemplateElement()),e.keyString.set(r,n)),e.stringsArray.set(t.strings,n),n}const O=new Map,z=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const H=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,n,i){const r=e[0];if("."===r){return new T(t,e.slice(1),n).parts}if("@"===r)return[new $(t,e.slice(1),i.eventContext)];if("?"===r)return[new N(t,e.slice(1),n)];return new C(t,e,n).parts}handleTextExpression(t){return new E(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const V=(t,...e)=>new w(t,e,"html",H)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,j=(t,e)=>`${t}--${e}`;let Y=!0;void 0===window.ShadyCSS?Y=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Y=!1);const U=t=>e=>{const n=j(e.type,t);let r=O.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},O.set(n,r));let s=r.stringsArray.get(e.strings);if(void 0!==s)return s;const a=e.strings.join(i);if(s=r.keyString.get(a),void 0===s){const n=e.getTemplateElement();Y&&window.ShadyCSS.prepareTemplateDom(n,t),s=new o(e,n),r.keyString.set(a,s)}return r.stringsArray.set(e.strings,s),s},R=["html","svg"],L=new Set,I=(t,e,n)=>{L.add(t);const i=n?n.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:s}=r;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(i,t);const o=document.createElement("style");for(let t=0;t<s;t++){const e=r[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{R.forEach(e=>{const n=O.get(j(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),u(t,n)})})})(t);const a=i.content;n?function(t,e,n=null){const{element:{content:i},parts:r}=t;if(null==n)return void i.appendChild(e);const s=document.createTreeWalker(i,133,null,!1);let o=p(r),a=0,c=-1;for(;s.nextNode();){c++;for(s.currentNode===n&&(a=h(e),n.parentNode.insertBefore(e,n));-1!==o&&r[o].index===c;){if(a>0){for(;-1!==o;)r[o].index+=a,o=p(r,o);return}o=p(r,o)}}}(n,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(n){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),u(n,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const q={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},F=(t,e)=>e!==t&&(e==e||t==t),B={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:F};class W extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const i=this._attributeNameForProperty(n,e);void 0!==i&&(this._attributeToPropertyMap.set(i,n),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=B){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdateInternal(t,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||B}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=F){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,i=e.converter||q,r="function"==typeof i?i:i.fromAttribute;return r?r(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,i=e.converter;return(i&&i.toAttribute||q.toAttribute)(t,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=B){const i=this.constructor,r=i._attributeNameForProperty(t,n);if(void 0!==r){const t=i._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,i=n._attributeToPropertyMap.get(t);if(void 0!==i){const t=n.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,n){let i=!0;if(void 0!==t){const r=this.constructor;n=n||r.getPropertyOptions(t),r._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}W.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const J=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(n){n.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Z(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):J(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const X=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol();class K{constructor(t,e){if(e!==G)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(X?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Q=(t,...e)=>{const n=e.reduce((e,n,i)=>e+(t=>{if(t instanceof K)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[i+1],t[0]);return new K(n,G)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const tt={};class et extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,n)=>t.reduceRight((t,n)=>Array.isArray(n)?e(n,t):(t.add(n),t),n),n=e(t,new Set),i=[];n.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!X){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new K(String(e),G)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?X?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==tt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return tt}}et.finalized=!0,et.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const r=i.scopeName,s=z.has(e),o=Y&&11===e.nodeType&&!!e.host,a=o&&!L.has(r),c=a?document.createDocumentFragment():e;if(((t,e,i)=>{let r=z.get(e);void 0===r&&(n(e,e.firstChild),z.set(e,r=new E(Object.assign({templateFactory:D},i))),r.appendInto(e)),r.setValue(t),r.commit()})(t,c,Object.assign({templateFactory:U(r)},i)),a){const t=z.get(c);z.delete(c);const i=t.value instanceof _?t.value.template:void 0;I(r,c,i),n(e,e.firstChild),e.appendChild(c),z.set(e,t)}!s&&o&&window.ShadyCSS.styleElement(e.host)};var nt=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,it="[^\\s]+",rt=/\[([^]*?)\]/gm;function st(t,e){for(var n=[],i=0,r=t.length;i<r;i++)n.push(t[i].substr(0,e));return n}var ot=function(t){return function(e,n){var i=n[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return i>-1?i:null}};function at(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var i=0,r=e;i<r.length;i++){var s=r[i];for(var o in s)t[o]=s[o]}return t}var ct=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],lt=["January","February","March","April","May","June","July","August","September","October","November","December"],dt=st(lt,3),ut={dayNamesShort:st(ct,3),dayNames:ct,monthNamesShort:dt,monthNames:lt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},ht=at({},ut),pt=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},mt={D:function(t){return String(t.getDate())},DD:function(t){return pt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return pt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return pt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return pt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return pt(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return pt(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return pt(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return pt(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return pt(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return pt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return pt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+pt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+pt(Math.floor(Math.abs(e)/60),2)+":"+pt(Math.abs(e)%60,2)}},ft=function(t){return+t-1},gt=[null,"[1-9]\\d?"],yt=[null,it],_t=["isPm",it,function(t,e){var n=t.toLowerCase();return n===e.amPm[0]?0:n===e.amPm[1]?1:null}],vt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var n=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?n:-n}return 0}],bt=(ot("monthNamesShort"),ot("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var wt=function(t,e,n){if(void 0===e&&(e=bt.default),void 0===n&&(n={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var i=[];e=(e=bt[e]||e).replace(rt,(function(t,e){return i.push(e),"@@@"}));var r=at(at({},ht),n);return(e=e.replace(nt,(function(e){return mt[e](t,r)}))).replace(/@@@/g,(function(){return i.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();var St=["closed","locked","off"],xt=function(t,e,n,i){i=i||{},n=null==n?{}:n;var r=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return r.detail=n,t.dispatchEvent(r),r},Ct=function(t){xt(window,"haptic",t)},Pt=function(t,e,n,i){if(i||(i={action:"more-info"}),!i.confirmation||i.confirmation.exemptions&&i.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(Ct("warning"),confirm(i.confirmation.text||"Are you sure you want to "+i.action+"?")))switch(i.action){case"more-info":(n.entity||n.camera_image)&&xt(t,"hass-more-info",{entityId:n.entity?n.entity:n.camera_image});break;case"navigate":i.navigation_path&&function(t,e,n){void 0===n&&(n=!1),n?history.replaceState(null,"",e):history.pushState(null,"",e),xt(window,"location-changed",{replace:n})}(0,i.navigation_path);break;case"url":i.url_path&&window.open(i.url_path);break;case"toggle":n.entity&&(function(t,e){(function(t,e,n){void 0===n&&(n=!0);var i,r=function(t){return t.substr(0,t.indexOf("."))}(e),s="group"===r?"homeassistant":r;switch(r){case"lock":i=n?"unlock":"lock";break;case"cover":i=n?"open_cover":"close_cover";break;default:i=n?"turn_on":"turn_off"}t.callService(s,i,{entity_id:e})})(t,e,St.includes(t.states[e].state))}(e,n.entity),Ct("success"));break;case"call-service":if(!i.service)return void Ct("failure");var r=i.service.split(".",2);e.callService(r[0],r[1],i.service_data),Ct("success");break;case"fire-dom-event":xt(t,"ll-custom",i)}};function Et(t){return void 0!==t&&"none"!==t.action}const Nt=/^(mdi|hass):/;function Tt(t){return"string"==typeof t&&t.match(Nt)}function kt(t){return"object"==typeof t?(e=t,n=t=>!1===t?null:t,Object.entries(e).reduce((t,[e,i])=>({...t,[e]:n(i,e)}),{})):{entity:t};var e,n}function Mt(t,e,n){if(!t||"#"!==t[0])return n;if(3===(t=t.substring(1)).length){const[e,n,i]=t;t=[e,e,n,n,i,i].join("")}if(6!==t.length)return n;const i=[parseInt(t.slice(0,2),16)/255,parseInt(t.slice(2,4),16)/255,parseInt(t.slice(4,6),16)/255],[r,s,o]=i.map(t=>t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4));return.2126*r+.7152*s+.0722*o>.179?n:e}const $t="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class At extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:$t?"100px":"50px",height:$t?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1});const n=t=>{let e,n;this.held=!1,t.touches?(e=t.touches[0].pageX,n=t.touches[0].pageY):(e=t.pageX,n=t.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(e,n),this.held=!0},this.holdTime)},i=n=>{n.preventDefault(),["touchend","touchcancel"].includes(n.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?xt(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===n.type&&n.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,xt(t,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,xt(t,"action",{action:"double_tap"})):xt(t,"action",{action:"tap"}))};t.addEventListener("touchstart",n,{passive:!0}),t.addEventListener("touchend",i),t.addEventListener("touchcancel",i),t.addEventListener("mousedown",n,{passive:!0}),t.addEventListener("click",i),t.addEventListener("keyup",t=>{13===t.keyCode&&i(t)})}startAnimation(t,e){Object.assign(this.style,{left:t+"px",top:e+"px",display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-ext-banner-card",At);const Dt=(t,e)=>{const n=(()=>{const t=document.body;if(t.querySelector("action-handler-ext-banner-card"))return t.querySelector("action-handler-ext-banner-card");const e=document.createElement("action-handler-ext-banner-card");return t.appendChild(e),e})();n&&n.bind(t,e)},Ot=(t=>(...e)=>{const n=t(...e);return m.set(n,!0),n})((t={})=>e=>{Dt(e.committer.element,t)});var zt={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},Ht={common:zt},Vt={version:"Версия",invalid_configuration:"Не верная конфигурация",show_warning:"Показывать предупреждения"},jt={common:Vt};const Yt={en:Object.freeze({__proto__:null,common:zt,default:Ht}),ru:Object.freeze({__proto__:null,common:Vt,default:jt})};function Ut(t,e="",n=""){const i=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let r;try{r=t.split(".").reduce((t,e)=>t[e],Yt[i])}catch(e){r=t.split(".").reduce((t,e)=>t[e],Yt.en)}return void 0===r&&(r=t.split(".").reduce((t,e)=>t[e],Yt.en)),""!==e&&""!==n&&(r=r.replace(e,n)),r}const Rt={"=":(t,e)=>e.includes(t),">":(t,e)=>t>e[0],"<":(t,e)=>t<e[0],"!=":(t,e)=>!e.includes(t)};function Lt(t,e){if(["string","number","boolean"].includes(typeof t))return Rt["="](e,[t]);if(Array.isArray(t)){const[n,...i]=t;return Rt.hasOwnProperty(n)?Rt[n](e,i):Rt["="](e,i)}throw new Error(`Couldn't find a valid matching strategy for '${t}'`)}window.customCards=window.customCards||[],window.customCards.push({type:"extended-banner-card",name:"Extended Banner Card",description:"Banner Card refactored and improved"});let It=class extends et{static getStubConfig(){return{}}getCardSize(){return 3}_service(t,e,n){return()=>this.hass.callService(t,e,{entity_id:n})}setConfig(t){if(!t)throw new Error(Ut("common.invalid_configuration"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0);let e=3;if("undefined"!==typeof t.row_size){if(t.row_size<1)throw new Error("row_size must be at least 1");e="auto"===t.row_size?t.entities.length:t.row_size}this.config=Object.assign(Object.assign({},t),{color:t.color||Mt(t.background,"var(--bc-heading-color-light)","var(--bc-heading-color-dark)"),rowSize:e,entities:(t.entities||[]).map(kt)})}_parseEntity(t){const e=this.hass.states[t.entity],n=e?e.attributes:{};let i,r;if(t.map_state&&e.state in t.map_state){const n=t.map_state[e.state],r=typeof n;"string"===r?i={value:n}:"object"===r&&(i={},Object.entries(n).forEach(([t,e])=>{i[t]=e}))}if(t.map_attribute&&"string"==typeof t.attribute&&n[t.attribute]in t.map_attribute){const e=n[t.attribute],i=t.map_attribute[e],s=typeof i;"string"===s?r={value:i}:"object"===s&&(r={},Object.entries(i).forEach(([t,e])=>{r[t]=e}))}const s={name:n.friendly_name,state:e?e.state:"",value:"string"==typeof t.attribute&&n.hasOwnProperty(t.attribute)?n[t.attribute]:e.state,unit:n.unit_of_measurement,attributes:n,domain:t.entity?t.entity.split(".")[0]:void 0};return n.hasOwnProperty("current_position")&&(s.state=n.current_position),Object.assign(Object.assign(Object.assign(Object.assign({},s),t),i),r)}shouldUpdate(t){let e;return e=!!this.config&&function(t,e,n){var i;if(e.has("config")||n)return!0;let r=!1;return null===(i=t.config)||void 0===i||i.entities.forEach(n=>{var i;if(n.entity){const s=e.get("hass");s&&s.states[n.entity]!==(null===(i=t.hass)||void 0===i?void 0:i.states[n.entity])&&(r=!0)}}),r}(this,t,!1),e}render(){return this.config.show_warning?this._showWarning(Ut("common.show_warning")):this.config.show_error?this._showError(Ut("common.show_error")):V`
      <ha-card style="background: ${this.config.background};">
        ${this._renderHeading()} ${this._renderEntities()}
      </ha-card>
    `}_renderHeading(){const t=this.config.header;if(!t)return V``;Array.isArray(t.title)||(t.title=[t.title]);let e="var(--bc-font-size-heading)",n="var(--bc-margin-heading)",i="300";return 1==t.mini&&(e="var(--bc-font-size-heading-mini)",n="var(--bc-margin-heading-mini)",i="400"),V`
      <h2 class="heading" style="color: ${this.config.color}; margin: ${n}; font-size: ${e}; font-weight: ${i}"
        @action=${e=>this._handleAction(e,t)}
        .actionHandler=${Ot({hasHold:Et(t.hold_action),hasDoubleClick:Et(t.double_tap_action)})}>
        ${t.title.map(t=>Tt(t)?V`
              <ha-icon class="heading-icon" .icon="${t}"></ha-icon>
            `:V` <span>${t}</span> `)}
      </h2>
    `}grid(t=1){return"full"===t||t>this.config.rowSize?`grid-column: span ${this.config.rowSize};`:`grid-column: span ${t};`}_renderEntities(){return this.entityValues=(this.config.entities||[]).filter(t=>function(t,e){if(!e.hasOwnProperty(t.entity))return!1;if(t.when){const{state:n,entity:i=t.entity,attributes:r}="string"==typeof t.when?{state:t.when}:t.when,s=e[i];if(void 0!==n&&!Lt(n,s.state))return!1;return Object.entries(r||{}).every(([t,e])=>Lt(e,s.attributes[t]))}return!0}(t,this.hass.states)).map(t=>this._parseEntity(t)),0===this.entityValues.length?V``:V`
      <div class="overlay-strip">
        <div
          class="entities"
          style="grid-template-columns: repeat(${this.config.rowSize}, 1fr);"
        >
          ${this.entityValues.map(t=>{if(t.error)return V`
                <div class="entity-state" style="${this.grid(t.size)}">
                  ${this._renderEntityName(t.error)}
                  <span class="entity-value error">${t.entity}</span>
                </div>
              `;if(!t.attribute){if(t.type&&t.type.startsWith("custom:")){const e=t.type.split(":")[1];let n="";return"calendar-card"===e&&(n="small-text"),this.renderCustomElement(e,t,n)}if(["light","switch","input_boolean"].indexOf(t.domain)>-1&&1==t.toggle)return this._log(t.entity+"should be rendered as toggle, because domain = "+t.domain+" and toggle = "+t.toggle),this._log(t,!0),this.renderAsToggle(t);if("cover"==t.domain)return this.renderDomainCover(t);if("media_player"==t.domain)return this.renderDomainMediaPlayer(t)}return this._renderDomainDefault(t)})}
        </div>
      </div>
    `}_renderDomainDefault(t){const e=this._renderValue(t,()=>{const e=t.color?"color: "+t.color:"";return V`<span style="${e}">${t.value} ${t.unit}</span>`});return V`
      <a class="entity-state" style="${this.grid(t.size)}"
        @action=${e=>this._handleAction(e,t)}
        .actionHandler=${Ot({hasHold:Et(t.hold_action),hasDoubleClick:Et(t.double_tap_action)})}>
        ${this._renderEntityName(t.name)}
        <span class="entity-value">${e}</span>
      </a>
    `}renderCustomElement(t,e,n=""){return customElements.get(t)?V`
      <div class="entity-state" style="${this.grid(e.size||"full")}"
        @action=${t=>this._handleAction(t,e)}
        .actionHandler=${Ot({hasHold:Et(e.hold_action),hasDoubleClick:Et(e.double_tap_action)})}>
        <div class="entity-value">
          <div class="entity-padded ${n}">
            ${function(t,e,n){const i=document.createElement(t);return i.setConfig&&i.setConfig(e),i.hass=n,i}(t,e,this.hass)}
          </div>
        </div>
      </div>
    `:(console.error(t+" doesn't exist"),V``)}renderAsToggle(t){const e=t.color?t.color:"var(--switch-checked-color)";return V`<div class="entity-state" style="${this.grid(t.size)}" @action=${e=>this._handleAction(e,{...t,tap_action:{action:"toggle"}})}
        .actionHandler=${Ot({hasHold:Et(t.hold_action),hasDoubleClick:Et(t.double_tap_action)})}>
        ${this._renderEntityName(t.name)}
        <span class="entity-value">
          <mwc-switch
            style="--mdc-theme-secondary: ${e};"
            ?checked=${"on"===t.state}
          >
          </mwc-switch>
        </span>
      </div>
    `}renderDomainMediaPlayer(t){const e="playing"===t.state,n=t.attributes,i=e?"media_pause":"media_play",r=[n.media_artist,n.media_title].join(" – ");return t.tap_action||(t.tap_action={action:"more-info"}),V`
      <div class="entity-state" style="${this.grid(t.size||"full")}">
        <div
          @action=${e=>this._handleAction(e,t)}
          .actionHandler=${Ot({hasHold:Et(t.hold_action),hasDoubleClick:Et(t.double_tap_action)})}>
            ${this._renderEntityName(t.name)}
          </div>
        <div class="entity-value">
          <div class="entity-state-left media-title"
          @action=${e=>this._handleAction(e,t)}
          .actionHandler=${Ot({hasHold:Et(t.hold_action),hasDoubleClick:Et(t.double_tap_action)})}>${r}</div>
          <div class="entity-state-right media-controls">
            <ha-icon-button
              icon="mdi:volume-minus"
              role="button"
              @click=${this._service(t.domain,"volume_down",t.entity)}
            ></ha-icon-button>
            <ha-icon-button
              icon="${e?"mdi:pause":"mdi:play"}"
              role="button"
              @click=${this._service(t.domain,i,t.entity)}
            ></ha-icon-button>
            <ha-icon-button
              icon="mdi:volume-plus"
              role="button"
              @click=${this._service(t.domain,"volume_up",t.entity)}
            ></ha-icon-button>
          </div>
        </div>
      </div>
    `}renderDomainCover(t){const e="closed"===t.state||0===t.state,n="open"===t.state||100===t.state;return V`
      <div class="entity-state" style="${this.grid(t.size)}">
        ${this._renderEntityName(t.name)}
        <span class="entity-value">
          <ha-icon-button
            ?disabled=${n}
            icon="hass:arrow-up"
            role="button"
            @click=${this._service("cover","open_cover",t.entity)}
          ></ha-icon-button>
          <ha-icon-button
            icon="hass:stop"
            role="button"
            @click=${this._service("cover","stop_cover",t.entity)}
          ></ha-icon-button>
          <ha-icon-button
            ?disabled=${e}
            icon="hass:arrow-down"
            role="button"
            @click=${this._service("cover","close_cover",t.entity)}
          ></ha-icon-button>
        </span>
      </div>
    `}_renderValue(t,e){if(t.icon||Tt(t.value)){const e=t.color?"color: "+t.color:"";return V`
        <ha-icon
          .icon="${t.icon||t.value}"
          style="${e}"
        ></ha-icon>
      `}return!0===t.image?V`
        <state-badge
          style="background-image: url(${t.value});"
        ></state-badge>
      `:e()}_renderEntityName(t){return V` <span class="entity-name">${t}</span> `}_handleAction(t,e){this._log("Handling the event: "+t.detail.action),this._log(e,!0),this.hass&&this.config&&t.detail.action&&function(t,e,n,i){var r;"double_tap"===i&&n.double_tap_action?r=n.double_tap_action:"hold"===i&&n.hold_action?r=n.hold_action:"tap"===i&&n.tap_action&&(r=n.tap_action),Pt(t,e,n,r)}(this,this.hass,e,t.detail.action)}_showWarning(t){return V`
      <hui-warning>${t}</hui-warning>
    `}_log(t,e=!1){var n;(null===(n=this.config)||void 0===n?void 0:n.debug)&&(e?console.log(t):console.log("[banner-card-ex] "+t))}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),V`
      ${e}
    `}static get styles(){return Q`
  :host {
    --bc-font-size-heading: var(--banner-card-heading-size, 3em);
    --bc-font-size-heading-mini: var(--banner-card-heading-size-mini, 2.3em);
    --bc-font-size-entity-value: var(--banner-card-entity-value-size, 1.5em);
    --bc-font-size-media-title: var(--banner-card-media-title-size, 0.9em);
    --bc-margin-heading: var(--banner-card-heading-margin, 1em);
    --bc-margin-heading-mini: var(--banner-card-heading--mini, 0.6em);
    --bc-spacing: var(--banner-card-spacing, 4px);
    --bc-button-size: var(--banner-card-button-size, 32px);
    --bc-heading-color-dark: var(
      --banner-card-heading-color-dark,
      var(--primary-text-color)
    );
    --bc-heading-color-light: var(--banner-card-heading-color-light, #fff);
  }
  ha-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: auto !important;
  }

  a {
    cursor: pointer;
  }

  ha-icon-button {
    width: var(--bc-button-size);
    height: var(--bc-button-size);
    padding: var(--bc-spacing);
  }

  .heading {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  ha-icon.heading-icon {
    --iron-icon-width: 1em;
    --iron-icon-height: 1em;
    margin: 0 var(--bc-spacing);
  }

  .overlay-strip {
    background: rgba(0, 0, 0, 0.3);
    overflow: hidden;
    width: 100%;
  }

  .entities {
    padding: calc(var(--bc-spacing) * 2) 0px;
    color: white;
    display: grid;
  }

  .entity-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: var(--bc-spacing);
    margin-bottom: var(--bc-spacing);
    box-shadow: -1px 0px 0 0 white;
    width: 100%;
  }

  .media-title {
    flex: 1 0;
    overflow: hidden;
    font-weight: 300;
    font-size: var(--bc-font-size-media-title);
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .media-controls {
    display: flex;
    flex: 0 0 calc(var(--bc-button-size) * 3);
  }

  .entity-padded {
    display: block;
    min-width: -webkit-fill-available;
    padding: 16px 16px 0 16px;
  }

  .small-text {
    font-size: 0.6em;
  }

  .entity-state.expand .entity-value {
    width: 100%;
  }

  .entity-state-left {
    margin-right: auto;
    margin-left: 16px;
  }

  .entity-state-right {
    margin-left: auto;
    margin-right: 16px;
  }

  .entity-name {
    font-weight: 700;
    white-space: nowrap;
    padding-top: calc(var(--bc-spacing) * 2);
    padding-bottom: calc(var(--bc-spacing) * 2);
  }

  .entity-value {
    display: flex;
    width: 100%;
    flex: 1 0;
    font-size: var(--bc-font-size-entity-value);
    align-items: center;
    justify-content: center;
  }

  .entity-value.error {
    display: inline-block;
    word-wrap: break-word;
    font-size: 16px;
    width: 90%;
  }

  .entity-value ha-icon {
    color: white;
  }

  mwc-button {
    --mdc-theme-primary: white;
  }
  mwc-switch {
    --mdc-theme-secondary: white;
  }
`}};var qt,Ft;t([Z({attribute:!1})],It.prototype,"hass",void 0),t([Z({attribute:!1,hasChanged:null==qt?void 0:qt.hasChanged})],It.prototype,"config",void 0),It=t([(Ft="extended-banner-card",t=>"function"==typeof t?((t,e)=>(window.customElements.define(t,e),e))(Ft,t):((t,e)=>{const{kind:n,elements:i}=e;return{kind:n,elements:i,finisher(e){window.customElements.define(t,e)}}})(Ft,t))],It);export{It as ExtendedBannerCard};
