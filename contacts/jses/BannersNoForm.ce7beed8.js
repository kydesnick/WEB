import {_ as r, i as l} from "./entry.89c17163.js";
import {e as s, G as o, L as c, N as t, J as u, U as d, a5 as m, u as g} from "./swiper-vue.ad6b35c4.js";
const _ = ["innerHTML"]
  , p = ["innerHTML"]
  , f = {
    __name: "BannersNoForm",
    props: {
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
        }
    },
    emits: ["inputForm"],
    setup(e, {emit: y}) {
        const n = e
          , a = s( () => ({
            backgroundImage: `url(${n.bgUrl})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }));
        return (v, k) => {
            const i = l;
            return o(),
            c("div", {
                class: d(["main-events-item", {
                    "main-events-item_full": e.active
                }]),
                style: m(g(a)),
                ref: e.addRef
            }, [t("div", {
                class: "main-events-item__heading wysiwyg-contaner",
                innerHTML: e.title
            }, null, 8, _), t("div", {
                class: "main-events-item__description wysiwyg-contaner",
                innerHTML: e.description
            }, null, 8, p), u(i, {
                tag: "a",
                icon: "arrow-long-right",
                text: e.linkTitle,
                path: e.targetLink,
                class: "main-events-item__link"
            }, null, 8, ["text", "path"])], 6)
        }
    }
}
  , x = r(f, [["__scopeId", "data-v-a0cc24ce"]]);
export {x as default};
