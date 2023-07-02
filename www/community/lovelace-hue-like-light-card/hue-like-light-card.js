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
 */;var h;const c=window,u=c.trustedTypes,d=u?u.emptyScript:"",g=c.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:f},v="finalized";class _ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty(v))return!1;this[v]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{i?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),r=e.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=m){var s;const r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=s.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=r,this[r]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var y;_[v]=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==g||g({ReactiveElement:_}),(null!==(h=c.reactiveElementVersions)&&void 0!==h?h:c.reactiveElementVersions=[]).push("1.6.2");const w=window,b=w.trustedTypes,C=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,E="?"+S,x=`<${E}>`,A=document,T=()=>A.createComment(""),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,P=t=>D(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),M="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,L=/>/g,H=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,B=/"/g,R=/^(?:script|style|textarea|title)$/i,N=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),z=new WeakMap,W=A.createTreeWalker(A,129,null,!1),q=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":"",n=O;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(n.lastIndex=c,l=n.exec(i),null!==l);)c=n.lastIndex,n===O?"!--"===l[1]?n=I:void 0!==l[1]?n=L:void 0!==l[2]?(R.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=H):void 0!==l[3]&&(n=H):n===H?">"===l[0]?(n=null!=r?r:O,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?H:'"'===l[3]?B:V):n===B||n===V?n=H:n===I||n===L?n=O:(n=H,r=void 0);const u=n===H&&t[e+1].startsWith("/>")?" ":"";o+=n===O?i+x:h>=0?(s.push(a),i.slice(0,h)+k+i.slice(h)+S+u):i+S+(-2===h?(s.push(void 0),e):u)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==C?C.createHTML(a):a,s]};class Y{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[l,h]=q(t,e);if(this.el=Y.createElement(l,i),W.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=W.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(k)||e.startsWith(S)){const i=h[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+k).split(S),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?Z:"@"===e[1]?tt:X})}else a.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(R.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],T()),W.nextNode(),a.push({type:2,index:++r});s.append(t[e],T())}}}else if(8===s.nodeType)if(s.data===E)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)a.push({type:7,index:r}),t+=S.length-1}r++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function j(t,e,i=t,s){var r,o,n,a;if(e===F)return e;let l=void 0!==s?null===(r=i._$Co)||void 0===r?void 0:r[s]:i._$Cl;const h=$(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(n=(a=i)._$Co)&&void 0!==n?n:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=j(t,l._$AS(t,e.values),l,s)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);W.currentNode=r;let o=W.nextNode(),n=0,a=0,l=s[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new Q(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new et(o,this,t)),this._$AV.push(e),l=s[++a]}n!==(null==l?void 0:l.index)&&(o=W.nextNode(),n++)}return W.currentNode=A,r}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{constructor(t,e,i,s){var r;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=j(this,t,e),$(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):P(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==U&&$(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Y.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(i);else{const t=new G(r,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new Y(t)),e}T(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new Q(this.k(T()),this.k(T()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class X{constructor(t,e,i,s,r){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=j(this,t,e,0),o=!$(t)||t!==this._$AH&&t!==F,o&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=j(this,s[i+n],e,n),a===F&&(a=this._$AH[n]),o||(o=!$(a)||a!==this._$AH[n]),a===U?t=U:t!==U&&(t+=(null!=a?a:"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}}const J=b?b.emptyScript:"";class Z extends X{constructor(){super(...arguments),this.type=4}j(t){t&&t!==U?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class tt extends X{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=j(this,t,e,0))&&void 0!==i?i:U)===F)return;const s=this._$AH,r=t===U&&s!==U||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==U&&(s===U||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class et{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}const it={O:k,P:S,A:E,C:1,M:q,L:G,D:P,R:j,I:Q,V:X,H:Z,N:tt,U:K,F:et},st=w.litHtmlPolyfillSupport;null==st||st(Y,Q),(null!==(y=w.litHtmlVersions)&&void 0!==y?y:w.litHtmlVersions=[]).push("2.7.4");const rt=(t,e,i)=>{var s,r;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=o._$litPart$;if(void 0===n){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=n=new Q(e.insertBefore(T(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */};var ot,nt;class at extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=rt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return F}}at.finalized=!0,at._$litElement$=!0,null===(ot=globalThis.litElementHydrateSupport)||void 0===ot||ot.call(globalThis,{LitElement:at});const lt=globalThis.litElementPolyfillSupport;null==lt||lt({LitElement:at}),(null!==(nt=globalThis.litElementVersions)&&void 0!==nt?nt:globalThis.litElementVersions=[]).push("3.3.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht=1,ct=t=>(...e)=>({_$litDirective$:t,values:e});class ut{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=ct(class extends ut{constructor(t){var e;if(super(t),t.type!==ht||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,s;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.nt)||void 0===i?void 0:i.has(t))&&this.it.add(t);return this.render(e)}const r=t.element.classList;this.it.forEach((t=>{t in e||(r.remove(t),this.it.delete(t))}));for(const t in e){const i=!!e[t];i===this.it.has(t)||(null===(s=this.nt)||void 0===s?void 0:s.has(t))||(i?(r.add(t),this.it.add(t)):(r.remove(t),this.it.delete(t)))}return F}}),gt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,pt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},ft=(t,e,i)=>{e.constructor.createProperty(i,t)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function mt(t){return(e,i)=>void 0!==i?ft(t,e,i):pt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function vt(t){return mt({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _t;null===(_t=window.HTMLSlotElement)||void 0===_t||_t.prototype.assignedElements;var yt,wt,bt=function(t,e){return Ct(e).format(t)},Ct=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric"})};!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(yt||(yt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(wt||(wt={}));var kt=function(t){if(t.time_format===wt.language||t.time_format===wt.system){var e=t.time_format===wt.language?t.language:void 0,i=(new Date).toLocaleString(e);return i.includes("AM")||i.includes("PM")}return t.time_format===wt.am_pm},St=function(t,e){return Et(e).format(t)},Et=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",hour:kt(t)?"numeric":"2-digit",minute:"2-digit",hour12:kt(t)})},xt=function(t,e){return At(e).format(t)},At=function(t){return new Intl.DateTimeFormat(t.language,{hour:"numeric",minute:"2-digit",hour12:kt(t)})};function Tt(){return(Tt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t}).apply(this,arguments)}var $t=function(t,e,i){var s=e?function(t){switch(t.number_format){case yt.comma_decimal:return["en-US","en"];case yt.decimal_comma:return["de","es","it"];case yt.space_comma:return["fr","sv","cs"];case yt.system:return;default:return t.language}}(e):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==e?void 0:e.number_format)!==yt.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(s,Dt(t,i)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,Dt(t,i)).format(Number(t))}return"string"==typeof t?t:function(t,e){return void 0===e&&(e=2),Math.round(t*Math.pow(10,e))/Math.pow(10,e)}(t,null==i?void 0:i.maximumFractionDigits).toString()+("currency"===(null==i?void 0:i.style)?" "+i.currency:"")},Dt=function(t,e){var i=Tt({maximumFractionDigits:2},e);if("string"!=typeof t)return i;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){var s=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=s,i.maximumFractionDigits=s}return i},Pt=function(t,e,i,s){s=s||{},i=null==i?{}:i;var r=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return r.detail=i,t.dispatchEvent(r),r};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Mt=Symbol.for(""),Ot=t=>{if((null==t?void 0:t.r)===Mt)return null==t?void 0:t._$litStatic$},It=t=>({_$litStatic$:t,r:Mt}),Lt=new Map,Ht=(t=>(e,...i)=>{const s=i.length;let r,o;const n=[],a=[];let l,h=0,c=!1;for(;h<s;){for(l=e[h];h<s&&void 0!==(o=i[h],r=Ot(o));)l+=r+e[++h],c=!0;h!==s&&a.push(o),n.push(l),h++}if(h===s&&n.push(e[s]),c){const t=n.join("$$lit$$");void 0===(e=Lt.get(t))&&(n.raw=n,Lt.set(t,e=n)),i=a}return t(e,...i)})(N);class Vt{constructor(t,e,i,s=1,r="rgb"){this._opacity=1,"string"==typeof t?(this.parse(t),this.setOpacity(null!=e?e:this._opacity)):"rgb"==r?(this.setRgb(t,null!=e?e:0,null!=i?i:0),this.setOpacity(s)):"hsv"==r&&this.setHsv(t,null!=e?e:0,null!=i?i:0),this._originalMode=r}setRgb(t,e,i){if(t<0||t>255)throw new Error("Red value must be in range [0, 255].");if(e<0||e>255)throw new Error("Green value must be in range [0, 255].");if(i<0||i>255)throw new Error("Blue value must be in range [0, 255].");this._red=t,this._green=e,this._blue=i}setHsv(t,e,i){if(t<0||t>360)throw new Error("Hue value must be in range [0, 360].");if(e<0||e>1)throw new Error("Saturation value must be in range [0, 1].");if(i<0||i>1)throw new Error("HSV Value must be in range [0, 1].");this._hsv=[t,e,i];const[s,r,o]=Vt.hsv2rgb(t,e,i);this.setRgb(s,r,o)}setOpacity(t){if(t<0)throw new Error("Minimal value for opacity is 0.");if(t>1)throw new Error("Maximal value for opacity is 1.");this._opacity=Math.round(100*t)/100}getOriginalMode(){return this._originalMode}getRed(){return this._red}getGreen(){return this._green}getBlue(){return this._blue}ensureHSV(){return this._hsv||(this._hsv=Vt.rgb2hsv(this.getRed(),this.getGreen(),this.getBlue())),this._hsv}getHue(){return this.ensureHSV()[0]}getSaturation(){return this.ensureHSV()[1]}getValue(){return this.ensureHSV()[2]}getOpacity(){return this._opacity}getLuminance(){return.299*this._red+.587*this._green+.114*this._blue}getForeground(t,e,i){return this.getLuminance()+i<Vt.LuminanceBreakingPoint?t:e}parse(t,e=!0){var i;if(t.startsWith("#")){const e=3==(t=t.substring(1)).length,i=4==t.length,s=6==t.length,r=8==t.length;if(!(e||s||i||r))throw new Error("Hex color format should have 3/6 letters or 4/8 letters for transparency.");const o=[];for(let e=0;e<t.length;e++){const i=parseInt(t[e],16);if(isNaN(i))throw new Error(`Hex color format contains non hex characters - '${t[e]}'.`);o.push(i)}e||i?(this.setRgb(16*o[0]+o[0],16*o[1]+o[1],16*o[2]+o[2]),i&&this.setOpacity((16*o[3]+o[3])/255)):(s||r)&&(this.setRgb(16*o[0]+o[1],16*o[2]+o[3],16*o[4]+o[5]),r&&this.setOpacity((16*o[6]+o[7])/255))}else{if(!t.startsWith("rgb")){if(e){const e=document.createElement("canvas").getContext("2d");if(null!=e)return e.fillStyle=t,void this.parse(e.fillStyle,!1)}throw new Error("Unrecognized color format: "+t)}{const e=t.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,?\s*(\d*(?:\.\d+\s*)?)\)$/);if(!e)throw new Error("Unrecognized color format rgb[a](...): "+t);this.setRgb(parseInt(e[1]),parseInt(e[2]),parseInt(e[3])),(null===(i=e[4])||void 0===i?void 0:i.length)>0&&this.setOpacity(parseFloat(e[4]))}}}toString(){return this._opacity<1?`rgba(${this._red},${this._green},${this._blue},${this._opacity})`:`rgb(${this._red},${this._green},${this._blue})`}static hsv2rgb(t,e,i){const s=i*e,r=t/60,o=s*(1-Math.abs(r%2-1));let n=0,a=0,l=0;r>=0&&r<=1?[n,a,l]=[s,o,0]:r>=1&&r<=2?[n,a,l]=[o,s,0]:r>=2&&r<=3?[n,a,l]=[0,s,o]:r>=3&&r<=4?[n,a,l]=[0,o,s]:r>=4&&r<=5?[n,a,l]=[o,0,s]:r>=5&&r<=6&&([n,a,l]=[s,0,o]);const h=i-s,[c,u,d]=[n+h,a+h,l+h];return[Math.round(255*c),Math.round(255*u),Math.round(255*d)]}static rgb2hsv(t,e,i){const s=t/255,r=e/255,o=i/255,n=Math.max(s,r,o),a=n-Math.min(s,r,o),l=t=>(n-t)/6/a+.5,h=t=>Math.round(100*t)/100;let c,u=0;if(0==a)u=c=0;else{c=a/n;const t=l(s),e=l(r),i=l(o);s===n?u=i-e:r===n?u=1/3+t-i:o===n&&(u=2/3+e-t),u<0?u+=1:u>1&&(u-=1)}return[Math.round(360*u),h(c),h(n)]}static hueTempToRgb(t){const e=2e3,i=5300,s=6500,r=[255,180,55],o=[255,255,255],n=[190,228,243],a=function(t,e,i){return(i-e)*t+e};if(t<e&&(t=e),t>s&&(t=s),t<i){const i=(t-e)/3300,s=a(i,r[0],o[0]),n=a(i,r[1],o[1]),l=a(i,r[2],o[2]);return[Math.round(s),Math.round(n),Math.round(l)]}{const e=(t-i)/1200,s=a(e,o[0],n[0]),r=a(e,o[1],n[1]),l=a(e,o[2],n[2]);return[Math.round(s),Math.round(r),Math.round(l)]}}}Vt.LuminanceBreakingPoint=192;class Bt{}Bt.Version="v1.4.1",Bt.Dev=!1,Bt.CardElementName=Bt.Dev?"hue-like-light-card-test":"hue-like-light-card",Bt.ElementPostfix=Bt.Dev?"-test":"",Bt.CardName="Hue-Like Light Card",Bt.CardDescription="Hue-like way to control your lights",Bt.HueBorderRadius=10,Bt.HueShadow="0px 2px 3px rgba(0,0,0,0.4)",Bt.LightColor=new Vt("#fff"),Bt.LightOffColor=new Vt("#fff",.85),Bt.DarkColor=new Vt(0,0,0,.7),Bt.DarkOffColor=new Vt(0,0,0,.5),Bt.WarmColor="#ffda95",Bt.ColdColor="#f5f5ff",Bt.DefaultColor="warm",Bt.OffColor="#666",Bt.TileOffColor="rgba(102, 102, 102, 0.6)",Bt.DialogBgColor="#171717",Bt.DialogFgLightColor=new Vt("#aaa"),Bt.DialogOffColor="#363636",Bt.GradientOffset=10,Bt.TransitionDefault="all 0.3s ease-out 0s",Bt.TimeCacheInterval=1500,Bt.ThemeDefault="default",Bt.ThemeCardBackground="--hue-detected-card-bg",Bt.ThemeCardBackgroundVar=`var(${Bt.ThemeCardBackground})`,Bt.ThemeCardPossibleBackgrounds=["--ha-card-background","--card-background-color","--paper-card-background-color","--primary-background-color"],Bt.ThemeDialogHeadingColorVar="var(--mdc-dialog-heading-ink-color)",Bt.ThemeSecondaryTextColorVar="var(--secondary-text-color)";class Rt extends Vt{constructor(t){t==Rt.themeColor?(super(0,0,0),this._isThemeColor=!0):(super(t),this._isThemeColor=!1)}getBaseColor(){if(this._isThemeColor)throw new Error("Cannot getBaseColor on "+Rt.themeColor);return new Vt(this.getRed(),this.getGreen(),this.getBlue(),this.getOpacity())}isThemeColor(){return this._isThemeColor}getLuminance(){if(this._isThemeColor)throw new Error("Cannot getLuminance on "+Rt.themeColor);return super.getLuminance()}getForeground(t,e,i){if(this._isThemeColor)throw new Error("Cannot getForeground on "+Rt.themeColor);return super.getForeground(t,e,i)}toString(){return this._isThemeColor?"var(--"+Rt.themeColor+")":super.toString()}}Rt.themeColor="theme-color";class Nt{constructor(t){if(!((null==t?void 0:t.length)>0))throw new Error("At least one background or color is needed for new Background(...).");this._colors=t.flatMap((t=>{if(t instanceof Rt)throw new Error("ColorExtended cannot be used in Background. Resolve it first.");if(t instanceof Vt)return[t];if(t instanceof Nt)return t._colors;throw new Error("Only array of Colors or Backgrounds is supported for new Background(...).")})),this._colors.sort(((t,e)=>t.getLuminance()-e.getLuminance()))}getForeground(t,e,i){if(this._colors.length<3)return this._colors[0].getForeground(t,e,i);let s=0;for(let t=0;t<this._colors.length/2;t++)this._colors[t].getForeground(!0,!1,i)&&s++;return s>this._colors.length/4?t:e}toString(){if(1==this._colors.length)return this._colors[0].toString();const t=100/(this._colors.length-1),e=Bt.GradientOffset;let i=`${this._colors[0]} 0%, ${this._colors[0]} ${e}%`,s=0;for(let r=1;r<this._colors.length;r++)s+=t,r+1==this._colors.length&&(i+=`, ${this._colors[r]} ${100-e}%`),i+=`, ${this._colors[r]} ${Math.round(s)}%`;return`linear-gradient(90deg, ${i})`}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft="important",Ut=" !"+Ft,zt=ct(class extends ut{constructor(t){var e;if(super(t),t.type!==ht||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ut){this.ut=new Set;for(const t in e)this.ut.add(t);return this.render(e)}this.ut.forEach((t=>{null==e[t]&&(this.ut.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const s=e[t];if(null!=s){this.ut.add(t);const e="string"==typeof s&&s.endsWith(Ut);t.includes("-")||e?i.setProperty(t,e?s.slice(0,-11):s,e?Ft:""):i[t]=s}}return F}});class Wt{static getSwitchThemeStyle(){return{"--switch-checked-button-color":`var(${Wt.switchCheckedButtonColorVar})`,"--switch-checked-track-color":`var(${Wt.switchCheckedTrackColorVar})`}}static detectSwitchColors(t,e=!1){Wt.detectThemeVariable(t,Wt.switchCheckedButtonColorVar,Wt.possibleSwitchCheckedButtonColors,"switchBtnDetected",e),Wt.detectThemeVariable(t,Wt.switchCheckedTrackColorVar,Wt.possibleSwitchCheckedTrackColors,"switchTrckDetected",e)}static setDialogThemeStyles(t,e,i){i&&Wt.detectThemeCardBackground(t,!0,1),t.style.setProperty("--mdc-theme-surface",`var(${e}, ${Bt.ThemeCardBackgroundVar})`)}static applyTheme(t,e,i){return t.dataset.themeLocal!=i&&(function(t,e,i,s){void 0===s&&(s=!1),t._themes||(t._themes={});var r=e.default_theme;("default"===i||i&&e.themes[i])&&(r=i);var o=Tt({},t._themes);if("default"!==r){var n=e.themes[r];Object.keys(n).forEach((function(e){var i="--"+e;t._themes[i]="",o[i]=n[e]}))}if(t.updateStyles?t.updateStyles(o):window.ShadyCSS&&window.ShadyCSS.styleSubtree(t,o),s){var a=document.querySelector("meta[name=theme-color]");if(a){a.hasAttribute("default-content")||a.setAttribute("default-content",a.getAttribute("content"));var l=o["--primary-color"]||a.getAttribute("default-content");a.setAttribute("content",l)}}}(t,e,i),i!=Bt.ThemeDefault?t.dataset.themeLocal=i:delete t.dataset.themeLocal,Wt.detectSwitchColors(t,!0),!0)}static detectThemeCardBackground(t,e=!1,i=0){Wt.detectThemeVariable(t,Bt.ThemeCardBackground,Bt.ThemeCardPossibleBackgrounds,"hueBgDetected",e,i)}static detectThemeVariable(t,e,i,s,r=!1,o=0){if(t.dataset[s]&&!r)return;const n=!!t.dataset.themeLocal;let a;for(a of i)if(o>0)o--;else if(n){let i=!1,s=0;for(;t.style[s];){if(t.style[s]==a){i=!0;break}s++}if(i){t.style.setProperty(e,`var(${a})`);break}}else{t.style.setProperty(e,`var(${a})`);if(getComputedStyle(t).getPropertyValue(e))break}let l=a||"none";n&&(l+=";local"),t.dataset[s]=l}}Wt.switchCheckedButtonColorVar="--detected-switch-checked-button-color",Wt.switchCheckedTrackColorVar="--detected-switch-checked-track-color",Wt.possibleSwitchCheckedButtonColors=["--switch-checked-button-color","--primary-color"],Wt.possibleSwitchCheckedTrackColors=["--switch-checked-track-color","--switch-checked-color","--dark-primary-color"];class qt{static createSwitch(t,e){const i=Wt.getSwitchThemeStyle();return N`<ha-switch
        .checked=${t.isOn()}
        .disabled=${t.isUnavailable()}
        .haptic=true
        style=${zt(i)}
        @change=${i=>this.changed(t,e,!1,i)}
        ></ha-switch>`}static createSlider(t,e,i){if(!t.features.brightness)return U;const s=e.allowZero?0:1;return N`<ha-slider .min=${s} .max=${100} .step=${1} .disabled=${e.allowZero?t.isUnavailable():t.isOff()} .value=${t.brightnessValue}
        pin @change=${e=>this.changed(t,i,!0,e)}
        ignore-bar-touch
        ></ha-slider>`}static changed(t,e,i,s){const r=s.target;if(r){if(i){const e=r.value;null!=e&&(t.brightnessValue=parseInt(e))}else{r.checked?t.turnOn():t.turnOff()}e()}}static calculateBackAndForeground(t,e,i=!0,s=e){const r=t.isOff()?e:t.getBackground()||s||e;let o;if(null==r)o=null;else{o=this.calculateForeground(t,r,i).foreground}return{background:r,foreground:o}}static calculateForeground(t,e,i=!0){let s=t.brightnessValue;i||(s=100);const r=t.isOn()&&s>50?-(10-(s-50)/5):0;let o=t.isOn()&&s<=50?Bt.LightColor:e.getForeground(Bt.LightColor,Bt.DarkColor,r);return t.isOff()&&(o=o==Bt.DarkColor?Bt.DarkOffColor:Bt.LightOffColor),{foreground:o,opacity:1}}static calculateDefaultShadow(t,e,i){if(e.isOff())return i?"inset 0px 0px 10px rgba(0,0,0,0.2)":"0px 0px 0px white";const s=t;if(!s||!s.clientHeight)return"";const r=100-e.brightnessValue,o=20+.95*r*(s.clientHeight/100);let n=s.clientHeight/2;r>70&&(n-=(n-20)*(r-70)/30);let a=.65;return r>60&&(a-=(a-.5)*(r-60)/40),`inset 0px -${o}px ${n}px -20px rgba(0,0,0,${a})`}static hasHueIcons(){const t=window;return!!t.customIcons&&"object"==typeof t.customIcons.hue}static setIconSize(t,e){e=Math.round(e),t&&t.updateComplete.then((()=>{t.renderRoot.children[0].style.setProperty("--mdc-icon-size",e+"px")}))}}class Yt{constructor(t,e){this._waitAfter=e,this._action=t}get action(){return this._action}get waitAfter(){return this._waitAfter}}class jt{constructor(){this._queue=new Array,this._currentEffectId=null}get currentEffectId(){return this._currentEffectId}addEffect(t,e){const i=new Yt(e,t);this._queue.push(i)}start(){let t=0;const e=()=>{this.planEffect(++t,e)};this.planEffect(t,e)}stop(){this._currentEffectId&&(clearTimeout(this._currentEffectId),this._currentEffectId=null)}stopAndClear(){this.stop(),this._queue.length=0}planEffect(t,e=null){if(t>=this._queue.length)return void(this._currentEffectId=null);const i=this._queue[t];this._currentEffectId=setTimeout((()=>{i.action(),e&&e()}),i.waitAfter)}}function Gt(t,e){return null!=e?e:t}function Qt(t,e,...i){i.unshift(e);const s=t.split(".")[0];if(i.indexOf(s)<0)throw new Error(`Unsupported entity type: ${s} (in '${t}'). Supported type(s): '${i.join("', '")}'.`)}function Xt(t){return t.filter((function(t,e,i){return e===i.indexOf(t)}))}class Kt{static getColor(t){switch(t){case"warm":return new Vt(Bt.WarmColor);case"cold":return new Vt(Bt.ColdColor);default:return new Vt(t)}}}var Jt,Zt;!function(t){t.Default="default",t.NoAction="none",t.TurnOn="turn-on",t.TurnOff="turn-off",t.MoreInfo="more-info",t.Scene="scene",t.HueScreen="hue-screen"}(Jt||(Jt={}));class te{constructor(t){"string"==typeof t?this._onlyValue=t:t instanceof te?(this._onlyValue=t._onlyValue,this._valueStore=t._valueStore):this._valueStore=t||{}}getData(t){return this._onlyValue?this._onlyValue:this._valueStore[t]}}class ee{constructor(t){Qt(t,"scene"),this.entity=t}getActivationService(){const t="scene.turn_on",e=this.activation||t,i=e.split(".");if(2!=i.length)throw new Error(`Unrecognized service '${e}'. The service should have 2 parts separated by '.' (dot). E.g.: '${t}'`);return i}getActivationData(){const t={entity_id:this.entity};if(this.activationData)for(const e in this.activationData)Object.prototype.hasOwnProperty.call(this.activationData,e)&&(t[e]=this.activationData[e]);return t}}class ie{constructor(t){this._config="string"==typeof t?new ee(t):t}set hass(t){this._hass=t,this._entity=this._hass.states[this._config.entity]}activate(){this.ensureHass();const t=this._config.getActivationService(),e=this._config.getActivationData();this._hass.callService(t[0],t[1],e)}getTitle(t){if(this.ensureHass(),this._config.title)return this._config.title;let e=this._entity.attributes.friendly_name;return t&&0==(null==e?void 0:e.toLowerCase().indexOf(t.toLowerCase()))&&(e=e.substring(t.length).trimStart()),e}getIcon(t=null){return this.ensureHass(),null!=this._config.icon?this._config.icon:this._entity.attributes.icon||t}getColor(){return this._config.color?Kt.getColor(this._config.color):null}ensureHass(){if(!this._hass)throw new Error("Scene data not initialized - call setHass first!")}}class se extends at{constructor(t){super(),this._id=t+"_"+se.maxId++}}se.maxId=1;class re extends se{set hass(t){const e=this._hass;this._hass=t,this.updateHassDependentProps(),this.requestUpdate(Gt(this,"hass"),e)}constructor(){super("HueDialogTile")}updateHassDependentProps(){}disableClickEffect(){this.renderRoot.querySelector(".hue-tile").classList.add("no-click")}enableClickEffect(){this.renderRoot.querySelector(".hue-tile").classList.remove("no-click")}}re.ElementName="hue-dialog-tile"+Bt.ElementPostfix,re.padding=5,re.height=90,re.width=85,re.titleHeight=35,re.clickTransition="transform .15s",re.hueDialogStyle=a`
    :host{
        -webkit-tap-highlight-color: transparent;
    }
    .hue-tile{
        background: ${n(Bt.TileOffColor)};
        width: ${re.width}px;
        height: ${re.height}px;
        padding: ${re.padding}px;
        border-radius: ${Bt.HueBorderRadius}px;
        box-shadow: ${n(Bt.HueShadow)};
        overflow:hidden;
        user-select: none;
        transition: ${n(re.clickTransition)};
    }
    .hue-tile:not(.no-click):active:hover{
        transform: scale(0.95);
    }
    .title {
        color:${n(Bt.LightColor)};
        font-size: 12px;
        line-height: 15px;
        font-weight:400;
        height:${re.titleHeight}px;
        text-align: center;
        display: flex;
        flex-flow: column;
        justify-content: center;
        transition: ${n(Bt.TransitionDefault)};
    }
    .title span {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    `,t([mt()],re.prototype,"cardTitle",void 0);let oe=Zt=class extends re{constructor(){super(...arguments),this._effectQueue=new jt,this._sceneConfig=null,this._scene=null}set sceneConfig(t){const e=this._sceneConfig;this._sceneConfig=t,this._scene=new ie(t),this.updateHassDependentProps(),this.requestUpdate(Gt(this,"sceneConfig"),e)}updateHassDependentProps(){this._hass&&this._scene&&(this._scene.hass=this._hass)}sceneClicked(){if(!this._scene)return;!function(t){Pt(window,"haptic",t)}("light"),this._scene.activate(),this._effectQueue.stopAndClear();const t=this.renderRoot.querySelector(".scene");if(t){t.classList.remove("clicked","unclicked");const e=1e3*Zt.animationSeconds;this._effectQueue.addEffect(0,(()=>t.classList.add("clicked"))),this._effectQueue.addEffect(3e3,(()=>t.classList.add("unclicked"))),this._effectQueue.addEffect(e,(()=>{t.classList.add("stop-color-animate"),t.classList.remove("clicked")})),this._effectQueue.addEffect(50,(()=>{t.classList.remove("stop-color-animate","unclicked")})),this._effectQueue.start()}this.dispatchEvent(new CustomEvent("activated",{detail:{tileElement:this}}))}static get styles(){return[re.hueDialogStyle,a`
    .scene {
        cursor: pointer;
    }
    .scene .icon-background {
        height: calc(100% - ${re.titleHeight}px);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .scene .icon-background .color {
        background: var(--hue-tile-accent-color, darkgoldenrod);
        height: ${Zt.colorDimensions}px;
        width: ${Zt.colorDimensions}px;
        border-radius: ${Zt.colorDimensions/2}px;
        box-shadow: ${n(Bt.HueShadow)}, inset rgba(0,0,0,0.1) -8px -8px 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all ${Zt.animationSeconds}s linear;
    }
    .scene .icon-background .color ha-icon {
        color: var(--hue-tile-fg-color, ${n(Bt.LightColor)});
        transform: scale(${Zt.iconScale});
    }
    .scene.clicked .icon-background .color {
        height: ${2*re.height}px;
        width: ${2*re.width}px;
        border-radius: ${re.height}px;
        margin-left: -${2*re.padding}px;
        margin-right: -${2*re.padding}px;
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
        transition: all ${Zt.animationSeconds/2}s linear;
    }
    .scene.clicked .title {
        color:var(--hue-tile-fg-text-color, ${n(Bt.LightColor)});
    }

    @keyframes pop-icon{
        50% { transform: scale(${2*Zt.iconScale}); }
    }
    `]}updated(t){if(this._scene&&t.has("sceneConfig")){const t=this._scene.getColor();if(t){const e=t.getForeground(Bt.LightColor,Bt.DarkColor,20),i=t.getForeground(Bt.LightColor,new Vt("black"),20);this.style.setProperty("--hue-tile-accent-color",t.toString()),this.style.setProperty("--hue-tile-fg-color",e.toString()),this.style.setProperty("--hue-tile-fg-text-color",i.toString())}}}render(){if(!this._scene)return U;const t=this._scene.getTitle(this.cardTitle);return N`
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
        `}};function ne(...t){}oe.ElementName=re.ElementName+"-scene",oe.colorDimensions=re.height/2,oe.iconScale=.75*Zt.colorDimensions/24,oe.animationSeconds=1,t([vt()],oe.prototype,"_scene",void 0),oe=Zt=t([gt(Zt.ElementName)],oe);class ae{static getIcon(t){const e=qt.hasHueIcons();let i;return i=t<=1?e?this.HueOneIcon:this.DefaultOneIcon:t<=2?e?this.HueTwoIcon:this.DefaultTwoIcon:t<=3?e?this.HueThreeIcon:this.DefaultMoreIcon:e?this.HueMoreIcon:this.DefaultMoreIcon,i}}var le;ae.DefaultOneIcon="mdi:lightbulb",ae.DefaultTwoIcon="mdi:lightbulb-multiple",ae.DefaultMoreIcon="mdi:lightbulb-group",ae.HueOneIcon="hue:bulb-classic",ae.HueTwoIcon="hue:bulb-group-classic",ae.HueThreeIcon="hue:bulb-group-classic-3",ae.HueMoreIcon="hue:bulb-group-classic-4";let he=le=class extends re{constructor(){super(...arguments),this.lightContainer=null,this.defaultColor=null,this.isSelected=!1,this.isUnselected=!1}static get styles(){return[re.hueDialogStyle,a`
    .hue-tile.light{
        height: ${re.height+le.switchHeight}px;
        background:var(--hue-light-background, ${n(Bt.TileOffColor)});
        box-shadow:var(--hue-light-box-shadow), ${n(Bt.HueShadow)};
        transition: ${n(Bt.TransitionDefault)}, ${n(re.clickTransition)};
    }

    .hue-tile.light.unselected{
        opacity: 0.7;
    }

    .selector.active{
        border: ${le.selectorWidth}px solid var(--hue-light-background, ${n(Bt.WarmColor)});
        padding: ${le.selectorSpacing}px;
        border-radius: ${Bt.HueBorderRadius+le.selectorWidth+le.selectorSpacing}px;
        margin: -${le.selectorWidth+le.selectorSpacing}px
    }

    .hue-tile.light .tap-area{
        display: flex;
        flex-flow: column;
        height: ${re.height}px;

        cursor: pointer;
    }

    .title{
        color: var(--hue-light-text-color, ${n(Bt.LightColor)});
        padding-bottom: ${le.titlePadding}px;
    }

    .icon-slot{
        display: flex;
        flex-flow: column;
        text-align: center;
        height: ${re.height-le.titleHeight-le.titlePadding}px;
        /*height: calc(100% - ${le.titleHeight}px - ${le.titlePadding}px - ${le.switchHeight}px);*/
        justify-content: center;
    }
    .icon-slot ha-icon {
        color: var(--hue-light-text-color, ${n(Bt.LightColor)});
        transform: scale(${oe.iconScale});
    }

    .switch{
        display:flex;
        flex-flow:column;

        height: ${le.switchHeight+re.padding}px;
        justify-content: center;
        background: linear-gradient(rgba(255, 255, 255, 0.1), transparent);
        border-top: 1px solid rgba(80, 80, 80, 0.1);
        box-sizing: content-box;
        margin: 0 -${re.padding}px;
    }
    .switch ha-switch{
        justify-content:center;
    }

    `]}updated(t){if(t.has("lightContainer")){const e=t.get("lightContainer");e&&e.unregisterOnPropertyChanged(this._id),this.lightContainer&&this.lightContainer.registerOnPropertyChanged(this._id,(()=>this.lightUpdated()))}if(this.lightContainer){if(this.lightContainer.isOn()){const t=this.defaultColor?new Nt([this.defaultColor]):null,e=qt.calculateBackAndForeground(this.lightContainer,null,!0,t);e.background&&this.style.setProperty("--hue-light-background",e.background.toString()),e.foreground&&this.style.setProperty("--hue-light-text-color",e.foreground.toString())}else this.style.removeProperty("--hue-light-background"),this.style.removeProperty("--hue-light-text-color");const t=qt.calculateDefaultShadow(this,this.lightContainer,!1);this.style.setProperty("--hue-light-box-shadow",t)}if(t.has("isSelected")){this.renderRoot.querySelector(".selector").classList.toggle("active",!!this.isSelected),this.dispatchEvent(new CustomEvent("selected-change",{detail:{isSelected:this.isSelected,lightContainer:this.lightContainer,tileElement:this}}))}if(t.has("isUnselected")){this.renderRoot.querySelector(".hue-tile").classList.toggle("unselected",!!this.isUnselected)}}lightUpdated(){this.requestUpdate()}lightClicked(){this.isSelected=!this.isSelected}render(){var t;if(!this.lightContainer)return U;const e=this.lightContainer.getTitle().resolveToString(null),i=null!==(t=this.lightContainer.getIcon())&&void 0!==t?t:ae.getIcon(1);return N`
        <div class='selector'>
            <div class='hue-tile light' title='${e}'>
                <div class="tap-area" @click="${()=>this.lightClicked()}">
                    <div class='icon-slot'>
                        <ha-icon icon="${i}"></ha-icon>
                    </div>
                    <div class='title'>
                        <span>${e}</span>
                    </div>
                </div>
                <div class='switch' @mouseenter=${()=>this.disableClickEffect()} @mouseleave=${()=>this.enableClickEffect()}>
                    ${qt.createSwitch(this.lightContainer,ne)}
                </div>
            </div>
        </div>
        `}};he.ElementName=re.ElementName+"-light",he.titlePadding=10,he.switchHeight=45,he.selectorWidth=2,he.selectorSpacing=2,t([mt()],he.prototype,"lightContainer",void 0),t([mt()],he.prototype,"defaultColor",void 0),t([mt()],he.prototype,"isSelected",void 0),t([mt()],he.prototype,"isUnselected",void 0),he=le=t([gt(le.ElementName)],he);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{I:ce}=it,ue=(t,e)=>void 0===e?void 0!==(null==t?void 0:t._$litType$):(null==t?void 0:t._$litType$)===e,de=()=>document.createComment(""),ge=(t,e,i)=>{var s;const r=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=r.insertBefore(de(),o),s=r.insertBefore(de(),o);i=new ce(e,s,t,t.options)}else{const e=i._$AB.nextSibling,n=i._$AM,a=n!==t;if(a){let e;null===(s=i._$AQ)||void 0===s||s.call(i,t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==n._$AU&&i._$AP(e)}if(e!==o||a){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;r.insertBefore(t,o),t=e}}}return i},pe={},fe=(t,e=pe)=>t._$AH=e,me=t=>t._$AH,ve=ct(class extends ut{constructor(t){super(t),this.tt=new WeakMap}render(t){return[t]}update(t,[e]){if(ue(this.et)&&(!ue(e)||this.et.strings!==e.strings)){const e=me(t).pop();let i=this.tt.get(this.et.strings);if(void 0===i){const t=document.createDocumentFragment();i=rt(U,t),i.setConnected(!1),this.tt.set(this.et.strings,i)}fe(i,[e]),ge(i,void 0,e)}if(ue(e)){if(!ue(this.et)||this.et.strings!==e.strings){const i=this.tt.get(e.strings);if(void 0!==i){const e=me(i).pop();(t=>{t._$AR()})(t),ge(t,void 0,e),fe(t,[e])}}this.et=e}else this.et=void 0;return this.render(e)}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _e{constructor(t,e){isNaN(t)&&(t=0),isNaN(e)&&(e=0),this.X=t,this.Y=e}getYDiff(t){return this.Y-t.Y}getXDiff(t){return this.X-t.X}getDiff(t){return new _e(this.getXDiff(t),this.getYDiff(t))}toString(){return`[${this.X},${this.Y}]`}}class ye extends _e{constructor(t){super(t.clientX,t.clientY)}}class we extends _e{constructor(t){super(t.clientX,t.clientY)}}class be{constructor(t,e,i,s){this._currentMode=null,this._isMoving=!1,this._isConnected=!1,this._element=t,this._onDragStart=this.createDragStartDelegate(e),this._onDragMove=this.createDragMoveDelegate(i),this._onDragEnd=this.createDragEndDelegate(s),this.connectListeners()}get isMoving(){return this._isMoving}createDragStartDelegate(t){return e=>{if(this._currentMode)return;const i=be.isTouchEvent(e);t(e,i),this._currentMode=i?"touch":"mouse",i?(document.addEventListener("touchmove",this._onDragMove),document.addEventListener("touchend",this._onDragEnd),e.preventDefault()):(document.addEventListener("mousemove",this._onDragMove),document.addEventListener("mouseup",this._onDragEnd))}}createDragMoveDelegate(t){return e=>{this._isMoving=!0,t(e,be.isTouchEvent(e))}}createDragEndDelegate(t){return e=>{this._isMoving=!1,t&&t(e,be.isTouchEvent(e)),this.removeDocumentListeners(),this._currentMode=null}}connectListeners(){this._isConnected||(this._isConnected=!0,this._element.addEventListener("mousedown",this._onDragStart),this._element.addEventListener("touchstart",this._onDragStart))}removeDocumentListeners(){document.removeEventListener("touchmove",this._onDragMove),document.removeEventListener("touchend",this._onDragEnd),document.removeEventListener("mousemove",this._onDragMove),document.removeEventListener("mouseup",this._onDragEnd)}removeAllListeners(){this.removeDocumentListeners(),this._element.removeEventListener("mousedown",this._onDragStart),this._element.removeEventListener("touchstart",this._onDragStart),this._isConnected=!1}static isTouchEvent(t){return"touches"in t}}var Ce;let ke=Ce=class extends at{constructor(){super(),this._deadZone=5,this._wheelChange=3,this._wheelDebounceInterval=800,this._wheelCloseInterval=800,this._value=100,this._immediateValue=this._value,this.enabled=!0,this.width=100,this.height=60,this.heightOpened=200,this.iconSize=24,this._isOpened=!1,this._clickPosition=null,this._hasMouseMoved=!1,this._onDocumentMouseUpDelegate=()=>this.onDocumentMouseUp(),this._onDocumentMouseMoveDelegate=(t,e)=>this.onDocumentMouseMove(t,e),this._onDocumentWheelDelegate=t=>this.onDocumentWheel(t)}get value(){return this._value}set value(t){this.setValue(t,!1)}setValue(t,e){if((t=Ce.cleanValue(t))!=this._value){const i=this._value;if(this._value=t,this.requestUpdate(Gt(this,"value"),i),e){const e=new CustomEvent("change",{detail:{oldValue:i,newValue:t}});this.dispatchEvent(e)}this.immediateValue=t}}get immediateValue(){return this._immediateValue}set immediateValue(t){if((t=Ce.cleanValue(t))!=this.immediateValue){const e=this.immediateValue;this._immediateValue=t,this.requestUpdate(Gt(this,"immediateValue"),e);const i=new CustomEvent("immediate-value-change",{detail:{oldValue:e,newValue:t}});this.dispatchEvent(i)}}static cleanValue(t){return(t=Math.round(t))<1?t=1:t>100&&(t=100),t}changeImmediateValue(t,e){const i=(e?this.value:this.immediateValue)+t;this.immediateValue=i}applyImmediateValue(){this.setValue(this.immediateValue,!0)}toggleBar(t,e){this._isOpened=t,this._wrapperElement.classList.toggle("fast",e),this._wrapperElement.classList.toggle("open",this._isOpened),t||this.removeDocumentListeners();const i=this._isOpened?"open":"close",s=new CustomEvent(i,{detail:{isOpen:this._isOpened}});this.dispatchEvent(s)}get _isMouseDown(){return null!=this._clickPosition}onBarMouseDown(t,e){this._clickPosition=e?new we(t.changedTouches[0]):new ye(t),e||document.addEventListener("wheel",this._onDocumentWheelDelegate)}removeDocumentListeners(){this._dragHelper&&this._dragHelper.removeDocumentListeners(),document.removeEventListener("wheel",this._onDocumentWheelDelegate)}onDocumentMouseUp(){this._isMouseDown&&(this._hasMouseMoved?this.toggleBar(!1,!0):this.toggleBar(!this._isOpened,!1)),this._clickPosition=null,this._hasMouseMoved&&(this._hasMouseMoved=!1,this._isOpened||this.applyImmediateValue())}onDocumentMouseMove(t,e){if(this._isMouseDown){let i;i=e?new we(t.changedTouches[0]):new ye(t);let s=i.getYDiff(this._clickPosition);if(!this._hasMouseMoved&&Math.abs(s)>this._deadZone&&(this._isOpened||this.toggleBar(!0,!0),this._hasMouseMoved=!0,this._clickPosition=i,s=i.getYDiff(this._clickPosition)),this._hasMouseMoved&&this._isOpened){this.clearWheelTimeouts(!0);const t=-s/this.heightOpened*100;this.changeImmediateValue(t,!0)}}}onDocumentWheel(t){if(this._isOpened){const e=t.deltaY>0?-this._wheelChange:this._wheelChange;this.changeImmediateValue(e,!1),this.clearWheelTimeouts(),this._wheelSubmitTimeoutId=setTimeout((()=>{this.applyImmediateValue()}),this._wheelDebounceInterval),this._wheelCloseTimeoutId=setTimeout((()=>{this.toggleBar(!1,!1)}),this._wheelCloseInterval)}}clearWheelTimeouts(t=!1){this._wheelSubmitTimeoutId&&(clearTimeout(this._wheelSubmitTimeoutId),this._wheelSubmitTimeoutId=null,t&&this.applyImmediateValue()),this._wheelCloseTimeoutId&&(clearTimeout(this._wheelCloseTimeoutId),this._wheelCloseTimeoutId=null)}updated(t,e=!1){var i;super.updated(t);const s=t=>{this._wrapperElement.classList.add("instant"),t(),this._wrapperElement.offsetHeight,this._wrapperElement.classList.remove("instant")};if(t.has("width")&&s((()=>{this.style.setProperty("--rollup-width",this.width+"px")})),t.has("height")&&s((()=>{this.style.setProperty("--rollup-height",this.height+"px")})),t.has("heightOpened")&&s((()=>{this.style.setProperty("--rollup-height-opened",this.heightOpened+"px")})),t.has("iconSize")){const t=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector("ha-icon");qt.setIconSize(t,this.iconSize),this.style.setProperty("--rollup-icon-size",this.iconSize+"px")}t.has("enabled")&&(this._wrapperElement.classList.toggle("disabled",!this.enabled),this.enabled?this.connectListeners():(this.clearWheelTimeouts(!1),this.disconnectListeners(),this.toggleBar(!1,!0))),(t.has("immediateValue")||e)&&(this._valueElement.style.height=this.immediateValue+"%")}render(){const t=qt.hasHueIcons()?"hue:scene-bright":"mdi:brightness-7";return N`
        <div id='wrapper'>
            <div id='desc'>
                <span>
                ${this.enabled?N`${this.immediateValue} %`:U}
                </span>
            </div>
            <div id='bar'>
                <div id='value'></div>
                <div id='icon'>
                    <ha-icon icon="${t}"></ha-icon>
                </div>
            </div>
        </div>`}firstUpdated(t){super.firstUpdated(t),this._wrapperElement=this.renderRoot.querySelector("#wrapper");const e=this._wrapperElement.querySelector("#bar");this._dragHelper=new be(e,((t,e)=>this.onBarMouseDown(t,e)),this._onDocumentMouseMoveDelegate,this._onDocumentMouseUpDelegate),this._valueElement=e.querySelector("#value"),this.updated(t,!0)}connectedCallback(){super.connectedCallback(),this.connectListeners()}connectListeners(){var t;null===(t=this._dragHelper)||void 0===t||t.connectListeners()}disconnectedCallback(){super.disconnectedCallback(),this.disconnectListeners()}disconnectListeners(){var t;this.removeDocumentListeners(),null===(t=this._dragHelper)||void 0===t||t.removeAllListeners()}};var Se;ke.ElementName="hue-brightness-rollup"+Bt.ElementPostfix,ke.styles=a`
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
        box-shadow: ${n(Bt.HueShadow)};
        background: ${n(Bt.TileOffColor)};
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
        box-shadow: ${n(Bt.HueShadow)};
        background: ${n(Bt.TileOffColor)};
    }
    `,t([mt({reflect:!0})],ke.prototype,"enabled",void 0),t([mt({reflect:!0})],ke.prototype,"width",void 0),t([mt({reflect:!0})],ke.prototype,"height",void 0),t([mt()],ke.prototype,"heightOpened",void 0),t([mt()],ke.prototype,"iconSize",void 0),t([mt()],ke.prototype,"value",null),t([mt()],ke.prototype,"immediateValue",null),ke=Ce=t([gt(Ce.ElementName)],ke);class Ee{static saveWheel(t,e,i){const s=this.createKey(t,e),r=i.toDataURL();try{localStorage.setItem(s,r)}catch(t){console.error(t)}}static tryGetWheel(t,e){const i=this.createKey(t,e);try{const t=localStorage.getItem(i)||null;if(t)return{success:!0,dataUrl:t}}catch(t){console.error(t)}return{success:!1,dataUrl:null}}static createKey(t,e){return`HueColorWheelCache_${t}${e}x${e}v${this.version}`}}Ee.version=1;let xe=Se=class extends at{constructor(){super(),this.mode="color",this.tempMin=2e3,this.tempMax=6500,this._markers=new Array,"undefined"==typeof ResizeObserver?this._ro=null:this._ro=new ResizeObserver((()=>this.onResize()))}onResize(){this._markers.forEach((t=>t.refresh()))}firstUpdated(t){super.firstUpdated(t),this.setupLayers(),this.drawWheel()}updated(t){t.has("mode")&&t.get("mode")&&this.drawWheel()}setupLayers(){this._canvas=this.renderRoot.querySelector("#canvas"),this._backgroundLayer=this.renderRoot.querySelector("#backgroundLayer"),this._interactionLayer=this.renderRoot.querySelector("#interactionLayer"),this._backgroundLayer.width=Se.renderWidthHeight,this._backgroundLayer.height=Se.renderWidthHeight}addMarker(){const t=new Ae(this);return this._markers.push(t),this.requestUpdate("_markers"),t}drawWheel(){const t=this._backgroundLayer.getContext("2d");if(null==t)throw Error("Cannot create convas context!");const e=Se.renderWidthHeight/2;let i;const s=Ee.tryGetWheel(this.mode,e);if(s.success){const e=new Image;e.onload=()=>{t.drawImage(e,0,0)},e.src=s.dataUrl}else{i=t.createImageData(2*e,2*e);const s=i.data;for(let t=-e;t<e;t++)for(let i=-e;i<e;i++){const r=this.getColorAndValue(t,i,e);if(!r)continue;const[o,n,a]=r.color,l=255;s[r.index]=o,s[r.index+1]=n,s[r.index+2]=a,s[r.index+3]=l}t.putImageData(i,0,0),Ee.saveWheel(this.mode,e,this._backgroundLayer)}}getRadius(){var t;let e=null===(t=this._canvas)||void 0===t?void 0:t.clientWidth;return e||(e=Math.min(Se.maxWidth,Se.renderWidthHeight)),e/2}getCanvasMousePoint(t,e){let i;i="changedTouches"in t?new we(t.changedTouches[0]):new ye(t);let s=i.X-this._canvas.offsetLeft,r=i.Y-this._canvas.offsetTop;return e&&(s-=e.X,r-=e.Y),new _e(s,r)}getColorAndValue(t,e,i){return"color"==this.mode?this.getColorAndHSV(t,e,i):"temp"==this.mode?this.getTempAndKelvin(t,e,i):null}getColorAndHSV(t,e,i){const[s,r]=Se.utils.xy2polar(t,e);if(s-Se.overRender>i)return null;const o=Se.computeIndex(t,e,i)[0],n=Se.utils.rad2deg(r),a=Se.utils.getHue(n),l=Se.utils.getSaturation(s,i),h=Se.utils.getHSvalue(a,s,i);return{index:o,color:Vt.hsv2rgb(a,l,h),hsv:[a,l,h]}}getTempAndKelvin(t,e,i){const[s]=Se.utils.xy2polar(t,e);if(s-Se.overRender>i)return null;const[r,,o,n]=Se.computeIndex(t,e,i),a=o/n,l=Math.round(Se.utils.logarithmicalScale(a,this.tempMin,this.tempMax));return{index:r,color:Vt.hueTempToRgb(l),kelvin:l}}static computeIndex(t,e,i){const s=2*i,r=t+i,o=e+i;return[4*(r+o*s),r,o,s]}getCoordinatesAndTemp(t,e,i){t<this.tempMin?t=this.tempMin:t>this.tempMax&&(t=this.tempMax);const s=2*e;let r=Se.utils.invertedLogarithmicalScale(t,this.tempMin,this.tempMax)*s-e;r=Math.round(r);let o=0;if(i){const t=Math.ceil(Math.sqrt(e*e-r*r)),s=-t;o=i.X,o<s?o=s:o>t&&(o=t)}const n=Vt.hueTempToRgb(t);return{position:new _e(o,r),color:n}}getCoordinatesAndColor(t,e,i){const s=Se.utils.getDeg(t),r=Se.utils.deg2rad(s),o=Se.utils.getR(e,i);let[n,a]=Se.utils.polar2xy(o,r);a=Math.round(a),n=Math.round(n);const l=Se.utils.getHSvalue(t,o,i),h=Vt.hsv2rgb(t,e,l);return{position:new _e(n,a),color:h}}render(){return N`
        <div id='canvas'>
            <svg id="interactionLayer">
                <defs>
                    <filter id="new-shadow">
                        <feDropShadow dx="0" dy="1.0" stdDeviation="2.0" flood-opacity="1"></feDropShadow>
                    </filter>
                </defs>
                ${this._markers.map((t=>t.render()))}
            </svg>
            <canvas id="backgroundLayer"></canvas>
        </div>`}connectedCallback(){var t;super.connectedCallback(),null===(t=this._ro)||void 0===t||t.observe(this),this.onResize(),this._markers.forEach((t=>t.connectAllListeners()))}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._ro)||void 0===t||t.unobserve(this),this._markers.forEach((t=>t.removeAllListeners()))}};xe.ElementName="hue-color-temp-picker"+Bt.ElementPostfix,xe.overRender=2,xe.maxWidth=400,xe.renderWidthHeight=600,xe.utils={logarithmicalScale:function(t,e,i){return Math.pow(i/e,t)*e},invertedLogarithmicalScale:function(t,e,i){return Math.log(t/e)/Math.log(i/e)},linearScale:function(t,e,i){return(i-e)*t+e},xy2polar:function(t,e){return[Math.sqrt(t*t+e*e),Math.atan2(e,t)]},polar2xy:function(t,e){return[t*Math.cos(e),t*Math.sin(e)]},rad2deg:function(t){return(t+Math.PI)/(2*Math.PI)*360},deg2rad:function(t){return t/360*2*Math.PI-Math.PI},getHue:function(t){return(t-=70)<0&&(t+=360),t},getDeg:function(t){return(t+=70)>360&&(t-=360),t},getSaturation:function(t,e){const i=Math.pow(t,1.9)/Math.pow(e,1.9);return i>1?1:i},getR:function(t,e){return Math.pow(t*Math.pow(e,1.9),1/1.9)},getHSvalue:function(t,e,i){let s=.95;return s=Se.utils.fixHSValue(s,e,i,t,60,!0),s=Se.utils.fixHSValue(s,e,i,t,180,!0),s=Se.utils.fixHSValue(s,e,i,t,240,!1),s=Se.utils.fixHSValue(s,e,i,t,300,!0),s>1?1:s},fixHSValue:function(t,e,i,s,r,o,n=5){if((o?e>i/2:e<3*i/4&&e>i/4)&&s>=r-n&&s<=r+n){let e=r-s;e<0&&(e=-e),e=n-e,o?t-=e/360:t+=e/360}return t}},xe.styles=a`
    :host {
        user-select: none;
        -webkit-user-select: none;
    }

    #canvas {
        position: relative;
        width: 100%;
        max-width: ${Se.maxWidth}px;
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
        box-shadow: ${n(Bt.HueShadow)}
    }

    .marker {
        fill: currentColor;
        filter: url(#new-shadow);
    }
    .icon {
        transform: scale(1.2) translate(8px, 8px);
        transition: ${n(Bt.TransitionDefault)};
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
    `,t([mt()],xe.prototype,"mode",void 0),t([mt()],xe.prototype,"tempMin",void 0),t([mt()],xe.prototype,"tempMax",void 0),xe=Se=t([gt(Se.ElementName)],xe);class Ae{constructor(t){this._color=new Vt(0,0,0),this._temp=0,this._mode="color",this._icon=Ae.defaultIconName,this._isOff=!1,this._parent=t,[this._markerG,this._iconPath]=Ae.drawMarker(),this.position=new _e(.3*this.getRadius(),.6*this.getRadius()),this.makeDraggable()}getRadius(){return this._parent.getRadius()}dispatchChangeEvent(t){const e=t?"immediate-value-change":"change";this._parent.dispatchEvent(new CustomEvent(e,{detail:{marker:this,mode:this.mode,newColor:this._color,newTemp:"temp"==this.mode?this.temp:null}}))}boing(){this._markerG.setAttribute("class","gm boing"),setTimeout((()=>{this._markerG.setAttribute("class","gm")}),200)}get position(){return this._position}set position(t){var e;(null===(e=this._dragHelper)||void 0===e?void 0:e.isMoving)&&(this._isOff=!1);const i=this.getRadius();this._position=Ae.limitCoordinates(t,i),this.renderPosition();const s=this.getPositionFromCenter(i),r=this._parent.getColorAndValue(s.X,s.Y,i);if(r){if("hsv"in r){const[t,e,i]=r.hsv;this._color=new Vt(t,e,i,1,"hsv")}else{const[t,e,i]=r.color;this._color=new Vt(t,e,i)}this.renderColor(),this.mode=this._parent.mode,"kelvin"in r&&(this._temp=r.kelvin),this.dispatchChangeEvent(!0)}}setPositionFromCenter(t,e){const i=new _e(t.X+e,t.Y+e);this._position=Ae.limitCoordinates(i,e),this.renderPosition()}getPositionFromCenter(t=null){return t=null!=t?t:this.getRadius(),new _e(this._position.X-t,this._position.Y-t)}get mode(){return this._mode}set mode(t){this._mode=t,this.renderMode()}refresh(){"temp"==this.mode?this.temp=this.temp:this.color=this.color}get isOff(){return this._isOff}set isOff(t){this._isOff=t,this.renderColor()}get color(){return this._color}set color(t){"string"==typeof t&&(t=new Vt(t)),this._color=t,this.renderColor(),this.mode="color";const e=this.getRadius(),i=this._parent.getCoordinatesAndColor(t.getHue(),t.getSaturation(),e);this.setPositionFromCenter(i.position,e)}get temp(){return this._temp}set temp(t){this._temp=t;const e="color"==this.mode;this.mode="temp";const i=this.getRadius(),s=this.getPositionFromCenter(i),r=this._parent.getCoordinatesAndTemp(this._temp,i,e?void 0:s);this.setPositionFromCenter(r.position,i);const[o,n,a]=r.color;this._color=new Vt(o,n,a)}get icon(){return this._icon}set icon(t){this._icon=t,this.getIcon(t).then((t=>{t||(this._icon=Ae.defaultIconName,t=Ae.defaultIcon),this._iconPath.setAttribute("d",t)}))}async getIcon(t){if(!t)return null;const e=customElements.get("ha-icon");if(!e)return null;const i=new e;return i.icon=t,await i._loadIcon(),i._path}getMarkerOffset(){const t=this._markerG.getBBox();0==t.width&&(t.width=48,t.height=60);const e=t.width/2,i=t.height;return new _e(e,i)}renderColor(){if(this._isOff)this._markerG.style.color="rgb(0,0,0)",this._iconPath.style.fill=Bt.LightColor.toString();else{this._markerG.style.color=this._color.toString();const t="temp"==this.mode?-25:0,e=this._color.getForeground(Bt.LightColor,Bt.DarkColor,t);this._iconPath.style.fill=e.toString()}}renderMode(){this._markerG.style.opacity=this.mode==this._parent.mode?"1.0":"0.6"}renderPosition(){const t=this.getMarkerOffset(),e=this.position.X-t.X,i=this.position.Y-t.Y;this._markerG.style.transform=`translate(${e}px,${i}px)`,this._markerG.style.transformOrigin=`${this.position.X}px ${this.position.Y}px`}render(){return this.renderColor(),this.renderPosition(),this.renderMode(),this._markerG}makeDraggable(){this._dragHelper=new be(this._markerG,(t=>this.onDragStart(t)),(t=>this.onDrag(t)),(()=>this.onDragEnd()))}onDragStart(t){const e=this._parent.getCanvasMousePoint(t);this._dragOffset=e.getDiff(this.position)}onDrag(t){this.position=this._parent.getCanvasMousePoint(t,this._dragOffset)}onDragEnd(){this.dispatchChangeEvent(!1)}connectAllListeners(){var t;null===(t=this._dragHelper)||void 0===t||t.connectListeners()}removeAllListeners(){var t;null===(t=this._dragHelper)||void 0===t||t.removeAllListeners()}static drawMarker(){const t=document.createElementNS("http://www.w3.org/2000/svg","g");t.setAttribute("class","gm");const e=document.createElementNS("http://www.w3.org/2000/svg","path");e.setAttribute("class","marker"),e.setAttribute("d","M 24,0 C 10.745166,0 0,10.575951 0,23.622046 0,39.566928 21,57.578739 22.05,58.346457 L 24,60 25.95,58.346457 C 27,57.578739 48,39.566928 48,23.622046 48,10.575951 37.254834,0 24,0 Z");const i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("class","icon"),i.setAttribute("d",this.defaultIcon),t.appendChild(e),t.appendChild(i),[t,i]}static limitCoordinates(t,e){if(e<=0)return t;const i=t.X-e,s=t.Y-e,r=Math.abs(Math.sqrt(i*i+s*s));if(r>e){const t=e/r;return new _e(i*t+e,s*t+e)}return t}}Ae.defaultIconName="default",Ae.defaultIcon="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z";class Te{}var $e;Te.ModeColorIcon64="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAECxJREFUeJzFW3usbUdZ/9as136cs27Va9BgUoSb8tDQq9SqtJreWKCINVCEmPoAQ1P+aEUSa4KaGq8hxBcaMQhCeBgKKSpFbZvekggEbVGk9JVoq1cvUbFGEulZ5+zX2mut8ZuZb2a+mb32uVd6ru7k1++bWXuvPb/f95vH2j1XwEV61RVk9XG4rH52cn39PPFr9Xemd9ffnf19fVU+q3+okPUPl7K+YSTrGxFvxPxm7PvZfFHflj1Z/1J6pj4t3lH/evLa+p3Ji+rfh+JijVMc9Q1rSI/XeXI9SHEfpPnfQVb8BRTj26Gc/giMd14Io90JjCuA8a7BiKD6RrsjKHcug2L6CvzML0JW/ilk2RcgE39ZfzD58foO+JajHu+RCVDDN52oRfW7kJdfhHz0SRhNrkXCFUyQ3GQHdLSkxzsReUS549sKJfWVO1MU5Gq858cgy79Yf0L8YX03vPioxv2MBKjhBWmdnLiqTi89gxV7Akm+FXYvuRR2j6UwPQawg5gSJljhqYVqU5/CmNraGcoJFsc8yipBUZ6NTroZivLR+tPpA/VfJy+v/wby/xcBanjJcRDlB5H4p7DCr9Ckd3Ggu5b4rqk6x3gLgsoT+XJ3EwXH9KU4ve6GQtxZPw7P+T8VoE6ufhmkxX1Qjn8aJtMJTHeMzV1UxKZIZIIRMZqGKCfmWjlVREy74Dlr5xPClEDtTMcCstENkGdn6rO4YH4ZkosqQA3Xj2tx3W/iAO9FklfALlZK41iI6hAXTHa91Z0Lqk0nuHWgOsQFlYn59Pm49nxcFuL9X/sqHLsoAtTw+hMginuxcr+Alc5hB79YYUqw7R2a5yoqN4yHYN2wY6CcoIF5wcDbOYHnzhU7IPNpKrPRm2SafvarX4OTRypADW94Flr+/VCOTmlLKwJjsvdkSqB+lY+nfgpojA1KRDE2NtdWp3Zhbc9ybfUxgeUZz01bpmOHPilPdkn6oX/fS779SASo4RYkP/ocErrGVXxnx1d8SnNeVXxnN8R0d9gFowGUDAW5oogcoR0wZQ5AZFOQhF7sQJsoTE6uk/SBJ3GLekYC1HDbCUjLO7HSl/lKR9AC2DZbDO2C6OzOQQ5w1mdt5wCyd7wQZlMWsfqZQS+mijh0CBVbGH/rGtI/ebhOXvJ1CVDD7WOc8++DYnSNs7u2/BiC9iD4NGD2t1AESzYl8tjy48jmhKBv5K0vlPXHSJ4AYyUAojzZgvjA52u45H/vADE6jZU6Zea2JW/n+cRjYy2w19l64NYCqvRoHM15thbkk2gdYGBiSJr7fWqqroj3uvITIm8xuryB9F2fqoe3yEEB6uR3XoZHz7e6QVuSOh+HhLY5YMScUMYOsHlMnvKg4qPQBQq68iOq/MhVnwhz8hpryH+yheTGCxKghveoE947cMXPYTTyFtZ53B4zi0ft8WTzemFhrU9tS1STHYV5yiJBpiWSL3HeW/IjtL1CSTFGmeB68KufqOGyQwWo4SMpkn8nDu6KYPAx2cOEiGGFKEbDyFnMI/LZyM13C0VeEZeJrb4haSvv8xjFCRTh9/6oRpW2OiDJvg+//MccqZIIloysq/SItVnO4e4x9n3FFsIBaY5yo/IysdXfqLQmy93ARcCpcC1OhVduF0CMbsfqT8z8HCA0BEeci8Lmu9sBeLVLgiVeErjdSwMnQmGIq6o78uVWGNK8rVBkDYjTgwLUcEbt+dfio6YfnMoVShULn5eUFyy6Prquwd8zMnleMAEwzwomQOGRGtK4FWv0CCmMCAodYB+Y6HPftmjxabl1uW6/+LdruGrTAaK8BQeZ6oHyCm/MWyKjhaB2ycRyZPl72fW88MhIiIA0EU+LIJcJkReGaO9IloEQmyiJuBMAp4K49TRti8JU//PH8cteE85PGlxAbKDyW2MRfdYKwCsfVTzbJG5cUEKit71CE7cwlc81qc6hiCvunGD7cDF8eQvmNwTjgKT8fvzSb3ODyQtvV96nkW/GLO6P85zdK2fEMU9zIkq5ILBcJjkSzYi4yTsdcxatKFaIjOUGLWEN2TeuILleC1DDExkK8BZcbNKN1dg5IZq72ZAY+QD5IkRhBWNI85A8F8GRzxl5n3eBAJuEbV+LsXUxs9Pgpltr2EEHFM/FVfdKvypbkpZo1M64M8pNkgEGRND3YpXPiq0iKPISbPUzV/mOOaAPKuyvt67invzaOwDwePyCBpLvEPglz8dVtgrmXJpvWjMdqFiWYcx8dEgJ6hrlQ+8RBJsnGUWTS0gD8gqqT+o83YougBIgJXFSyjXyNcDlKEDxPT1WQaqVFklJK4JbnGybiZBlw+SzAQz1W3EUBEfqckteOtIhcekcEaIl0h2RZoTV4kfIdFyBuFL0SfFdiniPJHsSweQohrJhaqD348AZrO3m80CVA9LMGelA5RX5hJO3VbUOSF001RUDFedVFppoGxFXaLQAyUnRJsnzWiGgQ/RovV4YSByIiQY9Xre5tqirVhoiZVHngpCGpDVx6lfXE2rjoE21RYB+C7oLQMuwDpCcEE2SXNqIBNYKqYr4RswVOi0MiZJYCAepCcQWjkg6CI+UiaLuYRGRtkL0LlrSqYtDZLuIcEg81RGPxMoBx8QqSSZKgBXCCaFESJUQHl1KwEF3JEhnReCOSA4hnojQEYeS94QlHtrCyidEmMdEVZTIJrzKmqwhnWisnAACUADABKBJPNYsrnFsrUKCX4LohYfUDlH9gIIAiqGA/wnASIr4moI+iWnILegZugG0BJ63kSANtY0I4MQwAljyQFDEgQQAg5YEaSlXUMQ7CGNPeQ9WEMfP/CdxDUYeNFEvArjYRwJsigCMOI1PkwVygufQOAESXXQFsaTExhgNAxelZTduI3QMPYMWxHNmLysCOPL8c/Ze/P42X0f5OhrzECcO0eA3rhAqug9Kupn0N12zvlb6L9aDkTRIaeAGLz0ktaUFkQ2Jh/AiSLy/R+siJy5ZtWUQvSBSY6VBAqykJx0IIT3WEVoibdGxyIVwgij0nrwVAuQQcW996wS/DnA3SIeQsHRELVlPWqLTLXnTFkvsW+Kdl0qAPoQWoCco8r0RQLXXHEqAnkToTd4ReurrZNjnAEPgIggmhmDrgAjmviGuiPVEuEeyMYwAC8wtlAP+VQtAWMkBEbgQEfn2EGgxOk/cCdAz8tKT7tnc74KKJ9T22+Hm4cifDcwZwK764CrPxViYvn0lwDlOLiYZt9vDiHdh9QN0m9XfWDMGnBCKsw1Dp8Q0OjEmbnew6wFOhXNqCnxpgYNTWCq0FAkrhZYioWFRozVxrdBGoP5OYlVwj4wdYkWIV/fOxSRwQUd7e+umwRD8k2BHvwGED0z2oSn/knLAQzFxTtaSbxjidkPEnQgRuh5tiSwVAtJ8IQVwhxlbLS9IuMeH70kiMVI6CqfuWOwfkrwYrX7YKlAAgH9AQrPzkY7JuuqyKg9Vv+uFJr4m8s4BclOITQfY6nMHxGKJSIQ4hsKwiF+ZP6zOAWfR/g8v8Fs5ljhZFmvKqW2x4n1KLNbPsW7xsROPjKtWGoHYGmLbbmuV9uRmYff08DRnr8fH3dZ9zj4Axb8B8N8F9C9H/4wOeFy8DaoGp8G7kah0JNth4pokizEanuMDhF4bkGXTSecSN02ibdSdN4JjbJwPYei6YELxJ0MvRA/5HVB9ZU//KowL4WeR7H8sqOox4RWr7mHk7WcMedyCsKyNnvsR4SFIdtzeIAdbsCmCd0P87O8fjVGAWkL5ccVdC/AbUP0nToN75yTAHEeysFizHLFkkUML1ygh8DFzbWy/avvhRXNg23UYeGILcSHvsU9/gkX/OwDa/zMA2b84AdQLDz3vVsQteRdXoQDbsFyp6gtEQi6RhnhrEG+h7rDFDl7u0KWf1jhJjiTKzwdBz/8mb/S5IHsPVI90gQDvheoxnAYPDongMCQG9WniDZHHyisHNHw3oW1SE42dIONnEU9+dQi5VeCCWDifr4G7Ij0nqwfut7yD/zuMR+HTWPFmhqRmVP2ZxdK0h7BYJRgFrR9SI94R7FnD5fFhi1ygjuNz3C/Vs8mSSBgAi/YaRNcSds3/+sN+AcI757/COQcCoPqfwXXgHktYY8UiE8Nibsk3lnxvdo8I9mzBD1pOhD6EcsKCCbB0AJdb0rwvFEy1RfB5rP6DuPfftVWAu6Ba4wB+Hqv/pCJ3sApFOFBY+Hy2TPCaMG5B8guNTfLupEkIjt4ReV15mWgsFAIBYsAh12LB0qfwBHgbVJ+cbxVAve6H6stYnV9G0p0j7QiHDjjA0R7gqJeNdNZ3B6MBF8TPGZb0IhJiJc3gV3KIIGwh7qfGkCvw5Pd2qD76hZjv4F+JIY+7sKof3l/4qluovv2lieraHMnPcCVbYHTb5pqdJNmJMgCSnrcGCz3vyRm9wRIfnOaQ6KmgXLAJCPLlwHusADj/75GQvm+I66AAD0Il1VTAKfDIPhqmJuI2qj4VZ3ZXUGcHQpwvWk/UEWYicMx7glQwU0BFJcTcERM6zjHOmRD+PRCLcA73/Zuhem97wQKo1+NQ7eFU+Bkk+YitvHYBJx9XOYImPFB9Ve05J07kFwxLSUIExAUjBhtkN10hzuK8vwmq33pqG89D/1b4LJ4W0Ak3IOGnaiS+R9hfmjOCwqzxua38jBC3Z62BdYJuWwF4jpj1VH3EjFwwizA/BCjWHh55Xy+r058+jON5/1r8K7I6hwP6wb0FPPL0zAigdgcLJYDOm6jPYk3tdYTWC6Lyg46hVwIYHCD5AyngAEkdOPKqLVwMr2kBzuIT3ymo3vbw+fhd0L8X2JPVWZwON6HtH91q99j2lLvIF79ueCq4dcBNCb8VmiiC9WAOgwsfzvn0zVDdel7yFyyAejWyeghPt9fgVvYRFELyiqt8xuLssMrTdDhoI1D1Zx1VXld/0wW++qbavPoo0D34tHeVrN50qO2/LgH0q6ue7jJ4A+7PP4VEz+4j2Rh1Y2DzfYv1FiD5/c7HujXQfV0C++iCfRRA/VXbPopQ45D3IaFochTgKVzwbsHV/jVQ/cTWBe+ZC6BeT1dS/lf1URzjq3BanEG7t6rSbuFr/MI3tCDaxW7WssWPL4C9nwZ6HZAGc+ALn7DtDi3/V1j1V8vqlX8A1Y8ObnVHK4B9/Vv1j52AV+MDzOuQ4GMH1gUNi6z6NUFXvaGKWwcMQTmgN/GgM9V3MNPgHD7cvBG3ueugOrVxwrv4AqjXE9VKPlr9Wfe31eW4XV6NQtxZr+C/95T9ESruNSavaUro9trEPRVbg7r1+V5noKcDkt9DIWqcBmj3GteAP0fi13XVC58rq5N3QHXl/PwDvVgC8Nfnqgf6FG7Eh8ErUIyfQ1s/jgve+mDL/D9ovQsOWOX5dqgd0OMU65MnF11yeyOTKzqZvlZWz7n//AO6sNfR/uvx+yoJd1fn5B9X78LxvxTF+AF86HkzbnkfQEEeQkH2AtvHU0AvfLCP5B/DNeDDuMa8Be9xCh/iv1d+8yVvh284/k9wybO6oxzy/wBj4DViryyfzgAAAABJRU5ErkJggg==",Te.ModeTempIcon64="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAABExJREFUeJzl21tMW3UcB/BDYFtmlmwPJJtvI+l42MMys8RFQaNTNm9EFI3EYZyaELfIND5oNCwxi5nJfODBxGSRhGw+4IOLSxhQxnUtl3HZSlGwWKwgWKBc2tLraU/P129YGFmkWGhL2/P/JZ83ev7f7y+E03JAkpI0aHgyh/KpGA1PXKR6GiUfIYoAjZGeLvG1pXSYdiYrZ8IHjYW5xNIFLeQmxMlLRl6zjA6kul/UQePTOqpG41MTpBASTKVpnnGFjqS678pA/2w2FaDpGT0phG3UzbNP0o4UlX8ul65Cf8JHSBGZGa7Twe0t31xUhObnBwhpwsJMpZSV3OK3XtiNW6cuU4iQZhSqYca9ySnf8pIOLS+2E9KciVmPJrZ86yv70fpyByFDmJg5LzHl20r2o+3VMUKGsTO7Lr7y7a/r0P5aByFDmdjh2NbKd7y5Gx1vtBMy3BC77Nv8AjrfukzQiGvoLIv9FonbbxdRiKARKp2OrbzhnVwYygcIGmNlt/yNy3e9lw3jmaswvgttOtPEjruiL6D7gwJ0ve8jaFSYHUuiL6CnQk/QOPP65XvP6tD7oULQvrMF/13AnY+qCYKow53Ktdsi+j7JRd/HEwRBLLLz2mcF9H9aTApBIOfvlx/8PAcDn7UQBDPM7nsk3P0yH3e/cBMEE2L34xLuXSjGvSqI6UKFBNNXFwmCqpFg/rqeIKhBCcPfjBIE5ZLw67c+gqgkjFRDZBJGv4PIJFi+h8gk/PEDRCbBWguRSRj/ESKTYKsLwPYTRCVh4ucxgqCWJUz+oicIyixh6uYlTDVATDdrJfzTXEoQVKUEe+th2Nu8BMGE2b1QwkznTswajJgzQiizBgtmbt//cxo4esrg6FUJ4uipWvut8Hz/ASwMThME4cb8wKGHH4wsma9gaRhiMN/Aoin74QU4fzsC1yiE4Bw5tf7zQbe1G+5xaJvVFv3psOevk/BOygSNUuCZKI++AO/UDvjt1wkaZYB3+pGoC1hZQsBxEMEFC0Fj7AjMP75h+QdLkF2lCLkVgmbIrnMxlV9ZQMiTBcVfAyUAbfDXs1NOzAtYWUIkvBdqxAREkNHUiI1dHt1U+QdLAI6qKkwRlZfKQMxuZYcTWyq/OnJEzQsqqp2QYVzM/lhc5VfHE4rolmXF5JYVZAJmtTJzYsqvjjOoHFsMKEOENGdj1vi+7aONwx/eN+sLX5vxhVVCGqpnxq39wIt1pjyhrL89odOTy7J1YllGOmAWOzOdY7bN3erimT/dcv64W26yuoJhQooo4y7ZwCyxvcNL9Iw5g7t+dwZLRpcC5pGlALYTz7Tx7HKLM7jxe/vtGvOCv2BowV9nmvcvEpLEzTNu8Kz1P8+negYd/qwBhz+vf853vm/ON0whQpzCZOE1q3jtQzwj+/+TpMH0zPj20PEuu7eCaox27yC5DHYvNsKvWSYzX1NLld0zvkJeJzn/DMn5Fx+ZBLlKMSXKAAAAAElFTkSuQmCC";let De=$e=class extends at{constructor(){super(),this.mode="color",this.showColor=!0,this.showTemp=!0,this.colorPicker=null}selectPossibleMode(){this.showColor?this.mode="color":this.showTemp&&(this.mode="temp")}updated(t){if(super.updated(t),t.has("mode")&&this.colorPicker&&("color"!=this.mode&&"temp"!=this.mode||(this.colorPicker.mode=this.mode)),t.has("mode")&&"brightness"==this.mode){const t=this.renderRoot.querySelector(".wheel.brightness ha-icon");qt.setIconSize(t,$e.wheelHeight)}}render(){return this.showColor||this.showTemp||"brightness"==this.mode?N`
        <div class='controls'>
        ${ve("brightness"==this.mode?this.createBrightnessWheel():N`
                ${this.createWheel("color")}
                ${this.createWheel("temp")}
            `)}
        </div>`:U}createBrightnessWheel(){if("brightness"!=this.mode)return U;const t=qt.hasHueIcons()?"hue:scene-bright":"mdi:brightness-7";return N`
        <div class='wheel-wrapper active' @click=${()=>this.mode="brightness"}>
            <span class='wheel brightness'>
                <ha-icon icon="${t}"></ha-icon>
            </span>
        </div>`}createWheel(t){if("temp"==t&&!this.showTemp)return U;if("color"==t&&!this.showColor)return U;const e={"wheel-wrapper":!0,active:this.mode==t};return N`
        <div class='${dt(e)}' @click=${()=>this.mode=t}>
            <span class='wheel ${t}'></span>
        </div>`}};
/*! Hammer.JS - v2.0.17-rc - 2019-12-16
 * http://naver.github.io/egjs
 *
 * Forked By Naver egjs
 * Copyright (c) hammerjs
 * Licensed under the MIT license */
function Pe(){return Pe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},Pe.apply(this,arguments)}function Me(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function Oe(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}De.ElementName="hue-color-temp-mode-selector"+Bt.ElementPostfix,De.wheelHeight=24,De.wheelSpace=2,De.wheelBorderWidth=2,De.wrapperHeight=$e.wheelHeight+2*($e.wheelSpace+$e.wheelBorderWidth),De.totalPadding=8,De.wrapperGap=$e.totalPadding,De.totalHeight=$e.wrapperHeight+2*$e.totalPadding,De.styles=a`
    :host{
        user-select: none;
        -webkit-user-select: none;
        display:inline-block;
    }
    .controls{
        box-sizing: border-box;
        display: flex;
        height: ${$e.totalHeight}px;
        padding: ${$e.totalPadding}px;
        gap: ${$e.wrapperGap}px;
        border-radius: ${$e.totalHeight/2}px;
        box-shadow: ${n(Bt.HueShadow)};
        background: ${n(Bt.TileOffColor)};
    }
    .controls .wheel-wrapper{
        box-sizing: border-box;
        width: ${$e.wrapperHeight}px;
        height: ${$e.wrapperHeight}px;
        padding: ${$e.wheelSpace}px;
        border-radius: ${$e.wrapperHeight/2}px;
        border: ${$e.wheelBorderWidth}px solid transparent;
        cursor: pointer;
    }
    .controls .wheel-wrapper:hover,
    .controls .wheel-wrapper:active{
        background-color: ${n(Bt.TileOffColor)};
    }
    .controls .wheel-wrapper.active{
        border-color: white;
    }
    .controls .wheel-wrapper .wheel{
        display:inline-block;
        width: ${$e.wheelHeight}px;
        height: ${$e.wheelHeight}px;
        border-radius: ${$e.wheelHeight/2}px;
        background-size: cover;
    }
    .wheel.color{
        background-image: url(${n(Te.ModeColorIcon64)});
    }
    .wheel.temp{
        background-image: url(${n(Te.ModeTempIcon64)});
    }
    .wheel.brightness{
        color: white;
    }
    `,t([mt()],De.prototype,"mode",void 0),t([mt()],De.prototype,"showColor",void 0),t([mt()],De.prototype,"showTemp",void 0),t([mt()],De.prototype,"colorPicker",void 0),De=$e=t([gt($e.ElementName)],De);var Ie,Le="function"!=typeof Object.assign?function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var s=arguments[i];if(null!=s)for(var r in s)s.hasOwnProperty(r)&&(e[r]=s[r])}return e}:Object.assign,He=["","webkit","Moz","MS","ms","o"],Ve="undefined"==typeof document?{style:{}}:document.createElement("div"),Be=Math.round,Re=Math.abs,Ne=Date.now;function Fe(t,e){for(var i,s,r=e[0].toUpperCase()+e.slice(1),o=0;o<He.length;){if((s=(i=He[o])?i+r:e)in t)return s;o++}}Ie="undefined"==typeof window?{}:window;var Ue=Fe(Ve.style,"touchAction"),ze=void 0!==Ue;var We="compute",qe="auto",Ye="manipulation",je="none",Ge="pan-x",Qe="pan-y",Xe=function(){if(!ze)return!1;var t={},e=Ie.CSS&&Ie.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(i){return t[i]=!e||Ie.CSS.supports("touch-action",i)})),t}(),Ke="ontouchstart"in Ie,Je=void 0!==Fe(Ie,"PointerEvent"),Ze=Ke&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),ti="touch",ei="mouse",ii=25,si=1,ri=4,oi=8,ni=1,ai=2,li=4,hi=8,ci=16,ui=ai|li,di=hi|ci,gi=ui|di,pi=["x","y"],fi=["clientX","clientY"];function mi(t,e,i){var s;if(t)if(t.forEach)t.forEach(e,i);else if(void 0!==t.length)for(s=0;s<t.length;)e.call(i,t[s],s,t),s++;else for(s in t)t.hasOwnProperty(s)&&e.call(i,t[s],s,t)}function vi(t,e){return"function"==typeof t?t.apply(e&&e[0]||void 0,e):t}function _i(t,e){return t.indexOf(e)>-1}var yi=function(){function t(t,e){this.manager=t,this.set(e)}var e=t.prototype;return e.set=function(t){t===We&&(t=this.compute()),ze&&this.manager.element.style&&Xe[t]&&(this.manager.element.style[Ue]=t),this.actions=t.toLowerCase().trim()},e.update=function(){this.set(this.manager.options.touchAction)},e.compute=function(){var t=[];return mi(this.manager.recognizers,(function(e){vi(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))})),function(t){if(_i(t,je))return je;var e=_i(t,Ge),i=_i(t,Qe);return e&&i?je:e||i?e?Ge:Qe:_i(t,Ye)?Ye:qe}(t.join(" "))},e.preventDefaults=function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var s=this.actions,r=_i(s,je)&&!Xe[je],o=_i(s,Qe)&&!Xe[Qe],n=_i(s,Ge)&&!Xe[Ge];if(r){var a=1===t.pointers.length,l=t.distance<2,h=t.deltaTime<250;if(a&&l&&h)return}if(!n||!o)return r||o&&i&ui||n&&i&di?this.preventSrc(e):void 0}},e.preventSrc=function(t){this.manager.session.prevented=!0,t.preventDefault()},t}();function wi(t,e){for(;t;){if(t===e)return!0;t=t.parentNode}return!1}function bi(t){var e=t.length;if(1===e)return{x:Be(t[0].clientX),y:Be(t[0].clientY)};for(var i=0,s=0,r=0;r<e;)i+=t[r].clientX,s+=t[r].clientY,r++;return{x:Be(i/e),y:Be(s/e)}}function Ci(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:Be(t.pointers[i].clientX),clientY:Be(t.pointers[i].clientY)},i++;return{timeStamp:Ne(),pointers:e,center:bi(e),deltaX:t.deltaX,deltaY:t.deltaY}}function ki(t,e,i){i||(i=pi);var s=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return Math.sqrt(s*s+r*r)}function Si(t,e,i){i||(i=pi);var s=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return 180*Math.atan2(r,s)/Math.PI}function Ei(t,e){return t===e?ni:Re(t)>=Re(e)?t<0?ai:li:e<0?hi:ci}function xi(t,e,i){return{x:e/t||0,y:i/t||0}}function Ai(t,e){var i=t.session,s=e.pointers,r=s.length;i.firstInput||(i.firstInput=Ci(e)),r>1&&!i.firstMultiple?i.firstMultiple=Ci(e):1===r&&(i.firstMultiple=!1);var o=i.firstInput,n=i.firstMultiple,a=n?n.center:o.center,l=e.center=bi(s);e.timeStamp=Ne(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=Si(a,l),e.distance=ki(a,l),function(t,e){var i=e.center,s=t.offsetDelta||{},r=t.prevDelta||{},o=t.prevInput||{};e.eventType!==si&&o.eventType!==ri||(r=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},s=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=r.x+(i.x-s.x),e.deltaY=r.y+(i.y-s.y)}(i,e),e.offsetDirection=Ei(e.deltaX,e.deltaY);var h,c,u=xi(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=u.x,e.overallVelocityY=u.y,e.overallVelocity=Re(u.x)>Re(u.y)?u.x:u.y,e.scale=n?(h=n.pointers,ki((c=s)[0],c[1],fi)/ki(h[0],h[1],fi)):1,e.rotation=n?function(t,e){return Si(e[1],e[0],fi)+Si(t[1],t[0],fi)}(n.pointers,s):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,function(t,e){var i,s,r,o,n=t.lastInterval||e,a=e.timeStamp-n.timeStamp;if(e.eventType!==oi&&(a>ii||void 0===n.velocity)){var l=e.deltaX-n.deltaX,h=e.deltaY-n.deltaY,c=xi(a,l,h);s=c.x,r=c.y,i=Re(c.x)>Re(c.y)?c.x:c.y,o=Ei(l,h),t.lastInterval=e}else i=n.velocity,s=n.velocityX,r=n.velocityY,o=n.direction;e.velocity=i,e.velocityX=s,e.velocityY=r,e.direction=o}(i,e);var d,g=t.element,p=e.srcEvent;wi(d=p.composedPath?p.composedPath()[0]:p.path?p.path[0]:p.target,g)&&(g=d),e.target=g}function Ti(t,e,i){var s=i.pointers.length,r=i.changedPointers.length,o=e&si&&s-r==0,n=e&(ri|oi)&&s-r==0;i.isFirst=!!o,i.isFinal=!!n,o&&(t.session={}),i.eventType=e,Ai(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function $i(t){return t.trim().split(/\s+/g)}function Di(t,e,i){mi($i(e),(function(e){t.addEventListener(e,i,!1)}))}function Pi(t,e,i){mi($i(e),(function(e){t.removeEventListener(e,i,!1)}))}function Mi(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||window}var Oi=function(){function t(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){vi(t.options.enable,[t])&&i.handler(e)},this.init()}var e=t.prototype;return e.handler=function(){},e.init=function(){this.evEl&&Di(this.element,this.evEl,this.domHandler),this.evTarget&&Di(this.target,this.evTarget,this.domHandler),this.evWin&&Di(Mi(this.element),this.evWin,this.domHandler)},e.destroy=function(){this.evEl&&Pi(this.element,this.evEl,this.domHandler),this.evTarget&&Pi(this.target,this.evTarget,this.domHandler),this.evWin&&Pi(Mi(this.element),this.evWin,this.domHandler)},t}();function Ii(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var s=0;s<t.length;){if(i&&t[s][i]==e||!i&&t[s]===e)return s;s++}return-1}var Li={pointerdown:si,pointermove:2,pointerup:ri,pointercancel:oi,pointerout:oi},Hi={2:ti,3:"pen",4:ei,5:"kinect"},Vi="pointerdown",Bi="pointermove pointerup pointercancel";Ie.MSPointerEvent&&!Ie.PointerEvent&&(Vi="MSPointerDown",Bi="MSPointerMove MSPointerUp MSPointerCancel");var Ri=function(t){function e(){var i,s=e.prototype;return s.evEl=Vi,s.evWin=Bi,(i=t.apply(this,arguments)||this).store=i.manager.session.pointerEvents=[],i}return Me(e,t),e.prototype.handler=function(t){var e=this.store,i=!1,s=t.type.toLowerCase().replace("ms",""),r=Li[s],o=Hi[t.pointerType]||t.pointerType,n=o===ti,a=Ii(e,t.pointerId,"pointerId");r&si&&(0===t.button||n)?a<0&&(e.push(t),a=e.length-1):r&(ri|oi)&&(i=!0),a<0||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),i&&e.splice(a,1))},e}(Oi);function Ni(t){return Array.prototype.slice.call(t,0)}function Fi(t,e,i){for(var s=[],r=[],o=0;o<t.length;){var n=e?t[o][e]:t[o];Ii(r,n)<0&&s.push(t[o]),r[o]=n,o++}return i&&(s=e?s.sort((function(t,i){return t[e]>i[e]})):s.sort()),s}var Ui={touchstart:si,touchmove:2,touchend:ri,touchcancel:oi},zi=function(t){function e(){var i;return e.prototype.evTarget="touchstart touchmove touchend touchcancel",(i=t.apply(this,arguments)||this).targetIds={},i}return Me(e,t),e.prototype.handler=function(t){var e=Ui[t.type],i=Wi.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:ti,srcEvent:t})},e}(Oi);function Wi(t,e){var i,s,r=Ni(t.touches),o=this.targetIds;if(e&(2|si)&&1===r.length)return o[r[0].identifier]=!0,[r,r];var n=Ni(t.changedTouches),a=[],l=this.target;if(s=r.filter((function(t){return wi(t.target,l)})),e===si)for(i=0;i<s.length;)o[s[i].identifier]=!0,i++;for(i=0;i<n.length;)o[n[i].identifier]&&a.push(n[i]),e&(ri|oi)&&delete o[n[i].identifier],i++;return a.length?[Fi(s.concat(a),"identifier",!0),a]:void 0}var qi={mousedown:si,mousemove:2,mouseup:ri},Yi=function(t){function e(){var i,s=e.prototype;return s.evEl="mousedown",s.evWin="mousemove mouseup",(i=t.apply(this,arguments)||this).pressed=!1,i}return Me(e,t),e.prototype.handler=function(t){var e=qi[t.type];e&si&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=ri),this.pressed&&(e&ri&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:ei,srcEvent:t}))},e}(Oi),ji=2500;function Gi(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY},s=this.lastTouches;this.lastTouches.push(i);setTimeout((function(){var t=s.indexOf(i);t>-1&&s.splice(t,1)}),ji)}}function Qi(t,e){t&si?(this.primaryTouch=e.changedPointers[0].identifier,Gi.call(this,e)):t&(ri|oi)&&Gi.call(this,e)}function Xi(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,s=0;s<this.lastTouches.length;s++){var r=this.lastTouches[s],o=Math.abs(e-r.x),n=Math.abs(i-r.y);if(o<=25&&n<=25)return!0}return!1}var Ki=function(){return function(t){function e(e,i){var s;return(s=t.call(this,e,i)||this).handler=function(t,e,i){var r=i.pointerType===ti,o=i.pointerType===ei;if(!(o&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(r)Qi.call(Oe(Oe(s)),e,i);else if(o&&Xi.call(Oe(Oe(s)),i))return;s.callback(t,e,i)}},s.touch=new zi(s.manager,s.handler),s.mouse=new Yi(s.manager,s.handler),s.primaryTouch=null,s.lastTouches=[],s}return Me(e,t),e.prototype.destroy=function(){this.touch.destroy(),this.mouse.destroy()},e}(Oi)}();function Ji(t,e,i){return!!Array.isArray(t)&&(mi(t,i[e],i),!0)}var Zi=32,ts=1;function es(t,e){var i=e.manager;return i?i.get(t):t}function is(t){return 16&t?"cancel":8&t?"end":4&t?"move":2&t?"start":""}var ss=function(){function t(t){void 0===t&&(t={}),this.options=Pe({enable:!0},t),this.id=ts++,this.manager=null,this.state=1,this.simultaneous={},this.requireFail=[]}var e=t.prototype;return e.set=function(t){return Le(this.options,t),this.manager&&this.manager.touchAction.update(),this},e.recognizeWith=function(t){if(Ji(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=es(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},e.dropRecognizeWith=function(t){return Ji(t,"dropRecognizeWith",this)||(t=es(t,this),delete this.simultaneous[t.id]),this},e.requireFailure=function(t){if(Ji(t,"requireFailure",this))return this;var e=this.requireFail;return-1===Ii(e,t=es(t,this))&&(e.push(t),t.requireFailure(this)),this},e.dropRequireFailure=function(t){if(Ji(t,"dropRequireFailure",this))return this;t=es(t,this);var e=Ii(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},e.hasRequireFailures=function(){return this.requireFail.length>0},e.canRecognizeWith=function(t){return!!this.simultaneous[t.id]},e.emit=function(t){var e=this,i=this.state;function s(i){e.manager.emit(i,t)}i<8&&s(e.options.event+is(i)),s(e.options.event),t.additionalEvent&&s(t.additionalEvent),i>=8&&s(e.options.event+is(i))},e.tryEmit=function(t){if(this.canEmit())return this.emit(t);this.state=Zi},e.canEmit=function(){for(var t=0;t<this.requireFail.length;){if(!(33&this.requireFail[t].state))return!1;t++}return!0},e.recognize=function(t){var e=Le({},t);if(!vi(this.options.enable,[this,e]))return this.reset(),void(this.state=Zi);56&this.state&&(this.state=1),this.state=this.process(e),30&this.state&&this.tryEmit(e)},e.process=function(t){},e.getTouchAction=function(){},e.reset=function(){},t}(),rs=function(t){function e(e){var i;return void 0===e&&(e={}),(i=t.call(this,Pe({event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},e))||this).pTime=!1,i.pCenter=!1,i._timer=null,i._input=null,i.count=0,i}Me(e,t);var i=e.prototype;return i.getTouchAction=function(){return[Ye]},i.process=function(t){var e=this,i=this.options,s=t.pointers.length===i.pointers,r=t.distance<i.threshold,o=t.deltaTime<i.time;if(this.reset(),t.eventType&si&&0===this.count)return this.failTimeout();if(r&&o&&s){if(t.eventType!==ri)return this.failTimeout();var n=!this.pTime||t.timeStamp-this.pTime<i.interval,a=!this.pCenter||ki(this.pCenter,t.center)<i.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,a&&n?this.count+=1:this.count=1,this._input=t,0===this.count%i.taps)return this.hasRequireFailures()?(this._timer=setTimeout((function(){e.state=8,e.tryEmit()}),i.interval),2):8}return Zi},i.failTimeout=function(){var t=this;return this._timer=setTimeout((function(){t.state=Zi}),this.options.interval),Zi},i.reset=function(){clearTimeout(this._timer)},i.emit=function(){8===this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))},e}(ss),os=function(t){function e(e){return void 0===e&&(e={}),t.call(this,Pe({pointers:1},e))||this}Me(e,t);var i=e.prototype;return i.attrTest=function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},i.process=function(t){var e=this.state,i=t.eventType,s=6&e,r=this.attrTest(t);return s&&(i&oi||!r)?16|e:s||r?i&ri?8|e:2&e?4|e:2:Zi},e}(ss);function ns(t){return t===ci?"down":t===hi?"up":t===ai?"left":t===li?"right":""}var as=function(t){function e(e){var i;return void 0===e&&(e={}),(i=t.call(this,Pe({event:"pan",threshold:10,pointers:1,direction:gi},e))||this).pX=null,i.pY=null,i}Me(e,t);var i=e.prototype;return i.getTouchAction=function(){var t=this.options.direction,e=[];return t&ui&&e.push(Qe),t&di&&e.push(Ge),e},i.directionTest=function(t){var e=this.options,i=!0,s=t.distance,r=t.direction,o=t.deltaX,n=t.deltaY;return r&e.direction||(e.direction&ui?(r=0===o?ni:o<0?ai:li,i=o!==this.pX,s=Math.abs(t.deltaX)):(r=0===n?ni:n<0?hi:ci,i=n!==this.pY,s=Math.abs(t.deltaY))),t.direction=r,i&&s>e.threshold&&r&e.direction},i.attrTest=function(t){return os.prototype.attrTest.call(this,t)&&(2&this.state||!(2&this.state)&&this.directionTest(t))},i.emit=function(e){this.pX=e.deltaX,this.pY=e.deltaY;var i=ns(e.direction);i&&(e.additionalEvent=this.options.event+i),t.prototype.emit.call(this,e)},e}(os),ls=function(t){function e(e){return void 0===e&&(e={}),t.call(this,Pe({event:"swipe",threshold:10,velocity:.3,direction:ui|di,pointers:1},e))||this}Me(e,t);var i=e.prototype;return i.getTouchAction=function(){return as.prototype.getTouchAction.call(this)},i.attrTest=function(e){var i,s=this.options.direction;return s&(ui|di)?i=e.overallVelocity:s&ui?i=e.overallVelocityX:s&di&&(i=e.overallVelocityY),t.prototype.attrTest.call(this,e)&&s&e.offsetDirection&&e.distance>this.options.threshold&&e.maxPointers===this.options.pointers&&Re(i)>this.options.velocity&&e.eventType&ri},i.emit=function(t){var e=ns(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)},e}(os),hs=function(t){function e(e){return void 0===e&&(e={}),t.call(this,Pe({event:"pinch",threshold:0,pointers:2},e))||this}Me(e,t);var i=e.prototype;return i.getTouchAction=function(){return[je]},i.attrTest=function(e){return t.prototype.attrTest.call(this,e)&&(Math.abs(e.scale-1)>this.options.threshold||2&this.state)},i.emit=function(e){if(1!==e.scale){var i=e.scale<1?"in":"out";e.additionalEvent=this.options.event+i}t.prototype.emit.call(this,e)},e}(os),cs=function(t){function e(e){return void 0===e&&(e={}),t.call(this,Pe({event:"rotate",threshold:0,pointers:2},e))||this}Me(e,t);var i=e.prototype;return i.getTouchAction=function(){return[je]},i.attrTest=function(e){return t.prototype.attrTest.call(this,e)&&(Math.abs(e.rotation)>this.options.threshold||2&this.state)},e}(os),us=function(t){function e(e){var i;return void 0===e&&(e={}),(i=t.call(this,Pe({event:"press",pointers:1,time:251,threshold:9},e))||this)._timer=null,i._input=null,i}Me(e,t);var i=e.prototype;return i.getTouchAction=function(){return[qe]},i.process=function(t){var e=this,i=this.options,s=t.pointers.length===i.pointers,r=t.distance<i.threshold,o=t.deltaTime>i.time;if(this._input=t,!r||!s||t.eventType&(ri|oi)&&!o)this.reset();else if(t.eventType&si)this.reset(),this._timer=setTimeout((function(){e.state=8,e.tryEmit()}),i.time);else if(t.eventType&ri)return 8;return Zi},i.reset=function(){clearTimeout(this._timer)},i.emit=function(t){8===this.state&&(t&&t.eventType&ri?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=Ne(),this.manager.emit(this.options.event,this._input)))},e}(ss),ds={domEvents:!1,touchAction:We,enable:!0,inputTarget:null,inputClass:null,cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},gs=[[cs,{enable:!1}],[hs,{enable:!1},["rotate"]],[ls,{direction:ui}],[as,{direction:ui},["swipe"]],[rs],[rs,{event:"doubletap",taps:2},["tap"]],[us]];function ps(t,e){var i,s=t.element;s.style&&(mi(t.options.cssProps,(function(r,o){i=Fe(s.style,o),e?(t.oldCssProps[i]=s.style[i],s.style[i]=r):s.style[i]=t.oldCssProps[i]||""})),e||(t.oldCssProps={}))}var fs=function(){function t(t,e){var i,s=this;this.options=Le({},ds,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((i=this).options.inputClass||(Je?Ri:Ze?zi:Ke?Ki:Yi))(i,Ti),this.touchAction=new yi(this,this.options.touchAction),ps(this,!0),mi(this.options.recognizers,(function(t){var e=s.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])}),this)}var e=t.prototype;return e.set=function(t){return Le(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},e.stop=function(t){this.session.stopped=t?2:1},e.recognize=function(t){var e=this.session;if(!e.stopped){var i;this.touchAction.preventDefaults(t);var s=this.recognizers,r=e.curRecognizer;(!r||r&&8&r.state)&&(e.curRecognizer=null,r=null);for(var o=0;o<s.length;)i=s[o],2===e.stopped||r&&i!==r&&!i.canRecognizeWith(r)?i.reset():i.recognize(t),!r&&14&i.state&&(e.curRecognizer=i,r=i),o++}},e.get=function(t){if(t instanceof ss)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event===t)return e[i];return null},e.add=function(t){if(Ji(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},e.remove=function(t){if(Ji(t,"remove",this))return this;var e=this.get(t);if(t){var i=this.recognizers,s=Ii(i,e);-1!==s&&(i.splice(s,1),this.touchAction.update())}return this},e.on=function(t,e){if(void 0===t||void 0===e)return this;var i=this.handlers;return mi($i(t),(function(t){i[t]=i[t]||[],i[t].push(e)})),this},e.off=function(t,e){if(void 0===t)return this;var i=this.handlers;return mi($i(t),(function(t){e?i[t]&&i[t].splice(Ii(i[t],e),1):delete i[t]})),this},e.emit=function(t,e){this.options.domEvents&&function(t,e){var i=document.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var s=0;s<i.length;)i[s](e),s++}},e.destroy=function(){this.element&&ps(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null},t}(),ms={touchstart:si,touchmove:2,touchend:ri,touchcancel:oi},vs=function(t){function e(){var i,s=e.prototype;return s.evTarget="touchstart",s.evWin="touchstart touchmove touchend touchcancel",(i=t.apply(this,arguments)||this).started=!1,i}return Me(e,t),e.prototype.handler=function(t){var e=ms[t.type];if(e===si&&(this.started=!0),this.started){var i=_s.call(this,t,e);e&(ri|oi)&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:ti,srcEvent:t})}},e}(Oi);function _s(t,e){var i=Ni(t.touches),s=Ni(t.changedTouches);return e&(ri|oi)&&(i=Fi(i.concat(s),"identifier",!0)),[i,s]}function ys(t,e,i){var s="DEPRECATED METHOD: "+e+"\n"+i+" AT \n";return function(){var e=new Error("get-stack-trace"),i=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",r=window.console&&(window.console.warn||window.console.log);return r&&r.call(window.console,s,i),t.apply(this,arguments)}}var ws,bs=ys((function(t,e,i){for(var s=Object.keys(e),r=0;r<s.length;)(!i||i&&void 0===t[s[r]])&&(t[s[r]]=e[s[r]]),r++;return t}),"extend","Use `assign`."),Cs=ys((function(t,e){return bs(t,e,!0)}),"merge","Use `assign`.");function ks(t,e,i){var s,r=e.prototype;(s=t.prototype=Object.create(r)).constructor=t,s._super=r,i&&Le(s,i)}function Ss(t,e){return function(){return t.apply(e,arguments)}}(function(){var t=function(t,e){return void 0===e&&(e={}),new fs(t,Pe({recognizers:gs.concat()},e))};return t.VERSION="2.0.17-rc",t.DIRECTION_ALL=gi,t.DIRECTION_DOWN=ci,t.DIRECTION_LEFT=ai,t.DIRECTION_RIGHT=li,t.DIRECTION_UP=hi,t.DIRECTION_HORIZONTAL=ui,t.DIRECTION_VERTICAL=di,t.DIRECTION_NONE=ni,t.DIRECTION_DOWN=ci,t.INPUT_START=si,t.INPUT_MOVE=2,t.INPUT_END=ri,t.INPUT_CANCEL=oi,t.STATE_POSSIBLE=1,t.STATE_BEGAN=2,t.STATE_CHANGED=4,t.STATE_ENDED=8,t.STATE_RECOGNIZED=8,t.STATE_CANCELLED=16,t.STATE_FAILED=Zi,t.Manager=fs,t.Input=Oi,t.TouchAction=yi,t.TouchInput=zi,t.MouseInput=Yi,t.PointerEventInput=Ri,t.TouchMouseInput=Ki,t.SingleTouchInput=vs,t.Recognizer=ss,t.AttrRecognizer=os,t.Tap=rs,t.Pan=as,t.Swipe=ls,t.Pinch=hs,t.Rotate=cs,t.Press=us,t.on=Di,t.off=Pi,t.each=mi,t.merge=Cs,t.extend=bs,t.bindFn=Ss,t.assign=Le,t.inherit=ks,t.bindFn=Ss,t.prefixed=Fe,t.toArray=Ni,t.inArray=Ii,t.uniqueArray=Fi,t.splitStr=$i,t.boolOrFn=vi,t.hasParent=wi,t.addEventListeners=Di,t.removeEventListeners=Pi,t.defaults=Le({},ds,{preset:gs}),t})().defaults;let Es=ws=class extends at{constructor(){super(...arguments),this.disabled=!1,this.vertical=!1,this.reversed=!1}firstUpdated(t){super.firstUpdated(t),this.setupListeners(),this.setAttribute("role","switch"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}updated(t){super.updated(t),t.has("checked")&&this.setAttribute("aria-checked",this.checked?"true":"false")}_toggle(){this.disabled||(this.checked=!this.checked,Pt(this,"change"))}connectedCallback(){super.connectedCallback(),this.setupListeners()}disconnectedCallback(){super.disconnectedCallback(),this.destroyListeners()}setupListeners(){this.switch&&!this._mc&&(this._mc=new fs(this.switch,{touchAction:this.vertical?"pan-x":"pan-y"}),this._mc.add(new ls({direction:this.vertical?di:ui})),this._mc.add(new rs({event:"singletap"})),this.vertical?(this._mc.on("swipeup",(()=>{this.disabled||(this.checked=!!this.reversed,Pt(this,"change"))})),this._mc.on("swipedown",(()=>{this.disabled||(this.checked=!this.reversed,Pt(this,"change"))}))):(this._mc.on("swiperight",(()=>{this.disabled||(this.checked=!this.reversed,Pt(this,"change"))})),this._mc.on("swipeleft",(()=>{this.disabled||(this.checked=!!this.reversed,Pt(this,"change"))}))),this._mc.on("singletap",(()=>{this.disabled||this._toggle()})),this.addEventListener("keydown",this._keydown))}destroyListeners(){this._mc&&(this._mc.destroy(),this._mc=void 0),this.removeEventListener("keydown",this._keydown)}_keydown(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._toggle())}render(){return N`
        <div id="switch" class="switch">
          <div class="background"></div>
          <div class="button" aria-hidden="true">
            ${this.checked?N`<slot name="icon-on"></slot>`:N`<slot name="icon-off"></slot>`}
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
      `}};var xs;Es.ElementName="hue-big-switch"+Bt.ElementPostfix,t([mt({type:Boolean,reflect:!0})],Es.prototype,"disabled",void 0),t([mt({type:Boolean})],Es.prototype,"vertical",void 0),t([mt({type:Boolean})],Es.prototype,"reversed",void 0),t([mt({type:Boolean,reflect:!0})],Es.prototype,"checked",void 0),t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t,e){return(({finisher:t,descriptor:e})=>(i,s)=>{var r;if(void 0===s){const s=null!==(r=i.originalKey)&&void 0!==r?r:i.key,o=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(o.finisher=function(e){t(e,s)}),o}{const r=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(r,s)}})({descriptor:i=>{const s={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;s.get=function(){var i,s;return void 0===this[e]&&(this[e]=null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==s?s:null),this[e]}}return s}})}("#switch")],Es.prototype,"switch",void 0),Es=ws=t([gt(ws.ElementName)],Es);let As=xs=class extends se{constructor(){super("HueLightDetail"),this.lightContainer=null,this.hide(!0)}onLightContainerChanged(){this.lightContainer&&(this.lightContainer.features.isEmpty()?this.updateBigSwitchSize():(this._colorMarker.icon=this.lightContainer.getIcon()||ae.getIcon(1),this._modeSelector.showColor=this.lightContainer.features.color,this._modeSelector.showTemp=this.lightContainer.features.colorTemp,this.lightContainer.features.isOnlyBrightness()?(this._modeSelector.mode="brightness",this.toggleFullSizedBrightness(!0)):(this._modeSelector.selectPossibleMode(),this.toggleFullSizedBrightness(!1)),this.onLightContainerState(!0)))}toggleFullSizedBrightness(t){t&&(this._colorPicker.style.display="none"),this.updateBrightnessRollupSize(t),t||(this._colorPicker.style.display="")}onLightContainerState(t=!1){this.lightContainer&&(this.lightContainer.isColorModeColor()?(t&&(this._modeSelector.mode="color"),this.lightContainer.color&&(this._colorMarker.color=this.lightContainer.color)):this.lightContainer.isColorModeTemp()&&(t&&(this._modeSelector.mode="temp"),this.lightContainer.colorTemp&&(this._colorMarker.temp=this.lightContainer.colorTemp)),this._colorMarker.isOff=!this.lightContainer.isOn(),this._brightnessRollup.enabled=this.lightContainer.isOn(),t&&this._colorMarker.boing())}onColorChanged(t){this.lightContainer&&("temp"==t.detail.mode?this.lightContainer.colorTemp=t.detail.newTemp:"color"==t.detail.mode&&(this.lightContainer.color=t.detail.newColor))}show(){this._hideTimeout&&(clearTimeout(this._hideTimeout),this._hideTimeout=null),this.style.removeProperty("display"),setTimeout((()=>this.classList.add("visible"))),this.updateColorPickerSize(),this.parentElement&&(this.parentElement.style.overflow="visible"),this.dispatchEvent(new CustomEvent("show"))}hide(t=!1){this.classList.remove("visible"),t?this.style.display="none":this._hideTimeout=setTimeout((()=>{this._hideTimeout=null,this.style.display="none"}),300),this.parentElement&&(this.parentElement.style.overflow=""),this.dispatchEvent(new CustomEvent("hide"))}brightnessValueChanged(t){this.lightContainer&&(this.lightContainer.brightnessValue=t.detail.newValue)}updated(t){if(t.has("lightContainer")){const e=t.get("lightContainer");e&&e.unregisterOnPropertyChanged(this._id),this.lightContainer&&(this.lightContainer.registerOnPropertyChanged(this._id,(()=>{this.onLightContainerState(),this.requestUpdate()})),this.onLightContainerChanged())}}render(){var t;this._lastRenderedContainer=this.lightContainer||this._lastRenderedContainer;const e=1==(null===(t=this._lastRenderedContainer)||void 0===t?void 0:t.features.isEmpty());return Ht`
        <div>
            <ha-icon-button-prev class='back-button' @click=${()=>this.hide()}></ha-icon-button-prev>
            ${ve(e?this.createSwitchDetail():this.createFullDetail())}
        </div>`}onSwitch(t,e){const i=e.target;if(!i)return;i.checked?t.turnOn():t.turnOff()}createSwitchDetail(){const t=this._lastRenderedContainer,e={"--control-switch-on-color":Bt.WarmColor,"--control-switch-off-color":Bt.OffColor};return Ht`
            <${It(Es.ElementName)} class='light-switch'
                vertical
                reversed
                .checked=${t.isOn()}
                .showHandle=${!t.isUnavailable()}
                @change=${e=>this.onSwitch(t,e)}
                style=${zt(e)}
                .disabled=${t.isUnavailable()}
            >
                <ha-icon icon="mdi:power-on" slot="icon-on"></ha-icon>
                <ha-icon icon="mdi:power-off" slot="icon-off"></ha-icon>
            </${It(Es.ElementName)}>
        `}createFullDetail(){var t,e;const i=null!==(e=null===(t=this._lastRenderedContainer)||void 0===t?void 0:t.brightnessValue)&&void 0!==e?e:100;return Ht`
            <${It(xe.ElementName)} class='color-picker'
                mode='color'
                @change=${t=>this.onColorChanged(t)}
            >
            </${It(xe.ElementName)}>
            <${It(De.ElementName)} class='mode-selector'>
            </${It(De.ElementName)}>
            <${It(ke.ElementName)} class='brightness-rollup'
                width='${xs.rollupWidth}'
                height='${xs.rollupHeight}'
                heightOpened='${xs.rollupHeightOpen}'
                iconSize='${xs.rollupIconSize}'
                .value=${i}
                @change=${t=>this.brightnessValueChanged(t)}
            >
            </${It(ke.ElementName)}>
        `}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{this._colorPicker||(this._colorPicker=this.renderRoot.querySelector(".color-picker"),this._colorMarker=this._colorPicker.addMarker()),this._modeSelector||(this._modeSelector=this.renderRoot.querySelector(".mode-selector"),this._modeSelector.colorPicker=this._colorPicker),this._brightnessRollup||(this._brightnessRollup=this.renderRoot.querySelector(".brightness-rollup"))}))}updateColorPickerSize(){const t=this.renderRoot.querySelector(".color-picker");if(!t)return;const e=this.getPickerSize();if(!e)return;t.style.width=e+"px",t.style.height=e+"px";const i=this.clientHeight-e-(xs.colorPickerMarginTop+xs.colorPickerMarginBottom);if(i>0){const e=i/2;t.style.marginTop=xs.colorPickerMarginTop+e+"px",t.style.marginBottom=xs.colorPickerMarginBottom+e+"px"}else t.style.marginTop="",t.style.marginBottom=""}updateBrightnessRollupSize(t){const e=this.renderRoot.querySelector(".brightness-rollup");if(!e)return;const i=this.getPickerSize();i&&(e.classList.toggle("full-size",t),t?(e.style.width=i/3+"px",e.width=i/3,e.height=e.heightOpened=i,e.iconSize=xs.rollupBigIconSize):(e.style.width="",e.width=xs.rollupWidth,e.height=xs.rollupHeight,e.heightOpened=xs.rollupHeightOpen,e.iconSize=xs.rollupIconSize))}updateBigSwitchSize(){const t=this.renderRoot.querySelector(".light-switch");if(!t)return;const e=this.getPickerSize();if(!e)return;let i=e/3;i<60&&(i=60);const s=i+"px";t.style.width=s,t.style.setProperty("--control-switch-thickness",s),t.style.height=e+"px"}getPickerSize(){const t=Math.min(this.clientHeight,this.clientWidth);if(0==t)return null;return t-(xs.colorPickerMarginTop+xs.colorPickerMarginBottom)}};As.ElementName="hue-light-detail"+Bt.ElementPostfix,As.colorPickerMarginTop=40,As.colorPickerMarginBottom=20,As.rollupHeight=De.totalHeight,As.rollupWidth=De.totalHeight/2*3,As.rollupHeightOpen=200,As.rollupIconSize=24,As.rollupBigIconSize=30,As.selectorPadding=24,As.selectorBottom=0,As.styles=a`
    :host {
        margin-top: -30px;
        opacity: 0;
        transition:${n(Bt.TransitionDefault)};
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
        margin: ${xs.colorPickerMarginTop}px auto ${xs.colorPickerMarginBottom}px auto;
    }
    .mode-selector {
        position: absolute;
        bottom: ${xs.selectorBottom}px;
        left: ${xs.selectorPadding}px;
    }
    .brightness-rollup {
        position: absolute;
        bottom: ${xs.selectorBottom}px;
        right: ${xs.selectorPadding}px;
    }
    .brightness-rollup.full-size {
        position:static;
        display:block;
        margin: ${xs.colorPickerMarginTop-25}px auto ${xs.colorPickerMarginBottom}px auto;
    }
    .light-switch {
        margin: ${xs.colorPickerMarginTop}px auto ${xs.colorPickerMarginBottom}px auto;
    }
    `,t([mt()],As.prototype,"lightContainer",void 0),As=xs=t([gt(xs.ElementName)],As);const Ts=t=>{Bt.Dev&&console.log("[HueHistory] "+t)};class $s{constructor(t,e,i=null){this._type=i,this._id=(null!=i?i:"s")+"-"+ ++$s.lastGeneratedId,this._onEnter=t,this._onExit=e}get id(){return this._id}get type(){return this._type}get isEntered(){return this._isEntered}enter(){this._isEntered||(Ts("Entering "+this._id),this._onEnter(),this._isEntered=!0)}exit(){this._isEntered&&(Ts("Exiting "+this._id),this._onExit(),this._isEntered=!1)}getHistoryState(){return{isHue:!0,hueId:this.id}}}$s.lastGeneratedId=0;class Ds{constructor(){this._pointer=-1,this._stack=[]}logState(t){Ts(t),Ts("Stack: "+this._stack.length),this._pointer<0&&Ts("[x]");for(let t=0;t<this._stack.length;t++){const e=(t==this._pointer?"[x] ":"[ ] ")+this._stack[t].id;Ts(e)}}resetBeforeStart(){const t=[];for(let e=this._pointer;e>=0;e--)t.push(this._stack[this._pointer]);return this._pointer=-1,{toExit:t,toEnter:[],found:!0}}push(t){for(;this._stack.length>this._pointer+1;)this._stack.pop();this._stack.push(t),this._pointer=this._stack.length-1,this.logState("Pushed "+t.id)}replaceIfPossible(t){if(t.type&&this._pointer>=0){const e=this._stack[this._pointer];if(e.type==t.type)return this._stack[this._pointer]=t,this.logState("Replaced "+e.id+" with "+t.id),{replaced:!0,oldItem:e}}return Ts("Replace not possible for "+t.id),{replaced:!1,oldItem:void 0}}moveTo(t){let e=!1;const i=[],s=[];for(let s=this._pointer;s>=0;s--){const r=this._stack[s];if(r.id==t){this._pointer=s,e=!0;break}i.push(r)}if(e)return this.logState("Moved to "+t),{found:e,toExit:i,toEnter:s};i.length=0;for(let i=this._pointer+1;i<this._stack.length;i++){const r=this._stack[i];if(r.id==t&&(this._pointer=i,e=!0),s.push(r),e)break}return e?this.logState("Moved to "+t):(s.length=0,Ts("NOT moved to "+t)),{found:e,toExit:i,toEnter:s}}stepsBackBefore(t){for(let e=this._pointer;e>=0;e--){if(this._stack[e].id==t){const i=this._pointer-e+1;return this.logState(i+" steps back needed to go before "+t),i}}return null}isEmpty(){return 0==this._stack.length}}class Ps{static get instance(){return this._instance||(this._instance=new this)}constructor(){this._states=new Ds,window.addEventListener("popstate",(t=>this.resolvePopstate(t)))}resolvePopstate(t){const e=t.state;let i;1==(null==e?void 0:e.isHue)?(window.history.replaceState(e,""),i=this._states.moveTo(e.hueId)):i=this._states.resetBeforeStart(),i.found&&(i.toExit.forEach((t=>t.exit())),i.toEnter.forEach((t=>t.enter())))}addStep(t){var e;if(this._states.isEmpty()){const t=new $s(ne,ne,"startStep");this._states.push(t),window.history.replaceState(t.getHistoryState(),"")}const i=t.getHistoryState(),s=this._states.replaceIfPossible(t);s.replaced?(window.history.replaceState(i,""),t.position=null===(e=s.oldItem)||void 0===e?void 0:e.position):(this._states.push(t),window.history.pushState(i,""),t.position=window.history.length),t.enter()}goBefore(t){const e=this._states.stepsBackBefore(t.id);e&&window.history.go(-e)}}var Ms;let Os=Ms=class extends se{constructor(t,e){super("HueDialog"),this._isRendered=!1,this._backdropSet=!1,this._lightDetailElement=null,this._config=t,this._ctrl=e}onLightControllerChanged(t){"hass"==t&&this.requestUpdate()}onLightSelected(t){if(t.detail.isSelected){const e=()=>{this._selectedLight=t.detail.lightContainer,Ms.tileScrollTo(t.detail.tileElement),this._lightDetailElement&&(this._lightDetailElement.lightContainer=this._selectedLight,this._lightDetailElement.show())},i=()=>{var t;this._selectedLight=null,null===(t=this._lightDetailElement)||void 0===t||t.hide()};this._lightDetailHistoryStep=new $s(e,i,As.ElementName),Ps.instance.addStep(this._lightDetailHistoryStep)}else this._selectedLight==t.detail.lightContainer&&this.hideLightDetail()}hideLightDetail(){this._lightDetailHistoryStep&&Ps.instance.goBefore(this._lightDetailHistoryStep)}toggleUnderDetailControls(t){var e,i;this.renderRoot.querySelectorAll(".detail-hide").forEach((e=>{e.classList.toggle("hue-hidden",t)}));const s=null===(i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("ha-dialog"))||void 0===i?void 0:i.shadowRoot;if(s){const e=s.getElementById("content");e&&(t?(e.style.overflowY="hidden",e.scrollBy({top:e.scrollHeight,behavior:"smooth"})):e.style.overflowY="")}}afterSceneActivated(t){Ms.tileScrollTo(t.detail.tileElement)}static tileScrollTo(t){if(!t)return;const e=t.closest(".tile-scroller");if(null==e)throw Error("Parent tile-scroller not found.");const i=e.offsetLeft+e.scrollLeft,s=e.clientWidth+i,r=t.offsetLeft-10,o=t.offsetLeft+t.clientWidth+10,n=r<i;n!=o>s&&(n?e.scrollBy({left:r-i,behavior:"smooth"}):e.scrollBy({left:o-s,behavior:"smooth"}))}show(){if(this._isRendered)throw new Error("Already rendered!");this._historyStep=new $s((()=>this.showInternal()),(()=>this.close()),Ms.ElementName),Ps.instance.addStep(this._historyStep)}showInternal(){this._isRendered=!0;const t=this.getDialogElement();t&&(t.open=!0),document.body.appendChild(this),this._ctrl.registerOnPropertyChanged(this._id,(t=>this.onLightControllerChanged(t)))}close(){if(!this._isRendered)return;const t=this.getDialogElement();t?t.close():this.onDialogClose()}getDialogElement(){return this._isRendered&&this.renderRoot?this.renderRoot.querySelector("ha-dialog"):null}onDialogClose(){this._isRendered&&(this.remove(),this._ctrl.unregisterOnPropertyChanged(this._id),this._isRendered=!1),this._historyStep&&Ps.instance.goBefore(this._historyStep)}static get styles(){return[Ms.haStyleDialog,a`
    /* hiding controls when light detail is open */
    .detail-hide {
        transition:${n(Bt.TransitionDefault)};
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
        --hue-heading-text-color: var(--hue-text-color, ${n(Bt.ThemeDialogHeadingColorVar)});
        color:var(--hue-heading-text-color);
        background:var(--hue-background, ${n(Bt.ThemeCardBackgroundVar)} );
        box-shadow:var(--hue-box-shadow), 0px 5px 10px rgba(0,0,0,0.5);
        transition:${n(Bt.TransitionDefault)};

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
    .hue-heading ha-slider {
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
        color: ${n(Bt.ThemeSecondaryTextColorVar)};
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
        /*gap: ${Ms.tileGap}px;*/
        max-width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        padding: 0 ${Ms.haPadding}px;
        margin: 0 -${Ms.haPadding}px;
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
        gap: ${Ms.tileGap}px;
        margin-bottom: ${Ms.tileGap}px;
    }
    .tile-scroller .tiles:first-child{
        margin-top: ${Ms.headerMargin}px;
    }
    .tiles::after {
        /* Flex loosing right padding, when overflowing */
        content: '';
        min-width: ${Ms.haPadding-Ms.tileGap}px;
    }

    /* Light tiles */
    .tile-scroller.light-tiles{
        transition: ${n(Bt.TransitionDefault)};
        bottom: 100px;
    }

    @media all and (max-width: 450px), all and (max-height: 500px){
        .detail-active .tile-scroller.light-tiles{
            position: absolute;
            bottom: 30px;
            width: calc(100% - ${2*this.haPadding}px);
        }
    }
    `]}tryCreateBackdropAndLightDetail(t=!1){var e,i;if(!this._backdropSet||!this._lightDetailElement){const s=null===(i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("ha-dialog"))||void 0===i?void 0:i.shadowRoot,r=s&&s.querySelector(".mdc-dialog__surface");if(r){if(!this._backdropSet){const t=document.createElement("div");t.id="hue-backdrop",t.style.position="absolute",t.style.width="100%",t.style.height="100%",t.style.borderRadius="var(--ha-dialog-border-radius, 28px)",t.style.background="var(--hue-background)",t.style.transition=Bt.TransitionDefault;const e="linear-gradient(rgba(255, 255, 255, .25) 0%, transparent 70%)";t.style.mask=e,t.style.webkitMask=e,(t.style.mask||t.style.webkitMask)&&r.prepend(t),this._backdropSet=!0}if(!this._lightDetailElement){const t=new As;t.style.position="absolute",t.style.width="100%",t.style.height="calc(100% - 200px)",t.style.zIndex="2",t.addEventListener("show",(()=>{this.toggleUnderDetailControls(!0)})),t.addEventListener("hide",(()=>{this.toggleUnderDetailControls(!1),this.hideLightDetail()})),r.prepend(t),this._lightDetailElement=t}}else if(t)throw new Error("Cannot create backdrop and lightDetail. Surface not found.")}}updateStylesInner(t){var e,i;const s=this._config.getHueScreenBgColor();if(t){Wt.applyTheme(this,this._ctrl.hass.themes,this._config.theme),Wt.setDialogThemeStyles(this,"--hue-screen-background",s.isThemeColor()||this._config.getOffColor().isThemeColor());let t=null,e=null;s.isThemeColor()||(t=s,e=t.getForeground(Bt.DialogFgLightColor,Bt.DarkColor,120),this.style.setProperty("--hue-screen-background",t.toString()),this.style.setProperty("--primary-text-color",e.toString()))}const r=this.renderRoot.querySelector(".hue-heading");if(!r)throw new Error("Hue heading not found!");let o;if(this._config.wasOffColorSet){const t=this._config.getOffColor();o=t.isThemeColor()?null:new Nt([t.getBaseColor()])}else o=new Nt([new Vt(Bt.DialogOffColor)]);const n=qt.calculateBackAndForeground(this._ctrl,o,!0),a=qt.calculateDefaultShadow(r,this._ctrl,this._config.offShadow);this._config.hueBorders&&this.style.setProperty("--ha-dialog-border-radius",Bt.HueBorderRadius+"px"),this.style.setProperty("--hue-background",null!==(i=null===(e=n.background)||void 0===e?void 0:e.toString())&&void 0!==i?i:Bt.ThemeCardBackgroundVar),this.style.setProperty("--hue-box-shadow",a),null!=n.foreground?this.style.setProperty("--hue-text-color",n.foreground.toString()):this.style.removeProperty("--hue-text-color")}render(){this._isRendered=!0;const t=this._config.getTitle(this._ctrl).resolveToString(this._ctrl.hass),e=()=>{this.requestUpdate(),this.updateStylesInner(!1)};return Ht`
        <ha-dialog
          open
          @closed=${()=>this.onDialogClose()}
          .heading=${t}
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
              .title=${t}
            >
              ${t}
            </div>
            <div slot="actionItems">
              ${qt.createSwitch(this._ctrl,e)}
            </div>
            ${qt.createSlider(this._ctrl,this._config,e)}
          </ha-dialog-header>
          <div class="${dt({content:!0,"detail-active":!!this._selectedLight})}" tabindex="-1" dialogInitialFocus>
            <div class='header detail-hide'>
                <div class='title'>${this._config.resources.scenes}</div>
            </div>
            <div class='tile-scroller detail-hide'>
                <div class='tiles'>
                    ${this._config.scenes.map(((e,i)=>i%2==1?U:Ht`<${It(oe.ElementName)}
                            .cardTitle=${t}
                            .sceneConfig=${e}
                            @activated=${t=>this.afterSceneActivated(t)}
                            .hass=${this._ctrl.hass}>
                        </${It(oe.ElementName)}>`))}
                </div>
                <div class='tiles'>
                    ${this._config.scenes.map(((e,i)=>i%2==0?U:Ht`<${It(oe.ElementName)}
                            .cardTitle=${t}
                            .sceneConfig=${e}
                            @activated=${t=>this.afterSceneActivated(t)}
                            .hass=${this._ctrl.hass}>
                        </${It(oe.ElementName)}>`))}
                </div>
            </div>

            <div class='header detail-hide'>
                <div class='title'>${this._config.resources.lights}</div>
            </div>
            <div class='tile-scroller light-tiles'>
                <div class='tiles'>
                    ${this._ctrl.getLights().map((e=>Ht`<${It(he.ElementName)}
                            .cardTitle=${t}
                            .lightContainer=${e}
                            .isSelected=${this._selectedLight==e}
                            .isUnselected=${this._selectedLight&&this._selectedLight!=e}
                            @selected-change=${t=>this.onLightSelected(t)}
                            .defaultColor=${this._config.getDefaultColor()}
                            .hass=${this._ctrl.hass}>
                        </${It(he.ElementName)}>`))}
                </div>
            </div>
          </div>
        </ha-dialog>
        `}updated(t){super.updated(t),this.updateStylesInner(!1)}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{this.tryCreateBackdropAndLightDetail(!0),this.updateStylesInner(!0)}))}};Os.ElementName="hue-dialog"+Bt.ElementPostfix,Os.haStyleDialog=a`
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
  `,Os.headerMargin=8,Os.tileGap=10,Os.haPadding=24,t([vt()],Os.prototype,"_selectedLight",void 0),Os=Ms=t([gt(Ms.ElementName)],Os);class Is{constructor(t,e,i){this._config=t,this._ctrl=e,this._el=i}handleClick(){const t=this._ctrl.isOn();let e=t?this._config.onClickAction:this._config.offClickAction;const i=t?this._config.onClickData:this._config.offClickData;e==Jt.Default&&(e=t?this.resolveDefaultWhenOn():this.resolveDefaultWhenOff()),this.executeClickAction(e,i)}resolveDefaultWhenOn(){return Jt.HueScreen}resolveDefaultWhenOff(){return Jt.HueScreen}executeClickAction(t,e){switch(t){case Jt.NoAction:break;case Jt.TurnOn:this._ctrl.turnOn();break;case Jt.TurnOff:this._ctrl.turnOff();break;case Jt.MoreInfo:let i=e.getData("entity");i||(i=this._ctrl.isOn()?this._ctrl.getLitLights()[0].getEntityId():this._config.getEntities()[0]),Pt(this._el,"hass-more-info",{entityId:i});break;case Jt.Scene:const s=e.getData("scene");if(!s)throw new Error("No scene for click defined.");const r=new ie(s);r.hass=this._ctrl.hass,r.activate();break;case Jt.HueScreen:new Os(this._config,this._ctrl).show();break;case Jt.Default:throw new Error("Cannot execute Default action");default:throw new Error(`Cannot executed unwknow action ${t}.`)}}}var Ls;!function(t){t.unknown="unknown",t.onoff="onoff",t.brightness="brightness",t.color_temp="color_temp",t.hs="hs",t.xy="xy",t.rgb="rgb",t.rgbw="rgbw",t.rgbww="rgbww",t.white="white"}(Ls||(Ls={}));class Hs{constructor(t){this._attribute=null;const e=(t=t.trim()).indexOf("."),i=t.lastIndexOf(".");e!=i?(this._textOrEntity=t.substring(0,i),this._attribute=t.substring(i+1)):this._textOrEntity=t}resolveToString(t){if(t){const e=t.states[this._textOrEntity];if(!e)return"MISS["+this._textOrEntity+"]";if(this._attribute&&e.attributes){const t=e.attributes[this._attribute];if(t)return t.toString()}return null!=t.localize?function(t,e,i,s){var r=void 0!==s?s:e.state;if("unknown"===r||"unavailable"===r)return t("state.default."+r);if(function(t){return!!t.attributes.unit_of_measurement||!!t.attributes.state_class}(e)){if("monetary"===e.attributes.device_class)try{return $t(r,i,{style:"currency",currency:e.attributes.unit_of_measurement})}catch(t){}return $t(r,i)+(e.attributes.unit_of_measurement?" "+e.attributes.unit_of_measurement:"")}var o=function(t){return function(t){return t.substr(0,t.indexOf("."))}(t.entity_id)}(e);if("input_datetime"===o){var n;if(void 0===s)return e.attributes.has_date&&e.attributes.has_time?(n=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day,e.attributes.hour,e.attributes.minute),St(n,i)):e.attributes.has_date?(n=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day),bt(n,i)):e.attributes.has_time?((n=new Date).setHours(e.attributes.hour,e.attributes.minute),xt(n,i)):e.state;try{var a=s.split(" ");if(2===a.length)return St(new Date(a.join("T")),i);if(1===a.length){if(s.includes("-"))return bt(new Date(s+"T00:00"),i);if(s.includes(":")){var l=new Date;return xt(new Date(l.toISOString().split("T")[0]+"T"+s),i)}}return s}catch(t){return s}}return"humidifier"===o&&"on"===r&&e.attributes.humidity?e.attributes.humidity+" %":"counter"===o||"number"===o||"input_number"===o?$t(r,i):e.attributes.device_class&&t("component."+o+".state."+e.attributes.device_class+"."+r)||t("component."+o+".state._."+r)||r}(t.localize,e,t.locale):e.state}return""}}class Vs{constructor(t){this._text=t}resolveToString(t=null){return this._text}toString(){return this.resolveToString()}}class Bs{constructor(t){this._templateParts=Bs.parseTemplate(t)}resolveToString(t){if(1==this._templateParts.length)return this._templateParts[0].resolveToString(t);let e="";return this._templateParts.forEach((i=>{e+=i.resolveToString(t)})),e}static parseTemplate(t){const e=new Array;let i=0,s=!1;for(;i<t.length;){let r;if(s){if(r=t.indexOf("}}",i),r<0)break;const o=t.substring(i,r);e.push(new Hs(o)),s=!1}else{if(r=t.indexOf("{{",i),r<0)break;const o=t.substring(i,r);e.push(new Vs(o)),s=!0}i=r+2}if(s&&(i-=2),i<t.length){const s=t.substring(i);e.push(new Vs(s))}return e}}class Rs{constructor(t){if(this.brightness=!1,this.colorTemp=!1,this.color=!1,null!=t.attributes&&null!=t.attributes.supported_color_modes&&0!=t.attributes.supported_color_modes.length)for(const e of t.attributes.supported_color_modes)switch(e){case Ls.onoff:return;case Ls.brightness:return void(this.brightness=!0);case Ls.color_temp:this.brightness=!0,this.colorTemp=!0;break;case Ls.hs:case Ls.xy:case Ls.rgb:case Ls.rgbw:case Ls.rgbww:this.brightness=!0,this.color=!0}}isEmpty(){return!this.color&&!this.colorTemp&&!this.brightness}isOnlyBrightness(){return!this.color&&!this.colorTemp&&this.brightness}}class Ns{constructor(t){this._features=t}isEmpty(){return this._features().every((t=>t.isEmpty()))}isOnlyBrightness(){let t=!1;const e=this._features();for(let i=0;i<e.length;i++){const s=e[i];if(s.isOnlyBrightness())t=!0;else if(!s.isEmpty())return!1}return t}get brightness(){return this._features().some((t=>t.brightness))}get colorTemp(){return this._features().some((t=>t.colorTemp))}get color(){return this._features().some((t=>t.color))}}class Fs{constructor(t,e=!1){this.value=t,this.dontCache=e}}class Us{constructor(t){this._factories={},this._lastValues={},this._cacheInterval=t}registerProperty(t,e){this._factories[t]=e,delete this._lastValues[t]}setValue(t,e){this.ensureExists(t),this._lastValues[t]=this.createCacheItem(e)}getValue(t){this.ensureExists(t);const e=(new Date).getTime(),i=this._lastValues[t];if(i&&e-i.time<this._cacheInterval)return i.value;let s=this._factories[t](),r=!1;if(s instanceof Fs){const t=s;s=t.value,r=t.dontCache}return r||this.setValue(t,s),s}ensureExists(t){if(!this._factories[t])throw Error(`Property with name ${t} is not registered in TimeCache.`)}createCacheItem(t){return{value:t,time:(new Date).getTime()}}}class zs{constructor(){this._propertyChangedCallbacks={}}raisePropertyChanged(t){for(const e in this._propertyChangedCallbacks)this._propertyChangedCallbacks[e](t)}registerOnPropertyChanged(t,e){this._propertyChangedCallbacks[t]=e}unregisterOnPropertyChanged(t){delete this._propertyChangedCallbacks[t]}}class Ws extends zs{constructor(t){super(),Qt(t,"light"),this._entity_id=t,this.initTimeCache()}set hass(t){if(this._hass=t,!this._hass.states)throw new Error("No 'states' available on passed hass instance.");if(this._entity=this._hass.states[this._entity_id],!this._entity)throw new Error(`Entity '${this._entity_id}' not found in states.`);this._entityFeatures=new Rs(this._entity),this.raisePropertyChanged("hass")}getIcon(){return this._entity&&this._entity.attributes.icon}getTitle(){var t;return new Vs(null!==(t=this._entity.attributes.friendly_name)&&void 0!==t?t:this._entity_id)}getEntityId(){return this._entity_id}get features(){return this._entityFeatures}initTimeCache(){this._cache=new Us(Bt.TimeCacheInterval),this._cache.registerProperty("state",(()=>{var t;return new Fs(null===(t=this._entity)||void 0===t?void 0:t.state,this.getDontCacheState())})),this._cache.registerProperty("brightnessValue",(()=>new Fs(this.brightnessValueGetFactory(),this.getDontCacheBrightnessValue()))),this._cache.registerProperty("colorMode",(()=>this.colorModeGetFactory())),this._cache.registerProperty("colorTemp",(()=>this.colorTempGetFactory())),this._cache.registerProperty("color",(()=>this.colorGetFactory()))}getDontCacheState(){return!this._entity||"unavailable"==this._entity.state}getDontCacheBrightnessValue(){var t;return this.getDontCacheState()||null==(null===(t=this._entity.attributes)||void 0===t?void 0:t.brightness)}notifyTurnOn(){this._cache.setValue("state","on"),this._lastOnBrightnessValue&&this._cache.setValue("brightnessValue",this._lastOnBrightnessValue)}notifyTurnOff(){this._cache.setValue("state","off"),this._cache.setValue("brightnessValue",0)}notifyBrightnessValueChanged(t){t>0&&(this._lastOnBrightnessValue=t),this._cache.setValue("brightnessValue",t),this._cache.setValue("state",t>0?"on":"off")}notifyColorTempChanged(t){this._lastColorTemp=t,this._cache.setValue("colorTemp",t),this._cache.setValue("colorMode",Ls.color_temp)}notifyColorChanged(t,e){this._cache.setValue("colorTemp",null),this._cache.setValue("colorMode",e),this._cache.setValue("color",t)}isUnavailable(){return"unavailable"==this._cache.getValue("state")}isOn(){return"on"==this._cache.getValue("state")}isOff(){return!this.isOn()}turnOn(){this.toggle(!0)}turnOff(){this.toggle(!1)}toggle(t){this.isUnavailable()||(t?this.notifyTurnOn():this.notifyTurnOff(),this._hass.callService("light",t?"turn_on":"turn_off",{entity_id:this._entity_id}))}brightnessValueGetFactory(){var t;if(this.isOff())return 0;const e=this._entity.attributes,i=null!==(t=null==e?void 0:e.brightness)&&void 0!==t?t:255;return this._lastOnBrightnessValue=Math.round(i/255*100),this._lastOnBrightnessValue}get brightnessValue(){return this._cache.getValue("brightnessValue")}set brightnessValue(t){t<0?t=0:t>100&&(t=100),this.notifyBrightnessValueChanged(t);const e=Math.round(t/100*255);this._hass.callService("light","turn_on",{entity_id:this._entity_id,brightness:e})}colorModeGetFactory(){let t=Ls.unknown,e=!0;if(this.isOn()){const i=this._entity.attributes.color_mode;if(i&&(t=i,e=!1,this._lastColorTemp&&t==Ls.xy&&this._entity.attributes.xy_color)){const[e,i]=this._entity.attributes.xy_color;0===e&&0===i&&(t=Ls.color_temp)}}return new Fs(t,e)}get colorMode(){return this._cache.getValue("colorMode")}isColorModeColor(){return[Ls.hs,Ls.xy,Ls.rgb,Ls.rgbw,Ls.rgbww].includes(this.colorMode)}isColorModeTemp(){return this.colorMode==Ls.color_temp}colorTempGetFactory(){if(this.isOff()||!this.isColorModeTemp())return new Fs(null,!0);const t=this._entity.attributes;return(null==t?void 0:t.color_temp_kelvin)&&(this._lastColorTemp=null==t?void 0:t.color_temp_kelvin),new Fs(this._lastColorTemp,!this._lastColorTemp)}get colorTemp(){return this._cache.getValue("colorTemp")}set colorTemp(t){var e,i,s,r,o,n;if(!t)return;const a=null!==(s=null===(i=null===(e=this._entity)||void 0===e?void 0:e.attributes)||void 0===i?void 0:i.min_color_temp_kelvin)&&void 0!==s?s:2e3,l=null!==(n=null===(o=null===(r=this._entity)||void 0===r?void 0:r.attributes)||void 0===o?void 0:o.max_color_temp_kelvin)&&void 0!==n?n:6500;t<a?t=a:t>l&&(t=l),this.notifyColorTempChanged(t),this._hass.callService("light","turn_on",{entity_id:this._entity_id,kelvin:t})}colorGetFactory(){var t;if(this.isOff()||!this.isColorModeColor())return new Fs(null,!0);const e=null===(t=this._entity)||void 0===t?void 0:t.attributes;let i=null;if(e.hs_color){const[t,s]=e.hs_color;i=new Vt(t,s/100,1,1,"hsv")}else if(e.rgb_color){const[t,s,r]=e.rgb_color;i=new Vt(t,s,r)}return new Fs(i,!i)}get color(){return this._cache.getValue("color")}set color(t){if(!t)return;let e;const i={entity_id:this._entity_id};"hsv"==t.getOriginalMode()?(e=Ls.hs,i.hs_color=[t.getHue(),100*t.getSaturation()]):(e=Ls.rgb,i.rgb_color=[t.getRed(),t.getGreen(),t.getBlue()]),this.notifyColorChanged(t,e),this._hass.callService("light","turn_on",i)}getBackground(){let t,e,i=null;if(this.isColorModeTemp()&&(t=this.colorTemp)){const[e,s,r]=Vt.hueTempToRgb(t);i=new Vt(e,s,r)}else this.isColorModeColor()&&(e=this.color)&&(i=e);return i?(this._lastBackground=new Nt([i]),this._lastBackground):this._lastBackground?this._lastBackground:null}}class qs{static getLightContainer(t){let e=this._containers[t];return e||(e=new Ws(t),this._containers[t]=e),e}}qs._containers={};class Ys extends zs{constructor(t,e){if(super(),!t.length)throw new Error('No entity specified (use "entity" and/or "entities").');this._defaultColor=e,this._lights=t.map((t=>qs.getLightContainer(t))),this._lightsFeatures=new Ns((()=>this._lights.map((t=>t.features))))}get count(){return this._lights.length}getLitLights(){return this._lights.filter((t=>t.isOn()))}getLights(){return this._lights.map((t=>t))}set hass(t){this._hass=t,this._lights.forEach((e=>e.hass=t)),this.raisePropertyChanged("hass")}get hass(){return this._hass}isOn(){return this._lights.some((t=>t.isOn()))}isOff(){return this._lights.every((t=>t.isOff()))}isUnavailable(){return this._lights.every((t=>t.isUnavailable()))}turnOn(){this._lights.filter((t=>t.isOff())).forEach((t=>t.turnOn()))}turnOff(){this._lights.filter((t=>t.isOn())).forEach((t=>t.turnOff()))}get brightnessValue(){return this.valueGetFactory()}set brightnessValue(t){const e=this._lights.filter((t=>t.isOn()));if(1==e.length)return void(e[0].brightnessValue=t);if(0==e.length)return void this._lights.forEach((e=>e.brightnessValue=t));const i=this.brightnessValue,s=t-i,r=s>0?100-this.brightnessValue:this.brightnessValue,o=s/r;this._lights.filter((t=>t.isOn())).forEach((e=>{if(e.brightnessValue==i)return void(e.brightnessValue=t);const r=s>0?100-e.brightnessValue:e.brightnessValue,n=Math.round(r*o);let a=e.brightnessValue+n;a<1&&t>0&&(a=1),e.brightnessValue=a}))}valueGetFactory(){let t=0,e=0;if(this._lights.forEach((i=>{i.isOn()&&(e++,t+=i.brightnessValue)})),0==e)return 0;return t/e*1}getIcon(){return 1==this._lights.length?this._lights[0].getIcon()||ae.getIcon(1):ae.getIcon(this._lights.length)}getTitle(){let t="";for(let e=0;e<this._lights.length&&e<3;e++)e>0&&(t+=", "),t+=this._lights[e].getTitle();return this._lights.length>3&&(t+=", ..."),new Vs(t)}getBackground(){const t=this._lights.filter((t=>t.isOn())).map((t=>t.getBackground()||this._defaultColor));return 0==t.length?null:new Nt(t)}getEntityId(){throw Error("Cannot get entity id from LightController")}get features(){return this._lightsFeatures}}class js{constructor(t){t=t||{},this.scenes=t.scenes||"My scenes",this.lights=t.lights||"Lights"}}class Gs{constructor(t){this._scenesLoaded=!1,this.entity=t.entity,this.entities=t.entities,this.title=t.title,this.icon=t.icon,this.showSwitch=Gs.getBoolean(t.showSwitch,!0),this._scenes=Gs.getScenesArray(t.scenes),this.offClickAction=Gs.getClickAction(t.offClickAction),this.offClickData=new te(t.offClickData),this.onClickAction=Gs.getClickAction(t.onClickAction),this.onClickData=new te(t.onClickData),this.allowZero=Gs.getBoolean(t.allowZero,!1),this.theme=t.theme||Bt.ThemeDefault,this.defaultColor=t.defaultColor||Bt.DefaultColor,this.offColor=t.offColor||Bt.OffColor,this.wasOffColorSet=!!t.offColor,this.hueScreenBgColor=t.hueScreenBgColor||Bt.DialogBgColor,null!=t.disableOffShadow&&console.warn("[HueLikeLightCard] Use 'offShadow' (with inverted value) property instead of deprecated 'disableOffShadow'"),this.offShadow=Gs.getBoolean(t.offShadow,!Gs.getBoolean(t.disableOffShadow,!1)),this.hueBorders=Gs.getBoolean(t.hueBorders,!0),this.resources=new js(t.resources),this.style=t.style,this.card_mod=t.card_mod}static getBoolean(t,e){return null==t?e:!!t}static getClickAction(t){if(!t)return Jt.Default;let e="";for(const i in Jt){const s=Jt[i];if(t==s)return t;e+=`'${s}', `}throw new Error(`Click action '${t}' was not recognized. Allowed values are: ${e}`)}static getScenesArray(t){if(!t)return[];if(t.length>0){const e=new Array;for(let i=0;i<t.length;i++){const s=t[i],r=Gs.getScene(s,i);r&&e.push(r)}return e}return[]}static getScene(t,e){if("string"==typeof t)return new ee(t);if(!t.entity)throw new Error(`Scene on index ${e} is missing 'entity' attribute, which is required.`);const i=new ee(t.entity);return i.title=t.title,i.icon=t.icon,i.color=t.color,i.activation=t.activation,i.activationData=t.activationData,i}get scenes(){return this._scenes}get disableOffShadow(){return!this.offShadow}getTitle(t){return this.title?new Bs(this.title):t.getTitle()}getEntities(){const t=[];return this.entity&&t.push(this.entity),this.entities&&this.entities.forEach((e=>{"string"==typeof e?t.push(e):e.entity&&t.push(e.entity)})),t}getDefaultColor(){return Kt.getColor(this.defaultColor)}getOffColor(){return new Rt(this.offColor)}getHueScreenBgColor(){return new Rt(this.hueScreenBgColor)}get scenesLoaded(){return this._scenesLoaded}async tryLoadScenes(t){if(!t)throw new Error("Hass instance must be passed!");if(0==this.scenes.length&&!this._scenesLoaded){this._scenesLoaded=!0;try{let e=new Array;await Promise.all(this.getEntities().map((async i=>{const s=await t.connection.sendMessagePromise({type:"search/related",item_type:"entity",item_id:i});s&&s.area&&s.area.length&&e.push(s.area[0])}))),e=Xt(e);let i=new Array;await Promise.all(e.map((async e=>{const s=await t.connection.sendMessagePromise({type:"search/related",item_type:"area",item_id:e});s&&s.scene&&s.scene.forEach((t=>i.push(t)))}))),i=Xt(i),this._scenes=Gs.getScenesArray(i)}catch(t){console.error("Cannot load scenes from HA."),console.error(t)}}}}class Qs{constructor(t){"string"==typeof t?this._message=t:t instanceof Error?(this._message=t.message,this._stack=t.stack):this._message=(null==t?void 0:t.toString())||"UNKNOWN ERROR"}get message(){return this._message}get stack(){return this._stack||""}}console.info(`%cHUE-%cLIKE%c LIGHT%c CARD %c${Bt.Version}`,"font-weight:bold;color:white;background:#0046FF","font-weight:bold;color:white;background:#9E00FF","font-weight:bold;color:white;background:#FF00F3","font-weight:bold;color:white;background:#FF0032","font-weight:bold;color:white;background:#FF8B00"),window.customCards=window.customCards||[],window.customCards.push({type:Bt.CardElementName,name:Bt.CardName,description:Bt.CardDescription});let Xs=class extends at{constructor(){super(...arguments),this._switchColorDetected=!1}set hass(t){if(!t)return;const e=this._hass;this._hass=t,this.trySetHassWhereNeeded(),this.requestUpdate(Gt(this,"hass"),e)}get hass(){return this._hass}catchErrors(t){try{this._error=void 0,t()}catch(t){throw this._error=new Qs(t),this.requestUpdate(),t}}async setConfig(t){this.catchErrors((()=>{const e=this._config;this._config=new Gs(t),this._ctrl=new Ys(this._config.getEntities(),this._config.getDefaultColor()),this._clickHandler=new Is(this._config,this._ctrl,this);const i=this._config.getOffColor();i.isThemeColor()?this._offBackground=null:this._offBackground=new Nt([i.getBaseColor()]),this._error=void 0,this.trySetHassWhereNeeded(),this.requestUpdate("_config",e)}))}trySetHassWhereNeeded(){if(!this.hass)return;const t=this.hass;this.catchErrors((()=>{this._config&&!this._config.scenesLoaded&&this._config.tryLoadScenes(t),this._ctrl&&(this._ctrl.hass=t)}))}getCardSize(){return 3}cardClicked(){this._clickHandler&&this._clickHandler.handleClick(),this.updateStylesInner()}updated(t){if(super.updated(t),this.updateStylesInner(),!this._config||!this.hass)return;const e=t.get("hass"),i=t.get("_config");e&&i&&e.themes===this.hass.themes&&i.theme===this._config.theme||Wt.applyTheme(this,this.hass.themes,this._config.theme)&&this.updateStylesInner(!0)}updateStylesInner(t=!1){var e,i,s,r;if(!this._config||!this._ctrl)return;this._switchColorDetected||(this._config.showSwitch&&Wt.detectSwitchColors(this),this._switchColorDetected=!0);const o=this.renderRoot.querySelector("ha-card");if(!this._config.hueBorders&&(null==this._haShadow||t)){const t=document.createElement("ha-card");document.body.appendChild(t);const e=getComputedStyle(t);this._haShadow=e.boxShadow,t.remove(),"none"==this._haShadow&&(null==o?this._haShadow=null:o.classList.add("new-borders")),this.style.setProperty("--ha-default-shadow",this._haShadow)}null==this._offBackground&&Wt.detectThemeCardBackground(this,t);const n=qt.calculateBackAndForeground(this._ctrl,this._offBackground),a=qt.calculateDefaultShadow(o,this._ctrl,this._config.offShadow);this.style.setProperty("--hue-background",null!==(i=null===(e=n.background)||void 0===e?void 0:e.toString())&&void 0!==i?i:Bt.ThemeCardBackgroundVar),this.style.setProperty("--hue-text-color",null!==(r=null===(s=n.foreground)||void 0===s?void 0:s.toString())&&void 0!==r?r:Bt.ThemeSecondaryTextColorVar),this.style.setProperty("--ha-card-box-shadow",a),this.style.setProperty("--hue-box-shadow",a)}render(){if(this._error)return N`<ha-alert alert-type="error" .title=${this._error.message}>
                ${this._error.stack?N`<pre>${this._error.stack}</pre>`:U}
            </ha-alert>`;if(!this._config||!this._ctrl||!this._hass)return U;const t=this._config.getTitle(this._ctrl).resolveToString(this._hass),e=this._config.showSwitch,i={"no-switch":!e},s={"state-on":this._ctrl.isOn(),"state-off":this._ctrl.isOff(),"state-unavailable":this._ctrl.isUnavailable(),"hue-borders":this._config.hueBorders},r=()=>{this.requestUpdate(),this.updateStylesInner()};return N`<ha-card class="${dt(s)}">
            <div class="tap-area" @click="${()=>this.cardClicked()}">
                <ha-icon icon="${this._config.icon||this._ctrl.getIcon()}"></ha-icon>
                <h2 class="${dt(i)}">${t}</h2>
            </div>
            ${e?qt.createSwitch(this._ctrl,r):U}

            ${qt.createSlider(this._ctrl,this._config,r)}
        </ha-card>`}connectedCallback(){super.connectedCallback(),this.updateStylesInner()}};Xs.styles=a`
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
        border-radius:${Bt.HueBorderRadius}px;
        box-shadow:var(--hue-box-shadow), ${n(Bt.HueShadow)};
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
        transition:${n(Bt.TransitionDefault)};
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
        transition:${n(Bt.TransitionDefault)};
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
    ha-alert{
        display:flex;
        overflow:auto;
    }
    `,Xs=t([gt(Bt.CardElementName)],Xs);export{Xs as HueLikeLightCard};
