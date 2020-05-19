/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = c.slice,
    e = c.concat,
    f = c.push,
    g = c.indexOf,
    h = {},
    i = h.toString,
    j = h.hasOwnProperty,
    k = {},
    l = a.document,
    m = "2.1.3",
    n = function (a, b) {
      return new n.fn.init(a, b);
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function (a, b) {
      return b.toUpperCase();
    };
  (n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function () {
      return d.call(this);
    },
    get: function (a) {
      return null != a
        ? 0 > a
          ? this[a + this.length]
          : this[a]
        : d.call(this);
    },
    pushStack: function (a) {
      var b = n.merge(this.constructor(), a);
      return (b.prevObject = this), (b.context = this.context), b;
    },
    each: function (a, b) {
      return n.each(this, a, b);
    },
    map: function (a) {
      return this.pushStack(
        n.map(this, function (b, c) {
          return a.call(b, c, b);
        })
      );
    },
    slice: function () {
      return this.pushStack(d.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (a) {
      var b = this.length,
        c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: f,
    sort: c.sort,
    splice: c.splice,
  }),
    (n.extend = n.fn.extend = function () {
      var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;
      for (
        "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
          "object" == typeof g || n.isFunction(g) || (g = {}),
          h === i && ((g = this), h--);
        i > h;
        h++
      )
        if (null != (a = arguments[h]))
          for (b in a)
            (c = g[b]),
              (d = a[b]),
              g !== d &&
                (j && d && (n.isPlainObject(d) || (e = n.isArray(d)))
                  ? (e
                      ? ((e = !1), (f = c && n.isArray(c) ? c : []))
                      : (f = c && n.isPlainObject(c) ? c : {}),
                    (g[b] = n.extend(j, f, d)))
                  : void 0 !== d && (g[b] = d));
      return g;
    }),
    n.extend({
      expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === n.type(a);
      },
      isArray: Array.isArray,
      isWindow: function (a) {
        return null != a && a === a.window;
      },
      isNumeric: function (a) {
        return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
      },
      isPlainObject: function (a) {
        return "object" !== n.type(a) || a.nodeType || n.isWindow(a)
          ? !1
          : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf")
          ? !1
          : !0;
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? h[i.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (a) {
        var b,
          c = eval;
        (a = n.trim(a)),
          a &&
            (1 === a.indexOf("use strict")
              ? ((b = l.createElement("script")),
                (b.text = a),
                l.head.appendChild(b).parentNode.removeChild(b))
              : c(a));
      },
      camelCase: function (a) {
        return a.replace(p, "ms-").replace(q, r);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b, c) {
        var d,
          e = 0,
          f = a.length,
          g = s(a);
        if (c) {
          if (g) {
            for (; f > e; e++) if (((d = b.apply(a[e], c)), d === !1)) break;
          } else for (e in a) if (((d = b.apply(a[e], c)), d === !1)) break;
        } else if (g) {
          for (; f > e; e++) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        } else for (e in a) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(o, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (s(Object(a))
              ? n.merge(c, "string" == typeof a ? [a] : a)
              : f.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        return null == b ? -1 : g.call(b, a, c);
      },
      merge: function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          f = 0,
          g = a.length,
          h = s(a),
          i = [];
        if (h) for (; g > f; f++) (d = b(a[f], f, c)), null != d && i.push(d);
        else for (f in a) (d = b(a[f], f, c)), null != d && i.push(d);
        return e.apply([], i);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, e, f;
        return (
          "string" == typeof b && ((c = a[b]), (b = a), (a = c)),
          n.isFunction(a)
            ? ((e = d.call(arguments, 2)),
              (f = function () {
                return a.apply(b || this, e.concat(d.call(arguments)));
              }),
              (f.guid = a.guid = a.guid || n.guid++),
              f)
            : void 0
        );
      },
      now: Date.now,
      support: k,
    }),
    n.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function s(a) {
    var b = a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a)
      ? !1
      : 1 === a.nodeType && b
      ? !0
      : "array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a);
  }
  var t = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = hb(),
      z = hb(),
      A = hb(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1;
      },
      K =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N = M.replace("w", "w#"),
      O =
        "\\[" +
        L +
        "*(" +
        M +
        ")(?:" +
        L +
        "*([*^$|!~]?=)" +
        L +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        N +
        "))|)" +
        L +
        "*\\]",
      P =
        ":(" +
        M +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        O +
        ")*)|.*)\\)|)",
      Q = new RegExp(L + "+", "g"),
      R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      S = new RegExp("^" + L + "*," + L + "*"),
      T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      V = new RegExp(P),
      W = new RegExp("^" + N + "$"),
      X = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + O),
        PSEUDO: new RegExp("^" + P),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            L +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            L +
            "*(?:([+-]|)" +
            L +
            "*(\\d+)|))" +
            L +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            L +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            L +
            "*((?:-\\d)?\\d*)" +
            L +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /^(?:input|select|textarea|button)$/i,
      Z = /^h\d$/i,
      $ = /^[^{]+\{\s*\[native \w/,
      _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ab = /[+~]/,
      bb = /'|\\/g,
      cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      db = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      eb = function () {
        m();
      };
    try {
      H.apply((E = I.call(v.childNodes)), v.childNodes),
        E[v.childNodes.length].nodeType;
    } catch (fb) {
      H = {
        apply: E.length
          ? function (a, b) {
              G.apply(a, I.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function gb(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;
      if (
        ((b ? b.ownerDocument || b : v) !== n && m(b),
        (b = b || n),
        (d = d || []),
        (k = b.nodeType),
        "string" != typeof a || !a || (1 !== k && 9 !== k && 11 !== k))
      )
        return d;
      if (!e && p) {
        if (11 !== k && (f = _.exec(a)))
          if ((j = f[1])) {
            if (9 === k) {
              if (((h = b.getElementById(j)), !h || !h.parentNode)) return d;
              if (h.id === j) return d.push(h), d;
            } else if (
              b.ownerDocument &&
              (h = b.ownerDocument.getElementById(j)) &&
              t(b, h) &&
              h.id === j
            )
              return d.push(h), d;
          } else {
            if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if ((j = f[3]) && c.getElementsByClassName)
              return H.apply(d, b.getElementsByClassName(j)), d;
          }
        if (c.qsa && (!q || !q.test(a))) {
          if (
            ((s = r = u),
            (w = b),
            (x = 1 !== k && a),
            1 === k && "object" !== b.nodeName.toLowerCase())
          ) {
            (o = g(a)),
              (r = b.getAttribute("id"))
                ? (s = r.replace(bb, "\\$&"))
                : b.setAttribute("id", s),
              (s = "[id='" + s + "'] "),
              (l = o.length);
            while (l--) o[l] = s + rb(o[l]);
            (w = (ab.test(a) && pb(b.parentNode)) || b), (x = o.join(","));
          }
          if (x)
            try {
              return H.apply(d, w.querySelectorAll(x)), d;
            } catch (y) {
            } finally {
              r || b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(R, "$1"), b, d, e);
    }
    function hb() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ib(a) {
      return (a[u] = !0), a;
    }
    function jb(a) {
      var b = n.createElement("div");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function kb(a, b) {
      var c = a.split("|"),
        e = a.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function lb(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function mb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function nb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function ob(a) {
      return ib(function (b) {
        return (
          (b = +b),
          ib(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function pb(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = gb.support = {}),
      (f = gb.isXML = function (a) {
        var b = a && (a.ownerDocument || a).documentElement;
        return b ? "HTML" !== b.nodeName : !1;
      }),
      (m = gb.setDocument = function (a) {
        var b,
          e,
          g = a ? a.ownerDocument || a : v;
        return g !== n && 9 === g.nodeType && g.documentElement
          ? ((n = g),
            (o = g.documentElement),
            (e = g.defaultView),
            e &&
              e !== e.top &&
              (e.addEventListener
                ? e.addEventListener("unload", eb, !1)
                : e.attachEvent && e.attachEvent("onunload", eb)),
            (p = !f(g)),
            (c.attributes = jb(function (a) {
              return (a.className = "i"), !a.getAttribute("className");
            })),
            (c.getElementsByTagName = jb(function (a) {
              return (
                a.appendChild(g.createComment("")),
                !a.getElementsByTagName("*").length
              );
            })),
            (c.getElementsByClassName = $.test(g.getElementsByClassName)),
            (c.getById = jb(function (a) {
              return (
                (o.appendChild(a).id = u),
                !g.getElementsByName || !g.getElementsByName(u).length
              );
            })),
            c.getById
              ? ((d.find.ID = function (a, b) {
                  if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : [];
                  }
                }),
                (d.filter.ID = function (a) {
                  var b = a.replace(cb, db);
                  return function (a) {
                    return a.getAttribute("id") === b;
                  };
                }))
              : (delete d.find.ID,
                (d.filter.ID = function (a) {
                  var b = a.replace(cb, db);
                  return function (a) {
                    var c =
                      "undefined" != typeof a.getAttributeNode &&
                      a.getAttributeNode("id");
                    return c && c.value === b;
                  };
                })),
            (d.find.TAG = c.getElementsByTagName
              ? function (a, b) {
                  return "undefined" != typeof b.getElementsByTagName
                    ? b.getElementsByTagName(a)
                    : c.qsa
                    ? b.querySelectorAll(a)
                    : void 0;
                }
              : function (a, b) {
                  var c,
                    d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                  if ("*" === a) {
                    while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                    return d;
                  }
                  return f;
                }),
            (d.find.CLASS =
              c.getElementsByClassName &&
              function (a, b) {
                return p ? b.getElementsByClassName(a) : void 0;
              }),
            (r = []),
            (q = []),
            (c.qsa = $.test(g.querySelectorAll)) &&
              (jb(function (a) {
                (o.appendChild(a).innerHTML =
                  "<a id='" +
                  u +
                  "'></a><select id='" +
                  u +
                  "-\f]' msallowcapture=''><option selected=''></option></select>"),
                  a.querySelectorAll("[msallowcapture^='']").length &&
                    q.push("[*^$]=" + L + "*(?:''|\"\")"),
                  a.querySelectorAll("[selected]").length ||
                    q.push("\\[" + L + "*(?:value|" + K + ")"),
                  a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                  a.querySelectorAll(":checked").length || q.push(":checked"),
                  a.querySelectorAll("a#" + u + "+*").length ||
                    q.push(".#.+[+~]");
              }),
              jb(function (a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"),
                  a.appendChild(b).setAttribute("name", "D"),
                  a.querySelectorAll("[name=d]").length &&
                    q.push("name" + L + "*[*^$|!~]?="),
                  a.querySelectorAll(":enabled").length ||
                    q.push(":enabled", ":disabled"),
                  a.querySelectorAll("*,:x"),
                  q.push(",.*:");
              })),
            (c.matchesSelector = $.test(
              (s =
                o.matches ||
                o.webkitMatchesSelector ||
                o.mozMatchesSelector ||
                o.oMatchesSelector ||
                o.msMatchesSelector)
            )) &&
              jb(function (a) {
                (c.disconnectedMatch = s.call(a, "div")),
                  s.call(a, "[s!='']:x"),
                  r.push("!=", P);
              }),
            (q = q.length && new RegExp(q.join("|"))),
            (r = r.length && new RegExp(r.join("|"))),
            (b = $.test(o.compareDocumentPosition)),
            (t =
              b || $.test(o.contains)
                ? function (a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                      d = b && b.parentNode;
                    return (
                      a === d ||
                      !(
                        !d ||
                        1 !== d.nodeType ||
                        !(c.contains
                          ? c.contains(d)
                          : a.compareDocumentPosition &&
                            16 & a.compareDocumentPosition(d))
                      )
                    );
                  }
                : function (a, b) {
                    if (b) while ((b = b.parentNode)) if (b === a) return !0;
                    return !1;
                  }),
            (B = b
              ? function (a, b) {
                  if (a === b) return (l = !0), 0;
                  var d =
                    !a.compareDocumentPosition - !b.compareDocumentPosition;
                  return d
                    ? d
                    : ((d =
                        (a.ownerDocument || a) === (b.ownerDocument || b)
                          ? a.compareDocumentPosition(b)
                          : 1),
                      1 & d ||
                      (!c.sortDetached && b.compareDocumentPosition(a) === d)
                        ? a === g || (a.ownerDocument === v && t(v, a))
                          ? -1
                          : b === g || (b.ownerDocument === v && t(v, b))
                          ? 1
                          : k
                          ? J(k, a) - J(k, b)
                          : 0
                        : 4 & d
                        ? -1
                        : 1);
                }
              : function (a, b) {
                  if (a === b) return (l = !0), 0;
                  var c,
                    d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                  if (!e || !f)
                    return a === g
                      ? -1
                      : b === g
                      ? 1
                      : e
                      ? -1
                      : f
                      ? 1
                      : k
                      ? J(k, a) - J(k, b)
                      : 0;
                  if (e === f) return lb(a, b);
                  c = a;
                  while ((c = c.parentNode)) h.unshift(c);
                  c = b;
                  while ((c = c.parentNode)) i.unshift(c);
                  while (h[d] === i[d]) d++;
                  return d
                    ? lb(h[d], i[d])
                    : h[d] === v
                    ? -1
                    : i[d] === v
                    ? 1
                    : 0;
                }),
            g)
          : n;
      }),
      (gb.matches = function (a, b) {
        return gb(a, null, null, b);
      }),
      (gb.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(U, "='$1']")),
          !(!c.matchesSelector || !p || (r && r.test(b)) || (q && q.test(b))))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return gb(b, n, null, [a]).length > 0;
      }),
      (gb.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (gb.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (gb.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (gb.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = gb.getText = function (a) {
        var b,
          c = "",
          d = 0,
          f = a.nodeType;
        if (f) {
          if (1 === f || 9 === f || 11 === f) {
            if ("string" == typeof a.textContent) return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
          } else if (3 === f || 4 === f) return a.nodeValue;
        } else while ((b = a[d++])) c += e(b);
        return c;
      }),
      (d = gb.selectors = {
        cacheLength: 50,
        createPseudo: ib,
        match: X,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (a) {
            return (
              (a[1] = a[1].replace(cb, db)),
              (a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db)),
              "~=" === a[2] && (a[3] = " " + a[3] + " "),
              a.slice(0, 4)
            );
          },
          CHILD: function (a) {
            return (
              (a[1] = a[1].toLowerCase()),
              "nth" === a[1].slice(0, 3)
                ? (a[3] || gb.error(a[0]),
                  (a[4] = +(a[4]
                    ? a[5] + (a[6] || 1)
                    : 2 * ("even" === a[3] || "odd" === a[3]))),
                  (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                : a[3] && gb.error(a[0]),
              a
            );
          },
          PSEUDO: function (a) {
            var b,
              c = !a[6] && a[2];
            return X.CHILD.test(a[0])
              ? null
              : (a[3]
                  ? (a[2] = a[4] || a[5] || "")
                  : c &&
                    V.test(c) &&
                    (b = g(c, !0)) &&
                    (b = c.indexOf(")", c.length - b) - c.length) &&
                    ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                a.slice(0, 3));
          },
        },
        filter: {
          TAG: function (a) {
            var b = a.replace(cb, db).toLowerCase();
            return "*" === a
              ? function () {
                  return !0;
                }
              : function (a) {
                  return a.nodeName && a.nodeName.toLowerCase() === b;
                };
          },
          CLASS: function (a) {
            var b = y[a + " "];
            return (
              b ||
              ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                y(a, function (a) {
                  return b.test(
                    ("string" == typeof a.className && a.className) ||
                      ("undefined" != typeof a.getAttribute &&
                        a.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (a, b, c) {
            return function (d) {
              var e = gb.attr(d, a);
              return null == e
                ? "!=" === b
                : b
                ? ((e += ""),
                  "=" === b
                    ? e === c
                    : "!=" === b
                    ? e !== c
                    : "^=" === b
                    ? c && 0 === e.indexOf(c)
                    : "*=" === b
                    ? c && e.indexOf(c) > -1
                    : "$=" === b
                    ? c && e.slice(-c.length) === c
                    : "~=" === b
                    ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1
                    : "|=" === b
                    ? e === c || e.slice(0, c.length + 1) === c + "-"
                    : !1)
                : !0;
            };
          },
          CHILD: function (a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
            return 1 === d && 0 === e
              ? function (a) {
                  return !!a.parentNode;
                }
              : function (b, c, i) {
                  var j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p = f !== g ? "nextSibling" : "previousSibling",
                    q = b.parentNode,
                    r = h && b.nodeName.toLowerCase(),
                    s = !i && !h;
                  if (q) {
                    if (f) {
                      while (p) {
                        l = b;
                        while ((l = l[p]))
                          if (
                            h
                              ? l.nodeName.toLowerCase() === r
                              : 1 === l.nodeType
                          )
                            return !1;
                        o = p = "only" === a && !o && "nextSibling";
                      }
                      return !0;
                    }
                    if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                      (k = q[u] || (q[u] = {})),
                        (j = k[a] || []),
                        (n = j[0] === w && j[1]),
                        (m = j[0] === w && j[2]),
                        (l = n && q.childNodes[n]);
                      while ((l = (++n && l && l[p]) || (m = n = 0) || o.pop()))
                        if (1 === l.nodeType && ++m && l === b) {
                          k[a] = [w, n, m];
                          break;
                        }
                    } else if (
                      s &&
                      (j = (b[u] || (b[u] = {}))[a]) &&
                      j[0] === w
                    )
                      m = j[1];
                    else
                      while ((l = (++n && l && l[p]) || (m = n = 0) || o.pop()))
                        if (
                          (h
                            ? l.nodeName.toLowerCase() === r
                            : 1 === l.nodeType) &&
                          ++m &&
                          (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)
                        )
                          break;
                    return (m -= e), m === d || (m % d === 0 && m / d >= 0);
                  }
                };
          },
          PSEUDO: function (a, b) {
            var c,
              e =
                d.pseudos[a] ||
                d.setFilters[a.toLowerCase()] ||
                gb.error("unsupported pseudo: " + a);
            return e[u]
              ? e(b)
              : e.length > 1
              ? ((c = [a, a, "", b]),
                d.setFilters.hasOwnProperty(a.toLowerCase())
                  ? ib(function (a, c) {
                      var d,
                        f = e(a, b),
                        g = f.length;
                      while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                    })
                  : function (a) {
                      return e(a, 0, c);
                    })
              : e;
          },
        },
        pseudos: {
          not: ib(function (a) {
            var b = [],
              c = [],
              d = h(a.replace(R, "$1"));
            return d[u]
              ? ib(function (a, b, c, e) {
                  var f,
                    g = d(a, null, e, []),
                    h = a.length;
                  while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                })
              : function (a, e, f) {
                  return (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop();
                };
          }),
          has: ib(function (a) {
            return function (b) {
              return gb(a, b).length > 0;
            };
          }),
          contains: ib(function (a) {
            return (
              (a = a.replace(cb, db)),
              function (b) {
                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
              }
            );
          }),
          lang: ib(function (a) {
            return (
              W.test(a || "") || gb.error("unsupported lang: " + a),
              (a = a.replace(cb, db).toLowerCase()),
              function (b) {
                var c;
                do
                  if (
                    (c = p
                      ? b.lang
                      : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                  )
                    return (
                      (c = c.toLowerCase()), c === a || 0 === c.indexOf(a + "-")
                    );
                while ((b = b.parentNode) && 1 === b.nodeType);
                return !1;
              }
            );
          }),
          target: function (b) {
            var c = a.location && a.location.hash;
            return c && c.slice(1) === b.id;
          },
          root: function (a) {
            return a === o;
          },
          focus: function (a) {
            return (
              a === n.activeElement &&
              (!n.hasFocus || n.hasFocus()) &&
              !!(a.type || a.href || ~a.tabIndex)
            );
          },
          enabled: function (a) {
            return a.disabled === !1;
          },
          disabled: function (a) {
            return a.disabled === !0;
          },
          checked: function (a) {
            var b = a.nodeName.toLowerCase();
            return (
              ("input" === b && !!a.checked) || ("option" === b && !!a.selected)
            );
          },
          selected: function (a) {
            return (
              a.parentNode && a.parentNode.selectedIndex, a.selected === !0
            );
          },
          empty: function (a) {
            for (a = a.firstChild; a; a = a.nextSibling)
              if (a.nodeType < 6) return !1;
            return !0;
          },
          parent: function (a) {
            return !d.pseudos.empty(a);
          },
          header: function (a) {
            return Z.test(a.nodeName);
          },
          input: function (a) {
            return Y.test(a.nodeName);
          },
          button: function (a) {
            var b = a.nodeName.toLowerCase();
            return ("input" === b && "button" === a.type) || "button" === b;
          },
          text: function (a) {
            var b;
            return (
              "input" === a.nodeName.toLowerCase() &&
              "text" === a.type &&
              (null == (b = a.getAttribute("type")) ||
                "text" === b.toLowerCase())
            );
          },
          first: ob(function () {
            return [0];
          }),
          last: ob(function (a, b) {
            return [b - 1];
          }),
          eq: ob(function (a, b, c) {
            return [0 > c ? c + b : c];
          }),
          even: ob(function (a, b) {
            for (var c = 0; b > c; c += 2) a.push(c);
            return a;
          }),
          odd: ob(function (a, b) {
            for (var c = 1; b > c; c += 2) a.push(c);
            return a;
          }),
          lt: ob(function (a, b, c) {
            for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
            return a;
          }),
          gt: ob(function (a, b, c) {
            for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
            return a;
          }),
        },
      }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = mb(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = nb(b);
    function qb() {}
    (qb.prototype = d.filters = d.pseudos),
      (d.setFilters = new qb()),
      (g = gb.tokenize = function (a, b) {
        var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];
        if (k) return b ? 0 : k.slice(0);
        (h = a), (i = []), (j = d.preFilter);
        while (h) {
          (!c || (e = S.exec(h))) &&
            (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
            (c = !1),
            (e = T.exec(h)) &&
              ((c = e.shift()),
              f.push({ value: c, type: e[0].replace(R, " ") }),
              (h = h.slice(c.length)));
          for (g in d.filter)
            !(e = X[g].exec(h)) ||
              (j[g] && !(e = j[g](e))) ||
              ((c = e.shift()),
              f.push({ value: c, type: g, matches: e }),
              (h = h.slice(c.length)));
          if (!c) break;
        }
        return b ? h.length : h ? gb.error(a) : z(a, i).slice(0);
      });
    function rb(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d;
    }
    function sb(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first
        ? function (b, c, f) {
            while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function (b, c, g) {
            var h,
              i,
              j = [w, f];
            if (g) {
              while ((b = b[d]))
                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || e) {
                  if (
                    ((i = b[u] || (b[u] = {})),
                    (h = i[d]) && h[0] === w && h[1] === f)
                  )
                    return (j[2] = h[2]);
                  if (((i[d] = j), (j[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function tb(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function ub(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) gb(a, b[d], c);
      return c;
    }
    function vb(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g;
    }
    function wb(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = wb(d)),
        e && !e[u] && (e = wb(e, f)),
        ib(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ub(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : vb(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = vb(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? J(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = vb(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
        })
      );
    }
    function xb(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = sb(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = sb(
            function (a) {
              return J(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        f > i;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [sb(tb(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
            return wb(
              i > 1 && tb(m),
              i > 1 &&
                rb(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(R, "$1"),
              c,
              e > i && xb(a.slice(i, e)),
              f > e && xb((a = a.slice(e))),
              f > e && rb(a)
            );
          }
          m.push(c);
        }
      return tb(m);
    }
    function yb(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            m,
            o,
            p = 0,
            q = "0",
            r = f && [],
            s = [],
            t = j,
            u = f || (e && d.find.TAG("*", k)),
            v = (w += null == t ? 1 : Math.random() || 0.1),
            x = u.length;
          for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
            if (e && l) {
              m = 0;
              while ((o = a[m++]))
                if (o(l, g, h)) {
                  i.push(l);
                  break;
                }
              k && (w = v);
            }
            c && ((l = !o && l) && p--, f && r.push(l));
          }
          if (((p += q), c && q !== p)) {
            m = 0;
            while ((o = b[m++])) o(r, s, g, h);
            if (f) {
              if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));
              s = vb(s);
            }
            H.apply(i, s),
              k && !f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i);
          }
          return k && ((w = v), (j = t)), r;
        };
      return c ? ib(f) : f;
    }
    return (
      (h = gb.compile = function (a, b) {
        var c,
          d = [],
          e = [],
          f = A[a + " "];
        if (!f) {
          b || (b = g(a)), (c = b.length);
          while (c--) (f = xb(b[c])), f[u] ? d.push(f) : e.push(f);
          (f = A(a, yb(e, d))), (f.selector = a);
        }
        return f;
      }),
      (i = gb.select = function (a, b, e, f) {
        var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g((a = n.selector || a));
        if (((e = e || []), 1 === o.length)) {
          if (
            ((j = o[0] = o[0].slice(0)),
            j.length > 2 &&
              "ID" === (k = j[0]).type &&
              c.getById &&
              9 === b.nodeType &&
              p &&
              d.relative[j[1].type])
          ) {
            if (
              ((b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0]), !b)
            )
              return e;
            n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
          }
          i = X.needsContext.test(a) ? 0 : j.length;
          while (i--) {
            if (((k = j[i]), d.relative[(l = k.type)])) break;
            if (
              (m = d.find[l]) &&
              (f = m(
                k.matches[0].replace(cb, db),
                (ab.test(j[0].type) && pb(b.parentNode)) || b
              ))
            ) {
              if ((j.splice(i, 1), (a = f.length && rb(j)), !a))
                return H.apply(e, f), e;
              break;
            }
          }
        }
        return (
          (n || h(a, o))(f, b, !p, e, (ab.test(a) && pb(b.parentNode)) || b), e
        );
      }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = jb(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      })),
      jb(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        kb("type|href|height|width", function (a, b, c) {
          return c
            ? void 0
            : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        jb(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        kb("value", function (a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase()
            ? void 0
            : a.defaultValue;
        }),
      jb(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        kb(K, function (a, b, c) {
          var d;
          return c
            ? void 0
            : a[b] === !0
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
      gb
    );
  })(a);
  (n.find = t),
    (n.expr = t.selectors),
    (n.expr[":"] = n.expr.pseudos),
    (n.unique = t.uniqueSort),
    (n.text = t.getText),
    (n.isXMLDoc = t.isXML),
    (n.contains = t.contains);
  var u = n.expr.match.needsContext,
    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^.[^:#\[\.,]*$/;
  function x(a, b, c) {
    if (n.isFunction(b))
      return n.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return n.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (w.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }
    return n.grep(a, function (a) {
      return g.call(b, a) >= 0 !== c;
    });
  }
  (n.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? n.find.matchesSelector(d, a)
          ? [d]
          : []
        : n.find.matches(
            a,
            n.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    n.fn.extend({
      find: function (a) {
        var b,
          c = this.length,
          d = [],
          e = this;
        if ("string" != typeof a)
          return this.pushStack(
            n(a).filter(function () {
              for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
            })
          );
        for (b = 0; c > b; b++) n.find(a, e[b], d);
        return (
          (d = this.pushStack(c > 1 ? n.unique(d) : d)),
          (d.selector = this.selector ? this.selector + " " + a : a),
          d
        );
      },
      filter: function (a) {
        return this.pushStack(x(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(x(this, a || [], !0));
      },
      is: function (a) {
        return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1)
          .length;
      },
    });
  var y,
    z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    A = (n.fn.init = function (a, b) {
      var c, d;
      if (!a) return this;
      if ("string" == typeof a) {
        if (
          ((c =
            "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
              ? [null, a, null]
              : z.exec(a)),
          !c || (!c[1] && b))
        )
          return !b || b.jquery
            ? (b || y).find(a)
            : this.constructor(b).find(a);
        if (c[1]) {
          if (
            ((b = b instanceof n ? b[0] : b),
            n.merge(
              this,
              n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)
            ),
            v.test(c[1]) && n.isPlainObject(b))
          )
            for (c in b)
              n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this;
        }
        return (
          (d = l.getElementById(c[2])),
          d && d.parentNode && ((this.length = 1), (this[0] = d)),
          (this.context = l),
          (this.selector = a),
          this
        );
      }
      return a.nodeType
        ? ((this.context = this[0] = a), (this.length = 1), this)
        : n.isFunction(a)
        ? "undefined" != typeof y.ready
          ? y.ready(a)
          : a(n)
        : (void 0 !== a.selector &&
            ((this.selector = a.selector), (this.context = a.context)),
          n.makeArray(a, this));
    });
  (A.prototype = n.fn), (y = n(l));
  var B = /^(?:parents|prev(?:Until|All))/,
    C = { children: !0, contents: !0, next: !0, prev: !0 };
  n.extend({
    dir: function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    sibling: function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
  }),
    n.fn.extend({
      has: function (a) {
        var b = n(a, this),
          c = b.length;
        return this.filter(function () {
          for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
        });
      },
      closest: function (a, b) {
        for (
          var c,
            d = 0,
            e = this.length,
            f = [],
            g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0;
          e > d;
          d++
        )
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && n.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
        return this.pushStack(f.length > 1 ? n.unique(f) : f);
      },
      index: function (a) {
        return a
          ? "string" == typeof a
            ? g.call(n(a), this[0])
            : g.call(this, a.jquery ? a[0] : a)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (a, b) {
        return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
      },
      addBack: function (a) {
        return this.add(
          null == a ? this.prevObject : this.prevObject.filter(a)
        );
      },
    });
  function D(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a;
  }
  n.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return n.dir(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return n.dir(a, "parentNode", c);
      },
      next: function (a) {
        return D(a, "nextSibling");
      },
      prev: function (a) {
        return D(a, "previousSibling");
      },
      nextAll: function (a) {
        return n.dir(a, "nextSibling");
      },
      prevAll: function (a) {
        return n.dir(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return n.dir(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return n.dir(a, "previousSibling", c);
      },
      siblings: function (a) {
        return n.sibling((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return n.sibling(a.firstChild);
      },
      contents: function (a) {
        return a.contentDocument || n.merge([], a.childNodes);
      },
    },
    function (a, b) {
      n.fn[a] = function (c, d) {
        var e = n.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = n.filter(d, e)),
          this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()),
          this.pushStack(e)
        );
      };
    }
  );
  var E = /\S+/g,
    F = {};
  function G(a) {
    var b = (F[a] = {});
    return (
      n.each(a.match(E) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  (n.Callbacks = function (a) {
    a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
    var b,
      c,
      d,
      e,
      f,
      g,
      h = [],
      i = !a.once && [],
      j = function (l) {
        for (
          b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0;
          h && f > g;
          g++
        )
          if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
            b = !1;
            break;
          }
        (d = !1),
          h && (i ? i.length && j(i.shift()) : b ? (h = []) : k.disable());
      },
      k = {
        add: function () {
          if (h) {
            var c = h.length;
            !(function g(b) {
              n.each(b, function (b, c) {
                var d = n.type(c);
                "function" === d
                  ? (a.unique && k.has(c)) || h.push(c)
                  : c && c.length && "string" !== d && g(c);
              });
            })(arguments),
              d ? (f = h.length) : b && ((e = c), j(b));
          }
          return this;
        },
        remove: function () {
          return (
            h &&
              n.each(arguments, function (a, b) {
                var c;
                while ((c = n.inArray(b, h, c)) > -1)
                  h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
              }),
            this
          );
        },
        has: function (a) {
          return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
        },
        empty: function () {
          return (h = []), (f = 0), this;
        },
        disable: function () {
          return (h = i = b = void 0), this;
        },
        disabled: function () {
          return !h;
        },
        lock: function () {
          return (i = void 0), b || k.disable(), this;
        },
        locked: function () {
          return !i;
        },
        fireWith: function (a, b) {
          return (
            !h ||
              (c && !i) ||
              ((b = b || []),
              (b = [a, b.slice ? b.slice() : b]),
              d ? i.push(b) : j(b)),
            this
          );
        },
        fire: function () {
          return k.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!c;
        },
      };
    return k;
  }),
    n.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", n.Callbacks("once memory"), "resolved"],
            ["reject", "fail", n.Callbacks("once memory"), "rejected"],
            ["notify", "progress", n.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return n
                .Deferred(function (c) {
                  n.each(b, function (b, f) {
                    var g = n.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && n.isFunction(a.promise)
                        ? a
                            .promise()
                            .done(c.resolve)
                            .fail(c.reject)
                            .progress(c.notify)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? n.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          n.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || (a && n.isFunction(a.promise)) ? e : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function (a, b, c) {
            return function (e) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? d.call(arguments) : e),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
          i,
          j,
          k;
        if (e > 1)
          for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
            c[b] && n.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .done(h(b, k, c))
                  .fail(g.reject)
                  .progress(h(b, j, i))
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  var H;
  (n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }),
    n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? n.readyWait++ : n.ready(!0);
      },
      ready: function (a) {
        (a === !0 ? --n.readyWait : n.isReady) ||
          ((n.isReady = !0),
          (a !== !0 && --n.readyWait > 0) ||
            (H.resolveWith(l, [n]),
            n.fn.triggerHandler &&
              (n(l).triggerHandler("ready"), n(l).off("ready"))));
      },
    });
  function I() {
    l.removeEventListener("DOMContentLoaded", I, !1),
      a.removeEventListener("load", I, !1),
      n.ready();
  }
  (n.ready.promise = function (b) {
    return (
      H ||
        ((H = n.Deferred()),
        "complete" === l.readyState
          ? setTimeout(n.ready)
          : (l.addEventListener("DOMContentLoaded", I, !1),
            a.addEventListener("load", I, !1))),
      H.promise(b)
    );
  }),
    n.ready.promise();
  var J = (n.access = function (a, b, c, d, e, f, g) {
    var h = 0,
      i = a.length,
      j = null == c;
    if ("object" === n.type(c)) {
      e = !0;
      for (h in c) n.access(a, b, h, c[h], !0, f, g);
    } else if (
      void 0 !== d &&
      ((e = !0),
      n.isFunction(d) || (g = !0),
      j &&
        (g
          ? (b.call(a, d), (b = null))
          : ((j = b),
            (b = function (a, b, c) {
              return j.call(n(a), c);
            }))),
      b)
    )
      for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  });
  n.acceptData = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };
  function K() {
    Object.defineProperty((this.cache = {}), 0, {
      get: function () {
        return {};
      },
    }),
      (this.expando = n.expando + K.uid++);
  }
  (K.uid = 1),
    (K.accepts = n.acceptData),
    (K.prototype = {
      key: function (a) {
        if (!K.accepts(a)) return 0;
        var b = {},
          c = a[this.expando];
        if (!c) {
          c = K.uid++;
          try {
            (b[this.expando] = { value: c }), Object.defineProperties(a, b);
          } catch (d) {
            (b[this.expando] = c), n.extend(a, b);
          }
        }
        return this.cache[c] || (this.cache[c] = {}), c;
      },
      set: function (a, b, c) {
        var d,
          e = this.key(a),
          f = this.cache[e];
        if ("string" == typeof b) f[b] = c;
        else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
        else for (d in b) f[d] = b[d];
        return f;
      },
      get: function (a, b) {
        var c = this.cache[this.key(a)];
        return void 0 === b ? c : c[b];
      },
      access: function (a, b, c) {
        var d;
        return void 0 === b || (b && "string" == typeof b && void 0 === c)
          ? ((d = this.get(a, b)),
            void 0 !== d ? d : this.get(a, n.camelCase(b)))
          : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function (a, b) {
        var c,
          d,
          e,
          f = this.key(a),
          g = this.cache[f];
        if (void 0 === b) this.cache[f] = {};
        else {
          n.isArray(b)
            ? (d = b.concat(b.map(n.camelCase)))
            : ((e = n.camelCase(b)),
              b in g
                ? (d = [b, e])
                : ((d = e), (d = d in g ? [d] : d.match(E) || []))),
            (c = d.length);
          while (c--) delete g[d[c]];
        }
      },
      hasData: function (a) {
        return !n.isEmptyObject(this.cache[a[this.expando]] || {});
      },
      discard: function (a) {
        a[this.expando] && delete this.cache[a[this.expando]];
      },
    });
  var L = new K(),
    M = new K(),
    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;
  function P(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((d = "data-" + b.replace(O, "-$1").toLowerCase()),
        (c = a.getAttribute(d)),
        "string" == typeof c)
      ) {
        try {
          c =
            "true" === c
              ? !0
              : "false" === c
              ? !1
              : "null" === c
              ? null
              : +c + "" === c
              ? +c
              : N.test(c)
              ? n.parseJSON(c)
              : c;
        } catch (e) {}
        M.set(a, b, c);
      } else c = void 0;
    return c;
  }
  n.extend({
    hasData: function (a) {
      return M.hasData(a) || L.hasData(a);
    },
    data: function (a, b, c) {
      return M.access(a, b, c);
    },
    removeData: function (a, b) {
      M.remove(a, b);
    },
    _data: function (a, b, c) {
      return L.access(a, b, c);
    },
    _removeData: function (a, b) {
      L.remove(a, b);
    },
  }),
    n.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = M.get(f)), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = n.camelCase(d.slice(5))), P(f, d, e[d])));
            L.set(f, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              M.set(this, a);
            })
          : J(
              this,
              function (b) {
                var c,
                  d = n.camelCase(a);
                if (f && void 0 === b) {
                  if (((c = M.get(f, a)), void 0 !== c)) return c;
                  if (((c = M.get(f, d)), void 0 !== c)) return c;
                  if (((c = P(f, d, void 0)), void 0 !== c)) return c;
                } else
                  this.each(function () {
                    var c = M.get(this, d);
                    M.set(this, d, b),
                      -1 !== a.indexOf("-") &&
                        void 0 !== c &&
                        M.set(this, a, b);
                  });
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (a) {
        return this.each(function () {
          M.remove(this, a);
        });
      },
    }),
    n.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = L.get(a, b)),
            c &&
              (!d || n.isArray(c)
                ? (d = L.access(a, b, n.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
            n.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          L.get(a, c) ||
          L.access(a, c, {
            empty: n.Callbacks("once memory").add(function () {
              L.remove(a, [b + "queue", c]);
            }),
          })
        );
      },
    }),
    n.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? n.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          n.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = L.get(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    R = ["Top", "Right", "Bottom", "Left"],
    S = function (a, b) {
      return (
        (a = b || a),
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
      );
    },
    T = /^(?:checkbox|radio)$/i;
  !(function () {
    var a = l.createDocumentFragment(),
      b = a.appendChild(l.createElement("div")),
      c = l.createElement("input");
    c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      b.appendChild(c),
      (k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var U = "undefined";
  k.focusinBubbles = "onfocusin" in a;
  var V = /^key/,
    W = /^(?:mouse|pointer|contextmenu)|click/,
    X = /^(?:focusinfocus|focusoutblur)$/,
    Y = /^([^.]*)(?:\.(.+)|)$/;
  function Z() {
    return !0;
  }
  function $() {
    return !1;
  }
  function _() {
    try {
      return l.activeElement;
    } catch (a) {}
  }
  (n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = L.get(a);
      if (r) {
        c.handler && ((f = c), (c = f.handler), (e = f.selector)),
          c.guid || (c.guid = n.guid++),
          (i = r.events) || (i = r.events = {}),
          (g = r.handle) ||
            (g = r.handle = function (b) {
              return typeof n !== U && n.event.triggered !== b.type
                ? n.event.dispatch.apply(a, arguments)
                : void 0;
            }),
          (b = (b || "").match(E) || [""]),
          (j = b.length);
        while (j--)
          (h = Y.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o &&
              ((l = n.event.special[o] || {}),
              (o = (e ? l.delegateType : l.bindType) || o),
              (l = n.event.special[o] || {}),
              (k = n.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && n.expr.match.needsContext.test(e),
                  namespace: p.join("."),
                },
                f
              )),
              (m = i[o]) ||
                ((m = i[o] = []),
                (m.delegateCount = 0),
                (l.setup && l.setup.call(a, d, p, g) !== !1) ||
                  (a.addEventListener && a.addEventListener(o, g, !1))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (n.event.global[o] = !0));
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = L.hasData(a) && L.get(a);
      if (r && (i = r.events)) {
        (b = (b || "").match(E) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = Y.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o)
          ) {
            (l = n.event.special[o] || {}),
              (o = (d ? l.delegateType : l.bindType) || o),
              (m = i[o] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (g = f = m.length);
            while (f--)
              (k = m[f]),
                (!e && q !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k));
            g &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                n.removeEvent(a, o, r.handle),
              delete i[o]);
          } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
      }
    },
    trigger: function (b, c, d, e) {
      var f,
        g,
        h,
        i,
        k,
        m,
        o,
        p = [d || l],
        q = j.call(b, "type") ? b.type : b,
        r = j.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((g = h = d = d || l),
        3 !== d.nodeType &&
          8 !== d.nodeType &&
          !X.test(q + n.event.triggered) &&
          (q.indexOf(".") >= 0 &&
            ((r = q.split(".")), (q = r.shift()), r.sort()),
          (k = q.indexOf(":") < 0 && "on" + q),
          (b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b)),
          (b.isTrigger = e ? 2 : 3),
          (b.namespace = r.join(".")),
          (b.namespace_re = b.namespace
            ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = d),
          (c = null == c ? [b] : n.makeArray(c, [b])),
          (o = n.event.special[q] || {}),
          e || !o.trigger || o.trigger.apply(d, c) !== !1))
      ) {
        if (!e && !o.noBubble && !n.isWindow(d)) {
          for (
            i = o.delegateType || q, X.test(i + q) || (g = g.parentNode);
            g;
            g = g.parentNode
          )
            p.push(g), (h = g);
          h === (d.ownerDocument || l) &&
            p.push(h.defaultView || h.parentWindow || a);
        }
        f = 0;
        while ((g = p[f++]) && !b.isPropagationStopped())
          (b.type = f > 1 ? i : o.bindType || q),
            (m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle")),
            m && m.apply(g, c),
            (m = k && g[k]),
            m &&
              m.apply &&
              n.acceptData(g) &&
              ((b.result = m.apply(g, c)),
              b.result === !1 && b.preventDefault());
        return (
          (b.type = q),
          e ||
            b.isDefaultPrevented() ||
            (o._default && o._default.apply(p.pop(), c) !== !1) ||
            !n.acceptData(d) ||
            (k &&
              n.isFunction(d[q]) &&
              !n.isWindow(d) &&
              ((h = d[k]),
              h && (d[k] = null),
              (n.event.triggered = q),
              d[q](),
              (n.event.triggered = void 0),
              h && (d[k] = h))),
          b.result
        );
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b,
        c,
        e,
        f,
        g,
        h = [],
        i = d.call(arguments),
        j = (L.get(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, a) !== !1)
      ) {
        (h = n.event.handlers.call(this, a, j)), (b = 0);
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          (a.currentTarget = f.elem), (c = 0);
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
            (!a.namespace_re || a.namespace_re.test(g.namespace)) &&
              ((a.handleObj = g),
              (a.data = g.data),
              (e = (
                (n.event.special[g.origType] || {}).handle || g.handler
              ).apply(f.elem, i)),
              void 0 !== e &&
                (a.result = e) === !1 &&
                (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))
        for (; i !== this; i = i.parentNode || this)
          if (i.disabled !== !0 || "click" !== a.type) {
            for (d = [], c = 0; h > c; c++)
              (f = b[c]),
                (e = f.selector + " "),
                void 0 === d[e] &&
                  (d[e] = f.needsContext
                    ? n(e, this).index(i) >= 0
                    : n.find(e, this, null, [i]).length),
                d[e] && d.push(f);
            d.length && g.push({ elem: i, handlers: d });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
      " "
    ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
        " "
      ),
      filter: function (a, b) {
        var c,
          d,
          e,
          f = b.button;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((c = a.target.ownerDocument || l),
            (d = c.documentElement),
            (e = c.body),
            (a.pageX =
              b.clientX +
              ((d && d.scrollLeft) || (e && e.scrollLeft) || 0) -
              ((d && d.clientLeft) || (e && e.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((d && d.scrollTop) || (e && e.scrollTop) || 0) -
              ((d && d.clientTop) || (e && e.clientTop) || 0))),
          a.which ||
            void 0 === f ||
            (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
          a
        );
      },
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b,
        c,
        d,
        e = a.type,
        f = a,
        g = this.fixHooks[e];
      g ||
        (this.fixHooks[e] = g = W.test(e)
          ? this.mouseHooks
          : V.test(e)
          ? this.keyHooks
          : {}),
        (d = g.props ? this.props.concat(g.props) : this.props),
        (a = new n.Event(f)),
        (b = d.length);
      while (b--) (c = d[b]), (a[c] = f[c]);
      return (
        a.target || (a.target = l),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        g.filter ? g.filter(a, f) : a
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== _() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === _() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            n.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return n.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
    simulate: function (a, b, c, d) {
      var e = n.extend(new n.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {},
      });
      d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (n.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    }),
    (n.Event = function (a, b) {
      return this instanceof n.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? Z
                  : $))
            : (this.type = a),
          b && n.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || n.now()),
          void (this[n.expando] = !0))
        : new n.Event(a, b);
    }),
    (n.Event.prototype = {
      isDefaultPrevented: $,
      isPropagationStopped: $,
      isImmediatePropagationStopped: $,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = Z),
          a && a.preventDefault && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = Z),
          a && a.stopPropagation && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = Z),
          a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    n.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        n.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (!e || (e !== d && !n.contains(d, e))) &&
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    k.focusinBubbles ||
      n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          n.event.simulate(b, a.target, n.event.fix(a), !0);
        };
        n.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = L.access(d, b);
            e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = L.access(d, b) - 1;
            e
              ? L.access(d, b, e)
              : (d.removeEventListener(a, c, !0), L.remove(d, b));
          },
        };
      }),
    n.fn.extend({
      on: function (a, b, c, d, e) {
        var f, g;
        if ("object" == typeof a) {
          "string" != typeof b && ((c = c || b), (b = void 0));
          for (g in a) this.on(g, b, c, a[g], e);
          return this;
        }
        if (
          (null == c && null == d
            ? ((d = b), (c = b = void 0))
            : null == d &&
              ("string" == typeof b
                ? ((d = c), (c = void 0))
                : ((d = c), (c = b), (b = void 0))),
          d === !1)
        )
          d = $;
        else if (!d) return this;
        return (
          1 === e &&
            ((f = d),
            (d = function (a) {
              return n().off(a), f.apply(this, arguments);
            }),
            (d.guid = f.guid || (f.guid = n.guid++))),
          this.each(function () {
            n.event.add(this, a, d, c, b);
          })
        );
      },
      one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            n(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b === !1 || "function" == typeof b) && ((c = b), (b = void 0)),
          c === !1 && (c = $),
          this.each(function () {
            n.event.remove(this, a, c, b);
          })
        );
      },
      trigger: function (a, b) {
        return this.each(function () {
          n.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? n.event.trigger(a, b, c, !0) : void 0;
      },
    });
  var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    bb = /<([\w:]+)/,
    cb = /<|&#?\w+;/,
    db = /<(?:script|style|link)/i,
    eb = /checked\s*(?:[^=]|=\s*.checked.)/i,
    fb = /^$|\/(?:java|ecma)script/i,
    gb = /^true\/(.*)/,
    hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ib = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (ib.optgroup = ib.option),
    (ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead),
    (ib.th = ib.td);
  function jb(a, b) {
    return n.nodeName(a, "table") &&
      n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function kb(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function lb(a) {
    var b = gb.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function mb(a, b) {
    for (var c = 0, d = a.length; d > c; c++)
      L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
  }
  function nb(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (
        L.hasData(a) &&
        ((f = L.access(a)), (g = L.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {});
        for (e in j)
          for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
      }
      M.hasData(a) && ((h = M.access(a)), (i = n.extend({}, h)), M.set(b, i));
    }
  }
  function ob(a, b) {
    var c = a.getElementsByTagName
      ? a.getElementsByTagName(b || "*")
      : a.querySelectorAll
      ? a.querySelectorAll(b || "*")
      : [];
    return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], c) : c;
  }
  function pb(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && T.test(a.type)
      ? (b.checked = a.checked)
      : ("input" === c || "textarea" === c) &&
        (b.defaultValue = a.defaultValue);
  }
  n.extend({
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.cloneNode(!0),
        i = n.contains(a.ownerDocument, a);
      if (
        !(
          k.noCloneChecked ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          n.isXMLDoc(a)
        )
      )
        for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++)
          pb(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++)
            nb(f[d], g[d]);
        else nb(a, h);
      return (
        (g = ob(h, "script")), g.length > 0 && mb(g, !i && ob(a, "script")), h
      );
    },
    buildFragment: function (a, b, c, d) {
      for (
        var e,
          f,
          g,
          h,
          i,
          j,
          k = b.createDocumentFragment(),
          l = [],
          m = 0,
          o = a.length;
        o > m;
        m++
      )
        if (((e = a[m]), e || 0 === e))
          if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
          else if (cb.test(e)) {
            (f = f || k.appendChild(b.createElement("div"))),
              (g = (bb.exec(e) || ["", ""])[1].toLowerCase()),
              (h = ib[g] || ib._default),
              (f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2]),
              (j = h[0]);
            while (j--) f = f.lastChild;
            n.merge(l, f.childNodes), (f = k.firstChild), (f.textContent = "");
          } else l.push(b.createTextNode(e));
      (k.textContent = ""), (m = 0);
      while ((e = l[m++]))
        if (
          (!d || -1 === n.inArray(e, d)) &&
          ((i = n.contains(e.ownerDocument, e)),
          (f = ob(k.appendChild(e), "script")),
          i && mb(f),
          c)
        ) {
          j = 0;
          while ((e = f[j++])) fb.test(e.type || "") && c.push(e);
        }
      return k;
    },
    cleanData: function (a) {
      for (
        var b, c, d, e, f = n.event.special, g = 0;
        void 0 !== (c = a[g]);
        g++
      ) {
        if (n.acceptData(c) && ((e = c[L.expando]), e && (b = L.cache[e]))) {
          if (b.events)
            for (d in b.events)
              f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
          L.cache[e] && delete L.cache[e];
        }
        delete M.cache[c[M.expando]];
      }
    },
  }),
    n.fn.extend({
      text: function (a) {
        return J(
          this,
          function (a) {
            return void 0 === a
              ? n.text(this)
              : this.empty().each(function () {
                  (1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType) &&
                    (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = jb(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = jb(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      remove: function (a, b) {
        for (
          var c, d = a ? n.filter(a, this) : this, e = 0;
          null != (c = d[e]);
          e++
        )
          b || 1 !== c.nodeType || n.cleanData(ob(c)),
            c.parentNode &&
              (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")),
              c.parentNode.removeChild(c));
        return this;
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (n.cleanData(ob(a, !1)), (a.textContent = ""));
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function () {
            return n.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return J(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if (
              "string" == typeof a &&
              !db.test(a) &&
              !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = a.replace(ab, "<$1></$2>");
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (n.cleanData(ob(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = arguments[0];
        return (
          this.domManip(arguments, function (b) {
            (a = this.parentNode),
              n.cleanData(ob(this)),
              a && a.replaceChild(b, this);
          }),
          a && (a.length || a.nodeType) ? this : this.remove()
        );
      },
      detach: function (a) {
        return this.remove(a, !0);
      },
      domManip: function (a, b) {
        a = e.apply([], a);
        var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          l = this.length,
          m = this,
          o = l - 1,
          p = a[0],
          q = n.isFunction(p);
        if (q || (l > 1 && "string" == typeof p && !k.checkClone && eb.test(p)))
          return this.each(function (c) {
            var d = m.eq(c);
            q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
          });
        if (
          l &&
          ((c = n.buildFragment(a, this[0].ownerDocument, !1, this)),
          (d = c.firstChild),
          1 === c.childNodes.length && (c = d),
          d)
        ) {
          for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++)
            (h = c),
              j !== o &&
                ((h = n.clone(h, !0, !0)), g && n.merge(f, ob(h, "script"))),
              b.call(this[j], h, j);
          if (g)
            for (
              i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0;
              g > j;
              j++
            )
              (h = f[j]),
                fb.test(h.type || "") &&
                  !L.access(h, "globalEval") &&
                  n.contains(i, h) &&
                  (h.src
                    ? n._evalUrl && n._evalUrl(h.src)
                    : n.globalEval(h.textContent.replace(hb, "")));
        }
        return this;
      },
    }),
    n.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        n.fn[a] = function (a) {
          for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)
            (c = h === g ? this : this.clone(!0)),
              n(e[h])[b](c),
              f.apply(d, c.get());
          return this.pushStack(d);
        };
      }
    );
  var qb,
    rb = {};
  function sb(b, c) {
    var d,
      e = n(c.createElement(b)).appendTo(c.body),
      f =
        a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0]))
          ? d.display
          : n.css(e[0], "display");
    return e.detach(), f;
  }
  function tb(a) {
    var b = l,
      c = rb[a];
    return (
      c ||
        ((c = sb(a, b)),
        ("none" !== c && c) ||
          ((qb = (
            qb || n("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = qb[0].contentDocument),
          b.write(),
          b.close(),
          (c = sb(a, b)),
          qb.detach()),
        (rb[a] = c)),
      c
    );
  }
  var ub = /^margin/,
    vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
    wb = function (b) {
      return b.ownerDocument.defaultView.opener
        ? b.ownerDocument.defaultView.getComputedStyle(b, null)
        : a.getComputedStyle(b, null);
    };
  function xb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return (
      (c = c || wb(a)),
      c && (g = c.getPropertyValue(b) || c[b]),
      c &&
        ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
        vb.test(g) &&
          ub.test(b) &&
          ((d = h.width),
          (e = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = d),
          (h.minWidth = e),
          (h.maxWidth = f))),
      void 0 !== g ? g + "" : g
    );
  }
  function yb(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  !(function () {
    var b,
      c,
      d = l.documentElement,
      e = l.createElement("div"),
      f = l.createElement("div");
    if (f.style) {
      (f.style.backgroundClip = "content-box"),
        (f.cloneNode(!0).style.backgroundClip = ""),
        (k.clearCloneStyle = "content-box" === f.style.backgroundClip),
        (e.style.cssText =
          "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
        e.appendChild(f);
      function g() {
        (f.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
          (f.innerHTML = ""),
          d.appendChild(e);
        var g = a.getComputedStyle(f, null);
        (b = "1%" !== g.top), (c = "4px" === g.width), d.removeChild(e);
      }
      a.getComputedStyle &&
        n.extend(k, {
          pixelPosition: function () {
            return g(), b;
          },
          boxSizingReliable: function () {
            return null == c && g(), c;
          },
          reliableMarginRight: function () {
            var b,
              c = f.appendChild(l.createElement("div"));
            return (
              (c.style.cssText = f.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (c.style.marginRight = c.style.width = "0"),
              (f.style.width = "1px"),
              d.appendChild(e),
              (b = !parseFloat(a.getComputedStyle(c, null).marginRight)),
              d.removeChild(e),
              f.removeChild(c),
              b
            );
          },
        });
    }
  })(),
    (n.swap = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    });
  var zb = /^(none|table(?!-c[ea]).+)/,
    Ab = new RegExp("^(" + Q + ")(.*)$", "i"),
    Bb = new RegExp("^([+-])=(" + Q + ")", "i"),
    Cb = { position: "absolute", visibility: "hidden", display: "block" },
    Db = { letterSpacing: "0", fontWeight: "400" },
    Eb = ["Webkit", "O", "Moz", "ms"];
  function Fb(a, b) {
    if (b in a) return b;
    var c = b[0].toUpperCase() + b.slice(1),
      d = b,
      e = Eb.length;
    while (e--) if (((b = Eb[e] + c), b in a)) return b;
    return d;
  }
  function Gb(a, b, c) {
    var d = Ab.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function Hb(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += n.css(a, c + R[f], !0, e)),
        d
          ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e)))
          : ((g += n.css(a, "padding" + R[f], !0, e)),
            "padding" !== c &&
              (g += n.css(a, "border" + R[f] + "Width", !0, e)));
    return g;
  }
  function Ib(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = wb(a),
      g = "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (
        ((e = xb(a, b, f)),
        (0 > e || null == e) && (e = a.style[b]),
        vb.test(e))
      )
        return e;
      (d = g && (k.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  function Jb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = L.get(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
                S(d) &&
                (f[g] = L.access(d, "olddisplay", tb(d.nodeName))))
            : ((e = S(d)),
              ("none" === c && e) ||
                L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && "none" !== d.style.display && "" !== d.style.display) ||
            (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = xb(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = n.camelCase(b),
          i = a.style;
        return (
          (b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h))),
          (g = n.cssHooks[b] || n.cssHooks[h]),
          void 0 === c
            ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : i[b]
            : ((f = typeof c),
              "string" === f &&
                (e = Bb.exec(c)) &&
                ((c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b))),
                (f = "number")),
              null != c &&
                c === c &&
                ("number" !== f || n.cssNumber[h] || (c += "px"),
                k.clearCloneStyle ||
                  "" !== c ||
                  0 !== b.indexOf("background") ||
                  (i[b] = "inherit"),
                (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                  (i[b] = c)),
              void 0)
        );
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = n.camelCase(b);
      return (
        (b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h))),
        (g = n.cssHooks[b] || n.cssHooks[h]),
        g && "get" in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = xb(a, b, d)),
        "normal" === e && b in Db && (e = Db[b]),
        "" === c || c
          ? ((f = parseFloat(e)), c === !0 || n.isNumeric(f) ? f || 0 : e)
          : e
      );
    },
  }),
    n.each(["height", "width"], function (a, b) {
      n.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth
              ? n.swap(a, Cb, function () {
                  return Ib(a, b, d);
                })
              : Ib(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e = d && wb(a);
          return Gb(
            a,
            c,
            d
              ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e)
              : 0
          );
        },
      };
    }),
    (n.cssHooks.marginRight = yb(k.reliableMarginRight, function (a, b) {
      return b
        ? n.swap(a, { display: "inline-block" }, xb, [a, "marginRight"])
        : void 0;
    })),
    n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (n.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            4 > d;
            d++
          )
            e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        ub.test(a) || (n.cssHooks[a + b].set = Gb);
    }),
    n.fn.extend({
      css: function (a, b) {
        return J(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (n.isArray(b)) {
              for (d = wb(a), e = b.length; e > g; g++)
                f[b[g]] = n.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return Jb(this, !0);
      },
      hide: function () {
        return Jb(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              S(this) ? n(this).show() : n(this).hide();
            });
      },
    });
  function Kb(a, b, c, d, e) {
    return new Kb.prototype.init(a, b, c, d, e);
  }
  (n.Tween = Kb),
    (Kb.prototype = {
      constructor: Kb,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || "swing"),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (n.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = Kb.propHooks[this.prop];
        return a && a.get ? a.get(this) : Kb.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = Kb.propHooks[this.prop];
        return (
          (this.pos = b = this.options.duration
            ? n.easing[this.easing](
                a,
                this.options.duration * a,
                0,
                1,
                this.options.duration
              )
            : a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : Kb.propHooks._default.set(this),
          this
        );
      },
    }),
    (Kb.prototype.init.prototype = Kb.prototype),
    (Kb.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return null == a.elem[a.prop] ||
            (a.elem.style && null != a.elem.style[a.prop])
            ? ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0)
            : a.elem[a.prop];
        },
        set: function (a) {
          n.fx.step[a.prop]
            ? n.fx.step[a.prop](a)
            : a.elem.style &&
              (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop])
            ? n.style(a.elem, a.prop, a.now + a.unit)
            : (a.elem[a.prop] = a.now);
        },
      },
    }),
    (Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
      set: function (a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
      },
    }),
    (n.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
    }),
    (n.fx = Kb.prototype.init),
    (n.fx.step = {});
  var Lb,
    Mb,
    Nb = /^(?:toggle|show|hide)$/,
    Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
    Pb = /queueHooks$/,
    Qb = [Vb],
    Rb = {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b),
            d = c.cur(),
            e = Ob.exec(b),
            f = (e && e[3]) || (n.cssNumber[a] ? "" : "px"),
            g =
              (n.cssNumber[a] || ("px" !== f && +d)) &&
              Ob.exec(n.css(c.elem, a)),
            h = 1,
            i = 20;
          if (g && g[3] !== f) {
            (f = f || g[3]), (e = e || []), (g = +d || 1);
            do (h = h || ".5"), (g /= h), n.style(c.elem, a, g + f);
            while (h !== (h = c.cur() / d) && 1 !== h && --i);
          }
          return (
            e &&
              ((g = c.start = +g || +d || 0),
              (c.unit = f),
              (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])),
            c
          );
        },
      ],
    };
  function Sb() {
    return (
      setTimeout(function () {
        Lb = void 0;
      }),
      (Lb = n.now())
    );
  }
  function Tb(a, b) {
    var c,
      d = 0,
      e = { height: a };
    for (b = b ? 1 : 0; 4 > d; d += 2 - b)
      (c = R[d]), (e["margin" + c] = e["padding" + c] = a);
    return b && (e.opacity = e.width = a), e;
  }
  function Ub(a, b, c) {
    for (
      var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function Vb(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = this,
      m = {},
      o = a.style,
      p = a.nodeType && S(a),
      q = L.get(a, "fxshow");
    c.queue ||
      ((h = n._queueHooks(a, "fx")),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      l.always(function () {
        l.always(function () {
          h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (j = n.css(a, "display")),
        (k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j),
        "inline" === k &&
          "none" === n.css(a, "float") &&
          (o.display = "inline-block")),
      c.overflow &&
        ((o.overflow = "hidden"),
        l.always(function () {
          (o.overflow = c.overflow[0]),
            (o.overflowX = c.overflow[1]),
            (o.overflowY = c.overflow[2]);
        }));
    for (d in b)
      if (((e = b[d]), Nb.exec(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))
        ) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0;
        }
        m[d] = (q && q[d]) || n.style(a, d);
      } else j = void 0;
    if (n.isEmptyObject(m))
      "inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j);
    else {
      q ? "hidden" in q && (p = q.hidden) : (q = L.access(a, "fxshow", {})),
        f && (q.hidden = !p),
        p
          ? n(a).show()
          : l.done(function () {
              n(a).hide();
            }),
        l.done(function () {
          var b;
          L.remove(a, "fxshow");
          for (b in m) n.style(a, b, m[b]);
        });
      for (d in m)
        (g = Ub(p ? q[d] : 0, d, l)),
          d in q ||
            ((q[d] = g.start),
            p &&
              ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }
  function Wb(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = n.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = n.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function Xb(a, b, c) {
    var d,
      e,
      f = 0,
      g = Qb.length,
      h = n.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = Lb || Sb(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, { specialEasing: {} }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: Lb || Sb(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = n.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
        },
      }),
      k = j.props;
    for (Wb(k, j.opts.specialEasing); g > f; f++)
      if ((d = Qb[f].call(j, a, k, j.opts))) return d;
    return (
      n.map(k, Ub, j),
      n.isFunction(j.opts.start) && j.opts.start.call(a, j),
      n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  (n.Animation = n.extend(Xb, {
    tweener: function (a, b) {
      n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]), (Rb[c] = Rb[c] || []), Rb[c].unshift(b);
    },
    prefilter: function (a, b) {
      b ? Qb.unshift(a) : Qb.push(a);
    },
  })),
    (n.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? n.extend({}, a)
          : {
              complete: c || (!c && b) || (n.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !n.isFunction(b) && b),
            };
      return (
        (d.duration = n.fx.off
          ? 0
          : "number" == typeof d.duration
          ? d.duration
          : d.duration in n.fx.speeds
          ? n.fx.speeds[d.duration]
          : n.fx.speeds._default),
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue);
        }),
        d
      );
    }),
    n.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(S)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
            var b = Xb(this, n.extend({}, a), f);
            (e || L.get(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = n.timers,
              g = L.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && Pb.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (b || !c) && n.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = L.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = n.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    n.each(["toggle", "show", "hide"], function (a, b) {
      var c = n.fn[b];
      n.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(Tb(b, !0), a, d, e);
      };
    }),
    n.each(
      {
        slideDown: Tb("show"),
        slideUp: Tb("hide"),
        slideToggle: Tb("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        n.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (n.timers = []),
    (n.fx.tick = function () {
      var a,
        b = 0,
        c = n.timers;
      for (Lb = n.now(); b < c.length; b++)
        (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
      c.length || n.fx.stop(), (Lb = void 0);
    }),
    (n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }),
    (n.fx.interval = 13),
    (n.fx.start = function () {
      Mb || (Mb = setInterval(n.fx.tick, n.fx.interval));
    }),
    (n.fx.stop = function () {
      clearInterval(Mb), (Mb = null);
    }),
    (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (n.fn.delay = function (a, b) {
      return (
        (a = n.fx ? n.fx.speeds[a] || a : a),
        (b = b || "fx"),
        this.queue(b, function (b, c) {
          var d = setTimeout(b, a);
          c.stop = function () {
            clearTimeout(d);
          };
        })
      );
    }),
    (function () {
      var a = l.createElement("input"),
        b = l.createElement("select"),
        c = b.appendChild(l.createElement("option"));
      (a.type = "checkbox"),
        (k.checkOn = "" !== a.value),
        (k.optSelected = c.selected),
        (b.disabled = !0),
        (k.optDisabled = !c.disabled),
        (a = l.createElement("input")),
        (a.value = "t"),
        (a.type = "radio"),
        (k.radioValue = "t" === a.value);
    })();
  var Yb,
    Zb,
    $b = n.expr.attrHandle;
  n.fn.extend({
    attr: function (a, b) {
      return J(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    },
  }),
    n.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f)
          return typeof a.getAttribute === U
            ? n.prop(a, b, c)
            : ((1 === f && n.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb))),
              void 0 === c
                ? d && "get" in d && null !== (e = d.get(a, b))
                  ? e
                  : ((e = n.find.attr(a, b)), null == e ? void 0 : e)
                : null !== c
                ? d && "set" in d && void 0 !== (e = d.set(a, c, b))
                  ? e
                  : (a.setAttribute(b, c + ""), c)
                : void n.removeAttr(a, b));
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(E);
        if (f && 1 === a.nodeType)
          while ((c = f[e++]))
            (d = n.propFix[c] || c),
              n.expr.match.bool.test(c) && (a[d] = !1),
              a.removeAttribute(c);
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
    }),
    (Zb = {
      set: function (a, b, c) {
        return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
      },
    }),
    n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = $b[b] || n.find.attr;
      $b[b] = function (a, b, d) {
        var e, f;
        return (
          d ||
            ((f = $b[b]),
            ($b[b] = e),
            (e = null != c(a, b, d) ? b.toLowerCase() : null),
            ($b[b] = f)),
          e
        );
      };
    });
  var _b = /^(?:input|select|textarea|button)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return J(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    },
  }),
    n.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (a, b, c) {
        var d,
          e,
          f,
          g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g)
          return (
            (f = 1 !== g || !n.isXMLDoc(a)),
            f && ((b = n.propFix[b] || b), (e = n.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href
              ? a.tabIndex
              : -1;
          },
        },
      },
    }),
    k.optSelected ||
      (n.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
      }),
    n.each(
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
        n.propFix[this.toLowerCase()] = this;
      }
    );
  var ac = /[\t\r\n\f]/g;
  n.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = "string" == typeof a && a,
        i = 0,
        j = this.length;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).addClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || "").match(E) || []; j > i; i++)
          if (
            ((c = this[i]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")))
          ) {
            f = 0;
            while ((e = b[f++])) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            (g = n.trim(d)), c.className !== g && (c.className = g);
          }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 0 === arguments.length || ("string" == typeof a && a),
        i = 0,
        j = this.length;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).removeClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || "").match(E) || []; j > i; i++)
          if (
            ((c = this[i]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(ac, " ") : "")))
          ) {
            f = 0;
            while ((e = b[f++]))
              while (d.indexOf(" " + e + " ") >= 0)
                d = d.replace(" " + e + " ", " ");
            (g = a ? n.trim(d) : ""), c.className !== g && (c.className = g);
          }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : this.each(
            n.isFunction(a)
              ? function (c) {
                  n(this).toggleClass(a.call(this, c, this.className, b), b);
                }
              : function () {
                  if ("string" === c) {
                    var b,
                      d = 0,
                      e = n(this),
                      f = a.match(E) || [];
                    while ((b = f[d++]))
                      e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                  } else
                    (c === U || "boolean" === c) &&
                      (this.className &&
                        L.set(this, "__className__", this.className),
                      (this.className =
                        this.className || a === !1
                          ? ""
                          : L.get(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
        if (
          1 === this[c].nodeType &&
          (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0
        )
          return !0;
      return !1;
    },
  });
  var bc = /\r/g;
  n.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = n.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, n(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : n.isArray(e) &&
                    (e = n.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  n.valHooks[this.type] ||
                  n.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)
          );
      }
    },
  }),
    n.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = n.find.attr(a, "value");
            return null != b ? b : n.trim(n.text(a));
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                !(
                  (!c.selected && i !== e) ||
                  (k.optDisabled
                    ? c.disabled
                    : null !== c.getAttribute("disabled")) ||
                  (c.parentNode.disabled &&
                    n.nodeName(c.parentNode, "optgroup"))
                ))
              ) {
                if (((b = n(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;
            while (g--)
              (d = e[g]), (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
            return c || (a.selectedIndex = -1), f;
          },
        },
      },
    }),
    n.each(["radio", "checkbox"], function () {
      (n.valHooks[this] = {
        set: function (a, b) {
          return n.isArray(b)
            ? (a.checked = n.inArray(n(a).val(), b) >= 0)
            : void 0;
        },
      }),
        k.checkOn ||
          (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    }),
    n.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        n.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    n.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    });
  var cc = n.now(),
    dc = /\?/;
  (n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }),
    (n.parseXML = function (a) {
      var b, c;
      if (!a || "string" != typeof a) return null;
      try {
        (c = new DOMParser()), (b = c.parseFromString(a, "text/xml"));
      } catch (d) {
        b = void 0;
      }
      return (
        (!b || b.getElementsByTagName("parsererror").length) &&
          n.error("Invalid XML: " + a),
        b
      );
    });
  var ec = /#.*$/,
    fc = /([?&])_=[^&]*/,
    gc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    hc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    ic = /^(?:GET|HEAD)$/,
    jc = /^\/\//,
    kc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    lc = {},
    mc = {},
    nc = "*/".concat("*"),
    oc = a.location.href,
    pc = kc.exec(oc.toLowerCase()) || [];
  function qc(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(E) || [];
      if (n.isFunction(c))
        while ((d = f[e++]))
          "+" === d[0]
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function rc(a, b, c, d) {
    var e = {},
      f = a === mc;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        n.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function sc(a, b) {
    var c,
      d,
      e = n.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && n.extend(!0, a, d), a;
  }
  function tc(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function uc(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: oc,
      type: "GET",
      isLocal: hc.test(pc[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": nc,
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
        "text json": n.parseJSON,
        "text xml": n.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? sc(sc(a, n.ajaxSettings), b) : sc(n.ajaxSettings, a);
    },
    ajaxPrefilter: qc(lc),
    ajaxTransport: qc(mc),
    ajax: function (a, b) {
      "object" == typeof a && ((b = a), (a = void 0)), (b = b || {});
      var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.ajaxSetup({}, b),
        l = k.context || k,
        m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
        o = n.Deferred(),
        p = n.Callbacks("once memory"),
        q = k.statusCode || {},
        r = {},
        s = {},
        t = 0,
        u = "canceled",
        v = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === t) {
              if (!f) {
                f = {};
                while ((b = gc.exec(e))) f[b[1].toLowerCase()] = b[2];
              }
              b = f[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === t ? e : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
          },
          overrideMimeType: function (a) {
            return t || (k.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > t) for (b in a) q[b] = [q[b], a[b]];
              else v.always(a[v.status]);
            return this;
          },
          abort: function (a) {
            var b = a || u;
            return c && c.abort(b), x(0, b), this;
          },
        };
      if (
        ((o.promise(v).complete = p.add),
        (v.success = v.done),
        (v.error = v.fail),
        (k.url = ((a || k.url || oc) + "")
          .replace(ec, "")
          .replace(jc, pc[1] + "//")),
        (k.type = b.method || b.type || k.method || k.type),
        (k.dataTypes = n
          .trim(k.dataType || "*")
          .toLowerCase()
          .match(E) || [""]),
        null == k.crossDomain &&
          ((h = kc.exec(k.url.toLowerCase())),
          (k.crossDomain = !(
            !h ||
            (h[1] === pc[1] &&
              h[2] === pc[2] &&
              (h[3] || ("http:" === h[1] ? "80" : "443")) ===
                (pc[3] || ("http:" === pc[1] ? "80" : "443")))
          ))),
        k.data &&
          k.processData &&
          "string" != typeof k.data &&
          (k.data = n.param(k.data, k.traditional)),
        rc(lc, k, b, v),
        2 === t)
      )
        return v;
      (i = n.event && k.global),
        i && 0 === n.active++ && n.event.trigger("ajaxStart"),
        (k.type = k.type.toUpperCase()),
        (k.hasContent = !ic.test(k.type)),
        (d = k.url),
        k.hasContent ||
          (k.data &&
            ((d = k.url += (dc.test(d) ? "&" : "?") + k.data), delete k.data),
          k.cache === !1 &&
            (k.url = fc.test(d)
              ? d.replace(fc, "$1_=" + cc++)
              : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)),
        k.ifModified &&
          (n.lastModified[d] &&
            v.setRequestHeader("If-Modified-Since", n.lastModified[d]),
          n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])),
        ((k.data && k.hasContent && k.contentType !== !1) || b.contentType) &&
          v.setRequestHeader("Content-Type", k.contentType),
        v.setRequestHeader(
          "Accept",
          k.dataTypes[0] && k.accepts[k.dataTypes[0]]
            ? k.accepts[k.dataTypes[0]] +
                ("*" !== k.dataTypes[0] ? ", " + nc + "; q=0.01" : "")
            : k.accepts["*"]
        );
      for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
        return v.abort();
      u = "abort";
      for (j in { success: 1, error: 1, complete: 1 }) v[j](k[j]);
      if ((c = rc(mc, k, b, v))) {
        (v.readyState = 1),
          i && m.trigger("ajaxSend", [v, k]),
          k.async &&
            k.timeout > 0 &&
            (g = setTimeout(function () {
              v.abort("timeout");
            }, k.timeout));
        try {
          (t = 1), c.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;
          x(-1, w);
        }
      } else x(-1, "No Transport");
      function x(a, b, f, h) {
        var j,
          r,
          s,
          u,
          w,
          x = b;
        2 !== t &&
          ((t = 2),
          g && clearTimeout(g),
          (c = void 0),
          (e = h || ""),
          (v.readyState = a > 0 ? 4 : 0),
          (j = (a >= 200 && 300 > a) || 304 === a),
          f && (u = tc(k, v, f)),
          (u = uc(k, u, v, j)),
          j
            ? (k.ifModified &&
                ((w = v.getResponseHeader("Last-Modified")),
                w && (n.lastModified[d] = w),
                (w = v.getResponseHeader("etag")),
                w && (n.etag[d] = w)),
              204 === a || "HEAD" === k.type
                ? (x = "nocontent")
                : 304 === a
                ? (x = "notmodified")
                : ((x = u.state), (r = u.data), (s = u.error), (j = !s)))
            : ((s = x), (a || !x) && ((x = "error"), 0 > a && (a = 0))),
          (v.status = a),
          (v.statusText = (b || x) + ""),
          j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
          v.statusCode(q),
          (q = void 0),
          i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
          p.fireWith(l, [v, x]),
          i &&
            (m.trigger("ajaxComplete", [v, k]),
            --n.active || n.event.trigger("ajaxStop")));
      }
      return v;
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script");
    },
  }),
    n.each(["get", "post"], function (a, b) {
      n[b] = function (a, c, d, e) {
        return (
          n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          n.ajax({ url: a, type: b, dataType: e, data: c, success: d })
        );
      };
    }),
    (n._evalUrl = function (a) {
      return n.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    n.fn.extend({
      wrapAll: function (a) {
        var b;
        return n.isFunction(a)
          ? this.each(function (b) {
              n(this).wrapAll(a.call(this, b));
            })
          : (this[0] &&
              ((b = n(a, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && b.insertBefore(this[0]),
              b
                .map(function () {
                  var a = this;
                  while (a.firstElementChild) a = a.firstElementChild;
                  return a;
                })
                .append(this)),
            this);
      },
      wrapInner: function (a) {
        return this.each(
          n.isFunction(a)
            ? function (b) {
                n(this).wrapInner(a.call(this, b));
              }
            : function () {
                var b = n(this),
                  c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
              }
        );
      },
      wrap: function (a) {
        var b = n.isFunction(a);
        return this.each(function (c) {
          n(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (n.expr.filters.hidden = function (a) {
      return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }),
    (n.expr.filters.visible = function (a) {
      return !n.expr.filters.hidden(a);
    });
  var vc = /%20/g,
    wc = /\[\]$/,
    xc = /\r?\n/g,
    yc = /^(?:submit|button|image|reset|file)$/i,
    zc = /^(?:input|select|textarea|keygen)/i;
  function Ac(a, b, c, d) {
    var e;
    if (n.isArray(b))
      n.each(b, function (b, e) {
        c || wc.test(a)
          ? d(a, e)
          : Ac(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
      });
    else if (c || "object" !== n.type(b)) d(a, b);
    else for (e in b) Ac(a + "[" + e + "]", b[e], c, d);
  }
  (n.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = n.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
      n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
    )
      n.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Ac(c, a[c], b, e);
    return d.join("&").replace(vc, "+");
  }),
    n.fn.extend({
      serialize: function () {
        return n.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = n.prop(this, "elements");
          return a ? n.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !n(this).is(":disabled") &&
              zc.test(this.nodeName) &&
              !yc.test(a) &&
              (this.checked || !T.test(a))
            );
          })
          .map(function (a, b) {
            var c = n(this).val();
            return null == c
              ? null
              : n.isArray(c)
              ? n.map(c, function (a) {
                  return { name: b.name, value: a.replace(xc, "\r\n") };
                })
              : { name: b.name, value: c.replace(xc, "\r\n") };
          })
          .get();
      },
    }),
    (n.ajaxSettings.xhr = function () {
      try {
        return new XMLHttpRequest();
      } catch (a) {}
    });
  var Bc = 0,
    Cc = {},
    Dc = { 0: 200, 1223: 204 },
    Ec = n.ajaxSettings.xhr();
  a.attachEvent &&
    a.attachEvent("onunload", function () {
      for (var a in Cc) Cc[a]();
    }),
    (k.cors = !!Ec && "withCredentials" in Ec),
    (k.ajax = Ec = !!Ec),
    n.ajaxTransport(function (a) {
      var b;
      return k.cors || (Ec && !a.crossDomain)
        ? {
            send: function (c, d) {
              var e,
                f = a.xhr(),
                g = ++Bc;
              if (
                (f.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
              )
                for (e in a.xhrFields) f[e] = a.xhrFields[e];
              a.mimeType &&
                f.overrideMimeType &&
                f.overrideMimeType(a.mimeType),
                a.crossDomain ||
                  c["X-Requested-With"] ||
                  (c["X-Requested-With"] = "XMLHttpRequest");
              for (e in c) f.setRequestHeader(e, c[e]);
              (b = function (a) {
                return function () {
                  b &&
                    (delete Cc[g],
                    (b = f.onload = f.onerror = null),
                    "abort" === a
                      ? f.abort()
                      : "error" === a
                      ? d(f.status, f.statusText)
                      : d(
                          Dc[f.status] || f.status,
                          f.statusText,
                          "string" == typeof f.responseText
                            ? { text: f.responseText }
                            : void 0,
                          f.getAllResponseHeaders()
                        ));
                };
              }),
                (f.onload = b()),
                (f.onerror = b("error")),
                (b = Cc[g] = b("abort"));
              try {
                f.send((a.hasContent && a.data) || null);
              } catch (h) {
                if (b) throw h;
              }
            },
            abort: function () {
              b && b();
            },
          }
        : void 0;
    }),
    n.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (a) {
          return n.globalEval(a), a;
        },
      },
    }),
    n.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }),
    n.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function (d, e) {
            (b = n("<script>")
              .prop({ async: !0, charset: a.scriptCharset, src: a.url })
              .on(
                "load error",
                (c = function (a) {
                  b.remove(),
                    (c = null),
                    a && e("error" === a.type ? 404 : 200, a.type);
                })
              )),
              l.head.appendChild(b[0]);
          },
          abort: function () {
            c && c();
          },
        };
      }
    });
  var Fc = [],
    Gc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Fc.pop() || n.expando + "_" + cc++;
      return (this[a] = !0), a;
    },
  }),
    n.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (Gc.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              !(b.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              Gc.test(b.data) &&
              "data");
      return h || "jsonp" === b.dataTypes[0]
        ? ((e = b.jsonpCallback = n.isFunction(b.jsonpCallback)
            ? b.jsonpCallback()
            : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Gc, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Fc.push(e)),
              g && n.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script")
        : void 0;
    }),
    (n.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)), (b = b || l);
      var d = v.exec(a),
        e = !c && [];
      return d
        ? [b.createElement(d[1])]
        : ((d = n.buildFragment([a], b, e)),
          e && e.length && n(e).remove(),
          n.merge([], d.childNodes));
    });
  var Hc = n.fn.load;
  (n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Hc) return Hc.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h >= 0 && ((d = n.trim(a.slice(h))), (a = a.slice(0, h))),
      n.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (e = "POST"),
      g.length > 0 &&
        n
          .ajax({ url: a, type: e, dataType: "html", data: b })
          .done(function (a) {
            (f = arguments),
              g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
          })
          .complete(
            c &&
              function (a, b) {
                g.each(c, f || [a.responseText, b, a]);
              }
          ),
      this
    );
  }),
    n.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        n.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (n.expr.filters.animated = function (a) {
      return n.grep(n.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  var Ic = a.document.documentElement;
  function Jc(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }
  (n.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = n.css(a, "top")),
        (i = n.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        n.isFunction(b) && (b = b.call(a, c, h)),
        null != b.top && (m.top = b.top - h.top + g),
        null != b.left && (m.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, m) : l.css(m);
    },
  }),
    n.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                n.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            n.contains(b, d)
              ? (typeof d.getBoundingClientRect !== U &&
                  (e = d.getBoundingClientRect()),
                (c = Jc(f)),
                {
                  top: e.top + c.pageYOffset - b.clientTop,
                  left: e.left + c.pageXOffset - b.clientLeft,
                })
              : e
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };
          return (
            "fixed" === n.css(c, "position")
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                n.nodeName(a[0], "html") || (d = a.offset()),
                (d.top += n.css(a[0], "borderTopWidth", !0)),
                (d.left += n.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - d.top - n.css(c, "marginTop", !0),
              left: b.left - d.left - n.css(c, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent || Ic;
          while (
            a &&
            !n.nodeName(a, "html") &&
            "static" === n.css(a, "position")
          )
            a = a.offsetParent;
          return a || Ic;
        });
      },
    }),
    n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (
      b,
      c
    ) {
      var d = "pageYOffset" === c;
      n.fn[b] = function (e) {
        return J(
          this,
          function (b, e, f) {
            var g = Jc(b);
            return void 0 === f
              ? g
                ? g[c]
                : b[e]
              : void (g
                  ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset)
                  : (b[e] = f));
          },
          b,
          e,
          arguments.length,
          null
        );
      };
    }),
    n.each(["top", "left"], function (a, b) {
      n.cssHooks[b] = yb(k.pixelPosition, function (a, c) {
        return c
          ? ((c = xb(a, b)), vb.test(c) ? n(a).position()[b] + "px" : c)
          : void 0;
      });
    }),
    n.each({ Height: "height", Width: "width" }, function (a, b) {
      n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (
        c,
        d
      ) {
        n.fn[d] = function (d, e) {
          var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");
          return J(
            this,
            function (b, c, d) {
              var e;
              return n.isWindow(b)
                ? b.document.documentElement["client" + a]
                : 9 === b.nodeType
                ? ((e = b.documentElement),
                  Math.max(
                    b.body["scroll" + a],
                    e["scroll" + a],
                    b.body["offset" + a],
                    e["offset" + a],
                    e["client" + a]
                  ))
                : void 0 === d
                ? n.css(b, c, g)
                : n.style(b, c, d, g);
            },
            b,
            f ? d : void 0,
            f,
            null
          );
        };
      });
    }),
    (n.fn.size = function () {
      return this.length;
    }),
    (n.fn.andSelf = n.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return n;
      });
  var Kc = a.jQuery,
    Lc = a.$;
  return (
    (n.noConflict = function (b) {
      return a.$ === n && (a.$ = Lc), b && a.jQuery === n && (a.jQuery = Kc), n;
    }),
    typeof b === U && (a.jQuery = a.$ = n),
    n
  );
});
//# sourceMappingURL=jquery.min.map

//Locomotive Scroll

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t = t || self).LocomotiveScroll = e());
})(this, function () {
  "use strict";
  function s(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function n(t, e) {
    for (var i = 0; i < e.length; i++) {
      var s = e[i];
      (s.enumerable = s.enumerable || !1),
        (s.configurable = !0),
        "value" in s && (s.writable = !0),
        Object.defineProperty(t, s.key, s);
    }
  }
  function l(t, e, i) {
    return e && n(t.prototype, e), i && n(t, i), t;
  }
  function i(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      t &&
        (s = s.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        i.push.apply(i, s);
    }
    return i;
  }
  function e(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      e && a(t, e);
  }
  function o(t) {
    return (o = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function a(t, e) {
    return (a =
      Object.setPrototypeOf ||
      function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
  }
  function r(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function c(t, e) {
    return !e || ("object" != typeof e && "function" != typeof e) ? r(t) : e;
  }
  function h(t, e, i) {
    return (h =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (t, e, i) {
            var s = (function (t, e) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(t, e) &&
                null !== (t = o(t));

              );
              return t;
            })(t, e);
            if (s) {
              var n = Object.getOwnPropertyDescriptor(s, e);
              return n.get ? n.get.call(i) : n.value;
            }
          })(t, e, i || t);
  }
  var u = {
      el: document,
      elMobile: document,
      name: "scroll",
      offset: 0,
      repeat: !1,
      smooth: !1,
      smoothMobile: !1,
      direction: "vertical",
      inertia: 1,
      class: "is-inview",
      scrollbarClass: "c-scrollbar",
      scrollingClass: "has-scroll-scrolling",
      draggingClass: "has-scroll-dragging",
      smoothClass: "has-scroll-smooth",
      initClass: "has-scroll-init",
      getSpeed: !1,
      getDirection: !1,
      firefoxMultiplier: 50,
      touchMultiplier: 2,
    },
    d = (function () {
      function e() {
        var t =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        s(this, e),
          window.scrollTo(0, 0),
          Object.assign(this, u, t),
          (this.namespace = "locomotive"),
          (this.html = document.documentElement),
          (this.windowHeight = window.innerHeight),
          (this.windowMiddle = this.windowHeight / 2),
          (this.els = []),
          (this.listeners = {}),
          (this.hasScrollTicking = !1),
          (this.hasCallEventSet = !1),
          (this.checkScroll = this.checkScroll.bind(this)),
          (this.checkResize = this.checkResize.bind(this)),
          (this.checkEvent = this.checkEvent.bind(this)),
          (this.instance = {
            scroll: { x: 0, y: 0 },
            limit: this.html.offsetHeight,
          }),
          this.getDirection && (this.instance.direction = null),
          this.getDirection && (this.instance.speed = 0),
          this.html.classList.add(this.initClass),
          window.addEventListener("resize", this.checkResize, !1);
      }
      return (
        l(e, [
          {
            key: "init",
            value: function () {
              this.initEvents();
            },
          },
          {
            key: "checkScroll",
            value: function () {
              this.dispatchScroll();
            },
          },
          { key: "checkResize", value: function () {} },
          {
            key: "initEvents",
            value: function () {
              var e = this;
              (this.scrollToEls = this.el.querySelectorAll(
                "[data-".concat(this.name, "-to]")
              )),
                (this.setScrollTo = this.setScrollTo.bind(this)),
                this.scrollToEls.forEach(function (t) {
                  t.addEventListener("click", e.setScrollTo, !1);
                });
            },
          },
          {
            key: "setScrollTo",
            value: function (t) {
              t.preventDefault(),
                this.scrollTo(
                  t.currentTarget.getAttribute(
                    "data-".concat(this.name, "-href")
                  ) || t.currentTarget.getAttribute("href"),
                  t.currentTarget.getAttribute(
                    "data-".concat(this.name, "-offset")
                  )
                );
            },
          },
          { key: "addElements", value: function () {} },
          {
            key: "detectElements",
            value: function (i) {
              var s = this,
                n = this.instance.scroll.y,
                l = n + this.windowHeight;
              this.els.forEach(function (t, e) {
                !t ||
                  (t.inView && !i) ||
                  (l >= t.top && n < t.bottom && s.setInView(t, e)),
                  t &&
                    t.inView &&
                    (l < t.top || n > t.bottom) &&
                    s.setOutOfView(t, e);
              }),
                (this.els = this.els.filter(function (t, e) {
                  return null !== t;
                })),
                (this.hasScrollTicking = !1);
            },
          },
          {
            key: "setInView",
            value: function (t, e) {
              (this.els[e].inView = !0),
                t.el.classList.add(t.class),
                t.call &&
                  this.hasCallEventSet &&
                  (this.dispatchCall(t, "enter"),
                  t.repeat || (this.els[e].call = !1)),
                t.repeat ||
                  t.speed ||
                  t.sticky ||
                  ((!t.call || (t.call && this.hasCallEventSet)) &&
                    (this.els[e] = null));
            },
          },
          {
            key: "setOutOfView",
            value: function (t, e) {
              (t.repeat || void 0 !== t.speed) && (this.els[e].inView = !1),
                t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"),
                t.repeat && t.el.classList.remove(t.class);
            },
          },
          {
            key: "dispatchCall",
            value: function (t, e) {
              (this.callWay = e),
                (this.callValue = t.call.split(",").map(function (t) {
                  return t.trim();
                })),
                (this.callObj = t),
                1 == this.callValue.length &&
                  (this.callValue = this.callValue[0]);
              var i = new Event(this.namespace + "call");
              this.el.dispatchEvent(i);
            },
          },
          {
            key: "dispatchScroll",
            value: function () {
              var t = new Event(this.namespace + "scroll");
              this.el.dispatchEvent(t);
            },
          },
          {
            key: "setEvents",
            value: function (t, e) {
              this.listeners[t] || (this.listeners[t] = []);
              var i = this.listeners[t];
              i.push(e),
                1 === i.length &&
                  this.el.addEventListener(
                    this.namespace + t,
                    this.checkEvent,
                    !1
                  ),
                "call" === t &&
                  ((this.hasCallEventSet = !0), this.detectElements(!0));
            },
          },
          {
            key: "unsetEvents",
            value: function (t, e) {
              if (this.listeners[t]) {
                var i = this.listeners[t],
                  s = i.indexOf(e);
                s < 0 ||
                  (i.splice(s, 1),
                  0 === i.index &&
                    this.el.removeEventListener(
                      this.namespace + t,
                      this.checkEvent,
                      !1
                    ));
              }
            },
          },
          {
            key: "checkEvent",
            value: function (t) {
              var e = this,
                i = t.type.replace(this.namespace, ""),
                s = this.listeners[i];
              s &&
                0 !== s.length &&
                s.forEach(function (t) {
                  switch (i) {
                    case "scroll":
                      return t(e.instance);
                    case "call":
                      return t(e.callValue, e.callWay, e.callObj);
                    default:
                      return t();
                  }
                });
            },
          },
          { key: "startScroll", value: function () {} },
          { key: "stopScroll", value: function () {} },
          {
            key: "setScroll",
            value: function (t, e) {
              this.instance.scroll = { x: 0, y: 0 };
            },
          },
          {
            key: "destroy",
            value: function () {
              var e = this;
              window.removeEventListener("resize", this.checkResize, !1),
                Object.keys(this.listeners).forEach(function (t) {
                  e.el.removeEventListener(e.namespace + t, e.checkEvent, !1);
                }),
                (this.listeners = {}),
                this.scrollToEls.forEach(function (t) {
                  t.removeEventListener("click", e.setScrollTo, !1);
                });
            },
          },
        ]),
        e
      );
    })(),
    t = (function (t) {
      function i() {
        var t,
          e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          s(this, i),
          (t = c(this, o(i).call(this, e))),
          window.addEventListener("scroll", t.checkScroll, !1),
          t
        );
      }
      return (
        e(i, d),
        l(i, [
          {
            key: "init",
            value: function () {
              (this.instance.scroll.y = window.pageYOffset),
                this.addElements(),
                this.detectElements(),
                h(o(i.prototype), "init", this).call(this);
            },
          },
          {
            key: "checkScroll",
            value: function () {
              var t = this;
              h(o(i.prototype), "checkScroll", this).call(this),
                (this.instance.scroll.y = window.pageYOffset),
                this.els.length &&
                  (this.hasScrollTicking ||
                    (requestAnimationFrame(function () {
                      t.detectElements();
                    }),
                    (this.hasScrollTicking = !0)));
            },
          },
          {
            key: "checkResize",
            value: function () {
              var t = this;
              this.els.length &&
                ((this.windowHeight = window.innerHeight),
                this.hasScrollTicking ||
                  (requestAnimationFrame(function () {
                    t.updateElements();
                  }),
                  (this.hasScrollTicking = !0)));
            },
          },
          {
            key: "addElements",
            value: function () {
              var c = this;
              (this.els = []),
                this.el
                  .querySelectorAll("[data-" + this.name + "]")
                  .forEach(function (t, e) {
                    var i = t.dataset[c.name + "Class"] || c.class,
                      s = t.getBoundingClientRect().top + c.instance.scroll.y,
                      n = s + t.offsetHeight,
                      l =
                        parseInt(t.dataset[c.name + "Offset"]) ||
                        parseInt(c.offset),
                      o = t.dataset[c.name + "Repeat"],
                      a = t.dataset[c.name + "Call"],
                      r = {
                        el: t,
                        id: e,
                        class: i,
                        top: s + l,
                        bottom: n,
                        offset: l,
                        repeat: (o = "false" != o && (null != o || c.repeat)),
                        inView: !1,
                        call: a,
                      };
                    c.els.push(r);
                  });
            },
          },
          {
            key: "updateElements",
            value: function () {
              var n = this;
              this.els.forEach(function (t, e) {
                var i = t.el.getBoundingClientRect().top + n.instance.scroll.y,
                  s = i + t.el.offsetHeight;
                (n.els[e].top = i + t.offset), (n.els[e].bottom = s);
              }),
                (this.hasScrollTicking = !1);
            },
          },
          {
            key: "scrollTo",
            value: function (t, e) {
              var i,
                s = e ? parseInt(e) : 0;
              "string" == typeof t
                ? "top" === t
                  ? (i = this.html)
                  : "bottom" === t
                  ? (s = this.html.offsetHeight - window.innerHeight)
                  : (i = document.querySelectorAll(t)[0])
                : t.target || (i = t),
                i && (s = i.getBoundingClientRect().top + s),
                (s += this.instance.scroll.y),
                window.scrollTo({ top: s, behavior: "smooth" });
            },
          },
          {
            key: "update",
            value: function () {
              this.addElements(), this.detectElements();
            },
          },
          {
            key: "destroy",
            value: function () {
              h(o(i.prototype), "destroy", this).call(this),
                window.removeEventListener("scroll", this.checkScroll, !1);
            },
          },
        ]),
        i
      );
    })(),
    f = Object.getOwnPropertySymbols,
    p = Object.prototype.hasOwnProperty,
    y = Object.prototype.propertyIsEnumerable;
  var v = (function () {
    try {
      if (!Object.assign) return !1;
      var t = new String("abc");
      if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0])) return !1;
      for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
      if (
        "0123456789" !==
        Object.getOwnPropertyNames(e)
          .map(function (t) {
            return e[t];
          })
          .join("")
      )
        return !1;
      var s = {};
      return (
        "abcdefghijklmnopqrst".split("").forEach(function (t) {
          s[t] = t;
        }),
        "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, s)).join("")
      );
    } catch (t) {
      return !1;
    }
  })()
    ? Object.assign
    : function (t, e) {
        for (
          var i,
            s,
            n = (function (t) {
              if (null == t)
                throw new TypeError(
                  "Object.assign cannot be called with null or undefined"
                );
              return Object(t);
            })(t),
            l = 1;
          l < arguments.length;
          l++
        ) {
          for (var o in (i = Object(arguments[l])))
            p.call(i, o) && (n[o] = i[o]);
          if (f) {
            s = f(i);
            for (var a = 0; a < s.length; a++)
              y.call(i, s[a]) && (n[s[a]] = i[s[a]]);
          }
        }
        return n;
      };
  function m() {}
  m.prototype = {
    on: function (t, e, i) {
      var s = this.e || (this.e = {});
      return (s[t] || (s[t] = [])).push({ fn: e, ctx: i }), this;
    },
    once: function (t, e, i) {
      var s = this;
      function n() {
        s.off(t, n), e.apply(i, arguments);
      }
      return (n._ = e), this.on(t, n, i);
    },
    emit: function (t) {
      for (
        var e = [].slice.call(arguments, 1),
          i = ((this.e || (this.e = {}))[t] || []).slice(),
          s = 0,
          n = i.length;
        s < n;
        s++
      )
        i[s].fn.apply(i[s].ctx, e);
      return this;
    },
    off: function (t, e) {
      var i = this.e || (this.e = {}),
        s = i[t],
        n = [];
      if (s && e)
        for (var l = 0, o = s.length; l < o; l++)
          s[l].fn !== e && s[l].fn._ !== e && n.push(s[l]);
      return n.length ? (i[t] = n) : delete i[t], this;
    },
  };
  var g = m,
    w =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
  var b,
    k =
      ((function (t, e) {
        (function () {
          (null !== e ? e : this).Lethargy = (function () {
            function t(t, e, i, s) {
              (this.stability = null != t ? Math.abs(t) : 8),
                (this.sensitivity = null != e ? 1 + Math.abs(e) : 100),
                (this.tolerance = null != i ? 1 + Math.abs(i) : 1.1),
                (this.delay = null != s ? s : 150),
                (this.lastUpDeltas = function () {
                  var t, e, i;
                  for (
                    i = [], t = 1, e = 2 * this.stability;
                    1 <= e ? t <= e : e <= t;
                    1 <= e ? t++ : t--
                  )
                    i.push(null);
                  return i;
                }.call(this)),
                (this.lastDownDeltas = function () {
                  var t, e, i;
                  for (
                    i = [], t = 1, e = 2 * this.stability;
                    1 <= e ? t <= e : e <= t;
                    1 <= e ? t++ : t--
                  )
                    i.push(null);
                  return i;
                }.call(this)),
                (this.deltasTimestamp = function () {
                  var t, e, i;
                  for (
                    i = [], t = 1, e = 2 * this.stability;
                    1 <= e ? t <= e : e <= t;
                    1 <= e ? t++ : t--
                  )
                    i.push(null);
                  return i;
                }.call(this));
            }
            return (
              (t.prototype.check = function (t) {
                var e;
                return (
                  null != (t = t.originalEvent || t).wheelDelta
                    ? (e = t.wheelDelta)
                    : null != t.deltaY
                    ? (e = -40 * t.deltaY)
                    : (null == t.detail && 0 !== t.detail) ||
                      (e = -40 * t.detail),
                  this.deltasTimestamp.push(Date.now()),
                  this.deltasTimestamp.shift(),
                  0 < e
                    ? (this.lastUpDeltas.push(e),
                      this.lastUpDeltas.shift(),
                      this.isInertia(1))
                    : (this.lastDownDeltas.push(e),
                      this.lastDownDeltas.shift(),
                      this.isInertia(-1))
                );
              }),
              (t.prototype.isInertia = function (t) {
                var e, i, s, n, l, o, a;
                return null ===
                  (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0]
                  ? t
                  : !(
                      this.deltasTimestamp[2 * this.stability - 2] +
                        this.delay >
                        Date.now() && e[0] === e[2 * this.stability - 1]
                    ) &&
                      ((s = e.slice(0, this.stability)),
                      (i = e.slice(this.stability, 2 * this.stability)),
                      (a = s.reduce(function (t, e) {
                        return t + e;
                      })),
                      (l = i.reduce(function (t, e) {
                        return t + e;
                      })),
                      (o = a / s.length),
                      (n = l / i.length),
                      Math.abs(o) < Math.abs(n * this.tolerance) &&
                        this.sensitivity < Math.abs(n) &&
                        t);
              }),
              (t.prototype.showLastUpDeltas = function () {
                return this.lastUpDeltas;
              }),
              (t.prototype.showLastDownDeltas = function () {
                return this.lastDownDeltas;
              }),
              t
            );
          })();
        }.call(w));
      })((b = { exports: {} }), b.exports),
      b.exports),
    S = {
      hasWheelEvent: "onwheel" in document,
      hasMouseWheelEvent: "onmousewheel" in document,
      hasTouch: "ontouchstart" in document,
      hasTouchWin: navigator.msMaxTouchPoints && 1 < navigator.msMaxTouchPoints,
      hasPointer: !!window.navigator.msPointerEnabled,
      hasKeyDown: "onkeydown" in document,
      isFirefox: -1 < navigator.userAgent.indexOf("Firefox"),
    },
    E = Object.prototype.toString,
    T = Object.prototype.hasOwnProperty;
  function O(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  var D = k.Lethargy,
    _ = "virtualscroll",
    M = B,
    L = 37,
    C = 38,
    H = 39,
    x = 40,
    j = 32;
  function B(t) {
    !(function (t) {
      if (!t) return console.warn("bindAll requires at least one argument.");
      var e = Array.prototype.slice.call(arguments, 1);
      if (0 === e.length)
        for (var i in t)
          T.call(t, i) &&
            "function" == typeof t[i] &&
            "[object Function]" == E.call(t[i]) &&
            e.push(i);
      for (var s = 0; s < e.length; s++) {
        var n = e[s];
        t[n] = O(t[n], t);
      }
    })(
      this,
      "_onWheel",
      "_onMouseWheel",
      "_onTouchStart",
      "_onTouchMove",
      "_onKeyDown"
    ),
      (this.el = window),
      t && t.el && ((this.el = t.el), delete t.el),
      (this.options = v(
        {
          mouseMultiplier: 1,
          touchMultiplier: 2,
          firefoxMultiplier: 15,
          keyStep: 120,
          preventTouch: !1,
          unpreventTouchClass: "vs-touchmove-allowed",
          limitInertia: !1,
          useKeyboard: !0,
          useTouch: !0,
        },
        t
      )),
      this.options.limitInertia && (this._lethargy = new D()),
      (this._emitter = new g()),
      (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
      (this.touchStartX = null),
      (this.touchStartY = null),
      (this.bodyTouchAction = null),
      void 0 !== this.options.passive &&
        (this.listenerOptions = { passive: this.options.passive });
  }
  function P(t, e, i) {
    return (1 - i) * t + i * e;
  }
  function Y(t) {
    var e = {};
    if (window.getComputedStyle) {
      var i = getComputedStyle(t),
        s = i.transform || i.webkitTransform || i.mozTransform,
        n = s.match(/^matrix3d\((.+)\)$/);
      return n
        ? parseFloat(n[1].split(", ")[13])
        : ((n = s.match(/^matrix\((.+)\)$/)),
          (e.x = n ? parseFloat(n[1].split(", ")[4]) : 0),
          (e.y = n ? parseFloat(n[1].split(", ")[5]) : 0),
          e);
    }
  }
  (B.prototype._notify = function (t) {
    var e = this._event;
    (e.x += e.deltaX),
      (e.y += e.deltaY),
      this._emitter.emit(_, {
        x: e.x,
        y: e.y,
        deltaX: e.deltaX,
        deltaY: e.deltaY,
        originalEvent: t,
      });
  }),
    (B.prototype._onWheel = function (t) {
      var e = this.options;
      if (!this._lethargy || !1 !== this._lethargy.check(t)) {
        var i = this._event;
        (i.deltaX = t.wheelDeltaX || -1 * t.deltaX),
          (i.deltaY = t.wheelDeltaY || -1 * t.deltaY),
          S.isFirefox &&
            1 == t.deltaMode &&
            ((i.deltaX *= e.firefoxMultiplier),
            (i.deltaY *= e.firefoxMultiplier)),
          (i.deltaX *= e.mouseMultiplier),
          (i.deltaY *= e.mouseMultiplier),
          this._notify(t);
      }
    }),
    (B.prototype._onMouseWheel = function (t) {
      if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
        var e = this._event;
        (e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0),
          (e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta),
          this._notify(t);
      }
    }),
    (B.prototype._onTouchStart = function (t) {
      var e = t.targetTouches ? t.targetTouches[0] : t;
      (this.touchStartX = e.pageX), (this.touchStartY = e.pageY);
    }),
    (B.prototype._onTouchMove = function (t) {
      var e = this.options;
      e.preventTouch &&
        !t.target.classList.contains(e.unpreventTouchClass) &&
        t.preventDefault();
      var i = this._event,
        s = t.targetTouches ? t.targetTouches[0] : t;
      (i.deltaX = (s.pageX - this.touchStartX) * e.touchMultiplier),
        (i.deltaY = (s.pageY - this.touchStartY) * e.touchMultiplier),
        (this.touchStartX = s.pageX),
        (this.touchStartY = s.pageY),
        this._notify(t);
    }),
    (B.prototype._onKeyDown = function (t) {
      var e = this._event;
      e.deltaX = e.deltaY = 0;
      var i = window.innerHeight - 40;
      switch (t.keyCode) {
        case L:
        case C:
          e.deltaY = this.options.keyStep;
          break;
        case H:
        case x:
          e.deltaY = -this.options.keyStep;
          break;
        case t.shiftKey:
          e.deltaY = i;
          break;
        case j:
          e.deltaY = -i;
          break;
        default:
          return;
      }
      this._notify(t);
    }),
    (B.prototype._bind = function () {
      S.hasWheelEvent &&
        this.el.addEventListener("wheel", this._onWheel, this.listenerOptions),
        S.hasMouseWheelEvent &&
          this.el.addEventListener(
            "mousewheel",
            this._onMouseWheel,
            this.listenerOptions
          ),
        S.hasTouch &&
          this.options.useTouch &&
          (this.el.addEventListener(
            "touchstart",
            this._onTouchStart,
            this.listenerOptions
          ),
          this.el.addEventListener(
            "touchmove",
            this._onTouchMove,
            this.listenerOptions
          )),
        S.hasPointer &&
          S.hasTouchWin &&
          ((this.bodyTouchAction = document.body.style.msTouchAction),
          (document.body.style.msTouchAction = "none"),
          this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
          this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
        S.hasKeyDown &&
          this.options.useKeyboard &&
          document.addEventListener("keydown", this._onKeyDown);
    }),
    (B.prototype._unbind = function () {
      S.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel),
        S.hasMouseWheelEvent &&
          this.el.removeEventListener("mousewheel", this._onMouseWheel),
        S.hasTouch &&
          (this.el.removeEventListener("touchstart", this._onTouchStart),
          this.el.removeEventListener("touchmove", this._onTouchMove)),
        S.hasPointer &&
          S.hasTouchWin &&
          ((document.body.style.msTouchAction = this.bodyTouchAction),
          this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0),
          this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)),
        S.hasKeyDown &&
          this.options.useKeyboard &&
          document.removeEventListener("keydown", this._onKeyDown);
    }),
    (B.prototype.on = function (t, e) {
      this._emitter.on(_, t, e);
      var i = this._emitter.e;
      i && i[_] && 1 === i[_].length && this._bind();
    }),
    (B.prototype.off = function (t, e) {
      this._emitter.off(_, t, e);
      var i = this._emitter.e;
      (!i[_] || i[_].length <= 0) && this._unbind();
    }),
    (B.prototype.reset = function () {
      var t = this._event;
      (t.x = 0), (t.y = 0);
    }),
    (B.prototype.destroy = function () {
      this._emitter.off(), this._unbind();
    });
  var R = 38,
    A = 40,
    V = 32,
    X = 9,
    W = 33,
    I = 34,
    K = 36,
    q = 35,
    F = (function (t) {
      function n() {
        var t,
          e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          s(this, n),
          ((t = c(this, o(n).call(this, e))).inertia = 0.1 * t.inertia),
          (t.isScrolling = !1),
          (t.isDraggingScrollbar = !1),
          (t.isTicking = !1),
          (t.hasScrollTicking = !1),
          (t.parallaxElements = []),
          (t.inertiaRatio = 1),
          (t.stop = !1),
          (t.checkKey = t.checkKey.bind(r(t))),
          window.addEventListener("keydown", t.checkKey, !1),
          t
        );
      }
      return (
        e(n, d),
        l(n, [
          {
            key: "init",
            value: function () {
              var e = this;
              this.html.classList.add(this.smoothClass),
                (this.instance = (function (n) {
                  for (var t = 1; t < arguments.length; t++) {
                    var l = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? i(l, !0).forEach(function (t) {
                          var e, i, s;
                          (e = n),
                            (s = l[(i = t)]),
                            i in e
                              ? Object.defineProperty(e, i, {
                                  value: s,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                                })
                              : (e[i] = s);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          n,
                          Object.getOwnPropertyDescriptors(l)
                        )
                      : i(l).forEach(function (t) {
                          Object.defineProperty(
                            n,
                            t,
                            Object.getOwnPropertyDescriptor(l, t)
                          );
                        });
                  }
                  return n;
                })({ delta: { x: 0, y: 0 } }, this.instance)),
                (this.vs = new M({
                  el: this.el,
                  mouseMultiplier:
                    -1 < navigator.platform.indexOf("Win") ? 1 : 0.4,
                  firefoxMultiplier: this.firefoxMultiplier,
                  touchMultiplier: this.touchMultiplier,
                  useKeyboard: !1,
                  passive: !0,
                })),
                this.vs.on(function (t) {
                  e.stop ||
                    (e.isTicking ||
                      e.isDraggingScrollbar ||
                      (requestAnimationFrame(function () {
                        e.isScrolling || e.startScrolling(), e.updateDelta(t);
                      }),
                      (e.isTicking = !0)),
                    (e.isTicking = !1));
                }),
                this.setScrollLimit(),
                this.initScrollBar(),
                this.addSections(),
                this.addElements(),
                this.detectElements(),
                this.transformElements(!0),
                h(o(n.prototype), "init", this).call(this);
            },
          },
          {
            key: "setScrollLimit",
            value: function () {
              this.instance.limit = this.el.offsetHeight - this.windowHeight;
            },
          },
          {
            key: "startScrolling",
            value: function () {
              (this.isScrolling = !0),
                this.checkScroll(),
                this.html.classList.add(this.scrollingClass);
            },
          },
          {
            key: "stopScrolling",
            value: function () {
              (this.isScrolling = !1),
                (this.inertiaRatio = 1),
                (this.instance.scroll.y = Math.round(this.instance.scroll.y)),
                this.html.classList.remove(this.scrollingClass);
            },
          },
          {
            key: "checkKey",
            value: function (t) {
              var e = this;
              switch (t.keyCode) {
                case X:
                  setTimeout(function () {
                    (document.documentElement.scrollTop = 0),
                      (document.body.scrollTop = 0),
                      document.activeElement instanceof HTMLBodyElement ||
                        e.scrollTo(
                          document.activeElement,
                          -window.innerHeight / 2
                        );
                  }, 0);
                  break;
                case R:
                  this.instance.delta.y -= 240;
                  break;
                case A:
                  this.instance.delta.y += 240;
                  break;
                case W:
                  this.instance.delta.y -= window.innerHeight;
                  break;
                case I:
                  this.instance.delta.y += window.innerHeight;
                  break;
                case K:
                  this.instance.delta.y -= this.instance.limit;
                  break;
                case q:
                  this.instance.delta.y += this.instance.limit;
                  break;
                case V:
                  document.activeElement instanceof HTMLInputElement ||
                    document.activeElement instanceof HTMLTextAreaElement ||
                    (t.shiftKey
                      ? (this.instance.delta.y -= window.innerHeight)
                      : (this.instance.delta.y += window.innerHeight));
                  break;
                default:
                  return;
              }
              this.instance.delta.y < 0 && (this.instance.delta.y = 0),
                this.instance.delta.y > this.instance.limit &&
                  (this.instance.delta.y = this.instance.limit),
                (this.isScrolling = !0),
                this.checkScroll(),
                this.html.classList.add(this.scrollingClass);
            },
          },
          {
            key: "checkScroll",
            value: function () {
              var t = this;
              if (this.isScrolling || this.isDraggingScrollbar) {
                this.hasScrollTicking ||
                  (requestAnimationFrame(function () {
                    return t.checkScroll();
                  }),
                  (this.hasScrollTicking = !0));
                var e = Math.abs(
                  this.instance.delta.y - this.instance.scroll.y
                );
                ((e < 0.5 && 0 != this.instance.delta.y) ||
                  (e < 0.5 && 0 == this.instance.delta.y)) &&
                  this.stopScrolling(),
                  this.updateScroll();
                for (var i = this.sections.length - 1; 0 <= i; i--)
                  this.sections[i].persistent ||
                  (this.instance.scroll.y > this.sections[i].offset &&
                    this.instance.scroll.y < this.sections[i].limit)
                    ? (this.transform(
                        this.sections[i].el,
                        0,
                        -this.instance.scroll.y
                      ),
                      (this.sections[i].el.style.visibility = "visible"),
                      (this.sections[i].inView = !0))
                    : ((this.sections[i].el.style.visibility = "hidden"),
                      (this.sections[i].inView = !1),
                      this.transform(this.sections[i].el, 0, 0));
                this.getDirection && this.addDirection(),
                  this.getSpeed &&
                    (this.addSpeed(), (this.timestamp = Date.now())),
                  this.detectElements(),
                  this.transformElements();
                var s =
                  (this.instance.scroll.y / this.instance.limit) *
                  this.scrollBarLimit;
                this.transform(this.scrollbarThumb, 0, s),
                  h(o(n.prototype), "checkScroll", this).call(this),
                  (this.hasScrollTicking = !1);
              }
            },
          },
          {
            key: "checkResize",
            value: function () {
              (this.windowHeight = window.innerHeight),
                (this.windowMiddle = this.windowHeight / 2),
                this.update();
            },
          },
          {
            key: "updateDelta",
            value: function (t) {
              (this.instance.delta.y -= t.deltaY),
                this.instance.delta.y < 0 && (this.instance.delta.y = 0),
                this.instance.delta.y > this.instance.limit &&
                  (this.instance.delta.y = this.instance.limit);
            },
          },
          {
            key: "updateScroll",
            value: function (t) {
              this.isScrolling || this.isDraggingScrollbar
                ? (this.instance.scroll.y = P(
                    this.instance.scroll.y,
                    this.instance.delta.y,
                    this.inertia * this.inertiaRatio
                  ))
                : (this.instance.scroll.y = this.instance.delta.y);
            },
          },
          {
            key: "addDirection",
            value: function () {
              this.instance.delta.y > this.instance.scroll.y
                ? "down" !== this.instance.direction &&
                  (this.instance.direction = "down")
                : this.instance.delta.y < this.instance.scroll.y &&
                  "up" !== this.instance.direction &&
                  (this.instance.direction = "up");
            },
          },
          {
            key: "addSpeed",
            value: function () {
              this.instance.delta.y != this.instance.scroll.y
                ? (this.instance.speed =
                    (this.instance.delta.y - this.instance.scroll.y) /
                    (Date.now() - this.timestamp))
                : (this.instance.speed = 0);
            },
          },
          {
            key: "initScrollBar",
            value: function () {
              (this.scrollbar = document.createElement("span")),
                (this.scrollbarThumb = document.createElement("span")),
                this.scrollbar.classList.add("".concat(this.scrollbarClass)),
                this.scrollbarThumb.classList.add(
                  "".concat(this.scrollbarClass, "_thumb")
                ),
                this.scrollbar.append(this.scrollbarThumb),
                document.body.append(this.scrollbar),
                (this.scrollbarHeight = this.scrollbar.getBoundingClientRect().height),
                (this.scrollbarThumb.style.height = "".concat(
                  (this.scrollbarHeight * this.scrollbarHeight) /
                    (this.instance.limit + this.scrollbarHeight),
                  "px"
                )),
                (this.scrollBarLimit =
                  this.scrollbarHeight -
                  this.scrollbarThumb.getBoundingClientRect().height),
                (this.getScrollBar = this.getScrollBar.bind(this)),
                (this.releaseScrollBar = this.releaseScrollBar.bind(this)),
                (this.moveScrollBar = this.moveScrollBar.bind(this)),
                this.scrollbarThumb.addEventListener(
                  "mousedown",
                  this.getScrollBar
                ),
                window.addEventListener("mouseup", this.releaseScrollBar),
                window.addEventListener("mousemove", this.moveScrollBar);
            },
          },
          {
            key: "reinitScrollBar",
            value: function () {
              (this.scrollbarHeight = this.scrollbar.getBoundingClientRect().height),
                (this.scrollbarThumb.style.height = "".concat(
                  (this.scrollbarHeight * this.scrollbarHeight) /
                    this.instance.limit,
                  "px"
                )),
                (this.scrollBarLimit =
                  this.scrollbarHeight -
                  this.scrollbarThumb.getBoundingClientRect().height);
            },
          },
          {
            key: "destroyScrollBar",
            value: function () {
              this.scrollbarThumb.removeEventListener(
                "mousedown",
                this.getScrollBar
              ),
                window.removeEventListener("mouseup", this.releaseScrollBar),
                window.removeEventListener("mousemove", this.moveScrollBar),
                this.scrollbar.remove();
            },
          },
          {
            key: "getScrollBar",
            value: function (t) {
              (this.isDraggingScrollbar = !0),
                this.checkScroll(),
                this.html.classList.remove(this.scrollingClass),
                this.html.classList.add(this.draggingClass);
            },
          },
          {
            key: "releaseScrollBar",
            value: function (t) {
              (this.isDraggingScrollbar = !1),
                this.html.classList.add(this.scrollingClass),
                this.html.classList.remove(this.draggingClass);
            },
          },
          {
            key: "moveScrollBar",
            value: function (e) {
              var i = this;
              !this.isTicking &&
                this.isDraggingScrollbar &&
                (requestAnimationFrame(function () {
                  var t =
                    (((100 * e.clientY) / i.scrollbarHeight) *
                      i.instance.limit) /
                    100;
                  0 < t && t < i.instance.limit && (i.instance.delta.y = t);
                }),
                (this.isTicking = !0)),
                (this.isTicking = !1);
            },
          },
          {
            key: "addElements",
            value: function () {
              var b = this;
              (this.els = []),
                (this.parallaxElements = []),
                this.sections.forEach(function (t, w) {
                  b.sections[w].el
                    .querySelectorAll("[data-".concat(b.name, "]"))
                    .forEach(function (t, e) {
                      var i,
                        s,
                        n = t.dataset[b.name + "Class"] || b.class,
                        l = t.dataset[b.name + "Repeat"],
                        o = t.dataset[b.name + "Call"],
                        a = t.dataset[b.name + "Position"],
                        r = t.dataset[b.name + "Delay"],
                        c = t.dataset[b.name + "Direction"],
                        h = "string" == typeof t.dataset[b.name + "Sticky"],
                        u =
                          !!t.dataset[b.name + "Speed"] &&
                          parseFloat(t.dataset[b.name + "Speed"]) / 10,
                        d =
                          "string" == typeof t.dataset[b.name + "Offset"] &&
                          t.dataset[b.name + "Offset"].split(","),
                        f = t.dataset[b.name + "Target"];
                      s =
                        void 0 !== f ? document.querySelector("".concat(f)) : t;
                      var p =
                          (i = b.sections[w].inView
                            ? s.getBoundingClientRect().top +
                              b.instance.scroll.y -
                              Y(s).y
                            : s.getBoundingClientRect().top -
                              Y(b.sections[w].el).y -
                              Y(s).y) + s.offsetHeight,
                        y = (p - i) / 2 + i;
                      if (h) {
                        var v = t.getBoundingClientRect().top - i;
                        y =
                          ((p =
                            (i += window.innerHeight) +
                            s.offsetHeight -
                            window.innerHeight -
                            t.offsetHeight -
                            v) -
                            i) /
                            2 +
                          i;
                      }
                      l = "false" != l && (null != l || b.repeat);
                      var m = [0, 0];
                      if (d)
                        for (e = 0; e < d.length; e++)
                          d[e].includes("%")
                            ? (m[e] = parseInt(
                                (d[e].replace("%", "") * b.windowHeight) / 100
                              ))
                            : (m[e] = parseInt(d[e]));
                      var g = {
                        el: t,
                        id: e,
                        class: n,
                        top: i + m[0],
                        middle: y,
                        bottom: p - m[1],
                        offset: d,
                        repeat: l,
                        inView: !1,
                        call: o,
                        speed: u,
                        delay: r,
                        position: a,
                        target: s,
                        direction: c,
                        sticky: h,
                      };
                      b.els.push(g),
                        (!1 !== u || h) && b.parallaxElements.push(g);
                    });
                });
            },
          },
          {
            key: "addSections",
            value: function () {
              var a = this;
              this.sections = [];
              var t = this.el.querySelectorAll(
                "[data-".concat(this.name, "-section]")
              );
              0 === t.length && (t = [this.el]),
                t.forEach(function (t, e) {
                  var i =
                      t.getBoundingClientRect().top -
                      1.5 * window.innerHeight -
                      Y(t).y,
                    s =
                      i +
                      t.getBoundingClientRect().height +
                      2 * window.innerHeight,
                    n = "string" == typeof t.dataset[a.name + "Persistent"],
                    l = !1;
                  a.instance.scroll.y >= i &&
                    a.instance.scroll.y <= s &&
                    (l = !0);
                  var o = {
                    el: t,
                    offset: i,
                    limit: s,
                    inView: l,
                    persistent: n,
                  };
                  a.sections[e] = o;
                });
            },
          },
          {
            key: "transform",
            value: function (t, e, i, s) {
              var n;
              if (s) {
                var l = Y(t),
                  o = P(l.x, e, s),
                  a = P(l.y, i, s);
                n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                  .concat(o, ",")
                  .concat(a, ",0,1)");
              } else
                n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                  .concat(e, ",")
                  .concat(i, ",0,1)");
              (t.style.webkitTransform = n),
                (t.style.msTransform = n),
                (t.style.transform = n);
            },
          },
          {
            key: "transformElements",
            value: function (s) {
              var n = this,
                l = this.instance.scroll.y + this.windowHeight,
                o = this.instance.scroll.y + this.windowMiddle;
              this.parallaxElements.forEach(function (t, e) {
                var i = !1;
                if ((s && (i = 0), t.inView))
                  switch (t.position) {
                    case "top":
                      i = n.instance.scroll.y * -t.speed;
                      break;
                    case "elementTop":
                      i = (l - t.top) * -t.speed;
                      break;
                    case "bottom":
                      i = (n.instance.limit - l + n.windowHeight) * t.speed;
                      break;
                    default:
                      i = (o - t.middle) * -t.speed;
                  }
                t.sticky &&
                  (i = t.inView
                    ? n.instance.scroll.y - t.top + window.innerHeight
                    : n.instance.scroll.y < t.top - window.innerHeight &&
                      n.instance.scroll.y < t.top - window.innerHeight / 2
                    ? 0
                    : n.instance.scroll.y > t.bottom &&
                      n.instance.scroll.y > t.bottom + 100 &&
                      t.bottom - t.top + window.innerHeight),
                  !1 !== i &&
                    ("horizontal" === t.direction
                      ? n.transform(t.el, i, 0, !s && t.delay)
                      : n.transform(t.el, 0, i, !s && t.delay));
              });
            },
          },
          {
            key: "scrollTo",
            value: function (t, e) {
              var i,
                s = this,
                n = e ? parseInt(e) : 0;
              if (
                ("string" == typeof t
                  ? "top" === t
                    ? (n = 0)
                    : "bottom" === t
                    ? (n = this.instance.limit)
                    : (i = document.querySelectorAll(t)[0])
                  : t.target || (i = t),
                i)
              ) {
                var l = i.getBoundingClientRect().top + this.instance.scroll.y,
                  o = (function (t) {
                    for (var e = []; t && t !== document; t = t.parentNode)
                      e.push(t);
                    return e;
                  })(i).find(function (e) {
                    return s.sections.find(function (t) {
                      return t.el == e;
                    });
                  }),
                  a = 0;
                o && (a = Y(o).y), (n = l + n - a);
              }
              (n -= this.instance.scroll.y),
                (this.instance.delta.y = Math.min(n, this.instance.limit)),
                (this.inertiaRatio = Math.min(
                  4e3 /
                    Math.abs(this.instance.delta.y - this.instance.scroll.y),
                  0.8
                )),
                (this.isScrolling = !0),
                this.checkScroll(),
                this.html.classList.add(this.scrollingClass);
            },
          },
          {
            key: "update",
            value: function () {
              this.setScrollLimit(),
                this.addSections(),
                this.addElements(),
                this.detectElements(),
                this.updateScroll(),
                this.transformElements(!0),
                this.reinitScrollBar();
            },
          },
          {
            key: "startScroll",
            value: function () {
              this.stop = !1;
            },
          },
          {
            key: "stopScroll",
            value: function () {
              this.stop = !0;
            },
          },
          {
            key: "setScroll",
            value: function (t, e) {
              this.instance = { scroll: { x: t, y: e }, delta: { x: t, y: e } };
            },
          },
          {
            key: "destroy",
            value: function () {
              h(o(n.prototype), "destroy", this).call(this),
                this.stopScrolling(),
                this.html.classList.remove(this.smoothClass),
                this.vs.destroy(),
                this.destroyScrollBar(),
                window.removeEventListener("keydown", this.checkKey, !1);
            },
          },
        ]),
        n
      );
    })();
  return (function () {
    function e() {
      var t =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      s(this, e), (this.options = t), Object.assign(this, u, t), this.init();
    }
    return (
      l(e, [
        {
          key: "init",
          value: function () {
            this.smoothMobile ||
              (this.isMobile =
                /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent
                ) ||
                ("MacIntel" === navigator.platform &&
                  1 < navigator.maxTouchPoints)),
              !0 !== this.smooth || this.isMobile
                ? (this.scroll = new t(this.options))
                : (this.scroll = new F(this.options)),
              this.scroll.init(),
              window.location.hash &&
                this.scroll.scrollTo(window.location.hash);
          },
        },
        {
          key: "update",
          value: function () {
            this.scroll.update();
          },
        },
        {
          key: "start",
          value: function () {
            this.scroll.startScroll();
          },
        },
        {
          key: "stop",
          value: function () {
            this.scroll.stopScroll();
          },
        },
        {
          key: "scrollTo",
          value: function (t, e) {
            this.scroll.scrollTo(t, e);
          },
        },
        {
          key: "setScroll",
          value: function (t, e) {
            this.scroll.setScroll(t, e);
          },
        },
        {
          key: "on",
          value: function (t, e) {
            this.scroll.setEvents(t, e);
          },
        },
        {
          key: "off",
          value: function (t, e) {
            this.scroll.unsetEvents(t, e);
          },
        },
        {
          key: "destroy",
          value: function () {
            this.scroll.destroy();
          },
        },
      ]),
      e
    );
  })();
});

// Slick

!(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  (e = (function () {
    function e(e, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(e),
        appendDots: i(e),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow:
          '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (i, e) {
          return (
            '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' +
            (e + 1) +
            "</button>"
          );
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.hidden = "hidden"),
        (n.paused = !1),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(e)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(e).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, s, o)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        "undefined" != typeof document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : "undefined" != typeof document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.instanceUid = t++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0),
        n.checkResponsive(!0);
    }
    var t = 0;
    return e;
  })()),
    (e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
      var s = this;
      if ("boolean" == typeof t) (o = t), (t = null);
      else if (0 > t || t >= s.slideCount) return !1;
      s.unload(),
        "number" == typeof t
          ? 0 === t && 0 === s.$slides.length
            ? i(e).appendTo(s.$slideTrack)
            : o
            ? i(e).insertBefore(s.$slides.eq(t))
            : i(e).insertAfter(s.$slides.eq(t))
          : o === !0
          ? i(e).prependTo(s.$slideTrack)
          : i(e).appendTo(s.$slideTrack),
        (s.$slides = s.$slideTrack.children(this.options.slide)),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slides.each(function (e, t) {
          i(t).attr("data-slick-index", e);
        }),
        (s.$slidesCache = s.$slides),
        s.reinit();
    }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        i.options.adaptiveHeight === !0 &&
        i.options.vertical === !1
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        s.options.rtl === !0 && s.options.vertical === !1 && (e = -e),
        s.transformsEnabled === !1
          ? s.options.vertical === !1
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : s.cssTransitions === !1
          ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    s.options.vertical === !1
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"),
                        s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            s.options.vertical === !1
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this,
        o = t.options.asNavFor;
      o && null !== o && (o = i(o).not(t.$slider)),
        null !== o &&
          "object" == typeof o &&
          o.each(function () {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0);
          });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      e.options.fade === !1
        ? (t[e.transitionType] =
            e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
        e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer),
        i.slideCount > i.options.slidesToShow &&
          i.paused !== !0 &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this;
      i.options.infinite === !1
        ? 1 === i.direction
          ? (i.currentSlide + 1 === i.slideCount - 1 && (i.direction = 0),
            i.slideHandler(i.currentSlide + i.options.slidesToScroll))
          : (i.currentSlide - 1 === 0 && (i.direction = 1),
            i.slideHandler(i.currentSlide - i.options.slidesToScroll))
        : i.slideHandler(i.currentSlide + i.options.slidesToScroll);
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      e.options.arrows === !0 &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            e.options.infinite !== !0 &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
        for (
          t = '<ul class="' + o.options.dotsClass + '">', e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t += "<li>" + o.options.customPaging.call(this, o, e) + "</li>";
        (t += "</ul>"),
          (o.$dots = i(t).appendTo(o.options.appendDots)),
          o.$dots
            .find("li")
            .first()
            .addClass("slick-active")
            .attr("aria-hidden", "false");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        (e.$slidesCache = e.$slides),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack
          .wrap('<div aria-live="polite" class="slick-list"/>')
          .parent()),
        e.$slideTrack.css("opacity", 0),
        (e.options.centerMode === !0 || e.options.swipeToSlide === !0) &&
          (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.options.draggable === !0 && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 1)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          s > i;
          i++
        ) {
          var a = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var d = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && d.appendChild(n.get(c));
            }
            a.appendChild(d);
          }
          o.appendChild(a);
        }
        l.$slider.html(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        a = r.$slider.width(),
        d = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = d)
          : "slider" === r.respondTo
          ? (n = a)
          : "min" === r.respondTo && (n = Math.min(d, a)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (r.originalSettings.mobileFirst === !1
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  e === !0 && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  e === !0 && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            e === !0 && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || l === !1 || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.target);
      switch (
        (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        (n = r.slideCount % r.options.slidesToScroll !== 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case "index":
          var a =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(a), !1, t),
            l.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e,
        t,
        o = this;
      if (((e = o.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var s in e) {
          if (i < e[s]) {
            i = t;
            break;
          }
          t = e[s];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots).off("click.slick", e.changeSlide),
        e.options.pauseOnDotsHover === !0 &&
          e.options.autoplay === !0 &&
          i("li", e.$dots)
            .off("mouseenter.slick", i.proxy(e.setPaused, e, !0))
            .off("mouseleave.slick", i.proxy(e.setPaused, e, !1))),
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.$list.off("mouseenter.slick", i.proxy(e.setPaused, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.setPaused, e, !1)),
        e.options.accessibility === !0 &&
          e.$list.off("keydown.slick", e.keyHandler),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 1 &&
        ((i = e.$slides.children().children()),
        i.removeAttr("style"),
        e.$slider.html(i));
    }),
    (e.prototype.clickHandler = function (i) {
      var e = this;
      e.shouldClick === !1 &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.options.arrows === !0 &&
          (t.$prevArrow &&
            t.$prevArrow.length &&
            (t.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
          t.$nextArrow &&
            t.$nextArrow.length &&
            (t.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove())),
        t.$slides &&
          (t.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""),
        e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      t.cssTransitions === !1
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      e.cssTransitions === !1
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
      var e = this;
      null !== i &&
        (e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(i).appendTo(e.$slideTrack),
        e.reinit());
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
      var i = this;
      return i.currentSlide;
    }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (i.options.infinite === !0)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToShow),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else if (i.options.centerMode === !0) o = i.slideCount;
      else
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToShow),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s = this,
        n = 0;
      return (
        (s.slideOffset = 0),
        (t = s.$slides.first().outerHeight(!0)),
        s.options.infinite === !0
          ? (s.slideCount > s.options.slidesToShow &&
              ((s.slideOffset = s.slideWidth * s.options.slidesToShow * -1),
              (n = t * s.options.slidesToShow * -1)),
            s.slideCount % s.options.slidesToScroll !== 0 &&
              i + s.options.slidesToScroll > s.slideCount &&
              s.slideCount > s.options.slidesToShow &&
              (i > s.slideCount
                ? ((s.slideOffset =
                    (s.options.slidesToShow - (i - s.slideCount)) *
                    s.slideWidth *
                    -1),
                  (n = (s.options.slidesToShow - (i - s.slideCount)) * t * -1))
                : ((s.slideOffset =
                    (s.slideCount % s.options.slidesToScroll) *
                    s.slideWidth *
                    -1),
                  (n = (s.slideCount % s.options.slidesToScroll) * t * -1))))
          : i + s.options.slidesToShow > s.slideCount &&
            ((s.slideOffset =
              (i + s.options.slidesToShow - s.slideCount) * s.slideWidth),
            (n = (i + s.options.slidesToShow - s.slideCount) * t)),
        s.slideCount <= s.options.slidesToShow &&
          ((s.slideOffset = 0), (n = 0)),
        s.options.centerMode === !0 && s.options.infinite === !0
          ? (s.slideOffset +=
              s.slideWidth * Math.floor(s.options.slidesToShow / 2) -
              s.slideWidth)
          : s.options.centerMode === !0 &&
            ((s.slideOffset = 0),
            (s.slideOffset +=
              s.slideWidth * Math.floor(s.options.slidesToShow / 2))),
        (e =
          s.options.vertical === !1
            ? i * s.slideWidth * -1 + s.slideOffset
            : i * t * -1 + n),
        s.options.variableWidth === !0 &&
          ((o = s.$slideTrack
            .children(".slick-slide")
            .eq(
              s.slideCount <= s.options.slidesToShow ||
                s.options.infinite === !1
                ? i
                : i + s.options.slidesToShow
            )),
          (e = o[0] ? -1 * o[0].offsetLeft : 0),
          s.options.centerMode === !0 &&
            ((o = s.$slideTrack
              .children(".slick-slide")
              .eq(
                s.options.infinite === !1 ? i : i + s.options.slidesToShow + 1
              )),
            (e = o[0] ? -1 * o[0].offsetLeft : 0),
            (e += (s.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption = function (i) {
      var e = this;
      return e.options[i];
    }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        e.options.infinite === !1
          ? (i = e.slideCount)
          : ((t = -1 * e.options.slidesToScroll),
            (o = -1 * e.options.slidesToScroll),
            (i = 2 * e.slideCount));
        i > t;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o,
        s = this;
      return (
        (o =
          s.options.centerMode === !0
            ? s.slideWidth * Math.floor(s.options.slidesToShow / 2)
            : 0),
        s.options.swipeToSlide === !0
          ? (s.$slideTrack.find(".slick-slide").each(function (e, n) {
              return n.offsetLeft - o + i(n).outerWidth() / 2 > -1 * s.swipeLeft
                ? ((t = n), !1)
                : void 0;
            }),
            (e = Math.abs(i(t).attr("data-slick-index") - s.currentSlide) || 1))
          : s.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
      var t = this;
      t.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
    }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots()),
        e && t.$slider.trigger("init", [t]),
        t.options.accessibility === !0 && t.initADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow.on("click.slick", { message: "next" }, i.changeSlide));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      e.options.dots === !0 &&
        e.slideCount > e.options.slidesToShow &&
        i("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide),
        e.options.dots === !0 &&
          e.options.pauseOnDotsHover === !0 &&
          e.options.autoplay === !0 &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.setPaused, e, !0))
            .on("mouseleave.slick", i.proxy(e.setPaused, e, !1));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        e.$list.on("mouseenter.slick", i.proxy(e.setPaused, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.setPaused, e, !1)),
        e.options.accessibility === !0 &&
          e.$list.on("keydown.slick", e.keyHandler),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          "resize.slick.slick-" + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        i.options.dots === !0 &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show(),
        i.options.autoplay === !0 && i.autoPlay();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && e.options.accessibility === !0
          ? e.changeSlide({ data: { message: "previous" } })
          : 39 === i.keyCode &&
            e.options.accessibility === !0 &&
            e.changeSlide({ data: { message: "next" } }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = document.createElement("img");
          (o.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                e.removeAttr("data-lazy").removeClass("slick-loading");
              });
            });
          }),
            (o.src = t);
        });
      }
      var t,
        o,
        s,
        n,
        r = this;
      r.options.centerMode === !0
        ? r.options.infinite === !0
          ? ((s = r.currentSlide + (r.options.slidesToShow / 2 + 1)),
            (n = s + r.options.slidesToShow + 2))
          : ((s = Math.max(
              0,
              r.currentSlide - (r.options.slidesToShow / 2 + 1)
            )),
            (n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide))
        : ((s = r.options.infinite
            ? r.options.slidesToShow + r.currentSlide
            : r.currentSlide),
          (n = s + r.options.slidesToShow),
          r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)),
        (t = r.$slider.find(".slick-slide").slice(s, n)),
        e(t),
        r.slideCount <= r.options.slidesToShow
          ? ((o = r.$slider.find(".slick-slide")), e(o))
          : r.currentSlide >= r.slideCount - r.options.slidesToShow
          ? ((o = r.$slider
              .find(".slick-cloned")
              .slice(0, r.options.slidesToShow)),
            e(o))
          : 0 === r.currentSlide &&
            ((o = r.$slider
              .find(".slick-cloned")
              .slice(-1 * r.options.slidesToShow)),
            e(o));
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext = function () {
      var i = this;
      i.changeSlide({ data: { message: "next" } });
    }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause = function () {
      var i = this;
      i.autoPlayClear(), (i.paused = !0);
    }),
    (e.prototype.play = e.prototype.slickPlay = function () {
      var i = this;
      (i.paused = !1), i.autoPlay();
    }),
    (e.prototype.postSlide = function (i) {
      var e = this;
      e.$slider.trigger("afterChange", [e, i]),
        (e.animating = !1),
        e.setPosition(),
        (e.swipeLeft = null),
        e.options.autoplay === !0 && e.paused === !1 && e.autoPlay(),
        e.options.accessibility === !0 && e.initADA();
    }),
    (e.prototype.prev = e.prototype.slickPrev = function () {
      var i = this;
      i.changeSlide({ data: { message: "previous" } });
    }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function () {
      var e,
        t,
        o = this;
      (e = i("img[data-lazy]", o.$slider).length),
        e > 0 &&
          ((t = i("img[data-lazy]", o.$slider).first()),
          t
            .attr("src", t.attr("data-lazy"))
            .removeClass("slick-loading")
            .load(function () {
              t.removeAttr("data-lazy"),
                o.progressiveLazyLoad(),
                o.options.adaptiveHeight === !0 && o.setPosition();
            })
            .error(function () {
              t.removeAttr("data-lazy"), o.progressiveLazyLoad();
            }));
    }),
    (e.prototype.refresh = function (e) {
      var t = this,
        o = t.currentSlide;
      t.destroy(!0),
        i.extend(t, t.initials, { currentSlide: o }),
        t.init(),
        e || t.changeSlide({ data: { message: "index", index: o } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || "window";
        for (e in n)
          if (
            ((o = s.breakpoints.length - 1),
            (t = n[e].breakpoint),
            n.hasOwnProperty(e))
          ) {
            for (; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.checkResponsive(!1, !0),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(0),
        e.setPosition(),
        e.$slider.trigger("reInit", [e]),
        e.options.autoplay === !0 && e.focusHandler();
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
      var o = this;
      return (
        "boolean" == typeof i
          ? ((e = i), (i = e === !0 ? 0 : o.slideCount - 1))
          : (i = e === !0 ? --i : i),
        o.slideCount < 1 || 0 > i || i > o.slideCount - 1
          ? !1
          : (o.unload(),
            t === !0
              ? o.$slideTrack.children().remove()
              : o.$slideTrack.children(this.options.slide).eq(i).remove(),
            (o.$slides = o.$slideTrack.children(this.options.slide)),
            o.$slideTrack.children(this.options.slide).detach(),
            o.$slideTrack.append(o.$slides),
            (o.$slidesCache = o.$slides),
            void o.reinit())
      );
    }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      o.options.rtl === !0 && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        o.transformsEnabled === !1
          ? o.$slideTrack.css(s)
          : ((s = {}),
            o.cssTransitions === !1
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      i.options.vertical === !1
        ? i.options.centerMode === !0 &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          i.options.centerMode === !0 &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        i.options.vertical === !1 && i.options.variableWidth === !1
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : i.options.variableWidth === !0
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      i.options.variableWidth === !1 &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          i(s).css(
            t.options.rtl === !0
              ? {
                  position: "relative",
                  right: e,
                  top: 0,
                  zIndex: t.options.zIndex - 2,
                  opacity: 0,
                }
              : {
                  position: "relative",
                  left: e,
                  top: 0,
                  zIndex: t.options.zIndex - 2,
                  opacity: 0,
                }
          );
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        i.options.adaptiveHeight === !0 &&
        i.options.vertical === !1
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption = function (e, t, o) {
      var s,
        n,
        r = this;
      if ("responsive" === e && "array" === i.type(t))
        for (n in t)
          if ("array" !== i.type(r.options.responsive))
            r.options.responsive = [t[n]];
          else {
            for (s = r.options.responsive.length - 1; s >= 0; )
              r.options.responsive[s].breakpoint === t[n].breakpoint &&
                r.options.responsive.splice(s, 1),
                s--;
            r.options.responsive.push(t[n]);
          }
      else r.options[e] = t;
      o === !0 && (r.unload(), r.reinit());
    }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        i.options.fade === !1
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = i.options.vertical === !0 ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 !== e.WebkitTransition ||
          void 0 !== e.MozTransition ||
          void 0 !== e.msTransition) &&
          i.options.useCSS === !0 &&
          (i.cssTransitions = !0),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          i.animType !== !1 &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled = null !== i.animType && i.animType !== !1);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      (t = n.$slider
        .find(".slick-slide")
        .removeClass("slick-active slick-center slick-current")
        .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        n.options.centerMode === !0
          ? ((e = Math.floor(n.options.slidesToShow / 2)),
            n.options.infinite === !0 &&
              (i >= e && i <= n.slideCount - 1 - e
                ? n.$slides
                    .slice(i - e, i + e + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((o = n.options.slidesToShow + i),
                  t
                    .slice(o - e + 1, o + e + 2)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
              0 === i
                ? t
                    .eq(t.length - 1 - n.options.slidesToShow)
                    .addClass("slick-center")
                : i === n.slideCount - 1 &&
                  t.eq(n.options.slidesToShow).addClass("slick-center")),
            n.$slides.eq(i).addClass("slick-center"))
          : i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = n.options.infinite === !0 ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
        "ondemand" === n.options.lazyLoad && n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (s.options.fade === !0 && (s.options.centerMode = !1),
        s.options.infinite === !0 &&
          s.options.fade === !1 &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            s.options.centerMode === !0
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; o > e; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.setPaused = function (i) {
      var e = this;
      e.options.autoplay === !0 &&
        e.options.pauseOnHover === !0 &&
        ((e.paused = i), i ? e.autoPlayClear() : e.autoPlay());
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide")
          ? i(e.target)
          : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      return (
        s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? (t.setSlideClasses(s), void t.asNavFor(s))
          : void t.slideHandler(s)
      );
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l = null,
        a = this;
      return (
        (e = e || !1),
        (a.animating === !0 && a.options.waitForAnimate === !0) ||
        (a.options.fade === !0 && a.currentSlide === i) ||
        a.slideCount <= a.options.slidesToShow
          ? void 0
          : (e === !1 && a.asNavFor(i),
            (o = i),
            (l = a.getLeft(o)),
            (r = a.getLeft(a.currentSlide)),
            (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
            a.options.infinite === !1 &&
            a.options.centerMode === !1 &&
            (0 > i || i > a.getDotCount() * a.options.slidesToScroll)
              ? void (
                  a.options.fade === !1 &&
                  ((o = a.currentSlide),
                  t !== !0
                    ? a.animateSlide(r, function () {
                        a.postSlide(o);
                      })
                    : a.postSlide(o))
                )
              : a.options.infinite === !1 &&
                a.options.centerMode === !0 &&
                (0 > i || i > a.slideCount - a.options.slidesToScroll)
              ? void (
                  a.options.fade === !1 &&
                  ((o = a.currentSlide),
                  t !== !0
                    ? a.animateSlide(r, function () {
                        a.postSlide(o);
                      })
                    : a.postSlide(o))
                )
              : (a.options.autoplay === !0 && clearInterval(a.autoPlayTimer),
                (s =
                  0 > o
                    ? a.slideCount % a.options.slidesToScroll !== 0
                      ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                      : a.slideCount + o
                    : o >= a.slideCount
                    ? a.slideCount % a.options.slidesToScroll !== 0
                      ? 0
                      : o - a.slideCount
                    : o),
                (a.animating = !0),
                a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
                (n = a.currentSlide),
                (a.currentSlide = s),
                a.setSlideClasses(a.currentSlide),
                a.updateDots(),
                a.updateArrows(),
                a.options.fade === !0
                  ? (t !== !0
                      ? (a.fadeSlideOut(n),
                        a.fadeSlide(s, function () {
                          a.postSlide(s);
                        }))
                      : a.postSlide(s),
                    void a.animateHeight())
                  : void (t !== !0
                      ? a.animateSlide(l, function () {
                          a.postSlide(s);
                        })
                      : a.postSlide(s))))
      );
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        i.options.dots === !0 &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)),
        0 > o && (o = 360 - Math.abs(o)),
        45 >= o && o >= 0
          ? s.options.rtl === !1
            ? "left"
            : "right"
          : 360 >= o && o >= 315
          ? s.options.rtl === !1
            ? "left"
            : "right"
          : o >= 135 && 225 >= o
          ? s.options.rtl === !1
            ? "right"
            : "left"
          : s.options.verticalSwiping === !0
          ? o >= 35 && 135 >= o
            ? "left"
            : "right"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t = this;
      if (
        ((t.dragging = !1),
        (t.shouldClick = t.touchObject.swipeLength > 10 ? !1 : !0),
        void 0 === t.touchObject.curX)
      )
        return !1;
      if (
        (t.touchObject.edgeHit === !0 &&
          t.$slider.trigger("edge", [t, t.swipeDirection()]),
        t.touchObject.swipeLength >= t.touchObject.minSwipe)
      )
        switch (t.swipeDirection()) {
          case "left":
            (e = t.options.swipeToSlide
              ? t.checkNavigable(t.currentSlide + t.getSlideCount())
              : t.currentSlide + t.getSlideCount()),
              t.slideHandler(e),
              (t.currentDirection = 0),
              (t.touchObject = {}),
              t.$slider.trigger("swipe", [t, "left"]);
            break;
          case "right":
            (e = t.options.swipeToSlide
              ? t.checkNavigable(t.currentSlide - t.getSlideCount())
              : t.currentSlide - t.getSlideCount()),
              t.slideHandler(e),
              (t.currentDirection = 1),
              (t.touchObject = {}),
              t.$slider.trigger("swipe", [t, "right"]);
        }
      else
        t.touchObject.startX !== t.touchObject.curX &&
          (t.slideHandler(t.currentSlide), (t.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          e.options.swipe === !1 ||
          ("ontouchend" in document && e.options.swipe === !1) ||
          (e.options.draggable === !1 && -1 !== i.type.indexOf("mouse"))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          e.options.verticalSwiping === !0 &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !r.dragging || (n && 1 !== n.length)
          ? !1
          : ((e = r.getLeft(r.currentSlide)),
            (r.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
            (r.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
            (r.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))
            )),
            r.options.verticalSwiping === !0 &&
              (r.touchObject.swipeLength = Math.round(
                Math.sqrt(
                  Math.pow(r.touchObject.curY - r.touchObject.startY, 2)
                )
              )),
            (t = r.swipeDirection()),
            "vertical" !== t
              ? (void 0 !== i.originalEvent &&
                  r.touchObject.swipeLength > 4 &&
                  i.preventDefault(),
                (s =
                  (r.options.rtl === !1 ? 1 : -1) *
                  (r.touchObject.curX > r.touchObject.startX ? 1 : -1)),
                r.options.verticalSwiping === !0 &&
                  (s = r.touchObject.curY > r.touchObject.startY ? 1 : -1),
                (o = r.touchObject.swipeLength),
                (r.touchObject.edgeHit = !1),
                r.options.infinite === !1 &&
                  ((0 === r.currentSlide && "right" === t) ||
                    (r.currentSlide >= r.getDotCount() && "left" === t)) &&
                  ((o = r.touchObject.swipeLength * r.options.edgeFriction),
                  (r.touchObject.edgeHit = !0)),
                r.options.vertical === !1
                  ? (r.swipeLeft = e + o * s)
                  : (r.swipeLeft =
                      e + o * (r.$list.height() / r.listWidth) * s),
                r.options.verticalSwiping === !0 && (r.swipeLeft = e + o * s),
                r.options.fade === !0 || r.options.touchMove === !1
                  ? !1
                  : r.animating === !0
                  ? ((r.swipeLeft = null), !1)
                  : void r.setCSS(r.swipeLeft))
              : void 0)
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      return 1 !== t.touchObject.fingerCount ||
        t.slideCount <= t.options.slidesToShow
        ? ((t.touchObject = {}), !1)
        : (void 0 !== i.originalEvent &&
            void 0 !== i.originalEvent.touches &&
            (e = i.originalEvent.touches[0]),
          (t.touchObject.startX = t.touchObject.curX =
            void 0 !== e ? e.pageX : i.clientX),
          (t.touchObject.startY = t.touchObject.curY =
            void 0 !== e ? e.pageY : i.clientY),
          void (t.dragging = !0));
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
      var i = this;
      null !== i.$slidesCache &&
        (i.unload(),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slidesCache.appendTo(i.$slideTrack),
        i.reinit());
    }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i,
        e = this;
      (i = Math.floor(e.options.slidesToShow / 2)),
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          !e.options.infinite &&
          (e.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          e.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === e.currentSlide
            ? (e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              e.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : e.currentSlide >= e.slideCount - e.options.slidesToShow &&
              e.options.centerMode === !1
            ? (e.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              e.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : e.currentSlide >= e.slideCount - 1 &&
              e.options.centerMode === !0 &&
              (e.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              e.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots
          .find("li")
          .removeClass("slick-active")
          .attr("aria-hidden", "true"),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active")
          .attr("aria-hidden", "false"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      document[i.hidden]
        ? ((i.paused = !0), i.autoPlayClear())
        : i.options.autoplay === !0 && ((i.paused = !1), i.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this;
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        e.$slideTrack.attr("role", "listbox"),
        e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
          i(this).attr({
            role: "option",
            "aria-describedby": "slick-slide" + e.instanceUid + t,
          });
        }),
        null !== e.$dots &&
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (t) {
              i(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + e.instanceUid + t,
                id: "slick-slide" + e.instanceUid + t,
              });
            })
            .first()
            .attr("aria-selected", "true")
            .end()
            .find("button")
            .attr("role", "button")
            .end()
            .closest("div")
            .attr("role", "toolbar"),
        e.activateADA();
    }),
    (e.prototype.activateADA = function () {
      var i = this,
        e = i.$slider.find("*").is(":focus");
      i.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false", tabindex: "0" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" }),
        e && i.$slideTrack.find(".slick-active").focus();
    }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider.on("focus.slick blur.slick", "*", function (t) {
        t.stopImmediatePropagation();
        var o = i(this);
        setTimeout(function () {
          e.isPlay &&
            (o.is(":focus")
              ? (e.autoPlayClear(), (e.paused = !0))
              : ((e.paused = !1), e.autoPlay()));
        }, 0);
      });
    }),
    (i.fn.slick = function () {
      var i,
        t = this,
        o = arguments[0],
        s = Array.prototype.slice.call(arguments, 1),
        n = t.length,
        r = 0;
      for (r; n > r; r++)
        if (
          ("object" == typeof o || "undefined" == typeof o
            ? (t[r].slick = new e(t[r], o))
            : (i = t[r].slick[o].apply(t[r].slick, s)),
          "undefined" != typeof i)
        )
          return i;
      return t;
    });
});

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!(function (e, t) {
  "function" == typeof define && define.amd
    ? define("ev-emitter/ev-emitter", t)
    : "object" == typeof module && module.exports
    ? (module.exports = t())
    : (e.EvEmitter = t());
})("undefined" != typeof window ? window : this, function () {
  function e() {}
  var t = e.prototype;
  return (
    (t.on = function (e, t) {
      if (e && t) {
        var i = (this._events = this._events || {}),
          n = (i[e] = i[e] || []);
        return n.indexOf(t) == -1 && n.push(t), this;
      }
    }),
    (t.once = function (e, t) {
      if (e && t) {
        this.on(e, t);
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[e] = i[e] || {});
        return (n[t] = !0), this;
      }
    }),
    (t.off = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = i.indexOf(t);
        return n != -1 && i.splice(n, 1), this;
      }
    }),
    (t.emitEvent = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        (i = i.slice(0)), (t = t || []);
        for (
          var n = this._onceEvents && this._onceEvents[e], o = 0;
          o < i.length;
          o++
        ) {
          var r = i[o],
            s = n && n[r];
          s && (this.off(e, r), delete n[r]), r.apply(this, t);
        }
        return this;
      }
    }),
    (t.allOff = function () {
      delete this._events, delete this._onceEvents;
    }),
    e
  );
}),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (i) {
          return t(e, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(e, require("ev-emitter")))
      : (e.imagesLoaded = t(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    }
    function n(e) {
      if (Array.isArray(e)) return e;
      var t = "object" == typeof e && "number" == typeof e.length;
      return t ? d.call(e) : [e];
    }
    function o(e, t, r) {
      if (!(this instanceof o)) return new o(e, t, r);
      var s = e;
      return (
        "string" == typeof e && (s = document.querySelectorAll(e)),
        s
          ? ((this.elements = n(s)),
            (this.options = i({}, this.options)),
            "function" == typeof t ? (r = t) : i(this.options, t),
            r && this.on("always", r),
            this.getImages(),
            h && (this.jqDeferred = new h.Deferred()),
            void setTimeout(this.check.bind(this)))
          : void a.error("Bad element for imagesLoaded " + (s || e))
      );
    }
    function r(e) {
      this.img = e;
    }
    function s(e, t) {
      (this.url = e), (this.element = t), (this.img = new Image());
    }
    var h = e.jQuery,
      a = e.console,
      d = Array.prototype.slice;
    (o.prototype = Object.create(t.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e),
          this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
          for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var o = i[n];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background) {
            var r = e.querySelectorAll(this.options.background);
            for (n = 0; n < r.length; n++) {
              var s = r[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var u = { 1: !0, 9: !0, 11: !0 };
    return (
      (o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage);
            null !== n;

          ) {
            var o = n && n[2];
            o && this.addBackground(o, e), (n = i.exec(t.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t);
      }),
      (o.prototype.addBackground = function (e, t) {
        var i = new s(e, t);
        this.images.push(i);
      }),
      (o.prototype.check = function () {
        function e(e, i, n) {
          setTimeout(function () {
            t.progress(e, i, n);
          });
        }
        var t = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function (e, t, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent("progress", [this, e, t]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log("progress: " + i, e, t);
      }),
      (o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(e, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this);
        }
      }),
      (r.prototype = Object.create(t.prototype)),
      (r.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
      }),
      (r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url);
        var e = this.getIsImageComplete();
        e &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype.confirm = function (e, t) {
        (this.isLoaded = e),
          this.emitEvent("progress", [this, this.element, t]);
      }),
      (o.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery),
          t &&
            ((h = t),
            (h.fn.imagesLoaded = function (e, t) {
              var i = new o(this, e, t);
              return i.jqDeferred.promise(h(this));
            }));
      }),
      o.makeJQueryPlugin(),
      o
    );
  });

/*!
 * VERSION: 1.15.1
 * DATE: 2015-01-20
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  _gsScope._gsDefine(
    "TweenMax",
    ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function (t, e, i) {
      var s = function (t) {
          var e,
            i = [],
            s = t.length;
          for (e = 0; e !== s; i.push(t[e++]));
          return i;
        },
        r = function (t, e, s) {
          i.call(this, t, e, s),
            (this._cycle = 0),
            (this._yoyo = this.vars.yoyo === !0),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            (this._dirty = !0),
            (this.render = r.prototype.render);
        },
        n = 1e-10,
        a = i._internals,
        o = a.isSelector,
        h = a.isArray,
        l = (r.prototype = i.to({}, 0.1, {})),
        _ = [];
      (r.version = "1.15.1"),
        (l.constructor = r),
        (l.kill()._gc = !1),
        (r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf),
        (r.getTweensOf = i.getTweensOf),
        (r.lagSmoothing = i.lagSmoothing),
        (r.ticker = i.ticker),
        (r.render = i.render),
        (l.invalidate = function () {
          return (
            (this._yoyo = this.vars.yoyo === !0),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            this._uncache(!0),
            i.prototype.invalidate.call(this)
          );
        }),
        (l.updateTo = function (t, e) {
          var s,
            r = this.ratio,
            n = this.vars.immediateRender || t.immediateRender;
          e &&
            this._startTime < this._timeline._time &&
            ((this._startTime = this._timeline._time),
            this._uncache(!1),
            this._gc
              ? this._enabled(!0, !1)
              : this._timeline.insert(this, this._startTime - this._delay));
          for (s in t) this.vars[s] = t[s];
          if (this._initted || n)
            if (e) (this._initted = !1), n && this.render(0, !0, !0);
            else if (
              (this._gc && this._enabled(!0, !1),
              this._notifyPluginsOfEnabled &&
                this._firstPT &&
                i._onPluginEvent("_onDisable", this),
              this._time / this._duration > 0.998)
            ) {
              var a = this._time;
              this.render(0, !0, !1),
                (this._initted = !1),
                this.render(a, !0, !1);
            } else if (this._time > 0 || n) {
              (this._initted = !1), this._init();
              for (var o, h = 1 / (1 - r), l = this._firstPT; l; )
                (o = l.s + l.c), (l.c *= h), (l.s = o - l.c), (l = l._next);
            }
          return this;
        }),
        (l.render = function (t, e, i) {
          this._initted ||
            (0 === this._duration && this.vars.repeat && this.invalidate());
          var s,
            r,
            o,
            h,
            l,
            u,
            p,
            c,
            f = this._dirty ? this.totalDuration() : this._totalDuration,
            m = this._time,
            d = this._totalTime,
            g = this._cycle,
            v = this._duration,
            y = this._rawPrevTime;
          if (
            (t >= f
              ? ((this._totalTime = f),
                (this._cycle = this._repeat),
                this._yoyo && 0 !== (1 & this._cycle)
                  ? ((this._time = 0),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(0)
                      : 0))
                  : ((this._time = v),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(1)
                      : 1)),
                this._reversed || ((s = !0), (r = "onComplete")),
                0 === v &&
                  (this._initted || !this.vars.lazy || i) &&
                  (this._startTime === this._timeline._duration && (t = 0),
                  (0 === t || 0 > y || y === n) &&
                    y !== t &&
                    ((i = !0), y > n && (r = "onReverseComplete")),
                  (this._rawPrevTime = c = !e || t || y === t ? t : n)))
              : 1e-7 > t
              ? ((this._totalTime = this._time = this._cycle = 0),
                (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                (0 !== d || (0 === v && y > 0 && y !== n)) &&
                  ((r = "onReverseComplete"), (s = this._reversed)),
                0 > t &&
                  ((this._active = !1),
                  0 === v &&
                    (this._initted || !this.vars.lazy || i) &&
                    (y >= 0 && (i = !0),
                    (this._rawPrevTime = c = !e || t || y === t ? t : n))),
                this._initted || (i = !0))
              : ((this._totalTime = this._time = t),
                0 !== this._repeat &&
                  ((h = v + this._repeatDelay),
                  (this._cycle = (this._totalTime / h) >> 0),
                  0 !== this._cycle &&
                    this._cycle === this._totalTime / h &&
                    this._cycle--,
                  (this._time = this._totalTime - this._cycle * h),
                  this._yoyo &&
                    0 !== (1 & this._cycle) &&
                    (this._time = v - this._time),
                  this._time > v
                    ? (this._time = v)
                    : 0 > this._time && (this._time = 0)),
                this._easeType
                  ? ((l = this._time / v),
                    (u = this._easeType),
                    (p = this._easePower),
                    (1 === u || (3 === u && l >= 0.5)) && (l = 1 - l),
                    3 === u && (l *= 2),
                    1 === p
                      ? (l *= l)
                      : 2 === p
                      ? (l *= l * l)
                      : 3 === p
                      ? (l *= l * l * l)
                      : 4 === p && (l *= l * l * l * l),
                    (this.ratio =
                      1 === u
                        ? 1 - l
                        : 2 === u
                        ? l
                        : 0.5 > this._time / v
                        ? l / 2
                        : 1 - l / 2))
                  : (this.ratio = this._ease.getRatio(this._time / v))),
            m === this._time && !i && g === this._cycle)
          )
            return (
              d !== this._totalTime &&
                this._onUpdate &&
                (e ||
                  this._onUpdate.apply(
                    this.vars.onUpdateScope || this,
                    this.vars.onUpdateParams || _
                  )),
              void 0
            );
          if (!this._initted) {
            if ((this._init(), !this._initted || this._gc)) return;
            if (
              !i &&
              this._firstPT &&
              ((this.vars.lazy !== !1 && this._duration) ||
                (this.vars.lazy && !this._duration))
            )
              return (
                (this._time = m),
                (this._totalTime = d),
                (this._rawPrevTime = y),
                (this._cycle = g),
                a.lazyTweens.push(this),
                (this._lazy = [t, e]),
                void 0
              );
            this._time && !s
              ? (this.ratio = this._ease.getRatio(this._time / v))
              : s &&
                this._ease._calcEnd &&
                (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
          }
          for (
            this._lazy !== !1 && (this._lazy = !1),
              this._active ||
                (!this._paused &&
                  this._time !== m &&
                  t >= 0 &&
                  (this._active = !0)),
              0 === d &&
                (2 === this._initted && t > 0 && this._init(),
                this._startAt &&
                  (t >= 0
                    ? this._startAt.render(t, e, i)
                    : r || (r = "_dummyGS")),
                this.vars.onStart &&
                  (0 !== this._totalTime || 0 === v) &&
                  (e ||
                    this.vars.onStart.apply(
                      this.vars.onStartScope || this,
                      this.vars.onStartParams || _
                    ))),
              o = this._firstPT;
            o;

          )
            o.f
              ? o.t[o.p](o.c * this.ratio + o.s)
              : (o.t[o.p] = o.c * this.ratio + o.s),
              (o = o._next);
          this._onUpdate &&
            (0 > t &&
              this._startAt &&
              this._startTime &&
              this._startAt.render(t, e, i),
            e ||
              ((this._totalTime !== d || s) &&
                this._onUpdate.apply(
                  this.vars.onUpdateScope || this,
                  this.vars.onUpdateParams || _
                ))),
            this._cycle !== g &&
              (e ||
                this._gc ||
                (this.vars.onRepeat &&
                  this.vars.onRepeat.apply(
                    this.vars.onRepeatScope || this,
                    this.vars.onRepeatParams || _
                  ))),
            r &&
              (!this._gc || i) &&
              (0 > t &&
                this._startAt &&
                !this._onUpdate &&
                this._startTime &&
                this._startAt.render(t, e, i),
              s &&
                (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                (this._active = !1)),
              !e &&
                this.vars[r] &&
                this.vars[r].apply(
                  this.vars[r + "Scope"] || this,
                  this.vars[r + "Params"] || _
                ),
              0 === v &&
                this._rawPrevTime === n &&
                c !== n &&
                (this._rawPrevTime = 0));
        }),
        (r.to = function (t, e, i) {
          return new r(t, e, i);
        }),
        (r.from = function (t, e, i) {
          return (
            (i.runBackwards = !0),
            (i.immediateRender = 0 != i.immediateRender),
            new r(t, e, i)
          );
        }),
        (r.fromTo = function (t, e, i, s) {
          return (
            (s.startAt = i),
            (s.immediateRender =
              0 != s.immediateRender && 0 != i.immediateRender),
            new r(t, e, s)
          );
        }),
        (r.staggerTo = r.allTo = function (t, e, n, a, l, u, p) {
          a = a || 0;
          var c,
            f,
            m,
            d,
            g = n.delay || 0,
            v = [],
            y = function () {
              n.onComplete &&
                n.onComplete.apply(n.onCompleteScope || this, arguments),
                l.apply(p || this, u || _);
            };
          for (
            h(t) ||
              ("string" == typeof t && (t = i.selector(t) || t),
              o(t) && (t = s(t))),
              t = t || [],
              0 > a && ((t = s(t)), t.reverse(), (a *= -1)),
              c = t.length - 1,
              m = 0;
            c >= m;
            m++
          ) {
            f = {};
            for (d in n) f[d] = n[d];
            (f.delay = g),
              m === c && l && (f.onComplete = y),
              (v[m] = new r(t[m], e, f)),
              (g += a);
          }
          return v;
        }),
        (r.staggerFrom = r.allFrom = function (t, e, i, s, n, a, o) {
          return (
            (i.runBackwards = !0),
            (i.immediateRender = 0 != i.immediateRender),
            r.staggerTo(t, e, i, s, n, a, o)
          );
        }),
        (r.staggerFromTo = r.allFromTo = function (t, e, i, s, n, a, o, h) {
          return (
            (s.startAt = i),
            (s.immediateRender =
              0 != s.immediateRender && 0 != i.immediateRender),
            r.staggerTo(t, e, s, n, a, o, h)
          );
        }),
        (r.delayedCall = function (t, e, i, s, n) {
          return new r(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: i,
            onCompleteScope: s,
            onReverseComplete: e,
            onReverseCompleteParams: i,
            onReverseCompleteScope: s,
            immediateRender: !1,
            useFrames: n,
            overwrite: 0,
          });
        }),
        (r.set = function (t, e) {
          return new r(t, 0, e);
        }),
        (r.isTweening = function (t) {
          return i.getTweensOf(t, !0).length > 0;
        });
      var u = function (t, e) {
          for (var s = [], r = 0, n = t._first; n; )
            n instanceof i
              ? (s[r++] = n)
              : (e && (s[r++] = n), (s = s.concat(u(n, e))), (r = s.length)),
              (n = n._next);
          return s;
        },
        p = (r.getAllTweens = function (e) {
          return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e));
        });
      (r.killAll = function (t, i, s, r) {
        null == i && (i = !0), null == s && (s = !0);
        var n,
          a,
          o,
          h = p(0 != r),
          l = h.length,
          _ = i && s && r;
        for (o = 0; l > o; o++)
          (a = h[o]),
            (_ ||
              a instanceof e ||
              ((n = a.target === a.vars.onComplete) && s) ||
              (i && !n)) &&
              (t
                ? a.totalTime(a._reversed ? 0 : a.totalDuration())
                : a._enabled(!1, !1));
      }),
        (r.killChildTweensOf = function (t, e) {
          if (null != t) {
            var n,
              l,
              _,
              u,
              p,
              c = a.tweenLookup;
            if (
              ("string" == typeof t && (t = i.selector(t) || t),
              o(t) && (t = s(t)),
              h(t))
            )
              for (u = t.length; --u > -1; ) r.killChildTweensOf(t[u], e);
            else {
              n = [];
              for (_ in c)
                for (l = c[_].target.parentNode; l; )
                  l === t && (n = n.concat(c[_].tweens)), (l = l.parentNode);
              for (p = n.length, u = 0; p > u; u++)
                e && n[u].totalTime(n[u].totalDuration()),
                  n[u]._enabled(!1, !1);
            }
          }
        });
      var c = function (t, i, s, r) {
        (i = i !== !1), (s = s !== !1), (r = r !== !1);
        for (var n, a, o = p(r), h = i && s && r, l = o.length; --l > -1; )
          (a = o[l]),
            (h ||
              a instanceof e ||
              ((n = a.target === a.vars.onComplete) && s) ||
              (i && !n)) &&
              a.paused(t);
      };
      return (
        (r.pauseAll = function (t, e, i) {
          c(!0, t, e, i);
        }),
        (r.resumeAll = function (t, e, i) {
          c(!1, t, e, i);
        }),
        (r.globalTimeScale = function (e) {
          var s = t._rootTimeline,
            r = i.ticker.time;
          return arguments.length
            ? ((e = e || n),
              (s._startTime = r - ((r - s._startTime) * s._timeScale) / e),
              (s = t._rootFramesTimeline),
              (r = i.ticker.frame),
              (s._startTime = r - ((r - s._startTime) * s._timeScale) / e),
              (s._timeScale = t._rootTimeline._timeScale = e),
              e)
            : s._timeScale;
        }),
        (l.progress = function (t) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) +
                  this._cycle * (this._duration + this._repeatDelay),
                !1
              )
            : this._time / this.duration();
        }),
        (l.totalProgress = function (t) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * t, !1)
            : this._totalTime / this.totalDuration();
        }),
        (l.time = function (t, e) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              t > this._duration && (t = this._duration),
              this._yoyo && 0 !== (1 & this._cycle)
                ? (t =
                    this._duration -
                    t +
                    this._cycle * (this._duration + this._repeatDelay))
                : 0 !== this._repeat &&
                  (t += this._cycle * (this._duration + this._repeatDelay)),
              this.totalTime(t, e))
            : this._time;
        }),
        (l.duration = function (e) {
          return arguments.length
            ? t.prototype.duration.call(this, e)
            : this._duration;
        }),
        (l.totalDuration = function (t) {
          return arguments.length
            ? -1 === this._repeat
              ? this
              : this.duration(
                  (t - this._repeat * this._repeatDelay) / (this._repeat + 1)
                )
            : (this._dirty &&
                ((this._totalDuration =
                  -1 === this._repeat
                    ? 999999999999
                    : this._duration * (this._repeat + 1) +
                      this._repeatDelay * this._repeat),
                (this._dirty = !1)),
              this._totalDuration);
        }),
        (l.repeat = function (t) {
          return arguments.length
            ? ((this._repeat = t), this._uncache(!0))
            : this._repeat;
        }),
        (l.repeatDelay = function (t) {
          return arguments.length
            ? ((this._repeatDelay = t), this._uncache(!0))
            : this._repeatDelay;
        }),
        (l.yoyo = function (t) {
          return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
        }),
        r
      );
    },
    !0
  ),
    _gsScope._gsDefine(
      "TimelineLite",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function (t, e, i) {
        var s = function (t) {
            e.call(this, t),
              (this._labels = {}),
              (this.autoRemoveChildren = this.vars.autoRemoveChildren === !0),
              (this.smoothChildTiming = this.vars.smoothChildTiming === !0),
              (this._sortChildren = !0),
              (this._onUpdate = this.vars.onUpdate);
            var i,
              s,
              r = this.vars;
            for (s in r)
              (i = r[s]),
                h(i) &&
                  -1 !== i.join("").indexOf("{self}") &&
                  (r[s] = this._swapSelfInParams(i));
            h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger);
          },
          r = 1e-10,
          n = i._internals,
          a = (s._internals = {}),
          o = n.isSelector,
          h = n.isArray,
          l = n.lazyTweens,
          _ = n.lazyRender,
          u = [],
          p = _gsScope._gsDefine.globals,
          c = function (t) {
            var e,
              i = {};
            for (e in t) i[e] = t[e];
            return i;
          },
          f = (a.pauseCallback = function (t, e, i, s) {
            var r = t._timeline,
              n = r._totalTime;
            (!e && this._forcingPlayhead) ||
              r._rawPrevTime === t._startTime ||
              (r.pause(t._startTime),
              e && e.apply(s || r, i || u),
              this._forcingPlayhead && r.seek(n));
          }),
          m = function (t) {
            var e,
              i = [],
              s = t.length;
            for (e = 0; e !== s; i.push(t[e++]));
            return i;
          },
          d = (s.prototype = new e());
        return (
          (s.version = "1.15.1"),
          (d.constructor = s),
          (d.kill()._gc = d._forcingPlayhead = !1),
          (d.to = function (t, e, s, r) {
            var n = (s.repeat && p.TweenMax) || i;
            return e ? this.add(new n(t, e, s), r) : this.set(t, s, r);
          }),
          (d.from = function (t, e, s, r) {
            return this.add(((s.repeat && p.TweenMax) || i).from(t, e, s), r);
          }),
          (d.fromTo = function (t, e, s, r, n) {
            var a = (r.repeat && p.TweenMax) || i;
            return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n);
          }),
          (d.staggerTo = function (t, e, r, n, a, h, l, _) {
            var u,
              p = new s({
                onComplete: h,
                onCompleteParams: l,
                onCompleteScope: _,
                smoothChildTiming: this.smoothChildTiming,
              });
            for (
              "string" == typeof t && (t = i.selector(t) || t),
                t = t || [],
                o(t) && (t = m(t)),
                n = n || 0,
                0 > n && ((t = m(t)), t.reverse(), (n *= -1)),
                u = 0;
              t.length > u;
              u++
            )
              r.startAt && (r.startAt = c(r.startAt)),
                p.to(t[u], e, c(r), u * n);
            return this.add(p, a);
          }),
          (d.staggerFrom = function (t, e, i, s, r, n, a, o) {
            return (
              (i.immediateRender = 0 != i.immediateRender),
              (i.runBackwards = !0),
              this.staggerTo(t, e, i, s, r, n, a, o)
            );
          }),
          (d.staggerFromTo = function (t, e, i, s, r, n, a, o, h) {
            return (
              (s.startAt = i),
              (s.immediateRender =
                0 != s.immediateRender && 0 != i.immediateRender),
              this.staggerTo(t, e, s, r, n, a, o, h)
            );
          }),
          (d.call = function (t, e, s, r) {
            return this.add(i.delayedCall(0, t, e, s), r);
          }),
          (d.set = function (t, e, s) {
            return (
              (s = this._parseTimeOrLabel(s, 0, !0)),
              null == e.immediateRender &&
                (e.immediateRender = s === this._time && !this._paused),
              this.add(new i(t, 0, e), s)
            );
          }),
          (s.exportRoot = function (t, e) {
            (t = t || {}),
              null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var r,
              n,
              a = new s(t),
              o = a._timeline;
            for (
              null == e && (e = !0),
                o._remove(a, !0),
                a._startTime = 0,
                a._rawPrevTime = a._time = a._totalTime = o._time,
                r = o._first;
              r;

            )
              (n = r._next),
                (e && r instanceof i && r.target === r.vars.onComplete) ||
                  a.add(r, r._startTime - r._delay),
                (r = n);
            return o.add(a, 0), a;
          }),
          (d.add = function (r, n, a, o) {
            var l, _, u, p, c, f;
            if (
              ("number" != typeof n &&
                (n = this._parseTimeOrLabel(n, 0, !0, r)),
              !(r instanceof t))
            ) {
              if (r instanceof Array || (r && r.push && h(r))) {
                for (
                  a = a || "normal", o = o || 0, l = n, _ = r.length, u = 0;
                  _ > u;
                  u++
                )
                  h((p = r[u])) && (p = new s({ tweens: p })),
                    this.add(p, l),
                    "string" != typeof p &&
                      "function" != typeof p &&
                      ("sequence" === a
                        ? (l = p._startTime + p.totalDuration() / p._timeScale)
                        : "start" === a && (p._startTime -= p.delay())),
                    (l += o);
                return this._uncache(!0);
              }
              if ("string" == typeof r) return this.addLabel(r, n);
              if ("function" != typeof r)
                throw (
                  "Cannot add " +
                  r +
                  " into the timeline; it is not a tween, timeline, function, or string."
                );
              r = i.delayedCall(0, r);
            }
            if (
              (e.prototype.add.call(this, r, n),
              (this._gc || this._time === this._duration) &&
                !this._paused &&
                this._duration < this.duration())
            )
              for (c = this, f = c.rawTime() > r._startTime; c._timeline; )
                f && c._timeline.smoothChildTiming
                  ? c.totalTime(c._totalTime, !0)
                  : c._gc && c._enabled(!0, !1),
                  (c = c._timeline);
            return this;
          }),
          (d.remove = function (e) {
            if (e instanceof t) return this._remove(e, !1);
            if (e instanceof Array || (e && e.push && h(e))) {
              for (var i = e.length; --i > -1; ) this.remove(e[i]);
              return this;
            }
            return "string" == typeof e
              ? this.removeLabel(e)
              : this.kill(null, e);
          }),
          (d._remove = function (t, i) {
            e.prototype._remove.call(this, t, i);
            var s = this._last;
            return (
              s
                ? this._time > s._startTime + s._totalDuration / s._timeScale &&
                  ((this._time = this.duration()),
                  (this._totalTime = this._totalDuration))
                : (this._time = this._totalTime = this._duration = this._totalDuration = 0),
              this
            );
          }),
          (d.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
          }),
          (d.insert = d.insertMultiple = function (t, e, i, s) {
            return this.add(t, e || 0, i, s);
          }),
          (d.appendMultiple = function (t, e, i, s) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s);
          }),
          (d.addLabel = function (t, e) {
            return (this._labels[t] = this._parseTimeOrLabel(e)), this;
          }),
          (d.addPause = function (t, e, s, r) {
            var n = i.delayedCall(0, f, ["{self}", e, s, r], this);
            return (n.data = "isPause"), this.add(n, t);
          }),
          (d.removeLabel = function (t) {
            return delete this._labels[t], this;
          }),
          (d.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1;
          }),
          (d._parseTimeOrLabel = function (e, i, s, r) {
            var n;
            if (r instanceof t && r.timeline === this) this.remove(r);
            else if (r && (r instanceof Array || (r.push && h(r))))
              for (n = r.length; --n > -1; )
                r[n] instanceof t &&
                  r[n].timeline === this &&
                  this.remove(r[n]);
            if ("string" == typeof i)
              return this._parseTimeOrLabel(
                i,
                s && "number" == typeof e && null == this._labels[i]
                  ? e - this.duration()
                  : 0,
                s
              );
            if (
              ((i = i || 0),
              "string" != typeof e || (!isNaN(e) && null == this._labels[e]))
            )
              null == e && (e = this.duration());
            else {
              if (((n = e.indexOf("=")), -1 === n))
                return null == this._labels[e]
                  ? s
                    ? (this._labels[e] = this.duration() + i)
                    : i
                  : this._labels[e] + i;
              (i =
                parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1))),
                (e =
                  n > 1
                    ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s)
                    : this.duration());
            }
            return Number(e) + i;
          }),
          (d.seek = function (t, e) {
            return this.totalTime(
              "number" == typeof t ? t : this._parseTimeOrLabel(t),
              e !== !1
            );
          }),
          (d.stop = function () {
            return this.paused(!0);
          }),
          (d.gotoAndPlay = function (t, e) {
            return this.play(t, e);
          }),
          (d.gotoAndStop = function (t, e) {
            return this.pause(t, e);
          }),
          (d.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s,
              n,
              a,
              o,
              h,
              p = this._dirty ? this.totalDuration() : this._totalDuration,
              c = this._time,
              f = this._startTime,
              m = this._timeScale,
              d = this._paused;
            if (
              (t >= p
                ? ((this._totalTime = this._time = p),
                  this._reversed ||
                    this._hasPausedChild() ||
                    ((n = !0),
                    (o = "onComplete"),
                    0 === this._duration &&
                      (0 === t ||
                        0 > this._rawPrevTime ||
                        this._rawPrevTime === r) &&
                      this._rawPrevTime !== t &&
                      this._first &&
                      ((h = !0),
                      this._rawPrevTime > r && (o = "onReverseComplete"))),
                  (this._rawPrevTime =
                    this._duration || !e || t || this._rawPrevTime === t
                      ? t
                      : r),
                  (t = p + 1e-4))
                : 1e-7 > t
                ? ((this._totalTime = this._time = 0),
                  (0 !== c ||
                    (0 === this._duration &&
                      this._rawPrevTime !== r &&
                      (this._rawPrevTime > 0 ||
                        (0 > t && this._rawPrevTime >= 0)))) &&
                    ((o = "onReverseComplete"), (n = this._reversed)),
                  0 > t
                    ? ((this._active = !1),
                      this._rawPrevTime >= 0 && this._first && (h = !0),
                      (this._rawPrevTime = t))
                    : ((this._rawPrevTime =
                        this._duration || !e || t || this._rawPrevTime === t
                          ? t
                          : r),
                      (t = 0),
                      this._initted || (h = !0)))
                : (this._totalTime = this._time = this._rawPrevTime = t),
              (this._time !== c && this._first) || i || h)
            ) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._time !== c &&
                    t > 0 &&
                    (this._active = !0)),
                0 === c &&
                  this.vars.onStart &&
                  0 !== this._time &&
                  (e ||
                    this.vars.onStart.apply(
                      this.vars.onStartScope || this,
                      this.vars.onStartParams || u
                    )),
                this._time >= c)
              )
                for (
                  s = this._first;
                  s && ((a = s._next), !this._paused || d);

                )
                  (s._active ||
                    (s._startTime <= this._time && !s._paused && !s._gc)) &&
                    (s._reversed
                      ? s.render(
                          (s._dirty ? s.totalDuration() : s._totalDuration) -
                            (t - s._startTime) * s._timeScale,
                          e,
                          i
                        )
                      : s.render((t - s._startTime) * s._timeScale, e, i)),
                    (s = a);
              else
                for (s = this._last; s && ((a = s._prev), !this._paused || d); )
                  (s._active || (c >= s._startTime && !s._paused && !s._gc)) &&
                    (s._reversed
                      ? s.render(
                          (s._dirty ? s.totalDuration() : s._totalDuration) -
                            (t - s._startTime) * s._timeScale,
                          e,
                          i
                        )
                      : s.render((t - s._startTime) * s._timeScale, e, i)),
                    (s = a);
              this._onUpdate &&
                (e ||
                  (l.length && _(),
                  this._onUpdate.apply(
                    this.vars.onUpdateScope || this,
                    this.vars.onUpdateParams || u
                  ))),
                o &&
                  (this._gc ||
                    ((f === this._startTime || m !== this._timeScale) &&
                      (0 === this._time || p >= this.totalDuration()) &&
                      (n &&
                        (l.length && _(),
                        this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e &&
                        this.vars[o] &&
                        this.vars[o].apply(
                          this.vars[o + "Scope"] || this,
                          this.vars[o + "Params"] || u
                        ))));
            }
          }),
          (d._hasPausedChild = function () {
            for (var t = this._first; t; ) {
              if (t._paused || (t instanceof s && t._hasPausedChild()))
                return !0;
              t = t._next;
            }
            return !1;
          }),
          (d.getChildren = function (t, e, s, r) {
            r = r || -9999999999;
            for (var n = [], a = this._first, o = 0; a; )
              r > a._startTime ||
                (a instanceof i
                  ? e !== !1 && (n[o++] = a)
                  : (s !== !1 && (n[o++] = a),
                    t !== !1 &&
                      ((n = n.concat(a.getChildren(!0, e, s))),
                      (o = n.length)))),
                (a = a._next);
            return n;
          }),
          (d.getTweensOf = function (t, e) {
            var s,
              r,
              n = this._gc,
              a = [],
              o = 0;
            for (
              n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length;
              --r > -1;

            )
              (s[r].timeline === this || (e && this._contains(s[r]))) &&
                (a[o++] = s[r]);
            return n && this._enabled(!1, !0), a;
          }),
          (d.recent = function () {
            return this._recent;
          }),
          (d._contains = function (t) {
            for (var e = t.timeline; e; ) {
              if (e === this) return !0;
              e = e.timeline;
            }
            return !1;
          }),
          (d.shiftChildren = function (t, e, i) {
            i = i || 0;
            for (var s, r = this._first, n = this._labels; r; )
              r._startTime >= i && (r._startTime += t), (r = r._next);
            if (e) for (s in n) n[s] >= i && (n[s] += t);
            return this._uncache(!0);
          }),
          (d._kill = function (t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (
              var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1),
                s = i.length,
                r = !1;
              --s > -1;

            )
              i[s]._kill(t, e) && (r = !0);
            return r;
          }),
          (d.clear = function (t) {
            var e = this.getChildren(!1, !0, !0),
              i = e.length;
            for (this._time = this._totalTime = 0; --i > -1; )
              e[i]._enabled(!1, !1);
            return t !== !1 && (this._labels = {}), this._uncache(!0);
          }),
          (d.invalidate = function () {
            for (var e = this._first; e; ) e.invalidate(), (e = e._next);
            return t.prototype.invalidate.call(this);
          }),
          (d._enabled = function (t, i) {
            if (t === this._gc)
              for (var s = this._first; s; ) s._enabled(t, !0), (s = s._next);
            return e.prototype._enabled.call(this, t, i);
          }),
          (d.totalTime = function () {
            this._forcingPlayhead = !0;
            var e = t.prototype.totalTime.apply(this, arguments);
            return (this._forcingPlayhead = !1), e;
          }),
          (d.duration = function (t) {
            return arguments.length
              ? (0 !== this.duration() &&
                  0 !== t &&
                  this.timeScale(this._duration / t),
                this)
              : (this._dirty && this.totalDuration(), this._duration);
          }),
          (d.totalDuration = function (t) {
            if (!arguments.length) {
              if (this._dirty) {
                for (var e, i, s = 0, r = this._last, n = 999999999999; r; )
                  (e = r._prev),
                    r._dirty && r.totalDuration(),
                    r._startTime > n && this._sortChildren && !r._paused
                      ? this.add(r, r._startTime - r._delay)
                      : (n = r._startTime),
                    0 > r._startTime &&
                      !r._paused &&
                      ((s -= r._startTime),
                      this._timeline.smoothChildTiming &&
                        (this._startTime += r._startTime / this._timeScale),
                      this.shiftChildren(-r._startTime, !1, -9999999999),
                      (n = 0)),
                    (i = r._startTime + r._totalDuration / r._timeScale),
                    i > s && (s = i),
                    (r = e);
                (this._duration = this._totalDuration = s), (this._dirty = !1);
              }
              return this._totalDuration;
            }
            return (
              0 !== this.totalDuration() &&
                0 !== t &&
                this.timeScale(this._totalDuration / t),
              this
            );
          }),
          (d.usesFrames = function () {
            for (var e = this._timeline; e._timeline; ) e = e._timeline;
            return e === t._rootFramesTimeline;
          }),
          (d.rawTime = function () {
            return this._paused
              ? this._totalTime
              : (this._timeline.rawTime() - this._startTime) * this._timeScale;
          }),
          s
        );
      },
      !0
    ),
    _gsScope._gsDefine(
      "TimelineMax",
      ["TimelineLite", "TweenLite", "easing.Ease"],
      function (t, e, i) {
        var s = function (e) {
            t.call(this, e),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._cycle = 0),
              (this._yoyo = this.vars.yoyo === !0),
              (this._dirty = !0);
          },
          r = 1e-10,
          n = [],
          a = e._internals,
          o = a.lazyTweens,
          h = a.lazyRender,
          l = new i(null, null, 1, 0),
          _ = (s.prototype = new t());
        return (
          (_.constructor = s),
          (_.kill()._gc = !1),
          (s.version = "1.15.1"),
          (_.invalidate = function () {
            return (
              (this._yoyo = this.vars.yoyo === !0),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              t.prototype.invalidate.call(this)
            );
          }),
          (_.addCallback = function (t, i, s, r) {
            return this.add(e.delayedCall(0, t, s, r), i);
          }),
          (_.removeCallback = function (t, e) {
            if (t)
              if (null == e) this._kill(null, t);
              else
                for (
                  var i = this.getTweensOf(t, !1),
                    s = i.length,
                    r = this._parseTimeOrLabel(e);
                  --s > -1;

                )
                  i[s]._startTime === r && i[s]._enabled(!1, !1);
            return this;
          }),
          (_.removePause = function (e) {
            return this.removeCallback(t._internals.pauseCallback, e);
          }),
          (_.tweenTo = function (t, i) {
            i = i || {};
            var s,
              r,
              a,
              o = {
                ease: l,
                useFrames: this.usesFrames(),
                immediateRender: !1,
              };
            for (r in i) o[r] = i[r];
            return (
              (o.time = this._parseTimeOrLabel(t)),
              (s =
                Math.abs(Number(o.time) - this._time) / this._timeScale ||
                0.001),
              (a = new e(this, s, o)),
              (o.onStart = function () {
                a.target.paused(!0),
                  a.vars.time !== a.target.time() &&
                    s === a.duration() &&
                    a.duration(
                      Math.abs(a.vars.time - a.target.time()) /
                        a.target._timeScale
                    ),
                  i.onStart &&
                    i.onStart.apply(i.onStartScope || a, i.onStartParams || n);
              }),
              a
            );
          }),
          (_.tweenFromTo = function (t, e, i) {
            (i = i || {}),
              (t = this._parseTimeOrLabel(t)),
              (i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                onCompleteScope: this,
              }),
              (i.immediateRender = i.immediateRender !== !1);
            var s = this.tweenTo(e, i);
            return s.duration(
              Math.abs(s.vars.time - t) / this._timeScale || 0.001
            );
          }),
          (_.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s,
              a,
              l,
              _,
              u,
              p,
              c = this._dirty ? this.totalDuration() : this._totalDuration,
              f = this._duration,
              m = this._time,
              d = this._totalTime,
              g = this._startTime,
              v = this._timeScale,
              y = this._rawPrevTime,
              T = this._paused,
              w = this._cycle;
            if (
              (t >= c
                ? (this._locked ||
                    ((this._totalTime = c), (this._cycle = this._repeat)),
                  this._reversed ||
                    this._hasPausedChild() ||
                    ((a = !0),
                    (_ = "onComplete"),
                    0 === this._duration &&
                      (0 === t || 0 > y || y === r) &&
                      y !== t &&
                      this._first &&
                      ((u = !0), y > r && (_ = "onReverseComplete"))),
                  (this._rawPrevTime =
                    this._duration || !e || t || this._rawPrevTime === t
                      ? t
                      : r),
                  this._yoyo && 0 !== (1 & this._cycle)
                    ? (this._time = t = 0)
                    : ((this._time = f), (t = f + 1e-4)))
                : 1e-7 > t
                ? (this._locked || (this._totalTime = this._cycle = 0),
                  (this._time = 0),
                  (0 !== m ||
                    (0 === f &&
                      y !== r &&
                      (y > 0 || (0 > t && y >= 0)) &&
                      !this._locked)) &&
                    ((_ = "onReverseComplete"), (a = this._reversed)),
                  0 > t
                    ? ((this._active = !1),
                      y >= 0 && this._first && (u = !0),
                      (this._rawPrevTime = t))
                    : ((this._rawPrevTime =
                        f || !e || t || this._rawPrevTime === t ? t : r),
                      (t = 0),
                      this._initted || (u = !0)))
                : (0 === f && 0 > y && (u = !0),
                  (this._time = this._rawPrevTime = t),
                  this._locked ||
                    ((this._totalTime = t),
                    0 !== this._repeat &&
                      ((p = f + this._repeatDelay),
                      (this._cycle = (this._totalTime / p) >> 0),
                      0 !== this._cycle &&
                        this._cycle === this._totalTime / p &&
                        this._cycle--,
                      (this._time = this._totalTime - this._cycle * p),
                      this._yoyo &&
                        0 !== (1 & this._cycle) &&
                        (this._time = f - this._time),
                      this._time > f
                        ? ((this._time = f), (t = f + 1e-4))
                        : 0 > this._time
                        ? (this._time = t = 0)
                        : (t = this._time)))),
              this._cycle !== w && !this._locked)
            ) {
              var x = this._yoyo && 0 !== (1 & w),
                b = x === (this._yoyo && 0 !== (1 & this._cycle)),
                P = this._totalTime,
                S = this._cycle,
                k = this._rawPrevTime,
                R = this._time;
              if (
                ((this._totalTime = w * f),
                w > this._cycle ? (x = !x) : (this._totalTime += f),
                (this._time = m),
                (this._rawPrevTime = 0 === f ? y - 1e-4 : y),
                (this._cycle = w),
                (this._locked = !0),
                (m = x ? 0 : f),
                this.render(m, e, 0 === f),
                e ||
                  this._gc ||
                  (this.vars.onRepeat &&
                    this.vars.onRepeat.apply(
                      this.vars.onRepeatScope || this,
                      this.vars.onRepeatParams || n
                    )),
                b && ((m = x ? f + 1e-4 : -1e-4), this.render(m, !0, !1)),
                (this._locked = !1),
                this._paused && !T)
              )
                return;
              (this._time = R),
                (this._totalTime = P),
                (this._cycle = S),
                (this._rawPrevTime = k);
            }
            if (!((this._time !== m && this._first) || i || u))
              return (
                d !== this._totalTime &&
                  this._onUpdate &&
                  (e ||
                    this._onUpdate.apply(
                      this.vars.onUpdateScope || this,
                      this.vars.onUpdateParams || n
                    )),
                void 0
              );
            if (
              (this._initted || (this._initted = !0),
              this._active ||
                (!this._paused &&
                  this._totalTime !== d &&
                  t > 0 &&
                  (this._active = !0)),
              0 === d &&
                this.vars.onStart &&
                0 !== this._totalTime &&
                (e ||
                  this.vars.onStart.apply(
                    this.vars.onStartScope || this,
                    this.vars.onStartParams || n
                  )),
              this._time >= m)
            )
              for (s = this._first; s && ((l = s._next), !this._paused || T); )
                (s._active ||
                  (s._startTime <= this._time && !s._paused && !s._gc)) &&
                  (s._reversed
                    ? s.render(
                        (s._dirty ? s.totalDuration() : s._totalDuration) -
                          (t - s._startTime) * s._timeScale,
                        e,
                        i
                      )
                    : s.render((t - s._startTime) * s._timeScale, e, i)),
                  (s = l);
            else
              for (s = this._last; s && ((l = s._prev), !this._paused || T); )
                (s._active || (m >= s._startTime && !s._paused && !s._gc)) &&
                  (s._reversed
                    ? s.render(
                        (s._dirty ? s.totalDuration() : s._totalDuration) -
                          (t - s._startTime) * s._timeScale,
                        e,
                        i
                      )
                    : s.render((t - s._startTime) * s._timeScale, e, i)),
                  (s = l);
            this._onUpdate &&
              (e ||
                (o.length && h(),
                this._onUpdate.apply(
                  this.vars.onUpdateScope || this,
                  this.vars.onUpdateParams || n
                ))),
              _ &&
                (this._locked ||
                  this._gc ||
                  ((g === this._startTime || v !== this._timeScale) &&
                    (0 === this._time || c >= this.totalDuration()) &&
                    (a &&
                      (o.length && h(),
                      this._timeline.autoRemoveChildren &&
                        this._enabled(!1, !1),
                      (this._active = !1)),
                    !e &&
                      this.vars[_] &&
                      this.vars[_].apply(
                        this.vars[_ + "Scope"] || this,
                        this.vars[_ + "Params"] || n
                      ))));
          }),
          (_.getActive = function (t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var s,
              r,
              n = [],
              a = this.getChildren(t, e, i),
              o = 0,
              h = a.length;
            for (s = 0; h > s; s++) (r = a[s]), r.isActive() && (n[o++] = r);
            return n;
          }),
          (_.getLabelAfter = function (t) {
            t || (0 !== t && (t = this._time));
            var e,
              i = this.getLabelsArray(),
              s = i.length;
            for (e = 0; s > e; e++) if (i[e].time > t) return i[e].name;
            return null;
          }),
          (_.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
              if (t > e[i].time) return e[i].name;
            return null;
          }),
          (_.getLabelsArray = function () {
            var t,
              e = [],
              i = 0;
            for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
            return (
              e.sort(function (t, e) {
                return t.time - e.time;
              }),
              e
            );
          }),
          (_.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) +
                    this._cycle * (this._duration + this._repeatDelay),
                  e
                )
              : this._time / this.duration();
          }),
          (_.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this._totalTime / this.totalDuration();
          }),
          (_.totalDuration = function (e) {
            return arguments.length
              ? -1 === this._repeat
                ? this
                : this.duration(
                    (e - this._repeat * this._repeatDelay) / (this._repeat + 1)
                  )
              : (this._dirty &&
                  (t.prototype.totalDuration.call(this),
                  (this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat)),
                this._totalDuration);
          }),
          (_.time = function (t, e) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                t > this._duration && (t = this._duration),
                this._yoyo && 0 !== (1 & this._cycle)
                  ? (t =
                      this._duration -
                      t +
                      this._cycle * (this._duration + this._repeatDelay))
                  : 0 !== this._repeat &&
                    (t += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(t, e))
              : this._time;
          }),
          (_.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t), this._uncache(!0))
              : this._repeat;
          }),
          (_.repeatDelay = function (t) {
            return arguments.length
              ? ((this._repeatDelay = t), this._uncache(!0))
              : this._repeatDelay;
          }),
          (_.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (_.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.getLabelBefore(this._time + 1e-8);
          }),
          s
        );
      },
      !0
    ),
    (function () {
      var t = 180 / Math.PI,
        e = [],
        i = [],
        s = [],
        r = {},
        n = _gsScope._gsDefine.globals,
        a = function (t, e, i, s) {
          (this.a = t),
            (this.b = e),
            (this.c = i),
            (this.d = s),
            (this.da = s - t),
            (this.ca = i - t),
            (this.ba = e - t);
        },
        o =
          ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        h = function (t, e, i, s) {
          var r = { a: t },
            n = {},
            a = {},
            o = { c: s },
            h = (t + e) / 2,
            l = (e + i) / 2,
            _ = (i + s) / 2,
            u = (h + l) / 2,
            p = (l + _) / 2,
            c = (p - u) / 8;
          return (
            (r.b = h + (t - h) / 4),
            (n.b = u + c),
            (r.c = n.a = (r.b + n.b) / 2),
            (n.c = a.a = (u + p) / 2),
            (a.b = p - c),
            (o.b = _ + (s - _) / 4),
            (a.c = o.a = (a.b + o.b) / 2),
            [r, n, a, o]
          );
        },
        l = function (t, r, n, a, o) {
          var l,
            _,
            u,
            p,
            c,
            f,
            m,
            d,
            g,
            v,
            y,
            T,
            w,
            x = t.length - 1,
            b = 0,
            P = t[0].a;
          for (l = 0; x > l; l++)
            (c = t[b]),
              (_ = c.a),
              (u = c.d),
              (p = t[b + 1].d),
              o
                ? ((y = e[l]),
                  (T = i[l]),
                  (w = (0.25 * (T + y) * r) / (a ? 0.5 : s[l] || 0.5)),
                  (f = u - (u - _) * (a ? 0.5 * r : 0 !== y ? w / y : 0)),
                  (m = u + (p - u) * (a ? 0.5 * r : 0 !== T ? w / T : 0)),
                  (d =
                    u - (f + (((m - f) * ((3 * y) / (y + T) + 0.5)) / 4 || 0))))
                : ((f = u - 0.5 * (u - _) * r),
                  (m = u + 0.5 * (p - u) * r),
                  (d = u - (f + m) / 2)),
              (f += d),
              (m += d),
              (c.c = g = f),
              (c.b = 0 !== l ? P : (P = c.a + 0.6 * (c.c - c.a))),
              (c.da = u - _),
              (c.ca = g - _),
              (c.ba = P - _),
              n
                ? ((v = h(_, P, g, u)),
                  t.splice(b, 1, v[0], v[1], v[2], v[3]),
                  (b += 4))
                : b++,
              (P = m);
          (c = t[b]),
            (c.b = P),
            (c.c = P + 0.4 * (c.d - P)),
            (c.da = c.d - c.a),
            (c.ca = c.c - c.a),
            (c.ba = P - c.a),
            n &&
              ((v = h(c.a, P, c.c, c.d)),
              t.splice(b, 1, v[0], v[1], v[2], v[3]));
        },
        _ = function (t, s, r, n) {
          var o,
            h,
            l,
            _,
            u,
            p,
            c = [];
          if (n)
            for (t = [n].concat(t), h = t.length; --h > -1; )
              "string" == typeof (p = t[h][s]) &&
                "=" === p.charAt(1) &&
                (t[h][s] = n[s] + Number(p.charAt(0) + p.substr(2)));
          if (((o = t.length - 2), 0 > o))
            return (c[0] = new a(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s])), c;
          for (h = 0; o > h; h++)
            (l = t[h][s]),
              (_ = t[h + 1][s]),
              (c[h] = new a(l, 0, 0, _)),
              r &&
                ((u = t[h + 2][s]),
                (e[h] = (e[h] || 0) + (_ - l) * (_ - l)),
                (i[h] = (i[h] || 0) + (u - _) * (u - _)));
          return (c[h] = new a(t[h][s], 0, 0, t[h + 1][s])), c;
        },
        u = function (t, n, a, h, u, p) {
          var c,
            f,
            m,
            d,
            g,
            v,
            y,
            T,
            w = {},
            x = [],
            b = p || t[0];
          (u = "string" == typeof u ? "," + u + "," : o), null == n && (n = 1);
          for (f in t[0]) x.push(f);
          if (t.length > 1) {
            for (T = t[t.length - 1], y = !0, c = x.length; --c > -1; )
              if (((f = x[c]), Math.abs(b[f] - T[f]) > 0.05)) {
                y = !1;
                break;
              }
            y &&
              ((t = t.concat()),
              p && t.unshift(p),
              t.push(t[1]),
              (p = t[t.length - 3]));
          }
          for (e.length = i.length = s.length = 0, c = x.length; --c > -1; )
            (f = x[c]),
              (r[f] = -1 !== u.indexOf("," + f + ",")),
              (w[f] = _(t, f, r[f], p));
          for (c = e.length; --c > -1; )
            (e[c] = Math.sqrt(e[c])), (i[c] = Math.sqrt(i[c]));
          if (!h) {
            for (c = x.length; --c > -1; )
              if (r[f])
                for (m = w[x[c]], v = m.length - 1, d = 0; v > d; d++)
                  (g = m[d + 1].da / i[d] + m[d].da / e[d]),
                    (s[d] = (s[d] || 0) + g * g);
            for (c = s.length; --c > -1; ) s[c] = Math.sqrt(s[c]);
          }
          for (c = x.length, d = a ? 4 : 1; --c > -1; )
            (f = x[c]),
              (m = w[f]),
              l(m, n, a, h, r[f]),
              y && (m.splice(0, d), m.splice(m.length - d, d));
          return w;
        },
        p = function (t, e, i) {
          e = e || "soft";
          var s,
            r,
            n,
            o,
            h,
            l,
            _,
            u,
            p,
            c,
            f,
            m = {},
            d = "cubic" === e ? 3 : 2,
            g = "soft" === e,
            v = [];
          if ((g && i && (t = [i].concat(t)), null == t || d + 1 > t.length))
            throw "invalid Bezier data";
          for (p in t[0]) v.push(p);
          for (l = v.length; --l > -1; ) {
            for (
              p = v[l], m[p] = h = [], c = 0, u = t.length, _ = 0;
              u > _;
              _++
            )
              (s =
                null == i
                  ? t[_][p]
                  : "string" == typeof (f = t[_][p]) && "=" === f.charAt(1)
                  ? i[p] + Number(f.charAt(0) + f.substr(2))
                  : Number(f)),
                g && _ > 1 && u - 1 > _ && (h[c++] = (s + h[c - 2]) / 2),
                (h[c++] = s);
            for (u = c - d + 1, c = 0, _ = 0; u > _; _ += d)
              (s = h[_]),
                (r = h[_ + 1]),
                (n = h[_ + 2]),
                (o = 2 === d ? 0 : h[_ + 3]),
                (h[c++] = f =
                  3 === d
                    ? new a(s, r, n, o)
                    : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n));
            h.length = c;
          }
          return m;
        },
        c = function (t, e, i) {
          for (
            var s, r, n, a, o, h, l, _, u, p, c, f = 1 / i, m = t.length;
            --m > -1;

          )
            for (
              p = t[m],
                n = p.a,
                a = p.d - n,
                o = p.c - n,
                h = p.b - n,
                s = r = 0,
                _ = 1;
              i >= _;
              _++
            )
              (l = f * _),
                (u = 1 - l),
                (s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l)),
                (c = m * i + _ - 1),
                (e[c] = (e[c] || 0) + s * s);
        },
        f = function (t, e) {
          e = e >> 0 || 6;
          var i,
            s,
            r,
            n,
            a = [],
            o = [],
            h = 0,
            l = 0,
            _ = e - 1,
            u = [],
            p = [];
          for (i in t) c(t[i], a, e);
          for (r = a.length, s = 0; r > s; s++)
            (h += Math.sqrt(a[s])),
              (n = s % e),
              (p[n] = h),
              n === _ &&
                ((l += h),
                (n = (s / e) >> 0),
                (u[n] = p),
                (o[n] = l),
                (h = 0),
                (p = []));
          return { length: l, lengths: o, segments: u };
        },
        m = _gsScope._gsDefine.plugin({
          propName: "bezier",
          priority: -1,
          version: "1.3.4",
          API: 2,
          global: !0,
          init: function (t, e, i) {
            (this._target = t),
              e instanceof Array && (e = { values: e }),
              (this._func = {}),
              (this._round = {}),
              (this._props = []),
              (this._timeRes =
                null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10));
            var s,
              r,
              n,
              a,
              o,
              h = e.values || [],
              l = {},
              _ = h[0],
              c = e.autoRotate || i.vars.orientToBezier;
            this._autoRotate = c
              ? c instanceof Array
                ? c
                : [["x", "y", "rotation", c === !0 ? 0 : Number(c) || 0]]
              : null;
            for (s in _) this._props.push(s);
            for (n = this._props.length; --n > -1; )
              (s = this._props[n]),
                this._overwriteProps.push(s),
                (r = this._func[s] = "function" == typeof t[s]),
                (l[s] = r
                  ? t[
                      s.indexOf("set") ||
                      "function" != typeof t["get" + s.substr(3)]
                        ? s
                        : "get" + s.substr(3)
                    ]()
                  : parseFloat(t[s])),
                o || (l[s] !== h[0][s] && (o = l));
            if (
              ((this._beziers =
                "cubic" !== e.type &&
                "quadratic" !== e.type &&
                "soft" !== e.type
                  ? u(
                      h,
                      isNaN(e.curviness) ? 1 : e.curviness,
                      !1,
                      "thruBasic" === e.type,
                      e.correlate,
                      o
                    )
                  : p(h, e.type, l)),
              (this._segCount = this._beziers[s].length),
              this._timeRes)
            ) {
              var m = f(this._beziers, this._timeRes);
              (this._length = m.length),
                (this._lengths = m.lengths),
                (this._segments = m.segments),
                (this._l1 = this._li = this._s1 = this._si = 0),
                (this._l2 = this._lengths[0]),
                (this._curSeg = this._segments[0]),
                (this._s2 = this._curSeg[0]),
                (this._prec = 1 / this._curSeg.length);
            }
            if ((c = this._autoRotate))
              for (
                this._initialRotations = [],
                  c[0] instanceof Array || (this._autoRotate = c = [c]),
                  n = c.length;
                --n > -1;

              ) {
                for (a = 0; 3 > a; a++)
                  (s = c[n][a]),
                    (this._func[s] =
                      "function" == typeof t[s]
                        ? t[
                            s.indexOf("set") ||
                            "function" != typeof t["get" + s.substr(3)]
                              ? s
                              : "get" + s.substr(3)
                          ]
                        : !1);
                (s = c[n][2]),
                  (this._initialRotations[n] = this._func[s]
                    ? this._func[s].call(this._target)
                    : this._target[s]);
              }
            return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0;
          },
          set: function (e) {
            var i,
              s,
              r,
              n,
              a,
              o,
              h,
              l,
              _,
              u,
              p = this._segCount,
              c = this._func,
              f = this._target,
              m = e !== this._startRatio;
            if (this._timeRes) {
              if (
                ((_ = this._lengths),
                (u = this._curSeg),
                (e *= this._length),
                (r = this._li),
                e > this._l2 && p - 1 > r)
              ) {
                for (l = p - 1; l > r && e >= (this._l2 = _[++r]); );
                (this._l1 = _[r - 1]),
                  (this._li = r),
                  (this._curSeg = u = this._segments[r]),
                  (this._s2 = u[(this._s1 = this._si = 0)]);
              } else if (this._l1 > e && r > 0) {
                for (; r > 0 && (this._l1 = _[--r]) >= e; );
                0 === r && this._l1 > e ? (this._l1 = 0) : r++,
                  (this._l2 = _[r]),
                  (this._li = r),
                  (this._curSeg = u = this._segments[r]),
                  (this._s1 = u[(this._si = u.length - 1) - 1] || 0),
                  (this._s2 = u[this._si]);
              }
              if (
                ((i = r),
                (e -= this._l1),
                (r = this._si),
                e > this._s2 && u.length - 1 > r)
              ) {
                for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]); );
                (this._s1 = u[r - 1]), (this._si = r);
              } else if (this._s1 > e && r > 0) {
                for (; r > 0 && (this._s1 = u[--r]) >= e; );
                0 === r && this._s1 > e ? (this._s1 = 0) : r++,
                  (this._s2 = u[r]),
                  (this._si = r);
              }
              o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec;
            } else
              (i = 0 > e ? 0 : e >= 1 ? p - 1 : (p * e) >> 0),
                (o = (e - i * (1 / p)) * p);
            for (s = 1 - o, r = this._props.length; --r > -1; )
              (n = this._props[r]),
                (a = this._beziers[n][i]),
                (h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a),
                this._round[n] && (h = Math.round(h)),
                c[n] ? f[n](h) : (f[n] = h);
            if (this._autoRotate) {
              var d,
                g,
                v,
                y,
                T,
                w,
                x,
                b = this._autoRotate;
              for (r = b.length; --r > -1; )
                (n = b[r][2]),
                  (w = b[r][3] || 0),
                  (x = b[r][4] === !0 ? 1 : t),
                  (a = this._beziers[b[r][0]]),
                  (d = this._beziers[b[r][1]]),
                  a &&
                    d &&
                    ((a = a[i]),
                    (d = d[i]),
                    (g = a.a + (a.b - a.a) * o),
                    (y = a.b + (a.c - a.b) * o),
                    (g += (y - g) * o),
                    (y += (a.c + (a.d - a.c) * o - y) * o),
                    (v = d.a + (d.b - d.a) * o),
                    (T = d.b + (d.c - d.b) * o),
                    (v += (T - v) * o),
                    (T += (d.c + (d.d - d.c) * o - T) * o),
                    (h = m
                      ? Math.atan2(T - v, y - g) * x + w
                      : this._initialRotations[r]),
                    c[n] ? f[n](h) : (f[n] = h));
            }
          },
        }),
        d = m.prototype;
      (m.bezierThrough = u),
        (m.cubicToQuadratic = h),
        (m._autoCSS = !0),
        (m.quadraticToCubic = function (t, e, i) {
          return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
        }),
        (m._cssRegister = function () {
          var t = n.CSSPlugin;
          if (t) {
            var e = t._internals,
              i = e._parseToProxy,
              s = e._setPluginRatio,
              r = e.CSSPropTween;
            e._registerComplexSpecialProp("bezier", {
              parser: function (t, e, n, a, o, h) {
                e instanceof Array && (e = { values: e }), (h = new m());
                var l,
                  _,
                  u,
                  p = e.values,
                  c = p.length - 1,
                  f = [],
                  d = {};
                if (0 > c) return o;
                for (l = 0; c >= l; l++)
                  (u = i(t, p[l], a, o, h, c !== l)), (f[l] = u.end);
                for (_ in e) d[_] = e[_];
                return (
                  (d.values = f),
                  (o = new r(t, "bezier", 0, 0, u.pt, 2)),
                  (o.data = u),
                  (o.plugin = h),
                  (o.setRatio = s),
                  0 === d.autoRotate && (d.autoRotate = !0),
                  !d.autoRotate ||
                    d.autoRotate instanceof Array ||
                    ((l = d.autoRotate === !0 ? 0 : Number(d.autoRotate)),
                    (d.autoRotate =
                      null != u.end.left
                        ? [["left", "top", "rotation", l, !1]]
                        : null != u.end.x
                        ? [["x", "y", "rotation", l, !1]]
                        : !1)),
                  d.autoRotate &&
                    (a._transform || a._enableTransforms(!1),
                    (u.autoRotate = a._target._gsTransform)),
                  h._onInitTween(u.proxy, d, a._tween),
                  o
                );
              },
            });
          }
        }),
        (d._roundProps = function (t, e) {
          for (var i = this._overwriteProps, s = i.length; --s > -1; )
            (t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e);
        }),
        (d._kill = function (t) {
          var e,
            i,
            s = this._props;
          for (e in this._beziers)
            if (e in t)
              for (
                delete this._beziers[e], delete this._func[e], i = s.length;
                --i > -1;

              )
                s[i] === e && s.splice(i, 1);
          return this._super._kill.call(this, t);
        });
    })(),
    _gsScope._gsDefine(
      "plugins.CSSPlugin",
      ["plugins.TweenPlugin", "TweenLite"],
      function (t, e) {
        var i,
          s,
          r,
          n,
          a = function () {
            t.call(this, "css"),
              (this._overwriteProps.length = 0),
              (this.setRatio = a.prototype.setRatio);
          },
          o = _gsScope._gsDefine.globals,
          h = {},
          l = (a.prototype = new t("css"));
        (l.constructor = a),
          (a.version = "1.15.1"),
          (a.API = 2),
          (a.defaultTransformPerspective = 0),
          (a.defaultSkewType = "compensated"),
          (l = "px"),
          (a.suffixMap = {
            top: l,
            right: l,
            bottom: l,
            left: l,
            width: l,
            height: l,
            fontSize: l,
            padding: l,
            margin: l,
            perspective: l,
            lineHeight: "",
          });
        var _,
          u,
          p,
          c,
          f,
          m,
          d = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
          g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          T = /(?:\d|\-|\+|=|#|\.)*/g,
          w = /opacity *= *([^)]*)/i,
          x = /opacity:([^;]*)/i,
          b = /alpha\(opacity *=.+?\)/i,
          P = /^(rgb|hsl)/,
          S = /([A-Z])/g,
          k = /-([a-z])/gi,
          R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          A = function (t, e) {
            return e.toUpperCase();
          },
          C = /(?:Left|Right|Width)/i,
          O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          M = /,(?=[^\)]*(?:\(|$))/gi,
          z = Math.PI / 180,
          I = 180 / Math.PI,
          F = {},
          E = document,
          N = function (t) {
            return E.createElementNS
              ? E.createElementNS("http://www.w3.org/1999/xhtml", t)
              : E.createElement(t);
          },
          L = N("div"),
          X = N("img"),
          U = (a._internals = { _specialProps: h }),
          Y = navigator.userAgent,
          B = (function () {
            var t = Y.indexOf("Android"),
              e = N("a");
            return (
              (p =
                -1 !== Y.indexOf("Safari") &&
                -1 === Y.indexOf("Chrome") &&
                (-1 === t || Number(Y.substr(t + 8, 1)) > 3)),
              (f = p && 6 > Number(Y.substr(Y.indexOf("Version/") + 8, 1))),
              (c = -1 !== Y.indexOf("Firefox")),
              (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) ||
                /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) &&
                (m = parseFloat(RegExp.$1)),
              e
                ? ((e.style.cssText = "top:1px;opacity:.55;"),
                  /^0.55/.test(e.style.opacity))
                : !1
            );
          })(),
          j = function (t) {
            return w.test(
              "string" == typeof t
                ? t
                : (t.currentStyle ? t.currentStyle.filter : t.style.filter) ||
                    ""
            )
              ? parseFloat(RegExp.$1) / 100
              : 1;
          },
          q = function (t) {
            window.console && console.log(t);
          },
          V = "",
          G = "",
          W = function (t, e) {
            e = e || L;
            var i,
              s,
              r = e.style;
            if (void 0 !== r[t]) return t;
            for (
              t = t.charAt(0).toUpperCase() + t.substr(1),
                i = ["O", "Moz", "ms", "Ms", "Webkit"],
                s = 5;
              --s > -1 && void 0 === r[i[s] + t];

            );
            return s >= 0
              ? ((G = 3 === s ? "ms" : i[s]),
                (V = "-" + G.toLowerCase() + "-"),
                G + t)
              : null;
          },
          Z = E.defaultView ? E.defaultView.getComputedStyle : function () {},
          Q = (a.getStyle = function (t, e, i, s, r) {
            var n;
            return B || "opacity" !== e
              ? (!s && t.style[e]
                  ? (n = t.style[e])
                  : (i = i || Z(t))
                  ? (n =
                      i[e] ||
                      i.getPropertyValue(e) ||
                      i.getPropertyValue(e.replace(S, "-$1").toLowerCase()))
                  : t.currentStyle && (n = t.currentStyle[e]),
                null == r ||
                (n && "none" !== n && "auto" !== n && "auto auto" !== n)
                  ? n
                  : r)
              : j(t);
          }),
          $ = (U.convertToPixels = function (t, i, s, r, n) {
            if ("px" === r || !r) return s;
            if ("auto" === r || !s) return 0;
            var o,
              h,
              l,
              _ = C.test(i),
              u = t,
              p = L.style,
              c = 0 > s;
            if ((c && (s = -s), "%" === r && -1 !== i.indexOf("border")))
              o = (s / 100) * (_ ? t.clientWidth : t.clientHeight);
            else {
              if (
                ((p.cssText =
                  "border:0 solid red;position:" +
                  Q(t, "position") +
                  ";line-height:0;"),
                "%" !== r && u.appendChild)
              )
                p[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r;
              else {
                if (
                  ((u = t.parentNode || E.body),
                  (h = u._gsCache),
                  (l = e.ticker.frame),
                  h && _ && h.time === l)
                )
                  return (h.width * s) / 100;
                p[_ ? "width" : "height"] = s + r;
              }
              u.appendChild(L),
                (o = parseFloat(L[_ ? "offsetWidth" : "offsetHeight"])),
                u.removeChild(L),
                _ &&
                  "%" === r &&
                  a.cacheWidths !== !1 &&
                  ((h = u._gsCache = u._gsCache || {}),
                  (h.time = l),
                  (h.width = 100 * (o / s))),
                0 !== o || n || (o = $(t, i, s, r, !0));
            }
            return c ? -o : o;
          }),
          H = (U.calculateOffset = function (t, e, i) {
            if ("absolute" !== Q(t, "position", i)) return 0;
            var s = "left" === e ? "Left" : "Top",
              r = Q(t, "margin" + s, i);
            return (
              t["offset" + s] - ($(t, e, parseFloat(r), r.replace(T, "")) || 0)
            );
          }),
          K = function (t, e) {
            var i,
              s,
              r = {};
            if ((e = e || Z(t, null)))
              for (i in e)
                (-1 === i.indexOf("Transform") || xe === i) && (r[i] = e[i]);
            else if ((e = t.currentStyle || t.style))
              for (i in e)
                "string" == typeof i &&
                  void 0 === r[i] &&
                  (r[i.replace(k, A)] = e[i]);
            return (
              B || (r.opacity = j(t)),
              (s = Me(t, e, !1)),
              (r.rotation = s.rotation),
              (r.skewX = s.skewX),
              (r.scaleX = s.scaleX),
              (r.scaleY = s.scaleY),
              (r.x = s.x),
              (r.y = s.y),
              Se &&
                ((r.z = s.z),
                (r.rotationX = s.rotationX),
                (r.rotationY = s.rotationY),
                (r.scaleZ = s.scaleZ)),
              r.filters && delete r.filters,
              r
            );
          },
          J = function (t, e, i, s, r) {
            var n,
              a,
              o,
              h = {},
              l = t.style;
            for (a in i)
              "cssText" !== a &&
                "length" !== a &&
                isNaN(a) &&
                (e[a] !== (n = i[a]) || (r && r[a])) &&
                -1 === a.indexOf("Origin") &&
                ("number" == typeof n || "string" == typeof n) &&
                ((h[a] =
                  "auto" !== n || ("left" !== a && "top" !== a)
                    ? ("" !== n && "auto" !== n && "none" !== n) ||
                      "string" != typeof e[a] ||
                      "" === e[a].replace(y, "")
                      ? n
                      : 0
                    : H(t, a)),
                void 0 !== l[a] && (o = new ce(l, a, l[a], o)));
            if (s) for (a in s) "className" !== a && (h[a] = s[a]);
            return { difs: h, firstMPT: o };
          },
          te = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
          ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          ie = function (t, e, i) {
            var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
              r = te[e],
              n = r.length;
            for (i = i || Z(t, null); --n > -1; )
              (s -= parseFloat(Q(t, "padding" + r[n], i, !0)) || 0),
                (s -= parseFloat(Q(t, "border" + r[n] + "Width", i, !0)) || 0);
            return s;
          },
          se = function (t, e) {
            (null == t || "" === t || "auto" === t || "auto auto" === t) &&
              (t = "0 0");
            var i = t.split(" "),
              s =
                -1 !== t.indexOf("left")
                  ? "0%"
                  : -1 !== t.indexOf("right")
                  ? "100%"
                  : i[0],
              r =
                -1 !== t.indexOf("top")
                  ? "0%"
                  : -1 !== t.indexOf("bottom")
                  ? "100%"
                  : i[1];
            return (
              null == r
                ? (r = "center" === s ? "50%" : "0")
                : "center" === r && (r = "50%"),
              ("center" === s ||
                (isNaN(parseFloat(s)) && -1 === (s + "").indexOf("="))) &&
                (s = "50%"),
              e &&
                ((e.oxp = -1 !== s.indexOf("%")),
                (e.oyp = -1 !== r.indexOf("%")),
                (e.oxr = "=" === s.charAt(1)),
                (e.oyr = "=" === r.charAt(1)),
                (e.ox = parseFloat(s.replace(y, ""))),
                (e.oy = parseFloat(r.replace(y, "")))),
              s + " " + r + (i.length > 2 ? " " + i[2] : "")
            );
          },
          re = function (t, e) {
            return "string" == typeof t && "=" === t.charAt(1)
              ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2))
              : parseFloat(t) - parseFloat(e);
          },
          ne = function (t, e) {
            return null == t
              ? e
              : "string" == typeof t && "=" === t.charAt(1)
              ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e
              : parseFloat(t);
          },
          ae = function (t, e, i, s) {
            var r,
              n,
              a,
              o,
              h,
              l = 1e-6;
            return (
              null == t
                ? (o = e)
                : "number" == typeof t
                ? (o = t)
                : ((r = 360),
                  (n = t.split("_")),
                  (h = "=" === t.charAt(1)),
                  (a =
                    (h
                      ? parseInt(t.charAt(0) + "1", 10) *
                        parseFloat(n[0].substr(2))
                      : parseFloat(n[0])) *
                      (-1 === t.indexOf("rad") ? 1 : I) -
                    (h ? 0 : e)),
                  n.length &&
                    (s && (s[i] = e + a),
                    -1 !== t.indexOf("short") &&
                      ((a %= r),
                      a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)),
                    -1 !== t.indexOf("_cw") && 0 > a
                      ? (a = ((a + 9999999999 * r) % r) - (0 | (a / r)) * r)
                      : -1 !== t.indexOf("ccw") &&
                        a > 0 &&
                        (a = ((a - 9999999999 * r) % r) - (0 | (a / r)) * r)),
                  (o = e + a)),
              l > o && o > -l && (o = 0),
              o
            );
          },
          oe = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0],
          },
          he = function (t, e, i) {
            return (
              (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t),
              0 |
                (255 *
                  (1 > 6 * t
                    ? e + 6 * (i - e) * t
                    : 0.5 > t
                    ? i
                    : 2 > 3 * t
                    ? e + 6 * (i - e) * (2 / 3 - t)
                    : e) +
                  0.5)
            );
          },
          le = (a.parseColor = function (t) {
            var e, i, s, r, n, a;
            return t && "" !== t
              ? "number" == typeof t
                ? [t >> 16, 255 & (t >> 8), 255 & t]
                : ("," === t.charAt(t.length - 1) &&
                    (t = t.substr(0, t.length - 1)),
                  oe[t]
                    ? oe[t]
                    : "#" === t.charAt(0)
                    ? (4 === t.length &&
                        ((e = t.charAt(1)),
                        (i = t.charAt(2)),
                        (s = t.charAt(3)),
                        (t = "#" + e + e + i + i + s + s)),
                      (t = parseInt(t.substr(1), 16)),
                      [t >> 16, 255 & (t >> 8), 255 & t])
                    : "hsl" === t.substr(0, 3)
                    ? ((t = t.match(d)),
                      (r = (Number(t[0]) % 360) / 360),
                      (n = Number(t[1]) / 100),
                      (a = Number(t[2]) / 100),
                      (i = 0.5 >= a ? a * (n + 1) : a + n - a * n),
                      (e = 2 * a - i),
                      t.length > 3 && (t[3] = Number(t[3])),
                      (t[0] = he(r + 1 / 3, e, i)),
                      (t[1] = he(r, e, i)),
                      (t[2] = he(r - 1 / 3, e, i)),
                      t)
                    : ((t = t.match(d) || oe.transparent),
                      (t[0] = Number(t[0])),
                      (t[1] = Number(t[1])),
                      (t[2] = Number(t[2])),
                      t.length > 3 && (t[3] = Number(t[3])),
                      t))
              : oe.black;
          }),
          _e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (l in oe) _e += "|" + l + "\\b";
        _e = RegExp(_e + ")", "gi");
        var ue = function (t, e, i, s) {
            if (null == t)
              return function (t) {
                return t;
              };
            var r,
              n = e ? (t.match(_e) || [""])[0] : "",
              a = t.split(n).join("").match(v) || [],
              o = t.substr(0, t.indexOf(a[0])),
              h = ")" === t.charAt(t.length - 1) ? ")" : "",
              l = -1 !== t.indexOf(" ") ? " " : ",",
              _ = a.length,
              u = _ > 0 ? a[0].replace(d, "") : "";
            return _
              ? (r = e
                  ? function (t) {
                      var e, p, c, f;
                      if ("number" == typeof t) t += u;
                      else if (s && M.test(t)) {
                        for (
                          f = t.replace(M, "|").split("|"), c = 0;
                          f.length > c;
                          c++
                        )
                          f[c] = r(f[c]);
                        return f.join(",");
                      }
                      if (
                        ((e = (t.match(_e) || [n])[0]),
                        (p = t.split(e).join("").match(v) || []),
                        (c = p.length),
                        _ > c--)
                      )
                        for (; _ > ++c; )
                          p[c] = i ? p[0 | ((c - 1) / 2)] : a[c];
                      return (
                        o +
                        p.join(l) +
                        l +
                        e +
                        h +
                        (-1 !== t.indexOf("inset") ? " inset" : "")
                      );
                    }
                  : function (t) {
                      var e, n, p;
                      if ("number" == typeof t) t += u;
                      else if (s && M.test(t)) {
                        for (
                          n = t.replace(M, "|").split("|"), p = 0;
                          n.length > p;
                          p++
                        )
                          n[p] = r(n[p]);
                        return n.join(",");
                      }
                      if (((e = t.match(v) || []), (p = e.length), _ > p--))
                        for (; _ > ++p; )
                          e[p] = i ? e[0 | ((p - 1) / 2)] : a[p];
                      return o + e.join(l) + h;
                    })
              : function (t) {
                  return t;
                };
          },
          pe = function (t) {
            return (
              (t = t.split(",")),
              function (e, i, s, r, n, a, o) {
                var h,
                  l = (i + "").split(" ");
                for (o = {}, h = 0; 4 > h; h++)
                  o[t[h]] = l[h] = l[h] || l[((h - 1) / 2) >> 0];
                return r.parse(e, o, n, a);
              }
            );
          },
          ce =
            ((U._setPluginRatio = function (t) {
              this.plugin.setRatio(t);
              for (
                var e,
                  i,
                  s,
                  r,
                  n = this.data,
                  a = n.proxy,
                  o = n.firstMPT,
                  h = 1e-6;
                o;

              )
                (e = a[o.v]),
                  o.r ? (e = Math.round(e)) : h > e && e > -h && (e = 0),
                  (o.t[o.p] = e),
                  (o = o._next);
              if (
                (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
              )
                for (o = n.firstMPT; o; ) {
                  if (((i = o.t), i.type)) {
                    if (1 === i.type) {
                      for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++)
                        r += i["xn" + s] + i["xs" + (s + 1)];
                      i.e = r;
                    }
                  } else i.e = i.s + i.xs0;
                  o = o._next;
                }
            }),
            function (t, e, i, s, r) {
              (this.t = t),
                (this.p = e),
                (this.v = i),
                (this.r = r),
                s && ((s._prev = this), (this._next = s));
            }),
          fe =
            ((U._parseToProxy = function (t, e, i, s, r, n) {
              var a,
                o,
                h,
                l,
                _,
                u = s,
                p = {},
                c = {},
                f = i._transform,
                m = F;
              for (
                i._transform = null,
                  F = e,
                  s = _ = i.parse(t, e, s, r),
                  F = m,
                  n &&
                    ((i._transform = f),
                    u && ((u._prev = null), u._prev && (u._prev._next = null)));
                s && s !== u;

              ) {
                if (
                  1 >= s.type &&
                  ((o = s.p),
                  (c[o] = s.s + s.c),
                  (p[o] = s.s),
                  n || ((l = new ce(s, "s", o, l, s.r)), (s.c = 0)),
                  1 === s.type)
                )
                  for (a = s.l; --a > 0; )
                    (h = "xn" + a),
                      (o = s.p + "_" + h),
                      (c[o] = s.data[h]),
                      (p[o] = s[h]),
                      n || (l = new ce(s, h, o, l, s.rxp[h]));
                s = s._next;
              }
              return { proxy: p, end: c, firstMPT: l, pt: _ };
            }),
            (U.CSSPropTween = function (t, e, s, r, a, o, h, l, _, u, p) {
              (this.t = t),
                (this.p = e),
                (this.s = s),
                (this.c = r),
                (this.n = h || e),
                t instanceof fe || n.push(this.n),
                (this.r = l),
                (this.type = o || 0),
                _ && ((this.pr = _), (i = !0)),
                (this.b = void 0 === u ? s : u),
                (this.e = void 0 === p ? s + r : p),
                a && ((this._next = a), (a._prev = this));
            })),
          me = (a.parseComplex = function (t, e, i, s, r, n, a, o, h, l) {
            (i = i || n || ""),
              (a = new fe(t, e, 0, 0, a, l ? 2 : 1, null, !1, o, i, s)),
              (s += "");
            var u,
              p,
              c,
              f,
              m,
              v,
              y,
              T,
              w,
              x,
              b,
              S,
              k = i.split(", ").join(",").split(" "),
              R = s.split(", ").join(",").split(" "),
              A = k.length,
              C = _ !== !1;
            for (
              (-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) &&
                ((k = k.join(" ").replace(M, ", ").split(" ")),
                (R = R.join(" ").replace(M, ", ").split(" ")),
                (A = k.length)),
                A !== R.length && ((k = (n || "").split(" ")), (A = k.length)),
                a.plugin = h,
                a.setRatio = l,
                u = 0;
              A > u;
              u++
            )
              if (((f = k[u]), (m = R[u]), (T = parseFloat(f)), T || 0 === T))
                a.appendXtra(
                  "",
                  T,
                  re(m, T),
                  m.replace(g, ""),
                  C && -1 !== m.indexOf("px"),
                  !0
                );
              else if (r && ("#" === f.charAt(0) || oe[f] || P.test(f)))
                (S = "," === m.charAt(m.length - 1) ? ")," : ")"),
                  (f = le(f)),
                  (m = le(m)),
                  (w = f.length + m.length > 6),
                  w && !B && 0 === m[3]
                    ? ((a["xs" + a.l] += a.l ? " transparent" : "transparent"),
                      (a.e = a.e.split(R[u]).join("transparent")))
                    : (B || (w = !1),
                      a
                        .appendXtra(
                          w ? "rgba(" : "rgb(",
                          f[0],
                          m[0] - f[0],
                          ",",
                          !0,
                          !0
                        )
                        .appendXtra("", f[1], m[1] - f[1], ",", !0)
                        .appendXtra("", f[2], m[2] - f[2], w ? "," : S, !0),
                      w &&
                        ((f = 4 > f.length ? 1 : f[3]),
                        a.appendXtra(
                          "",
                          f,
                          (4 > m.length ? 1 : m[3]) - f,
                          S,
                          !1
                        )));
              else if ((v = f.match(d))) {
                if (((y = m.match(g)), !y || y.length !== v.length)) return a;
                for (c = 0, p = 0; v.length > p; p++)
                  (b = v[p]),
                    (x = f.indexOf(b, c)),
                    a.appendXtra(
                      f.substr(c, x - c),
                      Number(b),
                      re(y[p], b),
                      "",
                      C && "px" === f.substr(x + b.length, 2),
                      0 === p
                    ),
                    (c = x + b.length);
                a["xs" + a.l] += f.substr(c);
              } else a["xs" + a.l] += a.l ? " " + f : f;
            if (-1 !== s.indexOf("=") && a.data) {
              for (S = a.xs0 + a.data.s, u = 1; a.l > u; u++)
                S += a["xs" + u] + a.data["xn" + u];
              a.e = S + a["xs" + u];
            }
            return a.l || ((a.type = -1), (a.xs0 = a.e)), a.xfirst || a;
          }),
          de = 9;
        for (l = fe.prototype, l.l = l.pr = 0; --de > 0; )
          (l["xn" + de] = 0), (l["xs" + de] = "");
        (l.xs0 = ""),
          (l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null),
          (l.appendXtra = function (t, e, i, s, r, n) {
            var a = this,
              o = a.l;
            return (
              (a["xs" + o] += n && o ? " " + t : t || ""),
              i || 0 === o || a.plugin
                ? (a.l++,
                  (a.type = a.setRatio ? 2 : 1),
                  (a["xs" + a.l] = s || ""),
                  o > 0
                    ? ((a.data["xn" + o] = e + i),
                      (a.rxp["xn" + o] = r),
                      (a["xn" + o] = e),
                      a.plugin ||
                        ((a.xfirst = new fe(
                          a,
                          "xn" + o,
                          e,
                          i,
                          a.xfirst || a,
                          0,
                          a.n,
                          r,
                          a.pr
                        )),
                        (a.xfirst.xs0 = 0)),
                      a)
                    : ((a.data = { s: e + i }),
                      (a.rxp = {}),
                      (a.s = e),
                      (a.c = i),
                      (a.r = r),
                      a))
                : ((a["xs" + o] += e + (s || "")), a)
            );
          });
        var ge = function (t, e) {
            (e = e || {}),
              (this.p = e.prefix ? W(t) || t : t),
              (h[t] = h[this.p] = this),
              (this.format =
                e.formatter ||
                ue(e.defaultValue, e.color, e.collapsible, e.multi)),
              e.parser && (this.parse = e.parser),
              (this.clrs = e.color),
              (this.multi = e.multi),
              (this.keyword = e.keyword),
              (this.dflt = e.defaultValue),
              (this.pr = e.priority || 0);
          },
          ve = (U._registerComplexSpecialProp = function (t, e, i) {
            "object" != typeof e && (e = { parser: i });
            var s,
              r,
              n = t.split(","),
              a = e.defaultValue;
            for (i = i || [a], s = 0; n.length > s; s++)
              (e.prefix = 0 === s && e.prefix),
                (e.defaultValue = i[s] || a),
                (r = new ge(n[s], e));
          }),
          ye = function (t) {
            if (!h[t]) {
              var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
              ve(t, {
                parser: function (t, i, s, r, n, a, l) {
                  var _ = o.com.greensock.plugins[e];
                  return _
                    ? (_._cssRegister(), h[s].parse(t, i, s, r, n, a, l))
                    : (q("Error: " + e + " js file not loaded."), n);
                },
              });
            }
          };
        (l = ge.prototype),
          (l.parseComplex = function (t, e, i, s, r, n) {
            var a,
              o,
              h,
              l,
              _,
              u,
              p = this.keyword;
            if (
              (this.multi &&
                (M.test(i) || M.test(e)
                  ? ((o = e.replace(M, "|").split("|")),
                    (h = i.replace(M, "|").split("|")))
                  : p && ((o = [e]), (h = [i]))),
              h)
            ) {
              for (
                l = h.length > o.length ? h.length : o.length, a = 0;
                l > a;
                a++
              )
                (e = o[a] = o[a] || this.dflt),
                  (i = h[a] = h[a] || this.dflt),
                  p &&
                    ((_ = e.indexOf(p)),
                    (u = i.indexOf(p)),
                    _ !== u && ((i = -1 === u ? h : o), (i[a] += " " + p)));
              (e = o.join(", ")), (i = h.join(", "));
            }
            return me(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n);
          }),
          (l.parse = function (t, e, i, s, n, a) {
            return this.parseComplex(
              t.style,
              this.format(Q(t, this.p, r, !1, this.dflt)),
              this.format(e),
              n,
              a
            );
          }),
          (a.registerSpecialProp = function (t, e, i) {
            ve(t, {
              parser: function (t, s, r, n, a, o) {
                var h = new fe(t, r, 0, 0, a, 2, r, !1, i);
                return (h.plugin = o), (h.setRatio = e(t, s, n._tween, r)), h;
              },
              priority: i,
            });
          });
        var Te,
          we = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
            ","
          ),
          xe = W("transform"),
          be = V + "transform",
          Pe = W("transformOrigin"),
          Se = null !== W("perspective"),
          ke = (U.Transform = function () {
            (this.perspective = parseFloat(a.defaultTransformPerspective) || 0),
              (this.force3D =
                a.defaultForce3D !== !1 && Se
                  ? a.defaultForce3D || "auto"
                  : !1);
          }),
          Re = window.SVGElement,
          Ae = function (t, e, i) {
            var s,
              r = E.createElementNS("http://www.w3.org/2000/svg", t),
              n = /([a-z])([A-Z])/g;
            for (s in i)
              r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
            return e.appendChild(r), r;
          },
          Ce = document.documentElement,
          Oe = (function () {
            var t,
              e,
              i,
              s = m || (/Android/i.test(Y) && !window.chrome);
            return (
              E.createElementNS &&
                !s &&
                ((t = Ae("svg", Ce)),
                (e = Ae("rect", t, { width: 100, height: 50, x: 100 })),
                (i = e.getBoundingClientRect().width),
                (e.style[Pe] = "50% 50%"),
                (e.style[xe] = "scaleX(0.5)"),
                (s = i === e.getBoundingClientRect().width && !(c && Se)),
                Ce.removeChild(t)),
              s
            );
          })(),
          De = function (t, e, i) {
            var s = t.getBBox();
            (e = se(e).split(" ")),
              (i.xOrigin =
                (-1 !== e[0].indexOf("%")
                  ? (parseFloat(e[0]) / 100) * s.width
                  : parseFloat(e[0])) + s.x),
              (i.yOrigin =
                (-1 !== e[1].indexOf("%")
                  ? (parseFloat(e[1]) / 100) * s.height
                  : parseFloat(e[1])) + s.y);
          },
          Me = (U.getTransform = function (t, e, i, s) {
            if (t._gsTransform && i && !s) return t._gsTransform;
            var n,
              o,
              h,
              l,
              _,
              u,
              p,
              c,
              f,
              m,
              d = i ? t._gsTransform || new ke() : new ke(),
              g = 0 > d.scaleX,
              v = 2e-5,
              y = 1e5,
              T = Se
                ? parseFloat(Q(t, Pe, e, !1, "0 0 0").split(" ")[2]) ||
                  d.zOrigin ||
                  0
                : 0,
              w = parseFloat(a.defaultTransformPerspective) || 0;
            if (
              (xe
                ? (o = Q(t, be, e, !0))
                : t.currentStyle &&
                  ((o = t.currentStyle.filter.match(O)),
                  (o =
                    o && 4 === o.length
                      ? [
                          o[0].substr(4),
                          Number(o[2].substr(4)),
                          Number(o[1].substr(4)),
                          o[3].substr(4),
                          d.x || 0,
                          d.y || 0,
                        ].join(",")
                      : "")),
              (n = !o || "none" === o || "matrix(1, 0, 0, 1, 0, 0)" === o),
              (d.svg = !!(
                Re &&
                "function" == typeof t.getBBox &&
                t.getCTM &&
                (!t.parentNode || (t.parentNode.getBBox && t.parentNode.getCTM))
              )),
              d.svg &&
                (De(t, Q(t, Pe, r, !1, "50% 50%") + "", d),
                (Te = a.useSVGTransformAttr || Oe),
                (h = t.getAttribute("transform")),
                n && h && -1 !== h.indexOf("matrix") && ((o = h), (n = 0))),
              !n)
            ) {
              for (
                h = (o || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [],
                  l = h.length;
                --l > -1;

              )
                (_ = Number(h[l])),
                  (h[l] = (u = _ - (_ |= 0))
                    ? (0 | (u * y + (0 > u ? -0.5 : 0.5))) / y + _
                    : _);
              if (16 === h.length) {
                var x,
                  b,
                  P,
                  S,
                  k,
                  R = h[0],
                  A = h[1],
                  C = h[2],
                  D = h[3],
                  M = h[4],
                  z = h[5],
                  F = h[6],
                  E = h[7],
                  N = h[8],
                  L = h[9],
                  X = h[10],
                  U = h[12],
                  Y = h[13],
                  B = h[14],
                  j = h[11],
                  q = Math.atan2(F, X);
                d.zOrigin &&
                  ((B = -d.zOrigin),
                  (U = N * B - h[12]),
                  (Y = L * B - h[13]),
                  (B = X * B + d.zOrigin - h[14])),
                  (d.rotationX = q * I),
                  q &&
                    ((S = Math.cos(-q)),
                    (k = Math.sin(-q)),
                    (x = M * S + N * k),
                    (b = z * S + L * k),
                    (P = F * S + X * k),
                    (N = M * -k + N * S),
                    (L = z * -k + L * S),
                    (X = F * -k + X * S),
                    (j = E * -k + j * S),
                    (M = x),
                    (z = b),
                    (F = P)),
                  (q = Math.atan2(N, X)),
                  (d.rotationY = q * I),
                  q &&
                    ((S = Math.cos(-q)),
                    (k = Math.sin(-q)),
                    (x = R * S - N * k),
                    (b = A * S - L * k),
                    (P = C * S - X * k),
                    (L = A * k + L * S),
                    (X = C * k + X * S),
                    (j = D * k + j * S),
                    (R = x),
                    (A = b),
                    (C = P)),
                  (q = Math.atan2(A, R)),
                  (d.rotation = q * I),
                  q &&
                    ((S = Math.cos(-q)),
                    (k = Math.sin(-q)),
                    (R = R * S + M * k),
                    (b = A * S + z * k),
                    (z = A * -k + z * S),
                    (F = C * -k + F * S),
                    (A = b)),
                  d.rotationX &&
                    Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 &&
                    ((d.rotationX = d.rotation = 0), (d.rotationY += 180)),
                  (d.scaleX = (0 | (Math.sqrt(R * R + A * A) * y + 0.5)) / y),
                  (d.scaleY = (0 | (Math.sqrt(z * z + L * L) * y + 0.5)) / y),
                  (d.scaleZ = (0 | (Math.sqrt(F * F + X * X) * y + 0.5)) / y),
                  (d.skewX = 0),
                  (d.perspective = j ? 1 / (0 > j ? -j : j) : 0),
                  (d.x = U),
                  (d.y = Y),
                  (d.z = B);
              } else if (
                !(
                  (Se &&
                    !s &&
                    h.length &&
                    d.x === h[4] &&
                    d.y === h[5] &&
                    (d.rotationX || d.rotationY)) ||
                  (void 0 !== d.x && "none" === Q(t, "display", e))
                )
              ) {
                var V = h.length >= 6,
                  G = V ? h[0] : 1,
                  W = h[1] || 0,
                  Z = h[2] || 0,
                  $ = V ? h[3] : 1;
                (d.x = h[4] || 0),
                  (d.y = h[5] || 0),
                  (p = Math.sqrt(G * G + W * W)),
                  (c = Math.sqrt($ * $ + Z * Z)),
                  (f = G || W ? Math.atan2(W, G) * I : d.rotation || 0),
                  (m = Z || $ ? Math.atan2(Z, $) * I + f : d.skewX || 0),
                  Math.abs(m) > 90 &&
                    270 > Math.abs(m) &&
                    (g
                      ? ((p *= -1),
                        (m += 0 >= f ? 180 : -180),
                        (f += 0 >= f ? 180 : -180))
                      : ((c *= -1), (m += 0 >= m ? 180 : -180))),
                  (d.scaleX = p),
                  (d.scaleY = c),
                  (d.rotation = f),
                  (d.skewX = m),
                  Se &&
                    ((d.rotationX = d.rotationY = d.z = 0),
                    (d.perspective = w),
                    (d.scaleZ = 1));
              }
              d.zOrigin = T;
              for (l in d) v > d[l] && d[l] > -v && (d[l] = 0);
            }
            return i && (t._gsTransform = d), d;
          }),
          ze = function (t) {
            var e,
              i,
              s = this.data,
              r = -s.rotation * z,
              n = r + s.skewX * z,
              a = 1e5,
              o = (0 | (Math.cos(r) * s.scaleX * a)) / a,
              h = (0 | (Math.sin(r) * s.scaleX * a)) / a,
              l = (0 | (Math.sin(n) * -s.scaleY * a)) / a,
              _ = (0 | (Math.cos(n) * s.scaleY * a)) / a,
              u = this.t.style,
              p = this.t.currentStyle;
            if (p) {
              (i = h), (h = -l), (l = -i), (e = p.filter), (u.filter = "");
              var c,
                f,
                d = this.t.offsetWidth,
                g = this.t.offsetHeight,
                v = "absolute" !== p.position,
                y =
                  "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                  o +
                  ", M12=" +
                  h +
                  ", M21=" +
                  l +
                  ", M22=" +
                  _,
                x = s.x + (d * s.xPercent) / 100,
                b = s.y + (g * s.yPercent) / 100;
              if (
                (null != s.ox &&
                  ((c = (s.oxp ? 0.01 * d * s.ox : s.ox) - d / 2),
                  (f = (s.oyp ? 0.01 * g * s.oy : s.oy) - g / 2),
                  (x += c - (c * o + f * h)),
                  (b += f - (c * l + f * _))),
                v
                  ? ((c = d / 2),
                    (f = g / 2),
                    (y +=
                      ", Dx=" +
                      (c - (c * o + f * h) + x) +
                      ", Dy=" +
                      (f - (c * l + f * _) + b) +
                      ")"))
                  : (y += ", sizingMethod='auto expand')"),
                (u.filter =
                  -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(")
                    ? e.replace(D, y)
                    : y + " " + e),
                (0 === t || 1 === t) &&
                  1 === o &&
                  0 === h &&
                  0 === l &&
                  1 === _ &&
                  ((v && -1 === y.indexOf("Dx=0, Dy=0")) ||
                    (w.test(e) && 100 !== parseFloat(RegExp.$1)) ||
                    (-1 === e.indexOf("gradient(" && e.indexOf("Alpha")) &&
                      u.removeAttribute("filter"))),
                !v)
              ) {
                var P,
                  S,
                  k,
                  R = 8 > m ? 1 : -1;
                for (
                  c = s.ieOffsetX || 0,
                    f = s.ieOffsetY || 0,
                    s.ieOffsetX = Math.round(
                      (d - ((0 > o ? -o : o) * d + (0 > h ? -h : h) * g)) / 2 +
                        x
                    ),
                    s.ieOffsetY = Math.round(
                      (g - ((0 > _ ? -_ : _) * g + (0 > l ? -l : l) * d)) / 2 +
                        b
                    ),
                    de = 0;
                  4 > de;
                  de++
                )
                  (S = ee[de]),
                    (P = p[S]),
                    (i =
                      -1 !== P.indexOf("px")
                        ? parseFloat(P)
                        : $(this.t, S, parseFloat(P), P.replace(T, "")) || 0),
                    (k =
                      i !== s[S]
                        ? 2 > de
                          ? -s.ieOffsetX
                          : -s.ieOffsetY
                        : 2 > de
                        ? c - s.ieOffsetX
                        : f - s.ieOffsetY),
                    (u[S] =
                      (s[S] = Math.round(
                        i - k * (0 === de || 2 === de ? 1 : R)
                      )) + "px");
              }
            }
          },
          Ie = (U.set3DTransformRatio = function (t) {
            var e,
              i,
              s,
              r,
              n,
              a,
              o,
              h,
              l,
              _,
              u,
              p,
              f,
              m,
              d,
              g,
              v,
              y,
              T,
              w,
              x,
              b = this.data,
              P = this.t.style,
              S = b.rotation * z,
              k = b.scaleX,
              R = b.scaleY,
              A = b.scaleZ,
              C = b.x,
              O = b.y,
              D = b.z,
              M = b.perspective;
            if (
              !(
                (1 !== t && 0 !== t && b.force3D) ||
                b.force3D === !0 ||
                b.rotationY ||
                b.rotationX ||
                1 !== A ||
                M ||
                D
              )
            )
              return Fe.call(this, t), void 0;
            if (
              (c &&
                ((m = 1e-4),
                m > k && k > -m && (k = A = 2e-5),
                m > R && R > -m && (R = A = 2e-5),
                !M || b.z || b.rotationX || b.rotationY || (M = 0)),
              S || b.skewX)
            )
              (d = e = Math.cos(S)),
                (g = r = Math.sin(S)),
                b.skewX &&
                  ((S -= b.skewX * z),
                  (d = Math.cos(S)),
                  (g = Math.sin(S)),
                  "simple" === b.skewType &&
                    ((v = Math.tan(b.skewX * z)),
                    (v = Math.sqrt(1 + v * v)),
                    (d *= v),
                    (g *= v))),
                (i = -g),
                (n = d);
            else {
              if (!(b.rotationY || b.rotationX || 1 !== A || M || b.svg))
                return (
                  (P[xe] =
                    (b.xPercent || b.yPercent
                      ? "translate(" +
                        b.xPercent +
                        "%," +
                        b.yPercent +
                        "%) translate3d("
                      : "translate3d(") +
                    C +
                    "px," +
                    O +
                    "px," +
                    D +
                    "px)" +
                    (1 !== k || 1 !== R ? " scale(" + k + "," + R + ")" : "")),
                  void 0
                );
              (e = n = 1), (i = r = 0);
            }
            (l = 1),
              (s = a = o = h = _ = u = 0),
              (p = M ? -1 / M : 0),
              (f = b.zOrigin),
              (m = 1e-6),
              (w = ","),
              (x = "0"),
              (S = b.rotationY * z),
              S &&
                ((d = Math.cos(S)),
                (g = Math.sin(S)),
                (o = -g),
                (_ = p * -g),
                (s = e * g),
                (a = r * g),
                (l = d),
                (p *= d),
                (e *= d),
                (r *= d)),
              (S = b.rotationX * z),
              S &&
                ((d = Math.cos(S)),
                (g = Math.sin(S)),
                (v = i * d + s * g),
                (y = n * d + a * g),
                (h = l * g),
                (u = p * g),
                (s = i * -g + s * d),
                (a = n * -g + a * d),
                (l *= d),
                (p *= d),
                (i = v),
                (n = y)),
              1 !== A && ((s *= A), (a *= A), (l *= A), (p *= A)),
              1 !== R && ((i *= R), (n *= R), (h *= R), (u *= R)),
              1 !== k && ((e *= k), (r *= k), (o *= k), (_ *= k)),
              (f || b.svg) &&
                (f && ((C += s * -f), (O += a * -f), (D += l * -f + f)),
                b.svg &&
                  ((C += b.xOrigin - (b.xOrigin * e + b.yOrigin * i)),
                  (O += b.yOrigin - (b.xOrigin * r + b.yOrigin * n))),
                m > C && C > -m && (C = x),
                m > O && O > -m && (O = x),
                m > D && D > -m && (D = 0)),
              (T =
                b.xPercent || b.yPercent
                  ? "translate(" +
                    b.xPercent +
                    "%," +
                    b.yPercent +
                    "%) matrix3d("
                  : "matrix3d("),
              (T +=
                (m > e && e > -m ? x : e) +
                w +
                (m > r && r > -m ? x : r) +
                w +
                (m > o && o > -m ? x : o)),
              (T +=
                w +
                (m > _ && _ > -m ? x : _) +
                w +
                (m > i && i > -m ? x : i) +
                w +
                (m > n && n > -m ? x : n)),
              b.rotationX || b.rotationY
                ? ((T +=
                    w +
                    (m > h && h > -m ? x : h) +
                    w +
                    (m > u && u > -m ? x : u) +
                    w +
                    (m > s && s > -m ? x : s)),
                  (T +=
                    w +
                    (m > a && a > -m ? x : a) +
                    w +
                    (m > l && l > -m ? x : l) +
                    w +
                    (m > p && p > -m ? x : p) +
                    w))
                : (T += ",0,0,0,0,1,0,"),
              (T += C + w + O + w + D + w + (M ? 1 + -D / M : 1) + ")"),
              (P[xe] = T);
          }),
          Fe = (U.set2DTransformRatio = function (t) {
            var e,
              i,
              s,
              r,
              n,
              a,
              o,
              h,
              l,
              _,
              u,
              p = this.data,
              c = this.t,
              f = c.style,
              m = p.x,
              d = p.y;
            return !(
              p.rotationX ||
              p.rotationY ||
              p.z ||
              p.force3D === !0 ||
              ("auto" === p.force3D && 1 !== t && 0 !== t)
            ) ||
              (p.svg && Te) ||
              !Se
              ? ((r = p.scaleX),
                (n = p.scaleY),
                p.rotation || p.skewX || p.svg
                  ? ((e = p.rotation * z),
                    (i = e - p.skewX * z),
                    (s = 1e5),
                    (a = Math.cos(e) * r),
                    (o = Math.sin(e) * r),
                    (h = Math.sin(i) * -n),
                    (l = Math.cos(i) * n),
                    p.svg &&
                      ((m += p.xOrigin - (p.xOrigin * a + p.yOrigin * h)),
                      (d += p.yOrigin - (p.xOrigin * o + p.yOrigin * l)),
                      (u = 1e-6),
                      u > m && m > -u && (m = 0),
                      u > d && d > -u && (d = 0)),
                    (_ =
                      (0 | (a * s)) / s +
                      "," +
                      (0 | (o * s)) / s +
                      "," +
                      (0 | (h * s)) / s +
                      "," +
                      (0 | (l * s)) / s +
                      "," +
                      m +
                      "," +
                      d +
                      ")"),
                    p.svg && Te
                      ? c.setAttribute("transform", "matrix(" + _)
                      : (f[xe] =
                          (p.xPercent || p.yPercent
                            ? "translate(" +
                              p.xPercent +
                              "%," +
                              p.yPercent +
                              "%) matrix("
                            : "matrix(") + _))
                  : (f[xe] =
                      (p.xPercent || p.yPercent
                        ? "translate(" +
                          p.xPercent +
                          "%," +
                          p.yPercent +
                          "%) matrix("
                        : "matrix(") +
                      r +
                      ",0,0," +
                      n +
                      "," +
                      m +
                      "," +
                      d +
                      ")"),
                void 0)
              : ((this.setRatio = Ie), Ie.call(this, t), void 0);
          });
        (l = ke.prototype),
          (l.x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = 0),
          (l.scaleX = l.scaleY = l.scaleZ = 1),
          ve(
            "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",
            {
              parser: function (t, e, i, s, n, o, h) {
                if (s._lastParsedTransform === h) return n;
                s._lastParsedTransform = h;
                var l,
                  _,
                  u,
                  p,
                  c,
                  f,
                  m,
                  d = (s._transform = Me(t, r, !0, h.parseTransform)),
                  g = t.style,
                  v = 1e-6,
                  y = we.length,
                  T = h,
                  w = {};
                if ("string" == typeof T.transform && xe)
                  (u = L.style),
                    (u[xe] = T.transform),
                    (u.display = "block"),
                    (u.position = "absolute"),
                    E.body.appendChild(L),
                    (l = Me(L, null, !1)),
                    E.body.removeChild(L);
                else if ("object" == typeof T) {
                  if (
                    ((l = {
                      scaleX: ne(
                        null != T.scaleX ? T.scaleX : T.scale,
                        d.scaleX
                      ),
                      scaleY: ne(
                        null != T.scaleY ? T.scaleY : T.scale,
                        d.scaleY
                      ),
                      scaleZ: ne(T.scaleZ, d.scaleZ),
                      x: ne(T.x, d.x),
                      y: ne(T.y, d.y),
                      z: ne(T.z, d.z),
                      xPercent: ne(T.xPercent, d.xPercent),
                      yPercent: ne(T.yPercent, d.yPercent),
                      perspective: ne(T.transformPerspective, d.perspective),
                    }),
                    (m = T.directionalRotation),
                    null != m)
                  )
                    if ("object" == typeof m) for (u in m) T[u] = m[u];
                    else T.rotation = m;
                  "string" == typeof T.x &&
                    -1 !== T.x.indexOf("%") &&
                    ((l.x = 0), (l.xPercent = ne(T.x, d.xPercent))),
                    "string" == typeof T.y &&
                      -1 !== T.y.indexOf("%") &&
                      ((l.y = 0), (l.yPercent = ne(T.y, d.yPercent))),
                    (l.rotation = ae(
                      "rotation" in T
                        ? T.rotation
                        : "shortRotation" in T
                        ? T.shortRotation + "_short"
                        : "rotationZ" in T
                        ? T.rotationZ
                        : d.rotation,
                      d.rotation,
                      "rotation",
                      w
                    )),
                    Se &&
                      ((l.rotationX = ae(
                        "rotationX" in T
                          ? T.rotationX
                          : "shortRotationX" in T
                          ? T.shortRotationX + "_short"
                          : d.rotationX || 0,
                        d.rotationX,
                        "rotationX",
                        w
                      )),
                      (l.rotationY = ae(
                        "rotationY" in T
                          ? T.rotationY
                          : "shortRotationY" in T
                          ? T.shortRotationY + "_short"
                          : d.rotationY || 0,
                        d.rotationY,
                        "rotationY",
                        w
                      ))),
                    (l.skewX =
                      null == T.skewX ? d.skewX : ae(T.skewX, d.skewX)),
                    (l.skewY =
                      null == T.skewY ? d.skewY : ae(T.skewY, d.skewY)),
                    (_ = l.skewY - d.skewY) &&
                      ((l.skewX += _), (l.rotation += _));
                }
                for (
                  Se &&
                    null != T.force3D &&
                    ((d.force3D = T.force3D), (f = !0)),
                    d.skewType = T.skewType || d.skewType || a.defaultSkewType,
                    c =
                      d.force3D ||
                      d.z ||
                      d.rotationX ||
                      d.rotationY ||
                      l.z ||
                      l.rotationX ||
                      l.rotationY ||
                      l.perspective,
                    c || null == T.scale || (l.scaleZ = 1);
                  --y > -1;

                )
                  (i = we[y]),
                    (p = l[i] - d[i]),
                    (p > v || -v > p || null != T[i] || null != F[i]) &&
                      ((f = !0),
                      (n = new fe(d, i, d[i], p, n)),
                      i in w && (n.e = w[i]),
                      (n.xs0 = 0),
                      (n.plugin = o),
                      s._overwriteProps.push(n.n));
                return (
                  (p = T.transformOrigin),
                  p &&
                    d.svg &&
                    (De(t, se(p), l),
                    (n = new fe(
                      d,
                      "xOrigin",
                      d.xOrigin,
                      l.xOrigin - d.xOrigin,
                      n,
                      -1,
                      "transformOrigin"
                    )),
                    (n.b = d.xOrigin),
                    (n.e = n.xs0 = l.xOrigin),
                    (n = new fe(
                      d,
                      "yOrigin",
                      d.yOrigin,
                      l.yOrigin - d.yOrigin,
                      n,
                      -1,
                      "transformOrigin"
                    )),
                    (n.b = d.yOrigin),
                    (n.e = n.xs0 = l.yOrigin),
                    (p = "0px 0px")),
                  (p || (Se && c && d.zOrigin)) &&
                    (xe
                      ? ((f = !0),
                        (i = Pe),
                        (p = (p || Q(t, i, r, !1, "50% 50%")) + ""),
                        (n = new fe(g, i, 0, 0, n, -1, "transformOrigin")),
                        (n.b = g[i]),
                        (n.plugin = o),
                        Se
                          ? ((u = d.zOrigin),
                            (p = p.split(" ")),
                            (d.zOrigin =
                              (p.length > 2 && (0 === u || "0px" !== p[2])
                                ? parseFloat(p[2])
                                : u) || 0),
                            (n.xs0 = n.e =
                              p[0] + " " + (p[1] || "50%") + " 0px"),
                            (n = new fe(d, "zOrigin", 0, 0, n, -1, n.n)),
                            (n.b = u),
                            (n.xs0 = n.e = d.zOrigin))
                          : (n.xs0 = n.e = p))
                      : se(p + "", d)),
                  f &&
                    (s._transformType =
                      (d.svg && Te) || (!c && 3 !== this._transformType)
                        ? 2
                        : 3),
                  n
                );
              },
              prefix: !0,
            }
          ),
          ve("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset",
          }),
          ve("borderRadius", {
            defaultValue: "0px",
            parser: function (t, e, i, n, a) {
              e = this.format(e);
              var o,
                h,
                l,
                _,
                u,
                p,
                c,
                f,
                m,
                d,
                g,
                v,
                y,
                T,
                w,
                x,
                b = [
                  "borderTopLeftRadius",
                  "borderTopRightRadius",
                  "borderBottomRightRadius",
                  "borderBottomLeftRadius",
                ],
                P = t.style;
              for (
                m = parseFloat(t.offsetWidth),
                  d = parseFloat(t.offsetHeight),
                  o = e.split(" "),
                  h = 0;
                b.length > h;
                h++
              )
                this.p.indexOf("border") && (b[h] = W(b[h])),
                  (u = _ = Q(t, b[h], r, !1, "0px")),
                  -1 !== u.indexOf(" ") &&
                    ((_ = u.split(" ")), (u = _[0]), (_ = _[1])),
                  (p = l = o[h]),
                  (c = parseFloat(u)),
                  (v = u.substr((c + "").length)),
                  (y = "=" === p.charAt(1)),
                  y
                    ? ((f = parseInt(p.charAt(0) + "1", 10)),
                      (p = p.substr(2)),
                      (f *= parseFloat(p)),
                      (g = p.substr((f + "").length - (0 > f ? 1 : 0)) || ""))
                    : ((f = parseFloat(p)), (g = p.substr((f + "").length))),
                  "" === g && (g = s[i] || v),
                  g !== v &&
                    ((T = $(t, "borderLeft", c, v)),
                    (w = $(t, "borderTop", c, v)),
                    "%" === g
                      ? ((u = 100 * (T / m) + "%"), (_ = 100 * (w / d) + "%"))
                      : "em" === g
                      ? ((x = $(t, "borderLeft", 1, "em")),
                        (u = T / x + "em"),
                        (_ = w / x + "em"))
                      : ((u = T + "px"), (_ = w + "px")),
                    y &&
                      ((p = parseFloat(u) + f + g),
                      (l = parseFloat(_) + f + g))),
                  (a = me(P, b[h], u + " " + _, p + " " + l, !1, "0px", a));
              return a;
            },
            prefix: !0,
            formatter: ue("0px 0px 0px 0px", !1, !0),
          }),
          ve("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (t, e, i, s, n, a) {
              var o,
                h,
                l,
                _,
                u,
                p,
                c = "background-position",
                f = r || Z(t, null),
                d = this.format(
                  (f
                    ? m
                      ? f.getPropertyValue(c + "-x") +
                        " " +
                        f.getPropertyValue(c + "-y")
                      : f.getPropertyValue(c)
                    : t.currentStyle.backgroundPositionX +
                      " " +
                      t.currentStyle.backgroundPositionY) || "0 0"
                ),
                g = this.format(e);
              if (
                (-1 !== d.indexOf("%")) != (-1 !== g.indexOf("%")) &&
                ((p = Q(t, "backgroundImage").replace(R, "")),
                p && "none" !== p)
              ) {
                for (
                  o = d.split(" "),
                    h = g.split(" "),
                    X.setAttribute("src", p),
                    l = 2;
                  --l > -1;

                )
                  (d = o[l]),
                    (_ = -1 !== d.indexOf("%")),
                    _ !== (-1 !== h[l].indexOf("%")) &&
                      ((u =
                        0 === l
                          ? t.offsetWidth - X.width
                          : t.offsetHeight - X.height),
                      (o[l] = _
                        ? (parseFloat(d) / 100) * u + "px"
                        : 100 * (parseFloat(d) / u) + "%"));
                d = o.join(" ");
              }
              return this.parseComplex(t.style, d, g, n, a);
            },
            formatter: se,
          }),
          ve("backgroundSize", { defaultValue: "0 0", formatter: se }),
          ve("perspective", { defaultValue: "0px", prefix: !0 }),
          ve("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
          ve("transformStyle", { prefix: !0 }),
          ve("backfaceVisibility", { prefix: !0 }),
          ve("userSelect", { prefix: !0 }),
          ve("margin", {
            parser: pe("marginTop,marginRight,marginBottom,marginLeft"),
          }),
          ve("padding", {
            parser: pe("paddingTop,paddingRight,paddingBottom,paddingLeft"),
          }),
          ve("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (t, e, i, s, n, a) {
              var o, h, l;
              return (
                9 > m
                  ? ((h = t.currentStyle),
                    (l = 8 > m ? " " : ","),
                    (o =
                      "rect(" +
                      h.clipTop +
                      l +
                      h.clipRight +
                      l +
                      h.clipBottom +
                      l +
                      h.clipLeft +
                      ")"),
                    (e = this.format(e).split(",").join(l)))
                  : ((o = this.format(Q(t, this.p, r, !1, this.dflt))),
                    (e = this.format(e))),
                this.parseComplex(t.style, o, e, n, a)
              );
            },
          }),
          ve("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0,
          }),
          ve("autoRound,strictUnits", {
            parser: function (t, e, i, s, r) {
              return r;
            },
          }),
          ve("border", {
            defaultValue: "0px solid #000",
            parser: function (t, e, i, s, n, a) {
              return this.parseComplex(
                t.style,
                this.format(
                  Q(t, "borderTopWidth", r, !1, "0px") +
                    " " +
                    Q(t, "borderTopStyle", r, !1, "solid") +
                    " " +
                    Q(t, "borderTopColor", r, !1, "#000")
                ),
                this.format(e),
                n,
                a
              );
            },
            color: !0,
            formatter: function (t) {
              var e = t.split(" ");
              return (
                e[0] +
                " " +
                (e[1] || "solid") +
                " " +
                (t.match(_e) || ["#000"])[0]
              );
            },
          }),
          ve("borderWidth", {
            parser: pe(
              "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
            ),
          }),
          ve("float,cssFloat,styleFloat", {
            parser: function (t, e, i, s, r) {
              var n = t.style,
                a = "cssFloat" in n ? "cssFloat" : "styleFloat";
              return new fe(n, a, 0, 0, r, -1, i, !1, 0, n[a], e);
            },
          });
        var Ee = function (t) {
          var e,
            i = this.t,
            s = i.filter || Q(this.data, "filter") || "",
            r = 0 | (this.s + this.c * t);
          100 === r &&
            (-1 === s.indexOf("atrix(") &&
            -1 === s.indexOf("radient(") &&
            -1 === s.indexOf("oader(")
              ? (i.removeAttribute("filter"), (e = !Q(this.data, "filter")))
              : ((i.filter = s.replace(b, "")), (e = !0))),
            e ||
              (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"),
              -1 === s.indexOf("pacity")
                ? (0 === r && this.xn1) ||
                  (i.filter = s + " alpha(opacity=" + r + ")")
                : (i.filter = s.replace(w, "opacity=" + r)));
        };
        ve("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function (t, e, i, s, n, a) {
            var o = parseFloat(Q(t, "opacity", r, !1, "1")),
              h = t.style,
              l = "autoAlpha" === i;
            return (
              "string" == typeof e &&
                "=" === e.charAt(1) &&
                (e =
                  ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
              l &&
                1 === o &&
                "hidden" === Q(t, "visibility", r) &&
                0 !== e &&
                (o = 0),
              B
                ? (n = new fe(h, "opacity", o, e - o, n))
                : ((n = new fe(h, "opacity", 100 * o, 100 * (e - o), n)),
                  (n.xn1 = l ? 1 : 0),
                  (h.zoom = 1),
                  (n.type = 2),
                  (n.b = "alpha(opacity=" + n.s + ")"),
                  (n.e = "alpha(opacity=" + (n.s + n.c) + ")"),
                  (n.data = t),
                  (n.plugin = a),
                  (n.setRatio = Ee)),
              l &&
                ((n = new fe(
                  h,
                  "visibility",
                  0,
                  0,
                  n,
                  -1,
                  null,
                  !1,
                  0,
                  0 !== o ? "inherit" : "hidden",
                  0 === e ? "hidden" : "inherit"
                )),
                (n.xs0 = "inherit"),
                s._overwriteProps.push(n.n),
                s._overwriteProps.push(i)),
              n
            );
          },
        });
        var Ne = function (t, e) {
            e &&
              (t.removeProperty
                ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)),
                  t.removeProperty(e.replace(S, "-$1").toLowerCase()))
                : t.removeAttribute(e));
          },
          Le = function (t) {
            if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
              this.t.setAttribute("class", 0 === t ? this.b : this.e);
              for (var e = this.data, i = this.t.style; e; )
                e.v ? (i[e.p] = e.v) : Ne(i, e.p), (e = e._next);
              1 === t &&
                this.t._gsClassPT === this &&
                (this.t._gsClassPT = null);
            } else
              this.t.getAttribute("class") !== this.e &&
                this.t.setAttribute("class", this.e);
          };
        ve("className", {
          parser: function (t, e, s, n, a, o, h) {
            var l,
              _,
              u,
              p,
              c,
              f = t.getAttribute("class") || "",
              m = t.style.cssText;
            if (
              ((a = n._classNamePT = new fe(t, s, 0, 0, a, 2)),
              (a.setRatio = Le),
              (a.pr = -11),
              (i = !0),
              (a.b = f),
              (_ = K(t, r)),
              (u = t._gsClassPT))
            ) {
              for (p = {}, c = u.data; c; ) (p[c.p] = 1), (c = c._next);
              u.setRatio(1);
            }
            return (
              (t._gsClassPT = a),
              (a.e =
                "=" !== e.charAt(1)
                  ? e
                  : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") +
                    ("+" === e.charAt(0) ? " " + e.substr(2) : "")),
              n._tween._duration &&
                (t.setAttribute("class", a.e),
                (l = J(t, _, K(t), h, p)),
                t.setAttribute("class", f),
                (a.data = l.firstMPT),
                (t.style.cssText = m),
                (a = a.xfirst = n.parse(t, l.difs, a, o))),
              a
            );
          },
        });
        var Xe = function (t) {
          if (
            (1 === t || 0 === t) &&
            this.data._totalTime === this.data._totalDuration &&
            "isFromStart" !== this.data.data
          ) {
            var e,
              i,
              s,
              r,
              n = this.t.style,
              a = h.transform.parse;
            if ("all" === this.e) (n.cssText = ""), (r = !0);
            else
              for (
                e = this.e.split(" ").join("").split(","), s = e.length;
                --s > -1;

              )
                (i = e[s]),
                  h[i] &&
                    (h[i].parse === a
                      ? (r = !0)
                      : (i = "transformOrigin" === i ? Pe : h[i].p)),
                  Ne(n, i);
            r && (Ne(n, xe), this.t._gsTransform && delete this.t._gsTransform);
          }
        };
        for (
          ve("clearProps", {
            parser: function (t, e, s, r, n) {
              return (
                (n = new fe(t, s, 0, 0, n, 2)),
                (n.setRatio = Xe),
                (n.e = e),
                (n.pr = -10),
                (n.data = r._tween),
                (i = !0),
                n
              );
            },
          }),
            l = "bezier,throwProps,physicsProps,physics2D".split(","),
            de = l.length;
          de--;

        )
          ye(l[de]);
        (l = a.prototype),
          (l._firstPT = l._lastParsedTransform = l._transform = null),
          (l._onInitTween = function (t, e, o) {
            if (!t.nodeType) return !1;
            (this._target = t),
              (this._tween = o),
              (this._vars = e),
              (_ = e.autoRound),
              (i = !1),
              (s = e.suffixMap || a.suffixMap),
              (r = Z(t, "")),
              (n = this._overwriteProps);
            var h,
              l,
              c,
              m,
              d,
              g,
              v,
              y,
              T,
              w = t.style;
            if (
              (u &&
                "" === w.zIndex &&
                ((h = Q(t, "zIndex", r)),
                ("auto" === h || "" === h) && this._addLazySet(w, "zIndex", 0)),
              "string" == typeof e &&
                ((m = w.cssText),
                (h = K(t, r)),
                (w.cssText = m + ";" + e),
                (h = J(t, h, K(t)).difs),
                !B && x.test(e) && (h.opacity = parseFloat(RegExp.$1)),
                (e = h),
                (w.cssText = m)),
              (this._firstPT = l = this.parse(t, e, null)),
              this._transformType)
            ) {
              for (
                T = 3 === this._transformType,
                  xe
                    ? p &&
                      ((u = !0),
                      "" === w.zIndex &&
                        ((v = Q(t, "zIndex", r)),
                        ("auto" === v || "" === v) &&
                          this._addLazySet(w, "zIndex", 0)),
                      f &&
                        this._addLazySet(
                          w,
                          "WebkitBackfaceVisibility",
                          this._vars.WebkitBackfaceVisibility ||
                            (T ? "visible" : "hidden")
                        ))
                    : (w.zoom = 1),
                  c = l;
                c && c._next;

              )
                c = c._next;
              (y = new fe(t, "transform", 0, 0, null, 2)),
                this._linkCSSP(y, null, c),
                (y.setRatio = T && Se ? Ie : xe ? Fe : ze),
                (y.data = this._transform || Me(t, r, !0)),
                n.pop();
            }
            if (i) {
              for (; l; ) {
                for (g = l._next, c = m; c && c.pr > l.pr; ) c = c._next;
                (l._prev = c ? c._prev : d) ? (l._prev._next = l) : (m = l),
                  (l._next = c) ? (c._prev = l) : (d = l),
                  (l = g);
              }
              this._firstPT = m;
            }
            return !0;
          }),
          (l.parse = function (t, e, i, n) {
            var a,
              o,
              l,
              u,
              p,
              c,
              f,
              m,
              d,
              g,
              v = t.style;
            for (a in e)
              (c = e[a]),
                (o = h[a]),
                o
                  ? (i = o.parse(t, c, a, this, i, n, e))
                  : ((p = Q(t, a, r) + ""),
                    (d = "string" == typeof c),
                    "color" === a ||
                    "fill" === a ||
                    "stroke" === a ||
                    -1 !== a.indexOf("Color") ||
                    (d && P.test(c))
                      ? (d ||
                          ((c = le(c)),
                          (c =
                            (c.length > 3 ? "rgba(" : "rgb(") +
                            c.join(",") +
                            ")")),
                        (i = me(v, a, p, c, !0, "transparent", i, 0, n)))
                      : !d || (-1 === c.indexOf(" ") && -1 === c.indexOf(","))
                      ? ((l = parseFloat(p)),
                        (f = l || 0 === l ? p.substr((l + "").length) : ""),
                        ("" === p || "auto" === p) &&
                          ("width" === a || "height" === a
                            ? ((l = ie(t, a, r)), (f = "px"))
                            : "left" === a || "top" === a
                            ? ((l = H(t, a, r)), (f = "px"))
                            : ((l = "opacity" !== a ? 0 : 1), (f = ""))),
                        (g = d && "=" === c.charAt(1)),
                        g
                          ? ((u = parseInt(c.charAt(0) + "1", 10)),
                            (c = c.substr(2)),
                            (u *= parseFloat(c)),
                            (m = c.replace(T, "")))
                          : ((u = parseFloat(c)),
                            (m = d ? c.replace(T, "") : "")),
                        "" === m && (m = a in s ? s[a] : f),
                        (c = u || 0 === u ? (g ? u + l : u) + m : e[a]),
                        f !== m &&
                          "" !== m &&
                          (u || 0 === u) &&
                          l &&
                          ((l = $(t, a, l, f)),
                          "%" === m
                            ? ((l /= $(t, a, 100, "%") / 100),
                              e.strictUnits !== !0 && (p = l + "%"))
                            : "em" === m
                            ? (l /= $(t, a, 1, "em"))
                            : "px" !== m && ((u = $(t, a, u, m)), (m = "px")),
                          g && (u || 0 === u) && (c = u + l + m)),
                        g && (u += l),
                        (!l && 0 !== l) || (!u && 0 !== u)
                          ? void 0 !== v[a] &&
                            (c || ("NaN" != c + "" && null != c))
                            ? ((i = new fe(
                                v,
                                a,
                                u || l || 0,
                                0,
                                i,
                                -1,
                                a,
                                !1,
                                0,
                                p,
                                c
                              )),
                              (i.xs0 =
                                "none" !== c ||
                                ("display" !== a && -1 === a.indexOf("Style"))
                                  ? c
                                  : p))
                            : q("invalid " + a + " tween value: " + e[a])
                          : ((i = new fe(
                              v,
                              a,
                              l,
                              u - l,
                              i,
                              0,
                              a,
                              _ !== !1 && ("px" === m || "zIndex" === a),
                              0,
                              p,
                              c
                            )),
                            (i.xs0 = m)))
                      : (i = me(v, a, p, c, !0, null, i, 0, n))),
                n && i && !i.plugin && (i.plugin = n);
            return i;
          }),
          (l.setRatio = function (t) {
            var e,
              i,
              s,
              r = this._firstPT,
              n = 1e-6;
            if (
              1 !== t ||
              (this._tween._time !== this._tween._duration &&
                0 !== this._tween._time)
            )
              if (
                t ||
                (this._tween._time !== this._tween._duration &&
                  0 !== this._tween._time) ||
                this._tween._rawPrevTime === -1e-6
              )
                for (; r; ) {
                  if (
                    ((e = r.c * t + r.s),
                    r.r ? (e = Math.round(e)) : n > e && e > -n && (e = 0),
                    r.type)
                  )
                    if (1 === r.type)
                      if (((s = r.l), 2 === s))
                        r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                      else if (3 === s)
                        r.t[r.p] =
                          r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                      else if (4 === s)
                        r.t[r.p] =
                          r.xs0 +
                          e +
                          r.xs1 +
                          r.xn1 +
                          r.xs2 +
                          r.xn2 +
                          r.xs3 +
                          r.xn3 +
                          r.xs4;
                      else if (5 === s)
                        r.t[r.p] =
                          r.xs0 +
                          e +
                          r.xs1 +
                          r.xn1 +
                          r.xs2 +
                          r.xn2 +
                          r.xs3 +
                          r.xn3 +
                          r.xs4 +
                          r.xn4 +
                          r.xs5;
                      else {
                        for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++)
                          i += r["xn" + s] + r["xs" + (s + 1)];
                        r.t[r.p] = i;
                      }
                    else
                      -1 === r.type
                        ? (r.t[r.p] = r.xs0)
                        : r.setRatio && r.setRatio(t);
                  else r.t[r.p] = e + r.xs0;
                  r = r._next;
                }
              else
                for (; r; )
                  2 !== r.type ? (r.t[r.p] = r.b) : r.setRatio(t),
                    (r = r._next);
            else
              for (; r; )
                2 !== r.type ? (r.t[r.p] = r.e) : r.setRatio(t), (r = r._next);
          }),
          (l._enableTransforms = function (t) {
            (this._transform = this._transform || Me(this._target, r, !0)),
              (this._transformType =
                (this._transform.svg && Te) || (!t && 3 !== this._transformType)
                  ? 2
                  : 3);
          });
        var Ue = function () {
          (this.t[this.p] = this.e),
            this.data._linkCSSP(this, this._next, null, !0);
        };
        (l._addLazySet = function (t, e, i) {
          var s = (this._firstPT = new fe(t, e, 0, 0, this._firstPT, 2));
          (s.e = i), (s.setRatio = Ue), (s.data = this);
        }),
          (l._linkCSSP = function (t, e, i, s) {
            return (
              t &&
                (e && (e._prev = t),
                t._next && (t._next._prev = t._prev),
                t._prev
                  ? (t._prev._next = t._next)
                  : this._firstPT === t &&
                    ((this._firstPT = t._next), (s = !0)),
                i
                  ? (i._next = t)
                  : s || null !== this._firstPT || (this._firstPT = t),
                (t._next = e),
                (t._prev = i)),
              t
            );
          }),
          (l._kill = function (e) {
            var i,
              s,
              r,
              n = e;
            if (e.autoAlpha || e.alpha) {
              n = {};
              for (s in e) n[s] = e[s];
              (n.opacity = 1), n.autoAlpha && (n.visibility = 1);
            }
            return (
              e.className &&
                (i = this._classNamePT) &&
                ((r = i.xfirst),
                r && r._prev
                  ? this._linkCSSP(r._prev, i._next, r._prev._prev)
                  : r === this._firstPT && (this._firstPT = i._next),
                i._next && this._linkCSSP(i._next, i._next._next, r._prev),
                (this._classNamePT = null)),
              t.prototype._kill.call(this, n)
            );
          });
        var Ye = function (t, e, i) {
          var s, r, n, a;
          if (t.slice) for (r = t.length; --r > -1; ) Ye(t[r], e, i);
          else
            for (s = t.childNodes, r = s.length; --r > -1; )
              (n = s[r]),
                (a = n.type),
                n.style && (e.push(K(n)), i && i.push(n)),
                (1 !== a && 9 !== a && 11 !== a) ||
                  !n.childNodes.length ||
                  Ye(n, e, i);
        };
        return (
          (a.cascadeTo = function (t, i, s) {
            var r,
              n,
              a,
              o = e.to(t, i, s),
              h = [o],
              l = [],
              _ = [],
              u = [],
              p = e._internals.reservedProps;
            for (
              t = o._targets || o.target,
                Ye(t, l, u),
                o.render(i, !0),
                Ye(t, _),
                o.render(0, !0),
                o._enabled(!0),
                r = u.length;
              --r > -1;

            )
              if (((n = J(u[r], l[r], _[r])), n.firstMPT)) {
                n = n.difs;
                for (a in s) p[a] && (n[a] = s[a]);
                h.push(e.to(u[r], i, n));
              }
            return h;
          }),
          t.activate([a]),
          a
        );
      },
      !0
    ),
    (function () {
      var t = _gsScope._gsDefine.plugin({
          propName: "roundProps",
          priority: -1,
          API: 2,
          init: function (t, e, i) {
            return (this._tween = i), !0;
          },
        }),
        e = t.prototype;
      (e._onInitAllProps = function () {
        for (
          var t,
            e,
            i,
            s = this._tween,
            r =
              s.vars.roundProps instanceof Array
                ? s.vars.roundProps
                : s.vars.roundProps.split(","),
            n = r.length,
            a = {},
            o = s._propLookup.roundProps;
          --n > -1;

        )
          a[r[n]] = 1;
        for (n = r.length; --n > -1; )
          for (t = r[n], e = s._firstPT; e; )
            (i = e._next),
              e.pg
                ? e.t._roundProps(a, !0)
                : e.n === t &&
                  (this._add(e.t, t, e.s, e.c),
                  i && (i._prev = e._prev),
                  e._prev
                    ? (e._prev._next = i)
                    : s._firstPT === e && (s._firstPT = i),
                  (e._next = e._prev = null),
                  (s._propLookup[t] = o)),
              (e = i);
        return !1;
      }),
        (e._add = function (t, e, i, s) {
          this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e);
        });
    })(),
    _gsScope._gsDefine.plugin({
      propName: "attr",
      API: 2,
      version: "0.3.3",
      init: function (t, e) {
        var i, s, r;
        if ("function" != typeof t.setAttribute) return !1;
        (this._target = t),
          (this._proxy = {}),
          (this._start = {}),
          (this._end = {});
        for (i in e)
          (this._start[i] = this._proxy[i] = s = t.getAttribute(i)),
            (r = this._addTween(this._proxy, i, parseFloat(s), e[i], i)),
            (this._end[i] = r ? r.s + r.c : e[i]),
            this._overwriteProps.push(i);
        return !0;
      },
      set: function (t) {
        this._super.setRatio.call(this, t);
        for (
          var e,
            i = this._overwriteProps,
            s = i.length,
            r = 1 === t ? this._end : t ? this._proxy : this._start;
          --s > -1;

        )
          (e = i[s]), this._target.setAttribute(e, r[e] + "");
      },
    }),
    (_gsScope._gsDefine.plugin({
      propName: "directionalRotation",
      version: "0.2.1",
      API: 2,
      init: function (t, e) {
        "object" != typeof e && (e = { rotation: e }), (this.finals = {});
        var i,
          s,
          r,
          n,
          a,
          o,
          h = e.useRadians === !0 ? 2 * Math.PI : 360,
          l = 1e-6;
        for (i in e)
          "useRadians" !== i &&
            ((o = (e[i] + "").split("_")),
            (s = o[0]),
            (r = parseFloat(
              "function" != typeof t[i]
                ? t[i]
                : t[
                    i.indexOf("set") ||
                    "function" != typeof t["get" + i.substr(3)]
                      ? i
                      : "get" + i.substr(3)
                  ]()
            )),
            (n = this.finals[i] =
              "string" == typeof s && "=" === s.charAt(1)
                ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))
                : Number(s) || 0),
            (a = n - r),
            o.length &&
              ((s = o.join("_")),
              -1 !== s.indexOf("short") &&
                ((a %= h), a !== a % (h / 2) && (a = 0 > a ? a + h : a - h)),
              -1 !== s.indexOf("_cw") && 0 > a
                ? (a = ((a + 9999999999 * h) % h) - (0 | (a / h)) * h)
                : -1 !== s.indexOf("ccw") &&
                  a > 0 &&
                  (a = ((a - 9999999999 * h) % h) - (0 | (a / h)) * h)),
            (a > l || -l > a) &&
              (this._addTween(t, i, r, r + a, i),
              this._overwriteProps.push(i)));
        return !0;
      },
      set: function (t) {
        var e;
        if (1 !== t) this._super.setRatio.call(this, t);
        else
          for (e = this._firstPT; e; )
            e.f ? e.t[e.p](this.finals[e.p]) : (e.t[e.p] = this.finals[e.p]),
              (e = e._next);
      },
    })._autoCSS = !0),
    _gsScope._gsDefine(
      "easing.Back",
      ["easing.Ease"],
      function (t) {
        var e,
          i,
          s,
          r = _gsScope.GreenSockGlobals || _gsScope,
          n = r.com.greensock,
          a = 2 * Math.PI,
          o = Math.PI / 2,
          h = n._class,
          l = function (e, i) {
            var s = h("easing." + e, function () {}, !0),
              r = (s.prototype = new t());
            return (r.constructor = s), (r.getRatio = i), s;
          },
          _ = t.register || function () {},
          u = function (t, e, i, s) {
            var r = h(
              "easing." + t,
              { easeOut: new e(), easeIn: new i(), easeInOut: new s() },
              !0
            );
            return _(r, t), r;
          },
          p = function (t, e, i) {
            (this.t = t),
              (this.v = e),
              i &&
                ((this.next = i),
                (i.prev = this),
                (this.c = i.v - e),
                (this.gap = i.t - t));
          },
          c = function (e, i) {
            var s = h(
                "easing." + e,
                function (t) {
                  (this._p1 = t || 0 === t ? t : 1.70158),
                    (this._p2 = 1.525 * this._p1);
                },
                !0
              ),
              r = (s.prototype = new t());
            return (
              (r.constructor = s),
              (r.getRatio = i),
              (r.config = function (t) {
                return new s(t);
              }),
              s
            );
          },
          f = u(
            "Back",
            c("BackOut", function (t) {
              return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
            }),
            c("BackIn", function (t) {
              return t * t * ((this._p1 + 1) * t - this._p1);
            }),
            c("BackInOut", function (t) {
              return 1 > (t *= 2)
                ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2)
                : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
            })
          ),
          m = h(
            "easing.SlowMo",
            function (t, e, i) {
              (e = e || 0 === e ? e : 0.7),
                null == t ? (t = 0.7) : t > 1 && (t = 1),
                (this._p = 1 !== t ? e : 0),
                (this._p1 = (1 - t) / 2),
                (this._p2 = t),
                (this._p3 = this._p1 + this._p2),
                (this._calcEnd = i === !0);
            },
            !0
          ),
          d = (m.prototype = new t());
        return (
          (d.constructor = m),
          (d.getRatio = function (t) {
            var e = t + (0.5 - t) * this._p;
            return this._p1 > t
              ? this._calcEnd
                ? 1 - (t = 1 - t / this._p1) * t
                : e - (t = 1 - t / this._p1) * t * t * t * e
              : t > this._p3
              ? this._calcEnd
                ? 1 - (t = (t - this._p3) / this._p1) * t
                : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
              : this._calcEnd
              ? 1
              : e;
          }),
          (m.ease = new m(0.7, 0.7)),
          (d.config = m.config = function (t, e, i) {
            return new m(t, e, i);
          }),
          (e = h(
            "easing.SteppedEase",
            function (t) {
              (t = t || 1), (this._p1 = 1 / t), (this._p2 = t + 1);
            },
            !0
          )),
          (d = e.prototype = new t()),
          (d.constructor = e),
          (d.getRatio = function (t) {
            return (
              0 > t ? (t = 0) : t >= 1 && (t = 0.999999999),
              ((this._p2 * t) >> 0) * this._p1
            );
          }),
          (d.config = e.config = function (t) {
            return new e(t);
          }),
          (i = h(
            "easing.RoughEase",
            function (e) {
              e = e || {};
              for (
                var i,
                  s,
                  r,
                  n,
                  a,
                  o,
                  h = e.taper || "none",
                  l = [],
                  _ = 0,
                  u = 0 | (e.points || 20),
                  c = u,
                  f = e.randomize !== !1,
                  m = e.clamp === !0,
                  d = e.template instanceof t ? e.template : null,
                  g = "number" == typeof e.strength ? 0.4 * e.strength : 0.4;
                --c > -1;

              )
                (i = f ? Math.random() : (1 / u) * c),
                  (s = d ? d.getRatio(i) : i),
                  "none" === h
                    ? (r = g)
                    : "out" === h
                    ? ((n = 1 - i), (r = n * n * g))
                    : "in" === h
                    ? (r = i * i * g)
                    : 0.5 > i
                    ? ((n = 2 * i), (r = 0.5 * n * n * g))
                    : ((n = 2 * (1 - i)), (r = 0.5 * n * n * g)),
                  f
                    ? (s += Math.random() * r - 0.5 * r)
                    : c % 2
                    ? (s += 0.5 * r)
                    : (s -= 0.5 * r),
                  m && (s > 1 ? (s = 1) : 0 > s && (s = 0)),
                  (l[_++] = { x: i, y: s });
              for (
                l.sort(function (t, e) {
                  return t.x - e.x;
                }),
                  o = new p(1, 1, null),
                  c = u;
                --c > -1;

              )
                (a = l[c]), (o = new p(a.x, a.y, o));
              this._prev = new p(0, 0, 0 !== o.t ? o : o.next);
            },
            !0
          )),
          (d = i.prototype = new t()),
          (d.constructor = i),
          (d.getRatio = function (t) {
            var e = this._prev;
            if (t > e.t) {
              for (; e.next && t >= e.t; ) e = e.next;
              e = e.prev;
            } else for (; e.prev && e.t >= t; ) e = e.prev;
            return (this._prev = e), e.v + ((t - e.t) / e.gap) * e.c;
          }),
          (d.config = function (t) {
            return new i(t);
          }),
          (i.ease = new i()),
          u(
            "Bounce",
            l("BounceOut", function (t) {
              return 1 / 2.75 > t
                ? 7.5625 * t * t
                : 2 / 2.75 > t
                ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                : 2.5 / 2.75 > t
                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }),
            l("BounceIn", function (t) {
              return 1 / 2.75 > (t = 1 - t)
                ? 1 - 7.5625 * t * t
                : 2 / 2.75 > t
                ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                : 2.5 / 2.75 > t
                ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
            }),
            l("BounceInOut", function (t) {
              var e = 0.5 > t;
              return (
                (t = e ? 1 - 2 * t : 2 * t - 1),
                (t =
                  1 / 2.75 > t
                    ? 7.5625 * t * t
                    : 2 / 2.75 > t
                    ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                    : 2.5 / 2.75 > t
                    ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                    : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                e ? 0.5 * (1 - t) : 0.5 * t + 0.5
              );
            })
          ),
          u(
            "Circ",
            l("CircOut", function (t) {
              return Math.sqrt(1 - (t -= 1) * t);
            }),
            l("CircIn", function (t) {
              return -(Math.sqrt(1 - t * t) - 1);
            }),
            l("CircInOut", function (t) {
              return 1 > (t *= 2)
                ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            })
          ),
          (s = function (e, i, s) {
            var r = h(
                "easing." + e,
                function (t, e) {
                  (this._p1 = t || 1),
                    (this._p2 = e || s),
                    (this._p3 =
                      (this._p2 / a) * (Math.asin(1 / this._p1) || 0));
                },
                !0
              ),
              n = (r.prototype = new t());
            return (
              (n.constructor = r),
              (n.getRatio = i),
              (n.config = function (t, e) {
                return new r(t, e);
              }),
              r
            );
          }),
          u(
            "Elastic",
            s(
              "ElasticOut",
              function (t) {
                return (
                  this._p1 *
                    Math.pow(2, -10 * t) *
                    Math.sin(((t - this._p3) * a) / this._p2) +
                  1
                );
              },
              0.3
            ),
            s(
              "ElasticIn",
              function (t) {
                return -(
                  this._p1 *
                  Math.pow(2, 10 * (t -= 1)) *
                  Math.sin(((t - this._p3) * a) / this._p2)
                );
              },
              0.3
            ),
            s(
              "ElasticInOut",
              function (t) {
                return 1 > (t *= 2)
                  ? -0.5 *
                      this._p1 *
                      Math.pow(2, 10 * (t -= 1)) *
                      Math.sin(((t - this._p3) * a) / this._p2)
                  : 0.5 *
                      this._p1 *
                      Math.pow(2, -10 * (t -= 1)) *
                      Math.sin(((t - this._p3) * a) / this._p2) +
                      1;
              },
              0.45
            )
          ),
          u(
            "Expo",
            l("ExpoOut", function (t) {
              return 1 - Math.pow(2, -10 * t);
            }),
            l("ExpoIn", function (t) {
              return Math.pow(2, 10 * (t - 1)) - 0.001;
            }),
            l("ExpoInOut", function (t) {
              return 1 > (t *= 2)
                ? 0.5 * Math.pow(2, 10 * (t - 1))
                : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
            })
          ),
          u(
            "Sine",
            l("SineOut", function (t) {
              return Math.sin(t * o);
            }),
            l("SineIn", function (t) {
              return -Math.cos(t * o) + 1;
            }),
            l("SineInOut", function (t) {
              return -0.5 * (Math.cos(Math.PI * t) - 1);
            })
          ),
          h(
            "easing.EaseLookup",
            {
              find: function (e) {
                return t.map[e];
              },
            },
            !0
          ),
          _(r.SlowMo, "SlowMo", "ease,"),
          _(i, "RoughEase", "ease,"),
          _(e, "SteppedEase", "ease,"),
          f
        );
      },
      !0
    );
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (t, e) {
    "use strict";
    var i = (t.GreenSockGlobals = t.GreenSockGlobals || t);
    if (!i.TweenLite) {
      var s,
        r,
        n,
        a,
        o,
        h = function (t) {
          var e,
            s = t.split("."),
            r = i;
          for (e = 0; s.length > e; e++) r[s[e]] = r = r[s[e]] || {};
          return r;
        },
        l = h("com.greensock"),
        _ = 1e-10,
        u = function (t) {
          var e,
            i = [],
            s = t.length;
          for (e = 0; e !== s; i.push(t[e++]));
          return i;
        },
        p = function () {},
        c = (function () {
          var t = Object.prototype.toString,
            e = t.call([]);
          return function (i) {
            return (
              null != i &&
              (i instanceof Array ||
                ("object" == typeof i && !!i.push && t.call(i) === e))
            );
          };
        })(),
        f = {},
        m = function (s, r, n, a) {
          (this.sc = f[s] ? f[s].sc : []),
            (f[s] = this),
            (this.gsClass = null),
            (this.func = n);
          var o = [];
          (this.check = function (l) {
            for (var _, u, p, c, d = r.length, g = d; --d > -1; )
              (_ = f[r[d]] || new m(r[d], [])).gsClass
                ? ((o[d] = _.gsClass), g--)
                : l && _.sc.push(this);
            if (0 === g && n)
              for (
                u = ("com.greensock." + s).split("."),
                  p = u.pop(),
                  c = h(u.join("."))[p] = this.gsClass = n.apply(n, o),
                  a &&
                    ((i[p] = c),
                    "function" == typeof define && define.amd
                      ? define((t.GreenSockAMDPath
                          ? t.GreenSockAMDPath + "/"
                          : "") + s.split(".").pop(), [], function () {
                          return c;
                        })
                      : s === e &&
                        "undefined" != typeof module &&
                        module.exports &&
                        (module.exports = c)),
                  d = 0;
                this.sc.length > d;
                d++
              )
                this.sc[d].check();
          }),
            this.check(!0);
        },
        d = (t._gsDefine = function (t, e, i, s) {
          return new m(t, e, i, s);
        }),
        g = (l._class = function (t, e, i) {
          return (
            (e = e || function () {}),
            d(
              t,
              [],
              function () {
                return e;
              },
              i
            ),
            e
          );
        });
      d.globals = i;
      var v = [0, 0, 1, 1],
        y = [],
        T = g(
          "easing.Ease",
          function (t, e, i, s) {
            (this._func = t),
              (this._type = i || 0),
              (this._power = s || 0),
              (this._params = e ? v.concat(e) : v);
          },
          !0
        ),
        w = (T.map = {}),
        x = (T.register = function (t, e, i, s) {
          for (
            var r,
              n,
              a,
              o,
              h = e.split(","),
              _ = h.length,
              u = (i || "easeIn,easeOut,easeInOut").split(",");
            --_ > -1;

          )
            for (
              n = h[_],
                r = s ? g("easing." + n, null, !0) : l.easing[n] || {},
                a = u.length;
              --a > -1;

            )
              (o = u[a]),
                (w[n + "." + o] = w[o + n] = r[o] = t.getRatio
                  ? t
                  : t[o] || new t());
        });
      for (
        n = T.prototype,
          n._calcEnd = !1,
          n.getRatio = function (t) {
            if (this._func)
              return (
                (this._params[0] = t), this._func.apply(null, this._params)
              );
            var e = this._type,
              i = this._power,
              s = 1 === e ? 1 - t : 2 === e ? t : 0.5 > t ? 2 * t : 2 * (1 - t);
            return (
              1 === i
                ? (s *= s)
                : 2 === i
                ? (s *= s * s)
                : 3 === i
                ? (s *= s * s * s)
                : 4 === i && (s *= s * s * s * s),
              1 === e ? 1 - s : 2 === e ? s : 0.5 > t ? s / 2 : 1 - s / 2
            );
          },
          s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
          r = s.length;
        --r > -1;

      )
        (n = s[r] + ",Power" + r),
          x(new T(null, null, 1, r), n, "easeOut", !0),
          x(
            new T(null, null, 2, r),
            n,
            "easeIn" + (0 === r ? ",easeNone" : "")
          ),
          x(new T(null, null, 3, r), n, "easeInOut");
      (w.linear = l.easing.Linear.easeIn), (w.swing = l.easing.Quad.easeInOut);
      var b = g("events.EventDispatcher", function (t) {
        (this._listeners = {}), (this._eventTarget = t || this);
      });
      (n = b.prototype),
        (n.addEventListener = function (t, e, i, s, r) {
          r = r || 0;
          var n,
            h,
            l = this._listeners[t],
            _ = 0;
          for (
            null == l && (this._listeners[t] = l = []), h = l.length;
            --h > -1;

          )
            (n = l[h]),
              n.c === e && n.s === i
                ? l.splice(h, 1)
                : 0 === _ && r > n.pr && (_ = h + 1);
          l.splice(_, 0, { c: e, s: i, up: s, pr: r }),
            this !== a || o || a.wake();
        }),
        (n.removeEventListener = function (t, e) {
          var i,
            s = this._listeners[t];
          if (s)
            for (i = s.length; --i > -1; )
              if (s[i].c === e) return s.splice(i, 1), void 0;
        }),
        (n.dispatchEvent = function (t) {
          var e,
            i,
            s,
            r = this._listeners[t];
          if (r)
            for (e = r.length, i = this._eventTarget; --e > -1; )
              (s = r[e]),
                s &&
                  (s.up
                    ? s.c.call(s.s || i, { type: t, target: i })
                    : s.c.call(s.s || i));
        });
      var P = t.requestAnimationFrame,
        S = t.cancelAnimationFrame,
        k =
          Date.now ||
          function () {
            return new Date().getTime();
          },
        R = k();
      for (s = ["ms", "moz", "webkit", "o"], r = s.length; --r > -1 && !P; )
        (P = t[s[r] + "RequestAnimationFrame"]),
          (S =
            t[s[r] + "CancelAnimationFrame"] ||
            t[s[r] + "CancelRequestAnimationFrame"]);
      g("Ticker", function (t, e) {
        var i,
          s,
          r,
          n,
          h,
          l = this,
          u = k(),
          c = e !== !1 && P,
          f = 500,
          m = 33,
          d = "tick",
          g = function (t) {
            var e,
              a,
              o = k() - R;
            o > f && (u += o - m),
              (R += o),
              (l.time = (R - u) / 1e3),
              (e = l.time - h),
              (!i || e > 0 || t === !0) &&
                (l.frame++, (h += e + (e >= n ? 0.004 : n - e)), (a = !0)),
              t !== !0 && (r = s(g)),
              a && l.dispatchEvent(d);
          };
        b.call(l),
          (l.time = l.frame = 0),
          (l.tick = function () {
            g(!0);
          }),
          (l.lagSmoothing = function (t, e) {
            (f = t || 1 / _), (m = Math.min(e, f, 0));
          }),
          (l.sleep = function () {
            null != r &&
              (c && S ? S(r) : clearTimeout(r),
              (s = p),
              (r = null),
              l === a && (o = !1));
          }),
          (l.wake = function () {
            null !== r ? l.sleep() : l.frame > 10 && (R = k() - f + 5),
              (s =
                0 === i
                  ? p
                  : c && P
                  ? P
                  : function (t) {
                      return setTimeout(t, 0 | (1e3 * (h - l.time) + 1));
                    }),
              l === a && (o = !0),
              g(2);
          }),
          (l.fps = function (t) {
            return arguments.length
              ? ((i = t),
                (n = 1 / (i || 60)),
                (h = this.time + n),
                l.wake(),
                void 0)
              : i;
          }),
          (l.useRAF = function (t) {
            return arguments.length
              ? (l.sleep(), (c = t), l.fps(i), void 0)
              : c;
          }),
          l.fps(t),
          setTimeout(function () {
            c && (!r || 5 > l.frame) && l.useRAF(!1);
          }, 1500);
      }),
        (n = l.Ticker.prototype = new l.events.EventDispatcher()),
        (n.constructor = l.Ticker);
      var A = g("core.Animation", function (t, e) {
        if (
          ((this.vars = e = e || {}),
          (this._duration = this._totalDuration = t || 0),
          (this._delay = Number(e.delay) || 0),
          (this._timeScale = 1),
          (this._active = e.immediateRender === !0),
          (this.data = e.data),
          (this._reversed = e.reversed === !0),
          j)
        ) {
          o || a.wake();
          var i = this.vars.useFrames ? B : j;
          i.add(this, i._time), this.vars.paused && this.paused(!0);
        }
      });
      (a = A.ticker = new l.Ticker()),
        (n = A.prototype),
        (n._dirty = n._gc = n._initted = n._paused = !1),
        (n._totalTime = n._time = 0),
        (n._rawPrevTime = -1),
        (n._next = n._last = n._onUpdate = n._timeline = n.timeline = null),
        (n._paused = !1);
      var C = function () {
        o && k() - R > 2e3 && a.wake(), setTimeout(C, 2e3);
      };
      C(),
        (n.play = function (t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
        }),
        (n.pause = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!0);
        }),
        (n.resume = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!1);
        }),
        (n.seek = function (t, e) {
          return this.totalTime(Number(t), e !== !1);
        }),
        (n.restart = function (t, e) {
          return this.reversed(!1)
            .paused(!1)
            .totalTime(t ? -this._delay : 0, e !== !1, !0);
        }),
        (n.reverse = function (t, e) {
          return (
            null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
          );
        }),
        (n.render = function () {}),
        (n.invalidate = function () {
          return (
            (this._time = this._totalTime = 0),
            (this._initted = this._gc = !1),
            (this._rawPrevTime = -1),
            (this._gc || !this.timeline) && this._enabled(!0),
            this
          );
        }),
        (n.isActive = function () {
          var t,
            e = this._timeline,
            i = this._startTime;
          return (
            !e ||
            (!this._gc &&
              !this._paused &&
              e.isActive() &&
              (t = e.rawTime()) >= i &&
              i + this.totalDuration() / this._timeScale > t)
          );
        }),
        (n._enabled = function (t, e) {
          return (
            o || a.wake(),
            (this._gc = !t),
            (this._active = this.isActive()),
            e !== !0 &&
              (t && !this.timeline
                ? this._timeline.add(this, this._startTime - this._delay)
                : !t && this.timeline && this._timeline._remove(this, !0)),
            !1
          );
        }),
        (n._kill = function () {
          return this._enabled(!1, !1);
        }),
        (n.kill = function (t, e) {
          return this._kill(t, e), this;
        }),
        (n._uncache = function (t) {
          for (var e = t ? this : this.timeline; e; )
            (e._dirty = !0), (e = e.timeline);
          return this;
        }),
        (n._swapSelfInParams = function (t) {
          for (var e = t.length, i = t.concat(); --e > -1; )
            "{self}" === t[e] && (i[e] = this);
          return i;
        }),
        (n.eventCallback = function (t, e, i, s) {
          if ("on" === (t || "").substr(0, 2)) {
            var r = this.vars;
            if (1 === arguments.length) return r[t];
            null == e
              ? delete r[t]
              : ((r[t] = e),
                (r[t + "Params"] =
                  c(i) && -1 !== i.join("").indexOf("{self}")
                    ? this._swapSelfInParams(i)
                    : i),
                (r[t + "Scope"] = s)),
              "onUpdate" === t && (this._onUpdate = e);
          }
          return this;
        }),
        (n.delay = function (t) {
          return arguments.length
            ? (this._timeline.smoothChildTiming &&
                this.startTime(this._startTime + t - this._delay),
              (this._delay = t),
              this)
            : this._delay;
        }),
        (n.duration = function (t) {
          return arguments.length
            ? ((this._duration = this._totalDuration = t),
              this._uncache(!0),
              this._timeline.smoothChildTiming &&
                this._time > 0 &&
                this._time < this._duration &&
                0 !== t &&
                this.totalTime(this._totalTime * (t / this._duration), !0),
              this)
            : ((this._dirty = !1), this._duration);
        }),
        (n.totalDuration = function (t) {
          return (
            (this._dirty = !1),
            arguments.length ? this.duration(t) : this._totalDuration
          );
        }),
        (n.time = function (t, e) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              this.totalTime(t > this._duration ? this._duration : t, e))
            : this._time;
        }),
        (n.totalTime = function (t, e, i) {
          if ((o || a.wake(), !arguments.length)) return this._totalTime;
          if (this._timeline) {
            if (
              (0 > t && !i && (t += this.totalDuration()),
              this._timeline.smoothChildTiming)
            ) {
              this._dirty && this.totalDuration();
              var s = this._totalDuration,
                r = this._timeline;
              if (
                (t > s && !i && (t = s),
                (this._startTime =
                  (this._paused ? this._pauseTime : r._time) -
                  (this._reversed ? s - t : t) / this._timeScale),
                r._dirty || this._uncache(!1),
                r._timeline)
              )
                for (; r._timeline; )
                  r._timeline._time !==
                    (r._startTime + r._totalTime) / r._timeScale &&
                    r.totalTime(r._totalTime, !0),
                    (r = r._timeline);
            }
            this._gc && this._enabled(!0, !1),
              (this._totalTime !== t || 0 === this._duration) &&
                (this.render(t, e, !1), I.length && q());
          }
          return this;
        }),
        (n.progress = n.totalProgress = function (t, e) {
          return arguments.length
            ? this.totalTime(this.duration() * t, e)
            : this._time / this.duration();
        }),
        (n.startTime = function (t) {
          return arguments.length
            ? (t !== this._startTime &&
                ((this._startTime = t),
                this.timeline &&
                  this.timeline._sortChildren &&
                  this.timeline.add(this, t - this._delay)),
              this)
            : this._startTime;
        }),
        (n.endTime = function (t) {
          return (
            this._startTime +
            (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
          );
        }),
        (n.timeScale = function (t) {
          if (!arguments.length) return this._timeScale;
          if (
            ((t = t || _), this._timeline && this._timeline.smoothChildTiming)
          ) {
            var e = this._pauseTime,
              i = e || 0 === e ? e : this._timeline.totalTime();
            this._startTime = i - ((i - this._startTime) * this._timeScale) / t;
          }
          return (this._timeScale = t), this._uncache(!1);
        }),
        (n.reversed = function (t) {
          return arguments.length
            ? (t != this._reversed &&
                ((this._reversed = t),
                this.totalTime(
                  this._timeline && !this._timeline.smoothChildTiming
                    ? this.totalDuration() - this._totalTime
                    : this._totalTime,
                  !0
                )),
              this)
            : this._reversed;
        }),
        (n.paused = function (t) {
          if (!arguments.length) return this._paused;
          if (t != this._paused && this._timeline) {
            o || t || a.wake();
            var e = this._timeline,
              i = e.rawTime(),
              s = i - this._pauseTime;
            !t &&
              e.smoothChildTiming &&
              ((this._startTime += s), this._uncache(!1)),
              (this._pauseTime = t ? i : null),
              (this._paused = t),
              (this._active = this.isActive()),
              !t &&
                0 !== s &&
                this._initted &&
                this.duration() &&
                this.render(
                  e.smoothChildTiming
                    ? this._totalTime
                    : (i - this._startTime) / this._timeScale,
                  !0,
                  !0
                );
          }
          return this._gc && !t && this._enabled(!0, !1), this;
        });
      var O = g("core.SimpleTimeline", function (t) {
        A.call(this, 0, t),
          (this.autoRemoveChildren = this.smoothChildTiming = !0);
      });
      (n = O.prototype = new A()),
        (n.constructor = O),
        (n.kill()._gc = !1),
        (n._first = n._last = n._recent = null),
        (n._sortChildren = !1),
        (n.add = n.insert = function (t, e) {
          var i, s;
          if (
            ((t._startTime = Number(e || 0) + t._delay),
            t._paused &&
              this !== t._timeline &&
              (t._pauseTime =
                t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
            t.timeline && t.timeline._remove(t, !0),
            (t.timeline = t._timeline = this),
            t._gc && t._enabled(!0, !0),
            (i = this._last),
            this._sortChildren)
          )
            for (s = t._startTime; i && i._startTime > s; ) i = i._prev;
          return (
            i
              ? ((t._next = i._next), (i._next = t))
              : ((t._next = this._first), (this._first = t)),
            t._next ? (t._next._prev = t) : (this._last = t),
            (t._prev = i),
            (this._recent = t),
            this._timeline && this._uncache(!0),
            this
          );
        }),
        (n._remove = function (t, e) {
          return (
            t.timeline === this &&
              (e || t._enabled(!1, !0),
              t._prev
                ? (t._prev._next = t._next)
                : this._first === t && (this._first = t._next),
              t._next
                ? (t._next._prev = t._prev)
                : this._last === t && (this._last = t._prev),
              (t._next = t._prev = t.timeline = null),
              t === this._recent && (this._recent = this._last),
              this._timeline && this._uncache(!0)),
            this
          );
        }),
        (n.render = function (t, e, i) {
          var s,
            r = this._first;
          for (this._totalTime = this._time = this._rawPrevTime = t; r; )
            (s = r._next),
              (r._active || (t >= r._startTime && !r._paused)) &&
                (r._reversed
                  ? r.render(
                      (r._dirty ? r.totalDuration() : r._totalDuration) -
                        (t - r._startTime) * r._timeScale,
                      e,
                      i
                    )
                  : r.render((t - r._startTime) * r._timeScale, e, i)),
              (r = s);
        }),
        (n.rawTime = function () {
          return o || a.wake(), this._totalTime;
        });
      var D = g(
          "TweenLite",
          function (e, i, s) {
            if (
              (A.call(this, i, s),
              (this.render = D.prototype.render),
              null == e)
            )
              throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : D.selector(e) || e;
            var r,
              n,
              a,
              o =
                e.jquery ||
                (e.length &&
                  e !== t &&
                  e[0] &&
                  (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))),
              h = this.vars.overwrite;
            if (
              ((this._overwrite = h =
                null == h
                  ? Y[D.defaultOverwrite]
                  : "number" == typeof h
                  ? h >> 0
                  : Y[h]),
              (o || e instanceof Array || (e.push && c(e))) &&
                "number" != typeof e[0])
            )
              for (
                this._targets = a = u(e),
                  this._propLookup = [],
                  this._siblings = [],
                  r = 0;
                a.length > r;
                r++
              )
                (n = a[r]),
                  n
                    ? "string" != typeof n
                      ? n.length &&
                        n !== t &&
                        n[0] &&
                        (n[0] === t ||
                          (n[0].nodeType && n[0].style && !n.nodeType))
                        ? (a.splice(r--, 1),
                          (this._targets = a = a.concat(u(n))))
                        : ((this._siblings[r] = V(n, this, !1)),
                          1 === h &&
                            this._siblings[r].length > 1 &&
                            W(n, this, null, 1, this._siblings[r]))
                      : ((n = a[r--] = D.selector(n)),
                        "string" == typeof n && a.splice(r + 1, 1))
                    : a.splice(r--, 1);
            else
              (this._propLookup = {}),
                (this._siblings = V(e, this, !1)),
                1 === h &&
                  this._siblings.length > 1 &&
                  W(e, this, null, 1, this._siblings);
            (this.vars.immediateRender ||
              (0 === i &&
                0 === this._delay &&
                this.vars.immediateRender !== !1)) &&
              ((this._time = -_), this.render(-this._delay));
          },
          !0
        ),
        M = function (e) {
          return (
            e &&
            e.length &&
            e !== t &&
            e[0] &&
            (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))
          );
        },
        z = function (t, e) {
          var i,
            s = {};
          for (i in t)
            U[i] ||
              (i in e &&
                "transform" !== i &&
                "x" !== i &&
                "y" !== i &&
                "width" !== i &&
                "height" !== i &&
                "className" !== i &&
                "border" !== i) ||
              !(!N[i] || (N[i] && N[i]._autoCSS)) ||
              ((s[i] = t[i]), delete t[i]);
          t.css = s;
        };
      (n = D.prototype = new A()),
        (n.constructor = D),
        (n.kill()._gc = !1),
        (n.ratio = 0),
        (n._firstPT = n._targets = n._overwrittenProps = n._startAt = null),
        (n._notifyPluginsOfEnabled = n._lazy = !1),
        (D.version = "1.15.1"),
        (D.defaultEase = n._ease = new T(null, null, 1, 1)),
        (D.defaultOverwrite = "auto"),
        (D.ticker = a),
        (D.autoSleep = !0),
        (D.lagSmoothing = function (t, e) {
          a.lagSmoothing(t, e);
        }),
        (D.selector =
          t.$ ||
          t.jQuery ||
          function (e) {
            var i = t.$ || t.jQuery;
            return i
              ? ((D.selector = i), i(e))
              : "undefined" == typeof document
              ? e
              : document.querySelectorAll
              ? document.querySelectorAll(e)
              : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e);
          });
      var I = [],
        F = {},
        E = (D._internals = { isArray: c, isSelector: M, lazyTweens: I }),
        N = (D._plugins = {}),
        L = (E.tweenLookup = {}),
        X = 0,
        U = (E.reservedProps = {
          ease: 1,
          delay: 1,
          overwrite: 1,
          onComplete: 1,
          onCompleteParams: 1,
          onCompleteScope: 1,
          useFrames: 1,
          runBackwards: 1,
          startAt: 1,
          onUpdate: 1,
          onUpdateParams: 1,
          onUpdateScope: 1,
          onStart: 1,
          onStartParams: 1,
          onStartScope: 1,
          onReverseComplete: 1,
          onReverseCompleteParams: 1,
          onReverseCompleteScope: 1,
          onRepeat: 1,
          onRepeatParams: 1,
          onRepeatScope: 1,
          easeParams: 1,
          yoyo: 1,
          immediateRender: 1,
          repeat: 1,
          repeatDelay: 1,
          data: 1,
          paused: 1,
          reversed: 1,
          autoCSS: 1,
          lazy: 1,
          onOverwrite: 1,
        }),
        Y = {
          none: 0,
          all: 1,
          auto: 2,
          concurrent: 3,
          allOnStart: 4,
          preexisting: 5,
          true: 1,
          false: 0,
        },
        B = (A._rootFramesTimeline = new O()),
        j = (A._rootTimeline = new O()),
        q = (E.lazyRender = function () {
          var t,
            e = I.length;
          for (F = {}; --e > -1; )
            (t = I[e]),
              t &&
                t._lazy !== !1 &&
                (t.render(t._lazy[0], t._lazy[1], !0), (t._lazy = !1));
          I.length = 0;
        });
      (j._startTime = a.time),
        (B._startTime = a.frame),
        (j._active = B._active = !0),
        setTimeout(q, 1),
        (A._updateRoot = D.render = function () {
          var t, e, i;
          if (
            (I.length && q(),
            j.render((a.time - j._startTime) * j._timeScale, !1, !1),
            B.render((a.frame - B._startTime) * B._timeScale, !1, !1),
            I.length && q(),
            !(a.frame % 120))
          ) {
            for (i in L) {
              for (e = L[i].tweens, t = e.length; --t > -1; )
                e[t]._gc && e.splice(t, 1);
              0 === e.length && delete L[i];
            }
            if (
              ((i = j._first),
              (!i || i._paused) &&
                D.autoSleep &&
                !B._first &&
                1 === a._listeners.tick.length)
            ) {
              for (; i && i._paused; ) i = i._next;
              i || a.sleep();
            }
          }
        }),
        a.addEventListener("tick", A._updateRoot);
      var V = function (t, e, i) {
          var s,
            r,
            n = t._gsTweenID;
          if (
            (L[n || (t._gsTweenID = n = "t" + X++)] ||
              (L[n] = { target: t, tweens: [] }),
            e && ((s = L[n].tweens), (s[(r = s.length)] = e), i))
          )
            for (; --r > -1; ) s[r] === e && s.splice(r, 1);
          return L[n].tweens;
        },
        G = function (t, e, i, s) {
          var r,
            n,
            a = t.vars.onOverwrite;
          return (
            a && (r = a(t, e, i, s)),
            (a = D.onOverwrite),
            a && (n = a(t, e, i, s)),
            r !== !1 && n !== !1
          );
        },
        W = function (t, e, i, s, r) {
          var n, a, o, h;
          if (1 === s || s >= 4) {
            for (h = r.length, n = 0; h > n; n++)
              if ((o = r[n]) !== e)
                o._gc || (G(o, e) && o._enabled(!1, !1) && (a = !0));
              else if (5 === s) break;
            return a;
          }
          var l,
            u = e._startTime + _,
            p = [],
            c = 0,
            f = 0 === e._duration;
          for (n = r.length; --n > -1; )
            (o = r[n]) === e ||
              o._gc ||
              o._paused ||
              (o._timeline !== e._timeline
                ? ((l = l || Z(e, 0, f)), 0 === Z(o, l, f) && (p[c++] = o))
                : u >= o._startTime &&
                  o._startTime + o.totalDuration() / o._timeScale > u &&
                  (((f || !o._initted) && 2e-10 >= u - o._startTime) ||
                    (p[c++] = o)));
          for (n = c; --n > -1; )
            if (
              ((o = p[n]),
              2 === s && o._kill(i, t, e) && (a = !0),
              2 !== s || (!o._firstPT && o._initted))
            ) {
              if (2 !== s && !G(o, e)) continue;
              o._enabled(!1, !1) && (a = !0);
            }
          return a;
        },
        Z = function (t, e, i) {
          for (
            var s = t._timeline, r = s._timeScale, n = t._startTime;
            s._timeline;

          ) {
            if (((n += s._startTime), (r *= s._timeScale), s._paused))
              return -100;
            s = s._timeline;
          }
          return (
            (n /= r),
            n > e
              ? n - e
              : (i && n === e) || (!t._initted && 2 * _ > n - e)
              ? _
              : (n += t.totalDuration() / t._timeScale / r) > e + _
              ? 0
              : n - e - _
          );
        };
      (n._init = function () {
        var t,
          e,
          i,
          s,
          r,
          n = this.vars,
          a = this._overwrittenProps,
          o = this._duration,
          h = !!n.immediateRender,
          l = n.ease;
        if (n.startAt) {
          this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()),
            (r = {});
          for (s in n.startAt) r[s] = n.startAt[s];
          if (
            ((r.overwrite = !1),
            (r.immediateRender = !0),
            (r.lazy = h && n.lazy !== !1),
            (r.startAt = r.delay = null),
            (this._startAt = D.to(this.target, 0, r)),
            h)
          )
            if (this._time > 0) this._startAt = null;
            else if (0 !== o) return;
        } else if (n.runBackwards && 0 !== o)
          if (this._startAt)
            this._startAt.render(-1, !0),
              this._startAt.kill(),
              (this._startAt = null);
          else {
            0 !== this._time && (h = !1), (i = {});
            for (s in n) (U[s] && "autoCSS" !== s) || (i[s] = n[s]);
            if (
              ((i.overwrite = 0),
              (i.data = "isFromStart"),
              (i.lazy = h && n.lazy !== !1),
              (i.immediateRender = h),
              (this._startAt = D.to(this.target, 0, i)),
              h)
            ) {
              if (0 === this._time) return;
            } else
              this._startAt._init(),
                this._startAt._enabled(!1),
                this.vars.immediateRender && (this._startAt = null);
          }
        if (
          ((this._ease = l = l
            ? l instanceof T
              ? l
              : "function" == typeof l
              ? new T(l, n.easeParams)
              : w[l] || D.defaultEase
            : D.defaultEase),
          n.easeParams instanceof Array &&
            l.config &&
            (this._ease = l.config.apply(l, n.easeParams)),
          (this._easeType = this._ease._type),
          (this._easePower = this._ease._power),
          (this._firstPT = null),
          this._targets)
        )
          for (t = this._targets.length; --t > -1; )
            this._initProps(
              this._targets[t],
              (this._propLookup[t] = {}),
              this._siblings[t],
              a ? a[t] : null
            ) && (e = !0);
        else
          e = this._initProps(this.target, this._propLookup, this._siblings, a);
        if (
          (e && D._onPluginEvent("_onInitAllProps", this),
          a &&
            (this._firstPT ||
              ("function" != typeof this.target && this._enabled(!1, !1))),
          n.runBackwards)
        )
          for (i = this._firstPT; i; )
            (i.s += i.c), (i.c = -i.c), (i = i._next);
        (this._onUpdate = n.onUpdate), (this._initted = !0);
      }),
        (n._initProps = function (e, i, s, r) {
          var n, a, o, h, l, _;
          if (null == e) return !1;
          F[e._gsTweenID] && q(),
            this.vars.css ||
              (e.style &&
                e !== t &&
                e.nodeType &&
                N.css &&
                this.vars.autoCSS !== !1 &&
                z(this.vars, e));
          for (n in this.vars) {
            if (((_ = this.vars[n]), U[n]))
              _ &&
                (_ instanceof Array || (_.push && c(_))) &&
                -1 !== _.join("").indexOf("{self}") &&
                (this.vars[n] = _ = this._swapSelfInParams(_, this));
            else if (
              N[n] &&
              (h = new N[n]())._onInitTween(e, this.vars[n], this)
            ) {
              for (
                this._firstPT = l = {
                  _next: this._firstPT,
                  t: h,
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: !0,
                  n: n,
                  pg: !0,
                  pr: h._priority,
                },
                  a = h._overwriteProps.length;
                --a > -1;

              )
                i[h._overwriteProps[a]] = this._firstPT;
              (h._priority || h._onInitAllProps) && (o = !0),
                (h._onDisable || h._onEnable) &&
                  (this._notifyPluginsOfEnabled = !0);
            } else
              (this._firstPT = i[n] = l = {
                _next: this._firstPT,
                t: e,
                p: n,
                f: "function" == typeof e[n],
                n: n,
                pg: !1,
                pr: 0,
              }),
                (l.s = l.f
                  ? e[
                      n.indexOf("set") ||
                      "function" != typeof e["get" + n.substr(3)]
                        ? n
                        : "get" + n.substr(3)
                    ]()
                  : parseFloat(e[n])),
                (l.c =
                  "string" == typeof _ && "=" === _.charAt(1)
                    ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2))
                    : Number(_) - l.s || 0);
            l && l._next && (l._next._prev = l);
          }
          return r && this._kill(r, e)
            ? this._initProps(e, i, s, r)
            : this._overwrite > 1 &&
              this._firstPT &&
              s.length > 1 &&
              W(e, this, i, this._overwrite, s)
            ? (this._kill(i, e), this._initProps(e, i, s, r))
            : (this._firstPT &&
                ((this.vars.lazy !== !1 && this._duration) ||
                  (this.vars.lazy && !this._duration)) &&
                (F[e._gsTweenID] = !0),
              o);
        }),
        (n.render = function (t, e, i) {
          var s,
            r,
            n,
            a,
            o = this._time,
            h = this._duration,
            l = this._rawPrevTime;
          if (t >= h)
            (this._totalTime = this._time = h),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
              this._reversed || ((s = !0), (r = "onComplete")),
              0 === h &&
                (this._initted || !this.vars.lazy || i) &&
                (this._startTime === this._timeline._duration && (t = 0),
                (0 === t || 0 > l || (l === _ && "isPause" !== this.data)) &&
                  l !== t &&
                  ((i = !0), l > _ && (r = "onReverseComplete")),
                (this._rawPrevTime = a = !e || t || l === t ? t : _));
          else if (1e-7 > t)
            (this._totalTime = this._time = 0),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
              (0 !== o || (0 === h && l > 0 && l !== _)) &&
                ((r = "onReverseComplete"), (s = this._reversed)),
              0 > t &&
                ((this._active = !1),
                0 === h &&
                  (this._initted || !this.vars.lazy || i) &&
                  (l >= 0 && (l !== _ || "isPause" !== this.data) && (i = !0),
                  (this._rawPrevTime = a = !e || t || l === t ? t : _))),
              this._initted || (i = !0);
          else if (((this._totalTime = this._time = t), this._easeType)) {
            var u = t / h,
              p = this._easeType,
              c = this._easePower;
            (1 === p || (3 === p && u >= 0.5)) && (u = 1 - u),
              3 === p && (u *= 2),
              1 === c
                ? (u *= u)
                : 2 === c
                ? (u *= u * u)
                : 3 === c
                ? (u *= u * u * u)
                : 4 === c && (u *= u * u * u * u),
              (this.ratio =
                1 === p
                  ? 1 - u
                  : 2 === p
                  ? u
                  : 0.5 > t / h
                  ? u / 2
                  : 1 - u / 2);
          } else this.ratio = this._ease.getRatio(t / h);
          if (this._time !== o || i) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return;
              if (
                !i &&
                this._firstPT &&
                ((this.vars.lazy !== !1 && this._duration) ||
                  (this.vars.lazy && !this._duration))
              )
                return (
                  (this._time = this._totalTime = o),
                  (this._rawPrevTime = l),
                  I.push(this),
                  (this._lazy = [t, e]),
                  void 0
                );
              this._time && !s
                ? (this.ratio = this._ease.getRatio(this._time / h))
                : s &&
                  this._ease._calcEnd &&
                  (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
            }
            for (
              this._lazy !== !1 && (this._lazy = !1),
                this._active ||
                  (!this._paused &&
                    this._time !== o &&
                    t >= 0 &&
                    (this._active = !0)),
                0 === o &&
                  (this._startAt &&
                    (t >= 0
                      ? this._startAt.render(t, e, i)
                      : r || (r = "_dummyGS")),
                  this.vars.onStart &&
                    (0 !== this._time || 0 === h) &&
                    (e ||
                      this.vars.onStart.apply(
                        this.vars.onStartScope || this,
                        this.vars.onStartParams || y
                      ))),
                n = this._firstPT;
              n;

            )
              n.f
                ? n.t[n.p](n.c * this.ratio + n.s)
                : (n.t[n.p] = n.c * this.ratio + n.s),
                (n = n._next);
            this._onUpdate &&
              (0 > t &&
                this._startAt &&
                t !== -1e-4 &&
                this._startAt.render(t, e, i),
              e ||
                ((this._time !== o || s) &&
                  this._onUpdate.apply(
                    this.vars.onUpdateScope || this,
                    this.vars.onUpdateParams || y
                  ))),
              r &&
                (!this._gc || i) &&
                (0 > t &&
                  this._startAt &&
                  !this._onUpdate &&
                  t !== -1e-4 &&
                  this._startAt.render(t, e, i),
                s &&
                  (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                  (this._active = !1)),
                !e &&
                  this.vars[r] &&
                  this.vars[r].apply(
                    this.vars[r + "Scope"] || this,
                    this.vars[r + "Params"] || y
                  ),
                0 === h &&
                  this._rawPrevTime === _ &&
                  a !== _ &&
                  (this._rawPrevTime = 0));
          }
        }),
        (n._kill = function (t, e, i) {
          if (
            ("all" === t && (t = null),
            null == t && (null == e || e === this.target))
          )
            return (this._lazy = !1), this._enabled(!1, !1);
          e =
            "string" != typeof e
              ? e || this._targets || this.target
              : D.selector(e) || e;
          var s, r, n, a, o, h, l, _, u;
          if ((c(e) || M(e)) && "number" != typeof e[0])
            for (s = e.length; --s > -1; ) this._kill(t, e[s]) && (h = !0);
          else {
            if (this._targets) {
              for (s = this._targets.length; --s > -1; )
                if (e === this._targets[s]) {
                  (o = this._propLookup[s] || {}),
                    (this._overwrittenProps = this._overwrittenProps || []),
                    (r = this._overwrittenProps[s] = t
                      ? this._overwrittenProps[s] || {}
                      : "all");
                  break;
                }
            } else {
              if (e !== this.target) return !1;
              (o = this._propLookup),
                (r = this._overwrittenProps = t
                  ? this._overwrittenProps || {}
                  : "all");
            }
            if (o) {
              if (
                ((l = t || o),
                (_ =
                  t !== r &&
                  "all" !== r &&
                  t !== o &&
                  ("object" != typeof t || !t._tempKill)),
                i && (D.onOverwrite || this.vars.onOverwrite))
              ) {
                for (n in l) o[n] && (u || (u = []), u.push(n));
                if (!G(this, i, e, u)) return !1;
              }
              for (n in l)
                (a = o[n]) &&
                  (a.pg && a.t._kill(l) && (h = !0),
                  (a.pg && 0 !== a.t._overwriteProps.length) ||
                    (a._prev
                      ? (a._prev._next = a._next)
                      : a === this._firstPT && (this._firstPT = a._next),
                    a._next && (a._next._prev = a._prev),
                    (a._next = a._prev = null)),
                  delete o[n]),
                  _ && (r[n] = 1);
              !this._firstPT && this._initted && this._enabled(!1, !1);
            }
          }
          return h;
        }),
        (n.invalidate = function () {
          return (
            this._notifyPluginsOfEnabled &&
              D._onPluginEvent("_onDisable", this),
            (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
            (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
            (this._propLookup = this._targets ? {} : []),
            A.prototype.invalidate.call(this),
            this.vars.immediateRender &&
              ((this._time = -_), this.render(-this._delay)),
            this
          );
        }),
        (n._enabled = function (t, e) {
          if ((o || a.wake(), t && this._gc)) {
            var i,
              s = this._targets;
            if (s)
              for (i = s.length; --i > -1; )
                this._siblings[i] = V(s[i], this, !0);
            else this._siblings = V(this.target, this, !0);
          }
          return (
            A.prototype._enabled.call(this, t, e),
            this._notifyPluginsOfEnabled && this._firstPT
              ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
              : !1
          );
        }),
        (D.to = function (t, e, i) {
          return new D(t, e, i);
        }),
        (D.from = function (t, e, i) {
          return (
            (i.runBackwards = !0),
            (i.immediateRender = 0 != i.immediateRender),
            new D(t, e, i)
          );
        }),
        (D.fromTo = function (t, e, i, s) {
          return (
            (s.startAt = i),
            (s.immediateRender =
              0 != s.immediateRender && 0 != i.immediateRender),
            new D(t, e, s)
          );
        }),
        (D.delayedCall = function (t, e, i, s, r) {
          return new D(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: i,
            onCompleteScope: s,
            onReverseComplete: e,
            onReverseCompleteParams: i,
            onReverseCompleteScope: s,
            immediateRender: !1,
            lazy: !1,
            useFrames: r,
            overwrite: 0,
          });
        }),
        (D.set = function (t, e) {
          return new D(t, 0, e);
        }),
        (D.getTweensOf = function (t, e) {
          if (null == t) return [];
          t = "string" != typeof t ? t : D.selector(t) || t;
          var i, s, r, n;
          if ((c(t) || M(t)) && "number" != typeof t[0]) {
            for (i = t.length, s = []; --i > -1; )
              s = s.concat(D.getTweensOf(t[i], e));
            for (i = s.length; --i > -1; )
              for (n = s[i], r = i; --r > -1; ) n === s[r] && s.splice(i, 1);
          } else
            for (s = V(t).concat(), i = s.length; --i > -1; )
              (s[i]._gc || (e && !s[i].isActive())) && s.splice(i, 1);
          return s;
        }),
        (D.killTweensOf = D.killDelayedCallsTo = function (t, e, i) {
          "object" == typeof e && ((i = e), (e = !1));
          for (var s = D.getTweensOf(t, e), r = s.length; --r > -1; )
            s[r]._kill(i, t);
        });
      var Q = g(
        "plugins.TweenPlugin",
        function (t, e) {
          (this._overwriteProps = (t || "").split(",")),
            (this._propName = this._overwriteProps[0]),
            (this._priority = e || 0),
            (this._super = Q.prototype);
        },
        !0
      );
      if (
        ((n = Q.prototype),
        (Q.version = "1.10.1"),
        (Q.API = 2),
        (n._firstPT = null),
        (n._addTween = function (t, e, i, s, r, n) {
          var a, o;
          return null != s &&
            (a =
              "number" == typeof s || "=" !== s.charAt(1)
                ? Number(s) - i
                : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)))
            ? ((this._firstPT = o = {
                _next: this._firstPT,
                t: t,
                p: e,
                s: i,
                c: a,
                f: "function" == typeof t[e],
                n: r || e,
                r: n,
              }),
              o._next && (o._next._prev = o),
              o)
            : void 0;
        }),
        (n.setRatio = function (t) {
          for (var e, i = this._firstPT, s = 1e-6; i; )
            (e = i.c * t + i.s),
              i.r ? (e = Math.round(e)) : s > e && e > -s && (e = 0),
              i.f ? i.t[i.p](e) : (i.t[i.p] = e),
              (i = i._next);
        }),
        (n._kill = function (t) {
          var e,
            i = this._overwriteProps,
            s = this._firstPT;
          if (null != t[this._propName]) this._overwriteProps = [];
          else for (e = i.length; --e > -1; ) null != t[i[e]] && i.splice(e, 1);
          for (; s; )
            null != t[s.n] &&
              (s._next && (s._next._prev = s._prev),
              s._prev
                ? ((s._prev._next = s._next), (s._prev = null))
                : this._firstPT === s && (this._firstPT = s._next)),
              (s = s._next);
          return !1;
        }),
        (n._roundProps = function (t, e) {
          for (var i = this._firstPT; i; )
            (t[this._propName] ||
              (null != i.n && t[i.n.split(this._propName + "_").join("")])) &&
              (i.r = e),
              (i = i._next);
        }),
        (D._onPluginEvent = function (t, e) {
          var i,
            s,
            r,
            n,
            a,
            o = e._firstPT;
          if ("_onInitAllProps" === t) {
            for (; o; ) {
              for (a = o._next, s = r; s && s.pr > o.pr; ) s = s._next;
              (o._prev = s ? s._prev : n) ? (o._prev._next = o) : (r = o),
                (o._next = s) ? (s._prev = o) : (n = o),
                (o = a);
            }
            o = e._firstPT = r;
          }
          for (; o; )
            o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
              (o = o._next);
          return i;
        }),
        (Q.activate = function (t) {
          for (var e = t.length; --e > -1; )
            t[e].API === Q.API && (N[new t[e]()._propName] = t[e]);
          return !0;
        }),
        (d.plugin = function (t) {
          if (!(t && t.propName && t.init && t.API))
            throw "illegal plugin definition.";
          var e,
            i = t.propName,
            s = t.priority || 0,
            r = t.overwriteProps,
            n = {
              init: "_onInitTween",
              set: "setRatio",
              kill: "_kill",
              round: "_roundProps",
              initAll: "_onInitAllProps",
            },
            a = g(
              "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
              function () {
                Q.call(this, i, s), (this._overwriteProps = r || []);
              },
              t.global === !0
            ),
            o = (a.prototype = new Q(i));
          (o.constructor = a), (a.API = t.API);
          for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
          return (a.version = t.version), Q.activate([a]), a;
        }),
        (s = t._gsQueue))
      ) {
        for (r = 0; s.length > r; r++) s[r]();
        for (n in f)
          f[n].func ||
            t.console.log(
              "GSAP encountered missing dependency: com.greensock." + n
            );
      }
      o = !1;
    }
  })(
    "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof global
      ? global
      : this || window,
    "TweenMax"
  );

/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define(t)
    : "object" == typeof exports
    ? (module.exports = t())
    : (e.ScrollMagic = t());
})(this, function () {
  "use strict";
  var e = function () {};
  (e.version = "2.0.5"), window.addEventListener("mousewheel", function () {});
  var t = "data-scrollmagic-pin-spacer";
  e.Controller = function (r) {
    var o,
      s,
      a = "ScrollMagic.Controller",
      l = "FORWARD",
      c = "REVERSE",
      u = "PAUSED",
      f = n.defaults,
      d = this,
      h = i.extend({}, f, r),
      g = [],
      p = !1,
      v = 0,
      m = u,
      w = !0,
      y = 0,
      S = !0,
      b = function () {
        for (var e in h) f.hasOwnProperty(e) || delete h[e];
        if (((h.container = i.get.elements(h.container)[0]), !h.container))
          throw a + " init failed.";
        (w =
          h.container === window ||
          h.container === document.body ||
          !document.body.contains(h.container)),
          w && (h.container = window),
          (y = z()),
          h.container.addEventListener("resize", T),
          h.container.addEventListener("scroll", T),
          (h.refreshInterval =
            parseInt(h.refreshInterval) || f.refreshInterval),
          E();
      },
      E = function () {
        h.refreshInterval > 0 && (s = window.setTimeout(A, h.refreshInterval));
      },
      x = function () {
        return h.vertical
          ? i.get.scrollTop(h.container)
          : i.get.scrollLeft(h.container);
      },
      z = function () {
        return h.vertical
          ? i.get.height(h.container)
          : i.get.width(h.container);
      },
      C = (this._setScrollPos = function (e) {
        h.vertical
          ? w
            ? window.scrollTo(i.get.scrollLeft(), e)
            : (h.container.scrollTop = e)
          : w
          ? window.scrollTo(e, i.get.scrollTop())
          : (h.container.scrollLeft = e);
      }),
      F = function () {
        if (S && p) {
          var e = i.type.Array(p) ? p : g.slice(0);
          p = !1;
          var t = v;
          v = d.scrollPos();
          var n = v - t;
          0 !== n && (m = n > 0 ? l : c),
            m === c && e.reverse(),
            e.forEach(function (e) {
              e.update(!0);
            });
        }
      },
      L = function () {
        o = i.rAF(F);
      },
      T = function (e) {
        "resize" == e.type && ((y = z()), (m = u)), p !== !0 && ((p = !0), L());
      },
      A = function () {
        if (!w && y != z()) {
          var e;
          try {
            e = new Event("resize", { bubbles: !1, cancelable: !1 });
          } catch (t) {
            (e = document.createEvent("Event")), e.initEvent("resize", !1, !1);
          }
          h.container.dispatchEvent(e);
        }
        g.forEach(function (e) {
          e.refresh();
        }),
          E();
      };
    this._options = h;
    var O = function (e) {
      if (e.length <= 1) return e;
      var t = e.slice(0);
      return (
        t.sort(function (e, t) {
          return e.scrollOffset() > t.scrollOffset() ? 1 : -1;
        }),
        t
      );
    };
    return (
      (this.addScene = function (t) {
        if (i.type.Array(t))
          t.forEach(function (e) {
            d.addScene(e);
          });
        else if (t instanceof e.Scene)
          if (t.controller() !== d) t.addTo(d);
          else if (g.indexOf(t) < 0) {
            g.push(t),
              (g = O(g)),
              t.on("shift.controller_sort", function () {
                g = O(g);
              });
            for (var n in h.globalSceneOptions)
              t[n] && t[n].call(t, h.globalSceneOptions[n]);
          }
        return d;
      }),
      (this.removeScene = function (e) {
        if (i.type.Array(e))
          e.forEach(function (e) {
            d.removeScene(e);
          });
        else {
          var t = g.indexOf(e);
          t > -1 &&
            (e.off("shift.controller_sort"), g.splice(t, 1), e.remove());
        }
        return d;
      }),
      (this.updateScene = function (t, n) {
        return (
          i.type.Array(t)
            ? t.forEach(function (e) {
                d.updateScene(e, n);
              })
            : n
            ? t.update(!0)
            : p !== !0 &&
              t instanceof e.Scene &&
              ((p = p || []), -1 == p.indexOf(t) && p.push(t), (p = O(p)), L()),
          d
        );
      }),
      (this.update = function (e) {
        return T({ type: "resize" }), e && F(), d;
      }),
      (this.scrollTo = function (n, r) {
        if (i.type.Number(n)) C.call(h.container, n, r);
        else if (n instanceof e.Scene)
          n.controller() === d && d.scrollTo(n.scrollOffset(), r);
        else if (i.type.Function(n)) C = n;
        else {
          var o = i.get.elements(n)[0];
          if (o) {
            for (; o.parentNode.hasAttribute(t); ) o = o.parentNode;
            var s = h.vertical ? "top" : "left",
              a = i.get.offset(h.container),
              l = i.get.offset(o);
            w || (a[s] -= d.scrollPos()), d.scrollTo(l[s] - a[s], r);
          }
        }
        return d;
      }),
      (this.scrollPos = function (e) {
        return arguments.length
          ? (i.type.Function(e) && (x = e), d)
          : x.call(d);
      }),
      (this.info = function (e) {
        var t = {
          size: y,
          vertical: h.vertical,
          scrollPos: v,
          scrollDirection: m,
          container: h.container,
          isDocument: w,
        };
        return arguments.length ? (void 0 !== t[e] ? t[e] : void 0) : t;
      }),
      (this.loglevel = function () {
        return d;
      }),
      (this.enabled = function (e) {
        return arguments.length
          ? (S != e && ((S = !!e), d.updateScene(g, !0)), d)
          : S;
      }),
      (this.destroy = function (e) {
        window.clearTimeout(s);
        for (var t = g.length; t--; ) g[t].destroy(e);
        return (
          h.container.removeEventListener("resize", T),
          h.container.removeEventListener("scroll", T),
          i.cAF(o),
          null
        );
      }),
      b(),
      d
    );
  };
  var n = {
    defaults: {
      container: window,
      vertical: !0,
      globalSceneOptions: {},
      loglevel: 2,
      refreshInterval: 100,
    },
  };
  (e.Controller.addOption = function (e, t) {
    n.defaults[e] = t;
  }),
    (e.Controller.extend = function (t) {
      var n = this;
      (e.Controller = function () {
        return (
          n.apply(this, arguments),
          (this.$super = i.extend({}, this)),
          t.apply(this, arguments) || this
        );
      }),
        i.extend(e.Controller, n),
        (e.Controller.prototype = n.prototype),
        (e.Controller.prototype.constructor = e.Controller);
    }),
    (e.Scene = function (n) {
      var o,
        s,
        a = "BEFORE",
        l = "DURING",
        c = "AFTER",
        u = r.defaults,
        f = this,
        d = i.extend({}, u, n),
        h = a,
        g = 0,
        p = { start: 0, end: 0 },
        v = 0,
        m = !0,
        w = function () {
          for (var e in d) u.hasOwnProperty(e) || delete d[e];
          for (var t in u) L(t);
          C();
        },
        y = {};
      (this.on = function (e, t) {
        return (
          i.type.Function(t) &&
            ((e = e.trim().split(" ")),
            e.forEach(function (e) {
              var n = e.split("."),
                r = n[0],
                i = n[1];
              "*" != r &&
                (y[r] || (y[r] = []),
                y[r].push({ namespace: i || "", callback: t }));
            })),
          f
        );
      }),
        (this.off = function (e, t) {
          return e
            ? ((e = e.trim().split(" ")),
              e.forEach(function (e) {
                var n = e.split("."),
                  r = n[0],
                  i = n[1] || "",
                  o = "*" === r ? Object.keys(y) : [r];
                o.forEach(function (e) {
                  for (var n = y[e] || [], r = n.length; r--; ) {
                    var o = n[r];
                    !o ||
                      (i !== o.namespace && "*" !== i) ||
                      (t && t != o.callback) ||
                      n.splice(r, 1);
                  }
                  n.length || delete y[e];
                });
              }),
              f)
            : f;
        }),
        (this.trigger = function (t, n) {
          if (t) {
            var r = t.trim().split("."),
              i = r[0],
              o = r[1],
              s = y[i];
            s &&
              s.forEach(function (t) {
                (o && o !== t.namespace) ||
                  t.callback.call(f, new e.Event(i, t.namespace, f, n));
              });
          }
          return f;
        }),
        f
          .on("change.internal", function (e) {
            "loglevel" !== e.what &&
              "tweenChanges" !== e.what &&
              ("triggerElement" === e.what
                ? E()
                : "reverse" === e.what && f.update());
          })
          .on("shift.internal", function () {
            S(), f.update();
          }),
        (this.addTo = function (t) {
          return (
            t instanceof e.Controller &&
              s != t &&
              (s && s.removeScene(f),
              (s = t),
              C(),
              b(!0),
              E(!0),
              S(),
              s.info("container").addEventListener("resize", x),
              t.addScene(f),
              f.trigger("add", { controller: s }),
              f.update()),
            f
          );
        }),
        (this.enabled = function (e) {
          return arguments.length
            ? (m != e && ((m = !!e), f.update(!0)), f)
            : m;
        }),
        (this.remove = function () {
          if (s) {
            s.info("container").removeEventListener("resize", x);
            var e = s;
            (s = void 0), e.removeScene(f), f.trigger("remove");
          }
          return f;
        }),
        (this.destroy = function (e) {
          return (
            f.trigger("destroy", { reset: e }), f.remove(), f.off("*.*"), null
          );
        }),
        (this.update = function (e) {
          if (s)
            if (e)
              if (s.enabled() && m) {
                var t,
                  n = s.info("scrollPos");
                (t =
                  d.duration > 0
                    ? (n - p.start) / (p.end - p.start)
                    : n >= p.start
                    ? 1
                    : 0),
                  f.trigger("update", {
                    startPos: p.start,
                    endPos: p.end,
                    scrollPos: n,
                  }),
                  f.progress(t);
              } else T && h === l && O(!0);
            else s.updateScene(f, !1);
          return f;
        }),
        (this.refresh = function () {
          return b(), E(), f;
        }),
        (this.progress = function (e) {
          if (arguments.length) {
            var t = !1,
              n = h,
              r = s ? s.info("scrollDirection") : "PAUSED",
              i = d.reverse || e >= g;
            if (
              (0 === d.duration
                ? ((t = g != e),
                  (g = 1 > e && i ? 0 : 1),
                  (h = 0 === g ? a : l))
                : 0 > e && h !== a && i
                ? ((g = 0), (h = a), (t = !0))
                : e >= 0 && 1 > e && i
                ? ((g = e), (h = l), (t = !0))
                : e >= 1 && h !== c
                ? ((g = 1), (h = c), (t = !0))
                : h !== l || i || O(),
              t)
            ) {
              var o = { progress: g, state: h, scrollDirection: r },
                u = h != n,
                p = function (e) {
                  f.trigger(e, o);
                };
              u && n !== l && (p("enter"), p(n === a ? "start" : "end")),
                p("progress"),
                u && h !== l && (p(h === a ? "start" : "end"), p("leave"));
            }
            return f;
          }
          return g;
        });
      var S = function () {
          (p = { start: v + d.offset }),
            s &&
              d.triggerElement &&
              (p.start -= s.info("size") * d.triggerHook),
            (p.end = p.start + d.duration);
        },
        b = function (e) {
          if (o) {
            var t = "duration";
            F(t, o.call(f)) &&
              !e &&
              (f.trigger("change", { what: t, newval: d[t] }),
              f.trigger("shift", { reason: t }));
          }
        },
        E = function (e) {
          var n = 0,
            r = d.triggerElement;
          if (s && r) {
            for (
              var o = s.info(),
                a = i.get.offset(o.container),
                l = o.vertical ? "top" : "left";
              r.parentNode.hasAttribute(t);

            )
              r = r.parentNode;
            var c = i.get.offset(r);
            o.isDocument || (a[l] -= s.scrollPos()), (n = c[l] - a[l]);
          }
          var u = n != v;
          (v = n),
            u && !e && f.trigger("shift", { reason: "triggerElementPosition" });
        },
        x = function () {
          d.triggerHook > 0 &&
            f.trigger("shift", { reason: "containerResize" });
        },
        z = i.extend(r.validate, {
          duration: function (e) {
            if (i.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
              var t = parseFloat(e) / 100;
              e = function () {
                return s ? s.info("size") * t : 0;
              };
            }
            if (i.type.Function(e)) {
              o = e;
              try {
                e = parseFloat(o());
              } catch (n) {
                e = -1;
              }
            }
            if (((e = parseFloat(e)), !i.type.Number(e) || 0 > e))
              throw o ? ((o = void 0), 0) : 0;
            return e;
          },
        }),
        C = function (e) {
          (e = arguments.length ? [e] : Object.keys(z)),
            e.forEach(function (e) {
              var t;
              if (z[e])
                try {
                  t = z[e](d[e]);
                } catch (n) {
                  t = u[e];
                } finally {
                  d[e] = t;
                }
            });
        },
        F = function (e, t) {
          var n = !1,
            r = d[e];
          return d[e] != t && ((d[e] = t), C(e), (n = r != d[e])), n;
        },
        L = function (e) {
          f[e] ||
            (f[e] = function (t) {
              return arguments.length
                ? ("duration" === e && (o = void 0),
                  F(e, t) &&
                    (f.trigger("change", { what: e, newval: d[e] }),
                    r.shifts.indexOf(e) > -1 &&
                      f.trigger("shift", { reason: e })),
                  f)
                : d[e];
            });
        };
      (this.controller = function () {
        return s;
      }),
        (this.state = function () {
          return h;
        }),
        (this.scrollOffset = function () {
          return p.start;
        }),
        (this.triggerPosition = function () {
          var e = d.offset;
          return (
            s && (e += d.triggerElement ? v : s.info("size") * f.triggerHook()),
            e
          );
        });
      var T, A;
      f.on("shift.internal", function (e) {
        var t = "duration" === e.reason;
        ((h === c && t) || (h === l && 0 === d.duration)) && O(), t && _();
      })
        .on("progress.internal", function () {
          O();
        })
        .on("add.internal", function () {
          _();
        })
        .on("destroy.internal", function (e) {
          f.removePin(e.reset);
        });
      var O = function (e) {
          if (T && s) {
            var t = s.info(),
              n = A.spacer.firstChild;
            if (e || h !== l) {
              var r = {
                  position: A.inFlow ? "relative" : "absolute",
                  top: 0,
                  left: 0,
                },
                o = i.css(n, "position") != r.position;
              A.pushFollowers
                ? d.duration > 0 &&
                  (h === c && 0 === parseFloat(i.css(A.spacer, "padding-top"))
                    ? (o = !0)
                    : h === a &&
                      0 === parseFloat(i.css(A.spacer, "padding-bottom")) &&
                      (o = !0))
                : (r[t.vertical ? "top" : "left"] = d.duration * g),
                i.css(n, r),
                o && _();
            } else {
              "fixed" != i.css(n, "position") &&
                (i.css(n, { position: "fixed" }), _());
              var u = i.get.offset(A.spacer, !0),
                f =
                  d.reverse || 0 === d.duration
                    ? t.scrollPos - p.start
                    : Math.round(g * d.duration * 10) / 10;
              (u[t.vertical ? "top" : "left"] += f),
                i.css(A.spacer.firstChild, { top: u.top, left: u.left });
            }
          }
        },
        _ = function () {
          if (T && s && A.inFlow) {
            var e = h === l,
              t = s.info("vertical"),
              n = A.spacer.firstChild,
              r = i.isMarginCollapseType(i.css(A.spacer, "display")),
              o = {};
            A.relSize.width || A.relSize.autoFullWidth
              ? e
                ? i.css(T, { width: i.get.width(A.spacer) })
                : i.css(T, { width: "100%" })
              : ((o["min-width"] = i.get.width(t ? T : n, !0, !0)),
                (o.width = e ? o["min-width"] : "auto")),
              A.relSize.height
                ? e
                  ? i.css(T, {
                      height:
                        i.get.height(A.spacer) -
                        (A.pushFollowers ? d.duration : 0),
                    })
                  : i.css(T, { height: "100%" })
                : ((o["min-height"] = i.get.height(t ? n : T, !0, !r)),
                  (o.height = e ? o["min-height"] : "auto")),
              A.pushFollowers &&
                ((o["padding" + (t ? "Top" : "Left")] = d.duration * g),
                (o["padding" + (t ? "Bottom" : "Right")] =
                  d.duration * (1 - g))),
              i.css(A.spacer, o);
          }
        },
        N = function () {
          s && T && h === l && !s.info("isDocument") && O();
        },
        P = function () {
          s &&
            T &&
            h === l &&
            (((A.relSize.width || A.relSize.autoFullWidth) &&
              i.get.width(window) != i.get.width(A.spacer.parentNode)) ||
              (A.relSize.height &&
                i.get.height(window) != i.get.height(A.spacer.parentNode))) &&
            _();
        },
        D = function (e) {
          s &&
            T &&
            h === l &&
            !s.info("isDocument") &&
            (e.preventDefault(),
            s._setScrollPos(
              s.info("scrollPos") -
                ((e.wheelDelta ||
                  e[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 ||
                  30 * -e.detail)
            ));
        };
      (this.setPin = function (e, n) {
        var r = { pushFollowers: !0, spacerClass: "scrollmagic-pin-spacer" };
        if (((n = i.extend({}, r, n)), (e = i.get.elements(e)[0]), !e))
          return f;
        if ("fixed" === i.css(e, "position")) return f;
        if (T) {
          if (T === e) return f;
          f.removePin();
        }
        T = e;
        var o = T.parentNode.style.display,
          s = [
            "top",
            "left",
            "bottom",
            "right",
            "margin",
            "marginLeft",
            "marginRight",
            "marginTop",
            "marginBottom",
          ];
        T.parentNode.style.display = "none";
        var a = "absolute" != i.css(T, "position"),
          l = i.css(T, s.concat(["display"])),
          c = i.css(T, ["width", "height"]);
        (T.parentNode.style.display = o),
          !a && n.pushFollowers && (n.pushFollowers = !1);
        var u = T.parentNode.insertBefore(document.createElement("div"), T),
          d = i.extend(l, {
            position: a ? "relative" : "absolute",
            boxSizing: "content-box",
            mozBoxSizing: "content-box",
            webkitBoxSizing: "content-box",
          });
        if (
          (a || i.extend(d, i.css(T, ["width", "height"])),
          i.css(u, d),
          u.setAttribute(t, ""),
          i.addClass(u, n.spacerClass),
          (A = {
            spacer: u,
            relSize: {
              width: "%" === c.width.slice(-1),
              height: "%" === c.height.slice(-1),
              autoFullWidth:
                "auto" === c.width && a && i.isMarginCollapseType(l.display),
            },
            pushFollowers: n.pushFollowers,
            inFlow: a,
          }),
          !T.___origStyle)
        ) {
          T.___origStyle = {};
          var h = T.style,
            g = s.concat([
              "width",
              "height",
              "position",
              "boxSizing",
              "mozBoxSizing",
              "webkitBoxSizing",
            ]);
          g.forEach(function (e) {
            T.___origStyle[e] = h[e] || "";
          });
        }
        return (
          A.relSize.width && i.css(u, { width: c.width }),
          A.relSize.height && i.css(u, { height: c.height }),
          u.appendChild(T),
          i.css(T, {
            position: a ? "relative" : "absolute",
            margin: "auto",
            top: "auto",
            left: "auto",
            bottom: "auto",
            right: "auto",
          }),
          (A.relSize.width || A.relSize.autoFullWidth) &&
            i.css(T, {
              boxSizing: "border-box",
              mozBoxSizing: "border-box",
              webkitBoxSizing: "border-box",
            }),
          window.addEventListener("scroll", N),
          window.addEventListener("resize", N),
          window.addEventListener("resize", P),
          T.addEventListener("mousewheel", D),
          T.addEventListener("DOMMouseScroll", D),
          O(),
          f
        );
      }),
        (this.removePin = function (e) {
          if (T) {
            if ((h === l && O(!0), e || !s)) {
              var n = A.spacer.firstChild;
              if (n.hasAttribute(t)) {
                var r = A.spacer.style,
                  o = [
                    "margin",
                    "marginLeft",
                    "marginRight",
                    "marginTop",
                    "marginBottom",
                  ];
                (margins = {}),
                  o.forEach(function (e) {
                    margins[e] = r[e] || "";
                  }),
                  i.css(n, margins);
              }
              A.spacer.parentNode.insertBefore(n, A.spacer),
                A.spacer.parentNode.removeChild(A.spacer),
                T.parentNode.hasAttribute(t) ||
                  (i.css(T, T.___origStyle), delete T.___origStyle);
            }
            window.removeEventListener("scroll", N),
              window.removeEventListener("resize", N),
              window.removeEventListener("resize", P),
              T.removeEventListener("mousewheel", D),
              T.removeEventListener("DOMMouseScroll", D),
              (T = void 0);
          }
          return f;
        });
      var R,
        k = [];
      return (
        f.on("destroy.internal", function (e) {
          f.removeClassToggle(e.reset);
        }),
        (this.setClassToggle = function (e, t) {
          var n = i.get.elements(e);
          return 0 !== n.length && i.type.String(t)
            ? (k.length > 0 && f.removeClassToggle(),
              (R = t),
              (k = n),
              f.on("enter.internal_class leave.internal_class", function (e) {
                var t = "enter" === e.type ? i.addClass : i.removeClass;
                k.forEach(function (e) {
                  t(e, R);
                });
              }),
              f)
            : f;
        }),
        (this.removeClassToggle = function (e) {
          return (
            e &&
              k.forEach(function (e) {
                i.removeClass(e, R);
              }),
            f.off("start.internal_class end.internal_class"),
            (R = void 0),
            (k = []),
            f
          );
        }),
        w(),
        f
      );
    });
  var r = {
    defaults: {
      duration: 0,
      offset: 0,
      triggerElement: void 0,
      triggerHook: 0.5,
      reverse: !0,
      loglevel: 2,
    },
    validate: {
      offset: function (e) {
        if (((e = parseFloat(e)), !i.type.Number(e))) throw 0;
        return e;
      },
      triggerElement: function (e) {
        if ((e = e || void 0)) {
          var t = i.get.elements(e)[0];
          if (!t) throw 0;
          e = t;
        }
        return e;
      },
      triggerHook: function (e) {
        var t = { onCenter: 0.5, onEnter: 1, onLeave: 0 };
        if (i.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
        else {
          if (!(e in t)) throw 0;
          e = t[e];
        }
        return e;
      },
      reverse: function (e) {
        return !!e;
      },
    },
    shifts: ["duration", "offset", "triggerHook"],
  };
  (e.Scene.addOption = function (e, t, n, i) {
    e in r.defaults ||
      ((r.defaults[e] = t), (r.validate[e] = n), i && r.shifts.push(e));
  }),
    (e.Scene.extend = function (t) {
      var n = this;
      (e.Scene = function () {
        return (
          n.apply(this, arguments),
          (this.$super = i.extend({}, this)),
          t.apply(this, arguments) || this
        );
      }),
        i.extend(e.Scene, n),
        (e.Scene.prototype = n.prototype),
        (e.Scene.prototype.constructor = e.Scene);
    }),
    (e.Event = function (e, t, n, r) {
      r = r || {};
      for (var i in r) this[i] = r[i];
      return (
        (this.type = e),
        (this.target = this.currentTarget = n),
        (this.namespace = t || ""),
        (this.timeStamp = this.timestamp = Date.now()),
        this
      );
    });
  var i = (e._util = (function (e) {
    var t,
      n = {},
      r = function (e) {
        return parseFloat(e) || 0;
      },
      i = function (t) {
        return t.currentStyle ? t.currentStyle : e.getComputedStyle(t);
      },
      o = function (t, n, o, s) {
        if (((n = n === document ? e : n), n === e)) s = !1;
        else if (!f.DomElement(n)) return 0;
        t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
        var a =
          (o
            ? n["offset" + t] || n["outer" + t]
            : n["client" + t] || n["inner" + t]) || 0;
        if (o && s) {
          var l = i(n);
          a +=
            "Height" === t
              ? r(l.marginTop) + r(l.marginBottom)
              : r(l.marginLeft) + r(l.marginRight);
        }
        return a;
      },
      s = function (e) {
        return e
          .replace(/^[^a-z]+([a-z])/g, "$1")
          .replace(/-([a-z])/g, function (e) {
            return e[1].toUpperCase();
          });
      };
    (n.extend = function (e) {
      for (e = e || {}, t = 1; t < arguments.length; t++)
        if (arguments[t])
          for (var n in arguments[t])
            arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
      return e;
    }),
      (n.isMarginCollapseType = function (e) {
        return (
          ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1
        );
      });
    var a = 0,
      l = ["ms", "moz", "webkit", "o"],
      c = e.requestAnimationFrame,
      u = e.cancelAnimationFrame;
    for (t = 0; !c && t < l.length; ++t)
      (c = e[l[t] + "RequestAnimationFrame"]),
        (u =
          e[l[t] + "CancelAnimationFrame"] ||
          e[l[t] + "CancelRequestAnimationFrame"]);
    c ||
      (c = function (t) {
        var n = new Date().getTime(),
          r = Math.max(0, 16 - (n - a)),
          i = e.setTimeout(function () {
            t(n + r);
          }, r);
        return (a = n + r), i;
      }),
      u ||
        (u = function (t) {
          e.clearTimeout(t);
        }),
      (n.rAF = c.bind(e)),
      (n.cAF = u.bind(e));
    var f = (n.type = function (e) {
      return Object.prototype.toString
        .call(e)
        .replace(/^\[object (.+)\]$/, "$1")
        .toLowerCase();
    });
    (f.String = function (e) {
      return "string" === f(e);
    }),
      (f.Function = function (e) {
        return "function" === f(e);
      }),
      (f.Array = function (e) {
        return Array.isArray(e);
      }),
      (f.Number = function (e) {
        return !f.Array(e) && e - parseFloat(e) + 1 >= 0;
      }),
      (f.DomElement = function (e) {
        return "object" == typeof HTMLElement
          ? e instanceof HTMLElement
          : e &&
              "object" == typeof e &&
              null !== e &&
              1 === e.nodeType &&
              "string" == typeof e.nodeName;
      });
    var d = (n.get = {});
    return (
      (d.elements = function (t) {
        var n = [];
        if (f.String(t))
          try {
            t = document.querySelectorAll(t);
          } catch (r) {
            return n;
          }
        if ("nodelist" === f(t) || f.Array(t))
          for (var i = 0, o = (n.length = t.length); o > i; i++) {
            var s = t[i];
            n[i] = f.DomElement(s) ? s : d.elements(s);
          }
        else (f.DomElement(t) || t === document || t === e) && (n = [t]);
        return n;
      }),
      (d.scrollTop = function (t) {
        return t && "number" == typeof t.scrollTop
          ? t.scrollTop
          : e.pageYOffset || 0;
      }),
      (d.scrollLeft = function (t) {
        return t && "number" == typeof t.scrollLeft
          ? t.scrollLeft
          : e.pageXOffset || 0;
      }),
      (d.width = function (e, t, n) {
        return o("width", e, t, n);
      }),
      (d.height = function (e, t, n) {
        return o("height", e, t, n);
      }),
      (d.offset = function (e, t) {
        var n = { top: 0, left: 0 };
        if (e && e.getBoundingClientRect) {
          var r = e.getBoundingClientRect();
          (n.top = r.top),
            (n.left = r.left),
            t || ((n.top += d.scrollTop()), (n.left += d.scrollLeft()));
        }
        return n;
      }),
      (n.addClass = function (e, t) {
        t && (e.classList ? e.classList.add(t) : (e.className += " " + t));
      }),
      (n.removeClass = function (e, t) {
        t &&
          (e.classList
            ? e.classList.remove(t)
            : (e.className = e.className.replace(
                RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"),
                " "
              )));
      }),
      (n.css = function (e, t) {
        if (f.String(t)) return i(e)[s(t)];
        if (f.Array(t)) {
          var n = {},
            r = i(e);
          return (
            t.forEach(function (e) {
              n[e] = r[s(e)];
            }),
            n
          );
        }
        for (var o in t) {
          var a = t[o];
          a == parseFloat(a) && (a += "px"), (e.style[s(o)] = a);
        }
      }),
      n
    );
  })(window || {}));
  return e;
});

/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-28
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  _gsScope._gsDefine(
    "plugins.CSSPlugin",
    ["plugins.TweenPlugin", "TweenLite"],
    function (t, e) {
      var i,
        r,
        s,
        n,
        a = function () {
          t.call(this, "css"),
            (this._overwriteProps.length = 0),
            (this.setRatio = a.prototype.setRatio);
        },
        o = {},
        l = (a.prototype = new t("css"));
      (l.constructor = a),
        (a.version = "1.14.2"),
        (a.API = 2),
        (a.defaultTransformPerspective = 0),
        (a.defaultSkewType = "compensated"),
        (l = "px"),
        (a.suffixMap = {
          top: l,
          right: l,
          bottom: l,
          left: l,
          width: l,
          height: l,
          fontSize: l,
          padding: l,
          margin: l,
          perspective: l,
          lineHeight: "",
        });
      var h,
        u,
        f,
        p,
        _,
        c,
        d = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
        m = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
        g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
        v = /(?![+-]?\d*\.?\d+|e[+-]\d+)[^0-9]/g,
        y = /(?:\d|\-|\+|=|#|\.)*/g,
        x = /opacity *= *([^)]*)/i,
        T = /opacity:([^;]*)/i,
        w = /alpha\(opacity *=.+?\)/i,
        b = /^(rgb|hsl)/,
        P = /([A-Z])/g,
        S = /-([a-z])/gi,
        R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
        C = function (t, e) {
          return e.toUpperCase();
        },
        k = /(?:Left|Right|Width)/i,
        O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
        A = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
        D = /,(?=[^\)]*(?:\(|$))/gi,
        M = Math.PI / 180,
        L = 180 / Math.PI,
        N = {},
        z = document,
        X = z.createElement("div"),
        I = z.createElement("img"),
        E = (a._internals = { _specialProps: o }),
        F = navigator.userAgent,
        Y = (function () {
          var t,
            e = F.indexOf("Android"),
            i = z.createElement("div");
          return (
            (f =
              -1 !== F.indexOf("Safari") &&
              -1 === F.indexOf("Chrome") &&
              (-1 === e || Number(F.substr(e + 8, 1)) > 3)),
            (_ = f && 6 > Number(F.substr(F.indexOf("Version/") + 8, 1))),
            (p = -1 !== F.indexOf("Firefox")),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(F) ||
              /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(F)) &&
              (c = parseFloat(RegExp.$1)),
            (i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>"),
            (t = i.getElementsByTagName("a")[0]),
            t ? /^0.55/.test(t.style.opacity) : !1
          );
        })(),
        B = function (t) {
          return x.test(
            "string" == typeof t
              ? t
              : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || ""
          )
            ? parseFloat(RegExp.$1) / 100
            : 1;
        },
        U = function (t) {
          window.console && console.log(t);
        },
        j = "",
        W = "",
        V = function (t, e) {
          e = e || X;
          var i,
            r,
            s = e.style;
          if (void 0 !== s[t]) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1),
              i = ["O", "Moz", "ms", "Ms", "Webkit"],
              r = 5;
            --r > -1 && void 0 === s[i[r] + t];

          );
          return r >= 0
            ? ((W = 3 === r ? "ms" : i[r]),
              (j = "-" + W.toLowerCase() + "-"),
              W + t)
            : null;
        },
        q = z.defaultView ? z.defaultView.getComputedStyle : function () {},
        H = (a.getStyle = function (t, e, i, r, s) {
          var n;
          return Y || "opacity" !== e
            ? (!r && t.style[e]
                ? (n = t.style[e])
                : (i = i || q(t))
                ? (n =
                    i[e] ||
                    i.getPropertyValue(e) ||
                    i.getPropertyValue(e.replace(P, "-$1").toLowerCase()))
                : t.currentStyle && (n = t.currentStyle[e]),
              null == s ||
              (n && "none" !== n && "auto" !== n && "auto auto" !== n)
                ? n
                : s)
            : B(t);
        }),
        G = (E.convertToPixels = function (t, i, r, s, n) {
          if ("px" === s || !s) return r;
          if ("auto" === s || !r) return 0;
          var o,
            l,
            h,
            u = k.test(i),
            f = t,
            p = X.style,
            _ = 0 > r;
          if ((_ && (r = -r), "%" === s && -1 !== i.indexOf("border")))
            o = (r / 100) * (u ? t.clientWidth : t.clientHeight);
          else {
            if (
              ((p.cssText =
                "border:0 solid red;position:" +
                H(t, "position") +
                ";line-height:0;"),
              "%" !== s && f.appendChild)
            )
              p[u ? "borderLeftWidth" : "borderTopWidth"] = r + s;
            else {
              if (
                ((f = t.parentNode || z.body),
                (l = f._gsCache),
                (h = e.ticker.frame),
                l && u && l.time === h)
              )
                return (l.width * r) / 100;
              p[u ? "width" : "height"] = r + s;
            }
            f.appendChild(X),
              (o = parseFloat(X[u ? "offsetWidth" : "offsetHeight"])),
              f.removeChild(X),
              u &&
                "%" === s &&
                a.cacheWidths !== !1 &&
                ((l = f._gsCache = f._gsCache || {}),
                (l.time = h),
                (l.width = 100 * (o / r))),
              0 !== o || n || (o = G(t, i, r, s, !0));
          }
          return _ ? -o : o;
        }),
        Q = (E.calculateOffset = function (t, e, i) {
          if ("absolute" !== H(t, "position", i)) return 0;
          var r = "left" === e ? "Left" : "Top",
            s = H(t, "margin" + r, i);
          return (
            t["offset" + r] - (G(t, e, parseFloat(s), s.replace(y, "")) || 0)
          );
        }),
        Z = function (t, e) {
          var i,
            r,
            s = {};
          if ((e = e || q(t, null)))
            if ((i = e.length))
              for (; --i > -1; )
                s[e[i].replace(S, C)] = e.getPropertyValue(e[i]);
            else for (i in e) s[i] = e[i];
          else if ((e = t.currentStyle || t.style))
            for (i in e)
              "string" == typeof i &&
                void 0 === s[i] &&
                (s[i.replace(S, C)] = e[i]);
          return (
            Y || (s.opacity = B(t)),
            (r = Ae(t, e, !1)),
            (s.rotation = r.rotation),
            (s.skewX = r.skewX),
            (s.scaleX = r.scaleX),
            (s.scaleY = r.scaleY),
            (s.x = r.x),
            (s.y = r.y),
            be &&
              ((s.z = r.z),
              (s.rotationX = r.rotationX),
              (s.rotationY = r.rotationY),
              (s.scaleZ = r.scaleZ)),
            s.filters && delete s.filters,
            s
          );
        },
        $ = function (t, e, i, r, s) {
          var n,
            a,
            o,
            l = {},
            h = t.style;
          for (a in i)
            "cssText" !== a &&
              "length" !== a &&
              isNaN(a) &&
              (e[a] !== (n = i[a]) || (s && s[a])) &&
              -1 === a.indexOf("Origin") &&
              ("number" == typeof n || "string" == typeof n) &&
              ((l[a] =
                "auto" !== n || ("left" !== a && "top" !== a)
                  ? ("" !== n && "auto" !== n && "none" !== n) ||
                    "string" != typeof e[a] ||
                    "" === e[a].replace(v, "")
                    ? n
                    : 0
                  : Q(t, a)),
              void 0 !== h[a] && (o = new fe(h, a, h[a], o)));
          if (r) for (a in r) "className" !== a && (l[a] = r[a]);
          return { difs: l, firstMPT: o };
        },
        K = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
        J = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
        te = function (t, e, i) {
          var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
            s = K[e],
            n = s.length;
          for (i = i || q(t, null); --n > -1; )
            (r -= parseFloat(H(t, "padding" + s[n], i, !0)) || 0),
              (r -= parseFloat(H(t, "border" + s[n] + "Width", i, !0)) || 0);
          return r;
        },
        ee = function (t, e) {
          (null == t || "" === t || "auto" === t || "auto auto" === t) &&
            (t = "0 0");
          var i = t.split(" "),
            r =
              -1 !== t.indexOf("left")
                ? "0%"
                : -1 !== t.indexOf("right")
                ? "100%"
                : i[0],
            s =
              -1 !== t.indexOf("top")
                ? "0%"
                : -1 !== t.indexOf("bottom")
                ? "100%"
                : i[1];
          return (
            null == s ? (s = "0") : "center" === s && (s = "50%"),
            ("center" === r ||
              (isNaN(parseFloat(r)) && -1 === (r + "").indexOf("="))) &&
              (r = "50%"),
            e &&
              ((e.oxp = -1 !== r.indexOf("%")),
              (e.oyp = -1 !== s.indexOf("%")),
              (e.oxr = "=" === r.charAt(1)),
              (e.oyr = "=" === s.charAt(1)),
              (e.ox = parseFloat(r.replace(v, ""))),
              (e.oy = parseFloat(s.replace(v, "")))),
            r + " " + s + (i.length > 2 ? " " + i[2] : "")
          );
        },
        ie = function (t, e) {
          return "string" == typeof t && "=" === t.charAt(1)
            ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2))
            : parseFloat(t) - parseFloat(e);
        },
        re = function (t, e) {
          return null == t
            ? e
            : "string" == typeof t && "=" === t.charAt(1)
            ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e
            : parseFloat(t);
        },
        se = function (t, e, i, r) {
          var s,
            n,
            a,
            o,
            l = 1e-6;
          return (
            null == t
              ? (o = e)
              : "number" == typeof t
              ? (o = t)
              : ((s = 360),
                (n = t.split("_")),
                (a =
                  Number(n[0].replace(v, "")) *
                    (-1 === t.indexOf("rad") ? 1 : L) -
                  ("=" === t.charAt(1) ? 0 : e)),
                n.length &&
                  (r && (r[i] = e + a),
                  -1 !== t.indexOf("short") &&
                    ((a %= s),
                    a !== a % (s / 2) && (a = 0 > a ? a + s : a - s)),
                  -1 !== t.indexOf("_cw") && 0 > a
                    ? (a = ((a + 9999999999 * s) % s) - (0 | (a / s)) * s)
                    : -1 !== t.indexOf("ccw") &&
                      a > 0 &&
                      (a = ((a - 9999999999 * s) % s) - (0 | (a / s)) * s)),
                (o = e + a)),
            l > o && o > -l && (o = 0),
            o
          );
        },
        ne = {
          aqua: [0, 255, 255],
          lime: [0, 255, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, 255],
          navy: [0, 0, 128],
          white: [255, 255, 255],
          fuchsia: [255, 0, 255],
          olive: [128, 128, 0],
          yellow: [255, 255, 0],
          orange: [255, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [255, 0, 0],
          pink: [255, 192, 203],
          cyan: [0, 255, 255],
          transparent: [255, 255, 255, 0],
        },
        ae = function (t, e, i) {
          return (
            (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t),
            0 |
              (255 *
                (1 > 6 * t
                  ? e + 6 * (i - e) * t
                  : 0.5 > t
                  ? i
                  : 2 > 3 * t
                  ? e + 6 * (i - e) * (2 / 3 - t)
                  : e) +
                0.5)
          );
        },
        oe = (a.parseColor = function (t) {
          var e, i, r, s, n, a;
          return t && "" !== t
            ? "number" == typeof t
              ? [t >> 16, 255 & (t >> 8), 255 & t]
              : ("," === t.charAt(t.length - 1) &&
                  (t = t.substr(0, t.length - 1)),
                ne[t]
                  ? ne[t]
                  : "#" === t.charAt(0)
                  ? (4 === t.length &&
                      ((e = t.charAt(1)),
                      (i = t.charAt(2)),
                      (r = t.charAt(3)),
                      (t = "#" + e + e + i + i + r + r)),
                    (t = parseInt(t.substr(1), 16)),
                    [t >> 16, 255 & (t >> 8), 255 & t])
                  : "hsl" === t.substr(0, 3)
                  ? ((t = t.match(d)),
                    (s = (Number(t[0]) % 360) / 360),
                    (n = Number(t[1]) / 100),
                    (a = Number(t[2]) / 100),
                    (i = 0.5 >= a ? a * (n + 1) : a + n - a * n),
                    (e = 2 * a - i),
                    t.length > 3 && (t[3] = Number(t[3])),
                    (t[0] = ae(s + 1 / 3, e, i)),
                    (t[1] = ae(s, e, i)),
                    (t[2] = ae(s - 1 / 3, e, i)),
                    t)
                  : ((t = t.match(d) || ne.transparent),
                    (t[0] = Number(t[0])),
                    (t[1] = Number(t[1])),
                    (t[2] = Number(t[2])),
                    t.length > 3 && (t[3] = Number(t[3])),
                    t))
            : ne.black;
        }),
        le = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
      for (l in ne) le += "|" + l + "\\b";
      le = RegExp(le + ")", "gi");
      var he = function (t, e, i, r) {
          if (null == t)
            return function (t) {
              return t;
            };
          var s,
            n = e ? (t.match(le) || [""])[0] : "",
            a = t.split(n).join("").match(g) || [],
            o = t.substr(0, t.indexOf(a[0])),
            l = ")" === t.charAt(t.length - 1) ? ")" : "",
            h = -1 !== t.indexOf(" ") ? " " : ",",
            u = a.length,
            f = u > 0 ? a[0].replace(d, "") : "";
          return u
            ? (s = e
                ? function (t) {
                    var e, p, _, c;
                    if ("number" == typeof t) t += f;
                    else if (r && D.test(t)) {
                      for (
                        c = t.replace(D, "|").split("|"), _ = 0;
                        c.length > _;
                        _++
                      )
                        c[_] = s(c[_]);
                      return c.join(",");
                    }
                    if (
                      ((e = (t.match(le) || [n])[0]),
                      (p = t.split(e).join("").match(g) || []),
                      (_ = p.length),
                      u > _--)
                    )
                      for (; u > ++_; ) p[_] = i ? p[0 | ((_ - 1) / 2)] : a[_];
                    return (
                      o +
                      p.join(h) +
                      h +
                      e +
                      l +
                      (-1 !== t.indexOf("inset") ? " inset" : "")
                    );
                  }
                : function (t) {
                    var e, n, p;
                    if ("number" == typeof t) t += f;
                    else if (r && D.test(t)) {
                      for (
                        n = t.replace(D, "|").split("|"), p = 0;
                        n.length > p;
                        p++
                      )
                        n[p] = s(n[p]);
                      return n.join(",");
                    }
                    if (((e = t.match(g) || []), (p = e.length), u > p--))
                      for (; u > ++p; ) e[p] = i ? e[0 | ((p - 1) / 2)] : a[p];
                    return o + e.join(h) + l;
                  })
            : function (t) {
                return t;
              };
        },
        ue = function (t) {
          return (
            (t = t.split(",")),
            function (e, i, r, s, n, a, o) {
              var l,
                h = (i + "").split(" ");
              for (o = {}, l = 0; 4 > l; l++)
                o[t[l]] = h[l] = h[l] || h[((l - 1) / 2) >> 0];
              return s.parse(e, o, n, a);
            }
          );
        },
        fe =
          ((E._setPluginRatio = function (t) {
            this.plugin.setRatio(t);
            for (
              var e,
                i,
                r,
                s,
                n = this.data,
                a = n.proxy,
                o = n.firstMPT,
                l = 1e-6;
              o;

            )
              (e = a[o.v]),
                o.r ? (e = Math.round(e)) : l > e && e > -l && (e = 0),
                (o.t[o.p] = e),
                (o = o._next);
            if ((n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t))
              for (o = n.firstMPT; o; ) {
                if (((i = o.t), i.type)) {
                  if (1 === i.type) {
                    for (s = i.xs0 + i.s + i.xs1, r = 1; i.l > r; r++)
                      s += i["xn" + r] + i["xs" + (r + 1)];
                    i.e = s;
                  }
                } else i.e = i.s + i.xs0;
                o = o._next;
              }
          }),
          function (t, e, i, r, s) {
            (this.t = t),
              (this.p = e),
              (this.v = i),
              (this.r = s),
              r && ((r._prev = this), (this._next = r));
          }),
        pe =
          ((E._parseToProxy = function (t, e, i, r, s, n) {
            var a,
              o,
              l,
              h,
              u,
              f = r,
              p = {},
              _ = {},
              c = i._transform,
              d = N;
            for (
              i._transform = null,
                N = e,
                r = u = i.parse(t, e, r, s),
                N = d,
                n &&
                  ((i._transform = c),
                  f && ((f._prev = null), f._prev && (f._prev._next = null)));
              r && r !== f;

            ) {
              if (
                1 >= r.type &&
                ((o = r.p),
                (_[o] = r.s + r.c),
                (p[o] = r.s),
                n || ((h = new fe(r, "s", o, h, r.r)), (r.c = 0)),
                1 === r.type)
              )
                for (a = r.l; --a > 0; )
                  (l = "xn" + a),
                    (o = r.p + "_" + l),
                    (_[o] = r.data[l]),
                    (p[o] = r[l]),
                    n || (h = new fe(r, l, o, h, r.rxp[l]));
              r = r._next;
            }
            return { proxy: p, end: _, firstMPT: h, pt: u };
          }),
          (E.CSSPropTween = function (t, e, r, s, a, o, l, h, u, f, p) {
            (this.t = t),
              (this.p = e),
              (this.s = r),
              (this.c = s),
              (this.n = l || e),
              t instanceof pe || n.push(this.n),
              (this.r = h),
              (this.type = o || 0),
              u && ((this.pr = u), (i = !0)),
              (this.b = void 0 === f ? r : f),
              (this.e = void 0 === p ? r + s : p),
              a && ((this._next = a), (a._prev = this));
          })),
        _e = (a.parseComplex = function (t, e, i, r, s, n, a, o, l, u) {
          (i = i || n || ""),
            (a = new pe(t, e, 0, 0, a, u ? 2 : 1, null, !1, o, i, r)),
            (r += "");
          var f,
            p,
            _,
            c,
            g,
            v,
            y,
            x,
            T,
            w,
            P,
            S,
            R = i.split(", ").join(",").split(" "),
            C = r.split(", ").join(",").split(" "),
            k = R.length,
            O = h !== !1;
          for (
            (-1 !== r.indexOf(",") || -1 !== i.indexOf(",")) &&
              ((R = R.join(" ").replace(D, ", ").split(" ")),
              (C = C.join(" ").replace(D, ", ").split(" ")),
              (k = R.length)),
              k !== C.length && ((R = (n || "").split(" ")), (k = R.length)),
              a.plugin = l,
              a.setRatio = u,
              f = 0;
            k > f;
            f++
          )
            if (((c = R[f]), (g = C[f]), (x = parseFloat(c)), x || 0 === x))
              a.appendXtra(
                "",
                x,
                ie(g, x),
                g.replace(m, ""),
                O && -1 !== g.indexOf("px"),
                !0
              );
            else if (s && ("#" === c.charAt(0) || ne[c] || b.test(c)))
              (S = "," === g.charAt(g.length - 1) ? ")," : ")"),
                (c = oe(c)),
                (g = oe(g)),
                (T = c.length + g.length > 6),
                T && !Y && 0 === g[3]
                  ? ((a["xs" + a.l] += a.l ? " transparent" : "transparent"),
                    (a.e = a.e.split(C[f]).join("transparent")))
                  : (Y || (T = !1),
                    a
                      .appendXtra(
                        T ? "rgba(" : "rgb(",
                        c[0],
                        g[0] - c[0],
                        ",",
                        !0,
                        !0
                      )
                      .appendXtra("", c[1], g[1] - c[1], ",", !0)
                      .appendXtra("", c[2], g[2] - c[2], T ? "," : S, !0),
                    T &&
                      ((c = 4 > c.length ? 1 : c[3]),
                      a.appendXtra(
                        "",
                        c,
                        (4 > g.length ? 1 : g[3]) - c,
                        S,
                        !1
                      )));
            else if ((v = c.match(d))) {
              if (((y = g.match(m)), !y || y.length !== v.length)) return a;
              for (_ = 0, p = 0; v.length > p; p++)
                (P = v[p]),
                  (w = c.indexOf(P, _)),
                  a.appendXtra(
                    c.substr(_, w - _),
                    Number(P),
                    ie(y[p], P),
                    "",
                    O && "px" === c.substr(w + P.length, 2),
                    0 === p
                  ),
                  (_ = w + P.length);
              a["xs" + a.l] += c.substr(_);
            } else a["xs" + a.l] += a.l ? " " + c : c;
          if (-1 !== r.indexOf("=") && a.data) {
            for (S = a.xs0 + a.data.s, f = 1; a.l > f; f++)
              S += a["xs" + f] + a.data["xn" + f];
            a.e = S + a["xs" + f];
          }
          return a.l || ((a.type = -1), (a.xs0 = a.e)), a.xfirst || a;
        }),
        ce = 9;
      for (l = pe.prototype, l.l = l.pr = 0; --ce > 0; )
        (l["xn" + ce] = 0), (l["xs" + ce] = "");
      (l.xs0 = ""),
        (l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null),
        (l.appendXtra = function (t, e, i, r, s, n) {
          var a = this,
            o = a.l;
          return (
            (a["xs" + o] += n && o ? " " + t : t || ""),
            i || 0 === o || a.plugin
              ? (a.l++,
                (a.type = a.setRatio ? 2 : 1),
                (a["xs" + a.l] = r || ""),
                o > 0
                  ? ((a.data["xn" + o] = e + i),
                    (a.rxp["xn" + o] = s),
                    (a["xn" + o] = e),
                    a.plugin ||
                      ((a.xfirst = new pe(
                        a,
                        "xn" + o,
                        e,
                        i,
                        a.xfirst || a,
                        0,
                        a.n,
                        s,
                        a.pr
                      )),
                      (a.xfirst.xs0 = 0)),
                    a)
                  : ((a.data = { s: e + i }),
                    (a.rxp = {}),
                    (a.s = e),
                    (a.c = i),
                    (a.r = s),
                    a))
              : ((a["xs" + o] += e + (r || "")), a)
          );
        });
      var de = function (t, e) {
          (e = e || {}),
            (this.p = e.prefix ? V(t) || t : t),
            (o[t] = o[this.p] = this),
            (this.format =
              e.formatter ||
              he(e.defaultValue, e.color, e.collapsible, e.multi)),
            e.parser && (this.parse = e.parser),
            (this.clrs = e.color),
            (this.multi = e.multi),
            (this.keyword = e.keyword),
            (this.dflt = e.defaultValue),
            (this.pr = e.priority || 0);
        },
        me = (E._registerComplexSpecialProp = function (t, e, i) {
          "object" != typeof e && (e = { parser: i });
          var r,
            s,
            n = t.split(","),
            a = e.defaultValue;
          for (i = i || [a], r = 0; n.length > r; r++)
            (e.prefix = 0 === r && e.prefix),
              (e.defaultValue = i[r] || a),
              (s = new de(n[r], e));
        }),
        ge = function (t) {
          if (!o[t]) {
            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
            me(t, {
              parser: function (t, i, r, s, n, a, l) {
                var h = (_gsScope.GreenSockGlobals || _gsScope).com.greensock
                  .plugins[e];
                return h
                  ? (h._cssRegister(), o[r].parse(t, i, r, s, n, a, l))
                  : (U("Error: " + e + " js file not loaded."), n);
              },
            });
          }
        };
      (l = de.prototype),
        (l.parseComplex = function (t, e, i, r, s, n) {
          var a,
            o,
            l,
            h,
            u,
            f,
            p = this.keyword;
          if (
            (this.multi &&
              (D.test(i) || D.test(e)
                ? ((o = e.replace(D, "|").split("|")),
                  (l = i.replace(D, "|").split("|")))
                : p && ((o = [e]), (l = [i]))),
            l)
          ) {
            for (
              h = l.length > o.length ? l.length : o.length, a = 0;
              h > a;
              a++
            )
              (e = o[a] = o[a] || this.dflt),
                (i = l[a] = l[a] || this.dflt),
                p &&
                  ((u = e.indexOf(p)),
                  (f = i.indexOf(p)),
                  u !== f && ((i = -1 === f ? l : o), (i[a] += " " + p)));
            (e = o.join(", ")), (i = l.join(", "));
          }
          return _e(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, s, n);
        }),
        (l.parse = function (t, e, i, r, n, a) {
          return this.parseComplex(
            t.style,
            this.format(H(t, this.p, s, !1, this.dflt)),
            this.format(e),
            n,
            a
          );
        }),
        (a.registerSpecialProp = function (t, e, i) {
          me(t, {
            parser: function (t, r, s, n, a, o) {
              var l = new pe(t, s, 0, 0, a, 2, s, !1, i);
              return (l.plugin = o), (l.setRatio = e(t, r, n._tween, s)), l;
            },
            priority: i,
          });
        });
      var ve,
        ye = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
          ","
        ),
        xe = V("transform"),
        Te = j + "transform",
        we = V("transformOrigin"),
        be = null !== V("perspective"),
        Pe = (E.Transform = function () {
          this.skewY = 0;
        }),
        Se = window.SVGElement,
        Re = function (t, e, i) {
          var r,
            s = z.createElementNS("http://www.w3.org/2000/svg", t),
            n = /([a-z])([A-Z])/g;
          for (r in i)
            s.setAttributeNS(null, r.replace(n, "$1-$2").toLowerCase(), i[r]);
          return e.appendChild(s), s;
        },
        Ce = document.documentElement,
        ke = (function () {
          var t,
            e,
            i,
            r = c || (/Android/i.test(F) && !window.chrome);
          return (
            z.createElementNS &&
              !r &&
              ((t = Re("svg", Ce)),
              (e = Re("rect", t, { width: 100, height: 50, x: 100 })),
              (i = e.getBoundingClientRect().left),
              (e.style[we] = "50% 50%"),
              (e.style[xe] = "scale(0.5,0.5)"),
              (r = i === e.getBoundingClientRect().left),
              Ce.removeChild(t)),
            r
          );
        })(),
        Oe = function (t, e, i) {
          var r = t.getBBox();
          (e = ee(e).split(" ")),
            (i.xOrigin =
              (-1 !== e[0].indexOf("%")
                ? (parseFloat(e[0]) / 100) * r.width
                : parseFloat(e[0])) + r.x),
            (i.yOrigin =
              (-1 !== e[1].indexOf("%")
                ? (parseFloat(e[1]) / 100) * r.height
                : parseFloat(e[1])) + r.y);
        },
        Ae = (E.getTransform = function (t, e, i, r) {
          if (t._gsTransform && i && !r) return t._gsTransform;
          var n,
            o,
            l,
            h,
            u,
            f,
            p,
            _,
            c,
            d,
            m,
            g,
            v,
            y = i ? t._gsTransform || new Pe() : new Pe(),
            x = 0 > y.scaleX,
            T = 2e-5,
            w = 1e5,
            b = 179.99,
            P = b * M,
            S = be
              ? parseFloat(H(t, we, e, !1, "0 0 0").split(" ")[2]) ||
                y.zOrigin ||
                0
              : 0,
            R = parseFloat(a.defaultTransformPerspective) || 0;
          if (
            (xe
              ? (n = H(t, Te, e, !0))
              : t.currentStyle &&
                ((n = t.currentStyle.filter.match(O)),
                (n =
                  n && 4 === n.length
                    ? [
                        n[0].substr(4),
                        Number(n[2].substr(4)),
                        Number(n[1].substr(4)),
                        n[3].substr(4),
                        y.x || 0,
                        y.y || 0,
                      ].join(",")
                    : "")),
            n && "none" !== n && "matrix(1, 0, 0, 1, 0, 0)" !== n)
          ) {
            for (
              o = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [],
                l = o.length;
              --l > -1;

            )
              (h = Number(o[l])),
                (o[l] = (u = h - (h |= 0))
                  ? (0 | (u * w + (0 > u ? -0.5 : 0.5))) / w + h
                  : h);
            if (16 === o.length) {
              var C = o[8],
                k = o[9],
                A = o[10],
                D = o[12],
                N = o[13],
                z = o[14];
              if (
                (y.zOrigin &&
                  ((z = -y.zOrigin),
                  (D = C * z - o[12]),
                  (N = k * z - o[13]),
                  (z = A * z + y.zOrigin - o[14])),
                !i || r || null == y.rotationX)
              ) {
                var X,
                  I,
                  E,
                  F,
                  Y,
                  B,
                  U,
                  j = o[0],
                  W = o[1],
                  V = o[2],
                  q = o[3],
                  G = o[4],
                  Q = o[5],
                  Z = o[6],
                  $ = o[7],
                  K = o[11],
                  J = Math.atan2(Z, A),
                  te = -P > J || J > P;
                (y.rotationX = J * L),
                  J &&
                    ((F = Math.cos(-J)),
                    (Y = Math.sin(-J)),
                    (X = G * F + C * Y),
                    (I = Q * F + k * Y),
                    (E = Z * F + A * Y),
                    (C = G * -Y + C * F),
                    (k = Q * -Y + k * F),
                    (A = Z * -Y + A * F),
                    (K = $ * -Y + K * F),
                    (G = X),
                    (Q = I),
                    (Z = E)),
                  (J = Math.atan2(C, j)),
                  (y.rotationY = J * L),
                  J &&
                    ((B = -P > J || J > P),
                    (F = Math.cos(-J)),
                    (Y = Math.sin(-J)),
                    (X = j * F - C * Y),
                    (I = W * F - k * Y),
                    (E = V * F - A * Y),
                    (k = W * Y + k * F),
                    (A = V * Y + A * F),
                    (K = q * Y + K * F),
                    (j = X),
                    (W = I),
                    (V = E)),
                  (J = Math.atan2(W, Q)),
                  (y.rotation = J * L),
                  J &&
                    ((U = -P > J || J > P),
                    (F = Math.cos(-J)),
                    (Y = Math.sin(-J)),
                    (j = j * F + G * Y),
                    (I = W * F + Q * Y),
                    (Q = W * -Y + Q * F),
                    (Z = V * -Y + Z * F),
                    (W = I)),
                  U && te
                    ? (y.rotation = y.rotationX = 0)
                    : U && B
                    ? (y.rotation = y.rotationY = 0)
                    : B && te && (y.rotationY = y.rotationX = 0),
                  (y.scaleX = (0 | (Math.sqrt(j * j + W * W) * w + 0.5)) / w),
                  (y.scaleY = (0 | (Math.sqrt(Q * Q + k * k) * w + 0.5)) / w),
                  (y.scaleZ = (0 | (Math.sqrt(Z * Z + A * A) * w + 0.5)) / w),
                  (y.skewX = 0),
                  (y.perspective = K ? 1 / (0 > K ? -K : K) : 0),
                  (y.x = D),
                  (y.y = N),
                  (y.z = z);
              }
            } else if (
              !(
                (be &&
                  !r &&
                  o.length &&
                  y.x === o[4] &&
                  y.y === o[5] &&
                  (y.rotationX || y.rotationY)) ||
                (void 0 !== y.x && "none" === H(t, "display", e))
              )
            ) {
              var ee = o.length >= 6,
                ie = ee ? o[0] : 1,
                re = o[1] || 0,
                se = o[2] || 0,
                ne = ee ? o[3] : 1;
              (y.x = o[4] || 0),
                (y.y = o[5] || 0),
                (f = Math.sqrt(ie * ie + re * re)),
                (p = Math.sqrt(ne * ne + se * se)),
                (_ = ie || re ? Math.atan2(re, ie) * L : y.rotation || 0),
                (c = se || ne ? Math.atan2(se, ne) * L + _ : y.skewX || 0),
                (d = f - Math.abs(y.scaleX || 0)),
                (m = p - Math.abs(y.scaleY || 0)),
                Math.abs(c) > 90 &&
                  270 > Math.abs(c) &&
                  (x
                    ? ((f *= -1),
                      (c += 0 >= _ ? 180 : -180),
                      (_ += 0 >= _ ? 180 : -180))
                    : ((p *= -1), (c += 0 >= c ? 180 : -180))),
                (g = (_ - y.rotation) % 180),
                (v = (c - y.skewX) % 180),
                (void 0 === y.skewX ||
                  d > T ||
                  -T > d ||
                  m > T ||
                  -T > m ||
                  (g > -b && b > g && false | (g * w)) ||
                  (v > -b && b > v && false | (v * w))) &&
                  ((y.scaleX = f),
                  (y.scaleY = p),
                  (y.rotation = _),
                  (y.skewX = c)),
                be &&
                  ((y.rotationX = y.rotationY = y.z = 0),
                  (y.perspective = R),
                  (y.scaleZ = 1));
            }
            y.zOrigin = S;
            for (l in y) T > y[l] && y[l] > -T && (y[l] = 0);
          } else
            y = {
              x: 0,
              y: 0,
              z: 0,
              scaleX: 1,
              scaleY: 1,
              scaleZ: 1,
              skewX: 0,
              skewY: 0,
              perspective: R,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              zOrigin: 0,
            };
          return (
            i && (t._gsTransform = y),
            (y.svg = Se && t instanceof Se && t.parentNode instanceof Se),
            y.svg &&
              (Oe(t, H(t, we, s, !1, "50% 50%") + "", y),
              (ve = a.useSVGTransformAttr || ke)),
            (y.xPercent = y.yPercent = 0),
            y
          );
        }),
        De = function (t) {
          var e,
            i,
            r = this.data,
            s = -r.rotation * M,
            n = s + r.skewX * M,
            a = 1e5,
            o = (0 | (Math.cos(s) * r.scaleX * a)) / a,
            l = (0 | (Math.sin(s) * r.scaleX * a)) / a,
            h = (0 | (Math.sin(n) * -r.scaleY * a)) / a,
            u = (0 | (Math.cos(n) * r.scaleY * a)) / a,
            f = this.t.style,
            p = this.t.currentStyle;
          if (p) {
            (i = l), (l = -h), (h = -i), (e = p.filter), (f.filter = "");
            var _,
              d,
              m = this.t.offsetWidth,
              g = this.t.offsetHeight,
              v = "absolute" !== p.position,
              T =
                "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                o +
                ", M12=" +
                l +
                ", M21=" +
                h +
                ", M22=" +
                u,
              w = r.x + (m * r.xPercent) / 100,
              b = r.y + (g * r.yPercent) / 100;
            if (
              (null != r.ox &&
                ((_ = (r.oxp ? 0.01 * m * r.ox : r.ox) - m / 2),
                (d = (r.oyp ? 0.01 * g * r.oy : r.oy) - g / 2),
                (w += _ - (_ * o + d * l)),
                (b += d - (_ * h + d * u))),
              v
                ? ((_ = m / 2),
                  (d = g / 2),
                  (T +=
                    ", Dx=" +
                    (_ - (_ * o + d * l) + w) +
                    ", Dy=" +
                    (d - (_ * h + d * u) + b) +
                    ")"))
                : (T += ", sizingMethod='auto expand')"),
              (f.filter =
                -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(")
                  ? e.replace(A, T)
                  : T + " " + e),
              (0 === t || 1 === t) &&
                1 === o &&
                0 === l &&
                0 === h &&
                1 === u &&
                ((v && -1 === T.indexOf("Dx=0, Dy=0")) ||
                  (x.test(e) && 100 !== parseFloat(RegExp.$1)) ||
                  (-1 === e.indexOf("gradient(" && e.indexOf("Alpha")) &&
                    f.removeAttribute("filter"))),
              !v)
            ) {
              var P,
                S,
                R,
                C = 8 > c ? 1 : -1;
              for (
                _ = r.ieOffsetX || 0,
                  d = r.ieOffsetY || 0,
                  r.ieOffsetX = Math.round(
                    (m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 + w
                  ),
                  r.ieOffsetY = Math.round(
                    (g - ((0 > u ? -u : u) * g + (0 > h ? -h : h) * m)) / 2 + b
                  ),
                  ce = 0;
                4 > ce;
                ce++
              )
                (S = J[ce]),
                  (P = p[S]),
                  (i =
                    -1 !== P.indexOf("px")
                      ? parseFloat(P)
                      : G(this.t, S, parseFloat(P), P.replace(y, "")) || 0),
                  (R =
                    i !== r[S]
                      ? 2 > ce
                        ? -r.ieOffsetX
                        : -r.ieOffsetY
                      : 2 > ce
                      ? _ - r.ieOffsetX
                      : d - r.ieOffsetY),
                  (f[S] =
                    (r[S] = Math.round(
                      i - R * (0 === ce || 2 === ce ? 1 : C)
                    )) + "px");
            }
          }
        },
        Me = (E.set3DTransformRatio = function (t) {
          var e,
            i,
            r,
            s,
            n,
            a,
            o,
            l,
            h,
            u,
            f,
            _,
            c,
            d,
            m,
            g,
            v,
            y,
            x,
            T,
            w,
            b,
            P,
            S = this.data,
            R = this.t.style,
            C = S.rotation * M,
            k = S.scaleX,
            O = S.scaleY,
            A = S.scaleZ,
            D = S.x,
            L = S.y,
            N = S.z,
            z = S.perspective;
          if (
            !(
              (1 !== t && 0 !== t) ||
              "auto" !== S.force3D ||
              S.rotationY ||
              S.rotationX ||
              1 !== A ||
              z ||
              N
            )
          )
            return Le.call(this, t), void 0;
          if (p) {
            var X = 1e-4;
            X > k && k > -X && (k = A = 2e-5),
              X > O && O > -X && (O = A = 2e-5),
              !z || S.z || S.rotationX || S.rotationY || (z = 0);
          }
          if (C || S.skewX)
            (y = Math.cos(C)),
              (x = Math.sin(C)),
              (e = y),
              (n = x),
              S.skewX &&
                ((C -= S.skewX * M),
                (y = Math.cos(C)),
                (x = Math.sin(C)),
                "simple" === S.skewType &&
                  ((T = Math.tan(S.skewX * M)),
                  (T = Math.sqrt(1 + T * T)),
                  (y *= T),
                  (x *= T))),
              (i = -x),
              (a = y);
          else {
            if (!(S.rotationY || S.rotationX || 1 !== A || z || S.svg))
              return (
                (R[xe] =
                  (S.xPercent || S.yPercent
                    ? "translate(" +
                      S.xPercent +
                      "%," +
                      S.yPercent +
                      "%) translate3d("
                    : "translate3d(") +
                  D +
                  "px," +
                  L +
                  "px," +
                  N +
                  "px)" +
                  (1 !== k || 1 !== O ? " scale(" + k + "," + O + ")" : "")),
                void 0
              );
            (e = a = 1), (i = n = 0);
          }
          (f = 1),
            (r = s = o = l = h = u = _ = c = d = 0),
            (m = z ? -1 / z : 0),
            (g = S.zOrigin),
            (v = 1e5),
            (C = S.rotationY * M),
            C &&
              ((y = Math.cos(C)),
              (x = Math.sin(C)),
              (h = f * -x),
              (c = m * -x),
              (r = e * x),
              (o = n * x),
              (f *= y),
              (m *= y),
              (e *= y),
              (n *= y)),
            (C = S.rotationX * M),
            C &&
              ((y = Math.cos(C)),
              (x = Math.sin(C)),
              (T = i * y + r * x),
              (w = a * y + o * x),
              (b = u * y + f * x),
              (P = d * y + m * x),
              (r = i * -x + r * y),
              (o = a * -x + o * y),
              (f = u * -x + f * y),
              (m = d * -x + m * y),
              (i = T),
              (a = w),
              (u = b),
              (d = P)),
            1 !== A && ((r *= A), (o *= A), (f *= A), (m *= A)),
            1 !== O && ((i *= O), (a *= O), (u *= O), (d *= O)),
            1 !== k && ((e *= k), (n *= k), (h *= k), (c *= k)),
            g && ((_ -= g), (s = r * _), (l = o * _), (_ = f * _ + g)),
            S.svg &&
              ((s += S.xOrigin - (S.xOrigin * e + S.yOrigin * i)),
              (l += S.yOrigin - (S.xOrigin * n + S.yOrigin * a))),
            (s = (T = (s += D) - (s |= 0))
              ? (0 | (T * v + (0 > T ? -0.5 : 0.5))) / v + s
              : s),
            (l = (T = (l += L) - (l |= 0))
              ? (0 | (T * v + (0 > T ? -0.5 : 0.5))) / v + l
              : l),
            (_ = (T = (_ += N) - (_ |= 0))
              ? (0 | (T * v + (0 > T ? -0.5 : 0.5))) / v + _
              : _),
            (R[xe] =
              (S.xPercent || S.yPercent
                ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d("
                : "matrix3d(") +
              [
                (0 | (e * v)) / v,
                (0 | (n * v)) / v,
                (0 | (h * v)) / v,
                (0 | (c * v)) / v,
                (0 | (i * v)) / v,
                (0 | (a * v)) / v,
                (0 | (u * v)) / v,
                (0 | (d * v)) / v,
                (0 | (r * v)) / v,
                (0 | (o * v)) / v,
                (0 | (f * v)) / v,
                (0 | (m * v)) / v,
                s,
                l,
                _,
                z ? 1 + -_ / z : 1,
              ].join(",") +
              ")");
        }),
        Le = (E.set2DTransformRatio = function (t) {
          var e,
            i,
            r,
            s,
            n,
            a,
            o,
            l,
            h,
            u,
            f,
            p = this.data,
            _ = this.t,
            c = _.style,
            d = p.x,
            m = p.y;
          return !(
            p.rotationX ||
            p.rotationY ||
            p.z ||
            p.force3D === !0 ||
            ("auto" === p.force3D && 1 !== t && 0 !== t)
          ) ||
            (p.svg && ve) ||
            !be
            ? ((s = p.scaleX),
              (n = p.scaleY),
              p.rotation || p.skewX || p.svg
                ? ((e = p.rotation * M),
                  (i = e - p.skewX * M),
                  (r = 1e5),
                  (a = Math.cos(e) * s),
                  (o = Math.sin(e) * s),
                  (l = Math.sin(i) * -n),
                  (h = Math.cos(i) * n),
                  p.svg &&
                    ((d += p.xOrigin - (p.xOrigin * a + p.yOrigin * l)),
                    (m += p.yOrigin - (p.xOrigin * o + p.yOrigin * h)),
                    (f = 1e-6),
                    f > d && d > -f && (d = 0),
                    f > m && m > -f && (m = 0)),
                  (u =
                    (0 | (a * r)) / r +
                    "," +
                    (0 | (o * r)) / r +
                    "," +
                    (0 | (l * r)) / r +
                    "," +
                    (0 | (h * r)) / r +
                    "," +
                    d +
                    "," +
                    m +
                    ")"),
                  p.svg && ve
                    ? _.setAttribute("transform", "matrix(" + u)
                    : (c[xe] =
                        (p.xPercent || p.yPercent
                          ? "translate(" +
                            p.xPercent +
                            "%," +
                            p.yPercent +
                            "%) matrix("
                          : "matrix(") + u))
                : (c[xe] =
                    (p.xPercent || p.yPercent
                      ? "translate(" +
                        p.xPercent +
                        "%," +
                        p.yPercent +
                        "%) matrix("
                      : "matrix(") +
                    s +
                    ",0,0," +
                    n +
                    "," +
                    d +
                    "," +
                    m +
                    ")"),
              void 0)
            : ((this.setRatio = Me), Me.call(this, t), void 0);
        });
      me(
        "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",
        {
          parser: function (t, e, i, r, n, o, l) {
            if (r._transform) return n;
            var h,
              u,
              f,
              p,
              _,
              c,
              d,
              m = (r._transform = Ae(t, s, !0, l.parseTransform)),
              g = t.style,
              v = 1e-6,
              y = ye.length,
              x = l,
              T = {};
            if ("string" == typeof x.transform && xe)
              (f = X.style),
                (f[xe] = x.transform),
                (f.display = "block"),
                (f.position = "absolute"),
                z.body.appendChild(X),
                (h = Ae(X, null, !1)),
                z.body.removeChild(X);
            else if ("object" == typeof x) {
              if (
                ((h = {
                  scaleX: re(null != x.scaleX ? x.scaleX : x.scale, m.scaleX),
                  scaleY: re(null != x.scaleY ? x.scaleY : x.scale, m.scaleY),
                  scaleZ: re(x.scaleZ, m.scaleZ),
                  x: re(x.x, m.x),
                  y: re(x.y, m.y),
                  z: re(x.z, m.z),
                  xPercent: re(x.xPercent, m.xPercent),
                  yPercent: re(x.yPercent, m.yPercent),
                  perspective: re(x.transformPerspective, m.perspective),
                }),
                (d = x.directionalRotation),
                null != d)
              )
                if ("object" == typeof d) for (f in d) x[f] = d[f];
                else x.rotation = d;
              "string" == typeof x.x &&
                -1 !== x.x.indexOf("%") &&
                ((h.x = 0), (h.xPercent = re(x.x, m.xPercent))),
                "string" == typeof x.y &&
                  -1 !== x.y.indexOf("%") &&
                  ((h.y = 0), (h.yPercent = re(x.y, m.yPercent))),
                (h.rotation = se(
                  "rotation" in x
                    ? x.rotation
                    : "shortRotation" in x
                    ? x.shortRotation + "_short"
                    : "rotationZ" in x
                    ? x.rotationZ
                    : m.rotation,
                  m.rotation,
                  "rotation",
                  T
                )),
                be &&
                  ((h.rotationX = se(
                    "rotationX" in x
                      ? x.rotationX
                      : "shortRotationX" in x
                      ? x.shortRotationX + "_short"
                      : m.rotationX || 0,
                    m.rotationX,
                    "rotationX",
                    T
                  )),
                  (h.rotationY = se(
                    "rotationY" in x
                      ? x.rotationY
                      : "shortRotationY" in x
                      ? x.shortRotationY + "_short"
                      : m.rotationY || 0,
                    m.rotationY,
                    "rotationY",
                    T
                  ))),
                (h.skewX = null == x.skewX ? m.skewX : se(x.skewX, m.skewX)),
                (h.skewY = null == x.skewY ? m.skewY : se(x.skewY, m.skewY)),
                (u = h.skewY - m.skewY) && ((h.skewX += u), (h.rotation += u));
            }
            for (
              be && null != x.force3D && ((m.force3D = x.force3D), (c = !0)),
                m.skewType = x.skewType || m.skewType || a.defaultSkewType,
                _ =
                  m.force3D ||
                  m.z ||
                  m.rotationX ||
                  m.rotationY ||
                  h.z ||
                  h.rotationX ||
                  h.rotationY ||
                  h.perspective,
                _ || null == x.scale || (h.scaleZ = 1);
              --y > -1;

            )
              (i = ye[y]),
                (p = h[i] - m[i]),
                (p > v || -v > p || null != x[i] || null != N[i]) &&
                  ((c = !0),
                  (n = new pe(m, i, m[i], p, n)),
                  i in T && (n.e = T[i]),
                  (n.xs0 = 0),
                  (n.plugin = o),
                  r._overwriteProps.push(n.n));
            return (
              (p = x.transformOrigin),
              p &&
                m.svg &&
                (Oe(t, p, h),
                (n = new pe(
                  m,
                  "xOrigin",
                  m.xOrigin,
                  h.xOrigin - m.xOrigin,
                  n,
                  -1,
                  "transformOrigin"
                )),
                (n.b = m.xOrigin),
                (n.e = n.xs0 = h.xOrigin),
                (n = new pe(
                  m,
                  "yOrigin",
                  m.yOrigin,
                  h.yOrigin - m.yOrigin,
                  n,
                  -1,
                  "transformOrigin"
                )),
                (n.b = m.yOrigin),
                (n.e = n.xs0 = h.yOrigin),
                (p = "0px 0px")),
              (p || (be && _ && m.zOrigin)) &&
                (xe
                  ? ((c = !0),
                    (i = we),
                    (p = (p || H(t, i, s, !1, "50% 50%")) + ""),
                    (n = new pe(g, i, 0, 0, n, -1, "transformOrigin")),
                    (n.b = g[i]),
                    (n.plugin = o),
                    be
                      ? ((f = m.zOrigin),
                        (p = p.split(" ")),
                        (m.zOrigin =
                          (p.length > 2 && (0 === f || "0px" !== p[2])
                            ? parseFloat(p[2])
                            : f) || 0),
                        (n.xs0 = n.e = p[0] + " " + (p[1] || "50%") + " 0px"),
                        (n = new pe(m, "zOrigin", 0, 0, n, -1, n.n)),
                        (n.b = f),
                        (n.xs0 = n.e = m.zOrigin))
                      : (n.xs0 = n.e = p))
                  : ee(p + "", m)),
              c &&
                (r._transformType =
                  (m.svg && ve) || (!_ && 3 !== this._transformType) ? 2 : 3),
              n
            );
          },
          prefix: !0,
        }
      ),
        me("boxShadow", {
          defaultValue: "0px 0px 0px 0px #999",
          prefix: !0,
          color: !0,
          multi: !0,
          keyword: "inset",
        }),
        me("borderRadius", {
          defaultValue: "0px",
          parser: function (t, e, i, n, a) {
            e = this.format(e);
            var o,
              l,
              h,
              u,
              f,
              p,
              _,
              c,
              d,
              m,
              g,
              v,
              y,
              x,
              T,
              w,
              b = [
                "borderTopLeftRadius",
                "borderTopRightRadius",
                "borderBottomRightRadius",
                "borderBottomLeftRadius",
              ],
              P = t.style;
            for (
              d = parseFloat(t.offsetWidth),
                m = parseFloat(t.offsetHeight),
                o = e.split(" "),
                l = 0;
              b.length > l;
              l++
            )
              this.p.indexOf("border") && (b[l] = V(b[l])),
                (f = u = H(t, b[l], s, !1, "0px")),
                -1 !== f.indexOf(" ") &&
                  ((u = f.split(" ")), (f = u[0]), (u = u[1])),
                (p = h = o[l]),
                (_ = parseFloat(f)),
                (v = f.substr((_ + "").length)),
                (y = "=" === p.charAt(1)),
                y
                  ? ((c = parseInt(p.charAt(0) + "1", 10)),
                    (p = p.substr(2)),
                    (c *= parseFloat(p)),
                    (g = p.substr((c + "").length - (0 > c ? 1 : 0)) || ""))
                  : ((c = parseFloat(p)), (g = p.substr((c + "").length))),
                "" === g && (g = r[i] || v),
                g !== v &&
                  ((x = G(t, "borderLeft", _, v)),
                  (T = G(t, "borderTop", _, v)),
                  "%" === g
                    ? ((f = 100 * (x / d) + "%"), (u = 100 * (T / m) + "%"))
                    : "em" === g
                    ? ((w = G(t, "borderLeft", 1, "em")),
                      (f = x / w + "em"),
                      (u = T / w + "em"))
                    : ((f = x + "px"), (u = T + "px")),
                  y &&
                    ((p = parseFloat(f) + c + g), (h = parseFloat(u) + c + g))),
                (a = _e(P, b[l], f + " " + u, p + " " + h, !1, "0px", a));
            return a;
          },
          prefix: !0,
          formatter: he("0px 0px 0px 0px", !1, !0),
        }),
        me("backgroundPosition", {
          defaultValue: "0 0",
          parser: function (t, e, i, r, n, a) {
            var o,
              l,
              h,
              u,
              f,
              p,
              _ = "background-position",
              d = s || q(t, null),
              m = this.format(
                (d
                  ? c
                    ? d.getPropertyValue(_ + "-x") +
                      " " +
                      d.getPropertyValue(_ + "-y")
                    : d.getPropertyValue(_)
                  : t.currentStyle.backgroundPositionX +
                    " " +
                    t.currentStyle.backgroundPositionY) || "0 0"
              ),
              g = this.format(e);
            if (
              (-1 !== m.indexOf("%")) != (-1 !== g.indexOf("%")) &&
              ((p = H(t, "backgroundImage").replace(R, "")), p && "none" !== p)
            ) {
              for (
                o = m.split(" "),
                  l = g.split(" "),
                  I.setAttribute("src", p),
                  h = 2;
                --h > -1;

              )
                (m = o[h]),
                  (u = -1 !== m.indexOf("%")),
                  u !== (-1 !== l[h].indexOf("%")) &&
                    ((f =
                      0 === h
                        ? t.offsetWidth - I.width
                        : t.offsetHeight - I.height),
                    (o[h] = u
                      ? (parseFloat(m) / 100) * f + "px"
                      : 100 * (parseFloat(m) / f) + "%"));
              m = o.join(" ");
            }
            return this.parseComplex(t.style, m, g, n, a);
          },
          formatter: ee,
        }),
        me("backgroundSize", { defaultValue: "0 0", formatter: ee }),
        me("perspective", { defaultValue: "0px", prefix: !0 }),
        me("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
        me("transformStyle", { prefix: !0 }),
        me("backfaceVisibility", { prefix: !0 }),
        me("userSelect", { prefix: !0 }),
        me("margin", {
          parser: ue("marginTop,marginRight,marginBottom,marginLeft"),
        }),
        me("padding", {
          parser: ue("paddingTop,paddingRight,paddingBottom,paddingLeft"),
        }),
        me("clip", {
          defaultValue: "rect(0px,0px,0px,0px)",
          parser: function (t, e, i, r, n, a) {
            var o, l, h;
            return (
              9 > c
                ? ((l = t.currentStyle),
                  (h = 8 > c ? " " : ","),
                  (o =
                    "rect(" +
                    l.clipTop +
                    h +
                    l.clipRight +
                    h +
                    l.clipBottom +
                    h +
                    l.clipLeft +
                    ")"),
                  (e = this.format(e).split(",").join(h)))
                : ((o = this.format(H(t, this.p, s, !1, this.dflt))),
                  (e = this.format(e))),
              this.parseComplex(t.style, o, e, n, a)
            );
          },
        }),
        me("textShadow", {
          defaultValue: "0px 0px 0px #999",
          color: !0,
          multi: !0,
        }),
        me("autoRound,strictUnits", {
          parser: function (t, e, i, r, s) {
            return s;
          },
        }),
        me("border", {
          defaultValue: "0px solid #000",
          parser: function (t, e, i, r, n, a) {
            return this.parseComplex(
              t.style,
              this.format(
                H(t, "borderTopWidth", s, !1, "0px") +
                  " " +
                  H(t, "borderTopStyle", s, !1, "solid") +
                  " " +
                  H(t, "borderTopColor", s, !1, "#000")
              ),
              this.format(e),
              n,
              a
            );
          },
          color: !0,
          formatter: function (t) {
            var e = t.split(" ");
            return (
              e[0] +
              " " +
              (e[1] || "solid") +
              " " +
              (t.match(le) || ["#000"])[0]
            );
          },
        }),
        me("borderWidth", {
          parser: ue(
            "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
          ),
        }),
        me("float,cssFloat,styleFloat", {
          parser: function (t, e, i, r, s) {
            var n = t.style,
              a = "cssFloat" in n ? "cssFloat" : "styleFloat";
            return new pe(n, a, 0, 0, s, -1, i, !1, 0, n[a], e);
          },
        });
      var Ne = function (t) {
        var e,
          i = this.t,
          r = i.filter || H(this.data, "filter") || "",
          s = 0 | (this.s + this.c * t);
        100 === s &&
          (-1 === r.indexOf("atrix(") &&
          -1 === r.indexOf("radient(") &&
          -1 === r.indexOf("oader(")
            ? (i.removeAttribute("filter"), (e = !H(this.data, "filter")))
            : ((i.filter = r.replace(w, "")), (e = !0))),
          e ||
            (this.xn1 && (i.filter = r = r || "alpha(opacity=" + s + ")"),
            -1 === r.indexOf("pacity")
              ? (0 === s && this.xn1) ||
                (i.filter = r + " alpha(opacity=" + s + ")")
              : (i.filter = r.replace(x, "opacity=" + s)));
      };
      me("opacity,alpha,autoAlpha", {
        defaultValue: "1",
        parser: function (t, e, i, r, n, a) {
          var o = parseFloat(H(t, "opacity", s, !1, "1")),
            l = t.style,
            h = "autoAlpha" === i;
          return (
            "string" == typeof e &&
              "=" === e.charAt(1) &&
              (e =
                ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
            h &&
              1 === o &&
              "hidden" === H(t, "visibility", s) &&
              0 !== e &&
              (o = 0),
            Y
              ? (n = new pe(l, "opacity", o, e - o, n))
              : ((n = new pe(l, "opacity", 100 * o, 100 * (e - o), n)),
                (n.xn1 = h ? 1 : 0),
                (l.zoom = 1),
                (n.type = 2),
                (n.b = "alpha(opacity=" + n.s + ")"),
                (n.e = "alpha(opacity=" + (n.s + n.c) + ")"),
                (n.data = t),
                (n.plugin = a),
                (n.setRatio = Ne)),
            h &&
              ((n = new pe(
                l,
                "visibility",
                0,
                0,
                n,
                -1,
                null,
                !1,
                0,
                0 !== o ? "inherit" : "hidden",
                0 === e ? "hidden" : "inherit"
              )),
              (n.xs0 = "inherit"),
              r._overwriteProps.push(n.n),
              r._overwriteProps.push(i)),
            n
          );
        },
      });
      var ze = function (t, e) {
          e &&
            (t.removeProperty
              ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)),
                t.removeProperty(e.replace(P, "-$1").toLowerCase()))
              : t.removeAttribute(e));
        },
        Xe = function (t) {
          if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
            this.t.setAttribute("class", 0 === t ? this.b : this.e);
            for (var e = this.data, i = this.t.style; e; )
              e.v ? (i[e.p] = e.v) : ze(i, e.p), (e = e._next);
            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
          } else
            this.t.getAttribute("class") !== this.e &&
              this.t.setAttribute("class", this.e);
        };
      me("className", {
        parser: function (t, e, r, n, a, o, l) {
          var h,
            u,
            f,
            p,
            _,
            c = t.getAttribute("class") || "",
            d = t.style.cssText;
          if (
            ((a = n._classNamePT = new pe(t, r, 0, 0, a, 2)),
            (a.setRatio = Xe),
            (a.pr = -11),
            (i = !0),
            (a.b = c),
            (u = Z(t, s)),
            (f = t._gsClassPT))
          ) {
            for (p = {}, _ = f.data; _; ) (p[_.p] = 1), (_ = _._next);
            f.setRatio(1);
          }
          return (
            (t._gsClassPT = a),
            (a.e =
              "=" !== e.charAt(1)
                ? e
                : c.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") +
                  ("+" === e.charAt(0) ? " " + e.substr(2) : "")),
            n._tween._duration &&
              (t.setAttribute("class", a.e),
              (h = $(t, u, Z(t), l, p)),
              t.setAttribute("class", c),
              (a.data = h.firstMPT),
              (t.style.cssText = d),
              (a = a.xfirst = n.parse(t, h.difs, a, o))),
            a
          );
        },
      });
      var Ie = function (t) {
        if (
          (1 === t || 0 === t) &&
          this.data._totalTime === this.data._totalDuration &&
          "isFromStart" !== this.data.data
        ) {
          var e,
            i,
            r,
            s,
            n = this.t.style,
            a = o.transform.parse;
          if ("all" === this.e) (n.cssText = ""), (s = !0);
          else
            for (
              e = this.e.split(" ").join("").split(","), r = e.length;
              --r > -1;

            )
              (i = e[r]),
                o[i] &&
                  (o[i].parse === a
                    ? (s = !0)
                    : (i = "transformOrigin" === i ? we : o[i].p)),
                ze(n, i);
          s && (ze(n, xe), this.t._gsTransform && delete this.t._gsTransform);
        }
      };
      for (
        me("clearProps", {
          parser: function (t, e, r, s, n) {
            return (
              (n = new pe(t, r, 0, 0, n, 2)),
              (n.setRatio = Ie),
              (n.e = e),
              (n.pr = -10),
              (n.data = s._tween),
              (i = !0),
              n
            );
          },
        }),
          l = "bezier,throwProps,physicsProps,physics2D".split(","),
          ce = l.length;
        ce--;

      )
        ge(l[ce]);
      (l = a.prototype),
        (l._firstPT = null),
        (l._onInitTween = function (t, e, o) {
          if (!t.nodeType) return !1;
          (this._target = t),
            (this._tween = o),
            (this._vars = e),
            (h = e.autoRound),
            (i = !1),
            (r = e.suffixMap || a.suffixMap),
            (s = q(t, "")),
            (n = this._overwriteProps);
          var l,
            p,
            c,
            d,
            m,
            g,
            v,
            y,
            x,
            w = t.style;
          if (
            (u &&
              "" === w.zIndex &&
              ((l = H(t, "zIndex", s)),
              ("auto" === l || "" === l) && this._addLazySet(w, "zIndex", 0)),
            "string" == typeof e &&
              ((d = w.cssText),
              (l = Z(t, s)),
              (w.cssText = d + ";" + e),
              (l = $(t, l, Z(t)).difs),
              !Y && T.test(e) && (l.opacity = parseFloat(RegExp.$1)),
              (e = l),
              (w.cssText = d)),
            (this._firstPT = p = this.parse(t, e, null)),
            this._transformType)
          ) {
            for (
              x = 3 === this._transformType,
                xe
                  ? f &&
                    ((u = !0),
                    "" === w.zIndex &&
                      ((v = H(t, "zIndex", s)),
                      ("auto" === v || "" === v) &&
                        this._addLazySet(w, "zIndex", 0)),
                    _ &&
                      this._addLazySet(
                        w,
                        "WebkitBackfaceVisibility",
                        this._vars.WebkitBackfaceVisibility ||
                          (x ? "visible" : "hidden")
                      ))
                  : (w.zoom = 1),
                c = p;
              c && c._next;

            )
              c = c._next;
            (y = new pe(t, "transform", 0, 0, null, 2)),
              this._linkCSSP(y, null, c),
              (y.setRatio = x && be ? Me : xe ? Le : De),
              (y.data = this._transform || Ae(t, s, !0)),
              n.pop();
          }
          if (i) {
            for (; p; ) {
              for (g = p._next, c = d; c && c.pr > p.pr; ) c = c._next;
              (p._prev = c ? c._prev : m) ? (p._prev._next = p) : (d = p),
                (p._next = c) ? (c._prev = p) : (m = p),
                (p = g);
            }
            this._firstPT = d;
          }
          return !0;
        }),
        (l.parse = function (t, e, i, n) {
          var a,
            l,
            u,
            f,
            p,
            _,
            c,
            d,
            m,
            g,
            v = t.style;
          for (a in e)
            (_ = e[a]),
              (l = o[a]),
              l
                ? (i = l.parse(t, _, a, this, i, n, e))
                : ((p = H(t, a, s) + ""),
                  (m = "string" == typeof _),
                  "color" === a ||
                  "fill" === a ||
                  "stroke" === a ||
                  -1 !== a.indexOf("Color") ||
                  (m && b.test(_))
                    ? (m ||
                        ((_ = oe(_)),
                        (_ =
                          (_.length > 3 ? "rgba(" : "rgb(") +
                          _.join(",") +
                          ")")),
                      (i = _e(v, a, p, _, !0, "transparent", i, 0, n)))
                    : !m || (-1 === _.indexOf(" ") && -1 === _.indexOf(","))
                    ? ((u = parseFloat(p)),
                      (c = u || 0 === u ? p.substr((u + "").length) : ""),
                      ("" === p || "auto" === p) &&
                        ("width" === a || "height" === a
                          ? ((u = te(t, a, s)), (c = "px"))
                          : "left" === a || "top" === a
                          ? ((u = Q(t, a, s)), (c = "px"))
                          : ((u = "opacity" !== a ? 0 : 1), (c = ""))),
                      (g = m && "=" === _.charAt(1)),
                      g
                        ? ((f = parseInt(_.charAt(0) + "1", 10)),
                          (_ = _.substr(2)),
                          (f *= parseFloat(_)),
                          (d = _.replace(y, "")))
                        : ((f = parseFloat(_)),
                          (d = m ? _.substr((f + "").length) || "" : "")),
                      "" === d && (d = a in r ? r[a] : c),
                      (_ = f || 0 === f ? (g ? f + u : f) + d : e[a]),
                      c !== d &&
                        "" !== d &&
                        (f || 0 === f) &&
                        u &&
                        ((u = G(t, a, u, c)),
                        "%" === d
                          ? ((u /= G(t, a, 100, "%") / 100),
                            e.strictUnits !== !0 && (p = u + "%"))
                          : "em" === d
                          ? (u /= G(t, a, 1, "em"))
                          : "px" !== d && ((f = G(t, a, f, d)), (d = "px")),
                        g && (f || 0 === f) && (_ = f + u + d)),
                      g && (f += u),
                      (!u && 0 !== u) || (!f && 0 !== f)
                        ? void 0 !== v[a] &&
                          (_ || ("NaN" != _ + "" && null != _))
                          ? ((i = new pe(
                              v,
                              a,
                              f || u || 0,
                              0,
                              i,
                              -1,
                              a,
                              !1,
                              0,
                              p,
                              _
                            )),
                            (i.xs0 =
                              "none" !== _ ||
                              ("display" !== a && -1 === a.indexOf("Style"))
                                ? _
                                : p))
                          : U("invalid " + a + " tween value: " + e[a])
                        : ((i = new pe(
                            v,
                            a,
                            u,
                            f - u,
                            i,
                            0,
                            a,
                            h !== !1 && ("px" === d || "zIndex" === a),
                            0,
                            p,
                            _
                          )),
                          (i.xs0 = d)))
                    : (i = _e(v, a, p, _, !0, null, i, 0, n))),
              n && i && !i.plugin && (i.plugin = n);
          return i;
        }),
        (l.setRatio = function (t) {
          var e,
            i,
            r,
            s = this._firstPT,
            n = 1e-6;
          if (
            1 !== t ||
            (this._tween._time !== this._tween._duration &&
              0 !== this._tween._time)
          )
            if (
              t ||
              (this._tween._time !== this._tween._duration &&
                0 !== this._tween._time) ||
              this._tween._rawPrevTime === -1e-6
            )
              for (; s; ) {
                if (
                  ((e = s.c * t + s.s),
                  s.r ? (e = Math.round(e)) : n > e && e > -n && (e = 0),
                  s.type)
                )
                  if (1 === s.type)
                    if (((r = s.l), 2 === r))
                      s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                    else if (3 === r)
                      s.t[s.p] =
                        s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                    else if (4 === r)
                      s.t[s.p] =
                        s.xs0 +
                        e +
                        s.xs1 +
                        s.xn1 +
                        s.xs2 +
                        s.xn2 +
                        s.xs3 +
                        s.xn3 +
                        s.xs4;
                    else if (5 === r)
                      s.t[s.p] =
                        s.xs0 +
                        e +
                        s.xs1 +
                        s.xn1 +
                        s.xs2 +
                        s.xn2 +
                        s.xs3 +
                        s.xn3 +
                        s.xs4 +
                        s.xn4 +
                        s.xs5;
                    else {
                      for (i = s.xs0 + e + s.xs1, r = 1; s.l > r; r++)
                        i += s["xn" + r] + s["xs" + (r + 1)];
                      s.t[s.p] = i;
                    }
                  else
                    -1 === s.type
                      ? (s.t[s.p] = s.xs0)
                      : s.setRatio && s.setRatio(t);
                else s.t[s.p] = e + s.xs0;
                s = s._next;
              }
            else
              for (; s; )
                2 !== s.type ? (s.t[s.p] = s.b) : s.setRatio(t), (s = s._next);
          else
            for (; s; )
              2 !== s.type ? (s.t[s.p] = s.e) : s.setRatio(t), (s = s._next);
        }),
        (l._enableTransforms = function (t) {
          (this._transform = this._transform || Ae(this._target, s, !0)),
            (this._transformType =
              (this._transform.svg && ve) || (!t && 3 !== this._transformType)
                ? 2
                : 3);
        });
      var Ee = function () {
        (this.t[this.p] = this.e),
          this.data._linkCSSP(this, this._next, null, !0);
      };
      (l._addLazySet = function (t, e, i) {
        var r = (this._firstPT = new pe(t, e, 0, 0, this._firstPT, 2));
        (r.e = i), (r.setRatio = Ee), (r.data = this);
      }),
        (l._linkCSSP = function (t, e, i, r) {
          return (
            t &&
              (e && (e._prev = t),
              t._next && (t._next._prev = t._prev),
              t._prev
                ? (t._prev._next = t._next)
                : this._firstPT === t && ((this._firstPT = t._next), (r = !0)),
              i
                ? (i._next = t)
                : r || null !== this._firstPT || (this._firstPT = t),
              (t._next = e),
              (t._prev = i)),
            t
          );
        }),
        (l._kill = function (e) {
          var i,
            r,
            s,
            n = e;
          if (e.autoAlpha || e.alpha) {
            n = {};
            for (r in e) n[r] = e[r];
            (n.opacity = 1), n.autoAlpha && (n.visibility = 1);
          }
          return (
            e.className &&
              (i = this._classNamePT) &&
              ((s = i.xfirst),
              s && s._prev
                ? this._linkCSSP(s._prev, i._next, s._prev._prev)
                : s === this._firstPT && (this._firstPT = i._next),
              i._next && this._linkCSSP(i._next, i._next._next, s._prev),
              (this._classNamePT = null)),
            t.prototype._kill.call(this, n)
          );
        });
      var Fe = function (t, e, i) {
        var r, s, n, a;
        if (t.slice) for (s = t.length; --s > -1; ) Fe(t[s], e, i);
        else
          for (r = t.childNodes, s = r.length; --s > -1; )
            (n = r[s]),
              (a = n.type),
              n.style && (e.push(Z(n)), i && i.push(n)),
              (1 !== a && 9 !== a && 11 !== a) ||
                !n.childNodes.length ||
                Fe(n, e, i);
      };
      return (
        (a.cascadeTo = function (t, i, r) {
          var s,
            n,
            a,
            o = e.to(t, i, r),
            l = [o],
            h = [],
            u = [],
            f = [],
            p = e._internals.reservedProps;
          for (
            t = o._targets || o.target,
              Fe(t, h, f),
              o.render(i, !0),
              Fe(t, u),
              o.render(0, !0),
              o._enabled(!0),
              s = f.length;
            --s > -1;

          )
            if (((n = $(f[s], h[s], u[s])), n.firstMPT)) {
              n = n.difs;
              for (a in r) p[a] && (n[a] = r[a]);
              l.push(e.to(f[s], i, n));
            }
          return l;
        }),
        t.activate([a]),
        a
      );
    },
    !0
  );
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (t) {
    "use strict";
    var e = function () {
      return (_gsScope.GreenSockGlobals || _gsScope)[t];
    };
    "function" == typeof define && define.amd
      ? define(["TweenLite"], e)
      : "undefined" != typeof module &&
        module.exports &&
        (require("../TweenLite.js"), (module.exports = e()));
  })("CSSPlugin");

(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["ScrollMagic", "TweenMax", "TimelineMax"], factory);
  } else if (typeof exports === "object") {
    require("gsap");
    factory(require("scrollmagic"), TweenMax, TimelineMax);
  } else {
    factory(
      root.ScrollMagic || (root.jQuery && root.jQuery.ScrollMagic),
      root.TweenMax || root.TweenLite,
      root.TimelineMax || root.TimelineLite
    );
  }
})(this, function (ScrollMagic, Tween, Timeline) {
  "use strict";
  var NAMESPACE = "animation.gsap";
  var console = window.console || {},
    err = Function.prototype.bind.call(
      console.error || console.log || function () {},
      console
    );
  if (!ScrollMagic) {
    err(
      "(" +
        NAMESPACE +
        ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."
    );
  }
  if (!Tween) {
    err(
      "(" +
        NAMESPACE +
        ") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."
    );
  }
  ScrollMagic.Scene.addOption("tweenChanges", !1, function (val) {
    return !!val;
  });
  ScrollMagic.Scene.extend(function () {
    var Scene = this,
      _tween;
    var log = function () {
      if (Scene._log) {
        Array.prototype.splice.call(
          arguments,
          1,
          0,
          "(" + NAMESPACE + ")",
          "->"
        );
        Scene._log.apply(this, arguments);
      }
    };
    Scene.on("progress.plugin_gsap", function () {
      updateTweenProgress();
    });
    Scene.on("destroy.plugin_gsap", function (e) {
      Scene.removeTween(e.reset);
    });
    var updateTweenProgress = function () {
      if (_tween) {
        var progress = Scene.progress(),
          state = Scene.state();
        if (_tween.repeat && _tween.repeat() === -1) {
          if (state === "DURING" && _tween.paused()) {
            _tween.play();
          } else if (state !== "DURING" && !_tween.paused()) {
            _tween.pause();
          }
        } else if (progress != _tween.progress()) {
          if (Scene.duration() === 0) {
            if (progress > 0) {
              _tween.play();
            } else {
              _tween.reverse();
            }
          } else {
            if (Scene.tweenChanges() && _tween.tweenTo) {
              _tween.tweenTo(progress * _tween.duration());
            } else {
              _tween.progress(progress).pause();
            }
          }
        }
      }
    };
    Scene.setTween = function (TweenObject, duration, params) {
      var newTween;
      if (arguments.length > 1) {
        if (arguments.length < 3) {
          params = duration;
          duration = 1;
        }
        TweenObject = Tween.to(TweenObject, duration, params);
      }
      try {
        if (Timeline) {
          newTween = new Timeline({ smoothChildTiming: !0 }).add(TweenObject);
        } else {
          newTween = TweenObject;
        }
        newTween.pause();
      } catch (e) {
        log(
          1,
          "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"
        );
        return Scene;
      }
      if (_tween) {
        Scene.removeTween();
      }
      _tween = newTween;
      if (TweenObject.repeat && TweenObject.repeat() === -1) {
        _tween.repeat(-1);
        _tween.yoyo(TweenObject.yoyo());
      }
      if (Scene.tweenChanges() && !_tween.tweenTo) {
        log(
          2,
          "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."
        );
      }
      if (
        _tween &&
        Scene.controller() &&
        Scene.triggerElement() &&
        Scene.loglevel() >= 2
      ) {
        var triggerTweens = Tween.getTweensOf(Scene.triggerElement()),
          vertical = Scene.controller().info("vertical");
        triggerTweens.forEach(function (value, index) {
          var tweenvars = value.vars.css || value.vars,
            condition = vertical
              ? tweenvars.top !== undefined || tweenvars.bottom !== undefined
              : tweenvars.left !== undefined || tweenvars.right !== undefined;
          if (condition) {
            log(
              2,
              "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"
            );
            return !1;
          }
        });
      }
      if (parseFloat(TweenLite.version) >= 1.14) {
        var list = _tween.getChildren
            ? _tween.getChildren(!0, !0, !1)
            : [_tween],
          newCallback = function () {
            log(
              2,
              "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another"
            );
          };
        for (var i = 0, thisTween, oldCallback; i < list.length; i++) {
          thisTween = list[i];
          if (oldCallback !== newCallback) {
            oldCallback = thisTween.vars.onOverwrite;
            thisTween.vars.onOverwrite = function () {
              if (oldCallback) {
                oldCallback.apply(this, arguments);
              }
              newCallback.apply(this, arguments);
            };
          }
        }
      }
      log(3, "added tween");
      updateTweenProgress();
      return Scene;
    };
    Scene.removeTween = function (reset) {
      if (_tween) {
        if (reset) {
          _tween.progress(0).pause();
        }
        _tween.kill();
        _tween = undefined;
        log(3, "removed tween (reset: " + (reset ? "true" : "false") + ")");
      }
      return Scene;
    };
  });
});
