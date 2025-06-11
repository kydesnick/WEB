import {_ as u, e as d, P as m, h as p} from "./entry.89c17163.js";
import {_ as g} from "./CommonTitle.c7e438c6.js";
import {_ as h} from "./CommonMicroserviceImage.1a0de30a.js";
import {e as f, G as e, L as o, a5 as y, u as v, V as i, N as n, U as k, R as S, J as s, H as b, a0 as x, a1 as w} from "./swiper-vue.ad6b35c4.js";
const I = t => (x("data-v-919e5fa2"),
t = t(),
w(),
t)
  , z = {
    class: "section-title"
}
  , B = {
    class: "container"
}
  , C = {
    class: "section-title__top"
}
  , T = {
    key: 0,
    class: "section-title__wrapper-caption"
}
  , G = {
    key: 0,
    class: "section-title__hot"
}
  , N = I( () => n("p", {
    class: "section-title__hot-text"
}, "hot", -1))
  , R = {
    key: 1,
    class: "section-title__full-image"
}
  , V = ["innerHTML"]
  , H = {
    __name: "SectionTitle",
    props: {
        title: {
            type: String,
            default: null
        },
        caption: {
            type: String,
            default: null
        },
        image: {
            type: String,
            default: null
        },
        hot: {
            type: Boolean,
            default: !1
        },
        description: {
            type: String,
            default: null
        },
        showGradient: {
            type: Boolean,
            default: !1
        }
    },
    setup(t) {
        d().public.baseUrl;
        const c = f( () => ({
            backgroundImage: 'url("/images/test.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            filter: "blur(100px)",
            width: "50%",
            height: "60%",
            position: "absolute",
            top: "35%",
            right: "25%",
            opacity: ".7",
            transform: "rotate(350deg)",
            zIndex: "-1"
        }));
        return (a, L) => {
            const l = p
              , _ = g
              , r = h;
            return e(),
            o("section", z, [t.showGradient ? (e(),
            o("div", {
                key: 0,
                style: y(v(c))
            }, null, 4)) : i("", !0), n("div", B, [n("div", C, [t.caption ? (e(),
            o("div", T, [n("p", {
                class: k(["section-title__caption", {
                    "section-title__caption__zh": (a._.provides[m] || a.$route).params.locale === "zh"
                }])
            }, S(t.caption), 3), t.hot ? (e(),
            o("div", G, [s(l, {
                class: "section-title__hot-icon",
                name: "hot"
            }), N])) : i("", !0)])) : i("", !0), t.title ? (e(),
            b(_, {
                key: 1,
                title: t.title,
                class: "section-title__title"
            }, null, 8, ["title"])) : i("", !0)])]), t.image ? (e(),
            o("div", R, [s(r, {
                class: "section-title__full-image-item",
                "image-url": t.image
            }, null, 8, ["image-url"])])) : i("", !0), t.description ? (e(),
            o("div", {
                key: 2,
                class: "container section-title__sub-description wysiwyg-contaner",
                innerHTML: t.description
            }, null, 8, V)) : i("", !0)])
        }
    }
}
  , D = u(H, [["__scopeId", "data-v-919e5fa2"]]);
export {D as _};
