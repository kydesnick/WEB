import {c as b} from "./CommonSeoMeta.91fe8066.js";
import {_ as T} from "./entry.89c17163.js";
import {a as s, f as C, n as A, G as t, L as e, O as u, P as d, R as E, u as x, U as G} from "./swiper-vue.ad6b35c4.js";
const w = ["data-glitch"]
  , D = ["data-index"]
  , N = ["data-index"]
  , B = ["data-index"]
  , H = {
    __name: "CommonTitle",
    props: {
        title: {
            type: String,
            default: ""
        },
        withGlitch: {
            type: Boolean,
            default: !0
        },
        delayLetter: {
            type: Number,
            default: .02
        },
        delayLetterWhite: {
            type: Number,
            default: .01
        },
        duration: {
            type: Number,
            default: .2
        }
    },
    emits: ["animation-complited"],
    setup(c, {emit: g}) {
        const a = c
          , i = s(null)
          , m = s([])
          , _ = s([])
          , p = s(!1);
        let r = null;
        C(async () => {
            m.value = a.title.split("<br/>").map(n => n.trim().split(" ").map(l => l.split(""))),
            await A(),
            _.value.forEach( (n, l) => {
                const o = b.timeline();
                o.to(n, {
                    opacity: 1,
                    color: "transparent",
                    "-webkit-text-stroke": "1px #fff",
                    delay: l * a.delayLetter,
                    duration: a.duration
                }),
                o.to(n, {
                    color: "#fff",
                    delay: l * a.delayLetterWhite,
                    duration: a.duration
                }),
                o.eventCallback("onComplete", L)
            }
            )
        }
        );
        function L() {
            r && clearTimeout(r),
            r = setTimeout( () => (p.value = !0,
            g("animation-complited"),
            i.value && (b.to(i.value, {
                duration: .5,
                ease: "bounce"
            }),
            i.value.innerHTML = a.title),
            clearTimeout(r)), 500)
        }
        return (n, l) => (t(),
        e("h2", {
            class: G(["common-title", {
                "common-title_glitch": x(p) && c.withGlitch
            }]),
            ref_key: "titleEl",
            ref: i,
            "data-glitch": c.title
        }, [(t(!0),
        e(u, null, d(x(m), (o, f) => (t(),
        e("span", {
            key: o,
            "data-index": f,
            class: "common-title__word"
        }, [(t(!0),
        e(u, null, d(o, (y, h) => (t(),
        e("span", {
            key: y,
            "data-index": h * f,
            class: "common-title__word"
        }, [(t(!0),
        e(u, null, d(y, (k, v) => (t(),
        e("span", {
            key: k + v,
            "data-index": v * h,
            ref_for: !0,
            ref_key: "lettersArr",
            ref: _,
            class: "common-title__letter"
        }, E(k), 9, B))), 128))], 8, N))), 128))], 8, D))), 128))], 10, w))
    }
}
  , W = T(H, [["__scopeId", "data-v-b22d8d61"]]);
export {W as _};
