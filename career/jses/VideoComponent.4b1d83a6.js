import {_ as a, e as i} from "./entry.89c17163.js";
import {G as _, L as d, N as e, u as c, R as r, aa as s} from "./swiper-vue.ad6b35c4.js";
const p = "" + globalThis.__publicAssetsURL("images/video-poster-new.png");
const l = {
    class: "video-component"
}
  , m = {
    class: "video-component__inner"
}
  , u = ["src"]
  , v = {
    class: "container video-component__content"
}
  , f = {
    class: "container video-component__mobile"
}
  , g = "Ваш браузер не поддерживает видео тег."
  , b = {
    __name: "VideoComponent",
    props: {
        video: {
            type: String,
            default: null
        }
    },
    setup(n) {
        const t = i().public.baseUrl;
        return (o, h) => (_(),
        d("div", l, [e("div", m, [e("video", {
            class: "video-component__inner-background",
            muted: "",
            autoplay: "",
            playsinline: "",
            preload: "metadata",
            poster: p,
            src: c(t) + n.video,
            loop: ""
        }, r(g), 8, u), e("div", v, [s(o.$slots, "main", {}, void 0, !0)])]), e("div", f, [s(o.$slots, "mobile", {}, void 0, !0)])]))
    }
}
  , V = a(b, [["__scopeId", "data-v-7d655a3d"]]);
export {V as _};
