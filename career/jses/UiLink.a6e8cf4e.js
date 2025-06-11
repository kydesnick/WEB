import {_ as s, h as _, n as u} from "./entry.89c17163.js";
import {G as t, L as k, N as l, R as c, H as n, V as i, I as r} from "./swiper-vue.ad6b35c4.js";
const m = ["href"]
  , x = {
    class: "ui-link__text"
}
  , d = {
    class: "ui-link__text"
}
  , f = {
    __name: "UiLink",
    props: {
        icon: {
            type: String,
            default: null
        },
        text: {
            type: String,
            default: null
        },
        link: {
            type: String,
            default: null
        },
        extarnal: {
            type: Boolean,
            default: !1
        }
    },
    setup(e) {
        return (y, h) => {
            const a = _
              , o = u;
            return e.extarnal ? (t(),
            k("a", {
                key: 0,
                class: "ui-link",
                href: e.link
            }, [l("span", x, c(e.text), 1), e.icon ? (t(),
            n(a, {
                key: 0,
                class: "ui-link__icon",
                name: e.icon
            }, null, 8, ["name"])) : i("", !0)], 8, m)) : (t(),
            n(o, {
                key: 1,
                class: "ui-link",
                to: e.link,
                external: !1,
                "no-prefetch": ""
            }, {
                default: r( () => [l("span", d, c(e.text), 1), e.icon ? (t(),
                n(a, {
                    key: 0,
                    class: "ui-link__icon",
                    name: e.icon
                }, null, 8, ["name"])) : i("", !0)]),
                _: 1
            }, 8, ["to"]))
        }
    }
}
  , B = s(f, [["__scopeId", "data-v-09bd5634"]]);
export {B as _};
