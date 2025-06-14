import {_ as V, a as z} from "./UITag.c82f8992.js";
import {_ as N, h as D, i as E, n as F, g as G, o as H, s as M, f as B} from "./entry.89c17163.js";
import {e as b, G as s, L as l, N as _, R as v, V as i, u as t, O as g, P as T, J as j, I as P, U as q, a0 as K, a1 as Q, a as O, w as W, H as I} from "./swiper-vue.ad6b35c4.js";
const X = o => (K("data-v-59841d4d"),
o = o(),
Q(),
o)
  , Y = {
    key: 0,
    class: "job-list"
}
  , Z = {
    class: "job-list__top"
}
  , tt = {
    key: 0,
    class: "job-list__title"
}
  , et = {
    class: "job-list__count"
}
  , st = {
    class: "job-list__content"
}
  , ot = {
    key: 0
}
  , lt = {
    key: 0,
    class: "job-list__wrapper-icon"
}
  , it = {
    style: {
        width: "11px",
        height: "15px"
    }
}
  , nt = X( () => _("p", {
    class: "job-list__item-icon-text"
}, "hot", -1))
  , at = {
    class: "job-list__item-title"
}
  , ct = {
    class: "job-list__item-hashtags"
}
  , rt = {
    class: "job-list__item-button"
}
  , _t = {
    __name: "JobList",
    props: {
        title: {
            type: String,
            default: null
        },
        list: {
            type: Array,
            default: () => []
        },
        hot: {
            type: Boolean,
            default: !1
        },
        properties: {
            type: Object,
            default: () => ({})
        },
        subtitle: {
            type: Object,
            default: () => ({})
        }
    },
    setup(o) {
        const n = o
          , m = b( () => {
            if (n.list && n.list.length) {
                const h = n.list.filter(y => y.isActive);
                return n.list.length > 10 ? h.length : `0${h.length}`
            }
            return []
        }
        );
        return (h, y) => {
            const S = D
              , k = E
              , a = F;
            return o.list && o.list.length ? (s(),
            l("div", Y, [_("div", Z, [o.subtitle && o.subtitle.text ? (s(),
            l("h4", tt, v(o.subtitle.text), 1)) : i("", !0), _("p", et, v(t(m)), 1)]), _("ul", st, [(s(!0),
            l(g, null, T(o.list, c => (s(),
            l(g, {
                key: c
            }, [c.isActive ? (s(),
            l("li", ot, [j(a, {
                to: `/careers/${c.slug}`,
                class: q(["job-list__item", {
                    "job-list__item-hot": o.hot
                }])
            }, {
                default: P( () => [_("div", null, [o.hot ? (s(),
                l("div", lt, [_("div", it, [j(S, {
                    class: "job-list__item-icon",
                    name: "hot"
                })]), nt])) : i("", !0), _("p", at, v(c.title), 1)]), _("div", ct, [(s(!0),
                l(g, null, T(c.tags, (p, f) => (s(),
                l("p", {
                    key: p + f,
                    class: "job-list__item-hashtag"
                }, " #" + v(p.title), 1))), 128))]), _("div", rt, [j(k, {
                    modifier: "white",
                    text: c.readMore,
                    path: `/careers/${c.slug}`,
                    tag: "link"
                }, null, 8, ["text", "path"])])]),
                _: 2
            }, 1032, ["to", "class"])])) : i("", !0)], 64))), 128))])])) : i("", !0)
        }
    }
}
  , ut = N(_t, [["__scopeId", "data-v-59841d4d"]]);
