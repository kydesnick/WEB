import {_ as f, e as B, q as w, f as k, p as D, o as E, s as N, u as V, x as j, y as q, z as G} from "./entry.89c17163.js";
import {G as e, L as o, u as s, V as d, N as r, R as b, O as m, P as p, H as y, e as v, U as x, a as T, aa as $, a0 as J, a1 as Y, J as g, I as S, f as L, T as K} from "./swiper-vue.ad6b35c4.js";
import {_ as Q} from "./UiButtonSquare.229cbf53.js";
const X = ["href"]
  , Z = ["src"]
  , tt = {
    class: "footer-social-main-icon__text"
}
  , et = {
    __name: "FooterSocialMainIcon",
    props: {
        link: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: null
        },
        icon: {
            type: String,
            default: null
        }
    },
    setup(u) {
        const c = B().public.baseUrl;
        return (l, a) => u.link ? (e(),
        o("a", {
            key: 0,
            class: "footer-social-main-icon",
            href: u.link,
            target: "_blank"
        }, [u.icon ? (e(),
        o("img", {
            key: 0,
            class: "footer-social-main-icon__icon",
            src: s(c) + u.icon
        }, null, 8, Z)) : d("", !0), r("p", tt, b(u.title), 1)], 8, X)) : d("", !0)
    }
}
  , ot = f(et, [["__scopeId", "data-v-cd24fa25"]]);
const st = {
    class: "footer-socials"
}
  , nt = {
    __name: "FooterSocials",
    props: {
        icons: {
            type: Array,
            default: () => []
        }
    },
    setup(u) {
        return (c, l) => {
            const a = ot;
            return e(),
            o("div", st, [(e(!0),
            o(m, null, p(u.icons, _ => {
                var n, t;
                return e(),
                y(a, {
                    class: "footer-socials__item",
                    key: ((n = _.files) == null ? void 0 : n.image) + _.title,
                    icon: (t = _.files) == null ? void 0 : t.image,
                    link: _.url,
                    title: _.title
                }, null, 8, ["icon", "link", "title"])
            }
            ), 128))])
        }
    }
}
  , _t = f(nt, [["__scopeId", "data-v-cf9d430a"]]);
const rt = {
    key: 0,
    class: "footer-bottom-menu__list"
}
  , ct = ["href", "target"]
  , lt = {
    class: "footer-bottom-menu__list-item-submenu"
}
  , it = ["href", "target"]
  , at = {
    class: "footer-bottom-menu__list-item"
}
  , ut = {
    class: "footer-bottom-menu__list-item-submenu"
}
  , dt = ["href", "target"]
  , mt = {
    __name: "FooterBottomMenu",
    setup(u) {
        const c = w()
          , {data: l} = k("footer-bottom-menu", () => c.getMenusArr("BottomMenu"))
          , a = v( () => {
            const _ = {
                main: [],
                right: []
            };
            if (l && l.value)
                for (const n of l.value)
                    n.active && n.children && n.children.length && _.main.push(n),
                    n.active && !n.children && !n.parent && _.right.push(n);
            return _
        }
        );
        return (_, n) => s(l) && s(l).length ? (e(),
        o("ul", rt, [(e(!0),
        o(m, null, p(s(a).main, t => (e(),
        o("li", {
            key: t,
            class: "footer-bottom-menu__list-item"
        }, [r("a", {
            class: x(["footer-bottom-menu__list-item-link", {
                "footer-bottom-menu__list-item-link_highlighted": t.pageSlug === "careers"
            }]),
            href: t.link ? t.link : `/${t.pageSlug}`,
            target: t.targetLink ? "_blank" : "_self"
        }, b(t.text), 11, ct), r("ul", lt, [(e(!0),
        o(m, null, p(t.children.filter(i => i.active), i => (e(),
        o("li", {
            class: "footer-bottom-menu__list-item-submenu-item",
            key: i
        }, [r("a", {
            class: x(["footer-bottom-menu__list-item-submenu-item-link", [{
                "footer-bottom-menu__list-item-link_highlighted": i.text.toLowerCase() === "powerhouse"
            }]]),
            href: i.link ? i.link : `/${i.pageSlug}`,
            target: i.targetLink ? "_blank" : "_self"
        }, b(i.text), 11, it)]))), 128))])]))), 128)), r("li", at, [r("ul", ut, [(e(!0),
        o(m, null, p(s(a).right, t => (e(),
        o("li", {
            key: t,
            class: "footer-bottom-menu__list-item"
        }, [r("a", {
            class: "footer-bottom-menu__list-item-link",
            href: t.link ? t.link : `/${t.pageSlug}`,
            target: t.targetLink ? "_blank" : "_self"
        }, b(t.text), 9, dt)]))), 128))])])])) : d("", !0)
    }
}
  , ft = f(mt, [["__scopeId", "data-v-6d319063"]]);
