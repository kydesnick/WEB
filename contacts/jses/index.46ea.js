import {_ as O, e as et, i as ot, a as nt, j as at, k as st, s as lt, f as P, d as l} from "./entry.89c17163.js";
import {_ as _t, a as rt} from "./UILoader.190d6481.js";
import {_ as it} from "./CommonMicroserviceImage.1a0de30a.js";
import {f as ut} from "./formatDate.5e7c4496.js";
import {G as o, L as a, H as U, V as d, N as T, R as b, u as e, O as v, P as h, J as p, a as y, e as M, o as dt, f as ct, j as pt, F as mt, $ as ft, E as _} from "./swiper-vue.ad6b35c4.js";
import {a as gt, _ as vt} from "./CommonSeoMeta.91fe8066.js";
import "./CommonTitle.c7e438c6.js";
import "./UITag.c82f8992.js";
const ht = {
    class: "downloads-card"
}
  , wt = {
    class: "downloads-card__content"
}
  , yt = {
    class: "downloads-card__content-entry"
}
  , Dt = {
    key: 0,
    class: "downloads-card__content-entry-publish"
}
  , xt = {
    key: 1,
    class: "downloads-card__content-entry-title"
}
  , Et = {
    key: 2,
    class: "downloads-card__content-entry-description"
}
  , At = {
    key: 3,
    class: "downloads-card__content-entry-tags"
}
  , Pt = {
    key: 0,
    class: "downloads-card__content-button"
}
  , bt = {
    __name: "DownloadsCard",
    props: {
        title: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null
        },
        publishDate: {
            type: String,
            default: null
        },
        files: {
            type: Object,
            default: () => ({})
        },
        link: {
            type: String,
            default: null
        },
        tags: {
            type: Array,
            default: () => []
        },
        downloadButton: {
            type: String,
            default: null
        }
    },
    setup(t) {
        const D = et().public.baseUrl;
        return (w, x) => {
            const k = it
              , u = ot;
            return o(),
            a("div", ht, [t.files.image ? (o(),
            U(k, {
                key: 0,
                class: "downloads-card__image",
                "image-url": t.files.image,
                alt: "image"
            }, null, 8, ["image-url"])) : d("", !0), T("div", wt, [T("div", yt, [t.publishDate ? (o(),
            a("p", Dt, b(("formatDateNews"in w ? w.formatDateNews : e(ut))(t.publishDate)), 1)) : d("", !0), t.title ? (o(),
            a("h4", xt, b(t.title), 1)) : d("", !0), t.description ? (o(),
            a("p", Et, b(t.description), 1)) : d("", !0), t.tags ? (o(),
            a("p", At, [(o(!0),
            a(v, null, h(t.tags, c => (o(),
            a("span", {
                key: c.title,
                class: "downloads-card__content-entry-tags-item"
            }, b("#" + c.title), 1))), 128))])) : d("", !0)]), t.downloadButton && t.files.file ? (o(),
            a("div", Pt, [p(u, {
                modifier: "white",
                tag: "link",
                text: t.downloadButton,
                path: [e(D), "/download", t.files.file].join(""),
                download: !0
            }, null, 8, ["text", "path"])])) : d("", !0)])])
        }
    }
}
  , Tt = O(bt, [["__scopeId", "data-v-8959572f"]]);
