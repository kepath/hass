function e(e,t,s,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,s,i);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(o<3?n(a):o>3?n(t,s,a):n(t,s))||a);return o>3&&a&&Object.defineProperty(t,s,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,s=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let o=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(s&&void 0===e){const s=void 0!==t&&1===t.length;s&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(t,e))}return e}toString(){return this.cssText}};const a=(e,...t)=>{const s=1===e.length?e[0]:t.reduce(((t,s,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1]),e[0]);return new o(s,e,i)},r=(e,i)=>{if(s)e.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const s of i){const i=document.createElement("style"),n=t.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=s.cssText,e.appendChild(i)}},l=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,i))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:c,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:_}=Object,m=globalThis,g=m.trustedTypes,f=g?g.emptyScript:"",$=m.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},b=(e,t)=>!c(e,t),w={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);void 0!==i&&d(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:n}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const o=i?.call(this);n.call(this,t),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=_(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...p(e),...u(e)];for(const s of t)this.createProperty(s,e[s])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,s]of t)this.elementProperties.set(e,s)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return r(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t){const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(t,s.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const s=this.constructor,i=s._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=s.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=i,this[i]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,s,i=!1,n){if(void 0!==e){if(s??=this.constructor.getPropertyOptions(e),!(s.hasChanged??b)(i?n:this[e],t))return;this.C(e,t,s)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,s]of e)!0!==s.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],s)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$ES?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[v("elementProperties")]=new Map,A[v("finalized")]=new Map,$?.({ReactiveElement:A}),(m.reactiveElementVersions??=[]).push("2.0.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const E=globalThis,S=E.trustedTypes,k=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,C="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,P="?"+x,I=`<${P}>`,T=document,U=()=>T.createComment(""),O=e=>null===e||"object"!=typeof e&&"function"!=typeof e,H=Array.isArray,D="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,M=/>/g,j=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,N=/"/g,B=/^(?:script|style|textarea|title)$/i,q=(e=>(t,...s)=>({_$litType$:e,strings:t,values:s}))(1),F=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),W=new WeakMap,J=T.createTreeWalker(T,129);function K(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(t):t}const Z=(e,t)=>{const s=e.length-1,i=[];let n,o=2===t?"<svg>":"",a=L;for(let t=0;t<s;t++){const s=e[t];let r,l,c=-1,d=0;for(;d<s.length&&(a.lastIndex=d,l=a.exec(s),null!==l);)d=a.lastIndex,a===L?"!--"===l[1]?a=R:void 0!==l[1]?a=M:void 0!==l[2]?(B.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=j):void 0!==l[3]&&(a=j):a===j?">"===l[0]?(a=n??L,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,r=l[1],a=void 0===l[3]?j:'"'===l[3]?N:z):a===N||a===z?a=j:a===R||a===M?a=L:(a=j,n=void 0);const h=a===j&&e[t+1].startsWith("/>")?" ":"";o+=a===L?s+I:c>=0?(i.push(r),s.slice(0,c)+C+s.slice(c)+x+h):s+x+(-2===c?t:h)}return[K(e,o+(e[s]||"<?>")+(2===t?"</svg>":"")),i]};class G{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,o=0;const a=e.length-1,r=this.parts,[l,c]=Z(e,t);if(this.el=G.createElement(l,s),J.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=J.nextNode())&&r.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(C)){const t=c[o++],s=i.getAttribute(e).split(x),a=/([.?@])?(.*)/.exec(t);r.push({type:1,index:n,name:a[2],strings:s,ctor:"."===a[1]?te:"?"===a[1]?se:"@"===a[1]?ie:ee}),i.removeAttribute(e)}else e.startsWith(x)&&(r.push({type:6,index:n}),i.removeAttribute(e));if(B.test(i.tagName)){const e=i.textContent.split(x),t=e.length-1;if(t>0){i.textContent=S?S.emptyScript:"";for(let s=0;s<t;s++)i.append(e[s],U()),J.nextNode(),r.push({type:2,index:++n});i.append(e[t],U())}}}else if(8===i.nodeType)if(i.data===P)r.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(x,e+1));)r.push({type:7,index:n}),e+=x.length-1}n++}}static createElement(e,t){const s=T.createElement("template");return s.innerHTML=e,s}}function Q(e,t,s=e,i){if(t===F)return t;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const o=O(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e),n._$AT(e,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(t=Q(e,n._$AS(e,t.values),n,i)),t}class X{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??T).importNode(t,!0);J.currentNode=i;let n=J.nextNode(),o=0,a=0,r=s[0];for(;void 0!==r;){if(o===r.index){let t;2===r.type?t=new Y(n,n.nextSibling,this,e):1===r.type?t=new r.ctor(n,r.name,r.strings,this,e):6===r.type&&(t=new ne(n,this,e)),this._$AV.push(t),r=s[++a]}o!==r?.index&&(n=J.nextNode(),o++)}return J.currentNode=T,i}p(e){let t=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Q(this,e,t),O(e)?e===V||null==e||""===e?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==F&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>H(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==V&&O(this._$AH)?this._$AA.nextSibling.data=e:this.$(T.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=G.createElement(K(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new X(i,this),s=e.u(this.options);e.p(t),this.$(s),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return void 0===t&&W.set(e.strings,t=new G(e)),t}T(e){H(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new Y(this.k(U()),this.k(U()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=V}_$AI(e,t=this,s,i){const n=this.strings;let o=!1;if(void 0===n)e=Q(this,e,t,0),o=!O(e)||e!==this._$AH&&e!==F,o&&(this._$AH=e);else{const i=e;let a,r;for(e=n[0],a=0;a<n.length-1;a++)r=Q(this,i[s+a],t,a),r===F&&(r=this._$AH[a]),o||=!O(r)||r!==this._$AH[a],r===V?e=V:e!==V&&(e+=(r??"")+n[a+1]),this._$AH[a]=r}o&&!i&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}}class se extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==V)}}class ie extends ee{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=Q(this,e,t,0)??V)===F)return;const s=this._$AH,i=e===V&&s!==V||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==V&&(s===V||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}const oe=E.litHtmlPolyfillSupport;oe?.(G,Y),(E.litHtmlVersions??=[]).push("3.0.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ae extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,s)=>{const i=s?.renderBefore??t;let n=i._$litPart$;if(void 0===n){const e=s?.renderBefore??null;i._$litPart$=n=new Y(t.insertBefore(U(),e),e,void 0,s??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}ae._$litElement$=!0,ae.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ae});const re=globalThis.litElementPolyfillSupport;re?.({LitElement:ae}),(globalThis.litElementVersions??=[]).push("4.0.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const le=e=>(t,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ce={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},de=(e=ce,t,s)=>{const{kind:i,metadata:n}=s;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),o.set(s.name,e),"accessor"===i){const{name:i}=s;return{set(s){const n=t.get.call(this);t.set.call(this,s),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.C(i,void 0,e),t}}}if("setter"===i){const{name:i}=s;return function(s){const n=this[i];t.call(this,s),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+i)};function he(e){return(t,s)=>"object"==typeof s?de(e,t,s):((e,t,s)=>{const i=t.hasOwnProperty(s);return t.constructor.createProperty(s,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,s):void 0})(e,t,s)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function pe(e){return he({...e,state:!0,attribute:!1})}var ue,_e;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(ue||(ue={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(_e||(_e={}));var me={version:"Version"},ge={invalid:"Invalid configuration",header_title:"Title",sensor_name:"Sensor name",display_mode:"Display mode",display_mode_label:{full:"Full",compact:"Compact"},wrong_display_mode:"'display_mode' accepts only 'compact' and 'full' as value",list_mode:"List mode",list_mode_label:{full:"Full",packages:"Packages",links:"Links"},wrong_list_mode:"'list_mode' accepts only 'full', 'packages' and 'links' as value",default_instance:"Default instance",hide_title:"Hide title",hide_instance:"Hide instance selector",hide_play:"Hide play button",hide_pause:"Hide pause button",hide_stop:"Hide stop button",hide_speed_limit:"Hide speed limit button"},fe={no_sensor:"No sensor",stopped:"Stopped",downloading:"Downloading",stopping:"Stopping",finished:"Finished",running:"Running",pause:"Paused",idle:"Idle"},$e={no_downloads:"No downloads"},ve={no_sensor_packages:"The 'packages' sensor is not present or is not enabled. Enable it on its own service.",no_sensor_links:"The 'links' sensor is not present or is not enabled. Enable it on its own service."},ye={play:"Start Downloads",pause:"Pause Downloads",stop:"Stop Downloads",speed_limit:"Speed Limit"},be={common:me,config:ge,status:fe,downloads:$e,error:ve,actions:ye},we={version:"Versión"},Ae={invalid:"Configuración inválida",header_title:"Título",sensor_name:"Nombre sensor",display_mode:"Modo de visualización",display_mode_label:{full:"Completo",compact:"Compacto"},wrong_display_mode:"'display_mode' solo acepta 'compact' y 'full' como valor",list_mode:"Modo de lista",list_mode_label:{full:"Completa",packages:"Paquetes",links:"Enlaces"},wrong_list_mode:"'list_mode' solo acepta 'full', 'packages' y 'links' como valor",default_instance:"Instancia por defecto",hide_title:"Ocultar título",hide_instance:"Ocultar selector de instancias",hide_play:"Ocultar botón iniciar",hide_pause:"Ocultar botón pausa",hide_stop:"Ocultar botón parar",hide_speed_limit:"Ocultar botón límite velocidad"},Ee={no_sensor:"Sin sensor",stopped:"Detenido",downloading:"Descargando",stopping:"Parando",finished:"Terminado",running:"En curso",pause:"Pausado",idle:"Inactivo"},Se={no_downloads:"Sin descargas"},ke={no_sensor_packages:"El sensor 'packages' no está presente o no está habilitado. Habilitalo en su servicio correspondiente.",no_sensor_links:"El sensor 'links' no está presente o no está habilitado. Habilitalo en su servicio correspondiente."},Ce={speed_limit:"Límite velocidad",play:"Iniciar Descargas",pause:"Pausar Descargas",stop:"Parar Descargas"},xe={common:we,config:Ae,status:Ee,downloads:Se,error:ke,actions:Ce};const Pe={en:Object.freeze({__proto__:null,actions:ye,common:me,config:ge,default:be,downloads:$e,error:ve,status:fe}),es:Object.freeze({__proto__:null,actions:Ce,common:we,config:Ae,default:xe,downloads:Se,error:ke,status:Ee})};function Ie(e,t="",s=""){const i=function(){let e=localStorage.getItem("selectedLanguage")?.replace(/['"]+/g,"").replace("-","_");if(null==e||"null"===e){const t=document.querySelector("home-assistant").hass;e=t.selectedLanguage||t.language}return e||"en"}();let n;try{n=e.split(".").reduce(((e,t)=>e[t]),Pe[i])}catch(t){n=e.split(".").reduce(((e,t)=>e[t]),Pe.en)}return void 0===n&&(n=e.split(".").reduce(((e,t)=>e[t]),Pe.en)),""!==t&&""!==s&&(n=n.replace(t,s)),n||e}const Te=[{name:"header_title",selector:{text:{}}},{name:"sensor_name",selector:{text:{}}},{name:"default_instance",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"display_mode",selector:{select:{options:["compact","full"].map((e=>({value:e,label:Ie(`config.display_mode_label.${e}`)})))}}},{name:"list_mode",selector:{select:{options:["full","packages","links"].map((e=>({value:e,label:Ie(`config.list_mode_label.${e}`)})))}}}]},{name:"",type:"grid",schema:[{name:"hide_title",selector:{boolean:{}}},{name:"hide_instance",selector:{boolean:{}}},{name:"hide_play",selector:{boolean:{}}},{name:"hide_pause",selector:{boolean:{}}},{name:"hide_stop",selector:{boolean:{}}},{name:"hide_speed_limit",selector:{boolean:{}}}]}];let Ue=class extends(
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(e){return class extends e{createRenderRoot(){const e=this.constructor,{registry:t,elementDefinitions:s,shadowRootOptions:i}=e;s&&!t&&(e.registry=new CustomElementRegistry,Object.entries(s).forEach((([t,s])=>e.registry.define(t,s))));const n=this.renderOptions.creationScope=this.attachShadow({...i,customElements:e.registry});return r(n,this.constructor.elementStyles),n}}}(ae)){constructor(){super(...arguments),this._initialized=!1}setConfig(e){this._config=e,this.loadCardHelpers()}render(){return this.hass&&this._helpers?q`
      <ha-form
          .hass=${this.hass}
          .data=${this._config}
          .schema=${Te}
          .computeLabel=${this._computeLabelCallback.bind(this)}
          @value-changed=${this._valueChanged}
      ></ha-form>
      <ha-device-picker .label="Label" .value="Value" .devices="Devices" .areas="Areas" .entities="Entities"></ha-device-picker>
    `:q``}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_valueChanged(e){console.log("ev.detail.value",e.detail.value),function(e,t,s,i){i=i||{},s=null==s?{}:s;var n=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});n.detail=s,e.dispatchEvent(n)}(this,"config-changed",{config:e.detail.value})}_computeLabelCallback(e){return Ie(`config.${e.name}`)}};e([he({attribute:!1})],Ue.prototype,"hass",void 0),e([pe()],Ue.prototype,"_config",void 0),e([pe()],Ue.prototype,"_helpers",void 0),Ue=e([le("myjdownloader-card-editor")],Ue),console.info(`%c  MyJDownloader-Card \n%c  ${Ie("common.version")} 1.2.0`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"myjdownloader-card",name:"MyJDownloader Card",preview:!0,description:"This Lovelace Custom card displays downloads information provided by the MyJDownloader Integration."});let Oe=class extends ae{static async getConfigElement(){return document.createElement("myjdownloader-card-editor")}static getStubConfig(){return{}}set selectedInstance(e){const t=this._selectedInstance;this._selectedInstance=e,this._selectedInstanceEntity=null==e?e:function(e,t="_"){const s="àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;",i=`aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz${t}${t}${t}${t}${t}${t}`,n=new RegExp(s.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,t).replace(n,(e=>i.charAt(s.indexOf(e)))).replace(/&/g,`${t}and${t}`).replace(/[^\w-]+/g,t).replace(/-/g,t).replace(new RegExp(`(${t})\\1+`,"g"),"$1").replace(new RegExp(`^${t}+`),"").replace(new RegExp(`${t}+$`),"")}(e),this.requestUpdate("_selectedInstance",t)}get selectedInstance(){return this._selectedInstance}get selectedInstanceEntity(){return this._selectedInstanceEntity}setConfig(e){if(!e)throw new Error(Ie("common.invalid_configuration"));if(void 0!==e.display_mode&&!["compact","full"].includes(e.display_mode))throw new Error(Ie("config.wrong_display_mode"));if(void 0!==e.list_mode&&!["full","packages","links"].includes(e.list_mode))throw new Error(Ie("config.wrong_list_mode"));e.test_gui&&function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null}().setEditMode(!0),this.config={header_title:"MyJDownloader",sensor_name:"jdownloader",display_mode:"compact",list_mode:"full",default_instance:void 0,hide_title:!1,hide_instance:!1,hide_play:!1,hide_pause:!1,hide_stop:!1,hide_speed_limit:!1,...e},null!=this.config.default_instance&&(this.selectedInstance=this.config.default_instance)}shouldUpdate(e){return!!this.config&&(!!e.has("_selectedInstance")||function(e,t,s){if(t.has("config")||s)return!0;if(e.config.entity){var i=t.get("hass");return!i||i.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}(this,e,!1))}render(){return this.config&&this.hass?(null==this.selectedInstance&&(this.selectedInstance=this._getInstances()[0]),q`
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
            ${this._renderDownloads()}
          </div>
        </div>
      </ha-card>
    `):q``}_renderDownloads(){let e;try{e=this._getDownloads()}catch(e){if(e instanceof Error&&e.message.startsWith("error.no_sensor_"))return q`<div class="no-sensor">${Ie(e.message)}</div>`;throw e}return q`
      ${Object.keys(e).length>0?q`
            <div class="mode-${this.config.display_mode}">
              ${this._renderDownloadList(e)}
            </div>`:q`
            <div class="no-downloads">${Ie("downloads.no_downloads")}</div>`}`}_renderDownloadList(e){return"compact"===this.config.display_mode?["full","packages"].includes(this.config.list_mode)?Object.entries(e).map((([e,t])=>this.renderPackage(e,t))):Object.values(e).map((e=>this.renderLink(e))):["full","packages"].includes(this.config.list_mode)?Object.entries(e).map((([e,t])=>this.renderPackageFull(e,t))):Object.values(e).map((e=>this.renderLinkFull(e)))}_buildPackage(e){return{activeTask:e.activeTask,bytesLoaded:e.bytesLoaded,bytesTotal:e.bytesTotal,percent:100*e.bytesLoaded/e.bytesTotal||0,childCount:e.childCount,comment:e.comment,downloadPassword:e.downloadPassword,enabled:e.enabled,eta:e.eta,finished:e.finished,hosts:e.hosts,name:e.name,priority:e.priority,running:e.running,saveTo:e.saveTo,speed:e.speed,status:e.status,statusIconKey:e.statusIconKey,links:[]}}_buildLink(e){return{addedDate:e.addedDate,bytesLoaded:e.bytesLoaded,bytesTotal:e.bytesTotal,percent:100*e.bytesLoaded/e.bytesTotal||0,comment:e.comment,downloadPassword:e.downloadPassword,enabled:e.enabled,eta:e.eta,extractionStatus:e.extractionStatus,finished:e.finished,finishedDate:e.finishedDate,host:e.host,name:e.name,packageUUID:e.packageUUID,priority:e.priority,running:e.running,skipped:e.skipped,speed:e.speed,status:e.status,statusIconKey:e.statusIconKey,url:e.url,uuid:e.uuid}}_getDownloads(){const e={};if(["full","packages"].includes(this.config.list_mode)){if(void 0===this.hass.states[`sensor.${this.config.sensor_name}_${this.selectedInstanceEntity}_packages`])throw new Error("error.no_sensor_packages");this.hass.states[`sensor.${this.config.sensor_name}_${this.selectedInstanceEntity}_packages`].attributes.packages.forEach((t=>{e[t.uuid]=this._buildPackage(t)}))}if(["full","links"].includes(this.config.list_mode)){if(void 0===this.hass.states[`sensor.${this.config.sensor_name}_${this.selectedInstanceEntity}_links`])throw new Error("error.no_sensor_links");this.hass.states[`sensor.${this.config.sensor_name}_${this.selectedInstanceEntity}_links`].attributes.links.forEach((t=>{const s=this._buildLink(t);"full"===this.config.list_mode?e[t.packageUUID].links.push(s):e[t.uuid]=s}))}return e}_getStats(){const e=`sensor.${this.config.sensor_name}_${this._selectedInstanceEntity}`;return void 0!==this.hass.states[`${e}_download_speed`]?{down_speed:this.hass.states[`${e}_download_speed`].state,down_unit:this.hass.states[`${e}_download_speed`].attributes.unit_of_measurement,status:this.hass.states[`${e}_status`].state}:{down_speed:void 0,down_unit:"B/s",status:"no_sensor"}}_getInstances(){return void 0!==this.hass.states[`sensor.${this.config.sensor_name}s_online`]?this.hass.states[`sensor.${this.config.sensor_name}s_online`].attributes.jdownloaders:[]}_toggleInstance(e){this.selectedInstance=e.target.value}_togglePlay(){this.hass.callService("myjdownloader","start_downloads",{entity_id:`sensor.${this.config.sensor_name}_${this._selectedInstanceEntity}_status`})}_togglePause(){this.hass.callService("switch","toggle",{entity_id:`switch.${this.config.sensor_name}_${this._selectedInstanceEntity}_pause`})}_toggleStop(){this.hass.callService("myjdownloader","stop_downloads",{entity_id:`sensor.${this.config.sensor_name}_${this._selectedInstanceEntity}_status`})}_toggleLimit(){this.hass.callService("switch","toggle",{entity_id:`switch.${this.config.sensor_name}_${this._selectedInstanceEntity}_limit`})}_downloadStatus(e){return e.finished?"finished":e.enabled?"downloading":"stopped"}renderToolbar(){const e=this._getStats();return q`
      <div id="toolbar">
        <div class="status titleitem c-${e.status}">
          <p>${Ie(`status.${e.status}`)}
          <p>
        </div>
        <div class="titleitem">
          <ha-icon icon="mdi:download" class="down down-color title-item-icon"></ha-icon>
          <span>${e.down_speed} ${e.down_unit}</span>
        </div>
        ${this.renderPlayButton()}
        ${this.renderPauseButton()}
        ${this.renderStopButton()}
        ${this.renderLimitButton()}
      </div>
    `}renderPackage(e,t){return q`
      <div class="package-container ${e}">
        <div class="progressbar">
          <div class="${this._downloadStatus(t)} progressin"
               style="width: ${t.percent}%"></div>
          <ha-icon class="download-icon" icon="mdi:package-variant"></ha-icon>
          <div class="name"><a title="${t.name}">${t.name}</a></div>
          <!-- Using <a /> just as a quick hack to display a tooltip, improve in future release -->
          <div class="percent">${t.percent.toFixed(2)}%</div>
        </div>
        ${"full"===this.config.list_mode?q`<div class="links">${t.links.map((e=>this.renderLink(e)))}</div>`:""}
      </div>
    `}renderLink(e){return q`
      <div class="progressbar">
        <div class="${this._downloadStatus(e)} progressin"
             style="width: ${e.percent}%"></div>
        <ha-icon class="download-icon" icon="mdi:download"></ha-icon>
        <div class="name"><a title="${e.name}">${e.name}</a></div>
        <div class="percent">${e.percent.toFixed(2)}%</div>
      </div>
    `}renderPackageFull(e,t){return q`
      <div class="package-container ${e}">
        <div class="package">
          <div class="package_name">
            <ha-icon class="download-icon" icon="mdi:package-variant"></ha-icon>
            <a title="${t.name}">${t.name}</a></div>
          <div class="package_status">${Ie(`status.${this._downloadStatus(t)}`)}</div>
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
    `}renderLinkFull(e){return q`
      <div class="link">
        <div class="link_name">
          <ha-icon class="download-icon" icon="mdi:download"></ha-icon>
          <a title="${e.name}">${e.name}</a></div>
        <div class="link_status">${Ie(`status.${this._downloadStatus(e)}`)}</div>
        <div class="progressbar">
          <div class="${this._downloadStatus(e)} progressin" style="width: ${e.percent}%">
          </div>
        </div>
        <div class="link_details">${e.percent.toFixed(2)} %</div>
      </div>
    `}renderPlayButton(){if(this.config.hide_play)return q``;const e="stopped"===this.hass.states[`sensor.${this.config.sensor_name}_${this._selectedInstanceEntity}_status`].state;return q`
      <div class="titleitem">
        <ha-icon-button
            class="play_${e?"on":"off"}"
            @click="${this._togglePlay}"
            title="${Ie("actions.play")}"
            id="play">
          <ha-icon class="title-item-button" icon="mdi:play"></ha-icon>
        </ha-icon-button>
      </div>
    `}renderPauseButton(){if(this.config.hide_pause)return q``;if(void 0===this.hass.states[`switch.${this.config.sensor_name}_${this._selectedInstanceEntity}_pause`])return q``;const e=this.hass.states[`switch.${this.config.sensor_name}_${this._selectedInstanceEntity}_pause`].state;return q`
      <div class="titleitem">
        <ha-icon-button
            class="pause_${e}"
            @click="${this._togglePause}"
            title="${Ie("actions.pause")}"
            id="pause">
          <ha-icon class="title-item-button" icon="mdi:pause"></ha-icon>
        </ha-icon-button>
      </div>
    `}renderStopButton(){if(this.config.hide_stop)return q``;const e="stopped"===this.hass.states[`sensor.${this.config.sensor_name}_${this._selectedInstanceEntity}_status`].state;return q`
      <div class="titleitem">
        <ha-icon-button
            class="stop_${e?"off":"on"}"
            @click="${this._toggleStop}"
            title="${Ie("actions.stop")}"
            id="stop">
          <ha-icon class="title-item-button" icon="mdi:stop"></ha-icon>
        </ha-icon-button>
      </div>
    `}renderLimitButton(){if(this.config.hide_speed_limit)return q``;if(void 0===this.hass.states[`switch.${this.config.sensor_name}_${this._selectedInstanceEntity}_limit`])return q``;const e=this.hass.states[`switch.${this.config.sensor_name}_${this._selectedInstanceEntity}_limit`].state;return q`
      <div class="titleitem">
        <ha-icon-button
            class="speed_limit_${e}"
            @click="${this._toggleLimit}"
            title="${Ie("actions.speed_limit")}"
            id="speed_limit">
          <ha-icon class="title-item-button" icon="mdi:download-lock"></ha-icon>
        </ha-icon-button>
      </div>
    `}renderCardHeader(){return this.config.hide_title?q``:q`
      <div class="header-title">${this.config.header_title}</div>`}renderInstanceSelect(){return this.config.hide_instance?q``:q`
      <ha-select
          class="instance-dropdown"
          @selected=${this._toggleInstance}
          .value=${this.selectedInstance}>
        ${this._getInstances().map((e=>q`
              <mwc-list-item .value=${e}>${e}</mwc-list-item>`))}
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

      .no-downloads, .no-sensor {
        margin-left: 1.4em;
      }
      
      .no-sensor {
        color: var(--error-color);
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
    `}};e([he({attribute:!1})],Oe.prototype,"hass",void 0),e([pe()],Oe.prototype,"config",void 0),Oe=e([le("myjdownloader-card")],Oe);export{Oe as MyJDownloaderCard};
