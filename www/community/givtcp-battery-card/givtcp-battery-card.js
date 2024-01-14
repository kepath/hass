var lt, ct;
(function(s) {
  s.language = "language", s.system = "system", s.comma_decimal = "comma_decimal", s.decimal_comma = "decimal_comma", s.space_comma = "space_comma", s.none = "none";
})(lt || (lt = {})), function(s) {
  s.language = "language", s.system = "system", s.am_pm = "12", s.twenty_four = "24";
}(ct || (ct = {}));
var wt = function(s, t, e, i) {
  i = i || {}, e = e ?? {};
  var o = new Event(t, { bubbles: i.bubbles === void 0 || i.bubbles, cancelable: !!i.cancelable, composed: i.composed === void 0 || i.composed });
  return o.detail = e, s.dispatchEvent(o), o;
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const D = window, X = D.ShadowRoot && (D.ShadyCSS === void 0 || D.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, tt = Symbol(), ht = /* @__PURE__ */ new WeakMap();
let Ct = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== tt)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (X && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = ht.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && ht.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Kt = (s) => new Ct(typeof s == "string" ? s : s + "", void 0, tt), At = (s, ...t) => {
  const e = s.length === 1 ? s[0] : t.reduce((i, o, r) => i + ((n) => {
    if (n._$cssResult$ === !0)
      return n.cssText;
    if (typeof n == "number")
      return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + s[r + 1], s[0]);
  return new Ct(e, s, tt);
}, Vt = (s, t) => {
  X ? s.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach((e) => {
    const i = document.createElement("style"), o = D.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = e.cssText, s.appendChild(i);
  });
}, dt = X ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules)
    e += i.cssText;
  return Kt(e);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var z;
const B = window, ut = B.trustedTypes, Gt = ut ? ut.emptyScript : "", _t = B.reactiveElementPolyfillSupport, J = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? Gt : null;
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
} }, Et = (s, t) => t !== s && (t == t || s == s), j = { attribute: !0, type: String, converter: J, reflect: !1, hasChanged: Et }, Z = "finalized";
let A = class extends HTMLElement {
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
      const o = this._$Ep(i, e);
      o !== void 0 && (this._$Ev.set(o, i), t.push(o));
    }), t;
  }
  static createProperty(t, e = j) {
    if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const i = typeof t == "symbol" ? Symbol() : "__" + t, o = this.getPropertyDescriptor(t, i, e);
      o !== void 0 && Object.defineProperty(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    return { get() {
      return this[e];
    }, set(o) {
      const r = this[t];
      this[e] = o, this.requestUpdate(t, r, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || j;
  }
  static finalize() {
    if (this.hasOwnProperty(Z))
      return !1;
    this[Z] = !0;
    const t = Object.getPrototypeOf(this);
    if (t.finalize(), t.h !== void 0 && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const e = this.properties, i = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
      for (const o of i)
        this.createProperty(o, e[o]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const o of i)
        e.unshift(dt(o));
    } else
      t !== void 0 && e.push(dt(t));
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
    return Vt(e, this.constructor.elementStyles), e;
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
  _$EO(t, e, i = j) {
    var o;
    const r = this.constructor._$Ep(t, i);
    if (r !== void 0 && i.reflect === !0) {
      const n = (((o = i.converter) === null || o === void 0 ? void 0 : o.toAttribute) !== void 0 ? i.converter : J).toAttribute(e, i.type);
      this._$El = t, n == null ? this.removeAttribute(r) : this.setAttribute(r, n), this._$El = null;
    }
  }
  _$AK(t, e) {
    var i;
    const o = this.constructor, r = o._$Ev.get(t);
    if (r !== void 0 && this._$El !== r) {
      const n = o.getPropertyOptions(r), c = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((i = n.converter) === null || i === void 0 ? void 0 : i.fromAttribute) !== void 0 ? n.converter : J;
      this._$El = r, this[r] = c.fromAttribute(e, n.type), this._$El = null;
    }
  }
  requestUpdate(t, e, i) {
    let o = !0;
    t !== void 0 && (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || Et)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), i.reflect === !0 && this._$El !== t && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t, i))) : o = !1), !this.isUpdatePending && o && (this._$E_ = this._$Ej());
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
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((o, r) => this[r] = o), this._$Ei = void 0);
    let e = !1;
    const i = this._$AL;
    try {
      e = this.shouldUpdate(i), e ? (this.willUpdate(i), (t = this._$ES) === null || t === void 0 || t.forEach((o) => {
        var r;
        return (r = o.hostUpdate) === null || r === void 0 ? void 0 : r.call(o);
      }), this.update(i)) : this._$Ek();
    } catch (o) {
      throw e = !1, this._$Ek(), o;
    }
    e && this._$AE(i);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((i) => {
      var o;
      return (o = i.hostUpdated) === null || o === void 0 ? void 0 : o.call(i);
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
A[Z] = !0, A.elementProperties = /* @__PURE__ */ new Map(), A.elementStyles = [], A.shadowRootOptions = { mode: "open" }, _t == null || _t({ ReactiveElement: A }), ((z = B.reactiveElementVersions) !== null && z !== void 0 ? z : B.reactiveElementVersions = []).push("1.6.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var K;
const L = window, E = L.trustedTypes, pt = E ? E.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, Y = "$lit$", y = `lit$${(Math.random() + "").slice(9)}$`, St = "?" + y, Ft = `<${St}>`, C = document, H = () => C.createComment(""), T = (s) => s === null || typeof s != "object" && typeof s != "function", xt = Array.isArray, qt = (s) => xt(s) || typeof (s == null ? void 0 : s[Symbol.iterator]) == "function", V = `[ 	
\f\r]`, P = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, gt = /-->/g, vt = />/g, $ = RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ft = /'/g, yt = /"/g, Pt = /^(?:script|style|textarea|title)$/i, Jt = (s) => (t, ...e) => ({ _$litType$: s, strings: t, values: e }), u = Jt(1), S = Symbol.for("lit-noChange"), _ = Symbol.for("lit-nothing"), mt = /* @__PURE__ */ new WeakMap(), b = C.createTreeWalker(C, 129, null, !1), Zt = (s, t) => {
  const e = s.length - 1, i = [];
  let o, r = t === 2 ? "<svg>" : "", n = P;
  for (let a = 0; a < e; a++) {
    const l = s[a];
    let g, h, d = -1, p = 0;
    for (; p < l.length && (n.lastIndex = p, h = n.exec(l), h !== null); )
      p = n.lastIndex, n === P ? h[1] === "!--" ? n = gt : h[1] !== void 0 ? n = vt : h[2] !== void 0 ? (Pt.test(h[2]) && (o = RegExp("</" + h[2], "g")), n = $) : h[3] !== void 0 && (n = $) : n === $ ? h[0] === ">" ? (n = o ?? P, d = -1) : h[1] === void 0 ? d = -2 : (d = n.lastIndex - h[2].length, g = h[1], n = h[3] === void 0 ? $ : h[3] === '"' ? yt : ft) : n === yt || n === ft ? n = $ : n === gt || n === vt ? n = P : (n = $, o = void 0);
    const v = n === $ && s[a + 1].startsWith("/>") ? " " : "";
    r += n === P ? l + Ft : d >= 0 ? (i.push(g), l.slice(0, d) + Y + l.slice(d) + y + v) : l + y + (d === -2 ? (i.push(void 0), a) : v);
  }
  const c = r + (s[e] || "<?>") + (t === 2 ? "</svg>" : "");
  if (!Array.isArray(s) || !s.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [pt !== void 0 ? pt.createHTML(c) : c, i];
};
class O {
  constructor({ strings: t, _$litType$: e }, i) {
    let o;
    this.parts = [];
    let r = 0, n = 0;
    const c = t.length - 1, a = this.parts, [l, g] = Zt(t, e);
    if (this.el = O.createElement(l, i), b.currentNode = this.el.content, e === 2) {
      const h = this.el.content, d = h.firstChild;
      d.remove(), h.append(...d.childNodes);
    }
    for (; (o = b.nextNode()) !== null && a.length < c; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) {
          const h = [];
          for (const d of o.getAttributeNames())
            if (d.endsWith(Y) || d.startsWith(y)) {
              const p = g[n++];
              if (h.push(d), p !== void 0) {
                const v = o.getAttribute(p.toLowerCase() + Y).split(y), m = /([.?@])?(.*)/.exec(p);
                a.push({ type: 1, index: r, name: m[2], strings: v, ctor: m[1] === "." ? Qt : m[1] === "?" ? te : m[1] === "@" ? ee : W });
              } else
                a.push({ type: 6, index: r });
            }
          for (const d of h)
            o.removeAttribute(d);
        }
        if (Pt.test(o.tagName)) {
          const h = o.textContent.split(y), d = h.length - 1;
          if (d > 0) {
            o.textContent = E ? E.emptyScript : "";
            for (let p = 0; p < d; p++)
              o.append(h[p], H()), b.nextNode(), a.push({ type: 2, index: ++r });
            o.append(h[d], H());
          }
        }
      } else if (o.nodeType === 8)
        if (o.data === St)
          a.push({ type: 2, index: r });
        else {
          let h = -1;
          for (; (h = o.data.indexOf(y, h + 1)) !== -1; )
            a.push({ type: 7, index: r }), h += y.length - 1;
        }
      r++;
    }
  }
  static createElement(t, e) {
    const i = C.createElement("template");
    return i.innerHTML = t, i;
  }
}
function x(s, t, e = s, i) {
  var o, r, n, c;
  if (t === S)
    return t;
  let a = i !== void 0 ? (o = e._$Co) === null || o === void 0 ? void 0 : o[i] : e._$Cl;
  const l = T(t) ? void 0 : t._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== l && ((r = a == null ? void 0 : a._$AO) === null || r === void 0 || r.call(a, !1), l === void 0 ? a = void 0 : (a = new l(s), a._$AT(s, e, i)), i !== void 0 ? ((n = (c = e)._$Co) !== null && n !== void 0 ? n : c._$Co = [])[i] = a : e._$Cl = a), a !== void 0 && (t = x(s, a._$AS(s, t.values), a, i)), t;
}
class Yt {
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
    const { el: { content: i }, parts: o } = this._$AD, r = ((e = t == null ? void 0 : t.creationScope) !== null && e !== void 0 ? e : C).importNode(i, !0);
    b.currentNode = r;
    let n = b.nextNode(), c = 0, a = 0, l = o[0];
    for (; l !== void 0; ) {
      if (c === l.index) {
        let g;
        l.type === 2 ? g = new R(n, n.nextSibling, this, t) : l.type === 1 ? g = new l.ctor(n, l.name, l.strings, this, t) : l.type === 6 && (g = new se(n, this, t)), this._$AV.push(g), l = o[++a];
      }
      c !== (l == null ? void 0 : l.index) && (n = b.nextNode(), c++);
    }
    return b.currentNode = C, r;
  }
  v(t) {
    let e = 0;
    for (const i of this._$AV)
      i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class R {
  constructor(t, e, i, o) {
    var r;
    this.type = 2, this._$AH = _, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = o, this._$Cp = (r = o == null ? void 0 : o.isConnected) === null || r === void 0 || r;
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
    t = x(this, t, e), T(t) ? t === _ || t == null || t === "" ? (this._$AH !== _ && this._$AR(), this._$AH = _) : t !== this._$AH && t !== S && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : qt(t) ? this.T(t) : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
  }
  _(t) {
    this._$AH !== _ && T(this._$AH) ? this._$AA.nextSibling.data = t : this.$(C.createTextNode(t)), this._$AH = t;
  }
  g(t) {
    var e;
    const { values: i, _$litType$: o } = t, r = typeof o == "number" ? this._$AC(t) : (o.el === void 0 && (o.el = O.createElement(o.h, this.options)), o);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === r)
      this._$AH.v(i);
    else {
      const n = new Yt(r, this), c = n.u(this.options);
      n.v(i), this.$(c), this._$AH = n;
    }
  }
  _$AC(t) {
    let e = mt.get(t.strings);
    return e === void 0 && mt.set(t.strings, e = new O(t)), e;
  }
  T(t) {
    xt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, o = 0;
    for (const r of t)
      o === e.length ? e.push(i = new R(this.k(H()), this.k(H()), this, this.options)) : i = e[o], i._$AI(r), o++;
    o < e.length && (this._$AR(i && i._$AB.nextSibling, o), e.length = o);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for ((i = this._$AP) === null || i === void 0 || i.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const o = t.nextSibling;
      t.remove(), t = o;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cp = t, (e = this._$AP) === null || e === void 0 || e.call(this, t));
  }
}
class W {
  constructor(t, e, i, o, r) {
    this.type = 1, this._$AH = _, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = r, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = _;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, i, o) {
    const r = this.strings;
    let n = !1;
    if (r === void 0)
      t = x(this, t, e, 0), n = !T(t) || t !== this._$AH && t !== S, n && (this._$AH = t);
    else {
      const c = t;
      let a, l;
      for (t = r[0], a = 0; a < r.length - 1; a++)
        l = x(this, c[i + a], e, a), l === S && (l = this._$AH[a]), n || (n = !T(l) || l !== this._$AH[a]), l === _ ? t = _ : t !== _ && (t += (l ?? "") + r[a + 1]), this._$AH[a] = l;
    }
    n && !o && this.j(t);
  }
  j(t) {
    t === _ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Qt extends W {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === _ ? void 0 : t;
  }
}
const Xt = E ? E.emptyScript : "";
class te extends W {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== _ ? this.element.setAttribute(this.name, Xt) : this.element.removeAttribute(this.name);
  }
}
class ee extends W {
  constructor(t, e, i, o, r) {
    super(t, e, i, o, r), this.type = 5;
  }
  _$AI(t, e = this) {
    var i;
    if ((t = (i = x(this, t, e, 0)) !== null && i !== void 0 ? i : _) === S)
      return;
    const o = this._$AH, r = t === _ && o !== _ || t.capture !== o.capture || t.once !== o.once || t.passive !== o.passive, n = t !== _ && (o === _ || r);
    r && this.element.removeEventListener(this.name, this, o), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e, i;
    typeof this._$AH == "function" ? this._$AH.call((i = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && i !== void 0 ? i : this.element, t) : this._$AH.handleEvent(t);
  }
}
class se {
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
const $t = L.litHtmlPolyfillSupport;
$t == null || $t(O, R), ((K = L.litHtmlVersions) !== null && K !== void 0 ? K : L.litHtmlVersions = []).push("2.7.4");
const ie = (s, t, e) => {
  var i, o;
  const r = (i = e == null ? void 0 : e.renderBefore) !== null && i !== void 0 ? i : t;
  let n = r._$litPart$;
  if (n === void 0) {
    const c = (o = e == null ? void 0 : e.renderBefore) !== null && o !== void 0 ? o : null;
    r._$litPart$ = n = new R(t.insertBefore(H(), c), c, void 0, e ?? {});
  }
  return n._$AI(s), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var G, F;
class w extends A {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ie(e, this.renderRoot, this.renderOptions);
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
    return S;
  }
}
w.finalized = !0, w._$litElement$ = !0, (G = globalThis.litElementHydrateSupport) === null || G === void 0 || G.call(globalThis, { LitElement: w });
const bt = globalThis.litElementPolyfillSupport;
bt == null || bt({ LitElement: w });
((F = globalThis.litElementVersions) !== null && F !== void 0 ? F : globalThis.litElementVersions = []).push("3.3.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et = (s) => (t) => typeof t == "function" ? ((e, i) => (customElements.define(e, i), i))(s, t) : ((e, i) => {
  const { kind: o, elements: r } = i;
  return { kind: o, elements: r, finisher(n) {
    customElements.define(e, n);
  } };
})(s, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oe = (s, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? { ...t, finisher(e) {
  e.createProperty(t.key, s);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: t.key, initializer() {
  typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
}, finisher(e) {
  e.createProperty(t.key, s);
} }, re = (s, t, e) => {
  t.constructor.createProperty(e, s);
};
function I(s) {
  return (t, e) => e !== void 0 ? re(s, t, e) : oe(s, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Ht(s) {
  return I({ ...s, state: !0 });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var q;
((q = window.HTMLSlotElement) === null || q === void 0 ? void 0 : q.prototype.assignedElements) != null;
const Tt = 80, Ot = [0, 69, 23], Ut = 60, Rt = [67, 160, 71], It = 40, Dt = [255, 166, 0], Mt = 20, Bt = [219, 68, 55], Lt = [94, 0, 0], Nt = !1;
var f = /* @__PURE__ */ ((s) => (s[s.WH = 0] = "WH", s[s.KWH = 1] = "KWH", s[s.DYNAMIC = 2] = "DYNAMIC", s))(f || {});
const Q = 2, kt = 3, Wt = "mdi:sleep", zt = "mdi:lightning-bolt", jt = "mdi:home-battery";
var ne = Object.defineProperty, ae = Object.getOwnPropertyDescriptor, st = (s, t, e, i) => {
  for (var o = i > 1 ? void 0 : i ? ae(t, e) : t, r = s.length - 1, n; r >= 0; r--)
    (n = s[r]) && (o = (i ? n(t, e, o) : n(o)) || o);
  return i && o && ne(t, e, o), o;
};
let N = class extends w {
  constructor() {
    super(...arguments), this._counter = 0;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), clearInterval(this._interval);
  }
  secondsToDuration(s) {
    const t = (r) => r < 10 ? `0${r}` : r, e = Math.floor(s / 3600), i = Math.floor(s % 3600 / 60), o = Math.floor(s % 3600 % 60);
    return e > 0 ? `${e}:${t(i)}:${t(o)}` : i > 0 ? `${i}:${t(o)}` : o > 0 ? "" + o : "0";
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
st([
  I()
], N.prototype, "secs", 2);
st([
  I()
], N.prototype, "_counter", 2);
N = st([
  et("givtcp-battery-card-countdown")
], N);
class M {
  static getDefaultConfig() {
    return {
      type: "custom:givtcp-battery-card",
      name: "Battery",
      soc_threshold_very_high: Tt,
      soc_threshold_high: Ut,
      soc_threshold_medium: It,
      soc_threshold_low: Mt,
      soc_threshold_very_high_colour: Ot,
      soc_threshold_high_colour: Rt,
      soc_threshold_medium_colour: Dt,
      soc_threshold_low_colour: Bt,
      soc_threshold_very_low_colour: Lt,
      display_abs_power: Nt,
      display_type: Q,
      display_dp: kt,
      icon_status_idle: Wt,
      icon_status_charging: zt,
      icon_status_discharging: jt
    };
  }
  static migrateConfig(t, e) {
    const i = e ? { ...t } : t, o = {
      display_kwh: {
        newKey: "display_type",
        newVal: f.DYNAMIC
      }
    };
    for (const [r, n] of Object.entries(o))
      i[r] && (i[n.newKey] = i[r], n.newKey !== void 0 && (i[n.newKey] = n.newVal), delete i[r]);
    return i;
  }
}
var le = Object.defineProperty, ce = Object.getOwnPropertyDescriptor, it = (s, t, e, i) => {
  for (var o = i > 1 ? void 0 : i ? ce(t, e) : t, r = s.length - 1, n; r >= 0; r--)
    (n = s[r]) && (o = (i ? n(t, e, o) : n(o)) || o);
  return i && o && le(t, e, o), o;
};
let U = class extends w {
  constructor() {
    super(...arguments), this._computeLabelCallback = (s) => s.label ? s.label : s.name;
  }
  setConfig(s) {
    this._config = M.migrateConfig(s, !0);
  }
  get _getInvertorList() {
    return this.hass ? Object.keys(this.hass.states).filter((s) => s.includes("invertor_serial_number")) : [];
  }
  get _schema() {
    const s = M.getDefaultConfig();
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
            max: 100
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
            max: 100
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
            max: 100
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
            max: 100
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
        label: "Display type (0: Wh | 1: kWh | 2: Dynamic)",
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
      }
    ];
  }
  render() {
    if (!this.hass || !this._config)
      return u``;
    const s = {
      ...M.getDefaultConfig(),
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
    wt(this, "config-changed", { config: t });
  }
};
U.styles = At``;
it([
  I()
], U.prototype, "hass", 2);
it([
  Ht()
], U.prototype, "_config", 2);
U = it([
  et("givtcp-battery-card-editor")
], U);
const he = At`
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
    padding-bottom: 10px;

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
`, de = "0.1.2";
var ue = Object.defineProperty, _e = Object.getOwnPropertyDescriptor, ot = (s, t, e, i) => {
  for (var o = i > 1 ? void 0 : i ? _e(t, e) : t, r = s.length - 1, n; r >= 0; r--)
    (n = s[r]) && (o = (i ? n(t, e, o) : n(o)) || o);
  return i && o && ue(t, e, o), o;
};
window.customCards = window.customCards || [];
window.customCards.push({
  type: "givtcp-battery-card",
  name: "GivTCP Battery Card",
  description: "A card to display GivTCP battery info"
});
console.info(
  `%c GIVTCP-BATTERY-CARD %c ${de}`,
  "color: green; font-weight: bold; background: black",
  "color: green; font-weight: bold;"
);
let k = class extends w {
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
      e && (t.stopPropagation(), wt(this, "hass-more-info", { entityId: e }));
    });
  }
  // https://lit.dev/docs/components/properties/#accessors-custom
  setConfig(s) {
    if (!s)
      throw new Error("Invalid configuration");
    if (!s.entity)
      throw new Error("You need to define an invertor entity");
    this.config = {
      ...M.getDefaultConfig(),
      ...s
    };
  }
  // https://lit.dev/docs/components/lifecycle/#reactive-update-cycle-performing
  shouldUpdate(s) {
    return this.config ? this.customHasConfigOrEntityChanged(this, s) : !1;
  }
  customHasConfigOrEntityChanged(s, t) {
    var i, o;
    if (t.has("config"))
      return !0;
    const e = [
      "soc",
      "battery_power",
      "soc_kwh",
      "discharge_power",
      "charge_power"
    ];
    if ((i = s.config) != null && i.entity) {
      const r = t.get("hass");
      if (r) {
        let n = !1;
        for (const c of e)
          r.states[`sensor.${this._getSensorPrefix}${c}`] !== ((o = s.hass) == null ? void 0 : o.states[`sensor.${this._getSensorPrefix}${c}`]) && (n = !0);
        return n;
      }
      return !0;
    } else
      return !1;
  }
  getCardSize() {
    return this.clientHeight > 0 ? Math.ceil(this.clientHeight / 50) : 3;
  }
  renderReserveAndCapacity() {
    const s = this._getBatteryPowerReserve.state, t = Math.round(this._getReserveWatts), e = parseFloat(this._getBatteryCapacityKwhEntity.state) * 1e3;
    return u`
      <div class="status">
        <span class="status-text"> Capacity: ${this.convertDisplay(e)} | Reserve: ${this.convertDisplay(t)} (${s}%) </span>
      </div>
    `;
  }
  renderPowerUsage() {
    const s = parseInt(this._getBatteryPowerEntity.state, 10);
    let t = "", e = u``;
    const o = (this.config.display_abs_power !== void 0 ? this.config.display_abs_power : Nt) ? Math.abs(s) : s;
    return s > 0 && (t = "battery-power-out", e = u`<ha-icon icon="mdi:export"></ha-icon>`), s < 0 && (t = "battery-power-in", e = u`<ha-icon icon="mdi:import"></ha-icon>`), u`
      <div 
          class="icon-subtitle-small"
          id="gtpc-battery-detail-battery-power"
          data-entity-id="${`sensor.${this._getSensorPrefix}battery_power`}"
      >
        ${e}
        <span class="${t}">
          ${this.convertDisplayUnit(o)} 
        </span>
        ${this.getDisplayUnit(o, !0)}
      </div>
    `;
  }
  renderStats() {
    const s = [], t = parseInt(this._getBatteryPowerEntity.state, 10), e = u`<ha-icon icon="mdi:timer-sand" style="--mdc-icon-size: 17px;"></ha-icon>`, i = u`<ha-icon icon="mdi:clock-outline" style="--mdc-icon-size: 17px;"></ha-icon>`;
    let o = u`${e} No load`, r = 0, n = u`${i} No Load`, c = Math.round(Date.now() / 1e3);
    t > 0 && (o = u`${e} until ${this._getBatteryPowerReserve.state}%`, r = this._getEstimatedTimeLeft, n = u`${i} at ${this._getBatteryPowerReserve.state}%`, c = this._getEstimatedTimeAtReserve), t < 0 && (o = u`${e} until 100%`, r = this._getEstimatedChargeTime, n = u`${i} at 100%`, c = this._getEstimatedTimeAtFull);
    let a = u`--:--:--`;
    t !== 0 && (a = u`
        <givtcp-battery-card-countdown 
            secs=${r}
        ></givtcp-battery-card-countdown>
      `);
    const l = u`
      <div class="stats-block">
        <span class="stats-value"> ${a} </span>
        <div class="stats-subtitle">${o}</div>
      </div>
    `;
    s.push(l);
    let g = "--:--";
    if (t !== 0) {
      const d = new Date(c * 1e3), p = d.toLocaleString(
        "en-GB",
        {
          hour: "numeric",
          minute: "numeric",
          hour12: !1
        }
      );
      g = `${p}`, r > 86400 && (g = `${d.toLocaleString(
        "en-GB",
        {
          day: "numeric",
          month: "numeric"
        }
      )} ${p}`);
    }
    const h = u`
      <div class="stats-block">
        <span class="stats-value">${g}</span>
        <div class="stats-subtitle">${n}</div>
      </div>
    `;
    return s.push(h), s;
  }
  renderNameAndStatus() {
    const s = this._getBatteryStatus.toUpperCase();
    return u` <div class="battery-name">${this.config.name || "Battery"} | ${s}</div> `;
  }
  getBatteryIcon() {
    const s = parseInt(this._getSocEntity.state, 10), t = "";
    if (s === 100)
      return "mdi:battery";
    if (s < 10)
      return `mdi:battery${t}-outline`;
    const e = Math.floor(s / 10) * 10;
    return `mdi:battery${t}-${e}`;
  }
  getBatteryStatusIcon() {
    var i, o, r;
    const s = (i = this.config) != null && i.icon_status_charging ? this.config.icon_status_charging : zt, t = (o = this.config) != null && o.icon_status_discharging ? this.config.icon_status_discharging : jt, e = (r = this.config) != null && r.icon_status_idle ? this.config.icon_status_idle : Wt;
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
    var g, h, d, p, v, m, rt, nt, at;
    const s = parseInt(this._getSocEntity.state, 10), t = (g = this.config) != null && g.soc_threshold_very_high ? this.config.soc_threshold_very_high : Tt, e = (h = this.config) != null && h.soc_threshold_high ? this.config.soc_threshold_high : Ut, i = (d = this.config) != null && d.soc_threshold_medium ? this.config.soc_threshold_medium : It, o = (p = this.config) != null && p.soc_threshold_low ? this.config.soc_threshold_low : Mt, r = (v = this.config) != null && v.soc_threshold_very_high_colour ? this.config.soc_threshold_very_high_colour : Ot, n = (m = this.config) != null && m.soc_threshold_high_colour ? this.config.soc_threshold_high_colour : Rt, c = (rt = this.config) != null && rt.soc_threshold_medium_colour ? this.config.soc_threshold_medium_colour : Dt, a = (nt = this.config) != null && nt.soc_threshold_low_colour ? this.config.soc_threshold_low_colour : Bt, l = (at = this.config) != null && at.soc_threshold_very_low_colour ? this.config.soc_threshold_very_low_colour : Lt;
    return s >= t ? `${r[0]}, ${r[1]}, ${r[2]}` : s >= e ? `${n[0]}, ${n[1]}, ${n[2]}` : s >= i ? `${c[0]}, ${c[1]}, ${c[2]}` : s >= o ? `${a[0]}, ${a[1]}, ${a[2]}` : `${l[0]}, ${l[1]}, ${l[2]}`;
  }
  convertDisplay(s) {
    return `${this.convertDisplayUnit(s)} ${this.getDisplayUnit(s)}`;
  }
  getDisplayUnit(s, t = !1) {
    const e = this.config.display_type !== void 0 ? this.config.display_type : Q, i = t ? "" : "h";
    switch (e) {
      case f.WH:
      default:
        return `W${i}`;
      case f.KWH:
        return `kW${i}`;
      case f.DYNAMIC:
        return s !== 0 ? Math.abs(s) >= 1e3 ? `kW${i}` : `W${i}` : `W${i}`;
    }
  }
  convertDisplayUnit(s) {
    switch (this.config.display_type !== void 0 ? this.config.display_type : Q) {
      case f.WH:
      default:
        return s;
      case f.KWH:
        return s !== 0 ? this.convertKwhWithDp(s) : 0;
      case f.DYNAMIC:
        return s !== 0 && Math.abs(s) >= 1e3 ? this.convertKwhWithDp(s) : s;
    }
  }
  convertKwhWithDp(s) {
    let t = parseInt(this.config.display_dp !== void 0 ? this.config.display_dp : kt, 10);
    t > 3 && (t = 3), t < 1 && (t = 1);
    const e = 10 ** t;
    if (s !== 0) {
      const i = s / 1e3;
      return Math.round((i + Number.EPSILON) * e) / e;
    }
    return 0;
  }
  // https://lit.dev/docs/components/rendering/
  render() {
    var r;
    if (!((r = this.config) != null && r.entity))
      return u``;
    const s = this.getBatteryIcon(), t = this.getBatteryStatusIcon(), e = this.getBatteryColour(), i = parseInt(this._getSocEntity.state, 10), o = Math.round(parseFloat(this._getSocKwhEntity.state) * 1e3);
    return u`
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
                      icon="${t}"
                      style="--mdc-icon-size: 45px;"
                  ></ha-icon>
                </div>
                <div style="margin: auto;">
                  <ha-icon
                      icon="${s}"
                      style="color:rgb(${e});--mdc-icon-size: 100px;"
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
                  ${i}% 
                </span>
                <span 
                    class="icon-subtitle"
                    data-entity-id="${`sensor.${this._getSensorPrefix}soc_kwh`}"
                    id="gtpc-battery-detail-soc-kwh-text"
                > 
                  ${this.convertDisplay(o)} 
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
  get _getBatteryStatus() {
    const s = parseInt(this._getBatteryPowerEntity.state, 10);
    let t = "";
    return s > 0 ? t = "discharging" : s < 0 ? t = "charging" : t = "idle", t;
  }
  get _getReserveWatts() {
    const s = parseFloat(this._getBatteryCapacityKwhEntity.state) * 1e3, t = parseFloat(this._getBatteryPowerReserve.state) / 100;
    return s * t;
  }
  get _getEstimatedTimeLeft() {
    let s = 0;
    const t = parseFloat(this._getSocKwhEntity.state) * 1e3, e = parseFloat(this._getBatteryCapacityKwhEntity.state) * 1e3, i = parseFloat(this._getBatteryPowerReserve.state) / 100, o = parseFloat(this._getDischargePowerEntity.state), r = e * i, n = t - r;
    if (n > 0 && o > 0) {
      const c = n / o;
      s = Math.floor(c * 3600);
    }
    return s;
  }
  get _getEstimatedChargeTime() {
    let s = 0;
    const t = parseFloat(this._getChargePowerEntity.state), e = parseFloat(this._getSocKwhEntity.state) * 1e3, i = parseFloat(this._getBatteryCapacityKwhEntity.state) * 1e3;
    if (t > 0) {
      const r = (i - e) / t;
      s = Math.floor(r * 3600);
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
    return he;
  }
};
ot([
  I()
], k.prototype, "hass", 2);
ot([
  Ht()
], k.prototype, "config", 2);
k = ot([
  et("givtcp-battery-card")
], k);
export {
  k as GivTCPBatteryCard
};
