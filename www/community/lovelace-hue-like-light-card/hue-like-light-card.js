function t(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;class o{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}}const n=t=>new o("string"==typeof t?t:t+"",void 0,s),a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(i,t,s)},l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return n(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var h;const c=window,d=c.trustedTypes,u=d?d.emptyScript:"",g=c.reactiveElementPolyfillSupport,f={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),_={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:p};class m extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{i?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),r=e.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=_){var s;const r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:f).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=s.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:f;this._$El=r,this[r]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==g||g({ReactiveElement:m}),(null!==(h=c.reactiveElementVersions)&&void 0!==h?h:c.reactiveElementVersions=[]).push("1.6.1");const y=window,b=y.trustedTypes,w=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,C="?"+$,S=`<${C}>`,x=document,k=(t="")=>x.createComment(t),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,D=/>/g,P=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),H=/'/g,B=/"/g,L=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),U=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),R=new WeakMap,V=x.createTreeWalker(x,129,null,!1),M=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":"",n=T;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(n.lastIndex=c,l=n.exec(i),null!==l);)c=n.lastIndex,n===T?"!--"===l[1]?n=O:void 0!==l[1]?n=D:void 0!==l[2]?(L.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=P):void 0!==l[3]&&(n=P):n===P?">"===l[0]?(n=null!=r?r:T,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?P:'"'===l[3]?B:H):n===B||n===H?n=P:n===O||n===D?n=T:(n=P,r=void 0);const d=n===P&&t[e+1].startsWith("/>")?" ":"";o+=n===T?i+S:h>=0?(s.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+$+d):i+$+(-2===h?(s.push(void 0),e):d)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(a):a,s]};class F{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[l,h]=M(t,e);if(this.el=F.createElement(l,i),V.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=V.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=h[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?Z:"@"===e[1]?K:W})}else a.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(L.test(s.tagName)){const t=s.textContent.split($),e=t.length-1;if(e>0){s.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],k()),V.nextNode(),a.push({type:2,index:++r});s.append(t[e],k())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf($,t+1));)a.push({type:7,index:r}),t+=$.length-1}r++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function j(t,e,i=t,s){var r,o,n,a;if(e===U)return e;let l=void 0!==s?null===(r=i._$Co)||void 0===r?void 0:r[s]:i._$Cl;const h=E(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(n=(a=i)._$Co)&&void 0!==n?n:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=j(t,l._$AS(t,e.values),l,s)),e}class z{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);V.currentNode=r;let o=V.nextNode(),n=0,a=0,l=s[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new q(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new J(o,this,t)),this.u.push(e),l=s[++a]}n!==(null==l?void 0:l.index)&&(o=V.nextNode(),n++)}return r}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,s){var r;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=j(this,t,e),E(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==U&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>A(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==N&&E(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=F.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.p(i);else{const t=new z(r,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=R.get(t.strings);return void 0===e&&R.set(t.strings,e=new F(t)),e}k(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new q(this.O(k()),this.O(k()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class W{constructor(t,e,i,s,r){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=j(this,t,e,0),o=!E(t)||t!==this._$AH&&t!==U,o&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=j(this,s[i+n],e,n),a===U&&(a=this._$AH[n]),o||(o=!E(a)||a!==this._$AH[n]),a===N?t=N:t!==N&&(t+=(null!=a?a:"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.j(t)}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===N?void 0:t}}const Q=b?b.emptyScript:"";class Z extends W{constructor(){super(...arguments),this.type=4}j(t){t&&t!==N?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class K extends W{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=j(this,t,e,0))&&void 0!==i?i:N)===U)return;const s=this._$AH,r=t===N&&s!==N||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==N&&(s===N||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class J{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}const X=y.litHtmlPolyfillSupport;null==X||X(F,q),(null!==(v=y.litHtmlVersions)&&void 0!==v?v:y.litHtmlVersions=[]).push("2.6.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Y,tt;class et extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,r;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=o._$litPart$;if(void 0===n){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=n=new q(e.insertBefore(k(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return U}}et.finalized=!0,et._$litElement$=!0,null===(Y=globalThis.litElementHydrateSupport)||void 0===Y||Y.call(globalThis,{LitElement:et});const it=globalThis.litElementPolyfillSupport;null==it||it({LitElement:et}),(null!==(tt=globalThis.litElementVersions)&&void 0!==tt?tt:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st=1,rt=t=>(...e)=>({_$litDirective$:t,values:e});class ot{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=rt(class extends ot{constructor(t){var e;if(super(t),t.type!==st||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,s;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.nt.add(t);return this.render(e)}const r=t.element.classList;this.nt.forEach((t=>{t in e||(r.remove(t),this.nt.delete(t))}));for(const t in e){const i=!!e[t];i===this.nt.has(t)||(null===(s=this.st)||void 0===s?void 0:s.has(t))||(i?(r.add(t),this.nt.add(t)):(r.remove(t),this.nt.delete(t)))}return U}}),at=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,lt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):lt(t,e)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var ct,dt,ut;function gt(){return(gt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t}).apply(this,arguments)}null===(ct=window.HTMLSlotElement)||void 0===ct||ct.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(dt||(dt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(ut||(ut={}));
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ft=Symbol.for(""),pt=t=>{if((null==t?void 0:t.r)===ft)return null==t?void 0:t._$litStatic$},_t=t=>({_$litStatic$:t,r:ft}),mt=new Map,vt=(t=>(e,...i)=>{const s=i.length;let r,o;const n=[],a=[];let l,h=0,c=!1;for(;h<s;){for(l=e[h];h<s&&void 0!==(o=i[h],r=pt(o));)l+=r+e[++h],c=!0;a.push(o),n.push(l),h++}if(h===s&&n.push(e[s]),c){const t=n.join("$$lit$$");void 0===(e=mt.get(t))&&(n.raw=n,mt.set(t,e=n)),i=a}return t(e,...i)})(I);class yt{constructor(t,e,i,s=1){"string"==typeof t?(this.parse(t),this._opacity=null!=e?e:1):(this._red=t,this._green=null!=e?e:0,this._blue=null!=i?i:0,this._opacity=s)}getOpacity(){return this._opacity}getLuminance(){return.299*this._red+.587*this._green+.114*this._blue}getForeground(t,e,i){return this.getLuminance()+i<yt.LuminanceBreakingPoint?t:e}parse(t,e=!0){if(t.startsWith("#"))if(3==(t=t.substring(1)).length)this._red=parseInt(t.substring(0,1)+t.substring(0,1),16),this._green=parseInt(t.substring(1,2)+t.substring(1,2),16),this._blue=parseInt(t.substring(2,3)+t.substring(2,3),16);else{if(6!=t.length)throw new Error("Hex color format should have 3 or 6 letters");this._red=parseInt(t.substring(0,2),16),this._green=parseInt(t.substring(2,4),16),this._blue=parseInt(t.substring(4,6),16)}else{if(!t.startsWith("rgb")){if(e){const e=document.createElement("canvas").getContext("2d");if(null!=e)return e.fillStyle=t,void this.parse(e.fillStyle,!1)}throw new Error("Unrecognized color format: "+t)}{const e=t.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,?\s*(\d*(?:\.\d+\s*)?)\)$/);if(!e)throw new Error("Unrecognized color format rgb[a]: "+t);this._red=parseInt(e[1]),this._green=parseInt(e[2]),this._blue=parseInt(e[3])}}}toString(){return this._opacity<1?`rgba(${this._red}, ${this._green}, ${this._blue}, ${this._opacity})`:`rgb(${this._red}, ${this._green}, ${this._blue})`}}yt.LuminanceBreakingPoint=192;class bt{}bt.Version="v1.3.0",bt.Dev=!1,bt.CardElementName=bt.Dev?"hue-like-light-card-test":"hue-like-light-card",bt.CardName="Hue-Like Light Card",bt.CardDescription="Hue-like way to control your lights",bt.HueBorderRadius=10,bt.HueShadow="0px 2px 3px rgba(0,0,0,0.4)",bt.LightColor=new yt("#fff"),bt.LightOffColor=new yt("#fff",.85),bt.DarkColor=new yt(0,0,0,.7),bt.DarkOffColor=new yt(0,0,0,.5),bt.WarmColor="#ffda95",bt.ColdColor="#f5f5ff",bt.DefaultColor="warm",bt.OffColor="#666",bt.TileOffColor="rgba(102, 102, 102, 0.6)",bt.DialogBgColor="#171717",bt.DialogFgLightColor=new yt("#aaa"),bt.DialogOffColor="#363636",bt.GradientOffset=10,bt.TransitionDefault="all 0.3s ease-out 0s",bt.DefaultOneIcon="mdi:lightbulb",bt.DefaultTwoIcon="mdi:lightbulb-multiple",bt.DefaultMoreIcon="mdi:lightbulb-group",bt.TimeCacheInterval=1500,bt.ThemeDefault="default",bt.ThemeCardBackground="--hue-detected-card-bg",bt.ThemeCardBackgroundVar=`var(${bt.ThemeCardBackground})`,bt.ThemeCardPossibleBackgrounds=["--ha-card-background","--card-background-color","--paper-card-background-color","--primary-background-color"],bt.ThemeDialogHeadingColorVar="var(--mdc-dialog-heading-ink-color)",bt.ThemeSecondaryTextColorVar="var(--secondary-text-color)";class wt extends yt{constructor(t){t==wt.themeColor?(super(0,0,0),this._isThemeColor=!0):(super(t),this._isThemeColor=!1)}getBaseColor(){if(this._isThemeColor)throw new Error("Cannot getBaseColor on "+wt.themeColor);return new yt(this._red,this._green,this._blue)}isThemeColor(){return this._isThemeColor}getLuminance(){if(this._isThemeColor)throw new Error("Cannot getLuminance on "+wt.themeColor);return super.getLuminance()}getForeground(t,e,i){if(this._isThemeColor)throw new Error("Cannot getLuminance on "+wt.themeColor);return super.getForeground(t,e,i)}toString(){return this._isThemeColor?"var(--"+wt.themeColor+")":super.toString()}}wt.themeColor="theme-color";class $t{constructor(t){if(!((null==t?void 0:t.length)>0))throw new Error("At least one background or color is needed for new Background(...).");this._colors=t.flatMap((t=>{if(t instanceof wt)throw new Error("ColorExtended cannot be used in Background. Resolve it first.");if(t instanceof yt)return[t];if(t instanceof $t)return t._colors;throw new Error("Only array of Colors or Backgrounds is supported for new Background(...).")})),this._colors.sort(((t,e)=>t.getLuminance()-e.getLuminance()))}getForeground(t,e,i){if(this._colors.length<3)return this._colors[0].getForeground(t,e,i);let s=0;for(let t=0;t<this._colors.length/2;t++)this._colors[t].getForeground(!0,!1,i)&&s++;return s>this._colors.length/4?t:e}toString(){if(1==this._colors.length)return this._colors[0].toString();const t=100/(this._colors.length-1),e=bt.GradientOffset;let i=`${this._colors[0]} 0%, ${this._colors[0]} ${e}%`,s=0;for(let r=1;r<this._colors.length;r++)s+=t,r+1==this._colors.length&&(i+=`, ${this._colors[r]} ${100-e}%`),i+=`, ${this._colors[r]} ${Math.round(s)}%`;return`linear-gradient(90deg, ${i})`}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=rt(class extends ot{constructor(t){var e;if(super(t),t.type!==st||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.vt){this.vt=new Set;for(const t in e)this.vt.add(t);return this.render(e)}this.vt.forEach((t=>{null==e[t]&&(this.vt.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const s=e[t];null!=s&&(this.vt.add(t),t.includes("-")?i.setProperty(t,s):i[t]=s)}return U}});class St{static getSwitchThemeStyle(){return{"--switch-checked-button-color":"var(--primary-color)","--switch-checked-track-color":"var(--dark-primary-color)"}}static setDialogThemeStyles(t,e,i){i&&St.detectThemeCardBackground(t,!0,1),t.style.setProperty("--mdc-theme-surface",`var(${e}, ${bt.ThemeCardBackgroundVar})`)}static applyTheme(t,e,i){return t.dataset.themeLocal!=i&&(function(t,e,i,s){void 0===s&&(s=!1),t._themes||(t._themes={});var r=e.default_theme;("default"===i||i&&e.themes[i])&&(r=i);var o=gt({},t._themes);if("default"!==r){var n=e.themes[r];Object.keys(n).forEach((function(e){var i="--"+e;t._themes[i]="",o[i]=n[e]}))}if(t.updateStyles?t.updateStyles(o):window.ShadyCSS&&window.ShadyCSS.styleSubtree(t,o),s){var a=document.querySelector("meta[name=theme-color]");if(a){a.hasAttribute("default-content")||a.setAttribute("default-content",a.getAttribute("content"));var l=o["--primary-color"]||a.getAttribute("default-content");a.setAttribute("content",l)}}}(t,e,i),i!=bt.ThemeDefault?t.dataset.themeLocal=i:delete t.dataset.themeLocal,!0)}static detectThemeCardBackground(t,e=!1,i=0){if(t.dataset.hueBgDetected&&!e)return;const s=!!t.dataset.themeLocal;let r;for(r of bt.ThemeCardPossibleBackgrounds)if(i>0)i--;else if(s){let e=!1,i=0;for(;t.style[i];){if(t.style[i]==r){e=!0;break}i++}if(e){t.style.setProperty(bt.ThemeCardBackground,`var(${r})`);break}}else{t.style.setProperty(bt.ThemeCardBackground,`var(${r})`);if(getComputedStyle(t).getPropertyValue(bt.ThemeCardBackground))break}t.dataset.hueBgDetected=r||"none",t.dataset.hueBgDetectedLocally=s.toString()}}class xt{static createSwitch(t,e){const i=St.getSwitchThemeStyle();return I`<ha-switch
        .checked=${t.isOn()}
        .disabled=${t.isUnavailable()}
        .haptic=true
        style=${Ct(i)}
        @change=${i=>this.changed(t,e,!1,i)}
        ></ha-switch>`}static createSlider(t,e,i){if(!t.features.brightness)return I``;const s=e.allowZero?0:1;return I`<ha-slider .min=${s} .max=${100} .step=${1} .disabled=${e.allowZero?t.isUnavailable():t.isOff()} .value=${t.value}
        pin @change=${e=>this.changed(t,i,!0,e)}
        ignore-bar-touch
        ></ha-slider>`}static changed(t,e,i,s){const r=s.target;if(r){if(i){const e=r.value;null!=e&&(t.value=parseInt(e))}else{r.checked?t.turnOn():t.turnOff()}e()}}static calculateBackAndForeground(t,e,i=!0,s=e){const r=t.isOff()?e:t.getBackground()||s||e;let o;if(null==r)o=null;else{o=this.calculateForeground(t,r,i).foreground}return{background:r,foreground:o}}static calculateForeground(t,e,i=!0){let s=t.value;i||(s=100);const r=t.isOn()&&s>50?-(10-(s-50)/5):0;let o=t.isOn()&&s<=50?bt.LightColor:e.getForeground(bt.LightColor,bt.DarkColor,r);return t.isOff()&&(o=o==bt.DarkColor?bt.DarkOffColor:bt.LightOffColor),{foreground:o,opacity:1}}static calculateDefaultShadow(t,e,i){if(e.isOff())return i?"inset 0px 0px 10px rgba(0,0,0,0.2)":"0px 0px 0px white";const s=t;if(!s||!s.clientHeight)return"";const r=100-e.value,o=20+.95*r*(s.clientHeight/100);let n=s.clientHeight/2;r>70&&(n-=(n-20)*(r-70)/30);let a=.65;return r>60&&(a-=(a-.5)*(r-60)/40),`inset 0px -${o}px ${n}px -20px rgba(0,0,0,${a})`}}class kt{constructor(t,e){this._waitAfter=e,this._action=t}get action(){return this._action}get waitAfter(){return this._waitAfter}}class Et{constructor(){this._queue=new Array,this._currentEffectId=null}get currentEffectId(){return this._currentEffectId}addEffect(t,e){const i=new kt(e,t);this._queue.push(i)}start(){let t=0;const e=()=>{this.planEffect(++t,e)};this.planEffect(t,e)}stop(){this._currentEffectId&&(clearTimeout(this._currentEffectId),this._currentEffectId=null)}stopAndClear(){this.stop(),this._queue.length=0}planEffect(t,e=null){if(t>=this._queue.length)return void(this._currentEffectId=null);const i=this._queue[t];this._currentEffectId=setTimeout((()=>{i.action(),e&&e()}),i.waitAfter)}}function At(t,e){return null!=e?e:t}function Tt(t,e,...i){i.unshift(e);const s=t.split(".")[0];if(i.indexOf(s)<0)throw new Error(`Unsupported entity type: ${s} (in '${t}'). Supported type(s): '${i.join("', '")}'.`)}function Ot(t){return t.filter((function(t,e,i){return e===i.indexOf(t)}))}class Dt{static getColor(t){switch(t){case"warm":return new yt(bt.WarmColor);case"cold":return new yt(bt.ColdColor);default:return new yt(t)}}}var Pt,Ht;!function(t){t.Default="default",t.NoAction="none",t.TurnOn="turn-on",t.TurnOff="turn-off",t.MoreInfo="more-info",t.Scene="scene",t.HueScreen="hue-screen"}(Pt||(Pt={}));class Bt{constructor(t){"string"==typeof t?this._onlyValue=t:t instanceof Bt?(this._onlyValue=t._onlyValue,this._valueStore=t._valueStore):this._valueStore=t||{}}getData(t){return this._onlyValue?this._onlyValue:this._valueStore[t]}}class Lt{constructor(t){Tt(t,"scene"),this.entity=t}getActivationService(){const t="scene.turn_on",e=this.activation||t,i=e.split(".");if(2!=i.length)throw new Error(`Unrecognized service '${e}'. The service should have 2 parts separated by '.' (dot). E.g.: '${t}'`);return i}getActivationData(){const t={entity_id:this.entity};if(this.activationData)for(const e in this.activationData)Object.prototype.hasOwnProperty.call(this.activationData,e)&&(t[e]=this.activationData[e]);return t}}class It{constructor(t){this._config="string"==typeof t?new Lt(t):t}set hass(t){this._hass=t,this._entity=this._hass.states[this._config.entity]}activate(){this.ensureHass();const t=this._config.getActivationService(),e=this._config.getActivationData();this._hass.callService(t[0],t[1],e)}getTitle(t){if(this.ensureHass(),this._config.title)return this._config.title;let e=this._entity.attributes.friendly_name;return t&&0==(null==e?void 0:e.toLowerCase().indexOf(t.toLowerCase()))&&(e=e.substring(t.length).trimStart()),e}getIcon(t=null){return this.ensureHass(),null!=this._config.icon?this._config.icon:this._entity.attributes.icon||t}getColor(){return this._config.color?Dt.getColor(this._config.color):null}ensureHass(){if(!this._hass)throw new Error("Scene data not initialized - call setHass first!")}}class Ut extends et{constructor(t){super(),this._id=t+"_"+Ut.maxId++}}Ut.maxId=1;class Nt extends Ut{set hass(t){const e=this._hass;this._hass=t,this.updateHassDependentProps(),this.requestUpdate(At(this,"hass"),e)}constructor(){super("HueDialogTile")}updateHassDependentProps(){}}Nt.ElementName=bt.CardElementName+"-hue-dialog-tile",Nt.padding=5,Nt.height=90,Nt.width=85,Nt.titleHeight=35,Nt.hueDialogStyle=a`
    .hue-tile{
        background: ${n(bt.TileOffColor)};
        width: ${Nt.width}px;
        height: ${Nt.height}px;
        padding: ${Nt.padding}px;
        border-radius: ${bt.HueBorderRadius}px;
        box-shadow: ${n(bt.HueShadow)};
        overflow:hidden;
        user-select: none;
    }
    .title {
        color:${n(bt.LightColor)};
        font-size: 12px;
        line-height: 15px;
        font-weight:400;
        height:${Nt.titleHeight}px;
        text-align: center;
        display: flex;
        flex-flow: column;
        justify-content: center;
        transition: ${n(bt.TransitionDefault)};
    }
    .title span {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    `,t([ht()],Nt.prototype,"cardTitle",void 0);let Rt=Ht=class extends Nt{constructor(){super(...arguments),this._effectQueue=new Et,this._sceneConfig=null,this._scene=null}set sceneConfig(t){const e=this._sceneConfig;this._sceneConfig=t,this._scene=new It(t),this.updateHassDependentProps(),this.requestUpdate(At(this,"sceneConfig"),e)}updateHassDependentProps(){this._hass&&this._scene&&(this._scene.hass=this._hass)}sceneClicked(){if(!this._scene)return;this._scene.activate(),this._effectQueue.stopAndClear();const t=this.renderRoot.querySelector(".scene");if(t){t.classList.remove("clicked","unclicked");const e=1e3*Ht.animationSeconds;this._effectQueue.addEffect(0,(()=>t.classList.add("clicked"))),this._effectQueue.addEffect(3e3,(()=>t.classList.add("unclicked"))),this._effectQueue.addEffect(e,(()=>{t.classList.add("stop-color-animate"),t.classList.remove("clicked")})),this._effectQueue.addEffect(50,(()=>{t.classList.remove("stop-color-animate","unclicked")})),this._effectQueue.start()}}static get styles(){return[Nt.hueDialogStyle,a`
    .scene {
        cursor: pointer;
    }
    .scene .icon-background {
        height: calc(100% - ${Nt.titleHeight}px);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .scene .icon-background .color {
        background: var(--hue-tile-accent-color, darkgoldenrod);
        height: ${Ht.colorDimensions}px;
        width: ${Ht.colorDimensions}px;
        border-radius: ${Ht.colorDimensions/2}px;
        box-shadow: ${n(bt.HueShadow)}, inset rgba(0,0,0,0.1) -8px -8px 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all ${Ht.animationSeconds}s linear;
    }
    .scene .icon-background .color ha-icon {
        color: var(--hue-tile-fg-color, ${n(bt.LightColor)});
        transform: scale(${Ht.iconScale});
    }
    .scene.clicked .icon-background .color {
        height: ${2*Nt.height}px;
        width: ${2*Nt.width}px;
        border-radius: ${Nt.height}px;
        margin-left: -${2*Nt.padding}px;
        margin-right: -${2*Nt.padding}px;
    }
    .scene.clicked .icon-background .color ha-icon{
        animation: pop-icon 0.5s linear 1;
    }
    .scene.unclicked .icon-background .color {
        background: transparent;
    }
    .scene.stop-color-animate .icon-background .color {
        transition: none;
    }

    .scene .title {
        transition: all ${Ht.animationSeconds/2}s linear;
    }
    .scene.clicked .title {
        color:var(--hue-tile-fg-text-color, ${n(bt.LightColor)});
    }

    @keyframes pop-icon{
        50% { transform: scale(${2*Ht.iconScale}); }
    }
    `]}updated(t){if(this._scene&&t.has(At(this,"sceneConfig"))){const t=this._scene.getColor();if(t){const e=t.getForeground(bt.LightColor,bt.DarkColor,20),i=t.getForeground(bt.LightColor,new yt("black"),20);this.style.setProperty("--hue-tile-accent-color",t.toString()),this.style.setProperty("--hue-tile-fg-color",e.toString()),this.style.setProperty("--hue-tile-fg-text-color",i.toString())}}}render(){if(!this._scene)return I``;const t=this._scene.getTitle(this.cardTitle);return I`
        <div class='hue-tile scene' title='${t}' @click="${this.sceneClicked}">
            <div class='icon-background'>
                <div class='color'>
                    <ha-icon icon="${this._scene.getIcon("mdi:palette")}"></ha-icon>
                </div>
            </div>
            <div class='title'>
                <span>${t}</span>
            </div>
        </div>
        `}};var Vt;Rt.ElementName=Nt.ElementName+"-scene",Rt.colorDimensions=Nt.height/2,Rt.iconScale=.75*Ht.colorDimensions/24,Rt.animationSeconds=1,t([ht()],Rt.prototype,"_scene",void 0),Rt=Ht=t([at(Ht.ElementName)],Rt);let Mt=Vt=class extends Nt{constructor(){super(...arguments),this.lightContainer=null,this.defaultColor=null}static get styles(){return[Nt.hueDialogStyle,a`
    .hue-tile.light{
        height: ${Nt.height+Vt.switchHeight}px;
        background:var(--hue-light-background, ${n(bt.TileOffColor)});
        box-shadow:var(--hue-light-box-shadow), ${n(bt.HueShadow)};
        transition:${n(bt.TransitionDefault)};
    }

    .title{
        color: var(--hue-light-text-color, ${n(bt.LightColor)});
        padding-bottom: ${Vt.titlePadding}px;
    }

    .icon-slot{
        display: flex;
        flex-flow: column;
        text-align: center;
        height: calc(100% - ${Vt.titleHeight}px - ${Vt.titlePadding}px - ${Vt.switchHeight}px);
        justify-content: center;
    }
    .icon-slot ha-icon {
        color: var(--hue-light-text-color, ${n(bt.LightColor)});
        transform: scale(${Rt.iconScale});
    }

    .switch{
        display:flex;
        flex-flow:column;

        height: ${Vt.switchHeight+Nt.padding}px;
        justify-content: center;
        background: linear-gradient(rgba(255, 255, 255, 0.1), transparent);
        border-top: 1px solid rgba(80, 80, 80, 0.1);
        box-sizing: content-box;
        margin: 0 -${Nt.padding}px;
    }
    .switch ha-switch{
        justify-content:center;
    }

    `]}updated(t){if(t.has(At(this,"lightContainer"))){const e=t.get(At(this,"lightContainer"));e&&e.unregisterOnPropertyChanged(this._id),this.lightContainer&&this.lightContainer.registerOnPropertyChanged(this._id,(()=>this.lightUpdated()))}if(this.lightContainer){if(this.lightContainer.isOn()){const t=this.defaultColor?new $t([this.defaultColor]):null,e=xt.calculateBackAndForeground(this.lightContainer,null,!0,t);e.background&&this.style.setProperty("--hue-light-background",e.background.toString()),e.foreground&&this.style.setProperty("--hue-light-text-color",e.foreground.toString())}else this.style.removeProperty("--hue-light-background"),this.style.removeProperty("--hue-light-text-color");const t=xt.calculateDefaultShadow(this,this.lightContainer,!1);this.style.setProperty("--hue-light-box-shadow",t)}}lightUpdated(){this.requestUpdate()}render(){var t;if(!this.lightContainer)return I``;const e=this.lightContainer.getTitle().resolveToString(null),i=null!==(t=this.lightContainer.getIcon())&&void 0!==t?t:bt.DefaultOneIcon;return I`
        <div class='hue-tile light' title='${e}'>
            <div class='icon-slot'>
                <ha-icon icon="${i}"></ha-icon>
            </div>
            <div class='title'>
                <span>${e}</span>
            </div>
            <div class='switch'>
                ${xt.createSwitch(this.lightContainer,(()=>{}))}
            </div>
        </div>
        `}};var Ft;Mt.ElementName=Nt.ElementName+"-light",Mt.titlePadding=10,Mt.switchHeight=45,t([ht()],Mt.prototype,"lightContainer",void 0),t([ht()],Mt.prototype,"defaultColor",void 0),Mt=Vt=t([at(Vt.ElementName)],Mt);let jt=Ft=class extends Ut{constructor(t,e){super("HueDialog"),this._isRendered=!1,this._onHistoryBackListener=()=>this.close(),this._backdropSet=!1,this._config=t,this._ctrl=e}onLightControllerChanged(t){"hass"==t&&this.requestUpdate()}show(){if(this._isRendered)throw new Error("Already rendered!");window.history.pushState({dialog:"hue-dialog",open:!0},""),window.addEventListener("popstate",this._onHistoryBackListener),document.body.appendChild(this),this._ctrl.registerOnPropertyChanged(this._id,(t=>this.onLightControllerChanged(t)))}close(){if(!this._isRendered)return;const t=this.getDialogElement();t&&t.close?t.close():this.onDialogClose()}getDialogElement(){return this._isRendered?this.renderRoot.querySelector("ha-dialog"):null}onDialogClose(){this._isRendered&&(this.remove(),window.removeEventListener("popstate",this._onHistoryBackListener),this._ctrl.unregisterOnPropertyChanged(this._id),this._isRendered=!1)}static get styles(){return[Ft.haStyleDialog,a`
    /* icon centering */
    .mdc-icon-button i,
    .mdc-icon-button svg,
    .mdc-icon-button img,
    .mdc-icon-button ::slotted(*){
        height:auto;
    }

    /* same color header */
    .heading {
        --hue-heading-text-color: var(--hue-text-color, ${n(bt.ThemeDialogHeadingColorVar)});
        color:var(--hue-heading-text-color);
        background:var(--hue-background, ${n(bt.ThemeCardBackgroundVar)} );
        box-shadow:var(--hue-box-shadow), 0px 5px 10px rgba(0,0,0,0.5);
        transition:${n(bt.TransitionDefault)};

        border-bottom-left-radius: var(--ha-dialog-border-radius, 28px);
        border-bottom-right-radius: var(--ha-dialog-border-radius, 28px);
        padding-bottom: calc(var(--ha-dialog-border-radius, 28px) / 2);

        overflow:hidden;

        /* is above the backdrop */
        z-index:1;
    }
    ha-header-bar {
        --mdc-theme-on-primary: var(--hue-heading-text-color);
        --mdc-theme-primary: transparent;
        flex-shrink: 0;
        display: block;
    }
    .heading ha-switch {
        margin-right: 10px;
    }
    .heading ha-slider {
        width: 100%;
    }
    /* Disable the bottom border radius */
    /* in default styles: --ha-border-radius=0 in this case */
    /*
    @media all and (max-width: 450px), all and (max-height: 500px) {
        border-bottom-left-radius: none;
        border-bottom-right-radius: none;
        padding-bottom: none;
    }
    */

    /* titles */
    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
    }
    .header .title{
        color: ${n(bt.ThemeSecondaryTextColorVar)};
        font-family: var(--paper-font-title_-_font-family);
        -webkit-font-smoothing: var( --paper-font-title_-_-webkit-font-smoothing );
        font-size: var(--paper-font-subhead_-_font-size);
        font-weight: var(--paper-font-title_-_font-weight);
        letter-spacing: var(--paper-font-title_-_letter-spacing);
        line-height: var(--paper-font-title_-_line-height);
    }

    .content {
        outline: none;
    }

    /* tiles - scenes, lights */
    .tile-scroller {
        display: flex;
        flex-flow: column;
        /*gap: ${Ft.tileGap}px;*/
        max-width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        padding: 0 ${Ft.haPadding}px;
        margin: 0 -${Ft.haPadding}px;
    }
    /* width */
    ::-webkit-scrollbar {
        height: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: transparent;
        /*background: #f1f1f1;*/
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: #888; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    @media screen and (max-width: 768px){
        ::-webkit-scrollbar {
            -webkit-appearance: none;
            height: 0px;
            background: transparent;
        }
    }

    .tiles {
        display: flex;
        flex-flow: row;
        gap: ${Ft.tileGap}px;
        margin-bottom: ${Ft.tileGap}px;
    }
    .tiles::after {
        /* Flex loosing right padding, when overflowing */
        content: '';
        min-width: ${Ft.haPadding-Ft.tileGap}px;
    }
        `]}updateStylesInner(t){var e,i,s,r;const o=this._config.getHueScreenBgColor();if(/*!configBgColor.isThemeColor() && */!this._backdropSet){const t=null===(i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("ha-dialog"))||void 0===i?void 0:i.shadowRoot;if(t){const e=t.querySelector(".mdc-dialog__surface");if(e){const t=document.createElement("div");t.id="hue-backdrop",t.style.position="absolute",t.style.width="100%",t.style.height="100%",t.style.background="var(--hue-background)";const i="linear-gradient(rgba(255, 255, 255, .25) 0%, transparent 70%)";t.style.mask=i,t.style.webkitMask=i,(t.style.mask||t.style.webkitMask)&&e.prepend(t),this._backdropSet=!0}}}if(t){St.applyTheme(this,this._ctrl.hass.themes,this._config.theme),St.setDialogThemeStyles(this,"--hue-screen-background",o.isThemeColor()||this._config.getOffColor().isThemeColor());let t=null,e=null;o.isThemeColor()||(t=o,e=t.getForeground(bt.DialogFgLightColor,bt.DarkColor,120),this.style.setProperty("--hue-screen-background",t.toString()),this.style.setProperty("--primary-text-color",e.toString()))}const n=this.renderRoot.querySelector(".heading");let a;if(this._config.wasOffColorSet){const t=this._config.getOffColor();a=t.isThemeColor()?null:new $t([t.getBaseColor()])}else a=new $t([new yt(bt.DialogOffColor)]);const l=xt.calculateBackAndForeground(this._ctrl,a,!0),h=xt.calculateDefaultShadow(n,this._ctrl,this._config.offShadow);h||this.requestUpdate(),this._config.hueBorders&&this.style.setProperty("--ha-dialog-border-radius",bt.HueBorderRadius+"px"),this.style.setProperty("--hue-background",null!==(r=null===(s=l.background)||void 0===s?void 0:s.toString())&&void 0!==r?r:bt.ThemeCardBackgroundVar),this.style.setProperty("--hue-box-shadow",h),null!=l.foreground?this.style.setProperty("--hue-text-color",l.foreground.toString()):this.style.removeProperty("--hue-text-color")}render(){this._isRendered=!0;const t=this._config.getTitle(this._ctrl).resolveToString(this._ctrl.hass),e=()=>{this.requestUpdate(),this.updateStylesInner(!1)};return vt`
        <ha-dialog
          open
          @closed=${this.onDialogClose}
          .heading=${t}
          hideActions
        >
          <div slot="heading" class="heading">
            <ha-header-bar>
              <ha-icon-button
                slot="navigationIcon"
                dialogAction="cancel"
              >
                <ha-icon
                  icon=${"mdi:close"}
                  style="height:auto"
                >
                </ha-icon>
              </ha-icon-button>
              <div
                slot="title"
                class="main-title"
                .title=${t}
              >
                ${t}
              </div>
              <div slot="actionItems">
              ${xt.createSwitch(this._ctrl,e)}
              </div>
            </ha-header-bar>
            ${xt.createSlider(this._ctrl,this._config,e)}
          </div>
          <div class="content" tabindex="-1" dialogInitialFocus>
            <div class='header'>
                <div class='title'>${this._config.resources.scenes}</div>
            </div>
            <div class='tile-scroller'>
                <div class='tiles'>
                    ${this._config.scenes.map(((e,i)=>i%2==1?vt``:vt`<${_t(Rt.ElementName)} .cardTitle=${t} .sceneConfig=${e} .hass=${this._ctrl.hass}></${_t(Rt.ElementName)}>`))}
                </div>
                <div class='tiles'>
                    ${this._config.scenes.map(((e,i)=>i%2==0?vt``:vt`<${_t(Rt.ElementName)} .cardTitle=${t} .sceneConfig=${e} .hass=${this._ctrl.hass}></${_t(Rt.ElementName)}>`))}
                </div>
            </div>

            <div class='header'>
                <div class='title'>${this._config.resources.lights}</div>
            </div>
            <div class='tile-scroller'>
                <div class='tiles'>
                    ${this._ctrl.getLights().map((e=>vt`<${_t(Mt.ElementName)} .cardTitle=${t} .lightContainer=${e} .defaultColor=${this._config.getDefaultColor()} .hass=${this._ctrl.hass}></${_t(Mt.ElementName)}>`))}
                </div>
            </div>
          </div>
        </ha-dialog>
        `}firstUpdated(t){super.firstUpdated(t),this.updateStylesInner(!0)}updated(t){super.updated(t),this.updateStylesInner(!1)}};jt.ElementName=bt.CardElementName+"-hue-dialog",jt.haStyleDialog=a`
    /* mwc-dialog (ha-dialog) styles */
    ha-dialog {
      --mdc-dialog-min-width: 400px;
      --mdc-dialog-max-width: 600px;
      --mdc-dialog-heading-ink-color: var(--primary-text-color);
      --mdc-dialog-content-ink-color: var(--primary-text-color);
      --justify-action-buttons: space-between;
    }
    ha-dialog .form {
      color: var(--primary-text-color);
    }
    a {
      color: var(--primary-color);
    }
    /* make dialog fullscreen on small screens */
    @media all and (max-width: 450px), all and (max-height: 500px) {
      ha-dialog {
        --mdc-dialog-min-width: calc(
          100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
        );
        --mdc-dialog-max-width: calc(
          100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
        );
        --mdc-dialog-min-height: 100%;
        --mdc-dialog-max-height: 100%;
        --vertical-align-dialog: flex-end;
        --ha-dialog-border-radius: 0px;
      }
    }
    mwc-button.warning {
      --mdc-theme-primary: var(--error-color);
    }
    .error {
      color: var(--error-color);
    }
  `,jt.tileGap=10,jt.haPadding=24,jt=Ft=t([at(Ft.ElementName)],jt);class zt{constructor(t,e,i){this._config=t,this._ctrl=e,this._el=i}handleClick(){const t=this._ctrl.isOn();let e=t?this._config.onClickAction:this._config.offClickAction;const i=t?this._config.onClickData:this._config.offClickData;e==Pt.Default&&(e=t?this.resolveDefaultWhenOn():this.resolveDefaultWhenOff()),this.executeClickAction(e,i)}resolveDefaultWhenOn(){return this._config.scenes.length?Pt.HueScreen:1==this._ctrl.count?Pt.MoreInfo:Pt.TurnOff}resolveDefaultWhenOff(){return 1==this._ctrl.count?Pt.MoreInfo:this._config.scenes.length?Pt.HueScreen:Pt.TurnOn}executeClickAction(t,e){switch(t){case Pt.NoAction:break;case Pt.TurnOn:this._ctrl.turnOn();break;case Pt.TurnOff:this._ctrl.turnOff();break;case Pt.MoreInfo:let i=e.getData("entity");i||(i=this._ctrl.isOn()?this._ctrl.getLitLights()[0].getEntityId():this._config.getEntities()[0]),function(t,e,i,s){s=s||{},i=null==i?{}:i;var r=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});r.detail=i,t.dispatchEvent(r)}(this._el,"hass-more-info",{entityId:i});break;case Pt.Scene:const s=e.getData("scene");if(!s)throw new Error("No scene for click defined.");const r=new It(s);r.hass=this._ctrl.hass,r.activate();break;case Pt.HueScreen:new jt(this._config,this._ctrl).show();break;case Pt.Default:throw new Error("Cannot execute Default action");default:throw new Error(`Cannot executed unwknow action ${t}.`)}}}class qt{constructor(t){this._attribute=null;const e=(t=t.trim()).indexOf("."),i=t.lastIndexOf(".");e!=i?(this._textOrEntity=t.substring(0,i),this._attribute=t.substring(i+1)):this._textOrEntity=t}resolveToString(t){if(t){const e=t.states[this._textOrEntity];if(!e)return"MISS["+this._textOrEntity+"]";if(this._attribute&&e.attributes){const t=e.attributes[this._attribute];if(t)return t.toString()}return e.state}return""}}class Wt{constructor(t){this._text=t}resolveToString(t=null){return this._text}toString(){return this.resolveToString()}}class Gt{constructor(t){this._templateParts=Gt.parseTemplate(t)}resolveToString(t){if(1==this._templateParts.length)return this._templateParts[0].resolveToString(t);let e="";return this._templateParts.forEach((i=>{e+=i.resolveToString(t)})),e}static parseTemplate(t){const e=new Array;let i=0,s=!1;for(;i<t.length;){let r;if(s){if(r=t.indexOf("}}",i),r<0)break;const o=t.substring(i,r);e.push(new qt(o)),s=!1}else{if(r=t.indexOf("{{",i),r<0)break;const o=t.substring(i,r);e.push(new Wt(o)),s=!0}i=r+2}if(s&&(i-=2),i<t.length){const s=t.substring(i);e.push(new Wt(s))}return e}}var Qt;!function(t){t.unknown="unknown",t.onoff="onoff",t.brightness="brightness",t.color_temp="color_temp",t.hs="hs",t.xy="xy",t.rgb="rgb",t.rgbw="rgbw",t.rgbww="rgbww",t.white="white"}(Qt||(Qt={}));class Zt{constructor(t){if(this.brightness=!1,this.colorTemp=!1,this.color=!1,null!=t.attributes.supported_color_modes&&0!=t.attributes.supported_color_modes.length)for(const e of t.attributes.supported_color_modes)switch(e){case Qt.onoff:return;case Qt.brightness:return void(this.brightness=!0);case Qt.color_temp:this.brightness=!0,this.colorTemp=!0;break;case Qt.hs:case Qt.xy:case Qt.rgb:case Qt.rgbw:case Qt.rgbww:this.brightness=!0,this.color=!0}}}class Kt{constructor(t){this._features=t}get brightness(){return this._features().some((t=>t.brightness))}get colorTemp(){return this._features().some((t=>t.colorTemp))}get color(){return this._features().some((t=>t.color))}}class Jt{constructor(t,e=!1){this.value=t,this.dontCache=e}}class Xt{constructor(t){this._factories={},this._lastValues={},this._cacheInterval=t}registerProperty(t,e){this._factories[t]=e,delete this._lastValues[t]}setValue(t,e){this.ensureExists(t),this._lastValues[t]=this.createCacheItem(e)}getValue(t){this.ensureExists(t);const e=(new Date).getTime(),i=this._lastValues[t];if(i&&e-i.time<this._cacheInterval)return i.value;let s=this._factories[t](),r=!1;if(s instanceof Jt){const t=s;s=t.value,r=t.dontCache}return r||this.setValue(t,s),s}ensureExists(t){if(!this._factories[t])throw Error(`Property with name ${t} is not registered in TimeCache.`)}createCacheItem(t){return{value:t,time:(new Date).getTime()}}}class Yt{constructor(){this._propertyChangedCallbacks={}}raisePropertyChanged(t){for(const e in this._propertyChangedCallbacks)this._propertyChangedCallbacks[e](t)}registerOnPropertyChanged(t,e){this._propertyChangedCallbacks[t]=e}unregisterOnPropertyChanged(t){delete this._propertyChangedCallbacks[t]}}class te extends Yt{constructor(t){super(),Tt(t,"light"),this._entity_id=t,this.initTimeCache()}set hass(t){this._hass=t,this._entity=this._hass.states[this._entity_id],this._entityFeatures=new Zt(this._entity),this.raisePropertyChanged("hass")}initTimeCache(){this._cache=new Xt(bt.TimeCacheInterval),this._cache.registerProperty("state",(()=>{var t;return new Jt(null===(t=this._entity)||void 0===t?void 0:t.state,this.getDontCacheState())})),this._cache.registerProperty("value",(()=>new Jt(this.valueGetFactory(),this.getDontCacheValue())))}getDontCacheState(){return!this._entity||"unavailable"==this._entity.state}getDontCacheValue(){return this.getDontCacheState()||null==this._entity.attributes.brightness}notifyTurnOn(){this._cache.setValue("state","on"),this._lastOnValue&&this._cache.setValue("value",this._lastOnValue)}notifyTurnOff(){this._cache.setValue("state","off"),this._cache.setValue("value",0)}notifyValueChanged(t){t>0&&(this._lastOnValue=t),this._cache.setValue("value",t),this._cache.setValue("state",t>0?"on":"off")}isUnavailable(){return"unavailable"==this._cache.getValue("state")}isOn(){return"on"==this._cache.getValue("state")}isOff(){return!this.isOn()}turnOn(){this.toggle(!0)}turnOff(){this.toggle(!1)}toggle(t){this.isUnavailable()||(t?this.notifyTurnOn():this.notifyTurnOff(),this._hass.callService("light",t?"turn_on":"turn_off",{entity_id:this._entity_id}))}valueGetFactory(){var t;if(this.isOff())return 0;const e=null!==(t=this._entity.attributes.brightness)&&void 0!==t?t:255;return this._lastOnValue=Math.round(e/255*100),this._lastOnValue}get value(){return this._cache.getValue("value")}set value(t){t<0?t=0:t>100&&(t=100),this.notifyValueChanged(t);const e=Math.round(t/100*255);this._hass.callService("light","turn_on",{entity_id:this._entity_id,brightness:e})}getIcon(){return this._entity&&this._entity.attributes.icon}getTitle(){var t;return new Wt(null!==(t=this._entity.attributes.friendly_name)&&void 0!==t?t:this._entity_id)}getBackground(){const t=this._entity.attributes.rgb_color;if(!t)return this._lastBackground?this._lastBackground:null;const e=new yt(t[0],t[1],t[2]);return this._lastBackground=new $t([e]),new $t([this._lastBackground])}getEntityId(){return this._entity_id}get features(){return this._entityFeatures}}class ee{static getLightContainer(t){let e=this._containers[t];return e||(e=new te(t),this._containers[t]=e),e}}ee._containers={};class ie extends Yt{constructor(t,e){if(super(),!t.length)throw new Error('No entity specified (use "entity" and/or "entities").');this._defaultColor=e,this._lights=t.map((t=>ee.getLightContainer(t))),this._lightsFeatures=new Kt((()=>this._lights.map((t=>t.features))))}get count(){return this._lights.length}getLitLights(){return this._lights.filter((t=>t.isOn()))}getLights(){return this._lights.map((t=>t))}set hass(t){this._hass=t,this._lights.forEach((e=>e.hass=t)),this.raisePropertyChanged("hass")}get hass(){return this._hass}isOn(){return this._lights.some((t=>t.isOn()))}isOff(){return this._lights.every((t=>t.isOff()))}isUnavailable(){return this._lights.every((t=>t.isUnavailable()))}turnOn(){this._lights.filter((t=>t.isOff())).forEach((t=>t.turnOn()))}turnOff(){this._lights.filter((t=>t.isOn())).forEach((t=>t.turnOff()))}get value(){return this.valueGetFactory()}set value(t){const e=this._lights.filter((t=>t.isOn()));if(1==e.length)return void(e[0].value=t);if(0==e.length)return void this._lights.forEach((e=>e.value=t));const i=this.value,s=t-i,r=s>0?100-this.value:this.value,o=s/r;this._lights.filter((t=>t.isOn())).forEach((e=>{if(e.value==i)return void(e.value=t);const r=s>0?100-e.value:e.value,n=Math.round(r*o);let a=e.value+n;a<1&&t>0&&(a=1),e.value=a}))}valueGetFactory(){let t=0,e=0;if(this._lights.forEach((i=>{i.isOn()&&(e++,t+=i.value)})),0==e)return 0;return t/e*1}getIcon(){return this._lights.length>2?bt.DefaultMoreIcon:this._lights.length>1?bt.DefaultTwoIcon:this._lights[0].getIcon()||bt.DefaultOneIcon}getTitle(){let t="";for(let e=0;e<this._lights.length&&e<3;e++)e>0&&(t+=", "),t+=this._lights[e].getTitle();return this._lights.length>3&&(t+=", ..."),new Wt(t)}getBackground(){const t=this._lights.filter((t=>t.isOn())).map((t=>t.getBackground()||this._defaultColor));return 0==t.length?null:new $t(t)}getEntityId(){throw Error("Cannot get entity id from LightController")}get features(){return this._lightsFeatures}}class se{constructor(t){t=t||{},this.scenes=t.scenes||"My scenes",this.lights=t.lights||"Lights"}}class re{constructor(t){this.scenesLoaded=!1,this.entity=t.entity,this.entities=t.entities,this.title=t.title,this.icon=t.icon,this.showSwitch=re.getBoolean(t.showSwitch,!0),this._scenes=re.getScenesArray(t.scenes),this.offClickAction=re.getClickAction(t.offClickAction),this.offClickData=new Bt(t.offClickData),this.onClickAction=re.getClickAction(t.onClickAction),this.onClickData=new Bt(t.onClickData),this.allowZero=re.getBoolean(t.allowZero,!1),this.theme=t.theme||bt.ThemeDefault,this.defaultColor=t.defaultColor||bt.DefaultColor,this.offColor=t.offColor||bt.OffColor,this.wasOffColorSet=!!t.offColor,this.hueScreenBgColor=t.hueScreenBgColor||bt.DialogBgColor,null!=t.disableOffShadow&&console.warn("[HueLikeLightCard] Use 'offShadow' (with inverted value) property instead of deprecated 'disableOffShadow'"),this.offShadow=re.getBoolean(t.offShadow,!re.getBoolean(t.disableOffShadow,!1)),this.hueBorders=re.getBoolean(t.hueBorders,!0),this.resources=new se(t.resources)}static getBoolean(t,e){return null==t?e:!!t}static getClickAction(t){if(!t)return Pt.Default;let e="";for(const i in Pt){const s=Pt[i];if(t==s)return t;e+=`'${s}', `}throw new Error(`Click action '${t}' was not recognized. Allowed values are: ${e}`)}static getScenesArray(t){if(!t)return[];if(t.length>0){const e=new Array;for(let i=0;i<t.length;i++){const s=t[i],r=re.getScene(s,i);r&&e.push(r)}return e}return[]}static getScene(t,e){if("string"==typeof t)return new Lt(t);if(!t.entity)throw new Error(`Scene on index ${e} is missing 'entity' attribute, which is required.`);const i=new Lt(t.entity);return i.title=t.title,i.icon=t.icon,i.color=t.color,i.activation=t.activation,i.activationData=t.activationData,i}get scenes(){return this._scenes}get disableOffShadow(){return!this.offShadow}getTitle(t){return this.title?new Gt(this.title):t.getTitle()}getEntities(){const t=[];return this.entity&&t.push(this.entity),this.entities&&this.entities.forEach((e=>t.push(e))),t}getDefaultColor(){return Dt.getColor(this.defaultColor)}getOffColor(){return new wt(this.offColor)}getHueScreenBgColor(){return new wt(this.hueScreenBgColor)}async tryLoadScenes(t){if(!t)throw new Error("Hass instance must be passed!");if(0==this.scenes.length&&!this.scenesLoaded){this.scenesLoaded=!0;try{let e=new Array;await Promise.all(this.getEntities().map((async i=>{const s=await t.connection.sendMessagePromise({type:"search/related",item_type:"entity",item_id:i});s&&s.area&&s.area.length&&e.push(s.area[0])}))),e=Ot(e);let i=new Array;await Promise.all(e.map((async e=>{const s=await t.connection.sendMessagePromise({type:"search/related",item_type:"area",item_id:e});s&&s.scene&&s.scene.forEach((t=>i.push(t)))}))),i=Ot(i),this._scenes=re.getScenesArray(i)}catch(t){console.error("Cannot load scenes from HA."),console.error(t)}}}}console.info(`%cHUE-%cLIKE%c LIGHT%c CARD %c${bt.Version}`,"font-weight:bold;color:white;background:#0046FF","font-weight:bold;color:white;background:#9E00FF","font-weight:bold;color:white;background:#FF00F3","font-weight:bold;color:white;background:#FF0032","font-weight:bold;color:white;background:#FF8B00"),window.customCards=window.customCards||[],window.customCards.push({type:bt.CardElementName,name:bt.CardName,description:bt.CardDescription});let oe=class extends et{set hass(t){const e=this._hass;this._hass||this._config.tryLoadScenes(t),this._hass=t,this._ctrl.hass=t,this.requestUpdate(At(this,"hass"),e)}get hass(){return this._hass}async setConfig(t){const e=this._config;this._config=new re(t),this._ctrl=new ie(this._config.getEntities(),this._config.getDefaultColor()),this._clickHandler=new zt(this._config,this._ctrl,this);const i=this._config.getOffColor();i.isThemeColor()?this._offBackground=null:this._offBackground=new $t([i.getBaseColor()]),this.requestUpdate("_config",e)}getCardSize(){return 3}cardClicked(){this._clickHandler.handleClick(),this.updateStylesInner()}updated(t){if(super.updated(t),this.updateStylesInner(),!this._config||!this.hass)return;const e=t.get("hass"),i=t.get("_config");e&&i&&e.themes===this.hass.themes&&i.theme===this._config.theme||St.applyTheme(this,this.hass.themes,this._config.theme)&&this.updateStylesInner(!0)}updateStylesInner(t=!1){var e,i,s,r;const o=this.renderRoot.querySelector("ha-card");if(!this._config.hueBorders&&(null==this.haShadow||t)){const t=document.createElement("ha-card");document.body.appendChild(t);const e=getComputedStyle(t);this.haShadow=e.boxShadow,t.remove(),"none"==this.haShadow&&(null==o?this.haShadow=null:o.classList.add("new-borders")),this.style.setProperty("--ha-default-shadow",this.haShadow)}null==this._offBackground&&St.detectThemeCardBackground(this,t);const n=xt.calculateBackAndForeground(this._ctrl,this._offBackground),a=xt.calculateDefaultShadow(o,this._ctrl,this._config.offShadow);this.style.setProperty("--hue-background",null!==(i=null===(e=n.background)||void 0===e?void 0:e.toString())&&void 0!==i?i:bt.ThemeCardBackgroundVar),this.style.setProperty("--hue-text-color",null!==(r=null===(s=n.foreground)||void 0===s?void 0:s.toString())&&void 0!==r?r:bt.ThemeSecondaryTextColorVar),this.style.setProperty("--ha-card-box-shadow",a),this.style.setProperty("--hue-box-shadow",a)}render(){const t=this._config.getTitle(this._ctrl).resolveToString(this._hass),e=this._config.showSwitch,i={"no-switch":!e},s=()=>{this.requestUpdate(),this.updateStylesInner()};return I`<ha-card>
            <div class="tap-area" @click="${()=>this.cardClicked()}">
                <ha-icon icon="${this._config.icon||this._ctrl.getIcon()}"></ha-icon>
                <h2 class="${nt(i)}">${t}</h2>
            </div>
            ${e?xt.createSwitch(this._ctrl,s):I``}

            ${xt.createSlider(this._ctrl,this._config,s)}
        </ha-card>`}firstUpdated(t){super.firstUpdated(t),this._config.hueBorders&&(this.renderRoot.querySelector("ha-card").className="hue-borders"),this.updated(t)}connectedCallback(){super.connectedCallback(),this.updateStylesInner()}};oe.styles=a`
    ha-card
    {
        height:80px;
        background:var(--hue-background);
        position:relative;
        box-shadow:var(--hue-box-shadow), var(--ha-default-shadow);
        background-origin: border-box;
    }
    ha-card.new-borders
    {
        /* since HA 2022.11 */
        box-shadow:var(--hue-box-shadow);
    }
    ha-card.hue-borders
    {
        border-radius:${bt.HueBorderRadius}px;
        box-shadow:var(--hue-box-shadow), ${n(bt.HueShadow)};
        border:none;
    }
    ha-card div.tap-area
    {
        height:48px; /* card(80) - slider(32) */
        cursor: pointer;
    }
    ha-icon
    {
        position:absolute;
        left:22px;
        top:17px;
        transform:scale(2);
        color:var(--hue-text-color);
        transition:${n(bt.TransitionDefault)};
    }
    h2
    {
        padding-top:0.5em;
        margin:0px 60px 0px 70px;
        min-height:22px;
        vertical-align:top;
        font-weight:400;
        text-overflow:ellipsis;
        overflow:hidden;
        white-space:nowrap;
        color:var(--hue-text-color);
        transition:${n(bt.TransitionDefault)};
    }
    h2.no-switch{
        margin-right:10px;
    }
    ha-switch
    {
        position:absolute;
        right:14px;
        top:22px;
    }
    ha-slider
    {
        position:absolute;
        bottom:0;
        width:100%;
    }
    `,oe=t([at(bt.CardElementName)],oe);export{oe as HueLikeLightCard};
