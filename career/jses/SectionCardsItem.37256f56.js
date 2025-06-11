import {_ as M, e as R, u as U, j as P, f as z, i as H} from "./entry.89c17163.js";
import {d as V, b as $, c as j} from "./CommonSeoMeta.91fe8066.js";
import {a as s, f as A, b as G, u as t, G as l, L as b, N as i, V as d, U as u, R as k, H as B} from "./swiper-vue.ad6b35c4.js";
const O = ["src"]
  , W = {
    key: 1,
    class: "section-card__wrapper-icon"
}
  , q = ["src"]
  , F = {
    class: "container"
}
  , J = {
    class: "section-card__text-block"
}
  , K = {
    __name: "SectionCardsItem",
    props: {
        slug: {
            type: String,
            default: null
        },
        animation: {
            type: Boolean,
            default: !1
        }
    },
    setup(c) {
        const m = c
          , v = R().public.baseUrl
          , E = U()
          , y = s(null)
          , x = s(null)
          , p = s(null)
          , f = s(null)
          , h = s(null)
          , g = s(null)
          , C = s(!0);
        let _ = null;
        const N = P()
          , {data: e} = z(`project-data-slug-${m.slug}`, () => N.fetchOneProject(m.slug))
          , I = () => {
            const a = $.create("custom", "M0,0 C0,0 0.055,0.685 0.1,0.7 0.139,0.713 0.201,0 0.243,0 0.289,0 0.341,0.953 0.375,0.977 0.408,1.001 0.57,0.268 0.6,0.297 0.632,0.329 0.653,1 0.7,1 0.757,1 0.793,1 0.858,1 0.91,1 0.848,1 0.94,1 0.995,1 1,1 1,1 ")
              , o = j.timeline({
                yoyo: !0
            });
            o.to(x.value, {
                opacity: 1,
                ease: a,
                duration: .5
            }),
            f.value.hasChildNodes() ? f.value.childNodes.forEach(n => {
                r(n, o)
            }
            ) : r(child, o),
            p.value.hasChildNodes() ? p.value.childNodes.forEach(n => {
                r(n, o)
            }
            ) : r(child, o),
            g.value.hasChildNodes() ? g.value.childNodes.forEach(n => {
                r(n, o)
            }
            ) : r(child, o),
            h.value && h.value.childNodes.forEach(n => {
                o.to(n, {
                    opacity: 1,
                    ease: a,
                    duration: .4
                })
            }
            )
        }
          , r = (a, o) => {
            const n = a.textContent
              , S = n.split("")
              , D = o || j;
            a.textContent = "",
            a.style.color = "#fff",
            S.forEach(L => {
                a.innerHTML += `<span>${L}</span>`
            }
            ),
            D.fromTo(a.children, {
                opacity: 0
            }, {
                opacity: 1,
                stagger: .0035,
                ease: "steps(1)",
                onComplete: () => {
                    a.innerHTML = n
                }
            })
        }
          , w = () => {
            C.value = window.innerWidth > 768
        }
        ;
        function T(a) {
            a.isActive && (_.kill(),
            I())
        }
        return A( () => {
            window && (w(),
            window.addEventListener("resize", () => {
                w()
            }
            )),
            m.animation && setTimeout( () => {
                _ = V.create({
                    trigger: y.value,
                    start: "center bottom",
                    end: "center top",
                    id: "projects",
                    onEnter: T,
                    onEnterBack: T
                })
            }
            , 500)
        }
        ),
        G( () => {
            _ && _.kill()
        }
        ),
        (a, o) => {
            const n = H;
            return t(e) ? (l(),
            b("article", {
                key: 0,
                class: "section-card",
                ref_key: "block",
                ref: y
            }, [i("div", {
                ref_key: "animationImg",
                ref: x,
                class: u(["container section-card__wrapper-img", [{
                    "section-card__wrapper-img-animation": c.animation
                }]])
            }, [t(e).files ? (l(),
            b("img", {
                key: 0,
                class: "section-card__img",
                alt: "image",
                src: t(v) + (t(E).path === "/" ? t(e).files.mediaMainPage : t(e).files.mediaCover)
            }, null, 8, O)) : d("", !0), t(e).projectIcon ? (l(),
            b("div", W, [i("img", {
                class: "section-card__icon",
                src: t(v) + t(e).projectIcon.contentUrl
            }, null, 8, q)])) : d("", !0)], 2), i("div", F, [i("div", J, [i("div", {
                ref_key: "animationTitle",
                ref: f,
                class: u(["section-card__text-block-title", [{
                    "section-card__text-block-title-animation": c.animation
                }]])
            }, [i("h3", null, k(t(e).title), 1)], 2), i("div", {
                ref_key: "animationDate",
                ref: p,
                class: u(["section-card__text-block-release-date", [{
                    "section-card__text-block-release-date-animation": c.animation
                }]])
            }, [i("p", null, k(t(e).dateRelease), 1)], 2), i("div", {
                ref_key: "animationDescription",
                ref: g,
                class: u(["section-card__text-block-description", [{
                    "section-card__text-block-description-animation": c.animation
                }]])
            }, [i("p", null, k(t(e).description), 1)], 2)]), i("div", {
                ref_key: "animationButtons",
                ref: h,
                class: u(["section-card__inner-buttons", [{
                    "section-card__inner-buttons-animation": c.animation
                }]])
            }, [t(e).readMore ? (l(),
            B(n, {
                key: 0,
                text: t(e).readMore,
                path: `/projects/${t(e).slug}`,
                class: "section-card__inner-buttons-more",
                modifier: "white",
                tag: "link",
                icon: t(C) ? "arrow-right" : ""
            }, null, 8, ["text", "path", "icon"])) : d("", !0), t(e).purchaseLabel ? (l(),
            B(n, {
                key: 1,
                text: t(e).purchaseLabel,
                path: t(e).purchaseLink,
                tag: "a",
                class: "section-card__inner-buttons-buy"
            }, null, 8, ["text", "path"])) : d("", !0)], 2)])], 512)) : d("", !0)
        }
    }
}
  , Z = M(K, [["__scopeId", "data-v-ba923cfb"]]);
export {Z as _};
