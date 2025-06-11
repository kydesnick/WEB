import {r as f, t as g, v as u, S as l, O as h, w as y, T as _, C as p, u as d, e as v} from "./entry.89c17163.js";
import {a as c, _ as S, w as b, j as w, ab as C, ac as T, g as P, f as R, e as x} from "./swiper-vue.ad6b35c4.js";
function M(s, t={}) {
    const e = t.head || f();
    if (e)
        return e.ssr ? e.push(s, t) : U(e, s, t)
}
function U(s, t, e={}) {
    const n = c(!1)
      , o = c({});
    S( () => {
        o.value = n.value ? {} : g(t)
    }
    );
    const i = s.push(o.value, e);
    return b(o, a => {
        i.patch(a)
    }
    ),
    P() && (w( () => {
        i.dispose()
    }
    ),
    C( () => {
        n.value = !0
    }
    ),
    T( () => {
        n.value = !1
    }
    )),
    i
}
u.registerPlugin(l, h, y, _, p);
const I = u
  , j = l
  , O = p
  , A = {
    __name: "CommonAnchor",
    setup(s) {
        const t = d();
        function e(n) {
            const o = document.querySelector(n);
            if (o) {
                const r = document.body.getBoundingClientRect().top
                  , m = o.getBoundingClientRect().top - r - 160;
                window.scrollTo({
                    top: m,
                    behavior: "smooth"
                })
            }
        }
        return R( () => {
            t.hash && setTimeout( () => {
                e(t.hash)
            }
            , 500)
        }
        ),
        (n, o) => null
    }
}
  , W = A
  , H = {
    __name: "CommonSeoMeta",
    props: {
        title: {
            type: String,
            default: ""
        },
        h1: {
            type: String,
            default: ""
        },
        titleWithTemplate: {
            type: String,
            default: ""
        },
        description: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: "website"
        },
        image: {
            type: String,
            default: ""
        },
        canonical: {
            type: String,
            default: null
        },
        script: {
            type: Array,
            default: () => []
        }
    },
    setup(s) {
        const t = s
          , e = v().public.baseUrl
          , n = d()
          , o = x( () => t.title ? t.title : "Mundfish")
          , i = c([{
            hid: "title",
            name: "title",
            content: t.title ? t.title : "Mundfish",
            itemprop: "headline"
        }, {
            hid: "description",
            name: "description",
            content: t.description ? t.description : "https://mundfish.com",
            itemprop: "description"
        }, {
            hid: "og:title",
            property: "og:title",
            content: t.title ? t.title : "Mundfish"
        }, {
            hid: "og:description",
            property: "og:description",
            content: t.description ? t.description : "https://mundfish.com"
        }, {
            hid: "og:image",
            property: "og:image",
            content: t.image ? e + t.image : "/images/video-poster.png"
        }, {
            hid: "keywords",
            name: "keywords",
            content: "",
            itemprop: "keywords"
        }, {
            hid: "og:url",
            property: "og:url",
            content: "https://mundfish.com" + n.fullPath
        }, {
            hid: "og:type",
            property: "og:type",
            content: t.type
        }]);
        return M({
            title: o,
            meta: i
        }),
        (r, a) => null
    }
}
  , q = H;
export {q as _, W as a, O as b, I as c, j as d, M as u};
