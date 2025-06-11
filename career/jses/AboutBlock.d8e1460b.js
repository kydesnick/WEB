import {_ as U} from "./CommonTitle.c7e438c6.js";
import {_ as A} from "./nuxt-img.9441256c.js";
import {_ as w, e as k, i as S} from "./entry.89c17163.js";
import {c as y, b as L} from "./CommonSeoMeta.91fe8066.js";
import {t as b} from "./textAnimationUtil.1ce5245a.js";
import {a as i, f as B, _ as C, b as M, G as c, L as v, N as a, u as f, H as h, V as g, e as $, a5 as N, J as V} from "./swiper-vue.ad6b35c4.js";
const j = ["id"]
  , z = {
    class: "who-are-we__inner"
}
  , G = ["innerHTML"]
  , H = ["src", "alt"]
  , O = {
    __name: "AboutItem",
    props: {
        title: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null
        },
        imageUrl: {
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
    setup(e) {
        const u = k().public.baseUrl
          , d = i(!1)
          , l = i(null)
          , t = i(null)
          , m = i(null)
          , _ = i(null)
          , r = i(null)
          , x = () => {
            d.value = !0;
            const o = y.timeline({
                yoyo: !0
            })
              , s = y.matchMedia()
              , n = L.create("custom", "M0,0 C0,0 0.055,0.685 0.1,0.7 0.139,0.713 0.201,0 0.243,0 0.289,0 0.341,0.953 0.375,0.977 0.408,1.001 0.57,0.268 0.6,0.297 0.632,0.329 0.653,1 0.7,1 0.757,1 0.793,1 0.858,1 0.91,1 0.848,1 0.94,1 0.995,1 1,1 1,1 ");
            s.add("(max-width: 1023px)", () => {
                o.to(_.value, {
                    opacity: 1,
                    ease: n,
                    duration: .5
                }),
                t.value.style.opacity = 1,
                b(t.value, o),
                o.to(m.value, {
                    opacity: 1,
                    ease: n,
                    duration: .5
                })
            }
            ),
            s.add("(min-width: 1024px)", () => {
                t.value.style.opacity = 1,
                b(t.value, o),
                o.to(m.value, {
                    opacity: 1,
                    ease: n,
                    duration: .5
                }),
                o.to(r.value, {
                    opacity: 1,
                    ease: n,
                    duration: .5
                })
            }
            )
        }
        ;
        let p = null;
        return B( () => {
            C(async () => {
                l.value && (p = new IntersectionObserver( (o, s) => {
                    o.forEach(n => {
                        n.isIntersecting && (x(),
                        s.disconnect())
                    }
                    )
                }
                ,{
                    rootMargin: "-500px 0px 0px 0px"
                }),
                p.observe(l.value))
            }
            )
        }
        ),
        M( () => {
            p && p.disconnect()
        }
        ),
        (o, s) => {
            const n = U
              , E = A
              , I = S;
            return c(),
            v("div", {
                class: "who-are-we",
                id: e.anchorLink && e.anchorLink.toLowerCase(),
                ref_key: "sectionEl",
                ref: l
            }, [a("div", z, [f(d) && e.title ? (c(),
            h(n, {
                key: 0,
                class: "who-are-we__title",
                title: e.title,
                "with-glitch": !1
            }, null, 8, ["title"])) : g("", !0), a("picture", {
                ref_key: "pictureEl",
                ref: _,
                class: "who-are-we__picture"
            }, [e.imageUrl ? (c(),
            h(E, {
                key: 0,
                src: f(u) + e.imageUrl,
                alt: e.title,
                class: "who-are-we__image",
                format: "jpeg"
            }, null, 8, ["src", "alt"])) : g("", !0)], 512), a("div", {
                ref_key: "wordsEl",
                ref: t,
                class: "who-are-we__description wysiwyg-contaner",
                innerHTML: e.description
            }, null, 8, G), a("div", {
                ref_key: "buttonElAbout",
                ref: m,
                class: "who-are-we__button"
            }, [e.properties.button_text ? (c(),
            h(I, {
                key: 0,
                icon: "arrow-long-right",
                text: e.properties.button_text,
                path: e.properties.button_link,
                modifier: "white",
                tag: "link"
            }, null, 8, ["text", "path"])) : g("", !0)], 512)]), a("picture", {
                ref_key: "pictureAddEl",
                ref: r,
                class: "who-are-we__picture who-are-we__picture_additional"
            }, [a("img", {
                src: f(u) + e.imageUrl,
                alt: e.title,
                class: "who-are-we__image"
            }, null, 8, H)], 512)], 8, j)
        }
    }
}
  , T = w(O, [["__scopeId", "data-v-5904a93f"]]);
const R = {
    class: "about-block container"
}
  , J = {
    __name: "AboutBlock",
    props: {
        title: {
            type: String,
            default: ""
        },
        htmlContent: {
            type: String,
            default: ""
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
            default: ""
        }
    },
    setup(e) {
        const u = e
          , d = k().public.baseUrl
          , l = $( () => {
            var t;
            return {
                backgroundImage: `url(${d + ((t = u.mediaImages[0]) == null ? void 0 : t.files.media)})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                filter: "blur(150px)",
                width: "70%",
                height: "60%",
                position: "absolute",
                top: "30%",
                right: "0",
                zIndex: "-1",
                transform: "rotate(315deg)",
                opacity: ".7"
            }
        }
        );
        return (t, m) => {
            var r;
            const _ = T;
            return c(),
            v("section", R, [a("div", {
                style: N(f(l))
            }, null, 4), V(_, {
                description: e.htmlContent,
                imageUrl: (r = e.mediaImages[0]) == null ? void 0 : r.files.media,
                title: e.title,
                properties: e.properties,
                "anchor-link": e.anchorLink,
                class: "about-item"
            }, null, 8, ["description", "imageUrl", "title", "properties", "anchor-link"])])
        }
    }
}
  , W = w(J, [["__scopeId", "data-v-e3201b88"]]);
export {W as default};
