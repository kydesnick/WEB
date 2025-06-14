import {_ as i, h as l} from "./entry.89c17163.js";
import {a as g, G as n, L as _, Q as u, R as c, H as r, U as o, u as s, V as f} from "./swiper-vue.ad6b35c4.js";
const d = {
    __name: "UISorting",
    props: {
        icon: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: null
        }
    },
    setup(t) {
        const e = g(!1);
        return (m, a) => {
            const p = l;
            return n(),
            _("span", {
                class: o(["ui-sorting", {
                    "ui-sorting_active": s(e)
                }]),
                onClick: a[0] || (a[0] = v => e.value = !s(e))
            }, [u(c(t.title) + " ", 1), t.icon ? (n(),
            r(p, {
                key: 0,
                class: o({
                    "ui-sorting_rotate": s(e)
                }),
                name: t.icon
            }, null, 8, ["class", "name"])) : f("", !0)], 2)
        }
    }
}
  , I = i(d, [["__scopeId", "data-v-6e59404f"]]);
const y = {
    __name: "UITag",
    props: {
        icon: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: null
        },
        active: {
            type: Boolean,
            default: !1
        },
        type: {
            type: String,
            default: "default"
        },
        size: {
            type: String,
            default: "small"
        }
    },
    setup(t) {
        return (e, m) => {
            const a = l;
            return n(),
            _("span", {
                class: o(["ui-tag", [{
                    "ui-tag_active": t.active
                }, `ui-tag_${t.size}`]])
            }, [u(c(t.type === "default" ? "#" : "") + c(t.title) + " ", 1), t.active ? (n(),
            r(a, {
                key: 0,
                class: "ui-tag__icon",
                name: "close"
            })) : f("", !0)], 2)
        }
    }
}
  , k = i(y, [["__scopeId", "data-v-3662ecff"]]);
export {I as _, k as a};