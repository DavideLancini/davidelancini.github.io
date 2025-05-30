document.addEventListener("DOMContentLoaded", () => {
 if (header) {
  header.innerHTML = `<div class="container"><h1><a href="index.html" id="logo">Dev.</a></h1><nav id="nav"><ul>
<li class><a href="con_indice.html">Con Indice</a></li>
<li class><a href="senza_indice.html">Senza Indice</a></li>
</ul></nav></div>`;
 }
 if (footer) {
  footer.innerHTML = `<section class="container"><header class="major"><h2>Contact</h2><span class="byline">Come along with me</span></header><ul class="icons"><li class="active"><a href="https://www.facebook.com/davidelenc" class="fa fa-facebook"><span>Facebook</span></a></li><li><a href="https://twitter.com/davidelenc" class="fa fa-twitter"><span>Twitter</span></a></li><li><a href="https://www.linkedin.com/in/davide-lancini-111997163/" class="fa fa-linkedin"><span>LinkedIn</span></a></li></ul><hr /></section><div id="copyright">Made by Lancini Davide</div>`;
 }
});
!(function (e, t) {
 "object" == typeof module && "object" == typeof module.exports
  ? (module.exports = e.document
     ? t(e, !0)
     : function (e) {
        if (!e.document)
         throw new Error("jQuery requires a window with a document");
        return t(e);
       })
  : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
 var n = [],
  r = n.slice,
  i = n.concat,
  o = n.push,
  a = n.indexOf,
  s = {},
  l = s.toString,
  u = s.hasOwnProperty,
  c = "".trim,
  d = {},
  f = "1.11.0",
  p = function (e, t) {
   return new p.fn.init(e, t);
  },
  h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
  m = /^-ms-/,
  g = /-([\da-z])/gi,
  v = function (e, t) {
   return t.toUpperCase();
  };
 function y(e) {
  var t = e.length,
   n = p.type(e);
  return (
   "function" !== n &&
   !p.isWindow(e) &&
   (!(1 !== e.nodeType || !t) ||
    "array" === n ||
    0 === t ||
    ("number" == typeof t && t > 0 && t - 1 in e))
  );
 }
 (p.fn = p.prototype =
  {
   jquery: f,
   constructor: p,
   selector: "",
   length: 0,
   toArray: function () {
    return r.call(this);
   },
   get: function (e) {
    return null != e
     ? 0 > e
       ? this[e + this.length]
       : this[e]
     : r.call(this);
   },
   pushStack: function (e) {
    var t = p.merge(this.constructor(), e);
    return (t.prevObject = this), (t.context = this.context), t;
   },
   each: function (e, t) {
    return p.each(this, e, t);
   },
   map: function (e) {
    return this.pushStack(
     p.map(this, function (t, n) {
      return e.call(t, n, t);
     })
    );
   },
   slice: function () {
    return this.pushStack(r.apply(this, arguments));
   },
   first: function () {
    return this.eq(0);
   },
   last: function () {
    return this.eq(-1);
   },
   eq: function (e) {
    var t = this.length,
     n = +e + (0 > e ? t : 0);
    return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
   },
   end: function () {
    return this.prevObject || this.constructor(null);
   },
   push: o,
   sort: n.sort,
   splice: n.splice,
  }),
  (p.extend = p.fn.extend =
   function () {
    var e,
     t,
     n,
     r,
     i,
     o,
     a = arguments[0] || {},
     s = 1,
     l = arguments.length,
     u = !1;
    for (
     "boolean" == typeof a && ((u = a), (a = arguments[s] || {}), s++),
      "object" == typeof a || p.isFunction(a) || (a = {}),
      s === l && ((a = this), s--);
     l > s;
     s++
    )
     if (null != (i = arguments[s]))
      for (r in i)
       (e = a[r]),
        a !== (n = i[r]) &&
         (u && n && (p.isPlainObject(n) || (t = p.isArray(n)))
          ? (t
             ? ((t = !1), (o = e && p.isArray(e) ? e : []))
             : (o = e && p.isPlainObject(e) ? e : {}),
            (a[r] = p.extend(u, o, n)))
          : void 0 !== n && (a[r] = n));
    return a;
   }),
  p.extend({
   expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
   isReady: !0,
   error: function (e) {
    throw new Error(e);
   },
   noop: function () {},
   isFunction: function (e) {
    return "function" === p.type(e);
   },
   isArray:
    Array.isArray ||
    function (e) {
     return "array" === p.type(e);
    },
   isWindow: function (e) {
    return null != e && e == e.window;
   },
   isNumeric: function (e) {
    return e - parseFloat(e) >= 0;
   },
   isEmptyObject: function (e) {
    var t;
    for (t in e) return !1;
    return !0;
   },
   isPlainObject: function (e) {
    var t;
    if (!e || "object" !== p.type(e) || e.nodeType || p.isWindow(e)) return !1;
    try {
     if (
      e.constructor &&
      !u.call(e, "constructor") &&
      !u.call(e.constructor.prototype, "isPrototypeOf")
     )
      return !1;
    } catch (e) {
     return !1;
    }
    if (d.ownLast) for (t in e) return u.call(e, t);
    for (t in e);
    return void 0 === t || u.call(e, t);
   },
   type: function (e) {
    return null == e
     ? e + ""
     : "object" == typeof e || "function" == typeof e
     ? s[l.call(e)] || "object"
     : typeof e;
   },
   globalEval: function (t) {
    t &&
     p.trim(t) &&
     (
      e.execScript ||
      function (t) {
       e.eval.call(e, t);
      }
     )(t);
   },
   camelCase: function (e) {
    return e.replace(m, "ms-").replace(g, v);
   },
   nodeName: function (e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
   },
   each: function (e, t, n) {
    var r = 0,
     i = e.length,
     o = y(e);
    if (n) {
     if (o) for (; i > r && !1 !== t.apply(e[r], n); r++);
     else for (r in e) if (!1 === t.apply(e[r], n)) break;
    } else if (o) for (; i > r && !1 !== t.call(e[r], r, e[r]); r++);
    else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
    return e;
   },
   trim:
    c && !c.call("\ufeff ")
     ? function (e) {
        return null == e ? "" : c.call(e);
       }
     : function (e) {
        return null == e ? "" : (e + "").replace(h, "");
       },
   makeArray: function (e, t) {
    var n = t || [];
    return (
     null != e &&
      (y(Object(e))
       ? p.merge(n, "string" == typeof e ? [e] : e)
       : o.call(n, e)),
     n
    );
   },
   inArray: function (e, t, n) {
    var r;
    if (t) {
     if (a) return a.call(t, e, n);
     for (
      r = t.length, n = n ? (0 > n ? Math.max(0, r + n) : n) : 0;
      r > n;
      n++
     )
      if (n in t && t[n] === e) return n;
    }
    return -1;
   },
   merge: function (e, t) {
    for (var n = +t.length, r = 0, i = e.length; n > r; ) e[i++] = t[r++];
    if (n != n) for (; void 0 !== t[r]; ) e[i++] = t[r++];
    return (e.length = i), e;
   },
   grep: function (e, t, n) {
    for (var r = [], i = 0, o = e.length, a = !n; o > i; i++)
     !t(e[i], i) !== a && r.push(e[i]);
    return r;
   },
   map: function (e, t, n) {
    var r,
     o = 0,
     a = e.length,
     s = [];
    if (y(e)) for (; a > o; o++) null != (r = t(e[o], o, n)) && s.push(r);
    else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
    return i.apply([], s);
   },
   guid: 1,
   proxy: function (e, t) {
    var n, i, o;
    return (
     "string" == typeof t && ((o = e[t]), (t = e), (e = o)),
     p.isFunction(e)
      ? ((n = r.call(arguments, 2)),
        ((i = function () {
         return e.apply(t || this, n.concat(r.call(arguments)));
        }).guid = e.guid =
         e.guid || p.guid++),
        i)
      : void 0
    );
   },
   now: function () {
    return +new Date();
   },
   support: d,
  }),
  p.each(
   "Boolean Number String Function Array Date RegExp Object Error".split(" "),
   function (e, t) {
    s["[object " + t + "]"] = t.toLowerCase();
   }
  );
 var b = (function (e) {
  var t,
   n,
   r,
   i,
   o,
   a,
   s,
   l,
   u,
   c,
   d,
   f,
   p,
   h,
   m,
   g,
   v,
   y = "sizzle" + -new Date(),
   b = e.document,
   x = 0,
   w = 0,
   T = re(),
   C = re(),
   N = re(),
   E = function (e, t) {
    return e === t && (u = !0), 0;
   },
   k = "undefined",
   S = 1 << 31,
   A = {}.hasOwnProperty,
   D = [],
   j = D.pop,
   L = D.push,
   H = D.push,
   q = D.slice,
   _ =
    D.indexOf ||
    function (e) {
     for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
     return -1;
    },
   M =
    "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
   F = "[\\x20\\t\\r\\n\\f]",
   O = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
   B = O.replace("w", "w#"),
   P =
    "\\[" +
    F +
    "*(" +
    O +
    ")" +
    F +
    "*(?:([*^$|!~]?=)" +
    F +
    "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
    B +
    ")|)|)" +
    F +
    "*\\]",
   R =
    ":(" +
    O +
    ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
    P.replace(3, 8) +
    ")*)|.*)\\)|)",
   W = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
   $ = new RegExp("^" + F + "*," + F + "*"),
   z = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
   I = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"),
   X = new RegExp(R),
   U = new RegExp("^" + B + "$"),
   V = {
    ID: new RegExp("^#(" + O + ")"),
    CLASS: new RegExp("^\\.(" + O + ")"),
    TAG: new RegExp("^(" + O.replace("w", "w*") + ")"),
    ATTR: new RegExp("^" + P),
    PSEUDO: new RegExp("^" + R),
    CHILD: new RegExp(
     "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
      F +
      "*(even|odd|(([+-]|)(\\d*)n|)" +
      F +
      "*(?:([+-]|)" +
      F +
      "*(\\d+)|))" +
      F +
      "*\\)|)",
     "i"
    ),
    bool: new RegExp("^(?:" + M + ")$", "i"),
    needsContext: new RegExp(
     "^" +
      F +
      "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
      F +
      "*((?:-\\d)?\\d*)" +
      F +
      "*\\)|)(?=[^-]|$)",
     "i"
    ),
   },
   J = /^(?:input|select|textarea|button)$/i,
   Y = /^h\d$/i,
   G = /^[^{]+\{\s*\[native \w/,
   Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
   K = /[+~]/,
   Z = /'|\\/g,
   ee = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"),
   te = function (e, t, n) {
    var r = "0x" + t - 65536;
    return r != r || n
     ? t
     : 0 > r
     ? String.fromCharCode(r + 65536)
     : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
   };
  try {
   H.apply((D = q.call(b.childNodes)), b.childNodes),
    D[b.childNodes.length].nodeType;
  } catch (e) {
   H = {
    apply: D.length
     ? function (e, t) {
        L.apply(e, q.call(t));
       }
     : function (e, t) {
        for (var n = e.length, r = 0; (e[n++] = t[r++]); );
        e.length = n - 1;
       },
   };
  }
  function ne(e, t, r, i) {
   var o, a, s, l, u, f, m, g, x, w;
   if (
    ((t ? t.ownerDocument || t : b) !== d && c(t),
    (r = r || []),
    !e || "string" != typeof e)
   )
    return r;
   if (1 !== (l = (t = t || d).nodeType) && 9 !== l) return [];
   if (p && !i) {
    if ((o = Q.exec(e)))
     if ((s = o[1])) {
      if (9 === l) {
       if (!(a = t.getElementById(s)) || !a.parentNode) return r;
       if (a.id === s) return r.push(a), r;
      } else if (
       t.ownerDocument &&
       (a = t.ownerDocument.getElementById(s)) &&
       v(t, a) &&
       a.id === s
      )
       return r.push(a), r;
     } else {
      if (o[2]) return H.apply(r, t.getElementsByTagName(e)), r;
      if ((s = o[3]) && n.getElementsByClassName && t.getElementsByClassName)
       return H.apply(r, t.getElementsByClassName(s)), r;
     }
    if (n.qsa && (!h || !h.test(e))) {
     if (
      ((g = m = y),
      (x = t),
      (w = 9 === l && e),
      1 === l && "object" !== t.nodeName.toLowerCase())
     ) {
      for (
       f = pe(e),
        (m = t.getAttribute("id"))
         ? (g = m.replace(Z, "\\$&"))
         : t.setAttribute("id", g),
        g = "[id='" + g + "'] ",
        u = f.length;
       u--;

      )
       f[u] = g + he(f[u]);
      (x = (K.test(e) && de(t.parentNode)) || t), (w = f.join(","));
     }
     if (w)
      try {
       return H.apply(r, x.querySelectorAll(w)), r;
      } catch (e) {
      } finally {
       m || t.removeAttribute("id");
      }
    }
   }
   return we(e.replace(W, "$1"), t, r, i);
  }
  function re() {
   var e = [];
   return function t(n, i) {
    return (
     e.push(n + " ") > r.cacheLength && delete t[e.shift()], (t[n + " "] = i)
    );
   };
  }
  function ie(e) {
   return (e[y] = !0), e;
  }
  function oe(e) {
   var t = d.createElement("div");
   try {
    return !!e(t);
   } catch (e) {
    return !1;
   } finally {
    t.parentNode && t.parentNode.removeChild(t), (t = null);
   }
  }
  function ae(e, t) {
   for (var n = e.split("|"), i = e.length; i--; ) r.attrHandle[n[i]] = t;
  }
  function se(e, t) {
   var n = t && e,
    r =
     n &&
     1 === e.nodeType &&
     1 === t.nodeType &&
     (~t.sourceIndex || S) - (~e.sourceIndex || S);
   if (r) return r;
   if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
   return e ? 1 : -1;
  }
  function le(e) {
   return function (t) {
    return "input" === t.nodeName.toLowerCase() && t.type === e;
   };
  }
  function ue(e) {
   return function (t) {
    var n = t.nodeName.toLowerCase();
    return ("input" === n || "button" === n) && t.type === e;
   };
  }
  function ce(e) {
   return ie(function (t) {
    return (
     (t = +t),
     ie(function (n, r) {
      for (var i, o = e([], n.length, t), a = o.length; a--; )
       n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
     })
    );
   });
  }
  function de(e) {
   return e && typeof e.getElementsByTagName !== k && e;
  }
  for (t in ((n = ne.support = {}),
  (o = ne.isXML =
   function (e) {
    var t = e && (e.ownerDocument || e).documentElement;
    return !!t && "HTML" !== t.nodeName;
   }),
  (c = ne.setDocument =
   function (e) {
    var t,
     i = e ? e.ownerDocument || e : b,
     a = i.defaultView;
    return i !== d && 9 === i.nodeType && i.documentElement
     ? ((d = i),
       (f = i.documentElement),
       (p = !o(i)),
       a &&
        a !== a.top &&
        (a.addEventListener
         ? a.addEventListener(
            "unload",
            function () {
             c();
            },
            !1
           )
         : a.attachEvent &&
           a.attachEvent("onunload", function () {
            c();
           })),
       (n.attributes = oe(function (e) {
        return (e.className = "i"), !e.getAttribute("className");
       })),
       (n.getElementsByTagName = oe(function (e) {
        return (
         e.appendChild(i.createComment("")),
         !e.getElementsByTagName("*").length
        );
       })),
       (n.getElementsByClassName =
        G.test(i.getElementsByClassName) &&
        oe(function (e) {
         return (
          (e.innerHTML = "<div class='a'></div><div class='a i'></div>"),
          (e.firstChild.className = "i"),
          2 === e.getElementsByClassName("i").length
         );
        })),
       (n.getById = oe(function (e) {
        return (
         (f.appendChild(e).id = y),
         !i.getElementsByName || !i.getElementsByName(y).length
        );
       })),
       n.getById
        ? ((r.find.ID = function (e, t) {
           if (typeof t.getElementById !== k && p) {
            var n = t.getElementById(e);
            return n && n.parentNode ? [n] : [];
           }
          }),
          (r.filter.ID = function (e) {
           var t = e.replace(ee, te);
           return function (e) {
            return e.getAttribute("id") === t;
           };
          }))
        : (delete r.find.ID,
          (r.filter.ID = function (e) {
           var t = e.replace(ee, te);
           return function (e) {
            var n =
             typeof e.getAttributeNode !== k && e.getAttributeNode("id");
            return n && n.value === t;
           };
          })),
       (r.find.TAG = n.getElementsByTagName
        ? function (e, t) {
           return typeof t.getElementsByTagName !== k
            ? t.getElementsByTagName(e)
            : void 0;
          }
        : function (e, t) {
           var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);
           if ("*" === e) {
            for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
            return r;
           }
           return o;
          }),
       (r.find.CLASS =
        n.getElementsByClassName &&
        function (e, t) {
         return typeof t.getElementsByClassName !== k && p
          ? t.getElementsByClassName(e)
          : void 0;
        }),
       (m = []),
       (h = []),
       (n.qsa = G.test(i.querySelectorAll)) &&
        (oe(function (e) {
         (e.innerHTML = "<select t=''><option selected=''></option></select>"),
          e.querySelectorAll("[t^='']").length &&
           h.push("[*^$]=" + F + "*(?:''|\"\")"),
          e.querySelectorAll("[selected]").length ||
           h.push("\\[" + F + "*(?:value|" + M + ")"),
          e.querySelectorAll(":checked").length || h.push(":checked");
        }),
        oe(function (e) {
         var t = i.createElement("input");
         t.setAttribute("type", "hidden"),
          e.appendChild(t).setAttribute("name", "D"),
          e.querySelectorAll("[name=d]").length &&
           h.push("name" + F + "*[*^$|!~]?="),
          e.querySelectorAll(":enabled").length ||
           h.push(":enabled", ":disabled"),
          e.querySelectorAll("*,:x"),
          h.push(",.*:");
        })),
       (n.matchesSelector = G.test(
        (g =
         f.webkitMatchesSelector ||
         f.mozMatchesSelector ||
         f.oMatchesSelector ||
         f.msMatchesSelector)
       )) &&
        oe(function (e) {
         (n.disconnectedMatch = g.call(e, "div")),
          g.call(e, "[s!='']:x"),
          m.push("!=", R);
        }),
       (h = h.length && new RegExp(h.join("|"))),
       (m = m.length && new RegExp(m.join("|"))),
       (t = G.test(f.compareDocumentPosition)),
       (v =
        t || G.test(f.contains)
         ? function (e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
             r = t && t.parentNode;
            return (
             e === r ||
             !(
              !r ||
              1 !== r.nodeType ||
              !(n.contains
               ? n.contains(r)
               : e.compareDocumentPosition &&
                 16 & e.compareDocumentPosition(r))
             )
            );
           }
         : function (e, t) {
            if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
            return !1;
           }),
       (E = t
        ? function (e, t) {
           if (e === t) return (u = !0), 0;
           var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
           return (
            r ||
            (1 &
             (r =
              (e.ownerDocument || e) === (t.ownerDocument || t)
               ? e.compareDocumentPosition(t)
               : 1) ||
            (!n.sortDetached && t.compareDocumentPosition(e) === r)
             ? e === i || (e.ownerDocument === b && v(b, e))
               ? -1
               : t === i || (t.ownerDocument === b && v(b, t))
               ? 1
               : l
               ? _.call(l, e) - _.call(l, t)
               : 0
             : 4 & r
             ? -1
             : 1)
           );
          }
        : function (e, t) {
           if (e === t) return (u = !0), 0;
           var n,
            r = 0,
            o = e.parentNode,
            a = t.parentNode,
            s = [e],
            c = [t];
           if (!o || !a)
            return e === i
             ? -1
             : t === i
             ? 1
             : o
             ? -1
             : a
             ? 1
             : l
             ? _.call(l, e) - _.call(l, t)
             : 0;
           if (o === a) return se(e, t);
           for (n = e; (n = n.parentNode); ) s.unshift(n);
           for (n = t; (n = n.parentNode); ) c.unshift(n);
           for (; s[r] === c[r]; ) r++;
           return r ? se(s[r], c[r]) : s[r] === b ? -1 : c[r] === b ? 1 : 0;
          }),
       i)
     : d;
   }),
  (ne.matches = function (e, t) {
   return ne(e, null, null, t);
  }),
  (ne.matchesSelector = function (e, t) {
   if (
    ((e.ownerDocument || e) !== d && c(e),
    (t = t.replace(I, "='$1']")),
    !(!n.matchesSelector || !p || (m && m.test(t)) || (h && h.test(t))))
   )
    try {
     var r = g.call(e, t);
     if (
      r ||
      n.disconnectedMatch ||
      (e.document && 11 !== e.document.nodeType)
     )
      return r;
    } catch (e) {}
   return ne(t, d, null, [e]).length > 0;
  }),
  (ne.contains = function (e, t) {
   return (e.ownerDocument || e) !== d && c(e), v(e, t);
  }),
  (ne.attr = function (e, t) {
   (e.ownerDocument || e) !== d && c(e);
   var i = r.attrHandle[t.toLowerCase()],
    o = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !p) : void 0;
   return void 0 !== o
    ? o
    : n.attributes || !p
    ? e.getAttribute(t)
    : (o = e.getAttributeNode(t)) && o.specified
    ? o.value
    : null;
  }),
  (ne.error = function (e) {
   throw new Error("Syntax error, unrecognized expression: " + e);
  }),
  (ne.uniqueSort = function (e) {
   var t,
    r = [],
    i = 0,
    o = 0;
   if (
    ((u = !n.detectDuplicates),
    (l = !n.sortStable && e.slice(0)),
    e.sort(E),
    u)
   ) {
    for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
    for (; i--; ) e.splice(r[i], 1);
   }
   return (l = null), e;
  }),
  (i = ne.getText =
   function (e) {
    var t,
     n = "",
     r = 0,
     o = e.nodeType;
    if (o) {
     if (1 === o || 9 === o || 11 === o) {
      if ("string" == typeof e.textContent) return e.textContent;
      for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
     } else if (3 === o || 4 === o) return e.nodeValue;
    } else for (; (t = e[r++]); ) n += i(t);
    return n;
   }),
  ((r = ne.selectors =
   {
    cacheLength: 50,
    createPseudo: ie,
    match: V,
    attrHandle: {},
    find: {},
    relative: {
     ">": { dir: "parentNode", first: !0 },
     " ": { dir: "parentNode" },
     "+": { dir: "previousSibling", first: !0 },
     "~": { dir: "previousSibling" },
    },
    preFilter: {
     ATTR: function (e) {
      return (
       (e[1] = e[1].replace(ee, te)),
       (e[3] = (e[4] || e[5] || "").replace(ee, te)),
       "~=" === e[2] && (e[3] = " " + e[3] + " "),
       e.slice(0, 4)
      );
     },
     CHILD: function (e) {
      return (
       (e[1] = e[1].toLowerCase()),
       "nth" === e[1].slice(0, 3)
        ? (e[3] || ne.error(e[0]),
          (e[4] = +(e[4]
           ? e[5] + (e[6] || 1)
           : 2 * ("even" === e[3] || "odd" === e[3]))),
          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
        : e[3] && ne.error(e[0]),
       e
      );
     },
     PSEUDO: function (e) {
      var t,
       n = !e[5] && e[2];
      return V.CHILD.test(e[0])
       ? null
       : (e[3] && void 0 !== e[4]
          ? (e[2] = e[4])
          : n &&
            X.test(n) &&
            (t = pe(n, !0)) &&
            (t = n.indexOf(")", n.length - t) - n.length) &&
            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
         e.slice(0, 3));
     },
    },
    filter: {
     TAG: function (e) {
      var t = e.replace(ee, te).toLowerCase();
      return "*" === e
       ? function () {
          return !0;
         }
       : function (e) {
          return e.nodeName && e.nodeName.toLowerCase() === t;
         };
     },
     CLASS: function (e) {
      var t = T[e + " "];
      return (
       t ||
       ((t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) &&
        T(e, function (e) {
         return t.test(
          ("string" == typeof e.className && e.className) ||
           (typeof e.getAttribute !== k && e.getAttribute("class")) ||
           ""
         );
        }))
      );
     },
     ATTR: function (e, t, n) {
      return function (r) {
       var i = ne.attr(r, e);
       return null == i
        ? "!=" === t
        : !t ||
           ((i += ""),
           "=" === t
            ? i === n
            : "!=" === t
            ? i !== n
            : "^=" === t
            ? n && 0 === i.indexOf(n)
            : "*=" === t
            ? n && i.indexOf(n) > -1
            : "$=" === t
            ? n && i.slice(-n.length) === n
            : "~=" === t
            ? (" " + i + " ").indexOf(n) > -1
            : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
      };
     },
     CHILD: function (e, t, n, r, i) {
      var o = "nth" !== e.slice(0, 3),
       a = "last" !== e.slice(-4),
       s = "of-type" === t;
      return 1 === r && 0 === i
       ? function (e) {
          return !!e.parentNode;
         }
       : function (t, n, l) {
          var u,
           c,
           d,
           f,
           p,
           h,
           m = o !== a ? "nextSibling" : "previousSibling",
           g = t.parentNode,
           v = s && t.nodeName.toLowerCase(),
           b = !l && !s;
          if (g) {
           if (o) {
            for (; m; ) {
             for (d = t; (d = d[m]); )
              if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
               return !1;
             h = m = "only" === e && !h && "nextSibling";
            }
            return !0;
           }
           if (((h = [a ? g.firstChild : g.lastChild]), a && b)) {
            for (
             p = (u = (c = g[y] || (g[y] = {}))[e] || [])[0] === x && u[1],
              f = u[0] === x && u[2],
              d = p && g.childNodes[p];
             (d = (++p && d && d[m]) || (f = p = 0) || h.pop());

            )
             if (1 === d.nodeType && ++f && d === t) {
              c[e] = [x, p, f];
              break;
             }
           } else if (b && (u = (t[y] || (t[y] = {}))[e]) && u[0] === x)
            f = u[1];
           else
            for (
             ;
             (d = (++p && d && d[m]) || (f = p = 0) || h.pop()) &&
             ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) ||
              !++f ||
              (b && ((d[y] || (d[y] = {}))[e] = [x, f]), d !== t));

            );
           return (f -= i) === r || (f % r == 0 && f / r >= 0);
          }
         };
     },
     PSEUDO: function (e, t) {
      var n,
       i =
        r.pseudos[e] ||
        r.setFilters[e.toLowerCase()] ||
        ne.error("unsupported pseudo: " + e);
      return i[y]
       ? i(t)
       : i.length > 1
       ? ((n = [e, e, "", t]),
         r.setFilters.hasOwnProperty(e.toLowerCase())
          ? ie(function (e, n) {
             for (var r, o = i(e, t), a = o.length; a--; )
              e[(r = _.call(e, o[a]))] = !(n[r] = o[a]);
            })
          : function (e) {
             return i(e, 0, n);
            })
       : i;
     },
    },
    pseudos: {
     not: ie(function (e) {
      var t = [],
       n = [],
       r = a(e.replace(W, "$1"));
      return r[y]
       ? ie(function (e, t, n, i) {
          for (var o, a = r(e, null, i, []), s = e.length; s--; )
           (o = a[s]) && (e[s] = !(t[s] = o));
         })
       : function (e, i, o) {
          return (t[0] = e), r(t, null, o, n), !n.pop();
         };
     }),
     has: ie(function (e) {
      return function (t) {
       return ne(e, t).length > 0;
      };
     }),
     contains: ie(function (e) {
      return function (t) {
       return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
      };
     }),
     lang: ie(function (e) {
      return (
       U.test(e || "") || ne.error("unsupported lang: " + e),
       (e = e.replace(ee, te).toLowerCase()),
       function (t) {
        var n;
        do {
         if (
          (n = p
           ? t.lang
           : t.getAttribute("xml:lang") || t.getAttribute("lang"))
         )
          return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
        } while ((t = t.parentNode) && 1 === t.nodeType);
        return !1;
       }
      );
     }),
     target: function (t) {
      var n = e.location && e.location.hash;
      return n && n.slice(1) === t.id;
     },
     root: function (e) {
      return e === f;
     },
     focus: function (e) {
      return (
       e === d.activeElement &&
       (!d.hasFocus || d.hasFocus()) &&
       !!(e.type || e.href || ~e.tabIndex)
      );
     },
     enabled: function (e) {
      return !1 === e.disabled;
     },
     disabled: function (e) {
      return !0 === e.disabled;
     },
     checked: function (e) {
      var t = e.nodeName.toLowerCase();
      return (
       ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
      );
     },
     selected: function (e) {
      return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
     },
     empty: function (e) {
      for (e = e.firstChild; e; e = e.nextSibling)
       if (e.nodeType < 6) return !1;
      return !0;
     },
     parent: function (e) {
      return !r.pseudos.empty(e);
     },
     header: function (e) {
      return Y.test(e.nodeName);
     },
     input: function (e) {
      return J.test(e.nodeName);
     },
     button: function (e) {
      var t = e.nodeName.toLowerCase();
      return ("input" === t && "button" === e.type) || "button" === t;
     },
     text: function (e) {
      var t;
      return (
       "input" === e.nodeName.toLowerCase() &&
       "text" === e.type &&
       (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
      );
     },
     first: ce(function () {
      return [0];
     }),
     last: ce(function (e, t) {
      return [t - 1];
     }),
     eq: ce(function (e, t, n) {
      return [0 > n ? n + t : n];
     }),
     even: ce(function (e, t) {
      for (var n = 0; t > n; n += 2) e.push(n);
      return e;
     }),
     odd: ce(function (e, t) {
      for (var n = 1; t > n; n += 2) e.push(n);
      return e;
     }),
     lt: ce(function (e, t, n) {
      for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
      return e;
     }),
     gt: ce(function (e, t, n) {
      for (var r = 0 > n ? n + t : n; ++r < t; ) e.push(r);
      return e;
     }),
    },
   }).pseudos.nth = r.pseudos.eq),
  { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
   r.pseudos[t] = le(t);
  for (t in { submit: !0, reset: !0 }) r.pseudos[t] = ue(t);
  function fe() {}
  function pe(e, t) {
   var n,
    i,
    o,
    a,
    s,
    l,
    u,
    c = C[e + " "];
   if (c) return t ? 0 : c.slice(0);
   for (s = e, l = [], u = r.preFilter; s; ) {
    for (a in ((!n || (i = $.exec(s))) &&
     (i && (s = s.slice(i[0].length) || s), l.push((o = []))),
    (n = !1),
    (i = z.exec(s)) &&
     ((n = i.shift()),
     o.push({ value: n, type: i[0].replace(W, " ") }),
     (s = s.slice(n.length))),
    r.filter))
     !(i = V[a].exec(s)) ||
      (u[a] && !(i = u[a](i))) ||
      ((n = i.shift()),
      o.push({ value: n, type: a, matches: i }),
      (s = s.slice(n.length)));
    if (!n) break;
   }
   return t ? s.length : s ? ne.error(e) : C(e, l).slice(0);
  }
  function he(e) {
   for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
   return r;
  }
  function me(e, t, n) {
   var r = t.dir,
    i = n && "parentNode" === r,
    o = w++;
   return t.first
    ? function (t, n, o) {
       for (; (t = t[r]); ) if (1 === t.nodeType || i) return e(t, n, o);
      }
    : function (t, n, a) {
       var s,
        l,
        u = [x, o];
       if (a) {
        for (; (t = t[r]); )
         if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
       } else
        for (; (t = t[r]); )
         if (1 === t.nodeType || i) {
          if ((s = (l = t[y] || (t[y] = {}))[r]) && s[0] === x && s[1] === o)
           return (u[2] = s[2]);
          if (((l[r] = u), (u[2] = e(t, n, a)))) return !0;
         }
      };
  }
  function ge(e) {
   return e.length > 1
    ? function (t, n, r) {
       for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
       return !0;
      }
    : e[0];
  }
  function ve(e, t, n, r, i) {
   for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)
    (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
   return a;
  }
  function ye(e, t, n, r, i, o) {
   return (
    r && !r[y] && (r = ye(r)),
    i && !i[y] && (i = ye(i, o)),
    ie(function (o, a, s, l) {
     var u,
      c,
      d,
      f = [],
      p = [],
      h = a.length,
      m =
       o ||
       (function (e, t, n) {
        for (var r = 0, i = t.length; i > r; r++) ne(e, t[r], n);
        return n;
       })(t || "*", s.nodeType ? [s] : s, []),
      g = !e || (!o && t) ? m : ve(m, f, e, s, l),
      v = n ? (i || (o ? e : h || r) ? [] : a) : g;
     if ((n && n(g, v, s, l), r))
      for (u = ve(v, p), r(u, [], s, l), c = u.length; c--; )
       (d = u[c]) && (v[p[c]] = !(g[p[c]] = d));
     if (o) {
      if (i || e) {
       if (i) {
        for (u = [], c = v.length; c--; ) (d = v[c]) && u.push((g[c] = d));
        i(null, (v = []), u, l);
       }
       for (c = v.length; c--; )
        (d = v[c]) &&
         (u = i ? _.call(o, d) : f[c]) > -1 &&
         (o[u] = !(a[u] = d));
      }
     } else (v = ve(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, l) : H.apply(a, v);
    })
   );
  }
  function be(e) {
   for (
    var t,
     n,
     i,
     o = e.length,
     a = r.relative[e[0].type],
     l = a || r.relative[" "],
     u = a ? 1 : 0,
     c = me(
      function (e) {
       return e === t;
      },
      l,
      !0
     ),
     d = me(
      function (e) {
       return _.call(t, e) > -1;
      },
      l,
      !0
     ),
     f = [
      function (e, n, r) {
       return (
        (!a && (r || n !== s)) || ((t = n).nodeType ? c(e, n, r) : d(e, n, r))
       );
      },
     ];
    o > u;
    u++
   )
    if ((n = r.relative[e[u].type])) f = [me(ge(f), n)];
    else {
     if ((n = r.filter[e[u].type].apply(null, e[u].matches))[y]) {
      for (i = ++u; o > i && !r.relative[e[i].type]; i++);
      return ye(
       u > 1 && ge(f),
       u > 1 &&
        he(
         e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })
        ).replace(W, "$1"),
       n,
       i > u && be(e.slice(u, i)),
       o > i && be((e = e.slice(i))),
       o > i && he(e)
      );
     }
     f.push(n);
    }
   return ge(f);
  }
  function xe(e, t) {
   var n = t.length > 0,
    i = e.length > 0,
    o = function (o, a, l, u, c) {
     var f,
      p,
      h,
      m = 0,
      g = "0",
      v = o && [],
      y = [],
      b = s,
      w = o || (i && r.find.TAG("*", c)),
      T = (x += null == b ? 1 : Math.random() || 0.1),
      C = w.length;
     for (c && (s = a !== d && a); g !== C && null != (f = w[g]); g++) {
      if (i && f) {
       for (p = 0; (h = e[p++]); )
        if (h(f, a, l)) {
         u.push(f);
         break;
        }
       c && (x = T);
      }
      n && ((f = !h && f) && m--, o && v.push(f));
     }
     if (((m += g), n && g !== m)) {
      for (p = 0; (h = t[p++]); ) h(v, y, a, l);
      if (o) {
       if (m > 0) for (; g--; ) v[g] || y[g] || (y[g] = j.call(u));
       y = ve(y);
      }
      H.apply(u, y),
       c && !o && y.length > 0 && m + t.length > 1 && ne.uniqueSort(u);
     }
     return c && ((x = T), (s = b)), v;
    };
   return n ? ie(o) : o;
  }
  function we(e, t, i, o) {
   var s,
    l,
    u,
    c,
    d,
    f = pe(e);
   if (!o && 1 === f.length) {
    if (
     (l = f[0] = f[0].slice(0)).length > 2 &&
     "ID" === (u = l[0]).type &&
     n.getById &&
     9 === t.nodeType &&
     p &&
     r.relative[l[1].type]
    ) {
     if (!(t = (r.find.ID(u.matches[0].replace(ee, te), t) || [])[0]))
      return i;
     e = e.slice(l.shift().value.length);
    }
    for (
     s = V.needsContext.test(e) ? 0 : l.length;
     s-- && ((u = l[s]), !r.relative[(c = u.type)]);

    )
     if (
      (d = r.find[c]) &&
      (o = d(
       u.matches[0].replace(ee, te),
       (K.test(l[0].type) && de(t.parentNode)) || t
      ))
     ) {
      if ((l.splice(s, 1), !(e = o.length && he(l)))) return H.apply(i, o), i;
      break;
     }
   }
   return a(e, f)(o, t, !p, i, (K.test(e) && de(t.parentNode)) || t), i;
  }
  return (
   (fe.prototype = r.filters = r.pseudos),
   (r.setFilters = new fe()),
   (a = ne.compile =
    function (e, t) {
     var n,
      r = [],
      i = [],
      o = N[e + " "];
     if (!o) {
      for (t || (t = pe(e)), n = t.length; n--; )
       (o = be(t[n]))[y] ? r.push(o) : i.push(o);
      o = N(e, xe(i, r));
     }
     return o;
    }),
   (n.sortStable = y.split("").sort(E).join("") === y),
   (n.detectDuplicates = !!u),
   c(),
   (n.sortDetached = oe(function (e) {
    return 1 & e.compareDocumentPosition(d.createElement("div"));
   })),
   oe(function (e) {
    return (
     (e.innerHTML = "<a href='#'></a>"),
     "#" === e.firstChild.getAttribute("href")
    );
   }) ||
    ae("type|href|height|width", function (e, t, n) {
     return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }),
   (n.attributes &&
    oe(function (e) {
     return (
      (e.innerHTML = "<input/>"),
      e.firstChild.setAttribute("value", ""),
      "" === e.firstChild.getAttribute("value")
     );
    })) ||
    ae("value", function (e, t, n) {
     return n || "input" !== e.nodeName.toLowerCase()
      ? void 0
      : e.defaultValue;
    }),
   oe(function (e) {
    return null == e.getAttribute("disabled");
   }) ||
    ae(M, function (e, t, n) {
     var r;
     return n
      ? void 0
      : !0 === e[t]
      ? t.toLowerCase()
      : (r = e.getAttributeNode(t)) && r.specified
      ? r.value
      : null;
    }),
   ne
  );
 })(e);
 (p.find = b),
  (p.expr = b.selectors),
  (p.expr[":"] = p.expr.pseudos),
  (p.unique = b.uniqueSort),
  (p.text = b.getText),
  (p.isXMLDoc = b.isXML),
  (p.contains = b.contains);
 var x = p.expr.match.needsContext,
  w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
  T = /^.[^:#\[\.,]*$/;
 function C(e, t, n) {
  if (p.isFunction(t))
   return p.grep(e, function (e, r) {
    return !!t.call(e, r, e) !== n;
   });
  if (t.nodeType)
   return p.grep(e, function (e) {
    return (e === t) !== n;
   });
  if ("string" == typeof t) {
   if (T.test(t)) return p.filter(t, e, n);
   t = p.filter(t, e);
  }
  return p.grep(e, function (e) {
   return p.inArray(e, t) >= 0 !== n;
  });
 }
 (p.filter = function (e, t, n) {
  var r = t[0];
  return (
   n && (e = ":not(" + e + ")"),
   1 === t.length && 1 === r.nodeType
    ? p.find.matchesSelector(r, e)
      ? [r]
      : []
    : p.find.matches(
       e,
       p.grep(t, function (e) {
        return 1 === e.nodeType;
       })
      )
  );
 }),
  p.fn.extend({
   find: function (e) {
    var t,
     n = [],
     r = this,
     i = r.length;
    if ("string" != typeof e)
     return this.pushStack(
      p(e).filter(function () {
       for (t = 0; i > t; t++) if (p.contains(r[t], this)) return !0;
      })
     );
    for (t = 0; i > t; t++) p.find(e, r[t], n);
    return (
     ((n = this.pushStack(i > 1 ? p.unique(n) : n)).selector = this.selector
      ? this.selector + " " + e
      : e),
     n
    );
   },
   filter: function (e) {
    return this.pushStack(C(this, e || [], !1));
   },
   not: function (e) {
    return this.pushStack(C(this, e || [], !0));
   },
   is: function (e) {
    return !!C(this, "string" == typeof e && x.test(e) ? p(e) : e || [], !1)
     .length;
   },
  });
 var N,
  E = e.document,
  k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
 ((p.fn.init = function (e, t) {
  var n, r;
  if (!e) return this;
  if ("string" == typeof e) {
   if (
    !(n =
     "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3
      ? [null, e, null]
      : k.exec(e)) ||
    (!n[1] && t)
   )
    return !t || t.jquery ? (t || N).find(e) : this.constructor(t).find(e);
   if (n[1]) {
    if (
     ((t = t instanceof p ? t[0] : t),
     p.merge(
      this,
      p.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
     ),
     w.test(n[1]) && p.isPlainObject(t))
    )
     for (n in t) p.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
    return this;
   }
   if ((r = E.getElementById(n[2])) && r.parentNode) {
    if (r.id !== n[2]) return N.find(e);
    (this.length = 1), (this[0] = r);
   }
   return (this.context = E), (this.selector = e), this;
  }
  return e.nodeType
   ? ((this.context = this[0] = e), (this.length = 1), this)
   : p.isFunction(e)
   ? void 0 !== N.ready
     ? N.ready(e)
     : e(p)
   : (void 0 !== e.selector &&
      ((this.selector = e.selector), (this.context = e.context)),
     p.makeArray(e, this));
 }).prototype = p.fn),
  (N = p(E));
 var S = /^(?:parents|prev(?:Until|All))/,
  A = { children: !0, contents: !0, next: !0, prev: !0 };
 function D(e, t) {
  do {
   e = e[t];
  } while (e && 1 !== e.nodeType);
  return e;
 }
 p.extend({
  dir: function (e, t, n) {
   for (
    var r = [], i = e[t];
    i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !p(i).is(n));

   )
    1 === i.nodeType && r.push(i), (i = i[t]);
   return r;
  },
  sibling: function (e, t) {
   for (var n = []; e; e = e.nextSibling)
    1 === e.nodeType && e !== t && n.push(e);
   return n;
  },
 }),
  p.fn.extend({
   has: function (e) {
    var t,
     n = p(e, this),
     r = n.length;
    return this.filter(function () {
     for (t = 0; r > t; t++) if (p.contains(this, n[t])) return !0;
    });
   },
   closest: function (e, t) {
    for (
     var n,
      r = 0,
      i = this.length,
      o = [],
      a = x.test(e) || "string" != typeof e ? p(e, t || this.context) : 0;
     i > r;
     r++
    )
     for (n = this[r]; n && n !== t; n = n.parentNode)
      if (
       n.nodeType < 11 &&
       (a ? a.index(n) > -1 : 1 === n.nodeType && p.find.matchesSelector(n, e))
      ) {
       o.push(n);
       break;
      }
    return this.pushStack(o.length > 1 ? p.unique(o) : o);
   },
   index: function (e) {
    return e
     ? "string" == typeof e
       ? p.inArray(this[0], p(e))
       : p.inArray(e.jquery ? e[0] : e, this)
     : this[0] && this[0].parentNode
     ? this.first().prevAll().length
     : -1;
   },
   add: function (e, t) {
    return this.pushStack(p.unique(p.merge(this.get(), p(e, t))));
   },
   addBack: function (e) {
    return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
   },
  }),
  p.each(
   {
    parent: function (e) {
     var t = e.parentNode;
     return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
     return p.dir(e, "parentNode");
    },
    parentsUntil: function (e, t, n) {
     return p.dir(e, "parentNode", n);
    },
    next: function (e) {
     return D(e, "nextSibling");
    },
    prev: function (e) {
     return D(e, "previousSibling");
    },
    nextAll: function (e) {
     return p.dir(e, "nextSibling");
    },
    prevAll: function (e) {
     return p.dir(e, "previousSibling");
    },
    nextUntil: function (e, t, n) {
     return p.dir(e, "nextSibling", n);
    },
    prevUntil: function (e, t, n) {
     return p.dir(e, "previousSibling", n);
    },
    siblings: function (e) {
     return p.sibling((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
     return p.sibling(e.firstChild);
    },
    contents: function (e) {
     return p.nodeName(e, "iframe")
      ? e.contentDocument || e.contentWindow.document
      : p.merge([], e.childNodes);
    },
   },
   function (e, t) {
    p.fn[e] = function (n, r) {
     var i = p.map(this, t, n);
     return (
      "Until" !== e.slice(-5) && (r = n),
      r && "string" == typeof r && (i = p.filter(r, i)),
      this.length > 1 &&
       (A[e] || (i = p.unique(i)), S.test(e) && (i = i.reverse())),
      this.pushStack(i)
     );
    };
   }
  );
 var j,
  L = /\S+/g,
  H = {};
 function q() {
  E.addEventListener
   ? (E.removeEventListener("DOMContentLoaded", _, !1),
     e.removeEventListener("load", _, !1))
   : (E.detachEvent("onreadystatechange", _), e.detachEvent("onload", _));
 }
 function _() {
  (E.addEventListener ||
   "load" === event.type ||
   "complete" === E.readyState) &&
   (q(), p.ready());
 }
 (p.Callbacks = function (e) {
  e =
   "string" == typeof e
    ? H[e] ||
      (function (e) {
       var t = (H[e] = {});
       return (
        p.each(e.match(L) || [], function (e, n) {
         t[n] = !0;
        }),
        t
       );
      })(e)
    : p.extend({}, e);
  var t,
   n,
   r,
   i,
   o,
   a,
   s = [],
   l = !e.once && [],
   u = function (d) {
    for (
     n = e.memory && d, r = !0, o = a || 0, a = 0, i = s.length, t = !0;
     s && i > o;
     o++
    )
     if (!1 === s[o].apply(d[0], d[1]) && e.stopOnFalse) {
      n = !1;
      break;
     }
    (t = !1), s && (l ? l.length && u(l.shift()) : n ? (s = []) : c.disable());
   },
   c = {
    add: function () {
     if (s) {
      var r = s.length;
      !(function t(n) {
       p.each(n, function (n, r) {
        var i = p.type(r);
        "function" === i
         ? (e.unique && c.has(r)) || s.push(r)
         : r && r.length && "string" !== i && t(r);
       });
      })(arguments),
       t ? (i = s.length) : n && ((a = r), u(n));
     }
     return this;
    },
    remove: function () {
     return (
      s &&
       p.each(arguments, function (e, n) {
        for (var r; (r = p.inArray(n, s, r)) > -1; )
         s.splice(r, 1), t && (i >= r && i--, o >= r && o--);
       }),
      this
     );
    },
    has: function (e) {
     return e ? p.inArray(e, s) > -1 : !(!s || !s.length);
    },
    empty: function () {
     return (s = []), (i = 0), this;
    },
    disable: function () {
     return (s = l = n = void 0), this;
    },
    disabled: function () {
     return !s;
    },
    lock: function () {
     return (l = void 0), n || c.disable(), this;
    },
    locked: function () {
     return !l;
    },
    fireWith: function (e, n) {
     return (
      !s ||
       (r && !l) ||
       ((n = [e, (n = n || []).slice ? n.slice() : n]), t ? l.push(n) : u(n)),
      this
     );
    },
    fire: function () {
     return c.fireWith(this, arguments), this;
    },
    fired: function () {
     return !!r;
    },
   };
  return c;
 }),
  p.extend({
   Deferred: function (e) {
    var t = [
      ["resolve", "done", p.Callbacks("once memory"), "resolved"],
      ["reject", "fail", p.Callbacks("once memory"), "rejected"],
      ["notify", "progress", p.Callbacks("memory")],
     ],
     n = "pending",
     r = {
      state: function () {
       return n;
      },
      always: function () {
       return i.done(arguments).fail(arguments), this;
      },
      then: function () {
       var e = arguments;
       return p
        .Deferred(function (n) {
         p.each(t, function (t, o) {
          var a = p.isFunction(e[t]) && e[t];
          i[o[1]](function () {
           var e = a && a.apply(this, arguments);
           e && p.isFunction(e.promise)
            ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify)
            : n[o[0] + "With"](
               this === r ? n.promise() : this,
               a ? [e] : arguments
              );
          });
         }),
          (e = null);
        })
        .promise();
      },
      promise: function (e) {
       return null != e ? p.extend(e, r) : r;
      },
     },
     i = {};
    return (
     (r.pipe = r.then),
     p.each(t, function (e, o) {
      var a = o[2],
       s = o[3];
      (r[o[1]] = a.add),
       s &&
        a.add(
         function () {
          n = s;
         },
         t[1 ^ e][2].disable,
         t[2][2].lock
        ),
       (i[o[0]] = function () {
        return i[o[0] + "With"](this === i ? r : this, arguments), this;
       }),
       (i[o[0] + "With"] = a.fireWith);
     }),
     r.promise(i),
     e && e.call(i, i),
     i
    );
   },
   when: function (e) {
    var t,
     n,
     i,
     o = 0,
     a = r.call(arguments),
     s = a.length,
     l = 1 !== s || (e && p.isFunction(e.promise)) ? s : 0,
     u = 1 === l ? e : p.Deferred(),
     c = function (e, n, i) {
      return function (o) {
       (n[e] = this),
        (i[e] = arguments.length > 1 ? r.call(arguments) : o),
        i === t ? u.notifyWith(n, i) : --l || u.resolveWith(n, i);
      };
     };
    if (s > 1)
     for (t = new Array(s), n = new Array(s), i = new Array(s); s > o; o++)
      a[o] && p.isFunction(a[o].promise)
       ? a[o].promise().done(c(o, i, a)).fail(u.reject).progress(c(o, n, t))
       : --l;
    return l || u.resolveWith(i, a), u.promise();
   },
  }),
  (p.fn.ready = function (e) {
   return p.ready.promise().done(e), this;
  }),
  p.extend({
   isReady: !1,
   readyWait: 1,
   holdReady: function (e) {
    e ? p.readyWait++ : p.ready(!0);
   },
   ready: function (e) {
    if (!0 === e ? !--p.readyWait : !p.isReady) {
     if (!E.body) return setTimeout(p.ready);
     (p.isReady = !0),
      (!0 !== e && --p.readyWait > 0) ||
       (j.resolveWith(E, [p]),
       p.fn.trigger && p(E).trigger("ready").off("ready"));
    }
   },
  }),
  (p.ready.promise = function (t) {
   if (!j)
    if (((j = p.Deferred()), "complete" === E.readyState)) setTimeout(p.ready);
    else if (E.addEventListener)
     E.addEventListener("DOMContentLoaded", _, !1),
      e.addEventListener("load", _, !1);
    else {
     E.attachEvent("onreadystatechange", _), e.attachEvent("onload", _);
     var n = !1;
     try {
      n = null == e.frameElement && E.documentElement;
     } catch (e) {}
     n &&
      n.doScroll &&
      (function e() {
       if (!p.isReady) {
        try {
         n.doScroll("left");
        } catch (t) {
         return setTimeout(e, 50);
        }
        q(), p.ready();
       }
      })();
    }
   return j.promise(t);
  });
 var M,
  F = "undefined";
 for (M in p(d)) break;
 (d.ownLast = "0" !== M),
  (d.inlineBlockNeedsLayout = !1),
  p(function () {
   var e,
    t,
    n = E.getElementsByTagName("body")[0];
   n &&
    (((e = E.createElement("div")).style.cssText =
     "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
    (t = E.createElement("div")),
    n.appendChild(e).appendChild(t),
    typeof t.style.zoom !== F &&
     ((t.style.cssText =
      "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1"),
     (d.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (n.style.zoom = 1)),
    n.removeChild(e),
    (e = t = null));
  }),
  (function () {
   var e = E.createElement("div");
   if (null == d.deleteExpando) {
    d.deleteExpando = !0;
    try {
     delete e.test;
    } catch (e) {
     d.deleteExpando = !1;
    }
   }
   e = null;
  })(),
  (p.acceptData = function (e) {
   var t = p.noData[(e.nodeName + " ").toLowerCase()],
    n = +e.nodeType || 1;
   return (
    (1 === n || 9 === n) &&
    (!t || (!0 !== t && e.getAttribute("classid") === t))
   );
  });
 var O = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
  B = /([A-Z])/g;
 function P(e, t, n) {
  if (void 0 === n && 1 === e.nodeType) {
   var r = "data-" + t.replace(B, "-$1").toLowerCase();
   if ("string" == typeof (n = e.getAttribute(r))) {
    try {
     n =
      "true" === n ||
      ("false" !== n &&
       ("null" === n
        ? null
        : +n + "" === n
        ? +n
        : O.test(n)
        ? p.parseJSON(n)
        : n));
    } catch (e) {}
    p.data(e, t, n);
   } else n = void 0;
  }
  return n;
 }
 function R(e) {
  var t;
  for (t in e)
   if (("data" !== t || !p.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
  return !0;
 }
 function W(e, t, r, i) {
  if (p.acceptData(e)) {
   var o,
    a,
    s = p.expando,
    l = e.nodeType,
    u = l ? p.cache : e,
    c = l ? e[s] : e[s] && s;
   if ((c && u[c] && (i || u[c].data)) || void 0 !== r || "string" != typeof t)
    return (
     c || (c = l ? (e[s] = n.pop() || p.guid++) : s),
     u[c] || (u[c] = l ? {} : { toJSON: p.noop }),
     ("object" == typeof t || "function" == typeof t) &&
      (i ? (u[c] = p.extend(u[c], t)) : (u[c].data = p.extend(u[c].data, t))),
     (a = u[c]),
     i || (a.data || (a.data = {}), (a = a.data)),
     void 0 !== r && (a[p.camelCase(t)] = r),
     "string" == typeof t
      ? null == (o = a[t]) && (o = a[p.camelCase(t)])
      : (o = a),
     o
    );
  }
 }
 function $(e, t, n) {
  if (p.acceptData(e)) {
   var r,
    i,
    o = e.nodeType,
    a = o ? p.cache : e,
    s = o ? e[p.expando] : p.expando;
   if (a[s]) {
    if (t && (r = n ? a[s] : a[s].data)) {
     p.isArray(t)
      ? (t = t.concat(p.map(t, p.camelCase)))
      : t in r
      ? (t = [t])
      : (t = (t = p.camelCase(t)) in r ? [t] : t.split(" ")),
      (i = t.length);
     for (; i--; ) delete r[t[i]];
     if (n ? !R(r) : !p.isEmptyObject(r)) return;
    }
    (n || (delete a[s].data, R(a[s]))) &&
     (o
      ? p.cleanData([e], !0)
      : d.deleteExpando || a != a.window
      ? delete a[s]
      : (a[s] = null));
   }
  }
 }
 p.extend({
  cache: {},
  noData: {
   "applet ": !0,
   "embed ": !0,
   "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
  },
  hasData: function (e) {
   return !!(e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando]) && !R(e);
  },
  data: function (e, t, n) {
   return W(e, t, n);
  },
  removeData: function (e, t) {
   return $(e, t);
  },
  _data: function (e, t, n) {
   return W(e, t, n, !0);
  },
  _removeData: function (e, t) {
   return $(e, t, !0);
  },
 }),
  p.fn.extend({
   data: function (e, t) {
    var n,
     r,
     i,
     o = this[0],
     a = o && o.attributes;
    if (void 0 === e) {
     if (
      this.length &&
      ((i = p.data(o)), 1 === o.nodeType && !p._data(o, "parsedAttrs"))
     ) {
      for (n = a.length; n--; )
       0 === (r = a[n].name).indexOf("data-") &&
        P(o, (r = p.camelCase(r.slice(5))), i[r]);
      p._data(o, "parsedAttrs", !0);
     }
     return i;
    }
    return "object" == typeof e
     ? this.each(function () {
        p.data(this, e);
       })
     : arguments.length > 1
     ? this.each(function () {
        p.data(this, e, t);
       })
     : o
     ? P(o, e, p.data(o, e))
     : void 0;
   },
   removeData: function (e) {
    return this.each(function () {
     p.removeData(this, e);
    });
   },
  }),
  p.extend({
   queue: function (e, t, n) {
    var r;
    return e
     ? ((t = (t || "fx") + "queue"),
       (r = p._data(e, t)),
       n &&
        (!r || p.isArray(n) ? (r = p._data(e, t, p.makeArray(n))) : r.push(n)),
       r || [])
     : void 0;
   },
   dequeue: function (e, t) {
    t = t || "fx";
    var n = p.queue(e, t),
     r = n.length,
     i = n.shift(),
     o = p._queueHooks(e, t);
    "inprogress" === i && ((i = n.shift()), r--),
     i &&
      ("fx" === t && n.unshift("inprogress"),
      delete o.stop,
      i.call(
       e,
       function () {
        p.dequeue(e, t);
       },
       o
      )),
     !r && o && o.empty.fire();
   },
   _queueHooks: function (e, t) {
    var n = t + "queueHooks";
    return (
     p._data(e, n) ||
     p._data(e, n, {
      empty: p.Callbacks("once memory").add(function () {
       p._removeData(e, t + "queue"), p._removeData(e, n);
      }),
     })
    );
   },
  }),
  p.fn.extend({
   queue: function (e, t) {
    var n = 2;
    return (
     "string" != typeof e && ((t = e), (e = "fx"), n--),
     arguments.length < n
      ? p.queue(this[0], e)
      : void 0 === t
      ? this
      : this.each(function () {
         var n = p.queue(this, e, t);
         p._queueHooks(this, e),
          "fx" === e && "inprogress" !== n[0] && p.dequeue(this, e);
        })
    );
   },
   dequeue: function (e) {
    return this.each(function () {
     p.dequeue(this, e);
    });
   },
   clearQueue: function (e) {
    return this.queue(e || "fx", []);
   },
   promise: function (e, t) {
    var n,
     r = 1,
     i = p.Deferred(),
     o = this,
     a = this.length,
     s = function () {
      --r || i.resolveWith(o, [o]);
     };
    for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; )
     (n = p._data(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
    return s(), i.promise(t);
   },
  });
 var z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
  I = ["Top", "Right", "Bottom", "Left"],
  X = function (e, t) {
   return (
    (e = t || e),
    "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e)
   );
  },
  U = (p.access = function (e, t, n, r, i, o, a) {
   var s = 0,
    l = e.length,
    u = null == n;
   if ("object" === p.type(n))
    for (s in ((i = !0), n)) p.access(e, t, s, n[s], !0, o, a);
   else if (
    void 0 !== r &&
    ((i = !0),
    p.isFunction(r) || (a = !0),
    u &&
     (a
      ? (t.call(e, r), (t = null))
      : ((u = t),
        (t = function (e, t, n) {
         return u.call(p(e), n);
        }))),
    t)
   )
    for (; l > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
   return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
  }),
  V = /^(?:checkbox|radio)$/i;
 !(function () {
  var e = E.createDocumentFragment(),
   t = E.createElement("div"),
   n = E.createElement("input");
  if (
   (t.setAttribute("className", "t"),
   (t.innerHTML = "  <link/><table></table><a href='/a'>a</a>"),
   (d.leadingWhitespace = 3 === t.firstChild.nodeType),
   (d.tbody = !t.getElementsByTagName("tbody").length),
   (d.htmlSerialize = !!t.getElementsByTagName("link").length),
   (d.html5Clone =
    "<:nav></:nav>" !== E.createElement("nav").cloneNode(!0).outerHTML),
   (n.type = "checkbox"),
   (n.checked = !0),
   e.appendChild(n),
   (d.appendChecked = n.checked),
   (t.innerHTML = "<textarea>x</textarea>"),
   (d.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
   e.appendChild(t),
   (t.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
   (d.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
   (d.noCloneEvent = !0),
   t.attachEvent &&
    (t.attachEvent("onclick", function () {
     d.noCloneEvent = !1;
    }),
    t.cloneNode(!0).click()),
   null == d.deleteExpando)
  ) {
   d.deleteExpando = !0;
   try {
    delete t.test;
   } catch (e) {
    d.deleteExpando = !1;
   }
  }
  e = t = n = null;
 })(),
  (function () {
   var t,
    n,
    r = E.createElement("div");
   for (t in { submit: !0, change: !0, focusin: !0 })
    (n = "on" + t),
     (d[t + "Bubbles"] = n in e) ||
      (r.setAttribute(n, "t"),
      (d[t + "Bubbles"] = !1 === r.attributes[n].expando));
   r = null;
  })();
 var J = /^(?:input|select|textarea)$/i,
  Y = /^key/,
  G = /^(?:mouse|contextmenu)|click/,
  Q = /^(?:focusinfocus|focusoutblur)$/,
  K = /^([^.]*)(?:\.(.+)|)$/;
 function Z() {
  return !0;
 }
 function ee() {
  return !1;
 }
 function te() {
  try {
   return E.activeElement;
  } catch (e) {}
 }
 function ne(e) {
  var t = re.split("|"),
   n = e.createDocumentFragment();
  if (n.createElement) for (; t.length; ) n.createElement(t.pop());
  return n;
 }
 (p.event = {
  global: {},
  add: function (e, t, n, r, i) {
   var o,
    a,
    s,
    l,
    u,
    c,
    d,
    f,
    h,
    m,
    g,
    v = p._data(e);
   if (v) {
    for (
     n.handler && ((n = (l = n).handler), (i = l.selector)),
      n.guid || (n.guid = p.guid++),
      (a = v.events) || (a = v.events = {}),
      (c = v.handle) ||
       ((c = v.handle =
        function (e) {
         return typeof p === F || (e && p.event.triggered === e.type)
          ? void 0
          : p.event.dispatch.apply(c.elem, arguments);
        }).elem = e),
      s = (t = (t || "").match(L) || [""]).length;
     s--;

    )
     (h = g = (o = K.exec(t[s]) || [])[1]),
      (m = (o[2] || "").split(".").sort()),
      h &&
       ((u = p.event.special[h] || {}),
       (h = (i ? u.delegateType : u.bindType) || h),
       (u = p.event.special[h] || {}),
       (d = p.extend(
        {
         type: h,
         origType: g,
         data: r,
         handler: n,
         guid: n.guid,
         selector: i,
         needsContext: i && p.expr.match.needsContext.test(i),
         namespace: m.join("."),
        },
        l
       )),
       (f = a[h]) ||
        (((f = a[h] = []).delegateCount = 0),
        (u.setup && !1 !== u.setup.call(e, r, m, c)) ||
         (e.addEventListener
          ? e.addEventListener(h, c, !1)
          : e.attachEvent && e.attachEvent("on" + h, c))),
       u.add &&
        (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)),
       i ? f.splice(f.delegateCount++, 0, d) : f.push(d),
       (p.event.global[h] = !0));
    e = null;
   }
  },
  remove: function (e, t, n, r, i) {
   var o,
    a,
    s,
    l,
    u,
    c,
    d,
    f,
    h,
    m,
    g,
    v = p.hasData(e) && p._data(e);
   if (v && (c = v.events)) {
    for (u = (t = (t || "").match(L) || [""]).length; u--; )
     if (
      ((h = g = (s = K.exec(t[u]) || [])[1]),
      (m = (s[2] || "").split(".").sort()),
      h)
     ) {
      for (
       d = p.event.special[h] || {},
        f = c[(h = (r ? d.delegateType : d.bindType) || h)] || [],
        s =
         s[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"),
        l = o = f.length;
       o--;

      )
       (a = f[o]),
        (!i && g !== a.origType) ||
         (n && n.guid !== a.guid) ||
         (s && !s.test(a.namespace)) ||
         (r && r !== a.selector && ("**" !== r || !a.selector)) ||
         (f.splice(o, 1),
         a.selector && f.delegateCount--,
         d.remove && d.remove.call(e, a));
      l &&
       !f.length &&
       ((d.teardown && !1 !== d.teardown.call(e, m, v.handle)) ||
        p.removeEvent(e, h, v.handle),
       delete c[h]);
     } else for (h in c) p.event.remove(e, h + t[u], n, r, !0);
    p.isEmptyObject(c) && (delete v.handle, p._removeData(e, "events"));
   }
  },
  trigger: function (t, n, r, i) {
   var o,
    a,
    s,
    l,
    c,
    d,
    f,
    h = [r || E],
    m = u.call(t, "type") ? t.type : t,
    g = u.call(t, "namespace") ? t.namespace.split(".") : [];
   if (
    ((s = d = r = r || E),
    3 !== r.nodeType &&
     8 !== r.nodeType &&
     !Q.test(m + p.event.triggered) &&
     (m.indexOf(".") >= 0 && ((g = m.split(".")), (m = g.shift()), g.sort()),
     (a = m.indexOf(":") < 0 && "on" + m),
     ((t = t[p.expando]
      ? t
      : new p.Event(m, "object" == typeof t && t)).isTrigger = i ? 2 : 3),
     (t.namespace = g.join(".")),
     (t.namespace_re = t.namespace
      ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)")
      : null),
     (t.result = void 0),
     t.target || (t.target = r),
     (n = null == n ? [t] : p.makeArray(n, [t])),
     (c = p.event.special[m] || {}),
     i || !c.trigger || !1 !== c.trigger.apply(r, n)))
   ) {
    if (!i && !c.noBubble && !p.isWindow(r)) {
     for (
      l = c.delegateType || m, Q.test(l + m) || (s = s.parentNode);
      s;
      s = s.parentNode
     )
      h.push(s), (d = s);
     d === (r.ownerDocument || E) &&
      h.push(d.defaultView || d.parentWindow || e);
    }
    for (f = 0; (s = h[f++]) && !t.isPropagationStopped(); )
     (t.type = f > 1 ? l : c.bindType || m),
      (o = (p._data(s, "events") || {})[t.type] && p._data(s, "handle")) &&
       o.apply(s, n),
      (o = a && s[a]) &&
       o.apply &&
       p.acceptData(s) &&
       ((t.result = o.apply(s, n)), !1 === t.result && t.preventDefault());
    if (
     ((t.type = m),
     !i &&
      !t.isDefaultPrevented() &&
      (!c._default || !1 === c._default.apply(h.pop(), n)) &&
      p.acceptData(r) &&
      a &&
      r[m] &&
      !p.isWindow(r))
    ) {
     (d = r[a]) && (r[a] = null), (p.event.triggered = m);
     try {
      r[m]();
     } catch (e) {}
     (p.event.triggered = void 0), d && (r[a] = d);
    }
    return t.result;
   }
  },
  dispatch: function (e) {
   e = p.event.fix(e);
   var t,
    n,
    i,
    o,
    a,
    s = [],
    l = r.call(arguments),
    u = (p._data(this, "events") || {})[e.type] || [],
    c = p.event.special[e.type] || {};
   if (
    ((l[0] = e),
    (e.delegateTarget = this),
    !c.preDispatch || !1 !== c.preDispatch.call(this, e))
   ) {
    for (
     s = p.event.handlers.call(this, e, u), t = 0;
     (o = s[t++]) && !e.isPropagationStopped();

    )
     for (
      e.currentTarget = o.elem, a = 0;
      (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();

     )
      (!e.namespace_re || e.namespace_re.test(i.namespace)) &&
       ((e.handleObj = i),
       (e.data = i.data),
       void 0 !==
        (n = ((p.event.special[i.origType] || {}).handle || i.handler).apply(
         o.elem,
         l
        )) &&
        !1 === (e.result = n) &&
        (e.preventDefault(), e.stopPropagation()));
    return c.postDispatch && c.postDispatch.call(this, e), e.result;
   }
  },
  handlers: function (e, t) {
   var n,
    r,
    i,
    o,
    a = [],
    s = t.delegateCount,
    l = e.target;
   if (s && l.nodeType && (!e.button || "click" !== e.type))
    for (; l != this; l = l.parentNode || this)
     if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
      for (i = [], o = 0; s > o; o++)
       void 0 === i[(n = (r = t[o]).selector + " ")] &&
        (i[n] = r.needsContext
         ? p(n, this).index(l) >= 0
         : p.find(n, this, null, [l]).length),
        i[n] && i.push(r);
      i.length && a.push({ elem: l, handlers: i });
     }
   return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
  },
  fix: function (e) {
   if (e[p.expando]) return e;
   var t,
    n,
    r,
    i = e.type,
    o = e,
    a = this.fixHooks[i];
   for (
    a ||
     (this.fixHooks[i] = a =
      G.test(i) ? this.mouseHooks : Y.test(i) ? this.keyHooks : {}),
     r = a.props ? this.props.concat(a.props) : this.props,
     e = new p.Event(o),
     t = r.length;
    t--;

   )
    e[(n = r[t])] = o[n];
   return (
    e.target || (e.target = o.srcElement || E),
    3 === e.target.nodeType && (e.target = e.target.parentNode),
    (e.metaKey = !!e.metaKey),
    a.filter ? a.filter(e, o) : e
   );
  },
  props:
   "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
    " "
   ),
  fixHooks: {},
  keyHooks: {
   props: "char charCode key keyCode".split(" "),
   filter: function (e, t) {
    return (
     null == e.which &&
      (e.which = null != t.charCode ? t.charCode : t.keyCode),
     e
    );
   },
  },
  mouseHooks: {
   props:
    "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
     " "
    ),
   filter: function (e, t) {
    var n,
     r,
     i,
     o = t.button,
     a = t.fromElement;
    return (
     null == e.pageX &&
      null != t.clientX &&
      ((i = (r = e.target.ownerDocument || E).documentElement),
      (n = r.body),
      (e.pageX =
       t.clientX +
       ((i && i.scrollLeft) || (n && n.scrollLeft) || 0) -
       ((i && i.clientLeft) || (n && n.clientLeft) || 0)),
      (e.pageY =
       t.clientY +
       ((i && i.scrollTop) || (n && n.scrollTop) || 0) -
       ((i && i.clientTop) || (n && n.clientTop) || 0))),
     !e.relatedTarget &&
      a &&
      (e.relatedTarget = a === e.target ? t.toElement : a),
     e.which ||
      void 0 === o ||
      (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
     e
    );
   },
  },
  special: {
   load: { noBubble: !0 },
   focus: {
    trigger: function () {
     if (this !== te() && this.focus)
      try {
       return this.focus(), !1;
      } catch (e) {}
    },
    delegateType: "focusin",
   },
   blur: {
    trigger: function () {
     return this === te() && this.blur ? (this.blur(), !1) : void 0;
    },
    delegateType: "focusout",
   },
   click: {
    trigger: function () {
     return p.nodeName(this, "input") && "checkbox" === this.type && this.click
      ? (this.click(), !1)
      : void 0;
    },
    _default: function (e) {
     return p.nodeName(e.target, "a");
    },
   },
   beforeunload: {
    postDispatch: function (e) {
     void 0 !== e.result && (e.originalEvent.returnValue = e.result);
    },
   },
  },
  simulate: function (e, t, n, r) {
   var i = p.extend(new p.Event(), n, {
    type: e,
    isSimulated: !0,
    originalEvent: {},
   });
   r ? p.event.trigger(i, null, t) : p.event.dispatch.call(t, i),
    i.isDefaultPrevented() && n.preventDefault();
  },
 }),
  (p.removeEvent = E.removeEventListener
   ? function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n, !1);
     }
   : function (e, t, n) {
      var r = "on" + t;
      e.detachEvent &&
       (typeof e[r] === F && (e[r] = null), e.detachEvent(r, n));
     }),
  (p.Event = function (e, t) {
   return this instanceof p.Event
    ? (e && e.type
       ? ((this.originalEvent = e),
         (this.type = e.type),
         (this.isDefaultPrevented =
          e.defaultPrevented ||
          (void 0 === e.defaultPrevented &&
           (!1 === e.returnValue ||
            (e.getPreventDefault && e.getPreventDefault())))
           ? Z
           : ee))
       : (this.type = e),
      t && p.extend(this, t),
      (this.timeStamp = (e && e.timeStamp) || p.now()),
      void (this[p.expando] = !0))
    : new p.Event(e, t);
  }),
  (p.Event.prototype = {
   isDefaultPrevented: ee,
   isPropagationStopped: ee,
   isImmediatePropagationStopped: ee,
   preventDefault: function () {
    var e = this.originalEvent;
    (this.isDefaultPrevented = Z),
     e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
   },
   stopPropagation: function () {
    var e = this.originalEvent;
    (this.isPropagationStopped = Z),
     e && (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
   },
   stopImmediatePropagation: function () {
    (this.isImmediatePropagationStopped = Z), this.stopPropagation();
   },
  }),
  p.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (e, t) {
   p.event.special[e] = {
    delegateType: t,
    bindType: t,
    handle: function (e) {
     var n,
      r = e.relatedTarget,
      i = e.handleObj;
     return (
      (!r || (r !== this && !p.contains(this, r))) &&
       ((e.type = i.origType),
       (n = i.handler.apply(this, arguments)),
       (e.type = t)),
      n
     );
    },
   };
  }),
  d.submitBubbles ||
   (p.event.special.submit = {
    setup: function () {
     return (
      !p.nodeName(this, "form") &&
      void p.event.add(this, "click._submit keypress._submit", function (e) {
       var t = e.target,
        n =
         p.nodeName(t, "input") || p.nodeName(t, "button") ? t.form : void 0;
       n &&
        !p._data(n, "submitBubbles") &&
        (p.event.add(n, "submit._submit", function (e) {
         e._submit_bubble = !0;
        }),
        p._data(n, "submitBubbles", !0));
      })
     );
    },
    postDispatch: function (e) {
     e._submit_bubble &&
      (delete e._submit_bubble,
      this.parentNode &&
       !e.isTrigger &&
       p.event.simulate("submit", this.parentNode, e, !0));
    },
    teardown: function () {
     return !p.nodeName(this, "form") && void p.event.remove(this, "._submit");
    },
   }),
  d.changeBubbles ||
   (p.event.special.change = {
    setup: function () {
     return J.test(this.nodeName)
      ? (("checkbox" === this.type || "radio" === this.type) &&
         (p.event.add(this, "propertychange._change", function (e) {
          "checked" === e.originalEvent.propertyName &&
           (this._just_changed = !0);
         }),
         p.event.add(this, "click._change", function (e) {
          this._just_changed && !e.isTrigger && (this._just_changed = !1),
           p.event.simulate("change", this, e, !0);
         })),
        !1)
      : void p.event.add(this, "beforeactivate._change", function (e) {
         var t = e.target;
         J.test(t.nodeName) &&
          !p._data(t, "changeBubbles") &&
          (p.event.add(t, "change._change", function (e) {
           !this.parentNode ||
            e.isSimulated ||
            e.isTrigger ||
            p.event.simulate("change", this.parentNode, e, !0);
          }),
          p._data(t, "changeBubbles", !0));
        });
    },
    handle: function (e) {
     var t = e.target;
     return this !== t ||
      e.isSimulated ||
      e.isTrigger ||
      ("radio" !== t.type && "checkbox" !== t.type)
      ? e.handleObj.handler.apply(this, arguments)
      : void 0;
    },
    teardown: function () {
     return p.event.remove(this, "._change"), !J.test(this.nodeName);
    },
   }),
  d.focusinBubbles ||
   p.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function (e) {
     p.event.simulate(t, e.target, p.event.fix(e), !0);
    };
    p.event.special[t] = {
     setup: function () {
      var r = this.ownerDocument || this,
       i = p._data(r, t);
      i || r.addEventListener(e, n, !0), p._data(r, t, (i || 0) + 1);
     },
     teardown: function () {
      var r = this.ownerDocument || this,
       i = p._data(r, t) - 1;
      i
       ? p._data(r, t, i)
       : (r.removeEventListener(e, n, !0), p._removeData(r, t));
     },
    };
   }),
  p.fn.extend({
   on: function (e, t, n, r, i) {
    var o, a;
    if ("object" == typeof e) {
     for (o in ("string" != typeof t && ((n = n || t), (t = void 0)), e))
      this.on(o, t, n, e[o], i);
     return this;
    }
    if (
     (null == n && null == r
      ? ((r = t), (n = t = void 0))
      : null == r &&
        ("string" == typeof t
         ? ((r = n), (n = void 0))
         : ((r = n), (n = t), (t = void 0))),
     !1 === r)
    )
     r = ee;
    else if (!r) return this;
    return (
     1 === i &&
      ((a = r),
      ((r = function (e) {
       return p().off(e), a.apply(this, arguments);
      }).guid = a.guid || (a.guid = p.guid++))),
     this.each(function () {
      p.event.add(this, e, r, n, t);
     })
    );
   },
   one: function (e, t, n, r) {
    return this.on(e, t, n, r, 1);
   },
   off: function (e, t, n) {
    var r, i;
    if (e && e.preventDefault && e.handleObj)
     return (
      (r = e.handleObj),
      p(e.delegateTarget).off(
       r.namespace ? r.origType + "." + r.namespace : r.origType,
       r.selector,
       r.handler
      ),
      this
     );
    if ("object" == typeof e) {
     for (i in e) this.off(i, t, e[i]);
     return this;
    }
    return (
     (!1 === t || "function" == typeof t) && ((n = t), (t = void 0)),
     !1 === n && (n = ee),
     this.each(function () {
      p.event.remove(this, e, n, t);
     })
    );
   },
   trigger: function (e, t) {
    return this.each(function () {
     p.event.trigger(e, t, this);
    });
   },
   triggerHandler: function (e, t) {
    var n = this[0];
    return n ? p.event.trigger(e, t, n, !0) : void 0;
   },
  });
 var re =
   "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
  ie = / jQuery\d+="(?:null|\d+)"/g,
  oe = new RegExp("<(?:" + re + ")[\\s/>]", "i"),
  ae = /^\s+/,
  se =
   /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
  le = /<([\w:]+)/,
  ue = /<tbody/i,
  ce = /<|&#?\w+;/,
  de = /<(?:script|style|link)/i,
  fe = /checked\s*(?:[^=]|=\s*.checked.)/i,
  pe = /^$|\/(?:java|ecma)script/i,
  he = /^true\/(.*)/,
  me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
  ge = {
   option: [1, "<select multiple='multiple'>", "</select>"],
   legend: [1, "<fieldset>", "</fieldset>"],
   area: [1, "<map>", "</map>"],
   param: [1, "<object>", "</object>"],
   thead: [1, "<table>", "</table>"],
   tr: [2, "<table><tbody>", "</tbody></table>"],
   col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
   td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
   _default: d.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
  },
  ve = ne(E).appendChild(E.createElement("div"));
 function ye(e, t) {
  var n,
   r,
   i = 0,
   o =
    typeof e.getElementsByTagName !== F
     ? e.getElementsByTagName(t || "*")
     : typeof e.querySelectorAll !== F
     ? e.querySelectorAll(t || "*")
     : void 0;
  if (!o)
   for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)
    !t || p.nodeName(r, t) ? o.push(r) : p.merge(o, ye(r, t));
  return void 0 === t || (t && p.nodeName(e, t)) ? p.merge([e], o) : o;
 }
 function be(e) {
  V.test(e.type) && (e.defaultChecked = e.checked);
 }
 function xe(e, t) {
  return p.nodeName(e, "table") &&
   p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
   ? e.getElementsByTagName("tbody")[0] ||
      e.appendChild(e.ownerDocument.createElement("tbody"))
   : e;
 }
 function we(e) {
  return (e.type = (null !== p.find.attr(e, "type")) + "/" + e.type), e;
 }
 function Te(e) {
  var t = he.exec(e.type);
  return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
 }
 function Ce(e, t) {
  for (var n, r = 0; null != (n = e[r]); r++)
   p._data(n, "globalEval", !t || p._data(t[r], "globalEval"));
 }
 function Ne(e, t) {
  if (1 === t.nodeType && p.hasData(e)) {
   var n,
    r,
    i,
    o = p._data(e),
    a = p._data(t, o),
    s = o.events;
   if (s)
    for (n in (delete a.handle, (a.events = {}), s))
     for (r = 0, i = s[n].length; i > r; r++) p.event.add(t, n, s[n][r]);
   a.data && (a.data = p.extend({}, a.data));
  }
 }
 function Ee(e, t) {
  var n, r, i;
  if (1 === t.nodeType) {
   if (((n = t.nodeName.toLowerCase()), !d.noCloneEvent && t[p.expando])) {
    for (r in (i = p._data(t)).events) p.removeEvent(t, r, i.handle);
    t.removeAttribute(p.expando);
   }
   "script" === n && t.text !== e.text
    ? ((we(t).text = e.text), Te(t))
    : "object" === n
    ? (t.parentNode && (t.outerHTML = e.outerHTML),
      d.html5Clone &&
       e.innerHTML &&
       !p.trim(t.innerHTML) &&
       (t.innerHTML = e.innerHTML))
    : "input" === n && V.test(e.type)
    ? ((t.defaultChecked = t.checked = e.checked),
      t.value !== e.value && (t.value = e.value))
    : "option" === n
    ? (t.defaultSelected = t.selected = e.defaultSelected)
    : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
  }
 }
 (ge.optgroup = ge.option),
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
  (ge.th = ge.td),
  p.extend({
   clone: function (e, t, n) {
    var r,
     i,
     o,
     a,
     s,
     l = p.contains(e.ownerDocument, e);
    if (
     (d.html5Clone || p.isXMLDoc(e) || !oe.test("<" + e.nodeName + ">")
      ? (o = e.cloneNode(!0))
      : ((ve.innerHTML = e.outerHTML), ve.removeChild((o = ve.firstChild))),
     !(
      (d.noCloneEvent && d.noCloneChecked) ||
      (1 !== e.nodeType && 11 !== e.nodeType) ||
      p.isXMLDoc(e)
     ))
    )
     for (r = ye(o), s = ye(e), a = 0; null != (i = s[a]); ++a)
      r[a] && Ee(i, r[a]);
    if (t)
     if (n)
      for (s = s || ye(e), r = r || ye(o), a = 0; null != (i = s[a]); a++)
       Ne(i, r[a]);
     else Ne(e, o);
    return (
     (r = ye(o, "script")).length > 0 && Ce(r, !l && ye(e, "script")),
     (r = s = i = null),
     o
    );
   },
   buildFragment: function (e, t, n, r) {
    for (
     var i, o, a, s, l, u, c, f = e.length, h = ne(t), m = [], g = 0;
     f > g;
     g++
    )
     if ((o = e[g]) || 0 === o)
      if ("object" === p.type(o)) p.merge(m, o.nodeType ? [o] : o);
      else if (ce.test(o)) {
       for (
        s = s || h.appendChild(t.createElement("div")),
         l = (le.exec(o) || ["", ""])[1].toLowerCase(),
         c = ge[l] || ge._default,
         s.innerHTML = c[1] + o.replace(se, "<$1></$2>") + c[2],
         i = c[0];
        i--;

       )
        s = s.lastChild;
       if (
        (!d.leadingWhitespace &&
         ae.test(o) &&
         m.push(t.createTextNode(ae.exec(o)[0])),
        !d.tbody)
       )
        for (
         i =
          (o =
           "table" !== l || ue.test(o)
            ? "<table>" !== c[1] || ue.test(o)
              ? 0
              : s
            : s.firstChild) && o.childNodes.length;
         i--;

        )
         p.nodeName((u = o.childNodes[i]), "tbody") &&
          !u.childNodes.length &&
          o.removeChild(u);
       for (p.merge(m, s.childNodes), s.textContent = ""; s.firstChild; )
        s.removeChild(s.firstChild);
       s = h.lastChild;
      } else m.push(t.createTextNode(o));
    for (
     s && h.removeChild(s),
      d.appendChecked || p.grep(ye(m, "input"), be),
      g = 0;
     (o = m[g++]);

    )
     if (
      (!r || -1 === p.inArray(o, r)) &&
      ((a = p.contains(o.ownerDocument, o)),
      (s = ye(h.appendChild(o), "script")),
      a && Ce(s),
      n)
     )
      for (i = 0; (o = s[i++]); ) pe.test(o.type || "") && n.push(o);
    return (s = null), h;
   },
   cleanData: function (e, t) {
    for (
     var r,
      i,
      o,
      a,
      s = 0,
      l = p.expando,
      u = p.cache,
      c = d.deleteExpando,
      f = p.event.special;
     null != (r = e[s]);
     s++
    )
     if ((t || p.acceptData(r)) && (a = (o = r[l]) && u[o])) {
      if (a.events)
       for (i in a.events)
        f[i] ? p.event.remove(r, i) : p.removeEvent(r, i, a.handle);
      u[o] &&
       (delete u[o],
       c
        ? delete r[l]
        : typeof r.removeAttribute !== F
        ? r.removeAttribute(l)
        : (r[l] = null),
       n.push(o));
     }
   },
  }),
  p.fn.extend({
   text: function (e) {
    return U(
     this,
     function (e) {
      return void 0 === e
       ? p.text(this)
       : this.empty().append(
          ((this[0] && this[0].ownerDocument) || E).createTextNode(e)
         );
     },
     null,
     e,
     arguments.length
    );
   },
   append: function () {
    return this.domManip(arguments, function (e) {
     (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
      xe(this, e).appendChild(e);
    });
   },
   prepend: function () {
    return this.domManip(arguments, function (e) {
     if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
      var t = xe(this, e);
      t.insertBefore(e, t.firstChild);
     }
    });
   },
   before: function () {
    return this.domManip(arguments, function (e) {
     this.parentNode && this.parentNode.insertBefore(e, this);
    });
   },
   after: function () {
    return this.domManip(arguments, function (e) {
     this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
    });
   },
   remove: function (e, t) {
    for (
     var n, r = e ? p.filter(e, this) : this, i = 0;
     null != (n = r[i]);
     i++
    )
     t || 1 !== n.nodeType || p.cleanData(ye(n)),
      n.parentNode &&
       (t && p.contains(n.ownerDocument, n) && Ce(ye(n, "script")),
       n.parentNode.removeChild(n));
    return this;
   },
   empty: function () {
    for (var e, t = 0; null != (e = this[t]); t++) {
     for (1 === e.nodeType && p.cleanData(ye(e, !1)); e.firstChild; )
      e.removeChild(e.firstChild);
     e.options && p.nodeName(e, "select") && (e.options.length = 0);
    }
    return this;
   },
   clone: function (e, t) {
    return (
     (e = null != e && e),
     (t = null == t ? e : t),
     this.map(function () {
      return p.clone(this, e, t);
     })
    );
   },
   html: function (e) {
    return U(
     this,
     function (e) {
      var t = this[0] || {},
       n = 0,
       r = this.length;
      if (void 0 === e)
       return 1 === t.nodeType ? t.innerHTML.replace(ie, "") : void 0;
      if (
       !(
        "string" != typeof e ||
        de.test(e) ||
        (!d.htmlSerialize && oe.test(e)) ||
        (!d.leadingWhitespace && ae.test(e)) ||
        ge[(le.exec(e) || ["", ""])[1].toLowerCase()]
       )
      ) {
       e = e.replace(se, "<$1></$2>");
       try {
        for (; r > n; n++)
         1 === (t = this[n] || {}).nodeType &&
          (p.cleanData(ye(t, !1)), (t.innerHTML = e));
        t = 0;
       } catch (e) {}
      }
      t && this.empty().append(e);
     },
     null,
     e,
     arguments.length
    );
   },
   replaceWith: function () {
    var e = arguments[0];
    return (
     this.domManip(arguments, function (t) {
      (e = this.parentNode),
       p.cleanData(ye(this)),
       e && e.replaceChild(t, this);
     }),
     e && (e.length || e.nodeType) ? this : this.remove()
    );
   },
   detach: function (e) {
    return this.remove(e, !0);
   },
   domManip: function (e, t) {
    e = i.apply([], e);
    var n,
     r,
     o,
     a,
     s,
     l,
     u = 0,
     c = this.length,
     f = this,
     h = c - 1,
     m = e[0],
     g = p.isFunction(m);
    if (g || (c > 1 && "string" == typeof m && !d.checkClone && fe.test(m)))
     return this.each(function (n) {
      var r = f.eq(n);
      g && (e[0] = m.call(this, n, r.html())), r.domManip(e, t);
     });
    if (
     c &&
     ((n = (l = p.buildFragment(e, this[0].ownerDocument, !1, this))
      .firstChild),
     1 === l.childNodes.length && (l = n),
     n)
    ) {
     for (o = (a = p.map(ye(l, "script"), we)).length; c > u; u++)
      (r = l),
       u !== h && ((r = p.clone(r, !0, !0)), o && p.merge(a, ye(r, "script"))),
       t.call(this[u], r, u);
     if (o)
      for (s = a[a.length - 1].ownerDocument, p.map(a, Te), u = 0; o > u; u++)
       (r = a[u]),
        pe.test(r.type || "") &&
         !p._data(r, "globalEval") &&
         p.contains(s, r) &&
         (r.src
          ? p._evalUrl && p._evalUrl(r.src)
          : p.globalEval(
             (r.text || r.textContent || r.innerHTML || "").replace(me, "")
            ));
     l = n = null;
    }
    return this;
   },
  }),
  p.each(
   {
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith",
   },
   function (e, t) {
    p.fn[e] = function (e) {
     for (var n, r = 0, i = [], a = p(e), s = a.length - 1; s >= r; r++)
      (n = r === s ? this : this.clone(!0)),
       p(a[r])[t](n),
       o.apply(i, n.get());
     return this.pushStack(i);
    };
   }
  );
 var ke,
  Se = {};
 function Ae(t, n) {
  var r = p(n.createElement(t)).appendTo(n.body),
   i = e.getDefaultComputedStyle
    ? e.getDefaultComputedStyle(r[0]).display
    : p.css(r[0], "display");
  return r.detach(), i;
 }
 function De(e) {
  var t = E,
   n = Se[e];
  return (
   n ||
    (("none" !== (n = Ae(e, t)) && n) ||
     ((t = (
      (ke = (
       ke || p("<iframe frameborder='0' width='0' height='0'/>")
      ).appendTo(t.documentElement))[0].contentWindow || ke[0].contentDocument
     ).document).write(),
     t.close(),
     (n = Ae(e, t)),
     ke.detach()),
    (Se[e] = n)),
   n
  );
 }
 !(function () {
  var e,
   t,
   n = E.createElement("div");
  (n.innerHTML =
   "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
   ((e = n.getElementsByTagName("a")[0]).style.cssText =
    "float:left;opacity:.5"),
   (d.opacity = /^0.5/.test(e.style.opacity)),
   (d.cssFloat = !!e.style.cssFloat),
   (n.style.backgroundClip = "content-box"),
   (n.cloneNode(!0).style.backgroundClip = ""),
   (d.clearCloneStyle = "content-box" === n.style.backgroundClip),
   (e = n = null),
   (d.shrinkWrapBlocks = function () {
    var e, n, r;
    if (null == t) {
     if (!(e = E.getElementsByTagName("body")[0])) return;
     "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
      (n = E.createElement("div")),
      (r = E.createElement("div")),
      e.appendChild(n).appendChild(r),
      (t = !1),
      typeof r.style.zoom !== F &&
       ((r.style.cssText =
        "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0;width:1px;padding:1px;zoom:1"),
       (r.innerHTML = "<div></div>"),
       (r.firstChild.style.width = "5px"),
       (t = 3 !== r.offsetWidth)),
      e.removeChild(n),
      (e = n = r = null);
    }
    return t;
   });
 })();
 var je,
  Le,
  He = /^margin/,
  qe = new RegExp("^(" + z + ")(?!px)[a-z%]+$", "i"),
  _e = /^(top|right|bottom|left)$/;
 function Me(e, t) {
  return {
   get: function () {
    var n = e();
    if (null != n)
     return n ? void delete this.get : (this.get = t).apply(this, arguments);
   },
  };
 }
 e.getComputedStyle
  ? ((je = function (e) {
     return e.ownerDocument.defaultView.getComputedStyle(e, null);
    }),
    (Le = function (e, t, n) {
     var r,
      i,
      o,
      a,
      s = e.style;
     return (
      (a = (n = n || je(e)) ? n.getPropertyValue(t) || n[t] : void 0),
      n &&
       ("" !== a || p.contains(e.ownerDocument, e) || (a = p.style(e, t)),
       qe.test(a) &&
        He.test(t) &&
        ((r = s.width),
        (i = s.minWidth),
        (o = s.maxWidth),
        (s.minWidth = s.maxWidth = s.width = a),
        (a = n.width),
        (s.width = r),
        (s.minWidth = i),
        (s.maxWidth = o))),
      void 0 === a ? a : a + ""
     );
    }))
  : E.documentElement.currentStyle &&
    ((je = function (e) {
     return e.currentStyle;
    }),
    (Le = function (e, t, n) {
     var r,
      i,
      o,
      a,
      s = e.style;
     return (
      null == (a = (n = n || je(e)) ? n[t] : void 0) &&
       s &&
       s[t] &&
       (a = s[t]),
      qe.test(a) &&
       !_e.test(t) &&
       ((r = s.left),
       (o = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left),
       (s.left = "fontSize" === t ? "1em" : a),
       (a = s.pixelLeft + "px"),
       (s.left = r),
       o && (i.left = o)),
      void 0 === a ? a : a + "" || "auto"
     );
    })),
  (function () {
   var t,
    n,
    r,
    i,
    o,
    a,
    s = E.createElement("div"),
    l = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
   function u() {
    var t,
     n,
     s = E.getElementsByTagName("body")[0];
    s &&
     ((t = E.createElement("div")),
     (n = E.createElement("div")),
     (t.style.cssText = l),
     s.appendChild(t).appendChild(n),
     (n.style.cssText =
      "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%"),
     p.swap(s, null != s.style.zoom ? { zoom: 1 } : {}, function () {
      r = 4 === n.offsetWidth;
     }),
     (i = !0),
     (o = !1),
     (a = !0),
     e.getComputedStyle &&
      ((o = "1%" !== (e.getComputedStyle(n, null) || {}).top),
      (i = "4px" === (e.getComputedStyle(n, null) || { width: "4px" }).width)),
     s.removeChild(t),
     (n = s = null));
   }
   (s.innerHTML =
    "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
    ((t = s.getElementsByTagName("a")[0]).style.cssText =
     "float:left;opacity:.5"),
    (d.opacity = /^0.5/.test(t.style.opacity)),
    (d.cssFloat = !!t.style.cssFloat),
    (s.style.backgroundClip = "content-box"),
    (s.cloneNode(!0).style.backgroundClip = ""),
    (d.clearCloneStyle = "content-box" === s.style.backgroundClip),
    (t = s = null),
    p.extend(d, {
     reliableHiddenOffsets: function () {
      if (null != n) return n;
      var e,
       t,
       r,
       i = E.createElement("div"),
       o = E.getElementsByTagName("body")[0];
      return o
       ? (i.setAttribute("className", "t"),
         (i.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
         ((e = E.createElement("div")).style.cssText = l),
         o.appendChild(e).appendChild(i),
         (i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
         ((t = i.getElementsByTagName("td"))[0].style.cssText =
          "padding:0;margin:0;border:0;display:none"),
         (r = 0 === t[0].offsetHeight),
         (t[0].style.display = ""),
         (t[1].style.display = "none"),
         (n = r && 0 === t[0].offsetHeight),
         o.removeChild(e),
         (i = o = null),
         n)
       : void 0;
     },
     boxSizing: function () {
      return null == r && u(), r;
     },
     boxSizingReliable: function () {
      return null == i && u(), i;
     },
     pixelPosition: function () {
      return null == o && u(), o;
     },
     reliableMarginRight: function () {
      var t, n, r, i;
      if (null == a && e.getComputedStyle) {
       if (!(t = E.getElementsByTagName("body")[0])) return;
       (n = E.createElement("div")),
        (r = E.createElement("div")),
        (n.style.cssText = l),
        t.appendChild(n).appendChild(r),
        ((i = r.appendChild(E.createElement("div"))).style.cssText =
         r.style.cssText =
          "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0"),
        (i.style.marginRight = i.style.width = "0"),
        (r.style.width = "1px"),
        (a = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)),
        t.removeChild(n);
      }
      return a;
     },
    });
  })(),
  (p.swap = function (e, t, n, r) {
   var i,
    o,
    a = {};
   for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
   for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
   return i;
  });
 var Fe = /alpha\([^)]*\)/i,
  Oe = /opacity\s*=\s*([^)]*)/,
  Be = /^(none|table(?!-c[ea]).+)/,
  Pe = new RegExp("^(" + z + ")(.*)$", "i"),
  Re = new RegExp("^([+-])=(" + z + ")", "i"),
  We = { position: "absolute", visibility: "hidden", display: "block" },
  $e = { letterSpacing: 0, fontWeight: 400 },
  ze = ["Webkit", "O", "Moz", "ms"];
 function Ie(e, t) {
  if (t in e) return t;
  for (
   var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = ze.length;
   i--;

  )
   if ((t = ze[i] + n) in e) return t;
  return r;
 }
 function Xe(e, t) {
  for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)
   (r = e[a]).style &&
    ((o[a] = p._data(r, "olddisplay")),
    (n = r.style.display),
    t
     ? (o[a] || "none" !== n || (r.style.display = ""),
       "" === r.style.display &&
        X(r) &&
        (o[a] = p._data(r, "olddisplay", De(r.nodeName))))
     : o[a] ||
       ((i = X(r)),
       ((n && "none" !== n) || !i) &&
        p._data(r, "olddisplay", i ? n : p.css(r, "display"))));
  for (a = 0; s > a; a++)
   (r = e[a]).style &&
    ((t && "none" !== r.style.display && "" !== r.style.display) ||
     (r.style.display = t ? o[a] || "" : "none"));
  return e;
 }
 function Ue(e, t, n) {
  var r = Pe.exec(t);
  return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
 }
 function Ve(e, t, n, r, i) {
  for (
   var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0;
   4 > o;
   o += 2
  )
   "margin" === n && (a += p.css(e, n + I[o], !0, i)),
    r
     ? ("content" === n && (a -= p.css(e, "padding" + I[o], !0, i)),
       "margin" !== n && (a -= p.css(e, "border" + I[o] + "Width", !0, i)))
     : ((a += p.css(e, "padding" + I[o], !0, i)),
       "padding" !== n && (a += p.css(e, "border" + I[o] + "Width", !0, i)));
  return a;
 }
 function Je(e, t, n) {
  var r = !0,
   i = "width" === t ? e.offsetWidth : e.offsetHeight,
   o = je(e),
   a = d.boxSizing() && "border-box" === p.css(e, "boxSizing", !1, o);
  if (0 >= i || null == i) {
   if (((0 > (i = Le(e, t, o)) || null == i) && (i = e.style[t]), qe.test(i)))
    return i;
   (r = a && (d.boxSizingReliable() || i === e.style[t])),
    (i = parseFloat(i) || 0);
  }
  return i + Ve(e, t, n || (a ? "border" : "content"), r, o) + "px";
 }
 function Ye(e, t, n, r, i) {
  return new Ye.prototype.init(e, t, n, r, i);
 }
 p.extend({
  cssHooks: {
   opacity: {
    get: function (e, t) {
     if (t) {
      var n = Le(e, "opacity");
      return "" === n ? "1" : n;
     }
    },
   },
  },
  cssNumber: {
   columnCount: !0,
   fillOpacity: !0,
   fontWeight: !0,
   lineHeight: !0,
   opacity: !0,
   order: !0,
   orphans: !0,
   widows: !0,
   zIndex: !0,
   zoom: !0,
  },
  cssProps: { float: d.cssFloat ? "cssFloat" : "styleFloat" },
  style: function (e, t, n, r) {
   if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
    var i,
     o,
     a,
     s = p.camelCase(t),
     l = e.style;
    if (
     ((t = p.cssProps[s] || (p.cssProps[s] = Ie(l, s))),
     (a = p.cssHooks[t] || p.cssHooks[s]),
     void 0 === n)
    )
     return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
    if (
     ("string" === (o = typeof n) &&
      (i = Re.exec(n)) &&
      ((n = (i[1] + 1) * i[2] + parseFloat(p.css(e, t))), (o = "number")),
     null != n &&
      n == n &&
      ("number" !== o || p.cssNumber[s] || (n += "px"),
      d.clearCloneStyle ||
       "" !== n ||
       0 !== t.indexOf("background") ||
       (l[t] = "inherit"),
      !(a && "set" in a && void 0 === (n = a.set(e, n, r)))))
    )
     try {
      (l[t] = ""), (l[t] = n);
     } catch (e) {}
   }
  },
  css: function (e, t, n, r) {
   var i,
    o,
    a,
    s = p.camelCase(t);
   return (
    (t = p.cssProps[s] || (p.cssProps[s] = Ie(e.style, s))),
    (a = p.cssHooks[t] || p.cssHooks[s]) &&
     "get" in a &&
     (o = a.get(e, !0, n)),
    void 0 === o && (o = Le(e, t, r)),
    "normal" === o && t in $e && (o = $e[t]),
    "" === n || n
     ? ((i = parseFloat(o)), !0 === n || p.isNumeric(i) ? i || 0 : o)
     : o
   );
  },
 }),
  p.each(["height", "width"], function (e, t) {
   p.cssHooks[t] = {
    get: function (e, n, r) {
     return n
      ? 0 === e.offsetWidth && Be.test(p.css(e, "display"))
        ? p.swap(e, We, function () {
           return Je(e, t, r);
          })
        : Je(e, t, r)
      : void 0;
    },
    set: function (e, n, r) {
     var i = r && je(e);
     return Ue(
      0,
      n,
      r
       ? Ve(
          e,
          t,
          r,
          d.boxSizing() && "border-box" === p.css(e, "boxSizing", !1, i),
          i
         )
       : 0
     );
    },
   };
  }),
  d.opacity ||
   (p.cssHooks.opacity = {
    get: function (e, t) {
     return Oe.test(
      (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ""
     )
      ? 0.01 * parseFloat(RegExp.$1) + ""
      : t
      ? "1"
      : "";
    },
    set: function (e, t) {
     var n = e.style,
      r = e.currentStyle,
      i = p.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
      o = (r && r.filter) || n.filter || "";
     (n.zoom = 1),
      ((t >= 1 || "" === t) &&
       "" === p.trim(o.replace(Fe, "")) &&
       n.removeAttribute &&
       (n.removeAttribute("filter"), "" === t || (r && !r.filter))) ||
       (n.filter = Fe.test(o) ? o.replace(Fe, i) : o + " " + i);
    },
   }),
  (p.cssHooks.marginRight = Me(d.reliableMarginRight, function (e, t) {
   return t
    ? p.swap(e, { display: "inline-block" }, Le, [e, "marginRight"])
    : void 0;
  })),
  p.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
   (p.cssHooks[e + t] = {
    expand: function (n) {
     for (
      var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
      4 > r;
      r++
     )
      i[e + I[r] + t] = o[r] || o[r - 2] || o[0];
     return i;
    },
   }),
    He.test(e) || (p.cssHooks[e + t].set = Ue);
  }),
  p.fn.extend({
   css: function (e, t) {
    return U(
     this,
     function (e, t, n) {
      var r,
       i,
       o = {},
       a = 0;
      if (p.isArray(t)) {
       for (r = je(e), i = t.length; i > a; a++)
        o[t[a]] = p.css(e, t[a], !1, r);
       return o;
      }
      return void 0 !== n ? p.style(e, t, n) : p.css(e, t);
     },
     e,
     t,
     arguments.length > 1
    );
   },
   show: function () {
    return Xe(this, !0);
   },
   hide: function () {
    return Xe(this);
   },
   toggle: function (e) {
    return "boolean" == typeof e
     ? e
       ? this.show()
       : this.hide()
     : this.each(function () {
        X(this) ? p(this).show() : p(this).hide();
       });
   },
  }),
  (p.Tween = Ye),
  (Ye.prototype = {
   constructor: Ye,
   init: function (e, t, n, r, i, o) {
    (this.elem = e),
     (this.prop = n),
     (this.easing = i || "swing"),
     (this.options = t),
     (this.start = this.now = this.cur()),
     (this.end = r),
     (this.unit = o || (p.cssNumber[n] ? "" : "px"));
   },
   cur: function () {
    var e = Ye.propHooks[this.prop];
    return e && e.get ? e.get(this) : Ye.propHooks._default.get(this);
   },
   run: function (e) {
    var t,
     n = Ye.propHooks[this.prop];
    return (
     (this.pos = t =
      this.options.duration
       ? p.easing[this.easing](
          e,
          this.options.duration * e,
          0,
          1,
          this.options.duration
         )
       : e),
     (this.now = (this.end - this.start) * t + this.start),
     this.options.step && this.options.step.call(this.elem, this.now, this),
     n && n.set ? n.set(this) : Ye.propHooks._default.set(this),
     this
    );
   },
  }),
  (Ye.prototype.init.prototype = Ye.prototype),
  (Ye.propHooks = {
   _default: {
    get: function (e) {
     var t;
     return null == e.elem[e.prop] ||
      (e.elem.style && null != e.elem.style[e.prop])
      ? (t = p.css(e.elem, e.prop, "")) && "auto" !== t
        ? t
        : 0
      : e.elem[e.prop];
    },
    set: function (e) {
     p.fx.step[e.prop]
      ? p.fx.step[e.prop](e)
      : e.elem.style &&
        (null != e.elem.style[p.cssProps[e.prop]] || p.cssHooks[e.prop])
      ? p.style(e.elem, e.prop, e.now + e.unit)
      : (e.elem[e.prop] = e.now);
    },
   },
  }),
  (Ye.propHooks.scrollTop = Ye.propHooks.scrollLeft =
   {
    set: function (e) {
     e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    },
   }),
  (p.easing = {
   linear: function (e) {
    return e;
   },
   swing: function (e) {
    return 0.5 - Math.cos(e * Math.PI) / 2;
   },
  }),
  (p.fx = Ye.prototype.init),
  (p.fx.step = {});
 var Ge,
  Qe,
  Ke = /^(?:toggle|show|hide)$/,
  Ze = new RegExp("^(?:([+-])=|)(" + z + ")([a-z%]*)$", "i"),
  et = /queueHooks$/,
  tt = [
   function (e, t, n) {
    var r,
     i,
     o,
     a,
     s,
     l,
     u,
     c,
     f = this,
     h = {},
     m = e.style,
     g = e.nodeType && X(e),
     v = p._data(e, "fxshow");
    for (r in (n.queue ||
     (null == (s = p._queueHooks(e, "fx")).unqueued &&
      ((s.unqueued = 0),
      (l = s.empty.fire),
      (s.empty.fire = function () {
       s.unqueued || l();
      })),
     s.unqueued++,
     f.always(function () {
      f.always(function () {
       s.unqueued--, p.queue(e, "fx").length || s.empty.fire();
      });
     })),
    1 === e.nodeType &&
     ("height" in t || "width" in t) &&
     ((n.overflow = [m.overflow, m.overflowX, m.overflowY]),
     (u = p.css(e, "display")),
     (c = De(e.nodeName)),
     "none" === u && (u = c),
     "inline" === u &&
      "none" === p.css(e, "float") &&
      (d.inlineBlockNeedsLayout && "inline" !== c
       ? (m.zoom = 1)
       : (m.display = "inline-block"))),
    n.overflow &&
     ((m.overflow = "hidden"),
     d.shrinkWrapBlocks() ||
      f.always(function () {
       (m.overflow = n.overflow[0]),
        (m.overflowX = n.overflow[1]),
        (m.overflowY = n.overflow[2]);
      })),
    t))
     if (((i = t[r]), Ke.exec(i))) {
      if (
       (delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))
      ) {
       if ("show" !== i || !v || void 0 === v[r]) continue;
       g = !0;
      }
      h[r] = (v && v[r]) || p.style(e, r);
     }
    if (!p.isEmptyObject(h))
     for (r in (v
      ? "hidden" in v && (g = v.hidden)
      : (v = p._data(e, "fxshow", {})),
     o && (v.hidden = !g),
     g
      ? p(e).show()
      : f.done(function () {
         p(e).hide();
        }),
     f.done(function () {
      var t;
      for (t in (p._removeData(e, "fxshow"), h)) p.style(e, t, h[t]);
     }),
     h))
      (a = ot(g ? v[r] : 0, r, f)),
       r in v ||
        ((v[r] = a.start),
        g &&
         ((a.end = a.start),
         (a.start = "width" === r || "height" === r ? 1 : 0)));
   },
  ],
  nt = {
   "*": [
    function (e, t) {
     var n = this.createTween(e, t),
      r = n.cur(),
      i = Ze.exec(t),
      o = (i && i[3]) || (p.cssNumber[e] ? "" : "px"),
      a = (p.cssNumber[e] || ("px" !== o && +r)) && Ze.exec(p.css(n.elem, e)),
      s = 1,
      l = 20;
     if (a && a[3] !== o) {
      (o = o || a[3]), (i = i || []), (a = +r || 1);
      do {
       (a /= s = s || ".5"), p.style(n.elem, e, a + o);
      } while (s !== (s = n.cur() / r) && 1 !== s && --l);
     }
     return (
      i &&
       ((a = n.start = +a || +r || 0),
       (n.unit = o),
       (n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2])),
      n
     );
    },
   ],
  };
 function rt() {
  return (
   setTimeout(function () {
    Ge = void 0;
   }),
   (Ge = p.now())
  );
 }
 function it(e, t) {
  var n,
   r = { height: e },
   i = 0;
  for (t = t ? 1 : 0; 4 > i; i += 2 - t)
   r["margin" + (n = I[i])] = r["padding" + n] = e;
  return t && (r.opacity = r.width = e), r;
 }
 function ot(e, t, n) {
  for (
   var r, i = (nt[t] || []).concat(nt["*"]), o = 0, a = i.length;
   a > o;
   o++
  )
   if ((r = i[o].call(n, t, e))) return r;
 }
 function at(e, t, n) {
  var r,
   i,
   o = 0,
   a = tt.length,
   s = p.Deferred().always(function () {
    delete l.elem;
   }),
   l = function () {
    if (i) return !1;
    for (
     var t = Ge || rt(),
      n = Math.max(0, u.startTime + u.duration - t),
      r = 1 - (n / u.duration || 0),
      o = 0,
      a = u.tweens.length;
     a > o;
     o++
    )
     u.tweens[o].run(r);
    return (
     s.notifyWith(e, [u, r, n]), 1 > r && a ? n : (s.resolveWith(e, [u]), !1)
    );
   },
   u = s.promise({
    elem: e,
    props: p.extend({}, t),
    opts: p.extend(!0, { specialEasing: {} }, n),
    originalProperties: t,
    originalOptions: n,
    startTime: Ge || rt(),
    duration: n.duration,
    tweens: [],
    createTween: function (t, n) {
     var r = p.Tween(
      e,
      u.opts,
      t,
      n,
      u.opts.specialEasing[t] || u.opts.easing
     );
     return u.tweens.push(r), r;
    },
    stop: function (t) {
     var n = 0,
      r = t ? u.tweens.length : 0;
     if (i) return this;
     for (i = !0; r > n; n++) u.tweens[n].run(1);
     return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this;
    },
   }),
   c = u.props;
  for (
   (function (e, t) {
    var n, r, i, o, a;
    for (n in e)
     if (
      ((i = t[(r = p.camelCase(n))]),
      (o = e[n]),
      p.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
      n !== r && ((e[r] = o), delete e[n]),
      (a = p.cssHooks[r]) && ("expand" in a))
     )
      for (n in ((o = a.expand(o)), delete e[r], o))
       (n in e) || ((e[n] = o[n]), (t[n] = i));
     else t[r] = i;
   })(c, u.opts.specialEasing);
   a > o;
   o++
  )
   if ((r = tt[o].call(u, e, c, u.opts))) return r;
  return (
   p.map(c, ot, u),
   p.isFunction(u.opts.start) && u.opts.start.call(e, u),
   p.fx.timer(p.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
   u
    .progress(u.opts.progress)
    .done(u.opts.done, u.opts.complete)
    .fail(u.opts.fail)
    .always(u.opts.always)
  );
 }
 (p.Animation = p.extend(at, {
  tweener: function (e, t) {
   p.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
   for (var n, r = 0, i = e.length; i > r; r++)
    (n = e[r]), (nt[n] = nt[n] || []), nt[n].unshift(t);
  },
  prefilter: function (e, t) {
   t ? tt.unshift(e) : tt.push(e);
  },
 })),
  (p.speed = function (e, t, n) {
   var r =
    e && "object" == typeof e
     ? p.extend({}, e)
     : {
        complete: n || (!n && t) || (p.isFunction(e) && e),
        duration: e,
        easing: (n && t) || (t && !p.isFunction(t) && t),
       };
   return (
    (r.duration = p.fx.off
     ? 0
     : "number" == typeof r.duration
     ? r.duration
     : r.duration in p.fx.speeds
     ? p.fx.speeds[r.duration]
     : p.fx.speeds._default),
    (null == r.queue || !0 === r.queue) && (r.queue = "fx"),
    (r.old = r.complete),
    (r.complete = function () {
     p.isFunction(r.old) && r.old.call(this),
      r.queue && p.dequeue(this, r.queue);
    }),
    r
   );
  }),
  p.fn.extend({
   fadeTo: function (e, t, n, r) {
    return this.filter(X)
     .css("opacity", 0)
     .show()
     .end()
     .animate({ opacity: t }, e, n, r);
   },
   animate: function (e, t, n, r) {
    var i = p.isEmptyObject(e),
     o = p.speed(t, n, r),
     a = function () {
      var t = at(this, p.extend({}, e), o);
      (i || p._data(this, "finish")) && t.stop(!0);
     };
    return (
     (a.finish = a),
     i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
    );
   },
   stop: function (e, t, n) {
    var r = function (e) {
     var t = e.stop;
     delete e.stop, t(n);
    };
    return (
     "string" != typeof e && ((n = t), (t = e), (e = void 0)),
     t && !1 !== e && this.queue(e || "fx", []),
     this.each(function () {
      var t = !0,
       i = null != e && e + "queueHooks",
       o = p.timers,
       a = p._data(this);
      if (i) a[i] && a[i].stop && r(a[i]);
      else for (i in a) a[i] && a[i].stop && et.test(i) && r(a[i]);
      for (i = o.length; i--; )
       o[i].elem !== this ||
        (null != e && o[i].queue !== e) ||
        (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
      (t || !n) && p.dequeue(this, e);
     })
    );
   },
   finish: function (e) {
    return (
     !1 !== e && (e = e || "fx"),
     this.each(function () {
      var t,
       n = p._data(this),
       r = n[e + "queue"],
       i = n[e + "queueHooks"],
       o = p.timers,
       a = r ? r.length : 0;
      for (
       n.finish = !0,
        p.queue(this, e, []),
        i && i.stop && i.stop.call(this, !0),
        t = o.length;
       t--;

      )
       o[t].elem === this &&
        o[t].queue === e &&
        (o[t].anim.stop(!0), o.splice(t, 1));
      for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
      delete n.finish;
     })
    );
   },
  }),
  p.each(["toggle", "show", "hide"], function (e, t) {
   var n = p.fn[t];
   p.fn[t] = function (e, r, i) {
    return null == e || "boolean" == typeof e
     ? n.apply(this, arguments)
     : this.animate(it(t, !0), e, r, i);
   };
  }),
  p.each(
   {
    slideDown: it("show"),
    slideUp: it("hide"),
    slideToggle: it("toggle"),
    fadeIn: { opacity: "show" },
    fadeOut: { opacity: "hide" },
    fadeToggle: { opacity: "toggle" },
   },
   function (e, t) {
    p.fn[e] = function (e, n, r) {
     return this.animate(t, e, n, r);
    };
   }
  ),
  (p.timers = []),
  (p.fx.tick = function () {
   var e,
    t = p.timers,
    n = 0;
   for (Ge = p.now(); n < t.length; n++)
    (e = t[n])() || t[n] !== e || t.splice(n--, 1);
   t.length || p.fx.stop(), (Ge = void 0);
  }),
  (p.fx.timer = function (e) {
   p.timers.push(e), e() ? p.fx.start() : p.timers.pop();
  }),
  (p.fx.interval = 13),
  (p.fx.start = function () {
   Qe || (Qe = setInterval(p.fx.tick, p.fx.interval));
  }),
  (p.fx.stop = function () {
   clearInterval(Qe), (Qe = null);
  }),
  (p.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
  (p.fn.delay = function (e, t) {
   return (
    (e = (p.fx && p.fx.speeds[e]) || e),
    (t = t || "fx"),
    this.queue(t, function (t, n) {
     var r = setTimeout(t, e);
     n.stop = function () {
      clearTimeout(r);
     };
    })
   );
  }),
  (function () {
   var e,
    t,
    n,
    r,
    i = E.createElement("div");
   i.setAttribute("className", "t"),
    (i.innerHTML =
     "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
    (e = i.getElementsByTagName("a")[0]),
    (r = (n = E.createElement("select")).appendChild(
     E.createElement("option")
    )),
    (t = i.getElementsByTagName("input")[0]),
    (e.style.cssText = "top:1px"),
    (d.getSetAttribute = "t" !== i.className),
    (d.style = /top/.test(e.getAttribute("style"))),
    (d.hrefNormalized = "/a" === e.getAttribute("href")),
    (d.checkOn = !!t.value),
    (d.optSelected = r.selected),
    (d.enctype = !!E.createElement("form").enctype),
    (n.disabled = !0),
    (d.optDisabled = !r.disabled),
    (t = E.createElement("input")).setAttribute("value", ""),
    (d.input = "" === t.getAttribute("value")),
    (t.value = "t"),
    t.setAttribute("type", "radio"),
    (d.radioValue = "t" === t.value),
    (e = t = n = r = i = null);
  })();
 var st = /\r/g;
 p.fn.extend({
  val: function (e) {
   var t,
    n,
    r,
    i = this[0];
   return arguments.length
    ? ((r = p.isFunction(e)),
      this.each(function (n) {
       var i;
       1 === this.nodeType &&
        (null == (i = r ? e.call(this, n, p(this).val()) : e)
         ? (i = "")
         : "number" == typeof i
         ? (i += "")
         : p.isArray(i) &&
           (i = p.map(i, function (e) {
            return null == e ? "" : e + "";
           })),
        ((t =
         p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]) &&
         "set" in t &&
         void 0 !== t.set(this, i, "value")) ||
         (this.value = i));
      }))
    : i
    ? (t = p.valHooks[i.type] || p.valHooks[i.nodeName.toLowerCase()]) &&
      "get" in t &&
      void 0 !== (n = t.get(i, "value"))
      ? n
      : "string" == typeof (n = i.value)
      ? n.replace(st, "")
      : null == n
      ? ""
      : n
    : void 0;
  },
 }),
  p.extend({
   valHooks: {
    option: {
     get: function (e) {
      var t = p.find.attr(e, "value");
      return null != t ? t : p.text(e);
     },
    },
    select: {
     get: function (e) {
      for (
       var t,
        n,
        r = e.options,
        i = e.selectedIndex,
        o = "select-one" === e.type || 0 > i,
        a = o ? null : [],
        s = o ? i + 1 : r.length,
        l = 0 > i ? s : o ? i : 0;
       s > l;
       l++
      )
       if (
        !(
         (!(n = r[l]).selected && l !== i) ||
         (d.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) ||
         (n.parentNode.disabled && p.nodeName(n.parentNode, "optgroup"))
        )
       ) {
        if (((t = p(n).val()), o)) return t;
        a.push(t);
       }
      return a;
     },
     set: function (e, t) {
      for (var n, r, i = e.options, o = p.makeArray(t), a = i.length; a--; )
       if (((r = i[a]), p.inArray(p.valHooks.option.get(r), o) >= 0))
        try {
         r.selected = n = !0;
        } catch (e) {
         r.scrollHeight;
        }
       else r.selected = !1;
      return n || (e.selectedIndex = -1), i;
     },
    },
   },
  }),
  p.each(["radio", "checkbox"], function () {
   (p.valHooks[this] = {
    set: function (e, t) {
     return p.isArray(t)
      ? (e.checked = p.inArray(p(e).val(), t) >= 0)
      : void 0;
    },
   }),
    d.checkOn ||
     (p.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
     });
  });
 var lt,
  ut,
  ct = p.expr.attrHandle,
  dt = /^(?:checked|selected)$/i,
  ft = d.getSetAttribute,
  pt = d.input;
 p.fn.extend({
  attr: function (e, t) {
   return U(this, p.attr, e, t, arguments.length > 1);
  },
  removeAttr: function (e) {
   return this.each(function () {
    p.removeAttr(this, e);
   });
  },
 }),
  p.extend({
   attr: function (e, t, n) {
    var r,
     i,
     o = e.nodeType;
    if (e && 3 !== o && 8 !== o && 2 !== o)
     return typeof e.getAttribute === F
      ? p.prop(e, t, n)
      : ((1 === o && p.isXMLDoc(e)) ||
         ((t = t.toLowerCase()),
         (r = p.attrHooks[t] || (p.expr.match.bool.test(t) ? ut : lt))),
        void 0 === n
         ? r && "get" in r && null !== (i = r.get(e, t))
           ? i
           : null == (i = p.find.attr(e, t))
           ? void 0
           : i
         : null !== n
         ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
           ? i
           : (e.setAttribute(t, n + ""), n)
         : void p.removeAttr(e, t));
   },
   removeAttr: function (e, t) {
    var n,
     r,
     i = 0,
     o = t && t.match(L);
    if (o && 1 === e.nodeType)
     for (; (n = o[i++]); )
      (r = p.propFix[n] || n),
       p.expr.match.bool.test(n)
        ? (pt && ft) || !dt.test(n)
          ? (e[r] = !1)
          : (e[p.camelCase("default-" + n)] = e[r] = !1)
        : p.attr(e, n, ""),
       e.removeAttribute(ft ? n : r);
   },
   attrHooks: {
    type: {
     set: function (e, t) {
      if (!d.radioValue && "radio" === t && p.nodeName(e, "input")) {
       var n = e.value;
       return e.setAttribute("type", t), n && (e.value = n), t;
      }
     },
    },
   },
  }),
  (ut = {
   set: function (e, t, n) {
    return (
     !1 === t
      ? p.removeAttr(e, n)
      : (pt && ft) || !dt.test(n)
      ? e.setAttribute((!ft && p.propFix[n]) || n, n)
      : (e[p.camelCase("default-" + n)] = e[n] = !0),
     n
    );
   },
  }),
  p.each(p.expr.match.bool.source.match(/\w+/g), function (e, t) {
   var n = ct[t] || p.find.attr;
   ct[t] =
    (pt && ft) || !dt.test(t)
     ? function (e, t, r) {
        var i, o;
        return (
         r ||
          ((o = ct[t]),
          (ct[t] = i),
          (i = null != n(e, t, r) ? t.toLowerCase() : null),
          (ct[t] = o)),
         i
        );
       }
     : function (e, t, n) {
        return n
         ? void 0
         : e[p.camelCase("default-" + t)]
         ? t.toLowerCase()
         : null;
       };
  }),
  (pt && ft) ||
   (p.attrHooks.value = {
    set: function (e, t, n) {
     return p.nodeName(e, "input")
      ? void (e.defaultValue = t)
      : lt && lt.set(e, t, n);
    },
   }),
  ft ||
   ((lt = {
    set: function (e, t, n) {
     var r = e.getAttributeNode(n);
     return (
      r || e.setAttributeNode((r = e.ownerDocument.createAttribute(n))),
      (r.value = t += ""),
      "value" === n || t === e.getAttribute(n) ? t : void 0
     );
    },
   }),
   (ct.id =
    ct.name =
    ct.coords =
     function (e, t, n) {
      var r;
      return n
       ? void 0
       : (r = e.getAttributeNode(t)) && "" !== r.value
       ? r.value
       : null;
     }),
   (p.valHooks.button = {
    get: function (e, t) {
     var n = e.getAttributeNode(t);
     return n && n.specified ? n.value : void 0;
    },
    set: lt.set,
   }),
   (p.attrHooks.contenteditable = {
    set: function (e, t, n) {
     lt.set(e, "" !== t && t, n);
    },
   }),
   p.each(["width", "height"], function (e, t) {
    p.attrHooks[t] = {
     set: function (e, n) {
      return "" === n ? (e.setAttribute(t, "auto"), n) : void 0;
     },
    };
   })),
  d.style ||
   (p.attrHooks.style = {
    get: function (e) {
     return e.style.cssText || void 0;
    },
    set: function (e, t) {
     return (e.style.cssText = t + "");
    },
   });
 var ht = /^(?:input|select|textarea|button|object)$/i,
  mt = /^(?:a|area)$/i;
 p.fn.extend({
  prop: function (e, t) {
   return U(this, p.prop, e, t, arguments.length > 1);
  },
  removeProp: function (e) {
   return (
    (e = p.propFix[e] || e),
    this.each(function () {
     try {
      (this[e] = void 0), delete this[e];
     } catch (e) {}
    })
   );
  },
 }),
  p.extend({
   propFix: { for: "htmlFor", class: "className" },
   prop: function (e, t, n) {
    var r,
     i,
     o = e.nodeType;
    if (e && 3 !== o && 8 !== o && 2 !== o)
     return (
      (1 !== o || !p.isXMLDoc(e)) &&
       ((t = p.propFix[t] || t), (i = p.propHooks[t])),
      void 0 !== n
       ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
         ? r
         : (e[t] = n)
       : i && "get" in i && null !== (r = i.get(e, t))
       ? r
       : e[t]
     );
   },
   propHooks: {
    tabIndex: {
     get: function (e) {
      var t = p.find.attr(e, "tabindex");
      return t
       ? parseInt(t, 10)
       : ht.test(e.nodeName) || (mt.test(e.nodeName) && e.href)
       ? 0
       : -1;
     },
    },
   },
  }),
  d.hrefNormalized ||
   p.each(["href", "src"], function (e, t) {
    p.propHooks[t] = {
     get: function (e) {
      return e.getAttribute(t, 4);
     },
    };
   }),
  d.optSelected ||
   (p.propHooks.selected = {
    get: function (e) {
     var t = e.parentNode;
     return (
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
     );
    },
   }),
  p.each(
   [
    "tabIndex",
    "readOnly",
    "maxLength",
    "cellSpacing",
    "cellPadding",
    "rowSpan",
    "colSpan",
    "useMap",
    "frameBorder",
    "contentEditable",
   ],
   function () {
    p.propFix[this.toLowerCase()] = this;
   }
  ),
  d.enctype || (p.propFix.enctype = "encoding");
 var gt = /[\t\r\n\f]/g;
 p.fn.extend({
  addClass: function (e) {
   var t,
    n,
    r,
    i,
    o,
    a,
    s = 0,
    l = this.length,
    u = "string" == typeof e && e;
   if (p.isFunction(e))
    return this.each(function (t) {
     p(this).addClass(e.call(this, t, this.className));
    });
   if (u)
    for (t = (e || "").match(L) || []; l > s; s++)
     if (
      (r =
       1 === (n = this[s]).nodeType &&
       (n.className ? (" " + n.className + " ").replace(gt, " ") : " "))
     ) {
      for (o = 0; (i = t[o++]); )
       r.indexOf(" " + i + " ") < 0 && (r += i + " ");
      (a = p.trim(r)), n.className !== a && (n.className = a);
     }
   return this;
  },
  removeClass: function (e) {
   var t,
    n,
    r,
    i,
    o,
    a,
    s = 0,
    l = this.length,
    u = 0 === arguments.length || ("string" == typeof e && e);
   if (p.isFunction(e))
    return this.each(function (t) {
     p(this).removeClass(e.call(this, t, this.className));
    });
   if (u)
    for (t = (e || "").match(L) || []; l > s; s++)
     if (
      (r =
       1 === (n = this[s]).nodeType &&
       (n.className ? (" " + n.className + " ").replace(gt, " ") : ""))
     ) {
      for (o = 0; (i = t[o++]); )
       for (; r.indexOf(" " + i + " ") >= 0; )
        r = r.replace(" " + i + " ", " ");
      (a = e ? p.trim(r) : ""), n.className !== a && (n.className = a);
     }
   return this;
  },
  toggleClass: function (e, t) {
   var n = typeof e;
   return "boolean" == typeof t && "string" === n
    ? t
      ? this.addClass(e)
      : this.removeClass(e)
    : this.each(
       p.isFunction(e)
        ? function (n) {
           p(this).toggleClass(e.call(this, n, this.className, t), t);
          }
        : function () {
           if ("string" === n)
            for (
             var t, r = 0, i = p(this), o = e.match(L) || [];
             (t = o[r++]);

            )
             i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
           else
            (n === F || "boolean" === n) &&
             (this.className && p._data(this, "__className__", this.className),
             (this.className =
              this.className || !1 === e
               ? ""
               : p._data(this, "__className__") || ""));
          }
      );
  },
  hasClass: function (e) {
   for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
    if (
     1 === this[n].nodeType &&
     (" " + this[n].className + " ").replace(gt, " ").indexOf(t) >= 0
    )
     return !0;
   return !1;
  },
 }),
  p.each(
   "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
    " "
   ),
   function (e, t) {
    p.fn[t] = function (e, n) {
     return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
   }
  ),
  p.fn.extend({
   hover: function (e, t) {
    return this.mouseenter(e).mouseleave(t || e);
   },
   bind: function (e, t, n) {
    return this.on(e, null, t, n);
   },
   unbind: function (e, t) {
    return this.off(e, null, t);
   },
   delegate: function (e, t, n, r) {
    return this.on(t, e, n, r);
   },
   undelegate: function (e, t, n) {
    return 1 === arguments.length
     ? this.off(e, "**")
     : this.off(t, e || "**", n);
   },
  });
 var vt = p.now(),
  yt = /\?/,
  bt =
   /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
 (p.parseJSON = function (t) {
  if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
  var n,
   r = null,
   i = p.trim(t + "");
  return i &&
   !p.trim(
    i.replace(bt, function (e, t, i, o) {
     return (
      n && t && (r = 0), 0 === r ? e : ((n = i || t), (r += !o - !i), "")
     );
    })
   )
   ? Function("return " + i)()
   : p.error("Invalid JSON: " + t);
 }),
  (p.parseXML = function (t) {
   var n;
   if (!t || "string" != typeof t) return null;
   try {
    e.DOMParser
     ? (n = new DOMParser().parseFromString(t, "text/xml"))
     : (((n = new ActiveXObject("Microsoft.XMLDOM")).async = "false"),
       n.loadXML(t));
   } catch (e) {
    n = void 0;
   }
   return (
    (n &&
     n.documentElement &&
     !n.getElementsByTagName("parsererror").length) ||
     p.error("Invalid XML: " + t),
    n
   );
  });
 var xt,
  wt,
  Tt = /#.*$/,
  Ct = /([?&])_=[^&]*/,
  Nt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
  Et = /^(?:GET|HEAD)$/,
  kt = /^\/\//,
  St = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
  At = {},
  Dt = {},
  jt = "*/".concat("*");
 try {
  wt = location.href;
 } catch (e) {
  ((wt = E.createElement("a")).href = ""), (wt = wt.href);
 }
 function Lt(e) {
  return function (t, n) {
   "string" != typeof t && ((n = t), (t = "*"));
   var r,
    i = 0,
    o = t.toLowerCase().match(L) || [];
   if (p.isFunction(n))
    for (; (r = o[i++]); )
     "+" === r.charAt(0)
      ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
      : (e[r] = e[r] || []).push(n);
  };
 }
 function Ht(e, t, n, r) {
  var i = {},
   o = e === Dt;
  function a(s) {
   var l;
   return (
    (i[s] = !0),
    p.each(e[s] || [], function (e, s) {
     var u = s(t, n, r);
     return "string" != typeof u || o || i[u]
      ? o
        ? !(l = u)
        : void 0
      : (t.dataTypes.unshift(u), a(u), !1);
    }),
    l
   );
  }
  return a(t.dataTypes[0]) || (!i["*"] && a("*"));
 }
 function qt(e, t) {
  var n,
   r,
   i = p.ajaxSettings.flatOptions || {};
  for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
  return n && p.extend(!0, e, n), e;
 }
 (xt = St.exec(wt.toLowerCase()) || []),
  p.extend({
   active: 0,
   lastModified: {},
   etag: {},
   ajaxSettings: {
    url: wt,
    type: "GET",
    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
     xt[1]
    ),
    global: !0,
    processData: !0,
    async: !0,
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    accepts: {
     "*": jt,
     text: "text/plain",
     html: "text/html",
     xml: "application/xml, text/xml",
     json: "application/json, text/javascript",
    },
    contents: { xml: /xml/, html: /html/, json: /json/ },
    responseFields: {
     xml: "responseXML",
     text: "responseText",
     json: "responseJSON",
    },
    converters: {
     "* text": String,
     "text html": !0,
     "text json": p.parseJSON,
     "text xml": p.parseXML,
    },
    flatOptions: { url: !0, context: !0 },
   },
   ajaxSetup: function (e, t) {
    return t ? qt(qt(e, p.ajaxSettings), t) : qt(p.ajaxSettings, e);
   },
   ajaxPrefilter: Lt(At),
   ajaxTransport: Lt(Dt),
   ajax: function (e, t) {
    "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
    var n,
     r,
     i,
     o,
     a,
     s,
     l,
     u,
     c = p.ajaxSetup({}, t),
     d = c.context || c,
     f = c.context && (d.nodeType || d.jquery) ? p(d) : p.event,
     h = p.Deferred(),
     m = p.Callbacks("once memory"),
     g = c.statusCode || {},
     v = {},
     y = {},
     b = 0,
     x = "canceled",
     w = {
      readyState: 0,
      getResponseHeader: function (e) {
       var t;
       if (2 === b) {
        if (!u) for (u = {}; (t = Nt.exec(o)); ) u[t[1].toLowerCase()] = t[2];
        t = u[e.toLowerCase()];
       }
       return null == t ? null : t;
      },
      getAllResponseHeaders: function () {
       return 2 === b ? o : null;
      },
      setRequestHeader: function (e, t) {
       var n = e.toLowerCase();
       return b || ((e = y[n] = y[n] || e), (v[e] = t)), this;
      },
      overrideMimeType: function (e) {
       return b || (c.mimeType = e), this;
      },
      statusCode: function (e) {
       var t;
       if (e)
        if (2 > b) for (t in e) g[t] = [g[t], e[t]];
        else w.always(e[w.status]);
       return this;
      },
      abort: function (e) {
       var t = e || x;
       return l && l.abort(t), T(0, t), this;
      },
     };
    if (
     ((h.promise(w).complete = m.add),
     (w.success = w.done),
     (w.error = w.fail),
     (c.url = ((e || c.url || wt) + "")
      .replace(Tt, "")
      .replace(kt, xt[1] + "//")),
     (c.type = t.method || t.type || c.method || c.type),
     (c.dataTypes = p
      .trim(c.dataType || "*")
      .toLowerCase()
      .match(L) || [""]),
     null == c.crossDomain &&
      ((n = St.exec(c.url.toLowerCase())),
      (c.crossDomain = !(
       !n ||
       (n[1] === xt[1] &&
        n[2] === xt[2] &&
        (n[3] || ("http:" === n[1] ? "80" : "443")) ===
         (xt[3] || ("http:" === xt[1] ? "80" : "443")))
      ))),
     c.data &&
      c.processData &&
      "string" != typeof c.data &&
      (c.data = p.param(c.data, c.traditional)),
     Ht(At, c, t, w),
     2 === b)
    )
     return w;
    for (r in ((s = c.global) &&
     0 == p.active++ &&
     p.event.trigger("ajaxStart"),
    (c.type = c.type.toUpperCase()),
    (c.hasContent = !Et.test(c.type)),
    (i = c.url),
    c.hasContent ||
     (c.data &&
      ((i = c.url += (yt.test(i) ? "&" : "?") + c.data), delete c.data),
     !1 === c.cache &&
      (c.url = Ct.test(i)
       ? i.replace(Ct, "$1_=" + vt++)
       : i + (yt.test(i) ? "&" : "?") + "_=" + vt++)),
    c.ifModified &&
     (p.lastModified[i] &&
      w.setRequestHeader("If-Modified-Since", p.lastModified[i]),
     p.etag[i] && w.setRequestHeader("If-None-Match", p.etag[i])),
    ((c.data && c.hasContent && !1 !== c.contentType) || t.contentType) &&
     w.setRequestHeader("Content-Type", c.contentType),
    w.setRequestHeader(
     "Accept",
     c.dataTypes[0] && c.accepts[c.dataTypes[0]]
      ? c.accepts[c.dataTypes[0]] +
         ("*" !== c.dataTypes[0] ? ", " + jt + "; q=0.01" : "")
      : c.accepts["*"]
    ),
    c.headers))
     w.setRequestHeader(r, c.headers[r]);
    if (c.beforeSend && (!1 === c.beforeSend.call(d, w, c) || 2 === b))
     return w.abort();
    for (r in ((x = "abort"), { success: 1, error: 1, complete: 1 }))
     w[r](c[r]);
    if ((l = Ht(Dt, c, t, w))) {
     (w.readyState = 1),
      s && f.trigger("ajaxSend", [w, c]),
      c.async &&
       c.timeout > 0 &&
       (a = setTimeout(function () {
        w.abort("timeout");
       }, c.timeout));
     try {
      (b = 1), l.send(v, T);
     } catch (e) {
      if (!(2 > b)) throw e;
      T(-1, e);
     }
    } else T(-1, "No Transport");
    function T(e, t, n, r) {
     var u,
      v,
      y,
      x,
      T,
      C = t;
     2 !== b &&
      ((b = 2),
      a && clearTimeout(a),
      (l = void 0),
      (o = r || ""),
      (w.readyState = e > 0 ? 4 : 0),
      (u = (e >= 200 && 300 > e) || 304 === e),
      n &&
       (x = (function (e, t, n) {
        for (var r, i, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
         l.shift(),
          void 0 === i &&
           (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
         for (a in s)
          if (s[a] && s[a].test(i)) {
           l.unshift(a);
           break;
          }
        if (l[0] in n) o = l[0];
        else {
         for (a in n) {
          if (!l[0] || e.converters[a + " " + l[0]]) {
           o = a;
           break;
          }
          r || (r = a);
         }
         o = o || r;
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0;
       })(c, w, n)),
      (x = (function (e, t, n, r) {
       var i,
        o,
        a,
        s,
        l,
        u = {},
        c = e.dataTypes.slice();
       if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
       for (o = c.shift(); o; )
        if (
         (e.responseFields[o] && (n[e.responseFields[o]] = t),
         !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
         (l = o),
         (o = c.shift()))
        )
         if ("*" === o) o = l;
         else if ("*" !== l && l !== o) {
          if (!(a = u[l + " " + o] || u["* " + o]))
           for (i in u)
            if (
             (s = i.split(" "))[1] === o &&
             (a = u[l + " " + s[0]] || u["* " + s[0]])
            ) {
             !0 === a
              ? (a = u[i])
              : !0 !== u[i] && ((o = s[0]), c.unshift(s[1]));
             break;
            }
          if (!0 !== a)
           if (a && e.throws) t = a(t);
           else
            try {
             t = a(t);
            } catch (e) {
             return {
              state: "parsererror",
              error: a ? e : "No conversion from " + l + " to " + o,
             };
            }
         }
       return { state: "success", data: t };
      })(c, x, w, u)),
      u
       ? (c.ifModified &&
          ((T = w.getResponseHeader("Last-Modified")) &&
           (p.lastModified[i] = T),
          (T = w.getResponseHeader("etag")) && (p.etag[i] = T)),
         204 === e || "HEAD" === c.type
          ? (C = "nocontent")
          : 304 === e
          ? (C = "notmodified")
          : ((C = x.state), (v = x.data), (u = !(y = x.error))))
       : ((y = C), (e || !C) && ((C = "error"), 0 > e && (e = 0))),
      (w.status = e),
      (w.statusText = (t || C) + ""),
      u ? h.resolveWith(d, [v, C, w]) : h.rejectWith(d, [w, C, y]),
      w.statusCode(g),
      (g = void 0),
      s && f.trigger(u ? "ajaxSuccess" : "ajaxError", [w, c, u ? v : y]),
      m.fireWith(d, [w, C]),
      s &&
       (f.trigger("ajaxComplete", [w, c]),
       --p.active || p.event.trigger("ajaxStop")));
    }
    return w;
   },
   getJSON: function (e, t, n) {
    return p.get(e, t, n, "json");
   },
   getScript: function (e, t) {
    return p.get(e, void 0, t, "script");
   },
  }),
  p.each(["get", "post"], function (e, t) {
   p[t] = function (e, n, r, i) {
    return (
     p.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
     p.ajax({ url: e, type: t, dataType: i, data: n, success: r })
    );
   };
  }),
  p.each(
   [
    "ajaxStart",
    "ajaxStop",
    "ajaxComplete",
    "ajaxError",
    "ajaxSuccess",
    "ajaxSend",
   ],
   function (e, t) {
    p.fn[t] = function (e) {
     return this.on(t, e);
    };
   }
  ),
  (p._evalUrl = function (e) {
   return p.ajax({
    url: e,
    type: "GET",
    dataType: "script",
    async: !1,
    global: !1,
    throws: !0,
   });
  }),
  p.fn.extend({
   wrapAll: function (e) {
    if (p.isFunction(e))
     return this.each(function (t) {
      p(this).wrapAll(e.call(this, t));
     });
    if (this[0]) {
     var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
     this[0].parentNode && t.insertBefore(this[0]),
      t
       .map(function () {
        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
         e = e.firstChild;
        return e;
       })
       .append(this);
    }
    return this;
   },
   wrapInner: function (e) {
    return this.each(
     p.isFunction(e)
      ? function (t) {
         p(this).wrapInner(e.call(this, t));
        }
      : function () {
         var t = p(this),
          n = t.contents();
         n.length ? n.wrapAll(e) : t.append(e);
        }
    );
   },
   wrap: function (e) {
    var t = p.isFunction(e);
    return this.each(function (n) {
     p(this).wrapAll(t ? e.call(this, n) : e);
    });
   },
   unwrap: function () {
    return this.parent()
     .each(function () {
      p.nodeName(this, "body") || p(this).replaceWith(this.childNodes);
     })
     .end();
   },
  }),
  (p.expr.filters.hidden = function (e) {
   return (
    (e.offsetWidth <= 0 && e.offsetHeight <= 0) ||
    (!d.reliableHiddenOffsets() &&
     "none" === ((e.style && e.style.display) || p.css(e, "display")))
   );
  }),
  (p.expr.filters.visible = function (e) {
   return !p.expr.filters.hidden(e);
  });
 var _t = /%20/g,
  Mt = /\[\]$/,
  Ft = /\r?\n/g,
  Ot = /^(?:submit|button|image|reset|file)$/i,
  Bt = /^(?:input|select|textarea|keygen)/i;
 function Pt(e, t, n, r) {
  var i;
  if (p.isArray(t))
   p.each(t, function (t, i) {
    n || Mt.test(e)
     ? r(e, i)
     : Pt(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
   });
  else if (n || "object" !== p.type(t)) r(e, t);
  else for (i in t) Pt(e + "[" + i + "]", t[i], n, r);
 }
 (p.param = function (e, t) {
  var n,
   r = [],
   i = function (e, t) {
    (t = p.isFunction(t) ? t() : null == t ? "" : t),
     (r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
   };
  if (
   (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional),
   p.isArray(e) || (e.jquery && !p.isPlainObject(e)))
  )
   p.each(e, function () {
    i(this.name, this.value);
   });
  else for (n in e) Pt(n, e[n], t, i);
  return r.join("&").replace(_t, "+");
 }),
  p.fn.extend({
   serialize: function () {
    return p.param(this.serializeArray());
   },
   serializeArray: function () {
    return this.map(function () {
     var e = p.prop(this, "elements");
     return e ? p.makeArray(e) : this;
    })
     .filter(function () {
      var e = this.type;
      return (
       this.name &&
       !p(this).is(":disabled") &&
       Bt.test(this.nodeName) &&
       !Ot.test(e) &&
       (this.checked || !V.test(e))
      );
     })
     .map(function (e, t) {
      var n = p(this).val();
      return null == n
       ? null
       : p.isArray(n)
       ? p.map(n, function (e) {
          return { name: t.name, value: e.replace(Ft, "\r\n") };
         })
       : { name: t.name, value: n.replace(Ft, "\r\n") };
     })
     .get();
   },
  }),
  (p.ajaxSettings.xhr =
   void 0 !== e.ActiveXObject
    ? function () {
       return (
        (!this.isLocal &&
         /^(get|post|head|put|delete|options)$/i.test(this.type) &&
         zt()) ||
        (function () {
         try {
          return new e.ActiveXObject("Microsoft.XMLHTTP");
         } catch (e) {}
        })()
       );
      }
    : zt);
 var Rt = 0,
  Wt = {},
  $t = p.ajaxSettings.xhr();
 function zt() {
  try {
   return new e.XMLHttpRequest();
  } catch (e) {}
 }
 e.ActiveXObject &&
  p(e).on("unload", function () {
   for (var e in Wt) Wt[e](void 0, !0);
  }),
  (d.cors = !!$t && "withCredentials" in $t),
  ($t = d.ajax = !!$t) &&
   p.ajaxTransport(function (e) {
    var t;
    if (!e.crossDomain || d.cors)
     return {
      send: function (n, r) {
       var i,
        o = e.xhr(),
        a = ++Rt;
       if (
        (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
       )
        for (i in e.xhrFields) o[i] = e.xhrFields[i];
       for (i in (e.mimeType &&
        o.overrideMimeType &&
        o.overrideMimeType(e.mimeType),
       e.crossDomain ||
        n["X-Requested-With"] ||
        (n["X-Requested-With"] = "XMLHttpRequest"),
       n))
        void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
       o.send((e.hasContent && e.data) || null),
        (t = function (n, i) {
         var s, l, u;
         if (t && (i || 4 === o.readyState))
          if ((delete Wt[a], (t = void 0), (o.onreadystatechange = p.noop), i))
           4 !== o.readyState && o.abort();
          else {
           (u = {}),
            (s = o.status),
            "string" == typeof o.responseText && (u.text = o.responseText);
           try {
            l = o.statusText;
           } catch (e) {
            l = "";
           }
           s || !e.isLocal || e.crossDomain
            ? 1223 === s && (s = 204)
            : (s = u.text ? 200 : 404);
          }
         u && r(s, l, u, o.getAllResponseHeaders());
        }),
        e.async
         ? 4 === o.readyState
           ? setTimeout(t)
           : (o.onreadystatechange = Wt[a] = t)
         : t();
      },
      abort: function () {
       t && t(void 0, !0);
      },
     };
   }),
  p.ajaxSetup({
   accepts: {
    script:
     "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
   },
   contents: { script: /(?:java|ecma)script/ },
   converters: {
    "text script": function (e) {
     return p.globalEval(e), e;
    },
   },
  }),
  p.ajaxPrefilter("script", function (e) {
   void 0 === e.cache && (e.cache = !1),
    e.crossDomain && ((e.type = "GET"), (e.global = !1));
  }),
  p.ajaxTransport("script", function (e) {
   if (e.crossDomain) {
    var t,
     n = E.head || p("head")[0] || E.documentElement;
    return {
     send: function (r, i) {
      ((t = E.createElement("script")).async = !0),
       e.scriptCharset && (t.charset = e.scriptCharset),
       (t.src = e.url),
       (t.onload = t.onreadystatechange =
        function (e, n) {
         (n || !t.readyState || /loaded|complete/.test(t.readyState)) &&
          ((t.onload = t.onreadystatechange = null),
          t.parentNode && t.parentNode.removeChild(t),
          (t = null),
          n || i(200, "success"));
        }),
       n.insertBefore(t, n.firstChild);
     },
     abort: function () {
      t && t.onload(void 0, !0);
     },
    };
   }
  });
 var It = [],
  Xt = /(=)\?(?=&|$)|\?\?/;
 p.ajaxSetup({
  jsonp: "callback",
  jsonpCallback: function () {
   var e = It.pop() || p.expando + "_" + vt++;
   return (this[e] = !0), e;
  },
 }),
  p.ajaxPrefilter("json jsonp", function (t, n, r) {
   var i,
    o,
    a,
    s =
     !1 !== t.jsonp &&
     (Xt.test(t.url)
      ? "url"
      : "string" == typeof t.data &&
        !(t.contentType || "").indexOf("application/x-www-form-urlencoded") &&
        Xt.test(t.data) &&
        "data");
   return s || "jsonp" === t.dataTypes[0]
    ? ((i = t.jsonpCallback =
       p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
      s
       ? (t[s] = t[s].replace(Xt, "$1" + i))
       : !1 !== t.jsonp &&
         (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
      (t.converters["script json"] = function () {
       return a || p.error(i + " was not called"), a[0];
      }),
      (t.dataTypes[0] = "json"),
      (o = e[i]),
      (e[i] = function () {
       a = arguments;
      }),
      r.always(function () {
       (e[i] = o),
        t[i] && ((t.jsonpCallback = n.jsonpCallback), It.push(i)),
        a && p.isFunction(o) && o(a[0]),
        (a = o = void 0);
      }),
      "script")
    : void 0;
  }),
  (p.parseHTML = function (e, t, n) {
   if (!e || "string" != typeof e) return null;
   "boolean" == typeof t && ((n = t), (t = !1)), (t = t || E);
   var r = w.exec(e),
    i = !n && [];
   return r
    ? [t.createElement(r[1])]
    : ((r = p.buildFragment([e], t, i)),
      i && i.length && p(i).remove(),
      p.merge([], r.childNodes));
  });
 var Ut = p.fn.load;
 (p.fn.load = function (e, t, n) {
  if ("string" != typeof e && Ut) return Ut.apply(this, arguments);
  var r,
   i,
   o,
   a = this,
   s = e.indexOf(" ");
  return (
   s >= 0 && ((r = e.slice(s, e.length)), (e = e.slice(0, s))),
   p.isFunction(t)
    ? ((n = t), (t = void 0))
    : t && "object" == typeof t && (o = "POST"),
   a.length > 0 &&
    p
     .ajax({ url: e, type: o, dataType: "html", data: t })
     .done(function (e) {
      (i = arguments),
       a.html(r ? p("<div>").append(p.parseHTML(e)).find(r) : e);
     })
     .complete(
      n &&
       function (e, t) {
        a.each(n, i || [e.responseText, t, e]);
       }
     ),
   this
  );
 }),
  (p.expr.filters.animated = function (e) {
   return p.grep(p.timers, function (t) {
    return e === t.elem;
   }).length;
  });
 var Vt = e.document.documentElement;
 function Jt(e) {
  return p.isWindow(e)
   ? e
   : 9 === e.nodeType && (e.defaultView || e.parentWindow);
 }
 (p.offset = {
  setOffset: function (e, t, n) {
   var r,
    i,
    o,
    a,
    s,
    l,
    u = p.css(e, "position"),
    c = p(e),
    d = {};
   "static" === u && (e.style.position = "relative"),
    (s = c.offset()),
    (o = p.css(e, "top")),
    (l = p.css(e, "left")),
    ("absolute" === u || "fixed" === u) && p.inArray("auto", [o, l]) > -1
     ? ((a = (r = c.position()).top), (i = r.left))
     : ((a = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
    p.isFunction(t) && (t = t.call(e, n, s)),
    null != t.top && (d.top = t.top - s.top + a),
    null != t.left && (d.left = t.left - s.left + i),
    "using" in t ? t.using.call(e, d) : c.css(d);
  },
 }),
  p.fn.extend({
   offset: function (e) {
    if (arguments.length)
     return void 0 === e
      ? this
      : this.each(function (t) {
         p.offset.setOffset(this, e, t);
        });
    var t,
     n,
     r = { top: 0, left: 0 },
     i = this[0],
     o = i && i.ownerDocument;
    return o
     ? ((t = o.documentElement),
       p.contains(t, i)
        ? (typeof i.getBoundingClientRect !== F &&
           (r = i.getBoundingClientRect()),
          (n = Jt(o)),
          {
           top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
           left:
            r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0),
          })
        : r)
     : void 0;
   },
   position: function () {
    if (this[0]) {
     var e,
      t,
      n = { top: 0, left: 0 },
      r = this[0];
     return (
      "fixed" === p.css(r, "position")
       ? (t = r.getBoundingClientRect())
       : ((e = this.offsetParent()),
         (t = this.offset()),
         p.nodeName(e[0], "html") || (n = e.offset()),
         (n.top += p.css(e[0], "borderTopWidth", !0)),
         (n.left += p.css(e[0], "borderLeftWidth", !0))),
      {
       top: t.top - n.top - p.css(r, "marginTop", !0),
       left: t.left - n.left - p.css(r, "marginLeft", !0),
      }
     );
    }
   },
   offsetParent: function () {
    return this.map(function () {
     for (
      var e = this.offsetParent || Vt;
      e && !p.nodeName(e, "html") && "static" === p.css(e, "position");

     )
      e = e.offsetParent;
     return e || Vt;
    });
   },
  }),
  p.each(
   { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
   function (e, t) {
    var n = /Y/.test(t);
    p.fn[e] = function (r) {
     return U(
      this,
      function (e, r, i) {
       var o = Jt(e);
       return void 0 === i
        ? o
          ? t in o
            ? o[t]
            : o.document.documentElement[r]
          : e[r]
        : void (o
           ? o.scrollTo(n ? p(o).scrollLeft() : i, n ? i : p(o).scrollTop())
           : (e[r] = i));
      },
      e,
      r,
      arguments.length,
      null
     );
    };
   }
  ),
  p.each(["top", "left"], function (e, t) {
   p.cssHooks[t] = Me(d.pixelPosition, function (e, n) {
    return n
     ? ((n = Le(e, t)), qe.test(n) ? p(e).position()[t] + "px" : n)
     : void 0;
   });
  }),
  p.each({ Height: "height", Width: "width" }, function (e, t) {
   p.each(
    { padding: "inner" + e, content: t, "": "outer" + e },
    function (n, r) {
     p.fn[r] = function (r, i) {
      var o = arguments.length && (n || "boolean" != typeof r),
       a = n || (!0 === r || !0 === i ? "margin" : "border");
      return U(
       this,
       function (t, n, r) {
        var i;
        return p.isWindow(t)
         ? t.document.documentElement["client" + e]
         : 9 === t.nodeType
         ? ((i = t.documentElement),
           Math.max(
            t.body["scroll" + e],
            i["scroll" + e],
            t.body["offset" + e],
            i["offset" + e],
            i["client" + e]
           ))
         : void 0 === r
         ? p.css(t, n, a)
         : p.style(t, n, r, a);
       },
       t,
       o ? r : void 0,
       o,
       null
      );
     };
    }
   );
  }),
  (p.fn.size = function () {
   return this.length;
  }),
  (p.fn.andSelf = p.fn.addBack),
  "function" == typeof define &&
   define.amd &&
   define("jquery", [], function () {
    return p;
   });
 var Yt = e.jQuery,
  Gt = e.$;
 return (
  (p.noConflict = function (t) {
   return e.$ === p && (e.$ = Gt), t && e.jQuery === p && (e.jQuery = Yt), p;
  }),
  typeof t === F && (e.jQuery = e.$ = p),
  p
 );
});
!(function (e) {
 var n = "openerActiveClass",
  t = "left",
  o = "doCollapseAll",
  i = "position",
  a = "trigger",
  s = "disableSelection_dropotron",
  r = "addClass",
  c = "doCollapse",
  f = !1,
  l = "outerWidth",
  d = "removeClass",
  u = "preventDefault",
  h = "dropotron",
  p = "clearTimeout",
  w = "length",
  g = "right",
  v = "speed",
  m = !0,
  b = "parent",
  k = "none",
  x = "stopPropagation",
  C = ":visible",
  y = "absolute",
  O = "click",
  I = "doExpand",
  D = "css",
  E = "center",
  T = "toggle",
  Y = "baseZIndex",
  P = "offsetX",
  M = "alignment",
  A = "children",
  X = "submenuClassPrefix",
  z = "doToggle",
  F = "hover",
  S = "ul",
  Z = "relative",
  j = "opacity",
  H = "z-index",
  Q = "opener",
  R = "find",
  W = "px",
  $ = null,
  _ = "fadeTo",
  q = "offset";
 (e.fn[s] = function () {
  return e(this)
   [D]("user-select", k)
   [D]("-khtml-user-select", k)
   [D]("-moz-user-select", k)
   [D]("-o-user-select", k)
   [D]("-webkit-user-select", k);
 }),
  (e.fn[h] = function (n) {
   var t;
   if (this[w] > 1) for (t = 0; t < this[w]; t++) e(this[t])[h](n);
   return e[h](e.extend({ selectorParent: e(this) }, n));
  }),
  (e[h] = function (k) {
   var B = e.extend(
     {
      selectorParent: $,
      baseZIndex: 1e3,
      menuClass: h,
      expandMode: F,
      hoverDelay: 150,
      hideDelay: 250,
      openerClass: Q,
      openerActiveClass: "active",
      submenuClassPrefix: "level-",
      mode: "fade",
      speed: "fast",
      easing: "swing",
      alignment: t,
      offsetX: 0,
      offsetY: 0,
      globalOffsetY: 0,
      IEOffsetX: 0,
      IEOffsetY: 0,
      noOpenerFade: m,
      detach: m,
      cloneOnDetach: m,
     },
     k
    ),
    G = B.selectorParent,
    J = G[R](S),
    K = e("body"),
    L = e(window),
    N = f,
    U = $,
    V = $;
   G.on(o, function () {
    J[a](c);
   }),
    J.each(function () {
     var o = e(this),
      h = o[b]();
     B.hideDelay > 0 &&
      o.add(h).on("mouseleave", function () {
       window[p](V),
        (V = window.setTimeout(function () {
         o[a](c);
        }, B.hideDelay));
      }),
      o[s]()
       .hide()
       [r](B.menuClass)
       [D](i, y)
       .on("mouseenter", function () {
        window[p](V);
       })
       .on(I, function () {
        var s, u, w, k, x, O, I, A, X, z;
        if (o.is(C)) return f;
        if (
         (window[p](V),
         J.each(function () {
          var n = e(this);
          e.contains(n.get(0), h.get(0)) || n[a](c);
         }),
         (s = h[q]()),
         (u = h[i]()),
         h[b]()[i](),
         (w = h[l]()),
         (k = o[l]()),
         (x = o[D](H) == B[Y]))
        ) {
         switch (
          ((X =
           (O = B.detach ? s : u).top + h.outerHeight() + B.globalOffsetY),
          (I = B[M]),
          o[d](t)[d](g)[d](E),
          B[M])
         ) {
          case g:
           (A = O[t] - k + w) < 0 && ((A = O[t]), (I = t));
           break;
          case E:
           (A = O[t] - Math.floor((k - w) / 2)) < 0
            ? ((A = O[t]), (I = t))
            : A + k > L.width() && ((A = O[t] - k + w), (I = g));
           break;
          case t:
          default:
           (A = O[t]) + k > L.width() && ((A = O[t] - k + w), (I = g));
         }
         o[r](I);
        } else
         switch (
          (h[D](i) == Z || h[D](i) == y
           ? ((X = B.offsetY), (A = -1 * u[t]))
           : ((X = u.top + B.offsetY), (A = 0)),
          B[M])
         ) {
          case g:
           A += -1 * h[b]()[l]() + B[P];
           break;
          case E:
          case t:
          default:
           A += h[b]()[l]() + B[P];
         }
        switch (
         (navigator.userAgent.match(/MSIE ([0-9]+)\./) &&
          RegExp.$1 < 8 &&
          ((A += B.IEOffsetX), (X += B.IEOffsetY)),
         o[D](t, A + W)[D]("top", X + W),
         o[D](j, "0.01").show(),
         (z = f),
         (A = h[D](i) == Z || h[D](i) == y ? -1 * u[t] : 0),
         o[q]()[t] < 0
          ? ((A += h[b]()[l]() - B[P]), (z = m))
          : o[q]()[t] + k > L.width() &&
            ((A += -1 * h[b]()[l]() - B[P]), (z = m)),
         z && o[D](t, A + W),
         o.hide()[D](j, "1"),
         B.mode)
        ) {
         case "zoom":
          (N = m),
           h[r](B[n]),
           o.animate({ width: T, height: T }, B[v], B.easing, function () {
            N = f;
           });
          break;
         case "slide":
          (N = m),
           h[r](B[n]),
           o.animate({ height: T }, B[v], B.easing, function () {
            N = f;
           });
          break;
         case "fade":
          (N = m),
           x && !B.noOpenerFade
            ? ((z =
               "slow" == B[v]
                ? 80
                : "fast" == B[v]
                ? 40
                : Math.floor(B[v] / 2)),
              h[_](z, 0.01, function () {
               h[r](B[n]),
                h[_](B[v], 1),
                o.fadeIn(B[v], function () {
                 N = f;
                });
              }))
            : (h[r](B[n]),
              h[_](B[v], 1),
              o.fadeIn(B[v], function () {
               N = f;
              }));
          break;
         case "instant":
         default:
          h[r](B[n]), o.show();
        }
        return f;
       })
       .on(c, function () {
        return o.is(C)
         ? (o.hide(), h[d](B[n]), o[R]("." + B[n])[d](B[n]), o[R](S).hide(), f)
         : f;
       })
       .on(z, function () {
        return o.is(C) ? o[a](c) : o[a](I), f;
       }),
      h[s]()
       [r](Q)
       [D]("cursor", "pointer")
       .on(O, function (e) {
        N || (e[u](), e[x](), o[a](z));
       }),
      B.expandMode == F &&
       h[F](
        function () {
         N ||
          (U = window.setTimeout(function () {
           o[a](I);
          }, B.hoverDelay));
        },
        function () {
         window[p](U);
        }
       );
    }),
    J[R]("a")
     [D]("display", "block")
     .on(O, function (n) {
      N || (e(this).attr("href")[w] < 1 && n[u]());
     }),
    G[R]("li")
     [D]("white-space", "nowrap")
     .each(function () {
      var n = e(this),
       t = n[A]("a"),
       i = n[A](S);
      t.on(O, function (n) {
       e(this).attr("href")[w] < 1 ? n[u]() : n[x]();
      }),
       t[w] > 0 &&
        0 == i[w] &&
        n.on(O, function (e) {
         N || (G[a](o), e[x]());
        });
     }),
    G[A]("li").each(function () {
     var n,
      t,
      o,
      i = e(this)[A](S);
     if (i[w] > 0)
      for (
       B.detach &&
        (B.cloneOnDetach &&
         i.clone().attr("class", "").hide().appendTo(i[b]()),
        i.detach().appendTo(K)),
        n = B[Y],
        t = 1,
        o = i;
       o[w] > 0;
       t++
      )
       o[D](H, n++),
        B[X] && o[r](B[X] + (n - 1 - B[Y])),
        (o = o[R]("> li > ul"));
    }),
    L.on("scroll", function () {
     G[a](o);
    }).on("keypress", function (e) {
     !N && 27 == e.keyCode && (e[u](), G[a](o));
    }),
    K.on(O, function () {
     N || G[a](o);
    });
  });
})(jQuery);
var skel = (function () {
 var e = "config",
  t = "breakpoints",
  n = "iterate",
  i = "elements",
  o = "getCachedElement",
  r = "stateId",
  a = "getElementsByClassName",
  c = !1,
  s = "stateElements",
  l = "cacheElement",
  d = "deviceType",
  u = "length",
  f = "getElementsByTagName",
  p = "parentNode",
  h = null,
  m = "match",
  g = "config_breakpoint",
  w = "orientationChange",
  b = "newInline",
  v = "insertBefore",
  y = "vars",
  k = "object",
  x = "cache",
  E = "lockState",
  z = "!important",
  M = "head",
  A = "containers",
  R = "createElement",
  S = "_skel_isReversed",
  C = "className",
  I = "locations",
  L = "extend",
  O = "}",
  _ = " 0 0 ",
  T = "replace",
  q = "indexOf",
  P = !0,
  j = "onorientationchange",
  $ = "isArray",
  N = "location",
  D = "DOMReady",
  F = "devicePixelRatio",
  V = "push",
  G = "addEventListener",
  W = "{display:none!important}",
  B = "parseMeasurement",
  U = "registerLocation",
  X = "padding-top:0!important",
  H = "defaults",
  J = "events",
  K = "substring",
  Q = "^head",
  Y = "hasOwnProperty",
  Z = "android",
  ee = "viewportWidth",
  te = "DOMContentLoaded",
  ne = "getDevicePixelRatio",
  ie = "string",
  oe = "IEVersion",
  re = "matchMedia",
  ae = "states",
  ce = "_skel_attach",
  se = "ios",
  le = "ignoreOrientation",
  de = "placeholder",
  ue = "removeEventListener",
  fe = "padding-top:",
  pe = "attached",
  he = "resize",
  me = "documentElement",
  ge = ".row",
  we = "_skel_placeholder",
  be = "href",
  ve = "stateChange",
  ye = "firstChild",
  ke = "querySelectorAll",
  xe = "windows",
  Ee = "getViewportWidth",
  ze = "previousSibling",
  Me = "prototype",
  Ae = "gutters",
  Re = "innerHTML",
  Se = "text/css",
  Ce = "html",
  Ie = "padding:",
  Le = "attachElements",
  Oe = "priority",
  _e = "attachElement",
  Te = ".\\3$1 ",
  qe = "collapse",
  Pe = "onresize",
  je = "readyState",
  $e = {
   config: {
    containers: 960,
    pollOnce: c,
    pollOnLock: c,
    prefix: h,
    preload: c,
    reset: c,
    perpetualLock: P,
    domainLock: P,
    ignoreOrientation: c,
    RTL: c,
    grid: { collapse: c, gutters: 40 },
    breakpoints: { global: { href: c, range: "*" } },
    events: {},
   },
   isInit: c,
   lockState: h,
   stateId: "",
   me: h,
   breakpoints: [],
   breakpointList: [],
   events: [],
   plugins: {},
   cache: { elements: {}, states: {}, stateElements: {} },
   locations: { html: h, head: h, body: h },
   vars: {},
   lsc: "_skel_lock",
   sd: " ",
   css: {
    n: 'article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden],template{display:none}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}a{background:transparent}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{font-size:2em;margin:.67em 0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}mark{background:#ff0;color:#000}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre-wrap}q{quotes:"C" "D" "8" "9"}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:0}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0}button,input{line-height:normal}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}',
    r: "html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}body{-webkit-text-size-adjust:none}",
    bm: "*,*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}",
   },
   defaults: {
    breakpoint: { config: h, elements: h, test: h },
    config_breakpoint: {
     containers: "100%",
     grid: {},
     href: "",
     range: "",
     viewport: "",
     lockViewport: c,
     viewportWidth: c,
    },
   },
   DOMReady: h,
   getElementsByClassName: h,
   indexOf: h,
   isArray: h,
   iterate: h,
   extend: function (e, t) {
    $e[n](t, function (n) {
     $e[$](t[n])
      ? ($e[$](e[n]) || (e[n] = []), $e[L](e[n], t[n]))
      : typeof t[n] == k
      ? (typeof e[n] != k && (e[n] = {}), $e[L](e[n], t[n]))
      : (e[n] = t[n]);
    });
   },
   parseMeasurement: function (e) {
    var t;
    if (typeof e !== ie) t = [e, "px"];
    else if ("fluid" == e) t = [100, "%"];
    else {
     var n;
     t =
      (n = e[m](/([0-9\.]+)([^\s]*)/))[u] < 3 || !n[2]
       ? [parseFloat(e), "px"]
       : [parseFloat(n[1]), n[2]];
    }
    return t;
   },
   getArray: function (e) {
    return $e[$](e) ? e : [e];
   },
   getDevicePixelRatio: function () {
    var e = navigator.userAgent;
    if (
     $e[y][d] == se ||
     "mac" == $e[y][d] ||
     $e[y][d] == xe ||
     ($e[y][d] == Z && e[m](/Safari\/([0-9]+)/) && parseInt(RegExp.$1) >= 537)
    )
     return 1;
    if (void 0 !== window[F] && !e[m](/(Firefox; Mobile)/)) return window[F];
    if (window[re]) {
     if (
      window[re](
       "(-webkit-min-device-pixel-ratio: 2),(min--moz-device-pixel-ratio: 2),(-o-min-device-pixel-ratio: 2/1),(min-resolution: 2dppx)"
      ).matches
     )
      return 2;
     if (
      window[re](
       "(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)"
      ).matches
     )
      return 1.5;
    }
    return 1;
   },
   getLevel: function (e) {
    return "boolean" == typeof e ? (e ? 1 : 0) : parseInt(e);
   },
   getViewportWidth: function () {
    var t, n, i;
    return (
     (t = document[me].clientWidth),
     (n = void 0 !== window.orientation ? Math.abs(window.orientation) : c),
     (i = $e[ne]()),
     screen.width < t && (t = screen.width),
     n !== c &&
      (t = $e[e][le]
       ? Math.min(screen.width, screen.height)
       : 90 === n
       ? Math.max(screen.width, screen.height)
       : Math.min(screen.width, screen.height)),
     (t /= i)
    );
   },
   unlock: function () {
    ($e[E] = h),
     (document.cookie =
      $e.lsc +
      "=;expires=Thu, 1 Jan 1970 12:00:00 UTC; path=" +
      ($e[e].domainLock ? "/" : window[N].pathname)),
     $e[e].pollOnLock ? $e.poll() : window[N].reload();
   },
   lock: function (t) {
    ($e[E] = t),
     (document.cookie =
      $e.lsc +
      "=" +
      t +
      ";expires=" +
      ($e[e].perpetualLock ? "Thu, 1 Jan 2077 12:00:00 UTC" : 0) +
      "; path=" +
      ($e[e].domainLock ? "/" : window[N].pathname)),
     $e[e].pollOnLock ? $e.poll() : window[N].reload();
   },
   getLock: function () {
    return $e[E];
   },
   isLocked: function () {
    return !!$e[E];
   },
   hasActive: function (e) {
    var t = c;
    return (
     $e[n](e, function (n) {
      t = t || $e.isActive(e[n]);
     }),
     t
    );
   },
   isActive: function (e) {
    return -1 !== $e[q]($e[r], $e.sd + e);
   },
   wasActive: function (e) {
    return -1 !== $e[q]($e[y].lastStateId, $e.sd + e);
   },
   canUse: function (e) {
    return $e[t][e] && $e[t][e].test($e[Ee]());
   },
   useActive: function (e) {
    if (typeof e !== k) return e;
    var t = h;
    return (
     $e[n](e, function (n) {
      t === h && $e.isActive(n) && (t = e[n]);
     }),
     t
    );
   },
   unreverseRows: function () {
    var e = $e[a]("row");
    $e[n](e, function (t) {
     if (t !== u) {
      var n = e[t];
      if (n[S]) {
       var i,
        o = n.children;
       for (i = 1; i < o[u]; i++) n[v](o[i], o[0]);
       n[S] = c;
      }
     }
    });
   },
   reverseRows: function (e) {
    var t = $e[a]("row");
    $e[n](t, function (n) {
     if (n !== u) {
      var i = t[n];
      if (
       !(
        i[S] ||
        (e > 0 &&
         i[C][m](/\bno-collapse-([0-9])\b/) &&
         parseInt(RegExp.$1) >= e)
       )
      ) {
       var o,
        r = i.children;
       for (o = 1; o < r[u]; o++) i[v](r[o], r[0]);
       i[S] = P;
      }
     }
    });
   },
   bind: function (e, t) {
    $e[J][e] || ($e[J][e] = []), $e[J][e][V](t);
   },
   trigger: function (e) {
    $e[J][e] &&
     0 != $e[J][e][u] &&
     $e[n]($e[J][e], function (t) {
      $e[J][e][t]();
     });
   },
   onStateChange: function (e) {
    $e.bind(ve, e), $e.isInit && e();
   },
   registerLocation: function (e, t) {
    (t[ce] =
     e == M
      ? function (e, t) {
         t
          ? this[v](e, this[ye])
          : this === $e.me[p]
          ? this[v](e, $e.me)
          : this.appendChild(e);
        }
      : function (e, t) {
         t ? this[v](e, this[ye]) : this.appendChild(e);
        }),
     ($e[I][e] = t);
   },
   addCachedElementToBreakpoint: function (e, n) {
    $e[t][e] && $e[t][e][i][V](n);
   },
   addCachedElementToState: function (e, t) {
    $e[x][s][e] ? $e[x][s][e][V](t) : ($e[x][s][e] = [t]);
   },
   cacheElement: function (e, t, n, o) {
    return (
     t[p] && t[p].removeChild(t),
     ($e[x][i][e] = {
      id: e,
      object: t,
      location: n,
      priority: o,
      attached: c,
     })
    );
   },
   getCachedElement: function (e) {
    return $e[x][i][e] ? $e[x][i][e] : h;
   },
   detachElement: function (e) {
    var t,
     n = $e[x][i][e];
    n[pe] &&
     (!(t = n[k])[p] ||
      (t[p] && !t[p].tagName) ||
      (t[p].removeChild(t), (n[pe] = c), n.onDetach && n.onDetach()));
   },
   detachAllElements: function (e) {
    var t = {};
    $e[n](e, function (n) {
     t[e[n].id] = P;
    }),
     $e[n]($e[x][i], function (e) {
      e in t || $e.detachElement(e);
     });
   },
   attachElement: function (e) {
    var t = e[N],
     n = c;
    return e[pe]
     ? P
     : ("^" == t[0] && ((t = t[K](1)), (n = P)),
       t in $e[I]
        ? ($e[I][t][ce](e[k], n), (e[pe] = P), e.onAttach && e.onAttach(), P)
        : c);
   },
   attachElements: function (e) {
    var t = [],
     i = [];
    $e[n](e, function (n) {
     t[e[n][Oe]] || (t[e[n][Oe]] = []), t[e[n][Oe]][V](e[n]);
    }),
     $e[n](t, function (e) {
      0 != t[e][u] &&
       $e[n](t[e], function (n) {
        $e[_e](t[e][n]) || i[V](t[e][n]);
       });
     }),
     i[u] > 0 &&
      $e[D](function () {
       $e[n](i, function (e) {
        $e[_e](i[e]);
       });
      });
   },
   poll: function () {
    var e,
     i = "";
    (e = $e[E] ? $e[E] : $e[Ee]()),
     ($e[y][ee] = e),
     ($e[y][F] = $e[ne]()),
     $e[n]($e[t], function (n) {
      $e[t][n].test(e) && (i += $e.sd + n);
     }),
     "" === i && (i = $e.sd),
     i !== $e[r] &&
      (($e[I][Ce][C] = $e[I][Ce][C][T]($e[r], "")),
      $e.changeState(i),
      ($e[I][Ce][C] = $e[I][Ce][C] + $e[r]));
   },
   updateState: function () {
    var e,
     o,
     a = [];
    $e[r] != $e.sd &&
     ((e = $e[r][K](1).split($e.sd)),
     $e[n](e, function (c) {
      0 != (o = $e[t][e[c]])[i][u] &&
       $e[n](o[i], function (e) {
        $e[x][ae][$e[r]][i][V](o[i][e]), a[V](o[i][e]);
       });
     }),
     $e[x][s][$e[r]] &&
      ($e[n]($e[x][s][$e[r]], function (e) {
       $e[x][ae][$e[r]][i][V]($e[x][s][$e[r]][e]), a[V]($e[x][s][$e[r]][e]);
      }),
      ($e[x][s][$e[r]] = [])),
     a[u] > 0 && $e[Le](a));
   },
   changeState: function (d) {
    var f, h, w, k, E, R, S;
    if ((($e[y].lastStateId = $e[r]), ($e[r] = d), $e[x][ae][$e[r]]))
     h = $e[x][ae][$e[r]];
    else {
     switch (
      (($e[x][ae][$e[r]] = { config: {}, elements: [], values: {} }),
      (h = $e[x][ae][$e[r]]),
      (f = $e[r] === $e.sd ? [] : $e[r][K](1).split($e.sd)),
      $e[L](h[e], $e[H][g]),
      $e[n](f, function (n) {
       $e[L](h[e], $e[t][f[n]][e]);
      }),
      $e[e].reset)
     ) {
      case "full":
       (E = "iR"),
        (k = $e[o](E)) || (k = $e[l](E, $e[b]($e.css.r), Q, 2)),
        h[i][V](k);
       break;
      case "normalize":
       (E = "iN"),
        (k = $e[o](E)) || (k = $e[l](E, $e[b]($e.css.n), Q, 2)),
        h[i][V](k);
     }
     var I, P, j, $, N, F, G, U, J, Z, te, ne;
     if (
      ((E = "iBM"),
      (k = $e[o](E)) || (k = $e[l](E, $e[b]($e.css.bm), Q, 1)),
      h[i][V](k),
      (R = h[e].viewport),
      h[e][ee]
       ? (R += ("" != R ? "," : "") + "width=" + h[e][ee])
       : h[e].lockViewport &&
         (R += ("" != R ? "," : "") + "width=device-width"),
      h[e].lockViewport &&
       (R +=
        ("" != R ? "," : "") +
        "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0"),
      "" != R &&
       ((E = "mV" + $e[r]),
       (k = $e[o](E)) || (k = $e[l](E, $e.newMeta("viewport", R), Q, 4)),
       h[i][V](k)),
      $e[y][oe] >= 10 &&
       ((E = "mVIE" + $e[r]),
       (k = $e[o](E)) ||
        (k = $e[l](E, $e[b]("@-ms-viewport{width: device-width}"), Q, 3)),
       h[i][V](k)),
      (I = (w = $e[B](h[e][A]))[0]),
      (P = w[1]),
      (h.values[A] = I + P),
      (E = "iC" + h.values[A]),
      !(k = $e[o](E)))
     )
      (j = 0.75 * I + P),
       ($ = I + P),
       (N = 1.25 * I + P),
       (k = $e[l](
        E,
        $e[b](
         "body{min-width:" +
          $ +
          O +
          ".container{margin-left:auto;margin-right:auto;width:" +
          $ +
          O +
          ".container.small{width:" +
          j +
          O +
          ".container.big{width:100%;max-width:" +
          N +
          ";min-width:" +
          $ +
          O
        ),
        M,
        3
       ));
     if (
      (h[i][V](k),
      (E = "iG"),
      (k = $e[o](E)) ||
       (k = $e[l](
        E,
        $e[b](
         ".\\31 2u{width:100%}.\\31 1u{width:91.6666666667%}.\\31 0u{width:83.3333333333%}.\\39 u{width:75%}.\\38 u{width:66.6666666667%}.\\37 u{width:58.3333333333%}.\\36 u{width:50%}.\\35 u{width:41.6666666667%}.\\34 u{width:33.3333333333%}.\\33 u{width:25%}.\\32 u{width:16.6666666667%}.\\31 u{width:8.3333333333%}.\\-11u{margin-left:91.6666666667%}.\\-10u{margin-left:83.3333333333%}.\\-9u{margin-left:75%}.\\-8u{margin-left:66.6666666667%}.\\-7u{margin-left:58.3333333333%}.\\-6u{margin-left:50%}.\\-5u{margin-left:41.6666666667%}.\\-4u{margin-left:33.3333333333%}.\\-3u{margin-left:25%}.\\-2u{margin-left:16.6666666667%}.\\-1u{margin-left:8.3333333333%}"
        ),
        M,
        3
       )),
      h[i][V](k),
      (E = "iGR"),
      (k = $e[o](E)) ||
       (k = $e[l](
        E,
        $e[b](
         ".row>*{float:left}.row:after{content:'';display:block;clear:both;height:0}.row:first-child>*{padding-top:0!important}"
        ),
        M,
        3
       )),
      h[i][V](k),
      (E = "iGG" + h[e].grid[Ae]),
      !(k = $e[o](E)))
     )
      (U = (F = (w = $e[B](h[e].grid[Ae]))[0]) + (G = w[1])),
       (J = F / 2 + G),
       (Z = F / 4 + G),
       (te = 1.5 * F + G),
       (ne = 2 * F + G),
       (k = $e[l](
        "iGG" + h[e].grid[Ae],
        $e[b](
         ".row>*{padding-left:" +
          U +
          O +
          ".row+.row>*{padding:" +
          U +
          _ +
          U +
          O +
          ".row{margin-left:-" +
          U +
          O +
          ".row.flush>*{padding-left:0}.row+.row.flush>*{padding:0}.row.flush{margin-left:0}.row.half>*{padding-left:" +
          J +
          O +
          ".row+.row.half>*{padding:" +
          J +
          _ +
          J +
          O +
          ".row.half{margin-left:-" +
          J +
          O +
          ".row.quarter>*{padding-left:" +
          Z +
          O +
          ".row+.row.quarter>*{padding:" +
          Z +
          _ +
          Z +
          O +
          ".row.quarter{margin-left:-" +
          Z +
          O +
          ".row.oneandhalf>*{padding-left:" +
          te +
          O +
          ".row+.row.oneandhalf>*{padding:" +
          te +
          _ +
          te +
          O +
          ".row.oneandhalf{margin-left:-" +
          te +
          O +
          ".row.double>*{padding-left:" +
          ne +
          O +
          ".row+.row.double>*{padding:" +
          ne +
          _ +
          ne +
          O +
          ".row.double{margin-left:-" +
          ne +
          O
        ),
        M,
        3
       ));
     if ((h[i][V](k), h[e].grid[qe])) {
      var ie = $e.getLevel(h[e].grid[qe]);
      if (((E = "iGC" + ie + "-" + h.values[A]), !(k = $e[o](E)))) {
       switch (((R = ":not(.no-collapse)"), ie)) {
        case 4:
         break;
        case 3:
         R += ":not(.no-collapse-3)";
         break;
        case 2:
         R += ":not(.no-collapse-2):not(.no-collapse-3)";
         break;
        case 1:
        default:
         R += ":not(.no-collapse-1):not(.no-collapse-2):not(.no-collapse-3)";
       }
       (w = $e[B](h[e].grid[Ae])),
        (S = w[0] + w[1]),
        (k = $e[l](
         E,
         $e[b](
          ".row>*{padding-left:" +
           S +
           z +
           O +
           ".row>*:first-child{" +
           X +
           O +
           ".row+.row>*{" +
           Ie +
           S +
           _ +
           S +
           z +
           O +
           ".row{margin-left:-" +
           S +
           z +
           O +
           ge +
           R +
           ">*{float:none!important;width:100%!important;margin-left:0!important" +
           O +
           ".row:not(.flush)" +
           R +
           ":first-child>*{" +
           fe +
           S +
           z +
           O +
           ge +
           R +
           ":first-child>:first-child {" +
           X +
           O +
           ge +
           R +
           ">*{" +
           fe +
           S +
           O +
           ge +
           R +
           ">*:first-child{padding-top:0" +
           O +
           ".row+.row" +
           R +
           ">*{" +
           Ie +
           S +
           _ +
           S +
           O +
           ".row.flush>*{padding:0!important" +
           O +
           ".row.flush{margin-left:0px!important" +
           O +
           ".container{max-width:none!important;min-width:0!important;width:" +
           h[e][A] +
           z +
           O
         ),
         M,
         3
        ));
      }
      h[i][V](k);
     }
     if (((E = "iCd" + $e[r]), !(k = $e[o](E)))) {
      (R = []),
       (S = []),
       $e[n]($e[t], function (e) {
        -1 !== $e[q](f, e) ? R[V](".not-" + e) : S[V](".only-" + e);
       });
      var re =
       (R[u] > 0 ? R.join(",") + W : "") + (S[u] > 0 ? S.join(",") + W : "");
      (k = $e[l](E, $e[b](re[T](/\.([0-9])/, Te)), M, 3)), h[i][V](k);
     }
     $e[n](f, function (r) {
      $e[t][f[r]][e][be] &&
       ((E = "ss" + f[r]),
       (k = $e[o](E)) ||
        (k = $e[l](E, $e.newStyleSheet($e[t][f[r]][e][be]), M, 5)),
       h[i][V](k)),
       $e[t][f[r]][i][u] > 0 &&
        $e[n]($e[t][f[r]][i], function (e) {
         h[i][V]($e[t][f[r]][i][e]);
        });
     }),
      $e[x][s][$e[r]] &&
       ($e[n]($e[x][s][$e[r]], function (e) {
        h[i][V]($e[x][s][$e[r]][e]);
       }),
       ($e[x][s][$e[r]] = []));
    }
    $e.detachAllElements(h[i]),
     $e[Le](h[i]),
     $e[D](function () {
      var t,
       i,
       o = $e.getLevel(h[e].grid[qe]);
      $e[e].RTL && ($e.unreverseRows(), o > 0 && $e.reverseRows(o)),
       $e[y][oe] > 8 &&
        ((i = "_skel_cell_important_placeholder"),
        (t = $e[a]("skel-cell-important")) &&
         t[u] > 0 &&
         $e[n](t, function (e) {
          if (e !== u) {
           var n = t[e],
            r = n[p];
           if (r)
            if (
             (r[C][m](/no-collapse-([0-9])/)
              ? parseInt(RegExp.$1)
              : r[C][m](/no-collapse/)
              ? 100
              : 0) < o
            ) {
             if (n[Y](i) && n[i] !== c) return;
             for (r = n[ze]; r && "#text" == r.nodeName; ) r = r[ze];
             if (!r) return;
             n[p][v](n, n[p][ye]), (n[i] = r);
            } else
             n[Y](i) || (n[i] = c),
              (r = n[i]) !== c && (n[p][v](n, r.nextSibling), (n[i] = c));
          }
         }));
     }),
     ($e[y].state = $e[x][ae][$e[r]]),
     ($e[y][r] = $e[r]),
     $e.trigger(ve);
   },
   newMeta: function (e, t) {
    var n = document[R]("meta");
    return (n.name = e), (n.content = t), n;
   },
   newStyleSheet: function (e) {
    var t = document[R]("link");
    return (t.rel = "stylesheet"), (t.type = Se), (t[be] = e), t;
   },
   newInline: function (e) {
    var t;
    return (
     $e[y][oe] <= 8
      ? ((t = document[R]("span"))[Re] =
         '&nbsp;<style type="text/css">' + e + "</style>")
      : (((t = document[R]("style")).type = Se), (t[Re] = e)),
     t
    );
   },
   newDiv: function (e) {
    var t = document[R]("div");
    return (t[Re] = e), t;
   },
   registerPlugin: function (e, t) {
    if (!t) return c;
    ($e.plugins[e] = t), (t._ = this);
   },
   initPlugin: function (t, n) {
    typeof n == k && $e[L](t[e], n), t.init();
   },
   initConfig: function (o) {
    function r(e, t) {
     var n;
     return (
      typeof t != ie &&
       (n = function (e) {
        return c;
       }),
      "*" == t
       ? (n = function (e) {
          return P;
         })
       : "-" == t.charAt(0)
       ? ((a[e] = parseInt(t[K](1))),
         (n = function (t) {
          return t <= a[e];
         }))
       : "-" == t.charAt(t[u] - 1)
       ? ((a[e] = parseInt(t[K](0, t[u] - 1))),
         (n = function (t) {
          return t >= a[e];
         }))
       : -1 != $e[q](t, "-")
       ? ((t = t.split("-")),
         (a[e] = [parseInt(t[0]), parseInt(t[1])]),
         (n = function (t) {
          return t >= a[e][0] && t <= a[e][1];
         }))
       : ((a[e] = parseInt(t)),
         (n = function (t) {
          return t == a[e];
         })),
      n
     );
    }
    var a = [],
     s = [];
    typeof o == k && (o[t] && ($e[e][t] = {}), $e[L]($e[e], o)),
     $e[L]($e[H][g].grid, $e[e].grid),
     ($e[H][g][A] = $e[e][A]),
     $e[n]($e[e][t], function (n) {
      var o,
       a = {};
      $e[L](a, $e[e][t][n]),
       be in a || (a[be] = $e[H][g][be]),
       "range" in a || (a.range = $e[H][g].range),
       ($e[e][t][n] = a),
       (o = {}),
       $e[L](o, $e[H].breakpoint),
       (o[e] = $e[e][t][n]),
       (o.test = r(n, o[e].range)),
       (o[i] = []),
       $e[e].prefix &&
        o[e][be] !== c &&
        (o[e][be] = $e[e].prefix + "-" + n + ".css"),
       "" === o[e][be] && (o[e][be] = c),
       $e[e].preload && o[e][be] && s[V](o[e][be]),
       ($e[t][n] = o),
       $e.breakpointList[V](n);
     }),
     $e[n]($e[e][J], function (t) {
      $e.bind(t, $e[e][J][t]);
     }),
     s[u] > 0 &&
      "file:" != window[N].protocol &&
      $e[D](function () {
       document[f](M)[0];
       var e = new XMLHttpRequest();
       $e[n](s, function (t) {
        e.open("GET", s[t], c), e.send("");
       });
      });
   },
   initEvents: function () {
    $e[e].pollOnce ||
     ($e.bind(he, function () {
      $e.poll();
     }),
     $e[e][le] ||
      $e.bind(w, function () {
       $e.poll();
      })),
     $e[y][d] == se &&
      $e[D](function () {
       $e.bind(w, function () {
        var e = document[f]("input");
        $e[n](e, function (t) {
         (e[t][we] = e[t][de]), (e[t][de] = "");
        }),
         window.setTimeout(function () {
          $e[n](e, function (t) {
           e[t][de] = e[t][we];
          });
         }, 100);
       });
      }),
     window[Pe] && $e.bind(he, window[Pe]),
     (window[Pe] = function () {
      $e.trigger(he);
     }),
     window[j] && $e.bind(w, window[j]),
     (window[j] = function () {
      $e.trigger(w);
     });
   },
   initUtilityMethods: function () {
    document[G]
     ? ($e[D] = (function () {
        var e,
         t = [],
         n = document,
         i = te,
         o = /^loaded|^c/.test(n[je]);
        return (
         n[G](
          i,
          (e = function () {
           n[ue](i, e),
            (function (e) {
             for (o = 1; (e = t.shift()); ) e();
            })();
          })
         ),
         function (e) {
          o ? e() : t[V](e);
         }
        );
       })())
     : ($e[D] = (function (e) {
        function t(e) {
         for (u = 1; (e = i.shift()); ) e();
        }
        var n,
         i = [],
         o = document,
         r = o[me],
         a = r.doScroll,
         c = te,
         s = G,
         l = "onreadystatechange",
         d = je,
         u = (a ? /^loaded|^c/ : /^loaded|c/).test(o[d]);
        return (
         o[s] &&
          o[s](
           c,
           (n = function () {
            o[ue](c, n, !1), t();
           }),
           !1
          ),
         a &&
          o.attachEvent(
           l,
           (n = function () {
            /^c/.test(o[d]) && (o.detachEvent(l, n), t());
           })
          ),
         (e = a
          ? function (t) {
             self != top
              ? u
                ? t()
                : i[V](t)
              : (function () {
                 try {
                  r.doScroll("left");
                 } catch (n) {
                  return setTimeout(function () {
                   e(t);
                  }, 50);
                 }
                 t();
                })();
            }
          : function (e) {
             u ? e() : i[V](e);
            })
        );
       })()),
     document[a]
      ? ($e[a] = function (e) {
         return document[a](e);
        })
      : ($e[a] = function (e) {
         var t = document;
         return t[ke]
          ? t[ke](("." + e[T](" ", " ."))[T](/\.([0-9])/, Te))
          : [];
        }),
     Array[Me][q]
      ? ($e[q] = function (e, t) {
         return e[q](t);
        })
      : ($e[q] = function (e, t) {
         if (typeof e == ie) return e[q](t);
         var n,
          i,
          o = t || 0;
         if (!this) throw new TypeError();
         if (0 === (i = this[u]) || o >= i) return -1;
         for (o < 0 && (o = i - Math.abs(o)), n = o; n < i; n++)
          if (this[n] === e) return n;
         return -1;
        }),
     Array[$]
      ? ($e[$] = function (e) {
         return Array[$](e);
        })
      : ($e[$] = function (e) {
         return "[object Array]" === Object[Me].toString.call(e);
        }),
     Object.keys
      ? ($e[n] = function (e, t) {
         if (!e) return [];
         var n,
          i = Object.keys(e);
         for (n = 0; i[n]; n++) t(i[n]);
        })
      : ($e[n] = function (e, t) {
         if (!e) return [];
         var n;
         for (n in e) Object[Me][Y].call(e, n) && t(n);
        });
   },
   initAPI: function () {
    var e,
     t,
     i = navigator.userAgent;
    switch (
     (($e[y][oe] = i[m](/MSIE ([0-9]+)\./) ? RegExp.$1 : 99),
     (e = "other"),
     i[m](/Firefox/)
      ? (e = "firefox")
      : i[m](/Chrome/)
      ? (e = "chrome")
      : i[m](/Safari/) && !i[m](/Chrome/)
      ? (e = "safari")
      : i[m](/(OPR|Opera)/)
      ? (e = "opera")
      : i[m](/MSIE/) && (e = "ie"),
     ($e[y].browser = e),
     ($e[y][d] = "other"),
     (t = {
      ios: "(iPad|iPhone|iPod)",
      android: "Android",
      mac: "Macintosh",
      wp: "Windows Phone",
      windows: "Windows NT",
     }),
     $e[n](t, function (e) {
      i[m](new RegExp(t[e], "g")) && ($e[y][d] = e);
     }),
     $e[y][d])
    ) {
     case se:
      i[m](/([0-9_]+) like Mac OS X/),
       (e = parseFloat(RegExp.$1[T]("_", ".")[T]("_", "")));
      break;
     case Z:
      i[m](/Android ([0-9\.]+)/), (e = parseFloat(RegExp.$1));
      break;
     case "mac":
      i[m](/Mac OS X ([0-9_]+)/),
       (e = parseFloat(RegExp.$1[T]("_", ".")[T]("_", "")));
      break;
     case "wp":
      i[m](/IEMobile\/([0-9\.]+)/), (e = parseFloat(RegExp.$1));
      break;
     case xe:
      i[m](/Windows NT ([0-9\.]+)/), (e = parseFloat(RegExp.$1));
      break;
     default:
      e = 99;
    }
    ($e[y].deviceVersion = e),
     ($e[y].isTouch =
      "wp" == $e[y][d]
       ? navigator.msMaxTouchPoints > 0
       : "ontouchstart" in window),
     ($e[y].isMobile = "wp" == $e[y][d] || $e[y][d] == Z || $e[y][d] == se),
     (e = document.cookie.split(";")),
     $e[n](e, function (t) {
      var n = e[t].split("=");
      n[0][T](/^\s+|\s+$/g, "") != $e.lsc || ($e[E] = n[1]);
     });
   },
   init: function (e, t) {
    $e.initUtilityMethods(),
     $e.initAPI(),
     $e.initConfig(e),
     $e[U](Ce, document[f](Ce)[0]),
     $e[U](M, document[f](M)[0]),
     $e[D](function () {
      $e[U]("body", document[f]("body")[0]);
     }),
     $e.initEvents(),
     $e.poll(),
     $e[n]($e.plugins, function (e) {
      $e.initPlugin($e.plugins[e], typeof t == k && e in t ? t[e] : h);
     }),
     ($e.isInit = P);
   },
  },
  Ne = document[f]("script");
 return ($e.me = Ne[Ne[u] - 1]), $e;
})();
skel.registerPlugin(
 "layers",
 (function (e) {
  function t(e, t, s) {
   var a, r;
   (this.id = e),
    (this.index = s),
    (this[n] = {
     breakpoints: E,
     states: E,
     position: E,
     side: E,
     animation: we,
     orientation: we,
     width: 0,
     height: 0,
     zIndex: this.index,
     html: "",
     hidden: j,
     exclusive: We,
     resetScroll: We,
     resetForms: We,
     swipeToClose: We,
     clickToClose: j,
    }),
    i._.extend(this[n], t),
    (this[D] = i._.newDiv(this[n].html)),
    (this[D].id = e),
    (this[D]._layer = this),
    (this[o] = E),
    (this[se] = E),
    (this[ne] = E),
    (this[De] = j),
    ((r = i._.cacheElement(this.id, this[D], ee, 1)).onAttach = function () {
     var e = this.object._layer;
     e[U]() || e.init(), e.resume();
    }),
    (r.onDetach = function () {
     this.object._layer.suspend();
    }),
    this[n].states
     ? ((a = i._[at](this[n].states)),
       i._[Fe](a, function (e) {
        i._.addCachedElementToState(i._.sd + a[e], r);
       }))
     : ((a = this[n].breakpoints
        ? i._[at](this[n].breakpoints)
        : i._.breakpointList),
       i._[Fe](a, function (e) {
        i._.addCachedElementToBreakpoint(a[e], r);
       }));
  }
  var i,
   n = "config",
   s = "_skel_layers_translateOrigin",
   r = "cache",
   o = "$element",
   c = "_skel_layers_translate",
   l = "_skel_layers_resetForms",
   h = "_skel_layers_resume",
   f = "_skel_layers_promote",
   u = "exclusiveLayer",
   d = "activeWrapper",
   p = "moveToInactiveWrapper",
   v = "_skel_layers_demote",
   _ = "moveToActiveWrapper",
   w = "setTimeout",
   k = "right",
   y = "bottom",
   m = "useActive",
   b = "scrollTop",
   g = "deactivate",
   x = "css",
   I = "width",
   T = "center",
   z = "_skel_layers_suspend",
   C = "position",
   W = "prototype",
   E = null,
   H = "left",
   L = "wrapper",
   S = "skel-layers-layer-z-index",
   V = "_skel_layers_init",
   M = "children",
   j = !1,
   B = "inactiveWrapper",
   P = "top",
   A = "deviceType",
   F = "length",
   X = "height",
   R = "touchstart.lock click.lock scroll.lock",
   Y = "window",
   $ = "transform",
   D = "element",
   O = "stopPropagation",
   Z = "resetForms",
   N = "preventDefault",
   Q = "overflow-x",
   q = "recalcW",
   G = "-webkit-",
   J = "padding-bottom",
   K = "-webkit-tap-highlight-color",
   U = "isInitialized",
   ee = "skel_layers_inactiveWrapper",
   te = "originalEvent",
   ie = "animation",
   ne = "touchPosY",
   se = "touchPosX",
   ae = "skel-layers-layer-position",
   re = "skel-layers-layer-index",
   oe = "z-index",
   ce = "unlockView",
   le = "animations",
   he = '<div id="skel-layers-tmp-',
   fe = "hidden",
   ue = "_skel_layers_initializeCell",
   de = "resize.lock scroll.lock",
   pe = "find",
   ve = "registerLocation",
   _e = "orientationchange.lock",
   we = "none",
   ke = "activate",
   ye = "speed",
   me = "positions",
   be = "-moz-",
   ge = "_skel_layers_expandCell",
   xe = "_skel_layers_hasParent",
   Ie = "attr",
   Te = "layers",
   ze = "append",
   Ce = "lockView",
   We = !0,
   Ee = "#skel-layers-tmp-",
   He = "-ms-",
   Le = "isTouch",
   Se = "DOMReady",
   Ve = "_skel_layers_scrollPos",
   Me = "auto",
   je = "_skel_layers_xcss",
   Be = "visible",
   Pe = "-o-",
   Ae = "transformBreakpoints",
   Fe = "iterate",
   Xe = "rgba(0,0,0,0)",
   Re = "appendTo",
   Ye = "cell-size",
   $e = "vars",
   De = "active",
   Oe = "px",
   Ze = "-",
   Ne = "body",
   Qe = "click",
   qe = "touches",
   Ge = "overflow-",
   Je = "isVisible",
   Ke = "side",
   Ue = "recalcH",
   et = "relative",
   tt = "android",
   it = "transformTest",
   nt = "pointer",
   st = "#",
   at = "getArray",
   rt = "*";
  return void 0 === e
   ? j
   : ((e.fn[xe] = function () {
      return e(this).parents()[F] > 0;
     }),
     (e.fn[f] = function (t) {
      var s, a, r;
      if (this[F] > 1) {
       for (s = 0; s < this[F]; s++) e(this[s])[f](t);
       return e(this);
      }
      return (
       (a = e(this)),
       isNaN((r = parseInt(a.data(re)))) && (r = 0),
       a.data(S, a[x](oe))[x](oe, i[n].baseZIndex + r + (t || 1)),
       a
      );
     }),
     (e.fn[v] = function () {
      var t, i;
      if (this[F] > 1) {
       for (t = 0; t < this[F]; t++) e(this[t])[v]();
       return e(this);
      }
      return (i = e(this))[x](oe, i.data(S)).data(S, ""), i;
     }),
     (e.fn._skel_layers_xcssValue = function (t, i) {
      return e(this)
       [x](t, i)
       [x](t, be + i)
       [x](t, G + i)
       [x](t, Pe + i)
       [x](t, He + i);
     }),
     (e.fn._skel_layers_xcssProperty = function (t, i) {
      return e(this)
       [x](t, i)
       [x](be + t, i)
       [x](G + t, i)
       [x](Pe + t, i)
       [x](He + t, i);
     }),
     (e.fn[je] = function (t, i) {
      return e(this)
       [x](t, i)
       [x](be + t, be + i)
       [x](G + t, G + i)
       [x](Pe + t, Pe + i)
       [x](He + t, He + i);
     }),
     (e.fn[l] = function () {
      var t = e(this);
      return (
       e(this)
        [pe]("form")
        .each(function () {
         this.reset();
        }),
       t
      );
     }),
     (e.fn[ue] = function () {
      var t = e(this);
      t[Ie]("class").match(/(\s+|^)([0-9]+)u(\s+|$)/) &&
       t.data(Ye, parseInt(RegExp.$2));
     }),
     (e.fn[ge] = function () {
      var t = e(this),
       i = t.parent(),
       n = 12;
      i[M]().each(function () {
       var t = e(this)[Ie]("class");
       t && t.match(/(\s+|^)([0-9]+)u(\s+|$)/) && (n -= parseInt(RegExp.$2));
      }),
       n > 0 && (t[ue](), t[x](I, ((t.data(Ye) + n) / 12) * 100 + "%"));
     }),
     (t[W][me] = {
      "top-left": { v: P, h: H, side: H },
      "top-right": { v: P, h: k, side: k },
      top: { v: P, h: T, side: P },
      "top-center": { v: P, h: T, side: P },
      "bottom-left": { v: y, h: H, side: H },
      "bottom-right": { v: y, h: k, side: k },
      bottom: { v: y, h: T, side: y },
      "bottom-center": { v: y, h: T, side: y },
      left: { v: T, h: H, side: H },
      "center-left": { v: T, h: H, side: H },
      right: { v: T, h: k, side: k },
      "center-right": { v: T, h: k, side: k },
     }),
     (t[W][le] = {
      none: {
       activate: function (e) {
        var t = e[n],
         i = e[o];
        i[b](0)[f](t.zIndex).show(), t[Z] && i[l](), e[_]();
       },
       deactivate: function (e) {
        e[n];
        e[o].hide()[v](), e[p]();
       },
      },
      overlayX: {
       activate: function (e) {
        var t = e[n],
         s = e[o];
        s[b](0)
         [f](t.zIndex)
         [x](t[Ke], Ze + i[q](i._[m](t[I])) + Oe)
         .show(),
         t[Z] && s[l](),
         i[Ce]("x"),
         e[_](),
         window[w](function () {
          s[c]((t[Ke] == k ? Ze : "") + i[q](i._[m](t[I])), 0);
         }, 50);
       },
       deactivate: function (e) {
        e[n];
        var t = e[o];
        t[pe](rt).blur(),
         t[s](),
         window[w](function () {
          i[ce]("x"), e[p](), t[v]().hide();
         }, i[n][ye] + 50);
       },
      },
      overlayY: {
       activate: function (e) {
        var t = e[n],
         s = e[o];
        s[b](0)
         [f](t.zIndex)
         [x](t[Ke], Ze + i[q](i._[m](t[X])) + Oe)
         .show(),
         t[Z] && s[l](),
         i[Ce]("y"),
         e[_](),
         window[w](function () {
          s[c](0, (t[Ke] == y ? Ze : "") + i[q](i._[m](t[X])));
         }, 50);
       },
       deactivate: function (e) {
        e[n];
        var t = e[o];
        t[pe](rt).blur(),
         t[s](),
         window[w](function () {
          i[ce]("y"), e[p](), t[v]().hide();
         }, i[n][ye] + 50);
       },
      },
      pushX: {
       activate: function (e) {
        var t = e[n],
         s = e[o],
         a = i[r][L].add(i[r][d][M]());
        s[b](0)
         [x](t[Ke], Ze + i[q](i._[m](t[I])) + Oe)
         .show(),
         t[Z] && s[l](),
         a[f](),
         i[Ce]("x"),
         e[_](),
         window[w](function () {
          s.add(a)[c]((t[Ke] == k ? Ze : "") + i[q](i._[m](t[I])), 0);
         }, 50);
       },
       deactivate: function (e) {
        e[n];
        var t = e[o],
         a = i[r][L].add(i[r][d][M]());
        t[pe](rt).blur(),
         t.add(a)[s](),
         window[w](function () {
          i[ce]("x"), t.hide(), e[p](), a[v]();
         }, i[n][ye] + 50);
       },
      },
      pushY: {
       activate: function (e) {
        var t = e[n],
         s = e[o],
         a = i[r][L].add(i[r][d][M]());
        s[b](0)
         [x](t[Ke], Ze + i[Ue](i._[m](t[X])) + Oe)
         .show(),
         t[Z] && s[l](),
         i[Ce]("y"),
         e[_](),
         window[w](function () {
          s.add(a)[c](0, (t[Ke] == y ? Ze : "") + i[Ue](i._[m](t[X])));
         }, 50);
       },
       deactivate: function (e) {
        e[n];
        var t = e[o],
         a = i[r][L].add(i[r][d][M]());
        t[pe](rt).blur(),
         t.add(a)[s](),
         window[w](function () {
          i[ce]("y"), t.hide(), e[p]();
         }, i[n][ye] + 50);
       },
      },
      revealX: {
       activate: function (e) {
        var t = e[n],
         s = e[o],
         a = i[r][L].add(i[r][d][M]());
        s[b](0).show(),
         t[Z] && s[l](),
         a[f](),
         i[Ce]("x"),
         e[_](),
         window[w](function () {
          a[c]((t[Ke] == k ? Ze : "") + i[q](i._[m](t[I])), 0);
         }, 50);
       },
       deactivate: function (e) {
        e[n];
        var t = e[o],
         a = i[r][L].add(i[r][d][M]());
        t[pe](rt).blur(),
         a[s](),
         window[w](function () {
          i[ce]("x"), t.hide(), a[v](), e[p]();
         }, i[n][ye] + 50);
       },
      },
     }),
     (t[W][_] = function () {
      i[r][d][ze](this[o]);
     }),
     (t[W][p] = function () {
      this[o][xe]() && i[r][B][ze](this[o]);
     }),
     (t[W][g] = function () {
      var e, t;
      this[De]
       ? ((e = this[n]),
         (t = i._[m](e[ie])) in this[le] || (t = we),
         this[le][t][g](this),
         e[fe] && e.exclusive && i[r][u] === this && (i[r][u] = E),
         (this[De] = j))
       : i[r][B][ze](this[D]);
     }),
     (t[W][ke] = function () {
      var e, t, s, a;
      if (this[De]) i[r][d][ze](this[D]);
      else {
       switch (
        ((e = this[n]),
        (t = i._[m](e[ie])),
        (s = this[o])[x](I, i._[m](e[I]))[x](X, i._[m](e[X])),
        "ios" == i._[$e][A] &&
         "100%" == e[X] &&
         !e[fe] &&
         s[x](X, "-webkit-calc(" + i._[m](e[X]) + " + 70px)"),
        (a = this[me][e[C]]),
        s.addClass("skel-layer-" + e[C]).data(ae, e[C]),
        a.v)
       ) {
        case P:
         s[x](P, 0);
         break;
        case y:
         s[x](y, 0);
         break;
        case T:
         s[x](P, "50%")[x]("margin-top", Ze + i.getHalf(e[X]));
       }
       switch (a.h) {
        case H:
         s[x](H, 0);
         break;
        case k:
         s[x](k, 0);
         break;
        case T:
         s[x](H, "50%")[x]("margin-left", Ze + i.getHalf(e[I]));
       }
       this[le][t][ke](this),
        e[fe] && e.exclusive && (i[r][u] = this),
        (this[De] = We);
      }
     }),
     (t[W][U] = function () {
      return this[o] !== E;
     }),
     (t[W][Je] = function () {
      return this[o].is(":visible");
     }),
     (t[W].resume = function (t) {
      this[U]() &&
       (this[o][pe](rt).each(function () {
        i.parseResume(e(this));
       }),
       this[n][fe] || this[ke](t));
     }),
     (t[W].suspend = function () {
      this[U]() &&
       (this[o][s](),
       this[o][pe](rt).each(function () {
        i.parseSuspend(e(this));
       }),
       this[De] && this[g]());
     }),
     (t[W].init = function () {
      var t = this[n],
       s = e(this[D]),
       a = this;
      switch (
       (s[V](),
       s[pe](rt).each(function () {
        i.parseInit(e(this));
       }),
       s
        .addClass("skel-layer")
        .data(re, this.index)
        [x](oe, i[n].baseZIndex)
        [x](C, "fixed")
        [x]("-ms-overflow-style", "-ms-autohiding-scrollbar")
        [x]("-webkit-overflow-scrolling", "touch")
        .hide(),
       t.orientation)
      ) {
       case "vertical":
        s[x]("overflow-y", Me);
        break;
       case "horizontal":
        s[x](Q, Me);
      }
      (t[C] && t[C] in this[me]) || (t[C] = "top-left"),
       t[Ke] || (t[Ke] = this[me][t[C]][Ke]),
       (t[ie] && ("object" == typeof t[ie] || t[ie] in this[le])) ||
        (t[ie] = we),
       t.clickToClose &&
        s[pe]("a")
         [x](K, Xe)
         .on("click.skel-layers", function (t) {
          var s,
           r,
           o = e(this);
          o.hasClass("skel-layers-ignore") ||
           (t[N](),
           t[O](),
           a[g](),
           o.hasClass("skel-layers-ignoreHref") ||
            ((s = o[Ie]("href")),
            (r = o[Ie]("target")),
            window[w](function () {
             "_blank" == r && "wp" != i._[$e][A]
              ? window.open(s)
              : (window.location.href = s);
            }, i[n][ye] + 10)));
         }),
       "ios" == i._[$e][A] &&
        s[pe]("input,select,textarea").on("focus", function (t) {
         var n = e(this);
         t[N](),
          t[O](),
          window[w](function () {
           var e = i[r][Y][Ve],
            t = i[r][Y][b]() - e;
           i[r][Y][b](e),
            s[b](s[b]() + t),
            n.hide(),
            window[w](function () {
             n.show();
            }, 0);
          }, 100);
        }),
       i._[$e][Le] &&
        s
         .on("touchstart", function (e) {
          (a[se] = e[te][qe][0].pageX), (a[ne] = e[te][qe][0].pageY);
         })
         .on("touchmove", function (e) {
          var i, n, r, o, c, l;
          if (a[se] !== E && a[ne] !== E) {
           if (
            ((i = a[se] - e[te][qe][0].pageX),
            (n = a[ne] - e[te][qe][0].pageY),
            (r = s.outerHeight()),
            (o = s.get(0).scrollHeight - s[b]()),
            t.swipeToClose)
           ) {
            switch (((c = j), (l = 20), 50, t[Ke])) {
             case H:
              c = n < l && n > -20 && i > 50;
              break;
             case k:
              c = n < l && n > -20 && i < -50;
              break;
             case P:
              c = i < l && i > -20 && n > 50;
              break;
             case y:
              c = i < l && i > -20 && n < -50;
            }
            if (c) return (a[se] = E), (a[ne] = E), a[g](), j;
           }
           return (0 == s[b]() && n < 0) || (o > r - 2 && o < r + 2 && n > 0)
            ? j
            : void 0;
          }
         }),
       (this[o] = s);
     }),
     (i = {
      config: {
       baseZIndex: 1e4,
       transform: We,
       transformBreakpoints: E,
       transformTest: E,
       speed: 250,
       layers: {},
      },
      cache: {
       layers: {},
       body: E,
       window: E,
       wrapper: E,
       inactiveWrapper: E,
       activeWrapper: E,
       exclusiveLayer: E,
      },
      eventType: Qe,
      getBaseFontSize: function () {
       return i._[$e].IEVersion < 9
        ? 16.5
        : parseFloat(getComputedStyle(i[r][Ne].get(0)).fontSize);
      },
      recalc: function (e, t) {
       var n,
        s = i._.parseMeasurement(e);
       switch (s[1]) {
        case "%":
         n = Math.floor(t * (s[0] / 100));
         break;
        case "em":
         n = i.getBaseFontSize() * s[0];
         break;
        default:
        case Oe:
         n = s[0];
       }
       return n;
      },
      recalcW: function (t) {
       return i.recalc(t, e(window)[I]());
      },
      recalcH: function (t) {
       return i.recalc(t, e(window)[X]());
      },
      getHalf: function (e) {
       var t = parseInt(e);
       return "string" == typeof e && "%" == e.charAt(e[F] - 1)
        ? Math.floor(t / 2) + "%"
        : Math.floor(t / 2) + Oe;
      },
      parseSuspend: function (e) {
       var t = e.get(0);
       t[z] && t[z]();
      },
      parseResume: function (e) {
       var t = e.get(0);
       t[h] && t[h]();
      },
      parseInit: function (t) {
       var n,
        s,
        a,
        o,
        c = t.get(0),
        l = t[Ie]("data-action"),
        f = t[Ie]("data-args");
       switch ((l && f && (f = f.split(",")), l)) {
        case "toggleLayer":
        case "layerToggle":
         t[x](K, Xe)[x]("cursor", nt),
          (n = function (t) {
           if ((t[N](), t[O](), i[r][u])) return i[r][u][g](), j;
           e(this);
           var n = i[r][Te][f[0]];
           n[Je]() ? n[g]() : n[ke]();
          }),
          i._[$e][A] == tt || "wp" == i._[$e][A]
           ? t.on(Qe, n)
           : t.on(i.eventType, n);
         break;
        case "navList":
         (n = (a = e(st + f[0]))[pe]("a")),
          (s = []),
          n.each(function () {
           var t,
            i = e(this);
           (t = Math.max(0, i.parents("li")[F] - 1)),
            s.push(
             '<a class="link depth-' +
              t +
              '" href="' +
              i[Ie]("href") +
              '"><span class="indent-' +
              t +
              '"></span>' +
              i.text() +
              "</a>"
            );
          }),
          s[F] > 0 && t.html("<nav>" + s.join("") + "</nav>"),
          t[pe](".link")[x]("cursor", nt)[x]("display", "block");
         break;
        case "copyText":
         (a = e(st + f[0])), t.html(a.text());
         break;
        case "copyHTML":
         (a = e(st + f[0])), t.html(a.html());
         break;
        case "moveElementContents":
         (a = e(st + f[0])),
          (c[h] = function () {
           a[M]().each(function () {
            t[ze](e(this));
           });
          }),
          (c[z] = function () {
           t[M]().each(function () {
            a[ze](e(this));
           });
          }),
          c[h]();
         break;
        case "moveElement":
         (a = e(st + f[0])),
          (c[h] = function () {
           e(he + a[Ie]("id") + '" />').insertBefore(a), t[ze](a);
          }),
          (c[z] = function () {
           e(Ee + a[Ie]("id")).replaceWith(a);
          }),
          c[h]();
         break;
        case "moveCell":
         (a = e(st + f[0])),
          (o = e(st + f[1])),
          (c[h] = function () {
           e(he + a[Ie]("id") + '" />').insertBefore(a),
            t[ze](a),
            a[x](I, Me),
            o && o[ge]();
          }),
          (c[z] = function () {
           e(Ee + a[Ie]("id")).replaceWith(a), a[x](I, ""), o && o[x](I, "");
          }),
          c[h]();
       }
      },
      lockView: function (e) {
       (i[r][Y][Ve] = i[r][Y][b]()),
        i._[$e][Le] && i[r][Ne][x](Ge + e, fe),
        i[r][L].on(R, function (e) {
         e[N](), e[O](), i[r][u] && i[r][u][g]();
        }),
        i[r][Y].on(_e, function (e) {
         i[r][u] && i[r][u][g]();
        }),
        i._[$e][Le] ||
         i[r][Y].on(de, function (e) {
          i[r][u] && i[r][u][g]();
         });
      },
      unlockView: function (e) {
       i._[$e][Le] && i[r][Ne][x](Ge + e, Be),
        i[r][L].off(R),
        i[r][Y].off(_e),
        i._[$e][Le] || i[r][Y].off(de);
      },
      initLayers: function () {
       var s,
        a = 1;
       i._[Fe](i[n][Te], function (o) {
        var c;
        (i[n][Te][o].html || 0 != (c = e(st + o))[F]) &&
         ((s = new t(o, i[n][Te][o], a++)),
         (i[r][Te][o] = s),
         c && (c[M]()[Re](s[D]), c.remove()));
       });
      },
      initTransforms: function () {
       if (i[n][$])
        (e.fn[s] = function () {
         return e(this)[c](0, 0);
        }),
         (e.fn[c] = function (t, i) {
          return e(this)[x]($, "translate(" + t + "px, " + i + "px)");
         }),
         (e.fn[V] = function () {
          return e(this)
           [x]("backface-visibility", fe)
           [x]("perspective", "500")
           [je]("transition", "transform " + i[n][ye] / 1e3 + "s ease-in-out");
         });
       else {
        var o = [];
        i[r][Y].resize(function () {
         if (0 != i[n][ye]) {
          var e = i[n][ye];
          (i[n][ye] = 0),
           window[w](function () {
            (i[n][ye] = e), (o = []);
           }, e);
         }
        }),
         (e.fn[s] = function () {
          for (var t = 0; t < this[F]; t++) {
           var s = this[t],
            a = e(s);
           o[s.id] &&
            a.animate(o[s.id], i[n][ye], "swing", function () {
             i._[Fe](o[s.id], function (e) {
              a[x](e, o[s.id][e]);
             }),
              i[r][Ne][x](Q, Be),
              i[r][L][x](I, Me)[x](J, 0);
            });
          }
          return e(this);
         }),
         (e.fn[c] = function (s, c) {
          var l, h, f;
          for (
           s = parseInt(s),
            c = parseInt(c),
            0 != s
             ? (i[r][Ne][x](Q, fe), i[r][L][x](I, i[r][Y][I]()))
             : (h = function () {
                i[r][Ne][x](Q, Be), i[r][L][x](I, Me);
               }),
            c < 0
             ? i[r][L][x](J, Math.abs(c))
             : (f = function () {
                i[r][L][x](J, 0);
               }),
            l = 0;
           l < this[F];
           l++
          ) {
           var u,
            d = this[l],
            p = e(d);
           if (!o[d.id])
            if ((u = t[W][me][p.data(ae)])) {
             switch (((o[d.id] = {}), u.v)) {
              case T:
              case P:
               o[d.id][P] = parseInt(p[x](P));
               break;
              case y:
               o[d.id][y] = parseInt(p[x](y));
             }
             switch (u.h) {
              case T:
              case H:
               o[d.id][H] = parseInt(p[x](H));
               break;
              case k:
               o[d.id][k] = parseInt(p[x](k));
             }
            } else (u = p[C]()), (o[d.id] = { top: u[P], left: u[H] });
           (a = {}),
            i._[Fe](o[d.id], function (e) {
             var t;
             switch (e) {
              case P:
               t = i[Ue](o[d.id][e]) + c;
               break;
              case y:
               t = i[Ue](o[d.id][e]) - c;
               break;
              case H:
               t = i[q](o[d.id][e]) + s;
               break;
              case k:
               t = i[q](o[d.id][e]) - s;
             }
             a[e] = t;
            }),
            p.animate(a, i[n][ye], "swing", function () {
             h && h(), f && f();
            });
          }
          return e(this);
         }),
         (e.fn[V] = function () {
          return e(this)[x](C, "absolute");
         });
       }
      },
      initObjects: function () {
       (i[r][Y] = e(window)),
        i[r][Y].load(function () {
         0 == i[r][Y][b]() && window.scrollTo(0, 1);
        }),
        i._[Se](function () {
         (i[r][Ne] = e(Ne)),
          i[r][Ne].wrapInner('<div id="skel-layers-wrapper" />'),
          (i[r][L] = e("#skel-layers-wrapper")),
          i[r][L][x](C, et)[x](H, "0")[x](k, "0")[x](P, "0")[V](),
          (i[r][B] = e('<div id="skel-layers-inactiveWrapper" />')[Re](
           i[r][Ne]
          )),
          i[r][B][x](X, "100%"),
          (i[r][d] = e('<div id="skel-layers-activeWrapper" />')[Re](
           i[r][Ne]
          )),
          i[r][d][x](C, et),
          i._[ve](ee, i[r][B][0]),
          i._[ve]("skel_layers_activeWrapper", i[r][d][0]),
          i._[ve]("skel_layers_wrapper", i[r][L][0]),
          e("[autofocus]").focus();
        });
      },
      initIncludes: function () {
       e(".skel-layers-include").each(function () {
        i.parseInit(e(this));
       });
      },
      init: function () {
       i[n][it] && (i[n][$] = i[n][it]()),
        i[n][$] &&
         (((i._[$e][A] == tt && i._[$e].deviceVersion < 4) ||
          "wp" == i._[$e][A]) &&
          (i[n][$] = j),
         i._[$e].IEVersion < 10 && (i[n][$] = j),
         i[n][Ae] && !i._.hasActive(i._[at](i[n][Ae])) && (i[n][$] = j)),
        (i.eventType = i._[$e][Le] ? "touchend" : Qe),
        i.initObjects(),
        i.initTransforms(),
        i._[Se](function () {
         i.initLayers(), i.initIncludes(), i._.updateState(), i.refresh();
        });
      },
      refresh: function () {
       e(".skel-layers-fixed")[V]()[Re](i[r][d]);
      },
      activate: function (e) {
       i._[Se](function () {
        i[r][Te][e][ke]();
       });
      },
      deactivate: function (e) {
       i._[Se](function () {
        i[r][Te][e][g]();
       });
      },
      toggle: function (e) {
       i._[Se](function () {
        var t = i[r][Te][e];
        t[Je]() ? t[g]() : t[ke]();
       });
      },
     }));
 })(jQuery)
);
!(function (e) {
 skel.init(
  {
   reset: "full",
   breakpoints: {
    global: {
     range: "*",
     href: "css/style.css",
     containers: 1400,
     grid: { gutters: 50 },
    },
    wide: {
     range: "-1680",
     href: "css/style-wide.css",
     containers: 1200,
     grid: { gutters: 40 },
    },
    normal: {
     range: "-1280",
     href: "css/style-normal.css",
     containers: 960,
     lockViewport: !0,
    },
    narrow: {
     range: "-980",
     href: "css/style-narrow.css",
     containers: "95%",
     grid: { gutters: 25 },
    },
    narrower: {
     range: "-840",
     href: "css/style-narrower.css",
     grid: { collapse: !0 },
    },
    mobile: {
     range: "-640",
     href: "css/style-mobile.css",
     containers: "90%",
     grid: { gutters: 15 },
    },
   },
  },
  {
   layers: {
    layers: {
     navPanel: {
      animation: "pushX",
      breakpoints: "narrower",
      clickToClose: !0,
      height: "100%",
      hidden: !0,
      html: '<div data-action="navList" data-args="nav"></div>',
      orientation: "vertical",
      position: "top-left",
      side: "left",
      width: 275,
     },
     titleBar: {
      breakpoints: "narrower",
      height: 44,
      html:
       '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span><span class="title" data-action="copyHTML" data-args="logo"></span>',
      position: "top-left",
      side: "top",
      width: "100%",
     },
    },
   },
  }
 ),
  e(function () {
   var a = e(window),
    t = e("body");
   t.addClass("loading"),
    a.on("load", function () {
     t.removeClass("loading");
    });
   var r = e("form");
   r.length > 0 &&
    (r.find(".form-button-submit").on("click", function () {
     return e(this).parents("form").submit(), !1;
    }),
    skel.vars.IEVersion < 10 &&
     ((e.fn.n33_formerize = function () {
      var a = new Array(),
       t = e(this);
      return (
       t
        .find("input[type=text],textarea")
        .each(function () {
         var a = e(this);
         ("" != a.val() && a.val() != a.attr("placeholder")) ||
          (a.addClass("formerize-placeholder"), a.val(a.attr("placeholder")));
        })
        .blur(function () {
         var a = e(this);
         a.attr("name").match(/_fakeformerizefield$/) ||
          ("" == a.val() &&
           (a.addClass("formerize-placeholder"),
           a.val(a.attr("placeholder"))));
        })
        .focus(function () {
         var a = e(this);
         a.attr("name").match(/_fakeformerizefield$/) ||
          (a.val() == a.attr("placeholder") &&
           (a.removeClass("formerize-placeholder"), a.val("")));
        }),
       t.find("input[type=password]").each(function () {
        var a = e(this),
         t = e(
          e("<div>")
           .append(a.clone())
           .remove()
           .html()
           .replace(/type="password"/i, 'type="text"')
           .replace(/type=password/i, "type=text")
         );
        "" != a.attr("id") &&
         t.attr("id", a.attr("id") + "_fakeformerizefield"),
         "" != a.attr("name") &&
          t.attr("name", a.attr("name") + "_fakeformerizefield"),
         t
          .addClass("formerize-placeholder")
          .val(t.attr("placeholder"))
          .insertAfter(a),
         "" == a.val() ? a.hide() : t.hide(),
         a.blur(function (a) {
          a.preventDefault();
          var t = e(this),
           r = t
            .parent()
            .find("input[name=" + t.attr("name") + "_fakeformerizefield]");
          "" == t.val() && (t.hide(), r.show());
         }),
         t.focus(function (a) {
          a.preventDefault();
          var t = e(this),
           r = t
            .parent()
            .find(
             "input[name=" +
              t.attr("name").replace("_fakeformerizefield", "") +
              "]"
            );
          t.hide(), r.show().focus();
         }),
         t.keypress(function (e) {
          e.preventDefault(), t.val("");
         });
       }),
       t
        .submit(function () {
         e(this)
          .find("input[type=text],input[type=password],textarea")
          .each(function (a) {
           var t = e(this);
           t.attr("name").match(/_fakeformerizefield$/) && t.attr("name", ""),
            t.val() == t.attr("placeholder") &&
             (t.removeClass("formerize-placeholder"), t.val(""));
          });
        })
        .bind("reset", function (t) {
         t.preventDefault(),
          e(this).find("select").val(e("option:first").val()),
          e(this)
           .find("input,textarea")
           .each(function () {
            var a,
             t = e(this);
            switch ((t.removeClass("formerize-placeholder"), this.type)) {
             case "submit":
             case "reset":
              break;
             case "password":
              t.val(t.attr("defaultValue")),
               (a = t
                .parent()
                .find(
                 "input[name=" + t.attr("name") + "_fakeformerizefield]"
                )),
               "" == t.val() ? (t.hide(), a.show()) : (t.show(), a.hide());
              break;
             case "checkbox":
             case "radio":
              t.attr("checked", t.attr("defaultValue"));
              break;
             case "text":
             case "textarea":
              t.val(t.attr("defaultValue")),
               "" == t.val() &&
                (t.addClass("formerize-placeholder"),
                t.val(t.attr("placeholder")));
              break;
             default:
              t.val(t.attr("defaultValue"));
            }
           }),
          window.setTimeout(function () {
           for (x in a) a[x].trigger("formerize_sync");
          }, 10);
        }),
       t
      );
     }),
     r.n33_formerize())),
    e("#nav > ul").dropotron({ offsetY: -15, hoverDelay: 0 });
  });
})(jQuery);