const pt = u => (J("data-v-e59a85d7"),
u = u(),
Y(),
u)
  , ht = pt( () => r("svg", {
    class: "footer-bottom-menu-accordion__list-item-link-button_arrow",
    xmlns: "http://www.w3.org/2000/svg",
    width: "11",
    height: "6",
    viewBox: "0 0 11 6",
    fill: "none"
}, [r("path", {
    d: "M1 1L5.5 5L10 1"
})], -1))
  , gt = [ht]
  , bt = {
    __name: "FooterBottomMenuAccordion",
    setup(u) {
        const c = T(!1);
        return (l, a) => (e(),
        o("div", null, [r("div", {
            class: x(["footer-bottom-menu-accordion__list-item-link", [{
                "footer-bottom-menu-accordion__list-item-link_active": s(c)
            }]])
        }, [$(l.$slots, "button", {}, void 0, !0), r("button", {
            class: "footer-bottom-menu-accordion__list-item-link-button",
            onClick: a[0] || (a[0] = () => c.value = !s(c))
        }, gt)], 2), r("div", {
            class: x(["footer-bottom-menu-accordion__list-item-wrapper", [{
                "footer-bottom-menu-accordion__list-item-wrapper_open": s(c)
            }]])
        }, [r("div", null, [$(l.$slots, "content", {}, void 0, !0)])], 2)]))
    }
}
  , kt = f(bt, [["__scopeId", "data-v-e59a85d7"]]);
const yt = {
    key: 0,
    class: "footer-bottom-menu"
}
  , vt = {
    class: "footer-bottom-menu__list"
}
  , xt = {
    key: 0,
    class: "footer-bottom-menu__list-item"
}
  , $t = ["href", "target"]
  , St = {
    class: "footer-bottom-menu__list-item-submenu"
}
  , wt = ["href", "target"]
  , Tt = {
    class: "footer-bottom-menu__list footer-bottom-menu__list-right"
}
  , Ft = {
    key: 0,
    class: "footer-bottom-menu__list-item"
}
  , Mt = ["href", "target"]
  , It = {
    __name: "FooterBottomMenuMobile",
    setup(u) {
        const c = w()
          , {data: l} = k("footer-bottom-menu", () => c.getMenusArr("BottomMenu"));
        return T(!1),
        (a, _) => {
            const n = kt;
            return s(l) && s(l).length ? (e(),
            o("div", yt, [r("ul", vt, [(e(!0),
            o(m, null, p(s(l), t => (e(),
            o(m, {
                key: t
            }, [t.active && t.children && t.children.length ? (e(),
            o("li", xt, [g(n, null, {
                button: S( () => [r("a", {
                    href: t.link ? t.link : `/${t.pageSlug}`,
                    target: t.targetLink ? "_blank" : null
                }, b(t.text), 9, $t)]),
                content: S( () => [r("ul", St, [(e(!0),
                o(m, null, p(t.children, i => (e(),
                o("li", {
                    class: "footer-bottom-menu__list-item-submenu-item",
                    key: i
                }, [i.active ? (e(),
                o("a", {
                    key: 0,
                    class: "footer-bottom-menu__list-item-submenu-item-link",
                    href: i.link ? i.link : `/${i.pageSlug}`,
                    target: i.targetLink ? "_blank" : null
                }, b(i.text), 9, wt)) : d("", !0)]))), 128))])]),
                _: 2
            }, 1024)])) : d("", !0)], 64))), 128))]), r("ul", Tt, [(e(!0),
            o(m, null, p(s(l), t => (e(),
            o(m, {
                key: t
            }, [t.active && !t.children && !t.parent ? (e(),
            o("li", Ft, [r("a", {
                class: "footer-bottom-menu__list-item-link",
                href: t.link ? t.link : `/${t.pageSlug}`,
                target: t.targetLink ? "_blank" : null
            }, b(t.text), 9, Mt)])) : d("", !0)], 64))), 128))])])) : d("", !0)
        }
    }
}
  , At = f(It, [["__scopeId", "data-v-5746b43a"]]);
