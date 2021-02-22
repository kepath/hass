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
function e(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a
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
 */}const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},i=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${i}--\x3e`,r=new RegExp(`${i}|${o}`);class a{constructor(e,t){this.parts=[],this.element=t;const n=[],o=[],a=document.createTreeWalker(t.content,133,null,!1);let l=0,u=-1,h=0;const{strings:p,values:{length:f}}=e;for(;h<f;){const e=a.nextNode();if(null!==e){if(u++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let i=0;for(let e=0;e<n;e++)s(t[e].name,"$lit$")&&i++;for(;i-- >0;){const t=p[h],n=d.exec(t)[2],i=n.toLowerCase()+"$lit$",o=e.getAttribute(i);e.removeAttribute(i);const a=o.split(r);this.parts.push({type:"attribute",index:u,name:n,strings:a}),h+=a.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),a.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const i=e.parentNode,o=t.split(r),a=o.length-1;for(let t=0;t<a;t++){let n,r=o[t];if(""===r)n=c();else{const e=d.exec(r);null!==e&&s(e[2],"$lit$")&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(r)}i.insertBefore(n,e),this.parts.push({type:"node",index:++u})}""===o[a]?(i.insertBefore(c(),e),n.push(e)):e.data=o[a],h+=a}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&u!==l||(u++,t.insertBefore(c(),e)),l=u,this.parts.push({type:"node",index:u}),null===e.nextSibling?e.data="":(n.push(e),u--),h++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),h++}}else a.currentNode=o.pop()}for(const e of n)e.parentNode.removeChild(e)}}const s=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},l=e=>-1!==e.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(e,t){const{element:{content:n},parts:i}=e,o=document.createTreeWalker(n,133,null,!1);let r=p(i),a=i[r],s=-1,l=0;const c=[];let d=null;for(;o.nextNode();){s++;const e=o.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==a&&a.index===s;)a.index=null!==d?-1:a.index-l,r=p(i,r),a=i[r]}c.forEach((e=>e.parentNode.removeChild(e)))}const h=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},p=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(l(t))return n}return-1};
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
const f=new WeakMap,g=e=>"function"==typeof e&&f.has(e),m={},v={};
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
class b{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],i=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let r,a=0,s=0,c=o.nextNode();for(;a<i.length;)if(r=i[a],l(r)){for(;s<r.index;)s++,"TEMPLATE"===c.nodeName&&(n.push(c),o.currentNode=c.content),null===(c=o.nextNode())&&(o.currentNode=n.pop(),c=o.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,r.name,r.strings,this.options));a++}else this.__parts.push(void 0),a++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const _=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),y=` ${i} `;class w{constructor(e,t,n,i){this.strings=e,this.values=t,this.type=n,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],a=e.lastIndexOf("\x3c!--");n=(a>-1||n)&&-1===e.indexOf("--\x3e",a+1);const s=d.exec(e);t+=null===s?e+(n?y:o):e.substr(0,s.index)+s[1]+s[2]+"$lit$"+s[3]+i}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==_&&(t=_.createHTML(t)),e.innerHTML=t,e}}
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
 */const S=e=>null===e||!("object"==typeof e||"function"==typeof e),E=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class x{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new C(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=n[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!E(e))return e}let i="";for(let o=0;o<t;o++){i+=e[o];const t=n[o];if(void 0!==t){const e=t.value;if(S(e)||!E(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===m||S(e)&&e===this.value||(this.value=e,g(e)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const e=this.value;this.value=m,e(this)}this.value!==m&&this.committer.commit()}}class ${constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(c()),this.endNode=e.appendChild(c())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=c()),e.__insert(this.endNode=c())}insertAfterPart(e){e.__insert(this.startNode=c()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}const e=this.__pendingValue;e!==m&&(S(e)?e!==this.value&&this.__commitText(e):e instanceof w?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):E(e)?this.__commitIterable(e):e===v?(this.value=v,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof b&&this.value.template===t)this.value.update(e.values);else{const n=new b(t,e.processor,this.options),i=n._clone();n.update(e.values),this.__commitNode(i),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,i=0;for(const o of e)n=t[i],void 0===n&&(n=new $(this.options),t.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(t[i-1])),n.setValue(o),n.commit(),i++;i<t.length&&(t.length=i,this.clear(n&&n.endNode))}clear(e=this.startNode){n(this.startNode.parentNode,e.nextSibling,this.endNode)}}class T{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}if(this.__pendingValue===m)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=m}}class k extends x{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new O(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class O extends C{}let D=!1;(()=>{try{const e={get capture(){return D=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class M{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}if(this.__pendingValue===m)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=N(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=m}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const N=e=>e&&(D?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
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
 */;function P(e){let t=A.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},A.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join(i);return n=t.keyString.get(o),void 0===n&&(n=new a(e,e.getTemplateElement()),t.keyString.set(o,n)),t.stringsArray.set(e.strings,n),n}const A=new Map,V=new WeakMap;
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
 */const R=new
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
class{handleAttributeExpressions(e,t,n,i){const o=t[0];if("."===o){return new k(e,t.slice(1),n).parts}if("@"===o)return[new M(e,t.slice(1),i.eventContext)];if("?"===o)return[new T(e,t.slice(1),n)];return new x(e,t,n).parts}handleTextExpression(e){return new $(e)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const I=(e,...t)=>new w(e,t,"html",R)
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
 */,j=(e,t)=>`${e}--${t}`;let Y=!0;void 0===window.ShadyCSS?Y=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Y=!1);const H=e=>t=>{const n=j(t.type,e);let o=A.get(n);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},A.set(n,o));let r=o.stringsArray.get(t.strings);if(void 0!==r)return r;const s=t.strings.join(i);if(r=o.keyString.get(s),void 0===r){const n=t.getTemplateElement();Y&&window.ShadyCSS.prepareTemplateDom(n,e),r=new a(t,n),o.keyString.set(s,r)}return o.stringsArray.set(t.strings,r),r},z=["html","svg"],W=new Set,B=(e,t,n)=>{W.add(e);const i=n?n.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:r}=o;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,e);const a=document.createElement("style");for(let e=0;e<r;e++){const t=o[e];t.parentNode.removeChild(t),a.textContent+=t.textContent}(e=>{z.forEach((t=>{const n=A.get(j(t,e));void 0!==n&&n.keyString.forEach((e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{n.add(e)})),u(e,n)}))}))})(e);const s=i.content;n?function(e,t,n=null){const{element:{content:i},parts:o}=e;if(null==n)return void i.appendChild(t);const r=document.createTreeWalker(i,133,null,!1);let a=p(o),s=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===n&&(s=h(t),n.parentNode.insertBefore(t,n));-1!==a&&o[a].index===l;){if(s>0){for(;-1!==a;)o[a].index+=s,a=p(o,a);return}a=p(o,a)}}(n,a,s.firstChild):s.insertBefore(a,s.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const l=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(n){s.insertBefore(a,s.firstChild);const e=new Set;e.add(a),u(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const L={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},U=(e,t)=>t!==e&&(t==t||e==e),q={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:U};class F extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,n)=>{const i=this._attributeNameForProperty(n,t);void 0!==i&&(this._attributeToPropertyMap.set(i,n),e.push(i))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=q){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`,i=this.getPropertyDescriptor(e,n,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(i){const o=this[e];this[t]=i,this.requestUpdateInternal(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||q}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=U){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,i=t.converter||L,o="function"==typeof i?i:i.fromAttribute;return o?o(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,i=t.converter;return(i&&i.toAttribute||L.toAttribute)(e,n)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=q){const i=this.constructor,o=i._attributeNameForProperty(e,n);if(void 0!==o){const e=i._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,i=n._attributeToPropertyMap.get(e);if(void 0!==i){const e=n.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,n){let i=!0;if(void 0!==e){const o=this.constructor;n=n||o.getPropertyOptions(e),o._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}F.finalized=!0;
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
const X=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:i}=t;return{kind:n,elements:i,finisher(t){window.customElements.define(e,t)}}})(e,t),G=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function J(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):G(e,t)}function Z(e){return J({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class ee{constructor(e,t){if(t!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const te=(e,...t)=>{const n=t.reduce(((t,n,i)=>t+(e=>{if(e instanceof ee)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[i+1]),e[0]);return new ee(n,Q)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const ne={};class ie extends F{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,n)=>e.reduceRight(((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e)),n),n=t(e,new Set),i=[];n.forEach((e=>i.unshift(e))),this._styles=i}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!K){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return new ee(String(t),Q)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ne&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return ne}}ie.finalized=!0,ie.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const o=i.scopeName,r=V.has(t),a=Y&&11===t.nodeType&&!!t.host,s=a&&!W.has(o),l=s?document.createDocumentFragment():t;if(((e,t,i)=>{let o=V.get(t);void 0===o&&(n(t,t.firstChild),V.set(t,o=new $(Object.assign({templateFactory:P},i))),o.appendInto(t)),o.setValue(e),o.commit()})(e,l,Object.assign({templateFactory:H(o)},i)),s){const e=V.get(l);V.delete(l);const i=e.value instanceof b?e.value.template:void 0;B(o,l,i),n(t,t.firstChild),t.appendChild(l),V.set(t,e)}!r&&a&&window.ShadyCSS.styleElement(t.host)};var oe=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,re="[^\\s]+",ae=/\[([^]*?)\]/gm;function se(e,t){for(var n=[],i=0,o=e.length;i<o;i++)n.push(e[i].substr(0,t));return n}var le=function(e){return function(t,n){var i=n[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return i>-1?i:null}};function ce(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var i=0,o=t;i<o.length;i++){var r=o[i];for(var a in r)e[a]=r[a]}return e}var de=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ue=["January","February","March","April","May","June","July","August","September","October","November","December"],he=se(ue,3),pe={dayNamesShort:se(de,3),dayNames:de,monthNamesShort:he,monthNames:ue,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},fe=ce({},pe),ge=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},me={D:function(e){return String(e.getDate())},DD:function(e){return ge(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return ge(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return ge(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return ge(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return ge(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return ge(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return ge(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return ge(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return ge(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return ge(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return ge(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+ge(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+ge(Math.floor(Math.abs(t)/60),2)+":"+ge(Math.abs(t)%60,2)}},ve=function(e){return+e-1},be=[null,"[1-9]\\d?"],_e=[null,re],ye=["isPm",re,function(e,t){var n=e.toLowerCase();return n===t.amPm[0]?0:n===t.amPm[1]?1:null}],we=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var n=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?n:-n}return 0}],Se=(le("monthNamesShort"),le("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var Ee=function(e,t,n){if(void 0===t&&(t=Se.default),void 0===n&&(n={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var i=[];t=(t=Se[t]||t).replace(ae,(function(e,t){return i.push(t),"@@@"}));var o=ce(ce({},fe),n);return(t=t.replace(oe,(function(t){return me[t](e,o)}))).replace(/@@@/g,(function(){return i.shift()}))},xe=(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}(),function(e,t,n,i){i=i||{},n=null==n?{}:n;var o=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return o.detail=n,e.dispatchEvent(o),o}),Ce=new Set(["call-service","divider","section","weblink","cast","select"]),$e={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"};
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
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
const Te=new WeakMap,ke=(Oe=(e,t)=>n=>{const i=Te.get(n);if(Array.isArray(e)){if(Array.isArray(i)&&i.length===e.length&&e.every(((e,t)=>e===i[t])))return}else if(i===e&&(void 0!==e||Te.has(n)))return;n.setValue(t()),Te.set(n,Array.isArray(e)?Array.from(e):e)},(...e)=>{const t=Oe(...e);return f.set(t,!0),t});var Oe;
/**!
 * Sortable 1.13.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function De(e){return(De="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ne(){return(Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function Pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){Me(e,t,n[t])}))}return e}function Ae(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Ve(e){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(e)}var Re=Ve(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Ie=Ve(/Edge/i),je=Ve(/firefox/i),Ye=Ve(/safari/i)&&!Ve(/chrome/i)&&!Ve(/android/i),He=Ve(/iP(ad|od|hone)/i),ze=Ve(/chrome/i)&&Ve(/android/i),We={capture:!1,passive:!1};function Be(e,t,n){e.addEventListener(t,n,!Re&&We)}function Le(e,t,n){e.removeEventListener(t,n,!Re&&We)}function Ue(e,t){if(t){if(">"===t[0]&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch(e){return!1}return!1}}function qe(e){return e.host&&e!==document&&e.host.nodeType?e.host:e.parentNode}function Fe(e,t,n,i){if(e){n=n||document;do{if(null!=t&&(">"===t[0]?e.parentNode===n&&Ue(e,t):Ue(e,t))||i&&e===n)return e;if(e===n)break}while(e=qe(e))}return null}var Xe,Ge=/\s+/g;function Je(e,t,n){if(e&&t)if(e.classList)e.classList[n?"add":"remove"](t);else{var i=(" "+e.className+" ").replace(Ge," ").replace(" "+t+" "," ");e.className=(i+(n?" "+t:"")).replace(Ge," ")}}function Ze(e,t,n){var i=e&&e.style;if(i){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(n=e.currentStyle),void 0===t?n:n[t];t in i||-1!==t.indexOf("webkit")||(t="-webkit-"+t),i[t]=n+("string"==typeof n?"":"px")}}function Ke(e,t){var n="";if("string"==typeof e)n=e;else do{var i=Ze(e,"transform");i&&"none"!==i&&(n=i+" "+n)}while(!t&&(e=e.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(n)}function Qe(e,t,n){if(e){var i=e.getElementsByTagName(t),o=0,r=i.length;if(n)for(;o<r;o++)n(i[o],o);return i}return[]}function et(){var e=document.scrollingElement;return e||document.documentElement}function tt(e,t,n,i,o){if(e.getBoundingClientRect||e===window){var r,a,s,l,c,d,u;if(e!==window&&e.parentNode&&e!==et()?(a=(r=e.getBoundingClientRect()).top,s=r.left,l=r.bottom,c=r.right,d=r.height,u=r.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,u=window.innerWidth),(t||n)&&e!==window&&(o=o||e.parentNode,!Re))do{if(o&&o.getBoundingClientRect&&("none"!==Ze(o,"transform")||n&&"static"!==Ze(o,"position"))){var h=o.getBoundingClientRect();a-=h.top+parseInt(Ze(o,"border-top-width")),s-=h.left+parseInt(Ze(o,"border-left-width")),l=a+r.height,c=s+r.width;break}}while(o=o.parentNode);if(i&&e!==window){var p=Ke(o||e),f=p&&p.a,g=p&&p.d;p&&(l=(a/=g)+(d/=g),c=(s/=f)+(u/=f))}return{top:a,left:s,bottom:l,right:c,width:u,height:d}}}function nt(e,t,n){for(var i=st(e,!0),o=tt(e)[t];i;){var r=tt(i)[n];if(!("top"===n||"left"===n?o>=r:o<=r))return i;if(i===et())break;i=st(i,!1)}return!1}function it(e,t,n){for(var i=0,o=0,r=e.children;o<r.length;){if("none"!==r[o].style.display&&r[o]!==ln.ghost&&r[o]!==ln.dragged&&Fe(r[o],n.draggable,e,!1)){if(i===t)return r[o];i++}o++}return null}function ot(e,t){for(var n=e.lastElementChild;n&&(n===ln.ghost||"none"===Ze(n,"display")||t&&!Ue(n,t));)n=n.previousElementSibling;return n||null}function rt(e,t){var n=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)"TEMPLATE"===e.nodeName.toUpperCase()||e===ln.clone||t&&!Ue(e,t)||n++;return n}function at(e){var t=0,n=0,i=et();if(e)do{var o=Ke(e),r=o.a,a=o.d;t+=e.scrollLeft*r,n+=e.scrollTop*a}while(e!==i&&(e=e.parentNode));return[t,n]}function st(e,t){if(!e||!e.getBoundingClientRect)return et();var n=e,i=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var o=Ze(n);if(n.clientWidth<n.scrollWidth&&("auto"==o.overflowX||"scroll"==o.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==o.overflowY||"scroll"==o.overflowY)){if(!n.getBoundingClientRect||n===document.body)return et();if(i||t)return n;i=!0}}}while(n=n.parentNode);return et()}function lt(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}function ct(e){var t=window.Polymer,n=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):n?n(e).clone(!0)[0]:e.cloneNode(!0)}var dt="Sortable"+(new Date).getTime();function ut(){var e,t=[];return{captureAnimationState:function(){(t=[],this.options.animation)&&[].slice.call(this.el.children).forEach((function(e){if("none"!==Ze(e,"display")&&e!==ln.ghost){t.push({target:e,rect:tt(e)});var n=Pe({},t[t.length-1].rect);if(e.thisAnimationDuration){var i=Ke(e,!0);i&&(n.top-=i.f,n.left-=i.e)}e.fromRect=n}}))},addAnimationState:function(e){t.push(e)},removeAnimationState:function(e){t.splice(function(e,t){for(var n in e)if(e.hasOwnProperty(n))for(var i in t)if(t.hasOwnProperty(i)&&t[i]===e[n][i])return Number(n);return-1}(t,{target:e}),1)},animateAll:function(n){var i=this;if(!this.options.animation)return clearTimeout(e),void("function"==typeof n&&n());var o=!1,r=0;t.forEach((function(e){var t=0,n=e.target,a=n.fromRect,s=tt(n),l=n.prevFromRect,c=n.prevToRect,d=e.rect,u=Ke(n,!0);u&&(s.top-=u.f,s.left-=u.e),n.toRect=s,n.thisAnimationDuration&&lt(l,s)&&!lt(a,s)&&(d.top-s.top)/(d.left-s.left)==(a.top-s.top)/(a.left-s.left)&&(t=function(e,t,n,i){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-n.top,2)+Math.pow(t.left-n.left,2))*i.animation}(d,l,c,i.options)),lt(s,a)||(n.prevFromRect=a,n.prevToRect=s,t||(t=i.options.animation),i.animate(n,d,s,t)),t&&(o=!0,r=Math.max(r,t),clearTimeout(n.animationResetTimer),n.animationResetTimer=setTimeout((function(){n.animationTime=0,n.prevFromRect=null,n.fromRect=null,n.prevToRect=null,n.thisAnimationDuration=null}),t),n.thisAnimationDuration=t)})),clearTimeout(e),o?e=setTimeout((function(){"function"==typeof n&&n()}),r):"function"==typeof n&&n(),t=[]},animate:function(e,t,n,i){if(i){Ze(e,"transition",""),Ze(e,"transform","");var o=Ke(this.el),r=o&&o.a,a=o&&o.d,s=(t.left-n.left)/(r||1),l=(t.top-n.top)/(a||1);e.animatingX=!!s,e.animatingY=!!l,Ze(e,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(e){return e.offsetWidth}(e),Ze(e,"transition","transform "+i+"ms"+(this.options.easing?" "+this.options.easing:"")),Ze(e,"transform","translate3d(0,0,0)"),"number"==typeof e.animated&&clearTimeout(e.animated),e.animated=setTimeout((function(){Ze(e,"transition",""),Ze(e,"transform",""),e.animated=!1,e.animatingX=!1,e.animatingY=!1}),i)}}}}var ht=[],pt={initializeByDefault:!0},ft={mount:function(e){for(var t in pt)pt.hasOwnProperty(t)&&!(t in e)&&(e[t]=pt[t]);ht.forEach((function(t){if(t.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")})),ht.push(e)},pluginEvent:function(e,t,n){var i=this;this.eventCanceled=!1,n.cancel=function(){i.eventCanceled=!0};var o=e+"Global";ht.forEach((function(i){t[i.pluginName]&&(t[i.pluginName][o]&&t[i.pluginName][o](Pe({sortable:t},n)),t.options[i.pluginName]&&t[i.pluginName][e]&&t[i.pluginName][e](Pe({sortable:t},n)))}))},initializePlugins:function(e,t,n,i){for(var o in ht.forEach((function(i){var o=i.pluginName;if(e.options[o]||i.initializeByDefault){var r=new i(e,t,e.options);r.sortable=e,r.options=e.options,e[o]=r,Ne(n,r.defaults)}})),e.options)if(e.options.hasOwnProperty(o)){var r=this.modifyOption(e,o,e.options[o]);void 0!==r&&(e.options[o]=r)}},getEventProperties:function(e,t){var n={};return ht.forEach((function(i){"function"==typeof i.eventProperties&&Ne(n,i.eventProperties.call(t[i.pluginName],e))})),n},modifyOption:function(e,t,n){var i;return ht.forEach((function(o){e[o.pluginName]&&o.optionListeners&&"function"==typeof o.optionListeners[t]&&(i=o.optionListeners[t].call(e[o.pluginName],n))})),i}};var gt=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.evt,o=Ae(n,["evt"]);ft.pluginEvent.bind(ln)(e,t,Pe({dragEl:vt,parentEl:bt,ghostEl:_t,rootEl:yt,nextEl:wt,lastDownEl:St,cloneEl:Et,cloneHidden:xt,dragStarted:It,putSortable:Dt,activeSortable:ln.active,originalEvent:i,oldIndex:Ct,oldDraggableIndex:Tt,newIndex:$t,newDraggableIndex:kt,hideGhostForTarget:on,unhideGhostForTarget:rn,cloneNowHidden:function(){xt=!0},cloneNowShown:function(){xt=!1},dispatchSortableEvent:function(e){mt({sortable:t,name:e,originalEvent:i})}},o))};function mt(e){!function(e){var t=e.sortable,n=e.rootEl,i=e.name,o=e.targetEl,r=e.cloneEl,a=e.toEl,s=e.fromEl,l=e.oldIndex,c=e.newIndex,d=e.oldDraggableIndex,u=e.newDraggableIndex,h=e.originalEvent,p=e.putSortable,f=e.extraEventProperties;if(t=t||n&&n[dt]){var g,m=t.options,v="on"+i.charAt(0).toUpperCase()+i.substr(1);!window.CustomEvent||Re||Ie?(g=document.createEvent("Event")).initEvent(i,!0,!0):g=new CustomEvent(i,{bubbles:!0,cancelable:!0}),g.to=a||n,g.from=s||n,g.item=o||n,g.clone=r,g.oldIndex=l,g.newIndex=c,g.oldDraggableIndex=d,g.newDraggableIndex=u,g.originalEvent=h,g.pullMode=p?p.lastPutMode:void 0;var b=Pe({},f,ft.getEventProperties(i,t));for(var _ in b)g[_]=b[_];n&&n.dispatchEvent(g),m[v]&&m[v].call(t,g)}}(Pe({putSortable:Dt,cloneEl:Et,targetEl:vt,rootEl:yt,oldIndex:Ct,oldDraggableIndex:Tt,newIndex:$t,newDraggableIndex:kt},e))}var vt,bt,_t,yt,wt,St,Et,xt,Ct,$t,Tt,kt,Ot,Dt,Mt,Nt,Pt,At,Vt,Rt,It,jt,Yt,Ht,zt,Wt=!1,Bt=!1,Lt=[],Ut=!1,qt=!1,Ft=[],Xt=!1,Gt=[],Jt="undefined"!=typeof document,Zt=He,Kt=Ie||Re?"cssFloat":"float",Qt=Jt&&!ze&&!He&&"draggable"in document.createElement("div"),en=function(){if(Jt){if(Re)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto","auto"===e.style.pointerEvents}}(),tn=function(e,t){var n=Ze(e),i=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),o=it(e,0,t),r=it(e,1,t),a=o&&Ze(o),s=r&&Ze(r),l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+tt(o).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+tt(r).width;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(o&&a.float&&"none"!==a.float){var d="left"===a.float?"left":"right";return!r||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}return o&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||l>=i&&"none"===n[Kt]||r&&"none"===n[Kt]&&l+c>i)?"vertical":"horizontal"},nn=function(e){function t(e,n){return function(i,o,r,a){var s=i.options.group.name&&o.options.group.name&&i.options.group.name===o.options.group.name;if(null==e&&(n||s))return!0;if(null==e||!1===e)return!1;if(n&&"clone"===e)return e;if("function"==typeof e)return t(e(i,o,r,a),n)(i,o,r,a);var l=(n?i:o).options.group.name;return!0===e||"string"==typeof e&&e===l||e.join&&e.indexOf(l)>-1}}var n={},i=e.group;i&&"object"==De(i)||(i={name:i}),n.name=i.name,n.checkPull=t(i.pull,!0),n.checkPut=t(i.put),n.revertClone=i.revertClone,e.group=n},on=function(){!en&&_t&&Ze(_t,"display","none")},rn=function(){!en&&_t&&Ze(_t,"display","")};Jt&&document.addEventListener("click",(function(e){if(Bt)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),Bt=!1,!1}),!0);var an=function(e){if(vt){e=e.touches?e.touches[0]:e;var t=(o=e.clientX,r=e.clientY,Lt.some((function(e){if(!ot(e)){var t=tt(e),n=e[dt].options.emptyInsertThreshold,i=o>=t.left-n&&o<=t.right+n,s=r>=t.top-n&&r<=t.bottom+n;return n&&i&&s?a=e:void 0}})),a);if(t){var n={};for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i]);n.target=n.rootEl=t,n.preventDefault=void 0,n.stopPropagation=void 0,t[dt]._onDragOver(n)}}var o,r,a},sn=function(e){vt&&vt.parentNode[dt]._isOutsideThisEl(e.target)};function ln(e,t){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=Ne({},t),e[dt]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return tn(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(e,t){e.setData("Text",t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==ln.supportPointer&&"PointerEvent"in window&&!Ye,emptyInsertThreshold:5};for(var i in ft.initializePlugins(this,e,n),n)!(i in t)&&(t[i]=n[i]);for(var o in nn(t),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!t.forceFallback&&Qt,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?Be(e,"pointerdown",this._onTapStart):(Be(e,"mousedown",this._onTapStart),Be(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(Be(e,"dragover",this),Be(e,"dragenter",this)),Lt.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),Ne(this,ut())}function cn(e,t,n,i,o,r,a,s){var l,c,d=e[dt],u=d.options.onMove;return!window.CustomEvent||Re||Ie?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=t,l.from=e,l.dragged=n,l.draggedRect=i,l.related=o||t,l.relatedRect=r||tt(t),l.willInsertAfter=s,l.originalEvent=a,e.dispatchEvent(l),u&&(c=u.call(d,l,a)),c}function dn(e){e.draggable=!1}function un(){Xt=!1}function hn(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,n=t.length,i=0;n--;)i+=t.charCodeAt(n);return i.toString(36)}function pn(e){return setTimeout(e,0)}function fn(e){return clearTimeout(e)}ln.prototype={constructor:ln,_isOutsideThisEl:function(e){this.el.contains(e)||e===this.el||(jt=null)},_getDirection:function(e,t){return"function"==typeof this.options.direction?this.options.direction.call(this,e,t,vt):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,n=this.el,i=this.options,o=i.preventOnFilter,r=e.type,a=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,s=(a||e).target,l=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s,c=i.filter;if(function(e){Gt.length=0;var t=e.getElementsByTagName("input"),n=t.length;for(;n--;){var i=t[n];i.checked&&Gt.push(i)}}(n),!vt&&!(/mousedown|pointerdown/.test(r)&&0!==e.button||i.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!Ye||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=Fe(s,i.draggable,n,!1))&&s.animated||St===s)){if(Ct=rt(s),Tt=rt(s,i.draggable),"function"==typeof c){if(c.call(this,e,s,this))return mt({sortable:t,rootEl:l,name:"filter",targetEl:s,toEl:n,fromEl:n}),gt("filter",t,{evt:e}),void(o&&e.cancelable&&e.preventDefault())}else if(c&&(c=c.split(",").some((function(i){if(i=Fe(l,i.trim(),n,!1))return mt({sortable:t,rootEl:i,name:"filter",targetEl:s,fromEl:n,toEl:n}),gt("filter",t,{evt:e}),!0}))))return void(o&&e.cancelable&&e.preventDefault());i.handle&&!Fe(l,i.handle,n,!1)||this._prepareDragStart(e,a,s)}}},_prepareDragStart:function(e,t,n){var i,o=this,r=o.el,a=o.options,s=r.ownerDocument;if(n&&!vt&&n.parentNode===r){var l=tt(n);if(yt=r,bt=(vt=n).parentNode,wt=vt.nextSibling,St=n,Ot=a.group,ln.dragged=vt,Mt={target:vt,clientX:(t||e).clientX,clientY:(t||e).clientY},Vt=Mt.clientX-l.left,Rt=Mt.clientY-l.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,vt.style["will-change"]="all",i=function(){gt("delayEnded",o,{evt:e}),ln.eventCanceled?o._onDrop():(o._disableDelayedDragEvents(),!je&&o.nativeDraggable&&(vt.draggable=!0),o._triggerDragStart(e,t),mt({sortable:o,name:"choose",originalEvent:e}),Je(vt,a.chosenClass,!0))},a.ignore.split(",").forEach((function(e){Qe(vt,e.trim(),dn)})),Be(s,"dragover",an),Be(s,"mousemove",an),Be(s,"touchmove",an),Be(s,"mouseup",o._onDrop),Be(s,"touchend",o._onDrop),Be(s,"touchcancel",o._onDrop),je&&this.nativeDraggable&&(this.options.touchStartThreshold=4,vt.draggable=!0),gt("delayStart",this,{evt:e}),!a.delay||a.delayOnTouchOnly&&!t||this.nativeDraggable&&(Ie||Re))i();else{if(ln.eventCanceled)return void this._onDrop();Be(s,"mouseup",o._disableDelayedDrag),Be(s,"touchend",o._disableDelayedDrag),Be(s,"touchcancel",o._disableDelayedDrag),Be(s,"mousemove",o._delayedDragTouchMoveHandler),Be(s,"touchmove",o._delayedDragTouchMoveHandler),a.supportPointer&&Be(s,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(i,a.delay)}}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){vt&&dn(vt),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;Le(e,"mouseup",this._disableDelayedDrag),Le(e,"touchend",this._disableDelayedDrag),Le(e,"touchcancel",this._disableDelayedDrag),Le(e,"mousemove",this._delayedDragTouchMoveHandler),Le(e,"touchmove",this._delayedDragTouchMoveHandler),Le(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||"touch"==e.pointerType&&e,!this.nativeDraggable||t?this.options.supportPointer?Be(document,"pointermove",this._onTouchMove):Be(document,t?"touchmove":"mousemove",this._onTouchMove):(Be(vt,"dragend",this),Be(yt,"dragstart",this._onDragStart));try{document.selection?pn((function(){document.selection.empty()})):window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(e,t){if(Wt=!1,yt&&vt){gt("dragStarted",this,{evt:t}),this.nativeDraggable&&Be(document,"dragover",sn);var n=this.options;!e&&Je(vt,n.dragClass,!1),Je(vt,n.ghostClass,!0),ln.active=this,e&&this._appendGhost(),mt({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(Nt){this._lastX=Nt.clientX,this._lastY=Nt.clientY,on();for(var e=document.elementFromPoint(Nt.clientX,Nt.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(Nt.clientX,Nt.clientY))!==t;)t=e;if(vt.parentNode[dt]._isOutsideThisEl(e),t)do{if(t[dt]){if(t[dt]._onDragOver({clientX:Nt.clientX,clientY:Nt.clientY,target:e,rootEl:t})&&!this.options.dragoverBubble)break}e=t}while(t=t.parentNode);rn()}},_onTouchMove:function(e){if(Mt){var t=this.options,n=t.fallbackTolerance,i=t.fallbackOffset,o=e.touches?e.touches[0]:e,r=_t&&Ke(_t,!0),a=_t&&r&&r.a,s=_t&&r&&r.d,l=Zt&&zt&&at(zt),c=(o.clientX-Mt.clientX+i.x)/(a||1)+(l?l[0]-Ft[0]:0)/(a||1),d=(o.clientY-Mt.clientY+i.y)/(s||1)+(l?l[1]-Ft[1]:0)/(s||1);if(!ln.active&&!Wt){if(n&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<n)return;this._onDragStart(e,!0)}if(_t){r?(r.e+=c-(Pt||0),r.f+=d-(At||0)):r={a:1,b:0,c:0,d:1,e:c,f:d};var u="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");Ze(_t,"webkitTransform",u),Ze(_t,"mozTransform",u),Ze(_t,"msTransform",u),Ze(_t,"transform",u),Pt=c,At=d,Nt=o}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!_t){var e=this.options.fallbackOnBody?document.body:yt,t=tt(vt,!0,Zt,!0,e),n=this.options;if(Zt){for(zt=e;"static"===Ze(zt,"position")&&"none"===Ze(zt,"transform")&&zt!==document;)zt=zt.parentNode;zt!==document.body&&zt!==document.documentElement?(zt===document&&(zt=et()),t.top+=zt.scrollTop,t.left+=zt.scrollLeft):zt=et(),Ft=at(zt)}Je(_t=vt.cloneNode(!0),n.ghostClass,!1),Je(_t,n.fallbackClass,!0),Je(_t,n.dragClass,!0),Ze(_t,"transition",""),Ze(_t,"transform",""),Ze(_t,"box-sizing","border-box"),Ze(_t,"margin",0),Ze(_t,"top",t.top),Ze(_t,"left",t.left),Ze(_t,"width",t.width),Ze(_t,"height",t.height),Ze(_t,"opacity","0.8"),Ze(_t,"position",Zt?"absolute":"fixed"),Ze(_t,"zIndex","100000"),Ze(_t,"pointerEvents","none"),ln.ghost=_t,e.appendChild(_t),Ze(_t,"transform-origin",Vt/parseInt(_t.style.width)*100+"% "+Rt/parseInt(_t.style.height)*100+"%")}},_onDragStart:function(e,t){var n=this,i=e.dataTransfer,o=n.options;gt("dragStart",this,{evt:e}),ln.eventCanceled?this._onDrop():(gt("setupClone",this),ln.eventCanceled||((Et=ct(vt)).draggable=!1,Et.style["will-change"]="",this._hideClone(),Je(Et,this.options.chosenClass,!1),ln.clone=Et),n.cloneId=pn((function(){gt("clone",n),ln.eventCanceled||(n.options.removeCloneOnHide||yt.insertBefore(Et,vt),n._hideClone(),mt({sortable:n,name:"clone"}))})),!t&&Je(vt,o.dragClass,!0),t?(Bt=!0,n._loopId=setInterval(n._emulateDragOver,50)):(Le(document,"mouseup",n._onDrop),Le(document,"touchend",n._onDrop),Le(document,"touchcancel",n._onDrop),i&&(i.effectAllowed="move",o.setData&&o.setData.call(n,i,vt)),Be(document,"drop",n),Ze(vt,"transform","translateZ(0)")),Wt=!0,n._dragStartId=pn(n._dragStarted.bind(n,t,e)),Be(document,"selectstart",n),It=!0,Ye&&Ze(document.body,"user-select","none"))},_onDragOver:function(e){var t,n,i,o,r=this.el,a=e.target,s=this.options,l=s.group,c=ln.active,d=Ot===l,u=s.sort,h=Dt||c,p=this,f=!1;if(!Xt){if(void 0!==e.preventDefault&&e.cancelable&&e.preventDefault(),a=Fe(a,s.draggable,r,!0),k("dragOver"),ln.eventCanceled)return f;if(vt.contains(e.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return D(!1);if(Bt=!1,c&&!s.disabled&&(d?u||(i=!yt.contains(vt)):Dt===this||(this.lastPutMode=Ot.checkPull(this,c,vt,e))&&l.checkPut(this,c,vt,e))){if(o="vertical"===this._getDirection(e,a),t=tt(vt),k("dragOverValid"),ln.eventCanceled)return f;if(i)return bt=yt,O(),this._hideClone(),k("revert"),ln.eventCanceled||(wt?yt.insertBefore(vt,wt):yt.appendChild(vt)),D(!0);var g=ot(r,s.draggable);if(!g||function(e,t,n){var i=tt(ot(n.el,n.options.draggable)),o=10;return t?e.clientX>i.right+o||e.clientX<=i.right&&e.clientY>i.bottom&&e.clientX>=i.left:e.clientX>i.right&&e.clientY>i.top||e.clientX<=i.right&&e.clientY>i.bottom+o}(e,o,this)&&!g.animated){if(g===vt)return D(!1);if(g&&r===e.target&&(a=g),a&&(n=tt(a)),!1!==cn(yt,r,vt,t,a,n,e,!!a))return O(),r.appendChild(vt),bt=r,M(),D(!0)}else if(a.parentNode===r){n=tt(a);var m,v,b,_=vt.parentNode!==r,y=!function(e,t,n){var i=n?e.left:e.top,o=n?e.right:e.bottom,r=n?e.width:e.height,a=n?t.left:t.top,s=n?t.right:t.bottom,l=n?t.width:t.height;return i===a||o===s||i+r/2===a+l/2}(vt.animated&&vt.toRect||t,a.animated&&a.toRect||n,o),w=o?"top":"left",S=nt(a,"top","top")||nt(vt,"top","top"),E=S?S.scrollTop:void 0;if(jt!==a&&(v=n[w],Ut=!1,qt=!y&&s.invertSwap||_),0!==(m=function(e,t,n,i,o,r,a,s){var l=i?e.clientY:e.clientX,c=i?n.height:n.width,d=i?n.top:n.left,u=i?n.bottom:n.right,h=!1;if(!a)if(s&&Ht<c*o){if(!Ut&&(1===Yt?l>d+c*r/2:l<u-c*r/2)&&(Ut=!0),Ut)h=!0;else if(1===Yt?l<d+Ht:l>u-Ht)return-Yt}else if(l>d+c*(1-o)/2&&l<u-c*(1-o)/2)return function(e){return rt(vt)<rt(e)?1:-1}(t);if((h=h||a)&&(l<d+c*r/2||l>u-c*r/2))return l>d+c/2?1:-1;return 0}(e,a,n,o,y?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,qt,jt===a))){var x=rt(vt);do{x-=m,b=bt.children[x]}while(b&&("none"===Ze(b,"display")||b===_t))}if(0===m||b===a)return D(!1);jt=a,Yt=m;var C=a.nextElementSibling,$=!1,T=cn(yt,r,vt,t,a,n,e,$=1===m);if(!1!==T)return 1!==T&&-1!==T||($=1===T),Xt=!0,setTimeout(un,30),O(),$&&!C?r.appendChild(vt):a.parentNode.insertBefore(vt,$?C:a),S&&function(e,t,n){e.scrollLeft+=t,e.scrollTop+=n}(S,0,E-S.scrollTop),bt=vt.parentNode,void 0===v||qt||(Ht=Math.abs(v-tt(a)[w])),M(),D(!0)}if(r.contains(vt))return D(!1)}return!1}function k(s,l){gt(s,p,Pe({evt:e,isOwner:d,axis:o?"vertical":"horizontal",revert:i,dragRect:t,targetRect:n,canSort:u,fromSortable:h,target:a,completed:D,onMove:function(n,i){return cn(yt,r,vt,t,n,tt(n),e,i)},changed:M},l))}function O(){k("dragOverAnimationCapture"),p.captureAnimationState(),p!==h&&h.captureAnimationState()}function D(t){return k("dragOverCompleted",{insertion:t}),t&&(d?c._hideClone():c._showClone(p),p!==h&&(Je(vt,Dt?Dt.options.ghostClass:c.options.ghostClass,!1),Je(vt,s.ghostClass,!0)),Dt!==p&&p!==ln.active?Dt=p:p===ln.active&&Dt&&(Dt=null),h===p&&(p._ignoreWhileAnimating=a),p.animateAll((function(){k("dragOverAnimationComplete"),p._ignoreWhileAnimating=null})),p!==h&&(h.animateAll(),h._ignoreWhileAnimating=null)),(a===vt&&!vt.animated||a===r&&!a.animated)&&(jt=null),s.dragoverBubble||e.rootEl||a===document||(vt.parentNode[dt]._isOutsideThisEl(e.target),!t&&an(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),f=!0}function M(){$t=rt(vt),kt=rt(vt,s.draggable),mt({sortable:p,name:"change",toEl:r,newIndex:$t,newDraggableIndex:kt,originalEvent:e})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){Le(document,"mousemove",this._onTouchMove),Le(document,"touchmove",this._onTouchMove),Le(document,"pointermove",this._onTouchMove),Le(document,"dragover",an),Le(document,"mousemove",an),Le(document,"touchmove",an)},_offUpEvents:function(){var e=this.el.ownerDocument;Le(e,"mouseup",this._onDrop),Le(e,"touchend",this._onDrop),Le(e,"pointerup",this._onDrop),Le(e,"touchcancel",this._onDrop),Le(document,"selectstart",this)},_onDrop:function(e){var t=this.el,n=this.options;$t=rt(vt),kt=rt(vt,n.draggable),gt("drop",this,{evt:e}),bt=vt&&vt.parentNode,$t=rt(vt),kt=rt(vt,n.draggable),ln.eventCanceled||(Wt=!1,qt=!1,Ut=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),fn(this.cloneId),fn(this._dragStartId),this.nativeDraggable&&(Le(document,"drop",this),Le(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Ye&&Ze(document.body,"user-select",""),Ze(vt,"transform",""),e&&(It&&(e.cancelable&&e.preventDefault(),!n.dropBubble&&e.stopPropagation()),_t&&_t.parentNode&&_t.parentNode.removeChild(_t),(yt===bt||Dt&&"clone"!==Dt.lastPutMode)&&Et&&Et.parentNode&&Et.parentNode.removeChild(Et),vt&&(this.nativeDraggable&&Le(vt,"dragend",this),dn(vt),vt.style["will-change"]="",It&&!Wt&&Je(vt,Dt?Dt.options.ghostClass:this.options.ghostClass,!1),Je(vt,this.options.chosenClass,!1),mt({sortable:this,name:"unchoose",toEl:bt,newIndex:null,newDraggableIndex:null,originalEvent:e}),yt!==bt?($t>=0&&(mt({rootEl:bt,name:"add",toEl:bt,fromEl:yt,originalEvent:e}),mt({sortable:this,name:"remove",toEl:bt,originalEvent:e}),mt({rootEl:bt,name:"sort",toEl:bt,fromEl:yt,originalEvent:e}),mt({sortable:this,name:"sort",toEl:bt,originalEvent:e})),Dt&&Dt.save()):$t!==Ct&&$t>=0&&(mt({sortable:this,name:"update",toEl:bt,originalEvent:e}),mt({sortable:this,name:"sort",toEl:bt,originalEvent:e})),ln.active&&(null!=$t&&-1!==$t||($t=Ct,kt=Tt),mt({sortable:this,name:"end",toEl:bt,originalEvent:e}),this.save())))),this._nulling()},_nulling:function(){gt("nulling",this),yt=vt=bt=_t=wt=Et=St=xt=Mt=Nt=It=$t=kt=Ct=Tt=jt=Yt=Dt=Ot=ln.dragged=ln.ghost=ln.clone=ln.active=null,Gt.forEach((function(e){e.checked=!0})),Gt.length=Pt=At=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":vt&&(this._onDragOver(e),function(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move");e.cancelable&&e.preventDefault()}(e));break;case"selectstart":e.preventDefault()}},toArray:function(){for(var e,t=[],n=this.el.children,i=0,o=n.length,r=this.options;i<o;i++)Fe(e=n[i],r.draggable,this.el,!1)&&t.push(e.getAttribute(r.dataIdAttr)||hn(e));return t},sort:function(e,t){var n={},i=this.el;this.toArray().forEach((function(e,t){var o=i.children[t];Fe(o,this.options.draggable,i,!1)&&(n[e]=o)}),this),t&&this.captureAnimationState(),e.forEach((function(e){n[e]&&(i.removeChild(n[e]),i.appendChild(n[e]))})),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return Fe(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var n=this.options;if(void 0===t)return n[e];var i=ft.modifyOption(this,e,t);n[e]=void 0!==i?i:t,"group"===e&&nn(n)},destroy:function(){gt("destroy",this);var e=this.el;e[dt]=null,Le(e,"mousedown",this._onTapStart),Le(e,"touchstart",this._onTapStart),Le(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(Le(e,"dragover",this),Le(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),(function(e){e.removeAttribute("draggable")})),this._onDrop(),this._disableDelayedDragEvents(),Lt.splice(Lt.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!xt){if(gt("hideClone",this),ln.eventCanceled)return;Ze(Et,"display","none"),this.options.removeCloneOnHide&&Et.parentNode&&Et.parentNode.removeChild(Et),xt=!0}},_showClone:function(e){if("clone"===e.lastPutMode){if(xt){if(gt("showClone",this),ln.eventCanceled)return;vt.parentNode!=yt||this.options.group.revertClone?wt?yt.insertBefore(Et,wt):yt.appendChild(Et):yt.insertBefore(Et,vt),this.options.group.revertClone&&this.animate(vt,Et),Ze(Et,"display",""),xt=!1}}else this._hideClone()}},Jt&&Be(document,"touchmove",(function(e){(ln.active||Wt)&&e.cancelable&&e.preventDefault()})),ln.utils={on:Be,off:Le,css:Ze,find:Qe,is:function(e,t){return!!Fe(e,t,e,!1)},extend:function(e,t){if(e&&t)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},throttle:function(e,t){return function(){if(!Xe){var n=arguments,i=this;1===n.length?e.call(i,n[0]):e.apply(i,n),Xe=setTimeout((function(){Xe=void 0}),t)}}},closest:Fe,toggleClass:Je,clone:ct,index:rt,nextTick:pn,cancelNextTick:fn,detectDirection:tn,getChild:it},ln.get=function(e){return e[dt]},ln.mount=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t[0].constructor===Array&&(t=t[0]),t.forEach((function(e){if(!e.prototype||!e.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(e));e.utils&&(ln.utils=Pe({},ln.utils,e.utils)),ft.mount(e)}))},ln.create=function(e,t){return new ln(e,t)},ln.version="1.13.0";var gn=function(e){var t=e.originalEvent,n=e.putSortable,i=e.dragEl,o=e.activeSortable,r=e.dispatchSortableEvent,a=e.hideGhostForTarget,s=e.unhideGhostForTarget;if(t){var l=n||o;a();var c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,d=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(d)&&(r("spill"),this.onSpill({dragEl:i,putSortable:n}))}};function mn(){}function vn(){}mn.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,n=e.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var i=it(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(t,i):this.sortable.el.appendChild(t),this.sortable.animateAll(),n&&n.animateAll()},drop:gn},Ne(mn,{pluginName:"revertOnSpill"}),vn.prototype={onSpill:function(e){var t=e.dragEl,n=e.putSortable||this.sortable;n.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),n.animateAll()},drop:gn},Ne(vn,{pluginName:"removeOnSpill"});var bn={version:"Version",description:"A Lovelace Card for visualizing power distributions.",invalid_configuration:"Invalid configuration",show_warning:"Show Warning"},_n={actions:{add:"Add",edit:"Edit",remove:"Remove",save:"Save"},optional:"Optional",required:"Required",settings:{animation:"Animation",attribute:"Attribute",background_color:"Background Color",bigger:"Bigger",calc_excluded:"Excluded from Calculations",center:"Center",color:"Color",decimals:"Decimals","display-abs":"Display Absolute Value",entities:"Entities",entity:"Entity",equal:"Equal","hide-arrows":"Hide Arrows",icon:"Icon","invert-value":"Invert Value",name:"Name",preset:"Preset",smaller:"Smaller",title:"Title",unit_of_display:"Unit of Display"}},yn={common:bn,editor:_n},wn={version:"Version",description:"Eine Karte zur Visualizierung von Stromverteilungen",invalid_configuration:"Ungültige Konfiguration",show_warning:"Warnung"},Sn={actions:{add:"Hinzufügen",edit:"Bearbeiten",remove:"Entfernen",save:"Speichern"},optional:"Optional",required:"Erforderlich",settings:{animation:"Animation",attribute:"Attribut",background_color:"Hintergrundfarbe",bigger:"Größer ",calc_excluded:"Von Rechnungen ausgeschlossen",center:"Mittelbereich",color:"Farbe",decimals:"Dezimalstellen","display-abs":"Absolute Wertanzeige",entities:"Entities",entity:"Element",equal:"Gleich","hide-arrows":"Pfeile Verstecken",icon:"Symbol","invert-value":"Invertierter Wert",name:"Name",preset:"Vorlagen",smaller:"Kleiner",title:"Titel",unit_of_display:"Angezeigte Einheit"}},En={common:wn,editor:Sn};const xn={en:Object.freeze({__proto__:null,common:bn,editor:_n,default:yn}),de:Object.freeze({__proto__:null,common:wn,editor:Sn,default:En})};function Cn(e,t="",n=""){const i=(localStorage.getItem("selectedLanguage")||navigator.language.split("-")[0]||"en").replace(/['"]+/g,"").replace("-","_");let o;try{o=e.split(".").reduce(((e,t)=>e[t]),xn[i])}catch(t){o=e.split(".").reduce(((e,t)=>e[t]),xn.en)}return void 0===o&&(o=e.split(".").reduce(((e,t)=>e[t]),xn.en)),""!==t&&""!==n&&(o=o.replace(t,n)),o}const $n=["battery","car_charger","consumer","grid","home","hydro","pool","producer","solar","wind"],Tn={battery:{consumer:!0,icon:"mdi:battery-outline",name:"battery",producer:!0},car_charger:{consumer:!0,icon:"mdi:car-electric",name:"car"},consumer:{consumer:!0,icon:"mdi:lightbulb",name:"consumer"},grid:{icon:"mdi:transmission-tower",name:"grid"},home:{consumer:!0,icon:"mdi:home-assistant",name:"home"},hydro:{icon:"mdi:hydro-power",name:"hydro",producer:!0},pool:{consumer:!0,icon:"mdi:pool",name:"pool"},producer:{icon:"mdi:lightning-bolt-outline",name:"producer",producer:!0},solar:{icon:"mdi:solar-power",name:"solar",producer:!0},wind:{icon:"mdi:wind-turbine",name:"wind",producer:!0}},kn={decimals:2,display_abs:!0,name:"",unit_of_display:"W"},On={type:"",title:void 0,animation:"flash",entities:[],center:{type:"none"}},Dn=["none","flash","slide"],Mn=["none","card","bars"],Nn=["autarky","ratio",""];let Pn=class extends ie{constructor(){super(...arguments),this._subElementEditor=void 0,this._renderEmptySortable=!1,this._attached=!1}setConfig(e){this._config=e}async firstUpdated(){await this.loadCardHelpers();try{await this._helpers.createCardElement({type:"calendar",entities:["calendar.does_not_exist"]})}catch(e){}await customElements.get("hui-calendar-card").getConfigElement()}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}render(){var e,t,n,i,o,r,a,s,l,c;return this.hass?this._subElementEditor?this._renderSubElementEditor():I`
      <div class="card-config">
        <paper-input
          .label="${Cn("editor.settings.title")} (${Cn("editor.optional")})"
          .value=${(null===(e=this._config)||void 0===e?void 0:e.title)||""}
          .configValue=${"title"}
          @value-changed=${this._valueChanged}
        ></paper-input>
        <paper-dropdown-menu
          label="${Cn("editor.settings.animation")}"
          .configValue=${"animation"}
          @value-changed=${this._valueChanged}
        >
          <paper-listbox slot="dropdown-content" .selected=${Dn.indexOf((null===(t=this._config)||void 0===t?void 0:t.animation)||"flash")}>
            ${Dn.map((e=>I`<paper-item>${e}</paper-item>`))}
          </paper-listbox>
        </paper-dropdown-menu>
        <br />
        <div class="entity">
          <paper-dropdown-menu
            label="${Cn("editor.settings.center")}"
            .configValue=${"type"}
            @value-changed=${this._centerChanged}
          >
            <paper-listbox slot="dropdown-content" .selected="${Mn.indexOf((null===(i=null===(n=this._config)||void 0===n?void 0:n.center)||void 0===i?void 0:i.type)||"none")}">
              ${Mn.map((e=>I`<paper-item>${e}</paper-item>`))}
            </paper-listbox>
          </paper-dropdown-menu>
          ${"bars"==(null===(r=null===(o=this._config)||void 0===o?void 0:o.center)||void 0===r?void 0:r.type)||"card"==(null===(s=null===(a=this._config)||void 0===a?void 0:a.center)||void 0===s?void 0:s.type)?I`<mwc-icon-button
                aria-label=${Cn("editor.actions.edit")}
                class="edit-icon"
                .value=${null===(c=null===(l=this._config)||void 0===l?void 0:l.center)||void 0===c?void 0:c.type}
                @click="${this._editCenter}"
              >
                <ha-icon icon="mdi:pencil"></ha-icon>
              </mwc-icon-button>`:""}
        </div>
        ${this._renderEntitiesEditor()}
      </div>
    `:I``}_centerChanged(e){if(this._config&&this.hass){if(e.target){const t=e.target;t.configValue&&(this._config=Object.assign(Object.assign({},this._config),{center:Object.assign(Object.assign({},this._config.center),{[t.configValue]:void 0!==t.checked?t.checked:t.value})}))}xe(this,"config-changed",{config:this._config})}}_editCenter(e){if(e.currentTarget){const t=e.currentTarget;this._subElementEditor={type:t.value,element:this._config.center.content}}}_renderSubElementEditor(){var e;const t=[I`<div class="header">
        <div class="back-title">
          <mwc-icon-button @click=${this._goBack}>
            <ha-icon icon="mdi:arrow-left"></ha-icon>
          </mwc-icon-button>
        </div>
      </div>`];switch(null===(e=this._subElementEditor)||void 0===e?void 0:e.type){case"entity":t.push(this._entityEditor());break;case"bars":t.push(this._barEditor());break;case"card":t.push(this._cardEditor())}return I`${t}`}_goBack(){var e;this._subElementEditor=void 0,null===(e=this._sortable)||void 0===e||e.destroy(),this._sortable=void 0,this._sortable=this._createSortable()}_itemEntityChanged(e){var t;if(!e.target)return;const n=e.target;if(!n.configValue)return;const i=[...this._config.entities],o=n.index||(null===(t=this._subElementEditor)||void 0===t?void 0:t.index)||0;i[o]=Object.assign(Object.assign({},i[o]),{[n.configValue]:null!=n.checked?n.checked:n.value}),this._config=Object.assign(Object.assign({},this._config),{entities:i}),xe(this,"config-changed",{config:this._config})}_icon_colorChanged(e){var t;if(!e.target)return;const n=e.target;if(!n.configValue)return;const i=Object.assign(Object.assign({},this._config.entities[(null===(t=this._subElementEditor)||void 0===t?void 0:t.index)||0].icon_color),{[n.configValue]:n.value});this._itemEntityChanged({target:{configValue:"icon_color",value:i}})}_entityEditor(){var e,t,n,i,o;const r=(null===(e=this._subElementEditor)||void 0===e?void 0:e.element)||kn,a=Object.keys(Object.assign({},null===(t=this.hass)||void 0===t?void 0:t.states[r.entity||0].attributes))||[];return I`
      <div class="side-by-side">
        <paper-input
          .label="${Cn("editor.settings.name")} (${Cn("editor.optional")})"
          .value=${r.name||""}
          .configValue=${"name"}
          @value-changed=${this._itemEntityChanged}
        ></paper-input>
        <ha-icon-input
          .label="${Cn("editor.settings.icon")}  (${Cn("editor.optional")})"
          .value=${r.icon}
          .configValue=${"icon"}
          @value-changed=${this._itemEntityChanged}
        ></ha-icon-input>
      </div>
      <div class="side-by-side">
        <ha-entity-picker
          label="${Cn("editor.settings.entity")} (${Cn("editor.required")})"
          allow-custom-entity
          hideClearIcon
          .hass=${this.hass}
          .configValue=${"entity"}
          .value=${r.entity}
          @value-changed=${this._itemEntityChanged}
        ></ha-entity-picker>
        <paper-dropdown-menu
          label="${Cn("editor.settings.attribute")} (${Cn("editor.optional")})"
          .configValue=${"attribute"}
          @value-changed=${this._itemEntityChanged}
        >
          <paper-listbox slot="dropdown-content" .selected=${a.indexOf(r.attribute||"")}>
            ${a.map((e=>I`<paper-item>${e}</paper-item>`))}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
      <br />
      <h3>Value Settings</h3>
      <div class="side-by-side">
        <div class="checkbox">
          <input
            type="checkbox"
            id="invert-value"
            .checked="${r.invert_value||!1}"
            .configValue=${"invert_value"}
            @change=${this._itemEntityChanged}
          />
          <label for="invert-value"> ${Cn("editor.settings.invert-value")}</label>
        </div>
        <div class="checkbox">
          <input
            type="checkbox"
            id="display-abs"
            .checked="${0!=r.display_abs}"
            .configValue=${"display_abs"}
            @change=${this._itemEntityChanged}
          />
          <label for="display-abs"> ${Cn("editor.settings.display-abs")} </label>
        </div>
        <div class="checkbox">
          <input
            type="checkbox"
            id="hide-arrows"
            .checked="${r.hide_arrows||!1}"
            .configValue=${"hide_arrows"}
            @change=${this._itemEntityChanged}
          />
          <label for="invert-value"> ${Cn("editor.settings.hide-arrows")}</label>
        </div>
      </div>
      <div class="side-by-side">
        <paper-input
          auto-validate
          pattern="[0-9]"
          .label="${Cn("editor.settings.decimals")}"
          .value=${r.decimals||""}
          .configValue=${"decimals"}
          @value-changed=${this._itemEntityChanged}
        ></paper-input>
        <paper-input
          .label="${Cn("editor.settings.unit_of_display")}"
          .value=${r.unit_of_display||""}
          .configValue=${"unit_of_display"}
          @value-changed=${this._itemEntityChanged}
        ></paper-input>
      </div>
      <h3>Preset Settings</h3>
      <div class="side-by-side">
        <paper-dropdown-menu
          label="${Cn("editor.settings.preset")}"
          .configValue=${"preset"}
          @value-changed=${this._itemEntityChanged}
        >
          <paper-listbox slot="dropdown-content" .selected=${$n.indexOf(r.preset||$n[0])}>
            ${$n.map((e=>I`<paper-item>${e}</paper-item>`))}
          </paper-listbox>
        </paper-dropdown-menu>
        <div class="checkbox">
          <input
            type="checkbox"
            id="calc_excluded"
            .checked="${r.calc_excluded}"
            .configValue=${"calc_excluded"}
            @change=${this._itemEntityChanged}
          />
          <label for="calc_excluded"> ${Cn("editor.settings.calc_excluded")} </label>
        </div>
      </div>
      <h3>Color Settings</h3>
      <table>
        <tr>
          <th>Element</th>
          <th>&gt; 0</th>
          <th>= 0</th>
          <th>&lt; 0</th>
        </tr>
        <tr>
          <th>icon</th>
          <td>
            <paper-input
              .label="${Cn("editor.settings.bigger")}"
              .value=${(null===(n=r.icon_color)||void 0===n?void 0:n.bigger)||""}
              .configValue=${"bigger"}
              @value-changed=${this._icon_colorChanged}
            ></paper-input>
          </td>
          <td>
            <paper-input
              .label="${Cn("editor.settings.equal")}"
              .value=${(null===(i=r.icon_color)||void 0===i?void 0:i.equal)||""}
              .configValue=${"equal"}
              @value-changed=${this._icon_colorChanged}
            ></paper-input>
          </td>
          <td>
            <paper-input
              .label="${Cn("editor.settings.smaller")}"
              .value=${(null===(o=r.icon_color)||void 0===o?void 0:o.smaller)||""}
              .configValue=${"smaller"}
              @value-changed=${this._icon_colorChanged}
            ></paper-input>
          </td>
        </tr>
      </table>
    `}_barChanged(e){var t;if(!e.target)return;const n=e.target;if(!n.configValue)return;let i;if("content"==n.configValue)i=n.value;else{i=[...this._config.center.content];const e=n.index||(null===(t=this._subElementEditor)||void 0===t?void 0:t.index)||0;i[e]=Object.assign(Object.assign({},i[e]),{[n.configValue]:null!=n.checked?n.checked:n.value})}this._config=Object.assign(Object.assign({},this._config),{center:{type:"bars",content:i}}),xe(this,"config-changed",{config:this._config})}_removeBar(e){var t;const n=(null===(t=e.currentTarget)||void 0===t?void 0:t.index)||0,i=[...this._config.center.content];i.splice(n,1),this._barChanged({target:{configValue:"content",value:i}})}async _addBar(){const e=Object.assign({},{name:"Name",preset:"custom"}),t=[...this._config.center.content||[],e];this._barChanged({target:{configValue:"content",value:t}})}_barEditor(){const e=[];return this._config.center.content&&this._config.center.content.forEach(((t,n)=>e.push(I`
        <div class="bar-editor">
          <h3 style="margin-bottom:6px;">Bar ${n+1}
          <mwc-icon-button
            aria-label=${Cn("editor.actions.remove")}
            class="remove-icon"
            .index=${n}
            @click=${this._removeBar}
            >
            <ha-icon icon="mdi:close"></ha-icon>
          </mwc-icon-button>
          </h4>
          <div class="side-by-side">
            <paper-input
              .label="${Cn("editor.settings.name")} (${Cn("editor.optional")})"
              .value=${t.name||""}
              .configValue=${"name"}
              @value-changed=${this._barChanged}
              .index=${n}
            ></paper-input>
            <ha-entity-picker
              label="${Cn("editor.settings.entity")}"
              allow-custom-entity
              hideClearIcon
              .hass=${this.hass}
              .configValue=${"entity"}
              .value=${t.entity}
              @value-changed=${this._barChanged}
              .index=${n}
            ></ha-entity-picker>
          </div>
          <div class="side-by-side">
            <div class="checkbox">
              <input
                type="checkbox"
                id="invert-value"
                .checked="${t.invert_value||!1}"
                .configValue=${"invert_value"}
                @change=${this._barChanged}
                .index=${n}
              />
              <label for="invert-value"> ${Cn("editor.settings.invert-value")}</label>
            </div>
            <div>
            <paper-dropdown-menu
              label="${Cn("editor.settings.preset")}"
              .configValue=${"preset"}
              @value-changed=${this._barChanged}
              .index=${n}
            >
              <paper-listbox slot="dropdown-content" .selected=${Nn.indexOf(t.preset||"")}>
                ${Nn.map((e=>I`<paper-item>${e}</paper-item>`))}
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
          </div>
          <div class="side-by-side">
            <paper-input
              .label="${Cn("editor.settings.color")}"
              .value=${t.bar_color||""}
              .configValue=${"bar_color"}
              @value-changed=${this._barChanged}
              .index=${n}
            ></paper-input>
            <paper-input
              .label="${Cn("editor.settings.background_color")}"
              .value=${t.bar_bg_color||""}
              .configValue=${"bar_bg_color"}
              @value-changed=${this._barChanged}
              .index=${n}
            ></paper-input>
          </div>
        </div>
        <br/>
      `))),e.push(I`
      <mwc-icon-button aria-label=${Cn("editor.actions.add")} class="add-icon" @click="${this._addBar}">
        <ha-icon icon="mdi:plus-circle-outline"></ha-icon>
      </mwc-icon-button>
    `),I`${e.map((e=>I`${e}`))}`}_cardEditor(){return I`
      Sadly you cannot edit cards from the visual editor yet.
      <p />
      Check out the
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/JonahKr/power-distribution-card#cards-"
        >Readme</a
      >
      to check out the latest and best way to add it.
    `}_renderEntitiesEditor(){return I`
      <h3>
        ${Cn("editor.settings.entities")} (${Cn("editor.required")})
      </h3>
      <div class="entities">
          ${ke([this._config.entities,this._renderEmptySortable],(()=>this._renderEmptySortable?"":this._config.entities.map(((e,t)=>I`
                    <div class="entity">
                      <ha-icon class="handle" icon="mdi:drag"></ha-icon>

                      <ha-entity-picker
                        label="Entity - ${e.preset}"
                        allow-custom-entity
                        hideClearIcon
                        .hass=${this.hass}
                        .configValue=${"entity"}
                        .value=${e.entity}
                        .index=${t}
                        @value-changed=${this._itemEntityChanged}
                      ></ha-entity-picker>

                      <mwc-icon-button
                        aria-label=${Cn("editor.actions.remove")}
                        class="remove-icon"
                        .index=${t}
                        @click=${this._removeRow}
                      >
                        <ha-icon icon="mdi:close"></ha-icon>
                      </mwc-icon-button>

                      <mwc-icon-button
                        aria-label=${Cn("editor.actions.edit")}
                        class="edit-icon"
                        .index=${t}
                        @click="${this._editRow}"
                      >
                        <ha-icon icon="mdi:pencil"></ha-icon>
                      </mwc-icon-button>
                    </div>
                  `))))}
        </div>
      </div>
      <div class="add-item">
        <paper-dropdown-menu
          label="${Cn("editor.settings.preset")}"
          name="preset"
          class="add-preset"
          >
          <paper-listbox slot="dropdown-content" .selected=1>
            ${$n.map((e=>I`<paper-item>${e}</paper-item>`))}
          </paper-listbox>
        </paper-dropdown-menu>

        <ha-entity-picker .hass=${this.hass} name="entity" class="add-entity"></ha-entity-picker>

        <mwc-icon-button
          aria-label=${Cn("editor.actions.add")}
          class="add-icon"
          @click="${this._addEntity}"
          >
          <ha-icon icon="mdi:plus-circle-outline"></ha-icon>
        </mwc-icon-button>
      </div>
    `}connectedCallback(){super.connectedCallback(),this._attached=!0}disconnectedCallback(){super.disconnectedCallback(),this._attached=!1}updated(e){var t,n;super.updated(e);const i=e.has("_attached"),o=e.has("_config");if(o||i)return i&&!this._attached?(null===(t=this._sortable)||void 0===t||t.destroy(),void(this._sortable=void 0)):void(this._sortable||!(null===(n=this._config)||void 0===n?void 0:n.entities)?o&&null==this._subElementEditor&&this._handleEntitiesChanged():this._createSortable())}async _handleEntitiesChanged(){var e;this._renderEmptySortable=!0,await this.updateComplete;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".entities");for(;t.lastElementChild;)t.removeChild(t.lastElementChild);this._renderEmptySortable=!1}_createSortable(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".entities");t&&(this._sortable=new ln(t,{animation:150,fallbackClass:"sortable-fallback",handle:".handle",onEnd:async e=>this._rowMoved(e)}))}_valueChanged(e){if(this._config&&this.hass){if(e.target){const t=e.target;t.configValue&&(this._config=Object.assign(Object.assign({},this._config),{[t.configValue]:void 0!==t.checked?t.checked:t.value}))}xe(this,"config-changed",{config:this._config})}}async _addEntity(){var e,t;const n=(null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".add-preset")).value||null,i=(null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".add-entity")).value;if(!n||!i)return;const o=Object.assign({},kn,Tn[n],{entity:i,preset:n}),r=this._config.entities.concat(o);this._valueChanged({target:{configValue:"entities",value:r}})}_rowMoved(e){if(e.oldIndex===e.newIndex)return;const t=[...this._config.entities];t.splice(e.newIndex,0,t.splice(e.oldIndex,1)[0]),this._valueChanged({target:{configValue:"entities",value:t}})}_removeRow(e){var t;const n=(null===(t=e.currentTarget)||void 0===t?void 0:t.index)||0,i=[...this._config.entities];i.splice(n,1),this._valueChanged({target:{configValue:"entities",value:i}})}_editRow(e){var t;const n=(null===(t=e.currentTarget)||void 0===t?void 0:t.index)||0;this._subElementEditor={type:"entity",element:this._config.entities[n],index:n}}static get styles(){return[te`
        .checkbox {
          display: flex;
          align-items: center;
          padding: 8px 0;
        }
        .checkbox input {
          height: 20px;
          width: 20px;
          margin-left: 0;
          margin-right: 8px;
        }
      `,te`
        .side-by-side {
          display: flex;
        }
        .side-by-side > * {
          flex: 1 1 0%;
          padding-right: 4px;
        }
        .entity,
        .add-item {
          display: flex;
          align-items: center;
        }
        .entity .handle {
          padding-right: 8px;
          cursor: move;
        }
        .entity ha-entity-picker,
        .add-item ha-entity-picker {
          flex-grow: 1;
        }
        .add-preset {
          padding-right: 8px;
          max-width: 130px;
        }
        .remove-icon,
        .edit-icon,
        .add-icon {
          --mdc-icon-button-size: 36px;
          color: var(--secondary-text-color);
        }
        .secondary {
          font-size: 12px;
          color: var(--secondary-text-color);
        }
      `,te`
        #sortable a:nth-of-type(2n) paper-icon-item {
          animation-name: keyframes1;
          animation-iteration-count: infinite;
          transform-origin: 50% 10%;
          animation-delay: -0.75s;
          animation-duration: 0.25s;
        }
        #sortable a:nth-of-type(2n-1) paper-icon-item {
          animation-name: keyframes2;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          transform-origin: 30% 5%;
          animation-delay: -0.5s;
          animation-duration: 0.33s;
        }
        #sortable a {
          height: 48px;
          display: flex;
        }
        #sortable {
          outline: none;
          display: block !important;
        }
        .hidden-panel {
          display: flex !important;
        }
        .sortable-fallback {
          display: none;
        }
        .sortable-ghost {
          opacity: 0.4;
        }
        .sortable-fallback {
          opacity: 0;
        }
        @keyframes keyframes1 {
          0% {
            transform: rotate(-1deg);
            animation-timing-function: ease-in;
          }
          50% {
            transform: rotate(1.5deg);
            animation-timing-function: ease-out;
          }
        }
        @keyframes keyframes2 {
          0% {
            transform: rotate(1deg);
            animation-timing-function: ease-in;
          }
          50% {
            transform: rotate(-1.5deg);
            animation-timing-function: ease-out;
          }
        }
        .show-panel,
        .hide-panel {
          display: none;
          position: absolute;
          top: 0;
          right: 4px;
          --mdc-icon-button-size: 40px;
        }
        :host([rtl]) .show-panel {
          right: initial;
          left: 4px;
        }
        .hide-panel {
          top: 4px;
          right: 8px;
        }
        :host([rtl]) .hide-panel {
          right: initial;
          left: 8px;
        }
        :host([expanded]) .hide-panel {
          display: block;
        }
        :host([expanded]) .show-panel {
          display: inline-flex;
        }
        paper-icon-item.hidden-panel,
        paper-icon-item.hidden-panel span,
        paper-icon-item.hidden-panel ha-icon[slot='item-icon'] {
          color: var(--secondary-text-color);
          cursor: pointer;
        }
      `]}};e([J({attribute:!1})],Pn.prototype,"hass",void 0),e([Z()],Pn.prototype,"_config",void 0),e([Z()],Pn.prototype,"_subElementEditor",void 0),e([Z()],Pn.prototype,"_renderEmptySortable",void 0),e([Z()],Pn.prototype,"_attached",void 0),Pn=e([X("power-distribution-card-editor")],Pn);const An=te`
  * {
    box-sizing: border-box;
  }

  p {
    margin: 4px 0 4px 0;

    text-align: center;
  }

  .card-content {
    display: grid;
    overflow: auto;

    grid-template-columns: 1.5fr 1fr 1.5fr;
    column-gap: 10px;
  }

  #center-panel {
    display: flex;

    height: 100%;

    align-items: center;
    justify-content: center;
    grid-column: 2;
    flex-wrap: wrap;
  }

  #center-panel > div {
    display: flex;
    overflow: hidden;

    width: 100%;
    height: 100%;
    max-height: 200px;

    flex-basis: 50%;
    flex-flow: column;
  }

  #center-panel > div > p {
    flex: 0 1 auto;
  }

  .bar-wrapper {
    position: relative;

    width: 50%;
    height: 80%;
    margin: auto;

    flex: 1 1 auto;

    background-color: rgba(114, 114, 114, 0.2);
  }

  bar {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--secondary-text-color);
  }

  item {
    display: block;
    overflow: hidden;

    margin-bottom: 10px;

    cursor: pointer;
  }

  #right-panel > item > value {
    float: left;
  }

  #right-panel > item > badge {
    float: right;
  }

  badge {
    float: left;

    width: 50%;
    padding: 4px;

    border: 1px solid;
    border-color: var(--disabled-text-color);
    border-radius: 1em;
  }

  icon > ha-icon {
    display: block;

    width: 24px;
    margin: 0 auto;

    color: var(--paper-item-icon-color);
  }

  value {
    float: right;
  }

  table {
    width: 100%;
  }

  /**************
  ARROW ANIMATION
  **************/

  .blank {
    width: 54px;
    height: 4px;
    margin: 8px auto 8px auto;
    opacity: 0.2;
    background-color: var(--secondary-text-color);
  }

  .arrow-color {
    fill: var(--secondary-text-color);
    fill-opacity: 0.8;
  }

  #a-flash {
    animation: flash 3s infinite steps(1);
    fill: var(--secondary-text-color);
    fill-opacity: 0.2;
  }

  @keyframes flash {
    0%,
    66% {
      fill-opacity: 0.2;
      fill: var(--secondary-text-color);
    }
    33% {
      fill-opacity: 0.8;
      fill: var(--secondary-text-color);
    }
  }

  #a-slide-right {
    animation: slide-right 3s linear infinite both;
  }
  @keyframes slide-right {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(48px);
      transform: translateX(48px);
    }
  }
  #a-slide-left {
    animation: slide-left 3s linear infinite both;
  }
  @keyframes slide-left {
    0% {
      -webkit-transform: translateX(48px);
      transform: translateX(48px);
    }
    100% {
      -webkit-transform: translateX(0px);
      transform: translateX(0px);
    }
  }
`,Vn=I`
  <style>
    /**********
    Mobile View
    **********/
    .card-content {
      grid-template-columns: 1fr 1fr 1fr;
    }
    item > badge,
    item > value {
      display: block;
      float: none !important;

      width: 72px;
      margin: 0 auto;
    }

    .arrow {
      margin: 0px 8px;
    }
  </style>
`;var Rn=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,i){return e[0]===t&&(n=i,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),i=this.__entries__[n];return i&&i[1]},t.prototype.set=function(t,n){var i=e(this.__entries__,t);~i?this.__entries__[i][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,i=e(n,t);~i&&n.splice(i,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,i=this.__entries__;n<i.length;n++){var o=i[n];e.call(t,o[1],o[0])}},t}()}(),In="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,jn="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),Yn="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(jn):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var Hn=["top","right","bottom","left","width","height","size","weight"],zn="undefined"!=typeof MutationObserver,Wn=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,i=!1,o=0;function r(){n&&(n=!1,e()),i&&s()}function a(){Yn(r)}function s(){var e=Date.now();if(n){if(e-o<2)return;i=!0}else n=!0,i=!1,setTimeout(a,t);o=e}return s}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){In&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),zn?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){In&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;Hn.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Bn=function(e,t){for(var n=0,i=Object.keys(t);n<i.length;n++){var o=i[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},Ln=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||jn},Un=Zn(0,0,0,0);function qn(e){return parseFloat(e)||0}function Fn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+qn(e["border-"+n+"-width"])}),0)}function Xn(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Un;var i=Ln(e).getComputedStyle(e),o=function(e){for(var t={},n=0,i=["top","right","bottom","left"];n<i.length;n++){var o=i[n],r=e["padding-"+o];t[o]=qn(r)}return t}(i),r=o.left+o.right,a=o.top+o.bottom,s=qn(i.width),l=qn(i.height);if("border-box"===i.boxSizing&&(Math.round(s+r)!==t&&(s-=Fn(i,"left","right")+r),Math.round(l+a)!==n&&(l-=Fn(i,"top","bottom")+a)),!function(e){return e===Ln(e).document.documentElement}(e)){var c=Math.round(s+r)-t,d=Math.round(l+a)-n;1!==Math.abs(c)&&(s-=c),1!==Math.abs(d)&&(l-=d)}return Zn(o.left,o.top,s,l)}var Gn="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof Ln(e).SVGGraphicsElement}:function(e){return e instanceof Ln(e).SVGElement&&"function"==typeof e.getBBox};function Jn(e){return In?Gn(e)?function(e){var t=e.getBBox();return Zn(0,0,t.width,t.height)}(e):Xn(e):Un}function Zn(e,t,n,i){return{x:e,y:t,width:n,height:i}}var Kn=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Zn(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=Jn(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),Qn=function(e,t){var n=function(e){var t=e.x,n=e.y,i=e.width,o=e.height,r="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(r.prototype);return Bn(a,{x:t,y:n,width:i,height:o,top:n,right:t+i,bottom:o+n,left:t}),a}(t);Bn(this,{target:e,contentRect:n})},ei=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new Rn,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof Ln(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new Kn(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof Ln(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new Qn(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),ti="undefined"!=typeof WeakMap?new WeakMap:new Rn,ni=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Wn.getInstance(),i=new ei(t,n,this);ti.set(this,i)};["observe","unobserve","disconnect"].forEach((function(e){ni.prototype[e]=function(){var t;return(t=ti.get(this))[e].apply(t,arguments)}}));var ii=void 0!==jn.ResizeObserver?jn.ResizeObserver:ni,oi=Object.freeze({__proto__:null,default:ii});const ri=(e,t,n=!1)=>{let i;return function(...o){const r=this,a=n&&!i;clearTimeout(i),i=setTimeout((()=>{i=null,n||e.apply(r,o)}),t),a&&e.apply(r,o)}};console.info("%c POWER-DISTRIBUTION-CARD %c 2.1.0","font-weight: 500; color: white; background: #03a9f4;","font-weight: 500; color: #03a9f4; background: white;"),window.customCards.push({type:"power-distribution-card",name:"Power Distribution Card",description:Cn("common.description")});let ai=class extends ie{constructor(){super(...arguments),this._narrow=!1}static async getConfigElement(){return document.createElement("power-distribution-card-editor")}static getStubConfig(){return{title:"Title",entities:[],center:{type:"bars",content:[{preset:"autarky",name:"autarky"},{preset:"ratio",name:"ratio"}]}}}async setConfig(e){const t=Object.assign({},On,e,{entities:[]});if(!e.entities)throw new Error("You need to define Entities!");e.entities.forEach((e=>{if(!e.preset||!$n.includes(e.preset))throw new Error("The preset `"+e.preset+"` is not a valid entry. Please choose a Preset from the List.");{const n=Object.assign({},kn,Tn[e.preset],e);t.entities.push(n)}})),this._config=t}firstUpdated(){this._config.entities.forEach(((e,t)=>{if(!e.entity)return;const n=this.hass.states[e.entity].attributes.unit_of_measurement;e.unit_of_measurement||(this._config.entities[t].unit_of_measurement=n||"W")}));const e=this._config.center;"card"==e.type&&(this._card=this._createCardElement(e)),this._adjustWidth(),this._attachObserver()}static get styles(){return An}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>this._attachObserver()))}disconnectedCallback(){this._resizeObserver&&this._resizeObserver.disconnect()}async _attachObserver(){var e;this._resizeObserver||(await(async()=>{"function"!=typeof ii&&(window.ResizeObserver=(await Promise.resolve().then((function(){return oi}))).default)})(),this._resizeObserver=new ii(ri((()=>this._adjustWidth()),250,!1)));const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("ha-card");t&&this._resizeObserver.observe(t)}_adjustWidth(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("ha-card");t&&(this._narrow=t.offsetWidth<400)}_val(e){var t;let n=e.invert_value?-1:1;(null===(t=e.unit_of_measurement)||void 0===t?void 0:t.startsWith("k"))&&(n*=1e3);const i=e.attribute||null,o=e.entity?Number(i?this.hass.states[e.entity].attributes[i]:this.hass.states[e.entity].state):0;return e.entity?o*n:0}render(){const e=[],t=[],n=[];let i=0,o=0;this._config.entities.forEach(((t,r)=>{const a=this._val(t);t.calc_excluded||(t.producer&&a>0&&(o+=a),t.consumer&&a<0&&(i-=a));const s=this._render_item(a,t,r);switch(r%2){case 0:e.push(s);break;case 1:n.push(s)}}));const r=this._config.center;switch(r.type){case"none":break;case"card":t.push(this._createCardElement(r.content));break;case"bars":t.push(this._render_bars(i,o))}return I` ${this._narrow?Vn:void 0}
      <ha-card .header=${this._config.title}>
        <div class="card-content">
          <div id="left-panel">${e}</div>
          <div id="center-panel">${t}</div>
          <div id="right-panel">${n}</div>
        </div>
      </ha-card>`}_moreInfo(e){xe(this,"hass-more-info",{entityId:e.currentTarget.entity})}_render_item(e,t,n){const i=t.invert_arrow?-1*e:e;e=t.display_abs?Math.abs(e):e;let o=t.unit_of_display||"W";o.startsWith("k")?e/=1e3:"adaptive"==t.unit_of_display&&(e>999?(e/=1e3,o="kW"):o="W");const r=10**(t.decimals||0==t.decimals?t.decimals:2),a=e=Math.round(e*r)/r;let s;return t.icon_color&&(i>0&&(s=t.icon_color.bigger),i<0&&(s=t.icon_color.smaller),0==i&&(s=t.icon_color.equal)),I`
      <item .entity=${t.entity} @click="${this._moreInfo}">
        <badge>
          <icon>
            <ha-icon icon="${t.icon}" style="${s?`color:${s};`:""}"></ha-icon>
          </icon>
          <p class="subtitle">${t.name}</p>
        </badge>
        <value>
          <p>${a} ${o}</p>
          ${t.hide_arrows?I``:this._render_arrow(0==i?"none":n%2==0?i>0?"right":"left":i>0?"left":"right",n)}
        <value
      </item>
    `}_render_arrow(e,t){const n=this._config.animation;return"none"==e?I` <div class="blank"></div> `:I`
        <svg width="57" height="18" class="arrow">
          <defs>
            <polygon id="arrow-right" points="0 0, 0 16, 16 8" />
            <polygon id="arrow-left" points="16 0, 16 16, 0 8" />
            <g id="slide-${t}" class="arrow-color">
              <use href="#arrow-${e}" x="-36" />
              <use href="#arrow-${e}" x="-12" />
              <use href="#arrow-${e}" x="12" />
              <use href="#arrow-${e}" x="36" />
            </g>
            <g id="flash-${t}">
              <use
                href="#arrow-${e}"
                x="0"
                style="animation-delay: ${"right"==e?0:2}s;"
                id="a-flash"
              />
              <use href="#arrow-${e}" x="20" style="animation-delay: 1s;" id="a-flash" />
              <use
                href="#arrow-${e}"
                x="40"
                style="animation-delay: ${"right"==e?2:0}s;"
                id="a-flash"
              />
            </g>
            <g id="none-${t}" class="arrow-color">
              <use href="#arrow-${e}" x="0" />
              <use href="#arrow-${e}" x="20" />
              <use href="#arrow-${e}" x="40" />
            </g>
          </defs>
          <use href="#${n}-${t}" id="a-${n}-${e}" />
        </svg>
      `}_render_bars(e,t){const n=[];return this._config.center.content&&0!=this._config.center.content.length?(this._config.center.content.forEach((i=>{let o=-1;switch(i.preset){case"autarky":i.entity||(o=0!=e?Math.min(Math.round(100*t/Math.abs(e)),100):0);break;case"ratio":i.entity||(o=0!=t?Math.min(Math.round(100*Math.abs(e)/t),100):0)}o<0&&(o=this._val(i)),n.push(I`
        <div class="bar-element">
          <p class="bar-percentage">${o}%</p>
          <div class="bar-wrapper" style="${i.bar_bg_color?`background-color:${i.bar_bg_color};`:""}">
            <bar style="height:${o}%; background-color:${i.bar_color};" />
          </div>
          <p>${i.name||""}</p>
        </div>
      `)})),I`${n.map((e=>I`${e}`))}`):I``}_createCardElement(e){const t=function(e,t){void 0===t&&(t=!1);var n=function(e,t){return i("hui-error-card",{type:"error",error:e,config:t})},i=function(e,t){var i=window.document.createElement(e);try{i.setConfig(t)}catch(i){return console.error(e,i),n(i.message,t)}return i};if(!e||"object"!=typeof e||!t&&!e.type)return n("No type defined",e);var o=e.type;if(o&&o.startsWith("custom:"))o=o.substr("custom:".length);else if(t)if(Ce.has(o))o="hui-"+o+"-row";else{if(!e.entity)return n("Invalid config given.",e);var r=e.entity.split(".",1)[0];o="hui-"+($e[r]||"text")+"-entity-row"}else o="hui-"+o+"-card";if(customElements.get(o))return i(o,e);var a=n("Custom element doesn't exist: "+e.type+".",e);a.style.display="None";var s=setTimeout((function(){a.style.display=""}),2e3);return customElements.whenDefined(e.type).then((function(){clearTimeout(s),xe(a,"ll-rebuild",{},a)})),a}(e);return this.hass&&(t.hass=this.hass),t.addEventListener("ll-rebuild",(n=>{n.stopPropagation(),this._rebuildCard(t,e)}),{once:!0}),t}_rebuildCard(e,t){const n=this._createCardElement(t);e.parentElement&&e.parentElement.replaceChild(n,e),this._card===e&&(this._card=n)}};e([J()],ai.prototype,"hass",void 0),e([Z()],ai.prototype,"_config",void 0),e([J()],ai.prototype,"_card",void 0),e([Z()],ai.prototype,"_narrow",void 0),ai=e([X("power-distribution-card")],ai);export{ai as PowerDistributionCard};
