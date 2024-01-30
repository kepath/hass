var _t, pt;
(function(e) {
  e.language = "language", e.system = "system", e.comma_decimal = "comma_decimal", e.decimal_comma = "decimal_comma", e.space_comma = "space_comma", e.none = "none";
})(_t || (_t = {})), function(e) {
  e.language = "language", e.system = "system", e.am_pm = "12", e.twenty_four = "24";
}(pt || (pt = {}));
var xt = function(e, t, s, r) {
  r = r || {}, s = s ?? {};
  var i = new Event(t, { bubbles: r.bubbles === void 0 || r.bubbles, cancelable: !!r.cancelable, composed: r.composed === void 0 || r.composed });
  return i.detail = s, e.dispatchEvent(i), i;
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const N = window, nt = N.ShadowRoot && (N.ShadyCSS === void 0 || N.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ct = Symbol(), gt = /* @__PURE__ */ new WeakMap();
let Pt = class {
  constructor(t, s, r) {
    if (this._$cssResult$ = !0, r !== ct)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = s;
  }
  get styleSheet() {
    let t = this.o;
    const s = this.t;
    if (nt && t === void 0) {
      const r = s !== void 0 && s.length === 1;
      r && (t = gt.get(s)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && gt.set(s, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Qt = (e) => new Pt(typeof e == "string" ? e : e + "", void 0, ct), Ht = (e, ...t) => {
  const s = e.length === 1 ? e[0] : t.reduce((r, i, o) => r + ((a) => {
    if (a._$cssResult$ === !0)
      return a.cssText;
    if (typeof a == "number")
      return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + e[o + 1], e[0]);
  return new Pt(s, e, ct);
}, Xt = (e, t) => {
  nt ? e.adoptedStyleSheets = t.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet) : t.forEach((s) => {
    const r = document.createElement("style"), i = N.litNonce;
    i !== void 0 && r.setAttribute("nonce", i), r.textContent = s.cssText, e.appendChild(r);
  });
}, vt = nt ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let s = "";
  for (const r of t.cssRules)
    s += r.cssText;
  return Qt(s);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var q;
const G = window, ft = G.trustedTypes, te = ft ? ft.emptyScript : "", yt = G.reactiveElementPolyfillSupport, st = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? te : null;
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
} }, Tt = (e, t) => t !== e && (t == t || e == e), J = { attribute: !0, type: String, converter: st, reflect: !1, hasChanged: Tt }, rt = "finalized";
let E = class extends HTMLElement {
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
  static createProperty(t, s = J) {
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
    return this.elementProperties.get(t) || J;
  }
  static finalize() {
    if (this.hasOwnProperty(rt))
      return !1;
    this[rt] = !0;
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
        s.unshift(vt(i));
    } else
      t !== void 0 && s.push(vt(t));
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
    return Xt(s, this.constructor.elementStyles), s;
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
  _$EO(t, s, r = J) {
    var i;
    const o = this.constructor._$Ep(t, r);
    if (o !== void 0 && r.reflect === !0) {
      const a = (((i = r.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? r.converter : st).toAttribute(s, r.type);
      this._$El = t, a == null ? this.removeAttribute(o) : this.setAttribute(o, a), this._$El = null;
    }
  }
  _$AK(t, s) {
    var r;
    const i = this.constructor, o = i._$Ev.get(t);
    if (o !== void 0 && this._$El !== o) {
      const a = i.getPropertyOptions(o), l = typeof a.converter == "function" ? { fromAttribute: a.converter } : ((r = a.converter) === null || r === void 0 ? void 0 : r.fromAttribute) !== void 0 ? a.converter : st;
      this._$El = o, this[o] = l.fromAttribute(s, a.type), this._$El = null;
    }
  }
  requestUpdate(t, s, r) {
    let i = !0;
    t !== void 0 && (((r = r || this.constructor.getPropertyOptions(t)).hasChanged || Tt)(this[t], s) ? (this._$AL.has(t) || this._$AL.set(t, s), r.reflect === !0 && this._$El !== t && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t, r))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
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
E[rt] = !0, E.elementProperties = /* @__PURE__ */ new Map(), E.elementStyles = [], E.shadowRootOptions = { mode: "open" }, yt == null || yt({ ReactiveElement: E }), ((q = G.reactiveElementVersions) !== null && q !== void 0 ? q : G.reactiveElementVersions = []).push("1.6.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Z;
const z = window, x = z.trustedTypes, mt = x ? x.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, it = "$lit$", b = `lit$${(Math.random() + "").slice(9)}$`, Dt = "?" + b, ee = `<${Dt}>`, A = document, M = () => A.createComment(""), O = (e) => e === null || typeof e != "object" && typeof e != "function", Rt = Array.isArray, se = (e) => Rt(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", Q = `[ 	
\f\r]`, k = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, bt = /-->/g, $t = />/g, w = RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), wt = /'/g, St = /"/g, Ut = /^(?:script|style|textarea|title)$/i, re = (e) => (t, ...s) => ({ _$litType$: e, strings: t, values: s }), u = re(1), P = Symbol.for("lit-noChange"), g = Symbol.for("lit-nothing"), Ct = /* @__PURE__ */ new WeakMap(), S = A.createTreeWalker(A, 129, null, !1), ie = (e, t) => {
  const s = e.length - 1, r = [];
  let i, o = t === 2 ? "<svg>" : "", a = k;
  for (let c = 0; c < s; c++) {
    const n = e[c];
    let _, h, d = -1, p = 0;
    for (; p < n.length && (a.lastIndex = p, h = a.exec(n), h !== null); )
      p = a.lastIndex, a === k ? h[1] === "!--" ? a = bt : h[1] !== void 0 ? a = $t : h[2] !== void 0 ? (Ut.test(h[2]) && (i = RegExp("</" + h[2], "g")), a = w) : h[3] !== void 0 && (a = w) : a === w ? h[0] === ">" ? (a = i ?? k, d = -1) : h[1] === void 0 ? d = -2 : (d = a.lastIndex - h[2].length, _ = h[1], a = h[3] === void 0 ? w : h[3] === '"' ? St : wt) : a === St || a === wt ? a = w : a === bt || a === $t ? a = k : (a = w, i = void 0);
    const v = a === w && e[c + 1].startsWith("/>") ? " " : "";
    o += a === k ? n + ee : d >= 0 ? (r.push(_), n.slice(0, d) + it + n.slice(d) + b + v) : n + b + (d === -2 ? (r.push(void 0), c) : v);
  }
  const l = o + (e[s] || "<?>") + (t === 2 ? "</svg>" : "");
  if (!Array.isArray(e) || !e.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [mt !== void 0 ? mt.createHTML(l) : l, r];
};
class I {
  constructor({ strings: t, _$litType$: s }, r) {
    let i;
    this.parts = [];
    let o = 0, a = 0;
    const l = t.length - 1, c = this.parts, [n, _] = ie(t, s);
    if (this.el = I.createElement(n, r), S.currentNode = this.el.content, s === 2) {
      const h = this.el.content, d = h.firstChild;
      d.remove(), h.append(...d.childNodes);
    }
    for (; (i = S.nextNode()) !== null && c.length < l; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const h = [];
          for (const d of i.getAttributeNames())
            if (d.endsWith(it) || d.startsWith(b)) {
              const p = _[a++];
              if (h.push(d), p !== void 0) {
                const v = i.getAttribute(p.toLowerCase() + it).split(b), y = /([.?@])?(.*)/.exec(p);
                c.push({ type: 1, index: o, name: y[2], strings: v, ctor: y[1] === "." ? ae : y[1] === "?" ? ce : y[1] === "@" ? le : F });
              } else
                c.push({ type: 6, index: o });
            }
          for (const d of h)
            i.removeAttribute(d);
        }
        if (Ut.test(i.tagName)) {
          const h = i.textContent.split(b), d = h.length - 1;
          if (d > 0) {
            i.textContent = x ? x.emptyScript : "";
            for (let p = 0; p < d; p++)
              i.append(h[p], M()), S.nextNode(), c.push({ type: 2, index: ++o });
            i.append(h[d], M());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === Dt)
          c.push({ type: 2, index: o });
        else {
          let h = -1;
          for (; (h = i.data.indexOf(b, h + 1)) !== -1; )
            c.push({ type: 7, index: o }), h += b.length - 1;
        }
      o++;
    }
  }
  static createElement(t, s) {
    const r = A.createElement("template");
    return r.innerHTML = t, r;
  }
}
function H(e, t, s = e, r) {
  var i, o, a, l;
  if (t === P)
    return t;
  let c = r !== void 0 ? (i = s._$Co) === null || i === void 0 ? void 0 : i[r] : s._$Cl;
  const n = O(t) ? void 0 : t._$litDirective$;
  return (c == null ? void 0 : c.constructor) !== n && ((o = c == null ? void 0 : c._$AO) === null || o === void 0 || o.call(c, !1), n === void 0 ? c = void 0 : (c = new n(e), c._$AT(e, s, r)), r !== void 0 ? ((a = (l = s)._$Co) !== null && a !== void 0 ? a : l._$Co = [])[r] = c : s._$Cl = c), c !== void 0 && (t = H(e, c._$AS(e, t.values), c, r)), t;
}
class oe {
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
    S.currentNode = o;
    let a = S.nextNode(), l = 0, c = 0, n = i[0];
    for (; n !== void 0; ) {
      if (l === n.index) {
        let _;
        n.type === 2 ? _ = new B(a, a.nextSibling, this, t) : n.type === 1 ? _ = new n.ctor(a, n.name, n.strings, this, t) : n.type === 6 && (_ = new he(a, this, t)), this._$AV.push(_), n = i[++c];
      }
      l !== (n == null ? void 0 : n.index) && (a = S.nextNode(), l++);
    }
    return S.currentNode = A, o;
  }
  v(t) {
    let s = 0;
    for (const r of this._$AV)
      r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, s), s += r.strings.length - 2) : r._$AI(t[s])), s++;
  }
}
class B {
  constructor(t, s, r, i) {
    var o;
    this.type = 2, this._$AH = g, this._$AN = void 0, this._$AA = t, this._$AB = s, this._$AM = r, this.options = i, this._$Cp = (o = i == null ? void 0 : i.isConnected) === null || o === void 0 || o;
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
    t = H(this, t, s), O(t) ? t === g || t == null || t === "" ? (this._$AH !== g && this._$AR(), this._$AH = g) : t !== this._$AH && t !== P && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : se(t) ? this.T(t) : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
  }
  _(t) {
    this._$AH !== g && O(this._$AH) ? this._$AA.nextSibling.data = t : this.$(A.createTextNode(t)), this._$AH = t;
  }
  g(t) {
    var s;
    const { values: r, _$litType$: i } = t, o = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = I.createElement(i.h, this.options)), i);
    if (((s = this._$AH) === null || s === void 0 ? void 0 : s._$AD) === o)
      this._$AH.v(r);
    else {
      const a = new oe(o, this), l = a.u(this.options);
      a.v(r), this.$(l), this._$AH = a;
    }
  }
  _$AC(t) {
    let s = Ct.get(t.strings);
    return s === void 0 && Ct.set(t.strings, s = new I(t)), s;
  }
  T(t) {
    Rt(this._$AH) || (this._$AH = [], this._$AR());
    const s = this._$AH;
    let r, i = 0;
    for (const o of t)
      i === s.length ? s.push(r = new B(this.k(M()), this.k(M()), this, this.options)) : r = s[i], r._$AI(o), i++;
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
class F {
  constructor(t, s, r, i, o) {
    this.type = 1, this._$AH = g, this._$AN = void 0, this.element = t, this.name = s, this._$AM = i, this.options = o, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = g;
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
      t = H(this, t, s, 0), a = !O(t) || t !== this._$AH && t !== P, a && (this._$AH = t);
    else {
      const l = t;
      let c, n;
      for (t = o[0], c = 0; c < o.length - 1; c++)
        n = H(this, l[r + c], s, c), n === P && (n = this._$AH[c]), a || (a = !O(n) || n !== this._$AH[c]), n === g ? t = g : t !== g && (t += (n ?? "") + o[c + 1]), this._$AH[c] = n;
    }
    a && !i && this.j(t);
  }
  j(t) {
    t === g ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ae extends F {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === g ? void 0 : t;
  }
}
const ne = x ? x.emptyScript : "";
class ce extends F {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== g ? this.element.setAttribute(this.name, ne) : this.element.removeAttribute(this.name);
  }
}
class le extends F {
  constructor(t, s, r, i, o) {
    super(t, s, r, i, o), this.type = 5;
  }
  _$AI(t, s = this) {
    var r;
    if ((t = (r = H(this, t, s, 0)) !== null && r !== void 0 ? r : g) === P)
      return;
    const i = this._$AH, o = t === g && i !== g || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, a = t !== g && (i === g || o);
    o && this.element.removeEventListener(this.name, this, i), a && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var s, r;
    typeof this._$AH == "function" ? this._$AH.call((r = (s = this.options) === null || s === void 0 ? void 0 : s.host) !== null && r !== void 0 ? r : this.element, t) : this._$AH.handleEvent(t);
  }
}
class he {
  constructor(t, s, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = s, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    H(this, t);
  }
}
const At = z.litHtmlPolyfillSupport;
At == null || At(I, B), ((Z = z.litHtmlVersions) !== null && Z !== void 0 ? Z : z.litHtmlVersions = []).push("2.7.4");
const de = (e, t, s) => {
  var r, i;
  const o = (r = s == null ? void 0 : s.renderBefore) !== null && r !== void 0 ? r : t;
  let a = o._$litPart$;
  if (a === void 0) {
    const l = (i = s == null ? void 0 : s.renderBefore) !== null && i !== void 0 ? i : null;
    o._$litPart$ = a = new B(t.insertBefore(M(), l), l, void 0, s ?? {});
  }
  return a._$AI(e), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var X, tt;
class C extends E {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = de(s, this.renderRoot, this.renderOptions);
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
    return P;
  }
}
C.finalized = !0, C._$litElement$ = !0, (X = globalThis.litElementHydrateSupport) === null || X === void 0 || X.call(globalThis, { LitElement: C });
const Et = globalThis.litElementPolyfillSupport;
Et == null || Et({ LitElement: C });
((tt = globalThis.litElementVersions) !== null && tt !== void 0 ? tt : globalThis.litElementVersions = []).push("3.3.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt = (e) => (t) => typeof t == "function" ? ((s, r) => (customElements.define(s, r), r))(e, t) : ((s, r) => {
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
const ue = (e, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? { ...t, finisher(s) {
  s.createProperty(t.key, e);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: t.key, initializer() {
  typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
}, finisher(s) {
  s.createProperty(t.key, e);
} }, _e = (e, t, s) => {
  t.constructor.createProperty(s, e);
};
function L(e) {
  return (t, s) => s !== void 0 ? _e(e, t, s) : ue(e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ht(e) {
  return L({ ...e, state: !0 });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var et;
((et = window.HTMLSlotElement) === null || et === void 0 ? void 0 : et.prototype.assignedElements) != null;
const kt = 80, Mt = [0, 69, 23], Ot = 60, It = [67, 160, 71], Bt = 40, Lt = [255, 166, 0], Wt = 20, Nt = [219, 68, 55], Kt = [94, 0, 0], Gt = !1;
var $ = /* @__PURE__ */ ((e) => (e[e.WH = 0] = "WH", e[e.KWH = 1] = "KWH", e[e.DYNAMIC = 2] = "DYNAMIC", e))($ || {});
const zt = 2, jt = 3, Vt = "mdi:sleep", Ft = "mdi:lightning-bolt", Yt = "mdi:home-battery", qt = !0, ot = !1, at = 100, Jt = !1, Zt = !0, f = {
  W: "W",
  KW: "kW",
  WH: "Wh",
  KWH: "kWh"
};
var pe = Object.defineProperty, ge = Object.getOwnPropertyDescriptor, dt = (e, t, s, r) => {
  for (var i = r > 1 ? void 0 : r ? ge(t, s) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (i = (r ? a(t, s, i) : a(i)) || i);
  return r && i && pe(t, s, i), i;
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
    return this._counter ? this._counter <= 0 ? u`0` : u`${this.secondsToDuration(this._counter)}` : u`0`;
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
dt([
  L()
], j.prototype, "secs", 2);
dt([
  L()
], j.prototype, "_counter", 2);
j = dt([
  lt("givtcp-battery-card-countdown")
], j);
class K {
  static getDefaultConfig() {
    return {
      type: "custom:givtcp-battery-card",
      name: "Battery",
      soc_threshold_very_high: kt,
      soc_threshold_high: Ot,
      soc_threshold_medium: Bt,
      soc_threshold_low: Wt,
      soc_threshold_very_high_colour: Mt,
      soc_threshold_high_colour: It,
      soc_threshold_medium_colour: Lt,
      soc_threshold_low_colour: Nt,
      soc_threshold_very_low_colour: Kt,
      display_abs_power: Gt,
      display_type: zt,
      display_dp: jt,
      icon_status_idle: Vt,
      icon_status_charging: Ft,
      icon_status_discharging: Yt,
      display_battery_rates: qt,
      use_custom_dod: ot,
      custom_dod: at,
      calculate_reserve_from_dod: Jt,
      display_custom_dod_stats: Zt
    };
  }
  static migrateConfig(t, s) {
    const r = s ? { ...t } : t, i = {
      display_kwh: {
        newKey: "display_type",
        newVal: $.DYNAMIC
      }
    };
    for (const [o, a] of Object.entries(i))
      r[o] && (r[a.newKey] = r[o], a.newKey !== void 0 && (r[a.newKey] = a.newVal), delete r[o]);
    return r;
  }
}
const ve = (e, t) => [
  {
    name: "name",
    label: "Name",
    default: t.name,
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
        include_entities: e
      }
    }
  }
], m = (e) => ({
  selector: {
    constant: {
      label: e
    }
  }
}), W = (e, t, s) => ({
  type: "grid",
  schema: [
    {
      name: `soc_threshold_${e}`,
      label: "Threshold",
      default: t,
      selector: {
        number: {
          mode: "box",
          min: 0,
          max: 100,
          unit_of_measurement: "%"
        }
      }
    },
    {
      name: `soc_threshold_${e}_colour`,
      label: "Colour",
      default: s,
      selector: {
        color_rgb: {}
      }
    }
  ]
}), fe = (e, t) => [
  m("SOC Thresholds & Colours for Battery Icon"),
  m("Very High"),
  W("very_high", e.soc_threshold_very_high, e.soc_threshold_very_high_colour),
  m("High"),
  W("high", e.soc_threshold_high, e.soc_threshold_high_colour),
  m("Medium"),
  W("medium", e.soc_threshold_medium, e.soc_threshold_medium_colour),
  m("Low"),
  W("low", e.soc_threshold_low, e.soc_threshold_low_colour),
  m(`Very Low (< ${t.soc_threshold_low || e.soc_threshold_low}%)`),
  {
    name: "soc_threshold_very_low_colour",
    label: "Colour",
    default: e.soc_threshold_very_low_colour,
    selector: {
      color_rgb: {}
    }
  }
], ye = (e) => [
  m("Power/Capacity"),
  {
    type: "grid",
    schema: [
      {
        name: "display_type",
        label: "Display type",
        default: e.display_type,
        selector: {
          select: {
            options: [
              { value: $.WH, label: "Wh/W" },
              { value: $.KWH, label: "kWh/kW" },
              { value: $.DYNAMIC, label: "Dynamic" }
            ]
          }
        }
      },
      {
        name: "display_dp",
        label: "Decimal places",
        default: e.display_dp,
        selector: {
          number: {
            mode: "box",
            min: 1,
            max: 3
          }
        }
      }
    ]
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
    name: "display_battery_rates",
    label: "Display data about battery charge/discharge rates",
    default: e.display_battery_rates,
    selector: {
      boolean: {}
    }
  },
  m("Icons"),
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
], me = (e, t) => {
  let s = [
    m("Custom DoD to override GivTCP values"),
    {
      name: "use_custom_dod",
      label: "Use custom DoD",
      default: e.use_custom_dod,
      selector: {
        boolean: {}
      }
    }
  ];
  return t.use_custom_dod && (s = [
    ...s,
    {
      name: "custom_dod",
      label: "DoD Percent",
      default: e.custom_dod,
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
      name: "display_custom_dod_stats",
      label: "Display DOD stats",
      default: e.display_custom_dod_stats,
      selector: {
        boolean: {}
      }
    },
    {
      name: "calculate_reserve_from_dod",
      label: "Use custom DoD to calculate battery reserve",
      default: e.calculate_reserve_from_dod,
      selector: {
        boolean: {}
      }
    }
  ]), s;
};
var be = Object.defineProperty, $e = Object.getOwnPropertyDescriptor, Y = (e, t, s, r) => {
  for (var i = r > 1 ? void 0 : r ? $e(t, s) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (i = (r ? a(t, s, i) : a(i)) || i);
  return r && i && be(t, s, i), i;
};
let T = class extends C {
  constructor() {
    super(), this._computeLabelCallback = (e) => e.label ? e.label : e.name, this._currentTab = 0;
  }
  setConfig(e) {
    this._config = K.migrateConfig(e, !0);
  }
  get _getInvertorList() {
    return this.hass ? Object.keys(this.hass.states).filter((e) => e.includes("invertor_serial_number")) : [];
  }
  get _schema() {
    const e = K.getDefaultConfig();
    switch (this._currentTab) {
      case 0:
      default:
        return ve(this._getInvertorList, e);
      case 1:
        return fe(e, this._config);
      case 2:
        return ye(e);
      case 3:
        return me(e, this._config);
    }
  }
  _handleTabChanged(e) {
    e.preventDefault();
    const t = e.detail.selected;
    this._currentTab = t;
  }
  render() {
    if (!this.hass || !this._config)
      return u``;
    const e = {
      ...K.getDefaultConfig(),
      ...this._config
    };
    return u`
        <ha-tabs scrollable .selected=${this._currentTab} @iron-activate=${this._handleTabChanged}>
          <paper-tab>General</paper-tab>
          <paper-tab>SOC</paper-tab>
          <paper-tab>Display</paper-tab>
          <paper-tab>DOD</paper-tab>
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
  _valueChanged(e) {
    const t = e.detail.value;
    xt(this, "config-changed", { config: t });
  }
};
T.styles = Ht``;
Y([
  L()
], T.prototype, "hass", 2);
Y([
  ht()
], T.prototype, "_config", 2);
Y([
  ht()
], T.prototype, "_currentTab", 2);
T = Y([
  lt("givtcp-battery-card-editor")
], T);
const we = Ht`
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

`, Se = "0.2.2";
var Ce = Object.defineProperty, Ae = Object.getOwnPropertyDescriptor, ut = (e, t, s, r) => {
  for (var i = r > 1 ? void 0 : r ? Ae(t, s) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (i = (r ? a(t, s, i) : a(i)) || i);
  return r && i && Ce(t, s, i), i;
};
window.customCards = window.customCards || [];
window.customCards.push({
  type: "givtcp-battery-card",
  name: "GivTCP Battery Card",
  description: "A card to display GivTCP battery info"
});
console.info(
  `%c GIVTCP-BATTERY-CARD %c ${Se}`,
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
      s && (t.stopPropagation(), xt(this, "hass-more-info", { entityId: s }));
    });
  }
  // https://lit.dev/docs/components/properties/#accessors-custom
  setConfig(e) {
    if (!e)
      throw new Error("Invalid configuration");
    if (!e.entity)
      throw new Error("You need to define an invertor entity");
    this.config = {
      ...K.getDefaultConfig(),
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
      "charge_power",
      "battery_charge_rate",
      "battery_discharge_rate"
    ];
    if ((r = e.config) != null && r.entity) {
      const o = t.get("hass");
      if (o) {
        let a = !1;
        for (const l of s)
          o.states[`sensor.${this._getSensorPrefix}${l}`] !== ((i = e.hass) == null ? void 0 : i.states[`sensor.${this._getSensorPrefix}${l}`]) && (a = !0);
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
    let e = parseInt(this.config.display_dp !== void 0 ? this.config.display_dp : jt, 10);
    return e > 3 && (e = 3), e < 1 && (e = 1), e;
  }
  getPercentageStats(e) {
    var r;
    const t = e.state, s = (r = e.attributes) == null ? void 0 : r.unit_of_measurement;
    return {
      rawState: t,
      uom: s,
      value: parseInt(t, 10),
      kValue: 0,
      display: parseInt(t, 10),
      displayStr: `${parseInt(t, 10)}%`,
      displayUnit: "%"
    };
  }
  getStandardisedUom(e) {
    if (!e)
      return "";
    switch (e.toLowerCase()) {
      case "w":
        return f.W;
      case "wh":
        return f.WH;
      case "kw":
        return f.KW;
      case "kwh":
        return f.KWH;
      default:
        return e;
    }
  }
  isWorWh(e) {
    return e === f.W || e === f.WH;
  }
  isPowerUom(e) {
    return e === f.W || e === f.KW;
  }
  getGivTcpStats(e, t) {
    const s = this.config.display_type !== void 0 ? this.config.display_type : zt, r = this.config.display_abs_power !== void 0 ? this.config.display_abs_power : Gt, i = this.getDp(), o = this.getStandardisedUom(t), a = this.isWorWh(o) ? parseInt(e, 10) : parseFloat(e), l = this.isWorWh(o) ? a : a * 1e3, c = this.isWorWh(o) ? this.convertToKillo(a, 3) : a, n = this.convertToKillo(l, i), _ = this.isPowerUom(o) ? f.W : f.WH, h = this.isPowerUom(o) ? f.KW : f.KWH;
    let d = 0, p = "", v = "";
    switch (s) {
      case $.WH:
      default:
        d = r ? Math.abs(l) : l, p = `${r ? Math.abs(l) : l} ${_}`, v = _;
        break;
      case $.KWH:
        d = r ? Math.abs(n) : n, p = `${r ? Math.abs(n) : n} ${h}`, v = h;
        break;
      case $.DYNAMIC:
        d = Math.abs(l) >= 1e3 ? r ? Math.abs(n) : n : r ? Math.abs(l) : l, p = Math.abs(l) >= 1e3 ? `${r ? Math.abs(n) : n} ${h}` : `${r ? Math.abs(l) : l} ${_}`, v = Math.abs(l) >= 1e3 ? h : _;
        break;
    }
    return {
      rawState: e,
      uom: o,
      value: l,
      kValue: c,
      display: d,
      displayStr: p,
      displayUnit: v
    };
  }
  calculateStats() {
    var p, v, y, D, R, U;
    const e = this.config.use_custom_dod !== void 0 ? this.config.use_custom_dod : ot, t = this.config.custom_dod !== void 0 ? this.config.custom_dod : at, s = this.config.calculate_reserve_from_dod !== void 0 ? this.config.calculate_reserve_from_dod : Jt, r = {};
    r.socPercent = this.getPercentageStats(this._getSocEntity), r.batteryPowerReservePercent = this.getPercentageStats(this._getBatteryPowerReserve), r.batteryPower = this.getGivTcpStats(this._getBatteryPowerEntity.state, (p = this._getBatteryPowerEntity.attributes) == null ? void 0 : p.unit_of_measurement), r.dischargePower = this.getGivTcpStats(this._getDischargePowerEntity.state, (v = this._getDischargePowerEntity.attributes) == null ? void 0 : v.unit_of_measurement), r.chargePower = this.getGivTcpStats(this._getChargePowerEntity.state, (y = this._getChargePowerEntity.attributes) == null ? void 0 : y.unit_of_measurement), r.chargeRate = this.getGivTcpStats(this._getBatteryChargeRate.state, (D = this._getBatteryChargeRate.attributes) == null ? void 0 : D.unit_of_measurement), r.dischargeRate = this.getGivTcpStats(this._getBatteryDischargeRate.state, (R = this._getBatteryDischargeRate.attributes) == null ? void 0 : R.unit_of_measurement), r.batteryCapacity = this.getGivTcpStats(this._getBatteryCapacityKwhEntity.state, f.KWH), r.socEnergy = this.getGivTcpStats(this._getSocKwhEntity.state, (U = this._getSocKwhEntity.attributes) == null ? void 0 : U.unit_of_measurement);
    let i = e ? Math.abs(parseFloat(t)) / 100 : 1;
    i > 1 && (i = 1);
    const o = r.socPercent.value / 100, a = Math.round(r.batteryCapacity.value * i);
    r.usableBatteryCapacity = this.getGivTcpStats(a.toString(), f.WH);
    const l = Math.round(a * o);
    r.calculatedSocEnergy = this.getGivTcpStats(l.toString(), f.WH);
    let c = Math.round(r.batteryCapacity.value * (r.batteryPowerReservePercent.value / 100));
    s && (c = Math.round(a * (r.batteryPowerReservePercent.value / 100))), r.batteryPowerReserveEnergy = this.getGivTcpStats(c.toString(), f.WH);
    let n = 0, _ = 0, h = 0, d = 0;
    r.batteryPower.value > 0 && (h = r.dischargePower.value, d = r.dischargeRate.value), r.batteryPower.value < 0 && (h = r.chargePower.value, d = r.chargeRate.value), h > 0 && d > 0 && (n = h / d * 100), _ = this.roundPercentage(n, n < 0.1 ? 2 : 1), r.batteryUsageRatePercent = {
      rawState: n.toString(),
      uom: "%",
      value: n,
      kValue: n,
      display: _ > 100 ? 100 : _,
      displayStr: `${_ > 100 ? 100 : _}%`,
      displayUnit: "%"
    }, this.calculatedStates = r;
  }
  renderReserveAndCapacity() {
    const e = this.config.use_custom_dod !== void 0 ? this.config.use_custom_dod : ot, t = this.config.custom_dod !== void 0 ? this.config.custom_dod : at, s = this.config.display_custom_dod_stats !== void 0 ? this.config.display_custom_dod_stats : Zt;
    let r = u``, i = "";
    return e && s && (i = "Usable", r = u`
        <div class="status">
          <span class="status-text-small"> DoD: ${t}% | Actual Capacity: ${this.calculatedStates.batteryCapacity.displayStr}</span>
        </div>`), u`
      <div>
        <div class="status">
          <span class="status-text"> ${i} Capacity: ${this.calculatedStates.usableBatteryCapacity.displayStr} | Reserve: ${this.calculatedStates.batteryPowerReserveEnergy.displayStr} (${this.calculatedStates.batteryPowerReservePercent.displayStr})</span>
        </div>
        ${r}
      </div>
    `;
  }
  renderRates() {
    const e = u`
        <div class="status">
          <span class="status-text status-text-small">Max. Charge Rate: ${this.calculatedStates.chargeRate.displayStr} | Max. Discharge Rate: ${this.calculatedStates.dischargeRate.displayStr}</span>
        </div>
      `, s = `progress-bar-fill-${this.calculatedStates.batteryPower.value > 0 ? "r" : "g"}${Math.ceil(this.calculatedStates.batteryUsageRatePercent.value / 10) * 10}`;
    return u`
      <div>
        <div class="status">
          <span class="status-text status-text-small">${this._getBatteryStatus} @ ${this.calculatedStates.batteryUsageRatePercent.displayStr} max. rate</span>
        </div>
        <div class="status">
          <div class="rate-wrapper">
            <div class="progress-bar">
              <span class="progress-bar-fill ${s}" style="width: ${this.calculatedStates.batteryUsageRatePercent.displayStr};"></span>
            </div>
          </div>
        </div>
        ${e}
      </div>
    `;
  }
  renderPowerUsage() {
    let e = "", t = u``;
    return this.calculatedStates.batteryPower.value > 0 && (e = "battery-power-out", t = u`<ha-icon icon="mdi:export"></ha-icon>`), this.calculatedStates.batteryPower.value < 0 && (e = "battery-power-in", t = u`<ha-icon icon="mdi:import"></ha-icon>`), u`
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
    const e = [], t = this.calculatedStates.batteryPower.value, s = u`<ha-icon icon="mdi:timer-sand" style="--mdc-icon-size: 17px;"></ha-icon>`, r = u`<ha-icon icon="mdi:clock-outline" style="--mdc-icon-size: 17px;"></ha-icon>`;
    let i = u`${s} No load`, o = 0, a = u`${r} No Load`, l = Math.round(Date.now() / 1e3);
    t > 0 && (i = u`${s} until ${this.calculatedStates.batteryPowerReservePercent.displayStr}`, o = this._getEstimatedTimeLeft, a = u`${r} at ${this.calculatedStates.batteryPowerReservePercent.displayStr}`, l = this._getEstimatedTimeAtReserve), t < 0 && (i = u`${s} until 100%`, o = this._getEstimatedChargeTime, a = u`${r} at 100%`, l = this._getEstimatedTimeAtFull);
    let c = u`--:--:--`;
    t !== 0 && (c = u`
        <givtcp-battery-card-countdown 
            secs=${o}
        ></givtcp-battery-card-countdown>
      `);
    const n = u`
      <div class="stats-block">
        <span class="stats-value"> ${c} </span>
        <div class="stats-subtitle">${i}</div>
      </div>
    `;
    e.push(n);
    let _ = "--:--";
    if (t !== 0) {
      const d = new Date(l * 1e3), p = d.toLocaleString(
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
    return e.push(h), e;
  }
  renderNameAndStatus() {
    const e = this._getBatteryStatus.toUpperCase();
    return u` <div class="battery-name">${this.config.name || "Battery"} | ${e}</div> `;
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
    const e = (r = this.config) != null && r.icon_status_charging ? this.config.icon_status_charging : Ft, t = (i = this.config) != null && i.icon_status_discharging ? this.config.icon_status_discharging : Yt, s = (o = this.config) != null && o.icon_status_idle ? this.config.icon_status_idle : Vt;
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
    var _, h, d, p, v, y, D, R, U;
    const e = this.calculatedStates.socPercent.value, t = (_ = this.config) != null && _.soc_threshold_very_high ? this.config.soc_threshold_very_high : kt, s = (h = this.config) != null && h.soc_threshold_high ? this.config.soc_threshold_high : Ot, r = (d = this.config) != null && d.soc_threshold_medium ? this.config.soc_threshold_medium : Bt, i = (p = this.config) != null && p.soc_threshold_low ? this.config.soc_threshold_low : Wt, o = (v = this.config) != null && v.soc_threshold_very_high_colour ? this.config.soc_threshold_very_high_colour : Mt, a = (y = this.config) != null && y.soc_threshold_high_colour ? this.config.soc_threshold_high_colour : It, l = (D = this.config) != null && D.soc_threshold_medium_colour ? this.config.soc_threshold_medium_colour : Lt, c = (R = this.config) != null && R.soc_threshold_low_colour ? this.config.soc_threshold_low_colour : Nt, n = (U = this.config) != null && U.soc_threshold_very_low_colour ? this.config.soc_threshold_very_low_colour : Kt;
    return e >= t ? `${o[0]}, ${o[1]}, ${o[2]}` : e >= s ? `${a[0]}, ${a[1]}, ${a[2]}` : e >= r ? `${l[0]}, ${l[1]}, ${l[2]}` : e >= i ? `${c[0]}, ${c[1]}, ${c[2]}` : `${n[0]}, ${n[1]}, ${n[2]}`;
  }
  convertToKillo(e, t) {
    const s = 10 ** t;
    if (e !== 0) {
      const r = e / 1e3;
      return Math.round((r + Number.EPSILON) * s) / s;
    }
    return 0;
  }
  roundPercentage(e, t) {
    const s = 10 ** t;
    return e !== 0 ? Math.round((e + Number.EPSILON) * s) / s : 0;
  }
  // https://lit.dev/docs/components/rendering/
  render() {
    var o;
    if (!((o = this.config) != null && o.entity))
      return u``;
    let e = u``;
    const t = this.config.display_battery_rates !== void 0 ? this.config.display_battery_rates : qt;
    this.calculateStats();
    const s = this.getBatteryIcon(), r = this.getBatteryStatusIcon(), i = this.getBatteryColour();
    return t && (e = u`
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
                      icon="${r}"
                      style="--mdc-icon-size: 45px;"
                  ></ha-icon>
                </div>
                <div style="margin: auto;">
                  <ha-icon
                      icon="${s}"
                      style="color:rgb(${i});--mdc-icon-size: 100px;"
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

          ${e}
          
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
  get _getBatteryChargeRate() {
    return this.hass.states[`number.${this._getSensorPrefix}battery_charge_rate`];
  }
  get _getBatteryDischargeRate() {
    return this.hass.states[`number.${this._getSensorPrefix}battery_discharge_rate`];
  }
  get _getBatteryStatus() {
    const e = parseInt(this._getBatteryPowerEntity.state, 10);
    let t = "";
    return e > 0 ? t = "discharging" : e < 0 ? t = "charging" : t = "idle", t;
  }
  get _getEstimatedTimeLeft() {
    let e = 0;
    const t = this.calculatedStates.calculatedSocEnergy.value, s = this.calculatedStates.usableBatteryCapacity.value, r = this.calculatedStates.batteryPowerReservePercent.value / 100, i = this.calculatedStates.dischargePower.value, o = s * r, a = t - o;
    if (a > 0 && i > 0) {
      const l = a / i;
      e = Math.floor(l * 3600);
    }
    return e;
  }
  get _getEstimatedChargeTime() {
    let e = 0;
    const t = this.calculatedStates.chargePower.value, s = this.calculatedStates.calculatedSocEnergy.value, r = this.calculatedStates.usableBatteryCapacity.value;
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
    return we;
  }
};
ut([
  L()
], V.prototype, "hass", 2);
ut([
  ht()
], V.prototype, "config", 2);
V = ut([
  lt("givtcp-battery-card")
], V);
export {
  V as GivTCPBatteryCard
};
