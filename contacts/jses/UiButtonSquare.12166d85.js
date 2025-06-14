import {_ as o, h as s} from "./entry.4632cbf3.js";
import {e as u, G as t, L as c, H as i, V as _, U as m, u as f} from "./swiper-vue.ad6b35c4.js";
const l = {
    __name: "UiButtonSquare",
    props: {
        icon: {
            type: String,
            required: !1
        },
        modifier: {
            type: String,
            required: !1,
            default: () => "red"
        }
    },
    setup(e) {
        const r = e
          , n = u( () => {
            switch (r.modifier) {
            case "red":
                return "ui-button-square_red";
            case "grey":
                return "ui-button-square_grey";
            case "grey-opacity":
                return "ui-button-square_grey-opacity";
            default:
                return ""
            }
        }
        );
        return (d, p) => {
            const a = s;
            return t(),
            c("button", {
                class: m(["ui-button-square", f(n)])
            }, [e.icon ? (t(),
            i(a, {
                key: 0,
                name: e.icon,
                class: "ui-button-square__icon"
            }, null, 8, ["name"])) : _("", !0)], 2)
        }
    }
}
  , g = o(l, [["__scopeId", "data-v-0f5c6a2f"]]);
export {g as _};
