var e="https://github.com/idaho/hassio-trash-card";function t(e,t,r,n){var a,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(i<3?a(o):i>3?a(t,r,o):a(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o}"function"==typeof SuppressedError&&SuppressedError;var r,n,a,i,o,s=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function l(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(n=e[r],a=t[r],!(n===a||s(n)&&s(a)))return!1;var n,a;return!0}function c(e,t){void 0===t&&(t=l);var r=null;function n(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];if(r&&r.lastThis===this&&t(n,r.lastArgs))return r.lastResult;var i=e.apply(this,n);return r={lastResult:i,lastArgs:n,lastThis:this},i}return n.clear=function(){r=null},n}!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(r||(r={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(n||(n={})),function(e){e.local="local",e.server="server"}(a||(a={})),function(e){e.language="language",e.system="system",e.DMY="DMY",e.MDY="MDY",e.YMD="YMD"}(i||(i={})),function(e){e.language="language",e.monday="monday",e.tuesday="tuesday",e.wednesday="wednesday",e.thursday="thursday",e.friday="friday",e.saturday="saturday",e.sunday="sunday"}(o||(o={})),c(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric",timeZone:"server"===e.time_zone?t:void 0})));const u=c(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",timeZone:"server"===e.time_zone?t:void 0})));c(((e,t)=>{const r=e.date_format===i.system?void 0:e.language;return e.date_format===i.language||(e.date_format,i.system),new Intl.DateTimeFormat(r,{year:"numeric",month:"numeric",day:"numeric",timeZone:"server"===e.time_zone?t:void 0})})),c(((e,t)=>new Intl.DateTimeFormat(e.language,{day:"numeric",month:"short",timeZone:"server"===e.time_zone?t:void 0}))),c(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"long",year:"numeric",timeZone:"server"===e.time_zone?t:void 0}))),c(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"long",timeZone:"server"===e.time_zone?t:void 0}))),c(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",timeZone:"server"===e.time_zone?t:void 0}))),c(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",timeZone:"server"===e.time_zone?t:void 0}))),c(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"short",timeZone:"server"===e.time_zone?t:void 0})));const d=c((e=>{if(e.time_format===n.language||e.time_format===n.system){const t=e.time_format===n.language?e.language:void 0,r=(new Date).toLocaleString(t);return r.includes("AM")||r.includes("PM")}return e.time_format===n.am_pm})),h=c(((e,t)=>new Intl.DateTimeFormat("en"!==e.language||d(e)?e.language:"en-u-hc-h23",{hour:"numeric",minute:"2-digit",hour12:d(e),timeZone:"server"===e.time_zone?t:void 0})));c(((e,t)=>new Intl.DateTimeFormat("en"!==e.language||d(e)?e.language:"en-u-hc-h23",{hour:d(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:d(e),timeZone:"server"===e.time_zone?t:void 0}))),c(((e,t)=>new Intl.DateTimeFormat("en"!==e.language||d(e)?e.language:"en-u-hc-h23",{weekday:"long",hour:d(e)?"numeric":"2-digit",minute:"2-digit",hour12:d(e),timeZone:"server"===e.time_zone?t:void 0}))),c(((e,t)=>new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"2-digit",hour12:!1,timeZone:"server"===e.time_zone?t:void 0})));const m=(e,t,r)=>g(t,r.time_zone).format(e),g=c(((e,t)=>new Intl.DateTimeFormat("en"!==e.language||d(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:d(e)?"numeric":"2-digit",minute:"2-digit",hour12:d(e),timeZone:"server"===e.time_zone?t:void 0})));c(((e,t)=>new Intl.DateTimeFormat("en"!==e.language||d(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"short",day:"numeric",hour:d(e)?"numeric":"2-digit",minute:"2-digit",hour12:d(e),timeZone:"server"===e.time_zone?t:void 0}))),c(((e,t)=>new Intl.DateTimeFormat("en"!==e.language||d(e)?e.language:"en-u-hc-h23",{month:"short",day:"numeric",hour:d(e)?"numeric":"2-digit",minute:"2-digit",hour12:d(e),timeZone:"server"===e.time_zone?t:void 0}))),c(((e,t)=>new Intl.DateTimeFormat("en"!==e.language||d(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:d(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:d(e),timeZone:"server"===e.time_zone?t:void 0})));const p=(e,t,r,n)=>{n=n||{},r=null==r?{}:r;const a=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return a.detail=r,e.dispatchEvent(a),a},f="unavailable",y="unknown";const v=(e,t)=>0!=(e.supported_features&t);c((e=>new Intl.Collator(e))),c((e=>new Intl.Collator(e,{sensitivity:"accent"})));const b=e=>(e=>v(e,4)&&"number"==typeof e.in_progress)(e)||!!e.in_progress,_=(e,t=2)=>{let r=""+e;for(let e=1;e<t;e++)r=parseInt(r)<10**e?`0${r}`:r;return r};const w={ms:1,s:1e3,min:6e4,h:36e5,d:864e5},$=(e,t)=>function(e){const t=Math.floor(e/1e3/3600),r=Math.floor(e/1e3%3600/60),n=Math.floor(e/1e3%3600%60),a=Math.floor(e%1e3);return t>0?`${t}:${_(r)}:${_(n)}`:r>0?`${r}:${_(n)}`:n>0||a>0?`${n}${a>0?`.${_(a,3)}`:""}`:null}(parseFloat(e)*w[t])||"0",k=(e,t,n)=>{const a=t?(e=>{switch(e.number_format){case r.comma_decimal:return["en-US","en"];case r.decimal_comma:return["de","es","it"];case r.space_comma:return["fr","sv","cs"];case r.system:return;default:return e.language}})(t):void 0;if(Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},t?.number_format!==r.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(a,x(e,n)).format(Number(e))}catch(t){return console.error(t),new Intl.NumberFormat(void 0,x(e,n)).format(Number(e))}return"string"==typeof e?e:`${((e,t=2)=>Math.round(e*10**t)/10**t)(e,n?.maximumFractionDigits).toString()}${"currency"===n?.style?` ${n.currency}`:""}`},A=(e,t)=>{const r=t?.display_precision;return null!=r?{maximumFractionDigits:r,minimumFractionDigits:r}:Number.isInteger(Number(e.attributes?.step))&&Number.isInteger(Number(e.state))?{maximumFractionDigits:0}:null!=e.attributes.step?{maximumFractionDigits:Math.ceil(Math.log10(1/e.attributes.step))}:void 0},x=(e,t)=>{const r={maximumFractionDigits:2,...t};if("string"!=typeof e)return r;if(!t||void 0===t.minimumFractionDigits&&void 0===t.maximumFractionDigits){const t=e.indexOf(".")>-1?e.split(".")[1].length:0;r.minimumFractionDigits=t,r.maximumFractionDigits=t}return r},E=(e,t,r,n,i,o,s)=>{if(s===y||s===f)return e(`state.default.${s}`);if((e=>!!e.unit_of_measurement||!!e.state_class)(o)){if("duration"===o.device_class&&o.unit_of_measurement&&w[o.unit_of_measurement])try{return $(s,o.unit_of_measurement)}catch(e){}if("monetary"===o.device_class)try{return k(s,t,{style:"currency",currency:o.unit_of_measurement,minimumFractionDigits:2,...A({state:s,attributes:o},n)})}catch(e){}const e=o.unit_of_measurement?"%"===o.unit_of_measurement?(e=>{switch(e.language){case"cz":case"de":case"fi":case"fr":case"sk":case"sv":return" ";default:return""}})(t)+"%":` ${o.unit_of_measurement}`:"";return`${k(s,t,A({state:s,attributes:o},n))}${e}`}const l=(e=>e.substr(0,e.indexOf(".")))(i);if("datetime"===l){const e=new Date(s);return m(e,t,r)}if(["date","input_datetime","time"].includes(l))try{const e=s.split(" ");if(2===e.length)return m(new Date(e.join("T")),{...t,time_zone:a.local},r);if(1===e.length){if(s.includes("-"))return((e,t,r)=>u(t,r.time_zone).format(e))(new Date(`${s}T00:00`),{...t,time_zone:a.local},r);if(s.includes(":")){const e=new Date;return((e,t,r)=>h(t,r.time_zone).format(e))(new Date(`${e.toISOString().split("T")[0]}T${s}`),{...t,time_zone:a.local},r)}}return s}catch(e){return s}if("counter"===l||"number"===l||"input_number"===l)return k(s,t,A({state:s,attributes:o},n));if(["button","event","input_button","scene","stt","tts"].includes(l)||"sensor"===l&&"timestamp"===o.device_class)try{return m(new Date(s),t,r)}catch(e){return s}return"update"===l?"on"===s?b(o)?v(o,4)&&"number"==typeof o.in_progress?e("ui.card.update.installing_with_progress",{progress:o.in_progress}):e("ui.card.update.installing"):o.latest_version:o.skipped_version===o.latest_version?o.latest_version??e("state.default.unavailable"):e("ui.card.update.up_to_date"):n?.translation_key&&e(`component.${n.platform}.entity.${l}.${n.translation_key}.state.${s}`)||o.device_class&&e(`component.${l}.entity_component.${o.device_class}.state.${s}`)||e(`component.${l}.entity_component._.state.${s}`)||s};let z=class extends TypeError{constructor(e,t){let r;const{message:n,...a}=e,{path:i}=e;super(0===i.length?n:"At path: "+i.join(".")+" -- "+n),this.value=void 0,this.key=void 0,this.type=void 0,this.refinement=void 0,this.path=void 0,this.branch=void 0,this.failures=void 0,Object.assign(this,a),this.name=this.constructor.name,this.failures=()=>{var n;return null!=(n=r)?n:r=[e,...t()]}}};function S(e){return"object"==typeof e&&null!=e}function D(e){return"string"==typeof e?JSON.stringify(e):""+e}function T(e,t,r,n){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});const{path:a,branch:i}=t,{type:o}=r,{refinement:s,message:l="Expected a value of type `"+o+"`"+(s?" with refinement `"+s+"`":"")+", but received: `"+D(n)+"`"}=e;return{value:n,type:o,refinement:s,key:a[a.length-1],path:a,branch:i,...e,message:l}}function*M(e,t,r,n){(function(e){return S(e)&&"function"==typeof e[Symbol.iterator]})(e)||(e=[e]);for(const a of e){const e=T(a,t,r,n);e&&(yield e)}}function*C(e,t,r){void 0===r&&(r={});const{path:n=[],branch:a=[e],coerce:i=!1,mask:o=!1}=r,s={path:n,branch:a};if(i&&(e=t.coercer(e,s),o&&"type"!==t.type&&S(t.schema)&&S(e)&&!Array.isArray(e)))for(const r in e)void 0===t.schema[r]&&delete e[r];let l=!0;for(const r of t.validator(e,s))l=!1,yield[r,void 0];for(let[r,c,u]of t.entries(e,s)){const t=C(c,u,{path:void 0===r?n:[...n,r],branch:void 0===r?a:[...a,c],coerce:i,mask:o});for(const n of t)n[0]?(l=!1,yield[n[0],void 0]):i&&(c=n[1],void 0===r?e=c:e instanceof Map?e.set(r,c):e instanceof Set?e.add(c):S(e)&&(e[r]=c))}if(l)for(const r of t.refiner(e,s))l=!1,yield[r,void 0];l&&(yield[void 0,e])}let j=class{constructor(e){this.TYPE=void 0,this.type=void 0,this.schema=void 0,this.coercer=void 0,this.validator=void 0,this.refiner=void 0,this.entries=void 0;const{type:t,schema:r,validator:n,refiner:a,coercer:i=(e=>e),entries:o=function*(){}}=e;this.type=t,this.schema=r,this.entries=o,this.coercer=i,this.validator=n?(e,t)=>M(n(e,t),t,this,e):()=>[],this.refiner=a?(e,t)=>M(a(e,t),t,this,e):()=>[]}assert(e){return function(e,t){const r=N(e,t);if(r[0])throw r[0]}(e,this)}create(e){return function(e,t){const r=N(e,t,{coerce:!0});if(r[0])throw r[0];return r[1]}(e,this)}is(e){return function(e,t){const r=N(e,t);return!r[0]}(e,this)}mask(e){return function(e,t){const r=N(e,t,{coerce:!0,mask:!0});if(r[0])throw r[0];return r[1]}(e,this)}validate(e,t){return void 0===t&&(t={}),N(e,this,t)}};function N(e,t,r){void 0===r&&(r={});const n=C(e,t,r),a=function(e){const{done:t,value:r}=e.next();return t?void 0:r}(n);if(a[0]){const e=new z(a[0],(function*(){for(const e of n)e[0]&&(yield e[0])}));return[e,void 0]}return[void 0,a[1]]}function O(e,t){return new j({type:e,schema:null,validator:t})}function R(e){return new j({type:"array",schema:e,*entries(t){if(e&&Array.isArray(t))for(const[r,n]of t.entries())yield[r,n,e]},coercer:e=>Array.isArray(e)?e.slice():e,validator:e=>Array.isArray(e)||"Expected an array value, but received: "+D(e)})}function I(){return O("boolean",(e=>"boolean"==typeof e))}function P(e){const t=D(e),r=typeof e;return new j({type:"literal",schema:"string"===r||"number"===r||"boolean"===r?e:null,validator:r=>r===e||"Expected the literal `"+t+"`, but received: "+D(r)})}function F(){return O("number",(e=>"number"==typeof e&&!isNaN(e)||"Expected a number, but received: "+D(e)))}function U(e){const t=e?Object.keys(e):[],r=O("never",(()=>!1));return new j({type:"object",schema:e||null,*entries(n){if(e&&S(n)){const a=new Set(Object.keys(n));for(const r of t)a.delete(r),yield[r,n[r],e[r]];for(const e of a)yield[e,n[e],r]}},validator:e=>S(e)||"Expected an object, but received: "+D(e),coercer:e=>S(e)?{...e}:e})}function Y(e){return new j({...e,validator:(t,r)=>void 0===t||e.validator(t,r),refiner:(t,r)=>void 0===t||e.refiner(t,r)})}function H(){return O("string",(e=>"string"==typeof e||"Expected a string, but received: "+D(e)))}function L(e){const t=Object.keys(e);return new j({type:"type",schema:e,*entries(r){if(S(r))for(const n of t)yield[n,r[n],e[n]]},validator:e=>S(e)||"Expected an object, but received: "+D(e)})}function q(e){const t=e.map((e=>e.type)).join(" | ");return new j({type:"union",schema:null,coercer(t,r){const n=e.find((e=>{const[r]=e.validate(t,{coerce:!0});return!r}))||O("unknown",(()=>!0));return n.coercer(t,r)},validator(r,n){const a=[];for(const t of e){const[...e]=C(r,t,n),[i]=e;if(!i[0])return[];for(const[t]of e)t&&a.push(t)}return["Expected the value to satisfy a union of `"+t+"`, but received: "+D(r),...a]}})}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B=window,V=B.ShadowRoot&&(void 0===B.ShadyCSS||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),W=new WeakMap;let K=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(V&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=W.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&W.set(t,e))}return e}toString(){return this.cssText}};const J=e=>new K("string"==typeof e?e:e+"",void 0,Z),G=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1]),e[0]);return new K(r,e,Z)},Q=V?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return J(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var X;const ee=window,te=ee.trustedTypes,re=te?te.emptyScript:"",ne=ee.reactiveElementPolyfillSupport,ae={toAttribute(e,t){switch(t){case Boolean:e=e?re:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},ie=(e,t)=>t!==e&&(t==t||e==e),oe={attribute:!0,type:String,converter:ae,reflect:!1,hasChanged:ie},se="finalized";let le=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,r)=>{const n=this._$Ep(r,t);void 0!==n&&(this._$Ev.set(n,r),e.push(n))})),e}static createProperty(e,t=oe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,r,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){const a=this[e];this[t]=n,this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||oe}static finalize(){if(this.hasOwnProperty(se))return!1;this[se]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of t)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(Q(e))}else void 0!==e&&t.push(Q(e));return t}static _$Ep(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,r;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(r=e.hostConnected)||void 0===r||r.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{V?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const r=document.createElement("style"),n=B.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=t.cssText,e.appendChild(r)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=oe){var n;const a=this.constructor._$Ep(e,r);if(void 0!==a&&!0===r.reflect){const i=(void 0!==(null===(n=r.converter)||void 0===n?void 0:n.toAttribute)?r.converter:ae).toAttribute(t,r.type);this._$El=e,null==i?this.removeAttribute(a):this.setAttribute(a,i),this._$El=null}}_$AK(e,t){var r;const n=this.constructor,a=n._$Ev.get(e);if(void 0!==a&&this._$El!==a){const e=n.getPropertyOptions(a),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(r=e.converter)||void 0===r?void 0:r.fromAttribute)?e.converter:ae;this._$El=a,this[a]=i.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,r){let n=!0;void 0!==e&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||ie)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,r))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(r)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ce;le[se]=!0,le.elementProperties=new Map,le.elementStyles=[],le.shadowRootOptions={mode:"open"},null==ne||ne({ReactiveElement:le}),(null!==(X=ee.reactiveElementVersions)&&void 0!==X?X:ee.reactiveElementVersions=[]).push("1.6.3");const ue=window,de=ue.trustedTypes,he=de?de.createPolicy("lit-html",{createHTML:e=>e}):void 0,me="$lit$",ge=`lit$${(Math.random()+"").slice(9)}$`,pe="?"+ge,fe=`<${pe}>`,ye=document,ve=()=>ye.createComment(""),be=e=>null===e||"object"!=typeof e&&"function"!=typeof e,_e=Array.isArray,we="[ \t\n\f\r]",$e=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ke=/-->/g,Ae=/>/g,xe=RegExp(`>|${we}(?:([^\\s"'>=/]+)(${we}*=${we}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Ee=/'/g,ze=/"/g,Se=/^(?:script|style|textarea|title)$/i,De=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),Te=Symbol.for("lit-noChange"),Me=Symbol.for("lit-nothing"),Ce=new WeakMap,je=ye.createTreeWalker(ye,129,null,!1);function Ne(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==he?he.createHTML(t):t}const Oe=(e,t)=>{const r=e.length-1,n=[];let a,i=2===t?"<svg>":"",o=$e;for(let t=0;t<r;t++){const r=e[t];let s,l,c=-1,u=0;for(;u<r.length&&(o.lastIndex=u,l=o.exec(r),null!==l);)u=o.lastIndex,o===$e?"!--"===l[1]?o=ke:void 0!==l[1]?o=Ae:void 0!==l[2]?(Se.test(l[2])&&(a=RegExp("</"+l[2],"g")),o=xe):void 0!==l[3]&&(o=xe):o===xe?">"===l[0]?(o=null!=a?a:$e,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?xe:'"'===l[3]?ze:Ee):o===ze||o===Ee?o=xe:o===ke||o===Ae?o=$e:(o=xe,a=void 0);const d=o===xe&&e[t+1].startsWith("/>")?" ":"";i+=o===$e?r+fe:c>=0?(n.push(s),r.slice(0,c)+me+r.slice(c)+ge+d):r+ge+(-2===c?(n.push(void 0),t):d)}return[Ne(e,i+(e[r]||"<?>")+(2===t?"</svg>":"")),n]};class Re{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let a=0,i=0;const o=e.length-1,s=this.parts,[l,c]=Oe(e,t);if(this.el=Re.createElement(l,r),je.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=je.nextNode())&&s.length<o;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith(me)||t.startsWith(ge)){const r=c[i++];if(e.push(t),void 0!==r){const e=n.getAttribute(r.toLowerCase()+me).split(ge),t=/([.?@])?(.*)/.exec(r);s.push({type:1,index:a,name:t[2],strings:e,ctor:"."===t[1]?Ye:"?"===t[1]?Le:"@"===t[1]?qe:Ue})}else s.push({type:6,index:a})}for(const t of e)n.removeAttribute(t)}if(Se.test(n.tagName)){const e=n.textContent.split(ge),t=e.length-1;if(t>0){n.textContent=de?de.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],ve()),je.nextNode(),s.push({type:2,index:++a});n.append(e[t],ve())}}}else if(8===n.nodeType)if(n.data===pe)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=n.data.indexOf(ge,e+1));)s.push({type:7,index:a}),e+=ge.length-1}a++}}static createElement(e,t){const r=ye.createElement("template");return r.innerHTML=e,r}}function Ie(e,t,r=e,n){var a,i,o,s;if(t===Te)return t;let l=void 0!==n?null===(a=r._$Co)||void 0===a?void 0:a[n]:r._$Cl;const c=be(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,r,n)),void 0!==n?(null!==(o=(s=r)._$Co)&&void 0!==o?o:s._$Co=[])[n]=l:r._$Cl=l),void 0!==l&&(t=Ie(e,l._$AS(e,t.values),l,n)),t}class Pe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:r},parts:n}=this._$AD,a=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:ye).importNode(r,!0);je.currentNode=a;let i=je.nextNode(),o=0,s=0,l=n[0];for(;void 0!==l;){if(o===l.index){let t;2===l.type?t=new Fe(i,i.nextSibling,this,e):1===l.type?t=new l.ctor(i,l.name,l.strings,this,e):6===l.type&&(t=new Be(i,this,e)),this._$AV.push(t),l=n[++s]}o!==(null==l?void 0:l.index)&&(i=je.nextNode(),o++)}return je.currentNode=ye,a}v(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class Fe{constructor(e,t,r,n){var a;this.type=2,this._$AH=Me,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cp=null===(a=null==n?void 0:n.isConnected)||void 0===a||a}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ie(this,e,t),be(e)?e===Me||null==e||""===e?(this._$AH!==Me&&this._$AR(),this._$AH=Me):e!==this._$AH&&e!==Te&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>_e(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Me&&be(this._$AH)?this._$AA.nextSibling.data=e:this.$(ye.createTextNode(e)),this._$AH=e}g(e){var t;const{values:r,_$litType$:n}=e,a="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=Re.createElement(Ne(n.h,n.h[0]),this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===a)this._$AH.v(r);else{const e=new Pe(a,this),t=e.u(this.options);e.v(r),this.$(t),this._$AH=e}}_$AC(e){let t=Ce.get(e.strings);return void 0===t&&Ce.set(e.strings,t=new Re(e)),t}T(e){_e(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const a of e)n===t.length?t.push(r=new Fe(this.k(ve()),this.k(ve()),this,this.options)):r=t[n],r._$AI(a),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Ue{constructor(e,t,r,n,a){this.type=1,this._$AH=Me,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=a,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Me}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){const a=this.strings;let i=!1;if(void 0===a)e=Ie(this,e,t,0),i=!be(e)||e!==this._$AH&&e!==Te,i&&(this._$AH=e);else{const n=e;let o,s;for(e=a[0],o=0;o<a.length-1;o++)s=Ie(this,n[r+o],t,o),s===Te&&(s=this._$AH[o]),i||(i=!be(s)||s!==this._$AH[o]),s===Me?e=Me:e!==Me&&(e+=(null!=s?s:"")+a[o+1]),this._$AH[o]=s}i&&!n&&this.j(e)}j(e){e===Me?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Ye extends Ue{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Me?void 0:e}}const He=de?de.emptyScript:"";class Le extends Ue{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Me?this.element.setAttribute(this.name,He):this.element.removeAttribute(this.name)}}class qe extends Ue{constructor(e,t,r,n,a){super(e,t,r,n,a),this.type=5}_$AI(e,t=this){var r;if((e=null!==(r=Ie(this,e,t,0))&&void 0!==r?r:Me)===Te)return;const n=this._$AH,a=e===Me&&n!==Me||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==Me&&(n===Me||a);a&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==r?r:this.element,e):this._$AH.handleEvent(e)}}class Be{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Ie(this,e)}}const Ve=ue.litHtmlPolyfillSupport;null==Ve||Ve(Re,Fe),(null!==(ce=ue.litHtmlVersions)&&void 0!==ce?ce:ue.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Ze,We;class Ke extends le{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{var n,a;const i=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:t;let o=i._$litPart$;if(void 0===o){const e=null!==(a=null==r?void 0:r.renderBefore)&&void 0!==a?a:null;i._$litPart$=o=new Fe(t.insertBefore(ve(),e),e,void 0,null!=r?r:{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return Te}}Ke.finalized=!0,Ke._$litElement$=!0,null===(Ze=globalThis.litElementHydrateSupport)||void 0===Ze||Ze.call(globalThis,{LitElement:Ke});const Je=globalThis.litElementPolyfillSupport;null==Je||Je({LitElement:Ke}),(null!==(We=globalThis.litElementVersions)&&void 0!==We?We:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ge=1,Qe=e=>(...t)=>({_$litDirective$:e,values:t});let Xe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const et=(e,t)=>{const r=(()=>{const e=document.body;if(e.querySelector("action-handler"))return e.querySelector("action-handler");const t=document.createElement("action-handler");return e.appendChild(t),t})();r&&r.bind(e,t)},tt=Qe(class extends Xe{update(e,[t]){return et(e.element,t),Te}render(e){}});function rt(e){return void 0!==e&&"none"!==e.action}const nt=U({user:H()}),at=q([I(),U({text:Y(H()),excemptions:Y(R(nt))})]),it=U({action:P("url"),url_path:H(),confirmation:Y(at)}),ot=U({action:P("call-service"),service:H(),service_data:Y(U()),data:Y(U()),target:Y(U({entity_id:Y(q([H(),R(H())])),device_id:Y(q([H(),R(H())])),area_id:Y(q([H(),R(H())]))})),confirmation:Y(at)}),st=U({action:P("navigate"),navigation_path:H(),confirmation:Y(at)}),lt=L({action:P("assist"),pipeline_id:Y(H()),start_listening:Y(I())}),ct=L({action:P("fire-dom-event")}),ut=U({action:function(e){const t={},r=e.map((e=>D(e))).join();for(const r of e)t[r]=r;return new j({type:"enums",schema:t,validator:t=>e.includes(t)||"Expected one of `"+r+"`, but received: "+D(t)})}(["none","toggle","more-info","call-service","url","navigate","assist"]),confirmation:Y(at)});var dt;dt=e=>{if(e&&"object"==typeof e&&"action"in e)switch(e.action){case"call-service":return ot;case"fire-dom-event":return ct;case"navigate":return st;case"url":return it;case"assist":return lt}return ut},new j({type:"dynamic",schema:null,*entries(e,t){const r=dt(e,t);yield*r.entries(e,t)},validator:(e,t)=>dt(e,t).validator(e,t),coercer:(e,t)=>dt(e,t).coercer(e,t),refiner:(e,t)=>dt(e,t).refiner(e,t)}),G`
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
    paper-icon-item.hidden-panel ha-icon[slot="item-icon"] {
        color: var(--secondary-text-color);
        cursor: pointer;
    }
`
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const ht=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(t){customElements.define(e,t)}}})(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,mt=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},gt=(e,t,r)=>{t.constructor.createProperty(r,e)};function pt(e){return(t,r)=>void 0!==r?gt(e,t,r):mt(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(e){return pt({...e,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yt;null===(yt=window.HTMLSlotElement)||void 0===yt||yt.prototype.assignedElements;var vt={form:{color_picker:{values:{default:"Standard-Farbe"}},day_style:{values:{default:"Datum",counter:"Tage bis"}},layout_picker:{values:{default:"Standard-Layout",vertical:"Vertikales Layout",horizontal:"Horizontales Layout"}},tabs:{settings:"Einstellungen",appearance:"Darstellung",patterns:"Muster"}},card:{generic:{icon_color:"Icon-Farbe",layout:"Layout",fill_container:"Container ausfüllen",next_days:"Tage in der Zukunft",filter_events:"Ereignisse nach Mustern filtern",drop_todayevents_from:"Ab wieviel Uhr Ganztages Ereignis ausblenden",full_size:"Karte ohne Seitenrand",use_summary:"Ereignisse Bezeichnung anstelle des Lables verwenden",day_style:"Ereigniss Zeitpunkt anzeigen als"},trash:{pattern:{title:"Muster bearbeiten",edit:"bearbeiten",delete:"löschen",type:{organic:"Bio",paper:"Papier",recycle:"Verpackung",waste:"Restmüll",others:"Sonstiges"},fields:{label:"Bezeichnung",color:"Farbe",icon:"Symbol",pattern:"erkennen an Muster"}}}}},bt={not_found:"Entität nicht gefunden",trash:{today:"Heute",tomorrow:"Morgen",day:"<DAY>",today_from_till:"Heute\nvon <START> bis <END>",tomorrow_from_till:"Morgen\nzwischen <START> und <END>",day_from_till:"<DAY>\nzwischen <START> und <END>",daysleft:"in <DAYS> Tag",daysleft_more:"in <DAYS> Tagen",daysleft_from_till:"in <DAYS> Tag\nvon <START> bis <END>",daysleft_more_from_till:"in <DAYS> Tagen\nvon <START> bis <END>"}},_t={editor:vt,card:bt},wt={form:{color_picker:{values:{default:"Default color"}},day_style:{values:{default:"Date",counter:"days to"}},layout_picker:{values:{default:"Default layout",vertical:"Vertical layout",horizontal:"Horizontal layout"}},tabs:{settings:"Settings",appearance:"Appearance",patterns:"Patterns"}},card:{generic:{icon_color:"Icon color",layout:"Layout",fill_container:"Fill container",next_days:"Days in the future",filter_events:"Filter events by patterns",drop_todayevents_from:"From what time to hide all-day event",full_size:"Card without margin",use_summary:"Event summary instead of label",day_style:"Show event time as"},trash:{pattern:{title:"Edit pattern",edit:"edit",delete:"delete",type:{organic:"Organic",paper:"Paper",recycle:"Recycle",waste:"Waste",others:"Others"},fields:{label:"Label",color:"Color",icon:"Icon",pattern:"Detection pattern"}}}}},$t={not_found:"Entity not found",trash:{today:"today",tomorrow:"tomorrow",day:"<DAY>",today_from_till:"Today\nfrom <START> to <END>",tomorrow_from_till:"Tomorrow\nbetween <START> and <END>",day_from_till:"<DAY>\nbetween <START> and <END>",daysleft:"in <DAYS> day",daysleft_more:"in <DAYS> days",daysleft_from_till:"in <DAYS> day\nbetween <START> and <END>",daysleft_more_from_till:"in <DAYS> days\nbetween <START> and <END>"}},kt={editor:wt,card:$t},At={form:{color_picker:{values:{default:"Couleur par défaut"}},day_style:{values:{default:"Date",compteur:"jours jusqu'à"}},layout_picker:{values:{default:"Disposition par défaut",vertical:"Disposition Verticale",horizontal:"Disposition Horizontale"}},tabs:{settings:"Paramètres",appearance:"Apparence",patterns:"Motifs"}},card:{generic:{icon_color:"Couleur de l'icône",layout:"Disposition",fill_container:"Remplir le conteneur",next_days:"Jours dans le futur",filter_events:"Filtrer les événements par motifs",drop_todayevents_from:"A partir de quelle heure masquer l'événement de toute la journée ?",full_size:"Carte sans marge",use_summary:"Résumé de l'événement au lieu de l'étiquette",day_style:"Afficher l'heure de l'événement en tant que"},trash:{pattern:{title:"Modifier le modèle",edit:"Modifier",delete:"Supprimer",type:{organic:"Organique",paper:"Papier",recycle:"Recyclage",waste:"Déchets",others:"Autres"},fields:{label:"Étiquette",color:"Couleur",icon:"Icône",pattern:"Modèle de détection"}}}}},xt={not_found:"Entité introuvable",trash:{today:"Aujourd'hui",tomorrow:"Demain",day:"<DAY>",today_from_till:"Aujourd'hui\nentre <START> et <END>",tomorrow_from_till:"Demain\nentre <START> et <END>",day_from_till:"<DAY>\nentre <START> et <END>",daysleft:"Dans <DAYS> jour",daysleft_more:"Dans <DAYS> jours",daysleft_from_till:"Dans <DAYS> jour\nentre <START> et <END>",daysleft_more_from_till:"Dans <DAYS> jours\nentre <START> et <END>"}},Et={editor:At,card:xt},zt={form:{color_picker:{values:{default:"Alapértelmezett szín"}},day_style:{values:{default:"Dátum",counter:"nap múlva"}},layout_picker:{values:{default:"Alapértelmezett elrendezés",vertical:"Függőleges elrendezés",horizontal:"Vízszintes elrendezés"}},tabs:{settings:"Beállítások",appearance:"Kinézet",patterns:"Minták"}},card:{generic:{icon_color:"Ikon szín",layout:"Elrendezés",fill_container:"Konténer kitöltése",next_days:"Jövőbeli napok száma",filter_events:"Események minta szerinti szűrése",drop_todayevents_from:"Mikortól rejtsük el az egésznapos eseményeket",full_size:"Margó nélküli kártya",use_summary:"Esemény összegzés a cimke helyett",day_style:"Esemény idejének megjelenítése mint"},trash:{pattern:{title:"Minta szerkesztése",edit:"szerkeszt",delete:"töröl",type:{organic:"komposztálható",paper:"Papír",recycle:"Újrahasznosítható",waste:"Szemét",others:"Egyéb"},fields:{label:"Cimke",color:"Szín",icon:"Ikon",pattern:"Felismerési minta"}}}}},St={not_found:"Entitás nem található",trash:{today:"ma",tomorrow:"holnap",day:"<DAY>",today_from_till:"Ma\n<START>-tól <END>-ig",tomorrow_from_till:"Holnap\n<START> és <END> között",day_from_till:"<DAY>\n<START> és <END> között",daysleft:"<DAYS> napon belül",daysleft_more:"<DAYS> napon belül",daysleft_from_till:"<DAYS> napon belül\n<START> és <END> között",daysleft_more_from_till:"<DAY> napon belül\n<START> és <END> között"}},Dt={editor:zt,card:St},Tt={form:{color_picker:{values:{default:"Colore di default"}},day_style:{values:{default:"Data",counter:"giorni a"}},layout_picker:{values:{default:"Layout di default",vertical:"Layout verticale",horizontal:"Layout orizzontala"}},tabs:{settings:"Impostazioni",appearance:"Aspetto",patterns:"Modelli"}},card:{generic:{icon_color:"Colore icona",layout:"Layout",fill_container:"Riempi il container",next_days:"Giorni nel futuro",filter_events:"Filtra eventi con i pattern",drop_todayevents_from:"Da quale orario nascondere gli eventi di Tutto il giorno",full_size:"Card senza margini",use_summary:"Usa l'oggetto dell'evento al posto dell'etichetta",day_style:"Mostra la data degli eventi come"},trash:{pattern:{title:"Modifica del modello",edit:"modificare",delete:"cancellare",type:{organic:"Organico",paper:"Carta",recycle:"Plastica",waste:"Indifferenziato",others:"Altro"},fields:{label:"Etichetta",color:"Colore",icon:"Icona",pattern:"Pattern identificazione"}}}}},Mt={not_found:"Entità non trovata",trash:{today:"Oggi",tomorrow:"Domani",day:"<DAY>",today_from_till:"Oggi\nda <START> a <END>",tomorrow_from_till:"Domani\ntra <START> e <END>",day_from_till:"<DAY>\ntra <START> e <END>",daysleft:"entro <DAYS> giorni",daysleft_more:"entro <DAYS> giorni",daysleft_from_till:"entro <DAYS> giorni\ntra <START> e <END>",daysleft_more_from_till:"entro <DAYS> giorni\ntra <START> e <END>"}},Ct={editor:Tt,card:Mt},jt={form:{color_picker:{values:{default:"Domyślny kolor"}},day_style:{values:{default:"Data",counter:"dni do"}},layout_picker:{values:{default:"Domyślny układ",vertical:"Pionowy układ",horizontal:"Poziomy układ"}},tabs:{settings:"Ustawienia",appearance:"Wygląd",patterns:"Wzorce"}},card:{generic:{icon_color:"Kolor ikony",layout:"Układ",fill_container:"Wypełnij zawartością",next_days:"Ilość dni do przodu",filter_events:"Filtruj zdarzenia według wzorca",drop_todayevents_from:"Od której godziny ukryć wydarzenie całodniowe",full_size:"Karta bez marginesu",use_summary:"Podsumowanie zamiast oznaczenia",day_style:"Pokaż czas zdarzenia jako"},trash:{pattern:{title:"Edytuj wzorzec",edit:"edytuj",delete:"usuń",type:{organic:"BIO",paper:"Papier",recycle:"Tworzywa",waste:"Zmieszane",others:"Pozostałe"},fields:{label:"Oznaczenie",color:"Kolor",icon:"Ikona",pattern:"Szablon wzorca"}}}}},Nt={not_found:"Encji nie znaleziono",trash:{today:"dziś",tomorrow:"jutro",day:"<DAY>",today_from_till:"Dziś\nod <START> do <END>",tomorrow_from_till:"Jutro\npomięzdy <START> a <END>",day_from_till:"<DAY>\npomiędzy <START> a <END>",daysleft:"za <DAYS> dzień",daysleft_more:"za <DAYS> dni",daysleft_from_till:"za <DAYS> dni\npomiędzy <START> a <END>",daysleft_more_from_till:"za <DAYS> dni\npomiędzy <START> a <END>"}},Ot={editor:jt,card:Nt},Rt={form:{color_picker:{values:{default:"Predvolená farba"}},day_style:{values:{default:"Dátum",counter:"dni do"}},layout_picker:{values:{default:"Predvolené rozloženie",vertical:"Vertikálne rozloženie",horizontal:"Horizontálne rozloženie"}},tabs:{settings:"Nastavenia",appearance:"Vzhľad",patterns:"Pattern"}},card:{generic:{icon_color:"Farba ikony",layout:"Rozloženie",fill_container:"Naplňte nádobu",next_days:"Dni v budúcnosti",filter_events:"Filtrovanie udalostí podľa vzorov",drop_todayevents_from:"d akého času sa má skryť celodenná udalosť",full_size:"Karta bez marže",use_summary:"Zhrnutie udalosti namiesto označenia",day_style:"Zobraziť čas udalosti ako"},trash:{pattern:{title:"Upraviť vzor",edit:"upraviť",delete:"delete",type:{organic:"Organický",paper:"Papiera",recycle:"Recyklačný",waste:"Odpadu",others:"Iné"},fields:{label:"štítok",color:"Farba",icon:"Ikona",pattern:"Vzor detekcie"}}}}},It={not_found:"Entita sa nenašla",trash:{today:"dnes",tomorrow:"zajtra",day:"<DAY>",today_from_till:"Dnes\nod <START> do <END>",tomorrow_from_till:"Zajtra\nod <START> do <END>",day_from_till:"<DAY>\nmedzi <START> a <END>",daysleft:"za <DAYS> dní",daysleft_more:"za <DAYS> dní",daysleft_from_till:"za <DAYS> dní\nmedzi <START> a <END>",daysleft_more_from_till:"za <DAYS> dní\nmedzi <START> a <END>"}},Pt={editor:Rt,card:It};const Ft={de:Object.freeze({__proto__:null,card:bt,default:_t,editor:vt}),en:Object.freeze({__proto__:null,card:$t,default:kt,editor:wt}),fr:Object.freeze({__proto__:null,card:xt,default:Et,editor:At}),hu:Object.freeze({__proto__:null,card:St,default:Dt,editor:zt}),it:Object.freeze({__proto__:null,card:Mt,default:Ct,editor:Tt}),pl:Object.freeze({__proto__:null,card:Nt,default:Ot,editor:jt}),sk:Object.freeze({__proto__:null,card:It,default:Pt,editor:Rt})},Ut=(e,t)=>{try{return e.split(".").reduce(((e,t)=>e[t]),Ft[t])}catch{return}};function Yt(e){return function(t){const r=e?.locale.language??"en";let n=Ut(t,r);return n||(n=Ut(t,"en")),n??t}}let Ht=class extends Ke{constructor(){super(...arguments),this.label="",this.configValue=""}selectChanged(e){const{value:t}=e.target;t&&this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:"default"!==t?t:""}}))}render(){const e=Yt(this.hass);return De`
            <mushroom-select
                .label=${this.label}
                .configValue=${this.configValue}
                @selected=${this.selectChanged}
                @closed=${e=>e.stopPropagation()}
                .value=${this.value??"default"}
                fixedMenuPosition
                naturalMenuWidth
            >
                <mwc-list-item value="default">
                  ${e("editor.form.day_style.values.default")}
                </mwc-list-item>
                <mwc-list-item value="counter">
                  ${e("editor.form.day_style.values.counter")}
                </mwc-list-item>
            </mushroom-select>
        `}};Ht.styles=G`
            mushroom-select {
                width: 100%;
            }
        `,t([pt()],Ht.prototype,"label",void 0),t([pt()],Ht.prototype,"value",void 0),t([pt()],Ht.prototype,"configValue",void 0),t([pt()],Ht.prototype,"hass",void 0),Ht=t([ht("trash-card-datestyle-selector")],Ht);let Lt=class extends Ke{render(){return De`
            <trash-card-datestyle-selector
                .hass=${this.hass}
                .label=${this.label}
                .value=${this.value}
                @value-changed=${this.valueChanged}
            ></trash-card-datestyle-selector>
        `}valueChanged(e){p(this,"value-changed",{value:e.detail.value||void 0})}};t([pt()],Lt.prototype,"hass",void 0),t([pt()],Lt.prototype,"selector",void 0),t([pt()],Lt.prototype,"value",void 0),t([pt()],Lt.prototype,"label",void 0),Lt=t([ht("ha-selector-trashcard_datestyle")],Lt);const qt={pulse:"@keyframes pulse {\n        0% {\n            opacity: 1;\n        }\n        50% {\n            opacity: 0;\n        }\n        100% {\n            opacity: 1;\n        }\n    }",spin:"@keyframes spin {\n        from {\n            transform: rotate(0deg);\n        }\n        to {\n            transform: rotate(360deg);\n        }\n    }",cleaning:"@keyframes cleaning {\n        0% {\n            transform: rotate(0) translate(0);\n        }\n        5% {\n            transform: rotate(0) translate(0, -3px);\n        }\n        10% {\n            transform: rotate(0) translate(0, 1px);\n        }\n        15% {\n            transform: rotate(0) translate(0);\n        }\n\n        20% {\n            transform: rotate(30deg) translate(0);\n        }\n        25% {\n            transform: rotate(30deg) translate(0, -3px);\n        }\n        30% {\n            transform: rotate(30deg) translate(0, 1px);\n        }\n        35% {\n            transform: rotate(30deg) translate(0);\n        }\n        40% {\n            transform: rotate(0) translate(0);\n        }\n\n        45% {\n            transform: rotate(-30deg) translate(0);\n        }\n        50% {\n            transform: rotate(-30deg) translate(0, -3px);\n        }\n        55% {\n            transform: rotate(-30deg) translate(0, 1px);\n        }\n        60% {\n            transform: rotate(-30deg) translate(0);\n        }\n        70% {\n            transform: rotate(0deg) translate(0);\n        }\n        100% {\n            transform: rotate(0deg);\n        }\n    }",returning:"@keyframes returning {\n        0% {\n            transform: rotate(0);\n        }\n        25% {\n            transform: rotate(20deg);\n        }\n        50% {\n            transform: rotate(0);\n        }\n        75% {\n            transform: rotate(-20deg);\n        }\n        100% {\n            transform: rotate(0);\n        }\n    }"};G`
        ${J(qt.pulse)}
    `,G`
        ${J(qt.spin)}
    `,G`
        ${J(qt.cleaning)}
    `,G`
        ${J(qt.returning)}
    `;const Bt=G`
    ${J(Object.values(qt).join("\n"))}
`,Vt=G`
    ha-card {
        box-sizing: border-box;
        padding: var(--spacing);
        display: flex;
        flex-direction: column;
        justify-content: var(--layout-align);
        height: auto;
    }
    ha-card.fill-container {
        height: 100%;
    }
    .actions {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        overflow-x: auto;
        overflow-y: hidden;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE 10+ */
    }
    .actions::-webkit-scrollbar {
        background: transparent; /* Chrome/Safari/Webkit */
        height: 0px;
    }
    .actions *:not(:last-child) {
        margin-right: var(--spacing);
    }
    .actions[rtl] *:not(:last-child) {
        margin-right: initial;
        margin-left: var(--spacing);
    }
    .unavailable {
        --main-color: rgb(var(--rgb-warning));
    }
    .not-found {
        --main-color: rgb(var(--rgb-danger));
    }
    mushroom-state-item[disabled] {
        cursor: initial;
    }
`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Zt=Qe(class extends Xe{constructor(e){var t;if(super(e),e.type!==Ge||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var r,n;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(e))&&this.it.add(e);return this.render(t)}const a=e.element.classList;this.it.forEach((e=>{e in t||(a.remove(e),this.it.delete(e))}));for(const e in t){const r=!!t[e];r===this.it.has(e)||(null===(n=this.nt)||void 0===n?void 0:n.has(e))||(r?(a.add(e),this.it.add(e)):(a.remove(e),this.it.delete(e)))}return Te}});function Wt(e){return e.vertical?"vertical":"default"}function Kt(e){return e.hide_icon?"none":e.use_entity_picture||e.use_media_artwork?"entity-picture":"icon"}function Jt(e){return e.hide_name?"none":"name"}function Gt(e){return e.hide_state?"none":"state"}const Qt=["button","input_button","scene"];function Xt(e,t,r,n,a){switch(e){case"name":return t;case"state":const e=n.entity_id.split(".")[0];return"timestamp"!==n.attributes.device_class&&!Qt.includes(e)||!function(e){return e.state!==f}(n)||function(e){return e.state===y}(n)?r:De`
                    <ha-relative-time
                        .hass=${a}
                        .datetime=${n.state}
                        capitalize
                    ></ha-relative-time>
                `;case"last-changed":return De`
                <ha-relative-time
                    .hass=${a}
                    .datetime=${n.last_changed}
                    capitalize
                ></ha-relative-time>
            `;case"last-updated":return De`
                <ha-relative-time
                    .hass=${a}
                    .datetime=${n.last_updated}
                    capitalize
                ></ha-relative-time>
            `;case"none":return}}const er=(e,t,r)=>r&&e.content.summary?e.content.summary:t.label??e.content.summary??"unknown",tr=(e,t,r,n)=>({...e,label:er(e,r[t],n),icon:r[t].icon,color:r[t].color,type:t}),rr=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,"0")}-${`${e.getDate()}`.padStart(2,"0")}`,nr=(e,{config:t,now:r,dropAfter:n})=>e.filter((e=>e.isWholeDayEvent?e.date.end>r:!(e.date.end<r))).sort(((e,t)=>e.date.start.getTime()-t.date.start.getTime())).find((e=>((e,t)=>{if(!t.filter_events)return!0;const r=Object.keys(t.settings).filter((e=>"others"!==e)),n=r.map((e=>Reflect.get(t.settings,e).pattern)).filter((e=>null!==e));return 0===n.length||n.find((t=>e.content.summary.includes(t)))})(e,t)&&(((e,t,r)=>e.isWholeDayEvent&&rr(e.date.start)===rr(t)&&!r||e.isWholeDayEvent&&rr(e.date.start)!==rr(t))(e,r,n)||!e.isWholeDayEvent))),ar=()=>{customElements.get("ha-form")||customElements.get("hui-button-card")?.getConfigElement(),customElements.get("ha-entity-picker")||customElements.get("hui-entities-card")?.getConfigElement(),customElements.get("ha-card-conditions-editor")||customElements.get("hui-conditional-card")?.getConfigElement()},ir=e=>{const t=new Date;t.setUTCHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0);const r=t.toISOString(),n=`${r.slice(r.indexOf("T"),-1)}${(()=>{const e=-(new Date).getTimezoneOffset();return`${e>=0?"+":""}${`${Number.parseInt(""+e/60,10)}`.padStart(2,"0")}:${(""+e%60).padStart(2,"0")}`})()}`;return e.map((e=>({date:{start:new Date("date"in e.start?`${e.start.date}${n}`:e.start.dateTime),end:new Date("date"in e.end?`${e.end.date}${n}`:e.end.dateTime)},isWholeDayEvent:Boolean("date"in e.start),content:{...Object.fromEntries(Object.entries(e).filter((([e])=>!["end","start"].includes(e))))}})))},or="important",sr=" !"+or,lr=Qe(class extends Xe{constructor(e){var t;if(super(e),e.type!==Ge||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,r)=>{const n=e[r];return null==n?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(e,[t]){const{style:r}=e.element;if(void 0===this.ht){this.ht=new Set;for(const e in t)this.ht.add(e);return this.render(t)}this.ht.forEach((e=>{null==t[e]&&(this.ht.delete(e),e.includes("-")?r.removeProperty(e):r[e]="")}));for(const e in t){const n=t[e];if(null!=n){this.ht.add(e);const t="string"==typeof n&&n.endsWith(sr);e.includes("-")||t?r.setProperty(e,t?n.slice(0,-11):n,t?or:""):r[e]=n}}return Te}});var cr={exports:{}},ur={exports:{}},dr=function(e){return!(!e||"string"==typeof e)&&(e instanceof Array||Array.isArray(e)||e.length>=0&&(e.splice instanceof Function||Object.getOwnPropertyDescriptor(e,e.length-1)&&"String"!==e.constructor.name))},hr=Array.prototype.concat,mr=Array.prototype.slice,gr=ur.exports=function(e){for(var t=[],r=0,n=e.length;r<n;r++){var a=e[r];dr(a)?t=hr.call(t,mr.call(a)):t.push(a)}return t};gr.wrap=function(e){return function(){return e(gr(arguments))}};var pr=ur.exports,fr={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},yr=pr,vr=Object.hasOwnProperty,br=Object.create(null);for(var _r in fr)vr.call(fr,_r)&&(br[fr[_r]]=_r);var wr=cr.exports={to:{},get:{}};function $r(e,t,r){return Math.min(Math.max(t,e),r)}function kr(e){var t=Math.round(e).toString(16).toUpperCase();return t.length<2?"0"+t:t}wr.get=function(e){var t,r;switch(e.substring(0,3).toLowerCase()){case"hsl":t=wr.get.hsl(e),r="hsl";break;case"hwb":t=wr.get.hwb(e),r="hwb";break;default:t=wr.get.rgb(e),r="rgb"}return t?{model:r,value:t}:null},wr.get.rgb=function(e){if(!e)return null;var t,r,n,a=[0,0,0,1];if(t=e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(n=t[2],t=t[1],r=0;r<3;r++){var i=2*r;a[r]=parseInt(t.slice(i,i+2),16)}n&&(a[3]=parseInt(n,16)/255)}else if(t=e.match(/^#([a-f0-9]{3,4})$/i)){for(n=(t=t[1])[3],r=0;r<3;r++)a[r]=parseInt(t[r]+t[r],16);n&&(a[3]=parseInt(n+n,16)/255)}else if(t=e.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(r=0;r<3;r++)a[r]=parseInt(t[r+1],0);t[4]&&(t[5]?a[3]=.01*parseFloat(t[4]):a[3]=parseFloat(t[4]))}else{if(!(t=e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)))return(t=e.match(/^(\w+)$/))?"transparent"===t[1]?[0,0,0,0]:vr.call(fr,t[1])?((a=fr[t[1]])[3]=1,a):null:null;for(r=0;r<3;r++)a[r]=Math.round(2.55*parseFloat(t[r+1]));t[4]&&(t[5]?a[3]=.01*parseFloat(t[4]):a[3]=parseFloat(t[4]))}for(r=0;r<3;r++)a[r]=$r(a[r],0,255);return a[3]=$r(a[3],0,1),a},wr.get.hsl=function(e){if(!e)return null;var t=e.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(t){var r=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,$r(parseFloat(t[2]),0,100),$r(parseFloat(t[3]),0,100),$r(isNaN(r)?1:r,0,1)]}return null},wr.get.hwb=function(e){if(!e)return null;var t=e.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(t){var r=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,$r(parseFloat(t[2]),0,100),$r(parseFloat(t[3]),0,100),$r(isNaN(r)?1:r,0,1)]}return null},wr.to.hex=function(){var e=yr(arguments);return"#"+kr(e[0])+kr(e[1])+kr(e[2])+(e[3]<1?kr(Math.round(255*e[3])):"")},wr.to.rgb=function(){var e=yr(arguments);return e.length<4||1===e[3]?"rgb("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+")":"rgba("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+", "+e[3]+")"},wr.to.rgb.percent=function(){var e=yr(arguments),t=Math.round(e[0]/255*100),r=Math.round(e[1]/255*100),n=Math.round(e[2]/255*100);return e.length<4||1===e[3]?"rgb("+t+"%, "+r+"%, "+n+"%)":"rgba("+t+"%, "+r+"%, "+n+"%, "+e[3]+")"},wr.to.hsl=function(){var e=yr(arguments);return e.length<4||1===e[3]?"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)":"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+e[3]+")"},wr.to.hwb=function(){var e=yr(arguments),t="";return e.length>=4&&1!==e[3]&&(t=", "+e[3]),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+t+")"},wr.to.keyword=function(e){return br[e.slice(0,3)]};var Ar=cr.exports;const xr={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},Er={};for(const e of Object.keys(xr))Er[xr[e]]=e;const zr={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var Sr=zr;for(const e of Object.keys(zr)){if(!("channels"in zr[e]))throw new Error("missing channels property: "+e);if(!("labels"in zr[e]))throw new Error("missing channel labels property: "+e);if(zr[e].labels.length!==zr[e].channels)throw new Error("channel and label counts mismatch: "+e);const{channels:t,labels:r}=zr[e];delete zr[e].channels,delete zr[e].labels,Object.defineProperty(zr[e],"channels",{value:t}),Object.defineProperty(zr[e],"labels",{value:r})}function Dr(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}zr.rgb.hsl=function(e){const t=e[0]/255,r=e[1]/255,n=e[2]/255,a=Math.min(t,r,n),i=Math.max(t,r,n),o=i-a;let s,l;i===a?s=0:t===i?s=(r-n)/o:r===i?s=2+(n-t)/o:n===i&&(s=4+(t-r)/o),s=Math.min(60*s,360),s<0&&(s+=360);const c=(a+i)/2;return l=i===a?0:c<=.5?o/(i+a):o/(2-i-a),[s,100*l,100*c]},zr.rgb.hsv=function(e){let t,r,n,a,i;const o=e[0]/255,s=e[1]/255,l=e[2]/255,c=Math.max(o,s,l),u=c-Math.min(o,s,l),d=function(e){return(c-e)/6/u+.5};return 0===u?(a=0,i=0):(i=u/c,t=d(o),r=d(s),n=d(l),o===c?a=n-r:s===c?a=1/3+t-n:l===c&&(a=2/3+r-t),a<0?a+=1:a>1&&(a-=1)),[360*a,100*i,100*c]},zr.rgb.hwb=function(e){const t=e[0],r=e[1];let n=e[2];const a=zr.rgb.hsl(e)[0],i=1/255*Math.min(t,Math.min(r,n));return n=1-1/255*Math.max(t,Math.max(r,n)),[a,100*i,100*n]},zr.rgb.cmyk=function(e){const t=e[0]/255,r=e[1]/255,n=e[2]/255,a=Math.min(1-t,1-r,1-n);return[100*((1-t-a)/(1-a)||0),100*((1-r-a)/(1-a)||0),100*((1-n-a)/(1-a)||0),100*a]},zr.rgb.keyword=function(e){const t=Er[e];if(t)return t;let r,n=1/0;for(const t of Object.keys(xr)){const a=Dr(e,xr[t]);a<n&&(n=a,r=t)}return r},zr.keyword.rgb=function(e){return xr[e]},zr.rgb.xyz=function(e){let t=e[0]/255,r=e[1]/255,n=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92;return[100*(.4124*t+.3576*r+.1805*n),100*(.2126*t+.7152*r+.0722*n),100*(.0193*t+.1192*r+.9505*n)]},zr.rgb.lab=function(e){const t=zr.rgb.xyz(e);let r=t[0],n=t[1],a=t[2];r/=95.047,n/=100,a/=108.883,r=r>.008856?r**(1/3):7.787*r+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,a=a>.008856?a**(1/3):7.787*a+16/116;return[116*n-16,500*(r-n),200*(n-a)]},zr.hsl.rgb=function(e){const t=e[0]/360,r=e[1]/100,n=e[2]/100;let a,i,o;if(0===r)return o=255*n,[o,o,o];a=n<.5?n*(1+r):n+r-n*r;const s=2*n-a,l=[0,0,0];for(let e=0;e<3;e++)i=t+1/3*-(e-1),i<0&&i++,i>1&&i--,o=6*i<1?s+6*(a-s)*i:2*i<1?a:3*i<2?s+(a-s)*(2/3-i)*6:s,l[e]=255*o;return l},zr.hsl.hsv=function(e){const t=e[0];let r=e[1]/100,n=e[2]/100,a=r;const i=Math.max(n,.01);n*=2,r*=n<=1?n:2-n,a*=i<=1?i:2-i;return[t,100*(0===n?2*a/(i+a):2*r/(n+r)),100*((n+r)/2)]},zr.hsv.rgb=function(e){const t=e[0]/60,r=e[1]/100;let n=e[2]/100;const a=Math.floor(t)%6,i=t-Math.floor(t),o=255*n*(1-r),s=255*n*(1-r*i),l=255*n*(1-r*(1-i));switch(n*=255,a){case 0:return[n,l,o];case 1:return[s,n,o];case 2:return[o,n,l];case 3:return[o,s,n];case 4:return[l,o,n];case 5:return[n,o,s]}},zr.hsv.hsl=function(e){const t=e[0],r=e[1]/100,n=e[2]/100,a=Math.max(n,.01);let i,o;o=(2-r)*n;const s=(2-r)*a;return i=r*a,i/=s<=1?s:2-s,i=i||0,o/=2,[t,100*i,100*o]},zr.hwb.rgb=function(e){const t=e[0]/360;let r=e[1]/100,n=e[2]/100;const a=r+n;let i;a>1&&(r/=a,n/=a);const o=Math.floor(6*t),s=1-n;i=6*t-o,0!=(1&o)&&(i=1-i);const l=r+i*(s-r);let c,u,d;switch(o){default:case 6:case 0:c=s,u=l,d=r;break;case 1:c=l,u=s,d=r;break;case 2:c=r,u=s,d=l;break;case 3:c=r,u=l,d=s;break;case 4:c=l,u=r,d=s;break;case 5:c=s,u=r,d=l}return[255*c,255*u,255*d]},zr.cmyk.rgb=function(e){const t=e[0]/100,r=e[1]/100,n=e[2]/100,a=e[3]/100;return[255*(1-Math.min(1,t*(1-a)+a)),255*(1-Math.min(1,r*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]},zr.xyz.rgb=function(e){const t=e[0]/100,r=e[1]/100,n=e[2]/100;let a,i,o;return a=3.2406*t+-1.5372*r+-.4986*n,i=-.9689*t+1.8758*r+.0415*n,o=.0557*t+-.204*r+1.057*n,a=a>.0031308?1.055*a**(1/2.4)-.055:12.92*a,i=i>.0031308?1.055*i**(1/2.4)-.055:12.92*i,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,a=Math.min(Math.max(0,a),1),i=Math.min(Math.max(0,i),1),o=Math.min(Math.max(0,o),1),[255*a,255*i,255*o]},zr.xyz.lab=function(e){let t=e[0],r=e[1],n=e[2];t/=95.047,r/=100,n/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,n=n>.008856?n**(1/3):7.787*n+16/116;return[116*r-16,500*(t-r),200*(r-n)]},zr.lab.xyz=function(e){let t,r,n;r=(e[0]+16)/116,t=e[1]/500+r,n=r-e[2]/200;const a=r**3,i=t**3,o=n**3;return r=a>.008856?a:(r-16/116)/7.787,t=i>.008856?i:(t-16/116)/7.787,n=o>.008856?o:(n-16/116)/7.787,t*=95.047,r*=100,n*=108.883,[t,r,n]},zr.lab.lch=function(e){const t=e[0],r=e[1],n=e[2];let a;a=360*Math.atan2(n,r)/2/Math.PI,a<0&&(a+=360);return[t,Math.sqrt(r*r+n*n),a]},zr.lch.lab=function(e){const t=e[0],r=e[1],n=e[2]/360*2*Math.PI;return[t,r*Math.cos(n),r*Math.sin(n)]},zr.rgb.ansi16=function(e,t=null){const[r,n,a]=e;let i=null===t?zr.rgb.hsv(e)[2]:t;if(i=Math.round(i/50),0===i)return 30;let o=30+(Math.round(a/255)<<2|Math.round(n/255)<<1|Math.round(r/255));return 2===i&&(o+=60),o},zr.hsv.ansi16=function(e){return zr.rgb.ansi16(zr.hsv.rgb(e),e[2])},zr.rgb.ansi256=function(e){const t=e[0],r=e[1],n=e[2];if(t===r&&r===n)return t<8?16:t>248?231:Math.round((t-8)/247*24)+232;return 16+36*Math.round(t/255*5)+6*Math.round(r/255*5)+Math.round(n/255*5)},zr.ansi16.rgb=function(e){let t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const r=.5*(1+~~(e>50));return[(1&t)*r*255,(t>>1&1)*r*255,(t>>2&1)*r*255]},zr.ansi256.rgb=function(e){if(e>=232){const t=10*(e-232)+8;return[t,t,t]}let t;e-=16;return[Math.floor(e/36)/5*255,Math.floor((t=e%36)/6)/5*255,t%6/5*255]},zr.rgb.hex=function(e){const t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},zr.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let r=t[0];3===t[0].length&&(r=r.split("").map((e=>e+e)).join(""));const n=parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},zr.rgb.hcg=function(e){const t=e[0]/255,r=e[1]/255,n=e[2]/255,a=Math.max(Math.max(t,r),n),i=Math.min(Math.min(t,r),n),o=a-i;let s,l;return s=o<1?i/(1-o):0,l=o<=0?0:a===t?(r-n)/o%6:a===r?2+(n-t)/o:4+(t-r)/o,l/=6,l%=1,[360*l,100*o,100*s]},zr.hsl.hcg=function(e){const t=e[1]/100,r=e[2]/100,n=r<.5?2*t*r:2*t*(1-r);let a=0;return n<1&&(a=(r-.5*n)/(1-n)),[e[0],100*n,100*a]},zr.hsv.hcg=function(e){const t=e[1]/100,r=e[2]/100,n=t*r;let a=0;return n<1&&(a=(r-n)/(1-n)),[e[0],100*n,100*a]},zr.hcg.rgb=function(e){const t=e[0]/360,r=e[1]/100,n=e[2]/100;if(0===r)return[255*n,255*n,255*n];const a=[0,0,0],i=t%1*6,o=i%1,s=1-o;let l=0;switch(Math.floor(i)){case 0:a[0]=1,a[1]=o,a[2]=0;break;case 1:a[0]=s,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=o;break;case 3:a[0]=0,a[1]=s,a[2]=1;break;case 4:a[0]=o,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=s}return l=(1-r)*n,[255*(r*a[0]+l),255*(r*a[1]+l),255*(r*a[2]+l)]},zr.hcg.hsv=function(e){const t=e[1]/100,r=t+e[2]/100*(1-t);let n=0;return r>0&&(n=t/r),[e[0],100*n,100*r]},zr.hcg.hsl=function(e){const t=e[1]/100,r=e[2]/100*(1-t)+.5*t;let n=0;return r>0&&r<.5?n=t/(2*r):r>=.5&&r<1&&(n=t/(2*(1-r))),[e[0],100*n,100*r]},zr.hcg.hwb=function(e){const t=e[1]/100,r=t+e[2]/100*(1-t);return[e[0],100*(r-t),100*(1-r)]},zr.hwb.hcg=function(e){const t=e[1]/100,r=1-e[2]/100,n=r-t;let a=0;return n<1&&(a=(r-n)/(1-n)),[e[0],100*n,100*a]},zr.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},zr.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},zr.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},zr.gray.hsl=function(e){return[0,0,e[0]]},zr.gray.hsv=zr.gray.hsl,zr.gray.hwb=function(e){return[0,100,e[0]]},zr.gray.cmyk=function(e){return[0,0,0,e[0]]},zr.gray.lab=function(e){return[e[0],0,0]},zr.gray.hex=function(e){const t=255&Math.round(e[0]/100*255),r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r},zr.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]};const Tr=Sr;function Mr(e){const t=function(){const e={},t=Object.keys(Tr);for(let r=t.length,n=0;n<r;n++)e[t[n]]={distance:-1,parent:null};return e}(),r=[e];for(t[e].distance=0;r.length;){const e=r.pop(),n=Object.keys(Tr[e]);for(let a=n.length,i=0;i<a;i++){const a=n[i],o=t[a];-1===o.distance&&(o.distance=t[e].distance+1,o.parent=e,r.unshift(a))}}return t}function Cr(e,t){return function(r){return t(e(r))}}function jr(e,t){const r=[t[e].parent,e];let n=Tr[t[e].parent][e],a=t[e].parent;for(;t[a].parent;)r.unshift(t[a].parent),n=Cr(Tr[t[a].parent][a],n),a=t[a].parent;return n.conversion=r,n}const Nr=Sr,Or=function(e){const t=Mr(e),r={},n=Object.keys(t);for(let e=n.length,a=0;a<e;a++){const e=n[a];null!==t[e].parent&&(r[e]=jr(e,t))}return r},Rr={};Object.keys(Nr).forEach((e=>{Rr[e]={},Object.defineProperty(Rr[e],"channels",{value:Nr[e].channels}),Object.defineProperty(Rr[e],"labels",{value:Nr[e].labels});const t=Or(e);Object.keys(t).forEach((r=>{const n=t[r];Rr[e][r]=function(e){const t=function(...t){const r=t[0];if(null==r)return r;r.length>1&&(t=r);const n=e(t);if("object"==typeof n)for(let e=n.length,t=0;t<e;t++)n[t]=Math.round(n[t]);return n};return"conversion"in e&&(t.conversion=e.conversion),t}(n),Rr[e][r].raw=function(e){const t=function(...t){const r=t[0];return null==r?r:(r.length>1&&(t=r),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(n)}))}));const Ir=Ar,Pr=Rr,Fr=["keyword","gray","hex"],Ur={};for(const e of Object.keys(Pr))Ur[[...Pr[e].labels].sort().join("")]=e;const Yr={};function Hr(e,t){if(!(this instanceof Hr))return new Hr(e,t);if(t&&t in Fr&&(t=null),t&&!(t in Pr))throw new Error("Unknown model: "+t);let r,n;if(null==e)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(e instanceof Hr)this.model=e.model,this.color=[...e.color],this.valpha=e.valpha;else if("string"==typeof e){const t=Ir.get(e);if(null===t)throw new Error("Unable to parse color from string: "+e);this.model=t.model,n=Pr[this.model].channels,this.color=t.value.slice(0,n),this.valpha="number"==typeof t.value[n]?t.value[n]:1}else if(e.length>0){this.model=t||"rgb",n=Pr[this.model].channels;const r=Array.prototype.slice.call(e,0,n);this.color=Vr(r,n),this.valpha="number"==typeof e[n]?e[n]:1}else if("number"==typeof e)this.model="rgb",this.color=[e>>16&255,e>>8&255,255&e],this.valpha=1;else{this.valpha=1;const t=Object.keys(e);"alpha"in e&&(t.splice(t.indexOf("alpha"),1),this.valpha="number"==typeof e.alpha?e.alpha:0);const n=t.sort().join("");if(!(n in Ur))throw new Error("Unable to parse color from object: "+JSON.stringify(e));this.model=Ur[n];const{labels:a}=Pr[this.model],i=[];for(r=0;r<a.length;r++)i.push(e[a[r]]);this.color=Vr(i)}if(Yr[this.model])for(n=Pr[this.model].channels,r=0;r<n;r++){const e=Yr[this.model][r];e&&(this.color[r]=e(this.color[r]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}Hr.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(e){let t=this.model in Ir.to?this:this.rgb();t=t.round("number"==typeof e?e:1);const r=1===t.valpha?t.color:[...t.color,this.valpha];return Ir.to[t.model](r)},percentString(e){const t=this.rgb().round("number"==typeof e?e:1),r=1===t.valpha?t.color:[...t.color,this.valpha];return Ir.to.rgb.percent(r)},array(){return 1===this.valpha?[...this.color]:[...this.color,this.valpha]},object(){const e={},{channels:t}=Pr[this.model],{labels:r}=Pr[this.model];for(let n=0;n<t;n++)e[r[n]]=this.color[n];return 1!==this.valpha&&(e.alpha=this.valpha),e},unitArray(){const e=this.rgb().color;return e[0]/=255,e[1]/=255,e[2]/=255,1!==this.valpha&&e.push(this.valpha),e},unitObject(){const e=this.rgb().object();return e.r/=255,e.g/=255,e.b/=255,1!==this.valpha&&(e.alpha=this.valpha),e},round(e){return e=Math.max(e||0,0),new Hr([...this.color.map(Lr(e)),this.valpha],this.model)},alpha(e){return void 0!==e?new Hr([...this.color,Math.max(0,Math.min(1,e))],this.model):this.valpha},red:qr("rgb",0,Br(255)),green:qr("rgb",1,Br(255)),blue:qr("rgb",2,Br(255)),hue:qr(["hsl","hsv","hsl","hwb","hcg"],0,(e=>(e%360+360)%360)),saturationl:qr("hsl",1,Br(100)),lightness:qr("hsl",2,Br(100)),saturationv:qr("hsv",1,Br(100)),value:qr("hsv",2,Br(100)),chroma:qr("hcg",1,Br(100)),gray:qr("hcg",2,Br(100)),white:qr("hwb",1,Br(100)),wblack:qr("hwb",2,Br(100)),cyan:qr("cmyk",0,Br(100)),magenta:qr("cmyk",1,Br(100)),yellow:qr("cmyk",2,Br(100)),black:qr("cmyk",3,Br(100)),x:qr("xyz",0,Br(95.047)),y:qr("xyz",1,Br(100)),z:qr("xyz",2,Br(108.833)),l:qr("lab",0,Br(100)),a:qr("lab",1),b:qr("lab",2),keyword(e){return void 0!==e?new Hr(e):Pr[this.model].keyword(this.color)},hex(e){return void 0!==e?new Hr(e):Ir.to.hex(this.rgb().round().color)},hexa(e){if(void 0!==e)return new Hr(e);const t=this.rgb().round().color;let r=Math.round(255*this.valpha).toString(16).toUpperCase();return 1===r.length&&(r="0"+r),Ir.to.hex(t)+r},rgbNumber(){const e=this.rgb().color;return(255&e[0])<<16|(255&e[1])<<8|255&e[2]},luminosity(){const e=this.rgb().color,t=[];for(const[r,n]of e.entries()){const e=n/255;t[r]=e<=.04045?e/12.92:((e+.055)/1.055)**2.4}return.2126*t[0]+.7152*t[1]+.0722*t[2]},contrast(e){const t=this.luminosity(),r=e.luminosity();return t>r?(t+.05)/(r+.05):(r+.05)/(t+.05)},level(e){const t=this.contrast(e);return t>=7?"AAA":t>=4.5?"AA":""},isDark(){const e=this.rgb().color;return(2126*e[0]+7152*e[1]+722*e[2])/1e4<128},isLight(){return!this.isDark()},negate(){const e=this.rgb();for(let t=0;t<3;t++)e.color[t]=255-e.color[t];return e},lighten(e){const t=this.hsl();return t.color[2]+=t.color[2]*e,t},darken(e){const t=this.hsl();return t.color[2]-=t.color[2]*e,t},saturate(e){const t=this.hsl();return t.color[1]+=t.color[1]*e,t},desaturate(e){const t=this.hsl();return t.color[1]-=t.color[1]*e,t},whiten(e){const t=this.hwb();return t.color[1]+=t.color[1]*e,t},blacken(e){const t=this.hwb();return t.color[2]+=t.color[2]*e,t},grayscale(){const e=this.rgb().color,t=.3*e[0]+.59*e[1]+.11*e[2];return Hr.rgb(t,t,t)},fade(e){return this.alpha(this.valpha-this.valpha*e)},opaquer(e){return this.alpha(this.valpha+this.valpha*e)},rotate(e){const t=this.hsl();let r=t.color[0];return r=(r+e)%360,r=r<0?360+r:r,t.color[0]=r,t},mix(e,t){if(!e||!e.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof e);const r=e.rgb(),n=this.rgb(),a=void 0===t?.5:t,i=2*a-1,o=r.alpha()-n.alpha(),s=((i*o==-1?i:(i+o)/(1+i*o))+1)/2,l=1-s;return Hr.rgb(s*r.red()+l*n.red(),s*r.green()+l*n.green(),s*r.blue()+l*n.blue(),r.alpha()*a+n.alpha()*(1-a))}};for(const e of Object.keys(Pr)){if(Fr.includes(e))continue;const{channels:t}=Pr[e];Hr.prototype[e]=function(...t){return this.model===e?new Hr(this):t.length>0?new Hr(t,e):new Hr([...(r=Pr[this.model][e].raw(this.color),Array.isArray(r)?r:[r]),this.valpha],e);var r},Hr[e]=function(...r){let n=r[0];return"number"==typeof n&&(n=Vr(r,t)),new Hr(n,e)}}function Lr(e){return function(t){return function(e,t){return Number(e.toFixed(t))}(t,e)}}function qr(e,t,r){e=Array.isArray(e)?e:[e];for(const n of e)(Yr[n]||(Yr[n]=[]))[t]=r;return e=e[0],function(n){let a;return void 0!==n?(r&&(n=r(n)),a=this[e](),a.color[t]=n,a):(a=this[e]().color[t],r&&(a=r(a)),a)}}function Br(e){return function(t){return Math.max(0,Math.min(e,t))}}function Vr(e,t){for(let r=0;r<t;r++)"number"!=typeof e[r]&&(e[r]=0);return e}var Zr=Hr;const Wr=["primary","accent","red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","light-grey","grey","dark-grey","blue-grey","black","white","disabled"];function Kr(e){if("primary"===e||"accent"===e)return`var(--rgb-${e}-color)`;if(Wr.includes(e))return`var(--rgb-${e})`;if(e.startsWith("#"))try{return Zr.rgb(e).rgb().array().join(", ")}catch(e){return""}return e}const Jr=G`
    --default-red: 244, 67, 54;
    --default-pink: 233, 30, 99;
    --default-purple: 106, 107, 201;
    --default-deep-purple: 111, 66, 193;
    --default-indigo: 63, 81, 181;
    --default-blue: 33, 150, 243;
    --default-light-blue: 3, 169, 244;
    --default-cyan: 0, 188, 212;
    --default-teal: 0, 150, 136;
    --default-green: 76, 175, 80;
    --default-light-green: 139, 195, 74;
    --default-lime: 205, 220, 57;
    --default-yellow: 255, 235, 59;
    --default-amber: 255, 193, 7;
    --default-orange: 255, 152, 0;
    --default-deep-orange: 255, 111, 0;
    --default-brown: 121, 85, 72;
    --default-light-grey: 189, 189, 189;
    --default-grey: 158, 158, 158;
    --default-dark-grey: 96, 96, 96;
    --default-blue-grey: 96, 125, 139;
    --default-black: 0, 0, 0;
    --default-white: 255, 255, 255;
    --default-disabled: 189, 189, 189;
`,Gr=G`
    --default-disabled: 111, 111, 111;
`,Qr=G`
    --spacing: var(--mush-spacing, 12px);

    /* Title */
    --title-padding: var(--mush-title-padding, 24px 12px 8px);
    --title-spacing: var(--mush-title-spacing, 8px);
    --title-font-size: var(--mush-title-font-size, 24px);
    --title-font-weight: var(--mush-title-font-weight, normal);
    --title-line-height: var(--mush-title-line-height, 32px);
    --title-color: var(--mush-title-color, var(--primary-text-color));
    --title-letter-spacing: var(--mush-title-letter-spacing, -0.288px);
    --subtitle-font-size: var(--mush-subtitle-font-size, 16px);
    --subtitle-font-weight: var(--mush-subtitle-font-weight, normal);
    --subtitle-line-height: var(--mush-subtitle-line-height, 24px);
    --subtitle-color: var(--mush-subtitle-color, var(--secondary-text-color));
    --subtitle-letter-spacing: var(--mush-subtitle-letter-spacing, 0px);

    /* Card */
    --card-primary-font-size: var(--mush-card-primary-font-size, 14px);
    --card-secondary-font-size: var(--mush-card-secondary-font-size, 12px);
    --card-primary-font-weight: var(--mush-card-primary-font-weight, 500);
    --card-secondary-font-weight: var(--mush-card-secondary-font-weight, 400);
    --card-primary-line-height: var(--mush-card-primary-line-height, 20px);
    --card-secondary-line-height: var(--mush-card-secondary-line-height, 16px);
    --card-primary-color: var(--mush-card-primary-color, var(--primary-text-color));
    --card-secondary-color: var(--mush-card-secondary-color, var(--primary-text-color));
    --card-primary-letter-spacing: var(--mush-card-primary-letter-spacing, 0.1px);
    --card-secondary-letter-spacing: var(--mush-card-secondary-letter-spacing, 0.4px);

    /* Chips */
    --chip-spacing: var(--mush-chip-spacing, 8px);
    --chip-padding: var(--mush-chip-padding, 0 0.25em);
    --chip-height: var(--mush-chip-height, 36px);
    --chip-border-radius: var(--mush-chip-border-radius, 19px);
    --chip-border-width: var(--mush-chip-border-width, var(--ha-card-border-width, 1px));
    --chip-border-color: var(
        --mush-chip-border-color,
        var(--ha-card-border-color, var(--divider-color))
    );
    --chip-box-shadow: var(--mush-chip-box-shadow, var(--ha-card-box-shadow, "none"));
    --chip-font-size: var(--mush-chip-font-size, 0.3em);
    --chip-font-weight: var(--mush-chip-font-weight, bold);
    --chip-icon-size: var(--mush-chip-icon-size, 0.5em);
    --chip-avatar-padding: var(--mush-chip-avatar-padding, 0.1em);
    --chip-avatar-border-radius: var(--mush-chip-avatar-border-radius, 50%);
    --chip-background: var(
        --mush-chip-background,
        var(--ha-card-background, var(--card-background-color, white))
    );
    /* Controls */
    --control-border-radius: var(--mush-control-border-radius, 12px);
    --control-height: var(--mush-control-height, 42px);
    --control-button-ratio: var(--mush-control-button-ratio, 1);
    --control-icon-size: var(--mush-control-icon-size, 0.5em);

    /* Slider */
    --slider-threshold: var(--mush-slider-threshold);

    /* Input Number */
    --input-number-debounce: var(--mush-input-number-debounce);

    /* Layout */
    --layout-align: var(--mush-layout-align, center);

    /* Badge */
    --badge-size: var(--mush-badge-size, 16px);
    --badge-icon-size: var(--mush-badge-icon-size, 0.75em);
    --badge-border-radius: var(--mush-badge-border-radius, 50%);

    /* Icon */
    --icon-border-radius: var(--mush-icon-border-radius, 50%);
    --icon-size: var(--mush-icon-size, 40px);
    --icon-symbol-size: var(--mush-icon-symbol-size, 0.6em);
`,Xr=G`
    /* RGB */
    /* Standard colors */
    --rgb-red: var(--mush-rgb-red, var(--default-red));
    --rgb-pink: var(--mush-rgb-pink, var(--default-pink));
    --rgb-purple: var(--mush-rgb-purple, var(--default-purple));
    --rgb-deep-purple: var(--mush-rgb-deep-purple, var(--default-deep-purple));
    --rgb-indigo: var(--mush-rgb-indigo, var(--default-indigo));
    --rgb-blue: var(--mush-rgb-blue, var(--default-blue));
    --rgb-light-blue: var(--mush-rgb-light-blue, var(--default-light-blue));
    --rgb-cyan: var(--mush-rgb-cyan, var(--default-cyan));
    --rgb-teal: var(--mush-rgb-teal, var(--default-teal));
    --rgb-green: var(--mush-rgb-green, var(--default-green));
    --rgb-light-green: var(--mush-rgb-light-green, var(--default-light-green));
    --rgb-lime: var(--mush-rgb-lime, var(--default-lime));
    --rgb-yellow: var(--mush-rgb-yellow, var(--default-yellow));
    --rgb-amber: var(--mush-rgb-amber, var(--default-amber));
    --rgb-orange: var(--mush-rgb-orange, var(--default-orange));
    --rgb-deep-orange: var(--mush-rgb-deep-orange, var(--default-deep-orange));
    --rgb-brown: var(--mush-rgb-brown, var(--default-brown));
    --rgb-light-grey: var(--mush-rgb-light-grey, var(--default-light-grey));
    --rgb-grey: var(--mush-rgb-grey, var(--default-grey));
    --rgb-dark-grey: var(--mush-rgb-dark-grey, var(--default-dark-grey));
    --rgb-blue-grey: var(--mush-rgb-blue-grey, var(--default-blue-grey));
    --rgb-black: var(--mush-rgb-black, var(--default-black));
    --rgb-white: var(--mush-rgb-white, var(--default-white));
    --rgb-disabled: var(--mush-rgb-disabled, var(--default-disabled));

    /* Action colors */
    --rgb-info: var(--mush-rgb-info, var(--rgb-blue));
    --rgb-success: var(--mush-rgb-success, var(--rgb-green));
    --rgb-warning: var(--mush-rgb-warning, var(--rgb-orange));
    --rgb-danger: var(--mush-rgb-danger, var(--rgb-red));

    /* State colors */
    --rgb-state-vacuum: var(--mush-rgb-state-vacuum, var(--rgb-teal));
    --rgb-state-fan: var(--mush-rgb-state-fan, var(--rgb-green));
    --rgb-state-light: var(--mush-rgb-state-light, var(--rgb-orange));
    --rgb-state-entity: var(--mush-rgb-state-entity, var(--rgb-blue));
    --rgb-state-media-player: var(--mush-rgb-state-media-player, var(--rgb-indigo));
    --rgb-state-lock: var(--mush-rgb-state-lock, var(--rgb-blue));
    --rgb-state-number: var(--mush-rgb-state-number, var(--rgb-blue));
    --rgb-state-humidifier: var(--mush-rgb-state-humidifier, var(--rgb-purple));

    /* State alarm colors */
    --rgb-state-alarm-disarmed: var(--mush-rgb-state-alarm-disarmed, var(--rgb-info));
    --rgb-state-alarm-armed: var(--mush-rgb-state-alarm-armed, var(--rgb-success));
    --rgb-state-alarm-triggered: var(--mush-rgb-state-alarm-triggered, var(--rgb-danger));

    /* State person colors */
    --rgb-state-person-home: var(--mush-rgb-state-person-home, var(--rgb-success));
    --rgb-state-person-not-home: var(--mush-rgb-state-person-not-home, var(--rgb-danger));
    --rgb-state-person-zone: var(--mush-rgb-state-person-zone, var(--rgb-info));
    --rgb-state-person-unknown: var(--mush-rgb-state-person-unknown, var(--rgb-grey));

    /* State update colors */
    --rgb-state-update-on: var(--mush-rgb-state-update-on, var(--rgb-orange));
    --rgb-state-update-off: var(--mush-rgb-update-off, var(--rgb-green));
    --rgb-state-update-installing: var(--mush-rgb-update-installing, var(--rgb-blue));

    /* State lock colors */
    --rgb-state-lock-locked: var(--mush-rgb-state-lock-locked, var(--rgb-green));
    --rgb-state-lock-unlocked: var(--mush-rgb-state-lock-unlocked, var(--rgb-red));
    --rgb-state-lock-pending: var(--mush-rgb-state-lock-pending, var(--rgb-orange));

    /* State cover colors */
    --rgb-state-cover-open: var(--mush-rgb-state-cover-open, var(--rgb-blue));
    --rgb-state-cover-closed: var(--mush-rgb-state-cover-closed, var(--rgb-disabled));

    /* State climate colors */
    --rgb-state-climate-auto: var(--mush-rgb-state-climate-auto, var(--rgb-green));
    --rgb-state-climate-cool: var(--mush-rgb-state-climate-cool, var(--rgb-blue));
    --rgb-state-climate-dry: var(--mush-rgb-state-climate-dry, var(--rgb-orange));
    --rgb-state-climate-fan-only: var(--mush-rgb-state-climate-fan-only, var(--rgb-teal));
    --rgb-state-climate-heat: var(--mush-rgb-state-climate-heat, var(--rgb-deep-orange));
    --rgb-state-climate-heat-cool: var(--mush-rgb-state-climate-heat-cool, var(--rgb-green));
    --rgb-state-climate-idle: var(--mush-rgb-state-climate-idle, var(--rgb-disabled));
    --rgb-state-climate-off: var(--mush-rgb-state-climate-off, var(--rgb-disabled));
`,en="trash-card",tn=`${en}-editor`;(t=>{const r=window;r.customCards=r.customCards||[],r.customCards.push({...t,preview:!0,documentationURL:`${e}/blob/main/README.md`})})({type:en,name:"TrashCard",description:"TrashCard - indicates what type of trash will be picked up next based on your calendar entries 🗑️"});let rn=class extends Ke{constructor(){super(...arguments),this.startDate=new Date,this.endDate=new Date}static async getConfigElement(){return await Promise.resolve().then((function(){return jn})),document.createElement(tn)}static async getStubConfig(e){const t=Object.keys(e.states);return{type:`custom:${en}`,entity:t[0]}}connectedCallback(){super.connectedCallback(),ar()}getCardSize(){return 1}setConfig(e){this.config={tap_action:{action:"more-info"},hold_action:{action:"more-info"},...e}}setDateRange(){this.startDate=new Date,this.endDate=new Date,this.endDate.setDate(this.endDate.getDate()+(this.config?.next_days??2))}fetchCurrentTrashData(){if(!this.hass)return;this.setDateRange();const e=rr(this.startDate),t=rr(this.endDate),r=`calendars/${this.config?.entity}?start=${e}&end=${t}`,n=((e,t)=>{const[r,n,a]=t.split(":");return!(e.getHours()<Number(r))&&(e.getHours()>Number(r)||e.getMinutes()>Number(n)||e.getSeconds()>=Number(a))})(new Date,this.config.drop_todayevents_from??"10:00:00");this.hass.callApi("GET",r).then((e=>((e,{settings:t,useSummary:r})=>{if(!e||!("summary"in e.content))return{...e,type:"none"};const{content:{summary:n}}=e,a=["organic","paper","recycle","waste"].find((e=>((e,t)=>e in t)(e,t)&&t[e].pattern&&n.includes(t[e].pattern)));return tr(e,a&&a in t?a:"others",t,r)})(nr(ir(e),{config:{settings:this.config.settings,filter_events:this.config.filter_events},dropAfter:n,now:new Date}),{settings:this.config.settings,useSummary:Boolean(this.config.use_summary)}))).then((e=>{this.currentItem=e,this.lastChanged=new Date}))}shouldUpdate(e){return!!e.has("currentItem")||(e.delete("currentItem"),(!this.lastChanged||e.has("config")||Date.now()-this.lastChanged.getTime()>5e3)&&this.fetchCurrentTrashData(),!1)}isValidItem(e){return Boolean(e&&"none"!==e.type)}getDateString(e){if(!this.isValidItem(e)||!this.hass)return"";const t=Yt(this.hass),r=new Date,n=new Date;n.setDate(n.getDate()+1);const a=rr(r),i=rr(n),o=rr(e.date.start),s=e.isWholeDayEvent?void 0:e.date.start.toLocaleTimeString(this.hass.language,{hour:"numeric",minute:"numeric"}),l=e.isWholeDayEvent?void 0:e.date.end.toLocaleTimeString(this.hass.language,{hour:"numeric",minute:"numeric"});if(o===a||o===i){return`${t(`${`card.trash.${o===a?"today":"tomorrow"}${s?"_from_till":""}`}`).replace("<START>",s??"").replace("<END>",l??"")}`}if("counter"===this.config?.day_style){const r=864e5,n=Math.round(Math.abs((Date.now()-e.date.start.getTime())/r));return`${t(`card.trash.daysleft${n>1?"_more":""}${s?"_from_till":""}`).replace("<DAYS>",`${n}`).replace("<START>",s??"").replace("<END>",l??"")}`}const c=e.date.start.toLocaleDateString(this.hass.language,{weekday:"long",year:"numeric",month:"long",day:"numeric"});return t(`${"card.trash.day"+(s?"_from_till":"")}`).replace("<DAY>",c).replace("<START>",s??"").replace("<END>",l??"")}render(){if(!this.config||!this.hass||!this.config.entity)return Me;const e=this.config.entity,t=this.hass.states[e];if(!t)return Me;const r=this.currentItem;if(!this.isValidItem(r))return De``;const n={layout:(a=this.config).layout??Wt(a),fill_container:a.fill_container??!1,primary_info:a.primary_info??Jt(a),secondary_info:a.secondary_info??Gt(a),icon_type:a.icon_type??Kt(a)};var a;const i=function(e){const t=e.language||"en";return e.translationMetadata.translations[t]&&e.translationMetadata.translations[t].isRTL||!1}(this.hass),{label:o}=r,s=r.color??"disabled",l={};if("disabled"!==s){const e=Kr(s);l["background-color"]=`rgba(${e}, 0.5)`}const c=this.getDateString(r);return De`
            <ha-card
                class=${Zt({"fill-container":n.fill_container,fullsize:!0===this.config.full_size})}
                style=${lr(l)}
            >
                <mushroom-card .appearance=${n} ?rtl=${i}>
                    <mushroom-state-item
                        ?rtl=${i}
                        .appearance=${n}
                        .actionHandler=${tt({hasHold:rt(this.config.hold_action),hasDoubleClick:rt(this.config.double_tap_action)})}
                    >
                        ${this.renderIcon(t,r)}
                        <mushroom-state-info
                            slot="info"
                            .primary=${o}
                            .secondary=${c}
                            .multiline_secondary=${!0}
                        ></mushroom-state-info>
                    </mushroom-state-item>
                </mushroom-card>
            </ha-card>
        `}renderIcon(e,t){if(!this.isValidItem(t))return De``;const r=t.icon??"mdi:delete-outline",n=t.color??"disabled",a={"--icon-color":"rgba(var(--white-color), 0.5)"};return De`
            <mushroom-shape-icon
                slot="icon"
                .disabled=${"disabled"===n}
                style=${lr(a)}
            >
                <ha-state-icon .state=${e} .icon=${r}></ha-state-icon>
            </mushroom-shape-icon>
        `}renderStateInfo(e,t,r,n){if(!this.hass)return null;const a=((e,t,r,n,a,i)=>{const o=a[t.entity_id];return E(e,r,n,o,t.entity_id,t.attributes,void 0!==i?i:t.state)})(this.hass.localize,e,this.hass.locale,this.hass.config,this.hass.entities),i=n??a,o=Xt(t.primary_info,r,i,e,this.hass),s=Xt(t.secondary_info,r,i,e,this.hass);return De`
            <mushroom-state-info
                slot="info"
                .primary=${o}
                .secondary=${s}
            ></mushroom-state-info>
        `}static get styles(){return[Bt,G`
          :host {
              ${Jr}
          }
          :host([dark-mode]) {
              ${Gr}
          }
          :host {
              ${Xr}
              ${Qr}
          }
        `,Vt,G`
          ha-card.fullsize {
              margin-left: -17px;
              margin-right: -17px;
              margin-top: -4px;
          }
          mushroom-state-item {
              cursor: pointer;
          }
          mushroom-shape-icon {
              --icon-color: rgb(var(--rgb-state-entity));
              --shape-color: rgba(var(--rgb-state-entity), 0.2);
          }
      `]}};t([pt({attribute:!1})],rn.prototype,"hass",void 0),t([ft()],rn.prototype,"config",void 0),t([pt()],rn.prototype,"currentItem",void 0),t([pt()],rn.prototype,"startDate",void 0),t([pt()],rn.prototype,"endDate",void 0),rn=t([ht(en)],rn),console.info("%c🗑️ TrashCard 1.4.5","background-color: #ef5350; color: #ffffff");class nn extends TypeError{constructor(e,t){let r;const{message:n,explanation:a,...i}=e,{path:o}=e,s=0===o.length?n:`At path: ${o.join(".")} -- ${n}`;super(a??s),null!=a&&(this.cause=s),Object.assign(this,i),this.name=this.constructor.name,this.failures=()=>r??(r=[e,...t()])}}function an(e){return"object"==typeof e&&null!=e}function on(e){return"symbol"==typeof e?e.toString():"string"==typeof e?JSON.stringify(e):`${e}`}function sn(e,t,r,n){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});const{path:a,branch:i}=t,{type:o}=r,{refinement:s,message:l=`Expected a value of type \`${o}\`${s?` with refinement \`${s}\``:""}, but received: \`${on(n)}\``}=e;return{value:n,type:o,refinement:s,key:a[a.length-1],path:a,branch:i,...e,message:l}}function*ln(e,t,r,n){(function(e){return an(e)&&"function"==typeof e[Symbol.iterator]})(e)||(e=[e]);for(const a of e){const e=sn(a,t,r,n);e&&(yield e)}}function*cn(e,t,r={}){const{path:n=[],branch:a=[e],coerce:i=!1,mask:o=!1}=r,s={path:n,branch:a};if(i&&(e=t.coercer(e,s),o&&"type"!==t.type&&an(t.schema)&&an(e)&&!Array.isArray(e)))for(const r in e)void 0===t.schema[r]&&delete e[r];let l="valid";for(const n of t.validator(e,s))n.explanation=r.message,l="not_valid",yield[n,void 0];for(let[c,u,d]of t.entries(e,s)){const t=cn(u,d,{path:void 0===c?n:[...n,c],branch:void 0===c?a:[...a,u],coerce:i,mask:o,message:r.message});for(const r of t)r[0]?(l=null!=r[0].refinement?"not_refined":"not_valid",yield[r[0],void 0]):i&&(u=r[1],void 0===c?e=u:e instanceof Map?e.set(c,u):e instanceof Set?e.add(u):an(e)&&(void 0!==u||c in e)&&(e[c]=u))}if("not_valid"!==l)for(const n of t.refiner(e,s))n.explanation=r.message,l="not_refined",yield[n,void 0];"valid"===l&&(yield[void 0,e])}class un{constructor(e){const{type:t,schema:r,validator:n,refiner:a,coercer:i=(e=>e),entries:o=function*(){}}=e;this.type=t,this.schema=r,this.entries=o,this.coercer=i,this.validator=n?(e,t)=>ln(n(e,t),t,this,e):()=>[],this.refiner=a?(e,t)=>ln(a(e,t),t,this,e):()=>[]}assert(e,t){return dn(e,this,t)}create(e,t){return function(e,t,r){const n=hn(e,t,{coerce:!0,message:r});if(n[0])throw n[0];return n[1]}(e,this,t)}is(e){return function(e,t){const r=hn(e,t);return!r[0]}(e,this)}mask(e,t){return function(e,t,r){const n=hn(e,t,{coerce:!0,mask:!0,message:r});if(n[0])throw n[0];return n[1]}(e,this,t)}validate(e,t={}){return hn(e,this,t)}}function dn(e,t,r){const n=hn(e,t,{message:r});if(n[0])throw n[0]}function hn(e,t,r={}){const n=cn(e,t,r),a=function(e){const{done:t,value:r}=e.next();return t?void 0:r}(n);if(a[0]){const e=new nn(a[0],(function*(){for(const e of n)e[0]&&(yield e[0])}));return[e,void 0]}return[void 0,a[1]]}function mn(e,t){return new un({type:e,schema:null,validator:t})}function gn(){return mn("boolean",(e=>"boolean"==typeof e))}function pn(e){const t=on(e),r=typeof e;return new un({type:"literal",schema:"string"===r||"number"===r||"boolean"===r?e:null,validator:r=>r===e||`Expected the literal \`${t}\`, but received: ${on(r)}`})}function fn(e){const t=e?Object.keys(e):[],r=mn("never",(()=>!1));return new un({type:"object",schema:e||null,*entries(n){if(e&&an(n)){const a=new Set(Object.keys(n));for(const r of t)a.delete(r),yield[r,n[r],e[r]];for(const e of a)yield[e,n[e],r]}},validator:e=>an(e)||`Expected an object, but received: ${on(e)}`,coercer:e=>an(e)?{...e}:e})}function yn(e){return new un({...e,validator:(t,r)=>void 0===t||e.validator(t,r),refiner:(t,r)=>void 0===t||e.refiner(t,r)})}function vn(){return mn("string",(e=>"string"==typeof e||`Expected a string, but received: ${on(e)}`))}const bn=["icon_color","layout","fill_container","primary_info","secondary_info","icon_type","content_info","use_entity_picture","collapsible_controls","icon_animation"],_n=q([P("horizontal"),P("vertical"),P("default")]),wn=["default","counter"],$n=function(...e){const t="type"===e[0].type,r=e.map((e=>e.schema)),n=Object.assign({},...r);return t?function(e){const t=Object.keys(e);return new un({type:"type",schema:e,*entries(r){if(an(r))for(const n of t)yield[n,r[n],e[n]]},validator:e=>an(e)||`Expected an object, but received: ${on(e)}`,coercer:e=>an(e)?{...e}:e})}(n):fn(n)}(U({index:Y(F()),view_index:Y(F()),view_layout:O("any",(()=>!0)),type:H()}),fn({entity:yn(vn()),name:yn(vn()),layout:yn(_n),fill_container:yn(gn()),filter_events:yn(gn()),full_size:yn(gn()),use_summary:yn(gn()),next_days:yn(mn("integer",(e=>"number"==typeof e&&!isNaN(e)&&Number.isInteger(e)||`Expected an integer, but received: ${on(e)}`))),drop_todayevents_from:yn(vn()),day_style:yn(function(e){const t=e.map((e=>e.type)).join(" | ");return new un({type:"union",schema:null,coercer(t){for(const r of e){const[e,n]=r.validate(t,{coerce:!0});if(!e)return n}return t},validator(r,n){const a=[];for(const t of e){const[...e]=cn(r,t,n),[i]=e;if(!i[0])return[];for(const[t]of e)t&&a.push(t)}return[`Expected the value to satisfy a union of \`${t}\`, but received: ${on(r)}`,...a]}})}([pn(wn[0]),pn(wn[1])])),settings:yn(fn({organic:yn(fn({color:yn(vn()),icon:yn(vn()),label:yn(vn()),pattern:yn(vn())})),paper:yn(fn({color:yn(vn()),icon:yn(vn()),label:yn(vn()),pattern:yn(vn())})),recycle:yn(fn({color:yn(vn()),icon:yn(vn()),label:yn(vn()),pattern:yn(vn())})),waste:yn(fn({color:yn(vn()),icon:yn(vn()),label:yn(vn()),pattern:yn(vn())})),others:yn(fn({color:yn(vn()),icon:yn(vn())}))}))})),kn=[{label:"icon",name:"icon",selector:{icon:{}},context:{icon_entity:"entity"}},{label:"color",name:"color",selector:{ui_color:{}}}],An=[{label:"label",name:"label",selector:{text:{}}},...kn,{label:"pattern",name:"pattern",selector:{text:{}}}],xn=e=>[{name:"entity",selector:{entity:{domain:"calendar"}}},{type:"expandable",name:"",title:e("editor.form.tabs.settings"),icon:"mdi:cog",schema:[{name:"filter_events",selector:{boolean:{}}},{name:"drop_todayevents_from",default:{hours:11,minutes:0,seconds:0},selector:{time:{}}},{name:"next_days",selector:{number:{min:1,max:365,step:1,mode:"box"}}}]},{type:"expandable",name:"",title:e("editor.form.tabs.appearance"),icon:"mdi:palette",schema:[{name:"layout",selector:{mush_layout:{}}},{name:"fill_container",selector:{boolean:{}}},{name:"full_size",selector:{boolean:{}}},{name:"use_summary",selector:{boolean:{}}},{name:"day_style",selector:{trashcard_datestyle:{}}}]}],En={},zn=Qe(class extends Xe{constructor(){super(...arguments),this.st=En}render(e,t){return t()}update(e,[t,r]){if(Array.isArray(t)){if(Array.isArray(this.st)&&this.st.length===t.length&&t.every(((e,t)=>e===this.st[t])))return Te}else if(this.st===t)return Te;return this.st=Array.isArray(t)?Array.from(t):t,this.render(t,r)}});let Sn=class extends Ke{constructor(){super(...arguments),this.attached=!1}connectedCallback(){super.connectedCallback(),this.attached=!0}disconnectedCallback(){super.disconnectedCallback(),this.attached=!1}updated(e){super.updated(e);const t=e.has("attached"),r=e.has("settings");(r||t)&&r&&this.handleSettingsChanged()}async handleSettingsChanged(){await this.updateComplete}render(){if(!this.hass||!this.settings)return Me;const e=Yt(this.hass),t=Object.entries(this.settings);return De`
      <div class="settings">
      ${zn([this.settings],(()=>t.map((([t,r],n)=>De`
          <div class="setting">
            <div class="icon">
              <ha-icon icon="${r.icon}"></ha-icon>
            </div>

            <div class="special-row">
              <div>
                <span> ${r.label??e(`editor.card.trash.pattern.type.${t}`)}</span>
              </div>
            </div>

            <ha-icon-button
              .label=${e("editor.card.trash.pattern.edit")}
              class="edit-icon"
              .index=${n}
              @click=${this.editItem}
              >
              <ha-icon icon="mdi:pencil"></ha-icon>
            </ha-icon-button>
          </div>`))))}
    </div>`}editItem(e){const{index:t}=e.currentTarget,r=Object.entries(this.settings);p(this,"edit-detail-element",{subElementConfig:{index:t,key:r[t][0],type:"setting",elementConfig:r[t][1]}})}static get styles(){return[G`
        .settings {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            grid-gap: var(--spacing);
        }

        .setting {
            display: flex;
            align-items: center;
        }

        ha-icon {
            display: flex;
        }

        mushroom-select {
            width: 100%;
        }

        .setting .icon {
            padding-right: 8px;
            cursor: move;
        }

        .setting .icon > * {
            pointer-events: none;
        }

        .special-row {
            height: 60px;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-grow: 1;
        }

        .special-row div {
            display: flex;
            flex-direction: column;
        }

        .remove-icon,
        .edit-icon {
            --mdc-icon-button-size: 36px;
            color: var(--secondary-text-color);
        }

        .secondary {
            font-size: 12px;
            color: var(--secondary-text-color);
        }
        `]}};t([pt({attribute:!1})],Sn.prototype,"hass",void 0),t([ft()],Sn.prototype,"settings",void 0),t([ft()],Sn.prototype,"attached",void 0),Sn=t([ht("trash-card-pattern-editor")],Sn);const Dn=new Set(["label","icon","color","pattern"]),Tn=new Set(["next_days","filter_events","full_size","drop_todayevents_from","use_summary","day_style"]),Mn=e=>!!e&&e.themes.darkMode;let Cn=class extends Ke{constructor(){super(...arguments),this.selectedTabIndex=0,this.schema=c(xn),this.computeLabel=e=>{if(!this.hass)return e.name;const t=Yt(this.hass);return bn.includes(e.name)||Tn.has(e.name)?t(`editor.card.generic.${e.name}`):e.label&&Dn.has(e.label)?t(`editor.card.trash.pattern.fields.${e.label}`):this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}}connectedCallback(){super.connectedCallback(),ar()}setConfig(e){dn(e,$n),this.config={drop_todayevents_from:"10:00:00",next_days:2,settings:{organic:{icon:"mdi:flower"},paper:{icon:"mdi:newspaper"},recycle:{icon:"mdi:recycle-variant"},waste:{icon:"mdi:trash-can-outline"},others:{icon:"mdi:dump-truck"},...e.settings},day_style:"default",...e}}updated(e){if(super.updated(e),e.has("hass")&&this.hass){const t=Mn(e.get("hass")),r=Mn(this.hass);t!==r&&this.toggleAttribute("dark-mode",r)}}editDetailElement(e){this.subElementEditorConfig=e.detail.subElementConfig}renderFormPatternsEditor(){if(!this.hass)return Me;const e=Yt(this.hass);return this.subElementEditorConfig?De`
        <div class="header" id="trashcard-pattern-editor">
          <div class="back-title">
              <ha-icon-button
                  .label=${this.hass.localize("ui.common.back")}
                  @click=${this.goBack}
              >
                <ha-icon icon="mdi:arrow-left"></ha-icon>
              </ha-icon-button>
              <span slot="title">${e("editor.card.trash.pattern.title")}</span>
          </div>
        </div>
          <ha-form
              .hass=${this.hass}
              .computeLabel=${this.computeLabel}
              .data=${this.subElementEditorConfig.elementConfig}
              .schema=${"others"===this.subElementEditorConfig.key?kn:An}
              @value-changed=${this.handleSubElementChanged}
          >
          </ha-form>
      `:De`
      <trash-card-pattern-editor
        .hass=${this.hass}
          .settings=${this.config.settings}
          @settings-changed=${this.valueChanged}
          @edit-detail-element=${this.editDetailElement}
      ></trash-card-pattern-editor>`}goBack(){this.subElementEditorConfig=void 0}handleSubElementChanged(e){if(e.stopPropagation(),!this.config||!this.hass||!this.subElementEditorConfig)return;const t=this.subElementEditorConfig.key,{value:r}=e.detail;this.config.settings={...this.config.settings,[t]:{...this.config.settings[t]??{},...r}},this.subElementEditorConfig={...this.subElementEditorConfig,elementConfig:r},p(this,"config-changed",{config:this.config})}render(){if(!this.hass||!this.config)return Me;const e=Yt(this.hass),t=this.schema(e);return De`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${t}
        .computeLabel=${this.computeLabel}
        @value-changed=${this.valueChanged}
      ></ha-form>
      <ha-expansion-panel 
        id="pattern-expansion-panel" 
        outlined
        >
        <div slot="header" role="heading" aria-level="3" >
          <ha-icon icon="mdi:image-filter-center-focus">
          </ha-icon>
          ${e("editor.form.tabs.patterns")}
        </div>
        <div class="content">
          ${this.renderFormPatternsEditor()}
        </div>
      </ha-form-expandable>

    `}valueChanged(e){p(this,"config-changed",{config:e.detail.value})}static get styles(){return[Bt,G`
        :host {
            ${Jr}
        }
        :host([dark-mode]) {
            ${Gr}
        }
        :host {
            ${Xr}
            ${Qr}
        }

        #trashcard-pattern-editor header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        #trashcard-pattern-editor .back-title {
            display: flex;
            align-items: center;
            font-size: 18px;
        }

        #trashcard-pattern-editor ha-icon {
             display: flex;
             align-items: center;
             justify-content: center;
         }

        #pattern-expansion-panel {
          margin-top: 24px;
          display: flex !important;
          flex-direction: column;
        }
        #pattern-expansion-panel ha-form {
          display: block;
        }
        #pattern-expansion-panel .content {
          padding: 12px;
        }
        #pattern-expansion-panel {
          display: block;
          --expansion-panel-content-padding: 0;
          border-radius: 6px;
          --ha-card-border-radius: 6px;
        }
        #ha-expansion-panel ha-svg-icon,
        #ha-expansion-panel ha-icon {
          color: var(--secondary-text-color);
        }
      `]}};t([pt({attribute:!1})],Cn.prototype,"hass",void 0),t([ft()],Cn.prototype,"config",void 0),t([pt()],Cn.prototype,"selectedTabIndex",void 0),t([ft()],Cn.prototype,"subElementEditorConfig",void 0),t([ft()],Cn.prototype,"schema",void 0),Cn=t([ht(tn)],Cn);var jn=Object.freeze({__proto__:null,get TrashCardEditor(){return Cn},computeDarkMode:Mn});export{rn as TrashCard};
