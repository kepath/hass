function t(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new Map;class n{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=s.get(this.cssText);return e&&void 0===t&&(s.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const r=t=>new n("string"==typeof t?t:t+"",i),o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(s,i)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return r(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const h=window.trustedTypes,c=h?h.emptyScript:"",d=window.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:g};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=f){var s,n;const r=this.constructor._$Eh(t,i);if(void 0!==r&&!0===i.reflect){const o=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:u.toAttribute)(e,i.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,e){var i,s,n;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),a=t.converter,l=null!==(n=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==n?n:u.fromAttribute;this._$Ei=o,this[o]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:p}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.3.2");const v=globalThis.trustedTypes,m=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,$="?"+y,w=`<${$}>`,b=document,C=(t="")=>b.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,x=t=>{var e;return S(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,O=/>/g,D=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,T=/'/g,P=/"/g,H=/^(?:script|style|textarea|title)$/i,U=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),L=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),B=new WeakMap,N=(t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new q(e.insertBefore(C(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o},M=b.createTreeWalker(b,129,null,!1),R=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",o=E;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(o.lastIndex=c,l=o.exec(i),null!==l);)c=o.lastIndex,o===E?"!--"===l[1]?o=k:void 0!==l[1]?o=O:void 0!==l[2]?(H.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=D):void 0!==l[3]&&(o=D):o===D?">"===l[0]?(o=null!=n?n:E,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?D:'"'===l[3]?P:T):o===P||o===T?o=D:o===k||o===O?o=E:(o=D,n=void 0);const d=o===D&&t[e+1].startsWith("/>")?" ":"";r+=o===E?i+w:h>=0?(s.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+y+d):i+y+(-2===h?(s.push(void 0),e):d)}const a=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(a):a,s]};class V{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,h]=R(t,e);if(this.el=V.createElement(l,i),M.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=M.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(y)){const i=h[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(y),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?W:"?"===e[1]?Q:"@"===e[1]?Z:j})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(H.test(s.tagName)){const t=s.textContent.split(y),e=t.length-1;if(e>0){s.textContent=v?v.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],C()),M.nextNode(),a.push({type:2,index:++n});s.append(t[e],C())}}}else if(8===s.nodeType)if(s.data===$)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(y,t+1));)a.push({type:7,index:n}),t+=y.length-1}n++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function F(t,e,i=t,s){var n,r,o,a;if(e===L)return e;let l=void 0!==s?null===(n=i._$Cl)||void 0===n?void 0:n[s]:i._$Cu;const h=A(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(o=(a=i)._$Cl)&&void 0!==o?o:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=F(t,l._$AS(t,e.values),l,s)),e}class z{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:b).importNode(i,!0);M.currentNode=n;let r=M.nextNode(),o=0,a=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new q(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new K(r,this,t)),this.v.push(e),l=s[++a]}o!==(null==l?void 0:l.index)&&(r=M.nextNode(),o++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,s){var n;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),A(t)?t===I||null==t||""===t?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==L&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):x(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==I&&A(this._$AH)?this._$AA.nextSibling.data=t:this.k(b.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new z(n,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new V(t)),e}S(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new q(this.M(C()),this.M(C()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class j{constructor(t,e,i,s,n){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=F(this,t,e,0),r=!A(t)||t!==this._$AH&&t!==L,r&&(this._$AH=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=F(this,s[i+o],e,o),a===L&&(a=this._$AH[o]),r||(r=!A(a)||a!==this._$AH[o]),a===I?t=I:t!==I&&(t+=(null!=a?a:"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.C(t)}C(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class W extends j{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===I?void 0:t}}const G=v?v.emptyScript:"";class Q extends j{constructor(){super(...arguments),this.type=4}C(t){t&&t!==I?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class Z extends j{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=F(this,t,e,0))&&void 0!==i?i:I)===L)return;const s=this._$AH,n=t===I&&s!==I||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==I&&(s===I||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const J={L:"$lit$",P:y,V:$,I:1,N:R,R:z,j:x,D:F,H:q,F:j,O:Q,W:Z,B:W,Z:K},X=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Y,tt;null==X||X(V,q),(null!==(_=globalThis.litHtmlVersions)&&void 0!==_?_:globalThis.litHtmlVersions=[]).push("2.2.4");class et extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=N(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return L}}et.finalized=!0,et._$litElement$=!0,null===(Y=globalThis.litElementHydrateSupport)||void 0===Y||Y.call(globalThis,{LitElement:et});const it=globalThis.litElementPolyfillSupport;null==it||it({LitElement:et}),(null!==(tt=globalThis.litElementVersions)&&void 0!==tt?tt:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,nt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function rt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):nt(t,e)
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
var ot,at,lt;null===(ot=window.HTMLSlotElement)||void 0===ot||ot.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(at||(at={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(lt||(lt={}));
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht=Symbol.for(""),ct=t=>{var e,i;if((null===(e=t)||void 0===e?void 0:e.r)===ht)return null===(i=t)||void 0===i?void 0:i._$litStatic$},dt=t=>({_$litStatic$:t,r:ht}),ut=new Map,gt=(t=>(e,...i)=>{const s=i.length;let n,r;const o=[],a=[];let l,h=0,c=!1;for(;h<s;){for(l=e[h];h<s&&void 0!==(r=i[h],n=ct(r));)l+=n+e[++h],c=!0;a.push(r),o.push(l),h++}if(h===s&&o.push(e[s]),c){const t=o.join("$$lit$$");void 0===(e=ut.get(t))&&(o.raw=o,ut.set(t,e=o)),i=a}return t(e,...i)})(U);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{H:ft}=J,pt=(t,e)=>{var i,s;return void 0===e?void 0!==(null===(i=t)||void 0===i?void 0:i._$litType$):(null===(s=t)||void 0===s?void 0:s._$litType$)===e},_t=()=>document.createComment(""),vt=(t,e,i)=>{var s;const n=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=n.insertBefore(_t(),r),s=n.insertBefore(_t(),r);i=new ft(e,s,t,t.options)}else{const e=i._$AB.nextSibling,o=i._$AM,a=o!==t;if(a){let e;null===(s=i._$AQ)||void 0===s||s.call(i,t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==o._$AU&&i._$AP(e)}if(e!==r||a){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;n.insertBefore(t,r),t=e}}}return i},mt={},yt=(t,e=mt)=>t._$AH=e,$t=t=>t._$AH,wt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){super(t),this.tt=new WeakMap}render(t){return[t]}update(t,[e]){if(pt(this.it)&&(!pt(e)||this.it.strings!==e.strings)){const e=$t(t).pop();let i=this.tt.get(this.it.strings);if(void 0===i){const t=document.createDocumentFragment();i=N(I,t),i.setConnected(!1),this.tt.set(this.it.strings,i)}yt(i,[e]),vt(i,void 0,e)}if(pt(e)){if(!pt(this.it)||this.it.strings!==e.strings){const i=this.tt.get(e.strings);if(void 0!==i){const e=$t(i).pop();(t=>{t._$AR()})(t),vt(t,void 0,e),yt(t,[e])}}this.it=e}else this.it=void 0;return this.render(e)}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class bt{}bt.Version="v1.1.0",bt.Dev=!1,bt.CardElementName=bt.Dev?"hue-like-light-card-test":"hue-like-light-card",bt.CardName="Hue-Like Light Card",bt.CardDescription="Hue-like way to control your lights",bt.HueBorderRadius=10,bt.HueShadow="0px 2px 3px rgba(0,0,0,0.85)",bt.LuminanceBreakingPoint=192,bt.LightColor="#fff",bt.DarkColor="rgba(0,0,0,0.7)",bt.DarkOffColor="rgba(0,0,0,0.5)",bt.WarmColor="#ffda95",bt.ColdColor="#f5f5ff",bt.DefaultColor="warm",bt.OffColor="#666",bt.DialogBgColor="#171717",bt.DialogFgLightColor="#aaa",bt.DialogOffColor="#363636",bt.GradientOffset=10,bt.DefaultOneIcon="mdi:lightbulb",bt.DefaultTwoIcon="mdi:lightbulb-multiple",bt.DefaultMoreIcon="mdi:lightbulb-group",bt.TimeCacheInterval=1500;class Ct{constructor(t,e,i){"string"==typeof t?this.parse(t):(this._red=t,this._green=null!=e?e:0,this._blue=null!=i?i:0)}getLuminance(){return.299*this._red+.587*this._green+.114*this._blue}getForeground(t,e,i){return this.getLuminance()+i<bt.LuminanceBreakingPoint?t:e}parse(t,e=!0){if(t.startsWith("#"))if(3==(t=t.substring(1)).length)this._red=parseInt(t.substring(0,1)+t.substring(0,1),16),this._green=parseInt(t.substring(1,2)+t.substring(1,2),16),this._blue=parseInt(t.substring(2,3)+t.substring(2,3),16);else{if(6!=t.length)throw new Error("Hex color format should have 3 or 6 letters");this._red=parseInt(t.substring(0,2),16),this._green=parseInt(t.substring(2,4),16),this._blue=parseInt(t.substring(4,6),16)}else{if(!t.startsWith("rgb")){if(e){const e=document.createElement("canvas").getContext("2d");if(null!=e)return e.fillStyle=t,void this.parse(e.fillStyle,!1)}throw new Error("Unrecognized color format: "+t)}{const e=t.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,?\s*(\d*(?:\.\d+\s*)?)\)$/);if(!e)throw new Error("Unrecognized color format rgb[a]: "+t);this._red=parseInt(e[1]),this._green=parseInt(e[2]),this._blue=parseInt(e[3])}}}toString(){return`rgb(${this._red}, ${this._green}, ${this._blue})`}}class At{constructor(t){if(!((null==t?void 0:t.length)>0))throw new Error("At least one background or color is needed for new Background(...).");this._colors=t.flatMap((t=>{if(t instanceof Ct)return[t];if(t instanceof At)return t._colors;throw new Error("Only array of Colors or Backgrounds is supported for new Background(...).")})),this._colors.sort(((t,e)=>t.getLuminance()-e.getLuminance()))}getForeground(t,e,i){if(this._colors.length<3)return this._colors[0].getForeground(t,e,i);let s=0;for(let t=0;t<this._colors.length/2;t++)this._colors[t].getForeground(!0,!1,i)&&s++;return s>this._colors.length/4?t:e}toString(){if(1==this._colors.length)return this._colors[0].toString();const t=100/(this._colors.length-1),e=bt.GradientOffset;let i=`${this._colors[0]} 0%, ${this._colors[0]} ${e}%`,s=0;for(let n=1;n<this._colors.length;n++)s+=t,n+1==this._colors.length&&(i+=`, ${this._colors[n]} ${100-e}%`),i+=`, ${this._colors[n]} ${Math.round(s)}%`;return`linear-gradient(90deg, ${i})`}}class St{static createSwitch(t,e,i=U``){return U`<ha-switch .checked=${t.isOn()} .disabled=${t.isUnavailable()} .haptic=true @change=${i=>this.changed(t,e,!1,i)}
        ${i}
        ></ha-switch>`}static createSlider(t,e,i,s=U``){const n=e.allowZero?0:1;return U`<ha-slider .min=${n} .max=${100} .step=${1} .disabled=${e.allowZero?t.isUnavailable():t.isOff()} .value=${t.value}
        pin @change=${e=>this.changed(t,i,!0,e)}
        ignore-bar-touch
        ${s}
        ></ha-slider>`}static changed(t,e,i,s){const n=s.target;if(n){if(i){const e=n.value;null!=e&&(t.value=parseInt(e))}else{n.checked?t.turnOn():t.turnOff()}e()}}static calculateBackAndForeground(t,e,i=!0){const s=t.isOff()?e:t.getBackground()||e;return{background:s,foreground:this.calculateForeground(t,s,i)}}static calculateForeground(t,e,i=!0){let s=t.value;i||(s=100);const n=t.isOn()&&s>50?-(10-(s-50)/5):0;return t.isOn()&&s<=50?bt.LightColor:e.getForeground(bt.LightColor,t.isOn()?bt.DarkColor:bt.DarkOffColor,n)}static calculateDefaultShadow(t,e,i){if(e.isOff())return i.disableOffShadow?"0px 0px 0px white":"inset 0px 0px 10px rgba(0,0,0,0.2)";const s=t;if(!s||!s.clientHeight)return"";const n=100-e.value,r=20+.95*n*(s.clientHeight/100);let o=s.clientHeight/2;n>70&&(o-=(o-20)*(n-70)/30);let a=.65;return n>60&&(a-=(a-.5)*(n-60)/40),`inset 0px -${r}px ${o}px -20px rgba(0,0,0,${a})`}}class xt{constructor(t,e){this._waitAfter=e,this._action=t}get action(){return this._action}get waitAfter(){return this._waitAfter}}class Et{constructor(){this._queue=new Array,this._currentEffectId=null}get currentEffectId(){return this._currentEffectId}addEffect(t,e){const i=new xt(e,t);this._queue.push(i)}start(){let t=0;const e=()=>{this.planEffect(++t,e)};this.planEffect(t,e)}stop(){this._currentEffectId&&(clearTimeout(this._currentEffectId),this._currentEffectId=null)}stopAndClear(){this.stop(),this._queue.length=0}planEffect(t,e=null){if(t>=this._queue.length)return void(this._currentEffectId=null);const i=this._queue[t];this._currentEffectId=setTimeout((()=>{i.action(),e&&e()}),i.waitAfter)}}function kt(t,e){return null!=e?e:t}function Ot(t,e,...i){i.unshift(e);const s=t.split(".")[0];if(i.indexOf(s)<0)throw new Error(`Unsupported entity type: ${s} (in '${t}'). Supported type(s): '${i.join("', '")}'.`)}function Dt(t){return t.filter((function(t,e,i){return e===i.indexOf(t)}))}class Tt{static getColor(t){switch(t){case"warm":return new Ct(bt.WarmColor);case"cold":return new Ct(bt.ColdColor);default:return new Ct(t)}}}var Pt,Ht;!function(t){t.Default="default",t.NoAction="none",t.TurnOn="turn-on",t.TurnOff="turn-off",t.MoreInfo="more-info",t.Scene="scene",t.HueScreen="hue-screen"}(Pt||(Pt={}));class Ut{constructor(t){"string"==typeof t?this._onlyValue=t:t instanceof Ut?(this._onlyValue=t._onlyValue,this._valueStore=t._valueStore):this._valueStore=t||{}}getData(t){return this._onlyValue?this._onlyValue:this._valueStore[t]}}class Lt{constructor(t){Ot(t,"scene"),this.entity=t}}class It{constructor(t){this._config="string"==typeof t?new Lt(t):t}set hass(t){this._hass=t,this._entity=this._hass.states[this._config.entity]}activate(){this.ensureHass(),this._hass.callService("scene","turn_on",{entity_id:this._config.entity})}getTitle(t){if(this.ensureHass(),this._config.title)return this._config.title;let e=this._entity.attributes.friendly_name;return t&&0==(null==e?void 0:e.toLowerCase().indexOf(t.toLowerCase()))&&(e=e.substring(t.length).trimStart()),e}getIcon(t=null){return this.ensureHass(),null!=this._config.icon?this._config.icon:this._entity.attributes.icon||t}getColor(){return this._config.color?Tt.getColor(this._config.color):null}ensureHass(){if(!this._hass)throw new Error("Scene data not initialized - call setHass first!")}}let Bt=Ht=class extends et{constructor(){super(...arguments),this._effectQueue=new Et}set hass(t){const e=this._hass;this._hass=t,this.updateHassDependentProps(),this.requestUpdate(kt(this,"hass"),e)}set sceneConfig(t){const e=this._sceneConfig;this._sceneConfig=t,this._scene=new It(t),this.updateHassDependentProps(),this.requestUpdate(kt(this,"sceneConfig"),e)}updateHassDependentProps(){this._hass&&this._scene&&(this._scene.hass=this._hass)}sceneClicked(){this._scene.activate(),this._effectQueue.stopAndClear();const t=this.renderRoot.querySelector(".scene");if(t){t.classList.remove("selected","unselected");const e=1e3*Ht.animationSeconds;this._effectQueue.addEffect(0,(()=>t.classList.add("selected"))),this._effectQueue.addEffect(3e3,(()=>t.classList.add("unselected"))),this._effectQueue.addEffect(e,(()=>{t.classList.add("stop-color-animate"),t.classList.remove("selected")})),this._effectQueue.addEffect(50,(()=>{t.classList.remove("stop-color-animate","unselected")})),this._effectQueue.start()}}updated(){if(this._scene&&!this._sceneAccentColorSet){this._sceneAccentColorSet=!0;const t=this._scene.getColor();if(t){const e=t.getForeground(bt.LightColor,bt.DarkColor,20),i=t.getForeground(bt.LightColor,"black",20);this.style.setProperty("--hue-tile-accent-color",t.toString()),this.style.setProperty("--hue-tile-fg-color",e.toString()),this.style.setProperty("--hue-tile-fg-text-color",i.toString())}}}render(){return this._scene?this.renderScene():""}renderScene(){const t=this._scene.getTitle(this.cardTitle);return U`
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
        `}};var Nt;Bt.ElementName=bt.CardElementName+"-hue-dialog-tile",Bt.padding=5,Bt.height=100,Bt.width=85,Bt.colorDimensions=Ht.height/2,Bt.iconScale=.75*Ht.colorDimensions/24,Bt.animationSeconds=1,Bt.styles=o`
    .hue-tile{
        background: ${r(bt.OffColor)};
        width: ${Ht.width}px;
        height: ${Ht.height}px;
        padding: ${Ht.padding}px;
        border-radius: ${bt.HueBorderRadius}px;
        box-shadow: ${r(bt.HueShadow)};
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
        height: ${Ht.colorDimensions}px;
        width: ${Ht.colorDimensions}px;
        border-radius: ${Ht.colorDimensions/2}px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all ${Ht.animationSeconds}s linear;
    }
    .scene .icon-background .color ha-icon {
        color: var(--hue-tile-fg-color, ${r(bt.LightColor)});
        transform: scale(${Ht.iconScale});
    }
    .scene.selected .icon-background .color {
        height: ${2*Ht.height}px;
        width: ${2*Ht.width}px;
        border-radius: ${Ht.height}px;
        margin-left: -${2*Ht.padding}px;
        margin-right: -${2*Ht.padding}px;
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
        color:${r(bt.LightColor)};
        font-size: 12px;
        line-height: 15px;
        font-weight:400;
        height:30%;
        text-align: center;
        display: flex;
        flex-flow: column;
        justify-content: center;
        transition: all ${Ht.animationSeconds/2}s linear;
    }
    .scene .title span {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .scene.selected .title {
        color:var(--hue-tile-fg-text-color, ${r(bt.LightColor)});
    }

    @keyframes pop-icon{
        50% { transform: scale(${2*Ht.iconScale}); }
    }
    `,t([rt()],Bt.prototype,"cardTitle",void 0),Bt=Ht=t([st(Ht.ElementName)],Bt);let Mt=Nt=class extends et{constructor(t,e){super(),this._isRendered=!1,this._currTab=Nt.scenesTab,this._onHistoryBackListener=()=>this.close(),this._config=t,this._ctrl=e,this._id="HueDialog_"+Nt.maxDialogId++}onLightControllerChanged(t){"hass"==t&&this.requestUpdate()}show(){if(this._isRendered)throw new Error("Already rendered!");window.history.pushState({dialog:"hue-dialog",open:!0},""),window.addEventListener("popstate",this._onHistoryBackListener),document.body.appendChild(this),this._ctrl.registerOnPropertyChanged(this._id,(t=>this.onLightControllerChanged(t)))}close(){if(!this._isRendered)return;const t=this.renderRoot.querySelector("ha-dialog");t&&t.close?t.close():this.onDialogClose()}onDialogClose(){this._isRendered&&(this.remove(),window.removeEventListener("popstate",this._onHistoryBackListener),this._ctrl.unregisterOnPropertyChanged(this._id),this._isRendered=!1)}static get styles(){return[Nt.haStyleDialog,o`
        /* icon centering */
        .mdc-icon-button i,
        .mdc-icon-button svg,
        .mdc-icon-button img,
        .mdc-icon-button ::slotted(*){
            height:auto;
        }

        /* same color header */
        .heading {
            color:var(--hue-text-color);
            background:var(--hue-background);
            box-shadow:var(--hue-box-shadow), 0px 5px 10px rgba(0,0,0,0.5);
            transition:all 0.3s ease-out 0s;

            border-bottom-left-radius: var(--ha-dialog-border-radius, 28px);
            border-bottom-right-radius: var(--ha-dialog-border-radius, 28px);
            padding-bottom: calc(var(--ha-dialog-border-radius, 28px) / 2);
        }
        ha-header-bar {
            --mdc-theme-on-primary: var(--hue-text-color);
            --mdc-theme-primary: transparent;/*var(--hue-background);*/
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
            color: var(--mdc-dialog-content-ink-color);
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
            /*gap: ${Nt.tileGap}px;*/
            max-width: 100%;
            overflow-x: auto;
            overflow-y: hidden;
            padding: 0 24px;
            margin: 0 -24px;
        }
        .tiles {
            display: flex;
            flex-flow: row;
            gap: ${Nt.tileGap}px;
            margin-bottom: ${Nt.tileGap}px;
        }
        `]}updateStyles(t){if(t){const t=this._config.getHueScreenBgColor(),e=t.getForeground(bt.DialogFgLightColor,bt.DarkColor,120);this.style.setProperty("--mdc-theme-surface",t.toString()),this.style.setProperty("--primary-text-color",e.toString())}const e=this.renderRoot.querySelector(".heading");let i;i=this._config.wasOffColorSet?new At([this._config.getOffColor()]):new At([new Ct(bt.DialogOffColor)]);const s=St.calculateBackAndForeground(this._ctrl,i,!0),n=St.calculateDefaultShadow(e,this._ctrl,this._config);n||this.requestUpdate(),s.background,this._config.hueBorders&&this.style.setProperty("--ha-dialog-border-radius",bt.HueBorderRadius+"px"),this.style.setProperty("--hue-background",s.background.toString()),this.style.setProperty("--hue-box-shadow",n),this.style.setProperty("--hue-text-color",s.foreground)}render(){this._isRendered=!0;const t=this._config.title||this._ctrl.getTitle(),e=()=>{this.requestUpdate(),this.updateStyles(!1)},i=this._config.getTitle(this._ctrl);return gt`
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
              ${St.createSwitch(this._ctrl,e)}
              </div>
            </ha-header-bar>
            ${St.createSlider(this._ctrl,this._config,e)}
          </div>
          <div class="content" tabindex="-1" dialogInitialFocus>
            ${wt(this._currTab===Nt.scenesTab?gt`
                    <div class='header'>
                        <div class='title'>${this._config.resources.scenes}</div>
                    </div>
                    <div class='tile-scroller'>
                        <div class='tiles'>
                            ${this._config.scenes.map(((t,e)=>e%2==1?gt``:gt`<${dt(Bt.ElementName)} .cardTitle=${i} .sceneConfig=${t} .hass=${this._ctrl.hass}></${dt(Bt.ElementName)}>`))}
                        </div>
                        <div class='tiles'>
                            ${this._config.scenes.map(((t,e)=>e%2==0?gt``:gt`<${dt(Bt.ElementName)} .cardTitle=${i} .sceneConfig=${t} .hass=${this._ctrl.hass}></${dt(Bt.ElementName)}>`))}
                        </div>
                    </div>
                  `:gt`
                    <h3>Here for Colors</h3>
                  `)}
            <!--
            <div class='header'>
                <div class='title'>${this._config.resources.lights}</div>
            </div>
            -->
          </div>
        </ha-dialog>
        `}firstUpdated(){this.updateStyles(!0)}updated(){this.updateStyles(!1)}};Mt.ElementName=bt.CardElementName+"-hue-dialog",Mt.maxDialogId=1,Mt.colorsTab="colors",Mt.scenesTab="scenes",Mt.tabs=[Nt.colorsTab,Nt.scenesTab],Mt.haStyleDialog=o`
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
  `,Mt.tileGap=10,t([function(t){return rt({...t,state:!0})}()],Mt.prototype,"_currTab",void 0),Mt=Nt=t([st(Nt.ElementName)],Mt);class Rt{constructor(t,e,i){this._config=t,this._ctrl=e,this._el=i}handleClick(){const t=this._ctrl.isOn();let e=t?this._config.onClickAction:this._config.offClickAction;const i=t?this._config.onClickData:this._config.offClickData;e==Pt.Default&&(e=t?this.resolveDefaultWhenOn():this.resolveDefaultWhenOff()),this.executeClickAction(e,i)}resolveDefaultWhenOn(){return this._config.scenes.length?Pt.HueScreen:1==this._ctrl.count?Pt.MoreInfo:Pt.TurnOff}resolveDefaultWhenOff(){return 1==this._ctrl.count?Pt.MoreInfo:this._config.scenes.length?Pt.HueScreen:Pt.TurnOn}executeClickAction(t,e){switch(t){case Pt.NoAction:break;case Pt.TurnOn:this._ctrl.turnOn();break;case Pt.TurnOff:this._ctrl.turnOff();break;case Pt.MoreInfo:let i=e.getData("entity");i||(i=this._ctrl.isOn()?this._ctrl.getLitLights()[0].getEntityId():this._config.getEntities()[0]),function(t,e,i,s){s=s||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});n.detail=i,t.dispatchEvent(n)}(this._el,"hass-more-info",{entityId:i});break;case Pt.Scene:const s=e.getData("scene");if(!s)throw new Error("No scene for click defined.");const n=new It(s);n.hass=this._ctrl.hass,n.activate();break;case Pt.HueScreen:new Mt(this._config,this._ctrl).show();break;case Pt.Default:throw new Error("Cannot execute Default action");default:throw new Error(`Cannot executed unwknow action ${t}.`)}}}class Vt{constructor(t,e=!1){this.value=t,this.dontCache=e}}class Ft{constructor(t){this._factories={},this._lastValues={},this._cacheInterval=t}registerProperty(t,e){this._factories[t]=e,delete this._lastValues[t]}setValue(t,e){this.ensureExists(t),this._lastValues[t]=this.createCacheItem(e)}getValue(t){this.ensureExists(t);const e=(new Date).getTime(),i=this._lastValues[t];if(i&&e-i.time<this._cacheInterval)return i.value;let s=this._factories[t](),n=!1;if(s instanceof Vt){const t=s;s=t.value,n=t.dontCache}return n||this.setValue(t,s),s}ensureExists(t){if(!this._factories[t])throw Error(`Property with name ${t} is not registered in TimeCache.`)}createCacheItem(t){return{value:t,time:(new Date).getTime()}}}class zt{constructor(t){Ot(t,"light"),this._entity_id=t,this.initTimeCache()}set hass(t){this._hass=t,this._entity=this._hass.states[this._entity_id]}getAttributes(){return this._entity.attributes}initTimeCache(){this._cache=new Ft(bt.TimeCacheInterval),this._cache.registerProperty("state",(()=>{var t;return new Vt(null===(t=this._entity)||void 0===t?void 0:t.state,this.getDontCacheState())})),this._cache.registerProperty("value",(()=>new Vt(this.valueGetFactory(),this.getDontCacheValue())))}getDontCacheState(){return!this._entity||"unavailable"==this._entity.state}getDontCacheValue(){return this.getDontCacheState()||null==this._entity.attributes.brightness}notifyTurnOn(){this._cache.setValue("state","on"),this._lastOnValue&&this._cache.setValue("value",this._lastOnValue)}notifyTurnOff(){this._cache.setValue("state","off"),this._cache.setValue("value",0)}notifyValueChanged(t){t>0&&(this._lastOnValue=t),this._cache.setValue("value",t),this._cache.setValue("state",t>0?"on":"off")}isUnavailable(){return"unavailable"==this._cache.getValue("state")}isOn(){return"on"==this._cache.getValue("state")}isOff(){return!this.isOn()}turnOn(){this.toggle(!0)}turnOff(){this.toggle(!1)}toggle(t){t?this.notifyTurnOn():this.notifyTurnOff(),this._hass.callService("light",t?"turn_on":"turn_off",{entity_id:this._entity_id})}valueGetFactory(){var t;if(this.isOff())return 0;const e=null!==(t=this.getAttributes().brightness)&&void 0!==t?t:1;return this._lastOnValue=Math.round(100*e/255),this._lastOnValue}get value(){return this._cache.getValue("value")}set value(t){t<0?t=0:t>100&&(t=100),this.notifyValueChanged(t);const e=Math.round(t/100*255);this._hass.callService("light","turn_on",{entity_id:this._entity_id,brightness:e})}getIcon(){return this._entity&&this._entity.attributes.icon}getTitle(){var t;return null!==(t=this._entity.attributes.friendly_name)&&void 0!==t?t:this._entity_id}getBackground(){const t=this.getAttributes().rgb_color;if(!t)return this._lastBackground?this._lastBackground:null;const e=new Ct(t[0],t[1],t[2]);return this._lastBackground=new At([e]),new At([this._lastBackground])}getEntityId(){return this._entity_id}}class qt{static getLightContainer(t){let e=this._containers[t];return e||(e=new zt(t),this._containers[t]=e),e}}qt._containers={};class jt extends class{constructor(){this._propertyChangedCallbacks={}}raisePropertyChanged(t){for(const e in this._propertyChangedCallbacks)this._propertyChangedCallbacks[e](t)}registerOnPropertyChanged(t,e){this._propertyChangedCallbacks[t]=e}unregisterOnPropertyChanged(t){delete this._propertyChangedCallbacks[t]}}{constructor(t,e){if(super(),!t.length)throw new Error('No entity specified (use "entity" and/or "entities").');this._defaultColor=e,this._lights=t.map((t=>qt.getLightContainer(t)))}get count(){return this._lights.length}getLitLights(){return this._lights.filter((t=>t.isOn()))}set hass(t){this._hass=t,this._lights.forEach((e=>e.hass=t)),this.raisePropertyChanged("hass")}get hass(){return this._hass}isOn(){return this._lights.some((t=>t.isOn()))}isOff(){return this._lights.every((t=>t.isOff()))}isUnavailable(){return this._lights.every((t=>t.isUnavailable()))}turnOn(){this._lights.filter((t=>t.isOff())).forEach((t=>t.turnOn()))}turnOff(){this._lights.filter((t=>t.isOn())).forEach((t=>t.turnOff()))}get value(){return this.valueGetFactory()}set value(t){const e=this._lights.filter((t=>t.isOn()));if(1==e.length)return void(e[0].value=t);if(0==e.length)return void this._lights.forEach((e=>e.value=t));const i=this.value,s=t-i,n=s>0?100-this.value:this.value,r=s/n;this._lights.filter((t=>t.isOn())).forEach((e=>{if(e.value==i)return void(e.value=t);const n=s>0?100-e.value:e.value,o=Math.round(n*r);let a=e.value+o;a<1&&t>0&&(a=1),e.value=a}))}valueGetFactory(){let t=0,e=0;if(this._lights.forEach((i=>{i.isOn()&&(e++,t+=i.value)})),0==e)return 0;return t/e*1}getIcon(){return this._lights.length>2?bt.DefaultMoreIcon:this._lights.length>1?bt.DefaultTwoIcon:this._lights[0].getIcon()||bt.DefaultOneIcon}getTitle(){let t="";for(let e=0;e<this._lights.length&&e<3;e++)e>0&&(t+=", "),t+=this._lights[e].getTitle();return this._lights.length>3&&(t+=", ..."),t}getBackground(){const t=this._lights.filter((t=>t.isOn())).map((t=>t.getBackground()||this._defaultColor));return 0==t.length?null:new At(t)}getEntityId(){throw Error("Cannot get entity id from LightController")}}class Wt{constructor(t){t=t||{},this.scenes=t.scenes||"Scenes",this.lights=t.lights||"Lights"}}class Gt{constructor(t){this.scenesLoaded=!1,this.entity=t.entity,this.entities=t.entities,this.title=t.title,this.icon=t.icon,this._scenes=Gt.getScenesArray(t.scenes),this.offClickAction=Gt.getClickAction(t.offClickAction),this.offClickData=new Ut(t.offClickData),this.onClickAction=Gt.getClickAction(t.onClickAction),this.onClickData=new Ut(t.onClickData),this.allowZero=Gt.getBoolean(t.allowZero,!1),this.defaultColor=t.defaultColor||bt.DefaultColor,this.offColor=t.offColor||bt.OffColor,this.wasOffColorSet=!!t.offColor,this.hueScreenBgColor=t.hueScreenBgColor||bt.DialogBgColor,this.disableOffShadow=Gt.getBoolean(t.disableOffShadow,!1),this.hueBorders=Gt.getBoolean(t.hueBorders,!0),this.resources=new Wt(t.resources)}static getBoolean(t,e){return null==t?e:!!t}static getClickAction(t){if(!t)return Pt.Default;let e="";for(const i in Pt){const s=Pt[i];if(t==s)return t;e+=`'${s}', `}throw new Error(`Click action '${t}' was not recognized. Allowed values are: ${e}`)}static getScenesArray(t){if(!t)return[];if(t.length>0){const e=new Array;for(let i=0;i<t.length;i++){const s=t[i],n=Gt.getScene(s,i);n&&e.push(n)}return e}return[]}static getScene(t,e){if("string"==typeof t)return new Lt(t);if(!t.entity)throw new Error(`Scene on index ${e} is missing 'entity' attribute, which is required.`);const i=new Lt(t.entity);return i.title=t.title,i.icon=t.icon,i.color=t.color,i}get scenes(){return this._scenes}getTitle(t){return this.title||t.getTitle()}getEntities(){const t=[];return this.entity&&t.push(this.entity),this.entities&&this.entities.forEach((e=>t.push(e))),t}getDefaultColor(){return Tt.getColor(this.defaultColor)}getOffColor(){return new Ct(this.offColor)}getHueScreenBgColor(){return new Ct(this.hueScreenBgColor)}async tryLoadScenes(t){if(!t)throw new Error("Hass instance must be passed!");if(0==this.scenes.length&&!this.scenesLoaded){this.scenesLoaded=!0;try{let e=new Array;await Promise.all(this.getEntities().map((async i=>{const s=await t.connection.sendMessagePromise({type:"search/related",item_type:"entity",item_id:i});s&&s.area&&s.area.length&&e.push(s.area[0])}))),e=Dt(e);let i=new Array;await Promise.all(e.map((async e=>{const s=await t.connection.sendMessagePromise({type:"search/related",item_type:"area",item_id:e});s&&s.scene&&s.scene.forEach((t=>i.push(t)))}))),i=Dt(i),this._scenes=Gt.getScenesArray(i)}catch(t){console.error("Cannot load scenes from HA."),console.error(t)}}}}console.info(`%cHUE-%cLIKE%c LIGHT%c CARD %c${bt.Version}`,"font-weight:bold;color:white;background:#0046FF","font-weight:bold;color:white;background:#9E00FF","font-weight:bold;color:white;background:#FF00F3","font-weight:bold;color:white;background:#FF0032","font-weight:bold;color:white;background:#FF8B00"),window.customCards=window.customCards||[],window.customCards.push({type:bt.CardElementName,name:bt.CardName,description:bt.CardDescription});let Qt=class extends et{set hass(t){const e=this._hass;this._hass||this._config.tryLoadScenes(t),this._hass=t,this._ctrl.hass=t,this.requestUpdate(kt(this,"hass"),e)}get hass(){return this._hass}async setConfig(t){this._config=new Gt(t),this._ctrl=new jt(this._config.getEntities(),this._config.getDefaultColor()),this._offBackground=new At([this._config.getOffColor()]),this._clickHandler=new Rt(this._config,this._ctrl,this)}getCardSize(){return 3}cardClicked(){this._clickHandler.handleClick(),this.updateStyles()}updateStyles(){if(!this._config.hueBorders&&!this.haShadow){const t=document.createElement("ha-card");document.body.appendChild(t);const e=getComputedStyle(t);this.haShadow=e.boxShadow,t.remove(),this.style.setProperty("--ha-default-shadow",this.haShadow)}const t=this.renderRoot.querySelector("ha-card"),e=St.calculateBackAndForeground(this._ctrl,this._offBackground),i=St.calculateDefaultShadow(t,this._ctrl,this._config);this.style.setProperty("--hue-background",e.background.toString()),this.style.setProperty("--ha-card-box-shadow",i),this.style.setProperty("--hue-box-shadow",i),this.style.setProperty("--hue-text-color",e.foreground)}render(){const t=this._config.getTitle(this._ctrl),e=()=>{this.requestUpdate(),this.updateStyles()};return U`<ha-card>
            <div class="tap-area" @click="${()=>this.cardClicked()}">
                <ha-icon icon="${this._config.icon||this._ctrl.getIcon()}"></ha-icon>
                <h2>${t}</h2>
            </div>
            ${St.createSwitch(this._ctrl,e)}

            ${St.createSlider(this._ctrl,this._config,e)}
        </ha-card>`}firstUpdated(){this._config.hueBorders&&(this.renderRoot.querySelector("ha-card").className="hue-borders"),this.updated()}updated(){this.updateStyles()}connectedCallback(){super.connectedCallback(),this.updateStyles()}};Qt.styles=o`
    ha-card
    {
        height:80px;
        background:var(--hue-background);
        position:relative;
        box-shadow:var(--hue-box-shadow), var(--ha-default-shadow);
    }
    ha-card.hue-borders
    {
        border-radius:${bt.HueBorderRadius}px;
        box-shadow:var(--hue-box-shadow), ${r(bt.HueShadow)};
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
    `,Qt=t([st(bt.CardElementName)],Qt);export{Qt as HueLikeLightCard};
