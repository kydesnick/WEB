import {d as B, _ as ne, e as ie, J as ae, f as le} from "./entry.89c17163.js";
import {G as a, H as A, V as q, E as $, a as s, W as se, e as U, w as W, f as oe, n as re, b as ue, L as r, N as F, a5 as D, u as i, J as h, I as M, O as L, P as R, a9 as ce, ad as de, ae as me, U as ge, Y as pe, Z as ve} from "./swiper-vue.ad6b35c4.js";
import {b as fe, c as G} from "./CommonSeoMeta.91fe8066.js";
const ye = $( () => B( () => import("./BannersForm.b8c4e31b.js"), ["./BannersForm.b8c4e31b.js", "./entry.89c17163.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./entry.3ff58f60.css", "./validate.f591b2c1.js", "./validate.e794c00e.css", "./BannersForm.8de5133c.css"], import.meta.url).then(e => e.default || e))
  , ke = $( () => B( () => import("./BannersFormCentered.fbeee653.js"), ["./BannersFormCentered.fbeee653.js", "./entry.89c17163.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./entry.3ff58f60.css", "./validate.f591b2c1.js", "./validate.e794c00e.css", "./BannersFormCentered.07981b23.css"], import.meta.url).then(e => e.default || e))
  , be = $( () => B( () => import("./BannersNoForm.ce7beed8.js"), ["./BannersNoForm.ce7beed8.js", "./entry.89c17163.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./entry.3ff58f60.css", "./BannersNoForm.2191aef7.css"], import.meta.url).then(e => e.default || e))
  , Se = {
    __name: "BannersWrapper",
    props: {
        class: {
            type: String,
            default: ""
        },
        active: {
            type: Boolean,
            default: !0
        },
        bgUrl: {
            type: String,
            default: "/images/bg1.png"
        },
        title: {
            type: String,
            default: ""
        },
        description: {
            type: String,
            default: ""
        },
        addRef: {
            type: Function
        },
        linkTitle: {
            type: String,
            default: null
        },
        targetLink: {
            type: String,
            default: null
        },
        textAgreement: {
            type: String,
            default: null
        },
        bannerType: {
            type: String,
            default: ""
        },
        titleSuccessful: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: ""
        }
    },
    emits: ["inputForm"],
    setup(e) {
        return (c, u) => {
            const _ = ye
              , f = ke
              , k = be;
            return e.bannerType === "banner_form" ? (a(),
            A(_, {
                key: 0,
                active: e.active,
                bgUrl: e.bgUrl,
                title: e.title,
                description: e.description,
                addRef: e.addRef,
                linkTitle: e.linkTitle,
                targetLink: e.targetLink,
                textAgreement: e.textAgreement,
                bannerType: e.bannerType,
                titleSuccessful: e.titleSuccessful,
                onInputForm: u[0] || (u[0] = y => c.$emit("inputForm"))
            }, null, 8, ["active", "bgUrl", "title", "description", "addRef", "linkTitle", "targetLink", "textAgreement", "bannerType", "titleSuccessful"])) : e.bannerType === "banner_form_centered" ? (a(),
            A(f, {
                key: 1,
                active: e.active,
                bgUrl: e.bgUrl,
                title: e.title,
                description: e.description,
                addRef: e.addRef,
                linkTitle: e.linkTitle,
                targetLink: e.targetLink,
                textAgreement: e.textAgreement,
                bannerType: e.bannerType,
                titleSuccessful: e.titleSuccessful,
                onInputForm: u[1] || (u[1] = y => c.$emit("inputForm"))
            }, null, 8, ["active", "bgUrl", "title", "description", "addRef", "linkTitle", "targetLink", "textAgreement", "bannerType", "titleSuccessful"])) : e.bannerType === "banner_no-form" ? (a(),
            A(k, {
                key: 2,
                active: e.active,
                bgUrl: e.bgUrl,
                title: e.title,
                description: e.description,
                addRef: e.addRef,
                linkTitle: e.linkTitle,
                targetLink: e.targetLink,
                textAgreement: e.textAgreement,
                bannerType: e.bannerType,
                titleSuccessful: e.titleSuccessful,
                onInputForm: u[2] || (u[2] = y => c.$emit("inputForm"))
            }, null, 8, ["active", "bgUrl", "title", "description", "addRef", "linkTitle", "targetLink", "textAgreement", "bannerType", "titleSuccessful"])) : q("", !0)
        }
    }
}
  , Te = Se;