const dt = ["id"]
  , pt = {
    key: 0,
    class: "job__top"
}
  , ht = {
    class: "job__top-title"
}
  , ft = {
    class: "job__top-title__text job__title"
}
  , bt = {
    key: 0,
    class: "job__top-filters"
}
  , vt = {
    key: 0,
    class: "job__top-filters-list"
}
  , gt = {
    key: 1,
    class: "job__top-filters-list"
}
  , jt = {
    key: 1,
    class: "job__wrapper-list"
}
  , mt = {
    __name: "JobComponent",
    props: {
        title: {
            type: String,
            default: null
        },
        properties: {
            type: Object,
            default: () => ({})
        },
        anchorLink: {
            type: String,
            default: null
        }
    },
    setup(o) {
        const n = o
          , m = G()
          , h = H()
          , {hotJobOffer: y, defaultJobOffer: S, soertingByTags: k} = M(h)
          , a = O([])
          , c = O(!1)
          , p = b( () => u.value && u.value.length ? u.value.filter(e => e.jobOfferTagType === "Region") : [])
          , f = b( () => u.value && u.value.length ? u.value.filter(e => e.jobOfferTagType === "Specialization") : [])
          , $ = b( () => r.value && r.value.length ? n.properties["from-route"] ? r.value.filter(e => e.promoted && e.isActive && !n.properties["job-offers"].includes(e.slug)) : r.value.filter(e => e.promoted && e.isActive && n.properties["job-offers"].includes(e.slug)) : [])
          , J = b( () => r.value && r.value.length ? n.properties["from-route"] ? r.value.filter(e => !e.promoted && e.isActive && !n.properties["job-offers"].includes(e.slug)) : r.value.filter(e => !e.promoted && e.isActive && n.properties["job-offers"].includes(e.slug)) : []);
        let C = null;
        const L = e => {
            a.value.includes(e) ? a.value = a.value.filter(x => x !== e) : a.value = a.value.concat(e)
        }
          , {data: r, refresh: R} = B("job-arr-data", () => m.fetchJobs(a.value))
          , {data: u} = B("job-tags", () => m.fetchJobTags());
        return W( () => a.value, () => {
            C && clearTimeout(C),
            C = setTimeout( () => {
                R()
            }
            , 500)
        }
        ),
        (e, x) => {
            const U = V
              , w = z
              , A = ut;
            return s(),
            l("section", {
                class: "container job",
                id: o.anchorLink && o.anchorLink.toLowerCase()
            }, [t(r) ? (s(),
            l("div", pt, [_("div", ht, [_("h2", ft, v(o.title), 1), t(u) && t(u).length && t(k) ? (s(),
            I(U, {
                key: 0,
                class: "job__top-title__sorting",
                title: t(k).text,
                icon: "arrow",
                onClick: x[0] || (x[0] = d => c.value = !t(c))
            }, null, 8, ["title"])) : i("", !0)]), t(c) && t(u) && t(u).length ? (s(),
            l("div", bt, [t(p) && t(p).length ? (s(),
            l("ul", vt, [(s(!0),
            l(g, null, T(t(p), d => (s(),
            l("li", {
                class: "job__top-filters-list-item",
                key: d.id
            }, [j(w, {
                icon: "close",
                title: d.title,
                active: t(a).includes(d.slug),
                onClick: () => L(d.slug)
            }, null, 8, ["title", "active", "onClick"])]))), 128))])) : i("", !0), t(f) && t(f).length ? (s(),
            l("ul", gt, [(s(!0),
            l(g, null, T(t(f), d => (s(),
            l("li", {
                class: "job__top-filters-list-item",
                key: d.id
            }, [j(w, {
                icon: "close",
                title: d.title,
                active: t(a).includes(d.slug),
                onClick: () => L(d.slug)
            }, null, 8, ["title", "active", "onClick"])]))), 128))])) : i("", !0)])) : i("", !0)])) : i("", !0), t(r) && t(r).length ? (s(),
            l("div", jt, [t($) && t($).length ? (s(),
            I(A, {
                key: 0,
                list: t($),
                subtitle: t(y),
                hot: ""
            }, null, 8, ["list", "subtitle"])) : i("", !0), t(J) && t(J).length ? (s(),
            I(A, {
                key: 1,
                list: t(J),
                subtitle: t(S)
            }, null, 8, ["list", "subtitle"])) : i("", !0)])) : i("", !0)], 8, dt)
        }
    }
}
  , Tt = N(mt, [["__scopeId", "data-v-ad2aa087"]]);
export {Tt as default};
