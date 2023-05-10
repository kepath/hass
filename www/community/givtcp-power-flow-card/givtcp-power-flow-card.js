var ee, ie;
(function(e) {
  e.language = "language", e.system = "system", e.comma_decimal = "comma_decimal", e.decimal_comma = "decimal_comma", e.space_comma = "space_comma", e.none = "none";
})(ee || (ee = {})), function(e) {
  e.language = "language", e.system = "system", e.am_pm = "12", e.twenty_four = "24";
}(ie || (ie = {}));
var x = function(e, t, i, s) {
  s = s || {}, i = i ?? {};
  var r = new Event(t, { bubbles: s.bubbles === void 0 || s.bubbles, cancelable: !!s.cancelable, composed: s.composed === void 0 || s.composed });
  return r.detail = i, e.dispatchEvent(r), r;
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at = window, Ut = at.ShadowRoot && (at.ShadyCSS === void 0 || at.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Nt = Symbol(), se = /* @__PURE__ */ new WeakMap();
let ye = class {
  constructor(t, i, s) {
    if (this._$cssResult$ = !0, s !== Nt)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = i;
  }
  get styleSheet() {
    let t = this.o;
    const i = this.t;
    if (Ut && t === void 0) {
      const s = i !== void 0 && i.length === 1;
      s && (t = se.get(i)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && se.set(i, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Ye = (e) => new ye(typeof e == "string" ? e : e + "", void 0, Nt), ke = (e, ...t) => {
  const i = e.length === 1 ? e[0] : t.reduce((s, r, o) => s + ((n) => {
    if (n._$cssResult$ === !0)
      return n.cssText;
    if (typeof n == "number")
      return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + e[o + 1], e[0]);
  return new ye(i, e, Nt);
}, qe = (e, t) => {
  Ut ? e.adoptedStyleSheets = t.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet) : t.forEach((i) => {
    const s = document.createElement("style"), r = at.litNonce;
    r !== void 0 && s.setAttribute("nonce", r), s.textContent = i.cssText, e.appendChild(s);
  });
}, re = Ut ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let i = "";
  for (const s of t.cssRules)
    i += s.cssText;
  return Ye(i);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var bt;
const lt = window, oe = lt.trustedTypes, Ve = oe ? oe.emptyScript : "", ne = lt.reactiveElementPolyfillSupport, Tt = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? Ve : null;
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
} }, fe = (e, t) => t !== e && (t == t || e == e), wt = { attribute: !0, type: String, converter: Tt, reflect: !1, hasChanged: fe };
let j = class extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
  }
  static addInitializer(t) {
    var i;
    this.finalize(), ((i = this.h) !== null && i !== void 0 ? i : this.h = []).push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this.elementProperties.forEach((i, s) => {
      const r = this._$Ep(s, i);
      r !== void 0 && (this._$Ev.set(r, s), t.push(r));
    }), t;
  }
  static createProperty(t, i = wt) {
    if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const s = typeof t == "symbol" ? Symbol() : "__" + t, r = this.getPropertyDescriptor(t, s, i);
      r !== void 0 && Object.defineProperty(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, i, s) {
    return { get() {
      return this[i];
    }, set(r) {
      const o = this[t];
      this[i] = r, this.requestUpdate(t, o, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || wt;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return !1;
    this.finalized = !0;
    const t = Object.getPrototypeOf(this);
    if (t.finalize(), t.h !== void 0 && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const i = this.properties, s = [...Object.getOwnPropertyNames(i), ...Object.getOwnPropertySymbols(i)];
      for (const r of s)
        this.createProperty(r, i[r]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(t) {
    const i = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const r of s)
        i.unshift(re(r));
    } else
      t !== void 0 && i.push(re(t));
    return i;
  }
  static _$Ep(t, i) {
    const s = i.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  u() {
    var t;
    this._$E_ = new Promise((i) => this.enableUpdating = i), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach((i) => i(this));
  }
  addController(t) {
    var i, s;
    ((i = this._$ES) !== null && i !== void 0 ? i : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((s = t.hostConnected) === null || s === void 0 || s.call(t));
  }
  removeController(t) {
    var i;
    (i = this._$ES) === null || i === void 0 || i.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t, i) => {
      this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
    });
  }
  createRenderRoot() {
    var t;
    const i = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions);
    return qe(i, this.constructor.elementStyles), i;
  }
  connectedCallback() {
    var t;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$ES) === null || t === void 0 || t.forEach((i) => {
      var s;
      return (s = i.hostConnected) === null || s === void 0 ? void 0 : s.call(i);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach((i) => {
      var s;
      return (s = i.hostDisconnected) === null || s === void 0 ? void 0 : s.call(i);
    });
  }
  attributeChangedCallback(t, i, s) {
    this._$AK(t, s);
  }
  _$EO(t, i, s = wt) {
    var r;
    const o = this.constructor._$Ep(t, s);
    if (o !== void 0 && s.reflect === !0) {
      const n = (((r = s.converter) === null || r === void 0 ? void 0 : r.toAttribute) !== void 0 ? s.converter : Tt).toAttribute(i, s.type);
      this._$El = t, n == null ? this.removeAttribute(o) : this.setAttribute(o, n), this._$El = null;
    }
  }
  _$AK(t, i) {
    var s;
    const r = this.constructor, o = r._$Ev.get(t);
    if (o !== void 0 && this._$El !== o) {
      const n = r.getPropertyOptions(o), a = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((s = n.converter) === null || s === void 0 ? void 0 : s.fromAttribute) !== void 0 ? n.converter : Tt;
      this._$El = o, this[o] = a.fromAttribute(i, n.type), this._$El = null;
    }
  }
  requestUpdate(t, i, s) {
    let r = !0;
    t !== void 0 && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || fe)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), s.reflect === !0 && this._$El !== t && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t, s))) : r = !1), !this.isUpdatePending && r && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
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
    var t;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((r, o) => this[o] = r), this._$Ei = void 0);
    let i = !1;
    const s = this._$AL;
    try {
      i = this.shouldUpdate(s), i ? (this.willUpdate(s), (t = this._$ES) === null || t === void 0 || t.forEach((r) => {
        var o;
        return (o = r.hostUpdate) === null || o === void 0 ? void 0 : o.call(r);
      }), this.update(s)) : this._$Ek();
    } catch (r) {
      throw i = !1, this._$Ek(), r;
    }
    i && this._$AE(s);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var i;
    (i = this._$ES) === null || i === void 0 || i.forEach((s) => {
      var r;
      return (r = s.hostUpdated) === null || r === void 0 ? void 0 : r.call(s);
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
    this._$EC !== void 0 && (this._$EC.forEach((i, s) => this._$EO(s, this[s], i)), this._$EC = void 0), this._$Ek();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
j.finalized = !0, j.elementProperties = /* @__PURE__ */ new Map(), j.elementStyles = [], j.shadowRootOptions = { mode: "open" }, ne == null || ne({ ReactiveElement: j }), ((bt = lt.reactiveElementVersions) !== null && bt !== void 0 ? bt : lt.reactiveElementVersions = []).push("1.6.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var $t;
const ht = window, k = ht.trustedTypes, ae = k ? k.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, Pt = "$lit$", L = `lit$${(Math.random() + "").slice(9)}$`, me = "?" + L, Xe = `<${me}>`, q = document, J = () => q.createComment(""), tt = (e) => e === null || typeof e != "object" && typeof e != "function", ve = Array.isArray, Ke = (e) => ve(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", Et = `[ 	
\f\r]`, Q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ce = /-->/g, le = />/g, M = RegExp(`>|${Et}(?:([^\\s"'>=/]+)(${Et}*=${Et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), he = /'/g, de = /"/g, be = /^(?:script|style|textarea|title)$/i, we = (e) => (t, ...i) => ({ _$litType$: e, strings: t, values: i }), _ = we(1), H = we(2), V = Symbol.for("lit-noChange"), $ = Symbol.for("lit-nothing"), ue = /* @__PURE__ */ new WeakMap(), Y = q.createTreeWalker(q, 129, null, !1), Ze = (e, t) => {
  const i = e.length - 1, s = [];
  let r, o = t === 2 ? "<svg>" : "", n = Q;
  for (let c = 0; c < i; c++) {
    const l = e[c];
    let g, u, y = -1, w = 0;
    for (; w < l.length && (n.lastIndex = w, u = n.exec(l), u !== null); )
      w = n.lastIndex, n === Q ? u[1] === "!--" ? n = ce : u[1] !== void 0 ? n = le : u[2] !== void 0 ? (be.test(u[2]) && (r = RegExp("</" + u[2], "g")), n = M) : u[3] !== void 0 && (n = M) : n === M ? u[0] === ">" ? (n = r ?? Q, y = -1) : u[1] === void 0 ? y = -2 : (y = n.lastIndex - u[2].length, g = u[1], n = u[3] === void 0 ? M : u[3] === '"' ? de : he) : n === de || n === he ? n = M : n === ce || n === le ? n = Q : (n = M, r = void 0);
    const Z = n === M && e[c + 1].startsWith("/>") ? " " : "";
    o += n === Q ? l + Xe : y >= 0 ? (s.push(g), l.slice(0, y) + Pt + l.slice(y) + L + Z) : l + L + (y === -2 ? (s.push(void 0), c) : Z);
  }
  const a = o + (e[i] || "<?>") + (t === 2 ? "</svg>" : "");
  if (!Array.isArray(e) || !e.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [ae !== void 0 ? ae.createHTML(a) : a, s];
};
class et {
  constructor({ strings: t, _$litType$: i }, s) {
    let r;
    this.parts = [];
    let o = 0, n = 0;
    const a = t.length - 1, c = this.parts, [l, g] = Ze(t, i);
    if (this.el = et.createElement(l, s), Y.currentNode = this.el.content, i === 2) {
      const u = this.el.content, y = u.firstChild;
      y.remove(), u.append(...y.childNodes);
    }
    for (; (r = Y.nextNode()) !== null && c.length < a; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) {
          const u = [];
          for (const y of r.getAttributeNames())
            if (y.endsWith(Pt) || y.startsWith(L)) {
              const w = g[n++];
              if (u.push(y), w !== void 0) {
                const Z = r.getAttribute(w.toLowerCase() + Pt).split(L), N = /([.?@])?(.*)/.exec(w);
                c.push({ type: 1, index: o, name: N[2], strings: Z, ctor: N[1] === "." ? Je : N[1] === "?" ? ei : N[1] === "@" ? ii : yt });
              } else
                c.push({ type: 6, index: o });
            }
          for (const y of u)
            r.removeAttribute(y);
        }
        if (be.test(r.tagName)) {
          const u = r.textContent.split(L), y = u.length - 1;
          if (y > 0) {
            r.textContent = k ? k.emptyScript : "";
            for (let w = 0; w < y; w++)
              r.append(u[w], J()), Y.nextNode(), c.push({ type: 2, index: ++o });
            r.append(u[y], J());
          }
        }
      } else if (r.nodeType === 8)
        if (r.data === me)
          c.push({ type: 2, index: o });
        else {
          let u = -1;
          for (; (u = r.data.indexOf(L, u + 1)) !== -1; )
            c.push({ type: 7, index: o }), u += L.length - 1;
        }
      o++;
    }
  }
  static createElement(t, i) {
    const s = q.createElement("template");
    return s.innerHTML = t, s;
  }
}
function X(e, t, i = e, s) {
  var r, o, n, a;
  if (t === V)
    return t;
  let c = s !== void 0 ? (r = i._$Co) === null || r === void 0 ? void 0 : r[s] : i._$Cl;
  const l = tt(t) ? void 0 : t._$litDirective$;
  return (c == null ? void 0 : c.constructor) !== l && ((o = c == null ? void 0 : c._$AO) === null || o === void 0 || o.call(c, !1), l === void 0 ? c = void 0 : (c = new l(e), c._$AT(e, i, s)), s !== void 0 ? ((n = (a = i)._$Co) !== null && n !== void 0 ? n : a._$Co = [])[s] = c : i._$Cl = c), c !== void 0 && (t = X(e, c._$AS(e, t.values), c, s)), t;
}
class Qe {
  constructor(t, i) {
    this.u = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  v(t) {
    var i;
    const { el: { content: s }, parts: r } = this._$AD, o = ((i = t == null ? void 0 : t.creationScope) !== null && i !== void 0 ? i : q).importNode(s, !0);
    Y.currentNode = o;
    let n = Y.nextNode(), a = 0, c = 0, l = r[0];
    for (; l !== void 0; ) {
      if (a === l.index) {
        let g;
        l.type === 2 ? g = new ot(n, n.nextSibling, this, t) : l.type === 1 ? g = new l.ctor(n, l.name, l.strings, this, t) : l.type === 6 && (g = new si(n, this, t)), this.u.push(g), l = r[++c];
      }
      a !== (l == null ? void 0 : l.index) && (n = Y.nextNode(), a++);
    }
    return o;
  }
  p(t) {
    let i = 0;
    for (const s of this.u)
      s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
  }
}
class ot {
  constructor(t, i, s, r) {
    var o;
    this.type = 2, this._$AH = $, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = r, this._$Cm = (o = r == null ? void 0 : r.isConnected) === null || o === void 0 || o;
  }
  get _$AU() {
    var t, i;
    return (i = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && i !== void 0 ? i : this._$Cm;
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
    t = X(this, t, i), tt(t) ? t === $ || t == null || t === "" ? (this._$AH !== $ && this._$AR(), this._$AH = $) : t !== this._$AH && t !== V && this.g(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Ke(t) ? this.k(t) : this.g(t);
  }
  S(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
  }
  g(t) {
    this._$AH !== $ && tt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(q.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var i;
    const { values: s, _$litType$: r } = t, o = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = et.createElement(r.h, this.options)), r);
    if (((i = this._$AH) === null || i === void 0 ? void 0 : i._$AD) === o)
      this._$AH.p(s);
    else {
      const n = new Qe(o, this), a = n.v(this.options);
      n.p(s), this.T(a), this._$AH = n;
    }
  }
  _$AC(t) {
    let i = ue.get(t.strings);
    return i === void 0 && ue.set(t.strings, i = new et(t)), i;
  }
  k(t) {
    ve(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let s, r = 0;
    for (const o of t)
      r === i.length ? i.push(s = new ot(this.S(J()), this.S(J()), this, this.options)) : s = i[r], s._$AI(o), r++;
    r < i.length && (this._$AR(s && s._$AB.nextSibling, r), i.length = r);
  }
  _$AR(t = this._$AA.nextSibling, i) {
    var s;
    for ((s = this._$AP) === null || s === void 0 || s.call(this, !1, !0, i); t && t !== this._$AB; ) {
      const r = t.nextSibling;
      t.remove(), t = r;
    }
  }
  setConnected(t) {
    var i;
    this._$AM === void 0 && (this._$Cm = t, (i = this._$AP) === null || i === void 0 || i.call(this, t));
  }
}
class yt {
  constructor(t, i, s, r, o) {
    this.type = 1, this._$AH = $, this._$AN = void 0, this.element = t, this.name = i, this._$AM = r, this.options = o, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = $;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, i = this, s, r) {
    const o = this.strings;
    let n = !1;
    if (o === void 0)
      t = X(this, t, i, 0), n = !tt(t) || t !== this._$AH && t !== V, n && (this._$AH = t);
    else {
      const a = t;
      let c, l;
      for (t = o[0], c = 0; c < o.length - 1; c++)
        l = X(this, a[s + c], i, c), l === V && (l = this._$AH[c]), n || (n = !tt(l) || l !== this._$AH[c]), l === $ ? t = $ : t !== $ && (t += (l ?? "") + o[c + 1]), this._$AH[c] = l;
    }
    n && !r && this.j(t);
  }
  j(t) {
    t === $ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Je extends yt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === $ ? void 0 : t;
  }
}
const ti = k ? k.emptyScript : "";
class ei extends yt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== $ ? this.element.setAttribute(this.name, ti) : this.element.removeAttribute(this.name);
  }
}
class ii extends yt {
  constructor(t, i, s, r, o) {
    super(t, i, s, r, o), this.type = 5;
  }
  _$AI(t, i = this) {
    var s;
    if ((t = (s = X(this, t, i, 0)) !== null && s !== void 0 ? s : $) === V)
      return;
    const r = this._$AH, o = t === $ && r !== $ || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, n = t !== $ && (r === $ || o);
    o && this.element.removeEventListener(this.name, this, r), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var i, s;
    typeof this._$AH == "function" ? this._$AH.call((s = (i = this.options) === null || i === void 0 ? void 0 : i.host) !== null && s !== void 0 ? s : this.element, t) : this._$AH.handleEvent(t);
  }
}
class si {
  constructor(t, i, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    X(this, t);
  }
}
const pe = ht.litHtmlPolyfillSupport;
pe == null || pe(et, ot), (($t = ht.litHtmlVersions) !== null && $t !== void 0 ? $t : ht.litHtmlVersions = []).push("2.7.0");
const ri = (e, t, i) => {
  var s, r;
  const o = (s = i == null ? void 0 : i.renderBefore) !== null && s !== void 0 ? s : t;
  let n = o._$litPart$;
  if (n === void 0) {
    const a = (r = i == null ? void 0 : i.renderBefore) !== null && r !== void 0 ? r : null;
    o._$litPart$ = n = new ot(t.insertBefore(J(), a), a, void 0, i ?? {});
  }
  return n._$AI(e), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var St, At;
class T extends j {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t, i;
    const s = super.createRenderRoot();
    return (t = (i = this.renderOptions).renderBefore) !== null && t !== void 0 || (i.renderBefore = s.firstChild), s;
  }
  update(t) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ri(i, this.renderRoot, this.renderOptions);
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
    return V;
  }
}
T.finalized = !0, T._$litElement$ = !0, (St = globalThis.litElementHydrateSupport) === null || St === void 0 || St.call(globalThis, { LitElement: T });
const ge = globalThis.litElementPolyfillSupport;
ge == null || ge({ LitElement: T });
((At = globalThis.litElementVersions) !== null && At !== void 0 ? At : globalThis.litElementVersions = []).push("3.3.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const D = (e) => (t) => typeof t == "function" ? ((i, s) => (customElements.define(i, s), s))(e, t) : ((i, s) => {
  const { kind: r, elements: o } = s;
  return { kind: r, elements: o, finisher(n) {
    customElements.define(i, n);
  } };
})(e, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oi = (e, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? { ...t, finisher(i) {
  i.createProperty(t.key, e);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: t.key, initializer() {
  typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
}, finisher(i) {
  i.createProperty(t.key, e);
} };
function E(e) {
  return (t, i) => i !== void 0 ? ((s, r, o) => {
    r.constructor.createProperty(o, s);
  })(e, t, i) : oi(e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Mt(e) {
  return E({ ...e, state: !0 });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Ct;
((Ct = window.HTMLSlotElement) === null || Ct === void 0 ? void 0 : Ct.prototype.assignedElements) != null;
var m = /* @__PURE__ */ ((e) => (e.Straight = "straight", e.Curved = "curved", e.Angled = "angled", e))(m || {}), v = /* @__PURE__ */ ((e) => (e[e.In = 0] = "In", e[e.Out = 1] = "Out", e))(v || {}), A = /* @__PURE__ */ ((e) => (e.Cross = "cross", e.Square = "square", e.Circle = "circle", e.List = "list", e))(A || {}), G = /* @__PURE__ */ ((e) => (e.None = "none", e.House = "house", e.Inverter = "inverter", e.Solar = "solar", e.Battery = "battery", e))(G || {}), O = /* @__PURE__ */ ((e) => (e.WATT = "W", e.KILO_WATT = "kW", e.MEGA_WATT = "MW", e))(O || {}), b = /* @__PURE__ */ ((e) => (e.Linear = "linear", e.EaseIn = "easeIn", e.EaseOut = "easeOut", e.EaseInOut = "easeInOut", e))(b || {});
const ni = [14, 139, 125], ai = "teal", $e = b.Linear, ci = !0, Lt = "mdi:battery", Ot = G.None, zt = 40, Ee = !0, z = "ui", Wt = 2, li = [14, 139, 125], hi = "teal", di = b.Linear, ui = !1, Se = "mdi:car", pi = [14, 139, 125], gi = "teal", _i = b.Linear, yi = !1, Ae = "mdi:heat-wave", Ce = !1, Rt = 4, Gt = 4, xe = ["solar", "house", "grid", "battery", "eps", "custom1", "custom2"], Te = A.Cross, Ht = 4, fi = [14, 139, 125], mi = "teal", Pe = b.Linear, Le = !1, Oe = "mdi:power-plug", vi = [134, 96, 188], bi = "purple", De = b.Linear, Fe = "mdi:transmission-tower", Ie = !1, wi = [32, 139, 236], $i = "blue", Ue = b.Linear, Ne = "mdi:home", Bt = 2, Me = m.Curved, it = 2, jt = 3, Ei = "%", Yt = 20, kt = !0, ft = !0, Si = [255, 185, 47], Ai = "amber", ct = b.Linear, ze = !0, We = "mdi:solar-panel-large";
class Ci extends TypeError {
  constructor(t, i) {
    let s;
    const {
      message: r,
      ...o
    } = t, {
      path: n
    } = t, a = n.length === 0 ? r : "At path: " + n.join(".") + " -- " + r;
    super(a), this.value = void 0, this.key = void 0, this.type = void 0, this.refinement = void 0, this.path = void 0, this.branch = void 0, this.failures = void 0, Object.assign(this, o), this.name = this.constructor.name, this.failures = () => {
      var c;
      return (c = s) != null ? c : s = [t, ...i()];
    };
  }
}
function xi(e) {
  return P(e) && typeof e[Symbol.iterator] == "function";
}
function P(e) {
  return typeof e == "object" && e != null;
}
function F(e) {
  return typeof e == "string" ? JSON.stringify(e) : "" + e;
}
function Ti(e) {
  const {
    done: t,
    value: i
  } = e.next();
  return t ? void 0 : i;
}
function Pi(e, t, i, s) {
  if (e === !0)
    return;
  e === !1 ? e = {} : typeof e == "string" && (e = {
    message: e
  });
  const {
    path: r,
    branch: o
  } = t, {
    type: n
  } = i, {
    refinement: a,
    message: c = "Expected a value of type `" + n + "`" + (a ? " with refinement `" + a + "`" : "") + ", but received: `" + F(s) + "`"
  } = e;
  return {
    value: s,
    type: n,
    refinement: a,
    key: r[r.length - 1],
    path: r,
    branch: o,
    ...e,
    message: c
  };
}
function* Dt(e, t, i, s) {
  xi(e) || (e = [e]);
  for (const r of e) {
    const o = Pi(r, t, i, s);
    o && (yield o);
  }
}
function* qt(e, t, i) {
  i === void 0 && (i = {});
  const {
    path: s = [],
    branch: r = [e],
    coerce: o = !1,
    mask: n = !1
  } = i, a = {
    path: s,
    branch: r
  };
  if (o && (e = t.coercer(e, a), n && t.type !== "type" && P(t.schema) && P(e) && !Array.isArray(e)))
    for (const l in e)
      t.schema[l] === void 0 && delete e[l];
  let c = !0;
  for (const l of t.validator(e, a))
    c = !1, yield [l, void 0];
  for (let [l, g, u] of t.entries(e, a)) {
    const y = qt(g, u, {
      path: l === void 0 ? s : [...s, l],
      branch: l === void 0 ? r : [...r, g],
      coerce: o,
      mask: n
    });
    for (const w of y)
      w[0] ? (c = !1, yield [w[0], void 0]) : o && (g = w[1], l === void 0 ? e = g : e instanceof Map ? e.set(l, g) : e instanceof Set ? e.add(g) : P(e) && (e[l] = g));
  }
  if (c)
    for (const l of t.refiner(e, a))
      c = !1, yield [l, void 0];
  c && (yield [void 0, e]);
}
class I {
  constructor(t) {
    this.TYPE = void 0, this.type = void 0, this.schema = void 0, this.coercer = void 0, this.validator = void 0, this.refiner = void 0, this.entries = void 0;
    const {
      type: i,
      schema: s,
      validator: r,
      refiner: o,
      coercer: n = (c) => c,
      entries: a = function* () {
      }
    } = t;
    this.type = i, this.schema = s, this.entries = a, this.coercer = n, r ? this.validator = (c, l) => {
      const g = r(c, l);
      return Dt(g, l, this, c);
    } : this.validator = () => [], o ? this.refiner = (c, l) => {
      const g = o(c, l);
      return Dt(g, l, this, c);
    } : this.refiner = () => [];
  }
  /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */
  assert(t) {
    return Re(t, this);
  }
  /**
   * Create a value with the struct's coercion logic, then validate it.
   */
  create(t) {
    return Li(t, this);
  }
  /**
   * Check if a value passes the struct's validation.
   */
  is(t) {
    return Di(t, this);
  }
  /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */
  mask(t) {
    return Oi(t, this);
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
function Re(e, t) {
  const i = nt(e, t);
  if (i[0])
    throw i[0];
}
function Li(e, t) {
  const i = nt(e, t, {
    coerce: !0
  });
  if (i[0])
    throw i[0];
  return i[1];
}
function Oi(e, t) {
  const i = nt(e, t, {
    coerce: !0,
    mask: !0
  });
  if (i[0])
    throw i[0];
  return i[1];
}
function Di(e, t) {
  return !nt(e, t)[0];
}
function nt(e, t, i) {
  i === void 0 && (i = {});
  const s = qt(e, t, i), r = Ti(s);
  return r[0] ? [new Ci(r[0], function* () {
    for (const n of s)
      n[0] && (yield n[0]);
  }), void 0] : [void 0, r[1]];
}
function Fi() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  const s = t[0].type === "type", r = t.map((n) => n.schema), o = Object.assign({}, ...r);
  return s ? Ui(o) : Vt(o);
}
function K(e, t) {
  return new I({
    type: e,
    schema: null,
    validator: t
  });
}
function Ii() {
  return K("any", () => !0);
}
function xt(e) {
  return new I({
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
      return Array.isArray(t) || "Expected an array value, but received: " + F(t);
    }
  });
}
function S() {
  return K("boolean", (e) => typeof e == "boolean");
}
function f() {
  return K("integer", (e) => typeof e == "number" && !isNaN(e) && Number.isInteger(e) || "Expected an integer, but received: " + F(e));
}
function Ge() {
  return K("never", () => !1);
}
function Vt(e) {
  const t = e ? Object.keys(e) : [], i = Ge();
  return new I({
    type: "object",
    schema: e || null,
    *entries(s) {
      if (e && P(s)) {
        const r = new Set(Object.keys(s));
        for (const o of t)
          r.delete(o), yield [o, s[o], e[o]];
        for (const o of r)
          yield [o, s[o], i];
      }
    },
    validator(s) {
      return P(s) || "Expected an object, but received: " + F(s);
    },
    coercer(s) {
      return P(s) ? {
        ...s
      } : s;
    }
  });
}
function h(e) {
  return new I({
    ...e,
    validator: (t, i) => t === void 0 || e.validator(t, i),
    refiner: (t, i) => t === void 0 || e.refiner(t, i)
  });
}
function p() {
  return K("string", (e) => typeof e == "string" || "Expected a string, but received: " + F(e));
}
function W(e) {
  const t = Ge();
  return new I({
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
      return Array.isArray(i) || "Expected an array, but received: " + F(i);
    }
  });
}
function Ui(e) {
  const t = Object.keys(e);
  return new I({
    type: "type",
    schema: e,
    *entries(i) {
      if (P(i))
        for (const s of t)
          yield [s, i[s], e[s]];
    },
    validator(i) {
      return P(i) || "Expected an object, but received: " + F(i);
    }
  });
}
function R(e) {
  const t = e.map((i) => i.type).join(" | ");
  return new I({
    type: "union",
    schema: null,
    coercer(i, s) {
      return (e.find((o) => {
        const [n] = o.validate(i, {
          coerce: !0
        });
        return !n;
      }) || Ni()).coercer(i, s);
    },
    validator(i, s) {
      const r = [];
      for (const o of e) {
        const [...n] = qt(i, o, s), [a] = n;
        if (a[0])
          for (const [c] of n)
            c && r.push(c);
        else
          return [];
      }
      return ["Expected the value to satisfy a union of `" + t + "`, but received: " + F(i), ...r];
    }
  });
}
function Ni() {
  return K("unknown", () => !0);
}
function Mi(e, t, i) {
  return new I({
    ...e,
    *refiner(s, r) {
      yield* e.refiner(s, r);
      const o = i(s, r), n = Dt(o, r, e, s);
      for (const a of n)
        yield {
          ...a,
          refinement: t
        };
    }
  });
}
const zi = (e) => e.includes("."), C = () => Mi(p(), "entity ID (domain.entity)", zi), Wi = Vt({
  type: p(),
  view_layout: Ii()
}), Ri = Fi(
  Wi,
  Vt({
    name: h(p()),
    demo_mode: h(S()),
    batteries: h(xt(C())),
    battery_colour_type: h(p()),
    battery_colour: h(R([p(), W([f(), f(), f()])])),
    battery_dot_easing: h(p()),
    battery_enabled: h(S()),
    battery_icon: h(p()),
    battery: h(C()),
    centre_entity: h(p()),
    circle_size: h(f()),
    colour_icons_and_text: h(S()),
    corner_radius: h(f()),
    custom1_colour_type: h(p()),
    custom1_colour: h(R([p(), W([f(), f(), f()])])),
    custom1_dot_easing: h(p()),
    custom1_enabled: h(S()),
    custom1_extra_sensor: h(C()),
    custom1_icon: h(p()),
    custom1_name: h(p()),
    custom1_sensor: h(C()),
    custom2_colour_type: h(p()),
    custom2_colour: h(R([p(), W([f(), f(), f()])])),
    custom2_dot_easing: h(p()),
    custom2_enabled: h(S()),
    custom2_extra_sensor: h(C()),
    custom2_icon: h(p()),
    custom2_name: h(p()),
    custom2_sensor: h(C()),
    detail_entities: h(xt(C())),
    details_enabled: h(S()),
    dot_size: h(f()),
    dot_speed: h(f()),
    entity_layout: h(p()),
    entity_line_width: h(f()),
    entity_size: h(f()),
    eps_colour_type: h(p()),
    eps_colour: h(R([p(), W([f(), f(), f()])])),
    eps_dot_easing: h(p()),
    eps_enabled: h(S()),
    eps_icon: h(p()),
    grid_colour_type: h(p()),
    grid_colour: h(R([p(), W([f(), f(), f()])])),
    grid_dot_easing: h(p()),
    grid_icon: h(p()),
    hide_inactive_flows: h(S()),
    house_colour_type: h(p()),
    house_colour: h(R([p(), W([f(), f(), f()])])),
    house_dot_easing: h(p()),
    house_icon: h(p()),
    invertor: h(C()),
    invertors: h(xt(C())),
    line_gap: h(f()),
    line_style: h(p()),
    line_width: h(f()),
    num_detail_columns: h(f()),
    power_margin: h(f()),
    single_battery: h(S()),
    single_invertor: h(S()),
    solar_colour_type: h(p()),
    solar_colour: h(R([p(), W([f(), f(), f()])])),
    solar_dot_easing: h(p()),
    solar_enabled: h(S()),
    solar_icon: h(p())
  })
), Gi = (e, t, i) => {
  const s = e.single_invertor !== void 0 ? e.single_invertor : ft, r = e.single_battery !== void 0 ? e.single_battery : kt, o = s ? t : t.filter((a) => {
    var c, l;
    return ((c = e.invertors) == null ? void 0 : c.length) > 0 ? ((l = e.invertors) == null ? void 0 : l.indexOf(a)) === -1 : !0;
  }), n = r ? i : i.filter((a) => {
    var c, l;
    return ((c = e.batteries) == null ? void 0 : c.length) > 0 ? ((l = e.batteries) == null ? void 0 : l.indexOf(a)) === -1 : !0;
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
              label: s ? "Invertor" : "Invertors",
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
              selector: { entity: { multiple: !r, include_entities: n } }
            }
          ]
        }
      ]
    }
  ];
}, Hi = (e, t, i) => [
  {
    name: e,
    label: t,
    selector: { icon: { placeholder: i } }
  }
], Bi = (e, t) => [
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
], ji = (e, t, i) => [
  {
    name: t,
    label: i,
    selector: e == "ui" ? { "ui-color": {} } : { color_rgb: {} }
  }
], Yi = (e, t) => [
  {
    name: `${e}_type`,
    label: t,
    selector: { select: { mode: "dropdown", options: ["ui", "rgb"] } }
  }
], B = (e, t, i, s) => [
  {
    type: "grid",
    name: "",
    schema: [
      ...Hi(t + "_icon", "Icon", s),
      ...Bi(t + "_dot_easing", i + " Dot Easing"),
      ...Yi(t + "_colour", "Colour Type"),
      ...ji(e[`${t}_colour_type`], t + "_colour", i + " Colour")
    ]
  }
  //	...ENTITY_ACTION_SCHEMA('grid', 'Grid')
], ki = (e) => [
  ...B(e, "grid", "Grid", Fe)
], qi = (e) => [
  ...B(e, "house", "House", Ne)
], Vi = (e) => {
  let t = [{ name: "battery_enabled", label: "Battery enabled", selector: { boolean: {} } }];
  return e.battery_enabled && (t = [
    ...t,
    ...B(e, "battery", "Battery", Lt),
    { name: "eps_enabled", label: "EPS enabled", selector: { boolean: {} } }
  ], e.eps_enabled && (t = [...t, ...B(e, "eps", "EPS", Oe)])), t;
}, Xi = (e) => {
  let t = [{ name: "solar_enabled", label: "Solar enabled", selector: { boolean: {} } }];
  return e.solar_enabled && (t = [...t, ...B(e, "solar", "Solar", We)]), t;
}, Ki = (e) => {
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
    ...B(e, "custom1", "Custom 1", Se)
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
    ...B(e, "custom2", "Custom 2", Ae)
  ]), t;
}, Zi = [
  {
    name: "entity_layout",
    default: Te,
    selector: {
      select: {
        mode: "dropdown",
        options: [
          { value: A.Cross, label: "Cross" },
          { value: A.Circle, label: "Circle" },
          { value: A.Square, label: "Square" },
          { value: A.List, label: "List" }
        ]
      }
    }
  }
], _e = [
  {
    name: "line_gap",
    label: "Line Gap",
    default: Bt,
    selector: { number: { mode: "slider", min: 0, max: 5 } }
  }
], Qi = (e) => {
  if (e.entity_layout === "cross")
    return [
      {
        name: "corner_radius",
        default: Wt,
        label: "Corner Radius",
        selector: { number: { mode: "slider", min: 1, max: 10 } }
      },
      ..._e
    ];
  if (e.entity_layout === "square") {
    let t = [
      {
        name: "line_style",
        default: Ot,
        label: "Line Style",
        selector: {
          select: {
            mode: "dropdown",
            options: [
              { value: m.Curved, label: "Curved" },
              { value: m.Angled, label: "Angled" },
              { value: m.Straight, label: "Straight" }
            ]
          }
        }
      }
    ];
    return e.line_style === m.Curved && (t = [...t, ..._e]), t;
  }
  return e.entity_layout === "circle" ? [
    {
      name: "circle_size",
      default: zt,
      label: "Circle Size",
      selector: { number: { mode: "slider", min: 35, max: 45 } }
    },
    {
      name: "centre_entity",
      default: Ot,
      label: "Centre Entity",
      selector: {
        select: {
          mode: "dropdown",
          options: [
            { value: G.None, label: "None" },
            { value: G.House, label: "House" },
            { value: G.Inverter, label: "Inverter" },
            { value: G.Solar, label: "Solar" },
            { value: G.Battery, label: "Battery" }
          ]
        }
      }
    }
  ] : [];
}, Ji = (e, t) => {
  let i = [{ name: "details_enabled", label: "Details enabled", selector: { boolean: {} } }];
  return e.details_enabled && (i = [
    ...i,
    {
      name: "num_detail_columns",
      label: "Number of columns",
      default: jt,
      selector: { number: { mode: "slider", min: 1, max: 5 } }
    },
    {
      label: "Entities",
      name: "detail_entities",
      selector: {
        entity: {
          multiple: !0,
          include_entities: t.filter((s) => e.detail_entities.indexOf(s) === -1)
        }
      }
    }
  ]), i;
};
class dt {
  static getDefaults(t) {
    return {
      type: "custom:givtcp-power-flow-card",
      battery_colour_type: z,
      battery_colour: t.battery_colour_type === "rgb" ? ni : ai,
      battery_dot_easing: $e,
      battery_enabled: ci,
      circle_size: zt,
      colour_icons_and_text: Ee,
      corner_radius: Wt,
      custom1_colour_type: z,
      custom1_colour: t.custom1_colour_type === "rgb" ? li : hi,
      custom1_dot_easing: ct,
      custom2_colour_type: z,
      custom2_colour: t.custom2_colour_type === "rgb" ? pi : gi,
      custom2_dot_easing: ct,
      details_enabled: Ce,
      dot_size: Rt,
      dot_speed: Gt,
      entity_layout: A.Cross,
      entity_line_width: it,
      entity_size: Ht,
      eps_colour_type: z,
      eps_colour: t.eps_colour_type === "rgb" ? fi : mi,
      eps_dot_easing: Pe,
      eps_enabled: Le,
      grid_colour_type: z,
      grid_colour: t.grid_colour_type === "rgb" ? vi : bi,
      grid_dot_easing: De,
      hide_inactive_flows: Ie,
      house_colour_type: z,
      house_colour: t.house_colour_type === "rgb" ? wi : $i,
      house_dot_easing: Ue,
      line_gap: Bt,
      line_style: Me,
      line_width: it,
      num_detail_columns: jt,
      power_margin: Yt,
      single_battery: kt,
      single_invertor: ft,
      solar_colour_type: z,
      solar_colour: t.solar_colour_type === "rgb" ? Si : Ai,
      solar_dot_easing: ct,
      solar_enabled: ze
    };
  }
  static migrateConfig(t, i) {
    const s = i ? { ...t } : t, r = {
      icon_solar: "solar_icon",
      icon_battery: "battery_icon",
      icon_grid: "grid_icon",
      icon_house: "house_icon"
    };
    for (const [o, n] of Object.entries(r))
      s[o] && (s[n] = s[o], delete s[o]);
    return s;
  }
}
var ts = Object.defineProperty, es = Object.getOwnPropertyDescriptor, mt = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? es(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (r = (s ? n(t, i, r) : n(r)) || r);
  return s && r && ts(t, i, r), r;
};
let st = class extends T {
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
    return ((e = this._config) == null ? void 0 : e.single_invertor) == null ? ft : (t = this._config) == null ? void 0 : t.single_invertor;
  }
  get _singleBattery() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.single_battery) == null ? kt : (t = this._config) == null ? void 0 : t.single_battery;
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
    return dt.getDefaults(this._config);
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
          ...Gi(this._config, this._invertors, this._batteries),
          {
            type: "grid",
            name: "",
            schema: [
              {
                name: "dot_size",
                label: "Dot Size",
                default: Rt,
                selector: { number: { mode: "slider", min: 1, max: 10 } }
              },
              {
                name: "dot_speed",
                label: "Dot Speed",
                default: Gt,
                selector: { number: { mode: "slider", min: 1, max: 10 } }
              },
              {
                name: "line_width",
                label: "Flow Size",
                default: it,
                selector: { number: { mode: "slider", min: 1, max: 10 } }
              },
              {
                name: "entity_line_width",
                label: "Outline Size",
                default: it,
                selector: { number: { mode: "slider", min: 1, max: 10 } }
              },
              {
                name: "entity_size",
                label: "Entity Size",
                default: Ht,
                selector: { number: { mode: "slider", min: 3, max: 7 } }
              },
              {
                name: "power_margin",
                label: "Power Threshold",
                default: Yt,
                selector: { number: { mode: "box", unit_of_measurement: O.WATT } }
              },
              { name: "hide_inactive_flows", label: "Hide Inactive Flows", selector: { boolean: {} } },
              { name: "colour_icons_and_text", label: "Colour Icons and Text", selector: { boolean: {} } }
            ]
          }
        ];
      case 1:
        return [...Zi, ...Qi(this._config)];
      case 2:
        return [...ki(this._config)];
      case 3:
        return [...Xi(this._config)];
      case 4:
        return [...Vi(this._config)];
      case 5:
        return [...qi(this._config), ...Ki(this._config)];
      case 6:
        return [...Ji(this._config, this._extraEntities)];
      default:
        return [];
    }
  }
  setConfig(e) {
    e = dt.migrateConfig(e, !1), Re(e, Ri), this._config = e;
  }
  render() {
    if (!this.hass || !this._config)
      return _``;
    const e = {
      ...this._defaults,
      ...this._config
    };
    return xe.forEach((t) => {
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
    x(this, "config-changed", { config: t });
  }
};
mt([
  E()
], st.prototype, "hass", 2);
mt([
  Mt()
], st.prototype, "_config", 2);
mt([
  Mt()
], st.prototype, "_curView", 2);
st = mt([
  D("givtcp-power-flow-card-editor")
], st);
class d {
  static getCurvePath(t, i, s, r, o) {
    const n = (t + s) / 2, a = (i + r) / 2, c = s - t, l = r - i, g = Math.sqrt(c * c + l * l), u = Math.atan2(l, c);
    let y = n, w = a;
    if (o !== 0) {
      const N = Math.abs(g / (2 * Math.sin(o * Math.PI / 180))), je = o > 0 ? -1 : 1, te = u + je * Math.PI / 2;
      y = n + N * Math.cos(te), w = a + N * Math.sin(te);
    }
    return `M ${t},${i} Q ${y},${w} ${s},${r}`;
  }
  static getRoundedBox(t, i, s, r) {
    const o = Math.min(t, i), n = Math.min(s, o / 2);
    r || (r = { x: 0, y: 0 });
    const a = `M${r.x},${n + r.y}a${n},${n} 0 0 1 ${n},${-n}h${t - 2 * n}`, c = `a${n},${n} 0 0 1 ${n},${n}v${i - 2 * n}`, l = `a${n},${n} 0 0 1 ${-n},${n}h${-t + 2 * n}`, g = `a${n},${n} 0 0 1 ${-n},${-n}v${-i + 2 * n}`;
    return `${a}${c}${l}${g}z`;
  }
  static getRoundedCornerPath(t, i, s, r, o, n) {
    let a = `M ${t} ${i} `;
    return n == 1 ? (a += `H ${s - o} `, a += `q ${o} 0 ${o} -${o} `, a += `V ${r} `) : n == 2 ? (a += `H ${s + o} `, a += `q -${o} 0 -${o} ${o} `, a += `V ${r} `) : n == 3 ? (a += `V ${r + o} `, a += `q 0 -${o} -${o} -${o} `, a += `H ${s} `) : (a += `V ${r - o} `, a += `q 0 ${o} ${o} ${o} `, a += `H ${s} `), a;
  }
  static getStraightPath(t, i, s, r) {
    return `M ${t} ${i} L ${s} ${r}`;
  }
  static getLShape(t, i, s, r, o) {
    const n = `M ${t} ${i} `;
    let a, c;
    return t !== s && (a = `H ${s} `), i !== r && (c = `V ${r} `), o === 0 ? `${n}${a}${c}` : `${n}${c}${a}`;
  }
  static getShoulderSVGPath(t, i, s, r, o) {
    let n = `M ${t} ${i} `;
    if (t !== s) {
      const a = (t + s) / 2;
      n += `H ${a - o} `, n += `Q ${a} ${i} ${a} ${i + o} `, n += `V ${r - o} `, n += `Q ${a} ${r} ${a + o} ${r} `, n += `H ${s} `;
    }
    if (i !== r) {
      const a = (i + r) / 2;
      t === s ? (n += `V ${a - o} `, n += `Q ${t} ${a} ${t + o} ${a} `) : n += `V ${a} `, n += `H ${s} `;
    }
    return n;
  }
  static getCirclePath(t, i = 0, s = 50, r = { x: 50, y: 50 }) {
    const n = -90 + i / 100 * 360, a = t === 100 ? n + 360 : n + t / 100 * 360, c = n * Math.PI / 180, l = a * Math.PI / 180, g = {
      x: r.x + s * Math.cos(c),
      y: r.y + s * Math.sin(c)
    }, u = {
      x: t === 100 ? 49.99 : r.x + s * Math.cos(l),
      y: r.y + s * Math.sin(l)
    }, y = a - n <= 180 ? 0 : 1;
    return `M ${g.x} ${g.y} A ${s} ${s} 0 ${y} 1 ${u.x} ${u.y}`;
  }
}
var is = Object.defineProperty, ss = Object.getOwnPropertyDescriptor, Xt = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? ss(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (r = (s ? n(t, i, r) : n(r)) || r);
  return s && r && is(t, i, r), r;
};
let ut = class extends T {
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
			${H`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
		${e <= 0 ? H`<path d="${d.getCirclePath(100, 0, s)}" style="stroke: var(--gtpc-${this.data.type}-color)" />` : Object.keys(t).map((r) => {
      const o = t[r] / e * 100;
      return i += e > 0 ? (e - t[r]) / e * 100 : 0, o > 0 ? H`<path d="${d.getCirclePath(
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
							><ha-icon icon="mdi:arrow-right"></ha-icon> ${this.formatPower(this.data.in.total)}</span
					  >` : _``}
				${this.data.out !== void 0 ? _`<span data-power="${this.data.out.total}" class="gtpc-entity-out"
							><ha-icon icon="mdi:arrow-left"></ha-icon> ${this.formatPower(this.data.out.total)}</span
					  >` : _``}
				<ha-icon class="gtpc-entity-icon" .icon="${this.data.icon}"></ha-icon>
				${this.data.extra !== void 0 ? _`<span class="gtpc-entity-extra">${this.data.extra}</span>` : _``}
			</div>
		`;
  }
  formatPower(e) {
    return e < 1e3 ? `${e}${O.WATT}` : e < 1e6 ? `${(e / 1e3).toFixed(1)}${O.KILO_WATT}` : `${(e / 1e6).toFixed(1)}${O.MEGA_WATT}`;
  }
};
Xt([
  E()
], ut.prototype, "data", 2);
Xt([
  E()
], ut.prototype, "entityLineWidth", 2);
ut = Xt([
  D("givtcp-power-flow-card-entity")
], ut);
var rs = Object.defineProperty, os = Object.getOwnPropertyDescriptor, He = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? os(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (r = (s ? n(t, i, r) : n(r)) || r);
  return s && r && rs(t, i, r), r;
};
let Ft = class extends T {
  constructor() {
    super(), this.addEventListener("click", (e) => {
      var t;
      if (e.target && (e.target instanceof HTMLElement || e.target instanceof SVGElement)) {
        const i = (t = e.target.closest(".gtpc-detail")) == null ? void 0 : t.getAttribute("data-entity-id");
        i && (e.stopPropagation(), x(this, "hass-more-info", { entityId: i }));
      }
    });
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return _`<div class="gtpc-details">
			${this.entities.map(
      (e) => {
        var t, i;
        return _`<div class="gtpc-detail" data-entity-id="${e == null ? void 0 : e.entity_id}">
					<div class="gtpc-detail-title">${this.formatEntityName((t = e == null ? void 0 : e.attributes) == null ? void 0 : t.friendly_name)}</div>
					<state-badge .stateObj=${e} .stateColor=${!0}></state-badge>
					<div class="gtpc-detail-state">${e == null ? void 0 : e.state} ${(i = e == null ? void 0 : e.attributes) == null ? void 0 : i.unit_of_measurement}</div>
				</div>`;
      }
    )}
		</div>`;
  }
  formatEntityName(e) {
    return e ? e.replace(/^givtcp [a-zA-Z]{2}\d{4}[a-zA-Z]\d{3}\s/i, "").replace(/\s*kwh$/i, "") : "";
  }
};
He([
  E()
], Ft.prototype, "entities", 2);
Ft = He([
  D("givtcp-power-flow-card-details")
], Ft);
var ns = Object.defineProperty, as = Object.getOwnPropertyDescriptor, vt = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? as(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (r = (s ? n(t, i, r) : n(r)) || r);
  return s && r && ns(t, i, r), r;
};
class U extends T {
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
    return t < 1e3 ? `${t}${O.WATT}` : t < 1e6 ? `${(t / 1e3).toFixed(1)}${O.KILO_WATT}` : `${(t / 1e6).toFixed(1)}${O.MEGA_WATT}`;
  }
}
vt([
  E()
], U.prototype, "flowData", 2);
vt([
  E()
], U.prototype, "flows", 2);
vt([
  E()
], U.prototype, "entitySize", 2);
vt([
  E()
], U.prototype, "entityLineWidth", 2);
var cs = Object.defineProperty, ls = Object.getOwnPropertyDescriptor, Kt = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? ls(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (r = (s ? n(t, i, r) : n(r)) || r);
  return s && r && cs(t, i, r), r;
};
let pt = class extends U {
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
    return H`<g data-pos="0" class="gtpc-flow gtpc-${e}-to-${t}-flow" style="stroke: var(--gtpc-${e}-color)">
			<path d="${this.getPathForFlow(`${e}-to-${t}`)}" />
			<circle cx="0" cy="0" r="0.5" style="fill: var(--gtpc-${e}-color)"/>
		</g>`;
  }
  getPathForFlow(e) {
    const t = this.entityWidth / 2;
    switch (e) {
      case "solar-to-house":
        return d.getRoundedCornerPath(
          this.midX + this.xLineGap,
          this.entityWidth,
          this.width - this.entityWidth,
          this.midY - this.lineGap,
          this.cornerRadius,
          0
        );
      case "battery-to-house":
        return d.getRoundedCornerPath(
          this.width - this.entityWidth,
          this.midY + this.lineGap,
          this.midX + this.xLineGap,
          this.height - this.entityWidth,
          this.cornerRadius,
          2
        );
      case "battery-to-grid":
        return d.getRoundedCornerPath(
          this.midX - this.xLineGap,
          this.height - this.entityWidth,
          this.entityWidth,
          this.midY + this.lineGap,
          this.cornerRadius,
          3
        );
      case "grid-to-battery":
        return d.getRoundedCornerPath(
          this.midX - this.xLineGap,
          this.height - this.entityWidth,
          this.entityWidth,
          this.midY + this.lineGap,
          this.cornerRadius,
          3
        );
      case "solar-to-grid":
        return d.getRoundedCornerPath(
          this.entityWidth,
          this.midY - this.lineGap,
          this.midX - this.xLineGap,
          this.entityWidth,
          this.cornerRadius,
          1
        );
      case "solar-to-battery":
        return d.getCurvePath(this.midX, this.entityWidth, this.midX, this.height - this.entityWidth, 0);
      case "grid-to-house":
        return d.getCurvePath(this.entityWidth, this.midY, this.width - this.entityWidth, this.midY, 0);
      case "house-to-custom1":
        return d.getStraightPath(
          this.width - t,
          this.entityWidth,
          this.width - t,
          this.midY - t
        );
      case "house-to-custom2":
        return d.getStraightPath(
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
Kt([
  E()
], pt.prototype, "lineGap", 2);
Kt([
  E()
], pt.prototype, "cornerRadius", 2);
pt = Kt([
  D("givtcp-power-flow-card-layout-cross")
], pt);
var hs = Object.defineProperty, ds = Object.getOwnPropertyDescriptor, Zt = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? ds(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (r = (s ? n(t, i, r) : n(r)) || r);
  return s && r && hs(t, i, r), r;
};
let gt = class extends U {
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
    return H`<g data-pos="0" class="gtpc-flow gtpc-${e}-to-${t}-flow" style="stroke: var(--gtpc-${e}-color)">
			<path d="${this.getPathForFlow(`${e}-to-${t}`)}" />
			<circle cx="0" cy="0" r="0.5" style="fill: var(--gtpc-${e}-color)"/>
		</g>`;
  }
  getPathForFlow(e) {
    const t = this.entityWidth / 2, i = Math.ceil(2 * Math.PI * this.circleSize), s = Math.ceil((this.entityWidth - 0) / i * 100), r = 25 - s;
    switch (e) {
      case "solar-to-house":
        return d.getCirclePath(r, s / 2, this.circleSize, { x: this.midX, y: this.circleMidY });
      case "battery-to-house":
        return d.getCirclePath(r, 25 + s / 2, this.circleSize, { x: this.midX, y: this.circleMidY });
      case "battery-to-grid":
        return d.getCirclePath(r, 50 + s / 2, this.circleSize, { x: this.midX, y: this.circleMidY });
      case "grid-to-battery":
        return d.getCirclePath(r, 50 + s / 2, this.circleSize, { x: this.midX, y: this.circleMidY });
      case "solar-to-grid":
        return d.getCirclePath(r, 75 + s / 2, this.circleSize, { x: this.midX, y: this.circleMidY });
      case "solar-to-battery":
        return d.getCurvePath(this.midX, this.entityWidth, this.midX, this.height - this.entityWidth, 0);
      case "grid-to-house":
        return d.getCurvePath(this.entityWidth, this.midY, this.width - this.entityWidth, this.midY, 0);
      case "house-to-custom1":
        return d.getStraightPath(
          this.width - t,
          this.entityWidth,
          this.width - t,
          this.midY - t
        );
      case "house-to-custom2":
        return d.getStraightPath(
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
Zt([
  E()
], gt.prototype, "centreEntity", 2);
Zt([
  E()
], gt.prototype, "circleSize", 2);
gt = Zt([
  D("givtcp-power-flow-card-layout-circle")
], gt);
var us = Object.defineProperty, ps = Object.getOwnPropertyDescriptor, Qt = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? ps(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (r = (s ? n(t, i, r) : n(r)) || r);
  return s && r && us(t, i, r), r;
};
let _t = class extends U {
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
    return H`<g data-pos="0" class="gtpc-flow gtpc-${e}-to-${t}-flow" style="stroke: var(--gtpc-${e}-color)">
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
          case m.Curved:
            return d.getCurvePath(
              this.midX + this.xLineGap,
              this.entityWidth,
              this.width - this.entityWidth,
              this.midY - this.lineGap,
              -90
            );
          case m.Angled:
            return d.getLShape(
              this.midX + t,
              t,
              this.width - t,
              this.midY - t,
              0
            );
          case m.Straight:
            return d.getStraightPath(
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
          case m.Curved:
            return d.getCurvePath(
              this.width - this.entityWidth,
              this.midY + this.lineGap,
              this.midX + this.xLineGap,
              this.height - this.entityWidth,
              -90
            );
          case m.Angled:
            return d.getLShape(
              this.width - t,
              this.midY + t,
              this.midX + t,
              this.height - t,
              1
            );
          case m.Straight:
            return d.getStraightPath(
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
          case m.Curved:
            return d.getCurvePath(
              this.midX - this.xLineGap,
              this.height - this.entityWidth,
              this.entityWidth,
              this.midY + this.lineGap,
              -90
            );
          case m.Angled:
            return d.getLShape(
              this.midX - t,
              this.height - t,
              t,
              this.midY + t,
              0
            );
          case m.Straight:
            return d.getStraightPath(
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
          case m.Curved:
            return d.getCurvePath(
              this.midX - this.xLineGap,
              this.height - this.entityWidth,
              this.entityWidth,
              this.midY + this.lineGap,
              -90
            );
          case m.Angled:
            return d.getLShape(
              this.midX - t,
              this.height - t,
              t,
              this.midY + t,
              0
            );
          case m.Straight:
            return d.getStraightPath(
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
          case m.Curved:
            return d.getCurvePath(
              this.entityWidth,
              this.midY - this.lineGap,
              this.midX - this.xLineGap,
              this.entityWidth,
              -90
            );
          case m.Angled:
            return d.getLShape(t, this.midY - t, this.midX - t, t, 1);
          case m.Straight:
            return d.getStraightPath(t, this.midY - t, this.midX - t, t);
          default:
            return "";
        }
      case "solar-to-battery":
        return d.getCurvePath(this.midX, this.entityWidth, this.midX, this.height - this.entityWidth, 0);
      case "grid-to-house":
        return d.getCurvePath(this.entityWidth, this.midY, this.width - this.entityWidth, this.midY, 0);
      case "house-to-custom1":
        switch (this.lineStyle) {
          case m.Curved:
          case m.Straight:
            return d.getStraightPath(
              this.width - t,
              this.entityWidth,
              this.width - t,
              this.midY - t
            );
          case m.Angled:
            return i = this.calculateCirclePoint(0.125, t, [
              this.width - (this.entityWidth + t),
              this.entityWidth + t
            ]), s = this.calculateCirclePoint(0.625, t, [this.width - t, this.midY]), d.getStraightPath(i[0], i[1], s[0], s[1]);
          default:
            return "";
        }
      case "house-to-custom2":
        switch (this.lineStyle) {
          case m.Curved:
          case m.Straight:
            return d.getStraightPath(
              this.width - t,
              this.height - this.entityWidth,
              this.width - t,
              this.midY + t
            );
          case m.Angled:
            return i = this.calculateCirclePoint(0.875, t, [
              this.width - (this.entityWidth + t),
              this.height - (this.entityWidth + t)
            ]), s = this.calculateCirclePoint(0.375, t, [this.width - t, this.midY]), d.getStraightPath(i[0], i[1], s[0], s[1]);
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
Qt([
  E()
], _t.prototype, "lineGap", 2);
Qt([
  E()
], _t.prototype, "lineStyle", 2);
_t = Qt([
  D("givtcp-power-flow-card-layout-square")
], _t);
var gs = Object.defineProperty, _s = Object.getOwnPropertyDescriptor, Be = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? _s(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (r = (s ? n(t, i, r) : n(r)) || r);
  return s && r && gs(t, i, r), r;
};
let It = class extends U {
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
    return ((i = this.flows.find((s) => s.from === e && s.to === t)) == null ? void 0 : i.direction) ?? v.In;
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
    const i = this.directionFor(e, t), s = i === v.In ? this.halfEntity : this.width - this.halfEntity, r = i === v.In ? this.width - this.halfEntity : this.halfEntity, o = this.halfEntity / 2;
    return H`<g data-pos="0" class="gtpc-flow gtpc-${e}-to-${t}-flow" style="stroke: var(--gtpc-${e}-color)">
			<path d="${d.getStraightPath(s, o, r, o)}" />
			<circle cx="0" cy="0" r="0.5" style="fill: var(--gtpc-${e}-color)"/>
		</g>`;
  }
};
Be([
  E()
], It.prototype, "flowPowers", 2);
It = Be([
  D("givtcp-power-flow-card-layout-list")
], It);
var ys = Object.defineProperty, fs = Object.getOwnPropertyDescriptor, Jt = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? fs(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (r = (s ? n(t, i, r) : n(r)) || r);
  return s && r && ys(t, i, r), r;
};
window.customCards = window.customCards || [];
window.customCards.push({
  type: "givtcp-power-flow-card",
  name: "GivTCP Power Flow Card",
  description: "GivTCP Power Flow Card"
});
let rt = class extends T {
  constructor() {
    super(), this.flows = [
      { from: "solar", to: "grid", direction: v.Out },
      { from: "solar", to: "battery", direction: v.In },
      { from: "solar", to: "house", direction: v.In },
      { from: "battery", to: "house", direction: v.Out },
      { from: "battery", to: "grid", direction: v.In },
      { from: "grid", to: "house", direction: v.In },
      { from: "grid", to: "battery", direction: v.Out },
      { from: "house", to: "custom1", direction: v.Out },
      { from: "house", to: "custom2", direction: v.Out }
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
    return ((e = this._config) == null ? void 0 : e.grid_dot_easing) === void 0 ? De : (t = this._config) == null ? void 0 : t.grid_dot_easing;
  }
  get _houseDotEasing() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.house_dot_easing) === void 0 ? Ue : (t = this._config) == null ? void 0 : t.house_dot_easing;
  }
  get _solarDotEasing() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.solar_dot_easing) === void 0 ? ct : (t = this._config) == null ? void 0 : t.solar_dot_easing;
  }
  get _batteryDotEasing() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.battery_dot_easing) === void 0 ? $e : (t = this._config) == null ? void 0 : t.battery_dot_easing;
  }
  get _epsDotEasing() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.eps_dot_easing) === void 0 ? Pe : (t = this._config) == null ? void 0 : t.eps_dot_easing;
  }
  get _custom1DotEasing() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.custom1_dot_easing) === void 0 ? di : (t = this._config) == null ? void 0 : t.custom1_dot_easing;
  }
  get _custom2DotEasing() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.custom2_dot_easing) === void 0 ? _i : (t = this._config) == null ? void 0 : t.custom2_dot_easing;
  }
  get _epsEnabled() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.eps_enabled) === void 0 || !this._batteryEnabled ? Le : (t = this._config) == null ? void 0 : t.eps_enabled;
  }
  get _detailsEnabled() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.details_enabled) === void 0 ? Ce : (t = this._config) == null ? void 0 : t.details_enabled;
  }
  get _detailEntities() {
    return this._detailsEnabled ? this._config.detail_entities.map((e) => this.hass.states[e]) : [];
  }
  get _epsTotal() {
    return this._inverterName && this._epsEnabled ? this._inverterName.reduce(
      (e, t) => {
        const i = this.hass.states[`sensor.${t.prefix}_eps_power${t.suffix}}`];
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
    return ((e = this._config) == null ? void 0 : e.single_invertor) === void 0 ? ft : (t = this._config) == null ? void 0 : t.single_invertor;
  }
  // private get _singleBattery(): boolean {
  // 	return this._config?.single_battery === undefined ? SINGLE_BATTERY_DEFAULT : this._config?.single_battery;
  // }
  get _custom1Enabled() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.custom1_enabled) === void 0 ? ui : (t = this._config) == null ? void 0 : t.custom1_enabled;
  }
  get _custom2Enabled() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.custom2_enabled) === void 0 ? yi : (t = this._config) == null ? void 0 : t.custom2_enabled;
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
    return ((e = this._config) == null ? void 0 : e.line_style) || Me;
  }
  get _entitySize() {
    var e;
    return 10 - (((e = this._config) == null ? void 0 : e.entity_size) || Ht);
  }
  get _dotSpeed() {
    var e;
    return ((e = this._config) == null ? void 0 : e.dot_speed) || Gt;
  }
  get _dotSize() {
    var e;
    return ((e = this._config) == null ? void 0 : e.dot_size) || Rt;
  }
  get _batterySoc() {
    const e = this._inverterName.map((i) => {
      const s = this.hass.states[`sensor.${i.prefix}_soc${i.suffix}`];
      return s && s.state || s ? parseInt(s.state, 10) : void 0;
    }).filter((i) => i != null), t = e.reduce((i, s) => i + s, 0);
    return Math.round(t / e.length);
  }
  get _entityLayout() {
    var e;
    return ((e = this._config) == null ? void 0 : e.entity_layout) || Te;
  }
  get _centreEntity() {
    var e;
    return ((e = this._config) == null ? void 0 : e.centre_entity) || Ot;
  }
  get _cornerRadius() {
    var e;
    return ((e = this._config) == null ? void 0 : e.corner_radius) || Wt;
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
    return ((e = this._config) == null ? void 0 : e.power_margin) || Yt;
  }
  get _lineGap() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.line_gap) === void 0 ? Bt : (t = this._config) == null ? void 0 : t.line_gap;
  }
  get _circleSize() {
    var e;
    return ((e = this._config) == null ? void 0 : e.circle_size) || zt;
  }
  get _lineWidth() {
    var e;
    return ((e = this._config) == null ? void 0 : e.line_width) || it;
  }
  get _entityLineWidth() {
    var e;
    return ((e = this._config) == null ? void 0 : e.entity_line_width) || this._lineWidth;
  }
  get _numColumn() {
    var e;
    return ((e = this._config) == null ? void 0 : e.num_detail_columns) || jt;
  }
  get _hideInactiveFlows() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.hide_inactive_flows) === void 0 ? Ie : (t = this._config) == null ? void 0 : t.hide_inactive_flows;
  }
  get _colourIconsAndText() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.colour_icons_and_text) === void 0 ? Ee : (t = this._config) == null ? void 0 : t.colour_icons_and_text;
  }
  get _solarEnabled() {
    var e, t;
    return ((e = this._config) == null ? void 0 : e.solar_enabled) === void 0 ? ze : (t = this._config) == null ? void 0 : t.solar_enabled;
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
    var s, r, o, n, a, c, l;
    let i;
    switch (e) {
      case "solar":
        return ((s = this._config) == null ? void 0 : s.solar_icon) || We;
      case "battery":
        if (i = ((r = this._config) == null ? void 0 : r.battery_icon) || Lt, i === Lt && t !== void 0) {
          const g = this.getTotalFor("battery", v.In), u = this.getTotalFor("battery", v.Out);
          g && u && g.total > u.total && (i = i + "-charging");
          const y = Math.ceil(t / 10) * 10;
          i = i + "-" + y.toString();
        }
        return i;
      case "grid":
        return ((o = this._config) == null ? void 0 : o.grid_icon) || Fe;
      case "house":
        return ((n = this._config) == null ? void 0 : n.house_icon) || Ne;
      case "eps":
        return ((a = this._config) == null ? void 0 : a.eps_icon) || Oe;
      case "custom1":
        return ((c = this._config) == null ? void 0 : c.custom1_icon) || Se;
      case "custom2":
        return ((l = this._config) == null ? void 0 : l.custom2_icon) || Ae;
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
      return e === "grid" && t === "house" ? 668 : e === "solar" && t === "house" ? 724 : e === "solar" && t === "battery" ? 764 : e === "battery" && t === "house" || e === "battery" && t === "grid" ? 0 : e === "grid" && t === "battery" ? 445 : e === "solar" && t === "grid" ? 0 : e === "house" && t === "custom1" ? 800 : e === "house" && t === "custom2" ? 1e3 : 0;
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
          const r = t === v.In ? s.to === e : s.from === e, o = this.getCleanPowerForFlow(s.from, s.to);
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
    const r = 75e-4 * i, o = e * r, n = t + o / 100;
    if (n >= 1)
      return 0;
    let a;
    const c = n;
    switch (s) {
      case b.EaseIn:
        a = c * c * c;
        break;
      case b.EaseOut:
        a = 1 - (1 - c) ** 3;
        break;
      case b.EaseInOut:
        c < 0.5 ? a = 4 * c ** 3 : a = 1 - (-2 * c + 2) ** 3 / 2;
        break;
      case b.Linear:
      default:
        a = c;
        break;
    }
    return a;
  }
  advanceFlowDot(e, t, i, s) {
    var c;
    const r = (c = this.shadowRoot) == null ? void 0 : c.querySelector(`.gtpc-${t}-to-${i}-flow`);
    if (!r)
      return;
    const o = r.querySelector("path"), n = r.querySelector("circle"), a = this.getCleanPowerForFlow(t, i);
    if (a !== void 0)
      try {
        const l = parseFloat(r.getAttribute("data-pos") || "0");
        r.setAttribute(
          "data-pos",
          this.calculateDotPosition(e, l, a / 1e3 * this._dotSpeed, b.Linear).toString()
        );
        let g = this.calculateDotPosition(
          e,
          l,
          a / 1e3 * this._dotSpeed,
          this._dotEasingFor(t)
        );
        s === v.Out && (g = 1 - g), n.setAttribute("visibility", a ? "visible" : "hidden");
        const u = o.getTotalLength(), y = o.getPointAtLength(u * g);
        n.setAttributeNS(null, "cx", y.x.toString()), n.setAttributeNS(null, "cy", y.y.toString()), n.setAttributeNS(null, "r", (this._dotSize / 4).toString()), r.setAttribute("data-power", a.toString());
      } catch (l) {
        console.error(l);
      }
  }
  render() {
    var o;
    const e = [
      {
        type: "eps",
        icon: this.getIconFor("eps"),
        name: "EPS",
        out: this.getTotalFor("eps", v.Out)
      },
      {
        type: "custom1",
        icon: this.getIconFor("custom1"),
        name: this._custom1Name,
        extra: this._custom1Extra,
        out: this.getTotalFor("custom1", v.Out)
      },
      {
        type: "custom2",
        icon: this.getIconFor("custom2"),
        name: this._custom2Name,
        extra: this._custom2Extra,
        out: this.getTotalFor("custom2", v.Out)
      },
      {
        type: "solar",
        icon: this.getIconFor("solar"),
        name: "Solar",
        out: this.getTotalFor("solar", v.Out)
      },
      {
        type: "house",
        icon: this.getIconFor("house"),
        name: "House",
        in: this.getTotalFor("house", v.In)
      },
      {
        type: "grid",
        icon: this.getIconFor("grid"),
        name: "Grid",
        out: this.getTotalFor("grid", v.In),
        in: this.getTotalFor("grid", v.Out)
      },
      {
        type: "battery",
        icon: this.getIconFor("battery", this._batterySoc),
        name: "Battery",
        extra: this._batterySoc !== void 0 ? `${this._batterySoc}${Ei}` : void 0,
        out: this.getTotalFor("battery", v.Out),
        in: this.getTotalFor("battery", v.In)
      }
    ].filter((n) => n.in !== void 0 || n.out !== void 0), t = this._activeFlows.map((n) => ({
      from: n.from,
      to: n.to,
      value: this.getCleanPowerForFlow(n.from, n.to)
    })).filter((n) => n.value !== void 0);
    let i = _``, s = "gtpc-content";
    switch (this._epsEnabled && (s += " gtpc-eps"), this._custom1Enabled && (s += " gtpc-custom1"), this._custom2Enabled && (s += " gtpc-custom2"), this._entityLayout) {
      case A.Cross:
        i = _`<givtcp-power-flow-card-layout-cross
					class="${s}"
					.flowData=${e}
					.flows=${this._activeFlows}
					@entity-details=${(n) => this.entityDetails(n)}
					.entityLineWidth=${this._entityLineWidth}
					.lineGap=${this._lineGap}
					.cornerRadius=${this._cornerRadius}
					.entitySize=${this._entitySize}
				/>`;
        break;
      case A.Square:
        i = _`<givtcp-power-flow-card-layout-square
					class="${s}"
					.flowData=${e}
					.flows=${this._activeFlows}
					@entity-details=${(n) => this.entityDetails(n)}
					.entityLineWidth=${this._entityLineWidth}
					.lineGap=${this._lineGap}
					.lineStyle=${this._lineStyle}
					.entitySize=${this._entitySize}
				/>`;
        break;
      case A.Circle:
        i = _`<givtcp-power-flow-card-layout-circle
					class="${s}"
					.flowData=${e}
					.flows=${this._activeFlows}
					@entity-details=${(n) => this.entityDetails(n)}
					.entityLineWidth=${this._entityLineWidth}
					.centreEntity=${this._centreEntity}
					.circleSize=${this._circleSize}
					.entitySize=${this._entitySize}
				/>`;
        break;
      case A.List:
        i = _`<givtcp-power-flow-card-layout-list
					class="${s}"
					.flowData=${e}
					.flows=${this._activeFlows}
					.flowPowers=${t}
					@entity-details=${(n) => this.entityDetails(n)}
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
        x(this, "hass-more-info", {
          entityId: `sensor.${this._inverterName[0].prefix}_grid_power${this._inverterName[0].suffix}`
        });
        break;
      case "solar":
        x(this, "hass-more-info", {
          entityId: `sensor.${this._inverterName[0].prefix}_pv_power${this._inverterName[0].suffix}`
        });
        break;
      case "battery":
        x(this, "hass-more-info", {
          entityId: `sensor.${this._inverterName[0].prefix}_battery_power${this._inverterName[0].suffix}`
        });
        break;
      case "eps":
        x(this, "hass-more-info", {
          entityId: `sensor.${this._inverterName[0].prefix}_eps_power${this._inverterName[0].suffix}`
        });
        break;
      case "custom1":
        x(this, "hass-more-info", { entityId: (t = this._config) == null ? void 0 : t.custom1_sensor });
        break;
      case "custom2":
        x(this, "hass-more-info", { entityId: (i = this._config) == null ? void 0 : i.custom2_sensor });
        break;
      case "house":
        x(this, "hass-more-info", {
          entityId: `sensor.${this._inverterName[0].prefix}_load_power${this._inverterName[0].suffix}`
        });
        break;
    }
  }
  setConfig(e) {
    var s;
    if (!e.invertor && !e.invertors)
      throw new Error("You need to define at least one invertor entity");
    if (!e.battery && !e.batteries)
      throw new Error("You need to define at least one battery entity");
    this._config = dt.migrateConfig(e, !0);
    const t = dt.getDefaults(this._config), i = (s = this.shadowRoot) == null ? void 0 : s.querySelector(".gtpc-content");
    i && this.setEntitySize(i.clientWidth), this.style.setProperty("--gtpc-column-width", `${100 / this._numColumn}%`), this.style.setProperty("--gtpc-line-size", `${this._lineWidth}px`), this.style.setProperty("--gtpc-entity-line-size", `${this._entityLineWidth}px`), this.style.setProperty("--gtpc-inactive-flow-display", this._hideInactiveFlows ? "none" : "block"), this._colourIconsAndText ? this.style.removeProperty("--gtpc-icons-and-text-colour") : this.style.setProperty("--gtpc-icons-and-text-colour", "var(--primary-text-color)"), xe.forEach((r) => {
      let o = this._config[r + "_colour"];
      o || (o = t[r + "_colour"]), typeof o != "string" ? o = `rgb(${o[0]}, ${o[1]}, ${o[2]})` : o = `var(--${o}-color)`, this.style.setProperty(`--gtpc-${r}-color`, o);
    });
  }
  getCardSize() {
    return this.clientHeight > 0 ? Math.ceil(this.clientHeight / 50) : 3;
  }
};
rt.styles = ke`
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
		.gtpc-entity.gtpc-entity-single > span > ha-icon {
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
Jt([
  Mt()
], rt.prototype, "_config", 2);
Jt([
  E()
], rt.prototype, "hass", 2);
rt = Jt([
  D("givtcp-power-flow-card")
], rt);
export {
  rt as GivTCPPowerFlowCard
};