const we = ["id"]
  , Le = {
    class: "container main-events_desktop"
}
  , Ae = ["onClick"]
  , _e = ["onClick"]
  , Ee = ["onClick"]
  , xe = {
    class: "main-events_mobile"
}
  , Ce = ["onClick"]
  , Ie = {
    __name: "EventsComponent",
    props: {
        properties: {
            type: Object,
            default: () => ({})
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
    async setup(e) {
        let c, u;
        const _ = e
          , f = ie().public.baseUrl
          , k = s(null)
          , y = s(null)
          , z = s(!0)
          , p = s(0)
          , b = s(null)
          , v = s(null)
          , O = s([])
          , P = s(null)
          , J = ae()
          , E = s(null)
          , x = s(0)
          , S = s(null)
          , T = s(null)
          , V = s(!1)
          , {data: d} = ([c,u] = se( () => le("banners-data", () => J.fetchBannersSlug(_.properties.banners), {
            transform: n => n.sort( (l, g) => l.customOrder - g.customOrder)
        })),
        c = await c,
        u(),
        c)
          , j = U( () => {
            var n;
            return p.value < 1024 ? (n = d.value[0]) == null ? void 0 : n.title : null
        }
        )
          , H = U( () => ({
            background: `linear-gradient(270deg, rgba(255, 255, 255, 0.3) 0, rgba(255, 255, 255, 0.3) ${E.value * 100}%,#FFF 0, #FFF ${E.value * 100}%)`
        }))
          , Y = (n, l, g) => {
            x.value = n.realIndex,
            E.value = g
        }
        ;
        function Z(n) {
            O.value.push(n)
        }
        function C(n) {
            S.value.slideTo(n)
        }
        const K = () => {
            const n = fe.create("custom", "M0,0 C0,0 0.055,0.685 0.1,0.7 0.139,0.713 0.201,0 0.243,0 0.289,0 0.341,0.953 0.375,0.977 0.408,1.001 0.57,0.268 0.6,0.297 0.632,0.329 0.653,1 0.7,1 0.757,1 0.793,1 0.858,1 0.91,1 0.848,1 0.94,1 0.995,1 1,1 1,1 ")
              , l = G.timeline({
                yoyo: !0
            });
            new Set(O.value).forEach(w => {
                w && l.to(w.$el, {
                    opacity: 1,
                    ease: n,
                    duration: .5
                })
            }
            ),
            G.to(P.value, {
                opacity: 1,
                ease: "power4.in",
                duration: 1
            }),
            V.value = !0
        }
          , N = n => {
            b.value = p.value < 1024 ? n : "all"
        }
        ;
        W(p, () => {
            z.value = p.value >= 1024
        }
        ),
        W(T, () => {
            T.value ? S.value.autoplay.stop() : S.value.autoplay.start()
        }
        );
        let m = null
          , I = null;
        oe(async () => {
            v.value && (m = new IntersectionObserver(n => {
                n.forEach(l => {
                    l.isIntersecting && (K(),
                    m.unobserve(v.value))
                }
                )
            }
            ,{
                rootMargin: "-500px 0px 0px 0px"
            }),
            m.observe(v.value)),
            await re(),
            window && (p.value = window.innerWidth,
            window.addEventListener("resize", () => {
                p.value = window.innerWidth,
                I && clearTimeout(I),
                I = setTimeout( () => {
                    m && v.value && m.observe(v.value)
                }
                , 100)
            }
            ),
            b.value = j.value)
        }
        ),
        ue( () => {
            m && m.disconnect()
        }
        );
        const Q = {
            navigation: {
                nextEl: y.value,
                prevEl: k.value
            },
            breakpoints: {
                1366: {
                    spaceBetween: 40
                },
                1920: {
                    spaceBetween: 50
                }
            }
        }
          , X = U( () => d[0] ? {
            backgroundImage: `url(${f}${d[0].files.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            filter: "blur(100px)",
            width: "30%",
            height: "60%",
            position: "absolute",
            top: "-10%",
            right: "10%",
            opacity: ".7",
            zIndex: "-1"
        } : "");
        return (n, l) => {
            const g = Te
              , w = pe
              , ee = ve;
            return a(),
            r("section", {
                id: e.anchorLink && e.anchorLink.toLowerCase(),
                class: ge(["main-events", {
                    "main-events_not-animated": !i(V)
                }]),
                ref_key: "sectionEl",
                ref: v
            }, [F("div", {
                style: D(i(X))
            }, null, 4), F("div", Le, [h(ee, {
                modules: ["SwiperNavigation"in n ? n.SwiperNavigation : i(ce), "SwiperPagination"in n ? n.SwiperPagination : i(de), "SwiperAutoplay"in n ? n.SwiperAutoplay : i(me)],
                navigation: {
                    nextEl: i(y),
                    prevEl: i(k)
                },
                autoplay: {
                    enabled: !0,
                    delay: 1e4,
                    pauseOnMouseEnter: !0,
                    disableOnInteraction: !1
                },
                "grab-cursor": !0,
                breakpoints: Q.breakpoints,
                enabled: i(z),
                onSwiper: l[1] || (l[1] = t => S.value = t),
                slidesPerView: "auto",
                spaceBetween: "20",
                onAutoplayTimeLeft: l[2] || (l[2] = (t, o, te) => i(T) ? null : Y(t, o, te))
            }, {
                default: M( () => [(a(!0),
                r(L, null, R(i(d) || [], t => (a(),
                A(w, {
                    key: "desktop" + t.title,
                    ref_for: !0,
                    ref: Z,
                    onClick: () => N(t.title)
                }, {
                    default: M( () => [h(g, {
                        active: !0,
                        bgUrl: i(f) + t.files.image,
                        title: t.title,
                        description: t.description,
                        linkTitle: t.linkTitle,
                        targetLink: t.targetLink,
                        bannerType: t.bannerType,
                        textAgreement: t.textAgreement,
                        titleSuccessful: t.titleSuccessful,
                        class: "main-events__swiper-item",
                        onInputForm: l[0] || (l[0] = o => T.value = o)
                    }, null, 8, ["bgUrl", "title", "description", "linkTitle", "targetLink", "bannerType", "textAgreement", "titleSuccessful"])]),
                    _: 2
                }, 1032, ["onClick"]))), 128))]),
                _: 1
            }, 8, ["modules", "navigation", "breakpoints", "enabled"]), i(d) && i(d).length > 1 ? (a(),
            r("div", {
                key: 0,
                class: "main-events__pagination",
                ref_key: "buttonsEl",
                ref: P
            }, [(a(!0),
            r(L, null, R(i(d) || [], (t, o) => (a(),
            r(L, {
                key: "buttons" + t.title
            }, [o < i(x) ? (a(),
            r("button", {
                key: 0,
                class: "main-events__pagination-slide-progress main-events__pagination-slide-progress_active",
                onClick: () => C(o)
            }, null, 8, Ae)) : o === i(x) ? (a(),
            r("button", {
                key: 1,
                class: "main-events__pagination-slide-progress",
                style: D(i(H)),
                onClick: () => C(o)
            }, null, 12, _e)) : (a(),
            r("button", {
                key: 2,
                class: "main-events__pagination-slide-progress",
                onClick: () => C(o)
            }, null, 8, Ee))], 64))), 128))], 512)) : q("", !0)]), F("div", xe, [(a(!0),
            r(L, null, R(i(d) || [], (t, o) => (a(),
            r("div", {
                key: "mobile" + t.title,
                onClick: () => N(t.title)
            }, [h(g, {
                active: i(b) ? i(b) === t.title : o === 0,
                bgUrl: i(f) + t.files.image,
                title: t.title,
                description: t.description,
                linkTitle: t.linkTitle,
                targetLink: t.targetLink,
                bannerType: t.bannerType,
                textAgreement: t.textAgreement,
                titleSuccessful: t.titleSuccessful
            }, null, 8, ["active", "bgUrl", "title", "description", "linkTitle", "targetLink", "bannerType", "textAgreement", "titleSuccessful"])], 8, Ce))), 128))])], 10, we)
        }
    }
}
  , Re = ne(Ie, [["__scopeId", "data-v-ada91ef3"]]);
export {Re as default};
