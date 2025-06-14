import {_ as b, e as E, d as T} from "./entry.89c17163.js";
import {_ as A} from "./CommonMicroserviceImage.1a0de30a.js";
import {a as _, e as U, G as a, L as n, O as g, P as f, U as p, J as h, u as l, I as V, H as w, V as I, T as B, E as P} from "./swiper-vue.ad6b35c4.js";
const N = P( () => T( () => import("./CommonModalSwiper.47ebc7dc.js"), ["./CommonModalSwiper.47ebc7dc.js", "./entry.89c17163.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./entry.3ff58f60.css", "./CommonMicroserviceImage.1a0de30a.js", "./UiButtonSquare.229cbf53.js", "./UiButtonSquare.26f98698.css", "./CommonModalSwiper.53095d8e.css"], import.meta.url).then(e => e.default || e))
  , O = ["id"]
  , R = {
    key: 0,
    class: "common-image-tetris"
}
  , $ = ["onClick"]
  , z = {
    __name: "CommonImageTetris",
    props: {
        mediaImages: {
            type: Array,
            default: () => []
        },
        anchorLink: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: ""
        }
    },
    setup(e) {
        const C = e;
        E().public.baseUrl;
        const c = _(!1)
          , r = _({
            mediaImages: [],
            index: 0
        })
          , k = (t, s) => {
            const m = [];
            for (let o = 0; o < t.length; o += s)
                m.push(t.slice(o, Math.min(o + s, t.length)));
            return m
        }
          , v = U( () => k(C.mediaImages, 3))
          , y = (t, s) => t === 3 ? s === 0 ? "large-image" : "" : t === 2 ? "" : "large-image"
          , L = t => {
            c.value = !0,
            r.value = t,
            document.documentElement.classList.add("no-scroll")
        }
          , x = () => {
            c.value = !1,
            document.documentElement.classList.remove("no-scroll")
        }
        ;
        return (t, s) => {
            const m = A
              , o = N;
            return a(),
            n("section", {
                class: "container",
                id: e.anchorLink && e.anchorLink.toLowerCase()
            }, [e.mediaImages && e.mediaImages.length ? (a(),
            n("div", R, [(a(!0),
            n(g, null, f(l(v), (d, u) => (a(),
            n("div", {
                key: u,
                class: p(["common-image-tetris__group", `common-image-tetris__group-${d.length}`])
            }, [(a(!0),
            n(g, null, f(d, (M, i) => (a(),
            n("div", {
                class: p(["common-image-tetris__group-image", y(d.length, i)]),
                key: i,
                onClick: () => L({
                    mediaImages: e.mediaImages,
                    index: u * 3 + i
                })
            }, [h(m, {
                imageUrl: M.files.media,
                alt: `Image ${u * 3 + i + 1}`
            }, null, 8, ["imageUrl", "alt"])], 10, $))), 128))], 2))), 128)), h(B, {
                name: "fade"
            }, {
                default: V( () => [l(c) ? (a(),
                w(o, {
                    key: 0,
                    class: "common-image-tetris__modal",
                    mediaImages: l(r).mediaImages,
                    index: l(r).index,
                    onClose: x
                }, null, 8, ["mediaImages", "index"])) : I("", !0)]),
                _: 1
            })])) : I("", !0)], 8, O)
        }
    }
}
  , H = b(z, [["__scopeId", "data-v-f0fab2b1"]]);
export {H as default};
