function e(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let n=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}};const o=e=>new n("string"==typeof e?e:e+"",void 0,s),a=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1]),e[0]);return new n(i,e,s)},l=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return o(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:c,defineProperty:h,getOwnPropertyDescriptor:d,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:g}=Object,f=globalThis,m=f.trustedTypes,v=m?m.emptyScript:"",_=f.reactiveElementPolyfillSupport,y=(e,t)=>e,w={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},b=(e,t)=>!c(e,t),C={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let k=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=C){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&h(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:r}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return s?.call(this)},set(t){const n=s?.call(this);r.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??C}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=g(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...u(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{if(i)e.adoptedStyleSheets=s.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const i of s){const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,e.appendChild(s)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:w).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:w;this._$Em=s,this[s]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i,s=!1,r){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??b)(s?r:this[e],t))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$ES?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[y("elementProperties")]=new Map,k[y("finalized")]=new Map,_?.({ReactiveElement:k}),(f.reactiveElementVersions??=[]).push("2.0.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const S=globalThis,x=S.trustedTypes,E=x?x.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",T=`lit$${(Math.random()+"").slice(9)}$`,$="?"+T,L=`<${$}>`,O=document,D=()=>O.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,P=Array.isArray,I=e=>P(e)||"function"==typeof e?.[Symbol.iterator],H="[ \t\n\f\r]",V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,R=/>/g,z=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,F=/"/g,U=/^(?:script|style|textarea|title)$/i,W=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),j=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),Y=new WeakMap,G=O.createTreeWalker(O,129);function K(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const X=(e,t)=>{const i=e.length-1,s=[];let r,n=2===t?"<svg>":"",o=V;for(let t=0;t<i;t++){const i=e[t];let a,l,c=-1,h=0;for(;h<i.length&&(o.lastIndex=h,l=o.exec(i),null!==l);)h=o.lastIndex,o===V?"!--"===l[1]?o=B:void 0!==l[1]?o=R:void 0!==l[2]?(U.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=z):void 0!==l[3]&&(o=z):o===z?">"===l[0]?(o=r??V,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?z:'"'===l[3]?F:N):o===F||o===N?o=z:o===B||o===R?o=V:(o=z,r=void 0);const d=o===z&&e[t+1].startsWith("/>")?" ":"";n+=o===V?i+L:c>=0?(s.push(a),i.slice(0,c)+A+i.slice(c)+T+d):i+T+(-2===c?t:d)}return[K(e,n+(e[i]||"<?>")+(2===t?"</svg>":"")),s]};let Q=class e{constructor({strings:t,_$litType$:i},s){let r;this.parts=[];let n=0,o=0;const a=t.length-1,l=this.parts,[c,h]=X(t,i);if(this.el=e.createElement(c,s),G.currentNode=this.el.content,2===i){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=G.nextNode())&&l.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(A)){const t=h[o++],i=r.getAttribute(e).split(T),s=/([.?@])?(.*)/.exec(t);l.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?ie:"?"===s[1]?se:"@"===s[1]?re:te}),r.removeAttribute(e)}else e.startsWith(T)&&(l.push({type:6,index:n}),r.removeAttribute(e));if(U.test(r.tagName)){const e=r.textContent.split(T),t=e.length-1;if(t>0){r.textContent=x?x.emptyScript:"";for(let i=0;i<t;i++)r.append(e[i],D()),G.nextNode(),l.push({type:2,index:++n});r.append(e[t],D())}}}else if(8===r.nodeType)if(r.data===$)l.push({type:2,index:n});else{let e=-1;for(;-1!==(e=r.data.indexOf(T,e+1));)l.push({type:7,index:n}),e+=T.length-1}n++}}static createElement(e,t){const i=O.createElement("template");return i.innerHTML=e,i}};function Z(e,t,i=e,s){if(t===j)return t;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=M(t)?void 0:t._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(e),r._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(t=Z(e,r._$AS(e,t.values),r,s)),t}let J=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??O).importNode(t,!0);G.currentNode=s;let r=G.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new ee(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new ne(r,this,e)),this._$AV.push(t),a=i[++o]}n!==a?.index&&(r=G.nextNode(),n++)}return G.currentNode=O,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};class ee{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),M(e)?e===q||null==e||""===e?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==j&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):I(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==q&&M(this._$AH)?this._$AA.nextSibling.data=e:this.$(O.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Q.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new J(s,this),i=e.u(this.options);e.p(t),this.$(i),this._$AH=e}}_$AC(e){let t=Y.get(e.strings);return void 0===t&&Y.set(e.strings,t=new Q(e)),t}T(e){P(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new ee(this.k(D()),this.k(D()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class te{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,r){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(e,t=this,i,s){const r=this.strings;let n=!1;if(void 0===r)e=Z(this,e,t,0),n=!M(e)||e!==this._$AH&&e!==j,n&&(this._$AH=e);else{const s=e;let o,a;for(e=r[0],o=0;o<r.length-1;o++)a=Z(this,s[i+o],t,o),a===j&&(a=this._$AH[o]),n||=!M(a)||a!==this._$AH[o],a===q?e=q:e!==q&&(e+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(e)}j(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ie extends te{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===q?void 0:e}}let se=class extends te{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==q)}};class re extends te{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??q)===j)return;const i=this._$AH,s=e===q&&i!==q||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==q&&(i===q||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}let ne=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}};const oe={S:A,A:T,P:$,C:1,M:X,L:J,R:I,V:Z,D:ee,I:te,H:se,N:re,U:ie,B:ne},ae=S.litHtmlPolyfillSupport;ae?.(Q,ee),(S.litHtmlVersions??=[]).push("3.0.0");const le=(e,t,i)=>{const s=i?.renderBefore??t;let r=s._$litPart$;if(void 0===r){const e=i?.renderBefore??null;s._$litPart$=r=new ee(t.insertBefore(D(),e),e,void 0,i??{})}return r._$AI(e),r
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */};let ce=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=le(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return j}};ce._$litElement$=!0,ce.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ce});const he=globalThis.litElementPolyfillSupport;he?.({LitElement:ce}),(globalThis.litElementVersions??=[]).push("4.0.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de=1,ue=e=>(...t)=>({_$litDirective$:e,values:t});let pe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=ue(class extends pe{constructor(e){if(super(e),e.type!==de||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.st?.has(e)&&this.it.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.it)e in t||(i.remove(e),this.it.delete(e));for(const e in t){const s=!!t[e];s===this.it.has(e)||this.st?.has(e)||(s?(i.add(e),this.it.add(e)):(i.remove(e),this.it.delete(e)))}return j}}),fe=e=>(t,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,me={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:b},ve=(e=me,t,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const r=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,r,e)},init(t){return void 0!==t&&this.C(s,void 0,e),t}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];t.call(this,i),this.requestUpdate(s,r,e)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _e(e){return(t,i)=>"object"==typeof i?ve(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,s?{...e,wrapped:!0}:e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ye(e){return _e({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var be,Ce,ke=function(e,t){return Se(t).format(e)},Se=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric"})};!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(be||(be={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Ce||(Ce={}));var xe=function(e){if(e.time_format===Ce.language||e.time_format===Ce.system){var t=e.time_format===Ce.language?e.language:void 0,i=(new Date).toLocaleString(t);return i.includes("AM")||i.includes("PM")}return e.time_format===Ce.am_pm},Ee=function(e,t){return Ae(t).format(e)},Ae=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:xe(e)?"numeric":"2-digit",minute:"2-digit",hour12:xe(e)})},Te=function(e,t){return $e(t).format(e)},$e=function(e){return new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hour12:xe(e)})};function Le(){return(Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e}).apply(this,arguments)}var Oe=function(e,t,i){var s=t?function(e){switch(e.number_format){case be.comma_decimal:return["en-US","en"];case be.decimal_comma:return["de","es","it"];case be.space_comma:return["fr","sv","cs"];case be.system:return;default:return e.language}}(t):void 0;if(Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},(null==t?void 0:t.number_format)!==be.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(s,De(e,i)).format(Number(e))}catch(t){return console.error(t),new Intl.NumberFormat(void 0,De(e,i)).format(Number(e))}return"string"==typeof e?e:function(e,t){return void 0===t&&(t=2),Math.round(e*Math.pow(10,t))/Math.pow(10,t)}(e,null==i?void 0:i.maximumFractionDigits).toString()+("currency"===(null==i?void 0:i.style)?" "+i.currency:"")},De=function(e,t){var i=Le({maximumFractionDigits:2},t);if("string"!=typeof e)return i;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){var s=e.indexOf(".")>-1?e.split(".")[1].length:0;i.minimumFractionDigits=s,i.maximumFractionDigits=s}return i},Me=function(e,t,i,s){s=s||{},i=null==i?{}:i;var r=new Event(t,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return r.detail=i,e.dispatchEvent(r),r};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Pe=Symbol.for(""),Ie=e=>{if(e?.r===Pe)return e?._$litStatic$},He=e=>({_$litStatic$:e,r:Pe}),Ve=new Map,Be=(e=>(t,...i)=>{const s=i.length;let r,n;const o=[],a=[];let l,c=0,h=!1;for(;c<s;){for(l=t[c];c<s&&void 0!==(n=i[c],r=Ie(n));)l+=r+t[++c],h=!0;c!==s&&a.push(n),o.push(l),c++}if(c===s&&o.push(t[s]),h){const e=o.join("$$lit$$");void 0===(t=Ve.get(e))&&(o.raw=o,Ve.set(e,t=o)),i=a}return e(t,...i)})(W);class Re{constructor(e,t,i,s=1,r="rgb"){this._opacity=1,"string"==typeof e?(this.parse(e),this.setOpacity(null!=t?t:this._opacity)):"rgb"==r?(this.setRgb(e,null!=t?t:0,null!=i?i:0),this.setOpacity(s)):"hsv"==r&&this.setHsv(e,null!=t?t:0,null!=i?i:0),this._originalMode=r}setRgb(e,t,i){if(e<0||e>255)throw new Error("Red value must be in range [0, 255].");if(t<0||t>255)throw new Error("Green value must be in range [0, 255].");if(i<0||i>255)throw new Error("Blue value must be in range [0, 255].");this._red=e,this._green=t,this._blue=i}setHsv(e,t,i){if(e<0||e>360)throw new Error("Hue value must be in range [0, 360].");if(t<0||t>1)throw new Error("Saturation value must be in range [0, 1].");if(i<0||i>1)throw new Error("HSV Value must be in range [0, 1].");this._hsv=[e,t,i];const[s,r,n]=Re.hsv2rgb(e,t,i);this.setRgb(s,r,n)}setOpacity(e){if(e<0)throw new Error("Minimal value for opacity is 0.");if(e>1)throw new Error("Maximal value for opacity is 1.");this._opacity=Math.round(100*e)/100}getOriginalMode(){return this._originalMode}getRed(){return this._red}getGreen(){return this._green}getBlue(){return this._blue}ensureHSV(){return this._hsv||(this._hsv=Re.rgb2hsv(this.getRed(),this.getGreen(),this.getBlue())),this._hsv}getHue(){return this.ensureHSV()[0]}getSaturation(){return this.ensureHSV()[1]}getValue(){return this.ensureHSV()[2]}getOpacity(){return this._opacity}getLuminance(){return.299*this._red+.587*this._green+.114*this._blue}getForeground(e,t,i){return this.getLuminance()+i<Re.LuminanceBreakingPoint?e:t}parse(e,t=!0){var i;if(e.startsWith("#")){const t=3==(e=e.substring(1)).length,i=4==e.length,s=6==e.length,r=8==e.length;if(!(t||s||i||r))throw new Error("Hex color format should have 3/6 letters or 4/8 letters for transparency.");const n=[];for(let t=0;t<e.length;t++){const i=parseInt(e[t],16);if(isNaN(i))throw new Error(`Hex color format contains non hex characters - '${e[t]}'.`);n.push(i)}t||i?(this.setRgb(16*n[0]+n[0],16*n[1]+n[1],16*n[2]+n[2]),i&&this.setOpacity((16*n[3]+n[3])/255)):(s||r)&&(this.setRgb(16*n[0]+n[1],16*n[2]+n[3],16*n[4]+n[5]),r&&this.setOpacity((16*n[6]+n[7])/255))}else{if(!e.startsWith("rgb")){if(t){const t=document.createElement("canvas").getContext("2d");if(null!=t)return t.fillStyle=e,void this.parse(t.fillStyle,!1)}throw new Error("Unrecognized color format: "+e)}{const t=e.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,?\s*(\d*(?:\.\d+\s*)?)\)$/);if(!t)throw new Error("Unrecognized color format rgb[a](...): "+e);this.setRgb(parseInt(t[1]),parseInt(t[2]),parseInt(t[3])),(null===(i=t[4])||void 0===i?void 0:i.length)>0&&this.setOpacity(parseFloat(t[4]))}}}toString(){return this._opacity<1?`rgba(${this._red},${this._green},${this._blue},${this._opacity})`:`rgb(${this._red},${this._green},${this._blue})`}static hsv2rgb(e,t,i){const s=i*t,r=e/60,n=s*(1-Math.abs(r%2-1));let o=0,a=0,l=0;r>=0&&r<=1?[o,a,l]=[s,n,0]:r>=1&&r<=2?[o,a,l]=[n,s,0]:r>=2&&r<=3?[o,a,l]=[0,s,n]:r>=3&&r<=4?[o,a,l]=[0,n,s]:r>=4&&r<=5?[o,a,l]=[n,0,s]:r>=5&&r<=6&&([o,a,l]=[s,0,n]);const c=i-s,[h,d,u]=[o+c,a+c,l+c];return[Math.round(255*h),Math.round(255*d),Math.round(255*u)]}static rgb2hsv(e,t,i){const s=e/255,r=t/255,n=i/255,o=Math.max(s,r,n),a=o-Math.min(s,r,n),l=e=>(o-e)/6/a+.5,c=e=>Math.round(100*e)/100;let h,d=0;if(0==a)d=h=0;else{h=a/o;const e=l(s),t=l(r),i=l(n);s===o?d=i-t:r===o?d=1/3+e-i:n===o&&(d=2/3+t-e),d<0?d+=1:d>1&&(d-=1)}return[Math.round(360*d),c(h),c(o)]}static hueTempToRgb(e){const t=2e3,i=4200,s=6500,r=[255,180,55],n=[255,255,255],o=[190,228,243],a=function(e,t,i){return(i-t)*e+t};if(e<t&&(e=t),e>s&&(e=s),e<i){const i=(e-t)/2200,s=a(i,r[0],n[0]),o=a(i,r[1],n[1]),l=a(i,r[2],n[2]);return[Math.round(s),Math.round(o),Math.round(l)]}{const t=(e-i)/2300,s=a(t,n[0],o[0]),r=a(t,n[1],o[1]),l=a(t,n[2],o[2]);return[Math.round(s),Math.round(r),Math.round(l)]}}}Re.LuminanceBreakingPoint=192;class ze{}ze.Version="v1.5.0",ze.Dev=!1,ze.CardElementName=ze.Dev?"hue-like-light-card-test":"hue-like-light-card",ze.ElementPostfix=ze.Dev?"-test":"",ze.CardName="Hue-Like Light Card",ze.CardDescription="Hue-like way to control your lights",ze.HueBorderRadius=10,ze.HueShadow="0px 2px 3px rgba(0,0,0,0.4)",ze.LightColor=new Re("#fff"),ze.LightOffColor=new Re("#fff",.85),ze.DarkColor=new Re(0,0,0,.7),ze.DarkOffColor=new Re(0,0,0,.5),ze.WarmColor="#ffda95",ze.ColdColor="#f5f5ff",ze.DefaultColor="warm",ze.OffColor="#666",ze.TileOffColor="rgba(102, 102, 102, 0.6)",ze.DialogBgColor="#171717",ze.DialogFgLightColor=new Re("#aaa"),ze.DialogOffColor="#363636",ze.GradientOffset=10,ze.TransitionDefault="all 0.3s ease-out 0s",ze.TimeCacheInterval=1500,ze.ThemeDefault="default",ze.ThemeCardBackground="--hue-detected-card-bg",ze.ThemeCardBackgroundVar=`var(${ze.ThemeCardBackground})`,ze.ThemeCardPossibleBackgrounds=["--ha-card-background","--card-background-color","--paper-card-background-color","--primary-background-color"],ze.ThemeDialogHeadingColorVar="var(--mdc-dialog-heading-ink-color)",ze.ThemeSecondaryTextColorVar="var(--secondary-text-color)",ze.IconSize={big:2,original:1.41666667,small:1};class Ne extends Re{constructor(e){e==Ne.themeColor?(super(0,0,0),this._isThemeColor=!0):(super(e),this._isThemeColor=!1)}getBaseColor(){if(this._isThemeColor)throw new Error("Cannot getBaseColor on "+Ne.themeColor);return new Re(this.getRed(),this.getGreen(),this.getBlue(),this.getOpacity())}isThemeColor(){return this._isThemeColor}getLuminance(){if(this._isThemeColor)throw new Error("Cannot getLuminance on "+Ne.themeColor);return super.getLuminance()}getForeground(e,t,i){if(this._isThemeColor)throw new Error("Cannot getForeground on "+Ne.themeColor);return super.getForeground(e,t,i)}toString(){return this._isThemeColor?"var(--"+Ne.themeColor+")":super.toString()}}Ne.themeColor="theme-color";class Fe{constructor(e){if(!((null==e?void 0:e.length)>0))throw new Error("At least one background or color is needed for new Background(...).");this._colors=e.flatMap((e=>{if(e instanceof Ne)throw new Error("ColorExtended cannot be used in Background. Resolve it first.");if(e instanceof Re)return[e];if(e instanceof Fe)return e._colors;throw new Error("Only array of Colors or Backgrounds is supported for new Background(...).")})),this._colors.sort(((e,t)=>e.getLuminance()-t.getLuminance()))}getForeground(e,t,i){if(this._colors.length<3)return this._colors[0].getForeground(e,t,i);let s=0;for(let e=0;e<this._colors.length/2;e++)this._colors[e].getForeground(!0,!1,i)&&s++;return s>this._colors.length/4?e:t}toString(){if(1==this._colors.length)return this._colors[0].toString();const e=100/(this._colors.length-1),t=ze.GradientOffset;let i=`${this._colors[0]} 0%, ${this._colors[0]} ${t}%`,s=0;for(let r=1;r<this._colors.length;r++)s+=e,r+1==this._colors.length&&(i+=`, ${this._colors[r]} ${100-t}%`),i+=`, ${this._colors[r]} ${Math.round(s)}%`;return`linear-gradient(90deg, ${i})`}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue="important",We=" !"+Ue,je=ue(class extends pe{constructor(e){if(super(e),e.type!==de||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{const s=e[i];return null==s?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(t)),this.render(t);for(const e of this.ut)null==t[e]&&(this.ut.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const s=t[e];if(null!=s){this.ut.add(e);const t="string"==typeof s&&s.endsWith(We);e.includes("-")||t?i.setProperty(e,t?s.slice(0,-11):s,t?Ue:""):i[e]=s}}return j}});class qe{static getSwitchThemeStyle(){return{"--switch-checked-button-color":`var(${qe.switchCheckedButtonColorVar})`,"--switch-checked-track-color":`var(${qe.switchCheckedTrackColorVar})`}}static detectSwitchColors(e,t=!1){qe.detectThemeVariable(e,qe.switchCheckedButtonColorVar,qe.possibleSwitchCheckedButtonColors,"switchBtnDetected",t),qe.detectThemeVariable(e,qe.switchCheckedTrackColorVar,qe.possibleSwitchCheckedTrackColors,"switchTrckDetected",t)}static setDialogThemeStyles(e,t,i){i&&qe.detectThemeCardBackground(e,!0,1),e.style.setProperty("--mdc-theme-surface",`var(${t}, ${ze.ThemeCardBackgroundVar})`)}static applyTheme(e,t,i){return e.dataset.themeLocal!=i&&(function(e,t,i,s){void 0===s&&(s=!1),e._themes||(e._themes={});var r=t.default_theme;("default"===i||i&&t.themes[i])&&(r=i);var n=Le({},e._themes);if("default"!==r){var o=t.themes[r];Object.keys(o).forEach((function(t){var i="--"+t;e._themes[i]="",n[i]=o[t]}))}if(e.updateStyles?e.updateStyles(n):window.ShadyCSS&&window.ShadyCSS.styleSubtree(e,n),s){var a=document.querySelector("meta[name=theme-color]");if(a){a.hasAttribute("default-content")||a.setAttribute("default-content",a.getAttribute("content"));var l=n["--primary-color"]||a.getAttribute("default-content");a.setAttribute("content",l)}}}(e,t,i),i!=ze.ThemeDefault?e.dataset.themeLocal=i:delete e.dataset.themeLocal,qe.detectSwitchColors(e,!0),!0)}static detectThemeCardBackground(e,t=!1,i=0){qe.detectThemeVariable(e,ze.ThemeCardBackground,ze.ThemeCardPossibleBackgrounds,"hueBgDetected",t,i)}static detectThemeVariable(e,t,i,s,r=!1,n=0){if(e.dataset[s]&&!r)return;const o=!!e.dataset.themeLocal;let a;for(a of i)if(n>0)n--;else if(o){let i=!1,s=0;for(;e.style[s];){if(e.style[s]==a){i=!0;break}s++}if(i){e.style.setProperty(t,`var(${a})`);break}}else{e.style.setProperty(t,`var(${a})`);if(getComputedStyle(e).getPropertyValue(t))break}let l=a||"none";o&&(l+=";local"),e.dataset[s]=l}}qe.switchCheckedButtonColorVar="--detected-switch-checked-button-color",qe.switchCheckedTrackColorVar="--detected-switch-checked-track-color",qe.possibleSwitchCheckedButtonColors=["--switch-checked-button-color","--primary-color"],qe.possibleSwitchCheckedTrackColors=["--switch-checked-track-color","--switch-checked-color","--dark-primary-color"];class Ye{static getColor(e){switch(e){case"warm":return new Re(ze.WarmColor);case"cold":return new Re(ze.ColdColor);default:return new Re(e)}}}function Ge(e,t){return null!=t?t:e}function Ke(e,t,...i){i.unshift(t);const s=e.split(".")[0];if(i.indexOf(s)<0)throw new Error(`Unsupported entity type: ${s} (in '${e}'). Supported type(s): '${i.join("', '")}'.`)}function Xe(e){return e.filter((function(e,t,i){return t===i.indexOf(e)}))}var Qe,Ze,Je,et,tt;!function(e){e.Big="big",e.Original="original",e.Small="small"}(Qe||(Qe={})),function(e){e.Default="default",e.None="none",e.Mushroom="mushroom"}(Ze||(Ze={})),function(e){e.Default="default",e.NoAction="none",e.TurnOn="turn-on",e.TurnOff="turn-off",e.MoreInfo="more-info",e.Scene="scene",e.HueScreen="hue-screen"}(Je||(Je={})),function(e){e.Default="default",e.NameAsc="name-asc",e.NameDesc="name-desc"}(et||(et={}));class it{constructor(e){"string"==typeof e?this._onlyValue=e:e instanceof it?(this._onlyValue=e._onlyValue,this._valueStore=e._valueStore):this._valueStore=e||{}}getData(e){return this._onlyValue?this._onlyValue:this._valueStore[e]}}class st{constructor(e){Ke(e,"scene"),this.entity=e}getActivationService(){const e="scene.turn_on",t=this.activation||e,i=t.split(".");if(2!=i.length)throw new Error(`Unrecognized service '${t}'. The service should have 2 parts separated by '.' (dot). E.g.: '${e}'`);return i}getActivationData(){const e={entity_id:this.entity};if(this.activationData)for(const t in this.activationData)Object.prototype.hasOwnProperty.call(this.activationData,t)&&(e[t]=this.activationData[t]);return e}}class rt{constructor(e){this._config="string"==typeof e?new st(e):e}set hass(e){this._hass=e,this._entity=this._hass.states[this._config.entity]}activate(){this.ensureHass();const e=this._config.getActivationService(),t=this._config.getActivationData();this._hass.callService(e[0],e[1],t)}getTitle(e){if(this.ensureHass(),this._config.title)return this._config.title;let t=this._entity.attributes.friendly_name;return e&&0==(null==t?void 0:t.toLowerCase().indexOf(e.toLowerCase()))&&(t=t.substring(e.length).trimStart()),t}getIcon(e=null){return this.ensureHass(),null!=this._config.icon?this._config.icon:this._entity.attributes.icon||e}getColor(){return this._config.color?Ye.getColor(this._config.color):null}ensureHass(){if(!this._hass)throw new Error("Scene data not initialized - call setHass first!")}}let nt=tt=class extends ce{constructor(){super(...arguments),this.disabled=!1,this.step=1,this.min=0,this.max=100}onChange(e){this.value=e.detail.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))}onCurrentChange(e){const t=e.detail.value;this.dispatchEvent(new CustomEvent("current-change",{detail:{value:t}}))}render(){return W`
            <mushroom-slider
                .disabled=${this.disabled}
                .value=${this.value}
                .step=${this.step}
                .min=${this.min}
                .max=${this.max}
                .showActive=${!0}
                @change=${this.onChange}
                @current-change=${this.onCurrentChange}
            />
        `}static get styles(){return a`
            :host {
                display: inline;

                /* colors */
                --slider-color: var(--dark-primary-color, var(--primary-color));
                --slider-outline-color: transparent;
                --slider-bg-color: rgba(0,0,0,0.3);
            }
            mushroom-slider {
                display: inline-block;
                width: calc(100% - ${2*tt.Margin}px);
                margin-top: ${tt.MarginTop}px;
                margin-left: ${tt.Margin}px;
                margin-right: ${tt.Margin}px;

                /* colors */
                --main-color: var(--slider-color);
                --bg-color: var(--slider-bg-color);
                --bg-color-inactive: var(--slider-bg-color);
                --main-outline-color: var(--slider-outline-color);

                /* base styles: */
                --control-height: var(--mush-control-height, ${tt.Height}px);
                --control-border-radius: var(--mush-control-border-radius, 12px);
            }
        `}};nt.ElementName="hue-mushroom-slider-container"+ze.ElementPostfix,nt.MarginTop=8,nt.Margin=14,nt.Height=28,e([_e({type:Boolean})],nt.prototype,"disabled",void 0),e([_e({attribute:!1,type:Number,reflect:!0})],nt.prototype,"value",void 0),e([_e({type:Number})],nt.prototype,"step",void 0),e([_e({type:Number})],nt.prototype,"min",void 0),e([_e({type:Number})],nt.prototype,"max",void 0),nt=tt=e([fe(nt.ElementName)],nt);class ot{static createSwitch(e,t){const i=qe.getSwitchThemeStyle();return Be`
        <ha-switch
            .checked=${e.isOn()}
            .disabled=${e.isUnavailable()}
            .haptic=true
            style=${je(i)}
            @change=${i=>this.changed(e,t,!1,i)}
        ></ha-switch>`}static createSlider(e,t,i){if(!e.features.brightness||t.slider==Ze.None)return q;const s=t.allowZero?0:1;return t.slider==Ze.Mushroom?Be`
                <${He(nt.ElementName)}
                    class="brightness-slider"
                    .min=${s}
                    .max=${100}
                    .step=${1}
                    .disabled=${t.allowZero?e.isUnavailable():e.isOff()}
                    .value=${e.brightnessValue}
                    .showActive=${!0}
                    @change=${t=>this.changed(e,i,!0,t)}
                />`:Be`
        <ha-slider pin ignore-bar-touch
            class="brightness-slider"
            .min=${s}
            .max=${100}
            .step=${1}
            .disabled=${t.allowZero?e.isUnavailable():e.isOff()}
            .value=${e.brightnessValue}
            @change=${t=>this.changed(e,i,!0,t)}
        ></ha-slider>`}static changed(e,t,i,s){const r=s.target;if(r){if(i){const t=r.value;null!=t&&(e.brightnessValue=parseInt(t))}else{r.checked?e.turnOn():e.turnOff()}t()}}static calculateBackAndForeground(e,t,i=!0,s=t){const r=e.isOff()?t:e.getBackground()||s||t;let n;if(null==r)n=null;else{n=this.calculateForeground(e,r,i).foreground}return{background:r,foreground:n}}static calculateForeground(e,t,i=!0){let s=e.brightnessValue;i||(s=100);const r=e.isOn()&&s>50?-(10-(s-50)/5):0;let n=e.isOn()&&s<=50?ze.LightColor:t.getForeground(ze.LightColor,ze.DarkColor,r);return e.isOff()&&(n=n==ze.DarkColor?ze.DarkOffColor:ze.LightOffColor),{foreground:n,opacity:1}}static calculateDefaultShadow(e,t,i){if(t.isOff())return i?"inset 0px 0px 10px rgba(0,0,0,0.2)":"0px 0px 0px white";const s=e;if(!s||!s.clientHeight)return"";const r=100-t.brightnessValue,n=20+.95*r*(s.clientHeight/100);let o=s.clientHeight/2;r>70&&(o-=(o-20)*(r-70)/30);let a=.65;return r>60&&(a-=(a-.5)*(r-60)/40),`inset 0px -${n}px ${o}px -20px rgba(0,0,0,${a})`}static hasHueIcons(){const e=window;return!!e.customIcons&&"object"==typeof e.customIcons.hue}static setIconSize(e,t){t=Math.round(t),e&&e.updateComplete.then((()=>{e.renderRoot.children[0].style.setProperty("--mdc-icon-size",t+"px")}))}}class at{constructor(e,t){this._waitAfter=t,this._action=e}get action(){return this._action}get waitAfter(){return this._waitAfter}}class lt{constructor(){this._queue=new Array,this._currentEffectId=null}get currentEffectId(){return this._currentEffectId}addEffect(e,t){const i=new at(t,e);this._queue.push(i)}start(){let e=0;const t=()=>{this.planEffect(++e,t)};this.planEffect(e,t)}stop(){this._currentEffectId&&(clearTimeout(this._currentEffectId),this._currentEffectId=null)}stopAndClear(){this.stop(),this._queue.length=0}planEffect(e,t=null){if(e>=this._queue.length)return void(this._currentEffectId=null);const i=this._queue[e];this._currentEffectId=setTimeout((()=>{i.action(),t&&t()}),i.waitAfter)}}class ct extends ce{constructor(e){super(),this._id=e+"_"+ct.maxId++}}ct.maxId=1;class ht extends ct{set hass(e){const t=this._hass;this._hass=e,this.updateHassDependentProps(),this.requestUpdate(Ge(this,"hass"),t)}constructor(){super("HueDialogTile")}updateHassDependentProps(){}disableClickEffect(){this.renderRoot.querySelector(".hue-tile").classList.add("no-click")}enableClickEffect(){this.renderRoot.querySelector(".hue-tile").classList.remove("no-click")}}var dt;ht.ElementName="hue-dialog-tile"+ze.ElementPostfix,ht.padding=5,ht.height=90,ht.width=85,ht.titleHeight=35,ht.clickTransition="transform .15s",ht.hueDialogStyle=a`
    :host{
        -webkit-tap-highlight-color: transparent;
    }
    .hue-tile{
        background: ${o(ze.TileOffColor)};
        width: ${ht.width}px;
        height: ${ht.height}px;
        padding: ${ht.padding}px;
        border-radius: ${ze.HueBorderRadius}px;
        box-shadow: ${o(ze.HueShadow)};
        overflow:hidden;
        user-select: none;
        transition: ${o(ht.clickTransition)};
    }
    .hue-tile:not(.no-click):active:hover{
        transform: scale(0.95);
    }
    .title {
        color:${o(ze.LightColor)};
        font-size: 12px;
        line-height: 15px;
        font-weight:400;
        height:${ht.titleHeight}px;
        text-align: center;
        display: flex;
        flex-flow: column;
        justify-content: center;
        transition: ${o(ze.TransitionDefault)};
    }
    .title span {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    `,e([_e()],ht.prototype,"cardTitle",void 0);let ut=dt=class extends ht{constructor(){super(...arguments),this._effectQueue=new lt,this._sceneConfig=null,this._scene=null}set sceneConfig(e){const t=this._sceneConfig;this._sceneConfig=e,this._scene=new rt(e),this.updateHassDependentProps(),this.requestUpdate(Ge(this,"sceneConfig"),t)}updateHassDependentProps(){this._hass&&this._scene&&(this._scene.hass=this._hass)}sceneClicked(){if(!this._scene)return;!function(e){Me(window,"haptic",e)}("light"),this._scene.activate(),this._effectQueue.stopAndClear();const e=this.renderRoot.querySelector(".scene");if(e){e.classList.remove("clicked","unclicked");const t=1e3*dt.animationSeconds;this._effectQueue.addEffect(0,(()=>e.classList.add("clicked"))),this._effectQueue.addEffect(3e3,(()=>e.classList.add("unclicked"))),this._effectQueue.addEffect(t,(()=>{e.classList.add("stop-color-animate"),e.classList.remove("clicked")})),this._effectQueue.addEffect(50,(()=>{e.classList.remove("stop-color-animate","unclicked")})),this._effectQueue.start()}this.dispatchEvent(new CustomEvent("activated",{detail:{tileElement:this}}))}static get styles(){return[ht.hueDialogStyle,a`
    .scene {
        cursor: pointer;
    }
    .scene .icon-background {
        height: calc(100% - ${ht.titleHeight}px);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .scene .icon-background .color {
        background: var(--hue-tile-accent-color, darkgoldenrod);
        height: ${dt.colorDimensions}px;
        width: ${dt.colorDimensions}px;
        border-radius: ${dt.colorDimensions/2}px;
        box-shadow: ${o(ze.HueShadow)}, inset rgba(0,0,0,0.1) -8px -8px 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all ${dt.animationSeconds}s linear;
    }
    .scene .icon-background .color ha-icon {
        color: var(--hue-tile-fg-color, ${o(ze.LightColor)});
        transform: scale(${dt.iconScale});
    }
    .scene.clicked .icon-background .color {
        height: ${2*ht.height}px;
        width: ${2*ht.width}px;
        border-radius: ${ht.height}px;
        margin-left: -${2*ht.padding}px;
        margin-right: -${2*ht.padding}px;
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
        transition: all ${dt.animationSeconds/2}s linear;
    }
    .scene.clicked .title {
        color:var(--hue-tile-fg-text-color, ${o(ze.LightColor)});
    }

    @keyframes pop-icon{
        50% { transform: scale(${2*dt.iconScale}); }
    }
    `]}updated(e){if(this._scene&&e.has("sceneConfig")){const e=this._scene.getColor();if(e){const t=e.getForeground(ze.LightColor,ze.DarkColor,20),i=e.getForeground(ze.LightColor,new Re("black"),20);this.style.setProperty("--hue-tile-accent-color",e.toString()),this.style.setProperty("--hue-tile-fg-color",t.toString()),this.style.setProperty("--hue-tile-fg-text-color",i.toString())}}}render(){if(!this._scene)return q;const e=this._scene.getTitle(this.cardTitle);return W`
        <div class='hue-tile scene' title='${e}' @click="${this.sceneClicked}">
            <div class='icon-background'>
                <div class='color'>
                    <ha-icon icon="${this._scene.getIcon("mdi:palette")}"></ha-icon>
                </div>
            </div>
            <div class='title'>
                <span>${e}</span>
            </div>
        </div>
        `}};function pt(...e){}ut.ElementName=ht.ElementName+"-scene",ut.colorDimensions=ht.height/2,ut.iconScale=.75*dt.colorDimensions/24,ut.animationSeconds=1,e([ye()],ut.prototype,"_scene",void 0),ut=dt=e([fe(ut.ElementName)],ut);class gt{static getIcon(e){const t=ot.hasHueIcons();let i;return i=e<=1?t?this.HueOneIcon:this.DefaultOneIcon:e<=2?t?this.HueTwoIcon:this.DefaultTwoIcon:e<=3?t?this.HueThreeIcon:this.DefaultMoreIcon:t?this.HueMoreIcon:this.DefaultMoreIcon,i}}var ft;gt.DefaultOneIcon="mdi:lightbulb",gt.DefaultTwoIcon="mdi:lightbulb-multiple",gt.DefaultMoreIcon="mdi:lightbulb-group",gt.HueOneIcon="hue:bulb-classic",gt.HueTwoIcon="hue:bulb-group-classic",gt.HueThreeIcon="hue:bulb-group-classic-3",gt.HueMoreIcon="hue:bulb-group-classic-4";let mt=ft=class extends ht{constructor(){super(...arguments),this.lightContainer=null,this.defaultColor=null,this.isSelected=!1,this.isUnselected=!1}static get styles(){return[ht.hueDialogStyle,a`
    .hue-tile.light{
        height: ${ht.height+ft.switchHeight}px;
        background:var(--hue-light-background, ${o(ze.TileOffColor)});
        box-shadow:var(--hue-light-box-shadow), ${o(ze.HueShadow)};
        transition: ${o(ze.TransitionDefault)}, ${o(ht.clickTransition)};
    }

    .hue-tile.light.unselected{
        opacity: 0.7;
    }

    .selector.active{
        border: ${ft.selectorWidth}px solid var(--hue-light-background, ${o(ze.WarmColor)});
        padding: ${ft.selectorSpacing}px;
        border-radius: ${ze.HueBorderRadius+ft.selectorWidth+ft.selectorSpacing}px;
        margin: -${ft.selectorWidth+ft.selectorSpacing}px
    }

    .hue-tile.light .tap-area{
        display: flex;
        flex-flow: column;
        height: ${ht.height}px;

        cursor: pointer;
    }

    .title{
        color: var(--hue-light-text-color, ${o(ze.LightColor)});
        padding-bottom: ${ft.titlePadding}px;
        font-weight: 500;
    }

    .icon-slot{
        display: flex;
        flex-flow: column;
        text-align: center;
        height: ${ht.height-ft.titleHeight-ft.titlePadding}px;
        /*height: calc(100% - ${ft.titleHeight}px - ${ft.titlePadding}px - ${ft.switchHeight}px);*/
        justify-content: center;
    }
    .icon-slot ha-icon {
        color: var(--hue-light-text-color, ${o(ze.LightColor)});
        transform: scale(${ut.iconScale});
    }

    .switch{
        display:flex;
        flex-flow:column;

        height: ${ft.switchHeight+ht.padding}px;
        justify-content: center;
        background: linear-gradient(rgba(255, 255, 255, 0.1), transparent);
        border-top: 1px solid rgba(80, 80, 80, 0.1);
        box-sizing: content-box;
        margin: 0 -${ht.padding}px;
    }
    .switch ha-switch{
        justify-content:center;
    }

    `]}updated(e){if(e.has("lightContainer")){const t=e.get("lightContainer");t&&t.unregisterOnPropertyChanged(this._id),this.lightContainer&&this.lightContainer.registerOnPropertyChanged(this._id,(()=>this.lightUpdated()))}if(this.lightContainer){if(this.lightContainer.isOn()){const e=this.defaultColor?new Fe([this.defaultColor]):null,t=ot.calculateBackAndForeground(this.lightContainer,null,!0,e);t.background&&this.style.setProperty("--hue-light-background",t.background.toString()),t.foreground&&this.style.setProperty("--hue-light-text-color",t.foreground.toString())}else this.style.removeProperty("--hue-light-background"),this.style.removeProperty("--hue-light-text-color");const e=ot.calculateDefaultShadow(this,this.lightContainer,!1);this.style.setProperty("--hue-light-box-shadow",e)}if(e.has("isSelected")){this.renderRoot.querySelector(".selector").classList.toggle("active",!!this.isSelected),this.dispatchEvent(new CustomEvent("selected-change",{detail:{isSelected:this.isSelected,lightContainer:this.lightContainer,tileElement:this}}))}if(e.has("isUnselected")){this.renderRoot.querySelector(".hue-tile").classList.toggle("unselected",!!this.isUnselected)}}lightUpdated(){this.requestUpdate()}lightClicked(){this.isSelected=!this.isSelected}render(){var e;if(!this.lightContainer)return q;const t=this.lightContainer.getTitle().resolveToString(null),i=null!==(e=this.lightContainer.getIcon())&&void 0!==e?e:gt.getIcon(1);return W`
        <div class='selector'>
            <div class='hue-tile light' title='${t}'>
                <div class="tap-area" @click="${()=>this.lightClicked()}">
                    <div class='icon-slot'>
                        <ha-icon icon="${i}"></ha-icon>
                    </div>
                    <div class='title'>
                        <span>${t}</span>
                    </div>
                </div>
                <div class='switch' @mouseenter=${()=>this.disableClickEffect()} @mouseleave=${()=>this.enableClickEffect()}>
                    ${ot.createSwitch(this.lightContainer,pt)}
                </div>
            </div>
        </div>
        `}};mt.ElementName=ht.ElementName+"-light",mt.titlePadding=10,mt.switchHeight=45,mt.selectorWidth=2,mt.selectorSpacing=2,e([_e()],mt.prototype,"lightContainer",void 0),e([_e()],mt.prototype,"defaultColor",void 0),e([_e()],mt.prototype,"isSelected",void 0),e([_e()],mt.prototype,"isUnselected",void 0),mt=ft=e([fe(mt.ElementName)],mt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{D:vt}=oe,_t=(e,t)=>void 0===t?void 0!==e?._$litType$:e?._$litType$===t,yt=()=>document.createComment(""),wt=(e,t,i)=>{const s=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=s.insertBefore(yt(),r),n=s.insertBefore(yt(),r);i=new vt(t,n,e,e.options)}else{const t=i._$AB.nextSibling,n=i._$AM,o=n!==e;if(o){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==n._$AU&&i._$AP(t)}if(t!==r||o){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;s.insertBefore(e,r),e=t}}}return i},bt={},Ct=(e,t=bt)=>e._$AH=t,kt=e=>e._$AH,St=e=>(e=>null!=e?._$litType$?.h)(e)?e._$litType$.h:e.strings,xt=ue(class extends pe{constructor(e){super(e),this.tt=new WeakMap}render(e){return[e]}update(e,[t]){const i=_t(this.et)?St(this.et):null,s=_t(t)?St(t):null;if(null!==i&&(null===s||i!==s)){const t=kt(e).pop();let s=this.tt.get(i);if(void 0===s){const e=document.createDocumentFragment();s=le(q,e),s.setConnected(!1),this.tt.set(i,s)}Ct(s,[t]),wt(s,void 0,t)}if(null!==s){if(null===i||i!==s){const t=this.tt.get(s);if(void 0!==t){const i=kt(t).pop();(e=>{e._$AR()})(e),wt(e,void 0,i),Ct(e,[i])}}this.et=t}else this.et=void 0;return this.render(t)}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Et{constructor(e,t){isNaN(e)&&(e=0),isNaN(t)&&(t=0),this.X=e,this.Y=t}getYDiff(e){return this.Y-e.Y}getXDiff(e){return this.X-e.X}getDiff(e){return new Et(this.getXDiff(e),this.getYDiff(e))}toString(){return`[${this.X},${this.Y}]`}}class At extends Et{constructor(e){super(e.clientX,e.clientY)}}class Tt extends Et{constructor(e){super(e.clientX,e.clientY)}}class $t{constructor(e,t,i,s){this._currentMode=null,this._isMoving=!1,this._isConnected=!1,this._element=e,this._onDragStart=this.createDragStartDelegate(t),this._onDragMove=this.createDragMoveDelegate(i),this._onDragEnd=this.createDragEndDelegate(s),this.connectListeners()}get isMoving(){return this._isMoving}createDragStartDelegate(e){return t=>{if(this._currentMode)return;const i=$t.isTouchEvent(t);e(t,i),this._currentMode=i?"touch":"mouse",i?(document.addEventListener("touchmove",this._onDragMove),document.addEventListener("touchend",this._onDragEnd),t.preventDefault()):(document.addEventListener("mousemove",this._onDragMove),document.addEventListener("mouseup",this._onDragEnd))}}createDragMoveDelegate(e){return t=>{this._isMoving=!0,e(t,$t.isTouchEvent(t))}}createDragEndDelegate(e){return t=>{this._isMoving=!1,e&&e(t,$t.isTouchEvent(t)),this.removeDocumentListeners(),this._currentMode=null}}connectListeners(){this._isConnected||(this._isConnected=!0,this._element.addEventListener("mousedown",this._onDragStart),this._element.addEventListener("touchstart",this._onDragStart))}removeDocumentListeners(){document.removeEventListener("touchmove",this._onDragMove),document.removeEventListener("touchend",this._onDragEnd),document.removeEventListener("mousemove",this._onDragMove),document.removeEventListener("mouseup",this._onDragEnd)}removeAllListeners(){this.removeDocumentListeners(),this._element.removeEventListener("mousedown",this._onDragStart),this._element.removeEventListener("touchstart",this._onDragStart),this._isConnected=!1}static isTouchEvent(e){return"touches"in e}}var Lt;let Ot=Lt=class extends ce{constructor(){super(),this._deadZone=5,this._wheelChange=3,this._wheelDebounceInterval=800,this._wheelCloseInterval=800,this._value=100,this._immediateValue=this._value,this.enabled=!0,this.width=100,this.height=60,this.heightOpened=200,this.iconSize=24,this._isOpened=!1,this._clickPosition=null,this._hasMouseMoved=!1,this._onDocumentMouseUpDelegate=()=>this.onDocumentMouseUp(),this._onDocumentMouseMoveDelegate=(e,t)=>this.onDocumentMouseMove(e,t),this._onDocumentWheelDelegate=e=>this.onDocumentWheel(e)}get value(){return this._value}set value(e){this.setValue(e,!1)}setValue(e,t){if((e=Lt.cleanValue(e))!=this._value){const i=this._value;if(this._value=e,this.requestUpdate(Ge(this,"value"),i),t){const t=new CustomEvent("change",{detail:{oldValue:i,newValue:e}});this.dispatchEvent(t)}this.immediateValue=e}}get immediateValue(){return this._immediateValue}set immediateValue(e){if((e=Lt.cleanValue(e))!=this.immediateValue){const t=this.immediateValue;this._immediateValue=e,this.requestUpdate(Ge(this,"immediateValue"),t);const i=new CustomEvent("immediate-value-change",{detail:{oldValue:t,newValue:e}});this.dispatchEvent(i)}}static cleanValue(e){return(e=Math.round(e))<1?e=1:e>100&&(e=100),e}changeImmediateValue(e,t){const i=(t?this.value:this.immediateValue)+e;this.immediateValue=i}applyImmediateValue(){this.setValue(this.immediateValue,!0)}toggleBar(e,t){this._isOpened=e,this._wrapperElement.classList.toggle("fast",t),this._wrapperElement.classList.toggle("open",this._isOpened),e||this.removeDocumentListeners();const i=this._isOpened?"open":"close",s=new CustomEvent(i,{detail:{isOpen:this._isOpened}});this.dispatchEvent(s)}get _isMouseDown(){return null!=this._clickPosition}onBarMouseDown(e,t){this._clickPosition=t?new Tt(e.changedTouches[0]):new At(e),t||document.addEventListener("wheel",this._onDocumentWheelDelegate)}removeDocumentListeners(){this._dragHelper&&this._dragHelper.removeDocumentListeners(),document.removeEventListener("wheel",this._onDocumentWheelDelegate)}onDocumentMouseUp(){this._isMouseDown&&(this._hasMouseMoved?this.toggleBar(!1,!0):this.toggleBar(!this._isOpened,!1)),this._clickPosition=null,this._hasMouseMoved&&(this._hasMouseMoved=!1,this._isOpened||this.applyImmediateValue())}onDocumentMouseMove(e,t){if(this._isMouseDown){let i;i=t?new Tt(e.changedTouches[0]):new At(e);let s=i.getYDiff(this._clickPosition);if(!this._hasMouseMoved&&Math.abs(s)>this._deadZone&&(this._isOpened||this.toggleBar(!0,!0),this._hasMouseMoved=!0,this._clickPosition=i,s=i.getYDiff(this._clickPosition)),this._hasMouseMoved&&this._isOpened){this.clearWheelTimeouts(!0);const e=-s/this.heightOpened*100;this.changeImmediateValue(e,!0)}}}onDocumentWheel(e){if(this._isOpened){const t=e.deltaY>0?-this._wheelChange:this._wheelChange;this.changeImmediateValue(t,!1),this.clearWheelTimeouts(),this._wheelSubmitTimeoutId=setTimeout((()=>{this.applyImmediateValue()}),this._wheelDebounceInterval),this._wheelCloseTimeoutId=setTimeout((()=>{this.toggleBar(!1,!1)}),this._wheelCloseInterval)}}clearWheelTimeouts(e=!1){this._wheelSubmitTimeoutId&&(clearTimeout(this._wheelSubmitTimeoutId),this._wheelSubmitTimeoutId=null,e&&this.applyImmediateValue()),this._wheelCloseTimeoutId&&(clearTimeout(this._wheelCloseTimeoutId),this._wheelCloseTimeoutId=null)}updated(e,t=!1){var i;super.updated(e);const s=e=>{this._wrapperElement.classList.add("instant"),e(),this._wrapperElement.offsetHeight,this._wrapperElement.classList.remove("instant")};if(e.has("width")&&s((()=>{this.style.setProperty("--rollup-width",this.width+"px")})),e.has("height")&&s((()=>{this.style.setProperty("--rollup-height",this.height+"px")})),e.has("heightOpened")&&s((()=>{this.style.setProperty("--rollup-height-opened",this.heightOpened+"px")})),e.has("iconSize")){const e=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector("ha-icon");ot.setIconSize(e,this.iconSize),this.style.setProperty("--rollup-icon-size",this.iconSize+"px")}e.has("enabled")&&(this._wrapperElement.classList.toggle("disabled",!this.enabled),this.enabled?this.connectListeners():(this.clearWheelTimeouts(!1),this.disconnectListeners(),this.toggleBar(!1,!0))),(e.has("immediateValue")||t)&&(this._valueElement.style.height=this.immediateValue+"%")}render(){const e=ot.hasHueIcons()?"hue:scene-bright":"mdi:brightness-7";return W`
        <div id='wrapper'>
            <div id='desc'>
                <span>
                ${this.enabled?W`${this.immediateValue} %`:q}
                </span>
            </div>
            <div id='bar'>
                <div id='value'></div>
                <div id='icon'>
                    <ha-icon icon="${e}"></ha-icon>
                </div>
            </div>
        </div>`}firstUpdated(e){super.firstUpdated(e),this._wrapperElement=this.renderRoot.querySelector("#wrapper");const t=this._wrapperElement.querySelector("#bar");this._dragHelper=new $t(t,((e,t)=>this.onBarMouseDown(e,t)),this._onDocumentMouseMoveDelegate,this._onDocumentMouseUpDelegate),this._valueElement=t.querySelector("#value"),this.updated(e,!0)}connectedCallback(){super.connectedCallback(),this.connectListeners()}connectListeners(){var e;null===(e=this._dragHelper)||void 0===e||e.connectListeners()}disconnectedCallback(){super.disconnectedCallback(),this.disconnectListeners()}disconnectListeners(){var e;this.removeDocumentListeners(),null===(e=this._dragHelper)||void 0===e||e.removeAllListeners()}};var Dt;Ot.ElementName="hue-brightness-rollup"+ze.ElementPostfix,Ot.styles=a`
    :host {
        user-select: none;
        -webkit-user-select: none;
    }

    #wrapper{
        color: white;
    }
    #bar{
        position: relative;
        transition: all 0.25s linear;

        width: var(--rollup-width);
        height: var(--rollup-height);

        cursor: pointer;
    }
    #bar, #desc span{
        transition: all 0.25s linear;
    }
    .fast #bar,
    .fast #desc span{
        transition: all 0.15s linear;
    }
    .instant #bar{
        transition: none;
    }
    .open #bar{
        height: var(--rollup-height-opened);
        /*
        margin-top: calc(var(--rollup-height) - var(--rollup-height-opened));
        */
    }
    #desc{
        text-align: center;
        margin: 4px;
    }
    #value{
        position:absolute;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
    }
    #icon{
        text-align: center;
        position: absolute;
        bottom: calc((var(--rollup-height) - var(--rollup-icon-size, 24px)) / 2);
        width: 100%;
    }

    /* Disabled */
    #wrapper.disabled{
        opacity: 0.6;
    }
    .disabled #bar{
        cursor: default;
    }
    .disabled #bar #value{
        height: 2px !important;
    }

    /* Hue styling: */
    #bar{
        box-shadow: ${o(ze.HueShadow)};
        background: ${o(ze.TileOffColor)};
        border-radius: calc(var(--rollup-height) / 2);
        overflow: hidden;
    }
    #value{
        background: linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.1) 100%);
    }
    #desc span{
        border-radius: 10px;
        padding: 0 4px;
    }
    .open #desc span{
        box-shadow: ${o(ze.HueShadow)};
        background: ${o(ze.TileOffColor)};
    }
    `,e([_e({reflect:!0})],Ot.prototype,"enabled",void 0),e([_e({reflect:!0})],Ot.prototype,"width",void 0),e([_e({reflect:!0})],Ot.prototype,"height",void 0),e([_e()],Ot.prototype,"heightOpened",void 0),e([_e()],Ot.prototype,"iconSize",void 0),e([_e()],Ot.prototype,"value",null),e([_e()],Ot.prototype,"immediateValue",null),Ot=Lt=e([fe(Ot.ElementName)],Ot);class Mt{static saveWheel(e,t,i,s,r){const n=this.createKey(e,t,i,s),o=r.toDataURL();try{localStorage.setItem(n,o)}catch(e){console.error(e)}}static tryGetWheel(e,t,i,s){const r=this.createKey(e,t,i,s);try{const e=localStorage.getItem(r)||null;if(e)return{success:!0,dataUrl:e}}catch(e){console.error(e)}return{success:!1,dataUrl:null}}static createKey(e,t,i,s){let r=e;return"temp"==e&&(r+=`(${i}-${s})`),`HueColorWheelCache_${r}${t}x${t}v${this.version}`}}Mt.version=2;let Pt=Dt=class extends ce{constructor(){super(),this.mode="color",this._tempMin=2e3,this._tempMax=6535,this._isRendered=!1,this._markers=new Array,"undefined"==typeof ResizeObserver?this._ro=null:this._ro=new ResizeObserver((()=>this.onResize()))}setTempRange(e,t){let i=!1;e!=this._tempMin&&(this._tempMin=e,i=!0),t!=this._tempMax&&(this._tempMax=t,i=!0),i&&this._isRendered&&"temp"==this.mode&&this.drawWheel()}onResize(){this._markers.forEach((e=>e.refresh()))}firstUpdated(e){super.firstUpdated(e),this.setupLayers(),this.drawWheel(),this._isRendered=!0}updated(e){e.has("mode")&&e.get("mode")&&this.drawWheel()}setupLayers(){this._canvas=this.renderRoot.querySelector("#canvas"),this._backgroundLayer=this.renderRoot.querySelector("#backgroundLayer"),this._interactionLayer=this.renderRoot.querySelector("#interactionLayer"),this._backgroundLayer.width=Dt.renderWidthHeight,this._backgroundLayer.height=Dt.renderWidthHeight}addMarker(){const e=new It(this);return this._markers.push(e),this.requestUpdate("_markers"),e}drawWheel(){const e=this._backgroundLayer.getContext("2d");if(null==e)throw Error("Cannot create convas context!");const t=Dt.renderWidthHeight/2,i=Mt.tryGetWheel(this.mode,t,this._tempMin,this._tempMax);if(i.success){const t=new Image;t.onload=()=>{e.drawImage(t,0,0)},t.src=i.dataUrl}else{const i=e.createImageData(2*t,2*t),s=i.data;for(let e=-t;e<t;e++)for(let i=-t;i<t;i++){const r=this.getColorAndValue(e,i,t);if(!r)continue;const[n,o,a]=r.color,l=255;s[r.index]=n,s[r.index+1]=o,s[r.index+2]=a,s[r.index+3]=l}e.putImageData(i,0,0),Mt.saveWheel(this.mode,t,this._tempMin,this._tempMax,this._backgroundLayer)}console.log(`Drew ${this.mode} wheel`)}getRadius(){var e;let t=null===(e=this._canvas)||void 0===e?void 0:e.clientWidth;return t||(t=Math.min(Dt.maxWidth,Dt.renderWidthHeight)),t/2}getCanvasMousePoint(e,t){let i;i="changedTouches"in e?new Tt(e.changedTouches[0]):new At(e);let s=i.X-this._canvas.offsetLeft,r=i.Y-this._canvas.offsetTop;return t&&(s-=t.X,r-=t.Y),new Et(s,r)}getColorAndValue(e,t,i){return"color"==this.mode?this.getColorAndHSV(e,t,i):"temp"==this.mode?this.getTempAndKelvin(e,t,i):null}getColorAndHSV(e,t,i){const[s,r]=Dt.utils.xy2polar(e,t);if(s-Dt.overRender>i)return null;const n=Dt.computeIndex(e,t,i)[0],o=Dt.utils.rad2deg(r),a=Dt.utils.getHue(o),l=Dt.utils.getSaturation(s,i),c=Dt.utils.getHSvalue(a,s,i);return{index:n,color:Re.hsv2rgb(a,l,c),hsv:[a,l,c]}}getTempAndKelvin(e,t,i){const[s]=Dt.utils.xy2polar(e,t);if(s-Dt.overRender>i)return null;const[r,,n,o]=Dt.computeIndex(e,t,i),a=n/o,l=Math.round(Dt.utils.hueCurveScale(a,this._tempMin,this._tempMax));return{index:r,color:Re.hueTempToRgb(l),kelvin:l}}static computeIndex(e,t,i){const s=2*i,r=e+i,n=t+i;return[4*(r+n*s),r,n,s]}getCoordinatesAndTemp(e,t,i){e<this._tempMin?e=this._tempMin:e>this._tempMax&&(e=this._tempMax);const s=2*t;let r=Dt.utils.inverseHueCurveScale(e,this._tempMin,this._tempMax)*s-t;r=Math.round(r);let n=0;if(i){const e=Math.ceil(Math.sqrt(t*t-r*r)),s=-e;n=i.X,n<s?n=s:n>e&&(n=e)}const o=Re.hueTempToRgb(e);return{position:new Et(n,r),color:o}}getCoordinatesAndColor(e,t,i){const s=Dt.utils.getDeg(e),r=Dt.utils.deg2rad(s),n=Dt.utils.getR(t,i);let[o,a]=Dt.utils.polar2xy(n,r);a=Math.round(a),o=Math.round(o);const l=Dt.utils.getHSvalue(e,n,i),c=Re.hsv2rgb(e,t,l);return{position:new Et(o,a),color:c}}render(){return W`
        <div id='canvas'>
            <svg id="interactionLayer">
                <defs>
                    <filter id="new-shadow">
                        <feDropShadow dx="0" dy="1.0" stdDeviation="2.0" flood-opacity="1"></feDropShadow>
                    </filter>
                </defs>
                ${this._markers.map((e=>e.render()))}
            </svg>
            <canvas id="backgroundLayer"></canvas>
        </div>`}connectedCallback(){var e;super.connectedCallback(),null===(e=this._ro)||void 0===e||e.observe(this),this.onResize(),this._markers.forEach((e=>e.connectAllListeners()))}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._ro)||void 0===e||e.unobserve(this),this._markers.forEach((e=>e.removeAllListeners()))}};Pt.ElementName="hue-color-temp-picker"+ze.ElementPostfix,Pt.overRender=2,Pt.maxWidth=400,Pt.renderWidthHeight=600,Pt.utils={hueCurveScale:function(e,t,i){let s=0;const r=i/t/65;return s=e<=.1?this.linearScale(10*e,0,r):e<=.97?r-this.linearScale((e-.1)/.9,0,2*r):-r+this.linearScale((e-.97)/.03,0,r),(Math.pow(i/t,Math.pow(e,1.55))+s)*t},inverseHueCurveScale:function(e,t,i){let s=0,r=1,n=.5;for(;r-s>1e-4;){this.hueCurveScale(n,t,i)<e?s=n:r=n,n=(s+r)/2}return n},linearScale:function(e,t,i){return(i-t)*e+t},xy2polar:function(e,t){return[Math.sqrt(e*e+t*t),Math.atan2(t,e)]},polar2xy:function(e,t){return[e*Math.cos(t),e*Math.sin(t)]},rad2deg:function(e){return(e+Math.PI)/(2*Math.PI)*360},deg2rad:function(e){return e/360*2*Math.PI-Math.PI},getHue:function(e){return(e-=70)<0&&(e+=360),e},getDeg:function(e){return(e+=70)>360&&(e-=360),e},getSaturation:function(e,t){const i=Math.pow(e,1.9)/Math.pow(t,1.9);return i>1?1:i},getR:function(e,t){return Math.pow(e*Math.pow(t,1.9),1/1.9)},getHSvalue:function(e,t,i){let s=.95;return s=Dt.utils.fixHSValue(s,t,i,e,60,!0),s=Dt.utils.fixHSValue(s,t,i,e,180,!0),s=Dt.utils.fixHSValue(s,t,i,e,240,!1),s=Dt.utils.fixHSValue(s,t,i,e,300,!0),s>1?1:s},fixHSValue:function(e,t,i,s,r,n,o=5){if((n?t>i/2:t<3*i/4&&t>i/4)&&s>=r-o&&s<=r+o){let t=r-s;t<0&&(t=-t),t=o-t,n?e-=t/360:e+=t/360}return e}},Pt.styles=a`
    :host {
        user-select: none;
        -webkit-user-select: none;
    }

    #canvas {
        position: relative;
        width: 100%;
        max-width: ${Dt.maxWidth}px;
        margin: auto;
    }
    #canvas > * {
        display: block;
    }
    #interactionLayer {
        color: white;
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: visible;
    }
    #backgroundLayer {
        width: 100%;

        border-radius: 50%;
        box-shadow: ${o(ze.HueShadow)}
    }

    .marker {
        fill: currentColor;
        filter: url(#new-shadow);
    }
    .icon {
        transform: scale(1.2) translate(8px, 8px);
        transition: ${o(ze.TransitionDefault)};
        fill: white;
    }
    .gm.boing {
        animation: boing 150ms ease-in-out;
    }
    .marker, .icon{
        cursor: pointer;
    }

    @keyframes boing {
        0% {
            scale:0.9;
        }
        50% {
            scale:1;
            translate: 0 -5px;
        }
        100% {
            scale:1;
        }
      }
    `,e([_e()],Pt.prototype,"mode",void 0),Pt=Dt=e([fe(Pt.ElementName)],Pt);class It{constructor(e){this._color=new Re(0,0,0),this._temp=0,this._mode="color",this._icon=It.defaultIconName,this._isOff=!1,this._parent=e,[this._markerG,this._iconPath]=It.drawMarker(),this.position=new Et(.3*this.getRadius(),.6*this.getRadius()),this.makeDraggable()}getRadius(){return this._parent.getRadius()}dispatchChangeEvent(e){const t=e?"immediate-value-change":"change";this._parent.dispatchEvent(new CustomEvent(t,{detail:{marker:this,mode:this.mode,newColor:this._color,newTemp:"temp"==this.mode?this.temp:null}}))}boing(){this._markerG.setAttribute("class","gm boing"),setTimeout((()=>{this._markerG.setAttribute("class","gm")}),200)}get position(){return this._position}set position(e){var t;(null===(t=this._dragHelper)||void 0===t?void 0:t.isMoving)&&(this._isOff=!1);const i=this.getRadius();this._position=It.limitCoordinates(e,i),this.renderPosition();const s=this.getPositionFromCenter(i),r=this._parent.getColorAndValue(s.X,s.Y,i);if(r){if("hsv"in r){const[e,t,i]=r.hsv;this._color=new Re(e,t,i,1,"hsv")}else{const[e,t,i]=r.color;this._color=new Re(e,t,i)}this.renderColor(),this.mode=this._parent.mode,"kelvin"in r&&(this._temp=r.kelvin),this.dispatchChangeEvent(!0)}}setPositionFromCenter(e,t){const i=new Et(e.X+t,e.Y+t);this._position=It.limitCoordinates(i,t),this.renderPosition()}getPositionFromCenter(e=null){return e=null!=e?e:this.getRadius(),new Et(this._position.X-e,this._position.Y-e)}get mode(){return this._mode}set mode(e){this._mode=e,this.renderMode()}refresh(){"temp"==this.mode?this.temp=this.temp:this.color=this.color}get isOff(){return this._isOff}set isOff(e){this._isOff=e,this.renderColor()}get color(){return this._color}set color(e){"string"==typeof e&&(e=new Re(e)),this._color=e,this.renderColor(),this.mode="color";const t=this.getRadius(),i=this._parent.getCoordinatesAndColor(e.getHue(),e.getSaturation(),t);this.setPositionFromCenter(i.position,t)}get temp(){return this._temp}set temp(e){this._temp=e;const t="color"==this.mode;this.mode="temp";const i=this.getRadius(),s=this.getPositionFromCenter(i),r=this._parent.getCoordinatesAndTemp(this._temp,i,t?void 0:s);this.setPositionFromCenter(r.position,i);const[n,o,a]=r.color;this._color=new Re(n,o,a)}get icon(){return this._icon}set icon(e){this._icon=e,this.getIcon(e).then((e=>{e||(this._icon=It.defaultIconName,e=It.defaultIcon),this._iconPath.setAttribute("d",e)}))}async getIcon(e){if(!e)return null;const t=customElements.get("ha-icon");if(!t)return null;const i=new t;return i.icon=e,await i._loadIcon(),i._path}getMarkerOffset(){const e=this._markerG.getBBox();0==e.width&&(e.width=48,e.height=60);const t=e.width/2,i=e.height;return new Et(t,i)}renderColor(){if(this._isOff)this._markerG.style.color="rgb(0,0,0)",this._iconPath.style.fill=ze.LightColor.toString();else{this._markerG.style.color=this._color.toString();const e="temp"==this.mode?-25:0,t=this._color.getForeground(ze.LightColor,ze.DarkColor,e);this._iconPath.style.fill=t.toString()}}renderMode(){this._markerG.style.opacity=this.mode==this._parent.mode?"1.0":"0.6"}renderPosition(){const e=this.getMarkerOffset(),t=this.position.X-e.X,i=this.position.Y-e.Y;this._markerG.style.transform=`translate(${t}px,${i}px)`,this._markerG.style.transformOrigin=`${this.position.X}px ${this.position.Y}px`}render(){return this.renderColor(),this.renderPosition(),this.renderMode(),this._markerG}makeDraggable(){this._dragHelper=new $t(this._markerG,(e=>this.onDragStart(e)),(e=>this.onDrag(e)),(()=>this.onDragEnd()))}onDragStart(e){const t=this._parent.getCanvasMousePoint(e);this._dragOffset=t.getDiff(this.position)}onDrag(e){this.position=this._parent.getCanvasMousePoint(e,this._dragOffset)}onDragEnd(){this.dispatchChangeEvent(!1)}connectAllListeners(){var e;null===(e=this._dragHelper)||void 0===e||e.connectListeners()}removeAllListeners(){var e;null===(e=this._dragHelper)||void 0===e||e.removeAllListeners()}static drawMarker(){const e=document.createElementNS("http://www.w3.org/2000/svg","g");e.setAttribute("class","gm");const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("class","marker"),t.setAttribute("d","M 24,0 C 10.745166,0 0,10.575951 0,23.622046 0,39.566928 21,57.578739 22.05,58.346457 L 24,60 25.95,58.346457 C 27,57.578739 48,39.566928 48,23.622046 48,10.575951 37.254834,0 24,0 Z");const i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("class","icon"),i.setAttribute("d",this.defaultIcon),e.appendChild(t),e.appendChild(i),[e,i]}static limitCoordinates(e,t){if(t<=0)return e;const i=e.X-t,s=e.Y-t,r=Math.abs(Math.sqrt(i*i+s*s));if(r>t){const e=t/r;return new Et(i*e+t,s*e+t)}return e}}It.defaultIconName="default",It.defaultIcon="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z";class Ht{}var Vt;Ht.ModeColorIcon64="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAECxJREFUeJzFW3usbUdZ/9as136cs27Va9BgUoSb8tDQq9SqtJreWKCINVCEmPoAQ1P+aEUSa4KaGq8hxBcaMQhCeBgKKSpFbZvekggEbVGk9JVoq1cvUbFGEulZ5+zX2mut8ZuZb2a+mb32uVd6ru7k1++bWXuvPb/f95vH2j1XwEV61RVk9XG4rH52cn39PPFr9Xemd9ffnf19fVU+q3+okPUPl7K+YSTrGxFvxPxm7PvZfFHflj1Z/1J6pj4t3lH/evLa+p3Ji+rfh+JijVMc9Q1rSI/XeXI9SHEfpPnfQVb8BRTj26Gc/giMd14Io90JjCuA8a7BiKD6RrsjKHcug2L6CvzML0JW/ilk2RcgE39ZfzD58foO+JajHu+RCVDDN52oRfW7kJdfhHz0SRhNrkXCFUyQ3GQHdLSkxzsReUS549sKJfWVO1MU5Gq858cgy79Yf0L8YX03vPioxv2MBKjhBWmdnLiqTi89gxV7Akm+FXYvuRR2j6UwPQawg5gSJljhqYVqU5/CmNraGcoJFsc8yipBUZ6NTroZivLR+tPpA/VfJy+v/wby/xcBanjJcRDlB5H4p7DCr9Ckd3Ggu5b4rqk6x3gLgsoT+XJ3EwXH9KU4ve6GQtxZPw7P+T8VoE6ufhmkxX1Qjn8aJtMJTHeMzV1UxKZIZIIRMZqGKCfmWjlVREy74Dlr5xPClEDtTMcCstENkGdn6rO4YH4ZkosqQA3Xj2tx3W/iAO9FklfALlZK41iI6hAXTHa91Z0Lqk0nuHWgOsQFlYn59Pm49nxcFuL9X/sqHLsoAtTw+hMginuxcr+Alc5hB79YYUqw7R2a5yoqN4yHYN2wY6CcoIF5wcDbOYHnzhU7IPNpKrPRm2SafvarX4OTRypADW94Flr+/VCOTmlLKwJjsvdkSqB+lY+nfgpojA1KRDE2NtdWp3Zhbc9ybfUxgeUZz01bpmOHPilPdkn6oX/fS779SASo4RYkP/ocErrGVXxnx1d8SnNeVXxnN8R0d9gFowGUDAW5oogcoR0wZQ5AZFOQhF7sQJsoTE6uk/SBJ3GLekYC1HDbCUjLO7HSl/lKR9AC2DZbDO2C6OzOQQ5w1mdt5wCyd7wQZlMWsfqZQS+mijh0CBVbGH/rGtI/ebhOXvJ1CVDD7WOc8++DYnSNs7u2/BiC9iD4NGD2t1AESzYl8tjy48jmhKBv5K0vlPXHSJ4AYyUAojzZgvjA52u45H/vADE6jZU6Zea2JW/n+cRjYy2w19l64NYCqvRoHM15thbkk2gdYGBiSJr7fWqqroj3uvITIm8xuryB9F2fqoe3yEEB6uR3XoZHz7e6QVuSOh+HhLY5YMScUMYOsHlMnvKg4qPQBQq68iOq/MhVnwhz8hpryH+yheTGCxKghveoE947cMXPYTTyFtZ53B4zi0ft8WTzemFhrU9tS1STHYV5yiJBpiWSL3HeW/IjtL1CSTFGmeB68KufqOGyQwWo4SMpkn8nDu6KYPAx2cOEiGGFKEbDyFnMI/LZyM13C0VeEZeJrb4haSvv8xjFCRTh9/6oRpW2OiDJvg+//MccqZIIloysq/SItVnO4e4x9n3FFsIBaY5yo/IysdXfqLQmy93ARcCpcC1OhVduF0CMbsfqT8z8HCA0BEeci8Lmu9sBeLVLgiVeErjdSwMnQmGIq6o78uVWGNK8rVBkDYjTgwLUcEbt+dfio6YfnMoVShULn5eUFyy6Prquwd8zMnleMAEwzwomQOGRGtK4FWv0CCmMCAodYB+Y6HPftmjxabl1uW6/+LdruGrTAaK8BQeZ6oHyCm/MWyKjhaB2ycRyZPl72fW88MhIiIA0EU+LIJcJkReGaO9IloEQmyiJuBMAp4K49TRti8JU//PH8cteE85PGlxAbKDyW2MRfdYKwCsfVTzbJG5cUEKit71CE7cwlc81qc6hiCvunGD7cDF8eQvmNwTjgKT8fvzSb3ODyQtvV96nkW/GLO6P85zdK2fEMU9zIkq5ILBcJjkSzYi4yTsdcxatKFaIjOUGLWEN2TeuILleC1DDExkK8BZcbNKN1dg5IZq72ZAY+QD5IkRhBWNI85A8F8GRzxl5n3eBAJuEbV+LsXUxs9Pgpltr2EEHFM/FVfdKvypbkpZo1M64M8pNkgEGRND3YpXPiq0iKPISbPUzV/mOOaAPKuyvt67invzaOwDwePyCBpLvEPglz8dVtgrmXJpvWjMdqFiWYcx8dEgJ6hrlQ+8RBJsnGUWTS0gD8gqqT+o83YougBIgJXFSyjXyNcDlKEDxPT1WQaqVFklJK4JbnGybiZBlw+SzAQz1W3EUBEfqckteOtIhcekcEaIl0h2RZoTV4kfIdFyBuFL0SfFdiniPJHsSweQohrJhaqD348AZrO3m80CVA9LMGelA5RX5hJO3VbUOSF001RUDFedVFppoGxFXaLQAyUnRJsnzWiGgQ/RovV4YSByIiQY9Xre5tqirVhoiZVHngpCGpDVx6lfXE2rjoE21RYB+C7oLQMuwDpCcEE2SXNqIBNYKqYr4RswVOi0MiZJYCAepCcQWjkg6CI+UiaLuYRGRtkL0LlrSqYtDZLuIcEg81RGPxMoBx8QqSSZKgBXCCaFESJUQHl1KwEF3JEhnReCOSA4hnojQEYeS94QlHtrCyidEmMdEVZTIJrzKmqwhnWisnAACUADABKBJPNYsrnFsrUKCX4LohYfUDlH9gIIAiqGA/wnASIr4moI+iWnILegZugG0BJ63kSANtY0I4MQwAljyQFDEgQQAg5YEaSlXUMQ7CGNPeQ9WEMfP/CdxDUYeNFEvArjYRwJsigCMOI1PkwVygufQOAESXXQFsaTExhgNAxelZTduI3QMPYMWxHNmLysCOPL8c/Ze/P42X0f5OhrzECcO0eA3rhAqug9Kupn0N12zvlb6L9aDkTRIaeAGLz0ktaUFkQ2Jh/AiSLy/R+siJy5ZtWUQvSBSY6VBAqykJx0IIT3WEVoibdGxyIVwgij0nrwVAuQQcW996wS/DnA3SIeQsHRELVlPWqLTLXnTFkvsW+Kdl0qAPoQWoCco8r0RQLXXHEqAnkToTd4ReurrZNjnAEPgIggmhmDrgAjmviGuiPVEuEeyMYwAC8wtlAP+VQtAWMkBEbgQEfn2EGgxOk/cCdAz8tKT7tnc74KKJ9T22+Hm4cifDcwZwK764CrPxViYvn0lwDlOLiYZt9vDiHdh9QN0m9XfWDMGnBCKsw1Dp8Q0OjEmbnew6wFOhXNqCnxpgYNTWCq0FAkrhZYioWFRozVxrdBGoP5OYlVwj4wdYkWIV/fOxSRwQUd7e+umwRD8k2BHvwGED0z2oSn/knLAQzFxTtaSbxjidkPEnQgRuh5tiSwVAtJ8IQVwhxlbLS9IuMeH70kiMVI6CqfuWOwfkrwYrX7YKlAAgH9AQrPzkY7JuuqyKg9Vv+uFJr4m8s4BclOITQfY6nMHxGKJSIQ4hsKwiF+ZP6zOAWfR/g8v8Fs5ljhZFmvKqW2x4n1KLNbPsW7xsROPjKtWGoHYGmLbbmuV9uRmYff08DRnr8fH3dZ9zj4Axb8B8N8F9C9H/4wOeFy8DaoGp8G7kah0JNth4pokizEanuMDhF4bkGXTSecSN02ibdSdN4JjbJwPYei6YELxJ0MvRA/5HVB9ZU//KowL4WeR7H8sqOox4RWr7mHk7WcMedyCsKyNnvsR4SFIdtzeIAdbsCmCd0P87O8fjVGAWkL5ccVdC/AbUP0nToN75yTAHEeysFizHLFkkUML1ygh8DFzbWy/avvhRXNg23UYeGILcSHvsU9/gkX/OwDa/zMA2b84AdQLDz3vVsQteRdXoQDbsFyp6gtEQi6RhnhrEG+h7rDFDl7u0KWf1jhJjiTKzwdBz/8mb/S5IHsPVI90gQDvheoxnAYPDongMCQG9WniDZHHyisHNHw3oW1SE42dIONnEU9+dQi5VeCCWDifr4G7Ij0nqwfut7yD/zuMR+HTWPFmhqRmVP2ZxdK0h7BYJRgFrR9SI94R7FnD5fFhi1ygjuNz3C/Vs8mSSBgAi/YaRNcSds3/+sN+AcI757/COQcCoPqfwXXgHktYY8UiE8Nibsk3lnxvdo8I9mzBD1pOhD6EcsKCCbB0AJdb0rwvFEy1RfB5rP6DuPfftVWAu6Ba4wB+Hqv/pCJ3sApFOFBY+Hy2TPCaMG5B8guNTfLupEkIjt4ReV15mWgsFAIBYsAh12LB0qfwBHgbVJ+cbxVAve6H6stYnV9G0p0j7QiHDjjA0R7gqJeNdNZ3B6MBF8TPGZb0IhJiJc3gV3KIIGwh7qfGkCvw5Pd2qD76hZjv4F+JIY+7sKof3l/4qluovv2lieraHMnPcCVbYHTb5pqdJNmJMgCSnrcGCz3vyRm9wRIfnOaQ6KmgXLAJCPLlwHusADj/75GQvm+I66AAD0Il1VTAKfDIPhqmJuI2qj4VZ3ZXUGcHQpwvWk/UEWYicMx7glQwU0BFJcTcERM6zjHOmRD+PRCLcA73/Zuhem97wQKo1+NQ7eFU+Bkk+YitvHYBJx9XOYImPFB9Ve05J07kFwxLSUIExAUjBhtkN10hzuK8vwmq33pqG89D/1b4LJ4W0Ak3IOGnaiS+R9hfmjOCwqzxua38jBC3Z62BdYJuWwF4jpj1VH3EjFwwizA/BCjWHh55Xy+r058+jON5/1r8K7I6hwP6wb0FPPL0zAigdgcLJYDOm6jPYk3tdYTWC6Lyg46hVwIYHCD5AyngAEkdOPKqLVwMr2kBzuIT3ymo3vbw+fhd0L8X2JPVWZwON6HtH91q99j2lLvIF79ueCq4dcBNCb8VmiiC9WAOgwsfzvn0zVDdel7yFyyAejWyeghPt9fgVvYRFELyiqt8xuLssMrTdDhoI1D1Zx1VXld/0wW++qbavPoo0D34tHeVrN50qO2/LgH0q6ue7jJ4A+7PP4VEz+4j2Rh1Y2DzfYv1FiD5/c7HujXQfV0C++iCfRRA/VXbPopQ45D3IaFochTgKVzwbsHV/jVQ/cTWBe+ZC6BeT1dS/lf1URzjq3BanEG7t6rSbuFr/MI3tCDaxW7WssWPL4C9nwZ6HZAGc+ALn7DtDi3/V1j1V8vqlX8A1Y8ObnVHK4B9/Vv1j52AV+MDzOuQ4GMH1gUNi6z6NUFXvaGKWwcMQTmgN/GgM9V3MNPgHD7cvBG3ueugOrVxwrv4AqjXE9VKPlr9Wfe31eW4XV6NQtxZr+C/95T9ESruNSavaUro9trEPRVbg7r1+V5noKcDkt9DIWqcBmj3GteAP0fi13XVC58rq5N3QHXl/PwDvVgC8Nfnqgf6FG7Eh8ErUIyfQ1s/jgve+mDL/D9ovQsOWOX5dqgd0OMU65MnF11yeyOTKzqZvlZWz7n//AO6sNfR/uvx+yoJd1fn5B9X78LxvxTF+AF86HkzbnkfQEEeQkH2AtvHU0AvfLCP5B/DNeDDuMa8Be9xCh/iv1d+8yVvh284/k9wybO6oxzy/wBj4DViryyfzgAAAABJRU5ErkJggg==",Ht.ModeTempIcon64="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAFa0lEQVR4nO2bW2xUVRSGv7XPmZnSRtpU64XgFUNUiilKJZJi5VYMQgjRGhNDDPFRgwkajS8kPphAiNZn1MQYIzEYUaOAChTkGtDYWLXEBAwKCXJRILbQ6cz5fSjVaTsz7dxLx+9pZp+91/n3Ouvs+zEKiL68t4rYhNkE1oipAVk9plvBKpMXUC9wHKwLpw6MQ4Ri+2zhdxcKpdHybVCbm2sIRZcCrZgtACbkaDGKbA8Em3D+x7Z475l86Bwgbw7QlqZ7EKtBT2JWlS+7g2+iXmAznmuzR/YcyofJnB2grx66mz6tw2wJlv+ISn1jduH0cq6OyFqwNjfXEHGvYnoWw8tFRNYECMf7xPSSLdl9KhsTWTlAXy1YhIK3kN2cTfkCcBZnq6xl+8ZMC2bkALU3+/RFXkN6EcxlerOCY7xDbXiVzfy8Z/RFRon2t9Tyt20Ea8lOXZGQviVuy23xthOjyT4qB2j70htQbBvQkJO44vErTgtt/rajI2Uc0QH9lQ8OYNyeH21F4wwKmmzh1l/SZUrrAO1vraXn8g6unic/BPuVSPCwzfn8t5Q5Ul1Qe7NPvOYLjLH9zo/M91THm1I1jH7KYkHta7gx3uCNjhlc8DYIVhho6MWkEaCdTyyC+BZsDHZ1WWMrbe6md4elDk1Q+7IaiPyAMVYGOXnCLmBMt+YPf09MHf4KuMpXYbxVHoBqpDbg8cTEQRGgXSvuxqkTSjS2LwbOzbOm99oH/g6OAGfrMDd+Kw8g1gsaBxrEfyNAB1feQx8/FnVKWyqkFpvz7teQGAExtxpn47/y/awGvoYrEaD252uIXD4BBVrJGXMoINBUa9pwtD8CJvQtRX6ZVB4Ah2etwNorr4Dfyjga8oySVmCtqeOFKqI6Q86rt1cZkvDit/n0ebMxlVflAQwj7s3zMa+xDDq+5DgafTyvAZWpB4wGH/x6XJk6QNT7uNCtpdZRMoyJPs5PvlFZJvhY6kWhcsDHhUqtoaT874D/HVD2DjC/F7NIqYWUCh8XOo7Z1FILKQmi28cLd0GZOgC6fCzUgdmyUispER0+XsWhJDtGZYIO+1QE+4iGo2DhUsspOhbf2b8oevrgdoz5pdZTVEQXdbOm9U8ELLQJ58rLAQQfmVn/Sogu/lJHPPZ72YwHJBFoul077af/doYuHtuI2ZOl1FU0Au216jvmQOLOkDehDaM8HOCCNwZ+Dt4d7v2zHezhogsqLkcI19SbWRyGOkDdDxBzB7FxvEcolluo4pOBv8NPiEjvCVYUV1VxMNgBLDQzJaQNRtKNsSDoBLuuqOoKjl3yHfeZ2ZHE1GELgmZ2qjemVUIfFE9cUVgTGlJ5SHNOsLsv/jbwTEElFQuxtTLkHk0M/QFSH5SUKi9G47uBmQUVV3iOEfYeqDY7l+xi2tb+bHf3ZOdFvoGr7pwwAJLOhsxvnlhhP6fKM2J3d/6SpkQVOwDU5VVdwVG3ibl1VeHD6XKNqr8/fVlTY7G+bXaVnBiXOIuxeNIIlYcMPpg42aNb4rG+TzBm5Cav4BzzQ6Glk9KEfSIZjfhOSpW9F3s3gD2VnbYCY2wNK7xicnXyBi95kQyRZEfPR58OTG8C1ZmWLxCXTKy5sybyerKuLh1Zj/k7z/Xc7Jm1AY9layMvSDtc4J67q65i2CBnNOQ86en869JcxbVecH+utjLkiEmvTL+u8tNMn3oieZn1SbLvz11eEATBakRLob4zkCQz9nnOe6Ph2shnA1PaXMj7tHfvH+enhAi3SmqVNCMfU2uDLsRHRvDhrJuu+SkfOhNsF449J3tuCRTMcx6NEg2S6s1sYroykroNusxcB8QPe15o54PXVxzNJczT8Q+nqrqMIUr4CAAAAABJRU5ErkJggg==";let Bt=Vt=class extends ce{constructor(){super(),this.mode="color",this.showColor=!0,this.showTemp=!0,this.colorPicker=null}selectPossibleMode(){this.showColor?this.mode="color":this.showTemp&&(this.mode="temp")}updated(e){if(super.updated(e),e.has("mode")&&this.colorPicker&&("color"!=this.mode&&"temp"!=this.mode||(this.colorPicker.mode=this.mode)),e.has("mode")&&"brightness"==this.mode){const e=this.renderRoot.querySelector(".wheel.brightness ha-icon");ot.setIconSize(e,Vt.wheelHeight)}}render(){return this.showColor||this.showTemp||"brightness"==this.mode?W`
        <div class='controls'>
        ${xt("brightness"==this.mode?this.createBrightnessWheel():W`
                ${this.createWheel("color")}
                ${this.createWheel("temp")}
            `)}
        </div>`:q}createBrightnessWheel(){if("brightness"!=this.mode)return q;const e=ot.hasHueIcons()?"hue:scene-bright":"mdi:brightness-7";return W`
        <div class='wheel-wrapper active' @click=${()=>this.mode="brightness"}>
            <span class='wheel brightness'>
                <ha-icon icon="${e}"></ha-icon>
            </span>
        </div>`}createWheel(e){if("temp"==e&&!this.showTemp)return q;if("color"==e&&!this.showColor)return q;const t={"wheel-wrapper":!0,active:this.mode==e};return W`
        <div class='${ge(t)}' @click=${()=>this.mode=e}>
            <span class='wheel ${e}'></span>
        </div>`}};
