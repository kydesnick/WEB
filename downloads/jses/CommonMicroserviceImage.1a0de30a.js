import {e as r} from "./entry.89c17163.js";
import {e as m, G as n, L as o, u as c, V as s} from "./swiper-vue.ad6b35c4.js";
const l = ["src", "alt", "srcset"]
  , u = {
    __name: "CommonMicroserviceImage",
    props: {
        imageUrl: {
            type: String,
            default: ""
        },
        alt: {
            type: String,
            default: ""
        },
        addRef: {
            type: Function
        }
    },
    setup(t) {
        const e = t
          , a = r().public.baseUrl
          , i = m( () => e.imageUrl ? `
        ${[a, "/cache/media/150w", e.imageUrl, " 150w"].join("")},
        ${[a, "/cache/media/250w", e.imageUrl, " 250w"].join("")},
        ${[a, "/cache/media/400w", e.imageUrl, " 400w"].join("")},
        ${[a, "/cache/media/600w", e.imageUrl, " 600w"].join("")},
        ${[a, "/cache/media/1200w", e.imageUrl, " 1200w"].join("")},
        ${[a, "/cache/media/1600w", e.imageUrl, " 1600w"].join("")}
` : "");
        return (g, d) => t.imageUrl ? (n(),
        o("img", {
            key: 0,
            src: c(a) + t.imageUrl,
            alt: t.alt || "image",
            srcset: c(i),
            ref: t.addRef
        }, null, 8, l)) : s("", !0)
    }
}
  , f = u;
export {f as _};