const Bt = {
    class: "footer-warnings"
}
  , Lt = ["src"]
  , Ct = {
    __name: "FooterWarnings",
    props: {
        images: {
            type: Array,
            default: () => []
        }
    },
    setup(u) {
        const c = ["/images/age-rating.png", "/images/rp.png", "/images/rating-pending.png", "/images/age-18.png"];
        return (l, a) => (e(),
        o("div", Bt, [(e(),
        o(m, null, p(c, _ => r("div", {
            class: "footer-warnings__item",
            key: _
        }, [r("img", {
            src: _
        }, null, 8, Lt)])), 64))]))
    }
}
  , Ht = f(Ct, [["__scopeId", "data-v-d547ccda"]]);
const Pt = {
    class: "footer-social-icons"
}
  , Rt = ["href"]
  , Ut = ["src"]
  , Ot = {
    __name: "FooterSocialIcons",
    props: {
        icons: {
            type: Array,
            default: () => []
        }
    },
    setup(u) {
        const c = B().public.baseUrl;
        return (l, a) => (e(),
        o("div", Pt, [(e(!0),
        o(m, null, p(u.icons, _ => (e(),
        o("a", {
            key: _.url,
            class: "footer-social-icons__link",
            href: _.url,
            target: "_blank"
        }, [_.files ? (e(),
        o("img", {
            key: 0,
            class: "footer-social-icons__icon",
            src: s(c) + _.files.image,
            alt: "icon"
        }, null, 8, Ut)) : d("", !0)], 8, Rt))), 128))]))
    }
}
  , Wt = f(Ot, [["__scopeId", "data-v-d56b6b7d"]]);
const zt = {
    class: "footer-platforms"
}
  , Dt = ["href"]
  , Et = ["src", "alt"]
  , Nt = {
    __name: "FooterPlatforms",
    props: {
        platformsArr: {
            type: Array,
            default: () => []
        }
    },
    setup(u) {
        return (c, l) => (e(),
        o("div", zt, [(e(!0),
        o(m, null, p(u.platformsArr, a => (e(),
        o("a", {
            class: "footer-platforms__link",
            key: a.id,
            href: a.link
        }, [r("img", {
            src: [c.$config.public.baseUrl, a.thumb].join(""),
            alt: a.title,
            class: "footer-platforms__image",
            loading: "lazy"
        }, null, 8, Et)], 8, Dt))), 128))]))
    }
}
  , Vt = f(Nt, [["__scopeId", "data-v-52a1a3fb"]]);
const jt = {
    key: 0,
    class: "responsibilities"
}
  , qt = {
    key: 0,
    class: "responsibilities__item"
}
  , Gt = ["href", "target"]
  , Jt = {
    __name: "FooterResponsibilities",
    setup(u) {
        const c = w()
          , {data: l} = k("info-menu", () => c.getMenusArr("InfoMenu"));
        return (a, _) => s(l) && s(l).length ? (e(),
        o("ul", jt, [(e(!0),
        o(m, null, p(s(l).sort( (n, t) => n.customOrder - t.customOrder), n => (e(),
        o(m, {
            key: n.text + n.menuType
        }, [n.active ? (e(),
        o("li", qt, [r("a", {
            class: "responsibilities__item-link underlined-link",
            href: n.link ? n.link : `/${n.pageSlug}`,
            target: n.targetLink ? "_blank" : null
        }, b(n.text), 9, Gt)])) : d("", !0)], 64))), 128))])) : d("", !0)
    }
}
  , Yt = f(Jt, [["__scopeId", "data-v-d6dbdc27"]]);