/*! Hammer.JS - v2.0.17-rc - 2019-12-16
 * http://naver.github.io/egjs
 *
 * Forked By Naver egjs
 * Copyright (c) hammerjs
 * Licensed under the MIT license */
function Rt(){return Rt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},Rt.apply(this,arguments)}function zt(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function Nt(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}Bt.ElementName="hue-color-temp-mode-selector"+ze.ElementPostfix,Bt.wheelHeight=24,Bt.wheelSpace=2,Bt.wheelBorderWidth=2,Bt.wrapperHeight=Vt.wheelHeight+2*(Vt.wheelSpace+Vt.wheelBorderWidth),Bt.totalPadding=8,Bt.wrapperGap=Vt.totalPadding,Bt.totalHeight=Vt.wrapperHeight+2*Vt.totalPadding,Bt.styles=a`
    :host{
        user-select: none;
        -webkit-user-select: none;
        display:inline-block;
    }
    .controls{
        box-sizing: border-box;
        display: flex;
        height: ${Vt.totalHeight}px;
        padding: ${Vt.totalPadding}px;
        gap: ${Vt.wrapperGap}px;
        border-radius: ${Vt.totalHeight/2}px;
        box-shadow: ${o(ze.HueShadow)};
        background: ${o(ze.TileOffColor)};
    }
    .controls .wheel-wrapper{
        box-sizing: border-box;
        width: ${Vt.wrapperHeight}px;
        height: ${Vt.wrapperHeight}px;
        padding: ${Vt.wheelSpace}px;
        border-radius: ${Vt.wrapperHeight/2}px;
        border: ${Vt.wheelBorderWidth}px solid transparent;
        cursor: pointer;
    }
    .controls .wheel-wrapper:hover,
    .controls .wheel-wrapper:active{
        background-color: ${o(ze.TileOffColor)};
    }
    .controls .wheel-wrapper.active{
        border-color: white;
    }
    .controls .wheel-wrapper .wheel{
        display:inline-block;
        width: ${Vt.wheelHeight}px;
        height: ${Vt.wheelHeight}px;
        border-radius: ${Vt.wheelHeight/2}px;
        background-size: cover;
    }
    .wheel.color{
        background-image: url(${o(Ht.ModeColorIcon64)});
    }
    .wheel.temp{
        background-image: url(${o(Ht.ModeTempIcon64)});
    }
    .wheel.brightness{
        color: white;
    }
    `,e([_e()],Bt.prototype,"mode",void 0),e([_e()],Bt.prototype,"showColor",void 0),e([_e()],Bt.prototype,"showTemp",void 0),e([_e()],Bt.prototype,"colorPicker",void 0),Bt=Vt=e([fe(Bt.ElementName)],Bt);var Ft,Ut="function"!=typeof Object.assign?function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),i=1;i<arguments.length;i++){var s=arguments[i];if(null!=s)for(var r in s)s.hasOwnProperty(r)&&(t[r]=s[r])}return t}:Object.assign,Wt=["","webkit","Moz","MS","ms","o"],jt="undefined"==typeof document?{style:{}}:document.createElement("div"),qt=Math.round,Yt=Math.abs,Gt=Date.now;function Kt(e,t){for(var i,s,r=t[0].toUpperCase()+t.slice(1),n=0;n<Wt.length;){if((s=(i=Wt[n])?i+r:t)in e)return s;n++}}Ft="undefined"==typeof window?{}:window;var Xt=Kt(jt.style,"touchAction"),Qt=void 0!==Xt;var Zt="compute",Jt="auto",ei="manipulation",ti="none",ii="pan-x",si="pan-y",ri=function(){if(!Qt)return!1;var e={},t=Ft.CSS&&Ft.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(i){return e[i]=!t||Ft.CSS.supports("touch-action",i)})),e}(),ni="ontouchstart"in Ft,oi=void 0!==Kt(Ft,"PointerEvent"),ai=ni&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),li="touch",ci="mouse",hi=25,di=1,ui=4,pi=8,gi=1,fi=2,mi=4,vi=8,_i=16,yi=fi|mi,wi=vi|_i,bi=yi|wi,Ci=["x","y"],ki=["clientX","clientY"];function Si(e,t,i){var s;if(e)if(e.forEach)e.forEach(t,i);else if(void 0!==e.length)for(s=0;s<e.length;)t.call(i,e[s],s,e),s++;else for(s in e)e.hasOwnProperty(s)&&t.call(i,e[s],s,e)}function xi(e,t){return"function"==typeof e?e.apply(t&&t[0]||void 0,t):e}function Ei(e,t){return e.indexOf(t)>-1}var Ai=function(){function e(e,t){this.manager=e,this.set(t)}var t=e.prototype;return t.set=function(e){e===Zt&&(e=this.compute()),Qt&&this.manager.element.style&&ri[e]&&(this.manager.element.style[Xt]=e),this.actions=e.toLowerCase().trim()},t.update=function(){this.set(this.manager.options.touchAction)},t.compute=function(){var e=[];return Si(this.manager.recognizers,(function(t){xi(t.options.enable,[t])&&(e=e.concat(t.getTouchAction()))})),function(e){if(Ei(e,ti))return ti;var t=Ei(e,ii),i=Ei(e,si);return t&&i?ti:t||i?t?ii:si:Ei(e,ei)?ei:Jt}(e.join(" "))},t.preventDefaults=function(e){var t=e.srcEvent,i=e.offsetDirection;if(this.manager.session.prevented)t.preventDefault();else{var s=this.actions,r=Ei(s,ti)&&!ri[ti],n=Ei(s,si)&&!ri[si],o=Ei(s,ii)&&!ri[ii];if(r){var a=1===e.pointers.length,l=e.distance<2,c=e.deltaTime<250;if(a&&l&&c)return}if(!o||!n)return r||n&&i&yi||o&&i&wi?this.preventSrc(t):void 0}},t.preventSrc=function(e){this.manager.session.prevented=!0,e.preventDefault()},e}();function Ti(e,t){for(;e;){if(e===t)return!0;e=e.parentNode}return!1}function $i(e){var t=e.length;if(1===t)return{x:qt(e[0].clientX),y:qt(e[0].clientY)};for(var i=0,s=0,r=0;r<t;)i+=e[r].clientX,s+=e[r].clientY,r++;return{x:qt(i/t),y:qt(s/t)}}function Li(e){for(var t=[],i=0;i<e.pointers.length;)t[i]={clientX:qt(e.pointers[i].clientX),clientY:qt(e.pointers[i].clientY)},i++;return{timeStamp:Gt(),pointers:t,center:$i(t),deltaX:e.deltaX,deltaY:e.deltaY}}function Oi(e,t,i){i||(i=Ci);var s=t[i[0]]-e[i[0]],r=t[i[1]]-e[i[1]];return Math.sqrt(s*s+r*r)}function Di(e,t,i){i||(i=Ci);var s=t[i[0]]-e[i[0]],r=t[i[1]]-e[i[1]];return 180*Math.atan2(r,s)/Math.PI}function Mi(e,t){return e===t?gi:Yt(e)>=Yt(t)?e<0?fi:mi:t<0?vi:_i}function Pi(e,t,i){return{x:t/e||0,y:i/e||0}}function Ii(e,t){var i=e.session,s=t.pointers,r=s.length;i.firstInput||(i.firstInput=Li(t)),r>1&&!i.firstMultiple?i.firstMultiple=Li(t):1===r&&(i.firstMultiple=!1);var n=i.firstInput,o=i.firstMultiple,a=o?o.center:n.center,l=t.center=$i(s);t.timeStamp=Gt(),t.deltaTime=t.timeStamp-n.timeStamp,t.angle=Di(a,l),t.distance=Oi(a,l),function(e,t){var i=t.center,s=e.offsetDelta||{},r=e.prevDelta||{},n=e.prevInput||{};t.eventType!==di&&n.eventType!==ui||(r=e.prevDelta={x:n.deltaX||0,y:n.deltaY||0},s=e.offsetDelta={x:i.x,y:i.y}),t.deltaX=r.x+(i.x-s.x),t.deltaY=r.y+(i.y-s.y)}(i,t),t.offsetDirection=Mi(t.deltaX,t.deltaY);var c,h,d=Pi(t.deltaTime,t.deltaX,t.deltaY);t.overallVelocityX=d.x,t.overallVelocityY=d.y,t.overallVelocity=Yt(d.x)>Yt(d.y)?d.x:d.y,t.scale=o?(c=o.pointers,Oi((h=s)[0],h[1],ki)/Oi(c[0],c[1],ki)):1,t.rotation=o?function(e,t){return Di(t[1],t[0],ki)+Di(e[1],e[0],ki)}(o.pointers,s):0,t.maxPointers=i.prevInput?t.pointers.length>i.prevInput.maxPointers?t.pointers.length:i.prevInput.maxPointers:t.pointers.length,function(e,t){var i,s,r,n,o=e.lastInterval||t,a=t.timeStamp-o.timeStamp;if(t.eventType!==pi&&(a>hi||void 0===o.velocity)){var l=t.deltaX-o.deltaX,c=t.deltaY-o.deltaY,h=Pi(a,l,c);s=h.x,r=h.y,i=Yt(h.x)>Yt(h.y)?h.x:h.y,n=Mi(l,c),e.lastInterval=t}else i=o.velocity,s=o.velocityX,r=o.velocityY,n=o.direction;t.velocity=i,t.velocityX=s,t.velocityY=r,t.direction=n}(i,t);var u,p=e.element,g=t.srcEvent;Ti(u=g.composedPath?g.composedPath()[0]:g.path?g.path[0]:g.target,p)&&(p=u),t.target=p}function Hi(e,t,i){var s=i.pointers.length,r=i.changedPointers.length,n=t&di&&s-r==0,o=t&(ui|pi)&&s-r==0;i.isFirst=!!n,i.isFinal=!!o,n&&(e.session={}),i.eventType=t,Ii(e,i),e.emit("hammer.input",i),e.recognize(i),e.session.prevInput=i}function Vi(e){return e.trim().split(/\s+/g)}function Bi(e,t,i){Si(Vi(t),(function(t){e.addEventListener(t,i,!1)}))}function Ri(e,t,i){Si(Vi(t),(function(t){e.removeEventListener(t,i,!1)}))}function zi(e){var t=e.ownerDocument||e;return t.defaultView||t.parentWindow||window}var Ni=function(){function e(e,t){var i=this;this.manager=e,this.callback=t,this.element=e.element,this.target=e.options.inputTarget,this.domHandler=function(t){xi(e.options.enable,[e])&&i.handler(t)},this.init()}var t=e.prototype;return t.handler=function(){},t.init=function(){this.evEl&&Bi(this.element,this.evEl,this.domHandler),this.evTarget&&Bi(this.target,this.evTarget,this.domHandler),this.evWin&&Bi(zi(this.element),this.evWin,this.domHandler)},t.destroy=function(){this.evEl&&Ri(this.element,this.evEl,this.domHandler),this.evTarget&&Ri(this.target,this.evTarget,this.domHandler),this.evWin&&Ri(zi(this.element),this.evWin,this.domHandler)},e}();function Fi(e,t,i){if(e.indexOf&&!i)return e.indexOf(t);for(var s=0;s<e.length;){if(i&&e[s][i]==t||!i&&e[s]===t)return s;s++}return-1}var Ui={pointerdown:di,pointermove:2,pointerup:ui,pointercancel:pi,pointerout:pi},Wi={2:li,3:"pen",4:ci,5:"kinect"},ji="pointerdown",qi="pointermove pointerup pointercancel";Ft.MSPointerEvent&&!Ft.PointerEvent&&(ji="MSPointerDown",qi="MSPointerMove MSPointerUp MSPointerCancel");var Yi=function(e){function t(){var i,s=t.prototype;return s.evEl=ji,s.evWin=qi,(i=e.apply(this,arguments)||this).store=i.manager.session.pointerEvents=[],i}return zt(t,e),t.prototype.handler=function(e){var t=this.store,i=!1,s=e.type.toLowerCase().replace("ms",""),r=Ui[s],n=Wi[e.pointerType]||e.pointerType,o=n===li,a=Fi(t,e.pointerId,"pointerId");r&di&&(0===e.button||o)?a<0&&(t.push(e),a=t.length-1):r&(ui|pi)&&(i=!0),a<0||(t[a]=e,this.callback(this.manager,r,{pointers:t,changedPointers:[e],pointerType:n,srcEvent:e}),i&&t.splice(a,1))},t}(Ni);function Gi(e){return Array.prototype.slice.call(e,0)}function Ki(e,t,i){for(var s=[],r=[],n=0;n<e.length;){var o=t?e[n][t]:e[n];Fi(r,o)<0&&s.push(e[n]),r[n]=o,n++}return i&&(s=t?s.sort((function(e,i){return e[t]>i[t]})):s.sort()),s}var Xi={touchstart:di,touchmove:2,touchend:ui,touchcancel:pi},Qi=function(e){function t(){var i;return t.prototype.evTarget="touchstart touchmove touchend touchcancel",(i=e.apply(this,arguments)||this).targetIds={},i}return zt(t,e),t.prototype.handler=function(e){var t=Xi[e.type],i=Zi.call(this,e,t);i&&this.callback(this.manager,t,{pointers:i[0],changedPointers:i[1],pointerType:li,srcEvent:e})},t}(Ni);function Zi(e,t){var i,s,r=Gi(e.touches),n=this.targetIds;if(t&(2|di)&&1===r.length)return n[r[0].identifier]=!0,[r,r];var o=Gi(e.changedTouches),a=[],l=this.target;if(s=r.filter((function(e){return Ti(e.target,l)})),t===di)for(i=0;i<s.length;)n[s[i].identifier]=!0,i++;for(i=0;i<o.length;)n[o[i].identifier]&&a.push(o[i]),t&(ui|pi)&&delete n[o[i].identifier],i++;return a.length?[Ki(s.concat(a),"identifier",!0),a]:void 0}var Ji={mousedown:di,mousemove:2,mouseup:ui},es=function(e){function t(){var i,s=t.prototype;return s.evEl="mousedown",s.evWin="mousemove mouseup",(i=e.apply(this,arguments)||this).pressed=!1,i}return zt(t,e),t.prototype.handler=function(e){var t=Ji[e.type];t&di&&0===e.button&&(this.pressed=!0),2&t&&1!==e.which&&(t=ui),this.pressed&&(t&ui&&(this.pressed=!1),this.callback(this.manager,t,{pointers:[e],changedPointers:[e],pointerType:ci,srcEvent:e}))},t}(Ni),ts=2500;function is(e){var t=e.changedPointers[0];if(t.identifier===this.primaryTouch){var i={x:t.clientX,y:t.clientY},s=this.lastTouches;this.lastTouches.push(i);setTimeout((function(){var e=s.indexOf(i);e>-1&&s.splice(e,1)}),ts)}}function ss(e,t){e&di?(this.primaryTouch=t.changedPointers[0].identifier,is.call(this,t)):e&(ui|pi)&&is.call(this,t)}function rs(e){for(var t=e.srcEvent.clientX,i=e.srcEvent.clientY,s=0;s<this.lastTouches.length;s++){var r=this.lastTouches[s],n=Math.abs(t-r.x),o=Math.abs(i-r.y);if(n<=25&&o<=25)return!0}return!1}var ns=function(){return function(e){function t(t,i){var s;return(s=e.call(this,t,i)||this).handler=function(e,t,i){var r=i.pointerType===li,n=i.pointerType===ci;if(!(n&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(r)ss.call(Nt(Nt(s)),t,i);else if(n&&rs.call(Nt(Nt(s)),i))return;s.callback(e,t,i)}},s.touch=new Qi(s.manager,s.handler),s.mouse=new es(s.manager,s.handler),s.primaryTouch=null,s.lastTouches=[],s}return zt(t,e),t.prototype.destroy=function(){this.touch.destroy(),this.mouse.destroy()},t}(Ni)}();function os(e,t,i){return!!Array.isArray(e)&&(Si(e,i[t],i),!0)}var as=32,ls=1;function cs(e,t){var i=t.manager;return i?i.get(e):e}function hs(e){return 16&e?"cancel":8&e?"end":4&e?"move":2&e?"start":""}var ds=function(){function e(e){void 0===e&&(e={}),this.options=Rt({enable:!0},e),this.id=ls++,this.manager=null,this.state=1,this.simultaneous={},this.requireFail=[]}var t=e.prototype;return t.set=function(e){return Ut(this.options,e),this.manager&&this.manager.touchAction.update(),this},t.recognizeWith=function(e){if(os(e,"recognizeWith",this))return this;var t=this.simultaneous;return t[(e=cs(e,this)).id]||(t[e.id]=e,e.recognizeWith(this)),this},t.dropRecognizeWith=function(e){return os(e,"dropRecognizeWith",this)||(e=cs(e,this),delete this.simultaneous[e.id]),this},t.requireFailure=function(e){if(os(e,"requireFailure",this))return this;var t=this.requireFail;return-1===Fi(t,e=cs(e,this))&&(t.push(e),e.requireFailure(this)),this},t.dropRequireFailure=function(e){if(os(e,"dropRequireFailure",this))return this;e=cs(e,this);var t=Fi(this.requireFail,e);return t>-1&&this.requireFail.splice(t,1),this},t.hasRequireFailures=function(){return this.requireFail.length>0},t.canRecognizeWith=function(e){return!!this.simultaneous[e.id]},t.emit=function(e){var t=this,i=this.state;function s(i){t.manager.emit(i,e)}i<8&&s(t.options.event+hs(i)),s(t.options.event),e.additionalEvent&&s(e.additionalEvent),i>=8&&s(t.options.event+hs(i))},t.tryEmit=function(e){if(this.canEmit())return this.emit(e);this.state=as},t.canEmit=function(){for(var e=0;e<this.requireFail.length;){if(!(33&this.requireFail[e].state))return!1;e++}return!0},t.recognize=function(e){var t=Ut({},e);if(!xi(this.options.enable,[this,t]))return this.reset(),void(this.state=as);56&this.state&&(this.state=1),this.state=this.process(t),30&this.state&&this.tryEmit(t)},t.process=function(e){},t.getTouchAction=function(){},t.reset=function(){},e}(),us=function(e){function t(t){var i;return void 0===t&&(t={}),(i=e.call(this,Rt({event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},t))||this).pTime=!1,i.pCenter=!1,i._timer=null,i._input=null,i.count=0,i}zt(t,e);var i=t.prototype;return i.getTouchAction=function(){return[ei]},i.process=function(e){var t=this,i=this.options,s=e.pointers.length===i.pointers,r=e.distance<i.threshold,n=e.deltaTime<i.time;if(this.reset(),e.eventType&di&&0===this.count)return this.failTimeout();if(r&&n&&s){if(e.eventType!==ui)return this.failTimeout();var o=!this.pTime||e.timeStamp-this.pTime<i.interval,a=!this.pCenter||Oi(this.pCenter,e.center)<i.posThreshold;if(this.pTime=e.timeStamp,this.pCenter=e.center,a&&o?this.count+=1:this.count=1,this._input=e,0===this.count%i.taps)return this.hasRequireFailures()?(this._timer=setTimeout((function(){t.state=8,t.tryEmit()}),i.interval),2):8}return as},i.failTimeout=function(){var e=this;return this._timer=setTimeout((function(){e.state=as}),this.options.interval),as},i.reset=function(){clearTimeout(this._timer)},i.emit=function(){8===this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))},t}(ds),ps=function(e){function t(t){return void 0===t&&(t={}),e.call(this,Rt({pointers:1},t))||this}zt(t,e);var i=t.prototype;return i.attrTest=function(e){var t=this.options.pointers;return 0===t||e.pointers.length===t},i.process=function(e){var t=this.state,i=e.eventType,s=6&t,r=this.attrTest(e);return s&&(i&pi||!r)?16|t:s||r?i&ui?8|t:2&t?4|t:2:as},t}(ds);function gs(e){return e===_i?"down":e===vi?"up":e===fi?"left":e===mi?"right":""}var fs=function(e){function t(t){var i;return void 0===t&&(t={}),(i=e.call(this,Rt({event:"pan",threshold:10,pointers:1,direction:bi},t))||this).pX=null,i.pY=null,i}zt(t,e);var i=t.prototype;return i.getTouchAction=function(){var e=this.options.direction,t=[];return e&yi&&t.push(si),e&wi&&t.push(ii),t},i.directionTest=function(e){var t=this.options,i=!0,s=e.distance,r=e.direction,n=e.deltaX,o=e.deltaY;return r&t.direction||(t.direction&yi?(r=0===n?gi:n<0?fi:mi,i=n!==this.pX,s=Math.abs(e.deltaX)):(r=0===o?gi:o<0?vi:_i,i=o!==this.pY,s=Math.abs(e.deltaY))),e.direction=r,i&&s>t.threshold&&r&t.direction},i.attrTest=function(e){return ps.prototype.attrTest.call(this,e)&&(2&this.state||!(2&this.state)&&this.directionTest(e))},i.emit=function(t){this.pX=t.deltaX,this.pY=t.deltaY;var i=gs(t.direction);i&&(t.additionalEvent=this.options.event+i),e.prototype.emit.call(this,t)},t}(ps),ms=function(e){function t(t){return void 0===t&&(t={}),e.call(this,Rt({event:"swipe",threshold:10,velocity:.3,direction:yi|wi,pointers:1},t))||this}zt(t,e);var i=t.prototype;return i.getTouchAction=function(){return fs.prototype.getTouchAction.call(this)},i.attrTest=function(t){var i,s=this.options.direction;return s&(yi|wi)?i=t.overallVelocity:s&yi?i=t.overallVelocityX:s&wi&&(i=t.overallVelocityY),e.prototype.attrTest.call(this,t)&&s&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers===this.options.pointers&&Yt(i)>this.options.velocity&&t.eventType&ui},i.emit=function(e){var t=gs(e.offsetDirection);t&&this.manager.emit(this.options.event+t,e),this.manager.emit(this.options.event,e)},t}(ps),vs=function(e){function t(t){return void 0===t&&(t={}),e.call(this,Rt({event:"pinch",threshold:0,pointers:2},t))||this}zt(t,e);var i=t.prototype;return i.getTouchAction=function(){return[ti]},i.attrTest=function(t){return e.prototype.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||2&this.state)},i.emit=function(t){if(1!==t.scale){var i=t.scale<1?"in":"out";t.additionalEvent=this.options.event+i}e.prototype.emit.call(this,t)},t}(ps),_s=function(e){function t(t){return void 0===t&&(t={}),e.call(this,Rt({event:"rotate",threshold:0,pointers:2},t))||this}zt(t,e);var i=t.prototype;return i.getTouchAction=function(){return[ti]},i.attrTest=function(t){return e.prototype.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||2&this.state)},t}(ps),ys=function(e){function t(t){var i;return void 0===t&&(t={}),(i=e.call(this,Rt({event:"press",pointers:1,time:251,threshold:9},t))||this)._timer=null,i._input=null,i}zt(t,e);var i=t.prototype;return i.getTouchAction=function(){return[Jt]},i.process=function(e){var t=this,i=this.options,s=e.pointers.length===i.pointers,r=e.distance<i.threshold,n=e.deltaTime>i.time;if(this._input=e,!r||!s||e.eventType&(ui|pi)&&!n)this.reset();else if(e.eventType&di)this.reset(),this._timer=setTimeout((function(){t.state=8,t.tryEmit()}),i.time);else if(e.eventType&ui)return 8;return as},i.reset=function(){clearTimeout(this._timer)},i.emit=function(e){8===this.state&&(e&&e.eventType&ui?this.manager.emit(this.options.event+"up",e):(this._input.timeStamp=Gt(),this.manager.emit(this.options.event,this._input)))},t}(ds),ws={domEvents:!1,touchAction:Zt,enable:!0,inputTarget:null,inputClass:null,cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},bs=[[_s,{enable:!1}],[vs,{enable:!1},["rotate"]],[ms,{direction:yi}],[fs,{direction:yi},["swipe"]],[us],[us,{event:"doubletap",taps:2},["tap"]],[ys]];function Cs(e,t){var i,s=e.element;s.style&&(Si(e.options.cssProps,(function(r,n){i=Kt(s.style,n),t?(e.oldCssProps[i]=s.style[i],s.style[i]=r):s.style[i]=e.oldCssProps[i]||""})),t||(e.oldCssProps={}))}var ks=function(){function e(e,t){var i,s=this;this.options=Ut({},ws,t||{}),this.options.inputTarget=this.options.inputTarget||e,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,this.input=new((i=this).options.inputClass||(oi?Yi:ai?Qi:ni?ns:es))(i,Hi),this.touchAction=new Ai(this,this.options.touchAction),Cs(this,!0),Si(this.options.recognizers,(function(e){var t=s.add(new e[0](e[1]));e[2]&&t.recognizeWith(e[2]),e[3]&&t.requireFailure(e[3])}),this)}var t=e.prototype;return t.set=function(e){return Ut(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this},t.stop=function(e){this.session.stopped=e?2:1},t.recognize=function(e){var t=this.session;if(!t.stopped){var i;this.touchAction.preventDefaults(e);var s=this.recognizers,r=t.curRecognizer;(!r||r&&8&r.state)&&(t.curRecognizer=null,r=null);for(var n=0;n<s.length;)i=s[n],2===t.stopped||r&&i!==r&&!i.canRecognizeWith(r)?i.reset():i.recognize(e),!r&&14&i.state&&(t.curRecognizer=i,r=i),n++}},t.get=function(e){if(e instanceof ds)return e;for(var t=this.recognizers,i=0;i<t.length;i++)if(t[i].options.event===e)return t[i];return null},t.add=function(e){if(os(e,"add",this))return this;var t=this.get(e.options.event);return t&&this.remove(t),this.recognizers.push(e),e.manager=this,this.touchAction.update(),e},t.remove=function(e){if(os(e,"remove",this))return this;var t=this.get(e);if(e){var i=this.recognizers,s=Fi(i,t);-1!==s&&(i.splice(s,1),this.touchAction.update())}return this},t.on=function(e,t){if(void 0===e||void 0===t)return this;var i=this.handlers;return Si(Vi(e),(function(e){i[e]=i[e]||[],i[e].push(t)})),this},t.off=function(e,t){if(void 0===e)return this;var i=this.handlers;return Si(Vi(e),(function(e){t?i[e]&&i[e].splice(Fi(i[e],t),1):delete i[e]})),this},t.emit=function(e,t){this.options.domEvents&&function(e,t){var i=document.createEvent("Event");i.initEvent(e,!0,!0),i.gesture=t,t.target.dispatchEvent(i)}(e,t);var i=this.handlers[e]&&this.handlers[e].slice();if(i&&i.length){t.type=e,t.preventDefault=function(){t.srcEvent.preventDefault()};for(var s=0;s<i.length;)i[s](t),s++}},t.destroy=function(){this.element&&Cs(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null},e}(),Ss={touchstart:di,touchmove:2,touchend:ui,touchcancel:pi},xs=function(e){function t(){var i,s=t.prototype;return s.evTarget="touchstart",s.evWin="touchstart touchmove touchend touchcancel",(i=e.apply(this,arguments)||this).started=!1,i}return zt(t,e),t.prototype.handler=function(e){var t=Ss[e.type];if(t===di&&(this.started=!0),this.started){var i=Es.call(this,e,t);t&(ui|pi)&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,t,{pointers:i[0],changedPointers:i[1],pointerType:li,srcEvent:e})}},t}(Ni);function Es(e,t){var i=Gi(e.touches),s=Gi(e.changedTouches);return t&(ui|pi)&&(i=Ki(i.concat(s),"identifier",!0)),[i,s]}function As(e,t,i){var s="DEPRECATED METHOD: "+t+"\n"+i+" AT \n";return function(){var t=new Error("get-stack-trace"),i=t&&t.stack?t.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",r=window.console&&(window.console.warn||window.console.log);return r&&r.call(window.console,s,i),e.apply(this,arguments)}}var Ts=As((function(e,t,i){for(var s=Object.keys(t),r=0;r<s.length;)(!i||i&&void 0===e[s[r]])&&(e[s[r]]=t[s[r]]),r++;return e}),"extend","Use `assign`."),$s=As((function(e,t){return Ts(e,t,!0)}),"merge","Use `assign`.");function Ls(e,t,i){var s,r=t.prototype;(s=e.prototype=Object.create(r)).constructor=e,s._super=r,i&&Ut(s,i)}function Os(e,t){return function(){return e.apply(t,arguments)}}(function(){var e=function(e,t){return void 0===t&&(t={}),new ks(e,Rt({recognizers:bs.concat()},t))};return e.VERSION="2.0.17-rc",e.DIRECTION_ALL=bi,e.DIRECTION_DOWN=_i,e.DIRECTION_LEFT=fi,e.DIRECTION_RIGHT=mi,e.DIRECTION_UP=vi,e.DIRECTION_HORIZONTAL=yi,e.DIRECTION_VERTICAL=wi,e.DIRECTION_NONE=gi,e.DIRECTION_DOWN=_i,e.INPUT_START=di,e.INPUT_MOVE=2,e.INPUT_END=ui,e.INPUT_CANCEL=pi,e.STATE_POSSIBLE=1,e.STATE_BEGAN=2,e.STATE_CHANGED=4,e.STATE_ENDED=8,e.STATE_RECOGNIZED=8,e.STATE_CANCELLED=16,e.STATE_FAILED=as,e.Manager=ks,e.Input=Ni,e.TouchAction=Ai,e.TouchInput=Qi,e.MouseInput=es,e.PointerEventInput=Yi,e.TouchMouseInput=ns,e.SingleTouchInput=xs,e.Recognizer=ds,e.AttrRecognizer=ps,e.Tap=us,e.Pan=fs,e.Swipe=ms,e.Pinch=vs,e.Rotate=_s,e.Press=ys,e.on=Bi,e.off=Ri,e.each=Si,e.merge=$s,e.extend=Ts,e.bindFn=Os,e.assign=Ut,e.inherit=Ls,e.bindFn=Os,e.prefixed=Kt,e.toArray=Gi,e.inArray=Fi,e.uniqueArray=Ki,e.splitStr=Vi,e.boolOrFn=xi,e.hasParent=Ti,e.addEventListeners=Bi,e.removeEventListeners=Ri,e.defaults=Ut({},ws,{preset:bs}),e})().defaults;let Ds=class extends ce{constructor(){super(...arguments),this.disabled=!1,this.vertical=!1,this.reversed=!1}firstUpdated(e){super.firstUpdated(e),this.setupListeners(),this.setAttribute("role","switch"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}updated(e){super.updated(e),e.has("checked")&&this.setAttribute("aria-checked",this.checked?"true":"false")}_toggle(){this.disabled||(this.checked=!this.checked,Me(this,"change"))}connectedCallback(){super.connectedCallback(),this.setupListeners()}disconnectedCallback(){super.disconnectedCallback(),this.destroyListeners()}setupListeners(){this.switch&&!this._mc&&(this._mc=new ks(this.switch,{touchAction:this.vertical?"pan-x":"pan-y"}),this._mc.add(new ms({direction:this.vertical?wi:yi})),this._mc.add(new us({event:"singletap"})),this.vertical?(this._mc.on("swipeup",(()=>{this.disabled||(this.checked=!!this.reversed,Me(this,"change"))})),this._mc.on("swipedown",(()=>{this.disabled||(this.checked=!this.reversed,Me(this,"change"))}))):(this._mc.on("swiperight",(()=>{this.disabled||(this.checked=!this.reversed,Me(this,"change"))})),this._mc.on("swipeleft",(()=>{this.disabled||(this.checked=!!this.reversed,Me(this,"change"))}))),this._mc.on("singletap",(()=>{this.disabled||this._toggle()})),this.addEventListener("keydown",this._keydown))}destroyListeners(){this._mc&&(this._mc.destroy(),this._mc=void 0),this.removeEventListener("keydown",this._keydown)}_keydown(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this._toggle())}render(){return W`
        <div id="switch" class="switch">
          <div class="background"></div>
          <div class="button" aria-hidden="true">
            ${this.checked?W`<slot name="icon-on"></slot>`:W`<slot name="icon-off"></slot>`}
          </div>
        </div>
      `}static get styles(){return a`
        :host {
          display: block;
          --control-switch-on-color: var(--primary-color);
          --control-switch-off-color: var(--disabled-color);
          --control-switch-background-opacity: 0.2;
          --control-switch-thickness: 40px;
          --control-switch-border-radius: 12px;
          --control-switch-padding: 4px;
          --mdc-icon-size: 20px;
          height: var(--control-switch-thickness);
          width: 100%;
          box-sizing: border-box;
          user-select: none;
          cursor: pointer;
          border-radius: var(--control-switch-border-radius);
          outline: none;
          transition: box-shadow 180ms ease-in-out;
          -webkit-tap-highlight-color: transparent;
        }
        :host(:focus-visible) {
          box-shadow: 0 0 0 2px var(--control-switch-off-color);
        }
        :host([checked]:focus-visible) {
          box-shadow: 0 0 0 2px var(--control-switch-on-color);
        }
        .switch {
          box-sizing: border-box;
          position: relative;
          height: 100%;
          width: 100%;
          border-radius: var(--control-switch-border-radius);
          overflow: hidden;
          padding: var(--control-switch-padding);
          display: flex;
        }
        .switch .background {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: var(--control-switch-off-color);
          transition: background-color 180ms ease-in-out;
          opacity: var(--control-switch-background-opacity);
        }
        .switch .button {
          width: 50%;
          height: 100%;
          background: lightgrey;
          border-radius: calc(
            var(--control-switch-border-radius) - var(--control-switch-padding)
          );
          transition: transform 180ms ease-in-out,
            background-color 180ms ease-in-out;
          background-color: var(--control-switch-off-color);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        :host([checked]) .switch .background {
          background-color: var(--control-switch-on-color);
        }
        :host([checked]) .switch .button {
          transform: translateX(100%);
          background-color: var(--control-switch-on-color);
        }
        :host([reversed]) .switch {
          flex-direction: row-reverse;
        }
        :host([reversed][checked]) .switch .button {
          transform: translateX(-100%);
        }
        :host([vertical]) {
          width: var(--control-switch-thickness);
          height: 100%;
        }
        :host([vertical][checked]) .switch .button {
          transform: translateY(100%);
        }
        :host([vertical]) .switch .button {
          width: 100%;
          height: 50%;
        }
        :host([vertical][reversed]) .switch {
          flex-direction: column-reverse;
        }
        :host([vertical][reversed][checked]) .switch .button {
          transform: translateY(-100%);
        }
        :host([disabled]) {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}};var Ms;Ds.ElementName="hue-big-switch"+ze.ElementPostfix,e([_e({type:Boolean,reflect:!0})],Ds.prototype,"disabled",void 0),e([_e({type:Boolean})],Ds.prototype,"vertical",void 0),e([_e({type:Boolean})],Ds.prototype,"reversed",void 0),e([_e({type:Boolean,reflect:!0})],Ds.prototype,"checked",void 0),e([function(e,t){return(i,s,r)=>{const n=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:o}="object"==typeof s?i:r??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return we(i,s,{get(){if(t){let t=e.call(this);return void 0===t&&(t=n(this),o.call(this,t)),t}return n(this)}})}return we(i,s,{get(){return n(this)}})}}("#switch")],Ds.prototype,"switch",void 0),Ds=e([fe(Ds.ElementName)],Ds);let Ps=Ms=class extends ct{constructor(){super("HueLightDetail"),this.lightContainer=null,this.hide(!0)}onLightContainerChanged(){if(!this.lightContainer)return;if(this.lightContainer.features.isEmpty())return void this.updateBigSwitchSize();const e=this.lightContainer.features;this._colorMarker.icon=this.lightContainer.getIcon()||gt.getIcon(1),this._modeSelector.showColor=e.color,this._modeSelector.showTemp=e.colorTemp,e.colorTemp&&e.colorTempMinKelvin&&e.colorTempMaxKelvin&&this._colorPicker.setTempRange(e.colorTempMinKelvin,e.colorTempMaxKelvin),e.isOnlyBrightness()?(this._modeSelector.mode="brightness",this.toggleFullSizedBrightness(!0)):(this._modeSelector.selectPossibleMode(),this.toggleFullSizedBrightness(!1)),this.onLightContainerState(!0)}toggleFullSizedBrightness(e){e&&(this._colorPicker.style.display="none"),this.updateBrightnessRollupSize(e),e||(this._colorPicker.style.display="")}onLightContainerState(e=!1){this.lightContainer&&(this.lightContainer.isColorModeColor()?(e&&(this._modeSelector.mode="color"),this.lightContainer.color&&(this._colorMarker.color=this.lightContainer.color)):this.lightContainer.isColorModeTemp()&&(e&&(this._modeSelector.mode="temp"),this.lightContainer.colorTemp&&(this._colorMarker.temp=this.lightContainer.colorTemp)),this._colorMarker.isOff=!this.lightContainer.isOn(),this._brightnessRollup.enabled=this.lightContainer.isOn(),e&&this._colorMarker.boing())}onColorChanged(e){this.lightContainer&&("temp"==e.detail.mode?this.lightContainer.colorTemp=e.detail.newTemp:"color"==e.detail.mode&&(this.lightContainer.color=e.detail.newColor))}show(){this._hideTimeout&&(clearTimeout(this._hideTimeout),this._hideTimeout=null),this.style.removeProperty("display"),setTimeout((()=>this.classList.add("visible"))),this.updateColorPickerSize(),this.parentElement&&(this.parentElement.style.overflow="visible"),this.dispatchEvent(new CustomEvent("show"))}hide(e=!1){this.classList.remove("visible"),e?this.style.display="none":this._hideTimeout=setTimeout((()=>{this._hideTimeout=null,this.style.display="none"}),300),this.parentElement&&(this.parentElement.style.overflow=""),this.dispatchEvent(new CustomEvent("hide"))}brightnessValueChanged(e){this.lightContainer&&(this.lightContainer.brightnessValue=e.detail.newValue)}updated(e){if(e.has("lightContainer")){const t=e.get("lightContainer");t&&t.unregisterOnPropertyChanged(this._id),this.lightContainer&&(this.lightContainer.registerOnPropertyChanged(this._id,(()=>{this.onLightContainerState(),this.requestUpdate()})),this.onLightContainerChanged())}}render(){var e;this._lastRenderedContainer=this.lightContainer||this._lastRenderedContainer;const t=1==(null===(e=this._lastRenderedContainer)||void 0===e?void 0:e.features.isEmpty());return Be`
        <div>
            <ha-icon-button-prev class='back-button' @click=${()=>this.hide()}></ha-icon-button-prev>
            ${xt(t?this.createSwitchDetail():this.createFullDetail())}
        </div>`}onSwitch(e,t){const i=t.target;if(!i)return;i.checked?e.turnOn():e.turnOff()}createSwitchDetail(){const e=this._lastRenderedContainer,t={"--control-switch-on-color":ze.WarmColor,"--control-switch-off-color":ze.OffColor};return Be`
            <${He(Ds.ElementName)} class='light-switch'
                vertical
                reversed
                .checked=${e.isOn()}
                .showHandle=${!e.isUnavailable()}
                @change=${t=>this.onSwitch(e,t)}
                style=${je(t)}
                .disabled=${e.isUnavailable()}
            >
                <ha-icon icon="mdi:power-on" slot="icon-on"></ha-icon>
                <ha-icon icon="mdi:power-off" slot="icon-off"></ha-icon>
            </${He(Ds.ElementName)}>
        `}createFullDetail(){var e,t;const i=null!==(t=null===(e=this._lastRenderedContainer)||void 0===e?void 0:e.brightnessValue)&&void 0!==t?t:100;return Be`
            <${He(Pt.ElementName)} class='color-picker'
                mode='color'
                @change=${e=>this.onColorChanged(e)}
            >
            </${He(Pt.ElementName)}>
            <${He(Bt.ElementName)} class='mode-selector'>
            </${He(Bt.ElementName)}>
            <${He(Ot.ElementName)} class='brightness-rollup'
                width='${Ms.rollupWidth}'
                height='${Ms.rollupHeight}'
                heightOpened='${Ms.rollupHeightOpen}'
                iconSize='${Ms.rollupIconSize}'
                .value=${i}
                @change=${e=>this.brightnessValueChanged(e)}
            >
            </${He(Ot.ElementName)}>
        `}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{this._colorPicker||(this._colorPicker=this.renderRoot.querySelector(".color-picker"),this._colorMarker=this._colorPicker.addMarker()),this._modeSelector||(this._modeSelector=this.renderRoot.querySelector(".mode-selector"),this._modeSelector.colorPicker=this._colorPicker),this._brightnessRollup||(this._brightnessRollup=this.renderRoot.querySelector(".brightness-rollup"))}))}updateColorPickerSize(){const e=this.renderRoot.querySelector(".color-picker");if(!e)return;const t=this.getPickerSize();if(!t)return;e.style.width=t+"px",e.style.height=t+"px";const i=this.clientHeight-t-(Ms.colorPickerMarginTop+Ms.colorPickerMarginBottom);if(i>0){const t=i/2;e.style.marginTop=Ms.colorPickerMarginTop+t+"px",e.style.marginBottom=Ms.colorPickerMarginBottom+t+"px"}else e.style.marginTop="",e.style.marginBottom=""}updateBrightnessRollupSize(e){const t=this.renderRoot.querySelector(".brightness-rollup");if(!t)return;const i=this.getPickerSize();if(i)if(t.classList.toggle("full-size",e),e){let e=i/3;e<56&&(e=56),t.style.width=e+"px",t.width=e,t.height=t.heightOpened=i,t.iconSize=Ms.rollupBigIconSize}else t.style.width="",t.width=Ms.rollupWidth,t.height=Ms.rollupHeight,t.heightOpened=Ms.rollupHeightOpen,t.iconSize=Ms.rollupIconSize}updateBigSwitchSize(){const e=this.renderRoot.querySelector(".light-switch");if(!e)return;const t=this.getPickerSize();if(!t)return;let i=t/3;i<60&&(i=60);const s=i+"px";e.style.width=s,e.style.setProperty("--control-switch-thickness",s),e.style.height=t+"px"}getPickerSize(){const e=Math.min(this.clientHeight,this.clientWidth);if(0==e)return null;return e-(Ms.colorPickerMarginTop+Ms.colorPickerMarginBottom)}};Ps.ElementName="hue-light-detail"+ze.ElementPostfix,Ps.colorPickerMarginTop=40,Ps.colorPickerMarginBottom=20,Ps.rollupHeight=Bt.totalHeight,Ps.rollupWidth=Bt.totalHeight/2*3,Ps.rollupHeightOpen=200,Ps.rollupIconSize=24,Ps.rollupBigIconSize=30,Ps.selectorPadding=24,Ps.selectorBottom=0,Ps.styles=a`
    :host {
        margin-top: -30px;
        opacity: 0;
        transition:${o(ze.TransitionDefault)};
    }
    :host(.visible) {
        margin-top: 0;
        opacity: 1;
    }

    .back-button {
        color: white;
        position: absolute;
        top: 10px;
        left: 10px;
    }
    .color-picker {
        display: block;
        margin: ${Ms.colorPickerMarginTop}px auto ${Ms.colorPickerMarginBottom}px auto;
    }
    .mode-selector {
        position: absolute;
        bottom: ${Ms.selectorBottom}px;
        left: ${Ms.selectorPadding}px;
    }
    .brightness-rollup {
        position: absolute;
        bottom: ${Ms.selectorBottom}px;
        right: ${Ms.selectorPadding}px;
    }
    .brightness-rollup.full-size {
        position:static;
        display:block;
        margin: ${Ms.colorPickerMarginTop-25}px auto ${Ms.colorPickerMarginBottom}px auto;
    }
    .light-switch {
        margin: ${Ms.colorPickerMarginTop}px auto ${Ms.colorPickerMarginBottom}px auto;
    }
    `,e([_e()],Ps.prototype,"lightContainer",void 0),Ps=Ms=e([fe(Ps.ElementName)],Ps);const Is=e=>{ze.Dev&&console.log("[HueHistory] "+e)};class Hs{constructor(e,t,i=null){this._type=i,this._id=(null!=i?i:"s")+"-"+ ++Hs.lastGeneratedId,this._onEnter=e,this._onExit=t}get id(){return this._id}get type(){return this._type}get isEntered(){return this._isEntered}enter(){this._isEntered||(Is("Entering "+this._id),this._onEnter(),this._isEntered=!0)}exit(){this._isEntered&&(Is("Exiting "+this._id),this._onExit(),this._isEntered=!1)}getHistoryState(){return{isHue:!0,hueId:this.id}}}Hs.lastGeneratedId=0;class Vs{constructor(){this._pointer=-1,this._stack=[]}logState(e){Is(e),Is("Stack: "+this._stack.length),this._pointer<0&&Is("[x]");for(let e=0;e<this._stack.length;e++){const t=(e==this._pointer?"[x] ":"[ ] ")+this._stack[e].id;Is(t)}}resetBeforeStart(){const e=[];for(let t=this._pointer;t>=0;t--)e.push(this._stack[this._pointer]);return this._pointer=-1,{toExit:e,toEnter:[],found:!0}}push(e){for(;this._stack.length>this._pointer+1;)this._stack.pop();this._stack.push(e),this._pointer=this._stack.length-1,this.logState("Pushed "+e.id)}replaceIfPossible(e){if(e.type&&this._pointer>=0){const t=this._stack[this._pointer];if(t.type==e.type)return this._stack[this._pointer]=e,this.logState("Replaced "+t.id+" with "+e.id),{replaced:!0,oldItem:t}}return Is("Replace not possible for "+e.id),{replaced:!1,oldItem:void 0}}moveTo(e){let t=!1;const i=[],s=[];for(let s=this._pointer;s>=0;s--){const r=this._stack[s];if(r.id==e){this._pointer=s,t=!0;break}i.push(r)}if(t)return this.logState("Moved to "+e),{found:t,toExit:i,toEnter:s};i.length=0;for(let i=this._pointer+1;i<this._stack.length;i++){const r=this._stack[i];if(r.id==e&&(this._pointer=i,t=!0),s.push(r),t)break}return t?this.logState("Moved to "+e):(s.length=0,Is("NOT moved to "+e)),{found:t,toExit:i,toEnter:s}}stepsBackBefore(e){for(let t=this._pointer;t>=0;t--){if(this._stack[t].id==e){const i=this._pointer-t+1;return this.logState(i+" steps back needed to go before "+e),i}}return null}isEmpty(){return 0==this._stack.length}}class Bs{static get instance(){return this._instance||(this._instance=new this)}constructor(){this._states=new Vs,window.addEventListener("popstate",(e=>this.resolvePopstate(e)))}resolvePopstate(e){const t=e.state;let i;1==(null==t?void 0:t.isHue)?(window.history.replaceState(t,""),i=this._states.moveTo(t.hueId)):i=this._states.resetBeforeStart(),i.found&&(i.toExit.forEach((e=>e.exit())),i.toEnter.forEach((e=>e.enter())))}addStep(e){var t;if(this._states.isEmpty()){const e=new Hs(pt,pt,"startStep");this._states.push(e),window.history.replaceState(e.getHistoryState(),"")}const i=e.getHistoryState(),s=this._states.replaceIfPossible(e);s.replaced?(window.history.replaceState(i,""),e.position=null===(t=s.oldItem)||void 0===t?void 0:t.position):(this._states.push(e),window.history.pushState(i,""),e.position=window.history.length),e.enter()}goBefore(e){const t=this._states.stepsBackBefore(e.id);t&&window.history.go(-t)}}const Rs={cs:{"card.description.allLightsOn":"Všechna světla jsou zapnutá","card.description.noLightsOn":"Všechna světla jsou vypnutá","card.description.oneLightOn":"1 světlo je zapnuté","card.description.someLightsAreOn":"Počet zapnutých světel: %s","dialog.lights":"Světla","dialog.scenes":"Moje scény","effects.candle":"Svíčka","effects.fireplace":"Ohniště","scenes.preset.bright":"Světlé","scenes.preset.concentrate":"Soustředění","scenes.preset.coolBright":"Jasné chladné","scenes.preset.dimmed":"Ztlumené","scenes.preset.doze":"Odpočívejte","scenes.preset.energize":"Povzbuzující","scenes.preset.naturalLight":"Přirozené světlo","scenes.preset.nightLight":"Noční světlo","scenes.preset.read":"Čtení","scenes.preset.relax":"Relaxační"},da:{"card.description.allLightsOn":"Alle lyskilder er tændt","card.description.noLightsOn":"Alle lyskilder er slukkede","card.description.oneLightOn":"1 lyskilde er tændt","card.description.someLightsAreOn":"%s lyskilder er tændt","dialog.lights":"Lyskilder","dialog.scenes":"Mine scener","effects.candle":"Stearinlys","effects.fireplace":"Pejs","scenes.preset.bright":"Klar","scenes.preset.concentrate":"Koncentrer dig","scenes.preset.coolBright":"Kølig klar","scenes.preset.dimmed":"Dæmpet","scenes.preset.doze":"Slap af","scenes.preset.energize":"Få ny energi","scenes.preset.naturalLight":"Naturligt lys","scenes.preset.nightLight":"Natlys","scenes.preset.read":"Læs","scenes.preset.relax":"Slap af"},de:{"card.description.allLightsOn":"Alle Lampen sind eingeschaltet","card.description.noLightsOn":"Alle Lampen sind ausgeschaltet","card.description.oneLightOn":"1 Licht ist eingeschaltet","card.description.someLightsAreOn":"%s Lampen sind eingeschaltet","dialog.lights":"Lampen","dialog.scenes":"Meine Szenen","effects.candle":"Kerze","effects.fireplace":"Kaminfeuer","scenes.preset.bright":"Hell","scenes.preset.concentrate":"Konzentrieren","scenes.preset.coolBright":"Kühles, helles Licht","scenes.preset.dimmed":"Gedimmt","scenes.preset.doze":"Ruhephase","scenes.preset.energize":"Energie tanken","scenes.preset.naturalLight":"Natürliches Licht","scenes.preset.nightLight":"Nachtlicht","scenes.preset.read":"Lesen","scenes.preset.relax":"Entspannen"},en:{"card.description.allLightsOn":"All lights are on","card.description.noLightsOn":"All lights are off","card.description.oneLightOn":"1 light is on","card.description.someLightsAreOn":"%s lights are on","dialog.lights":"Lights","dialog.scenes":"My scenes","effects.candle":"Candle","effects.fireplace":"Fireplace","scenes.preset.bright":"Bright","scenes.preset.concentrate":"Concentrate","scenes.preset.coolBright":"Cool bright","scenes.preset.dimmed":"Dimmed","scenes.preset.doze":"Rest","scenes.preset.energize":"Energize","scenes.preset.naturalLight":"Natural light","scenes.preset.nightLight":"Nightlight","scenes.preset.read":"Read","scenes.preset.relax":"Relax"},en_gb:{"card.description.allLightsOn":"All lights are on","card.description.noLightsOn":"All lights are off","card.description.oneLightOn":"1 light is on","card.description.someLightsAreOn":"%s lights are on","dialog.lights":"Lights","dialog.scenes":"My scenes","effects.candle":"Candle","effects.fireplace":"Fireplace","scenes.preset.bright":"Bright","scenes.preset.concentrate":"Concentrate","scenes.preset.coolBright":"Cool bright","scenes.preset.dimmed":"Dimmed","scenes.preset.doze":"Rest","scenes.preset.energize":"Energise","scenes.preset.naturalLight":"Natural light","scenes.preset.nightLight":"Nightlight","scenes.preset.read":"Read","scenes.preset.relax":"Relax"},es:{"card.description.allLightsOn":"Todas las luces encendidas","card.description.noLightsOn":"Todas las luces apagadas","card.description.oneLightOn":"1 luz encendida","card.description.someLightsAreOn":"Hay %s luces encendidas","dialog.lights":"Luces","dialog.scenes":"Mis escenas","effects.candle":"Vela","effects.fireplace":"Chimenea","scenes.preset.bright":"Brillante","scenes.preset.concentrate":"Concentración","scenes.preset.coolBright":"Brillante fría","scenes.preset.dimmed":"Atenuado","scenes.preset.doze":"Descanso","scenes.preset.energize":"Energía","scenes.preset.naturalLight":"Luz natural","scenes.preset.nightLight":"Luz nocturna","scenes.preset.read":"Lectura","scenes.preset.relax":"Relax"},fi:{"card.description.allLightsOn":"Kaikki valot ovat päällä","card.description.noLightsOn":"Kaikki valot ovat poissa päältä","card.description.oneLightOn":"1 valo on päällä","card.description.someLightsAreOn":"%s valot palavat","dialog.lights":"Valot","dialog.scenes":"Valaistusasetukseni","effects.candle":"Kynttilä","effects.fireplace":"Takka","scenes.preset.bright":"Bright","scenes.preset.concentrate":"Concentrate","scenes.preset.coolBright":"Viileä kirkas","scenes.preset.dimmed":"Dimmed","scenes.preset.doze":"Lepohetki","scenes.preset.energize":"Energize","scenes.preset.naturalLight":"Luonnonvalo","scenes.preset.nightLight":"Yövalaistus","scenes.preset.read":"Read","scenes.preset.relax":"Relax"},fr:{"card.description.allLightsOn":"Toutes les lumières sont allumées","card.description.noLightsOn":"Toutes les lumières sont éteintes","card.description.oneLightOn":"1 lumière est allumée","card.description.someLightsAreOn":"%s lampes sont allumées","dialog.lights":"Lumières","dialog.scenes":"Mes scénarios","effects.candle":"Bougie","effects.fireplace":"Feu de cheminée","scenes.preset.bright":"Lumineux","scenes.preset.concentrate":"Concentration","scenes.preset.coolBright":"Lumière vive froide","scenes.preset.dimmed":"Atténué","scenes.preset.doze":"Repos","scenes.preset.energize":"Stimulation","scenes.preset.naturalLight":"Lumière naturelle","scenes.preset.nightLight":"Veilleuse","scenes.preset.read":"Lecture","scenes.preset.relax":"Détente"},it:{"card.description.allLightsOn":"Tutte le luci sono accese","card.description.noLightsOn":"Tutte le luci sono spente","card.description.oneLightOn":"1 luce è accesa","card.description.someLightsAreOn":"%s luci sono accese","dialog.lights":"Luci","dialog.scenes":"Le mie scene","effects.candle":"Candela","effects.fireplace":"Caminetto","scenes.preset.bright":"Luce brillante","scenes.preset.concentrate":"Concentrazione","scenes.preset.coolBright":"Fredda brillante","scenes.preset.dimmed":"Luce soffusa","scenes.preset.doze":"Riposo","scenes.preset.energize":"Energia","scenes.preset.naturalLight":"Luce naturale","scenes.preset.nightLight":"Luce notturna","scenes.preset.read":"Lettura","scenes.preset.relax":"Relax"},ja:{"card.description.allLightsOn":"すべてのライトがオンです","card.description.noLightsOn":"すべてのライトがオフです","card.description.oneLightOn":"1 個のライトがオンです","card.description.someLightsAreOn":"%s照明がオンです","dialog.lights":"ライト","dialog.scenes":"マイ シーン","effects.candle":"キャンドル","effects.fireplace":"暖炉","scenes.preset.bright":"明るめ","scenes.preset.concentrate":"集中する","scenes.preset.coolBright":"昼白色","scenes.preset.dimmed":"暗め","scenes.preset.doze":"残り","scenes.preset.energize":"やる気を出す","scenes.preset.naturalLight":"自然光","scenes.preset.nightLight":"夜間照明","scenes.preset.read":"読書をする","scenes.preset.relax":"くつろぐ"},ko:{"card.description.allLightsOn":"모든 조명 켜짐","card.description.noLightsOn":"모든 조명 꺼짐","card.description.oneLightOn":"1개 조명 켜짐","card.description.someLightsAreOn":"%s개의 조명이 켜져 있습니다","dialog.lights":"조명","dialog.scenes":"내 장면","effects.candle":"캔들","effects.fireplace":"벽난로","scenes.preset.bright":"밝게","scenes.preset.concentrate":"집중","scenes.preset.coolBright":"시원하고 밝은 느낌","scenes.preset.dimmed":"어둡게","scenes.preset.doze":"휴지","scenes.preset.energize":"활력","scenes.preset.naturalLight":"자연광","scenes.preset.nightLight":"야간 조명","scenes.preset.read":"독서","scenes.preset.relax":"휴식"},nb:{"card.description.allLightsOn":"Alle lysene er nå slått på","card.description.noLightsOn":"Alle lysene er nå slått av","card.description.oneLightOn":"1 lys er slått på","card.description.someLightsAreOn":"%s lysene er på","dialog.lights":"Lys","dialog.scenes":"Mine scener","effects.candle":"Vokslys","effects.fireplace":"Bål","scenes.preset.bright":"Lyst","scenes.preset.concentrate":"Konsentrer deg","scenes.preset.coolBright":"Kjølig lysstyrke","scenes.preset.dimmed":"Dimmet","scenes.preset.doze":"Hvile","scenes.preset.energize":"Lad batteriene","scenes.preset.naturalLight":"Naturlig lys","scenes.preset.nightLight":"Nattlys","scenes.preset.read":"Les","scenes.preset.relax":"Slapp av"},nl:{"card.description.allLightsOn":"Alle lampen staan aan","card.description.noLightsOn":"Alle lampen staan uit","card.description.oneLightOn":"1 lamp staat aan","card.description.someLightsAreOn":"%s lampen staan aan","dialog.lights":"Lampen","dialog.scenes":"Mijn scènes","effects.candle":"Kaars","effects.fireplace":"Open haard","scenes.preset.bright":"Helder","scenes.preset.concentrate":"Concentreren","scenes.preset.coolBright":"Koel helder","scenes.preset.dimmed":"Gedimd","scenes.preset.doze":"Rusten","scenes.preset.energize":"Energie","scenes.preset.naturalLight":"Natuurlijk licht","scenes.preset.nightLight":"Nachtlampje","scenes.preset.read":"Lezen","scenes.preset.relax":"Ontspannen"},pl:{"card.description.allLightsOn":"Wszystkie światła są włączone","card.description.noLightsOn":"Wszystkie światła są wyłączone","card.description.oneLightOn":"1 światło jest włączone","card.description.someLightsAreOn":"Zapalone światła %s","dialog.lights":"Światła","dialog.scenes":"Moje sceny","effects.candle":"Świeca","effects.fireplace":"Kominek","scenes.preset.bright":"Jasne","scenes.preset.concentrate":"Koncentracja","scenes.preset.coolBright":"Zimne światło","scenes.preset.dimmed":"Przyćmione","scenes.preset.doze":"Odpoczynek","scenes.preset.energize":"Energia","scenes.preset.naturalLight":"Światło naturalne","scenes.preset.nightLight":"Lampka nocna","scenes.preset.read":"Czytanie","scenes.preset.relax":"Relaks"},pt_br:{"card.description.allLightsOn":"Todas as luzes estão acesas","card.description.noLightsOn":"Todas as luzes estão apagadas","card.description.oneLightOn":"1 luz acesa","card.description.someLightsAreOn":"%s luzes estão acesas","dialog.lights":"Luzes","dialog.scenes":"Minhas cenas","effects.candle":"Vela","effects.fireplace":"Lareira","scenes.preset.bright":"Luz","scenes.preset.concentrate":"Concentrar","scenes.preset.coolBright":"Frio claro","scenes.preset.dimmed":"Esmaecido","scenes.preset.doze":"Repousar","scenes.preset.energize":"Energizar","scenes.preset.naturalLight":"Luz natural","scenes.preset.nightLight":"Luz noturna","scenes.preset.read":"Leitura","scenes.preset.relax":"Relaxar"},ru:{"card.description.allLightsOn":"Все лампы включены","card.description.noLightsOn":"Все лампы выключены","card.description.oneLightOn":"Включено ламп: 1","card.description.someLightsAreOn":"Включено ламп: %s","dialog.lights":"Лампы","dialog.scenes":"Мои варианты освещения","effects.candle":"Свеча","effects.fireplace":"Камин","scenes.preset.bright":"Яркий свет","scenes.preset.concentrate":"Концентрация","scenes.preset.coolBright":"Яркий холодный","scenes.preset.dimmed":"Приглушенный свет","scenes.preset.doze":"Отдых","scenes.preset.energize":"Заряд энергии","scenes.preset.naturalLight":"Дневной свет","scenes.preset.nightLight":"Ночное освещение","scenes.preset.read":"Чтение","scenes.preset.relax":"Отдых"},sk:{"card.description.allLightsOn":"Všetky svetlá zapnuté","card.description.noLightsOn":"Všetky svetlá vypnuté","card.description.oneLightOn":"1 svetlo je zapnuté","card.description.someLightsAreOn":"Počet zapnutých svetiel: %s","dialog.lights":"Svetlá","dialog.scenes":"Moje scény","effects.candle":"Sviečka","effects.fireplace":"Ohnisko","scenes.preset.bright":"Svetlé","scenes.preset.concentrate":"Sústredenie","scenes.preset.coolBright":"Jasné chladné","scenes.preset.dimmed":"Tlmené","scenes.preset.doze":"Odpočinok","scenes.preset.energize":"Povzbudzujúce","scenes.preset.naturalLight":"Prírodné svetlo","scenes.preset.nightLight":"Nočné svetlo","scenes.preset.read":"Čítanie","scenes.preset.relax":"Relaxačné"},sv:{"card.description.allLightsOn":"Alla lampor är tända","card.description.noLightsOn":"Alla lampor är släckta","card.description.oneLightOn":"En lampa är tänd","card.description.someLightsAreOn":"%s-lamporna är tända","dialog.lights":"Belysning","dialog.scenes":"Mina scener","effects.candle":"Kronljus","effects.fireplace":"Eldstad","scenes.preset.bright":"Klart ljus","scenes.preset.concentrate":"Concentrate","scenes.preset.coolBright":"Svalt ljus","scenes.preset.dimmed":"Dimrad","scenes.preset.doze":"Vila","scenes.preset.energize":"Få ny energi","scenes.preset.naturalLight":"Naturligt ljus","scenes.preset.nightLight":"Nattlampa","scenes.preset.read":"Läs","scenes.preset.relax":"Koppla av"},tr:{"card.description.allLightsOn":"Tüm ışıklar açık","card.description.noLightsOn":"Tüm ışıklar kapalı","card.description.oneLightOn":"1 ışık açık","card.description.someLightsAreOn":"%s ışıklar açık","dialog.lights":"Işıklar","dialog.scenes":"Görünümlerim","effects.candle":"Mum","effects.fireplace":"Şömine","scenes.preset.bright":"Parlak","scenes.preset.concentrate":"Odaklanın","scenes.preset.coolBright":"Soğuk parlak","scenes.preset.dimmed":"Karartılmış","scenes.preset.doze":"Dinlenme","scenes.preset.energize":"Canlanın","scenes.preset.naturalLight":"Doğal ışık","scenes.preset.nightLight":"Gece Işığı","scenes.preset.read":"Okuyun","scenes.preset.relax":"Dinlenin"},zh_hans:{"card.description.allLightsOn":"所有灯具均已亮起","card.description.noLightsOn":"所有灯具均已关闭","card.description.oneLightOn":"1 盏灯亮起","card.description.someLightsAreOn":"%s 盏灯亮起","dialog.lights":"灯","dialog.scenes":"我的场景","effects.candle":"烛光灯","effects.fireplace":"壁炉灯","scenes.preset.bright":"明亮","scenes.preset.concentrate":"集中精神","scenes.preset.coolBright":"明亮的冷光","scenes.preset.dimmed":"渐暗","scenes.preset.doze":"重置","scenes.preset.energize":"注入能量","scenes.preset.naturalLight":"自然光","scenes.preset.nightLight":"夜灯","scenes.preset.read":"静心阅读","scenes.preset.relax":"放松休息"},zh_hant:{"card.description.allLightsOn":"所有燈光已開啟","card.description.noLightsOn":"所有燈光已關閉","card.description.oneLightOn":"已開啟 1 盞燈","card.description.someLightsAreOn":"%s 燈光已就緒","dialog.lights":"燈光","dialog.scenes":"我的場景","effects.candle":"蠟燭","effects.fireplace":"壁爐","scenes.preset.bright":"明亮","scenes.preset.concentrate":"專注精神","scenes.preset.coolBright":"冷白光","scenes.preset.dimmed":"黯淡","scenes.preset.doze":"待用","scenes.preset.energize":"活力充沛","scenes.preset.naturalLight":"自然光","scenes.preset.nightLight":"夜燈","scenes.preset.read":"閱讀","scenes.preset.relax":"放鬆休息"}};function zs(e,t,i="",s=""){var r,n,o;let a;a="string"==typeof e?e:e.language||"en",a=a.replace("-","_").toLowerCase();const l=a.split("_")[0];let c=(null!==(r=Rs[a])&&void 0!==r?r:{})[t]||(null!==(n=Rs[l])&&void 0!==n?n:{})[t]||(null!==(o=Rs.en)&&void 0!==o?o:{})[t]||t;return""!==i&&""!==s&&(c=c.replace(i,s)),c}var Ns;let Fs=Ns=class extends ct{constructor(e,t){super("HueDialog"),this._isRendered=!1,this._backdropSet=!1,this._lightDetailElement=null,this._config=e,this._ctrl=t}onLightControllerChanged(e){"hass"==e&&this.requestUpdate()}onLightSelected(e){if(e.detail.isSelected){const t=()=>{this._selectedLight=e.detail.lightContainer,Ns.tileScrollTo(e.detail.tileElement),this._lightDetailElement&&(this._lightDetailElement.lightContainer=this._selectedLight,this._lightDetailElement.show())},i=()=>{var e;this._selectedLight=null,null===(e=this._lightDetailElement)||void 0===e||e.hide()};this._lightDetailHistoryStep=new Hs(t,i,Ps.ElementName),Bs.instance.addStep(this._lightDetailHistoryStep)}else this._selectedLight==e.detail.lightContainer&&this.hideLightDetail()}hideLightDetail(){this._lightDetailHistoryStep&&Bs.instance.goBefore(this._lightDetailHistoryStep)}toggleUnderDetailControls(e){var t,i;this.renderRoot.querySelectorAll(".detail-hide").forEach((t=>{t.classList.toggle("hue-hidden",e)}));const s=null===(i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-dialog"))||void 0===i?void 0:i.shadowRoot;if(s){const t=s.getElementById("content");t&&(e?(t.style.overflowY="hidden",t.scrollBy({top:t.scrollHeight,behavior:"smooth"})):t.style.overflowY="")}}afterSceneActivated(e){Ns.tileScrollTo(e.detail.tileElement)}static tileScrollTo(e){if(!e)return;const t=e.closest(".tile-scroller");if(null==t)throw Error("Parent tile-scroller not found.");const i=t.offsetLeft+t.scrollLeft,s=t.clientWidth+i,r=e.offsetLeft-10,n=e.offsetLeft+e.clientWidth+10,o=r<i;o!=n>s&&(o?t.scrollBy({left:r-i,behavior:"smooth"}):t.scrollBy({left:n-s,behavior:"smooth"}))}show(){if(this._isRendered)throw new Error("Already rendered!");this._historyStep=new Hs((()=>this.showInternal()),(()=>this.close()),Ns.ElementName),Bs.instance.addStep(this._historyStep)}showInternal(){this._isRendered=!0;const e=this.getDialogElement();e&&(e.open=!0),document.body.appendChild(this),this._ctrl.registerOnPropertyChanged(this._id,(e=>this.onLightControllerChanged(e)))}close(){if(!this._isRendered)return;const e=this.getDialogElement();e?e.close():this.onDialogClose()}getDialogElement(){return this._isRendered&&this.renderRoot?this.renderRoot.querySelector("ha-dialog"):null}onDialogClose(){this._isRendered&&(this.remove(),this._ctrl.unregisterOnPropertyChanged(this._id),this._isRendered=!1),this._historyStep&&Bs.instance.goBefore(this._historyStep)}static get styles(){return[Ns.haStyleDialog,a`
    /* hiding controls when light detail is open */
    .detail-hide {
        transition:${o(ze.TransitionDefault)};
    }

    .hue-hidden {
        opacity: 0;
        pointer-events: none;
    }

    /* icon centering */
    .mdc-icon-button i,
    .mdc-icon-button svg,
    .mdc-icon-button img,
    .mdc-icon-button ::slotted(*){
        height:auto;
    }

    /* same color header */
    .hue-heading {
        --hue-heading-text-color: var(--hue-text-color, ${o(ze.ThemeDialogHeadingColorVar)});
        color:var(--hue-heading-text-color);
        background:var(--hue-background, ${o(ze.ThemeCardBackgroundVar)} );
        box-shadow:var(--hue-box-shadow), 0px 5px 10px rgba(0,0,0,0.5);
        transition:${o(ze.TransitionDefault)};

        border-bottom-left-radius: var(--ha-dialog-border-radius, 28px);
        border-bottom-right-radius: var(--ha-dialog-border-radius, 28px);
        padding-bottom: calc(var(--ha-dialog-border-radius, 28px) / 2);

        /* HA will show bottom border when scrolled down */
        border-bottom-width: 0;

        overflow:hidden;

        /* is above the backdrop */
        z-index:1;
    }
    ha-dialog-header {
        --mdc-theme-on-primary: var(--hue-heading-text-color);
        --mdc-theme-primary: transparent;
        flex-shrink: 0;
        display: block;
    }
    .hue-heading ha-switch {
        padding: 12px;
        margin: 4px 0;
    }
    .hue-heading .brightness-slider {
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
        margin-bottom: 0;
    }
    .header .title{
        color: ${o(ze.ThemeSecondaryTextColorVar)};
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
        /*gap: ${Ns.tileGap}px;*/
        max-width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        padding: 0 ${Ns.haPadding}px;
        margin: 0 -${Ns.haPadding}px;
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
        gap: ${Ns.tileGap}px;
        margin-bottom: ${Ns.tileGap}px;
    }
    .tile-scroller .tiles:first-child{
        margin-top: ${Ns.headerMargin}px;
    }
    .tiles::after {
        /* Flex loosing right padding, when overflowing */
        content: '';
        min-width: ${Ns.haPadding-Ns.tileGap}px;
    }

    /* Light tiles */
    .tile-scroller.light-tiles{
        transition: ${o(ze.TransitionDefault)};
        bottom: 100px;
    }

    @media all and (max-width: 450px), all and (max-height: 500px){
        .detail-active .tile-scroller.light-tiles{
            position: absolute;
            bottom: 30px;
            width: calc(100% - ${2*this.haPadding}px);
        }
    }
    `]}tryCreateBackdropAndLightDetail(e=!1){var t,i;if(!this._backdropSet||!this._lightDetailElement){const s=null===(i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-dialog"))||void 0===i?void 0:i.shadowRoot,r=s&&s.querySelector(".mdc-dialog__surface");if(r){if(!this._backdropSet){const e=document.createElement("div");e.id="hue-backdrop",e.style.position="absolute",e.style.width="100%",e.style.height="100%",e.style.borderRadius="var(--ha-dialog-border-radius, 28px)",e.style.background="var(--hue-background)",e.style.transition=ze.TransitionDefault;const t="linear-gradient(rgba(255, 255, 255, .25) 0%, transparent 70%)";e.style.mask=t,e.style.webkitMask=t,(e.style.mask||e.style.webkitMask)&&r.prepend(e),this._backdropSet=!0}if(!this._lightDetailElement){const e=new Ps;e.style.position="absolute",e.style.width="100%",e.style.height="calc(100% - 200px)",e.style.zIndex="2",e.addEventListener("show",(()=>{this.toggleUnderDetailControls(!0)})),e.addEventListener("hide",(()=>{this.toggleUnderDetailControls(!1),this.hideLightDetail()})),r.prepend(e),this._lightDetailElement=e}}else if(e)throw new Error("Cannot create backdrop and lightDetail. Surface not found.")}}updateStylesInner(e){var t,i;const s=this._config.getHueScreenBgColor();if(e){qe.applyTheme(this,this._ctrl.hass.themes,this._config.theme),qe.setDialogThemeStyles(this,"--hue-screen-background",s.isThemeColor()||this._config.getOffColor().isThemeColor());let e=null,t=null;s.isThemeColor()||(e=s,t=e.getForeground(ze.DialogFgLightColor,ze.DarkColor,120),this.style.setProperty("--hue-screen-background",e.toString()),this.style.setProperty("--primary-text-color",t.toString()))}const r=this.renderRoot.querySelector(".hue-heading");if(!r)throw new Error("Hue heading not found!");let n;if(this._config.wasOffColorSet){const e=this._config.getOffColor();n=e.isThemeColor()?null:new Fe([e.getBaseColor()])}else n=new Fe([new Re(ze.DialogOffColor)]);const o=ot.calculateBackAndForeground(this._ctrl,n,!0),a=ot.calculateDefaultShadow(r,this._ctrl,this._config.offShadow);this._config.hueBorders&&this.style.setProperty("--ha-dialog-border-radius",ze.HueBorderRadius+"px"),this.style.setProperty("--hue-background",null!==(i=null===(t=o.background)||void 0===t?void 0:t.toString())&&void 0!==i?i:ze.ThemeCardBackgroundVar),this.style.setProperty("--hue-box-shadow",a),null!=o.foreground?this.style.setProperty("--hue-text-color",o.foreground.toString()):this.style.removeProperty("--hue-text-color")}render(){this._isRendered=!0;const e=this._config.getTitle(this._ctrl).resolveToString(this._ctrl.hass),t=()=>{this.requestUpdate(),this.updateStylesInner(!1)};return Be`
        <ha-dialog
          open
          @closed=${()=>this.onDialogClose()}
          .heading=${e}
          hideActions
        >
          <ha-dialog-header slot="heading" class="hue-heading detail-hide">
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
              .title=${e}
            >
              ${e}
            </div>
            <div slot="actionItems">
              ${ot.createSwitch(this._ctrl,t)}
            </div>
            ${ot.createSlider(this._ctrl,this._config,t)}
          </ha-dialog-header>
          <div class="${ge({content:!0,"detail-active":!!this._selectedLight})}" tabindex="-1" dialogInitialFocus>
            <div class='header detail-hide'>
                <div class='title'>${zs(this._ctrl.hass,"dialog.scenes")}</div>
            </div>
            <div class='tile-scroller detail-hide'>
                <div class='tiles'>
                    ${this._config.scenes.map(((t,i)=>i%2==1?q:Be`<${He(ut.ElementName)}
                            .cardTitle=${e}
                            .sceneConfig=${t}
                            @activated=${e=>this.afterSceneActivated(e)}
                            .hass=${this._ctrl.hass}>
                        </${He(ut.ElementName)}>`))}
                </div>
                <div class='tiles'>
                    ${this._config.scenes.map(((t,i)=>i%2==0?q:Be`<${He(ut.ElementName)}
                            .cardTitle=${e}
                            .sceneConfig=${t}
                            @activated=${e=>this.afterSceneActivated(e)}
                            .hass=${this._ctrl.hass}>
                        </${He(ut.ElementName)}>`))}
                </div>
            </div>

            <div class='header detail-hide'>
                <div class='title'>${zs(this._ctrl.hass,"dialog.lights")}</div>
            </div>
            <div class='tile-scroller light-tiles'>
                <div class='tiles'>
                    ${this._ctrl.getLights().map((t=>Be`<${He(mt.ElementName)}
                            .cardTitle=${e}
                            .lightContainer=${t}
                            .isSelected=${this._selectedLight==t}
                            .isUnselected=${this._selectedLight&&this._selectedLight!=t}
                            @selected-change=${e=>this.onLightSelected(e)}
                            .defaultColor=${this._config.getDefaultColor()}
                            .hass=${this._ctrl.hass}>
                        </${He(mt.ElementName)}>`))}
                </div>
            </div>
          </div>
        </ha-dialog>
        `}updated(e){super.updated(e),this.updateStylesInner(!1)}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{this.tryCreateBackdropAndLightDetail(!0),this.updateStylesInner(!0)}))}};Fs.ElementName="hue-dialog"+ze.ElementPostfix,Fs.haStyleDialog=a`
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
  `,Fs.headerMargin=8,Fs.tileGap=10,Fs.haPadding=24,e([ye()],Fs.prototype,"_selectedLight",void 0),Fs=Ns=e([fe(Fs.ElementName)],Fs);class Us{constructor(e,t,i){this._config=e,this._ctrl=t,this._el=i}handleClick(){const e=this._ctrl.isOn();let t=e?this._config.onClickAction:this._config.offClickAction;const i=e?this._config.onClickData:this._config.offClickData;t==Je.Default&&(t=e?this.resolveDefaultWhenOn():this.resolveDefaultWhenOff()),this.executeClickAction(t,i)}resolveDefaultWhenOn(){return Je.HueScreen}resolveDefaultWhenOff(){return Je.HueScreen}executeClickAction(e,t){switch(e){case Je.NoAction:break;case Je.TurnOn:this._ctrl.turnOn();break;case Je.TurnOff:this._ctrl.turnOff();break;case Je.MoreInfo:let i=t.getData("entity");i||(i=this._ctrl.isOn()?this._ctrl.getLitLights()[0].getEntityId():this._config.getEntities()[0]),Me(this._el,"hass-more-info",{entityId:i});break;case Je.Scene:const s=t.getData("scene");if(!s)throw new Error("No scene for click defined.");const r=new rt(s);r.hass=this._ctrl.hass,r.activate();break;case Je.HueScreen:new Fs(this._config,this._ctrl).show();break;case Je.Default:throw new Error("Cannot execute Default action");default:throw new Error(`Cannot executed unwknow action ${e}.`)}}}var Ws;!function(e){e.unknown="unknown",e.onoff="onoff",e.brightness="brightness",e.color_temp="color_temp",e.hs="hs",e.xy="xy",e.rgb="rgb",e.rgbw="rgbw",e.rgbww="rgbww",e.white="white"}(Ws||(Ws={}));class js{constructor(e){this._attribute=null;const t=(e=e.trim()).indexOf("."),i=e.lastIndexOf(".");t!=i?(this._textOrEntity=e.substring(0,i),this._attribute=e.substring(i+1)):this._textOrEntity=e}resolveToString(e){if(e){const t=e.states[this._textOrEntity];if(!t)return"MISS["+this._textOrEntity+"]";const i=e;if(this._attribute&&t.attributes){const e=t.attributes[this._attribute];if(e)return i.formatEntityAttributeValue?i.formatEntityAttributeValue(t,this._attribute):e.toString()}return i.formatEntityState?i.formatEntityState(t):null!=e.localize?function(e,t,i,s){var r=void 0!==s?s:t.state;if("unknown"===r||"unavailable"===r)return e("state.default."+r);if(function(e){return!!e.attributes.unit_of_measurement||!!e.attributes.state_class}(t)){if("monetary"===t.attributes.device_class)try{return Oe(r,i,{style:"currency",currency:t.attributes.unit_of_measurement})}catch(e){}return Oe(r,i)+(t.attributes.unit_of_measurement?" "+t.attributes.unit_of_measurement:"")}var n=function(e){return function(e){return e.substr(0,e.indexOf("."))}(e.entity_id)}(t);if("input_datetime"===n){var o;if(void 0===s)return t.attributes.has_date&&t.attributes.has_time?(o=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day,t.attributes.hour,t.attributes.minute),Ee(o,i)):t.attributes.has_date?(o=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day),ke(o,i)):t.attributes.has_time?((o=new Date).setHours(t.attributes.hour,t.attributes.minute),Te(o,i)):t.state;try{var a=s.split(" ");if(2===a.length)return Ee(new Date(a.join("T")),i);if(1===a.length){if(s.includes("-"))return ke(new Date(s+"T00:00"),i);if(s.includes(":")){var l=new Date;return Te(new Date(l.toISOString().split("T")[0]+"T"+s),i)}}return s}catch(e){return s}}return"humidifier"===n&&"on"===r&&t.attributes.humidity?t.attributes.humidity+" %":"counter"===n||"number"===n||"input_number"===n?Oe(r,i):t.attributes.device_class&&e("component."+n+".state."+t.attributes.device_class+"."+r)||e("component."+n+".state._."+r)||r}(e.localize,t,e.locale):t.state}return""}}class qs{constructor(e){this._text=e}resolveToString(e=null){return this._text}toString(){return this.resolveToString()}}class Ys{constructor(e){this._templateParts=Ys.parseTemplate(e)}resolveToString(e){if(1==this._templateParts.length)return this._templateParts[0].resolveToString(e);let t="";return this._templateParts.forEach((i=>{t+=i.resolveToString(e)})),t}static parseTemplate(e){const t=new Array;let i=0,s=!1;for(;i<e.length;){let r;if(s){if(r=e.indexOf("}}",i),r<0)break;const n=e.substring(i,r);t.push(new js(n)),s=!1}else{if(r=e.indexOf("{{",i),r<0)break;const n=e.substring(i,r);t.push(new qs(n)),s=!0}i=r+2}if(s&&(i-=2),i<e.length){const s=e.substring(i);t.push(new qs(s))}return t}}class Gs{constructor(e){if(this.brightness=!1,this.colorTemp=!1,this.colorTempMinKelvin=null,this.colorTempMaxKelvin=null,this.color=!1,null!=e.attributes&&null!=e.attributes.supported_color_modes&&0!=e.attributes.supported_color_modes.length){for(const t of e.attributes.supported_color_modes)switch(t){case Ws.onoff:break;case Ws.brightness:this.brightness=!0;break;case Ws.color_temp:this.brightness=!0,this.colorTemp=!0;break;case Ws.hs:case Ws.xy:case Ws.rgb:case Ws.rgbw:case Ws.rgbww:this.brightness=!0,this.color=!0}this.colorTemp&&(this.colorTempMinKelvin=e.attributes.min_color_temp_kelvin||null,this.colorTempMaxKelvin=e.attributes.max_color_temp_kelvin||null)}}isEmpty(){return!this.color&&!this.colorTemp&&!this.brightness}isOnlyBrightness(){return!this.color&&!this.colorTemp&&this.brightness}}class Ks{constructor(e){this._features=e}isEmpty(){return this._features().every((e=>e.isEmpty()))}isOnlyBrightness(){let e=!1;const t=this._features();for(let i=0;i<t.length;i++){const s=t[i];if(s.isOnlyBrightness())e=!0;else if(!s.isEmpty())return!1}return e}get brightness(){return this._features().some((e=>e.brightness))}get colorTemp(){return this._features().some((e=>e.colorTemp))}get colorTempMinKelvin(){let e=null;return this._features().forEach((t=>{t.colorTempMinKelvin&&(null==e||e>t.colorTempMinKelvin)&&(e=t.colorTempMinKelvin)})),e}get colorTempMaxKelvin(){let e=null;return this._features().forEach((t=>{t.colorTempMaxKelvin&&(null==e||e<t.colorTempMaxKelvin)&&(e=t.colorTempMaxKelvin)})),e}get color(){return this._features().some((e=>e.color))}}class Xs{constructor(e,t=!1){this.value=e,this.dontCache=t}}class Qs{constructor(e){this._factories={},this._lastValues={},this._cacheInterval=e}registerProperty(e,t){this._factories[e]=t,delete this._lastValues[e]}setValue(e,t){this.ensureExists(e),this._lastValues[e]=this.createCacheItem(t)}getValue(e){this.ensureExists(e);const t=(new Date).getTime(),i=this._lastValues[e];if(i&&t-i.time<this._cacheInterval)return i.value;let s=this._factories[e](),r=!1;if(s instanceof Xs){const e=s;s=e.value,r=e.dontCache}return r||this.setValue(e,s),s}ensureExists(e){if(!this._factories[e])throw Error(`Property with name ${e} is not registered in TimeCache.`)}createCacheItem(e){return{value:e,time:(new Date).getTime()}}}class Zs{constructor(){this._propertyChangedCallbacks={}}raisePropertyChanged(e){for(const t in this._propertyChangedCallbacks)this._propertyChangedCallbacks[t](e)}registerOnPropertyChanged(e,t){this._propertyChangedCallbacks[e]=t}unregisterOnPropertyChanged(e){delete this._propertyChangedCallbacks[e]}}class Js extends Zs{constructor(e){super(),Ke(e,"light"),this._entity_id=e,this.initTimeCache()}set hass(e){if(this._hass=e,!this._hass.states)throw new Error("No 'states' available on passed hass instance.");if(this._entity=this._hass.states[this._entity_id],!this._entity)throw new Error(`Entity '${this._entity_id}' not found in states.`);this._entityFeatures=new Gs(this._entity),this.raisePropertyChanged("hass")}getIcon(){return this._entity&&this._entity.attributes.icon}getTitle(){var e;return new qs(null!==(e=this._entity.attributes.friendly_name)&&void 0!==e?e:this._entity_id)}getEntityId(){return this._entity_id}get features(){return this._entityFeatures}initTimeCache(){this._cache=new Qs(ze.TimeCacheInterval),this._cache.registerProperty("state",(()=>{var e;return new Xs(null===(e=this._entity)||void 0===e?void 0:e.state,this.getDontCacheState())})),this._cache.registerProperty("brightnessValue",(()=>new Xs(this.brightnessValueGetFactory(),this.getDontCacheBrightnessValue()))),this._cache.registerProperty("colorMode",(()=>this.colorModeGetFactory())),this._cache.registerProperty("colorTemp",(()=>this.colorTempGetFactory())),this._cache.registerProperty("color",(()=>this.colorGetFactory()))}getDontCacheState(){return!this._entity||"unavailable"==this._entity.state}getDontCacheBrightnessValue(){var e;return this.getDontCacheState()||null==(null===(e=this._entity.attributes)||void 0===e?void 0:e.brightness)}notifyTurnOn(){this._cache.setValue("state","on"),this._lastOnBrightnessValue&&this._cache.setValue("brightnessValue",this._lastOnBrightnessValue)}notifyTurnOff(){this._cache.setValue("state","off"),this._cache.setValue("brightnessValue",0)}notifyBrightnessValueChanged(e){e>0&&(this._lastOnBrightnessValue=e),this._cache.setValue("brightnessValue",e),this._cache.setValue("state",e>0?"on":"off")}notifyColorTempChanged(e){this._lastColorTemp=e,this._cache.setValue("colorTemp",e),this._cache.setValue("colorMode",Ws.color_temp)}notifyColorChanged(e,t){this._cache.setValue("colorTemp",null),this._cache.setValue("colorMode",t),this._cache.setValue("color",e)}isUnavailable(){return"unavailable"==this._cache.getValue("state")}isOn(){return"on"==this._cache.getValue("state")}isOff(){return!this.isOn()}turnOn(){this.toggle(!0)}turnOff(){this.toggle(!1)}toggle(e){this.isUnavailable()||(e?this.notifyTurnOn():this.notifyTurnOff(),this._hass.callService("light",e?"turn_on":"turn_off",{entity_id:this._entity_id}))}brightnessValueGetFactory(){var e;if(this.isOff())return 0;const t=this._entity.attributes,i=null!==(e=null==t?void 0:t.brightness)&&void 0!==e?e:255;return this._lastOnBrightnessValue=Math.round(i/255*100),this._lastOnBrightnessValue}get brightnessValue(){return this._cache.getValue("brightnessValue")}set brightnessValue(e){e<0?e=0:e>100&&(e=100),this.notifyBrightnessValueChanged(e);const t=Math.round(e/100*255);this._hass.callService("light","turn_on",{entity_id:this._entity_id,brightness:t})}colorModeGetFactory(){let e=Ws.unknown,t=!0;if(this.isOn()){const i=this._entity.attributes.color_mode;if(i&&(e=i,t=!1,this._lastColorTemp&&e==Ws.xy&&this._entity.attributes.xy_color)){const[t,i]=this._entity.attributes.xy_color;0===t&&0===i&&(e=Ws.color_temp)}}return new Xs(e,t)}get colorMode(){return this._cache.getValue("colorMode")}isColorModeColor(){return[Ws.hs,Ws.xy,Ws.rgb,Ws.rgbw,Ws.rgbww].includes(this.colorMode)}isColorModeTemp(){return this.colorMode==Ws.color_temp}colorTempGetFactory(){if(this.isOff()||!this.isColorModeTemp())return new Xs(null,!0);const e=this._entity.attributes;return(null==e?void 0:e.color_temp_kelvin)&&(this._lastColorTemp=null==e?void 0:e.color_temp_kelvin),new Xs(this._lastColorTemp,!this._lastColorTemp)}get colorTemp(){return this._cache.getValue("colorTemp")}set colorTemp(e){var t,i,s,r,n,o;if(!e)return;const a=null!==(s=null===(i=null===(t=this._entity)||void 0===t?void 0:t.attributes)||void 0===i?void 0:i.min_color_temp_kelvin)&&void 0!==s?s:2e3,l=null!==(o=null===(n=null===(r=this._entity)||void 0===r?void 0:r.attributes)||void 0===n?void 0:n.max_color_temp_kelvin)&&void 0!==o?o:6500;e<a?e=a:e>l&&(e=l),this.notifyColorTempChanged(e),this._hass.callService("light","turn_on",{entity_id:this._entity_id,kelvin:e})}colorGetFactory(){var e;if(this.isOff()||!this.isColorModeColor())return new Xs(null,!0);const t=null===(e=this._entity)||void 0===e?void 0:e.attributes;let i=null;if(t.hs_color){const[e,s]=t.hs_color;i=new Re(e,s/100,1,1,"hsv")}else if(t.rgb_color){const[e,s,r]=t.rgb_color;i=new Re(e,s,r)}return new Xs(i,!i)}get color(){return this._cache.getValue("color")}set color(e){if(!e)return;let t;const i={entity_id:this._entity_id};"hsv"==e.getOriginalMode()?(t=Ws.hs,i.hs_color=[e.getHue(),100*e.getSaturation()]):(t=Ws.rgb,i.rgb_color=[e.getRed(),e.getGreen(),e.getBlue()]),this.notifyColorChanged(e,t),this._hass.callService("light","turn_on",i)}getBackground(){let e,t,i=null;if(this.isColorModeTemp()&&(e=this.colorTemp)){const[t,s,r]=Re.hueTempToRgb(e);i=new Re(t,s,r)}else this.isColorModeColor()&&(t=this.color)&&(i=t);return i?(this._lastBackground=new Fe([i]),this._lastBackground):this._lastBackground?this._lastBackground:null}}class er{static getLightContainer(e){let t=this._containers[e];return t||(t=new Js(e),this._containers[e]=t),t}}er._containers={};class tr extends Zs{constructor(e,t){if(super(),!e.length)throw new Error('No entity specified (use "entity" and/or "entities").');this._defaultColor=t,this._lights=e.map((e=>er.getLightContainer(e))),this._lightsFeatures=new Ks((()=>this._lights.map((e=>e.features))))}get count(){return this._lights.length}getLitLights(){return this._lights.filter((e=>e.isOn()))}getLights(){return this._lights.map((e=>e))}set hass(e){this._hass=e,this._lights.forEach((t=>t.hass=e)),this.raisePropertyChanged("hass")}get hass(){return this._hass}isOn(){return this._lights.some((e=>e.isOn()))}isOff(){return this._lights.every((e=>e.isOff()))}isUnavailable(){return this._lights.every((e=>e.isUnavailable()))}turnOn(){this._lights.filter((e=>e.isOff())).forEach((e=>e.turnOn()))}turnOff(){this._lights.filter((e=>e.isOn())).forEach((e=>e.turnOff()))}get brightnessValue(){return this.valueGetFactory()}set brightnessValue(e){const t=this._lights.filter((e=>e.isOn()));if(1==t.length)return void(t[0].brightnessValue=e);if(0==t.length)return void this._lights.forEach((t=>t.brightnessValue=e));const i=this.brightnessValue,s=e-i,r=s>0?100-this.brightnessValue:this.brightnessValue,n=s/r;this._lights.filter((e=>e.isOn())).forEach((t=>{if(t.brightnessValue==i)return void(t.brightnessValue=e);const r=s>0?100-t.brightnessValue:t.brightnessValue,o=Math.round(r*n);let a=t.brightnessValue+o;a<1&&e>0&&(a=1),t.brightnessValue=a}))}valueGetFactory(){let e=0,t=0;if(this._lights.forEach((i=>{i.isOn()&&(t++,e+=i.brightnessValue)})),0==t)return 0;return e/t*1}getIcon(){return 1==this._lights.length?this._lights[0].getIcon()||gt.getIcon(1):gt.getIcon(this._lights.length)}getTitle(){let e="";for(let t=0;t<this._lights.length&&t<3;t++)t>0&&(e+=", "),e+=this._lights[t].getTitle();return this._lights.length>3&&(e+=", ..."),new qs(e)}getDescription(e){const t=this._lights.length;let i,s=0;if(this._lights.forEach((e=>{e.isOn()&&s++})),null!=e){if(e)return i=e.replace("%s",s.toString()),new Ys(i);i=""}else i=0==s?zs(this.hass,"card.description.noLightsOn"):s==t?zs(this.hass,"card.description.allLightsOn"):1==s?zs(this.hass,"card.description.oneLightOn"):zs(this.hass,"card.description.someLightsAreOn","%s",s.toString());return new qs(i)}getBackground(){const e=this._lights.filter((e=>e.isOn())).map((e=>e.getBackground()||this._defaultColor));return 0==e.length?null:new Fe(e)}getEntityId(){throw Error("Cannot get entity id from LightController")}get features(){return this._lightsFeatures}}class ir{constructor(e){if(!e)throw new Error("Hass instance must be passed!");this._hass=e}async getArea(e){const t=await this._hass.connection.sendMessagePromise({type:"search/related",item_type:"entity",item_id:e});return t&&t.area&&t.area.length?t.area[0]:null}async getScenes(e){const t=await this._hass.connection.sendMessagePromise({type:"search/related",item_type:"area",item_id:e});return t&&t.scene&&t.scene.length?t.scene:[]}}class sr{constructor(e){this._scenesLoaded=!1,this.entity=e.entity,this.entities=e.entities,this.title=e.title,this.description=e.description,this.icon=e.icon,this.iconSize=sr.getIconSize(e.iconSize),this.showSwitch=sr.getBoolean(e.showSwitch,!0),this.slider=sr.getSliderType(e.slider),this._scenes=sr.getScenesArray(e.scenes),this.sceneOrder=sr.getSceneOrder(e.sceneOrder),this.offClickAction=sr.getClickAction(e.offClickAction),this.offClickData=new it(e.offClickData),this.onClickAction=sr.getClickAction(e.onClickAction),this.onClickData=new it(e.onClickData),this.allowZero=sr.getBoolean(e.allowZero,!1),this.theme=e.theme||ze.ThemeDefault,this.defaultColor=e.defaultColor||ze.DefaultColor,this.offColor=e.offColor||ze.OffColor,this.wasOffColorSet=!!e.offColor,this.hueScreenBgColor=e.hueScreenBgColor||ze.DialogBgColor,null!=e.disableOffShadow&&console.warn("[HueLikeLightCard] Use 'offShadow' (with inverted value) property instead of deprecated 'disableOffShadow'"),this.offShadow=sr.getBoolean(e.offShadow,!sr.getBoolean(e.disableOffShadow,!1)),this.hueBorders=sr.getBoolean(e.hueBorders,!0),this.style=e.style,this.card_mod=e.card_mod}static getBoolean(e,t){return null==e?t:!!e}static getSliderType(e){return e?this.tryParseEnum(Ze,e,"Slider type"):Ze.Default}static getClickAction(e){return e?this.tryParseEnum(Je,e,"Click action"):Je.Default}static getIconSize(e){if(!e)return ze.IconSize[Qe.Original];if("number"==typeof e)return e;e=e.toString().toLowerCase();const t=this.tryParseEnum(Qe,e,"Icon size");return ze.IconSize[t]}static getSceneOrder(e){return e?this.tryParseEnum(et,e,"Scene order"):et.Default}static tryParseEnum(e,t,i){let s="";for(const i in e){const r=e[i];if(t==r)return t;s+=`'${r}', `}throw new Error(`${i} '${t}' was not recognized. Allowed values are: ${s}`)}static getScenesArray(e){if(!e)return[];if(e.length>0){const t=new Array;for(let i=0;i<e.length;i++){const s=e[i],r=sr.getScene(s,i);r&&t.push(r)}return t}return[]}static getScene(e,t){if("string"==typeof e)return new st(e);if(!e.entity)throw new Error(`Scene on index ${t} is missing 'entity' attribute, which is required.`);const i=new st(e.entity);return i.title=e.title,i.icon=e.icon,i.color=e.color,i.activation=e.activation,i.activationData=e.activationData,i}get scenes(){return this._scenes}get disableOffShadow(){return!this.offShadow}getTitle(e){return this.title?new Ys(this.title):e.getTitle()}getEntities(){const e=[];return this.entity&&e.push(this.entity),this.entities&&this.entities.forEach((t=>{"string"==typeof t?e.push(t):t.entity&&e.push(t.entity)})),e}getDefaultColor(){return Ye.getColor(this.defaultColor)}getOffColor(){return new Ne(this.offColor)}getHueScreenBgColor(){return new Ne(this.hueScreenBgColor)}get scenesLoaded(){return this._scenesLoaded}async tryLoadScenes(e){if(!e)throw new Error("Hass instance must be passed!");if(0==this.scenes.length&&!this._scenesLoaded){this._scenesLoaded=!0;const t=new ir(e);try{const e=Xe(this.getEntities()).map((e=>({entityId:e})));await Promise.all(e.map((async e=>{e.area=await t.getArea(e.entityId)}))),await Promise.all(e.map((async e=>{e.area&&(e.areaScenes=await t.getScenes(e.area))})));let i=e.filter((e=>!!e.areaScenes)).flatMap((e=>e.areaScenes));switch(i=Xe(i),this.sceneOrder){case et.NameAsc:i.sort(((e,t)=>e.localeCompare(t)));break;case et.NameDesc:i.sort(((e,t)=>t.localeCompare(e)))}this._scenes=sr.getScenesArray(i)}catch(e){console.error("Cannot load scenes from HA."),console.error(e)}}}}class rr{constructor(e){"string"==typeof e?this._message=e:e instanceof Error?(this._message=e.message,this._stack=e.stack):this._message=(null==e?void 0:e.toString())||"UNKNOWN ERROR"}get message(){return this._message}get stack(){return this._stack||""}}console.info(`%cHUE-%cLIKE%c LIGHT%c CARD %c${ze.Version}`,"font-weight:bold;color:white;background:#0046FF","font-weight:bold;color:white;background:#9E00FF","font-weight:bold;color:white;background:#FF00F3","font-weight:bold;color:white;background:#FF0032","font-weight:bold;color:white;background:#FF8B00"),window.customCards=window.customCards||[],window.customCards.push({type:ze.CardElementName,name:ze.CardName,description:ze.CardDescription});let nr=class extends ce{constructor(){super(...arguments),this._switchColorDetected=!1}set hass(e){if(!e)return;const t=this._hass;this._hass=e,this.trySetHassWhereNeeded(),this.requestUpdate(Ge(this,"hass"),t)}get hass(){return this._hass}catchErrors(e){try{this._error=void 0,e()}catch(e){throw this._error=new rr(e),this.requestUpdate(),e}}setConfig(e){this.catchErrors((()=>{const t=this._config;this._config=new sr(e),this._ctrl=new tr(this._config.getEntities(),this._config.getDefaultColor()),this._clickHandler=new Us(this._config,this._ctrl,this);const i=this._config.getOffColor();i.isThemeColor()?this._offBackground=null:this._offBackground=new Fe([i.getBaseColor()]),this._error=void 0,this.trySetHassWhereNeeded(),this.requestUpdate("_config",t)}))}trySetHassWhereNeeded(){if(!this.hass)return;const e=this.hass;this.catchErrors((()=>{this._config&&!this._config.scenesLoaded&&this._config.tryLoadScenes(e),this._ctrl&&(this._ctrl.hass=e)}))}getCardSize(){return 3}cardClicked(){this._clickHandler&&this._clickHandler.handleClick(),this.updateStylesInner()}updated(e){if(super.updated(e),this.updateStylesInner(),!this._config||!this.hass)return;const t=e.get("hass"),i=e.get("_config");t&&i&&t.themes===this.hass.themes&&i.theme===this._config.theme||qe.applyTheme(this,this.hass.themes,this._config.theme)&&this.updateStylesInner(!0)}updateStylesInner(e=!1){var t,i,s,r;if(!this._config||!this._ctrl)return;this._switchColorDetected||(this._config.showSwitch&&qe.detectSwitchColors(this),this._switchColorDetected=!0);const n=this.renderRoot.querySelector("ha-card");if(!this._config.hueBorders&&(null==this._haShadow||e)){const e=document.createElement("ha-card");document.body.appendChild(e);const t=getComputedStyle(e);this._haShadow=t.boxShadow,e.remove(),"none"==this._haShadow&&(null==n?this._haShadow=null:n.classList.add("new-borders")),this.style.setProperty("--ha-default-shadow",this._haShadow)}this.style.setProperty("--hue-icon-size",this._config.iconSize.toString()),null==this._offBackground&&qe.detectThemeCardBackground(this,e);const o=ot.calculateBackAndForeground(this._ctrl,this._offBackground),a=ot.calculateDefaultShadow(n,this._ctrl,this._config.offShadow);this.style.setProperty("--hue-background",null!==(i=null===(t=o.background)||void 0===t?void 0:t.toString())&&void 0!==i?i:ze.ThemeCardBackgroundVar),this.style.setProperty("--hue-text-color",null!==(r=null===(s=o.foreground)||void 0===s?void 0:s.toString())&&void 0!==r?r:ze.ThemeSecondaryTextColorVar),this.style.setProperty("--ha-card-box-shadow",a),this.style.setProperty("--hue-box-shadow",a)}render(){if(this._error)return W`<ha-alert alert-type="error" .title=${this._error.message}>
                ${this._error.stack?W`<pre>${this._error.stack}</pre>`:q}
            </ha-alert>`;if(!this._config||!this._ctrl||!this._hass)return q;const e=this._config.getTitle(this._ctrl),t=this._ctrl.getDescription(this._config.description),i=e.resolveToString(this._hass),s=t.resolveToString(this._hass),r=this._config.showSwitch,n={"text-area":!0,"no-switch":!r},o={"state-on":this._ctrl.isOn(),"state-off":this._ctrl.isOff(),"state-unavailable":this._ctrl.isUnavailable(),"hue-borders":this._config.hueBorders},a=()=>{this.requestUpdate(),this.updateStylesInner()};return W`<ha-card class="${ge(o)}">
            <div class="tap-area" @click="${()=>this.cardClicked()}">
                <ha-icon icon="${this._config.icon||this._ctrl.getIcon()}"></ha-icon>
                <div class="${ge(n)}">
                    <h2>${i}</h2>
                    <div class="desc">${s}</div>
                </div>
            </div>
            ${r?ot.createSwitch(this._ctrl,a):q}

            ${ot.createSlider(this._ctrl,this._config,a)}
        </ha-card>`}connectedCallback(){super.connectedCallback(),this.updateStylesInner()}};nr.styles=a`
    ha-card
    {
        min-height:80px;
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
        border-radius:${ze.HueBorderRadius}px;
        box-shadow:var(--hue-box-shadow), ${o(ze.HueShadow)};
        border:none;
    }
    ha-card div.tap-area
    {
        height:46px; /* card(80) - slider(32) - border(2) */
        cursor: pointer;
    }
    ha-icon
    {
        position:absolute;
        left:22px;
        top:17px;
        transform:scale(var(--hue-icon-size, ${ze.IconSize[Qe.Original]}));
        color:var(--hue-text-color);
        transition:${o(ze.TransitionDefault)};
    }
    .text-area{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 50px;
        margin:0px 60px 0px 70px;
        line-height:normal;
        color:var(--hue-text-color);
        transition:${o(ze.TransitionDefault)};
    }
    .text-area.no-switch{
        margin-right:10px;
    }
    .text-area h2
    {
        font-size:18px;
        font-weight:500;
        text-overflow:ellipsis;
        overflow:hidden;
        white-space:nowrap;
        margin:4px 0 2px 0;
    }
    .text-area .desc
    {
        font-size:13px;
        margin-top:-2px;
    }
    ha-switch
    {
        position:absolute;
        right:14px;
        top:22px;
    }
    .brightness-slider
    {
        width:100%;
    }
    ha-alert{
        display:flex;
        overflow:auto;
    }
    `,nr=e([fe(ze.CardElementName)],nr);export{nr as HueLikeLightCard};
