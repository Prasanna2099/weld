! function() {
    var t = {
            2655: function(t, e, n) {
                "use strict";
                n.d(e, {
                    Z: function() {
                        return o
                    }
                });
                class o {
                    constructor() {
                        this.eventPrefix = "tidioChat-", this.readyEventWasFired = !1, this.queue = [], this.popUpOpen = this.open, this.popUpHide = this.close, this.chatDisplay = this.display, this.setColorPallete = this.setColorPalette
                    }
                    on(t, e) {
                        "ready" === t && this.readyEventWasFired ? e() : document.addEventListener(`${this.eventPrefix}${t}`, (t => {
                            e(t.data)
                        }), !1)
                    }
                    trigger(t, e) {
                        if ("ready" === t && this.readyEventWasFired) return !1;
                        try {
                            const n = document.createEvent("Event");
                            if (n.initEvent(`${this.eventPrefix}${t}`, !0, !0), n.data = e, document.dispatchEvent(n), "ready" === t) {
                                if (this.readyEventWasFired) return !1;
                                this._flushAllFromQueue(), this.readyEventWasFired = !0
                            }
                        } catch (t) {
                            return !1
                        }
                        return !0
                    }
                    method(t, e) {
                        return "ready" === t && "function" == typeof e ? (this.on("ready", e), !0) : (this[t] && this[t](e), !0)
                    }
                    _addToQueue(t, e = null) {
                        this.queue.push({
                            method: t,
                            args: e
                        })
                    }
                    _flushAllFromQueue() {
                        for (; 0 !== this.queue.length;) {
                            const {
                                method: t,
                                args: e
                            } = this.queue.shift();
                            this[t].apply(null, e)
                        }
                    }
                    open() {
                        this._addToQueue("open")
                    }
                    close() {
                        this._addToQueue("close")
                    }
                    display(t = !0) {
                        this._addToQueue("display", [t])
                    }
                    show() {
                        this._addToQueue("show")
                    }
                    hide() {
                        this._addToQueue("hide")
                    }
                    setColorPalette(t) {
                        this._addToQueue("setColorPalette", [t])
                    }
                    track(t, e, n) {
                        void 0 === t && (t = "track"), void 0 === e && (e = {}), void 0 === n && (n = () => {}), this._addToQueue("track", [t, e, n])
                    }
                    messageFromVisitor(t) {
                        this._addToQueue("messageFromVisitor", [t])
                    }
                    messageFromOperator(t, e = !0) {
                        this._addToQueue("messageFromOperator", [t, e])
                    }
                    setVisitorData(t, e) {
                        this._addToQueue("setVisitorData", [t, e])
                    }
                    setContactProperties(t, e) {
                        this._addToQueue("setContactProperties", [t, e])
                    }
                    addVisitorTags(t, e) {
                        this._addToQueue("addVisitorTags", [t, e])
                    }
                    setFeatures(t = {}) {
                        this._addToQueue("setFeatures", [t])
                    }
                }
            }
        },
        e = {};

    function n(o) {
        var i = e[o];
        if (void 0 !== i) return i.exports;
        var d = e[o] = {
            exports: {}
        };
        return t[o](d, d.exports, n), d.exports
    }
    n.d = function(t, e) {
            for (var o in e) n.o(e, o) && !n.o(t, o) && Object.defineProperty(t, o, {
                enumerable: !0,
                get: e[o]
            })
        }, n.h = function() {
            return "b6b7feab0b491d377441"
        }, n.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (t) {
                if ("object" == typeof window) return window
            }
        }(), n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, ("undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
            id: "1.253.0"
        },
        function() {
            const t = Date.now(),
                e = "boolean" == typeof PRODUCTION_DEVELOPMENT_BUILD && !0 === PRODUCTION_DEVELOPMENT_BUILD,
                o = e ? "https://widget-v4.tidiochat.com//dist/" : "https://widget-v4.tidiochat.com/",
                i = function() {
                    var t = [],
                        e = !1,
                        n = !1;

                    function o() {
                        if (!e) {
                            e = !0;
                            for (var n = 0; n < t.length; n += 1) t[n].fn.call(window, t[n].ctx);
                            t = []
                        }
                    }

                    function i() {
                        "complete" === document.readyState && o()
                    }
                    return function(d, a) {
                        if ("function" != typeof d) throw new TypeError("callback for docReady(fn) must be a function");
                        return e ? (setTimeout((function() {
                            d(a)
                        }), 1), !1) : (t.push({
                            fn: d,
                            ctx: a
                        }), "complete" === document.readyState || !document.attachEvent && "interactive" === document.readyState ? setTimeout(o, 1) : n || (document.addEventListener ? (document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1)) : (document.attachEvent("onreadystatechange", i), window.attachEvent("onload", o)), n = !0), !0)
                    }
                }();

            function d(t) {
                ! function(t, e) {
                    const n = t.contentWindow.document,
                        o = n.createElement("script");
                    o.src = e, o.async = !0, n.body.appendChild(o)
                }(t, `${o.replace(/\/$/,"")}/1_253_0/static/js/widget.${n.h()}.js`)
            }
            const a = n(2655).Z;
            window.tidioChatApi = new a, i((() => setTimeout((() => {
                var i = window.document.getElementById("tidio-chat-code"),
                    a = /MSIE|Trident/.test(window.navigator.userAgent);
                if (i || a) return !1;
                ! function(t, e, n) {
                    const o = e.createElement("iframe");
                    let i = !1;
                    o.onload = function() {
                        i || (n(o), i = !0)
                    }, o.id = t, o.style.display = "none", o.title = "Tidio Chat code", e.body.appendChild(o), setTimeout((function() {
                        i || (n(o), i = !0)
                    }), 1e3)
                }("tidio-chat-code", window.document, (i => {
                    e && window.__REDUX_DEVTOOLS_EXTENSION__ && (i.contentWindow.__REDUX_DEVTOOLS_EXTENSION__ = window.__REDUX_DEVTOOLS_EXTENSION__, i.contentWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__),
                        function(t) {
                            let e = "https://widget-v4.tidiochat.com/static/js/WidgetIframe.js";
                            e = `${o}1_253_0/static/js/chunk-WidgetIframe-${n.h()}.js`;
                            const i = t.createElement("link");
                            i.rel = "preload", i.as = "script", i.href = e, t.head.appendChild(i)
                        }(i.contentWindow.document),
                        function(t) {
                            const e = t.createElement("link");
                            e.rel = "preload", e.href = "https://widget-v4.tidiochat.com/fonts/mulish_SGhgqk3wotYKNnBQ.woff2", e.as = "font", e.type = "font/woff2", e.crossOrigin = "", t.head.appendChild(e)
                        }(i.contentWindow.document),
                        function(t) {
                            const e = `${o}/tururu.mp3`,
                                n = t.createElement("audio");
                            n.preload = "metadata", n.src = e, t.head.appendChild(n)
                        }(i.contentWindow.document),
                        function(t) {
                            const e = t.createElement("link");
                            e.rel = "preconnect", e.href = "https://socket.tidio.co:443", t.head.appendChild(e)
                        }(i.contentWindow.document),
                        function(t) {
                            const e = t.createElement("link");
                            e.rel = "preconnect", e.href = "https://cdnjs.cloudflare.com", t.head.appendChild(e)
                        }(i.contentWindow.document), i.contentWindow.tidioChatApi = window.tidioChatApi, i.contentWindow.FIRST_POSSIBLE_JS_EXECUTION = t, "requestIdleCallback" in window ? window.requestIdleCallback((function() {
                            d(i)
                        }), {
                            timeout: 5e3
                        }) : setTimeout((function() {
                            d(i)
                        }), 0)
                }))
            }), 0)))
        }()
}();