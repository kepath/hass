function t(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}var e,i;function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t}).apply(this,arguments)}!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(e||(e={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(i||(i={}));var r=function(t,e,i,r){void 0===r&&(r=!1),t._themes||(t._themes={});var n=e.default_theme;("default"===i||i&&e.themes[i])&&(n=i);var o=s({},t._themes);if("default"!==n){var a=e.themes[n];Object.keys(a).forEach((function(e){var i="--"+e;t._themes[i]="",o[i]=a[e]}))}if(t.updateStyles?t.updateStyles(o):window.ShadyCSS&&window.ShadyCSS.styleSubtree(t,o),r){var l=document.querySelector("meta[name=theme-color]");if(l){l.hasAttribute("default-content")||l.setAttribute("default-content",l.getAttribute("content"));var h=o["--primary-color"]||l.getAttribute("default-content");l.setAttribute("content",h)}}};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n=window,o=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),l=new WeakMap;class h{constructor(t,e,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=l.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&l.set(e,t))}return t}toString(){return this.cssText}}const c=t=>new h("string"==typeof t?t:t+"",void 0,a),d=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new h(i,t,a)},u=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return c(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var g;const f=window,p=f.trustedTypes,_=p?p.emptyScript:"",v=f.reactiveElementPolyfillSupport,m={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>e!==t&&(e==e||t==t),$={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:y};class w extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||$}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(u(t))}else void 0!==t&&e.push(u(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{o?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),s=n.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=$){var s;const r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:m).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=s.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:m;this._$El=r,this[r]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||y)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var b;w.finalized=!0,w.elementProperties=new Map,w.elementStyles=[],w.shadowRootOptions={mode:"open"},null==v||v({ReactiveElement:w}),(null!==(g=f.reactiveElementVersions)&&void 0!==g?g:f.reactiveElementVersions=[]).push("1.6.1");const C=window,S=C.trustedTypes,A=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,E="?"+x,k=`<${E}>`,O=document,T=(t="")=>O.createComment(t),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,H=t=>P(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,L=/>/g,U=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),N=/'/g,R=/"/g,V=/^(?:script|style|textarea|title)$/i,M=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),z=new WeakMap,q=O.createTreeWalker(O,129,null,!1),W=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":"",o=I;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(o.lastIndex=c,l=o.exec(i),null!==l);)c=o.lastIndex,o===I?"!--"===l[1]?o=B:void 0!==l[1]?o=L:void 0!==l[2]?(V.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=U):void 0!==l[3]&&(o=U):o===U?">"===l[0]?(o=null!=r?r:I,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?U:'"'===l[3]?R:N):o===R||o===N?o=U:o===B||o===L?o=I:(o=U,r=void 0);const d=o===U&&t[e+1].startsWith("/>")?" ":"";n+=o===I?i+k:h>=0?(s.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+x+d):i+x+(-2===h?(s.push(void 0),e):d)}const a=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==A?A.createHTML(a):a,s]};class G{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,h]=W(t,e);if(this.el=G.createElement(l,i),q.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=q.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(x)){const i=h[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(x),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?X:"?"===e[1]?tt:"@"===e[1]?et:J})}else a.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(V.test(s.tagName)){const t=s.textContent.split(x),e=t.length-1;if(e>0){s.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],T()),q.nextNode(),a.push({type:2,index:++r});s.append(t[e],T())}}}else if(8===s.nodeType)if(s.data===E)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(x,t+1));)a.push({type:7,index:r}),t+=x.length-1}r++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,s){var r,n,o,a;if(e===F)return e;let l=void 0!==s?null===(r=i._$Co)||void 0===r?void 0:r[s]:i._$Cl;const h=D(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(o=(a=i)._$Co)&&void 0!==o?o:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=Q(t,l._$AS(t,e.values),l,s)),e}class Z{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:O).importNode(i,!0);q.currentNode=r;let n=q.nextNode(),o=0,a=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new K(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new it(n,this,t)),this.u.push(e),l=s[++a]}o!==(null==l?void 0:l.index)&&(n=q.nextNode(),o++)}return r}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{constructor(t,e,i,s){var r;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),D(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==F&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):H(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==j&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=G.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.p(i);else{const t=new Z(r,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new G(t)),e}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new K(this.O(T()),this.O(T()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class J{constructor(t,e,i,s,r){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=Q(this,t,e,0),n=!D(t)||t!==this._$AH&&t!==F,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=Q(this,s[i+o],e,o),a===F&&(a=this._$AH[o]),n||(n=!D(a)||a!==this._$AH[o]),a===j?t=j:t!==j&&(t+=(null!=a?a:"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class X extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}const Y=S?S.emptyScript:"";class tt extends J{constructor(){super(...arguments),this.type=4}j(t){t&&t!==j?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class et extends J{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Q(this,t,e,0))&&void 0!==i?i:j)===F)return;const s=this._$AH,r=t===j&&s!==j||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==j&&(s===j||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const st={P:"$lit$",A:x,M:E,C:1,L:W,R:Z,D:H,V:Q,I:K,H:J,N:tt,U:et,B:X,F:it},rt=C.litHtmlPolyfillSupport;null==rt||rt(G,K),(null!==(b=C.litHtmlVersions)&&void 0!==b?b:C.litHtmlVersions=[]).push("2.6.1");const nt=(t,e,i)=>{var s,r;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=n._$litPart$;if(void 0===o){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new K(e.insertBefore(T(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */};var ot,at;class lt extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=nt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return F}}lt.finalized=!0,lt._$litElement$=!0,null===(ot=globalThis.litElementHydrateSupport)||void 0===ot||ot.call(globalThis,{LitElement:lt});const ht=globalThis.litElementPolyfillSupport;null==ht||ht({LitElement:lt}),(null!==(at=globalThis.litElementVersions)&&void 0!==at?at:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=1,dt=t=>(...e)=>({_$litDirective$:t,values:e});class ut{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=dt(class extends ut{constructor(t){var e;if(super(t),t.type!==ct||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,s;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.nt.add(t);return this.render(e)}const r=t.element.classList;this.nt.forEach((t=>{t in e||(r.remove(t),this.nt.delete(t))}));for(const t in e){const i=!!e[t];i===this.nt.has(t)||(null===(s=this.st)||void 0===s?void 0:s.has(t))||(i?(r.add(t),this.nt.add(t)):(r.remove(t),this.nt.delete(t)))}return F}}),ft=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,pt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _t(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):pt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var vt;null===(vt=window.HTMLSlotElement)||void 0===vt||vt.prototype.assignedElements;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const mt=Symbol.for(""),yt=t=>{if((null==t?void 0:t.r)===mt)return null==t?void 0:t._$litStatic$},$t=t=>({_$litStatic$:t,r:mt}),wt=new Map,bt=(t=>(e,...i)=>{const s=i.length;let r,n;const o=[],a=[];let l,h=0,c=!1;for(;h<s;){for(l=e[h];h<s&&void 0!==(n=i[h],r=yt(n));)l+=r+e[++h],c=!0;a.push(n),o.push(l),h++}if(h===s&&o.push(e[s]),c){const t=o.join("$$lit$$");void 0===(e=wt.get(t))&&(o.raw=o,wt.set(t,e=o)),i=a}return t(e,...i)})(M),{I:Ct}=st,St=(t,e)=>void 0===e?void 0!==(null==t?void 0:t._$litType$):(null==t?void 0:t._$litType$)===e,At=()=>document.createComment(""),xt=(t,e,i)=>{var s;const r=t._$AA.parentNode,n=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=r.insertBefore(At(),n),s=r.insertBefore(At(),n);i=new Ct(e,s,t,t.options)}else{const e=i._$AB.nextSibling,o=i._$AM,a=o!==t;if(a){let e;null===(s=i._$AQ)||void 0===s||s.call(i,t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==o._$AU&&i._$AP(e)}if(e!==n||a){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;r.insertBefore(t,n),t=e}}}return i},Et={},kt=(t,e=Et)=>t._$AH=e,Ot=t=>t._$AH,Tt=dt(class extends ut{constructor(t){super(t),this.et=new WeakMap}render(t){return[t]}update(t,[e]){if(St(this.it)&&(!St(e)||this.it.strings!==e.strings)){const e=Ot(t).pop();let i=this.et.get(this.it.strings);if(void 0===i){const t=document.createDocumentFragment();i=nt(j,t),i.setConnected(!1),this.et.set(this.it.strings,i)}kt(i,[e]),xt(i,void 0,e)}if(St(e)){if(!St(this.it)||this.it.strings!==e.strings){const i=this.et.get(e.strings);if(void 0!==i){const e=Ot(i).pop();(t=>{t._$AR()})(t),xt(t,void 0,e),kt(t,[e])}}this.it=e}else this.it=void 0;return this.render(e)}});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Dt{constructor(t,e,i,s=1){"string"==typeof t?(this.parse(t),this._opacity=null!=e?e:1):(this._red=t,this._green=null!=e?e:0,this._blue=null!=i?i:0,this._opacity=s)}getOpacity(){return this._opacity}getLuminance(){return.299*this._red+.587*this._green+.114*this._blue}getForeground(t,e,i){return this.getLuminance()+i<Dt.LuminanceBreakingPoint?t:e}parse(t,e=!0){if(t.startsWith("#"))if(3==(t=t.substring(1)).length)this._red=parseInt(t.substring(0,1)+t.substring(0,1),16),this._green=parseInt(t.substring(1,2)+t.substring(1,2),16),this._blue=parseInt(t.substring(2,3)+t.substring(2,3),16);else{if(6!=t.length)throw new Error("Hex color format should have 3 or 6 letters");this._red=parseInt(t.substring(0,2),16),this._green=parseInt(t.substring(2,4),16),this._blue=parseInt(t.substring(4,6),16)}else{if(!t.startsWith("rgb")){if(e){const e=document.createElement("canvas").getContext("2d");if(null!=e)return e.fillStyle=t,void this.parse(e.fillStyle,!1)}throw new Error("Unrecognized color format: "+t)}{const e=t.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,?\s*(\d*(?:\.\d+\s*)?)\)$/);if(!e)throw new Error("Unrecognized color format rgb[a]: "+t);this._red=parseInt(e[1]),this._green=parseInt(e[2]),this._blue=parseInt(e[3])}}}toString(){return this._opacity<1?`rgba(${this._red}, ${this._green}, ${this._blue}, ${this._opacity})`:`rgb(${this._red}, ${this._green}, ${this._blue})`}}Dt.LuminanceBreakingPoint=192;class Pt{}Pt.Version="v1.2.1",Pt.Dev=!1,Pt.CardElementName=Pt.Dev?"hue-like-light-card-test":"hue-like-light-card",Pt.CardName="Hue-Like Light Card",Pt.CardDescription="Hue-like way to control your lights",Pt.HueBorderRadius=10,Pt.HueShadow="0px 2px 3px rgba(0,0,0,0.85)",Pt.LightColor=new Dt("#fff"),Pt.LightOffColor=new Dt("#fff",.85),Pt.DarkColor=new Dt(0,0,0,.7),Pt.DarkOffColor=new Dt(0,0,0,.5),Pt.WarmColor="#ffda95",Pt.ColdColor="#f5f5ff",Pt.DefaultColor="warm",Pt.OffColor="#666",Pt.DialogBgColor="#171717",Pt.DialogFgLightColor=new Dt("#aaa"),Pt.DialogOffColor="#363636",Pt.GradientOffset=10,Pt.DefaultOneIcon="mdi:lightbulb",Pt.DefaultTwoIcon="mdi:lightbulb-multiple",Pt.DefaultMoreIcon="mdi:lightbulb-group",Pt.TimeCacheInterval=1500,Pt.ThemeCardBackgroundVar="var(--card-background-color, var(--paper-card-background-color, --primary-background-color))",Pt.ThemePrimaryTextColorVar="var(--primary-text-color)",Pt.ThemeSecondaryTextColorVar="var(--secondary-text-color)";class Ht extends Dt{constructor(t){t==Ht.themeColor?(super(0,0,0),this._isThemeColor=!0):(super(t),this._isThemeColor=!1)}getBaseColor(){if(this._isThemeColor)throw new Error("Cannot getBaseColor on "+Ht.themeColor);return new Dt(this._red,this._green,this._blue)}isThemeColor(){return this._isThemeColor}getLuminance(){if(this._isThemeColor)throw new Error("Cannot getLuminance on "+Ht.themeColor);return super.getLuminance()}getForeground(t,e,i){if(this._isThemeColor)throw new Error("Cannot getLuminance on "+Ht.themeColor);return super.getForeground(t,e,i)}toString(){return this._isThemeColor?"var(--"+Ht.themeColor+")":super.toString()}}Ht.themeColor="theme-color";class It{constructor(t){if(!((null==t?void 0:t.length)>0))throw new Error("At least one background or color is needed for new Background(...).");this._colors=t.flatMap((t=>{if(t instanceof Ht)throw new Error("ColorExtended cannot be used in Background. Resolve it first.");if(t instanceof Dt)return[t];if(t instanceof It)return t._colors;throw new Error("Only array of Colors or Backgrounds is supported for new Background(...).")})),this._colors.sort(((t,e)=>t.getLuminance()-e.getLuminance()))}getForeground(t,e,i){if(this._colors.length<3)return this._colors[0].getForeground(t,e,i);let s=0;for(let t=0;t<this._colors.length/2;t++)this._colors[t].getForeground(!0,!1,i)&&s++;return s>this._colors.length/4?t:e}toString(){if(1==this._colors.length)return this._colors[0].toString();const t=100/(this._colors.length-1),e=Pt.GradientOffset;let i=`${this._colors[0]} 0%, ${this._colors[0]} ${e}%`,s=0;for(let r=1;r<this._colors.length;r++)s+=t,r+1==this._colors.length&&(i+=`, ${this._colors[r]} ${100-e}%`),i+=`, ${this._colors[r]} ${Math.round(s)}%`;return`linear-gradient(90deg, ${i})`}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt=dt(class extends ut{constructor(t){var e;if(super(t),t.type!==ct||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.vt){this.vt=new Set;for(const t in e)this.vt.add(t);return this.render(e)}this.vt.forEach((t=>{null==e[t]&&(this.vt.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const s=e[t];null!=s&&(this.vt.add(t),t.includes("-")?i.setProperty(t,s):i[t]=s)}return F}});class Lt{static getSwitchThemeStyle(){return{"--switch-checked-button-color":"var(--primary-color)","--switch-checked-track-color":"var(--dark-primary-color)"}}static setDialogThemeStyles(t,e){t.style.setProperty("--mdc-theme-surface",`var(${e}, ${Pt.ThemeCardBackgroundVar})`)}}class Ut{static createSwitch(t,e){const i=Lt.getSwitchThemeStyle();return M`<ha-switch
        .checked=${t.isOn()}
        .disabled=${t.isUnavailable()}
        .haptic=true
        style=${Bt(i)}
        @change=${i=>this.changed(t,e,!1,i)}
        ></ha-switch>`}static createSlider(t,e,i,s=M``){const r=e.allowZero?0:1;return M`<ha-slider .min=${r} .max=${100} .step=${1} .disabled=${e.allowZero?t.isUnavailable():t.isOff()} .value=${t.value}
        pin @change=${e=>this.changed(t,i,!0,e)}
        ignore-bar-touch
        ${s}
        ></ha-slider>`}static changed(t,e,i,s){const r=s.target;if(r){if(i){const e=r.value;null!=e&&(t.value=parseInt(e))}else{r.checked?t.turnOn():t.turnOff()}e()}}static calculateBackAndForeground(t,e,i=!0){const s=t.isOff()?e:t.getBackground()||e;let r;if(null==s)r=null;else{r=this.calculateForeground(t,s,i).foreground}return{background:s,foreground:r}}static calculateForeground(t,e,i=!0){let s=t.value;i||(s=100);const r=t.isOn()&&s>50?-(10-(s-50)/5):0;let n=t.isOn()&&s<=50?Pt.LightColor:e.getForeground(Pt.LightColor,Pt.DarkColor,r);return t.isOff()&&(n=n==Pt.DarkColor?Pt.DarkOffColor:Pt.LightOffColor),{foreground:n,opacity:1}}static calculateDefaultShadow(t,e,i){if(e.isOff())return i.disableOffShadow?"0px 0px 0px white":"inset 0px 0px 10px rgba(0,0,0,0.2)";const s=t;if(!s||!s.clientHeight)return"";const r=100-e.value,n=20+.95*r*(s.clientHeight/100);let o=s.clientHeight/2;r>70&&(o-=(o-20)*(r-70)/30);let a=.65;return r>60&&(a-=(a-.5)*(r-60)/40),`inset 0px -${n}px ${o}px -20px rgba(0,0,0,${a})`}}class Nt{constructor(t,e){this._waitAfter=e,this._action=t}get action(){return this._action}get waitAfter(){return this._waitAfter}}class Rt{constructor(){this._queue=new Array,this._currentEffectId=null}get currentEffectId(){return this._currentEffectId}addEffect(t,e){const i=new Nt(e,t);this._queue.push(i)}start(){let t=0;const e=()=>{this.planEffect(++t,e)};this.planEffect(t,e)}stop(){this._currentEffectId&&(clearTimeout(this._currentEffectId),this._currentEffectId=null)}stopAndClear(){this.stop(),this._queue.length=0}planEffect(t,e=null){if(t>=this._queue.length)return void(this._currentEffectId=null);const i=this._queue[t];this._currentEffectId=setTimeout((()=>{i.action(),e&&e()}),i.waitAfter)}}function Vt(t,e){return null!=e?e:t}function Mt(t,e,...i){i.unshift(e);const s=t.split(".")[0];if(i.indexOf(s)<0)throw new Error(`Unsupported entity type: ${s} (in '${t}'). Supported type(s): '${i.join("', '")}'.`)}function Ft(t){return t.filter((function(t,e,i){return e===i.indexOf(t)}))}class jt{static getColor(t){switch(t){case"warm":return new Dt(Pt.WarmColor);case"cold":return new Dt(Pt.ColdColor);default:return new Dt(t)}}}var zt,qt;!function(t){t.Default="default",t.NoAction="none",t.TurnOn="turn-on",t.TurnOff="turn-off",t.MoreInfo="more-info",t.Scene="scene",t.HueScreen="hue-screen"}(zt||(zt={}));class Wt{constructor(t){"string"==typeof t?this._onlyValue=t:t instanceof Wt?(this._onlyValue=t._onlyValue,this._valueStore=t._valueStore):this._valueStore=t||{}}getData(t){return this._onlyValue?this._onlyValue:this._valueStore[t]}}class Gt{constructor(t){Mt(t,"scene"),this.entity=t}getActivationService(){const t="scene.turn_on",e=this.activation||t,i=e.split(".");if(2!=i.length)throw new Error(`Unrecognized service '${e}'. The service should have 2 parts separated by '.' (dot). E.g.: '${t}'`);return i}getActivationData(){const t={entity_id:this.entity};if(this.activationData)for(const e in this.activationData)Object.prototype.hasOwnProperty.call(this.activationData,e)&&(t[e]=this.activationData[e]);return t}}class Qt{constructor(t){this._config="string"==typeof t?new Gt(t):t}set hass(t){this._hass=t,this._entity=this._hass.states[this._config.entity]}activate(){this.ensureHass();const t=this._config.getActivationService(),e=this._config.getActivationData();this._hass.callService(t[0],t[1],e)}getTitle(t){if(this.ensureHass(),this._config.title)return this._config.title;let e=this._entity.attributes.friendly_name;return t&&0==(null==e?void 0:e.toLowerCase().indexOf(t.toLowerCase()))&&(e=e.substring(t.length).trimStart()),e}getIcon(t=null){return this.ensureHass(),null!=this._config.icon?this._config.icon:this._entity.attributes.icon||t}getColor(){return this._config.color?jt.getColor(this._config.color):null}ensureHass(){if(!this._hass)throw new Error("Scene data not initialized - call setHass first!")}}let Zt=qt=class extends lt{constructor(){super(...arguments),this._effectQueue=new Rt}set hass(t){const e=this._hass;this._hass=t,this.updateHassDependentProps(),this.requestUpdate(Vt(this,"hass"),e)}set sceneConfig(t){const e=this._sceneConfig;this._sceneConfig=t,this._scene=new Qt(t),this.updateHassDependentProps(),this.requestUpdate(Vt(this,"sceneConfig"),e)}updateHassDependentProps(){this._hass&&this._scene&&(this._scene.hass=this._hass)}sceneClicked(){this._scene.activate(),this._effectQueue.stopAndClear();const t=this.renderRoot.querySelector(".scene");if(t){t.classList.remove("selected","unselected");const e=1e3*qt.animationSeconds;this._effectQueue.addEffect(0,(()=>t.classList.add("selected"))),this._effectQueue.addEffect(3e3,(()=>t.classList.add("unselected"))),this._effectQueue.addEffect(e,(()=>{t.classList.add("stop-color-animate"),t.classList.remove("selected")})),this._effectQueue.addEffect(50,(()=>{t.classList.remove("stop-color-animate","unselected")})),this._effectQueue.start()}}updated(){if(this._scene&&!this._sceneAccentColorSet){this._sceneAccentColorSet=!0;const t=this._scene.getColor();if(t){const e=t.getForeground(Pt.LightColor,Pt.DarkColor,20),i=t.getForeground(Pt.LightColor,new Dt("black"),20);this.style.setProperty("--hue-tile-accent-color",t.toString()),this.style.setProperty("--hue-tile-fg-color",e.toString()),this.style.setProperty("--hue-tile-fg-text-color",i.toString())}}}render(){return this._scene?this.renderScene():""}renderScene(){const t=this._scene.getTitle(this.cardTitle);return M`
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
        `}};var Kt;Zt.ElementName=Pt.CardElementName+"-hue-dialog-tile",Zt.padding=5,Zt.height=100,Zt.width=85,Zt.colorDimensions=qt.height/2,Zt.iconScale=.75*qt.colorDimensions/24,Zt.animationSeconds=1,Zt.styles=d`
    .hue-tile{
        background: ${c(Pt.OffColor)};
        width: ${qt.width}px;
        height: ${qt.height}px;
        padding: ${qt.padding}px;
        border-radius: ${Pt.HueBorderRadius}px;
        box-shadow: ${c(Pt.HueShadow)};
        overflow:hidden;
    }
    .scene {
        cursor: pointer;
    }
    .scene .icon-background {
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .scene .icon-background .color {
        background: var(--hue-tile-accent-color, lightslategray);
        height: ${qt.colorDimensions}px;
        width: ${qt.colorDimensions}px;
        border-radius: ${qt.colorDimensions/2}px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all ${qt.animationSeconds}s linear;
    }
    .scene .icon-background .color ha-icon {
        color: var(--hue-tile-fg-color, ${c(Pt.LightColor)});
        transform: scale(${qt.iconScale});
    }
    .scene.selected .icon-background .color {
        height: ${2*qt.height}px;
        width: ${2*qt.width}px;
        border-radius: ${qt.height}px;
        margin-left: -${2*qt.padding}px;
        margin-right: -${2*qt.padding}px;
    }
    .scene.selected .icon-background .color ha-icon{
        animation: pop-icon 0.5s linear 1;
    }
    .scene.unselected .icon-background .color {
        background: transparent;
    }
    .scene.stop-color-animate .icon-background .color {
        transition: none;
    }

    .scene .title {
        color:${c(Pt.LightColor)};
        font-size: 12px;
        line-height: 15px;
        font-weight:400;
        height:30%;
        text-align: center;
        display: flex;
        flex-flow: column;
        justify-content: center;
        transition: all ${qt.animationSeconds/2}s linear;
    }
    .scene .title span {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .scene.selected .title {
        color:var(--hue-tile-fg-text-color, ${c(Pt.LightColor)});
    }

    @keyframes pop-icon{
        50% { transform: scale(${2*qt.iconScale}); }
    }
    `,t([_t()],Zt.prototype,"cardTitle",void 0),Zt=qt=t([ft(qt.ElementName)],Zt);let Jt=Kt=class extends lt{constructor(t,e){super(),this._isRendered=!1,this._currTab=Kt.scenesTab,this._onHistoryBackListener=()=>this.close(),this._config=t,this._ctrl=e,this._id="HueDialog_"+Kt.maxDialogId++}onLightControllerChanged(t){"hass"==t&&this.requestUpdate()}show(){if(this._isRendered)throw new Error("Already rendered!");window.history.pushState({dialog:"hue-dialog",open:!0},""),window.addEventListener("popstate",this._onHistoryBackListener),document.body.appendChild(this),this._ctrl.registerOnPropertyChanged(this._id,(t=>this.onLightControllerChanged(t)))}close(){if(!this._isRendered)return;const t=this.getDialogElement();t&&t.close?t.close():this.onDialogClose()}getDialogElement(){return this._isRendered?this.renderRoot.querySelector("ha-dialog"):null}onDialogClose(){this._isRendered&&(this.remove(),window.removeEventListener("popstate",this._onHistoryBackListener),this._ctrl.unregisterOnPropertyChanged(this._id),this._isRendered=!1)}static get styles(){return[Kt.haStyleDialog,d`
        /* icon centering */
        .mdc-icon-button i,
        .mdc-icon-button svg,
        .mdc-icon-button img,
        .mdc-icon-button ::slotted(*){
            height:auto;
        }

        /* same color header */
        .heading {
            color:var(--hue-text-color, ${c(Pt.ThemePrimaryTextColorVar)});
            background:var(--hue-background, ${c(Pt.ThemeCardBackgroundVar)} );
            box-shadow:var(--hue-box-shadow), 0px 5px 10px rgba(0,0,0,0.5);
            transition:all 0.3s ease-out 0s;

            border-bottom-left-radius: var(--ha-dialog-border-radius, 28px);
            border-bottom-right-radius: var(--ha-dialog-border-radius, 28px);
            padding-bottom: calc(var(--ha-dialog-border-radius, 28px) / 2);

            overflow:hidden;
        }
        ha-header-bar {
            --mdc-theme-on-primary: var(--hue-text-color);
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
            color: ${c(Pt.ThemeSecondaryTextColorVar)};
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
            /*gap: ${Kt.tileGap}px;*/
            max-width: 100%;
            overflow-x: auto;
            overflow-y: hidden;
            padding: 0 ${Kt.haPadding}px;
            margin: 0 -${Kt.haPadding}px;
        }
        .tiles {
            display: flex;
            flex-flow: row;
            gap: ${Kt.tileGap}px;
            margin-bottom: ${Kt.tileGap}px;
        }
        .tiles::after {
            /* Flex loosing right padding, when overflowing */
            content: '';
            min-width: ${Kt.haPadding-Kt.tileGap}px;
        }
        `]}updateStylesInner(t){var e,i;if(t){r(this,this._ctrl.hass.themes,this._config.theme),Lt.setDialogThemeStyles(this,"--hue-screen-background");const t=this._config.getHueScreenBgColor();let e=null,i=null;t.isThemeColor()||(e=t,i=e.getForeground(Pt.DialogFgLightColor,Pt.DarkColor,120),this.style.setProperty("--hue-screen-background",e.toString()),this.style.setProperty("--primary-text-color",i.toString()))}const s=this.renderRoot.querySelector(".heading");let n;if(this._config.wasOffColorSet){const t=this._config.getOffColor();n=t.isThemeColor()?null:new It([t.getBaseColor()])}else n=new It([new Dt(Pt.DialogOffColor)]);const o=Ut.calculateBackAndForeground(this._ctrl,n,!0),a=Ut.calculateDefaultShadow(s,this._ctrl,this._config);a||this.requestUpdate(),this._config.hueBorders&&this.style.setProperty("--ha-dialog-border-radius",Pt.HueBorderRadius+"px"),this.style.setProperty("--hue-background",null!==(i=null===(e=o.background)||void 0===e?void 0:e.toString())&&void 0!==i?i:Pt.ThemeCardBackgroundVar),this.style.setProperty("--hue-box-shadow",a),null!=o.foreground?this.style.setProperty("--hue-text-color",o.foreground.toString()):this.style.removeProperty("--hue-text-color")}render(){this._isRendered=!0;const t=this._config.getTitle(this._ctrl).resolveToString(this._ctrl.hass),e=()=>{this.requestUpdate(),this.updateStylesInner(!1)};return bt`
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
              ${Ut.createSwitch(this._ctrl,e)}
              </div>
            </ha-header-bar>
            ${Ut.createSlider(this._ctrl,this._config,e)}
          </div>
          <div class="content" tabindex="-1" dialogInitialFocus>
            ${Tt(this._currTab===Kt.scenesTab?bt`
                    <div class='header'>
                        <div class='title'>${this._config.resources.scenes}</div>
                    </div>
                    <div class='tile-scroller'>
                        <div class='tiles'>
                            ${this._config.scenes.map(((e,i)=>i%2==1?bt``:bt`<${$t(Zt.ElementName)} .cardTitle=${t} .sceneConfig=${e} .hass=${this._ctrl.hass}></${$t(Zt.ElementName)}>`))}
                        </div>
                        <div class='tiles'>
                            ${this._config.scenes.map(((e,i)=>i%2==0?bt``:bt`<${$t(Zt.ElementName)} .cardTitle=${t} .sceneConfig=${e} .hass=${this._ctrl.hass}></${$t(Zt.ElementName)}>`))}
                        </div>
                    </div>
                  `:bt`
                    <h3>Here for Colors</h3>
                  `)}
            <!--
            <div class='header'>
                <div class='title'>${this._config.resources.lights}</div>
            </div>
            -->
          </div>
        </ha-dialog>
        `}firstUpdated(t){super.firstUpdated(t),this.updateStylesInner(!0)}updated(t){super.updated(t),this.updateStylesInner(!1)}};Jt.ElementName=Pt.CardElementName+"-hue-dialog",Jt.maxDialogId=1,Jt.colorsTab="colors",Jt.scenesTab="scenes",Jt.tabs=[Kt.colorsTab,Kt.scenesTab],Jt.haStyleDialog=d`
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
  `,Jt.tileGap=10,Jt.haPadding=24,t([function(t){return _t({...t,state:!0})}()],Jt.prototype,"_currTab",void 0),Jt=Kt=t([ft(Kt.ElementName)],Jt);class Xt{constructor(t,e,i){this._config=t,this._ctrl=e,this._el=i}handleClick(){const t=this._ctrl.isOn();let e=t?this._config.onClickAction:this._config.offClickAction;const i=t?this._config.onClickData:this._config.offClickData;e==zt.Default&&(e=t?this.resolveDefaultWhenOn():this.resolveDefaultWhenOff()),this.executeClickAction(e,i)}resolveDefaultWhenOn(){return this._config.scenes.length?zt.HueScreen:1==this._ctrl.count?zt.MoreInfo:zt.TurnOff}resolveDefaultWhenOff(){return 1==this._ctrl.count?zt.MoreInfo:this._config.scenes.length?zt.HueScreen:zt.TurnOn}executeClickAction(t,e){switch(t){case zt.NoAction:break;case zt.TurnOn:this._ctrl.turnOn();break;case zt.TurnOff:this._ctrl.turnOff();break;case zt.MoreInfo:let i=e.getData("entity");i||(i=this._ctrl.isOn()?this._ctrl.getLitLights()[0].getEntityId():this._config.getEntities()[0]),function(t,e,i,s){s=s||{},i=null==i?{}:i;var r=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});r.detail=i,t.dispatchEvent(r)}(this._el,"hass-more-info",{entityId:i});break;case zt.Scene:const s=e.getData("scene");if(!s)throw new Error("No scene for click defined.");const r=new Qt(s);r.hass=this._ctrl.hass,r.activate();break;case zt.HueScreen:new Jt(this._config,this._ctrl).show();break;case zt.Default:throw new Error("Cannot execute Default action");default:throw new Error(`Cannot executed unwknow action ${t}.`)}}}class Yt{constructor(t){this._attribute=null;const e=(t=t.trim()).indexOf("."),i=t.lastIndexOf(".");e!=i?(this._textOrEntity=t.substring(0,i),this._attribute=t.substring(i+1)):this._textOrEntity=t}resolveToString(t){if(t){const e=t.states[this._textOrEntity];if(!e)return"MISS["+this._textOrEntity+"]";if(this._attribute&&e.attributes){const t=e.attributes[this._attribute];if(t)return t.toString()}return e.state}return""}}class te{constructor(t){this._text=t}resolveToString(t=null){return this._text}toString(){return this.resolveToString()}}class ee{constructor(t){this._templateParts=ee.parseTemplate(t)}resolveToString(t){if(1==this._templateParts.length)return this._templateParts[0].resolveToString(t);let e="";return this._templateParts.forEach((i=>{e+=i.resolveToString(t)})),e}static parseTemplate(t){const e=new Array;let i=0,s=!1;for(;i<t.length;){let r;if(s){if(r=t.indexOf("}}",i),r<0)break;const n=t.substring(i,r);e.push(new Yt(n)),s=!1}else{if(r=t.indexOf("{{",i),r<0)break;const n=t.substring(i,r);e.push(new te(n)),s=!0}i=r+2}if(s&&(i-=2),i<t.length){const s=t.substring(i);e.push(new te(s))}return e}}class ie{constructor(t,e=!1){this.value=t,this.dontCache=e}}class se{constructor(t){this._factories={},this._lastValues={},this._cacheInterval=t}registerProperty(t,e){this._factories[t]=e,delete this._lastValues[t]}setValue(t,e){this.ensureExists(t),this._lastValues[t]=this.createCacheItem(e)}getValue(t){this.ensureExists(t);const e=(new Date).getTime(),i=this._lastValues[t];if(i&&e-i.time<this._cacheInterval)return i.value;let s=this._factories[t](),r=!1;if(s instanceof ie){const t=s;s=t.value,r=t.dontCache}return r||this.setValue(t,s),s}ensureExists(t){if(!this._factories[t])throw Error(`Property with name ${t} is not registered in TimeCache.`)}createCacheItem(t){return{value:t,time:(new Date).getTime()}}}class re{constructor(t){Mt(t,"light"),this._entity_id=t,this.initTimeCache()}set hass(t){this._hass=t,this._entity=this._hass.states[this._entity_id]}getAttributes(){return this._entity.attributes}initTimeCache(){this._cache=new se(Pt.TimeCacheInterval),this._cache.registerProperty("state",(()=>{var t;return new ie(null===(t=this._entity)||void 0===t?void 0:t.state,this.getDontCacheState())})),this._cache.registerProperty("value",(()=>new ie(this.valueGetFactory(),this.getDontCacheValue())))}getDontCacheState(){return!this._entity||"unavailable"==this._entity.state}getDontCacheValue(){return this.getDontCacheState()||null==this._entity.attributes.brightness}notifyTurnOn(){this._cache.setValue("state","on"),this._lastOnValue&&this._cache.setValue("value",this._lastOnValue)}notifyTurnOff(){this._cache.setValue("state","off"),this._cache.setValue("value",0)}notifyValueChanged(t){t>0&&(this._lastOnValue=t),this._cache.setValue("value",t),this._cache.setValue("state",t>0?"on":"off")}isUnavailable(){return"unavailable"==this._cache.getValue("state")}isOn(){return"on"==this._cache.getValue("state")}isOff(){return!this.isOn()}turnOn(){this.toggle(!0)}turnOff(){this.toggle(!1)}toggle(t){t?this.notifyTurnOn():this.notifyTurnOff(),this._hass.callService("light",t?"turn_on":"turn_off",{entity_id:this._entity_id})}valueGetFactory(){var t;if(this.isOff())return 0;const e=null!==(t=this.getAttributes().brightness)&&void 0!==t?t:1;return this._lastOnValue=Math.round(100*e/255),this._lastOnValue}get value(){return this._cache.getValue("value")}set value(t){t<0?t=0:t>100&&(t=100),this.notifyValueChanged(t);const e=Math.round(t/100*255);this._hass.callService("light","turn_on",{entity_id:this._entity_id,brightness:e})}getIcon(){return this._entity&&this._entity.attributes.icon}getTitle(){var t;return new te(null!==(t=this._entity.attributes.friendly_name)&&void 0!==t?t:this._entity_id)}getBackground(){const t=this.getAttributes().rgb_color;if(!t)return this._lastBackground?this._lastBackground:null;const e=new Dt(t[0],t[1],t[2]);return this._lastBackground=new It([e]),new It([this._lastBackground])}getEntityId(){return this._entity_id}}class ne{static getLightContainer(t){let e=this._containers[t];return e||(e=new re(t),this._containers[t]=e),e}}ne._containers={};class oe{constructor(){this._propertyChangedCallbacks={}}raisePropertyChanged(t){for(const e in this._propertyChangedCallbacks)this._propertyChangedCallbacks[e](t)}registerOnPropertyChanged(t,e){this._propertyChangedCallbacks[t]=e}unregisterOnPropertyChanged(t){delete this._propertyChangedCallbacks[t]}}class ae extends oe{constructor(t,e){if(super(),!t.length)throw new Error('No entity specified (use "entity" and/or "entities").');this._defaultColor=e,this._lights=t.map((t=>ne.getLightContainer(t)))}get count(){return this._lights.length}getLitLights(){return this._lights.filter((t=>t.isOn()))}set hass(t){this._hass=t,this._lights.forEach((e=>e.hass=t)),this.raisePropertyChanged("hass")}get hass(){return this._hass}isOn(){return this._lights.some((t=>t.isOn()))}isOff(){return this._lights.every((t=>t.isOff()))}isUnavailable(){return this._lights.every((t=>t.isUnavailable()))}turnOn(){this._lights.filter((t=>t.isOff())).forEach((t=>t.turnOn()))}turnOff(){this._lights.filter((t=>t.isOn())).forEach((t=>t.turnOff()))}get value(){return this.valueGetFactory()}set value(t){const e=this._lights.filter((t=>t.isOn()));if(1==e.length)return void(e[0].value=t);if(0==e.length)return void this._lights.forEach((e=>e.value=t));const i=this.value,s=t-i,r=s>0?100-this.value:this.value,n=s/r;this._lights.filter((t=>t.isOn())).forEach((e=>{if(e.value==i)return void(e.value=t);const r=s>0?100-e.value:e.value,o=Math.round(r*n);let a=e.value+o;a<1&&t>0&&(a=1),e.value=a}))}valueGetFactory(){let t=0,e=0;if(this._lights.forEach((i=>{i.isOn()&&(e++,t+=i.value)})),0==e)return 0;return t/e*1}getIcon(){return this._lights.length>2?Pt.DefaultMoreIcon:this._lights.length>1?Pt.DefaultTwoIcon:this._lights[0].getIcon()||Pt.DefaultOneIcon}getTitle(){let t="";for(let e=0;e<this._lights.length&&e<3;e++)e>0&&(t+=", "),t+=this._lights[e].getTitle();return this._lights.length>3&&(t+=", ..."),new te(t)}getBackground(){const t=this._lights.filter((t=>t.isOn())).map((t=>t.getBackground()||this._defaultColor));return 0==t.length?null:new It(t)}getEntityId(){throw Error("Cannot get entity id from LightController")}}class le{constructor(t){t=t||{},this.scenes=t.scenes||"Scenes",this.lights=t.lights||"Lights"}}class he{constructor(t){this.scenesLoaded=!1,this.entity=t.entity,this.entities=t.entities,this.title=t.title,this.icon=t.icon,this.showSwitch=he.getBoolean(t.showSwitch,!0),this._scenes=he.getScenesArray(t.scenes),this.offClickAction=he.getClickAction(t.offClickAction),this.offClickData=new Wt(t.offClickData),this.onClickAction=he.getClickAction(t.onClickAction),this.onClickData=new Wt(t.onClickData),this.allowZero=he.getBoolean(t.allowZero,!1),this.theme=t.theme||"default",this.defaultColor=t.defaultColor||Pt.DefaultColor,this.offColor=t.offColor||Pt.OffColor,this.wasOffColorSet=!!t.offColor,this.hueScreenBgColor=t.hueScreenBgColor||Pt.DialogBgColor,this.disableOffShadow=he.getBoolean(t.disableOffShadow,!1),this.hueBorders=he.getBoolean(t.hueBorders,!0),this.resources=new le(t.resources)}static getBoolean(t,e){return null==t?e:!!t}static getClickAction(t){if(!t)return zt.Default;let e="";for(const i in zt){const s=zt[i];if(t==s)return t;e+=`'${s}', `}throw new Error(`Click action '${t}' was not recognized. Allowed values are: ${e}`)}static getScenesArray(t){if(!t)return[];if(t.length>0){const e=new Array;for(let i=0;i<t.length;i++){const s=t[i],r=he.getScene(s,i);r&&e.push(r)}return e}return[]}static getScene(t,e){if("string"==typeof t)return new Gt(t);if(!t.entity)throw new Error(`Scene on index ${e} is missing 'entity' attribute, which is required.`);const i=new Gt(t.entity);return i.title=t.title,i.icon=t.icon,i.color=t.color,i.activation=t.activation,i.activationData=t.activationData,i}get scenes(){return this._scenes}getTitle(t){return this.title?new ee(this.title):t.getTitle()}getEntities(){const t=[];return this.entity&&t.push(this.entity),this.entities&&this.entities.forEach((e=>t.push(e))),t}getDefaultColor(){return jt.getColor(this.defaultColor)}getOffColor(){return new Ht(this.offColor)}getHueScreenBgColor(){return new Ht(this.hueScreenBgColor)}async tryLoadScenes(t){if(!t)throw new Error("Hass instance must be passed!");if(0==this.scenes.length&&!this.scenesLoaded){this.scenesLoaded=!0;try{let e=new Array;await Promise.all(this.getEntities().map((async i=>{const s=await t.connection.sendMessagePromise({type:"search/related",item_type:"entity",item_id:i});s&&s.area&&s.area.length&&e.push(s.area[0])}))),e=Ft(e);let i=new Array;await Promise.all(e.map((async e=>{const s=await t.connection.sendMessagePromise({type:"search/related",item_type:"area",item_id:e});s&&s.scene&&s.scene.forEach((t=>i.push(t)))}))),i=Ft(i),this._scenes=he.getScenesArray(i)}catch(t){console.error("Cannot load scenes from HA."),console.error(t)}}}}console.info(`%cHUE-%cLIKE%c LIGHT%c CARD %c${Pt.Version}`,"font-weight:bold;color:white;background:#0046FF","font-weight:bold;color:white;background:#9E00FF","font-weight:bold;color:white;background:#FF00F3","font-weight:bold;color:white;background:#FF0032","font-weight:bold;color:white;background:#FF8B00"),window.customCards=window.customCards||[],window.customCards.push({type:Pt.CardElementName,name:Pt.CardName,description:Pt.CardDescription});let ce=class extends lt{set hass(t){const e=this._hass;this._hass||this._config.tryLoadScenes(t),this._hass=t,this._ctrl.hass=t,this.requestUpdate(Vt(this,"hass"),e)}get hass(){return this._hass}async setConfig(t){const e=this._config;this._config=new he(t),this._ctrl=new ae(this._config.getEntities(),this._config.getDefaultColor()),this._clickHandler=new Xt(this._config,this._ctrl,this);const i=this._config.getOffColor();i.isThemeColor()?this._offBackground=null:this._offBackground=new It([i.getBaseColor()]),this.requestUpdate("_config",e)}getCardSize(){return 3}cardClicked(){this._clickHandler.handleClick(),this.updateStylesInner()}updated(t){if(super.updated(t),this.updateStylesInner(),!this._config||!this.hass)return;const e=t.get("hass"),i=t.get("_config");e&&i&&e.themes===this.hass.themes&&i.theme===this._config.theme||(r(this,this.hass.themes,this._config.theme),this.updateStylesInner(!0))}updateStylesInner(t=!1){var e,i,s,r;const n=this.renderRoot.querySelector("ha-card");if(!this._config.hueBorders&&(null==this.haShadow||t)){const t=document.createElement("ha-card");document.body.appendChild(t);const e=getComputedStyle(t);this.haShadow=e.boxShadow,t.remove(),"none"==this.haShadow&&(null==n?this.haShadow=null:n.classList.add("new-borders")),this.style.setProperty("--ha-default-shadow",this.haShadow)}const o=Ut.calculateBackAndForeground(this._ctrl,this._offBackground),a=Ut.calculateDefaultShadow(n,this._ctrl,this._config);this.style.setProperty("--hue-background",null!==(i=null===(e=o.background)||void 0===e?void 0:e.toString())&&void 0!==i?i:Pt.ThemeCardBackgroundVar),this.style.setProperty("--hue-text-color",null!==(r=null===(s=o.foreground)||void 0===s?void 0:s.toString())&&void 0!==r?r:Pt.ThemeSecondaryTextColorVar),this.style.setProperty("--ha-card-box-shadow",a),this.style.setProperty("--hue-box-shadow",a)}render(){const t=this._config.getTitle(this._ctrl).resolveToString(this._hass),e=this._config.showSwitch,i={"no-switch":!e},s=()=>{this.requestUpdate(),this.updateStylesInner()};return M`<ha-card>
            <div class="tap-area" @click="${()=>this.cardClicked()}">
                <ha-icon icon="${this._config.icon||this._ctrl.getIcon()}"></ha-icon>
                <h2 class="${gt(i)}">${t}</h2>
            </div>
            ${e?Ut.createSwitch(this._ctrl,s):M``}

            ${Ut.createSlider(this._ctrl,this._config,s)}
        </ha-card>`}firstUpdated(t){super.firstUpdated(t),this._config.hueBorders&&(this.renderRoot.querySelector("ha-card").className="hue-borders"),this.updated(t)}connectedCallback(){super.connectedCallback(),this.updateStylesInner()}};ce.styles=d`
    ha-card
    {
        height:80px;
        background:var(--hue-background);
        position:relative;
        box-shadow:var(--hue-box-shadow), var(--ha-default-shadow);
    }
    ha-card.new-borders
    {
        /* since HA 2022.11 */
        box-shadow:var(--hue-box-shadow);
    }
    ha-card.hue-borders
    {
        border-radius:${Pt.HueBorderRadius}px;
        box-shadow:var(--hue-box-shadow), ${c(Pt.HueShadow)};
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
        transition:all 0.3s ease-out 0s;
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
        transition:all 0.3s ease-out 0s;
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
    `,ce=t([ft(Pt.CardElementName)],ce);export{ce as HueLikeLightCard};
