import {_ as N} from "./CommonTitle.c7e438c6.js";
import {_ as P} from "./UiLink.a6e8cf4e.js";
import {_ as R} from "./CommonMicroserviceImage.1a0de30a.js";
import {_ as z, e as G, i as q} from "./entry.89c17163.js";
import {d as j, c as h, b as F} from "./CommonSeoMeta.91fe8066.js";
import {a as i, f as J, n as S, b as D, e as K, G as a, L as u, N as k, a5 as Q, u as L, H as v, V as m, O as W, P as X, J as Y} from "./swiper-vue.ad6b35c4.js";
const Z = ["id"]
  , ee = {
    class: "team__title container"
}
  , te = {
    class: "team__inner container"
}
  , ne = ["innerHTML"]
  , ae = {
    __name: "TeamComponent",
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
        const f = e
          , M = G().public.baseUrl
          , T = i(!1)
          , r = i(null)
          , s = i(null)
          , _ = i(null)
          , g = i(null)
          , x = i([])
          , p = i(null);
        let d = null
          , C = !1;
        function U(t) {
            x.value.push(t)
        }
        const $ = () => {
            T.value = !0;
            const t = F.create("custom", "M0,0 C0,0 0.055,0.685 0.1,0.7 0.139,0.713 0.201,0 0.243,0 0.289,0 0.341,0.953 0.375,0.977 0.408,1.001 0.57,0.268 0.6,0.297 0.632,0.329 0.653,1 0.7,1 0.757,1 0.793,1 0.858,1 0.91,1 0.848,1 0.94,1 0.995,1 1,1 1,1 ")
              , n = h.timeline({
                yoyo: !0
            });
            new Set(x.value).forEach(o => {
                n.to(o, {
                    opacity: 1,
                    ease: t,
                    duration: .3
                })
            }
            ),
            g.value && n.to(g.value.$el, {
                opacity: 1,
                ease: t,
                duration: .5
            }),
            s.value && (s.value.children.length ? Array.from(s.value.children).forEach(o => {
                w(o, n)
            }
            ) : w(s.value, n)),
            _.value && n.to(_.value.$el, {
                opacity: 1,
                ease: t,
                duration: .5
            }),
            C = !0
        }
          , w = async (t, n) => {
            t || await S();
            const l = t.textContent
              , o = l.split("")
              , y = n || h;
            t.textContent = "",
            t.style.color = "#fff",
            o.forEach(b => {
                t.innerHTML += `<span>${b}</span>`
            }
            ),
            y.fromTo(t.children, {
                opacity: 0
            }, {
                opacity: 1,
                stagger: .0035,
                ease: "steps(1)",
                onComplete: () => {
                    t.innerHTML = l
                }
            })
        }
        ;
        function E(t) {
            t.isActive && !C && $()
        }
        J(async () => {
            await S(),
            r.value && p.value && B()
        }
        );
        let I = !1;
        function B() {
            r.value && !I && (I = !0,
            H(),
            O())
        }
        function H() {
            setTimeout( () => {
                d = j.create({
                    trigger: r.value,
                    start: "center bottom",
                    end: "center top",
                    id: "Team",
                    onEnter: E,
                    onEnterBack: E
                })
            }
            , 500)
        }
        function O() {
            setTimeout( () => {
                h.to(p.value, {
                    scrollTrigger: {
                        trigger: r.value,
                        start: "top bottom",
                        end: "bottom top",
                        id: "Team",
                        scrub: !0
                    },
                    xPercent: -20,
                    ease: "power1",
                    duration: 3
                })
            }
            , 1e3)
        }
        D( () => {
            d && (d.kill(),
            d = null)
        }
        );
        const V = K( () => f.mediaImages && f.mediaImages.length ? {
            backgroundImage: `url(${M}${f.mediaImages[0].files.media})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            filter: "blur(250px)",
            width: "45%",
            height: "50%",
            position: "absolute",
            top: "0",
            right: "10%",
            zIndex: "-1",
            transform: "rotate(45deg)",
            opacity: ".8"
        } : {});
        return (t, n) => {
            const l = N
              , o = P
              , y = R
              , b = q;
            return a(),
            u("section", {
                ref_key: "sectionEl",
                ref: r,
                class: "team",
                id: e.anchorLink && e.anchorLink.toLowerCase()
            }, [k("div", {
                style: Q(L(V))
            }, null, 4), k("div", ee, [L(T) && e.title ? (a(),
            v(l, {
                key: 0,
                title: e.title,
                "with-glitch": !1,
                class: "team__title-text"
            }, null, 8, ["title"])) : m("", !0), e.properties.top_button ? (a(),
            v(o, {
                key: 1,
                ref_key: "buttonElTeamSecond",
                ref: g,
                class: "team__link",
                icon: "arrow-long-right",
                text: e.properties.top_button,
                link: e.properties.top_link
            }, null, 8, ["text", "link"])) : m("", !0)]), e.mediaImages && e.mediaImages.length ? (a(),
            u("div", {
                key: 0,
                class: "team__slider",
                ref_key: "sliderTranslate",
                ref: p
            }, [(a(!0),
            u(W, null, X(e.mediaImages.sort( (c, A) => c.customOrder - A.customOrder), c => (a(),
            u("div", {
                key: c.customOrder,
                class: "team__slider-slide"
            }, [Y(y, {
                class: "team__slider-image",
                addRef: U,
                "image-url": c.files.media,
                alt: c.files.media
            }, null, 8, ["image-url", "alt"])]))), 128))], 512)) : m("", !0), k("div", te, [e.htmlContent ? (a(),
            u("div", {
                key: 0,
                class: "team__description wysiwyg-contaner",
                ref_key: "wordsEl",
                ref: s,
                innerHTML: e.htmlContent
            }, null, 8, ne)) : m("", !0), e.properties.button_text ? (a(),
            v(b, {
                key: 1,
                ref_key: "buttonElTeam",
                ref: _,
                text: e.properties.button_text,
                icon: "arrow-long-right",
                path: e.properties.button_link,
                class: "team__button",
                modifier: "white",
                tag: "link"
            }, null, 8, ["text", "path"])) : m("", !0)])], 8, Z)
        }
    }
}
  , ue = z(ae, [["__scopeId", "data-v-b594b87b"]]);
export {ue as default};
