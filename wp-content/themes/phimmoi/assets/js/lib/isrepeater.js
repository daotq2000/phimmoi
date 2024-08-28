! function(a) {
    "use strict";
    var b = function(a) {
            return a
        },
        c = function(b) {
            return a.isArray(b)
        },
        d = function(a) {
            return !c(a) && a instanceof Object
        },
        g = function(b, c) {
            return a.inArray(c, b)
        },
        h = function(a, b) {
            return g(a, b) !== -1
        },
        i = function(a, b) {
            for (var c in a) a.hasOwnProperty(c) && b(a[c], c, a)
        },
        j = function(a) {
            return a[a.length - 1]
        },
        k = function(a) {
            return Array.prototype.slice.call(a)
        },
        l = function() {
            var a = {};
            return i(k(arguments), function(b) {
                i(b, function(b, c) {
                    a[c] = b
                })
            }), a
        },
        m = function(a, b) {
            var c = [];
            return i(a, function(a, d, e) {
                c.push(b(a, d, e))
            }), c
        },
        n = function(a, b, c) {
            var d = {};
            return i(a, function(a, e, f) {
                e = c ? c(e, a) : e, d[e] = b(a, e, f)
            }), d
        },
        o = function(a, b, d) {
            return c(a) ? m(a, b) : n(a, b, d)
        },
        p = function(a, b) {
            return o(a, function(a) {
                return a[b]
            })
        },
        q = function(a, b) {
            var d;
            return c(a) ? (d = [], i(a, function(a, c, e) {
                b(a, c, e) && d.push(a)
            })) : (d = {}, i(a, function(a, c, e) {
                b(a, c, e) && (d[c] = a)
            })), d
        },
        r = function(a, b, c) {
            return o(a, function(a, d) {
                return a[b].apply(a, c || [])
            })
        },
        t = function(a) {
            a = a || {};
            var b = {};
            return a.publish = function(a, c) {
                i(b[a], function(a) {
                    a(c)
                })
            }, a.subscribe = function(a, c) {
                b[a] = b[a] || [], b[a].push(c)
            }, a.unsubscribe = function(a) {
                i(b, function(b) {
                    var c = g(b, a);
                    c !== -1 && b.splice(c, 1)
                })
            }, a
        };
    ! function(a) {
        var b = function(a, b) {
                var c = t(),
                    d = a.$;
                return c.getType = function() {
                    throw 'implement me (return type. "text", "radio", etc.)'
                }, c.$ = function(a) {
                    return a ? d.find(a) : d
                }, c.disable = function() {
                    c.$().prop("disabled", !0), c.publish("isEnabled", !1)
                }, c.enable = function() {
                    c.$().prop("disabled", !1), c.publish("isEnabled", !0)
                }, b.equalTo = function(a, b) {
                    return a === b
                }, b.publishChange = function() {
                    var a;
                    return function(d, e) {
                        var f = c.get();
                        b.equalTo(f, a) || c.publish("change", {
                            e: d,
                            domElement: e
                        }), a = f
                    }
                }(), c
            },
            e = function(a, c) {
                var d = b(a, c);
                return d.get = function() {
                    return d.$().val()
                }, d.set = function(a) {
                    d.$().val(a)
                }, d.clear = function() {
                    d.set("")
                }, c.buildSetter = function(a) {
                    return function(b) {
                        a.call(d, b)
                    }
                }, d
            },
            f = function(a, b) {
                a = c(a) ? a : [a], b = c(b) ? b : [b];
                var d = !0;
                return a.length !== b.length ? d = !1 : i(a, function(a) {
                    h(b, a) || (d = !1)
                }), d
            },
            k = function(a) {
                var b = {},
                    c = e(a, b);
                return c.getType = function() {
                    return "button"
                }, c.$().on("change", function(a) {
                    b.publishChange(a, this)
                }), c
            },
            l = function(b) {
                var d = {},
                    g = e(b, d);
                return g.getType = function() {
                    return "checkbox"
                }, g.get = function() {
                    var b = [];
                    return g.$().filter(":checked").each(function() {
                        b.push(a(this).val())
                    }), b
                }, g.set = function(b) {
                    b = c(b) ? b : [b], g.$().each(function() {
                        a(this).prop("checked", !1)
                    }), i(b, function(a) {
                        g.$().filter('[value="' + a + '"]').prop("checked", !0)
                    })
                }, d.equalTo = f, g.$().change(function(a) {
                    d.publishChange(a, this)
                }), g
            },
            m = function(a) {
                var b = {},
                    c = x(a, b);
                return c.getType = function() {
                    return "email"
                }, c
            },
            n = function(c) {
                var d = {},
                    e = b(c, d);
                return e.getType = function() {
                    return "file"
                }, e.get = function() {
                    return j(e.$().val().split("\\"))
                }, e.clear = function() {
                    this.$().each(function() {
                        a(this).wrap("<form>").closest("form").get(0).reset(), a(this).unwrap()
                    })
                }, e.$().change(function(a) {
                    d.publishChange(a, this)
                }), e
            },
            o = function(a) {
                var b = {},
                    c = e(a, b);
                return c.getType = function() {
                    return "hidden"
                }, c.$().change(function(a) {
                    b.publishChange(a, this)
                }), c
            },
            p = function(c) {
                var d = {},
                    e = b(c, d);
                return e.getType = function() {
                    return "file[multiple]"
                }, e.get = function() {
                    var c, a = e.$().get(0).files || [],
                        b = [];
                    for (c = 0; c < (a.length || 0); c += 1) b.push(a[c].name);
                    return b
                }, e.clear = function() {
                    this.$().each(function() {
                        a(this).wrap("<form>").closest("form").get(0).reset(), a(this).unwrap()
                    })
                }, e.$().change(function(a) {
                    d.publishChange(a, this)
                }), e
            },
            q = function(a) {
                var b = {},
                    d = e(a, b);
                return d.getType = function() {
                    return "select[multiple]"
                }, d.get = function() {
                    return d.$().val() || []
                }, d.set = function(a) {
                    d.$().val("" === a ? [] : c(a) ? a : [a])
                }, b.equalTo = f, d.$().change(function(a) {
                    b.publishChange(a, this)
                }), d
            },
            s = function(a) {
                var b = {},
                    c = x(a, b);
                return c.getType = function() {
                    return "password"
                }, c
            },
            u = function(b) {
                var c = {},
                    d = e(b, c);
                return d.getType = function() {
                    return "radio"
                }, d.get = function() {
                    return d.$().filter(":checked").val() || null
                }, d.set = function(b) {
                    b ? d.$().filter('[value="' + b + '"]').prop("checked", !0) : d.$().each(function() {
                        a(this).prop("checked", !1)
                    })
                }, d.$().change(function(a) {
                    c.publishChange(a, this)
                }), d
            },
            v = function(a) {
                var b = {},
                    c = e(a, b);
                return c.getType = function() {
                    return "range"
                }, c.$().change(function(a) {
                    b.publishChange(a, this)
                }), c
            },
            w = function(a) {
                var b = {},
                    c = e(a, b);
                return c.getType = function() {
                    return "select"
                }, c.$().change(function(a) {
                    b.publishChange(a, this)
                }), c
            },
            x = function(a) {
                var b = {},
                    c = e(a, b);
                return c.getType = function() {
                    return "text"
                }, c.$().on("change keyup keydown", function(a) {
                    b.publishChange(a, this)
                }), c
            },
            y = function(a) {
                var b = {},
                    c = e(a, b);
                return c.getType = function() {
                    return "textarea"
                }, c.$().on("change keyup keydown", function(a) {
                    b.publishChange(a, this)
                }), c
            },
            z = function(a) {
                var b = {},
                    c = x(a, b);
                return c.getType = function() {
                    return "url"
                }, c
            },
            A = function(b) {
                var c = {},
                    e = b.$,
                    f = b.constructorOverride || {
                        button: k,
                        text: x,
                        url: z,
                        email: m,
                        password: s,
                        range: v,
                        textarea: y,
                        select: w,
                        "select[multiple]": q,
                        radio: u,
                        checkbox: l,
                        file: n,
                        "file[multiple]": p,
                        hidden: o
                    },
                    h = function(b, g) {
                        var h = d(g) ? g : e.find(g);
                        h.each(function() {
                            var d = a(this).attr("name");
                            c[d] = f[b]({
                                $: a(this)
                            })
                        })
                    },
                    j = function(b, h) {
                        var j = [],
                            k = d(h) ? h : e.find(h);
                        d(h) ? c[k.attr("name")] = f[b]({
                            $: k
                        }) : (k.each(function() {
                            g(j, a(this).attr("name")) === -1 && j.push(a(this).attr("name"))
                        }), i(j, function(a) {
                            c[a] = f[b]({
                                $: e.find('input[name="' + a + '"]')
                            })
                        }))
                    };
                return e.is("input, select, textarea") ? e.is('input[type="button"], button, input[type="submit"]') ? h("button", e) : e.is("textarea") ? h("textarea", e) : e.is('input[type="text"]') || e.is("input") && !e.attr("type") ? h("text", e) : e.is('input[type="password"]') ? h("password", e) : e.is('input[type="email"]') ? h("email", e) : e.is('input[type="url"]') ? h("url", e) : e.is('input[type="range"]') ? h("range", e) : e.is("select") ? e.is("[multiple]") ? h("select[multiple]", e) : h("select", e) : e.is('input[type="file"]') ? e.is("[multiple]") ? h("file[multiple]", e) : h("file", e) : e.is('input[type="hidden"]') ? h("hidden", e) : e.is('input[type="radio"]') ? j("radio", e) : e.is('input[type="checkbox"]') ? j("checkbox", e) : h("text", e) : (h("button", 'input[type="button"], button, input[type="submit"]'), h("text", 'input[type="text"]'), h("password", 'input[type="password"]'), h("email", 'input[type="email"]'), h("url", 'input[type="url"]'), h("range", 'input[type="range"]'), h("textarea", "textarea"), h("select", "select:not([multiple])"), h("select[multiple]", "select[multiple]"), h("file", 'input[type="file"]:not([multiple])'), h("file[multiple]", 'input[type="file"][multiple]'), h("hidden", 'input[type="hidden"]'), j("radio", 'input[type="radio"]'), j("checkbox", 'input[type="checkbox"]')), c
            };
        a.fn.inputVal = function(b) {
            var c = a(this),
                d = A({
                    $: c
                });
            return c.is("input, textarea, select") ? "undefined" == typeof b ? d[c.attr("name")].get() : (d[c.attr("name")].set(b), c) : "undefined" == typeof b ? r(d, "get") : (i(b, function(a, b) {
                d[b].set(a)
            }), c)
        }, a.fn.inputOnChange = function(b) {
            var c = a(this),
                d = A({
                    $: c
                });
            return i(d, function(a) {
                a.subscribe("change", function(a) {
                    b.call(a.domElement, a.e)
                })
            }), c
        }, a.fn.inputDisable = function() {
            var b = a(this);
            return r(A({
                $: b
            }), "disable"), b
        }, a.fn.inputEnable = function() {
            var b = a(this);
            return r(A({
                $: b
            }), "enable"), b
        }, a.fn.inputClear = function() {
            var b = a(this);
            return r(A({
                $: b
            }), "clear"), b
        }
    }(jQuery), a.fn.repeaterVal = function() {
        var b = function(a) {
                var b = [];
                return i(a, function(a, c) {
                    var d = [];
                    "undefined" !== c && (d.push(c.match(/^[^\[]*/)[0]), d = d.concat(o(c.match(/\[[^\]]*\]/g), function(a) {
                        return a.replace(/[\[\]]/g, "")
                    })), b.push({
                        val: a,
                        key: d
                    }))
                }), b
            },
            c = function(a) {
                if (1 === a.length && (0 === a[0].key.length || 1 === a[0].key.length && !a[0].key[0])) return a[0].val;
                i(a, function(a) {
                    a.head = a.key.shift()
                });
                var d, b = function() {
                    var b = {};
                    return i(a, function(a) {
                        b[a.head] || (b[a.head] = []), b[a.head].push(a)
                    }), b
                }();
                return /^[0-9]+$/.test(a[0].head) ? (d = [], i(b, function(a) {
                    d.push(c(a))
                })) : (d = {}, i(b, function(a, b) {
                    d[b] = c(a)
                })), d
            };
        return c(b(a(this).inputVal()))
    }, a.fn.repeater = function(c) {
        c = c || {};
        var d;
        return a(this).each(function() {
            var e = a(this),
                f = c.show || function() {
                    a(this).show()
                },
                g = c.hide || function(a) {
                    a()
                },
                h = e.find("[data-repeater-list]").first(),
                k = function(b, c) {
                    return b.filter(function() {
                        return !c || 0 === a(this).closest(p(c, "selector").join(",")).length
                    })
                },
                m = function() {
                    return k(h.find("[data-repeater-item]"), c.repeaters)
                },
                n = h.find("[data-repeater-item]").first().clone().hide(),
                r = k(k(a(this).find("[data-repeater-item]"), c.repeaters).first().find("[data-repeater-delete]"), c.repeaters);
            c.isFirstItemUndeletable && r && r.remove();
            var s = function() {
                    var a = h.data("repeater-list");
                    return c.$parent ? c.$parent.data("item-name") + "[" + a + "]" : a
                },
                t = function(b) {
                    c.repeaters && b.each(function() {
                        var b = a(this);
                        i(c.repeaters, function(a) {
                            b.find(a.selector).repeater(l(a, {
                                $parent: b
                            }))
                        })
                    })
                },
                u = function(a, b, c) {
                    a && i(a, function(a) {
                        c.call(b.find(a.selector)[0], a)
                    })
                },
                v = function(b, c, d) {
                    b.each(function(b) {
                        var e = a(this);
                        e.data("item-name", c + "[" + b + "]"), k(e.find("[name]"), d).each(function() {
                            var f = a(this),
                                g = f.attr("name").match(/\[[^\]]+\]/g),
                                h = g ? j(g).replace(/\[|\]/g, "") : f.attr("name"),
                                i = c + "[" + b + "][" + h + "]" + (f.is(":checkbox") || f.attr("multiple") ? "[]" : "");
                            f.attr("name", i), u(d, e, function(d) {
                                var e = a(this);
                                v(k(e.find("[data-repeater-item]"), d.repeaters || []), c + "[" + b + "][" + e.find("[data-repeater-list]").first().data("repeater-list") + "]", d.repeaters)
                            })
                        })
                    }), h.find("input[name][checked]").removeAttr("checked").prop("checked", !0)
                };
            v(m(), s(), c.repeaters), t(m()), c.initEmpty && m().remove(), c.ready && c.ready(function() {
                v(m(), s(), c.repeaters)
            });
            var w = function() {
                    var d = function(e, f, g) {
                        if (f || c.defaultValues) {
                            var h = {};
                            k(e.find("[name]"), g).each(function() {
                                var b = a(this).attr("name").match(/\[([^\]]*)(\]|\]\[\])$/)[1];
                                h[b] = a(this).attr("name")
                            }), e.inputVal(o(q(f || c.defaultValues, function(a, b) {
                                return h[b]
                            }), b, function(a) {
                                return h[a]
                            }))
                        }
                        u(g, e, function(b) {
                            var c = a(this);
                            k(c.find("[data-repeater-item]"), b.repeaters).each(function() {
                                var e = c.find("[data-repeater-list]").data("repeater-list");
                                if (f && f[e]) {
                                    var g = a(this).clone();
                                    c.find("[data-repeater-item]").remove(), i(f[e], function(a) {
                                        var e = g.clone();
                                        d(e, a, b.repeaters || []), c.find("[data-repeater-list]").append(e)
                                    })
                                } else d(a(this), b.defaultValues, b.repeaters || [])
                            })
                        })
                    };
                    return function(b, e) {
                        h.append(b), v(m(), s(), c.repeaters), b.find("[name]").each(function() {
                            a(this).inputClear()
                        }), d(b, e || c.defaultValues, c.repeaters)
                    }
                }(),
                x = function(a) {
                    var b = n.clone();
                    w(b, a), c.repeaters && t(b), f.call(b.get(0))
                };
            d = function(a) {
                m().remove(), i(a, x)
            }, k(e.find("[data-repeater-create]"), c.repeaters).click(function() {
                x()
            }), h.on("click", "[data-repeater-delete]", function() {
                var b = a(this).closest("[data-repeater-item]").get(0);
                g.call(b, function() {
                    a(b).remove(), v(m(), s(), c.repeaters)
                })
            })
        }), this.setList = d, this
    }
}(jQuery);