(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [205], {
        "2+Cg": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Clock", (function() {
                return f
            }));
            var c = n("nKUr"),
                r = n("Se/U"),
                a = n("ufqH"),
                i = n("q1tI"),
                o = n("vOnD"),
                u = n("RcWE");
            const s = o.d.span.withConfig({
                componentId: "sc-1idsap7-0"
            })(["display:inline-block;height:", ";cursor:default;color:", ";", ";", ";"], Object(a.f)(20), (({
                theme: t
            }) => t.text.muted), (({
                theme: t
            }) => "cozy" === t.appearance.display && Object(o.c)(["margin-left:", ";font-size:", ";font-weight:500;line-height:", ";vertical-align:baseline;"], Object(a.f)(4), Object(a.f)(12), Object(a.f)(22))), (({
                theme: t
            }) => "compact" === t.appearance.display && Object(o.c)(["width:", ";margin-right:", ";font-size:", ";line-height:", ";text-align:right;text-indent:0;"], Object(a.f)(48), Object(a.f)(8), Object(a.f)(11), Object(a.f)(22))));

            function f(t) {
                let {
                    timestamp: e
                } = t;
                e && !Object(r.a)(e) && (e = void 0);
                const n = Object(o.e)(),
                    a = Object(i.useCallback)(((t = new Date) => "compact" === n.appearance.display ? t.toLocaleString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: !0
                    }) : Object(u.a)(t)), [n.appearance.display]),
                    {
                        0: f,
                        1: l
                    } = Object(i.useState)((() => a(e)));
                return Object(i.useEffect)((() => {
                    if (!e) {
                        const t = setInterval((() => l(a())), 1e3);
                        return () => clearInterval(t)
                    }
                    l(a(e))
                }), [a, e]), Object(c.jsx)(s, {
                    children: f
                })
            }
        },
        RcWE: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            var c = n("Se/U"),
                r = n("TpeJ"),
                a = n("cHAT"),
                i = n("cnyc");
            const o = (t, e) => {
                if (!Object(c.a)(t)) return "Invalid date";
                const n = String(Object(r.a)(t)).padStart(2, "0"),
                    o = String(Object(a.a)(t) + 1).padStart(2, "0"),
                    u = Object(i.a)(t),
                    s = t.toLocaleString("en-US", {
                        hour: "2-digit",
                        minute: "numeric",
                        hour12: !0
                    });
                switch (((t, e) => {
                    const n = (new Date(t).setHours(0, 0, 0, 0) - new Date(null !== e && void 0 !== e ? e : Date.now()).setHours(0, 0, 0, 0)) / 864e5;
                    return n < -1 ? "full" : n < 0 ? "yesterday" : n < 1 ? "today" : n < 2 ? "tomorrow" : "full"
                })(t, e)) {
                    case "yesterday":
                        return `Yesterday at ${s}`;
                    case "today":
                        return `Today at ${s}`;
                    case "tomorrow":
                        return `Tomorrow at ${s}`;
                    default:
                        return `${n}/${o}/${u}`
                }
            }
        },
        TpeJ: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            }));
            var c = n("/Tr7"),
                r = n("jIYg");

            function a(t) {
                Object(r.a)(1, arguments);
                var e = Object(c.a)(t),
                    n = e.getDate();
                return n
            }
        },
        cHAT: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            }));
            var c = n("/Tr7"),
                r = n("jIYg");

            function a(t) {
                Object(r.a)(1, arguments);
                var e = Object(c.a)(t),
                    n = e.getMonth();
                return n
            }
        },
        cnyc: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            }));
            var c = n("/Tr7"),
                r = n("jIYg");

            function a(t) {
                Object(r.a)(1, arguments);
                var e = Object(c.a)(t),
                    n = e.getFullYear();
                return n
            }
        }
    }
]);
//# sourceMappingURL=205.8233156ca32937bfb134.js.map