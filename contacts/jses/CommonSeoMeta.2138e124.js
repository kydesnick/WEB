import {r as f, t as g, v as l, S as u, O as h, w as _, T as y, C as p, u as d, e as v} from "./entry.4632cbf3.js";
import {a as r, _ as S, w as b, j as w, ab as C, ac as T, g as P, f as R, e as k, G as x, L as B} from "./swiper-vue.ad6b35c4.js";
function M(s, t={}) {
    const e = t.head || f();
    if (e)
        return e.ssr ? e.push(s, t) : U(e, s, t)
}
function U(s, t, e={}) {
    const n = r(!1)
      , o = r({});
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
l.registerPlugin(u, h, _, y, p);
const O = l
  , W = u
  , q = p
  , A = {
    __name: "CommonAnchor",
    setup(s) {
        const t = d();
        function e(n) {
            const o = document.querySelector(n);
            if (o) {
                const c = document.body.getBoundingClientRect().top
                  , m = o.getBoundingClientRect().top - c - 160;
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
  , D = A
  , E = {
    content: "seo block"
}
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
          , o = k( () => t.title ? t.title : "Mundfish")
          , i = r([{
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
        (c, a) => (x(),
        B("meta", E))
    }
}
  , L = H;
export {L as _, D as a, q as b, O as c, W as d, M as u};
