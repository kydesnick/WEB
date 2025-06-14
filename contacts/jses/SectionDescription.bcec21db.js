import {_ as h, e as w, L as y, s as v, P as S, i as k} from "./entry.89c17163.js";
import {c as x} from "./CommonSeoMeta.91fe8066.js";
import {a as b, f as L, G as a, L as d, N as _, U as C, R as $, V as p, H as j} from "./swiper-vue.ad6b35c4.js";
const B = ["id"]
  , N = {
    class: "section-description__left"
}
  , R = ["innerHTML"]
  , T = {
    __name: "SectionDescription",
    props: {
        title: {
            type: String,
            default: null
        },
        htmlContent: {
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
        },
        target: {
            type: String,
            default: "_self"
        }
    },
    setup(e) {
        const l = e
          , n = w().public.baseUrl
          , f = y();
        v(f);
        const r = b(null)
          , g = /<p\b[^<>\/]*>\s*(<img\b[^<>]*>)\s*<\/p>/g
          , u = o => {
            r.value && r.value.querySelectorAll("img").forEach( (t, m) => {
                if (t.currentSrc.includes(n)) {
                    const i = t.currentSrc.split(n)[1];
                    t.removeAttribute("src"),
                    t.srcset = `
          ${[n, "/cache/media/150w", i, " 150w"].join("")},
          ${[n, "/cache/media/250w", i, " 250w"].join("")},
          ${[n, "/cache/media/400w", i, " 400w"].join("")},
          ${[n, "/cache/media/600w", i, " 600w"].join("")},
          ${[n, "/cache/media/1200w", i, " 1200w"].join("")},
          ${[n, "/cache/media/1600w", i, " 1600w"].join("")}
        `
                }
                const c = document.createElement("div");
                (o ? m % 2 !== 0 : m % 2 === 0) ? c.className = "section-description__content-image" : c.className = "section-description__content-image-revert",
                t.parentNode.insertBefore(c, t),
                c.appendChild(t)
            }
            )
        }
        ;
        return L( () => {
            Array.from(r.value.children).forEach(o => {
                if (o.querySelectorAll("s").length) {
                    const s = x.timeline({
                        ease: "power2.inOut",
                        scrollTrigger: {
                            trigger: o,
                            start: "top 75%"
                        },
                        onComplete: () => {
                            s.scrollTrigger.kill()
                        }
                    });
                    o.querySelectorAll("s").forEach(t => {
                        s.fromTo(t, {
                            background: "linear-gradient(90deg, #841d1d 0%, transparent 0%)",
                            padding: "4px 0 5px"
                        }, {
                            background: "linear-gradient(90deg, #841d1d 100%, transparent 0%)",
                            duration: .4,
                            padding: "4px 0 5px"
                        })
                    }
                    )
                }
            }
            ),
            l.properties && l.properties["picture-position"] ? u(l.properties["picture-position"] === "left") : u(!1)
        }
        ),
        (o, s) => {
            const t = k;
            return a(),
            d("section", null, [_("div", {
                id: e.anchorLink && e.anchorLink.toLowerCase(),
                class: "section-description container"
            }, [_("div", N, [e.title ? (a(),
            d("h2", {
                key: 0,
                class: C(["section-description__title", {
                    "section-description__title_fitted": (o._.provides[S] || o.$route).params.locale === "ru"
                }])
            }, $(e.title), 3)) : p("", !0)]), e.htmlContent ? (a(),
            d("div", {
                key: 0,
                ref_key: "htmlRef",
                ref: r,
                class: "section-description__content wysiwyg-contaner",
                innerHTML: e.htmlContent.replace(g, "$1")
            }, null, 8, R)) : p("", !0), e.properties.text ? (a(),
            j(t, {
                key: 1,
                text: e.properties.text,
                modifier: "white",
                icon: "arrow-right",
                class: "section-description__powerhouse-button",
                path: e.properties.url || "/",
                tag: "link",
                target: e.target
            }, null, 8, ["text", "path", "target"])) : p("", !0)], 8, B)])
        }
    }
}
  , U = h(T, [["__scopeId", "data-v-01539735"]]);
export {U as default};
