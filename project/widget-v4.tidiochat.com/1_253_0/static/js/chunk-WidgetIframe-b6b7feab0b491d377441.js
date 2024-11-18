(self.webpackChunktidio_widget_v4 = self.webpackChunktidio_widget_v4 || []).push([
    [864], {
        3890: function(e, t, n) {
            "use strict";
            n.d(t, {
                PZ: function() {
                    return g
                },
                iq: function() {
                    return b
                }
            });
            n(5116);
            var i = n(1914),
                r = n(5643),
                a = n(729),
                o = n.n(a),
                s = n(2584),
                d = n(5626),
                l = n(9233),
                u = n(7314),
                c = n(9809),
                p = n(9243);
            const f = o()(),
                h = (0, i.createContext)({
                    state: null,
                    dispatch: () => {},
                    iceCandidatesQueueRef: null
                }),
                m = (e, t) => {
                    switch (t.type) {
                        case "SET_OPERATOR_VIDEO_CALL_OFFER":
                            return e ? { ...e,
                                ...t.payload
                            } : t.payload;
                        case "RESET_OPERATOR_VIDEO_CALL_OFFER":
                            return null;
                        case "SET_VIDEOCALL_INSTANCE_ID":
                            return e ? { ...e,
                                instanceId: t.payload.instanceId
                            } : null;
                        default:
                            return e
                    }
                },
                g = () => {
                    const e = (0, i.useContext)(h);
                    if (void 0 === e) throw new Error("useVideoCallOffer must be used within a VideoCallProvider");
                    const t = (0, r.I0)(),
                        n = e.dispatch,
                        {
                            state: a
                        } = e,
                        o = a ? .operatorId,
                        s = Boolean(a ? .offer),
                        d = a ? .instanceId === f;
                    return {
                        state: a,
                        resetVideoCall: (0, i.useCallback)((e => {
                            o && s && (d || e ? .force) && t((0, l.RFv)({
                                operatorId: o,
                                offer: null
                            })), n({
                                type: "RESET_OPERATOR_VIDEO_CALL_OFFER"
                            })
                        }), [n, t, o, s, d]),
                        instanceId: f
                    }
                },
                b = e => {
                    const t = (0, i.useContext)(h);
                    if (void 0 === t) throw new Error("useVideoCallOffer must be used within a VideoCallProvider");
                    const {
                        iceCandidatesQueueRef: n
                    } = t;
                    (0, i.useEffect)((() => d.Z.subscribe("operatorVideoCallIceCandidatesOffered", (t => {
                        t.iceCandidates.forEach((t => {
                            t && e(t)
                        }))
                    }))), [e]);
                    return {
                        popInitialOperatorIceCandidatesPool: (0, i.useCallback)((() => {
                            if (!n) return [];
                            const e = (0, s.Xh)(n.current);
                            return n.current = [], e
                        }), [n])
                    }
                };
            t.ZP = e => {
                let {
                    children: t
                } = e;
                const [n, a] = (0, i.useReducer)(m, null), o = (0, i.useRef)([]), s = (0, r.v9)(u.Xe), g = (0, r.I0)(), b = n ? .instanceId;
                (0, i.useEffect)((() => d.Z.subscribe("operatorVideoCallOffered", (e => {
                    e ? .offer ? ("string" == typeof e.offer.instanceId && e.offer.instanceId === f || void 0 === e.offer.instanceId) && (s !== c.G7.CHAT && g((0, l.kEi)(c.G7.CHAT)), a({
                        type: "SET_OPERATOR_VIDEO_CALL_OFFER",
                        payload: e
                    })) : (a({
                        type: "RESET_OPERATOR_VIDEO_CALL_OFFER"
                    }), o.current = [])
                }))), [s, g]), (0, i.useEffect)((() => d.Z.subscribe("operatorVideoCallIceCandidatesOffered", (e => {
                    e.iceCandidates.forEach((e => {
                        e && o.current.push(e)
                    }))
                }))), []), (0, i.useEffect)((() => d.Z.subscribe("visitorVideoCallOffer", (e => {
                    const t = e ? .offer ? .instanceId;
                    t !== f ? a({
                        type: "RESET_OPERATOR_VIDEO_CALL_OFFER"
                    }) : b !== t && a({
                        type: "SET_VIDEOCALL_INSTANCE_ID",
                        payload: {
                            instanceId: t
                        }
                    })
                }))), [b]);
                const v = (0, i.useMemo)((() => ({
                    state: n,
                    dispatch: a,
                    iceCandidatesQueueRef: o
                })), [n]);
                return (0, p.tZ)(h.Provider, {
                    value: v,
                    children: t
                })
            }
        },
        9302: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addImportantToDefaultStyles: function() {
                    return Cs
                },
                default: function() {
                    return Ts
                }
            });
            var i = n(4942),
                r = n(1914),
                a = n(7400),
                o = n(5643),
                s = n(5796),
                d = n(2009),
                l = n(5717),
                u = n(8076),
                c = n(565),
                p = n(2584),
                f = n(2018),
                h = n(1501),
                m = n(8833),
                g = n(9503),
                b = n(5048),
                v = n(2124),
                y = n(4818),
                w = n(5551),
                x = n(9233),
                C = n(8605),
                E = n(7314),
                k = n(7462),
                A = n(3366),
                Z = n(9611);

            function S(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, (0, Z.Z)(e, t)
            }

            function M(e, t) {
                return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
            }
            var T = n(579),
                I = !1,
                _ = r.createContext(null),
                N = function(e) {
                    return e.scrollTop
                },
                R = "unmounted",
                O = "exited",
                D = "entering",
                L = "entered",
                B = "exiting",
                F = function(e) {
                    function t(t, n) {
                        var i;
                        i = e.call(this, t, n) || this;
                        var r, a = n && !n.isMounting ? t.enter : t.appear;
                        return i.appearStatus = null, t.in ? a ? (r = O, i.appearStatus = D) : r = L : r = t.unmountOnExit || t.mountOnEnter ? R : O, i.state = {
                            status: r
                        }, i.nextCallback = null, i
                    }
                    S(t, e), t.getDerivedStateFromProps = function(e, t) {
                        return e.in && t.status === R ? {
                            status: O
                        } : null
                    };
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this.updateStatus(!0, this.appearStatus)
                    }, n.componentDidUpdate = function(e) {
                        var t = null;
                        if (e !== this.props) {
                            var n = this.state.status;
                            this.props.in ? n !== D && n !== L && (t = D) : n !== D && n !== L || (t = B)
                        }
                        this.updateStatus(!1, t)
                    }, n.componentWillUnmount = function() {
                        this.cancelNextCallback()
                    }, n.getTimeouts = function() {
                        var e, t, n, i = this.props.timeout;
                        return e = t = n = i, null != i && "number" != typeof i && (e = i.exit, t = i.enter, n = void 0 !== i.appear ? i.appear : t), {
                            exit: e,
                            enter: t,
                            appear: n
                        }
                    }, n.updateStatus = function(e, t) {
                        if (void 0 === e && (e = !1), null !== t)
                            if (this.cancelNextCallback(), t === D) {
                                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                                    var n = this.props.nodeRef ? this.props.nodeRef.current : T.findDOMNode(this);
                                    n && N(n)
                                }
                                this.performEnter(e)
                            } else this.performExit();
                        else this.props.unmountOnExit && this.state.status === O && this.setState({
                            status: R
                        })
                    }, n.performEnter = function(e) {
                        var t = this,
                            n = this.props.enter,
                            i = this.context ? this.context.isMounting : e,
                            r = this.props.nodeRef ? [i] : [T.findDOMNode(this), i],
                            a = r[0],
                            o = r[1],
                            s = this.getTimeouts(),
                            d = i ? s.appear : s.enter;
                        !e && !n || I ? this.safeSetState({
                            status: L
                        }, (function() {
                            t.props.onEntered(a)
                        })) : (this.props.onEnter(a, o), this.safeSetState({
                            status: D
                        }, (function() {
                            t.props.onEntering(a, o), t.onTransitionEnd(d, (function() {
                                t.safeSetState({
                                    status: L
                                }, (function() {
                                    t.props.onEntered(a, o)
                                }))
                            }))
                        })))
                    }, n.performExit = function() {
                        var e = this,
                            t = this.props.exit,
                            n = this.getTimeouts(),
                            i = this.props.nodeRef ? void 0 : T.findDOMNode(this);
                        t && !I ? (this.props.onExit(i), this.safeSetState({
                            status: B
                        }, (function() {
                            e.props.onExiting(i), e.onTransitionEnd(n.exit, (function() {
                                e.safeSetState({
                                    status: O
                                }, (function() {
                                    e.props.onExited(i)
                                }))
                            }))
                        }))) : this.safeSetState({
                            status: O
                        }, (function() {
                            e.props.onExited(i)
                        }))
                    }, n.cancelNextCallback = function() {
                        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                    }, n.safeSetState = function(e, t) {
                        t = this.setNextCallback(t), this.setState(e, t)
                    }, n.setNextCallback = function(e) {
                        var t = this,
                            n = !0;
                        return this.nextCallback = function(i) {
                            n && (n = !1, t.nextCallback = null, e(i))
                        }, this.nextCallback.cancel = function() {
                            n = !1
                        }, this.nextCallback
                    }, n.onTransitionEnd = function(e, t) {
                        this.setNextCallback(t);
                        var n = this.props.nodeRef ? this.props.nodeRef.current : T.findDOMNode(this),
                            i = null == e && !this.props.addEndListener;
                        if (n && !i) {
                            if (this.props.addEndListener) {
                                var r = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                                    a = r[0],
                                    o = r[1];
                                this.props.addEndListener(a, o)
                            }
                            null != e && setTimeout(this.nextCallback, e)
                        } else setTimeout(this.nextCallback, 0)
                    }, n.render = function() {
                        var e = this.state.status;
                        if (e === R) return null;
                        var t = this.props,
                            n = t.children,
                            i = (t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef, (0, A.Z)(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                        return r.createElement(_.Provider, {
                            value: null
                        }, "function" == typeof n ? n(e, i) : r.cloneElement(r.Children.only(n), i))
                    }, t
                }(r.Component);

            function P() {}
            F.contextType = _, F.propTypes = {}, F.defaultProps = { in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: P,
                onEntering: P,
                onEntered: P,
                onExit: P,
                onExiting: P,
                onExited: P
            }, F.UNMOUNTED = R, F.EXITED = O, F.ENTERING = D, F.ENTERED = L, F.EXITING = B;
            var j = F,
                z = function(e, t) {
                    return e && t && t.split(" ").forEach((function(t) {
                        return i = t, void((n = e).classList ? n.classList.remove(i) : "string" == typeof n.className ? n.className = M(n.className, i) : n.setAttribute("class", M(n.className && n.className.baseVal || "", i)));
                        var n, i
                    }))
                },
                U = function(e) {
                    function t() {
                        for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(i)) || this).appliedClasses = {
                            appear: {},
                            enter: {},
                            exit: {}
                        }, t.onEnter = function(e, n) {
                            var i = t.resolveArguments(e, n),
                                r = i[0],
                                a = i[1];
                            t.removeClasses(r, "exit"), t.addClass(r, a ? "appear" : "enter", "base"), t.props.onEnter && t.props.onEnter(e, n)
                        }, t.onEntering = function(e, n) {
                            var i = t.resolveArguments(e, n),
                                r = i[0],
                                a = i[1] ? "appear" : "enter";
                            t.addClass(r, a, "active"), t.props.onEntering && t.props.onEntering(e, n)
                        }, t.onEntered = function(e, n) {
                            var i = t.resolveArguments(e, n),
                                r = i[0],
                                a = i[1] ? "appear" : "enter";
                            t.removeClasses(r, a), t.addClass(r, a, "done"), t.props.onEntered && t.props.onEntered(e, n)
                        }, t.onExit = function(e) {
                            var n = t.resolveArguments(e)[0];
                            t.removeClasses(n, "appear"), t.removeClasses(n, "enter"), t.addClass(n, "exit", "base"), t.props.onExit && t.props.onExit(e)
                        }, t.onExiting = function(e) {
                            var n = t.resolveArguments(e)[0];
                            t.addClass(n, "exit", "active"), t.props.onExiting && t.props.onExiting(e)
                        }, t.onExited = function(e) {
                            var n = t.resolveArguments(e)[0];
                            t.removeClasses(n, "exit"), t.addClass(n, "exit", "done"), t.props.onExited && t.props.onExited(e)
                        }, t.resolveArguments = function(e, n) {
                            return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n]
                        }, t.getClassNames = function(e) {
                            var n = t.props.classNames,
                                i = "string" == typeof n,
                                r = i ? "" + (i && n ? n + "-" : "") + e : n[e];
                            return {
                                baseClassName: r,
                                activeClassName: i ? r + "-active" : n[e + "Active"],
                                doneClassName: i ? r + "-done" : n[e + "Done"]
                            }
                        }, t
                    }
                    S(t, e);
                    var n = t.prototype;
                    return n.addClass = function(e, t, n) {
                        var i = this.getClassNames(t)[n + "ClassName"],
                            r = this.getClassNames("enter").doneClassName;
                        "appear" === t && "done" === n && r && (i += " " + r), "active" === n && e && N(e), i && (this.appliedClasses[t][n] = i, function(e, t) {
                            e && t && t.split(" ").forEach((function(t) {
                                return i = t, void((n = e).classList ? n.classList.add(i) : function(e, t) {
                                    return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
                                }(n, i) || ("string" == typeof n.className ? n.className = n.className + " " + i : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + i)));
                                var n, i
                            }))
                        }(e, i))
                    }, n.removeClasses = function(e, t) {
                        var n = this.appliedClasses[t],
                            i = n.base,
                            r = n.active,
                            a = n.done;
                        this.appliedClasses[t] = {}, i && z(e, i), r && z(e, r), a && z(e, a)
                    }, n.render = function() {
                        var e = this.props,
                            t = (e.classNames, (0, A.Z)(e, ["classNames"]));
                        return r.createElement(j, (0, k.Z)({}, t, {
                            onEnter: this.onEnter,
                            onEntered: this.onEntered,
                            onEntering: this.onEntering,
                            onExit: this.onExit,
                            onExiting: this.onExiting,
                            onExited: this.onExited
                        }))
                    }, t
                }(r.Component);
            U.defaultProps = {
                classNames: ""
            }, U.propTypes = {};
            var H = U,
                W = n(9243);
            var $ = e => {
                    let {
                        children: t,
                        timeout: n = 200,
                        classNames: i,
                        in: r,
                        ...a
                    } = e;
                    return (0, W.tZ)(H, { ...a,
                        in: r,
                        timeout: n,
                        classNames: i,
                        mountOnEnter: !0,
                        unmountOnExit: !0,
                        appear: !0,
                        children: t
                    })
                },
                V = n(2972),
                X = n.n(V);

            function q(e, t, n, i) {
                return new(n || (n = Promise))((function(r, a) {
                    function o(e) {
                        try {
                            d(i.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            d(i.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function d(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(o, s)
                    }
                    d((i = i.apply(e, t || [])).next())
                }))
            }

            function Y(e, t) {
                var n, i, r, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function s(s) {
                    return function(d) {
                        return function(s) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a && (a = 0, s[0] && (o = 0)), o;) try {
                                if (n = 1, i && (r = 2 & s[0] ? i.return : s[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, s[1])).done) return r;
                                switch (i = 0, r && (s = [2 & s[0], r.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        r = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < r[1]) {
                                            o.label = r[1], r = s;
                                            break
                                        }
                                        if (r && o.label < r[2]) {
                                            o.label = r[2], o.ops.push(s);
                                            break
                                        }
                                        r[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e], i = 0
                            } finally {
                                n = r = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, d])
                    }
                }
            }
            Object.create;

            function G(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var i, r, a = n.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = a.next()).done;) o.push(i.value)
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (n = a.return) && n.call(a)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return o
            }

            function Q(e, t, n) {
                if (n || 2 === arguments.length)
                    for (var i, r = 0, a = t.length; r < a; r++) !i && r in t || (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
                return e.concat(i || Array.prototype.slice.call(t))
            }
            Object.create;
            "function" == typeof SuppressedError && SuppressedError;
            var K = new Map([
                ["aac", "audio/aac"],
                ["abw", "application/x-abiword"],
                ["arc", "application/x-freearc"],
                ["avif", "image/avif"],
                ["avi", "video/x-msvideo"],
                ["azw", "application/vnd.amazon.ebook"],
                ["bin", "application/octet-stream"],
                ["bmp", "image/bmp"],
                ["bz", "application/x-bzip"],
                ["bz2", "application/x-bzip2"],
                ["cda", "application/x-cdf"],
                ["csh", "application/x-csh"],
                ["css", "text/css"],
                ["csv", "text/csv"],
                ["doc", "application/msword"],
                ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
                ["eot", "application/vnd.ms-fontobject"],
                ["epub", "application/epub+zip"],
                ["gz", "application/gzip"],
                ["gif", "image/gif"],
                ["heic", "image/heic"],
                ["heif", "image/heif"],
                ["htm", "text/html"],
                ["html", "text/html"],
                ["ico", "image/vnd.microsoft.icon"],
                ["ics", "text/calendar"],
                ["jar", "application/java-archive"],
                ["jpeg", "image/jpeg"],
                ["jpg", "image/jpeg"],
                ["js", "text/javascript"],
                ["json", "application/json"],
                ["jsonld", "application/ld+json"],
                ["mid", "audio/midi"],
                ["midi", "audio/midi"],
                ["mjs", "text/javascript"],
                ["mp3", "audio/mpeg"],
                ["mp4", "video/mp4"],
                ["mpeg", "video/mpeg"],
                ["mpkg", "application/vnd.apple.installer+xml"],
                ["odp", "application/vnd.oasis.opendocument.presentation"],
                ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
                ["odt", "application/vnd.oasis.opendocument.text"],
                ["oga", "audio/ogg"],
                ["ogv", "video/ogg"],
                ["ogx", "application/ogg"],
                ["opus", "audio/opus"],
                ["otf", "font/otf"],
                ["png", "image/png"],
                ["pdf", "application/pdf"],
                ["php", "application/x-httpd-php"],
                ["ppt", "application/vnd.ms-powerpoint"],
                ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
                ["rar", "application/vnd.rar"],
                ["rtf", "application/rtf"],
                ["sh", "application/x-sh"],
                ["svg", "image/svg+xml"],
                ["swf", "application/x-shockwave-flash"],
                ["tar", "application/x-tar"],
                ["tif", "image/tiff"],
                ["tiff", "image/tiff"],
                ["ts", "video/mp2t"],
                ["ttf", "font/ttf"],
                ["txt", "text/plain"],
                ["vsd", "application/vnd.visio"],
                ["wav", "audio/wav"],
                ["weba", "audio/webm"],
                ["webm", "video/webm"],
                ["webp", "image/webp"],
                ["woff", "font/woff"],
                ["woff2", "font/woff2"],
                ["xhtml", "application/xhtml+xml"],
                ["xls", "application/vnd.ms-excel"],
                ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
                ["xml", "application/xml"],
                ["xul", "application/vnd.mozilla.xul+xml"],
                ["zip", "application/zip"],
                ["7z", "application/x-7z-compressed"],
                ["mkv", "video/x-matroska"],
                ["mov", "video/quicktime"],
                ["msg", "application/vnd.ms-outlook"]
            ]);

            function J(e, t) {
                var n = function(e) {
                    var t = e.name;
                    if (t && -1 !== t.lastIndexOf(".") && !e.type) {
                        var n = t.split(".").pop().toLowerCase(),
                            i = K.get(n);
                        i && Object.defineProperty(e, "type", {
                            value: i,
                            writable: !1,
                            configurable: !1,
                            enumerable: !0
                        })
                    }
                    return e
                }(e);
                if ("string" != typeof n.path) {
                    var i = e.webkitRelativePath;
                    Object.defineProperty(n, "path", {
                        value: "string" == typeof t ? t : "string" == typeof i && i.length > 0 ? i : e.name,
                        writable: !1,
                        configurable: !1,
                        enumerable: !0
                    })
                }
                return n
            }
            var ee = [".DS_Store", "Thumbs.db"];

            function te(e) {
                return "object" == typeof e && null !== e
            }

            function ne(e) {
                return oe(e.target.files).map((function(e) {
                    return J(e)
                }))
            }

            function ie(e) {
                return q(this, void 0, void 0, (function() {
                    return Y(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, Promise.all(e.map((function(e) {
                                    return e.getFile()
                                })))];
                            case 1:
                                return [2, t.sent().map((function(e) {
                                    return J(e)
                                }))]
                        }
                    }))
                }))
            }

            function re(e, t) {
                return q(this, void 0, void 0, (function() {
                    var n;
                    return Y(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return e.items ? (n = oe(e.items).filter((function(e) {
                                    return "file" === e.kind
                                })), "drop" !== t ? [2, n] : [4, Promise.all(n.map(se))]) : [3, 2];
                            case 1:
                                return [2, ae(de(i.sent()))];
                            case 2:
                                return [2, ae(oe(e.files).map((function(e) {
                                    return J(e)
                                })))]
                        }
                    }))
                }))
            }

            function ae(e) {
                return e.filter((function(e) {
                    return -1 === ee.indexOf(e.name)
                }))
            }

            function oe(e) {
                if (null === e) return [];
                for (var t = [], n = 0; n < e.length; n++) {
                    var i = e[n];
                    t.push(i)
                }
                return t
            }

            function se(e) {
                if ("function" != typeof e.webkitGetAsEntry) return le(e);
                var t = e.webkitGetAsEntry();
                return t && t.isDirectory ? ce(t) : le(e)
            }

            function de(e) {
                return e.reduce((function(e, t) {
                    return Q(Q([], G(e), !1), G(Array.isArray(t) ? de(t) : [t]), !1)
                }), [])
            }

            function le(e) {
                var t = e.getAsFile();
                if (!t) return Promise.reject("".concat(e, " is not a File"));
                var n = J(t);
                return Promise.resolve(n)
            }

            function ue(e) {
                return q(this, void 0, void 0, (function() {
                    return Y(this, (function(t) {
                        return [2, e.isDirectory ? ce(e) : pe(e)]
                    }))
                }))
            }

            function ce(e) {
                var t = e.createReader();
                return new Promise((function(e, n) {
                    var i = [];
                    ! function r() {
                        var a = this;
                        t.readEntries((function(t) {
                            return q(a, void 0, void 0, (function() {
                                var a, o, s;
                                return Y(this, (function(d) {
                                    switch (d.label) {
                                        case 0:
                                            if (t.length) return [3, 5];
                                            d.label = 1;
                                        case 1:
                                            return d.trys.push([1, 3, , 4]), [4, Promise.all(i)];
                                        case 2:
                                            return a = d.sent(), e(a), [3, 4];
                                        case 3:
                                            return o = d.sent(), n(o), [3, 4];
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            s = Promise.all(t.map(ue)), i.push(s), r(), d.label = 6;
                                        case 6:
                                            return [2]
                                    }
                                }))
                            }))
                        }), (function(e) {
                            n(e)
                        }))
                    }()
                }))
            }

            function pe(e) {
                return q(this, void 0, void 0, (function() {
                    return Y(this, (function(t) {
                        return [2, new Promise((function(t, n) {
                            e.file((function(n) {
                                var i = J(n, e.fullPath);
                                t(i)
                            }), (function(e) {
                                n(e)
                            }))
                        }))]
                    }))
                }))
            }
            var fe = n(4101);

            function he(e) {
                return function(e) {
                    if (Array.isArray(e)) return we(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || ye(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function me(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function ge(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? me(Object(n), !0).forEach((function(t) {
                        be(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : me(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function be(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function ve(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var i, r, a = [],
                        o = !0,
                        s = !1;
                    try {
                        for (n = n.call(e); !(o = (i = n.next()).done) && (a.push(i.value), !t || a.length !== t); o = !0);
                    } catch (e) {
                        s = !0, r = e
                    } finally {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                    return a
                }(e, t) || ye(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ye(e, t) {
                if (e) {
                    if ("string" == typeof e) return we(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? we(e, t) : void 0
                }
            }

            function we(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                return i
            }
            var xe = "file-invalid-type",
                Ce = "file-too-large",
                Ee = "file-too-small",
                ke = "too-many-files",
                Ae = function(e) {
                    e = Array.isArray(e) && 1 === e.length ? e[0] : e;
                    var t = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
                    return {
                        code: xe,
                        message: "File type must be ".concat(t)
                    }
                },
                Ze = function(e) {
                    return {
                        code: Ce,
                        message: "File is larger than ".concat(e, " ").concat(1 === e ? "byte" : "bytes")
                    }
                },
                Se = function(e) {
                    return {
                        code: Ee,
                        message: "File is smaller than ".concat(e, " ").concat(1 === e ? "byte" : "bytes")
                    }
                },
                Me = {
                    code: ke,
                    message: "Too many files"
                };

            function Te(e, t) {
                var n = "application/x-moz-file" === e.type || (0, fe.Z)(e, t);
                return [n, n ? null : Ae(t)]
            }

            function Ie(e, t, n) {
                if (_e(e.size))
                    if (_e(t) && _e(n)) {
                        if (e.size > n) return [!1, Ze(n)];
                        if (e.size < t) return [!1, Se(t)]
                    } else {
                        if (_e(t) && e.size < t) return [!1, Se(t)];
                        if (_e(n) && e.size > n) return [!1, Ze(n)]
                    }
                return [!0, null]
            }

            function _e(e) {
                return null != e
            }

            function Ne(e) {
                return "function" == typeof e.isPropagationStopped ? e.isPropagationStopped() : void 0 !== e.cancelBubble && e.cancelBubble
            }

            function Re(e) {
                return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, (function(e) {
                    return "Files" === e || "application/x-moz-file" === e
                })) : !!e.target && !!e.target.files
            }

            function Oe(e) {
                e.preventDefault()
            }

            function De() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function(e) {
                    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                    return t.some((function(t) {
                        return !Ne(e) && t && t.apply(void 0, [e].concat(i)), Ne(e)
                    }))
                }
            }

            function Le(e) {
                return "audio/*" === e || "video/*" === e || "image/*" === e || "text/*" === e || /\w+\/[-+.\w]+/g.test(e)
            }

            function Be(e) {
                return /^.*\.[\w]+$/.test(e)
            }
            var Fe = ["children"],
                Pe = ["open"],
                je = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
                ze = ["refKey", "onChange", "onClick"];

            function Ue(e) {
                return function(e) {
                    if (Array.isArray(e)) return $e(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || We(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function He(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var i, r, a = [],
                        o = !0,
                        s = !1;
                    try {
                        for (n = n.call(e); !(o = (i = n.next()).done) && (a.push(i.value), !t || a.length !== t); o = !0);
                    } catch (e) {
                        s = !0, r = e
                    } finally {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                    return a
                }(e, t) || We(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function We(e, t) {
                if (e) {
                    if ("string" == typeof e) return $e(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $e(e, t) : void 0
                }
            }

            function $e(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                return i
            }

            function Ve(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function Xe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ve(Object(n), !0).forEach((function(t) {
                        qe(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ve(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function qe(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Ye(e, t) {
                if (null == e) return {};
                var n, i, r = function(e, t) {
                    if (null == e) return {};
                    var n, i, r = {},
                        a = Object.keys(e);
                    for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }
            var Ge = (0, r.forwardRef)((function(e, t) {
                var n = e.children,
                    i = Je(Ye(e, Fe)),
                    a = i.open,
                    o = Ye(i, Pe);
                return (0, r.useImperativeHandle)(t, (function() {
                    return {
                        open: a
                    }
                }), [a]), r.createElement(r.Fragment, null, n(Xe(Xe({}, o), {}, {
                    open: a
                })))
            }));
            Ge.displayName = "Dropzone";
            var Qe = {
                disabled: !1,
                getFilesFromEvent: function(e) {
                    return q(this, void 0, void 0, (function() {
                        return Y(this, (function(t) {
                            return te(e) && te(e.dataTransfer) ? [2, re(e.dataTransfer, e.type)] : function(e) {
                                return te(e) && te(e.target)
                            }(e) ? [2, ne(e)] : Array.isArray(e) && e.every((function(e) {
                                return "getFile" in e && "function" == typeof e.getFile
                            })) ? [2, ie(e)] : [2, []]
                        }))
                    }))
                },
                maxSize: 1 / 0,
                minSize: 0,
                multiple: !0,
                maxFiles: 0,
                preventDropOnDocument: !0,
                noClick: !1,
                noKeyboard: !1,
                noDrag: !1,
                noDragEventsBubbling: !1,
                validator: null,
                useFsAccessApi: !0,
                autoFocus: !1
            };
            Ge.defaultProps = Qe, Ge.propTypes = {
                children: X().func,
                accept: X().objectOf(X().arrayOf(X().string)),
                multiple: X().bool,
                preventDropOnDocument: X().bool,
                noClick: X().bool,
                noKeyboard: X().bool,
                noDrag: X().bool,
                noDragEventsBubbling: X().bool,
                minSize: X().number,
                maxSize: X().number,
                maxFiles: X().number,
                disabled: X().bool,
                getFilesFromEvent: X().func,
                onFileDialogCancel: X().func,
                onFileDialogOpen: X().func,
                useFsAccessApi: X().bool,
                autoFocus: X().bool,
                onDragEnter: X().func,
                onDragLeave: X().func,
                onDragOver: X().func,
                onDrop: X().func,
                onDropAccepted: X().func,
                onDropRejected: X().func,
                onError: X().func,
                validator: X().func
            };
            var Ke = {
                isFocused: !1,
                isFileDialogActive: !1,
                isDragActive: !1,
                isDragAccept: !1,
                isDragReject: !1,
                acceptedFiles: [],
                fileRejections: []
            };

            function Je() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = Xe(Xe({}, Qe), e),
                    n = t.accept,
                    i = t.disabled,
                    a = t.getFilesFromEvent,
                    o = t.maxSize,
                    s = t.minSize,
                    d = t.multiple,
                    l = t.maxFiles,
                    u = t.onDragEnter,
                    c = t.onDragLeave,
                    p = t.onDragOver,
                    f = t.onDrop,
                    h = t.onDropAccepted,
                    m = t.onDropRejected,
                    g = t.onFileDialogCancel,
                    b = t.onFileDialogOpen,
                    v = t.useFsAccessApi,
                    y = t.autoFocus,
                    w = t.preventDropOnDocument,
                    x = t.noClick,
                    C = t.noKeyboard,
                    E = t.noDrag,
                    k = t.noDragEventsBubbling,
                    A = t.onError,
                    Z = t.validator,
                    S = (0, r.useMemo)((function() {
                        return function(e) {
                            if (_e(e)) return Object.entries(e).reduce((function(e, t) {
                                var n = ve(t, 2),
                                    i = n[0],
                                    r = n[1];
                                return [].concat(he(e), [i], he(r))
                            }), []).filter((function(e) {
                                return Le(e) || Be(e)
                            })).join(",")
                        }(n)
                    }), [n]),
                    M = (0, r.useMemo)((function() {
                        return function(e) {
                            if (_e(e)) {
                                var t = Object.entries(e).filter((function(e) {
                                    var t = ve(e, 2),
                                        n = t[0],
                                        i = t[1],
                                        r = !0;
                                    return Le(n) || (console.warn('Skipped "'.concat(n, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), r = !1), Array.isArray(i) && i.every(Be) || (console.warn('Skipped "'.concat(n, '" because an invalid file extension was provided.')), r = !1), r
                                })).reduce((function(e, t) {
                                    var n = ve(t, 2),
                                        i = n[0],
                                        r = n[1];
                                    return ge(ge({}, e), {}, be({}, i, r))
                                }), {});
                                return [{
                                    description: "Files",
                                    accept: t
                                }]
                            }
                            return e
                        }(n)
                    }), [n]),
                    T = (0, r.useMemo)((function() {
                        return "function" == typeof b ? b : tt
                    }), [b]),
                    I = (0, r.useMemo)((function() {
                        return "function" == typeof g ? g : tt
                    }), [g]),
                    _ = (0, r.useRef)(null),
                    N = (0, r.useRef)(null),
                    R = He((0, r.useReducer)(et, Ke), 2),
                    O = R[0],
                    D = R[1],
                    L = O.isFocused,
                    B = O.isFileDialogActive,
                    F = (0, r.useRef)("undefined" != typeof window && window.isSecureContext && v && "showOpenFilePicker" in window),
                    P = function() {
                        !F.current && B && setTimeout((function() {
                            N.current && (N.current.files.length || (D({
                                type: "closeDialog"
                            }), I()))
                        }), 300)
                    };
                (0, r.useEffect)((function() {
                    return window.addEventListener("focus", P, !1),
                        function() {
                            window.removeEventListener("focus", P, !1)
                        }
                }), [N, B, I, F]);
                var j = (0, r.useRef)([]),
                    z = function(e) {
                        _.current && _.current.contains(e.target) || (e.preventDefault(), j.current = [])
                    };
                (0, r.useEffect)((function() {
                    return w && (document.addEventListener("dragover", Oe, !1), document.addEventListener("drop", z, !1)),
                        function() {
                            w && (document.removeEventListener("dragover", Oe), document.removeEventListener("drop", z))
                        }
                }), [_, w]), (0, r.useEffect)((function() {
                    return !i && y && _.current && _.current.focus(),
                        function() {}
                }), [_, y, i]);
                var U = (0, r.useCallback)((function(e) {
                        A ? A(e) : console.error(e)
                    }), [A]),
                    H = (0, r.useCallback)((function(e) {
                        e.preventDefault(), e.persist(), ne(e), j.current = [].concat(Ue(j.current), [e.target]), Re(e) && Promise.resolve(a(e)).then((function(t) {
                            if (!Ne(e) || k) {
                                var n = t.length,
                                    i = n > 0 && function(e) {
                                        var t = e.files,
                                            n = e.accept,
                                            i = e.minSize,
                                            r = e.maxSize,
                                            a = e.multiple,
                                            o = e.maxFiles,
                                            s = e.validator;
                                        return !(!a && t.length > 1 || a && o >= 1 && t.length > o) && t.every((function(e) {
                                            var t = ve(Te(e, n), 1)[0],
                                                a = ve(Ie(e, i, r), 1)[0],
                                                o = s ? s(e) : null;
                                            return t && a && !o
                                        }))
                                    }({
                                        files: t,
                                        accept: S,
                                        minSize: s,
                                        maxSize: o,
                                        multiple: d,
                                        maxFiles: l,
                                        validator: Z
                                    });
                                D({
                                    isDragAccept: i,
                                    isDragReject: n > 0 && !i,
                                    isDragActive: !0,
                                    type: "setDraggedFiles"
                                }), u && u(e)
                            }
                        })).catch((function(e) {
                            return U(e)
                        }))
                    }), [a, u, U, k, S, s, o, d, l, Z]),
                    W = (0, r.useCallback)((function(e) {
                        e.preventDefault(), e.persist(), ne(e);
                        var t = Re(e);
                        if (t && e.dataTransfer) try {
                            e.dataTransfer.dropEffect = "copy"
                        } catch (e) {}
                        return t && p && p(e), !1
                    }), [p, k]),
                    $ = (0, r.useCallback)((function(e) {
                        e.preventDefault(), e.persist(), ne(e);
                        var t = j.current.filter((function(e) {
                                return _.current && _.current.contains(e)
                            })),
                            n = t.indexOf(e.target); - 1 !== n && t.splice(n, 1), j.current = t, t.length > 0 || (D({
                            type: "setDraggedFiles",
                            isDragActive: !1,
                            isDragAccept: !1,
                            isDragReject: !1
                        }), Re(e) && c && c(e))
                    }), [_, c, k]),
                    V = (0, r.useCallback)((function(e, t) {
                        var n = [],
                            i = [];
                        e.forEach((function(e) {
                            var t = He(Te(e, S), 2),
                                r = t[0],
                                a = t[1],
                                d = He(Ie(e, s, o), 2),
                                l = d[0],
                                u = d[1],
                                c = Z ? Z(e) : null;
                            if (r && l && !c) n.push(e);
                            else {
                                var p = [a, u];
                                c && (p = p.concat(c)), i.push({
                                    file: e,
                                    errors: p.filter((function(e) {
                                        return e
                                    }))
                                })
                            }
                        })), (!d && n.length > 1 || d && l >= 1 && n.length > l) && (n.forEach((function(e) {
                            i.push({
                                file: e,
                                errors: [Me]
                            })
                        })), n.splice(0)), D({
                            acceptedFiles: n,
                            fileRejections: i,
                            type: "setFiles"
                        }), f && f(n, i, t), i.length > 0 && m && m(i, t), n.length > 0 && h && h(n, t)
                    }), [D, d, S, s, o, l, f, h, m, Z]),
                    X = (0, r.useCallback)((function(e) {
                        e.preventDefault(), e.persist(), ne(e), j.current = [], Re(e) && Promise.resolve(a(e)).then((function(t) {
                            Ne(e) && !k || V(t, e)
                        })).catch((function(e) {
                            return U(e)
                        })), D({
                            type: "reset"
                        })
                    }), [a, V, U, k]),
                    q = (0, r.useCallback)((function() {
                        if (F.current) {
                            D({
                                type: "openDialog"
                            }), T();
                            var e = {
                                multiple: d,
                                types: M
                            };
                            window.showOpenFilePicker(e).then((function(e) {
                                return a(e)
                            })).then((function(e) {
                                V(e, null), D({
                                    type: "closeDialog"
                                })
                            })).catch((function(e) {
                                var t;
                                (t = e) instanceof DOMException && ("AbortError" === t.name || t.code === t.ABORT_ERR) ? (I(e), D({
                                    type: "closeDialog"
                                })) : ! function(e) {
                                    return e instanceof DOMException && ("SecurityError" === e.name || e.code === e.SECURITY_ERR)
                                }(e) ? U(e) : (F.current = !1, N.current ? (N.current.value = null, N.current.click()) : U(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
                            }))
                        } else N.current && (D({
                            type: "openDialog"
                        }), T(), N.current.value = null, N.current.click())
                    }), [D, T, I, v, V, U, M, d]),
                    Y = (0, r.useCallback)((function(e) {
                        _.current && _.current.isEqualNode(e.target) && (" " !== e.key && "Enter" !== e.key && 32 !== e.keyCode && 13 !== e.keyCode || (e.preventDefault(), q()))
                    }), [_, q]),
                    G = (0, r.useCallback)((function() {
                        D({
                            type: "focus"
                        })
                    }), []),
                    Q = (0, r.useCallback)((function() {
                        D({
                            type: "blur"
                        })
                    }), []),
                    K = (0, r.useCallback)((function() {
                        x || (! function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
                            return function(e) {
                                return -1 !== e.indexOf("MSIE") || -1 !== e.indexOf("Trident/")
                            }(e) || function(e) {
                                return -1 !== e.indexOf("Edge/")
                            }(e)
                        }() ? q() : setTimeout(q, 0))
                    }), [x, q]),
                    J = function(e) {
                        return i ? null : e
                    },
                    ee = function(e) {
                        return C ? null : J(e)
                    },
                    te = function(e) {
                        return E ? null : J(e)
                    },
                    ne = function(e) {
                        k && e.stopPropagation()
                    },
                    ie = (0, r.useMemo)((function() {
                        return function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.refKey,
                                n = void 0 === t ? "ref" : t,
                                r = e.role,
                                a = e.onKeyDown,
                                o = e.onFocus,
                                s = e.onBlur,
                                d = e.onClick,
                                l = e.onDragEnter,
                                u = e.onDragOver,
                                c = e.onDragLeave,
                                p = e.onDrop,
                                f = Ye(e, je);
                            return Xe(Xe(qe({
                                onKeyDown: ee(De(a, Y)),
                                onFocus: ee(De(o, G)),
                                onBlur: ee(De(s, Q)),
                                onClick: J(De(d, K)),
                                onDragEnter: te(De(l, H)),
                                onDragOver: te(De(u, W)),
                                onDragLeave: te(De(c, $)),
                                onDrop: te(De(p, X)),
                                role: "string" == typeof r && "" !== r ? r : "presentation"
                            }, n, _), i || C ? {} : {
                                tabIndex: 0
                            }), f)
                        }
                    }), [_, Y, G, Q, K, H, W, $, X, C, E, i]),
                    re = (0, r.useCallback)((function(e) {
                        e.stopPropagation()
                    }), []),
                    ae = (0, r.useMemo)((function() {
                        return function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.refKey,
                                n = void 0 === t ? "ref" : t,
                                i = e.onChange,
                                r = e.onClick,
                                a = Ye(e, ze);
                            return Xe(Xe({}, qe({
                                accept: S,
                                multiple: d,
                                type: "file",
                                style: {
                                    display: "none"
                                },
                                onChange: J(De(i, X)),
                                onClick: J(De(r, re)),
                                tabIndex: -1
                            }, n, N)), a)
                        }
                    }), [N, n, d, X, i]);
                return Xe(Xe({}, O), {}, {
                    isFocused: L && !i,
                    getRootProps: ie,
                    getInputProps: ae,
                    rootRef: _,
                    inputRef: N,
                    open: J(q)
                })
            }

            function et(e, t) {
                switch (t.type) {
                    case "focus":
                        return Xe(Xe({}, e), {}, {
                            isFocused: !0
                        });
                    case "blur":
                        return Xe(Xe({}, e), {}, {
                            isFocused: !1
                        });
                    case "openDialog":
                        return Xe(Xe({}, Ke), {}, {
                            isFileDialogActive: !0
                        });
                    case "closeDialog":
                        return Xe(Xe({}, e), {}, {
                            isFileDialogActive: !1
                        });
                    case "setDraggedFiles":
                        return Xe(Xe({}, e), {}, {
                            isDragActive: t.isDragActive,
                            isDragAccept: t.isDragAccept,
                            isDragReject: t.isDragReject
                        });
                    case "setFiles":
                        return Xe(Xe({}, e), {}, {
                            acceptedFiles: t.acceptedFiles,
                            fileRejections: t.fileRejections
                        });
                    case "reset":
                        return Xe({}, Ke);
                    default:
                        return e
                }
            }

            function tt() {}
            var nt = n(5110),
                it = n(9809);
            var rt = e => (0, W.tZ)(j, { in: e.in,
                    timeout: e.timeout,
                    appear: !0,
                    addEndListener: t => {
                        t.addEventListener("transitionend", e.onAnimationEnded, !1)
                    },
                    children: t => (0, W.tZ)("div", {
                        className: "transition-container",
                        style: { ...e.defaultStyle,
                            ...e.transitionStyles[t]
                        },
                        children: e.children
                    })
                }),
                at = n(4841);
            var ot = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                const [i, a] = r.useState(!1), o = (0, f.a9)();
                return r.useEffect((() => {
                    function n() {
                        e.current && t.current && (e.current.clientHeight - t.current.clientHeight > 270 ? a(!0) : a(!1))
                    }
                    return o && o.addEventListener("resize", n), () => {
                        o && o.removeEventListener("resize", n)
                    }
                }), [t, e, o, n]), r.useEffect((() => {
                    if (e.current && t.current) {
                        const n = e.current.clientHeight - t.current.clientHeight > 270;
                        a(n)
                    }
                }), [i, e, t, n]), i
            };

            function st() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 820;
                const [t, n] = r.useState(""), i = r.useRef();
                return {
                    triggerShake: function() {
                        n("shake"), clearTimeout(i.current), i.current = null, i.current = setTimeout((() => {
                            n("")
                        }), e)
                    },
                    shakeClassName: t,
                    shouldShake: "shake" === t
                }
            }
            var dt = n(7857);
            const lt = {
                "": ["<em>", "</em>"],
                _: ["<strong>", "</strong>"],
                "*": ["<strong>", "</strong>"],
                "~": ["<s>", "</s>"],
                "\n": ["<br />"],
                " ": ["<br />"],
                "-": ["<hr />"]
            };

            function ut(e) {
                return e.replace(RegExp("^" + (e.match(/^(\t| )+/) || "")[0], "gm"), "")
            }

            function ct(e) {
                return (e + "").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            function pt(e, t) {
                let n, i, r, a, o, s = /((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,
                    d = [],
                    l = "",
                    u = t || {},
                    c = 0;

                function p(e) {
                    let t = lt[e[1] || ""],
                        n = d[d.length - 1] == e;
                    return t ? t[1] ? (n ? d.pop() : d.push(e), t[0 | n]) : t[0] : e
                }

                function f() {
                    let e = "";
                    for (; d.length;) e += p(d[d.length - 1]);
                    return e
                }
                for (e = (e = e.replace(/\\([*_[\]{}`<>()#+\-!|.])/g, (e => `&%${e.charCodeAt(1)}%;`))).replace(/^\[(.+?)\]:\s*(.+)$/gm, ((e, t, n) => (u[t.toLowerCase()] = n, ""))).replace(/^\n+|\n+$/g, ""); r = s.exec(e);) i = e.substring(c, r.index), c = s.lastIndex, n = r[0], i.match(/[^\\](\\\\)*\\$/) || ((o = r[3] || r[4]) ? n = '<pre class="code ' + (r[4] ? "poetry" : r[2].toLowerCase()) + '"><code' + (r[2] ? ` class="language-${r[2].toLowerCase()}"` : "") + ">" + ut(ct(o).replace(/^\n+|\n+$/g, "")) + "</code></pre>" : (o = r[6]) ? (o.match(/\./) && (r[5] = r[5].replace(/^\d+/gm, "")), a = pt(ut(r[5].replace(/^\s*[>*+.-]/gm, ""))), ">" == o ? o = "blockquote" : (o = o.match(/\./) ? "ol" : "ul", a = a.replace(/^(.*)(\n|$)/gm, "<li>$1</li>")), n = "<" + o + ">" + a + "</" + o + ">") : r[8] ? n = `<img src="${ct(r[8])}" alt="${ct(r[7])}">` : r[10] ? (l = l.replace("<a>", `<a href="${ct(r[11]||u[i.toLowerCase()])}">`), n = f() + "</a>") : r[9] ? n = "<a>" : r[12] || r[14] ? (o = "h" + (r[14] ? r[14].length : r[13] > "=" ? 1 : 2), n = "<" + o + ">" + pt(r[12] || r[15], u) + "</" + o + ">") : r[16] ? n = "<code>" + ct(r[16]) + "</code>" : (r[17] || r[1]) && (n = p(r[17] || "--"))), l += i, l += n;
                return (l + e.substring(c).replace(/&%[0-9]+%;/g, (e => String.fromCharCode(+e.substring(2, e.length - 2)))) + f()).replace(/^\n+|\n+$/g, "")
            }
            var ft = function() {
                    var e = {
                            base: "https://twemoji.maxcdn.com/v/13.1.1/",
                            ext: ".png",
                            size: "72x72",
                            className: "emoji",
                            convert: {
                                fromCodePoint: function(e) {
                                    var t = "string" == typeof e ? parseInt(e, 16) : e;
                                    if (t < 65536) return s(t);
                                    return s(55296 + ((t -= 65536) >> 10), 56320 + (1023 & t))
                                },
                                toCodePoint: b
                            },
                            onerror: function() {
                                this.parentNode && this.parentNode.replaceChild(d(this.alt, !1), this)
                            },
                            parse: function(t, n) {
                                n && "function" != typeof n || (n = {
                                    callback: n
                                });
                                return ("string" == typeof t ? f : p)(t, {
                                    callback: n.callback || l,
                                    attributes: "function" == typeof n.attributes ? n.attributes : m,
                                    base: "string" == typeof n.base ? n.base : e.base,
                                    ext: n.ext || e.ext,
                                    size: n.folder || (i = n.size || e.size, "number" == typeof i ? i + "x" + i : i),
                                    className: n.className || e.className,
                                    onerror: n.onerror || e.onerror
                                });
                                var i
                            },
                            replace: g,
                            test: function(e) {
                                n.lastIndex = 0;
                                var t = n.test(e);
                                return n.lastIndex = 0, t
                            }
                        },
                        t = {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            "'": "&#39;",
                            '"': "&quot;"
                        },
                        n = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[\xa9\xae\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udeeb\udeec\udef4-\udefc\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78\udd7a-\uddb4\uddb7\uddba\uddbc-\uddcb\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,
                        i = /\uFE0F/g,
                        r = String.fromCharCode(8205),
                        a = /[&<>'"]/g,
                        o = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/,
                        s = String.fromCharCode;
                    return e;

                    function d(e, t) {
                        return document.createTextNode(t ? e.replace(i, "") : e)
                    }

                    function l(e, t) {
                        return "".concat(t.base, t.size, "/", e, t.ext)
                    }

                    function u(e, t) {
                        for (var n, i, r = e.childNodes, a = r.length; a--;) 3 === (i = (n = r[a]).nodeType) ? t.push(n) : 1 !== i || "ownerSVGElement" in n || o.test(n.nodeName.toLowerCase()) || u(n, t);
                        return t
                    }

                    function c(e) {
                        return b(e.indexOf(r) < 0 ? e.replace(i, "") : e)
                    }

                    function p(e, t) {
                        for (var i, r, a, o, s, l, p, f, h, m, g, b, v, y = u(e, []), w = y.length; w--;) {
                            for (a = !1, o = document.createDocumentFragment(), l = (s = y[w]).nodeValue, f = 0; p = n.exec(l);) {
                                if ((h = p.index) !== f && o.appendChild(d(l.slice(f, h), !0)), b = c(g = p[0]), f = h + g.length, v = t.callback(b, t), b && v) {
                                    for (r in (m = new Image).onerror = t.onerror, m.setAttribute("draggable", "false"), i = t.attributes(g, b)) i.hasOwnProperty(r) && 0 !== r.indexOf("on") && !m.hasAttribute(r) && m.setAttribute(r, i[r]);
                                    m.className = t.className, m.alt = g, m.src = v, a = !0, o.appendChild(m)
                                }
                                m || o.appendChild(d(g, !1)), m = null
                            }
                            a && (f < l.length && o.appendChild(d(l.slice(f), !0)), s.parentNode.replaceChild(o, s))
                        }
                        return e
                    }

                    function f(e, t) {
                        return g(e, (function(e) {
                            var n, i, r = e,
                                o = c(e),
                                s = t.callback(o, t);
                            if (o && s) {
                                for (i in r = "<img ".concat('class="', t.className, '" ', 'draggable="false" ', 'alt="', e, '"', ' src="', s, '"'), n = t.attributes(e, o)) n.hasOwnProperty(i) && 0 !== i.indexOf("on") && -1 === r.indexOf(" " + i + "=") && (r = r.concat(" ", i, '="', n[i].replace(a, h), '"'));
                                r = r.concat("/>")
                            }
                            return r
                        }))
                    }

                    function h(e) {
                        return t[e]
                    }

                    function m() {
                        return null
                    }

                    function g(e, t) {
                        return String(e).replace(n, t)
                    }

                    function b(e, t) {
                        for (var n = [], i = 0, r = 0, a = 0; a < e.length;) i = e.charCodeAt(a++), r ? (n.push((65536 + (r - 55296 << 10) + (i - 56320)).toString(16)), r = 0) : 55296 <= i && i <= 56319 ? r = i : n.push(i.toString(16));
                        return n.join(t || "-")
                    }
                }(),
                ht = ft;
            const mt = {
                    ALLOWED_TAGS: ["img"],
                    ALLOWED_ATTR: ["class", "src", "alt"]
                },
                gt = {
                    ALLOWED_TAGS: ["img", "a", "strong", "br", "ol", "ul", "li"],
                    ALLOWED_ATTR: ["class", "href", "target", "src", "alt", "rel"]
                },
                bt = {
                    ALLOWED_TAGS: ["img", "a"],
                    ALLOWED_ATTR: ["class", "href", "target", "src", "alt"]
                },
                vt = e => e.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
                yt = {
                    base: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.1.1/"
                },
                wt = e => {
                    let t;
                    return t = e.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'), t = t.replace(/((?:href|src)=['"])?(\b(https?|ftp):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;()$'[\]*]*[-A-Z0-9+&@#/%=~_|])/gim, ((e, t) => void 0 !== t ? e : `<a href="${e}" target="_blank" rel="noopener noreferrer">${e}</a>`)), t = t.replace(/(^|\s|strong>|li>)(([a-zA-Z0-9-_.+])+@[a-zA-Z0-9_]+?(\.[a-zA-Z]{2,})+)/gim, '$1<a href="mailto:$2" target="_blank" rel="noopener noreferrer">$2</a>'), t = t.replace(/(^|\s|strong>|li>)(www\.[-\w.,@?^=%&:/]+(\b|$))/gim, '$1<a href="http://$2" target="_blank" rel="noopener noreferrer">$2</a>'), t
                },
                xt = e => {
                    if ("string" != typeof e) return "";
                    let t = vt(e);
                    var n;
                    return t = wt(t), t = ht.parse(t, yt), n = t, t = (0, dt.sanitize)(n, bt), t
                },
                Ct = e => {
                    if ("string" != typeof e) return "";
                    let t = vt(e);
                    return t = t.replace(/\n(?!\d.|-|\*)/g, "<br>"), t = t.replace(/_/g, "&#95;"), t = pt(t), t = t.replace(/<br>/g, "\n"), t = t.replace(/(<a href="undefined">)([^<]*)(<\/a>)/g, "[$2]"), t = t.replace(/<a href/g, '<a target="_blank" rel="noopener nofollow" href'), t = ht.parse(t, yt), t = wt(t), t = (0, dt.sanitize)(t, gt), t
                },
                Et = e => {
                    if ("string" != typeof e) return "";
                    let t = vt(e);
                    return t = ht.parse(t, yt), t = (0, dt.sanitize)(t, mt), t
                },
                kt = e => {
                    const t = e.values.reduce(((e, t) => ({ ...e,
                        [t]: (0, v.dW)(t)
                    })), {});
                    return e.render(t)
                };
            kt.propTypes = {
                values: X().arrayOf(X().string).isRequired,
                render: X().func.isRequired
            };
            const At = e => {
                const {
                    value: t,
                    children: n,
                    replacements: i,
                    fallback: a,
                    linkify: o,
                    emojify: s,
                    markdownify: d
                } = e, [, l] = (0, r.useState)(0), u = () => {
                    l((e => !e))
                };
                return (0, r.useEffect)((() => (v.Up.on("translationsChanged", u), () => {
                    v.Up.off("translationsChanged", u)
                })), []), n ? (0, W.tZ)(kt, {
                    values: t,
                    render: n
                }) : i ? (0, W.tZ)(W.HY, {
                    children: (0, v.dW)(t, i, a)
                }) : d ? (0, W.tZ)("span", {
                    dangerouslySetInnerHTML: {
                        __html: Ct((0, v.dW)(t, null, a))
                    }
                }) : o || s ? (0, W.tZ)("span", {
                    dangerouslySetInnerHTML: {
                        __html: xt((0, v.dW)(t, null, a))
                    }
                }) : (0, W.tZ)(W.HY, {
                    children: (0, v.dW)(t, null, a)
                })
            };
            At.defaultProps = {
                fallback: null,
                replacements: null,
                emojify: !1,
                linkify: !1,
                markdownify: !1,
                children: void 0
            };
            var Zt = At;

            function St(e, t, n) {
                return n ? n(e) : "email" === t ? (0, p.vV)(e) : "tel" === t ? (0, p.EY)(e) : "" !== e.trim()
            }
            class Mt extends r.Component {
                constructor(e) {
                    super(e), (0, i.Z)(this, "onChange", (e => {
                        const {
                            value: t,
                            checked: n,
                            type: i
                        } = e.target, r = "checkbox" !== i ? t : n, a = St(r, this.props.type, this.props.validator);
                        this.setState({
                            value: r,
                            isValid: a
                        }), this.props.onChange && this.props.onChange(r, a), this.props.isValidCallback && this.props.isValidCallback(a)
                    })), (0, i.Z)(this, "onKeyDown", (e => {
                        const {
                            keyCode: t
                        } = e, n = 13 === t;
                        return n && !this.state.isValid && (this.setState({
                            showErrorIcon: !0
                        }), this.props.onKeyDown && this.props.onKeyDown(!1), clearTimeout(this.errorIconHideTimer), this.errorIconHideTimer = null, this.errorIconHideTimer = setTimeout((() => {
                            this.setState({
                                showErrorIcon: !1
                            })
                        }), 820)), !(!n || !this.state.isValid) && (e.preventDefault(), this.props.onKeyDown && this.props.onKeyDown(t), !0)
                    })), (0, i.Z)(this, "onFocus", (() => {
                        this.props.onFocus && this.props.onFocus(), this.props.shouldToggleHeader && !this.props.disabled && this.isMobile && this.props.dispatch((0, x.xKy)(!0))
                    })), (0, i.Z)(this, "onBlur", (() => {
                        this.props.onBlur && this.props.onBlur(), this.props.shouldToggleHeader && !this.props.disabled && this.isMobile && setTimeout((() => {
                            this.props.dispatch((0, x.xKy)(!1))
                        }), 100)
                    })), (0, i.Z)(this, "getError", (() => void 0 === this.props.forceErrorIcon ? this.state.showErrorIcon : this.props.forceErrorIcon));
                    const t = null === e.value ? "" : e.value;
                    this.state = {
                        value: t,
                        isValid: St(t, e.type, e.validator),
                        showErrorIcon: !1
                    }, this.isMobile = (0, p.tq)(), this.errorIconHideTimer = null
                }
                componentDidMount() {
                    const {
                        isValid: e
                    } = this.state;
                    this.state.isValid && (this.props.onChange && this.props.onChange(this.state.value, e), this.props.isValidCallback && this.props.isValidCallback(e))
                }
                render() {
                    let e = null,
                        t = null;
                    return "checkbox" !== this.props.type ? (e = (0, W.tZ)(Zt, {
                        value: [this.props.placeholder],
                        children: e => (0, W.tZ)("input", {
                            type: this.props.type,
                            placeholder: e[this.props.placeholder],
                            onChange: this.onChange,
                            onKeyDown: this.onKeyDown,
                            value: this.state.value,
                            readOnly: this.props.disabled,
                            className: this.props.disabled ? "disabled" : "",
                            ref: this.props.bindInputRef,
                            onFocus: this.onFocus,
                            onBlur: this.onBlur
                        })
                    }), t = (0, W.tZ)(at.Eh, {}), this.state.isValid ? t = (0, W.tZ)(at.qB, {}) : !this.state.isValid && this.getError() && (t = (0, W.tZ)(at.x8, {}))) : e = (0, W.BX)("label", {
                        htmlFor: this.props.id,
                        children: [(0, W.tZ)("input", {
                            id: this.props.id,
                            type: this.props.type,
                            onChange: this.onChange,
                            checked: this.state.value,
                            disabled: this.props.disabled,
                            className: this.props.disabled ? "disabled" : "",
                            ref: this.props.bindInputRef
                        }), (0, W.tZ)(Zt, {
                            value: this.props.placeholder,
                            linkify: !0
                        })]
                    }), (0, W.BX)("div", {
                        className: `field-wrapper ${this.props.shakeClassName} ${this.getError()?"field-wrapper-with-error":""}`,
                        children: [t, e]
                    })
                }
            }
            Mt.defaultProps = {
                placeholder: "",
                bindInputRef: void 0,
                onChange: void 0,
                onKeyDown: null,
                disabled: !1,
                isValidCallback: null,
                value: null,
                forceErrorIcon: !1,
                id: void 0,
                validator: void 0,
                shouldToggleHeader: !0,
                onFocus: void 0,
                onBlur: void 0,
                shakeClassName: ""
            };
            var Tt = e => {
                const t = (0, o.I0)();
                return (0, W.tZ)(Mt, { ...e,
                    dispatch: t
                })
            };
            var It = () => {
                const e = (0, o.v9)(E.U1);
                return (0, W.tZ)("button", {
                    className: "user-data-modal-submit",
                    type: "submit",
                    style: {
                        background: `linear-gradient(99deg, ${e[0]}, ${e[1]})`,
                        color: e[2] || "#fff",
                        boxShadow: `${(0,p.a7)(e[3]??"",.24)} 0px 8px 32px 0px`
                    },
                    children: (0, W.tZ)(Zt, {
                        value: "offlineSendButton"
                    })
                })
            };
            const _t = e => (0, W.tZ)("div", {
                className: e.className ? e.className : void 0,
                style: e.avatarSrc ? {
                    backgroundImage: `url(${(0,p.XH)(e.avatarSrc)})`
                } : void 0,
                children: e.name && (0, W.tZ)("span", {
                    children: e.name
                })
            });
            var Nt = r.memo(_t);
            var Rt = () => {
                const e = (0, o.v9)(E.RX),
                    t = (0, o.v9)(E.vU);
                if (e) return (0, W.tZ)("div", {
                    className: "user-data-modal-operators",
                    children: (0, W.tZ)(Nt, {
                        avatarSrc: e,
                        className: "user-data-modal-operator"
                    }, 1)
                });
                const n = t.find((e => e.isOnline)) ? t.filter((e => e.isOnline)) : t;
                return (0, W.tZ)("div", {
                    className: "user-data-modal-operators",
                    children: n.slice(0, 4).map((e => (0, W.tZ)(Nt, {
                        avatarSrc: e.avatarSrc,
                        className: "user-data-modal-operator"
                    }, e.id)))
                })
            };
            var Ot = e => {
                let {
                    parentContainerRef: t,
                    style: n
                } = e;
                const i = (0, o.I0)(),
                    [a, s] = r.useState(""),
                    [d, l] = r.useState(!1),
                    [c, p] = r.useState(!1),
                    {
                        triggerShake: f,
                        shakeClassName: h
                    } = st(),
                    m = r.useRef(null),
                    g = r.useRef(null),
                    b = ot(t, g);
                r.useEffect((() => {
                    m.current && m.current.focus()
                }), []);
                const v = e => (e && e.preventDefault(), d ? (i((0, x.PCB)(a)), !0) : (p(!0), f(), !1));
                return (0, W.BX)(u.q.div, {
                    className: "always-online",
                    style: n,
                    children: [b && (0, W.tZ)(Rt, {}), (0, W.BX)("form", {
                        onSubmit: v,
                        ref: g,
                        children: [(0, W.tZ)("div", {
                            className: "user-data-modal-text",
                            children: (0, W.tZ)(Zt, {
                                value: "alwaysOnlineEngageMessage",
                                emojify: !0
                            })
                        }), (0, W.tZ)("div", {
                            className: "user-data-modal-fields",
                            children: (0, W.tZ)(Tt, {
                                type: "email",
                                placeholder: "preformInput_email",
                                onChange: (e, t) => {
                                    s(e), l(t), p(!1)
                                },
                                onKeyDown: e => {
                                    13 === e && v()
                                },
                                disabled: !1,
                                bindInputRef: m,
                                forceErrorIcon: c,
                                shakeClassName: h
                            })
                        }), (0, W.tZ)(It, {})]
                    })]
                })
            };
            const Dt = (e, t) => e.trim().length >= t;
            var Lt = e => {
                let {
                    value: t = "",
                    placeholder: n = "",
                    onChange: i,
                    onKeyDown: a,
                    disabled: o = !1,
                    isValidCallback: s,
                    forceErrorIcon: d = !1,
                    onFocus: l,
                    onBlur: u,
                    shakeClassName: c = "",
                    minLength: p = 1
                } = e;
                const [f, h] = (0, r.useState)(t), [m, g] = (0, r.useState)(Dt(f, p)), [b, v] = (0, r.useState)(!1), y = (0, r.useRef)(), w = e => {
                    const t = e.target.value,
                        n = Dt(t, p);
                    h(t), g(n), i && i(t, n), s && s(m)
                }, x = e => {
                    const {
                        keyCode: t
                    } = e, n = 13 === t;
                    return n && !m && (v(!0), y.current && clearTimeout(y.current), y.current = setTimeout((() => {
                        v(!1)
                    }), 820)), !(!n || !m) && (e.preventDefault(), a && a(t), !0)
                }, C = () => {
                    l && l()
                }, E = () => {
                    u && u()
                }, k = () => void 0 === d ? b : d, A = (0, W.tZ)(Zt, {
                    value: [n],
                    children: e => (0, W.tZ)("textarea", {
                        placeholder: e[n],
                        onChange: w,
                        onKeyDown: x,
                        value: f,
                        readOnly: o,
                        className: o ? "disabled" : "",
                        onFocus: C,
                        onBlur: E,
                        rows: 4
                    })
                }), Z = m ? (0, W.tZ)(at.qB, {}) : !m && k() ? (0, W.tZ)(at.x8, {}) : (0, W.tZ)(at.Eh, {});
                return (0, W.BX)("div", {
                    className: `field-wrapper ${c} ${k()?"field-wrapper-with-error":""}`,
                    children: [Z, A]
                })
            };
            var Bt = e => {
                    let {
                        parentContainerRef: t
                    } = e;
                    const n = (0, o.I0)(),
                        i = (0, o.v9)(E.MP),
                        [a] = (0, r.useState)(!i),
                        [s, d] = (0, r.useState)(""),
                        [l, c] = (0, r.useState)(!1),
                        p = (0, o.v9)(E.a7),
                        [f, h] = (0, r.useState)(p ? ? ""),
                        [m, g] = (0, r.useState)(f.length >= 3),
                        [b, v] = (0, r.useState)(!1),
                        [y, w] = (0, r.useState)(!1),
                        {
                            triggerShake: C,
                            shakeClassName: k
                        } = st(),
                        A = r.useRef();
                    r.useEffect((() => {
                        A.current && A.current.focus()
                    }), []);
                    const Z = r.useRef(null),
                        S = ot(t, Z);

                    function M(e) {
                        return e && e.preventDefault(), (i || l) && m ? (n((0, x.xvt)(i || s, f)), w(!0), !0) : (v(!0), C(), !1)
                    }
                    return (0, u.Yz)(y, {
                        config: u.vc.stiff,
                        from: {
                            transform: "translateY(-10px)"
                        },
                        enter: {
                            transform: "translateY(0)",
                            willChange: "filter"
                        },
                        leave: {
                            transform: "translateY(10px)"
                        },
                        exitBeforeEnter: !0
                    })(((e, t) => t ? (0, W.tZ)(u.q.div, {
                        style: e,
                        children: (0, W.BX)("div", {
                            className: "create-ticket-success-wrapper",
                            children: [(0, W.tZ)(at.dU, {}), (0, W.tZ)("div", {
                                className: "user-data-modal-text",
                                children: (0, W.tZ)(Zt, {
                                    value: "ticketSubmittedConfirmation",
                                    emojify: !0
                                })
                            })]
                        })
                    }) : (0, W.BX)(u.q.div, {
                        className: "always-online",
                        style: e,
                        "data-testid": "createTicketModal",
                        children: [S && (0, W.tZ)(Rt, {}), (0, W.BX)("form", {
                            onSubmit: M,
                            ref: Z,
                            noValidate: !0,
                            children: [(0, W.tZ)("div", {
                                className: "user-data-modal-text",
                                children: (0, W.tZ)(Zt, {
                                    value: "alwaysOnlineEngageMessage",
                                    emojify: !0
                                })
                            }), a && (0, W.tZ)("div", {
                                className: "user-data-modal-fields",
                                children: (0, W.tZ)(Tt, {
                                    type: "email",
                                    placeholder: "preformInput_email",
                                    onChange: (e, t) => {
                                        d(e), c(t), v(!1)
                                    },
                                    disabled: !1,
                                    bindInputRef: A,
                                    forceErrorIcon: !l && b,
                                    shakeClassName: l ? "" : k
                                })
                            }), (0, W.tZ)("div", {
                                className: "user-data-modal-fields",
                                children: (0, W.tZ)(Lt, {
                                    value: f,
                                    placeholder: "preformInput_firstmsg",
                                    minLength: 3,
                                    onChange: (e, t) => {
                                        h(e), g(t), v(!1)
                                    },
                                    disabled: !1,
                                    forceErrorIcon: !m && b,
                                    shakeClassName: m ? "" : k
                                })
                            }), (0, W.tZ)(It, {})]
                        })]
                    })))
                },
                Ft = n(1936),
                Pt = n(9245),
                jt = n(2561);
            const zt = {
                    name: "13if91l",
                    styles: "position:relative;z-index:1;margin-bottom:8px;border:1px solid rgba(108, 125, 159, 0.24);border-radius:5px"
                },
                Ut = {
                    name: "1oo9jfo",
                    styles: "border-color:#f6303a;select{&:not(:focus):invalid{color:#f6303a;}}svg{fill:#f6303a;}"
                },
                Ht = {
                    name: "1fqx5q",
                    styles: "border-color:#007DFC;svg{fill:#647491;}"
                },
                Wt = {
                    name: "zaj675",
                    styles: 'overflow:hidden;display:block;width:100%;padding:9px 40px 10px 12px;border:none;border-radius:0;outline:none;background:transparent;color:#080F1A;font-size:15px;appearance:none;white-space:nowrap;text-overflow:ellipsis;&:not(:focus):invalid{color:#8894ab;}option[value=""][disabled]{display:none;}'
                },
                $t = {
                    name: "znmab8",
                    styles: "position:absolute;top:0;bottom:0;right:8px;width:24px;height:24px;margin:auto;pointer-events:none;svg{top:auto;left:auto;fill:#647491;}"
                },
                Vt = (0, p.$U)();
            var Xt = e => {
                let {
                    onChange: t,
                    hasError: n,
                    shakeClassName: i
                } = e;
                const a = (0, o.v9)(E.p7),
                    [s, d] = (0, r.useState)(!1),
                    [l, u] = (0, r.useState)("");
                if (!a.length) return null;
                const c = (0, v.dW)("routingRules_selector", null, "Select Department...");
                return (0, W.BX)("div", {
                    css: [zt, n && Ut, s && Ht, "", ""],
                    className: i,
                    children: [(0, W.BX)("select", {
                        css: Wt,
                        value: l,
                        required: !0,
                        form: "novalidatedform",
                        onFocus: () => {
                            d(!0)
                        },
                        onBlur: () => {
                            d(!1)
                        },
                        onChange: e => {
                            const n = e.target.value,
                                i = a.find((e => e.position === Number(n))) ? .departmentId;
                            Vt || u(n), t && i && t(i)
                        },
                        title: c,
                        children: [(0, W.tZ)("option", {
                            value: "",
                            disabled: !0,
                            children: c
                        }), a.map((e => {
                            let {
                                alias: t,
                                position: n
                            } = e;
                            return (0, W.tZ)("option", {
                                value: n,
                                children: t
                            }, n)
                        }))]
                    }), (0, W.tZ)("div", {
                        css: $t,
                        children: (0, W.tZ)(at.K5, {})
                    })]
                })
            };
            let qt = function(e) {
                return e.EMAIL = "email", e.NAME = "name", e.PHONE = "phone", e.GDPR_CONSENT = "gdprConsent", e.SIGN_UP_NEWSLETTER = "signUpNewsletter", e.PRECHAT_FIELD_TYPE_EMAIL_CONSENT = "emailConsent", e
            }({});
            const Yt = r.forwardRef(((e, t) => {
                const {
                    value: n,
                    type: i,
                    placeholder: a,
                    forceErrorIcon: o = !1,
                    disabled: s = !1,
                    onKeyDown: d,
                    onInputChange: l = (() => {}),
                    shakeClassName: u = ""
                } = e, c = (0, r.useMemo)((() => (e => {
                    switch (e) {
                        case qt.EMAIL:
                            return "email";
                        case qt.NAME:
                            return "text";
                        case qt.PHONE:
                            return "tel";
                        case qt.GDPR_CONSENT:
                        case qt.PRECHAT_FIELD_TYPE_EMAIL_CONSENT:
                        case qt.SIGN_UP_NEWSLETTER:
                            return "checkbox";
                        default:
                            return ""
                    }
                })(i)), [i]), p = (0, r.useMemo)((() => ((e, t) => {
                    switch (e) {
                        case qt.PRECHAT_FIELD_TYPE_EMAIL_CONSENT:
                            return t && "object" == typeof t ? {
                                validator: () => !0,
                                placeholder: "signUpNewsletter",
                                value: "subscribed" === t.value
                            } : {
                                validator: () => !0,
                                placeholder: "signUpNewsletter"
                            };
                        case qt.SIGN_UP_NEWSLETTER:
                            return {
                                validator: () => !0,
                                placeholder: "signUpNewsletter"
                            };
                        default:
                            return {}
                    }
                })(i, n)), [i, n]);
                return c ? i === qt.GDPR_CONSENT ? (0, W.tZ)("div", {
                    className: `field-wrapper ${u} ${o?"field-wrapper-with-error":""}`,
                    children: (0, W.BX)("label", {
                        htmlFor: i,
                        children: [(0, W.tZ)("input", {
                            id: i,
                            type: c,
                            checked: Boolean(n),
                            onChange: e => {
                                l(e.target.checked, e.target.checked, i)
                            },
                            disabled: s,
                            className: s ? "disabled" : "",
                            ref: t
                        }), (0, W.tZ)(Zt, {
                            value: a,
                            linkify: !0,
                            markdownify: !0
                        })]
                    })
                }) : (0, W.tZ)(Tt, {
                    id: i,
                    type: c,
                    onChange: (e, t) => {
                        l(e, t, i)
                    },
                    value: n,
                    disabled: s,
                    placeholder: a,
                    bindInputRef: t,
                    onKeyDown: d,
                    forceErrorIcon: o,
                    shakeClassName: u,
                    ...p
                }) : null
            }));
            var Gt = Yt;

            function Qt(e) {
                const t = e;
                return [Pt.WQ, "signUpNewsletter"].forEach((e => {
                    void 0 !== t[e] && (t[e] = Boolean(t[e]))
                })), "boolean" == typeof t[Pt.WQ] && (t[Pt.WQ] = {
                    value: t[Pt.WQ] ? "subscribed" : "unsubscribed",
                    date: Math.round(Date.now() / 1e3),
                    setBy: "user"
                }), t
            }
            const Kt = "SET_INPUT",
                Jt = "SHOW_ERROR_ON_INVALID_FIELDS";

            function en(e, t) {
                switch (t.type) {
                    case Kt:
                        {
                            const {
                                fieldType: n,
                                isValid: i,
                                value: r
                            } = t;
                            return { ...e,
                                inputValues: { ...e.inputValues,
                                    [n]: {
                                        isValid: i,
                                        value: r
                                    }
                                },
                                fieldsWithErrors: { ...e.fieldsWithErrors,
                                    [n]: !1
                                }
                            }
                        }
                    case Jt:
                        {
                            const t = Object.entries(e.inputValues).filter((e => {
                                let [, t] = e;
                                return !t.isValid
                            })).reduce(((e, t) => {
                                let [n] = t;
                                return { ...e,
                                    [n]: !0
                                }
                            }), {});
                            return { ...e,
                                fieldsWithErrors: t
                            }
                        }
                    default:
                        throw new Error
                }
            }
            const tn = e => {
                const t = e.areDepartmentsEnabled && !e.isDepartmentSelected ? [...e.preChatFields, {
                        type: Pt.V5
                    }] : e.preChatFields,
                    [n, i] = r.useReducer(en, t, (function(t) {
                        const n = {};
                        return t.forEach((e => {
                            n[e.type] = {
                                isValid: !1,
                                value: e.value ? e.value : ""
                            }
                        })), e.prechatSubscriptionCheckboxDefaultValue && n.emailConsent && !n.emailConsent.value && (n.emailConsent = { ...n.emailConsent,
                            value: !0
                        }), {
                            inputValues: n,
                            fieldsWithErrors: {}
                        }
                    })),
                    {
                        triggerShake: a,
                        shakeClassName: o
                    } = st();
                const s = (e, t, n) => {
                        i({
                            type: Kt,
                            fieldType: n,
                            value: e,
                            isValid: t
                        })
                    },
                    d = e => {
                        i({
                            type: Kt,
                            fieldType: Pt.V5,
                            value: e,
                            isValid: !0
                        })
                    },
                    l = r.useRef();
                r.useEffect((() => {
                    l.current && l.current.focus()
                }), []), r.useEffect((() => {
                    e.isDepartmentSelected && d(e.selectedDepartmentId)
                }), [e.isDepartmentSelected, e.selectedDepartmentId]);
                const c = r.useRef(!1);
                r.useEffect((() => {
                    if (!c.current) {
                        const t = e.preChatFields.map((e => e.type));
                        (0, jt.f)() ? .trackEvent({
                            eventName: "tidio_prechat_started",
                            params: {
                                email: t.includes("email"),
                                phone: t.includes("phone"),
                                name: t.includes("name"),
                                consent_given: t.includes("emailConsent")
                            }
                        }), c.current = !0
                    }
                }), [e.preChatFields]);
                const p = r.useRef(),
                    f = ot(e.parentContainerRef, p, e.preChatFields);

                function h(t) {
                    t && t.preventDefault();
                    return Object.values(n.inputValues).every((e => !0 === e.isValid)) ? (e.dispatch((0, x.GzK)(function(e) {
                        const t = {};
                        return Object.keys(e).forEach((n => {
                            t[n] = e[n].value
                        })), !0 === t.signUpNewsletter && (t.emailConsent = !0), Qt(t)
                    }(n.inputValues))), !0) : (a(), i({
                        type: Jt
                    }), !1)
                }
                const m = e => {
                        13 === e && h()
                    },
                    g = (e, t) => (0, W.tZ)(Gt, {
                        type: e.type,
                        placeholder: e.placeholder,
                        onInputChange: s,
                        disabled: !1,
                        onKeyDown: m,
                        forceErrorIcon: n.fieldsWithErrors[e.type],
                        shakeClassName: n.fieldsWithErrors[e.type] && o ? o : "",
                        ref: 0 === t ? l : void 0,
                        value: e.value
                    }, e.type),
                    b = e.preChatFields.map((e => {
                        const t = n.inputValues[e.type] ? .value;
                        return { ...e,
                            value: t
                        }
                    })),
                    v = b.filter((e => {
                        let {
                            type: t
                        } = e;
                        return t !== Pt.WQ
                    })),
                    y = b.find((e => {
                        let {
                            type: t
                        } = e;
                        return t === Pt.WQ
                    })),
                    w = n.fieldsWithErrors[Pt.V5];
                return (0, W.BX)(u.q.div, {
                    className: "pre-chat",
                    style: e.style,
                    children: [f && (0, W.tZ)(Rt, {}), (0, W.BX)("form", {
                        onSubmit: h,
                        ref: p,
                        children: [(0, W.tZ)("div", {
                            className: "user-data-modal-text",
                            children: (0, W.tZ)(Zt, {
                                value: "preformMessage",
                                emojify: !0
                            })
                        }), (0, W.BX)("div", {
                            className: "user-data-modal-fields",
                            children: [v.map(g), e.areDepartmentsEnabled && !e.isDepartmentSelected && (0, W.tZ)(Xt, {
                                onChange: d,
                                shakeClassName: w && o ? o : "",
                                hasError: w
                            }), y && g(y, v.length)]
                        }), (0, W.tZ)(It, {})]
                    })]
                })
            };
            tn.defaultProps = {
                selectedDepartmentId: null
            };
            var nn = (0, o.$j)((e => ({
                    preChatFields: (0, Ft.c)(e.preChat.data, e.visitor),
                    areDepartmentsEnabled: (0, E.dr)(e),
                    isDepartmentSelected: (0, E.Gs)(e),
                    selectedDepartmentId: (0, E.tc)(e),
                    prechatSubscriptionCheckboxDefaultValue: (0, E.N2)(e)
                })))(tn),
                rn = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIADwAPAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEDBAUHAgn/2gAIAQEAAAAA+lYAj8cy5ndHO8VNN0IFrk62gjEYudH9iLQPN6lec+0VmtG038L9UpWh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAhAAAAAAAP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMQAAAAAAD/xAAuEAABAwMACAUEAwAAAAAAAAABAgMEAAURBhASEyAhQVEiMmKRwSNxcoExQqH/2gAIAQEAAT8A14PHdbuuMvcMY2wPGs88Z6ClT5qzlUh0n8qjXmawoFay8jqlfwaZebkNIdbOUrGRwCpxJmySf53qtdgJNu+zq+G7N7u4yPUoK9xrsyC3bWfUVL9zw6QxiS1IA5Y2F/Gpplb7qGkeZasCkNpabQhPlQkJH64CMDJ5DvWkk+Gu3uRm3wp5ak42Dkp2TnJNC4S2hhyPvT0Wg4z9xVqmuN3SNJl/TabUcITzxkY2j3piRHkjLLrbg9Ks1gjVL0nnvLVuAllHTllf7Jp+VKknLz7jn5K+KAAGNY8JykkHuDg0xe7rG5JkqUB/VY2x/tR9LkBvEmMsud2/KfeumrtXSu9dKFZNf//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQIBAT8AB//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AB//Z";
            var an = (0, l.iv)("background:#fff;height:100%;width:100%;display:flex;justify-content:center;align-items:center;position:absolute;z-index:10;padding:50px 55px;background-image:linear-gradient(#fff, #fff),linear-gradient(#fff, #fff);background-size:100% 40px,100% calc(100% - 40px);background-repeat:no-repeat;background-position:top,bottom;.user-data-modal-filler{width:280%;background-color:#fff;display:block;position:absolute;left:-90%;top:0;height:100%;z-index:-1;border-radius:0 0 53% 53%;background-clip:padding-box;}.user-data-modal-close{position:absolute;right:16px;top:16px;svg#ic_close{width:17px;height:17px;fill:#6d7e9e;position:static;top:10px;left:12px;}}.create-ticket-success-wrapper{display:flex;flex-direction:column;row-gap:18px;align-items:center;svg{width:54px;height:54px;}}.pre-chat,.always-online{max-width:100%;}.user-data-modal-text{font-size:20px;font-weight:600;text-align:center;color:#00122e;margin-bottom:32px;}.user-data-modal-fields{#ic_arrow{fill:#007dfc;}svg{width:24px;height:24px;}input,textarea{border:solid 1px rgba(108, 125, 159, 0.24);font-size:15px;padding:9px 12px 10px 40px;margin:0 0 8px 0;line-height:normal;}label{padding-top:12px;padding-right:0;margin:0 0 8px 10px;input{margin-left:5px;margin-top:4px;}span{font-size:11px;text-align:justify;color:#00122e;max-height:120px;display:block;overflow-y:auto;a{color:#00122e;}}}}.user-data-modal-submit{width:100%;height:40px;font-size:16px;font-weight:600;color:#ffffff;border-radius:6px;background:linear-gradient(99deg, #2a27da, #00ccff);margin:16px 0;position:relative;&::after{transition:background 0.2s;content:'';border-radius:6px;background:rgba(0, 0, 0, 0);left:0;top:0;position:absolute;width:100%;height:100%;}&:hover{&::after{background:rgba(0, 0, 0, 0.08);}}}.user-data-modal-operators{text-align:center;white-space:nowrap;margin-bottom:32px;.user-data-modal-operator{width:66px;height:66px;border-radius:31px;background-size:cover;background-position:center;display:inline-block;background-image:url(", rn, ");margin-right:-4%;}}.emoji{margin:0;}", "");
            const on = e => {
                const t = (0, o.I0)(),
                    n = (0, o.v9)((e => e.showUserDataModal)),
                    i = (0, o.v9)((e => e.widgetColor)),
                    a = r.useRef(null);
                r.useEffect((() => () => {
                    (0, f.Rn)()
                }), []);
                const s = (0, u.Yz)(n, {
                        config: u.vc.stiff,
                        from: {
                            transform: "translateY(-10px)"
                        },
                        enter: {
                            transform: "translateY(0)"
                        },
                        leave: {
                            transform: "translateY(10px)"
                        },
                        exitBeforeEnter: !0
                    }),
                    {
                        fillerHeight: d,
                        ...l
                    } = e.style,
                    c = r.useMemo((() => ({
                        backgroundImage: `linear-gradient(#fff, #fff), linear-gradient(118deg, ${i[0]}, ${i[1]})`,
                        ...l
                    })), [i, l]);
                return (0, W.BX)(u.q.div, {
                    className: "user-data-modal",
                    style: c,
                    ref: a,
                    "data-testid": "userDataModal",
                    css: an,
                    children: [(0, W.tZ)("button", {
                        className: "user-data-modal-close",
                        onClick: function() {
                            t((0, x.SnQ)(nt.M.closeModalClicked)), t((0, x.XSP)(!1))
                        },
                        type: "button",
                        "aria-label": (0, v.dW)("closeUserDataModal", null, "Close modal"),
                        children: (0, W.tZ)(at.x8, {})
                    }), s(((e, t) => "prechat" === t ? (0, W.tZ)(nn, {
                        parentContainerRef: a,
                        style: e
                    }) : "alwaysOnline" === t ? (0, W.tZ)(Ot, {
                        parentContainerRef: a,
                        style: e
                    }) : "createTicket" === t ? (0, W.tZ)(Bt, {
                        parentContainerRef: a
                    }) : null)), (0, W.tZ)(u.q.div, {
                        className: "user-data-modal-filler",
                        style: {
                            height: d
                        }
                    })]
                })
            };
            var sn = () => {
                const e = (0, o.v9)((e => e.showUserDataModal));
                return (0, u.Yz)(!1 !== e, {
                    config: {
                        tension: 150,
                        friction: 20
                    },
                    from: {
                        opacity: 0,
                        fillerHeight: "93%",
                        moveContent: "translateY(-20px)"
                    },
                    enter: {
                        opacity: 1,
                        fillerHeight: "96%",
                        moveContent: "translateY(0)"
                    },
                    leave: {
                        opacity: 0,
                        fillerHeight: "105%",
                        moveContent: "translateY(20px)"
                    }
                })(((e, t) => t && (0, W.tZ)(on, {
                    style: e
                })))
            };
            class dn extends r.Component {
                constructor() {
                    super(...arguments), (0, i.Z)(this, "state", {
                        hasError: !1
                    })
                }
                static getDerivedStateFromError() {
                    return {
                        hasError: !0
                    }
                }
                componentDidCatch(e) {
                    (0, g.A)("Error while loading async chunk", {
                        message: e.message
                    }), this.props.onDidCatch()
                }
                render() {
                    return this.state.hasError ? null : this.props.children
                }
            }
            var ln = dn,
                un = n(3890);
            const cn = r.lazy((() => n.e(236).then(n.bind(n, 3253))));
            var pn = () => {
                const e = (0, un.PZ)().state,
                    [t, n] = (0, r.useState)(Boolean(e));
                return (0, r.useEffect)((() => {
                    e && n(!0)
                }), [e]), (0, W.tZ)(ln, {
                    onDidCatch: () => {},
                    children: (0, W.tZ)(r.Suspense, {
                        fallback: null,
                        children: t && (0, W.tZ)(cn, {
                            resetVideoCallConnectionRequest: () => {
                                n(!1)
                            }
                        })
                    })
                })
            };
            const fn = 66,
                hn = 104,
                mn = 142;
            var gn = e => {
                let {
                    statusBarRef: t
                } = e;
                const n = (0, o.v9)((e => e.operators)),
                    i = (0, o.v9)(E.RX),
                    a = (0, r.useMemo)((() => {
                        if (i) return [{
                            avatarSrc: i,
                            name: "",
                            id: 1
                        }];
                        const e = n.filter((e => e.isOnline));
                        return n.find((e => e.isOnline)) ? e : n
                    }), [n, i]),
                    [s, d] = (0, r.useState)(a),
                    l = (0, r.useRef)(null);
                (0, r.useEffect)((() => {
                    if (t ? .current && l ? .current) {
                        const e = t.current.clientHeight > 0 ? t.current.clientHeight - 0 : 40,
                            n = (e => {
                                let t = 3;
                                return e < fn ? t = 0 : e < hn ? t = 1 : e < mn && (t = 2), t
                            })(l.current.clientHeight - e);
                        d(a.slice(0, n))
                    }
                }), [a, t]);
                const {
                    avatarTransition: c
                } = (0, u.q_)({
                    from: {
                        avatarTransition: 0
                    },
                    avatarTransition: 1
                });
                return (0, W.tZ)("div", {
                    className: "operators",
                    ref: l,
                    children: s.map(((e, t) => (0, W.tZ)(u.q.div, {
                        style: {
                            zIndex: s.length - t + 1,
                            transform: c.interpolate((e => {
                                const n = s.length - t - 1,
                                    i = 3 - s.length + 1;
                                return `translate3d(0,${-7*i+7*i*e+26*n+e*n*12}px,0)`
                            }))
                        },
                        children: (0, W.tZ)(Nt, {
                            name: e.name,
                            avatarSrc: e.avatarSrc,
                            className: "ava48"
                        })
                    }, e.id)))
                })
            };
            var bn = {
                name: "1s5t5ku",
                styles: "span{background:#fff;padding:6px 8px;border-radius:2px;box-shadow:0 2px 8px 0 rgba(0, 18, 46, 0.32);font-size:13px;position:absolute;opacity:0;pointer-events:none;white-space:nowrap;transition:all 0.16s ease-in-out;z-index:1;right:calc(100% + 10px);top:50%;transform:translate(5px,-50%);color:#06132b;}@media (hover: hover){&:hover{span{opacity:1;transform:translate(0,-50%);}}}"
            };
            var vn = () => {
                const e = (0, o.I0)(),
                    t = (0, o.v9)(E.U1),
                    n = (0, r.useRef)(!1);
                return (0, r.useEffect)((() => () => {
                    n.current && window.tidioChatApi ? .trigger("headerCloseHover", {
                        type: "off"
                    })
                }), []), (0, W.BX)("button", {
                    className: "material-icons exit-chat ripple",
                    onClick: () => {
                        e((0, x.SnQ)(nt.M.chatClosed)), e((0, x.AKm)(!1)), e((0, x.ejT)(!1))
                    },
                    onMouseEnter: () => {
                        n.current = !0, window.tidioChatApi ? .trigger("headerCloseHover", {
                            type: "on"
                        })
                    },
                    onMouseLeave: () => {
                        n.current = !1, window.tidioChatApi ? .trigger("headerCloseHover", {
                            type: "off"
                        })
                    },
                    style: {
                        color: t[2]
                    },
                    type: "button",
                    "aria-label": (0, v.dW)("minimize", null, "Minimize"),
                    css: bn,
                    children: [(0, W.tZ)(at.gR, {}), (0, W.tZ)("span", {
                        children: (0, v.dW)("minimize", null, "Minimize")
                    })]
                })
            };
            const yn = (0, r.forwardRef)(((e, t) => {
                let {
                    widgetColor: n,
                    isProjectOnline: i
                } = e;
                if (i && !(0, v.dW)("weAreOnline") || !i && !(0, v.dW)("alwaysOnlineTopBar")) return (0, W.tZ)("div", {
                    ref: t,
                    className: "offline-message",
                    style: {
                        height: 0,
                        padding: 0
                    }
                });
                const r = n[0] !== n[1] ? `linear-gradient(135deg, ${(0,p.a7)(n[0],.72)} 0%, ${(0,p.a7)(n[1],.72)} 100%)` : (0, p.a7)((0, p.g6)(n[0], -.1), .72);
                return (0, W.tZ)("div", {
                    ref: t,
                    className: "offline-message",
                    style: {
                        ["" + (r.includes("linear-gradient") ? "backgroundImage" : "backgroundColor")]: r
                    },
                    children: i ? (0, W.tZ)("span", {
                        className: "online",
                        children: (0, W.tZ)(Zt, {
                            value: "weAreOnline",
                            emojify: !0
                        })
                    }) : (0, W.tZ)("span", {
                        children: (0, W.tZ)(Zt, {
                            value: "alwaysOnlineTopBar",
                            emojify: !0
                        })
                    })
                })
            }));
            var wn = yn;
            var xn = () => {
                const e = (0, o.I0)(),
                    t = (0, o.v9)((e => e.showOptionsDropdown)),
                    n = (0, o.v9)((e => e.notificationSnoozed)),
                    i = (0, o.v9)(E.bP),
                    a = (0, o.v9)(E.aI),
                    s = (0, o.v9)(E.Us),
                    d = (0, o.v9)((e => e.isSoundEnabled)),
                    l = (0, o.v9)((e => e.chatOptions)),
                    u = (0, o.v9)(E.Xe),
                    c = (0, o.v9)(E.U1),
                    p = (0, o.v9)(E.Xf),
                    f = (0, o.v9)((e => e.isMobile)),
                    [h] = (0, r.useState)(n),
                    m = (0, r.useCallback)((() => {
                        e((0, x.num)())
                    }), [e]),
                    g = (0, r.useCallback)((() => {
                        e((0, x.sdi)(!1)), e((0, x.b2X)(!n))
                    }), [n, e]),
                    b = (0, r.useCallback)((() => {
                        if (e((0, x.SnQ)(nt.M.rateConversationClicked)), e((0, x.sdi)(!1)), i || s) {
                            const t = a ? (0, v.dW)("disabledTextInputPlaceholder", null, "Choose one of the options above \u261d\ufe0f") : (0, v.dW)("newMessageDisabledAlert", null, "Please enter your email first.");
                            e((0, x.wp$)(t))
                        } else m()
                    }), [e, i, s, a, m]),
                    w = (0, r.useCallback)((t => {
                        e((0, x.sdi)(t))
                    }), [e]),
                    C = () => d,
                    k = () => !i && !s && (u !== y.views.welcome && !1 !== l ? .rate);
                return (0, W.BX)(W.HY, {
                    children: [(C() || k()) && (0, W.BX)("button", {
                        className: "material-icons options ripple",
                        onClick: n => {
                            !(0 === n.nativeEvent.pageX && 0 === n.nativeEvent.pageY) && t && n.currentTarget.blur(), e((0, x.SnQ)(nt.M.optionsButtonClicked)), e((0, x.sdi)(!t))
                        },
                        onBlur: () => {
                            e((0, x.sdi)(!1))
                        },
                        style: {
                            color: c[2],
                            marginRight: p === it.t4.WIX && f ? 10 : void 0
                        },
                        type: "button",
                        "aria-label": t ? (0, v.dW)("closeOptions", null, "Close options") : (0, v.dW)("openOptions", null, "Open options"),
                        css: bn,
                        children: [(0, W.tZ)(at.g0, {}), (0, W.tZ)("span", {
                            children: t ? (0, v.dW)("closeOptions", null, "Close options") : (0, v.dW)("openOptions", null, "Open options")
                        })]
                    }), (0, W.tZ)($, { in: t && (C() || k()),
                        classNames: "dropdownFade",
                        children: (0, W.tZ)("div", {
                            className: "options-dropdown",
                            children: (0, W.BX)("ul", {
                                children: [C() && (h ? (0, W.tZ)("li", {
                                    children: (0, W.BX)("button", {
                                        type: "button",
                                        className: "material-icons",
                                        onClick: g,
                                        onFocus: () => {
                                            w(!0)
                                        },
                                        onBlur: () => {
                                            w(!1)
                                        },
                                        children: [(0, W.tZ)(at.z8, {}), (0, W.tZ)("span", {
                                            children: (0, W.tZ)(Zt, {
                                                value: "turnOnNotifications"
                                            })
                                        })]
                                    })
                                }) : (0, W.tZ)("li", {
                                    children: (0, W.BX)("button", {
                                        type: "button",
                                        className: "material-icons",
                                        onClick: g,
                                        onFocus: () => {
                                            w(!0)
                                        },
                                        onBlur: () => {
                                            w(!1)
                                        },
                                        children: [(0, W.tZ)(at.nh, {}), (0, W.tZ)("span", {
                                            children: (0, W.tZ)(Zt, {
                                                value: "turnOffNotifications"
                                            })
                                        })]
                                    })
                                })), k() && (0, W.tZ)("li", {
                                    children: (0, W.BX)("button", {
                                        type: "button",
                                        className: "material-icons",
                                        onClick: b,
                                        onFocus: () => {
                                            w(!0)
                                        },
                                        onBlur: () => {
                                            w(!1)
                                        },
                                        children: [(0, W.tZ)(at.Ju, {}), (0, W.tZ)("span", {
                                            children: (0, W.tZ)(Zt, {
                                                value: "rateConversation"
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })]
                })
            };
            const Cn = () => (0, v.dW)("welcomeMessage", null, "") ? (0, W.tZ)("p", {
                className: "start-message",
                children: (0, W.tZ)(Zt, {
                    value: "welcomeMessage",
                    emojify: !0
                })
            }) : null;
            var En = () => {
                const e = (0, r.useRef)(null),
                    t = (0, o.I0)(),
                    n = (0, o.v9)((e => e.showOptionsDropdown)),
                    i = (0, o.v9)((e => e.bannerImage)),
                    a = (0, o.v9)((e => e.isProjectOnline)),
                    s = (0, o.v9)((e => e.widgetColor)),
                    d = (0, o.v9)(E.cn),
                    l = (0, o.v9)((e => e.isMobile)),
                    u = (0, o.v9)((e => e.isSoundEnabled)),
                    [c, p] = (0, r.useState)("");
                return (0, r.useEffect)((() => {
                    p(s[0] === s[1] ? s[0] : `linear-gradient(135deg, ${s[0]} 0%, ${s[1]} 100%)`)
                }), [s]), (0, W.BX)("div", {
                    className: "chat-header",
                    style: {
                        background: c,
                        color: s[2]
                    },
                    children: ["" !== i && (0, W.tZ)("div", {
                        className: "banner",
                        style: {
                            backgroundImage: `url(${i})`
                        }
                    }), (0, W.tZ)("h2", {
                        className: "h2-banner",
                        style: {
                            color: s[2]
                        },
                        children: (0, W.tZ)(Zt, {
                            value: "newWidgetHeaderText",
                            fallback: "Chat with us",
                            emojify: !0
                        })
                    }), (!d || d && l) && (0, W.tZ)(vn, {}), u && (0, W.BX)(W.HY, {
                        children: [(0, W.BX)("button", {
                            className: "material-icons options i-banner",
                            onClick: e => {
                                !(0 === e.nativeEvent.pageX && 0 === e.nativeEvent.pageY) && n && e.currentTarget.blur(), t((0, x.SnQ)(nt.M.optionsButtonClicked)), t((0, x.sdi)(!n))
                            },
                            onBlur: () => {
                                t((0, x.sdi)(!1))
                            },
                            style: {
                                color: s[2]
                            },
                            type: "button",
                            "aria-label": n ? (0, v.dW)("closeOptions", null, "Close options") : (0, v.dW)("openOptions", null, "Open options"),
                            css: bn,
                            children: [(0, W.tZ)(at.g0, {}), (0, W.tZ)("span", {
                                children: n ? (0, v.dW)("closeOptions", null, "Close options") : (0, v.dW)("openOptions", null, "Open options")
                            })]
                        }), (0, W.tZ)($, { in: n,
                            classNames: "dropdownFade",
                            children: (0, W.tZ)(xn, {})
                        })]
                    }), (0, W.tZ)(Cn, {}), (0, W.tZ)(gn, {
                        statusBarRef: e
                    }), (0, W.tZ)(wn, {
                        widgetColor: s,
                        isProjectOnline: a,
                        ref: e
                    })]
                })
            };
            var kn = e => (0, W.tZ)($, { ...e,
                in: e.in,
                classNames: "fade",
                children: e.children
            });
            var An = e => (0, W.BX)(W.HY, {
                children: [(0, W.tZ)("span", {
                    className: "pulse"
                }), (0, W.tZ)("span", {
                    className: "pulse-white"
                }), (0, W.tZ)("span", {
                    className: "pulse animation-delay",
                    onAnimationEnd: () => {
                        e.dispatch((0, x.MP)())
                    }
                }), (0, W.tZ)("span", {
                    className: "pulse-white animation-delay"
                })]
            });
            var Zn = (0, o.$j)((e => ({
                isBotActive: e.isBotActive,
                assignedOperators: e.assignedOperators
            })))((e => (0, W.BX)("button", {
                type: "button",
                className: "bots-button material-icons ripple " + (e.isBotActive || 0 !== e.assignedOperators.length || e.disableButtonAnimation ? "" : "bots-animation"),
                onClick: e.onClick,
                onBlur: e.onBlur,
                "aria-label": e.ariaLabel,
                children: [(0, W.tZ)(at.P_, {}), !e.isBotActive && 0 === e.assignedOperators.length && !e.disableButtonAnimation && (0, W.tZ)(An, {
                    dispatch: e.dispatch
                })]
            })));
            var Sn = e => (0, W.BX)("div", {
                className: "bots-dropdown",
                children: [e.isBotActive && (0, W.tZ)("ul", {
                    className: "bots-cancel",
                    children: (0, W.tZ)("li", {
                        children: (0, W.BX)("span", {
                            tabIndex: "0",
                            onClick: e.onCancelBotClick,
                            onKeyUp: t => {
                                13 === t.keyCode && e.onCancelBotClick()
                            },
                            onFocus: e.onBotFocus,
                            onBlur: e.onBotBlur,
                            role: "button",
                            children: [(0, W.tZ)(at.x8, {}), " ", (0, v.dW)("startOver", null, "Start over")]
                        })
                    })
                }), !e.isBotActive && (0, W.tZ)("ul", {
                    children: (0, W.tZ)("li", {
                        children: (0, W.BX)("span", {
                            onClick: () => {
                                e.onBotClick()
                            },
                            onKeyUp: t => {
                                13 === t.keyCode && e.onBotClick()
                            },
                            onFocus: e.onBotFocus,
                            onBlur: e.onBotBlur,
                            role: "button",
                            tabIndex: e.isBotActive ? "-1" : "0",
                            children: [(0, W.tZ)(at.sO, {}), " ", (0, v.dW)("startTheBot", null, "Start the Bot")]
                        })
                    })
                })]
            });
            var Mn = () => {
                const [e, t] = (0, r.useState)(!1), n = (0, o.v9)((e => e.bots)), i = (0, o.v9)((e => e.isBotActive)), a = (0, o.v9)((e => e.disableBotsButtonAnimation)), s = (0, o.I0)();
                return n && 0 !== n.length ? (0, W.BX)(W.HY, {
                    children: [(0, W.tZ)(Zn, {
                        onBlur: () => {
                            t(!1)
                        },
                        onClick: () => {
                            s((0, x.AKm)(!1)), t((e => !e)), s((0, x.SnQ)(nt.M.botsButtonClicked))
                        },
                        disableButtonAnimation: a,
                        ariaLabel: e ? (0, v.dW)("closeBotsLauncher", null, "Close Bots Launcher") : (0, v.dW)("openBotsLauncher", null, "Open Bots Launcher")
                    }), (0, W.tZ)($, { in: e,
                        classNames: "botsListFade",
                        children: (0, W.tZ)(Sn, {
                            onBotClick: () => !i && (s((0, x.vit)()), t(!1), !0),
                            onBotFocus: () => {
                                t(!0)
                            },
                            onBotBlur: () => {
                                t(!1)
                            },
                            onCancelBotClick: () => {
                                s((0, x.SnQ)(nt.M.botCanceled)), s((0, x.oml)()), t(!1)
                            },
                            isBotActive: i
                        })
                    })]
                }) : null
            };
            const Tn = () => (0, W.tZ)("div", {
                    className: "emoji-wrapper",
                    children: (0, W.tZ)("div", {
                        className: "emoji-mart"
                    })
                }),
                In = r.lazy((() => n.e(325).then(n.bind(n, 906))));
            var _n = e => (0, W.tZ)(ln, {
                onDidCatch: e.handleEmojiPanel,
                children: (0, W.tZ)(r.Suspense, {
                    fallback: (0, W.tZ)(Tn, {}),
                    children: (0, W.tZ)(In, {
                        onEmojiClick: e.onEmojiClick,
                        isMobile: e.isMobile
                    })
                })
            });
            const Nn = {
                    name: "5hhiig",
                    styles: "margin-right:40px;float:right;display:flex;text-decoration:none;color:#8894ab;font-weight:400;font-size:10px;/* @noflip */direction:ltr;span{align-self:center;/* @noflip */margin-right:8px;}svg{width:50px;}.mobile &{margin-right:70px;}"
                },
                Rn = {
                    name: "17jmbz5",
                    styles: "margin-right:40px;float:right;/* @noflip */direction:ltr;img{object-fit:contain;max-width:125px;max-height:30px;}"
                };
            var On = () => {
                const e = (0, o.I0)(),
                    t = (0, o.v9)((e => e.publicKey)),
                    n = (0, o.v9)((e => e.platform === it.t4.WIX ? it.t4.OTHERS : e.platform)),
                    i = (0, o.v9)((e => e.isMobile)),
                    r = (0, o.v9)(E.cn),
                    a = (0, o.v9)(E.Fu),
                    s = (0, p.mR)(),
                    d = !(0, p.Q_)(t);
                return a ? (0, W.tZ)("div", {
                    children: (0, W.tZ)("span", {
                        css: Rn,
                        children: (0, W.tZ)("img", {
                            src: a,
                            alt: "Company logo",
                            onError: () => {
                                e((0, x.sfQ)({
                                    customBranding: ""
                                }))
                            }
                        })
                    })
                }) : r ? (0, W.tZ)("div", {
                    children: (0, W.BX)("span", {
                        css: Nn,
                        children: [(0, W.tZ)("span", {
                            children: "POWERED BY"
                        }), " ", (0, W.tZ)(at.CU, {})]
                    })
                }) : (0, W.tZ)("div", {
                    children: (0, W.BX)("a", {
                        css: Nn,
                        href: `https://www.tidio.com/powered-by-tidio/?platform=${n}&project=${t}&device=${i?"mobile":"desktop"}${d?`&utm_source=plugin_ref&utm_medium=widget_v4&utm_campaign=plugin_ref&utm_referrer=${s}`:""}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": (0, v.dW)("poweredBy", null, "Powered by Tidio."),
                        children: [(0, W.tZ)("span", {
                            children: "POWERED BY"
                        }), " ", (0, W.tZ)(at.CU, {})]
                    })
                })
            };
            const Dn = h.zk,
                Ln = (e, t) => function(e, t) {
                    const n = (0, f._I)();
                    if (!n) return 0;
                    const i = ("OffscreenCanvas" in window ? new OffscreenCanvas(500, 100) : n.createElement("canvas")).getContext("2d");
                    return i.font = t, Math.ceil(i.measureText(e).width)
                }(e, '17px "Mulish", sans-serif') > t;
            class Bn extends r.Component {
                constructor() {
                    var e;
                    super(...arguments), e = this, (0, i.Z)(this, "state", {
                        input: "",
                        inputRows: 1,
                        isPlaceholderToLong: !1
                    }), (0, i.Z)(this, "inputRef", null), (0, i.Z)(this, "initialInputScrollHeight", 0), (0, i.Z)(this, "oldInputRows", 1), (0, i.Z)(this, "oldPlaceholder", ""), (0, i.Z)(this, "windowRef", (0, f.a9)()), (0, i.Z)(this, "osName", (0, p.kA)().name.toLowerCase()), (0, i.Z)(this, "setInputRef", (e => {
                        this.inputRef = e
                    })), (0, i.Z)(this, "onInputChange", (e => {
                        const t = this.state.input.length,
                            n = e.target.value;
                        this.setState({
                            input: n
                        }, (() => {
                            this.adjustInputRows(t)
                        })), this.dispatchVisitorIsTyping(n, this.state.input)
                    })), (0, i.Z)(this, "adjustInputRows", (function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        if (e.oldInputRows = e.state.inputRows, "" === e.state.input && !e.state.isPlaceholderToLong) return e.setState({
                            inputRows: 1
                        }), 1 === e.oldInputRows || e.props.isMobile || e.props.dispatch((0, x.kqK)("chatSize1")), !0;
                        if (3 === e.state.inputRows && null !== t && e.state.input.length > t) return !0;
                        const n = e.getCalculatedInputRows();
                        return n === e.oldInputRows || e.props.isMobile || e.props.dispatch((0, x.kqK)(`chatSize${n}`)), e.setState({
                            inputRows: n
                        }), !0
                    })), (0, i.Z)(this, "getCalculatedInputRows", (() => {
                        let e = Math.ceil((this.inputRef.scrollHeight - this.initialInputScrollHeight) / Dn) + 1;
                        return this.props.isMobile && e > 2 ? 2 : (e > 3 ? e = 3 : this.state.isPlaceholderToLong && e < 2 ? e = 2 : e < 1 && (e = 1), e)
                    })), (0, i.Z)(this, "restoreMessage", (() => {
                        const {
                            blockedMessage: e
                        } = this.props;
                        setTimeout((() => {
                            this.setState({
                                input: e
                            }, (() => {
                                this.adjustInputRows()
                            }))
                        }), 0), this.props.dispatch((0, x.H$_)())
                    })), (0, i.Z)(this, "onKeyDown", (e => {
                        const t = 13 === e.keyCode;
                        return !(!t || t && e.shiftKey || this.props.newMessageDisabled) && (e.preventDefault(), this.props.dispatch((0, x.jaP)(!0)), !0)
                    })), (0, i.Z)(this, "onClick", (() => {
                        this.props.newMessageDisabled && (0, f.$k)()
                    })), (0, i.Z)(this, "dispatchVisitorIsTyping", ((e, t) => {
                        const n = e.trim(),
                            i = t.trim();
                        return ("" !== n || n !== i) && (this.props.dispatch((0, x.tBh)(n)), !0)
                    })), (0, i.Z)(this, "sendMessage", (() => {
                        const {
                            dispatch: e,
                            view: t,
                            isEmojiPanelVisible: n,
                            triggerShake: i
                        } = this.props;
                        let r = this.state.input;
                        return r = r.trim(), "" === r && t === y.views.welcome && e((0, x.OFJ)()), "" === r ? (i(), !1) : (e((0, x.liy)(r)), this.setState({
                            input: ""
                        }), n && e((0, x.AKm)(!1)), this.setState({
                            inputRows: 1
                        }), !0)
                    })), (0, i.Z)(this, "fixWebviewTouchAreas", (() => {
                        try {
                            this.props.isMobile && "ios" === this.osName && this.windowRef && (this.windowRef.parent ? .scrollTo(this.windowRef.parent.scrollX, this.windowRef.parent.scrollY - 1), this.windowRef.parent ? .scrollTo(this.windowRef.parent.scrollX, this.windowRef.parent.scrollY + 1))
                        } catch (e) {}
                    })), (0, i.Z)(this, "onPaste", (e => {
                        if (!this.props.fileUploadEnabled) return;
                        if (0 === e.clipboardData ? .files ? .length) return;
                        e.preventDefault();
                        const t = Array.from(e.clipboardData.files)[0];
                        this.props.newMessageDisabled && this.props.dispatch((0, x.wp$)((0, v.dW)("newMessageDisabledAlert", null, "Please enter your email first."))), this.props.dispatch((0, x.cTq)(t))
                    }))
                }
                componentDidMount() {
                    setTimeout((() => {
                        this.inputRef && (this.initialInputScrollHeight = this.inputRef.scrollHeight)
                    }), 0), setTimeout((() => {
                        !this.props.newMessageDisabled && null !== this.props.blockedMessage && this.restoreMessage()
                    }), 0);
                    const {
                        placeholder: e,
                        offsetWidth: t
                    } = this.inputRef;
                    this.oldPlaceholder = e, Ln(e, t) && this.setState({
                        inputRows: 2,
                        isPlaceholderToLong: !0
                    })
                }
                static getDerivedStateFromProps(e, t) {
                    return e.newMessageEmoji ? (e.dispatch((0, x.G$G)()), {
                        input: t.input + e.newMessageEmoji
                    }) : e.blockedMessage && e.newMessageDisabled ? {
                        input: e.blockedMessage
                    } : null
                }
                componentDidUpdate(e) {
                    this.props.sendVisitorMessageFlag && !e.sendVisitorMessageFlag && this.sendMessage();
                    const {
                        placeholder: t,
                        offsetWidth: n
                    } = this.inputRef;
                    this.oldPlaceholder !== t && (this.oldPlaceholder = t, Ln(t, n) ? this.setState({
                        inputRows: 2,
                        isPlaceholderToLong: !0
                    }) : this.setState({
                        isPlaceholderToLong: !1
                    })), null === this.props.blockedMessage && null !== e.blockedMessage && this.setState({
                        input: ""
                    })
                }
                componentWillUnmount() {
                    const {
                        input: e
                    } = this.state;
                    "" !== e && this.props.dispatch((0, x.H$_)(e))
                }
                render() {
                    const {
                        lastMessage: e,
                        newMessageDisabled: t,
                        hasConnectionIssues: n,
                        showUserDataModal: i
                    } = this.props;
                    return (0, W.tZ)(Zt, {
                        value: ["clickToProvideEmail", "onlineMessagePlaceholder", "hitTheButtons", "fillOutTheForm"],
                        children: r => {
                            let {
                                clickToProvideEmail: a,
                                onlineMessagePlaceholder: o,
                                hitTheButtons: s,
                                fillOutTheForm: d
                            } = r, l = o;
                            return t ? n ? l = o : i && (l = a) : (e => {
                                if (!e) return !1;
                                const t = e.type === Ft.Nw.cards && "number" != typeof e.operator_id,
                                    n = e.quickReplies && e.quickReplies.length > 0,
                                    i = e.buttons && e.buttons.length > 0;
                                return !!(t || n || i)
                            })(e) && !this.props.isLastMessage24h && (l = s), e && e.type === it.Cs.FORM && (l = d), (0, W.tZ)("textarea", {
                                id: "new-message-textarea",
                                value: this.state.input,
                                onChange: this.onInputChange,
                                onKeyDown: this.onKeyDown,
                                onClick: this.onClick,
                                ref: this.setInputRef,
                                rows: this.state.inputRows,
                                placeholder: l,
                                onFocus: () => {
                                    !t && this.props.isMobile && this.props.dispatch((0, x.xKy)(!0))
                                },
                                onBlur: () => {
                                    !t && this.props.isMobile && setTimeout((() => {
                                        this.props.dispatch((0, x.xKy)(!1)), this.fixWebviewTouchAreas()
                                    }), 100)
                                },
                                readOnly: t,
                                className: `${t?"disabled":""} ${this.props.shakeClassName}`,
                                "aria-label": (0, v.dW)("newMessage", null, "New message"),
                                "data-testid": "newMessageTextarea",
                                onPaste: this.onPaste
                            })
                        }
                    })
                }
            }
            Bn.defaultProps = {
                newMessageEmoji: null,
                blockedMessage: null,
                triggerShake: () => {},
                shakeClassName: "",
                lastMessage: void 0
            };
            var Fn, Pn = (0, o.$j)((e => ({
                newMessageEmoji: e.newMessageEmoji,
                isMobile: e.isMobile,
                sendVisitorMessageFlag: e.sendVisitorMessageFlag,
                isEmojiPanelVisible: e.isEmojiPanelVisible,
                newMessageDisabled: (0, E.bP)(e),
                blockedMessage: e.blockedMessage,
                view: (0, E.Xe)(e),
                lastMessage: (0, E.Ey)(e),
                isLastMessage24h: (0, E.J)(e),
                hasConnectionIssues: (0, E.UE)(e),
                showUserDataModal: e.showUserDataModal
            })))((Fn = Bn, class extends r.Component {
                constructor() {
                    super(...arguments), (0, i.Z)(this, "state", {
                        shakeClassName: ""
                    }), (0, i.Z)(this, "clearId", null), (0, i.Z)(this, "isMounted", !1), (0, i.Z)(this, "triggerShake", (() => {
                        this.setState({
                            shakeClassName: "shake"
                        }), clearTimeout(this.clearId), this.clearId = null, this.clearId = setTimeout((() => {
                            this.isMounted && this.setState({
                                shakeClassName: ""
                            })
                        }), 820)
                    }))
                }
                componentDidMount() {
                    this.isMounted = !0
                }
                componentWillUnmount() {
                    this.isMounted = !1
                }
                render() {
                    const e = {
                        triggerShake: this.triggerShake,
                        shakeClassName: this.state.shakeClassName
                    };
                    return (0, W.tZ)(Fn, { ...this.props,
                        ...e
                    })
                }
            }));
            var jn = e => {
                let {
                    hasSeparator: t = !1
                } = e;
                const n = (0, r.useRef)(null),
                    i = (0, o.I0)(),
                    a = (0, o.v9)((e => e.isEmojiPanelVisible)),
                    s = (0, o.v9)((e => e.isMobile)),
                    d = (0, o.v9)(E.bP),
                    l = (0, o.v9)((e => e.showBranding)),
                    u = (0, o.v9)((e => e.messages)),
                    c = (0, o.v9)(E.o9),
                    f = (0, o.v9)(E.Xu),
                    h = (0, o.v9)((e => e.allowAttachments)),
                    m = (0, o.v9)(E.Fu),
                    g = Boolean(Boolean(u.find((e => "visitor" === e.sender))) && !f && h),
                    b = e => {
                        if (e) {
                            !(0 === e.nativeEvent.pageX && 0 === e.nativeEvent.pageY) && a && e.currentTarget.blur()
                        }
                        i(d ? (0, x.wp$)((0, v.dW)("newMessageDisabledAlert", null, "Please enter your email first.")) : (0, x.AKm)(!a))
                    };
                return (0, W.BX)("div", {
                    className: "input-group " + (c ? "drag-active" : ""),
                    children: [(0, W.tZ)(H, { in: a,
                        classNames: "emojiFade",
                        timeout: 200,
                        mountOnEnter: !0,
                        unmountOnExit: !0,
                        appear: !0,
                        children: (0, W.tZ)(_n, {
                            isMobile: s,
                            onEmojiClick: e => {
                                i((0, x.SnQ)(nt.M.emojiAdded)), "native" in e && i((0, x.G$G)(e.native))
                            },
                            handleEmojiPanel: b
                        })
                    }), (0, W.BX)("div", {
                        className: "drag-active-wrapper footer-input-wrapper " + (d ? "hidden" : ""),
                        children: [t && (0, W.tZ)("hr", {}), (0, W.tZ)(Pn, {
                            dispatch: i,
                            fileUploadEnabled: g
                        })]
                    }), (0, W.BX)("div", {
                        className: "footer-bottom",
                        children: [(0, W.BX)("div", {
                            className: "footer-icons-wrapper " + (d ? "hidden" : ""),
                            children: [(0, W.tZ)(Mn, {}), (0, W.tZ)(kn, { in: g,
                                children: (0, W.tZ)("button", {
                                    type: "button",
                                    className: "material-icons ripple " + (d ? "disabled" : ""),
                                    onClick: e => {
                                        if ((0, p.$U)() || !g) return !1;
                                        if (e) {
                                            0 === e.nativeEvent.pageX && 0 === e.nativeEvent.pageY || e.currentTarget.blur()
                                        }
                                        return d ? i((0, x.wp$)((0, v.dW)("newMessageDisabledAlert", null, "Please enter your email first."))) : (i((0, x.SnQ)(nt.M.uploadButtonClicked)), n.current && n.current.click()), !0
                                    },
                                    style: {
                                        color: "#007dfc"
                                    },
                                    "aria-label": (0, v.dW)("attachFile", null, "Attach file button"),
                                    children: (0, W.tZ)(at.kf, {})
                                })
                            }), (0, W.tZ)("form", {
                                children: (0, W.tZ)("input", {
                                    type: "file",
                                    style: {
                                        display: "none"
                                    },
                                    ref: n,
                                    name: "attachment",
                                    onChange: e => {
                                        if (g) {
                                            if (e.target.files) {
                                                const t = e.target.files[0];
                                                i((0, x.cTq)(t))
                                            }
                                            n.current && (n.current.value = "")
                                        }
                                    },
                                    "aria-label": (0, v.dW)("attachFile", null, "Attach file input")
                                })
                            }), !s && (0, W.tZ)("button", {
                                type: "button",
                                className: `material-icons emoji-switch ripple ${a?"active":""} ${d?"disabled":""}`,
                                onClick: b,
                                style: {
                                    color: "#007dfc"
                                },
                                "aria-label": a ? (0, v.dW)("closeEmojiPanel", null, "Close Emoji picker") : (0, v.dW)("openEmojiPanel", null, "Open Emoji picker"),
                                children: (0, W.tZ)(at.kE, {})
                            })]
                        }), (l || Boolean(m)) && (0, W.tZ)(On, {})]
                    })]
                })
            };
            n(5116);
            var zn = e => {
                let {
                    operators: t,
                    assignedOperators: n
                } = e;
                const i = n.map((e => t.find((t => t.id === e)))).filter((e => void 0 !== e)).slice(0, 4),
                    r = (e => {
                        try {
                            let t = "";
                            if (e.length > 1) {
                                const n = e.map((e => e.name)),
                                    i = n.splice(-2).join(` ${(0,v.dW)("widgetHeaderAnd",null,"and")} `);
                                n.push(i), t = n.join(", ")
                            } else t = e[0].name;
                            return t.trim() ? t : "\xa0"
                        } catch (e) {
                            return (0, g.G)(e), "\xa0"
                        }
                    })(i);
                return (0, W.BX)(W.HY, {
                    children: [(0, W.tZ)("div", {
                        className: `avatars-wrapper operators-avatar-${n.length>3?"4":n.length}`,
                        children: i.map((e => (0, W.tZ)(Nt, {
                            className: "header-ava",
                            avatarSrc: e.avatarSrc
                        }, e.id)))
                    }), (0, W.BX)("h2", {
                        className: "twolines",
                        children: [(0, W.BX)("span", {
                            className: "top-heading",
                            children: [(0, W.tZ)(Zt, {
                                value: "chatWith",
                                fallback: "Chat with"
                            }), " "]
                        }), r]
                    }), (0, W.BX)("span", {
                        className: "heading-hover",
                        children: [(0, W.tZ)(Zt, {
                            value: "chatWith",
                            fallback: "Chat with"
                        }), " ", r]
                    })]
                })
            };
            var Un = e => {
                let {
                    customAvatar: t
                } = e;
                return (0, W.BX)(W.HY, {
                    children: [(0, W.tZ)("div", {
                        className: "avatars-wrapper operators-avatar-1",
                        children: (0, W.tZ)(Nt, {
                            className: `header-ava ${t}`,
                            avatarSrc: t
                        }, 1)
                    }), (0, W.tZ)("h2", {
                        className: "oneline",
                        children: (0, W.tZ)(Zt, {
                            value: "newWidgetHeaderText",
                            fallback: "\xa0",
                            emojify: !0
                        })
                    })]
                })
            };
            var Hn = e => {
                let {
                    operators: t
                } = e;
                const n = t.slice(0, 4);
                return (0, W.BX)(W.HY, {
                    children: [(0, W.tZ)("div", {
                        className: `avatars-wrapper operators-avatar-${n.length>3?"4":n.length}`,
                        children: n.map((e => (0, W.tZ)(Nt, {
                            className: "header-ava",
                            avatarSrc: e.avatarSrc
                        }, e.id)))
                    }), (0, W.tZ)("h2", {
                        className: "oneline",
                        children: (0, W.tZ)(Zt, {
                            value: "newWidgetHeaderText",
                            fallback: "\xa0",
                            emojify: !0
                        })
                    })]
                })
            };
            var Wn = () => {
                const e = (0, o.v9)((e => e.assignedOperators)),
                    t = (0, o.v9)((e => e.operators)),
                    n = (0, o.v9)((e => e.isProjectOnline)),
                    i = (0, o.v9)(E.U1),
                    a = (0, o.v9)(E.cn),
                    s = (0, o.v9)((e => e.isMobile)),
                    d = (0, o.v9)(E.Xf),
                    l = (0, o.v9)(E.RX),
                    {
                        state: u
                    } = (0, un.PZ)(),
                    c = u ? .offer,
                    [p, f] = (0, r.useState)("");
                (0, r.useEffect)((() => {
                    f(i[0] === i[1] ? i[0] : `linear-gradient(135deg, ${i[0]} 0%, ${i[1]} 100%)`)
                }), [i]);
                const h = !(!s && a || s && d === it.t4.WIX || c),
                    m = e.length > 0;
                return (0, W.BX)("div", {
                    className: "chat-header " + (n ? "project-online" : ""),
                    style: {
                        background: p,
                        color: i[2]
                    },
                    children: [m && (0, W.tZ)(zn, {
                        operators: t,
                        assignedOperators: e
                    }), !m && (l ? (0, W.tZ)(Un, {
                        customAvatar: l
                    }) : (0, W.tZ)(Hn, {
                        operators: t
                    })), h && (0, W.tZ)(vn, {}), (0, W.tZ)(xn, {}), (0, W.tZ)(wn, {
                        widgetColor: i,
                        isProjectOnline: n
                    })]
                })
            };
            var $n = e => {
                let {
                    trackingEvent: t
                } = e;
                const n = (0, o.I0)(),
                    i = (0, o.v9)((e => e.isMobile)),
                    r = (0, o.v9)(E.cn),
                    a = (0, o.v9)(E.Xf);
                return i && a === it.t4.WIX || !i && r ? null : (0, W.tZ)("button", {
                    type: "button",
                    className: "material-icons exit-chat mobile-close",
                    onClick: () => {
                        n((0, x.SnQ)(t)), n((0, x.AKm)(!1)), n((0, x.ejT)(!1))
                    },
                    "aria-label": (0, v.dW)("closeWidget", null, "Close chat widget"),
                    children: (0, W.tZ)(at.x8, {})
                })
            };
            var Vn = () => {
                const e = (0, o.I0)(),
                    t = (0, o.v9)(E.Zj);
                return (0, r.useEffect)((() => {
                    const t = setTimeout((() => {
                        e((0, x.JOo)())
                    }), 6e3);
                    return () => {
                        null !== t && clearTimeout(t)
                    }
                }), [e]), (0, W.BX)("div", {
                    className: "message message-operator message-alert",
                    role: "alert",
                    "aria-live": "assertive",
                    "aria-atomic": "true",
                    children: [(0, W.tZ)(at.bZ, {}), t]
                })
            };
            var Xn = () => {
                const e = (0, o.v9)(E.MP);
                return (0, W.BX)("div", {
                    className: "message message-operator always-online",
                    children: [(0, W.tZ)(Zt, {
                        value: "alwaysOnlineEngageMessage",
                        emojify: !0,
                        linkify: !0
                    }), (0, W.tZ)(Tt, {
                        type: "email",
                        placeholder: "preformInput_email",
                        value: e,
                        disabled: !0
                    })]
                })
            };
            const qn = (0, l.iv)({
                    position: "absolute",
                    bottom: (0, p.tq)() ? -37 : -31,
                    left: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: 260
                }, "", ""),
                Yn = (0, l.iv)({
                    fontSize: 12,
                    marginTop: (0, p.tq)() ? 6 : 11,
                    marginRight: 8
                }, "", "");
            var Gn = {
                    name: "11tx334",
                    styles: "position:relative;display:flex;align-items:center;justify-content:space-between;padding:0px 7px;width:77px;height:40px;background-color:#F0F2F7;border:3px solid white;border-radius:20px;box-shadow:0px 3px 8px rgba(0, 18, 46, 0.12);::before{content:'';position:absolute;left:35px;width:1px;height:20px;background-color:#C9D1DD;}"
                },
                Qn = {
                    name: "7etox3",
                    styles: "position:relative;display:flex;align-items:center;justify-content:space-between;width:100px;height:48px"
                };
            const Kn = (e, t) => (0, p.tq)() ? (0, l.iv)({
                outline: "none",
                width: 48,
                height: 48,
                borderRadius: "50%",
                backgroundColor: "#F0F2F7",
                boxShadow: "0px 3px 8px 0px rgba(0, 27, 71, 0.08)",
                border: "3px solid white",
                svg: {
                    fill: e ? "#ACB8CB" : "#007DFC",
                    height: 22,
                    width: 22
                }
            }, "", "") : (0, l.iv)({
                position: "relative",
                cursor: t ? "initial" : "pointer",
                outline: "none",
                "::before": {
                    content: "''",
                    position: "absolute",
                    backgroundColor: "rgba(0,125,252,0.12)",
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    transition: "all 0.16s ease-in-out",
                    transform: "scale(0)",
                    top: "calc(50% - 17px)",
                    left: "calc(50% - 17px)"
                },
                "&:hover::before": {
                    transform: t ? "scale(0)" : "scale(1)"
                },
                svg: {
                    fill: e ? "#ACB8CB" : "#007DFC",
                    height: 20,
                    width: 20
                }
            }, "", "");
            var Jn = e => {
                    const t = (0, o.I0)(),
                        n = n => {
                            !e.rating && e.ratingId && t((0, x.Hvn)(e.messageId, e.ratingId, n))
                        };
                    return (0, W.BX)("div", {
                        css: qn,
                        children: [(0, W.tZ)("span", {
                            css: Yn,
                            children: (0, W.tZ)(Zt, {
                                value: "ratingLabel",
                                fallback: "Was this helpful?"
                            })
                        }), (0, W.BX)("div", {
                            css: (0, p.tq)() ? Qn : Gn,
                            children: [(0, W.tZ)("button", {
                                type: "button",
                                "aria-label": "yes",
                                onClick: () => n("yes"),
                                css: Kn("no" === e.rating, Boolean(e.rating)),
                                children: "yes" === e.rating ? (0, W.tZ)(at.$T, {}) : (0, W.tZ)(at.sS, {})
                            }), (0, W.tZ)("button", {
                                type: "button",
                                "aria-label": "no",
                                onClick: () => n("no"),
                                css: Kn("yes" === e.rating, Boolean(e.rating)),
                                children: "no" === e.rating ? (0, W.tZ)(at.SJ, {}) : (0, W.tZ)(at.iL, {})
                            })]
                        })]
                    })
                },
                ei = n(1002);

            function ti(e, t) {
                if (t.length < e) throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present")
            }

            function ni(e) {
                ti(1, arguments);
                var t = Object.prototype.toString.call(e);
                return e instanceof Date || "object" === (0, ei.Z)(e) && "[object Date]" === t ? new Date(e.getTime()) : "number" == typeof e || "[object Number]" === t ? new Date(e) : ("string" != typeof e && "[object String]" !== t || "undefined" == typeof console || (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn((new Error).stack)), new Date(NaN))
            }

            function ii(e) {
                ti(1, arguments);
                var t = ni(e);
                return t.setHours(0, 0, 0, 0), t
            }

            function ri(e, t) {
                ti(2, arguments);
                var n = ii(e),
                    i = ii(t);
                return n.getTime() === i.getTime()
            }

            function ai(e) {
                if (null === e || !0 === e || !1 === e) return NaN;
                var t = Number(e);
                return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
            }

            function oi(e, t) {
                return ti(2, arguments),
                    function(e, t) {
                        ti(2, arguments);
                        var n = ni(e),
                            i = ai(t);
                        return isNaN(i) ? new Date(NaN) : i ? (n.setDate(n.getDate() + i), n) : n
                    }(e, -ai(t))
            }

            function si(e) {
                if (ti(1, arguments), ! function(e) {
                        return ti(1, arguments), e instanceof Date || "object" === (0, ei.Z)(e) && "[object Date]" === Object.prototype.toString.call(e)
                    }(e) && "number" != typeof e) return !1;
                var t = ni(e);
                return !isNaN(Number(t))
            }

            function di(e, t) {
                return ti(2, arguments),
                    function(e, t) {
                        ti(2, arguments);
                        var n = ni(e).getTime(),
                            i = ai(t);
                        return new Date(n + i)
                    }(e, -ai(t))
            }

            function li(e) {
                ti(1, arguments);
                var t = ni(e),
                    n = t.getUTCDay(),
                    i = (n < 1 ? 7 : 0) + n - 1;
                return t.setUTCDate(t.getUTCDate() - i), t.setUTCHours(0, 0, 0, 0), t
            }

            function ui(e) {
                ti(1, arguments);
                var t = ni(e),
                    n = t.getUTCFullYear(),
                    i = new Date(0);
                i.setUTCFullYear(n + 1, 0, 4), i.setUTCHours(0, 0, 0, 0);
                var r = li(i),
                    a = new Date(0);
                a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
                var o = li(a);
                return t.getTime() >= r.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1
            }

            function ci(e) {
                ti(1, arguments);
                var t = ni(e),
                    n = li(t).getTime() - function(e) {
                        ti(1, arguments);
                        var t = ui(e),
                            n = new Date(0);
                        return n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0), li(n)
                    }(t).getTime();
                return Math.round(n / 6048e5) + 1
            }
            var pi = {};

            function fi() {
                return pi
            }

            function hi(e, t) {
                var n, i, r, a, o, s, d, l;
                ti(1, arguments);
                var u = fi(),
                    c = ai(null !== (n = null !== (i = null !== (r = null !== (a = null == t ? void 0 : t.weekStartsOn) && void 0 !== a ? a : null == t || null === (o = t.locale) || void 0 === o || null === (s = o.options) || void 0 === s ? void 0 : s.weekStartsOn) && void 0 !== r ? r : u.weekStartsOn) && void 0 !== i ? i : null === (d = u.locale) || void 0 === d || null === (l = d.options) || void 0 === l ? void 0 : l.weekStartsOn) && void 0 !== n ? n : 0);
                if (!(c >= 0 && c <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
                var p = ni(e),
                    f = p.getUTCDay(),
                    h = (f < c ? 7 : 0) + f - c;
                return p.setUTCDate(p.getUTCDate() - h), p.setUTCHours(0, 0, 0, 0), p
            }

            function mi(e, t) {
                var n, i, r, a, o, s, d, l;
                ti(1, arguments);
                var u = ni(e),
                    c = u.getUTCFullYear(),
                    p = fi(),
                    f = ai(null !== (n = null !== (i = null !== (r = null !== (a = null == t ? void 0 : t.firstWeekContainsDate) && void 0 !== a ? a : null == t || null === (o = t.locale) || void 0 === o || null === (s = o.options) || void 0 === s ? void 0 : s.firstWeekContainsDate) && void 0 !== r ? r : p.firstWeekContainsDate) && void 0 !== i ? i : null === (d = p.locale) || void 0 === d || null === (l = d.options) || void 0 === l ? void 0 : l.firstWeekContainsDate) && void 0 !== n ? n : 1);
                if (!(f >= 1 && f <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
                var h = new Date(0);
                h.setUTCFullYear(c + 1, 0, f), h.setUTCHours(0, 0, 0, 0);
                var m = hi(h, t),
                    g = new Date(0);
                g.setUTCFullYear(c, 0, f), g.setUTCHours(0, 0, 0, 0);
                var b = hi(g, t);
                return u.getTime() >= m.getTime() ? c + 1 : u.getTime() >= b.getTime() ? c : c - 1
            }

            function gi(e, t) {
                ti(1, arguments);
                var n = ni(e),
                    i = hi(n, t).getTime() - function(e, t) {
                        var n, i, r, a, o, s, d, l;
                        ti(1, arguments);
                        var u = fi(),
                            c = ai(null !== (n = null !== (i = null !== (r = null !== (a = null == t ? void 0 : t.firstWeekContainsDate) && void 0 !== a ? a : null == t || null === (o = t.locale) || void 0 === o || null === (s = o.options) || void 0 === s ? void 0 : s.firstWeekContainsDate) && void 0 !== r ? r : u.firstWeekContainsDate) && void 0 !== i ? i : null === (d = u.locale) || void 0 === d || null === (l = d.options) || void 0 === l ? void 0 : l.firstWeekContainsDate) && void 0 !== n ? n : 1),
                            p = mi(e, t),
                            f = new Date(0);
                        return f.setUTCFullYear(p, 0, c), f.setUTCHours(0, 0, 0, 0), hi(f, t)
                    }(n, t).getTime();
                return Math.round(i / 6048e5) + 1
            }

            function bi(e, t) {
                for (var n = e < 0 ? "-" : "", i = Math.abs(e).toString(); i.length < t;) i = "0" + i;
                return n + i
            }
            var vi = {
                    y: function(e, t) {
                        var n = e.getUTCFullYear(),
                            i = n > 0 ? n : 1 - n;
                        return bi("yy" === t ? i % 100 : i, t.length)
                    },
                    M: function(e, t) {
                        var n = e.getUTCMonth();
                        return "M" === t ? String(n + 1) : bi(n + 1, 2)
                    },
                    d: function(e, t) {
                        return bi(e.getUTCDate(), t.length)
                    },
                    a: function(e, t) {
                        var n = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
                        switch (t) {
                            case "a":
                            case "aa":
                                return n.toUpperCase();
                            case "aaa":
                                return n;
                            case "aaaaa":
                                return n[0];
                            default:
                                return "am" === n ? "a.m." : "p.m."
                        }
                    },
                    h: function(e, t) {
                        return bi(e.getUTCHours() % 12 || 12, t.length)
                    },
                    H: function(e, t) {
                        return bi(e.getUTCHours(), t.length)
                    },
                    m: function(e, t) {
                        return bi(e.getUTCMinutes(), t.length)
                    },
                    s: function(e, t) {
                        return bi(e.getUTCSeconds(), t.length)
                    },
                    S: function(e, t) {
                        var n = t.length,
                            i = e.getUTCMilliseconds();
                        return bi(Math.floor(i * Math.pow(10, n - 3)), t.length)
                    }
                },
                yi = "midnight",
                wi = "noon",
                xi = "morning",
                Ci = "afternoon",
                Ei = "evening",
                ki = "night",
                Ai = {
                    G: function(e, t, n) {
                        var i = e.getUTCFullYear() > 0 ? 1 : 0;
                        switch (t) {
                            case "G":
                            case "GG":
                            case "GGG":
                                return n.era(i, {
                                    width: "abbreviated"
                                });
                            case "GGGGG":
                                return n.era(i, {
                                    width: "narrow"
                                });
                            default:
                                return n.era(i, {
                                    width: "wide"
                                })
                        }
                    },
                    y: function(e, t, n) {
                        if ("yo" === t) {
                            var i = e.getUTCFullYear(),
                                r = i > 0 ? i : 1 - i;
                            return n.ordinalNumber(r, {
                                unit: "year"
                            })
                        }
                        return vi.y(e, t)
                    },
                    Y: function(e, t, n, i) {
                        var r = mi(e, i),
                            a = r > 0 ? r : 1 - r;
                        return "YY" === t ? bi(a % 100, 2) : "Yo" === t ? n.ordinalNumber(a, {
                            unit: "year"
                        }) : bi(a, t.length)
                    },
                    R: function(e, t) {
                        return bi(ui(e), t.length)
                    },
                    u: function(e, t) {
                        return bi(e.getUTCFullYear(), t.length)
                    },
                    Q: function(e, t, n) {
                        var i = Math.ceil((e.getUTCMonth() + 1) / 3);
                        switch (t) {
                            case "Q":
                                return String(i);
                            case "QQ":
                                return bi(i, 2);
                            case "Qo":
                                return n.ordinalNumber(i, {
                                    unit: "quarter"
                                });
                            case "QQQ":
                                return n.quarter(i, {
                                    width: "abbreviated",
                                    context: "formatting"
                                });
                            case "QQQQQ":
                                return n.quarter(i, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            default:
                                return n.quarter(i, {
                                    width: "wide",
                                    context: "formatting"
                                })
                        }
                    },
                    q: function(e, t, n) {
                        var i = Math.ceil((e.getUTCMonth() + 1) / 3);
                        switch (t) {
                            case "q":
                                return String(i);
                            case "qq":
                                return bi(i, 2);
                            case "qo":
                                return n.ordinalNumber(i, {
                                    unit: "quarter"
                                });
                            case "qqq":
                                return n.quarter(i, {
                                    width: "abbreviated",
                                    context: "standalone"
                                });
                            case "qqqqq":
                                return n.quarter(i, {
                                    width: "narrow",
                                    context: "standalone"
                                });
                            default:
                                return n.quarter(i, {
                                    width: "wide",
                                    context: "standalone"
                                })
                        }
                    },
                    M: function(e, t, n) {
                        var i = e.getUTCMonth();
                        switch (t) {
                            case "M":
                            case "MM":
                                return vi.M(e, t);
                            case "Mo":
                                return n.ordinalNumber(i + 1, {
                                    unit: "month"
                                });
                            case "MMM":
                                return n.month(i, {
                                    width: "abbreviated",
                                    context: "formatting"
                                });
                            case "MMMMM":
                                return n.month(i, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            default:
                                return n.month(i, {
                                    width: "wide",
                                    context: "formatting"
                                })
                        }
                    },
                    L: function(e, t, n) {
                        var i = e.getUTCMonth();
                        switch (t) {
                            case "L":
                                return String(i + 1);
                            case "LL":
                                return bi(i + 1, 2);
                            case "Lo":
                                return n.ordinalNumber(i + 1, {
                                    unit: "month"
                                });
                            case "LLL":
                                return n.month(i, {
                                    width: "abbreviated",
                                    context: "standalone"
                                });
                            case "LLLLL":
                                return n.month(i, {
                                    width: "narrow",
                                    context: "standalone"
                                });
                            default:
                                return n.month(i, {
                                    width: "wide",
                                    context: "standalone"
                                })
                        }
                    },
                    w: function(e, t, n, i) {
                        var r = gi(e, i);
                        return "wo" === t ? n.ordinalNumber(r, {
                            unit: "week"
                        }) : bi(r, t.length)
                    },
                    I: function(e, t, n) {
                        var i = ci(e);
                        return "Io" === t ? n.ordinalNumber(i, {
                            unit: "week"
                        }) : bi(i, t.length)
                    },
                    d: function(e, t, n) {
                        return "do" === t ? n.ordinalNumber(e.getUTCDate(), {
                            unit: "date"
                        }) : vi.d(e, t)
                    },
                    D: function(e, t, n) {
                        var i = function(e) {
                            ti(1, arguments);
                            var t = ni(e),
                                n = t.getTime();
                            t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
                            var i = n - t.getTime();
                            return Math.floor(i / 864e5) + 1
                        }(e);
                        return "Do" === t ? n.ordinalNumber(i, {
                            unit: "dayOfYear"
                        }) : bi(i, t.length)
                    },
                    E: function(e, t, n) {
                        var i = e.getUTCDay();
                        switch (t) {
                            case "E":
                            case "EE":
                            case "EEE":
                                return n.day(i, {
                                    width: "abbreviated",
                                    context: "formatting"
                                });
                            case "EEEEE":
                                return n.day(i, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            case "EEEEEE":
                                return n.day(i, {
                                    width: "short",
                                    context: "formatting"
                                });
                            default:
                                return n.day(i, {
                                    width: "wide",
                                    context: "formatting"
                                })
                        }
                    },
                    e: function(e, t, n, i) {
                        var r = e.getUTCDay(),
                            a = (r - i.weekStartsOn + 8) % 7 || 7;
                        switch (t) {
                            case "e":
                                return String(a);
                            case "ee":
                                return bi(a, 2);
                            case "eo":
                                return n.ordinalNumber(a, {
                                    unit: "day"
                                });
                            case "eee":
                                return n.day(r, {
                                    width: "abbreviated",
                                    context: "formatting"
                                });
                            case "eeeee":
                                return n.day(r, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            case "eeeeee":
                                return n.day(r, {
                                    width: "short",
                                    context: "formatting"
                                });
                            default:
                                return n.day(r, {
                                    width: "wide",
                                    context: "formatting"
                                })
                        }
                    },
                    c: function(e, t, n, i) {
                        var r = e.getUTCDay(),
                            a = (r - i.weekStartsOn + 8) % 7 || 7;
                        switch (t) {
                            case "c":
                                return String(a);
                            case "cc":
                                return bi(a, t.length);
                            case "co":
                                return n.ordinalNumber(a, {
                                    unit: "day"
                                });
                            case "ccc":
                                return n.day(r, {
                                    width: "abbreviated",
                                    context: "standalone"
                                });
                            case "ccccc":
                                return n.day(r, {
                                    width: "narrow",
                                    context: "standalone"
                                });
                            case "cccccc":
                                return n.day(r, {
                                    width: "short",
                                    context: "standalone"
                                });
                            default:
                                return n.day(r, {
                                    width: "wide",
                                    context: "standalone"
                                })
                        }
                    },
                    i: function(e, t, n) {
                        var i = e.getUTCDay(),
                            r = 0 === i ? 7 : i;
                        switch (t) {
                            case "i":
                                return String(r);
                            case "ii":
                                return bi(r, t.length);
                            case "io":
                                return n.ordinalNumber(r, {
                                    unit: "day"
                                });
                            case "iii":
                                return n.day(i, {
                                    width: "abbreviated",
                                    context: "formatting"
                                });
                            case "iiiii":
                                return n.day(i, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            case "iiiiii":
                                return n.day(i, {
                                    width: "short",
                                    context: "formatting"
                                });
                            default:
                                return n.day(i, {
                                    width: "wide",
                                    context: "formatting"
                                })
                        }
                    },
                    a: function(e, t, n) {
                        var i = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
                        switch (t) {
                            case "a":
                            case "aa":
                                return n.dayPeriod(i, {
                                    width: "abbreviated",
                                    context: "formatting"
                                });
                            case "aaa":
                                return n.dayPeriod(i, {
                                    width: "abbreviated",
                                    context: "formatting"
                                }).toLowerCase();
                            case "aaaaa":
                                return n.dayPeriod(i, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            default:
                                return n.dayPeriod(i, {
                                    width: "wide",
                                    context: "formatting"
                                })
                        }
                    },
                    b: function(e, t, n) {
                        var i, r = e.getUTCHours();
                        switch (i = 12 === r ? wi : 0 === r ? yi : r / 12 >= 1 ? "pm" : "am", t) {
                            case "b":
                            case "bb":
                                return n.dayPeriod(i, {
                                    width: "abbreviated",
                                    context: "formatting"
                                });
                            case "bbb":
                                return n.dayPeriod(i, {
                                    width: "abbreviated",
                                    context: "formatting"
                                }).toLowerCase();
                            case "bbbbb":
                                return n.dayPeriod(i, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            default:
                                return n.dayPeriod(i, {
                                    width: "wide",
                                    context: "formatting"
                                })
                        }
                    },
                    B: function(e, t, n) {
                        var i, r = e.getUTCHours();
                        switch (i = r >= 17 ? Ei : r >= 12 ? Ci : r >= 4 ? xi : ki, t) {
                            case "B":
                            case "BB":
                            case "BBB":
                                return n.dayPeriod(i, {
                                    width: "abbreviated",
                                    context: "formatting"
                                });
                            case "BBBBB":
                                return n.dayPeriod(i, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            default:
                                return n.dayPeriod(i, {
                                    width: "wide",
                                    context: "formatting"
                                })
                        }
                    },
                    h: function(e, t, n) {
                        if ("ho" === t) {
                            var i = e.getUTCHours() % 12;
                            return 0 === i && (i = 12), n.ordinalNumber(i, {
                                unit: "hour"
                            })
                        }
                        return vi.h(e, t)
                    },
                    H: function(e, t, n) {
                        return "Ho" === t ? n.ordinalNumber(e.getUTCHours(), {
                            unit: "hour"
                        }) : vi.H(e, t)
                    },
                    K: function(e, t, n) {
                        var i = e.getUTCHours() % 12;
                        return "Ko" === t ? n.ordinalNumber(i, {
                            unit: "hour"
                        }) : bi(i, t.length)
                    },
                    k: function(e, t, n) {
                        var i = e.getUTCHours();
                        return 0 === i && (i = 24), "ko" === t ? n.ordinalNumber(i, {
                            unit: "hour"
                        }) : bi(i, t.length)
                    },
                    m: function(e, t, n) {
                        return "mo" === t ? n.ordinalNumber(e.getUTCMinutes(), {
                            unit: "minute"
                        }) : vi.m(e, t)
                    },
                    s: function(e, t, n) {
                        return "so" === t ? n.ordinalNumber(e.getUTCSeconds(), {
                            unit: "second"
                        }) : vi.s(e, t)
                    },
                    S: function(e, t) {
                        return vi.S(e, t)
                    },
                    X: function(e, t, n, i) {
                        var r = (i._originalDate || e).getTimezoneOffset();
                        if (0 === r) return "Z";
                        switch (t) {
                            case "X":
                                return Si(r);
                            case "XXXX":
                            case "XX":
                                return Mi(r);
                            default:
                                return Mi(r, ":")
                        }
                    },
                    x: function(e, t, n, i) {
                        var r = (i._originalDate || e).getTimezoneOffset();
                        switch (t) {
                            case "x":
                                return Si(r);
                            case "xxxx":
                            case "xx":
                                return Mi(r);
                            default:
                                return Mi(r, ":")
                        }
                    },
                    O: function(e, t, n, i) {
                        var r = (i._originalDate || e).getTimezoneOffset();
                        switch (t) {
                            case "O":
                            case "OO":
                            case "OOO":
                                return "GMT" + Zi(r, ":");
                            default:
                                return "GMT" + Mi(r, ":")
                        }
                    },
                    z: function(e, t, n, i) {
                        var r = (i._originalDate || e).getTimezoneOffset();
                        switch (t) {
                            case "z":
                            case "zz":
                            case "zzz":
                                return "GMT" + Zi(r, ":");
                            default:
                                return "GMT" + Mi(r, ":")
                        }
                    },
                    t: function(e, t, n, i) {
                        var r = i._originalDate || e;
                        return bi(Math.floor(r.getTime() / 1e3), t.length)
                    },
                    T: function(e, t, n, i) {
                        return bi((i._originalDate || e).getTime(), t.length)
                    }
                };

            function Zi(e, t) {
                var n = e > 0 ? "-" : "+",
                    i = Math.abs(e),
                    r = Math.floor(i / 60),
                    a = i % 60;
                if (0 === a) return n + String(r);
                var o = t || "";
                return n + String(r) + o + bi(a, 2)
            }

            function Si(e, t) {
                return e % 60 == 0 ? (e > 0 ? "-" : "+") + bi(Math.abs(e) / 60, 2) : Mi(e, t)
            }

            function Mi(e, t) {
                var n = t || "",
                    i = e > 0 ? "-" : "+",
                    r = Math.abs(e);
                return i + bi(Math.floor(r / 60), 2) + n + bi(r % 60, 2)
            }
            var Ti = Ai,
                Ii = function(e, t) {
                    switch (e) {
                        case "P":
                            return t.date({
                                width: "short"
                            });
                        case "PP":
                            return t.date({
                                width: "medium"
                            });
                        case "PPP":
                            return t.date({
                                width: "long"
                            });
                        default:
                            return t.date({
                                width: "full"
                            })
                    }
                },
                _i = function(e, t) {
                    switch (e) {
                        case "p":
                            return t.time({
                                width: "short"
                            });
                        case "pp":
                            return t.time({
                                width: "medium"
                            });
                        case "ppp":
                            return t.time({
                                width: "long"
                            });
                        default:
                            return t.time({
                                width: "full"
                            })
                    }
                },
                Ni = {
                    p: _i,
                    P: function(e, t) {
                        var n, i = e.match(/(P+)(p+)?/) || [],
                            r = i[1],
                            a = i[2];
                        if (!a) return Ii(e, t);
                        switch (r) {
                            case "P":
                                n = t.dateTime({
                                    width: "short"
                                });
                                break;
                            case "PP":
                                n = t.dateTime({
                                    width: "medium"
                                });
                                break;
                            case "PPP":
                                n = t.dateTime({
                                    width: "long"
                                });
                                break;
                            default:
                                n = t.dateTime({
                                    width: "full"
                                })
                        }
                        return n.replace("{{date}}", Ii(r, t)).replace("{{time}}", _i(a, t))
                    }
                },
                Ri = Ni;
            var Oi = ["D", "DD"],
                Di = ["YY", "YYYY"];

            function Li(e, t, n) {
                if ("YYYY" === e) throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
                if ("YY" === e) throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
                if ("D" === e) throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
                if ("DD" === e) throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))
            }
            var Bi = {
                    lessThanXSeconds: {
                        one: "less than a second",
                        other: "less than {{count}} seconds"
                    },
                    xSeconds: {
                        one: "1 second",
                        other: "{{count}} seconds"
                    },
                    halfAMinute: "half a minute",
                    lessThanXMinutes: {
                        one: "less than a minute",
                        other: "less than {{count}} minutes"
                    },
                    xMinutes: {
                        one: "1 minute",
                        other: "{{count}} minutes"
                    },
                    aboutXHours: {
                        one: "about 1 hour",
                        other: "about {{count}} hours"
                    },
                    xHours: {
                        one: "1 hour",
                        other: "{{count}} hours"
                    },
                    xDays: {
                        one: "1 day",
                        other: "{{count}} days"
                    },
                    aboutXWeeks: {
                        one: "about 1 week",
                        other: "about {{count}} weeks"
                    },
                    xWeeks: {
                        one: "1 week",
                        other: "{{count}} weeks"
                    },
                    aboutXMonths: {
                        one: "about 1 month",
                        other: "about {{count}} months"
                    },
                    xMonths: {
                        one: "1 month",
                        other: "{{count}} months"
                    },
                    aboutXYears: {
                        one: "about 1 year",
                        other: "about {{count}} years"
                    },
                    xYears: {
                        one: "1 year",
                        other: "{{count}} years"
                    },
                    overXYears: {
                        one: "over 1 year",
                        other: "over {{count}} years"
                    },
                    almostXYears: {
                        one: "almost 1 year",
                        other: "almost {{count}} years"
                    }
                },
                Fi = function(e, t, n) {
                    var i, r = Bi[e];
                    return i = "string" == typeof r ? r : 1 === t ? r.one : r.other.replace("{{count}}", t.toString()), null != n && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + i : i + " ago" : i
                };

            function Pi(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.width ? String(t.width) : e.defaultWidth;
                    return e.formats[n] || e.formats[e.defaultWidth]
                }
            }
            var ji = {
                    date: Pi({
                        formats: {
                            full: "EEEE, MMMM do, y",
                            long: "MMMM do, y",
                            medium: "MMM d, y",
                            short: "MM/dd/yyyy"
                        },
                        defaultWidth: "full"
                    }),
                    time: Pi({
                        formats: {
                            full: "h:mm:ss a zzzz",
                            long: "h:mm:ss a z",
                            medium: "h:mm:ss a",
                            short: "h:mm a"
                        },
                        defaultWidth: "full"
                    }),
                    dateTime: Pi({
                        formats: {
                            full: "{{date}} 'at' {{time}}",
                            long: "{{date}} 'at' {{time}}",
                            medium: "{{date}}, {{time}}",
                            short: "{{date}}, {{time}}"
                        },
                        defaultWidth: "full"
                    })
                },
                zi = {
                    lastWeek: "'last' eeee 'at' p",
                    yesterday: "'yesterday at' p",
                    today: "'today at' p",
                    tomorrow: "'tomorrow at' p",
                    nextWeek: "eeee 'at' p",
                    other: "P"
                },
                Ui = function(e, t, n, i) {
                    return zi[e]
                };

            function Hi(e) {
                return function(t, n) {
                    var i;
                    if ("formatting" === (null != n && n.context ? String(n.context) : "standalone") && e.formattingValues) {
                        var r = e.defaultFormattingWidth || e.defaultWidth,
                            a = null != n && n.width ? String(n.width) : r;
                        i = e.formattingValues[a] || e.formattingValues[r]
                    } else {
                        var o = e.defaultWidth,
                            s = null != n && n.width ? String(n.width) : e.defaultWidth;
                        i = e.values[s] || e.values[o]
                    }
                    return i[e.argumentCallback ? e.argumentCallback(t) : t]
                }
            }
            var Wi = {
                ordinalNumber: function(e, t) {
                    var n = Number(e),
                        i = n % 100;
                    if (i > 20 || i < 10) switch (i % 10) {
                        case 1:
                            return n + "st";
                        case 2:
                            return n + "nd";
                        case 3:
                            return n + "rd"
                    }
                    return n + "th"
                },
                era: Hi({
                    values: {
                        narrow: ["B", "A"],
                        abbreviated: ["BC", "AD"],
                        wide: ["Before Christ", "Anno Domini"]
                    },
                    defaultWidth: "wide"
                }),
                quarter: Hi({
                    values: {
                        narrow: ["1", "2", "3", "4"],
                        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
                    },
                    defaultWidth: "wide",
                    argumentCallback: function(e) {
                        return e - 1
                    }
                }),
                month: Hi({
                    values: {
                        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    },
                    defaultWidth: "wide"
                }),
                day: Hi({
                    values: {
                        narrow: ["S", "M", "T", "W", "T", "F", "S"],
                        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    },
                    defaultWidth: "wide"
                }),
                dayPeriod: Hi({
                    values: {
                        narrow: {
                            am: "a",
                            pm: "p",
                            midnight: "mi",
                            noon: "n",
                            morning: "morning",
                            afternoon: "afternoon",
                            evening: "evening",
                            night: "night"
                        },
                        abbreviated: {
                            am: "AM",
                            pm: "PM",
                            midnight: "midnight",
                            noon: "noon",
                            morning: "morning",
                            afternoon: "afternoon",
                            evening: "evening",
                            night: "night"
                        },
                        wide: {
                            am: "a.m.",
                            pm: "p.m.",
                            midnight: "midnight",
                            noon: "noon",
                            morning: "morning",
                            afternoon: "afternoon",
                            evening: "evening",
                            night: "night"
                        }
                    },
                    defaultWidth: "wide",
                    formattingValues: {
                        narrow: {
                            am: "a",
                            pm: "p",
                            midnight: "mi",
                            noon: "n",
                            morning: "in the morning",
                            afternoon: "in the afternoon",
                            evening: "in the evening",
                            night: "at night"
                        },
                        abbreviated: {
                            am: "AM",
                            pm: "PM",
                            midnight: "midnight",
                            noon: "noon",
                            morning: "in the morning",
                            afternoon: "in the afternoon",
                            evening: "in the evening",
                            night: "at night"
                        },
                        wide: {
                            am: "a.m.",
                            pm: "p.m.",
                            midnight: "midnight",
                            noon: "noon",
                            morning: "in the morning",
                            afternoon: "in the afternoon",
                            evening: "in the evening",
                            night: "at night"
                        }
                    },
                    defaultFormattingWidth: "wide"
                })
            };

            function $i(e) {
                return function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = n.width,
                        r = i && e.matchPatterns[i] || e.matchPatterns[e.defaultMatchWidth],
                        a = t.match(r);
                    if (!a) return null;
                    var o, s = a[0],
                        d = i && e.parsePatterns[i] || e.parsePatterns[e.defaultParseWidth],
                        l = Array.isArray(d) ? function(e, t) {
                            for (var n = 0; n < e.length; n++)
                                if (t(e[n])) return n;
                            return
                        }(d, (function(e) {
                            return e.test(s)
                        })) : function(e, t) {
                            for (var n in e)
                                if (e.hasOwnProperty(n) && t(e[n])) return n;
                            return
                        }(d, (function(e) {
                            return e.test(s)
                        }));
                    return o = e.valueCallback ? e.valueCallback(l) : l, {
                        value: o = n.valueCallback ? n.valueCallback(o) : o,
                        rest: t.slice(s.length)
                    }
                }
            }
            var Vi, Xi = {
                    ordinalNumber: (Vi = {
                        matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                        parsePattern: /\d+/i,
                        valueCallback: function(e) {
                            return parseInt(e, 10)
                        }
                    }, function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.match(Vi.matchPattern);
                        if (!n) return null;
                        var i = n[0],
                            r = e.match(Vi.parsePattern);
                        if (!r) return null;
                        var a = Vi.valueCallback ? Vi.valueCallback(r[0]) : r[0];
                        return {
                            value: a = t.valueCallback ? t.valueCallback(a) : a,
                            rest: e.slice(i.length)
                        }
                    }),
                    era: $i({
                        matchPatterns: {
                            narrow: /^(b|a)/i,
                            abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                            wide: /^(before christ|before common era|anno domini|common era)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/^b/i, /^(a|c)/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    quarter: $i({
                        matchPatterns: {
                            narrow: /^[1234]/i,
                            abbreviated: /^q[1234]/i,
                            wide: /^[1234](th|st|nd|rd)? quarter/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/1/i, /2/i, /3/i, /4/i]
                        },
                        defaultParseWidth: "any",
                        valueCallback: function(e) {
                            return e + 1
                        }
                    }),
                    month: $i({
                        matchPatterns: {
                            narrow: /^[jfmasond]/i,
                            abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                            wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                            any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    day: $i({
                        matchPatterns: {
                            narrow: /^[smtwf]/i,
                            short: /^(su|mo|tu|we|th|fr|sa)/i,
                            abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                            wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                            any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    dayPeriod: $i({
                        matchPatterns: {
                            narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                            any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
                        },
                        defaultMatchWidth: "any",
                        parsePatterns: {
                            any: {
                                am: /^a/i,
                                pm: /^p/i,
                                midnight: /^mi/i,
                                noon: /^no/i,
                                morning: /morning/i,
                                afternoon: /afternoon/i,
                                evening: /evening/i,
                                night: /night/i
                            }
                        },
                        defaultParseWidth: "any"
                    })
                },
                qi = {
                    code: "en-US",
                    formatDistance: Fi,
                    formatLong: ji,
                    formatRelative: Ui,
                    localize: Wi,
                    match: Xi,
                    options: {
                        weekStartsOn: 0,
                        firstWeekContainsDate: 1
                    }
                },
                Yi = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
                Gi = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
                Qi = /^'([^]*?)'?$/,
                Ki = /''/g,
                Ji = /[a-zA-Z]/;

            function er(e, t, n) {
                var i, r, a, o, s, d, l, u, c, p, f, h, m, g, b, v, y, w;
                ti(2, arguments);
                var x = String(t),
                    C = fi(),
                    E = null !== (i = null !== (r = null == n ? void 0 : n.locale) && void 0 !== r ? r : C.locale) && void 0 !== i ? i : qi,
                    k = ai(null !== (a = null !== (o = null !== (s = null !== (d = null == n ? void 0 : n.firstWeekContainsDate) && void 0 !== d ? d : null == n || null === (l = n.locale) || void 0 === l || null === (u = l.options) || void 0 === u ? void 0 : u.firstWeekContainsDate) && void 0 !== s ? s : C.firstWeekContainsDate) && void 0 !== o ? o : null === (c = C.locale) || void 0 === c || null === (p = c.options) || void 0 === p ? void 0 : p.firstWeekContainsDate) && void 0 !== a ? a : 1);
                if (!(k >= 1 && k <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
                var A = ai(null !== (f = null !== (h = null !== (m = null !== (g = null == n ? void 0 : n.weekStartsOn) && void 0 !== g ? g : null == n || null === (b = n.locale) || void 0 === b || null === (v = b.options) || void 0 === v ? void 0 : v.weekStartsOn) && void 0 !== m ? m : C.weekStartsOn) && void 0 !== h ? h : null === (y = C.locale) || void 0 === y || null === (w = y.options) || void 0 === w ? void 0 : w.weekStartsOn) && void 0 !== f ? f : 0);
                if (!(A >= 0 && A <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
                if (!E.localize) throw new RangeError("locale must contain localize property");
                if (!E.formatLong) throw new RangeError("locale must contain formatLong property");
                var Z = ni(e);
                if (!si(Z)) throw new RangeError("Invalid time value");
                var S = function(e) {
                        var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
                        return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime()
                    }(Z),
                    M = di(Z, S),
                    T = {
                        firstWeekContainsDate: k,
                        weekStartsOn: A,
                        locale: E,
                        _originalDate: Z
                    };
                return x.match(Gi).map((function(e) {
                    var t = e[0];
                    return "p" === t || "P" === t ? (0, Ri[t])(e, E.formatLong) : e
                })).join("").match(Yi).map((function(i) {
                    if ("''" === i) return "'";
                    var r = i[0];
                    if ("'" === r) return function(e) {
                        var t = e.match(Qi);
                        if (!t) return e;
                        return t[1].replace(Ki, "'")
                    }(i);
                    var a, o = Ti[r];
                    if (o) return null != n && n.useAdditionalWeekYearTokens || (a = i, -1 === Di.indexOf(a)) || Li(i, t, String(e)), null != n && n.useAdditionalDayOfYearTokens || ! function(e) {
                        return -1 !== Oi.indexOf(e)
                    }(i) || Li(i, t, String(e)), o(M, i, E.localize, T);
                    if (r.match(Ji)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + r + "`");
                    return i
                })).join("")
            }
            const tr = e => {
                    const t = new Date(1e3 * e);
                    return function(e) {
                        return ti(1, arguments), ri(e, Date.now())
                    }(t) ? (0, v.dW)("timeToday", null, "Today") : function(e) {
                        return ti(1, arguments), ri(e, oi(Date.now(), 1))
                    }(t) ? (0, v.dW)("timeYesterday", null, "Yesterday") : er(t, "d/M/yyyy")
                },
                nr = e => (0, W.tZ)("span", {
                    className: "timestamp-operator",
                    children: `${e} - `
                }),
                ir = e => {
                    const t = (0, o.v9)((t => (0, E.cY)(t, e.operatorId))),
                        n = (0, o.v9)((t => (0, E.N9)(t, e.operatorId))),
                        i = t ? {
                            backgroundImage: `url('${t}')`
                        } : null;
                    return (0, W.BX)(W.HY, {
                        children: [i && (0, W.tZ)("span", {
                            className: "timestamp-avatar",
                            style: i
                        }), nr(n)]
                    })
                };
            var rr = e => {
                let {
                    operatorId: t,
                    isAIAssistant: n,
                    aiAssistantName: i,
                    time: r
                } = e;
                return (0, W.BX)("div", {
                    className: "messageTimestamp",
                    children: [t && (0, W.tZ)(ir, {
                        operatorId: t
                    }), n && i && nr(`${i} AI Chatbot`), `${tr(r)}, ${er(new Date(1e3*r),"H:mm")}`]
                })
            };
            var ar = e => {
                const t = (0, o.v9)((t => (0, E.V5)(t, e.id))),
                    n = (0, o.v9)((e => (0, E.qc)(e))),
                    i = Boolean(t && e.isAIAssistant),
                    [a, s] = (0, r.useState)(i);
                (0, r.useEffect)((() => {
                    s(i)
                }), [i]);
                const d = Boolean(e.ratingId) && !a,
                    l = {
                        border: "1px solid transparent",
                        background: `linear-gradient(white, white) padding-box, linear-gradient(135deg, ${p.UC[0]}, ${p.UC[1]}) border-box`
                    };
                return (0, W.BX)("div", {
                    className: `message message-operator ${a?"timestamp-visible":""} ${e.ratingId?"rating-visible":""}`,
                    style: e.isAIAssistant ? l : void 0,
                    children: [(0, W.tZ)("span", {
                        className: "message-content",
                        dangerouslySetInnerHTML: {
                            __html: e.content
                        },
                        onClick: () => {
                            s((e => !e))
                        }
                    }), (0, W.tZ)(kn, { in: a,
                        children: (0, W.tZ)(rr, {
                            isAIAssistant: e.isAIAssistant,
                            aiAssistantName: n,
                            time: e.time_sent
                        })
                    }), (0, W.tZ)(kn, { in: d,
                        children: (0, W.tZ)(Jn, {
                            messageId: e.id,
                            ratingId: e.ratingId,
                            rating: e.rating
                        })
                    })]
                })
            };
            const or = (e, t) => {
                    const n = (0, f.a9)(),
                        i = t;
                    e && n && n.requestAnimationFrame((() => {
                        i.current ? .style.setProperty("width", `${(e.current?.offsetWidth??0)+35}px`)
                    }))
                },
                sr = e => xt(e),
                dr = e => {
                    const {
                        host: t,
                        pathname: n,
                        search: i,
                        hash: r
                    } = (0, p.en)(e) || {};
                    return `${t}${n}${i}${r}`
                };
            var lr = e => (0, W.tZ)("button", {
                type: "button",
                title: e.title,
                onClick: () => {
                    let t = e.title;
                    e.cardClicked && (t = `${e.cardClicked} &rarr; ${e.title}`), e.onClick(e.payload, t)
                },
                children: (0, W.tZ)("span", {
                    dangerouslySetInnerHTML: {
                        __html: Et(e.title)
                    }
                })
            });
            var ur = e => {
                const {
                    title: t,
                    payload: n,
                    onClick: i,
                    cardClicked: r
                } = e, a = (0, o.I0)(), s = Et(t), d = e.url || n, l = (0, p.jr)(d);
                return (0, W.tZ)("div", {
                    className: "button-url",
                    children: (0, W.tZ)("a", {
                        className: "button-url__anchor",
                        href: (0, p.jr)(d),
                        type: "button",
                        onClick: o => {
                            o.preventDefault();
                            let s = e.title;
                            r && (s = `${r} &rarr; ${t}`), i(n, s), e.messageType === it.Cs.IFRAME && e.url ? a((0, x.xZ_)(e.url)) : (0, p.nG)(l)
                        },
                        "data-testid": "buttonUrl",
                        dangerouslySetInnerHTML: {
                            __html: s
                        }
                    })
                })
            };
            var cr = e => {
                let {
                    buttons: t
                } = e;
                const n = (0, o.I0)(),
                    i = (e, t) => {
                        n((0, x.eBK)(t, e)), n((0, x.SnQ)(nt.M.buttonClicked))
                    };
                return (0, W.tZ)("div", {
                    className: "button-wrapper",
                    children: t.map((e => (0, W.BX)(r.Fragment, {
                        children: ["url" === e.type && (0, W.tZ)(ur, {
                            title: e.title,
                            payload: e.payload,
                            url: e.url,
                            cardClicked: e.cardClicked,
                            onClick: i
                        }), "action" === e.type && (0, W.tZ)(lr, {
                            title: e.title,
                            payload: e.payload,
                            cardClicked: e.cardClicked,
                            onClick: i
                        })]
                    }, `${e.title}${e.payload}`)))
                })
            };
            var pr = e => {
                    let {
                        content: t,
                        buttons: n
                    } = e;
                    const i = sr(t);
                    return (0, W.tZ)("div", {
                        className: "message message-operator buttons-message",
                        children: (0, W.BX)("div", {
                            className: "message-with-buttons",
                            children: [(0, W.tZ)("div", {
                                className: "message-with-buttons-text",
                                dangerouslySetInnerHTML: {
                                    __html: i
                                },
                                "data-testid": "buttonsText"
                            }), (0, W.tZ)(cr, {
                                buttons: n
                            })]
                        })
                    })
                },
                fr = n(8538),
                hr = n.n(fr);
            const mr = (0, l.F4)({
                    "0%": {
                        transform: "translateX(8%)"
                    },
                    "100%": {
                        transform: "translateX(0)"
                    }
                }),
                gr = (0, l.F4)({
                    "0%": {
                        opacity: 1,
                        zIndex: 1
                    },
                    "100%": {
                        opacity: 0,
                        zIndex: -1
                    }
                });
            var br = {
                container: {
                    name: "jiaacb",
                    styles: "position:relative;clear:both;width:100%;float:left"
                },
                getButton: (e, t) => (0, l.iv)({
                    position: "absolute",
                    background: "#fff",
                    borderRadius: "50%",
                    width: 40,
                    height: 40,
                    boxShadow: "0px 8px 20px 0px rgba(0, 27, 71, 0.24)",
                    zIndex: 3,
                    top: 140,
                    transition: "box-shadow 0.2s, opacity 0.2s",
                    "&:hover": {
                        boxShadow: "0px 10px 20px 0px rgba(0, 27, 71, 0.24)"
                    },
                    ...t && {
                        top: 22
                    },
                    ..."left" === e && {
                        left: 0
                    },
                    ..."right" === e && {
                        right: 0
                    },
                    "& svg": {
                        width: 40,
                        height: 40,
                        ..."left" === e && {
                            transform: "rotate(90deg)",
                            ".lang-rtl &": {
                                transform: "rotate(-90deg)"
                            }
                        },
                        ..."right" === e && {
                            transform: "rotate(-90deg)",
                            ".lang-rtl &": {
                                transform: "rotate(90deg)"
                            }
                        }
                    }
                }, "", ""),
                getItemsContainer: e => {
                    const t = e ? 20 : 28;
                    return (0, l.iv)({
                        padding: `0px ${t}px`,
                        maxWidth: `calc(100% + ${2*t}px)`,
                        background: "transparent",
                        overflow: "auto",
                        borderRadius: 0,
                        display: "flex",
                        scrollSnapType: "x mandatory",
                        scrollPadding: t,
                        scrollBehavior: "smooth",
                        marginBottom: 5,
                        marginLeft: -t,
                        gap: 10,
                        msOverflowStyle: "none",
                        scrollbarWidth: "none",
                        "::-webkit-scrollbar": {
                            display: "none"
                        },
                        ".ios-ipad &": {
                            WebkitOverflowScrolling: "touch"
                        },
                        ".safari &": {
                            scrollSnapType: "x mandatory",
                            ".lang-rtl &": {
                                scrollSnapType: "none"
                            }
                        }
                    }, "", "")
                },
                getItemWrapper: (e, t) => (0, l.iv)({
                    maxWidth: "100%",
                    minWidth: e,
                    scrollSnapAlign: "center",
                    willChange: "transform",
                    transform: "translateX(8%)",
                    animation: `${mr} .5s .2s ease-out forwards`,
                    position: "relative",
                    "&:before": {
                        content: '""',
                        position: "absolute",
                        inset: -1,
                        zIndex: 1,
                        pointerEvents: "none",
                        backgroundColor: "#fff",
                        willChange: "opacity",
                        opacity: 1,
                        animation: `${gr} .5s .2s ease-out forwards`
                    },
                    "&:nth-child(2)": {
                        animationDelay: ".4s",
                        "&:before": {
                            animationDelay: ".4s"
                        }
                    },
                    ...t && {
                        maxWidth: e
                    }
                }, "", "")
            };
            var vr = function(e) {
                return e.DEFAULT = "default", e.REVERSE = "reverse", e
            }(vr || {});
            var yr = e => {
                let {
                    items: t,
                    renderItem: n,
                    isWithoutImages: i = !1,
                    isFlyMessage: a = !1
                } = e;
                const s = (0, o.I0)(),
                    d = (0, v.dZ)(),
                    l = a ? 224 : 240,
                    u = t.length,
                    c = r.useRef(null),
                    p = r.useRef(!1),
                    [f, h] = r.useState(vr.REVERSE),
                    [m, g] = r.useState(0),
                    [b, y] = r.useState(0),
                    [w, C] = r.useState(0),
                    E = (0, r.useCallback)((() => {
                        s((0, x.SnQ)(nt.M.cardsScrolled))
                    }), [s]),
                    k = (0, r.useMemo)((() => {
                        if (!c.current) return 0;
                        const e = d ? -1 * w : w;
                        return e < 10 ? 0 : e > 0 && e < l && u > 1 ? 1 : Math.floor(e / (l + 10)) + 1
                    }), [w, l, d, u]),
                    A = (0, r.useCallback)((() => {
                        c.current && (c.current.scrollLeft += l, E())
                    }), [E, l]),
                    Z = (0, r.useCallback)((() => {
                        c.current && (c.current.scrollLeft -= l, E())
                    }), [E, l]);
                return (0, r.useEffect)((() => {
                    if (!c.current || p.current) return () => {};
                    p.current = !0, c.current.scrollLeft > 0 ? h(vr.DEFAULT) : c.current.scrollLeft = 0;
                    const e = hr()((() => {
                        c.current && C(c.current.scrollLeft)
                    }), 80);
                    return c.current.addEventListener("scroll", e), g(c.current ? .offsetWidth || 0), y(c.current ? .scrollWidth || 0), C(c.current && d && "default" === f ? c.current.scrollWidth - c.current.offsetWidth : 0), () => {
                        c.current && c.current.removeEventListener("scroll", e)
                    }
                }), [d, f]), (0, W.BX)(W.HY, {
                    children: [(0, W.tZ)("div", {
                        css: br.container,
                        className: "slideshow",
                        children: d ? (0, W.BX)(W.HY, {
                            children: ["default" === f && (0, W.BX)(W.HY, {
                                children: [(0, W.tZ)($, {
                                    classNames: "fade200",
                                    in: b - m > w,
                                    children: (0, W.tZ)("button", {
                                        type: "button",
                                        css: br.getButton("left", i),
                                        onClick: A,
                                        children: (0, W.tZ)(at.Fj, {})
                                    })
                                }), (0, W.tZ)($, {
                                    classNames: "fade200",
                                    in: w > 10,
                                    children: (0, W.tZ)("button", {
                                        type: "button",
                                        css: br.getButton("right", i),
                                        onClick: Z,
                                        children: (0, W.tZ)(at.Fj, {})
                                    })
                                })]
                            }), "reverse" === f && (0, W.BX)(W.HY, {
                                children: [(0, W.tZ)($, {
                                    classNames: "fade200",
                                    in: w < -10,
                                    children: (0, W.tZ)("button", {
                                        type: "button",
                                        css: br.getButton("left", i),
                                        onClick: A,
                                        children: (0, W.tZ)(at.Fj, {})
                                    })
                                }), (0, W.tZ)($, {
                                    classNames: "fade200",
                                    in: b - m > -1 * w,
                                    children: (0, W.tZ)("button", {
                                        type: "button",
                                        css: br.getButton("right", i),
                                        onClick: Z,
                                        children: (0, W.tZ)(at.Fj, {})
                                    })
                                })]
                            })]
                        }) : (0, W.BX)(W.HY, {
                            children: [(0, W.tZ)($, {
                                classNames: "fade200",
                                in: w > 10,
                                children: (0, W.tZ)("button", {
                                    type: "button",
                                    css: br.getButton("left", i),
                                    onClick: Z,
                                    children: (0, W.tZ)(at.Fj, {})
                                })
                            }), (0, W.tZ)($, {
                                classNames: "fade200",
                                in: b - m > w,
                                children: (0, W.tZ)("button", {
                                    type: "button",
                                    css: br.getButton("right", i),
                                    onClick: A,
                                    children: (0, W.tZ)(at.Fj, {})
                                })
                            })]
                        })
                    }), (0, W.tZ)("div", {
                        className: "message message-operator",
                        css: br.getItemsContainer(a),
                        ref: c,
                        children: t.map(((e, i) => (0, W.tZ)("div", {
                            css: br.getItemWrapper(l, 1 === t.length),
                            children: n(e, k === i)
                        }, e.id)))
                    })]
                })
            };
            var wr = e => {
                let {
                    buttons: t
                } = e;
                const n = (0, o.I0)(),
                    i = t[0],
                    r = (0, p.jr)(i.url || i.payload);
                return (0, W.tZ)("div", {
                    className: "button-wrapper",
                    children: (0, W.tZ)("a", {
                        href: r,
                        className: "button-icon",
                        onClick: e => {
                            e.preventDefault(), n((0, x.SnQ)(nt.M.buttonClicked)), (0, p.nG)(r)
                        },
                        children: (0, W.tZ)(at.UW, {})
                    })
                })
            };
            var xr = {
                getContentContainer: e => (0, l.iv)({
                    padding: "9px 12px 8px",
                    border: "1px solid #ebeef0",
                    borderTop: "none",
                    ...!e && {
                        borderRadius: "14px 14px 0 0",
                        borderTop: "1px solid #ebeef0"
                    },
                    "& a": {
                        textDecoration: "none",
                        color: "#00122e",
                        "&:hover, &:focus, &:active, &:visited": {
                            color: "#00122e",
                            outline: "none"
                        },
                        "&:hover": {
                            textDecoration: "underline"
                        }
                    }
                }, "", ""),
                image: {
                    name: "1bd9gmu",
                    styles: "border-radius:14px 14px 0 0;height:122px;background:#fff no-repeat center center;background-size:cover;border:1px solid #ebeef0;border-bottom:0"
                },
                title: {
                    name: "1nxpb8w",
                    styles: "font-size:15px;line-height:19px;font-weight:bold;color:#00122e"
                },
                subtitle: {
                    name: "1awya7l",
                    styles: "margin:4px 0 0;line-height:16.5px;font-size:14px;color:#4c596b;white-space:pre-line;& .emoji{width:14px;margin:0 0 -2px 2px;}"
                },
                url: {
                    name: "1n3ai7k",
                    styles: "font-size:14px;line-height:17px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#00122e;& a{opacity:0.5;}"
                },
                buttons: {
                    name: "o3tcs8",
                    styles: "&& .button-wrapper{margin-top:0;margin-bottom:1px;&:before{content:none;}button{width:100%;}}"
                }
            };
            var Cr = e => {
                let {
                    imageUrl: t,
                    link: n,
                    openLink: i = (() => {})
                } = e;
                return n ? (0, W.tZ)("a", {
                    href: n,
                    onClick: i,
                    "data-testid": "cardImageLink",
                    children: (0, W.tZ)("div", {
                        css: xr.image,
                        style: {
                            backgroundImage: `url(${t})`
                        }
                    })
                }) : (0, W.tZ)("div", {
                    css: xr.image,
                    style: {
                        backgroundImage: `url(${t})`
                    }
                })
            };
            var Er = e => {
                let {
                    title: t,
                    isShopifyCard: n,
                    imageUrl: i,
                    buttons: a,
                    proxyUrl: o,
                    subtitle: s = "",
                    url: d = ""
                } = e;
                const {
                    host: l
                } = (0, p.en)(d) || {}, u = (0, p.jr)(d), c = xt(t), f = xt(s), h = (0, p.EE)((0, p.bq)(), d), m = Boolean(i), g = (0, r.useMemo)((() => a.map((e => ({ ...e,
                    cardClicked: t
                })))), [a, t]), b = e => {
                    e.preventDefault();
                    const t = o || u;
                    try {
                        h && window.top ? window.top.location = t : window.open(t)
                    } catch (e) {
                        window.open(t)
                    }
                };
                return (0, W.BX)("div", {
                    className: "message-with-buttons",
                    children: [i && (0, W.tZ)(Cr, {
                        imageUrl: i,
                        link: u,
                        openLink: b
                    }), (0, W.BX)("div", {
                        css: xr.getContentContainer(m),
                        children: [(0, W.tZ)("div", {
                            css: xr.title,
                            dangerouslySetInnerHTML: {
                                __html: c
                            }
                        }), s && (0, W.tZ)("div", {
                            css: xr.subtitle,
                            dangerouslySetInnerHTML: {
                                __html: f
                            }
                        }), d && (0, W.tZ)("div", {
                            css: xr.url,
                            children: (0, W.tZ)("a", {
                                href: u,
                                type: "button",
                                onClick: b,
                                "data-testid": "cardLink",
                                children: h ? dr(d) : l
                            })
                        })]
                    }), (0, W.tZ)("div", {
                        css: xr.buttons,
                        children: n ? (0, W.tZ)(wr, {
                            buttons: g
                        }) : (0, W.tZ)(cr, {
                            buttons: g
                        })
                    })]
                })
            };
            var kr = e => {
                let {
                    cards: t,
                    operator_id: n
                } = e;
                const i = "string" == typeof t[0].imageUrl,
                    r = "number" == typeof n;
                return (0, W.tZ)(yr, {
                    items: t,
                    renderItem: e => (0, l.az)(Er, { ...e,
                        isShopifyCard: r,
                        key: e.id
                    }),
                    isWithoutImages: !i
                })
            };
            const Ar = {
                name: "el2nz9",
                styles: "display:flex;flex-direction:column;align-items:center;color:#647491;margin:auto;text-align:center;padding-top:24px;p{margin:6px 0;}"
            };
            var Zr = e => {
                let {
                    operator_id: t
                } = e;
                const n = (0, o.v9)((e => e.operators)).find((e => e.id === t));
                return (0, W.BX)("div", {
                    className: "message",
                    css: Ar,
                    children: [(0, W.tZ)(at.Y, {}), (0, W.tZ)("p", {
                        children: n ? (0, W.tZ)(Zt, {
                            value: "operatorMarkedConversationAsSolved",
                            replacements: {
                                "{operatorName}": n.name
                            },
                            fallback: "{operatorName} marked the conversation as solved"
                        }) : (0, W.tZ)(Zt, {
                            value: "conversationWasMarkedAsSolved",
                            fallback: "The conversation was marked as solved"
                        })
                    })]
                })
            };
            const Sr = {
                    name: "pr10xp",
                    styles: "margin-bottom:10px"
                },
                Mr = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return (0, l.iv)({
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "12px 40px",
                        background: "#fff",
                        border: "1px dashed #D3DBE5",
                        borderRadius: "8px",
                        outline: "none",
                        position: "relative",
                        fontWeight: 600,
                        ...e ? {
                            "&:hover": {
                                border: "1px solid #ACB8CB",
                                color: "#647491",
                                fontWeight: 400
                            }
                        } : {},
                        svg: {
                            width: "16px",
                            height: "16px"
                        }
                    }, "", "")
                },
                Tr = {
                    name: "1gzh234",
                    styles: "line-height:20px;font-size:16px"
                },
                Ir = {
                    name: "1ewutym",
                    styles: "color:#647491;font-weight:400"
                },
                _r = {
                    name: "17pdzl8",
                    styles: "position:absolute;right:18px;top:14px"
                },
                Nr = {
                    name: "1lrdqcn",
                    styles: "margin-right:4px;svg{fill:#647491;}"
                };
            var Rr = e => {
                let {
                    content: t,
                    couponCode: n
                } = e;
                const [i, a] = (0, r.useState)(n), s = (0, o.v9)(E.Xf), [d, l] = (0, r.useState)(!1), [u, c] = (0, r.useState)(s !== it.t4.WIX), p = (0, r.useRef)(), f = (0, o.I0)(), h = sr(t);
                return (0, W.BX)("div", {
                    className: "message message-operator coupon-code-message",
                    children: [(0, W.tZ)("div", {
                        css: Sr,
                        dangerouslySetInnerHTML: {
                            __html: h
                        }
                    }), u ? (0, W.BX)("button", {
                        css: [Mr(!0), d && Ir, "", ""],
                        onClick: async () => {
                            try {
                                n && u && (await window.parent.navigator.clipboard.writeText(n), f((0, x.SnQ)(nt.M.couponCodeCopyClicked)), l(!0), p.current && clearTimeout(p.current), p.current = setTimeout((() => {
                                    l(!1)
                                }), 1500))
                            } catch (e) {
                                c(!1), a(n)
                            }
                        },
                        type: "button",
                        onMouseEnter: () => {
                            u && a((0, v.dW)("clickToCopy", null, "Click to copy"))
                        },
                        onMouseLeave: () => {
                            u && a(n)
                        },
                        children: [d && (0, W.tZ)("span", {
                            css: Nr,
                            children: (0, W.tZ)(at.qB, {})
                        }), (0, W.tZ)("span", {
                            css: Tr,
                            children: d ? (0, v.dW)("copied", null, "Copied") : i
                        }), !d && (0, W.tZ)("span", {
                            css: _r,
                            children: (0, W.tZ)(at.TI, {})
                        })]
                    }) : (0, W.tZ)("span", {
                        css: Mr(),
                        children: (0, W.tZ)("span", {
                            css: Tr,
                            children: i
                        })
                    })]
                })
            };
            let Or = function(e) {
                return e.VALID = "valid", e.INVALID = "invalid", e.EMPTY = "empty", e
            }({});
            const Dr = e => {
                    switch (e) {
                        case it.EI.FILE:
                            return [];
                        case it.EI.CHECKBOX:
                            return !1;
                        default:
                            return ""
                    }
                },
                Lr = /(?:\+?\d+[\s-]?)?(?:\(\d+\))?(?:\s?\/\s?)?(?:[-.\s]?\d{1,5}){5,}.*\d/,
                Br = /[^?!@#$%^&*()_+-=;':"|,./<>`~\d]+/,
                Fr = /((?:https?:\/\/)?(?:www\.)?[a-z-.\d]+\.[a-z]{2,13}(?:(?:\?|\/)(?:\S+)?)?)(?:[.!?,].*)?$/i;
            var Pr = e => {
                let {
                    form: t,
                    messageId: n
                } = e;
                const i = (0, o.I0)(),
                    a = (0, o.v9)((e => (0, E.f)(e, n))),
                    s = (0, o.v9)(E.Ey),
                    d = a ? .type,
                    l = s ? .id === n,
                    [u, c] = (0, r.useState)(t.reduce(((e, t) => ({ ...e,
                        [t.id]: Dr(t.type)
                    })), {})),
                    [f, h] = (0, r.useState)(!1),
                    m = (0, r.useCallback)((() => {
                        h(!0)
                    }), []),
                    g = (0, r.useCallback)((() => {
                        h(!1)
                    }), []),
                    [b, v] = (0, r.useState)(!1),
                    [y, w] = (0, r.useState)(t.reduce(((e, t) => ({ ...e,
                        [t.id]: Or.VALID
                    })), {})),
                    C = (0, r.useMemo)((() => Object.values(y).some((e => e !== Or.VALID))), [y]),
                    k = (0, r.useRef)(null),
                    A = (0, r.useRef)(null),
                    Z = (0, r.useRef)(),
                    S = (0, r.useRef)(!1),
                    M = (0, r.useCallback)((e => {
                        w((t => ({ ...t,
                            [e]: Or.VALID
                        })))
                    }), []),
                    T = (0, r.useCallback)(((e, t) => {
                        c((n => ({ ...n,
                            [e]: t
                        }))), M(e)
                    }), [M]),
                    I = (0, r.useCallback)(((e, t) => {
                        c((n => {
                            const i = n[e];
                            return Array.isArray(i) ? { ...n,
                                [e]: [...i, t]
                            } : n
                        })), M(e)
                    }), [M]),
                    _ = (0, r.useCallback)(((e, t, n) => {
                        c((i => {
                            const r = i[e];
                            return Array.isArray(r) ? { ...i,
                                [e]: r.filter((e => e[t] !== n))
                            } : i
                        }))
                    }), []),
                    N = (0, r.useCallback)((() => {
                        const e = { ...y
                        };
                        let n = !1;
                        return t.forEach((t => {
                            const i = u[t.id];
                            switch (typeof i) {
                                case "boolean":
                                    t.required && !i && (n = !0, e[t.id] = Or.EMPTY);
                                    break;
                                case "object":
                                    t.type === it.EI.FILE && t.required && !i[0] ? .url && (n = !0, e[t.id] = Or.EMPTY);
                                    break;
                                default:
                                    t.required && "" === i ? (n = !0, e[t.id] = Or.EMPTY) : "" === i || (e => {
                                        switch (e) {
                                            case it.EI.PHONE:
                                                return e => Lr.test(e);
                                            case it.EI.NAME:
                                                return e => Br.test(e);
                                            case it.EI.URL:
                                                return e => Fr.test(e);
                                            case it.EI.EMAIL:
                                                return e => (0, p.vV)(e);
                                            default:
                                                return () => !0
                                        }
                                    })(t.type)(i) || (n = !0, e[t.id] = Or.INVALID)
                            }
                        })), {
                            formErrors: e,
                            isFormInvalid: n
                        }
                    }), [t, y, u]),
                    R = (0, r.useCallback)((e => {
                        if (e.preventDefault(), f) return !1;
                        const {
                            formErrors: n,
                            isFormInvalid: r
                        } = N();
                        return r ? w(n) : (v(!0), i((0, x.R2_)({
                            formResponse: t.map((e => ({
                                name: e.name,
                                id: e.id,
                                value: u[e.id]
                            })))
                        }))), !0
                    }), [i, t, u, f, N]),
                    O = (0, r.useCallback)((e => {
                        c(t.reduce(((t, n) => {
                            const i = e.find((e => e.id === n.id)) ? .value;
                            return { ...t,
                                [n.id]: n.type === it.EI.CHECKBOX ? Boolean(i) : i ? ? ""
                            }
                        }), {}))
                    }), [t]);
                return (0, r.useEffect)((() => ("function" == typeof A.current ? .scrollIntoView && l && (Z.current = setTimeout((() => {
                    try {
                        A.current ? .scrollIntoView({
                            behavior: "smooth",
                            block: "nearest"
                        })
                    } catch (e) {
                        A.current ? .scrollIntoView()
                    }
                }), 150)), () => {
                    Z.current && clearTimeout(Z.current)
                })), [l]), (0, r.useEffect)((() => {
                    l || d !== it.Cs.FORM_RESPONSE || !a ? .formResponse || S.current || (O(a.formResponse), S.current = !0)
                }), [l, a ? .formResponse, d, O]), {
                    formSubmitting: b,
                    formValidityState: y,
                    formValues: u,
                    handleChange: T,
                    handleSubmit: R,
                    formRef: k,
                    titleRef: A,
                    hasErrors: C,
                    enableFormSubmission: g,
                    disableFormSubmission: m,
                    isSubmissionDisabled: f,
                    addItemToArrayFormField: I,
                    removeItemFromArrayFormField: _,
                    disabled: d !== it.Cs.FORM_RESPONSE && !l,
                    sent: d === it.Cs.FORM_RESPONSE && !l
                }
            };
            const jr = (0, l.iv)("\n    margin-bottom: 12px;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n", "", ""),
                zr = (0, l.iv)("\n    position: absolute;\n    right: 10px;\n    top: 4px;\n    svg {\n      fill: #25833E;\n      width: 20px;\n    }\n", "", ""),
                Ur = (0, l.iv)("\n    color: #E81332;\n    font-size: 12px;\n    padding-left: 12px;\n    line-height: 16px;\n    display: inline-block;\n    padding-top: 4px;\n", "", ""),
                Hr = (e, t) => {
                    switch (t) {
                        case Or.EMPTY:
                            return (0, W.tZ)("span", {
                                css: Ur,
                                children: (0, W.tZ)(Zt, {
                                    value: "fieldCannotBeEmpty",
                                    fallback: "Field cannot be empty"
                                })
                            });
                        case Or.INVALID:
                            return (e => {
                                let t = null;
                                switch (e) {
                                    case it.EI.CHECKBOX:
                                        t = {
                                            value: "fieldRequired",
                                            fallback: "This field is required"
                                        };
                                        break;
                                    case it.EI.EMAIL:
                                        t = {
                                            value: "wrongEmailFormat",
                                            fallback: "That email doesn't look quite right"
                                        };
                                        break;
                                    case it.EI.NAME:
                                        t = {
                                            value: "wrongNameFormat",
                                            fallback: "That name doesn't look quite right"
                                        };
                                        break;
                                    case it.EI.NUMBER:
                                        t = {
                                            value: "wrongNumberFormat",
                                            fallback: "That number doesn't look quite right"
                                        };
                                        break;
                                    case it.EI.URL:
                                        t = {
                                            value: "wrongUrlFormat",
                                            fallback: "That URL doesn't look quite right"
                                        };
                                        break;
                                    case it.EI.PHONE:
                                        t = {
                                            value: "wrongPhoneFormat",
                                            fallback: "That phone number doesn't look quite right"
                                        };
                                        break;
                                    case it.EI.SELECT:
                                        t = {
                                            value: "chooseOneOfTheOptions",
                                            fallback: "Choose one of the options"
                                        };
                                        break;
                                    case it.EI.TEXT:
                                    case it.EI.LONG_TEXT:
                                    case it.EI.MULTISELECT:
                                    default:
                                        return null
                                }
                                return (0, W.tZ)("span", {
                                    css: Ur,
                                    children: (0, W.tZ)(Zt, { ...t
                                    })
                                })
                            })(e);
                        case Or.VALID:
                        default:
                            return null
                    }
                };
            var Wr = e => {
                    let {
                        shouldDisplaySuccessIcon: t,
                        validity: n,
                        type: i,
                        children: r
                    } = e;
                    return (0, W.BX)("div", {
                        css: jr,
                        children: [r, t && (0, W.tZ)("div", {
                            css: zr,
                            children: (0, W.tZ)(at.qB, {})
                        }), Hr(i, n)]
                    })
                },
                $r = n(729),
                Vr = n.n($r);
            const Xr = () => {
                const e = (0, o.v9)(E.U1);
                return (0, p.w8)(e)
            };
            n(3508), n(8054), n(2263);
            var qr = e => {
                let {
                    file: t,
                    publicKey: n,
                    visitorID: i,
                    onProgressUpdate: r
                } = e;
                return new Promise(((e, a) => {
                    const o = new URL("/upload-file", "https://uploads.tidio.com");
                    o.searchParams.set("project_public_key", n), o.searchParams.set("visitor_id", i);
                    const s = new FormData;
                    s.append("upload", t);
                    const d = new XMLHttpRequest;
                    d.open("POST", o.toString(), !0), d.addEventListener("load", (() => {
                        try {
                            const {
                                status: t
                            } = d, n = JSON.parse(d.responseText);
                            201 === t && (e => {
                                if (!e || "object" != typeof e) throw new Error("isUploadFileResponse: value is not an object");
                                const {
                                    meta: t,
                                    type: n,
                                    url: i
                                } = e;
                                if (!t || "object" != typeof t) throw new Error("isUploadFileResponse: meta is not an object");
                                const {
                                    name: r,
                                    extension: a
                                } = t;
                                if ("string" != typeof r) throw new Error("isUploadFileResponse: meta.name is not a string");
                                if ("string" != typeof a) throw new Error("isUploadFileResponse: meta.extension is not a string");
                                if ("string" != typeof n) throw new Error("isUploadFileResponse: type is not a string");
                                if ("string" != typeof i) throw new Error("isUploadFileResponse: url is not a string");
                                return !0
                            })(n) ? e({
                                status: t,
                                isError: !1,
                                data: n
                            }) : e({
                                status: t,
                                isError: !0,
                                data: d.responseText
                            })
                        } catch (e) {
                            a(e)
                        }
                    })), d.addEventListener("error", (() => {
                        e({
                            status: d.status,
                            isError: !0,
                            data: d.responseText
                        })
                    })), d.addEventListener("progress", (e => {
                        if (e.lengthComputable) {
                            const t = Math.round(100 * e.loaded / e.total);
                            r(t)
                        }
                    })), d.send(s)
                }))
            };
            let Yr = function(e) {
                return e.FILE_TOO_BIG = "fileTooBig", e.EXTENSION_NOT_SUPPORTED = "extensionNotSupported", e.GENERIC_UPLOAD_ERROR = "genericUploadError", e
            }({});
            var Gr = e => {
                let {
                    id: t,
                    sender: n,
                    file: i,
                    handleSuccess: a,
                    handleError: s,
                    customClassName: d,
                    hideProgressInfo: l
                } = e;
                const u = (0, o.I0)(),
                    c = (0, o.v9)(E.iB),
                    f = (0, o.v9)(E.OP),
                    h = Xr(),
                    [m, b] = (0, r.useState)(0),
                    [y, w] = (0, r.useState)("init"),
                    C = (0, r.useCallback)((e => {
                        if (t) {
                            u((0, x.Gdg)(t));
                            const n = (e => {
                                switch (e) {
                                    case Yr.FILE_TOO_BIG:
                                        return (0, v.dW)("fileToBigAlert", null, "File exceed 10MB limit.");
                                    case Yr.EXTENSION_NOT_SUPPORTED:
                                        return (0, v.dW)("extensionNotSupportedAlert", null, "File extension not supported.");
                                    case Yr.GENERIC_UPLOAD_ERROR:
                                    default:
                                        return (0, v.dW)("genericFileUploadAlert", null, "Something went wrong when trying to upload your file.")
                                }
                            })(e);
                            u((0, x.wp$)(n))
                        }
                    }), [u, t]),
                    k = (0, r.useCallback)((e => {
                        let {
                            fileExtension: n
                        } = e;
                        return new Promise(((e, r) => {
                            const o = new FileReader;
                            o.onload = () => {
                                "string" != typeof o.result ? r(new Error("UploadingFileMessage - preview: error while reading file")) : (t && u((0, x.Y57)(t, (0, Ft.SA)(n || "file"), o.result, i.name, n, o.result)), a ? .({
                                    url: o.result,
                                    meta: {
                                        name: i.name,
                                        extension: n
                                    }
                                }), e())
                            }, o.onerror = e => r(e), o.readAsDataURL(i)
                        }))
                    }), [i, t, a, u]),
                    A = (0, r.useCallback)((async () => {
                        if (!c) throw new Error("UploadingFileMessage: missing publicKey");
                        if (!f) throw new Error("UploadingFileMessage: missing visitorId");
                        const e = await qr({
                            file: i,
                            publicKey: c,
                            visitorID: f,
                            onProgressUpdate: e => b(e)
                        });
                        if (b(100), e.isError) switch (e.status) {
                            case 0:
                                throw new Error(Yr.GENERIC_UPLOAD_ERROR);
                            case 413:
                                throw new Error(Yr.FILE_TOO_BIG);
                            case 422:
                                throw new Error(Yr.EXTENSION_NOT_SUPPORTED);
                            default:
                                throw (0, g.G)(`UploadingFileMessage: request failed with status ${e.status}`, {
                                    response: e.data
                                }), new Error(Yr.GENERIC_UPLOAD_ERROR)
                        }
                        t && u((0, x.Y57)(t, (0, Ft.SA)(e.data.meta.extension), e.data.url, i.name, e.data.meta.extension, e.data.thumb ? .medium || "")), a ? .({ ...e.data,
                            meta: { ...e.data.meta,
                                name: i.name
                            }
                        })
                    }), [c, f, i, t, a, u]),
                    Z = (0, r.useCallback)((async () => {
                        try {
                            if (i.size / 1024 / 1024 > 10) throw new Error(Yr.FILE_TOO_BIG);
                            const e = (0, Ft.mD)(i);
                            if (!e || -1 === Ft.EA.indexOf(e)) throw new Error(Yr.EXTENSION_NOT_SUPPORTED);
                            (0, p.$U)() ? await k({
                                fileExtension: e
                            }): await A()
                        } catch (t) {
                            t instanceof Error && (e = t.message, Object.values(Yr).includes(e)) ? (C(t.message), s ? .(t.message)) : ((0, g.G)(t), C(Yr.GENERIC_UPLOAD_ERROR), s ? .(Yr.GENERIC_UPLOAD_ERROR))
                        } finally {
                            w("done")
                        }
                        var e
                    }), [i, s, k, A, C]);
                return (0, r.useEffect)((() => {
                    "init" === y && (w("loading"), Z())
                }), [y, Z]), "loading" !== y ? null : (0, W.tZ)("div", {
                    className: d || `message message-upload message-${n}`,
                    role: "progressbar",
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    "aria-valuenow": m,
                    style: d ? {} : {
                        background: `linear-gradient(135deg, ${h[0]}, ${h[1]})`,
                        color: h[2]
                    },
                    children: (0, W.BX)("span", {
                        children: [(0, W.tZ)(at.aN, {}), !l && `${(0,v.dW)("uploaded",null,"Uploaded")} ${m}%`]
                    })
                })
            };
            const Qr = {
                    name: "cn3xcj",
                    styles: "margin-bottom:12px"
                },
                Kr = (e, t) => (0, l.iv)({
                    border: "2px dashed " + (e ? "#E81332" : "#D3DBE5"),
                    background: "#fff",
                    padding: "22px 24px",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    position: "relative",
                    opacity: t ? .5 : 1,
                    "&:focus": {
                        outline: "none"
                    },
                    "& svg": {
                        flexShrink: 0,
                        fill: "#8796AF"
                    },
                    "& .message-upload svg": {
                        fill: "#0566FF",
                        stroke: "#0566FF"
                    }
                }, "", ""),
                Jr = {
                    name: "1ojnsow",
                    styles: "display:flex;flex-direction:column;min-width:0"
                },
                ea = {
                    name: "1kd3tv0",
                    styles: "color:#647491"
                },
                ta = {
                    name: "m43fa",
                    styles: "color:#0566FF"
                },
                na = e => {
                    switch (e) {
                        case Yr.FILE_TOO_BIG:
                            return (0, v.dW)("fileToBigAlert", null, "File exceed 10MB limit.");
                        case Yr.EXTENSION_NOT_SUPPORTED:
                            return (0, v.dW)("fileFormatNotSupported", {
                                "{formatted_extensions}": `${Ft.EA.join(", ")}.`
                            }, "This file format is not supported. You can upload: {formatted_extensions}");
                        case Yr.GENERIC_UPLOAD_ERROR:
                        default:
                            return (0, v.dW)("genericFileUploadAlert", null, "Something went wrong when trying to upload your file.")
                    }
                };
            var ia = e => {
                let {
                    onFileAdd: t,
                    fieldName: n,
                    error: i,
                    requiredError: r,
                    maxFiles: a,
                    disabled: o
                } = e;
                const {
                    getRootProps: s,
                    getInputProps: d,
                    isDragActive: u
                } = Je({
                    multiple: 1 !== a,
                    onDropAccepted: e => {
                        t(e)
                    },
                    maxFiles: a,
                    disabled: o
                });
                return (0, W.BX)("div", {
                    css: Qr,
                    children: [(0, W.BX)("div", { ...s(),
                        css: Kr(Boolean(i), o),
                        children: [(0, W.tZ)("input", { ...d(),
                            "data-testid": "file-message-upload-input"
                        }), (0, W.BX)("div", {
                            css: (c = u, (0, l.iv)({
                                borderRadius: "6px",
                                padding: "22px 24px",
                                display: "flex",
                                alignItems: "center",
                                position: "absolute",
                                top: "-2px",
                                left: "-2px",
                                right: "-2px",
                                bottom: "-2px",
                                border: "2px solid #0566FF",
                                gap: "12px",
                                background: "#DCE9FF",
                                opacity: c ? 1 : 0,
                                transition: "opacity .2s",
                                "& svg": {
                                    flexShrink: 0,
                                    fill: "#0566FF"
                                }
                            }, "", "")),
                            children: [(0, W.tZ)(at.rG, {}), (0, W.tZ)("span", {
                                children: (0, v.dW)("dragAndDropInfo", null, "Drop here to attach")
                            })]
                        }), (0, W.tZ)(at.rG, {}), (0, W.BX)("div", {
                            css: Jr,
                            children: [(0, W.tZ)("span", {
                                children: n
                            }), (0, W.BX)("span", {
                                css: ea,
                                children: [(0, v.dW)("dragAndDrop", null, "Drag & drop here or "), (0, W.tZ)("span", {
                                    css: ta,
                                    children: (0, v.dW)("browse", null, "browse")
                                })]
                            })]
                        })]
                    }), r ? (0, W.tZ)("span", {
                        css: Ur,
                        children: (0, v.dW)("fileIsRequired", null, "File is required")
                    }) : i && (0, W.tZ)("span", {
                        css: Ur,
                        children: na(i)
                    })]
                });
                var c
            };
            const ra = {
                name: "dcos8h",
                styles: "background:#fff;border-radius:6px;position:relative;height:44px;display:flex;justify-content:center;margin-bottom:12px;align-items:center;&&& svg{position:static;height:auto;& .path{stroke:#0566FF;}}"
            };
            var aa = e => {
                let {
                    filesToUpload: t,
                    handleUploadedFile: n,
                    handleUploadFinished: i,
                    onUploadError: a
                } = e;
                const [o, s] = (0, r.useState)([]);
                return (0, r.useEffect)((() => {
                    o.length === t.length && i()
                }), [t.length, i, o.length]), t.map((e => {
                    let {
                        fileToUpload: t,
                        id: i
                    } = e;
                    return o.some((e => e === i)) ? null : (0, W.tZ)("div", {
                        css: ra,
                        children: (0, W.tZ)(Gr, {
                            file: t,
                            sender: it.By.VISITOR,
                            handleSuccess: e => ((e, t) => {
                                n({
                                    name: t.meta.name,
                                    extension: t.meta.extension,
                                    url: t.url
                                }), s((t => [...t, e]))
                            })(i, e),
                            handleError: e => ((e, t) => {
                                s((t => [...t, e])), a(t)
                            })(i, e),
                            customClassName: "form-file-uploading",
                            hideProgressInfo: !0
                        })
                    }, i)
                }))
            };
            class oa extends r.Component {
                render() {
                    switch (this.props.extension) {
                        case "doc":
                        case "docx":
                            return (0, W.tZ)(at.QW, {});
                        case "flv":
                            return (0, W.tZ)(at.xS, {});
                        case "mpg":
                        case "mp4":
                        case "avi":
                            return (0, W.tZ)(at.cP, {});
                        case "pdf":
                            return (0, W.tZ)(at.Q3, {});
                        case "txt":
                        case "rtf":
                            return (0, W.tZ)(at.H_, {});
                        case "wma":
                        case "mp3":
                            return (0, W.tZ)(at.Wf, {});
                        case "xls":
                        case "xlsx":
                        case "csv":
                            return (0, W.tZ)(at._E, {});
                        case "png":
                        case "jpg":
                        case "jpeg":
                        case "gif":
                            return (0, W.tZ)(at.Ei, {});
                        default:
                            return null
                    }
                }
            }
            var sa = oa;
            const da = {
                    name: "z4uwag",
                    styles: "position:absolute;display:block;opacity:0;background:#fff;transition:all .2s;padding:6px 8px;box-shadow:0px 3px 8px rgba(0, 18, 46, 0.12);border-radius:4px;top:100%;left:50%;transform:translateX(-50%) translateY(-2px);pointer-events:none;z-index:1"
                },
                la = {
                    name: "1240cvo",
                    styles: "&&&{opacity:0;transition:opacity .2s;display:flex;align-items:center;margin:0 0 0 auto;position:relative;flex-shrink:0;&:hover span{opacity:1;transform:translateX(-50%) translateY(2px);}}"
                },
                ua = e => (0, l.iv)({
                    marginBottom: "12px",
                    gap: "12px",
                    background: "#fff",
                    padding: e ? "8px 40px 8px 12px" : "8px 12px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "4px",
                    "&&&:hover button": {
                        opacity: 1
                    },
                    "& svg": {
                        flexShrink: 0
                    }
                }, "", ""),
                ca = {
                    name: "sqm42b",
                    styles: "text-overflow:ellipsis;white-space:nowrap;overflow:hidden"
                };
            var pa = e => {
                let {
                    name: t,
                    extension: n,
                    onFileRemove: i,
                    url: r,
                    disabled: a,
                    sent: o
                } = e;
                return (0, W.BX)("div", {
                    css: ua(o),
                    className: "input-group",
                    children: [(0, W.tZ)(sa, {
                        extension: n
                    }), (0, W.tZ)("span", {
                        css: ca,
                        children: t
                    }), !a && (0, W.BX)("button", {
                        css: la,
                        type: "button",
                        onClick: () => i(r),
                        className: "material-icons ripple ",
                        children: [(0, W.tZ)(at.pJ, {}), (0, W.tZ)("span", {
                            css: da,
                            children: (0, v.dW)("delete", null, "Delete")
                        })]
                    }), o && (0, W.tZ)("div", {
                        css: zr,
                        children: (0, W.tZ)(at.qB, {})
                    })]
                })
            };
            var fa = e => {
                let {
                    fileFieldValue: t,
                    disabled: n,
                    addFormFileMessageValue: i,
                    removeFormFileMessageValue: a,
                    fieldName: o,
                    requiredError: s,
                    disableFormSubmission: d,
                    enableFormSubmission: l,
                    sent: u,
                    contactProperty: c
                } = e;
                const [p, f] = (0, r.useState)([]), [h, m] = (0, r.useState)(null), g = (0, r.useCallback)((e => {
                    m(e)
                }), []), b = null === c ? 10 : 1, v = (0, r.useCallback)((() => {
                    l(), f([])
                }), [l]), y = (0, r.useMemo)((() => t.map((e => (0, W.tZ)(pa, {
                    name: e.name,
                    url: e.url,
                    extension: e.extension,
                    onFileRemove: a,
                    disabled: n,
                    sent: u
                }, e.url)))), [n, t, a, u]);
                return (0, W.BX)(W.HY, {
                    children: [y, p.length > 0 && (0, W.tZ)(aa, {
                        filesToUpload: p,
                        handleUploadedFile: i,
                        onUploadError: g,
                        handleUploadFinished: v
                    }), !n && t.length < b && (0, W.tZ)(ia, {
                        onFileAdd: e => {
                            m(null), f(e.map((e => ({
                                id: Vr()(),
                                fileToUpload: e
                            })))), d()
                        },
                        fieldName: o,
                        error: h,
                        requiredError: s,
                        maxFiles: b - t.length,
                        disabled: Boolean(p.length)
                    })]
                })
            };
            const ha = (0, l.iv)("\n    position: relative;\n", "", ""),
                ma = (e, t) => (0, l.iv)(`\n    width: 100%;\n    appearance: none;\n    font-size: 15px;\n    line-height: 19px;\n    padding: 9px 35px 9px 12px;\n    border: none;\n    border-radius: 6px;\n    background-color: white;\n    text-overflow: ellipsis;\n    color: #080F1A;\n\n    :disabled {\n        opacity: 1;\n    }\n\n    ${e?"\n            color #647491;\n            ":""}\n    ${t?"\n            outline: 1px solid #E81332;\n            :focus {\n                outline: 1px solid #E81332;\n            }\n            ":""}\n`, "", ""),
                ga = (0, l.iv)("\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    right: 8px;\n    pointer-events: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    svg {\n        fill: #080F1A;\n    },\n", "", "");
            var ba = e => {
                let {
                    placeholder: t,
                    onChange: n,
                    value: i,
                    options: r,
                    hasError: a = !1,
                    disabled: o
                } = e;
                return (0, W.BX)("div", {
                    css: [ha, "", ""],
                    children: [(0, W.BX)("select", {
                        css: ma(!i, a),
                        value: i,
                        onChange: e => n(e.target.value),
                        disabled: o,
                        children: [(0, W.tZ)("option", {
                            value: "",
                            selected: !0,
                            disabled: !0,
                            hidden: !0,
                            children: t
                        }), r.map((e => (0, W.tZ)("option", {
                            value: e.value,
                            children: e.value
                        }, e.value)))]
                    }), !o && (0, W.tZ)("div", {
                        css: ga,
                        children: (0, W.tZ)(at.K5, {})
                    })]
                })
            };
            const va = (e, t) => (0, l.iv)(`\n    padding: ${t?"8px 40px 8px 12px":"8px 12px"};\n    border-radius: 6px;\n    font-size: 15px;\n    border: none;\n    color: #080F1A;\n    text-overflow: ellipsis;\n    &::placeholder {\n        color: #647491;\n    }\n    &:disabled {\n        background: #fff;\n    }\n    ${e?"\n            outline: 1px solid #E81332;\n            :focus {\n                outline: 1px solid #E81332;\n            }":""}\n`, "", ""),
                ya = (0, l.iv)("\n    color: #E81332;\n    font-size: 12px;\n    line-height: 16px;\n    display: inline-block;\n", "", ""),
                wa = (0, l.iv)("\n    margin-bottom: 12px;\n    display: block;\n    \n    margin-top: -30px;\n    padding-top: 30px;\n", "", ""),
                xa = (0, l.iv)("\n    margin-bottom: 0;\n", "", ""),
                Ca = e => (0, l.iv)(`\n    border: 1px solid #D3DBE5;\n    padding: 2px 14px;\n    height: 34px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 14px;\n    border-radius: 24px;\n    flex-shrink: 0;\n    &:disabled {\n        color: #ACB8CB;\n    }\n    svg {\n        margin-right: 7px;\n        fill: #ACB8CB;\n        height: 19px;\n        width: auto;\n        margin-left: -2px;\n    }\n    .loader-icon.circular {\n        position: static;\n        circle {\n            stroke: ${e}\n        }\n    }\n`, "", ""),
                Ea = (0, l.iv)("\n    display: flex;\n    justify-content: space-between;\n    gap: 30px;\n    align-items: center;\n", "", ""),
                ka = (0, l.iv)("\n    display: flex;\n    align-items: center;\n    font-size: 14px;\n    color: #080F1A;\n    position: relative;\n    svg {\n        display: none;\n    }\n    input:checked + svg {\n        display: block;\n        position: absolute;\n        width: 14px;\n        left: 2px;\n    }\n", "", ""),
                Aa = (e, t) => (0, l.iv)(`\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 4px;\n    border: 2px solid #647491;\n    margin: 0 12px 0 0;\n    flex-shrink: 0;\n    &:focus, &:active {\n        border: 2px solid #647491;\n        box-shadow: 0 0 2px 0 ${e};\n    }\n    &:checked {\n        border-color: ${e};\n        background-color: ${e};\n    }\n    ${t?"\n            border-color: #E81332;\n            ":""}\n`, "", "");
            var Za = e => {
                let {
                    form: t,
                    content: n,
                    id: i
                } = e;
                const {
                    formValues: a,
                    formSubmitting: s,
                    formValidityState: d,
                    formRef: l,
                    titleRef: u,
                    handleSubmit: c,
                    handleChange: p,
                    hasErrors: f,
                    sent: h,
                    disabled: m,
                    enableFormSubmission: g,
                    disableFormSubmission: b,
                    isSubmissionDisabled: v,
                    removeItemFromArrayFormField: y,
                    addItemToArrayFormField: w
                } = Pr({
                    form: t,
                    messageId: i
                }), x = (0, o.v9)(E.U1), C = (0, r.useCallback)((e => {
                    const t = d[e.id] !== Or.VALID,
                        n = a[e.id],
                        i = {
                            placeholder: e.name,
                            css: va(t, h),
                            disabled: m,
                            readOnly: h,
                            value: String(n),
                            onChange: t => p(e.id, t.target.value)
                        };
                    let r = null;
                    switch (e.type) {
                        case it.EI.CHECKBOX:
                            r = (0, W.BX)("label", {
                                css: ka,
                                children: [(0, W.tZ)("input", {
                                    css: Aa(x[3], t),
                                    disabled: h || m,
                                    checked: Boolean(n),
                                    type: "checkbox",
                                    onChange: t => p(e.id, t.target.checked)
                                }), (0, W.tZ)(at.qB, {}), e.name]
                            });
                            break;
                        case it.EI.EMAIL:
                            r = (0, W.tZ)("input", { ...i,
                                type: "email"
                            });
                            break;
                        case it.EI.NAME:
                            r = (0, W.tZ)("input", { ...i,
                                type: "text"
                            });
                            break;
                        case it.EI.LONG_TEXT:
                            r = (0, W.tZ)("textarea", { ...i,
                                onChange: t => p(e.id, t.target.value)
                            });
                            break;
                        case it.EI.TEXT:
                            r = (0, W.tZ)("input", { ...i,
                                type: "text"
                            });
                            break;
                        case it.EI.NUMBER:
                            r = (0, W.tZ)("input", { ...i,
                                type: "number"
                            });
                            break;
                        case it.EI.URL:
                            r = (0, W.tZ)("input", { ...i,
                                type: "text"
                            });
                            break;
                        case it.EI.PHONE:
                            r = (0, W.tZ)("input", { ...i,
                                type: "tel"
                            });
                            break;
                        case it.EI.SELECT:
                            r = (0, W.tZ)(ba, {
                                placeholder: e.name,
                                disabled: h || m,
                                value: String(n),
                                onChange: t => p(e.id, t),
                                hasError: t,
                                options: e.choices ? .map((e => ({
                                    value: e.name
                                }))) || []
                            });
                            break;
                        case it.EI.FILE:
                            return "object" == typeof n ? (0, W.tZ)(fa, {
                                fileFieldValue: n,
                                disabled: h || m,
                                addFormFileMessageValue: t => w(e.id, t),
                                removeFormFileMessageValue: t => {
                                    y(e.id, "url", t)
                                },
                                enableFormSubmission: g,
                                disableFormSubmission: b,
                                requiredError: d[e.id] === Or.EMPTY,
                                fieldName: e.name,
                                sent: h,
                                contactProperty: e.contact_property
                            }, e.id) : null;
                        case it.EI.MULTISELECT:
                        default:
                            return null
                    }
                    return (0, W.tZ)(Wr, {
                        type: e.type,
                        validity: d[e.id],
                        shouldDisplaySuccessIcon: e.type !== it.EI.CHECKBOX && h,
                        children: r
                    }, e.id)
                }), [d, a, h, m, p, x, g, b, w, y]);
                return (0, W.BX)("div", {
                    className: "message message-operator message-form",
                    children: [(0, W.tZ)("span", {
                        css: wa,
                        ref: u,
                        children: n
                    }), (0, W.BX)("form", {
                        onSubmit: c,
                        ref: l,
                        noValidate: !0,
                        css: xa,
                        children: [t.map(C), (0, W.BX)("div", {
                            css: Ea,
                            children: [(0, W.tZ)("span", {
                                css: ya,
                                children: f && (0, W.tZ)(Zt, {
                                    value: "fieldsNotFilledCorrectly",
                                    fallback: "Some fields are not filled out correctly. Please check."
                                })
                            }), h ? (0, W.BX)("button", {
                                css: Ca(x[3]),
                                disabled: !0,
                                type: "submit",
                                children: [(0, W.tZ)(at.qB, {}), (0, W.tZ)(Zt, {
                                    value: "sent",
                                    fallback: "Sent"
                                })]
                            }) : (0, W.tZ)("button", {
                                css: Ca(x[3]),
                                disabled: f || s || m || v,
                                type: "submit",
                                children: s ? (0, W.tZ)(at.aN, {}) : (0, W.tZ)(Zt, {
                                    value: "submit",
                                    fallback: "Submit"
                                })
                            })]
                        })]
                    })]
                })
            };
            const Sa = (0, l.iv)("\n   padding: 0px;\n", "", ""),
                Ma = (0, l.iv)("\n   padding: 10px 16px;\n", "", ""),
                Ta = (0, l.iv)("\n   font-weight: 600;\n   font-size: 16px;\n", "", ""),
                Ia = (0, l.iv)("\n   font-size: 14px;\n   line-height: 15px;\n   color: #00122E;\n   margin-top: 6px;\n", "", ""),
                _a = (0, l.iv)("\n   font-size: 14px;\n   line-height: 18px;\n   letter-spacing: -0.15px;\n   color: #00122E;\n   opacity: 0.5;\n   margin-top: 4px;\n", "", "");
            var Na = e => {
                let {
                    title: t,
                    subtitle: n,
                    buttons: i
                } = e;
                const r = (0, o.I0)();
                return (0, W.BX)("div", {
                    className: "message message-operator",
                    css: Sa,
                    children: [(0, W.BX)("div", {
                        css: Ma,
                        children: [(0, W.tZ)("p", {
                            css: Ta,
                            children: t
                        }), (0, W.tZ)("p", {
                            css: Ia,
                            children: n
                        }), (0, W.tZ)("p", {
                            css: _a,
                            children: (() => {
                                try {
                                    return new URL(i[0] ? .url || "").hostname.replace("www.", "")
                                } catch {
                                    return ""
                                }
                            })()
                        })]
                    }), i.map(((e, t) => {
                        return (0, W.tZ)("button", {
                            type: "button",
                            css: (n = i.length === t + 1, (0, l.iv)(`\n   font-size: 16px;\n   line-height: 20px;\n   color: #007DFC;\n   letter-spacing: -0.17px;\n   background-color: white;\n   width: 100%;\n   padding: 8px 16px;\n   border: 1px solid #E9ECF0;\n   border-top: none;\n   ${n?"\n            border-bottom-left-radius: 20px;\n            border-bottom-right-radius: 20px;\n            }":""}\n`, "", "")),
                            onClick: () => (e => {
                                "url" === e.type && e.url && (r((0, x.xZ_)(e.url)), r((0, x.eBK)(e.title, e.payload)), r((0, x.SnQ)(nt.M.iframeModalButtonClicked)))
                            })(e),
                            children: e.title
                        }, e.title);
                        var n
                    }))]
                })
            };
            const Ra = r.lazy((() => n.e(324).then(n.bind(n, 8682))));
            var Oa = e => (0, W.tZ)(r.Suspense, {
                fallback: null,
                children: (0, W.tZ)(Ra, {
                    questionMessageId: e.questionMessageId
                })
            });
            var Da = e => {
                let {
                    content: t,
                    operator_id: n,
                    time_sent: i
                } = e;
                const [a, o] = (0, r.useState)(!1), s = (0, r.useRef)(null), d = (0, r.useRef)(null);
                (0, r.useEffect)((() => {
                    or(s, d)
                }), []);
                const l = sr(t);
                return (0, W.BX)("div", {
                    className: "message message-operator " + (a ? "timestamp-visible" : ""),
                    onClick: () => {
                        o((e => !e))
                    },
                    ref: d,
                    children: [(0, W.tZ)("span", {
                        className: "message-content",
                        dangerouslySetInnerHTML: {
                            __html: l
                        },
                        ref: s
                    }), (0, W.tZ)(kn, { in: a,
                        children: (0, W.tZ)(rr, {
                            time: i,
                            operatorId: n
                        })
                    })]
                })
            };
            var La = e => {
                let {
                    preChatFields: t
                } = e;
                const n = (0, o.v9)((e => e.visitor));
                return (0, W.BX)("div", {
                    className: "message message-operator pre-chat",
                    children: [(0, W.tZ)(Zt, {
                        value: "preformMessage",
                        emojify: !0,
                        linkify: !0
                    }), t.map((e => (0, W.tZ)(Gt, {
                        type: e.type,
                        placeholder: e.placeholder,
                        value: n[e.type],
                        disabled: !0
                    }, e.type)))]
                })
            };
            var Ba = e => {
                let {
                    quickReply: t,
                    onButtonClick: n,
                    metadata: i
                } = e;
                const a = (0, r.useRef)(null),
                    o = (0, r.useRef)(null),
                    s = (0, f.a9)(),
                    d = () => {
                        if (a.current && o.current) {
                            const e = 34;
                            a.current.style.width = `${o.current.offsetWidth+e}px`, o.current.classList.add("line-clamp")
                        }
                    };
                return (0, r.useEffect)((() => {
                    s && s.requestAnimationFrame(d)
                }), [s]), (0, W.tZ)("button", {
                    ref: a,
                    type: "button",
                    title: t.title,
                    onClick: () => {
                        n(t, i)
                    },
                    children: (0, W.tZ)("span", {
                        ref: o,
                        dangerouslySetInnerHTML: {
                            __html: Et(t.title)
                        }
                    })
                })
            };
            const Fa = e => {
                let {
                    quickReplies: t,
                    messageId: n,
                    disabled: i = !1,
                    metadata: a
                } = e;
                const s = (0, o.I0)(),
                    d = (0, o.v9)((e => (0, E.V5)(e, n)));
                (0, r.useEffect)((() => {
                    d || i || s((0, x.es$)(n))
                }), [i, s, d, n]);
                const l = (0, r.useCallback)((function(e) {
                    let {
                        payload: t,
                        title: n,
                        type: i
                    } = e, {
                        is_ai_assistant_task: r
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return s((0, x.eBK)(n, t, {
                        is_ai_assistant_task: r
                    })), s((0, x.SnQ)("bot" !== i ? nt.M.quickReplyClicked : nt.M.botStartedFromBotsMenu)), !0
                }), [s]);
                return i || !d ? null : (0, W.tZ)("div", {
                    className: "button-wrapper",
                    children: t.map((e => (0, W.tZ)(Ba, {
                        quickReply: e,
                        onButtonClick: l,
                        metadata: a
                    }, `${e.title}${e.payload}`)))
                })
            };
            var Pa = (0, r.memo)(Fa);
            var ja = e => {
                let {
                    disabled: t,
                    type: n,
                    id: i,
                    content: a
                } = e;
                const s = (0, o.I0)(),
                    d = (0, o.v9)((e => e.sendVisitorMessageFlag)),
                    [l, u] = (0, r.useState)(!1),
                    [c, p] = (0, r.useState)(""),
                    h = n === it.Cs.RATE_COMMENT_GOOD;
                (0, r.useEffect)((() => {
                    !t && d && l && s((0, x.ncp)(i, c))
                }), [c, t, s, i, l, d]);
                return (0, W.BX)("div", {
                    className: "message message-operator rate-comment",
                    children: [(0, W.tZ)("span", {
                        dangerouslySetInnerHTML: {
                            __html: xt((0, v.dW)(h ? "commentForGoodRating" : "commentForBadRating", null, h ? "Thank you for your rate \ud83d\ude0d Would you like to leave a comment?" : "Thank you for your rate \ud83d\ude25 Would you like to leave a comment?"))
                        }
                    }), (0, W.tZ)(Tt, {
                        type: "text",
                        placeholder: "typeOptional",
                        onChange: p,
                        onKeyDown: e => !(13 !== e || !l) && (s((0, x.jaP)(!0)), (0, f.Rn)(), !0),
                        isValidCallback: u,
                        value: t ? a : null,
                        disabled: t
                    })]
                })
            };
            var za = e => {
                    const t = (0, o.I0)(),
                        n = (0, o.v9)(E.aI),
                        i = i => {
                            if (n) t((0, x.wp$)((0, v.dW)("disabledTextInputPlaceholder", null, "Choose one of the options above \u261d\ufe0f")));
                            else {
                                const n = i ? (0, v.dW)("rateSatisfied", null, "Yes, I did!") : (0, v.dW)("rateDissatisfied", null, "No. I\u2019m not satisfied.");
                                t((0, x.liy)(n, !1)), t((0, x.j3E)(i)), t((0, x.es$)(e.id))
                            }
                        };
                    return (0, W.BX)("div", {
                        className: "message message-operator message-with-buttons " + (e.disabled ? "buttons-hidden" : ""),
                        children: [(0, W.tZ)("span", {
                            children: (0, W.tZ)(Zt, {
                                value: "rateConversationMessage"
                            })
                        }), !e.disabled && (0, W.BX)("div", {
                            className: "button-wrapper",
                            children: [(0, W.tZ)("button", {
                                type: "button",
                                onClick: () => i(!0),
                                children: (0, W.tZ)("span", {
                                    children: (0, W.tZ)(Zt, {
                                        value: "rateSatisfied"
                                    })
                                })
                            }), (0, W.tZ)("button", {
                                type: "button",
                                onClick: () => i(!1),
                                children: (0, W.tZ)("span", {
                                    children: (0, W.tZ)(Zt, {
                                        value: "rateDissatisfied"
                                    })
                                })
                            })]
                        })]
                    })
                },
                Ua = n(2582);
            var Ha = {
                container: {
                    name: "28er4a",
                    styles: "overflow:hidden;border:1px solid #E6E8EF;border-radius:16px;display:flex;flex-direction:column"
                },
                image: {
                    name: "2i0cyl",
                    styles: "width:100%;height:174px;object-fit:cover;object-position:center center;pointer-events:none;user-select:none"
                },
                getContentContainer: e => (0, l.iv)({
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    padding: "20px 24px",
                    borderRadius: 16,
                    ...e && {
                        marginTop: -16,
                        position: "relative",
                        overflow: "hidden",
                        background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1))",
                        WebkitBackdropFilter: "blur(20px)",
                        backdropFilter: "blur(20px)"
                    }
                }, "", ""),
                textsContainer: {
                    name: "1389q7x",
                    styles: "display:flex;justify-content:space-between;gap:4px;z-index:1"
                },
                buttonsContainer: {
                    name: "1hk28hk",
                    styles: "display:flex;flex-direction:column;gap:12px;z-index:1"
                },
                titleText: {
                    name: "16ceglb",
                    styles: "font-weight:600"
                },
                currencyText: {
                    name: "1iyo3kg",
                    styles: "color:#4C596B;font-size:14px"
                },
                primaryButton: e => (0, l.iv)({
                    width: "100%",
                    padding: "10px 0px",
                    borderRadius: 6,
                    fontWeight: 600,
                    position: "relative",
                    "&:disabled:hover": {
                        cursor: e ? "progress" : "default"
                    },
                    "&:before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        borderRadius: 6,
                        background: "transparent",
                        transition: "background .5s ease"
                    },
                    "&:disabled:before": {
                        background: "rgba(255, 242, 246, 0.5)"
                    },
                    transition: "filter .2s",
                    "&:not(:disabled):hover": {
                        filter: "brightness(90%)"
                    }
                }, "", ""),
                secondaryButton: {
                    name: "emhr2y",
                    styles: "width:100%;font-weight:600;&:focus{outline:none;}&:hover{text-decoration:underline;}"
                },
                addedToCartButton: {
                    name: "11n9x5o",
                    styles: "padding:10px 0px;border-radius:6px;font-weight:600;background-color:#EFF2F6;color:#647491;display:flex;justify-content:center;align-items:center;gap:10px;& svg{fill:#34B857;width:19px;height:19px;}&:disabled:hover{cursor:default;}"
                }
            };
            const Wa = "learn_more_clicked_for_product_id",
                $a = "add_to_cart_clicked_for_product_id";
            var Va = e => {
                let {
                    id: t,
                    title: n,
                    imageUrl: i,
                    price: a,
                    currency: s,
                    variants: d,
                    url: l,
                    buttonPayload: u,
                    chatBotId: c,
                    isAddToCartEnabled: f,
                    messageId: h
                } = e;
                const m = (0, o.I0)(),
                    b = (0, o.v9)(E.U1),
                    y = `${h}_${t}`,
                    w = (0, C.Hr)($a) === y,
                    [k, A] = (0, r.useState)(!1),
                    [Z, S] = (0, r.useState)(w),
                    M = (0, p.jr)(l),
                    T = d.length <= 1,
                    I = Boolean(i),
                    _ = (0, r.useRef)(),
                    N = (0, r.useRef)((0, C.Hr)(Wa)),
                    R = () => {
                        m((0, x.V67)({
                            productId: t,
                            chatBotId: c
                        })), A(!1), S(!0), (0, C.Mm)($a, y)
                    };
                let O;
                try {
                    O = new Intl.NumberFormat((0, p.of)() || "en-US", {
                        style: "currency",
                        currency: s,
                        currencyDisplay: "narrowSymbol"
                    })
                } catch (e) {
                    e instanceof Error && (0, g.G)("Wrong currency provided to recommended product", {
                        message: e.message
                    })
                }
                const D = (0, r.useCallback)((() => {
                    m((0, x.eBK)(`${n} &rarr; ${(0,v.dW)("recommendProductLearnMore",null,"Learn more")}`, u)), m((0, x.V67)({
                        productId: t,
                        chatBotId: c
                    })), m((0, x.SnQ)(nt.M.productRecommendationLearnMoreClicked))
                }), [u, c, m, t, n]);
                (0, r.useEffect)((() => {
                    N.current === y && (N.current = void 0, (0, C.lR)(Wa), D())
                }), [D, y]), (0, r.useEffect)((() => {
                    w && S(!0)
                }), [w]), (0, r.useEffect)((() => {
                    Z && (_.current = setTimeout((() => {
                        (0, C.lR)($a), S(!1)
                    }), 1e4))
                }), [Z]), (0, r.useEffect)((() => () => {
                    clearTimeout(_.current)
                }), []);
                const L = (0, W.tZ)("button", {
                    type: "button",
                    css: Ha.secondaryButton,
                    onClick: () => {
                        try {
                            if (-1 === l.indexOf("://") && window.top) {
                                (0, C.Mm)(Wa, y) || D(), window.top.location.assign(l)
                            } else D(), window.open(M)
                        } catch (e) {
                            D(), window.open(M)
                        }
                    },
                    children: (0, W.tZ)(Zt, {
                        value: "recommendProductLearnMore",
                        fallback: "Learn more"
                    })
                });
                return (0, W.BX)("div", {
                    css: Ha.container,
                    children: [i && (0, W.tZ)("img", {
                        src: i,
                        alt: n,
                        css: Ha.image
                    }), (0, W.BX)("div", {
                        css: Ha.getContentContainer(I),
                        children: [(0, W.BX)("div", {
                            css: Ha.textsContainer,
                            children: [(0, W.tZ)("p", {
                                css: Ha.titleText,
                                children: n
                            }), O && (0, W.tZ)("p", {
                                css: Ha.currencyText,
                                children: O.format(a / 100)
                            })]
                        }), (0, W.tZ)("div", {
                            css: Ha.buttonsContainer,
                            children: T ? (0, W.BX)(W.HY, {
                                children: [Z && (0, W.BX)("button", {
                                    type: "button",
                                    disabled: !0,
                                    css: Ha.addedToCartButton,
                                    children: [(0, W.tZ)(at.qB, {}), (0, W.tZ)(Zt, {
                                        value: "recommendProductAdded",
                                        fallback: "Added"
                                    })]
                                }), !Z && (0, W.tZ)("button", {
                                    type: "button",
                                    style: f ? {
                                        background: `linear-gradient(135deg, ${b[0]}, ${b[1]})`,
                                        color: b[2] || "#fff"
                                    } : {},
                                    onClick: async () => {
                                        if (A(!0), m((0, x.eBK)(`${n} &rarr; ${(0,v.dW)("recommendProductAddToCart",null,"Add to cart")}`, u)), m((0, x.SnQ)(nt.M.productRecommendationAddToCartClicked)), (0, p.QI)()) R();
                                        else if (1 === d.length) try {
                                            const e = await (0, Ua.jc)(d[0].id);
                                            e.ok || (0, g.G)("Shopify add to cart request failed", {
                                                message: e.statusText
                                            }), R()
                                        } catch (e) {
                                            e instanceof Error && (0, g.G)("Shopify add to cart request failed", {
                                                message: e.message
                                            }), A(!1)
                                        }
                                    },
                                    disabled: !f || k,
                                    css: Ha.primaryButton(k),
                                    children: (0, W.tZ)(Zt, {
                                        value: "recommendProductAddToCart",
                                        fallback: "Add to cart"
                                    })
                                }), L]
                            }) : L
                        })]
                    })]
                })
            };
            const Xa = (0, l.F4)({
                    "0%": {
                        transform: "translateY(50%)",
                        opacity: 0
                    },
                    "100%": {
                        transform: "translateX(0)",
                        opacity: 1
                    }
                }),
                qa = {
                    name: "18uqayh",
                    styles: "margin-bottom:16px"
                },
                Ya = (0, l.iv)({
                    willChange: "transform, opacity",
                    opacity: 0,
                    animation: `${Xa} .5s ease-out forwards`
                }, "", "");
            var Ga = e => {
                let {
                    title: t,
                    products: n,
                    buttonPayload: i,
                    chatBotId: r,
                    isFlyMessage: a,
                    messageId: o
                } = e;
                const s = n.every((e => !e.imageUrl));
                return r ? (0, W.BX)(W.HY, {
                    children: [a ? (0, W.tZ)("p", {
                        css: qa,
                        children: t
                    }) : (0, W.tZ)("div", {
                        className: "message message-operator",
                        css: Ya,
                        children: (0, W.tZ)("p", {
                            children: t
                        })
                    }), (0, W.tZ)(yr, {
                        items: n,
                        renderItem: (e, t) => (0, l.az)(Va, { ...e,
                            buttonPayload: i,
                            chatBotId: r,
                            isAddToCartEnabled: !a || t,
                            key: e.id,
                            messageId: o
                        }),
                        isFlyMessage: a,
                        isWithoutImages: s
                    })]
                }) : null
            };
            const Qa = [{
                value: "\ud83d\ude21",
                rating: 1
            }, {
                value: "\ud83d\ude41",
                rating: 2
            }, {
                value: "\ud83d\ude10",
                rating: 3
            }, {
                value: "\ud83d\ude00",
                rating: 4
            }, {
                value: "\ud83d\ude0d",
                rating: 5
            }];
            const Ka = {
                name: "1v1tij8",
                styles: "display:flex;justify-content:space-between;padding:0 0 18px;color:#647491;font-size:14px;max-width:100%"
            };
            var Ja = () => (0, W.BX)("div", {
                className: "message",
                css: Ka,
                children: [(0, W.tZ)("span", {
                    children: (0, v.dW)("satisfactionSurveyVeryBad", null, "Very bad")
                }), (0, W.tZ)("span", {
                    children: (0, v.dW)("satisfactionSurveyVeryGood", null, "Very good")
                })]
            });
            const eo = {
                    name: "1s72ogv",
                    styles: "display:flex;align-items:center;clear:both;position:relative;padding:14px 0 8px;transition:margin 0.28s ease-in-out"
                },
                to = {
                    name: "3cnsub",
                    styles: "border:1px solid #d3dbe5;cursor:default;letter-spacing:-0.01em"
                },
                no = {
                    name: "1bt3zem",
                    styles: "color:#06132b;background:white;border:1px solid #0566ff;outline:none;padding:8px 16px;border-radius:20px;margin:2px 0;display:inline-block;clear:both;position:relative;font-size:15px;&:not(:first-of-type){margin-left:8px;}img{width:18px;height:18px;}"
                };
            var io = e => {
                let {
                    threadSource: t,
                    threadId: n,
                    messageId: i,
                    scale: a,
                    selectedRating: s
                } = e;
                const d = (0, o.I0)(),
                    u = (0, o.v9)(E.U1),
                    c = (0, r.useMemo)((() => (0, l.iv)({
                        background: `linear-gradient(135deg, ${u[0]} 0%, ${u[1]} 100%)`
                    }, "", "")), [u]);
                return (0, W.BX)("div", {
                    children: [(0, W.tZ)("div", {
                        className: "message",
                        css: eo,
                        children: a.map((e => {
                            let {
                                value: r,
                                rating: a
                            } = e;
                            return (0, W.tZ)("button", {
                                type: "button",
                                css: [no, s && to, s === a && c, "", ""],
                                onClick: () => {
                                    var e;
                                    s || (e = a, d((0, x.Gv8)(e, t, n, i)), d((0, x.HzX)((0, Ft.Sg)(t, n, i, it.Cs.AUTOMATIC_SURVEY_RATED))))
                                },
                                children: (0, W.tZ)("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: Et(r)
                                    }
                                })
                            }, a)
                        }))
                    }), (0, W.tZ)(Ja, {})]
                })
            };
            var ro = e => {
                let {
                    threadSource: t,
                    threadId: n,
                    messageId: i,
                    comment: a
                } = e;
                const s = (0, o.I0)(),
                    [d, l] = (0, r.useState)(!1),
                    [u, c] = (0, r.useState)("");
                return (0, W.tZ)(Tt, {
                    type: "text",
                    placeholder: "typeOptional",
                    onChange: c,
                    onKeyDown: e => !(13 !== e || !d) && (d && (s((0, x.Mak)(u, t, n, i)), s((0, x.HzX)((0, Ft.Sg)(t, n, i, it.Cs.AUTOMATIC_SURVEY_COMMENTED)))), (0, f.Rn)(), !0),
                    isValidCallback: l,
                    value: a || null,
                    disabled: Boolean(a)
                })
            };
            var ao = e => {
                let {
                    threadSource: t,
                    threadId: n,
                    messageId: i,
                    commentQuestion: r,
                    comment: a
                } = e;
                return (0, W.BX)("div", {
                    className: "message message-operator rate-comment",
                    children: [(0, W.tZ)("span", {
                        children: r
                    }), (0, W.tZ)(ro, {
                        threadSource: t,
                        threadId: n,
                        messageId: i,
                        comment: a
                    })]
                })
            };
            var oo = e => {
                let {
                    threadSource: t,
                    threadId: n,
                    messageId: i,
                    type: r,
                    satisfactionSurvey: a
                } = e;
                const s = (0, o.I0)(),
                    d = (0, o.v9)((e => (0, E.$d)(e, n)));
                if (!d) return a && s((0, x.W$L)(a, t, n, i)), null;
                const l = d.threadSource ? ? "conversation",
                    u = (e => {
                        if ("emotes" === e) return Qa;
                        throw new Error("Unreachable case error")
                    })(d.scaleType),
                    c = u.find((e => e.rating === d ? .response.rating));
                return (() => {
                    switch (r) {
                        case it.Cs.AUTOMATIC_SURVEY:
                            return (0, W.BX)(W.HY, {
                                children: [(0, W.tZ)("div", {
                                    className: "message message-operator",
                                    children: d.rateQuestion || (0, v.dW)("satisfactionSurveyHeader")
                                }), (0, W.tZ)(io, {
                                    threadSource: l,
                                    threadId: n,
                                    messageId: i,
                                    scale: u,
                                    selectedRating: c ? .rating
                                })]
                            });
                        case it.Cs.AUTOMATIC_SURVEY_RATED:
                            return (0, W.tZ)(ao, {
                                threadSource: l,
                                threadId: n,
                                messageId: i,
                                comment: d.response.comment,
                                commentQuestion: d.commentQuestion || (0, v.dW)("satisfactionSurveyComment")
                            });
                        case it.Cs.AUTOMATIC_SURVEY_COMMENTED:
                            return (0, W.tZ)("div", {
                                className: "message message-operator",
                                children: d.endMessage || (0, v.dW)("satisfactionSurveyEnd")
                            });
                        default:
                            throw (0, g.G)("Automatic satisfaction survey: unreachable case"), new Error("Automatic satisfaction survey: unreachable case")
                    }
                })()
            };
            var so = e => {
                const t = sr(e.content);
                return (0, W.tZ)("div", {
                    className: "message message-operator",
                    children: (0, W.tZ)("span", {
                        className: "message-content",
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    })
                })
            };
            var lo = () => (0, W.tZ)("div", {
                className: "message message-operator",
                children: (0, W.tZ)(Zt, {
                    value: "ticketSubmittedMessage",
                    emojify: !0,
                    linkify: !0
                })
            });
            const uo = "https://assets.tidiochat.com/img/not_found.jpg";
            var co = e => {
                const {
                    content: t,
                    extension: n,
                    thumb: i,
                    name: a,
                    id: s
                } = e, d = (0, o.I0)(), l = (0, o.v9)((e => e.publicKey)), u = (0, o.v9)((e => e.visitor.id)), c = (0, o.v9)(E.Xf), [f, h] = (0, r.useState)(t), [m, g] = (0, r.useState)(i || ""), [b, v] = (0, r.useState)(!0), y = "gif" !== n ? m : f, w = (0, r.useCallback)((async function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (e === uo) return v(!1), "";
                    if (-1 === e.indexOf("/conversation/")) {
                        const n = (0, p.en)(e),
                            i = `/${l}/conversation/${u}`,
                            r = n ? `${n.protocol}//${n.host}${i}${n.pathname}${n.search}${n.hash}` : e,
                            a = await async function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uo;
                                return new Promise(((t, n) => {
                                    const i = new Image;
                                    i.src = e, i.onload = () => t(e), i.onerror = e => {
                                        n(e)
                                    }
                                })).catch((() => t))
                            }(r);
                        t ? g(a) : h(a)
                    } else g(uo), h(uo);
                    return ""
                }), [l, u]);
                return b ? (0, W.tZ)("span", {
                    children: (0, W.BX)("a", {
                        href: t,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: t => {
                            c !== it.t4.WIX && (t.preventDefault(), d((0, x.Z1k)(f))), e.onClick()
                        },
                        children: [(0, W.tZ)(at.UW, {}), (0, W.tZ)("img", {
                            className: "attachment-img",
                            src: y,
                            onLoad: e => {
                                e.currentTarget.setAttribute("alt", `${a}`), d((0, x.GNj)(s, !0))
                            },
                            onError: () => {
                                w(f), w(m, !0)
                            },
                            alt: ""
                        })]
                    })
                }) : null
            };
            var po = e => {
                const [t, n] = (0, r.useState)(!1), i = Xr(), a = Boolean(e.ratingId) && !t, o = function(e) {
                    if (!e) return "";
                    const t = e.match(/^[a-zA-Z0-9]{10,11}-/);
                    return t && e.replace(t[0], "") || e
                }(e.name), s = (e => {
                    try {
                        return decodeURIComponent(e)
                    } catch {
                        return e
                    }
                })(o), d = () => {
                    n((e => !e))
                };
                return (0, W.tZ)("div", {
                    className: `message message-upload ${"image"===e.attachmentType?"message-image":"message-file"} message-${"bot"===e.sender?"operator":e.sender} ${t?"timestamp-visible":""} ${e.ratingId?"rating-visible":""}`,
                    style: "visitor" === e.sender ? {
                        background: `linear-gradient(135deg, ${i[0]}, ${i[1]})`,
                        color: i[2]
                    } : {},
                    children: "image" === e.attachmentType ? (0, W.BX)(W.HY, {
                        children: [(0, W.tZ)(co, {
                            content: e.content,
                            extension: e.extension,
                            thumb: e.thumb,
                            name: e.name,
                            id: e.id,
                            onClick: d
                        }), (0, W.tZ)(kn, { in: t,
                            children: (0, W.tZ)(rr, {
                                time: e.time_sent
                            })
                        }), (0, W.tZ)(kn, { in: a,
                            children: (0, W.tZ)(Jn, {
                                messageId: e.id,
                                ratingId: e.ratingId,
                                rating: e.rating
                            })
                        })]
                    }) : (0, W.BX)(W.HY, {
                        children: [(0, W.BX)("a", {
                            href: e.content,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: d,
                            children: [(0, W.tZ)(at.UW, {}), (0, W.BX)("span", {
                                children: [(0, W.tZ)(sa, {
                                    extension: e.extension
                                }), s]
                            })]
                        }), (0, W.tZ)(kn, { in: t,
                            children: (0, W.tZ)(rr, {
                                time: e.time_sent
                            })
                        })]
                    })
                })
            };
            var fo = e => {
                let {
                    isDelivered: t,
                    time_sent: n,
                    content: i
                } = e;
                const [a, o] = (0, r.useState)(!1), s = Xr(), d = (0, r.useRef)(null), l = (0, r.useRef)(null), u = sr(i);
                (0, r.useEffect)((() => {
                    or(d, l)
                }), []);
                const c = (0, r.useCallback)((() => {
                    o((e => !e))
                }), []);
                return (0, W.BX)("div", {
                    className: `message message-visitor ${a&&t?"timestamp-visible":""} ${t?"":"not-delivered"}`,
                    onClick: c,
                    style: t ? {
                        background: `linear-gradient(135deg, ${s[0]}, ${s[1]})`,
                        color: s[2]
                    } : {},
                    ref: l,
                    children: [(0, W.tZ)("span", {
                        className: "message-content",
                        dangerouslySetInnerHTML: {
                            __html: u
                        },
                        ref: d
                    }), (0, W.tZ)(kn, { in: a && t,
                        children: (0, W.tZ)(rr, {
                            time: n
                        })
                    }), !t && (0, W.tZ)("span", {
                        className: "resend-message",
                        style: {
                            color: "red"
                        },
                        children: (0, v.dW)("messageNotDelivered", null, "Not delivered.")
                    })]
                })
            };
            var ho = e => {
                switch (e.type) {
                    case it.Cs.PRECHAT:
                        return (0, W.tZ)(La, { ...e
                        });
                    case it.Cs.RATE_CONVERSATION:
                        return (0, W.tZ)(za, { ...e
                        });
                    case it.Cs.RATE_COMMENT_GOOD:
                    case it.Cs.RATE_COMMENT_BAD:
                        return (0, W.tZ)(ja, { ...e
                        });
                    case it.Cs.ALWAYS_ONLINE:
                        return (0, W.tZ)(Xn, {});
                    case it.Cs.UPLOADING_FILE:
                        return (0, W.tZ)(Gr, { ...e
                        });
                    case it.Cs.UPLOADED_FILE:
                        return (0, W.BX)(W.HY, {
                            children: [(0, W.tZ)(po, { ...e
                            }), e.quickReplies && e.quickReplies.length > 0 && !e.disabled && (0, W.tZ)("div", {
                                className: "message message-operator bots-quick-replies",
                                children: (0, W.tZ)(Pa, {
                                    quickReplies: e.quickReplies,
                                    messageId: e.id,
                                    disabled: e.disabled
                                })
                            })]
                        });
                    case it.Cs.SYSTEM:
                        return (0, W.tZ)(so, { ...e
                        });
                    case it.Cs.CARD_GALLERY:
                        return (0, W.tZ)(kr, { ...e
                        });
                    case it.Cs.BUTTONS:
                        return (0, W.tZ)(pr, { ...e
                        });
                    case it.Cs.COUPON_CODE:
                        return (0, W.tZ)(Rr, { ...e
                        });
                    case it.Cs.CONVERSATION_MARKED_AS_SOLVED:
                        return (0, W.tZ)(Zr, { ...e
                        });
                    case it.Cs.AUTOMATIC_SURVEY:
                    case it.Cs.AUTOMATIC_SURVEY_RATED:
                    case it.Cs.AUTOMATIC_SURVEY_COMMENTED:
                        return (0, W.tZ)(oo, { ...e
                        });
                    case it.Cs.CREATE_TICKET_SUCCESS:
                        return (0, W.tZ)(lo, {});
                    case it.Cs.FORM:
                        return (0, W.tZ)(Za, { ...e
                        });
                    case it.Cs.FORM_RESPONSE:
                        return null;
                    case it.Cs.IFRAME:
                        return (0, W.tZ)(Na, { ...e.iframe
                        });
                    case it.Cs.RECOMMENDED_PRODUCTS:
                        return (0, W.tZ)(Ga, { ...e.recommendedProducts,
                            chatBotId: e.chatBotId,
                            messageId: e.id
                        });
                    case it.Cs.TEXT:
                        switch (e.sender) {
                            case it.By.OPERATOR:
                                return (0, W.tZ)(Da, { ...e
                                });
                            case it.By.BOT:
                                {
                                    const t = (0, p.QI)() && (0, p.gZ)() ? .addAnswerEnabled && "knowledge_missing" === e.aiAssistantResponseType;
                                    return (0, W.BX)(W.HY, {
                                        children: [(0, W.tZ)(ar, { ...e,
                                            content: Ct(e.content)
                                        }), e.quickReplies && e.quickReplies.length > 0 && !e.disabled && (0, W.tZ)("div", {
                                            className: "message message-operator bots-quick-replies",
                                            children: (0, W.tZ)(Pa, {
                                                quickReplies: e.quickReplies,
                                                messageId: e.id,
                                                disabled: e.disabled,
                                                metadata: {
                                                    is_ai_assistant_task: e.aiAssistantTask
                                                }
                                            })
                                        }), t && (0, W.tZ)(Oa, {
                                            questionMessageId: e.questionMessageId
                                        })]
                                    })
                                }
                            case it.By.VISITOR:
                                return (0, W.tZ)(fo, { ...e
                                });
                            default:
                                return null
                        }
                    default:
                        return null
                }
            };
            const mo = (0, l.iv)({
                    border: "1px solid transparent",
                    background: `linear-gradient(white, white) padding-box, linear-gradient(135deg, ${p.UC[0]}, ${p.UC[1]}) border-box`,
                    color: p.UC[0]
                }, "", ""),
                go = (0, l.iv)({
                    display: "inline-block",
                    marginLeft: 8,
                    span: {
                        display: "inline-block",
                        height: 5,
                        width: 5,
                        margin: "11px 1px 0 2px",
                        backgroundColor: p.UC[0],
                        borderRadius: "50%",
                        animation: "blink 1.3s linear infinite",
                        "&:nth-child(2)": {
                            animationDelay: "-1.1s"
                        },
                        "&:nth-child(3)": {
                            animationDelay: "-0.9s"
                        }
                    }
                }, "", "");
            var bo = () => {
                const e = (0, o.v9)(E.qc);
                return (0, W.BX)("div", {
                    className: "message message-operator",
                    css: mo,
                    children: [(0, W.BX)("span", {
                        children: [e, " ", (0, v.dW)("isTyping", null, "is typing")]
                    }), (0, W.tZ)($, { in: !0,
                        classNames: "operatorTyping",
                        children: (0, W.BX)("div", {
                            css: go,
                            children: [(0, W.tZ)("span", {}), (0, W.tZ)("span", {}), (0, W.tZ)("span", {})]
                        })
                    })]
                })
            };
            var vo = e => {
                let {
                    messagesLength: t,
                    showOldMessages: n,
                    conversationRef: i,
                    iframeDocument: a
                } = e;
                const o = (0, r.useRef)(null),
                    s = (0, r.useRef)(!1),
                    d = (0, r.useRef)(null),
                    l = (0, r.useRef)(0),
                    u = (0, r.useCallback)((() => {
                        const {
                            scrollHeight: e = 0,
                            clientHeight: t = 0
                        } = i || {}, n = t - 0;
                        o.current && (o.current.style.height = e === t ? "0px" : n * n / +e + "px")
                    }), [i]),
                    c = () => {
                        i && (i.onscroll = () => {
                            let e = 0;
                            if (o.current) {
                                if (s.current) {
                                    const t = Array.from(a.querySelectorAll(".message")).slice(-1)[0];
                                    e = t ? t.offsetHeight : 0, s.current = !1
                                }
                                o.current.style.top = (i.clientHeight - 0) * i.scrollTop / (i.scrollHeight - e) + "px"
                            }
                        })
                    },
                    p = e => {
                        const {
                            scrollHeight: t = 0,
                            clientHeight: n = 0
                        } = i || {};
                        i && (i.scrollTop = t * e / (n - 0))
                    },
                    f = () => {
                        a.onmouseup = null, a.onmousemove = null, d.current && window.cancelAnimationFrame(d.current), c(), o.current && (o.current.style.width = "", o.current.style.margin = "", o.current.style.opacity = "")
                    },
                    h = e => {
                        d.current = window.requestAnimationFrame((() => {
                            if (!o.current) return;
                            let {
                                clientHeight: t = 0
                            } = i || {};
                            t -= 0;
                            const n = e.clientY - l.current,
                                r = parseInt(o.current.style.top, 10) + n;
                            r >= 0 && r <= t - parseInt(o.current.style.height, 10) ? (o.current.style.top = `${r}px`, p(r)) : r < 0 ? (o.current.style.top = "0px", p(0)) : (o.current.style.top = t - parseInt(o.current.style.height, 10) + "px", p(t - parseInt(o.current.style.height, 10))), a.onmouseup = f, l.current = e.clientY
                        }))
                    };
                return (0, r.useEffect)((() => {
                    t && (s.current = !0), u()
                }), [t, u]), (0, r.useEffect)((() => {
                    u()
                }), [n, u]), (0, r.useEffect)((() => {
                    c()
                })), (0, W.tZ)("div", {
                    id: "conversation-scroll",
                    children: (0, W.tZ)("div", {
                        onMouseDown: e => {
                            i && (i.onscroll = null), l.current = e.clientY, o.current && (o.current.style.width = "8px", o.current.style.margin = "0px", o.current.style.opacity = "0.32"), a.onmousemove = h, a.onmouseup = f
                        },
                        ref: e => {
                            if (!e) return !1;
                            o.current = e;
                            const {
                                scrollHeight: t = 0,
                                clientHeight: n = 0,
                                scrollTop: r = 0
                            } = i || {};
                            return o.current.style.top = (n + 0) * r / t + "px", !0
                        }
                    })
                })
            };
            var yo = e => {
                let {
                    operatorIsTyping: t
                } = e;
                return (0, W.tZ)($, { in: !1 !== t,
                    classNames: "operatorTyping",
                    children: (0, W.BX)("div", {
                        className: "message message-operator typing-indicator",
                        children: [(0, W.tZ)("span", {}), (0, W.tZ)("span", {}), (0, W.tZ)("span", {})]
                    })
                })
            };
            var wo = () => {
                const e = (0, o.I0)(),
                    t = (0, o.v9)((e => e.messages)),
                    n = (0, o.v9)((e => e.operatorIsTyping)),
                    i = (0, o.v9)((e => e.alert.isVisible)),
                    a = (0, o.v9)((e => e.isMobile)),
                    s = (0, o.v9)((e => e.showOldMessages)),
                    d = (0, o.v9)(E.o9),
                    l = (0, o.v9)(E.Q0),
                    u = (0, o.v9)(E.Xf),
                    c = (0, r.useRef)((0, f._I)()),
                    h = (0, r.useRef)(null),
                    m = (0, r.useRef)(null),
                    b = (0, r.useRef)(null),
                    [y, w] = (0, r.useState)(!1);
                (0, r.useEffect)((() => {
                    m.current && w(!0)
                }), []);
                const C = () => {
                    m.current && (m.current.scrollTop = m.current.scrollHeight - m.current.clientHeight)
                };
                (0, r.useEffect)((() => (e((0, x.kqK)(a ? it.Ms.MOBILE : it.Ms.CHAT_SIZE_1)), C(), b.current = setTimeout((() => {
                    m.current && m.current.scrollTop - m.current.scrollHeight !== m.current.clientHeight && C()
                }), 100), () => {
                    b.current && clearTimeout(b.current)
                })), [e, a]);
                const [k, A] = (0, r.useState)(s);
                (0, r.useEffect)((() => {
                    k !== s && h.current && (h.current.scrollIntoView(), A(s))
                }), [s, k]);
                const Z = (0, r.useRef)(t),
                    S = m.current && m.current.scrollHeight > m.current.clientHeight + 40,
                    M = t.length,
                    T = Boolean(t.length > 0 && t[M - 1].type === it.Cs.UPLOADING_FILE && t[M - 1].imageLoaded),
                    I = Z.current.length < M;
                (0, r.useEffect)((() => {
                    Z.current.length !== t.length && C(), S && I && (() => {
                        try {
                            const e = Array.from(c.current.querySelectorAll(".message")).slice(-9),
                                t = e[e.length - 1].offsetHeight;
                            for (let n = 0; n < e.length; n += 1) e[n].style.transition = "none", e[n].style.transform = `translateY(${t}px)`;
                            setTimeout((() => {
                                for (let t = 0; t < e.length; t += 1) e[t].style.transition = "transform 0.2s, margin 0.2s", e[t].style.transform = ""
                            }), 0)
                        } catch (e) {
                            (0, g.G)(e)
                        }
                    })(), Z.current = t
                }), [S, c, t, Z, I]), (0, r.useEffect)((() => {
                    (i || n || l || T) && C()
                }), [i, n, l, T]);
                const _ = (0, p._1)(),
                    N = t.filter((e => Math.floor(Date.now() / 1e3) - e.time_sent > 86400)),
                    R = t.filter((e => Math.floor(Date.now() / 1e3) - e.time_sent <= 86400)),
                    O = s ? t : R,
                    [D] = (0, r.useState)(O.length);
                return (0, r.useEffect)((() => {
                    if (D === O.length) {
                        O.filter((e => e.type === it.Cs.UPLOADED_FILE && "image" === e.attachmentType)).find((e => !e.imageLoaded)) || C()
                    }
                }), [D, O]), (0, W.BX)("div", {
                    id: "conversation-group",
                    ref: m,
                    className: `${"firefox"===p.L0?"native-scroll":""} ${d?"drag-active":""} ${_?"ios-ipad":""} ${u===it.t4.WIX?"wix":""}`,
                    role: "log",
                    children: [d && (0, W.tZ)("div", {
                        className: "uploadIconWrapper",
                        children: (0, W.BX)("div", {
                            className: "upload-circle",
                            children: [(0, W.tZ)(at.rG, {}), (0, W.tZ)("span", {
                                children: (0, v.dW)("dragAndDropInfo", null, "Drop here to attach")
                            })]
                        })
                    }), (0, W.BX)("div", {
                        id: "messages",
                        "aria-live": "polite",
                        "aria-atomic": "false",
                        "data-testid": "messagesLog",
                        children: [s && N.map((e => (0, W.tZ)(ho, { ...e
                        }, e.id))), !s && N.length > 0 && (0, W.tZ)("div", {
                            className: "history-button-wrapper",
                            "data-testid": "historyButtonWrapper",
                            children: (0, W.BX)("button", {
                                className: "history-button",
                                type: "button",
                                onClick: () => {
                                    e((0, x.SnQ)(nt.M.showPreviousMessagesClicked)), e((0, x.e2e)(!0))
                                },
                                "data-testid": "historyButton",
                                children: [(0, W.tZ)(at.F_, {}), (0, v.dW)("previousMessages", null, "Previous messages")]
                            })
                        }), N.length > 0 && (0, W.tZ)("div", {
                            ref: h,
                            style: {
                                float: "left",
                                clear: "both",
                                width: "100%"
                            }
                        }), R.map((e => (0, W.tZ)(ho, { ...e
                        }, e.id))), (0, W.tZ)(kn, { in: i,
                            children: (0, W.tZ)(Vn, {})
                        }), (0, W.tZ)(yo, {
                            operatorIsTyping: n
                        }), l && (0, W.tZ)(bo, {})]
                    }), y && "firefox" !== p.L0 && !a && (0, W.tZ)(vo, {
                        messagesLength: t.length,
                        conversationRef: m.current,
                        iframeDocument: c.current,
                        showOldMessages: s
                    })]
                })
            };
            var xo = e => {
                let {
                    onClick: t
                } = e;
                return (0, W.tZ)("div", {
                    className: "get-started",
                    children: (0, W.tZ)("button", {
                        type: "button",
                        onClick: t,
                        children: (0, W.tZ)(Zt, {
                            value: "getStarted",
                            fallback: "Get started"
                        })
                    })
                })
            };
            const Co = {
                    transition: "max-height 200ms"
                },
                Eo = Boolean((0, v.dW)("welcomeMessage", null, "")),
                ko = (0, p.kA)().name.toLowerCase(),
                Ao = (0, p.$U)();
            var Zo = () => {
                const e = (0, o.v9)(E.Xe),
                    t = (0, o.v9)((e => e.showOptionsDropdown)),
                    n = (0, o.v9)((e => e.isMobile)),
                    i = (0, o.v9)((e => e.messages)),
                    a = (0, o.v9)((e => e.getStartedActive)),
                    s = (0, o.v9)((e => e.hideHeader)),
                    d = (0, o.v9)(E.J),
                    l = (0, o.v9)(E.o9),
                    u = (0, o.v9)((e => e.allowAttachments)),
                    c = (0, o.v9)(E.bP),
                    m = (0, o.v9)((e => e.isProjectOnline)),
                    g = (0, o.v9)(E.Xu),
                    b = i[i.length - 1] ? .form ? .some((e => e.type === it.EI.FILE)),
                    [w] = (0, r.useState)(i.length),
                    [C, k] = (0, r.useState)(d && !n),
                    A = (0, p.QI)(),
                    Z = (0, r.useRef)(0),
                    S = (0, r.useRef)(""),
                    M = (0, r.useRef)(""),
                    [T, I] = (0, r.useState)(e),
                    _ = (0, o.I0)(),
                    N = (0, r.useRef)(null),
                    R = (0, r.useRef)(100),
                    O = (0, r.useRef)(n && "ios" === ko),
                    D = (0, r.useRef)({
                        entering: {
                            maxHeight: `${R.current}px`
                        },
                        entered: {
                            maxHeight: "399px"
                        }
                    }),
                    [L, B] = (0, r.useState)(144);
                (0, r.useEffect)((() => {
                    const e = m && !(0, v.dW)("weAreOnline") || !m && !(0, v.dW)("alwaysOnlineTopBar");
                    B(e ? 94 : 144)
                }), [m, B]);
                const F = (0, r.useCallback)((() => {
                    const e = (0, f.a9)();
                    if (n && e) try {
                        e.parent.document.body.style.cssText = S.current, e.parent.document.documentElement.style.cssText = M.current
                    } catch (e) {}
                }), [n]);
                (0, r.useEffect)((() => () => {
                    F()
                }), [F]), (0, r.useEffect)((() => {
                    const e = (0, f.a9)();
                    O.current && 0 === Z.current && e && (Z.current = e.parent.scrollY)
                }), []), (0, r.useEffect)((() => {
                    const t = (0, f.a9)();
                    if (e === y.views.chat && n && t) try {
                        M.current = t.parent.document.documentElement.style.cssText, S.current = t.parent.document.body.style.cssText;
                        const e = "overflow: hidden; height: 100%; width: 100%; visibility: visible; opacity: 1 !important; display: block; left: 0; top:0; right: auto; bottom: auto; margin: 0;";
                        t.parent.document.body.style.cssText = e, t.parent.document.documentElement.style.cssText = "overflow: hidden; margin: 0 !important;"
                    } catch (e) {}
                }), [n, e]), (0, r.useEffect)((() => {
                    if (T === y.views.welcome) {
                        const {
                            width: e
                        } = (0, h.P0)(it.Ms.CHAT_SIZE_1);
                        setTimeout((() => {
                            if (N.current && T === y.views.welcome) {
                                const {
                                    clientHeight: t
                                } = N.current;
                                _((0, x.kqK)(it.Ms.DYNAMIC, {
                                    width: e,
                                    height: t + 51
                                })), R.current = t - 110 - L, D.current = {
                                    entering: {
                                        maxHeight: `${R.current}px`
                                    },
                                    entered: {
                                        maxHeight: "399px"
                                    }
                                }
                            }
                        }), 100)
                    }
                }), [_, L, T]), (0, r.useEffect)((() => {
                    i.length > w && I(it.G7.CHAT), 0 === i.length && e === y.views.welcome && I(it.G7.WELCOME), T === y.views.welcome && e === y.views.chat && I(it.G7.CHAT)
                }), [i.length, w, T, e]);
                const P = () => {
                        t && n && "ios" === ko && _((0, x.sdi)(!1))
                    },
                    {
                        getRootProps: j
                    } = Je({
                        onDrop: e => {
                            if (u) {
                                const t = e[0];
                                _((0, x.cTq)(t)), _((0, x.RDO)(!1))
                            }
                        },
                        onDragEnter: () => {
                            l || _((0, x.RDO)(!0))
                        },
                        onDragLeave: () => {
                            _((0, x.RDO)(!1))
                        },
                        noClick: !0,
                        noKeyboard: !0,
                        disabled: !i.find((e => "visitor" === e.sender)) || Ao || c || g || b
                    });
                return T === y.views.welcome ? (0, W.BX)("div", {
                    className: `start-group ${p.L0} no-clip-path ${Eo?"":"no-start-message"}`,
                    "data-testid": "welcomeView",
                    onClick: P,
                    ref: N,
                    children: [(0, W.tZ)(En, {}), !A && a ? (0, W.tZ)(xo, {
                        onClick: () => {
                            _((0, x.vit)())
                        }
                    }) : (0, W.tZ)(jn, {})]
                }) : (0, W.BX)("div", {
                    className: `chat no-clip-path ${p.L0}`,
                    ...j({
                        onClick: e => {
                            e.stopPropagation(), P()
                        }
                    }),
                    children: [!C && (0, W.tZ)(sn, {}), (0, W.tZ)(pn, {}), !(s && n) && (0, W.tZ)(Wn, {}), s && n && (0, W.tZ)($n, {
                        trackingEvent: nt.M.chatClosed
                    }), C ? (0, W.tZ)(rt, { in: !0,
                        timeout: 1,
                        defaultStyle: Co,
                        transitionStyles: D.current,
                        onAnimationEnded: () => {
                            k(!1)
                        },
                        children: (0, W.tZ)(wo, {})
                    }) : (0, W.tZ)(wo, {}), (0, W.tZ)(jn, {
                        hasSeparator: !0
                    })]
                })
            };
            var So = {
                name: "isz1z5",
                styles: "background-color:#fff;padding:0 20px;max-width:340px;position:absolute;bottom:26px;border-radius:12px;box-shadow:0 8px 26px 0 rgba(0, 18, 46, 0.16);display:flex;flex-direction:column;z-index:1;max-height:calc(100% - 76px);.chat-in-preview &{box-shadow:0 8px 13px 0 rgba(0, 18, 46, 0.16);}right:48px;margin-left:20px;&:hover .close-button-wrapper{opacity:1;transform:translateY(0px);}.mobile &{max-width:calc(100% - 48px - 55px);&.with-buttons{width:calc(100% - 48px - 55px);max-width:250px;}}&.narrower{max-width:300px;}.close-button-wrapper{position:absolute;bottom:100%;opacity:0;width:100%;height:45px;transition:all 0.3s;transform:translateY(10px);left:0;.mobile &{opacity:1;}button.material-icons.exit-chat.mobile-close{position:absolute;top:0;border-radius:50%;margin:0;padding:3px;box-shadow:0 3px 6px rgba(0, 0, 0, 0.16),0 3px 6px rgba(0, 0, 0, 0.23);height:24px;width:24px;display:flex;background:#fff;right:5px;svg#ic_close{width:20px;height:20px;fill:#8894ab;}&:before{content:none;}}}.input-group{padding:9px 22px 9px 0;}.material-icons.emoji-switch{position:absolute;top:0;right:36px;svg{width:20px;height:20px;}&:hover:before{width:32px;height:32px;margin:-6px 0 0 -6px;}}.emoji-wrapper{width:300px;left:auto;right:26px;border-radius:6px;box-shadow:0 1px 4px 0 rgba(0, 0, 0, 0.14);left:auto;right:26px;}.input-group .fly-new-message-button{transition:min-width 0.3s;min-width:180px;padding:4px 0 8px;line-height:21px;text-align:left;cursor:pointer;font-size:17px;color:#8894ab;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;&::-webkit-input-placeholder{white-space:nowrap;}&::-moz-placeholder{white-space:nowrap;}&:-ms-input-placeholder{white-space:nowrap;}&:-moz-placeholder{white-space:nowrap;}}&.ie .message-container{max-height:300px;}.message-container{padding:19px 0;max-width:290px;font-size:17px;background:#fff;position:relative;word-wrap:break-word;overflow-y:auto;white-space:pre-line;padding-right:38px;ul{list-style-type:disc;}ol{list-style-type:decimal;}ul,ol{margin:12px 0;padding-left:16px;}li{padding-left:4px;margin-bottom:8px;}&.image-content{overflow-y:hidden;padding-left:0;padding-right:0;button{float:left;height:200px;width:100%;min-width:200px;background-color:#fff;.image-preview{background-size:cover;background-repeat:no-repeat;background-position:center;border-radius:8px;height:100%;}}span{display:inline-block;margin-top:10px;}}.mobile &{width:100%;font-size:15px;padding-right:22px;&.image-content{padding-left:0;padding-right:0;button{height:132px;min-width:auto;}}}&.recommend-products-message{padding-right:0px;padding-bottom:30px;overflow-y:visible;}&:after{content:'';border-bottom:1px solid #dedede;display:block;position:absolute;bottom:0;width:calc(100% - 38px);.mobile &{width:calc(100% - 22px);}}}.button-wrapper{width:100%;display:flex;flex-wrap:wrap;.mobile &{flex-direction:column;align-items:flex-start;}button,.button-url{font-size:17px;color:#007dfc;background:#fff;line-height:21px;margin-top:6px;margin-bottom:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-bottom:1px solid transparent;transition:border-color 0.2s;margin-right:16px;text-align:left;&:hover{border-color:#007dfc;}.mobile &{max-width:100%;display:block;padding:4px 0;}.emoji{vertical-align:top;}}.button-url__anchor{color:#007dfc;text-decoration:none;}.more-replies{border:1px solid #007dfc;border-radius:20px;padding:3px 10px;line-height:7px;align-self:center;.mobile &{align-self:flex-start;padding:3px 10px;margin:6px 0;}svg{transform:rotate(90deg);width:13px;height:13px;fill:#007dfc;}}}"
            };
            var Mo = e => "image" === e.attachmentType ? (0, W.tZ)("button", {
                type: "button",
                onClick: e.onClick,
                children: (0, W.tZ)("div", {
                    className: "image-preview",
                    style: {
                        backgroundImage: `url(${e.content})`
                    },
                    "data-testid": "imagePreview"
                })
            }) : (0, W.tZ)("button", {
                className: "link",
                type: "button",
                onClick: e.onClick,
                style: {
                    borderBottom: "1px solid #3f88f3",
                    color: "#3f88f3"
                },
                children: (0, W.tZ)(Zt, {
                    value: "mediaFile",
                    fallback: "Media file"
                })
            });
            const To = {
                name: "v8qd0m",
                styles: "display:inline-block;margin-top:20px"
            };
            var Io = e => {
                const t = (0, o.I0)(),
                    {
                        content: n,
                        type: i,
                        attachmentType: r,
                        chatBotId: a,
                        sender: s,
                        iframe: d,
                        cards: l = [],
                        id: u,
                        recommendedProducts: c
                    } = e.message;
                if (i === Ft.Nw.uploadedFile) return (0, W.tZ)("div", {
                    className: `message-container ${r}-content`,
                    children: (0, W.tZ)(Mo, {
                        content: n,
                        onClick: () => {
                            t((0, x.SnQ)(nt.M.flyMessageClicked)), t((0, x.kEi)(it.G7.CHAT))
                        },
                        attachmentType: r
                    })
                });
                let p = null;
                if (i === Ft.Nw.cards) {
                    const e = l[0] ? .title || "";
                    p = xt(e);
                    const n = l[0] ? .imageUrl || "";
                    if (n) return (0, W.BX)("div", {
                        className: "message-container image-content",
                        children: [(0, W.tZ)(Mo, {
                            content: n,
                            onClick: () => {
                                t((0, x.kEi)(it.G7.CHAT))
                            },
                            attachmentType: "image"
                        }), (0, W.tZ)("span", {
                            className: "fly-message--card-title",
                            dangerouslySetInnerHTML: {
                                __html: p
                            }
                        })]
                    })
                } else {
                    if (i === Ft.Nw.couponCode) {
                        const {
                            couponCode: t = ""
                        } = e.message;
                        return p = xt(n), (0, W.BX)("div", {
                            className: "message-container",
                            children: [(0, W.tZ)("div", {
                                dangerouslySetInnerHTML: {
                                    __html: p
                                }
                            }), (0, W.tZ)("span", {
                                css: To,
                                children: t
                            })]
                        })
                    }
                    if (i === Ft.Nw.iframe) return (0, W.BX)("div", {
                        className: "message-container",
                        children: [(0, W.tZ)("p", {
                            children: d ? .title
                        }), (0, W.tZ)("br", {}), (0, W.tZ)("p", {
                            children: d ? .subtitle
                        })]
                    });
                    if (i === Ft.Nw.recommendedProducts) return (0, W.tZ)("div", {
                        className: "message-container recommend-products-message",
                        children: (0, W.tZ)(Ga, {
                            title: c ? .title || "",
                            buttonPayload: c ? .buttonPayload || "",
                            products: c ? .products || [],
                            chatBotId: a,
                            isFlyMessage: !0,
                            messageId: u
                        })
                    });
                    p = s === Ft.Qe.bot ? Ct(n) : xt(n)
                }
                return (0, W.tZ)("div", {
                    className: "message-container",
                    dangerouslySetInnerHTML: {
                        __html: p
                    }
                })
            };
            var _o = e => {
                const t = e.showMoreRepliesButton || e.quickReplies.length > e.maxButtons,
                    n = t ? e.quickReplies.slice(0, e.maxButtons - 1) : e.quickReplies;
                return (0, W.BX)("div", {
                    className: "button-wrapper",
                    children: [n.map((t => (0, W.BX)(r.Fragment, {
                        children: ["url" === t.type && (0, W.tZ)(ur, {
                            title: t.title,
                            payload: t.payload,
                            url: t.url,
                            onClick: e.onButtonClick,
                            messageType: e.messageType
                        }), ("action" === t.type || "bot" === t.type || "text" === t.type) && (0, W.tZ)(lr, {
                            title: t.title,
                            payload: t.payload,
                            onClick: e.onButtonClick
                        })]
                    }, `${t.title}${t.payload}`))), t && (0, W.tZ)("button", {
                        type: "button",
                        className: "more-replies",
                        onClick: e.onMoreButtonClick,
                        children: (0, W.tZ)(at.g0, {})
                    })]
                })
            };
            var No = e => {
                const t = (0, o.I0)(),
                    n = (0, o.v9)(E.W7);
                let i = [];
                e.message.type === Ft.Nw.cards ? i = e.message.cards ? .[0] ? .buttons || [] : e.message.quickReplies ? i = e.message.quickReplies : e.message.buttons ? ({
                    buttons: i
                } = e.message) : e.message.type === Ft.Nw.iframe && e.message ? .iframe && (i = e.message.iframe.buttons);
                return (0, W.tZ)(_o, {
                    quickReplies: i,
                    messageType: e.message.type,
                    onButtonClick: (e, n) => {
                        t((0, x.SnQ)(nt.M.flyMessageButtonsClicked)), t((0, x.eBK)(n, e))
                    },
                    onMoreButtonClick: () => {
                        t((0, x.kEi)(it.G7.CHAT))
                    },
                    maxButtons: n ? 3 : 4,
                    showMoreRepliesButton: e.message.type === Ft.Nw.cards && (e.message.cards ? .length || 0) > 1
                })
            };
            const Ro = "220px",
                Oo = e => {
                    if (e) return Ro;
                    if ((0, p.$U)()) return "230px";
                    const t = (0, p.tq)() && window.screen.width < 340,
                        n = (0, p.tq)() && window.screen.width < 410;
                    return t ? "160px" : n ? "210px" : "130px"
                };
            var Do = e => {
                const t = (0, o.I0)(),
                    n = e.message.type === Ft.Nw.uploadedFile,
                    i = () => {
                        t((0, x.SnQ)(nt.M.flyMessageClicked)), t((0, x.kEi)(it.G7.CHAT))
                    };
                return (0, W.tZ)(Zt, {
                    value: ["onlineMessagePlaceholder", "fillOutTheForm"],
                    children: t => {
                        let {
                            onlineMessagePlaceholder: r,
                            fillOutTheForm: a
                        } = t;
                        return (0, W.tZ)("button", {
                            type: "button",
                            style: {
                                width: n ? Ro : "auto",
                                minWidth: Oo(n)
                            },
                            id: "new-message-button-fly",
                            className: "fly-new-message-button",
                            onClick: i,
                            "data-testid": "flyNewMessageButton",
                            children: e.message.type === it.Cs.FORM ? a : r
                        })
                    }
                })
            };
            var Lo = e => (0, W.tZ)("div", {
                className: "input-group",
                children: e.hasButtons ? (0, W.tZ)(No, {
                    message: e.message
                }) : (0, W.tZ)(Do, {
                    message: e.message
                })
            });
            const Bo = [it.Cs.RECOMMENDED_PRODUCTS];
            var Fo = () => {
                const e = (0, o.I0)(),
                    t = (0, f.a9)(),
                    n = (0, r.useRef)(null),
                    i = (0, r.useRef)(null),
                    a = (0, o.v9)(E.hc),
                    s = (0, o.v9)(E.W7),
                    d = (0, o.v9)(E.Xe),
                    l = (0, r.useRef)(null),
                    u = (0, r.useRef)(null),
                    c = void 0 !== a ? .quickReplies || void 0 !== a ? .cards || void 0 !== a ? .buttons || void 0 !== a ? .iframe ? .buttons,
                    h = (0, r.useCallback)((() => {
                        let t = c ? 495 : 362;
                        const i = "100%";
                        s && (t = "100%"), n.current && (n.current.style.maxHeight = "none"), e((0, x.kqK)(`dynamic${t}_${i}`, {
                            width: t,
                            height: i
                        })), l.current = t, u.current = i
                    }), [e, c, s]),
                    m = (0, r.useCallback)((() => !!t && (h(), i.current = t ? .requestAnimationFrame((() => {
                        if (n.current) {
                            let {
                                clientWidth: t,
                                clientHeight: i
                            } = n.current;
                            if (s) {
                                if (t += 95, i += 80, l.current === t && u.current === i) return n.current.style.cssText = "", !1
                            } else if (t += 90, i += 90, l.current === t && u.current === i) return n.current.style.cssText = "", !1;
                            return e((0, x.kqK)(`dynamic${t}_${i}`, {
                                width: t,
                                height: i
                            })), l.current = t, u.current = i, n.current.style.cssText = "", !0
                        }
                        return !0
                    })), !0)), [e, h, s, t]);
                return (0, r.useEffect)((() => {
                    let e = null;
                    const r = e => {
                        const t = e.target;
                        "new-message-button-fly" === t ? .getAttribute("id") && d === it.G7.FLY && m()
                    };
                    return n.current && (e = n.current, e.addEventListener("transitionend", r)), d !== it.G7.FLY ? i.current && (t ? .cancelAnimationFrame(i.current), i.current = null) : m(), () => {
                        e && e.removeEventListener("transitionend", r)
                    }
                }), [m, d, t]), (0, W.BX)("div", {
                    ref: n,
                    "data-testid": "flyMessage",
                    className: `flyMessage ${c?"with-buttons":""} ${p.L0} ${a?.type===it.Cs.RECOMMENDED_PRODUCTS?"narrower":""}`,
                    css: So,
                    children: [(0, W.tZ)("div", {
                        className: "close-button-wrapper",
                        children: (0, W.tZ)($n, {
                            trackingEvent: nt.M.flyMessageClosed
                        })
                    }), a && (0, W.BX)(W.HY, {
                        children: [(0, W.tZ)(Io, {
                            message: a
                        }), !Bo.includes(a.type) && (0, W.tZ)(Lo, {
                            message: a,
                            hasButtons: c
                        })]
                    })]
                })
            };
            var Po = () => {
                const e = (0, o.v9)((e => e.unreadMessages));
                return (0, W.tZ)($, {
                    classNames: "ie" === p.L0 ? "fade" : "scale",
                    in: e > 0,
                    children: (0, W.tZ)("div", {
                        id: "new-message",
                        className: "active",
                        children: e
                    })
                })
            };
            const jo = {
                    active: "0px 4px 24px",
                    hover: "0px 8px 32px"
                },
                zo = {
                    active: "0px 2px 16px",
                    hover: "0px 2px 12px"
                };

            function Uo(e, t) {
                return e ? zo[t] : jo[t]
            }
            class Ho extends r.Component {
                constructor() {
                    super(...arguments), (0, i.Z)(this, "state", {
                        elementHovered: !1,
                        buttonShadow: "#020610" === this.props.widgetColor[3] ? `${Uo(this.props.isAwesomeIframe,"active")} ${(0,p.a7)(this.props.widgetColor[3],".20")}` : `${Uo(this.props.isAwesomeIframe,"active")} ${(0,p.a7)(this.props.widgetColor[3],".50")}`,
                        isGradientActive: "#020610" !== this.props.widgetColor[3]
                    }), (0, i.Z)(this, "wrapperRef", r.createRef()), (0, i.Z)(this, "buttonWave", (() => {
                        this.wrapperRef.current && (this.wrapperRef.current.classList.contains("clicked") && this.wrapperRef.current.classList.remove("clicked"), setTimeout((() => {
                            this.wrapperRef.current && this.wrapperRef.current.classList.add("clicked")
                        }), 10))
                    })), (0, i.Z)(this, "onBubbleClick", (e => {
                        const {
                            dispatch: t,
                            hasMessages: n,
                            newMessageDisabled: i,
                            view: r
                        } = this.props, {
                            chat: a,
                            closed: o,
                            fly: s,
                            welcome: d
                        } = y.views;
                        0 === e.nativeEvent.pageX && 0 === e.nativeEvent.pageY || e.currentTarget.blur(), r !== o ? (i ? (0, f.$k)() : t((0, x.jaP)(!0)), (r === s || r === d && n) && t((0, x.kEi)(a))) : (t((0, x.SnQ)(nt.M.widgetIconClicked)), t((0, x.OFJ)()), t((0, x.ejT)(!0)))
                    })), (0, i.Z)(this, "setHoverShadow", (() => {
                        this.setState({
                            elementHovered: !0
                        })
                    })), (0, i.Z)(this, "setDefaultShadow", (() => {
                        this.setState({
                            elementHovered: !1
                        })
                    }))
                }
                static getDerivedStateFromProps(e, t) {
                    return e.newMessageDisabled && e.view !== y.views.closed && !t.elementHovered ? {
                        buttonShadow: `${Uo(e.isAwesomeIframe,"active")} ${(0,p.a7)("#020610",".20")}`
                    } : e.newMessageDisabled && e.view !== y.views.closed && t.elementHovered ? {
                        buttonShadow: `${Uo(e.isAwesomeIframe,"hover")} ${(0,p.a7)("#020610",".20")}`
                    } : t.elementHovered ? t.elementHovered ? {
                        buttonShadow: `${Uo(e.isAwesomeIframe,"hover")} ${(0,p.a7)(e.widgetColor[3],t.isGradientActive?".24":".20")}`
                    } : null : {
                        buttonShadow: `${Uo(e.isAwesomeIframe,"active")} ${(0,p.a7)(e.widgetColor[3],t.isGradientActive?".50":".20")}`
                    }
                }
                render() {
                    const {
                        view: e,
                        widgetColor: t,
                        newMessageDisabled: n
                    } = this.props, i = e !== y.views.closed, r = e === y.views.closed || e === y.views.fly, a = t[0] === t[1] ? t[0] : `linear-gradient(135deg, ${this.props.widgetColor[0]}, ${this.props.widgetColor[1]})`, o = t[2] || "#fff", s = this.props.sidebar.fontColor || "#fff", d = n && e === y.views.chat;
                    return (0, W.BX)("div", {
                        id: "button",
                        "data-testid": "widgetButton",
                        className: `${this.props.isSidebarComponent?"sidebar":""} ${i?"chat-open":"chat-closed"} mobile-size__${this.props.mobileButtonSize}`,
                        ref: this.wrapperRef,
                        children: [this.props.isSidebarComponent && (0, W.tZ)("div", {
                            className: "sidebar-content",
                            style: {
                                background: this.props.sidebar.color,
                                color: s
                            },
                            onClick: this.onBubbleClick,
                            children: (0, W.tZ)("span", {
                                children: (0, W.tZ)(Zt, {
                                    value: "sidebarLabel"
                                })
                            })
                        }), (0, W.tZ)("div", {
                            className: "buttonWave"
                        }), (0, W.BX)("button", {
                            type: "button",
                            id: "button-body",
                            "data-testid": "widgetButtonBody",
                            onClick: this.onBubbleClick,
                            onMouseDown: () => {
                                d || this.buttonWave()
                            },
                            style: {
                                background: a,
                                boxShadow: this.state.buttonShadow
                            },
                            onMouseEnter: d ? this.setHoverShadow : this.setDefaultShadow,
                            onMouseLeave: this.setDefaultShadow,
                            className: `${d?"disabled":""} ${p.L0}`,
                            tabIndex: "0",
                            "aria-label": i ? (0, v.dW)("closeWidget", null, "Close chat widget") : (0, v.dW)("openWidget", null, "Open chat widget"),
                            children: [(0, W.tZ)("i", {
                                className: "material-icons type1 for-closed " + (r ? "active" : ""),
                                style: {
                                    color: o
                                },
                                children: (0, W.tZ)(at.xj, {})
                            }), (0, W.tZ)("i", {
                                className: "material-icons type2 for-closed " + (r ? "active" : ""),
                                children: (0, W.tZ)(at.Qj, {})
                            }), (0, W.tZ)("i", {
                                className: "material-icons type1 for-opened " + (r ? "" : "active"),
                                style: {
                                    color: o
                                },
                                children: (0, W.tZ)(at.vw, {})
                            }), (0, W.tZ)("i", {
                                className: "material-icons type2 for-opened " + (r ? "" : "active"),
                                children: (0, W.tZ)(at.vw, {})
                            })]
                        }), !this.props.isSidebarComponent && (0, W.BX)(W.HY, {
                            children: [(0, W.tZ)(Po, {}), (0, W.tZ)($, {
                                classNames: "ie" === p.L0 ? "fade" : "scale",
                                in: this.props.isSoundEnabled && this.props.areNotificationSnoozed,
                                children: (0, W.tZ)("div", {
                                    id: "dnd-indicator",
                                    children: (0, W.tZ)(at.nh, {})
                                })
                            })]
                        })]
                    })
                }
            }
            Ho.defaultProps = {
                isSidebarComponent: !1
            };
            var Wo = (0, o.$j)((e => ({
                view: (0, E.Xe)(e),
                widgetColor: (0, p.w8)(e.widgetColor),
                areNotificationSnoozed: e.notificationSnoozed,
                newMessageDisabled: (0, E.bP)(e),
                sidebar: e.sidebarIframeStyles,
                hasMessages: Boolean(e.messages.length),
                mobileButtonSize: (0, E.Jq)(e),
                isSoundEnabled: e.isSoundEnabled,
                isAwesomeIframe: (0, E.Jx)(e)
            })))(Ho);
            var $o = {
                name: "1cr1ym5",
                styles: "position:absolute;height:42px;bottom:61px;z-index:1;white-space:nowrap;font-size:17px;line-height:17px;.widget-position-left &{/*! @noflip */left:100px;}.widget-position-right &{/*! @noflip */right:100px;}border-radius:16px;padding:10px 15px;box-shadow:0 6px 32px 0 rgba(0, 18, 46, 0.24);background:#fff"
            };
            const Vo = (0, p.$U)(),
                Xo = e => e ? 94 : 140;
            var qo = () => {
                const e = (0, o.I0)(),
                    t = (0, o.v9)(E.Xe),
                    n = (0, o.v9)(E.Jx),
                    i = (0, r.useRef)(null),
                    a = (0, r.useRef)(null),
                    s = (0, r.useRef)(null),
                    d = (0, r.useRef)(null),
                    l = (0, r.useRef)(null),
                    u = (0, r.useRef)(null),
                    c = (0, r.useCallback)((() => {
                        const t = Xo(n);
                        e((0, x.kqK)(it.Ms.DYNAMIC, {
                            width: 450,
                            height: t
                        })), d.current = 450, l.current = t
                    }), [e, n]),
                    p = (0, r.useCallback)((() => {
                        if (!a.current) return !1;
                        if (Vo) return c(), !0;
                        let t = (e => e ? 94 : 112)(n);
                        const r = Xo(n);
                        return t += (() => {
                            try {
                                if (i.current) {
                                    i.current.style.cssText = "width: auto; align-self: flex-start; white-space: nowrap";
                                    const e = i.current.clientWidth;
                                    return i.current.style.cssText = "", e + 15
                                }
                                return 250
                            } catch (e) {
                                return 250
                            }
                        })(), d.current === t && l.current === r || (u.current = a.current ? .requestAnimationFrame((() => {
                            e((0, x.kqK)(it.Ms.DYNAMIC, {
                                width: t,
                                height: r
                            })), d.current = t
                        }))), !0
                    }), [e, c, n]),
                    h = () => {
                        u.current && a ? .current && (a.current.cancelAnimationFrame(u.current), u.current = null)
                    };
                (0, r.useEffect)((() => {
                    a.current = (0, f.a9)(), s.current = (0, f.yP)(), d.current = s.current ? .clientWidth || null, l.current = s.current ? .clientHeight || null
                }), []), (0, r.useEffect)((() => (t !== y.views.closed ? h() : p(), () => () => {
                    h()
                })), [e, p, t]), (0, r.useEffect)((() => () => {
                    t === y.views.closed && e((0, x.kqK)(it.Ms.ONLY_BUBBLE))
                }), [e, t]);
                const m = () => {
                        e((0, x.SnQ)(nt.M.widgetLabelClicked)), e((0, x.OFJ)()), e((0, x.ejT)(!0))
                    },
                    g = (e, t) => {
                        let n = e;
                        const i = [...n],
                            r = n.length > t;
                        for (; n.length > t;) i.pop(), n = i.join("");
                        return r ? `${n}&hellip;` : n
                    };
                return (0, W.tZ)(Zt, {
                    value: ["chatWithUsLabel"],
                    children: e => {
                        let {
                            chatWithUsLabel: t
                        } = e;
                        return 0 === t.length ? null : (0, W.tZ)("button", {
                            className: "widgetLabel",
                            ref: i,
                            onClick: m,
                            type: "button",
                            css: $o,
                            children: (0, W.tZ)("span", {
                                dangerouslySetInnerHTML: {
                                    __html: xt(g(t, 25))
                                }
                            })
                        })
                    }
                })
            };
            const Yo = e => {
                const t = (0, o.v9)(E.Xe),
                    [n, i] = (0, r.useState)(t !== y.views.closed);
                return e.children({
                    hasAnimationEnded: n,
                    onAnimationEnded: () => {
                        i((e => !e))
                    }
                })
            };
            Yo.propTypes = {
                children: X().func.isRequired
            };
            var Go = Yo;
            var Qo = () => {
                const e = (0, o.v9)(E.Xe),
                    t = (0, o.v9)(E.rW),
                    n = Boolean((0, un.PZ)().state),
                    i = e !== y.views.closed;
                return (0, W.tZ)(Go, {
                    children: r => {
                        let {
                            hasAnimationEnded: a,
                            onAnimationEnded: o
                        } = r;
                        return (0, W.BX)(W.HY, {
                            children: [(0, W.tZ)($, { in: e === y.views.fly,
                                classNames: "moveFromRight",
                                onExited: e === y.views.closed ? o : void 0,
                                timeout: 300,
                                children: (0, W.tZ)(Fo, {})
                            }), (0, W.tZ)($, { in: i && e !== y.views.fly && a,
                                classNames: "moveFromRight",
                                onExited: o,
                                timeout: 400,
                                children: (0, W.tZ)(Zo, {})
                            }), t && (0, W.tZ)($, { in: !i && e !== y.views.fly && !a,
                                classNames: "moveFromLeftLabel",
                                timeout: 300,
                                children: (0, W.tZ)(qo, {})
                            }), (0, W.tZ)($, { in: !i && !a,
                                classNames: "bubbleAnimationReturn",
                                timeout: 300,
                                onExited: o,
                                children: (0, W.tZ)(Wo, {})
                            }), (0, W.tZ)($, { in: i && a && !(e === y.views.chat && n),
                                classNames: "bubbleAnimation",
                                timeout: 300,
                                onExited: e === y.views.fly ? o : void 0,
                                children: (0, W.tZ)(Wo, {})
                            })]
                        })
                    }
                })
            };
            const Ko = () => {};
            var Jo = () => {
                const e = (0, o.v9)(E.Xe),
                    t = (0, o.v9)((e => e.isMobile)),
                    n = (0, o.v9)(E.rW),
                    i = Boolean((0, un.PZ)().state),
                    r = e !== y.views.closed;
                return t ? (0, W.BX)(W.HY, {
                    children: [(0, W.tZ)($, { in: e === y.views.fly,
                        classNames: "moveFromRight",
                        timeout: 300,
                        children: (0, W.tZ)(Fo, {})
                    }), (0, W.tZ)($, { in: r && e !== y.views.fly,
                        classNames: "moveFromRight",
                        timeout: 300,
                        children: (0, W.tZ)(Zo, {})
                    }), (0, W.tZ)($, { in: !(e === y.views.chat && i),
                        classNames: "bubbleAnimation",
                        children: (0, W.tZ)(Wo, {})
                    })]
                }) : (0, W.tZ)(Go, {
                    children: t => {
                        let {
                            hasAnimationEnded: a,
                            onAnimationEnded: o
                        } = t;
                        return (0, W.BX)(W.HY, {
                            children: [(0, W.tZ)($, { in: e === y.views.fly,
                                classNames: "moveFromRight",
                                timeout: 300,
                                onExited: e === y.views.closed ? o : Ko,
                                children: (0, W.tZ)(Fo, {})
                            }), (0, W.tZ)($, { in: r && e !== y.views.fly,
                                classNames: "moveFromRight",
                                timeout: 300,
                                onExited: o,
                                children: (0, W.tZ)(Zo, {})
                            }), n && (0, W.tZ)($, { in: !r && e !== y.views.fly && a,
                                classNames: "moveFromRightLabel",
                                onExited: o,
                                timeout: 300,
                                children: (0, W.tZ)(qo, {})
                            }), (0, W.tZ)($, { in: !(e === y.views.chat && i),
                                classNames: "bubbleAnimation",
                                onEntered: o,
                                children: (0, W.tZ)(Wo, {})
                            })]
                        })
                    }
                })
            };
            const es = () => {
                const e = (0, o.v9)(E.Xe),
                    t = (0, o.v9)(E.wq),
                    n = Boolean((0, un.PZ)().state),
                    i = e !== y.views.closed;
                return (0, W.tZ)(Go, {
                    children: r => {
                        let {
                            hasAnimationEnded: a,
                            onAnimationEnded: o
                        } = r;
                        return (0, W.BX)(W.HY, {
                            children: [(0, W.tZ)($, { in: e === y.views.fly && a,
                                classNames: "moveFromRight",
                                timeout: 300,
                                onExited: e === y.views.closed || e === y.views.fly ? o : void 0,
                                children: (0, W.tZ)(Fo, {})
                            }), (0, W.tZ)($, { in: i && e !== y.views.fly && a,
                                classNames: "moveFromRight",
                                timeout: 300,
                                onExited: o,
                                children: (0, W.tZ)(Zo, {})
                            }), (0, W.tZ)($, { in: !i && !a,
                                classNames: "" + (t && "left" === t ? "bubbleAnimationLeft" : "bubbleAnimation"),
                                timeout: 300,
                                onExited: o,
                                children: (0, W.tZ)(Wo, {
                                    isSidebarComponent: !0
                                })
                            }), (0, W.tZ)($, { in: i && a && !(e === y.views.chat && n),
                                timeout: 300,
                                classNames: "bubbleAnimation",
                                children: (0, W.tZ)(Wo, {})
                            })]
                        })
                    }
                })
            };
            es.defaultProps = {
                sidebarPosition: "right"
            };
            var ts = es;
            var ns = (0, o.$j)((e => ({
                view: (0, E.Xe)(e),
                isMobile: e.isMobile
            })))((e => {
                if ("left" === e.widgetPosition && e.isMobile) {
                    const t = e.view !== y.views.closed;
                    return (0, W.tZ)(Go, {
                        children: n => {
                            let {
                                hasAnimationEnded: i,
                                onAnimationEnded: r
                            } = n;
                            return (0, W.BX)(W.HY, {
                                children: [(0, W.tZ)($, { in: e.view === y.views.fly,
                                    classNames: "moveFromRight",
                                    onExited: e.view === y.views.closed ? r : void 0,
                                    timeout: 300,
                                    children: (0, W.tZ)(Fo, {})
                                }), (0, W.tZ)($, { in: t && e.view !== y.views.fly && i,
                                    classNames: "moveFromRight",
                                    onExited: r,
                                    timeout: 400,
                                    children: (0, W.tZ)(Zo, {})
                                }), (0, W.tZ)($, { in: !t && !i,
                                    classNames: "bubbleAnimationReturn",
                                    timeout: 300,
                                    onExited: r,
                                    children: (0, W.tZ)(Wo, {})
                                }), (0, W.tZ)($, { in: t && i,
                                    classNames: "bubbleAnimation",
                                    timeout: 300,
                                    onExited: e.view === y.views.fly ? r : void 0,
                                    children: (0, W.tZ)(Wo, {})
                                })]
                            })
                        }
                    })
                }
                return (0, W.BX)(W.HY, {
                    children: [(0, W.tZ)($, { in: e.view === y.views.fly,
                        classNames: "moveFromRight",
                        timeout: 300,
                        children: (0, W.tZ)(Fo, {})
                    }), (0, W.tZ)($, { in: e.view !== y.views.closed && e.view !== y.views.fly,
                        classNames: "moveFromRight",
                        timeout: 300,
                        children: (0, W.tZ)(Zo, {})
                    }), (0, W.tZ)($, { in: !0,
                        classNames: "bubbleAnimation",
                        children: (0, W.tZ)(Wo, {})
                    })]
                })
            }));
            var is = () => {
                const e = (0, r.useRef)(""),
                    t = (0, o.v9)((e => e.unreadMessages)),
                    n = (0, o.v9)((e => e.isPageVisible)),
                    i = (0, r.useRef)(null),
                    a = (0, r.useRef)(!1),
                    s = RegExp(`\\([0-9]+\\) ${(0,v.dW)("newMessageTitle",null,"New message")}$`);
                return (0, r.useEffect)((() => {
                    try {
                        e.current = window.parent.document.title
                    } catch (e) {
                        a.current = !0
                    }
                }), []), (0, r.useEffect)((() => {
                    if (a.current) return !1;
                    i.current && (clearInterval(i.current), i.current = null);
                    try {
                        !n && t ? i.current = setInterval((() => {
                            e.current === window.parent.document.title || s.test(window.parent.document.title) || (e.current = window.parent.document.title), window.parent.document.title === e.current ? window.parent.document.title = `(${t}) ${(0,v.dW)("newMessageTitle",null,"New message")}` : window.parent.document.title = e.current
                        }), 1e3) : s.test(window.parent.document.title) && (window.parent.document.title = e.current)
                    } catch (e) {}
                    return () => {
                        if (a.current) return !1;
                        clearInterval(i.current);
                        try {
                            s.test(window.parent.document.title) && (window.parent.document.title = e.current)
                        } catch (e) {}
                        return !0
                    }
                }), [n, t, s]), null
            };
            class rs extends r.Component {
                constructor() {
                    super(...arguments), (0, i.Z)(this, "onWindowVisibilityChange", (() => {
                        this.setVisibilityState() && this.props.dispatch((0, x.kpP)())
                    })), (0, i.Z)(this, "appAvariant", (() => this.props.isChatOnSite ? (0, W.tZ)(ns, {
                        widgetPosition: this.props.widgetPosition
                    }) : this.props.isSidebarEnabled ? (0, W.tZ)(ts, {}) : "left" === this.props.widgetPosition ? (0, W.tZ)(Qo, {}) : (0, W.tZ)(Jo, {})))
                }
                componentDidMount() {
                    try {
                        window.document.addEventListener("visibilitychange", this.onWindowVisibilityChange), this.setVisibilityState()
                    } catch (e) {
                        (0, g.G)(e)
                    }
                    window.tidioChatApi ? .trigger("ready"), window.tidioChatApi ? .trigger("setStatus", this.props.isProjectOnline ? "online" : "offline")
                }
                componentDidUpdate(e) {
                    e.widgetPosition !== this.props.widgetPosition && this.props.setWidgetPosition(this.props.widgetPosition)
                }
                componentWillUnmount() {
                    window.document.removeEventListener("visibilitychange", this.onWindowVisibilityChange)
                }
                setVisibilityState() {
                    const {
                        visibilityState: e
                    } = document;
                    return "visible" !== e ? (this.props.dispatch((0, x.h7r)(!1)), !1) : (this.props.dispatch((0, x.h7r)(!0)), !0)
                }
                render() {
                    return (0, W.BX)(W.HY, {
                        children: [!this.props.isSoundEnabled && (0, W.tZ)(is, {}), (0, W.tZ)(un.ZP, {
                            children: this.appAvariant()
                        })]
                    })
                }
            }
            var as = (0, o.$j)((e => ({
                widgetPosition: e.chatIframeStyles.widgetPosition,
                isSidebarEnabled: e.sidebarIframeStyles,
                isChatOnSite: (0, E.cn)(e),
                isProjectOnline: e.isProjectOnline,
                isSoundEnabled: e.isSoundEnabled
            })))(rs);
            const os = r.lazy((() => n.e(118).then(n.bind(n, 8863))));
            var ss = () => {
                const e = (0, o.I0)(),
                    t = (0, o.v9)(E.c$);
                return t ? (0, W.tZ)(a.ZP, {
                    title: "Tidio Chat - Iframe Modal",
                    style: {
                        width: "100%",
                        height: "100%",
                        position: "fixed",
                        top: "0",
                        left: "0",
                        zIndex: 2147483002,
                        border: 0
                    },
                    ...p.GK,
                    children: (0, W.tZ)(ln, {
                        onDidCatch: () => {
                            e((0, x.xZ_)(null))
                        },
                        children: (0, W.tZ)(r.Suspense, {
                            fallback: null,
                            children: (0, W.tZ)(os, {
                                url: t
                            })
                        })
                    })
                }) : null
            };
            const ds = r.lazy((() => n.e(686).then(n.bind(n, 9805)))),
                ls = () => (0, W.tZ)("div", {});
            var us = () => {
                    const e = (0, o.I0)(),
                        t = (0, o.v9)((e => e.popupImageSrc));
                    return "string" == typeof t && "" !== t ? (0, W.tZ)(a.ZP, {
                        title: "Tidio Chat - Image Popup",
                        style: {
                            width: "100%",
                            height: "100%",
                            position: "fixed",
                            top: "0",
                            left: "0",
                            zIndex: 2147483003,
                            border: 0
                        },
                        id: "tidio-chat-image-popup",
                        ...p.GK,
                        children: (0, W.tZ)(ln, {
                            onDidCatch: () => {
                                e((0, x.Bv7)())
                            },
                            children: (0, W.tZ)(r.Suspense, {
                                fallback: (0, W.tZ)(ls, {}),
                                children: (0, W.tZ)(ds, {
                                    imageSrc: t
                                })
                            })
                        })
                    }) : null
                },
                cs = n(7052);
            var ps = {
                name: "1rndfe2",
                styles: ".awesome-iframe{.onlyBubble,.bubbleWithLabel{#button{height:94px;width:94px;bottom:0;}}.widget-position-left{.widgetLabel{/*! @noflip */left:100px;}&.bubbleWithLabel .widgetLabel{/*! @noflip */left:91px;}}.widget-position-right{.widgetLabel{/*! @noflip */right:100px;}&.bubbleWithLabel .widgetLabel{/*! @noflip */right:91px;}}.bubbleWithLabel .widgetLabel{bottom:26px;}.widgetLabel{bottom:61px;transition-property:opacity;box-shadow:0 2px 20px 0 rgba(0, 18, 46, 0.18);}&.mobile{.chat+.chat-closed{bottom:0!important;}.flyMessage+.chat-closed{bottom:0!important;}}[class*='chatSize'] .chat-closed #dnd-indicator{transition:none;}.onlyBubble,.bubbleWithLabel{#new-message,#dnd-indicator{top:14px;right:14px;transition:none;}#new-message+#dnd-indicator{right:3px;}}.onlyBubbleLarge{#new-message,#dnd-indicator{top:14px;right:20px;transition:none;}#new-message+#dnd-indicator{right:10px;}}.onlyBubbleMedium{#new-message,#dnd-indicator{top:7px;transition:none;}}.onlyBubbleSmall{#new-message,#dnd-indicator{top:-3px;transition:none;right:3px;}#new-message+#dnd-indicator{right:-7px;}}.onlyBubbleSmall,.onlyBubbleMedium,.onlyBubbleLarge{#button{transition:none;transform:translateY(0);}}.onlyBubbleSmall #button{width:60px;height:60px;}.onlyBubbleMedium #button{width:80px;height:80px;}.onlyBubbleLarge #button{width:94px;height:94px;}}"
            };
            var fs = {
                name: "141wehk",
                styles: "html{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}body,input,textarea,select,button{font-family:'Mulish',sans-serif;letter-spacing:-0.24px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#06132b;}input::placeholder,textarea::placeholder{color:#8894ab;opacity:1;}input:focus,input:active,textarea:focus,textarea:active,select:focus,select:active{border:0;outline:0;}table{border-spacing:0;}i{user-select:none;}ul{list-style-type:none;}p{margin:0;}.emoji{width:20px;margin:0 2px -5px 2px;user-select:none;}.lang-rtl{/*! @noflip */direction:rtl;unicode-bidi:embed;}.widget-position-left{.chat,.start-group{right:48px;left:auto;.mobile &{/*! @noflip */right:0;}}#button{&:not(.sidebar){/*! @noflip */left:0px;/*! @noflip */right:auto;}&.bubbleAnimation-exit{right:0px;left:auto;}&.chat-open{right:0px;left:auto;.mobile &{right:0px;left:auto;}}}}@media print{.frame-content{display:none!important;}}"
            };
            var hs = {
                name: "oso6ob",
                styles: "@keyframes ripple{from{background:rgba(239, 242, 246, 0);transform:scale(0.5);}50%{background:rgba(239, 242, 246, 0.6);transform:scale(1);}to{background:rgba(239, 242, 246, 0);transform:scale(2);}}.mobile{-webkit-tap-highlight-color:rgba(0, 0, 0, 0);button.material-icons.exit-chat.mobile-close{border-radius:50%;position:absolute;top:10px;right:20px;margin:0;padding:3px;box-shadow:0 3px 6px rgba(0, 0, 0, 0.16),0 3px 6px rgba(0, 0, 0, 0.23);height:30px;width:30px;background:#fff;z-index:1;svg{fill:#000;}}.chat{width:100%;height:100%;bottom:0;background:#fff;display:flex;flex-direction:column;border-radius:0;right:0;left:auto;max-height:none;}.input-group{align-self:flex-end;textarea{padding-right:50px;}button,.button-url{margin-bottom:0;}}#conversation-group{max-height:none;flex:1 1 auto;overflow-y:scroll;-webkit-overflow-scrolling:touch;}#button{width:80px;height:100px;bottom:0;transition:transform 0.2s;transform:translateY(-12px);/*! @noflip */right:0px;/*! @noflip */left:auto;&.chat-open{right:0px;left:auto;}&.sidebar{width:50px;}&.chat-closed:not(.sidebar){&.mobile-size{&__small{transform:scale(0.6);}&__medium{transform:scale(0.8);}}}}#new-message{top:17px;right:13px;&+#dnd-indicator{right:2px;}&.active{animation:shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;}}#dnd-indicator{top:17px;right:13px;}button.ripple{touch-action:manipulation;&::after{content:'';position:absolute;height:50px;width:0px;top:calc(50% - 25px);background:rgba(239, 242, 246, 0);border-radius:50%;z-index:-1;will-change:transform,opacity;left:calc(50% - 25px);}&:not(:active)::after{animation:ripple 0.3s ease-in-out;transition:width 0.3s step-end;}&:active::after{width:50px;transition:width 0s step-start;}}.widget-position-left #button.chat-open{right:0;left:auto;}.chat-header{padding:8px 22px 0px;}.offline-message{margin-top:3px;padding:10px 28px 12px;span{font-size:13px;}}.avatars-wrapper{width:42px;height:42px;margin:0px 14px 0 0;}.chat h2{.top-heading{font-size:13px;margin-top:-1px;}&.oneline{line-height:49px;height:54px;}}}"
            };
            var ms = {
                name: "16rnz24",
                styles: ".chat,.start-group{width:372px;position:absolute;bottom:26px;border-radius:16px;pointer-events:auto;box-shadow:0 8px 22px 0 rgba(0, 18, 46, 0.16);overflow:hidden;z-index:1;right:48px;left:auto;&.chrome{box-shadow:0 8px 36px 0 rgba(0, 18, 46, 0.16);}&.safari{box-shadow:0 8px 30px 0 rgba(0, 18, 46, 0.16);}.chat-on-site &{box-shadow:0 8px 26px 0 rgba(0, 18, 46, 0.16);}.chat-in-preview &{box-shadow:0 8px 18px 0 rgba(0, 18, 46, 0.16);}}textarea{border:0;width:100%;font-size:17px;padding:20px 0 14px 0;resize:none;line-height:24px;overflow-x:hidden;-ms-overflow-style:none;}@keyframes shake{10%,90%{transform:translateX(1px);}20%,80%{transform:translateX(-1px);}30%,50%,70%{transform:translateX(2px);}40%,60%{transform:translateX(-2px);}}button,button.material-icons{background:none;border:0;color:inherit;font:inherit;line-height:normal;overflow:visible;padding:0;user-select:none;outline:none;cursor:pointer;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);}button.material-icons::-moz-focus-inner{border:0;padding:0;}button.link{border-bottom:1px solid #444;}"
            };
            var gs = {
                name: "1d52hgj",
                styles: ".emoji-mart,.emoji-mart *{box-sizing:border-box;line-height:1.15;}.emoji-mart{font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue',sans-serif;font-size:16px;display:inline-block;color:#222427;border:1px solid #d9d9d9;border-radius:5px;background:#fff;}.emoji-mart .emoji-mart-emoji{padding:6px;}.emoji-mart-bar{border:0 solid #d9d9d9;}.emoji-mart-bar:first-child{border-bottom-width:1px;border-top-left-radius:5px;border-top-right-radius:5px;}.emoji-mart-bar:last-child{border-top-width:1px;border-bottom-left-radius:5px;border-bottom-right-radius:5px;}.emoji-mart-anchors{display:flex;flex-direction:row;justify-content:space-between;padding:0 6px;color:#858585;line-height:0;}.emoji-mart-anchor{position:relative;display:block;flex:1 1 auto;color:#858585;text-align:center;padding:12px 4px;overflow:hidden;transition:color 0.1s ease-out;margin:0;box-shadow:none;background:none;border:none;}.emoji-mart-anchor:focus{outline:0;}.emoji-mart-anchor:hover,.emoji-mart-anchor:focus,.emoji-mart-anchor-selected{color:#464646;}.emoji-mart-anchor-selected .emoji-mart-anchor-bar{bottom:0;}.emoji-mart-anchor-bar{position:absolute;bottom:-3px;left:0;width:100%;height:3px;background-color:#464646;}.emoji-mart-anchors i{display:inline-block;width:100%;max-width:22px;}.emoji-mart-anchors svg,.emoji-mart-anchors img{fill:currentColor;max-height:18px;}.emoji-mart-scroll{overflow-y:scroll;overflow-x:hidden;height:270px;padding:0 6px 6px 6px;will-change:transform;}.emoji-mart-search{margin-top:6px;padding:0 6px;position:relative;}.emoji-mart-search input{font-size:16px;display:block;width:100%;padding:0.2em 0.6em;border-radius:25px;border:1px solid #d9d9d9;outline:0;}.emoji-mart-search input,.emoji-mart-search input::-webkit-search-decoration,.emoji-mart-search input::-webkit-search-cancel-button,.emoji-mart-search input::-webkit-search-results-button,.emoji-mart-search input::-webkit-search-results-decoration{-webkit-appearance:none;}.emoji-mart-search-icon{position:absolute;top:7px;right:11px;z-index:2;padding:2px 5px 1px;border:none;background:none;}.emoji-mart-category .emoji-mart-emoji span{z-index:1;position:relative;text-align:center;cursor:default;}.emoji-mart-category .emoji-mart-emoji:hover:before{z-index:0;content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:#f4f4f4;border-radius:100%;}.emoji-mart-category-label{z-index:2;position:relative;position:-webkit-sticky;position:sticky;top:0;}.emoji-mart-category-label span{display:block;width:100%;font-weight:500;padding:5px 6px;background-color:#fff;background-color:rgba(255, 255, 255, 0.95);}.emoji-mart-category-list{margin:0;padding:0;}.emoji-mart-category-list li{list-style:none;margin:0;padding:0;display:inline-block;}.emoji-mart-emoji{position:relative;display:inline-block;font-size:0;margin:0;padding:0;border:none;background:none;box-shadow:none;}.emoji-mart-emoji-native{font-family:'Segoe UI Emoji','Segoe UI Symbol','Segoe UI','Apple Color Emoji','Twemoji Mozilla','Noto Color Emoji','Android Emoji';}.emoji-mart-no-results{font-size:14px;text-align:center;padding-top:70px;color:#858585;}.emoji-mart-no-results-img{display:block;margin-left:auto;margin-right:auto;width:50%;}.emoji-mart-no-results .emoji-mart-category-label{display:none;}.emoji-mart-no-results .emoji-mart-no-results-label{margin-top:0.2em;}.emoji-mart-no-results .emoji-mart-emoji:hover:before{content:none;}.emoji-mart-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;}"
            };
            var bs = {
                name: "rsaj97",
                styles: ".dropdownFade-enter{opacity:0.01;top:62px;&.dropdownFade-enter-active{opacity:1;top:72px;}}.dropdownFade-exit{opacity:1;top:72px;&.dropdownFade-exit-active{opacity:0.01;top:62px;}}.botsListFade-enter{opacity:0;transform:translateY(-52px);&.botsListFade-enter-active{opacity:1;transform:translateY(-60px);}}.botsListFade-appear{opacity:0;transform:translateY(-52px);&.botsListFade-appear-active{opacity:1;transform:translateY(-60px);}}.botsListFade-exit{opacity:1;transform:translateY(-60px);&.botsListFade-exit-active{opacity:0;transform:translateY(-52px);}}.fade-enter{opacity:0.01;&.fade-enter-active{transition:all 0.3s;opacity:1;}}.fade-exit{opacity:1;transition:all 0.3s;&.fade-exit-active{opacity:0.01;}}.fade200-enter{opacity:0.01;&.fade200-enter-active{transition:opacity 0.2s;opacity:1;}}.fade200-exit{opacity:1;transition:opacity 0.2s;&.fade200-exit-active{opacity:0.01;}}.emojiFade-enter{opacity:0.01;bottom:calc(100% - 10px);&.emojiFade-enter-active{opacity:1;bottom:100%;transition:all 0.3s;}}.emojiFade-exit{opacity:1;bottom:100%;transition:all 0.3s;&.emojiFade-exit-active{opacity:0.01;bottom:calc(100% - 10px);}}.scale-enter{transform:scale(0.01);opacity:0;&.scale-enter-active{transform:scale(1);opacity:1;}}.scale-exit{transform:scale(1);opacity:1;&.scale-exit-active{transform:scale(0.01);opacity:0;}}#button.sidebar{transition:all 0.3s;&.bubbleAnimation-appear{/*! @noflip */right:-8px;opacity:0.01;}&.bubbleAnimation-appear-active{opacity:1;/*! @noflip */right:0;}&.bubbleAnimation-enter{/*! @noflip */right:-8px;opacity:0.01;}&.bubbleAnimation-enter-active{opacity:1;/*! @noflip */right:0;}&.bubbleAnimation-exit{opacity:1;/*! @noflip */right:0;}&.bubbleAnimation-exit-active{/*! @noflip */right:-8px;opacity:0.01;}}#button:not(.sidebar){&.bubbleAnimation-appear{right:-8px;opacity:0.01;&.bubbleAnimation-appear-active{opacity:1;right:0;transition:all 0.3s;}}&.bubbleAnimation-enter{right:-8px;opacity:0.01;&.bubbleAnimation-enter-active{opacity:1;right:0;transition:all 0.3s;}}&.bubbleAnimation-exit{opacity:1;right:0;transition:all 0.3s;.lang-rtl &{display:none;}&.bubbleAnimation-exit-active{right:-8px;opacity:0.01;}}}.widget-position-left #button:not(.sidebar){&.bubbleAnimation-appear{right:8px;opacity:0.01;&.bubbleAnimation-appear-active{opacity:1;right:0px;transition:all 0.3s;}}&.bubbleAnimation-enter{right:8px;opacity:0.01;&.bubbleAnimation-enter-active{opacity:1;right:0px;transition:all 0.3s;}}&.bubbleAnimation-exit{opacity:1;right:0px;transition:all 0.3s;&.bubbleAnimation-exit-active{right:8px;opacity:0.01;}}.mobile &{&.bubbleAnimation-appear{right:8px;opacity:0.01;&.bubbleAnimation-appear-active{opacity:1;right:0px;transition:all 0.3s;}}&.bubbleAnimation-enter{right:8px;opacity:0.01;&.bubbleAnimation-enter-active{opacity:1;right:0px;transition:all 0.3s;}}&.bubbleAnimation-exit{display:none;}&.bubbleAnimationReturn-exit-active{display:none;}}}.widget-position-left #button:not(.sidebar){&.bubbleAnimationReturn-appear{/*! @noflip */left:8px;opacity:0.01;&.bubbleAnimationReturn-appear-active{opacity:1;/*! @noflip */left:0px;transition:all 0.2s;}}&.bubbleAnimationReturn-enter{/*! @noflip */left:8px;opacity:0.01;&.bubbleAnimationReturn-enter-active{/*! @noflip */left:0px;opacity:1;transition:all 0.2s;}}&.bubbleAnimationReturn-exit{opacity:1;/*! @noflip */left:0px;transition:all 0.2s;&.bubbleAnimationReturn-exit-active{/*! @noflip */left:8px;opacity:0.01;}}}.mobile{.widget-position-left #button:not(.sidebar){&.bubbleAnimationReturn-exit{display:none;}}}.sidebar-position-left #button.sidebar{transition:all 0.3s;&.bubbleAnimationLeft-exit{opacity:1;/*! @noflip */left:0px;}&.bubbleAnimationLeft-exit-active{/*! @noflip */left:-8px;opacity:0.01;}&.bubbleAnimationLeft-appear{/*! @noflip */left:-8px;opacity:0.01;}&.bubbleAnimationLeft-appear-active{opacity:1;/*! @noflip */left:0px;}&.bubbleAnimationLeft-enter{/*! @noflip */left:-8px;opacity:0.01;}&.bubbleAnimationLeft-enter-active{opacity:1;/*! @noflip */left:0px;}}.moveFromRight-appear{right:40px;opacity:0.01;&.moveFromRight-appear-active{opacity:1;right:48px;transition:all 0.3s;}}.moveFromRight-enter{right:40px;opacity:0.01;&.moveFromRight-enter-active{opacity:1;right:48px;transition:all 0.3s;}}.moveFromRight-exit{opacity:1;right:48px;transition:all 0.3s;&.moveFromRight-exit-active{right:40px;opacity:0.01;}}.moveFromRightLabel-appear{/*! @noflip */right:92px;opacity:0.01;&.moveFromRightLabel-appear-active{opacity:1;/*! @noflip */right:100px;transition:all 0.3s;}}.moveFromRightLabel-enter{/*! @noflip */right:92px;opacity:0.01;&.moveFromRightLabel-enter-active{opacity:1;/*! @noflip */right:100px;transition:all 0.3s;}}.moveFromRightLabel-exit{opacity:1;/*! @noflip */right:100px;transition:all 0.3s;&.moveFromRightLabel-exit-active{/*! @noflip */right:92px;opacity:0.01;}}.moveFromLeftLabel-appear{/*! @noflip */left:92px;opacity:0.01;&.moveFromLeftLabel-appear-active{opacity:1;/*! @noflip */left:100px;transition:all 0.3s;}}.moveFromLeftLabel-enter{/*! @noflip */left:92px;opacity:0.01;&.moveFromLeftLabel-enter-active{opacity:1;/*! @noflip */left:100px;transition:all 0.3s;}}.moveFromLeftLabel-exit{opacity:1;/*! @noflip */left:100px;transition:all 0.3s;&.moveFromLeftLabel-exit-active{/*! @noflip */left:92px;opacity:0.01;}}body:not(.mobile) .widget-position-left .chat{&.moveFromRight-appear{right:40px;left:auto;opacity:0.01;&.moveFromRight-appear-active{opacity:1;right:48px;left:auto;transition:all 0.3s;}}&.moveFromRight-enter{right:40px;left:auto;opacity:0.01;&.moveFromRight-enter-active{opacity:1;right:48px;left:auto;transition:all 0.3s;}}&.moveFromRight-exit{opacity:1;right:48px;left:auto;transition:all 0.3s;&.moveFromRight-exit-active{right:40px;left:auto;opacity:0.01;}}}.sidebarAnimation-appear{right:40px;opacity:0.01;&.sidebarAnimation-appear-active{opacity:1;right:48px;transition:all 0.3s;}}.sidebarAnimation-enter{right:40px;opacity:0.01;&.sidebarAnimation-enter-active{opacity:1;right:48px;transition:all 0.3s;}}.sidebarAnimation-exit{opacity:1;right:48px;transition:all 0.3s;&.sidebarAnimation-exit-active{right:40px;opacity:0.01;}}.operatorTyping-enter{opacity:0.01;transform:translateY(10px);&.operatorTyping-enter-active{transform:translateY(0px);transition:all 0.3s;opacity:1;}}.operatorTyping-exit{display:none;}"
            };
            var vs = (0, l.iv)("*:focus{outline:thin dotted;}.chat{max-height:calc(100% - 47px);display:flex;flex-direction:column;}svg{width:24px;height:24px;}.chat-header{padding:24px 28px 0;background:linear-gradient(-61deg, #00e0d8, #201d8e);position:relative;z-index:4;flex:0 0 auto;#ic-minimize{padding:3px 0;/* @noflip */transform:rotate(270deg) translate(3px, 0);}a{color:currentColor;&:hover{text-decoration:none;}}}.chat ::-webkit-scrollbar{display:none;}.avatars-wrapper{width:52px;height:52px;margin:0px 18px 0 0;float:left;}.operators-avatar-2{padding-top:11px;}.operators-avatar-0{display:none;}.header-ava{width:52px;height:52px;border-radius:24px;background-size:cover;background-position:center;background-image:url(", rn, ");float:left;.mobile &{width:42px;height:42px;border-radius:19px;}.operators-avatar-2 &{width:30px;height:30px;margin-left:-6px;}.operators-avatar-3 &{width:28px;height:28px;&:last-child{margin-left:-5px;}&:first-child{clear:both;float:none;margin:0 auto;}&:not(:first-child){margin-top:-4px;}}.operators-avatar-4 &{width:28px;height:28px;&:nth-child(2n){margin-left:-5px;}&:nth-child(n + 3){margin-top:-4px;}}.mobile .operators-avatar-2 &{width:26px;height:26px;}.mobile .operators-avatar-3 &{width:23px;height:23px;&:first-child{margin-top:2px;}}.mobile .operators-avatar-4 &{width:23px;height:23px;&:nth-child(-n + 2){margin-top:2px;}}}.chat h2{font-size:22px;font-weight:600;color:currentColor;margin:4px 0 0 0;padding:0;display:inline-block;position:relative;max-width:calc(100% - 145px);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:bottom;.emoji{width:31px;height:31px;}&.oneline{margin-top:0;line-height:52px;min-height:52px;}&.twolines{margin-bottom:5px;}.top-heading{font-size:16px;display:block;line-height:15px;margin-top:4px;}}.heading-hover{position:absolute;color:#fff;background:rgba(0, 0, 0, 0.88);top:70px;font-size:13px;padding:10px 15px;z-index:3;width:auto;border-radius:8px;max-width:100%;opacity:0;transition:opacity 0.3s ease-in-out;left:50px;.chat h2:hover+&{opacity:1;}}#conversation-group{padding:0 28px;width:100%;height:457px;overflow-y:auto;overflow-x:hidden;-ms-overflow-style:none;background:#fff;transition:all 0.3s;max-height:457px;min-height:160px;flex:0 1 auto;&.ios-ipad{-webkit-overflow-scrolling:touch;width:calc(100% + 6px);/*! @noflip */margin-right:0;.lang-rtl &{/*! @noflip */margin-right:-6px;}}&.wix{height:357px;max-height:357px;}.uploadIconWrapper{position:absolute;display:flex;height:100%;width:100%;align-items:center;justify-content:center;top:0;left:0;right:0;z-index:3;span{font-size:19px;max-width:120px;text-align:center;color:#080f1a;line-height:1.3;}.ic_upload{fill:#287efc;width:73px;height:73px;margin-bottom:10px;margin-top:-5px;}}.upload-circle{width:230px;height:230px;border-radius:50%;background:rgba(182, 198, 229, 0.24);display:flex;flex-direction:column;align-items:center;justify-content:center;animation:scale-up 0.3s ease;position:relative;z-index:1;}&.drag-active::after{content:'';position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background:rgba(255, 255, 255, 0.92);z-index:2;animation:fade-in 0.3s ease;}.transition-container &{flex:1;}}.transition-container{height:399px;background:#fff;flex:0 1 auto;min-height:160px;position:relative;display:flex;flex-direction:column;#conversation-group{overflow-y:hidden;}}#messages{position:relative;-ms-overflow-style:none;margin-top:10px;width:100%;padding-bottom:24px;float:left;}#conversation-group #conversation-scroll{width:24px;height:calc(339px - 26px);position:absolute;right:2px;padding:0 12px 0 4px;}#conversation-group #conversation-scroll div{width:6px;margin:0 1px;background:#00173b;opacity:0;top:0;position:absolute;border-radius:4px;cursor:pointer;transition:opacity 0.1s ease-in-out,width 0.1s ease-in-out,margin 0.1s ease-in-out;z-index:2;user-select:none;}#conversation-group:hover #conversation-scroll div{body:not(.mobile) &{opacity:0.16;}}#conversation-group #conversation-scroll div:hover{body:not(.mobile) &{opacity:0.32;width:8px;margin:0;}}hr{margin:0;border:0;border-bottom:1px solid #dbdfe6;}input,textarea{&.disabled{cursor:not-allowed;color:#8894ab;}}button,label{&.material-icons{position:relative;z-index:1;margin:15px 0 8px 11px;float:right;svg{fill:#8894ab;&#ic-minimize,&.options-icon{fill:currentColor;}}&::before{content:'';position:absolute;background:#eff2f6;width:40px;height:40px;border-radius:50%;z-index:-1;transition:all 0.16s ease-in-out;transform:scale(0);top:calc(50% - 22px);left:calc(50% - 20px);}&:hover::before{body:not(.mobile) &{transform:scale(1);}}&:focus{svg{fill:currentColor;}svg.bots-icon{fill:#007dfc;}}&.disabled svg,&.disabled:focus svg{fill:#c9cbd8;}&.options,&.exit-chat{z-index:unset;.mobile &{margin:5px -10px -2px 1px;padding:10px;}svg{fill:currentColor;width:26px;height:26px;}&::before{background:rgba(0, 36, 92, 0.16);}&:focus::before,&:hover::before{body:not(.mobile) &{transform:scale(1);}}}&.exit-chat{margin-right:-3px;.mobile &{margin-right:-13px;}}}}body:not(.mobile) .footer-bottom .bots-button{margin-right:22px;&::after{content:'';display:block;position:absolute;top:2px;right:-12px;height:24px;width:1px;background:#dfe3e9;}}.input-group{padding:0 28px 6px;width:100%;position:relative;background:#fff;z-index:3;flex:0 0 auto;&.drag-active .drag-active-wrapper::after{content:'';position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background:rgba(255, 255, 255, 0.7);z-index:1;animation:fade-in 0.3s ease;}.footer-input-wrapper,.footer-icons-wrapper{transition:all 0.5s ease-in-out;opacity:1;transform:translateY(0);&.hidden{transform:translateY(10px);pointer-events:none;opacity:0;}}.material-icons{svg{width:26px;height:26px;}&:hover{svg{fill:#007dfc;}&::before{background-color:rgba(0, 125, 252, 0.12);}}}.footer-bottom{height:42px;position:relative;button{float:left;margin:0 16px 14px 0;}}}.emoji-wrapper{height:215px;position:absolute;overflow:hidden;width:340px;bottom:100%;z-index:10;left:18px;}.emoji-mart{border:0;position:absolute;width:100%!important;height:100%;right:0;input:focus{border:1px solid #d9d9d9;}&-scroll{height:140px;}.emoji-mart-emoji{cursor:pointer;span{cursor:pointer;}}}.emoji-mart-anchor{-ms-flex:1 1 auto;}.no-start-message{.emoji-wrapper{height:175px;}.emoji-mart{&-scroll{height:100px;}}}.options-dropdown,.bots-dropdown{position:absolute;top:72px;background:#fff;border-radius:8px;box-shadow:0 6px 32px 0 rgba(0, 18, 46, 0.16);padding:12px 6px;z-index:6;transition:all 0.2s ease-in-out;right:24px;ul{margin:0;padding:0;li{border-radius:6px;display:flex;&:nth-of-type(2) button{svg{fill:#ffb926;}}}}li button{padding:8px 16px;display:flex;margin:0;position:initial;float:initial;width:100%;border-radius:6px;&:hover,&:focus{body:not(.mobile) &{background:#eff2f6;}}svg,&:focus svg{fill:#8894ab;height:22px;width:22px;}span{margin-left:10px;color:#06132b;}&::before{content:none;}}}.bots-dropdown{top:auto;bottom:0;transform:translateY(-60px);max-height:275px;overflow-y:auto;z-index:11;right:auto;left:0px;button.material-icons{margin:0;}ul{li{padding:0;span{cursor:pointer;padding:8px 16px;display:flex;align-items:center;width:100%;svg{margin-right:10px;}&.bot-disabled{cursor:not-allowed;color:#8894ab;}}}}ul.bots-cancel{span{color:#0ab6ff;display:flex;align-items:center;}svg{fill:red;margin-right:10px;}}}.offline-message{margin:18px -28px 0px;color:currentColor;width:calc(100% + 56px);padding:14px 28px 7px;position:relative;background-size:100% calc(100% + 12px);z-index:1;.no-clip-path &{padding:14px 28px 20px;&:after{content:'';position:absolute;width:calc(100% + 10px);bottom:-8px;left:-5px;border-image-source:url(", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzIgMTUiPgogIDxwYXRoIGQ9Ik0zNDkuOCAxLjRDMzM0LjUuNCAzMTguNSAwIDMwMiAwaC0yLjVjLTkuMSAwLTE4LjQuMS0yNy44LjQtMzQuNSAxLTY4LjMgMy0xMDIuMyA0LjctMTQgLjUtMjggMS4yLTQxLjUgMS42Qzg0IDcuNyA0MS42IDUuMyAwIDIuMnY4LjRjNDEuNiAzIDg0IDUuMyAxMjguMiA0LjEgMTMuNS0uNCAyNy41LTEuMSA0MS41LTEuNiAzMy45LTEuNyA2Ny44LTMuNiAxMDIuMy00LjcgOS40LS4zIDE4LjctLjQgMjcuOC0uNGgyLjVjMTYuNSAwIDMyLjQuNCA0Ny44IDEuNCA4LjQuMyAxNS42LjcgMjIgMS4yVjIuMmMtNi41LS41LTEzLjgtLjUtMjIuMy0uOHoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==", ");border-image-slice:0 0 100%;border-image-width:0 0 15px;border-image-repeat:stretch stretch;border-bottom:solid 15px;border-top:0;border-left:0;border-right:0;}}span{z-index:2;position:relative;display:inline-block;font-size:16px;&.online{padding-left:20px;&:before{content:'';display:block;width:8px;height:8px;position:absolute;top:calc(50% - 4px);background:#58b743;border-radius:50%;left:0;}}}}.emoji-switch.active svg{fill:currentColor;}.bots-animation{svg{will-change:transform;animation:botsAnimation 3s;animation-iteration-count:1;}.pulse,.pulse-white{will-change:transform;display:block;width:26px;height:26px;position:absolute;top:0;left:0;border-radius:50%;animation-iteration-count:1;}.pulse{background:#c9cbd8;z-index:-4;animation:waterPulse 3s;&.animation-delay{z-index:-2;}}.pulse-white{background:#fff;z-index:-3;animation:waterPulseWhite 3s;&.animation-delay{z-index:-1;}}.animation-delay{animation-delay:0.8s;}}@keyframes waterPulseWhite{from{transform:scale(0.7);}29%{transform:scale(0.7);}60%{transform:scale(2.8);}}@keyframes waterPulse{from{opacity:0;transform:scale(0.8);}19%{opacity:0.3;}23%{transform:scale(0.8);}24%{opacity:0.5;transform:scale(0.8);}31%{opacity:0.4;}55%{opacity:0.1;transform:scale(2.8);}100%{opacity:0;}}@keyframes botsAnimation{12%{transform:scale(1);}20%{transform:scale(1.2);}25%{transform:scale(0.9);}29%{transform:scale(1.05);}31%{transform:scale(1);}}@keyframes scale-up{0%{transform:scale(0.8);}100%{transform:scale(1);}}@keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}.chat-in-preview--tour{.exit-chat,.options-icon{opacity:0.3;}.input-group{opacity:0.4;}}", "");
            var ys = (0, l.iv)(".message{padding:10px 16px;border-radius:20px;margin:2px 0;font-size:15px;line-height:20px;word-wrap:break-word;display:inline-block;max-width:85%;clear:both;position:relative;transition:margin 0.28s ease-in-out;&.timestamp-visible{margin-bottom:28px;}&.rating-visible{margin-bottom:35px;}span.message-content{white-space:pre-line;}.message-content{ul{list-style-type:disc;}ol{list-style-type:decimal;}ul,ol{margin:12px 0;padding-left:16px;}li{padding-left:4px;margin-bottom:8px;}}}.rating-visible+.message,.rating-visible+.slideshow{margin-top:10px;}.message-visitor{color:#fff;background:linear-gradient(332deg, #21dbdb, #2979ff);float:right;&+.message-operator{margin-top:9px;}span a{color:currentColor;}&.not-delivered{border:1px solid #f0f2f7;background:#fff;color:#8894ab;margin-bottom:22px;white-space:nowrap;padding:10px 15px;.resend-message{position:absolute;bottom:-22px;font-size:12px;right:0;}}}.message-operator{color:#06132b;background:#f0f2f7;float:left;&.message-form{width:100%;max-width:none;padding:16px;}span a{color:#06132b;}&+.message-visitor{margin-top:9px;}&.timestamp-visible~.bots-quick-replies{padding-top:0;}&.message-with-buttons,.message-with-buttons,&.bots-quick-replies{padding-left:0;padding-right:0;padding-bottom:0;transition:padding 0.28s ease-in-out;&.buttons-hidden{padding-bottom:10px;}>span{padding:0 16px;display:inline-block;word-break:break-word;}.button-wrapper{background:#fff;width:100%;margin-top:10px;border:1px solid #ebeef0;border-bottom-left-radius:20px;border-bottom-right-radius:20px;border-top:0;position:relative;}.button-icon{display:flex;justify-content:center;transition:background-color 0.2s ease-in-out;padding:8px 16px;border-bottom-left-radius:20px;border-bottom-right-radius:20px;cursor:pointer;outline:none;& svg{fill:#3f88f6;width:20px;height:20px;}&:hover{background-color:#f6f8fb;}}button,.button-url{margin:0 auto;min-width:100%;display:block;font-size:16px;line-height:19px;padding:8px 16px;border-bottom:1px solid #ebeef0;color:#007dfc;background:transparent;position:relative;z-index:2;outline:none;word-break:break-word;&:hover{text-decoration:underline;}}}.message-with-buttons,&.message-with-buttons{button:last-child,.button-url:last-child{border-bottom:0;}}&.bots-quick-replies{width:85%;background-color:#fff;margin-top:0;float:right;.button-wrapper{margin-top:0;display:flex;flex-wrap:wrap;justify-content:flex-end;width:100%;border:none;}button{font-size:15px;padding:10px 14px;border:1px solid;border-radius:20px;margin:3px;min-width:inherit;}span{text-align:left;overflow:hidden;&.line-clamp{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;}}}&.buttons-message{padding:0;max-width:90%;.message-with-buttons{max-width:100%;&-text{padding:9px 16px 1px;line-height:19px;white-space:pre-line;}}}&.coupon-code-message{padding:10px 14px 14px;width:100%;}&.message-alert{border:2px solid #dee3e8;background:#fff!important;margin-bottom:22px;position:relative;svg.alert-icon{height:20px;width:20px;fill:red;position:absolute;top:-5px;background:#fff;right:-5px;}}&.typing-indicator{text-align:left;span{height:4px;width:4px;margin:11px 1px 0 1px;background-color:#000;display:inline-block;border-radius:50%;opacity:0.4;animation:blink 1.3s linear infinite;&:first-child{margin-left:4px;}&:nth-child(2){animation-delay:-1.1s;}&:nth-child(3){animation-delay:-0.9s;}}}.button-url{font-size:16px;line-height:19px;padding:8px 16px;text-align:center;}.button-url__anchor{text-decoration:none;color:#007dfc;&:hover{text-decoration:underline;}}@keyframes blink{0%,60%,100%{transform:initial;}30%{transform:translateY(-5px);}}}.message .emoji{margin:0 1px 0 2px;vertical-align:-5px;}.messageTimestamp{bottom:-24px;font-size:12px;color:#8894ab;position:absolute;transition:all 0.2s;white-space:nowrap;.message-operator &{height:23px;display:flex;align-items:center;top:calc(100% + 4px);left:12px;}.message-visitor &{right:12px;}svg{width:16px;height:16px;margin-right:4px;}}.shake{animation:shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;}.pre-chat,.rate-comment,.always-online{max-width:95%;.field-wrapper{position:relative;left:0;&.field-wrapper-with-error{input,textarea{border-color:#f6303a;}}}svg{width:19px;height:19px;position:absolute;top:8px;fill:green;left:9px;&#ic_arrow{fill:#349ef3;transform:rotate(45deg);}&#ic_close{fill:red;}}input,textarea{display:block;width:100%;border:0;font-size:16px;padding:6px 7px 7px 35px;border-radius:5px;margin:10px 0 5px;&[type='checkbox']{position:absolute;width:auto;display:inline-block;margin:0;top:9px;left:11px;padding:0;.mobile .firefox &{outline:solid 1px rgba(108, 125, 159, 0.24);}}}label{font-size:12px;line-height:14px;text-align:justify;display:inline-block;min-height:24px;margin-left:5px;padding:10px 5px 0 31px;a{word-break:break-all;}}}.timestamp-avatar{width:23px;height:23px;position:absolute;top:0;background-position:center;background-size:cover;border-radius:25px;background-image:url(", rn, ");padding-left:23px;left:0;&+span{margin-left:30px;}}.timestamp-operator{margin-right:2px;}.loader-icon{&.circular{animation:rotate 2s linear infinite;height:100%;transform-origin:center center;position:absolute;top:0;bottom:0;margin:0;left:10px;right:0;}.path{stroke-dasharray:1,200;stroke-dashoffset:0;animation:dash 1.5s ease-in-out infinite;stroke-linecap:round;}@keyframes rotate{100%{transform:rotate(360deg);}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0;}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px;}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px;}}}.message-upload{max-width:75%;span{padding-left:25px;}#ic_download{position:absolute;top:50%;transform:translateY(-50%);}&.message-operator{#ic_download{right:-35px;}}&.message-visitor{#ic_download{left:-35px;}}a{display:flex;justify-content:space-between;align-items:center;&:hover>svg{opacity:1;}>svg{opacity:0;fill:#bfc5d7;}}&.message-image{background:none;padding:0;span{padding-left:0;}img{width:100%;border-radius:20px;}}&.message-file{span{display:inline-block;word-break:break-all;padding-left:0;}a{color:inherit;text-decoration:none;display:inline-block;padding-left:35px;svg{position:absolute;top:50%;transform:translateY(-50%);left:17px;}}}}.attachment-img{background:white;color:white;border:none;outline:none;}.history-button-wrapper{clear:both;width:100%;float:left;}.history-button{margin:0 auto;display:flex;align-items:center;background:#fff;margin-bottom:20px;letter-spacing:-0.1px;text-align:center;font-size:12px;font-weight:600;color:#8894ab;border-radius:14px;border:solid 1px rgba(136, 148, 171, 0.24);padding-right:12px;svg{fill:#8894ab;width:19px;margin-right:5px;}&:hover{color:#2a7dfb;svg{fill:#2a7dfb;}}}", "");
            var ws = [ms, {
                name: "nq3p9h",
                styles: "body{overflow:hidden;margin:0;}svg{fill:#fff;transition:all 0.2s ease-in-out;}#button{position:absolute;width:112px;height:140px;bottom:12px;display:flex;align-items:center;justify-content:center;pointer-events:none;z-index:1;/*! @noflip */right:0;&:not(.sidebar){.buttonWave{position:absolute;z-index:-1;width:60px;height:60px;}.buttonWave:after{content:'';position:absolute;width:60px;height:60px;border-radius:50%;background-color:#147fff;opacity:0.5;}&.clicked .buttonWave:after{animation:buttonWave 0.5s ease-out;}}&.chat-open:not(.sidebar){right:0;left:auto;}button{&.disabled{i.type1 svg{fill:#fff;}}i{height:26px;width:26px;position:absolute;opacity:0;transition:all 0.2s ease-in-out;display:flex;align-items:center;justify-content:center;&.active{opacity:1;}&.type1{svg{fill:currentColor;}&::after{content:'';position:absolute;width:68px;height:68px;border-radius:32px;background:#fff;transition:all 0.2s ease-in-out;transform:scale(0);}&.for-opened{width:31px;height:28px;svg{width:28px;height:28px;/*! @noflip */margin-left:3px;}}}&.type2{width:32px;height:32px;svg{width:32px;height:32px;fill:currentColor;transform:scale(0);}}&.for-closed{/*! @noflip */transform:translateX(-10px);&.active{/*! @noflip */transform:translateX(0);}}&.for-opened{/*! @noflip */transform:translateX(10px);&.active{/*! @noflip */transform:translateX(0);}}}&:not(.disabled){&:hover,&:focus{i.type1{body:not(.mobile) &{svg{transform:scale(1.4);}}&::after{body:not(.mobile) &{transform:scale(1);}}}i.type2{body:not(.mobile) &{svg{transform:scale(1);}}}}}}.sidebar-content:hover{~#button-body{body:not(.mobile) &{transform:scale(1.15);}}~button{i.type1{body:not(.mobile) &{svg{transform:scale(1.4);}}&::after{body:not(.mobile) &{transform:scale(1);}}}i.type2{body:not(.mobile) &{svg{transform:scale(1);}}}}}&.sidebar{width:50px;pointer-events:auto;svg{width:15px;height:15px;}.sidebar-position-left &{/*! @noflip */left:0;/*! @noflip */right:auto;.sidebar-content{/*! @noflip */transform-origin:left top;/*! @noflip */transform:rotate(270deg);/*! @noflip */left:0;/*! @noflip */right:auto;/*! @noflip */border-bottom-right-radius:4px;/*! @noflip */border-bottom-left-radius:28px;/*! @noflip */padding:0 20px 0 30px;}#button-body{/*! @noflip */left:7px;}}.sidebar-content{background:#313fa0;color:#fff;/*! @noflip */padding:0 30px 0 20px;font-size:14px;line-height:30px;height:30px;font-weight:700;position:relative;overflow:hidden;/*! @noflip */border-bottom-right-radius:28px;/*! @noflip */border-bottom-left-radius:4px;/*! @noflip */transform:rotate(90deg);/*! @noflip */transform-origin:right top;position:absolute;bottom:0;/*! @noflip */right:0;white-space:nowrap;max-width:400px;span{display:inline-block;transform:rotate(180deg);max-width:265px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}&:hover{cursor:pointer;}}#button-body{position:absolute;/*! @noflip */right:7px;bottom:20px;width:32px;height:32px;box-shadow:0 6px 20px 0 rgba(0, 18, 46, 0.24);}button{i{width:15px;height:15px;&.type1{&::after{width:30px;height:30px;border-radius:28px;}}&.type2{svg{width:15px;height:15px;}}}}}}#button-body{width:60px;height:60px;border-radius:28px;display:inherit;align-items:center;justify-content:center;pointer-events:initial;background-size:130% 130%;transition:all 0.2s ease-in-out;position:relative;color:#007dfc;&::before{content:'';transition:opacity 0.5s ease-in-out;position:absolute;top:-1px;right:-1px;bottom:-1px;left:-1px;opacity:0;border-radius:50%;background-color:#c6ccdc;}&.disabled{cursor:not-allowed;color:#c6ccdc;&::before{opacity:1;}}&:not(.disabled) &{&:hover,&:focus{outline:none;body:not(.mobile) &{transform:scale(1.1);}}}}#new-message,#dnd-indicator{position:absolute;top:37px;font-weight:700;color:#fff;right:23px;pointer-events:none;border-radius:10px;display:flex;justify-content:center;align-items:center;width:20px;height:20px;}#new-message{font-size:12px;background:#f72e38;z-index:2;line-height:1;&+#dnd-indicator{right:12px;}&.active{animation:shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;}}#dnd-indicator{background:#374ca6;z-index:1;svg{width:12px;height:12px;}}@keyframes buttonWave{99%{transform:scale(2);opacity:0;}100%{transform:scale(1);opacity:0;}}"
            }, gs, vs, (0, l.iv)(".start-group{display:flex;flex-direction:column;.h2-banner{font-weight:400;font-size:42px;margin:6px 0 16px 0;padding-top:4px;display:inline-block;position:relative;max-width:calc(100% - 90px);line-height:50px;word-wrap:break-word;white-space:pre-line;-webkit-text-stroke:0.4px;padding-left:14px;.emoji{width:31px;height:31px;}}.operators{display:flex;position:absolute;top:84px;flex-direction:column;height:calc(100% - 84px);width:66px;right:42px;>div:hover{span{opacity:1;}&:not(:first-child){.ava48:hover{transform:translate3d(0, -20px, 0);}}}}.ava48{width:66px;height:66px;border-radius:31px;background-size:cover;background-position:center;background-image:url(", rn, ");position:absolute;top:0;left:0;transition:transform 0.2s ease-in-out;will-change:transform;transform:translate3d(0, 0px, 0);span{background:#fff;padding:6px 8px;border-radius:2px;box-shadow:0 2px 8px 0 rgba(0, 18, 46, 0.32);font-size:13px;position:absolute;opacity:0;white-space:nowrap;transition:all 0.16s ease-in-out;right:calc(100% + 10px);top:50%;transform:translateY(-50%);color:#06132b;}}button.i-banner{svg{fill:currentColor;}&::before{background:rgba(0, 36, 92, 0.16);width:38px;height:38px;top:calc(50% - 19px);left:calc(50% - 19px);}}.get-started{width:100%;overflow:hidden;z-index:3;position:relative;button{color:#3f88f3;display:block;width:100%;padding:1em 0;background:#fff;border-radius:0;font-size:19px;transition:color 0.2s ease-in-out;margin:0;}}.input-group{z-index:4;}}.banner{width:100%;height:100%;position:absolute;top:0;left:0;border-radius:8px 8px 0 0;overflow:hidden;opacity:0.16;background-size:cover;}.start-message{color:currentColor;font-size:16px;margin:0 0 32px 0;line-height:22px;position:relative;padding-left:14px;padding-right:100px;z-index:2;}", ""), bs, ys, hs, ps, fs];
            const xs = {
                zIndex: "z-index",
                transition: "transition",
                background: "background"
            };
            (0, m.f)().markDuration("widget_total_load_in_ms", "end");
            const Cs = e => {
                try {
                    e && Object.keys(xs).forEach((t => {
                        e.style.setProperty(xs[t], e.style[t], "important")
                    }))
                } catch (e) {}
            };

            function Es(e, t, n) {
                "mobile" === t ? setTimeout((() => {
                    e.style.setProperty("bottom", n, "important")
                }), 0) : "onlySidebar" === t ? setTimeout((() => {
                    e.style.setProperty("bottom", n, "important"), e.style.setProperty("transform", "translateY(50%)", "important")
                }), 0) : e.style.setProperty("bottom", n)
            }
            const ks = (0, p.t7)(),
                As = () => {
                    u.OH.assign({
                        skipAnimation: "visible" !== document ? .visibilityState
                    })
                };
            class Zs extends r.Component {
                constructor(e) {
                    super(e), (0, i.Z)(this, "styleCache", (0, s.Z)({
                        key: "tidio",
                        stylisPlugins: (0, v.dZ)() ? [c.ZP] : [],
                        container: this.props.iframeDocument.head
                    })), (0, i.Z)(this, "state", {
                        isRendered: !1
                    }), (0, i.Z)(this, "setImportantPositioningForMobileAndSidebar", (() => {
                        "mobile" === this.props.iframeView ? setTimeout((() => {
                            this.props.iframeWindow.frameElement && this.props.iframeWindow.frameElement.style.setProperty("bottom", this.getBottomOffset(), "important")
                        }), 0) : "onlySidebar" === this.props.iframeView ? setTimeout((() => !!this.props.iframeWindow.frameElement && (this.props.iframeWindow.frameElement.style.setProperty("bottom", "50%", "important"), this.props.iframeWindow.frameElement.style.setProperty("transform", "translateY(50%)", "important"), !0)), 0) : this.props.iframeWindow.frameElement.style.setProperty("bottom", this.getBottomOffset())
                    })), (0, i.Z)(this, "registerClickForAutoPlayPermissions", (() => {
                        try {
                            const e = () => {
                                (0, b.oE)(p.L0), window.parent.document.removeEventListener("click", e, !0), window.parent.document.removeEventListener("touchend", e, !0), this.props.iframeDocument.removeEventListener("click", e, !0), this.props.iframeDocument.removeEventListener("touchend", e, !0)
                            };
                            ((0, p.tq)() || "safari" === p.L0 || "mobile safari" === p.L0) && (window.parent.document.addEventListener("click", e, !0), window.parent.document.addEventListener("touchend", e, !0), this.props.iframeDocument.addEventListener("click", e, !0), this.props.iframeDocument.addEventListener("touchend", e, !0))
                        } catch (e) {
                            (0, g.G)(e)
                        }
                    })), (0, f.xB)(this.props.iframeDocument, this.props.iframeWindow)
                }
                componentDidMount() {
                    Cs(this.props.iframeWindow.frameElement), Es(this.props.iframeWindow.frameElement, this.props.iframeView, this.getBottomOffset()), this.props.isSoundEnabled && this.registerClickForAutoPlayPermissions(), this.setImportantPositioningForMobileAndSidebar(), document ? .addEventListener("visibilitychange", As), u.OH.assign({
                        requestAnimationFrame: this.props.iframeWindow.requestAnimationFrame,
                        cancelAnimationFrame: this.props.iframeWindow.cancelAnimationFrame
                    });
                    try {
                        this.props.iframeDocument.addEventListener("error", (e => {
                            if (e ? .target ? .matches("img.emoji") && e.target.parentNode) {
                                const t = e.target.closest(".message"),
                                    n = t ? .querySelector(".message-content");
                                if (e.target.parentNode.replaceChild(this.props.iframeDocument.createTextNode(e.target.alt), e.target), t && n && this.props.iframeWindow) {
                                    const e = 35;
                                    this.props.iframeWindow.requestAnimationFrame((() => {
                                        t.style.width = `${n.offsetWidth+e}px`
                                    }))
                                }
                            }
                        }), !0)
                    } catch (e) {
                        (0, g.G)(e)
                    }
                    setTimeout((() => {
                        this.setState({
                            isRendered: !0
                        })
                    }), 0)
                }
                componentDidUpdate(e) {
                    e.iframeView !== this.props.iframeView && (Cs(this.props.iframeWindow.frameElement), this.setImportantPositioningForMobileAndSidebar(), Es(this.props.iframeWindow.frameElement, this.props.iframeView, this.getBottomOffset()))
                }
                componentWillUnmount() {
                    document.removeEventListener("visibilitychange", As)
                }
                getBottomOffset() {
                    const {
                        isAwesomeIframe: e,
                        iframeMode: t,
                        iframeView: n
                    } = this.props;
                    return "onlySidebar" === n ? "50%" : e && h.yl ? .[t] && h.yl[t].bottom || 0
                }
                render() {
                    return (0, W.BX)(d.C, {
                        value: this.styleCache,
                        children: [(0, W.tZ)(l.xB, {
                            styles: ws
                        }), (0, W.tZ)(cs.Z, {}), this.state.isRendered && (0, W.tZ)(as, {
                            setWidgetPosition: this.props.setWidgetPosition
                        })]
                    })
                }
            }
            const Ss = (0, w.Z)(Zs);
            class Ms extends r.Component {
                constructor() {
                    var e;
                    super(...arguments), e = this, (0, i.Z)(this, "getIframeSize", (() => ({ ...(0, h.P0)(this.props.iframeView),
                        ..."onlySidebar" === this.props.iframeView ? {
                            left: "left" === this.props.sidebarPosition ? "0" : void 0,
                            right: "right" === this.props.sidebarPosition ? "0" : void 0
                        } : {}
                    }))), (0, i.Z)(this, "state", {
                        style: {
                            display: "block",
                            border: "none",
                            position: !this.props.isChatOnSite || (0, p.tq)() || (0, p.$U)() ? "fixed" : "inherit",
                            top: "auto",
                            bottom: 0,
                            left: "auto",
                            right: "auto",
                            ...this.getIframeSize(),
                            opacity: 0,
                            [this.props.widgetPosition]: 0,
                            colorScheme: "none",
                            background: "none transparent",
                            margin: 0,
                            maxHeight: "100vh",
                            maxWidth: "100vw",
                            transform: "translateY(0)",
                            transition: "none",
                            visibility: "visible",
                            zIndex: 999999999
                        }
                    }), (0, i.Z)(this, "ref", null), (0, i.Z)(this, "getAwesomeIframeOffset", ((e, t) => {
                        let n = 0;
                        return h.yl ? .[e] ? .[t] && (n = h.yl[e][t]), n
                    })), (0, i.Z)(this, "setIframeStyle", (function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
                        e.setState({
                            style: t
                        }, n)
                    })), (0, i.Z)(this, "getCurrentIframeStyle", (() => ({ ...this.state.style
                    }))), (0, i.Z)(this, "mergeWithCurrentStyles", (function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
                        e.setIframeStyle({ ...e.getCurrentIframeStyle(),
                            ...t
                        }), n()
                    })), (0, i.Z)(this, "setWidgetPosition", ((e, t) => {
                        const n = this.getCurrentIframeStyle(),
                            i = this.getIframeMode();
                        let r = 0;
                        this.props.isAwesomeIframe && (r = this.getAwesomeIframeOffset(i, e)), this.setIframeStyle({ ...n,
                            right: "auto",
                            left: "auto",
                            [e]: r
                        }, t)
                    })), (0, i.Z)(this, "getIframeAwesomeStyle", (() => {
                        const {
                            widgetPosition: e,
                            isAwesomeIframe: t
                        } = this.props, n = {};
                        if (t) {
                            const t = this.getIframeMode(),
                                {
                                    width: i,
                                    height: r
                                } = h.yl ? .[t] || {};
                            if (i && (n.width = i), r && (n.height = r), n[e] = this.getAwesomeIframeOffset(t, e), n.borderRadius = (0, p.tq)() ? 0 : h.sz, ks) {
                                const {
                                    bottom: e,
                                    right: i
                                } = h.yl ? .[t] || {};
                                n.bottom = e, n.right = i
                            }
                        }
                        return n
                    })), (0, i.Z)(this, "onIframeMount", (() => {
                        this.setWidgetPosition(this.props.widgetPosition, this.animateOpacity)
                    })), (0, i.Z)(this, "animateOpacity", (() => {
                        this.mergeWithCurrentStyles({
                            display: "block"
                        }, (() => {
                            setTimeout((() => {
                                this.mergeWithCurrentStyles({
                                    opacity: 1
                                })
                            }), 0)
                        }))
                    })), (0, i.Z)(this, "onIframeRef", (e => {
                        this.ref = e;
                        const {
                            widgetPosition: t,
                            isAwesomeIframe: n,
                            dispatch: i
                        } = this.props, r = (0, C.Hr)("widget_position");
                        try {
                            if (e ? .node) {
                                const {
                                    left: a,
                                    right: o,
                                    bottom: s
                                } = e.node.getBoundingClientRect(), {
                                    innerWidth: d,
                                    innerHeight: l
                                } = window.parent, u = "left" === t ? a : d - o, c = l - s;
                                0 === u && 0 === c || r || n || (i((0, x.VCz)({
                                    initialX: u,
                                    initialY: c
                                })), (0, C.Mm)("widget_position", !0))
                            }
                        } catch (e) {
                            (0, g.G)("Error onIframeRef", {
                                message: e ? .message
                            })
                        }
                        n && this.mergeWithCurrentStyles({ ...h.yl[this.getIframeMode()]
                        })
                    })), (0, i.Z)(this, "getIframeMode", (() => {
                        const {
                            iframeView: e,
                            isWidgetLabelEnabled: t,
                            view: n,
                            dimensions: i
                        } = this.props;
                        if (e.includes(h.oG.dynamic) && i ? .height) {
                            const e = 94;
                            return Number(i.height) === e && t && n !== y.views.fly ? h.oG.bubbleWithLabel : h.oG.dynamic
                        }
                        return e === h.oG.onlyBubble && this.props.isMobile ? h.oG.onlyBubbleLarge : e
                    }))
                }
                componentDidUpdate(e) {
                    try {
                        ks && this.props.isAwesomeIframe && e.isAwesomeIframe !== this.props.isAwesomeIframe && this.ref ? .node && this.ref.node.contentWindow ? .document ? .querySelector("body") ? .classList ? .add("awesome-iframe")
                    } catch (e) {}
                }
                render() {
                    const e = this.props.hideWhenOffline && !this.props.isProjectOnline && !this.props.isChatOnSite,
                        t = (0, v.dZ)();
                    if (!this.props.isMounted || e) return null;
                    const n = `${this.props.isMobile?"mobile":""} ${this.props.isChatOnSite?"chat-on-site":""} ${t?"lang-rtl":""} ${(0,p.$U)()?"chat-in-preview":""} ${(0,p.xX)()?"chat-in-preview--tour":""} ${this.props.isAwesomeIframe?"awesome-iframe":""} ${"ie"===p.L0?"legacy":""}`,
                        i = this.getIframeMode();
                    return (0, W.BX)(W.HY, {
                        children: [(0, W.tZ)(a.ZP, {
                            ref: this.onIframeRef,
                            title: "Tidio Chat",
                            head: (0, W.tZ)("style", {
                                children: "\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Mulish';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://widget-v4.tidiochat.com/fonts/mulish_SGhgqk0gotYKNnBcif.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Mulish';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://widget-v4.tidiochat.com/fonts/mulish_SGhgqk2wotYKNnBcif.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Mulish';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://widget-v4.tidiochat.com/fonts/mulish_SGhgqk0AotYKNnBcif.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Mulish';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://widget-v4.tidiochat.com/fonts/mulish_SGhgqk0QotYKNnBcif.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Mulish';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://widget-v4.tidiochat.com/fonts/mulish_SGhgqk3wotYKNnBQ.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Mulish';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://widget-v4.tidiochat.com/fonts/mulish_SGhgqk0gotYKNnBcif.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Mulish';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://widget-v4.tidiochat.com/fonts/mulish_SGhgqk2wotYKNnBcif.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Mulish';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://widget-v4.tidiochat.com/fonts/mulish_SGhgqk0AotYKNnBcif.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Mulish';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://widget-v4.tidiochat.com/fonts/mulish_SGhgqk0QotYKNnBcif.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Mulish';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://widget-v4.tidiochat.com/fonts/mulish_SGhgqk3wotYKNnBQ.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"
                            }),
                            style: { ...this.state.style,
                                ...this.getIframeSize(),
                                ...this.getIframeAwesomeStyle()
                            },
                            initialContent: `\n                  <html lang="en">\n                  <head>\n                  <meta name="viewport" content="width=device-width, user-scalable=no">\n                    </head>\n                  <body ${t?'dir="rtl"':""} class="${n.trim()}">\n                    <div></div>\n                  </body>\n                  `,
                            id: "tidio-chat-iframe",
                            contentDidMount: this.onIframeMount,
                            ...p.GK,
                            children: (0, W.tZ)("div", {
                                className: `${"left"===this.props.widgetPosition?"widget-position-left":"widget-position-right"} ${"left"===this.props.sidebarPosition?"sidebar-position-left":"sidebar-position-right"} ${i}`,
                                children: (0, W.tZ)(Ss, {
                                    setWidgetPosition: this.setWidgetPosition,
                                    iframeView: this.props.iframeView,
                                    iframeMode: i,
                                    isSoundEnabled: this.props.isSoundEnabled,
                                    isAwesomeIframe: this.props.isAwesomeIframe
                                })
                            })
                        }), (0, W.tZ)(us, {}), (0, W.tZ)(ss, {})]
                    })
                }
            }
            Ms.defaultProps = {
                sidebarPosition: "right",
                dimensions: null
            };
            var Ts = (0, o.$j)((e => ({
                isMounted: e.isMounted,
                iframeView: e.chatIframeStyles.iframeView,
                dimensions: (0, E.B1)(e),
                isMobile: e.isMobile,
                widgetPosition: e.chatIframeStyles.widgetPosition,
                hideWhenOffline: e.hideWhenOffline,
                isProjectOnline: e.isProjectOnline,
                isSidebarEnabled: e.sidebarIframeStyles,
                isAwesomeIframe: (0, E.Jx)(e),
                sidebarPosition: e.sidebarIframeStyles.position,
                isChatOnSite: (0, E.cn)(e),
                isSoundEnabled: e.isSoundEnabled,
                isWidgetLabelEnabled: (0, E.rW)(e),
                view: (0, E.Xe)(e)
            })))(Ms)
        },
        4841: function(e, t, n) {
            "use strict";
            n.d(t, {
                $T: function() {
                    return x
                },
                CU: function() {
                    return A
                },
                Eh: function() {
                    return m
                },
                Ei: function() {
                    return R
                },
                F_: function() {
                    return F
                },
                Fj: function() {
                    return b
                },
                H_: function() {
                    return M
                },
                Ju: function() {
                    return h
                },
                K5: function() {
                    return P
                },
                P_: function() {
                    return B
                },
                Q3: function() {
                    return T
                },
                QW: function() {
                    return N
                },
                Qj: function() {
                    return a
                },
                SJ: function() {
                    return y
                },
                TI: function() {
                    return z
                },
                UW: function() {
                    return E
                },
                Wf: function() {
                    return S
                },
                Y: function() {
                    return j
                },
                _E: function() {
                    return Z
                },
                aN: function() {
                    return O
                },
                bZ: function() {
                    return D
                },
                cP: function() {
                    return I
                },
                dU: function() {
                    return U
                },
                g0: function() {
                    return l
                },
                gR: function() {
                    return d
                },
                iL: function() {
                    return w
                },
                kE: function() {
                    return c
                },
                kf: function() {
                    return p
                },
                nh: function() {
                    return u
                },
                pJ: function() {
                    return H
                },
                qB: function() {
                    return v
                },
                rG: function() {
                    return k
                },
                sO: function() {
                    return L
                },
                sS: function() {
                    return C
                },
                tE: function() {
                    return W
                },
                vw: function() {
                    return o
                },
                x8: function() {
                    return s
                },
                xS: function() {
                    return _
                },
                xj: function() {
                    return r
                },
                z8: function() {
                    return f
                }
            });
            n(1914);
            var i = n(9243);
            const r = () => (0, i.BX)("svg", {
                    id: "ic_bubble",
                    fill: "#FFFFFF",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
                    }), (0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    })]
                }),
                a = () => (0, i.BX)("svg", {
                    id: "ic_create",
                    fill: "blue",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                    }), (0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    })]
                }),
                o = () => (0, i.BX)("svg", {
                    id: "ic_send",
                    fill: "#FFFFFF",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                    }), (0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    })]
                }),
                s = () => (0, i.BX)("svg", {
                    id: "ic_close",
                    fill: "#000000",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                    }), (0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    })]
                }),
                d = () => (0, i.BX)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    id: "ic-minimize",
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"
                    })]
                }),
                l = () => (0, i.BX)("svg", {
                    id: "ic_options",
                    className: "options-icon",
                    fill: "#000000",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                    })]
                }),
                u = () => (0, i.BX)("svg", {
                    id: "ic_notificationsOff",
                    fill: "#000000",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M20 18.69L7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z"
                    })]
                }),
                c = () => (0, i.BX)("svg", {
                    id: "ic_emojiSwitch",
                    fill: "#000000",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
                    })]
                }),
                p = () => (0, i.BX)("svg", {
                    id: "ic_attachFile",
                    fill: "#000000",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        fill: "none",
                        d: "M0,0h24v24H0V0z"
                    }), (0, i.tZ)("path", {
                        d: "M13,21.8c-2.3,0-4.1-1.7-4.1-3.8V9.6c0-1.4,1.3-2.6,2.8-2.6c1.5,0,2.8,1.2,2.8,2.6v4.8c0,0.4-0.4,0.8-0.8,0.8s-0.8-0.4-0.8-0.8V9.6c0-0.6-0.5-1-1.2-1s-1.2,0.4-1.2,1V18c0,1.2,1.1,2.2,2.5,2.2c0.7,0,1.3-0.2,1.8-0.7c0.5-0.4,0.7-1,0.7-1.5V7.2c0-1.9-1.7-3.4-3.9-3.4c-2.1,0-3.9,1.5-3.9,3.4v7.2c0,0.4-0.4,0.8-0.8,0.8s-0.8-0.4-0.8-0.8V7.2c0-2.8,2.5-5,5.5-5s5.5,2.2,5.5,5V18c0,1-0.5,2-1.2,2.7C15.1,21.4,14.1,21.8,13,21.8z"
                    })]
                }),
                f = () => (0, i.BX)("svg", {
                    id: "ic_notificationsOn",
                    fill: "#000000",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"
                    })]
                }),
                h = () => (0, i.BX)("svg", {
                    id: "ic_rateStar",
                    fill: "#000000",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    }), (0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    })]
                }),
                m = () => (0, i.BX)("svg", {
                    id: "ic_arrow",
                    fill: "#000000",
                    height: 24,
                    viewBox: "0 0 24 24",
                    width: 24,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                    })]
                }),
                g = {
                    transform: "scale(0.8) translate(3px, 4px)"
                },
                b = () => (0, i.BX)("svg", {
                    id: "caret",
                    fill: "#000000",
                    height: "48",
                    viewBox: "0 0 24 24",
                    width: "48",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.tZ)("path", {
                        style: g,
                        d: "M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z",
                        fill: "#062B2B"
                    }), (0, i.tZ)("path", {
                        d: "M0-.75h24v24H0z",
                        fill: "none"
                    })]
                }),
                v = () => (0, i.BX)("svg", {
                    id: "ic_successChek",
                    fill: "#000000",
                    height: "18",
                    viewBox: "0 0 24 24",
                    width: "18",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                    })]
                }),
                y = () => (0, i.BX)("svg", {
                    id: "ic_thumbDown",
                    fill: "#000000",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"
                    })]
                }),
                w = () => (0, i.BX)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: 24,
                    viewBox: "0 0 24 24",
                    width: 24,
                    fill: "#000000",
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0V0zm0 0h24v24H0V0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm0 12l-4.34 4.34L12 14H3v-2l3-7h9v10zm4-12h4v12h-4z"
                    })]
                }),
                x = () => (0, i.BX)("svg", {
                    id: "ic_thumbUp",
                    fill: "#000000",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"
                    })]
                }),
                C = () => (0, i.BX)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: 24,
                    viewBox: "0 0 24 24",
                    width: 24,
                    fill: "#000000",
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0V0zm0 0h24v24H0V0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"
                    })]
                }),
                E = () => (0, i.BX)("svg", {
                    id: "ic_download",
                    fill: "#000000",
                    height: 24,
                    viewBox: "0 0 24 24",
                    width: 24,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
                    })]
                }),
                k = () => (0, i.tZ)("svg", {
                    width: "28",
                    height: "28",
                    viewBox: "0 0 28 28",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "ic_upload",
                    children: (0, i.tZ)("path", {
                        d: "M7.58341 23.3334C5.81397 23.3334 4.30216 22.7209 3.048 21.4959C1.79383 20.2709 1.16675 18.7737 1.16675 17.0042C1.16675 15.4876 1.62369 14.1362 2.53758 12.9501C3.45147 11.764 4.6473 11.0056 6.12508 10.6751C6.61119 8.88619 7.58341 7.43758 9.04175 6.32925C10.5001 5.22091 12.1529 4.66675 14.0001 4.66675C16.2751 4.66675 18.2049 5.45911 19.7897 7.04383C21.3744 8.62855 22.1667 10.5584 22.1667 12.8334C23.5084 12.989 24.6216 13.5674 25.5063 14.5688C26.3911 15.5702 26.8334 16.7417 26.8334 18.0834C26.8334 19.5417 26.323 20.7813 25.3022 21.8022C24.2813 22.823 23.0417 23.3334 21.5834 23.3334H15.1667C14.5251 23.3334 13.9758 23.1049 13.5188 22.648C13.0619 22.1911 12.8334 21.6417 12.8334 21.0001V14.9917L10.9667 16.8001L9.33342 15.1667L14.0001 10.5001L18.6667 15.1667L17.0334 16.8001L15.1667 14.9917V21.0001H21.5834C22.4001 21.0001 23.0904 20.7181 23.6542 20.1542C24.2181 19.5904 24.5001 18.9001 24.5001 18.0834C24.5001 17.2667 24.2181 16.5765 23.6542 16.0126C23.0904 15.4487 22.4001 15.1667 21.5834 15.1667H19.8334V12.8334C19.8334 11.2195 19.2647 9.84383 18.1272 8.70633C16.9897 7.56883 15.614 7.00008 14.0001 7.00008C12.3862 7.00008 11.0105 7.56883 9.873 8.70633C8.7355 9.84383 8.16675 11.2195 8.16675 12.8334H7.58341C6.45564 12.8334 5.49314 13.232 4.69591 14.0292C3.89869 14.8265 3.50008 15.789 3.50008 16.9167C3.50008 18.0445 3.89869 19.007 4.69591 19.8042C5.49314 20.6015 6.45564 21.0001 7.58341 21.0001H10.5001V23.3334H7.58341Z"
                    })
                }),
                A = () => (0, i.BX)("svg", {
                    version: "1.1",
                    id: "ic_logo",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 52 16",
                    style: {
                        enableBackground: "new 0 0 52 16"
                    },
                    xmlSpace: "preserve",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("style", {
                        type: "text/css",
                        dangerouslySetInnerHTML: {
                            __html: "\n\t.st0{fill:#135EEB;}\n\t.st1{fill:#080F1A;}\n\t.st2{fill:#4FC3F7;}\n\t.st3{fill:#3F88F6;}\n"
                        }
                    }), (0, i.tZ)("polygon", {
                        className: "st0",
                        points: "4.8,4.7 5.1,4.3 8.9,4.7 11.2,6.3 11.7,9.1 11.8,11 11.5,11.4 11.3,11.7 8.4,11.7 5.8,10.4 4.3,8.8  4.3,6.5 4.4,5.4 "
                    }), (0, i.BX)("g", {
                        children: [(0, i.BX)("g", {
                            children: [(0, i.tZ)("polygon", {
                                className: "st1",
                                points: "23,12.4 23,5.3 20.5,5.3 20.5,4 27.1,4 27.1,5.3 24.5,5.3 24.5,12.4 \t\t"
                            }), (0, i.tZ)("path", {
                                className: "st1",
                                d: "M31.3,12.4V4h3c1.5,0,2.7,0.4,3.6,1.1S39,6.9,39,8.2s-0.4,2.3-1.2,3.1c-0.8,0.7-2,1.1-3.7,1.1H31.3z M32.8,11.2h1.5c1,0,1.8-0.3,2.3-0.7c0.5-0.5,0.8-1.2,0.8-2.2S37.2,6.6,36.7,6c-0.5-0.5-1.4-0.8-2.5-0.8h-1.4V11.2L32.8,11.2z"
                            }), (0, i.tZ)("path", {
                                className: "st1",
                                d: "M47.5,12.5c-1.3,0-2.4-0.4-3.2-1.2C43.4,10.5,43,9.4,43,8.2s0.4-2.3,1.3-3.1c0.9-0.8,1.9-1.2,3.2-1.2 s2.3,0.4,3.2,1.2C51.6,5.9,52,7,52,8.2s-0.4,2.3-1.3,3.1C49.8,12.1,48.8,12.5,47.5,12.5z M47.5,5.1c-0.8,0-1.5,0.3-2.1,0.9 s-0.8,1.3-0.8,2.2s0.3,1.6,0.8,2.2c0.6,0.6,1.3,0.9,2.1,0.9s1.5-0.3,2.1-0.9c0.6-0.6,0.8-1.3,0.8-2.2S50.2,6.6,49.6,6 C49,5.4,48.3,5.1,47.5,5.1z"
                            }), (0, i.tZ)("path", {
                                className: "st1",
                                d: "M28.1,5.8c0-0.9,0.6-1.6,1.5-1.7l0,0v6.7c0,0.9-0.6,1.6-1.5,1.7l0,0V5.8z"
                            }), (0, i.tZ)("path", {
                                className: "st1",
                                d: "M40.3,5.8c0-0.9,0.6-1.6,1.5-1.7l0,0v6.7c0,0.9-0.6,1.6-1.5,1.7l0,0V5.8z"
                            })]
                        }), (0, i.tZ)("g", {
                            children: (0, i.BX)("g", {
                                children: [(0, i.tZ)("path", {
                                    className: "st0",
                                    d: "M5.8,4.6c-0.3,0-0.7,0-1,0.1C4.7,5,4.7,5.4,4.7,5.7c0,3.1,2.6,5.7,5.8,5.7h1c0.1-0.3,0.1-0.7,0.1-1.1 C11.6,7.2,9,4.6,5.8,4.6z"
                                }), (0, i.tZ)("path", {
                                    className: "st2",
                                    d: "M10.5,11.4c-3.2,0-5.8-2.6-5.8-5.7c0-0.3,0-0.7,0.1-1C2.1,5.2,0,7.5,0,10.3V16h5.8c2.8,0,5.2-2,5.7-4.6H10.5 z"
                                }), (0, i.tZ)("path", {
                                    className: "st3",
                                    d: "M10.5,0C7.6,0,5.3,2,4.8,4.7c0.3-0.1,0.7-0.1,1-0.1c3.2,0,5.8,2.6,5.8,5.7c0,0.4,0,0.7-0.1,1.1h4.8V5.7 C16.3,2.6,13.7,0,10.5,0z"
                                })]
                            })
                        })]
                    })]
                }),
                Z = () => (0, i.BX)("svg", {
                    id: "xls-xlsx-csv-icon",
                    "data-name": "Warstwa 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("defs", {
                        children: (0, i.tZ)("style", {
                            dangerouslySetInnerHTML: {
                                __html: "#xls-xlsx-csv-icon .cls-1{fill:#208549;}#xls-xlsx-csv-icon .cls-2{fill:#21a558;}#xls-xlsx-csv-icon .cls-3{fill:#2abc65;}#xls-xlsx-csv-icon .cls-4{fill:#fff;}"
                            }
                        })
                    }), (0, i.tZ)("path", {
                        className: "cls-1",
                        d: "M4.7,1A2.09,2.09,0,0,0,2.61,3.13V21.91A2.09,2.09,0,0,0,4.7,24H19.3a2.09,2.09,0,0,0,2.09-2.09V7.3L15.13,1Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-2",
                        d: "M4.7,0A2.09,2.09,0,0,0,2.61,2.09V20.87A2.09,2.09,0,0,0,4.7,23H19.3a2.09,2.09,0,0,0,2.09-2.09V6.26L15.13,0Z"
                    }), (0, i.tZ)("polygon", {
                        className: "cls-1",
                        points: "21.39 11.3 21.39 10.44 21.39 6.26 18.29 3.16 15.77 5.68 21.39 11.3"
                    }), (0, i.tZ)("path", {
                        className: "cls-3",
                        d: "M21.39,6.26,15.13,0V4.17a2.09,2.09,0,0,0,2.09,2.09Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-4",
                        d: "M10.54,11.79l-3-4.36h2.53L12,10.63l1.87-3.2h2.44l-2.95,4.32,3.3,4.82H14.13L11.9,12.89,9.73,16.57H7.34Z"
                    })]
                }),
                S = () => (0, i.BX)("svg", {
                    id: "wma-mp3-icon",
                    "data-name": "Warstwa 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("defs", {
                        children: (0, i.tZ)("style", {
                            dangerouslySetInnerHTML: {
                                __html: "#wma-mp3-icon .cls-1{fill:#542c74;}#wma-mp3-icon .cls-2{fill:#683695;}#wma-mp3-icon .cls-3{fill:#7649a2;}#wma-mp3-icon .cls-4{fill:#fff;}"
                            }
                        })
                    }), (0, i.tZ)("path", {
                        className: "cls-1",
                        d: "M4.7,1A2.09,2.09,0,0,0,2.61,3.13V21.91A2.09,2.09,0,0,0,4.7,24H19.3a2.09,2.09,0,0,0,2.09-2.09V7.3L15.13,1Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-2",
                        d: "M4.7,0A2.09,2.09,0,0,0,2.61,2.09V20.87A2.09,2.09,0,0,0,4.7,23H19.3a2.09,2.09,0,0,0,2.09-2.09V6.26L15.13,0Z"
                    }), (0, i.tZ)("polygon", {
                        className: "cls-1",
                        points: "21.39 11.3 21.39 10.44 21.39 6.26 18.29 3.16 15.77 5.68 21.39 11.3"
                    }), (0, i.tZ)("path", {
                        className: "cls-3",
                        d: "M21.39,6.26,15.13,0V4.17a2.09,2.09,0,0,0,2.09,2.09Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-4",
                        d: "M12,6.83v6.06a2.26,2.26,0,0,0-1.15-.32,2.3,2.3,0,1,0,2.3,2.3V9.13h2.3V6.83Z"
                    })]
                }),
                M = () => (0, i.BX)("svg", {
                    id: "txt-rtf-icon",
                    "data-name": "Warstwa 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("defs", {
                        children: (0, i.tZ)("style", {
                            dangerouslySetInnerHTML: {
                                __html: "#txt-rtf-icon .cls-1{fill:#dadada;}#txt-rtf-icon .cls-2{fill:#fff;}#txt-rtf-icon .cls-3{fill:#445b70;}"
                            }
                        })
                    }), (0, i.tZ)("path", {
                        className: "cls-1",
                        d: "M4.7,1A2.09,2.09,0,0,0,2.61,3.13V21.91A2.09,2.09,0,0,0,4.7,24H19.3a2.09,2.09,0,0,0,2.09-2.09V7.3L15.13,1Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-2",
                        d: "M4.7,0A2.09,2.09,0,0,0,2.61,2.09V20.87A2.09,2.09,0,0,0,4.7,23H19.3a2.09,2.09,0,0,0,2.09-2.09V6.26L15.13,0Z"
                    }), (0, i.tZ)("polygon", {
                        className: "cls-1",
                        points: "21.39 11.3 21.39 10.44 21.39 6.26 18.29 3.16 15.77 5.68 21.39 11.3"
                    }), (0, i.tZ)("path", {
                        className: "cls-2",
                        d: "M21.39,6.26,15.13,0V4.17a2.09,2.09,0,0,0,2.09,2.09Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-3",
                        d: "M13.54,14H10.31l-.51.8-.58.89a2.12,2.12,0,0,0-.22.51.88.88,0,0,0,0,.36.61.61,0,0,0,.26.34,1.42,1.42,0,0,0,.68.18l.05.28H6.86l0-.28a1.66,1.66,0,0,0,.69-.29,6.59,6.59,0,0,0,1-1.27l5.83-8.82h.35l1.16,8.53c.06.45.1.72.11.81a1.38,1.38,0,0,0,.35.76,1.22,1.22,0,0,0,.75.28l0,.28H12.6l0-.28a4,4,0,0,0,.75-.11.76.76,0,0,0,.31-.45,2.85,2.85,0,0,0,0-1.19Zm-.11-.63L13,9.94l-2.3,3.4Z"
                    })]
                }),
                T = () => (0, i.BX)("svg", {
                    id: "pdf-icon",
                    "data-name": "Warstwa 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("defs", {
                        children: (0, i.tZ)("style", {
                            dangerouslySetInnerHTML: {
                                __html: "#pdf-icon .cls-1{fill:#b6241e;}#pdf-icon .cls-2{fill:#ee2a24;}#pdf-icon .cls-3{fill:#ff4343;}#pdf-icon .cls-4{fill:#fff;}"
                            }
                        })
                    }), (0, i.tZ)("path", {
                        className: "cls-1",
                        d: "M4.7,1A2.09,2.09,0,0,0,2.61,3.13V21.91A2.09,2.09,0,0,0,4.7,24H19.3a2.09,2.09,0,0,0,2.09-2.09V7.3L15.13,1Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-2",
                        d: "M4.7,0A2.09,2.09,0,0,0,2.61,2.09V20.87A2.09,2.09,0,0,0,4.7,23H19.3a2.09,2.09,0,0,0,2.09-2.09V6.26L15.13,0Z"
                    }), (0, i.tZ)("polygon", {
                        className: "cls-1",
                        points: "21.39 11.3 21.39 10.44 21.39 6.26 18.29 3.16 15.77 5.68 21.39 11.3"
                    }), (0, i.tZ)("path", {
                        className: "cls-3",
                        d: "M21.39,6.26,15.13,0V4.17a2.09,2.09,0,0,0,2.09,2.09Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-4",
                        d: "M18.37,14.46c-.31-.56-1.39-.73-1.89-.81a7.84,7.84,0,0,0-1.19-.08c-.31,0-.61,0-.92,0l-.33,0c-.11-.12-.22-.24-.32-.37a11.45,11.45,0,0,1-1.66-2.63,10.5,10.5,0,0,0,.27-1.42,5.89,5.89,0,0,0-.2-2.77c-.12-.3-.43-.66-.78-.48a1.44,1.44,0,0,0-.56,1.2,3.71,3.71,0,0,0,.05,1,6.15,6.15,0,0,0,.25,1c.09.29.19.57.3.85-.07.23-.14.44-.22.66-.19.48-.39.94-.58,1.39l-.3.64c-.31.68-.64,1.34-1,2A11,11,0,0,0,7,15.73a4.89,4.89,0,0,0-.92.74,1.6,1.6,0,0,0-.51.94.6.6,0,0,0,.24.53,1,1,0,0,0,.81.11,4.46,4.46,0,0,0,2.13-1.58A16.23,16.23,0,0,0,10,14.79h0a19.15,19.15,0,0,1,2.63-.62c.42-.07.86-.13,1.31-.17a7.21,7.21,0,0,0,1,.79,4.87,4.87,0,0,0,.92.44,8,8,0,0,0,1,.25,3,3,0,0,0,.52,0c.4,0,1-.16,1-.65A.66.66,0,0,0,18.37,14.46Zm-9.53.89c-.19.29-.37.55-.53.78a3.88,3.88,0,0,1-1.58,1.48,1.17,1.17,0,0,1-.48.09c-.16,0-.32-.08-.32-.27a.93.93,0,0,1,.13-.33,1.72,1.72,0,0,1,.28-.37,5.06,5.06,0,0,1,.84-.68A10.18,10.18,0,0,1,9,15.17ZM11.18,8.1a3.4,3.4,0,0,1,0-.9,2.59,2.59,0,0,1,.09-.42c0-.12.12-.4.25-.43s.27.39.29.51a5.65,5.65,0,0,1-.14,2.24l-.09.33c-.05-.14-.09-.28-.14-.42A7.13,7.13,0,0,1,11.18,8.1Zm1.44,5.7a22.51,22.51,0,0,0-2.24.49,5.43,5.43,0,0,0,.56-.9,11.61,11.61,0,0,0,1-2.26,10.73,10.73,0,0,0,1.56,2.34,1.54,1.54,0,0,0,.17.19Zm5.3,1c0,.15-.36.24-.51.27A2.94,2.94,0,0,1,16,14.94a4,4,0,0,1-.86-.4A4.79,4.79,0,0,1,14.4,14c.29,0,.59,0,.89,0s.6,0,.9.06a3.2,3.2,0,0,1,1.63.62C17.91,14.69,17.93,14.75,17.92,14.81Z"
                    })]
                }),
                I = () => (0, i.BX)("svg", {
                    id: "mpg-mp4-icon",
                    "data-name": "Warstwa 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("defs", {
                        children: (0, i.tZ)("style", {
                            dangerouslySetInnerHTML: {
                                __html: "#mpg-mp4-icon .cls-1{fill:#132b40;}#mpg-mp4-icon .cls-2{fill:#1c3c57;}#mpg-mp4-icon .cls-3{fill:#335268;}#mpg-mp4-icon .cls-4{fill:#fff;}"
                            }
                        })
                    }), (0, i.tZ)("path", {
                        className: "cls-1",
                        d: "M4.7,1A2.09,2.09,0,0,0,2.61,3.13V21.91A2.09,2.09,0,0,0,4.7,24H19.3a2.09,2.09,0,0,0,2.09-2.09V7.3L15.13,1Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-2",
                        d: "M4.7,0A2.09,2.09,0,0,0,2.61,2.09V20.87A2.09,2.09,0,0,0,4.7,23H19.3a2.09,2.09,0,0,0,2.09-2.09V6.26L15.13,0Z"
                    }), (0, i.tZ)("polygon", {
                        className: "cls-1",
                        points: "21.39 11.3 21.39 10.44 21.39 6.26 18.29 3.16 15.77 5.68 21.39 11.3"
                    }), (0, i.tZ)("path", {
                        className: "cls-3",
                        d: "M21.39,6.26,15.13,0V4.17a2.09,2.09,0,0,0,2.09,2.09Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-4",
                        d: "M14.69,11.19V9.31a.54.54,0,0,0-.54-.54H7.69a.54.54,0,0,0-.53.54v5.38a.54.54,0,0,0,.53.54h6.46a.54.54,0,0,0,.54-.54V12.81L16.84,15V9Z"
                    })]
                }),
                _ = () => (0, i.BX)("svg", {
                    id: "flv-icon",
                    "data-name": "Warstwa 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("defs", {
                        children: (0, i.tZ)("style", {
                            dangerouslySetInnerHTML: {
                                __html: "#flv-icon .cls-1{fill:#9b1c24;}#flv-icon .cls-2{fill:#cf1f26;}#flv-icon .cls-3{fill:#f23341;}#flv-icon .cls-4{fill:#fff;}"
                            }
                        })
                    }), (0, i.tZ)("path", {
                        className: "cls-1",
                        d: "M4.7,1A2.09,2.09,0,0,0,2.61,3.13V21.91A2.09,2.09,0,0,0,4.7,24H19.3a2.09,2.09,0,0,0,2.09-2.09V7.3L15.13,1Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-2",
                        d: "M4.7,0A2.09,2.09,0,0,0,2.61,2.09V20.87A2.09,2.09,0,0,0,4.7,23H19.3a2.09,2.09,0,0,0,2.09-2.09V6.26L15.13,0Z"
                    }), (0, i.tZ)("polygon", {
                        className: "cls-1",
                        points: "21.39 11.3 21.39 10.44 21.39 6.26 18.29 3.16 15.77 5.68 21.39 11.3"
                    }), (0, i.tZ)("path", {
                        className: "cls-3",
                        d: "M21.39,6.26,15.13,0V4.17a2.09,2.09,0,0,0,2.09,2.09Z"
                    }), (0, i.tZ)("path", {
                        id: "path3820",
                        className: "cls-4",
                        d: "M7.48,16.4v-1h.17a2.47,2.47,0,0,0,1.78-.81,8.5,8.5,0,0,0,1.75-3.27,10.92,10.92,0,0,1,1.44-2.8A4.54,4.54,0,0,1,14.9,6.85a5.53,5.53,0,0,1,1.47-.27h.15V8.63h-.17A2.82,2.82,0,0,0,15.14,9a4.27,4.27,0,0,0-1.4,1.72c-.12.25-.18.23.76.23h.83V13H12.79l-.14.31a13.45,13.45,0,0,1-1.19,2.12,4.48,4.48,0,0,1-3.31,1.9l-.48,0H7.48v-1Z"
                    })]
                }),
                N = () => (0, i.BX)("svg", {
                    id: "doc-docx-icon",
                    "data-name": "Warstwa 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("defs", {
                        children: (0, i.tZ)("style", {
                            dangerouslySetInnerHTML: {
                                __html: "#doc-docx-icon .cls-1{fill:#163d75;}#doc-docx-icon .cls-2{fill:#2d4b8e;}#doc-docx-icon .cls-3{fill:#3666ad;}#doc-docx-icon .cls-4{fill:#fff;}#doc-docx-icon .cls-5{fill:#a0bde0;}"
                            }
                        })
                    }), (0, i.tZ)("path", {
                        className: "cls-1",
                        d: "M4.7,1A2.09,2.09,0,0,0,2.61,3.13V21.91A2.09,2.09,0,0,0,4.7,24H19.3a2.09,2.09,0,0,0,2.09-2.09V7.3L15.13,1Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-2",
                        d: "M4.7,0A2.09,2.09,0,0,0,2.61,2.09V20.87A2.09,2.09,0,0,0,4.7,23H19.3a2.09,2.09,0,0,0,2.09-2.09V6.26L15.13,0Z"
                    }), (0, i.tZ)("polygon", {
                        className: "cls-1",
                        points: "21.39 11.3 21.39 10.44 21.39 6.26 18.29 3.16 15.77 5.68 21.39 11.3"
                    }), (0, i.tZ)("path", {
                        className: "cls-3",
                        d: "M21.39,6.26,15.13,0V4.17a2.09,2.09,0,0,0,2.09,2.09Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-4",
                        d: "M5.51,7.43h2.2l1.46,5.86h0l1.91-5.86H13l1.9,6h0l1.53-6h2l-2.68,9.14H14l-2-6.33h0l-2,6.33H8.23Z"
                    }), (0, i.tZ)("polygon", {
                        className: "cls-5",
                        points: "18.27 8.17 18.48 7.43 17.52 7.43 18.27 8.17"
                    })]
                }),
                R = () => (0, i.BX)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    children: [(0, i.tZ)("path", {
                        fill: "#0090e0",
                        d: "M4.7,1A2.09,2.09,0,0,0,2.61,3.13V21.91A2.09,2.09,0,0,0,4.7,24H19.3a2.09,2.09,0,0,0,2.09-2.09V7.3L15.13,1Z"
                    }), (0, i.tZ)("path", {
                        fill: "#0abcff",
                        d: "M4.7,0A2.09,2.09,0,0,0,2.61,2.09V20.87A2.09,2.09,0,0,0,4.7,23H19.3a2.09,2.09,0,0,0,2.09-2.09V6.26L15.13,0Z"
                    }), (0, i.tZ)("polygon", {
                        fill: "#0090e0",
                        points: "21.39 11.3 21.39 10.44 21.39 6.26 18.29 3.16 15.77 5.68 21.39 11.3"
                    }), (0, i.tZ)("path", {
                        fill: "#4addff",
                        d: "M21.39,6.26,15.13,0V4.17a2.09,2.09,0,0,0,2.09,2.09Z"
                    }), (0, i.tZ)("path", {
                        fill: "#fff",
                        d: "M8.82,11.66l2.27,2.74,3.18-4.1,4.1,5.46H5.63Z"
                    })]
                }),
                O = () => (0, i.tZ)("svg", {
                    className: "circular loader-icon",
                    viewBox: "25 25 50 50",
                    "aria-hidden": !0,
                    children: (0, i.tZ)("circle", {
                        className: "path",
                        cx: 50,
                        cy: 50,
                        r: 20,
                        fill: "none",
                        stroke: "#fff",
                        strokeWidth: 2,
                        strokeMiterlimit: 10
                    })
                }),
                D = () => (0, i.BX)("svg", {
                    className: "alert-icon",
                    fill: "#000000",
                    height: 24,
                    viewBox: "0 0 24 24",
                    width: 24,
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0V0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                    })]
                }),
                L = () => (0, i.BX)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        fill: "#3f88f6",
                        d: "M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    })]
                }),
                B = () => (0, i.tZ)("svg", {
                    className: "bots-icon",
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "24",
                    viewBox: "0 -960 960 960",
                    width: "24",
                    children: (0, i.tZ)("path", {
                        d: "M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v240h-80v-240H160v525l46-45h394v80H240L80-80Zm80-240v-480 480ZM760-40v-200h-80v-240h200l-68 160h88L760-40Z"
                    })
                }),
                F = () => (0, i.BX)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
                    })]
                }),
                P = () => (0, i.tZ)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: (0, i.tZ)("path", {
                        d: "M7 10L12 15L17 10L7 10Z"
                    })
                }),
                j = () => (0, i.BX)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.tZ)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        fill: "#53CF74"
                    }), (0, i.tZ)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "m16.45 9.01-1.19-.96a.2.2 0 0 0-.13-.05.2.2 0 0 0-.14.06l-4.32 5.67-1.75-1.72c-.05-.04-.1-.13-.2-.13s-.14.07-.2.12l-.93 1.02a.95.95 0 0 1-.05.04.22.22 0 0 0-.04.13c0 .05.02.09.04.13l.06.05 3.07 3.01c.05.06.1.12.2.12.08 0 .16-.1.2-.14l5.39-7.08a.22.22 0 0 0 .04-.13c0-.05-.02-.1-.05-.14Z",
                        fill: "#fff"
                    })]
                }),
                z = () => (0, i.tZ)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    children: (0, i.tZ)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12.5833 15.9166L1.74992 15.9166C0.833252 15.9166 0.083252 15.1666 0.083252 14.2499L0.083252 3.41659L1.74992 3.41659L1.74992 14.2499L12.5833 14.2499V15.9166ZM14.2499 12.5833L5.08325 12.5833C4.16659 12.5833 3.41659 11.8333 3.41659 10.9166L3.41659 1.74992C3.41659 0.833252 4.16659 0.083252 5.08325 0.083252L14.2499 0.083252C15.1666 0.083252 15.9166 0.833252 15.9166 1.74992L15.9166 10.9166C15.9166 11.8333 15.1666 12.5833 14.2499 12.5833ZM14.2499 1.74992L5.08325 1.74992L5.08325 10.9166L14.2499 10.9166L14.2499 1.74992Z",
                        fill: "#8796AF"
                    })
                }),
                U = () => (0, i.tZ)("svg", {
                    width: "54",
                    height: "54",
                    viewBox: "0 0 54 54",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.tZ)("path", {
                        d: "M26.9999 0.333341C12.2799 0.333342 0.333253 12.28 0.333254 27C0.333256 41.72 12.2799 53.6667 26.9999 53.6667C41.7199 53.6667 53.6666 41.72 53.6666 27C53.6666 12.28 41.7199 0.33334 26.9999 0.333341ZM26.9999 48.3333C15.2399 48.3333 5.66659 38.76 5.66659 27C5.66659 15.24 15.2399 5.66668 26.9999 5.66667C38.7599 5.66667 48.3333 15.24 48.3333 27C48.3333 38.76 38.7599 48.3333 26.9999 48.3333ZM39.2399 15.2133L21.6666 32.7867L14.7599 25.9067L10.9999 29.6667L21.6666 40.3333L42.9999 19L39.2399 15.2133Z",
                        fill: "#34B857"
                    })
                }),
                H = () => (0, i.tZ)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.tZ)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7.00008 17.8333C7.00008 18.75 7.75008 19.5 8.66675 19.5H15.3334C16.2501 19.5 17.0001 18.75 17.0001 17.8333V7.83333H7.00008V17.8333ZM8.66675 9.5H15.3334V17.8333H8.66675V9.5ZM14.9167 5.33333L14.0834 4.5H9.91675L9.08341 5.33333H6.16675V7H17.8334V5.33333H14.9167Z"
                    })
                }),
                W = () => (0, i.tZ)("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.tZ)("g", {
                        id: "Eye",
                        children: (0, i.tZ)("path", {
                            id: "Vector",
                            d: "M8.00016 12C5.4735 12 3.22016 10.58 2.12016 8.33338C3.22016 6.08671 5.47349 4.66671 8.00016 4.66671C10.5268 4.66671 12.7802 6.08671 13.8802 8.33337C12.7802 10.58 10.5268 12 8.00016 12ZM8.00016 13.3334C11.3335 13.3334 14.1802 11.26 15.3335 8.33337C14.1802 5.40671 11.3335 3.33337 8.00016 3.33337C4.66683 3.33337 1.82016 5.40671 0.666829 8.33338C1.82016 11.26 4.66683 13.3334 8.00016 13.3334ZM8.00016 10C7.08016 10 6.3335 9.25337 6.3335 8.33337C6.3335 7.41337 7.08016 6.66671 8.00016 6.66671C8.92016 6.66671 9.66683 7.41337 9.66683 8.33337C9.66683 9.25337 8.92016 10 8.00016 10ZM8.00016 11.3334C9.6535 11.3334 11.0002 9.98671 11.0002 8.33337C11.0002 6.68004 9.6535 5.33337 8.00016 5.33337C6.34683 5.33337 5.00016 6.68004 5.00016 8.33337C5.00016 9.98671 6.34683 11.3334 8.00016 11.3334Z",
                            fill: "#8796AF"
                        })
                    })
                })
        },
        5551: function(e, t, n) {
            "use strict";
            n(1914);
            var i = n(7400),
                r = n(9243);
            t.Z = function(e) {
                return function(t) {
                    return (0, r.tZ)(i.Kr, {
                        children: n => {
                            let {
                                document: i,
                                window: a
                            } = n;
                            return (0, r.tZ)(e, { ...t,
                                iframeDocument: i,
                                iframeWindow: a
                            })
                        }
                    })
                }
            }
        },
        5717: function(e, t, n) {
            "use strict";
            n.d(t, {
                F4: function() {
                    return c
                },
                az: function() {
                    return d
                },
                iv: function() {
                    return u
                },
                xB: function() {
                    return l
                }
            });
            var i = n(2009),
                r = n(1914),
                a = n(5414),
                o = n(5308),
                s = n(679),
                d = (n(5796), n(7531), function(e, t) {
                    var n = arguments;
                    if (null == t || !i.h.call(t, "css")) return r.createElement.apply(void 0, n);
                    var a = n.length,
                        o = new Array(a);
                    o[0] = i.E, o[1] = (0, i.c)(e, t);
                    for (var s = 2; s < a; s++) o[s] = n[s];
                    return r.createElement.apply(null, o)
                }),
                l = (0, i.w)((function(e, t) {
                    var n = e.styles,
                        d = (0, s.O)([n], void 0, r.useContext(i.T));
                    if (!i.i) {
                        for (var l, u = d.name, c = d.styles, p = d.next; void 0 !== p;) u += " " + p.name, c += p.styles, p = p.next;
                        var f = !0 === t.compat,
                            h = t.insert("", {
                                name: u,
                                styles: c
                            }, t.sheet, f);
                        return f ? null : r.createElement("style", ((l = {})["data-emotion"] = t.key + "-global " + u, l.dangerouslySetInnerHTML = {
                            __html: h
                        }, l.nonce = t.sheet.nonce, l))
                    }
                    var m = r.useRef();
                    return (0, o.j)((function() {
                        var e = t.key + "-global",
                            n = new t.sheet.constructor({
                                key: e,
                                nonce: t.sheet.nonce,
                                container: t.sheet.container,
                                speedy: t.sheet.isSpeedy
                            }),
                            i = !1,
                            r = document.querySelector('style[data-emotion="' + e + " " + d.name + '"]');
                        return t.sheet.tags.length && (n.before = t.sheet.tags[0]), null !== r && (i = !0, r.setAttribute("data-emotion", e), n.hydrate([r])), m.current = [n, i],
                            function() {
                                n.flush()
                            }
                    }), [t]), (0, o.j)((function() {
                        var e = m.current,
                            n = e[0];
                        if (e[1]) e[1] = !1;
                        else {
                            if (void 0 !== d.next && (0, a.My)(t, d.next, !0), n.tags.length) {
                                var i = n.tags[n.tags.length - 1].nextElementSibling;
                                n.before = i, n.flush()
                            }
                            t.insert("", d, n, !1)
                        }
                    }), [t, d.name]), null
                }));

            function u() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (0, s.O)(t)
            }
            var c = function() {
                var e = u.apply(void 0, arguments),
                    t = "animation-" + e.name;
                return {
                    name: t,
                    styles: "@keyframes " + t + "{" + e.styles + "}",
                    anim: 1,
                    toString: function() {
                        return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
                    }
                }
            }
        },
        4101: function(e, t) {
            "use strict";
            t.Z = function(e, t) {
                if (e && t) {
                    var n = Array.isArray(t) ? t : t.split(","),
                        i = e.name || "",
                        r = (e.type || "").toLowerCase(),
                        a = r.replace(/\/.*$/, "");
                    return n.some((function(e) {
                        var t = e.trim().toLowerCase();
                        return "." === t.charAt(0) ? i.toLowerCase().endsWith(t) : t.endsWith("/*") ? a === t.replace(/\/.*$/, "") : r === t
                    }))
                }
                return !0
            }
        },
        9639: function(e, t) {
            var n;

            function i(e, t) {
                var n = [],
                    i = 0;

                function r(e) {
                    return n.push(e), t
                }

                function a() {
                    return n[i++]
                }
                return {
                    tokenize: function(t) {
                        return t.replace(e, r)
                    },
                    detokenize: function(e) {
                        return e.replace(new RegExp("(" + t + ")", "g"), a)
                    }
                }
            }
            n = new function() {
                var e = "`TMP`",
                    t = "[^\\u0020-\\u007e]",
                    n = "(?:[0-9]*\\.[0-9]+|[0-9]+)",
                    r = "direction\\s*:\\s*",
                    a = "['\"]?\\s*",
                    o = "(^|[^a-zA-Z])",
                    s = "\\/\\*\\!?\\s*@noflip\\s*\\*\\/",
                    d = "(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])",
                    l = "(?:[_a-z0-9-]|" + t + "|" + d + ")",
                    u = n + "(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|" + ("-?" + ("(?:[_a-z]|" + t + "|" + d + ")") + l + "*") + ")?",
                    c = "((?:-?" + u + ")|(?:inherit|auto))",
                    p = "(#?" + l + "+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))",
                    f = "(?:[!#$%&*-~]|" + t + "|" + d + ")*?",
                    h = "(?![a-zA-Z])",
                    m = "(?!(" + l + "|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'])*?{)",
                    g = "(?!" + f + a + "\\))",
                    b = "(?=" + f + a + "\\))",
                    v = "(\\s*(?:!important\\s*)?[;}])",
                    y = new RegExp("`TMP`", "g"),
                    w = new RegExp("\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/", "gi"),
                    x = new RegExp("(" + s + m + "[^;}]+;?)", "gi"),
                    C = new RegExp("(" + s + "[^\\}]*?})", "gi"),
                    E = new RegExp("(" + r + ")ltr", "gi"),
                    k = new RegExp("(" + r + ")rtl", "gi"),
                    A = new RegExp(o + "(left)" + h + g + m, "gi"),
                    Z = new RegExp(o + "(right)" + h + g + m, "gi"),
                    S = new RegExp(o + "(left)" + b, "gi"),
                    M = new RegExp(o + "(right)" + b, "gi"),
                    T = new RegExp(o + "(ltr)" + b, "gi"),
                    I = new RegExp(o + "(rtl)" + b, "gi"),
                    _ = new RegExp(o + "([ns]?)e-resize", "gi"),
                    N = new RegExp(o + "([ns]?)w-resize", "gi"),
                    R = new RegExp("((?:margin|padding|border-width)\\s*:\\s*)" + c + "(\\s+)" + c + "(\\s+)" + c + "(\\s+)" + c + v, "gi"),
                    O = new RegExp("((?:-color|border-style)\\s*:\\s*)" + p + "(\\s+)" + p + "(\\s+)" + p + "(\\s+)" + p + v, "gi"),
                    D = new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)(" + u + ")", "gi"),
                    L = new RegExp("(background-position-x\\s*:\\s*)(-?" + n + "%)", "gi"),
                    B = new RegExp("(border-radius\\s*:\\s*)" + c + "(?:(?:\\s+" + c + ")(?:\\s+" + c + ")?(?:\\s+" + c + ")?)?(?:(?:(?:\\s*\\/\\s*)" + c + ")(?:\\s+" + c + ")?(?:\\s+" + c + ")?(?:\\s+" + c + ")?)?" + v, "gi"),
                    F = new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)" + c, "gi"),
                    P = new RegExp("(text-shadow\\s*:\\s*)" + c + "(\\s*)" + p, "gi"),
                    j = new RegExp("(text-shadow\\s*:\\s*)" + p + "(\\s*)" + c, "gi"),
                    z = new RegExp("(text-shadow\\s*:\\s*)" + c, "gi"),
                    U = new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)" + c + "(\\s*\\))", "gi"),
                    H = new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)" + c + "((?:\\s*,\\s*" + c + "){0,2}\\s*\\))", "gi");

                function W(e, t, n) {
                    var i, r;
                    return "%" === n.slice(-1) && (-1 !== (i = n.indexOf(".")) ? (r = n.length - i - 2, n = (n = 100 - parseFloat(n)).toFixed(r) + "%") : n = 100 - parseFloat(n) + "%"), t + n
                }

                function $(e) {
                    switch (e.length) {
                        case 4:
                            e = [e[1], e[0], e[3], e[2]];
                            break;
                        case 3:
                            e = [e[1], e[0], e[1], e[2]];
                            break;
                        case 2:
                            e = [e[1], e[0]];
                            break;
                        case 1:
                            e = [e[0]]
                    }
                    return e.join(" ")
                }

                function V(e, t) {
                    var n = [].slice.call(arguments),
                        i = n.slice(2, 6).filter((function(e) {
                            return e
                        })),
                        r = n.slice(6, 10).filter((function(e) {
                            return e
                        })),
                        a = n[10] || "";
                    return t + (r.length ? $(i) + " / " + $(r) : $(i)) + a
                }

                function X(e) {
                    return 0 === parseFloat(e) ? e : "-" === e[0] ? e.slice(1) : "-" + e
                }

                function q(e, t, n) {
                    return t + X(n)
                }

                function Y(e, t, n, i, r) {
                    return t + n + X(i) + r
                }

                function G(e, t, n, i, r) {
                    return t + n + i + X(r)
                }
                return {
                    transform: function(t, n) {
                        var r = new i(x, "`NOFLIP_SINGLE`"),
                            a = new i(C, "`NOFLIP_CLASS`"),
                            o = new i(w, "`COMMENT`");
                        return t = o.tokenize(a.tokenize(r.tokenize(t.replace("`", "%60")))), n.transformDirInUrl && (t = t.replace(T, "$1" + e).replace(I, "$1ltr").replace(y, "rtl")), n.transformEdgeInUrl && (t = t.replace(S, "$1" + e).replace(M, "$1left").replace(y, "right")), t = t.replace(E, "$1" + e).replace(k, "$1ltr").replace(y, "rtl").replace(A, "$1" + e).replace(Z, "$1left").replace(y, "right").replace(_, "$1$2" + e).replace(N, "$1$2e-resize").replace(y, "w-resize").replace(B, V).replace(F, q).replace(P, G).replace(j, G).replace(z, q).replace(U, Y).replace(H, Y).replace(R, "$1$2$3$8$5$6$7$4$9").replace(O, "$1$2$3$8$5$6$7$4$9").replace(D, W).replace(L, W), t = r.detokenize(a.detokenize(o.detokenize(t)))
                    }
                }
            }, e.exports ? t.transform = function(e, t, i) {
                var r;
                return "object" == typeof t ? r = t : (r = {}, "boolean" == typeof t && (r.transformDirInUrl = t), "boolean" == typeof i && (r.transformEdgeInUrl = i)), n.transform(e, r)
            } : "undefined" != typeof window && (window.cssjanus = n)
        },
        7857: function(e) {
            e.exports = function() {
                "use strict";
                const {
                    entries: e,
                    setPrototypeOf: t,
                    isFrozen: n,
                    getPrototypeOf: i,
                    getOwnPropertyDescriptor: r
                } = Object;
                let {
                    freeze: a,
                    seal: o,
                    create: s
                } = Object, {
                    apply: d,
                    construct: l
                } = "undefined" != typeof Reflect && Reflect;
                a || (a = function(e) {
                    return e
                }), o || (o = function(e) {
                    return e
                }), d || (d = function(e, t, n) {
                    return e.apply(t, n)
                }), l || (l = function(e, t) {
                    return new e(...t)
                });
                const u = x(Array.prototype.forEach),
                    c = x(Array.prototype.pop),
                    p = x(Array.prototype.push),
                    f = x(String.prototype.toLowerCase),
                    h = x(String.prototype.toString),
                    m = x(String.prototype.match),
                    g = x(String.prototype.replace),
                    b = x(String.prototype.indexOf),
                    v = x(String.prototype.trim),
                    y = x(RegExp.prototype.test),
                    w = C(TypeError);

                function x(e) {
                    return function(t) {
                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                        return d(e, t, i)
                    }
                }

                function C(e) {
                    return function() {
                        for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                        return l(e, n)
                    }
                }

                function E(e, i) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f;
                    t && t(e, null);
                    let a = i.length;
                    for (; a--;) {
                        let t = i[a];
                        if ("string" == typeof t) {
                            const e = r(t);
                            e !== t && (n(i) || (i[a] = e), t = e)
                        }
                        e[t] = !0
                    }
                    return e
                }

                function k(t) {
                    const n = s(null);
                    for (const [i, a] of e(t)) void 0 !== r(t, i) && (n[i] = a);
                    return n
                }

                function A(e, t) {
                    for (; null !== e;) {
                        const n = r(e, t);
                        if (n) {
                            if (n.get) return x(n.get);
                            if ("function" == typeof n.value) return x(n.value)
                        }
                        e = i(e)
                    }

                    function n(e) {
                        return console.warn("fallback value for", e), null
                    }
                    return n
                }
                const Z = a(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
                    S = a(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
                    M = a(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
                    T = a(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
                    I = a(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
                    _ = a(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
                    N = a(["#text"]),
                    R = a(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
                    O = a(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
                    D = a(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
                    L = a(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                    B = o(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
                    F = o(/<%[\w\W]*|[\w\W]*%>/gm),
                    P = o(/\${[\w\W]*}/gm),
                    j = o(/^data-[\-\w.\u00B7-\uFFFF]/),
                    z = o(/^aria-[\-\w]+$/),
                    U = o(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                    H = o(/^(?:\w+script|data):/i),
                    W = o(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
                    $ = o(/^html$/i);
                var V = Object.freeze({
                    __proto__: null,
                    MUSTACHE_EXPR: B,
                    ERB_EXPR: F,
                    TMPLIT_EXPR: P,
                    DATA_ATTR: j,
                    ARIA_ATTR: z,
                    IS_ALLOWED_URI: U,
                    IS_SCRIPT_OR_DATA: H,
                    ATTR_WHITESPACE: W,
                    DOCTYPE_NAME: $
                });
                const X = function() {
                        return "undefined" == typeof window ? null : window
                    },
                    q = function(e, t) {
                        if ("object" != typeof e || "function" != typeof e.createPolicy) return null;
                        let n = null;
                        const i = "data-tt-policy-suffix";
                        t && t.hasAttribute(i) && (n = t.getAttribute(i));
                        const r = "dompurify" + (n ? "#" + n : "");
                        try {
                            return e.createPolicy(r, {
                                createHTML(e) {
                                    return e
                                },
                                createScriptURL(e) {
                                    return e
                                }
                            })
                        } catch (e) {
                            return console.warn("TrustedTypes policy " + r + " could not be created."), null
                        }
                    };

                function Y() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X();
                    const n = e => Y(e);
                    if (n.version = "3.0.6", n.removed = [], !t || !t.document || 9 !== t.document.nodeType) return n.isSupported = !1, n;
                    let {
                        document: i
                    } = t;
                    const r = i,
                        o = r.currentScript,
                        {
                            DocumentFragment: d,
                            HTMLTemplateElement: l,
                            Node: x,
                            Element: C,
                            NodeFilter: B,
                            NamedNodeMap: F = t.NamedNodeMap || t.MozNamedAttrMap,
                            HTMLFormElement: P,
                            DOMParser: j,
                            trustedTypes: z
                        } = t,
                        H = C.prototype,
                        W = A(H, "cloneNode"),
                        G = A(H, "nextSibling"),
                        Q = A(H, "childNodes"),
                        K = A(H, "parentNode");
                    if ("function" == typeof l) {
                        const e = i.createElement("template");
                        e.content && e.content.ownerDocument && (i = e.content.ownerDocument)
                    }
                    let J, ee = "";
                    const {
                        implementation: te,
                        createNodeIterator: ne,
                        createDocumentFragment: ie,
                        getElementsByTagName: re
                    } = i, {
                        importNode: ae
                    } = r;
                    let oe = {};
                    n.isSupported = "function" == typeof e && "function" == typeof K && te && void 0 !== te.createHTMLDocument;
                    const {
                        MUSTACHE_EXPR: se,
                        ERB_EXPR: de,
                        TMPLIT_EXPR: le,
                        DATA_ATTR: ue,
                        ARIA_ATTR: ce,
                        IS_SCRIPT_OR_DATA: pe,
                        ATTR_WHITESPACE: fe
                    } = V;
                    let {
                        IS_ALLOWED_URI: he
                    } = V, me = null;
                    const ge = E({}, [...Z, ...S, ...M, ...I, ...N]);
                    let be = null;
                    const ve = E({}, [...R, ...O, ...D, ...L]);
                    let ye = Object.seal(s(null, {
                            tagNameCheck: {
                                writable: !0,
                                configurable: !1,
                                enumerable: !0,
                                value: null
                            },
                            attributeNameCheck: {
                                writable: !0,
                                configurable: !1,
                                enumerable: !0,
                                value: null
                            },
                            allowCustomizedBuiltInElements: {
                                writable: !0,
                                configurable: !1,
                                enumerable: !0,
                                value: !1
                            }
                        })),
                        we = null,
                        xe = null,
                        Ce = !0,
                        Ee = !0,
                        ke = !1,
                        Ae = !0,
                        Ze = !1,
                        Se = !1,
                        Me = !1,
                        Te = !1,
                        Ie = !1,
                        _e = !1,
                        Ne = !1,
                        Re = !0,
                        Oe = !1;
                    const De = "user-content-";
                    let Le = !0,
                        Be = !1,
                        Fe = {},
                        Pe = null;
                    const je = E({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
                    let ze = null;
                    const Ue = E({}, ["audio", "video", "img", "source", "image", "track"]);
                    let He = null;
                    const We = E({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
                        $e = "http://www.w3.org/1998/Math/MathML",
                        Ve = "http://www.w3.org/2000/svg",
                        Xe = "http://www.w3.org/1999/xhtml";
                    let qe = Xe,
                        Ye = !1,
                        Ge = null;
                    const Qe = E({}, [$e, Ve, Xe], h);
                    let Ke = null;
                    const Je = ["application/xhtml+xml", "text/html"],
                        et = "text/html";
                    let tt = null,
                        nt = null;
                    const it = i.createElement("form"),
                        rt = function(e) {
                            return e instanceof RegExp || e instanceof Function
                        },
                        at = function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            if (!nt || nt !== e) {
                                if (e && "object" == typeof e || (e = {}), e = k(e), Ke = Ke = -1 === Je.indexOf(e.PARSER_MEDIA_TYPE) ? et : e.PARSER_MEDIA_TYPE, tt = "application/xhtml+xml" === Ke ? h : f, me = "ALLOWED_TAGS" in e ? E({}, e.ALLOWED_TAGS, tt) : ge, be = "ALLOWED_ATTR" in e ? E({}, e.ALLOWED_ATTR, tt) : ve, Ge = "ALLOWED_NAMESPACES" in e ? E({}, e.ALLOWED_NAMESPACES, h) : Qe, He = "ADD_URI_SAFE_ATTR" in e ? E(k(We), e.ADD_URI_SAFE_ATTR, tt) : We, ze = "ADD_DATA_URI_TAGS" in e ? E(k(Ue), e.ADD_DATA_URI_TAGS, tt) : Ue, Pe = "FORBID_CONTENTS" in e ? E({}, e.FORBID_CONTENTS, tt) : je, we = "FORBID_TAGS" in e ? E({}, e.FORBID_TAGS, tt) : {}, xe = "FORBID_ATTR" in e ? E({}, e.FORBID_ATTR, tt) : {}, Fe = "USE_PROFILES" in e && e.USE_PROFILES, Ce = !1 !== e.ALLOW_ARIA_ATTR, Ee = !1 !== e.ALLOW_DATA_ATTR, ke = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Ae = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR, Ze = e.SAFE_FOR_TEMPLATES || !1, Se = e.WHOLE_DOCUMENT || !1, Ie = e.RETURN_DOM || !1, _e = e.RETURN_DOM_FRAGMENT || !1, Ne = e.RETURN_TRUSTED_TYPE || !1, Te = e.FORCE_BODY || !1, Re = !1 !== e.SANITIZE_DOM, Oe = e.SANITIZE_NAMED_PROPS || !1, Le = !1 !== e.KEEP_CONTENT, Be = e.IN_PLACE || !1, he = e.ALLOWED_URI_REGEXP || U, qe = e.NAMESPACE || Xe, ye = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && rt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ye.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && rt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ye.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (ye.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ze && (Ee = !1), _e && (Ie = !0), Fe && (me = E({}, [...N]), be = [], !0 === Fe.html && (E(me, Z), E(be, R)), !0 === Fe.svg && (E(me, S), E(be, O), E(be, L)), !0 === Fe.svgFilters && (E(me, M), E(be, O), E(be, L)), !0 === Fe.mathMl && (E(me, I), E(be, D), E(be, L))), e.ADD_TAGS && (me === ge && (me = k(me)), E(me, e.ADD_TAGS, tt)), e.ADD_ATTR && (be === ve && (be = k(be)), E(be, e.ADD_ATTR, tt)), e.ADD_URI_SAFE_ATTR && E(He, e.ADD_URI_SAFE_ATTR, tt), e.FORBID_CONTENTS && (Pe === je && (Pe = k(Pe)), E(Pe, e.FORBID_CONTENTS, tt)), Le && (me["#text"] = !0), Se && E(me, ["html", "head", "body"]), me.table && (E(me, ["tbody"]), delete we.tbody), e.TRUSTED_TYPES_POLICY) {
                                    if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML) throw w('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                                    if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL) throw w('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                                    J = e.TRUSTED_TYPES_POLICY, ee = J.createHTML("")
                                } else void 0 === J && (J = q(z, o)), null !== J && "string" == typeof ee && (ee = J.createHTML(""));
                                a && a(e), nt = e
                            }
                        },
                        ot = E({}, ["mi", "mo", "mn", "ms", "mtext"]),
                        st = E({}, ["foreignobject", "desc", "title", "annotation-xml"]),
                        dt = E({}, ["title", "style", "font", "a", "script"]),
                        lt = E({}, S);
                    E(lt, M), E(lt, T);
                    const ut = E({}, I);
                    E(ut, _);
                    const ct = function(e) {
                            let t = K(e);
                            t && t.tagName || (t = {
                                namespaceURI: qe,
                                tagName: "template"
                            });
                            const n = f(e.tagName),
                                i = f(t.tagName);
                            return !!Ge[e.namespaceURI] && (e.namespaceURI === Ve ? t.namespaceURI === Xe ? "svg" === n : t.namespaceURI === $e ? "svg" === n && ("annotation-xml" === i || ot[i]) : Boolean(lt[n]) : e.namespaceURI === $e ? t.namespaceURI === Xe ? "math" === n : t.namespaceURI === Ve ? "math" === n && st[i] : Boolean(ut[n]) : e.namespaceURI === Xe ? !(t.namespaceURI === Ve && !st[i]) && !(t.namespaceURI === $e && !ot[i]) && !ut[n] && (dt[n] || !lt[n]) : !("application/xhtml+xml" !== Ke || !Ge[e.namespaceURI]))
                        },
                        pt = function(e) {
                            p(n.removed, {
                                element: e
                            });
                            try {
                                e.parentNode.removeChild(e)
                            } catch (t) {
                                e.remove()
                            }
                        },
                        ft = function(e, t) {
                            try {
                                p(n.removed, {
                                    attribute: t.getAttributeNode(e),
                                    from: t
                                })
                            } catch (e) {
                                p(n.removed, {
                                    attribute: null,
                                    from: t
                                })
                            }
                            if (t.removeAttribute(e), "is" === e && !be[e])
                                if (Ie || _e) try {
                                    pt(t)
                                } catch (e) {} else try {
                                    t.setAttribute(e, "")
                                } catch (e) {}
                        },
                        ht = function(e) {
                            let t = null,
                                n = null;
                            if (Te) e = "<remove></remove>" + e;
                            else {
                                const t = m(e, /^[\r\n\t ]+/);
                                n = t && t[0]
                            }
                            "application/xhtml+xml" === Ke && qe === Xe && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                            const r = J ? J.createHTML(e) : e;
                            if (qe === Xe) try {
                                t = (new j).parseFromString(r, Ke)
                            } catch (e) {}
                            if (!t || !t.documentElement) {
                                t = te.createDocument(qe, "template", null);
                                try {
                                    t.documentElement.innerHTML = Ye ? ee : r
                                } catch (e) {}
                            }
                            const a = t.body || t.documentElement;
                            return e && n && a.insertBefore(i.createTextNode(n), a.childNodes[0] || null), qe === Xe ? re.call(t, Se ? "html" : "body")[0] : Se ? t.documentElement : a
                        },
                        mt = function(e) {
                            return ne.call(e.ownerDocument || e, e, B.SHOW_ELEMENT | B.SHOW_COMMENT | B.SHOW_TEXT, null)
                        },
                        gt = function(e) {
                            return e instanceof P && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof F) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
                        },
                        bt = function(e) {
                            return "function" == typeof x && e instanceof x
                        },
                        vt = function(e, t, i) {
                            oe[e] && u(oe[e], (e => {
                                e.call(n, t, i, nt)
                            }))
                        },
                        yt = function(e) {
                            let t = null;
                            if (vt("beforeSanitizeElements", e, null), gt(e)) return pt(e), !0;
                            const i = tt(e.nodeName);
                            if (vt("uponSanitizeElement", e, {
                                    tagName: i,
                                    allowedTags: me
                                }), e.hasChildNodes() && !bt(e.firstElementChild) && y(/<[/\w]/g, e.innerHTML) && y(/<[/\w]/g, e.textContent)) return pt(e), !0;
                            if (!me[i] || we[i]) {
                                if (!we[i] && xt(i)) {
                                    if (ye.tagNameCheck instanceof RegExp && y(ye.tagNameCheck, i)) return !1;
                                    if (ye.tagNameCheck instanceof Function && ye.tagNameCheck(i)) return !1
                                }
                                if (Le && !Pe[i]) {
                                    const t = K(e) || e.parentNode,
                                        n = Q(e) || e.childNodes;
                                    if (n && t)
                                        for (let i = n.length - 1; i >= 0; --i) t.insertBefore(W(n[i], !0), G(e))
                                }
                                return pt(e), !0
                            }
                            return e instanceof C && !ct(e) ? (pt(e), !0) : "noscript" !== i && "noembed" !== i && "noframes" !== i || !y(/<\/no(script|embed|frames)/i, e.innerHTML) ? (Ze && 3 === e.nodeType && (t = e.textContent, u([se, de, le], (e => {
                                t = g(t, e, " ")
                            })), e.textContent !== t && (p(n.removed, {
                                element: e.cloneNode()
                            }), e.textContent = t)), vt("afterSanitizeElements", e, null), !1) : (pt(e), !0)
                        },
                        wt = function(e, t, n) {
                            if (Re && ("id" === t || "name" === t) && (n in i || n in it)) return !1;
                            if (Ee && !xe[t] && y(ue, t));
                            else if (Ce && y(ce, t));
                            else if (!be[t] || xe[t]) {
                                if (!(xt(e) && (ye.tagNameCheck instanceof RegExp && y(ye.tagNameCheck, e) || ye.tagNameCheck instanceof Function && ye.tagNameCheck(e)) && (ye.attributeNameCheck instanceof RegExp && y(ye.attributeNameCheck, t) || ye.attributeNameCheck instanceof Function && ye.attributeNameCheck(t)) || "is" === t && ye.allowCustomizedBuiltInElements && (ye.tagNameCheck instanceof RegExp && y(ye.tagNameCheck, n) || ye.tagNameCheck instanceof Function && ye.tagNameCheck(n)))) return !1
                            } else if (He[t]);
                            else if (y(he, g(n, fe, "")));
                            else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== b(n, "data:") || !ze[e])
                                if (ke && !y(pe, g(n, fe, "")));
                                else if (n) return !1;
                            return !0
                        },
                        xt = function(e) {
                            return e.indexOf("-") > 0
                        },
                        Ct = function(e) {
                            vt("beforeSanitizeAttributes", e, null);
                            const {
                                attributes: t
                            } = e;
                            if (!t) return;
                            const i = {
                                attrName: "",
                                attrValue: "",
                                keepAttr: !0,
                                allowedAttributes: be
                            };
                            let r = t.length;
                            for (; r--;) {
                                const a = t[r],
                                    {
                                        name: o,
                                        namespaceURI: s,
                                        value: d
                                    } = a,
                                    l = tt(o);
                                let p = "value" === o ? d : v(d);
                                if (i.attrName = l, i.attrValue = p, i.keepAttr = !0, i.forceKeepAttr = void 0, vt("uponSanitizeAttribute", e, i), p = i.attrValue, i.forceKeepAttr) continue;
                                if (ft(o, e), !i.keepAttr) continue;
                                if (!Ae && y(/\/>/i, p)) {
                                    ft(o, e);
                                    continue
                                }
                                Ze && u([se, de, le], (e => {
                                    p = g(p, e, " ")
                                }));
                                const f = tt(e.nodeName);
                                if (wt(f, l, p)) {
                                    if (!Oe || "id" !== l && "name" !== l || (ft(o, e), p = De + p), J && "object" == typeof z && "function" == typeof z.getAttributeType)
                                        if (s);
                                        else switch (z.getAttributeType(f, l)) {
                                            case "TrustedHTML":
                                                p = J.createHTML(p);
                                                break;
                                            case "TrustedScriptURL":
                                                p = J.createScriptURL(p)
                                        }
                                    try {
                                        s ? e.setAttributeNS(s, o, p) : e.setAttribute(o, p), c(n.removed)
                                    } catch (e) {}
                                }
                            }
                            vt("afterSanitizeAttributes", e, null)
                        },
                        Et = function e(t) {
                            let n = null;
                            const i = mt(t);
                            for (vt("beforeSanitizeShadowDOM", t, null); n = i.nextNode();) vt("uponSanitizeShadowNode", n, null), yt(n) || (n.content instanceof d && e(n.content), Ct(n));
                            vt("afterSanitizeShadowDOM", t, null)
                        };
                    return n.sanitize = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = null,
                            a = null,
                            o = null,
                            s = null;
                        if (Ye = !e, Ye && (e = "\x3c!--\x3e"), "string" != typeof e && !bt(e)) {
                            if ("function" != typeof e.toString) throw w("toString is not a function");
                            if ("string" != typeof(e = e.toString())) throw w("dirty is not a string, aborting")
                        }
                        if (!n.isSupported) return e;
                        if (Me || at(t), n.removed = [], "string" == typeof e && (Be = !1), Be) {
                            if (e.nodeName) {
                                const t = tt(e.nodeName);
                                if (!me[t] || we[t]) throw w("root node is forbidden and cannot be sanitized in-place")
                            }
                        } else if (e instanceof x) i = ht("\x3c!----\x3e"), a = i.ownerDocument.importNode(e, !0), 1 === a.nodeType && "BODY" === a.nodeName || "HTML" === a.nodeName ? i = a : i.appendChild(a);
                        else {
                            if (!Ie && !Ze && !Se && -1 === e.indexOf("<")) return J && Ne ? J.createHTML(e) : e;
                            if (i = ht(e), !i) return Ie ? null : Ne ? ee : ""
                        }
                        i && Te && pt(i.firstChild);
                        const l = mt(Be ? e : i);
                        for (; o = l.nextNode();) yt(o) || (o.content instanceof d && Et(o.content), Ct(o));
                        if (Be) return e;
                        if (Ie) {
                            if (_e)
                                for (s = ie.call(i.ownerDocument); i.firstChild;) s.appendChild(i.firstChild);
                            else s = i;
                            return (be.shadowroot || be.shadowrootmode) && (s = ae.call(r, s, !0)), s
                        }
                        let c = Se ? i.outerHTML : i.innerHTML;
                        return Se && me["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && y($, i.ownerDocument.doctype.name) && (c = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + c), Ze && u([se, de, le], (e => {
                            c = g(c, e, " ")
                        })), J && Ne ? J.createHTML(c) : c
                    }, n.setConfig = function() {
                        at(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), Me = !0
                    }, n.clearConfig = function() {
                        nt = null, Me = !1
                    }, n.isValidAttribute = function(e, t, n) {
                        nt || at({});
                        const i = tt(e),
                            r = tt(t);
                        return wt(i, r, n)
                    }, n.addHook = function(e, t) {
                        "function" == typeof t && (oe[e] = oe[e] || [], p(oe[e], t))
                    }, n.removeHook = function(e) {
                        if (oe[e]) return c(oe[e])
                    }, n.removeHooks = function(e) {
                        oe[e] && (oe[e] = [])
                    }, n.removeAllHooks = function() {
                        oe = {}
                    }, n
                }
                return Y()
            }()
        },
        1147: function(e, t, n) {
            "use strict";
            var i = n(9738);

            function r() {}

            function a() {}
            a.resetWarningCache = r, e.exports = function() {
                function e(e, t, n, r, a, o) {
                    if (o !== i) {
                        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation", s
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: a,
                    resetWarningCache: r
                };
                return n.PropTypes = n, n
            }
        },
        2972: function(e, t, n) {
            e.exports = n(1147)()
        },
        9738: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        9207: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                r = n(1914),
                a = (o(r), o(n(2972)));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                function t() {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), i(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.contentDidMount()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.props.contentDidUpdate()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return r.Children.only(this.props.children)
                    }
                }]), t
            }(r.Component);
            s.propTypes = {
                children: a.default.element.isRequired,
                contentDidMount: a.default.func.isRequired,
                contentDidUpdate: a.default.func.isRequired
            }, t.default = s
        },
        9943: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FrameContextConsumer = t.FrameContextProvider = t.useFrame = t.FrameContext = void 0;
            var i, r = n(1914),
                a = (i = r) && i.__esModule ? i : {
                    default: i
                };
            var o = void 0,
                s = void 0;
            "undefined" != typeof document && (o = document), "undefined" != typeof window && (s = window);
            var d = t.FrameContext = a.default.createContext({
                    document: o,
                    window: s
                }),
                l = (t.useFrame = function() {
                    return a.default.useContext(d)
                }, d.Provider),
                u = d.Consumer;
            t.FrameContextProvider = l, t.FrameContextConsumer = u
        },
        3927: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Frame = void 0;
            var i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                },
                r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                a = n(1914),
                o = c(a),
                s = c(n(579)),
                d = c(n(2972)),
                l = n(9943),
                u = c(n(9207));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var p = t.Frame = function(e) {
                function t(e, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var i = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                    return i.setRef = function(e) {
                        i.nodeRef.current = e;
                        var t = i.props.forwardedRef;
                        "function" == typeof t ? t(e) : t && (t.current = e)
                    }, i.handleLoad = function() {
                        clearInterval(i.loadCheck), i.state.iframeLoaded || i.setState({
                            iframeLoaded: !0
                        })
                    }, i.loadCheck = function() {
                        return setInterval((function() {
                            i.handleLoad()
                        }), 500)
                    }, i._isMounted = !1, i.nodeRef = o.default.createRef(), i.state = {
                        iframeLoaded: !1
                    }, i
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), r(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this._isMounted = !0, this.getDoc() && this.nodeRef.current.contentWindow.addEventListener("DOMContentLoaded", this.handleLoad)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this._isMounted = !1, this.nodeRef.current.removeEventListener("DOMContentLoaded", this.handleLoad)
                    }
                }, {
                    key: "getDoc",
                    value: function() {
                        return this.nodeRef.current ? this.nodeRef.current.contentDocument : null
                    }
                }, {
                    key: "getMountTarget",
                    value: function() {
                        var e = this.getDoc();
                        return this.props.mountTarget ? e.querySelector(this.props.mountTarget) : e.body.children[0]
                    }
                }, {
                    key: "renderFrameContents",
                    value: function() {
                        if (!this._isMounted) return null;
                        var e = this.getDoc();
                        if (!e) return null;
                        var t = this.props.contentDidMount,
                            n = this.props.contentDidUpdate,
                            i = e.defaultView || e.parentView,
                            r = o.default.createElement(u.default, {
                                contentDidMount: t,
                                contentDidUpdate: n
                            }, o.default.createElement(l.FrameContextProvider, {
                                value: {
                                    document: e,
                                    window: i
                                }
                            }, o.default.createElement("div", {
                                className: "frame-content"
                            }, this.props.children))),
                            a = this.getMountTarget();
                        return [s.default.createPortal(this.props.head, this.getDoc().head), s.default.createPortal(r, a)]
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = i({}, this.props, {
                            srcDoc: this.props.initialContent,
                            children: void 0
                        });
                        return delete e.head, delete e.initialContent, delete e.mountTarget, delete e.contentDidMount, delete e.contentDidUpdate, delete e.forwardedRef, o.default.createElement("iframe", i({}, e, {
                            ref: this.setRef,
                            onLoad: this.handleLoad
                        }), this.state.iframeLoaded && this.renderFrameContents())
                    }
                }]), t
            }(a.Component);
            p.propTypes = {
                style: d.default.object,
                head: d.default.node,
                initialContent: d.default.string,
                mountTarget: d.default.string,
                contentDidMount: d.default.func,
                contentDidUpdate: d.default.func,
                children: d.default.oneOfType([d.default.element, d.default.arrayOf(d.default.element)])
            }, p.defaultProps = {
                style: {},
                head: null,
                children: void 0,
                mountTarget: void 0,
                contentDidMount: function() {},
                contentDidUpdate: function() {},
                initialContent: '<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'
            }, t.default = o.default.forwardRef((function(e, t) {
                return o.default.createElement(p, i({}, e, {
                    forwardedRef: t
                }))
            }))
        },
        7400: function(e, t, n) {
            "use strict";
            var i = n(3927);
            Object.defineProperty(t, "ZP", {
                enumerable: !0,
                get: function() {
                    return (e = i, e && e.__esModule ? e : {
                        default: e
                    }).default;
                    var e
                }
            });
            var r = n(9943);
            Object.defineProperty(t, "Kr", {
                enumerable: !0,
                get: function() {
                    return r.FrameContextConsumer
                }
            }), Object.defineProperty(t, "xQ", {
                enumerable: !0,
                get: function() {
                    return r.useFrame
                }
            })
        },
        565: function(e, t, n) {
            "use strict";
            var i, r = n(9639),
                a = (i = r) && i.__esModule ? i : {
                    default: i
                };
            var o = -1;

            function s(e, t) {
                if (e === o) return a.default.transform(t)
            }
            Object.defineProperty(s, "name", {
                value: "stylisRTLPlugin"
            }), t.ZP = s
        },
        9611: function(e, t, n) {
            "use strict";

            function i(e, t) {
                return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, i(e, t)
            }
            n.d(t, {
                Z: function() {
                    return i
                }
            })
        },
        8076: function(e, t, n) {
            "use strict";
            n.d(t, {
                OH: function() {
                    return a
                },
                q: function() {
                    return Yn
                },
                vc: function() {
                    return Tt
                },
                to: function() {
                    return On
                },
                Ab: function() {
                    return Mt
                },
                q_: function() {
                    return An
                },
                ZI: function() {
                    return Sn
                },
                Yz: function() {
                    return Mn
                }
            });
            var i = n(1914),
                r = Object.defineProperty,
                a = {};
            ((e, t) => {
                for (var n in t) r(e, n, {
                    get: t[n],
                    enumerable: !0
                })
            })(a, {
                assign: () => F,
                colors: () => D,
                createStringInterpolator: () => _,
                skipAnimation: () => L,
                to: () => N,
                willAdvance: () => B
            });
            var o = C(),
                s = e => v(e, o),
                d = C();
            s.write = e => v(e, d);
            var l = C();
            s.onStart = e => v(e, l);
            var u = C();
            s.onFrame = e => v(e, u);
            var c = C();
            s.onFinish = e => v(e, c);
            var p = [];
            s.setTimeout = (e, t) => {
                const n = s.now() + t,
                    i = () => {
                        const e = p.findIndex((e => e.cancel == i));
                        ~e && p.splice(e, 1), g -= ~e ? 1 : 0
                    },
                    r = {
                        time: n,
                        handler: e,
                        cancel: i
                    };
                return p.splice(f(n), 0, r), g += 1, y(), r
            };
            var f = e => ~(~p.findIndex((t => t.time > e)) || ~p.length);
            s.cancel = e => {
                l.delete(e), u.delete(e), c.delete(e), o.delete(e), d.delete(e)
            }, s.sync = e => {
                b = !0, s.batchedUpdates(e), b = !1
            }, s.throttle = e => {
                let t;

                function n() {
                    try {
                        e(...t)
                    } finally {
                        t = null
                    }
                }

                function i() {
                    for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++) i[r] = arguments[r];
                    t = i, s.onStart(n)
                }
                return i.handler = e, i.cancel = () => {
                    l.delete(n), t = null
                }, i
            };
            var h = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
            s.use = e => h = e, s.now = "undefined" != typeof performance ? () => performance.now() : Date.now, s.batchedUpdates = e => e(), s.catch = console.error, s.frameLoop = "always", s.advance = () => {
                "demand" !== s.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : x()
            };
            var m = -1,
                g = 0,
                b = !1;

            function v(e, t) {
                b ? (t.delete(e), e(0)) : (t.add(e), y())
            }

            function y() {
                m < 0 && (m = 0, "demand" !== s.frameLoop && h(w))
            }

            function w() {
                ~m && (h(w), s.batchedUpdates(x))
            }

            function x() {
                const e = m;
                m = s.now();
                const t = f(m);
                t && (E(p.splice(0, t), (e => e.handler())), g -= t), g ? (l.flush(), o.flush(e ? Math.min(64, m - e) : 16.667), u.flush(), d.flush(), c.flush()) : m = -1
            }

            function C() {
                let e = new Set,
                    t = e;
                return {
                    add(n) {
                        g += t != e || e.has(n) ? 0 : 1, e.add(n)
                    },
                    delete(n) {
                        return g -= t == e && e.has(n) ? 1 : 0, e.delete(n)
                    },
                    flush(n) {
                        t.size && (e = new Set, g -= t.size, E(t, (t => t(n) && e.add(t))), g += e.size, t = e)
                    }
                }
            }

            function E(e, t) {
                e.forEach((e => {
                    try {
                        t(e)
                    } catch (e) {
                        s.catch(e)
                    }
                }))
            }

            function k() {}
            var A = {
                arr: Array.isArray,
                obj: e => !!e && "Object" === e.constructor.name,
                fun: e => "function" == typeof e,
                str: e => "string" == typeof e,
                num: e => "number" == typeof e,
                und: e => void 0 === e
            };

            function Z(e, t) {
                if (A.arr(e)) {
                    if (!A.arr(t) || e.length !== t.length) return !1;
                    for (let n = 0; n < e.length; n++)
                        if (e[n] !== t[n]) return !1;
                    return !0
                }
                return e === t
            }
            var S = (e, t) => e.forEach(t);

            function M(e, t, n) {
                if (A.arr(e))
                    for (let i = 0; i < e.length; i++) t.call(n, e[i], `${i}`);
                else
                    for (const i in e) e.hasOwnProperty(i) && t.call(n, e[i], i)
            }
            var T = e => A.und(e) ? [] : A.arr(e) ? e : [e];

            function I(e, t) {
                if (e.size) {
                    const n = Array.from(e);
                    e.clear(), S(n, t)
                }
            }
            var _, N, R = function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                    return I(e, (e => e(...n)))
                },
                O = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
                D = null,
                L = !1,
                B = k,
                F = e => {
                    e.to && (N = e.to), e.now && (s.now = e.now), void 0 !== e.colors && (D = e.colors), null != e.skipAnimation && (L = e.skipAnimation), e.createStringInterpolator && (_ = e.createStringInterpolator), e.requestAnimationFrame && s.use(e.requestAnimationFrame), e.batchedUpdates && (s.batchedUpdates = e.batchedUpdates), e.willAdvance && (B = e.willAdvance), e.frameLoop && (s.frameLoop = e.frameLoop)
                },
                P = new Set,
                j = [],
                z = [],
                U = 0,
                H = {
                    get idle() {
                        return !P.size && !j.length
                    },
                    start(e) {
                        U > e.priority ? (P.add(e), s.onStart(W)) : ($(e), s(X))
                    },
                    advance: X,
                    sort(e) {
                        if (U) s.onFrame((() => H.sort(e)));
                        else {
                            const t = j.indexOf(e);
                            ~t && (j.splice(t, 1), V(e))
                        }
                    },
                    clear() {
                        j = [], P.clear()
                    }
                };

            function W() {
                P.forEach($), P.clear(), s(X)
            }

            function $(e) {
                j.includes(e) || V(e)
            }

            function V(e) {
                j.splice(function(e, t) {
                    const n = e.findIndex(t);
                    return n < 0 ? e.length : n
                }(j, (t => t.priority > e.priority)), 0, e)
            }

            function X(e) {
                const t = z;
                for (let n = 0; n < j.length; n++) {
                    const i = j[n];
                    U = i.priority, i.idle || (B(i), i.advance(e), i.idle || t.push(i))
                }
                return U = 0, (z = j).length = 0, (j = t).length > 0
            }
            var q = "[-+]?\\d*\\.?\\d+",
                Y = q + "%";

            function G() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)"
            }
            var Q = new RegExp("rgb" + G(q, q, q)),
                K = new RegExp("rgba" + G(q, q, q, q)),
                J = new RegExp("hsl" + G(q, Y, Y)),
                ee = new RegExp("hsla" + G(q, Y, Y, q)),
                te = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                ne = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                ie = /^#([0-9a-fA-F]{6})$/,
                re = /^#([0-9a-fA-F]{8})$/;

            function ae(e, t, n) {
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
            }

            function oe(e, t, n) {
                const i = n < .5 ? n * (1 + t) : n + t - n * t,
                    r = 2 * n - i,
                    a = ae(r, i, e + 1 / 3),
                    o = ae(r, i, e),
                    s = ae(r, i, e - 1 / 3);
                return Math.round(255 * a) << 24 | Math.round(255 * o) << 16 | Math.round(255 * s) << 8
            }

            function se(e) {
                const t = parseInt(e, 10);
                return t < 0 ? 0 : t > 255 ? 255 : t
            }

            function de(e) {
                return (parseFloat(e) % 360 + 360) % 360 / 360
            }

            function le(e) {
                const t = parseFloat(e);
                return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
            }

            function ue(e) {
                const t = parseFloat(e);
                return t < 0 ? 0 : t > 100 ? 1 : t / 100
            }

            function ce(e) {
                let t = function(e) {
                    let t;
                    return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = ie.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : D && void 0 !== D[e] ? D[e] : (t = Q.exec(e)) ? (se(t[1]) << 24 | se(t[2]) << 16 | se(t[3]) << 8 | 255) >>> 0 : (t = K.exec(e)) ? (se(t[1]) << 24 | se(t[2]) << 16 | se(t[3]) << 8 | le(t[4])) >>> 0 : (t = te.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = re.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ne.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = J.exec(e)) ? (255 | oe(de(t[1]), ue(t[2]), ue(t[3]))) >>> 0 : (t = ee.exec(e)) ? (oe(de(t[1]), ue(t[2]), ue(t[3])) | le(t[4])) >>> 0 : null
                }(e);
                if (null === t) return e;
                t = t || 0;
                return `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`
            }
            var pe = (e, t, n) => {
                if (A.fun(e)) return e;
                if (A.arr(e)) return pe({
                    range: e,
                    output: t,
                    extrapolate: n
                });
                if (A.str(e.output[0])) return _(e);
                const i = e,
                    r = i.output,
                    a = i.range || [0, 1],
                    o = i.extrapolateLeft || i.extrapolate || "extend",
                    s = i.extrapolateRight || i.extrapolate || "extend",
                    d = i.easing || (e => e);
                return e => {
                    const t = function(e, t) {
                        for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
                        return n - 1
                    }(e, a);
                    return function(e, t, n, i, r, a, o, s, d) {
                        let l = d ? d(e) : e;
                        if (l < t) {
                            if ("identity" === o) return l;
                            "clamp" === o && (l = t)
                        }
                        if (l > n) {
                            if ("identity" === s) return l;
                            "clamp" === s && (l = n)
                        }
                        if (i === r) return i;
                        if (t === n) return e <= t ? i : r;
                        t === -1 / 0 ? l = -l : n === 1 / 0 ? l -= t : l = (l - t) / (n - t);
                        l = a(l), i === -1 / 0 ? l = -l : r === 1 / 0 ? l += i : l = l * (r - i) + i;
                        return l
                    }(e, a[t], a[t + 1], r[t], r[t + 1], d, o, s, i.map)
                }
            };
            var fe = 1.70158,
                he = 1.525 * fe,
                me = fe + 1,
                ge = 2 * Math.PI / 3,
                be = 2 * Math.PI / 4.5,
                ve = e => {
                    const t = 7.5625,
                        n = 2.75;
                    return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
                },
                ye = {
                    linear: e => e,
                    easeInQuad: e => e * e,
                    easeOutQuad: e => 1 - (1 - e) * (1 - e),
                    easeInOutQuad: e => e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
                    easeInCubic: e => e * e * e,
                    easeOutCubic: e => 1 - Math.pow(1 - e, 3),
                    easeInOutCubic: e => e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
                    easeInQuart: e => e * e * e * e,
                    easeOutQuart: e => 1 - Math.pow(1 - e, 4),
                    easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
                    easeInQuint: e => e * e * e * e * e,
                    easeOutQuint: e => 1 - Math.pow(1 - e, 5),
                    easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
                    easeInSine: e => 1 - Math.cos(e * Math.PI / 2),
                    easeOutSine: e => Math.sin(e * Math.PI / 2),
                    easeInOutSine: e => -(Math.cos(Math.PI * e) - 1) / 2,
                    easeInExpo: e => 0 === e ? 0 : Math.pow(2, 10 * e - 10),
                    easeOutExpo: e => 1 === e ? 1 : 1 - Math.pow(2, -10 * e),
                    easeInOutExpo: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
                    easeInCirc: e => 1 - Math.sqrt(1 - Math.pow(e, 2)),
                    easeOutCirc: e => Math.sqrt(1 - Math.pow(e - 1, 2)),
                    easeInOutCirc: e => e < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
                    easeInBack: e => me * e * e * e - fe * e * e,
                    easeOutBack: e => 1 + me * Math.pow(e - 1, 3) + fe * Math.pow(e - 1, 2),
                    easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - he) / 2 : (Math.pow(2 * e - 2, 2) * ((he + 1) * (2 * e - 2) + he) + 2) / 2,
                    easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * ge),
                    easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * ge) + 1,
                    easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * be) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * be) / 2 + 1,
                    easeInBounce: e => 1 - ve(1 - e),
                    easeOutBounce: ve,
                    easeInOutBounce: e => e < .5 ? (1 - ve(1 - 2 * e)) / 2 : (1 + ve(2 * e - 1)) / 2,
                    steps: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "end";
                        return n => {
                            const i = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e,
                                r = "end" === t ? Math.floor(i) : Math.ceil(i);
                            return a = 0, o = 1, s = r / e, Math.min(Math.max(s, a), o);
                            var a, o, s
                        }
                    }
                },
                we = Symbol.for("FluidValue.get"),
                xe = Symbol.for("FluidValue.observers"),
                Ce = e => Boolean(e && e[we]),
                Ee = e => e && e[we] ? e[we]() : e,
                ke = e => e[xe] || null;

            function Ae(e, t) {
                const n = e[xe];
                n && n.forEach((e => {
                    ! function(e, t) {
                        e.eventObserved ? e.eventObserved(t) : e(t)
                    }(e, t)
                }))
            }
            var Ze = class {
                    constructor(e) {
                        if (!e && !(e = this.get)) throw Error("Unknown getter");
                        Se(this, e)
                    }
                },
                Se = (e, t) => _e(e, we, t);

            function Me(e, t) {
                if (e[we]) {
                    let n = e[xe];
                    n || _e(e, xe, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
                }
                return t
            }

            function Te(e, t) {
                const n = e[xe];
                if (n && n.has(t)) {
                    const i = n.size - 1;
                    i ? n.delete(t) : e[xe] = null, e.observerRemoved && e.observerRemoved(i, t)
                }
            }
            var Ie, _e = (e, t, n) => Object.defineProperty(e, t, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }),
                Ne = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                Re = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
                Oe = new RegExp(`(${Ne.source})(%|[a-z]+)`, "i"),
                De = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
                Le = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
                Be = e => {
                    const [t, n] = Fe(e);
                    if (!t || O()) return e;
                    const i = window.getComputedStyle(document.documentElement).getPropertyValue(t);
                    if (i) return i.trim();
                    if (n && n.startsWith("--")) {
                        const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
                        return t || e
                    }
                    return n && Le.test(n) ? Be(n) : n || e
                },
                Fe = e => {
                    const t = Le.exec(e);
                    if (!t) return [, ];
                    const [, n, i] = t;
                    return [n, i]
                },
                Pe = (e, t, n, i, r) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(i)}, ${r})`,
                je = e => {
                    Ie || (Ie = D ? new RegExp(`(${Object.keys(D).join("|")})(?!\\w)`, "g") : /^\b$/);
                    const t = e.output.map((e => Ee(e).replace(Le, Be).replace(Re, ce).replace(Ie, ce))),
                        n = t.map((e => e.match(Ne).map(Number))),
                        i = n[0].map(((e, t) => n.map((e => {
                            if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                            return e[t]
                        })))).map((t => pe({ ...e,
                            output: t
                        })));
                    return e => {
                        const n = !Oe.test(t[0]) && t.find((e => Oe.test(e))) ? .replace(Ne, "");
                        let r = 0;
                        return t[0].replace(Ne, (() => `${i[r++](e)}${n||""}`)).replace(De, Pe)
                    }
                },
                ze = "react-spring: ",
                Ue = e => {
                    const t = e;
                    let n = !1;
                    if ("function" != typeof t) throw new TypeError(`${ze}once requires a function parameter`);
                    return function() {
                        n || (t(...arguments), n = !0)
                    }
                },
                He = Ue(console.warn);
            var We = Ue(console.warn);

            function $e(e) {
                return A.str(e) && ("#" == e[0] || /\d/.test(e) || !O() && Le.test(e) || e in (D || {}))
            }
            var Ve = O() ? i.useEffect : i.useLayoutEffect,
                Xe = () => {
                    const e = (0, i.useRef)(!1);
                    return Ve((() => (e.current = !0, () => {
                        e.current = !1
                    })), []), e
                };

            function qe() {
                const e = (0, i.useState)()[1],
                    t = Xe();
                return () => {
                    t.current && e(Math.random())
                }
            }
            var Ye = e => (0, i.useEffect)(e, Ge),
                Ge = [];

            function Qe(e) {
                const t = (0, i.useRef)();
                return (0, i.useEffect)((() => {
                    t.current = e
                })), t.current
            }
            var Ke = Symbol.for("Animated:node"),
                Je = e => e && e[Ke],
                et = (e, t) => {
                    return n = e, i = Ke, r = t, Object.defineProperty(n, i, {
                        value: r,
                        writable: !0,
                        configurable: !0
                    });
                    var n, i, r
                },
                tt = e => e && e[Ke] && e[Ke].getPayload(),
                nt = class {
                    constructor() {
                        et(this, this)
                    }
                    getPayload() {
                        return this.payload || []
                    }
                },
                it = class extends nt {
                    constructor(e) {
                        super(), this._value = e, this.done = !0, this.durationProgress = 0, A.num(this._value) && (this.lastPosition = this._value)
                    }
                    static create(e) {
                        return new it(e)
                    }
                    getPayload() {
                        return [this]
                    }
                    getValue() {
                        return this._value
                    }
                    setValue(e, t) {
                        return A.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
                    }
                    reset() {
                        const {
                            done: e
                        } = this;
                        this.done = !1, A.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
                    }
                },
                rt = class extends it {
                    constructor(e) {
                        super(0), this._string = null, this._toString = pe({
                            output: [e, e]
                        })
                    }
                    static create(e) {
                        return new rt(e)
                    }
                    getValue() {
                        const e = this._string;
                        return null == e ? this._string = this._toString(this._value) : e
                    }
                    setValue(e) {
                        if (A.str(e)) {
                            if (e == this._string) return !1;
                            this._string = e, this._value = 1
                        } else {
                            if (!super.setValue(e)) return !1;
                            this._string = null
                        }
                        return !0
                    }
                    reset(e) {
                        e && (this._toString = pe({
                            output: [this.getValue(), e]
                        })), this._value = 0, super.reset()
                    }
                },
                at = {
                    dependencies: null
                },
                ot = class extends nt {
                    constructor(e) {
                        super(), this.source = e, this.setValue(e)
                    }
                    getValue(e) {
                        const t = {};
                        return M(this.source, ((n, i) => {
                            var r;
                            (r = n) && r[Ke] === r ? t[i] = n.getValue(e) : Ce(n) ? t[i] = Ee(n) : e || (t[i] = n)
                        })), t
                    }
                    setValue(e) {
                        this.source = e, this.payload = this._makePayload(e)
                    }
                    reset() {
                        this.payload && S(this.payload, (e => e.reset()))
                    }
                    _makePayload(e) {
                        if (e) {
                            const t = new Set;
                            return M(e, this._addToPayload, t), Array.from(t)
                        }
                    }
                    _addToPayload(e) {
                        at.dependencies && Ce(e) && at.dependencies.add(e);
                        const t = tt(e);
                        t && S(t, (e => this.add(e)))
                    }
                },
                st = class extends ot {
                    constructor(e) {
                        super(e)
                    }
                    static create(e) {
                        return new st(e)
                    }
                    getValue() {
                        return this.source.map((e => e.getValue()))
                    }
                    setValue(e) {
                        const t = this.getPayload();
                        return e.length == t.length ? t.map(((t, n) => t.setValue(e[n]))).some(Boolean) : (super.setValue(e.map(dt)), !0)
                    }
                };

            function dt(e) {
                return ($e(e) ? rt : it).create(e)
            }

            function lt(e) {
                const t = Je(e);
                return t ? t.constructor : A.arr(e) ? st : $e(e) ? rt : it
            }
            var ut = (e, t) => {
                    const n = !A.fun(e) || e.prototype && e.prototype.isReactComponent;
                    return (0, i.forwardRef)(((r, a) => {
                        const o = (0, i.useRef)(null),
                            d = n && (0, i.useCallback)((e => {
                                o.current = function(e, t) {
                                    e && (A.fun(e) ? e(t) : e.current = t);
                                    return t
                                }(a, e)
                            }), [a]),
                            [l, u] = function(e, t) {
                                const n = new Set;
                                at.dependencies = n, e.style && (e = { ...e,
                                    style: t.createAnimatedStyle(e.style)
                                });
                                return e = new ot(e), at.dependencies = null, [e, n]
                            }(r, t),
                            c = qe(),
                            p = () => {
                                const e = o.current;
                                if (n && !e) return;
                                !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && c()
                            },
                            f = new ct(p, u),
                            h = (0, i.useRef)();
                        Ve((() => (h.current = f, S(u, (e => Me(e, f))), () => {
                            h.current && (S(h.current.deps, (e => Te(e, h.current))), s.cancel(h.current.update))
                        }))), (0, i.useEffect)(p, []), Ye((() => () => {
                            const e = h.current;
                            S(e.deps, (t => Te(t, e)))
                        }));
                        const m = t.getComponentProps(l.getValue());
                        return i.createElement(e, { ...m,
                            ref: d
                        })
                    }))
                },
                ct = class {
                    constructor(e, t) {
                        this.update = e, this.deps = t
                    }
                    eventObserved(e) {
                        "change" == e.type && s.write(this.update)
                    }
                };
            var pt = Symbol.for("AnimatedComponent"),
                ft = e => A.str(e) ? e : e && A.str(e.displayName) ? e.displayName : A.fun(e) && e.name || null;

            function ht(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                return A.fun(e) ? e(...n) : e
            }
            var mt = (e, t) => !0 === e || !!(t && e && (A.fun(e) ? e(t) : T(e).includes(t))),
                gt = (e, t) => A.obj(e) ? t && e[t] : e,
                bt = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
                vt = e => e,
                yt = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vt,
                        n = wt;
                    e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
                    const i = {};
                    for (const r of n) {
                        const n = t(e[r], r);
                        A.und(n) || (i[r] = n)
                    }
                    return i
                },
                wt = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
                xt = {
                    config: 1,
                    from: 1,
                    to: 1,
                    ref: 1,
                    loop: 1,
                    reset: 1,
                    pause: 1,
                    cancel: 1,
                    reverse: 1,
                    immediate: 1,
                    default: 1,
                    delay: 1,
                    onProps: 1,
                    onStart: 1,
                    onChange: 1,
                    onPause: 1,
                    onResume: 1,
                    onRest: 1,
                    onResolve: 1,
                    items: 1,
                    trail: 1,
                    sort: 1,
                    expires: 1,
                    initial: 1,
                    enter: 1,
                    update: 1,
                    leave: 1,
                    children: 1,
                    onDestroyed: 1,
                    keys: 1,
                    callId: 1,
                    parentId: 1
                };

            function Ct(e) {
                const t = function(e) {
                    const t = {};
                    let n = 0;
                    if (M(e, ((e, i) => {
                            xt[i] || (t[i] = e, n++)
                        })), n) return t
                }(e);
                if (t) {
                    const n = {
                        to: t
                    };
                    return M(e, ((e, i) => i in t || (n[i] = e))), n
                }
                return { ...e
                }
            }

            function Et(e) {
                return e = Ee(e), A.arr(e) ? e.map(Et) : $e(e) ? a.createStringInterpolator({
                    range: [0, 1],
                    output: [e, e]
                })(1) : e
            }

            function kt(e) {
                for (const t in e) return !0;
                return !1
            }

            function At(e) {
                return A.fun(e) || A.arr(e) && A.obj(e[0])
            }

            function Zt(e, t) {
                e.ref ? .delete(e), t ? .delete(e)
            }

            function St(e, t) {
                t && e.ref !== t && (e.ref ? .delete(e), t.add(e), e.ref = t)
            }

            function Mt(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3;
                Ve((() => {
                    if (t) {
                        let i = 0;
                        S(e, ((e, r) => {
                            const a = e.current;
                            if (a.length) {
                                let o = n * t[r];
                                isNaN(o) ? o = i : i = o, S(a, (e => {
                                    S(e.queue, (e => {
                                        const t = e.delay;
                                        e.delay = e => o + ht(t || 0, e)
                                    }))
                                })), e.start()
                            }
                        }))
                    } else {
                        let t = Promise.resolve();
                        S(e, (e => {
                            const n = e.current;
                            if (n.length) {
                                const i = n.map((e => {
                                    const t = e.queue;
                                    return e.queue = [], t
                                }));
                                t = t.then((() => (S(n, ((e, t) => S(i[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
                            }
                        }))
                    }
                }))
            }
            var Tt = {
                    default: {
                        tension: 170,
                        friction: 26
                    },
                    gentle: {
                        tension: 120,
                        friction: 14
                    },
                    wobbly: {
                        tension: 180,
                        friction: 12
                    },
                    stiff: {
                        tension: 210,
                        friction: 20
                    },
                    slow: {
                        tension: 280,
                        friction: 60
                    },
                    molasses: {
                        tension: 280,
                        friction: 120
                    }
                },
                It = { ...Tt.default,
                    mass: 1,
                    damping: 1,
                    easing: ye.linear,
                    clamp: !1
                },
                _t = class {
                    constructor() {
                        this.velocity = 0, Object.assign(this, It)
                    }
                };

            function Nt(e, t) {
                if (A.und(t.decay)) {
                    const n = !A.und(t.tension) || !A.und(t.friction);
                    !n && A.und(t.frequency) && A.und(t.damping) && A.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
                } else e.duration = void 0
            }
            var Rt = [],
                Ot = class {
                    constructor() {
                        this.changed = !1, this.values = Rt, this.toValues = null, this.fromValues = Rt, this.config = new _t, this.immediate = !1
                    }
                };

            function Dt(e, t) {
                let {
                    key: n,
                    props: i,
                    defaultProps: r,
                    state: o,
                    actions: d
                } = t;
                return new Promise(((t, l) => {
                    let u, c, p = mt(i.cancel ? ? r ? .cancel, n);
                    if (p) m();
                    else {
                        A.und(i.pause) || (o.paused = mt(i.pause, n));
                        let e = r ? .pause;
                        !0 !== e && (e = o.paused || mt(e, n)), u = ht(i.delay || 0, n), e ? (o.resumeQueue.add(h), d.pause()) : (d.resume(), h())
                    }

                    function f() {
                        o.resumeQueue.add(h), o.timeouts.delete(c), c.cancel(), u = c.time - s.now()
                    }

                    function h() {
                        u > 0 && !a.skipAnimation ? (o.delayed = !0, c = s.setTimeout(m, u), o.pauseQueue.add(f), o.timeouts.add(c)) : m()
                    }

                    function m() {
                        o.delayed && (o.delayed = !1), o.pauseQueue.delete(f), o.timeouts.delete(c), e <= (o.cancelId || 0) && (p = !0);
                        try {
                            d.start({ ...i,
                                callId: e,
                                cancel: p
                            }, t)
                        } catch (e) {
                            l(e)
                        }
                    }
                }))
            }
            var Lt = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? Pt(e.get()) : t.every((e => e.noop)) ? Bt(e.get()) : Ft(e.get(), t.every((e => e.finished))),
                Bt = e => ({
                    value: e,
                    noop: !0,
                    finished: !0,
                    cancelled: !1
                }),
                Ft = function(e, t) {
                    return {
                        value: e,
                        finished: t,
                        cancelled: arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                    }
                },
                Pt = e => ({
                    value: e,
                    cancelled: !0,
                    finished: !1
                });

            function jt(e, t, n, i) {
                const {
                    callId: r,
                    parentId: o,
                    onRest: d
                } = t, {
                    asyncTo: l,
                    promise: u
                } = n;
                return o || e !== l || t.reset ? n.promise = (async () => {
                    n.asyncId = r, n.asyncTo = e;
                    const c = yt(t, ((e, t) => "onRest" === t ? void 0 : e));
                    let p, f;
                    const h = new Promise(((e, t) => (p = e, f = t))),
                        m = e => {
                            const t = r <= (n.cancelId || 0) && Pt(i) || r !== n.asyncId && Ft(i, !1);
                            if (t) throw e.result = t, f(e), e
                        },
                        g = (e, t) => {
                            const o = new Ut,
                                s = new Ht;
                            return (async () => {
                                if (a.skipAnimation) throw zt(n), s.result = Ft(i, !1), f(s), s;
                                m(o);
                                const d = A.obj(e) ? { ...e
                                } : { ...t,
                                    to: e
                                };
                                d.parentId = r, M(c, ((e, t) => {
                                    A.und(d[t]) && (d[t] = e)
                                }));
                                const l = await i.start(d);
                                return m(o), n.paused && await new Promise((e => {
                                    n.resumeQueue.add(e)
                                })), l
                            })()
                        };
                    let b;
                    if (a.skipAnimation) return zt(n), Ft(i, !1);
                    try {
                        let t;
                        t = A.arr(e) ? (async e => {
                            for (const t of e) await g(t)
                        })(e) : Promise.resolve(e(g, i.stop.bind(i))), await Promise.all([t.then(p), h]), b = Ft(i.get(), !0, !1)
                    } catch (e) {
                        if (e instanceof Ut) b = e.result;
                        else {
                            if (!(e instanceof Ht)) throw e;
                            b = e.result
                        }
                    } finally {
                        r == n.asyncId && (n.asyncId = o, n.asyncTo = o ? l : void 0, n.promise = o ? u : void 0)
                    }
                    return A.fun(d) && s.batchedUpdates((() => {
                        d(b, i, i.item)
                    })), b
                })() : u
            }

            function zt(e, t) {
                I(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
            }
            var Ut = class extends Error {
                    constructor() {
                        super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
                    }
                },
                Ht = class extends Error {
                    constructor() {
                        super("SkipAnimationSignal")
                    }
                },
                Wt = e => e instanceof Vt,
                $t = 1,
                Vt = class extends Ze {
                    constructor() {
                        super(...arguments), this.id = $t++, this._priority = 0
                    }
                    get priority() {
                        return this._priority
                    }
                    set priority(e) {
                        this._priority != e && (this._priority = e, this._onPriorityChange(e))
                    }
                    get() {
                        const e = Je(this);
                        return e && e.getValue()
                    }
                    to() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return a.to(this, t)
                    }
                    interpolate() {
                        He(`${ze}The "interpolate" function is deprecated in v9 (use "to" instead)`);
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return a.to(this, t)
                    }
                    toJSON() {
                        return this.get()
                    }
                    observerAdded(e) {
                        1 == e && this._attach()
                    }
                    observerRemoved(e) {
                        0 == e && this._detach()
                    }
                    _attach() {}
                    _detach() {}
                    _onChange(e) {
                        Ae(this, {
                            type: "change",
                            parent: this,
                            value: e,
                            idle: arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                        })
                    }
                    _onPriorityChange(e) {
                        this.idle || H.sort(this), Ae(this, {
                            type: "priority",
                            parent: this,
                            priority: e
                        })
                    }
                },
                Xt = Symbol.for("SpringPhase"),
                qt = e => (1 & e[Xt]) > 0,
                Yt = e => (2 & e[Xt]) > 0,
                Gt = e => (4 & e[Xt]) > 0,
                Qt = (e, t) => t ? e[Xt] |= 3 : e[Xt] &= -3,
                Kt = (e, t) => t ? e[Xt] |= 4 : e[Xt] &= -5,
                Jt = class extends Vt {
                    constructor(e, t) {
                        if (super(), this.animation = new Ot, this.defaultProps = {}, this._state = {
                                paused: !1,
                                delayed: !1,
                                pauseQueue: new Set,
                                resumeQueue: new Set,
                                timeouts: new Set
                            }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !A.und(e) || !A.und(t)) {
                            const n = A.obj(e) ? { ...e
                            } : { ...t,
                                from: e
                            };
                            A.und(n.default) && (n.default = !0), this.start(n)
                        }
                    }
                    get idle() {
                        return !(Yt(this) || this._state.asyncTo) || Gt(this)
                    }
                    get goal() {
                        return Ee(this.animation.to)
                    }
                    get velocity() {
                        const e = Je(this);
                        return e instanceof it ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
                    }
                    get hasAnimated() {
                        return qt(this)
                    }
                    get isAnimating() {
                        return Yt(this)
                    }
                    get isPaused() {
                        return Gt(this)
                    }
                    get isDelayed() {
                        return this._state.delayed
                    }
                    advance(e) {
                        let t = !0,
                            n = !1;
                        const i = this.animation;
                        let {
                            toValues: r
                        } = i;
                        const {
                            config: a
                        } = i, o = tt(i.to);
                        !o && Ce(i.to) && (r = T(Ee(i.to))), i.values.forEach(((s, d) => {
                            if (s.done) return;
                            const l = s.constructor == rt ? 1 : o ? o[d].lastPosition : r[d];
                            let u = i.immediate,
                                c = l;
                            if (!u) {
                                if (c = s.lastPosition, a.tension <= 0) return void(s.done = !0);
                                let t = s.elapsedTime += e;
                                const n = i.fromValues[d],
                                    r = null != s.v0 ? s.v0 : s.v0 = A.arr(a.velocity) ? a.velocity[d] : a.velocity;
                                let o;
                                const p = a.precision || (n == l ? .005 : Math.min(1, .001 * Math.abs(l - n)));
                                if (A.und(a.duration))
                                    if (a.decay) {
                                        const e = !0 === a.decay ? .998 : a.decay,
                                            i = Math.exp(-(1 - e) * t);
                                        c = n + r / (1 - e) * (1 - i), u = Math.abs(s.lastPosition - c) <= p, o = r * i
                                    } else {
                                        o = null == s.lastVelocity ? r : s.lastVelocity;
                                        const t = a.restVelocity || p / 10,
                                            i = a.clamp ? 0 : a.bounce,
                                            d = !A.und(i),
                                            f = n == l ? s.v0 > 0 : n < l;
                                        let h, m = !1;
                                        const g = 1,
                                            b = Math.ceil(e / g);
                                        for (let e = 0; e < b && (h = Math.abs(o) > t, h || (u = Math.abs(l - c) <= p, !u)); ++e) {
                                            d && (m = c == l || c > l == f, m && (o = -o * i, c = l));
                                            o += (1e-6 * -a.tension * (c - l) + .001 * -a.friction * o) / a.mass * g, c += o * g
                                        }
                                    }
                                else {
                                    let i = 1;
                                    a.duration > 0 && (this._memoizedDuration !== a.duration && (this._memoizedDuration = a.duration, s.durationProgress > 0 && (s.elapsedTime = a.duration * s.durationProgress, t = s.elapsedTime += e)), i = (a.progress || 0) + t / this._memoizedDuration, i = i > 1 ? 1 : i < 0 ? 0 : i, s.durationProgress = i), c = n + a.easing(i) * (l - n), o = (c - s.lastPosition) / e, u = 1 == i
                                }
                                s.lastVelocity = o, Number.isNaN(c) && (console.warn("Got NaN while animating:", this), u = !0)
                            }
                            o && !o[d].done && (u = !1), u ? s.done = !0 : t = !1, s.setValue(c, a.round) && (n = !0)
                        }));
                        const s = Je(this),
                            d = s.getValue();
                        if (t) {
                            const e = Ee(i.to);
                            d === e && !n || a.decay ? n && a.decay && this._onChange(d) : (s.setValue(e), this._onChange(e)), this._stop()
                        } else n && this._onChange(d)
                    }
                    set(e) {
                        return s.batchedUpdates((() => {
                            this._stop(), this._focus(e), this._set(e)
                        })), this
                    }
                    pause() {
                        this._update({
                            pause: !0
                        })
                    }
                    resume() {
                        this._update({
                            pause: !1
                        })
                    }
                    finish() {
                        if (Yt(this)) {
                            const {
                                to: e,
                                config: t
                            } = this.animation;
                            s.batchedUpdates((() => {
                                this._onStart(), t.decay || this._set(e, !1), this._stop()
                            }))
                        }
                        return this
                    }
                    update(e) {
                        return (this.queue || (this.queue = [])).push(e), this
                    }
                    start(e, t) {
                        let n;
                        return A.und(e) ? (n = this.queue || [], this.queue = []) : n = [A.obj(e) ? e : { ...t,
                            to: e
                        }], Promise.all(n.map((e => this._update(e)))).then((e => Lt(this, e)))
                    }
                    stop(e) {
                        const {
                            to: t
                        } = this.animation;
                        return this._focus(this.get()), zt(this._state, e && this._lastCallId), s.batchedUpdates((() => this._stop(t, e))), this
                    }
                    reset() {
                        this._update({
                            reset: !0
                        })
                    }
                    eventObserved(e) {
                        "change" == e.type ? this._start() : "priority" == e.type && (this.priority = e.priority + 1)
                    }
                    _prepareNode(e) {
                        const t = this.key || "";
                        let {
                            to: n,
                            from: i
                        } = e;
                        n = A.obj(n) ? n[t] : n, (null == n || At(n)) && (n = void 0), i = A.obj(i) ? i[t] : i, null == i && (i = void 0);
                        const r = {
                            to: n,
                            from: i
                        };
                        return qt(this) || (e.reverse && ([n, i] = [i, n]), i = Ee(i), A.und(i) ? Je(this) || this._set(n) : this._set(i)), r
                    }
                    _update(e, t) {
                        let { ...n
                        } = e;
                        const {
                            key: i,
                            defaultProps: r
                        } = this;
                        n.default && Object.assign(r, yt(n, ((e, t) => /^on/.test(t) ? gt(e, i) : e))), sn(this, n, "onProps"), dn(this, "onProps", n, this);
                        const a = this._prepareNode(n);
                        if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
                        const o = this._state;
                        return Dt(++this._lastCallId, {
                            key: i,
                            props: n,
                            defaultProps: r,
                            state: o,
                            actions: {
                                pause: () => {
                                    Gt(this) || (Kt(this, !0), R(o.pauseQueue), dn(this, "onPause", Ft(this, en(this, this.animation.to)), this))
                                },
                                resume: () => {
                                    Gt(this) && (Kt(this, !1), Yt(this) && this._resume(), R(o.resumeQueue), dn(this, "onResume", Ft(this, en(this, this.animation.to)), this))
                                },
                                start: this._merge.bind(this, a)
                            }
                        }).then((e => {
                            if (n.loop && e.finished && (!t || !e.noop)) {
                                const e = tn(n);
                                if (e) return this._update(e, !0)
                            }
                            return e
                        }))
                    }
                    _merge(e, t, n) {
                        if (t.cancel) return this.stop(!0), n(Pt(this));
                        const i = !A.und(e.to),
                            r = !A.und(e.from);
                        if (i || r) {
                            if (!(t.callId > this._lastToId)) return n(Pt(this));
                            this._lastToId = t.callId
                        }
                        const {
                            key: a,
                            defaultProps: o,
                            animation: d
                        } = this, {
                            to: l,
                            from: u
                        } = d;
                        let {
                            to: c = l,
                            from: p = u
                        } = e;
                        !r || i || t.default && !A.und(c) || (c = p), t.reverse && ([c, p] = [p, c]);
                        const f = !Z(p, u);
                        f && (d.from = p), p = Ee(p);
                        const h = !Z(c, l);
                        h && this._focus(c);
                        const m = At(t.to),
                            {
                                config: g
                            } = d,
                            {
                                decay: b,
                                velocity: v
                            } = g;
                        (i || r) && (g.velocity = 0), t.config && !m && function(e, t, n) {
                            n && (Nt(n = { ...n
                            }, t), t = { ...n,
                                ...t
                            }), Nt(e, t), Object.assign(e, t);
                            for (const t in It) null == e[t] && (e[t] = It[t]);
                            let {
                                frequency: i,
                                damping: r
                            } = e;
                            const {
                                mass: a
                            } = e;
                            A.und(i) || (i < .01 && (i = .01), r < 0 && (r = 0), e.tension = Math.pow(2 * Math.PI / i, 2) * a, e.friction = 4 * Math.PI * r * a / i)
                        }(g, ht(t.config, a), t.config !== o.config ? ht(o.config, a) : void 0);
                        let y = Je(this);
                        if (!y || A.und(c)) return n(Ft(this, !0));
                        const w = A.und(t.reset) ? r && !t.default : !A.und(p) && mt(t.reset, a),
                            x = w ? p : this.get(),
                            C = Et(c),
                            E = A.num(C) || A.arr(C) || $e(C),
                            k = !m && (!E || mt(o.immediate || t.immediate, a));
                        if (h) {
                            const e = lt(c);
                            if (e !== y.constructor) {
                                if (!k) throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);
                                y = this._set(C)
                            }
                        }
                        const M = y.constructor;
                        let I = Ce(c),
                            _ = !1;
                        if (!I) {
                            const e = w || !qt(this) && f;
                            (h || e) && (_ = Z(Et(x), C), I = !_), (Z(d.immediate, k) || k) && Z(g.decay, b) && Z(g.velocity, v) || (I = !0)
                        }
                        if (_ && Yt(this) && (d.changed && !w ? I = !0 : I || this._stop(l)), !m && ((I || Ce(l)) && (d.values = y.getPayload(), d.toValues = Ce(c) ? null : M == rt ? [1] : T(C)), d.immediate != k && (d.immediate = k, k || w || this._set(l)), I)) {
                            const {
                                onRest: e
                            } = d;
                            S(on, (e => sn(this, t, e)));
                            const i = Ft(this, en(this, l));
                            R(this._pendingCalls, i), this._pendingCalls.add(n), d.changed && s.batchedUpdates((() => {
                                d.changed = !w, e ? .(i, this), w ? ht(o.onRest, i) : d.onStart ? .(i, this)
                            }))
                        }
                        w && this._set(x), m ? n(jt(t.to, t, this._state, this)) : I ? this._start() : Yt(this) && !h ? this._pendingCalls.add(n) : n(Bt(x))
                    }
                    _focus(e) {
                        const t = this.animation;
                        e !== t.to && (ke(this) && this._detach(), t.to = e, ke(this) && this._attach())
                    }
                    _attach() {
                        let e = 0;
                        const {
                            to: t
                        } = this.animation;
                        Ce(t) && (Me(t, this), Wt(t) && (e = t.priority + 1)), this.priority = e
                    }
                    _detach() {
                        const {
                            to: e
                        } = this.animation;
                        Ce(e) && Te(e, this)
                    }
                    _set(e) {
                        let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        const n = Ee(e);
                        if (!A.und(n)) {
                            const e = Je(this);
                            if (!e || !Z(n, e.getValue())) {
                                const i = lt(n);
                                e && e.constructor == i ? e.setValue(n) : et(this, i.create(n)), e && s.batchedUpdates((() => {
                                    this._onChange(n, t)
                                }))
                            }
                        }
                        return Je(this)
                    }
                    _onStart() {
                        const e = this.animation;
                        e.changed || (e.changed = !0, dn(this, "onStart", Ft(this, en(this, e.to)), this))
                    }
                    _onChange(e, t) {
                        t || (this._onStart(), ht(this.animation.onChange, e, this)), ht(this.defaultProps.onChange, e, this), super._onChange(e, t)
                    }
                    _start() {
                        const e = this.animation;
                        Je(this).reset(Ee(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), Yt(this) || (Qt(this, !0), Gt(this) || this._resume())
                    }
                    _resume() {
                        a.skipAnimation ? this.finish() : H.start(this)
                    }
                    _stop(e, t) {
                        if (Yt(this)) {
                            Qt(this, !1);
                            const n = this.animation;
                            S(n.values, (e => {
                                e.done = !0
                            })), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), Ae(this, {
                                type: "idle",
                                parent: this
                            });
                            const i = t ? Pt(this.get()) : Ft(this.get(), en(this, e ? ? n.to));
                            R(this._pendingCalls, i), n.changed && (n.changed = !1, dn(this, "onRest", i, this))
                        }
                    }
                };

            function en(e, t) {
                const n = Et(t);
                return Z(Et(e.get()), n)
            }

            function tn(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.loop,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.to;
                const i = ht(t);
                if (i) {
                    const r = !0 !== i && Ct(i),
                        a = (r || e).reverse,
                        o = !r || r.reset;
                    return nn({ ...e,
                        loop: t,
                        default: !1,
                        pause: void 0,
                        to: !a || At(n) ? n : void 0,
                        from: o ? e.from : void 0,
                        reset: o,
                        ...r
                    })
                }
            }

            function nn(e) {
                const {
                    to: t,
                    from: n
                } = e = Ct(e), i = new Set;
                return A.obj(t) && an(t, i), A.obj(n) && an(n, i), e.keys = i.size ? Array.from(i) : null, e
            }

            function rn(e) {
                const t = nn(e);
                return A.und(t.default) && (t.default = yt(t)), t
            }

            function an(e, t) {
                M(e, ((e, n) => null != e && t.add(n)))
            }
            var on = ["onStart", "onRest", "onChange", "onPause", "onResume"];

            function sn(e, t, n) {
                e.animation[n] = t[n] !== bt(t, n) ? gt(t[n], e.key) : void 0
            }

            function dn(e, t) {
                for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) i[r - 2] = arguments[r];
                e.animation[t] ? .(...i), e.defaultProps[t] ? .(...i)
            }
            var ln = ["onStart", "onChange", "onRest"],
                un = 1,
                cn = class {
                    constructor(e, t) {
                        this.id = un++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
                            paused: !1,
                            pauseQueue: new Set,
                            resumeQueue: new Set,
                            timeouts: new Set
                        }, this._events = {
                            onStart: new Map,
                            onChange: new Map,
                            onRest: new Map
                        }, this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start({
                            default: !0,
                            ...e
                        })
                    }
                    get idle() {
                        return !this._state.asyncTo && Object.values(this.springs).every((e => e.idle && !e.isDelayed && !e.isPaused))
                    }
                    get item() {
                        return this._item
                    }
                    set item(e) {
                        this._item = e
                    }
                    get() {
                        const e = {};
                        return this.each(((t, n) => e[n] = t.get())), e
                    }
                    set(e) {
                        for (const t in e) {
                            const n = e[t];
                            A.und(n) || this.springs[t].set(n)
                        }
                    }
                    update(e) {
                        return e && this.queue.push(nn(e)), this
                    }
                    start(e) {
                        let {
                            queue: t
                        } = this;
                        return e ? t = T(e).map(nn) : this.queue = [], this._flush ? this._flush(this, t) : (vn(this, t), pn(this, t))
                    }
                    stop(e, t) {
                        if (e !== !!e && (t = e), t) {
                            const n = this.springs;
                            S(T(t), (t => n[t].stop(!!e)))
                        } else zt(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
                        return this
                    }
                    pause(e) {
                        if (A.und(e)) this.start({
                            pause: !0
                        });
                        else {
                            const t = this.springs;
                            S(T(e), (e => t[e].pause()))
                        }
                        return this
                    }
                    resume(e) {
                        if (A.und(e)) this.start({
                            pause: !1
                        });
                        else {
                            const t = this.springs;
                            S(T(e), (e => t[e].resume()))
                        }
                        return this
                    }
                    each(e) {
                        M(this.springs, e)
                    }
                    _onFrame() {
                        const {
                            onStart: e,
                            onChange: t,
                            onRest: n
                        } = this._events, i = this._active.size > 0, r = this._changed.size > 0;
                        (i && !this._started || r && !this._started) && (this._started = !0, I(e, (e => {
                            let [t, n] = e;
                            n.value = this.get(), t(n, this, this._item)
                        })));
                        const a = !i && this._started,
                            o = r || a && n.size ? this.get() : null;
                        r && t.size && I(t, (e => {
                            let [t, n] = e;
                            n.value = o, t(n, this, this._item)
                        })), a && (this._started = !1, I(n, (e => {
                            let [t, n] = e;
                            n.value = o, t(n, this, this._item)
                        })))
                    }
                    eventObserved(e) {
                        if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
                        else {
                            if ("idle" != e.type) return;
                            this._active.delete(e.parent)
                        }
                        s.onFrame(this._onFrame)
                    }
                };

            function pn(e, t) {
                return Promise.all(t.map((t => fn(e, t)))).then((t => Lt(e, t)))
            }
            async function fn(e, t, n) {
                const {
                    keys: i,
                    to: r,
                    from: a,
                    loop: o,
                    onRest: d,
                    onResolve: l
                } = t, u = A.obj(t.default) && t.default;
                o && (t.loop = !1), !1 === r && (t.to = null), !1 === a && (t.from = null);
                const c = A.arr(r) || A.fun(r) ? r : void 0;
                c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : S(ln, (n => {
                    const i = t[n];
                    if (A.fun(i)) {
                        const r = e._events[n];
                        t[n] = e => {
                            let {
                                finished: t,
                                cancelled: n
                            } = e;
                            const a = r.get(i);
                            a ? (t || (a.finished = !1), n && (a.cancelled = !0)) : r.set(i, {
                                value: null,
                                finished: t || !1,
                                cancelled: n || !1
                            })
                        }, u && (u[n] = t[n])
                    }
                }));
                const p = e._state;
                t.pause === !p.paused ? (p.paused = t.pause, R(t.pause ? p.pauseQueue : p.resumeQueue)) : p.paused && (t.pause = !0);
                const f = (i || Object.keys(e.springs)).map((n => e.springs[n].start(t))),
                    h = !0 === t.cancel || !0 === bt(t, "cancel");
                (c || h && p.asyncId) && f.push(Dt(++e._lastAsyncId, {
                    props: t,
                    state: p,
                    actions: {
                        pause: k,
                        resume: k,
                        start(t, n) {
                            h ? (zt(p, e._lastAsyncId), n(Pt(e))) : (t.onRest = d, n(jt(c, t, p, e)))
                        }
                    }
                })), p.paused && await new Promise((e => {
                    p.resumeQueue.add(e)
                }));
                const m = Lt(e, await Promise.all(f));
                if (o && m.finished && (!n || !m.noop)) {
                    const n = tn(t, o, r);
                    if (n) return vn(e, [n]), fn(e, n, !0)
                }
                return l && s.batchedUpdates((() => l(m, e, e.item))), m
            }

            function hn(e, t) {
                const n = { ...e.springs
                };
                return t && S(T(t), (e => {
                    A.und(e.keys) && (e = nn(e)), A.obj(e.to) || (e = { ...e,
                        to: void 0
                    }), bn(n, e, (e => gn(e)))
                })), mn(e, n), n
            }

            function mn(e, t) {
                M(t, ((t, n) => {
                    e.springs[n] || (e.springs[n] = t, Me(t, e))
                }))
            }

            function gn(e, t) {
                const n = new Jt;
                return n.key = e, t && Me(n, t), n
            }

            function bn(e, t, n) {
                t.keys && S(t.keys, (i => {
                    (e[i] || (e[i] = n(i)))._prepareNode(t)
                }))
            }

            function vn(e, t) {
                S(t, (t => {
                    bn(e.springs, t, (t => gn(t, e)))
                }))
            }
            var yn, wn, xn = e => {
                    let {
                        children: t,
                        ...n
                    } = e;
                    const r = (0, i.useContext)(Cn),
                        a = n.pause || !!r.pause,
                        o = n.immediate || !!r.immediate;
                    n = function(e, t) {
                        const [n] = (0, i.useState)((() => ({
                            inputs: t,
                            result: e()
                        }))), r = (0, i.useRef)(), a = r.current;
                        let o = a;
                        o ? Boolean(t && o.inputs && function(e, t) {
                            if (e.length !== t.length) return !1;
                            for (let n = 0; n < e.length; n++)
                                if (e[n] !== t[n]) return !1;
                            return !0
                        }(t, o.inputs)) || (o = {
                            inputs: t,
                            result: e()
                        }) : o = n;
                        return (0, i.useEffect)((() => {
                            r.current = o, a == n && (n.inputs = n.result = void 0)
                        }), [o]), o.result
                    }((() => ({
                        pause: a,
                        immediate: o
                    })), [a, o]);
                    const {
                        Provider: s
                    } = Cn;
                    return i.createElement(s, {
                        value: n
                    }, t)
                },
                Cn = (yn = xn, wn = {}, Object.assign(yn, i.createContext(wn)), yn.Provider._context = yn, yn.Consumer._context = yn, yn);
            xn.Provider = Cn.Provider, xn.Consumer = Cn.Consumer;
            var En = () => {
                const e = [],
                    t = function(t) {
                        We(`${ze}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
                        const i = [];
                        return S(e, ((e, r) => {
                            if (A.und(t)) i.push(e.start());
                            else {
                                const a = n(t, e, r);
                                a && i.push(e.start(a))
                            }
                        })), i
                    };
                t.current = e, t.add = function(t) {
                    e.includes(t) || e.push(t)
                }, t.delete = function(t) {
                    const n = e.indexOf(t);
                    ~n && e.splice(n, 1)
                }, t.pause = function() {
                    return S(e, (e => e.pause(...arguments))), this
                }, t.resume = function() {
                    return S(e, (e => e.resume(...arguments))), this
                }, t.set = function(t) {
                    S(e, ((e, n) => {
                        const i = A.fun(t) ? t(n, e) : t;
                        i && e.set(i)
                    }))
                }, t.start = function(t) {
                    const n = [];
                    return S(e, ((e, i) => {
                        if (A.und(t)) n.push(e.start());
                        else {
                            const r = this._getProps(t, e, i);
                            r && n.push(e.start(r))
                        }
                    })), n
                }, t.stop = function() {
                    return S(e, (e => e.stop(...arguments))), this
                }, t.update = function(t) {
                    return S(e, ((e, n) => e.update(this._getProps(t, e, n)))), this
                };
                const n = function(e, t, n) {
                    return A.fun(e) ? e(n, t) : e
                };
                return t._getProps = n, t
            };

            function kn(e, t, n) {
                const r = A.fun(t) && t;
                r && !n && (n = []);
                const a = (0, i.useMemo)((() => r || 3 == arguments.length ? En() : void 0), []),
                    o = (0, i.useRef)(0),
                    s = qe(),
                    d = (0, i.useMemo)((() => ({
                        ctrls: [],
                        queue: [],
                        flush(e, t) {
                            const n = hn(e, t);
                            return o.current > 0 && !d.queue.length && !Object.keys(n).some((t => !e.springs[t])) ? pn(e, t) : new Promise((i => {
                                mn(e, n), d.queue.push((() => {
                                    i(pn(e, t))
                                })), s()
                            }))
                        }
                    })), []),
                    l = (0, i.useRef)([...d.ctrls]),
                    u = [],
                    c = Qe(e) || 0;

                function p(e, n) {
                    for (let i = e; i < n; i++) {
                        const e = l.current[i] || (l.current[i] = new cn(null, d.flush)),
                            n = r ? r(i, e) : t[i];
                        n && (u[i] = rn(n))
                    }
                }(0, i.useMemo)((() => {
                    S(l.current.slice(e, c), (e => {
                        Zt(e, a), e.stop(!0)
                    })), l.current.length = e, p(c, e)
                }), [e]), (0, i.useMemo)((() => {
                    p(0, Math.min(c, e))
                }), n);
                const f = l.current.map(((e, t) => hn(e, u[t]))),
                    h = (0, i.useContext)(xn),
                    m = Qe(h),
                    g = h !== m && kt(h);
                Ve((() => {
                    o.current++, d.ctrls = l.current;
                    const {
                        queue: e
                    } = d;
                    e.length && (d.queue = [], S(e, (e => e()))), S(l.current, ((e, t) => {
                        a ? .add(e), g && e.start({
                            default: h
                        });
                        const n = u[t];
                        n && (St(e, n.ref), e.ref ? e.queue.push(n) : e.start(n))
                    }))
                })), Ye((() => () => {
                    S(d.ctrls, (e => e.stop(!0)))
                }));
                const b = f.map((e => ({ ...e
                })));
                return a ? [b, a] : b
            }

            function An(e, t) {
                const n = A.fun(e),
                    [
                        [i], r
                    ] = kn(1, n ? e : [e], n ? t || [] : t);
                return n || 2 == arguments.length ? [i, r] : i
            }
            var Zn = () => En(),
                Sn = () => (0, i.useState)(Zn)[0];

            function Mn(e, t, n) {
                const r = A.fun(t) && t,
                    {
                        reset: a,
                        sort: o,
                        trail: s = 0,
                        expires: d = !0,
                        exitBeforeEnter: l = !1,
                        onDestroyed: u,
                        ref: c,
                        config: p
                    } = r ? r() : t,
                    f = (0, i.useMemo)((() => r || 3 == arguments.length ? En() : void 0), []),
                    h = T(e),
                    m = [],
                    g = (0, i.useRef)(null),
                    b = a ? null : g.current;
                Ve((() => {
                    g.current = m
                })), Ye((() => (S(m, (e => {
                    f ? .add(e.ctrl), e.ctrl.ref = f
                })), () => {
                    S(g.current, (e => {
                        e.expired && clearTimeout(e.expirationId), Zt(e.ctrl, f), e.ctrl.stop(!0)
                    }))
                })));
                const v = function(e, t, n) {
                        let {
                            key: i,
                            keys: r = i
                        } = t;
                        if (null === r) {
                            const t = new Set;
                            return e.map((e => {
                                const i = n && n.find((n => n.item === e && "leave" !== n.phase && !t.has(n)));
                                return i ? (t.add(i), i.key) : Tn++
                            }))
                        }
                        return A.und(r) ? e : A.fun(r) ? e.map(r) : T(r)
                    }(h, r ? r() : t, b),
                    y = a && g.current || [];
                Ve((() => S(y, (e => {
                    let {
                        ctrl: t,
                        item: n,
                        key: i
                    } = e;
                    Zt(t, f), ht(u, n, i)
                }))));
                const w = [];
                if (b && S(b, ((e, t) => {
                        e.expired ? (clearTimeout(e.expirationId), y.push(e)) : ~(t = w[t] = v.indexOf(e.key)) && (m[t] = e)
                    })), S(h, ((e, t) => {
                        m[t] || (m[t] = {
                            key: v[t],
                            item: e,
                            phase: "mount",
                            ctrl: new cn
                        }, m[t].ctrl.item = e)
                    })), w.length) {
                    let e = -1;
                    const {
                        leave: n
                    } = r ? r() : t;
                    S(w, ((t, i) => {
                        const r = b[i];
                        ~t ? (e = m.indexOf(r), m[e] = { ...r,
                            item: h[t]
                        }) : n && m.splice(++e, 0, r)
                    }))
                }
                A.fun(o) && m.sort(((e, t) => o(e.item, t.item)));
                let x = -s;
                const C = qe(),
                    E = yt(t),
                    k = new Map,
                    Z = (0, i.useRef)(new Map),
                    M = (0, i.useRef)(!1);
                S(m, ((e, n) => {
                    const i = e.key,
                        a = e.phase,
                        o = r ? r() : t;
                    let u, f;
                    const h = ht(o.delay || 0, i);
                    if ("mount" == a) u = o.enter, f = "enter";
                    else {
                        const e = v.indexOf(i) < 0;
                        if ("leave" != a)
                            if (e) u = o.leave, f = "leave";
                            else {
                                if (!(u = o.update)) return;
                                f = "update"
                            }
                        else {
                            if (e) return;
                            u = o.enter, f = "enter"
                        }
                    }
                    if (u = ht(u, e.item, n), u = A.obj(u) ? Ct(u) : {
                            to: u
                        }, !u.config) {
                        const t = p || E.config;
                        u.config = ht(t, e.item, n, f)
                    }
                    x += s;
                    const m = { ...E,
                        delay: h + x,
                        ref: c,
                        immediate: o.immediate,
                        reset: !1,
                        ...u
                    };
                    if ("enter" == f && A.und(m.from)) {
                        const i = r ? r() : t,
                            a = A.und(i.initial) || b ? i.from : i.initial;
                        m.from = ht(a, e.item, n)
                    }
                    const {
                        onResolve: y
                    } = m;
                    m.onResolve = e => {
                        ht(y, e);
                        const t = g.current,
                            n = t.find((e => e.key === i));
                        if (n && (!e.cancelled || "update" == n.phase) && n.ctrl.idle) {
                            const e = t.every((e => e.ctrl.idle));
                            if ("leave" == n.phase) {
                                const t = ht(d, n.item);
                                if (!1 !== t) {
                                    const i = !0 === t ? 0 : t;
                                    if (n.expired = !0, !e && i > 0) return void(i <= 2147483647 && (n.expirationId = setTimeout(C, i)))
                                }
                            }
                            e && t.some((e => e.expired)) && (Z.current.delete(n), l && (M.current = !0), C())
                        }
                    };
                    const w = hn(e.ctrl, m);
                    "leave" === f && l ? Z.current.set(e, {
                        phase: f,
                        springs: w,
                        payload: m
                    }) : k.set(e, {
                        phase: f,
                        springs: w,
                        payload: m
                    })
                }));
                const I = (0, i.useContext)(xn),
                    _ = Qe(I),
                    N = I !== _ && kt(I);
                Ve((() => {
                    N && S(m, (e => {
                        e.ctrl.start({
                            default: I
                        })
                    }))
                }), [I]), S(k, ((e, t) => {
                    if (Z.current.size) {
                        const e = m.findIndex((e => e.key === t.key));
                        m.splice(e, 1)
                    }
                })), Ve((() => {
                    S(Z.current.size ? Z.current : k, ((e, t) => {
                        let {
                            phase: n,
                            payload: i
                        } = e;
                        const {
                            ctrl: r
                        } = t;
                        t.phase = n, f ? .add(r), N && "enter" == n && r.start({
                            default: I
                        }), i && (St(r, i.ref), !r.ref && !f || M.current ? (r.start(i), M.current && (M.current = !1)) : r.update(i))
                    }))
                }), a ? void 0 : n);
                const R = e => i.createElement(i.Fragment, null, m.map(((t, n) => {
                    const {
                        springs: r
                    } = k.get(t) || t.ctrl, a = e({ ...r
                    }, t.item, t, n);
                    return a && a.type ? i.createElement(a.type, { ...a.props,
                        key: A.str(t.key) || A.num(t.key) ? t.key : t.ctrl.id,
                        ref: a.ref
                    }) : a
                })));
                return f ? [R, f] : R
            }
            var Tn = 1;
            var In = class extends Vt {
                constructor(e, t) {
                    super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = pe(...t);
                    const n = this._get(),
                        i = lt(n);
                    et(this, i.create(n))
                }
                advance(e) {
                    const t = this._get();
                    Z(t, this.get()) || (Je(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Nn(this._active) && Rn(this)
                }
                _get() {
                    const e = A.arr(this.source) ? this.source.map(Ee) : T(Ee(this.source));
                    return this.calc(...e)
                }
                _start() {
                    this.idle && !Nn(this._active) && (this.idle = !1, S(tt(this), (e => {
                        e.done = !1
                    })), a.skipAnimation ? (s.batchedUpdates((() => this.advance())), Rn(this)) : H.start(this))
                }
                _attach() {
                    let e = 1;
                    S(T(this.source), (t => {
                        Ce(t) && Me(t, this), Wt(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
                    })), this.priority = e, this._start()
                }
                _detach() {
                    S(T(this.source), (e => {
                        Ce(e) && Te(e, this)
                    })), this._active.clear(), Rn(this)
                }
                eventObserved(e) {
                    "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = T(this.source).reduce(((e, t) => Math.max(e, (Wt(t) ? t.priority : 0) + 1)), 0))
                }
            };

            function _n(e) {
                return !1 !== e.idle
            }

            function Nn(e) {
                return !e.size || Array.from(e).every(_n)
            }

            function Rn(e) {
                e.idle || (e.idle = !0, S(tt(e), (e => {
                    e.done = !0
                })), Ae(e, {
                    type: "idle",
                    parent: e
                }))
            }
            var On = function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                return new In(e, n)
            };
            a.assign({
                createStringInterpolator: je,
                to: (e, t) => new In(e, t)
            });
            H.advance;
            var Dn = n(579),
                Ln = /^--/;

            function Bn(e, t) {
                return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Ln.test(e) || Pn.hasOwnProperty(e) && Pn[e] ? ("" + t).trim() : t + "px"
            }
            var Fn = {};
            var Pn = {
                    animationIterationCount: !0,
                    borderImageOutset: !0,
                    borderImageSlice: !0,
                    borderImageWidth: !0,
                    boxFlex: !0,
                    boxFlexGroup: !0,
                    boxOrdinalGroup: !0,
                    columnCount: !0,
                    columns: !0,
                    flex: !0,
                    flexGrow: !0,
                    flexPositive: !0,
                    flexShrink: !0,
                    flexNegative: !0,
                    flexOrder: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowSpan: !0,
                    gridRowStart: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnSpan: !0,
                    gridColumnStart: !0,
                    fontWeight: !0,
                    lineClamp: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    tabSize: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                    fillOpacity: !0,
                    floodOpacity: !0,
                    stopOpacity: !0,
                    strokeDasharray: !0,
                    strokeDashoffset: !0,
                    strokeMiterlimit: !0,
                    strokeOpacity: !0,
                    strokeWidth: !0
                },
                jn = ["Webkit", "Ms", "Moz", "O"];
            Pn = Object.keys(Pn).reduce(((e, t) => (jn.forEach((n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e)), Pn);
            var zn = /^(matrix|translate|scale|rotate|skew)/,
                Un = /^(translate)/,
                Hn = /^(rotate|skew)/,
                Wn = (e, t) => A.num(e) && 0 !== e ? e + t : e,
                $n = (e, t) => A.arr(e) ? e.every((e => $n(e, t))) : A.num(e) ? e === t : parseFloat(e) === t,
                Vn = class extends ot {
                    constructor(e) {
                        let {
                            x: t,
                            y: n,
                            z: i,
                            ...r
                        } = e;
                        const a = [],
                            o = [];
                        (t || n || i) && (a.push([t || 0, n || 0, i || 0]), o.push((e => [`translate3d(${e.map((e=>Wn(e,"px"))).join(",")})`, $n(e, 0)]))), M(r, ((e, t) => {
                            if ("transform" === t) a.push([e || ""]), o.push((e => [e, "" === e]));
                            else if (zn.test(t)) {
                                if (delete r[t], A.und(e)) return;
                                const n = Un.test(t) ? "px" : Hn.test(t) ? "deg" : "";
                                a.push(T(e)), o.push("rotate3d" === t ? e => {
                                    let [t, i, r, a] = e;
                                    return [`rotate3d(${t},${i},${r},${Wn(a,n)})`, $n(a, 0)]
                                } : e => [`${t}(${e.map((e=>Wn(e,n))).join(",")})`, $n(e, t.startsWith("scale") ? 1 : 0)])
                            }
                        })), a.length && (r.transform = new Xn(a, o)), super(r)
                    }
                },
                Xn = class extends Ze {
                    constructor(e, t) {
                        super(), this.inputs = e, this.transforms = t, this._value = null
                    }
                    get() {
                        return this._value || (this._value = this._get())
                    }
                    _get() {
                        let e = "",
                            t = !0;
                        return S(this.inputs, ((n, i) => {
                            const r = Ee(n[0]),
                                [a, o] = this.transforms[i](A.arr(r) ? r : n.map(Ee));
                            e += " " + a, t = t && o
                        })), t ? "none" : e
                    }
                    observerAdded(e) {
                        1 == e && S(this.inputs, (e => S(e, (e => Ce(e) && Me(e, this)))))
                    }
                    observerRemoved(e) {
                        0 == e && S(this.inputs, (e => S(e, (e => Ce(e) && Te(e, this)))))
                    }
                    eventObserved(e) {
                        "change" == e.type && (this._value = null), Ae(this, e)
                    }
                };
            a.assign({
                batchedUpdates: Dn.unstable_batchedUpdates,
                createStringInterpolator: je,
                colors: {
                    transparent: 0,
                    aliceblue: 4042850303,
                    antiquewhite: 4209760255,
                    aqua: 16777215,
                    aquamarine: 2147472639,
                    azure: 4043309055,
                    beige: 4126530815,
                    bisque: 4293182719,
                    black: 255,
                    blanchedalmond: 4293643775,
                    blue: 65535,
                    blueviolet: 2318131967,
                    brown: 2771004159,
                    burlywood: 3736635391,
                    burntsienna: 3934150143,
                    cadetblue: 1604231423,
                    chartreuse: 2147418367,
                    chocolate: 3530104575,
                    coral: 4286533887,
                    cornflowerblue: 1687547391,
                    cornsilk: 4294499583,
                    crimson: 3692313855,
                    cyan: 16777215,
                    darkblue: 35839,
                    darkcyan: 9145343,
                    darkgoldenrod: 3095792639,
                    darkgray: 2846468607,
                    darkgreen: 6553855,
                    darkgrey: 2846468607,
                    darkkhaki: 3182914559,
                    darkmagenta: 2332068863,
                    darkolivegreen: 1433087999,
                    darkorange: 4287365375,
                    darkorchid: 2570243327,
                    darkred: 2332033279,
                    darksalmon: 3918953215,
                    darkseagreen: 2411499519,
                    darkslateblue: 1211993087,
                    darkslategray: 793726975,
                    darkslategrey: 793726975,
                    darkturquoise: 13554175,
                    darkviolet: 2483082239,
                    deeppink: 4279538687,
                    deepskyblue: 12582911,
                    dimgray: 1768516095,
                    dimgrey: 1768516095,
                    dodgerblue: 512819199,
                    firebrick: 2988581631,
                    floralwhite: 4294635775,
                    forestgreen: 579543807,
                    fuchsia: 4278255615,
                    gainsboro: 3705462015,
                    ghostwhite: 4177068031,
                    gold: 4292280575,
                    goldenrod: 3668254975,
                    gray: 2155905279,
                    green: 8388863,
                    greenyellow: 2919182335,
                    grey: 2155905279,
                    honeydew: 4043305215,
                    hotpink: 4285117695,
                    indianred: 3445382399,
                    indigo: 1258324735,
                    ivory: 4294963455,
                    khaki: 4041641215,
                    lavender: 3873897215,
                    lavenderblush: 4293981695,
                    lawngreen: 2096890111,
                    lemonchiffon: 4294626815,
                    lightblue: 2916673279,
                    lightcoral: 4034953471,
                    lightcyan: 3774873599,
                    lightgoldenrodyellow: 4210742015,
                    lightgray: 3553874943,
                    lightgreen: 2431553791,
                    lightgrey: 3553874943,
                    lightpink: 4290167295,
                    lightsalmon: 4288707327,
                    lightseagreen: 548580095,
                    lightskyblue: 2278488831,
                    lightslategray: 2005441023,
                    lightslategrey: 2005441023,
                    lightsteelblue: 2965692159,
                    lightyellow: 4294959359,
                    lime: 16711935,
                    limegreen: 852308735,
                    linen: 4210091775,
                    magenta: 4278255615,
                    maroon: 2147483903,
                    mediumaquamarine: 1724754687,
                    mediumblue: 52735,
                    mediumorchid: 3126187007,
                    mediumpurple: 2473647103,
                    mediumseagreen: 1018393087,
                    mediumslateblue: 2070474495,
                    mediumspringgreen: 16423679,
                    mediumturquoise: 1221709055,
                    mediumvioletred: 3340076543,
                    midnightblue: 421097727,
                    mintcream: 4127193855,
                    mistyrose: 4293190143,
                    moccasin: 4293178879,
                    navajowhite: 4292783615,
                    navy: 33023,
                    oldlace: 4260751103,
                    olive: 2155872511,
                    olivedrab: 1804477439,
                    orange: 4289003775,
                    orangered: 4282712319,
                    orchid: 3664828159,
                    palegoldenrod: 4008225535,
                    palegreen: 2566625535,
                    paleturquoise: 2951671551,
                    palevioletred: 3681588223,
                    papayawhip: 4293907967,
                    peachpuff: 4292524543,
                    peru: 3448061951,
                    pink: 4290825215,
                    plum: 3718307327,
                    powderblue: 2967529215,
                    purple: 2147516671,
                    rebeccapurple: 1714657791,
                    red: 4278190335,
                    rosybrown: 3163525119,
                    royalblue: 1097458175,
                    saddlebrown: 2336560127,
                    salmon: 4202722047,
                    sandybrown: 4104413439,
                    seagreen: 780883967,
                    seashell: 4294307583,
                    sienna: 2689740287,
                    silver: 3233857791,
                    skyblue: 2278484991,
                    slateblue: 1784335871,
                    slategray: 1887473919,
                    slategrey: 1887473919,
                    snow: 4294638335,
                    springgreen: 16744447,
                    steelblue: 1182971135,
                    tan: 3535047935,
                    teal: 8421631,
                    thistle: 3636451583,
                    tomato: 4284696575,
                    turquoise: 1088475391,
                    violet: 4001558271,
                    wheat: 4125012991,
                    white: 4294967295,
                    whitesmoke: 4126537215,
                    yellow: 4294902015,
                    yellowgreen: 2597139199
                }
            });
            var qn = function(e) {
                    let {
                        applyAnimatedValues: t = (() => !1),
                        createAnimatedStyle: n = (e => new ot(e)),
                        getComponentProps: i = (e => e)
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const r = {
                            applyAnimatedValues: t,
                            createAnimatedStyle: n,
                            getComponentProps: i
                        },
                        a = e => {
                            const t = ft(e) || "Anonymous";
                            return (e = A.str(e) ? a[e] || (a[e] = ut(e, r)) : e[pt] || (e[pt] = ut(e, r))).displayName = `Animated(${t})`, e
                        };
                    return M(e, ((t, n) => {
                        A.arr(e) && (n = ft(t)), a[n] = a(t)
                    })), {
                        animated: a
                    }
                }(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
                    applyAnimatedValues: function(e, t) {
                        if (!e.nodeType || !e.setAttribute) return !1;
                        const n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
                            {
                                style: i,
                                children: r,
                                scrollTop: a,
                                scrollLeft: o,
                                viewBox: s,
                                ...d
                            } = t,
                            l = Object.values(d),
                            u = Object.keys(d).map((t => n || e.hasAttribute(t) ? t : Fn[t] || (Fn[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
                        void 0 !== r && (e.textContent = r);
                        for (const t in i)
                            if (i.hasOwnProperty(t)) {
                                const n = Bn(t, i[t]);
                                Ln.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
                            }
                        u.forEach(((t, n) => {
                            e.setAttribute(t, l[n])
                        })), void 0 !== a && (e.scrollTop = a), void 0 !== o && (e.scrollLeft = o), void 0 !== s && e.setAttribute("viewBox", s)
                    },
                    createAnimatedStyle: e => new Vn(e),
                    getComponentProps: e => {
                        let {
                            scrollTop: t,
                            scrollLeft: n,
                            ...i
                        } = e;
                        return i
                    }
                }),
                Yn = qn.animated
        }
    }
]);