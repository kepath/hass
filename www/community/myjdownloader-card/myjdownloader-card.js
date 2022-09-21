function e(e,t,s,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,s,i);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(o<3?n(a):o>3?n(t,s,a):n(t,s))||a);return o>3&&a&&Object.defineProperty(t,s,a),a
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const t=window,s=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;class o{constructor(e,t,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(s&&void 0===e){const s=void 0!==t&&1===t.length;s&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(t,e))}return e}toString(){return this.cssText}}const a=(e,...t)=>{const s=1===e.length?e[0]:t.reduce(((t,s,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1]),e[0]);return new o(s,e,i)},r=(e,i)=>{s?e.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):i.forEach((s=>{const i=document.createElement("style"),n=t.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=s.cssText,e.appendChild(i)}))},l=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,i))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var d;const c=window,h=c.trustedTypes,u=h?h.emptyScript:"",p=c.reactiveElementPolyfillSupport,_={toAttribute(e,t){switch(t){case Boolean:e=e?u:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},m=(e,t)=>t!==e&&(t==t||e==e),v={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:m};class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;null!==(t=this.h)&&void 0!==t||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,s)=>{const i=this._$Ep(s,t);void 0!==i&&(this._$Ev.set(i,s),e.push(i))})),e}static createProperty(e,t=v){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const s="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,s,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdate(e,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of t)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Ep(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,s;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(s=e.hostConnected)||void 0===s||s.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return r(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t,s=v){var i;const n=this.constructor._$Ep(e,s);if(void 0!==n&&!0===s.reflect){const o=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:_).toAttribute(t,s.type);this._$El=e,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(e,t){var s;const i=this.constructor,n=i._$Ev.get(e);if(void 0!==n&&this._$El!==n){const e=i.getPropertyOptions(n),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(s=e.converter)||void 0===s?void 0:s.fromAttribute)?e.converter:_;this._$El=n,this[n]=o.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,s){let i=!0;void 0!==e&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||m)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(s)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:g}),(null!==(d=c.reactiveElementVersions)&&void 0!==d?d:c.reactiveElementVersions=[]).push("1.4.1");const $=window,y=$.trustedTypes,w=y?y.createPolicy("lit-html",{createHTML:e=>e}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,A="?"+b,E=`<${A}>`,S=document,k=(e="")=>S.createComment(e),C=e=>null===e||"object"!=typeof e&&"function"!=typeof e,x=Array.isArray,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,O=/>/g,U=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),H=/'/g,T=/"/g,R=/^(?:script|style|textarea|title)$/i,L=(e=>(t,...s)=>({_$litType$:e,strings:t,values:s}))(1),z=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),N=new WeakMap,M=S.createTreeWalker(S,129,null,!1),j=(e,t)=>{const s=e.length-1,i=[];let n,o=2===t?"<svg>":"",a=P;for(let t=0;t<s;t++){const s=e[t];let r,l,d=-1,c=0;for(;c<s.length&&(a.lastIndex=c,l=a.exec(s),null!==l);)c=a.lastIndex,a===P?"!--"===l[1]?a=I:void 0!==l[1]?a=O:void 0!==l[2]?(R.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=U):void 0!==l[3]&&(a=U):a===U?">"===l[0]?(a=null!=n?n:P,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,r=l[1],a=void 0===l[3]?U:'"'===l[3]?T:H):a===T||a===H?a=U:a===I||a===O?a=P:(a=U,n=void 0);const h=a===U&&e[t+1].startsWith("/>")?" ":"";o+=a===P?s+E:d>=0?(i.push(r),s.slice(0,d)+"$lit$"+s.slice(d)+b+h):s+b+(-2===d?(i.push(void 0),t):h)}const r=o+(e[s]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(r):r,i]};class B{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,o=0;const a=e.length-1,r=this.parts,[l,d]=j(e,t);if(this.el=B.createElement(l,s),M.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=M.nextNode())&&r.length<a;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(b)){const s=d[o++];if(e.push(t),void 0!==s){const e=i.getAttribute(s.toLowerCase()+"$lit$").split(b),t=/([.?@])?(.*)/.exec(s);r.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?K:"?"===t[1]?Z:"@"===t[1]?G:J})}else r.push({type:6,index:n})}for(const t of e)i.removeAttribute(t)}if(R.test(i.tagName)){const e=i.textContent.split(b),t=e.length-1;if(t>0){i.textContent=y?y.emptyScript:"";for(let s=0;s<t;s++)i.append(e[s],k()),M.nextNode(),r.push({type:2,index:++n});i.append(e[t],k())}}}else if(8===i.nodeType)if(i.data===A)r.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(b,e+1));)r.push({type:7,index:n}),e+=b.length-1}n++}}static createElement(e,t){const s=S.createElement("template");return s.innerHTML=e,s}}function q(e,t,s=e,i){var n,o,a,r;if(t===z)return t;let l=void 0!==i?null===(n=s._$Cl)||void 0===n?void 0:n[i]:s._$Cu;const d=C(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,s,i)),void 0!==i?(null!==(a=(r=s)._$Cl)&&void 0!==a?a:r._$Cl=[])[i]=l:s._$Cu=l),void 0!==l&&(t=q(e,l._$AS(e,t.values),l,i)),t}class F{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:s},parts:i}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:S).importNode(s,!0);M.currentNode=n;let o=M.nextNode(),a=0,r=0,l=i[0];for(;void 0!==l;){if(a===l.index){let t;2===l.type?t=new V(o,o.nextSibling,this,e):1===l.type?t=new l.ctor(o,l.name,l.strings,this,e):6===l.type&&(t=new Q(o,this,e)),this.v.push(t),l=i[++r]}a!==(null==l?void 0:l.index)&&(o=M.nextNode(),a++)}return n}m(e){let t=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class V{constructor(e,t,s,i){var n;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$C_=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$C_}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),C(e)?e===D||null==e||""===e?(this._$AH!==D&&this._$AR(),this._$AH=D):e!==this._$AH&&e!==z&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):(e=>x(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.O(e):this.$(e)}S(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}$(e){this._$AH!==D&&C(this._$AH)?this._$AA.nextSibling.data=e:this.k(S.createTextNode(e)),this._$AH=e}T(e){var t;const{values:s,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=B.createElement(i.h,this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.m(s);else{const e=new F(n,this),t=e.p(this.options);e.m(s),this.k(t),this._$AH=e}}_$AC(e){let t=N.get(e.strings);return void 0===t&&N.set(e.strings,t=new B(e)),t}O(e){x(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new V(this.S(k()),this.S(k()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$C_=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class J{constructor(e,t,s,i,n){this.type=1,this._$AH=D,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,i){const n=this.strings;let o=!1;if(void 0===n)e=q(this,e,t,0),o=!C(e)||e!==this._$AH&&e!==z,o&&(this._$AH=e);else{const i=e;let a,r;for(e=n[0],a=0;a<n.length-1;a++)r=q(this,i[s+a],t,a),r===z&&(r=this._$AH[a]),o||(o=!C(r)||r!==this._$AH[a]),r===D?e=D:e!==D&&(e+=(null!=r?r:"")+n[a+1]),this._$AH[a]=r}o&&!i&&this.P(e)}P(e){e===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class K extends J{constructor(){super(...arguments),this.type=3}P(e){this.element[this.name]=e===D?void 0:e}}const W=y?y.emptyScript:"";class Z extends J{constructor(){super(...arguments),this.type=4}P(e){e&&e!==D?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class G extends J{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){var s;if((e=null!==(s=q(this,e,t,0))&&void 0!==s?s:D)===z)return;const i=this._$AH,n=e===D&&i!==D||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==D&&(i===D||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==s?s:this.element,e):this._$AH.handleEvent(e)}}class Q{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}}const X=$.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Y,ee;null==X||X(B,V),(null!==(f=$.litHtmlVersions)&&void 0!==f?f:$.litHtmlVersions=[]).push("2.3.1");class te extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const s=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=s.firstChild),s}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,s)=>{var i,n;const o=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:t;let a=o._$litPart$;if(void 0===a){const e=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=a=new V(t.insertBefore(k(),e),e,void 0,null!=s?s:{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return z}}te.finalized=!0,te._$litElement$=!0,null===(Y=globalThis.litElementHydrateSupport)||void 0===Y||Y.call(globalThis,{LitElement:te});const se=globalThis.litElementPolyfillSupport;null==se||se({LitElement:te}),(null!==(ee=globalThis.litElementVersions)&&void 0!==ee?ee:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ie=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:s,elements:i}=t;return{kind:s,elements:i,finisher(t){customElements.define(e,t)}}})(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ne=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(s){s.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}};function oe(e){return(t,s)=>void 0!==s?((e,t,s)=>{t.constructor.createProperty(s,e)})(e,t,s):ne(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ae(e){return oe({...e,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var re,le,de;null===(re=window.HTMLSlotElement)||void 0===re||re.prototype.assignedElements,function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(le||(le={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(de||(de={}));var ce={version:"Version"},he={invalid:"Invalid configuration",wrong_display_mode:"display_mode accepts only 'compact' and 'full' as value",header_title:"Title",sensor_name:"Sensor name",display_mode:"Display mode",display_mode_label:{full:"Full",compact:"Compact"},default_instance:"Default instance",hide_title:"Hidle title",hide_instance:"Hide instance selector",hide_speed_limit:"Hide speed limit button",hide_playpause:"Hide play/pause button"},ue={no_sensor:"No sensor",stopped:"Stopped",downloading:"Downloading",finished:"Finished",running:"Running",pause:"Paused",idle:"Idle"},pe={no_downloads:"No downloads"},_e={speed_limit:"Speed Limit",play_all:"Play all",pause_all:"Pause all"},me={common:ce,config:he,status:ue,downloads:pe,actions:_e},ve={version:"Versión"},ge={invalid:"Configuración inválida",wrong_display_mode:"display_mode solo acepta 'compact' y 'full' como valor",header_title:"Título",sensor_name:"Nombre sensor",display_mode:"Modo de visualización",display_mode_label:{full:"Completo",compact:"Compacto"},default_instance:"Instancia por defecto",hide_title:"Ocultar título",hide_instance:"Ocultar selector de instancias",hide_speed_limit:"Ocultar botón límite velocidad",hide_playpause:"Ocultar botón Reanudar/Pausar"},fe={no_sensor:"Sin sensor",stopped:"Detenido",downloading:"Descargando",finished:"Terminado",running:"En curso",pause:"Pausado",idle:"Inactivo"},$e={no_downloads:"Sin descargas"},ye={speed_limit:"Límite velocidad",play_all:"Reanudar todo",pause_all:"Pausar todo"},we={common:ve,config:ge,status:fe,downloads:$e,actions:ye};const be={en:Object.freeze({__proto__:null,common:ce,config:he,status:ue,downloads:pe,actions:_e,default:me}),es:Object.freeze({__proto__:null,common:ve,config:ge,status:fe,downloads:$e,actions:ye,default:we})};function Ae(e,t="",s=""){let i,n=function(){var e;let t=null===(e=localStorage.getItem("selectedLanguage"))||void 0===e?void 0:e.replace(/['"]+/g,"").replace("-","_");if(null==t||"null"===t){const e=document.querySelector("home-assistant").hass;t=e.selectedLanguage||e.language||"en"}return t}();try{i=e.split(".").reduce(((e,t)=>e[t]),be[n])}catch(t){i=e.split(".").reduce(((e,t)=>e[t]),be.en)}return void 0===i&&(i=e.split(".").reduce(((e,t)=>e[t]),be.en)),""!==t&&""!==s&&(i=i.replace(t,s)),i||e}console.info(`%c  MyJDownloader-Card \n%c  ${Ae("common.version")} 1.0.0`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"myjdownloader-card",name:"MyJDownloader Card",preview:!0,description:"This Lovelace Custom card displays downloads information provided by the MyJDownloader Integration."});let Ee=class extends te{static async getConfigElement(){return await Promise.resolve().then((function(){return Ce})),document.createElement("myjdownloader-card-editor")}static getStubConfig(){return{}}set selectedInstance(e){this._selectedInstance=e,this._selectedInstanceEntity=null==e?e:function(e,t="_"){const s="àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;",i=`aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz${t}${t}${t}${t}${t}${t}`,n=new RegExp(s.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,t).replace(n,(e=>i.charAt(s.indexOf(e)))).replace(/&/g,`${t}and${t}`).replace(/[^\w-]+/g,t).replace(/-/g,t).replace(new RegExp(`(${t})\\1+`,"g"),"$1").replace(new RegExp(`^${t}+`),"").replace(new RegExp(`${t}+$`),"")}(e)}get selectedInstance(){return this._selectedInstance}get selectedInstanceEntity(){return this._selectedInstanceEntity}setConfig(e){if(!e)throw new Error(Ae("common.invalid_configuration"));if(e.display_mode&&!["compact","full"].includes(e.display_mode))throw new Error(Ae("config.wrong_display_mode"));e.test_gui&&function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null}().setEditMode(!0),this.config=Object.assign({header_title:"MyJDownloader",sensor_name:"jdownloader",display_mode:"compact",default_instance:void 0,hide_title:!1,hide_instance:!1,hide_speed_limit:!1,hide_playpause:!1},e),null!=this.config.default_instance&&(this.selectedInstance=this.config.default_instance)}shouldUpdate(e){return!!this.config&&function(e,t,s){if(t.has("config")||s)return!0;if(e.config.entity){var i=t.get("hass");return!i||i.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}(this,e,!1)}render(){if(!this.config||!this.hass)return L``;null==this.selectedInstance&&(this.selectedInstance=this._getInstances()[0]);const e=this._getDownloads();return L`
      <ha-card>
        <div class="card-header">
          ${this.renderCardHeader()}
          ${this.renderInstanceSelect()}
        </div>
        <div>
          <div id="toolbar-container">
            ${this.renderToolbar()}
          </div>
          <div id="downloads">
            ${Object.keys(e).length>0?"compact"===this.config.display_mode?L`
                      <div class="mode-compact">
                        ${Object.entries(e).map((([e,t])=>this.renderPackage(e,t)))}
                      </div>`:L`
                      <div class="mode-full">
                        ${Object.entries(e).map((([e,t])=>this.renderPackageFull(e,t)))}
                      </div>`:L`
                  <div class="no-downloads">${Ae("downloads.no_downloads")}</div>`}
          </div>
        </div>
      </ha-card>
    `}_getDownloads(){const e={};if(void 0!==this.hass.states[`sensor.${this.config.sensor_name}_${this.selectedInstanceEntity}_packages`]){this.hass.states[`sensor.${this.config.sensor_name}_${this.selectedInstanceEntity}_packages`].attributes.packages.forEach((t=>{e[t.uuid]={activeTask:t.activeTask,bytesLoaded:t.bytesLoaded,bytesTotal:t.bytesTotal,percent:100*t.bytesLoaded/t.bytesTotal||0,childCount:t.childCount,comment:t.comment,downloadPassword:t.downloadPassword,enabled:t.enabled,eta:t.eta,finished:t.finished,hosts:t.hosts,name:t.name,priority:t.priority,running:t.running,saveTo:t.saveTo,speed:t.speed,status:t.status,statusIconKey:t.statusIconKey,links:[]}}));this.hass.states[`sensor.${this.config.sensor_name}_${this.selectedInstanceEntity}_links`].attributes.links.forEach((t=>{e[t.packageUUID].links.push({addedDate:t.addedDate,bytesLoaded:t.bytesLoaded,bytesTotal:t.bytesTotal,percent:100*t.bytesLoaded/t.bytesTotal||0,comment:t.comment,downloadPassword:t.downloadPassword,enabled:t.enabled,eta:t.eta,extractionStatus:t.extractionStatus,finished:t.finished,finishedDate:t.finishedDate,host:t.host,name:t.name,packageUUID:t.packageUUID,priority:t.priority,running:t.running,skipped:t.skipped,speed:t.speed,status:t.status,statusIconKey:t.statusIconKey,url:t.url,uuid:t.uuid})}))}return e}_getStats(){const e=`sensor.${this.config.sensor_name}_${this._selectedInstanceEntity}`;return void 0!==this.hass.states[`${e}_download_speed`]?{down_speed:this.hass.states[`${e}_download_speed`].state,down_unit:this.hass.states[`${e}_download_speed`].attributes.unit_of_measurement,status:this.hass.states[`${e}_status`].state}:{down_speed:void 0,down_unit:"B/s",status:"no_sensor"}}_getInstances(){return void 0!==this.hass.states[`sensor.${this.config.sensor_name}s_online`]?this.hass.states[`sensor.${this.config.sensor_name}s_online`].attributes.jdownloaders:[]}_toggleLimit(){this.hass.callService("switch","toggle",{entity_id:`switch.${this.config.sensor_name}_${this._selectedInstanceEntity}_limit`})}_toggleInstance(e){this.selectedInstance=e.target.value}_playPause(){this.hass.callService("switch","toggle",{entity_id:`switch.${this.config.sensor_name}_${this._selectedInstanceEntity}_pause`})}_downloadStatus(e){return e.finished?"finished":e.enabled?"downloading":"stopped"}renderToolbar(){const e=this._getStats();return L`
      <div id="toolbar">
        <div class="status titleitem c-${e.status}">
          <p>${Ae(`status.${e.status}`)}
          <p>
        </div>
        <div class="titleitem">
          <ha-icon icon="mdi:download" class="down down-color title-item-icon"></ha-icon>
          <span>${e.down_speed} ${e.down_unit}</span>
        </div>
        ${this.renderLimitButton()}
        ${this.renderPlayPauseButton()}
      </div>
    `}renderPackage(e,t){return L`
      <div class="package-container ${e}">
        <div class="progressbar">
          <div class="${this._downloadStatus(t)} progressin"
               style="width: ${t.percent}%"></div>
          <ha-icon class="download-icon" icon="mdi:package-variant"></ha-icon>
          <div class="name"><a title="${t.name}">${t.name}</a></div>
          <!-- Using <a /> just as a quick hack to display a tooltip, improve in future release -->
          <div class="percent">${t.percent.toFixed(2)}%</div>
        </div>
        <div class="links">
          ${t.links.map((e=>this.renderLink(e)))}
        </div>
      </div>
    `}renderLink(e){return L`
      <div class="progressbar">
        <div class="${this._downloadStatus(e)} progressin"
             style="width: ${e.percent}%"></div>
        <ha-icon class="download-icon" icon="mdi:download"></ha-icon>
        <div class="name"><a title="${e.name}">${e.name}</a></div>
        <div class="percent">${e.percent.toFixed(2)}%</div>
      </div>
    `}renderPackageFull(e,t){return L`
      <div class="package-container ${e}">
        <div class="package">
          <div class="package_name">
            <ha-icon class="download-icon" icon="mdi:package-variant"></ha-icon>
            <a title="${t.name}">${t.name}</a></div>
          <div class="package_status">${Ae(`status.${this._downloadStatus(t)}`)}</div>
          <div class="progressbar">
            <div class="${this._downloadStatus(t)} progressin"
                 style="width: ${t.percent}%">
            </div>
          </div>
          <div class="package_details">${t.percent.toFixed(2)} %</div>
        </div>
        <div class="links">
          ${t.links.map((e=>this.renderLinkFull(e)))}
        </div>
      </div>
    `}renderLinkFull(e){return L`
      <div class="link">
        <div class="link_name">
          <ha-icon class="download-icon" icon="mdi:download"></ha-icon>
          <a title="${e.name}">${e.name}</a></div>
        <div class="link_status">${Ae(`status.${this._downloadStatus(e)}`)}</div>
        <div class="progressbar">
          <div class="${this._downloadStatus(e)} progressin" style="width: ${e.percent}%">
          </div>
        </div>
        <div class="link_details">${e.percent.toFixed(2)} %</div>
      </div>
    `}renderLimitButton(){if(this.config.hide_speed_limit)return L``;if(void 0===this.hass.states[`switch.${this.config.sensor_name}_${this._selectedInstanceEntity}_limit`])return L``;const e=this.hass.states[`switch.${this.config.sensor_name}_${this._selectedInstanceEntity}_limit`].state;return L`
      <div class="titleitem">
        <ha-icon-button
            class="speed_limit_${e}"
            @click="${this._toggleLimit}"
            title="${Ae("actions.speed_limit")}"
            id="speed_limit">
          <ha-icon class="title-item-button" icon="mdi:download-lock"></ha-icon>
        </ha-icon-button>
      </div>
    `}renderPlayPauseButton(){if(this.config.hide_playpause)return L``;if(void 0===this.hass.states[`switch.${this.config.sensor_name}_${this._selectedInstanceEntity}_pause`])return L``;const e=this.hass.states[`switch.${this.config.sensor_name}_${this._selectedInstanceEntity}_pause`].state,t="on"===e?"play":"pause";return L`
      <div class="titleitem">
        <ha-icon-button
            class="${"on"===e?"pause":"play"}_all"
            @click="${this._playPause}"
            title="${Ae(`actions.${t}_all`)}"
            id="play-pause">
          <ha-icon class="title-item-button" icon="mdi:${t}"></ha-icon>
        </ha-icon-button>
      </div>
    `}renderCardHeader(){return this.config.hide_title?L``:L`
      <div class="header-title">${this.config.header_title}</div>`}renderInstanceSelect(){return this.config.hide_instance?L``:L`
      <ha-select
          class="instance-dropdown"
          @selected=${this._toggleInstance}
          .value=${this.selectedInstance}>
        ${this._getInstances().map((e=>L`
              <mwc-list-item .value=${e}>${this.selectedInstance}</mwc-list-item>`))}
      </ha-select>
    `}getCardSize(){return 1}static get styles(){return a`
      /* Header */

      .card-header {
        display: flex;
      }

      .header-title {
        margin-right: 25px;
      }

      .instance-dropdown {
        flex-grow: 1;
      }

      /* Downloads */

      #downloads {
        margin-top: 0.4em;
        padding-bottom: 0.8em;
      }

      /* Global status */

      .c-running {
        color: var(--label-badge-yellow);
      }

      .c-pause {
        color: var(--label-badge-blue);
      }

      .c-idle {
        color: var(--label-badge-grey);
      }

      .c-stopped {
        color: var(--label-badge-grey);
      }

      .progressbar {
        border-radius: 0.4em;
        margin-bottom: 0.6em;
        height: 1.4em;
        display: flex;
        background-color: #f1f1f1;
        z-index: 0;
        position: relative;
        margin-left: 1.4em;
        margin-right: 1.4em;
      }

      .progressin {
        border-radius: 0.4em;
        height: 100%;
        z-index: 1;
        position: absolute;
      }

      .download-icon {
        --mdc-icon-size: 1.4em;
        z-index: 2;
        margin-left: .2em;
        line-height: 1.4em;
      }

      .mode-compact .download-icon {
        color: var(--text-light-primary-color, var(--primary-text-color));
      }

      .name {
        margin-left: 0.7em;
        width: calc(100% - 60px);
        overflow: hidden;
        z-index: 2;
        color: var(--text-light-primary-color, var(--primary-text-color));
        line-height: 1.4em;
      }

      .percent {
        vertical-align: middle;
        z-index: 2;
        margin-left: 1.7em;
        margin-right: 0.7em;
        color: var(--text-light-primary-color, var(--primary-text-color));
        line-height: 1.4em;
      }

      /* Download status */
      .downloading {
        background-color: var(--paper-item-icon-active-color);
      }

      .stopped {
        background-color: var(--label-badge-grey);
      }
      
      .finished {
        background-color: var(--light-primary-color);
      }

      .links {
        margin-left: 1.5em;
      }

      .title-item-icon {
        display: inline-block;
        padding-top: 12px;
      }

      .title-item-button {
        font-size: var(--paper-font-body1_-_font-size);
      }

      .down-color {
        color: var(--paper-item-icon-active-color);
      }

      #toolbar-container {
        position: relative;
        display: inline;
        width: 100%;
      }

      #toolbar {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
      }

      .titleitem {
        width: auto;
        margin-left: 0.7em;
      }

      .status {
        font-size: 1em;
      }

      .speed_limit_off {
        color: var(--light-primary-color);
      }

      .speed_limit_on {
        color: var(--paper-item-icon-active-color);
      }

      .play_all {
        color: var(--light-primary-color);
      }

      .pause_all {
        color: var(--primary-color);
      }

      .no-downloads {
        margin-left: 1.4em;
      }

      .mode-full {
        margin-left: 1.4em;
        margin-right: 1.4em;
      }

      .mode-full .progressbar {
        margin: 0 0 0 0;
        height: 4px;
      }

      .package_name, .link_name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .package_status, .link_status {
        font-size: 0.7em;
      }

      .package_details, .link_details {
        font-size: 0.7em;
      }
    `}};e([oe({attribute:!1})],Ee.prototype,"hass",void 0),e([ae()],Ee.prototype,"config",void 0),Ee=e([ie("myjdownloader-card")],Ee);const Se=[{name:"header_title",selector:{text:{}}},{name:"sensor_name",selector:{text:{}}},{name:"display_mode",selector:{select:{options:["compact","full"].map((e=>({value:e,label:Ae(`config.display_mode_label.${e}`)})))}}},{name:"default_instance",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"hide_title",selector:{boolean:{}}},{name:"hide_instance",selector:{boolean:{}}},{name:"hide_speed_limit",selector:{boolean:{}}},{name:"hide_playpause",selector:{boolean:{}}}]}];let ke=class extends(
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(e){return class extends e{createRenderRoot(){const e=this.constructor,{registry:t,elementDefinitions:s,shadowRootOptions:i}=e;s&&!t&&(e.registry=new CustomElementRegistry,Object.entries(s).forEach((([t,s])=>e.registry.define(t,s))));const n=this.renderOptions.creationScope=this.attachShadow({...i,customElements:e.registry});return r(n,this.constructor.elementStyles),n}}}(te)){constructor(){super(...arguments),this._initialized=!1}setConfig(e){this._config=e,this.loadCardHelpers()}render(){return this.hass&&this._helpers?L`
      <ha-form
          .hass=${this.hass}
          .data=${this._config}
          .schema=${Se}
          .computeLabel=${this._computeLabelCallback.bind(this)}
          @value-changed=${this._valueChanged}
      ></ha-form>
    `:L``}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_valueChanged(e){console.log("ev.detail.value",e.detail.value),function(e,t,s,i){i=i||{},s=null==s?{}:s;var n=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});n.detail=s,e.dispatchEvent(n)}(this,"config-changed",{config:e.detail.value})}_computeLabelCallback(e){return Ae(`config.${e.name}`)}};e([oe({attribute:!1})],ke.prototype,"hass",void 0),e([ae()],ke.prototype,"_config",void 0),e([ae()],ke.prototype,"_helpers",void 0),ke=e([ie("myjdownloader-card-editor")],ke);var Ce=Object.freeze({__proto__:null,get MyJDownloaderCardEditor(){return ke}});export{Ee as MyJDownloaderCard};
