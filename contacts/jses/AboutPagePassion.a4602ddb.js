import {_ as e} from "./entry.89c17163.js";
import {G as t, L as o, N as s, R as i, a0 as p, a1 as c} from "./swiper-vue.ad6b35c4.js";
const n = a => (p("data-v-a31ec05d"),
a = a(),
c(),
a)
  , _ = ["id"]
  , l = n( () => s("div", {
    class: "about-page-passion__wrapper-ellipse"
}, [s("div", {
    class: "about-page-passion__ellipse-1"
}), s("div", {
    class: "about-page-passion__ellipse-2"
}), s("div", {
    class: "about-page-passion__ellipse-3"
})], -1))
  , d = {
    class: "about-page-passion__text"
}
  , r = {
    __name: "AboutPagePassion",
    props: {
        title: {
            type: String,
            default: null
        },
        anchorLink: {
            type: String,
            default: null
        }
    },
    setup(a) {
        return (u, g) => (t(),
        o("div", {
            class: "about-page-passion",
            id: a.anchorLink && a.anchorLink.toLowerCase()
        }, [l, s("p", d, i(a.title), 1)], 8, _))
    }
}
  , v = e(r, [["__scopeId", "data-v-a31ec05d"]]);
export {v as default};
