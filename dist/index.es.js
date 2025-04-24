(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-1{padding:calc(var(--tw-spacing)*1)}.tw\\:px-8{padding-inline:calc(var(--tw-spacing)*8)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Vi = {
  display_type: "canvas",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "1px solid black",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 500, height: 500 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-1",
  controls_class: "tw:p-1",
  container_class: "tw:font-sans tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-4 tw:px-8 tw:sm:p-0"
};
function tn(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Wi(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Ar(t) {
  let n, e, r;
  t.length !== 2 ? (n = tn, e = (s, u) => tn(t(s), u), r = (s, u) => t(s) - u) : (n = t === tn || t === Wi ? t : Zi, e = t, r = t);
  function i(s, u, l = 0, f = s.length) {
    if (l < f) {
      if (n(u, u) !== 0) return f;
      do {
        const c = l + f >>> 1;
        e(s[c], u) < 0 ? l = c + 1 : f = c;
      } while (l < f);
    }
    return l;
  }
  function o(s, u, l = 0, f = s.length) {
    if (l < f) {
      if (n(u, u) !== 0) return f;
      do {
        const c = l + f >>> 1;
        e(s[c], u) <= 0 ? l = c + 1 : f = c;
      } while (l < f);
    }
    return l;
  }
  function a(s, u, l = 0, f = s.length) {
    const c = i(s, u, l, f - 1);
    return c > l && r(s[c - 1], u) > -r(s[c], u) ? c - 1 : c;
  }
  return { left: i, center: a, right: o };
}
function Zi() {
  return 0;
}
function ji(t) {
  return t === null ? NaN : +t;
}
const Ji = Ar(tn), Qi = Ji.right;
Ar(ji).center;
const to = Math.sqrt(50), no = Math.sqrt(10), eo = Math.sqrt(2);
function cn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= to ? 10 : o >= no ? 5 : o >= eo ? 2 : 1;
  let s, u, l;
  return i < 0 ? (l = Math.pow(10, -i) / a, s = Math.round(t * l), u = Math.round(n * l), s / l < t && ++s, u / l > n && --u, l = -l) : (l = Math.pow(10, i) * a, s = Math.round(t / l), u = Math.round(n / l), s * l < t && ++s, u * l > n && --u), u < s && 0.5 <= e && e < 2 ? cn(t, n, e * 2) : [s, u, l];
}
function ro(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? cn(n, t, e) : cn(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, u = new Array(s);
  if (r)
    if (a < 0) for (let l = 0; l < s; ++l) u[l] = (o - l) / -a;
    else for (let l = 0; l < s; ++l) u[l] = (o - l) * a;
  else if (a < 0) for (let l = 0; l < s; ++l) u[l] = (i + l) / -a;
  else for (let l = 0; l < s; ++l) u[l] = (i + l) * a;
  return u;
}
function Gn(t, n, e) {
  return n = +n, t = +t, e = +e, cn(t, n, e)[2];
}
function io(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Gn(n, t, e) : Gn(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Yt(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function oo(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
var ao = { value: () => {
} };
function he() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new nn(e);
}
function nn(t) {
  this._ = t;
}
function so(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
nn.prototype = he.prototype = {
  constructor: nn,
  on: function(t, n) {
    var e = this._, r = so(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = uo(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = Ie(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Ie(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new nn(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function uo(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Ie(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = ao, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Un = "http://www.w3.org/1999/xhtml";
const Ce = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Un,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function xn(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Ce.hasOwnProperty(n) ? { space: Ce[n], local: t } : t;
}
function lo(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Un && n.documentElement.namespaceURI === Un ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function co(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Pr(t) {
  var n = xn(t);
  return (n.local ? co : lo)(n);
}
function fo() {
}
function pe(t) {
  return t == null ? fo : function() {
    return this.querySelector(t);
  };
}
function ho(t) {
  typeof t != "function" && (t = pe(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), u, l, f = 0; f < a; ++f)
      (u = o[f]) && (l = t.call(u, u.__data__, f, o)) && ("__data__" in u && (l.__data__ = u.__data__), s[f] = l);
  return new I(r, this._parents);
}
function po(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function go() {
  return [];
}
function Sr(t) {
  return t == null ? go : function() {
    return this.querySelectorAll(t);
  };
}
function _o(t) {
  return function() {
    return po(t.apply(this, arguments));
  };
}
function yo(t) {
  typeof t == "function" ? t = _o(t) : t = Sr(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
  return new I(r, i);
}
function Er(t) {
  return function() {
    return this.matches(t);
  };
}
function kr(t) {
  return function(n) {
    return n.matches(t);
  };
}
var mo = Array.prototype.find;
function wo(t) {
  return function() {
    return mo.call(this.children, t);
  };
}
function vo() {
  return this.firstElementChild;
}
function xo(t) {
  return this.select(t == null ? vo : wo(typeof t == "function" ? t : kr(t)));
}
var bo = Array.prototype.filter;
function Mo() {
  return Array.from(this.children);
}
function $o(t) {
  return function() {
    return bo.call(this.children, t);
  };
}
function To(t) {
  return this.selectAll(t == null ? Mo : $o(typeof t == "function" ? t : kr(t)));
}
function Ao(t) {
  typeof t != "function" && (t = Er(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new I(r, this._parents);
}
function Nr(t) {
  return new Array(t.length);
}
function Po() {
  return new I(this._enter || this._groups.map(Nr), this._parents);
}
function fn(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
fn.prototype = {
  constructor: fn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function So(t) {
  return function() {
    return t;
  };
}
function Eo(t, n, e, r, i, o) {
  for (var a = 0, s, u = n.length, l = o.length; a < l; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new fn(t, o[a]);
  for (; a < u; ++a)
    (s = n[a]) && (i[a] = s);
}
function ko(t, n, e, r, i, o, a) {
  var s, u, l = /* @__PURE__ */ new Map(), f = n.length, c = o.length, h = new Array(f), g;
  for (s = 0; s < f; ++s)
    (u = n[s]) && (h[s] = g = a.call(u, u.__data__, s, n) + "", l.has(g) ? i[s] = u : l.set(g, u));
  for (s = 0; s < c; ++s)
    g = a.call(t, o[s], s, o) + "", (u = l.get(g)) ? (r[s] = u, u.__data__ = o[s], l.delete(g)) : e[s] = new fn(t, o[s]);
  for (s = 0; s < f; ++s)
    (u = n[s]) && l.get(h[s]) === u && (i[s] = u);
}
function No(t) {
  return t.__data__;
}
function zo(t, n) {
  if (!arguments.length) return Array.from(this, No);
  var e = n ? ko : Eo, r = this._parents, i = this._groups;
  typeof t != "function" && (t = So(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var f = r[l], c = i[l], h = c.length, g = Oo(t.call(f, f && f.__data__, l, r)), p = g.length, d = s[l] = new Array(p), x = a[l] = new Array(p), M = u[l] = new Array(h);
    e(f, c, d, x, M, g, n);
    for (var T = 0, A = 0, _, m; T < p; ++T)
      if (_ = d[T]) {
        for (T >= A && (A = T + 1); !(m = x[A]) && ++A < p; ) ;
        _._next = m || null;
      }
  }
  return a = new I(a, r), a._enter = s, a._exit = u, a;
}
function Oo(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Io() {
  return new I(this._exit || this._groups.map(Nr), this._parents);
}
function Co(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Ro(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var l = e[u], f = r[u], c = l.length, h = s[u] = new Array(c), g, p = 0; p < c; ++p)
      (g = l[p] || f[p]) && (h[p] = g);
  for (; u < i; ++u)
    s[u] = e[u];
  return new I(s, this._parents);
}
function Fo() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Lo(t) {
  t || (t = Do);
  function n(c, h) {
    return c && h ? t(c.__data__, h.__data__) : !c - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, u = i[o] = new Array(s), l, f = 0; f < s; ++f)
      (l = a[f]) && (u[f] = l);
    u.sort(n);
  }
  return new I(i, this._parents).order();
}
function Do(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ho() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function qo() {
  return Array.from(this);
}
function Bo() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Xo() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Go() {
  return !this.node();
}
function Uo(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Yo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ko(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Vo(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Wo(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Zo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function jo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Jo(t, n) {
  var e = xn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Ko : Yo : typeof n == "function" ? e.local ? jo : Zo : e.local ? Wo : Vo)(e, n));
}
function zr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Qo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ta(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function na(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function ea(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Qo : typeof n == "function" ? na : ta)(t, n, e ?? "")) : bt(this.node(), t);
}
function bt(t, n) {
  return t.style.getPropertyValue(n) || zr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function ra(t) {
  return function() {
    delete this[t];
  };
}
function ia(t, n) {
  return function() {
    this[t] = n;
  };
}
function oa(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function aa(t, n) {
  return arguments.length > 1 ? this.each((n == null ? ra : typeof n == "function" ? oa : ia)(t, n)) : this.node()[t];
}
function Or(t) {
  return t.trim().split(/^|\s+/);
}
function de(t) {
  return t.classList || new Ir(t);
}
function Ir(t) {
  this._node = t, this._names = Or(t.getAttribute("class") || "");
}
Ir.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Cr(t, n) {
  for (var e = de(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Rr(t, n) {
  for (var e = de(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function sa(t) {
  return function() {
    Cr(this, t);
  };
}
function ua(t) {
  return function() {
    Rr(this, t);
  };
}
function la(t, n) {
  return function() {
    (n.apply(this, arguments) ? Cr : Rr)(this, t);
  };
}
function ca(t, n) {
  var e = Or(t + "");
  if (arguments.length < 2) {
    for (var r = de(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? la : n ? sa : ua)(e, n));
}
function fa() {
  this.textContent = "";
}
function ha(t) {
  return function() {
    this.textContent = t;
  };
}
function pa(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function da(t) {
  return arguments.length ? this.each(t == null ? fa : (typeof t == "function" ? pa : ha)(t)) : this.node().textContent;
}
function ga() {
  this.innerHTML = "";
}
function _a(t) {
  return function() {
    this.innerHTML = t;
  };
}
function ya(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function ma(t) {
  return arguments.length ? this.each(t == null ? ga : (typeof t == "function" ? ya : _a)(t)) : this.node().innerHTML;
}
function wa() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function va() {
  return this.each(wa);
}
function xa() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ba() {
  return this.each(xa);
}
function Ma(t) {
  var n = typeof t == "function" ? t : Pr(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function $a() {
  return null;
}
function Ta(t, n) {
  var e = typeof t == "function" ? t : Pr(t), r = n == null ? $a : typeof n == "function" ? n : pe(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Aa() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Pa() {
  return this.each(Aa);
}
function Sa() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Ea() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function ka(t) {
  return this.select(t ? Ea : Sa);
}
function Na(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function za(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Oa(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Ia(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Ca(t, n, e) {
  return function() {
    var r = this.__on, i, o = za(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Ra(t, n, e) {
  var r = Oa(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, l = s.length, f; u < l; ++u)
        for (i = 0, f = s[u]; i < o; ++i)
          if ((a = r[i]).type === f.type && a.name === f.name)
            return f.value;
    }
    return;
  }
  for (s = n ? Ca : Ia, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function Fr(t, n, e) {
  var r = zr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Fa(t, n) {
  return function() {
    return Fr(this, t, n);
  };
}
function La(t, n) {
  return function() {
    return Fr(this, t, n.apply(this, arguments));
  };
}
function Da(t, n) {
  return this.each((typeof n == "function" ? La : Fa)(t, n));
}
function* Ha() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var Lr = [null];
function I(t, n) {
  this._groups = t, this._parents = n;
}
function qt() {
  return new I([[document.documentElement]], Lr);
}
function qa() {
  return this;
}
I.prototype = qt.prototype = {
  constructor: I,
  select: ho,
  selectAll: yo,
  selectChild: xo,
  selectChildren: To,
  filter: Ao,
  data: zo,
  enter: Po,
  exit: Io,
  join: Co,
  merge: Ro,
  selection: qa,
  order: Fo,
  sort: Lo,
  call: Ho,
  nodes: qo,
  node: Bo,
  size: Xo,
  empty: Go,
  each: Uo,
  attr: Jo,
  style: ea,
  property: aa,
  classed: ca,
  text: da,
  html: ma,
  raise: va,
  lower: ba,
  append: Ma,
  insert: Ta,
  remove: Pa,
  clone: ka,
  datum: Na,
  on: Ra,
  dispatch: Da,
  [Symbol.iterator]: Ha
};
function P(t) {
  return typeof t == "string" ? new I([[document.querySelector(t)]], [document.documentElement]) : new I([[t]], Lr);
}
function Ba(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function Yn(t, n) {
  if (t = Ba(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Xa = { passive: !1 }, It = { capture: !0, passive: !1 };
function Fn(t) {
  t.stopImmediatePropagation();
}
function vt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Ga(t) {
  var n = t.document.documentElement, e = P(t).on("dragstart.drag", vt, It);
  "onselectstart" in n ? e.on("selectstart.drag", vt, It) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Ua(t, n) {
  var e = t.document.documentElement, r = P(t).on("dragstart.drag", null);
  n && (r.on("click.drag", vt, It), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Kt = (t) => () => t;
function Kn(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: u,
  dy: l,
  dispatch: f
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: f }
  });
}
Kn.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Ya(t) {
  return !t.ctrlKey && !t.button;
}
function Ka() {
  return this.parentNode;
}
function Va(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function Wa() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Za() {
  var t = Ya, n = Ka, e = Va, r = Wa, i = {}, o = he("start", "drag", "end"), a = 0, s, u, l, f, c = 0;
  function h(_) {
    _.on("mousedown.drag", g).filter(r).on("touchstart.drag", x).on("touchmove.drag", M, Xa).on("touchend.drag touchcancel.drag", T).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(_, m) {
    if (!(f || !t.call(this, _, m))) {
      var S = A(this, n.call(this, _, m), _, m, "mouse");
      S && (P(_.view).on("mousemove.drag", p, It).on("mouseup.drag", d, It), Ga(_.view), Fn(_), l = !1, s = _.clientX, u = _.clientY, S("start", _));
    }
  }
  function p(_) {
    if (vt(_), !l) {
      var m = _.clientX - s, S = _.clientY - u;
      l = m * m + S * S > c;
    }
    i.mouse("drag", _);
  }
  function d(_) {
    P(_.view).on("mousemove.drag mouseup.drag", null), Ua(_.view, l), vt(_), i.mouse("end", _);
  }
  function x(_, m) {
    if (t.call(this, _, m)) {
      var S = _.changedTouches, E = n.call(this, _, m), N = S.length, X, W;
      for (X = 0; X < N; ++X)
        (W = A(this, E, _, m, S[X].identifier, S[X])) && (Fn(_), W("start", _, S[X]));
    }
  }
  function M(_) {
    var m = _.changedTouches, S = m.length, E, N;
    for (E = 0; E < S; ++E)
      (N = i[m[E].identifier]) && (vt(_), N("drag", _, m[E]));
  }
  function T(_) {
    var m = _.changedTouches, S = m.length, E, N;
    for (f && clearTimeout(f), f = setTimeout(function() {
      f = null;
    }, 500), E = 0; E < S; ++E)
      (N = i[m[E].identifier]) && (Fn(_), N("end", _, m[E]));
  }
  function A(_, m, S, E, N, X) {
    var W = o.copy(), w = Yn(X || S, m), G, z, L;
    if ((L = e.call(_, new Kn("beforestart", {
      sourceEvent: S,
      target: h,
      identifier: N,
      active: a,
      x: w[0],
      y: w[1],
      dx: 0,
      dy: 0,
      dispatch: W
    }), E)) != null)
      return G = L.x - w[0] || 0, z = L.y - w[1] || 0, function Ut(it, ot, yt) {
        var C = w, Rn;
        switch (it) {
          case "start":
            i[N] = Ut, Rn = a++;
            break;
          case "end":
            delete i[N], --a;
          // falls through
          case "drag":
            w = Yn(yt || ot, m), Rn = a;
            break;
        }
        W.call(
          it,
          _,
          new Kn(it, {
            sourceEvent: ot,
            subject: L,
            target: h,
            identifier: N,
            active: Rn,
            x: w[0] + G,
            y: w[1] + z,
            dx: w[0] - C[0],
            dy: w[1] - C[1],
            dispatch: W
          }),
          E
        );
      };
  }
  return h.filter = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : Kt(!!_), h) : t;
  }, h.container = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : Kt(_), h) : n;
  }, h.subject = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : Kt(_), h) : e;
  }, h.touchable = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : Kt(!!_), h) : r;
  }, h.on = function() {
    var _ = o.on.apply(o, arguments);
    return _ === o ? h : _;
  }, h.clickDistance = function(_) {
    return arguments.length ? (c = (_ = +_) * _, h) : Math.sqrt(c);
  }, h;
}
function ge(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Dr(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Bt() {
}
var Ct = 0.7, hn = 1 / Ct, xt = "\\s*([+-]?\\d+)\\s*", Rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", U = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ja = /^#([0-9a-f]{3,8})$/, Ja = new RegExp(`^rgb\\(${xt},${xt},${xt}\\)$`), Qa = new RegExp(`^rgb\\(${U},${U},${U}\\)$`), ts = new RegExp(`^rgba\\(${xt},${xt},${xt},${Rt}\\)$`), ns = new RegExp(`^rgba\\(${U},${U},${U},${Rt}\\)$`), es = new RegExp(`^hsl\\(${Rt},${U},${U}\\)$`), rs = new RegExp(`^hsla\\(${Rt},${U},${U},${Rt}\\)$`), Re = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
ge(Bt, lt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Fe,
  // Deprecated! Use color.formatHex.
  formatHex: Fe,
  formatHex8: is,
  formatHsl: os,
  formatRgb: Le,
  toString: Le
});
function Fe() {
  return this.rgb().formatHex();
}
function is() {
  return this.rgb().formatHex8();
}
function os() {
  return Hr(this).formatHsl();
}
function Le() {
  return this.rgb().formatRgb();
}
function lt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = ja.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? De(n) : e === 3 ? new O(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Vt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Vt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Ja.exec(t)) ? new O(n[1], n[2], n[3], 1) : (n = Qa.exec(t)) ? new O(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = ts.exec(t)) ? Vt(n[1], n[2], n[3], n[4]) : (n = ns.exec(t)) ? Vt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = es.exec(t)) ? Be(n[1], n[2] / 100, n[3] / 100, 1) : (n = rs.exec(t)) ? Be(n[1], n[2] / 100, n[3] / 100, n[4]) : Re.hasOwnProperty(t) ? De(Re[t]) : t === "transparent" ? new O(NaN, NaN, NaN, 0) : null;
}
function De(t) {
  return new O(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Vt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new O(t, n, e, r);
}
function as(t) {
  return t instanceof Bt || (t = lt(t)), t ? (t = t.rgb(), new O(t.r, t.g, t.b, t.opacity)) : new O();
}
function Vn(t, n, e, r) {
  return arguments.length === 1 ? as(t) : new O(t, n, e, r ?? 1);
}
function O(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
ge(O, Vn, Dr(Bt, {
  brighter(t) {
    return t = t == null ? hn : Math.pow(hn, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ct : Math.pow(Ct, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new O(ut(this.r), ut(this.g), ut(this.b), pn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: He,
  // Deprecated! Use color.formatHex.
  formatHex: He,
  formatHex8: ss,
  formatRgb: qe,
  toString: qe
}));
function He() {
  return `#${st(this.r)}${st(this.g)}${st(this.b)}`;
}
function ss() {
  return `#${st(this.r)}${st(this.g)}${st(this.b)}${st((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function qe() {
  const t = pn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${ut(this.r)}, ${ut(this.g)}, ${ut(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function pn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function ut(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function st(t) {
  return t = ut(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Be(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new H(t, n, e, r);
}
function Hr(t) {
  if (t instanceof H) return new H(t.h, t.s, t.l, t.opacity);
  if (t instanceof Bt || (t = lt(t)), !t) return new H();
  if (t instanceof H) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new H(a, s, u, t.opacity);
}
function us(t, n, e, r) {
  return arguments.length === 1 ? Hr(t) : new H(t, n, e, r ?? 1);
}
function H(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
ge(H, us, Dr(Bt, {
  brighter(t) {
    return t = t == null ? hn : Math.pow(hn, t), new H(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ct : Math.pow(Ct, t), new H(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new O(
      Ln(t >= 240 ? t - 240 : t + 120, i, r),
      Ln(t, i, r),
      Ln(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new H(Xe(this.h), Wt(this.s), Wt(this.l), pn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = pn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Xe(this.h)}, ${Wt(this.s) * 100}%, ${Wt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Xe(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Wt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Ln(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const _e = (t) => () => t;
function ls(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function cs(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function fs(t) {
  return (t = +t) == 1 ? qr : function(n, e) {
    return e - n ? cs(n, e, t) : _e(isNaN(n) ? e : n);
  };
}
function qr(t, n) {
  var e = n - t;
  return e ? ls(t, e) : _e(isNaN(t) ? n : t);
}
const dn = function t(n) {
  var e = fs(n);
  function r(i, o) {
    var a = e((i = Vn(i)).r, (o = Vn(o)).r), s = e(i.g, o.g), u = e(i.b, o.b), l = qr(i.opacity, o.opacity);
    return function(f) {
      return i.r = a(f), i.g = s(f), i.b = u(f), i.opacity = l(f), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function hs(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function ps(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function ds(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = ye(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function gs(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function D(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function _s(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = ye(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var Wn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Dn = new RegExp(Wn.source, "g");
function ys(t) {
  return function() {
    return t;
  };
}
function ms(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Br(t, n) {
  var e = Wn.lastIndex = Dn.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", n = n + ""; (r = Wn.exec(t)) && (i = Dn.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: D(r, i) })), e = Dn.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? ms(u[0].x) : ys(n) : (n = u.length, function(l) {
    for (var f = 0, c; f < n; ++f) s[(c = u[f]).i] = c.x(l);
    return s.join("");
  });
}
function ye(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? _e(n) : (e === "number" ? D : e === "string" ? (r = lt(n)) ? (n = r, dn) : Br : n instanceof lt ? dn : n instanceof Date ? gs : ps(n) ? hs : Array.isArray(n) ? ds : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? _s : D)(t, n);
}
function ws(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Ge = 180 / Math.PI, Zn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Xr(t, n, e, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (u = t * e + n * r) && (e -= t * u, r -= n * u), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, u /= s), t * r < n * e && (t = -t, n = -n, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * Ge,
    skewX: Math.atan(u) * Ge,
    scaleX: a,
    scaleY: s
  };
}
var Zt;
function vs(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Zn : Xr(n.a, n.b, n.c, n.d, n.e, n.f);
}
function xs(t) {
  return t == null || (Zt || (Zt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Zt.setAttribute("transform", t), !(t = Zt.transform.baseVal.consolidate())) ? Zn : (t = t.matrix, Xr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Gr(t, n, e, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, f, c, h, g, p) {
    if (l !== c || f !== h) {
      var d = g.push("translate(", null, n, null, e);
      p.push({ i: d - 4, x: D(l, c) }, { i: d - 2, x: D(f, h) });
    } else (c || h) && g.push("translate(" + c + n + h + e);
  }
  function a(l, f, c, h) {
    l !== f ? (l - f > 180 ? f += 360 : f - l > 180 && (l += 360), h.push({ i: c.push(i(c) + "rotate(", null, r) - 2, x: D(l, f) })) : f && c.push(i(c) + "rotate(" + f + r);
  }
  function s(l, f, c, h) {
    l !== f ? h.push({ i: c.push(i(c) + "skewX(", null, r) - 2, x: D(l, f) }) : f && c.push(i(c) + "skewX(" + f + r);
  }
  function u(l, f, c, h, g, p) {
    if (l !== c || f !== h) {
      var d = g.push(i(g) + "scale(", null, ",", null, ")");
      p.push({ i: d - 4, x: D(l, c) }, { i: d - 2, x: D(f, h) });
    } else (c !== 1 || h !== 1) && g.push(i(g) + "scale(" + c + "," + h + ")");
  }
  return function(l, f) {
    var c = [], h = [];
    return l = t(l), f = t(f), o(l.translateX, l.translateY, f.translateX, f.translateY, c, h), a(l.rotate, f.rotate, c, h), s(l.skewX, f.skewX, c, h), u(l.scaleX, l.scaleY, f.scaleX, f.scaleY, c, h), l = f = null, function(g) {
      for (var p = -1, d = h.length, x; ++p < d; ) c[(x = h[p]).i] = x.x(g);
      return c.join("");
    };
  };
}
var bs = Gr(vs, "px, ", "px)", "deg)"), Ms = Gr(xs, ", ", ")", ")"), Mt = 0, kt = 0, St = 0, Ur = 1e3, gn, Nt, _n = 0, ct = 0, bn = 0, Ft = typeof performance == "object" && performance.now ? performance : Date, Yr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Mn() {
  return ct || (Yr($s), ct = Ft.now() + bn);
}
function $s() {
  ct = 0;
}
function Lt() {
  this._call = this._time = this._next = null;
}
Lt.prototype = Kr.prototype = {
  constructor: Lt,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Mn() : +e) + (n == null ? 0 : +n), !this._next && Nt !== this && (Nt ? Nt._next = this : gn = this, Nt = this), this._call = t, this._time = e, jn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, jn());
  }
};
function Kr(t, n, e) {
  var r = new Lt();
  return r.restart(t, n, e), r;
}
function Ts() {
  Mn(), ++Mt;
  for (var t = gn, n; t; )
    (n = ct - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Mt;
}
function Ue() {
  ct = (_n = Ft.now()) + bn, Mt = kt = 0;
  try {
    Ts();
  } finally {
    Mt = 0, Ps(), ct = 0;
  }
}
function As() {
  var t = Ft.now(), n = t - _n;
  n > Ur && (bn -= n, _n = t);
}
function Ps() {
  for (var t, n = gn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : gn = e);
  Nt = t, jn(r);
}
function jn(t) {
  if (!Mt) {
    kt && (kt = clearTimeout(kt));
    var n = t - ct;
    n > 24 ? (t < 1 / 0 && (kt = setTimeout(Ue, t - Ft.now() - bn)), St && (St = clearInterval(St))) : (St || (_n = Ft.now(), St = setInterval(As, Ur)), Mt = 1, Yr(Ue));
  }
}
function Ye(t, n, e) {
  var r = new Lt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function Ss(t, n, e) {
  var r = new Lt(), i = n;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? Mn() : +s, r._restart(function u(l) {
      l += i, r._restart(u, i += a, s), o(l);
    }, a, s);
  }, r.restart(t, n, e), r;
}
var Es = he("start", "end", "cancel", "interrupt"), ks = [], Vr = 0, Ke = 1, Jn = 2, en = 3, Ve = 4, Qn = 5, rn = 6;
function $n(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  Ns(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Es,
    tween: ks,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Vr
  });
}
function me(t, n) {
  var e = q(t, n);
  if (e.state > Vr) throw new Error("too late; already scheduled");
  return e;
}
function V(t, n) {
  var e = q(t, n);
  if (e.state > en) throw new Error("too late; already running");
  return e;
}
function q(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Ns(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Kr(o, 0, e.time);
  function o(l) {
    e.state = Ke, e.timer.restart(a, e.delay, e.time), e.delay <= l && a(l - e.delay);
  }
  function a(l) {
    var f, c, h, g;
    if (e.state !== Ke) return u();
    for (f in r)
      if (g = r[f], g.name === e.name) {
        if (g.state === en) return Ye(a);
        g.state === Ve ? (g.state = rn, g.timer.stop(), g.on.call("interrupt", t, t.__data__, g.index, g.group), delete r[f]) : +f < n && (g.state = rn, g.timer.stop(), g.on.call("cancel", t, t.__data__, g.index, g.group), delete r[f]);
      }
    if (Ye(function() {
      e.state === en && (e.state = Ve, e.timer.restart(s, e.delay, e.time), s(l));
    }), e.state = Jn, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Jn) {
      for (e.state = en, i = new Array(h = e.tween.length), f = 0, c = -1; f < h; ++f)
        (g = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (i[++c] = g);
      i.length = c + 1;
    }
  }
  function s(l) {
    for (var f = l < e.duration ? e.ease.call(null, l / e.duration) : (e.timer.restart(u), e.state = Qn, 1), c = -1, h = i.length; ++c < h; )
      i[c].call(t, f);
    e.state === Qn && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = rn, e.timer.stop(), delete r[n];
    for (var l in r) return;
    delete t.__transition;
  }
}
function zs(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Jn && r.state < Qn, r.state = rn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Os(t) {
  return this.each(function() {
    zs(this, t);
  });
}
function Is(t, n) {
  var e, r;
  return function() {
    var i = V(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Cs(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = V(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === n) {
          i[u] = s;
          break;
        }
      u === l && i.push(s);
    }
    o.tween = i;
  };
}
function Rs(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = q(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? Is : Cs)(e, t, n));
}
function we(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = V(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return q(i, r).value[n];
  };
}
function Wr(t, n) {
  var e;
  return (typeof n == "number" ? D : n instanceof lt ? dn : (e = lt(n)) ? (n = e, dn) : Br)(t, n);
}
function Fs(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ls(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ds(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Hs(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function qs(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Bs(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Xs(t, n) {
  var e = xn(t), r = e === "transform" ? Ms : Wr;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Bs : qs)(e, r, we(this, "attr." + t, n)) : n == null ? (e.local ? Ls : Fs)(e) : (e.local ? Hs : Ds)(e, r, n));
}
function Gs(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Us(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Ys(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Us(t, o)), e;
  }
  return i._value = n, i;
}
function Ks(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Gs(t, o)), e;
  }
  return i._value = n, i;
}
function Vs(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = xn(t);
  return this.tween(e, (r.local ? Ys : Ks)(r, n));
}
function Ws(t, n) {
  return function() {
    me(this, t).delay = +n.apply(this, arguments);
  };
}
function Zs(t, n) {
  return n = +n, function() {
    me(this, t).delay = n;
  };
}
function js(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ws : Zs)(n, t)) : q(this.node(), n).delay;
}
function Js(t, n) {
  return function() {
    V(this, t).duration = +n.apply(this, arguments);
  };
}
function Qs(t, n) {
  return n = +n, function() {
    V(this, t).duration = n;
  };
}
function tu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Js : Qs)(n, t)) : q(this.node(), n).duration;
}
function nu(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    V(this, t).ease = n;
  };
}
function eu(t) {
  var n = this._id;
  return arguments.length ? this.each(nu(n, t)) : q(this.node(), n).ease;
}
function ru(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    V(this, t).ease = e;
  };
}
function iu(t) {
  if (typeof t != "function") throw new Error();
  return this.each(ru(this._id, t));
}
function ou(t) {
  typeof t != "function" && (t = Er(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new Q(r, this._parents, this._name, this._id);
}
function au(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = n[s], l = e[s], f = u.length, c = a[s] = new Array(f), h, g = 0; g < f; ++g)
      (h = u[g] || l[g]) && (c[g] = h);
  for (; s < r; ++s)
    a[s] = n[s];
  return new Q(a, this._parents, this._name, this._id);
}
function su(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function uu(t, n, e) {
  var r, i, o = su(n) ? me : V;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function lu(t, n) {
  var e = this._id;
  return arguments.length < 2 ? q(this.node(), e).on.on(t) : this.each(uu(e, t, n));
}
function cu(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function fu() {
  return this.on("end.remove", cu(this._id));
}
function hu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = pe(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, l = o[a] = new Array(u), f, c, h = 0; h < u; ++h)
      (f = s[h]) && (c = t.call(f, f.__data__, h, s)) && ("__data__" in f && (c.__data__ = f.__data__), l[h] = c, $n(l[h], n, e, h, l, q(f, e)));
  return new Q(o, this._parents, n, e);
}
function pu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Sr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, f, c = 0; c < l; ++c)
      if (f = u[c]) {
        for (var h = t.call(f, f.__data__, c, u), g, p = q(f, e), d = 0, x = h.length; d < x; ++d)
          (g = h[d]) && $n(g, n, e, d, h, p);
        o.push(h), a.push(f);
      }
  return new Q(o, a, n, e);
}
var du = qt.prototype.constructor;
function gu() {
  return new du(this._groups, this._parents);
}
function _u(t, n) {
  var e, r, i;
  return function() {
    var o = bt(this, t), a = (this.style.removeProperty(t), bt(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function Zr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function yu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = bt(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function mu(t, n, e) {
  var r, i, o;
  return function() {
    var a = bt(this, t), s = e(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), bt(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s));
  };
}
function wu(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var u = V(this, t), l = u.on, f = u.value[o] == null ? s || (s = Zr(n)) : void 0;
    (l !== e || i !== f) && (r = (e = l).copy()).on(a, i = f), u.on = r;
  };
}
function vu(t, n, e) {
  var r = (t += "") == "transform" ? bs : Wr;
  return n == null ? this.styleTween(t, _u(t, r)).on("end.style." + t, Zr(t)) : typeof n == "function" ? this.styleTween(t, mu(t, r, we(this, "style." + t, n))).each(wu(this._id, t)) : this.styleTween(t, yu(t, r, n), e).on("end.style." + t, null);
}
function xu(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function bu(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && xu(t, a, e)), r;
  }
  return o._value = n, o;
}
function Mu(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, bu(t, n, e ?? ""));
}
function $u(t) {
  return function() {
    this.textContent = t;
  };
}
function Tu(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Au(t) {
  return this.tween("text", typeof t == "function" ? Tu(we(this, "text", t)) : $u(t == null ? "" : t + ""));
}
function Pu(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Su(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Pu(i)), n;
  }
  return r._value = t, r;
}
function Eu(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Su(t));
}
function ku() {
  for (var t = this._name, n = this._id, e = jr(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      if (u = a[l]) {
        var f = q(u, n);
        $n(u, t, e, l, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new Q(r, this._parents, t, e);
}
function Nu() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var l = V(this, r), f = l.on;
      f !== t && (n = (t = f).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), l.on = n;
    }), i === 0 && o();
  });
}
var zu = 0;
function Q(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function jr() {
  return ++zu;
}
var Z = qt.prototype;
Q.prototype = {
  constructor: Q,
  select: hu,
  selectAll: pu,
  selectChild: Z.selectChild,
  selectChildren: Z.selectChildren,
  filter: ou,
  merge: au,
  selection: gu,
  transition: ku,
  call: Z.call,
  nodes: Z.nodes,
  node: Z.node,
  size: Z.size,
  empty: Z.empty,
  each: Z.each,
  on: lu,
  attr: Xs,
  attrTween: Vs,
  style: vu,
  styleTween: Mu,
  text: Au,
  textTween: Eu,
  remove: fu,
  tween: Rs,
  delay: js,
  duration: tu,
  ease: eu,
  easeVarying: iu,
  end: Nu,
  [Symbol.iterator]: Z[Symbol.iterator]
};
function Ou(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Iu = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ou
};
function Cu(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Ru(t) {
  var n, e;
  t instanceof Q ? (n = t._id, t = t._name) : (n = jr(), (e = Iu).time = Mn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && $n(u, t, n, l, a, e || Cu(u, n));
  return new Q(r, this._parents, t, n);
}
qt.prototype.interrupt = Os;
qt.prototype.transition = Ru;
const te = Math.PI, ne = 2 * te, at = 1e-6, Fu = ne - at;
function Jr(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Lu(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return Jr;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class ve {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? Jr : Lu(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, o, a) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(n, e, r, i, o) {
    if (n = +n, e = +e, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, u = r - n, l = i - e, f = a - n, c = s - e, h = f * f + c * c;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (h > at) if (!(Math.abs(c * u - l * f) > at) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let g = r - a, p = i - s, d = u * u + l * l, x = g * g + p * p, M = Math.sqrt(d), T = Math.sqrt(h), A = o * Math.tan((te - Math.acos((d + h - x) / (2 * M * T))) / 2), _ = A / T, m = A / M;
      Math.abs(_ - 1) > at && this._append`L${n + _ * f},${e + _ * c}`, this._append`A${o},${o},0,0,${+(c * g > f * p)},${this._x1 = n + m * u},${this._y1 = e + m * l}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), l = n + s, f = e + u, c = 1 ^ a, h = a ? i - o : o - i;
    this._x1 === null ? this._append`M${l},${f}` : (Math.abs(this._x1 - l) > at || Math.abs(this._y1 - f) > at) && this._append`L${l},${f}`, r && (h < 0 && (h = h % ne + ne), h > Fu ? this._append`A${r},${r},0,1,${c},${n - s},${e - u}A${r},${r},0,1,${c},${this._x1 = l},${this._y1 = f}` : h > at && this._append`A${r},${r},0,${+(h >= te)},${c},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function B() {
  return new ve();
}
B.prototype = ve.prototype;
function Du(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function yn(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function $t(t) {
  return t = yn(Math.abs(t)), t ? t[1] : NaN;
}
function Hu(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(e.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function qu(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Bu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function mn(t) {
  if (!(n = Bu.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new xe({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
mn.prototype = xe.prototype;
function xe(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
xe.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Xu(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Qr;
function Gu(t, n) {
  var e = yn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (Qr = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + yn(t, Math.max(0, n + o - 1))[0];
}
function We(t, n) {
  var e = yn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Ze = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Du,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => We(t * 100, n),
  r: We,
  s: Gu,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function je(t) {
  return t;
}
var Je = Array.prototype.map, Qe = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Uu(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? je : Hu(Je.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? je : qu(Je.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(c) {
    c = mn(c);
    var h = c.fill, g = c.align, p = c.sign, d = c.symbol, x = c.zero, M = c.width, T = c.comma, A = c.precision, _ = c.trim, m = c.type;
    m === "n" ? (T = !0, m = "g") : Ze[m] || (A === void 0 && (A = 12), _ = !0, m = "g"), (x || h === "0" && g === "=") && (x = !0, h = "0", g = "=");
    var S = d === "$" ? e : d === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", E = d === "$" ? r : /[%p]/.test(m) ? a : "", N = Ze[m], X = /[defgprs%]/.test(m);
    A = A === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function W(w) {
      var G = S, z = E, L, Ut, it;
      if (m === "c")
        z = N(w) + z, w = "";
      else {
        w = +w;
        var ot = w < 0 || 1 / w < 0;
        if (w = isNaN(w) ? u : N(Math.abs(w), A), _ && (w = Xu(w)), ot && +w == 0 && p !== "+" && (ot = !1), G = (ot ? p === "(" ? p : s : p === "-" || p === "(" ? "" : p) + G, z = (m === "s" ? Qe[8 + Qr / 3] : "") + z + (ot && p === "(" ? ")" : ""), X) {
          for (L = -1, Ut = w.length; ++L < Ut; )
            if (it = w.charCodeAt(L), 48 > it || it > 57) {
              z = (it === 46 ? i + w.slice(L + 1) : w.slice(L)) + z, w = w.slice(0, L);
              break;
            }
        }
      }
      T && !x && (w = n(w, 1 / 0));
      var yt = G.length + w.length + z.length, C = yt < M ? new Array(M - yt + 1).join(h) : "";
      switch (T && x && (w = n(C + w, C.length ? M - z.length : 1 / 0), C = ""), g) {
        case "<":
          w = G + w + z + C;
          break;
        case "=":
          w = G + C + w + z;
          break;
        case "^":
          w = C.slice(0, yt = C.length >> 1) + G + w + z + C.slice(yt);
          break;
        default:
          w = C + G + w + z;
          break;
      }
      return o(w);
    }
    return W.toString = function() {
      return c + "";
    }, W;
  }
  function f(c, h) {
    var g = l((c = mn(c), c.type = "f", c)), p = Math.max(-8, Math.min(8, Math.floor($t(h) / 3))) * 3, d = Math.pow(10, -p), x = Qe[8 + p / 3];
    return function(M) {
      return g(d * M) + x;
    };
  }
  return {
    format: l,
    formatPrefix: f
  };
}
var jt, be, ti;
Yu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Yu(t) {
  return jt = Uu(t), be = jt.format, ti = jt.formatPrefix, jt;
}
function Ku(t) {
  return Math.max(0, -$t(Math.abs(t)));
}
function Vu(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor($t(n) / 3))) * 3 - $t(Math.abs(t)));
}
function Wu(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, $t(n) - $t(t)) + 1;
}
function Zu(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function ju(t) {
  return function() {
    return t;
  };
}
function Ju(t) {
  return +t;
}
var tr = [0, 1];
function wt(t) {
  return t;
}
function ee(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : ju(isNaN(n) ? NaN : 0.5);
}
function Qu(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function tl(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = ee(i, r), o = e(a, o)) : (r = ee(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function nl(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = ee(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var u = Qi(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function el(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function rl() {
  var t = tr, n = tr, e = ye, r, i, o, a = wt, s, u, l;
  function f() {
    var h = Math.min(t.length, n.length);
    return a !== wt && (a = Qu(t[0], t[h - 1])), s = h > 2 ? nl : tl, u = l = null, c;
  }
  function c(h) {
    return h == null || isNaN(h = +h) ? o : (u || (u = s(t.map(r), n, e)))(r(a(h)));
  }
  return c.invert = function(h) {
    return a(i((l || (l = s(n, t.map(r), D)))(h)));
  }, c.domain = function(h) {
    return arguments.length ? (t = Array.from(h, Ju), f()) : t.slice();
  }, c.range = function(h) {
    return arguments.length ? (n = Array.from(h), f()) : n.slice();
  }, c.rangeRound = function(h) {
    return n = Array.from(h), e = ws, f();
  }, c.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : wt, f()) : a !== wt;
  }, c.interpolate = function(h) {
    return arguments.length ? (e = h, f()) : e;
  }, c.unknown = function(h) {
    return arguments.length ? (o = h, c) : o;
  }, function(h, g) {
    return r = h, i = g, f();
  };
}
function il() {
  return rl()(wt, wt);
}
function ol(t, n, e, r) {
  var i = io(t, n, e), o;
  switch (r = mn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Vu(i, a)) && (r.precision = o), ti(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Wu(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Ku(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return be(r);
}
function al(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return ro(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return ol(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], u, l, f = 10;
    for (s < a && (l = a, a = s, s = l, l = i, i = o, o = l); f-- > 0; ) {
      if (l = Gn(a, s, e), l === u)
        return r[i] = a, r[o] = s, n(r);
      if (l > 0)
        a = Math.floor(a / l) * l, s = Math.ceil(s / l) * l;
      else if (l < 0)
        a = Math.ceil(a * l) / l, s = Math.floor(s * l) / l;
      else
        break;
      u = l;
    }
    return t;
  }, t;
}
function Y() {
  var t = il();
  return t.copy = function() {
    return el(t, Y());
  }, Zu.apply(t, arguments), al(t);
}
function mt(t) {
  return function() {
    return t;
  };
}
function sl(t) {
  let n = 3;
  return t.digits = function(e) {
    if (!arguments.length) return n;
    if (e == null)
      n = null;
    else {
      const r = Math.floor(e);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${e}`);
      n = r;
    }
    return t;
  }, () => new ve(n);
}
function ul(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function ni(t) {
  this._context = t;
}
ni.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(t, n);
        break;
    }
  }
};
function ll(t) {
  return new ni(t);
}
function cl(t) {
  return t[0];
}
function fl(t) {
  return t[1];
}
function hl(t, n) {
  var e = mt(!0), r = null, i = ll, o = null, a = sl(s);
  t = typeof t == "function" ? t : t === void 0 ? cl : mt(t), n = typeof n == "function" ? n : n === void 0 ? fl : mt(n);
  function s(u) {
    var l, f = (u = ul(u)).length, c, h = !1, g;
    for (r == null && (o = i(g = a())), l = 0; l <= f; ++l)
      !(l < f && e(c = u[l], l, u)) === h && ((h = !h) ? o.lineStart() : o.lineEnd()), h && o.point(+t(c, l, u), +n(c, l, u));
    if (g) return o = null, g + "" || null;
  }
  return s.x = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : mt(+u), s) : t;
  }, s.y = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : mt(+u), s) : n;
  }, s.defined = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : mt(!!u), s) : e;
  }, s.curve = function(u) {
    return arguments.length ? (i = u, r != null && (o = i(r)), s) : i;
  }, s.context = function(u) {
    return arguments.length ? (u == null ? r = o = null : o = i(r = u), s) : r;
  }, s;
}
function zt(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
zt.prototype = {
  constructor: zt,
  scale: function(t) {
    return t === 1 ? this : new zt(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new zt(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
zt.prototype;
var ei = typeof global == "object" && global && global.Object === Object && global, pl = typeof self == "object" && self && self.Object === Object && self, nt = ei || pl || Function("return this")(), K = nt.Symbol, ri = Object.prototype, dl = ri.hasOwnProperty, gl = ri.toString, Et = K ? K.toStringTag : void 0;
function _l(t) {
  var n = dl.call(t, Et), e = t[Et];
  try {
    t[Et] = void 0;
    var r = !0;
  } catch {
  }
  var i = gl.call(t);
  return r && (n ? t[Et] = e : delete t[Et]), i;
}
var yl = Object.prototype, ml = yl.toString;
function wl(t) {
  return ml.call(t);
}
var vl = "[object Null]", xl = "[object Undefined]", nr = K ? K.toStringTag : void 0;
function dt(t) {
  return t == null ? t === void 0 ? xl : vl : nr && nr in Object(t) ? _l(t) : wl(t);
}
function ft(t) {
  return t != null && typeof t == "object";
}
var bl = "[object Symbol]";
function Tn(t) {
  return typeof t == "symbol" || ft(t) && dt(t) == bl;
}
function An(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var F = Array.isArray, er = K ? K.prototype : void 0, rr = er ? er.toString : void 0;
function ii(t) {
  if (typeof t == "string")
    return t;
  if (F(t))
    return An(t, ii) + "";
  if (Tn(t))
    return rr ? rr.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var Ml = /\s/;
function $l(t) {
  for (var n = t.length; n-- && Ml.test(t.charAt(n)); )
    ;
  return n;
}
var Tl = /^\s+/;
function Al(t) {
  return t && t.slice(0, $l(t) + 1).replace(Tl, "");
}
function tt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var ir = NaN, Pl = /^[-+]0x[0-9a-f]+$/i, Sl = /^0b[01]+$/i, El = /^0o[0-7]+$/i, kl = parseInt;
function Nl(t) {
  if (typeof t == "number")
    return t;
  if (Tn(t))
    return ir;
  if (tt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = tt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Al(t);
  var e = Sl.test(t);
  return e || El.test(t) ? kl(t.slice(2), e ? 2 : 8) : Pl.test(t) ? ir : +t;
}
var zl = 1 / 0, Ol = 17976931348623157e292;
function on(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Nl(t), t === zl || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * Ol;
  }
  return t === t ? t : 0;
}
function Il(t) {
  var n = on(t), e = n % 1;
  return n === n ? e ? n - e : n : 0;
}
function oi(t) {
  return t;
}
var Cl = "[object AsyncFunction]", Rl = "[object Function]", Fl = "[object GeneratorFunction]", Ll = "[object Proxy]";
function ai(t) {
  if (!tt(t))
    return !1;
  var n = dt(t);
  return n == Rl || n == Fl || n == Cl || n == Ll;
}
var Hn = nt["__core-js_shared__"], or = function() {
  var t = /[^.]+$/.exec(Hn && Hn.keys && Hn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Dl(t) {
  return !!or && or in t;
}
var Hl = Function.prototype, ql = Hl.toString;
function gt(t) {
  if (t != null) {
    try {
      return ql.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Bl = /[\\^$.*+?()[\]{}|]/g, Xl = /^\[object .+?Constructor\]$/, Gl = Function.prototype, Ul = Object.prototype, Yl = Gl.toString, Kl = Ul.hasOwnProperty, Vl = RegExp(
  "^" + Yl.call(Kl).replace(Bl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Wl(t) {
  if (!tt(t) || Dl(t))
    return !1;
  var n = ai(t) ? Vl : Xl;
  return n.test(gt(t));
}
function Zl(t, n) {
  return t == null ? void 0 : t[n];
}
function _t(t, n) {
  var e = Zl(t, n);
  return Wl(e) ? e : void 0;
}
var re = _t(nt, "WeakMap"), ar = function() {
  try {
    var t = _t(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function jl(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var Jl = 9007199254740991, Ql = /^(?:0|[1-9]\d*)$/;
function Pn(t, n) {
  var e = typeof t;
  return n = n ?? Jl, !!n && (e == "number" || e != "symbol" && Ql.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function tc(t, n, e) {
  n == "__proto__" && ar ? ar(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function Sn(t, n) {
  return t === n || t !== t && n !== n;
}
var nc = Object.prototype, ec = nc.hasOwnProperty;
function rc(t, n, e) {
  var r = t[n];
  (!(ec.call(t, n) && Sn(r, e)) || e === void 0 && !(n in t)) && tc(t, n, e);
}
var ic = 9007199254740991;
function Me(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ic;
}
function Xt(t) {
  return t != null && Me(t.length) && !ai(t);
}
function oc(t, n, e) {
  if (!tt(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Xt(e) && Pn(n, e.length) : r == "string" && n in e) ? Sn(e[n], t) : !1;
}
var ac = Object.prototype;
function si(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || ac;
  return t === e;
}
function sc(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var uc = "[object Arguments]";
function sr(t) {
  return ft(t) && dt(t) == uc;
}
var ui = Object.prototype, lc = ui.hasOwnProperty, cc = ui.propertyIsEnumerable, $e = sr(/* @__PURE__ */ function() {
  return arguments;
}()) ? sr : function(t) {
  return ft(t) && lc.call(t, "callee") && !cc.call(t, "callee");
};
function fc() {
  return !1;
}
var li = typeof exports == "object" && exports && !exports.nodeType && exports, ur = li && typeof module == "object" && module && !module.nodeType && module, hc = ur && ur.exports === li, lr = hc ? nt.Buffer : void 0, pc = lr ? lr.isBuffer : void 0, ie = pc || fc, dc = "[object Arguments]", gc = "[object Array]", _c = "[object Boolean]", yc = "[object Date]", mc = "[object Error]", wc = "[object Function]", vc = "[object Map]", xc = "[object Number]", bc = "[object Object]", Mc = "[object RegExp]", $c = "[object Set]", Tc = "[object String]", Ac = "[object WeakMap]", Pc = "[object ArrayBuffer]", Sc = "[object DataView]", Ec = "[object Float32Array]", kc = "[object Float64Array]", Nc = "[object Int8Array]", zc = "[object Int16Array]", Oc = "[object Int32Array]", Ic = "[object Uint8Array]", Cc = "[object Uint8ClampedArray]", Rc = "[object Uint16Array]", Fc = "[object Uint32Array]", $ = {};
$[Ec] = $[kc] = $[Nc] = $[zc] = $[Oc] = $[Ic] = $[Cc] = $[Rc] = $[Fc] = !0;
$[dc] = $[gc] = $[Pc] = $[_c] = $[Sc] = $[yc] = $[mc] = $[wc] = $[vc] = $[xc] = $[bc] = $[Mc] = $[$c] = $[Tc] = $[Ac] = !1;
function Lc(t) {
  return ft(t) && Me(t.length) && !!$[dt(t)];
}
function Dc(t) {
  return function(n) {
    return t(n);
  };
}
var ci = typeof exports == "object" && exports && !exports.nodeType && exports, Ot = ci && typeof module == "object" && module && !module.nodeType && module, Hc = Ot && Ot.exports === ci, qn = Hc && ei.process, cr = function() {
  try {
    var t = Ot && Ot.require && Ot.require("util").types;
    return t || qn && qn.binding && qn.binding("util");
  } catch {
  }
}(), fr = cr && cr.isTypedArray, fi = fr ? Dc(fr) : Lc, qc = Object.prototype, Bc = qc.hasOwnProperty;
function hi(t, n) {
  var e = F(t), r = !e && $e(t), i = !e && !r && ie(t), o = !e && !r && !i && fi(t), a = e || r || i || o, s = a ? sc(t.length, String) : [], u = s.length;
  for (var l in t)
    (n || Bc.call(t, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Pn(l, u))) && s.push(l);
  return s;
}
function pi(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Xc = pi(Object.keys, Object), Gc = Object.prototype, Uc = Gc.hasOwnProperty;
function Yc(t) {
  if (!si(t))
    return Xc(t);
  var n = [];
  for (var e in Object(t))
    Uc.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function En(t) {
  return Xt(t) ? hi(t) : Yc(t);
}
function Kc(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var Vc = Object.prototype, Wc = Vc.hasOwnProperty;
function Zc(t) {
  if (!tt(t))
    return Kc(t);
  var n = si(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !Wc.call(t, r)) || e.push(r);
  return e;
}
function jc(t) {
  return Xt(t) ? hi(t, !0) : Zc(t);
}
var Jc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Qc = /^\w*$/;
function Te(t, n) {
  if (F(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Tn(t) ? !0 : Qc.test(t) || !Jc.test(t) || n != null && t in Object(n);
}
var Dt = _t(Object, "create");
function tf() {
  this.__data__ = Dt ? Dt(null) : {}, this.size = 0;
}
function nf(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var ef = "__lodash_hash_undefined__", rf = Object.prototype, of = rf.hasOwnProperty;
function af(t) {
  var n = this.__data__;
  if (Dt) {
    var e = n[t];
    return e === ef ? void 0 : e;
  }
  return of.call(n, t) ? n[t] : void 0;
}
var sf = Object.prototype, uf = sf.hasOwnProperty;
function lf(t) {
  var n = this.__data__;
  return Dt ? n[t] !== void 0 : uf.call(n, t);
}
var cf = "__lodash_hash_undefined__";
function ff(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Dt && n === void 0 ? cf : n, this;
}
function ht(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
ht.prototype.clear = tf;
ht.prototype.delete = nf;
ht.prototype.get = af;
ht.prototype.has = lf;
ht.prototype.set = ff;
function hf() {
  this.__data__ = [], this.size = 0;
}
function kn(t, n) {
  for (var e = t.length; e--; )
    if (Sn(t[e][0], n))
      return e;
  return -1;
}
var pf = Array.prototype, df = pf.splice;
function gf(t) {
  var n = this.__data__, e = kn(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : df.call(n, e, 1), --this.size, !0;
}
function _f(t) {
  var n = this.__data__, e = kn(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function yf(t) {
  return kn(this.__data__, t) > -1;
}
function mf(t, n) {
  var e = this.__data__, r = kn(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function et(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
et.prototype.clear = hf;
et.prototype.delete = gf;
et.prototype.get = _f;
et.prototype.has = yf;
et.prototype.set = mf;
var Ht = _t(nt, "Map");
function wf() {
  this.size = 0, this.__data__ = {
    hash: new ht(),
    map: new (Ht || et)(),
    string: new ht()
  };
}
function vf(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Nn(t, n) {
  var e = t.__data__;
  return vf(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function xf(t) {
  var n = Nn(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function bf(t) {
  return Nn(this, t).get(t);
}
function Mf(t) {
  return Nn(this, t).has(t);
}
function $f(t, n) {
  var e = Nn(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function rt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
rt.prototype.clear = wf;
rt.prototype.delete = xf;
rt.prototype.get = bf;
rt.prototype.has = Mf;
rt.prototype.set = $f;
var Tf = "Expected a function";
function Ae(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Tf);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (Ae.Cache || rt)(), e;
}
Ae.Cache = rt;
var Af = 500;
function Pf(t) {
  var n = Ae(t, function(r) {
    return e.size === Af && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Sf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ef = /\\(\\)?/g, kf = Pf(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Sf, function(e, r, i, o) {
    n.push(i ? o.replace(Ef, "$1") : r || e);
  }), n;
});
function zn(t) {
  return t == null ? "" : ii(t);
}
function On(t, n) {
  return F(t) ? t : Te(t, n) ? [t] : kf(zn(t));
}
function Gt(t) {
  if (typeof t == "string" || Tn(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Pe(t, n) {
  n = On(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Gt(n[e++])];
  return e && e == r ? t : void 0;
}
function Nf(t, n, e) {
  var r = t == null ? void 0 : Pe(t, n);
  return r === void 0 ? e : r;
}
function Se(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var hr = K ? K.isConcatSpreadable : void 0;
function zf(t) {
  return F(t) || $e(t) || !!(hr && t && t[hr]);
}
function Of(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = zf), i || (i = []); ++o < a; ) {
    var s = t[o];
    e(s) ? Se(i, s) : i[i.length] = s;
  }
  return i;
}
function If(t) {
  var n = t == null ? 0 : t.length;
  return n ? Of(t) : [];
}
var Cf = pi(Object.getPrototypeOf, Object);
function di(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + n];
  return o;
}
function Rf(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, di(t, n, e);
}
var Ff = "\\ud800-\\udfff", Lf = "\\u0300-\\u036f", Df = "\\ufe20-\\ufe2f", Hf = "\\u20d0-\\u20ff", qf = Lf + Df + Hf, Bf = "\\ufe0e\\ufe0f", Xf = "\\u200d", Gf = RegExp("[" + Xf + Ff + qf + Bf + "]");
function gi(t) {
  return Gf.test(t);
}
function Uf(t) {
  return t.split("");
}
var _i = "\\ud800-\\udfff", Yf = "\\u0300-\\u036f", Kf = "\\ufe20-\\ufe2f", Vf = "\\u20d0-\\u20ff", Wf = Yf + Kf + Vf, Zf = "\\ufe0e\\ufe0f", jf = "[" + _i + "]", oe = "[" + Wf + "]", ae = "\\ud83c[\\udffb-\\udfff]", Jf = "(?:" + oe + "|" + ae + ")", yi = "[^" + _i + "]", mi = "(?:\\ud83c[\\udde6-\\uddff]){2}", wi = "[\\ud800-\\udbff][\\udc00-\\udfff]", Qf = "\\u200d", vi = Jf + "?", xi = "[" + Zf + "]?", th = "(?:" + Qf + "(?:" + [yi, mi, wi].join("|") + ")" + xi + vi + ")*", nh = xi + vi + th, eh = "(?:" + [yi + oe + "?", oe, mi, wi, jf].join("|") + ")", rh = RegExp(ae + "(?=" + ae + ")|" + eh + nh, "g");
function ih(t) {
  return t.match(rh) || [];
}
function oh(t) {
  return gi(t) ? ih(t) : Uf(t);
}
function ah(t) {
  return function(n) {
    n = zn(n);
    var e = gi(n) ? oh(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Rf(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var sh = ah("toUpperCase");
function uh(t) {
  return sh(zn(t).toLowerCase());
}
function lh() {
  this.__data__ = new et(), this.size = 0;
}
function ch(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function fh(t) {
  return this.__data__.get(t);
}
function hh(t) {
  return this.__data__.has(t);
}
var ph = 200;
function dh(t, n) {
  var e = this.__data__;
  if (e instanceof et) {
    var r = e.__data__;
    if (!Ht || r.length < ph - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new rt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function J(t) {
  var n = this.__data__ = new et(t);
  this.size = n.size;
}
J.prototype.clear = lh;
J.prototype.delete = ch;
J.prototype.get = fh;
J.prototype.has = hh;
J.prototype.set = dh;
function gh(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function bi() {
  return [];
}
var _h = Object.prototype, yh = _h.propertyIsEnumerable, pr = Object.getOwnPropertySymbols, Mi = pr ? function(t) {
  return t == null ? [] : (t = Object(t), gh(pr(t), function(n) {
    return yh.call(t, n);
  }));
} : bi, mh = Object.getOwnPropertySymbols, wh = mh ? function(t) {
  for (var n = []; t; )
    Se(n, Mi(t)), t = Cf(t);
  return n;
} : bi;
function $i(t, n, e) {
  var r = n(t);
  return F(t) ? r : Se(r, e(t));
}
function dr(t) {
  return $i(t, En, Mi);
}
function vh(t) {
  return $i(t, jc, wh);
}
var se = _t(nt, "DataView"), ue = _t(nt, "Promise"), le = _t(nt, "Set"), gr = "[object Map]", xh = "[object Object]", _r = "[object Promise]", yr = "[object Set]", mr = "[object WeakMap]", wr = "[object DataView]", bh = gt(se), Mh = gt(Ht), $h = gt(ue), Th = gt(le), Ah = gt(re), j = dt;
(se && j(new se(new ArrayBuffer(1))) != wr || Ht && j(new Ht()) != gr || ue && j(ue.resolve()) != _r || le && j(new le()) != yr || re && j(new re()) != mr) && (j = function(t) {
  var n = dt(t), e = n == xh ? t.constructor : void 0, r = e ? gt(e) : "";
  if (r)
    switch (r) {
      case bh:
        return wr;
      case Mh:
        return gr;
      case $h:
        return _r;
      case Th:
        return yr;
      case Ah:
        return mr;
    }
  return n;
});
var vr = nt.Uint8Array, Ph = "__lodash_hash_undefined__";
function Sh(t) {
  return this.__data__.set(t, Ph), this;
}
function Eh(t) {
  return this.__data__.has(t);
}
function wn(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new rt(); ++n < e; )
    this.add(t[n]);
}
wn.prototype.add = wn.prototype.push = Sh;
wn.prototype.has = Eh;
function kh(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Nh(t, n) {
  return t.has(n);
}
var zh = 1, Oh = 2;
function Ti(t, n, e, r, i, o) {
  var a = e & zh, s = t.length, u = n.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = o.get(t), f = o.get(n);
  if (l && f)
    return l == n && f == t;
  var c = -1, h = !0, g = e & Oh ? new wn() : void 0;
  for (o.set(t, n), o.set(n, t); ++c < s; ) {
    var p = t[c], d = n[c];
    if (r)
      var x = a ? r(d, p, c, n, t, o) : r(p, d, c, t, n, o);
    if (x !== void 0) {
      if (x)
        continue;
      h = !1;
      break;
    }
    if (g) {
      if (!kh(n, function(M, T) {
        if (!Nh(g, T) && (p === M || i(p, M, e, r, o)))
          return g.push(T);
      })) {
        h = !1;
        break;
      }
    } else if (!(p === d || i(p, d, e, r, o))) {
      h = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), h;
}
function Ai(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Ih(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Ch = 1, Rh = 2, Fh = "[object Boolean]", Lh = "[object Date]", Dh = "[object Error]", Hh = "[object Map]", qh = "[object Number]", Bh = "[object RegExp]", Xh = "[object Set]", Gh = "[object String]", Uh = "[object Symbol]", Yh = "[object ArrayBuffer]", Kh = "[object DataView]", xr = K ? K.prototype : void 0, Bn = xr ? xr.valueOf : void 0;
function Vh(t, n, e, r, i, o, a) {
  switch (e) {
    case Kh:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Yh:
      return !(t.byteLength != n.byteLength || !o(new vr(t), new vr(n)));
    case Fh:
    case Lh:
    case qh:
      return Sn(+t, +n);
    case Dh:
      return t.name == n.name && t.message == n.message;
    case Bh:
    case Gh:
      return t == n + "";
    case Hh:
      var s = Ai;
    case Xh:
      var u = r & Ch;
      if (s || (s = Ih), t.size != n.size && !u)
        return !1;
      var l = a.get(t);
      if (l)
        return l == n;
      r |= Rh, a.set(t, n);
      var f = Ti(s(t), s(n), r, i, o, a);
      return a.delete(t), f;
    case Uh:
      if (Bn)
        return Bn.call(t) == Bn.call(n);
  }
  return !1;
}
var Wh = 1, Zh = Object.prototype, jh = Zh.hasOwnProperty;
function Jh(t, n, e, r, i, o) {
  var a = e & Wh, s = dr(t), u = s.length, l = dr(n), f = l.length;
  if (u != f && !a)
    return !1;
  for (var c = u; c--; ) {
    var h = s[c];
    if (!(a ? h in n : jh.call(n, h)))
      return !1;
  }
  var g = o.get(t), p = o.get(n);
  if (g && p)
    return g == n && p == t;
  var d = !0;
  o.set(t, n), o.set(n, t);
  for (var x = a; ++c < u; ) {
    h = s[c];
    var M = t[h], T = n[h];
    if (r)
      var A = a ? r(T, M, h, n, t, o) : r(M, T, h, t, n, o);
    if (!(A === void 0 ? M === T || i(M, T, e, r, o) : A)) {
      d = !1;
      break;
    }
    x || (x = h == "constructor");
  }
  if (d && !x) {
    var _ = t.constructor, m = n.constructor;
    _ != m && "constructor" in t && "constructor" in n && !(typeof _ == "function" && _ instanceof _ && typeof m == "function" && m instanceof m) && (d = !1);
  }
  return o.delete(t), o.delete(n), d;
}
var Qh = 1, br = "[object Arguments]", Mr = "[object Array]", Jt = "[object Object]", tp = Object.prototype, $r = tp.hasOwnProperty;
function np(t, n, e, r, i, o) {
  var a = F(t), s = F(n), u = a ? Mr : j(t), l = s ? Mr : j(n);
  u = u == br ? Jt : u, l = l == br ? Jt : l;
  var f = u == Jt, c = l == Jt, h = u == l;
  if (h && ie(t)) {
    if (!ie(n))
      return !1;
    a = !0, f = !1;
  }
  if (h && !f)
    return o || (o = new J()), a || fi(t) ? Ti(t, n, e, r, i, o) : Vh(t, n, u, e, r, i, o);
  if (!(e & Qh)) {
    var g = f && $r.call(t, "__wrapped__"), p = c && $r.call(n, "__wrapped__");
    if (g || p) {
      var d = g ? t.value() : t, x = p ? n.value() : n;
      return o || (o = new J()), i(d, x, e, r, o);
    }
  }
  return h ? (o || (o = new J()), Jh(t, n, e, r, i, o)) : !1;
}
function Ee(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !ft(t) && !ft(n) ? t !== t && n !== n : np(t, n, e, r, Ee, i);
}
var ep = 1, rp = 2;
function ip(t, n, e, r) {
  var i = e.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = e[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = e[i];
    var s = a[0], u = t[s], l = a[1];
    if (a[2]) {
      if (u === void 0 && !(s in t))
        return !1;
    } else {
      var f = new J(), c;
      if (!(c === void 0 ? Ee(l, u, ep | rp, r, f) : c))
        return !1;
    }
  }
  return !0;
}
function Pi(t) {
  return t === t && !tt(t);
}
function op(t) {
  for (var n = En(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Pi(i)];
  }
  return n;
}
function Si(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function ap(t) {
  var n = op(t);
  return n.length == 1 && n[0][2] ? Si(n[0][0], n[0][1]) : function(e) {
    return e === t || ip(e, t, n);
  };
}
function sp(t, n) {
  return t != null && n in Object(t);
}
function Ei(t, n, e) {
  n = On(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = Gt(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Me(i) && Pn(a, i) && (F(t) || $e(t)));
}
function up(t, n) {
  return t != null && Ei(t, n, sp);
}
var lp = 1, cp = 2;
function fp(t, n) {
  return Te(t) && Pi(n) ? Si(Gt(t), n) : function(e) {
    var r = Nf(e, t);
    return r === void 0 && r === n ? up(e, t) : Ee(n, r, lp | cp);
  };
}
function hp(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function pp(t) {
  return function(n) {
    return Pe(n, t);
  };
}
function dp(t) {
  return Te(t) ? hp(Gt(t)) : pp(t);
}
function ki(t) {
  return typeof t == "function" ? t : t == null ? oi : typeof t == "object" ? F(t) ? fp(t[0], t[1]) : ap(t) : dp(t);
}
function gp(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var u = a[++i];
      if (e(o[u], u, o) === !1)
        break;
    }
    return n;
  };
}
var _p = gp();
function yp(t, n) {
  return t && _p(t, n, En);
}
function mp(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Xt(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var Ni = mp(yp);
function wp(t) {
  return typeof t == "function" ? t : oi;
}
function Tt(t, n) {
  var e = F(t) ? jl : Ni;
  return e(t, wp(n));
}
function vp(t, n) {
  return An(n, function(e) {
    return [e, t[e]];
  });
}
function xp(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var bp = "[object Map]", Mp = "[object Set]";
function $p(t) {
  return function(n) {
    var e = j(n);
    return e == bp ? Ai(n) : e == Mp ? xp(n) : vp(n, t(n));
  };
}
var zi = $p(En);
function Tp(t, n) {
  var e = -1, r = Xt(t) ? Array(t.length) : [];
  return Ni(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function pt(t, n) {
  var e = F(t) ? An : Tp;
  return e(t, ki(n));
}
var Ap = Object.prototype, Pp = Ap.hasOwnProperty;
function Sp(t, n) {
  return t != null && Pp.call(t, n);
}
function Ep(t, n) {
  return t != null && Ei(t, n, Sp);
}
var kp = "[object Boolean]";
function Np(t) {
  return t === !0 || t === !1 || ft(t) && dt(t) == kp;
}
function zp(t, n, e, r) {
  if (!tt(t))
    return t;
  n = On(n, t);
  for (var i = -1, o = n.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var u = Gt(n[i]), l = e;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (i != a) {
      var f = s[u];
      l = void 0, l === void 0 && (l = tt(f) ? f : Pn(n[i + 1]) ? [] : {});
    }
    rc(s, u, l), s = s[u];
  }
  return t;
}
function Op(t, n, e) {
  for (var r = -1, i = n.length, o = {}; ++r < i; ) {
    var a = n[r], s = Pe(t, a);
    e(s, a) && zp(o, On(a, t), s);
  }
  return o;
}
function Oi(t, n) {
  if (t == null)
    return {};
  var e = An(vh(t), function(r) {
    return [r];
  });
  return n = ki(n), Op(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var Ip = Math.ceil, Cp = Math.max;
function Rp(t, n, e, r) {
  for (var i = -1, o = Cp(Ip((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function Fp(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && oc(n, e, r) && (e = r = void 0), n = on(n), e === void 0 ? (e = n, n = 0) : e = on(e), r = r === void 0 ? n < e ? 1 : -1 : on(r), Rp(n, e, r);
  };
}
var ke = Fp();
function Lp() {
  var t = arguments, n = zn(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
function Ii(t, n, e) {
  return t && t.length ? (n = n === void 0 ? 1 : Il(n), di(t, 0, n < 0 ? 0 : n)) : [];
}
const Dp = (t, n, e = 12, r = 12) => {
  const i = Y().domain([0, e]).range([0, t]), o = Y().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return ke((e + 1) * (r + 1)).map(function(u) {
        return { m: u % (e + 1), n: Math.floor(u / (e + 1)), x: i(u % (e + 1)), y: o(Math.floor(u / (e + 1))) };
      });
    },
    position: function(u, l) {
      typeof u == "number" && (u = [u]), typeof l == "number" && (l = [l]);
      const f = If(pt(l, function(c) {
        return pt(
          u,
          function(h) {
            return { x: i(h), y: o(c) };
          }
        );
      }));
      return f.length == 1 ? f[0] : f;
    }
  };
}, Hp = "_widget_18g36_1", qp = "_title_18g36_12", Bp = "_label_18g36_19", Xp = "_lit_18g36_24", Gp = "_button_18g36_29", Up = "_symbol_18g36_29", Yp = "_radio_18g36_29", Kp = "_radiobutton_18g36_29", Vp = "_selected_18g36_35", Wp = "_toggle_18g36_35", Zp = "_slider_18g36_44", jp = "_track_18g36_44", Jp = "_track_overlay_18g36_48", Qp = "_handle_18g36_55", y = {
  widget: Hp,
  title: qp,
  label: Bp,
  lit: Xp,
  button: Gp,
  symbol: Up,
  radio: Yp,
  radiobutton: Kp,
  selected: Vp,
  toggle: Wp,
  slider: Zp,
  track: jp,
  track_overlay: Jp,
  handle: Qp
}, Ne = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, ze = (t, n, e) => {
  var r, i, o, a;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, o = "middle", a = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, o = "end", a = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, o = "start", a = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
  }
  return { x: r, y: i, anchor: o, valign: a };
}, td = (t = 1) => {
  const n = B();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, nd = (t = 1) => {
  const n = B(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, ed = (t = 1) => {
  const n = B();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, rd = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = B();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, id = (t = 1) => {
  const n = B(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, s = 0.6, u = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], l = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, od = (t = 1) => {
  const n = B(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, a), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, ad = (t = 1) => {
  const n = B(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var u = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], l = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, sd = (t = 1) => {
  var n = B(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, ud = (t = 1) => {
  const n = B(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, ce = (t) => {
  switch (t) {
    case "play":
      return td;
    case "forward":
      return nd;
    case "back":
      return ed;
    case "pause":
      return rd;
    case "reload":
      return id;
    case "capture":
      return od;
    case "rewind":
      return ad;
    case "stop":
      return sd;
    case "push":
      return ud;
  }
}, Oe = () => {
  const t = "button";
  var n = Ne(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", u = null, l = function(p) {
  }, f = ["play"], c = 0;
  return {
    type: t,
    id: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? e : (e = p, this);
    },
    symbolsize: function(p) {
      return typeof p > "u" ? r : (r = p, this);
    },
    shape: function(p) {
      return typeof p > "u" ? i : (i = p, this);
    },
    position: function(p) {
      return typeof p > "u" ? o : (o = p, this);
    },
    x: function(p) {
      return typeof p > "u" ? o.x : (o.x = p, this);
    },
    y: function(p) {
      return typeof p > "u" ? o.y : (o.y = p, this);
    },
    label: function(p) {
      return typeof p > "u" ? a : (a = p, this);
    },
    labelposition: function(p) {
      return typeof p > "u" ? s : (s = p, this);
    },
    fontsize: function(p) {
      return typeof p > "u" ? u : (u = p, this);
    },
    update: function(p) {
      if (typeof p == "function")
        return l = p, this;
      l(p);
    },
    actions: function(p) {
      return typeof p > "u" ? f : (f = p, this);
    },
    value: function(p) {
      return typeof p > "u" ? c : (c = p, this);
    },
    click: function() {
      c = (c + 1) % f.length, l(), P(this.parentNode).select("." + y.symbol).attr("d", ce(f[c])(r * e));
    },
    press: function(p) {
      c = (c + 1) % f.length, l(), p.select("#button_" + n).select("." + y.symbol).attr("d", ce(f[c])(r * e));
    }
  };
}, ld = () => {
  const t = "toggle";
  var n = Ne(), e = 10, r = { x: 0, y: 0 }, i = null, o = "top", a = null, s = function(c) {
  }, u = 0;
  return {
    type: t,
    id: function(c) {
      return typeof c > "u" ? n : (n = c, this);
    },
    size: function(c) {
      return typeof c > "u" ? e : (e = c, this);
    },
    position: function(c) {
      return typeof c > "u" ? r : (r = c, this);
    },
    x: function(c) {
      return typeof c > "u" ? r.x : (r.x = c, this);
    },
    y: function(c) {
      return typeof c > "u" ? r.y : (r.y = c, this);
    },
    label: function(c) {
      return typeof c > "u" ? i : (i = c, this);
    },
    labelposition: function(c) {
      return typeof c > "u" ? o : (o = c, this);
    },
    fontsize: function(c) {
      return typeof c > "u" ? a : (a = c, this);
    },
    update: function(c) {
      if (typeof c == "function")
        return s = c, this;
      s(c);
    },
    value: function(c) {
      return typeof c > "u" ? u : (u = c, this);
    },
    click: function() {
      u = !u;
      const c = P(this.parentNode);
      c.select("." + y.handle).transition().attr("cx", u ? 2 * e : 0), c.classed(y.selected, u), s();
    },
    reset: function(c, h) {
      u = h;
      const g = c.select("#toggle_" + n);
      g.selectAll("." + y.handle).transition().attr("cx", u ? 2 * e : 0), g.classed(y.selected, u);
    }
  };
}, cd = () => {
  const t = "radio";
  var n = Ne(), e = 100, r = 20, i = 0.3, o = "round", a = "vertical", s = { x: 0, y: 0 }, u = "right", l = null, f = function(d) {
  }, c = [], h = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    buttonsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    buttonpadding: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    orientation: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? s.x : (s.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? s.y : (s.y = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? u : (u = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? l : (l = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return f = d, this;
      f(d);
    },
    choices: function(d) {
      return typeof d > "u" ? c : (c = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? h : (h = d, this);
    },
    click: function(d, x) {
      h = x, P(this.parentNode).selectAll("." + y.symbol).classed(y.selected, (M) => M == h), f();
    },
    reset: function(d, x) {
      h = x, d.select("#radio_" + n).selectAll("." + y.symbol).classed(y.selected, (M) => M == h), f();
    }
  };
}, fd = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = P(o).attr("class", y.widget + " " + y.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", y.background).on("click", t.click).on("mouseover", function() {
    P(this).classed(y.lit, !0), P(this.parentNode).select("." + y.symbol).classed(y.lit, !0);
  }).on("mouseout", function() {
    P(this).classed(y.lit, !1), P(this.parentNode).select("." + y.symbol).classed(y.lit, !1);
  }), a.append("path").attr("d", ce(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", y.symbol), r) {
    const u = ze(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", y.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return o;
}, Ci = (t, n) => {
  const e = B();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, hd = (t, n) => {
  const e = be(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = P(u).attr("class", y.widget + " " + y.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const l = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", Ci(t.size(), t.girth())).attr("class", y.track), s.append("circle").attr("class", y.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * l).attr("height", 2 * l).attr("transform", "translate(" + -l + "," + -l + ")").attr("class", y.track_overlay).on("click", function(p) {
    const d = Yn(p, this)[0];
    t.value(a.invert(d)), t.update(), t.update_end(), s.selectAll("." + y.handle).attr("cx", a(t.value())), t.show() && s.select("." + y.label).text(t.label() + " = " + e(t.value()));
  }).call(
    Za().on("drag", function(p) {
      t.value(a.invert(p.x)), t.update(), s.selectAll("." + y.handle).attr("cx", a(t.value())), t.show() && s.select("." + y.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(p) {
      t.update_end();
    })
  );
  var f, c, h, g = "bottom";
  return t.fontsize && (c = t.labelposition().match(/bottom/i) != null ? Yt([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Yt([t.girth() / 2, t.knob()]) - t.fontsize() / 2), c = t.labelposition().match(/bottom/i) != null ? Yt([t.girth() / 2, t.knob()]) + 7 : -Yt([t.girth() / 2, t.knob()]) - 7, f = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, h = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", g = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", y.label).style("text-anchor", h).style("alignment-baseline", g).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + f + "," + c + ")"), u;
}, pd = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = P(a).attr("class", y.widget + " " + y.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(y.selected, t.value() == 1);
  if (s.append("path").attr("d", Ci(2 * t.size(), 2 * t.size())).attr("class", y.track), s.append("circle").attr("class", y.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", y.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = ze(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", y.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return a;
}, dd = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = oo(a), u = Y().domain([0, a - 1]).range([0, t.size()]), l = Y().domain([0, a - 1]).range([0, t.size()]), f = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = P(f).attr("class", y.widget + " " + y.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + y.radiobutton).data(s).enter().append("g").attr("class", y.radiobutton).attr("id", (x) => "b" + x).attr("transform", (x) => t.orientation() == "vertical" ? "translate(0," + l(x) + ")" : "translate(" + u(x) + ",0)");
  var g, p;
  t.shape() == "rect" ? (g = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = h.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (g = h.append("circle").attr("r", i / 2), p = h.append("circle").attr("r", o / 2)), g.attr("class", y.background).on("mouseover", function() {
    P(this).classed(y.lit, !0), P(this.parentNode).select("." + y.symbol).classed(y.lit, !0);
  }).on("mouseout", function() {
    P(this).classed(y.lit, !1), P(this.parentNode).select("." + y.symbol).classed(y.lit, !1);
  }), p.attr("class", y.symbol), p.filter((x) => x == t.value()).classed(y.selected, !0), h.on("click", t.click);
  const d = ze(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", y.label).text(function(x, M) {
    return t.choices()[M];
  }).attr("alignment-baseline", d.valign).attr("transform", "translate(" + d.x + "," + d.y + ")").style("font-size", t.fontsize()).attr("text-anchor", d.anchor), f;
}, Xn = (t, n) => {
  switch (t.type) {
    case "button":
      return fd(t);
    case "slider":
      return hd(t);
    case "radio":
      return dd(t);
    case "toggle":
      return pd(t);
  }
}, gd = (t, n) => {
  const e = Dp(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = P("#" + t).classed(n.id + " " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), o = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height);
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && o.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && o.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (a) => "translate(" + a.x + "," + a.y + ")").style("fill", "black"), { display: i, controls: o, grid: e };
}, b = {
  widgets: {
    toggle_anchor: { x: 10, y: 1 },
    toggle_label_position: "left",
    toggle_gap: 1.5,
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 3, y: 5 },
    expo_radio_anchor: { x: 1, y: 11 },
    expo_radio_size: 10 * 40,
    expo_radio_orientation: "horizontal",
    expo_radio_labelposition: "bottom",
    expo_radio_shape: "circle",
    expo_text: "Exponent μ",
    expo_textanchor: { x: 6, y: 10 },
    walker_radio_anchor: { x: 5, y: 7.5 },
    walker_radio_size: 6 * 40,
    walker_radio_orientation: "horizontal",
    walker_radio_labelposition: "bottom",
    walker_radio_shape: "circle",
    walker_radio_buttonsize: 30,
    walker_textanchor: { x: 8, y: 6.5 },
    walker_text: "Number of walkers"
  },
  simulation: {
    delay: 10,
    path_width: 1.5,
    path_color: "rgba(0,0,0,0.5)",
    loc_size_large: 2,
    loc_size_small: 2,
    loc_color: "rgba(0,0,0,.8)",
    pos_size: 3,
    pos_color: "red"
  }
}, v = {
  T0: 100,
  scale_factor: 5,
  maximum_steps: 1e3,
  exponent: {
    choices: [0.75, 1, 1.25, 1.5, 1.75, 2, 3],
    default: 3
  },
  number_of_walkers: {
    choices: [1, 5, 10, 25],
    default: 2
  },
  hide_path: {
    default: !1
  },
  hide_locations: {
    default: !1
  },
  hide_positions: {
    default: !1
  }
}, Ri = (t) => pt(zi(t), (n) => {
  n[1].id = n[0], n[1].label = Lp(uh(n[0]), /_/g, " ");
}), Fi = (t) => pt(zi(t), (n) => n[1]), Li = (t, n) => Tt(t, (e, r) => e.widget = n[r]), _d = (t) => Oi(t, (n) => Np(n.default)), yd = (t) => Oi(t, (n) => Ep(n, "choices"));
Y().domain([0, 360]).range([0, 2 * Math.PI]);
Y().range([0, 360]).domain([0, 2 * Math.PI]);
const Di = _d(v), Hi = yd(v);
Ri(Di);
Ri(Hi);
const qi = Fi(Di), Bi = Fi(Hi), an = pt(
  qi,
  (t) => ld().value(t.default).id(t.id).label(t.label).labelposition(b.widgets.toggle_label_position)
), sn = pt(
  Bi,
  (t) => cd().choices(t.choices).id(t.id).value(t.default)
);
Li(qi, an);
Li(Bi, sn);
const R = Oe().actions(["play", "pause"]).id("play"), In = Oe().actions(["back"]).id("reset"), md = Oe().actions(["rewind"]), wd = [R, In], vd = (t, n) => {
  const e = n.position(b.widgets.toggle_anchor.x, ke(an.length).map((s) => b.widgets.toggle_anchor.y + b.widgets.toggle_gap * s));
  an.forEach((s, u) => s.position(e[u]));
  const r = n.position(b.widgets.expo_radio_anchor.x, b.widgets.expo_radio_anchor.y), i = n.position(b.widgets.walker_radio_anchor.x, b.widgets.walker_radio_anchor.y);
  sn[0].position(r).size(b.widgets.expo_radio_size).shape(b.widgets.expo_radio_shape).orientation(b.widgets.expo_radio_orientation).labelposition(b.widgets.expo_radio_labelposition).buttonsize(b.widgets.xpo_radio_buttonsize), sn[1].position(i).size(b.widgets.walker_radio_size).shape(b.widgets.walker_radio_shape).orientation(b.widgets.walker_radio_orientation).labelposition(b.widgets.walker_radio_labelposition).shape(b.widgets.walker_radio_shape).buttonsize(b.widgets.walker_radio_buttonsize);
  const o = n.position(b.widgets.expo_textanchor.x, b.widgets.expo_textanchor.y), a = n.position(b.widgets.walker_textanchor.x, b.widgets.walker_textanchor.y);
  t.append("g").attr("transform", "translate(" + o.x + "," + o.y + ")").attr("class", y.widget).append("text").text(b.widgets.expo_text).attr("class", y.title).attr("id", "expotext"), t.append("g").attr("transform", "translate(" + a.x + "," + a.y + ")").attr("class", y.widget).append("text").text(b.widgets.walker_text).attr("class", y.title).attr("id", "walkertext"), R.position(n.position(b.widgets.playbutton_anchor.x, b.widgets.playbutton_anchor.y)).size(b.widgets.playbutton_size), In.position(n.position(b.widgets.backbutton_anchor.x, b.widgets.backbutton_anchor.y)), t.selectAll(null).data(an).enter().append(Xn), t.selectAll(null).data(wd).enter().append(Xn), t.selectAll(null).data(sn).enter().append(Xn);
};
var Cn = [];
const xd = () => {
  v.timer = {}, v.tick = 0;
  const t = v.number_of_walkers.choices[v.number_of_walkers.choices.length - 1];
  Cn = pt(ke(t), (n) => ({
    index: n,
    trajectory: [{ x: 0, y: 0 }]
  }));
}, bd = () => (Tt(Cn, (t) => {
  let n = Math.random() * 2 * Math.PI, e = v.exponent.choices[v.exponent.widget.value()], r = 1 / Math.pow(Math.random(), 1 / e);
  t.trajectory.push({ x: t.trajectory[v.tick].x + Math.cos(n) * r, y: t.trajectory[v.tick].y + Math.sin(n) * r });
}), v.tick++, v.tick > v.maximum_steps);
var k, un, ln;
const vn = (t) => {
  let n = v.scale_factor, e = v.exponent.choices[v.exponent.widget.value()], r = e < 2 ? n * Math.pow(t, 1 / e) : n * Math.pow(t, 1 / 2);
  return [-r, r];
}, At = Y(), Pt = Y();
var Xi = hl().x((t) => At(t.x)).y((t) => Pt(t.y)), Md = Y().domain([v.T0, v.maximum_steps / 2]).range([b.simulation.loc_size_large, b.simulation.loc_size_small]).clamp(!0);
const Gi = (t) => {
  Tt(t, (n) => {
    k.beginPath(), Xi(n.trajectory), k.lineWidth = b.simulation.path_width, k.strokeStyle = b.simulation.path_color, k.stroke(), k.closePath();
  });
}, Ui = (t) => {
  let n = Md(v.tick);
  Tt(t, (e) => {
    Tt(e.trajectory, (r) => {
      k.beginPath(), k.arc(At(r.x), Pt(r.y), n, 0, 2 * Math.PI), k.fillStyle = b.simulation.loc_color, k.fill();
    });
  });
}, Yi = (t) => {
  Tt(t, (n) => {
    k.beginPath();
    let e = n.trajectory[n.trajectory.length - 1];
    k.arc(At(e.x), Pt(e.y), b.simulation.pos_size, 0, 2 * Math.PI), k.fillStyle = b.simulation.pos_color, k.fill();
  });
}, $d = (t, n) => {
  un = n.display_size.width, ln = n.display_size.height, At.range([0, un]), Pt.range([0, ln]), At.domain(vn(v.T0)), Pt.domain(vn(v.T0)), k = t.node().getContext("2d"), Xi.context(k), k.clearRect(0, 0, un, ln);
  let e = Ii(Cn, v.number_of_walkers.choices[v.number_of_walkers.widget.value()]);
  v.hide_path.widget.value() || Gi(e), v.hide_locations.widget.value() || Ui(e), v.hide_positions.widget.value() || Yi(e);
}, Ki = (t, n) => {
  v.tick > v.T0 && (At.domain(vn(v.tick)), Pt.domain(vn(v.tick))), k.clearRect(0, 0, un, ln);
  let e = Ii(Cn, v.number_of_walkers.choices[v.number_of_walkers.widget.value()]);
  v.hide_path.widget.value() || Gi(e), v.hide_locations.widget.value() || Ui(e), v.hide_positions.widget.value() || Yi(e);
}, Td = (t, n) => {
  Ki();
};
function Ad(t, n, e) {
  let r = !1;
  r = bd(), Ki(), r && (n.select("#button_play").transition(1e3).style("opacity", 0).style("pointer-events", "none"), R.press(n));
}
function fe(t, n) {
  xd(), $d(t, n);
}
function Qt(t, n) {
  Td();
}
var Tr = {};
const Pd = (t, n, e) => {
  R.value() == 1 ? Tr = Ss(() => Ad(t, n), b.simulation.delay) : Tr.stop(), n.select("#radio_exponent").transition(1e3).style("opacity", R.value() ? 0 : 1), n.select("#radio_exponent").style("pointer-events", R.value() ? "none" : null), n.select("#expotext").transition(1e3).style("opacity", R.value() ? 0 : 1);
}, Sd = (t, n, e) => {
  R.update(() => Pd(t, n)), In.update(() => {
    fe(t, e), n.select("#button_play").transition(1e3).style("opacity", null), n.select("#button_play").style("pointer-events", null);
  }), v.exponent.widget.update(
    () => {
      fe(t, e), n.select("#button_play").transition(1e3).style("opacity", null), n.select("#button_play").style("pointer-events", null);
    }
  ), v.number_of_walkers.widget.update(() => {
    Qt();
  }), v.hide_locations.widget.update(() => {
    Qt();
  }), v.hide_positions.widget.update(() => {
    Qt();
  }), v.hide_path.widget.update(() => {
    Qt();
  });
}, Ed = {
  name: "@explorables/anomalous_itinerary",
  title: "Anomalous Itinerary",
  subtitle: "A visual illustration of Lévy Flights",
  description: "The explorable illustrates the properties of superdiffusive, scale-free random walks known as Lévy flights.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function kd(t, n = Vi) {
  const e = gd(t, n), r = e.display, i = e.controls, o = e.grid;
  return vd(i, o), Sd(r, i, n), fe(r, n), {
    halt() {
      R.value() === 1 && R.press(i);
    },
    reset() {
      R.value() === 1 && R.press(i), md.press(i), In.press(i);
    },
    config: n,
    meta: Ed
  };
}
export {
  kd as default
};
