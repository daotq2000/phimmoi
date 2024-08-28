! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(h) {
    function t(e) {
        var t, o, n = e || window.event,
            a = v.call(arguments, 1),
            i = 0,
            l = 0,
            r = 0,
            s = 0,
            c = 0,
            d = 0;
        if ((e = h.event.fix(n)).type = "mousewheel", "detail" in n && (r = -1 * n.detail), "wheelDelta" in n && (r = n.wheelDelta), "wheelDeltaY" in n && (r = n.wheelDeltaY), "wheelDeltaX" in n && (l = -1 * n.wheelDeltaX), "axis" in n && n.axis === n.HORIZONTAL_AXIS && (l = -1 * r, r = 0), i = 0 === r ? l : r, "deltaY" in n && (i = r = -1 * n.deltaY), "deltaX" in n && (l = n.deltaX, 0 === r && (i = -1 * l)), 0 !== r || 0 !== l) {
            1 === n.deltaMode ? (i *= t = h.data(this, "mousewheel-line-height"), r *= t, l *= t) : 2 === n.deltaMode && (i *= o = h.data(this, "mousewheel-page-height"), r *= o, l *= o);
            var u, s = Math.max(Math.abs(r), Math.abs(l));
            return g && !(s < g) || m(n, g = s) && (g /= 40), m(n, s) && (i /= 40, l /= 40, r /= 40), i = Math[1 <= i ? "floor" : "ceil"](i / g), l = Math[1 <= l ? "floor" : "ceil"](l / g), r = Math[1 <= r ? "floor" : "ceil"](r / g), x.settings.normalizeOffset && this.getBoundingClientRect && (u = this.getBoundingClientRect(), c = e.clientX - u.left, d = e.clientY - u.top), e.deltaX = l, e.deltaY = r, e.deltaFactor = g, e.offsetX = c, e.offsetY = d, e.deltaMode = 0, a.unshift(e, i, l, r), p && clearTimeout(p), p = setTimeout(f, 200), (h.event.dispatch || h.event.handle).apply(this, a)
        }
    }

    function f() {
        g = null
    }

    function m(e, t) {
        return x.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
    }
    var p, g, e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        o = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        v = Array.prototype.slice;
    if (h.event.fixHooks)
        for (var n = e.length; n;) h.event.fixHooks[e[--n]] = h.event.mouseHooks;
    var x = h.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var e = o.length; e;) this.addEventListener(o[--e], t, !1);
            else this.onmousewheel = t;
            h.data(this, "mousewheel-line-height", x.getLineHeight(this)), h.data(this, "mousewheel-page-height", x.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = o.length; e;) this.removeEventListener(o[--e], t, !1);
            else this.onmousewheel = null;
            h.removeData(this, "mousewheel-line-height"), h.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(e) {
            var t = h(e),
                o = t["offsetParent" in h.fn ? "offsetParent" : "parent"]();
            return o.length || (o = h("body")), parseInt(o.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16
        },
        getPageHeight: function(e) {
            return h(e).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    h.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(h) {
    function t(e) {
        var t, o, n = e || window.event,
            a = v.call(arguments, 1),
            i = 0,
            l = 0,
            r = 0,
            s = 0,
            c = 0,
            d = 0;
        if ((e = h.event.fix(n)).type = "mousewheel", "detail" in n && (r = -1 * n.detail), "wheelDelta" in n && (r = n.wheelDelta), "wheelDeltaY" in n && (r = n.wheelDeltaY), "wheelDeltaX" in n && (l = -1 * n.wheelDeltaX), "axis" in n && n.axis === n.HORIZONTAL_AXIS && (l = -1 * r, r = 0), i = 0 === r ? l : r, "deltaY" in n && (i = r = -1 * n.deltaY), "deltaX" in n && (l = n.deltaX, 0 === r && (i = -1 * l)), 0 !== r || 0 !== l) {
            1 === n.deltaMode ? (i *= t = h.data(this, "mousewheel-line-height"), r *= t, l *= t) : 2 === n.deltaMode && (i *= o = h.data(this, "mousewheel-page-height"), r *= o, l *= o);
            var u, s = Math.max(Math.abs(r), Math.abs(l));
            return g && !(s < g) || m(n, g = s) && (g /= 40), m(n, s) && (i /= 40, l /= 40, r /= 40), i = Math[1 <= i ? "floor" : "ceil"](i / g), l = Math[1 <= l ? "floor" : "ceil"](l / g), r = Math[1 <= r ? "floor" : "ceil"](r / g), x.settings.normalizeOffset && this.getBoundingClientRect && (u = this.getBoundingClientRect(), c = e.clientX - u.left, d = e.clientY - u.top), e.deltaX = l, e.deltaY = r, e.deltaFactor = g, e.offsetX = c, e.offsetY = d, e.deltaMode = 0, a.unshift(e, i, l, r), p && clearTimeout(p), p = setTimeout(f, 200), (h.event.dispatch || h.event.handle).apply(this, a)
        }
    }

    function f() {
        g = null
    }

    function m(e, t) {
        return x.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
    }
    var p, g, e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        o = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        v = Array.prototype.slice;
    if (h.event.fixHooks)
        for (var n = e.length; n;) h.event.fixHooks[e[--n]] = h.event.mouseHooks;
    var x = h.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var e = o.length; e;) this.addEventListener(o[--e], t, !1);
            else this.onmousewheel = t;
            h.data(this, "mousewheel-line-height", x.getLineHeight(this)), h.data(this, "mousewheel-page-height", x.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = o.length; e;) this.removeEventListener(o[--e], t, !1);
            else this.onmousewheel = null;
            h.removeData(this, "mousewheel-line-height"), h.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(e) {
            var t = h(e),
                o = t["offsetParent" in h.fn ? "offsetParent" : "parent"]();
            return o.length || (o = h("body")), parseInt(o.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16
        },
        getPageHeight: function(e) {
            return h(e).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    h.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}(function(z) {
    var H, f, P, n, a, r, i, g, X, S, m, c, s, d, u, h, p, v, x, w, _, b, M, C, y, B, T, k, Y, l, D, O, I, E, j, L, R, A, W, U, F, q, N, V, Q, Z, G, J, K, $, o, ee, te, oe, ne, ae, ie, e, t, le;
    e = "function" == typeof define && define.amd, t = "undefined" != typeof module && module.exports, le = "https:" == document.location.protocol ? "https:" : "http:", e || (t ? require("jquery-mousewheel")(z) : z.event.special.mousewheel || z("head").append(decodeURI("%3Cscript src=" + le + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))), f = "mCustomScrollbar", P = "mCS", n = ".mCustomScrollbar", a = {
        setTop: 0,
        setLeft: 0,
        axis: "y",
        scrollbarPosition: "inside",
        scrollInertia: 950,
        autoDraggerLength: !0,
        alwaysShowScrollbar: 0,
        snapOffset: 0,
        mouseWheel: {
            enable: !0,
            scrollAmount: "auto",
            axis: "y",
            deltaFactor: "auto",
            disableOver: ["select", "option", "keygen", "datalist", "textarea"]
        },
        scrollButtons: {
            scrollType: "stepless",
            scrollAmount: "auto"
        },
        keyboard: {
            enable: !0,
            scrollType: "stepless",
            scrollAmount: "auto"
        },
        contentTouchScroll: 25,
        documentTouchScroll: !0,
        advanced: {
            autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
            updateOnContentResize: !0,
            updateOnImageLoad: "auto",
            autoUpdateTimeout: 60
        },
        theme: "light",
        callbacks: {
            onTotalScrollOffset: 0,
            onTotalScrollBackOffset: 0,
            alwaysTriggerOffsets: !0
        }
    }, r = 0, i = {}, g = window.attachEvent && !window.addEventListener ? 1 : 0, X = !1, S = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"], m = {
        init: function(l) {
            var l = z.extend(!0, {}, a, l),
                e = c.call(this);
            if (l.live) {
                var t = l.liveSelector || this.selector || n,
                    o = z(t);
                if ("off" === l.live) return void d(t);
                i[t] = setTimeout(function() {
                    o.mCustomScrollbar(l), "once" === l.live && o.length && d(t)
                }, 500)
            } else d(t);
            return l.setWidth = l.set_width ? l.set_width : l.setWidth, l.setHeight = l.set_height ? l.set_height : l.setHeight, l.axis = l.horizontalScroll ? "x" : u(l.axis), l.scrollInertia = 0 < l.scrollInertia && l.scrollInertia < 17 ? 17 : l.scrollInertia, "object" != typeof l.mouseWheel && 1 == l.mouseWheel && (l.mouseWheel = {
                enable: !0,
                scrollAmount: "auto",
                axis: "y",
                preventDefault: !1,
                deltaFactor: "auto",
                normalizeDelta: !1,
                invert: !1
            }), l.mouseWheel.scrollAmount = l.mouseWheelPixels ? l.mouseWheelPixels : l.mouseWheel.scrollAmount, l.mouseWheel.normalizeDelta = l.advanced.normalizeMouseWheelDelta ? l.advanced.normalizeMouseWheelDelta : l.mouseWheel.normalizeDelta, l.scrollButtons.scrollType = h(l.scrollButtons.scrollType), s(l), z(e).each(function() {
                var e, t, o, n, a, i = z(this);
                i.data(P) || (i.data(P, {
                    idx: ++r,
                    opt: l,
                    scrollRatio: {
                        y: null,
                        x: null
                    },
                    overflowed: null,
                    contentReset: {
                        y: null,
                        x: null
                    },
                    bindEvents: !1,
                    tweenRunning: !1,
                    sequential: {},
                    langDir: i.css("direction"),
                    cbOffsets: null,
                    trigger: null,
                    poll: {
                        size: {
                            o: 0,
                            n: 0
                        },
                        img: {
                            o: 0,
                            n: 0
                        },
                        change: {
                            o: 0,
                            n: 0
                        }
                    }
                }), t = (e = i.data(P)).opt, o = i.data("mcs-axis"), n = i.data("mcs-scrollbar-position"), a = i.data("mcs-theme"), o && (t.axis = o), n && (t.scrollbarPosition = n), a && (t.theme = a, s(t)), p.call(this), e && t.callbacks.onCreate && "function" == typeof t.callbacks.onCreate && t.callbacks.onCreate.call(this), z("#mCSB_" + e.idx + "_container img:not(." + S[2] + ")").addClass(S[2]), m.update.call(null, i))
            })
        },
        update: function(e, r) {
            var t = e || c.call(this);
            return z(t).each(function() {
                var e = z(this);
                if (e.data(P)) {
                    var t = e.data(P),
                        o = t.opt,
                        n = z("#mCSB_" + t.idx + "_container"),
                        a = z("#mCSB_" + t.idx),
                        i = [z("#mCSB_" + t.idx + "_dragger_vertical"), z("#mCSB_" + t.idx + "_dragger_horizontal")];
                    if (!n.length) return;
                    t.tweenRunning && G(e), r && t && o.callbacks.onBeforeUpdate && "function" == typeof o.callbacks.onBeforeUpdate && o.callbacks.onBeforeUpdate.call(this), e.hasClass(S[3]) && e.removeClass(S[3]), e.hasClass(S[4]) && e.removeClass(S[4]), a.css("max-height", "none"), a.height() !== e.height() && a.css("max-height", e.height()), x.call(this), "y" === o.axis || o.advanced.autoExpandHorizontalScroll || n.css("width", v(n)), t.overflowed = C.call(this), k.call(this), o.autoDraggerLength && _.call(this), b.call(this), B.call(this);
                    var l = [Math.abs(n[0].offsetTop), Math.abs(n[0].offsetLeft)];
                    "x" !== o.axis && (t.overflowed[0] ? i[0].height() > i[0].parent().height() ? y.call(this) : (J(e, l[0].toString(), {
                        dir: "y",
                        dur: 0,
                        overwrite: "none"
                    }), t.contentReset.y = null) : (y.call(this), "y" === o.axis ? T.call(this) : "yx" === o.axis && t.overflowed[1] && J(e, l[1].toString(), {
                        dir: "x",
                        dur: 0,
                        overwrite: "none"
                    }))), "y" !== o.axis && (t.overflowed[1] ? i[1].width() > i[1].parent().width() ? y.call(this) : (J(e, l[1].toString(), {
                        dir: "x",
                        dur: 0,
                        overwrite: "none"
                    }), t.contentReset.x = null) : (y.call(this), "x" === o.axis ? T.call(this) : "yx" === o.axis && t.overflowed[0] && J(e, l[0].toString(), {
                        dir: "y",
                        dur: 0,
                        overwrite: "none"
                    }))), r && t && (2 === r && o.callbacks.onImageLoad && "function" == typeof o.callbacks.onImageLoad ? o.callbacks.onImageLoad.call(this) : 3 === r && o.callbacks.onSelectorChange && "function" == typeof o.callbacks.onSelectorChange ? o.callbacks.onSelectorChange.call(this) : o.callbacks.onUpdate && "function" == typeof o.callbacks.onUpdate && o.callbacks.onUpdate.call(this)), Z.call(this)
                }
            })
        },
        scrollTo: function(r, s) {
            if (void 0 !== r && null != r) {
                var e = c.call(this);
                return z(e).each(function() {
                    var e, t, o, n, a, i, l = z(this);
                    l.data(P) && (e = l.data(P), o = {
                        trigger: "external",
                        scrollInertia: (t = e.opt).scrollInertia,
                        scrollEasing: "mcsEaseInOut",
                        moveDragger: !1,
                        timeout: 60,
                        callbacks: !0,
                        onStart: !0,
                        onUpdate: !0,
                        onComplete: !0
                    }, n = z.extend(!0, {}, o, s), a = V.call(this, r), i = 0 < n.scrollInertia && n.scrollInertia < 17 ? 17 : n.scrollInertia, a[0] = Q.call(this, a[0], "y"), a[1] = Q.call(this, a[1], "x"), n.moveDragger && (a[0] *= e.scrollRatio.y, a[1] *= e.scrollRatio.x), n.dur = ie() ? 0 : i, setTimeout(function() {
                        null !== a[0] && void 0 !== a[0] && "x" !== t.axis && e.overflowed[0] && (n.dir = "y", n.overwrite = "all", J(l, a[0].toString(), n)), null !== a[1] && void 0 !== a[1] && "y" !== t.axis && e.overflowed[1] && (n.dir = "x", n.overwrite = "none", J(l, a[1].toString(), n))
                    }, n.timeout))
                })
            }
        },
        stop: function() {
            var e = c.call(this);
            return z(e).each(function() {
                var e = z(this);
                e.data(P) && G(e)
            })
        },
        disable: function(t) {
            var e = c.call(this);
            return z(e).each(function() {
                var e = z(this);
                e.data(P) && (e.data(P), Z.call(this, "remove"), T.call(this), t && y.call(this), k.call(this, !0), e.addClass(S[3]))
            })
        },
        destroy: function() {
            var l = c.call(this);
            return z(l).each(function() {
                var e, t, o, n, a, i = z(this);
                i.data(P) && (t = (e = i.data(P)).opt, o = z("#mCSB_" + e.idx), n = z("#mCSB_" + e.idx + "_container"), a = z(".mCSB_" + e.idx + "_scrollbar"), t.live && d(t.liveSelector || z(l).selector), Z.call(this, "remove"), T.call(this), y.call(this), i.removeData(P), ee(this, "mcs"), a.remove(), n.find("img." + S[2]).removeClass(S[2]), o.replaceWith(n.contents()), i.removeClass(f + " _" + P + "_" + e.idx + " " + S[6] + " " + S[7] + " " + S[5] + " " + S[3]).addClass(S[4]))
            })
        }
    }, c = function() {
        return "object" != typeof z(this) || z(this).length < 1 ? n : this
    }, s = function(e) {
        e.autoDraggerLength = !(-1 < z.inArray(e.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"])) && e.autoDraggerLength, e.autoExpandScrollbar = !(-1 < z.inArray(e.theme, ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"])) && e.autoExpandScrollbar, e.scrollButtons.enable = !(-1 < z.inArray(e.theme, ["minimal", "minimal-dark"])) && e.scrollButtons.enable, e.autoHideScrollbar = -1 < z.inArray(e.theme, ["minimal", "minimal-dark"]) || e.autoHideScrollbar, e.scrollbarPosition = -1 < z.inArray(e.theme, ["minimal", "minimal-dark"]) ? "outside" : e.scrollbarPosition
    }, d = function(e) {
        i[e] && (clearTimeout(i[e]), ee(i, e))
    }, u = function(e) {
        return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
    }, h = function(e) {
        return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
    }, p = function() {
        var e = z(this),
            t = e.data(P),
            o = t.opt,
            n = o.autoExpandScrollbar ? " " + S[1] + "_expand" : "",
            a = ["<div id='mCSB_" + t.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + t.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_vertical" + n + "'><div class='" + S[12] + "'><div id='mCSB_" + t.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + t.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + t.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_horizontal" + n + "'><div class='" + S[12] + "'><div id='mCSB_" + t.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
            i = "yx" === o.axis ? "mCSB_vertical_horizontal" : "x" === o.axis ? "mCSB_horizontal" : "mCSB_vertical",
            l = "yx" === o.axis ? a[0] + a[1] : "x" === o.axis ? a[1] : a[0],
            r = "yx" === o.axis ? "<div id='mCSB_" + t.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
            s = o.autoHideScrollbar ? " " + S[6] : "",
            c = "x" !== o.axis && "rtl" === t.langDir ? " " + S[7] : "";
        o.setWidth && e.css("width", o.setWidth), o.setHeight && e.css("height", o.setHeight), o.setLeft = "y" !== o.axis && "rtl" === t.langDir ? "989999px" : o.setLeft, e.addClass(f + " _" + P + "_" + t.idx + s + c).wrapInner("<div id='mCSB_" + t.idx + "' class='mCustomScrollBox mCS-" + o.theme + " " + i + "'><div id='mCSB_" + t.idx + "_container' class='mCSB_container' style='position:relative; top:" + o.setTop + "; left:" + o.setLeft + ";' dir='" + t.langDir + "' /></div>");
        var d = z("#mCSB_" + t.idx),
            u = z("#mCSB_" + t.idx + "_container");
        "y" === o.axis || o.advanced.autoExpandHorizontalScroll || u.css("width", v(u)), "outside" === o.scrollbarPosition ? ("static" === e.css("position") && e.css("position", "relative"), e.css("overflow", "visible"), d.addClass("mCSB_outside").after(l)) : (d.addClass("mCSB_inside").append(l), u.wrap(r)), w.call(this);
        var h = [z("#mCSB_" + t.idx + "_dragger_vertical"), z("#mCSB_" + t.idx + "_dragger_horizontal")];
        h[0].css("min-height", h[0].height()), h[1].css("min-width", h[1].width())
    }, v = function(e) {
        var t = [e[0].scrollWidth, Math.max.apply(Math, e.children().map(function() {
                return z(this).outerWidth(!0)
            }).get())],
            o = e.parent().width();
        return o < t[0] ? t[0] : o < t[1] ? t[1] : "100%"
    }, x = function() {
        var e, t = z(this).data(P),
            o = t.opt,
            n = z("#mCSB_" + t.idx + "_container");
        o.advanced.autoExpandHorizontalScroll && "y" !== o.axis && (n.css({
            width: "auto",
            "min-width": 0,
            "overflow-x": "scroll"
        }), e = Math.ceil(n[0].scrollWidth), 3 === o.advanced.autoExpandHorizontalScroll || 2 !== o.advanced.autoExpandHorizontalScroll && e > n.parent().width() ? n.css({
            width: e,
            "min-width": "100%",
            "overflow-x": "inherit"
        }) : n.css({
            "overflow-x": "inherit",
            position: "absolute"
        }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
            width: Math.ceil(n[0].getBoundingClientRect().right + .4) - Math.floor(n[0].getBoundingClientRect().left),
            "min-width": "100%",
            position: "relative"
        }).unwrap())
    }, w = function() {
        var e = z(this).data(P),
            t = e.opt,
            o = z(".mCSB_" + e.idx + "_scrollbar:first"),
            n = ne(t.scrollButtons.tabindex) ? "tabindex='" + t.scrollButtons.tabindex + "'" : "",
            a = ["<a href='#' class='" + S[13] + "' " + n + " />", "<a href='#' class='" + S[14] + "' " + n + " />", "<a href='#' class='" + S[15] + "' " + n + " />", "<a href='#' class='" + S[16] + "' " + n + " />"],
            i = ["x" === t.axis ? a[2] : a[0], "x" === t.axis ? a[3] : a[1], a[2], a[3]];
        t.scrollButtons.enable && o.prepend(i[0]).append(i[1]).next(".mCSB_scrollTools").prepend(i[2]).append(i[3])
    }, _ = function() {
        var e = z(this).data(P),
            t = z("#mCSB_" + e.idx),
            o = z("#mCSB_" + e.idx + "_container"),
            n = [z("#mCSB_" + e.idx + "_dragger_vertical"), z("#mCSB_" + e.idx + "_dragger_horizontal")],
            a = [t.height() / o.outerHeight(!1), t.width() / o.outerWidth(!1)],
            i = [parseInt(n[0].css("min-height")), Math.round(a[0] * n[0].parent().height()), parseInt(n[1].css("min-width")), Math.round(a[1] * n[1].parent().width())],
            l = g && i[1] < i[0] ? i[0] : i[1],
            r = g && i[3] < i[2] ? i[2] : i[3];
        n[0].css({
            height: l,
            "max-height": n[0].parent().height() - 10
        }).find(".mCSB_dragger_bar").css({
            "line-height": i[0] + "px"
        }), n[1].css({
            width: r,
            "max-width": n[1].parent().width() - 10
        })
    }, b = function() {
        var e = z(this).data(P),
            t = z("#mCSB_" + e.idx),
            o = z("#mCSB_" + e.idx + "_container"),
            n = [z("#mCSB_" + e.idx + "_dragger_vertical"), z("#mCSB_" + e.idx + "_dragger_horizontal")],
            a = [o.outerHeight(!1) - t.height(), o.outerWidth(!1) - t.width()],
            i = [a[0] / (n[0].parent().height() - n[0].height()), a[1] / (n[1].parent().width() - n[1].width())];
        e.scrollRatio = {
            y: i[0],
            x: i[1]
        }
    }, M = function(e, t, o) {
        var n = o ? S[0] + "_expanded" : "",
            a = e.closest(".mCSB_scrollTools");
        "active" === t ? (e.toggleClass(S[0] + " " + n), a.toggleClass(S[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(S[0]), a.removeClass(S[1])) : (e.addClass(S[0]), a.addClass(S[1])))
    }, C = function() {
        var e = z(this).data(P),
            t = z("#mCSB_" + e.idx),
            o = z("#mCSB_" + e.idx + "_container"),
            n = null == e.overflowed ? o.height() : o.outerHeight(!1),
            a = null == e.overflowed ? o.width() : o.outerWidth(!1),
            i = o[0].scrollHeight,
            l = o[0].scrollWidth;
        return n < i && (n = i), a < l && (a = l), [n > t.height(), a > t.width()]
    }, y = function() {
        var e, t = z(this),
            o = t.data(P),
            n = o.opt,
            a = z("#mCSB_" + o.idx),
            i = z("#mCSB_" + o.idx + "_container"),
            l = [z("#mCSB_" + o.idx + "_dragger_vertical"), z("#mCSB_" + o.idx + "_dragger_horizontal")];
        G(t), ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(i).css("top", 0), J(t, "_resetY")), ("y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) && (e = dx = 0, "rtl" === o.langDir && (e = a.width() - i.outerWidth(!1), dx = Math.abs(e / o.scrollRatio.x)), i.css("left", e), l[1].css("left", dx), J(t, "_resetX"))
    }, B = function() {
        var t, o = z(this),
            e = o.data(P),
            n = e.opt;
        e.bindEvents || (l.call(this), n.contentTouchScroll && D.call(this), O.call(this), n.mouseWheel.enable && function e() {
            t = setTimeout(function() {
                z.event.special.mousewheel ? (clearTimeout(t), I.call(o[0])) : e()
            }, 100)
        }(), A.call(this), U.call(this), n.advanced.autoScrollOnFocus && W.call(this), n.scrollButtons.enable && F.call(this), n.keyboard.enable && q.call(this), e.bindEvents = !0)
    }, T = function() {
        var e = z(this),
            t = e.data(P),
            o = t.opt,
            n = "mCS_" + t.idx,
            a = ".mCSB_" + t.idx + "_scrollbar",
            i = z("#mCSB_" + t.idx + ",#mCSB_" + t.idx + "_container,#mCSB_" + t.idx + "_container_wrapper," + a + " ." + S[12] + ",#mCSB_" + t.idx + "_dragger_vertical,#mCSB_" + t.idx + "_dragger_horizontal," + a + ">a"),
            l = z("#mCSB_" + t.idx + "_container");
        o.advanced.releaseDraggableSelectors && i.add(z(o.advanced.releaseDraggableSelectors)), o.advanced.extraDraggableSelectors && i.add(z(o.advanced.extraDraggableSelectors)), t.bindEvents && (z(document).add(z(!j() || top.document)).unbind("." + n), i.each(function() {
            z(this).unbind("." + n)
        }), clearTimeout(e[0]._focusTimeout), ee(e[0], "_focusTimeout"), clearTimeout(t.sequential.step), ee(t.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), ee(l[0], "onCompleteTimeout"), t.bindEvents = !1)
    }, k = function(e) {
        var t = z(this),
            o = t.data(P),
            n = o.opt,
            a = z("#mCSB_" + o.idx + "_container_wrapper"),
            i = a.length ? a : z("#mCSB_" + o.idx + "_container"),
            l = [z("#mCSB_" + o.idx + "_scrollbar_vertical"), z("#mCSB_" + o.idx + "_scrollbar_horizontal")],
            r = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
        "x" !== n.axis && (o.overflowed[0] && !e ? (l[0].add(r[0]).add(l[0].children("a")).css("display", "block"), i.removeClass(S[8] + " " + S[10])) : (n.alwaysShowScrollbar ? (2 !== n.alwaysShowScrollbar && r[0].css("display", "none"), i.removeClass(S[10])) : (l[0].css("display", "none"), i.addClass(S[10])), i.addClass(S[8]))), "y" !== n.axis && (o.overflowed[1] && !e ? (l[1].add(r[1]).add(l[1].children("a")).css("display", "block"), i.removeClass(S[9] + " " + S[11])) : (n.alwaysShowScrollbar ? (2 !== n.alwaysShowScrollbar && r[1].css("display", "none"), i.removeClass(S[11])) : (l[1].css("display", "none"), i.addClass(S[11])), i.addClass(S[9]))), o.overflowed[0] || o.overflowed[1] ? t.removeClass(S[5]) : t.addClass(S[5])
    }, Y = function(e) {
        var t = e.type,
            o = e.target.ownerDocument !== document && null !== frameElement ? [z(frameElement).offset().top, z(frameElement).offset().left] : null,
            n = j() && e.target.ownerDocument !== top.document && null !== frameElement ? [z(e.view.frameElement).offset().top, z(e.view.frameElement).offset().left] : [0, 0];
        switch (t) {
            case "pointerdown":
            case "MSPointerDown":
            case "pointermove":
            case "MSPointerMove":
            case "pointerup":
            case "MSPointerUp":
                return o ? [e.originalEvent.pageY - o[0] + n[0], e.originalEvent.pageX - o[1] + n[1], !1] : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
            case "touchstart":
            case "touchmove":
            case "touchend":
                var a = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
                    i = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
                return e.target.ownerDocument !== document ? [a.screenY, a.screenX, 1 < i] : [a.pageY, a.pageX, 1 < i];
            default:
                return o ? [e.pageY - o[0] + n[0], e.pageX - o[1] + n[1], !1] : [e.pageY, e.pageX, !1]
        }
    }, l = function() {
        function a(e, t, o, n) {
            var a, i;
            f[0].idleTimer = u.scrollInertia < 233 ? 250 : 0, i = l.attr("id") === h[1] ? (a = "x", (l[0].offsetLeft - t + n) * d.scrollRatio.x) : (a = "y", (l[0].offsetTop - e + o) * d.scrollRatio.y), J(c, i.toString(), {
                dir: a,
                drag: !0
            })
        }
        var l, r, s, c = z(this),
            d = c.data(P),
            u = d.opt,
            e = "mCS_" + d.idx,
            h = ["mCSB_" + d.idx + "_dragger_vertical", "mCSB_" + d.idx + "_dragger_horizontal"],
            f = z("#mCSB_" + d.idx + "_container"),
            t = z("#" + h[0] + ",#" + h[1]),
            o = u.advanced.releaseDraggableSelectors ? t.add(z(u.advanced.releaseDraggableSelectors)) : t,
            n = u.advanced.extraDraggableSelectors ? z(!j() || top.document).add(z(u.advanced.extraDraggableSelectors)) : z(!j() || top.document);
        t.bind("contextmenu." + e, function(e) {
            e.preventDefault()
        }).bind("mousedown." + e + " touchstart." + e + " pointerdown." + e + " MSPointerDown." + e, function(e) {
            var t, o, n, a, i;
            e.stopImmediatePropagation(), e.preventDefault(), te(e) && (X = !0, g && (document.onselectstart = function() {
                return !1
            }), L.call(f, !1), G(c), t = (l = z(this)).offset(), o = Y(e)[0] - t.top, n = Y(e)[1] - t.left, a = l.height() + t.top, i = l.width() + t.left, o < a && 0 < o && n < i && 0 < n && (r = o, s = n), M(l, "active", u.autoExpandScrollbar))
        }).bind("touchmove." + e, function(e) {
            e.stopImmediatePropagation(), e.preventDefault();
            var t = l.offset(),
                o = Y(e)[0] - t.top,
                n = Y(e)[1] - t.left;
            a(r, s, o, n)
        }), z(document).add(n).bind("mousemove." + e + " pointermove." + e + " MSPointerMove." + e, function(e) {
            if (l) {
                var t = l.offset(),
                    o = Y(e)[0] - t.top,
                    n = Y(e)[1] - t.left;
                if (r === o && s === n) return;
                a(r, s, o, n)
            }
        }).add(o).bind("mouseup." + e + " touchend." + e + " pointerup." + e + " MSPointerUp." + e, function() {
            l && (M(l, "active", u.autoExpandScrollbar), l = null), X = !1, g && (document.onselectstart = null), L.call(f, !0)
        })
    }, D = function() {
        function t(e) {
            if (!oe(e) || X || Y(e)[2]) return H = 0;
            y = C = 0, h = H = 1, B.removeClass("mCS_touch_action");
            var t = D.offset();
            c = Y(e)[0] - t.top, f = Y(e)[1] - t.left, A = [Y(e)[0], Y(e)[1]]
        }

        function o(e) {
            var t, o, n, a, i, l, r, s;
            !oe(e) || X || Y(e)[2] || (M.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), y && !C || !h) || (v = $(), t = k.offset(), o = Y(e)[0] - t.top, n = Y(e)[1] - t.left, a = "mcsLinearOut", I.push(o), E.push(n), A[2] = Math.abs(Y(e)[0] - A[0]), A[3] = Math.abs(Y(e)[1] - A[1]), T.overflowed[0] && (i = O[0].parent().height() - O[0].height(), l = 0 < c - o && o - c > -(i * T.scrollRatio.y) && (2 * A[3] < A[2] || "yx" === M.axis)), T.overflowed[1] && (r = O[1].parent().width() - O[1].width(), s = 0 < f - n && n - f > -(r * T.scrollRatio.x) && (2 * A[2] < A[3] || "yx" === M.axis)), l || s ? (W || e.preventDefault(), C = 1) : (y = 1, B.addClass("mCS_touch_action")), W && e.preventDefault(), S = "yx" === M.axis ? [c - o, f - n] : "x" === M.axis ? [null, f - n] : [c - o, null], D[0].idleTimer = 250, T.overflowed[0] && u(S[0], L, a, "y", "all", !0), T.overflowed[1] && u(S[1], L, a, "x", R, !0))
        }

        function n(e) {
            if (!oe(e) || X || Y(e)[2]) return H = 0;
            H = 1, e.stopImmediatePropagation(), G(B), g = $();
            var t = k.offset();
            m = Y(e)[0] - t.top, p = Y(e)[1] - t.left, I = [], E = []
        }

        function a(e) {
            var t, o, n, a, i, l, r, s, c;
            !oe(e) || X || Y(e)[2] || (h = 0, e.stopImmediatePropagation(), y = C = 0, x = $(), t = k.offset(), o = Y(e)[0] - t.top, n = Y(e)[1] - t.left, 30 < x - v || (a = "mcsEaseOut", l = (i = (_ = 1e3 / (x - g)) < 2.5) ? [I[I.length - 2], E[E.length - 2]] : [0, 0], w = i ? [o - l[0], n - l[1]] : [o - m, n - p], r = [Math.abs(w[0]), Math.abs(w[1])], _ = i ? [Math.abs(w[0] / 4), Math.abs(w[1] / 4)] : [_, _], s = [Math.abs(D[0].offsetTop) - w[0] * d(r[0] / _[0], _[0]), Math.abs(D[0].offsetLeft) - w[1] * d(r[1] / _[1], _[1])], S = "yx" === M.axis ? [s[0], s[1]] : "x" === M.axis ? [null, s[1]] : [s[0], null], b = [4 * r[0] + M.scrollInertia, 4 * r[1] + M.scrollInertia], c = parseInt(M.contentTouchScroll) || 0, S[0] = c < r[0] ? S[0] : 0, S[1] = c < r[1] ? S[1] : 0, T.overflowed[0] && u(S[0], b[0], a, "y", R, !1), T.overflowed[1] && u(S[1], b[1], a, "x", R, !1)))
        }

        function d(e, t) {
            var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
            return 90 < e ? 4 < t ? o[0] : o[3] : 60 < e ? 3 < t ? o[3] : o[2] : 30 < e ? 8 < t ? o[1] : 6 < t ? o[0] : 4 < t ? t : o[2] : 8 < t ? t : o[3]
        }

        function u(e, t, o, n, a, i) {
            e && J(B, e.toString(), {
                dur: t,
                scrollEasing: o,
                dir: n,
                overwrite: a,
                drag: i
            })
        }
        var h, c, f, m, p, g, v, x, w, _, S, b, C, y, B = z(this),
            T = B.data(P),
            M = T.opt,
            e = "mCS_" + T.idx,
            k = z("#mCSB_" + T.idx),
            D = z("#mCSB_" + T.idx + "_container"),
            O = [z("#mCSB_" + T.idx + "_dragger_vertical"), z("#mCSB_" + T.idx + "_dragger_horizontal")],
            I = [],
            E = [],
            L = 0,
            R = "yx" === M.axis ? "none" : "all",
            A = [],
            i = D.find("iframe"),
            l = ["touchstart." + e + " pointerdown." + e + " MSPointerDown." + e, "touchmove." + e + " pointermove." + e + " MSPointerMove." + e, "touchend." + e + " pointerup." + e + " MSPointerUp." + e],
            W = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
        D.bind(l[0], function(e) {
            t(e)
        }).bind(l[1], function(e) {
            o(e)
        }), k.bind(l[0], function(e) {
            n(e)
        }).bind(l[2], function(e) {
            a(e)
        }), i.length && i.each(function() {
            z(this).bind("load", function() {
                j(this) && z(this.contentDocument || this.contentWindow.document).bind(l[0], function(e) {
                    t(e), n(e)
                }).bind(l[1], function(e) {
                    o(e)
                }).bind(l[2], function(e) {
                    a(e)
                })
            })
        })
    }, O = function() {
        function a(e, t, o) {
            s.type = o && i ? "stepped" : "stepless", s.scrollAmount = 10, N(n, e, t, "mcsLinearOut", o ? 60 : null)
        }
        var i, n = z(this),
            l = n.data(P),
            r = l.opt,
            s = l.sequential,
            e = "mCS_" + l.idx,
            c = z("#mCSB_" + l.idx + "_container"),
            d = c.parent();
        c.bind("mousedown." + e, function() {
            H || i || (i = 1, X = !0)
        }).add(document).bind("mousemove." + e, function(e) {
            var t, o, n;
            !H && i && (window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type && document.selection.createRange().text) && (t = c.offset(), o = Y(e)[0] - t.top + c[0].offsetTop, n = Y(e)[1] - t.left + c[0].offsetLeft, 0 < o && o < d.height() && 0 < n && n < d.width() ? s.step && a("off", null, "stepped") : ("x" !== r.axis && l.overflowed[0] && (o < 0 ? a("on", 38) : o > d.height() && a("on", 40)), "y" !== r.axis && l.overflowed[1] && (n < 0 ? a("on", 37) : n > d.width() && a("on", 39))))
        }).bind("mouseup." + e + " dragend." + e, function() {
            H || (i && (i = 0, a("off", null)), X = !1)
        })
    }, I = function() {
        function o(e, t) {
            var o, n, a, i, l, r, s, c, d;
            G(u), R(u, e.target) || (o = "auto" !== f.mouseWheel.deltaFactor ? parseInt(f.mouseWheel.deltaFactor) : !(g && e.deltaFactor < 100) && e.deltaFactor || 100, n = f.scrollInertia, d = "x" === f.axis || "x" === f.mouseWheel.axis ? (a = "x", i = [Math.round(o * h.scrollRatio.x), parseInt(f.mouseWheel.scrollAmount)], l = "auto" !== f.mouseWheel.scrollAmount ? i[1] : i[0] >= m.width() ? .9 * m.width() : i[0], r = Math.abs(z("#mCSB_" + h.idx + "_container")[0].offsetLeft), s = p[1][0].offsetLeft, c = p[1].parent().width() - p[1].width(), "y" === f.mouseWheel.axis ? e.deltaY || t : e.deltaX) : (a = "y", i = [Math.round(o * h.scrollRatio.y), parseInt(f.mouseWheel.scrollAmount)], l = "auto" !== f.mouseWheel.scrollAmount ? i[1] : i[0] >= m.height() ? .9 * m.height() : i[0], r = Math.abs(z("#mCSB_" + h.idx + "_container")[0].offsetTop), s = p[0][0].offsetTop, c = p[0].parent().height() - p[0].height(), e.deltaY || t), "y" === a && !h.overflowed[0] || "x" === a && !h.overflowed[1] || ((f.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) && (d = -d), f.mouseWheel.normalizeDelta && (d = d < 0 ? -1 : 1), (0 < d && 0 !== s || d < 0 && s !== c || f.mouseWheel.preventDefault) && (e.stopImmediatePropagation(), e.preventDefault()), e.deltaFactor < 5 && !f.mouseWheel.normalizeDelta && (l = e.deltaFactor, n = 17), J(u, (r - d * l).toString(), {
                dir: a,
                dur: n
            })))
        }
        var u, h, f, e, m, p, t;
        z(this).data(P) && (u = z(this), h = u.data(P), f = h.opt, e = "mCS_" + h.idx, m = z("#mCSB_" + h.idx), p = [z("#mCSB_" + h.idx + "_dragger_vertical"), z("#mCSB_" + h.idx + "_dragger_horizontal")], (t = z("#mCSB_" + h.idx + "_container").find("iframe")).length && t.each(function() {
            z(this).bind("load", function() {
                j(this) && z(this.contentDocument || this.contentWindow.document).bind("mousewheel." + e, function(e, t) {
                    o(e, t)
                })
            })
        }), m.bind("mousewheel." + e, function(e, t) {
            o(e, t)
        }))
    }, E = new Object, j = function(e) {
        var t = !1,
            o = !1,
            n = null;
        if (void 0 === e ? o = "#empty" : void 0 !== z(e).attr("id") && (o = z(e).attr("id")), !1 !== o && void 0 !== E[o]) return E[o];
        if (e) {
            try {
                n = (e.contentDocument || e.contentWindow.document).body.innerHTML
            } catch (e) {}
            t = null !== n
        } else {
            try {
                n = top.document.body.innerHTML
            } catch (e) {}
            t = null !== n
        }
        return !1 !== o && (E[o] = t), t
    }, L = function(e) {
        var t, o = this.find("iframe");
        o.length && (t = e ? "auto" : "none", o.css("pointer-events", t))
    }, R = function(e, t) {
        var o = t.nodeName.toLowerCase(),
            n = e.data(P).opt.mouseWheel.disableOver;
        return -1 < z.inArray(o, n) && !(-1 < z.inArray(o, ["select", "textarea"]) && !z(t).is(":focus"))
    }, A = function() {
        var l, r = z(this),
            s = r.data(P),
            e = "mCS_" + s.idx,
            c = z("#mCSB_" + s.idx + "_container"),
            d = c.parent();
        z(".mCSB_" + s.idx + "_scrollbar ." + S[12]).bind("mousedown." + e + " touchstart." + e + " pointerdown." + e + " MSPointerDown." + e, function(e) {
            X = !0, z(e.target).hasClass("mCSB_dragger") || (l = 1)
        }).bind("touchend." + e + " pointerup." + e + " MSPointerUp." + e, function() {
            X = !1
        }).bind("click." + e, function(e) {
            if (l && (l = 0, z(e.target).hasClass(S[12]) || z(e.target).hasClass("mCSB_draggerRail"))) {
                G(r);
                var t = z(this),
                    o = t.find(".mCSB_dragger");
                if (0 < t.parent(".mCSB_scrollTools_horizontal").length) {
                    if (!s.overflowed[1]) return;
                    var n = "x",
                        a = e.pageX > o.offset().left ? -1 : 1,
                        i = Math.abs(c[0].offsetLeft) - a * (.9 * d.width())
                } else {
                    if (!s.overflowed[0]) return;
                    n = "y", a = e.pageY > o.offset().top ? -1 : 1, i = Math.abs(c[0].offsetTop) - a * (.9 * d.height())
                }
                J(r, i.toString(), {
                    dir: n,
                    scrollEasing: "mcsEaseInOut"
                })
            }
        })
    }, W = function() {
        var i = z(this),
            e = i.data(P),
            l = e.opt,
            t = "mCS_" + e.idx,
            r = z("#mCSB_" + e.idx + "_container"),
            s = r.parent();
        r.bind("focusin." + t, function() {
            var a = z(document.activeElement),
                e = r.find(".mCustomScrollBox").length;
            a.is(l.advanced.autoScrollOnFocus) && (G(i), clearTimeout(i[0]._focusTimeout), i[0]._focusTimer = e ? 17 * e : 0, i[0]._focusTimeout = setTimeout(function() {
                var e = [ae(a)[0], ae(a)[1]],
                    t = [r[0].offsetTop, r[0].offsetLeft],
                    o = [0 <= t[0] + e[0] && t[0] + e[0] < s.height() - a.outerHeight(!1), 0 <= t[1] + e[1] && t[0] + e[1] < s.width() - a.outerWidth(!1)],
                    n = "yx" !== l.axis || o[0] || o[1] ? "all" : "none";
                "x" === l.axis || o[0] || J(i, e[0].toString(), {
                    dir: "y",
                    scrollEasing: "mcsEaseInOut",
                    overwrite: n,
                    dur: 0
                }), "y" === l.axis || o[1] || J(i, e[1].toString(), {
                    dir: "x",
                    scrollEasing: "mcsEaseInOut",
                    overwrite: n,
                    dur: 0
                })
            }, i[0]._focusTimer))
        })
    }, U = function() {
        var e = z(this).data(P),
            t = "mCS_" + e.idx,
            o = z("#mCSB_" + e.idx + "_container").parent();
        o.bind("scroll." + t, function() {
            0 === o.scrollTop() && 0 === o.scrollLeft() || z(".mCSB_" + e.idx + "_scrollbar").css("visibility", "hidden")
        })
    }, F = function() {
        var n = z(this),
            a = n.data(P),
            i = a.opt,
            l = a.sequential,
            e = "mCS_" + a.idx,
            t = ".mCSB_" + a.idx + "_scrollbar";
        z(t + ">a").bind("contextmenu." + e, function(e) {
            e.preventDefault()
        }).bind("mousedown." + e + " touchstart." + e + " pointerdown." + e + " MSPointerDown." + e + " mouseup." + e + " touchend." + e + " pointerup." + e + " MSPointerUp." + e + " mouseout." + e + " pointerout." + e + " MSPointerOut." + e + " click." + e, function(e) {
            function t(e, t) {
                l.scrollAmount = i.scrollButtons.scrollAmount, N(n, e, t)
            }
            if (e.preventDefault(), te(e)) {
                var o = z(this).attr("class");
                switch (l.type = i.scrollButtons.scrollType, e.type) {
                    case "mousedown":
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                        if ("stepped" === l.type) return;
                        X = !0, a.tweenRunning = !1, t("on", o);
                        break;
                    case "mouseup":
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseout":
                    case "pointerout":
                    case "MSPointerOut":
                        if ("stepped" === l.type) return;
                        X = !1, l.dir && t("off", o);
                        break;
                    case "click":
                        if ("stepped" !== l.type || a.tweenRunning) return;
                        t("on", o)
                }
            }
        })
    }, q = function() {
        function t(e) {
            function t(e, t) {
                d.type = c.keyboard.scrollType, d.scrollAmount = c.keyboard.scrollAmount, "stepped" === d.type && s.tweenRunning || N(r, e, t)
            }
            switch (e.type) {
                case "blur":
                    s.tweenRunning && d.dir && t("off", null);
                    break;
                case "keydown":
                case "keyup":
                    var o, n, a, i = e.keyCode ? e.keyCode : e.which,
                        l = "on";
                    if ("x" !== c.axis && (38 === i || 40 === i) || "y" !== c.axis && (37 === i || 39 === i)) {
                        if ((38 === i || 40 === i) && !s.overflowed[0] || (37 === i || 39 === i) && !s.overflowed[1]) return;
                        "keyup" === e.type && (l = "off"), z(document.activeElement).is(f) || (e.preventDefault(), e.stopImmediatePropagation(), t(l, i))
                    } else {
                        33 === i || 34 === i ? ((s.overflowed[0] || s.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type && (G(r), o = 34 === i ? -1 : 1, a = "x" === c.axis || "yx" === c.axis && s.overflowed[1] && !s.overflowed[0] ? (n = "x", Math.abs(u[0].offsetLeft) - o * (.9 * h.width())) : (n = "y", Math.abs(u[0].offsetTop) - o * (.9 * h.height())), J(r, a.toString(), {
                            dir: n,
                            scrollEasing: "mcsEaseInOut"
                        }))) : 35 !== i && 36 !== i || z(document.activeElement).is(f) || ((s.overflowed[0] || s.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" !== e.type) || (a = "x" === c.axis || "yx" === c.axis && s.overflowed[1] && !s.overflowed[0] ? (n = "x", 35 === i ? Math.abs(h.width() - u.outerWidth(!1)) : 0) : (n = "y", 35 === i ? Math.abs(h.height() - u.outerHeight(!1)) : 0), J(r, a.toString(), {
                            dir: n,
                            scrollEasing: "mcsEaseInOut"
                        }))
                    }
            }
        }
        var r = z(this),
            s = r.data(P),
            c = s.opt,
            d = s.sequential,
            e = "mCS_" + s.idx,
            o = z("#mCSB_" + s.idx),
            u = z("#mCSB_" + s.idx + "_container"),
            h = u.parent(),
            f = "input,textarea,select,datalist,keygen,[contenteditable='true']",
            n = u.find("iframe"),
            a = ["blur." + e + " keydown." + e + " keyup." + e];
        n.length && n.each(function() {
            z(this).bind("load", function() {
                j(this) && z(this.contentDocument || this.contentWindow.document).bind(a[0], function(e) {
                    t(e)
                })
            })
        }), o.attr("tabindex", "0").bind(a[0], function(e) {
            t(e)
        })
    }, N = function(u, e, t, h, f) {
        function m(e) {
            g.snapAmount && (v.scrollAmount = g.snapAmount instanceof Array ? "x" === v.dir[0] ? g.snapAmount[1] : g.snapAmount[0] : g.snapAmount);
            var t = "stepped" !== v.type,
                o = f || (e ? t ? w / 1.5 : _ : 1e3 / 60),
                n = e ? t ? 7.5 : 40 : 2.5,
                a = [Math.abs(x[0].offsetTop), Math.abs(x[0].offsetLeft)],
                i = [10 < p.scrollRatio.y ? 10 : p.scrollRatio.y, 10 < p.scrollRatio.x ? 10 : p.scrollRatio.x],
                l = "x" === v.dir[0] ? a[1] + v.dir[1] * (i[1] * n) : a[0] + v.dir[1] * (i[0] * n),
                r = "x" === v.dir[0] ? a[1] + v.dir[1] * parseInt(v.scrollAmount) : a[0] + v.dir[1] * parseInt(v.scrollAmount),
                s = "auto" !== v.scrollAmount ? r : l,
                c = h || (e ? t ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"),
                d = !!e;
            return e && o < 17 && (s = "x" === v.dir[0] ? a[1] : a[0]), J(u, s.toString(), {
                dir: v.dir[0],
                scrollEasing: c,
                dur: o,
                onComplete: d
            }), e ? void(v.dir = !1) : (clearTimeout(v.step), void(v.step = setTimeout(function() {
                m()
            }, o)))
        }
        var p = u.data(P),
            g = p.opt,
            v = p.sequential,
            x = z("#mCSB_" + p.idx + "_container"),
            o = "stepped" === v.type,
            w = g.scrollInertia < 26 ? 26 : g.scrollInertia,
            _ = g.scrollInertia < 1 ? 17 : g.scrollInertia;
        switch (e) {
            case "on":
                if (v.dir = [t === S[16] || t === S[15] || 39 === t || 37 === t ? "x" : "y", t === S[13] || t === S[15] || 38 === t || 37 === t ? -1 : 1], G(u), ne(t) && "stepped" === v.type) return;
                m(o);
                break;
            case "off":
                clearTimeout(v.step), ee(v, "step"), G(u), (o || p.tweenRunning && v.dir) && m(!0)
        }
    }, V = function(e) {
        var t = z(this).data(P).opt,
            o = [];
        return "function" == typeof e && (e = e()), e instanceof Array ? o = 1 < e.length ? [e[0], e[1]] : "x" === t.axis ? [null, e[0]] : [e[0], null] : (o[0] = e.y ? e.y : e.x || "x" === t.axis ? null : e, o[1] = e.x ? e.x : e.y || "y" === t.axis ? null : e), "function" == typeof o[0] && (o[0] = o[0]()), "function" == typeof o[1] && (o[1] = o[1]()), o
    }, Q = function(e, t) {
        if (null != e && void 0 !== e) {
            var o = z(this),
                n = o.data(P),
                a = n.opt,
                i = z("#mCSB_" + n.idx + "_container"),
                l = i.parent(),
                r = typeof e,
                s = "x" === (t = t || ("x" === a.axis ? "x" : "y")) ? i.outerWidth(!1) - l.width() : i.outerHeight(!1) - l.height(),
                c = "x" === t ? i[0].offsetLeft : i[0].offsetTop,
                d = "x" === t ? "left" : "top";
            switch (r) {
                case "function":
                    return e();
                case "object":
                    if (!(h = e.jquery ? e : z(e)).length) return;
                    return "x" === t ? ae(h)[1] : ae(h)[0];
                case "string":
                case "number":
                    if (ne(e)) return Math.abs(e);
                    if (-1 !== e.indexOf("%")) return Math.abs(s * parseInt(e) / 100);
                    if (-1 !== e.indexOf("-=")) return Math.abs(c - parseInt(e.split("-=")[1]));
                    if (-1 !== e.indexOf("+=")) {
                        var u = c + parseInt(e.split("+=")[1]);
                        return 0 <= u ? 0 : Math.abs(u)
                    }
                    if (-1 !== e.indexOf("px") && ne(e.split("px")[0])) return Math.abs(e.split("px")[0]);
                    if ("top" === e || "left" === e) return 0;
                    if ("bottom" === e) return Math.abs(l.height() - i.outerHeight(!1));
                    if ("right" === e) return Math.abs(l.width() - i.outerWidth(!1));
                    if ("first" !== e && "last" !== e) return z(e).length ? "x" === t ? ae(z(e))[1] : ae(z(e))[0] : (i.css(d, e), void m.update.call(null, o[0]));
                    var h = i.find(":" + e);
                    return "x" === t ? ae(h)[1] : ae(h)[0]
            }
        }
    }, Z = function(e) {
        function o(e) {
            clearTimeout(i[0].autoUpdate), m.update.call(null, t[0], e)
        }
        var t = z(this),
            n = t.data(P),
            a = n.opt,
            i = z("#mCSB_" + n.idx + "_container");
        return e ? (clearTimeout(i[0].autoUpdate), void ee(i[0], "autoUpdate")) : void
        function e() {
            return clearTimeout(i[0].autoUpdate), 0 === t.parents("html").length ? void(t = null) : void(i[0].autoUpdate = setTimeout(function() {
                return a.advanced.updateOnSelectorChange && (n.poll.change.n = function() {
                    !0 === a.advanced.updateOnSelectorChange && (a.advanced.updateOnSelectorChange = "*");
                    var e = 0,
                        t = i.find(a.advanced.updateOnSelectorChange);
                    return a.advanced.updateOnSelectorChange && 0 < t.length && t.each(function() {
                        e += this.offsetHeight + this.offsetWidth
                    }), e
                }(), n.poll.change.n !== n.poll.change.o) ? (n.poll.change.o = n.poll.change.n, void o(3)) : a.advanced.updateOnContentResize && (n.poll.size.n = t[0].scrollHeight + t[0].scrollWidth + i[0].offsetHeight + t[0].offsetHeight + t[0].offsetWidth, n.poll.size.n !== n.poll.size.o) ? (n.poll.size.o = n.poll.size.n, void o(1)) : !a.advanced.updateOnImageLoad || "auto" === a.advanced.updateOnImageLoad && "y" === a.axis || (n.poll.img.n = i.find("img").length, n.poll.img.n === n.poll.img.o) ? void((a.advanced.updateOnSelectorChange || a.advanced.updateOnContentResize || a.advanced.updateOnImageLoad) && e()) : (n.poll.img.o = n.poll.img.n, void i.find("img").each(function() {
                    ! function(e) {
                        if (z(e).hasClass(S[2])) return o();
                        var t = new Image;
                        t.onload = function(e, t) {
                            return function() {
                                return t.apply(e, arguments)
                            }
                        }(t, function() {
                            this.onload = null, z(e).addClass(S[2]), o(2)
                        }), t.src = e.src
                    }(this)
                }))
            }, a.advanced.autoUpdateTimeout))
        }()
    }, G = function(e) {
        var t = e.data(P);
        z("#mCSB_" + t.idx + "_container,#mCSB_" + t.idx + "_container_wrapper,#mCSB_" + t.idx + "_dragger_vertical,#mCSB_" + t.idx + "_dragger_horizontal").each(function() {
            o.call(this)
        })
    }, J = function(a, e, i) {
        function t(e) {
            return c && d.callbacks[e] && "function" == typeof d.callbacks[e]
        }

        function o() {
            var e = [m[0].offsetTop, m[0].offsetLeft],
                t = [x[0].offsetTop, x[0].offsetLeft],
                o = [m.outerHeight(!1), m.outerWidth(!1)],
                n = [f.height(), f.width()];
            a[0].mcs = {
                content: m,
                top: e[0],
                left: e[1],
                draggerTop: t[0],
                draggerLeft: t[1],
                topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(o[0]) - n[0])),
                leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(o[1]) - n[1])),
                direction: i.dir
            }
        }
        var n, l, r, s, c = a.data(P),
            d = c.opt,
            u = {
                trigger: "internal",
                dir: "y",
                scrollEasing: "mcsEaseOut",
                drag: !1,
                dur: d.scrollInertia,
                overwrite: "all",
                callbacks: !0,
                onStart: !0,
                onUpdate: !0,
                onComplete: !0
            },
            h = [(i = z.extend(u, i)).dur, i.drag ? 0 : i.dur],
            f = z("#mCSB_" + c.idx),
            m = z("#mCSB_" + c.idx + "_container"),
            p = m.parent(),
            g = d.callbacks.onTotalScrollOffset ? V.call(a, d.callbacks.onTotalScrollOffset) : [0, 0],
            v = d.callbacks.onTotalScrollBackOffset ? V.call(a, d.callbacks.onTotalScrollBackOffset) : [0, 0];
        if (c.trigger = i.trigger, 0 === p.scrollTop() && 0 === p.scrollLeft() || (z(".mCSB_" + c.idx + "_scrollbar").css("visibility", "visible"), p.scrollTop(0).scrollLeft(0)), "_resetY" !== e || c.contentReset.y || (t("onOverflowYNone") && d.callbacks.onOverflowYNone.call(a[0]), c.contentReset.y = 1), "_resetX" !== e || c.contentReset.x || (t("onOverflowXNone") && d.callbacks.onOverflowXNone.call(a[0]), c.contentReset.x = 1), "_resetY" !== e && "_resetX" !== e) {
            switch (!c.contentReset.y && a[0].mcs || !c.overflowed[0] || (t("onOverflowY") && d.callbacks.onOverflowY.call(a[0]), c.contentReset.x = null), !c.contentReset.x && a[0].mcs || !c.overflowed[1] || (t("onOverflowX") && d.callbacks.onOverflowX.call(a[0]), c.contentReset.x = null), d.snapAmount && (n = d.snapAmount instanceof Array ? "x" === i.dir ? d.snapAmount[1] : d.snapAmount[0] : d.snapAmount, l = e, r = n, s = d.snapOffset, e = Math.round(l / r) * r - s), i.dir) {
                case "x":
                    var x = z("#mCSB_" + c.idx + "_dragger_horizontal"),
                        w = "left",
                        _ = m[0].offsetLeft,
                        S = [f.width() - m.outerWidth(!1), x.parent().width() - x.width()],
                        b = [e, 0 === e ? 0 : e / c.scrollRatio.x],
                        C = g[1],
                        y = v[1],
                        B = 0 < C ? C / c.scrollRatio.x : 0,
                        T = 0 < y ? y / c.scrollRatio.x : 0;
                    break;
                case "y":
                    x = z("#mCSB_" + c.idx + "_dragger_vertical"), w = "top", _ = m[0].offsetTop, S = [f.height() - m.outerHeight(!1), x.parent().height() - x.height()], b = [e, 0 === e ? 0 : e / c.scrollRatio.y], C = g[0], y = v[0], B = 0 < C ? C / c.scrollRatio.y : 0, T = 0 < y ? y / c.scrollRatio.y : 0
            }
            b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= S[1] ? b = [S[0], S[1]] : b[0] = -b[0], a[0].mcs || (o(), t("onInit") && d.callbacks.onInit.call(a[0])), clearTimeout(m[0].onCompleteTimeout), K(x[0], w, Math.round(b[1]), h[1], i.scrollEasing), !c.tweenRunning && (0 === _ && 0 <= b[0] || _ === S[0] && b[0] <= S[0]) || K(m[0], w, Math.round(b[0]), h[0], i.scrollEasing, i.overwrite, {
                onStart: function() {
                    i.callbacks && i.onStart && !c.tweenRunning && (t("onScrollStart") && (o(), d.callbacks.onScrollStart.call(a[0])), c.tweenRunning = !0, M(x), c.cbOffsets = [d.callbacks.alwaysTriggerOffsets || _ >= S[0] + C, d.callbacks.alwaysTriggerOffsets || _ <= -y])
                },
                onUpdate: function() {
                    i.callbacks && i.onUpdate && t("whileScrolling") && (o(), d.callbacks.whileScrolling.call(a[0]))
                },
                onComplete: function() {
                    var e;
                    i.callbacks && i.onComplete && ("yx" === d.axis && clearTimeout(m[0].onCompleteTimeout), e = m[0].idleTimer || 0, m[0].onCompleteTimeout = setTimeout(function() {
                        t("onScroll") && (o(), d.callbacks.onScroll.call(a[0])), t("onTotalScroll") && b[1] >= S[1] - B && c.cbOffsets[0] && (o(), d.callbacks.onTotalScroll.call(a[0])), t("onTotalScrollBack") && b[1] <= T && c.cbOffsets[1] && (o(), d.callbacks.onTotalScrollBack.call(a[0])), c.tweenRunning = !1, m[0].idleTimer = 0, M(x, "hide")
                    }, e))
                }
            })
        }
    }, K = function(e, t, o, n, a, i, l) {
        function r() {
            x.stop || (p || u.call(), p = $() - m, s(), p >= x.time && (x.time = p > x.time ? p + c - (p - x.time) : p + c - 1, x.time < p + 1 && (x.time = p + 1)), x.time < n ? x.id = d(r) : f.call())
        }

        function s() {
            0 < n ? (x.currVal = function(e, t, o, n, a) {
                switch (a) {
                    case "linear":
                    case "mcsLinear":
                        return o * e / n + t;
                    case "mcsLinearOut":
                        return e /= n, e--, o * Math.sqrt(1 - e * e) + t;
                    case "easeInOutSmooth":
                        return (e /= n / 2) < 1 ? o / 2 * e * e + t : -o / 2 * (--e * (e - 2) - 1) + t;
                    case "easeInOutStrong":
                        return (e /= n / 2) < 1 ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (2 - Math.pow(2, -10 * e)) + t);
                    case "easeInOut":
                    case "mcsEaseInOut":
                        return (e /= n / 2) < 1 ? o / 2 * e * e * e + t : o / 2 * ((e -= 2) * e * e + 2) + t;
                    case "easeOutSmooth":
                        return e /= n, -o * (--e * e * e * e - 1) + t;
                    case "easeOutStrong":
                        return o * (1 - Math.pow(2, -10 * e / n)) + t;
                    case "easeOut":
                    case "mcsEaseOut":
                    default:
                        var i = (e /= n) * e,
                            l = i * e;
                        return t + o * (.499999999999997 * l * i + -2.5 * i * i + 5.5 * l + -6.5 * i + 4 * e)
                }
            }(x.time, g, w, n, a), v[t] = Math.round(x.currVal) + "px") : v[t] = o + "px", h.call()
        }
        e._mTween || (e._mTween = {
            top: {},
            left: {}
        });
        var c, d, u = (l = l || {}).onStart || function() {},
            h = l.onUpdate || function() {},
            f = l.onComplete || function() {},
            m = $(),
            p = 0,
            g = e.offsetTop,
            v = e.style,
            x = e._mTween[t];
        "left" === t && (g = e.offsetLeft);
        var w = o - g;
        x.stop = 0, "none" === i || null != x.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(x.id) : clearTimeout(x.id), x.id = null), c = 1e3 / 60, x.time = p + c, d = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) {
            return s(), setTimeout(e, .01)
        }, x.id = d(r)
    }, $ = function() {
        return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
    }, o = function() {
        var e = this;
        e._mTween || (e._mTween = {
            top: {},
            left: {}
        });
        for (var t = ["top", "left"], o = 0; o < t.length; o++) {
            var n = t[o];
            e._mTween[n].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[n].id) : clearTimeout(e._mTween[n].id), e._mTween[n].id = null, e._mTween[n].stop = 1)
        }
    }, ee = function(t, o) {
        try {
            delete t[o]
        } catch (e) {
            t[o] = null
        }
    }, te = function(e) {
        return !(e.which && 1 !== e.which)
    }, oe = function(e) {
        var t = e.originalEvent.pointerType;
        return !(t && "touch" !== t && 2 !== t)
    }, ne = function(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }, ae = function(e) {
        var t = e.parents(".mCSB_container");
        return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
    }, ie = function() {
        var e = function() {
            var e = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return "hidden";
            for (var t = 0; t < e.length; t++)
                if (e[t] + "Hidden" in document) return e[t] + "Hidden";
            return null
        }();
        return !!e && document[e]
    }, z.fn[f] = function(e) {
        return m[e] ? m[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void z.error("Method " + e + " does not exist") : m.init.apply(this, arguments)
    }, z[f] = function(e) {
        return m[e] ? m[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void z.error("Method " + e + " does not exist") : m.init.apply(this, arguments)
    }, z[f].defaults = a, window[f] = !0, z(window).bind("load", function() {
        z(n)[f](), z.extend(z.expr[":"], {
            mcsInView: z.expr[":"].mcsInView || function(e) {
                var t, o, n = z(e),
                    a = n.parents(".mCSB_container");
                if (a.length) return t = a.parent(), 0 <= (o = [a[0].offsetTop, a[0].offsetLeft])[0] + ae(n)[0] && o[0] + ae(n)[0] < t.height() - n.outerHeight(!1) && 0 <= o[1] + ae(n)[1] && o[1] + ae(n)[1] < t.width() - n.outerWidth(!1)
            },
            mcsInSight: z.expr[":"].mcsInSight || function(e, t, o) {
                var n, a, i, l, r = z(e),
                    s = r.parents(".mCSB_container"),
                    c = "exact" === o[3] ? [
                        [1, 0],
                        [1, 0]
                    ] : [
                        [.9, .1],
                        [.6, .4]
                    ];
                if (s.length) return n = [r.outerHeight(!1), r.outerWidth(!1)], i = [s[0].offsetTop + ae(r)[0], s[0].offsetLeft + ae(r)[1]], a = [s.parent()[0].offsetHeight, s.parent()[0].offsetWidth], i[0] - a[0] * (l = [n[0] < a[0] ? c[0] : c[1], n[1] < a[1] ? c[0] : c[1]])[0][0] < 0 && 0 <= i[0] + n[0] - a[0] * l[0][1] && i[1] - a[1] * l[1][0] < 0 && 0 <= i[1] + n[1] - a[1] * l[1][1]
            },
            mcsOverflow: z.expr[":"].mcsOverflow || function(e) {
                var t = z(e).data(P);
                if (t) return t.overflowed[0] || t.overflowed[1]
            }
        })
    })
});