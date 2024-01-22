var Jt, te;
(function(e) {
  e.language = "language", e.system = "system", e.comma_decimal = "comma_decimal", e.decimal_comma = "decimal_comma", e.space_comma = "space_comma", e.none = "none";
})(Jt || (Jt = {})), function(e) {
  e.language = "language", e.system = "system", e.am_pm = "12", e.twenty_four = "24";
}(te || (te = {}));
var P = function(e, t, i, s) {
  s = s || {}, i = i ?? {};
  var r = new Event(t, { bubbles: s.bubbles === void 0 || s.bubbles, cancelable: !!s.cancelable, composed: s.composed === void 0 || s.composed });
  return r.detail = i, e.dispatchEvent(r), r;
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct = globalThis, Lt = ct.ShadowRoot && (ct.ShadyCSS === void 0 || ct.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Dt = Symbol(), ee = /* @__PURE__ */ new WeakMap();
let pe = class {
  constructor(t, i, s) {
    if (this._$cssResult$ = !0, s !== Dt)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = i;
  }
  get styleSheet() {
    let t = this.o;
    const i = this.t;
    if (Lt && t === void 0) {
      const s = i !== void 0 && i.length === 1;
      s && (t = ee.get(i)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && ee.set(i, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Be = (e) => new pe(typeof e == "string" ? e : e + "", void 0, Dt), Ye = (e, ...t) => {
  const i = e.length === 1 ? e[0] : t.reduce((s, r, o) => s + ((a) => {
    if (a._$cssResult$ === !0)
      return a.cssText;
    if (typeof a == "number")
      return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + e[o + 1], e[0]);
  return new pe(i, e, Dt);
}, je = (e, t) => {
  if (Lt)
    e.adoptedStyleSheets = t.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet);
  else
    for (const i of t) {
      const s = document.createElement("style"), r = ct.litNonce;
      r !== void 0 && s.setAttribute("nonce", r), s.textContent = i.cssText, e.appendChild(s);
    }
}, ie = Lt ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let i = "";
  for (const s of t.cssRules)
    i += s.cssText;
  return Be(i);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: qe, defineProperty: ke, getOwnPropertyDescriptor: Ve, getOwnPropertyNames: Xe, getOwnPropertySymbols: Ke, getPrototypeOf: Ze } = Object, D = globalThis, se = D.trustedTypes, Qe = se ? se.emptyScript : "", $t = D.reactiveElementPolyfillSupport, Q = (e, t) => e, ht = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? Qe : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let i = e;
  switch (t) {
    case Boolean:
      i = e !== null;
      break;
    case Number:
      i = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        i = JSON.parse(e);
      } catch {
        i = null;
      }
  }
  return i;
} }, Ft = (e, t) => !qe(e, t), re = { attribute: !0, type: String, converter: ht, reflect: !1, hasChanged: Ft };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), D.litPropertyMetadata ?? (D.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let q = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, i = re) {
    if (i.state && (i.attribute = !1), this._$Ei(), this.elementProperties.set(t, i), !i.noAccessor) {
      const s = Symbol(), r = this.getPropertyDescriptor(t, s, i);
      r !== void 0 && ke(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, i, s) {
    const { get: r, set: o } = Ve(this.prototype, t) ?? { get() {
      return this[i];
    }, set(a) {
      this[i] = a;
    } };
    return { get() {
      return r == null ? void 0 : r.call(this);
    }, set(a) {
      const n = r == null ? void 0 : r.call(this);
      o.call(this, a), this.requestUpdate(t, n, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? re;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Q("elementProperties")))
      return;
    const t = Ze(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Q("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Q("properties"))) {
      const i = this.properties, s = [...Xe(i), ...Ke(i)];
      for (const r of s)
        this.createProperty(r, i[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const i = litPropertyMetadata.get(t);
      if (i !== void 0)
        for (const [s, r] of i)
          this.elementProperties.set(s, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [i, s] of this.elementProperties) {
      const r = this._$Eu(i, s);
      r !== void 0 && this._$Eh.set(r, i);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const i = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const r of s)
        i.unshift(ie(r));
    } else
      t !== void 0 && i.push(ie(t));
    return i;
  }
  static _$Eu(t, i) {
    const s = i.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$Eg = new Promise((i) => this.enableUpdating = i), this._$AL = /* @__PURE__ */ new Map(), this._$ES(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((i) => i(this));
  }
  addController(t) {
    var i;
    (this._$E_ ?? (this._$E_ = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((i = t.hostConnected) == null || i.call(t));
  }
  removeController(t) {
    var i;
    (i = this._$E_) == null || i.delete(t);
  }
  _$ES() {
    const t = /* @__PURE__ */ new Map(), i = this.constructor.elementProperties;
    for (const s of i.keys())
      this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return je(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$E_) == null || t.forEach((i) => {
      var s;
      return (s = i.hostConnected) == null ? void 0 : s.call(i);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$E_) == null || t.forEach((i) => {
      var s;
      return (s = i.hostDisconnected) == null ? void 0 : s.call(i);
    });
  }
  attributeChangedCallback(t, i, s) {
    this._$AK(t, s);
  }
  _$EO(t, i) {
    var o;
    const s = this.constructor.elementProperties.get(t), r = this.constructor._$Eu(t, s);
    if (r !== void 0 && s.reflect === !0) {
      const a = (((o = s.converter) == null ? void 0 : o.toAttribute) !== void 0 ? s.converter : ht).toAttribute(i, s.type);
      this._$Em = t, a == null ? this.removeAttribute(r) : this.setAttribute(r, a), this._$Em = null;
    }
  }
  _$AK(t, i) {
    var o;
    const s = this.constructor, r = s._$Eh.get(t);
    if (r !== void 0 && this._$Em !== r) {
      const a = s.getPropertyOptions(r), n = typeof a.converter == "function" ? { fromAttribute: a.converter } : ((o = a.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? a.converter : ht;
      this._$Em = r, this[r] = n.fromAttribute(i, a.type), this._$Em = null;
    }
  }
  requestUpdate(t, i, s, r = !1, o) {
    if (t !== void 0) {
      if (s ?? (s = this.constructor.getPropertyOptions(t)), !(s.hasChanged ?? Ft)(r ? o : this[t], i))
        return;
      this.C(t, i, s);
    }
    this.isUpdatePending === !1 && (this._$Eg = this._$EP());
  }
  C(t, i, s) {
    this._$AL.has(t) || this._$AL.set(t, i), s.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$Eg;
    } catch (i) {
      Promise.reject(i);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [o, a] of this._$Ep)
          this[o] = a;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0)
        for (const [o, a] of r)
          a.wrapped !== !0 || this._$AL.has(o) || this[o] === void 0 || this.C(o, this[o], a);
    }
    let t = !1;
    const i = this._$AL;
    try {
      t = this.shouldUpdate(i), t ? (this.willUpdate(i), (s = this._$E_) == null || s.forEach((r) => {
        var o;
        return (o = r.hostUpdate) == null ? void 0 : o.call(r);
      }), this.update(i)) : this._$ET();
    } catch (r) {
      throw t = !1, this._$ET(), r;
    }
    t && this._$AE(i);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var i;
    (i = this._$E_) == null || i.forEach((s) => {
      var r;
      return (r = s.hostUpdated) == null ? void 0 : r.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$ET() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Eg;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((i) => this._$EO(i, this[i]))), this._$ET();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
q.elementStyles = [], q.shadowRootOptions = { mode: "open" }, q[Q("elementProperties")] = /* @__PURE__ */ new Map(), q[Q("finalized")] = /* @__PURE__ */ new Map(), $t == null || $t({ ReactiveElement: q }), (D.reactiveElementVersions ?? (D.reactiveElementVersions = [])).push("2.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J = globalThis, dt = J.trustedTypes, oe = dt ? dt.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, ge = "$lit$", O = `lit$${(Math.random() + "").slice(9)}$`, _e = "?" + O, Je = `<${_e}>`, Y = document, tt = () => Y.createComment(""), et = (e) => e === null || typeof e != "object" && typeof e != "function", ye = Array.isArray, ti = (e) => ye(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", wt = `[ 	
\f\r]`, Z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ae = /-->/g, ne = />/g, z = RegExp(`>|${wt}(?:([^\\s"'>=/]+)(${wt}*=${wt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ce = /'/g, le = /"/g, fe = /^(?:script|style|textarea|title)$/i, me = (e) => (t, ...i) => ({ _$litType$: e, strings: t, values: i }), _ = me(1), L = me(2), k = Symbol.for("lit-noChange"), $ = Symbol.for("lit-nothing"), he = /* @__PURE__ */ new WeakMap(), B = Y.createTreeWalker(Y, 129);
function ve(e, t) {
  if (!Array.isArray(e) || !e.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return oe !== void 0 ? oe.createHTML(t) : t;
}
const ei = (e, t) => {
  const i = e.length - 1, s = [];
  let r, o = t === 2 ? "<svg>" : "", a = Z;
  for (let n = 0; n < i; n++) {
    const c = e[n];
    let h, d, p = -1, v = 0;
    for (; v < c.length && (a.lastIndex = v, d = a.exec(c), d !== null); )
      v = a.lastIndex, a === Z ? d[1] === "!--" ? a = ae : d[1] !== void 0 ? a = ne : d[2] !== void 0 ? (fe.test(d[2]) && (r = RegExp("</" + d[2], "g")), a = z) : d[3] !== void 0 && (a = z) : a === z ? d[0] === ">" ? (a = r ?? Z, p = -1) : d[1] === void 0 ? p = -2 : (p = a.lastIndex - d[2].length, h = d[1], a = d[3] === void 0 ? z : d[3] === '"' ? le : ce) : a === le || a === ce ? a = z : a === ae || a === ne ? a = Z : (a = z, r = void 0);
    const E = a === z && e[n + 1].startsWith("/>") ? " " : "";
    o += a === Z ? c + Je : p >= 0 ? (s.push(h), c.slice(0, p) + ge + c.slice(p) + O + E) : c + O + (p === -2 ? n : E);
  }
  return [ve(e, o + (e[i] || "<?>") + (t === 2 ? "</svg>" : "")), s];
};
class it {
  constructor({ strings: t, _$litType$: i }, s) {
    let r;
    this.parts = [];
    let o = 0, a = 0;
    const n = t.length - 1, c = this.parts, [h, d] = ei(t, i);
    if (this.el = it.createElement(h, s), B.currentNode = this.el.content, i === 2) {
      const p = this.el.content.firstChild;
      p.replaceWith(...p.childNodes);
    }
    for (; (r = B.nextNode()) !== null && c.length < n; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes())
          for (const p of r.getAttributeNames())
            if (p.endsWith(ge)) {
              const v = d[a++], E = r.getAttribute(p).split(O), K = /([.?@])?(.*)/.exec(v);
              c.push({ type: 1, index: o, name: K[2], strings: E, ctor: K[1] === "." ? si : K[1] === "?" ? ri : K[1] === "@" ? oi : ft }), r.removeAttribute(p);
            } else
              p.startsWith(O) && (c.push({ type: 6, index: o }), r.removeAttribute(p));
        if (fe.test(r.tagName)) {
          const p = r.textContent.split(O), v = p.length - 1;
          if (v > 0) {
            r.textContent = dt ? dt.emptyScript : "";
            for (let E = 0; E < v; E++)
              r.append(p[E], tt()), B.nextNode(), c.push({ type: 2, index: ++o });
            r.append(p[v], tt());
          }
        }
      } else if (r.nodeType === 8)
        if (r.data === _e)
          c.push({ type: 2, index: o });
        else {
          let p = -1;
          for (; (p = r.data.indexOf(O, p + 1)) !== -1; )
            c.push({ type: 7, index: o }), p += O.length - 1;
        }
      o++;
    }
  }
  static createElement(t, i) {
    const s = Y.createElement("template");
    return s.innerHTML = t, s;
  }
}
function V(e, t, i = e, s) {
  var a, n;
  if (t === k)
    return t;
  let r = s !== void 0 ? (a = i._$Co) == null ? void 0 : a[s] : i._$Cl;
  const o = et(t) ? void 0 : t._$litDirective$;
  return (r == null ? void 0 : r.constructor) !== o && ((n = r == null ? void 0 : r._$AO) == null || n.call(r, !1), o === void 0 ? r = void 0 : (r = new o(e), r._$AT(e, i, s)), s !== void 0 ? (i._$Co ?? (i._$Co = []))[s] = r : i._$Cl = r), r !== void 0 && (t = V(e, r._$AS(e, t.values), r, s)), t;
}
class ii {
  constructor(t, i) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: i }, parts: s } = this._$AD, r = ((t == null ? void 0 : t.creationScope) ?? Y).importNode(i, !0);
    B.currentNode = r;
    let o = B.nextNode(), a = 0, n = 0, c = s[0];
    for (; c !== void 0; ) {
      if (a === c.index) {
        let h;
        c.type === 2 ? h = new at(o, o.nextSibling, this, t) : c.type === 1 ? h = new c.ctor(o, c.name, c.strings, this, t) : c.type === 6 && (h = new ai(o, this, t)), this._$AV.push(h), c = s[++n];
      }
      a !== (c == null ? void 0 : c.index) && (o = B.nextNode(), a++);
    }
    return B.currentNode = Y, r;
  }
  p(t) {
    let i = 0;
    for (const s of this._$AV)
      s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
  }
}
class at {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, i, s, r) {
    this.type = 2, this._$AH = $, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = r, this._$Cv = (r == null ? void 0 : r.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return i !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = i.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, i = this) {
    t = V(this, t, i), et(t) ? t === $ || t == null || t === "" ? (this._$AH !== $ && this._$AR(), this._$AH = $) : t !== this._$AH && t !== k && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : ti(t) ? this.T(t) : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
  }
  _(t) {
    this._$AH !== $ && et(this._$AH) ? this._$AA.nextSibling.data = t : this.$(Y.createTextNode(t)), this._$AH = t;
  }
  g(t) {
    var o;
    const { values: i, _$litType$: s } = t, r = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = it.createElement(ve(s.h, s.h[0]), this.options)), s);
    if (((o = this._$AH) == null ? void 0 : o._$AD) === r)
      this._$AH.p(i);
    else {
      const a = new ii(r, this), n = a.u(this.options);
      a.p(i), this.$(n), this._$AH = a;
    }
  }
  _$AC(t) {
    let i = he.get(t.strings);
    return i === void 0 && he.set(t.strings, i = new it(t)), i;
  }
  T(t) {
    ye(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let s, r = 0;
    for (const o of t)
      r === i.length ? i.push(s = new at(this.k(tt()), this.k(tt()), this, this.options)) : s = i[r], s._$AI(o), r++;
    r < i.length && (this._$AR(s && s._$AB.nextSibling, r), i.length = r);
  }
  _$AR(t = this._$AA.nextSibling, i) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, i); t && t !== this._$AB; ) {
      const r = t.nextSibling;
      t.remove(), t = r;
    }
  }
  setConnected(t) {
    var i;
    this._$AM === void 0 && (this._$Cv = t, (i = this._$AP) == null || i.call(this, t));
  }
}
class ft {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, i, s, r, o) {
    this.type = 1, this._$AH = $, this._$AN = void 0, this.element = t, this.name = i, this._$AM = r, this.options = o, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = $;
  }
  _$AI(t, i = this, s, r) {
    const o = this.strings;
    let a = !1;
    if (o === void 0)
      t = V(this, t, i, 0), a = !et(t) || t !== this._$AH && t !== k, a && (this._$AH = t);
    else {
      const n = t;
      let c, h;
      for (t = o[0], c = 0; c < o.length - 1; c++)
        h = V(this, n[s + c], i, c), h === k && (h = this._$AH[c]), a || (a = !et(h) || h !== this._$AH[c]), h === $ ? t = $ : t !== $ && (t += (h ?? "") + o[c + 1]), this._$AH[c] = h;
    }
    a && !r && this.O(t);
  }
  O(t) {
    t === $ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class si extends ft {
  constructor() {
    super(...arguments), this.type = 3;
  }
  O(t) {
    this.element[this.name] = t === $ ? void 0 : t;
  }
}
class ri extends ft {
  constructor() {
    super(...arguments), this.type = 4;
  }
  O(t) {
    this.element.toggleAttribute(this.name, !!t && t !== $);
  }
}
class oi extends ft {
  constructor(t, i, s, r, o) {
    super(t, i, s, r, o), this.type = 5;
  }
  _$AI(t, i = this) {
    if ((t = V(this, t, i, 0) ?? $) === k)
      return;
    const s = this._$AH, r = t === $ && s !== $ || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, o = t !== $ && (s === $ || r);
    r && this.element.removeEventListener(this.name, this, s), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var i;
    typeof this._$AH == "function" ? this._$AH.call(((i = this.options) == null ? void 0 : i.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class ai {
  constructor(t, i, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    V(this, t);
  }
}
const Et = J.litHtmlPolyfillSupport;
Et == null || Et(it, at), (J.litHtmlVersions ?? (J.litHtmlVersions = [])).push("3.1.0");
const ni = (e, t, i) => {
  const s = (i == null ? void 0 : i.renderBefore) ?? t;
  let r = s._$litPart$;
  if (r === void 0) {
    const o = (i == null ? void 0 : i.renderBefore) ?? null;
    s._$litPart$ = r = new at(t.insertBefore(tt(), o), o, void 0, i ?? {});
  }
  return r._$AI(e), r;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class x extends q {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var i;
    const t = super.createRenderRoot();
    return (i = this.renderOptions).renderBefore ?? (i.renderBefore = t.firstChild), t;
  }
  update(t) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ni(i, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return k;
  }
}
var ue;
x._$litElement$ = !0, x.finalized = !0, (ue = globalThis.litElementHydrateSupport) == null || ue.call(globalThis, { LitElement: x });
const At = globalThis.litElementPolyfillSupport;
At == null || At({ LitElement: x });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const I = (e) => (t, i) => {
  i !== void 0 ? i.addInitializer(() => {
    customElements.define(e, t);
  }) : customElements.define(e, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ci = { attribute: !0, type: String, converter: ht, reflect: !1, hasChanged: Ft }, li = (e = ci, t, i) => {
  const { kind: s, metadata: r } = i;
  let o = globalThis.litPropertyMetadata.get(r);
  if (o === void 0 && globalThis.litPropertyMetadata.set(r, o = /* @__PURE__ */ new Map()), o.set(i.name, e), s === "accessor") {
    const { name: a } = i;
    return { set(n) {
      const c = t.get.call(this);
      t.set.call(this, n), this.requestUpdate(a, c, e);
    }, init(n) {
      return n !== void 0 && this.C(a, void 0, e), n;
    } };
  }
  if (s === "setter") {
    const { name: a } = i;
    return function(n) {
      const c = this[a];
      t.call(this, n), this.requestUpdate(a, c, e);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function w(e) {
  return (t, i) => typeof i == "object" ? li(e, t, i) : ((s, r, o) => {
    const a = r.hasOwnProperty(o);
    return r.constructor.createProperty(o, a ? { ...s, wrapped: !0 } : s), a ? Object.getOwnPropertyDescriptor(r, o) : void 0;
  })(e, t, i);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function It(e) {
  return w({ ...e, state: !0, attribute: !1 });
}
var f = /* @__PURE__ */ ((e) => (e.Straight = "straight", e.Curved = "curved", e.Angled = "angled", e))(f || {}), m = /* @__PURE__ */ ((e) => (e[e.In = 0] = "In", e[e.Out = 1] = "Out", e))(m || {}), S = /* @__PURE__ */ ((e) => (e.Cross = "cross", e.Square = "square", e.Circle = "circle", e.List = "list", e))(S || {}), H = /* @__PURE__ */ ((e) => (e.None = "none", e.House = "house", e.Inverter = "inverter", e.Solar = "solar", e.Battery = "battery", e))(H || {}), F = /* @__PURE__ */ ((e) => (e.WATT = "W", e.KILO_WATT = "kW", e.MEGA_WATT = "MW", e))(F || {}), b = /* @__PURE__ */ ((e) => (e.Linear = "linear", e.EaseIn = "easeIn", e.EaseOut = "easeOut", e.EaseInOut = "easeInOut", e))(b || {});
const hi = [14, 139, 125], di = "teal", be = b.Linear, ui = !0, Ct = "mdi:battery", Pt = H.None, Ut = 40, $e = !0, W = "ui", Mt = 2, pi = [14, 139, 125], gi = "teal", _i = b.Linear, yi = !1, we = "mdi:car", fi = [14, 139, 125], mi = "teal", vi = b.Linear, bi = !1, Ee = "mdi:heat-wave", Ae = !1, Nt = 4, zt = 4, Se = ["solar", "house", "grid", "battery", "eps", "custom1", "custom2"], Ce = S.Cross, Wt = 4, $i = [14, 139, 125], wi = "teal", Pe = b.Linear, xe = !1, Te = "mdi:power-plug", Ei = [134, 96, 188], Ai = "purple", Oe = b.Linear, Le = "mdi:transmission-tower", De = !1, Si = [32, 139, 236], Ci = "blue", Fe = b.Linear, Ie = "mdi:home", Rt = 2, Ue = f.Curved, st = 2, Gt = 3, Pi = "%", Ht = 20, Bt = !0, mt = !0, xi = [255, 185, 47], Ti = "amber", lt = b.Linear, Me = !0, Ne = "mdi:solar-panel-large";
class Oi extends TypeError {
  constructor(t, i) {
    let s;
    const {
      message: r,
      ...o
    } = t, {
      path: a
    } = t, n = a.length === 0 ? r : "At path: " + a.join(".") + " -- " + r;
    super(n), this.value = void 0, this.key = void 0, this.type = void 0, this.refinement = void 0, this.path = void 0, this.branch = void 0, this.failures = void 0, Object.assign(this, o), this.name = this.constructor.name, this.failures = () => {
      var c;
      return (c = s) != null ? c : s = [t, ...i()];
    };
  }
}
function Li(e) {
  return T(e) && typeof e[Symbol.iterator] == "function";
}
function T(e) {
  return typeof e == "object" && e != null;
}
function U(e) {
  return typeof e == "string" ? JSON.stringify(e) : "" + e;
}
function Di(e) {
  const {
    done: t,
    value: i
  } = e.next();
  return t ? void 0 : i;
}
function Fi(e, t, i, s) {
  if (e === !0)
    return;
  e === !1 ? e = {} : typeof e == "string" && (e = {
    message: e
  });
  const {
    path: r,
    branch: o
  } = t, {
    type: a
  } = i, {
    refinement: n,
    message: c = "Expected a value of type `" + a + "`" + (n ? " with refinement `" + n + "`" : "") + ", but received: `" + U(s) + "`"
  } = e;
  return {
    value: s,
    type: a,
    refinement: n,
    key: r[r.length - 1],
    path: r,
    branch: o,
    ...e,
    message: c
  };
}
function* xt(e, t, i, s) {
  Li(e) || (e = [e]);
  for (const r of e) {
    const o = Fi(r, t, i, s);
    o && (yield o);
  }
}
function* Yt(e, t, i) {
  i === void 0 && (i = {});
  const {
    path: s = [],
    branch: r = [e],
    coerce: o = !1,
    mask: a = !1
  } = i, n = {
    path: s,
    branch: r
  };
  if (o && (e = t.coercer(e, n), a && t.type !== "type" && T(t.schema) && T(e) && !Array.isArray(e)))
    for (const h in e)
      t.schema[h] === void 0 && delete e[h];
  let c = !0;
  for (const h of t.validator(e, n))
    c = !1, yield [h, void 0];
  for (let [h, d, p] of t.entries(e, n)) {
    const v = Yt(d, p, {
      path: h === void 0 ? s : [...s, h],
      branch: h === void 0 ? r : [...r, d],
      coerce: o,
      mask: a
    });
    for (const E of v)
      E[0] ? (c = !1, yield [E[0], void 0]) : o && (d = E[1], h === void 0 ? e = d : e instanceof Map ? e.set(h, d) : e instanceof Set ? e.add(d) : T(e) && (e[h] = d));
  }
  if (c)
    for (const h of t.refiner(e, n))
      c = !1, yield [h, void 0];
  c && (yield [void 0, e]);
}
class M {
  constructor(t) {
    this.TYPE = void 0, this.type = void 0, this.schema = void 0, this.coercer = void 0, this.validator = void 0, this.refiner = void 0, this.entries = void 0;
    const {
      type: i,
      schema: s,
      validator: r,
      refiner: o,
      coercer: a = (c) => c,
      entries: n = function* () {
      }
    } = t;
    this.type = i, this.schema = s, this.entries = n, this.coercer = a, r ? this.validator = (c, h) => {
      const d = r(c, h);
      return xt(d, h, this, c);
    } : this.validator = () => [], o ? this.refiner = (c, h) => {
      const d = o(c, h);
      return xt(d, h, this, c);
    } : this.refiner = () => [];
  }
  /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */
  assert(t) {
    return ze(t, this);
  }
  /**
   * Create a value with the struct's coercion logic, then validate it.
   */
  create(t) {
    return Ii(t, this);
  }
  /**
   * Check if a value passes the struct's validation.
   */
  is(t) {
    return Mi(t, this);
  }
  /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */
  mask(t) {
    return Ui(t, this);
  }
  /**
   * Validate a value with the struct's validation logic, returning a tuple
   * representing the result.
   *
   * You may optionally pass `true` for the `withCoercion` argument to coerce
   * the value before attempting to validate it. If you do, the result will
   * contain the coerced result when successful.
   */
  validate(t, i) {
    return i === void 0 && (i = {}), nt(t, this, i);
  }
}
function ze(e, t) {
  const i = nt(e, t);
  if (i[0])
    throw i[0];
}
function Ii(e, t) {
  const i = nt(e, t, {
    coerce: !0
  });
  if (i[0])
    throw i[0];
  return i[1];
}
function Ui(e, t) {
  const i = nt(e, t, {
    coerce: !0,
    mask: !0
  });
  if (i[0])
    throw i[0];
  return i[1];
}
function Mi(e, t) {
  return !nt(e, t)[0];
}
function nt(e, t, i) {
  i === void 0 && (i = {});
  const s = Yt(e, t, i), r = Di(s);
  return r[0] ? [new Oi(r[0], function* () {
    for (const a of s)
      a[0] && (yield a[0]);
  }), void 0] : [void 0, r[1]];
}
function Ni() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  const s = t[0].type === "type", r = t.map((a) => a.schema), o = Object.assign({}, ...r);
  return s ? Wi(o) : jt(o);
}
function X(e, t) {
  return new M({
    type: e,
    schema: null,
    validator: t
  });
}
function zi() {
  return X("any", () => !0);
}
function St(e) {
  return new M({
    type: "array",
    schema: e,
    *entries(t) {
      if (e && Array.isArray(t))
        for (const [i, s] of t.entries())
          yield [i, s, e];
    },
    coercer(t) {
      return Array.isArray(t) ? t.slice() : t;
    },
    validator(t) {
      return Array.isArray(t) || "Expected an array value, but received: " + U(t);
    }
  });
}
function A() {
  return X("boolean", (e) => typeof e == "boolean");
}
function y() {
  return X("integer", (e) => typeof e == "number" && !isNaN(e) && Number.isInteger(e) || "Expected an integer, but received: " + U(e));
}
function We() {
  return X("never", () => !1);
}
function jt(e) {
  const t = e ? Object.keys(e) : [], i = We();
  return new M({
    type: "object",
    schema: e || null,
    *entries(s) {
      if (e && T(s)) {
        const r = new Set(Object.keys(s));
        for (const o of t)
          r.delete(o), yield [o, s[o], e[o]];
        for (const o of r)
          yield [o, s[o], i];
      }
    },
    validator(s) {
      return T(s) || "Expected an object, but received: " + U(s);
    },
    coercer(s) {
      return T(s) ? {
        ...s
      } : s;
    }
  });
}
function l(e) {
  return new M({
    ...e,
    validator: (t, i) => t === void 0 || e.validator(t, i),
    refiner: (t, i) => t === void 0 || e.refiner(t, i)
  });
}
function g() {
  return X("string", (e) => typeof e == "string" || "Expected a string, but received: " + U(e));
}
function R(e) {
  const t = We();
  return new M({
    type: "tuple",
    schema: null,
    *entries(i) {
      if (Array.isArray(i)) {
        const s = Math.max(e.length, i.length);
        for (let r = 0; r < s; r++)
          yield [r, i[r], e[r] || t];
      }
    },
    validator(i) {
      return Array.isArray(i) || "Expected an array, but received: " + U(i);
    }
  });
}
function Wi(e) {
  const t = Object.keys(e);
  return new M({
    type: "type",
    schema: e,
    *entries(i) {
      if (T(i))
        for (const s of t)
          yield [s, i[s], e[s]];
    },
    validator(i) {
      return T(i) || "Expected an object, but received: " + U(i);
    }
  });
}
function G(e) {
  const t = e.map((i) => i.type).join(" | ");
  return new M({
    type: "union",
    schema: null,
    coercer(i, s) {
      return (e.find((o) => {
        const [a] = o.validate(i, {
          coerce: !0
        });
        return !a;
      }) || Ri()).coercer(i, s);
    },
    validator(i, s) {
      const r = [];
      for (const o of e) {
        const [...a] = Yt(i, o, s), [n] = a;
        if (n[0])
          for (const [c] of a)
            c && r.push(c);
        else
          return [];
      }
      return ["Expected the value to satisfy a union of `" + t + "`, but received: " + U(i), ...r];
    }
  });
}
function Ri() {
  return X("unknown", () => !0);
}
function Gi(e, t, i) {
  return new M({
    ...e,
    *refiner(s, r) {
      yield* e.refiner(s, r);
      const o = i(s, r), a = xt(o, r, e, s);
      for (const n of a)
        yield {
          ...n,
          refinement: t
        };
    }
  });
}
const Hi = (e) => e.includes("."), C = () => Gi(g(), "entity ID (domain.entity)", Hi), Bi = jt({
  type: g(),
  view_layout: zi()
}), Yi = Ni(
  Bi,
  jt({
    name: l(g()),
    demo_mode: l(A()),
    batteries: l(St(C())),
    battery_colour_type: l(g()),
    battery_colour: l(G([g(), R([y(), y(), y()])])),
    battery_dot_easing: l(g()),
    battery_enabled: l(A()),
    battery_icon: l(g()),
    battery: l(C()),
    centre_entity: l(g()),
    circle_size: l(y()),
    colour_icons_and_text: l(A()),
    corner_radius: l(y()),
    custom1_colour_type: l(g()),
    custom1_colour: l(G([g(), R([y(), y(), y()])])),
    custom1_dot_easing: l(g()),
    custom1_enabled: l(A()),
    custom1_extra_sensor: l(C()),
    custom1_icon: l(g()),
    custom1_name: l(g()),
    custom1_sensor: l(C()),
    custom2_colour_type: l(g()),
    custom2_colour: l(G([g(), R([y(), y(), y()])])),
    custom2_dot_easing: l(g()),
    custom2_enabled: l(A()),
    custom2_extra_sensor: l(C()),
    custom2_icon: l(g()),
    custom2_name: l(g()),
    custom2_sensor: l(C()),
    detail_entities: l(St(C())),
    details_enabled: l(A()),
    dot_size: l(y()),
    dot_speed: l(y()),
    entity_layout: l(g()),
    entity_line_width: l(y()),
    entity_size: l(y()),
    eps_colour_type: l(g()),
    eps_colour: l(G([g(), R([y(), y(), y()])])),
    eps_dot_easing: l(g()),
    eps_enabled: l(A()),
    eps_icon: l(g()),
    grid_colour_type: l(g()),
    grid_colour: l(G([g(), R([y(), y(), y()])])),
    grid_dot_easing: l(g()),
    grid_icon: l(g()),
    hide_inactive_flows: l(A()),
    house_colour_type: l(g()),
    house_colour: l(G([g(), R([y(), y(), y()])])),
    house_dot_easing: l(g()),
    house_icon: l(g()),
    invertor: l(C()),
    invertors: l(St(C())),
    line_gap: l(y()),
    line_style: l(g()),
    line_width: l(y()),
    num_detail_columns: l(y()),
    power_margin: l(y()),
    single_battery: l(A()),
    single_invertor: l(A()),
    solar_colour_type: l(g()),
    solar_colour: l(G([g(), R([y(), y(), y()])])),
    solar_dot_easing: l(g()),
    solar_enabled: l(A()),
    solar_icon: l(g())
  })
), ji = (e, t, i) => {
  const s = e.single_invertor !== void 0 ? e.single_invertor : mt, r = e.single_battery !== void 0 ? e.single_battery : Bt, o = s ? t : t.filter((n) => {
    var c, h;
    return ((c = e.invertors) == null ? void 0 : c.length) > 0 ? ((h = e.invertors) == null ? void 0 : h.indexOf(n)) === -1 : !0;
  }), a = r ? i : i.filter((n) => {
    var c, h;
    return ((c = e.batteries) == null ? void 0 : c.length) > 0 ? ((h = e.batteries) == null ? void 0 : h.indexOf(n)) === -1 : !0;
  });
  return [
    {
      type: "grid",
      name: "",
      schema: [
        {
          type: "grid",
          name: "",
          schema: [
            { name: "single_invertor", label: "Single Invertor", selector: { boolean: {} } },
            {
              label: s ? "Invertor/AIO" : "Invertors",
              name: s ? "invertor" : "invertors",
              selector: { entity: { multiple: !s, include_entities: o } }
            }
          ]
        },
        {
          type: "grid",
          name: "",
          schema: [
            { name: "single_battery", label: "Single Battery", selector: { boolean: {} } },
            {
              label: r ? "Battery" : "Batteries",
              name: r ? "battery" : "batteries",
              selector: { entity: { multiple: !r, include_entities: a } }
            }
          ]
        }
      ]
    }
  ];
}, qi = (e, t, i) => [
  {
    name: e,
    label: t,
    selector: { icon: { placeholder: i } }
  }
], ki = (e, t) => [
  {
    name: e,
    default: b.Linear,
    label: t,
    selector: {
      select: {
        mode: "dropdown",
        options: [
          { value: b.Linear, label: "Linear" },
          { value: b.EaseInOut, label: "Ease In & Out" },
          { value: b.EaseIn, label: "Ease In" },
          { value: b.EaseOut, label: "Ease Out" }
        ]
      }
    }
  }
], Vi = (e, t, i) => [
  {
    name: t,
    label: i,
    selector: e == "ui" ? { "ui-color": {} } : { color_rgb: {} }
  }
], Xi = (e, t) => [
  {
    name: `${e}_type`,
    label: t,
    selector: { select: { mode: "dropdown", options: ["ui", "rgb"] } }
  }
], j = (e, t, i, s) => [
  {
    type: "grid",
    name: "",
    schema: [
      ...qi(t + "_icon", "Icon", s),
      ...ki(t + "_dot_easing", i + " Dot Easing"),
      ...Xi(t + "_colour", "Colour Type"),
      ...Vi(e[`${t}_colour_type`], t + "_colour", i + " Colour")
    ]
  }
  //	...ENTITY_ACTION_SCHEMA('grid', 'Grid')
], Ki = (e) => [
  ...j(e, "grid", "Grid", Le)
], Zi = (e) => [
  ...j(e, "house", "House", Ie)
], Qi = (e) => {
  let t = [{ name: "battery_enabled", label: "Battery enabled", selector: { boolean: {} } }];
  return e.battery_enabled && (t = [
    ...t,
    ...j(e, "battery", "Battery", Ct),
    { name: "eps_enabled", label: "EPS enabled", selector: { boolean: {} } }
  ], e.eps_enabled && (t = [...t, ...j(e, "eps", "EPS", Te)])), t;
}, Ji = (e) => {
  let t = [{ name: "solar_enabled", label: "Solar enabled", selector: { boolean: {} } }];
  return e.solar_enabled && (t = [...t, ...j(e, "solar", "Solar", Ne)]), t;
}, ts = (e) => {
  let t = [{ name: "custom1_enabled", label: "Custom 1 enabled", selector: { boolean: {} } }];
  return e.custom1_enabled && (t = [
    ...t,
    { name: "custom1_name", label: "Name", selector: { text: {} } },
    {
      type: "grid",
      name: "",
      schema: [
        {
          name: "custom1_sensor",
          label: "Power Sensor",
          selector: { entity: { filter: { device_class: "power" } } }
        },
        { name: "custom1_extra_sensor", label: "Extra Data", selector: { entity: { domain: "sensor" } } }
      ]
    },
    ...j(e, "custom1", "Custom 1", we)
  ]), t.push({ name: "custom2_enabled", label: "Custom 2 enabled", selector: { boolean: {} } }), e.custom2_enabled && (t = [
    ...t,
    { name: "custom2_name", label: "Name", selector: { text: {} } },
    {
      type: "grid",
      name: "",
      schema: [
        {
          name: "custom2_sensor",
          label: "Power Sensor",
          selector: { entity: { filter: { device_class: "power" } } }
        },
        { name: "custom2_extra_sensor", label: "Extra Data", selector: { entity: { domain: "sensor" } } }
      ]
    },
    ...j(e, "custom2", "Custom 2", Ee)
  ]), t;
}, es = [
  {
    name: "entity_layout",
    default: Ce,
    selector: {
      select: {
        mode: "dropdown",
        options: [
          { value: S.Cross, label: "Cross" },
          { value: S.Circle, label: "Circle" },
          { value: S.Square, label: "Square" },
          { value: S.List, label: "List" }
        ]
      }
    }
  }
], de = [
  {
    name: "line_gap",
    label: "Line Gap",
    default: Rt,
    selector: { number: { mode: "slider", min: 0, max: 5 } }
  }
], is = (e) => {
  if (e.entity_layout === "cross")
    return [
      {
        name: "corner_radius",
        default: Mt,
        label: "Corner Radius",
        selector: { number: { mode: "slider", min: 1, max: 10 } }
      },
      ...de
    ];
  if (e.entity_layout === "square") {
    let t = [
      {
        name: "line_style",
        default: Pt,
        label: "Line Style",
        selector: {
          select: {
            mode: "dropdown",
            options: [
              { value: f.Curved, label: "Curved" },
              { value: f.Angled, label: "Angled" },
              { value: f.Straight, label: "Straight" }
            ]
          }
        }
      }
    ];
    return e.line_style === f.Curved && (t = [...t, ...de]), t;
  }
  return e.entity_layout === "circle" ? [
    {
      name: "circle_size",
      default: Ut,
      label: "Circle Size",
      selector: { number: { mode: "slider", min: 35, max: 45 } }
    },
    {
      name: "centre_entity",
      default: Pt,
      label: "Centre Entity",
      selector: {
        select: {
          mode: "dropdown",
          options: [
            { value: H.None, label: "None" },
            { value: H.House, label: "House" },
            { value: H.Inverter, label: "Inverter" },
            { value: H.Solar, label: "Solar" },
            { value: H.Battery, label: "Battery" }
          ]
        }
      }
    }
  ] : [];
}, ss = (e, t) => {
  let i = [{ name: "details_enabled", label: "Details enabled", selector: { boolean: {} } }];
  return e.details_enabled && (i = [
    ...i,
    {
      name: "num_detail_columns",
      label: "Number of columns",
      default: Gt,
      selector: { number: { mode: "slider", min: 1, max: 5 } }
    },
    {
      label: "Entities",
      name: "detail_entities",
      selector: {
        entity: {
          multiple: !0,
          include_entities: t.filter(
            (s) => e.detail_entities ? e.detail_entities.indexOf(s) === -1 : !0
          )
        }
      }
    }
  ]), i;
};
class ut {
  static getDefaults(t) {
    return {
      type: "custom:givtcp-power-flow-card",
      battery_colour_type: W,
      battery_colour: t.battery_colour_type === "rgb" ? hi : di,
      battery_dot_easing: be,
      battery_enabled: ui,
      circle_size: Ut,
      colour_icons_and_text: $e,
      corner_radius: Mt,
      custom1_colour_type: W,
      custom1_colour: t.custom1_colour_type === "rgb" ? pi : gi,
      custom1_dot_easing: lt,
      custom2_colour_type: W,
      custom2_colour: t.custom2_colour_type === "rgb" ? fi : mi,
      custom2_dot_easing: lt,
      details_enabled: Ae,
      dot_size: Nt,
      dot_speed: zt,
      entity_layout: S.Cross,
      entity_line_width: st,
      entity_size: Wt,
      eps_colour_type: W,
      eps_colour: t.eps_colour_type === "rgb" ? $i : wi,
      eps_dot_easing: Pe,
      eps_enabled: xe,
      grid_colour_type: W,
      grid_colour: t.grid_colour_type === "rgb" ? Ei : Ai,
      grid_dot_easing: Oe,
      hide_inactive_flows: De,
      house_colour_type: W,
      house_colour: t.house_colour_type === "rgb" ? Si : Ci,
      house_dot_easing: Fe,
      line_gap: Rt,
      line_style: Ue,
      line_width: st,
      num_detail_columns: Gt,
      power_margin: Ht,
      single_battery: Bt,
      single_invertor: mt,
      solar_colour_type: W,
      solar_colour: t.solar_colour_type === "rgb" ? xi : Ti,
      solar_dot_easing: lt,
      solar_enabled: Me
    };
  }
  static migrateConfig(t, i) {
    const s = i ? { ...t } : t, r = {
      icon_solar: "solar_icon",
      icon_battery: "battery_icon",
      icon_grid: "grid_icon",
      icon_house: "house_icon"
    };
    for (const [o, a] of Object.entries(r))
      s[o] && (s[a] = s[o], delete s[o]);
    return s;
  }
}
var rs = Object.defineProperty, os = Object.getOwnPropertyDescriptor, vt = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? os(t, i) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (s ? a(t, i, r) : a(r)) || r);
  return s && r && rs(t, i, r), r;
};
let rt = class extends x {
  constructor() {
    super(), this._computeLabelCallback = (e) => {
      if (e.label)
        return e.label;
      switch (e.name) {
        case "invertor":
          return "Invertor";
        case "battery":
          return "Battery";
        case "entity_layout":
          return "Layout";
        default:
          return e.name;
      }
    }, this._curView = 0;
  }
  get _extraEntities() {
    const e = this._invertorSerial, t = this._batterySerial;
    return this.hass ? Object.keys(this.hass.states).filter(
      (i) => e.some((s) => i.includes(s)) || t.some(
        (s) => i.includes(s) && (["battery", "energy", "monetary", "power", "current", "voltage", "timestamp"].includes(
          this.hass.states[i].attributes.device_class || ""
        ) || ["total_increasing", "total", "measurement"].includes(
          this.hass.states[i].attributes.state_class || ""
        ))
      )
    ) : [];
  }
  get _singleInverter() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.single_invertor) == null ? mt : (t = this._config) == null ? void 0 : t.single_invertor;
  }
  get _singleBattery() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.single_battery) == null ? Bt : (t = this._config) == null ? void 0 : t.single_battery;
  }
  get _batterySerial() {
    var e, t, i, s, r;
    if (this._singleBattery)
      try {
        return (e = this._config) != null && e.battery && this.hass.states[(t = this._config) == null ? void 0 : t.battery] ? [this.hass.states[(i = this._config) == null ? void 0 : i.battery].state.toLowerCase()] : [];
      } catch (o) {
        return console.error(o), [];
      }
    else
      try {
        return ((r = (s = this._config) == null ? void 0 : s.batteries) == null ? void 0 : r.filter((o) => this.hass.states[o]).map((o) => this.hass.states[o].state.toLowerCase() || "")) || [];
      } catch (o) {
        return console.error(o), [];
      }
  }
  get _invertorSerial() {
    var e, t, i, s, r;
    if (this._singleInverter)
      try {
        return (e = this._config) != null && e.invertor && this.hass.states[(t = this._config) == null ? void 0 : t.invertor] ? [this.hass.states[(i = this._config) == null ? void 0 : i.invertor].state.toLowerCase()] : [];
      } catch (o) {
        return console.error(o), [];
      }
    else
      try {
        return ((r = (s = this._config) == null ? void 0 : s.invertors) == null ? void 0 : r.filter((o) => this.hass.states[o]).map((o) => this.hass.states[o].state.toLowerCase() || "")) || [];
      } catch (o) {
        return console.error(o), [];
      }
  }
  get _batteries() {
    return this.hass ? Object.keys(this.hass.states).filter((e) => e.includes("battery_serial_number")) : [];
  }
  get _invertors() {
    return this.hass ? Object.keys(this.hass.states).filter((e) => e.includes("invertor_serial_number")) : [];
  }
  get _defaults() {
    return ut.getDefaults(this._config);
  }
  // private get _invertorsAndBatteries(): string[] {
  // 	return this.hass ? Object.keys(this.hass.states).filter((eid) =>
  // 	/^sensor\.givtcp_[a-zA-Z]{2}\d{4}[a-zA-Z]\d{3}_(invertor|battery)_serial_number$/g.test(eid)
  // ) : [];
  // }
  //state_class: total_increasing, total, measurement
  //device_class: battery, energy, monetary, power, current, voltage, timestamp
  get _schema() {
    switch (this._curView) {
      case 0:
        return [
          { name: "name", label: "Name", selector: { text: {} } },
          ...ji(this._config, this._invertors, this._batteries),
          {
            type: "grid",
            name: "",
            schema: [
              {
                name: "dot_size",
                label: "Dot Size",
                default: Nt,
                selector: { number: { mode: "slider", min: 1, max: 10 } }
              },
              {
                name: "dot_speed",
                label: "Dot Speed",
                default: zt,
                selector: { number: { mode: "slider", min: 1, max: 10 } }
              },
              {
                name: "line_width",
                label: "Flow Size",
                default: st,
                selector: { number: { mode: "slider", min: 1, max: 10 } }
              },
              {
                name: "entity_line_width",
                label: "Outline Size",
                default: st,
                selector: { number: { mode: "slider", min: 1, max: 10 } }
              },
              {
                name: "entity_size",
                label: "Entity Size",
                default: Wt,
                selector: { number: { mode: "slider", min: 3, max: 7 } }
              },
              {
                name: "power_margin",
                label: "Power Threshold",
                default: Ht,
                selector: { number: { mode: "box", unit_of_measurement: F.WATT } }
              },
              { name: "hide_inactive_flows", label: "Hide Inactive Flows", selector: { boolean: {} } },
              { name: "colour_icons_and_text", label: "Colour Icons and Text", selector: { boolean: {} } }
            ]
          }
        ];
      case 1:
        return [...es, ...is(this._config)];
      case 2:
        return [...Ki(this._config)];
      case 3:
        return [...Ji(this._config)];
      case 4:
        return [...Qi(this._config)];
      case 5:
        return [...Zi(this._config), ...ts(this._config)];
      case 6:
        return [...ss(this._config, this._extraEntities)];
      default:
        return [];
    }
  }
  setConfig(e) {
    e = ut.migrateConfig(e, !1), ze(e, Yi), this._config = e;
  }
  render() {
    if (!this.hass || !this._config)
      return _``;
    const e = {
      ...this._defaults,
      ...this._config
    };
    return Se.forEach((t) => {
      (e[t + "_colour_type"] !== "ui" && typeof e[t] == "string" || e[t + "_colour_type"] === "ui" && typeof e[t] == "object") && (e[t] = this._defaults[t]);
    }), _`
			<ha-tabs scrollable .selected=${this._curView} @iron-activate=${this._handleTabChanged}>
				<paper-tab>General</paper-tab>
				<paper-tab>Layout</paper-tab>
				<paper-tab>Grid</paper-tab>
				<paper-tab>Solar</paper-tab>
				<paper-tab>Battery</paper-tab>
				<paper-tab>House</paper-tab>
				<paper-tab>Details</paper-tab>
			</ha-tabs>
			<ha-form
				.hass=${this.hass}
				.data=${e}
				.schema=${this._schema}
				.computeLabel=${this._computeLabelCallback}
				@value-changed=${this._valueChanged}
			></ha-form>
		`;
  }
  _handleTabChanged(e) {
    e.preventDefault();
    const t = e.detail.selected;
    this._curView = t;
  }
  _valueChanged(e) {
    const t = e.detail.value;
    P(this, "config-changed", { config: t });
  }
};
vt([
  w()
], rt.prototype, "hass", 2);
vt([
  It()
], rt.prototype, "_config", 2);
vt([
  It()
], rt.prototype, "_curView", 2);
rt = vt([
  I("givtcp-power-flow-card-editor")
], rt);
class u {
  static getCurvePath(t, i, s, r, o) {
    const a = (t + s) / 2, n = (i + r) / 2, c = s - t, h = r - i, d = Math.sqrt(c * c + h * h), p = Math.atan2(h, c);
    let v = a, E = n;
    if (o !== 0) {
      const Zt = Math.abs(d / (2 * Math.sin(o * Math.PI / 180))), He = o > 0 ? -1 : 1, Qt = p + He * Math.PI / 2;
      v = a + Zt * Math.cos(Qt), E = n + Zt * Math.sin(Qt);
    }
    return `M ${t},${i} Q ${v},${E} ${s},${r}`;
  }
  static getRoundedBox(t, i, s, r) {
    const o = Math.min(t, i), a = Math.min(s, o / 2);
    r || (r = { x: 0, y: 0 });
    const n = `M${r.x},${a + r.y}a${a},${a} 0 0 1 ${a},${-a}h${t - 2 * a}`, c = `a${a},${a} 0 0 1 ${a},${a}v${i - 2 * a}`, h = `a${a},${a} 0 0 1 ${-a},${a}h${-t + 2 * a}`, d = `a${a},${a} 0 0 1 ${-a},${-a}v${-i + 2 * a}`;
    return `${n}${c}${h}${d}z`;
  }
  static getRoundedCornerPath(t, i, s, r, o, a) {
    let n = `M ${t} ${i} `;
    return a == 1 ? (n += `H ${s - o} `, n += `q ${o} 0 ${o} -${o} `, n += `V ${r} `) : a == 2 ? (n += `H ${s + o} `, n += `q -${o} 0 -${o} ${o} `, n += `V ${r} `) : a == 3 ? (n += `V ${r + o} `, n += `q 0 -${o} -${o} -${o} `, n += `H ${s} `) : (n += `V ${r - o} `, n += `q 0 ${o} ${o} ${o} `, n += `H ${s} `), n;
  }
  static getStraightPath(t, i, s, r) {
    return `M ${t} ${i} L ${s} ${r}`;
  }
  static getLShape(t, i, s, r, o) {
    const a = `M ${t} ${i} `;
    let n, c;
    return t !== s && (n = `H ${s} `), i !== r && (c = `V ${r} `), o === 0 ? `${a}${n}${c}` : `${a}${c}${n}`;
  }
  static getShoulderSVGPath(t, i, s, r, o) {
    let a = `M ${t} ${i} `;
    if (t !== s) {
      const n = (t + s) / 2;
      a += `H ${n - o} `, a += `Q ${n} ${i} ${n} ${i + o} `, a += `V ${r - o} `, a += `Q ${n} ${r} ${n + o} ${r} `, a += `H ${s} `;
    }
    if (i !== r) {
      const n = (i + r) / 2;
      t === s ? (a += `V ${n - o} `, a += `Q ${t} ${n} ${t + o} ${n} `) : a += `V ${n} `, a += `H ${s} `;
    }
    return a;
  }
  static getCirclePath(t, i = 0, s = 50, r = { x: 50, y: 50 }) {
    const a = -90 + i / 100 * 360, n = t === 100 ? a + 360 : a + t / 100 * 360, c = a * Math.PI / 180, h = n * Math.PI / 180, d = {
      x: r.x + s * Math.cos(c),
      y: r.y + s * Math.sin(c)
    }, p = {
      x: t === 100 ? 49.99 : r.x + s * Math.cos(h),
      y: r.y + s * Math.sin(h)
    }, v = n - a <= 180 ? 0 : 1;
    return `M ${d.x} ${d.y} A ${s} ${s} 0 ${v} 1 ${p.x} ${p.y}`;
  }
}
var as = Object.defineProperty, ns = Object.getOwnPropertyDescriptor, qt = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? ns(t, i) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (s ? a(t, i, r) : a(r)) || r);
  return s && r && as(t, i, r), r;
};
let pt = class extends x {
  constructor() {
    super(), this.addEventListener("click", (e) => {
      e.stopPropagation();
      const t = new CustomEvent("entity-details", {
        bubbles: !0,
        composed: !0,
        detail: { type: this.data.type }
      });
      this.dispatchEvent(t);
    });
  }
  createRenderRoot() {
    return this;
  }
  getArrow(e) {
    return _`${L`<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
			<g transform="rotate(${e} 16 16)">
			<path d="M26.71,10.29l-10-10a1,1,0,0,0-1.41,0l-10,10,1.41,1.41L15,3.41V32h2V3.41l8.29,8.29Z" style="fill: var(--gtpc-${this.data.type}-color); stroke: var(--gtpc-${this.data.type}-color)" />
			</g>
  		</svg>`}`;
  }
  static get observedAttributes() {
    return ["entityDetails"];
  }
  render() {
    let e = 0;
    const t = {};
    [this.data.in, this.data.out].forEach((r) => {
      r && (e += r.total, r.parts.forEach((o) => {
        t[o.type] || (t[o.type] = 0), t[o.type] += o.value;
      }));
    });
    let i = 0;
    this.style.setProperty("--gtpc-color", `var(--gtpc-${this.data.type}-color)`);
    const s = Math.floor(50 - this.entityLineWidth / 2) - 1;
    return _`
			${L`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
		${e <= 0 ? L`<path d="${u.getCirclePath(100, 0, s)}" style="stroke: var(--gtpc-${this.data.type}-color)" />` : Object.keys(t).map((r) => {
      const o = t[r] / e * 100;
      return i += e > 0 ? (e - t[r]) / e * 100 : 0, o > 0 ? L`<path d="${u.getCirclePath(
        o,
        i,
        s
      )}" style="stroke: var(--gtpc-${r}-color)" />` : _``;
    })}
		</svg>`}
			<div
				class="gtpc-entity ${this.data.in === void 0 || this.data.out === void 0 ? "gtpc-entity-single" : "gtpc-entity-both"}"
			>
				<span class="gtpc-entity-name" data-entity-type="${this.data.type}">${this.data.name}</span>
				${this.data.in !== void 0 ? _`<span data-power="${this.data.in.total}" class="gtpc-entity-in"
							>${this.getArrow(this.data.linePos || 0)} ${this.formatPower(this.data.in.total)}</span
						>` : _``}
				${this.data.out !== void 0 ? _`<span data-power="${this.data.out.total}" class="gtpc-entity-out"
							>${this.getArrow(((this.data.linePos || 0) + 180) % 360)} ${this.formatPower(this.data.out.total)}</span
						>` : _``}
				<ha-icon class="gtpc-entity-icon" .icon="${this.data.icon}"></ha-icon>
				${this.data.extra !== void 0 ? _`<span class="gtpc-entity-extra">${this.data.extra}</span>` : _``}
			</div>
		`;
  }
  formatPower(e) {
    return e < 1e3 ? `${e}${F.WATT}` : e < 1e6 ? `${(e / 1e3).toFixed(1)}${F.KILO_WATT}` : `${(e / 1e6).toFixed(1)}${F.MEGA_WATT}`;
  }
};
qt([
  w()
], pt.prototype, "data", 2);
qt([
  w()
], pt.prototype, "entityLineWidth", 2);
pt = qt([
  I("givtcp-power-flow-card-entity")
], pt);
var cs = Object.defineProperty, ls = Object.getOwnPropertyDescriptor, Re = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? ls(t, i) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (s ? a(t, i, r) : a(r)) || r);
  return s && r && cs(t, i, r), r;
};
let Tt = class extends x {
  constructor() {
    super(), this.addEventListener("click", (e) => {
      var t;
      if (e.target && (e.target instanceof HTMLElement || e.target instanceof SVGElement)) {
        const i = (t = e.target.closest(".gtpc-detail")) == null ? void 0 : t.getAttribute("data-entity-id");
        i && (e.stopPropagation(), P(this, "hass-more-info", { entityId: i }));
      }
    });
  }
  createRenderRoot() {
    return this;
  }
  render() {
    var e;
    return _`<div class="gtpc-details">
			${(e = this.entities) == null ? void 0 : e.map(
      (t) => {
        var i, s;
        return _`<div class="gtpc-detail" data-entity-id="${t == null ? void 0 : t.entity_id}">
						<div class="gtpc-detail-title">${this.formatEntityName((i = t == null ? void 0 : t.attributes) == null ? void 0 : i.friendly_name)}</div>
						<state-badge .stateObj=${t} .stateColor=${!0}></state-badge>
						<div class="gtpc-detail-state">${t == null ? void 0 : t.state} ${(s = t == null ? void 0 : t.attributes) == null ? void 0 : s.unit_of_measurement}</div>
					</div>`;
      }
    )}
		</div>`;
  }
  formatEntityName(e) {
    return e ? e.replace(/^givtcp [a-zA-Z]{2}\d{4}[a-zA-Z]\d{3}\s/i, "").replace(/\s*kwh$/i, "") : "";
  }
};
Re([
  w()
], Tt.prototype, "entities", 2);
Tt = Re([
  I("givtcp-power-flow-card-details")
], Tt);
var hs = Object.defineProperty, ds = Object.getOwnPropertyDescriptor, bt = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? ds(t, i) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (s ? a(t, i, r) : a(r)) || r);
  return s && r && hs(t, i, r), r;
};
class N extends x {
  constructor() {
    super(...arguments), this.width = 100, this.midX = this.width / 2;
  }
  get midY() {
    return this.hasCustom1 && this.hasCustom2 || this.hasSolar && this.hasCustom2 ? Math.round(this.height / 2) : this.hasBattery && !this.hasSolar ? Math.round(this.height / this.entitySize) : this.hasSolar && !this.hasBattery ? this.height - Math.round(this.entityWidth / 2) : Math.round(this.height / 2);
  }
  get height() {
    return this.hasCustom1 && this.hasCustom2 || this.hasSolar && this.hasCustom2 ? this.entityWidth * this.entitySize : !this.hasSolar && !this.hasBattery ? this.entityWidth : !this.hasSolar || !this.hasBattery ? this.entityWidth * Math.round(this.entitySize) / 2 : this.entityWidth * this.entitySize;
  }
  get entityWidth() {
    return Math.round(this.width / this.entitySize);
  }
  get hasSolar() {
    return this.isEnabled("solar") !== void 0;
  }
  get hasBattery() {
    return this.isEnabled("battery") !== void 0;
  }
  get hasEPS() {
    return this.isEnabled("eps") !== void 0;
  }
  get hasCustom1() {
    return this.isEnabled("custom1") !== void 0;
  }
  get hasCustom2() {
    return this.isEnabled("custom2") !== void 0;
  }
  createRenderRoot() {
    return this;
  }
  isEnabled(t) {
    return this.flowData.find((i) => i.type === t) ?? void 0;
  }
  formatPower(t) {
    return t < 1e3 ? `${t}${F.WATT}` : t < 1e6 ? `${(t / 1e3).toFixed(1)}${F.KILO_WATT}` : `${(t / 1e6).toFixed(1)}${F.MEGA_WATT}`;
  }
}
bt([
  w()
], N.prototype, "flowData", 2);
bt([
  w()
], N.prototype, "flows", 2);
bt([
  w()
], N.prototype, "entitySize", 2);
bt([
  w()
], N.prototype, "entityLineWidth", 2);
var us = Object.defineProperty, ps = Object.getOwnPropertyDescriptor, kt = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? ps(t, i) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (s ? a(t, i, r) : a(r)) || r);
  return s && r && us(t, i, r), r;
};
let gt = class extends N {
  get xLineGap() {
    return !this.hasSolar || !this.hasBattery ? this.lineGap / 2 : this.lineGap;
  }
  render() {
    let e = "full";
    return !this.hasSolar && !this.hasCustom1 ? e = "no-solar" : !this.hasBattery && !this.hasCustom2 && (e = "no-battery"), _`
			<div class="gtpc-layout gtpc-${e} gtpc-layout-cross">
				${this.flowData.map(
      (t) => _`<givtcp-power-flow-card-entity
							data-type="${t.type}"
							.entityLineWidth=${this.entityLineWidth}
							.data=${t}
						></givtcp-power-flow-card-entity>`
    )}
				<svg viewBox="0 0 100 ${this.height}" xmlns="http://www.w3.org/2000/svg">
					${this.flows.map((t) => this.getGroupForFlow(t.from, t.to))}
				</svg>
			</div>
		`;
  }
  getGroupForFlow(e, t) {
    return L`<g data-pos="0" class="gtpc-flow gtpc-${e}-to-${t}-flow" style="stroke: var(--gtpc-${e}-color)">
			<path d="${this.getPathForFlow(`${e}-to-${t}`)}" />
			<circle cx="0" cy="0" r="0.5" style="fill: var(--gtpc-${e}-color)"/>
		</g>`;
  }
  getPathForFlow(e) {
    const t = this.entityWidth / 2;
    switch (e) {
      case "solar-to-house":
        return u.getRoundedCornerPath(
          this.midX + this.xLineGap,
          this.entityWidth,
          this.width - this.entityWidth,
          this.midY - this.lineGap,
          this.cornerRadius,
          0
        );
      case "battery-to-house":
        return u.getRoundedCornerPath(
          this.width - this.entityWidth,
          this.midY + this.lineGap,
          this.midX + this.xLineGap,
          this.height - this.entityWidth,
          this.cornerRadius,
          2
        );
      case "battery-to-grid":
        return u.getRoundedCornerPath(
          this.midX - this.xLineGap,
          this.height - this.entityWidth,
          this.entityWidth,
          this.midY + this.lineGap,
          this.cornerRadius,
          3
        );
      case "grid-to-battery":
        return u.getRoundedCornerPath(
          this.midX - this.xLineGap,
          this.height - this.entityWidth,
          this.entityWidth,
          this.midY + this.lineGap,
          this.cornerRadius,
          3
        );
      case "solar-to-grid":
        return u.getRoundedCornerPath(
          this.entityWidth,
          this.midY - this.lineGap,
          this.midX - this.xLineGap,
          this.entityWidth,
          this.cornerRadius,
          1
        );
      case "solar-to-battery":
        return u.getCurvePath(this.midX, this.entityWidth, this.midX, this.height - this.entityWidth, 0);
      case "grid-to-house":
        return u.getCurvePath(this.entityWidth, this.midY, this.width - this.entityWidth, this.midY, 0);
      case "house-to-custom1":
        return u.getStraightPath(
          this.width - t,
          this.entityWidth,
          this.width - t,
          this.midY - t
        );
      case "house-to-custom2":
        return u.getStraightPath(
          this.width - t,
          this.height - this.entityWidth,
          this.width - t,
          this.midY + t
        );
      default:
        return "";
    }
  }
};
kt([
  w()
], gt.prototype, "lineGap", 2);
kt([
  w()
], gt.prototype, "cornerRadius", 2);
gt = kt([
  I("givtcp-power-flow-card-layout-cross")
], gt);
var gs = Object.defineProperty, _s = Object.getOwnPropertyDescriptor, Vt = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? _s(t, i) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (s ? a(t, i, r) : a(r)) || r);
  return s && r && gs(t, i, r), r;
};
let _t = class extends N {
  get circleMidY() {
    return this.hasCustom1 && this.hasCustom2 || this.hasSolar && this.hasCustom2 ? Math.round(this.height / 2) : this.hasBattery && !this.hasSolar ? 0 : this.hasSolar && !this.hasBattery ? this.height : Math.round(this.height / 2);
  }
  render() {
    let e = "full";
    return !this.hasSolar && !this.hasCustom1 ? e = "no-solar" : !this.hasBattery && !this.hasCustom2 && (e = "no-battery"), _`
			<div class="gtpc-layout gtpc-${e} gtpc-layout-circle gtpc-centre-${this.centreEntity}">
				${this.flowData.map(
      (t) => _`<givtcp-power-flow-card-entity
							data-type="${t.type}"
							.entityLineWidth=${this.entityLineWidth}
							.data=${t}
						></givtcp-power-flow-card-entity>`
    )}
				<svg viewBox="0 0 ${this.width} ${this.height}" xmlns="http://www.w3.org/2000/svg">
					${this.flows.map((t) => this.getGroupForFlow(t.from, t.to))}
				</svg>
			</div>
		`;
  }
  getGroupForFlow(e, t) {
    return L`<g data-pos="0" class="gtpc-flow gtpc-${e}-to-${t}-flow" style="stroke: var(--gtpc-${e}-color)">
			<path d="${this.getPathForFlow(`${e}-to-${t}`)}" />
			<circle cx="0" cy="0" r="0.5" style="fill: var(--gtpc-${e}-color)"/>
		</g>`;
  }
  getPathForFlow(e) {
    const t = this.entityWidth / 2, i = Math.ceil(2 * Math.PI * this.circleSize), s = Math.ceil((this.entityWidth - 0) / i * 100), r = 25 - s;
    switch (e) {
      case "solar-to-house":
        return u.getCirclePath(r, s / 2, this.circleSize, { x: this.midX, y: this.circleMidY });
      case "battery-to-house":
        return u.getCirclePath(r, 25 + s / 2, this.circleSize, { x: this.midX, y: this.circleMidY });
      case "battery-to-grid":
        return u.getCirclePath(r, 50 + s / 2, this.circleSize, { x: this.midX, y: this.circleMidY });
      case "grid-to-battery":
        return u.getCirclePath(r, 50 + s / 2, this.circleSize, { x: this.midX, y: this.circleMidY });
      case "solar-to-grid":
        return u.getCirclePath(r, 75 + s / 2, this.circleSize, { x: this.midX, y: this.circleMidY });
      case "solar-to-battery":
        return u.getCurvePath(this.midX, this.entityWidth, this.midX, this.height - this.entityWidth, 0);
      case "grid-to-house":
        return u.getCurvePath(this.entityWidth, this.midY, this.width - this.entityWidth, this.midY, 0);
      case "house-to-custom1":
        return u.getStraightPath(
          this.width - t,
          this.entityWidth,
          this.width - t,
          this.midY - t
        );
      case "house-to-custom2":
        return u.getStraightPath(
          this.width - t,
          this.height - this.entityWidth,
          this.width - t,
          this.midY + t
        );
      default:
        return "";
    }
  }
};
Vt([
  w()
], _t.prototype, "centreEntity", 2);
Vt([
  w()
], _t.prototype, "circleSize", 2);
_t = Vt([
  I("givtcp-power-flow-card-layout-circle")
], _t);
var ys = Object.defineProperty, fs = Object.getOwnPropertyDescriptor, Xt = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? fs(t, i) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (s ? a(t, i, r) : a(r)) || r);
  return s && r && ys(t, i, r), r;
};
let yt = class extends N {
  get xLineGap() {
    return !this.hasSolar || !this.hasBattery ? Math.round(this.lineGap / 2) : this.lineGap;
  }
  render() {
    let e = "full";
    return !this.hasSolar && !this.hasCustom1 ? e = "no-solar" : !this.hasBattery && !this.hasCustom2 && (e = "no-battery"), _`
			<div class="gtpc-layout gtpc-${e} gtpc-line-style-${this.lineStyle} gtpc-layout-square">
				${this.flowData.map(
      (t) => _`<givtcp-power-flow-card-entity
							data-type="${t.type}"
							.entityLineWidth=${this.entityLineWidth}
							.data=${t}
						/>`
    )}
				<svg viewBox="0 0 ${this.width} ${this.height}" xmlns="http://www.w3.org/2000/svg">
					${this.flows.map((t) => this.getGroupForFlow(t.from, t.to))}
				</svg>
			</div>
		`;
  }
  getGroupForFlow(e, t) {
    return L`<g data-pos="0" class="gtpc-flow gtpc-${e}-to-${t}-flow" style="stroke: var(--gtpc-${e}-color)">
			<path d="${this.getPathForFlow(`${e}-to-${t}`)}" />
			<circle cx="0" cy="0" r="0.5" style="fill: var(--gtpc-${e}-color)"/>
		</g>`;
  }
  getPathForFlow(e) {
    const t = this.entityWidth / 2;
    let i, s;
    switch (e) {
      case "solar-to-house":
        switch (this.lineStyle) {
          case f.Curved:
            return u.getCurvePath(
              this.midX + this.xLineGap,
              this.entityWidth,
              this.width - this.entityWidth,
              this.midY - this.lineGap,
              -90
            );
          case f.Angled:
            return u.getLShape(
              this.midX + t,
              t,
              this.width - t,
              this.midY - t,
              0
            );
          case f.Straight:
            return u.getStraightPath(
              this.midX + t,
              t,
              this.width - t,
              this.midY - t
            );
          default:
            return "";
        }
      case "battery-to-house":
        switch (this.lineStyle) {
          case f.Curved:
            return u.getCurvePath(
              this.width - this.entityWidth,
              this.midY + this.lineGap,
              this.midX + this.xLineGap,
              this.height - this.entityWidth,
              -90
            );
          case f.Angled:
            return u.getLShape(
              this.width - t,
              this.midY + t,
              this.midX + t,
              this.height - t,
              1
            );
          case f.Straight:
            return u.getStraightPath(
              this.width - t,
              this.midY + t,
              this.midX + t,
              this.height - t
            );
          default:
            return "";
        }
      case "battery-to-grid":
        switch (this.lineStyle) {
          case f.Curved:
            return u.getCurvePath(
              this.midX - this.xLineGap,
              this.height - this.entityWidth,
              this.entityWidth,
              this.midY + this.lineGap,
              -90
            );
          case f.Angled:
            return u.getLShape(
              this.midX - t,
              this.height - t,
              t,
              this.midY + t,
              0
            );
          case f.Straight:
            return u.getStraightPath(
              this.midX - t,
              this.height - t,
              t,
              this.midY + t
            );
          default:
            return "";
        }
      case "grid-to-battery":
        switch (this.lineStyle) {
          case f.Curved:
            return u.getCurvePath(
              this.midX - this.xLineGap,
              this.height - this.entityWidth,
              this.entityWidth,
              this.midY + this.lineGap,
              -90
            );
          case f.Angled:
            return u.getLShape(
              this.midX - t,
              this.height - t,
              t,
              this.midY + t,
              0
            );
          case f.Straight:
            return u.getStraightPath(
              this.midX - t,
              this.height - t,
              t,
              this.midY + t
            );
          default:
            return "";
        }
      case "solar-to-grid":
        switch (this.lineStyle) {
          case f.Curved:
            return u.getCurvePath(
              this.entityWidth,
              this.midY - this.lineGap,
              this.midX - this.xLineGap,
              this.entityWidth,
              -90
            );
          case f.Angled:
            return u.getLShape(t, this.midY - t, this.midX - t, t, 1);
          case f.Straight:
            return u.getStraightPath(t, this.midY - t, this.midX - t, t);
          default:
            return "";
        }
      case "solar-to-battery":
        return u.getCurvePath(this.midX, this.entityWidth, this.midX, this.height - this.entityWidth, 0);
      case "grid-to-house":
        return u.getCurvePath(this.entityWidth, this.midY, this.width - this.entityWidth, this.midY, 0);
      case "house-to-custom1":
        switch (this.lineStyle) {
          case f.Curved:
          case f.Straight:
            return u.getStraightPath(
              this.width - t,
              this.entityWidth,
              this.width - t,
              this.midY - t
            );
          case f.Angled:
            return i = this.calculateCirclePoint(0.125, t, [
              this.width - (this.entityWidth + t),
              this.entityWidth + t
            ]), s = this.calculateCirclePoint(0.625, t, [this.width - t, this.midY]), u.getStraightPath(i[0], i[1], s[0], s[1]);
          default:
            return "";
        }
      case "house-to-custom2":
        switch (this.lineStyle) {
          case f.Curved:
          case f.Straight:
            return u.getStraightPath(
              this.width - t,
              this.height - this.entityWidth,
              this.width - t,
              this.midY + t
            );
          case f.Angled:
            return i = this.calculateCirclePoint(0.875, t, [
              this.width - (this.entityWidth + t),
              this.height - (this.entityWidth + t)
            ]), s = this.calculateCirclePoint(0.375, t, [this.width - t, this.midY]), u.getStraightPath(i[0], i[1], s[0], s[1]);
          default:
            return "";
        }
      default:
        return "";
    }
  }
  calculateCirclePoint(e, t, i) {
    const s = e * 2 * Math.PI, r = i[0] + t * Math.cos(s), o = i[1] + t * Math.sin(s);
    return [r, o];
  }
};
Xt([
  w()
], yt.prototype, "lineGap", 2);
Xt([
  w()
], yt.prototype, "lineStyle", 2);
yt = Xt([
  I("givtcp-power-flow-card-layout-square")
], yt);
var ms = Object.defineProperty, vs = Object.getOwnPropertyDescriptor, Ge = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? vs(t, i) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (s ? a(t, i, r) : a(r)) || r);
  return s && r && ms(t, i, r), r;
};
let Ot = class extends N {
  constructor() {
    super(), this.addEventListener("click", (e) => {
      var t;
      if (e.target && (e.target instanceof HTMLElement || e.target instanceof SVGElement)) {
        const i = (t = e.target.closest(".gtpc-list-row")) == null ? void 0 : t.getAttribute("data-from");
        if (i) {
          e.stopPropagation();
          const s = new CustomEvent("entity-details", {
            bubbles: !0,
            composed: !0,
            detail: { type: i }
          });
          this.dispatchEvent(s);
        }
      }
    });
  }
  get halfEntity() {
    return this.entityWidth / 2;
  }
  iconFor(e) {
    var t;
    return ((t = this.flowData.find((i) => i.type === e)) == null ? void 0 : t.icon) ?? "mdi:power-plug";
  }
  directionFor(e, t) {
    var i;
    return ((i = this.flows.find((s) => s.from === e && s.to === t)) == null ? void 0 : i.direction) ?? m.In;
  }
  extraFor(e) {
    var t;
    return (t = this.flowData.find((i) => i.type === e)) == null ? void 0 : t.extra;
  }
  render() {
    return _`
			<div class="gtpc-layout gtpc-layout-list">
				${this.flowPowers.sort((e, t) => t.value - e.value).map(
      (e) => _`<div class="gtpc-list-row" data-from='${e.from}' data-to='${e.to}' data-power='${e.value}'>
							<svg viewBox="0 0 100 ${this.halfEntity}" xmlns="http://www.w3.org/2000/svg">
								${this.getGroupForFlow(e.from, e.to)}
							</svg>
							<div class="gtpc-list-entity gtpc-from-entity" data-type="${e.from}">
								<ha-icon .icon="${this.iconFor(e.from)}"></ha-icon>
								${this.extraFor(e.from) ? _`<div class="gtpc-entity-extra">${this.extraFor(e.from)}</div>` : _``}
							</div>
							<div class="gtpc-list-flow-value">
								<span>${this.formatPower(e.value)}</span>
							</div>
							<div class="gtpc-list-entity gtpc-to-entity" data-type="${e.to}">
								<ha-icon .icon="${this.iconFor(e.to)}"></ha-icon>
								${this.extraFor(e.to) ? _`<div class="gtpc-entity-extra">${this.extraFor(e.to)}</div>` : _``}
							</div>
							</div>
						</div>`
    )}
			</div>
		`;
  }
  getGroupForFlow(e, t) {
    const i = this.directionFor(e, t), s = i === m.In ? this.halfEntity : this.width - this.halfEntity, r = i === m.In ? this.width - this.halfEntity : this.halfEntity, o = this.halfEntity / 2;
    return L`<g data-pos="0" class="gtpc-flow gtpc-${e}-to-${t}-flow" style="stroke: var(--gtpc-${e}-color)">
			<path d="${u.getStraightPath(s, o, r, o)}" />
			<circle cx="0" cy="0" r="0.5" style="fill: var(--gtpc-${e}-color)"/>
		</g>`;
  }
};
Ge([
  w()
], Ot.prototype, "flowPowers", 2);
Ot = Ge([
  I("givtcp-power-flow-card-layout-list")
], Ot);
var bs = Object.defineProperty, $s = Object.getOwnPropertyDescriptor, Kt = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? $s(t, i) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (s ? a(t, i, r) : a(r)) || r);
  return s && r && bs(t, i, r), r;
};
window.customCards = window.customCards || [];
window.customCards.push({
  type: "givtcp-power-flow-card",
  name: "GivTCP Power Flow Card",
  description: "GivTCP Power Flow Card"
});
let ot = class extends x {
  constructor() {
    super(), this.flows = [
      { from: "solar", to: "grid", direction: m.Out },
      { from: "solar", to: "battery", direction: m.In },
      { from: "solar", to: "house", direction: m.In },
      { from: "battery", to: "house", direction: m.Out },
      { from: "battery", to: "grid", direction: m.In },
      { from: "grid", to: "house", direction: m.In },
      { from: "grid", to: "battery", direction: m.Out },
      { from: "house", to: "custom1", direction: m.Out },
      { from: "house", to: "custom2", direction: m.Out }
    ];
  }
  static async getConfigElement() {
    return document.createElement("givtcp-power-flow-card-editor");
  }
  get _activeFlows() {
    return this.flows.filter((e) => !(!this._solarEnabled && e.from === "solar" || !this._batteryEnabled && (e.from === "battery" || e.to === "battery") || !this._custom1Enabled && e.to === "custom1" || !this._custom2Enabled && e.to === "custom2" || !this._epsEnabled && e.to === "eps"));
  }
  get _custom1Extra() {
    var t;
    const e = this.hass.states[(t = this._config) == null ? void 0 : t.custom1_extra_sensor];
    return !e || !this._custom1Enabled ? void 0 : this.getFormatedState(e);
  }
  get _custom2Extra() {
    var t;
    const e = this.hass.states[(t = this._config) == null ? void 0 : t.custom2_extra_sensor];
    return !e || !this._custom2Enabled ? void 0 : this.getFormatedState(e);
  }
  get _gridDotEasing() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.grid_dot_easing) === void 0 ? Oe : (t = this._config) == null ? void 0 : t.grid_dot_easing;
  }
  get _houseDotEasing() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.house_dot_easing) === void 0 ? Fe : (t = this._config) == null ? void 0 : t.house_dot_easing;
  }
  get _solarDotEasing() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.solar_dot_easing) === void 0 ? lt : (t = this._config) == null ? void 0 : t.solar_dot_easing;
  }
  get _batteryDotEasing() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.battery_dot_easing) === void 0 ? be : (t = this._config) == null ? void 0 : t.battery_dot_easing;
  }
  get _epsDotEasing() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.eps_dot_easing) === void 0 ? Pe : (t = this._config) == null ? void 0 : t.eps_dot_easing;
  }
  get _custom1DotEasing() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.custom1_dot_easing) === void 0 ? _i : (t = this._config) == null ? void 0 : t.custom1_dot_easing;
  }
  get _custom2DotEasing() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.custom2_dot_easing) === void 0 ? vi : (t = this._config) == null ? void 0 : t.custom2_dot_easing;
  }
  get _epsEnabled() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.eps_enabled) === void 0 || !this._batteryEnabled ? xe : (t = this._config) == null ? void 0 : t.eps_enabled;
  }
  get _detailsEnabled() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.details_enabled) === void 0 ? Ae : (t = this._config) == null ? void 0 : t.details_enabled;
  }
  get _detailEntities() {
    var e, t;
    return this._detailsEnabled ? (t = (e = this._config) == null ? void 0 : e.detail_entities) == null ? void 0 : t.map((i) => this.hass.states[i]) : [];
  }
  get _epsTotal() {
    return this._inverterName && this._epsEnabled ? this._inverterName.reduce(
      (e, t) => {
        const i = this.hass.states[`sensor.${t.prefix}_eps_power${t.suffix}`];
        return i && (e.total += parseInt(i == null ? void 0 : i.state, 10), e.parts.push({ type: "eps", value: parseInt(i == null ? void 0 : i.state, 10) })), e;
      },
      { total: 0, parts: [] }
    ) : void 0;
  }
  get _custom1Total() {
    var t;
    const e = this.hass.states[(t = this._config) == null ? void 0 : t.custom1_sensor];
    return !e || !this._custom1Enabled ? void 0 : {
      total: this.getStateAsWatts(e),
      parts: [{ type: "custom1", value: this.getStateAsWatts(e) }]
    };
  }
  get _custom2Total() {
    var t;
    const e = this.hass.states[(t = this._config) == null ? void 0 : t.custom2_sensor];
    return !e || !this._custom2Enabled ? void 0 : {
      total: this.getStateAsWatts(e),
      parts: [{ type: "custom2", value: this.getStateAsWatts(e) }]
    };
  }
  get _singleInverter() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.single_invertor) === void 0 ? mt : (t = this._config) == null ? void 0 : t.single_invertor;
  }
  // private get _singleBattery(): boolean {
  // 	return this._config?.single_battery === undefined ? SINGLE_BATTERY_DEFAULT : this._config?.single_battery;
  // }
  get _custom1Enabled() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.custom1_enabled) === void 0 ? yi : (t = this._config) == null ? void 0 : t.custom1_enabled;
  }
  get _custom2Enabled() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.custom2_enabled) === void 0 ? bi : (t = this._config) == null ? void 0 : t.custom2_enabled;
  }
  get _custom1Name() {
    var e;
    return ((e = this._config) == null ? void 0 : e.custom1_name) || "Custom 1";
  }
  get _custom2Name() {
    var e;
    return ((e = this._config) == null ? void 0 : e.custom2_name) || "Custom 2";
  }
  get _lineStyle() {
    var e;
    return ((e = this._config) == null ? void 0 : e.line_style) || Ue;
  }
  get _entitySize() {
    var e;
    return 10 - (((e = this._config) == null ? void 0 : e.entity_size) || Wt);
  }
  get _dotSpeed() {
    var e;
    return ((e = this._config) == null ? void 0 : e.dot_speed) || zt;
  }
  get _dotSize() {
    var e;
    return ((e = this._config) == null ? void 0 : e.dot_size) || Nt;
  }
  get _batterySoc() {
    const e = this._inverterName.map((i) => {
      const s = this.hass.states[`sensor.${i.prefix}_soc${i.suffix}`];
      return s && s.state || s ? parseInt(s.state, 10) : void 0;
    }).filter((i) => i != null), t = e.reduce((i, s) => i + s, 0);
    return Math.max(0, Math.min(Math.round(t / e.length), 100));
  }
  get _entityLayout() {
    var e;
    return ((e = this._config) == null ? void 0 : e.entity_layout) || Ce;
  }
  get _centreEntity() {
    var e;
    return ((e = this._config) == null ? void 0 : e.centre_entity) || Pt;
  }
  get _cornerRadius() {
    var e;
    return ((e = this._config) == null ? void 0 : e.corner_radius) || Mt;
  }
  get _inverterName() {
    var e, t, i;
    if (this._singleInverter)
      try {
        const s = this.extractInvertorName((e = this._config) == null ? void 0 : e.invertor);
        return s ? [s] : [];
      } catch (s) {
        return console.error(s), [];
      }
    else
      try {
        return ((i = (t = this._config) == null ? void 0 : t.invertors) == null ? void 0 : i.map((s) => this.extractInvertorName(s))) || [];
      } catch (s) {
        return console.error(s), [];
      }
  }
  // private get _batterySerial(): string {
  // 	return this._config?.battery ? this.hass.states[this._config?.battery].state.toLowerCase() || '' : '';
  // }
  get _powerMargin() {
    var e;
    return ((e = this._config) == null ? void 0 : e.power_margin) || Ht;
  }
  get _lineGap() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.line_gap) === void 0 ? Rt : (t = this._config) == null ? void 0 : t.line_gap;
  }
  get _circleSize() {
    var e;
    return ((e = this._config) == null ? void 0 : e.circle_size) || Ut;
  }
  get _lineWidth() {
    var e;
    return ((e = this._config) == null ? void 0 : e.line_width) || st;
  }
  get _entityLineWidth() {
    var e;
    return ((e = this._config) == null ? void 0 : e.entity_line_width) || this._lineWidth;
  }
  get _numColumn() {
    var e;
    return ((e = this._config) == null ? void 0 : e.num_detail_columns) || Gt;
  }
  get _hideInactiveFlows() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.hide_inactive_flows) === void 0 ? De : (t = this._config) == null ? void 0 : t.hide_inactive_flows;
  }
  get _colourIconsAndText() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.colour_icons_and_text) === void 0 ? $e : (t = this._config) == null ? void 0 : t.colour_icons_and_text;
  }
  get _solarEnabled() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.solar_enabled) === void 0 ? Me : (t = this._config) == null ? void 0 : t.solar_enabled;
  }
  get _batteryEnabled() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.battery_enabled) === void 0 ? !0 : (t = this._config) == null ? void 0 : t.battery_enabled;
  }
  getFormatedState(e) {
    return `${e == null ? void 0 : e.state}${(e == null ? void 0 : e.attributes.unit_of_measurement) || ""}`;
  }
  getStateAsWatts(e) {
    if ((e == null ? void 0 : e.state) === void 0)
      return 0;
    if (e.attributes.unit_of_measurement === void 0)
      return parseInt(e == null ? void 0 : e.state, 10);
    switch (e.attributes.unit_of_measurement.toLowerCase()) {
      case "w":
        return parseInt(e == null ? void 0 : e.state, 10);
      case "kw":
        return parseInt(e == null ? void 0 : e.state, 10) * 1e3;
      case "wh":
        return parseInt(e == null ? void 0 : e.state, 10) / 3600;
      case "kwh":
        return parseInt(e == null ? void 0 : e.state, 10) * 1e3 / 3600;
      default:
        return parseInt(e == null ? void 0 : e.state, 10);
    }
  }
  _dotEasingFor(e) {
    switch (e) {
      case "solar":
        return this._solarDotEasing;
      case "battery":
        return this._batteryDotEasing;
      case "grid":
        return this._gridDotEasing;
      case "house":
        return this._houseDotEasing;
      case "eps":
        return this._epsDotEasing;
      case "custom1":
        return this._custom1DotEasing;
      case "custom2":
        return this._custom2DotEasing;
      default:
        return b.Linear;
    }
  }
  getIconFor(e, t = void 0) {
    var s, r, o, a, n, c, h;
    let i;
    switch (e) {
      case "solar":
        return ((s = this._config) == null ? void 0 : s.solar_icon) || Ne;
      case "battery":
        if (i = ((r = this._config) == null ? void 0 : r.battery_icon) || Ct, i === Ct && t !== void 0) {
          const d = this.getTotalFor("battery", m.In), p = this.getTotalFor("battery", m.Out);
          d && p && d.total > p.total && (i = i + "-charging");
          const v = Math.ceil(t / 10) * 10;
          v < 100 && (i = i + "-" + v.toString());
        }
        return i;
      case "grid":
        return ((o = this._config) == null ? void 0 : o.grid_icon) || Le;
      case "house":
        return ((a = this._config) == null ? void 0 : a.house_icon) || Ie;
      case "eps":
        return ((n = this._config) == null ? void 0 : n.eps_icon) || Te;
      case "custom1":
        return ((c = this._config) == null ? void 0 : c.custom1_icon) || we;
      case "custom2":
        return ((h = this._config) == null ? void 0 : h.custom2_icon) || Ee;
      default:
        return "";
    }
  }
  extractInvertorName(e) {
    const t = { prefix: "", suffix: "" }, i = /sensor\.([\w]+)_invertor_serial_number/g.exec(e);
    i && (t.prefix = i[1]);
    const s = /sensor\.[\w]+_invertor_serial_number_(\d+)/g.exec(e);
    return s && (t.suffix = "_" + s[1]), t.suffix === "" && t.prefix === "" ? void 0 : t;
  }
  getDemoPowerForFlow(e, t) {
    var s, r;
    let i;
    if (t === "custom1" ? i = i = this.hass.states[(s = this._config) == null ? void 0 : s.custom1_sensor] : t === "custom2" ? i = i = this.hass.states[(r = this._config) == null ? void 0 : r.custom2_sensor] : i = this.hass.states[`sensor.${this._inverterName[0].prefix}_${e}_to_${t}${this._inverterName[0].suffix}`], i !== void 0)
      return e === "grid" && t === "house" ? 0 : e === "solar" && t === "house" ? 870 : e === "solar" && t === "battery" ? 3600 : e === "battery" && t === "house" || e === "battery" && t === "grid" || e === "grid" && t === "battery" ? 0 : e === "solar" && t === "grid" ? 567 : 0;
  }
  getCleanPowerForFlow(e, t) {
    var i;
    if (!(!this._batteryEnabled && (e === "battery" || t === "battery")) && !(!this._solarEnabled && (e === "solar" || t === "solar")) && !(!this._epsEnabled && (e === "eps" || t === "eps")) && !(!this._custom1Enabled && (e === "custom1" || t === "custom1")) && !(!this._custom2Enabled && (e === "custom2" || t === "custom2")))
      return (i = this._config) != null && i.demo_mode ? this.getDemoPowerForFlow(e, t) : t === "custom1" ? this._custom1Total ? this.cleanSensorData(this._custom1Total.total) : void 0 : t === "custom2" ? this._custom2Total ? this.cleanSensorData(this._custom2Total.total) : void 0 : t === "eps" ? this._epsTotal ? this.cleanSensorData(this._epsTotal.total) : void 0 : this._inverterName.reduce((s, r) => {
        const o = this.hass.states[`sensor.${r.prefix}_${e}_to_${t}${r.suffix}`];
        return o !== void 0 && (s += this.cleanSensorData(parseFloat(o == null ? void 0 : o.state))), s;
      }, 0);
  }
  cleanSensorData(e) {
    return e < this._powerMargin ? 0 : e;
  }
  getTotalFor(e, t) {
    switch (e) {
      case "eps":
        return this._epsTotal;
      case "custom1":
        return this._custom1Total;
      case "custom2":
        return this._custom2Total;
      default:
        return this._activeFlows.reduce((i, s) => {
          const r = t === m.In ? s.to === e : s.from === e, o = this.getCleanPowerForFlow(s.from, s.to);
          return r && o !== void 0 && (i === void 0 && (i = { total: 0, parts: [] }), i.parts.push({ type: s.from, to: s.to, value: o }), i.total += o), i;
        }, void 0);
    }
  }
  setEntitySize(e) {
    setTimeout(() => {
      this._width = e, this.style.setProperty("--gtpc-size", this._width / this._entitySize + "px"), this.requestUpdate();
    }, 0);
  }
  connectedCallback() {
    super.connectedCallback(), this._resizeObserver = new ResizeObserver(() => {
      var t;
      const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".gtpc-content");
      e && e.clientWidth != this._width && this.setEntitySize(e.clientWidth);
    }), this._resizeObserver.observe(this), this.style.display = "block", window.requestAnimationFrame((e) => {
      this._animate = !0, this.animateFlows(e);
    });
  }
  animateFlows(e) {
    const t = e - this._previousTimeStamp;
    this._activeFlows.forEach((i) => {
      this.advanceFlowDot(t, i.from, i.to, i.direction);
    }), this._previousTimeStamp = e, this._animate && window.requestAnimationFrame((i) => {
      this.animateFlows(i);
    });
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._resizeObserver) == null || e.unobserve(this), this._animate = !1;
  }
  calculateDotPosition(e, t, i, s) {
    const r = 75e-4 * i, o = e * r, a = t + o / 100;
    if (a >= 1)
      return 0;
    let n;
    const c = a;
    switch (s) {
      case b.EaseIn:
        n = c * c * c;
        break;
      case b.EaseOut:
        n = 1 - (1 - c) ** 3;
        break;
      case b.EaseInOut:
        c < 0.5 ? n = 4 * c ** 3 : n = 1 - (-2 * c + 2) ** 3 / 2;
        break;
      case b.Linear:
      default:
        n = c;
        break;
    }
    return n;
  }
  advanceFlowDot(e, t, i, s) {
    var c;
    const r = (c = this.shadowRoot) == null ? void 0 : c.querySelector(`.gtpc-${t}-to-${i}-flow`);
    if (!r)
      return;
    const o = r.querySelector("path"), a = r.querySelector("circle"), n = this.getCleanPowerForFlow(t, i);
    if (n !== void 0)
      try {
        const h = parseFloat(r.getAttribute("data-pos") || "0");
        r.setAttribute(
          "data-pos",
          this.calculateDotPosition(e, h, n / 1e3 * this._dotSpeed, b.Linear).toString()
        );
        let d = this.calculateDotPosition(
          e,
          h,
          n / 1e3 * this._dotSpeed,
          this._dotEasingFor(t)
        );
        s === m.Out && (d = 1 - d), a.setAttribute("visibility", n ? "visible" : "hidden");
        const p = o.getTotalLength(), v = o.getPointAtLength(p * d);
        a.setAttributeNS(null, "cx", v.x.toString()), a.setAttributeNS(null, "cy", v.y.toString()), a.setAttributeNS(null, "r", (this._dotSize / 4).toString()), r.setAttribute("data-power", n.toString());
      } catch (h) {
        console.error(h);
      }
  }
  render() {
    var o;
    const e = [
      {
        type: "eps",
        linePos: 90,
        icon: this.getIconFor("eps"),
        name: "EPS",
        out: this.getTotalFor("eps", m.Out)
      },
      {
        type: "custom1",
        linePos: 180,
        icon: this.getIconFor("custom1"),
        name: this._custom1Name,
        extra: this._custom1Extra,
        out: this.getTotalFor("custom1", m.Out)
      },
      {
        type: "custom2",
        linePos: 0,
        icon: this.getIconFor("custom2"),
        name: this._custom2Name,
        extra: this._custom2Extra,
        out: this.getTotalFor("custom2", m.Out)
      },
      {
        type: "solar",
        linePos: 180,
        icon: this.getIconFor("solar"),
        name: "Solar",
        out: this.getTotalFor("solar", m.Out)
      },
      {
        type: "house",
        linePos: 270,
        icon: this.getIconFor("house"),
        name: "House",
        in: this.getTotalFor("house", m.In)
      },
      {
        type: "grid",
        linePos: 90,
        icon: this.getIconFor("grid"),
        name: "Grid",
        out: this.getTotalFor("grid", m.In),
        in: this.getTotalFor("grid", m.Out)
      },
      {
        type: "battery",
        linePos: 0,
        icon: this.getIconFor("battery", this._batterySoc),
        name: "Battery",
        extra: this._batterySoc !== void 0 ? `${this._batterySoc}${Pi}` : void 0,
        out: this.getTotalFor("battery", m.In),
        in: this.getTotalFor("battery", m.Out)
      }
    ].filter((a) => a.in !== void 0 || a.out !== void 0), t = this._activeFlows.map((a) => ({
      from: a.from,
      to: a.to,
      value: this.getCleanPowerForFlow(a.from, a.to)
    })).filter((a) => a.value !== void 0);
    let i = _``, s = "gtpc-content";
    switch (this._epsEnabled && (s += " gtpc-eps"), this._custom1Enabled && (s += " gtpc-custom1"), this._custom2Enabled && (s += " gtpc-custom2"), this._entityLayout) {
      case S.Cross:
        i = _`<givtcp-power-flow-card-layout-cross
					class="${s}"
					.flowData=${e}
					.flows=${this._activeFlows}
					@entity-details=${(a) => this.entityDetails(a)}
					.entityLineWidth=${this._entityLineWidth}
					.lineGap=${this._lineGap}
					.cornerRadius=${this._cornerRadius}
					.entitySize=${this._entitySize}
				/>`;
        break;
      case S.Square:
        i = _`<givtcp-power-flow-card-layout-square
					class="${s}"
					.flowData=${e}
					.flows=${this._activeFlows}
					@entity-details=${(a) => this.entityDetails(a)}
					.entityLineWidth=${this._entityLineWidth}
					.lineGap=${this._lineGap}
					.lineStyle=${this._lineStyle}
					.entitySize=${this._entitySize}
				/>`;
        break;
      case S.Circle:
        i = _`<givtcp-power-flow-card-layout-circle
					class="${s}"
					.flowData=${e}
					.flows=${this._activeFlows}
					@entity-details=${(a) => this.entityDetails(a)}
					.entityLineWidth=${this._entityLineWidth}
					.centreEntity=${this._centreEntity}
					.circleSize=${this._circleSize}
					.entitySize=${this._entitySize}
				/>`;
        break;
      case S.List:
        i = _`<givtcp-power-flow-card-layout-list
					class="${s}"
					.flowData=${e}
					.flows=${this._activeFlows}
					.flowPowers=${t}
					@entity-details=${(a) => this.entityDetails(a)}
					.entityLineWidth=${this._entityLineWidth}
					.entitySize=${this._entitySize}
				/>`;
        break;
      default:
        return _``;
    }
    const r = _`<givtcp-power-flow-card-details .entities=${this._detailEntities} />`;
    return _`<ha-card header="${(o = this._config) == null ? void 0 : o.name}">
			${this._width > 0 ? _`<div class="card-content">${i}${r}</div>` : _`<div class="card-content"><div class="${s}" /></div>`}
		</ha-card>`;
  }
  entityDetails(e) {
    var t, i;
    switch (e.stopPropagation(), e.detail.type) {
      case "grid":
        P(this, "hass-more-info", {
          entityId: `sensor.${this._inverterName[0].prefix}_grid_power${this._inverterName[0].suffix}`
        });
        break;
      case "solar":
        P(this, "hass-more-info", {
          entityId: `sensor.${this._inverterName[0].prefix}_pv_power${this._inverterName[0].suffix}`
        });
        break;
      case "battery":
        P(this, "hass-more-info", {
          entityId: `sensor.${this._inverterName[0].prefix}_battery_power${this._inverterName[0].suffix}`
        });
        break;
      case "eps":
        P(this, "hass-more-info", {
          entityId: `sensor.${this._inverterName[0].prefix}_eps_power${this._inverterName[0].suffix}`
        });
        break;
      case "custom1":
        P(this, "hass-more-info", { entityId: (t = this._config) == null ? void 0 : t.custom1_sensor });
        break;
      case "custom2":
        P(this, "hass-more-info", { entityId: (i = this._config) == null ? void 0 : i.custom2_sensor });
        break;
      case "house":
        P(this, "hass-more-info", {
          entityId: `sensor.${this._inverterName[0].prefix}_load_power${this._inverterName[0].suffix}`
        });
        break;
    }
  }
  setConfig(e) {
    var s;
    if (!e.invertor && !e.invertors)
      throw new Error("You need to define at least one invertor entity");
    this._config = ut.migrateConfig(e, !0);
    const t = ut.getDefaults(this._config), i = (s = this.shadowRoot) == null ? void 0 : s.querySelector(".gtpc-content");
    i && this.setEntitySize(i.clientWidth), this.style.setProperty("--gtpc-column-width", `${100 / this._numColumn}%`), this.style.setProperty("--gtpc-line-size", `${this._lineWidth}px`), this.style.setProperty("--gtpc-entity-line-size", `${this._entityLineWidth}px`), this.style.setProperty("--gtpc-inactive-flow-display", this._hideInactiveFlows ? "none" : "block"), this._colourIconsAndText ? this.style.removeProperty("--gtpc-icons-and-text-colour") : this.style.setProperty("--gtpc-icons-and-text-colour", "var(--primary-text-color)"), Se.forEach((r) => {
      let o = this._config[r + "_colour"];
      o || (o = t[r + "_colour"]), typeof o != "string" ? o = `rgb(${o[0]}, ${o[1]}, ${o[2]})` : o = `var(--${o}-color)`, this.style.setProperty(`--gtpc-${r}-color`, o);
    });
  }
  getCardSize() {
    return this.clientHeight > 0 ? Math.ceil(this.clientHeight / 50) : 3;
  }
};
ot.styles = Ye`
		:host {
			--gtpc-click-cursor: pointer;
			--gtpc-grid-color: var(--primary-text-color);
			--gtpc-solar-color: var(--warning-color);
			--gtpc-house-color: var(--info-color);
			--gtpc-battery-color: var(--success-color);
		}
		.gtpc-content,
		.gtpc-layout > svg {
			display: block;
		}
		givtcp-power-flow-card-entity {
			position: absolute;
			width: var(--gtpc-size);
		}
		.gtpc-flow > circle {
			stroke-width: 0;
			stroke: none;
		}
		.gtpc-flow > path {
			fill: none;
			stroke-width: var(--gtpc-line-size);
			vector-effect: non-scaling-stroke;
		}
		.gtpc-flow[data-pos='0'],
		.gtpc-layout-list > div[data-power='0'] {
			display: var(--gtpc-inactive-flow-display);
		}
		.gtpc-flow[data-pos='0'] > circle {
			display: none;
		}

		.gtpc-layout {
			position: relative;
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			margin: 30px 0;
		}
		.gtpc-detail,
		.gtpc-list-row[data-from],
		.gtpc-list-row[data-from],
		.gtpc-list-row[data-from],
		.gtpc-list-row[data-from],
		.gtpc-list-row[data-from],
		.gtpc-list-row[data-from],
		.gtpc-list-row[data-from],
		givtcp-power-flow-card-entity[data-type],
		givtcp-power-flow-card-entity[data-type],
		givtcp-power-flow-card-entity[data-type],
		givtcp-power-flow-card-entity[data-type],
		givtcp-power-flow-card-entity[data-type],
		givtcp-power-flow-card-entity[data-type],
		givtcp-power-flow-card-entity[data-type] {
			cursor: var(--gtpc-click-cursor);
		}
		.gtpc-layout-circle > givtcp-power-flow-card-entity[data-type='custom1'],
		.gtpc-layout-square > givtcp-power-flow-card-entity[data-type='custom1'],
		.gtpc-layout-cross > givtcp-power-flow-card-entity[data-type='custom1'] {
			right: 0;
			top: 0;
		}
		.gtpc-layout-circle > givtcp-power-flow-card-entity[data-type='custom2'],
		.gtpc-layout-square > givtcp-power-flow-card-entity[data-type='custom2'],
		.gtpc-layout-cross > givtcp-power-flow-card-entity[data-type='custom2'] {
			right: 0;
			bottom: 0;
		}
		.gtpc-layout-circle > givtcp-power-flow-card-entity[data-type='eps'],
		.gtpc-layout-square > givtcp-power-flow-card-entity[data-type='eps'],
		.gtpc-layout-cross > givtcp-power-flow-card-entity[data-type='eps'] {
			left: 0;
			bottom: 0;
		}
		.gtpc-layout-circle > givtcp-power-flow-card-entity[data-type='grid'],
		.gtpc-layout-square > givtcp-power-flow-card-entity[data-type='grid'],
		.gtpc-layout-cross > givtcp-power-flow-card-entity[data-type='grid'] {
			left: 0;
			top: calc(50% - var(--gtpc-size) / 2);
		}
		.gtpc-layout-circle > givtcp-power-flow-card-entity[data-type='solar'],
		.gtpc-layout-square > givtcp-power-flow-card-entity[data-type='solar'],
		.gtpc-layout-cross > givtcp-power-flow-card-entity[data-type='solar'] {
			top: 0;
			left: calc(50% - var(--gtpc-size) / 2);
		}
		.gtpc-layout-circle > givtcp-power-flow-card-entity[data-type='house'],
		.gtpc-layout-square > givtcp-power-flow-card-entity[data-type='house'],
		.gtpc-layout-cross > givtcp-power-flow-card-entity[data-type='house'] {
			right: 0;
			top: calc(50% - var(--gtpc-size) / 2);
		}
		.gtpc-layout-circle > givtcp-power-flow-card-entity[data-type='battery'],
		.gtpc-layout-square > givtcp-power-flow-card-entity[data-type='battery'],
		.gtpc-layout-cross > givtcp-power-flow-card-entity[data-type='battery'] {
			bottom: 0;
			left: calc(50% - var(--gtpc-size) / 2);
		}
		.gtpc-no-solar.gtpc-layout-square > givtcp-power-flow-card-entity[data-type='grid'],
		.gtpc-no-solar.gtpc-layout-square > givtcp-power-flow-card-entity[data-type='house'],
		.gtpc-no-solar.gtpc-layout-circle > givtcp-power-flow-card-entity[data-type='grid'],
		.gtpc-no-solar.gtpc-layout-circle > givtcp-power-flow-card-entity[data-type='house'],
		.gtpc-no-solar.gtpc-layout-cross > givtcp-power-flow-card-entity[data-type='grid'],
		.gtpc-no-solar.gtpc-layout-cross > givtcp-power-flow-card-entity[data-type='house'] {
			top: 0;
		}
		.gtpc-no-battery.gtpc-layout-square > givtcp-power-flow-card-entity[data-type='grid'],
		.gtpc-no-battery.gtpc-layout-square > givtcp-power-flow-card-entity[data-type='house'],
		.gtpc-no-battery.gtpc-layout-circle > givtcp-power-flow-card-entity[data-type='grid'],
		.gtpc-no-battery.gtpc-layout-circle > givtcp-power-flow-card-entity[data-type='house'],
		.gtpc-no-battery.gtpc-layout-cross > givtcp-power-flow-card-entity[data-type='grid'],
		.gtpc-no-battery.gtpc-layout-cross > givtcp-power-flow-card-entity[data-type='house'] {
			bottom: 0;
			top: initial;
		}
		.gtpc-line-style-angled.gtpc-layout-square > givtcp-power-flow-card-entity[data-type='eps'] {
			left: var(--gtpc-size);
			bottom: var(--gtpc-size);
		}
		.gtpc-line-style-angled.gtpc-layout-square > givtcp-power-flow-card-entity[data-type='custom1'] {
			right: var(--gtpc-size);
			top: var(--gtpc-size);
		}
		.gtpc-line-style-angled.gtpc-layout-square > givtcp-power-flow-card-entity[data-type='custom2'] {
			right: var(--gtpc-size);
			bottom: var(--gtpc-size);
		}
		givtcp-power-flow-card-layout-square.gtpc-custom2
			.gtpc-line-style-curved.gtpc-layout-square
			.gtpc-entity-name[data-entity-type='house'],
		givtcp-power-flow-card-layout-cross.gtpc-custom2 .gtpc-entity-name[data-entity-type='house'] {
			display: none;
		}
		.gtpc-layout-circle .gtpc-entity-name[data-entity-type='grid'] {
			display: none;
		}
		.gtpc-layout-circle .gtpc-entity-name[data-entity-type='house'] {
			display: none;
		}
		.gtpc-line-style-straight.gtpc-layout-square .gtpc-entity-name[data-entity-type='grid'],
		.gtpc-line-style-angled.gtpc-layout-square .gtpc-entity-name[data-entity-type='grid'] {
			display: none;
		}
		.gtpc-line-style-straight.gtpc-layout-square .gtpc-entity-name[data-entity-type='house'],
		.gtpc-line-style-angled.gtpc-layout-square .gtpc-entity-name[data-entity-type='house'] {
			display: none;
		}

		.gtpc-entity,
		.gtpc-list-entity {
			z-index: 2;
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			justify-content: center;
			align-items: center;
			align-content: normal;
			width: var(--gtpc-size);
			aspect-ratio: 1 / 1;
			box-sizing: border-box;
			overflow: hidden;
		}
		.gtpc-entity > *,
		.gtpc-list-entity > * {
			display: block;
			flex-grow: 0;
			flex-shrink: 1;
			flex-basis: auto;
			align-self: auto;
			order: 0;
			z-index: 2;
			line-height: 1;
		}
		.gtpc-entity > span[data-power='0'] {
			display: none;
		}
		.gtpc-entity.gtpc-entity-single > span > svg {
			display: none;
		}
		.gtpc-entity-extra,
		.gtpc-entity-in,
		.gtpc-entity-out,
		.gtpc-entity-name {
			color: var(--gtpc-icons-and-text-colour, var(--gtpc-color));
			box-sizing: border-box;
			font-size: calc(var(--gtpc-size) * 0.15);
			--mdc-icon-size: calc(var(--gtpc-size) * 0.15);
			line-height: 1;
		}
		.gtpc-entity-in > svg,
		.gtpc-entity-out > svg {
			width: calc(var(--gtpc-size) * 0.1);
			height: calc(var(--gtpc-size) * 0.1);
			stroke-width: calc(var(--gtpc-size) * 0.02);
		}
		.gtpc-entity-icon {
			--mdc-icon-size: calc(var(--gtpc-size) * 0.3);
			color: var(--gtpc-icons-and-text-colour, var(--gtpc-color));
		}
		.gtpc-entity-name {
			text-align: center;
			position: absolute;
			bottom: calc(var(--gtpc-size) * -0.2);
		}
		.gtpc-entity-name[data-entity-type='custom1'],
		.gtpc-entity-name[data-entity-type='solar'] {
			bottom: initial;
			top: calc(var(--gtpc-size) * -0.2);
		}
		givtcp-power-flow-card-entity > svg {
			position: absolute;
			z-index: 0;
		}
		givtcp-power-flow-card-entity > svg > path {
			fill-opacity: 0;
			fill: var(--ha-card-background, var(--card-background-color, white));
			stroke-width: var(--gtpc-entity-line-size);
			vector-effect: non-scaling-stroke;
		}
		.gtpc-list-row {
			margin-bottom: 3px;
		}
		.gtpc-layout.gtpc-layout-list .gtpc-list-entity {
			--mdc-icon-size: calc(var(--gtpc-size) * 0.2);
			font-size: calc(var(--gtpc-size) * 0.15);
		}
		.gtpc-list-flow-value {
			position: absolute;
			top: 75%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		.gtpc-layout.gtpc-layout-list .gtpc-list-entity {
			border-radius: 50%;
			border-style: solid;
			border-width: var(--gtpc-entity-line-size);
			height: calc(var(--gtpc-size) / 2);
			width: calc(var(--gtpc-size) / 2);
			position: absolute;
			top: 0;
			background-color: var(--ha-card-background, var(--card-background-color, white));
		}
		.gtpc-layout.gtpc-layout-list .gtpc-list-entity ha-icon {
			color: var(--gtpc-icons-and-text-colour, var(--gtpc-color));
		}

		.gtpc-layout.gtpc-layout-list .gtpc-list-entity.gtpc-from-entity {
			left: 0;
		}
		.gtpc-layout.gtpc-layout-list .gtpc-list-entity.gtpc-to-entity {
			right: 0;
		}
		.gtpc-layout-list > div {
			position: relative;
		}
		.gtpc-layout-list > div > svg {
		}
		.gtpc-layout.gtpc-layout-list .gtpc-list-entity[data-type='grid'] {
			color: var(--gtpc-grid-color);
			border-color: var(--gtpc-grid-color);
		}
		.gtpc-layout.gtpc-layout-list .gtpc-list-entity[data-type='solar'] {
			color: var(--gtpc-solar-color);
			border-color: var(--gtpc-solar-color);
		}
		.gtpc-layout.gtpc-layout-list .gtpc-list-entity[data-type='house'] {
			color: var(--gtpc-house-color);
			border-color: var(--gtpc-house-color);
		}
		.gtpc-layout.gtpc-layout-list .gtpc-list-entity[data-type='battery'] {
			color: var(--gtpc-battery-color);
			border-color: var(--gtpc-battery-color);
		}
		.gtpc-layout.gtpc-layout-list .gtpc-list-entity[data-type='eps'] {
			color: var(--gtpc-eps-color);
			border-color: var(--gtpc-eps-color);
		}
		.gtpc-layout.gtpc-layout-list .gtpc-list-entity[data-type='custom1'] {
			color: var(--gtpc-custom1-color);
			border-color: var(--gtpc-custom1-color);
		}
		.gtpc-layout.gtpc-layout-list .gtpc-list-entity[data-type='custom2'] {
			color: var(--gtpc-custom2-color);
			border-color: var(--gtpc-custom2-color);
		}
		.gtpc-details {
			display: flex;
			flex-wrap: wrap;
			box-sizing: border-box;
			align-items: center;
			align-content: center;
		}
		.gtpc-detail {
			flex-direction: column;
			align-items: center;
			padding: 1rem 0.5rem;
			box-sizing: border-box;
			width: var(--gtpc-column-width, 33.3%);
			text-align: center;
		}
		.gtpc-detail-title {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			font-size: 0.8rem;
			--mdc-icon-size: 1.1rem;
			color: var(--secondary-text-color);
		}
		.gtpc-detail-state {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			font-size: 1rem;
		}
		.gtpc-detail-title > *:nth-child(1) {
			flex-grow: 1;
		}
	`;
Kt([
  It()
], ot.prototype, "_config", 2);
Kt([
  w()
], ot.prototype, "hass", 2);
ot = Kt([
  I("givtcp-power-flow-card")
], ot);
export {
  ot as GivTCPPowerFlowCard
};
