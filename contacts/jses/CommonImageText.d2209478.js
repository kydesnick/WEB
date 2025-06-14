import {_ as h} from "./CommonMicroserviceImage.1a0de30a.js";
import {_ as x, e as I} from "./entry.89c17163.js";
import {e as g, G as a, L as t, N as c, U as d, u as i, O as l, P as s, R as y, J as _} from "./swiper-vue.ad6b35c4.js";
const p = ["id"]
  , k = {
    class: "animation"
}
  , v = {
    __name: "CommonImageText",
    props: {
        title: {
            type: String,
            default: null
        },
        mediaImages: {
            type: Array,
            default: () => []
        },
        anchorLink: {
            type: String,
            default: null
        }
    },
    setup(n) {
        const m = n;
        I().public.baseUrl;
        const o = g( () => !!m.mediaImages.length && !m.title)
          , r = g( () => !m.mediaImages.length && !!m.title)
          , f = g( () => m.mediaImages.length ? m.mediaImages.length : 10);
        return (b, C) => {
            const u = h;
            return a(),
            t("div", {
                id: n.anchorLink && n.anchorLink.toLowerCase()
            }, [c("div", k, [c("div", {
                class: d(["animation__text", {
                    "animation__text-hidden": i(o),
                    "animation__text-visible": i(r),
                    "animation__text-mobile-hidden": !i(r) && !i(o)
                }])
            }, [(a(!0),
            t(l, null, s(i(f), e => (a(),
            t("p", {
                class: "animation__text-item",
                key: e
            }, y(n.title), 1))), 128))], 2), c("div", {
                class: d(["animation__img", {
                    "animation__img-hidden": i(r),
                    "animation__img-visible": i(o),
                    "animation__img-mobile-hidden": !i(r) && !i(o)
                }])
            }, [(a(!0),
            t(l, null, s(n.mediaImages, e => (a(),
            t("p", {
                class: "animation__img-item",
                key: e
            }, [_(u, {
                "image-url": e.files.media
            }, null, 8, ["image-url"])]))), 128)), (a(!0),
            t(l, null, s(n.mediaImages, e => (a(),
            t("p", {
                class: "animation__img-item",
                key: e
            }, [_(u, {
                "image-url": e.files.media
            }, null, 8, ["image-url"])]))), 128)), (a(!0),
            t(l, null, s(n.mediaImages, e => (a(),
            t("p", {
                class: "animation__img-item",
                key: e
            }, [_(u, {
                "image-url": e.files.media
            }, null, 8, ["image-url"])]))), 128)), (a(!0),
            t(l, null, s(n.mediaImages, e => (a(),
            t("p", {
                class: "animation__img-item",
                key: e
            }, [_(u, {
                "image-url": e.files.media
            }, null, 8, ["image-url"])]))), 128))], 2)])], 8, p)
        }
    }
}
  , N = x(v, [["__scopeId", "data-v-55e1d6b1"]]);
export {N as default};