const Kt = {
    class: "container"
}
  , Qt = {
    class: "footer__inner"
}
  , Xt = {
    key: 0,
    class: "footer__social-block"
}
  , Zt = {
    class: "footer__social-block-info"
}
  , te = {
    key: 0,
    class: "footer__social-block-info-title"
}
  , ee = ["innerHTML"]
  , oe = {
    class: "footer__lower"
}
  , se = {
    class: "footer__lower-icons"
}
  , ne = ["innerHTML"]
  , _e = {
    class: "footer__end"
}
  , re = {
    __name: "FooterComponent",
    setup(u) {
        const c = D()
          , l = E()
          , {projectLogos: a} = N(c);
        V();
        const {data: _} = k("socials-arr", () => c.fetchAllSocials())
          , {data: n} = k("footer-text", () => l.fetchAllStaticTexts())
          , {data: t} = k("footer-platforms", () => c.fetchAllPlatforms())
          , i = v( () => {
            var h;
            return (h = a.value) != null && h.length ? a.value : _.value.filter(A => A.title)
        }
        )
          , F = v( () => n.value.find(h => h.textType === "FooterTopText"))
          , M = v( () => n.value.find(h => h.textType === "FooterMiddleText"))
          , I = v( () => n.value.find(h => h.textType === "FooterBottomText"));
        return (h, A) => {
            const C = _t
              , H = ft
              , P = At
              , R = Ht
              , U = Wt
              , O = Vt
              , W = Yt;
            return e(),
            o("footer", {
                class: x(["footer", {
                    "footer_no-social-links": !s(i).length
                }])
            }, [r("div", Kt, [r("div", Qt, [s(i).length ? (e(),
            o("div", Xt, [r("div", Zt, [s(n) && s(n).length && s(F) ? (e(),
            o("h5", te, b(s(F).text), 1)) : d("", !0), s(n) && s(n).length && s(M) ? (e(),
            o("div", {
                key: 1,
                class: "footer__social-block-info-text wysiwyg-contaner",
                innerHTML: s(M).text
            }, null, 8, ee)) : d("", !0)]), s(i) && s(i).length ? (e(),
            y(C, {
                key: 0,
                class: "footer__social-block-icons",
                icons: s(i)
            }, null, 8, ["icons"])) : d("", !0)])) : d("", !0), r("div", oe, [g(H, {
                class: "footer__lower-desktop"
            }), g(P, {
                class: "footer__lower-mobile"
            }), r("div", se, [g(R), s(_) && s(_).length ? (e(),
            y(U, {
                key: 0,
                icons: s(_).filter(z => !z.title),
                class: "footer__lower-icons__social-icons"
            }, null, 8, ["icons"])) : d("", !0)])]), s(t) ? (e(),
            y(O, {
                key: 1,
                "platforms-arr": s(t),
                class: "footer__lower-platforms"
            }, null, 8, ["platforms-arr"])) : d("", !0), s(n) && s(n).length && s(I) ? (e(),
            o("div", {
                key: 2,
                class: "footer__lower-eula wysiwyg-contaner",
                innerHTML: s(I).text
            }, null, 8, ne)) : d("", !0), r("div", _e, [g(W)])])])], 2)
        }
    }
}
  , ce = f(re, [["__scopeId", "data-v-bd83e8e9"]]);
const le = {
    __name: "CommonScrollToTopArrow",
    setup(u) {
        const c = T(!1);
        function l() {
            window.scrollTo(0, 0)
        }
        let a;
        function _() {
            a && clearTimeout(a),
            a = setTimeout( () => {
                c.value = !!window.scrollY
            }
            , 100)
        }
        return L( () => {
            window.addEventListener("scroll", _)
        }
        ),
        (n, t) => {
            const i = Q;
            return e(),
            y(K, {
                name: "fade"
            }, {
                default: S( () => [s(c) ? (e(),
                y(i, {
                    key: 0,
                    class: "scrollToTopButton",
                    onClick: l,
                    icon: "arrow-down",
                    modifier: "red"
                })) : d("", !0)]),
                _: 1
            })
        }
    }
}
  , ie = f(le, [["__scopeId", "data-v-13e7d3cc"]]);
const ae = {
    class: "wrapper"
}
  , ue = {
    class: "main"
}
  , de = {
    __name: "default",
    setup(u) {
        const c = j();
        return L( () => {
            window.addEventListener("resize", () => {
                c.SET_WIDTH(window.innerWidth)
            }
            )
        }
        ),
        (l, a) => {
            const _ = q
              , n = ce
              , t = G
              , i = ie;
            return e(),
            o("div", ae, [g(_), r("main", ue, [$(l.$slots, "default", {}, void 0, !0)]), g(n), g(t), g(i)])
        }
    }
}
  , he = f(de, [["__scopeId", "data-v-a6a427b9"]]);
export {he as default};
