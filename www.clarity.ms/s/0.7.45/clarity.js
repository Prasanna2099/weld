/* clarity-js v0.7.45: https://github.com/microsoft/clarity (License: MIT) */ ! function() {
    "use strict";
    var t = Object.freeze({
            __proto__: null,
            get queue() {
                return sr
            },
            get start() {
                return cr
            },
            get stop() {
                return lr
            },
            get track() {
                return ar
            }
        }),
        e = Object.freeze({
            __proto__: null,
            get clone() {
                return Cr
            },
            get compute() {
                return Dr
            },
            get data() {
                return Er
            },
            get keys() {
                return Or
            },
            get reset() {
                return jr
            },
            get start() {
                return _r
            },
            get stop() {
                return Rr
            },
            get trigger() {
                return Ir
            },
            get update() {
                return Ar
            }
        }),
        n = Object.freeze({
            __proto__: null,
            get check() {
                return Xr
            },
            get compute() {
                return qr
            },
            get data() {
                return Sr
            },
            get start() {
                return Wr
            },
            get stop() {
                return Ur
            },
            get trigger() {
                return Yr
            }
        }),
        a = Object.freeze({
            __proto__: null,
            get compute() {
                return Kr
            },
            get data() {
                return Fr
            },
            get log() {
                return Gr
            },
            get reset() {
                return Zr
            },
            get start() {
                return Br
            },
            get stop() {
                return Jr
            },
            get updates() {
                return Vr
            }
        }),
        r = Object.freeze({
            __proto__: null,
            get callbacks() {
                return $r
            },
            get clear() {
                return ui
            },
            get consent() {
                return oi
            },
            get data() {
                return Qr
            },
            get electron() {
                return ti
            },
            get id() {
                return ii
            },
            get metadata() {
                return ri
            },
            get save() {
                return ci
            },
            get shortid() {
                return di
            },
            get start() {
                return ni
            },
            get stop() {
                return ai
            }
        }),
        i = Object.freeze({
            __proto__: null,
            get data() {
                return yi
            },
            get envelope() {
                return ki
            },
            get start() {
                return bi
            },
            get stop() {
                return wi
            }
        }),
        o = {
            projectId: null,
            delay: 1e3,
            lean: !1,
            track: !0,
            content: !0,
            drop: [],
            mask: [],
            unmask: [],
            regions: [],
            cookies: [],
            fraud: !0,
            checksum: [],
            report: null,
            upload: null,
            fallback: null,
            upgrade: null,
            action: null,
            dob: null,
            delayDom: !1,
            throttleDom: !0,
            conversions: !1
        };

    function u(t) {
        return window.Zone && "__symbol__" in window.Zone ? window.Zone.__symbol__(t) : t
    }
    var c = 0;

    function s(t) {
        void 0 === t && (t = null);
        var e = t && t.timeStamp > 0 ? t.timeStamp : performance.now(),
            n = t && t.view ? t.view.performance.timeOrigin : performance.timeOrigin;
        return Math.max(Math.round(e + n - c), 0)
    }
    var l = "0.7.45";

    function d(t, e) {
        void 0 === e && (e = null);
        for (var n, a = 5381, r = a, i = 0; i < t.length; i += 2) {
            if (a = (a << 5) + a ^ t.charCodeAt(i), i + 1 < t.length) r = (r << 5) + r ^ t.charCodeAt(i + 1)
        }
        return n = Math.abs(a + 11579 * r), (e ? n % Math.pow(2, e) : n).toString(36)
    }
    var f = /\S/gi,
        h = !0,
        p = null,
        v = null,
        g = null;

    function m(t, e, n, a) {
        if (void 0 === a && (a = !1), t) switch (n) {
            case 0:
                return t;
            case 1:
                switch (e) {
                    case "*T":
                    case "value":
                    case "placeholder":
                    case "click":
                        return function(t) {
                            var e = -1,
                                n = 0,
                                a = !1,
                                r = !1,
                                i = !1,
                                o = null;
                            E();
                            for (var u = 0; u < t.length; u++) {
                                var c = t.charCodeAt(u);
                                if (a = a || c >= 48 && c <= 57, r = r || 64 === c, i = 9 === c || 10 === c || 13 === c || 32 === c, 0 === u || u === t.length - 1 || i) {
                                    if (a || r) {
                                        null === o && (o = t.split(""));
                                        var s = t.substring(e + 1, i ? u : u + 1);
                                        s = h && null !== g ? s.match(g) ? s : k(s, "▪", "▫") : w(s), o.splice(e + 1 - n, s.length, s), n += s.length - 1
                                    }
                                    i && (a = !1, r = !1, e = u)
                                }
                            }
                            return o ? o.join("") : t
                        }(t);
                    case "input":
                    case "change":
                        return S(t)
                }
                return t;
            case 2:
            case 3:
                switch (e) {
                    case "*T":
                    case "data-":
                        return a ? b(t) : w(t);
                    case "src":
                    case "srcset":
                    case "title":
                    case "alt":
                        return 3 === n ? "" : t;
                    case "value":
                    case "click":
                    case "input":
                    case "change":
                        return S(t);
                    case "placeholder":
                        return w(t)
                }
                break;
            case 4:
                switch (e) {
                    case "*T":
                    case "data-":
                        return a ? b(t) : w(t);
                    case "value":
                    case "input":
                    case "click":
                    case "change":
                        return Array(5).join("•");
                    case "checksum":
                        return ""
                }
                break;
            case 5:
                switch (e) {
                    case "*T":
                    case "data-":
                        return k(t, "▪", "▫");
                    case "value":
                    case "input":
                    case "click":
                    case "change":
                        return Array(5).join("•");
                    case "checksum":
                    case "src":
                    case "srcset":
                    case "alt":
                    case "title":
                        return ""
                }
        }
        return t
    }

    function y(t, e) {
        if (void 0 === e && (e = !1), e) return "".concat("https://").concat("Electron");
        var n = o.drop;
        if (n && n.length > 0 && t && t.indexOf("?") > 0) {
            var a = t.split("?"),
                r = a[0],
                i = a[1];
            return r + "?" + i.split("&").map((function(t) {
                return n.some((function(e) {
                    return 0 === t.indexOf("".concat(e, "="))
                })) ? "".concat(t.split("=")[0], "=").concat("*na*") : t
            })).join("&")
        }
        return t
    }

    function b(t) {
        var e = t.trim();
        if (e.length > 0) {
            var n = e[0],
                a = t.indexOf(n),
                r = t.substr(0, a),
                i = t.substr(a + e.length);
            return "".concat(r).concat(e.length.toString(36)).concat(i)
        }
        return t
    }

    function w(t) {
        return t.replace(f, "•")
    }

    function k(t, e, n) {
        return E(), t ? t.replace(v, e).replace(p, n) : t
    }

    function S(t) {
        for (var e = 5 * (Math.floor(t.length / 5) + 1), n = "", a = 0; a < e; a++) n += a > 0 && a % 5 == 0 ? " " : "•";
        return n
    }

    function E() {
        if (h && null === p) try {
            p = new RegExp("\\p{N}", "gu"), v = new RegExp("\\p{L}", "gu"), g = new RegExp("\\p{Sc}", "gu")
        } catch (t) {
            h = !1
        }
    }
    var O = null,
        N = null,
        T = !1;

    function M() {
        T && (O = {
            time: s(),
            event: 4,
            data: {
                visible: N.visible,
                docWidth: N.docWidth,
                docHeight: N.docHeight,
                screenWidth: N.screenWidth,
                screenHeight: N.screenHeight,
                scrollX: N.scrollX,
                scrollY: N.scrollY,
                pointerX: N.pointerX,
                pointerY: N.pointerY,
                activityTime: N.activityTime,
                scrollTime: N.scrollTime
            }
        }), N = N || {
            visible: 1,
            docWidth: 0,
            docHeight: 0,
            screenWidth: 0,
            screenHeight: 0,
            scrollX: 0,
            scrollY: 0,
            pointerX: 0,
            pointerY: 0,
            activityTime: 0,
            scrollTime: 0
        }
    }

    function x(t, e, n, a) {
        switch (t) {
            case 8:
                N.docWidth = e, N.docHeight = n;
                break;
            case 11:
                N.screenWidth = e, N.screenHeight = n;
                break;
            case 10:
                N.scrollX = e, N.scrollY = n, N.scrollTime = a;
                break;
            default:
                N.pointerX = e, N.pointerY = n
        }
        T = !0
    }

    function _(t) {
        N.activityTime = t
    }

    function I(t, e) {
        N.visible = "visible" === e ? 1 : 0, N.visible || _(t), T = !0
    }

    function C() {
        T && Pr(4)
    }
    var D = Object.freeze({
            __proto__: null,
            activity: _,
            compute: C,
            reset: M,
            start: function() {
                T = !1, M()
            },
            get state() {
                return O
            },
            stop: function() {
                M()
            },
            track: x,
            visibility: I
        }),
        j = null;

    function A(t, e) {
        Pi() && t && "string" == typeof t && t.length < 255 && (j = e && "string" == typeof e && e.length < 255 ? {
            key: t,
            value: e
        } : {
            value: t
        }, Pr(24))
    }
    var R, L = null,
        z = null;

    function H(t) {
        t in L || (L[t] = 0), t in z || (z[t] = 0), L[t]++, z[t]++
    }

    function P(t, e) {
        null !== e && (t in L || (L[t] = 0), t in z || (z[t] = 0), L[t] += e, z[t] += e)
    }

    function W(t, e) {
        null !== e && !1 === isNaN(e) && (t in L || (L[t] = 0), (e > L[t] || 0 === L[t]) && (z[t] = e, L[t] = e))
    }

    function X(t, e, n) {
        return window.setTimeout(Oi(t), e, n)
    }

    function Y(t) {
        return window.clearTimeout(t)
    }
    var q = 0,
        U = 0,
        F = null;

    function V() {
        F && Y(F), F = X(B, U), q = s()
    }

    function B() {
        var t = s();
        R = {
            gap: t - q
        }, Pr(25), R.gap < 3e5 ? F = X(B, U) : Li && (A("clarity", "suspend"), eo(), ["mousemove", "touchstart"].forEach((function(t) {
            return Ti(document, t, Xi)
        })), ["resize", "scroll", "pageshow"].forEach((function(t) {
            return Ti(window, t, Xi)
        })))
    }
    var J = Object.freeze({
            __proto__: null,
            get data() {
                return R
            },
            reset: V,
            start: function() {
                U = 6e4, q = 0
            },
            stop: function() {
                Y(F), q = 0, U = 0
            }
        }),
        G = null;

    function K(t, e) {
        if (t in G) {
            var n = G[t],
                a = n[n.length - 1];
            e - a[0] > 100 ? G[t].push([e, 0]) : a[1] = e - a[0]
        } else G[t] = [
            [e, 0]
        ]
    }

    function Z() {
        Pr(36)
    }

    function Q() {
        G = {}
    }
    var $ = Object.freeze({
            __proto__: null,
            compute: Z,
            get data() {
                return G
            },
            reset: Q,
            start: function() {
                G = {}
            },
            stop: function() {
                G = {}
            },
            track: K
        }),
        tt = null;

    function et(t) {
        Pi() && o.lean && (o.lean = !1, tt = {
            key: t
        }, ci(), o.upgrade && o.upgrade(t), Pr(3))
    }
    var nt = Object.freeze({
        __proto__: null,
        get data() {
            return tt
        },
        start: function() {
            !o.lean && o.upgrade && o.upgrade("Config"), tt = null
        },
        stop: function() {
            tt = null
        },
        upgrade: et
    });

    function at(t, e, n, a) {
        return new(n || (n = Promise))((function(r, i) {
            function o(t) {
                try {
                    c(a.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                try {
                    c(a.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                var e;
                t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                    t(e)
                }))).then(o, u)
            }
            c((a = a.apply(t, e || [])).next())
        }))
    }

    function rt(t, e) {
        var n, a, r, i, o = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(u) {
            return function(c) {
                return function(u) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; i && (i = 0, u[0] && (o = 0)), o;) try {
                        if (n = 1, a && (r = 2 & u[0] ? a.return : u[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, u[1])).done) return r;
                        switch (a = 0, r && (u = [2 & u[0], r.value]), u[0]) {
                            case 0:
                            case 1:
                                r = u;
                                break;
                            case 4:
                                return o.label++, {
                                    value: u[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, a = u[1], u = [0];
                                continue;
                            case 7:
                                u = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === u[0] && (!r || u[1] > r[0] && u[1] < r[3])) {
                                    o.label = u[1];
                                    break
                                }
                                if (6 === u[0] && o.label < r[1]) {
                                    o.label = r[1], r = u;
                                    break
                                }
                                if (r && o.label < r[2]) {
                                    o.label = r[2], o.ops.push(u);
                                    break
                                }
                                r[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        u = e.call(t, o)
                    } catch (t) {
                        u = [6, t], a = 0
                    } finally {
                        n = r = 0
                    }
                    if (5 & u[0]) throw u[1];
                    return {
                        value: u[0] ? u[1] : void 0,
                        done: !0
                    }
                }([u, c])
            }
        }
    }
    var it = null;

    function ot(t, e) {
        ct(t, "string" == typeof e ? [e] : e)
    }

    function ut(t, e, n, a) {
        return void 0 === e && (e = null), void 0 === n && (n = null), void 0 === a && (a = null), at(this, void 0, void 0, (function() {
            var r, i;
            return rt(this, (function(o) {
                switch (o.label) {
                    case 0:
                        return i = {}, [4, dt(t)];
                    case 1:
                        return i.userId = o.sent(), i.userHint = a || ((u = t) && u.length >= 5 ? "".concat(u.substring(0, 2)).concat(k(u.substring(2), "*", "*")) : k(u, "*", "*")), ct("userId", [(r = i).userId]), ct("userHint", [r.userHint]), ct("userType", [ft(t)]), e && (ct("sessionId", [e]), r.sessionId = e), n && (ct("pageId", [n]), r.pageId = n), [2, r]
                }
                var u
            }))
        }))
    }

    function ct(t, e) {
        if (Pi() && t && e && "string" == typeof t && t.length < 255) {
            for (var n = (t in it ? it[t] : []), a = 0; a < e.length; a++) "string" == typeof e[a] && e[a].length < 255 && n.push(e[a]);
            it[t] = n
        }
    }

    function st() {
        Pr(34)
    }

    function lt() {
        it = {}
    }

    function dt(t) {
        return at(this, void 0, void 0, (function() {
            var e;
            return rt(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return n.trys.push([0, 4, , 5]), crypto && t ? [4, crypto.subtle.digest("SHA-256", (new TextEncoder).encode(t))] : [3, 2];
                    case 1:
                        return e = n.sent(), [2, Array.prototype.map.call(new Uint8Array(e), (function(t) {
                            return ("00" + t.toString(16)).slice(-2)
                        })).join("")];
                    case 2:
                        return [2, ""];
                    case 3:
                        return [3, 5];
                    case 4:
                        return n.sent(), [2, ""];
                    case 5:
                        return [2]
                }
            }))
        }))
    }

    function ft(t) {
        return t && t.indexOf("@") > 0 ? "email" : "string"
    }
    var ht = "CompressionStream" in window;

    function pt(t) {
        return at(this, void 0, void 0, (function() {
            var e, n;
            return rt(this, (function(a) {
                switch (a.label) {
                    case 0:
                        return a.trys.push([0, 3, , 4]), ht ? (e = new ReadableStream({
                            start: function(e) {
                                return at(this, void 0, void 0, (function() {
                                    return rt(this, (function(n) {
                                        return e.enqueue(t), e.close(), [2]
                                    }))
                                }))
                            }
                        }).pipeThrough(new TextEncoderStream).pipeThrough(new window.CompressionStream("gzip")), n = Uint8Array.bind, [4, vt(e)]) : [3, 2];
                    case 1:
                        return [2, new(n.apply(Uint8Array, [void 0, a.sent()]))];
                    case 2:
                        return [3, 4];
                    case 3:
                        return a.sent(), [3, 4];
                    case 4:
                        return [2, null]
                }
            }))
        }))
    }

    function vt(t) {
        return at(this, void 0, void 0, (function() {
            var e, n, a, r, i;
            return rt(this, (function(o) {
                switch (o.label) {
                    case 0:
                        e = t.getReader(), n = [], a = !1, r = [], o.label = 1;
                    case 1:
                        return a ? [3, 3] : [4, e.read()];
                    case 2:
                        return i = o.sent(), a = i.done, r = i.value, a ? [2, n] : (n.push.apply(n, r), [3, 1]);
                    case 3:
                        return [2, n]
                }
            }))
        }))
    }
    var gt = null;

    function mt(t) {
        try {
            if (!gt) return;
            var e = function(t) {
                try {
                    return JSON.parse(t)
                } catch (t) {
                    return []
                }
            }(t);
            e.forEach((function(t) {
                gt(t)
            }))
        } catch (t) {}
    }
    var yt = [D, a, Object.freeze({
        __proto__: null,
        compute: st,
        get data() {
            return it
        },
        identify: ut,
        reset: lt,
        set: ot,
        start: function() {
            lt()
        },
        stop: function() {
            lt()
        }
    }), n, $, r, i, t, J, nt, e];

    function bt() {
        L = {}, z = {}, H(5), yt.forEach((function(t) {
            return Oi(t.start)()
        }))
    }

    function wt() {
        yt.slice().reverse().forEach((function(t) {
            return Oi(t.stop)()
        })), L = {}, z = {}
    }

    function kt() {
        st(), C(), Kr(), Pr(0), Z(), qr(), Dr()
    }
    var St, Et = [];

    function Ot(t, e, n) {
        o.fraud && null !== t && n && n.length >= 5 && (St = {
            id: t,
            target: e,
            checksum: d(n, 24)
        }, Et.indexOf(St.checksum) < 0 && (Et.push(St.checksum), yr(41)))
    }
    var Nt = "load,active,fixed,visible,focus,show,collaps,animat".split(","),
        Tt = {};

    function Mt(t, e) {
        var n = t.attributes,
            a = t.prefix ? t.prefix[e] : null,
            r = 0 === e ? "".concat("~").concat(t.position - 1) : ":nth-of-type(".concat(t.position, ")");
        switch (t.tag) {
            case "STYLE":
            case "TITLE":
            case "LINK":
            case "META":
            case "*T":
            case "*D":
                return "";
            case "HTML":
                return "HTML";
            default:
                if (null === a) return "";
                a = "".concat(a).concat(">"), t.tag = 0 === t.tag.indexOf("svg:") ? t.tag.substr("svg:".length) : t.tag;
                var i = "".concat(a).concat(t.tag).concat(r),
                    o = "id" in n && n.id.length > 0 ? n.id : null,
                    u = "BODY" !== t.tag && "class" in n && n.class.length > 0 ? n.class.trim().split(/\s+/).filter((function(t) {
                        return xt(t)
                    })).join(".") : null;
                if (u && u.length > 0)
                    if (0 === e) {
                        var c = "".concat(function(t) {
                            for (var e = t.split(">"), n = 0; n < e.length; n++) {
                                var a = e[n].indexOf("~"),
                                    r = e[n].indexOf(".");
                                e[n] = e[n].substring(0, r > 0 ? r : a > 0 ? a : e[n].length)
                            }
                            return e.join(">")
                        }(a)).concat(t.tag).concat(".").concat(u);
                        c in Tt || (Tt[c] = []), Tt[c].indexOf(t.id) < 0 && Tt[c].push(t.id), i = "".concat(c).concat("~").concat(Tt[c].indexOf(t.id))
                    } else i = "".concat(a).concat(t.tag, ".").concat(u).concat(r);
                return i = o && xt(o) ? "".concat(function(t) {
                    var e = t.lastIndexOf("*S"),
                        n = t.lastIndexOf("".concat("iframe:").concat("HTML")),
                        a = Math.max(e, n);
                    if (a < 0) return "";
                    return t.substring(0, t.indexOf(">", a) + 1)
                }(a)).concat("#").concat(o) : i, i
        }
    }

    function xt(t) {
        if (!t) return !1;
        if (Nt.some((function(e) {
                return t.toLowerCase().indexOf(e) >= 0
            }))) return !1;
        for (var e = 0; e < t.length; e++) {
            var n = t.charCodeAt(e);
            if (n >= 48 && n <= 57) return !1
        }
        return !0
    }
    var _t = 1,
        It = null,
        Ct = [],
        Dt = [],
        jt = {},
        At = [],
        Rt = [],
        Lt = [],
        zt = [],
        Ht = [],
        Pt = [],
        Wt = null,
        Xt = null,
        Yt = null,
        qt = null;

    function Ut() {
        Vt(), Bt(document, !0)
    }

    function Ft() {
        Vt()
    }

    function Vt() {
        _t = 1, Ct = [], Dt = [], jt = {}, At = [], Rt = [], Lt = "address,password,contact".split(","), zt = "password,secret,pass,social,ssn,code,hidden".split(","), Ht = "radio,checkbox,range,button,reset,submit".split(","), Pt = "INPUT,SELECT,TEXTAREA".split(","), It = new Map, Wt = new WeakMap, Xt = new WeakMap, Yt = new WeakMap, qt = new WeakMap, Tt = {}
    }

    function Bt(t, e) {
        void 0 === e && (e = !1);
        try {
            e && o.unmask.forEach((function(t) {
                return t.indexOf("!") < 0 ? Rt.push(t) : At.push(t.substr(1))
            })), "querySelectorAll" in t && (o.regions.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return Pa(t, "".concat(e[0]))
                }))
            })), o.mask.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return Yt.set(t, 3)
                }))
            })), o.checksum.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return qt.set(t, e[0])
                }))
            })), Rt.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return Yt.set(t, 0)
                }))
            })))
        } catch (t) {
            kr(5, 1, t ? t.name : null)
        }
    }

    function Jt(t, e) {
        if (void 0 === e && (e = !1), null === t) return null;
        var n = Wt.get(t);
        return !n && e && (n = _t++, Wt.set(t, n)), n || null
    }

    function Gt(t) {
        var e = !1;
        if (t.nodeType === Node.ELEMENT_NODE && "IFRAME" === t.tagName) {
            var n = t;
            try {
                n.contentDocument && (Xt.set(n.contentDocument, n), e = !0)
            } catch (t) {}
        }
        return e
    }

    function Kt(t) {
        var e = t.nodeType === Node.DOCUMENT_NODE ? t : null;
        return e && Xt.has(e) ? Xt.get(e) : null
    }

    function Zt(t, e, n) {
        if ("object" == typeof t[n] && "object" == typeof e[n]) {
            for (var a in t[n])
                if (t[n][a] !== e[n][a]) return !0;
            for (var a in e[n])
                if (e[n][a] !== t[n][a]) return !0;
            return !1
        }
        return t[n] !== e[n]
    }

    function Qt(t) {
        var e = t.parent && t.parent in Ct ? Ct[t.parent] : null,
            n = e ? e.selector : null,
            a = t.data,
            r = function(t, e) {
                e.metadata.position = 1;
                for (var n = t ? t.children.indexOf(e.id) : -1; n-- > 0;) {
                    var a = Ct[t.children[n]];
                    if (e.data.tag === a.data.tag) {
                        e.metadata.position = a.metadata.position + 1;
                        break
                    }
                }
                return e.metadata.position
            }(e, t),
            i = {
                id: t.id,
                tag: a.tag,
                prefix: n,
                position: r,
                attributes: a.attributes
            };
        t.selector = [Mt(i, 0), Mt(i, 1)], t.hash = t.selector.map((function(t) {
            return t ? d(t) : null
        })), t.hash.forEach((function(e) {
            return jt[e] = t.id
        }))
    }

    function $t(t) {
        var e = te(ne(t));
        return null !== e && null !== e.textContent ? e.textContent.substr(0, 25) : ""
    }

    function te(t) {
        return It.has(t) ? It.get(t) : null
    }

    function ee(t) {
        var e = Jt(t);
        return e in Ct ? Ct[e] : null
    }

    function ne(t) {
        return t in jt ? jt[t] : null
    }

    function ae(t) {
        return It.has(Jt(t))
    }

    function re() {
        for (var t = [], e = 0, n = Dt; e < n.length; e++) {
            var a = n[e];
            a in Ct && t.push(Ct[a])
        }
        return Dt = [], t
    }

    function ie(t) {
        if (It.get(t).nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
            It.delete(t);
            var e = t in Ct ? Ct[t] : null;
            if (e && e.children)
                for (var n = 0, a = e.children; n < a.length; n++) {
                    ie(a[n])
                }
        }
    }

    function oe(t) {
        for (var e = null; null === e && t.previousSibling;) e = Jt(t.previousSibling), t = t.previousSibling;
        return e
    }

    function ue(t, e, n, a) {
        void 0 === n && (n = !0), void 0 === a && (a = !1);
        var r = Dt.indexOf(t);
        r >= 0 && 1 === e && a ? (Dt.splice(r, 1), Dt.push(t)) : -1 === r && n && Dt.push(t)
    }
    var ce = Object.freeze({
            __proto__: null,
            add: function(t, e, n, a) {
                var r, i = Jt(t, !0),
                    u = e ? Jt(e) : null,
                    c = oe(t),
                    s = null,
                    l = Wa(t) ? i : null,
                    d = qt.has(t) ? qt.get(t) : null,
                    f = o.content ? 1 : 3;
                u >= 0 && Ct[u] && ((s = Ct[u]).children.push(i), l = null === l ? s.region : l, d = null === d ? s.metadata.fraud : d, f = s.metadata.privacy), n.attributes && "data-clarity-region" in n.attributes && (Pa(t, n.attributes["data-clarity-region"]), l = i), It.set(i, t), Ct[i] = {
                        id: i,
                        parent: u,
                        previous: c,
                        children: [],
                        data: n,
                        selector: null,
                        hash: null,
                        region: l,
                        metadata: {
                            active: !0,
                            suspend: !1,
                            privacy: f,
                            position: null,
                            fraud: d,
                            size: null
                        }
                    },
                    function(t, e, n) {
                        var a = e.data,
                            r = e.metadata,
                            i = r.privacy,
                            o = a.attributes || {},
                            u = a.tag.toUpperCase();
                        switch (!0) {
                            case Pt.indexOf(u) >= 0:
                                var c = o.type,
                                    s = "",
                                    l = ["class", "style"];
                                Object.keys(o).filter((function(t) {
                                    return !l.includes(t)
                                })).forEach((function(t) {
                                    return s += o[t].toLowerCase()
                                }));
                                var d = zt.some((function(t) {
                                    return s.indexOf(t) >= 0
                                }));
                                r.privacy = "INPUT" === u && Ht.indexOf(c) >= 0 ? i : d ? 4 : 2;
                                break;
                            case "data-clarity-mask" in o:
                                r.privacy = 3;
                                break;
                            case "data-clarity-unmask" in o:
                                r.privacy = 0;
                                break;
                            case Yt.has(t):
                                r.privacy = Yt.get(t);
                                break;
                            case qt.has(t):
                                r.privacy = 2;
                                break;
                            case "*T" === u:
                                var f = n && n.data ? n.data.tag : "",
                                    h = n && n.selector ? n.selector[1] : "",
                                    p = ["STYLE", "TITLE", "svg:style"];
                                r.privacy = p.includes(f) || At.some((function(t) {
                                    return h.indexOf(t) >= 0
                                })) ? 0 : i;
                                break;
                            case 1 === i:
                                r.privacy = function(t, e, n) {
                                    if (t && e.some((function(e) {
                                            return t.indexOf(e) >= 0
                                        }))) return 2;
                                    return n.privacy
                                }(o.class, Lt, r)
                        }
                    }(t, Ct[i], s), Qt(Ct[i]), "IMG" === (r = Ct[i]).data.tag && 3 === r.metadata.privacy && (r.metadata.size = []), ue(i, a)
            },
            get: ee,
            getId: Jt,
            getNode: te,
            getValue: function(t) {
                return t in Ct ? Ct[t] : null
            },
            has: ae,
            hashText: $t,
            iframe: Kt,
            lookup: ne,
            parse: Bt,
            sameorigin: Gt,
            start: Ut,
            stop: Ft,
            update: function(t, e, n, a) {
                var r = Jt(t),
                    i = e ? Jt(e) : null,
                    o = oe(t),
                    u = !1,
                    c = !1;
                if (r in Ct) {
                    var s = Ct[r];
                    if (s.metadata.active = !0, s.previous !== o && (u = !0, s.previous = o), s.parent !== i) {
                        u = !0;
                        var l = s.parent;
                        if (s.parent = i, null !== i && i >= 0) {
                            var d = null === o ? 0 : Ct[i].children.indexOf(o) + 1;
                            Ct[i].children.splice(d, 0, r), s.region = Wa(t) ? r : Ct[i].region
                        } else ! function(t, e) {
                            if (t in Ct) {
                                var n = Ct[t];
                                n.metadata.active = !1, n.parent = null, ue(t, e), ie(t)
                            }
                        }(r, a);
                        if (null !== l && l >= 0) {
                            var f = Ct[l].children.indexOf(r);
                            f >= 0 && Ct[l].children.splice(f, 1)
                        }
                        c = !0
                    }
                    for (var h in n) Zt(s.data, n, h) && (u = !0, s.data[h] = n[h]);
                    Qt(s), ue(r, a, u, c)
                }
            },
            updates: re
        }),
        se = 5e3,
        le = {},
        de = [],
        fe = null,
        he = null,
        pe = null;

    function ve() {
        le = {}, de = [], fe = null, he = null
    }

    function ge(t, e) {
        return void 0 === e && (e = 0), at(this, void 0, void 0, (function() {
            var n, a, r;
            return rt(this, (function(i) {
                for (n = 0, a = de; n < a.length; n++)
                    if (a[n].task === t) return [2];
                return r = new Promise((function(n) {
                    de[1 === e ? "unshift" : "push"]({
                        task: t,
                        resolve: n,
                        id: ii()
                    })
                })), null === fe && null === he && me(), [2, r]
            }))
        }))
    }

    function me() {
        var t = de.shift();
        t && (fe = t, t.task().then((function() {
            t.id === ii() && (t.resolve(), fe = null, me())
        })).catch((function(e) {
            t.id === ii() && (e && kr(0, 1, e.name, e.message, e.stack), fe = null, me())
        })))
    }

    function ye(t) {
        var e = Se(t);
        return e in le ? performance.now() - le[e].start > le[e].yield ? 0 : 1 : 2
    }

    function be(t) {
        le[Se(t)] = {
            start: performance.now(),
            calls: 0,
            yield: 30
        }
    }

    function we(t) {
        var e = performance.now(),
            n = Se(t),
            a = e - le[n].start;
        P(t.cost, a), H(5), le[n].calls > 0 && P(4, a)
    }

    function ke(t) {
        return at(this, void 0, void 0, (function() {
            var e, n;
            return rt(this, (function(a) {
                switch (a.label) {
                    case 0:
                        return (e = Se(t)) in le ? (we(t), n = le[e], [4, Ee()]) : [3, 2];
                    case 1:
                        n.yield = a.sent().timeRemaining(),
                            function(t) {
                                var e = Se(t);
                                if (le && le[e]) {
                                    var n = le[e].calls,
                                        a = le[e].yield;
                                    be(t), le[e].calls = n + 1, le[e].yield = a
                                }
                            }(t), a.label = 2;
                    case 2:
                        return [2, e in le ? 1 : 2]
                }
            }))
        }))
    }

    function Se(t) {
        return "".concat(t.id, ".").concat(t.cost)
    }

    function Ee() {
        return at(this, void 0, void 0, (function() {
            return rt(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return he ? [4, he] : [3, 2];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2, new Promise((function(t) {
                            Ne(t, {
                                timeout: se
                            })
                        }))]
                }
            }))
        }))
    }
    var Oe, Ne = window.requestIdleCallback || function(t, e) {
        var n = performance.now(),
            a = new MessageChannel,
            r = a.port1,
            i = a.port2;
        r.onmessage = function(a) {
            var r = performance.now(),
                o = r - n,
                u = r - a.data;
            if (u > 30 && o < e.timeout) requestAnimationFrame((function() {
                i.postMessage(r)
            }));
            else {
                var c = o > e.timeout;
                t({
                    didTimeout: c,
                    timeRemaining: function() {
                        return c ? 30 : Math.max(0, 30 - u)
                    }
                })
            }
        }, requestAnimationFrame((function() {
            i.postMessage(performance.now())
        }))
    };

    function Te() {
        Oe = null
    }

    function Me() {
        var t = document.body,
            e = document.documentElement,
            n = t ? t.clientWidth : null,
            a = t ? t.scrollWidth : null,
            r = t ? t.offsetWidth : null,
            i = e ? e.clientWidth : null,
            o = e ? e.scrollWidth : null,
            u = e ? e.offsetWidth : null,
            c = Math.max(n, a, r, i, o, u),
            s = t ? t.clientHeight : null,
            l = t ? t.scrollHeight : null,
            d = t ? t.offsetHeight : null,
            f = e ? e.clientHeight : null,
            h = e ? e.scrollHeight : null,
            p = e ? e.offsetHeight : null,
            v = Math.max(s, l, d, f, h, p);
        null !== Oe && c === Oe.width && v === Oe.height || null === c || null === v || (Oe = {
            width: c,
            height: v
        }, _a(8))
    }
    var xe = [];

    function _e(t) {
        var e = Va(t);
        if (e) {
            var n = e.value,
                a = n && n.length >= 5 && o.fraud && -1 === "password,secret,pass,social,ssn,code,hidden".indexOf(e.type) ? d(n, 24) : "";
            xe.push({
                time: s(t),
                event: 42,
                data: {
                    target: Va(t),
                    type: e.type,
                    value: n,
                    checksum: a
                }
            }), ge(Ja.bind(this, 42))
        }
    }

    function Ie() {
        xe = []
    }

    function Ce(t) {
        var e = {
            x: 0,
            y: 0
        };
        if (t && t.offsetParent)
            do {
                var n = t.offsetParent,
                    a = null === n ? Kt(t.ownerDocument) : null;
                e.x += t.offsetLeft, e.y += t.offsetTop, t = a || n
            } while (t);
        return e
    }
    var De = ["input", "textarea", "radio", "button", "canvas"],
        je = [];

    function Ae(t) {
        Ti(t, "click", Re.bind(this, 9, t), !0)
    }

    function Re(t, e, n) {
        var a = Kt(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + r.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = Ce(a);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        var c = Va(n),
            l = function(t) {
                for (; t && t !== document;) {
                    if (t.nodeType === Node.ELEMENT_NODE) {
                        var e = t;
                        if ("A" === e.tagName) return e
                    }
                    t = t.parentNode
                }
                return null
            }(c),
            d = function(t) {
                var e = null,
                    n = document.documentElement;
                if ("function" == typeof t.getBoundingClientRect) {
                    var a = t.getBoundingClientRect();
                    a && a.width > 0 && a.height > 0 && (e = {
                        x: Math.floor(a.left + ("pageXOffset" in window ? window.pageXOffset : n.scrollLeft)),
                        y: Math.floor(a.top + ("pageYOffset" in window ? window.pageYOffset : n.scrollTop)),
                        w: Math.floor(a.width),
                        h: Math.floor(a.height)
                    })
                }
                return e
            }(c);
        0 === n.detail && d && (i = Math.round(d.x + d.w / 2), o = Math.round(d.y + d.h / 2));
        var f = d ? Math.max(Math.floor((i - d.x) / d.w * 32767), 0) : 0,
            h = d ? Math.max(Math.floor((o - d.y) / d.h * 32767), 0) : 0;
        null !== i && null !== o && (je.push({
            time: s(n),
            event: t,
            data: {
                target: c,
                x: i,
                y: o,
                eX: f,
                eY: h,
                button: n.button,
                reaction: ze(c),
                context: He(l),
                text: Le(c),
                link: l ? l.href : null,
                hash: null,
                trust: n.isTrusted ? 1 : 0
            }
        }), ge(Ja.bind(this, t)))
    }

    function Le(t) {
        var e = null;
        if (t) {
            var n = t.textContent || String(t.value || "") || t.alt;
            n && (e = n.replace(/\s+/g, " ").trim().substr(0, 25))
        }
        return e
    }

    function ze(t) {
        if (t.nodeType === Node.ELEMENT_NODE) {
            var e = t.tagName.toLowerCase();
            if (De.indexOf(e) >= 0) return 0
        }
        return 1
    }

    function He(t) {
        if (t && t.hasAttribute("target")) switch (t.getAttribute("target")) {
            case "_blank":
                return 1;
            case "_parent":
                return 2;
            case "_top":
                return 3
        }
        return 0
    }

    function Pe() {
        je = []
    }
    var We = [];

    function Xe(t, e) {
        We.push({
            time: s(e),
            event: 38,
            data: {
                target: Va(e),
                action: t
            }
        }), ge(Ja.bind(this, 38))
    }

    function Ye() {
        We = []
    }
    var qe = null,
        Ue = [];

    function Fe(t) {
        var e = Va(t),
            n = ee(e);
        if (e && e.type && n) {
            var a = e.value;
            switch (e.type) {
                case "radio":
                case "checkbox":
                    a = e.checked ? "true" : "false"
            }
            var r = {
                target: e,
                value: a
            };
            Ue.length > 0 && Ue[Ue.length - 1].data.target === r.target && Ue.pop(), Ue.push({
                time: s(t),
                event: 27,
                data: r
            }), Y(qe), qe = X(Ve, 1e3, 27)
        }
    }

    function Ve(t) {
        ge(Ja.bind(this, t))
    }

    function Be() {
        Ue = []
    }
    var Je, Ge = [],
        Ke = null;

    function Ze(t, e, n) {
        var a = Kt(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + r.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = Ce(a);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        null !== i && null !== o && $e({
            time: s(n),
            event: t,
            data: {
                target: Va(n),
                x: i,
                y: o
            }
        })
    }

    function Qe(t, e, n) {
        var a = Kt(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = n.changedTouches,
            o = s(n);
        if (i)
            for (var u = 0; u < i.length; u++) {
                var c = i[u],
                    l = "clientX" in c ? Math.round(c.clientX + r.scrollLeft) : null,
                    d = "clientY" in c ? Math.round(c.clientY + r.scrollTop) : null;
                l = l && a ? l + Math.round(a.offsetLeft) : l, d = d && a ? d + Math.round(a.offsetTop) : d, null !== l && null !== d && $e({
                    time: o,
                    event: t,
                    data: {
                        target: Va(n),
                        x: l,
                        y: d
                    }
                })
            }
    }

    function $e(t) {
        switch (t.event) {
            case 12:
            case 15:
            case 19:
                var e = Ge.length,
                    n = e > 1 ? Ge[e - 2] : null;
                n && function(t, e) {
                    var n = t.data.x - e.data.x,
                        a = t.data.y - e.data.y,
                        r = Math.sqrt(n * n + a * a),
                        i = e.time - t.time,
                        o = e.data.target === t.data.target;
                    return e.event === t.event && o && r < 20 && i < 25
                }(n, t) && Ge.pop(), Ge.push(t), Y(Ke), Ke = X(tn, 500, t.event);
                break;
            default:
                Ge.push(t), tn(t.event)
        }
    }

    function tn(t) {
        ge(Ja.bind(this, t))
    }

    function en() {
        Ge = []
    }

    function nn() {
        var t = document.documentElement;
        Je = {
            width: t && "clientWidth" in t ? Math.min(t.clientWidth, window.innerWidth) : window.innerWidth,
            height: t && "clientHeight" in t ? Math.min(t.clientHeight, window.innerHeight) : window.innerHeight
        }, Ja(11)
    }

    function an() {
        Je = null
    }
    var rn = [],
        on = null,
        un = null,
        cn = null;

    function sn(t) {
        void 0 === t && (t = null);
        var e = window,
            n = document.documentElement,
            a = t ? Va(t) : n;
        if (a && a.nodeType === Node.DOCUMENT_NODE) {
            var r = Kt(a);
            e = r ? r.contentWindow : e, a = n = a.documentElement
        }
        var i = a === n && "pageXOffset" in e ? Math.round(e.pageXOffset) : Math.round(a.scrollLeft),
            o = a === n && "pageYOffset" in e ? Math.round(e.pageYOffset) : Math.round(a.scrollTop),
            u = window.innerWidth,
            c = window.innerHeight,
            l = u / 3,
            d = u > c ? .15 * c : .2 * c,
            f = c - d,
            h = ln(l, d),
            p = ln(l, f),
            v = {
                time: s(t),
                event: 10,
                data: {
                    target: a,
                    x: i,
                    y: o,
                    top: h,
                    bottom: p
                }
            };
        if (null === t && 0 === i && 0 === o || null === i || null === o) return on = h, void(un = p);
        var g = rn.length,
            m = g > 1 ? rn[g - 2] : null;
        m && function(t, e) {
            var n = t.data.x - e.data.x,
                a = t.data.y - e.data.y;
            return n * n + a * a < 400 && e.time - t.time < 25
        }(m, v) && rn.pop(), rn.push(v), Y(cn), cn = X(dn, 500, 10)
    }

    function ln(t, e) {
        var n, a, r;
        return "caretPositionFromPoint" in document ? r = null === (n = document.caretPositionFromPoint(t, e)) || void 0 === n ? void 0 : n.offsetNode : "caretRangeFromPoint" in document && (r = null === (a = document.caretRangeFromPoint(t, e)) || void 0 === a ? void 0 : a.startContainer), r || (r = document.elementFromPoint(t, e)), r && r.nodeType === Node.TEXT_NODE && (r = r.parentNode), r
    }

    function dn(t) {
        ge(Ja.bind(this, t))
    }

    function fn() {
        var t, e;
        if (on) {
            var n = Ba(on, null);
            Gr(31, null === (t = null == n ? void 0 : n.hash) || void 0 === t ? void 0 : t.join("."))
        }
        if (un) {
            var a = Ba(un, null);
            Gr(32, null === (e = null == a ? void 0 : a.hash) || void 0 === e ? void 0 : e.join("."))
        }
    }
    var hn = null,
        pn = null,
        vn = null;

    function gn(t) {
        var e = (t.nodeType === Node.DOCUMENT_NODE ? t : document).getSelection();
        if (null !== e && !(null === e.anchorNode && null === e.focusNode || e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset)) {
            var n = hn.start ? hn.start : null;
            null !== pn && null !== hn.start && n !== e.anchorNode && (Y(vn), mn(21)), hn = {
                start: e.anchorNode,
                startOffset: e.anchorOffset,
                end: e.focusNode,
                endOffset: e.focusOffset
            }, pn = e, Y(vn), vn = X(mn, 500, 21)
        }
    }

    function mn(t) {
        ge(Ja.bind(this, t))
    }

    function yn() {
        pn = null, hn = {
            start: 0,
            startOffset: 0,
            end: 0,
            endOffset: 0
        }
    }
    var bn, wn, kn = [];

    function Sn(t) {
        kn.push({
            time: s(t),
            event: 39,
            data: {
                target: Va(t)
            }
        }), ge(Ja.bind(this, 39))
    }

    function En() {
        kn = []
    }

    function On(t) {
        bn = {
            name: t.type
        }, Ja(26, s(t)), eo()
    }

    function Nn() {
        bn = null
    }

    function Tn(t) {
        void 0 === t && (t = null), wn = {
            visible: "visibilityState" in document ? document.visibilityState : "default"
        }, Ja(28, s(t))
    }

    function Mn() {
        wn = null
    }

    function xn(t) {
        ! function(t) {
            var e = Kt(t);
            Ti(e ? e.contentWindow : t === document ? window : t, "scroll", sn, !0)
        }(t), t.nodeType === Node.DOCUMENT_NODE && (Ae(t), function(t) {
            Ti(t, "cut", Xe.bind(this, 0), !0), Ti(t, "copy", Xe.bind(this, 1), !0), Ti(t, "paste", Xe.bind(this, 2), !0)
        }(t), function(t) {
            Ti(t, "mousedown", Ze.bind(this, 13, t), !0), Ti(t, "mouseup", Ze.bind(this, 14, t), !0), Ti(t, "mousemove", Ze.bind(this, 12, t), !0), Ti(t, "wheel", Ze.bind(this, 15, t), !0), Ti(t, "dblclick", Ze.bind(this, 16, t), !0), Ti(t, "touchstart", Qe.bind(this, 17, t), !0), Ti(t, "touchend", Qe.bind(this, 18, t), !0), Ti(t, "touchmove", Qe.bind(this, 19, t), !0), Ti(t, "touchcancel", Qe.bind(this, 20, t), !0)
        }(t), function(t) {
            Ti(t, "input", Fe, !0)
        }(t), function(t) {
            Ti(t, "selectstart", gn.bind(this, t), !0), Ti(t, "selectionchange", gn.bind(this, t), !0)
        }(t), function(t) {
            Ti(t, "change", _e, !0)
        }(t), function(t) {
            Ti(t, "submit", Sn, !0)
        }(t))
    }
    var _n = Object.freeze({
        __proto__: null,
        observe: xn,
        start: function() {
            Ga = [], Za(), Pe(), Ye(), en(), Be(), Ti(window, "resize", nn), nn(), Ti(document, "visibilitychange", Tn), Tn(), rn = [], sn(), yn(), Ie(), En(), Ti(window, "pagehide", On)
        },
        stop: function() {
            Ga = [], Za(), Pe(), Ye(), Y(Ke), Ge.length > 0 && tn(Ge[Ge.length - 1].event), Y(qe), Be(), an(), Mn(), Y(cn), rn = [], on = null, un = null, yn(), Y(vn), Ie(), En(), Nn()
        }
    });

    function In(t, e, n, a) {
        return at(this, void 0, void 0, (function() {
            var r, i, o, u, c;
            return rt(this, (function(s) {
                switch (s.label) {
                    case 0:
                        r = [t], s.label = 1;
                    case 1:
                        if (!(r.length > 0)) return [3, 4];
                        for (i = r.shift(), o = i.firstChild; o;) r.push(o), o = o.nextSibling;
                        return 0 !== (u = ye(e)) ? [3, 3] : [4, ke(e)];
                    case 2:
                        u = s.sent(), s.label = 3;
                    case 3:
                        return 2 === u ? [3, 4] : ((c = ta(i, n, a)) && r.push(c), [3, 1]);
                    case 4:
                        return [2]
                }
            }))
        }))
    }
    var Cn = [],
        Dn = [],
        jn = null,
        An = null,
        Rn = null,
        Ln = null,
        zn = null,
        Hn = [],
        Pn = null,
        Wn = null,
        Xn = {};

    function Yn() {
        if (Cn = [], Hn = [], Pn = null, Wn = 0, Xn = {}, null === jn && (jn = CSSStyleSheet.prototype.insertRule, CSSStyleSheet.prototype.insertRule = function() {
                return Pi() && Bn(this.ownerNode), jn.apply(this, arguments)
            }), "CSSMediaRule" in window && null === Ln && (Ln = CSSMediaRule.prototype.insertRule, CSSMediaRule.prototype.insertRule = function() {
                return Pi() && Bn(this.parentStyleSheet.ownerNode), Ln.apply(this, arguments)
            }), null === An && (An = CSSStyleSheet.prototype.deleteRule, CSSStyleSheet.prototype.deleteRule = function() {
                return Pi() && Bn(this.ownerNode), An.apply(this, arguments)
            }), "CSSMediaRule" in window && null === zn && (zn = CSSMediaRule.prototype.deleteRule, CSSMediaRule.prototype.deleteRule = function() {
                return Pi() && Bn(this.parentStyleSheet.ownerNode), zn.apply(this, arguments)
            }), null === Rn) {
            Rn = Element.prototype.attachShadow;
            try {
                Element.prototype.attachShadow = function() {
                    return Pi() ? Bn(Rn.apply(this, arguments)) : Rn.apply(this, arguments)
                }
            } catch (t) {
                Rn = null
            }
        }
    }

    function qn(t) {
        var e = s();
        K(6, e), Dn.push({
            time: e,
            mutations: t
        }), ge(Un, 1).then((function() {
            X(Me), Oi(Xa)()
        }))
    }

    function Un() {
        return at(this, void 0, void 0, (function() {
            var t, e, n, a, r, i, u, c, l, d;
            return rt(this, (function(f) {
                switch (f.label) {
                    case 0:
                        be(t = {
                            id: ii(),
                            cost: 3
                        }), f.label = 1;
                    case 1:
                        if (!(Dn.length > 0)) return [3, 8];
                        e = Dn.shift(), n = s(), a = 0, r = e.mutations, f.label = 2;
                    case 2:
                        return a < r.length ? (i = r[a], 0 !== (u = ye(t)) ? [3, 4] : [4, ke(t)]) : [3, 6];
                    case 3:
                        u = f.sent(), f.label = 4;
                    case 4:
                        if (2 === u) return [3, 6];
                        switch (c = i.target, l = o.throttleDom ? function(t, e, n, a) {
                            var r = t.target ? ee(t.target.parentNode) : null;
                            if (r && "HTML" !== r.data.tag) {
                                var i = a > Wn,
                                    o = ee(t.target),
                                    u = o && o.selector ? o.selector.join() : t.target.nodeName,
                                    c = [r.selector ? r.selector.join() : "", u, t.attributeName, Fn(t.addedNodes), Fn(t.removedNodes)].join();
                                Xn[c] = c in Xn ? Xn[c] : [0, n];
                                var s = Xn[c];
                                if (!1 === i && s[0] >= 10 && Vn(s[2], 2, e, a), s[0] = i ? s[1] === n ? s[0] : s[0] + 1 : 1, s[1] = n, 10 === s[0]) return s[2] = t.removedNodes, "suspend";
                                if (s[0] > 10) return ""
                            }
                            return t.type
                        }(i, t, n, e.time) : i.type, l && c && c.ownerDocument && Bt(c.ownerDocument), l && c && c.nodeType == Node.DOCUMENT_FRAGMENT_NODE && c.host && Bt(c), l) {
                            case "attributes":
                                ta(c, 3, e.time);
                                break;
                            case "characterData":
                                ta(c, 4, e.time);
                                break;
                            case "childList":
                                Vn(i.addedNodes, 1, t, e.time), Vn(i.removedNodes, 2, t, e.time);
                                break;
                            case "suspend":
                                (d = ee(c)) && (d.metadata.suspend = !0)
                        }
                        f.label = 5;
                    case 5:
                        return a++, [3, 2];
                    case 6:
                        return [4, _a(6, t, e.time)];
                    case 7:
                        return f.sent(), [3, 1];
                    case 8:
                        return we(t), [2]
                }
            }))
        }))
    }

    function Fn(t) {
        for (var e = [], n = 0; t && n < t.length; n++) e.push(t[n].nodeName);
        return e.join()
    }

    function Vn(t, e, n, a) {
        return at(this, void 0, void 0, (function() {
            var r, i, o;
            return rt(this, (function(u) {
                switch (u.label) {
                    case 0:
                        r = t ? t.length : 0, i = 0, u.label = 1;
                    case 1:
                        return i < r ? 1 !== e ? [3, 2] : (In(t[i], n, e, a), [3, 5]) : [3, 6];
                    case 2:
                        return 0 !== (o = ye(n)) ? [3, 4] : [4, ke(n)];
                    case 3:
                        o = u.sent(), u.label = 4;
                    case 4:
                        if (2 === o) return [3, 6];
                        ta(t[i], e, a), u.label = 5;
                    case 5:
                        return i++, [3, 1];
                    case 6:
                        return [2]
                }
            }))
        }))
    }

    function Bn(t) {
        return Hn.indexOf(t) < 0 && Hn.push(t), Pn && Y(Pn), Pn = X((function() {
            ! function() {
                for (var t = 0, e = Hn; t < e.length; t++) {
                    var n = e[t];
                    if (n) {
                        var a = n.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
                        if (a && ae(n)) continue;
                        Jn(n, a ? "childList" : "characterData")
                    }
                }
                Hn = []
            }()
        }), 33), t
    }

    function Jn(t, e) {
        Oi(qn)([{
            addedNodes: [t],
            attributeName: null,
            attributeNamespace: null,
            nextSibling: null,
            oldValue: null,
            previousSibling: null,
            removedNodes: [],
            target: t,
            type: e
        }])
    }
    var Gn = /[^0-9\.]/g;

    function Kn(t) {
        for (var e = 0, n = Object.keys(t); e < n.length; e++) {
            var a = n[e],
                r = t[a];
            if ("@type" === a && "string" == typeof r) switch (r = (r = r.toLowerCase()).indexOf("article") >= 0 || r.indexOf("posting") >= 0 ? "article" : r) {
                case "article":
                case "recipe":
                    Gr(5, t[a]), Gr(8, t.creator), Gr(18, t.headline);
                    break;
                case "product":
                    Gr(5, t[a]), Gr(10, t.name), Gr(12, t.sku), t.brand && Gr(6, t.brand.name);
                    break;
                case "aggregaterating":
                    t.ratingValue && (W(11, Zn(t.ratingValue, 100)), W(18, Zn(t.bestRating)), W(19, Zn(t.worstRating))), W(12, Zn(t.ratingCount)), W(17, Zn(t.reviewCount));
                    break;
                case "person":
                    Gr(8, t.name);
                    break;
                case "offer":
                    Gr(7, t.availability), Gr(14, t.itemCondition), Gr(13, t.priceCurrency), Gr(12, t.sku), W(13, Zn(t.price));
                    break;
                case "brand":
                    Gr(6, t.name)
            }
            null !== r && "object" == typeof r && Kn(r)
        }
    }

    function Zn(t, e) {
        if (void 0 === e && (e = 1), null !== t) switch (typeof t) {
            case "number":
                return Math.round(t * e);
            case "string":
                return Math.round(parseFloat(t.replace(Gn, "")) * e)
        }
        return null
    }
    var Qn = ["title", "alt", "onload", "onfocus", "onerror", "data-drupal-form-submit-last", "aria-label"],
        $n = /[\r\n]+/g;

    function ta(t, e, n) {
        var a, r = null;
        if (2 === e && !1 === ae(t)) return r;
        0 !== e && t.nodeType === Node.TEXT_NODE && t.parentElement && "STYLE" === t.parentElement.tagName && (t = t.parentNode);
        var i = !1 === ae(t) ? "add" : "update",
            o = t.parentElement ? t.parentElement : null,
            u = t.ownerDocument !== document;
        switch (t.nodeType) {
            case Node.DOCUMENT_TYPE_NODE:
                o = u && t.parentNode ? Kt(t.parentNode) : o;
                var c = t,
                    s = {
                        tag: (u ? "iframe:" : "") + "*D",
                        attributes: {
                            name: c.name,
                            publicId: c.publicId,
                            systemId: c.systemId
                        }
                    };
                ce[i](t, o, s, e);
                break;
            case Node.DOCUMENT_NODE:
                t === document && Bt(document), ha(t, n), ea(t);
                break;
            case Node.DOCUMENT_FRAGMENT_NODE:
                var l = t;
                if (l.host) {
                    if (Bt(l), "function" === typeof l.constructor && l.constructor.toString().indexOf("[native code]") >= 0) {
                        ea(l);
                        var d = {
                            tag: "*S",
                            attributes: {
                                style: ""
                            }
                        };
                        ce[i](t, l.host, d, e)
                    } else ce[i](t, l.host, {
                        tag: "*P",
                        attributes: {}
                    }, e);
                    ha(t, n)
                }
                break;
            case Node.TEXT_NODE:
                if (o = o || t.parentNode, "update" === i || o && ae(o) && "STYLE" !== o.tagName && "NOSCRIPT" !== o.tagName) {
                    var f = {
                        tag: "*T",
                        value: t.nodeValue
                    };
                    ce[i](t, o, f, e)
                }
                break;
            case Node.ELEMENT_NODE:
                var h = t,
                    p = h.tagName,
                    v = function(t) {
                        var e = {},
                            n = t.attributes;
                        if (n && n.length > 0)
                            for (var a = 0; a < n.length; a++) {
                                var r = n[a].name;
                                Qn.indexOf(r) < 0 && (e[r] = n[a].value)
                            }
                        "INPUT" === t.tagName && !("value" in e) && t.value && (e.value = t.value);
                        return e
                    }(h);
                switch (o = t.parentElement ? t.parentElement : t.parentNode ? t.parentNode : null, "http://www.w3.org/2000/svg" === h.namespaceURI && (p = "svg:" + p), p) {
                    case "HTML":
                        o = u && o ? Kt(o) : null;
                        var g = {
                            tag: (u ? "iframe:" : "") + p,
                            attributes: v
                        };
                        ce[i](t, o, g, e);
                        break;
                    case "SCRIPT":
                        if ("type" in v && "application/ld+json" === v.type) try {
                            Kn(JSON.parse(h.text.replace($n, "")))
                        } catch (t) {}
                        break;
                    case "NOSCRIPT":
                        var m = {
                            tag: p,
                            attributes: {},
                            value: ""
                        };
                        ce[i](t, o, m, e);
                        break;
                    case "META":
                        var y = "property" in v ? "property" : "name" in v ? "name" : null;
                        if (y && "content" in v) {
                            var b = v.content;
                            switch (v[y]) {
                                case "og:title":
                                    Gr(20, b);
                                    break;
                                case "og:type":
                                    Gr(19, b);
                                    break;
                                case "generator":
                                    Gr(21, b)
                            }
                        }
                        break;
                    case "HEAD":
                        var w = {
                                tag: p,
                                attributes: v
                            },
                            k = u && (null === (a = t.ownerDocument) || void 0 === a ? void 0 : a.location) ? t.ownerDocument.location : location;
                        w.attributes["*B"] = k.protocol + "//" + k.host + k.pathname, ce[i](t, o, w, e);
                        break;
                    case "BASE":
                        var S = ee(t.parentElement);
                        if (S) {
                            var E = document.createElement("a");
                            E.href = v.href, S.data.attributes["*B"] = E.protocol + "//" + E.host + E.pathname
                        }
                        break;
                    case "STYLE":
                        var O = {
                            tag: p,
                            attributes: v,
                            value: na(h)
                        };
                        ce[i](t, o, O, e);
                        break;
                    case "IFRAME":
                        var N = t,
                            T = {
                                tag: p,
                                attributes: v
                            };
                        Gt(N) && (! function(t) {
                            !1 === ae(t) && Ti(t, "load", Jn.bind(this, t, "childList"), !0)
                        }(N), T.attributes["*O"] = "true", N.contentDocument && N.contentWindow && "loading" !== N.contentDocument.readyState && (r = N.contentDocument)), ce[i](t, o, T, e);
                        break;
                    case "LINK":
                        if (ti && "stylesheet" === v.rel) {
                            for (var M in Object.keys(document.styleSheets)) {
                                var x = document.styleSheets[M];
                                if (x.ownerNode == h) {
                                    var _ = {
                                        tag: "STYLE",
                                        attributes: v,
                                        value: aa(x)
                                    };
                                    ce[i](t, o, _, e);
                                    break
                                }
                            }
                            break
                        }
                        var I = {
                            tag: p,
                            attributes: v
                        };
                        ce[i](t, o, I, e);
                        break;
                    case "VIDEO":
                    case "AUDIO":
                    case "SOURCE":
                        "src" in v && v.src.startsWith("data:") && (v.src = "");
                        var C = {
                            tag: p,
                            attributes: v
                        };
                        ce[i](t, o, C, e);
                        break;
                    default:
                        var D = {
                            tag: p,
                            attributes: v
                        };
                        h.shadowRoot && (r = h.shadowRoot), ce[i](t, o, D, e)
                }
        }
        return r
    }

    function ea(t) {
        ae(t) || (! function(t) {
            try {
                var e = u("MutationObserver"),
                    n = e in window ? new window[e](Oi(qn)) : null;
                n && (n.observe(t, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }), Cn.push(n))
            } catch (t) {
                kr(2, 0, t ? t.name : null)
            }
        }(t), xn(t))
    }

    function na(t) {
        var e = t.textContent ? t.textContent.trim() : "",
            n = t.dataset ? Object.keys(t.dataset).length : 0;
        return (0 === e.length || n > 0 || t.id.length > 0) && (e = aa(t.sheet)), e
    }

    function aa(t) {
        var e = "",
            n = null;
        try {
            n = t ? t.cssRules : []
        } catch (t) {
            if (kr(1, 1, t ? t.name : null), t && "SecurityError" !== t.name) throw t
        }
        if (null !== n)
            for (var a = 0; a < n.length; a++) e += n[a].cssText;
        return e
    }
    var ra = [],
        ia = [],
        oa = null,
        ua = null,
        ca = "claritySheetId",
        sa = "claritySheetNum",
        la = {},
        da = {},
        fa = [];

    function ha(t, e) {
        if (-1 === fa.indexOf(t) && fa.push(t), e = e || s(), null == t ? void 0 : t.adoptedStyleSheets) {
            W(36, 1);
            for (var n = [], a = 0, r = t.adoptedStyleSheets; a < r.length; a++) {
                var i = r[a],
                    o = Qr.pageNum;
                i[sa] !== o && (i[sa] = o, i[ca] = di(), va(e, i[ca], 0), va(e, i[ca], 2, aa(i))), n.push(i[ca])
            }
            var u = Jt(t, !0);
            la[u] || (la[u] = []),
                function(t, e) {
                    if (t.length !== e.length) return !1;
                    return t.every((function(t, n) {
                        return t === e[n]
                    }))
                }(n, la[u]) || (! function(t, e, n, a) {
                    ia.push({
                        time: t,
                        event: 45,
                        data: {
                            id: e,
                            operation: n,
                            newIds: a
                        }
                    }), _a(45)
                }(e, t == document ? -1 : Jt(t), 3, n), la[u] = n, da[u] = e)
        }
    }

    function pa() {
        ia = [], ra = []
    }

    function va(t, e, n, a) {
        ra.push({
            time: t,
            event: 46,
            data: {
                id: e,
                operation: n,
                cssRules: a
            }
        }), _a(46)
    }
    var ga = [],
        ma = null,
        ya = null,
        ba = null,
        wa = null,
        ka = null,
        Sa = "clarityAnimationId",
        Ea = "clarityOperationCount",
        Oa = 20;

    function Na() {
        ga = []
    }

    function Ta(t, e, n, a, r, i, o) {
        ga.push({
            time: t,
            event: 44,
            data: {
                id: e,
                operation: n,
                keyFrames: a,
                timing: r,
                targetId: i,
                timeline: o
            }
        }), _a(44)
    }

    function Ma(t, e) {
        null === t && (t = Animation.prototype[e], Animation.prototype[e] = function() {
            return xa(this, e), t.apply(this, arguments)
        })
    }

    function xa(t, e) {
        if (Pi()) {
            var n = t.effect,
                a = Jt(n.target);
            if (null !== a && n.getKeyframes && n.getTiming) {
                if (!t[Sa]) {
                    t[Sa] = di(), t[Ea] = 0;
                    var r = n.getKeyframes(),
                        i = n.getTiming();
                    Ta(s(), t[Sa], 0, JSON.stringify(r), JSON.stringify(i), a)
                }
                if (t[Ea]++ < Oa) {
                    var o = null;
                    switch (e) {
                        case "play":
                            o = 1;
                            break;
                        case "pause":
                            o = 2;
                            break;
                        case "cancel":
                            o = 3;
                            break;
                        case "finish":
                            o = 4
                    }
                    o && Ta(s(), t[Sa], o)
                }
            }
        }
    }

    function _a(t, e, n) {
        return void 0 === e && (e = null), void 0 === n && (n = null), at(this, void 0, void 0, (function() {
            var a, r, i, u, c, l, d, f, h, p, v, g, y, b, w, k, S, E, O, N, T, M, I, C, D, j, A, R, L;
            return rt(this, (function(z) {
                switch (z.label) {
                    case 0:
                        switch (a = n || s(), r = [a, t], t) {
                            case 8:
                                return [3, 1];
                            case 7:
                                return [3, 2];
                            case 45:
                            case 46:
                                return [3, 3];
                            case 44:
                                return [3, 4];
                            case 5:
                            case 6:
                                return [3, 5]
                        }
                        return [3, 12];
                    case 1:
                        return i = Oe, r.push(i.width), r.push(i.height), x(t, i.width, i.height), sr(r), [3, 12];
                    case 2:
                        for (u = 0, c = ja; u < c.length; u++) l = c[u], (r = [l.time, 7]).push(l.data.id), r.push(l.data.interaction), r.push(l.data.visibility), r.push(l.data.name), sr(r);
                        return Fa(), [3, 12];
                    case 3:
                        for (d = 0, f = ia; d < f.length; d++) y = f[d], (r = [y.time, y.event]).push(y.data.id), r.push(y.data.operation), r.push(y.data.newIds), sr(r);
                        for (h = 0, p = ra; h < p.length; h++) y = p[h], (r = [y.time, y.event]).push(y.data.id), r.push(y.data.operation), r.push(y.data.cssRules), sr(r);
                        return pa(), [3, 12];
                    case 4:
                        for (v = 0, g = ga; v < g.length; v++) y = g[v], (r = [y.time, y.event]).push(y.data.id), r.push(y.data.operation), r.push(y.data.keyFrames), r.push(y.data.timing), r.push(y.data.timeline), r.push(y.data.targetId), sr(r);
                        return Na(), [3, 12];
                    case 5:
                        if (2 === ye(e)) return [3, 12];
                        if (!((b = re()).length > 0)) return [3, 11];
                        w = 0, k = b, z.label = 6;
                    case 6:
                        return w < k.length ? (S = k[w], 0 !== (E = ye(e)) ? [3, 8] : [4, ke(e)]) : [3, 10];
                    case 7:
                        E = z.sent(), z.label = 8;
                    case 8:
                        if (2 === E) return [3, 10];
                        for (O = S.data, N = S.metadata.active, T = S.metadata.suspend, M = S.metadata.privacy, I = function(t) {
                                var e = t.metadata.privacy;
                                return "*T" === t.data.tag && !(0 === e || 1 === e)
                            }(S), C = 0, D = N ? ["tag", "attributes", "value"] : ["tag"]; C < D.length; C++)
                            if (O[j = D[C]]) switch (j) {
                                case "tag":
                                    A = Ia(S), R = I ? -1 : 1, r.push(S.id * R), S.parent && N && (r.push(S.parent), S.previous && r.push(S.previous)), r.push(T ? "*M" : O[j]), A && 2 === A.length && r.push("".concat("#").concat(Ca(A[0]), ".").concat(Ca(A[1])));
                                    break;
                                case "attributes":
                                    for (L in O[j]) void 0 !== O[j][L] && r.push(Da(L, O[j][L], M));
                                    break;
                                case "value":
                                    Ot(S.metadata.fraud, S.id, O[j]), r.push(m(O[j], O.tag, M, I))
                            }
                        z.label = 9;
                    case 9:
                        return w++, [3, 6];
                    case 10:
                        6 === t && _(a), sr(function(t) {
                            for (var e = [], n = {}, a = 0, r = null, i = 0; i < t.length; i++)
                                if ("string" == typeof t[i]) {
                                    var o = t[i],
                                        u = n[o] || -1;
                                    u >= 0 ? r ? r.push(u) : (r = [u], e.push(r), a++) : (r = null, e.push(o), n[o] = a++)
                                } else r = null, e.push(t[i]), a++;
                            return e
                        }(r), !o.lean), z.label = 11;
                    case 11:
                        return [3, 12];
                    case 12:
                        return [2]
                }
            }))
        }))
    }

    function Ia(t) {
        if (null !== t.metadata.size && 0 === t.metadata.size.length) {
            var e = te(t.id);
            if (e) return [Math.floor(100 * e.offsetWidth), Math.floor(100 * e.offsetHeight)]
        }
        return t.metadata.size
    }

    function Ca(t) {
        return t.toString(36)
    }

    function Da(t, e, n) {
        return "".concat(t, "=").concat(m(e, 0 === t.indexOf("data-") ? "data-" : t, n))
    }
    var ja = [],
        Aa = null,
        Ra = {},
        La = [],
        za = !1,
        Ha = null;

    function Pa(t, e) {
        !1 === Aa.has(t) && (Aa.set(t, e), (Ha = null === Ha && za ? new IntersectionObserver(Ya, {
            threshold: [0, .05, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
        }) : Ha) && t && t.nodeType === Node.ELEMENT_NODE && Ha.observe(t))
    }

    function Wa(t) {
        return Aa && Aa.has(t)
    }

    function Xa() {
        for (var t = [], e = 0, n = La; e < n.length; e++) {
            var a = n[e],
                r = Jt(a.node);
            r ? (a.state.data.id = r, Ra[r] = a.state.data, ja.push(a.state)) : t.push(a)
        }
        La = t, ja.length > 0 && _a(7)
    }

    function Ya(t) {
        for (var e = 0, n = t; e < n.length; e++) {
            var a = n[e],
                r = a.target,
                i = a.boundingClientRect,
                o = a.intersectionRect,
                u = a.rootBounds;
            if (Aa.has(r) && i.width + i.height > 0 && u.width > 0 && u.height > 0) {
                var c = r ? Jt(r) : null,
                    s = c in Ra ? Ra[c] : {
                        id: c,
                        name: Aa.get(r),
                        interaction: 16,
                        visibility: 0
                    },
                    l = (o ? o.width * o.height * 1 / (u.width * u.height) : 0) > .05 || a.intersectionRatio > .8,
                    d = (l || 10 == s.visibility) && Math.abs(i.top) + u.height > i.height;
                qa(r, s, s.interaction, d ? 13 : l ? 10 : 0), s.visibility >= 13 && Ha && Ha.unobserve(r)
            }
        }
        ja.length > 0 && _a(7)
    }

    function qa(t, e, n, a) {
        var r = n > e.interaction || a > e.visibility;
        e.interaction = n > e.interaction ? n : e.interaction, e.visibility = a > e.visibility ? a : e.visibility, e.id ? (e.id in Ra && r || !(e.id in Ra)) && (Ra[e.id] = e, ja.push(Ua(e))) : La.push({
            node: t,
            state: Ua(e)
        })
    }

    function Ua(t) {
        return {
            time: s(),
            data: {
                id: t.id,
                interaction: t.interaction,
                visibility: t.visibility,
                name: t.name
            }
        }
    }

    function Fa() {
        ja = []
    }

    function Va(t) {
        var e = t.composed && t.composedPath ? t.composedPath() : null,
            n = e && e.length > 0 ? e[0] : t.target;
        return Wn = s() + 3e3, n.nodeType === Node.DOCUMENT_NODE ? n.documentElement : n
    }

    function Ba(t, e, n) {
        void 0 === n && (n = null);
        var a = {
            id: 0,
            hash: null,
            privacy: 2,
            node: t
        };
        if (t) {
            var r = ee(t);
            if (null !== r) {
                var i = r.metadata;
                a.id = r.id, a.hash = r.hash, a.privacy = i.privacy, r.region && function(t, e) {
                    var n = te(t),
                        a = t in Ra ? Ra[t] : {
                            id: t,
                            visibility: 0,
                            interaction: 16,
                            name: Aa.get(n)
                        },
                        r = 16;
                    switch (e) {
                        case 9:
                            r = 20;
                            break;
                        case 27:
                            r = 30
                    }
                    qa(n, a, r, a.visibility)
                }(r.region, e), i.fraud && Ot(i.fraud, r.id, n || r.data.value)
            }
        }
        return a
    }

    function Ja(t, e) {
        return void 0 === e && (e = null), at(this, void 0, void 0, (function() {
            var n, a, r, i, o, u, c, l, d, f, h, p, v, g, b, w, k, S, E, O, N, T, M, _, C, D, j, A, R, L, z, H, P, W, X;
            return rt(this, (function(Y) {
                switch (n = e || s(), a = [n, t], t) {
                    case 13:
                    case 14:
                    case 12:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                        for (r = 0, i = Ge; r < i.length; r++) W = i[r], (o = Ba(W.data.target, W.event)).id > 0 && ((a = [W.time, W.event]).push(o.id), a.push(W.data.x), a.push(W.data.y), sr(a), x(W.event, W.data.x, W.data.y));
                        en();
                        break;
                    case 9:
                        for (u = 0, c = je; u < c.length; u++) W = c[u], l = Ba(W.data.target, W.event, W.data.text), a = [W.time, W.event], d = l.hash ? l.hash.join(".") : "", a.push(l.id), a.push(W.data.x), a.push(W.data.y), a.push(W.data.eX), a.push(W.data.eY), a.push(W.data.button), a.push(W.data.reaction), a.push(W.data.context), a.push(m(W.data.text, "click", l.privacy)), a.push(y(W.data.link)), a.push(d), a.push(W.data.trust), sr(a), Qa(W.time, W.event, d, W.data.x, W.data.y, W.data.reaction, W.data.context);
                        Pe();
                        break;
                    case 38:
                        for (f = 0, h = We; f < h.length; f++) W = h[f], a = [W.time, W.event], (z = Ba(W.data.target, W.event)).id > 0 && (a.push(z.id), a.push(W.data.action), sr(a));
                        Ye();
                        break;
                    case 11:
                        p = Je, a.push(p.width), a.push(p.height), x(t, p.width, p.height), an(), sr(a);
                        break;
                    case 26:
                        v = bn, a.push(v.name), Nn(), sr(a);
                        break;
                    case 27:
                        for (g = 0, b = Ue; g < b.length; g++) W = b[g], w = Ba(W.data.target, W.event, W.data.value), (a = [W.time, W.event]).push(w.id), a.push(m(W.data.value, "input", w.privacy)), sr(a);
                        Be();
                        break;
                    case 21:
                        (k = hn) && (S = Ba(k.start, t), E = Ba(k.end, t), a.push(S.id), a.push(k.startOffset), a.push(E.id), a.push(k.endOffset), yn(), sr(a));
                        break;
                    case 10:
                        for (O = 0, N = rn; O < N.length; O++) W = N[O], T = Ba(W.data.target, W.event), M = Ba(W.data.top, W.event), _ = Ba(W.data.bottom, W.event), C = (null == M ? void 0 : M.hash) ? M.hash.join(".") : "", D = (null == _ ? void 0 : _.hash) ? _.hash.join(".") : "", T.id > 0 && ((a = [W.time, W.event]).push(T.id), a.push(W.data.x), a.push(W.data.y), a.push(C), a.push(D), sr(a), x(W.event, W.data.x, W.data.y, W.time));
                        rn = [], on = null, un = null;
                        break;
                    case 42:
                        for (j = 0, A = xe; j < A.length; j++) W = A[j], a = [W.time, W.event], (z = Ba(W.data.target, W.event)).id > 0 && ((a = [W.time, W.event]).push(z.id), a.push(W.data.type), a.push(m(W.data.value, "change", z.privacy)), a.push(m(W.data.checksum, "checksum", z.privacy)), sr(a));
                        Ie();
                        break;
                    case 39:
                        for (R = 0, L = kn; R < L.length; R++) W = L[R], a = [W.time, W.event], (z = Ba(W.data.target, W.event)).id > 0 && (a.push(z.id), sr(a));
                        En();
                        break;
                    case 22:
                        for (H = 0, P = Ka; H < P.length; H++) W = P[H], (a = [W.time, W.event]).push(W.data.type), a.push(W.data.hash), a.push(W.data.x), a.push(W.data.y), a.push(W.data.reaction), a.push(W.data.context), sr(a, !1);
                        Za();
                        break;
                    case 28:
                        X = wn, a.push(X.visible), sr(a), I(n, X.visible), Mn()
                }
                return [2]
            }))
        }))
    }
    var Ga = [],
        Ka = [];

    function Za() {
        Ka = []
    }

    function Qa(t, e, n, a, r, i, o) {
        void 0 === i && (i = 1), void 0 === o && (o = 0), Ga.push({
            time: t,
            event: 22,
            data: {
                type: e,
                hash: n,
                x: a,
                y: r,
                reaction: i,
                context: o
            }
        }), x(e, a, r)
    }
    var $a, tr, er, nr, ar, rr = 0,
        ir = 0,
        or = null,
        ur = 0;

    function cr() {
        nr = !0, rr = 0, ir = 0, ur = 0, $a = [], tr = [], er = {}, ar = null
    }

    function sr(t, e) {
        if (void 0 === e && (e = !0), nr) {
            var n = s(),
                a = t.length > 1 ? t[1] : null,
                r = JSON.stringify(t);
            switch (a) {
                case 5:
                    rr += r.length;
                case 37:
                case 6:
                case 43:
                case 45:
                case 46:
                    ir += r.length, $a.push(r);
                    break;
                default:
                    tr.push(r)
            }
            H(25);
            var i = function() {
                var t = !1 === o.lean && rr > 0 ? 100 : yi.sequence * o.delay;
                return "string" == typeof o.upload ? Math.max(Math.min(t, 3e4), 100) : o.delay
            }();
            n - ur > 2 * i && (Y(or), or = null), e && null === or && (25 !== a && V(), or = X(dr, i), ur = n, Xr(ir))
        }
    }

    function lr() {
        Y(or), dr(!0), rr = 0, ir = 0, ur = 0, $a = [], tr = [], er = {}, ar = null, nr = !1
    }

    function dr(t) {
        return void 0 === t && (t = !1), at(this, void 0, void 0, (function() {
            var e, n, a, r, i, u, c, s;
            return rt(this, (function(l) {
                switch (l.label) {
                    case 0:
                        return or = null, (e = !1 === o.lean && ir > 0 && (ir < 1048576 || yi.sequence > 0)) && W(1, 1), Xa(),
                            function() {
                                var t = [];
                                Ka = [];
                                for (var e = yi.start + yi.duration, n = Math.max(e - 2e3, 0), a = 0, r = Ga; a < r.length; a++) {
                                    var i = r[a];
                                    i.time >= n && (i.time <= e && Ka.push(i), t.push(i))
                                }
                                Ga = t, Ja(22)
                            }(), kt(),
                            function() {
                                for (var t = 0, e = fa; t < e.length; t++) {
                                    var n = e[t],
                                        a = n == document ? -1 : Jt(n),
                                        r = a in da ? da[a] : null;
                                    ha(document, r)
                                }
                            }(), n = !0 === t, a = JSON.stringify(ki(n)), r = "[".concat(tr.join(), "]"), i = e ? "[".concat($a.join(), "]") : "", u = function(t) {
                                return t.p.length > 0 ? '{"e":'.concat(t.e, ',"a":').concat(t.a, ',"p":').concat(t.p, "}") : '{"e":'.concat(t.e, ',"a":').concat(t.a, "}")
                            }({
                                e: a,
                                a: r,
                                p: i
                            }), n ? (s = null, [3, 3]) : [3, 1];
                    case 1:
                        return [4, pt(u)];
                    case 2:
                        s = l.sent(), l.label = 3;
                    case 3:
                        return P(2, (c = s) ? c.length : u.length), fr(u, c, yi.sequence, n), tr = [], e && ($a = [], ir = 0, rr = 0), [2]
                }
            }))
        }))
    }

    function fr(t, e, n, a) {
        if (void 0 === a && (a = !1), "string" == typeof o.upload) {
            var r = o.upload,
                i = !1;
            if (a && "sendBeacon" in navigator) try {
                (i = navigator.sendBeacon.bind(navigator)(r, t)) && pr(n)
            } catch (t) {}
            if (!1 === i) {
                n in er ? er[n].attempts++ : er[n] = {
                    data: t,
                    attempts: 1
                };
                var u = new XMLHttpRequest;
                u.open("POST", r, !0), u.timeout = 15e3, u.ontimeout = function() {
                    Ei(new Error("".concat("Timeout", " : ").concat(r)))
                }, null !== n && (u.onreadystatechange = function() {
                    Oi(hr)(u, n)
                }), u.withCredentials = !0, e ? (u.setRequestHeader("Accept", "application/x-clarity-gzip"), u.send(e)) : u.send(t)
            }
        } else if (o.upload) {
            (0, o.upload)(t), pr(n)
        }
    }

    function hr(t, e) {
        var n = er[e];
        t && 4 === t.readyState && n && ((t.status < 200 || t.status > 208) && n.attempts <= 1 ? t.status >= 400 && t.status < 500 ? Yr(6) : (0 === t.status && (o.upload = o.fallback ? o.fallback : o.upload), fr(n.data, null, e)) : (ar = {
            sequence: e,
            attempts: n.attempts,
            status: t.status
        }, n.attempts > 1 && Pr(2), 200 === t.status && t.responseText && function(t) {
            for (var e = t && t.length > 0 ? t.split("\n") : [], n = 0, a = e; n < a.length; n++) {
                var r = a[n],
                    i = r && r.length > 0 ? r.split(/ (.*)/) : [""];
                switch (i[0]) {
                    case "END":
                        Yr(6);
                        break;
                    case "UPGRADE":
                        et("Auto");
                        break;
                    case "ACTION":
                        o.action && i.length > 1 && o.action(i[1]);
                        break;
                    case "EXTRACT":
                        i.length > 1 && Ir(i[1]);
                        break;
                    case "SIGNAL":
                        i.length > 1 && mt(i[1])
                }
            }
        }(t.responseText), 0 === t.status && (fr(n.data, null, e, !0), Yr(3)), t.status >= 200 && t.status <= 208 && pr(e), delete er[e]))
    }

    function pr(t) {
        1 === t && ci()
    }
    var vr, gr = {};

    function mr(t) {
        var e = t.error || t;
        return e.message in gr || (gr[e.message] = 0), gr[e.message]++ >= 5 || e && e.message && (vr = {
            message: e.message,
            line: t.lineno,
            column: t.colno,
            stack: e.stack,
            source: t.filename
        }, yr(31)), !0
    }

    function yr(t) {
        return at(this, void 0, void 0, (function() {
            var e;
            return rt(this, (function(n) {
                switch (e = [s(), t], t) {
                    case 31:
                        e.push(vr.message), e.push(vr.line), e.push(vr.column), e.push(vr.stack), e.push(y(vr.source)), sr(e);
                        break;
                    case 33:
                        br && (e.push(br.code), e.push(br.name), e.push(br.message), e.push(br.stack), e.push(br.severity), sr(e, !1));
                        break;
                    case 41:
                        St && (e.push(St.id), e.push(St.target), e.push(St.checksum), sr(e, !1))
                }
                return [2]
            }))
        }))
    }
    var br, wr = {};

    function kr(t, e, n, a, r) {
        void 0 === n && (n = null), void 0 === a && (a = null), void 0 === r && (r = null);
        var i = n ? "".concat(n, "|").concat(a) : "";
        t in wr && wr[t].indexOf(i) >= 0 || (br = {
            code: t,
            name: n,
            message: a,
            stack: r,
            severity: e
        }, t in wr ? wr[t].push(i) : wr[t] = [i], yr(33))
    }
    var Sr, Er = {},
        Or = new Set,
        Nr = {},
        Tr = {},
        Mr = {},
        xr = {};

    function _r() {
        jr()
    }

    function Ir(t) {
        try {
            var e = t && t.length > 0 ? t.split(/ (.*)/) : [""],
                n = e[0].split(/\|(.*)/),
                a = parseInt(n[0]),
                r = n.length > 1 ? n[1] : "",
                i = e.length > 1 ? JSON.parse(e[1]) : {};
            for (var o in Nr[a] = {}, Tr[a] = {}, Mr[a] = {}, xr[a] = r, i) {
                var u = parseInt(o),
                    c = i[o],
                    s = 2;
                switch (c.startsWith("~") ? s = 0 : c.startsWith("!") && (s = 4), s) {
                    case 0:
                        var l = c.substring(1, c.length);
                        Nr[a][u] = Lr(l);
                        break;
                    case 2:
                        Tr[a][u] = c;
                        break;
                    case 4:
                        var d = c.substring(1, c.length);
                        Mr[a][u] = d
                }
            }
        } catch (t) {
            kr(8, 1, t ? t.name : null)
        }
    }

    function Cr(t) {
        return JSON.parse(JSON.stringify(t))
    }

    function Dr() {
        try {
            for (var t in Nr) {
                var e = parseInt(t);
                if ("" == xr[e] || document.querySelector(xr[e])) {
                    var n = Nr[e];
                    for (var a in n) {
                        var r = parseInt(a),
                            i = (h = zr(Cr(n[r]))) ? JSON.stringify(h).substring(0, 1e4) : h;
                        i && Ar(e, r, i)
                    }
                    var o = Tr[e];
                    for (var u in o) {
                        var c = parseInt(u),
                            s = document.querySelectorAll(o[c]);
                        if (s) Ar(e, c, Array.from(s).map((function(t) {
                            return t.textContent
                        })).join("<SEP>").substring(0, 1e4))
                    }
                    var l = Mr[e];
                    for (var d in l) {
                        var f = parseInt(d);
                        Ar(e, f, $t(l[f]).trim().substring(0, 1e4))
                    }
                }
            }
            Or.size > 0 && Pr(40)
        } catch (t) {
            kr(5, 1, t ? t.name : null)
        }
        var h
    }

    function jr() {
        Or.clear()
    }

    function Ar(t, e, n) {
        var a, r = !1;
        t in Er || (Er[t] = {}, r = !0), a = Mr[t], 0 == Object.keys(a).length || e in Er[t] && Er[t][e] == n || (r = !0), Er[t][e] = n, r && Or.add(t)
    }

    function Rr() {
        jr()
    }

    function Lr(t) {
        for (var e = [], n = t.split("."); n.length > 0;) {
            var a = n.shift(),
                r = a.indexOf("["),
                i = a.indexOf("{"),
                o = a.indexOf("}");
            e.push({
                name: r > 0 ? a.substring(0, r) : i > 0 ? a.substring(0, i) : a,
                type: r > 0 ? 1 : i > 0 ? 2 : 3,
                condition: i > 0 ? a.substring(i + 1, o) : null
            })
        }
        return e
    }

    function zr(t, e) {
        if (void 0 === e && (e = window), 0 == t.length) return e;
        var n, a = t.shift();
        if (e && e[a.name]) {
            var r = e[a.name];
            if (1 !== a.type && Hr(r, a.condition)) n = zr(t, r);
            else if (Array.isArray(r)) {
                for (var i = [], o = 0, u = r; o < u.length; o++) {
                    var c = u[o];
                    if (Hr(c, a.condition)) {
                        var s = zr(t, c);
                        s && i.push(s)
                    }
                }
                n = i
            }
            return n
        }
        return null
    }

    function Hr(t, e) {
        if (e) {
            var n = e.split(":");
            return n.length > 1 ? t[n[0]] == n[1] : t[n[0]]
        }
        return !0
    }

    function Pr(t) {
        var e = [s(), t];
        switch (t) {
            case 4:
                var n = O;
                n && ((e = [n.time, n.event]).push(n.data.visible), e.push(n.data.docWidth), e.push(n.data.docHeight), e.push(n.data.screenWidth), e.push(n.data.screenHeight), e.push(n.data.scrollX), e.push(n.data.scrollY), e.push(n.data.pointerX), e.push(n.data.pointerY), e.push(n.data.activityTime), e.push(n.data.scrollTime), sr(e, !1)), M();
                break;
            case 25:
                e.push(R.gap), sr(e);
                break;
            case 35:
                e.push(Sr.check), sr(e, !1);
                break;
            case 3:
                e.push(tt.key), sr(e);
                break;
            case 2:
                e.push(ar.sequence), e.push(ar.attempts), e.push(ar.status), sr(e, !1);
                break;
            case 24:
                j.key && e.push(j.key), e.push(j.value), sr(e);
                break;
            case 34:
                var a = Object.keys(it);
                if (a.length > 0) {
                    for (var r = 0, i = a; r < i.length; r++) {
                        var o = i[r];
                        e.push(o), e.push(it[o])
                    }
                    lt(), sr(e, !1)
                }
                break;
            case 0:
                var u = Object.keys(z);
                if (u.length > 0) {
                    for (var c = 0, l = u; c < l.length; c++) {
                        var d = l[c],
                            f = parseInt(d, 10);
                        e.push(f), e.push(Math.round(z[d]))
                    }
                    z = {}, sr(e, !1)
                }
                break;
            case 1:
                var h = Object.keys(Vr);
                if (h.length > 0) {
                    for (var p = 0, v = h; p < v.length; p++) {
                        var g = v[p];
                        f = parseInt(g, 10);
                        e.push(f), e.push(Vr[g])
                    }
                    Zr(), sr(e, !1)
                }
                break;
            case 36:
                var m = Object.keys(G);
                if (m.length > 0) {
                    for (var y = 0, b = m; y < b.length; y++) {
                        var w = b[y];
                        f = parseInt(w, 10);
                        e.push(f), e.push([].concat.apply([], G[w]))
                    }
                    Q(), sr(e, !1)
                }
                break;
            case 40:
                Or.forEach((function(t) {
                    e.push(t);
                    var n = [];
                    for (var a in Er[t]) {
                        var r = parseInt(a, 10);
                        n.push(r), n.push(Er[t][a])
                    }
                    e.push(n)
                })), jr(), sr(e, !1)
        }
    }

    function Wr() {
        Sr = {
            check: 0
        }
    }

    function Xr(t) {
        if (0 === Sr.check) {
            var e = Sr.check;
            e = yi.sequence >= 128 ? 1 : e, e = yi.pageNum >= 128 ? 7 : e, e = s() > 72e5 ? 2 : e, (e = t > 10485760 ? 2 : e) !== Sr.check && Yr(e)
        }
    }

    function Yr(t) {
        Sr.check = t, ui(), eo()
    }

    function qr() {
        0 !== Sr.check && Pr(35)
    }

    function Ur() {
        Sr = null
    }
    var Fr = null,
        Vr = null;

    function Br() {
        Fr = {}, Vr = {}
    }

    function Jr() {
        Fr = {}, Vr = {}
    }

    function Gr(t, e) {
        e && (e = "".concat(e), t in Fr || (Fr[t] = []), Fr[t].indexOf(e) < 0 && (Fr[t].push(e), t in Vr || (Vr[t] = []), Vr[t].push(e), Fr[t].length > 128 && Yr(5)))
    }

    function Kr() {
        Pr(1)
    }

    function Zr() {
        Vr = {}
    }
    var Qr = null,
        $r = [],
        ti = 0,
        ei = null;

    function ni() {
        var t, e, n;
        ei = null;
        var a = navigator && "userAgent" in navigator ? navigator.userAgent : "",
            r = null !== (n = null === (e = null === (t = null === Intl || void 0 === Intl ? void 0 : Intl.DateTimeFormat()) || void 0 === t ? void 0 : t.resolvedOptions()) || void 0 === e ? void 0 : e.timeZone) && void 0 !== n ? n : "",
            i = (new Date).getTimezoneOffset().toString(),
            u = window.location.ancestorOrigins ? Array.from(window.location.ancestorOrigins).toString() : "",
            c = document && document.title ? document.title : "";
        ti = a.indexOf("Electron") > 0 ? 1 : 0;
        var s, l = function() {
                var t = {
                        session: di(),
                        ts: Math.round(Date.now()),
                        count: 1,
                        upgrade: null,
                        upload: ""
                    },
                    e = pi("_clsk");
                if (e) {
                    var n = e.split("|");
                    n.length >= 5 && t.ts - fi(n[1]) < 18e5 && (t.session = n[0], t.count = fi(n[2]) + 1, t.upgrade = fi(n[3]), t.upload = n.length >= 6 ? "".concat("https://").concat(n[5], "/").concat(n[4]) : "".concat("https://").concat(n[4]))
                }
                return t
            }(),
            f = hi(),
            h = o.projectId || d(location.host);
        Qr = {
            projectId: h,
            userId: f.id,
            sessionId: l.session,
            pageNum: l.count
        }, o.lean = o.track && null !== l.upgrade ? 0 === l.upgrade : o.lean, o.upload = o.track && "string" == typeof o.upload && l.upload && l.upload.length > "https://".length ? l.upload : o.upload, Gr(0, a), Gr(3, c), Gr(1, y(location.href, !!ti)), Gr(2, document.referrer), Gr(15, function() {
            var t = di();
            if (o.track && si(window, "sessionStorage")) {
                var e = sessionStorage.getItem("_cltk");
                t = e || t, sessionStorage.setItem("_cltk", t)
            }
            return t
        }()), Gr(16, document.documentElement.lang), Gr(17, document.dir), Gr(26, "".concat(window.devicePixelRatio)), Gr(28, f.dob.toString()), Gr(29, f.version.toString()), Gr(33, u), Gr(34, r), Gr(35, i), W(0, l.ts), W(1, 0), W(35, ti), navigator && (Gr(9, navigator.language), W(33, navigator.hardwareConcurrency), W(32, navigator.maxTouchPoints), W(34, Math.round(navigator.deviceMemory)), (s = navigator.userAgentData) && s.getHighEntropyValues ? s.getHighEntropyValues(["model", "platform", "platformVersion", "uaFullVersion"]).then((function(t) {
            var e;
            Gr(22, t.platform), Gr(23, t.platformVersion), null === (e = t.brands) || void 0 === e || e.forEach((function(t) {
                Gr(24, t.name + "~" + t.version)
            })), Gr(25, t.model), W(27, t.mobile ? 1 : 0)
        })) : Gr(22, navigator.platform)), screen && (W(14, Math.round(screen.width)), W(15, Math.round(screen.height)), W(16, Math.round(screen.colorDepth)));
        for (var p = 0, v = o.cookies; p < v.length; p++) {
            var g = v[p],
                m = pi(g);
            m && ot(g, m)
        }
        li(f)
    }

    function ai() {
        ei = null, Qr = null
    }

    function ri(t, e) {
        void 0 === e && (e = !0);
        var n = o.lean ? 0 : 1;
        Qr && (n || !1 === e) ? t(Qr, !o.lean) : $r.push({
            callback: t,
            wait: e
        })
    }

    function ii() {
        return Qr ? [Qr.userId, Qr.sessionId, Qr.pageNum].join(".") : ""
    }

    function oi(t) {
        if (void 0 === t && (t = !0), !t) return o.track = !1, gi("_clsk", "", -Number.MAX_VALUE), gi("_clck", "", -Number.MAX_VALUE), eo(), void window.setTimeout(to, 250);
        Pi() && (o.track = !0, li(hi(), 1))
    }

    function ui() {
        gi("_clsk", "", 0)
    }

    function ci() {
        var t = Math.round(Date.now()),
            e = o.upload && "string" == typeof o.upload ? o.upload.replace("https://", "") : "",
            n = o.lean ? 0 : 1;
        ! function(t) {
            $r.length > 0 && $r.forEach((function(e) {
                !e.callback || e.wait && !t || e.callback(Qr, !o.lean)
            }))
        }(n), gi("_clsk", [Qr.sessionId, t, Qr.pageNum, n, e].join("|"), 1)
    }

    function si(t, e) {
        try {
            return !!t[e]
        } catch (t) {
            return !1
        }
    }

    function li(t, e) {
        void 0 === e && (e = null), e = null === e ? t.consent : e;
        var n = Math.ceil((Date.now() + 31536e6) / 864e5),
            a = 0 === t.dob ? null === o.dob ? 0 : o.dob : t.dob;
        (null === t.expiry || Math.abs(n - t.expiry) >= 1 || t.consent !== e || t.dob !== a) && gi("_clck", [Qr.userId, 2, n.toString(36), e, a].join("|"), 365)
    }

    function di() {
        var t = Math.floor(Math.random() * Math.pow(2, 32));
        return window && window.crypto && window.crypto.getRandomValues && Uint32Array && (t = window.crypto.getRandomValues(new Uint32Array(1))[0]), t.toString(36)
    }

    function fi(t, e) {
        return void 0 === e && (e = 10), parseInt(t, e)
    }

    function hi() {
        var t = {
                id: di(),
                version: 0,
                expiry: null,
                consent: 0,
                dob: 0
            },
            e = pi("_clck");
        if (e && e.length > 0) {
            for (var n = e.split("|"), a = 0, r = 0, i = document.cookie.split(";"); r < i.length; r++) {
                a += "_clck" === i[r].split("=")[0].trim() ? 1 : 0
            }
            if (1 === n.length || a > 1) {
                var u = "".concat(";").concat("expires=").concat(new Date(0).toUTCString()).concat(";path=/");
                document.cookie = "".concat("_clck", "=").concat(u), document.cookie = "".concat("_clsk", "=").concat(u)
            }
            n.length > 1 && (t.version = fi(n[1])), n.length > 2 && (t.expiry = fi(n[2], 36)), n.length > 3 && 1 === fi(n[3]) && (t.consent = 1), n.length > 4 && fi(n[1]) > 1 && (t.dob = fi(n[4])), o.track = o.track || 1 === t.consent, t.id = o.track ? n[0] : t.id
        }
        return t
    }

    function pi(t) {
        var e;
        if (si(document, "cookie")) {
            var n = document.cookie.split(";");
            if (n)
                for (var a = 0; a < n.length; a++) {
                    var r = n[a].split("=");
                    if (r.length > 1 && r[0] && r[0].trim() === t) {
                        for (var i = vi(r[1]), o = i[0], u = i[1]; o;) o = (e = vi(u))[0], u = e[1];
                        return u
                    }
                }
        }
        return null
    }

    function vi(t) {
        try {
            var e = decodeURIComponent(t);
            return [e != t, e]
        } catch (t) {}
        return [!1, t]
    }

    function gi(t, e, n) {
        if ((o.track || "" == e) && (navigator && navigator.cookieEnabled || si(document, "cookie"))) {
            var a = function(t) {
                    return encodeURIComponent(t)
                }(e),
                r = new Date;
            r.setDate(r.getDate() + n);
            var i = r ? "expires=" + r.toUTCString() : "",
                u = "".concat(t, "=").concat(a).concat(";").concat(i).concat(";path=/");
            try {
                if (null === ei) {
                    for (var c = location.hostname ? location.hostname.split(".") : [], s = c.length - 1; s >= 0; s--)
                        if (ei = ".".concat(c[s]).concat(ei || ""), s < c.length - 1 && (document.cookie = "".concat(u).concat(";").concat("domain=").concat(ei), pi(t) === e)) return;
                    ei = ""
                }
            } catch (t) {
                ei = ""
            }
            document.cookie = ei ? "".concat(u).concat(";").concat("domain=").concat(ei) : u
        }
    }
    var mi, yi = null;

    function bi() {
        var t = Qr;
        yi = {
            version: l,
            sequence: 0,
            start: 0,
            duration: 0,
            projectId: t.projectId,
            userId: t.userId,
            sessionId: t.sessionId,
            pageNum: t.pageNum,
            upload: 0,
            end: 0
        }
    }

    function wi() {
        yi = null
    }

    function ki(t) {
        return yi.start = yi.start + yi.duration, yi.duration = s() - yi.start, yi.sequence++, yi.upload = t && "sendBeacon" in navigator ? 1 : 0, yi.end = t ? 1 : 0, [yi.version, yi.sequence, yi.start, yi.duration, yi.projectId, yi.userId, yi.sessionId, yi.pageNum, yi.upload, yi.end]
    }

    function Si() {
        mi = []
    }

    function Ei(t) {
        if (mi && -1 === mi.indexOf(t.message)) {
            var e = o.report;
            if (e && e.length > 0) {
                var n = {
                    v: yi.version,
                    p: yi.projectId,
                    u: yi.userId,
                    s: yi.sessionId,
                    n: yi.pageNum
                };
                t.message && (n.m = t.message), t.stack && (n.e = t.stack);
                var a = new XMLHttpRequest;
                a.open("POST", e, !0), a.send(JSON.stringify(n)), mi.push(t.message)
            }
        }
        return t
    }

    function Oi(t) {
        return function() {
            var e = performance.now();
            try {
                t.apply(this, arguments)
            } catch (t) {
                throw Ei(t)
            }
            var n = performance.now() - e;
            P(4, n), n > 30 && (H(7), W(6, n))
        }
    }
    var Ni = [];

    function Ti(t, e, n, a) {
        void 0 === a && (a = !1), n = Oi(n);
        try {
            t[u("addEventListener")](e, n, a), Ni.push({
                event: e,
                target: t,
                listener: n,
                capture: a
            })
        } catch (t) {}
    }

    function Mi() {
        for (var t = 0, e = Ni; t < e.length; t++) {
            var n = e[t];
            try {
                n.target[u("removeEventListener")](n.event, n.listener, n.capture)
            } catch (t) {}
        }
        Ni = []
    }
    var xi = null,
        _i = null,
        Ii = null,
        Ci = 0;

    function Di() {
        return !(Ci++ > 20) || (kr(4, 0), !1)
    }

    function ji() {
        Ci = 0, Ii !== Ri() && (eo(), window.setTimeout(Ai, 250))
    }

    function Ai() {
        to(), W(29, 1)
    }

    function Ri() {
        return location.href ? location.href.replace(location.hash, "") : location.href
    }
    var Li = !1;

    function zi() {
        Li = !0, c = performance.now() + performance.timeOrigin, ve(), Mi(), Si(), Ii = Ri(), Ci = 0, Ti(window, "popstate", ji), null === xi && (xi = history.pushState, history.pushState = function() {
            xi.apply(this, arguments), Pi() && Di() && ji()
        }), null === _i && (_i = history.replaceState, history.replaceState = function() {
            _i.apply(this, arguments), Pi() && Di() && ji()
        })
    }

    function Hi() {
        Ii = null, Ci = 0, Si(), Mi(), ve(), c = 0, Li = !1
    }

    function Pi() {
        return Li
    }

    function Wi(t) {
        if (null === t || Li) return !1;
        for (var e in t) e in o && (o[e] = t[e]);
        return !0
    }

    function Xi() {
        to(), A("clarity", "restart")
    }
    var Yi = Object.freeze({
        __proto__: null,
        start: function() {
            ! function() {
                Et = [], W(26, navigator.webdriver ? 1 : 0);
                try {
                    W(31, window.top == window.self ? 1 : 2)
                } catch (t) {
                    W(31, 0)
                }
            }(), Ti(window, "error", mr), gr = {}, wr = {}
        },
        stop: function() {
            wr = {}
        }
    });

    function qi() {
        return at(this, void 0, void 0, (function() {
            var t, e;
            return rt(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return t = s(), be(e = {
                            id: ii(),
                            cost: 3
                        }), [4, In(document, e, 0, t)];
                    case 1:
                        return n.sent(), ha(document, t), [4, _a(5, e, t)];
                    case 2:
                        return n.sent(), we(e), [2]
                }
            }))
        }))
    }
    var Ui = Object.freeze({
        __proto__: null,
        hashText: $t,
        start: function() {
            Te(), Me(), Fa(), Ha = null, Aa = new WeakMap, Ra = {}, La = [], za = !!window.IntersectionObserver, Ut(), o.delayDom ? Ti(window, "load", (function() {
                Yn()
            })) : Yn(), ge(qi, 1).then((function() {
                Oi(Me)(), Oi(Xa)(), Oi(fn)()
            })), null === oa && (oa = CSSStyleSheet.prototype.replace, CSSStyleSheet.prototype.replace = function() {
                return Pi() && (W(36, 1), this[sa] === Qr.pageNum && va(s(), this[ca], 1, arguments[0])), oa.apply(this, arguments)
            }), null === ua && (ua = CSSStyleSheet.prototype.replaceSync, CSSStyleSheet.prototype.replaceSync = function() {
                return Pi() && (W(36, 1), this[sa] === Qr.pageNum && va(s(), this[ca], 2, arguments[0])), ua.apply(this, arguments)
            }), window.Animation && window.KeyframeEffect && window.KeyframeEffect.prototype.getKeyframes && window.KeyframeEffect.prototype.getTiming && (Na(), Ma(ya, "play"), Ma(ba, "pause"), Ma(wa, "cancel"), Ma(ka, "finish"), null === ma && (ma = Element.prototype.animate, Element.prototype.animate = function() {
                var t = ma.apply(this, arguments);
                return xa(t, "play"), t
            }))
        },
        stop: function() {
            Fa(), Aa = null, Ra = {}, La = [], Ha && (Ha.disconnect(), Ha = null), za = !1, Ft(),
                function() {
                    for (var t = 0, e = Cn; t < e.length; t++) {
                        var n = e[t];
                        n && n.disconnect()
                    }
                    Cn = [], Xn = {}, Dn = [], Hn = [], Wn = 0, Pn = null
                }(), Te(), la = {}, da = {}, fa = [], pa(), Na()
        }
    });
    var Fi, Vi = null;

    function Bi() {
        Vi = null
    }

    function Ji(t) {
        Vi = {
                fetchStart: Math.round(t.fetchStart),
                connectStart: Math.round(t.connectStart),
                connectEnd: Math.round(t.connectEnd),
                requestStart: Math.round(t.requestStart),
                responseStart: Math.round(t.responseStart),
                responseEnd: Math.round(t.responseEnd),
                domInteractive: Math.round(t.domInteractive),
                domComplete: Math.round(t.domComplete),
                loadEventStart: Math.round(t.loadEventStart),
                loadEventEnd: Math.round(t.loadEventEnd),
                redirectCount: Math.round(t.redirectCount),
                size: t.transferSize ? t.transferSize : 0,
                type: t.type,
                protocol: t.nextHopProtocol,
                encodedSize: t.encodedBodySize ? t.encodedBodySize : 0,
                decodedSize: t.decodedBodySize ? t.decodedBodySize : 0
            },
            function(t) {
                at(this, void 0, void 0, (function() {
                    var e, n;
                    return rt(this, (function(a) {
                        return e = s(), n = [e, t], 29 === t && (n.push(Vi.fetchStart), n.push(Vi.connectStart), n.push(Vi.connectEnd), n.push(Vi.requestStart), n.push(Vi.responseStart), n.push(Vi.responseEnd), n.push(Vi.domInteractive), n.push(Vi.domComplete), n.push(Vi.loadEventStart), n.push(Vi.loadEventEnd), n.push(Vi.redirectCount), n.push(Vi.size), n.push(Vi.type), n.push(Vi.protocol), n.push(Vi.encodedSize), n.push(Vi.decodedSize), Bi(), sr(n)), [2]
                    }))
                }))
            }(29)
    }
    var Gi = ["navigation", "resource", "longtask", "first-input", "layout-shift", "largest-contentful-paint", "event"];

    function Ki() {
        try {
            Fi && Fi.disconnect(), Fi = new PerformanceObserver(Oi(Zi));
            for (var t = 0, e = Gi; t < e.length; t++) {
                var n = e[t];
                PerformanceObserver.supportedEntryTypes.indexOf(n) >= 0 && ("layout-shift" === n && P(9, 0), Fi.observe({
                    type: n,
                    buffered: !0
                }))
            }
        } catch (t) {
            kr(3, 1)
        }
    }

    function Zi(t) {
        ! function(t) {
            for (var e = (!("visibilityState" in document) || "visible" === document.visibilityState), n = 0; n < t.length; n++) {
                var a = t[n];
                switch (a.entryType) {
                    case "navigation":
                        Ji(a);
                        break;
                    case "resource":
                        var r = a.name;
                        Gr(4, Qi(r)), r !== o.upload && r !== o.fallback || W(28, a.duration);
                        break;
                    case "longtask":
                        H(7);
                        break;
                    case "first-input":
                        e && W(10, a.processingStart - a.startTime);
                        break;
                    case "event":
                        e && W(37, a.duration);
                        break;
                    case "layout-shift":
                        e && !a.hadRecentInput && P(9, 1e3 * a.value);
                        break;
                    case "largest-contentful-paint":
                        e && W(8, a.startTime)
                }
            }
        }(t.getEntries())
    }

    function Qi(t) {
        var e = document.createElement("a");
        return e.href = t, e.host
    }
    var $i = [Yi, Ui, _n, Object.freeze({
        __proto__: null,
        start: function() {
            Bi(),
                function() {
                    navigator && "connection" in navigator && Gr(27, navigator.connection.effectiveType), window.PerformanceObserver && PerformanceObserver.supportedEntryTypes ? "complete" !== document.readyState ? Ti(window, "load", X.bind(this, Ki, 0)) : Ki() : kr(3, 0)
                }()
        },
        stop: function() {
            Fi && Fi.disconnect(), Fi = null, Bi()
        }
    })];

    function to(t) {
        void 0 === t && (t = null),
            function() {
                try {
                    var t = navigator && "globalPrivacyControl" in navigator && 1 == navigator.globalPrivacyControl;
                    return !1 === Li && "undefined" != typeof Promise && window.MutationObserver && document.createTreeWalker && "now" in Date && "now" in performance && "undefined" != typeof WeakMap && !t
                } catch (t) {
                    return !1
                }
            }() && (Wi(t), zi(), bt(), $i.forEach((function(t) {
                return Oi(t.start)()
            })), null === t && io())
    }

    function eo() {
        Pi() && ($i.slice().reverse().forEach((function(t) {
            return Oi(t.stop)()
        })), wt(), Hi(), void 0 !== ao && (ao[ro] = function() {
            (ao[ro].q = ao[ro].q || []).push(arguments), "start" === arguments[0] && ao[ro].q.unshift(ao[ro].q.pop()) && io()
        }))
    }
    var no = Object.freeze({
            __proto__: null,
            consent: oi,
            event: A,
            hashText: $t,
            identify: ut,
            metadata: ri,
            pause: function() {
                Pi() && (A("clarity", "pause"), null === he && (he = new Promise((function(t) {
                    pe = t
                }))))
            },
            resume: function() {
                Pi() && (he && (pe(), he = null, null === fe && me()), A("clarity", "resume"))
            },
            set: ot,
            signal: function(t) {
                gt = t
            },
            start: to,
            stop: eo,
            upgrade: et,
            version: l
        }),
        ao = window,
        ro = "clarity";

    function io() {
        if (void 0 !== ao) {
            if (ao[ro] && ao[ro].v) return console.warn("Error CL001: Multiple Clarity tags detected.");
            var t = ao[ro] && ao[ro].q || [];
            for (ao[ro] = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    return no[t].apply(no, e)
                }, ao[ro].v = l; t.length > 0;) ao[ro].apply(ao, t.shift())
        }
    }
    io()
}();