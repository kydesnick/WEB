import {_ as i, e as r} from "./entry.89c17163.js";
import {G as t, L as o, N as s, R as n, V as a, u as d, Q as _} from "./swiper-vue.ad6b35c4.js";
const u = ["id"]
  , m = {
    class: "geo-block container"
}
  , g = {
    class: "geo-block__left"
}
  , p = {
    key: 0,
    class: "geo-block__title"
}
  , k = ["innerHTML"]
  , y = {
    key: 0,
    class: "geo-block-wrapper__video"
}
  , h = {
    class: "geo-block-wrapper__video-inner geo-block-wrapper__image",
    autoplay: "",
    loop: "",
    muted: "",
    playsinline: ""
}
  , b = ["src"]
  , f = "Ваш браузер не поддерживает видео тег."
  , v = {
    __name: "GeoBlock",
    props: {
        title: {
            type: String,
            default: null
        },
        htmlContent: {
            type: String,
            default: null
        },
        mediaImages: {
            type: Array,
            default: () => []
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
    setup(e) {
        const c = r().public.baseUrl
          , l = /<p\b[^<>\/]*>\s*(<img\b[^<>]*>)\s*<\/p>/g;
        return (w, L) => (t(),
        o("section", {
            class: "geo-block-wrapper",
            id: e.anchorLink && e.anchorLink.toLowerCase()
        }, [s("div", m, [s("div", g, [e.title ? (t(),
        o("h2", p, n(e.title), 1)) : a("", !0)]), e.htmlContent ? (t(),
        o("div", {
            key: 0,
            class: "geo-block__content wysiwyg-contaner",
            innerHTML: e.htmlContent.replace(l, "$1")
        }, null, 8, k)) : a("", !0)]), e.mediaImages[0] ? (t(),
        o("div", y, [s("video", h, [s("source", {
            src: d(c) + e.mediaImages[0].files.media,
            type: "video/webm"
        }, null, 8, b), _(" " + n(f))])])) : a("", !0)], 8, u))
    }
}
  , C = i(v, [["__scopeId", "data-v-5970509e"]]);
export {C as default};