const kt = _( () => l( () => import("./EventsComponent.602b4e69.js"), ["./EventsComponent.602b4e69.js", "./entry.89c17163.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./entry.3ff58f60.css", "./CommonSeoMeta.91fe8066.js", "./EventsComponent.01ff8ac8.css"], import.meta.url).then(t => t.default || t))
  , It = _( () => l( () => import("./CommonImageText.d2209478.js"), ["./CommonImageText.d2209478.js", "./CommonMicroserviceImage.1a0de30a.js", "./entry.89c17163.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./entry.3ff58f60.css", "./CommonImageText.0736203d.css"], import.meta.url).then(t => t.default || t))
  , Lt = _( () => l( () => import("./SectionDescription.bcec21db.js"), ["./SectionDescription.bcec21db.js", "./entry.89c17163.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./entry.3ff58f60.css", "./CommonSeoMeta.91fe8066.js", "./SectionDescription.122c2540.css"], import.meta.url).then(t => t.default || t))
  , Vt = _( () => l( () => import("./AboutBlock.d8e1460b.js"), ["./AboutBlock.d8e1460b.js", "./CommonTitle.c7e438c6.js", "./CommonSeoMeta.91fe8066.js", "./entry.89c17163.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./entry.3ff58f60.css", "./CommonTitle.168d8520.css", "./nuxt-img.9441256c.js", "./textAnimationUtil.1ce5245a.js", "./AboutBlock.96803d1a.css"], import.meta.url).then(t => t.default || t))
  , Ot = _( () => l( () => import("./PartnersComponent.1e8b9bff.js"), ["./PartnersComponent.1e8b9bff.js", "./CommonTitle.c7e438c6.js", "./CommonSeoMeta.91fe8066.js", "./entry.89c17163.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./entry.3ff58f60.css", "./CommonTitle.168d8520.css", "./PartnersComponent.79b975c1.css"], import.meta.url).then(t => t.default || t))
  , Rt = _( () => l( () => import("./TeamComponent.2f172bf1.js"), ["./TeamComponent.2f172bf1.js", "./CommonTitle.c7e438c6.js", "./CommonSeoMeta.91fe8066.js", "./entry.89c17163.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./entry.3ff58f60.css", "./CommonTitle.168d8520.css", "./UiLink.a6e8cf4e.js", "./UiLink.8385fcea.css", "./CommonMicroserviceImage.1a0de30a.js", "./TeamComponent.64aa4fe4.css"], import.meta.url).then(t => t.default || t))
  , Bt = _( () => l( () => import("./ProjectsComponent.2079ff66.js"), ["./ProjectsComponent.2079ff66.js", "./CommonTitle.c7e438c6.js", "./CommonSeoMeta.91fe8066.js", "./entry.89c17163.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./entry.3ff58f60.css", "./CommonTitle.168d8520.css", "./UiLink.a6e8cf4e.js", "./UiLink.8385fcea.css", "./SectionCardsItem.37256f56.js", "./SectionCardsItem.33192f47.css", "./nuxt-img.9441256c.js", "./UiButtonSquare.229cbf53.js", "./UiButtonSquare.26f98698.css", "./textAnimationUtil.1ce5245a.js", "./ProjectsComponent.cbd786f1.css"], import.meta.url).then(t => t.default || t))
  , jt = _( () => l( () => import("./NewsComponent.171f6268.js"), ["./NewsComponent.171f6268.js", "./CommonTitle.c7e438c6.js", "./CommonSeoMeta.91fe8066.js", "./entry.89c17163.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./entry.3ff58f60.css", "./CommonTitle.168d8520.css", "./UiLink.a6e8cf4e.js", "./UiLink.8385fcea.css", "./CommonMicroserviceImage.1a0de30a.js", "./formatDate.5e7c4496.js", "./UiButtonSquare.229cbf53.js", "./UiButtonSquare.26f98698.css", "./NewsComponent.595136be.css"], import.meta.url).then(t => t.default || t))
  , zt = _( () => l( () => import("./SwiperTextComponent.d0aa49af.js"), ["./SwiperTextComponent.d0aa49af.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./entry.89c17163.js", "./entry.3ff58f60.css", "./SwiperTextComponent.10572b08.css"], import.meta.url).then(t => t.default || t))
  , St = _( () => l( () => import("./SubscribeBlock.57fa62cf.js"), ["./SubscribeBlock.57fa62cf.js", "./entry.89c17163.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./entry.3ff58f60.css", "./validate.f591b2c1.js", "./validate.e794c00e.css", "./SubscribeBlock.248c8664.css"], import.meta.url).then(t => t.default || t))
  , Ct = _( () => l( () => import("./CommonTextButton.2366ddc8.js"), ["./CommonTextButton.2366ddc8.js", "./entry.89c17163.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./entry.3ff58f60.css", "./CommonTextButton.b6ee433f.css"], import.meta.url).then(t => t.default || t))
  , $t = _( () => l( () => import("./GeoBlock.f733af12.js"), ["./GeoBlock.f733af12.js", "./entry.89c17163.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./entry.3ff58f60.css", "./GeoBlock.5795c2c0.css"], import.meta.url).then(t => t.default || t))
  , Nt = _( () => l( () => import("./CommonImageTetris.5e24565d.js"), ["./CommonImageTetris.5e24565d.js", "./entry.89c17163.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./entry.3ff58f60.css", "./CommonMicroserviceImage.1a0de30a.js", "./CommonImageTetris.014d748c.css"], import.meta.url).then(t => t.default || t))
  , Mt = _( () => l( () => import("./JobComponent.20dd231b.js"), ["./JobComponent.20dd231b.js", "./UITag.c82f8992.js", "./entry.89c17163.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./entry.3ff58f60.css", "./UITag.69a8544b.css", "./JobComponent.e059fa82.css"], import.meta.url).then(t => t.default || t))
  , Ut = _( () => l( () => import("./SwiperFullImageComponent.c6d8b6a1.js"), ["./SwiperFullImageComponent.c6d8b6a1.js", "./nuxt-img.9441256c.js", "./CommonSeoMeta.91fe8066.js", "./entry.89c17163.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./entry.3ff58f60.css", "./SwiperFullImageComponent.040d923c.css"], import.meta.url).then(t => t.default || t))
  , Ft = _( () => l( () => import("./FactsBlockItem.4d1f2d83.js"), ["./FactsBlockItem.4d1f2d83.js", "./CommonTitle.c7e438c6.js", "./CommonSeoMeta.91fe8066.js", "./entry.89c17163.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./entry.3ff58f60.css", "./CommonTitle.168d8520.css", "./CommonMicroserviceImage.1a0de30a.js", "./FactsBlockItem.3b887144.css"], import.meta.url).then(t => t.default || t))
  , Gt = _( () => l( () => import("./ProjectsForm.79a3faee.js"), ["./ProjectsForm.79a3faee.js", "./entry.89c17163.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./entry.3ff58f60.css", "./ProjectsForm.1b8ee51e.css"], import.meta.url).then(t => t.default || t))
  , qt = _( () => l( () => import("./InspirationsBlock.ebec5805.js"), ["./InspirationsBlock.ebec5805.js", "./entry.89c17163.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./entry.3ff58f60.css", "./InspirationsBlock.ab8391a9.css"], import.meta.url).then(t => t.default || t))
  , Ht = _( () => l( () => import("./ProjectsCardsPowerhouse.55402ffd.js"), ["./ProjectsCardsPowerhouse.55402ffd.js", "./entry.89c17163.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./entry.3ff58f60.css", "./SectionDescription.bcec21db.js", "./CommonSeoMeta.91fe8066.js", "./SectionDescription.122c2540.css", "./SectionCardsItem.37256f56.js", "./SectionCardsItem.33192f47.css", "./ProjectsCardsPowerhouse.e2c491e4.css"], import.meta.url).then(t => t.default || t))
  , Jt = {
    key: 0,
    class: "downloads-page"
}
  , Kt = {
    key: 0,
    class: "downloads-page__wrapper-desc container"
}
  , Qt = {
    key: 1,
    class: "downloads-page__wrapper-table container"
}
  , Wt = {
    key: 2,
    class: "downloads-page__wrapper container"
}
  , Xt = {
    class: "downloads-page__list"
}
  , Yt = {
    key: 3,
    class: "downloads-page__loader"
}
  , Zt = {
    __name: "DownloadsPage",
    setup(t) {
        const D = nt()
          , w = at()
          , x = st()
          , {limitPage: k, downloadsArr: u, page: c} = lt(x)
          , I = y(null)
          , f = y([])
          , L = y("")
          , E = y(null)
          , g = y([])
          , F = M( () => [u.value.filter( (r, s) => s % 3 === 0), u.value.filter( (r, s) => s % 3 === 1), u.value.filter( (r, s) => s % 3 === 2)])
          , G = M( () => [u.value.filter( (r, s) => s % 2 === 0), u.value.filter( (r, s) => s % 2 === 1)])
          , q = r => {
            c.value = 1,
            r.type === "default" ? f.value = f.value.filter(s => s !== r.slug) : g.value = g.value.filter(s => s !== r.slug)
        }
          , H = r => {
            c.value = 1,
            r.type === "default" ? f.value = [...f.value, r.slug] : g.value = [...g.value, r.slug]
        }
          , {data: m} = P("downloads-page", () => D.fetchPageBlocks("downloads"))
          , {data: J} = P("downloads-tags", () => x.getDownloadTagsArr())
          , {pending: A} = P("downloads-arr", () => x.fetchDownloadsArr(f.value, g.value, L.value), {
            watch: () => [c, f.value, g.value, L.value]
        })
          , {data: K} = P("projects-page", () => w.fetchProjects())
          , Q = {
            banners: kt,
            "uniqueanimation-images": It,
            canvas: Lt,
            "title-white-button-picture-right": Vt,
            partners: Ot,
            "join-us": Rt,
            projects: Bt,
            blogposts: jt,
            values: zt,
            banner_subscription: St,
            "job-teaser": Ct,
            nothing: $t,
            "tetris-image-title": Nt,
            "job-offers": Mt,
            "fullscreen-image-slider": Ut,
            "picture-left-right-title-text": Ft,
            "project-pitch-form": Gt,
            "teaser-inspirations": qt,
            powerhouse: Ht
        }
          , W = r => Q[r.layout];
        return dt( () => {
            c.value = 1
        }
        ),
        ct( () => {
            E.value = new IntersectionObserver(r => {
                r.forEach( ({isIntersecting: s}) => {
                    s && c.value < k.value && c.value++
                }
                )
            }
            ,{
                root: null,
                rootMargin: "0px 0px 300px 0px",
                threshold: .05
            }),
            I.value && E.value.observe(I.value)
        }
        ),
        pt( () => {
            E.value && E.value.disconnect()
        }
        ),
        (r, s) => {
            var R, B, j, z, S, C, $, N;
            const X = _t
              , V = Tt
              , Y = rt
              , Z = gt
              , tt = vt;
            return e(m) ? (o(),
            a("div", Jt, [p(X, {
                class: "downloads-page__title",
                tags: e(f),
                "tags-project": e(g),
                showGradient: !1,
                title: e(m).title,
                caption: e(m).markerName,
                sortingArrProjects: e(K),
                "sorting-arr": e(J),
                tagSortButtonText: (R = e(m).mainBlock) == null ? void 0 : R.tagSortButtonText,
                onAddTag: s[0] || (s[0] = n => H(n)),
                onDelTag: s[1] || (s[1] = n => q(n)),
                onSort: s[2] || (s[2] = n => L.value = n)
            }, null, 8, ["tags", "tags-project", "title", "caption", "sortingArrProjects", "sorting-arr", "tagSortButtonText"]), (o(!0),
            a(v, null, h(e(m).pageBlocks, n => (o(),
            U(ft(W(n)), mt({
                key: n
            }, {
                title: n.title,
                htmlContent: n.htmlContent,
                properties: n.properties,
                anchorLink: n.anchorLink
            }), null, 16))), 128)), e(u) && e(u).length && !e(A) ? (o(),
            a("section", Kt, [(o(!0),
            a(v, null, h(e(F), n => (o(),
            a("ul", {
                class: "downloads-page__list",
                key: n
            }, [(o(!0),
            a(v, null, h(n, i => (o(),
            a("li", {
                class: "downloads-page__list-item",
                key: i.id
            }, [p(V, {
                tags: i.tags,
                title: i.title,
                files: i.files,
                publishDate: i.createdAt,
                description: i.description,
                downloadButton: i.downloadButton
            }, null, 8, ["tags", "title", "files", "publishDate", "description", "downloadButton"])]))), 128))]))), 128))])) : d("", !0), e(u) && e(u).length && !e(A) ? (o(),
            a("section", Qt, [(o(!0),
            a(v, null, h(e(G), n => (o(),
            a("ul", {
                class: "downloads-page__list",
                key: n
            }, [(o(!0),
            a(v, null, h(n, i => (o(),
            a("li", {
                class: "downloads-page__list-item",
                key: i.id
            }, [p(V, {
                tags: i.tags,
                title: i.title,
                files: i.files,
                publishDate: i.createdAt,
                description: i.description,
                downloadButton: i.downloadButton
            }, null, 8, ["tags", "title", "files", "publishDate", "description", "downloadButton"])]))), 128))]))), 128))])) : d("", !0), e(u) && e(u).length && !e(A) ? (o(),
            a("section", Wt, [T("ul", Xt, [(o(!0),
            a(v, null, h(e(u), n => (o(),
            a("li", {
                class: "downloads-page__list-item",
                key: n.id
            }, [p(V, {
                tags: n.tags,
                title: n.title,
                files: n.files,
                publishDate: n.createdAt,
                description: n.description,
                downloadButton: n.downloadButton
            }, null, 8, ["tags", "title", "files", "publishDate", "description", "downloadButton"])]))), 128))])])) : d("", !0), e(A) ? (o(),
            a("div", Yt, [p(Y)])) : d("", !0), T("div", {
                ref_key: "block",
                ref: I
            }, null, 512), p(Z), p(tt, {
                title: (j = (B = e(m)) == null ? void 0 : B.seo) == null ? void 0 : j.title,
                description: (S = (z = e(m)) == null ? void 0 : z.seo) == null ? void 0 : S.description,
                image: (N = ($ = (C = e(m)) == null ? void 0 : C.seo) == null ? void 0 : $.files) == null ? void 0 : N.mediaImage
            }, null, 8, ["title", "description", "image"])])) : d("", !0)
        }
    }
}
  , te = O(Zt, [["__scopeId", "data-v-fa91285a"]])
  , ee = {};
function oe(t, D) {
    const w = te;
    return o(),
    a("div", null, [p(w)])
}
const de = O(ee, [["render", oe]]);
export {de as default};
