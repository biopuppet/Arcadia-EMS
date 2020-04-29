!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [], i = e.document, r = Object.getPrototypeOf, o = n.slice, s = n.concat, a = n.push, l = n.indexOf, c = {},
        u = c.toString, h = c.hasOwnProperty, d = h.toString, f = d.call(Object), p = {}, m = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        }, g = function (e) {
            return null != e && e === e.window
        }, v = {type: !0, src: !0, noModule: !0};

    function y(e, t, n) {
        var r, o = (t = t || i).createElement("script");
        if (o.text = e, n) for (r in v) n[r] && (o[r] = n[r]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function _(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
    }

    var b = "3.3.1", w = function (e, t) {
        return new w.fn.init(e, t)
    }, D = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function C(e) {
        var t = !!e && "length" in e && e.length, n = _(e);
        return !m(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    w.fn = w.prototype = {
        jquery: b, constructor: w, length: 0, toArray: function () {
            return o.call(this)
        }, get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return w.each(this, e)
        }, map: function (e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(o.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: a, sort: n.sort, splice: n.splice
    }, w.extend = w.fn.extend = function () {
        var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || m(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], s !== (i = e[t]) && (c && i && (w.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, s[t] = w.extend(c, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }, w.extend({
        expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e)) && (!(t = r(e)) || "function" == typeof (n = h.call(t, "constructor") && t.constructor) && d.call(n) === f)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, globalEval: function (e) {
            y(e)
        }, each: function (e, t) {
            var n, i = 0;
            if (C(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(D, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        }, grep: function (e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
            return i
        }, map: function (e, t, n) {
            var i, r, o = 0, a = [];
            if (C(e)) for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r); else for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
            return s.apply([], a)
        }, guid: 1, support: p
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    var x = function (e) {
        var t, n, i, r, o, s, a, l, c, u, h, d, f, p, m, g, v, y, _, b = "sizzle" + 1 * new Date, w = e.document, D = 0,
            C = 0, x = se(), k = se(), S = se(), T = function (e, t) {
                return e === t && (h = !0), 0
            }, E = {}.hasOwnProperty, A = [], O = A.pop, M = A.push, I = A.push, N = A.slice, P = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                return -1
            },
            j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]", Y = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            H = "\\[" + L + "*(" + Y + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Y + "))|)" + L + "*\\]",
            $ = ":(" + Y + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
            R = new RegExp(L + "+", "g"), q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            W = new RegExp("^" + L + "*," + L + "*"), F = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), B = new RegExp($),
            V = new RegExp("^" + Y + "$"), G = {
                ID: new RegExp("^#(" + Y + ")"),
                CLASS: new RegExp("^\\.(" + Y + ")"),
                TAG: new RegExp("^(" + Y + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + $),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + j + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            }, z = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, X = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), ee = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, ie = function () {
                d()
            }, re = ye(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {dir: "parentNode", next: "legend"});
        try {
            I.apply(A = N.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
        } catch (e) {
            I = {
                apply: A.length ? function (e, t) {
                    M.apply(e, N.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, i, r) {
            var o, a, c, u, h, p, v, y = t && t.ownerDocument, D = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== D && 9 !== D && 11 !== D) return i;
            if (!r && ((t ? t.ownerDocument || t : w) !== f && d(t), t = t || f, m)) {
                if (11 !== D && (h = Z.exec(e))) if (o = h[1]) {
                    if (9 === D) {
                        if (!(c = t.getElementById(o))) return i;
                        if (c.id === o) return i.push(c), i
                    } else if (y && (c = y.getElementById(o)) && _(t, c) && c.id === o) return i.push(c), i
                } else {
                    if (h[2]) return I.apply(i, t.getElementsByTagName(e)), i;
                    if ((o = h[3]) && n.getElementsByClassName && t.getElementsByClassName) return I.apply(i, t.getElementsByClassName(o)), i
                }
                if (n.qsa && !S[e + " "] && (!g || !g.test(e))) {
                    if (1 !== D) y = t, v = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = b), a = (p = s(e)).length; a--;) p[a] = "#" + u + " " + ve(p[a]);
                        v = p.join(","), y = X.test(e) && me(t.parentNode) || t
                    }
                    if (v) try {
                        return I.apply(i, y.querySelectorAll(v)), i
                    } catch (e) {
                    } finally {
                        u === b && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(q, "$1"), t, i, r)
        }

        function se() {
            var e = [];
            return function t(n, r) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
        }

        function ae(e) {
            return e[b] = !0, e
        }

        function le(e) {
            var t = f.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ce(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
        }

        function ue(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function he(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function de(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function fe(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function pe(e) {
            return ae(function (t) {
                return t = +t, ae(function (n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        for (t in n = oe.support = {}, o = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, d = oe.setDocument = function (e) {
            var t, r, s = e ? e.ownerDocument || e : w;
            return s !== f && 9 === s.nodeType && s.documentElement ? (p = (f = s).documentElement, m = !o(f), w !== f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ie, !1) : r.attachEvent && r.attachEvent("onunload", ie)), n.attributes = le(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = le(function (e) {
                return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Q.test(f.getElementsByClassName), n.getById = le(function (e) {
                return p.appendChild(e).id = b, !f.getElementsByName || !f.getElementsByName(b).length
            }), n.getById ? (i.filter.ID = function (e) {
                var t = e.replace(J, ee);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && m) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (i.filter.ID = function (e) {
                var t = e.replace(J, ee);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && m) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (r = t.getElementsByName(e), i = 0; o = r[i++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
            }, v = [], g = [], (n.qsa = Q.test(f.querySelectorAll)) && (le(function (e) {
                p.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + L + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + L + "*(?:value|" + j + ")"), e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]")
            }), le(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = f.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + L + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
            })), (n.matchesSelector = Q.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function (e) {
                n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", $)
            }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(p.compareDocumentPosition), _ = t || Q.test(p.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, T = t ? function (e, t) {
                if (e === t) return h = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === f || e.ownerDocument === w && _(w, e) ? -1 : t === f || t.ownerDocument === w && _(w, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & i ? -1 : 1)
            } : function (e, t) {
                if (e === t) return h = !0, 0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, s = [e], a = [t];
                if (!r || !o) return e === f ? -1 : t === f ? 1 : r ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (r === o) return ue(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (; s[i] === a[i];) i++;
                return i ? ue(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0
            }, f) : f
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== f && d(e), t = t.replace(U, "='$1']"), n.matchesSelector && m && !S[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                var i = y.call(e, t);
                if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {
            }
            return oe(t, f, null, [e]).length > 0
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== f && d(e), _(e, t)
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== f && d(e);
            var r = i.attrHandle[t.toLowerCase()],
                o = r && E.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
            return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function (e) {
            return (e + "").replace(te, ne)
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function (e) {
            var t, i = [], r = 0, o = 0;
            if (h = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(T), h) {
                for (; t = e[o++];) t === e[o] && (r = i.push(o));
                for (; r--;) e.splice(i[r], 1)
            }
            return u = null, e
        }, r = oe.getText = function (e) {
            var t, n = "", i = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else for (; t = e[i++];) n += r(t);
            return n
        }, (i = oe.selectors = {
            cacheLength: 50,
            createPseudo: ae,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(J, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && B.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(J, ee).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = x[e + " "];
                    return t || (t = new RegExp("(^|" + L + ")" + e + "(" + L + "|$)")) && x(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, t, n) {
                    return function (i) {
                        var r = oe.attr(i, e);
                        return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === i && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var c, u, h, d, f, p, m = o !== s ? "nextSibling" : "previousSibling", g = t.parentNode,
                            v = a && t.nodeName.toLowerCase(), y = !l && !a, _ = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    p = m = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? g.firstChild : g.lastChild], s && y) {
                                for (_ = (f = (c = (u = (h = (d = g)[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === D && c[1]) && c[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (_ = f = 0) || p.pop();) if (1 === d.nodeType && ++_ && d === t) {
                                    u[e] = [D, f, _];
                                    break
                                }
                            } else if (y && (_ = f = (c = (u = (h = (d = t)[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === D && c[1]), !1 === _) for (; (d = ++f && d && d[m] || (_ = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++_ || (y && ((u = (h = d[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] = [D, _]), d !== t));) ;
                            return (_ -= r) === i || _ % i == 0 && _ / i >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, n) {
                        for (var i, o = r(e, t), s = o.length; s--;) e[i = P(e, o[s])] = !(n[i] = o[s])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: ae(function (e) {
                    var t = [], n = [], i = a(e.replace(q, "$1"));
                    return i[b] ? ae(function (e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;) (o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: ae(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0
                    }
                }), contains: ae(function (e) {
                    return e = e.replace(J, ee), function (t) {
                        return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                    }
                }), lang: ae(function (e) {
                    return V.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(J, ee).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === p
                }, focus: function (e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: fe(!1), disabled: fe(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !i.pseudos.empty(e)
                }, header: function (e) {
                    return K.test(e.nodeName)
                }, input: function (e) {
                    return z.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: pe(function () {
                    return [0]
                }), last: pe(function (e, t) {
                    return [t - 1]
                }), eq: pe(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: pe(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: pe(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: pe(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }), gt: pe(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }).pseudos.nth = i.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) i.pseudos[t] = he(t);
        for (t in {submit: !0, reset: !0}) i.pseudos[t] = de(t);

        function ge() {
        }

        function ve(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function ye(e, t, n) {
            var i = t.dir, r = t.next, o = r || i, s = n && "parentNode" === o, a = C++;
            return t.first ? function (t, n, r) {
                for (; t = t[i];) if (1 === t.nodeType || s) return e(t, n, r);
                return !1
            } : function (t, n, l) {
                var c, u, h, d = [D, a];
                if (l) {
                    for (; t = t[i];) if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else for (; t = t[i];) if (1 === t.nodeType || s) if (u = (h = t[b] || (t[b] = {}))[t.uniqueID] || (h[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t; else {
                    if ((c = u[o]) && c[0] === D && c[1] === a) return d[2] = c[2];
                    if (u[o] = d, d[2] = e(t, n, l)) return !0
                }
                return !1
            }
        }

        function _e(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var r = e.length; r--;) if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function be(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++) (o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
            return s
        }

        function we(e, t, n, i, r, o) {
            return i && !i[b] && (i = we(i)), r && !r[b] && (r = we(r, o)), ae(function (o, s, a, l) {
                var c, u, h, d = [], f = [], p = s.length, m = o || function (e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []), g = !e || !o && t ? m : be(m, d, e, a, l),
                    v = n ? r || (o ? e : p || i) ? [] : s : g;
                if (n && n(g, v, a, l), i) for (c = be(v, f), i(c, [], a, l), u = c.length; u--;) (h = c[u]) && (v[f[u]] = !(g[f[u]] = h));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = v.length; u--;) (h = v[u]) && c.push(g[u] = h);
                            r(null, v = [], c, l)
                        }
                        for (u = v.length; u--;) (h = v[u]) && (c = r ? P(o, h) : d[u]) > -1 && (o[c] = !(s[c] = h))
                    }
                } else v = be(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : I.apply(s, v)
            })
        }

        function De(e) {
            for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = ye(function (e) {
                return e === t
            }, a, !0), h = ye(function (e) {
                return P(t, e) > -1
            }, a, !0), d = [function (e, n, i) {
                var r = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : h(e, n, i));
                return t = null, r
            }]; l < o; l++) if (n = i.relative[e[l].type]) d = [ye(_e(d), n)]; else {
                if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
                    for (r = ++l; r < o && !i.relative[e[r].type]; r++) ;
                    return we(l > 1 && _e(d), l > 1 && ve(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(q, "$1"), n, l < r && De(e.slice(l, r)), r < o && De(e = e.slice(r)), r < o && ve(e))
                }
                d.push(n)
            }
            return _e(d)
        }

        return ge.prototype = i.filters = i.pseudos, i.setFilters = new ge, s = oe.tokenize = function (e, t) {
            var n, r, o, s, a, l, c, u = k[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, l = [], c = i.preFilter; a;) {
                for (s in n && !(r = W.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = F.exec(a)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(q, " ")
                }), a = a.slice(n.length)), i.filter) !(r = G[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: s,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? oe.error(e) : k(e, l).slice(0)
        }, a = oe.compile = function (e, t) {
            var n, r, o, a, l, u, h = [], p = [], g = S[e + " "];
            if (!g) {
                for (t || (t = s(e)), n = t.length; n--;) (g = De(t[n]))[b] ? h.push(g) : p.push(g);
                (g = S(e, (r = p, a = (o = h).length > 0, l = r.length > 0, u = function (e, t, n, s, u) {
                    var h, p, g, v = 0, y = "0", _ = e && [], b = [], w = c, C = e || l && i.find.TAG("*", u),
                        x = D += null == w ? 1 : Math.random() || .1, k = C.length;
                    for (u && (c = t === f || t || u); y !== k && null != (h = C[y]); y++) {
                        if (l && h) {
                            for (p = 0, t || h.ownerDocument === f || (d(h), n = !m); g = r[p++];) if (g(h, t || f, n)) {
                                s.push(h);
                                break
                            }
                            u && (D = x)
                        }
                        a && ((h = !g && h) && v--, e && _.push(h))
                    }
                    if (v += y, a && y !== v) {
                        for (p = 0; g = o[p++];) g(_, b, t, n);
                        if (e) {
                            if (v > 0) for (; y--;) _[y] || b[y] || (b[y] = O.call(s));
                            b = be(b)
                        }
                        I.apply(s, b), u && !e && b.length > 0 && v + o.length > 1 && oe.uniqueSort(s)
                    }
                    return u && (D = x, c = w), _
                }, a ? ae(u) : u))).selector = e
            }
            return g
        }, l = oe.select = function (e, t, n, r) {
            var o, l, c, u, h, d = "function" == typeof e && e, f = !r && s(e = d.selector || e);
            if (n = n || [], 1 === f.length) {
                if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(c.matches[0].replace(J, ee), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (o = G.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !i.relative[u = c.type]);) if ((h = i.find[u]) && (r = h(c.matches[0].replace(J, ee), X.test(l[0].type) && me(t.parentNode) || t))) {
                    if (l.splice(o, 1), !(e = r.length && ve(l))) return I.apply(n, r), n;
                    break
                }
            }
            return (d || a(e, f))(r, t, !m, n, !t || X.test(e) && me(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(T).join("") === b, n.detectDuplicates = !!h, d(), n.sortDetached = le(function (e) {
            return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
        }), le(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && le(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ce("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function (e) {
            return null == e.getAttribute("disabled")
        }) || ce(j, function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), oe
    }(e);
    w.find = x, w.expr = x.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = x.uniqueSort, w.text = x.getText, w.isXMLDoc = x.isXML, w.contains = x.contains, w.escapeSelector = x.escape;
    var k = function (e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (r && w(e).is(n)) break;
            i.push(e)
        }
        return i
    }, S = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, T = w.expr.match.needsContext;

    function E(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function O(e, t, n) {
        return m(t) ? w.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? w.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function (e) {
            return l.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
    }

    w.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? w.find.matchesSelector(i, e) ? [i] : [] : w.find.matches(e, w.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function (e) {
            var t, n, i = this.length, r = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
                for (t = 0; t < i; t++) if (w.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, r[t], n);
            return i > 1 ? w.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(O(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(O(this, e || [], !0))
        }, is: function (e) {
            return !!O(this, "string" == typeof e && T.test(e) ? w(e) : e || [], !1).length
        }
    });
    var M, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || M, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : I.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), A.test(r[1]) && w.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, M = w(i);
    var N = /^(?:parents|prev(?:Until|All))/, P = {children: !0, contents: !0, next: !0, prev: !0};

    function j(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    w.fn.extend({
        has: function (e) {
            var t = w(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, i = 0, r = this.length, o = [], s = "string" != typeof e && w(e);
            if (!T.test(e)) for (; i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? l.call(w(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return k(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return k(e, "parentNode", n)
        }, next: function (e) {
            return j(e, "nextSibling")
        }, prev: function (e) {
            return j(e, "previousSibling")
        }, nextAll: function (e) {
            return k(e, "nextSibling")
        }, prevAll: function (e) {
            return k(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return k(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return k(e, "previousSibling", n)
        }, siblings: function (e) {
            return S((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return S(e.firstChild)
        }, contents: function (e) {
            return E(e, "iframe") ? e.contentDocument : (E(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, function (e, t) {
        w.fn[e] = function (n, i) {
            var r = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = w.filter(i, r)), this.length > 1 && (P[e] || w.uniqueSort(r), N.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var L = /[^\x20\t\r\n\f]+/g;

    function Y(e) {
        return e
    }

    function H(e) {
        throw e
    }

    function $(e, t, n, i) {
        var r;
        try {
            e && m(r = e.promise) ? r.call(e).done(t).fail(n) : e && m(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    w.Callbacks = function (e) {
        var t, n;
        e = "string" == typeof e ? (t = e, n = {}, w.each(t.match(L) || [], function (e, t) {
            n[t] = !0
        }), n) : w.extend({}, e);
        var i, r, o, s, a = [], l = [], c = -1, u = function () {
            for (s = s || e.once, o = i = !0; l.length; c = -1) for (r = l.shift(); ++c < a.length;) !1 === a[c].apply(r[0], r[1]) && e.stopOnFalse && (c = a.length, r = !1);
            e.memory || (r = !1), i = !1, s && (a = r ? [] : "")
        }, h = {
            add: function () {
                return a && (r && !i && (c = a.length - 1, l.push(r)), function t(n) {
                    w.each(n, function (n, i) {
                        m(i) ? e.unique && h.has(i) || a.push(i) : i && i.length && "string" !== _(i) && t(i)
                    })
                }(arguments), r && !i && u()), this
            }, remove: function () {
                return w.each(arguments, function (e, t) {
                    for (var n; (n = w.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= c && c--
                }), this
            }, has: function (e) {
                return e ? w.inArray(e, a) > -1 : a.length > 0
            }, empty: function () {
                return a && (a = []), this
            }, disable: function () {
                return s = l = [], a = r = "", this
            }, disabled: function () {
                return !a
            }, lock: function () {
                return s = l = [], r || i || (a = r = ""), this
            }, locked: function () {
                return !!s
            }, fireWith: function (e, t) {
                return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), i || u()), this
            }, fire: function () {
                return h.fireWith(this, arguments), this
            }, fired: function () {
                return !!o
            }
        };
        return h
    }, w.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
                i = "pending", r = {
                    state: function () {
                        return i
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, catch: function (e) {
                        return r.then(null, e)
                    }, pipe: function () {
                        var e = arguments;
                        return w.Deferred(function (t) {
                            w.each(n, function (n, i) {
                                var r = m(e[i[4]]) && e[i[4]];
                                o[i[1]](function () {
                                    var e = r && r.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, then: function (t, i, r) {
                        var o = 0;

                        function s(t, n, i, r) {
                            return function () {
                                var a = this, l = arguments, c = function () {
                                    var e, c;
                                    if (!(t < o)) {
                                        if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                        c = e && ("object" == typeof e || "function" == typeof e) && e.then, m(c) ? r ? c.call(e, s(o, n, Y, r), s(o, n, H, r)) : (o++, c.call(e, s(o, n, Y, r), s(o, n, H, r), s(o, n, Y, n.notifyWith))) : (i !== Y && (a = void 0, l = [e]), (r || n.resolveWith)(a, l))
                                    }
                                }, u = r ? c : function () {
                                    try {
                                        c()
                                    } catch (e) {
                                        w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= o && (i !== H && (a = void 0, l = [e]), n.rejectWith(a, l))
                                    }
                                };
                                t ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }

                        return w.Deferred(function (e) {
                            n[0][3].add(s(0, e, m(r) ? r : Y, e.notifyWith)), n[1][3].add(s(0, e, m(t) ? t : Y)), n[2][3].add(s(0, e, m(i) ? i : H))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? w.extend(e, r) : r
                    }
                }, o = {};
            return w.each(n, function (e, t) {
                var s = t[2], a = t[5];
                r[t[1]] = s.add, a && s.add(function () {
                    i = a
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = s.fireWith
            }), r.promise(o), t && t.call(o, o), o
        }, when: function (e) {
            var t = arguments.length, n = t, i = Array(n), r = o.call(arguments), s = w.Deferred(), a = function (e) {
                return function (n) {
                    i[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : n, --t || s.resolveWith(i, r)
                }
            };
            if (t <= 1 && ($(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || m(r[n] && r[n].then))) return s.then();
            for (; n--;) $(r[n], a(n), s.reject);
            return s.promise()
        }
    });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && R.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var q = w.Deferred();

    function W() {
        i.removeEventListener("DOMContentLoaded", W), e.removeEventListener("load", W), w.ready()
    }

    w.fn.ready = function (e) {
        return q.then(e).catch(function (e) {
            w.readyException(e)
        }), this
    }, w.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || q.resolveWith(i, [w]))
        }
    }), w.ready.then = q.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(w.ready) : (i.addEventListener("DOMContentLoaded", W), e.addEventListener("load", W));
    var F = function (e, t, n, i, r, o, s) {
        var a = 0, l = e.length, c = null == n;
        if ("object" === _(n)) for (a in r = !0, n) F(e, t, a, n[a], !0, o, s); else if (void 0 !== i && (r = !0, m(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
            return c.call(w(e), n)
        })), t)) for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
    }, U = /^-ms-/, B = /-([a-z])/g;

    function V(e, t) {
        return t.toUpperCase()
    }

    function G(e) {
        return e.replace(U, "ms-").replace(B, V)
    }

    var z = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function K() {
        this.expando = w.expando + K.uid++
    }

    K.uid = 1, K.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[G(t)] = n; else for (i in t) r[G(i)] = t[i];
            return r
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in i ? [t] : t.match(L) || []).length;
                    for (; n--;) delete i[t[n]]
                }
                (void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var Q = new K, Z = new K, X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, J = /[A-Z]/g;

    function ee(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
            try {
                n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : X.test(r) ? JSON.parse(r) : r)
            } catch (e) {
            }
            Z.set(e, t, n)
        } else n = void 0;
        return n
    }

    w.extend({
        hasData: function (e) {
            return Z.hasData(e) || Q.hasData(e)
        }, data: function (e, t, n) {
            return Z.access(e, t, n)
        }, removeData: function (e, t) {
            Z.remove(e, t)
        }, _data: function (e, t, n) {
            return Q.access(e, t, n)
        }, _removeData: function (e, t) {
            Q.remove(e, t)
        }
    }), w.fn.extend({
        data: function (e, t) {
            var n, i, r, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = Z.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = G(i.slice(5)), ee(o, i, r[i]));
                    Q.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                Z.set(this, e)
            }) : F(this, function (t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) ? n : void 0 !== (n = ee(o, e)) ? n : void 0;
                this.each(function () {
                    Z.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                Z.remove(this, e)
            })
        }
    }), w.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Q.get(e, t), n && (!i || Array.isArray(n) ? i = Q.access(e, t, w.makeArray(n)) : i.push(n)), i || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = w.queue(e, t), i = n.length, r = n.shift(), o = w._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
                w.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: w.Callbacks("once memory").add(function () {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                w.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, i = 1, r = w.Deferred(), o = this, s = this.length, a = function () {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (n = Q.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"], re = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
        }, oe = function (e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
            return r
        };

    function se(e, t, n, i) {
        var r, o, s = 20, a = i ? function () {
                return i.cur()
            } : function () {
                return w.css(e, t, "")
            }, l = a(), c = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            u = (w.cssNumber[t] || "px" !== c && +l) && ne.exec(w.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;) w.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
            u *= 2, w.style(e, t, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }

    var ae = {};

    function le(e, t) {
        for (var n, i, r, o, s, a, l, c = [], u = 0, h = e.length; u < h; u++) (i = e[u]).style && (n = i.style.display, t ? ("none" === n && (c[u] = Q.get(i, "display") || null, c[u] || (i.style.display = "")), "" === i.style.display && re(i) && (c[u] = (o = void 0, s = void 0, void 0, l = void 0, s = (r = i).ownerDocument, a = r.nodeName, (l = ae[a]) || (o = s.body.appendChild(s.createElement(a)), l = w.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), ae[a] = l, l)))) : "none" !== n && (c[u] = "none", Q.set(i, "display", n)));
        for (u = 0; u < h; u++) null != c[u] && (e[u].style.display = c[u]);
        return e
    }

    w.fn.extend({
        show: function () {
            return le(this, !0)
        }, hide: function () {
            return le(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                re(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var ce = /^(?:checkbox|radio)$/i, ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, he = /^$|^module$|\/(?:java|ecma)script/i,
        de = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function fe(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && E(e, t) ? w.merge([e], n) : n
    }

    function pe(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }

    de.optgroup = de.option, de.tbody = de.tfoot = de.colgroup = de.caption = de.thead, de.th = de.td;
    var me, ge, ve = /<|&#?\w+;/;

    function ye(e, t, n, i, r) {
        for (var o, s, a, l, c, u, h = t.createDocumentFragment(), d = [], f = 0, p = e.length; f < p; f++) if ((o = e[f]) || 0 === o) if ("object" === _(o)) w.merge(d, o.nodeType ? [o] : o); else if (ve.test(o)) {
            for (s = s || h.appendChild(t.createElement("div")), a = (ue.exec(o) || ["", ""])[1].toLowerCase(), l = de[a] || de._default, s.innerHTML = l[1] + w.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
            w.merge(d, s.childNodes), (s = h.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        for (h.textContent = "", f = 0; o = d[f++];) if (i && w.inArray(o, i) > -1) r && r.push(o); else if (c = w.contains(o.ownerDocument, o), s = fe(h.appendChild(o), "script"), c && pe(s), n) for (u = 0; o = s[u++];) he.test(o.type || "") && n.push(o);
        return h
    }

    me = i.createDocumentFragment().appendChild(i.createElement("div")), (ge = i.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), me.appendChild(ge), p.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var _e = i.documentElement, be = /^key/, we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        De = /^([^.]*)(?:\.(.+)|)/;

    function Ce() {
        return !0
    }

    function xe() {
        return !1
    }

    function ke() {
        try {
            return i.activeElement
        } catch (e) {
        }
    }

    function Se(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) Se(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = xe; else if (!r) return e;
        return 1 === o && (s = r, (r = function (e) {
            return w().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = w.guid++)), e.each(function () {
            w.event.add(this, t, r, i, n)
        })
    }

    w.event = {
        global: {}, add: function (e, t, n, i, r) {
            var o, s, a, l, c, u, h, d, f, p, m, g = Q.get(e);
            if (g) for (n.handler && (n = (o = n).handler, r = o.selector), r && w.find.matchesSelector(_e, r), n.guid || (n.guid = w.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
                return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
            }), c = (t = (t || "").match(L) || [""]).length; c--;) f = m = (a = De.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f && (h = w.event.special[f] || {}, f = (r ? h.delegateType : h.bindType) || f, h = w.event.special[f] || {}, u = w.extend({
                type: f,
                origType: m,
                data: i,
                handler: n,
                guid: n.guid,
                selector: r,
                needsContext: r && w.expr.match.needsContext.test(r),
                namespace: p.join(".")
            }, o), (d = l[f]) || ((d = l[f] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(f, s)), h.add && (h.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), w.event.global[f] = !0)
        }, remove: function (e, t, n, i, r) {
            var o, s, a, l, c, u, h, d, f, p, m, g = Q.hasData(e) && Q.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(L) || [""]).length; c--;) if (f = m = (a = De.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                    for (h = w.event.special[f] || {}, d = l[f = (i ? h.delegateType : h.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) u = d[o], !r && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, h.remove && h.remove.call(e, u));
                    s && !d.length && (h.teardown && !1 !== h.teardown.call(e, p, g.handle) || w.removeEvent(e, f, g.handle), delete l[f])
                } else for (f in l) w.event.remove(e, f + t[c], n, i, !0);
                w.isEmptyObject(l) && Q.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, i, r, o, s, a = w.event.fix(e), l = new Array(arguments.length),
                c = (Q.get(this, "events") || {})[a.type] || [], u = w.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = w.event.handlers.call(this, a, c), t = 0; (r = s[t++]) && !a.isPropagationStopped();) for (a.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        }, handlers: function (e, t) {
            var n, i, r, o, s, a = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? w(r, this).index(c) > -1 : w.find(r, this, null, [c]).length), s[r] && o.push(i);
                o.length && a.push({elem: c, handlers: o})
            }
            return c = this, l < t.length && a.push({elem: c, handlers: t.slice(l)}), a
        }, addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0, configurable: !0, get: m(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                }, set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (e) {
            return e[w.expando] ? e : new w.Event(e)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== ke() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === ke() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && E(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return E(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : xe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: xe,
        isPropagationStopped: xe,
        isImmediatePropagationStopped: xe,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        w.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, i = e.relatedTarget, r = e.handleObj;
                return i && (i === this || w.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.fn.extend({
        on: function (e, t, n, i) {
            return Se(this, e, t, n, i)
        }, one: function (e, t, n, i) {
            return Se(this, e, t, n, i, 1)
        }, off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = xe), this.each(function () {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var Te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ee = /<script|<style|<link/i, Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Me(e, t) {
        return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
    }

    function Ie(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Ne(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Pe(e, t) {
        var n, i, r, o, s, a, l, c;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e), s = Q.set(t, o), c = o.events)) for (r in delete s.handle, s.events = {}, c) for (n = 0, i = c[r].length; n < i; n++) w.event.add(t, r, c[r][n]);
            Z.hasData(e) && (a = Z.access(e), l = w.extend({}, a), Z.set(t, l))
        }
    }

    function je(e, t, n, i) {
        t = s.apply([], t);
        var r, o, a, l, c, u, h = 0, d = e.length, f = d - 1, g = t[0], v = m(g);
        if (v || d > 1 && "string" == typeof g && !p.checkClone && Ae.test(g)) return e.each(function (r) {
            var o = e.eq(r);
            v && (t[0] = g.call(this, r, o.html())), je(o, t, n, i)
        });
        if (d && (o = (r = ye(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
            for (l = (a = w.map(fe(r, "script"), Ie)).length; h < d; h++) c = r, h !== f && (c = w.clone(c, !0, !0), l && w.merge(a, fe(c, "script"))), n.call(e[h], c, h);
            if (l) for (u = a[a.length - 1].ownerDocument, w.map(a, Ne), h = 0; h < l; h++) c = a[h], he.test(c.type || "") && !Q.access(c, "globalEval") && w.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(c.src) : y(c.textContent.replace(Oe, ""), u, c))
        }
        return e
    }

    function Le(e, t, n) {
        for (var i, r = t ? w.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || w.cleanData(fe(i)), i.parentNode && (n && w.contains(i.ownerDocument, i) && pe(fe(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    w.extend({
        htmlPrefilter: function (e) {
            return e.replace(Te, "<$1></$2>")
        }, clone: function (e, t, n) {
            var i, r, o, s, a, l, c, u = e.cloneNode(!0), h = w.contains(e.ownerDocument, e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (s = fe(u), i = 0, r = (o = fe(e)).length; i < r; i++) a = o[i], l = s[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && ce.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t) if (n) for (o = o || fe(e), s = s || fe(u), i = 0, r = o.length; i < r; i++) Pe(o[i], s[i]); else Pe(e, u);
            return (s = fe(u, "script")).length > 0 && pe(s, !h && fe(e, "script")), u
        }, cleanData: function (e) {
            for (var t, n, i, r = w.event.special, o = 0; void 0 !== (n = e[o]); o++) if (z(n)) {
                if (t = n[Q.expando]) {
                    if (t.events) for (i in t.events) r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
                    n[Q.expando] = void 0
                }
                n[Z.expando] && (n[Z.expando] = void 0)
            }
        }
    }), w.fn.extend({
        detach: function (e) {
            return Le(this, e, !0)
        }, remove: function (e) {
            return Le(this, e)
        }, text: function (e) {
            return F(this, function (e) {
                return void 0 === e ? w.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return je(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e)
            })
        }, prepend: function () {
            return je(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Me(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return je(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return je(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(fe(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return w.clone(this, e, t)
            })
        }, html: function (e) {
            return F(this, function (e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ee.test(e) && !de[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(fe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return je(this, arguments, function (t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(fe(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        w.fn[e] = function (e) {
            for (var n, i = [], r = w(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), w(r[s])[t](n), a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Ye = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"), He = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, $e = new RegExp(ie.join("|"), "i");

    function Re(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || He(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (s = w.style(e, t)), !p.pixelBoxStyles() && Ye.test(s) && $e.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function qe(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    !function () {
        function t() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", _e.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                r = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", a = 36 === n(t.right), o = 36 === n(t.width), u.style.position = "absolute", s = 36 === u.offsetWidth || "absolute", _e.removeChild(c), u = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }

        var r, o, s, a, l, c = i.createElement("div"), u = i.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === u.style.backgroundClip, w.extend(p, {
            boxSizingReliable: function () {
                return t(), o
            }, pixelBoxStyles: function () {
                return t(), a
            }, pixelPosition: function () {
                return t(), r
            }, reliableMarginLeft: function () {
                return t(), l
            }, scrollboxSize: function () {
                return t(), s
            }
        }))
    }();
    var We = /^(none|table(?!-c[ea]).+)/, Fe = /^--/,
        Ue = {position: "absolute", visibility: "hidden", display: "block"},
        Be = {letterSpacing: "0", fontWeight: "400"}, Ve = ["Webkit", "Moz", "ms"], Ge = i.createElement("div").style;

    function ze(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = function (e) {
            if (e in Ge) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--;) if ((e = Ve[n] + t) in Ge) return e
        }(e) || e), t
    }

    function Ke(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function Qe(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0, a = 0, l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += w.css(e, n + ie[s], !0, r)), i ? ("content" === n && (l -= w.css(e, "padding" + ie[s], !0, r)), "margin" !== n && (l -= w.css(e, "border" + ie[s] + "Width", !0, r))) : (l += w.css(e, "padding" + ie[s], !0, r), "padding" !== n ? l += w.css(e, "border" + ie[s] + "Width", !0, r) : a += w.css(e, "border" + ie[s] + "Width", !0, r));
        return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))), l
    }

    function Ze(e, t, n) {
        var i = He(e), r = Re(e, t, i), o = "border-box" === w.css(e, "boxSizing", !1, i), s = o;
        if (Ye.test(r)) {
            if (!n) return r;
            r = "auto"
        }
        return s = s && (p.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === w.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + Qe(e, t, n || (o ? "border" : "content"), s, i, r) + "px"
    }

    function Xe(e, t, n, i, r) {
        return new Xe.prototype.init(e, t, n, i, r)
    }

    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Re(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
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
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = G(t), l = Fe.test(t), c = e.style;
                if (l || (t = ze(a)), s = w.cssHooks[t] || w.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
                "string" === (o = typeof n) && (r = ne.exec(n)) && r[1] && (n = se(e, t, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (w.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function (e, t, n, i) {
            var r, o, s, a = G(t);
            return Fe.test(t) || (t = ze(a)), (s = w.cssHooks[t] || w.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Re(e, t, i)), "normal" === r && t in Be && (r = Be[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return !We.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, t, i) : oe(e, Ue, function () {
                    return Ze(e, t, i)
                })
            }, set: function (e, n, i) {
                var r, o = He(e), s = "border-box" === w.css(e, "boxSizing", !1, o), a = i && Qe(e, t, i, s, o);
                return s && p.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Qe(e, t, "border", !1, o) - .5)), a && (r = ne.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(0, n, a)
            }
        }
    }), w.cssHooks.marginLeft = qe(p.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Re(e, "marginLeft")) || e.getBoundingClientRect().left - oe(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), w.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        w.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ie[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
    }), w.fn.extend({
        css: function (e, t) {
            return F(this, function (e, t, n) {
                var i, r, o = {}, s = 0;
                if (Array.isArray(t)) {
                    for (i = He(e), r = t.length; s < r; s++) o[t[s]] = w.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), w.Tween = Xe, Xe.prototype = {
        constructor: Xe, init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (w.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = Xe.propHooks[this.prop];
            return e && e.get ? e.get(this) : Xe.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = Xe.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Xe.propHooks._default.set(this), this
        }
    }, Xe.prototype.init.prototype = Xe.prototype, Xe.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, Xe.propHooks.scrollTop = Xe.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, w.fx = Xe.prototype.init, w.fx.step = {};
    var Je, et, tt, nt, it = /^(?:toggle|show|hide)$/, rt = /queueHooks$/;

    function ot() {
        et && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ot) : e.setTimeout(ot, w.fx.interval), w.fx.tick())
    }

    function st() {
        return e.setTimeout(function () {
            Je = void 0
        }), Je = Date.now()
    }

    function at(e, t) {
        var n, i = 0, r = {height: e};
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ie[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function lt(e, t, n) {
        for (var i, r = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), o = 0, s = r.length; o < s; o++) if (i = r[o].call(n, t, e)) return i
    }

    function ct(e, t, n) {
        var i, r, o = 0, s = ct.prefilters.length, a = w.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (r) return !1;
            for (var t = Je || st(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(i);
            return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
        }, c = a.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(!0, {specialEasing: {}, easing: w.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Je || st(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var i = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i), i
            },
            stop: function (t) {
                var n = 0, i = t ? c.tweens.length : 0;
                if (r) return this;
                for (r = !0; n < i; n++) c.tweens[n].run(1);
                return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
            }
        }), u = c.props;
        for (!function (e, t) {
            var n, i, r, o, s;
            for (n in e) if (r = t[i = G(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = w.cssHooks[i]) && "expand" in s) for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r); else t[i] = r
        }(u, c.opts.specialEasing); o < s; o++) if (i = ct.prefilters[o].call(c, e, u, c.opts)) return m(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return w.map(u, lt, c), m(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    w.Animation = w.extend(ct, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, ne.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(L);
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], ct.tweeners[n] = ct.tweeners[n] || [], ct.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
            var i, r, o, s, a, l, c, u, h = "width" in t || "height" in t, d = this, f = {}, p = e.style,
                m = e.nodeType && re(e), g = Q.get(e, "fxshow");
            for (i in n.queue || (null == (s = w._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                s.unqueued || a()
            }), s.unqueued++, d.always(function () {
                d.always(function () {
                    s.unqueued--, w.queue(e, "fx").length || s.empty.fire()
                })
            })), t) if (r = t[i], it.test(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    m = !0
                }
                f[i] = g && g[i] || w.style(e, i)
            }
            if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(f)) for (i in h && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = g && g.display) && (c = Q.get(e, "display")), "none" === (u = w.css(e, "display")) && (c ? u = c : (le([e], !0), c = e.style.display || c, u = w.css(e, "display"), le([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === w.css(e, "float") && (l || (d.done(function () {
                p.display = c
            }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            })), l = !1, f) l || (g ? "hidden" in g && (m = g.hidden) : g = Q.access(e, "fxshow", {display: c}), o && (g.hidden = !m), m && le([e], !0), d.done(function () {
                for (i in m || le([e]), Q.remove(e, "fxshow"), f) w.style(e, i, f[i])
            })), l = lt(m ? g[i] : 0, i, d), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
        }], prefilter: function (e, t) {
            t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
        }
    }), w.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            m(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue)
        }, i
    }, w.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(re).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (e, t, n, i) {
            var r = w.isEmptyObject(e), o = w.speed(t, n, i), s = function () {
                var t = ct(this, w.extend({}, e), o);
                (r || Q.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        }, stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, r = null != e && e + "queueHooks", o = w.timers, s = Q.get(this);
                if (r) s[r] && s[r].stop && i(s[r]); else for (r in s) s[r] && s[r].stop && rt.test(r) && i(s[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                !t && n || w.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = Q.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = w.timers, s = i ? i.length : 0;
                for (n.finish = !0, w.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), w.each(["toggle", "show", "hide"], function (e, t) {
        var n = w.fn[t];
        w.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(at(t, !0), e, i, r)
        }
    }), w.each({
        slideDown: at("show"),
        slideUp: at("hide"),
        slideToggle: at("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        w.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), w.timers = [], w.fx.tick = function () {
        var e, t = 0, n = w.timers;
        for (Je = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(), Je = void 0
    }, w.fx.timer = function (e) {
        w.timers.push(e), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function () {
        et || (et = !0, ot())
    }, w.fx.stop = function () {
        et = null
    }, w.fx.speeds = {slow: 600, fast: 200, _default: 400}, w.fn.delay = function (t, n) {
        return t = w.fx && w.fx.speeds[t] || t, n = n || "fx", this.queue(n, function (n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function () {
                e.clearTimeout(r)
            }
        })
    }, tt = i.createElement("input"), nt = i.createElement("select").appendChild(i.createElement("option")), tt.type = "checkbox", p.checkOn = "" !== tt.value, p.optSelected = nt.selected, (tt = i.createElement("input")).value = "t", tt.type = "radio", p.radioValue = "t" === tt.value;
    var ut, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return F(this, w.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (r = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = w.find.attr(e, t)) ? void 0 : i)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!p.radioValue && "radio" === t && E(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, i = 0, r = t && t.match(L);
            if (r && 1 === e.nodeType) for (; n = r[i++];) e.removeAttribute(n)
        }
    }), ut = {
        set: function (e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function (e, t, i) {
            var r, o, s = t.toLowerCase();
            return i || (o = ht[s], ht[s] = r, r = null != n(e, t, i) ? s : null, ht[s] = o), r
        }
    });
    var dt = /^(?:input|select|textarea|button)$/i, ft = /^(?:a|area)$/i;

    function pt(e) {
        return (e.match(L) || []).join(" ")
    }

    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function gt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(L) || []
    }

    w.fn.extend({
        prop: function (e, t) {
            return F(this, w.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        prop: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, r = w.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : dt.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), p.optSelected || (w.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this
    }), w.fn.extend({
        addClass: function (e) {
            var t, n, i, r, o, s, a, l = 0;
            if (m(e)) return this.each(function (t) {
                w(this).addClass(e.call(this, t, mt(this)))
            });
            if ((t = gt(e)).length) for (; n = this[l++];) if (r = mt(n), i = 1 === n.nodeType && " " + pt(r) + " ") {
                for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                r !== (a = pt(i)) && n.setAttribute("class", a)
            }
            return this
        }, removeClass: function (e) {
            var t, n, i, r, o, s, a, l = 0;
            if (m(e)) return this.each(function (t) {
                w(this).removeClass(e.call(this, t, mt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = gt(e)).length) for (; n = this[l++];) if (r = mt(n), i = 1 === n.nodeType && " " + pt(r) + " ") {
                for (s = 0; o = t[s++];) for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                r !== (a = pt(i)) && n.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e, i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t)
            }) : this.each(function () {
                var t, r, o, s;
                if (i) for (r = 0, o = w(this), s = gt(e); t = s[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || ((t = mt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + pt(mt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var vt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = m(e), this.each(function (n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, w(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = w.map(r, function (e) {
                    return null == e ? "" : e + ""
                })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(vt, "") : null == n ? "" : n : void 0
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : pt(w.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, i, r = e.options, o = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [],
                        l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++) if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                        if (t = w(n).val(), s) return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    for (var n, i, r = e.options, o = w.makeArray(t), s = r.length; s--;) ((i = r[s]).selected = w.inArray(w.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
            }
        }, p.checkOn || (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), p.focusin = "onfocusin" in e;
    var yt = /^(?:focusinfocus|focusoutblur)$/, _t = function (e) {
        e.stopPropagation()
    };
    w.extend(w.event, {
        trigger: function (t, n, r, o) {
            var s, a, l, c, u, d, f, p, v = [r || i], y = h.call(t, "type") ? t.type : t,
                _ = h.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = p = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !yt.test(y + w.event.triggered) && (y.indexOf(".") > -1 && (y = (_ = y.split(".")).shift(), _.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = _.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : w.makeArray(n, [t]), f = w.event.special[y] || {}, o || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!o && !f.noBubble && !g(r)) {
                    for (c = f.delegateType || y, yt.test(c + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), l = a;
                    l === (r.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e)
                }
                for (s = 0; (a = v[s++]) && !t.isPropagationStopped();) p = a, t.type = s > 1 ? c : f.bindType || y, (d = (Q.get(a, "events") || {})[t.type] && Q.get(a, "handle")) && d.apply(a, n), (d = u && a[u]) && d.apply && z(a) && (t.result = d.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = y, o || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(v.pop(), n) || !z(r) || u && m(r[y]) && !g(r) && ((l = r[u]) && (r[u] = null), w.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, _t), r[y](), t.isPropagationStopped() && p.removeEventListener(y, _t), w.event.triggered = void 0, l && (r[u] = l)), t.result
            }
        }, simulate: function (e, t, n) {
            var i = w.extend(new w.Event, n, {type: e, isSimulated: !0});
            w.event.trigger(i, null, t)
        }
    }), w.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                w.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), p.focusin || w.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this, r = Q.access(i, t);
                r || i.addEventListener(e, n, !0), Q.access(i, t, (r || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, r = Q.access(i, t) - 1;
                r ? Q.access(i, t, r) : (i.removeEventListener(e, n, !0), Q.remove(i, t))
            }
        }
    });
    var bt = e.location, wt = Date.now(), Dt = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
    };
    var Ct = /\[\]$/, xt = /\r?\n/g, kt = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;

    function Tt(e, t, n, i) {
        var r;
        if (Array.isArray(t)) w.each(t, function (t, r) {
            n || Ct.test(e) ? i(e, r) : Tt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        }); else if (n || "object" !== _(t)) i(e, t); else for (r in t) Tt(e + "[" + r + "]", t[r], n, i)
    }

    w.param = function (e, t) {
        var n, i = [], r = function (e, t) {
            var n = m(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
            r(this.name, this.value)
        }); else for (n in e) Tt(n, e[n], t, r);
        return i.join("&")
    }, w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && St.test(this.nodeName) && !kt.test(e) && (this.checked || !ce.test(e))
            }).map(function (e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
                    return {name: t.name, value: e.replace(xt, "\r\n")}
                }) : {name: t.name, value: n.replace(xt, "\r\n")}
            }).get()
        }
    });
    var Et = /%20/g, At = /#.*$/, Ot = /([?&])_=[^&]*/, Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm, It = /^(?:GET|HEAD)$/,
        Nt = /^\/\//, Pt = {}, jt = {}, Lt = "*/".concat("*"), Yt = i.createElement("a");

    function Ht(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0, o = t.toLowerCase().match(L) || [];
            if (m(n)) for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function $t(e, t, n, i) {
        var r = {}, o = e === jt;

        function s(a) {
            var l;
            return r[a] = !0, w.each(e[a] || [], function (e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
            }), l
        }

        return s(t.dataTypes[0]) || !r["*"] && s("*")
    }

    function Rt(e, t) {
        var n, i, r = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && w.extend(!0, e, i), e
    }

    Yt.href = bt.href, w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Lt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Rt(Rt(e, w.ajaxSettings), t) : Rt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ht(Pt),
        ajaxTransport: Ht(jt),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, s, a, l, c, u, h, d, f, p = w.ajaxSetup({}, n), m = p.context || p,
                g = p.context && (m.nodeType || m.jquery) ? w(m) : w.event, v = w.Deferred(),
                y = w.Callbacks("once memory"), _ = p.statusCode || {}, b = {}, D = {}, C = "canceled", x = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (u) {
                            if (!a) for (a = {}; t = Mt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return u ? s : null
                    }, setRequestHeader: function (e, t) {
                        return null == u && (e = D[e.toLowerCase()] = D[e.toLowerCase()] || e, b[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == u && (p.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (u) x.always(e[x.status]); else for (t in e) _[t] = [_[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || C;
                        return r && r.abort(t), k(0, t), this
                    }
                };
            if (v.promise(x), p.url = ((t || p.url || bt.href) + "").replace(Nt, bt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(L) || [""], null == p.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = Yt.protocol + "//" + Yt.host != c.protocol + "//" + c.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), $t(Pt, p, n, x), u) return x;
            for (d in (h = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !It.test(p.type), o = p.url.replace(At, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Et, "+")) : (f = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (Dt.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Ot, "$1"), f = (Dt.test(o) ? "&" : "?") + "_=" + wt++ + f), p.url = o + f), p.ifModified && (w.lastModified[o] && x.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && x.setRequestHeader("If-None-Match", w.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : p.accepts["*"]), p.headers) x.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(m, x, p) || u)) return x.abort();
            if (C = "abort", y.add(p.complete), x.done(p.success), x.fail(p.error), r = $t(jt, p, n, x)) {
                if (x.readyState = 1, h && g.trigger("ajaxSend", [x, p]), u) return x;
                p.async && p.timeout > 0 && (l = e.setTimeout(function () {
                    x.abort("timeout")
                }, p.timeout));
                try {
                    u = !1, r.send(b, k)
                } catch (e) {
                    if (u) throw e;
                    k(-1, e)
                }
            } else k(-1, "No Transport");

            function k(t, n, i, a) {
                var c, d, f, b, D, C = n;
                u || (u = !0, l && e.clearTimeout(l), r = void 0, s = a || "", x.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (b = function (e, t, n) {
                    for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i) for (r in a) if (a[r] && a[r].test(i)) {
                        l.unshift(r);
                        break
                    }
                    if (l[0] in n) o = l[0]; else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(p, x, i)), b = function (e, t, n, i) {
                    var r, o, s, a, l, c = {}, u = e.dataTypes.slice();
                    if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (o = u.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                        if (!(s = c[l + " " + o] || c["* " + o])) for (r in c) if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                            !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                            break
                        }
                        if (!0 !== s) if (s && e.throws) t = s(t); else try {
                            t = s(t)
                        } catch (e) {
                            return {state: "parsererror", error: s ? e : "No conversion from " + l + " to " + o}
                        }
                    }
                    return {state: "success", data: t}
                }(p, b, x, c), c ? (p.ifModified && ((D = x.getResponseHeader("Last-Modified")) && (w.lastModified[o] = D), (D = x.getResponseHeader("etag")) && (w.etag[o] = D)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, d = b.data, c = !(f = b.error))) : (f = C, !t && C || (C = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (n || C) + "", c ? v.resolveWith(m, [d, C, x]) : v.rejectWith(m, [x, C, f]), x.statusCode(_), _ = void 0, h && g.trigger(c ? "ajaxSuccess" : "ajaxError", [x, p, c ? d : f]), y.fireWith(m, [x, C]), h && (g.trigger("ajaxComplete", [x, p]), --w.active || w.event.trigger("ajaxStop")))
            }

            return x
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], function (e, t) {
        w[t] = function (e, n, i, r) {
            return m(n) && (r = r || i, i = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, w.isPlainObject(e) && e))
        }
    }), w._evalUrl = function (e) {
        return w.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, w.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (e) {
            return m(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = w(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = m(e);
            return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    };
    var qt = {0: 200, 1223: 204}, Wt = w.ajaxSettings.xhr();
    p.cors = !!Wt && "withCredentials" in Wt, p.ajax = Wt = !!Wt, w.ajaxTransport(function (t) {
        var n, i;
        if (p.cors || Wt && !t.crossDomain) return {
            send: function (r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                n = function (e) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(qt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && e.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            }, abort: function () {
                n && n()
            }
        }
    }), w.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), w.ajaxTransport("script", function (e) {
        var t, n;
        if (e.crossDomain) return {
            send: function (r, o) {
                t = w("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), i.head.appendChild(t[0])
            }, abort: function () {
                n && n()
            }
        }
    });
    var Ft, Ut = [], Bt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Ut.pop() || w.expando + "_" + wt++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r, o, s,
            a = !1 !== t.jsonp && (Bt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Bt, "$1" + r) : !1 !== t.jsonp && (t.url += (Dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return s || w.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
            s = arguments
        }, i.always(function () {
            void 0 === o ? w(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Ut.push(r)), s && m(o) && o(s[0]), s = o = void 0
        }), "script"
    }), p.createHTMLDocument = ((Ft = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ft.childNodes.length), w.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(r)) : t = i), o = A.exec(e), s = !n && [], o ? [t.createElement(o[1])] : (o = ye([e], t, s), s && s.length && w(s).remove(), w.merge([], o.childNodes)));
        var r, o, s
    }, w.fn.load = function (e, t, n) {
        var i, r, o, s = this, a = e.indexOf(" ");
        return a > -1 && (i = pt(e.slice(a)), e = e.slice(0, a)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && w.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            s.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), w.expr.pseudos.animated = function (e) {
        return w.grep(w.timers, function (t) {
            return e === t.elem
        }).length
    }, w.offset = {
        setOffset: function (e, t, n) {
            var i, r, o, s, a, l, c = w.css(e, "position"), u = w(e), h = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), o = w.css(e, "top"), l = w.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), m(t) && (t = t.call(e, n, w.extend({}, a))), null != t.top && (h.top = t.top - a.top + s), null != t.left && (h.left = t.left - a.left + r), "using" in t ? t.using.call(e, h) : u.css(h)
        }
    }, w.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                w.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n, i = this[0], r = {top: 0, left: 0};
                if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect(); else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = w(e).offset()).top += w.css(e, "borderTopWidth", !0), r.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - w.css(i, "marginTop", !0),
                    left: t.left - r.left - w.css(i, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
                return e || _e
            })
        }
    }), w.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (i) {
            return F(this, function (e, i, r) {
                var o;
                if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
            }, e, i, arguments.length)
        }
    }), w.each(["top", "left"], function (e, t) {
        w.cssHooks[t] = qe(p.pixelPosition, function (e, n) {
            if (n) return n = Re(e, t), Ye.test(n) ? w(e).position()[t] + "px" : n
        })
    }), w.each({Height: "height", Width: "width"}, function (e, t) {
        w.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
            w.fn[i] = function (r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === o ? "margin" : "border");
                return F(this, function (t, n, r) {
                    var o;
                    return g(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? w.css(t, n, a) : w.style(t, n, r, a)
                }, t, s ? r : void 0, s)
            }
        })
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), w.proxy = function (e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return i = o.call(arguments, 2), (r = function () {
            return e.apply(t || this, i.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || w.guid++, r
    }, w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = E, w.isFunction = m, w.isWindow = g, w.camelCase = G, w.type = _, w.now = Date.now, w.isNumeric = function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return w
    });
    var Vt = e.jQuery, Gt = e.$;
    return w.noConflict = function (t) {
        return e.$ === w && (e.$ = Gt), t && e.jQuery === w && (e.jQuery = Vt), w
    }, t || (e.jQuery = e.$ = w), w
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t(e.bootstrap = {}, e.jQuery)
}(this, function (e, t) {
    "use strict";

    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function i(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    }

    function r(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}, i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function (t) {
                var i, r, o;
                i = e, r = t, o = n[t], r in i ? Object.defineProperty(i, r, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[r] = o
            })
        }
        return e
    }

    for (var o, s, a, l, c, u, h, d, f, p, m, g, v, y, _, b, w, D, C, x, k, S, T, E, A, O, M, I, N, P, j, L, Y, H, $, R, q, W, F, U, B, V, G, z, K, Q, Z, X, J, ee, te, ne, ie, re, oe, se, ae, le, ce, ue, he, de, fe, pe, me = function (e) {
        var t = "transitionend";

        function n(t) {
            var n = this, r = !1;
            return e(this).one(i.TRANSITION_END, function () {
                r = !0
            }), setTimeout(function () {
                r || i.triggerTransitionEnd(n)
            }, t), this
        }

        var i = {
            TRANSITION_END: "bsTransitionEnd", getUID: function (e) {
                do {
                    e += ~~(1e6 * Math.random())
                } while (document.getElementById(e));
                return e
            }, getSelectorFromElement: function (e) {
                var t = e.getAttribute("data-target");
                t && "#" !== t || (t = e.getAttribute("href") || "");
                try {
                    return document.querySelector(t) ? t : null
                } catch (e) {
                    return null
                }
            }, getTransitionDurationFromElement: function (t) {
                if (!t) return 0;
                var n = e(t).css("transition-duration");
                return parseFloat(n) ? (n = n.split(",")[0], 1e3 * parseFloat(n)) : 0
            }, reflow: function (e) {
                return e.offsetHeight
            }, triggerTransitionEnd: function (n) {
                e(n).trigger(t)
            }, supportsTransitionEnd: function () {
                return Boolean(t)
            }, isElement: function (e) {
                return (e[0] || e).nodeType
            }, typeCheckConfig: function (e, t, n) {
                for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
                    var o = n[r], s = t[r],
                        a = s && i.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(a)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + o + '".')
                }
                var l
            }
        };
        return e.fn.emulateTransitionEnd = n, e.event.special[i.TRANSITION_END] = {
            bindType: t,
            delegateType: t,
            handle: function (t) {
                if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        }, i
    }(t = t && t.hasOwnProperty("default") ? t.default : t), ge = (s = "alert", l = "." + (a = "bs.alert"), c = (o = t).fn[s], u = {
        CLOSE: "close" + l,
        CLOSED: "closed" + l,
        CLICK_DATA_API: "click" + l + ".data-api"
    }, h = "alert", d = "fade", f = "show", p = function () {
        function e(e) {
            this._element = e
        }

        var t = e.prototype;
        return t.close = function (e) {
            var t = this._element;
            e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }, t.dispose = function () {
            o.removeData(this._element, a), this._element = null
        }, t._getRootElement = function (e) {
            var t = me.getSelectorFromElement(e), n = !1;
            return t && (n = document.querySelector(t)), n || (n = o(e).closest("." + h)[0]), n
        }, t._triggerCloseEvent = function (e) {
            var t = o.Event(u.CLOSE);
            return o(e).trigger(t), t
        }, t._removeElement = function (e) {
            var t = this;
            if (o(e).removeClass(f), o(e).hasClass(d)) {
                var n = me.getTransitionDurationFromElement(e);
                o(e).one(me.TRANSITION_END, function (n) {
                    return t._destroyElement(e, n)
                }).emulateTransitionEnd(n)
            } else this._destroyElement(e)
        }, t._destroyElement = function (e) {
            o(e).detach().trigger(u.CLOSED).remove()
        }, e._jQueryInterface = function (t) {
            return this.each(function () {
                var n = o(this), i = n.data(a);
                i || (i = new e(this), n.data(a, i)), "close" === t && i[t](this)
            })
        }, e._handleDismiss = function (e) {
            return function (t) {
                t && t.preventDefault(), e.close(this)
            }
        }, i(e, null, [{
            key: "VERSION", get: function () {
                return "4.1.2"
            }
        }]), e
    }(), o(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), o.fn[s] = p._jQueryInterface, o.fn[s].Constructor = p, o.fn[s].noConflict = function () {
        return o.fn[s] = c, p._jQueryInterface
    }, p), ve = (g = "button", y = "." + (v = "bs.button"), _ = ".data-api", b = (m = t).fn[g], w = "active", D = "btn", C = "focus", x = '[data-toggle^="button"]', k = '[data-toggle="buttons"]', S = "input", T = ".active", E = ".btn", A = {
        CLICK_DATA_API: "click" + y + _,
        FOCUS_BLUR_DATA_API: "focus" + y + _ + " blur" + y + _
    }, O = function () {
        function e(e) {
            this._element = e
        }

        var t = e.prototype;
        return t.toggle = function () {
            var e = !0, t = !0, n = m(this._element).closest(k)[0];
            if (n) {
                var i = this._element.querySelector(S);
                if (i) {
                    if ("radio" === i.type) if (i.checked && this._element.classList.contains(w)) e = !1; else {
                        var r = n.querySelector(T);
                        r && m(r).removeClass(w)
                    }
                    if (e) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                        i.checked = !this._element.classList.contains(w), m(i).trigger("change")
                    }
                    i.focus(), t = !1
                }
            }
            t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(w)), e && m(this._element).toggleClass(w)
        }, t.dispose = function () {
            m.removeData(this._element, v), this._element = null
        }, e._jQueryInterface = function (t) {
            return this.each(function () {
                var n = m(this).data(v);
                n || (n = new e(this), m(this).data(v, n)), "toggle" === t && n[t]()
            })
        }, i(e, null, [{
            key: "VERSION", get: function () {
                return "4.1.2"
            }
        }]), e
    }(), m(document).on(A.CLICK_DATA_API, x, function (e) {
        e.preventDefault();
        var t = e.target;
        m(t).hasClass(D) || (t = m(t).closest(E)), O._jQueryInterface.call(m(t), "toggle")
    }).on(A.FOCUS_BLUR_DATA_API, x, function (e) {
        var t = m(e.target).closest(E)[0];
        m(t).toggleClass(C, /^focus(in)?$/.test(e.type))
    }), m.fn[g] = O._jQueryInterface, m.fn[g].Constructor = O, m.fn[g].noConflict = function () {
        return m.fn[g] = b, O._jQueryInterface
    }, O), ye = (I = "carousel", P = "." + (N = "bs.carousel"), j = ".data-api", L = (M = t).fn[I], Y = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0
    }, H = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean"
    }, $ = "next", R = "prev", q = "left", W = "right", F = {
        SLIDE: "slide" + P,
        SLID: "slid" + P,
        KEYDOWN: "keydown" + P,
        MOUSEENTER: "mouseenter" + P,
        MOUSELEAVE: "mouseleave" + P,
        TOUCHEND: "touchend" + P,
        LOAD_DATA_API: "load" + P + j,
        CLICK_DATA_API: "click" + P + j
    }, U = "carousel", B = "active", V = "slide", G = "carousel-item-right", z = "carousel-item-left", K = "carousel-item-next", Q = "carousel-item-prev", Z = {
        ACTIVE: ".active",
        ACTIVE_ITEM: ".active.carousel-item",
        ITEM: ".carousel-item",
        NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
        INDICATORS: ".carousel-indicators",
        DATA_SLIDE: "[data-slide], [data-slide-to]",
        DATA_RIDE: '[data-ride="carousel"]'
    }, X = function () {
        function e(e, t) {
            this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(t), this._element = M(e)[0], this._indicatorsElement = this._element.querySelector(Z.INDICATORS), this._addEventListeners()
        }

        var t = e.prototype;
        return t.next = function () {
            this._isSliding || this._slide($)
        }, t.nextWhenVisible = function () {
            !document.hidden && M(this._element).is(":visible") && "hidden" !== M(this._element).css("visibility") && this.next()
        }, t.prev = function () {
            this._isSliding || this._slide(R)
        }, t.pause = function (e) {
            e || (this._isPaused = !0), this._element.querySelector(Z.NEXT_PREV) && (me.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }, t.cycle = function (e) {
            e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }, t.to = function (e) {
            var t = this;
            this._activeElement = this._element.querySelector(Z.ACTIVE_ITEM);
            var n = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) M(this._element).one(F.SLID, function () {
                return t.to(e)
            }); else {
                if (n === e) return this.pause(), void this.cycle();
                var i = e > n ? $ : R;
                this._slide(i, this._items[e])
            }
        }, t.dispose = function () {
            M(this._element).off(P), M.removeData(this._element, N), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
        }, t._getConfig = function (e) {
            return e = r({}, Y, e), me.typeCheckConfig(I, e, H), e
        }, t._addEventListeners = function () {
            var e = this;
            this._config.keyboard && M(this._element).on(F.KEYDOWN, function (t) {
                return e._keydown(t)
            }), "hover" === this._config.pause && (M(this._element).on(F.MOUSEENTER, function (t) {
                return e.pause(t)
            }).on(F.MOUSELEAVE, function (t) {
                return e.cycle(t)
            }), "ontouchstart" in document.documentElement && M(this._element).on(F.TOUCHEND, function () {
                e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                    return e.cycle(t)
                }, 500 + e._config.interval)
            }))
        }, t._keydown = function (e) {
            if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                case 37:
                    e.preventDefault(), this.prev();
                    break;
                case 39:
                    e.preventDefault(), this.next()
            }
        }, t._getItemIndex = function (e) {
            return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(Z.ITEM)) : [], this._items.indexOf(e)
        }, t._getItemByDirection = function (e, t) {
            var n = e === $, i = e === R, r = this._getItemIndex(t), o = this._items.length - 1;
            if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
            var s = (r + (e === R ? -1 : 1)) % this._items.length;
            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
        }, t._triggerSlideEvent = function (e, t) {
            var n = this._getItemIndex(e), i = this._getItemIndex(this._element.querySelector(Z.ACTIVE_ITEM)),
                r = M.Event(F.SLIDE, {relatedTarget: e, direction: t, from: i, to: n});
            return M(this._element).trigger(r), r
        }, t._setActiveIndicatorElement = function (e) {
            if (this._indicatorsElement) {
                var t = [].slice.call(this._indicatorsElement.querySelectorAll(Z.ACTIVE));
                M(t).removeClass(B);
                var n = this._indicatorsElement.children[this._getItemIndex(e)];
                n && M(n).addClass(B)
            }
        }, t._slide = function (e, t) {
            var n, i, r, o = this, s = this._element.querySelector(Z.ACTIVE_ITEM), a = this._getItemIndex(s),
                l = t || s && this._getItemByDirection(e, s), c = this._getItemIndex(l), u = Boolean(this._interval);
            if (e === $ ? (n = z, i = K, r = q) : (n = G, i = Q, r = W), l && M(l).hasClass(B)) this._isSliding = !1; else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
                var h = M.Event(F.SLID, {relatedTarget: l, direction: r, from: a, to: c});
                if (M(this._element).hasClass(V)) {
                    M(l).addClass(i), me.reflow(l), M(s).addClass(n), M(l).addClass(n);
                    var d = me.getTransitionDurationFromElement(s);
                    M(s).one(me.TRANSITION_END, function () {
                        M(l).removeClass(n + " " + i).addClass(B), M(s).removeClass(B + " " + i + " " + n), o._isSliding = !1, setTimeout(function () {
                            return M(o._element).trigger(h)
                        }, 0)
                    }).emulateTransitionEnd(d)
                } else M(s).removeClass(B), M(l).addClass(B), this._isSliding = !1, M(this._element).trigger(h);
                u && this.cycle()
            }
        }, e._jQueryInterface = function (t) {
            return this.each(function () {
                var n = M(this).data(N), i = r({}, Y, M(this).data());
                "object" == typeof t && (i = r({}, i, t));
                var o = "string" == typeof t ? t : i.slide;
                if (n || (n = new e(this, i), M(this).data(N, n)), "number" == typeof t) n.to(t); else if ("string" == typeof o) {
                    if (void 0 === n[o]) throw new TypeError('No method named "' + o + '"');
                    n[o]()
                } else i.interval && (n.pause(), n.cycle())
            })
        }, e._dataApiClickHandler = function (t) {
            var n = me.getSelectorFromElement(this);
            if (n) {
                var i = M(n)[0];
                if (i && M(i).hasClass(U)) {
                    var o = r({}, M(i).data(), M(this).data()), s = this.getAttribute("data-slide-to");
                    s && (o.interval = !1), e._jQueryInterface.call(M(i), o), s && M(i).data(N).to(s), t.preventDefault()
                }
            }
        }, i(e, null, [{
            key: "VERSION", get: function () {
                return "4.1.2"
            }
        }, {
            key: "Default", get: function () {
                return Y
            }
        }]), e
    }(), M(document).on(F.CLICK_DATA_API, Z.DATA_SLIDE, X._dataApiClickHandler), M(window).on(F.LOAD_DATA_API, function () {
        for (var e = [].slice.call(document.querySelectorAll(Z.DATA_RIDE)), t = 0, n = e.length; t < n; t++) {
            var i = M(e[t]);
            X._jQueryInterface.call(i, i.data())
        }
    }), M.fn[I] = X._jQueryInterface, M.fn[I].Constructor = X, M.fn[I].noConflict = function () {
        return M.fn[I] = L, X._jQueryInterface
    }, X), _e = (ee = "collapse", ne = "." + (te = "bs.collapse"), ie = (J = t).fn[ee], re = {
        toggle: !0,
        parent: ""
    }, oe = {toggle: "boolean", parent: "(string|element)"}, se = {
        SHOW: "show" + ne,
        SHOWN: "shown" + ne,
        HIDE: "hide" + ne,
        HIDDEN: "hidden" + ne,
        CLICK_DATA_API: "click" + ne + ".data-api"
    }, ae = "show", le = "collapse", ce = "collapsing", ue = "collapsed", he = "width", de = "height", fe = {
        ACTIVES: ".show, .collapsing",
        DATA_TOGGLE: '[data-toggle="collapse"]'
    }, pe = function () {
        function e(e, t) {
            this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = J.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll(fe.DATA_TOGGLE)), i = 0, r = n.length; i < r; i++) {
                var o = n[i], s = me.getSelectorFromElement(o),
                    a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
                        return t === e
                    });
                null !== s && a.length > 0 && (this._selector = s, this._triggerArray.push(o))
            }
            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
        }

        var t = e.prototype;
        return t.toggle = function () {
            J(this._element).hasClass(ae) ? this.hide() : this.show()
        }, t.show = function () {
            var t, n, i = this;
            if (!this._isTransitioning && !J(this._element).hasClass(ae) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(fe.ACTIVES)).filter(function (e) {
                return e.getAttribute("data-parent") === i._config.parent
            })).length && (t = null), !(t && (n = J(t).not(this._selector).data(te)) && n._isTransitioning))) {
                var r = J.Event(se.SHOW);
                if (J(this._element).trigger(r), !r.isDefaultPrevented()) {
                    t && (e._jQueryInterface.call(J(t).not(this._selector), "hide"), n || J(t).data(te, null));
                    var o = this._getDimension();
                    J(this._element).removeClass(le).addClass(ce), this._element.style[o] = 0, this._triggerArray.length && J(this._triggerArray).removeClass(ue).attr("aria-expanded", !0), this.setTransitioning(!0);
                    var s = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                        a = me.getTransitionDurationFromElement(this._element);
                    J(this._element).one(me.TRANSITION_END, function () {
                        J(i._element).removeClass(ce).addClass(le).addClass(ae), i._element.style[o] = "", i.setTransitioning(!1), J(i._element).trigger(se.SHOWN)
                    }).emulateTransitionEnd(a), this._element.style[o] = this._element[s] + "px"
                }
            }
        }, t.hide = function () {
            var e = this;
            if (!this._isTransitioning && J(this._element).hasClass(ae)) {
                var t = J.Event(se.HIDE);
                if (J(this._element).trigger(t), !t.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", me.reflow(this._element), J(this._element).addClass(ce).removeClass(le).removeClass(ae);
                    var i = this._triggerArray.length;
                    if (i > 0) for (var r = 0; r < i; r++) {
                        var o = this._triggerArray[r], s = me.getSelectorFromElement(o);
                        if (null !== s) J([].slice.call(document.querySelectorAll(s))).hasClass(ae) || J(o).addClass(ue).attr("aria-expanded", !1)
                    }
                    this.setTransitioning(!0);
                    this._element.style[n] = "";
                    var a = me.getTransitionDurationFromElement(this._element);
                    J(this._element).one(me.TRANSITION_END, function () {
                        e.setTransitioning(!1), J(e._element).removeClass(ce).addClass(le).trigger(se.HIDDEN)
                    }).emulateTransitionEnd(a)
                }
            }
        }, t.setTransitioning = function (e) {
            this._isTransitioning = e
        }, t.dispose = function () {
            J.removeData(this._element, te), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
        }, t._getConfig = function (e) {
            return (e = r({}, re, e)).toggle = Boolean(e.toggle), me.typeCheckConfig(ee, e, oe), e
        }, t._getDimension = function () {
            return J(this._element).hasClass(he) ? he : de
        }, t._getParent = function () {
            var t = this, n = null;
            me.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
            var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                r = [].slice.call(n.querySelectorAll(i));
            return J(r).each(function (n, i) {
                t._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i])
            }), n
        }, t._addAriaAndCollapsedClass = function (e, t) {
            if (e) {
                var n = J(e).hasClass(ae);
                t.length && J(t).toggleClass(ue, !n).attr("aria-expanded", n)
            }
        }, e._getTargetFromElement = function (e) {
            var t = me.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null
        }, e._jQueryInterface = function (t) {
            return this.each(function () {
                var n = J(this), i = n.data(te), o = r({}, re, n.data(), "object" == typeof t && t ? t : {});
                if (!i && o.toggle && /show|hide/.test(t) && (o.toggle = !1), i || (i = new e(this, o), n.data(te, i)), "string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                    i[t]()
                }
            })
        }, i(e, null, [{
            key: "VERSION", get: function () {
                return "4.1.2"
            }
        }, {
            key: "Default", get: function () {
                return re
            }
        }]), e
    }(), J(document).on(se.CLICK_DATA_API, fe.DATA_TOGGLE, function (e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var t = J(this), n = me.getSelectorFromElement(this), i = [].slice.call(document.querySelectorAll(n));
        J(i).each(function () {
            var e = J(this), n = e.data(te) ? "toggle" : t.data();
            pe._jQueryInterface.call(e, n)
        })
    }), J.fn[ee] = pe._jQueryInterface, J.fn[ee].Constructor = pe, J.fn[ee].noConflict = function () {
        return J.fn[ee] = ie, pe._jQueryInterface
    }, pe), be = "undefined" != typeof window && "undefined" != typeof document, we = ["Edge", "Trident", "Firefox"], De = 0, Ce = 0; Ce < we.length; Ce += 1) if (be && navigator.userAgent.indexOf(we[Ce]) >= 0) {
        De = 1;
        break
    }
    var xe = be && window.Promise ? function (e) {
        var t = !1;
        return function () {
            t || (t = !0, window.Promise.resolve().then(function () {
                t = !1, e()
            }))
        }
    } : function (e) {
        var t = !1;
        return function () {
            t || (t = !0, setTimeout(function () {
                t = !1, e()
            }, De))
        }
    };

    function ke(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function Se(e, t) {
        if (1 !== e.nodeType) return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function Te(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function Ee(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case"HTML":
            case"BODY":
                return e.ownerDocument.body;
            case"#document":
                return e.body
        }
        var t = Se(e), n = t.overflow, i = t.overflowX, r = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? e : Ee(Te(e))
    }

    var Ae = be && !(!window.MSInputMethodContext || !document.documentMode),
        Oe = be && /MSIE 10/.test(navigator.userAgent);

    function Me(e) {
        return 11 === e ? Ae : 10 === e ? Oe : Ae || Oe
    }

    function Ie(e) {
        if (!e) return document.documentElement;
        for (var t = Me(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === Se(n, "position") ? Ie(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function Ne(e) {
        return null !== e.parentNode ? Ne(e.parentNode) : e
    }

    function Pe(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, i = n ? e : t, r = n ? t : e,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var s, a, l = o.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && Ie(s.firstElementChild) !== s ? Ie(l) : l;
        var c = Ne(e);
        return c.host ? Pe(c.host, t) : Pe(e, Ne(t).host)
    }

    function je(e) {
        var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[t]
        }
        return e[t]
    }

    function Le(e, t) {
        var n = "x" === t ? "Left" : "Top", i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }

    function Ye(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], Me(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }

    function He() {
        var e = document.body, t = document.documentElement, n = Me(10) && getComputedStyle(t);
        return {height: Ye("Height", e, t, n), width: Ye("Width", e, t, n)}
    }

    var $e = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }, Re = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), qe = function (e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }, We = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    };

    function Fe(e) {
        return We({}, e, {right: e.left + e.width, bottom: e.top + e.height})
    }

    function Ue(e) {
        var t = {};
        try {
            if (Me(10)) {
                t = e.getBoundingClientRect();
                var n = je(e, "top"), i = je(e, "left");
                t.top += n, t.left += i, t.bottom += n, t.right += i
            } else t = e.getBoundingClientRect()
        } catch (e) {
        }
        var r = {left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top},
            o = "HTML" === e.nodeName ? He() : {}, s = o.width || e.clientWidth || r.right - r.left,
            a = o.height || e.clientHeight || r.bottom - r.top, l = e.offsetWidth - s, c = e.offsetHeight - a;
        if (l || c) {
            var u = Se(e);
            l -= Le(u, "x"), c -= Le(u, "y"), r.width -= l, r.height -= c
        }
        return Fe(r)
    }

    function Be(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = Me(10), r = "HTML" === t.nodeName,
            o = Ue(e), s = Ue(t), a = Ee(e), l = Se(t), c = parseFloat(l.borderTopWidth, 10),
            u = parseFloat(l.borderLeftWidth, 10);
        n && "HTML" === t.nodeName && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var h = Fe({top: o.top - s.top - c, left: o.left - s.left - u, width: o.width, height: o.height});
        if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
            var d = parseFloat(l.marginTop, 10), f = parseFloat(l.marginLeft, 10);
            h.top -= c - d, h.bottom -= c - d, h.left -= u - f, h.right -= u - f, h.marginTop = d, h.marginLeft = f
        }
        return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (h = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = je(t, "top"),
                r = je(t, "left"), o = n ? -1 : 1;
            return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
        }(h, t)), h
    }

    function Ve(e) {
        if (!e || !e.parentElement || Me()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === Se(t, "transform");) t = t.parentElement;
        return t || document.documentElement
    }

    function Ge(e, t, n, i) {
        var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o = {top: 0, left: 0},
            s = r ? Ve(e) : Pe(e, t);
        if ("viewport" === i) o = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement, i = Be(e, n), r = Math.max(n.clientWidth, window.innerWidth || 0),
                o = Math.max(n.clientHeight, window.innerHeight || 0), s = t ? 0 : je(n), a = t ? 0 : je(n, "left");
            return Fe({top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: r, height: o})
        }(s, r); else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = Ee(Te(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
            var l = Be(a, s, r);
            if ("HTML" !== a.nodeName || function e(t) {
                var n = t.nodeName;
                return "BODY" !== n && "HTML" !== n && ("fixed" === Se(t, "position") || e(Te(t)))
            }(s)) o = l; else {
                var c = He(), u = c.height, h = c.width;
                o.top += l.top - l.marginTop, o.bottom = u + l.top, o.left += l.left - l.marginLeft, o.right = h + l.left
            }
        }
        return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o
    }

    function ze(e, t, n, i, r) {
        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var s = Ge(n, i, o, r), a = {
            top: {width: s.width, height: t.top - s.top},
            right: {width: s.right - t.right, height: s.height},
            bottom: {width: s.width, height: s.bottom - t.bottom},
            left: {width: t.left - s.left, height: s.height}
        }, l = Object.keys(a).map(function (e) {
            return We({key: e}, a[e], {area: (t = a[e], t.width * t.height)});
            var t
        }).sort(function (e, t) {
            return t.area - e.area
        }), c = l.filter(function (e) {
            var t = e.width, i = e.height;
            return t >= n.clientWidth && i >= n.clientHeight
        }), u = c.length > 0 ? c[0].key : l[0].key, h = e.split("-")[1];
        return u + (h ? "-" + h : "")
    }

    function Ke(e, t, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return Be(n, i ? Ve(t) : Pe(t, n), i)
    }

    function Qe(e) {
        var t = getComputedStyle(e), n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {width: e.offsetWidth + i, height: e.offsetHeight + n}
    }

    function Ze(e) {
        var t = {left: "right", right: "left", bottom: "top", top: "bottom"};
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e]
        })
    }

    function Xe(e, t, n) {
        n = n.split("-")[0];
        var i = Qe(e), r = {width: i.width, height: i.height}, o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left", a = o ? "left" : "top", l = o ? "height" : "width", c = o ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[Ze(a)], r
    }

    function Je(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function et(e, t, n) {
        return (void 0 === n ? e : e.slice(0, function (e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function (e) {
                return e[t] === n
            });
            var i = Je(e, function (e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(e, "name", n))).forEach(function (e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = e.function || e.fn;
            e.enabled && ke(n) && (t.offsets.popper = Fe(t.offsets.popper), t.offsets.reference = Fe(t.offsets.reference), t = n(t, e))
        }), t
    }

    function tt(e, t) {
        return e.some(function (e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }

    function nt(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i], o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function it(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function rt(e, t, n, i) {
        n.updateBound = i, it(e).addEventListener("resize", n.updateBound, {passive: !0});
        var r = Ee(e);
        return function e(t, n, i, r) {
            var o = "BODY" === t.nodeName, s = o ? t.ownerDocument.defaultView : t;
            s.addEventListener(n, i, {passive: !0}), o || e(Ee(s.parentNode), n, i, r), r.push(s)
        }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
    }

    function ot() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, it(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
            e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function st(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function at(e, t) {
        Object.keys(t).forEach(function (n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && st(t[n]) && (i = "px"), e.style[n] = t[n] + i
        })
    }

    function lt(e, t, n) {
        var i = Je(e, function (e) {
            return e.name === t
        }), r = !!i && e.some(function (e) {
            return e.name === n && e.enabled && e.order < i.order
        });
        if (!r) {
            var o = "`" + t + "`", s = "`" + n + "`";
            console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }

    var ct = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        ut = ct.slice(3);

    function ht(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = ut.indexOf(e),
            i = ut.slice(n + 1).concat(ut.slice(0, n));
        return t ? i.reverse() : i
    }

    var dt = {FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise"};

    function ft(e, t, n, i) {
        var r = [0, 0], o = -1 !== ["right", "left"].indexOf(i), s = e.split(/(\+|\-)/).map(function (e) {
            return e.trim()
        }), a = s.indexOf(Je(s, function (e) {
            return -1 !== e.search(/,|\s/)
        }));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
        return (c = c.map(function (e, i) {
            var r = (1 === i ? !o : o) ? "height" : "width", s = !1;
            return e.reduce(function (e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
            }, []).map(function (e) {
                return function (e, t, n, i) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +r[1], s = r[2];
                    if (!o) return e;
                    if (0 === s.indexOf("%")) {
                        var a = void 0;
                        switch (s) {
                            case"%p":
                                a = n;
                                break;
                            case"%":
                            case"%r":
                            default:
                                a = i
                        }
                        return Fe(a)[t] / 100 * o
                    }
                    if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                    return o
                }(e, r, t, n)
            })
        })).forEach(function (e, t) {
            e.forEach(function (n, i) {
                st(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
            })
        }), r
    }

    var pt = {
        placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
        }, onUpdate: function () {
        }, modifiers: {
            shift: {
                order: 100, enabled: !0, fn: function (e) {
                    var t = e.placement, n = t.split("-")[0], i = t.split("-")[1];
                    if (i) {
                        var r = e.offsets, o = r.reference, s = r.popper, a = -1 !== ["bottom", "top"].indexOf(n),
                            l = a ? "left" : "top", c = a ? "width" : "height",
                            u = {start: qe({}, l, o[l]), end: qe({}, l, o[l] + o[c] - s[c])};
                        e.offsets.popper = We({}, s, u[i])
                    }
                    return e
                }
            }, offset: {
                order: 200, enabled: !0, fn: function (e, t) {
                    var n = t.offset, i = e.placement, r = e.offsets, o = r.popper, s = r.reference,
                        a = i.split("-")[0], l = void 0;
                    return l = st(+n) ? [+n, 0] : ft(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), e.popper = o, e
                }, offset: 0
            }, preventOverflow: {
                order: 300, enabled: !0, fn: function (e, t) {
                    var n = t.boundariesElement || Ie(e.instance.popper);
                    e.instance.reference === n && (n = Ie(n));
                    var i = nt("transform"), r = e.instance.popper.style, o = r.top, s = r.left, a = r[i];
                    r.top = "", r.left = "", r[i] = "";
                    var l = Ge(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                    r.top = o, r.left = s, r[i] = a, t.boundaries = l;
                    var c = t.priority, u = e.offsets.popper, h = {
                        primary: function (e) {
                            var n = u[e];
                            return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), qe({}, e, n)
                        }, secondary: function (e) {
                            var n = "right" === e ? "left" : "top", i = u[n];
                            return u[e] > l[e] && !t.escapeWithReference && (i = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), qe({}, n, i)
                        }
                    };
                    return c.forEach(function (e) {
                        var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                        u = We({}, u, h[t](e))
                    }), e.offsets.popper = u, e
                }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
            }, keepTogether: {
                order: 400, enabled: !0, fn: function (e) {
                    var t = e.offsets, n = t.popper, i = t.reference, r = e.placement.split("-")[0], o = Math.floor,
                        s = -1 !== ["top", "bottom"].indexOf(r), a = s ? "right" : "bottom", l = s ? "left" : "top",
                        c = s ? "width" : "height";
                    return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
                }
            }, arrow: {
                order: 500, enabled: !0, fn: function (e, t) {
                    var n;
                    if (!lt(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var i = t.element;
                    if ("string" == typeof i) {
                        if (!(i = e.instance.popper.querySelector(i))) return e
                    } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var r = e.placement.split("-")[0], o = e.offsets, s = o.popper, a = o.reference,
                        l = -1 !== ["left", "right"].indexOf(r), c = l ? "height" : "width", u = l ? "Top" : "Left",
                        h = u.toLowerCase(), d = l ? "left" : "top", f = l ? "bottom" : "right", p = Qe(i)[c];
                    a[f] - p < s[h] && (e.offsets.popper[h] -= s[h] - (a[f] - p)), a[h] + p > s[f] && (e.offsets.popper[h] += a[h] + p - s[f]), e.offsets.popper = Fe(e.offsets.popper);
                    var m = a[h] + a[c] / 2 - p / 2, g = Se(e.instance.popper), v = parseFloat(g["margin" + u], 10),
                        y = parseFloat(g["border" + u + "Width"], 10), _ = m - e.offsets.popper[h] - v - y;
                    return _ = Math.max(Math.min(s[c] - p, _), 0), e.arrowElement = i, e.offsets.arrow = (qe(n = {}, h, Math.round(_)), qe(n, d, ""), n), e
                }, element: "[x-arrow]"
            }, flip: {
                order: 600, enabled: !0, fn: function (e, t) {
                    if (tt(e.instance.modifiers, "inner")) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var n = Ge(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                        i = e.placement.split("-")[0], r = Ze(i), o = e.placement.split("-")[1] || "", s = [];
                    switch (t.behavior) {
                        case dt.FLIP:
                            s = [i, r];
                            break;
                        case dt.CLOCKWISE:
                            s = ht(i);
                            break;
                        case dt.COUNTERCLOCKWISE:
                            s = ht(i, !0);
                            break;
                        default:
                            s = t.behavior
                    }
                    return s.forEach(function (a, l) {
                        if (i !== a || s.length === l + 1) return e;
                        i = e.placement.split("-")[0], r = Ze(i);
                        var c, u = e.offsets.popper, h = e.offsets.reference, d = Math.floor,
                            f = "left" === i && d(u.right) > d(h.left) || "right" === i && d(u.left) < d(h.right) || "top" === i && d(u.bottom) > d(h.top) || "bottom" === i && d(u.top) < d(h.bottom),
                            p = d(u.left) < d(n.left), m = d(u.right) > d(n.right), g = d(u.top) < d(n.top),
                            v = d(u.bottom) > d(n.bottom),
                            y = "left" === i && p || "right" === i && m || "top" === i && g || "bottom" === i && v,
                            _ = -1 !== ["top", "bottom"].indexOf(i),
                            b = !!t.flipVariations && (_ && "start" === o && p || _ && "end" === o && m || !_ && "start" === o && g || !_ && "end" === o && v);
                        (f || y || b) && (e.flipped = !0, (f || y) && (i = s[l + 1]), b && (o = "end" === (c = o) ? "start" : "start" === c ? "end" : c), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = We({}, e.offsets.popper, Xe(e.instance.popper, e.offsets.reference, e.placement)), e = et(e.instance.modifiers, e, "flip"))
                    }), e
                }, behavior: "flip", padding: 5, boundariesElement: "viewport"
            }, inner: {
                order: 700, enabled: !1, fn: function (e) {
                    var t = e.placement, n = t.split("-")[0], i = e.offsets, r = i.popper, o = i.reference,
                        s = -1 !== ["left", "right"].indexOf(n), a = -1 === ["top", "left"].indexOf(n);
                    return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = Ze(t), e.offsets.popper = Fe(r), e
                }
            }, hide: {
                order: 800, enabled: !0, fn: function (e) {
                    if (!lt(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference, n = Je(e.instance.modifiers, function (e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            }, computeStyle: {
                order: 850, enabled: !0, fn: function (e, t) {
                    var n = t.x, i = t.y, r = e.offsets.popper, o = Je(e.instance.modifiers, function (e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s = void 0 !== o ? o : t.gpuAcceleration, a = Ue(Ie(e.instance.popper)),
                        l = {position: r.position}, c = {
                            left: Math.floor(r.left),
                            top: Math.round(r.top),
                            bottom: Math.round(r.bottom),
                            right: Math.floor(r.right)
                        }, u = "bottom" === n ? "top" : "bottom", h = "right" === i ? "left" : "right", d = nt("transform"),
                        f = void 0, p = void 0;
                    if (p = "bottom" === u ? -a.height + c.bottom : c.top, f = "right" === h ? -a.width + c.right : c.left, s && d) l[d] = "translate3d(" + f + "px, " + p + "px, 0)", l[u] = 0, l[h] = 0, l.willChange = "transform"; else {
                        var m = "bottom" === u ? -1 : 1, g = "right" === h ? -1 : 1;
                        l[u] = p * m, l[h] = f * g, l.willChange = u + ", " + h
                    }
                    var v = {"x-placement": e.placement};
                    return e.attributes = We({}, v, e.attributes), e.styles = We({}, l, e.styles), e.arrowStyles = We({}, e.offsets.arrow, e.arrowStyles), e
                }, gpuAcceleration: !0, x: "bottom", y: "right"
            }, applyStyle: {
                order: 900, enabled: !0, fn: function (e) {
                    var t, n;
                    return at(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function (e) {
                        !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                    }), e.arrowElement && Object.keys(e.arrowStyles).length && at(e.arrowElement, e.arrowStyles), e
                }, onLoad: function (e, t, n, i, r) {
                    var o = Ke(r, t, e, n.positionFixed),
                        s = ze(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", s), at(t, {position: n.positionFixed ? "fixed" : "absolute"}), n
                }, gpuAcceleration: void 0
            }
        }
    }, mt = function () {
        function e(t, n) {
            var i = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            $e(this, e), this.scheduleUpdate = function () {
                return requestAnimationFrame(i.update)
            }, this.update = xe(this.update.bind(this)), this.options = We({}, e.Defaults, r), this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(We({}, e.Defaults.modifiers, r.modifiers)).forEach(function (t) {
                i.options.modifiers[t] = We({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {})
            }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                return We({name: e}, i.options.modifiers[e])
            }).sort(function (e, t) {
                return e.order - t.order
            }), this.modifiers.forEach(function (e) {
                e.enabled && ke(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
            }), this.update();
            var o = this.options.eventsEnabled;
            o && this.enableEventListeners(), this.state.eventsEnabled = o
        }

        return Re(e, [{
            key: "update", value: function () {
                return function () {
                    if (!this.state.isDestroyed) {
                        var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
                        e.offsets.reference = Ke(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = ze(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = Xe(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = et(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                    }
                }.call(this)
            }
        }, {
            key: "destroy", value: function () {
                return function () {
                    return this.state.isDestroyed = !0, tt(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[nt("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                }.call(this)
            }
        }, {
            key: "enableEventListeners", value: function () {
                return function () {
                    this.state.eventsEnabled || (this.state = rt(this.reference, this.options, this.state, this.scheduleUpdate))
                }.call(this)
            }
        }, {
            key: "disableEventListeners", value: function () {
                return ot.call(this)
            }
        }]), e
    }();
    mt.Utils = ("undefined" != typeof window ? window : global).PopperUtils, mt.placements = ct, mt.Defaults = pt;
    var gt, vt, yt, _t, bt, wt, Dt, Ct, xt, kt, St, Tt, Et, At, Ot, Mt, It, Nt, Pt, jt, Lt, Yt, Ht, $t, Rt, qt, Wt, Ft,
        Ut, Bt, Vt, Gt, zt, Kt, Qt, Zt, Xt, Jt, en, tn, nn, rn, on, sn, an, ln, cn, un, hn, dn, fn, pn, mn, gn, vn, yn,
        _n, bn, wn, Dn, Cn, xn, kn, Sn, Tn, En, An, On, Mn, In, Nn, Pn, jn, Ln, Yn, Hn, $n, Rn, qn, Wn, Fn, Un, Bn, Vn,
        Gn, zn, Kn, Qn, Zn, Xn, Jn, ei, ti, ni, ii, ri, oi, si, ai, li, ci, ui, hi, di, fi, pi, mi, gi, vi, yi, _i, bi,
        wi,
        Di = (vt = "dropdown", _t = "." + (yt = "bs.dropdown"), bt = ".data-api", wt = (gt = t).fn[vt], Dt = new RegExp("38|40|27"), Ct = {
            HIDE: "hide" + _t,
            HIDDEN: "hidden" + _t,
            SHOW: "show" + _t,
            SHOWN: "shown" + _t,
            CLICK: "click" + _t,
            CLICK_DATA_API: "click" + _t + bt,
            KEYDOWN_DATA_API: "keydown" + _t + bt,
            KEYUP_DATA_API: "keyup" + _t + bt
        }, xt = "disabled", kt = "show", St = "dropup", Tt = "dropright", Et = "dropleft", At = "dropdown-menu-right", Ot = "position-static", Mt = '[data-toggle="dropdown"]', It = ".dropdown form", Nt = ".dropdown-menu", Pt = ".navbar-nav", jt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Lt = "top-start", Yt = "top-end", Ht = "bottom-start", $t = "bottom-end", Rt = "right-start", qt = "left-start", Wt = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        }, Ft = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }, Ut = function () {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }

            var t = e.prototype;
            return t.toggle = function () {
                if (!this._element.disabled && !gt(this._element).hasClass(xt)) {
                    var t = e._getParentFromElement(this._element), n = gt(this._menu).hasClass(kt);
                    if (e._clearMenus(), !n) {
                        var i = {relatedTarget: this._element}, r = gt.Event(Ct.SHOW, i);
                        if (gt(t).trigger(r), !r.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === mt) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var o = this._element;
                                "parent" === this._config.reference ? o = t : me.isElement(this._config.reference) && (o = this._config.reference, void 0 !== this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && gt(t).addClass(Ot), this._popper = new mt(o, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === gt(t).closest(Pt).length && gt(document.body).children().on("mouseover", null, gt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), gt(this._menu).toggleClass(kt), gt(t).toggleClass(kt).trigger(gt.Event(Ct.SHOWN, i))
                        }
                    }
                }
            }, t.dispose = function () {
                gt.removeData(this._element, yt), gt(this._element).off(_t), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, t.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, t._addEventListeners = function () {
                var e = this;
                gt(this._element).on(Ct.CLICK, function (t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, t._getConfig = function (e) {
                return e = r({}, this.constructor.Default, gt(this._element).data(), e), me.typeCheckConfig(vt, e, this.constructor.DefaultType), e
            }, t._getMenuElement = function () {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(Nt))
                }
                return this._menu
            }, t._getPlacement = function () {
                var e = gt(this._element.parentNode), t = Ht;
                return e.hasClass(St) ? (t = Lt, gt(this._menu).hasClass(At) && (t = Yt)) : e.hasClass(Tt) ? t = Rt : e.hasClass(Et) ? t = qt : gt(this._menu).hasClass(At) && (t = $t), t
            }, t._detectNavbar = function () {
                return gt(this._element).closest(".navbar").length > 0
            }, t._getPopperConfig = function () {
                var e = this, t = {};
                "function" == typeof this._config.offset ? t.fn = function (t) {
                    return t.offsets = r({}, t.offsets, e._config.offset(t.offsets) || {}), t
                } : t.offset = this._config.offset;
                var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: t,
                        flip: {enabled: this._config.flip},
                        preventOverflow: {boundariesElement: this._config.boundary}
                    }
                };
                return "static" === this._config.display && (n.modifiers.applyStyle = {enabled: !1}), n
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = gt(this).data(yt);
                    if (n || (n = new e(this, "object" == typeof t ? t : null), gt(this).data(yt, n)), "string" == typeof t) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }, e._clearMenus = function (t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var n = [].slice.call(document.querySelectorAll(Mt)), i = 0, r = n.length; i < r; i++) {
                    var o = e._getParentFromElement(n[i]), s = gt(n[i]).data(yt), a = {relatedTarget: n[i]};
                    if (t && "click" === t.type && (a.clickEvent = t), s) {
                        var l = s._menu;
                        if (gt(o).hasClass(kt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && gt.contains(o, t.target))) {
                            var c = gt.Event(Ct.HIDE, a);
                            gt(o).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && gt(document.body).children().off("mouseover", null, gt.noop), n[i].setAttribute("aria-expanded", "false"), gt(l).removeClass(kt), gt(o).removeClass(kt).trigger(gt.Event(Ct.HIDDEN, a)))
                        }
                    }
                }
            }, e._getParentFromElement = function (e) {
                var t, n = me.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, e._dataApiKeydownHandler = function (t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || gt(t.target).closest(Nt).length)) : Dt.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !gt(this).hasClass(xt))) {
                    var n = e._getParentFromElement(this), i = gt(n).hasClass(kt);
                    if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
                        var r = [].slice.call(n.querySelectorAll(jt));
                        if (0 !== r.length) {
                            var o = r.indexOf(t.target);
                            38 === t.which && o > 0 && o--, 40 === t.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var s = n.querySelector(Mt);
                            gt(s).trigger("focus")
                        }
                        gt(this).trigger("click")
                    }
                }
            }, i(e, null, [{
                key: "VERSION", get: function () {
                    return "4.1.2"
                }
            }, {
                key: "Default", get: function () {
                    return Wt
                }
            }, {
                key: "DefaultType", get: function () {
                    return Ft
                }
            }]), e
        }(), gt(document).on(Ct.KEYDOWN_DATA_API, Mt, Ut._dataApiKeydownHandler).on(Ct.KEYDOWN_DATA_API, Nt, Ut._dataApiKeydownHandler).on(Ct.CLICK_DATA_API + " " + Ct.KEYUP_DATA_API, Ut._clearMenus).on(Ct.CLICK_DATA_API, Mt, function (e) {
            e.preventDefault(), e.stopPropagation(), Ut._jQueryInterface.call(gt(this), "toggle")
        }).on(Ct.CLICK_DATA_API, It, function (e) {
            e.stopPropagation()
        }), gt.fn[vt] = Ut._jQueryInterface, gt.fn[vt].Constructor = Ut, gt.fn[vt].noConflict = function () {
            return gt.fn[vt] = wt, Ut._jQueryInterface
        }, Ut), Ci = (Vt = "modal", zt = "." + (Gt = "bs.modal"), Kt = (Bt = t).fn[Vt], Qt = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, Zt = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, Xt = {
            HIDE: "hide" + zt,
            HIDDEN: "hidden" + zt,
            SHOW: "show" + zt,
            SHOWN: "shown" + zt,
            FOCUSIN: "focusin" + zt,
            RESIZE: "resize" + zt,
            CLICK_DISMISS: "click.dismiss" + zt,
            KEYDOWN_DISMISS: "keydown.dismiss" + zt,
            MOUSEUP_DISMISS: "mouseup.dismiss" + zt,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + zt,
            CLICK_DATA_API: "click" + zt + ".data-api"
        }, Jt = "modal-scrollbar-measure", en = "modal-backdrop", tn = "modal-open", nn = "fade", rn = "show", on = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top"
        }, sn = function () {
            function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(on.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
            }

            var t = e.prototype;
            return t.toggle = function (e) {
                return this._isShown ? this.hide() : this.show(e)
            }, t.show = function (e) {
                var t = this;
                if (!this._isTransitioning && !this._isShown) {
                    Bt(this._element).hasClass(nn) && (this._isTransitioning = !0);
                    var n = Bt.Event(Xt.SHOW, {relatedTarget: e});
                    Bt(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Bt(document.body).addClass(tn), this._setEscapeEvent(), this._setResizeEvent(), Bt(this._element).on(Xt.CLICK_DISMISS, on.DATA_DISMISS, function (e) {
                        return t.hide(e)
                    }), Bt(this._dialog).on(Xt.MOUSEDOWN_DISMISS, function () {
                        Bt(t._element).one(Xt.MOUSEUP_DISMISS, function (e) {
                            Bt(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function () {
                        return t._showElement(e)
                    }))
                }
            }, t.hide = function (e) {
                var t = this;
                if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                    var n = Bt.Event(Xt.HIDE);
                    if (Bt(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = Bt(this._element).hasClass(nn);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Bt(document).off(Xt.FOCUSIN), Bt(this._element).removeClass(rn), Bt(this._element).off(Xt.CLICK_DISMISS), Bt(this._dialog).off(Xt.MOUSEDOWN_DISMISS), i) {
                            var r = me.getTransitionDurationFromElement(this._element);
                            Bt(this._element).one(me.TRANSITION_END, function (e) {
                                return t._hideModal(e)
                            }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function () {
                Bt.removeData(this._element, Gt), Bt(window, document, this._element, this._backdrop).off(zt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, t.handleUpdate = function () {
                this._adjustDialog()
            }, t._getConfig = function (e) {
                return e = r({}, Qt, e), me.typeCheckConfig(Vt, e, Zt), e
            }, t._showElement = function (e) {
                var t = this, n = Bt(this._element).hasClass(nn);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && me.reflow(this._element), Bt(this._element).addClass(rn), this._config.focus && this._enforceFocus();
                var i = Bt.Event(Xt.SHOWN, {relatedTarget: e}), r = function () {
                    t._config.focus && t._element.focus(), t._isTransitioning = !1, Bt(t._element).trigger(i)
                };
                if (n) {
                    var o = me.getTransitionDurationFromElement(this._element);
                    Bt(this._dialog).one(me.TRANSITION_END, r).emulateTransitionEnd(o)
                } else r()
            }, t._enforceFocus = function () {
                var e = this;
                Bt(document).off(Xt.FOCUSIN).on(Xt.FOCUSIN, function (t) {
                    document !== t.target && e._element !== t.target && 0 === Bt(e._element).has(t.target).length && e._element.focus()
                })
            }, t._setEscapeEvent = function () {
                var e = this;
                this._isShown && this._config.keyboard ? Bt(this._element).on(Xt.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || Bt(this._element).off(Xt.KEYDOWN_DISMISS)
            }, t._setResizeEvent = function () {
                var e = this;
                this._isShown ? Bt(window).on(Xt.RESIZE, function (t) {
                    return e.handleUpdate(t)
                }) : Bt(window).off(Xt.RESIZE)
            }, t._hideModal = function () {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                    Bt(document.body).removeClass(tn), e._resetAdjustments(), e._resetScrollbar(), Bt(e._element).trigger(Xt.HIDDEN)
                })
            }, t._removeBackdrop = function () {
                this._backdrop && (Bt(this._backdrop).remove(), this._backdrop = null)
            }, t._showBackdrop = function (e) {
                var t = this, n = Bt(this._element).hasClass(nn) ? nn : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = en, n && this._backdrop.classList.add(n), Bt(this._backdrop).appendTo(document.body), Bt(this._element).on(Xt.CLICK_DISMISS, function (e) {
                        t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                    }), n && me.reflow(this._backdrop), Bt(this._backdrop).addClass(rn), !e) return;
                    if (!n) return void e();
                    var i = me.getTransitionDurationFromElement(this._backdrop);
                    Bt(this._backdrop).one(me.TRANSITION_END, e).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    Bt(this._backdrop).removeClass(rn);
                    var r = function () {
                        t._removeBackdrop(), e && e()
                    };
                    if (Bt(this._element).hasClass(nn)) {
                        var o = me.getTransitionDurationFromElement(this._backdrop);
                        Bt(this._backdrop).one(me.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r()
                } else e && e()
            }, t._adjustDialog = function () {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, t._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, t._checkScrollbar = function () {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function () {
                var e = this;
                if (this._isBodyOverflowing) {
                    var t = [].slice.call(document.querySelectorAll(on.FIXED_CONTENT)),
                        n = [].slice.call(document.querySelectorAll(on.STICKY_CONTENT));
                    Bt(t).each(function (t, n) {
                        var i = n.style.paddingRight, r = Bt(n).css("padding-right");
                        Bt(n).data("padding-right", i).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                    }), Bt(n).each(function (t, n) {
                        var i = n.style.marginRight, r = Bt(n).css("margin-right");
                        Bt(n).data("margin-right", i).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                    });
                    var i = document.body.style.paddingRight, r = Bt(document.body).css("padding-right");
                    Bt(document.body).data("padding-right", i).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                }
            }, t._resetScrollbar = function () {
                var e = [].slice.call(document.querySelectorAll(on.FIXED_CONTENT));
                Bt(e).each(function (e, t) {
                    var n = Bt(t).data("padding-right");
                    Bt(t).removeData("padding-right"), t.style.paddingRight = n || ""
                });
                var t = [].slice.call(document.querySelectorAll("" + on.STICKY_CONTENT));
                Bt(t).each(function (e, t) {
                    var n = Bt(t).data("margin-right");
                    void 0 !== n && Bt(t).css("margin-right", n).removeData("margin-right")
                });
                var n = Bt(document.body).data("padding-right");
                Bt(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, t._getScrollbarWidth = function () {
                var e = document.createElement("div");
                e.className = Jt, document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, e._jQueryInterface = function (t, n) {
                return this.each(function () {
                    var i = Bt(this).data(Gt), o = r({}, Qt, Bt(this).data(), "object" == typeof t && t ? t : {});
                    if (i || (i = new e(this, o), Bt(this).data(Gt, i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t](n)
                    } else o.show && i.show(n)
                })
            }, i(e, null, [{
                key: "VERSION", get: function () {
                    return "4.1.2"
                }
            }, {
                key: "Default", get: function () {
                    return Qt
                }
            }]), e
        }(), Bt(document).on(Xt.CLICK_DATA_API, on.DATA_TOGGLE, function (e) {
            var t, n = this, i = me.getSelectorFromElement(this);
            i && (t = document.querySelector(i));
            var o = Bt(t).data(Gt) ? "toggle" : r({}, Bt(t).data(), Bt(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var s = Bt(t).one(Xt.SHOW, function (e) {
                e.isDefaultPrevented() || s.one(Xt.HIDDEN, function () {
                    Bt(n).is(":visible") && n.focus()
                })
            });
            sn._jQueryInterface.call(Bt(t), o, this)
        }), Bt.fn[Vt] = sn._jQueryInterface, Bt.fn[Vt].Constructor = sn, Bt.fn[Vt].noConflict = function () {
            return Bt.fn[Vt] = Kt, sn._jQueryInterface
        }, sn),
        xi = (ln = "tooltip", un = "." + (cn = "bs.tooltip"), hn = (an = t).fn[ln], dn = "bs-tooltip", fn = new RegExp("(^|\\s)" + dn + "\\S+", "g"), pn = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
        }, mn = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, gn = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }, vn = "show", yn = "out", _n = {
            HIDE: "hide" + un,
            HIDDEN: "hidden" + un,
            SHOW: "show" + un,
            SHOWN: "shown" + un,
            INSERTED: "inserted" + un,
            CLICK: "click" + un,
            FOCUSIN: "focusin" + un,
            FOCUSOUT: "focusout" + un,
            MOUSEENTER: "mouseenter" + un,
            MOUSELEAVE: "mouseleave" + un
        }, bn = "fade", wn = "show", Dn = ".tooltip-inner", Cn = ".arrow", xn = "hover", kn = "focus", Sn = "click", Tn = "manual", En = function () {
            function e(e, t) {
                if (void 0 === mt) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }

            var t = e.prototype;
            return t.enable = function () {
                this._isEnabled = !0
            }, t.disable = function () {
                this._isEnabled = !1
            }, t.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, t.toggle = function (e) {
                if (this._isEnabled) if (e) {
                    var t = this.constructor.DATA_KEY, n = an(e.currentTarget).data(t);
                    n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), an(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (an(this.getTipElement()).hasClass(wn)) return void this._leave(null, this);
                    this._enter(null, this)
                }
            }, t.dispose = function () {
                clearTimeout(this._timeout), an.removeData(this.element, this.constructor.DATA_KEY), an(this.element).off(this.constructor.EVENT_KEY), an(this.element).closest(".modal").off("hide.bs.modal"), this.tip && an(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, t.show = function () {
                var e = this;
                if ("none" === an(this.element).css("display")) throw new Error("Please use show on visible elements");
                var t = an.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    an(this.element).trigger(t);
                    var n = an.contains(this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !n) return;
                    var i = this.getTipElement(), r = me.getUID(this.constructor.NAME);
                    i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && an(i).addClass(bn);
                    var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                        s = this._getAttachment(o);
                    this.addAttachmentClass(s);
                    var a = !1 === this.config.container ? document.body : an(document).find(this.config.container);
                    an(i).data(this.constructor.DATA_KEY, this), an.contains(this.element.ownerDocument.documentElement, this.tip) || an(i).appendTo(a), an(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new mt(this.element, i, {
                        placement: s,
                        modifiers: {
                            offset: {offset: this.config.offset},
                            flip: {behavior: this.config.fallbackPlacement},
                            arrow: {element: Cn},
                            preventOverflow: {boundariesElement: this.config.boundary}
                        },
                        onCreate: function (t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function (t) {
                            e._handlePopperPlacementChange(t)
                        }
                    }), an(i).addClass(wn), "ontouchstart" in document.documentElement && an(document.body).children().on("mouseover", null, an.noop);
                    var l = function () {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, an(e.element).trigger(e.constructor.Event.SHOWN), t === yn && e._leave(null, e)
                    };
                    if (an(this.tip).hasClass(bn)) {
                        var c = me.getTransitionDurationFromElement(this.tip);
                        an(this.tip).one(me.TRANSITION_END, l).emulateTransitionEnd(c)
                    } else l()
                }
            }, t.hide = function (e) {
                var t = this, n = this.getTipElement(), i = an.Event(this.constructor.Event.HIDE), r = function () {
                    t._hoverState !== vn && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), an(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                };
                if (an(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (an(n).removeClass(wn), "ontouchstart" in document.documentElement && an(document.body).children().off("mouseover", null, an.noop), this._activeTrigger[Sn] = !1, this._activeTrigger[kn] = !1, this._activeTrigger[xn] = !1, an(this.tip).hasClass(bn)) {
                        var o = me.getTransitionDurationFromElement(n);
                        an(n).one(me.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r();
                    this._hoverState = ""
                }
            }, t.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, t.isWithContent = function () {
                return Boolean(this.getTitle())
            }, t.addAttachmentClass = function (e) {
                an(this.getTipElement()).addClass(dn + "-" + e)
            }, t.getTipElement = function () {
                return this.tip = this.tip || an(this.config.template)[0], this.tip
            }, t.setContent = function () {
                var e = this.getTipElement();
                this.setElementContent(an(e.querySelectorAll(Dn)), this.getTitle()), an(e).removeClass(bn + " " + wn)
            }, t.setElementContent = function (e, t) {
                var n = this.config.html;
                "object" == typeof t && (t.nodeType || t.jquery) ? n ? an(t).parent().is(e) || e.empty().append(t) : e.text(an(t).text()) : e[n ? "html" : "text"](t)
            }, t.getTitle = function () {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, t._getAttachment = function (e) {
                return mn[e.toUpperCase()]
            }, t._setListeners = function () {
                var e = this;
                this.config.trigger.split(" ").forEach(function (t) {
                    if ("click" === t) an(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                        return e.toggle(t)
                    }); else if (t !== Tn) {
                        var n = t === xn ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            i = t === xn ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        an(e.element).on(n, e.config.selector, function (t) {
                            return e._enter(t)
                        }).on(i, e.config.selector, function (t) {
                            return e._leave(t)
                        })
                    }
                    an(e.element).closest(".modal").on("hide.bs.modal", function () {
                        return e.hide()
                    })
                }), this.config.selector ? this.config = r({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, t._fixTitle = function () {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function (e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || an(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), an(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? kn : xn] = !0), an(t.getTipElement()).hasClass(wn) || t._hoverState === vn ? t._hoverState = vn : (clearTimeout(t._timeout), t._hoverState = vn, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
                    t._hoverState === vn && t.show()
                }, t.config.delay.show) : t.show())
            }, t._leave = function (e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || an(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), an(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? kn : xn] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = yn, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
                    t._hoverState === yn && t.hide()
                }, t.config.delay.hide) : t.hide())
            }, t._isWithActiveTrigger = function () {
                for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                return !1
            }, t._getConfig = function (e) {
                return "number" == typeof (e = r({}, this.constructor.Default, an(this.element).data(), "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), me.typeCheckConfig(ln, e, this.constructor.DefaultType), e
            }, t._getDelegateConfig = function () {
                var e = {};
                if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, t._cleanTipClass = function () {
                var e = an(this.getTipElement()), t = e.attr("class").match(fn);
                null !== t && t.length && e.removeClass(t.join(""))
            }, t._handlePopperPlacementChange = function (e) {
                var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, t._fixTransition = function () {
                var e = this.getTipElement(), t = this.config.animation;
                null === e.getAttribute("x-placement") && (an(e).removeClass(bn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = an(this).data(cn), i = "object" == typeof t && t;
                    if ((n || !/dispose|hide/.test(t)) && (n || (n = new e(this, i), an(this).data(cn, n)), "string" == typeof t)) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }, i(e, null, [{
                key: "VERSION", get: function () {
                    return "4.1.2"
                }
            }, {
                key: "Default", get: function () {
                    return gn
                }
            }, {
                key: "NAME", get: function () {
                    return ln
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return cn
                }
            }, {
                key: "Event", get: function () {
                    return _n
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return un
                }
            }, {
                key: "DefaultType", get: function () {
                    return pn
                }
            }]), e
        }(), an.fn[ln] = En._jQueryInterface, an.fn[ln].Constructor = En, an.fn[ln].noConflict = function () {
            return an.fn[ln] = hn, En._jQueryInterface
        }, En),
        ki = (On = "popover", In = "." + (Mn = "bs.popover"), Nn = (An = t).fn[On], Pn = "bs-popover", jn = new RegExp("(^|\\s)" + Pn + "\\S+", "g"), Ln = r({}, xi.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), Yn = r({}, xi.DefaultType, {content: "(string|element|function)"}), Hn = "fade", $n = "show", Rn = ".popover-header", qn = ".popover-body", Wn = {
            HIDE: "hide" + In,
            HIDDEN: "hidden" + In,
            SHOW: "show" + In,
            SHOWN: "shown" + In,
            INSERTED: "inserted" + In,
            CLICK: "click" + In,
            FOCUSIN: "focusin" + In,
            FOCUSOUT: "focusout" + In,
            MOUSEENTER: "mouseenter" + In,
            MOUSELEAVE: "mouseleave" + In
        }, Fn = function (e) {
            var t, n;

            function r() {
                return e.apply(this, arguments) || this
            }

            n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
            var o = r.prototype;
            return o.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, o.addAttachmentClass = function (e) {
                An(this.getTipElement()).addClass(Pn + "-" + e)
            }, o.getTipElement = function () {
                return this.tip = this.tip || An(this.config.template)[0], this.tip
            }, o.setContent = function () {
                var e = An(this.getTipElement());
                this.setElementContent(e.find(Rn), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(qn), t), e.removeClass(Hn + " " + $n)
            }, o._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
            }, o._cleanTipClass = function () {
                var e = An(this.getTipElement()), t = e.attr("class").match(jn);
                null !== t && t.length > 0 && e.removeClass(t.join(""))
            }, r._jQueryInterface = function (e) {
                return this.each(function () {
                    var t = An(this).data(Mn), n = "object" == typeof e ? e : null;
                    if ((t || !/destroy|hide/.test(e)) && (t || (t = new r(this, n), An(this).data(Mn, t)), "string" == typeof e)) {
                        if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, i(r, null, [{
                key: "VERSION", get: function () {
                    return "4.1.2"
                }
            }, {
                key: "Default", get: function () {
                    return Ln
                }
            }, {
                key: "NAME", get: function () {
                    return On
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return Mn
                }
            }, {
                key: "Event", get: function () {
                    return Wn
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return In
                }
            }, {
                key: "DefaultType", get: function () {
                    return Yn
                }
            }]), r
        }(xi), An.fn[On] = Fn._jQueryInterface, An.fn[On].Constructor = Fn, An.fn[On].noConflict = function () {
            return An.fn[On] = Nn, Fn._jQueryInterface
        }, Fn), Si = (Bn = "scrollspy", Gn = "." + (Vn = "bs.scrollspy"), zn = (Un = t).fn[Bn], Kn = {
            offset: 10,
            method: "auto",
            target: ""
        }, Qn = {offset: "number", method: "string", target: "(string|element)"}, Zn = {
            ACTIVATE: "activate" + Gn,
            SCROLL: "scroll" + Gn,
            LOAD_DATA_API: "load" + Gn + ".data-api"
        }, Xn = "dropdown-item", Jn = "active", ei = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }, ti = "offset", ni = "position", ii = function () {
            function e(e, t) {
                var n = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + ei.NAV_LINKS + "," + this._config.target + " " + ei.LIST_ITEMS + "," + this._config.target + " " + ei.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Un(this._scrollElement).on(Zn.SCROLL, function (e) {
                    return n._process(e)
                }), this.refresh(), this._process()
            }

            var t = e.prototype;
            return t.refresh = function () {
                var e = this, t = this._scrollElement === this._scrollElement.window ? ti : ni,
                    n = "auto" === this._config.method ? t : this._config.method, i = n === ni ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (e) {
                    var t, r = me.getSelectorFromElement(e);
                    if (r && (t = document.querySelector(r)), t) {
                        var o = t.getBoundingClientRect();
                        if (o.width || o.height) return [Un(t)[n]().top + i, r]
                    }
                    return null
                }).filter(function (e) {
                    return e
                }).sort(function (e, t) {
                    return e[0] - t[0]
                }).forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, t.dispose = function () {
                Un.removeData(this._element, Vn), Un(this._scrollElement).off(Gn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, t._getConfig = function (e) {
                if ("string" != typeof (e = r({}, Kn, "object" == typeof e && e ? e : {})).target) {
                    var t = Un(e.target).attr("id");
                    t || (t = me.getUID(Bn), Un(e.target).attr("id", t)), e.target = "#" + t
                }
                return me.typeCheckConfig(Bn, e, Qn), e
            }, t._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, t._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, t._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, t._process = function () {
                var e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), e >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) {
                        this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }
            }, t._activate = function (e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",");
                t = t.map(function (t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                });
                var n = Un([].slice.call(document.querySelectorAll(t.join(","))));
                n.hasClass(Xn) ? (n.closest(ei.DROPDOWN).find(ei.DROPDOWN_TOGGLE).addClass(Jn), n.addClass(Jn)) : (n.addClass(Jn), n.parents(ei.NAV_LIST_GROUP).prev(ei.NAV_LINKS + ", " + ei.LIST_ITEMS).addClass(Jn), n.parents(ei.NAV_LIST_GROUP).prev(ei.NAV_ITEMS).children(ei.NAV_LINKS).addClass(Jn)), Un(this._scrollElement).trigger(Zn.ACTIVATE, {relatedTarget: e})
            }, t._clear = function () {
                var e = [].slice.call(document.querySelectorAll(this._selector));
                Un(e).filter(ei.ACTIVE).removeClass(Jn)
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = Un(this).data(Vn);
                    if (n || (n = new e(this, "object" == typeof t && t), Un(this).data(Vn, n)), "string" == typeof t) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }, i(e, null, [{
                key: "VERSION", get: function () {
                    return "4.1.2"
                }
            }, {
                key: "Default", get: function () {
                    return Kn
                }
            }]), e
        }(), Un(window).on(Zn.LOAD_DATA_API, function () {
            for (var e = [].slice.call(document.querySelectorAll(ei.DATA_SPY)), t = e.length; t--;) {
                var n = Un(e[t]);
                ii._jQueryInterface.call(n, n.data())
            }
        }), Un.fn[Bn] = ii._jQueryInterface, Un.fn[Bn].Constructor = ii, Un.fn[Bn].noConflict = function () {
            return Un.fn[Bn] = zn, ii._jQueryInterface
        }, ii), Ti = (si = "." + (oi = "bs.tab"), ai = (ri = t).fn.tab, li = {
            HIDE: "hide" + si,
            HIDDEN: "hidden" + si,
            SHOW: "show" + si,
            SHOWN: "shown" + si,
            CLICK_DATA_API: "click" + si + ".data-api"
        }, ci = "dropdown-menu", ui = "active", hi = "disabled", di = "fade", fi = "show", pi = ".dropdown", mi = ".nav, .list-group", gi = ".active", vi = "> li > .active", yi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', _i = ".dropdown-toggle", bi = "> .dropdown-menu .active", wi = function () {
            function e(e) {
                this._element = e
            }

            var t = e.prototype;
            return t.show = function () {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && ri(this._element).hasClass(ui) || ri(this._element).hasClass(hi))) {
                    var t, n, i = ri(this._element).closest(mi)[0], r = me.getSelectorFromElement(this._element);
                    if (i) {
                        var o = "UL" === i.nodeName ? vi : gi;
                        n = (n = ri.makeArray(ri(i).find(o)))[n.length - 1]
                    }
                    var s = ri.Event(li.HIDE, {relatedTarget: this._element}), a = ri.Event(li.SHOW, {relatedTarget: n});
                    if (n && ri(n).trigger(s), ri(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        r && (t = document.querySelector(r)), this._activate(this._element, i);
                        var l = function () {
                            var t = ri.Event(li.HIDDEN, {relatedTarget: e._element}),
                                i = ri.Event(li.SHOWN, {relatedTarget: n});
                            ri(n).trigger(t), ri(e._element).trigger(i)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }, t.dispose = function () {
                ri.removeData(this._element, oi), this._element = null
            }, t._activate = function (e, t, n) {
                var i = this, r = ("UL" === t.nodeName ? ri(t).find(vi) : ri(t).children(gi))[0],
                    o = n && r && ri(r).hasClass(di), s = function () {
                        return i._transitionComplete(e, r, n)
                    };
                if (r && o) {
                    var a = me.getTransitionDurationFromElement(r);
                    ri(r).one(me.TRANSITION_END, s).emulateTransitionEnd(a)
                } else s()
            }, t._transitionComplete = function (e, t, n) {
                if (t) {
                    ri(t).removeClass(fi + " " + ui);
                    var i = ri(t.parentNode).find(bi)[0];
                    i && ri(i).removeClass(ui), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                }
                if (ri(e).addClass(ui), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), me.reflow(e), ri(e).addClass(fi), e.parentNode && ri(e.parentNode).hasClass(ci)) {
                    var r = ri(e).closest(pi)[0];
                    if (r) {
                        var o = [].slice.call(r.querySelectorAll(_i));
                        ri(o).addClass(ui)
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = ri(this), i = n.data(oi);
                    if (i || (i = new e(this), n.data(oi, i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }, i(e, null, [{
                key: "VERSION", get: function () {
                    return "4.1.2"
                }
            }]), e
        }(), ri(document).on(li.CLICK_DATA_API, yi, function (e) {
            e.preventDefault(), wi._jQueryInterface.call(ri(this), "show")
        }), ri.fn.tab = wi._jQueryInterface, ri.fn.tab.Constructor = wi, ri.fn.tab.noConflict = function () {
            return ri.fn.tab = ai, wi._jQueryInterface
        }, wi);
    !function (e) {
        if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(t), e.Util = me, e.Alert = ge, e.Button = ve, e.Carousel = ye, e.Collapse = _e, e.Dropdown = Di, e.Modal = Ci, e.Popover = ki, e.Scrollspy = Si, e.Tab = Ti, e.Tooltip = xi, Object.defineProperty(e, "__esModule", {value: !0})
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, function () {
    "use strict";
    var e, t;

    function n() {
        return e.apply(null, arguments)
    }

    function i(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }

    function r(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
    }

    function o(e) {
        return void 0 === e
    }

    function s(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }

    function a(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }

    function l(e, t) {
        var n, i = [];
        for (n = 0; n < e.length; ++n) i.push(t(e[n], n));
        return i
    }

    function c(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    function u(e, t) {
        for (var n in t) c(t, n) && (e[n] = t[n]);
        return c(t, "toString") && (e.toString = t.toString), c(t, "valueOf") && (e.valueOf = t.valueOf), e
    }

    function h(e, t, n, i) {
        return St(e, t, n, i, !0).utc()
    }

    function d(e) {
        return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }), e._pf
    }

    function f(e) {
        if (null == e._isValid) {
            var n = d(e), i = t.call(n.parsedDateParts, function (e) {
                    return null != e
                }),
                r = !isNaN(e._d.getTime()) && n.overflow < 0 && !n.empty && !n.invalidMonth && !n.invalidWeekday && !n.weekdayMismatch && !n.nullInput && !n.invalidFormat && !n.userInvalidated && (!n.meridiem || n.meridiem && i);
            if (e._strict && (r = r && 0 === n.charsLeftOver && 0 === n.unusedTokens.length && void 0 === n.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return r;
            e._isValid = r
        }
        return e._isValid
    }

    function p(e) {
        var t = h(NaN);
        return null != e ? u(d(t), e) : d(t).userInvalidated = !0, t
    }

    t = Array.prototype.some ? Array.prototype.some : function (e) {
        for (var t = Object(this), n = t.length >>> 0, i = 0; i < n; i++) if (i in t && e.call(this, t[i], i, t)) return !0;
        return !1
    };
    var m = n.momentProperties = [];

    function g(e, t) {
        var n, i, r;
        if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = d(t)), o(t._locale) || (e._locale = t._locale), m.length > 0) for (n = 0; n < m.length; n++) o(r = t[i = m[n]]) || (e[i] = r);
        return e
    }

    var v = !1;

    function y(e) {
        g(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === v && (v = !0, n.updateOffset(this), v = !1)
    }

    function _(e) {
        return e instanceof y || null != e && null != e._isAMomentObject
    }

    function b(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }

    function w(e) {
        var t = +e, n = 0;
        return 0 !== t && isFinite(t) && (n = b(t)), n
    }

    function D(e, t, n) {
        var i, r = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), s = 0;
        for (i = 0; i < r; i++) (n && e[i] !== t[i] || !n && w(e[i]) !== w(t[i])) && s++;
        return s + o
    }

    function C(e) {
        !1 === n.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function x(e, t) {
        var i = !0;
        return u(function () {
            if (null != n.deprecationHandler && n.deprecationHandler(null, e), i) {
                for (var r, o = [], s = 0; s < arguments.length; s++) {
                    if (r = "", "object" == typeof arguments[s]) {
                        for (var a in r += "\n[" + s + "] ", arguments[0]) r += a + ": " + arguments[0][a] + ", ";
                        r = r.slice(0, -2)
                    } else r = arguments[s];
                    o.push(r)
                }
                C(e + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack), i = !1
            }
            return t.apply(this, arguments)
        }, t)
    }

    var k, S = {};

    function T(e, t) {
        null != n.deprecationHandler && n.deprecationHandler(e, t), S[e] || (C(t), S[e] = !0)
    }

    function E(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }

    function A(e, t) {
        var n, i = u({}, e);
        for (n in t) c(t, n) && (r(e[n]) && r(t[n]) ? (i[n] = {}, u(i[n], e[n]), u(i[n], t[n])) : null != t[n] ? i[n] = t[n] : delete i[n]);
        for (n in e) c(e, n) && !c(t, n) && r(e[n]) && (i[n] = u({}, i[n]));
        return i
    }

    function O(e) {
        null != e && this.set(e)
    }

    n.suppressDeprecationWarnings = !1, n.deprecationHandler = null, k = Object.keys ? Object.keys : function (e) {
        var t, n = [];
        for (t in e) c(e, t) && n.push(t);
        return n
    };
    var M = {};

    function I(e, t) {
        var n = e.toLowerCase();
        M[n] = M[n + "s"] = M[t] = e
    }

    function N(e) {
        return "string" == typeof e ? M[e] || M[e.toLowerCase()] : void 0
    }

    function P(e) {
        var t, n, i = {};
        for (n in e) c(e, n) && (t = N(n)) && (i[t] = e[n]);
        return i
    }

    var j = {};

    function L(e, t) {
        j[e] = t
    }

    function Y(e, t, n) {
        var i = "" + Math.abs(e), r = t - i.length;
        return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
    }

    var H = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        $ = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, R = {}, q = {};

    function W(e, t, n, i) {
        var r = i;
        "string" == typeof i && (r = function () {
            return this[i]()
        }), e && (q[e] = r), t && (q[t[0]] = function () {
            return Y(r.apply(this, arguments), t[1], t[2])
        }), n && (q[n] = function () {
            return this.localeData().ordinal(r.apply(this, arguments), e)
        })
    }

    function F(e, t) {
        return e.isValid() ? (t = U(t, e.localeData()), R[t] = R[t] || function (e) {
            var t, n, i, r = e.match(H);
            for (t = 0, n = r.length; t < n; t++) q[r[t]] ? r[t] = q[r[t]] : r[t] = (i = r[t]).match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, "") : i.replace(/\\/g, "");
            return function (t) {
                var i, o = "";
                for (i = 0; i < n; i++) o += E(r[i]) ? r[i].call(t, e) : r[i];
                return o
            }
        }(t), R[t](e)) : e.localeData().invalidDate()
    }

    function U(e, t) {
        var n = 5;

        function i(e) {
            return t.longDateFormat(e) || e
        }

        for ($.lastIndex = 0; n >= 0 && $.test(e);) e = e.replace($, i), $.lastIndex = 0, n -= 1;
        return e
    }

    var B = /\d/, V = /\d\d/, G = /\d{3}/, z = /\d{4}/, K = /[+-]?\d{6}/, Q = /\d\d?/, Z = /\d\d\d\d?/,
        X = /\d\d\d\d\d\d?/, J = /\d{1,3}/, ee = /\d{1,4}/, te = /[+-]?\d{1,6}/, ne = /\d+/, ie = /[+-]?\d+/,
        re = /Z|[+-]\d\d:?\d\d/gi, oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
        se = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        ae = {};

    function le(e, t, n) {
        ae[e] = E(t) ? t : function (e, i) {
            return e && n ? n : t
        }
    }

    function ce(e, t) {
        return c(ae, e) ? ae[e](t._strict, t._locale) : new RegExp(ue(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, i, r) {
            return t || n || i || r
        })))
    }

    function ue(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    var he = {};

    function de(e, t) {
        var n, i = t;
        for ("string" == typeof e && (e = [e]), s(t) && (i = function (e, n) {
            n[t] = w(e)
        }), n = 0; n < e.length; n++) he[e[n]] = i
    }

    function fe(e, t) {
        de(e, function (e, n, i, r) {
            i._w = i._w || {}, t(e, i._w, i, r)
        })
    }

    var pe = 0, me = 1, ge = 2, ve = 3, ye = 4, _e = 5, be = 6, we = 7, De = 8;

    function Ce(e) {
        return xe(e) ? 366 : 365
    }

    function xe(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }

    W("Y", 0, 0, function () {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e
    }), W(0, ["YY", 2], 0, function () {
        return this.year() % 100
    }), W(0, ["YYYY", 4], 0, "year"), W(0, ["YYYYY", 5], 0, "year"), W(0, ["YYYYYY", 6, !0], 0, "year"), I("year", "y"), L("year", 1), le("Y", ie), le("YY", Q, V), le("YYYY", ee, z), le("YYYYY", te, K), le("YYYYYY", te, K), de(["YYYYY", "YYYYYY"], pe), de("YYYY", function (e, t) {
        t[pe] = 2 === e.length ? n.parseTwoDigitYear(e) : w(e)
    }), de("YY", function (e, t) {
        t[pe] = n.parseTwoDigitYear(e)
    }), de("Y", function (e, t) {
        t[pe] = parseInt(e, 10)
    }), n.parseTwoDigitYear = function (e) {
        return w(e) + (w(e) > 68 ? 1900 : 2e3)
    };
    var ke, Se = Te("FullYear", !0);

    function Te(e, t) {
        return function (i) {
            return null != i ? (Ae(this, e, i), n.updateOffset(this, t), this) : Ee(this, e)
        }
    }

    function Ee(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
    }

    function Ae(e, t, n) {
        e.isValid() && !isNaN(n) && ("FullYear" === t && xe(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Oe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
    }

    function Oe(e, t) {
        if (isNaN(e) || isNaN(t)) return NaN;
        var n, i = (t % (n = 12) + n) % n;
        return e += (t - i) / 12, 1 === i ? xe(e) ? 29 : 28 : 31 - i % 7 % 2
    }

    ke = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
        var t;
        for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
        return -1
    }, W("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
    }), W("MMM", 0, 0, function (e) {
        return this.localeData().monthsShort(this, e)
    }), W("MMMM", 0, 0, function (e) {
        return this.localeData().months(this, e)
    }), I("month", "M"), L("month", 8), le("M", Q), le("MM", Q, V), le("MMM", function (e, t) {
        return t.monthsShortRegex(e)
    }), le("MMMM", function (e, t) {
        return t.monthsRegex(e)
    }), de(["M", "MM"], function (e, t) {
        t[me] = w(e) - 1
    }), de(["MMM", "MMMM"], function (e, t, n, i) {
        var r = n._locale.monthsParse(e, i, n._strict);
        null != r ? t[me] = r : d(n).invalidMonth = e
    });
    var Me = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Ie = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
    var Ne = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

    function Pe(e, t) {
        var n;
        if (!e.isValid()) return e;
        if ("string" == typeof t) if (/^\d+$/.test(t)) t = w(t); else if (!s(t = e.localeData().monthsParse(t))) return e;
        return n = Math.min(e.date(), Oe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
    }

    function je(e) {
        return null != e ? (Pe(this, e), n.updateOffset(this, !0), this) : Ee(this, "Month")
    }

    var Le = se;
    var Ye = se;

    function He() {
        function e(e, t) {
            return t.length - e.length
        }

        var t, n, i = [], r = [], o = [];
        for (t = 0; t < 12; t++) n = h([2e3, t]), i.push(this.monthsShort(n, "")), r.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
        for (i.sort(e), r.sort(e), o.sort(e), t = 0; t < 12; t++) i[t] = ue(i[t]), r[t] = ue(r[t]);
        for (t = 0; t < 24; t++) o[t] = ue(o[t]);
        this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
    }

    function $e(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
    }

    function Re(e, t, n) {
        var i = 7 + t - n;
        return -((7 + $e(e, 0, i).getUTCDay() - t) % 7) + i - 1
    }

    function qe(e, t, n, i, r) {
        var o, s, a = 1 + 7 * (t - 1) + (7 + n - i) % 7 + Re(e, i, r);
        return a <= 0 ? s = Ce(o = e - 1) + a : a > Ce(e) ? (o = e + 1, s = a - Ce(e)) : (o = e, s = a), {
            year: o,
            dayOfYear: s
        }
    }

    function We(e, t, n) {
        var i, r, o = Re(e.year(), t, n), s = Math.floor((e.dayOfYear() - o - 1) / 7) + 1;
        return s < 1 ? i = s + Fe(r = e.year() - 1, t, n) : s > Fe(e.year(), t, n) ? (i = s - Fe(e.year(), t, n), r = e.year() + 1) : (r = e.year(), i = s), {
            week: i,
            year: r
        }
    }

    function Fe(e, t, n) {
        var i = Re(e, t, n), r = Re(e + 1, t, n);
        return (Ce(e) - i + r) / 7
    }

    W("w", ["ww", 2], "wo", "week"), W("W", ["WW", 2], "Wo", "isoWeek"), I("week", "w"), I("isoWeek", "W"), L("week", 5), L("isoWeek", 5), le("w", Q), le("ww", Q, V), le("W", Q), le("WW", Q, V), fe(["w", "ww", "W", "WW"], function (e, t, n, i) {
        t[i.substr(0, 1)] = w(e)
    });
    W("d", 0, "do", "day"), W("dd", 0, 0, function (e) {
        return this.localeData().weekdaysMin(this, e)
    }), W("ddd", 0, 0, function (e) {
        return this.localeData().weekdaysShort(this, e)
    }), W("dddd", 0, 0, function (e) {
        return this.localeData().weekdays(this, e)
    }), W("e", 0, 0, "weekday"), W("E", 0, 0, "isoWeekday"), I("day", "d"), I("weekday", "e"), I("isoWeekday", "E"), L("day", 11), L("weekday", 11), L("isoWeekday", 11), le("d", Q), le("e", Q), le("E", Q), le("dd", function (e, t) {
        return t.weekdaysMinRegex(e)
    }), le("ddd", function (e, t) {
        return t.weekdaysShortRegex(e)
    }), le("dddd", function (e, t) {
        return t.weekdaysRegex(e)
    }), fe(["dd", "ddd", "dddd"], function (e, t, n, i) {
        var r = n._locale.weekdaysParse(e, i, n._strict);
        null != r ? t.d = r : d(n).invalidWeekday = e
    }), fe(["d", "e", "E"], function (e, t, n, i) {
        t[i] = w(e)
    });
    var Ue = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
    var Be = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
    var Ve = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    var Ge = se;
    var ze = se;
    var Ke = se;

    function Qe() {
        function e(e, t) {
            return t.length - e.length
        }

        var t, n, i, r, o, s = [], a = [], l = [], c = [];
        for (t = 0; t < 7; t++) n = h([2e3, 1]).day(t), i = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), o = this.weekdays(n, ""), s.push(i), a.push(r), l.push(o), c.push(i), c.push(r), c.push(o);
        for (s.sort(e), a.sort(e), l.sort(e), c.sort(e), t = 0; t < 7; t++) a[t] = ue(a[t]), l[t] = ue(l[t]), c[t] = ue(c[t]);
        this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
    }

    function Ze() {
        return this.hours() % 12 || 12
    }

    function Xe(e, t) {
        W(e, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }

    function Je(e, t) {
        return t._meridiemParse
    }

    W("H", ["HH", 2], 0, "hour"), W("h", ["hh", 2], 0, Ze), W("k", ["kk", 2], 0, function () {
        return this.hours() || 24
    }), W("hmm", 0, 0, function () {
        return "" + Ze.apply(this) + Y(this.minutes(), 2)
    }), W("hmmss", 0, 0, function () {
        return "" + Ze.apply(this) + Y(this.minutes(), 2) + Y(this.seconds(), 2)
    }), W("Hmm", 0, 0, function () {
        return "" + this.hours() + Y(this.minutes(), 2)
    }), W("Hmmss", 0, 0, function () {
        return "" + this.hours() + Y(this.minutes(), 2) + Y(this.seconds(), 2)
    }), Xe("a", !0), Xe("A", !1), I("hour", "h"), L("hour", 13), le("a", Je), le("A", Je), le("H", Q), le("h", Q), le("k", Q), le("HH", Q, V), le("hh", Q, V), le("kk", Q, V), le("hmm", Z), le("hmmss", X), le("Hmm", Z), le("Hmmss", X), de(["H", "HH"], ve), de(["k", "kk"], function (e, t, n) {
        var i = w(e);
        t[ve] = 24 === i ? 0 : i
    }), de(["a", "A"], function (e, t, n) {
        n._isPm = n._locale.isPM(e), n._meridiem = e
    }), de(["h", "hh"], function (e, t, n) {
        t[ve] = w(e), d(n).bigHour = !0
    }), de("hmm", function (e, t, n) {
        var i = e.length - 2;
        t[ve] = w(e.substr(0, i)), t[ye] = w(e.substr(i)), d(n).bigHour = !0
    }), de("hmmss", function (e, t, n) {
        var i = e.length - 4, r = e.length - 2;
        t[ve] = w(e.substr(0, i)), t[ye] = w(e.substr(i, 2)), t[_e] = w(e.substr(r)), d(n).bigHour = !0
    }), de("Hmm", function (e, t, n) {
        var i = e.length - 2;
        t[ve] = w(e.substr(0, i)), t[ye] = w(e.substr(i))
    }), de("Hmmss", function (e, t, n) {
        var i = e.length - 4, r = e.length - 2;
        t[ve] = w(e.substr(0, i)), t[ye] = w(e.substr(i, 2)), t[_e] = w(e.substr(r))
    });
    var et, tt = Te("Hours", !0), nt = {
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        months: Ie,
        monthsShort: Ne,
        week: {dow: 0, doy: 6},
        weekdays: Ue,
        weekdaysMin: Ve,
        weekdaysShort: Be,
        meridiemParse: /[ap]\.?m?\.?/i
    }, it = {}, rt = {};

    function ot(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }

    function st(e) {
        var t = null;
        if (!it[e] && "undefined" != typeof module && module && module.exports) try {
            t = et._abbr, require("./locale/" + e), at(t)
        } catch (e) {
        }
        return it[e]
    }

    function at(e, t) {
        var n;
        return e && (n = o(t) ? ct(e) : lt(e, t)) && (et = n), et._abbr
    }

    function lt(e, t) {
        if (null !== t) {
            var n = nt;
            if (t.abbr = e, null != it[e]) T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = it[e]._config; else if (null != t.parentLocale) {
                if (null == it[t.parentLocale]) return rt[t.parentLocale] || (rt[t.parentLocale] = []), rt[t.parentLocale].push({
                    name: e,
                    config: t
                }), null;
                n = it[t.parentLocale]._config
            }
            return it[e] = new O(A(n, t)), rt[e] && rt[e].forEach(function (e) {
                lt(e.name, e.config)
            }), at(e), it[e]
        }
        return delete it[e], null
    }

    function ct(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return et;
        if (!i(e)) {
            if (t = st(e)) return t;
            e = [e]
        }
        return function (e) {
            for (var t, n, i, r, o = 0; o < e.length;) {
                for (t = (r = ot(e[o]).split("-")).length, n = (n = ot(e[o + 1])) ? n.split("-") : null; t > 0;) {
                    if (i = st(r.slice(0, t).join("-"))) return i;
                    if (n && n.length >= t && D(r, n, !0) >= t - 1) break;
                    t--
                }
                o++
            }
            return null
        }(e)
    }

    function ut(e) {
        var t, n = e._a;
        return n && -2 === d(e).overflow && (t = n[me] < 0 || n[me] > 11 ? me : n[ge] < 1 || n[ge] > Oe(n[pe], n[me]) ? ge : n[ve] < 0 || n[ve] > 24 || 24 === n[ve] && (0 !== n[ye] || 0 !== n[_e] || 0 !== n[be]) ? ve : n[ye] < 0 || n[ye] > 59 ? ye : n[_e] < 0 || n[_e] > 59 ? _e : n[be] < 0 || n[be] > 999 ? be : -1, d(e)._overflowDayOfYear && (t < pe || t > ge) && (t = ge), d(e)._overflowWeeks && -1 === t && (t = we), d(e)._overflowWeekday && -1 === t && (t = De), d(e).overflow = t), e
    }

    function ht(e, t, n) {
        return null != e ? e : null != t ? t : n
    }

    function dt(e) {
        var t, i, r, o, s, a = [];
        if (!e._d) {
            var l, c;
            for (l = e, c = new Date(n.now()), r = l._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()], e._w && null == e._a[ge] && null == e._a[me] && function (e) {
                var t, n, i, r, o, s, a, l;
                if (null != (t = e._w).GG || null != t.W || null != t.E) o = 1, s = 4, n = ht(t.GG, e._a[pe], We(Tt(), 1, 4).year), i = ht(t.W, 1), ((r = ht(t.E, 1)) < 1 || r > 7) && (l = !0); else {
                    o = e._locale._week.dow, s = e._locale._week.doy;
                    var c = We(Tt(), o, s);
                    n = ht(t.gg, e._a[pe], c.year), i = ht(t.w, c.week), null != t.d ? ((r = t.d) < 0 || r > 6) && (l = !0) : null != t.e ? (r = t.e + o, (t.e < 0 || t.e > 6) && (l = !0)) : r = o
                }
                i < 1 || i > Fe(n, o, s) ? d(e)._overflowWeeks = !0 : null != l ? d(e)._overflowWeekday = !0 : (a = qe(n, i, r, o, s), e._a[pe] = a.year, e._dayOfYear = a.dayOfYear)
            }(e), null != e._dayOfYear && (s = ht(e._a[pe], r[pe]), (e._dayOfYear > Ce(s) || 0 === e._dayOfYear) && (d(e)._overflowDayOfYear = !0), i = $e(s, 0, e._dayOfYear), e._a[me] = i.getUTCMonth(), e._a[ge] = i.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = a[t] = r[t];
            for (; t < 7; t++) e._a[t] = a[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[ve] && 0 === e._a[ye] && 0 === e._a[_e] && 0 === e._a[be] && (e._nextDay = !0, e._a[ve] = 0), e._d = (e._useUTC ? $e : function (e, t, n, i, r, o, s) {
                var a = new Date(e, t, n, i, r, o, s);
                return e < 100 && e >= 0 && isFinite(a.getFullYear()) && a.setFullYear(e), a
            }).apply(null, a), o = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ve] = 24), e._w && void 0 !== e._w.d && e._w.d !== o && (d(e).weekdayMismatch = !0)
        }
    }

    var ft = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        pt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        mt = /Z|[+-]\d\d(?::?\d\d)?/,
        gt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
        vt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
        yt = /^\/?Date\((\-?\d+)/i;

    function _t(e) {
        var t, n, i, r, o, s, a = e._i, l = ft.exec(a) || pt.exec(a);
        if (l) {
            for (d(e).iso = !0, t = 0, n = gt.length; t < n; t++) if (gt[t][1].exec(l[1])) {
                r = gt[t][0], i = !1 !== gt[t][2];
                break
            }
            if (null == r) return void (e._isValid = !1);
            if (l[3]) {
                for (t = 0, n = vt.length; t < n; t++) if (vt[t][1].exec(l[3])) {
                    o = (l[2] || " ") + vt[t][0];
                    break
                }
                if (null == o) return void (e._isValid = !1)
            }
            if (!i && null != o) return void (e._isValid = !1);
            if (l[4]) {
                if (!mt.exec(l[4])) return void (e._isValid = !1);
                s = "Z"
            }
            e._f = r + (o || "") + (s || ""), xt(e)
        } else e._isValid = !1
    }

    var bt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function wt(e, t, n, i, r, o) {
        var s = [function (e) {
            var t = parseInt(e, 10);
            {
                if (t <= 49) return 2e3 + t;
                if (t <= 999) return 1900 + t
            }
            return t
        }(e), Ne.indexOf(t), parseInt(n, 10), parseInt(i, 10), parseInt(r, 10)];
        return o && s.push(parseInt(o, 10)), s
    }

    var Dt = {UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480};

    function Ct(e) {
        var t, n, i, r = bt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim());
        if (r) {
            var o = wt(r[4], r[3], r[2], r[5], r[6], r[7]);
            if (t = r[1], n = o, i = e, t && Be.indexOf(t) !== new Date(n[0], n[1], n[2]).getDay() && (d(i).weekdayMismatch = !0, i._isValid = !1, 1)) return;
            e._a = o, e._tzm = function (e, t, n) {
                if (e) return Dt[e];
                if (t) return 0;
                var i = parseInt(n, 10), r = i % 100;
                return (i - r) / 100 * 60 + r
            }(r[8], r[9], r[10]), e._d = $e.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), d(e).rfc2822 = !0
        } else e._isValid = !1
    }

    function xt(e) {
        if (e._f !== n.ISO_8601) if (e._f !== n.RFC_2822) {
            e._a = [], d(e).empty = !0;
            var t, i, r, o, s, a, l, u, h = "" + e._i, f = h.length, p = 0;
            for (r = U(e._f, e._locale).match(H) || [], t = 0; t < r.length; t++) o = r[t], (i = (h.match(ce(o, e)) || [])[0]) && ((s = h.substr(0, h.indexOf(i))).length > 0 && d(e).unusedInput.push(s), h = h.slice(h.indexOf(i) + i.length), p += i.length), q[o] ? (i ? d(e).empty = !1 : d(e).unusedTokens.push(o), a = o, u = e, null != (l = i) && c(he, a) && he[a](l, u._a, u, a)) : e._strict && !i && d(e).unusedTokens.push(o);
            d(e).charsLeftOver = f - p, h.length > 0 && d(e).unusedInput.push(h), e._a[ve] <= 12 && !0 === d(e).bigHour && e._a[ve] > 0 && (d(e).bigHour = void 0), d(e).parsedDateParts = e._a.slice(0), d(e).meridiem = e._meridiem, e._a[ve] = function (e, t, n) {
                var i;
                if (null == n) return t;
                return null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((i = e.isPM(n)) && t < 12 && (t += 12), i || 12 !== t || (t = 0), t) : t
            }(e._locale, e._a[ve], e._meridiem), dt(e), ut(e)
        } else Ct(e); else _t(e)
    }

    function kt(e) {
        var t, c, h, m, v = e._i, b = e._f;
        return e._locale = e._locale || ct(e._l), null === v || void 0 === b && "" === v ? p({nullInput: !0}) : ("string" == typeof v && (e._i = v = e._locale.preparse(v)), _(v) ? new y(ut(v)) : (a(v) ? e._d = v : i(b) ? function (e) {
            var t, n, i, r, o;
            if (0 === e._f.length) return d(e).invalidFormat = !0, void (e._d = new Date(NaN));
            for (r = 0; r < e._f.length; r++) o = 0, t = g({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], xt(t), f(t) && (o += d(t).charsLeftOver, o += 10 * d(t).unusedTokens.length, d(t).score = o, (null == i || o < i) && (i = o, n = t));
            u(e, n || t)
        }(e) : b ? xt(e) : o(c = (t = e)._i) ? t._d = new Date(n.now()) : a(c) ? t._d = new Date(c.valueOf()) : "string" == typeof c ? (h = t, null === (m = yt.exec(h._i)) ? (_t(h), !1 === h._isValid && (delete h._isValid, Ct(h), !1 === h._isValid && (delete h._isValid, n.createFromInputFallback(h)))) : h._d = new Date(+m[1])) : i(c) ? (t._a = l(c.slice(0), function (e) {
            return parseInt(e, 10)
        }), dt(t)) : r(c) ? function (e) {
            if (!e._d) {
                var t = P(e._i);
                e._a = l([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
                    return e && parseInt(e, 10)
                }), dt(e)
            }
        }(t) : s(c) ? t._d = new Date(c) : n.createFromInputFallback(t), f(e) || (e._d = null), e))
    }

    function St(e, t, n, o, s) {
        var a, l = {};
        return !0 !== n && !1 !== n || (o = n, n = void 0), (r(e) && function (e) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
            var t;
            for (t in e) if (e.hasOwnProperty(t)) return !1;
            return !0
        }(e) || i(e) && 0 === e.length) && (e = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = s, l._l = n, l._i = e, l._f = t, l._strict = o, (a = new y(ut(kt(l))))._nextDay && (a.add(1, "d"), a._nextDay = void 0), a
    }

    function Tt(e, t, n, i) {
        return St(e, t, n, i, !1)
    }

    n.createFromInputFallback = x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }), n.ISO_8601 = function () {
    }, n.RFC_2822 = function () {
    };
    var Et = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var e = Tt.apply(null, arguments);
            return this.isValid() && e.isValid() ? e < this ? this : e : p()
        }),
        At = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var e = Tt.apply(null, arguments);
            return this.isValid() && e.isValid() ? e > this ? this : e : p()
        });

    function Ot(e, t) {
        var n, r;
        if (1 === t.length && i(t[0]) && (t = t[0]), !t.length) return Tt();
        for (n = t[0], r = 1; r < t.length; ++r) t[r].isValid() && !t[r][e](n) || (n = t[r]);
        return n
    }

    var Mt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function It(e) {
        var t = P(e), n = t.year || 0, i = t.quarter || 0, r = t.month || 0, o = t.week || 0, s = t.day || 0,
            a = t.hour || 0, l = t.minute || 0, c = t.second || 0, u = t.millisecond || 0;
        this._isValid = function (e) {
            for (var t in e) if (-1 === ke.call(Mt, t) || null != e[t] && isNaN(e[t])) return !1;
            for (var n = !1, i = 0; i < Mt.length; ++i) if (e[Mt[i]]) {
                if (n) return !1;
                parseFloat(e[Mt[i]]) !== w(e[Mt[i]]) && (n = !0)
            }
            return !0
        }(t), this._milliseconds = +u + 1e3 * c + 6e4 * l + 1e3 * a * 60 * 60, this._days = +s + 7 * o, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = ct(), this._bubble()
    }

    function Nt(e) {
        return e instanceof It
    }

    function Pt(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
    }

    function jt(e, t) {
        W(e, 0, 0, function () {
            var e = this.utcOffset(), n = "+";
            return e < 0 && (e = -e, n = "-"), n + Y(~~(e / 60), 2) + t + Y(~~e % 60, 2)
        })
    }

    jt("Z", ":"), jt("ZZ", ""), le("Z", oe), le("ZZ", oe), de(["Z", "ZZ"], function (e, t, n) {
        n._useUTC = !0, n._tzm = Yt(oe, e)
    });
    var Lt = /([\+\-]|\d\d)/gi;

    function Yt(e, t) {
        var n = (t || "").match(e);
        if (null === n) return null;
        var i = ((n[n.length - 1] || []) + "").match(Lt) || ["-", 0, 0], r = 60 * i[1] + w(i[2]);
        return 0 === r ? 0 : "+" === i[0] ? r : -r
    }

    function Ht(e, t) {
        var i, r;
        return t._isUTC ? (i = t.clone(), r = (_(e) || a(e) ? e.valueOf() : Tt(e).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + r), n.updateOffset(i, !1), i) : Tt(e).local()
    }

    function $t(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
    }

    function Rt() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
    }

    n.updateOffset = function () {
    };
    var qt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        Wt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function Ft(e, t) {
        var n, i, r, o = e, a = null;
        return Nt(e) ? o = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : s(e) ? (o = {}, t ? o[t] = e : o.milliseconds = e) : (a = qt.exec(e)) ? (n = "-" === a[1] ? -1 : 1, o = {
            y: 0,
            d: w(a[ge]) * n,
            h: w(a[ve]) * n,
            m: w(a[ye]) * n,
            s: w(a[_e]) * n,
            ms: w(Pt(1e3 * a[be])) * n
        }) : (a = Wt.exec(e)) ? (n = "-" === a[1] ? -1 : (a[1], 1), o = {
            y: Ut(a[2], n),
            M: Ut(a[3], n),
            w: Ut(a[4], n),
            d: Ut(a[5], n),
            h: Ut(a[6], n),
            m: Ut(a[7], n),
            s: Ut(a[8], n)
        }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (r = function (e, t) {
            var n;
            if (!e.isValid() || !t.isValid()) return {milliseconds: 0, months: 0};
            t = Ht(t, e), e.isBefore(t) ? n = Bt(e, t) : ((n = Bt(t, e)).milliseconds = -n.milliseconds, n.months = -n.months);
            return n
        }(Tt(o.from), Tt(o.to)), (o = {}).ms = r.milliseconds, o.M = r.months), i = new It(o), Nt(e) && c(e, "_locale") && (i._locale = e._locale), i
    }

    function Ut(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
    }

    function Bt(e, t) {
        var n = {milliseconds: 0, months: 0};
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
    }

    function Vt(e, t) {
        return function (n, i) {
            var r;
            return null === i || isNaN(+i) || (T(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = n, n = i, i = r), Gt(this, Ft(n = "string" == typeof n ? +n : n, i), e), this
        }
    }

    function Gt(e, t, i, r) {
        var o = t._milliseconds, s = Pt(t._days), a = Pt(t._months);
        e.isValid() && (r = null == r || r, a && Pe(e, Ee(e, "Month") + a * i), s && Ae(e, "Date", Ee(e, "Date") + s * i), o && e._d.setTime(e._d.valueOf() + o * i), r && n.updateOffset(e, s || a))
    }

    Ft.fn = It.prototype, Ft.invalid = function () {
        return Ft(NaN)
    };
    var zt = Vt(1, "add"), Kt = Vt(-1, "subtract");

    function Qt(e, t) {
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month()), i = e.clone().add(n, "months");
        return -(n + (t - i < 0 ? (t - i) / (i - e.clone().add(n - 1, "months")) : (t - i) / (e.clone().add(n + 1, "months") - i))) || 0
    }

    function Zt(e) {
        var t;
        return void 0 === e ? this._locale._abbr : (null != (t = ct(e)) && (this._locale = t), this)
    }

    n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Xt = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    });

    function Jt() {
        return this._locale
    }

    function en(e, t) {
        W(0, [e, e.length], 0, t)
    }

    function tn(e, t, n, i, r) {
        var o;
        return null == e ? We(this, i, r).year : (t > (o = Fe(e, i, r)) && (t = o), function (e, t, n, i, r) {
            var o = qe(e, t, n, i, r), s = $e(o.year, 0, o.dayOfYear);
            return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
        }.call(this, e, t, n, i, r))
    }

    W(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100
    }), W(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100
    }), en("gggg", "weekYear"), en("ggggg", "weekYear"), en("GGGG", "isoWeekYear"), en("GGGGG", "isoWeekYear"), I("weekYear", "gg"), I("isoWeekYear", "GG"), L("weekYear", 1), L("isoWeekYear", 1), le("G", ie), le("g", ie), le("GG", Q, V), le("gg", Q, V), le("GGGG", ee, z), le("gggg", ee, z), le("GGGGG", te, K), le("ggggg", te, K), fe(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, i) {
        t[i.substr(0, 2)] = w(e)
    }), fe(["gg", "GG"], function (e, t, i, r) {
        t[r] = n.parseTwoDigitYear(e)
    }), W("Q", 0, "Qo", "quarter"), I("quarter", "Q"), L("quarter", 7), le("Q", B), de("Q", function (e, t) {
        t[me] = 3 * (w(e) - 1)
    }), W("D", ["DD", 2], "Do", "date"), I("date", "D"), L("date", 9), le("D", Q), le("DD", Q, V), le("Do", function (e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
    }), de(["D", "DD"], ge), de("Do", function (e, t) {
        t[ge] = w(e.match(Q)[0])
    });
    var nn = Te("Date", !0);
    W("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), I("dayOfYear", "DDD"), L("dayOfYear", 4), le("DDD", J), le("DDDD", G), de(["DDD", "DDDD"], function (e, t, n) {
        n._dayOfYear = w(e)
    }), W("m", ["mm", 2], 0, "minute"), I("minute", "m"), L("minute", 14), le("m", Q), le("mm", Q, V), de(["m", "mm"], ye);
    var rn = Te("Minutes", !1);
    W("s", ["ss", 2], 0, "second"), I("second", "s"), L("second", 15), le("s", Q), le("ss", Q, V), de(["s", "ss"], _e);
    var on, sn = Te("Seconds", !1);
    for (W("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
    }), W(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
    }), W(0, ["SSS", 3], 0, "millisecond"), W(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond()
    }), W(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond()
    }), W(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond()
    }), W(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond()
    }), W(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond()
    }), W(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond()
    }), I("millisecond", "ms"), L("millisecond", 16), le("S", J, B), le("SS", J, V), le("SSS", J, G), on = "SSSS"; on.length <= 9; on += "S") le(on, ne);

    function an(e, t) {
        t[be] = w(1e3 * ("0." + e))
    }

    for (on = "S"; on.length <= 9; on += "S") de(on, an);
    var ln = Te("Milliseconds", !1);
    W("z", 0, 0, "zoneAbbr"), W("zz", 0, 0, "zoneName");
    var cn = y.prototype;

    function un(e) {
        return e
    }

    cn.add = zt, cn.calendar = function (e, t) {
        var i = e || Tt(), r = Ht(i, this).startOf("day"), o = n.calendarFormat(this, r) || "sameElse",
            s = t && (E(t[o]) ? t[o].call(this, i) : t[o]);
        return this.format(s || this.localeData().calendar(o, this, Tt(i)))
    }, cn.clone = function () {
        return new y(this)
    }, cn.diff = function (e, t, n) {
        var i, r, o;
        if (!this.isValid()) return NaN;
        if (!(i = Ht(e, this)).isValid()) return NaN;
        switch (r = 6e4 * (i.utcOffset() - this.utcOffset()), t = N(t)) {
            case"year":
                o = Qt(this, i) / 12;
                break;
            case"month":
                o = Qt(this, i);
                break;
            case"quarter":
                o = Qt(this, i) / 3;
                break;
            case"second":
                o = (this - i) / 1e3;
                break;
            case"minute":
                o = (this - i) / 6e4;
                break;
            case"hour":
                o = (this - i) / 36e5;
                break;
            case"day":
                o = (this - i - r) / 864e5;
                break;
            case"week":
                o = (this - i - r) / 6048e5;
                break;
            default:
                o = this - i
        }
        return n ? o : b(o)
    }, cn.endOf = function (e) {
        return void 0 === (e = N(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
    }, cn.format = function (e) {
        e || (e = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
        var t = F(this, e);
        return this.localeData().postformat(t)
    }, cn.from = function (e, t) {
        return this.isValid() && (_(e) && e.isValid() || Tt(e).isValid()) ? Ft({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }, cn.fromNow = function (e) {
        return this.from(Tt(), e)
    }, cn.to = function (e, t) {
        return this.isValid() && (_(e) && e.isValid() || Tt(e).isValid()) ? Ft({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }, cn.toNow = function (e) {
        return this.to(Tt(), e)
    }, cn.get = function (e) {
        return E(this[e = N(e)]) ? this[e]() : this
    }, cn.invalidAt = function () {
        return d(this).overflow
    }, cn.isAfter = function (e, t) {
        var n = _(e) ? e : Tt(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = N(o(t) ? "millisecond" : t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
    }, cn.isBefore = function (e, t) {
        var n = _(e) ? e : Tt(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = N(o(t) ? "millisecond" : t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
    }, cn.isBetween = function (e, t, n, i) {
        return ("(" === (i = i || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === i[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
    }, cn.isSame = function (e, t) {
        var n, i = _(e) ? e : Tt(e);
        return !(!this.isValid() || !i.isValid()) && ("millisecond" === (t = N(t || "millisecond")) ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
    }, cn.isSameOrAfter = function (e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    }, cn.isSameOrBefore = function (e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    }, cn.isValid = function () {
        return f(this)
    }, cn.lang = Xt, cn.locale = Zt, cn.localeData = Jt, cn.max = At, cn.min = Et, cn.parsingFlags = function () {
        return u({}, d(this))
    }, cn.set = function (e, t) {
        if ("object" == typeof e) for (var n = function (e) {
            var t = [];
            for (var n in e) t.push({unit: n, priority: j[n]});
            return t.sort(function (e, t) {
                return e.priority - t.priority
            }), t
        }(e = P(e)), i = 0; i < n.length; i++) this[n[i].unit](e[n[i].unit]); else if (E(this[e = N(e)])) return this[e](t);
        return this
    }, cn.startOf = function (e) {
        switch (e = N(e)) {
            case"year":
                this.month(0);
            case"quarter":
            case"month":
                this.date(1);
            case"week":
            case"isoWeek":
            case"day":
            case"date":
                this.hours(0);
            case"hour":
                this.minutes(0);
            case"minute":
                this.seconds(0);
            case"second":
                this.milliseconds(0)
        }
        return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
    }, cn.subtract = Kt, cn.toArray = function () {
        return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
    }, cn.toObject = function () {
        return {
            years: this.year(),
            months: this.month(),
            date: this.date(),
            hours: this.hours(),
            minutes: this.minutes(),
            seconds: this.seconds(),
            milliseconds: this.milliseconds()
        }
    }, cn.toDate = function () {
        return new Date(this.valueOf())
    }, cn.toISOString = function (e) {
        if (!this.isValid()) return null;
        var t = !0 !== e, n = t ? this.clone().utc() : this;
        return n.year() < 0 || n.year() > 9999 ? F(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : E(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this._d.valueOf()).toISOString().replace("Z", F(n, "Z")) : F(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }, cn.inspect = function () {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e = "moment", t = "";
        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
        var n = "[" + e + '("]', i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", r = t + '[")]';
        return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + r)
    }, cn.toJSON = function () {
        return this.isValid() ? this.toISOString() : null
    }, cn.toString = function () {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }, cn.unix = function () {
        return Math.floor(this.valueOf() / 1e3)
    }, cn.valueOf = function () {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }, cn.creationData = function () {
        return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
    }, cn.year = Se, cn.isLeapYear = function () {
        return xe(this.year())
    }, cn.weekYear = function (e) {
        return tn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }, cn.isoWeekYear = function (e) {
        return tn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }, cn.quarter = cn.quarters = function (e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }, cn.month = je, cn.daysInMonth = function () {
        return Oe(this.year(), this.month())
    }, cn.week = cn.weeks = function (e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
    }, cn.isoWeek = cn.isoWeeks = function (e) {
        var t = We(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
    }, cn.weeksInYear = function () {
        var e = this.localeData()._week;
        return Fe(this.year(), e.dow, e.doy)
    }, cn.isoWeeksInYear = function () {
        return Fe(this.year(), 1, 4)
    }, cn.date = nn, cn.day = cn.days = function (e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t, n, i = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (t = e, n = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - i, "d")) : i
    }, cn.weekday = function (e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d")
    }, cn.isoWeekday = function (e) {
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
            var t = (n = e, i = this.localeData(), "string" == typeof n ? i.weekdaysParse(n) % 7 || 7 : isNaN(n) ? null : n);
            return this.day(this.day() % 7 ? t : t - 7)
        }
        return this.day() || 7;
        var n, i
    }, cn.dayOfYear = function (e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
    }, cn.hour = cn.hours = tt, cn.minute = cn.minutes = rn, cn.second = cn.seconds = sn, cn.millisecond = cn.milliseconds = ln, cn.utcOffset = function (e, t, i) {
        var r, o = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
            if ("string" == typeof e) {
                if (null === (e = Yt(oe, e))) return this
            } else Math.abs(e) < 16 && !i && (e *= 60);
            return !this._isUTC && t && (r = $t(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), o !== e && (!t || this._changeInProgress ? Gt(this, Ft(e - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this
        }
        return this._isUTC ? o : $t(this)
    }, cn.utc = function (e) {
        return this.utcOffset(0, e)
    }, cn.local = function (e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract($t(this), "m")), this
    }, cn.parseZone = function () {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
            var e = Yt(re, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
    }, cn.hasAlignedHourOffset = function (e) {
        return !!this.isValid() && (e = e ? Tt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
    }, cn.isDST = function () {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }, cn.isLocal = function () {
        return !!this.isValid() && !this._isUTC
    }, cn.isUtcOffset = function () {
        return !!this.isValid() && this._isUTC
    }, cn.isUtc = Rt, cn.isUTC = Rt, cn.zoneAbbr = function () {
        return this._isUTC ? "UTC" : ""
    }, cn.zoneName = function () {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }, cn.dates = x("dates accessor is deprecated. Use date instead.", nn), cn.months = x("months accessor is deprecated. Use month instead", je), cn.years = x("years accessor is deprecated. Use year instead", Se), cn.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) {
        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
    }), cn.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
        if (!o(this._isDSTShifted)) return this._isDSTShifted;
        var e = {};
        if (g(e, this), (e = kt(e))._a) {
            var t = e._isUTC ? h(e._a) : Tt(e._a);
            this._isDSTShifted = this.isValid() && D(e._a, t.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    });
    var hn = O.prototype;

    function dn(e, t, n, i) {
        var r = ct(), o = h().set(i, t);
        return r[n](o, e)
    }

    function fn(e, t, n) {
        if (s(e) && (t = e, e = void 0), e = e || "", null != t) return dn(e, t, n, "month");
        var i, r = [];
        for (i = 0; i < 12; i++) r[i] = dn(e, i, n, "month");
        return r
    }

    function pn(e, t, n, i) {
        "boolean" == typeof e ? (s(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, s(t) && (n = t, t = void 0), t = t || "");
        var r, o = ct(), a = e ? o._week.dow : 0;
        if (null != n) return dn(t, (n + a) % 7, i, "day");
        var l = [];
        for (r = 0; r < 7; r++) l[r] = dn(t, (r + a) % 7, i, "day");
        return l
    }

    hn.calendar = function (e, t, n) {
        var i = this._calendar[e] || this._calendar.sameElse;
        return E(i) ? i.call(t, n) : i
    }, hn.longDateFormat = function (e) {
        var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
            return e.slice(1)
        }), this._longDateFormat[e])
    }, hn.invalidDate = function () {
        return this._invalidDate
    }, hn.ordinal = function (e) {
        return this._ordinal.replace("%d", e)
    }, hn.preparse = un, hn.postformat = un, hn.relativeTime = function (e, t, n, i) {
        var r = this._relativeTime[n];
        return E(r) ? r(e, t, n, i) : r.replace(/%d/i, e)
    }, hn.pastFuture = function (e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return E(n) ? n(t) : n.replace(/%s/i, t)
    }, hn.set = function (e) {
        var t, n;
        for (n in e) E(t = e[n]) ? this[n] = t : this["_" + n] = t;
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }, hn.months = function (e, t) {
        return e ? i(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Me).test(t) ? "format" : "standalone"][e.month()] : i(this._months) ? this._months : this._months.standalone
    }, hn.monthsShort = function (e, t) {
        return e ? i(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Me.test(t) ? "format" : "standalone"][e.month()] : i(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }, hn.monthsParse = function (e, t, n) {
        var i, r, o;
        if (this._monthsParseExact) return function (e, t, n) {
            var i, r, o, s = e.toLocaleLowerCase();
            if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) o = h([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
            return n ? "MMM" === t ? -1 !== (r = ke.call(this._shortMonthsParse, s)) ? r : null : -1 !== (r = ke.call(this._longMonthsParse, s)) ? r : null : "MMM" === t ? -1 !== (r = ke.call(this._shortMonthsParse, s)) ? r : -1 !== (r = ke.call(this._longMonthsParse, s)) ? r : null : -1 !== (r = ke.call(this._longMonthsParse, s)) ? r : -1 !== (r = ke.call(this._shortMonthsParse, s)) ? r : null
        }.call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
            if (r = h([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i;
            if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
            if (!n && this._monthsParse[i].test(e)) return i
        }
    }, hn.monthsRegex = function (e) {
        return this._monthsParseExact ? (c(this, "_monthsRegex") || He.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = Ye), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
    }, hn.monthsShortRegex = function (e) {
        return this._monthsParseExact ? (c(this, "_monthsRegex") || He.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = Le), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }, hn.week = function (e) {
        return We(e, this._week.dow, this._week.doy).week
    }, hn.firstDayOfYear = function () {
        return this._week.doy
    }, hn.firstDayOfWeek = function () {
        return this._week.dow
    }, hn.weekdays = function (e, t) {
        return e ? i(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : i(this._weekdays) ? this._weekdays : this._weekdays.standalone
    }, hn.weekdaysMin = function (e) {
        return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }, hn.weekdaysShort = function (e) {
        return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }, hn.weekdaysParse = function (e, t, n) {
        var i, r, o;
        if (this._weekdaysParseExact) return function (e, t, n) {
            var i, r, o, s = e.toLocaleLowerCase();
            if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) o = h([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
            return n ? "dddd" === t ? -1 !== (r = ke.call(this._weekdaysParse, s)) ? r : null : "ddd" === t ? -1 !== (r = ke.call(this._shortWeekdaysParse, s)) ? r : null : -1 !== (r = ke.call(this._minWeekdaysParse, s)) ? r : null : "dddd" === t ? -1 !== (r = ke.call(this._weekdaysParse, s)) ? r : -1 !== (r = ke.call(this._shortWeekdaysParse, s)) ? r : -1 !== (r = ke.call(this._minWeekdaysParse, s)) ? r : null : "ddd" === t ? -1 !== (r = ke.call(this._shortWeekdaysParse, s)) ? r : -1 !== (r = ke.call(this._weekdaysParse, s)) ? r : -1 !== (r = ke.call(this._minWeekdaysParse, s)) ? r : null : -1 !== (r = ke.call(this._minWeekdaysParse, s)) ? r : -1 !== (r = ke.call(this._weekdaysParse, s)) ? r : -1 !== (r = ke.call(this._shortWeekdaysParse, s)) ? r : null
        }.call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
            if (r = h([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (o = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[i].test(e)) return i;
            if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e)) return i;
            if (n && "dd" === t && this._minWeekdaysParse[i].test(e)) return i;
            if (!n && this._weekdaysParse[i].test(e)) return i
        }
    }, hn.weekdaysRegex = function (e) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Ge), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }, hn.weekdaysShortRegex = function (e) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ze), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }, hn.weekdaysMinRegex = function (e) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ke), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }, hn.isPM = function (e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    }, hn.meridiem = function (e, t, n) {
        return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
    }, at("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (e) {
            var t = e % 10;
            return e + (1 === w(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        }
    }), n.lang = x("moment.lang is deprecated. Use moment.locale instead.", at), n.langData = x("moment.langData is deprecated. Use moment.localeData instead.", ct);
    var mn = Math.abs;

    function gn(e, t, n, i) {
        var r = Ft(t, n);
        return e._milliseconds += i * r._milliseconds, e._days += i * r._days, e._months += i * r._months, e._bubble()
    }

    function vn(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }

    function yn(e) {
        return 4800 * e / 146097
    }

    function _n(e) {
        return 146097 * e / 4800
    }

    function bn(e) {
        return function () {
            return this.as(e)
        }
    }

    var wn = bn("ms"), Dn = bn("s"), Cn = bn("m"), xn = bn("h"), kn = bn("d"), Sn = bn("w"), Tn = bn("M"), En = bn("y");

    function An(e) {
        return function () {
            return this.isValid() ? this._data[e] : NaN
        }
    }

    var On = An("milliseconds"), Mn = An("seconds"), In = An("minutes"), Nn = An("hours"), Pn = An("days"),
        jn = An("months"), Ln = An("years");
    var Yn = Math.round, Hn = {ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11};
    var $n = Math.abs;

    function Rn(e) {
        return (e > 0) - (e < 0) || +e
    }

    function qn() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e, t, n = $n(this._milliseconds) / 1e3, i = $n(this._days), r = $n(this._months);
        t = b((e = b(n / 60)) / 60), n %= 60, e %= 60;
        var o = b(r / 12), s = r %= 12, a = i, l = t, c = e, u = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
            h = this.asSeconds();
        if (!h) return "P0D";
        var d = h < 0 ? "-" : "", f = Rn(this._months) !== Rn(h) ? "-" : "", p = Rn(this._days) !== Rn(h) ? "-" : "",
            m = Rn(this._milliseconds) !== Rn(h) ? "-" : "";
        return d + "P" + (o ? f + o + "Y" : "") + (s ? f + s + "M" : "") + (a ? p + a + "D" : "") + (l || c || u ? "T" : "") + (l ? m + l + "H" : "") + (c ? m + c + "M" : "") + (u ? m + u + "S" : "")
    }

    var Wn = It.prototype;
    return Wn.isValid = function () {
        return this._isValid
    }, Wn.abs = function () {
        var e = this._data;
        return this._milliseconds = mn(this._milliseconds), this._days = mn(this._days), this._months = mn(this._months), e.milliseconds = mn(e.milliseconds), e.seconds = mn(e.seconds), e.minutes = mn(e.minutes), e.hours = mn(e.hours), e.months = mn(e.months), e.years = mn(e.years), this
    }, Wn.add = function (e, t) {
        return gn(this, e, t, 1)
    }, Wn.subtract = function (e, t) {
        return gn(this, e, t, -1)
    }, Wn.as = function (e) {
        if (!this.isValid()) return NaN;
        var t, n, i = this._milliseconds;
        if ("month" === (e = N(e)) || "year" === e) return t = this._days + i / 864e5, n = this._months + yn(t), "month" === e ? n : n / 12;
        switch (t = this._days + Math.round(_n(this._months)), e) {
            case"week":
                return t / 7 + i / 6048e5;
            case"day":
                return t + i / 864e5;
            case"hour":
                return 24 * t + i / 36e5;
            case"minute":
                return 1440 * t + i / 6e4;
            case"second":
                return 86400 * t + i / 1e3;
            case"millisecond":
                return Math.floor(864e5 * t) + i;
            default:
                throw new Error("Unknown unit " + e)
        }
    }, Wn.asMilliseconds = wn, Wn.asSeconds = Dn, Wn.asMinutes = Cn, Wn.asHours = xn, Wn.asDays = kn, Wn.asWeeks = Sn, Wn.asMonths = Tn, Wn.asYears = En, Wn.valueOf = function () {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * w(this._months / 12) : NaN
    }, Wn._bubble = function () {
        var e, t, n, i, r, o = this._milliseconds, s = this._days, a = this._months, l = this._data;
        return o >= 0 && s >= 0 && a >= 0 || o <= 0 && s <= 0 && a <= 0 || (o += 864e5 * vn(_n(a) + s), s = 0, a = 0), l.milliseconds = o % 1e3, e = b(o / 1e3), l.seconds = e % 60, t = b(e / 60), l.minutes = t % 60, n = b(t / 60), l.hours = n % 24, a += r = b(yn(s += b(n / 24))), s -= vn(_n(r)), i = b(a / 12), a %= 12, l.days = s, l.months = a, l.years = i, this
    }, Wn.clone = function () {
        return Ft(this)
    }, Wn.get = function (e) {
        return e = N(e), this.isValid() ? this[e + "s"]() : NaN
    }, Wn.milliseconds = On, Wn.seconds = Mn, Wn.minutes = In, Wn.hours = Nn, Wn.days = Pn, Wn.weeks = function () {
        return b(this.days() / 7)
    }, Wn.months = jn, Wn.years = Ln, Wn.humanize = function (e) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var t, n, i, r, o, s, a, l, c, u, h, d = this.localeData(),
            f = (n = !e, i = d, r = Ft(t = this).abs(), o = Yn(r.as("s")), s = Yn(r.as("m")), a = Yn(r.as("h")), l = Yn(r.as("d")), c = Yn(r.as("M")), u = Yn(r.as("y")), (h = o <= Hn.ss && ["s", o] || o < Hn.s && ["ss", o] || s <= 1 && ["m"] || s < Hn.m && ["mm", s] || a <= 1 && ["h"] || a < Hn.h && ["hh", a] || l <= 1 && ["d"] || l < Hn.d && ["dd", l] || c <= 1 && ["M"] || c < Hn.M && ["MM", c] || u <= 1 && ["y"] || ["yy", u])[2] = n, h[3] = +t > 0, h[4] = i, function (e, t, n, i, r) {
                return r.relativeTime(t || 1, !!n, e, i)
            }.apply(null, h));
        return e && (f = d.pastFuture(+this, f)), d.postformat(f)
    }, Wn.toISOString = qn, Wn.toString = qn, Wn.toJSON = qn, Wn.locale = Zt, Wn.localeData = Jt, Wn.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", qn), Wn.lang = Xt, W("X", 0, 0, "unix"), W("x", 0, 0, "valueOf"), le("x", ie), le("X", /[+-]?\d+(\.\d{1,3})?/), de("X", function (e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10))
    }), de("x", function (e, t, n) {
        n._d = new Date(w(e))
    }), n.version = "2.20.1", e = Tt, n.fn = cn, n.min = function () {
        return Ot("isBefore", [].slice.call(arguments, 0))
    }, n.max = function () {
        return Ot("isAfter", [].slice.call(arguments, 0))
    }, n.now = function () {
        return Date.now ? Date.now() : +new Date
    }, n.utc = h, n.unix = function (e) {
        return Tt(1e3 * e)
    }, n.months = function (e, t) {
        return fn(e, t, "months")
    }, n.isDate = a, n.locale = at, n.invalid = p, n.duration = Ft, n.isMoment = _, n.weekdays = function (e, t, n) {
        return pn(e, t, n, "weekdays")
    }, n.parseZone = function () {
        return Tt.apply(null, arguments).parseZone()
    }, n.localeData = ct, n.isDuration = Nt, n.monthsShort = function (e, t) {
        return fn(e, t, "monthsShort")
    }, n.weekdaysMin = function (e, t, n) {
        return pn(e, t, n, "weekdaysMin")
    }, n.defineLocale = lt, n.updateLocale = function (e, t) {
        if (null != t) {
            var n, i, r = nt;
            null != (i = st(e)) && (r = i._config), (n = new O(t = A(r, t))).parentLocale = it[e], it[e] = n, at(e)
        } else null != it[e] && (null != it[e].parentLocale ? it[e] = it[e].parentLocale : null != it[e] && delete it[e]);
        return it[e]
    }, n.locales = function () {
        return k(it)
    }, n.weekdaysShort = function (e, t, n) {
        return pn(e, t, n, "weekdaysShort")
    }, n.normalizeUnits = N, n.relativeTimeRounding = function (e) {
        return void 0 === e ? Yn : "function" == typeof e && (Yn = e, !0)
    }, n.relativeTimeThreshold = function (e, t) {
        return void 0 !== Hn[e] && (void 0 === t ? Hn[e] : (Hn[e] = t, "s" === e && (Hn.ss = t - 1), !0))
    }, n.calendarFormat = function (e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
    }, n.prototype = cn, n.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "YYYY-[W]WW",
        MONTH: "YYYY-MM"
    }, n
}), function (e) {
    e.fn.extend({
        slimScroll: function (n) {
            var i = e.extend({
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: .4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: .2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px"
            }, n);
            return this.each(function () {
                var r, o, s, a, l, c, u, h, d = "<div></div>", f = 30, p = !1, m = e(this);
                if (m.parent().hasClass(i.wrapperClass)) {
                    var g = m.scrollTop();
                    if (D = m.siblings("." + i.barClass), w = m.siblings("." + i.railClass), S(), e.isPlainObject(n)) {
                        if ("height" in n && "auto" == n.height) {
                            m.parent().css("height", "auto"), m.css("height", "auto");
                            var v = m.parent().parent().height();
                            m.parent().css("height", v), m.css("height", v)
                        } else if ("height" in n) {
                            var y = n.height;
                            m.parent().css("height", y), m.css("height", y)
                        }
                        if ("scrollTo" in n) g = parseInt(i.scrollTo); else if ("scrollBy" in n) g += parseInt(i.scrollBy); else if ("destroy" in n) return D.remove(), w.remove(), void m.unwrap();
                        k(g, !1, !0)
                    }
                } else if (!(e.isPlainObject(n) && "destroy" in n)) {
                    i.height = "auto" == i.height ? m.parent().height() : i.height;
                    var _ = e(d).addClass(i.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: i.width,
                        height: i.height
                    });
                    m.css({overflow: "hidden", width: i.width, height: i.height});
                    var b, w = e(d).addClass(i.railClass).css({
                        width: i.size,
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        display: i.alwaysVisible && i.railVisible ? "block" : "none",
                        "border-radius": i.railBorderRadius,
                        background: i.railColor,
                        opacity: i.railOpacity,
                        zIndex: 90
                    }), D = e(d).addClass(i.barClass).css({
                        background: i.color,
                        width: i.size,
                        position: "absolute",
                        top: 0,
                        opacity: i.opacity,
                        display: i.alwaysVisible ? "block" : "none",
                        "border-radius": i.borderRadius,
                        BorderRadius: i.borderRadius,
                        MozBorderRadius: i.borderRadius,
                        WebkitBorderRadius: i.borderRadius,
                        zIndex: 99
                    }), C = "right" == i.position ? {right: i.distance} : {left: i.distance};
                    w.css(C), D.css(C), m.wrap(_), m.parent().append(D), m.parent().append(w), i.railDraggable && D.bind("mousedown", function (n) {
                        var i = e(document);
                        return s = !0, t = parseFloat(D.css("top")), pageY = n.pageY, i.bind("mousemove.slimscroll", function (e) {
                            currTop = t + e.pageY - pageY, D.css("top", currTop), k(0, D.position().top, !1)
                        }), i.bind("mouseup.slimscroll", function (e) {
                            s = !1, E(), i.unbind(".slimscroll")
                        }), !1
                    }).bind("selectstart.slimscroll", function (e) {
                        return e.stopPropagation(), e.preventDefault(), !1
                    }), w.hover(function () {
                        T()
                    }, function () {
                        E()
                    }), D.hover(function () {
                        o = !0
                    }, function () {
                        o = !1
                    }), m.hover(function () {
                        r = !0, T(), E()
                    }, function () {
                        r = !1, E()
                    }), m.bind("touchstart", function (e, t) {
                        e.originalEvent.touches.length && (l = e.originalEvent.touches[0].pageY)
                    }), m.bind("touchmove", function (e) {
                        (p || e.originalEvent.preventDefault(), e.originalEvent.touches.length) && (k((l - e.originalEvent.touches[0].pageY) / i.touchScrollStep, !0), l = e.originalEvent.touches[0].pageY)
                    }), S(), "bottom" === i.start ? (D.css({top: m.outerHeight() - D.outerHeight()}), k(0, !0)) : "top" !== i.start && (k(e(i.start).position().top, null, !0), i.alwaysVisible || D.hide()), b = this, window.addEventListener ? (b.addEventListener("DOMMouseScroll", x, !1), b.addEventListener("mousewheel", x, !1)) : document.attachEvent("onmousewheel", x)
                }

                function x(t) {
                    if (r) {
                        var n = 0;
                        (t = t || window.event).wheelDelta && (n = -t.wheelDelta / 120), t.detail && (n = t.detail / 3);
                        var o = t.target || t.srcTarget || t.srcElement;
                        e(o).closest("." + i.wrapperClass).is(m.parent()) && k(n, !0), t.preventDefault && !p && t.preventDefault(), p || (t.returnValue = !1)
                    }
                }

                function k(e, t, n) {
                    p = !1;
                    var r = e, o = m.outerHeight() - D.outerHeight();
                    if (t && (r = parseInt(D.css("top")) + e * parseInt(i.wheelStep) / 100 * D.outerHeight(), r = Math.min(Math.max(r, 0), o), r = e > 0 ? Math.ceil(r) : Math.floor(r), D.css({top: r + "px"})), r = (u = parseInt(D.css("top")) / (m.outerHeight() - D.outerHeight())) * (m[0].scrollHeight - m.outerHeight()), n) {
                        var s = (r = e) / m[0].scrollHeight * m.outerHeight();
                        s = Math.min(Math.max(s, 0), o), D.css({top: s + "px"})
                    }
                    m.scrollTop(r), m.trigger("slimscrolling", ~~r), T(), E()
                }

                function S() {
                    c = Math.max(m.outerHeight() / m[0].scrollHeight * m.outerHeight(), f), D.css({height: c + "px"});
                    var e = c == m.outerHeight() ? "none" : "block";
                    D.css({display: e})
                }

                function T() {
                    if (S(), clearTimeout(a), u == ~~u) {
                        if (p = i.allowPageScroll, h != u) {
                            var e = 0 == ~~u ? "top" : "bottom";
                            m.trigger("slimscroll", e)
                        }
                    } else p = !1;
                    h = u, c >= m.outerHeight() ? p = !0 : (D.stop(!0, !0).fadeIn("fast"), i.railVisible && w.stop(!0, !0).fadeIn("fast"))
                }

                function E() {
                    i.alwaysVisible || (a = setTimeout(function () {
                        i.disableFadeOut && r || o || s || (D.fadeOut("slow"), w.fadeOut("slow"))
                    }, 1e3))
                }
            }), this
        }
    }), e.fn.extend({slimscroll: e.fn.slimScroll})
}(jQuery), function (e, t) {
    if ("function" == typeof define && define.amd) define(["moment", "jquery"], function (e, n) {
        return n.fn || (n.fn = {}), t(e, n)
    }); else if ("object" == typeof module && module.exports) {
        var n = "undefined" != typeof window ? window.jQuery : void 0;
        n || (n = require("jquery")).fn || (n.fn = {});
        var i = "undefined" != typeof window && void 0 !== window.moment ? window.moment : require("moment");
        module.exports = t(i, n)
    } else e.daterangepicker = t(e.moment, e.jQuery)
}(this, function (e, t) {
    var n = function (n, i, r) {
        if (this.parentEl = "body", this.element = t(n), this.startDate = e().startOf("day"), this.endDate = e().endOf("day"), this.minDate = !1, this.maxDate = !1, this.maxSpan = !1, this.autoApply = !1, this.singleDatePicker = !1, this.showDropdowns = !1, this.minYear = e().subtract(100, "year").format("YYYY"), this.maxYear = e().add(100, "year").format("YYYY"), this.showWeekNumbers = !1, this.showISOWeekNumbers = !1, this.showCustomRangeLabel = !0, this.timePicker = !1, this.timePicker24Hour = !1, this.timePickerIncrement = 1, this.timePickerSeconds = !1, this.linkedCalendars = !0, this.autoUpdateInput = !0, this.alwaysShowCalendars = !1, this.ranges = {}, this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"), this.drops = "down", this.element.hasClass("dropup") && (this.drops = "up"), this.buttonClasses = "btn btn-sm", this.applyButtonClasses = "btn-primary", this.cancelButtonClasses = "btn-default", this.locale = {
            direction: "ltr",
            format: e.localeData().longDateFormat("L"),
            separator: " - ",
            applyLabel: "Apply",
            cancelLabel: "Cancel",
            weekLabel: "W",
            customRangeLabel: "Custom Range",
            daysOfWeek: e.weekdaysMin(),
            monthNames: e.monthsShort(),
            firstDay: e.localeData().firstDayOfWeek()
        }, this.callback = function () {
        }, this.isShowing = !1, this.leftCalendar = {}, this.rightCalendar = {}, "object" == typeof i && null !== i || (i = {}), "string" == typeof (i = t.extend(this.element.data(), i)).template || i.template instanceof t || (i.template = '<div class="daterangepicker"><div class="ranges"></div><div class="drp-calendar left"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-calendar right"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn" type="button"></button><button class="applyBtn" disabled="disabled" type="button"></button> </div></div>'), this.parentEl = i.parentEl && t(i.parentEl).length ? t(i.parentEl) : t(this.parentEl), this.container = t(i.template).appendTo(this.parentEl), "object" == typeof i.locale && ("string" == typeof i.locale.direction && (this.locale.direction = i.locale.direction), "string" == typeof i.locale.format && (this.locale.format = i.locale.format), "string" == typeof i.locale.separator && (this.locale.separator = i.locale.separator), "object" == typeof i.locale.daysOfWeek && (this.locale.daysOfWeek = i.locale.daysOfWeek.slice()), "object" == typeof i.locale.monthNames && (this.locale.monthNames = i.locale.monthNames.slice()), "number" == typeof i.locale.firstDay && (this.locale.firstDay = i.locale.firstDay), "string" == typeof i.locale.applyLabel && (this.locale.applyLabel = i.locale.applyLabel), "string" == typeof i.locale.cancelLabel && (this.locale.cancelLabel = i.locale.cancelLabel), "string" == typeof i.locale.weekLabel && (this.locale.weekLabel = i.locale.weekLabel), "string" == typeof i.locale.customRangeLabel)) {
            (f = document.createElement("textarea")).innerHTML = i.locale.customRangeLabel;
            var o = f.value;
            this.locale.customRangeLabel = o
        }
        if (this.container.addClass(this.locale.direction), "string" == typeof i.startDate && (this.startDate = e(i.startDate, this.locale.format)), "string" == typeof i.endDate && (this.endDate = e(i.endDate, this.locale.format)), "string" == typeof i.minDate && (this.minDate = e(i.minDate, this.locale.format)), "string" == typeof i.maxDate && (this.maxDate = e(i.maxDate, this.locale.format)), "object" == typeof i.startDate && (this.startDate = e(i.startDate)), "object" == typeof i.endDate && (this.endDate = e(i.endDate)), "object" == typeof i.minDate && (this.minDate = e(i.minDate)), "object" == typeof i.maxDate && (this.maxDate = e(i.maxDate)), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), "string" == typeof i.applyButtonClasses && (this.applyButtonClasses = i.applyButtonClasses), "string" == typeof i.applyClass && (this.applyButtonClasses = i.applyClass), "string" == typeof i.cancelButtonClasses && (this.cancelButtonClasses = i.cancelButtonClasses), "string" == typeof i.cancelClass && (this.cancelButtonClasses = i.cancelClass), "object" == typeof i.maxSpan && (this.maxSpan = i.maxSpan), "object" == typeof i.dateLimit && (this.maxSpan = i.dateLimit), "string" == typeof i.opens && (this.opens = i.opens), "string" == typeof i.drops && (this.drops = i.drops), "boolean" == typeof i.showWeekNumbers && (this.showWeekNumbers = i.showWeekNumbers), "boolean" == typeof i.showISOWeekNumbers && (this.showISOWeekNumbers = i.showISOWeekNumbers), "string" == typeof i.buttonClasses && (this.buttonClasses = i.buttonClasses), "object" == typeof i.buttonClasses && (this.buttonClasses = i.buttonClasses.join(" ")), "boolean" == typeof i.showDropdowns && (this.showDropdowns = i.showDropdowns), "number" == typeof i.minYear && (this.minYear = i.minYear), "number" == typeof i.maxYear && (this.maxYear = i.maxYear), "boolean" == typeof i.showCustomRangeLabel && (this.showCustomRangeLabel = i.showCustomRangeLabel), "boolean" == typeof i.singleDatePicker && (this.singleDatePicker = i.singleDatePicker, this.singleDatePicker && (this.endDate = this.startDate.clone())), "boolean" == typeof i.timePicker && (this.timePicker = i.timePicker), "boolean" == typeof i.timePickerSeconds && (this.timePickerSeconds = i.timePickerSeconds), "number" == typeof i.timePickerIncrement && (this.timePickerIncrement = i.timePickerIncrement), "boolean" == typeof i.timePicker24Hour && (this.timePicker24Hour = i.timePicker24Hour), "boolean" == typeof i.autoApply && (this.autoApply = i.autoApply), "boolean" == typeof i.autoUpdateInput && (this.autoUpdateInput = i.autoUpdateInput), "boolean" == typeof i.linkedCalendars && (this.linkedCalendars = i.linkedCalendars), "function" == typeof i.isInvalidDate && (this.isInvalidDate = i.isInvalidDate), "function" == typeof i.isCustomDate && (this.isCustomDate = i.isCustomDate), "boolean" == typeof i.alwaysShowCalendars && (this.alwaysShowCalendars = i.alwaysShowCalendars), 0 != this.locale.firstDay) for (var s = this.locale.firstDay; s > 0;) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), s--;
        var a, l, c;
        if (void 0 === i.startDate && void 0 === i.endDate && t(this.element).is(":text")) {
            var u = t(this.element).val(), h = u.split(this.locale.separator);
            a = l = null, 2 == h.length ? (a = e(h[0], this.locale.format), l = e(h[1], this.locale.format)) : this.singleDatePicker && "" !== u && (a = e(u, this.locale.format), l = e(u, this.locale.format)), null !== a && null !== l && (this.setStartDate(a), this.setEndDate(l))
        }
        if ("object" == typeof i.ranges) {
            for (c in i.ranges) {
                a = "string" == typeof i.ranges[c][0] ? e(i.ranges[c][0], this.locale.format) : e(i.ranges[c][0]), l = "string" == typeof i.ranges[c][1] ? e(i.ranges[c][1], this.locale.format) : e(i.ranges[c][1]), this.minDate && a.isBefore(this.minDate) && (a = this.minDate.clone());
                var d = this.maxDate;
                if (this.maxSpan && d && a.clone().add(this.maxSpan).isAfter(d) && (d = a.clone().add(this.maxSpan)), d && l.isAfter(d) && (l = d.clone()), !(this.minDate && l.isBefore(this.minDate, this.timepicker ? "minute" : "day") || d && a.isAfter(d, this.timepicker ? "minute" : "day"))) {
                    var f;
                    (f = document.createElement("textarea")).innerHTML = c;
                    o = f.value;
                    this.ranges[o] = [a, l]
                }
            }
            var p = "<ul>";
            for (c in this.ranges) p += '<li data-range-key="' + c + '">' + c + "</li>";
            this.showCustomRangeLabel && (p += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + "</li>"), p += "</ul>", this.container.find(".ranges").prepend(p)
        }
        "function" == typeof r && (this.callback = r), this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.endOf("day"), this.container.find(".calendar-time").hide()), this.timePicker && this.autoApply && (this.autoApply = !1), this.autoApply && this.container.addClass("auto-apply"), "object" == typeof i.ranges && this.container.addClass("show-ranges"), this.singleDatePicker && (this.container.addClass("single"), this.container.find(".drp-calendar.left").addClass("single"), this.container.find(".drp-calendar.left").show(), this.container.find(".drp-calendar.right").hide(), this.timePicker || this.container.addClass("auto-apply")), (void 0 === i.ranges && !this.singleDatePicker || this.alwaysShowCalendars) && this.container.addClass("show-calendar"), this.container.addClass("opens" + this.opens), this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses), this.applyButtonClasses.length && this.container.find(".applyBtn").addClass(this.applyButtonClasses), this.cancelButtonClasses.length && this.container.find(".cancelBtn").addClass(this.cancelButtonClasses), this.container.find(".applyBtn").html(this.locale.applyLabel), this.container.find(".cancelBtn").html(this.locale.cancelLabel), this.container.find(".drp-calendar").on("click.daterangepicker", ".prev", t.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", t.proxy(this.clickNext, this)).on("mousedown.daterangepicker", "td.available", t.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", t.proxy(this.hoverDate, this)).on("change.daterangepicker", "select.yearselect", t.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.monthselect", t.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", t.proxy(this.timeChanged, this)), this.container.find(".ranges").on("click.daterangepicker", "li", t.proxy(this.clickRange, this)), this.container.find(".drp-buttons").on("click.daterangepicker", "button.applyBtn", t.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", t.proxy(this.clickCancel, this)), this.element.is("input") || this.element.is("button") ? this.element.on({
            "click.daterangepicker": t.proxy(this.show, this),
            "focus.daterangepicker": t.proxy(this.show, this),
            "keyup.daterangepicker": t.proxy(this.elementChanged, this),
            "keydown.daterangepicker": t.proxy(this.keydown, this)
        }) : (this.element.on("click.daterangepicker", t.proxy(this.toggle, this)), this.element.on("keydown.daterangepicker", t.proxy(this.toggle, this))), this.updateElement()
    };
    return n.prototype = {
        constructor: n, setStartDate: function (t) {
            "string" == typeof t && (this.startDate = e(t, this.locale.format)), "object" == typeof t && (this.startDate = e(t)), this.timePicker || (this.startDate = this.startDate.startOf("day")), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.maxDate && this.startDate.isAfter(this.maxDate) && (this.startDate = this.maxDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.isShowing || this.updateElement(), this.updateMonthsInView()
        }, setEndDate: function (t) {
            "string" == typeof t && (this.endDate = e(t, this.locale.format)), "object" == typeof t && (this.endDate = e(t)), this.timePicker || (this.endDate = this.endDate.add(1, "d").startOf("day").subtract(1, "second")), this.timePicker && this.timePickerIncrement && this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.endDate.isBefore(this.startDate) && (this.endDate = this.startDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate) && (this.endDate = this.startDate.clone().add(this.maxSpan)), this.previousRightTime = this.endDate.clone(), this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.isShowing || this.updateElement(), this.updateMonthsInView()
        }, isInvalidDate: function () {
            return !1
        }, isCustomDate: function () {
            return !1
        }, updateView: function () {
            this.timePicker && (this.renderTimePicker("left"), this.renderTimePicker("right"), this.endDate ? this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled") : this.container.find(".right .calendar-time select").attr("disabled", "disabled").addClass("disabled")), this.endDate && this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.updateMonthsInView(), this.updateCalendars(), this.updateFormInputs()
        }, updateMonthsInView: function () {
            if (this.endDate) {
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) && (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM"))) return;
                this.leftCalendar.month = this.startDate.clone().date(2), this.linkedCalendars || this.endDate.month() == this.startDate.month() && this.endDate.year() == this.startDate.year() ? this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month") : this.rightCalendar.month = this.endDate.clone().date(2)
            } else this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && (this.leftCalendar.month = this.startDate.clone().date(2), this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month"));
            this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate && (this.rightCalendar.month = this.maxDate.clone().date(2), this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, "month"))
        }, updateCalendars: function () {
            if (this.timePicker) {
                var e, t, n, i;
                if (this.endDate) {
                    if (e = parseInt(this.container.find(".left .hourselect").val(), 10), t = parseInt(this.container.find(".left .minuteselect").val(), 10), n = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, !this.timePicker24Hour) "PM" === (i = this.container.find(".left .ampmselect").val()) && e < 12 && (e += 12), "AM" === i && 12 === e && (e = 0)
                } else if (e = parseInt(this.container.find(".right .hourselect").val(), 10), t = parseInt(this.container.find(".right .minuteselect").val(), 10), n = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, !this.timePicker24Hour) "PM" === (i = this.container.find(".right .ampmselect").val()) && e < 12 && (e += 12), "AM" === i && 12 === e && (e = 0);
                this.leftCalendar.month.hour(e).minute(t).second(n), this.rightCalendar.month.hour(e).minute(t).second(n)
            }
            this.renderCalendar("left"), this.renderCalendar("right"), this.container.find(".ranges li").removeClass("active"), null != this.endDate && this.calculateChosenLabel()
        }, renderCalendar: function (n) {
            var i, r = (i = "left" == n ? this.leftCalendar : this.rightCalendar).month.month(), o = i.month.year(),
                s = i.month.hour(), a = i.month.minute(), l = i.month.second(), c = e([o, r]).daysInMonth(),
                u = e([o, r, 1]), h = e([o, r, c]), d = e(u).subtract(1, "month").month(),
                f = e(u).subtract(1, "month").year(), p = e([f, d]).daysInMonth(), m = u.day();
            (i = []).firstDay = u, i.lastDay = h;
            for (var g = 0; g < 6; g++) i[g] = [];
            var v = p - m + this.locale.firstDay + 1;
            v > p && (v -= 7), m == this.locale.firstDay && (v = p - 6);
            for (var y = e([f, d, v, 12, a, l]), _ = (g = 0, 0), b = 0; g < 42; g++, _++, y = e(y).add(24, "hour")) g > 0 && _ % 7 == 0 && (_ = 0, b++), i[b][_] = y.clone().hour(s).minute(a).second(l), y.hour(12), this.minDate && i[b][_].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && i[b][_].isBefore(this.minDate) && "left" == n && (i[b][_] = this.minDate.clone()), this.maxDate && i[b][_].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && i[b][_].isAfter(this.maxDate) && "right" == n && (i[b][_] = this.maxDate.clone());
            "left" == n ? this.leftCalendar.calendar = i : this.rightCalendar.calendar = i;
            var w = "left" == n ? this.minDate : this.startDate, D = this.maxDate,
                C = ("left" == n ? this.startDate : this.endDate, this.locale.direction, '<table class="table-condensed">');
            C += "<thead>", C += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (C += "<th></th>"), w && !w.isBefore(i.firstDay) || this.linkedCalendars && "left" != n ? C += "<th></th>" : C += '<th class="prev available"><span></span></th>';
            var x = this.locale.monthNames[i[1][1].month()] + i[1][1].format(" YYYY");
            if (this.showDropdowns) {
                for (var k = i[1][1].month(), S = i[1][1].year(), T = D && D.year() || this.maxYear, E = w && w.year() || this.minYear, A = S == E, O = S == T, M = '<select class="monthselect">', I = 0; I < 12; I++) (!A || I >= w.month()) && (!O || I <= D.month()) ? M += "<option value='" + I + "'" + (I === k ? " selected='selected'" : "") + ">" + this.locale.monthNames[I] + "</option>" : M += "<option value='" + I + "'" + (I === k ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[I] + "</option>";
                M += "</select>";
                for (var N = '<select class="yearselect">', P = E; P <= T; P++) N += '<option value="' + P + '"' + (P === S ? ' selected="selected"' : "") + ">" + P + "</option>";
                x = M + (N += "</select>")
            }
            if (C += '<th colspan="5" class="month">' + x + "</th>", D && !D.isAfter(i.lastDay) || this.linkedCalendars && "right" != n && !this.singleDatePicker ? C += "<th></th>" : C += '<th class="next available"><span></span></th>', C += "</tr>", C += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (C += '<th class="week">' + this.locale.weekLabel + "</th>"), t.each(this.locale.daysOfWeek, function (e, t) {
                C += "<th>" + t + "</th>"
            }), C += "</tr>", C += "</thead>", C += "<tbody>", null == this.endDate && this.maxSpan) {
                var j = this.startDate.clone().add(this.maxSpan).endOf("day");
                D && !j.isBefore(D) || (D = j)
            }
            for (b = 0; b < 6; b++) {
                C += "<tr>", this.showWeekNumbers ? C += '<td class="week">' + i[b][0].week() + "</td>" : this.showISOWeekNumbers && (C += '<td class="week">' + i[b][0].isoWeek() + "</td>");
                for (_ = 0; _ < 7; _++) {
                    var L = [];
                    i[b][_].isSame(new Date, "day") && L.push("today"), i[b][_].isoWeekday() > 5 && L.push("weekend"), i[b][_].month() != i[1][1].month() && L.push("off"), this.minDate && i[b][_].isBefore(this.minDate, "day") && L.push("off", "disabled"), D && i[b][_].isAfter(D, "day") && L.push("off", "disabled"), this.isInvalidDate(i[b][_]) && L.push("off", "disabled"), i[b][_].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && L.push("active", "start-date"), null != this.endDate && i[b][_].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && L.push("active", "end-date"), null != this.endDate && i[b][_] > this.startDate && i[b][_] < this.endDate && L.push("in-range");
                    var Y = this.isCustomDate(i[b][_]);
                    !1 !== Y && ("string" == typeof Y ? L.push(Y) : Array.prototype.push.apply(L, Y));
                    var H = "", $ = !1;
                    for (g = 0; g < L.length; g++) H += L[g] + " ", "disabled" == L[g] && ($ = !0);
                    $ || (H += "available"), C += '<td class="' + H.replace(/^\s+|\s+$/g, "") + '" data-title="r' + b + "c" + _ + '">' + i[b][_].date() + "</td>"
                }
                C += "</tr>"
            }
            C += "</tbody>", C += "</table>", this.container.find(".drp-calendar." + n + " .calendar-table").html(C)
        }, renderTimePicker: function (e) {
            if ("right" != e || this.endDate) {
                var t, n, i, r = this.maxDate;
                if (!this.maxSpan || this.maxDate && !this.startDate.clone().add(this.maxSpan).isAfter(this.maxDate) || (r = this.startDate.clone().add(this.maxSpan)), "left" == e) n = this.startDate.clone(), i = this.minDate; else if ("right" == e) {
                    n = this.endDate.clone(), i = this.startDate;
                    var o = this.container.find(".drp-calendar.right .calendar-time");
                    if ("" != o.html() && (n.hour(n.hour() || o.find(".hourselect option:selected").val()), n.minute(n.minute() || o.find(".minuteselect option:selected").val()), n.second(n.second() || o.find(".secondselect option:selected").val()), !this.timePicker24Hour)) {
                        var s = o.find(".ampmselect option:selected").val();
                        "PM" === s && n.hour() < 12 && n.hour(n.hour() + 12), "AM" === s && 12 === n.hour() && n.hour(0)
                    }
                    n.isBefore(this.startDate) && (n = this.startDate.clone()), r && n.isAfter(r) && (n = r.clone())
                }
                t = '<select class="hourselect">';
                for (var a = this.timePicker24Hour ? 0 : 1, l = this.timePicker24Hour ? 23 : 12, c = a; c <= l; c++) {
                    var u = c;
                    this.timePicker24Hour || (u = n.hour() >= 12 ? 12 == c ? 12 : c + 12 : 12 == c ? 0 : c);
                    var h = n.clone().hour(u), d = !1;
                    i && h.minute(59).isBefore(i) && (d = !0), r && h.minute(0).isAfter(r) && (d = !0), u != n.hour() || d ? t += d ? '<option value="' + c + '" disabled="disabled" class="disabled">' + c + "</option>" : '<option value="' + c + '">' + c + "</option>" : t += '<option value="' + c + '" selected="selected">' + c + "</option>"
                }
                t += "</select> ", t += ': <select class="minuteselect">';
                for (c = 0; c < 60; c += this.timePickerIncrement) {
                    var f = c < 10 ? "0" + c : c;
                    h = n.clone().minute(c), d = !1;
                    i && h.second(59).isBefore(i) && (d = !0), r && h.second(0).isAfter(r) && (d = !0), n.minute() != c || d ? t += d ? '<option value="' + c + '" disabled="disabled" class="disabled">' + f + "</option>" : '<option value="' + c + '">' + f + "</option>" : t += '<option value="' + c + '" selected="selected">' + f + "</option>"
                }
                if (t += "</select> ", this.timePickerSeconds) {
                    t += ': <select class="secondselect">';
                    for (c = 0; c < 60; c++) {
                        f = c < 10 ? "0" + c : c, h = n.clone().second(c), d = !1;
                        i && h.isBefore(i) && (d = !0), r && h.isAfter(r) && (d = !0), n.second() != c || d ? t += d ? '<option value="' + c + '" disabled="disabled" class="disabled">' + f + "</option>" : '<option value="' + c + '">' + f + "</option>" : t += '<option value="' + c + '" selected="selected">' + f + "</option>"
                    }
                    t += "</select> "
                }
                if (!this.timePicker24Hour) {
                    t += '<select class="ampmselect">';
                    var p = "", m = "";
                    i && n.clone().hour(12).minute(0).second(0).isBefore(i) && (p = ' disabled="disabled" class="disabled"'), r && n.clone().hour(0).minute(0).second(0).isAfter(r) && (m = ' disabled="disabled" class="disabled"'), n.hour() >= 12 ? t += '<option value="AM"' + p + '>AM</option><option value="PM" selected="selected"' + m + ">PM</option>" : t += '<option value="AM" selected="selected"' + p + '>AM</option><option value="PM"' + m + ">PM</option>", t += "</select>"
                }
                this.container.find(".drp-calendar." + e + " .calendar-time").html(t)
            }
        }, updateFormInputs: function () {
            this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)) ? this.container.find("button.applyBtn").removeAttr("disabled") : this.container.find("button.applyBtn").attr("disabled", "disabled")
        }, move: function () {
            var e, n = {top: 0, left: 0}, i = t(window).width();
            this.parentEl.is("body") || (n = {
                top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                left: this.parentEl.offset().left - this.parentEl.scrollLeft()
            }, i = this.parentEl[0].clientWidth + this.parentEl.offset().left), e = "up" == this.drops ? this.element.offset().top - this.container.outerHeight() - n.top : this.element.offset().top + this.element.outerHeight() - n.top, this.container["up" == this.drops ? "addClass" : "removeClass"]("drop-up"), "left" == this.opens ? (this.container.css({
                top: e,
                right: i - this.element.offset().left - this.element.outerWidth(),
                left: "auto"
            }), this.container.offset().left < 0 && this.container.css({
                right: "auto",
                left: 9
            })) : "center" == this.opens ? (this.container.css({
                top: e,
                left: this.element.offset().left - n.left + this.element.outerWidth() / 2 - this.container.outerWidth() / 2,
                right: "auto"
            }), this.container.offset().left < 0 && this.container.css({
                right: "auto",
                left: 9
            })) : (this.container.css({
                top: e,
                left: this.element.offset().left - n.left,
                right: "auto"
            }), this.container.offset().left + this.container.outerWidth() > t(window).width() && this.container.css({
                left: "auto",
                right: 0
            }))
        }, show: function (e) {
            this.isShowing || (this._outsideClickProxy = t.proxy(function (e) {
                this.outsideClick(e)
            }, this), t(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy), t(window).on("resize.daterangepicker", t.proxy(function (e) {
                this.move(e)
            }, this)), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.previousRightTime = this.endDate.clone(), this.updateView(), this.container.show(), this.move(), this.element.trigger("show.daterangepicker", this), this.isShowing = !0)
        }, hide: function (e) {
            this.isShowing && (this.endDate || (this.startDate = this.oldStartDate.clone(), this.endDate = this.oldEndDate.clone()), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel), this.updateElement(), t(document).off(".daterangepicker"), t(window).off(".daterangepicker"), this.container.hide(), this.element.trigger("hide.daterangepicker", this), this.isShowing = !1)
        }, toggle: function (e) {
            this.isShowing ? this.hide() : this.show()
        }, outsideClick: function (e) {
            var n = t(e.target);
            "focusin" == e.type || n.closest(this.element).length || n.closest(this.container).length || n.closest(".calendar-table").length || (this.hide(), this.element.trigger("outsideClick.daterangepicker", this))
        }, showCalendars: function () {
            this.container.addClass("show-calendar"), this.move(), this.element.trigger("showCalendar.daterangepicker", this)
        }, hideCalendars: function () {
            this.container.removeClass("show-calendar"), this.element.trigger("hideCalendar.daterangepicker", this)
        }, clickRange: function (e) {
            var t = e.target.getAttribute("data-range-key");
            if (this.chosenLabel = t, t == this.locale.customRangeLabel) this.showCalendars(); else {
                var n = this.ranges[t];
                this.startDate = n[0], this.endDate = n[1], this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")), this.alwaysShowCalendars || this.hideCalendars(), this.clickApply()
            }
        }, clickPrev: function (e) {
            t(e.target).parents(".drp-calendar").hasClass("left") ? (this.leftCalendar.month.subtract(1, "month"), this.linkedCalendars && this.rightCalendar.month.subtract(1, "month")) : this.rightCalendar.month.subtract(1, "month"), this.updateCalendars()
        }, clickNext: function (e) {
            t(e.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.month.add(1, "month") : (this.rightCalendar.month.add(1, "month"), this.linkedCalendars && this.leftCalendar.month.add(1, "month")), this.updateCalendars()
        }, hoverDate: function (e) {
            if (t(e.target).hasClass("available")) {
                var n = t(e.target).attr("data-title"), i = n.substr(1, 1), r = n.substr(3, 1),
                    o = t(e.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.calendar[i][r] : this.rightCalendar.calendar[i][r],
                    s = this.leftCalendar, a = this.rightCalendar, l = this.startDate;
                this.endDate || this.container.find(".drp-calendar tbody td").each(function (e, n) {
                    if (!t(n).hasClass("week")) {
                        var i = t(n).attr("data-title"), r = i.substr(1, 1), c = i.substr(3, 1),
                            u = t(n).parents(".drp-calendar").hasClass("left") ? s.calendar[r][c] : a.calendar[r][c];
                        u.isAfter(l) && u.isBefore(o) || u.isSame(o, "day") ? t(n).addClass("in-range") : t(n).removeClass("in-range")
                    }
                })
            }
        }, clickDate: function (e) {
            if (t(e.target).hasClass("available")) {
                var n = t(e.target).attr("data-title"), i = n.substr(1, 1), r = n.substr(3, 1),
                    o = t(e.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.calendar[i][r] : this.rightCalendar.calendar[i][r];
                if (this.endDate || o.isBefore(this.startDate, "day")) {
                    if (this.timePicker) {
                        var s = parseInt(this.container.find(".left .hourselect").val(), 10);
                        if (!this.timePicker24Hour) "PM" === (c = this.container.find(".left .ampmselect").val()) && s < 12 && (s += 12), "AM" === c && 12 === s && (s = 0);
                        var a = parseInt(this.container.find(".left .minuteselect").val(), 10),
                            l = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0;
                        o = o.clone().hour(s).minute(a).second(l)
                    }
                    this.endDate = null, this.setStartDate(o.clone())
                } else if (!this.endDate && o.isBefore(this.startDate)) this.setEndDate(this.startDate.clone()); else {
                    if (this.timePicker) {
                        var c;
                        s = parseInt(this.container.find(".right .hourselect").val(), 10);
                        if (!this.timePicker24Hour) "PM" === (c = this.container.find(".right .ampmselect").val()) && s < 12 && (s += 12), "AM" === c && 12 === s && (s = 0);
                        a = parseInt(this.container.find(".right .minuteselect").val(), 10), l = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0;
                        o = o.clone().hour(s).minute(a).second(l)
                    }
                    this.setEndDate(o.clone()), this.autoApply && (this.calculateChosenLabel(), this.clickApply())
                }
                this.singleDatePicker && (this.setEndDate(this.startDate), this.timePicker || this.clickApply()), this.updateView(), e.stopPropagation()
            }
        }, calculateChosenLabel: function () {
            var e = !0, t = 0;
            for (var n in this.ranges) {
                if (this.timePicker) {
                    var i = this.timePickerSeconds ? "YYYY-MM-DD hh:mm:ss" : "YYYY-MM-DD hh:mm";
                    if (this.startDate.format(i) == this.ranges[n][0].format(i) && this.endDate.format(i) == this.ranges[n][1].format(i)) {
                        e = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + t + ")").addClass("active").attr("data-range-key");
                        break
                    }
                } else if (this.startDate.format("YYYY-MM-DD") == this.ranges[n][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[n][1].format("YYYY-MM-DD")) {
                    e = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + t + ")").addClass("active").attr("data-range-key");
                    break
                }
                t++
            }
            e && (this.showCustomRangeLabel ? this.chosenLabel = this.container.find(".ranges li:last").addClass("active").attr("data-range-key") : this.chosenLabel = null, this.showCalendars())
        }, clickApply: function (e) {
            this.hide(), this.element.trigger("apply.daterangepicker", this)
        }, clickCancel: function (e) {
            this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.hide(), this.element.trigger("cancel.daterangepicker", this)
        }, monthOrYearChanged: function (e) {
            var n = t(e.target).closest(".drp-calendar").hasClass("left"), i = n ? "left" : "right",
                r = this.container.find(".drp-calendar." + i), o = parseInt(r.find(".monthselect").val(), 10),
                s = r.find(".yearselect").val();
            n || (s < this.startDate.year() || s == this.startDate.year() && o < this.startDate.month()) && (o = this.startDate.month(), s = this.startDate.year()), this.minDate && (s < this.minDate.year() || s == this.minDate.year() && o < this.minDate.month()) && (o = this.minDate.month(), s = this.minDate.year()), this.maxDate && (s > this.maxDate.year() || s == this.maxDate.year() && o > this.maxDate.month()) && (o = this.maxDate.month(), s = this.maxDate.year()), n ? (this.leftCalendar.month.month(o).year(s), this.linkedCalendars && (this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month"))) : (this.rightCalendar.month.month(o).year(s), this.linkedCalendars && (this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month"))), this.updateCalendars()
        }, timeChanged: function (e) {
            var n = t(e.target).closest(".drp-calendar"), i = n.hasClass("left"),
                r = parseInt(n.find(".hourselect").val(), 10), o = parseInt(n.find(".minuteselect").val(), 10),
                s = this.timePickerSeconds ? parseInt(n.find(".secondselect").val(), 10) : 0;
            if (!this.timePicker24Hour) {
                var a = n.find(".ampmselect").val();
                "PM" === a && r < 12 && (r += 12), "AM" === a && 12 === r && (r = 0)
            }
            if (i) {
                var l = this.startDate.clone();
                l.hour(r), l.minute(o), l.second(s), this.setStartDate(l), this.singleDatePicker ? this.endDate = this.startDate.clone() : this.endDate && this.endDate.format("YYYY-MM-DD") == l.format("YYYY-MM-DD") && this.endDate.isBefore(l) && this.setEndDate(l.clone())
            } else if (this.endDate) {
                var c = this.endDate.clone();
                c.hour(r), c.minute(o), c.second(s), this.setEndDate(c)
            }
            this.updateCalendars(), this.updateFormInputs(), this.renderTimePicker("left"), this.renderTimePicker("right")
        }, elementChanged: function () {
            if (this.element.is("input") && this.element.val().length) {
                var t = this.element.val().split(this.locale.separator), n = null, i = null;
                2 === t.length && (n = e(t[0], this.locale.format), i = e(t[1], this.locale.format)), (this.singleDatePicker || null === n || null === i) && (i = n = e(this.element.val(), this.locale.format)), n.isValid() && i.isValid() && (this.setStartDate(n), this.setEndDate(i), this.updateView())
            }
        }, keydown: function (e) {
            9 !== e.keyCode && 13 !== e.keyCode || this.hide(), 27 === e.keyCode && (e.preventDefault(), e.stopPropagation(), this.hide())
        }, updateElement: function () {
            if (this.element.is("input") && this.autoUpdateInput) {
                var e = this.startDate.format(this.locale.format);
                this.singleDatePicker || (e += this.locale.separator + this.endDate.format(this.locale.format)), e !== this.element.val() && this.element.val(e).trigger("change")
            }
        }, remove: function () {
            this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData()
        }
    }, t.fn.daterangepicker = function (e, i) {
        var r = t.extend(!0, {}, t.fn.daterangepicker.defaultOptions, e);
        return this.each(function () {
            var e = t(this);
            e.data("daterangepicker") && e.data("daterangepicker").remove(), e.data("daterangepicker", new n(e, r, i))
        }), this
    }, n
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : e.metisMenu = t(e.jQuery)
}(this, function (e) {
    "use strict";

    function t(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}, i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function (t) {
                var i, r, o;
                i = e, r = t, o = n[t], r in i ? Object.defineProperty(i, r, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[r] = o
            })
        }
        return e
    }

    var n, i, r, o, s, a, l, c, u = function (e) {
        var t = "transitionend", n = {
            TRANSITION_END: "mmTransitionEnd", triggerTransitionEnd: function (n) {
                e(n).trigger(t)
            }, supportsTransitionEnd: function () {
                return Boolean(t)
            }
        };

        function i(t) {
            var i = this, r = !1;
            return e(this).one(n.TRANSITION_END, function () {
                r = !0
            }), setTimeout(function () {
                r || n.triggerTransitionEnd(i)
            }, t), this
        }

        return e.fn.mmEmulateTransitionEnd = i, e.event.special[n.TRANSITION_END] = {
            bindType: t,
            delegateType: t,
            handle: function (t) {
                if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        }, n
    }(e = e && e.hasOwnProperty("default") ? e.default : e);
    return i = "metisMenu", o = "." + (r = "metisMenu"), s = (n = e).fn[i], a = {
        toggle: !0,
        preventDefault: !0,
        activeClass: "active",
        collapseClass: "collapse",
        collapseInClass: "in",
        collapsingClass: "collapsing",
        triggerElement: "a",
        parentTrigger: "li",
        subMenu: "ul"
    }, l = {
        SHOW: "show" + o,
        SHOWN: "shown" + o,
        HIDE: "hide" + o,
        HIDDEN: "hidden" + o,
        CLICK_DATA_API: "click" + o + ".data-api"
    }, c = function () {
        function e(e, n) {
            this.element = e, this.config = t({}, a, n), this.transitioning = null, this.init()
        }

        var i = e.prototype;
        return i.init = function () {
            var e = this, t = this.config;
            n(this.element).find(t.parentTrigger + "." + t.activeClass).has(t.subMenu).children(t.subMenu).attr("aria-expanded", !0).addClass(t.collapseClass + " " + t.collapseInClass), n(this.element).find(t.parentTrigger).not("." + t.activeClass).has(t.subMenu).children(t.subMenu).attr("aria-expanded", !1).addClass(t.collapseClass), n(this.element).find(t.parentTrigger).has(t.subMenu).children(t.triggerElement).on(l.CLICK_DATA_API, function (i) {
                var r = n(this), o = r.parent(t.parentTrigger),
                    s = o.siblings(t.parentTrigger).children(t.triggerElement), a = o.children(t.subMenu);
                t.preventDefault && i.preventDefault(), "true" !== r.attr("aria-disabled") && (o.hasClass(t.activeClass) ? (r.attr("aria-expanded", !1), e.hide(a)) : (e.show(a), r.attr("aria-expanded", !0), t.toggle && s.attr("aria-expanded", !1)), t.onTransitionStart && t.onTransitionStart(i))
            })
        }, i.show = function (e) {
            var t = this;
            if (!this.transitioning && !n(e).hasClass(this.config.collapsingClass)) {
                var i = n(e), r = n.Event(l.SHOW);
                if (i.trigger(r), !r.isDefaultPrevented()) {
                    i.parent(this.config.parentTrigger).addClass(this.config.activeClass), this.config.toggle && this.hide(i.parent(this.config.parentTrigger).siblings().children(this.config.subMenu + "." + this.config.collapseInClass).attr("aria-expanded", !1)), i.removeClass(this.config.collapseClass).addClass(this.config.collapsingClass).height(0), this.setTransitioning(!0);
                    var o = function () {
                        t.config && t.element && (i.removeClass(t.config.collapsingClass).addClass(t.config.collapseClass + " " + t.config.collapseInClass).height("").attr("aria-expanded", !0), t.setTransitioning(!1), i.trigger(l.SHOWN))
                    };
                    u.supportsTransitionEnd() ? i.height(e[0].scrollHeight).one(u.TRANSITION_END, o).mmEmulateTransitionEnd(350) : o()
                }
            }
        }, i.hide = function (e) {
            var t = this;
            if (!this.transitioning && n(e).hasClass(this.config.collapseInClass)) {
                var i = n(e), r = n.Event(l.HIDE);
                if (i.trigger(r), !r.isDefaultPrevented()) {
                    i.parent(this.config.parentTrigger).removeClass(this.config.activeClass), i.height(i.height())[0].offsetHeight, i.addClass(this.config.collapsingClass).removeClass(this.config.collapseClass).removeClass(this.config.collapseInClass), this.setTransitioning(!0);
                    var o = function () {
                        t.config && t.element && (t.transitioning && t.config.onTransitionEnd && t.config.onTransitionEnd(), t.setTransitioning(!1), i.trigger(l.HIDDEN), i.removeClass(t.config.collapsingClass).addClass(t.config.collapseClass).attr("aria-expanded", !1))
                    };
                    u.supportsTransitionEnd() ? 0 === i.height() || "none" === i.css("display") ? o() : i.height(0).one(u.TRANSITION_END, o).mmEmulateTransitionEnd(350) : o()
                }
            }
        }, i.setTransitioning = function (e) {
            this.transitioning = e
        }, i.dispose = function () {
            n.removeData(this.element, r), n(this.element).find(this.config.parentTrigger).has(this.config.subMenu).children(this.config.triggerElement).off("click"), this.transitioning = null, this.config = null, this.element = null
        }, e.jQueryInterface = function (i) {
            return this.each(function () {
                var o = n(this), s = o.data(r), l = t({}, a, o.data(), "object" == typeof i && i ? i : {});
                if (!s && /dispose/.test(i) && this.dispose(), s || (s = new e(this, l), o.data(r, s)), "string" == typeof i) {
                    if (void 0 === s[i]) throw new Error('No method named "' + i + '"');
                    s[i]()
                }
            })
        }, e
    }(), n.fn[i] = c.jQueryInterface, n.fn[i].Constructor = c, n.fn[i].noConflict = function () {
        return n.fn[i] = s, c.jQueryInterface
    }, c
}), "function" != typeof Object.create && (Object.create = function (e) {
    function t() {
    }

    return t.prototype = e, new t
}), function (e, t, n, i) {
    "use strict";
    var r = {
        _positionClasses: ["bottom-left", "bottom-right", "top-right", "top-left", "bottom-center", "top-center", "mid-center"],
        _defaultIcons: ["success", "error", "info", "warning"],
        init: function (t, n) {
            this.prepareOptions(t, e.toast.options), this.process()
        },
        prepareOptions: function (t, n) {
            var i = {};
            "string" == typeof t || t instanceof Array ? i.text = t : i = t, this.options = e.extend({}, n, i)
        },
        process: function () {
            this.setup(), this.addToDom(), this.position(), this.bindToast(), this.animate()
        },
        setup: function () {
            var t = "";
            if (this._toastEl = this._toastEl || e("<div></div>", {class: "jq-toast-single"}), t += '<span class="jq-toast-loader"></span>', this.options.allowToastClose && (t += '<span class="close-jq-toast-single">&times;</span>'), this.options.text instanceof Array) {
                this.options.heading && (t += '<h2 class="jq-toast-heading">' + this.options.heading + "</h2>"), t += '<ul class="jq-toast-ul">';
                for (var n = 0; n < this.options.text.length; n++) t += '<li class="jq-toast-li" id="jq-toast-item-' + n + '">' + this.options.text[n] + "</li>";
                t += "</ul>"
            } else this.options.heading && (t += '<h2 class="jq-toast-heading">' + this.options.heading + "</h2>"), t += this.options.text;
            this._toastEl.html(t), !1 !== this.options.bgColor && this._toastEl.css("background-color", this.options.bgColor), !1 !== this.options.textColor && this._toastEl.css("color", this.options.textColor), this.options.textAlign && this._toastEl.css("text-align", this.options.textAlign), !1 !== this.options.icon && (this._toastEl.addClass("jq-has-icon"), -1 !== e.inArray(this.options.icon, this._defaultIcons) && this._toastEl.addClass("jq-icon-" + this.options.icon)), !1 !== this.options.class && this._toastEl.addClass(this.options.class)
        },
        position: function () {
            "string" == typeof this.options.position && -1 !== e.inArray(this.options.position, this._positionClasses) ? "bottom-center" === this.options.position ? this._container.css({
                left: e(t).outerWidth() / 2 - this._container.outerWidth() / 2,
                bottom: 20
            }) : "top-center" === this.options.position ? this._container.css({
                left: e(t).outerWidth() / 2 - this._container.outerWidth() / 2,
                top: 20
            }) : "mid-center" === this.options.position ? this._container.css({
                left: e(t).outerWidth() / 2 - this._container.outerWidth() / 2,
                top: e(t).outerHeight() / 2 - this._container.outerHeight() / 2
            }) : this._container.addClass(this.options.position) : "object" == typeof this.options.position ? this._container.css({
                top: this.options.position.top ? this.options.position.top : "auto",
                bottom: this.options.position.bottom ? this.options.position.bottom : "auto",
                left: this.options.position.left ? this.options.position.left : "auto",
                right: this.options.position.right ? this.options.position.right : "auto"
            }) : this._container.addClass("bottom-left")
        },
        bindToast: function () {
            var e = this;
            this._toastEl.on("afterShown", function () {
                e.processLoader()
            }), this._toastEl.find(".close-jq-toast-single").on("click", function (t) {
                t.preventDefault(), "fade" === e.options.showHideTransition ? (e._toastEl.trigger("beforeHide"), e._toastEl.fadeOut(function () {
                    e._toastEl.trigger("afterHidden")
                })) : "slide" === e.options.showHideTransition ? (e._toastEl.trigger("beforeHide"), e._toastEl.slideUp(function () {
                    e._toastEl.trigger("afterHidden")
                })) : (e._toastEl.trigger("beforeHide"), e._toastEl.hide(function () {
                    e._toastEl.trigger("afterHidden")
                }))
            }), "function" == typeof this.options.beforeShow && this._toastEl.on("beforeShow", function () {
                e.options.beforeShow()
            }), "function" == typeof this.options.afterShown && this._toastEl.on("afterShown", function () {
                e.options.afterShown()
            }), "function" == typeof this.options.beforeHide && this._toastEl.on("beforeHide", function () {
                e.options.beforeHide()
            }), "function" == typeof this.options.afterHidden && this._toastEl.on("afterHidden", function () {
                e.options.afterHidden()
            })
        },
        addToDom: function () {
            var t = e(".jq-toast-wrap");
            if (0 === t.length ? (t = e("<div></div>", {class: "jq-toast-wrap"}), e("body").append(t)) : (!this.options.stack || isNaN(parseInt(this.options.stack, 10))) && t.empty(), t.find(".jq-toast-single:hidden").remove(), t.append(this._toastEl), this.options.stack && !isNaN(parseInt(this.options.stack), 10)) {
                var n = t.find(".jq-toast-single").length - this.options.stack;
                n > 0 && e(".jq-toast-wrap").find(".jq-toast-single").slice(0, n).remove()
            }
            this._container = t
        },
        canAutoHide: function () {
            return !1 !== this.options.hideAfter && !isNaN(parseInt(this.options.hideAfter, 10))
        },
        processLoader: function () {
            if (!this.canAutoHide() || !1 === this.options.loader) return !1;
            var e = this._toastEl.find(".jq-toast-loader"), t = (this.options.hideAfter - 400) / 1e3 + "s",
                n = this.options.loaderBg, i = e.attr("style") || "";
            i = i.substring(0, i.indexOf("-webkit-transition")), i += "-webkit-transition: width " + t + " ease-in;                       -o-transition: width " + t + " ease-in;                       transition: width " + t + " ease-in;                       background-color: " + n + ";", e.attr("style", i).addClass("jq-toast-loaded")
        },
        animate: function () {
            var e = this;
            if (this._toastEl.hide(), this._toastEl.trigger("beforeShow"), "fade" === this.options.showHideTransition.toLowerCase() ? this._toastEl.fadeIn(function () {
                e._toastEl.trigger("afterShown")
            }) : "slide" === this.options.showHideTransition.toLowerCase() ? this._toastEl.slideDown(function () {
                e._toastEl.trigger("afterShown")
            }) : this._toastEl.show(function () {
                e._toastEl.trigger("afterShown")
            }), this.canAutoHide()) {
                e = this;
                t.setTimeout(function () {
                    "fade" === e.options.showHideTransition.toLowerCase() ? (e._toastEl.trigger("beforeHide"), e._toastEl.fadeOut(function () {
                        e._toastEl.trigger("afterHidden")
                    })) : "slide" === e.options.showHideTransition.toLowerCase() ? (e._toastEl.trigger("beforeHide"), e._toastEl.slideUp(function () {
                        e._toastEl.trigger("afterHidden")
                    })) : (e._toastEl.trigger("beforeHide"), e._toastEl.hide(function () {
                        e._toastEl.trigger("afterHidden")
                    }))
                }, this.options.hideAfter)
            }
        },
        reset: function (t) {
            "all" === t ? e(".jq-toast-wrap").remove() : this._toastEl.remove()
        },
        update: function (e) {
            this.prepareOptions(e, this.options), this.setup(), this.bindToast()
        }
    };
    e.toast = function (e) {
        var t = Object.create(r);
        return t.init(e, this), {
            reset: function (e) {
                t.reset(e)
            }, update: function (e) {
                t.update(e)
            }
        }
    }, e.toast.options = {
        text: "",
        heading: "",
        showHideTransition: "fade",
        allowToastClose: !0,
        hideAfter: 3e3,
        loader: !0,
        loaderBg: "#9EC600",
        stack: 5,
        position: "bottom-left",
        bgColor: !1,
        textColor: !1,
        textAlign: "left",
        icon: !1,
        beforeShow: function () {
        },
        afterShown: function () {
        },
        beforeHide: function () {
        },
        afterHidden: function () {
        }
    }
}(jQuery, window, document), function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function (t, n) {
        return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(n), n
    } : e(jQuery)
}(function (e) {
    var t = function () {
        if (e && e.fn && e.fn.select2 && e.fn.select2.amd) var t = e.fn.select2.amd;
        var n, i, r;
        return t && t.requirejs || (t ? i = t : t = {}, function (e) {
            function t(e, t) {
                return _.call(e, t)
            }

            function o(e, t) {
                var n, i, r, o, s, a, l, c, u, h, d, f = t && t.split("/"), p = v.map, m = p && p["*"] || {};
                if (e) {
                    for (s = (e = e.split("/")).length - 1, v.nodeIdCompat && w.test(e[s]) && (e[s] = e[s].replace(w, "")), "." === e[0].charAt(0) && f && (e = f.slice(0, f.length - 1).concat(e)), u = 0; u < e.length; u++) if ("." === (d = e[u])) e.splice(u, 1), u -= 1; else if (".." === d) {
                        if (0 === u || 1 === u && ".." === e[2] || ".." === e[u - 1]) continue;
                        u > 0 && (e.splice(u - 1, 2), u -= 2)
                    }
                    e = e.join("/")
                }
                if ((f || m) && p) {
                    for (u = (n = e.split("/")).length; u > 0; u -= 1) {
                        if (i = n.slice(0, u).join("/"), f) for (h = f.length; h > 0; h -= 1) if ((r = p[f.slice(0, h).join("/")]) && (r = r[i])) {
                            o = r, a = u;
                            break
                        }
                        if (o) break;
                        !l && m && m[i] && (l = m[i], c = u)
                    }
                    !o && l && (o = l, a = c), o && (n.splice(0, a, o), e = n.join("/"))
                }
                return e
            }

            function s(t, n) {
                return function () {
                    var i = b.call(arguments, 0);
                    return "string" != typeof i[0] && 1 === i.length && i.push(null), d.apply(e, i.concat([t, n]))
                }
            }

            function a(e) {
                return function (t) {
                    m[e] = t
                }
            }

            function l(n) {
                if (t(g, n)) {
                    var i = g[n];
                    delete g[n], y[n] = !0, h.apply(e, i)
                }
                if (!t(m, n) && !t(y, n)) throw new Error("No " + n);
                return m[n]
            }

            function c(e) {
                var t, n = e ? e.indexOf("!") : -1;
                return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
            }

            function u(e) {
                return e ? c(e) : []
            }

            var h, d, f, p, m = {}, g = {}, v = {}, y = {}, _ = Object.prototype.hasOwnProperty, b = [].slice,
                w = /\.js$/;
            f = function (e, t) {
                var n, i, r = c(e), s = r[0], a = t[1];
                return e = r[1], s && (n = l(s = o(s, a))), s ? e = n && n.normalize ? n.normalize(e, (i = a, function (e) {
                    return o(e, i)
                })) : o(e, a) : (s = (r = c(e = o(e, a)))[0], e = r[1], s && (n = l(s))), {
                    f: s ? s + "!" + e : e,
                    n: e,
                    pr: s,
                    p: n
                }
            }, p = {
                require: function (e) {
                    return s(e)
                }, exports: function (e) {
                    var t = m[e];
                    return void 0 !== t ? t : m[e] = {}
                }, module: function (e) {
                    return {
                        id: e, uri: "", exports: m[e], config: (t = e, function () {
                            return v && v.config && v.config[t] || {}
                        })
                    };
                    var t
                }
            }, h = function (n, i, r, o) {
                var c, h, d, v, _, b, w, D = [], C = typeof r;
                if (b = u(o = o || n), "undefined" === C || "function" === C) {
                    for (i = !i.length && r.length ? ["require", "exports", "module"] : i, _ = 0; _ < i.length; _ += 1) if ("require" === (h = (v = f(i[_], b)).f)) D[_] = p.require(n); else if ("exports" === h) D[_] = p.exports(n), w = !0; else if ("module" === h) c = D[_] = p.module(n); else if (t(m, h) || t(g, h) || t(y, h)) D[_] = l(h); else {
                        if (!v.p) throw new Error(n + " missing " + h);
                        v.p.load(v.n, s(o, !0), a(h), {}), D[_] = m[h]
                    }
                    d = r ? r.apply(m[n], D) : void 0, n && (c && c.exports !== e && c.exports !== m[n] ? m[n] = c.exports : d === e && w || (m[n] = d))
                } else n && (m[n] = r)
            }, n = i = d = function (t, n, i, r, o) {
                if ("string" == typeof t) return p[t] ? p[t](n) : l(f(t, u(n)).f);
                if (!t.splice) {
                    if ((v = t).deps && d(v.deps, v.callback), !n) return;
                    n.splice ? (t = n, n = i, i = null) : t = e
                }
                return n = n || function () {
                }, "function" == typeof i && (i = r, r = o), r ? h(e, t, n, i) : setTimeout(function () {
                    h(e, t, n, i)
                }, 4), d
            }, d.config = function (e) {
                return d(e)
            }, n._defined = m, (r = function (e, n, i) {
                if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                n.splice || (i = n, n = []), t(m, e) || t(g, e) || (g[e] = [e, n, i])
            }).amd = {jQuery: !0}
        }(), t.requirejs = n, t.require = i, t.define = r), t.define("almond", function () {
        }), t.define("jquery", [], function () {
            var t = e || $;
            return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
        }), t.define("select2/utils", ["jquery"], function (e) {
            function t(e) {
                var t = e.prototype, n = [];
                for (var i in t) "function" == typeof t[i] && "constructor" !== i && n.push(i);
                return n
            }

            var n = {
                Extend: function (e, t) {
                    function n() {
                        this.constructor = e
                    }

                    var i = {}.hasOwnProperty;
                    for (var r in t) i.call(t, r) && (e[r] = t[r]);
                    return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                }, Decorate: function (e, n) {
                    function i() {
                        var t = Array.prototype.unshift, i = n.prototype.constructor.length,
                            r = e.prototype.constructor;
                        i > 0 && (t.call(arguments, e.prototype.constructor), r = n.prototype.constructor), r.apply(this, arguments)
                    }

                    var r = t(n), o = t(e);
                    n.displayName = e.displayName, i.prototype = new function () {
                        this.constructor = i
                    };
                    for (var s = 0; s < o.length; s++) {
                        var a = o[s];
                        i.prototype[a] = e.prototype[a]
                    }
                    for (var l = function (e) {
                        var t = function () {
                        };
                        e in i.prototype && (t = i.prototype[e]);
                        var r = n.prototype[e];
                        return function () {
                            return Array.prototype.unshift.call(arguments, t), r.apply(this, arguments)
                        }
                    }, c = 0; c < r.length; c++) {
                        var u = r[c];
                        i.prototype[u] = l(u)
                    }
                    return i
                }
            }, i = function () {
                this.listeners = {}
            };
            i.prototype.on = function (e, t) {
                this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
            }, i.prototype.trigger = function (e) {
                var t = Array.prototype.slice, n = t.call(arguments, 1);
                this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), n[0]._type = e, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
            }, i.prototype.invoke = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t)
            }, n.Observable = i, n.generateChars = function (e) {
                for (var t = "", n = 0; n < e; n++) t += Math.floor(36 * Math.random()).toString(36);
                return t
            }, n.bind = function (e, t) {
                return function () {
                    e.apply(t, arguments)
                }
            }, n._convertData = function (e) {
                for (var t in e) {
                    var n = t.split("-"), i = e;
                    if (1 !== n.length) {
                        for (var r = 0; r < n.length; r++) {
                            var o = n[r];
                            (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in i || (i[o] = {}), r == n.length - 1 && (i[o] = e[t]), i = i[o]
                        }
                        delete e[t]
                    }
                }
                return e
            }, n.hasScroll = function (t, n) {
                var i = e(n), r = n.style.overflowX, o = n.style.overflowY;
                return (r !== o || "hidden" !== o && "visible" !== o) && ("scroll" === r || "scroll" === o || i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth)
            }, n.escapeMarkup = function (e) {
                var t = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                    return t[e]
                })
            }, n.appendMany = function (t, n) {
                if ("1.7" === e.fn.jquery.substr(0, 3)) {
                    var i = e();
                    e.map(n, function (e) {
                        i = i.add(e)
                    }), n = i
                }
                t.append(n)
            }, n.__cache = {};
            var r = 0;
            return n.GetUniqueElementId = function (e) {
                var t = e.getAttribute("data-select2-id");
                return null == t && (e.id ? (t = e.id, e.setAttribute("data-select2-id", t)) : (e.setAttribute("data-select2-id", ++r), t = r.toString())), t
            }, n.StoreData = function (e, t, i) {
                var r = n.GetUniqueElementId(e);
                n.__cache[r] || (n.__cache[r] = {}), n.__cache[r][t] = i
            }, n.GetData = function (t, i) {
                var r = n.GetUniqueElementId(t);
                return i ? n.__cache[r] && null != n.__cache[r][i] ? n.__cache[r][i] : e(t).data(i) : n.__cache[r]
            }, n.RemoveData = function (e) {
                var t = n.GetUniqueElementId(e);
                null != n.__cache[t] && delete n.__cache[t]
            }, n
        }), t.define("select2/results", ["jquery", "./utils"], function (e, t) {
            function n(e, t, i) {
                this.$element = e, this.data = i, this.options = t, n.__super__.constructor.call(this)
            }

            return t.Extend(n, t.Observable), n.prototype.render = function () {
                var t = e('<ul class="select2-results__options" role="tree"></ul>');
                return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t
            }, n.prototype.clear = function () {
                this.$results.empty()
            }, n.prototype.displayMessage = function (t) {
                var n = this.options.get("escapeMarkup");
                this.clear(), this.hideLoading();
                var i = e('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                    r = this.options.get("translations").get(t.message);
                i.append(n(r(t.args))), i[0].className += " select2-results__message", this.$results.append(i)
            }, n.prototype.hideMessages = function () {
                this.$results.find(".select2-results__message").remove()
            }, n.prototype.append = function (e) {
                this.hideLoading();
                var t = [];
                if (null != e.results && 0 !== e.results.length) {
                    e.results = this.sort(e.results);
                    for (var n = 0; n < e.results.length; n++) {
                        var i = e.results[n], r = this.option(i);
                        t.push(r)
                    }
                    this.$results.append(t)
                } else 0 === this.$results.children().length && this.trigger("results:message", {message: "noResults"})
            }, n.prototype.position = function (e, t) {
                t.find(".select2-results").append(e)
            }, n.prototype.sort = function (e) {
                return this.options.get("sorter")(e)
            }, n.prototype.highlightFirstItem = function () {
                var e = this.$results.find(".select2-results__option[aria-selected]"),
                    t = e.filter("[aria-selected=true]");
                t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
            }, n.prototype.setClasses = function () {
                var n = this;
                this.data.current(function (i) {
                    var r = e.map(i, function (e) {
                        return e.id.toString()
                    });
                    n.$results.find(".select2-results__option[aria-selected]").each(function () {
                        var n = e(this), i = t.GetData(this, "data"), o = "" + i.id;
                        null != i.element && i.element.selected || null == i.element && e.inArray(o, r) > -1 ? n.attr("aria-selected", "true") : n.attr("aria-selected", "false")
                    })
                })
            }, n.prototype.showLoading = function (e) {
                this.hideLoading();
                var t = {disabled: !0, loading: !0, text: this.options.get("translations").get("searching")(e)},
                    n = this.option(t);
                n.className += " loading-results", this.$results.prepend(n)
            }, n.prototype.hideLoading = function () {
                this.$results.find(".loading-results").remove()
            }, n.prototype.option = function (n) {
                var i = document.createElement("li");
                i.className = "select2-results__option";
                var r = {role: "treeitem", "aria-selected": "false"};
                for (var o in n.disabled && (delete r["aria-selected"], r["aria-disabled"] = "true"), null == n.id && delete r["aria-selected"], null != n._resultId && (i.id = n._resultId), n.title && (i.title = n.title), n.children && (r.role = "group", r["aria-label"] = n.text, delete r["aria-selected"]), r) {
                    var s = r[o];
                    i.setAttribute(o, s)
                }
                if (n.children) {
                    var a = e(i), l = document.createElement("strong");
                    l.className = "select2-results__group", e(l), this.template(n, l);
                    for (var c = [], u = 0; u < n.children.length; u++) {
                        var h = n.children[u], d = this.option(h);
                        c.push(d)
                    }
                    var f = e("<ul></ul>", {class: "select2-results__options select2-results__options--nested"});
                    f.append(c), a.append(l), a.append(f)
                } else this.template(n, i);
                return t.StoreData(i, "data", n), i
            }, n.prototype.bind = function (n, i) {
                var r = this, o = n.id + "-results";
                this.$results.attr("id", o), n.on("results:all", function (e) {
                    r.clear(), r.append(e.data), n.isOpen() && (r.setClasses(), r.highlightFirstItem())
                }), n.on("results:append", function (e) {
                    r.append(e.data), n.isOpen() && r.setClasses()
                }), n.on("query", function (e) {
                    r.hideMessages(), r.showLoading(e)
                }), n.on("select", function () {
                    n.isOpen() && (r.setClasses(), r.highlightFirstItem())
                }), n.on("unselect", function () {
                    n.isOpen() && (r.setClasses(), r.highlightFirstItem())
                }), n.on("open", function () {
                    r.$results.attr("aria-expanded", "true"), r.$results.attr("aria-hidden", "false"), r.setClasses(), r.ensureHighlightVisible()
                }), n.on("close", function () {
                    r.$results.attr("aria-expanded", "false"), r.$results.attr("aria-hidden", "true"), r.$results.removeAttr("aria-activedescendant")
                }), n.on("results:toggle", function () {
                    var e = r.getHighlightedResults();
                    0 !== e.length && e.trigger("mouseup")
                }), n.on("results:select", function () {
                    var e = r.getHighlightedResults();
                    if (0 !== e.length) {
                        var n = t.GetData(e[0], "data");
                        "true" == e.attr("aria-selected") ? r.trigger("close", {}) : r.trigger("select", {data: n})
                    }
                }), n.on("results:previous", function () {
                    var e = r.getHighlightedResults(), t = r.$results.find("[aria-selected]"), n = t.index(e);
                    if (!(n <= 0)) {
                        var i = n - 1;
                        0 === e.length && (i = 0);
                        var o = t.eq(i);
                        o.trigger("mouseenter");
                        var s = r.$results.offset().top, a = o.offset().top, l = r.$results.scrollTop() + (a - s);
                        0 === i ? r.$results.scrollTop(0) : a - s < 0 && r.$results.scrollTop(l)
                    }
                }), n.on("results:next", function () {
                    var e = r.getHighlightedResults(), t = r.$results.find("[aria-selected]"), n = t.index(e) + 1;
                    if (!(n >= t.length)) {
                        var i = t.eq(n);
                        i.trigger("mouseenter");
                        var o = r.$results.offset().top + r.$results.outerHeight(!1),
                            s = i.offset().top + i.outerHeight(!1), a = r.$results.scrollTop() + s - o;
                        0 === n ? r.$results.scrollTop(0) : s > o && r.$results.scrollTop(a)
                    }
                }), n.on("results:focus", function (e) {
                    e.element.addClass("select2-results__option--highlighted")
                }), n.on("results:message", function (e) {
                    r.displayMessage(e)
                }), e.fn.mousewheel && this.$results.on("mousewheel", function (e) {
                    var t = r.$results.scrollTop(), n = r.$results.get(0).scrollHeight - t + e.deltaY,
                        i = e.deltaY > 0 && t - e.deltaY <= 0, o = e.deltaY < 0 && n <= r.$results.height();
                    i ? (r.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : o && (r.$results.scrollTop(r.$results.get(0).scrollHeight - r.$results.height()), e.preventDefault(), e.stopPropagation())
                }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (n) {
                    var i = e(this), o = t.GetData(this, "data");
                    "true" !== i.attr("aria-selected") ? r.trigger("select", {
                        originalEvent: n,
                        data: o
                    }) : r.options.get("multiple") ? r.trigger("unselect", {
                        originalEvent: n,
                        data: o
                    }) : r.trigger("close", {})
                }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (n) {
                    var i = t.GetData(this, "data");
                    r.getHighlightedResults().removeClass("select2-results__option--highlighted"), r.trigger("results:focus", {
                        data: i,
                        element: e(this)
                    })
                })
            }, n.prototype.getHighlightedResults = function () {
                return this.$results.find(".select2-results__option--highlighted")
            }, n.prototype.destroy = function () {
                this.$results.remove()
            }, n.prototype.ensureHighlightVisible = function () {
                var e = this.getHighlightedResults();
                if (0 !== e.length) {
                    var t = this.$results.find("[aria-selected]").index(e), n = this.$results.offset().top,
                        i = e.offset().top, r = this.$results.scrollTop() + (i - n), o = i - n;
                    r -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(r)
                }
            }, n.prototype.template = function (t, n) {
                var i = this.options.get("templateResult"), r = this.options.get("escapeMarkup"), o = i(t, n);
                null == o ? n.style.display = "none" : "string" == typeof o ? n.innerHTML = r(o) : e(n).append(o)
            }, n
        }), t.define("select2/keys", [], function () {
            return {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            }
        }), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (e, t, n) {
            function i(e, t) {
                this.$element = e, this.options = t, i.__super__.constructor.call(this)
            }

            return t.Extend(i, t.Observable), i.prototype.render = function () {
                var n = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0, null != t.GetData(this.$element[0], "old-tabindex") ? this._tabindex = t.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), n.attr("title", this.$element.attr("title")), n.attr("tabindex", this._tabindex), this.$selection = n, n
            }, i.prototype.bind = function (e, t) {
                var i = this, r = (e.id, e.id + "-results");
                this.container = e, this.$selection.on("focus", function (e) {
                    i.trigger("focus", e)
                }), this.$selection.on("blur", function (e) {
                    i._handleBlur(e)
                }), this.$selection.on("keydown", function (e) {
                    i.trigger("keypress", e), e.which === n.SPACE && e.preventDefault()
                }), e.on("results:focus", function (e) {
                    i.$selection.attr("aria-activedescendant", e.data._resultId)
                }), e.on("selection:update", function (e) {
                    i.update(e.data)
                }), e.on("open", function () {
                    i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", r), i._attachCloseHandler(e)
                }), e.on("close", function () {
                    i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.focus(), window.setTimeout(function () {
                        i.$selection.focus()
                    }, 0), i._detachCloseHandler(e)
                }), e.on("enable", function () {
                    i.$selection.attr("tabindex", i._tabindex)
                }), e.on("disable", function () {
                    i.$selection.attr("tabindex", "-1")
                })
            }, i.prototype._handleBlur = function (t) {
                var n = this;
                window.setTimeout(function () {
                    document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t)
                }, 1)
            }, i.prototype._attachCloseHandler = function (n) {
                e(document.body).on("mousedown.select2." + n.id, function (n) {
                    var i = e(n.target).closest(".select2");
                    e(".select2.select2-container--open").each(function () {
                        e(this), this != i[0] && t.GetData(this, "element").select2("close")
                    })
                })
            }, i.prototype._detachCloseHandler = function (t) {
                e(document.body).off("mousedown.select2." + t.id)
            }, i.prototype.position = function (e, t) {
                t.find(".selection").append(e)
            }, i.prototype.destroy = function () {
                this._detachCloseHandler(this.container)
            }, i.prototype.update = function (e) {
                throw new Error("The `update` method must be defined in child classes.")
            }, i
        }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, n, i) {
            function r() {
                r.__super__.constructor.apply(this, arguments)
            }

            return n.Extend(r, t), r.prototype.render = function () {
                var e = r.__super__.render.call(this);
                return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
            }, r.prototype.bind = function (e, t) {
                var n = this;
                r.__super__.bind.apply(this, arguments);
                var i = e.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function (e) {
                    1 === e.which && n.trigger("toggle", {originalEvent: e})
                }), this.$selection.on("focus", function (e) {
                }), this.$selection.on("blur", function (e) {
                }), e.on("focus", function (t) {
                    e.isOpen() || n.$selection.focus()
                })
            }, r.prototype.clear = function () {
                var e = this.$selection.find(".select2-selection__rendered");
                e.empty(), e.removeAttr("title")
            }, r.prototype.display = function (e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t))
            }, r.prototype.selectionContainer = function () {
                return e("<span></span>")
            }, r.prototype.update = function (e) {
                if (0 !== e.length) {
                    var t = e[0], n = this.$selection.find(".select2-selection__rendered"), i = this.display(t, n);
                    n.empty().append(i), n.attr("title", t.title || t.text)
                } else this.clear()
            }, r
        }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (e, t, n) {
            function i(e, t) {
                i.__super__.constructor.apply(this, arguments)
            }

            return n.Extend(i, t), i.prototype.render = function () {
                var e = i.__super__.render.call(this);
                return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
            }, i.prototype.bind = function (t, r) {
                var o = this;
                i.__super__.bind.apply(this, arguments), this.$selection.on("click", function (e) {
                    o.trigger("toggle", {originalEvent: e})
                }), this.$selection.on("click", ".select2-selection__choice__remove", function (t) {
                    if (!o.options.get("disabled")) {
                        var i = e(this).parent(), r = n.GetData(i[0], "data");
                        o.trigger("unselect", {originalEvent: t, data: r})
                    }
                })
            }, i.prototype.clear = function () {
                var e = this.$selection.find(".select2-selection__rendered");
                e.empty(), e.removeAttr("title")
            }, i.prototype.display = function (e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t))
            }, i.prototype.selectionContainer = function () {
                return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
            }, i.prototype.update = function (e) {
                if (this.clear(), 0 !== e.length) {
                    for (var t = [], i = 0; i < e.length; i++) {
                        var r = e[i], o = this.selectionContainer(), s = this.display(r, o);
                        o.append(s), o.attr("title", r.title || r.text), n.StoreData(o[0], "data", r), t.push(o)
                    }
                    var a = this.$selection.find(".select2-selection__rendered");
                    n.appendMany(a, t)
                }
            }, i
        }), t.define("select2/selection/placeholder", ["../utils"], function (e) {
            function t(e, t, n) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
            }

            return t.prototype.normalizePlaceholder = function (e, t) {
                return "string" == typeof t && (t = {id: "", text: t}), t
            }, t.prototype.createPlaceholder = function (e, t) {
                var n = this.selectionContainer();
                return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
            }, t.prototype.update = function (e, t) {
                var n = 1 == t.length && t[0].id != this.placeholder.id;
                if (t.length > 1 || n) return e.call(this, t);
                this.clear();
                var i = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(i)
            }, t
        }), t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function (e, t, n) {
            function i() {
            }

            return i.prototype.bind = function (e, t, n) {
                var i = this;
                e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (e) {
                    i._handleClear(e)
                }), t.on("keypress", function (e) {
                    i._handleKeyboardClear(e, t)
                })
            }, i.prototype._handleClear = function (e, t) {
                if (!this.options.get("disabled")) {
                    var i = this.$selection.find(".select2-selection__clear");
                    if (0 !== i.length) {
                        t.stopPropagation();
                        var r = n.GetData(i[0], "data"), o = this.$element.val();
                        this.$element.val(this.placeholder.id);
                        var s = {data: r};
                        if (this.trigger("clear", s), s.prevented) return void this.$element.val(o);
                        for (var a = 0; a < r.length; a++) if (s = {data: r[a]}, this.trigger("unselect", s), s.prevented) return void this.$element.val(o);
                        this.$element.trigger("change"), this.trigger("toggle", {})
                    }
                }
            }, i.prototype._handleKeyboardClear = function (e, n, i) {
                i.isOpen() || n.which != t.DELETE && n.which != t.BACKSPACE || this._handleClear(n)
            }, i.prototype.update = function (t, i) {
                if (t.call(this, i), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) {
                    var r = e('<span class="select2-selection__clear">&times;</span>');
                    n.StoreData(r[0], "data", i), this.$selection.find(".select2-selection__rendered").prepend(r)
                }
            }, i
        }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (e, t, n) {
            function i(e, t, n) {
                e.call(this, t, n)
            }

            return i.prototype.render = function (t) {
                var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                this.$searchContainer = n, this.$search = n.find("input");
                var i = t.call(this);
                return this._transferTabIndex(), i
            }, i.prototype.bind = function (e, i, r) {
                var o = this;
                e.call(this, i, r), i.on("open", function () {
                    o.$search.trigger("focus")
                }), i.on("close", function () {
                    o.$search.val(""), o.$search.removeAttr("aria-activedescendant"), o.$search.trigger("focus")
                }), i.on("enable", function () {
                    o.$search.prop("disabled", !1), o._transferTabIndex()
                }), i.on("disable", function () {
                    o.$search.prop("disabled", !0)
                }), i.on("focus", function (e) {
                    o.$search.trigger("focus")
                }), i.on("results:focus", function (e) {
                    o.$search.attr("aria-activedescendant", e.id)
                }), this.$selection.on("focusin", ".select2-search--inline", function (e) {
                    o.trigger("focus", e)
                }), this.$selection.on("focusout", ".select2-search--inline", function (e) {
                    o._handleBlur(e)
                }), this.$selection.on("keydown", ".select2-search--inline", function (e) {
                    if (e.stopPropagation(), o.trigger("keypress", e), o._keyUpPrevented = e.isDefaultPrevented(), e.which === n.BACKSPACE && "" === o.$search.val()) {
                        var i = o.$searchContainer.prev(".select2-selection__choice");
                        if (i.length > 0) {
                            var r = t.GetData(i[0], "data");
                            o.searchRemoveChoice(r), e.preventDefault()
                        }
                    }
                });
                var s = document.documentMode, a = s && s <= 11;
                this.$selection.on("input.searchcheck", ".select2-search--inline", function (e) {
                    a ? o.$selection.off("input.search input.searchcheck") : o.$selection.off("keyup.search")
                }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (e) {
                    if (a && "input" === e.type) o.$selection.off("input.search input.searchcheck"); else {
                        var t = e.which;
                        t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && o.handleSearch(e)
                    }
                })
            }, i.prototype._transferTabIndex = function (e) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
            }, i.prototype.createPlaceholder = function (e, t) {
                this.$search.attr("placeholder", t.text)
            }, i.prototype.update = function (e, t) {
                var n = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && (this.$element.find("[data-select2-tag]").length ? this.$element.focus() : this.$search.focus())
            }, i.prototype.handleSearch = function () {
                if (this.resizeSearch(), !this._keyUpPrevented) {
                    var e = this.$search.val();
                    this.trigger("query", {term: e})
                }
                this._keyUpPrevented = !1
            }, i.prototype.searchRemoveChoice = function (e, t) {
                this.trigger("unselect", {data: t}), this.$search.val(t.text), this.handleSearch()
            }, i.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");
                var e = "";
                e = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").innerWidth() : .75 * (this.$search.val().length + 1) + "em", this.$search.css("width", e)
            }, i
        }), t.define("select2/selection/eventRelay", ["jquery"], function (e) {
            function t() {
            }

            return t.prototype.bind = function (t, n, i) {
                var r = this,
                    o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
                    s = ["opening", "closing", "selecting", "unselecting", "clearing"];
                t.call(this, n, i), n.on("*", function (t, n) {
                    if (-1 !== e.inArray(t, o)) {
                        n = n || {};
                        var i = e.Event("select2:" + t, {params: n});
                        r.$element.trigger(i), -1 !== e.inArray(t, s) && (n.prevented = i.isDefaultPrevented())
                    }
                })
            }, t
        }), t.define("select2/translation", ["jquery", "require"], function (e, t) {
            function n(e) {
                this.dict = e || {}
            }

            return n.prototype.all = function () {
                return this.dict
            }, n.prototype.get = function (e) {
                return this.dict[e]
            }, n.prototype.extend = function (t) {
                this.dict = e.extend({}, t.all(), this.dict)
            }, n._cache = {}, n.loadPath = function (e) {
                if (!(e in n._cache)) {
                    var i = t(e);
                    n._cache[e] = i
                }
                return new n(n._cache[e])
            }, n
        }), t.define("select2/diacritics", [], function () {
            return {
                "Ⓐ": "A",
                "Ａ": "A",
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ầ": "A",
                "Ấ": "A",
                "Ẫ": "A",
                "Ẩ": "A",
                "Ã": "A",
                "Ā": "A",
                "Ă": "A",
                "Ằ": "A",
                "Ắ": "A",
                "Ẵ": "A",
                "Ẳ": "A",
                "Ȧ": "A",
                "Ǡ": "A",
                "Ä": "A",
                "Ǟ": "A",
                "Ả": "A",
                "Å": "A",
                "Ǻ": "A",
                "Ǎ": "A",
                "Ȁ": "A",
                "Ȃ": "A",
                "Ạ": "A",
                "Ậ": "A",
                "Ặ": "A",
                "Ḁ": "A",
                "Ą": "A",
                "Ⱥ": "A",
                "Ɐ": "A",
                "Ꜳ": "AA",
                "Æ": "AE",
                "Ǽ": "AE",
                "Ǣ": "AE",
                "Ꜵ": "AO",
                "Ꜷ": "AU",
                "Ꜹ": "AV",
                "Ꜻ": "AV",
                "Ꜽ": "AY",
                "Ⓑ": "B",
                "Ｂ": "B",
                "Ḃ": "B",
                "Ḅ": "B",
                "Ḇ": "B",
                "Ƀ": "B",
                "Ƃ": "B",
                "Ɓ": "B",
                "Ⓒ": "C",
                "Ｃ": "C",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "Ç": "C",
                "Ḉ": "C",
                "Ƈ": "C",
                "Ȼ": "C",
                "Ꜿ": "C",
                "Ⓓ": "D",
                "Ｄ": "D",
                "Ḋ": "D",
                "Ď": "D",
                "Ḍ": "D",
                "Ḑ": "D",
                "Ḓ": "D",
                "Ḏ": "D",
                "Đ": "D",
                "Ƌ": "D",
                "Ɗ": "D",
                "Ɖ": "D",
                "Ꝺ": "D",
                "Ǳ": "DZ",
                "Ǆ": "DZ",
                "ǲ": "Dz",
                "ǅ": "Dz",
                "Ⓔ": "E",
                "Ｅ": "E",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ề": "E",
                "Ế": "E",
                "Ễ": "E",
                "Ể": "E",
                "Ẽ": "E",
                "Ē": "E",
                "Ḕ": "E",
                "Ḗ": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ë": "E",
                "Ẻ": "E",
                "Ě": "E",
                "Ȅ": "E",
                "Ȇ": "E",
                "Ẹ": "E",
                "Ệ": "E",
                "Ȩ": "E",
                "Ḝ": "E",
                "Ę": "E",
                "Ḙ": "E",
                "Ḛ": "E",
                "Ɛ": "E",
                "Ǝ": "E",
                "Ⓕ": "F",
                "Ｆ": "F",
                "Ḟ": "F",
                "Ƒ": "F",
                "Ꝼ": "F",
                "Ⓖ": "G",
                "Ｇ": "G",
                "Ǵ": "G",
                "Ĝ": "G",
                "Ḡ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ǧ": "G",
                "Ģ": "G",
                "Ǥ": "G",
                "Ɠ": "G",
                "Ꞡ": "G",
                "Ᵹ": "G",
                "Ꝿ": "G",
                "Ⓗ": "H",
                "Ｈ": "H",
                "Ĥ": "H",
                "Ḣ": "H",
                "Ḧ": "H",
                "Ȟ": "H",
                "Ḥ": "H",
                "Ḩ": "H",
                "Ḫ": "H",
                "Ħ": "H",
                "Ⱨ": "H",
                "Ⱶ": "H",
                "Ɥ": "H",
                "Ⓘ": "I",
                "Ｉ": "I",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "İ": "I",
                "Ï": "I",
                "Ḯ": "I",
                "Ỉ": "I",
                "Ǐ": "I",
                "Ȉ": "I",
                "Ȋ": "I",
                "Ị": "I",
                "Į": "I",
                "Ḭ": "I",
                "Ɨ": "I",
                "Ⓙ": "J",
                "Ｊ": "J",
                "Ĵ": "J",
                "Ɉ": "J",
                "Ⓚ": "K",
                "Ｋ": "K",
                "Ḱ": "K",
                "Ǩ": "K",
                "Ḳ": "K",
                "Ķ": "K",
                "Ḵ": "K",
                "Ƙ": "K",
                "Ⱪ": "K",
                "Ꝁ": "K",
                "Ꝃ": "K",
                "Ꝅ": "K",
                "Ꞣ": "K",
                "Ⓛ": "L",
                "Ｌ": "L",
                "Ŀ": "L",
                "Ĺ": "L",
                "Ľ": "L",
                "Ḷ": "L",
                "Ḹ": "L",
                "Ļ": "L",
                "Ḽ": "L",
                "Ḻ": "L",
                "Ł": "L",
                "Ƚ": "L",
                "Ɫ": "L",
                "Ⱡ": "L",
                "Ꝉ": "L",
                "Ꝇ": "L",
                "Ꞁ": "L",
                "Ǉ": "LJ",
                "ǈ": "Lj",
                "Ⓜ": "M",
                "Ｍ": "M",
                "Ḿ": "M",
                "Ṁ": "M",
                "Ṃ": "M",
                "Ɱ": "M",
                "Ɯ": "M",
                "Ⓝ": "N",
                "Ｎ": "N",
                "Ǹ": "N",
                "Ń": "N",
                "Ñ": "N",
                "Ṅ": "N",
                "Ň": "N",
                "Ṇ": "N",
                "Ņ": "N",
                "Ṋ": "N",
                "Ṉ": "N",
                "Ƞ": "N",
                "Ɲ": "N",
                "Ꞑ": "N",
                "Ꞥ": "N",
                "Ǌ": "NJ",
                "ǋ": "Nj",
                "Ⓞ": "O",
                "Ｏ": "O",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Ồ": "O",
                "Ố": "O",
                "Ỗ": "O",
                "Ổ": "O",
                "Õ": "O",
                "Ṍ": "O",
                "Ȭ": "O",
                "Ṏ": "O",
                "Ō": "O",
                "Ṑ": "O",
                "Ṓ": "O",
                "Ŏ": "O",
                "Ȯ": "O",
                "Ȱ": "O",
                "Ö": "O",
                "Ȫ": "O",
                "Ỏ": "O",
                "Ő": "O",
                "Ǒ": "O",
                "Ȍ": "O",
                "Ȏ": "O",
                "Ơ": "O",
                "Ờ": "O",
                "Ớ": "O",
                "Ỡ": "O",
                "Ở": "O",
                "Ợ": "O",
                "Ọ": "O",
                "Ộ": "O",
                "Ǫ": "O",
                "Ǭ": "O",
                "Ø": "O",
                "Ǿ": "O",
                "Ɔ": "O",
                "Ɵ": "O",
                "Ꝋ": "O",
                "Ꝍ": "O",
                "Ƣ": "OI",
                "Ꝏ": "OO",
                "Ȣ": "OU",
                "Ⓟ": "P",
                "Ｐ": "P",
                "Ṕ": "P",
                "Ṗ": "P",
                "Ƥ": "P",
                "Ᵽ": "P",
                "Ꝑ": "P",
                "Ꝓ": "P",
                "Ꝕ": "P",
                "Ⓠ": "Q",
                "Ｑ": "Q",
                "Ꝗ": "Q",
                "Ꝙ": "Q",
                "Ɋ": "Q",
                "Ⓡ": "R",
                "Ｒ": "R",
                "Ŕ": "R",
                "Ṙ": "R",
                "Ř": "R",
                "Ȑ": "R",
                "Ȓ": "R",
                "Ṛ": "R",
                "Ṝ": "R",
                "Ŗ": "R",
                "Ṟ": "R",
                "Ɍ": "R",
                "Ɽ": "R",
                "Ꝛ": "R",
                "Ꞧ": "R",
                "Ꞃ": "R",
                "Ⓢ": "S",
                "Ｓ": "S",
                "ẞ": "S",
                "Ś": "S",
                "Ṥ": "S",
                "Ŝ": "S",
                "Ṡ": "S",
                "Š": "S",
                "Ṧ": "S",
                "Ṣ": "S",
                "Ṩ": "S",
                "Ș": "S",
                "Ş": "S",
                "Ȿ": "S",
                "Ꞩ": "S",
                "Ꞅ": "S",
                "Ⓣ": "T",
                "Ｔ": "T",
                "Ṫ": "T",
                "Ť": "T",
                "Ṭ": "T",
                "Ț": "T",
                "Ţ": "T",
                "Ṱ": "T",
                "Ṯ": "T",
                "Ŧ": "T",
                "Ƭ": "T",
                "Ʈ": "T",
                "Ⱦ": "T",
                "Ꞇ": "T",
                "Ꜩ": "TZ",
                "Ⓤ": "U",
                "Ｕ": "U",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ũ": "U",
                "Ṹ": "U",
                "Ū": "U",
                "Ṻ": "U",
                "Ŭ": "U",
                "Ü": "U",
                "Ǜ": "U",
                "Ǘ": "U",
                "Ǖ": "U",
                "Ǚ": "U",
                "Ủ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ǔ": "U",
                "Ȕ": "U",
                "Ȗ": "U",
                "Ư": "U",
                "Ừ": "U",
                "Ứ": "U",
                "Ữ": "U",
                "Ử": "U",
                "Ự": "U",
                "Ụ": "U",
                "Ṳ": "U",
                "Ų": "U",
                "Ṷ": "U",
                "Ṵ": "U",
                "Ʉ": "U",
                "Ⓥ": "V",
                "Ｖ": "V",
                "Ṽ": "V",
                "Ṿ": "V",
                "Ʋ": "V",
                "Ꝟ": "V",
                "Ʌ": "V",
                "Ꝡ": "VY",
                "Ⓦ": "W",
                "Ｗ": "W",
                "Ẁ": "W",
                "Ẃ": "W",
                "Ŵ": "W",
                "Ẇ": "W",
                "Ẅ": "W",
                "Ẉ": "W",
                "Ⱳ": "W",
                "Ⓧ": "X",
                "Ｘ": "X",
                "Ẋ": "X",
                "Ẍ": "X",
                "Ⓨ": "Y",
                "Ｙ": "Y",
                "Ỳ": "Y",
                "Ý": "Y",
                "Ŷ": "Y",
                "Ỹ": "Y",
                "Ȳ": "Y",
                "Ẏ": "Y",
                "Ÿ": "Y",
                "Ỷ": "Y",
                "Ỵ": "Y",
                "Ƴ": "Y",
                "Ɏ": "Y",
                "Ỿ": "Y",
                "Ⓩ": "Z",
                "Ｚ": "Z",
                "Ź": "Z",
                "Ẑ": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "Ẓ": "Z",
                "Ẕ": "Z",
                "Ƶ": "Z",
                "Ȥ": "Z",
                "Ɀ": "Z",
                "Ⱬ": "Z",
                "Ꝣ": "Z",
                "ⓐ": "a",
                "ａ": "a",
                "ẚ": "a",
                "à": "a",
                "á": "a",
                "â": "a",
                "ầ": "a",
                "ấ": "a",
                "ẫ": "a",
                "ẩ": "a",
                "ã": "a",
                "ā": "a",
                "ă": "a",
                "ằ": "a",
                "ắ": "a",
                "ẵ": "a",
                "ẳ": "a",
                "ȧ": "a",
                "ǡ": "a",
                "ä": "a",
                "ǟ": "a",
                "ả": "a",
                "å": "a",
                "ǻ": "a",
                "ǎ": "a",
                "ȁ": "a",
                "ȃ": "a",
                "ạ": "a",
                "ậ": "a",
                "ặ": "a",
                "ḁ": "a",
                "ą": "a",
                "ⱥ": "a",
                "ɐ": "a",
                "ꜳ": "aa",
                "æ": "ae",
                "ǽ": "ae",
                "ǣ": "ae",
                "ꜵ": "ao",
                "ꜷ": "au",
                "ꜹ": "av",
                "ꜻ": "av",
                "ꜽ": "ay",
                "ⓑ": "b",
                "ｂ": "b",
                "ḃ": "b",
                "ḅ": "b",
                "ḇ": "b",
                "ƀ": "b",
                "ƃ": "b",
                "ɓ": "b",
                "ⓒ": "c",
                "ｃ": "c",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "ç": "c",
                "ḉ": "c",
                "ƈ": "c",
                "ȼ": "c",
                "ꜿ": "c",
                "ↄ": "c",
                "ⓓ": "d",
                "ｄ": "d",
                "ḋ": "d",
                "ď": "d",
                "ḍ": "d",
                "ḑ": "d",
                "ḓ": "d",
                "ḏ": "d",
                "đ": "d",
                "ƌ": "d",
                "ɖ": "d",
                "ɗ": "d",
                "ꝺ": "d",
                "ǳ": "dz",
                "ǆ": "dz",
                "ⓔ": "e",
                "ｅ": "e",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ề": "e",
                "ế": "e",
                "ễ": "e",
                "ể": "e",
                "ẽ": "e",
                "ē": "e",
                "ḕ": "e",
                "ḗ": "e",
                "ĕ": "e",
                "ė": "e",
                "ë": "e",
                "ẻ": "e",
                "ě": "e",
                "ȅ": "e",
                "ȇ": "e",
                "ẹ": "e",
                "ệ": "e",
                "ȩ": "e",
                "ḝ": "e",
                "ę": "e",
                "ḙ": "e",
                "ḛ": "e",
                "ɇ": "e",
                "ɛ": "e",
                "ǝ": "e",
                "ⓕ": "f",
                "ｆ": "f",
                "ḟ": "f",
                "ƒ": "f",
                "ꝼ": "f",
                "ⓖ": "g",
                "ｇ": "g",
                "ǵ": "g",
                "ĝ": "g",
                "ḡ": "g",
                "ğ": "g",
                "ġ": "g",
                "ǧ": "g",
                "ģ": "g",
                "ǥ": "g",
                "ɠ": "g",
                "ꞡ": "g",
                "ᵹ": "g",
                "ꝿ": "g",
                "ⓗ": "h",
                "ｈ": "h",
                "ĥ": "h",
                "ḣ": "h",
                "ḧ": "h",
                "ȟ": "h",
                "ḥ": "h",
                "ḩ": "h",
                "ḫ": "h",
                "ẖ": "h",
                "ħ": "h",
                "ⱨ": "h",
                "ⱶ": "h",
                "ɥ": "h",
                "ƕ": "hv",
                "ⓘ": "i",
                "ｉ": "i",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "ï": "i",
                "ḯ": "i",
                "ỉ": "i",
                "ǐ": "i",
                "ȉ": "i",
                "ȋ": "i",
                "ị": "i",
                "į": "i",
                "ḭ": "i",
                "ɨ": "i",
                "ı": "i",
                "ⓙ": "j",
                "ｊ": "j",
                "ĵ": "j",
                "ǰ": "j",
                "ɉ": "j",
                "ⓚ": "k",
                "ｋ": "k",
                "ḱ": "k",
                "ǩ": "k",
                "ḳ": "k",
                "ķ": "k",
                "ḵ": "k",
                "ƙ": "k",
                "ⱪ": "k",
                "ꝁ": "k",
                "ꝃ": "k",
                "ꝅ": "k",
                "ꞣ": "k",
                "ⓛ": "l",
                "ｌ": "l",
                "ŀ": "l",
                "ĺ": "l",
                "ľ": "l",
                "ḷ": "l",
                "ḹ": "l",
                "ļ": "l",
                "ḽ": "l",
                "ḻ": "l",
                "ſ": "l",
                "ł": "l",
                "ƚ": "l",
                "ɫ": "l",
                "ⱡ": "l",
                "ꝉ": "l",
                "ꞁ": "l",
                "ꝇ": "l",
                "ǉ": "lj",
                "ⓜ": "m",
                "ｍ": "m",
                "ḿ": "m",
                "ṁ": "m",
                "ṃ": "m",
                "ɱ": "m",
                "ɯ": "m",
                "ⓝ": "n",
                "ｎ": "n",
                "ǹ": "n",
                "ń": "n",
                "ñ": "n",
                "ṅ": "n",
                "ň": "n",
                "ṇ": "n",
                "ņ": "n",
                "ṋ": "n",
                "ṉ": "n",
                "ƞ": "n",
                "ɲ": "n",
                "ŉ": "n",
                "ꞑ": "n",
                "ꞥ": "n",
                "ǌ": "nj",
                "ⓞ": "o",
                "ｏ": "o",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "ồ": "o",
                "ố": "o",
                "ỗ": "o",
                "ổ": "o",
                "õ": "o",
                "ṍ": "o",
                "ȭ": "o",
                "ṏ": "o",
                "ō": "o",
                "ṑ": "o",
                "ṓ": "o",
                "ŏ": "o",
                "ȯ": "o",
                "ȱ": "o",
                "ö": "o",
                "ȫ": "o",
                "ỏ": "o",
                "ő": "o",
                "ǒ": "o",
                "ȍ": "o",
                "ȏ": "o",
                "ơ": "o",
                "ờ": "o",
                "ớ": "o",
                "ỡ": "o",
                "ở": "o",
                "ợ": "o",
                "ọ": "o",
                "ộ": "o",
                "ǫ": "o",
                "ǭ": "o",
                "ø": "o",
                "ǿ": "o",
                "ɔ": "o",
                "ꝋ": "o",
                "ꝍ": "o",
                "ɵ": "o",
                "ƣ": "oi",
                "ȣ": "ou",
                "ꝏ": "oo",
                "ⓟ": "p",
                "ｐ": "p",
                "ṕ": "p",
                "ṗ": "p",
                "ƥ": "p",
                "ᵽ": "p",
                "ꝑ": "p",
                "ꝓ": "p",
                "ꝕ": "p",
                "ⓠ": "q",
                "ｑ": "q",
                "ɋ": "q",
                "ꝗ": "q",
                "ꝙ": "q",
                "ⓡ": "r",
                "ｒ": "r",
                "ŕ": "r",
                "ṙ": "r",
                "ř": "r",
                "ȑ": "r",
                "ȓ": "r",
                "ṛ": "r",
                "ṝ": "r",
                "ŗ": "r",
                "ṟ": "r",
                "ɍ": "r",
                "ɽ": "r",
                "ꝛ": "r",
                "ꞧ": "r",
                "ꞃ": "r",
                "ⓢ": "s",
                "ｓ": "s",
                "ß": "s",
                "ś": "s",
                "ṥ": "s",
                "ŝ": "s",
                "ṡ": "s",
                "š": "s",
                "ṧ": "s",
                "ṣ": "s",
                "ṩ": "s",
                "ș": "s",
                "ş": "s",
                "ȿ": "s",
                "ꞩ": "s",
                "ꞅ": "s",
                "ẛ": "s",
                "ⓣ": "t",
                "ｔ": "t",
                "ṫ": "t",
                "ẗ": "t",
                "ť": "t",
                "ṭ": "t",
                "ț": "t",
                "ţ": "t",
                "ṱ": "t",
                "ṯ": "t",
                "ŧ": "t",
                "ƭ": "t",
                "ʈ": "t",
                "ⱦ": "t",
                "ꞇ": "t",
                "ꜩ": "tz",
                "ⓤ": "u",
                "ｕ": "u",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ũ": "u",
                "ṹ": "u",
                "ū": "u",
                "ṻ": "u",
                "ŭ": "u",
                "ü": "u",
                "ǜ": "u",
                "ǘ": "u",
                "ǖ": "u",
                "ǚ": "u",
                "ủ": "u",
                "ů": "u",
                "ű": "u",
                "ǔ": "u",
                "ȕ": "u",
                "ȗ": "u",
                "ư": "u",
                "ừ": "u",
                "ứ": "u",
                "ữ": "u",
                "ử": "u",
                "ự": "u",
                "ụ": "u",
                "ṳ": "u",
                "ų": "u",
                "ṷ": "u",
                "ṵ": "u",
                "ʉ": "u",
                "ⓥ": "v",
                "ｖ": "v",
                "ṽ": "v",
                "ṿ": "v",
                "ʋ": "v",
                "ꝟ": "v",
                "ʌ": "v",
                "ꝡ": "vy",
                "ⓦ": "w",
                "ｗ": "w",
                "ẁ": "w",
                "ẃ": "w",
                "ŵ": "w",
                "ẇ": "w",
                "ẅ": "w",
                "ẘ": "w",
                "ẉ": "w",
                "ⱳ": "w",
                "ⓧ": "x",
                "ｘ": "x",
                "ẋ": "x",
                "ẍ": "x",
                "ⓨ": "y",
                "ｙ": "y",
                "ỳ": "y",
                "ý": "y",
                "ŷ": "y",
                "ỹ": "y",
                "ȳ": "y",
                "ẏ": "y",
                "ÿ": "y",
                "ỷ": "y",
                "ẙ": "y",
                "ỵ": "y",
                "ƴ": "y",
                "ɏ": "y",
                "ỿ": "y",
                "ⓩ": "z",
                "ｚ": "z",
                "ź": "z",
                "ẑ": "z",
                "ż": "z",
                "ž": "z",
                "ẓ": "z",
                "ẕ": "z",
                "ƶ": "z",
                "ȥ": "z",
                "ɀ": "z",
                "ⱬ": "z",
                "ꝣ": "z",
                "Ά": "Α",
                "Έ": "Ε",
                "Ή": "Η",
                "Ί": "Ι",
                "Ϊ": "Ι",
                "Ό": "Ο",
                "Ύ": "Υ",
                "Ϋ": "Υ",
                "Ώ": "Ω",
                "ά": "α",
                "έ": "ε",
                "ή": "η",
                "ί": "ι",
                "ϊ": "ι",
                "ΐ": "ι",
                "ό": "ο",
                "ύ": "υ",
                "ϋ": "υ",
                "ΰ": "υ",
                "ω": "ω",
                "ς": "σ"
            }
        }), t.define("select2/data/base", ["../utils"], function (e) {
            function t(e, n) {
                t.__super__.constructor.call(this)
            }

            return e.Extend(t, e.Observable), t.prototype.current = function (e) {
                throw new Error("The `current` method must be defined in child classes.")
            }, t.prototype.query = function (e, t) {
                throw new Error("The `query` method must be defined in child classes.")
            }, t.prototype.bind = function (e, t) {
            }, t.prototype.destroy = function () {
            }, t.prototype.generateResultId = function (t, n) {
                var i = t.id + "-result-";
                return i += e.generateChars(4), null != n.id ? i += "-" + n.id.toString() : i += "-" + e.generateChars(4), i
            }, t
        }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, t, n) {
            function i(e, t) {
                this.$element = e, this.options = t, i.__super__.constructor.call(this)
            }

            return t.Extend(i, e), i.prototype.current = function (e) {
                var t = [], i = this;
                this.$element.find(":selected").each(function () {
                    var e = n(this), r = i.item(e);
                    t.push(r)
                }), e(t)
            }, i.prototype.select = function (e) {
                var t = this;
                if (e.selected = !0, n(e.element).is("option")) return e.element.selected = !0, void this.$element.trigger("change");
                if (this.$element.prop("multiple")) this.current(function (i) {
                    var r = [];
                    (e = [e]).push.apply(e, i);
                    for (var o = 0; o < e.length; o++) {
                        var s = e[o].id;
                        -1 === n.inArray(s, r) && r.push(s)
                    }
                    t.$element.val(r), t.$element.trigger("change")
                }); else {
                    var i = e.id;
                    this.$element.val(i), this.$element.trigger("change")
                }
            }, i.prototype.unselect = function (e) {
                var t = this;
                if (this.$element.prop("multiple")) {
                    if (e.selected = !1, n(e.element).is("option")) return e.element.selected = !1, void this.$element.trigger("change");
                    this.current(function (i) {
                        for (var r = [], o = 0; o < i.length; o++) {
                            var s = i[o].id;
                            s !== e.id && -1 === n.inArray(s, r) && r.push(s)
                        }
                        t.$element.val(r), t.$element.trigger("change")
                    })
                }
            }, i.prototype.bind = function (e, t) {
                var n = this;
                this.container = e, e.on("select", function (e) {
                    n.select(e.data)
                }), e.on("unselect", function (e) {
                    n.unselect(e.data)
                })
            }, i.prototype.destroy = function () {
                this.$element.find("*").each(function () {
                    t.RemoveData(this)
                })
            }, i.prototype.query = function (e, t) {
                var i = [], r = this;
                this.$element.children().each(function () {
                    var t = n(this);
                    if (t.is("option") || t.is("optgroup")) {
                        var o = r.item(t), s = r.matches(e, o);
                        null !== s && i.push(s)
                    }
                }), t({results: i})
            }, i.prototype.addOptions = function (e) {
                t.appendMany(this.$element, e)
            }, i.prototype.option = function (e) {
                var i;
                e.children ? (i = document.createElement("optgroup")).label = e.text : void 0 !== (i = document.createElement("option")).textContent ? i.textContent = e.text : i.innerText = e.text, void 0 !== e.id && (i.value = e.id), e.disabled && (i.disabled = !0), e.selected && (i.selected = !0), e.title && (i.title = e.title);
                var r = n(i), o = this._normalizeItem(e);
                return o.element = i, t.StoreData(i, "data", o), r
            }, i.prototype.item = function (e) {
                var i = {};
                if (null != (i = t.GetData(e[0], "data"))) return i;
                if (e.is("option")) i = {
                    id: e.val(),
                    text: e.text(),
                    disabled: e.prop("disabled"),
                    selected: e.prop("selected"),
                    title: e.prop("title")
                }; else if (e.is("optgroup")) {
                    i = {text: e.prop("label"), children: [], title: e.prop("title")};
                    for (var r = e.children("option"), o = [], s = 0; s < r.length; s++) {
                        var a = n(r[s]), l = this.item(a);
                        o.push(l)
                    }
                    i.children = o
                }
                return (i = this._normalizeItem(i)).element = e[0], t.StoreData(e[0], "data", i), i
            }, i.prototype._normalizeItem = function (e) {
                e !== Object(e) && (e = {id: e, text: e});
                return null != (e = n.extend({}, {text: ""}, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), n.extend({}, {
                    selected: !1,
                    disabled: !1
                }, e)
            }, i.prototype.matches = function (e, t) {
                return this.options.get("matcher")(e, t)
            }, i
        }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, t, n) {
            function i(e, t) {
                var n = t.get("data") || [];
                i.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(n))
            }

            return t.Extend(i, e), i.prototype.select = function (e) {
                var t = this.$element.find("option").filter(function (t, n) {
                    return n.value == e.id.toString()
                });
                0 === t.length && (t = this.option(e), this.addOptions(t)), i.__super__.select.call(this, e)
            }, i.prototype.convertToOptions = function (e) {
                function i(e) {
                    return function () {
                        return n(this).val() == e.id
                    }
                }

                for (var r = this, o = this.$element.find("option"), s = o.map(function () {
                    return r.item(n(this)).id
                }).get(), a = [], l = 0; l < e.length; l++) {
                    var c = this._normalizeItem(e[l]);
                    if (n.inArray(c.id, s) >= 0) {
                        var u = o.filter(i(c)), h = this.item(u), d = n.extend(!0, {}, c, h), f = this.option(d);
                        u.replaceWith(f)
                    } else {
                        var p = this.option(c);
                        if (c.children) {
                            var m = this.convertToOptions(c.children);
                            t.appendMany(p, m)
                        }
                        a.push(p)
                    }
                }
                return a
            }, i
        }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, n) {
            function i(e, t) {
                this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, e, t)
            }

            return t.Extend(i, e), i.prototype._applyDefaults = function (e) {
                var t = {
                    data: function (e) {
                        return n.extend({}, e, {q: e.term})
                    }, transport: function (e, t, i) {
                        var r = n.ajax(e);
                        return r.then(t), r.fail(i), r
                    }
                };
                return n.extend({}, t, e, !0)
            }, i.prototype.processResults = function (e) {
                return e
            }, i.prototype.query = function (e, t) {
                function i() {
                    var i = o.transport(o, function (i) {
                        var o = r.processResults(i, e);
                        r.options.get("debug") && window.console && console.error && (o && o.results && n.isArray(o.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(o)
                    }, function () {
                        "status" in i && (0 === i.status || "0" === i.status) || r.trigger("results:message", {message: "errorLoading"})
                    });
                    r._request = i
                }

                var r = this;
                null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                var o = n.extend({type: "GET"}, this.ajaxOptions);
                "function" == typeof o.url && (o.url = o.url.call(this.$element, e)), "function" == typeof o.data && (o.data = o.data.call(this.$element, e)), this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i()
            }, i
        }), t.define("select2/data/tags", ["jquery"], function (e) {
            function t(t, n, i) {
                var r = i.get("tags"), o = i.get("createTag");
                void 0 !== o && (this.createTag = o);
                var s = i.get("insertTag");
                if (void 0 !== s && (this.insertTag = s), t.call(this, n, i), e.isArray(r)) for (var a = 0; a < r.length; a++) {
                    var l = r[a], c = this._normalizeItem(l), u = this.option(c);
                    this.$element.append(u)
                }
            }

            return t.prototype.query = function (e, t, n) {
                var i = this;
                this._removeOldTags(), null != t.term && null == t.page ? e.call(this, t, function e(r, o) {
                    for (var s = r.results, a = 0; a < s.length; a++) {
                        var l = s[a], c = null != l.children && !e({results: l.children}, !0);
                        if ((l.text || "").toUpperCase() === (t.term || "").toUpperCase() || c) return !o && (r.data = s, void n(r))
                    }
                    if (o) return !0;
                    var u = i.createTag(t);
                    if (null != u) {
                        var h = i.option(u);
                        h.attr("data-select2-tag", !0), i.addOptions([h]), i.insertTag(s, u)
                    }
                    r.results = s, n(r)
                }) : e.call(this, t, n)
            }, t.prototype.createTag = function (t, n) {
                var i = e.trim(n.term);
                return "" === i ? null : {id: i, text: i}
            }, t.prototype.insertTag = function (e, t, n) {
                t.unshift(n)
            }, t.prototype._removeOldTags = function (t) {
                this._lastTag, this.$element.find("option[data-select2-tag]").each(function () {
                    this.selected || e(this).remove()
                })
            }, t
        }), t.define("select2/data/tokenizer", ["jquery"], function (e) {
            function t(e, t, n) {
                var i = n.get("tokenizer");
                void 0 !== i && (this.tokenizer = i), e.call(this, t, n)
            }

            return t.prototype.bind = function (e, t, n) {
                e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
            }, t.prototype.query = function (t, n, i) {
                var r = this;
                n.term = n.term || "";
                var o = this.tokenizer(n, this.options, function (t) {
                    var n, i = r._normalizeItem(t);
                    if (!r.$element.find("option").filter(function () {
                        return e(this).val() === i.id
                    }).length) {
                        var o = r.option(i);
                        o.attr("data-select2-tag", !0), r._removeOldTags(), r.addOptions([o])
                    }
                    n = i, r.trigger("select", {data: n})
                });
                o.term !== n.term && (this.$search.length && (this.$search.val(o.term), this.$search.focus()), n.term = o.term), t.call(this, n, i)
            }, t.prototype.tokenizer = function (t, n, i, r) {
                for (var o = i.get("tokenSeparators") || [], s = n.term, a = 0, l = this.createTag || function (e) {
                    return {id: e.term, text: e.term}
                }; a < s.length;) {
                    var c = s[a];
                    if (-1 !== e.inArray(c, o)) {
                        var u = s.substr(0, a), h = l(e.extend({}, n, {term: u}));
                        null != h ? (r(h), s = s.substr(a + 1) || "", a = 0) : a++
                    } else a++
                }
                return {term: s}
            }, t
        }), t.define("select2/data/minimumInputLength", [], function () {
            function e(e, t, n) {
                this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
            }

            return e.prototype.query = function (e, t, n) {
                t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {minimum: this.minimumInputLength, input: t.term, params: t}
                }) : e.call(this, t, n)
            }, e
        }), t.define("select2/data/maximumInputLength", [], function () {
            function e(e, t, n) {
                this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
            }

            return e.prototype.query = function (e, t, n) {
                t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {maximum: this.maximumInputLength, input: t.term, params: t}
                }) : e.call(this, t, n)
            }, e
        }), t.define("select2/data/maximumSelectionLength", [], function () {
            function e(e, t, n) {
                this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
            }

            return e.prototype.query = function (e, t, n) {
                var i = this;
                this.current(function (r) {
                    var o = null != r ? r.length : 0;
                    i.maximumSelectionLength > 0 && o >= i.maximumSelectionLength ? i.trigger("results:message", {
                        message: "maximumSelected",
                        args: {maximum: i.maximumSelectionLength}
                    }) : e.call(i, t, n)
                })
            }, e
        }), t.define("select2/dropdown", ["jquery", "./utils"], function (e, t) {
            function n(e, t) {
                this.$element = e, this.options = t, n.__super__.constructor.call(this)
            }

            return t.Extend(n, t.Observable), n.prototype.render = function () {
                var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t
            }, n.prototype.bind = function () {
            }, n.prototype.position = function (e, t) {
            }, n.prototype.destroy = function () {
                this.$dropdown.remove()
            }, n
        }), t.define("select2/dropdown/search", ["jquery", "../utils"], function (e, t) {
            function n() {
            }

            return n.prototype.render = function (t) {
                var n = t.call(this),
                    i = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');
                return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n
            }, n.prototype.bind = function (t, n, i) {
                var r = this;
                t.call(this, n, i), this.$search.on("keydown", function (e) {
                    r.trigger("keypress", e), r._keyUpPrevented = e.isDefaultPrevented()
                }), this.$search.on("input", function (t) {
                    e(this).off("keyup")
                }), this.$search.on("keyup input", function (e) {
                    r.handleSearch(e)
                }), n.on("open", function () {
                    r.$search.attr("tabindex", 0), r.$search.focus(), window.setTimeout(function () {
                        r.$search.focus()
                    }, 0)
                }), n.on("close", function () {
                    r.$search.attr("tabindex", -1), r.$search.val(""), r.$search.blur()
                }), n.on("focus", function () {
                    n.isOpen() || r.$search.focus()
                }), n.on("results:all", function (e) {
                    null != e.query.term && "" !== e.query.term || (r.showSearch(e) ? r.$searchContainer.removeClass("select2-search--hide") : r.$searchContainer.addClass("select2-search--hide"))
                })
            }, n.prototype.handleSearch = function (e) {
                if (!this._keyUpPrevented) {
                    var t = this.$search.val();
                    this.trigger("query", {term: t})
                }
                this._keyUpPrevented = !1
            }, n.prototype.showSearch = function (e, t) {
                return !0
            }, n
        }), t.define("select2/dropdown/hidePlaceholder", [], function () {
            function e(e, t, n, i) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i)
            }

            return e.prototype.append = function (e, t) {
                t.results = this.removePlaceholder(t.results), e.call(this, t)
            }, e.prototype.normalizePlaceholder = function (e, t) {
                return "string" == typeof t && (t = {id: "", text: t}), t
            }, e.prototype.removePlaceholder = function (e, t) {
                for (var n = t.slice(0), i = t.length - 1; i >= 0; i--) {
                    var r = t[i];
                    this.placeholder.id === r.id && n.splice(i, 1)
                }
                return n
            }, e
        }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function (e) {
            function t(e, t, n, i) {
                this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
            }

            return t.prototype.append = function (e, t) {
                this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
            }, t.prototype.bind = function (t, n, i) {
                var r = this;
                t.call(this, n, i), n.on("query", function (e) {
                    r.lastParams = e, r.loading = !0
                }), n.on("query:append", function (e) {
                    r.lastParams = e, r.loading = !0
                }), this.$results.on("scroll", function () {
                    var t = e.contains(document.documentElement, r.$loadingMore[0]);
                    !r.loading && t && r.$results.offset().top + r.$results.outerHeight(!1) + 50 >= r.$loadingMore.offset().top + r.$loadingMore.outerHeight(!1) && r.loadMore()
                })
            }, t.prototype.loadMore = function () {
                this.loading = !0;
                var t = e.extend({}, {page: 1}, this.lastParams);
                t.page++, this.trigger("query:append", t)
            }, t.prototype.showLoadingMore = function (e, t) {
                return t.pagination && t.pagination.more
            }, t.prototype.createLoadingMore = function () {
                var t = e('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                    n = this.options.get("translations").get("loadingMore");
                return t.html(n(this.lastParams)), t
            }, t
        }), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (e, t) {
            function n(t, n, i) {
                this.$dropdownParent = i.get("dropdownParent") || e(document.body), t.call(this, n, i)
            }

            return n.prototype.bind = function (e, t, n) {
                var i = this, r = !1;
                e.call(this, t, n), t.on("open", function () {
                    i._showDropdown(), i._attachPositioningHandler(t), r || (r = !0, t.on("results:all", function () {
                        i._positionDropdown(), i._resizeDropdown()
                    }), t.on("results:append", function () {
                        i._positionDropdown(), i._resizeDropdown()
                    }))
                }), t.on("close", function () {
                    i._hideDropdown(), i._detachPositioningHandler(t)
                }), this.$dropdownContainer.on("mousedown", function (e) {
                    e.stopPropagation()
                })
            }, n.prototype.destroy = function (e) {
                e.call(this), this.$dropdownContainer.remove()
            }, n.prototype.position = function (e, t, n) {
                t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                    position: "absolute",
                    top: -999999
                }), this.$container = n
            }, n.prototype.render = function (t) {
                var n = e("<span></span>"), i = t.call(this);
                return n.append(i), this.$dropdownContainer = n, n
            }, n.prototype._hideDropdown = function (e) {
                this.$dropdownContainer.detach()
            }, n.prototype._attachPositioningHandler = function (n, i) {
                var r = this, o = "scroll.select2." + i.id, s = "resize.select2." + i.id,
                    a = "orientationchange.select2." + i.id, l = this.$container.parents().filter(t.hasScroll);
                l.each(function () {
                    t.StoreData(this, "select2-scroll-position", {x: e(this).scrollLeft(), y: e(this).scrollTop()})
                }), l.on(o, function (n) {
                    var i = t.GetData(this, "select2-scroll-position");
                    e(this).scrollTop(i.y)
                }), e(window).on(o + " " + s + " " + a, function (e) {
                    r._positionDropdown(), r._resizeDropdown()
                })
            }, n.prototype._detachPositioningHandler = function (n, i) {
                var r = "scroll.select2." + i.id, o = "resize.select2." + i.id, s = "orientationchange.select2." + i.id;
                this.$container.parents().filter(t.hasScroll).off(r), e(window).off(r + " " + o + " " + s)
            }, n.prototype._positionDropdown = function () {
                var t = e(window), n = this.$dropdown.hasClass("select2-dropdown--above"),
                    i = this.$dropdown.hasClass("select2-dropdown--below"), r = null, o = this.$container.offset();
                o.bottom = o.top + this.$container.outerHeight(!1);
                var s = {height: this.$container.outerHeight(!1)};
                s.top = o.top, s.bottom = o.top + s.height;
                var a = this.$dropdown.outerHeight(!1), l = t.scrollTop(), c = t.scrollTop() + t.height(),
                    u = l < o.top - a, h = c > o.bottom + a, d = {left: o.left, top: s.bottom},
                    f = this.$dropdownParent;
                "static" === f.css("position") && (f = f.offsetParent());
                var p = f.offset();
                d.top -= p.top, d.left -= p.left, n || i || (r = "below"), h || !u || n ? !u && h && n && (r = "below") : r = "above", ("above" == r || n && "below" !== r) && (d.top = s.top - p.top - a), null != r && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + r), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + r)), this.$dropdownContainer.css(d)
            }, n.prototype._resizeDropdown = function () {
                var e = {width: this.$container.outerWidth(!1) + "px"};
                this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
            }, n.prototype._showDropdown = function (e) {
                this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
            }, n
        }), t.define("select2/dropdown/minimumResultsForSearch", [], function () {
            function e(e, t, n, i) {
                this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i)
            }

            return e.prototype.showSearch = function (e, t) {
                return !(function e(t) {
                    for (var n = 0, i = 0; i < t.length; i++) {
                        var r = t[i];
                        r.children ? n += e(r.children) : n++
                    }
                    return n
                }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t)
            }, e
        }), t.define("select2/dropdown/selectOnClose", ["../utils"], function (e) {
            function t() {
            }

            return t.prototype.bind = function (e, t, n) {
                var i = this;
                e.call(this, t, n), t.on("close", function (e) {
                    i._handleSelectOnClose(e)
                })
            }, t.prototype._handleSelectOnClose = function (t, n) {
                if (n && null != n.originalSelect2Event) {
                    var i = n.originalSelect2Event;
                    if ("select" === i._type || "unselect" === i._type) return
                }
                var r = this.getHighlightedResults();
                if (!(r.length < 1)) {
                    var o = e.GetData(r[0], "data");
                    null != o.element && o.element.selected || null == o.element && o.selected || this.trigger("select", {data: o})
                }
            }, t
        }), t.define("select2/dropdown/closeOnSelect", [], function () {
            function e() {
            }

            return e.prototype.bind = function (e, t, n) {
                var i = this;
                e.call(this, t, n), t.on("select", function (e) {
                    i._selectTriggered(e)
                }), t.on("unselect", function (e) {
                    i._selectTriggered(e)
                })
            }, e.prototype._selectTriggered = function (e, t) {
                var n = t.originalEvent;
                n && n.ctrlKey || this.trigger("close", {originalEvent: n, originalSelect2Event: t})
            }, e
        }), t.define("select2/i18n/en", [], function () {
            return {
                errorLoading: function () {
                    return "The results could not be loaded."
                }, inputTooLong: function (e) {
                    var t = e.input.length - e.maximum, n = "Please delete " + t + " character";
                    return 1 != t && (n += "s"), n
                }, inputTooShort: function (e) {
                    return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                }, loadingMore: function () {
                    return "Loading more results…"
                }, maximumSelected: function (e) {
                    var t = "You can only select " + e.maximum + " item";
                    return 1 != e.maximum && (t += "s"), t
                }, noResults: function () {
                    return "No results found"
                }, searching: function () {
                    return "Searching…"
                }
            }
        }), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (e, t, n, i, r, o, s, a, l, c, u, h, d, f, p, m, g, v, y, _, b, w, D, C, x, k, S, T, E) {
            function A() {
                this.reset()
            }

            return A.prototype.apply = function (h) {
                if (null == (h = e.extend(!0, {}, this.defaults, h)).dataAdapter) {
                    if (null != h.ajax ? h.dataAdapter = p : null != h.data ? h.dataAdapter = f : h.dataAdapter = d, h.minimumInputLength > 0 && (h.dataAdapter = c.Decorate(h.dataAdapter, v)), h.maximumInputLength > 0 && (h.dataAdapter = c.Decorate(h.dataAdapter, y)), h.maximumSelectionLength > 0 && (h.dataAdapter = c.Decorate(h.dataAdapter, _)), h.tags && (h.dataAdapter = c.Decorate(h.dataAdapter, m)), null == h.tokenSeparators && null == h.tokenizer || (h.dataAdapter = c.Decorate(h.dataAdapter, g)), null != h.query) {
                        var E = t(h.amdBase + "compat/query");
                        h.dataAdapter = c.Decorate(h.dataAdapter, E)
                    }
                    if (null != h.initSelection) {
                        var A = t(h.amdBase + "compat/initSelection");
                        h.dataAdapter = c.Decorate(h.dataAdapter, A)
                    }
                }
                if (null == h.resultsAdapter && (h.resultsAdapter = n, null != h.ajax && (h.resultsAdapter = c.Decorate(h.resultsAdapter, C)), null != h.placeholder && (h.resultsAdapter = c.Decorate(h.resultsAdapter, D)), h.selectOnClose && (h.resultsAdapter = c.Decorate(h.resultsAdapter, S))), null == h.dropdownAdapter) {
                    if (h.multiple) h.dropdownAdapter = b; else {
                        var O = c.Decorate(b, w);
                        h.dropdownAdapter = O
                    }
                    if (0 !== h.minimumResultsForSearch && (h.dropdownAdapter = c.Decorate(h.dropdownAdapter, k)), h.closeOnSelect && (h.dropdownAdapter = c.Decorate(h.dropdownAdapter, T)), null != h.dropdownCssClass || null != h.dropdownCss || null != h.adaptDropdownCssClass) {
                        var M = t(h.amdBase + "compat/dropdownCss");
                        h.dropdownAdapter = c.Decorate(h.dropdownAdapter, M)
                    }
                    h.dropdownAdapter = c.Decorate(h.dropdownAdapter, x)
                }
                if (null == h.selectionAdapter) {
                    if (h.multiple ? h.selectionAdapter = r : h.selectionAdapter = i, null != h.placeholder && (h.selectionAdapter = c.Decorate(h.selectionAdapter, o)), h.allowClear && (h.selectionAdapter = c.Decorate(h.selectionAdapter, s)), h.multiple && (h.selectionAdapter = c.Decorate(h.selectionAdapter, a)), null != h.containerCssClass || null != h.containerCss || null != h.adaptContainerCssClass) {
                        var I = t(h.amdBase + "compat/containerCss");
                        h.selectionAdapter = c.Decorate(h.selectionAdapter, I)
                    }
                    h.selectionAdapter = c.Decorate(h.selectionAdapter, l)
                }
                if ("string" == typeof h.language) if (h.language.indexOf("-") > 0) {
                    var N = h.language.split("-")[0];
                    h.language = [h.language, N]
                } else h.language = [h.language];
                if (e.isArray(h.language)) {
                    var P = new u;
                    h.language.push("en");
                    for (var j = h.language, L = 0; L < j.length; L++) {
                        var Y = j[L], H = {};
                        try {
                            H = u.loadPath(Y)
                        } catch (e) {
                            try {
                                Y = this.defaults.amdLanguageBase + Y, H = u.loadPath(Y)
                            } catch (e) {
                                h.debug && window.console && console.warn && console.warn('Select2: The language file for "' + Y + '" could not be automatically loaded. A fallback will be used instead.');
                                continue
                            }
                        }
                        P.extend(H)
                    }
                    h.translations = P
                } else {
                    var $ = u.loadPath(this.defaults.amdLanguageBase + "en"), R = new u(h.language);
                    R.extend($), h.translations = R
                }
                return h
            }, A.prototype.reset = function () {
                function t(e) {
                    return e.replace(/[^\u0000-\u007E]/g, function (e) {
                        return h[e] || e
                    })
                }

                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: c.escapeMarkup,
                    language: E,
                    matcher: function n(i, r) {
                        if ("" === e.trim(i.term)) return r;
                        if (r.children && r.children.length > 0) {
                            for (var o = e.extend(!0, {}, r), s = r.children.length - 1; s >= 0; s--) null == n(i, r.children[s]) && o.children.splice(s, 1);
                            return o.children.length > 0 ? o : n(i, o)
                        }
                        var a = t(r.text).toUpperCase(), l = t(i.term).toUpperCase();
                        return a.indexOf(l) > -1 ? r : null
                    },
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    sorter: function (e) {
                        return e
                    },
                    templateResult: function (e) {
                        return e.text
                    },
                    templateSelection: function (e) {
                        return e.text
                    },
                    theme: "default",
                    width: "resolve"
                }
            }, A.prototype.set = function (t, n) {
                var i = {};
                i[e.camelCase(t)] = n;
                var r = c._convertData(i);
                e.extend(!0, this.defaults, r)
            }, new A
        }), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (e, t, n, i) {
            function r(t, r) {
                if (this.options = t, null != r && this.fromElement(r), this.options = n.apply(this.options), r && r.is("input")) {
                    var o = e(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = i.Decorate(this.options.dataAdapter, o)
                }
            }

            return r.prototype.fromElement = function (e) {
                var n = ["select2"];
                null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), i.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), i.StoreData(e[0], "data", i.GetData(e[0], "select2Tags")), i.StoreData(e[0], "tags", !0)), i.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", i.GetData(e[0], "ajaxUrl")), i.StoreData(e[0], "ajax-Url", i.GetData(e[0], "ajaxUrl")));
                var r;
                r = t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset ? t.extend(!0, {}, e[0].dataset, i.GetData(e[0])) : i.GetData(e[0]);
                var o = t.extend(!0, {}, r);
                for (var s in o = i._convertData(o)) t.inArray(s, n) > -1 || (t.isPlainObject(this.options[s]) ? t.extend(this.options[s], o[s]) : this.options[s] = o[s]);
                return this
            }, r.prototype.get = function (e) {
                return this.options[e]
            }, r.prototype.set = function (e, t) {
                this.options[e] = t
            }, r
        }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (e, t, n, i) {
            var r = function (e, i) {
                null != n.GetData(e[0], "select2") && n.GetData(e[0], "select2").destroy(), this.$element = e, this.id = this._generateId(e), i = i || {}, this.options = new t(i, e), r.__super__.constructor.call(this);
                var o = e.attr("tabindex") || 0;
                n.StoreData(e[0], "old-tabindex", o), e.attr("tabindex", "-1");
                var s = this.options.get("dataAdapter");
                this.dataAdapter = new s(e, this.options);
                var a = this.render();
                this._placeContainer(a);
                var l = this.options.get("selectionAdapter");
                this.selection = new l(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, a);
                var c = this.options.get("dropdownAdapter");
                this.dropdown = new c(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, a);
                var u = this.options.get("resultsAdapter");
                this.results = new u(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                var h = this;
                this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (e) {
                    h.trigger("selection:update", {data: e})
                }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), n.StoreData(e[0], "select2", this), e.data("select2", this)
            };
            return n.Extend(r, n.Observable), r.prototype._generateId = function (e) {
                return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
            }, r.prototype._placeContainer = function (e) {
                e.insertAfter(this.$element);
                var t = this._resolveWidth(this.$element, this.options.get("width"));
                null != t && e.css("width", t)
            }, r.prototype._resolveWidth = function (e, t) {
                var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == t) {
                    var i = this._resolveWidth(e, "style");
                    return null != i ? i : this._resolveWidth(e, "element")
                }
                if ("element" == t) {
                    var r = e.outerWidth(!1);
                    return r <= 0 ? "auto" : r + "px"
                }
                if ("style" == t) {
                    var o = e.attr("style");
                    if ("string" != typeof o) return null;
                    for (var s = o.split(";"), a = 0, l = s.length; a < l; a += 1) {
                        var c = s[a].replace(/\s/g, "").match(n);
                        if (null !== c && c.length >= 1) return c[1]
                    }
                    return null
                }
                return t
            }, r.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
            }, r.prototype._registerDomEvents = function () {
                var t = this;
                this.$element.on("change.select2", function () {
                    t.dataAdapter.current(function (e) {
                        t.trigger("selection:update", {data: e})
                    })
                }), this.$element.on("focus.select2", function (e) {
                    t.trigger("focus", e)
                }), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != i ? (this._observer = new i(function (n) {
                    e.each(n, t._syncA), e.each(n, t._syncS)
                }), this._observer.observe(this.$element[0], {
                    attributes: !0,
                    childList: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
            }, r.prototype._registerDataEvents = function () {
                var e = this;
                this.dataAdapter.on("*", function (t, n) {
                    e.trigger(t, n)
                })
            }, r.prototype._registerSelectionEvents = function () {
                var t = this, n = ["toggle", "focus"];
                this.selection.on("toggle", function () {
                    t.toggleDropdown()
                }), this.selection.on("focus", function (e) {
                    t.focus(e)
                }), this.selection.on("*", function (i, r) {
                    -1 === e.inArray(i, n) && t.trigger(i, r)
                })
            }, r.prototype._registerDropdownEvents = function () {
                var e = this;
                this.dropdown.on("*", function (t, n) {
                    e.trigger(t, n)
                })
            }, r.prototype._registerResultsEvents = function () {
                var e = this;
                this.results.on("*", function (t, n) {
                    e.trigger(t, n)
                })
            }, r.prototype._registerEvents = function () {
                var e = this;
                this.on("open", function () {
                    e.$container.addClass("select2-container--open")
                }), this.on("close", function () {
                    e.$container.removeClass("select2-container--open")
                }), this.on("enable", function () {
                    e.$container.removeClass("select2-container--disabled")
                }), this.on("disable", function () {
                    e.$container.addClass("select2-container--disabled")
                }), this.on("blur", function () {
                    e.$container.removeClass("select2-container--focus")
                }), this.on("query", function (t) {
                    e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, function (n) {
                        e.trigger("results:all", {data: n, query: t})
                    })
                }), this.on("query:append", function (t) {
                    this.dataAdapter.query(t, function (n) {
                        e.trigger("results:append", {data: n, query: t})
                    })
                }), this.on("keypress", function (t) {
                    var n = t.which;
                    e.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && t.altKey ? (e.close(), t.preventDefault()) : n === i.ENTER ? (e.trigger("results:select", {}), t.preventDefault()) : n === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : n === i.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : n === i.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && t.altKey) && (e.open(), t.preventDefault())
                })
            }, r.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
            }, r.prototype._syncSubtree = function (e, t) {
                var n = !1, i = this;
                if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                    if (t) if (t.addedNodes && t.addedNodes.length > 0) for (var r = 0; r < t.addedNodes.length; r++) {
                        t.addedNodes[r].selected && (n = !0)
                    } else t.removedNodes && t.removedNodes.length > 0 && (n = !0); else n = !0;
                    n && this.dataAdapter.current(function (e) {
                        i.trigger("selection:update", {data: e})
                    })
                }
            }, r.prototype.trigger = function (e, t) {
                var n = r.__super__.trigger, i = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting",
                    clear: "clearing"
                };
                if (void 0 === t && (t = {}), e in i) {
                    var o = i[e], s = {prevented: !1, name: e, args: t};
                    if (n.call(this, o, s), s.prevented) return void (t.prevented = !0)
                }
                n.call(this, e, t)
            }, r.prototype.toggleDropdown = function () {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
            }, r.prototype.open = function () {
                this.isOpen() || this.trigger("query", {})
            }, r.prototype.close = function () {
                this.isOpen() && this.trigger("close", {})
            }, r.prototype.isOpen = function () {
                return this.$container.hasClass("select2-container--open")
            }, r.prototype.hasFocus = function () {
                return this.$container.hasClass("select2-container--focus")
            }, r.prototype.focus = function (e) {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
            }, r.prototype.enable = function (e) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
                var t = !e[0];
                this.$element.prop("disabled", t)
            }, r.prototype.data = function () {
                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var e = [];
                return this.dataAdapter.current(function (t) {
                    e = t
                }), e
            }, r.prototype.val = function (t) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
                var n = t[0];
                e.isArray(n) && (n = e.map(n, function (e) {
                    return e.toString()
                })), this.$element.val(n).trigger("change")
            }, r.prototype.destroy = function () {
                this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", n.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), n.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
            }, r.prototype.render = function () {
                var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), n.StoreData(t[0], "element", this.$element), t
            }, r
        }), t.define("jquery-mousewheel", ["jquery"], function (e) {
            return e
        }), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function (e, t, n, i, r) {
            if (null == e.fn.select2) {
                var o = ["open", "close", "destroy"];
                e.fn.select2 = function (t) {
                    if ("object" == typeof (t = t || {})) return this.each(function () {
                        var i = e.extend(!0, {}, t);
                        new n(e(this), i)
                    }), this;
                    if ("string" == typeof t) {
                        var i, s = Array.prototype.slice.call(arguments, 1);
                        return this.each(function () {
                            var e = r.GetData(this, "select2");
                            null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), i = e[t].apply(e, s)
                        }), e.inArray(t, o) > -1 ? this : i
                    }
                    throw new Error("Invalid arguments for Select2: " + t)
                }
            }
            return null == e.fn.select2.defaults && (e.fn.select2.defaults = i), n
        }), {define: t.define, require: t.require}
    }(), n = t.require("jquery.select2");
    return e.fn.select2.amd = t, n
});
var $jscomp = {
    scope: {}, findInternal: function (e, t, n) {
        e instanceof String && (e = String(e));
        for (var i = e.length, r = 0; r < i; r++) {
            var o = e[r];
            if (t.call(n, o, r, e)) return {i: r, v: o}
        }
        return {i: -1, v: void 0}
    }
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (e, t, n) {
    if (n.get || n.set) throw new TypeError("ES3 does not support getters and setters.");
    e != Array.prototype && e != Object.prototype && (e[t] = n.value)
}, $jscomp.getGlobal = function (e) {
    return "undefined" != typeof window && window === e ? e : "undefined" != typeof global && null != global ? global : e
}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.polyfill = function (e, t, n, i) {
    if (t) {
        for (n = $jscomp.global, e = e.split("."), i = 0; i < e.length - 1; i++) {
            var r = e[i];
            r in n || (n[r] = {}), n = n[r]
        }
        (t = t(i = n[e = e[e.length - 1]])) != i && null != t && $jscomp.defineProperty(n, e, {
            configurable: !0,
            writable: !0,
            value: t
        })
    }
}, $jscomp.polyfill("Array.prototype.find", function (e) {
    return e || function (e, t) {
        return $jscomp.findInternal(this, e, t).v
    }
}, "es6-impl", "es3"), function (e, t, n) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(t || n)
}(function (e) {
    var t = function (t, n, i) {
        var r = {
            invalid: [], getCaret: function () {
                try {
                    var e, n = 0, i = t.get(0), o = document.selection, s = i.selectionStart;
                    return o && -1 === navigator.appVersion.indexOf("MSIE 10") ? ((e = o.createRange()).moveStart("character", -r.val().length), n = e.text.length) : (s || "0" === s) && (n = s), n
                } catch (e) {
                }
            }, setCaret: function (e) {
                try {
                    if (t.is(":focus")) {
                        var n, i = t.get(0);
                        i.setSelectionRange ? i.setSelectionRange(e, e) : ((n = i.createTextRange()).collapse(!0), n.moveEnd("character", e), n.moveStart("character", e), n.select())
                    }
                } catch (e) {
                }
            }, events: function () {
                t.on("keydown.mask", function (e) {
                    t.data("mask-keycode", e.keyCode || e.which), t.data("mask-previus-value", t.val()), t.data("mask-previus-caret-pos", r.getCaret()), r.maskDigitPosMapOld = r.maskDigitPosMap
                }).on(e.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", r.behaviour).on("paste.mask drop.mask", function () {
                    setTimeout(function () {
                        t.keydown().keyup()
                    }, 100)
                }).on("change.mask", function () {
                    t.data("changed", !0)
                }).on("blur.mask", function () {
                    a === r.val() || t.data("changed") || t.trigger("change"), t.data("changed", !1)
                }).on("blur.mask", function () {
                    a = r.val()
                }).on("focus.mask", function (t) {
                    !0 === i.selectOnFocus && e(t.target).select()
                }).on("focusout.mask", function () {
                    i.clearIfNotMatch && !o.test(r.val()) && r.val("")
                })
            }, getRegexMask: function () {
                for (var e, t, i, r, o = [], a = 0; a < n.length; a++) (e = s.translation[n.charAt(a)]) ? (t = e.pattern.toString().replace(/.{1}$|^.{1}/g, ""), i = e.optional, (e = e.recursive) ? (o.push(n.charAt(a)), r = {
                    digit: n.charAt(a),
                    pattern: t
                }) : o.push(i || e ? t + "?" : t)) : o.push(n.charAt(a).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                return o = o.join(""), r && (o = o.replace(new RegExp("(" + r.digit + "(.*" + r.digit + ")?)"), "($1)?").replace(new RegExp(r.digit, "g"), r.pattern)), new RegExp(o)
            }, destroyEvents: function () {
                t.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
            }, val: function (e) {
                var n = t.is("input") ? "val" : "text";
                return 0 < arguments.length ? (t[n]() !== e && t[n](e), n = t) : n = t[n](), n
            }, calculateCaretPosition: function () {
                var e = t.data("mask-previus-value") || "", n = r.getMasked(), i = r.getCaret();
                if (e !== n) {
                    var o, s = t.data("mask-previus-caret-pos") || 0, a = (n = n.length, e.length), l = e = 0, c = 0,
                        u = 0;
                    for (o = i; o < n && r.maskDigitPosMap[o]; o++) l++;
                    for (o = i - 1; 0 <= o && r.maskDigitPosMap[o]; o--) e++;
                    for (o = i - 1; 0 <= o; o--) r.maskDigitPosMap[o] && c++;
                    for (o = s - 1; 0 <= o; o--) r.maskDigitPosMapOld[o] && u++;
                    i > a ? i = 10 * n : s >= i && s !== a ? r.maskDigitPosMapOld[i] || (s = i, i = i - (u - c) - e, r.maskDigitPosMap[i] && (i = s)) : i > s && (i = i + (c - u) + l)
                }
                return i
            }, behaviour: function (n) {
                n = n || window.event, r.invalid = [];
                var i = t.data("mask-keycode");
                if (-1 === e.inArray(i, s.byPassKeys)) {
                    i = r.getMasked();
                    var o = r.getCaret();
                    return setTimeout(function () {
                        r.setCaret(r.calculateCaretPosition())
                    }, e.jMaskGlobals.keyStrokeCompensation), r.val(i), r.setCaret(o), r.callbacks(n)
                }
            }, getMasked: function (e, t) {
                var o, a, l, c = [], u = void 0 === t ? r.val() : t + "", h = 0, d = n.length, f = 0, p = u.length,
                    m = 1, g = "push", v = -1, y = 0, _ = [];
                for (i.reverse ? (g = "unshift", m = -1, o = 0, h = d - 1, f = p - 1, a = function () {
                    return -1 < h && -1 < f
                }) : (o = d - 1, a = function () {
                    return h < d && f < p
                }); a();) {
                    var b = n.charAt(h), w = u.charAt(f), D = s.translation[b];
                    D ? (w.match(D.pattern) ? (c[g](w), D.recursive && (-1 === v ? v = h : h === o && h !== v && (h = v - m), o === v && (h -= m)), h += m) : w === l ? (y--, l = void 0) : D.optional ? (h += m, f -= m) : D.fallback ? (c[g](D.fallback), h += m, f -= m) : r.invalid.push({
                        p: f,
                        v: w,
                        e: D.pattern
                    }), f += m) : (e || c[g](b), w === b ? (_.push(f), f += m) : (l = b, _.push(f + y), y++), h += m)
                }
                return u = n.charAt(o), d !== p + 1 || s.translation[u] || c.push(u), c = c.join(""), r.mapMaskdigitPositions(c, _, p), c
            }, mapMaskdigitPositions: function (e, t, n) {
                for (e = i.reverse ? e.length - n : 0, r.maskDigitPosMap = {}, n = 0; n < t.length; n++) r.maskDigitPosMap[t[n] + e] = 1
            }, callbacks: function (e) {
                var o = r.val(), s = o !== a, l = [o, e, t, i], c = function (e, t, n) {
                    "function" == typeof i[e] && t && i[e].apply(this, n)
                };
                c("onChange", !0 === s, l), c("onKeyPress", !0 === s, l), c("onComplete", o.length === n.length, l), c("onInvalid", 0 < r.invalid.length, [o, e, t, r.invalid, i])
            }
        };
        t = e(t);
        var o, s = this, a = r.val();
        n = "function" == typeof n ? n(r.val(), void 0, t, i) : n, s.mask = n, s.options = i, s.remove = function () {
            var e = r.getCaret();
            return s.options.placeholder && t.removeAttr("placeholder"), t.data("mask-maxlength") && t.removeAttr("maxlength"), r.destroyEvents(), r.val(s.getCleanVal()), r.setCaret(e), t
        }, s.getCleanVal = function () {
            return r.getMasked(!0)
        }, s.getMaskedVal = function (e) {
            return r.getMasked(!1, e)
        }, s.init = function (a) {
            if (a = a || !1, i = i || {}, s.clearIfNotMatch = e.jMaskGlobals.clearIfNotMatch, s.byPassKeys = e.jMaskGlobals.byPassKeys, s.translation = e.extend({}, e.jMaskGlobals.translation, i.translation), s = e.extend(!0, {}, s, i), o = r.getRegexMask(), a) r.events(), r.val(r.getMasked()); else {
                i.placeholder && t.attr("placeholder", i.placeholder), t.data("mask") && t.attr("autocomplete", "off"), a = 0;
                for (var l = !0; a < n.length; a++) {
                    var c = s.translation[n.charAt(a)];
                    if (c && c.recursive) {
                        l = !1;
                        break
                    }
                }
                l && t.attr("maxlength", n.length).data("mask-maxlength", !0), r.destroyEvents(), r.events(), a = r.getCaret(), r.val(r.getMasked()), r.setCaret(a)
            }
        }, s.init(!t.is("input"))
    };
    e.maskWatchers = {};
    var n = function () {
        var n = e(this), r = {}, o = n.attr("data-mask");
        if (n.attr("data-mask-reverse") && (r.reverse = !0), n.attr("data-mask-clearifnotmatch") && (r.clearIfNotMatch = !0), "true" === n.attr("data-mask-selectonfocus") && (r.selectOnFocus = !0), i(n, o, r)) return n.data("mask", new t(this, o, r))
    }, i = function (t, n, i) {
        i = i || {};
        var r = e(t).data("mask"), o = JSON.stringify;
        t = e(t).val() || e(t).text();
        try {
            return "function" == typeof n && (n = n(t)), "object" != typeof r || o(r.options) !== o(i) || r.mask !== n
        } catch (e) {
        }
    }, r = function (e) {
        var t, n = document.createElement("div");
        return (t = (e = "on" + e) in n) || (n.setAttribute(e, "return;"), t = "function" == typeof n[e]), t
    };
    e.fn.mask = function (n, r) {
        r = r || {};
        var o = this.selector, s = (a = e.jMaskGlobals).watchInterval, a = r.watchInputs || a.watchInputs,
            l = function () {
                if (i(this, n, r)) return e(this).data("mask", new t(this, n, r))
            };
        return e(this).each(l), o && "" !== o && a && (clearInterval(e.maskWatchers[o]), e.maskWatchers[o] = setInterval(function () {
            e(document).find(o).each(l)
        }, s)), this
    }, e.fn.masked = function (e) {
        return this.data("mask").getMaskedVal(e)
    }, e.fn.unmask = function () {
        return clearInterval(e.maskWatchers[this.selector]), delete e.maskWatchers[this.selector], this.each(function () {
            var t = e(this).data("mask");
            t && t.remove().removeData("mask")
        })
    }, e.fn.cleanVal = function () {
        return this.data("mask").getCleanVal()
    }, e.applyDataMask = function (t) {
        ((t = t || e.jMaskGlobals.maskElements) instanceof e ? t : e(t)).filter(e.jMaskGlobals.dataMaskAttr).each(n)
    }, r = {
        maskElements: "input,td,span,div",
        dataMaskAttr: "*[data-mask]",
        dataMask: !0,
        watchInterval: 300,
        watchInputs: !0,
        keyStrokeCompensation: 10,
        useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && r("input"),
        watchDataMask: !1,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            0: {pattern: /\d/},
            9: {pattern: /\d/, optional: !0},
            "#": {pattern: /\d/, recursive: !0},
            A: {pattern: /[a-zA-Z0-9]/},
            S: {pattern: /[a-zA-Z]/}
        }
    }, e.jMaskGlobals = e.jMaskGlobals || {}, (r = e.jMaskGlobals = e.extend(!0, {}, r, e.jMaskGlobals)).dataMask && e.applyDataMask(), setInterval(function () {
        e.jMaskGlobals.watchDataMask && e.applyDataMask()
    }, r.watchInterval)
}, window.jQuery, window.Zepto), function (e) {
    e.fn.bootstrapWizard = function (t) {
        if ("string" == typeof t) {
            var n = Array.prototype.slice.call(arguments, 1);
            return 1 === n.length && n.toString(), this.data("bootstrapWizard")[t](n)
        }
        return this.each(function (n) {
            if (!(n = e(this)).data("bootstrapWizard")) {
                var i = new function (t, n) {
                    t = e(t);
                    var i = this, r = [], o = e.extend({}, e.fn.bootstrapWizard.defaults, n), s = null, a = null;
                    this.rebindClick = function (e, t) {
                        e.unbind("click", t).bind("click", t)
                    }, this.fixNavigationButtons = function () {
                        if (s.length || (a.find("a:first").tab("show"), s = a.find('li:has([data-toggle="tab"]):first')), e(o.previousSelector, t).toggleClass("disabled", i.firstIndex() >= i.currentIndex()), e(o.nextSelector, t).toggleClass("disabled", i.currentIndex() >= i.navigationLength()), e(o.backSelector, t).toggleClass("disabled", 0 == r.length), i.rebindClick(e(o.nextSelector, t), i.next), i.rebindClick(e(o.previousSelector, t), i.previous), i.rebindClick(e(o.lastSelector, t), i.last), i.rebindClick(e(o.firstSelector, t), i.first), i.rebindClick(e(o.backSelector, t), i.back), o.onTabShow && "function" == typeof o.onTabShow && !1 === o.onTabShow(s, a, i.currentIndex())) return !1
                    }, this.next = function (e) {
                        if (t.hasClass("last") || o.onNext && "function" == typeof o.onNext && !1 === o.onNext(s, a, i.nextIndex())) return !1;
                        e = i.currentIndex(), $index = i.nextIndex(), $index > i.navigationLength() || (r.push(e), a.find('li:has([data-toggle="tab"]):eq(' + $index + ") a").tab("show"))
                    }, this.previous = function (e) {
                        if (t.hasClass("first") || o.onPrevious && "function" == typeof o.onPrevious && !1 === o.onPrevious(s, a, i.previousIndex())) return !1;
                        e = i.currentIndex(), $index = i.previousIndex(), 0 > $index || (r.push(e), a.find('li:has([data-toggle="tab"]):eq(' + $index + ") a").tab("show"))
                    }, this.first = function (e) {
                        if (o.onFirst && "function" == typeof o.onFirst && !1 === o.onFirst(s, a, i.firstIndex()) || t.hasClass("disabled")) return !1;
                        r.push(i.currentIndex()), a.find('li:has([data-toggle="tab"]):eq(0) a').tab("show")
                    }, this.last = function (e) {
                        if (o.onLast && "function" == typeof o.onLast && !1 === o.onLast(s, a, i.lastIndex()) || t.hasClass("disabled")) return !1;
                        r.push(i.currentIndex()), a.find('li:has([data-toggle="tab"]):eq(' + i.navigationLength() + ") a").tab("show")
                    }, this.back = function () {
                        if (0 == r.length) return null;
                        var e = r.pop();
                        if (o.onBack && "function" == typeof o.onBack && !1 === o.onBack(s, a, e)) return r.push(e), !1;
                        t.find('li:has([data-toggle="tab"]):eq(' + e + ") a").tab("show")
                    }, this.currentIndex = function () {
                        return a.find('li:has([data-toggle="tab"])').index(s)
                    }, this.firstIndex = function () {
                        return 0
                    }, this.lastIndex = function () {
                        return i.navigationLength()
                    }, this.getIndex = function (e) {
                        return a.find('li:has([data-toggle="tab"])').index(e)
                    }, this.nextIndex = function () {
                        return a.find('li:has([data-toggle="tab"])').index(s) + 1
                    }, this.previousIndex = function () {
                        return a.find('li:has([data-toggle="tab"])').index(s) - 1
                    }, this.navigationLength = function () {
                        return a.find('li:has([data-toggle="tab"])').length - 1
                    }, this.activeTab = function () {
                        return s
                    }, this.nextTab = function () {
                        return a.find('li:has([data-toggle="tab"]):eq(' + (i.currentIndex() + 1) + ")").length ? a.find('li:has([data-toggle="tab"]):eq(' + (i.currentIndex() + 1) + ")") : null
                    }, this.previousTab = function () {
                        return 0 >= i.currentIndex() ? null : a.find('li:has([data-toggle="tab"]):eq(' + parseInt(i.currentIndex() - 1) + ")")
                    }, this.show = function (e) {
                        0 < (e = isNaN(e) ? t.find('li:has([data-toggle="tab"]) a[href=#' + e + "]") : t.find('li:has([data-toggle="tab"]):eq(' + e + ") a")).length && (r.push(i.currentIndex()), e.tab("show"))
                    }, this.disable = function (e) {
                        a.find('li:has([data-toggle="tab"]):eq(' + e + ")").addClass("disabled")
                    }, this.enable = function (e) {
                        a.find('li:has([data-toggle="tab"]):eq(' + e + ")").removeClass("disabled")
                    }, this.hide = function (e) {
                        a.find('li:has([data-toggle="tab"]):eq(' + e + ")").hide()
                    }, this.display = function (e) {
                        a.find('li:has([data-toggle="tab"]):eq(' + e + ")").show()
                    }, this.remove = function (t) {
                        var n = void 0 !== t[1] && t[1];
                        t = a.find('li:has([data-toggle="tab"]):eq(' + t[0] + ")"), n && (n = t.find("a").attr("href"), e(n).remove()), t.remove()
                    };
                    var l = function (t) {
                        var n = a.find('li:has([data-toggle="tab"])');
                        if (t = n.index(e(t.currentTarget).parent('li:has([data-toggle="tab"])')), n = e(n[t]), o.onTabClick && "function" == typeof o.onTabClick && !1 === o.onTabClick(s, a, i.currentIndex(), t, n)) return !1
                    }, c = function (t) {
                        if ($element = e(t.target).parent(), t = a.find('li:has([data-toggle="tab"])').index($element), $element.hasClass("disabled") || o.onTabChange && "function" == typeof o.onTabChange && !1 === o.onTabChange(s, a, i.currentIndex(), t)) return !1;
                        s = $element, i.fixNavigationButtons()
                    };
                    this.resetWizard = function () {
                        e('a[data-toggle="tab"]', a).off("click", l), e('a[data-toggle="tab"]', a).off("shown shown.bs.tab", c), a = t.find("ul:first", t), s = a.find('li:has([data-toggle="tab"]).active', t), e('a[data-toggle="tab"]', a).on("click", l), e('a[data-toggle="tab"]', a).on("shown shown.bs.tab", c), i.fixNavigationButtons()
                    }, a = t.find("ul:first", t), s = a.find('li:has([data-toggle="tab"]).active', t), a.hasClass(o.tabClass) || a.addClass(o.tabClass), o.onInit && "function" == typeof o.onInit && o.onInit(s, a, 0), o.onShow && "function" == typeof o.onShow && o.onShow(s, a, i.nextIndex()), e('a[data-toggle="tab"]', a).on("click", l), e('a[data-toggle="tab"]', a).on("shown shown.bs.tab", c)
                }(n, t);
                n.data("bootstrapWizard", i), i.fixNavigationButtons()
            }
        })
    }, e.fn.bootstrapWizard.defaults = {
        tabClass: "nav nav-pills",
        nextSelector: ".wizard li.next",
        previousSelector: ".wizard li.previous",
        firstSelector: ".wizard li.first",
        lastSelector: ".wizard li.last",
        backSelector: ".wizard li.back",
        onShow: null,
        onInit: null,
        onNext: null,
        onPrevious: null,
        onLast: null,
        onFirst: null,
        onBack: null,
        onTabChange: null,
        onTabClick: null,
        onTabShow: null
    }
}(jQuery), function (e) {
    "use strict";
    var t = function () {
        this.$body = e("body"), this.$portletIdentifier = ".card", this.$portletCloser = '.card a[data-toggle="remove"]', this.$portletRefresher = '.card a[data-toggle="reload"]'
    };
    t.prototype.init = function () {
        var t = this;
        e(document).on("click", this.$portletCloser, function (n) {
            n.preventDefault();
            var i = e(this).closest(t.$portletIdentifier), r = i.parent();
            i.remove(), 0 == r.children().length && r.remove()
        }), e(document).on("click", this.$portletRefresher, function (n) {
            n.preventDefault();
            var i = e(this).closest(t.$portletIdentifier);
            i.append('<div class="card-disabled"><div class="card-portlets-loader"></div></div>');
            var r = i.find(".card-disabled");
            setTimeout(function () {
                r.fadeOut("fast", function () {
                    r.remove()
                })
            }, 500 + 5 * Math.random() * 300)
        })
    }, e.Portlet = new t, e.Portlet.Constructor = t
}(window.jQuery), function (e) {
    "use strict";
    var t = function () {
        this.$body = e("body"), this.$window = e(window)
    };
    t.prototype.initSelect2 = function () {
        e('[data-toggle="select2"]').select2()
    }, t.prototype.initMask = function () {
        e('[data-toggle="input-mask"]').each(function (t, n) {
            var i = e(n).data("maskFormat"), r = e(n).data("reverse");
            null != r ? e(n).mask(i, {reverse: r}) : e(n).mask(i)
        })
    }, t.prototype.initDateRange = function () {
        var t = {cancelClass: "btn-light", applyButtonClasses: "btn-success"};
        e('[data-toggle="date-picker"]').each(function (n, i) {
            var r = e.extend({}, t, e(i).data());
            e(i).daterangepicker(r)
        });
        var n = {
            startDate: moment().subtract(29, "days"),
            endDate: moment(),
            ranges: {
                Today: [moment(), moment()],
                Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
                "Last 7 Days": [moment().subtract(6, "days"), moment()],
                "Last 30 Days": [moment().subtract(29, "days"), moment()],
                "This Month": [moment().startOf("month"), moment().endOf("month")],
                "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
            }
        };
        e('[data-toggle="date-picker-range"]').each(function (t, i) {
            var r = e.extend({}, n, e(i).data()), o = r.targetDisplay;
            e(i).daterangepicker(r, function (t, n) {
                o && e(o).html(t.format("MMMM D, YYYY") + " - " + n.format("MMMM D, YYYY"))
            })
        })
    }, t.prototype.init = function () {
        this.initSelect2(), this.initMask(), this.initDateRange()
    }, e.AdvanceFormApp = new t, e.AdvanceFormApp.Constructor = t
}(window.jQuery), function (e) {
    "use strict";
    var t = function () {
    };
    t.prototype.send = function (t, n, i, r, o, s, a, l) {
        s || (s = 3e3), a || (a = 1);
        var c = {heading: t, text: n, position: i, loaderBg: r, icon: o, hideAfter: s, stack: a};
        c.showHideTransition = l || "fade", e.toast().reset("all"), e.toast(c)
    }, e.NotificationApp = new t, e.NotificationApp.Constructor = t
}(window.jQuery), function (e) {
    "use strict";
    var t = function () {
    };
    t.prototype.initTooltipPlugin = function () {
        e.fn.tooltip && e('[data-toggle="tooltip"]').tooltip()
    }, t.prototype.initPopoverPlugin = function () {
        e.fn.popover && e('[data-toggle="popover"]').popover()
    }, t.prototype.initSlimScrollPlugin = function () {
        e.fn.slimScroll && e(".slimscroll").slimScroll({
            height: "auto",
            position: "right",
            size: "8px",
            touchScrollStep: 20,
            color: "#9ea5ab"
        })
    }, t.prototype.initFormValidation = function () {
        e(".needs-validation").on("submit", function (t) {
            return e(this).addClass("was-validated"), !1 !== e(this)[0].checkValidity() || (t.preventDefault(), t.stopPropagation(), !1)
        })
    }, t.prototype.init = function () {
        this.initTooltipPlugin(), this.initPopoverPlugin(), this.initSlimScrollPlugin(), this.initFormValidation()
    }, e.Components = new t, e.Components.Constructor = t
}(window.jQuery), function (e) {
    "use strict";
    var t = function () {
        this.$body = e("body"), this.$window = e(window)
    };
    t.prototype._resetSidebarScroll = function () {
        e(".slimscroll-menu").slimscroll({
            height: "auto",
            position: "right",
            size: "8px",
            color: "#9ea5ab",
            wheelStep: 5,
            touchScrollStep: 20
        })
    }, t.prototype.initMenu = function () {
        var t = this;
        e(".button-menu-mobile").on("click", function (e) {
            e.preventDefault(), t.$window.width() < 768 && t.$body.toggleClass("sidebar-enable"), t._resetSidebarScroll()
        }), e(".side-nav").metisMenu(), t._resetSidebarScroll(), e(".right-bar-toggle").on("click", function (t) {
            e("body").toggleClass("right-bar-enabled")
        }), e(document).on("click", "body", function (t) {
            e(t.target).closest(".right-bar-toggle, .right-bar").length > 0 || e(t.target).closest(".left-side-menu, .side-nav").length > 0 || e(t.target).hasClass("button-menu-mobile") || e(t.target).closest(".button-menu-mobile").length > 0 || (e("body").removeClass("right-bar-enabled"), e("body").removeClass("sidebar-enable"))
        }), e(".side-nav a").each(function () {
            var t = window.location.href.split(/[?#]/)[0];
            this.href == t && (e(this).addClass("active"), e(this).parent().addClass("active"), e(this).parent().parent().addClass("in"), e(this).parent().parent().prev().addClass("active"), e(this).parent().parent().parent().addClass("active"), e(this).parent().parent().parent().parent().addClass("in"), e(this).parent().parent().parent().parent().parent().addClass("active"))
        })
    }, t.prototype.initLayout = function () {
        this.$window.width() >= 768 && this.$window.width() <= 1028 ? this.$body.addClass("enlarged") : 1 != this.$body.data("keep-enlarged") && this.$body.removeClass("enlarged")
    }, t.prototype.init = function () {
        var t = this;
        this.initLayout(), this.initMenu(), e.Portlet.init(), e.AdvanceFormApp.init(), e.Components.init(), t.$window.on("resize", function (e) {
            e.preventDefault(), t.initLayout(), t._resetSidebarScroll()
        })
    }, e.App = new t, e.App.Constructor = t
}(window.jQuery), function (e) {
    "use strict";
    e.App.init()
}(window.jQuery);
