var ht, dt;
(function(e) {
  e.language = "language", e.system = "system", e.comma_decimal = "comma_decimal", e.decimal_comma = "decimal_comma", e.space_comma = "space_comma", e.none = "none";
})(ht || (ht = {})), function(e) {
  e.language = "language", e.system = "system", e.am_pm = "12", e.twenty_four = "24";
}(dt || (dt = {}));
var Pt = function(e, t, s, r) {
  r = r || {}, s = s ?? {};
  var i = new Event(t, { bubbles: r.bubbles === void 0 || r.bubbles, cancelable: !!r.cancelable, composed: r.composed === void 0 || r.composed });
  return i.detail = s, e.dispatchEvent(i), i;
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B = window, rt = B.ShadowRoot && (B.ShadyCSS === void 0 || B.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, it = Symbol(), ut = /* @__PURE__ */ new WeakMap();
let Et = class {
  constructor(t, s, r) {
    if (this._$cssResult$ = !0, r !== it)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = s;
  }
  get styleSheet() {
    let t = this.o;
    const s = this.t;
    if (rt && t === void 0) {
      const r = s !== void 0 && s.length === 1;
      r && (t = ut.get(s)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && ut.set(s, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Ft = (e) => new Et(typeof e == "string" ? e : e + "", void 0, it), Ct = (e, ...t) => {
  const s = e.length === 1 ? e[0] : t.reduce((r, i, o) => r + ((a) => {
    if (a._$cssResult$ === !0)
      return a.cssText;
    if (typeof a == "number")
      return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + e[o + 1], e[0]);
  return new Et(s, e, it);
}, qt = (e, t) => {
  rt ? e.adoptedStyleSheets = t.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet) : t.forEach((s) => {
    const r = document.createElement("style"), i = B.litNonce;
    i !== void 0 && r.setAttribute("nonce", i), r.textContent = s.cssText, e.appendChild(r);
  });
}, pt = rt ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let s = "";
  for (const r of t.cssRules)
    s += r.cssText;
  return Ft(s);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var F;
const K = window, _t = K.trustedTypes, Jt = _t ? _t.emptyScript : "", yt = K.reactiveElementPolyfillSupport, tt = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? Jt : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let s = e;
  switch (t) {
    case Boolean:
      s = e !== null;
      break;
    case Number:
      s = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        s = JSON.parse(e);
      } catch {
        s = null;
      }
  }
  return s;
} }, At = (e, t) => t !== e && (t == t || e == e), q = { attribute: !0, type: String, converter: tt, reflect: !1, hasChanged: At }, et = "finalized";
let x = class extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
  }
  static addInitializer(t) {
    var s;
    this.finalize(), ((s = this.h) !== null && s !== void 0 ? s : this.h = []).push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this.elementProperties.forEach((s, r) => {
      const i = this._$Ep(r, s);
      i !== void 0 && (this._$Ev.set(i, r), t.push(i));
    }), t;
  }
  static createProperty(t, s = q) {
    if (s.state && (s.attribute = !1), this.finalize(), this.elementProperties.set(t, s), !s.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const r = typeof t == "symbol" ? Symbol() : "__" + t, i = this.getPropertyDescriptor(t, r, s);
      i !== void 0 && Object.defineProperty(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, s, r) {
    return { get() {
      return this[s];
    }, set(i) {
      const o = this[t];
      this[s] = i, this.requestUpdate(t, o, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || q;
  }
  static finalize() {
    if (this.hasOwnProperty(et))
      return !1;
    this[et] = !0;
    const t = Object.getPrototypeOf(this);
    if (t.finalize(), t.h !== void 0 && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const s = this.properties, r = [...Object.getOwnPropertyNames(s), ...Object.getOwnPropertySymbols(s)];
      for (const i of r)
        this.createProperty(i, s[i]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(t) {
    const s = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const i of r)
        s.unshift(pt(i));
    } else
      t !== void 0 && s.push(pt(t));
    return s;
  }
  static _$Ep(t, s) {
    const r = s.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  u() {
    var t;
    this._$E_ = new Promise((s) => this.enableUpdating = s), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach((s) => s(this));
  }
  addController(t) {
    var s, r;
    ((s = this._$ES) !== null && s !== void 0 ? s : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((r = t.hostConnected) === null || r === void 0 || r.call(t));
  }
  removeController(t) {
    var s;
    (s = this._$ES) === null || s === void 0 || s.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t, s) => {
      this.hasOwnProperty(s) && (this._$Ei.set(s, this[s]), delete this[s]);
    });
  }
  createRenderRoot() {
    var t;
    const s = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions);
    return qt(s, this.constructor.elementStyles), s;
  }
  connectedCallback() {
    var t;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$ES) === null || t === void 0 || t.forEach((s) => {
      var r;
      return (r = s.hostConnected) === null || r === void 0 ? void 0 : r.call(s);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach((s) => {
      var r;
      return (r = s.hostDisconnected) === null || r === void 0 ? void 0 : r.call(s);
    });
  }
  attributeChangedCallback(t, s, r) {
    this._$AK(t, r);
  }
  _$EO(t, s, r = q) {
    var i;
    const o = this.constructor._$Ep(t, r);
    if (o !== void 0 && r.reflect === !0) {
      const a = (((i = r.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? r.converter : tt).toAttribute(s, r.type);
      this._$El = t, a == null ? this.removeAttribute(o) : this.setAttribute(o, a), this._$El = null;
    }
  }
  _$AK(t, s) {
    var r;
    const i = this.constructor, o = i._$Ev.get(t);
    if (o !== void 0 && this._$El !== o) {
      const a = i.getPropertyOptions(o), c = typeof a.converter == "function" ? { fromAttribute: a.converter } : ((r = a.converter) === null || r === void 0 ? void 0 : r.fromAttribute) !== void 0 ? a.converter : tt;
      this._$El = o, this[o] = c.fromAttribute(s, a.type), this._$El = null;
    }
  }
  requestUpdate(t, s, r) {
    let i = !0;
    t !== void 0 && (((r = r || this.constructor.getPropertyOptions(t)).hasChanged || At)(this[t], s) ? (this._$AL.has(t) || this._$AL.set(t, s), r.reflect === !0 && this._$El !== t && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t, r))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (s) {
      Promise.reject(s);
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
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((i, o) => this[o] = i), this._$Ei = void 0);
    let s = !1;
    const r = this._$AL;
    try {
      s = this.shouldUpdate(r), s ? (this.willUpdate(r), (t = this._$ES) === null || t === void 0 || t.forEach((i) => {
        var o;
        return (o = i.hostUpdate) === null || o === void 0 ? void 0 : o.call(i);
      }), this.update(r)) : this._$Ek();
    } catch (i) {
      throw s = !1, this._$Ek(), i;
    }
    s && this._$AE(r);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var s;
    (s = this._$ES) === null || s === void 0 || s.forEach((r) => {
      var i;
      return (i = r.hostUpdated) === null || i === void 0 ? void 0 : i.call(r);
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
    this._$EC !== void 0 && (this._$EC.forEach((s, r) => this._$EO(r, this[r], s)), this._$EC = void 0), this._$Ek();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
x[et] = !0, x.elementProperties = /* @__PURE__ */ new Map(), x.elementStyles = [], x.shadowRootOptions = { mode: "open" }, yt == null || yt({ ReactiveElement: x }), ((F = K.reactiveElementVersions) !== null && F !== void 0 ? F : K.reactiveElementVersions = []).push("1.6.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var J;
const z = window, T = z.trustedTypes, gt = T ? T.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, st = "$lit$", b = `lit$${(Math.random() + "").slice(9)}$`, xt = "?" + b, Zt = `<${xt}>`, A = document, M = () => A.createComment(""), O = (e) => e === null || typeof e != "object" && typeof e != "function", Tt = Array.isArray, Qt = (e) => Tt(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", Z = `[ 	
\f\r]`, H = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, vt = /-->/g, ft = />/g, P = RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), mt = /'/g, $t = /"/g, Wt = /^(?:script|style|textarea|title)$/i, Xt = (e) => (t, ...s) => ({ _$litType$: e, strings: t, values: s }), _ = Xt(1), W = Symbol.for("lit-noChange"), y = Symbol.for("lit-nothing"), wt = /* @__PURE__ */ new WeakMap(), E = A.createTreeWalker(A, 129, null, !1), Yt = (e, t) => {
  const s = e.length - 1, r = [];
  let i, o = t === 2 ? "<svg>" : "", a = H;
  for (let n = 0; n < s; n++) {
    const l = e[n];
    let h, d, u = -1, p = 0;
    for (; p < l.length && (a.lastIndex = p, d = a.exec(l), d !== null); )
      p = a.lastIndex, a === H ? d[1] === "!--" ? a = vt : d[1] !== void 0 ? a = ft : d[2] !== void 0 ? (Wt.test(d[2]) && (i = RegExp("</" + d[2], "g")), a = P) : d[3] !== void 0 && (a = P) : a === P ? d[0] === ">" ? (a = i ?? H, u = -1) : d[1] === void 0 ? u = -2 : (u = a.lastIndex - d[2].length, h = d[1], a = d[3] === void 0 ? P : d[3] === '"' ? $t : mt) : a === $t || a === mt ? a = P : a === vt || a === ft ? a = H : (a = P, i = void 0);
    const f = a === P && e[n + 1].startsWith("/>") ? " " : "";
    o += a === H ? l + Zt : u >= 0 ? (r.push(h), l.slice(0, u) + st + l.slice(u) + b + f) : l + b + (u === -2 ? (r.push(void 0), n) : f);
  }
  const c = o + (e[s] || "<?>") + (t === 2 ? "</svg>" : "");
  if (!Array.isArray(e) || !e.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [gt !== void 0 ? gt.createHTML(c) : c, r];
};
class U {
  constructor({ strings: t, _$litType$: s }, r) {
    let i;
    this.parts = [];
    let o = 0, a = 0;
    const c = t.length - 1, n = this.parts, [l, h] = Yt(t, s);
    if (this.el = U.createElement(l, r), E.currentNode = this.el.content, s === 2) {
      const d = this.el.content, u = d.firstChild;
      u.remove(), d.append(...u.childNodes);
    }
    for (; (i = E.nextNode()) !== null && n.length < c; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const d = [];
          for (const u of i.getAttributeNames())
            if (u.endsWith(st) || u.startsWith(b)) {
              const p = h[a++];
              if (d.push(u), p !== void 0) {
                const f = i.getAttribute(p.toLowerCase() + st).split(b), v = /([.?@])?(.*)/.exec(p);
                n.push({ type: 1, index: o, name: v[2], strings: f, ctor: v[1] === "." ? ee : v[1] === "?" ? re : v[1] === "@" ? ie : G });
              } else
                n.push({ type: 6, index: o });
            }
          for (const u of d)
            i.removeAttribute(u);
        }
        if (Wt.test(i.tagName)) {
          const d = i.textContent.split(b), u = d.length - 1;
          if (u > 0) {
            i.textContent = T ? T.emptyScript : "";
            for (let p = 0; p < u; p++)
              i.append(d[p], M()), E.nextNode(), n.push({ type: 2, index: ++o });
            i.append(d[u], M());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === xt)
          n.push({ type: 2, index: o });
        else {
          let d = -1;
          for (; (d = i.data.indexOf(b, d + 1)) !== -1; )
            n.push({ type: 7, index: o }), d += b.length - 1;
        }
      o++;
    }
  }
  static createElement(t, s) {
    const r = A.createElement("template");
    return r.innerHTML = t, r;
  }
}
function R(e, t, s = e, r) {
  var i, o, a, c;
  if (t === W)
    return t;
  let n = r !== void 0 ? (i = s._$Co) === null || i === void 0 ? void 0 : i[r] : s._$Cl;
  const l = O(t) ? void 0 : t._$litDirective$;
  return (n == null ? void 0 : n.constructor) !== l && ((o = n == null ? void 0 : n._$AO) === null || o === void 0 || o.call(n, !1), l === void 0 ? n = void 0 : (n = new l(e), n._$AT(e, s, r)), r !== void 0 ? ((a = (c = s)._$Co) !== null && a !== void 0 ? a : c._$Co = [])[r] = n : s._$Cl = n), n !== void 0 && (t = R(e, n._$AS(e, t.values), n, r)), t;
}
class te {
  constructor(t, s) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = s;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    var s;
    const { el: { content: r }, parts: i } = this._$AD, o = ((s = t == null ? void 0 : t.creationScope) !== null && s !== void 0 ? s : A).importNode(r, !0);
    E.currentNode = o;
    let a = E.nextNode(), c = 0, n = 0, l = i[0];
    for (; l !== void 0; ) {
      if (c === l.index) {
        let h;
        l.type === 2 ? h = new L(a, a.nextSibling, this, t) : l.type === 1 ? h = new l.ctor(a, l.name, l.strings, this, t) : l.type === 6 && (h = new oe(a, this, t)), this._$AV.push(h), l = i[++n];
      }
      c !== (l == null ? void 0 : l.index) && (a = E.nextNode(), c++);
    }
    return E.currentNode = A, o;
  }
  v(t) {
    let s = 0;
    for (const r of this._$AV)
      r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, s), s += r.strings.length - 2) : r._$AI(t[s])), s++;
  }
}
class L {
  constructor(t, s, r, i) {
    var o;
    this.type = 2, this._$AH = y, this._$AN = void 0, this._$AA = t, this._$AB = s, this._$AM = r, this.options = i, this._$Cp = (o = i == null ? void 0 : i.isConnected) === null || o === void 0 || o;
  }
  get _$AU() {
    var t, s;
    return (s = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && s !== void 0 ? s : this._$Cp;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const s = this._$AM;
    return s !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = s.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, s = this) {
    t = R(this, t, s), O(t) ? t === y || t == null || t === "" ? (this._$AH !== y && this._$AR(), this._$AH = y) : t !== this._$AH && t !== W && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : Qt(t) ? this.T(t) : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
  }
  _(t) {
    this._$AH !== y && O(this._$AH) ? this._$AA.nextSibling.data = t : this.$(A.createTextNode(t)), this._$AH = t;
  }
  g(t) {
    var s;
    const { values: r, _$litType$: i } = t, o = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = U.createElement(i.h, this.options)), i);
    if (((s = this._$AH) === null || s === void 0 ? void 0 : s._$AD) === o)
      this._$AH.v(r);
    else {
      const a = new te(o, this), c = a.u(this.options);
      a.v(r), this.$(c), this._$AH = a;
    }
  }
  _$AC(t) {
    let s = wt.get(t.strings);
    return s === void 0 && wt.set(t.strings, s = new U(t)), s;
  }
  T(t) {
    Tt(this._$AH) || (this._$AH = [], this._$AR());
    const s = this._$AH;
    let r, i = 0;
    for (const o of t)
      i === s.length ? s.push(r = new L(this.k(M()), this.k(M()), this, this.options)) : r = s[i], r._$AI(o), i++;
    i < s.length && (this._$AR(r && r._$AB.nextSibling, i), s.length = i);
  }
  _$AR(t = this._$AA.nextSibling, s) {
    var r;
    for ((r = this._$AP) === null || r === void 0 || r.call(this, !1, !0, s); t && t !== this._$AB; ) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    var s;
    this._$AM === void 0 && (this._$Cp = t, (s = this._$AP) === null || s === void 0 || s.call(this, t));
  }
}
class G {
  constructor(t, s, r, i, o) {
    this.type = 1, this._$AH = y, this._$AN = void 0, this.element = t, this.name = s, this._$AM = i, this.options = o, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = y;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, s = this, r, i) {
    const o = this.strings;
    let a = !1;
    if (o === void 0)
      t = R(this, t, s, 0), a = !O(t) || t !== this._$AH && t !== W, a && (this._$AH = t);
    else {
      const c = t;
      let n, l;
      for (t = o[0], n = 0; n < o.length - 1; n++)
        l = R(this, c[r + n], s, n), l === W && (l = this._$AH[n]), a || (a = !O(l) || l !== this._$AH[n]), l === y ? t = y : t !== y && (t += (l ?? "") + o[n + 1]), this._$AH[n] = l;
    }
    a && !i && this.j(t);
  }
  j(t) {
    t === y ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ee extends G {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === y ? void 0 : t;
  }
}
const se = T ? T.emptyScript : "";
class re extends G {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== y ? this.element.setAttribute(this.name, se) : this.element.removeAttribute(this.name);
  }
}
class ie extends G {
  constructor(t, s, r, i, o) {
    super(t, s, r, i, o), this.type = 5;
  }
  _$AI(t, s = this) {
    var r;
    if ((t = (r = R(this, t, s, 0)) !== null && r !== void 0 ? r : y) === W)
      return;
    const i = this._$AH, o = t === y && i !== y || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, a = t !== y && (i === y || o);
    o && this.element.removeEventListener(this.name, this, i), a && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var s, r;
    typeof this._$AH == "function" ? this._$AH.call((r = (s = this.options) === null || s === void 0 ? void 0 : s.host) !== null && r !== void 0 ? r : this.element, t) : this._$AH.handleEvent(t);
  }
}
class oe {
  constructor(t, s, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = s, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    R(this, t);
  }
}
const bt = z.litHtmlPolyfillSupport;
bt == null || bt(U, L), ((J = z.litHtmlVersions) !== null && J !== void 0 ? J : z.litHtmlVersions = []).push("2.7.4");
const ae = (e, t, s) => {
  var r, i;
  const o = (r = s == null ? void 0 : s.renderBefore) !== null && r !== void 0 ? r : t;
  let a = o._$litPart$;
  if (a === void 0) {
    const c = (i = s == null ? void 0 : s.renderBefore) !== null && i !== void 0 ? i : null;
    o._$litPart$ = a = new L(t.insertBefore(M(), c), c, void 0, s ?? {});
  }
  return a._$AI(e), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Q, X;
class C extends x {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t, s;
    const r = super.createRenderRoot();
    return (t = (s = this.renderOptions).renderBefore) !== null && t !== void 0 || (s.renderBefore = r.firstChild), r;
  }
  update(t) {
    const s = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ae(s, this.renderRoot, this.renderOptions);
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
    return W;
  }
}
C.finalized = !0, C._$litElement$ = !0, (Q = globalThis.litElementHydrateSupport) === null || Q === void 0 || Q.call(globalThis, { LitElement: C });
const St = globalThis.litElementPolyfillSupport;
St == null || St({ LitElement: C });
((X = globalThis.litElementVersions) !== null && X !== void 0 ? X : globalThis.litElementVersions = []).push("3.3.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot = (e) => (t) => typeof t == "function" ? ((s, r) => (customElements.define(s, r), r))(e, t) : ((s, r) => {
  const { kind: i, elements: o } = r;
  return { kind: i, elements: o, finisher(a) {
    customElements.define(s, a);
  } };
})(e, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ne = (e, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? { ...t, finisher(s) {
  s.createProperty(t.key, e);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: t.key, initializer() {
  typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
}, finisher(s) {
  s.createProperty(t.key, e);
} }, ce = (e, t, s) => {
  t.constructor.createProperty(s, e);
};
function N(e) {
  return (t, s) => s !== void 0 ? ce(e, t, s) : ne(e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Rt(e) {
  return N({ ...e, state: !0 });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Y;
((Y = window.HTMLSlotElement) === null || Y === void 0 ? void 0 : Y.prototype.assignedElements) != null;
const Ht = 80, kt = [0, 69, 23], Mt = 60, Ot = [67, 160, 71], Ut = 40, It = [255, 166, 0], Lt = 20, Nt = [219, 68, 55], Bt = [94, 0, 0], Dt = !1;
var k = /* @__PURE__ */ ((e) => (e[e.WH = 0] = "WH", e[e.KWH = 1] = "KWH", e[e.DYNAMIC = 2] = "DYNAMIC", e))(k || {});
const Kt = 2, zt = 3, jt = "mdi:sleep", Vt = "mdi:lightning-bolt", Gt = "mdi:home-battery";
var le = Object.defineProperty, he = Object.getOwnPropertyDescriptor, at = (e, t, s, r) => {
  for (var i = r > 1 ? void 0 : r ? he(t, s) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (i = (r ? a(t, s, i) : a(i)) || i);
  return r && i && le(t, s, i), i;
};
let j = class extends C {
  constructor() {
    super(...arguments), this._counter = 0;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), clearInterval(this._interval);
  }
  secondsToDuration(e) {
    const t = (o) => o < 10 ? `0${o}` : o, s = Math.floor(e / 3600), r = Math.floor(e % 3600 / 60), i = Math.floor(e % 3600 % 60);
    return s > 0 ? `${s}:${t(r)}:${t(i)}` : r > 0 ? `${r}:${t(i)}` : i > 0 ? "" + i : "0";
  }
  render() {
    return this._counter ? this._counter <= 0 ? _`0` : _`${this.secondsToDuration(this._counter)}` : _`0`;
  }
  updated(e) {
    e.has("secs") && (clearInterval(this._interval), this.secs > 0 ? (this._counter = this.secs, this._countdownInterval()) : this._counter = 0), e.has("_counter") && this._counter && this._counter <= 0 && (clearInterval(this._interval), this._counter = 0);
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
at([
  N()
], j.prototype, "secs", 2);
at([
  N()
], j.prototype, "_counter", 2);
j = at([
  ot("givtcp-battery-card-countdown")
], j);
class D {
  static getDefaultConfig() {
    return {
      type: "custom:givtcp-battery-card",
      name: "Battery",
      soc_threshold_very_high: Ht,
      soc_threshold_high: Mt,
      soc_threshold_medium: Ut,
      soc_threshold_low: Lt,
      soc_threshold_very_high_colour: kt,
      soc_threshold_high_colour: Ot,
      soc_threshold_medium_colour: It,
      soc_threshold_low_colour: Nt,
      soc_threshold_very_low_colour: Bt,
      display_abs_power: Dt,
      display_type: Kt,
      display_dp: zt,
      icon_status_idle: jt,
      icon_status_charging: Vt,
      icon_status_discharging: Gt
    };
  }
  static migrateConfig(t, s) {
    const r = s ? { ...t } : t, i = {
      display_kwh: {
        newKey: "display_type",
        newVal: k.DYNAMIC
      }
    };
    for (const [o, a] of Object.entries(i))
      r[o] && (r[a.newKey] = r[o], a.newKey !== void 0 && (r[a.newKey] = a.newVal), delete r[o]);
    return r;
  }
}
var de = Object.defineProperty, ue = Object.getOwnPropertyDescriptor, nt = (e, t, s, r) => {
  for (var i = r > 1 ? void 0 : r ? ue(t, s) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (i = (r ? a(t, s, i) : a(i)) || i);
  return r && i && de(t, s, i), i;
};
let I = class extends C {
  constructor() {
    super(...arguments), this._computeLabelCallback = (e) => e.label ? e.label : e.name;
  }
  setConfig(e) {
    this._config = D.migrateConfig(e, !0);
  }
  get _getInvertorList() {
    return this.hass ? Object.keys(this.hass.states).filter((e) => e.includes("invertor_serial_number")) : [];
  }
  get _schema() {
    const e = D.getDefaultConfig();
    return [
      {
        name: "name",
        label: "Name",
        default: e.name,
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
        default: e.soc_threshold_very_high,
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
        default: e.soc_threshold_very_high_colour,
        selector: {
          color_rgb: {}
        }
      },
      {
        name: "soc_threshold_high",
        label: "SOC Threshold High",
        default: e.soc_threshold_high,
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
        default: e.soc_threshold_high_colour,
        selector: {
          color_rgb: {}
        }
      },
      {
        name: "soc_threshold_medium",
        label: "SOC Threshold Medium",
        default: e.soc_threshold_medium,
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
        default: e.soc_threshold_medium_colour,
        selector: {
          color_rgb: {}
        }
      },
      {
        name: "soc_threshold_low",
        label: "SOC Threshold Low",
        default: e.soc_threshold_low,
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
        default: e.soc_threshold_low_colour,
        selector: {
          color_rgb: {}
        }
      },
      {
        name: "soc_threshold_very_low_colour",
        label: "SOC Very Low Colour",
        default: e.soc_threshold_very_low_colour,
        selector: {
          color_rgb: {}
        }
      },
      {
        name: "display_abs_power",
        label: "Display power usage as absolute value",
        default: e.display_abs_power,
        selector: {
          boolean: {}
        }
      },
      {
        name: "display_type",
        label: "Display type (0: Wh | 1: kWh | 2: Dynamic)",
        default: e.display_type,
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
        default: e.display_dp,
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
        default: e.icon_status_charging,
        selector: {
          icon: {}
        }
      },
      {
        name: "icon_status_discharging",
        label: "Status Icon: Discharging",
        default: e.icon_status_discharging,
        selector: {
          icon: {}
        }
      },
      {
        name: "icon_status_idle",
        label: "Status Icon: Idle",
        default: e.icon_status_idle,
        selector: {
          icon: {}
        }
      }
    ];
  }
  render() {
    if (!this.hass || !this._config)
      return _``;
    const e = {
      ...D.getDefaultConfig(),
      ...this._config
    };
    return _`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${this._schema}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }
  _valueChanged(e) {
    const t = e.detail.value;
    Pt(this, "config-changed", { config: t });
  }
};
I.styles = Ct``;
nt([
  N()
], I.prototype, "hass", 2);
nt([
  Rt()
], I.prototype, "_config", 2);
I = nt([
  ot("givtcp-battery-card-editor")
], I);
const pe = Ct`
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
`, _e = "0.1.9";
var ye = Object.defineProperty, ge = Object.getOwnPropertyDescriptor, ct = (e, t, s, r) => {
  for (var i = r > 1 ? void 0 : r ? ge(t, s) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (i = (r ? a(t, s, i) : a(i)) || i);
  return r && i && ye(t, s, i), i;
};
window.customCards = window.customCards || [];
window.customCards.push({
  type: "givtcp-battery-card",
  name: "GivTCP Battery Card",
  description: "A card to display GivTCP battery info"
});
console.info(
  `%c GIVTCP-BATTERY-CARD %c ${_e}`,
  "color: green; font-weight: bold; background: black",
  "color: green; font-weight: bold;"
);
let V = class extends C {
  static async getConfigElement() {
    return document.createElement("givtcp-battery-card-editor");
  }
  static getStubConfig() {
    return {};
  }
  firstUpdated() {
    if (this != null && this.shadowRoot) {
      const e = this.shadowRoot.getElementById("gtpc-battery-detail-battery-power");
      this._attacheEventListener(e);
      const t = this.shadowRoot.getElementById("gtpc-battery-detail-soc-icon");
      this._attacheEventListener(t);
      const s = this.shadowRoot.getElementById("gtpc-battery-detail-soc-text");
      this._attacheEventListener(s);
      const r = this.shadowRoot.getElementById("gtpc-battery-detail-soc-kwh-text");
      this._attacheEventListener(r);
    }
  }
  _attacheEventListener(e) {
    e && e instanceof HTMLElement && e.addEventListener("click", (t) => {
      const s = e.getAttribute("data-entity-id");
      s && (t.stopPropagation(), Pt(this, "hass-more-info", { entityId: s }));
    });
  }
  // https://lit.dev/docs/components/properties/#accessors-custom
  setConfig(e) {
    if (!e)
      throw new Error("Invalid configuration");
    if (!e.entity)
      throw new Error("You need to define an invertor entity");
    this.config = {
      ...D.getDefaultConfig(),
      ...e
    };
  }
  // https://lit.dev/docs/components/lifecycle/#reactive-update-cycle-performing
  shouldUpdate(e) {
    return this.config ? this.customHasConfigOrEntityChanged(this, e) : !1;
  }
  customHasConfigOrEntityChanged(e, t) {
    var r, i;
    if (t.has("config"))
      return !0;
    const s = [
      "soc",
      "battery_power",
      "soc_kwh",
      "discharge_power",
      "charge_power"
    ];
    if ((r = e.config) != null && r.entity) {
      const o = t.get("hass");
      if (o) {
        let a = !1;
        for (const c of s)
          o.states[`sensor.${this._getSensorPrefix}${c}`] !== ((i = e.hass) == null ? void 0 : i.states[`sensor.${this._getSensorPrefix}${c}`]) && (a = !0);
        return a;
      }
      return !0;
    } else
      return !1;
  }
  getCardSize() {
    return this.clientHeight > 0 ? Math.ceil(this.clientHeight / 50) : 3;
  }
  setRawValues() {
    var v, g, S, m, $, w, lt;
    const e = this._getSocEntity, t = this._getBatteryPowerEntity, s = this._getSocKwhEntity, r = this._getDischargePowerEntity, i = this._getChargePowerEntity, o = this._getBatteryCapacityKwhEntity, a = this._getBatteryPowerReserve, c = {
      rawState: e.state,
      uom: (v = e.attributes) == null ? void 0 : v.unit_of_measurement,
      value: 0,
      display: 0,
      displayStr: ""
    }, n = {
      rawState: t.state,
      uom: (g = t.attributes) == null ? void 0 : g.unit_of_measurement,
      w: 0,
      kW: 0,
      display: 0,
      displayStr: "",
      displayUnit: ""
    }, l = {
      rawState: s.state,
      uom: (S = s.attributes) == null ? void 0 : S.unit_of_measurement,
      Wh: 0,
      kWh: 0,
      display: 0,
      displayStr: ""
    }, h = {
      rawState: r.state,
      uom: (m = r.attributes) == null ? void 0 : m.unit_of_measurement,
      w: 0,
      kW: 0,
      display: 0,
      displayStr: ""
    }, d = {
      rawState: i.state,
      uom: ($ = i.attributes) == null ? void 0 : $.unit_of_measurement,
      w: 0,
      kW: 0,
      display: 0,
      displayStr: ""
    }, u = {
      rawState: o.state,
      uom: (w = o.attributes) == null ? void 0 : w.unit_of_measurement,
      Wh: 0,
      kWh: 0,
      display: 0,
      displayStr: ""
    }, p = {
      rawState: a.state,
      uom: (lt = a.attributes) == null ? void 0 : lt.unit_of_measurement,
      value: 0,
      display: 0,
      displayStr: ""
    };
    return {
      socPercent: c,
      batteryPower: n,
      socEnergy: l,
      dischargePower: h,
      chargePower: d,
      batteryCapacity: u,
      batteryPowerReservePercent: p,
      batteryPowerReserveEnergy: {
        Wh: 0,
        kWh: 0,
        display: 0,
        displayStr: ""
      }
    };
  }
  calculateStats() {
    const e = this.setRawValues(), t = this.config.display_type !== void 0 ? this.config.display_type : Kt, s = this.config.display_abs_power !== void 0 ? this.config.display_abs_power : Dt;
    let r = parseInt(this.config.display_dp !== void 0 ? this.config.display_dp : zt, 10);
    r > 3 && (r = 3), r < 1 && (r = 1), e.socPercent.value = parseInt(e.socPercent.rawState, 10), e.socPercent.display = parseInt(e.socPercent.rawState, 10), e.socPercent.displayStr = `${parseInt(e.socPercent.rawState, 10)}%`;
    const i = parseInt(e.batteryPowerReservePercent.rawState, 10);
    e.batteryPowerReservePercent.value = i, e.batteryPowerReservePercent.display = i, e.batteryPowerReservePercent.displayStr = `${i}%`;
    const o = parseFloat(e.batteryCapacity.rawState), a = o * 1e3;
    e.batteryCapacity.kWh = o, e.batteryCapacity.Wh = a;
    const c = Math.round(a * (i / 100)), n = this.convertToKillo(c, 3);
    e.batteryPowerReserveEnergy.Wh = c, e.batteryPowerReserveEnergy.kWh = n;
    const l = e.batteryPower.uom === "W" ? parseInt(e.batteryPower.rawState, 10) : parseFloat(e.batteryPower.rawState), h = e.batteryPower.uom === "W" ? l : l * 1e3, d = e.batteryPower.uom === "W" ? this.convertToKillo(l, 3) : l;
    e.batteryPower.w = h, e.batteryPower.kW = d;
    const u = e.chargePower.uom === "W" ? parseInt(e.chargePower.rawState, 10) : parseFloat(e.chargePower.rawState), p = e.chargePower.uom === "W" ? u : u * 1e3, f = e.chargePower.uom === "W" ? this.convertToKillo(u, 3) : u;
    e.chargePower.w = p, e.chargePower.kW = f;
    const v = e.dischargePower.uom === "W" ? parseInt(e.dischargePower.rawState, 10) : parseFloat(e.dischargePower.rawState), g = e.dischargePower.uom === "W" ? v : v * 1e3, S = e.dischargePower.uom === "W" ? this.convertToKillo(v, 3) : v;
    e.dischargePower.w = g, e.dischargePower.kW = S;
    const m = e.socEnergy.uom === "Wh" ? parseInt(e.socEnergy.rawState, 10) : parseFloat(e.socEnergy.rawState), $ = e.socEnergy.uom === "Wh" ? m : m * 1e3, w = e.socEnergy.uom === "Wh" ? this.convertToKillo(m, 3) : m;
    switch (e.socEnergy.Wh = $, e.socEnergy.kWh = w, t) {
      case k.WH:
      default:
        e.batteryCapacity.display = a, e.batteryCapacity.displayStr = `${a} Wh`, e.batteryPower.display = s ? Math.abs(h) : h, e.batteryPower.displayStr = `${s ? Math.abs(h) : h} W`, e.chargePower.display = p, e.chargePower.displayStr = `${p} W`, e.dischargePower.display = g, e.dischargePower.displayStr = `${g} W`, e.socEnergy.display = $, e.socEnergy.displayStr = `${$} Wh`, e.batteryPowerReserveEnergy.display = c, e.batteryPowerReserveEnergy.displayStr = `${c} Wh`, e.batteryPower.displayUnit = "W";
        break;
      case k.KWH:
        e.batteryCapacity.display = o, e.batteryCapacity.displayStr = `${o} kWh`, e.batteryPower.display = s ? this.convertToKillo(Math.abs(h), r) : this.convertToKillo(h, r), e.batteryPower.displayStr = `${s ? this.convertToKillo(Math.abs(h), r) : this.convertToKillo(h, r)} kW`, e.chargePower.display = this.convertToKillo(p, r), e.chargePower.displayStr = `${this.convertToKillo(p, r)} kW`, e.dischargePower.display = this.convertToKillo(g, r), e.dischargePower.displayStr = `${this.convertToKillo(g, r)} kW`, e.socEnergy.display = w, e.socEnergy.displayStr = `${w} kWh`, e.batteryPowerReserveEnergy.display = this.convertToKillo(c, r), e.batteryPowerReserveEnergy.displayStr = `${this.convertToKillo(c, r)} kWh`, e.batteryPower.displayUnit = "kW";
        break;
      case k.DYNAMIC:
        e.batteryCapacity.display = Math.abs(a) >= 1e3 ? o : a, e.batteryCapacity.displayStr = Math.abs(a) >= 1e3 ? `${o} kWh` : `${a} Wh`, e.batteryPower.display = Math.abs(h) >= 1e3 ? s ? this.convertToKillo(Math.abs(h), r) : this.convertToKillo(h, r) : s ? Math.abs(h) : h, e.batteryPower.displayStr = Math.abs(h) >= 1e3 ? `${s ? this.convertToKillo(Math.abs(h), r) : this.convertToKillo(h, r)} kW` : `${s ? Math.abs(h) : h} W`, e.chargePower.display = Math.abs(p) >= 1e3 ? this.convertToKillo(p, r) : p, e.chargePower.displayStr = Math.abs(p) >= 1e3 ? `${this.convertToKillo(p, r)} kW` : `${p} W`, e.dischargePower.display = Math.abs(g) >= 1e3 ? this.convertToKillo(g, r) : g, e.dischargePower.displayStr = Math.abs(g) >= 1e3 ? `${this.convertToKillo(g, r)} kW` : `${g} W`, e.batteryPower.displayUnit = Math.abs(h) >= 1e3 ? "kW" : "W", e.batteryPowerReserveEnergy.display = Math.abs(c) >= 1e3 ? this.convertToKillo(c, r) : c, e.batteryPowerReserveEnergy.displayStr = Math.abs(c) >= 1e3 ? `${this.convertToKillo(c, r)} kWh` : `${c} Wh`, e.socEnergy.display = Math.abs($) >= 1e3 ? w : $, e.socEnergy.displayStr = Math.abs($) >= 1e3 ? `${w} kWh` : `${$} Wh`;
        break;
    }
    this.calculatedStates = e;
  }
  renderReserveAndCapacity() {
    return _`
      <div class="status">
        <span class="status-text"> Capacity: ${this.calculatedStates.batteryCapacity.displayStr} | Reserve: ${this.calculatedStates.batteryPowerReserveEnergy.displayStr} (${this.calculatedStates.batteryPowerReservePercent.displayStr}) </span>
      </div>
    `;
  }
  renderPowerUsage() {
    let e = "", t = _``;
    return this.calculatedStates.batteryPower.w > 0 && (e = "battery-power-out", t = _`<ha-icon icon="mdi:export"></ha-icon>`), this.calculatedStates.batteryPower.w < 0 && (e = "battery-power-in", t = _`<ha-icon icon="mdi:import"></ha-icon>`), _`
      <div 
          class="icon-subtitle-small"
          id="gtpc-battery-detail-battery-power"
          data-entity-id="${`sensor.${this._getSensorPrefix}battery_power`}"
      >
        ${t}
        <span class="${e}">
          ${this.calculatedStates.batteryPower.display} 
        </span>
        ${this.calculatedStates.batteryPower.displayUnit}
      </div>
    `;
  }
  renderStats() {
    const e = [], t = this.calculatedStates.batteryPower.w, s = _`<ha-icon icon="mdi:timer-sand" style="--mdc-icon-size: 17px;"></ha-icon>`, r = _`<ha-icon icon="mdi:clock-outline" style="--mdc-icon-size: 17px;"></ha-icon>`;
    let i = _`${s} No load`, o = 0, a = _`${r} No Load`, c = Math.round(Date.now() / 1e3);
    t > 0 && (i = _`${s} until ${this.calculatedStates.batteryPowerReservePercent.displayStr}`, o = this._getEstimatedTimeLeft, a = _`${r} at ${this.calculatedStates.batteryPowerReservePercent.displayStr}`, c = this._getEstimatedTimeAtReserve), t < 0 && (i = _`${s} until 100%`, o = this._getEstimatedChargeTime, a = _`${r} at 100%`, c = this._getEstimatedTimeAtFull);
    let n = _`--:--:--`;
    t !== 0 && (n = _`
        <givtcp-battery-card-countdown 
            secs=${o}
        ></givtcp-battery-card-countdown>
      `);
    const l = _`
      <div class="stats-block">
        <span class="stats-value"> ${n} </span>
        <div class="stats-subtitle">${i}</div>
      </div>
    `;
    e.push(l);
    let h = "--:--";
    if (t !== 0) {
      const u = new Date(c * 1e3), p = u.toLocaleString(
        "en-GB",
        {
          hour: "numeric",
          minute: "numeric",
          hour12: !1
        }
      );
      h = `${p}`, o > 86400 && (h = `${u.toLocaleString(
        "en-GB",
        {
          day: "numeric",
          month: "numeric"
        }
      )} ${p}`);
    }
    const d = _`
      <div class="stats-block">
        <span class="stats-value">${h}</span>
        <div class="stats-subtitle">${a}</div>
      </div>
    `;
    return e.push(d), e;
  }
  renderNameAndStatus() {
    const e = this._getBatteryStatus.toUpperCase();
    return _` <div class="battery-name">${this.config.name || "Battery"} | ${e}</div> `;
  }
  getBatteryIcon() {
    const e = this.calculatedStates.socPercent.value, t = "";
    if (e === 100)
      return "mdi:battery";
    if (e < 10)
      return `mdi:battery${t}-outline`;
    const s = Math.floor(e / 10) * 10;
    return `mdi:battery${t}-${s}`;
  }
  getBatteryStatusIcon() {
    var r, i, o;
    const e = (r = this.config) != null && r.icon_status_charging ? this.config.icon_status_charging : Vt, t = (i = this.config) != null && i.icon_status_discharging ? this.config.icon_status_discharging : Gt, s = (o = this.config) != null && o.icon_status_idle ? this.config.icon_status_idle : jt;
    switch (this._getBatteryStatus) {
      default:
        return "";
      case "charging":
        return e;
      case "discharging":
        return t;
      case "idle":
        return s;
    }
  }
  getBatteryColour() {
    var h, d, u, p, f, v, g, S, m;
    const e = this.calculatedStates.socPercent.value, t = (h = this.config) != null && h.soc_threshold_very_high ? this.config.soc_threshold_very_high : Ht, s = (d = this.config) != null && d.soc_threshold_high ? this.config.soc_threshold_high : Mt, r = (u = this.config) != null && u.soc_threshold_medium ? this.config.soc_threshold_medium : Ut, i = (p = this.config) != null && p.soc_threshold_low ? this.config.soc_threshold_low : Lt, o = (f = this.config) != null && f.soc_threshold_very_high_colour ? this.config.soc_threshold_very_high_colour : kt, a = (v = this.config) != null && v.soc_threshold_high_colour ? this.config.soc_threshold_high_colour : Ot, c = (g = this.config) != null && g.soc_threshold_medium_colour ? this.config.soc_threshold_medium_colour : It, n = (S = this.config) != null && S.soc_threshold_low_colour ? this.config.soc_threshold_low_colour : Nt, l = (m = this.config) != null && m.soc_threshold_very_low_colour ? this.config.soc_threshold_very_low_colour : Bt;
    return e >= t ? `${o[0]}, ${o[1]}, ${o[2]}` : e >= s ? `${a[0]}, ${a[1]}, ${a[2]}` : e >= r ? `${c[0]}, ${c[1]}, ${c[2]}` : e >= i ? `${n[0]}, ${n[1]}, ${n[2]}` : `${l[0]}, ${l[1]}, ${l[2]}`;
  }
  convertToKillo(e, t) {
    const s = 10 ** t;
    if (e !== 0) {
      const r = e / 1e3;
      return Math.round((r + Number.EPSILON) * s) / s;
    }
    return 0;
  }
  // https://lit.dev/docs/components/rendering/
  render() {
    var r;
    if (!((r = this.config) != null && r.entity))
      return _``;
    this.calculateStats();
    const e = this.getBatteryIcon(), t = this.getBatteryStatusIcon(), s = this.getBatteryColour();
    return _`
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
                      icon="${e}"
                      style="color:rgb(${s});--mdc-icon-size: 100px;"
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
                  ${this.calculatedStates.socEnergy.displayStr} 
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
    let e = "", t = "";
    const s = /sensor\.([\w]+)_invertor_serial_number/g.exec(this.config.entity);
    s && (e = s[1]);
    const r = /sensor\.[\w]+_invertor_serial_number_(\d+)/g.exec(this.config.entity);
    return r && (t = "_" + r[1]), `${e}_${t}`;
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
    const e = parseInt(this._getBatteryPowerEntity.state, 10);
    let t = "";
    return e > 0 ? t = "discharging" : e < 0 ? t = "charging" : t = "idle", t;
  }
  get _getEstimatedTimeLeft() {
    let e = 0;
    const t = this.calculatedStates.socEnergy.Wh, s = this.calculatedStates.batteryCapacity.Wh, r = this.calculatedStates.batteryPowerReservePercent.value / 100, i = this.calculatedStates.dischargePower.w, o = s * r, a = t - o;
    if (a > 0 && i > 0) {
      const c = a / i;
      e = Math.floor(c * 3600);
    }
    return e;
  }
  get _getEstimatedChargeTime() {
    let e = 0;
    const t = this.calculatedStates.chargePower.w, s = this.calculatedStates.socEnergy.Wh, r = this.calculatedStates.batteryCapacity.Wh;
    if (t > 0) {
      const o = (r - s) / t;
      e = Math.floor(o * 3600);
    }
    return e;
  }
  get _getEstimatedTimeAtReserve() {
    return Math.round(Date.now() / 1e3) + this._getEstimatedTimeLeft;
  }
  get _getEstimatedTimeAtFull() {
    return Math.round(Date.now() / 1e3) + this._getEstimatedChargeTime;
  }
  // https://lit.dev/docs/components/styles/
  static get styles() {
    return pe;
  }
};
ct([
  N()
], V.prototype, "hass", 2);
ct([
  Rt()
], V.prototype, "config", 2);
V = ct([
  ot("givtcp-battery-card")
], V);
export {
  V as GivTCPBatteryCard
};
