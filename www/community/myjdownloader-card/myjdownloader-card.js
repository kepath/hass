function t(t,e,s,i){var n,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,i);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(a=(o<3?n(a):o>3?n(e,s,a):n(e,s))||a);return o>3&&a&&Object.defineProperty(e,s,a),a
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;class o{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(e,t))}return t}toString(){return this.cssText}}const a=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new o(s,t,i)},r=(t,i)=>{s?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((s=>{const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=s.cssText,t.appendChild(i)}))},l=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var d;const c=window,h=c.trustedTypes,u=h?h.emptyScript:"",p=c.reactiveElementPolyfillSupport,_={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},m=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:m};class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Ep(s,e);void 0!==i&&(this._$Ev.set(i,s),t.push(i))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return r(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=v){var i;const n=this.constructor._$Ep(t,s);if(void 0!==n&&!0===s.reflect){const o=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:_).toAttribute(e,s.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,n=i._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=i.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:_;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||m)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:g}),(null!==(d=c.reactiveElementVersions)&&void 0!==d?d:c.reactiveElementVersions=[]).push("1.4.1");const $=window,y=$.trustedTypes,w=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,A="?"+b,S=`<${A}>`,E=document,k=(t="")=>E.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,O=/>/g,H=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),U=/'/g,T=/"/g,R=/^(?:script|style|textarea|title)$/i,D=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),L=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),N=new WeakMap,M=E.createTreeWalker(E,129,null,!1),j=(t,e)=>{const s=t.length-1,i=[];let n,o=2===e?"<svg>":"",a=P;for(let e=0;e<s;e++){const s=t[e];let r,l,d=-1,c=0;for(;c<s.length&&(a.lastIndex=c,l=a.exec(s),null!==l);)c=a.lastIndex,a===P?"!--"===l[1]?a=I:void 0!==l[1]?a=O:void 0!==l[2]?(R.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=H):void 0!==l[3]&&(a=H):a===H?">"===l[0]?(a=null!=n?n:P,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,r=l[1],a=void 0===l[3]?H:'"'===l[3]?T:U):a===T||a===U?a=H:a===I||a===O?a=P:(a=H,n=void 0);const h=a===H&&t[e+1].startsWith("/>")?" ":"";o+=a===P?s+S:d>=0?(i.push(r),s.slice(0,d)+"$lit$"+s.slice(d)+b+h):s+b+(-2===d?(i.push(void 0),e):h)}const r=o+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(r):r,i]};class B{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const a=t.length-1,r=this.parts,[l,d]=j(t,e);if(this.el=B.createElement(l,s),M.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=M.nextNode())&&r.length<a;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(b)){const s=d[o++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(b),e=/([.?@])?(.*)/.exec(s);r.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?Z:"@"===e[1]?G:J})}else r.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(R.test(i.tagName)){const t=i.textContent.split(b),e=t.length-1;if(e>0){i.textContent=y?y.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],k()),M.nextNode(),r.push({type:2,index:++n});i.append(t[e],k())}}}else if(8===i.nodeType)if(i.data===A)r.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(b,t+1));)r.push({type:7,index:n}),t+=b.length-1}n++}}static createElement(t,e){const s=E.createElement("template");return s.innerHTML=t,s}}function V(t,e,s=t,i){var n,o,a,r;if(e===L)return e;let l=void 0!==i?null===(n=s._$Cl)||void 0===n?void 0:n[i]:s._$Cu;const d=C(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,s,i)),void 0!==i?(null!==(a=(r=s)._$Cl)&&void 0!==a?a:r._$Cl=[])[i]=l:s._$Cu=l),void 0!==l&&(e=V(t,l._$AS(t,e.values),l,i)),e}class q{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:E).importNode(s,!0);M.currentNode=n;let o=M.nextNode(),a=0,r=0,l=i[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new F(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new Q(o,this,t)),this.v.push(e),l=i[++r]}a!==(null==l?void 0:l.index)&&(o=M.nextNode(),a++)}return n}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class F{constructor(t,e,s,i){var n;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$C_=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),C(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==L&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>x(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==z&&C(this._$AH)?this._$AA.nextSibling.data=t:this.k(E.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=B.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(s);else{const t=new q(n,this),e=t.p(this.options);t.m(s),this.k(e),this._$AH=t}}_$AC(t){let e=N.get(t.strings);return void 0===e&&N.set(t.strings,e=new B(t)),e}O(t){x(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new F(this.S(k()),this.S(k()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class J{constructor(t,e,s,i,n){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(void 0===n)t=V(this,t,e,0),o=!C(t)||t!==this._$AH&&t!==L,o&&(this._$AH=t);else{const i=t;let a,r;for(t=n[0],a=0;a<n.length-1;a++)r=V(this,i[s+a],e,a),r===L&&(r=this._$AH[a]),o||(o=!C(r)||r!==this._$AH[a]),r===z?t=z:t!==z&&(t+=(null!=r?r:"")+n[a+1]),this._$AH[a]=r}o&&!i&&this.P(t)}P(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends J{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===z?void 0:t}}const W=y?y.emptyScript:"";class Z extends J{constructor(){super(...arguments),this.type=4}P(t){t&&t!==z?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class G extends J{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=V(this,t,e,0))&&void 0!==s?s:z)===L)return;const i=this._$AH,n=t===z&&i!==z||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==z&&(i===z||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const X=$.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Y,tt;null==X||X(B,F),(null!==(f=$.litHtmlVersions)&&void 0!==f?f:$.litHtmlVersions=[]).push("2.3.1");class et extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{var i,n;const o=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let a=o._$litPart$;if(void 0===a){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=a=new F(e.insertBefore(k(),t),t,void 0,null!=s?s:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return L}}et.finalized=!0,et._$litElement$=!0,null===(Y=globalThis.litElementHydrateSupport)||void 0===Y||Y.call(globalThis,{LitElement:et});const st=globalThis.litElementPolyfillSupport;null==st||st({LitElement:et}),(null!==(tt=globalThis.litElementVersions)&&void 0!==tt?tt:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,nt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(s){s.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function ot(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):nt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function at(t){return ot({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rt,lt,dt;null===(rt=window.HTMLSlotElement)||void 0===rt||rt.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(lt||(lt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(dt||(dt={}));var ct={version:"Version"},ht={invalid:"Invalid configuration",wrong_display_mode:"display_mode accepts only 'compact' and 'full' as value",header_title:"Title",sensor_name:"Sensor name",display_mode:"Display mode",display_mode_label:{full:"Full",compact:"Compact"},default_instance:"Default instance",hide_title:"Hide title",hide_instance:"Hide instance selector",hide_play:"Hide play button",hide_pause:"Hide pause button",hide_stop:"Hide stop button",hide_speed_limit:"Hide speed limit button"},ut={no_sensor:"No sensor",stopped:"Stopped",downloading:"Downloading",stopping:"Stopping",finished:"Finished",running:"Running",pause:"Paused",idle:"Idle"},pt={no_downloads:"No downloads"},_t={play:"Start Downloads",pause:"Pause Downloads",stop:"Stop Downloads",speed_limit:"Speed Limit"},mt={common:ct,config:ht,status:ut,downloads:pt,actions:_t},vt={version:"Versión"},gt={invalid:"Configuración inválida",wrong_display_mode:"display_mode solo acepta 'compact' y 'full' como valor",header_title:"Título",sensor_name:"Nombre sensor",display_mode:"Modo de visualización",display_mode_label:{full:"Completo",compact:"Compacto"},default_instance:"Instancia por defecto",hide_title:"Ocultar título",hide_instance:"Ocultar selector de instancias",hide_play:"Ocultar botón iniciar",hide_pause:"Ocultar botón pausa",hide_stop:"Ocultar botón parar",hide_speed_limit:"Ocultar botón límite velocidad"},ft={no_sensor:"Sin sensor",stopped:"Detenido",downloading:"Descargando",stopping:"Parando",finished:"Terminado",running:"En curso",pause:"Pausado",idle:"Inactivo"},$t={no_downloads:"Sin descargas"},yt={speed_limit:"Límite velocidad",play:"Iniciar Descargas",pause:"Pausar Descargas",stop:"Parar Descargas"},wt={common:vt,config:gt,status:ft,downloads:$t,actions:yt};const bt={en:Object.freeze({__proto__:null,common:ct,config:ht,status:ut,downloads:pt,actions:_t,default:mt}),es:Object.freeze({__proto__:null,common:vt,config:gt,status:ft,downloads:$t,actions:yt,default:wt})};function At(t,e="",s=""){const i=function(){var t;let e=null===(t=localStorage.getItem("selectedLanguage"))||void 0===t?void 0:t.replace(/['"]+/g,"").replace("-","_");if(null==e||"null"===e){const t=document.querySelector("home-assistant").hass;e=t.selectedLanguage||t.language}return e||"en"}();let n;try{n=t.split(".").reduce(((t,e)=>t[e]),bt[i])}catch(e){n=t.split(".").reduce(((t,e)=>t[e]),bt.en)}return void 0===n&&(n=t.split(".").reduce(((t,e)=>t[e]),bt.en)),""!==e&&""!==s&&(n=n.replace(e,s)),n||t}console.info(`%c  MyJDownloader-Card \n%c  ${At("common.version")} 1.1.0`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"myjdownloader-card",name:"MyJDownloader Card",preview:!0,description:"This Lovelace Custom card displays downloads information provided by the MyJDownloader Integration."});let St=class extends et{static async getConfigElement(){return await Promise.resolve().then((function(){return Ct})),document.createElement("myjdownloader-card-editor")}static getStubConfig(){return{}}set selectedInstance(t){this._selectedInstance=t,this._selectedInstanceEntity=null==t?t:function(t,e="_"){const s="àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;",i=`aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz${e}${e}${e}${e}${e}${e}`,n=new RegExp(s.split("").join("|"),"g");return t.toString().toLowerCase().replace(/\s+/g,e).replace(n,(t=>i.charAt(s.indexOf(t)))).replace(/&/g,`${e}and${e}`).replace(/[^\w-]+/g,e).replace(/-/g,e).replace(new RegExp(`(${e})\\1+`,"g"),"$1").replace(new RegExp(`^${e}+`),"").replace(new RegExp(`${e}+$`),"")}(t)}get selectedInstance(){return this._selectedInstance}get selectedInstanceEntity(){return this._selectedInstanceEntity}setConfig(t){if(!t)throw new Error(At("common.invalid_configuration"));if(t.display_mode&&!["compact","full"].includes(t.display_mode))throw new Error(At("config.wrong_display_mode"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this.config=Object.assign({header_title:"MyJDownloader",sensor_name:"jdownloader",display_mode:"compact",default_instance:void 0,hide_title:!1,hide_instance:!1,hide_play:!1,hide_pause:!1,hide_stop:!1,hide_speed_limit:!1},t),null!=this.config.default_instance&&(this.selectedInstance=this.config.default_instance)}shouldUpdate(t){return!!this.config&&function(t,e,s){if(e.has("config")||s)return!0;if(t.config.entity){var i=e.get("hass");return!i||i.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}render(){if(!this.config||!this.hass)return D``;null==this.selectedInstance&&(this.selectedInstance=this._getInstances()[0]);const t=this._getDownloads();return D`
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
            ${Object.keys(t).length>0?D`
                  <div class="mode-${this.config.display_mode}">
                    ${"compact"===this.config.display_mode?Object.entries(t).map((([t,e])=>this.renderPackage(t,e))):Object.entries(t).map((([t,e])=>this.renderPackageFull(t,e)))}
                  </div>`:D`
                  <div class="no-downloads">${At("downloads.no_downloads")}</div>`}
          </div>
        </div>
      </ha-card>
    `}_getDownloads(){const t={};if(void 0!==this.hass.states[`sensor.${this.config.sensor_name}_${this.selectedInstanceEntity}_packages`]){this.hass.states[`sensor.${this.config.sensor_name}_${this.selectedInstanceEntity}_packages`].attributes.packages.forEach((e=>{t[e.uuid]={activeTask:e.activeTask,bytesLoaded:e.bytesLoaded,bytesTotal:e.bytesTotal,percent:100*e.bytesLoaded/e.bytesTotal||0,childCount:e.childCount,comment:e.comment,downloadPassword:e.downloadPassword,enabled:e.enabled,eta:e.eta,finished:e.finished,hosts:e.hosts,name:e.name,priority:e.priority,running:e.running,saveTo:e.saveTo,speed:e.speed,status:e.status,statusIconKey:e.statusIconKey,links:[]}}));this.hass.states[`sensor.${this.config.sensor_name}_${this.selectedInstanceEntity}_links`].attributes.links.forEach((e=>{t[e.packageUUID].links.push({addedDate:e.addedDate,bytesLoaded:e.bytesLoaded,bytesTotal:e.bytesTotal,percent:100*e.bytesLoaded/e.bytesTotal||0,comment:e.comment,downloadPassword:e.downloadPassword,enabled:e.enabled,eta:e.eta,extractionStatus:e.extractionStatus,finished:e.finished,finishedDate:e.finishedDate,host:e.host,name:e.name,packageUUID:e.packageUUID,priority:e.priority,running:e.running,skipped:e.skipped,speed:e.speed,status:e.status,statusIconKey:e.statusIconKey,url:e.url,uuid:e.uuid})}))}return t}_getStats(){const t=`sensor.${this.config.sensor_name}_${this._selectedInstanceEntity}`;return void 0!==this.hass.states[`${t}_download_speed`]?{down_speed:this.hass.states[`${t}_download_speed`].state,down_unit:this.hass.states[`${t}_download_speed`].attributes.unit_of_measurement,status:this.hass.states[`${t}_status`].state}:{down_speed:void 0,down_unit:"B/s",status:"no_sensor"}}_getInstances(){return void 0!==this.hass.states[`sensor.${this.config.sensor_name}s_online`]?this.hass.states[`sensor.${this.config.sensor_name}s_online`].attributes.jdownloaders:[]}_toggleInstance(t){this.selectedInstance=t.target.value}_togglePlay(){this.hass.callService("myjdownloader","start_downloads",{entity_id:`sensor.${this.config.sensor_name}_${this._selectedInstanceEntity}_status`})}_togglePause(){this.hass.callService("switch","toggle",{entity_id:`switch.${this.config.sensor_name}_${this._selectedInstanceEntity}_pause`})}_toggleStop(){this.hass.callService("myjdownloader","stop_downloads",{entity_id:`sensor.${this.config.sensor_name}_${this._selectedInstanceEntity}_status`})}_toggleLimit(){this.hass.callService("switch","toggle",{entity_id:`switch.${this.config.sensor_name}_${this._selectedInstanceEntity}_limit`})}_downloadStatus(t){return t.finished?"finished":t.enabled?"downloading":"stopped"}renderToolbar(){const t=this._getStats();return D`
      <div id="toolbar">
        <div class="status titleitem c-${t.status}">
          <p>${At(`status.${t.status}`)}
          <p>
        </div>
        <div class="titleitem">
          <ha-icon icon="mdi:download" class="down down-color title-item-icon"></ha-icon>
          <span>${t.down_speed} ${t.down_unit}</span>
        </div>
        ${this.renderPlayButton()}
        ${this.renderPauseButton()}
        ${this.renderStopButton()}
        ${this.renderLimitButton()}
      </div>
    `}renderPackage(t,e){return D`
      <div class="package-container ${t}">
        <div class="progressbar">
          <div class="${this._downloadStatus(e)} progressin"
               style="width: ${e.percent}%"></div>
          <ha-icon class="download-icon" icon="mdi:package-variant"></ha-icon>
          <div class="name"><a title="${e.name}">${e.name}</a></div>
          <!-- Using <a /> just as a quick hack to display a tooltip, improve in future release -->
          <div class="percent">${e.percent.toFixed(2)}%</div>
        </div>
        <div class="links">
          ${e.links.map((t=>this.renderLink(t)))}
        </div>
      </div>
    `}renderLink(t){return D`
      <div class="progressbar">
        <div class="${this._downloadStatus(t)} progressin"
             style="width: ${t.percent}%"></div>
        <ha-icon class="download-icon" icon="mdi:download"></ha-icon>
        <div class="name"><a title="${t.name}">${t.name}</a></div>
        <div class="percent">${t.percent.toFixed(2)}%</div>
      </div>
    `}renderPackageFull(t,e){return D`
      <div class="package-container ${t}">
        <div class="package">
          <div class="package_name">
            <ha-icon class="download-icon" icon="mdi:package-variant"></ha-icon>
            <a title="${e.name}">${e.name}</a></div>
          <div class="package_status">${At(`status.${this._downloadStatus(e)}`)}</div>
          <div class="progressbar">
            <div class="${this._downloadStatus(e)} progressin"
                 style="width: ${e.percent}%">
            </div>
          </div>
          <div class="package_details">${e.percent.toFixed(2)} %</div>
        </div>
        <div class="links">
          ${e.links.map((t=>this.renderLinkFull(t)))}
        </div>
      </div>
    `}renderLinkFull(t){return D`
      <div class="link">
        <div class="link_name">
          <ha-icon class="download-icon" icon="mdi:download"></ha-icon>
          <a title="${t.name}">${t.name}</a></div>
        <div class="link_status">${At(`status.${this._downloadStatus(t)}`)}</div>
        <div class="progressbar">
          <div class="${this._downloadStatus(t)} progressin" style="width: ${t.percent}%">
          </div>
        </div>
        <div class="link_details">${t.percent.toFixed(2)} %</div>
      </div>
    `}renderPlayButton(){if(this.config.hide_play)return D``;const t="stopped"===this.hass.states[`sensor.${this.config.sensor_name}_${this._selectedInstanceEntity}_status`].state;return D`
      <div class="titleitem">
        <ha-icon-button
            class="play_${t?"on":"off"}"
            @click="${this._togglePlay}"
            title="${At("actions.play")}"
            id="play">
          <ha-icon class="title-item-button" icon="mdi:play"></ha-icon>
        </ha-icon-button>
      </div>
    `}renderPauseButton(){if(this.config.hide_pause)return D``;if(void 0===this.hass.states[`switch.${this.config.sensor_name}_${this._selectedInstanceEntity}_pause`])return D``;const t=this.hass.states[`switch.${this.config.sensor_name}_${this._selectedInstanceEntity}_pause`].state;return D`
      <div class="titleitem">
        <ha-icon-button
            class="pause_${t}"
            @click="${this._togglePause}"
            title="${At("actions.pause")}"
            id="pause">
          <ha-icon class="title-item-button" icon="mdi:pause"></ha-icon>
        </ha-icon-button>
      </div>
    `}renderStopButton(){if(this.config.hide_stop)return D``;const t="stopped"===this.hass.states[`sensor.${this.config.sensor_name}_${this._selectedInstanceEntity}_status`].state;return D`
      <div class="titleitem">
        <ha-icon-button
            class="stop_${t?"off":"on"}"
            @click="${this._toggleStop}"
            title="${At("actions.stop")}"
            id="stop">
          <ha-icon class="title-item-button" icon="mdi:stop"></ha-icon>
        </ha-icon-button>
      </div>
    `}renderLimitButton(){if(this.config.hide_speed_limit)return D``;if(void 0===this.hass.states[`switch.${this.config.sensor_name}_${this._selectedInstanceEntity}_limit`])return D``;const t=this.hass.states[`switch.${this.config.sensor_name}_${this._selectedInstanceEntity}_limit`].state;return D`
      <div class="titleitem">
        <ha-icon-button
            class="speed_limit_${t}"
            @click="${this._toggleLimit}"
            title="${At("actions.speed_limit")}"
            id="speed_limit">
          <ha-icon class="title-item-button" icon="mdi:download-lock"></ha-icon>
        </ha-icon-button>
      </div>
    `}renderCardHeader(){return this.config.hide_title?D``:D`
      <div class="header-title">${this.config.header_title}</div>`}renderInstanceSelect(){return this.config.hide_instance?D``:D`
      <ha-select
          class="instance-dropdown"
          @selected=${this._toggleInstance}
          .value=${this.selectedInstance}>
        ${this._getInstances().map((t=>D`
              <mwc-list-item .value=${t}>${this.selectedInstance}</mwc-list-item>`))}
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

      .pause_off {
        color: var(--light-primary-color);
      }

      .pause_on, .play_on, .stop_on {
        color: var(--primary-color);
      }

      .play_off, .stop_off {
        color: var(--label-badge-grey);
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
    `}};t([ot({attribute:!1})],St.prototype,"hass",void 0),t([at()],St.prototype,"config",void 0),St=t([it("myjdownloader-card")],St);const Et=[{name:"header_title",selector:{text:{}}},{name:"sensor_name",selector:{text:{}}},{name:"display_mode",selector:{select:{options:["compact","full"].map((t=>({value:t,label:At(`config.display_mode_label.${t}`)})))}}},{name:"default_instance",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"hide_title",selector:{boolean:{}}},{name:"hide_instance",selector:{boolean:{}}},{name:"hide_play",selector:{boolean:{}}},{name:"hide_pause",selector:{boolean:{}}},{name:"hide_stop",selector:{boolean:{}}},{name:"hide_speed_limit",selector:{boolean:{}}}]}];let kt=class extends(
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t){return class extends t{createRenderRoot(){const t=this.constructor,{registry:e,elementDefinitions:s,shadowRootOptions:i}=t;s&&!e&&(t.registry=new CustomElementRegistry,Object.entries(s).forEach((([e,s])=>t.registry.define(e,s))));const n=this.renderOptions.creationScope=this.attachShadow({...i,customElements:t.registry});return r(n,this.constructor.elementStyles),n}}}(et)){constructor(){super(...arguments),this._initialized=!1}setConfig(t){this._config=t,this.loadCardHelpers()}render(){return this.hass&&this._helpers?D`
      <ha-form
          .hass=${this.hass}
          .data=${this._config}
          .schema=${Et}
          .computeLabel=${this._computeLabelCallback.bind(this)}
          @value-changed=${this._valueChanged}
      ></ha-form>
      ----------
      <ha-device-picker .label="Label" .value="Value" .devices="Devices" .areas="Areas" .entities="Entities"></ha-device-picker>
      ----------
    `:D``}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_valueChanged(t){console.log("ev.detail.value",t.detail.value),function(t,e,s,i){i=i||{},s=null==s?{}:s;var n=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});n.detail=s,t.dispatchEvent(n)}(this,"config-changed",{config:t.detail.value})}_computeLabelCallback(t){return At(`config.${t.name}`)}};t([ot({attribute:!1})],kt.prototype,"hass",void 0),t([at()],kt.prototype,"_config",void 0),t([at()],kt.prototype,"_helpers",void 0),kt=t([it("myjdownloader-card-editor")],kt);var Ct=Object.freeze({__proto__:null,get MyJDownloaderCardEditor(){return kt}});export{St as MyJDownloaderCard};
