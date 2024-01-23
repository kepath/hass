var ht, dt;
(function(s) {
  s.language = "language", s.system = "system", s.comma_decimal = "comma_decimal", s.decimal_comma = "decimal_comma", s.space_comma = "space_comma", s.none = "none";
})(ht || (ht = {})), function(s) {
  s.language = "language", s.system = "system", s.am_pm = "12", s.twenty_four = "24";
}(dt || (dt = {}));
var Ct = function(s, t, e, i) {
  i = i || {}, e = e ?? {};
  var r = new Event(t, { bubbles: i.bubbles === void 0 || i.bubbles, cancelable: !!i.cancelable, composed: i.composed === void 0 || i.composed });
  return r.detail = e, s.dispatchEvent(r), r;
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L = window, rt = L.ShadowRoot && (L.ShadyCSS === void 0 || L.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ot = Symbol(), ut = /* @__PURE__ */ new WeakMap();
let At = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== ot)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (rt && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = ut.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && ut.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Jt = (s) => new At(typeof s == "string" ? s : s + "", void 0, ot), Et = (s, ...t) => {
  const e = s.length === 1 ? s[0] : t.reduce((i, r, o) => i + ((a) => {
    if (a._$cssResult$ === !0)
      return a.cssText;
    if (typeof a == "number")
      return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + s[o + 1], s[0]);
  return new At(e, s, ot);
}, Zt = (s, t) => {
  rt ? s.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach((e) => {
    const i = document.createElement("style"), r = L.litNonce;
    r !== void 0 && i.setAttribute("nonce", r), i.textContent = e.cssText, s.appendChild(i);
  });
}, _t = rt ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules)
    e += i.cssText;
  return Jt(e);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var V;
const N = window, pt = N.trustedTypes, Qt = pt ? pt.emptyScript : "", gt = N.reactiveElementPolyfillSupport, X = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? Qt : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, t) {
  let e = s;
  switch (t) {
    case Boolean:
      e = s !== null;
      break;
    case Number:
      e = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(s);
      } catch {
        e = null;
      }
  }
  return e;
} }, xt = (s, t) => t !== s && (t == t || s == s), F = { attribute: !0, type: String, converter: X, reflect: !1, hasChanged: xt }, tt = "finalized";
let C = class extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
  }
  static addInitializer(t) {
    var e;
    this.finalize(), ((e = this.h) !== null && e !== void 0 ? e : this.h = []).push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this.elementProperties.forEach((e, i) => {
      const r = this._$Ep(i, e);
      r !== void 0 && (this._$Ev.set(r, i), t.push(r));
    }), t;
  }
  static createProperty(t, e = F) {
    if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const i = typeof t == "symbol" ? Symbol() : "__" + t, r = this.getPropertyDescriptor(t, i, e);
      r !== void 0 && Object.defineProperty(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    return { get() {
      return this[e];
    }, set(r) {
      const o = this[t];
      this[e] = r, this.requestUpdate(t, o, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || F;
  }
  static finalize() {
    if (this.hasOwnProperty(tt))
      return !1;
    this[tt] = !0;
    const t = Object.getPrototypeOf(this);
    if (t.finalize(), t.h !== void 0 && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const e = this.properties, i = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
      for (const r of i)
        this.createProperty(r, e[r]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const r of i)
        e.unshift(_t(r));
    } else
      t !== void 0 && e.push(_t(t));
    return e;
  }
  static _$Ep(t, e) {
    const i = e.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  u() {
    var t;
    this._$E_ = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach((e) => e(this));
  }
  addController(t) {
    var e, i;
    ((e = this._$ES) !== null && e !== void 0 ? e : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((i = t.hostConnected) === null || i === void 0 || i.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$ES) === null || e === void 0 || e.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t, e) => {
      this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
    });
  }
  createRenderRoot() {
    var t;
    const e = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions);
    return Zt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var t;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var i;
      return (i = e.hostConnected) === null || i === void 0 ? void 0 : i.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var i;
      return (i = e.hostDisconnected) === null || i === void 0 ? void 0 : i.call(e);
    });
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$EO(t, e, i = F) {
    var r;
    const o = this.constructor._$Ep(t, i);
    if (o !== void 0 && i.reflect === !0) {
      const a = (((r = i.converter) === null || r === void 0 ? void 0 : r.toAttribute) !== void 0 ? i.converter : X).toAttribute(e, i.type);
      this._$El = t, a == null ? this.removeAttribute(o) : this.setAttribute(o, a), this._$El = null;
    }
  }
  _$AK(t, e) {
    var i;
    const r = this.constructor, o = r._$Ev.get(t);
    if (o !== void 0 && this._$El !== o) {
      const a = r.getPropertyOptions(o), c = typeof a.converter == "function" ? { fromAttribute: a.converter } : ((i = a.converter) === null || i === void 0 ? void 0 : i.fromAttribute) !== void 0 ? a.converter : X;
      this._$El = o, this[o] = c.fromAttribute(e, a.type), this._$El = null;
    }
  }
  requestUpdate(t, e, i) {
    let r = !0;
    t !== void 0 && (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || xt)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), i.reflect === !0 && this._$El !== t && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t, i))) : r = !1), !this.isUpdatePending && r && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((r, o) => this[o] = r), this._$Ei = void 0);
    let e = !1;
    const i = this._$AL;
    try {
      e = this.shouldUpdate(i), e ? (this.willUpdate(i), (t = this._$ES) === null || t === void 0 || t.forEach((r) => {
        var o;
        return (o = r.hostUpdate) === null || o === void 0 ? void 0 : o.call(r);
      }), this.update(i)) : this._$Ek();
    } catch (r) {
      throw e = !1, this._$Ek(), r;
    }
    e && this._$AE(i);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((i) => {
      var r;
      return (r = i.hostUpdated) === null || r === void 0 ? void 0 : r.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$EC !== void 0 && (this._$EC.forEach((e, i) => this._$EO(i, this[i], e)), this._$EC = void 0), this._$Ek();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
C[tt] = !0, C.elementProperties = /* @__PURE__ */ new Map(), C.elementStyles = [], C.shadowRootOptions = { mode: "open" }, gt == null || gt({ ReactiveElement: C }), ((V = N.reactiveElementVersions) !== null && V !== void 0 ? V : N.reactiveElementVersions = []).push("1.6.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Y;
const K = window, A = K.trustedTypes, ft = A ? A.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, et = "$lit$", m = `lit$${(Math.random() + "").slice(9)}$`, Pt = "?" + m, Xt = `<${Pt}>`, S = document, U = () => S.createComment(""), k = (s) => s === null || typeof s != "object" && typeof s != "function", Rt = Array.isArray, te = (s) => Rt(s) || typeof (s == null ? void 0 : s[Symbol.iterator]) == "function", q = `[ 	
\f\r]`, H = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, vt = /-->/g, yt = />/g, b = RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), mt = /'/g, bt = /"/g, Tt = /^(?:script|style|textarea|title)$/i, ee = (s) => (t, ...e) => ({ _$litType$: s, strings: t, values: e }), u = ee(1), E = Symbol.for("lit-noChange"), g = Symbol.for("lit-nothing"), $t = /* @__PURE__ */ new WeakMap(), $ = S.createTreeWalker(S, 129, null, !1), se = (s, t) => {
  const e = s.length - 1, i = [];
  let r, o = t === 2 ? "<svg>" : "", a = H;
  for (let l = 0; l < e; l++) {
    const n = s[l];
    let _, h, d = -1, p = 0;
    for (; p < n.length && (a.lastIndex = p, h = a.exec(n), h !== null); )
      p = a.lastIndex, a === H ? h[1] === "!--" ? a = vt : h[1] !== void 0 ? a = yt : h[2] !== void 0 ? (Tt.test(h[2]) && (r = RegExp("</" + h[2], "g")), a = b) : h[3] !== void 0 && (a = b) : a === b ? h[0] === ">" ? (a = r ?? H, d = -1) : h[1] === void 0 ? d = -2 : (d = a.lastIndex - h[2].length, _ = h[1], a = h[3] === void 0 ? b : h[3] === '"' ? bt : mt) : a === bt || a === mt ? a = b : a === vt || a === yt ? a = H : (a = b, r = void 0);
    const f = a === b && s[l + 1].startsWith("/>") ? " " : "";
    o += a === H ? n + Xt : d >= 0 ? (i.push(_), n.slice(0, d) + et + n.slice(d) + m + f) : n + m + (d === -2 ? (i.push(void 0), l) : f);
  }
  const c = o + (s[e] || "<?>") + (t === 2 ? "</svg>" : "");
  if (!Array.isArray(s) || !s.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [ft !== void 0 ? ft.createHTML(c) : c, i];
};
class O {
  constructor({ strings: t, _$litType$: e }, i) {
    let r;
    this.parts = [];
    let o = 0, a = 0;
    const c = t.length - 1, l = this.parts, [n, _] = se(t, e);
    if (this.el = O.createElement(n, i), $.currentNode = this.el.content, e === 2) {
      const h = this.el.content, d = h.firstChild;
      d.remove(), h.append(...d.childNodes);
    }
    for (; (r = $.nextNode()) !== null && l.length < c; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) {
          const h = [];
          for (const d of r.getAttributeNames())
            if (d.endsWith(et) || d.startsWith(m)) {
              const p = _[a++];
              if (h.push(d), p !== void 0) {
                const f = r.getAttribute(p.toLowerCase() + et).split(m), y = /([.?@])?(.*)/.exec(p);
                l.push({ type: 1, index: o, name: y[2], strings: f, ctor: y[1] === "." ? re : y[1] === "?" ? ae : y[1] === "@" ? ne : j });
              } else
                l.push({ type: 6, index: o });
            }
          for (const d of h)
            r.removeAttribute(d);
        }
        if (Tt.test(r.tagName)) {
          const h = r.textContent.split(m), d = h.length - 1;
          if (d > 0) {
            r.textContent = A ? A.emptyScript : "";
            for (let p = 0; p < d; p++)
              r.append(h[p], U()), $.nextNode(), l.push({ type: 2, index: ++o });
            r.append(h[d], U());
          }
        }
      } else if (r.nodeType === 8)
        if (r.data === Pt)
          l.push({ type: 2, index: o });
        else {
          let h = -1;
          for (; (h = r.data.indexOf(m, h + 1)) !== -1; )
            l.push({ type: 7, index: o }), h += m.length - 1;
        }
      o++;
    }
  }
  static createElement(t, e) {
    const i = S.createElement("template");
    return i.innerHTML = t, i;
  }
}
function x(s, t, e = s, i) {
  var r, o, a, c;
  if (t === E)
    return t;
  let l = i !== void 0 ? (r = e._$Co) === null || r === void 0 ? void 0 : r[i] : e._$Cl;
  const n = k(t) ? void 0 : t._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== n && ((o = l == null ? void 0 : l._$AO) === null || o === void 0 || o.call(l, !1), n === void 0 ? l = void 0 : (l = new n(s), l._$AT(s, e, i)), i !== void 0 ? ((a = (c = e)._$Co) !== null && a !== void 0 ? a : c._$Co = [])[i] = l : e._$Cl = l), l !== void 0 && (t = x(s, l._$AS(s, t.values), l, i)), t;
}
class ie {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    var e;
    const { el: { content: i }, parts: r } = this._$AD, o = ((e = t == null ? void 0 : t.creationScope) !== null && e !== void 0 ? e : S).importNode(i, !0);
    $.currentNode = o;
    let a = $.nextNode(), c = 0, l = 0, n = r[0];
    for (; n !== void 0; ) {
      if (c === n.index) {
        let _;
        n.type === 2 ? _ = new I(a, a.nextSibling, this, t) : n.type === 1 ? _ = new n.ctor(a, n.name, n.strings, this, t) : n.type === 6 && (_ = new le(a, this, t)), this._$AV.push(_), n = r[++l];
      }
      c !== (n == null ? void 0 : n.index) && (a = $.nextNode(), c++);
    }
    return $.currentNode = S, o;
  }
  v(t) {
    let e = 0;
    for (const i of this._$AV)
      i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class I {
  constructor(t, e, i, r) {
    var o;
    this.type = 2, this._$AH = g, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = r, this._$Cp = (o = r == null ? void 0 : r.isConnected) === null || o === void 0 || o;
  }
  get _$AU() {
    var t, e;
    return (e = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && e !== void 0 ? e : this._$Cp;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = x(this, t, e), k(t) ? t === g || t == null || t === "" ? (this._$AH !== g && this._$AR(), this._$AH = g) : t !== this._$AH && t !== E && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : te(t) ? this.T(t) : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
  }
  _(t) {
    this._$AH !== g && k(this._$AH) ? this._$AA.nextSibling.data = t : this.$(S.createTextNode(t)), this._$AH = t;
  }
  g(t) {
    var e;
    const { values: i, _$litType$: r } = t, o = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = O.createElement(r.h, this.options)), r);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === o)
      this._$AH.v(i);
    else {
      const a = new ie(o, this), c = a.u(this.options);
      a.v(i), this.$(c), this._$AH = a;
    }
  }
  _$AC(t) {
    let e = $t.get(t.strings);
    return e === void 0 && $t.set(t.strings, e = new O(t)), e;
  }
  T(t) {
    Rt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, r = 0;
    for (const o of t)
      r === e.length ? e.push(i = new I(this.k(U()), this.k(U()), this, this.options)) : i = e[r], i._$AI(o), r++;
    r < e.length && (this._$AR(i && i._$AB.nextSibling, r), e.length = r);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for ((i = this._$AP) === null || i === void 0 || i.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const r = t.nextSibling;
      t.remove(), t = r;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cp = t, (e = this._$AP) === null || e === void 0 || e.call(this, t));
  }
}
class j {
  constructor(t, e, i, r, o) {
    this.type = 1, this._$AH = g, this._$AN = void 0, this.element = t, this.name = e, this._$AM = r, this.options = o, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = g;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, i, r) {
    const o = this.strings;
    let a = !1;
    if (o === void 0)
      t = x(this, t, e, 0), a = !k(t) || t !== this._$AH && t !== E, a && (this._$AH = t);
    else {
      const c = t;
      let l, n;
      for (t = o[0], l = 0; l < o.length - 1; l++)
        n = x(this, c[i + l], e, l), n === E && (n = this._$AH[l]), a || (a = !k(n) || n !== this._$AH[l]), n === g ? t = g : t !== g && (t += (n ?? "") + o[l + 1]), this._$AH[l] = n;
    }
    a && !r && this.j(t);
  }
  j(t) {
    t === g ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class re extends j {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === g ? void 0 : t;
  }
}
const oe = A ? A.emptyScript : "";
class ae extends j {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== g ? this.element.setAttribute(this.name, oe) : this.element.removeAttribute(this.name);
  }
}
class ne extends j {
  constructor(t, e, i, r, o) {
    super(t, e, i, r, o), this.type = 5;
  }
  _$AI(t, e = this) {
    var i;
    if ((t = (i = x(this, t, e, 0)) !== null && i !== void 0 ? i : g) === E)
      return;
    const r = this._$AH, o = t === g && r !== g || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, a = t !== g && (r === g || o);
    o && this.element.removeEventListener(this.name, this, r), a && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e, i;
    typeof this._$AH == "function" ? this._$AH.call((i = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && i !== void 0 ? i : this.element, t) : this._$AH.handleEvent(t);
  }
}
class le {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    x(this, t);
  }
}
const wt = K.litHtmlPolyfillSupport;
wt == null || wt(O, I), ((Y = K.litHtmlVersions) !== null && Y !== void 0 ? Y : K.litHtmlVersions = []).push("2.7.4");
const ce = (s, t, e) => {
  var i, r;
  const o = (i = e == null ? void 0 : e.renderBefore) !== null && i !== void 0 ? i : t;
  let a = o._$litPart$;
  if (a === void 0) {
    const c = (r = e == null ? void 0 : e.renderBefore) !== null && r !== void 0 ? r : null;
    o._$litPart$ = a = new I(t.insertBefore(U(), c), c, void 0, e ?? {});
  }
  return a._$AI(s), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var J, Z;
class w extends C {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t, e;
    const i = super.createRenderRoot();
    return (t = (e = this.renderOptions).renderBefore) !== null && t !== void 0 || (e.renderBefore = i.firstChild), i;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ce(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!1);
  }
  render() {
    return E;
  }
}
w.finalized = !0, w._$litElement$ = !0, (J = globalThis.litElementHydrateSupport) === null || J === void 0 || J.call(globalThis, { LitElement: w });
const St = globalThis.litElementPolyfillSupport;
St == null || St({ LitElement: w });
((Z = globalThis.litElementVersions) !== null && Z !== void 0 ? Z : globalThis.litElementVersions = []).push("3.3.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at = (s) => (t) => typeof t == "function" ? ((e, i) => (customElements.define(e, i), i))(s, t) : ((e, i) => {
  const { kind: r, elements: o } = i;
  return { kind: r, elements: o, finisher(a) {
    customElements.define(e, a);
  } };
})(s, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const he = (s, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? { ...t, finisher(e) {
  e.createProperty(t.key, s);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: t.key, initializer() {
  typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
}, finisher(e) {
  e.createProperty(t.key, s);
} }, de = (s, t, e) => {
  t.constructor.createProperty(e, s);
};
function B(s) {
  return (t, e) => e !== void 0 ? de(s, t, e) : he(s, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Ht(s) {
  return B({ ...s, state: !0 });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Q;
((Q = window.HTMLSlotElement) === null || Q === void 0 ? void 0 : Q.prototype.assignedElements) != null;
const Dt = 80, Ut = [0, 69, 23], kt = 60, Ot = [67, 160, 71], Mt = 40, It = [255, 166, 0], Bt = 20, Lt = [219, 68, 55], Wt = [94, 0, 0], Nt = !1;
var D = /* @__PURE__ */ ((s) => (s[s.WH = 0] = "WH", s[s.KWH = 1] = "KWH", s[s.DYNAMIC = 2] = "DYNAMIC", s))(D || {});
const Kt = 2, Gt = 3, zt = "mdi:sleep", jt = "mdi:lightning-bolt", Vt = "mdi:home-battery", Ft = !0, st = !1, it = 100, Yt = !1, qt = !0, v = {
  W: "W",
  KW: "kW",
  WH: "Wh",
  KWH: "kWh"
};
var ue = Object.defineProperty, _e = Object.getOwnPropertyDescriptor, nt = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? _e(t, e) : t, o = s.length - 1, a; o >= 0; o--)
    (a = s[o]) && (r = (i ? a(t, e, r) : a(r)) || r);
  return i && r && ue(t, e, r), r;
};
let G = class extends w {
  constructor() {
    super(...arguments), this._counter = 0;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), clearInterval(this._interval);
  }
  secondsToDuration(s) {
    const t = (o) => o < 10 ? `0${o}` : o, e = Math.floor(s / 3600), i = Math.floor(s % 3600 / 60), r = Math.floor(s % 3600 % 60);
    return e > 0 ? `${e}:${t(i)}:${t(r)}` : i > 0 ? `${i}:${t(r)}` : r > 0 ? "" + r : "0";
  }
  render() {
    return this._counter ? this._counter <= 0 ? u`0` : u`${this.secondsToDuration(this._counter)}` : u`0`;
  }
  updated(s) {
    s.has("secs") && (clearInterval(this._interval), this.secs > 0 ? (this._counter = this.secs, this._countdownInterval()) : this._counter = 0), s.has("_counter") && this._counter && this._counter <= 0 && (clearInterval(this._interval), this._counter = 0);
  }
  _countdownInterval() {
    this._interval = setInterval(() => {
      this._countdown();
    }, 1e3);
  }
  _countdown() {
    this._counter && (this._counter -= 1);
  }
};
nt([
  B()
], G.prototype, "secs", 2);
nt([
  B()
], G.prototype, "_counter", 2);
G = nt([
  at("givtcp-battery-card-countdown")
], G);
class W {
  static getDefaultConfig() {
    return {
      type: "custom:givtcp-battery-card",
      name: "Battery",
      soc_threshold_very_high: Dt,
      soc_threshold_high: kt,
      soc_threshold_medium: Mt,
      soc_threshold_low: Bt,
      soc_threshold_very_high_colour: Ut,
      soc_threshold_high_colour: Ot,
      soc_threshold_medium_colour: It,
      soc_threshold_low_colour: Lt,
      soc_threshold_very_low_colour: Wt,
      display_abs_power: Nt,
      display_type: Kt,
      display_dp: Gt,
      icon_status_idle: zt,
      icon_status_charging: jt,
      icon_status_discharging: Vt,
      display_battery_rates: Ft,
      use_custom_dod: st,
      custom_dod: it,
      calculate_reserve_from_dod: Yt,
      display_custom_dod_stats: qt
    };
  }
  static migrateConfig(t, e) {
    const i = e ? { ...t } : t, r = {
      display_kwh: {
        newKey: "display_type",
        newVal: D.DYNAMIC
      }
    };
    for (const [o, a] of Object.entries(r))
      i[o] && (i[a.newKey] = i[o], a.newKey !== void 0 && (i[a.newKey] = a.newVal), delete i[o]);
    return i;
  }
}
var pe = Object.defineProperty, ge = Object.getOwnPropertyDescriptor, lt = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? ge(t, e) : t, o = s.length - 1, a; o >= 0; o--)
    (a = s[o]) && (r = (i ? a(t, e, r) : a(r)) || r);
  return i && r && pe(t, e, r), r;
};
let M = class extends w {
  constructor() {
    super(...arguments), this._computeLabelCallback = (s) => s.label ? s.label : s.name;
  }
  setConfig(s) {
    this._config = W.migrateConfig(s, !0);
  }
  get _getInvertorList() {
    return this.hass ? Object.keys(this.hass.states).filter((s) => s.includes("invertor_serial_number")) : [];
  }
  get _schema() {
    const s = W.getDefaultConfig();
    return [
      {
        name: "name",
        label: "Name",
        default: s.name,
        selector: {
          text: {}
        }
      },
      {
        name: "entity",
        label: "Invertor",
        selector: {
          entity: {
            multiple: !1,
            include_entities: this._getInvertorList
          }
        }
      },
      {
        name: "soc_threshold_very_high",
        label: "SOC Threshold Very High",
        default: s.soc_threshold_very_high,
        selector: {
          number: {
            min: 0,
            max: 100,
            unit_of_measurement: "%"
          }
        }
      },
      {
        name: "soc_threshold_very_high_colour",
        label: "SOC Very High Colour",
        default: s.soc_threshold_very_high_colour,
        selector: {
          color_rgb: {}
        }
      },
      {
        name: "soc_threshold_high",
        label: "SOC Threshold High",
        default: s.soc_threshold_high,
        selector: {
          number: {
            min: 0,
            max: 100,
            unit_of_measurement: "%"
          }
        }
      },
      {
        name: "soc_threshold_high_colour",
        label: "SOC High Colour",
        default: s.soc_threshold_high_colour,
        selector: {
          color_rgb: {}
        }
      },
      {
        name: "soc_threshold_medium",
        label: "SOC Threshold Medium",
        default: s.soc_threshold_medium,
        selector: {
          number: {
            min: 0,
            max: 100,
            unit_of_measurement: "%"
          }
        }
      },
      {
        name: "soc_threshold_medium_colour",
        label: "SOC Medium Colour",
        default: s.soc_threshold_medium_colour,
        selector: {
          color_rgb: {}
        }
      },
      {
        name: "soc_threshold_low",
        label: "SOC Threshold Low",
        default: s.soc_threshold_low,
        selector: {
          number: {
            min: 0,
            max: 100,
            unit_of_measurement: "%"
          }
        }
      },
      {
        name: "soc_threshold_low_colour",
        label: "SOC Loc Colour",
        default: s.soc_threshold_low_colour,
        selector: {
          color_rgb: {}
        }
      },
      {
        name: "soc_threshold_very_low_colour",
        label: "SOC Very Low Colour",
        default: s.soc_threshold_very_low_colour,
        selector: {
          color_rgb: {}
        }
      },
      {
        name: "display_abs_power",
        label: "Display power usage as absolute value",
        default: s.display_abs_power,
        selector: {
          boolean: {}
        }
      },
      {
        name: "display_type",
        label: "Display type (0: Wh/W | 1: kWh/kW | 2: Dynamic)",
        default: s.display_type,
        selector: {
          number: {
            min: 0,
            max: 2
          }
        }
      },
      {
        name: "display_dp",
        label: "Display number decimal places",
        default: s.display_dp,
        selector: {
          number: {
            min: 1,
            max: 3
          }
        }
      },
      {
        name: "icon_status_charging",
        label: "Status Icon: Charging",
        default: s.icon_status_charging,
        selector: {
          icon: {}
        }
      },
      {
        name: "icon_status_discharging",
        label: "Status Icon: Discharging",
        default: s.icon_status_discharging,
        selector: {
          icon: {}
        }
      },
      {
        name: "icon_status_idle",
        label: "Status Icon: Idle",
        default: s.icon_status_idle,
        selector: {
          icon: {}
        }
      },
      {
        name: "display_battery_rates",
        label: "Display data about battery charge/discharge rates",
        default: s.display_battery_rates,
        selector: {
          boolean: {}
        }
      },
      {
        name: "use_custom_dod",
        label: "Use custom DoD to override GivTCP battery capacity value.",
        default: s.use_custom_dod,
        selector: {
          boolean: {}
        }
      },
      {
        name: "display_custom_dod_stats",
        label: "Display the custom DOD stats",
        default: s.display_custom_dod_stats,
        selector: {
          boolean: {}
        }
      },
      {
        name: "custom_dod",
        label: "Custom DoD as percentage to override GivTCP battery capacity value.",
        default: s.custom_dod,
        selector: {
          number: {
            min: 0,
            max: 100,
            step: "any",
            unit_of_measurement: "%"
          }
        }
      },
      {
        name: "calculate_reserve_from_dod",
        label: "Use custom DoD to calculate the battery reserve value",
        default: s.calculate_reserve_from_dod,
        selector: {
          boolean: {}
        }
      }
    ];
  }
  render() {
    if (!this.hass || !this._config)
      return u``;
    const s = {
      ...W.getDefaultConfig(),
      ...this._config
    };
    return u`
      <ha-form
        .hass=${this.hass}
        .data=${s}
        .schema=${this._schema}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }
  _valueChanged(s) {
    const t = s.detail.value;
    Ct(this, "config-changed", { config: t });
  }
};
M.styles = Et``;
lt([
  B()
], M.prototype, "hass", 2);
lt([
  Ht()
], M.prototype, "_config", 2);
M = lt([
  at("givtcp-battery-card-editor")
], M);
const fe = Et`
  :host {
    --vc-background: var(--ha-card-background, var(--card-background-color, white));
    --vc-primary-text-color: var(--primary-text-color);
    --vc-secondary-text-color: var(--secondary-text-color);
    --vc-icon-color: var(--secondary-text-color);
    --vc-toolbar-background: var(--vc-background);
    --vc-toolbar-text-color: var(--secondary-text-color);
    --vc-toolbar-icon-color: var(--secondary-text-color);
    --vc-divider-color: var(--entities-divider-color, var(--divider-color));
    --vc-spacing: 10px;

    display: flex;
    flex: 1;
    flex-direction: column;
  }

  ha-card {
    flex-direction: column;
    flex: 1;
    position: relative;
    overflow: hidden;
  }

  .preview {
    background: var(--vc-background);
    position: relative;
    text-align: center;
    padding-bottom: 5px;

    &.not-available {
      filter: grayscale(1);
    }
  }

  .fill-gap {
    flex-grow: 1;
  }

  .more-info ha-icon {
    display: flex;
  }

  .status {
    display: flex;
    align-items: center;
    justify-content: center;
    direction: ltr;
  }

  .status-text {
    color: var(--vc-secondary-text-color);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .status-text-small {
    color: var(--vc-secondary-text-color);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 12px;
  }

  .status mwc-circular-progress {
    --mdc-theme-primary: var(--vc-secondary-text-color) !important;
    margin-left: var(--vc-spacing);
  }

  .battery-name {
    text-align: center;
    font-weight: bold;
    color: var(--vc-primary-text-color);
    font-size: 16px;
  }

  .not-available .offline {
    text-align: center;
    color: var(--vc-primary-text-color);
    font-size: 16px;
  }

  .metadata {
    margin: var(--vc-spacing) auto;
  }

  .stats-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: var(--vc-secondary-text-color);
  }

  .stats-col {
    flex: 33%;
    margin-top: auto;
  }

  .stats {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: var(--vc-secondary-text-color);
  }

  .stats-block {
    cursor: pointer;
    margin: var(--vc-spacing) 0px;
    text-align: center;
  }

  .stats-value {
    font-size: 18px;
    color: var(--vc-primary-text-color);
  }

  .battery-icon-wrapper {
    display: flex;
    flex-direction: row;
    vertical-align: middle;
  }

  ha-icon {
    color: var(--vc-icon-color);
  }

  .icon-info {
    display: inline-block;
    vertical-align: middle;
  }

  .icon-title {
    color: var(--vc-primary-text-color);
    display: block;
    vertical-align: middle;
    padding: 0 3px;
    font-size: 45px;
    margin: 3px;
  }

  .icon-subtitle {
    display: block;
    vertical-align: middle;
    padding: 0 3px;
    font-size: 22px;
    margin-top: 25px;
  }

  .icon-subtitle-small {
    display: block;
    vertical-align: middle;
    padding: 0 3px;
    font-size: 18px;
    margin-top: 10px;
  }

  .battery-power-out {
    color: #db4437;
  }

  .battery-power-in {
    color: #43a047;
  }

  .rate-wrapper {
    width: 90%;
  }

  .progress-bar {
    width: 100%;
    padding: 2px;
    border-radius: 2px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, .4);
  }

  .progress-bar-fill {
    display: block;
    height: 10px;
    border-radius: 2px;
  }
  
  .progress-bar-fill-n0 {
    background-color: rgba(0,0,0,0);
  }

  .progress-bar-fill-r10 {
    background-color: #DB4437ff;
  }

  .progress-bar-fill-r20 {
    background-color: #CD3C31ff;
  }

  .progress-bar-fill-r30 {
    background-color: #BF352Bff;
  }

  .progress-bar-fill-r40 {
    background-color: #B12D25ff;
  }

  .progress-bar-fill-r50 {
    background-color: #A3261Fff;
  }

  .progress-bar-fill-r60 {
    background-color: #961E18ff;
  }

  .progress-bar-fill-r70 {
    background-color: #881712ff;
  }

  .progress-bar-fill-r80 {
    background-color: #7A0F0Cff;
  }

  .progress-bar-fill-r90 {
    background-color: #6C0806ff;
  }

  .progress-bar-fill-r100 {
    background-color: #5E0000ff;
  }

  .progress-bar-fill-g10 {
    background-color: #43A047ff;
  }

  .progress-bar-fill-g20 {
    background-color: #3C9642ff;
  }

  .progress-bar-fill-g30 {
    background-color: #348C3Cff;
  }

  .progress-bar-fill-g40 {
    background-color: #2D8237ff;
  }

  .progress-bar-fill-g50 {
    background-color: #257832ff;
  }

  .progress-bar-fill-g60 {
    background-color: #1E6D2Cff;
  }

  .progress-bar-fill-g70 {
    background-color: #166327ff;
  }

  .progress-bar-fill-g80 {
    background-color: #0F5922ff;
  }

  .progress-bar-fill-g90 {
    background-color: #074F1Cff;
  }

  .progress-bar-fill-g100 {
    background-color: #004517ff;
  }

`, ve = "0.2.1";
var ye = Object.defineProperty, me = Object.getOwnPropertyDescriptor, ct = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? me(t, e) : t, o = s.length - 1, a; o >= 0; o--)
    (a = s[o]) && (r = (i ? a(t, e, r) : a(r)) || r);
  return i && r && ye(t, e, r), r;
};
window.customCards = window.customCards || [];
window.customCards.push({
  type: "givtcp-battery-card",
  name: "GivTCP Battery Card",
  description: "A card to display GivTCP battery info"
});
console.info(
  `%c GIVTCP-BATTERY-CARD %c ${ve}`,
  "color: green; font-weight: bold; background: black",
  "color: green; font-weight: bold;"
);
let z = class extends w {
  static async getConfigElement() {
    return document.createElement("givtcp-battery-card-editor");
  }
  static getStubConfig() {
    return {};
  }
  firstUpdated() {
    if (this != null && this.shadowRoot) {
      const s = this.shadowRoot.getElementById("gtpc-battery-detail-battery-power");
      this._attacheEventListener(s);
      const t = this.shadowRoot.getElementById("gtpc-battery-detail-soc-icon");
      this._attacheEventListener(t);
      const e = this.shadowRoot.getElementById("gtpc-battery-detail-soc-text");
      this._attacheEventListener(e);
      const i = this.shadowRoot.getElementById("gtpc-battery-detail-soc-kwh-text");
      this._attacheEventListener(i);
    }
  }
  _attacheEventListener(s) {
    s && s instanceof HTMLElement && s.addEventListener("click", (t) => {
      const e = s.getAttribute("data-entity-id");
      e && (t.stopPropagation(), Ct(this, "hass-more-info", { entityId: e }));
    });
  }
  // https://lit.dev/docs/components/properties/#accessors-custom
  setConfig(s) {
    if (!s)
      throw new Error("Invalid configuration");
    if (!s.entity)
      throw new Error("You need to define an invertor entity");
    this.config = {
      ...W.getDefaultConfig(),
      ...s
    };
  }
  // https://lit.dev/docs/components/lifecycle/#reactive-update-cycle-performing
  shouldUpdate(s) {
    return this.config ? this.customHasConfigOrEntityChanged(this, s) : !1;
  }
  customHasConfigOrEntityChanged(s, t) {
    var i, r;
    if (t.has("config"))
      return !0;
    const e = [
      "soc",
      "battery_power",
      "soc_kwh",
      "discharge_power",
      "charge_power",
      "battery_charge_rate",
      "battery_discharge_rate"
    ];
    if ((i = s.config) != null && i.entity) {
      const o = t.get("hass");
      if (o) {
        let a = !1;
        for (const c of e)
          o.states[`sensor.${this._getSensorPrefix}${c}`] !== ((r = s.hass) == null ? void 0 : r.states[`sensor.${this._getSensorPrefix}${c}`]) && (a = !0);
        return a;
      }
      return !0;
    } else
      return !1;
  }
  getCardSize() {
    return this.clientHeight > 0 ? Math.ceil(this.clientHeight / 50) : 3;
  }
  getDp() {
    let s = parseInt(this.config.display_dp !== void 0 ? this.config.display_dp : Gt, 10);
    return s > 3 && (s = 3), s < 1 && (s = 1), s;
  }
  getPercentageStats(s) {
    var i;
    const t = s.state, e = (i = s.attributes) == null ? void 0 : i.unit_of_measurement;
    return {
      rawState: t,
      uom: e,
      value: parseInt(t, 10),
      kValue: 0,
      display: parseInt(t, 10),
      displayStr: `${parseInt(t, 10)}%`,
      displayUnit: "%"
    };
  }
  getStandardisedUom(s) {
    if (!s)
      return "";
    switch (s.toLowerCase()) {
      case "w":
        return v.W;
      case "wh":
        return v.WH;
      case "kw":
        return v.KW;
      case "kwh":
        return v.KWH;
      default:
        return s;
    }
  }
  isWorWh(s) {
    return s === v.W || s === v.WH;
  }
  isPowerUom(s) {
    return s === v.W || s === v.KW;
  }
  getGivTcpStats(s, t) {
    const e = this.config.display_type !== void 0 ? this.config.display_type : Kt, i = this.config.display_abs_power !== void 0 ? this.config.display_abs_power : Nt, r = this.getDp(), o = this.getStandardisedUom(t), a = this.isWorWh(o) ? parseInt(s, 10) : parseFloat(s), c = this.isWorWh(o) ? a : a * 1e3, l = this.isWorWh(o) ? this.convertToKillo(a, 3) : a, n = this.convertToKillo(c, r), _ = this.isPowerUom(o) ? v.W : v.WH, h = this.isPowerUom(o) ? v.KW : v.KWH;
    let d = 0, p = "", f = "";
    switch (e) {
      case D.WH:
      default:
        d = i ? Math.abs(c) : c, p = `${i ? Math.abs(c) : c} ${_}`, f = _;
        break;
      case D.KWH:
        d = i ? Math.abs(n) : n, p = `${i ? Math.abs(n) : n} ${h}`, f = h;
        break;
      case D.DYNAMIC:
        d = Math.abs(c) >= 1e3 ? i ? Math.abs(n) : n : i ? Math.abs(c) : c, p = Math.abs(c) >= 1e3 ? `${i ? Math.abs(n) : n} ${h}` : `${i ? Math.abs(c) : c} ${_}`, f = Math.abs(c) >= 1e3 ? h : _;
        break;
    }
    return {
      rawState: s,
      uom: o,
      value: c,
      kValue: l,
      display: d,
      displayStr: p,
      displayUnit: f
    };
  }
  calculateStats() {
    var p, f, y, P, R, T;
    const s = this.config.use_custom_dod !== void 0 ? this.config.use_custom_dod : st, t = this.config.custom_dod !== void 0 ? this.config.custom_dod : it, e = this.config.calculate_reserve_from_dod !== void 0 ? this.config.calculate_reserve_from_dod : Yt, i = {};
    i.socPercent = this.getPercentageStats(this._getSocEntity), i.batteryPowerReservePercent = this.getPercentageStats(this._getBatteryPowerReserve), i.batteryPower = this.getGivTcpStats(this._getBatteryPowerEntity.state, (p = this._getBatteryPowerEntity.attributes) == null ? void 0 : p.unit_of_measurement), i.dischargePower = this.getGivTcpStats(this._getDischargePowerEntity.state, (f = this._getDischargePowerEntity.attributes) == null ? void 0 : f.unit_of_measurement), i.chargePower = this.getGivTcpStats(this._getChargePowerEntity.state, (y = this._getChargePowerEntity.attributes) == null ? void 0 : y.unit_of_measurement), i.chargeRate = this.getGivTcpStats(this._getBatteryChargeRate.state, (P = this._getBatteryChargeRate.attributes) == null ? void 0 : P.unit_of_measurement), i.dischargeRate = this.getGivTcpStats(this._getBatteryDischargeRate.state, (R = this._getBatteryDischargeRate.attributes) == null ? void 0 : R.unit_of_measurement), i.batteryCapacity = this.getGivTcpStats(this._getBatteryCapacityKwhEntity.state, v.KWH), i.socEnergy = this.getGivTcpStats(this._getSocKwhEntity.state, (T = this._getSocKwhEntity.attributes) == null ? void 0 : T.unit_of_measurement);
    let r = s ? Math.abs(parseFloat(t)) / 100 : 1;
    r > 1 && (r = 1);
    const o = i.socPercent.value / 100, a = Math.round(i.batteryCapacity.value * r);
    i.usableBatteryCapacity = this.getGivTcpStats(a.toString(), v.WH);
    const c = Math.round(a * o);
    i.calculatedSocEnergy = this.getGivTcpStats(c.toString(), v.WH);
    let l = Math.round(i.batteryCapacity.value * (i.batteryPowerReservePercent.value / 100));
    e && (l = Math.round(a * (i.batteryPowerReservePercent.value / 100))), i.batteryPowerReserveEnergy = this.getGivTcpStats(l.toString(), v.WH);
    let n = 0, _ = 0, h = 0, d = 0;
    i.batteryPower.value > 0 && (h = i.dischargePower.value, d = i.dischargeRate.value), i.batteryPower.value < 0 && (h = i.chargePower.value, d = i.chargeRate.value), h > 0 && d > 0 && (n = h / d * 100), _ = this.roundPercentage(n, n < 0.1 ? 2 : 1), i.batteryUsageRatePercent = {
      rawState: n.toString(),
      uom: "%",
      value: n,
      kValue: n,
      display: _ > 100 ? 100 : _,
      displayStr: `${_ > 100 ? 100 : _}%`,
      displayUnit: "%"
    }, this.calculatedStates = i;
  }
  renderReserveAndCapacity() {
    const s = this.config.use_custom_dod !== void 0 ? this.config.use_custom_dod : st, t = this.config.custom_dod !== void 0 ? this.config.custom_dod : it, e = this.config.display_custom_dod_stats !== void 0 ? this.config.display_custom_dod_stats : qt;
    let i = u``, r = "";
    return s && e && (r = "Usable", i = u`
        <div class="status">
          <span class="status-text-small"> DoD: ${t}% | Actual Capacity: ${this.calculatedStates.batteryCapacity.displayStr}</span>
        </div>`), u`
      <div>
        <div class="status">
          <span class="status-text"> ${r} Capacity: ${this.calculatedStates.usableBatteryCapacity.displayStr} | Reserve: ${this.calculatedStates.batteryPowerReserveEnergy.displayStr} (${this.calculatedStates.batteryPowerReservePercent.displayStr})</span>
        </div>
        ${i}
      </div>
    `;
  }
  renderRates() {
    const s = u`
        <div class="status">
          <span class="status-text status-text-small">Max. Charge Rate: ${this.calculatedStates.chargeRate.displayStr} | Max. Discharge Rate: ${this.calculatedStates.dischargeRate.displayStr}</span>
        </div>
      `, e = `progress-bar-fill-${this.calculatedStates.batteryPower.value > 0 ? "r" : "g"}${Math.ceil(this.calculatedStates.batteryUsageRatePercent.value / 10) * 10}`;
    return u`
      <div>
        <div class="status">
          <span class="status-text status-text-small">${this._getBatteryStatus} @ ${this.calculatedStates.batteryUsageRatePercent.displayStr} max. rate</span>
        </div>
        <div class="status">
          <div class="rate-wrapper">
            <div class="progress-bar">
              <span class="progress-bar-fill ${e}" style="width: ${this.calculatedStates.batteryUsageRatePercent.displayStr};"></span>
            </div>
          </div>
        </div>
        ${s}
      </div>
    `;
  }
  renderPowerUsage() {
    let s = "", t = u``;
    return this.calculatedStates.batteryPower.value > 0 && (s = "battery-power-out", t = u`<ha-icon icon="mdi:export"></ha-icon>`), this.calculatedStates.batteryPower.value < 0 && (s = "battery-power-in", t = u`<ha-icon icon="mdi:import"></ha-icon>`), u`
      <div 
          class="icon-subtitle-small"
          id="gtpc-battery-detail-battery-power"
          data-entity-id="${`sensor.${this._getSensorPrefix}battery_power`}"
      >
        ${t}
        <span class="${s}">
          ${this.calculatedStates.batteryPower.display} 
        </span>
        ${this.calculatedStates.batteryPower.displayUnit}
      </div>
    `;
  }
  renderStats() {
    const s = [], t = this.calculatedStates.batteryPower.value, e = u`<ha-icon icon="mdi:timer-sand" style="--mdc-icon-size: 17px;"></ha-icon>`, i = u`<ha-icon icon="mdi:clock-outline" style="--mdc-icon-size: 17px;"></ha-icon>`;
    let r = u`${e} No load`, o = 0, a = u`${i} No Load`, c = Math.round(Date.now() / 1e3);
    t > 0 && (r = u`${e} until ${this.calculatedStates.batteryPowerReservePercent.displayStr}`, o = this._getEstimatedTimeLeft, a = u`${i} at ${this.calculatedStates.batteryPowerReservePercent.displayStr}`, c = this._getEstimatedTimeAtReserve), t < 0 && (r = u`${e} until 100%`, o = this._getEstimatedChargeTime, a = u`${i} at 100%`, c = this._getEstimatedTimeAtFull);
    let l = u`--:--:--`;
    t !== 0 && (l = u`
        <givtcp-battery-card-countdown 
            secs=${o}
        ></givtcp-battery-card-countdown>
      `);
    const n = u`
      <div class="stats-block">
        <span class="stats-value"> ${l} </span>
        <div class="stats-subtitle">${r}</div>
      </div>
    `;
    s.push(n);
    let _ = "--:--";
    if (t !== 0) {
      const d = new Date(c * 1e3), p = d.toLocaleString(
        "en-GB",
        {
          hour: "numeric",
          minute: "numeric",
          hour12: !1
        }
      );
      _ = `${p}`, o > 86400 && (_ = `${d.toLocaleString(
        "en-GB",
        {
          day: "numeric",
          month: "numeric"
        }
      )} ${p}`);
    }
    const h = u`
      <div class="stats-block">
        <span class="stats-value">${_}</span>
        <div class="stats-subtitle">${a}</div>
      </div>
    `;
    return s.push(h), s;
  }
  renderNameAndStatus() {
    const s = this._getBatteryStatus.toUpperCase();
    return u` <div class="battery-name">${this.config.name || "Battery"} | ${s}</div> `;
  }
  getBatteryIcon() {
    const s = this.calculatedStates.socPercent.value, t = "";
    if (s === 100)
      return "mdi:battery";
    if (s < 10)
      return `mdi:battery${t}-outline`;
    const e = Math.floor(s / 10) * 10;
    return `mdi:battery${t}-${e}`;
  }
  getBatteryStatusIcon() {
    var i, r, o;
    const s = (i = this.config) != null && i.icon_status_charging ? this.config.icon_status_charging : jt, t = (r = this.config) != null && r.icon_status_discharging ? this.config.icon_status_discharging : Vt, e = (o = this.config) != null && o.icon_status_idle ? this.config.icon_status_idle : zt;
    switch (this._getBatteryStatus) {
      default:
        return "";
      case "charging":
        return s;
      case "discharging":
        return t;
      case "idle":
        return e;
    }
  }
  getBatteryColour() {
    var _, h, d, p, f, y, P, R, T;
    const s = this.calculatedStates.socPercent.value, t = (_ = this.config) != null && _.soc_threshold_very_high ? this.config.soc_threshold_very_high : Dt, e = (h = this.config) != null && h.soc_threshold_high ? this.config.soc_threshold_high : kt, i = (d = this.config) != null && d.soc_threshold_medium ? this.config.soc_threshold_medium : Mt, r = (p = this.config) != null && p.soc_threshold_low ? this.config.soc_threshold_low : Bt, o = (f = this.config) != null && f.soc_threshold_very_high_colour ? this.config.soc_threshold_very_high_colour : Ut, a = (y = this.config) != null && y.soc_threshold_high_colour ? this.config.soc_threshold_high_colour : Ot, c = (P = this.config) != null && P.soc_threshold_medium_colour ? this.config.soc_threshold_medium_colour : It, l = (R = this.config) != null && R.soc_threshold_low_colour ? this.config.soc_threshold_low_colour : Lt, n = (T = this.config) != null && T.soc_threshold_very_low_colour ? this.config.soc_threshold_very_low_colour : Wt;
    return s >= t ? `${o[0]}, ${o[1]}, ${o[2]}` : s >= e ? `${a[0]}, ${a[1]}, ${a[2]}` : s >= i ? `${c[0]}, ${c[1]}, ${c[2]}` : s >= r ? `${l[0]}, ${l[1]}, ${l[2]}` : `${n[0]}, ${n[1]}, ${n[2]}`;
  }
  convertToKillo(s, t) {
    const e = 10 ** t;
    if (s !== 0) {
      const i = s / 1e3;
      return Math.round((i + Number.EPSILON) * e) / e;
    }
    return 0;
  }
  roundPercentage(s, t) {
    const e = 10 ** t;
    return s !== 0 ? Math.round((s + Number.EPSILON) * e) / e : 0;
  }
  // https://lit.dev/docs/components/rendering/
  render() {
    var o;
    if (!((o = this.config) != null && o.entity))
      return u``;
    let s = u``;
    const t = this.config.display_battery_rates !== void 0 ? this.config.display_battery_rates : Ft;
    this.calculateStats();
    const e = this.getBatteryIcon(), i = this.getBatteryStatusIcon(), r = this.getBatteryColour();
    return t && (s = u`
        <div class="metadata">
          ${this.renderRates()}
        </div>
      `), u`
      <ha-card>
        <div class="preview">
          <div class="metadata">
            ${this.renderNameAndStatus()}
            ${this.renderReserveAndCapacity()}
          </div>

          <div class="stats-wrapper">
            <div
                data-entity-id="${`sensor.${this._getSensorPrefix}soc`}"
                id="gtpc-battery-detail-soc-icon"
                class="stats-col"
            >
              <div class="battery-icon-wrapper">
                <div style="margin: auto; width: 15px;">
                </div>
                <div style="margin: auto;">
                  <ha-icon
                      icon="${i}"
                      style="--mdc-icon-size: 45px;"
                  ></ha-icon>
                </div>
                <div style="margin: auto;">
                  <ha-icon
                      icon="${e}"
                      style="color:rgb(${r});--mdc-icon-size: 100px;"
                  ></ha-icon>
                </div>
              </div>
              
            </div>
            
            <div class="stats-col">
              <span class="icon-info">
                <span 
                    class="icon-title"
                    data-entity-id="${`sensor.${this._getSensorPrefix}soc`}"
                    id="gtpc-battery-detail-soc-text"
                > 
                  ${this.calculatedStates.socPercent.displayStr} 
                </span>
                <span 
                    class="icon-subtitle"
                    data-entity-id="${`sensor.${this._getSensorPrefix}soc_kwh`}"
                    id="gtpc-battery-detail-soc-kwh-text"
                > 
                  ${this.calculatedStates.calculatedSocEnergy.displayStr} 
                </span>
                  ${this.renderPowerUsage()}
              </span>
            </div>

            <div class="stats-col">
              <div class="stats">
                ${this.renderStats()}
              </div>
            </div>
          </div>

          ${s}
          
        </div>
      </ha-card>
    `;
  }
  get _getSensorPrefix() {
    let s = "", t = "";
    const e = /sensor\.([\w]+)_invertor_serial_number/g.exec(this.config.entity);
    e && (s = e[1]);
    const i = /sensor\.[\w]+_invertor_serial_number_(\d+)/g.exec(this.config.entity);
    return i && (t = "_" + i[1]), `${s}_${t}`;
  }
  get _getSocEntity() {
    return this.hass.states[`sensor.${this._getSensorPrefix}soc`];
  }
  get _getBatteryPowerEntity() {
    return this.hass.states[`sensor.${this._getSensorPrefix}battery_power`];
  }
  get _getSocKwhEntity() {
    return this.hass.states[`sensor.${this._getSensorPrefix}soc_kwh`];
  }
  get _getDischargePowerEntity() {
    return this.hass.states[`sensor.${this._getSensorPrefix}discharge_power`];
  }
  get _getChargePowerEntity() {
    return this.hass.states[`sensor.${this._getSensorPrefix}charge_power`];
  }
  get _getBatteryCapacityKwhEntity() {
    return this.hass.states[`sensor.${this._getSensorPrefix}battery_capacity_kwh`];
  }
  get _getBatteryPowerReserve() {
    return this.hass.states[`number.${this._getSensorPrefix}battery_power_reserve`];
  }
  get _getBatteryChargeRate() {
    return this.hass.states[`number.${this._getSensorPrefix}battery_charge_rate`];
  }
  get _getBatteryDischargeRate() {
    return this.hass.states[`number.${this._getSensorPrefix}battery_discharge_rate`];
  }
  get _getBatteryStatus() {
    const s = parseInt(this._getBatteryPowerEntity.state, 10);
    let t = "";
    return s > 0 ? t = "discharging" : s < 0 ? t = "charging" : t = "idle", t;
  }
  get _getEstimatedTimeLeft() {
    let s = 0;
    const t = this.calculatedStates.calculatedSocEnergy.value, e = this.calculatedStates.usableBatteryCapacity.value, i = this.calculatedStates.batteryPowerReservePercent.value / 100, r = this.calculatedStates.dischargePower.value, o = e * i, a = t - o;
    if (a > 0 && r > 0) {
      const c = a / r;
      s = Math.floor(c * 3600);
    }
    return s;
  }
  get _getEstimatedChargeTime() {
    let s = 0;
    const t = this.calculatedStates.chargePower.value, e = this.calculatedStates.calculatedSocEnergy.value, i = this.calculatedStates.usableBatteryCapacity.value;
    if (t > 0) {
      const o = (i - e) / t;
      s = Math.floor(o * 3600);
    }
    return s;
  }
  get _getEstimatedTimeAtReserve() {
    return Math.round(Date.now() / 1e3) + this._getEstimatedTimeLeft;
  }
  get _getEstimatedTimeAtFull() {
    return Math.round(Date.now() / 1e3) + this._getEstimatedChargeTime;
  }
  // https://lit.dev/docs/components/styles/
  static get styles() {
    return fe;
  }
};
ct([
  B()
], z.prototype, "hass", 2);
ct([
  Ht()
], z.prototype, "config", 2);
z = ct([
  at("givtcp-battery-card")
], z);
export {
  z as GivTCPBatteryCard
};
