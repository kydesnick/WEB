import {r as fs, h as eu, g as tu, n as $r, i as Zt, u as W, v as Yd, t as xi, a as qe, o as Xd, b as aa, w as Cs, c as ru, d as Nr, e as Qe, f as nu, j as fc, k as St, l as Gd, s as no, m as Ti, p as ss, q as dc, x as hc, y as so, z as su, A as Kd, B as Jd, C as Qd, D as Zd, E as eh, K as th, S as ou, T as iu, F as rh, G as X, H as ot, I as Er, J as xt, L as me, M as pc, N as Xt, O as ds, P as wo, Q as au, R as In, U as sn, V as at, W as uu, X as nh, Y as sh, Z as oh, _ as ih, $ as _c, a0 as ah, a1 as uh, a2 as lh, a3 as ch, a4 as fh} from "./swiper-vue.ad6b35c4.js";
const dh = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
  , hh = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
  , ph = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;
function _h(n, e) {
    if (n === "__proto__" || n === "constructor" && e && typeof e == "object" && "prototype"in e) {
        gh(n);
        return
    }
    return e
}
function gh(n) {
    console.warn(`[destr] Dropping "${n}" key to prevent prototype pollution.`)
}
function oo(n, e={}) {
    if (typeof n != "string")
        return n;
    const t = n.trim();
    if (n[0] === '"' && n[n.length - 1] === '"')
        return t.slice(1, -1);
    if (t.length <= 9) {
        const r = t.toLowerCase();
        if (r === "true")
            return !0;
        if (r === "false")
            return !1;
        if (r === "undefined")
            return;
        if (r === "null")
            return null;
        if (r === "nan")
            return Number.NaN;
        if (r === "infinity")
            return Number.POSITIVE_INFINITY;
        if (r === "-infinity")
            return Number.NEGATIVE_INFINITY
    }
    if (!ph.test(n)) {
        if (e.strict)
            throw new SyntaxError("[destr] Invalid JSON");
        return n
    }
    try {
        if (dh.test(n) || hh.test(n)) {
            if (e.strict)
                throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(n, _h)
        }
        return JSON.parse(n)
    } catch (r) {
        if (e.strict)
            throw r;
        return n
    }
}
const gc = /#/g
  , mc = /&/g
  , mh = /\//g
  , Dh = /=/g
  , yh = /\?/g
  , Si = /\+/g
  , vh = /%5e/gi
  , wh = /%60/gi
  , Eh = /%7c/gi
  , Ch = /%20/gi
  , bh = /%252f/gi;
function Dc(n) {
    return encodeURI("" + n).replace(Eh, "|")
}
function ua(n) {
    return Dc(typeof n == "string" ? n : JSON.stringify(n)).replace(Si, "%2B").replace(Ch, "+").replace(gc, "%23").replace(mc, "%26").replace(wh, "`").replace(vh, "^")
}
function $i(n) {
    return ua(n).replace(Dh, "%3D")
}
function xh(n) {
    return Dc(n).replace(gc, "%23").replace(yh, "%3F").replace(bh, "%2F").replace(mc, "%26").replace(Si, "%2B")
}
function Gy(n) {
    return xh(n).replace(mh, "%2F")
}
function li(n="") {
    try {
        return decodeURIComponent("" + n)
    } catch {
        return "" + n
    }
}
function Th(n) {
    return li(n.replace(Si, " "))
}
function Sh(n) {
    return li(n.replace(Si, " "))
}
function yc(n="") {
    const e = {};
    n[0] === "?" && (n = n.slice(1));
    for (const t of n.split("&")) {
        const r = t.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2)
            continue;
        const s = Th(r[1]);
        if (s === "__proto__" || s === "constructor")
            continue;
        const o = Sh(r[2] || "");
        e[s] === void 0 ? e[s] = o : Array.isArray(e[s]) ? e[s].push(o) : e[s] = [e[s], o]
    }
    return e
}
function kh(n, e) {
    return (typeof e == "number" || typeof e == "boolean") && (e = String(e)),
    e ? Array.isArray(e) ? e.map(t => `${$i(n)}=${ua(t)}`).join("&") : `${$i(n)}=${ua(e)}` : $i(n)
}
function Ph(n) {
    return Object.keys(n).filter(e => n[e] !== void 0).map(e => kh(e, n[e])).filter(Boolean).join("&")
}
const Rh = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/
  , Ah = /^[\s\w\0+.-]{2,}:([/\\]{2})?/
  , Fh = /^([/\\]\s*){2,}[^/\\]/;
function bs(n, e={}) {
    return typeof e == "boolean" && (e = {
        acceptRelative: e
    }),
    e.strict ? Rh.test(n) : Ah.test(n) || (e.acceptRelative ? Fh.test(n) : !1)
}
const Oh = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
function Mh(n) {
    return !!n && Oh.test(n)
}
const Lh = /\/$|\/\?/;
function la(n="", e=!1) {
    return e ? Lh.test(n) : n.endsWith("/")
}
function lu(n="", e=!1) {
    if (!e)
        return (la(n) ? n.slice(0, -1) : n) || "/";
    if (!la(n, !0))
        return n || "/";
    const [t,...r] = n.split("?");
    return (t.slice(0, -1) || "/") + (r.length > 0 ? `?${r.join("?")}` : "")
}
function ci(n="", e=!1) {
    if (!e)
        return n.endsWith("/") ? n : n + "/";
    if (la(n, !0))
        return n || "/";
    const [t,...r] = n.split("?");
    return t + "/" + (r.length > 0 ? `?${r.join("?")}` : "")
}
function Ih(n="") {
    return n.startsWith("/")
}
function Nu(n="") {
    return Ih(n) ? n : "/" + n
}
function Bh(n, e) {
    if (wc(e) || bs(n))
        return n;
    const t = lu(e);
    return n.startsWith(t) ? n : Eo(t, n)
}
function Vu(n, e) {
    if (wc(e))
        return n;
    const t = lu(e);
    if (!n.startsWith(t))
        return n;
    const r = n.slice(t.length);
    return r[0] === "/" ? r : "/" + r
}
function vc(n, e) {
    const t = Co(n)
      , r = {
        ...yc(t.search),
        ...e
    };
    return t.search = Ph(r),
    Vh(t)
}
function wc(n) {
    return !n || n === "/"
}
function Hh(n) {
    return n && n !== "/"
}
const $h = /^\.?\//;
function Eo(n, ...e) {
    let t = n || "";
    for (const r of e.filter(s => Hh(s)))
        if (t) {
            const s = r.replace($h, "");
            t = ci(t) + s
        } else
            t = r;
    return t
}
function Nh(n, e, t={}) {
    return t.trailingSlash || (n = ci(n),
    e = ci(e)),
    t.leadingSlash || (n = Nu(n),
    e = Nu(e)),
    t.encoding || (n = li(n),
    e = li(e)),
    n === e
}
function Co(n="", e) {
    const t = n.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/);
    if (t) {
        const [,f,h=""] = t;
        return {
            protocol: f,
            pathname: h,
            href: f + h,
            auth: "",
            host: "",
            search: "",
            hash: ""
        }
    }
    if (!bs(n, {
        acceptRelative: !0
    }))
        return e ? Co(e + n) : ju(n);
    const [,r="",s,o=""] = n.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || []
      , [,i="",a=""] = o.match(/([^#/?]*)(.*)?/) || []
      , {pathname: l, search: u, hash: c} = ju(a.replace(/\/(?=[A-Za-z]:)/, ""));
    return {
        protocol: r,
        auth: s ? s.slice(0, Math.max(0, s.length - 1)) : "",
        host: i,
        pathname: l,
        search: u,
        hash: c
    }
}
function ju(n="") {
    const [e="",t="",r=""] = (n.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: e,
        search: t,
        hash: r
    }
}
function Vh(n) {
    const e = n.pathname || ""
      , t = n.search ? (n.search.startsWith("?") ? "" : "?") + n.search : ""
      , r = n.hash || ""
      , s = n.auth ? n.auth + "@" : ""
      , o = n.host || "";
    return (n.protocol ? n.protocol + "//" : "") + s + o + e + t + r
}
class jh extends Error {
    constructor(e, t) {
        super(e, t),
        this.name = "FetchError",
        t != null && t.cause && !this.cause && (this.cause = t.cause)
    }
}
function zh(n) {
    var l, u, c, f, h;
    const e = ((l = n.error) == null ? void 0 : l.message) || ((u = n.error) == null ? void 0 : u.toString()) || ""
      , t = ((c = n.request) == null ? void 0 : c.method) || ((f = n.options) == null ? void 0 : f.method) || "GET"
      , r = ((h = n.request) == null ? void 0 : h.url) || String(n.request) || "/"
      , s = `[${t}] ${JSON.stringify(r)}`
      , o = n.response ? `${n.response.status} ${n.response.statusText}` : "<no response>"
      , i = `${s}: ${o}${e ? ` ${e}` : ""}`
      , a = new jh(i,n.error ? {
        cause: n.error
    } : void 0);
    for (const d of ["request", "options", "response"])
        Object.defineProperty(a, d, {
            get() {
                return n[d]
            }
        });
    for (const [d,p] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]])
        Object.defineProperty(a, d, {
            get() {
                return n.response && n.response[p]
            }
        });
    return a
}
const Uh = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function zu(n="GET") {
    return Uh.has(n.toUpperCase())
}
function qh(n) {
    if (n === void 0)
        return !1;
    const e = typeof n;
    return e === "string" || e === "number" || e === "boolean" || e === null ? !0 : e !== "object" ? !1 : Array.isArray(n) ? !0 : n.buffer ? !1 : n.constructor && n.constructor.name === "Object" || typeof n.toJSON == "function"
}
const Wh = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"])
  , Yh = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function Xh(n="") {
    if (!n)
        return "json";
    const e = n.split(";").shift() || "";
    return Yh.test(e) ? "json" : Wh.has(e) || e.startsWith("text/") ? "text" : "blob"
}
function Gh(n, e, t=globalThis.Headers) {
    const r = {
        ...e,
        ...n
    };
    if (e != null && e.params && (n != null && n.params) && (r.params = {
        ...e == null ? void 0 : e.params,
        ...n == null ? void 0 : n.params
    }),
    e != null && e.query && (n != null && n.query) && (r.query = {
        ...e == null ? void 0 : e.query,
        ...n == null ? void 0 : n.query
    }),
    e != null && e.headers && (n != null && n.headers)) {
        r.headers = new t((e == null ? void 0 : e.headers) || {});
        for (const [s,o] of new t((n == null ? void 0 : n.headers) || {}))
            r.headers.set(s, o)
    }
    return r
}
const Kh = new Set([408, 409, 425, 429, 500, 502, 503, 504])
  , Jh = new Set([101, 204, 205, 304]);
function Ec(n={}) {
    const {fetch: e=globalThis.fetch, Headers: t=globalThis.Headers, AbortController: r=globalThis.AbortController} = n;
    async function s(a) {
        const l = a.error && a.error.name === "AbortError" && !a.options.timeout || !1;
        if (a.options.retry !== !1 && !l) {
            let c;
            typeof a.options.retry == "number" ? c = a.options.retry : c = zu(a.options.method) ? 0 : 1;
            const f = a.response && a.response.status || 500;
            if (c > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : Kh.has(f))) {
                const h = a.options.retryDelay || 0;
                return h > 0 && await new Promise(d => setTimeout(d, h)),
                o(a.request, {
                    ...a.options,
                    retry: c - 1,
                    timeout: a.options.timeout
                })
            }
        }
        const u = zh(a);
        throw Error.captureStackTrace && Error.captureStackTrace(u, o),
        u
    }
    const o = async function(l, u={}) {
        var h;
        const c = {
            request: l,
            options: Gh(u, n.defaults, t),
            response: void 0,
            error: void 0
        };
        if (c.options.method = (h = c.options.method) == null ? void 0 : h.toUpperCase(),
        c.options.onRequest && await c.options.onRequest(c),
        typeof c.request == "string" && (c.options.baseURL && (c.request = Bh(c.request, c.options.baseURL)),
        (c.options.query || c.options.params) && (c.request = vc(c.request, {
            ...c.options.params,
            ...c.options.query
        }))),
        c.options.body && zu(c.options.method) && (qh(c.options.body) ? (c.options.body = typeof c.options.body == "string" ? c.options.body : JSON.stringify(c.options.body),
        c.options.headers = new t(c.options.headers || {}),
        c.options.headers.has("content-type") || c.options.headers.set("content-type", "application/json"),
        c.options.headers.has("accept") || c.options.headers.set("accept", "application/json")) : ("pipeTo"in c.options.body && typeof c.options.body.pipeTo == "function" || typeof c.options.body.pipe == "function") && ("duplex"in c.options || (c.options.duplex = "half"))),
        !c.options.signal && c.options.timeout) {
            const d = new r;
            setTimeout( () => d.abort(), c.options.timeout),
            c.options.signal = d.signal
        }
        try {
            c.response = await e(c.request, c.options)
        } catch (d) {
            return c.error = d,
            c.options.onRequestError && await c.options.onRequestError(c),
            await s(c)
        }
        if (c.response.body && !Jh.has(c.response.status) && c.options.method !== "HEAD") {
            const d = (c.options.parseResponse ? "json" : c.options.responseType) || Xh(c.response.headers.get("content-type") || "");
            switch (d) {
            case "json":
                {
                    const p = await c.response.text()
                      , _ = c.options.parseResponse || oo;
                    c.response._data = _(p);
                    break
                }
            case "stream":
                {
                    c.response._data = c.response.body;
                    break
                }
            default:
                c.response._data = await c.response[d]()
            }
        }
        return c.options.onResponse && await c.options.onResponse(c),
        !c.options.ignoreResponseError && c.response.status >= 400 && c.response.status < 600 ? (c.options.onResponseError && await c.options.onResponseError(c),
        await s(c)) : c.response
    }
      , i = async function(l, u) {
        return (await o(l, u))._data
    };
    return i.raw = o,
    i.native = (...a) => e(...a),
    i.create = (a={}) => Ec({
        ...n,
        defaults: {
            ...n.defaults,
            ...a
        }
    }),
    i
}
const cu = function() {
    if (typeof globalThis < "u")
        return globalThis;
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("unable to locate global object")
}()
  , Qh = cu.fetch || ( () => Promise.reject(new Error("[ofetch] global.fetch is not supported!")))
  , Zh = cu.Headers
  , ep = cu.AbortController
  , tp = Ec({
    fetch: Qh,
    Headers: Zh,
    AbortController: ep
})
  , rp = tp
  , np = () => {
    var n;
    return ((n = window == null ? void 0 : window.__NUXT__) == null ? void 0 : n.config) || {}
}
  , fi = np().app
  , sp = () => fi.baseURL
  , op = () => fi.buildAssetsDir
  , ip = (...n) => Eo(Cc(), op(), ...n)
  , Cc = (...n) => {
    const e = fi.cdnURL || fi.baseURL;
    return n.length ? Eo(e, ...n) : e
}
;
globalThis.__buildAssetsURL = ip,
globalThis.__publicAssetsURL = Cc;
function ca(n, e={}, t) {
    for (const r in n) {
        const s = n[r]
          , o = t ? `${t}:${r}` : r;
        typeof s == "object" && s !== null ? ca(s, e, o) : typeof s == "function" && (e[o] = s)
    }
    return e
}
const ap = {
    run: n => n()
}
  , up = () => ap
  , bc = typeof console.createTask < "u" ? console.createTask : up;
function lp(n, e) {
    const t = e.shift()
      , r = bc(t);
    return n.reduce( (s, o) => s.then( () => r.run( () => o(...e))), Promise.resolve())
}
function cp(n, e) {
    const t = e.shift()
      , r = bc(t);
    return Promise.all(n.map(s => r.run( () => s(...e))))
}
function Ni(n, e) {
    for (const t of [...n])
        t(e)
}
class fp {
    constructor() {
        this._hooks = {},
        this._before = void 0,
        this._after = void 0,
        this._deprecatedMessages = void 0,
        this._deprecatedHooks = {},
        this.hook = this.hook.bind(this),
        this.callHook = this.callHook.bind(this),
        this.callHookWith = this.callHookWith.bind(this)
    }
    hook(e, t, r={}) {
        if (!e || typeof t != "function")
            return () => {}
            ;
        const s = e;
        let o;
        for (; this._deprecatedHooks[e]; )
            o = this._deprecatedHooks[e],
            e = o.to;
        if (o && !r.allowDeprecated) {
            let i = o.message;
            i || (i = `${s} hook has been deprecated` + (o.to ? `, please use ${o.to}` : "")),
            this._deprecatedMessages || (this._deprecatedMessages = new Set),
            this._deprecatedMessages.has(i) || (console.warn(i),
            this._deprecatedMessages.add(i))
        }
        if (!t.name)
            try {
                Object.defineProperty(t, "name", {
                    get: () => "_" + e.replace(/\W+/g, "_") + "_hook_cb",
                    configurable: !0
                })
            } catch {}
        return this._hooks[e] = this._hooks[e] || [],
        this._hooks[e].push(t),
        () => {
            t && (this.removeHook(e, t),
            t = void 0)
        }
    }
    hookOnce(e, t) {
        let r, s = (...o) => (typeof r == "function" && r(),
        r = void 0,
        s = void 0,
        t(...o));
        return r = this.hook(e, s),
        r
    }
    removeHook(e, t) {
        if (this._hooks[e]) {
            const r = this._hooks[e].indexOf(t);
            r !== -1 && this._hooks[e].splice(r, 1),
            this._hooks[e].length === 0 && delete this._hooks[e]
        }
    }
    deprecateHook(e, t) {
        this._deprecatedHooks[e] = typeof t == "string" ? {
            to: t
        } : t;
        const r = this._hooks[e] || [];
        delete this._hooks[e];
        for (const s of r)
            this.hook(e, s)
    }
    deprecateHooks(e) {
        Object.assign(this._deprecatedHooks, e);
        for (const t in e)
            this.deprecateHook(t, e[t])
    }
    addHooks(e) {
        const t = ca(e)
          , r = Object.keys(t).map(s => this.hook(s, t[s]));
        return () => {
            for (const s of r.splice(0, r.length))
                s()
        }
    }
    removeHooks(e) {
        const t = ca(e);
        for (const r in t)
            this.removeHook(r, t[r])
    }
    removeAllHooks() {
        for (const e in this._hooks)
            delete this._hooks[e]
    }
    callHook(e, ...t) {
        return t.unshift(e),
        this.callHookWith(lp, e, ...t)
    }
    callHookParallel(e, ...t) {
        return t.unshift(e),
        this.callHookWith(cp, e, ...t)
    }
    callHookWith(e, t, ...r) {
        const s = this._before || this._after ? {
            name: t,
            args: r,
            context: {}
        } : void 0;
        this._before && Ni(this._before, s);
        const o = e(t in this._hooks ? [...this._hooks[t]] : [], r);
        return o instanceof Promise ? o.finally( () => {
            this._after && s && Ni(this._after, s)
        }
        ) : (this._after && s && Ni(this._after, s),
        o)
    }
    beforeEach(e) {
        return this._before = this._before || [],
        this._before.push(e),
        () => {
            if (this._before !== void 0) {
                const t = this._before.indexOf(e);
                t !== -1 && this._before.splice(t, 1)
            }
        }
    }
    afterEach(e) {
        return this._after = this._after || [],
        this._after.push(e),
        () => {
            if (this._after !== void 0) {
                const t = this._after.indexOf(e);
                t !== -1 && this._after.splice(t, 1)
            }
        }
    }
}
function xc() {
    return new fp
}
function dp(n={}) {
    let e, t = !1;
    const r = i => {
        if (e && e !== i)
            throw new Error("Context conflict")
    }
    ;
    let s;
    if (n.asyncContext) {
        const i = n.AsyncLocalStorage || globalThis.AsyncLocalStorage;
        i ? s = new i : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
    }
    const o = () => {
        if (s && e === void 0) {
            const i = s.getStore();
            if (i !== void 0)
                return i
        }
        return e
    }
    ;
    return {
        use: () => {
            const i = o();
            if (i === void 0)
                throw new Error("Context is not available");
            return i
        }
        ,
        tryUse: () => o(),
        set: (i, a) => {
            a || r(i),
            e = i,
            t = !0
        }
        ,
        unset: () => {
            e = void 0,
            t = !1
        }
        ,
        call: (i, a) => {
            r(i),
            e = i;
            try {
                return s ? s.run(i, a) : a()
            } finally {
                t || (e = void 0)
            }
        }
        ,
        async callAsync(i, a) {
            e = i;
            const l = () => {
                e = i
            }
              , u = () => e === i ? l : void 0;
            fa.add(u);
            try {
                const c = s ? s.run(i, a) : a();
                return t || (e = void 0),
                await c
            } finally {
                fa.delete(u)
            }
        }
    }
}
function hp(n={}) {
    const e = {};
    return {
        get(t, r={}) {
            return e[t] || (e[t] = dp({
                ...n,
                ...r
            })),
            e[t],
            e[t]
        }
    }
}
const di = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}
  , Uu = "__unctx__"
  , pp = di[Uu] || (di[Uu] = hp())
  , _p = (n, e={}) => pp.get(n, e)
  , qu = "__unctx_async_handlers__"
  , fa = di[qu] || (di[qu] = new Set);
function io(n) {
    const e = [];
    for (const s of fa) {
        const o = s();
        o && e.push(o)
    }
    const t = () => {
        for (const s of e)
            s()
    }
    ;
    let r = n();
    return r && typeof r == "object" && "catch"in r && (r = r.catch(s => {
        throw t(),
        s
    }
    )),
    [r, t]
}
const Tc = _p("nuxt-app", {
    asyncContext: !1
})
  , gp = "__nuxt_plugin";
function mp(n) {
    let e = 0;
    const t = {
        provide: void 0,
        globalName: "nuxt",
        versions: {
            get nuxt() {
                return "3.7.4"
            },
            get vue() {
                return t.vueApp.version
            }
        },
        payload: fs({
            data: {},
            state: {},
            _errors: {},
            ...window.__NUXT__ ?? {}
        }),
        static: {
            data: {}
        },
        runWithContext: s => vp(t, s),
        isHydrating: !0,
        deferHydration() {
            if (!t.isHydrating)
                return () => {}
                ;
            e++;
            let s = !1;
            return () => {
                if (!s && (s = !0,
                e--,
                e === 0))
                    return t.isHydrating = !1,
                    t.callHook("app:suspense:resolve")
            }
        },
        _asyncDataPromises: {},
        _asyncData: {},
        _payloadRevivers: {},
        ...n
    };
    t.hooks = xc(),
    t.hook = t.hooks.hook,
    t.callHook = t.hooks.callHook,
    t.provide = (s, o) => {
        const i = "$" + s;
        Ro(t, i, o),
        Ro(t.vueApp.config.globalProperties, i, o)
    }
    ,
    Ro(t.vueApp, "$nuxt", t),
    Ro(t.vueApp.config.globalProperties, "$nuxt", t);
    {
        window.addEventListener("nuxt.preloadError", o => {
            t.callHook("app:chunkError", {
                error: o.payload
            })
        }
        ),
        window.useNuxtApp = window.useNuxtApp || De;
        const s = t.hook("app:error", (...o) => {
            console.error("[nuxt] error caught during app initialization", ...o)
        }
        );
        t.hook("app:mounted", s)
    }
    const r = fs(t.payload.config);
    return t.provide("config", r),
    t
}
async function Dp(n, e) {
    if (e.hooks && n.hooks.addHooks(e.hooks),
    typeof e == "function") {
        const {provide: t} = await n.runWithContext( () => e(n)) || {};
        if (t && typeof t == "object")
            for (const r in t)
                n.provide(r, t[r])
    }
}
async function yp(n, e) {
    const t = []
      , r = [];
    for (const s of e) {
        const o = Dp(n, s);
        s.parallel ? t.push(o.catch(i => r.push(i))) : await o
    }
    if (await Promise.all(t),
    r.length)
        throw r[0]
}
/*! @__NO_SIDE_EFFECTS__ */
function Tr(n) {
    return typeof n == "function" ? n : (delete n.name,
    Object.assign(n.setup || ( () => {}
    ), n, {
        [gp]: !0
    }))
}
function vp(n, e, t) {
    const r = () => t ? e(...t) : e();
    return Tc.set(n),
    n.vueApp.runWithContext(r)
}
/*! @__NO_SIDE_EFFECTS__ */
function De() {
    var e;
    let n;
    if (eu() && (n = (e = tu()) == null ? void 0 : e.appContext.app.$nuxt),
    n = n || Tc.tryUse(),
    !n)
        throw new Error("[nuxt] instance unavailable");
    return n
}
/*! @__NO_SIDE_EFFECTS__ */
function xs() {
    return De().$config
}
function Ro(n, e, t) {
    Object.defineProperty(n, e, {
        get: () => t
    })
}
const wp = "modulepreload"
  , Ep = function(n, e) {
    return n[0] === "." ? new URL(n,e).href : n
}
  , Wu = {}
  , Cp = function(e, t, r) {
    if (!t || t.length === 0)
        return e();
    const s = document.getElementsByTagName("link");
    return Promise.all(t.map(o => {
        if (o = Ep(o, r),
        o in Wu)
            return;
        Wu[o] = !0;
        const i = o.endsWith(".css")
          , a = i ? '[rel="stylesheet"]' : "";
        if (!!r)
            for (let c = s.length - 1; c >= 0; c--) {
                const f = s[c];
                if (f.href === o && (!i || f.rel === "stylesheet"))
                    return
            }
        else if (document.querySelector(`link[href="${o}"]${a}`))
            return;
        const u = document.createElement("link");
        if (u.rel = i ? "stylesheet" : wp,
        i || (u.as = "script",
        u.crossOrigin = ""),
        u.href = o,
        document.head.appendChild(u),
        i)
            return new Promise( (c, f) => {
                u.addEventListener("load", c),
                u.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${o}`)))
            }
            )
    }
    )).then( () => e()).catch(o => {
        const i = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (i.payload = o,
        window.dispatchEvent(i),
        !i.defaultPrevented)
            throw o
    }
    )
}
  , M = (...n) => Cp(...n).catch(e => {
    const t = new Event("nuxt.preloadError");
    throw t.payload = e,
    window.dispatchEvent(t),
    e
}
)
  , bp = -1
  , xp = -2
  , Tp = -3
  , Sp = -4
  , kp = -5
  , Pp = -6;
function Rp(n, e) {
    return Ap(JSON.parse(n), e)
}
function Ap(n, e) {
    if (typeof n == "number")
        return s(n, !0);
    if (!Array.isArray(n) || n.length === 0)
        throw new Error("Invalid input");
    const t = n
      , r = Array(t.length);
    function s(o, i=!1) {
        if (o === bp)
            return;
        if (o === Tp)
            return NaN;
        if (o === Sp)
            return 1 / 0;
        if (o === kp)
            return -1 / 0;
        if (o === Pp)
            return -0;
        if (i)
            throw new Error("Invalid input");
        if (o in r)
            return r[o];
        const a = t[o];
        if (!a || typeof a != "object")
            r[o] = a;
        else if (Array.isArray(a))
            if (typeof a[0] == "string") {
                const l = a[0]
                  , u = e == null ? void 0 : e[l];
                if (u)
                    return r[o] = u(s(a[1]));
                switch (l) {
                case "Date":
                    r[o] = new Date(a[1]);
                    break;
                case "Set":
                    const c = new Set;
                    r[o] = c;
                    for (let d = 1; d < a.length; d += 1)
                        c.add(s(a[d]));
                    break;
                case "Map":
                    const f = new Map;
                    r[o] = f;
                    for (let d = 1; d < a.length; d += 2)
                        f.set(s(a[d]), s(a[d + 1]));
                    break;
                case "RegExp":
                    r[o] = new RegExp(a[1],a[2]);
                    break;
                case "Object":
                    r[o] = Object(a[1]);
                    break;
                case "BigInt":
                    r[o] = BigInt(a[1]);
                    break;
                case "null":
                    const h = Object.create(null);
                    r[o] = h;
                    for (let d = 1; d < a.length; d += 2)
                        h[a[d]] = s(a[d + 1]);
                    break;
                default:
                    throw new Error(`Unknown type ${l}`)
                }
            } else {
                const l = new Array(a.length);
                r[o] = l;
                for (let u = 0; u < a.length; u += 1) {
                    const c = a[u];
                    c !== xp && (l[u] = s(c))
                }
            }
        else {
            const l = {};
            r[o] = l;
            for (const u in a) {
                const c = a[u];
                l[u] = s(c)
            }
        }
        return r[o]
    }
    return s(0)
}
function Fp(n) {
    return Array.isArray(n) ? n : [n]
}
const Op = ["title", "titleTemplate", "script", "style", "noscript"]
  , Jo = ["base", "meta", "link", "style", "script", "noscript"]
  , Mp = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]
  , Lp = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]
  , Sc = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"]
  , Ip = typeof window < "u";
function kc(n) {
    let e = 9;
    for (let t = 0; t < n.length; )
        e = Math.imul(e ^ n.charCodeAt(t++), 9 ** 9);
    return ((e ^ e >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}
function Yu(n) {
    return n._h || kc(n._d ? n._d : `${n.tag}:${n.textContent || n.innerHTML || ""}:${Object.entries(n.props).map( ([e,t]) => `${e}:${String(t)}`).join(",")}`)
}
function Pc(n, e) {
    const {props: t, tag: r} = n;
    if (Lp.includes(r))
        return r;
    if (r === "link" && t.rel === "canonical")
        return "canonical";
    if (t.charset)
        return "charset";
    const s = ["id"];
    r === "meta" && s.push("name", "property", "http-equiv");
    for (const o of s)
        if (typeof t[o] < "u") {
            const i = String(t[o]);
            return e && !e(i) ? !1 : `${r}:${o}:${i}`
        }
    return !1
}
function Xu(n, e) {
    return n == null ? e || null : typeof n == "function" ? n(e) : n
}
async function Bp(n, e, t) {
    const r = {
        tag: n,
        props: await Rc(typeof e == "object" && typeof e != "function" && !(e instanceof Promise) ? {
            ...e
        } : {
            [["script", "noscript", "style"].includes(n) ? "innerHTML" : "textContent"]: e
        }, ["templateParams", "titleTemplate"].includes(n))
    };
    return Sc.forEach(s => {
        const o = typeof r.props[s] < "u" ? r.props[s] : t[s];
        typeof o < "u" && ((!["innerHTML", "textContent"].includes(s) || Op.includes(r.tag)) && (r[s] = o),
        delete r.props[s])
    }
    ),
    r.props.body && (r.tagPosition = "bodyClose",
    delete r.props.body),
    r.props.children && (r.innerHTML = r.props.children,
    delete r.props.children),
    r.tag === "script" && (typeof r.innerHTML == "object" && (r.innerHTML = JSON.stringify(r.innerHTML),
    r.props.type = r.props.type || "application/json"),
    r.innerHTML && ["application/ld+json", "application/json"].includes(r.props.type) && (r.innerHTML = r.innerHTML.replace(/</g, "\\u003C"))),
    Array.isArray(r.props.content) ? r.props.content.map(s => ({
        ...r,
        props: {
            ...r.props,
            content: s
        }
    })) : r
}
function Hp(n) {
    return typeof n == "object" && !Array.isArray(n) && (n = Object.keys(n).filter(e => n[e])),
    (Array.isArray(n) ? n.join(" ") : n).split(" ").filter(e => e.trim()).filter(Boolean).join(" ")
}
async function Rc(n, e) {
    for (const t of Object.keys(n)) {
        if (t === "class") {
            n[t] = Hp(n[t]);
            continue
        }
        if (n[t]instanceof Promise && (n[t] = await n[t]),
        !e && !Sc.includes(t)) {
            const r = String(n[t])
              , s = t.startsWith("data-");
            r === "true" || r === "" ? n[t] = s ? "true" : !0 : n[t] || (s && r === "false" ? n[t] = "false" : delete n[t])
        }
    }
    return n
}
const $p = 10;
async function Np(n) {
    const e = [];
    return Object.entries(n.resolvedInput).filter( ([t,r]) => typeof r < "u" && Mp.includes(t)).forEach( ([t,r]) => {
        const s = Fp(r);
        e.push(...s.map(o => Bp(t, o, n)).flat())
    }
    ),
    (await Promise.all(e)).flat().filter(Boolean).map( (t, r) => (t._e = n._i,
    n.mode && (t._m = n.mode),
    t._p = (n._i << $p) + r,
    t))
}
const Gu = {
    base: -10,
    title: 10
}
  , Ku = {
    critical: -80,
    high: -10,
    low: 20
};
function hi(n) {
    let e = 100;
    const t = n.tagPriority;
    return typeof t == "number" ? t : (n.tag === "meta" ? (n.props["http-equiv"] === "content-security-policy" && (e = -30),
    n.props.charset && (e = -20),
    n.props.name === "viewport" && (e = -15)) : n.tag === "link" && n.props.rel === "preconnect" ? e = 20 : n.tag in Gu && (e = Gu[n.tag]),
    typeof t == "string" && t in Ku ? e + Ku[t] : e)
}
const Vp = [{
    prefix: "before:",
    offset: -1
}, {
    prefix: "after:",
    offset: 1
}]
  , Ur = "%separator";
function wn(n, e, t) {
    if (typeof n != "string" || !n.includes("%"))
        return n;
    function r(i) {
        let a;
        return ["s", "pageTitle"].includes(i) ? a = e.pageTitle : i.includes(".") ? a = i.split(".").reduce( (l, u) => l && l[u] || void 0, e) : a = e[i],
        typeof a < "u" ? (a || "").replace(/"/g, '\\"') : !1
    }
    let s = n;
    try {
        s = decodeURI(n)
    } catch {}
    return (s.match(/%(\w+\.+\w+)|%(\w+)/g) || []).sort().reverse().forEach(i => {
        const a = r(i.slice(1));
        typeof a == "string" && (n = n.replace(new RegExp(`\\${i}(\\W|$)`,"g"), (l, u) => `${a}${u}`).trim())
    }
    ),
    n.includes(Ur) && (n.endsWith(Ur) && (n = n.slice(0, -Ur.length).trim()),
    n.startsWith(Ur) && (n = n.slice(Ur.length).trim()),
    n = n.replace(new RegExp(`\\${Ur}\\s*\\${Ur}`,"g"), Ur),
    n = wn(n, {
        separator: t
    }, t)),
    n
}
async function jp(n) {
    const e = {
        tag: n.tagName.toLowerCase(),
        props: await Rc(n.getAttributeNames().reduce( (t, r) => ({
            ...t,
            [r]: n.getAttribute(r)
        }), {})),
        innerHTML: n.innerHTML
    };
    return e._d = Pc(e),
    e
}
async function Ac(n, e={}) {
    var c;
    const t = e.document || n.resolvedOptions.document;
    if (!t)
        return;
    const r = {
        shouldRender: n.dirty,
        tags: []
    };
    if (await n.hooks.callHook("dom:beforeRender", r),
    !r.shouldRender)
        return;
    const s = (await n.resolveTags()).map(f => ({
        tag: f,
        id: Jo.includes(f.tag) ? Yu(f) : f.tag,
        shouldRender: !0
    }));
    let o = n._dom;
    if (!o) {
        o = {
            elMap: {
                htmlAttrs: t.documentElement,
                bodyAttrs: t.body
            }
        };
        for (const f of ["body", "head"]) {
            const h = (c = t == null ? void 0 : t[f]) == null ? void 0 : c.children;
            for (const d of [...h].filter(p => Jo.includes(p.tagName.toLowerCase())))
                o.elMap[d.getAttribute("data-hid") || Yu(await jp(d))] = d
        }
    }
    o.pendingSideEffects = {
        ...o.sideEffects || {}
    },
    o.sideEffects = {};
    function i(f, h, d) {
        const p = `${f}:${h}`;
        o.sideEffects[p] = d,
        delete o.pendingSideEffects[p]
    }
    function a({id: f, $el: h, tag: d}) {
        const p = d.tag.endsWith("Attrs");
        o.elMap[f] = h,
        p || (["textContent", "innerHTML"].forEach(_ => {
            d[_] && d[_] !== h[_] && (h[_] = d[_])
        }
        ),
        i(f, "el", () => {
            o.elMap[f].remove(),
            delete o.elMap[f]
        }
        )),
        Object.entries(d.props).forEach( ([_,g]) => {
            const m = `attr:${_}`;
            if (_ === "class")
                for (const D of (g || "").split(" ").filter(Boolean))
                    p && i(f, `${m}:${D}`, () => h.classList.remove(D)),
                    !h.classList.contains(D) && h.classList.add(D);
            else
                h.getAttribute(_) !== g && h.setAttribute(_, g === !0 ? "" : String(g)),
                p && i(f, m, () => h.removeAttribute(_))
        }
        )
    }
    const l = []
      , u = {
        bodyClose: void 0,
        bodyOpen: void 0,
        head: void 0
    };
    for (const f of s) {
        const {tag: h, shouldRender: d, id: p} = f;
        if (d) {
            if (h.tag === "title") {
                t.title = h.textContent;
                continue
            }
            f.$el = f.$el || o.elMap[p],
            f.$el ? a(f) : Jo.includes(h.tag) && l.push(f)
        }
    }
    for (const f of l) {
        const h = f.tag.tagPosition || "head";
        f.$el = t.createElement(f.tag.tag),
        a(f),
        u[h] = u[h] || t.createDocumentFragment(),
        u[h].appendChild(f.$el)
    }
    for (const f of s)
        await n.hooks.callHook("dom:renderTag", f, t, i);
    u.head && t.head.appendChild(u.head),
    u.bodyOpen && t.body.insertBefore(u.bodyOpen, t.body.firstChild),
    u.bodyClose && t.body.appendChild(u.bodyClose),
    Object.values(o.pendingSideEffects).forEach(f => f()),
    n._dom = o,
    n.dirty = !1,
    await n.hooks.callHook("dom:rendered", {
        renders: s
    })
}
async function zp(n, e={}) {
    const t = e.delayFn || (r => setTimeout(r, 10));
    return n._domUpdatePromise = n._domUpdatePromise || new Promise(r => t(async () => {
        await Ac(n, e),
        delete n._domUpdatePromise,
        r()
    }
    ))
}
function Up(n) {
    return e => {
        var r, s;
        const t = ((s = (r = e.resolvedOptions.document) == null ? void 0 : r.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : s.innerHTML) || !1;
        return t && e.push(JSON.parse(t)),
        {
            mode: "client",
            hooks: {
                "entries:updated": function(o) {
                    zp(o, n)
                }
            }
        }
    }
}
const qp = ["templateParams", "htmlAttrs", "bodyAttrs"]
  , Wp = {
    hooks: {
        "tag:normalise": function({tag: n}) {
            ["hid", "vmid", "key"].forEach(r => {
                n.props[r] && (n.key = n.props[r],
                delete n.props[r])
            }
            );
            const t = Pc(n) || (n.key ? `${n.tag}:${n.key}` : !1);
            t && (n._d = t)
        },
        "tags:resolve": function(n) {
            const e = {};
            n.tags.forEach(r => {
                const s = (r.key ? `${r.tag}:${r.key}` : r._d) || r._p
                  , o = e[s];
                if (o) {
                    let a = r == null ? void 0 : r.tagDuplicateStrategy;
                    if (!a && qp.includes(r.tag) && (a = "merge"),
                    a === "merge") {
                        const l = o.props;
                        ["class", "style"].forEach(u => {
                            r.props[u] && l[u] && (u === "style" && !l[u].endsWith(";") && (l[u] += ";"),
                            r.props[u] = `${l[u]} ${r.props[u]}`)
                        }
                        ),
                        e[s].props = {
                            ...l,
                            ...r.props
                        };
                        return
                    } else if (r._e === o._e) {
                        o._duped = o._duped || [],
                        r._d = `${o._d}:${o._duped.length + 1}`,
                        o._duped.push(r);
                        return
                    } else if (hi(r) > hi(o))
                        return
                }
                const i = Object.keys(r.props).length + (r.innerHTML ? 1 : 0) + (r.textContent ? 1 : 0);
                if (Jo.includes(r.tag) && i === 0) {
                    delete e[s];
                    return
                }
                e[s] = r
            }
            );
            const t = [];
            Object.values(e).forEach(r => {
                const s = r._duped;
                delete r._duped,
                t.push(r),
                s && t.push(...s)
            }
            ),
            n.tags = t,
            n.tags = n.tags.filter(r => !(r.tag === "meta" && (r.props.name || r.props.property) && !r.props.content))
        }
    }
}
  , Yp = {
    mode: "server",
    hooks: {
        "tags:resolve": function(n) {
            const e = {};
            n.tags.filter(t => ["titleTemplate", "templateParams", "title"].includes(t.tag) && t._m === "server").forEach(t => {
                e[t.tag] = t.tag.startsWith("title") ? t.textContent : t.props
            }
            ),
            Object.keys(e).length && n.tags.push({
                tag: "script",
                innerHTML: JSON.stringify(e),
                props: {
                    id: "unhead:payload",
                    type: "application/json"
                }
            })
        }
    }
}
  , Ju = ["script", "link", "bodyAttrs"];
function Qu(n) {
    const e = {}
      , t = {};
    return Object.entries(n.props).forEach( ([r,s]) => {
        r.startsWith("on") && typeof s == "function" ? t[r] = s : e[r] = s
    }
    ),
    {
        props: e,
        eventHandlers: t
    }
}
const Xp = {
    hooks: {
        "ssr:render": function(n) {
            n.tags = n.tags.map(e => (!Ju.includes(e.tag) || !Object.entries(e.props).find( ([t,r]) => t.startsWith("on") && typeof r == "function") || (e.props = Qu(e).props),
            e))
        },
        "tags:resolve": function(n) {
            n.tags = n.tags.map(e => {
                if (!Ju.includes(e.tag))
                    return e;
                const {props: t, eventHandlers: r} = Qu(e);
                return Object.keys(r).length && (e.props = t,
                e._eventHandlers = r),
                e
            }
            )
        },
        "dom:renderTag": function(n, e, t) {
            if (!n.tag._eventHandlers)
                return;
            const r = n.tag.tag === "bodyAttrs" ? e.defaultView : n.$el;
            Object.entries(n.tag._eventHandlers).forEach( ([s,o]) => {
                const i = `${n.tag._d || n.tag._p}:${s}`
                  , a = s.slice(2).toLowerCase()
                  , l = `data-h-${a}`;
                if (t(n.id, i, () => {}
                ),
                n.$el.hasAttribute(l))
                    return;
                const u = o;
                n.$el.setAttribute(l, ""),
                r.addEventListener(a, u),
                n.entry && t(n.id, i, () => {
                    r.removeEventListener(a, u),
                    n.$el.removeAttribute(l)
                }
                )
            }
            )
        }
    }
}
  , Gp = ["link", "style", "script", "noscript"]
  , Kp = {
    hooks: {
        "tag:normalise": ({tag: n}) => {
            n.key && Gp.includes(n.tag) && (n.props["data-hid"] = n._h = kc(n.key))
        }
    }
}
  , Jp = {
    hooks: {
        "tags:resolve": n => {
            const e = t => {
                var r;
                return (r = n.tags.find(s => s._d === t)) == null ? void 0 : r._p
            }
            ;
            for (const {prefix: t, offset: r} of Vp)
                for (const s of n.tags.filter(o => typeof o.tagPriority == "string" && o.tagPriority.startsWith(t))) {
                    const o = e(s.tagPriority.replace(t, ""));
                    typeof o < "u" && (s._p = o + r)
                }
            n.tags.sort( (t, r) => t._p - r._p).sort( (t, r) => hi(t) - hi(r))
        }
    }
}
  , Qp = {
    hooks: {
        "tags:resolve": n => {
            var i;
            const {tags: e} = n
              , t = (i = e.find(a => a.tag === "title")) == null ? void 0 : i.textContent
              , r = e.findIndex(a => a.tag === "templateParams")
              , s = r !== -1 ? e[r].props : {}
              , o = s.separator || "|";
            delete s.separator,
            s.pageTitle = wn(s.pageTitle || t || "", s, o);
            for (const a of e)
                a.processTemplateParams !== !1 && (["titleTemplate", "title"].includes(a.tag) && typeof a.textContent == "string" ? a.textContent = wn(a.textContent, s, o) : a.tag === "meta" && typeof a.props.content == "string" ? a.props.content = wn(a.props.content, s, o) : a.tag === "link" && typeof a.props.href == "string" ? a.props.href = wn(a.props.href, s, o) : a.processTemplateParams === !0 && (a.innerHTML ? a.innerHTML = wn(a.innerHTML, s, o) : a.textContent && (a.textContent = wn(a.textContent, s, o))));
            n.tags = e.filter(a => a.tag !== "templateParams")
        }
    }
}
  , Zp = {
    hooks: {
        "tags:resolve": n => {
            const {tags: e} = n;
            let t = e.findIndex(s => s.tag === "titleTemplate");
            const r = e.findIndex(s => s.tag === "title");
            if (r !== -1 && t !== -1) {
                const s = Xu(e[t].textContent, e[r].textContent);
                s !== null ? e[r].textContent = s || e[r].textContent : delete e[r]
            } else if (t !== -1) {
                const s = Xu(e[t].textContent);
                s !== null && (e[t].textContent = s,
                e[t].tag = "title",
                t = -1)
            }
            t !== -1 && delete e[t],
            n.tags = e.filter(Boolean)
        }
    }
};
let Fc;
function e_(n={}) {
    const e = t_(n);
    return e.use(Up()),
    Fc = e
}
function Zu(n, e) {
    return !n || n === "server" && e || n === "client" && !e
}
function t_(n={}) {
    const e = xc();
    e.addHooks(n.hooks || {}),
    n.document = n.document || (Ip ? document : void 0);
    const t = !n.document;
    n.plugins = [Wp, Yp, Xp, Kp, Jp, Qp, Zp, ...(n == null ? void 0 : n.plugins) || []];
    const r = () => {
        i.dirty = !0,
        e.callHook("entries:updated", i)
    }
    ;
    let s = 0
      , o = [];
    const i = {
        dirty: !1,
        resolvedOptions: n,
        hooks: e,
        headEntries() {
            return o
        },
        use(a) {
            const l = typeof a == "function" ? a(i) : a;
            Zu(l.mode, t) && e.addHooks(l.hooks || {})
        },
        push(a, l) {
            l == null || delete l.head;
            const u = {
                _i: s++,
                input: a,
                ...l
            };
            return Zu(u.mode, t) && (o.push(u),
            r()),
            {
                dispose() {
                    o = o.filter(c => c._i !== u._i),
                    e.callHook("entries:updated", i),
                    r()
                },
                patch(c) {
                    o = o.map(f => (f._i === u._i && (f.input = u.input = c),
                    f)),
                    r()
                }
            }
        },
        async resolveTags() {
            const a = {
                tags: [],
                entries: [...o]
            };
            await e.callHook("entries:resolve", a);
            for (const l of a.entries) {
                const u = l.resolvedInput || l.input;
                if (l.resolvedInput = await (l.transform ? l.transform(u) : u),
                l.resolvedInput)
                    for (const c of await Np(l)) {
                        const f = {
                            tag: c,
                            entry: l,
                            resolvedOptions: i.resolvedOptions
                        };
                        await e.callHook("tag:normalise", f),
                        a.tags.push(f.tag)
                    }
            }
            return await e.callHook("tags:beforeResolve", a),
            await e.callHook("tags:resolve", a),
            a.tags
        },
        ssr: t
    };
    return n.plugins.forEach(a => i.use(a)),
    i.hooks.callHook("init", i),
    i
}
function r_() {
    return Fc
}
const n_ = Yd.startsWith("3");
function s_(n) {
    return typeof n == "function" ? n() : W(n)
}
function da(n, e="") {
    if (n instanceof Promise)
        return n;
    const t = s_(n);
    return !n || !t ? t : Array.isArray(t) ? t.map(r => da(r, e)) : typeof t == "object" ? Object.fromEntries(Object.entries(t).map( ([r,s]) => r === "titleTemplate" || r.startsWith("on") ? [r, W(s)] : [r, da(s, r)])) : t
}
const o_ = {
    hooks: {
        "entries:resolve": function(n) {
            for (const e of n.entries)
                e.resolvedInput = da(e.input)
        }
    }
}
  , Oc = "usehead";
function i_(n) {
    return {
        install(t) {
            n_ && (t.config.globalProperties.$unhead = n,
            t.config.globalProperties.$head = n,
            t.provide(Oc, n))
        }
    }.install
}
function a_(n={}) {
    n.domDelayFn = n.domDelayFn || (t => $r( () => setTimeout( () => t(), 0)));
    const e = e_(n);
    return e.use(o_),
    e.install = i_(e),
    e
}
const ha = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , pa = "__unhead_injection_handler__";
function u_(n) {
    ha[pa] = n
}
function Ky() {
    if (pa in ha)
        return ha[pa]();
    const n = Zt(Oc);
    return n || r_()
}
function Vi(n) {
    return n !== null && typeof n == "object"
}
function _a(n, e, t=".", r) {
    if (!Vi(e))
        return _a(n, {}, t, r);
    const s = Object.assign({}, e);
    for (const o in n) {
        if (o === "__proto__" || o === "constructor")
            continue;
        const i = n[o];
        i != null && (r && r(s, o, i, t) || (Array.isArray(i) && Array.isArray(s[o]) ? s[o] = [...i, ...s[o]] : Vi(i) && Vi(s[o]) ? s[o] = _a(i, s[o], (t ? `${t}.` : "") + o.toString(), r) : s[o] = i))
    }
    return s
}
function l_(n) {
    return (...e) => e.reduce( (t, r) => _a(t, r, "", n), {})
}
const c_ = l_()
  , Ao = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function f_(n, e) {
    if (typeof n != "string")
        throw new TypeError("argument str must be a string");
    const t = {}
      , s = (e || {}).decode || p_;
    let o = 0;
    for (; o < n.length; ) {
        const i = n.indexOf("=", o);
        if (i === -1)
            break;
        let a = n.indexOf(";", o);
        if (a === -1)
            a = n.length;
        else if (a < i) {
            o = n.lastIndexOf(";", i - 1) + 1;
            continue
        }
        const l = n.slice(o, i).trim();
        if (t[l] === void 0) {
            let u = n.slice(i + 1, a).trim();
            u.codePointAt(0) === 34 && (u = u.slice(1, -1)),
            t[l] = h_(u, s)
        }
        o = a + 1
    }
    return t
}
function el(n, e, t) {
    const r = t || {}
      , s = r.encode || __;
    if (typeof s != "function")
        throw new TypeError("option encode is invalid");
    if (!Ao.test(n))
        throw new TypeError("argument name is invalid");
    const o = s(e);
    if (o && !Ao.test(o))
        throw new TypeError("argument val is invalid");
    let i = n + "=" + o;
    if (r.maxAge !== void 0 && r.maxAge !== null) {
        const a = r.maxAge - 0;
        if (Number.isNaN(a) || !Number.isFinite(a))
            throw new TypeError("option maxAge is invalid");
        i += "; Max-Age=" + Math.floor(a)
    }
    if (r.domain) {
        if (!Ao.test(r.domain))
            throw new TypeError("option domain is invalid");
        i += "; Domain=" + r.domain
    }
    if (r.path) {
        if (!Ao.test(r.path))
            throw new TypeError("option path is invalid");
        i += "; Path=" + r.path
    }
    if (r.expires) {
        if (!d_(r.expires) || Number.isNaN(r.expires.valueOf()))
            throw new TypeError("option expires is invalid");
        i += "; Expires=" + r.expires.toUTCString()
    }
    if (r.httpOnly && (i += "; HttpOnly"),
    r.secure && (i += "; Secure"),
    r.priority)
        switch (typeof r.priority == "string" ? r.priority.toLowerCase() : r.priority) {
        case "low":
            i += "; Priority=Low";
            break;
        case "medium":
            i += "; Priority=Medium";
            break;
        case "high":
            i += "; Priority=High";
            break;
        default:
            throw new TypeError("option priority is invalid")
        }
    if (r.sameSite)
        switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
        case !0:
            i += "; SameSite=Strict";
            break;
        case "lax":
            i += "; SameSite=Lax";
            break;
        case "strict":
            i += "; SameSite=Strict";
            break;
        case "none":
            i += "; SameSite=None";
            break;
        default:
            throw new TypeError("option sameSite is invalid")
        }
    return i
}
function d_(n) {
    return Object.prototype.toString.call(n) === "[object Date]" || n instanceof Date
}
function h_(n, e) {
    try {
        return e(n)
    } catch {
        return n
    }
}
function p_(n) {
    return n.includes("%") ? decodeURIComponent(n) : n
}
function __(n) {
    return encodeURIComponent(n)
}
function g_(n, e) {
    try {
        return e in n
    } catch {
        return !1
    }
}
var m_ = Object.defineProperty
  , D_ = (n, e, t) => e in n ? m_(n, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : n[e] = t
  , En = (n, e, t) => (D_(n, typeof e != "symbol" ? e + "" : e, t),
t);
class ga extends Error {
    constructor(e, t={}) {
        super(e, t),
        En(this, "statusCode", 500),
        En(this, "fatal", !1),
        En(this, "unhandled", !1),
        En(this, "statusMessage"),
        En(this, "data"),
        En(this, "cause"),
        t.cause && !this.cause && (this.cause = t.cause)
    }
    toJSON() {
        const e = {
            message: this.message,
            statusCode: Da(this.statusCode, 500)
        };
        return this.statusMessage && (e.statusMessage = Mc(this.statusMessage)),
        this.data !== void 0 && (e.data = this.data),
        e
    }
}
En(ga, "__h3_error__", !0);
function ma(n) {
    if (typeof n == "string")
        return new ga(n);
    if (y_(n))
        return n;
    const e = new ga(n.message ?? n.statusMessage ?? "",{
        cause: n.cause || n
    });
    if (g_(n, "stack"))
        try {
            Object.defineProperty(e, "stack", {
                get() {
                    return n.stack
                }
            })
        } catch {
            try {
                e.stack = n.stack
            } catch {}
        }
    if (n.data && (e.data = n.data),
    n.statusCode ? e.statusCode = Da(n.statusCode, e.statusCode) : n.status && (e.statusCode = Da(n.status, e.statusCode)),
    n.statusMessage ? e.statusMessage = n.statusMessage : n.statusText && (e.statusMessage = n.statusText),
    e.statusMessage) {
        const t = e.statusMessage;
        Mc(e.statusMessage) !== t && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return n.fatal !== void 0 && (e.fatal = n.fatal),
    n.unhandled !== void 0 && (e.unhandled = n.unhandled),
    e
}
function y_(n) {
    var e;
    return ((e = n == null ? void 0 : n.constructor) == null ? void 0 : e.__h3_error__) === !0
}
const v_ = /[^\u0009\u0020-\u007E]/g;
function Mc(n="") {
    return n.replace(v_, "")
}
function Da(n, e=200) {
    return !n || (typeof n == "string" && (n = Number.parseInt(n, 10)),
    n < 100 || n > 999) ? e : n
}
const Lc = Symbol("layout-meta")
  , Gt = Symbol("route")
  , Vr = () => {
    var n;
    return (n = De()) == null ? void 0 : n.$router
}
  , ki = () => eu() ? Zt(Gt, De()._route) : De()._route;
/*! @__NO_SIDE_EFFECTS__ */
const w_ = () => {
    try {
        if (De()._processingMiddleware)
            return !0
    } catch {
        return !0
    }
    return !1
}
  , Ic = (n, e) => {
    n || (n = "/");
    const t = typeof n == "string" ? n : vc(n.path || "/", n.query || {}) + (n.hash || "");
    if (e != null && e.open) {
        {
            const {target: a="_blank", windowFeatures: l={}} = e.open
              , u = Object.entries(l).filter( ([c,f]) => f !== void 0).map( ([c,f]) => `${c.toLowerCase()}=${f}`).join(", ");
            open(t, a, u)
        }
        return Promise.resolve()
    }
    const r = (e == null ? void 0 : e.external) || bs(t, {
        acceptRelative: !0
    });
    if (r) {
        if (!(e != null && e.external))
            throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
        const a = Co(t).protocol;
        if (a && Mh(a))
            throw new Error(`Cannot navigate to a URL with '${a}' protocol.`)
    }
    const s = w_();
    if (!r && s)
        return n;
    const o = Vr()
      , i = De();
    return r ? (e != null && e.replace ? location.replace(t) : location.href = t,
    s ? i.isHydrating ? new Promise( () => {}
    ) : !1 : Promise.resolve()) : e != null && e.replace ? o.replace(n) : o.push(n)
}
  , Pi = () => xi(De().payload, "error")
  , Zn = n => {
    const e = Ri(n);
    try {
        const t = De()
          , r = Pi();
        t.hooks.callHook("app:error", e),
        r.value = r.value || e
    } catch {
        throw e
    }
    return e
}
  , E_ = async (n={}) => {
    const e = De()
      , t = Pi();
    e.callHook("app:error:cleared", n),
    n.redirect && await Vr().replace(n.redirect),
    t.value = null
}
  , C_ = n => !!(n && typeof n == "object" && "__nuxt_error"in n)
  , Ri = n => {
    const e = ma(n);
    return e.__nuxt_error = !0,
    e
}
  , ya = globalThis.requestIdleCallback || (n => {
    const e = Date.now()
      , t = {
        didTimeout: !1,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - e))
    };
    return setTimeout( () => {
        n(t)
    }
    , 1)
}
)
  , b_ = globalThis.cancelIdleCallback || (n => {
    clearTimeout(n)
}
)
  , Bc = n => {
    const e = De();
    e.isHydrating ? e.hooks.hookOnce("app:suspense:resolve", () => {
        ya(n)
    }
    ) : ya(n)
}
  , x_ = () => null;
function bo(...n) {
    const e = typeof n[n.length - 1] == "string" ? n.pop() : void 0;
    typeof n[0] != "string" && n.unshift(e);
    let[t,r,s={}] = n;
    if (typeof t != "string")
        throw new TypeError("[nuxt] [asyncData] key must be a string.");
    if (typeof r != "function")
        throw new TypeError("[nuxt] [asyncData] handler must be a function.");
    s.server = s.server ?? !0,
    s.default = s.default ?? x_,
    s.lazy = s.lazy ?? !1,
    s.immediate = s.immediate ?? !0;
    const o = De()
      , i = () => o.isHydrating ? o.payload.data[t] : o.static.data[t]
      , a = () => i() !== void 0;
    (!o._asyncData[t] || !s.immediate) && (o._asyncData[t] = {
        data: qe(i() ?? s.default()),
        pending: qe(!a()),
        error: xi(o.payload._errors, t),
        status: qe("idle")
    });
    const l = {
        ...o._asyncData[t]
    };
    l.refresh = l.execute = (h={}) => {
        if (o._asyncDataPromises[t]) {
            if (h.dedupe === !1)
                return o._asyncDataPromises[t];
            o._asyncDataPromises[t].cancelled = !0
        }
        if ((h._initial || o.isHydrating && h._initial !== !1) && a())
            return i();
        l.pending.value = !0,
        l.status.value = "pending";
        const d = new Promise( (p, _) => {
            try {
                p(r(o))
            } catch (g) {
                _(g)
            }
        }
        ).then(p => {
            if (d.cancelled)
                return o._asyncDataPromises[t];
            let _ = p;
            s.transform && (_ = s.transform(p)),
            s.pick && (_ = S_(_, s.pick)),
            l.data.value = _,
            l.error.value = null,
            l.status.value = "success"
        }
        ).catch(p => {
            if (d.cancelled)
                return o._asyncDataPromises[t];
            l.error.value = p,
            l.data.value = W(s.default()),
            l.status.value = "error"
        }
        ).finally( () => {
            d.cancelled || (l.pending.value = !1,
            o.payload.data[t] = l.data.value,
            l.error.value && (o.payload._errors[t] = Ri(l.error.value)),
            delete o._asyncDataPromises[t])
        }
        );
        return o._asyncDataPromises[t] = d,
        o._asyncDataPromises[t]
    }
    ;
    const u = () => l.refresh({
        _initial: !0
    })
      , c = s.server !== !1 && o.payload.serverRendered;
    {
        const h = tu();
        if (h && !h._nuxtOnBeforeMountCbs) {
            h._nuxtOnBeforeMountCbs = [];
            const p = h._nuxtOnBeforeMountCbs;
            h && (Xd( () => {
                p.forEach(_ => {
                    _()
                }
                ),
                p.splice(0, p.length)
            }
            ),
            aa( () => p.splice(0, p.length)))
        }
        c && o.isHydrating && a() ? (l.pending.value = !1,
        l.status.value = l.error.value ? "error" : "success") : h && (o.payload.serverRendered && o.isHydrating || s.lazy) && s.immediate ? h._nuxtOnBeforeMountCbs.push(u) : s.immediate && u(),
        s.watch && Cs(s.watch, () => l.refresh());
        const d = o.hook("app:data:refresh", p => {
            if (!p || p.includes(t))
                return l.refresh()
        }
        );
        h && aa(d)
    }
    const f = Promise.resolve(o._asyncDataPromises[t]).then( () => l);
    return Object.assign(f, l),
    f
}
function Jy(...n) {
    const e = typeof n[n.length - 1] == "string" ? n.pop() : void 0;
    typeof n[0] != "string" && n.unshift(e);
    const [t,r,s] = n;
    return bo(t, r, {
        ...s,
        lazy: !0
    }, null)
}
function T_(n) {
    const e = De();
    return n in e.payload.data || (e.payload.data[n] = null),
    {
        data: xi(e.payload.data, n)
    }
}
function S_(n, e) {
    const t = {};
    for (const r of e)
        t[r] = n[r];
    return t
}
const k_ = {
    path: "/",
    watch: !0,
    decode: n => oo(decodeURIComponent(n)),
    encode: n => encodeURIComponent(typeof n == "string" ? n : JSON.stringify(n))
};
function P_(n, e) {
    var o;
    const t = {
        ...k_,
        ...e
    }
      , r = R_(t) || {}
      , s = qe(r[n] ?? ((o = t.default) == null ? void 0 : o.call(t)));
    {
        const i = typeof BroadcastChannel > "u" ? null : new BroadcastChannel(`nuxt:cookies:${n}`);
        tu() && aa( () => {
            i == null || i.close()
        }
        );
        const a = () => {
            F_(n, s.value, t),
            i == null || i.postMessage(ru(s.value))
        }
        ;
        let l = !1;
        i && (i.onmessage = u => {
            l = !0,
            s.value = u.data,
            $r( () => {
                l = !1
            }
            )
        }
        ),
        t.watch ? Cs(s, () => {
            l || a()
        }
        , {
            deep: t.watch !== "shallow"
        }) : a()
    }
    return s
}
function R_(n={}) {
    return f_(document.cookie, n)
}
function A_(n, e, t={}) {
    return e == null ? el(n, e, {
        ...t,
        maxAge: -1
    }) : el(n, e, t)
}
function F_(n, e, t={}) {
    document.cookie = A_(n, e, t)
}
async function Hc(n, e=Vr()) {
    const {path: t, matched: r} = e.resolve(n);
    if (!r.length || (e._routePreloaded || (e._routePreloaded = new Set),
    e._routePreloaded.has(t)))
        return;
    const s = e._preloadPromises = e._preloadPromises || [];
    if (s.length > 4)
        return Promise.all(s).then( () => Hc(n, e));
    e._routePreloaded.add(t);
    const o = r.map(i => {
        var a;
        return (a = i.components) == null ? void 0 : a.default
    }
    ).filter(i => typeof i == "function");
    for (const i of o) {
        const a = Promise.resolve(i()).catch( () => {}
        ).finally( () => s.splice(s.indexOf(a)));
        s.push(a)
    }
    await Promise.all(s)
}
function O_(n={}) {
    const e = n.path || window.location.pathname;
    let t = {};
    try {
        t = oo(sessionStorage.getItem("nuxt:reload") || "{}")
    } catch {}
    if (n.force || (t == null ? void 0 : t.path) !== e || (t == null ? void 0 : t.expires) < Date.now()) {
        try {
            sessionStorage.setItem("nuxt:reload", JSON.stringify({
                path: e,
                expires: Date.now() + (n.ttl ?? 1e4)
            }))
        } catch {}
        if (n.persistState)
            try {
                sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
                    state: De().payload.state
                }))
            } catch {}
        window.location.pathname !== e ? window.location.href = e : window.location.reload()
    }
}
const M_ = (...n) => n.find(e => e !== void 0)
  , L_ = "noopener noreferrer";
/*! @__NO_SIDE_EFFECTS__ */
function I_(n) {
    const e = n.componentName || "NuxtLink"
      , t = (r, s) => {
        if (!r || n.trailingSlash !== "append" && n.trailingSlash !== "remove")
            return r;
        const o = n.trailingSlash === "append" ? ci : lu;
        if (typeof r == "string")
            return o(r, !0);
        const i = "path"in r ? r.path : s(r).path;
        return {
            ...r,
            name: void 0,
            path: o(i, !0)
        }
    }
    ;
    return Nr({
        name: e,
        props: {
            to: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            href: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            target: {
                type: String,
                default: void 0,
                required: !1
            },
            rel: {
                type: String,
                default: void 0,
                required: !1
            },
            noRel: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            prefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            noPrefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            activeClass: {
                type: String,
                default: void 0,
                required: !1
            },
            exactActiveClass: {
                type: String,
                default: void 0,
                required: !1
            },
            prefetchedClass: {
                type: String,
                default: void 0,
                required: !1
            },
            replace: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            ariaCurrentValue: {
                type: String,
                default: void 0,
                required: !1
            },
            external: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            custom: {
                type: Boolean,
                default: void 0,
                required: !1
            }
        },
        setup(r, {slots: s}) {
            const o = Vr()
              , i = Qe( () => {
                const f = r.to || r.href || "";
                return t(f, o.resolve)
            }
            )
              , a = Qe( () => r.external || r.target && r.target !== "_self" ? !0 : typeof i.value == "object" ? !1 : i.value === "" || bs(i.value, {
                acceptRelative: !0
            }))
              , l = qe(!1)
              , u = qe(null)
              , c = f => {
                var h;
                u.value = r.custom ? (h = f == null ? void 0 : f.$el) == null ? void 0 : h.nextElementSibling : f == null ? void 0 : f.$el
            }
            ;
            if (r.prefetch !== !1 && r.noPrefetch !== !0 && r.target !== "_blank" && !H_()) {
                const h = De();
                let d, p = null;
                nu( () => {
                    const _ = B_();
                    Bc( () => {
                        d = ya( () => {
                            var g;
                            (g = u == null ? void 0 : u.value) != null && g.tagName && (p = _.observe(u.value, async () => {
                                p == null || p(),
                                p = null;
                                const m = typeof i.value == "string" ? i.value : o.resolve(i.value).fullPath;
                                await Promise.all([h.hooks.callHook("link:prefetch", m).catch( () => {}
                                ), !a.value && Hc(i.value, o).catch( () => {}
                                )]),
                                l.value = !0
                            }
                            ))
                        }
                        )
                    }
                    )
                }
                ),
                fc( () => {
                    d && b_(d),
                    p == null || p(),
                    p = null
                }
                )
            }
            return () => {
                var _, g;
                if (!a.value) {
                    const m = {
                        ref: c,
                        to: i.value,
                        activeClass: r.activeClass || n.activeClass,
                        exactActiveClass: r.exactActiveClass || n.exactActiveClass,
                        replace: r.replace,
                        ariaCurrentValue: r.ariaCurrentValue,
                        custom: r.custom
                    };
                    return r.custom || (l.value && (m.class = r.prefetchedClass || n.prefetchedClass),
                    m.rel = r.rel),
                    St(Gd("RouterLink"), m, s.default)
                }
                const f = typeof i.value == "object" ? ((_ = o.resolve(i.value)) == null ? void 0 : _.href) ?? null : i.value || null
                  , h = r.target || null
                  , d = r.noRel ? null : M_(r.rel, n.externalRelAttribute, f ? L_ : "") || null
                  , p = () => Ic(f, {
                    replace: r.replace
                });
                return r.custom ? s.default ? s.default({
                    href: f,
                    navigate: p,
                    get route() {
                        if (!f)
                            return;
                        const m = Co(f);
                        return {
                            path: m.pathname,
                            fullPath: m.pathname,
                            get query() {
                                return yc(m.search)
                            },
                            hash: m.hash,
                            params: {},
                            name: void 0,
                            matched: [],
                            redirectedFrom: void 0,
                            meta: {},
                            href: f
                        }
                    },
                    rel: d,
                    target: h,
                    isExternal: a.value,
                    isActive: !1,
                    isExactActive: !1
                }) : null : St("a", {
                    ref: u,
                    href: f,
                    rel: d,
                    target: h
                }, (g = s.default) == null ? void 0 : g.call(s))
            }
        }
    })
}
const Ai = I_({
    componentName: "NuxtLink"
});
function B_() {
    const n = De();
    if (n._observer)
        return n._observer;
    let e = null;
    const t = new Map
      , r = (o, i) => (e || (e = new IntersectionObserver(a => {
        for (const l of a) {
            const u = t.get(l.target);
            (l.isIntersecting || l.intersectionRatio > 0) && u && u()
        }
    }
    )),
    t.set(o, i),
    e.observe(o),
    () => {
        t.delete(o),
        e.unobserve(o),
        t.size === 0 && (e.disconnect(),
        e = null)
    }
    );
    return n._observer = {
        observe: r
    }
}
function H_() {
    const n = navigator.connection;
    return !!(n && (n.saveData || /2g/.test(n.effectiveType)))
}
const $_ = !1
  , va = !1
  , N_ = !1
  , V_ = "#__nuxt";
function tl(n, e={}) {
    const t = j_(n, e)
      , r = De()
      , s = r._payloadCache = r._payloadCache || {};
    return t in s || (s[t] = z_().then(o => o ? $c(t).then(i => i || (delete s[t],
    null)) : (s[t] = null,
    null))),
    s[t]
}
const rl = "json";
function j_(n, e={}) {
    const t = new URL(n,"http://localhost");
    if (t.search)
        throw new Error("Payload URL cannot contain search params: " + n);
    if (t.host !== "localhost" || bs(t.pathname, {
        acceptRelative: !0
    }))
        throw new Error("Payload URL must not include hostname: " + n);
    const r = e.hash || (e.fresh ? Date.now() : "");
    return Eo(xs().app.baseURL, t.pathname, r ? `_payload.${r}.${rl}` : `_payload.${rl}`)
}
async function $c(n) {
    const e = fetch(n).then(t => t.text().then(Nc));
    try {
        return await e
    } catch (t) {
        console.warn("[nuxt] Cannot load payload ", n, t)
    }
    return null
}
async function z_(n=ki().path) {
    return !!De().payload.prerenderedAt
}
let Fo = null;
async function U_() {
    if (Fo)
        return Fo;
    const n = document.getElementById("__NUXT_DATA__");
    if (!n)
        return {};
    const e = Nc(n.textContent || "")
      , t = n.dataset.src ? await $c(n.dataset.src) : void 0;
    return Fo = {
        ...e,
        ...t,
        ...window.__NUXT__
    },
    Fo
}
function Nc(n) {
    return Rp(n, De()._payloadRevivers)
}
function q_(n, e) {
    De()._payloadRevivers[n] = e
}
const nl = {
    NuxtError: n => Ri(n),
    EmptyShallowRef: n => no(n === "_" ? void 0 : n === "0n" ? BigInt(0) : oo(n)),
    EmptyRef: n => qe(n === "_" ? void 0 : n === "0n" ? BigInt(0) : oo(n)),
    ShallowRef: n => no(n),
    ShallowReactive: n => Ti(n),
    Ref: n => qe(n),
    Reactive: n => fs(n)
}
  , W_ = Tr({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(n) {
        let e, t;
        for (const r in nl)
            q_(r, nl[r]);
        Object.assign(n.payload, ([e,t] = io( () => n.runWithContext(U_)),
        e = await e,
        t(),
        e)),
        window.__NUXT__ = n.payload
    }
})
  , Y_ = []
  , X_ = Tr({
    name: "nuxt:head",
    enforce: "pre",
    setup(n) {
        const e = a_({
            plugins: Y_
        });
        u_( () => De().vueApp._context.provides.usehead),
        n.vueApp.use(e);
        {
            let t = !0;
            const r = async () => {
                t = !1,
                await Ac(e)
            }
            ;
            e.hooks.hook("dom:beforeRender", s => {
                s.shouldRender = !t
            }
            ),
            n.hooks.hook("page:start", () => {
                t = !0
            }
            ),
            n.hooks.hook("page:finish", () => {
                n.isHydrating || r()
            }
            ),
            n.hooks.hook("app:error", r),
            n.hooks.hook("app:suspense:resolve", r)
        }
    }
});
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const Kn = typeof window < "u";
function G_(n) {
    return n.__esModule || n[Symbol.toStringTag] === "Module"
}
const he = Object.assign;
function ji(n, e) {
    const t = {};
    for (const r in e) {
        const s = e[r];
        t[r] = lr(s) ? s.map(n) : n(s)
    }
    return t
}
const Vs = () => {}
  , lr = Array.isArray
  , K_ = /\/$/
  , J_ = n => n.replace(K_, "");
function zi(n, e, t="/") {
    let r, s = {}, o = "", i = "";
    const a = e.indexOf("#");
    let l = e.indexOf("?");
    return a < l && a >= 0 && (l = -1),
    l > -1 && (r = e.slice(0, l),
    o = e.slice(l + 1, a > -1 ? a : e.length),
    s = n(o)),
    a > -1 && (r = r || e.slice(0, a),
    i = e.slice(a, e.length)),
    r = tg(r ?? e, t),
    {
        fullPath: r + (o && "?") + o + i,
        path: r,
        query: s,
        hash: i
    }
}
function Q_(n, e) {
    const t = e.query ? n(e.query) : "";
    return e.path + (t && "?") + t + (e.hash || "")
}
function sl(n, e) {
    return !e || !n.toLowerCase().startsWith(e.toLowerCase()) ? n : n.slice(e.length) || "/"
}
function Z_(n, e, t) {
    const r = e.matched.length - 1
      , s = t.matched.length - 1;
    return r > -1 && r === s && hs(e.matched[r], t.matched[s]) && Vc(e.params, t.params) && n(e.query) === n(t.query) && e.hash === t.hash
}
function hs(n, e) {
    return (n.aliasOf || n) === (e.aliasOf || e)
}
function Vc(n, e) {
    if (Object.keys(n).length !== Object.keys(e).length)
        return !1;
    for (const t in n)
        if (!eg(n[t], e[t]))
            return !1;
    return !0
}
function eg(n, e) {
    return lr(n) ? ol(n, e) : lr(e) ? ol(e, n) : n === e
}
function ol(n, e) {
    return lr(e) ? n.length === e.length && n.every( (t, r) => t === e[r]) : n.length === 1 && n[0] === e
}
function tg(n, e) {
    if (n.startsWith("/"))
        return n;
    if (!n)
        return e;
    const t = e.split("/")
      , r = n.split("/")
      , s = r[r.length - 1];
    (s === ".." || s === ".") && r.push("");
    let o = t.length - 1, i, a;
    for (i = 0; i < r.length; i++)
        if (a = r[i],
        a !== ".")
            if (a === "..")
                o > 1 && o--;
            else
                break;
    return t.slice(0, o).join("/") + "/" + r.slice(i - (i === r.length ? 1 : 0)).join("/")
}
var ao;
(function(n) {
    n.pop = "pop",
    n.push = "push"
}
)(ao || (ao = {}));
var js;
(function(n) {
    n.back = "back",
    n.forward = "forward",
    n.unknown = ""
}
)(js || (js = {}));
function rg(n) {
    if (!n)
        if (Kn) {
            const e = document.querySelector("base");
            n = e && e.getAttribute("href") || "/",
            n = n.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            n = "/";
    return n[0] !== "/" && n[0] !== "#" && (n = "/" + n),
    J_(n)
}
const ng = /^[^#]+#/;
function sg(n, e) {
    return n.replace(ng, "#") + e
}
function og(n, e) {
    const t = document.documentElement.getBoundingClientRect()
      , r = n.getBoundingClientRect();
    return {
        behavior: e.behavior,
        left: r.left - t.left - (e.left || 0),
        top: r.top - t.top - (e.top || 0)
    }
}
const Fi = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
});
function ig(n) {
    let e;
    if ("el"in n) {
        const t = n.el
          , r = typeof t == "string" && t.startsWith("#")
          , s = typeof t == "string" ? r ? document.getElementById(t.slice(1)) : document.querySelector(t) : t;
        if (!s)
            return;
        e = og(s, n)
    } else
        e = n;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.pageXOffset, e.top != null ? e.top : window.pageYOffset)
}
function il(n, e) {
    return (history.state ? history.state.position - e : -1) + n
}
const wa = new Map;
function ag(n, e) {
    wa.set(n, e)
}
function ug(n) {
    const e = wa.get(n);
    return wa.delete(n),
    e
}
let lg = () => location.protocol + "//" + location.host;
function jc(n, e) {
    const {pathname: t, search: r, hash: s} = e
      , o = n.indexOf("#");
    if (o > -1) {
        let a = s.includes(n.slice(o)) ? n.slice(o).length : 1
          , l = s.slice(a);
        return l[0] !== "/" && (l = "/" + l),
        sl(l, "")
    }
    return sl(t, n) + r + s
}
function cg(n, e, t, r) {
    let s = []
      , o = []
      , i = null;
    const a = ({state: h}) => {
        const d = jc(n, location)
          , p = t.value
          , _ = e.value;
        let g = 0;
        if (h) {
            if (t.value = d,
            e.value = h,
            i && i === p) {
                i = null;
                return
            }
            g = _ ? h.position - _.position : 0
        } else
            r(d);
        s.forEach(m => {
            m(t.value, p, {
                delta: g,
                type: ao.pop,
                direction: g ? g > 0 ? js.forward : js.back : js.unknown
            })
        }
        )
    }
    ;
    function l() {
        i = t.value
    }
    function u(h) {
        s.push(h);
        const d = () => {
            const p = s.indexOf(h);
            p > -1 && s.splice(p, 1)
        }
        ;
        return o.push(d),
        d
    }
    function c() {
        const {history: h} = window;
        h.state && h.replaceState(he({}, h.state, {
            scroll: Fi()
        }), "")
    }
    function f() {
        for (const h of o)
            h();
        o = [],
        window.removeEventListener("popstate", a),
        window.removeEventListener("beforeunload", c)
    }
    return window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", c, {
        passive: !0
    }),
    {
        pauseListeners: l,
        listen: u,
        destroy: f
    }
}
function al(n, e, t, r=!1, s=!1) {
    return {
        back: n,
        current: e,
        forward: t,
        replaced: r,
        position: window.history.length,
        scroll: s ? Fi() : null
    }
}
function fg(n) {
    const {history: e, location: t} = window
      , r = {
        value: jc(n, t)
    }
      , s = {
        value: e.state
    };
    s.value || o(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: e.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function o(l, u, c) {
        const f = n.indexOf("#")
          , h = f > -1 ? (t.host && document.querySelector("base") ? n : n.slice(f)) + l : lg() + n + l;
        try {
            e[c ? "replaceState" : "pushState"](u, "", h),
            s.value = u
        } catch (d) {
            console.error(d),
            t[c ? "replace" : "assign"](h)
        }
    }
    function i(l, u) {
        const c = he({}, e.state, al(s.value.back, l, s.value.forward, !0), u, {
            position: s.value.position
        });
        o(l, c, !0),
        r.value = l
    }
    function a(l, u) {
        const c = he({}, s.value, e.state, {
            forward: l,
            scroll: Fi()
        });
        o(c.current, c, !0);
        const f = he({}, al(r.value, l, null), {
            position: c.position + 1
        }, u);
        o(l, f, !1),
        r.value = l
    }
    return {
        location: r,
        state: s,
        push: a,
        replace: i
    }
}
function zc(n) {
    n = rg(n);
    const e = fg(n)
      , t = cg(n, e.state, e.location, e.replace);
    function r(o, i=!0) {
        i || t.pauseListeners(),
        history.go(o)
    }
    const s = he({
        location: "",
        base: n,
        go: r,
        createHref: sg.bind(null, n)
    }, e, t);
    return Object.defineProperty(s, "location", {
        enumerable: !0,
        get: () => e.location.value
    }),
    Object.defineProperty(s, "state", {
        enumerable: !0,
        get: () => e.state.value
    }),
    s
}
function dg(n) {
    return n = location.host ? n || location.pathname + location.search : "",
    n.includes("#") || (n += "#"),
    zc(n)
}
function hg(n) {
    return typeof n == "string" || n && typeof n == "object"
}
function Uc(n) {
    return typeof n == "string" || typeof n == "symbol"
}
const gr = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
}
  , qc = Symbol("");
var ul;
(function(n) {
    n[n.aborted = 4] = "aborted",
    n[n.cancelled = 8] = "cancelled",
    n[n.duplicated = 16] = "duplicated"
}
)(ul || (ul = {}));
function ps(n, e) {
    return he(new Error, {
        type: n,
        [qc]: !0
    }, e)
}
function Rr(n, e) {
    return n instanceof Error && qc in n && (e == null || !!(n.type & e))
}
const ll = "[^/]+?"
  , pg = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , _g = /[.+*?^${}()[\]/\\]/g;
function gg(n, e) {
    const t = he({}, pg, e)
      , r = [];
    let s = t.start ? "^" : "";
    const o = [];
    for (const u of n) {
        const c = u.length ? [] : [90];
        t.strict && !u.length && (s += "/");
        for (let f = 0; f < u.length; f++) {
            const h = u[f];
            let d = 40 + (t.sensitive ? .25 : 0);
            if (h.type === 0)
                f || (s += "/"),
                s += h.value.replace(_g, "\\$&"),
                d += 40;
            else if (h.type === 1) {
                const {value: p, repeatable: _, optional: g, regexp: m} = h;
                o.push({
                    name: p,
                    repeatable: _,
                    optional: g
                });
                const D = m || ll;
                if (D !== ll) {
                    d += 10;
                    try {
                        new RegExp(`(${D})`)
                    } catch (y) {
                        throw new Error(`Invalid custom RegExp for param "${p}" (${D}): ` + y.message)
                    }
                }
                let v = _ ? `((?:${D})(?:/(?:${D}))*)` : `(${D})`;
                f || (v = g && u.length < 2 ? `(?:/${v})` : "/" + v),
                g && (v += "?"),
                s += v,
                d += 20,
                g && (d += -8),
                _ && (d += -20),
                D === ".*" && (d += -50)
            }
            c.push(d)
        }
        r.push(c)
    }
    if (t.strict && t.end) {
        const u = r.length - 1;
        r[u][r[u].length - 1] += .7000000000000001
    }
    t.strict || (s += "/?"),
    t.end ? s += "$" : t.strict && (s += "(?:/|$)");
    const i = new RegExp(s,t.sensitive ? "" : "i");
    function a(u) {
        const c = u.match(i)
          , f = {};
        if (!c)
            return null;
        for (let h = 1; h < c.length; h++) {
            const d = c[h] || ""
              , p = o[h - 1];
            f[p.name] = d && p.repeatable ? d.split("/") : d
        }
        return f
    }
    function l(u) {
        let c = ""
          , f = !1;
        for (const h of n) {
            (!f || !c.endsWith("/")) && (c += "/"),
            f = !1;
            for (const d of h)
                if (d.type === 0)
                    c += d.value;
                else if (d.type === 1) {
                    const {value: p, repeatable: _, optional: g} = d
                      , m = p in u ? u[p] : "";
                    if (lr(m) && !_)
                        throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
                    const D = lr(m) ? m.join("/") : m;
                    if (!D)
                        if (g)
                            h.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = !0);
                        else
                            throw new Error(`Missing required param "${p}"`);
                    c += D
                }
        }
        return c || "/"
    }
    return {
        re: i,
        score: r,
        keys: o,
        parse: a,
        stringify: l
    }
}
function mg(n, e) {
    let t = 0;
    for (; t < n.length && t < e.length; ) {
        const r = e[t] - n[t];
        if (r)
            return r;
        t++
    }
    return n.length < e.length ? n.length === 1 && n[0] === 40 + 40 ? -1 : 1 : n.length > e.length ? e.length === 1 && e[0] === 40 + 40 ? 1 : -1 : 0
}
function Dg(n, e) {
    let t = 0;
    const r = n.score
      , s = e.score;
    for (; t < r.length && t < s.length; ) {
        const o = mg(r[t], s[t]);
        if (o)
            return o;
        t++
    }
    if (Math.abs(s.length - r.length) === 1) {
        if (cl(r))
            return 1;
        if (cl(s))
            return -1
    }
    return s.length - r.length
}
function cl(n) {
    const e = n[n.length - 1];
    return n.length > 0 && e[e.length - 1] < 0
}
const yg = {
    type: 0,
    value: ""
}
  , vg = /[a-zA-Z0-9_]/;
function wg(n) {
    if (!n)
        return [[]];
    if (n === "/")
        return [[yg]];
    if (!n.startsWith("/"))
        throw new Error(`Invalid path "${n}"`);
    function e(d) {
        throw new Error(`ERR (${t})/"${u}": ${d}`)
    }
    let t = 0
      , r = t;
    const s = [];
    let o;
    function i() {
        o && s.push(o),
        o = []
    }
    let a = 0, l, u = "", c = "";
    function f() {
        u && (t === 0 ? o.push({
            type: 0,
            value: u
        }) : t === 1 || t === 2 || t === 3 ? (o.length > 1 && (l === "*" || l === "+") && e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),
        o.push({
            type: 1,
            value: u,
            regexp: c,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : e("Invalid state to consume buffer"),
        u = "")
    }
    function h() {
        u += l
    }
    for (; a < n.length; ) {
        if (l = n[a++],
        l === "\\" && t !== 2) {
            r = t,
            t = 4;
            continue
        }
        switch (t) {
        case 0:
            l === "/" ? (u && f(),
            i()) : l === ":" ? (f(),
            t = 1) : h();
            break;
        case 4:
            h(),
            t = r;
            break;
        case 1:
            l === "(" ? t = 2 : vg.test(l) ? h() : (f(),
            t = 0,
            l !== "*" && l !== "?" && l !== "+" && a--);
            break;
        case 2:
            l === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + l : t = 3 : c += l;
            break;
        case 3:
            f(),
            t = 0,
            l !== "*" && l !== "?" && l !== "+" && a--,
            c = "";
            break;
        default:
            e("Unknown state");
            break
        }
    }
    return t === 2 && e(`Unfinished custom RegExp for param "${u}"`),
    f(),
    i(),
    s
}
function Eg(n, e, t) {
    const r = gg(wg(n.path), t)
      , s = he(r, {
        record: n,
        parent: e,
        children: [],
        alias: []
    });
    return e && !s.record.aliasOf == !e.record.aliasOf && e.children.push(s),
    s
}
function Cg(n, e) {
    const t = []
      , r = new Map;
    e = hl({
        strict: !1,
        end: !0,
        sensitive: !1
    }, e);
    function s(c) {
        return r.get(c)
    }
    function o(c, f, h) {
        const d = !h
          , p = bg(c);
        p.aliasOf = h && h.record;
        const _ = hl(e, c)
          , g = [p];
        if ("alias"in c) {
            const v = typeof c.alias == "string" ? [c.alias] : c.alias;
            for (const y of v)
                g.push(he({}, p, {
                    components: h ? h.record.components : p.components,
                    path: y,
                    aliasOf: h ? h.record : p
                }))
        }
        let m, D;
        for (const v of g) {
            const {path: y} = v;
            if (f && y[0] !== "/") {
                const E = f.record.path
                  , b = E[E.length - 1] === "/" ? "" : "/";
                v.path = f.record.path + (y && b + y)
            }
            if (m = Eg(v, f, _),
            h ? h.alias.push(m) : (D = D || m,
            D !== m && D.alias.push(m),
            d && c.name && !dl(m) && i(c.name)),
            p.children) {
                const E = p.children;
                for (let b = 0; b < E.length; b++)
                    o(E[b], m, h && h.children[b])
            }
            h = h || m,
            (m.record.components && Object.keys(m.record.components).length || m.record.name || m.record.redirect) && l(m)
        }
        return D ? () => {
            i(D)
        }
        : Vs
    }
    function i(c) {
        if (Uc(c)) {
            const f = r.get(c);
            f && (r.delete(c),
            t.splice(t.indexOf(f), 1),
            f.children.forEach(i),
            f.alias.forEach(i))
        } else {
            const f = t.indexOf(c);
            f > -1 && (t.splice(f, 1),
            c.record.name && r.delete(c.record.name),
            c.children.forEach(i),
            c.alias.forEach(i))
        }
    }
    function a() {
        return t
    }
    function l(c) {
        let f = 0;
        for (; f < t.length && Dg(c, t[f]) >= 0 && (c.record.path !== t[f].record.path || !Wc(c, t[f])); )
            f++;
        t.splice(f, 0, c),
        c.record.name && !dl(c) && r.set(c.record.name, c)
    }
    function u(c, f) {
        let h, d = {}, p, _;
        if ("name"in c && c.name) {
            if (h = r.get(c.name),
            !h)
                throw ps(1, {
                    location: c
                });
            _ = h.record.name,
            d = he(fl(f.params, h.keys.filter(D => !D.optional).map(D => D.name)), c.params && fl(c.params, h.keys.map(D => D.name))),
            p = h.stringify(d)
        } else if ("path"in c)
            p = c.path,
            h = t.find(D => D.re.test(p)),
            h && (d = h.parse(p),
            _ = h.record.name);
        else {
            if (h = f.name ? r.get(f.name) : t.find(D => D.re.test(f.path)),
            !h)
                throw ps(1, {
                    location: c,
                    currentLocation: f
                });
            _ = h.record.name,
            d = he({}, f.params, c.params),
            p = h.stringify(d)
        }
        const g = [];
        let m = h;
        for (; m; )
            g.unshift(m.record),
            m = m.parent;
        return {
            name: _,
            path: p,
            params: d,
            matched: g,
            meta: Tg(g)
        }
    }
    return n.forEach(c => o(c)),
    {
        addRoute: o,
        resolve: u,
        removeRoute: i,
        getRoutes: a,
        getRecordMatcher: s
    }
}
function fl(n, e) {
    const t = {};
    for (const r of e)
        r in n && (t[r] = n[r]);
    return t
}
function bg(n) {
    return {
        path: n.path,
        redirect: n.redirect,
        name: n.name,
        meta: n.meta || {},
        aliasOf: void 0,
        beforeEnter: n.beforeEnter,
        props: xg(n),
        children: n.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in n ? n.components || null : n.component && {
            default: n.component
        }
    }
}
function xg(n) {
    const e = {}
      , t = n.props || !1;
    if ("component"in n)
        e.default = t;
    else
        for (const r in n.components)
            e[r] = typeof t == "object" ? t[r] : t;
    return e
}
function dl(n) {
    for (; n; ) {
        if (n.record.aliasOf)
            return !0;
        n = n.parent
    }
    return !1
}
function Tg(n) {
    return n.reduce( (e, t) => he(e, t.meta), {})
}
function hl(n, e) {
    const t = {};
    for (const r in n)
        t[r] = r in e ? e[r] : n[r];
    return t
}
function Wc(n, e) {
    return e.children.some(t => t === n || Wc(n, t))
}
const Yc = /#/g
  , Sg = /&/g
  , kg = /\//g
  , Pg = /=/g
  , Rg = /\?/g
  , Xc = /\+/g
  , Ag = /%5B/g
  , Fg = /%5D/g
  , Gc = /%5E/g
  , Og = /%60/g
  , Kc = /%7B/g
  , Mg = /%7C/g
  , Jc = /%7D/g
  , Lg = /%20/g;
function fu(n) {
    return encodeURI("" + n).replace(Mg, "|").replace(Ag, "[").replace(Fg, "]")
}
function Ig(n) {
    return fu(n).replace(Kc, "{").replace(Jc, "}").replace(Gc, "^")
}
function Ea(n) {
    return fu(n).replace(Xc, "%2B").replace(Lg, "+").replace(Yc, "%23").replace(Sg, "%26").replace(Og, "`").replace(Kc, "{").replace(Jc, "}").replace(Gc, "^")
}
function Bg(n) {
    return Ea(n).replace(Pg, "%3D")
}
function Hg(n) {
    return fu(n).replace(Yc, "%23").replace(Rg, "%3F")
}
function $g(n) {
    return n == null ? "" : Hg(n).replace(kg, "%2F")
}
function pi(n) {
    try {
        return decodeURIComponent("" + n)
    } catch {}
    return "" + n
}
function Ng(n) {
    const e = {};
    if (n === "" || n === "?")
        return e;
    const r = (n[0] === "?" ? n.slice(1) : n).split("&");
    for (let s = 0; s < r.length; ++s) {
        const o = r[s].replace(Xc, " ")
          , i = o.indexOf("=")
          , a = pi(i < 0 ? o : o.slice(0, i))
          , l = i < 0 ? null : pi(o.slice(i + 1));
        if (a in e) {
            let u = e[a];
            lr(u) || (u = e[a] = [u]),
            u.push(l)
        } else
            e[a] = l
    }
    return e
}
function pl(n) {
    let e = "";
    for (let t in n) {
        const r = n[t];
        if (t = Bg(t),
        r == null) {
            r !== void 0 && (e += (e.length ? "&" : "") + t);
            continue
        }
        (lr(r) ? r.map(o => o && Ea(o)) : [r && Ea(r)]).forEach(o => {
            o !== void 0 && (e += (e.length ? "&" : "") + t,
            o != null && (e += "=" + o))
        }
        )
    }
    return e
}
function Vg(n) {
    const e = {};
    for (const t in n) {
        const r = n[t];
        r !== void 0 && (e[t] = lr(r) ? r.map(s => s == null ? null : "" + s) : r == null ? r : "" + r)
    }
    return e
}
const jg = Symbol("")
  , _l = Symbol("")
  , du = Symbol("")
  , hu = Symbol("")
  , Ca = Symbol("");
function Rs() {
    let n = [];
    function e(r) {
        return n.push(r),
        () => {
            const s = n.indexOf(r);
            s > -1 && n.splice(s, 1)
        }
    }
    function t() {
        n = []
    }
    return {
        add: e,
        list: () => n.slice(),
        reset: t
    }
}
function Xr(n, e, t, r, s) {
    const o = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
    return () => new Promise( (i, a) => {
        const l = f => {
            f === !1 ? a(ps(4, {
                from: t,
                to: e
            })) : f instanceof Error ? a(f) : hg(f) ? a(ps(2, {
                from: e,
                to: f
            })) : (o && r.enterCallbacks[s] === o && typeof f == "function" && o.push(f),
            i())
        }
          , u = n.call(r && r.instances[s], e, t, l);
        let c = Promise.resolve(u);
        n.length < 3 && (c = c.then(l)),
        c.catch(f => a(f))
    }
    )
}
function Ui(n, e, t, r) {
    const s = [];
    for (const o of n)
        for (const i in o.components) {
            let a = o.components[i];
            if (!(e !== "beforeRouteEnter" && !o.instances[i]))
                if (zg(a)) {
                    const u = (a.__vccOpts || a)[e];
                    u && s.push(Xr(u, t, r, o, i))
                } else {
                    let l = a();
                    s.push( () => l.then(u => {
                        if (!u)
                            return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${o.path}"`));
                        const c = G_(u) ? u.default : u;
                        o.components[i] = c;
                        const h = (c.__vccOpts || c)[e];
                        return h && Xr(h, t, r, o, i)()
                    }
                    ))
                }
        }
    return s
}
function zg(n) {
    return typeof n == "object" || "displayName"in n || "props"in n || "__vccOpts"in n
}
function gl(n) {
    const e = Zt(du)
      , t = Zt(hu)
      , r = Qe( () => e.resolve(W(n.to)))
      , s = Qe( () => {
        const {matched: l} = r.value
          , {length: u} = l
          , c = l[u - 1]
          , f = t.matched;
        if (!c || !f.length)
            return -1;
        const h = f.findIndex(hs.bind(null, c));
        if (h > -1)
            return h;
        const d = ml(l[u - 2]);
        return u > 1 && ml(c) === d && f[f.length - 1].path !== d ? f.findIndex(hs.bind(null, l[u - 2])) : h
    }
    )
      , o = Qe( () => s.value > -1 && Yg(t.params, r.value.params))
      , i = Qe( () => s.value > -1 && s.value === t.matched.length - 1 && Vc(t.params, r.value.params));
    function a(l={}) {
        return Wg(l) ? e[W(n.replace) ? "replace" : "push"](W(n.to)).catch(Vs) : Promise.resolve()
    }
    return {
        route: r,
        href: Qe( () => r.value.href),
        isActive: o,
        isExactActive: i,
        navigate: a
    }
}
const Ug = Nr({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink: gl,
    setup(n, {slots: e}) {
        const t = fs(gl(n))
          , {options: r} = Zt(du)
          , s = Qe( () => ({
            [Dl(n.activeClass, r.linkActiveClass, "router-link-active")]: t.isActive,
            [Dl(n.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: t.isExactActive
        }));
        return () => {
            const o = e.default && e.default(t);
            return n.custom ? o : St("a", {
                "aria-current": t.isExactActive ? n.ariaCurrentValue : null,
                href: t.href,
                onClick: t.navigate,
                class: s.value
            }, o)
        }
    }
})
  , qg = Ug;
function Wg(n) {
    if (!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey) && !n.defaultPrevented && !(n.button !== void 0 && n.button !== 0)) {
        if (n.currentTarget && n.currentTarget.getAttribute) {
            const e = n.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(e))
                return
        }
        return n.preventDefault && n.preventDefault(),
        !0
    }
}
function Yg(n, e) {
    for (const t in e) {
        const r = e[t]
          , s = n[t];
        if (typeof r == "string") {
            if (r !== s)
                return !1
        } else if (!lr(s) || s.length !== r.length || r.some( (o, i) => o !== s[i]))
            return !1
    }
    return !0
}
function ml(n) {
    return n ? n.aliasOf ? n.aliasOf.path : n.path : ""
}
const Dl = (n, e, t) => n ?? e ?? t
  , Xg = Nr({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(n, {attrs: e, slots: t}) {
        const r = Zt(Ca)
          , s = Qe( () => n.route || r.value)
          , o = Zt(_l, 0)
          , i = Qe( () => {
            let u = W(o);
            const {matched: c} = s.value;
            let f;
            for (; (f = c[u]) && !f.components; )
                u++;
            return u
        }
        )
          , a = Qe( () => s.value.matched[i.value]);
        ss(_l, Qe( () => i.value + 1)),
        ss(jg, a),
        ss(Ca, s);
        const l = qe();
        return Cs( () => [l.value, a.value, n.name], ([u,c,f], [h,d,p]) => {
            c && (c.instances[f] = u,
            d && d !== c && u && u === h && (c.leaveGuards.size || (c.leaveGuards = d.leaveGuards),
            c.updateGuards.size || (c.updateGuards = d.updateGuards))),
            u && c && (!d || !hs(c, d) || !h) && (c.enterCallbacks[f] || []).forEach(_ => _(u))
        }
        , {
            flush: "post"
        }),
        () => {
            const u = s.value
              , c = n.name
              , f = a.value
              , h = f && f.components[c];
            if (!h)
                return yl(t.default, {
                    Component: h,
                    route: u
                });
            const d = f.props[c]
              , p = d ? d === !0 ? u.params : typeof d == "function" ? d(u) : d : null
              , g = St(h, he({}, p, e, {
                onVnodeUnmounted: m => {
                    m.component.isUnmounted && (f.instances[c] = null)
                }
                ,
                ref: l
            }));
            return yl(t.default, {
                Component: g,
                route: u
            }) || g
        }
    }
});
function yl(n, e) {
    if (!n)
        return null;
    const t = n(e);
    return t.length === 1 ? t[0] : t
}
const Qc = Xg;
function Gg(n) {
    const e = Cg(n.routes, n)
      , t = n.parseQuery || Ng
      , r = n.stringifyQuery || pl
      , s = n.history
      , o = Rs()
      , i = Rs()
      , a = Rs()
      , l = no(gr);
    let u = gr;
    Kn && n.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const c = ji.bind(null, S => "" + S)
      , f = ji.bind(null, $g)
      , h = ji.bind(null, pi);
    function d(S, F) {
        let A, O;
        return Uc(S) ? (A = e.getRecordMatcher(S),
        O = F) : O = S,
        e.addRoute(O, A)
    }
    function p(S) {
        const F = e.getRecordMatcher(S);
        F && e.removeRoute(F)
    }
    function _() {
        return e.getRoutes().map(S => S.record)
    }
    function g(S) {
        return !!e.getRecordMatcher(S)
    }
    function m(S, F) {
        if (F = he({}, F || l.value),
        typeof S == "string") {
            const N = zi(t, S, F.path)
              , ie = e.resolve({
                path: N.path
            }, F)
              , Ve = s.createHref(N.fullPath);
            return he(N, ie, {
                params: h(ie.params),
                hash: pi(N.hash),
                redirectedFrom: void 0,
                href: Ve
            })
        }
        let A;
        if ("path"in S)
            A = he({}, S, {
                path: zi(t, S.path, F.path).path
            });
        else {
            const N = he({}, S.params);
            for (const ie in N)
                N[ie] == null && delete N[ie];
            A = he({}, S, {
                params: f(N)
            }),
            F.params = f(F.params)
        }
        const O = e.resolve(A, F)
          , G = S.hash || "";
        O.params = c(h(O.params));
        const ce = Q_(r, he({}, S, {
            hash: Ig(G),
            path: O.path
        }))
          , L = s.createHref(ce);
        return he({
            fullPath: ce,
            hash: G,
            query: r === pl ? Vg(S.query) : S.query || {}
        }, O, {
            redirectedFrom: void 0,
            href: L
        })
    }
    function D(S) {
        return typeof S == "string" ? zi(t, S, l.value.path) : he({}, S)
    }
    function v(S, F) {
        if (u !== S)
            return ps(8, {
                from: F,
                to: S
            })
    }
    function y(S) {
        return C(S)
    }
    function E(S) {
        return y(he(D(S), {
            replace: !0
        }))
    }
    function b(S) {
        const F = S.matched[S.matched.length - 1];
        if (F && F.redirect) {
            const {redirect: A} = F;
            let O = typeof A == "function" ? A(S) : A;
            return typeof O == "string" && (O = O.includes("?") || O.includes("#") ? O = D(O) : {
                path: O
            },
            O.params = {}),
            he({
                query: S.query,
                hash: S.hash,
                params: "path"in O ? {} : S.params
            }, O)
        }
    }
    function C(S, F) {
        const A = u = m(S)
          , O = l.value
          , G = S.state
          , ce = S.force
          , L = S.replace === !0
          , N = b(A);
        if (N)
            return C(he(D(N), {
                state: typeof N == "object" ? he({}, G, N.state) : G,
                force: ce,
                replace: L
            }), F || A);
        const ie = A;
        ie.redirectedFrom = F;
        let Ve;
        return !ce && Z_(r, O, A) && (Ve = ps(16, {
            to: ie,
            from: O
        }),
        Q(O, O, !0, !1)),
        (Ve ? Promise.resolve(Ve) : P(ie, O)).catch(x => Rr(x) ? Rr(x, 2) ? x : w(x) : J(x, ie, O)).then(x => {
            if (x) {
                if (Rr(x, 2))
                    return C(he({
                        replace: L
                    }, D(x.to), {
                        state: typeof x.to == "object" ? he({}, G, x.to.state) : G,
                        force: ce
                    }), F || ie)
            } else
                x = R(ie, O, !0, L, G);
            return $(ie, O, x),
            x
        }
        )
    }
    function k(S, F) {
        const A = v(S, F);
        return A ? Promise.reject(A) : Promise.resolve()
    }
    function T(S) {
        const F = le.values().next().value;
        return F && typeof F.runWithContext == "function" ? F.runWithContext(S) : S()
    }
    function P(S, F) {
        let A;
        const [O,G,ce] = Kg(S, F);
        A = Ui(O.reverse(), "beforeRouteLeave", S, F);
        for (const N of O)
            N.leaveGuards.forEach(ie => {
                A.push(Xr(ie, S, F))
            }
            );
        const L = k.bind(null, S, F);
        return A.push(L),
        Ee(A).then( () => {
            A = [];
            for (const N of o.list())
                A.push(Xr(N, S, F));
            return A.push(L),
            Ee(A)
        }
        ).then( () => {
            A = Ui(G, "beforeRouteUpdate", S, F);
            for (const N of G)
                N.updateGuards.forEach(ie => {
                    A.push(Xr(ie, S, F))
                }
                );
            return A.push(L),
            Ee(A)
        }
        ).then( () => {
            A = [];
            for (const N of ce)
                if (N.beforeEnter)
                    if (lr(N.beforeEnter))
                        for (const ie of N.beforeEnter)
                            A.push(Xr(ie, S, F));
                    else
                        A.push(Xr(N.beforeEnter, S, F));
            return A.push(L),
            Ee(A)
        }
        ).then( () => (S.matched.forEach(N => N.enterCallbacks = {}),
        A = Ui(ce, "beforeRouteEnter", S, F),
        A.push(L),
        Ee(A))).then( () => {
            A = [];
            for (const N of i.list())
                A.push(Xr(N, S, F));
            return A.push(L),
            Ee(A)
        }
        ).catch(N => Rr(N, 8) ? N : Promise.reject(N))
    }
    function $(S, F, A) {
        a.list().forEach(O => T( () => O(S, F, A)))
    }
    function R(S, F, A, O, G) {
        const ce = v(S, F);
        if (ce)
            return ce;
        const L = F === gr
          , N = Kn ? history.state : {};
        A && (O || L ? s.replace(S.fullPath, he({
            scroll: L && N && N.scroll
        }, G)) : s.push(S.fullPath, G)),
        l.value = S,
        Q(S, F, A, L),
        w()
    }
    let z;
    function Y() {
        z || (z = s.listen( (S, F, A) => {
            if (!ve.listening)
                return;
            const O = m(S)
              , G = b(O);
            if (G) {
                C(he(G, {
                    replace: !0
                }), O).catch(Vs);
                return
            }
            u = O;
            const ce = l.value;
            Kn && ag(il(ce.fullPath, A.delta), Fi()),
            P(O, ce).catch(L => Rr(L, 12) ? L : Rr(L, 2) ? (C(L.to, O).then(N => {
                Rr(N, 20) && !A.delta && A.type === ao.pop && s.go(-1, !1)
            }
            ).catch(Vs),
            Promise.reject()) : (A.delta && s.go(-A.delta, !1),
            J(L, O, ce))).then(L => {
                L = L || R(O, ce, !1),
                L && (A.delta && !Rr(L, 8) ? s.go(-A.delta, !1) : A.type === ao.pop && Rr(L, 20) && s.go(-1, !1)),
                $(O, ce, L)
            }
            ).catch(Vs)
        }
        ))
    }
    let j = Rs(), H = Rs(), V;
    function J(S, F, A) {
        w(S);
        const O = H.list();
        return O.length ? O.forEach(G => G(S, F, A)) : console.error(S),
        Promise.reject(S)
    }
    function de() {
        return V && l.value !== gr ? Promise.resolve() : new Promise( (S, F) => {
            j.add([S, F])
        }
        )
    }
    function w(S) {
        return V || (V = !S,
        Y(),
        j.list().forEach( ([F,A]) => S ? A(S) : F()),
        j.reset()),
        S
    }
    function Q(S, F, A, O) {
        const {scrollBehavior: G} = n;
        if (!Kn || !G)
            return Promise.resolve();
        const ce = !A && ug(il(S.fullPath, 0)) || (O || !A) && history.state && history.state.scroll || null;
        return $r().then( () => G(S, F, ce)).then(L => L && ig(L)).catch(L => J(L, S, F))
    }
    const Pe = S => s.go(S);
    let ye;
    const le = new Set
      , ve = {
        currentRoute: l,
        listening: !0,
        addRoute: d,
        removeRoute: p,
        hasRoute: g,
        getRoutes: _,
        resolve: m,
        options: n,
        push: y,
        replace: E,
        go: Pe,
        back: () => Pe(-1),
        forward: () => Pe(1),
        beforeEach: o.add,
        beforeResolve: i.add,
        afterEach: a.add,
        onError: H.add,
        isReady: de,
        install(S) {
            const F = this;
            S.component("RouterLink", qg),
            S.component("RouterView", Qc),
            S.config.globalProperties.$router = F,
            Object.defineProperty(S.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => W(l)
            }),
            Kn && !ye && l.value === gr && (ye = !0,
            y(s.location).catch(G => {}
            ));
            const A = {};
            for (const G in gr)
                Object.defineProperty(A, G, {
                    get: () => l.value[G],
                    enumerable: !0
                });
            S.provide(du, F),
            S.provide(hu, Ti(A)),
            S.provide(Ca, l);
            const O = S.unmount;
            le.add(S),
            S.unmount = function() {
                le.delete(S),
                le.size < 1 && (u = gr,
                z && z(),
                z = null,
                l.value = gr,
                ye = !1,
                V = !1),
                O()
            }
        }
    };
    function Ee(S) {
        return S.reduce( (F, A) => F.then( () => T(A)), Promise.resolve())
    }
    return ve
}
function Kg(n, e) {
    const t = []
      , r = []
      , s = []
      , o = Math.max(e.matched.length, n.matched.length);
    for (let i = 0; i < o; i++) {
        const a = e.matched[i];
        a && (n.matched.find(u => hs(u, a)) ? r.push(a) : t.push(a));
        const l = n.matched[i];
        l && (e.matched.find(u => hs(u, l)) || s.push(l))
    }
    return [t, r, s]
}
function Jg() {
    return Zt(hu)
}
const vl = [{
    name: "locale-pageSlug",
    path: "/:locale()/:pageSlug()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => M( () => import("./_pageSlug_.32f9d67c.js"), ["./_pageSlug_.32f9d67c.js", "./SectionTitle.e34d23f8.js", "./CommonTitle.c7e438c6.js", "./CommonSeoMeta.91fe8066.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./CommonTitle.168d8520.css", "./CommonMicroserviceImage.1a0de30a.js", "./SectionTitle.0f4cabb6.css", "./_pageSlug_.140d789c.css"], import.meta.url).then(n => n.default || n)
}, {
    name: "locale-about",
    path: "/:locale()/about",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => M( () => import("./index.48bb0028.js"), ["./index.48bb0028.js", "./SectionTitle.e34d23f8.js", "./CommonTitle.c7e438c6.js", "./CommonSeoMeta.91fe8066.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./CommonTitle.168d8520.css", "./CommonMicroserviceImage.1a0de30a.js", "./SectionTitle.0f4cabb6.css", "./index.c9849748.css"], import.meta.url).then(n => n.default || n)
}, {
    name: "locale-careers-slug",
    path: "/:locale()/careers/:slug()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => M( () => import("./_slug_.3fcb3a0c.js"), ["./_slug_.3fcb3a0c.js", "./SectionTitle.e34d23f8.js", "./CommonTitle.c7e438c6.js", "./CommonSeoMeta.91fe8066.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./CommonTitle.168d8520.css", "./CommonMicroserviceImage.1a0de30a.js", "./SectionTitle.0f4cabb6.css", "./_slug_.30afd087.css"], import.meta.url).then(n => n.default || n)
}, {
    name: "locale-careers",
    path: "/:locale()/careers",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => M( () => import("./index.4c25bd13.js"), ["./index.4c25bd13.js", "./SectionTitle.e34d23f8.js", "./CommonTitle.c7e438c6.js", "./CommonSeoMeta.91fe8066.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./CommonTitle.168d8520.css", "./CommonMicroserviceImage.1a0de30a.js", "./SectionTitle.0f4cabb6.css", "./index.68a5f058.css"], import.meta.url).then(n => n.default || n)
}, {
    name: "locale-contacts",
    path: "/:locale()/contacts",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => M( () => import("./index.b403e8c6.js"), ["./index.b403e8c6.js", "./SectionTitle.e34d23f8.js", "./CommonTitle.c7e438c6.js", "./CommonSeoMeta.91fe8066.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./CommonTitle.168d8520.css", "./CommonMicroserviceImage.1a0de30a.js", "./SectionTitle.0f4cabb6.css", "./index.8b13fd4a.css"], import.meta.url).then(n => n.default || n)
}, {
    name: "locale-downloads",
    path: "/:locale()/downloads",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => M( () => import("./index.46ea15f1.js"), ["./index.46ea15f1.js", "./UILoader.190d6481.js", "./CommonTitle.c7e438c6.js", "./CommonSeoMeta.91fe8066.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./CommonTitle.168d8520.css", "./UITag.c82f8992.js", "./UITag.69a8544b.css", "./UILoader.01ed5591.css", "./CommonMicroserviceImage.1a0de30a.js", "./formatDate.5e7c4496.js", "./index.9a11139f.css"], import.meta.url).then(n => n.default || n)
}, {
    name: "locale",
    path: "/:locale()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => M( () => import("./index.0664d040.js"), ["./index.0664d040.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./CommonTitle.c7e438c6.js", "./CommonSeoMeta.91fe8066.js", "./CommonTitle.168d8520.css", "./UiButtonSquare.229cbf53.js", "./UiButtonSquare.26f98698.css", "./VideoComponent.4b1d83a6.js", "./VideoComponent.de379bbb.css", "./index.cad06e7b.css"], import.meta.url).then(n => n.default || n)
}, {
    name: "locale-inspiration",
    path: "/:locale()/inspiration",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => M( () => import("./index.d25b1d09.js"), ["./index.d25b1d09.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./CommonTitle.c7e438c6.js", "./CommonSeoMeta.91fe8066.js", "./CommonTitle.168d8520.css", "./UiButtonSquare.229cbf53.js", "./UiButtonSquare.26f98698.css", "./index.e0309c31.css"], import.meta.url).then(n => n.default || n)
}, {
    name: "locale-legal-slug",
    path: "/:locale()/legal/:slug()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => M( () => import("./_slug_.28d8c5d1.js"), ["./_slug_.28d8c5d1.js", "./CommonTitle.c7e438c6.js", "./CommonSeoMeta.91fe8066.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./CommonTitle.168d8520.css", "./_slug_.ed4938ed.css"], import.meta.url).then(n => n.default || n)
}, {
    name: "locale-legal",
    path: "/:locale()/legal",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => M( () => import("./index.ea784319.js"), ["./index.ea784319.js", "./CommonTitle.c7e438c6.js", "./CommonSeoMeta.91fe8066.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./CommonTitle.168d8520.css", "./index.2fa1f402.css"], import.meta.url).then(n => n.default || n)
}, {
    name: "locale-news-slug",
    path: "/:locale()/news/:slug()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => M( () => import("./_slug_.bf7c13a7.js"), ["./_slug_.bf7c13a7.js", "./CommonTitle.c7e438c6.js", "./CommonSeoMeta.91fe8066.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./CommonTitle.168d8520.css", "./UiLink.a6e8cf4e.js", "./UiLink.8385fcea.css", "./NewsCard.80a5b5ad.js", "./CommonMicroserviceImage.1a0de30a.js", "./formatDate.5e7c4496.js", "./NewsCard.1e0d3c70.css", "./_slug_.3cb9f779.css"], import.meta.url).then(n => n.default || n)
}, {
    name: "locale-news",
    path: "/:locale()/news",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => M( () => import("./index.8f869487.js"), ["./index.8f869487.js", "./UILoader.190d6481.js", "./CommonTitle.c7e438c6.js", "./CommonSeoMeta.91fe8066.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./CommonTitle.168d8520.css", "./UITag.c82f8992.js", "./UITag.69a8544b.css", "./UILoader.01ed5591.css", "./NewsCard.80a5b5ad.js", "./CommonMicroserviceImage.1a0de30a.js", "./formatDate.5e7c4496.js", "./NewsCard.1e0d3c70.css", "./index.a945a6ad.css"], import.meta.url).then(n => n.default || n)
}, {
    name: "locale-projects-slug",
    path: "/:locale()/projects/:slug()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => M( () => import("./_slug_.704ab996.js"), ["./_slug_.704ab996.js", "./nuxt-img.9441256c.js", "./CommonSeoMeta.91fe8066.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./VideoComponent.4b1d83a6.js", "./VideoComponent.de379bbb.css", "./UiButtonSquare.229cbf53.js", "./UiButtonSquare.26f98698.css", "./CommonMicroserviceImage.1a0de30a.js", "./textAnimationUtil.1ce5245a.js", "./_slug_.ddd9ca8f.css"], import.meta.url).then(n => n.default || n)
}, {
    name: "locale-projects",
    path: "/:locale()/projects",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => M( () => import("./index.421bdab8.js"), ["./index.421bdab8.js", "./SectionTitle.e34d23f8.js", "./CommonTitle.c7e438c6.js", "./CommonSeoMeta.91fe8066.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./CommonTitle.168d8520.css", "./CommonMicroserviceImage.1a0de30a.js", "./SectionTitle.0f4cabb6.css", "./index.4145cb5b.css"], import.meta.url).then(n => n.default || n)
}, {
    name: "index",
    path: "/",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => M( () => import("./index.01febfdf.js"), ["./index.01febfdf.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css"], import.meta.url).then(n => n.default || n)
}]
  , Qg = {
    scrollBehavior(n, e, t) {
        var u;
        const r = De()
          , s = ((u = Vr().options) == null ? void 0 : u.scrollBehaviorType) ?? "auto";
        let o = t || void 0;
        const i = typeof n.meta.scrollToTop == "function" ? n.meta.scrollToTop(n, e) : n.meta.scrollToTop;
        if (!o && e && n && i !== !1 && Zg(e, n) && (o = {
            left: 0,
            top: 0
        }),
        n.path === e.path) {
            if (e.hash && !n.hash)
                return {
                    left: 0,
                    top: 0
                };
            if (n.hash)
                return {
                    el: n.hash,
                    top: wl(n.hash),
                    behavior: s
                }
        }
        const a = c => !!(c.meta.pageTransition ?? va)
          , l = a(e) && a(n) ? "page:transition:finish" : "page:finish";
        return new Promise(c => {
            r.hooks.hookOnce(l, async () => {
                await $r(),
                n.hash && (o = {
                    el: n.hash,
                    top: wl(n.hash),
                    behavior: s
                }),
                c(o)
            }
            )
        }
        )
    }
};
function wl(n) {
    try {
        const e = document.querySelector(n);
        if (e)
            return parseFloat(getComputedStyle(e).scrollMarginTop)
    } catch {}
    return 0
}
function Zg(n, e) {
    return e.path !== n.path || JSON.stringify(n.params) !== JSON.stringify(e.params)
}
const e0 = {}
  , Ct = {
    ...e0,
    ...Qg
}
  , t0 = async n => {
    var l;
    let e, t;
    if (!((l = n.meta) != null && l.validate))
        return;
    const r = De()
      , s = Vr();
    if (([e,t] = io( () => Promise.resolve(n.meta.validate(n))),
    e = await e,
    t(),
    e) === !0)
        return;
    const i = Ri({
        statusCode: 404,
        statusMessage: `Page Not Found: ${n.fullPath}`
    })
      , a = s.beforeResolve(u => {
        if (a(),
        u === n) {
            const c = s.afterEach(async () => {
                c(),
                await r.runWithContext( () => Zn(i)),
                window.history.pushState({}, "", n.fullPath)
            }
            );
            return !1
        }
    }
    )
}
  , r0 = !1;
/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let Zc;
const xo = n => Zc = n
  , ef = Symbol();
function ba(n) {
    return n && typeof n == "object" && Object.prototype.toString.call(n) === "[object Object]" && typeof n.toJSON != "function"
}
var zs;
(function(n) {
    n.direct = "direct",
    n.patchObject = "patch object",
    n.patchFunction = "patch function"
}
)(zs || (zs = {}));
function n0() {
    const n = dc(!0)
      , e = n.run( () => qe({}));
    let t = []
      , r = [];
    const s = hc({
        install(o) {
            xo(s),
            s._a = o,
            o.provide(ef, s),
            o.config.globalProperties.$pinia = s,
            r.forEach(i => t.push(i)),
            r = []
        },
        use(o) {
            return !this._a && !r0 ? r.push(o) : t.push(o),
            this
        },
        _p: t,
        _a: null,
        _e: n,
        _s: new Map,
        state: e
    });
    return s
}
const tf = () => {}
;
function El(n, e, t, r=tf) {
    n.push(e);
    const s = () => {
        const o = n.indexOf(e);
        o > -1 && (n.splice(o, 1),
        r())
    }
    ;
    return !t && Kd() && Jd(s),
    s
}
function Wn(n, ...e) {
    n.slice().forEach(t => {
        t(...e)
    }
    )
}
const s0 = n => n();
function xa(n, e) {
    n instanceof Map && e instanceof Map && e.forEach( (t, r) => n.set(r, t)),
    n instanceof Set && e instanceof Set && e.forEach(n.add, n);
    for (const t in e) {
        if (!e.hasOwnProperty(t))
            continue;
        const r = e[t]
          , s = n[t];
        ba(s) && ba(r) && n.hasOwnProperty(t) && !so(r) && !su(r) ? n[t] = xa(s, r) : n[t] = r
    }
    return n
}
const o0 = Symbol();
function i0(n) {
    return !ba(n) || !n.hasOwnProperty(o0)
}
const {assign: Wr} = Object;
function a0(n) {
    return !!(so(n) && n.effect)
}
function u0(n, e, t, r) {
    const {state: s, actions: o, getters: i} = e
      , a = t.state.value[n];
    let l;
    function u() {
        a || (t.state.value[n] = s ? s() : {});
        const c = Qd(t.state.value[n]);
        return Wr(c, o, Object.keys(i || {}).reduce( (f, h) => (f[h] = hc(Qe( () => {
            xo(t);
            const d = t._s.get(n);
            return i[h].call(d, d)
        }
        )),
        f), {}))
    }
    return l = rf(n, u, e, t, r, !0),
    l
}
function rf(n, e, t={}, r, s, o) {
    let i;
    const a = Wr({
        actions: {}
    }, t)
      , l = {
        deep: !0
    };
    let u, c, f = [], h = [], d;
    const p = r.state.value[n];
    !o && !p && (r.state.value[n] = {}),
    qe({});
    let _;
    function g(k) {
        let T;
        u = c = !1,
        typeof k == "function" ? (k(r.state.value[n]),
        T = {
            type: zs.patchFunction,
            storeId: n,
            events: d
        }) : (xa(r.state.value[n], k),
        T = {
            type: zs.patchObject,
            payload: k,
            storeId: n,
            events: d
        });
        const P = _ = Symbol();
        $r().then( () => {
            _ === P && (u = !0)
        }
        ),
        c = !0,
        Wn(f, T, r.state.value[n])
    }
    const m = o ? function() {
        const {state: T} = t
          , P = T ? T() : {};
        this.$patch($ => {
            Wr($, P)
        }
        )
    }
    : tf;
    function D() {
        i.stop(),
        f = [],
        h = [],
        r._s.delete(n)
    }
    function v(k, T) {
        return function() {
            xo(r);
            const P = Array.from(arguments)
              , $ = []
              , R = [];
            function z(H) {
                $.push(H)
            }
            function Y(H) {
                R.push(H)
            }
            Wn(h, {
                args: P,
                name: k,
                store: E,
                after: z,
                onError: Y
            });
            let j;
            try {
                j = T.apply(this && this.$id === n ? this : E, P)
            } catch (H) {
                throw Wn(R, H),
                H
            }
            return j instanceof Promise ? j.then(H => (Wn($, H),
            H)).catch(H => (Wn(R, H),
            Promise.reject(H))) : (Wn($, j),
            j)
        }
    }
    const y = {
        _p: r,
        $id: n,
        $onAction: El.bind(null, h),
        $patch: g,
        $reset: m,
        $subscribe(k, T={}) {
            const P = El(f, k, T.detached, () => $())
              , $ = i.run( () => Cs( () => r.state.value[n], R => {
                (T.flush === "sync" ? c : u) && k({
                    storeId: n,
                    type: zs.direct,
                    events: d
                }, R)
            }
            , Wr({}, l, T)));
            return P
        },
        $dispose: D
    }
      , E = fs(y);
    r._s.set(n, E);
    const b = r._a && r._a.runWithContext || s0
      , C = r._e.run( () => (i = dc(),
    b( () => i.run(e))));
    for (const k in C) {
        const T = C[k];
        if (so(T) && !a0(T) || su(T))
            o || (p && i0(T) && (so(T) ? T.value = p[k] : xa(T, p[k])),
            r.state.value[n][k] = T);
        else if (typeof T == "function") {
            const P = v(k, T);
            C[k] = P,
            a.actions[k] = T
        }
    }
    return Wr(E, C),
    Wr(ru(E), C),
    Object.defineProperty(E, "$state", {
        get: () => r.state.value[n],
        set: k => {
            g(T => {
                Wr(T, k)
            }
            )
        }
    }),
    r._p.forEach(k => {
        Wr(E, i.run( () => k({
            store: E,
            app: r._a,
            pinia: r,
            options: a
        })))
    }
    ),
    p && o && t.hydrate && t.hydrate(E.$state, p),
    u = !0,
    c = !0,
    E
}
function Ot(n, e, t) {
    let r, s;
    const o = typeof e == "function";
    typeof n == "string" ? (r = n,
    s = o ? t : e) : (s = n,
    r = n.id);
    function i(a, l) {
        const u = eu();
        return a = a || (u ? Zt(ef, null) : null),
        a && xo(a),
        a = Zc,
        a._s.has(r) || (o ? rf(r, e, s, a) : u0(r, s, a)),
        a._s.get(r)
    }
    return i.$id = r,
    i
}
function cr(n) {
    {
        n = ru(n);
        const e = {};
        for (const t in n) {
            const r = n[t];
            (so(r) || su(r)) && (e[t] = xi(n, t))
        }
        return e
    }
}
const ke = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    pages: {
        url: "/api/pages"
    },
    news: {
        url: "/api/blog_posts"
    },
    newsTags: {
        url: "/api/blog_tags"
    },
    projects: {
        url: "/api/projects"
    },
    jobs: {
        url: "/api/job_offers"
    },
    banners: {
        url: "/api/banners"
    },
    documents: {
        url: "/api/documents"
    },
    subscribers: {
        url: "/api/subscribers"
    },
    locale: {
        url: "/api/locales"
    },
    partners: {
        url: "/api/partner_logos"
    },
    socialLogo: {
        url: "/api/social_network_logos"
    },
    staticText: {
        url: "/api/static_texts"
    },
    menus: {
        url: "/api/menus"
    },
    downloads: {
        url: "/api/downloads"
    },
    downloadTags: {
        url: "/api/download_tags"
    },
    jobTags: {
        url: "/api/job_offer_tags"
    },
    platforms: {
        url: "/api/platforms"
    }
}
  , Ie = (n, e) => {
    const t = To()
      , {localeLang: r} = cr(t);
    return $fetch(xs().public.baseUrl + n, {
        ...e,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": r.value.code
        },
        onRequest({request: s, options: o}) {},
        onRequestError({request: s, options: o, error: i}) {},
        onResponse({request: s, options: o, response: i}) {},
        onResponseError({request: s, options: o, response: i}) {}
    })
}
  , nf = (n, e) => {
    const t = To()
      , {localeLang: r} = cr(t);
    return $fetch.raw(xs().public.baseUrl + n, {
        ...e,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": r.value.code
        },
        onRequest({request: s, options: o}) {},
        onRequestError({request: s, options: o, error: i}) {},
        onResponse({request: s, options: o, response: i}) {},
        onResponseError({request: s, options: o, response: i}) {}
    })
}
  , l0 = (n, e, t="desc") => {
    const {news: r} = ke;
    return nf(r.url, {
        params: {
            "tags.slug[]": n,
            page: e,
            "order[created]": t
        }
    })
}
  , c0 = () => {
    const {newsTags: n} = ke;
    return Ie(n.url, {})
}
  , f0 = n => {
    const {news: e} = ke;
    return Ie(e.url + "/" + n, {})
}
  , d0 = n => {
    const {jobs: e} = ke;
    return Ie(e.url, {
        params: {
            "tags.slug[]": n
        }
    })
}
  , h0 = n => {
    const {jobs: e} = ke;
    return Ie(e.url + "/" + n, {})
}
  , p0 = () => {
    const {jobTags: n} = ke;
    return Ie(n.url, {})
}
  , _0 = n => {
    const {menus: e} = ke;
    return Ie(e.url, {
        query: {
            page: 1,
            "menuType[]": n
        }
    })
}
  , g0 = () => {
    const {pages: n} = ke;
    return Ie(n.url, {})
}
  , m0 = n => {
    const {pages: e} = ke;
    return Ie(e.url + "/" + n, {})
}
  , D0 = () => {
    const {locale: n} = ke;
    return Ie(n.url, {})
}
  , y0 = () => {
    const {banners: n} = ke;
    return Ie(n.url, {})
}
  , v0 = n => {
    const {banners: e} = ke;
    return Ie(e.url, {
        params: {
            "bannerTags.slug[]": n
        }
    })
}
  , w0 = () => {
    const {partners: n} = ke;
    return Ie(n.url, {})
}
  , E0 = (n="asc") => {
    const {projects: e} = ke;
    return Ie(e.url, {
        params: {
            "order[customOrder]": n
        }
    })
}
  , C0 = n => {
    const {projects: e} = ke;
    return Ie(e.url + "/" + n, {})
}
  , b0 = (n, e, t, r) => {
    const {downloads: s} = ke;
    return nf(s.url, {
        params: {
            page: n,
            "tags.title[]": e,
            "project.title[]": t,
            "order[created]": r
        }
    })
}
  , x0 = () => {
    const {downloadTags: n} = ke;
    return Ie(n.url, {})
}
  , T0 = () => {
    const {documents: n} = ke;
    return Ie(n.url, {})
}
  , S0 = n => {
    const {documents: e} = ke;
    return Ie(e.url + "/" + n, {})
}
  , k0 = (n, e, t) => {
    const {subscribers: r} = ke;
    return Ie(r.url, {
        method: "POST",
        body: {
            email: n,
            type: e,
            consent: t
        }
    })
}
  , P0 = () => {
    const {socialLogo: n} = ke;
    return Ie(n.url, {})
}
  , R0 = () => {
    const {staticText: n} = ke
      , e = To()
      , {localeLang: t} = cr(e);
    return Ie(n.url, {
        params: {
            "locale.code": t.value.code
        }
    })
}
  , A0 = () => {
    const {platforms: n} = ke;
    return Ie(n.url, {})
}
  , Qy = Ot("news", {
    state: () => ({
        newsSlugs: [],
        newsArr: [],
        newsTags: [],
        oneNews: new Map,
        limitPage: null,
        page: 1
    }),
    actions: {
        async fetchNews(n, e, t) {
            try {
                const r = await l0(n, e, t);
                for (const s of r.headers)
                    s[0] === "pagination-limit" && (this.limitPage = Number(s[1]));
                return this.page !== 1 ? this.newsArr = this.newsArr.concat(r._data) : this.newsArr = r._data,
                r._data
            } catch (r) {
                console.error("fetchPages ERROR: ", r)
            }
        },
        async fetchAllTags() {
            try {
                return await c0()
            } catch (n) {
                console.error("fetchPages ERROR: ", n)
            }
        },
        async fetchOneNews(n) {
            try {
                return await f0(n)
            } catch (e) {
                console.error("fetchPages ERROR: ", e)
            }
        }
    }
})
  , Zy = Ot("jobs", {
    state: () => ({
        jobsArr: [],
        oneJob: new Map
    }),
    actions: {
        async fetchJobs(n) {
            try {
                return await d0(n)
            } catch (e) {
                console.error("fetchPages ERROR: ", e)
            }
        },
        async fetchOneJob(n) {
            try {
                return await h0(n)
            } catch (e) {
                console.error("fetchPages ERROR: ", e)
            }
        },
        async fetchJobTags() {
            try {
                return await p0()
            } catch (n) {
                console.error("fetchPages ERROR: ", n)
            }
        }
    }
})
  , e1 = Ot("form-store", {
    state: () => ({
        dataForm: {}
    }),
    actions: {
        async postSub(n, e, t) {
            try {
                const {data: r} = await k0(n, e, t);
                return this.dataForm = r,
                this.dataForm
            } catch (r) {
                if (r.response.status === 422)
                    return console.error("fetchPages ERROR: ", r),
                    !0
            }
        }
    }
})
  , t1 = Ot("page", {
    state: () => ({
        pages: [],
        activePageInfo: new Map
    }),
    actions: {
        async fetchPages() {
            try {
                const n = await g0();
                return this.pages = n,
                n
            } catch (n) {
                console.error("fetchPages ERROR: ", n)
            }
        },
        async fetchPageBlocks(n) {
            try {
                const e = await m0(n);
                return this.activePageInfo.set(e.slug, e),
                e
            } catch (e) {
                return console.error("fetchPages ERROR: ", e),
                Promise.reject(e)
            }
        }
    }
})
  , r1 = Ot("base-store", {
    state: () => ({
        windowWidth: 0
    }),
    getters: {
        getWindowWidthPage() {
            return window.innerWidth
        },
        WIDTH(n) {
            return n.windowWidth
        }
    },
    actions: {
        SET_WIDTH(n) {
            this.windowWidth = n
        }
    }
})
  , Oi = Ot("menus-store", {
    state: () => ({
        menusArr: new Map
    }),
    actions: {
        async getMenusArr(n) {
            try {
                const e = await _0(n);
                if (this.menusArr.set(n, e),
                n === "HeaderMenu")
                    for (const t of e)
                        this.menusArr.set(t.pageSlug, t.subMenuLinks);
                return e
            } catch (e) {
                console.error("fetchHeaderMenus ERROR: ", e)
            }
        }
    }
})
  , n1 = Ot("banners", {
    state: () => ({
        bannersArr: [],
        bannersSlug: new Map
    }),
    actions: {
        async fetchBanners() {
            try {
                return await y0()
            } catch (n) {
                console.error("fetchPages ERROR: ", n)
            }
        },
        async fetchBannersSlug(n) {
            try {
                return await v0(n)
            } catch (e) {
                console.error("fetchPages ERROR: ", e)
            }
        }
    }
})
  , To = Ot("locales-store", {
    state: () => ({
        localesArr: [],
        localeLang: {
            code: "en",
            name: "en"
        }
    }),
    actions: {
        async fetchLocalesArr() {
            try {
                const n = await D0();
                return this.localesArr = n,
                this.localesArr
            } catch (n) {
                console.error("fetchPages ERROR: ", n)
            }
        }
    }
})
  , s1 = Ot("partners-store", {
    state: () => ({}),
    actions: {
        async fetchAllPartners() {
            try {
                return await w0()
            } catch (n) {
                console.error("partners ERROR: ", n)
            }
        }
    }
})
  , o1 = Ot("projects", {
    state: () => ({
        projectsSlugs: [],
        projectsArr: [],
        oneProject: new Map
    }),
    actions: {
        async fetchProjects(n) {
            try {
                return await E0(n)
            } catch (e) {
                console.error("fetchPages ERROR: ", e)
            }
        },
        async fetchOneProject(n) {
            try {
                return await C0(n)
            } catch (e) {
                console.error("fetchPages ERROR: ", e)
            }
        }
    }
})
  , i1 = Ot("documents-store", {
    state: () => ({
        mapLegal: new Map
    }),
    actions: {
        async fetchDocuments() {
            try {
                return await T0()
            } catch (n) {
                console.error("documents ERROR: ", n)
            }
        },
        async fetchOneDocument(n) {
            try {
                return await S0(n)
            } catch (e) {
                console.error("one-document ERROR: ", e)
            }
        }
    }
})
  , a1 = Ot("downloads-store", {
    state: () => ({
        downloadsArr: [],
        limitPage: null,
        page: 1
    }),
    actions: {
        async fetchDownloadsArr(n, e, t) {
            try {
                const r = await b0(this.page, n, e, t);
                for (const s of r.headers)
                    s[0] === "pagination-limit" && (this.limitPage = Number(s[1]));
                return this.page !== 1 ? this.downloadsArr = this.downloadsArr.concat(r._data) : this.downloadsArr = r._data,
                r._data
            } catch (r) {
                console.error("downloads ERROR: ", r)
            }
        },
        async getDownloadTagsArr() {
            try {
                return await x0()
            } catch (n) {
                console.error("download-tags ERROR: ", n)
            }
        }
    }
})
  , sf = Ot("static-texts-store", {
    state: () => ({
        staticText: []
    }),
    getters: {
        consentPersonalData(n) {
            return n.staticText.find(e => e.textType === "ConsentPersonalData")
        },
        hotJobOffer(n) {
            return n.staticText.find(e => e.textType === "HotJobOffer")
        },
        defaultJobOffer(n) {
            return n.staticText.find(e => e.textType === "DefaultJobOffer")
        },
        saveScreenshots(n) {
            return n.staticText.find(e => e.textType === "SaveScreenshots")
        },
        partnerReadMore(n) {
            return n.staticText.find(e => e.textType === "PartnerReadMore")
        },
        soertingByTags(n) {
            return n.staticText.find(e => e.textType === "SortingByTags")
        },
        errorText(n) {
            return n.staticText.find(e => e.textType === "ErrorText")
        },
        errorButtonText(n) {
            return n.staticText.find(e => e.textType === "ErrorButtonText")
        },
        randomAnimationSymbols(n) {
            return n.staticText.find(e => e.textType === "RandomTextAnimation")
        }
    },
    actions: {
        async fetchAllStaticTexts() {
            try {
                const n = await R0();
                return this.staticText = n,
                n
            } catch (n) {
                console.error("all-static-texts ERROR: ", n)
            }
        }
    }
})
  , F0 = Ot("socials-store", {
    state: () => ({
        projectLogos: []
    }),
    actions: {
        async fetchAllSocials() {
            try {
                return await P0()
            } catch (n) {
                console.error("socials ERROR: ", n)
            }
        },
        async fetchAllPlatforms() {
            try {
                return await A0()
            } catch (n) {
                console.error("platforms ERROR: ", n)
            }
        }
    }
})
  , O0 = async (n, e) => {
    let t, r;
    const s = To()
      , {localeLang: o, localesArr: i} = cr(s);
    if (n.redirectedFrom || !n.matched.length || o.value.code && n.params.locale && o.value.code === n.params.locale)
        return;
    if (i.value.length || ([t,r] = io( () => s.fetchLocalesArr()),
    await t,
    r()),
    !(n.params.locale && i.value.length ? i.value.find( ({code: l}) => {
        if (!l)
            return !1;
        const u = n.params.locale instanceof Array ? n.params.locale[0] : n.params.locale;
        return l === u
    }
    ) : null) && o.value.code !== n.params.locale)
        return Ic(["/", o.value.code, n.fullPath].join(""), {
            redirectCode: 302
        })
}
  , M0 = [t0, O0]
  , Us = {};
function L0(n, e, t) {
    const {pathname: r, search: s, hash: o} = e
      , i = n.indexOf("#");
    if (i > -1) {
        const u = o.includes(n.slice(i)) ? n.slice(i).length : 1;
        let c = o.slice(u);
        return c[0] !== "/" && (c = "/" + c),
        Vu(c, "")
    }
    const a = Vu(r, n)
      , l = !t || Nh(a, t, {
        trailingSlash: !0
    }) ? a : t;
    return l + (l.includes("?") ? "" : s) + o
}
const I0 = Tr({
    name: "nuxt:router",
    enforce: "pre",
    async setup(n) {
        var _, g;
        let e, t, r = xs().app.baseURL;
        Ct.hashMode && !r.includes("#") && (r += "#");
        const s = ((_ = Ct.history) == null ? void 0 : _.call(Ct, r)) ?? (Ct.hashMode ? dg(r) : zc(r))
          , o = ((g = Ct.routes) == null ? void 0 : g.call(Ct, vl)) ?? vl;
        let i;
        const a = L0(r, window.location, n.payload.path)
          , l = Gg({
            ...Ct,
            scrollBehavior: (m, D, v) => {
                var y;
                if (D === gr) {
                    i = v;
                    return
                }
                return l.options.scrollBehavior = Ct.scrollBehavior,
                (y = Ct.scrollBehavior) == null ? void 0 : y.call(Ct, m, gr, i || v)
            }
            ,
            history: s,
            routes: o
        });
        n.vueApp.use(l);
        const u = no(l.currentRoute.value);
        l.afterEach( (m, D) => {
            u.value = D
        }
        ),
        Object.defineProperty(n.vueApp.config.globalProperties, "previousRoute", {
            get: () => u.value
        });
        const c = no(l.resolve(a))
          , f = () => {
            c.value = l.currentRoute.value
        }
        ;
        n.hook("page:finish", f),
        l.afterEach( (m, D) => {
            var v, y, E, b;
            ((y = (v = m.matched[0]) == null ? void 0 : v.components) == null ? void 0 : y.default) === ((b = (E = D.matched[0]) == null ? void 0 : E.components) == null ? void 0 : b.default) && f()
        }
        );
        const h = {};
        for (const m in c.value)
            Object.defineProperty(h, m, {
                get: () => c.value[m]
            });
        n._route = Ti(h),
        n._middleware = n._middleware || {
            global: [],
            named: {}
        };
        const d = Pi();
        try {
            [e,t] = io( () => l.isReady()),
            await e,
            t()
        } catch (m) {
            [e,t] = io( () => n.runWithContext( () => Zn(m))),
            await e,
            t()
        }
        const p = n.payload.state._layout;
        return l.beforeEach(async (m, D) => {
            var v;
            m.meta = fs(m.meta),
            n.isHydrating && p && !Zd(m.meta.layout) && (m.meta.layout = p),
            n._processingMiddleware = !0;
            {
                const y = new Set([...M0, ...n._middleware.global]);
                for (const E of m.matched) {
                    const b = E.meta.middleware;
                    if (b)
                        if (Array.isArray(b))
                            for (const C of b)
                                y.add(C);
                        else
                            y.add(b)
                }
                for (const E of y) {
                    const b = typeof E == "string" ? n._middleware.named[E] || await ((v = Us[E]) == null ? void 0 : v.call(Us).then(k => k.default || k)) : E;
                    if (!b)
                        throw new Error(`Unknown route middleware: '${E}'.`);
                    const C = await n.runWithContext( () => b(m, D));
                    if (!n.payload.serverRendered && n.isHydrating && (C === !1 || C instanceof Error)) {
                        const k = C || ma({
                            statusCode: 404,
                            statusMessage: `Page Not Found: ${a}`
                        });
                        return await n.runWithContext( () => Zn(k)),
                        !1
                    }
                    if (C !== !0 && (C || C === !1))
                        return C
                }
            }
        }
        ),
        l.onError( () => {
            delete n._processingMiddleware
        }
        ),
        l.afterEach(async (m, D, v) => {
            delete n._processingMiddleware,
            !n.isHydrating && d.value && await n.runWithContext(E_),
            m.matched.length === 0 && await n.runWithContext( () => Zn(ma({
                statusCode: 404,
                fatal: !1,
                statusMessage: `Page not found: ${m.fullPath}`
            })))
        }
        ),
        n.hooks.hookOnce("app:created", async () => {
            try {
                await l.replace({
                    ...l.resolve(a),
                    name: void 0,
                    force: !0
                }),
                l.options.scrollBehavior = Ct.scrollBehavior
            } catch (m) {
                await n.runWithContext( () => Zn(m))
            }
        }
        ),
        {
            provide: {
                router: l
            }
        }
    }
})
  , B0 = Tr({
    name: "nuxt:payload",
    setup(n) {
        Vr().beforeResolve(async (e, t) => {
            if (e.path === t.path)
                return;
            const r = await tl(e.path);
            r && Object.assign(n.static.data, r.data)
        }
        ),
        Bc( () => {
            n.hooks.hook("link:prefetch", async e => {
                Co(e).protocol || await tl(e)
            }
            )
        }
        )
    }
})
  , H0 = Tr(n => {
    const e = n0();
    return n.vueApp.use(e),
    xo(e),
    n.payload && n.payload.pinia && (e.state.value = n.payload.pinia),
    {
        provide: {
            pinia: e
        }
    }
}
)
  , $0 = eh( () => M( () => import("./nuxt-icon.39553cce.js"), ["./nuxt-icon.39553cce.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css"], import.meta.url).then(n => n.default))
  , N0 = [["NuxtIcon", $0]]
  , V0 = Tr({
    name: "nuxt:global-components",
    setup(n) {
        for (const [e,t] of N0)
            n.vueApp.component(e, t),
            n.vueApp.component("Lazy" + e, t)
    }
})
  , Tn = {
    default: () => M( () => import("./default.d8433ea8.js"), ["./default.d8433ea8.js", "./swiper-vue.ad6b35c4.js", "./swiper-vue.25ac1039.css", "./UiButtonSquare.229cbf53.js", "./UiButtonSquare.26f98698.css", "./default.bdddfd5d.css"], import.meta.url).then(n => n.default || n)
}
  , j0 = Tr({
    name: "nuxt:prefetch",
    setup(n) {
        const e = Vr();
        n.hooks.hook("app:mounted", () => {
            e.beforeEach(async t => {
                var s;
                const r = (s = t == null ? void 0 : t.meta) == null ? void 0 : s.layout;
                r && typeof Tn[r] == "function" && await Tn[r]()
            }
            )
        }
        ),
        n.hooks.hook("link:prefetch", t => {
            var i, a, l, u;
            if (bs(t))
                return;
            const r = e.resolve(t);
            if (!r)
                return;
            const s = (i = r == null ? void 0 : r.meta) == null ? void 0 : i.layout;
            let o = Array.isArray((a = r == null ? void 0 : r.meta) == null ? void 0 : a.middleware) ? (l = r == null ? void 0 : r.meta) == null ? void 0 : l.middleware : [(u = r == null ? void 0 : r.meta) == null ? void 0 : u.middleware];
            o = o.filter(c => typeof c == "string");
            for (const c of o)
                typeof Us[c] == "function" && Us[c]();
            s && typeof Tn[s] == "function" && Tn[s]()
        }
        )
    }
});
function Ar(n) {
    if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n
}
function of(n, e) {
    n.prototype = Object.create(e.prototype),
    n.prototype.constructor = n,
    n.__proto__ = e
}
/*!
 * GSAP 3.12.3
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var jt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, _s = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, pu, ut, Re, Kt = 1e8, ge = 1 / Kt, Ta = Math.PI * 2, z0 = Ta / 4, U0 = 0, af = Math.sqrt, q0 = Math.cos, W0 = Math.sin, Ze = function(e) {
    return typeof e == "string"
}, Ae = function(e) {
    return typeof e == "function"
}, Br = function(e) {
    return typeof e == "number"
}, _u = function(e) {
    return typeof e > "u"
}, xr = function(e) {
    return typeof e == "object"
}, kt = function(e) {
    return e !== !1
}, gu = function() {
    return typeof window < "u"
}, Oo = function(e) {
    return Ae(e) || Ze(e)
}, uf = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, lt = Array.isArray, Sa = /(?:-?\.?\d|\.)+/gi, lf = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, es = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, qi = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, cf = /[+-]=-?[.\d]+/, ff = /[^,'"\[\]\s]+/gi, Y0 = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Te, qt, ka, mu, zt = {}, _i = {}, df, hf = function(e) {
    return (_i = Bn(e, zt)) && Ft
}, Du = function(e, t) {
    return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
}, uo = function(e, t) {
    return !t && console.warn(e)
}, pf = function(e, t) {
    return e && (zt[e] = t) && _i && (_i[e] = t) || zt
}, lo = function() {
    return 0
}, X0 = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, Qo = {
    suppressEvents: !0,
    kill: !1
}, G0 = {
    suppressEvents: !0
}, yu = {}, en = [], Pa = {}, _f, Ht = {}, Wi = {}, Cl = 30, Zo = [], vu = "", wu = function(e) {
    var t = e[0], r, s;
    if (xr(t) || Ae(t) || (e = [e]),
    !(r = (t._gsap || {}).harness)) {
        for (s = Zo.length; s-- && !Zo[s].targetTest(t); )
            ;
        r = Zo[s]
    }
    for (s = e.length; s--; )
        e[s] && (e[s]._gsap || (e[s]._gsap = new $f(e[s],r))) || e.splice(s, 1);
    return e
}, Pn = function(e) {
    return e._gsap || wu(Jt(e))[0]._gsap
}, gf = function(e, t, r) {
    return (r = e[t]) && Ae(r) ? e[t]() : _u(r) && e.getAttribute && e.getAttribute(t) || r
}, Pt = function(e, t) {
    return (e = e.split(",")).forEach(t) || e
}, Le = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, Je = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0
}, os = function(e, t) {
    var r = t.charAt(0)
      , s = parseFloat(t.substr(2));
    return e = parseFloat(e),
    r === "+" ? e + s : r === "-" ? e - s : r === "*" ? e * s : e / s
}, K0 = function(e, t) {
    for (var r = t.length, s = 0; e.indexOf(t[s]) < 0 && ++s < r; )
        ;
    return s < r
}, gi = function() {
    var e = en.length, t = en.slice(0), r, s;
    for (Pa = {},
    en.length = 0,
    r = 0; r < e; r++)
        s = t[r],
        s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0)
}, mf = function(e, t, r, s) {
    en.length && !ut && gi(),
    e.render(t, r, s || ut && t < 0 && (e._initted || e._startAt)),
    en.length && !ut && gi()
}, Df = function(e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(ff).length < 2 ? t : Ze(e) ? e.trim() : e
}, yf = function(e) {
    return e
}, er = function(e, t) {
    for (var r in t)
        r in e || (e[r] = t[r]);
    return e
}, J0 = function(e) {
    return function(t, r) {
        for (var s in r)
            s in t || s === "duration" && e || s === "ease" || (t[s] = r[s])
    }
}, Bn = function(e, t) {
    for (var r in t)
        e[r] = t[r];
    return e
}, bl = function n(e, t) {
    for (var r in t)
        r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = xr(t[r]) ? n(e[r] || (e[r] = {}), t[r]) : t[r]);
    return e
}, mi = function(e, t) {
    var r = {}, s;
    for (s in e)
        s in t || (r[s] = e[s]);
    return r
}, qs = function(e) {
    var t = e.parent || Te
      , r = e.keyframes ? J0(lt(e.keyframes)) : er;
    if (kt(e.inherit))
        for (; t; )
            r(e, t.vars.defaults),
            t = t.parent || t._dp;
    return e
}, Q0 = function(e, t) {
    for (var r = e.length, s = r === t.length; s && r-- && e[r] === t[r]; )
        ;
    return r < 0
}, vf = function(e, t, r, s, o) {
    r === void 0 && (r = "_first"),
    s === void 0 && (s = "_last");
    var i = e[s], a;
    if (o)
        for (a = t[o]; i && i[o] > a; )
            i = i._prev;
    return i ? (t._next = i._next,
    i._next = t) : (t._next = e[r],
    e[r] = t),
    t._next ? t._next._prev = t : e[s] = t,
    t._prev = i,
    t.parent = t._dp = e,
    t
}, Mi = function(e, t, r, s) {
    r === void 0 && (r = "_first"),
    s === void 0 && (s = "_last");
    var o = t._prev
      , i = t._next;
    o ? o._next = i : e[r] === t && (e[r] = i),
    i ? i._prev = o : e[s] === t && (e[s] = o),
    t._next = t._prev = t.parent = null
}, on = function(e, t) {
    e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e),
    e._act = 0
}, Rn = function(e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
        for (var r = e; r; )
            r._dirty = 1,
            r = r.parent;
    return e
}, Z0 = function(e) {
    for (var t = e.parent; t && t.parent; )
        t._dirty = 1,
        t.totalDuration(),
        t = t.parent;
    return e
}, Ra = function(e, t, r, s) {
    return e._startAt && (ut ? e._startAt.revert(Qo) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, s))
}, em = function n(e) {
    return !e || e._ts && n(e.parent)
}, xl = function(e) {
    return e._repeat ? gs(e._tTime, e = e.duration() + e._rDelay) * e : 0
}, gs = function(e, t) {
    var r = Math.floor(e /= t);
    return e && r === e ? r - 1 : r
}, Di = function(e, t) {
    return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
}, Li = function(e) {
    return e._end = Je(e._start + (e._tDur / Math.abs(e._ts || e._rts || ge) || 0))
}, Ii = function(e, t) {
    var r = e._dp;
    return r && r.smoothChildTiming && e._ts && (e._start = Je(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)),
    Li(e),
    r._dirty || Rn(r, e)),
    e
}, wf = function(e, t) {
    var r;
    if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = Di(e.rawTime(), t),
    (!t._dur || So(0, t.totalDuration(), r) - t._tTime > ge) && t.render(r, !0)),
    Rn(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
        if (e._dur < e.duration())
            for (r = e; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime),
                r = r._dp;
        e._zTime = -ge
    }
}, Dr = function(e, t, r, s) {
    return t.parent && on(t),
    t._start = Je((Br(r) ? r : r || e !== Te ? Ut(e, r, t) : e._time) + t._delay),
    t._end = Je(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)),
    vf(e, t, "_first", "_last", e._sort ? "_start" : 0),
    Aa(t) || (e._recent = t),
    s || wf(e, t),
    e._ts < 0 && Ii(e, e._tTime),
    e
}, Ef = function(e, t) {
    return (zt.ScrollTrigger || Du("scrollTrigger", t)) && zt.ScrollTrigger.create(t, e)
}, Cf = function(e, t, r, s, o) {
    if (Cu(e, t, o),
    !e._initted)
        return 1;
    if (!r && e._pt && !ut && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && _f !== $t.frame)
        return en.push(e),
        e._lazy = [o, s],
        1
}, tm = function n(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || n(t))
}, Aa = function(e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart"
}, rm = function(e, t, r, s) {
    var o = e.ratio, i = t < 0 || !t && (!e._start && tm(e) && !(!e._initted && Aa(e)) || (e._ts < 0 || e._dp._ts < 0) && !Aa(e)) ? 0 : 1, a = e._rDelay, l = 0, u, c, f;
    if (a && e._repeat && (l = So(0, e._tDur, t),
    c = gs(l, a),
    e._yoyo && c & 1 && (i = 1 - i),
    c !== gs(e._tTime, a) && (o = 1 - i,
    e.vars.repeatRefresh && e._initted && e.invalidate())),
    i !== o || ut || s || e._zTime === ge || !t && e._zTime) {
        if (!e._initted && Cf(e, t, s, r, l))
            return;
        for (f = e._zTime,
        e._zTime = t || (r ? ge : 0),
        r || (r = t && !f),
        e.ratio = i,
        e._from && (i = 1 - i),
        e._time = 0,
        e._tTime = l,
        u = e._pt; u; )
            u.r(i, u.d),
            u = u._next;
        t < 0 && Ra(e, t, r, !0),
        e._onUpdate && !r && Vt(e, "onUpdate"),
        l && e._repeat && !r && e.parent && Vt(e, "onRepeat"),
        (t >= e._tDur || t < 0) && e.ratio === i && (i && on(e, 1),
        !r && !ut && (Vt(e, i ? "onComplete" : "onReverseComplete", !0),
        e._prom && e._prom()))
    } else
        e._zTime || (e._zTime = t)
}, nm = function(e, t, r) {
    var s;
    if (r > t)
        for (s = e._first; s && s._start <= r; ) {
            if (s.data === "isPause" && s._start > t)
                return s;
            s = s._next
        }
    else
        for (s = e._last; s && s._start >= r; ) {
            if (s.data === "isPause" && s._start < t)
                return s;
            s = s._prev
        }
}, ms = function(e, t, r, s) {
    var o = e._repeat
      , i = Je(t) || 0
      , a = e._tTime / e._tDur;
    return a && !s && (e._time *= i / e._dur),
    e._dur = i,
    e._tDur = o ? o < 0 ? 1e10 : Je(i * (o + 1) + e._rDelay * o) : i,
    a > 0 && !s && Ii(e, e._tTime = e._tDur * a),
    e.parent && Li(e),
    r || Rn(e.parent, e),
    e
}, Tl = function(e) {
    return e instanceof mt ? Rn(e) : ms(e, e._dur)
}, sm = {
    _start: 0,
    endTime: lo,
    totalDuration: lo
}, Ut = function n(e, t, r) {
    var s = e.labels, o = e._recent || sm, i = e.duration() >= Kt ? o.endTime(!1) : e._dur, a, l, u;
    return Ze(t) && (isNaN(t) || t in s) ? (l = t.charAt(0),
    u = t.substr(-1) === "%",
    a = t.indexOf("="),
    l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")),
    (l === "<" ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (u ? (a < 0 ? o : r).totalDuration() / 100 : 1)) : a < 0 ? (t in s || (s[t] = i),
    s[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)),
    u && r && (l = l / 100 * (lt(r) ? r[0] : r).totalDuration()),
    a > 1 ? n(e, t.substr(0, a - 1), r) + l : i + l)) : t == null ? i : +t
}, Ws = function(e, t, r) {
    var s = Br(t[1]), o = (s ? 2 : 1) + (e < 2 ? 0 : 1), i = t[o], a, l;
    if (s && (i.duration = t[1]),
    i.parent = r,
    e) {
        for (a = i,
        l = r; l && !("immediateRender"in a); )
            a = l.vars.defaults || {},
            l = kt(l.vars.inherit) && l.parent;
        i.immediateRender = kt(a.immediateRender),
        e < 2 ? i.runBackwards = 1 : i.startAt = t[o - 1]
    }
    return new Ne(t[0],i,t[o + 1])
}, ln = function(e, t) {
    return e || e === 0 ? t(e) : t
}, So = function(e, t, r) {
    return r < e ? e : r > t ? t : r
}, it = function(e, t) {
    return !Ze(e) || !(t = Y0.exec(e)) ? "" : t[1]
}, om = function(e, t, r) {
    return ln(r, function(s) {
        return So(e, t, s)
    })
}, Fa = [].slice, bf = function(e, t) {
    return e && xr(e) && "length"in e && (!t && !e.length || e.length - 1 in e && xr(e[0])) && !e.nodeType && e !== qt
}, im = function(e, t, r) {
    return r === void 0 && (r = []),
    e.forEach(function(s) {
        var o;
        return Ze(s) && !t || bf(s, 1) ? (o = r).push.apply(o, Jt(s)) : r.push(s)
    }) || r
}, Jt = function(e, t, r) {
    return Re && !t && Re.selector ? Re.selector(e) : Ze(e) && !r && (ka || !Ds()) ? Fa.call((t || mu).querySelectorAll(e), 0) : lt(e) ? im(e, r) : bf(e) ? Fa.call(e, 0) : e ? [e] : []
}, Oa = function(e) {
    return e = Jt(e)[0] || uo("Invalid scope") || {},
    function(t) {
        var r = e.current || e.nativeElement || e;
        return Jt(t, r.querySelectorAll ? r : r === e ? uo("Invalid scope") || mu.createElement("div") : e)
    }
}, xf = function(e) {
    return e.sort(function() {
        return .5 - Math.random()
    })
}, Tf = function(e) {
    if (Ae(e))
        return e;
    var t = xr(e) ? e : {
        each: e
    }
      , r = An(t.ease)
      , s = t.from || 0
      , o = parseFloat(t.base) || 0
      , i = {}
      , a = s > 0 && s < 1
      , l = isNaN(s) || a
      , u = t.axis
      , c = s
      , f = s;
    return Ze(s) ? c = f = {
        center: .5,
        edges: .5,
        end: 1
    }[s] || 0 : !a && l && (c = s[0],
    f = s[1]),
    function(h, d, p) {
        var _ = (p || t).length, g = i[_], m, D, v, y, E, b, C, k, T;
        if (!g) {
            if (T = t.grid === "auto" ? 0 : (t.grid || [1, Kt])[1],
            !T) {
                for (C = -Kt; C < (C = p[T++].getBoundingClientRect().left) && T < _; )
                    ;
                T < _ && T--
            }
            for (g = i[_] = [],
            m = l ? Math.min(T, _) * c - .5 : s % T,
            D = T === Kt ? 0 : l ? _ * f / T - .5 : s / T | 0,
            C = 0,
            k = Kt,
            b = 0; b < _; b++)
                v = b % T - m,
                y = D - (b / T | 0),
                g[b] = E = u ? Math.abs(u === "y" ? y : v) : af(v * v + y * y),
                E > C && (C = E),
                E < k && (k = E);
            s === "random" && xf(g),
            g.max = C - k,
            g.min = k,
            g.v = _ = (parseFloat(t.amount) || parseFloat(t.each) * (T > _ ? _ - 1 : u ? u === "y" ? _ / T : T : Math.max(T, _ / T)) || 0) * (s === "edges" ? -1 : 1),
            g.b = _ < 0 ? o - _ : o,
            g.u = it(t.amount || t.each) || 0,
            r = r && _ < 0 ? If(r) : r
        }
        return _ = (g[h] - g.min) / g.max || 0,
        Je(g.b + (r ? r(_) : _) * g.v) + g.u
    }
}, Ma = function(e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(r) {
        var s = Je(Math.round(parseFloat(r) / e) * e * t);
        return (s - s % 1) / t + (Br(r) ? 0 : it(r))
    }
}, Sf = function(e, t) {
    var r = lt(e), s, o;
    return !r && xr(e) && (s = r = e.radius || Kt,
    e.values ? (e = Jt(e.values),
    (o = !Br(e[0])) && (s *= s)) : e = Ma(e.increment)),
    ln(t, r ? Ae(e) ? function(i) {
        return o = e(i),
        Math.abs(o - i) <= s ? o : i
    }
    : function(i) {
        for (var a = parseFloat(o ? i.x : i), l = parseFloat(o ? i.y : 0), u = Kt, c = 0, f = e.length, h, d; f--; )
            o ? (h = e[f].x - a,
            d = e[f].y - l,
            h = h * h + d * d) : h = Math.abs(e[f] - a),
            h < u && (u = h,
            c = f);
        return c = !s || u <= s ? e[c] : i,
        o || c === i || Br(i) ? c : c + it(i)
    }
    : Ma(e))
}, kf = function(e, t, r, s) {
    return ln(lt(e) ? !t : r === !0 ? !!(r = 0) : !s, function() {
        return lt(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (s = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + r * .99)) / r) * r * s) / s
    })
}, am = function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
    return function(s) {
        return t.reduce(function(o, i) {
            return i(o)
        }, s)
    }
}, um = function(e, t) {
    return function(r) {
        return e(parseFloat(r)) + (t || it(r))
    }
}, lm = function(e, t, r) {
    return Rf(e, t, 0, 1, r)
}, Pf = function(e, t, r) {
    return ln(r, function(s) {
        return e[~~t(s)]
    })
}, cm = function n(e, t, r) {
    var s = t - e;
    return lt(e) ? Pf(e, n(0, e.length), t) : ln(r, function(o) {
        return (s + (o - e) % s) % s + e
    })
}, fm = function n(e, t, r) {
    var s = t - e
      , o = s * 2;
    return lt(e) ? Pf(e, n(0, e.length - 1), t) : ln(r, function(i) {
        return i = (o + (i - e) % o) % o || 0,
        e + (i > s ? o - i : i)
    })
}, co = function(e) {
    for (var t = 0, r = "", s, o, i, a; ~(s = e.indexOf("random(", t)); )
        i = e.indexOf(")", s),
        a = e.charAt(s + 7) === "[",
        o = e.substr(s + 7, i - s - 7).match(a ? ff : Sa),
        r += e.substr(t, s - t) + kf(a ? o : +o[0], a ? 0 : +o[1], +o[2] || 1e-5),
        t = i + 1;
    return r + e.substr(t, e.length - t)
}, Rf = function(e, t, r, s, o) {
    var i = t - e
      , a = s - r;
    return ln(o, function(l) {
        return r + ((l - e) / i * a || 0)
    })
}, dm = function n(e, t, r, s) {
    var o = isNaN(e + t) ? 0 : function(d) {
        return (1 - d) * e + d * t
    }
    ;
    if (!o) {
        var i = Ze(e), a = {}, l, u, c, f, h;
        if (r === !0 && (s = 1) && (r = null),
        i)
            e = {
                p: e
            },
            t = {
                p: t
            };
        else if (lt(e) && !lt(t)) {
            for (c = [],
            f = e.length,
            h = f - 2,
            u = 1; u < f; u++)
                c.push(n(e[u - 1], e[u]));
            f--,
            o = function(p) {
                p *= f;
                var _ = Math.min(h, ~~p);
                return c[_](p - _)
            }
            ,
            r = t
        } else
            s || (e = Bn(lt(e) ? [] : {}, e));
        if (!c) {
            for (l in t)
                Eu.call(a, e, l, "get", t[l]);
            o = function(p) {
                return Tu(p, a) || (i ? e.p : e)
            }
        }
    }
    return ln(r, o)
}, Sl = function(e, t, r) {
    var s = e.labels, o = Kt, i, a, l;
    for (i in s)
        a = s[i] - t,
        a < 0 == !!r && a && o > (a = Math.abs(a)) && (l = i,
        o = a);
    return l
}, Vt = function(e, t, r) {
    var s = e.vars, o = s[t], i = Re, a = e._ctx, l, u, c;
    if (o)
        return l = s[t + "Params"],
        u = s.callbackScope || e,
        r && en.length && gi(),
        a && (Re = a),
        c = l ? o.apply(u, l) : o.call(u),
        Re = i,
        c
}, Ls = function(e) {
    return on(e),
    e.scrollTrigger && e.scrollTrigger.kill(!!ut),
    e.progress() < 1 && Vt(e, "onInterrupt"),
    e
}, ts, Af = [], Ff = function(e) {
    if (gu() && e) {
        e = !e.name && e.default || e;
        var t = e.name
          , r = Ae(e)
          , s = t && !r && e.init ? function() {
            this._props = []
        }
        : e
          , o = {
            init: lo,
            render: Tu,
            add: Eu,
            kill: km,
            modifier: Sm,
            rawVars: 0
        }
          , i = {
            targetTest: 0,
            get: 0,
            getSetter: xu,
            aliases: {},
            register: 0
        };
        if (Ds(),
        e !== s) {
            if (Ht[t])
                return;
            er(s, er(mi(e, o), i)),
            Bn(s.prototype, Bn(o, mi(e, i))),
            Ht[s.prop = t] = s,
            e.targetTest && (Zo.push(s),
            yu[t] = 1),
            t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
        }
        pf(t, s),
        e.register && e.register(Ft, s, Rt)
    } else
        e && Af.push(e)
}, _e = 255, Is = {
    aqua: [0, _e, _e],
    lime: [0, _e, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _e],
    navy: [0, 0, 128],
    white: [_e, _e, _e],
    olive: [128, 128, 0],
    yellow: [_e, _e, 0],
    orange: [_e, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_e, 0, 0],
    pink: [_e, 192, 203],
    cyan: [0, _e, _e],
    transparent: [_e, _e, _e, 0]
}, Yi = function(e, t, r) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0,
    (e * 6 < 1 ? t + (r - t) * e * 6 : e < .5 ? r : e * 3 < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * _e + .5 | 0
}, Of = function(e, t, r) {
    var s = e ? Br(e) ? [e >> 16, e >> 8 & _e, e & _e] : 0 : Is.black, o, i, a, l, u, c, f, h, d, p;
    if (!s) {
        if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
        Is[e])
            s = Is[e];
        else if (e.charAt(0) === "#") {
            if (e.length < 6 && (o = e.charAt(1),
            i = e.charAt(2),
            a = e.charAt(3),
            e = "#" + o + o + i + i + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
            e.length === 9)
                return s = parseInt(e.substr(1, 6), 16),
                [s >> 16, s >> 8 & _e, s & _e, parseInt(e.substr(7), 16) / 255];
            e = parseInt(e.substr(1), 16),
            s = [e >> 16, e >> 8 & _e, e & _e]
        } else if (e.substr(0, 3) === "hsl") {
            if (s = p = e.match(Sa),
            !t)
                l = +s[0] % 360 / 360,
                u = +s[1] / 100,
                c = +s[2] / 100,
                i = c <= .5 ? c * (u + 1) : c + u - c * u,
                o = c * 2 - i,
                s.length > 3 && (s[3] *= 1),
                s[0] = Yi(l + 1 / 3, o, i),
                s[1] = Yi(l, o, i),
                s[2] = Yi(l - 1 / 3, o, i);
            else if (~e.indexOf("="))
                return s = e.match(lf),
                r && s.length < 4 && (s[3] = 1),
                s
        } else
            s = e.match(Sa) || Is.transparent;
        s = s.map(Number)
    }
    return t && !p && (o = s[0] / _e,
    i = s[1] / _e,
    a = s[2] / _e,
    f = Math.max(o, i, a),
    h = Math.min(o, i, a),
    c = (f + h) / 2,
    f === h ? l = u = 0 : (d = f - h,
    u = c > .5 ? d / (2 - f - h) : d / (f + h),
    l = f === o ? (i - a) / d + (i < a ? 6 : 0) : f === i ? (a - o) / d + 2 : (o - i) / d + 4,
    l *= 60),
    s[0] = ~~(l + .5),
    s[1] = ~~(u * 100 + .5),
    s[2] = ~~(c * 100 + .5)),
    r && s.length < 4 && (s[3] = 1),
    s
}, Mf = function(e) {
    var t = []
      , r = []
      , s = -1;
    return e.split(tn).forEach(function(o) {
        var i = o.match(es) || [];
        t.push.apply(t, i),
        r.push(s += i.length + 1)
    }),
    t.c = r,
    t
}, kl = function(e, t, r) {
    var s = "", o = (e + s).match(tn), i = t ? "hsla(" : "rgba(", a = 0, l, u, c, f;
    if (!o)
        return e;
    if (o = o.map(function(h) {
        return (h = Of(h, t, 1)) && i + (t ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")"
    }),
    r && (c = Mf(e),
    l = r.c,
    l.join(s) !== c.c.join(s)))
        for (u = e.replace(tn, "1").split(es),
        f = u.length - 1; a < f; a++)
            s += u[a] + (~l.indexOf(a) ? o.shift() || i + "0,0,0,0)" : (c.length ? c : o.length ? o : r).shift());
    if (!u)
        for (u = e.split(tn),
        f = u.length - 1; a < f; a++)
            s += u[a] + o[a];
    return s + u[f]
}, tn = function() {
    var n = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
    for (e in Is)
        n += "|" + e + "\\b";
    return new RegExp(n + ")","gi")
}(), hm = /hsl[a]?\(/, Lf = function(e) {
    var t = e.join(" "), r;
    if (tn.lastIndex = 0,
    tn.test(t))
        return r = hm.test(t),
        e[1] = kl(e[1], r),
        e[0] = kl(e[0], r, Mf(e[1])),
        !0
}, fo, $t = function() {
    var n = Date.now, e = 500, t = 33, r = n(), s = r, o = 1e3 / 240, i = o, a = [], l, u, c, f, h, d, p = function _(g) {
        var m = n() - s, D = g === !0, v, y, E, b;
        if (m > e && (r += m - t),
        s += m,
        E = s - r,
        v = E - i,
        (v > 0 || D) && (b = ++f.frame,
        h = E - f.time * 1e3,
        f.time = E = E / 1e3,
        i += v + (v >= o ? 4 : o - v),
        y = 1),
        D || (l = u(_)),
        y)
            for (d = 0; d < a.length; d++)
                a[d](E, h, b, g)
    };
    return f = {
        time: 0,
        frame: 0,
        tick: function() {
            p(!0)
        },
        deltaRatio: function(g) {
            return h / (1e3 / (g || 60))
        },
        wake: function() {
            df && (!ka && gu() && (qt = ka = window,
            mu = qt.document || {},
            zt.gsap = Ft,
            (qt.gsapVersions || (qt.gsapVersions = [])).push(Ft.version),
            hf(_i || qt.GreenSockGlobals || !qt.gsap && qt || {}),
            c = qt.requestAnimationFrame,
            Af.forEach(Ff)),
            l && f.sleep(),
            u = c || function(g) {
                return setTimeout(g, i - f.time * 1e3 + 1 | 0)
            }
            ,
            fo = 1,
            p(2))
        },
        sleep: function() {
            (c ? qt.cancelAnimationFrame : clearTimeout)(l),
            fo = 0,
            u = lo
        },
        lagSmoothing: function(g, m) {
            e = g || 1 / 0,
            t = Math.min(m || 33, e)
        },
        fps: function(g) {
            o = 1e3 / (g || 240),
            i = f.time * 1e3 + o
        },
        add: function(g, m, D) {
            var v = m ? function(y, E, b, C) {
                g(y, E, b, C),
                f.remove(v)
            }
            : g;
            return f.remove(g),
            a[D ? "unshift" : "push"](v),
            Ds(),
            v
        },
        remove: function(g, m) {
            ~(m = a.indexOf(g)) && a.splice(m, 1) && d >= m && d--
        },
        _listeners: a
    },
    f
}(), Ds = function() {
    return !fo && $t.wake()
}, oe = {}, pm = /^[\d.\-M][\d.\-,\s]/, _m = /["']/g, gm = function(e) {
    for (var t = {}, r = e.substr(1, e.length - 3).split(":"), s = r[0], o = 1, i = r.length, a, l, u; o < i; o++)
        l = r[o],
        a = o !== i - 1 ? l.lastIndexOf(",") : l.length,
        u = l.substr(0, a),
        t[s] = isNaN(u) ? u.replace(_m, "").trim() : +u,
        s = l.substr(a + 1).trim();
    return t
}, mm = function(e) {
    var t = e.indexOf("(") + 1
      , r = e.indexOf(")")
      , s = e.indexOf("(", t);
    return e.substring(t, ~s && s < r ? e.indexOf(")", r + 1) : r)
}, Dm = function(e) {
    var t = (e + "").split("(")
      , r = oe[t[0]];
    return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [gm(t[1])] : mm(e).split(",").map(Df)) : oe._CE && pm.test(e) ? oe._CE("", e) : r
}, If = function(e) {
    return function(t) {
        return 1 - e(1 - t)
    }
}, Bf = function n(e, t) {
    for (var r = e._first, s; r; )
        r instanceof mt ? n(r, t) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== t && (r.timeline ? n(r.timeline, t) : (s = r._ease,
        r._ease = r._yEase,
        r._yEase = s,
        r._yoyo = t)),
        r = r._next
}, An = function(e, t) {
    return e && (Ae(e) ? e : oe[e] || Dm(e)) || t
}, jn = function(e, t, r, s) {
    r === void 0 && (r = function(l) {
        return 1 - t(1 - l)
    }
    ),
    s === void 0 && (s = function(l) {
        return l < .5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2
    }
    );
    var o = {
        easeIn: t,
        easeOut: r,
        easeInOut: s
    }, i;
    return Pt(e, function(a) {
        oe[a] = zt[a] = o,
        oe[i = a.toLowerCase()] = r;
        for (var l in o)
            oe[i + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = oe[a + "." + l] = o[l]
    }),
    o
}, Hf = function(e) {
    return function(t) {
        return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
    }
}, Xi = function n(e, t, r) {
    var s = t >= 1 ? t : 1
      , o = (r || (e ? .3 : .45)) / (t < 1 ? t : 1)
      , i = o / Ta * (Math.asin(1 / s) || 0)
      , a = function(c) {
        return c === 1 ? 1 : s * Math.pow(2, -10 * c) * W0((c - i) * o) + 1
    }
      , l = e === "out" ? a : e === "in" ? function(u) {
        return 1 - a(1 - u)
    }
    : Hf(a);
    return o = Ta / o,
    l.config = function(u, c) {
        return n(e, u, c)
    }
    ,
    l
}, Gi = function n(e, t) {
    t === void 0 && (t = 1.70158);
    var r = function(i) {
        return i ? --i * i * ((t + 1) * i + t) + 1 : 0
    }
      , s = e === "out" ? r : e === "in" ? function(o) {
        return 1 - r(1 - o)
    }
    : Hf(r);
    return s.config = function(o) {
        return n(e, o)
    }
    ,
    s
};
Pt("Linear,Quad,Cubic,Quart,Quint,Strong", function(n, e) {
    var t = e < 5 ? e + 1 : e;
    jn(n + ",Power" + (t - 1), e ? function(r) {
        return Math.pow(r, t)
    }
    : function(r) {
        return r
    }
    , function(r) {
        return 1 - Math.pow(1 - r, t)
    }, function(r) {
        return r < .5 ? Math.pow(r * 2, t) / 2 : 1 - Math.pow((1 - r) * 2, t) / 2
    })
});
oe.Linear.easeNone = oe.none = oe.Linear.easeIn;
jn("Elastic", Xi("in"), Xi("out"), Xi());
(function(n, e) {
    var t = 1 / e
      , r = 2 * t
      , s = 2.5 * t
      , o = function(a) {
        return a < t ? n * a * a : a < r ? n * Math.pow(a - 1.5 / e, 2) + .75 : a < s ? n * (a -= 2.25 / e) * a + .9375 : n * Math.pow(a - 2.625 / e, 2) + .984375
    };
    jn("Bounce", function(i) {
        return 1 - o(1 - i)
    }, o)
}
)(7.5625, 2.75);
jn("Expo", function(n) {
    return n ? Math.pow(2, 10 * (n - 1)) : 0
});
jn("Circ", function(n) {
    return -(af(1 - n * n) - 1)
});
jn("Sine", function(n) {
    return n === 1 ? 1 : -q0(n * z0) + 1
});
jn("Back", Gi("in"), Gi("out"), Gi());
oe.SteppedEase = oe.steps = zt.SteppedEase = {
    config: function(e, t) {
        e === void 0 && (e = 1);
        var r = 1 / e
          , s = e + (t ? 0 : 1)
          , o = t ? 1 : 0
          , i = 1 - ge;
        return function(a) {
            return ((s * So(0, i, a) | 0) + o) * r
        }
    }
};
_s.ease = oe["quad.out"];
Pt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(n) {
    return vu += n + "," + n + "Params,"
});
var $f = function(e, t) {
    this.id = U0++,
    e._gsap = this,
    this.target = e,
    this.harness = t,
    this.get = t ? t.get : gf,
    this.set = t ? t.getSetter : xu
}
  , ho = function() {
    function n(t) {
        this.vars = t,
        this._delay = +t.delay || 0,
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
        this._yoyo = !!t.yoyo || !!t.yoyoEase),
        this._ts = 1,
        ms(this, +t.duration, 1, 1),
        this.data = t.data,
        Re && (this._ctx = Re,
        Re.data.push(this)),
        fo || $t.wake()
    }
    var e = n.prototype;
    return e.delay = function(r) {
        return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay),
        this._delay = r,
        this) : this._delay
    }
    ,
    e.duration = function(r) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
    }
    ,
    e.totalDuration = function(r) {
        return arguments.length ? (this._dirty = 0,
        ms(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    e.totalTime = function(r, s) {
        if (Ds(),
        !arguments.length)
            return this._tTime;
        var o = this._dp;
        if (o && o.smoothChildTiming && this._ts) {
            for (Ii(this, r),
            !o._dp || o.parent || wf(o, this); o && o.parent; )
                o.parent._time !== o._start + (o._ts >= 0 ? o._tTime / o._ts : (o.totalDuration() - o._tTime) / -o._ts) && o.totalTime(o._tTime, !0),
                o = o.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Dr(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== r || !this._dur && !s || this._initted && Math.abs(this._zTime) === ge || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r),
        mf(this, r, s)),
        this
    }
    ,
    e.time = function(r, s) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + xl(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), s) : this._time
    }
    ,
    e.totalProgress = function(r, s) {
        return arguments.length ? this.totalTime(this.totalDuration() * r, s) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }
    ,
    e.progress = function(r, s) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + xl(this), s) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }
    ,
    e.iteration = function(r, s) {
        var o = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (r - 1) * o, s) : this._repeat ? gs(this._tTime, o) + 1 : 1
    }
    ,
    e.timeScale = function(r, s) {
        if (!arguments.length)
            return this._rts === -ge ? 0 : this._rts;
        if (this._rts === r)
            return this;
        var o = this.parent && this._ts ? Di(this.parent._time, this) : this._tTime;
        return this._rts = +r || 0,
        this._ts = this._ps || r === -ge ? 0 : this._rts,
        this.totalTime(So(-Math.abs(this._delay), this._tDur, o), s !== !1),
        Li(this),
        Z0(this)
    }
    ,
    e.paused = function(r) {
        return arguments.length ? (this._ps !== r && (this._ps = r,
        r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Ds(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ge && (this._tTime -= ge)))),
        this) : this._ps
    }
    ,
    e.startTime = function(r) {
        if (arguments.length) {
            this._start = r;
            var s = this.parent || this._dp;
            return s && (s._sort || !this.parent) && Dr(s, this, r - this._delay),
            this
        }
        return this._start
    }
    ,
    e.endTime = function(r) {
        return this._start + (kt(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    e.rawTime = function(r) {
        var s = this.parent || this._dp;
        return s ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Di(s.rawTime(r), this) : this._tTime : this._tTime
    }
    ,
    e.revert = function(r) {
        r === void 0 && (r = G0);
        var s = ut;
        return ut = r,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r),
        this.totalTime(-.01, r.suppressEvents)),
        this.data !== "nested" && r.kill !== !1 && this.kill(),
        ut = s,
        this
    }
    ,
    e.globalTime = function(r) {
        for (var s = this, o = arguments.length ? r : s.rawTime(); s; )
            o = s._start + o / (Math.abs(s._ts) || 1),
            s = s._dp;
        return !this.parent && this._sat ? this._sat.globalTime(r) : o
    }
    ,
    e.repeat = function(r) {
        return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r,
        Tl(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    e.repeatDelay = function(r) {
        if (arguments.length) {
            var s = this._time;
            return this._rDelay = r,
            Tl(this),
            s ? this.time(s) : this
        }
        return this._rDelay
    }
    ,
    e.yoyo = function(r) {
        return arguments.length ? (this._yoyo = r,
        this) : this._yoyo
    }
    ,
    e.seek = function(r, s) {
        return this.totalTime(Ut(this, r), kt(s))
    }
    ,
    e.restart = function(r, s) {
        return this.play().totalTime(r ? -this._delay : 0, kt(s))
    }
    ,
    e.play = function(r, s) {
        return r != null && this.seek(r, s),
        this.reversed(!1).paused(!1)
    }
    ,
    e.reverse = function(r, s) {
        return r != null && this.seek(r || this.totalDuration(), s),
        this.reversed(!0).paused(!1)
    }
    ,
    e.pause = function(r, s) {
        return r != null && this.seek(r, s),
        this.paused(!0)
    }
    ,
    e.resume = function() {
        return this.paused(!1)
    }
    ,
    e.reversed = function(r) {
        return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -ge : 0)),
        this) : this._rts < 0
    }
    ,
    e.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -ge,
        this
    }
    ,
    e.isActive = function() {
        var r = this.parent || this._dp, s = this._start, o;
        return !!(!r || this._ts && this._initted && r.isActive() && (o = r.rawTime(!0)) >= s && o < this.endTime(!0) - ge)
    }
    ,
    e.eventCallback = function(r, s, o) {
        var i = this.vars;
        return arguments.length > 1 ? (s ? (i[r] = s,
        o && (i[r + "Params"] = o),
        r === "onUpdate" && (this._onUpdate = s)) : delete i[r],
        this) : i[r]
    }
    ,
    e.then = function(r) {
        var s = this;
        return new Promise(function(o) {
            var i = Ae(r) ? r : yf
              , a = function() {
                var u = s.then;
                s.then = null,
                Ae(i) && (i = i(s)) && (i.then || i === s) && (s.then = u),
                o(i),
                s.then = u
            };
            s._initted && s.totalProgress() === 1 && s._ts >= 0 || !s._tTime && s._ts < 0 ? a() : s._prom = a
        }
        )
    }
    ,
    e.kill = function() {
        Ls(this)
    }
    ,
    n
}();
er(ho.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -ge,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var mt = function(n) {
    of(e, n);
    function e(r, s) {
        var o;
        return r === void 0 && (r = {}),
        o = n.call(this, r) || this,
        o.labels = {},
        o.smoothChildTiming = !!r.smoothChildTiming,
        o.autoRemoveChildren = !!r.autoRemoveChildren,
        o._sort = kt(r.sortChildren),
        Te && Dr(r.parent || Te, Ar(o), s),
        r.reversed && o.reverse(),
        r.paused && o.paused(!0),
        r.scrollTrigger && Ef(Ar(o), r.scrollTrigger),
        o
    }
    var t = e.prototype;
    return t.to = function(s, o, i) {
        return Ws(0, arguments, this),
        this
    }
    ,
    t.from = function(s, o, i) {
        return Ws(1, arguments, this),
        this
    }
    ,
    t.fromTo = function(s, o, i, a) {
        return Ws(2, arguments, this),
        this
    }
    ,
    t.set = function(s, o, i) {
        return o.duration = 0,
        o.parent = this,
        qs(o).repeatDelay || (o.repeat = 0),
        o.immediateRender = !!o.immediateRender,
        new Ne(s,o,Ut(this, i),1),
        this
    }
    ,
    t.call = function(s, o, i) {
        return Dr(this, Ne.delayedCall(0, s, o), i)
    }
    ,
    t.staggerTo = function(s, o, i, a, l, u, c) {
        return i.duration = o,
        i.stagger = i.stagger || a,
        i.onComplete = u,
        i.onCompleteParams = c,
        i.parent = this,
        new Ne(s,i,Ut(this, l)),
        this
    }
    ,
    t.staggerFrom = function(s, o, i, a, l, u, c) {
        return i.runBackwards = 1,
        qs(i).immediateRender = kt(i.immediateRender),
        this.staggerTo(s, o, i, a, l, u, c)
    }
    ,
    t.staggerFromTo = function(s, o, i, a, l, u, c, f) {
        return a.startAt = i,
        qs(a).immediateRender = kt(a.immediateRender),
        this.staggerTo(s, o, a, l, u, c, f)
    }
    ,
    t.render = function(s, o, i) {
        var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = s <= 0 ? 0 : Je(s), f = this._zTime < 0 != s < 0 && (this._initted || !u), h, d, p, _, g, m, D, v, y, E, b, C;
        if (this !== Te && c > l && s >= 0 && (c = l),
        c !== this._tTime || i || f) {
            if (a !== this._time && u && (c += this._time - a,
            s += this._time - a),
            h = c,
            y = this._start,
            v = this._ts,
            m = !v,
            f && (u || (a = this._zTime),
            (s || !o) && (this._zTime = s)),
            this._repeat) {
                if (b = this._yoyo,
                g = u + this._rDelay,
                this._repeat < -1 && s < 0)
                    return this.totalTime(g * 100 + s, o, i);
                if (h = Je(c % g),
                c === l ? (_ = this._repeat,
                h = u) : (_ = ~~(c / g),
                _ && _ === c / g && (h = u,
                _--),
                h > u && (h = u)),
                E = gs(this._tTime, g),
                !a && this._tTime && E !== _ && this._tTime - E * g - this._dur <= 0 && (E = _),
                b && _ & 1 && (h = u - h,
                C = 1),
                _ !== E && !this._lock) {
                    var k = b && E & 1
                      , T = k === (b && _ & 1);
                    if (_ < E && (k = !k),
                    a = k ? 0 : c % u ? u : c,
                    this._lock = 1,
                    this.render(a || (C ? 0 : Je(_ * g)), o, !u)._lock = 0,
                    this._tTime = c,
                    !o && this.parent && Vt(this, "onRepeat"),
                    this.vars.repeatRefresh && !C && (this.invalidate()._lock = 1),
                    a && a !== this._time || m !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (u = this._dur,
                    l = this._tDur,
                    T && (this._lock = 2,
                    a = k ? u : -1e-4,
                    this.render(a, !0),
                    this.vars.repeatRefresh && !C && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !m)
                        return this;
                    Bf(this, C)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (D = nm(this, Je(a), Je(h)),
            D && (c -= h - (h = D._start))),
            this._tTime = c,
            this._time = h,
            this._act = !v,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = s,
            a = 0),
            !a && h && !o && !_ && (Vt(this, "onStart"),
            this._tTime !== c))
                return this;
            if (h >= a && s >= 0)
                for (d = this._first; d; ) {
                    if (p = d._next,
                    (d._act || h >= d._start) && d._ts && D !== d) {
                        if (d.parent !== this)
                            return this.render(s, o, i);
                        if (d.render(d._ts > 0 ? (h - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (h - d._start) * d._ts, o, i),
                        h !== this._time || !this._ts && !m) {
                            D = 0,
                            p && (c += this._zTime = -ge);
                            break
                        }
                    }
                    d = p
                }
            else {
                d = this._last;
                for (var P = s < 0 ? s : h; d; ) {
                    if (p = d._prev,
                    (d._act || P <= d._end) && d._ts && D !== d) {
                        if (d.parent !== this)
                            return this.render(s, o, i);
                        if (d.render(d._ts > 0 ? (P - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (P - d._start) * d._ts, o, i || ut && (d._initted || d._startAt)),
                        h !== this._time || !this._ts && !m) {
                            D = 0,
                            p && (c += this._zTime = P ? -ge : ge);
                            break
                        }
                    }
                    d = p
                }
            }
            if (D && !o && (this.pause(),
            D.render(h >= a ? 0 : -ge)._zTime = h >= a ? 1 : -1,
            this._ts))
                return this._start = y,
                Li(this),
                this.render(s, o, i);
            this._onUpdate && !o && Vt(this, "onUpdate", !0),
            (c === l && this._tTime >= this.totalDuration() || !c && a) && (y === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((s || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && on(this, 1),
            !o && !(s < 0 && !a) && (c || a || !l) && (Vt(this, c === l && s >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(c < l && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    t.add = function(s, o) {
        var i = this;
        if (Br(o) || (o = Ut(this, o, s)),
        !(s instanceof ho)) {
            if (lt(s))
                return s.forEach(function(a) {
                    return i.add(a, o)
                }),
                this;
            if (Ze(s))
                return this.addLabel(s, o);
            if (Ae(s))
                s = Ne.delayedCall(0, s);
            else
                return this
        }
        return this !== s ? Dr(this, s, o) : this
    }
    ,
    t.getChildren = function(s, o, i, a) {
        s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        i === void 0 && (i = !0),
        a === void 0 && (a = -Kt);
        for (var l = [], u = this._first; u; )
            u._start >= a && (u instanceof Ne ? o && l.push(u) : (i && l.push(u),
            s && l.push.apply(l, u.getChildren(!0, o, i)))),
            u = u._next;
        return l
    }
    ,
    t.getById = function(s) {
        for (var o = this.getChildren(1, 1, 1), i = o.length; i--; )
            if (o[i].vars.id === s)
                return o[i]
    }
    ,
    t.remove = function(s) {
        return Ze(s) ? this.removeLabel(s) : Ae(s) ? this.killTweensOf(s) : (Mi(this, s),
        s === this._recent && (this._recent = this._last),
        Rn(this))
    }
    ,
    t.totalTime = function(s, o) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = Je($t.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts))),
        n.prototype.totalTime.call(this, s, o),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    t.addLabel = function(s, o) {
        return this.labels[s] = Ut(this, o),
        this
    }
    ,
    t.removeLabel = function(s) {
        return delete this.labels[s],
        this
    }
    ,
    t.addPause = function(s, o, i) {
        var a = Ne.delayedCall(0, o || lo, i);
        return a.data = "isPause",
        this._hasPause = 1,
        Dr(this, a, Ut(this, s))
    }
    ,
    t.removePause = function(s) {
        var o = this._first;
        for (s = Ut(this, s); o; )
            o._start === s && o.data === "isPause" && on(o),
            o = o._next
    }
    ,
    t.killTweensOf = function(s, o, i) {
        for (var a = this.getTweensOf(s, i), l = a.length; l--; )
            Gr !== a[l] && a[l].kill(s, o);
        return this
    }
    ,
    t.getTweensOf = function(s, o) {
        for (var i = [], a = Jt(s), l = this._first, u = Br(o), c; l; )
            l instanceof Ne ? K0(l._targets, a) && (u ? (!Gr || l._initted && l._ts) && l.globalTime(0) <= o && l.globalTime(l.totalDuration()) > o : !o || l.isActive()) && i.push(l) : (c = l.getTweensOf(a, o)).length && i.push.apply(i, c),
            l = l._next;
        return i
    }
    ,
    t.tweenTo = function(s, o) {
        o = o || {};
        var i = this, a = Ut(i, s), l = o, u = l.startAt, c = l.onStart, f = l.onStartParams, h = l.immediateRender, d, p = Ne.to(i, er({
            ease: o.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: a,
            overwrite: "auto",
            duration: o.duration || Math.abs((a - (u && "time"in u ? u.time : i._time)) / i.timeScale()) || ge,
            onStart: function() {
                if (i.pause(),
                !d) {
                    var g = o.duration || Math.abs((a - (u && "time"in u ? u.time : i._time)) / i.timeScale());
                    p._dur !== g && ms(p, g, 0, 1).render(p._time, !0, !0),
                    d = 1
                }
                c && c.apply(p, f || [])
            }
        }, o));
        return h ? p.render(0) : p
    }
    ,
    t.tweenFromTo = function(s, o, i) {
        return this.tweenTo(o, er({
            startAt: {
                time: Ut(this, s)
            }
        }, i))
    }
    ,
    t.recent = function() {
        return this._recent
    }
    ,
    t.nextLabel = function(s) {
        return s === void 0 && (s = this._time),
        Sl(this, Ut(this, s))
    }
    ,
    t.previousLabel = function(s) {
        return s === void 0 && (s = this._time),
        Sl(this, Ut(this, s), 1)
    }
    ,
    t.currentLabel = function(s) {
        return arguments.length ? this.seek(s, !0) : this.previousLabel(this._time + ge)
    }
    ,
    t.shiftChildren = function(s, o, i) {
        i === void 0 && (i = 0);
        for (var a = this._first, l = this.labels, u; a; )
            a._start >= i && (a._start += s,
            a._end += s),
            a = a._next;
        if (o)
            for (u in l)
                l[u] >= i && (l[u] += s);
        return Rn(this)
    }
    ,
    t.invalidate = function(s) {
        var o = this._first;
        for (this._lock = 0; o; )
            o.invalidate(s),
            o = o._next;
        return n.prototype.invalidate.call(this, s)
    }
    ,
    t.clear = function(s) {
        s === void 0 && (s = !0);
        for (var o = this._first, i; o; )
            i = o._next,
            this.remove(o),
            o = i;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        s && (this.labels = {}),
        Rn(this)
    }
    ,
    t.totalDuration = function(s) {
        var o = 0, i = this, a = i._last, l = Kt, u, c, f;
        if (arguments.length)
            return i.timeScale((i._repeat < 0 ? i.duration() : i.totalDuration()) / (i.reversed() ? -s : s));
        if (i._dirty) {
            for (f = i.parent; a; )
                u = a._prev,
                a._dirty && a.totalDuration(),
                c = a._start,
                c > l && i._sort && a._ts && !i._lock ? (i._lock = 1,
                Dr(i, a, c - a._delay, 1)._lock = 0) : l = c,
                c < 0 && a._ts && (o -= c,
                (!f && !i._dp || f && f.smoothChildTiming) && (i._start += c / i._ts,
                i._time -= c,
                i._tTime -= c),
                i.shiftChildren(-c, !1, -1 / 0),
                l = 0),
                a._end > o && a._ts && (o = a._end),
                a = u;
            ms(i, i === Te && i._time > o ? i._time : o, 1, 1),
            i._dirty = 0
        }
        return i._tDur
    }
    ,
    e.updateRoot = function(s) {
        if (Te._ts && (mf(Te, Di(s, Te)),
        _f = $t.frame),
        $t.frame >= Cl) {
            Cl += jt.autoSleep || 120;
            var o = Te._first;
            if ((!o || !o._ts) && jt.autoSleep && $t._listeners.length < 2) {
                for (; o && !o._ts; )
                    o = o._next;
                o || $t.sleep()
            }
        }
    }
    ,
    e
}(ho);
er(mt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var ym = function(e, t, r, s, o, i, a) {
    var l = new Rt(this._pt,e,t,0,1,qf,null,o), u = 0, c = 0, f, h, d, p, _, g, m, D;
    for (l.b = r,
    l.e = s,
    r += "",
    s += "",
    (m = ~s.indexOf("random(")) && (s = co(s)),
    i && (D = [r, s],
    i(D, e, t),
    r = D[0],
    s = D[1]),
    h = r.match(qi) || []; f = qi.exec(s); )
        p = f[0],
        _ = s.substring(u, f.index),
        d ? d = (d + 1) % 5 : _.substr(-5) === "rgba(" && (d = 1),
        p !== h[c++] && (g = parseFloat(h[c - 1]) || 0,
        l._pt = {
            _next: l._pt,
            p: _ || c === 1 ? _ : ",",
            s: g,
            c: p.charAt(1) === "=" ? os(g, p) - g : parseFloat(p) - g,
            m: d && d < 4 ? Math.round : 0
        },
        u = qi.lastIndex);
    return l.c = u < s.length ? s.substring(u, s.length) : "",
    l.fp = a,
    (cf.test(s) || m) && (l.e = 0),
    this._pt = l,
    l
}, Eu = function(e, t, r, s, o, i, a, l, u, c) {
    Ae(s) && (s = s(o || 0, e, i));
    var f = e[t], h = r !== "get" ? r : Ae(f) ? u ? e[t.indexOf("set") || !Ae(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](u) : e[t]() : f, d = Ae(f) ? u ? bm : zf : bu, p;
    if (Ze(s) && (~s.indexOf("random(") && (s = co(s)),
    s.charAt(1) === "=" && (p = os(h, s) + (it(h) || 0),
    (p || p === 0) && (s = p))),
    !c || h !== s || La)
        return !isNaN(h * s) && s !== "" ? (p = new Rt(this._pt,e,t,+h || 0,s - (h || 0),typeof f == "boolean" ? Tm : Uf,0,d),
        u && (p.fp = u),
        a && p.modifier(a, this, e),
        this._pt = p) : (!f && !(t in e) && Du(t, s),
        ym.call(this, e, t, h, s, d, l || jt.stringFilter, u))
}, vm = function(e, t, r, s, o) {
    if (Ae(e) && (e = Ys(e, o, t, r, s)),
    !xr(e) || e.style && e.nodeType || lt(e) || uf(e))
        return Ze(e) ? Ys(e, o, t, r, s) : e;
    var i = {}, a;
    for (a in e)
        i[a] = Ys(e[a], o, t, r, s);
    return i
}, Nf = function(e, t, r, s, o, i) {
    var a, l, u, c;
    if (Ht[e] && (a = new Ht[e]).init(o, a.rawVars ? t[e] : vm(t[e], s, o, i, r), r, s, i) !== !1 && (r._pt = l = new Rt(r._pt,o,e,0,1,a.render,a,0,a.priority),
    r !== ts))
        for (u = r._ptLookup[r._targets.indexOf(o)],
        c = a._props.length; c--; )
            u[a._props[c]] = l;
    return a
}, Gr, La, Cu = function n(e, t, r) {
    var s = e.vars, o = s.ease, i = s.startAt, a = s.immediateRender, l = s.lazy, u = s.onUpdate, c = s.runBackwards, f = s.yoyoEase, h = s.keyframes, d = s.autoRevert, p = e._dur, _ = e._startAt, g = e._targets, m = e.parent, D = m && m.data === "nested" ? m.vars.targets : g, v = e._overwrite === "auto" && !pu, y = e.timeline, E, b, C, k, T, P, $, R, z, Y, j, H, V;
    if (y && (!h || !o) && (o = "none"),
    e._ease = An(o, _s.ease),
    e._yEase = f ? If(An(f === !0 ? o : f, _s.ease)) : 0,
    f && e._yoyo && !e._repeat && (f = e._yEase,
    e._yEase = e._ease,
    e._ease = f),
    e._from = !y && !!s.runBackwards,
    !y || h && !s.stagger) {
        if (R = g[0] ? Pn(g[0]).harness : 0,
        H = R && s[R.prop],
        E = mi(s, yu),
        _ && (_._zTime < 0 && _.progress(1),
        t < 0 && c && a && !d ? _.render(-1, !0) : _.revert(c && p ? Qo : X0),
        _._lazy = 0),
        i) {
            if (on(e._startAt = Ne.set(g, er({
                data: "isStart",
                overwrite: !1,
                parent: m,
                immediateRender: !0,
                lazy: !_ && kt(l),
                startAt: null,
                delay: 0,
                onUpdate: u && function() {
                    return Vt(e, "onUpdate")
                }
                ,
                stagger: 0
            }, i))),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            t < 0 && (ut || !a && !d) && e._startAt.revert(Qo),
            a && p && t <= 0 && r <= 0) {
                t && (e._zTime = t);
                return
            }
        } else if (c && p && !_) {
            if (t && (a = !1),
            C = er({
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !_ && kt(l),
                immediateRender: a,
                stagger: 0,
                parent: m
            }, E),
            H && (C[R.prop] = H),
            on(e._startAt = Ne.set(g, C)),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            t < 0 && (ut ? e._startAt.revert(Qo) : e._startAt.render(-1, !0)),
            e._zTime = t,
            !a)
                n(e._startAt, ge, ge);
            else if (!t)
                return
        }
        for (e._pt = e._ptCache = 0,
        l = p && kt(l) || l && !p,
        b = 0; b < g.length; b++) {
            if (T = g[b],
            $ = T._gsap || wu(g)[b]._gsap,
            e._ptLookup[b] = Y = {},
            Pa[$.id] && en.length && gi(),
            j = D === g ? b : D.indexOf(T),
            R && (z = new R).init(T, H || E, e, j, D) !== !1 && (e._pt = k = new Rt(e._pt,T,z.name,0,1,z.render,z,0,z.priority),
            z._props.forEach(function(J) {
                Y[J] = k
            }),
            z.priority && (P = 1)),
            !R || H)
                for (C in E)
                    Ht[C] && (z = Nf(C, E, e, j, T, D)) ? z.priority && (P = 1) : Y[C] = k = Eu.call(e, T, C, "get", E[C], j, D, 0, s.stringFilter);
            e._op && e._op[b] && e.kill(T, e._op[b]),
            v && e._pt && (Gr = e,
            Te.killTweensOf(T, Y, e.globalTime(t)),
            V = !e.parent,
            Gr = 0),
            e._pt && l && (Pa[$.id] = 1)
        }
        P && Wf(e),
        e._onInit && e._onInit(e)
    }
    e._onUpdate = u,
    e._initted = (!e._op || e._pt) && !V,
    h && t <= 0 && y.render(Kt, !0, !0)
}, wm = function(e, t, r, s, o, i, a, l) {
    var u = (e._pt && e._ptCache || (e._ptCache = {}))[t], c, f, h, d;
    if (!u)
        for (u = e._ptCache[t] = [],
        h = e._ptLookup,
        d = e._targets.length; d--; ) {
            if (c = h[d][t],
            c && c.d && c.d._pt)
                for (c = c.d._pt; c && c.p !== t && c.fp !== t; )
                    c = c._next;
            if (!c)
                return La = 1,
                e.vars[t] = "+=0",
                Cu(e, a),
                La = 0,
                l ? uo(t + " not eligible for reset") : 1;
            u.push(c)
        }
    for (d = u.length; d--; )
        f = u[d],
        c = f._pt || f,
        c.s = (s || s === 0) && !o ? s : c.s + (s || 0) + i * c.c,
        c.c = r - c.s,
        f.e && (f.e = Le(r) + it(f.e)),
        f.b && (f.b = c.s + it(f.b))
}, Em = function(e, t) {
    var r = e[0] ? Pn(e[0]).harness : 0, s = r && r.aliases, o, i, a, l;
    if (!s)
        return t;
    o = Bn({}, t);
    for (i in s)
        if (i in o)
            for (l = s[i].split(","),
            a = l.length; a--; )
                o[l[a]] = o[i];
    return o
}, Cm = function(e, t, r, s) {
    var o = t.ease || s || "power1.inOut", i, a;
    if (lt(t))
        a = r[e] || (r[e] = []),
        t.forEach(function(l, u) {
            return a.push({
                t: u / (t.length - 1) * 100,
                v: l,
                e: o
            })
        });
    else
        for (i in t)
            a = r[i] || (r[i] = []),
            i === "ease" || a.push({
                t: parseFloat(e),
                v: t[i],
                e: o
            })
}, Ys = function(e, t, r, s, o) {
    return Ae(e) ? e.call(t, r, s, o) : Ze(e) && ~e.indexOf("random(") ? co(e) : e
}, Vf = vu + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", jf = {};
Pt(Vf + ",id,stagger,delay,duration,paused,scrollTrigger", function(n) {
    return jf[n] = 1
});
var Ne = function(n) {
    of(e, n);
    function e(r, s, o, i) {
        var a;
        typeof s == "number" && (o.duration = s,
        s = o,
        o = null),
        a = n.call(this, i ? s : qs(s)) || this;
        var l = a.vars, u = l.duration, c = l.delay, f = l.immediateRender, h = l.stagger, d = l.overwrite, p = l.keyframes, _ = l.defaults, g = l.scrollTrigger, m = l.yoyoEase, D = s.parent || Te, v = (lt(r) || uf(r) ? Br(r[0]) : "length"in s) ? [r] : Jt(r), y, E, b, C, k, T, P, $;
        if (a._targets = v.length ? wu(v) : uo("GSAP target " + r + " not found. https://gsap.com", !jt.nullTargetWarn) || [],
        a._ptLookup = [],
        a._overwrite = d,
        p || h || Oo(u) || Oo(c)) {
            if (s = a.vars,
            y = a.timeline = new mt({
                data: "nested",
                defaults: _ || {},
                targets: D && D.data === "nested" ? D.vars.targets : v
            }),
            y.kill(),
            y.parent = y._dp = Ar(a),
            y._start = 0,
            h || Oo(u) || Oo(c)) {
                if (C = v.length,
                P = h && Tf(h),
                xr(h))
                    for (k in h)
                        ~Vf.indexOf(k) && ($ || ($ = {}),
                        $[k] = h[k]);
                for (E = 0; E < C; E++)
                    b = mi(s, jf),
                    b.stagger = 0,
                    m && (b.yoyoEase = m),
                    $ && Bn(b, $),
                    T = v[E],
                    b.duration = +Ys(u, Ar(a), E, T, v),
                    b.delay = (+Ys(c, Ar(a), E, T, v) || 0) - a._delay,
                    !h && C === 1 && b.delay && (a._delay = c = b.delay,
                    a._start += c,
                    b.delay = 0),
                    y.to(T, b, P ? P(E, T, v) : 0),
                    y._ease = oe.none;
                y.duration() ? u = c = 0 : a.timeline = 0
            } else if (p) {
                qs(er(y.vars.defaults, {
                    ease: "none"
                })),
                y._ease = An(p.ease || s.ease || "none");
                var R = 0, z, Y, j;
                if (lt(p))
                    p.forEach(function(H) {
                        return y.to(v, H, ">")
                    }),
                    y.duration();
                else {
                    b = {};
                    for (k in p)
                        k === "ease" || k === "easeEach" || Cm(k, p[k], b, p.easeEach);
                    for (k in b)
                        for (z = b[k].sort(function(H, V) {
                            return H.t - V.t
                        }),
                        R = 0,
                        E = 0; E < z.length; E++)
                            Y = z[E],
                            j = {
                                ease: Y.e,
                                duration: (Y.t - (E ? z[E - 1].t : 0)) / 100 * u
                            },
                            j[k] = Y.v,
                            y.to(v, j, R),
                            R += j.duration;
                    y.duration() < u && y.to({}, {
                        duration: u - y.duration()
                    })
                }
            }
            u || a.duration(u = y.duration())
        } else
            a.timeline = 0;
        return d === !0 && !pu && (Gr = Ar(a),
        Te.killTweensOf(v),
        Gr = 0),
        Dr(D, Ar(a), o),
        s.reversed && a.reverse(),
        s.paused && a.paused(!0),
        (f || !u && !p && a._start === Je(D._time) && kt(f) && em(Ar(a)) && D.data !== "nested") && (a._tTime = -ge,
        a.render(Math.max(0, -c) || 0)),
        g && Ef(Ar(a), g),
        a
    }
    var t = e.prototype;
    return t.render = function(s, o, i) {
        var a = this._time, l = this._tDur, u = this._dur, c = s < 0, f = s > l - ge && !c ? l : s < ge ? 0 : s, h, d, p, _, g, m, D, v, y;
        if (!u)
            rm(this, s, o, i);
        else if (f !== this._tTime || !s || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c) {
            if (h = f,
            v = this.timeline,
            this._repeat) {
                if (_ = u + this._rDelay,
                this._repeat < -1 && c)
                    return this.totalTime(_ * 100 + s, o, i);
                if (h = Je(f % _),
                f === l ? (p = this._repeat,
                h = u) : (p = ~~(f / _),
                p && p === Je(f / _) && (h = u,
                p--),
                h > u && (h = u)),
                m = this._yoyo && p & 1,
                m && (y = this._yEase,
                h = u - h),
                g = gs(this._tTime, _),
                h === a && !i && this._initted && p === g)
                    return this._tTime = f,
                    this;
                p !== g && (v && this._yEase && Bf(v, m),
                this.vars.repeatRefresh && !m && !this._lock && this._time !== u && this._initted && (this._lock = i = 1,
                this.render(Je(_ * p), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Cf(this, c ? s : h, i, o, f))
                    return this._tTime = 0,
                    this;
                if (a !== this._time && !(i && this.vars.repeatRefresh && p !== g))
                    return this;
                if (u !== this._dur)
                    return this.render(s, o, i)
            }
            if (this._tTime = f,
            this._time = h,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = D = (y || this._ease)(h / u),
            this._from && (this.ratio = D = 1 - D),
            h && !a && !o && !p && (Vt(this, "onStart"),
            this._tTime !== f))
                return this;
            for (d = this._pt; d; )
                d.r(D, d.d),
                d = d._next;
            v && v.render(s < 0 ? s : !h && m ? -ge : v._dur * v._ease(h / this._dur), o, i) || this._startAt && (this._zTime = s),
            this._onUpdate && !o && (c && Ra(this, s, o, i),
            Vt(this, "onUpdate")),
            this._repeat && p !== g && this.vars.onRepeat && !o && this.parent && Vt(this, "onRepeat"),
            (f === this._tDur || !f) && this._tTime === f && (c && !this._onUpdate && Ra(this, s, !0, !0),
            (s || !u) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && on(this, 1),
            !o && !(c && !a) && (f || a || m) && (Vt(this, f === l ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(f < l && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    t.targets = function() {
        return this._targets
    }
    ,
    t.invalidate = function(s) {
        return (!s || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(s),
        n.prototype.invalidate.call(this, s)
    }
    ,
    t.resetTo = function(s, o, i, a, l) {
        fo || $t.wake(),
        this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
        return this._initted || Cu(this, u),
        c = this._ease(u / this._dur),
        wm(this, s, o, i, a, c, u, l) ? this.resetTo(s, o, i, a, 1) : (Ii(this, 0),
        this.parent || vf(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    t.kill = function(s, o) {
        if (o === void 0 && (o = "all"),
        !s && (!o || o === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? Ls(this) : this;
        if (this.timeline) {
            var i = this.timeline.totalDuration();
            return this.timeline.killTweensOf(s, o, Gr && Gr.vars.overwrite !== !0)._first || Ls(this),
            this.parent && i !== this.timeline.totalDuration() && ms(this, this._dur * this.timeline._tDur / i, 0, 1),
            this
        }
        var a = this._targets, l = s ? Jt(s) : a, u = this._ptLookup, c = this._pt, f, h, d, p, _, g, m;
        if ((!o || o === "all") && Q0(a, l))
            return o === "all" && (this._pt = 0),
            Ls(this);
        for (f = this._op = this._op || [],
        o !== "all" && (Ze(o) && (_ = {},
        Pt(o, function(D) {
            return _[D] = 1
        }),
        o = _),
        o = Em(a, o)),
        m = a.length; m--; )
            if (~l.indexOf(a[m])) {
                h = u[m],
                o === "all" ? (f[m] = o,
                p = h,
                d = {}) : (d = f[m] = f[m] || {},
                p = o);
                for (_ in p)
                    g = h && h[_],
                    g && ((!("kill"in g.d) || g.d.kill(_) === !0) && Mi(this, g, "_pt"),
                    delete h[_]),
                    d !== "all" && (d[_] = 1)
            }
        return this._initted && !this._pt && c && Ls(this),
        this
    }
    ,
    e.to = function(s, o) {
        return new e(s,o,arguments[2])
    }
    ,
    e.from = function(s, o) {
        return Ws(1, arguments)
    }
    ,
    e.delayedCall = function(s, o, i, a) {
        return new e(o,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: s,
            onComplete: o,
            onReverseComplete: o,
            onCompleteParams: i,
            onReverseCompleteParams: i,
            callbackScope: a
        })
    }
    ,
    e.fromTo = function(s, o, i) {
        return Ws(2, arguments)
    }
    ,
    e.set = function(s, o) {
        return o.duration = 0,
        o.repeatDelay || (o.repeat = 0),
        new e(s,o)
    }
    ,
    e.killTweensOf = function(s, o, i) {
        return Te.killTweensOf(s, o, i)
    }
    ,
    e
}(ho);
er(Ne.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
Pt("staggerTo,staggerFrom,staggerFromTo", function(n) {
    Ne[n] = function() {
        var e = new mt
          , t = Fa.call(arguments, 0);
        return t.splice(n === "staggerFromTo" ? 5 : 4, 0, 0),
        e[n].apply(e, t)
    }
});
var bu = function(e, t, r) {
    return e[t] = r
}
  , zf = function(e, t, r) {
    return e[t](r)
}
  , bm = function(e, t, r, s) {
    return e[t](s.fp, r)
}
  , xm = function(e, t, r) {
    return e.setAttribute(t, r)
}
  , xu = function(e, t) {
    return Ae(e[t]) ? zf : _u(e[t]) && e.setAttribute ? xm : bu
}
  , Uf = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
}
  , Tm = function(e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t)
}
  , qf = function(e, t) {
    var r = t._pt
      , s = "";
    if (!e && t.b)
        s = t.b;
    else if (e === 1 && t.e)
        s = t.e;
    else {
        for (; r; )
            s = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + s,
            r = r._next;
        s += t.c
    }
    t.set(t.t, t.p, s, t)
}
  , Tu = function(e, t) {
    for (var r = t._pt; r; )
        r.r(e, r.d),
        r = r._next
}
  , Sm = function(e, t, r, s) {
    for (var o = this._pt, i; o; )
        i = o._next,
        o.p === s && o.modifier(e, t, r),
        o = i
}
  , km = function(e) {
    for (var t = this._pt, r, s; t; )
        s = t._next,
        t.p === e && !t.op || t.op === e ? Mi(this, t, "_pt") : t.dep || (r = 1),
        t = s;
    return !r
}
  , Pm = function(e, t, r, s) {
    s.mSet(e, t, s.m.call(s.tween, r, s.mt), s)
}
  , Wf = function(e) {
    for (var t = e._pt, r, s, o, i; t; ) {
        for (r = t._next,
        s = o; s && s.pr > t.pr; )
            s = s._next;
        (t._prev = s ? s._prev : i) ? t._prev._next = t : o = t,
        (t._next = s) ? s._prev = t : i = t,
        t = r
    }
    e._pt = o
}
  , Rt = function() {
    function n(t, r, s, o, i, a, l, u, c) {
        this.t = r,
        this.s = o,
        this.c = i,
        this.p = s,
        this.r = a || Uf,
        this.d = l || this,
        this.set = u || bu,
        this.pr = c || 0,
        this._next = t,
        t && (t._prev = this)
    }
    var e = n.prototype;
    return e.modifier = function(r, s, o) {
        this.mSet = this.mSet || this.set,
        this.set = Pm,
        this.m = r,
        this.mt = o,
        this.tween = s
    }
    ,
    n
}();
Pt(vu + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(n) {
    return yu[n] = 1
});
zt.TweenMax = zt.TweenLite = Ne;
zt.TimelineLite = zt.TimelineMax = mt;
Te = new mt({
    sortChildren: !1,
    defaults: _s,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
jt.stringFilter = Lf;
var Fn = []
  , ei = {}
  , Rm = []
  , Pl = 0
  , Am = 0
  , Ki = function(e) {
    return (ei[e] || Rm).map(function(t) {
        return t()
    })
}
  , Ia = function() {
    var e = Date.now()
      , t = [];
    e - Pl > 2 && (Ki("matchMediaInit"),
    Fn.forEach(function(r) {
        var s = r.queries, o = r.conditions, i, a, l, u;
        for (a in s)
            i = qt.matchMedia(s[a]).matches,
            i && (l = 1),
            i !== o[a] && (o[a] = i,
            u = 1);
        u && (r.revert(),
        l && t.push(r))
    }),
    Ki("matchMediaRevert"),
    t.forEach(function(r) {
        return r.onMatch(r, function(s) {
            return r.add(null, s)
        })
    }),
    Pl = e,
    Ki("matchMedia"))
}
  , Yf = function() {
    function n(t, r) {
        this.selector = r && Oa(r),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = Am++,
        t && this.add(t)
    }
    var e = n.prototype;
    return e.add = function(r, s, o) {
        Ae(r) && (o = s,
        s = r,
        r = Ae);
        var i = this
          , a = function() {
            var u = Re, c = i.selector, f;
            return u && u !== i && u.data.push(i),
            o && (i.selector = Oa(o)),
            Re = i,
            f = s.apply(i, arguments),
            Ae(f) && i._r.push(f),
            Re = u,
            i.selector = c,
            i.isReverted = !1,
            f
        };
        return i.last = a,
        r === Ae ? a(i, function(l) {
            return i.add(null, l)
        }) : r ? i[r] = a : a
    }
    ,
    e.ignore = function(r) {
        var s = Re;
        Re = null,
        r(this),
        Re = s
    }
    ,
    e.getTweens = function() {
        var r = [];
        return this.data.forEach(function(s) {
            return s instanceof n ? r.push.apply(r, s.getTweens()) : s instanceof Ne && !(s.parent && s.parent.data === "nested") && r.push(s)
        }),
        r
    }
    ,
    e.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    e.kill = function(r, s) {
        var o = this;
        if (r ? function() {
            for (var a = o.getTweens(), l = o.data.length, u; l--; )
                u = o.data[l],
                u.data === "isFlip" && (u.revert(),
                u.getChildren(!0, !0, !1).forEach(function(c) {
                    return a.splice(a.indexOf(c), 1)
                }));
            for (a.map(function(c) {
                return {
                    g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
                    t: c
                }
            }).sort(function(c, f) {
                return f.g - c.g || -1 / 0
            }).forEach(function(c) {
                return c.t.revert(r)
            }),
            l = o.data.length; l--; )
                u = o.data[l],
                u instanceof mt ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(),
                u.kill()) : !(u instanceof Ne) && u.revert && u.revert(r);
            o._r.forEach(function(c) {
                return c(r, o)
            }),
            o.isReverted = !0
        }() : this.data.forEach(function(a) {
            return a.kill && a.kill()
        }),
        this.clear(),
        s)
            for (var i = Fn.length; i--; )
                Fn[i].id === this.id && Fn.splice(i, 1)
    }
    ,
    e.revert = function(r) {
        this.kill(r || {})
    }
    ,
    n
}()
  , Fm = function() {
    function n(t) {
        this.contexts = [],
        this.scope = t
    }
    var e = n.prototype;
    return e.add = function(r, s, o) {
        xr(r) || (r = {
            matches: r
        });
        var i = new Yf(0,o || this.scope), a = i.conditions = {}, l, u, c;
        Re && !i.selector && (i.selector = Re.selector),
        this.contexts.push(i),
        s = i.add("onMatch", s),
        i.queries = r;
        for (u in r)
            u === "all" ? c = 1 : (l = qt.matchMedia(r[u]),
            l && (Fn.indexOf(i) < 0 && Fn.push(i),
            (a[u] = l.matches) && (c = 1),
            l.addListener ? l.addListener(Ia) : l.addEventListener("change", Ia)));
        return c && s(i, function(f) {
            return i.add(null, f)
        }),
        this
    }
    ,
    e.revert = function(r) {
        this.kill(r || {})
    }
    ,
    e.kill = function(r) {
        this.contexts.forEach(function(s) {
            return s.kill(r, !0)
        })
    }
    ,
    n
}()
  , yi = {
    registerPlugin: function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
        t.forEach(function(s) {
            return Ff(s)
        })
    },
    timeline: function(e) {
        return new mt(e)
    },
    getTweensOf: function(e, t) {
        return Te.getTweensOf(e, t)
    },
    getProperty: function(e, t, r, s) {
        Ze(e) && (e = Jt(e)[0]);
        var o = Pn(e || {}).get
          , i = r ? yf : Df;
        return r === "native" && (r = ""),
        e && (t ? i((Ht[t] && Ht[t].get || o)(e, t, r, s)) : function(a, l, u) {
            return i((Ht[a] && Ht[a].get || o)(e, a, l, u))
        }
        )
    },
    quickSetter: function(e, t, r) {
        if (e = Jt(e),
        e.length > 1) {
            var s = e.map(function(c) {
                return Ft.quickSetter(c, t, r)
            })
              , o = s.length;
            return function(c) {
                for (var f = o; f--; )
                    s[f](c)
            }
        }
        e = e[0] || {};
        var i = Ht[t]
          , a = Pn(e)
          , l = a.harness && (a.harness.aliases || {})[t] || t
          , u = i ? function(c) {
            var f = new i;
            ts._pt = 0,
            f.init(e, r ? c + r : c, ts, 0, [e]),
            f.render(1, f),
            ts._pt && Tu(1, ts)
        }
        : a.set(e, l);
        return i ? u : function(c) {
            return u(e, l, r ? c + r : c, a, 1)
        }
    },
    quickTo: function(e, t, r) {
        var s, o = Ft.to(e, Bn((s = {},
        s[t] = "+=0.1",
        s.paused = !0,
        s), r || {})), i = function(l, u, c) {
            return o.resetTo(t, l, u, c)
        };
        return i.tween = o,
        i
    },
    isTweening: function(e) {
        return Te.getTweensOf(e, !0).length > 0
    },
    defaults: function(e) {
        return e && e.ease && (e.ease = An(e.ease, _s.ease)),
        bl(_s, e || {})
    },
    config: function(e) {
        return bl(jt, e || {})
    },
    registerEffect: function(e) {
        var t = e.name
          , r = e.effect
          , s = e.plugins
          , o = e.defaults
          , i = e.extendTimeline;
        (s || "").split(",").forEach(function(a) {
            return a && !Ht[a] && !zt[a] && uo(t + " effect requires " + a + " plugin.")
        }),
        Wi[t] = function(a, l, u) {
            return r(Jt(a), er(l || {}, o), u)
        }
        ,
        i && (mt.prototype[t] = function(a, l, u) {
            return this.add(Wi[t](a, xr(l) ? l : (u = l) && {}, this), u)
        }
        )
    },
    registerEase: function(e, t) {
        oe[e] = An(t)
    },
    parseEase: function(e, t) {
        return arguments.length ? An(e, t) : oe
    },
    getById: function(e) {
        return Te.getById(e)
    },
    exportRoot: function(e, t) {
        e === void 0 && (e = {});
        var r = new mt(e), s, o;
        for (r.smoothChildTiming = kt(e.smoothChildTiming),
        Te.remove(r),
        r._dp = 0,
        r._time = r._tTime = Te._time,
        s = Te._first; s; )
            o = s._next,
            (t || !(!s._dur && s instanceof Ne && s.vars.onComplete === s._targets[0])) && Dr(r, s, s._start - s._delay),
            s = o;
        return Dr(Te, r, 0),
        r
    },
    context: function(e, t) {
        return e ? new Yf(e,t) : Re
    },
    matchMedia: function(e) {
        return new Fm(e)
    },
    matchMediaRefresh: function() {
        return Fn.forEach(function(e) {
            var t = e.conditions, r, s;
            for (s in t)
                t[s] && (t[s] = !1,
                r = 1);
            r && e.revert()
        }) || Ia()
    },
    addEventListener: function(e, t) {
        var r = ei[e] || (ei[e] = []);
        ~r.indexOf(t) || r.push(t)
    },
    removeEventListener: function(e, t) {
        var r = ei[e]
          , s = r && r.indexOf(t);
        s >= 0 && r.splice(s, 1)
    },
    utils: {
        wrap: cm,
        wrapYoyo: fm,
        distribute: Tf,
        random: kf,
        snap: Sf,
        normalize: lm,
        getUnit: it,
        clamp: om,
        splitColor: Of,
        toArray: Jt,
        selector: Oa,
        mapRange: Rf,
        pipe: am,
        unitize: um,
        interpolate: dm,
        shuffle: xf
    },
    install: hf,
    effects: Wi,
    ticker: $t,
    updateRoot: mt.updateRoot,
    plugins: Ht,
    globalTimeline: Te,
    core: {
        PropTween: Rt,
        globals: pf,
        Tween: Ne,
        Timeline: mt,
        Animation: ho,
        getCache: Pn,
        _removeLinkedListItem: Mi,
        reverting: function() {
            return ut
        },
        context: function(e) {
            return e && Re && (Re.data.push(e),
            e._ctx = Re),
            Re
        },
        suppressOverwrites: function(e) {
            return pu = e
        }
    }
};
Pt("to,from,fromTo,delayedCall,set,killTweensOf", function(n) {
    return yi[n] = Ne[n]
});
$t.add(mt.updateRoot);
ts = yi.to({}, {
    duration: 0
});
var Om = function(e, t) {
    for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
        r = r._next;
    return r
}
  , Mm = function(e, t) {
    var r = e._targets, s, o, i;
    for (s in t)
        for (o = r.length; o--; )
            i = e._ptLookup[o][s],
            i && (i = i.d) && (i._pt && (i = Om(i, s)),
            i && i.modifier && i.modifier(t[s], e, r[o], s))
}
  , Ji = function(e, t) {
    return {
        name: e,
        rawVars: 1,
        init: function(s, o, i) {
            i._onInit = function(a) {
                var l, u;
                if (Ze(o) && (l = {},
                Pt(o, function(c) {
                    return l[c] = 1
                }),
                o = l),
                t) {
                    l = {};
                    for (u in o)
                        l[u] = t(o[u]);
                    o = l
                }
                Mm(a, o)
            }
        }
    }
}
  , Ft = yi.registerPlugin({
    name: "attr",
    init: function(e, t, r, s, o) {
        var i, a, l;
        this.tween = r;
        for (i in t)
            l = e.getAttribute(i) || "",
            a = this.add(e, "setAttribute", (l || 0) + "", t[i], s, o, 0, 0, i),
            a.op = i,
            a.b = l,
            this._props.push(i)
    },
    render: function(e, t) {
        for (var r = t._pt; r; )
            ut ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d),
            r = r._next
    }
}, {
    name: "endArray",
    init: function(e, t) {
        for (var r = t.length; r--; )
            this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1)
    }
}, Ji("roundProps", Ma), Ji("modifiers"), Ji("snap", Sf)) || yi;
Ne.version = mt.version = Ft.version = "3.12.3";
df = 1;
gu() && Ds();
oe.Power0;
oe.Power1;
oe.Power2;
oe.Power3;
oe.Power4;
oe.Linear;
oe.Quad;
oe.Cubic;
oe.Quart;
oe.Quint;
oe.Strong;
oe.Elastic;
oe.Back;
oe.SteppedEase;
oe.Bounce;
oe.Sine;
oe.Expo;
oe.Circ;
/*!
 * CSSPlugin 3.12.3
 * https://gsap.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Rl, Kr, is, Su, Sn, Al, ku, Lm = function() {
    return typeof window < "u"
}, Hr = {}, Cn = 180 / Math.PI, as = Math.PI / 180, Yn = Math.atan2, Fl = 1e8, Pu = /([A-Z])/g, Im = /(left|right|width|margin|padding|x)/i, Bm = /[\s,\(]\S/, yr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, Ba = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
}, Hm = function(e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
}, $m = function(e, t) {
    return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
}, Nm = function(e, t) {
    var r = t.s + t.c * e;
    t.set(t.t, t.p, ~~(r + (r < 0 ? -.5 : .5)) + t.u, t)
}, Xf = function(e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t)
}, Gf = function(e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
}, Vm = function(e, t, r) {
    return e.style[t] = r
}, jm = function(e, t, r) {
    return e.style.setProperty(t, r)
}, zm = function(e, t, r) {
    return e._gsap[t] = r
}, Um = function(e, t, r) {
    return e._gsap.scaleX = e._gsap.scaleY = r
}, qm = function(e, t, r, s, o) {
    var i = e._gsap;
    i.scaleX = i.scaleY = r,
    i.renderTransform(o, i)
}, Wm = function(e, t, r, s, o) {
    var i = e._gsap;
    i[t] = r,
    i.renderTransform(o, i)
}, Se = "transform", At = Se + "Origin", Ym = function n(e, t) {
    var r = this
      , s = this.target
      , o = s.style
      , i = s._gsap;
    if (e in Hr && o) {
        if (this.tfm = this.tfm || {},
        e !== "transform")
            e = yr[e] || e,
            ~e.indexOf(",") ? e.split(",").forEach(function(a) {
                return r.tfm[a] = Fr(s, a)
            }) : this.tfm[e] = i.x ? i[e] : Fr(s, e),
            e === At && (this.tfm.zOrigin = i.zOrigin);
        else
            return yr.transform.split(",").forEach(function(a) {
                return n.call(r, a, t)
            });
        if (this.props.indexOf(Se) >= 0)
            return;
        i.svg && (this.svgo = s.getAttribute("data-svg-origin"),
        this.props.push(At, t, "")),
        e = Se
    }
    (o || t) && this.props.push(e, t, o[e])
}, Kf = function(e) {
    e.translate && (e.removeProperty("translate"),
    e.removeProperty("scale"),
    e.removeProperty("rotate"))
}, Xm = function() {
    var e = this.props, t = this.target, r = t.style, s = t._gsap, o, i;
    for (o = 0; o < e.length; o += 3)
        e[o + 1] ? t[e[o]] = e[o + 2] : e[o + 2] ? r[e[o]] = e[o + 2] : r.removeProperty(e[o].substr(0, 2) === "--" ? e[o] : e[o].replace(Pu, "-$1").toLowerCase());
    if (this.tfm) {
        for (i in this.tfm)
            s[i] = this.tfm[i];
        s.svg && (s.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        o = ku(),
        (!o || !o.isStart) && !r[Se] && (Kf(r),
        s.zOrigin && r[At] && (r[At] += " " + s.zOrigin + "px",
        s.zOrigin = 0,
        s.renderTransform()),
        s.uncache = 1)
    }
}, Jf = function(e, t) {
    var r = {
        target: e,
        props: [],
        revert: Xm,
        save: Ym
    };
    return e._gsap || Ft.core.getCache(e),
    t && t.split(",").forEach(function(s) {
        return r.save(s)
    }),
    r
}, Qf, Ha = function(e, t) {
    var r = Kr.createElementNS ? Kr.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Kr.createElement(e);
    return r && r.style ? r : Kr.createElement(e)
}, Cr = function n(e, t, r) {
    var s = getComputedStyle(e);
    return s[t] || s.getPropertyValue(t.replace(Pu, "-$1").toLowerCase()) || s.getPropertyValue(t) || !r && n(e, ys(t) || t, 1) || ""
}, Ol = "O,Moz,ms,Ms,Webkit".split(","), ys = function(e, t, r) {
    var s = t || Sn
      , o = s.style
      , i = 5;
    if (e in o && !r)
        return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(Ol[i] + e in o); )
        ;
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? Ol[i] : "") + e
}, $a = function() {
    Lm() && window.document && (Rl = window,
    Kr = Rl.document,
    is = Kr.documentElement,
    Sn = Ha("div") || {
        style: {}
    },
    Ha("div"),
    Se = ys(Se),
    At = Se + "Origin",
    Sn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    Qf = !!ys("perspective"),
    ku = Ft.core.reverting,
    Su = 1)
}, Qi = function n(e) {
    var t = Ha("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, s = this.nextSibling, o = this.style.cssText, i;
    if (is.appendChild(t),
    t.appendChild(this),
    this.style.display = "block",
    e)
        try {
            i = this.getBBox(),
            this._gsapBBox = this.getBBox,
            this.getBBox = n
        } catch {}
    else
        this._gsapBBox && (i = this._gsapBBox());
    return r && (s ? r.insertBefore(this, s) : r.appendChild(this)),
    is.removeChild(t),
    this.style.cssText = o,
    i
}, Ml = function(e, t) {
    for (var r = t.length; r--; )
        if (e.hasAttribute(t[r]))
            return e.getAttribute(t[r])
}, Zf = function(e) {
    var t;
    try {
        t = e.getBBox()
    } catch {
        t = Qi.call(e, !0)
    }
    return t && (t.width || t.height) || e.getBBox === Qi || (t = Qi.call(e, !0)),
    t && !t.width && !t.x && !t.y ? {
        x: +Ml(e, ["x", "cx", "x1"]) || 0,
        y: +Ml(e, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : t
}, ed = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Zf(e))
}, Hn = function(e, t) {
    if (t) {
        var r = e.style, s;
        t in Hr && t !== At && (t = Se),
        r.removeProperty ? (s = t.substr(0, 2),
        (s === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
        r.removeProperty(s === "--" ? t : t.replace(Pu, "-$1").toLowerCase())) : r.removeAttribute(t)
    }
}, Jr = function(e, t, r, s, o, i) {
    var a = new Rt(e._pt,t,r,0,1,i ? Gf : Xf);
    return e._pt = a,
    a.b = s,
    a.e = o,
    e._props.push(r),
    a
}, Ll = {
    deg: 1,
    rad: 1,
    turn: 1
}, Gm = {
    grid: 1,
    flex: 1
}, an = function n(e, t, r, s) {
    var o = parseFloat(r) || 0, i = (r + "").trim().substr((o + "").length) || "px", a = Sn.style, l = Im.test(t), u = e.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (l ? "Width" : "Height"), f = 100, h = s === "px", d = s === "%", p, _, g, m;
    if (s === i || !o || Ll[s] || Ll[i])
        return o;
    if (i !== "px" && !h && (o = n(e, t, r, "px")),
    m = e.getCTM && ed(e),
    (d || i === "%") && (Hr[t] || ~t.indexOf("adius")))
        return p = m ? e.getBBox()[l ? "width" : "height"] : e[c],
        Le(d ? o / p * f : o / 100 * p);
    if (a[l ? "width" : "height"] = f + (h ? i : s),
    _ = ~t.indexOf("adius") || s === "em" && e.appendChild && !u ? e : e.parentNode,
    m && (_ = (e.ownerSVGElement || {}).parentNode),
    (!_ || _ === Kr || !_.appendChild) && (_ = Kr.body),
    g = _._gsap,
    g && d && g.width && l && g.time === $t.time && !g.uncache)
        return Le(o / g.width * f);
    if (d && (t === "height" || t === "width")) {
        var D = e.style[t];
        e.style[t] = f + s,
        p = e[c],
        D ? e.style[t] = D : Hn(e, t)
    } else
        (d || i === "%") && !Gm[Cr(_, "display")] && (a.position = Cr(e, "position")),
        _ === e && (a.position = "static"),
        _.appendChild(Sn),
        p = Sn[c],
        _.removeChild(Sn),
        a.position = "absolute";
    return l && d && (g = Pn(_),
    g.time = $t.time,
    g.width = _[c]),
    Le(h ? p * o / f : p && o ? f / p * o : 0)
}, Fr = function(e, t, r, s) {
    var o;
    return Su || $a(),
    t in yr && t !== "transform" && (t = yr[t],
    ~t.indexOf(",") && (t = t.split(",")[0])),
    Hr[t] && t !== "transform" ? (o = _o(e, s),
    o = t !== "transformOrigin" ? o[t] : o.svg ? o.origin : wi(Cr(e, At)) + " " + o.zOrigin + "px") : (o = e.style[t],
    (!o || o === "auto" || s || ~(o + "").indexOf("calc(")) && (o = vi[t] && vi[t](e, t, r) || Cr(e, t) || gf(e, t) || (t === "opacity" ? 1 : 0))),
    r && !~(o + "").trim().indexOf(" ") ? an(e, t, o, r) + r : o
}, Km = function(e, t, r, s) {
    if (!r || r === "none") {
        var o = ys(t, e, 1)
          , i = o && Cr(e, o, 1);
        i && i !== r ? (t = o,
        r = i) : t === "borderColor" && (r = Cr(e, "borderTopColor"))
    }
    var a = new Rt(this._pt,e.style,t,0,1,qf), l = 0, u = 0, c, f, h, d, p, _, g, m, D, v, y, E;
    if (a.b = r,
    a.e = s,
    r += "",
    s += "",
    s === "auto" && (_ = e.style[t],
    e.style[t] = s,
    s = Cr(e, t) || s,
    _ ? e.style[t] = _ : Hn(e, t)),
    c = [r, s],
    Lf(c),
    r = c[0],
    s = c[1],
    h = r.match(es) || [],
    E = s.match(es) || [],
    E.length) {
        for (; f = es.exec(s); )
            g = f[0],
            D = s.substring(l, f.index),
            p ? p = (p + 1) % 5 : (D.substr(-5) === "rgba(" || D.substr(-5) === "hsla(") && (p = 1),
            g !== (_ = h[u++] || "") && (d = parseFloat(_) || 0,
            y = _.substr((d + "").length),
            g.charAt(1) === "=" && (g = os(d, g) + y),
            m = parseFloat(g),
            v = g.substr((m + "").length),
            l = es.lastIndex - v.length,
            v || (v = v || jt.units[t] || y,
            l === s.length && (s += v,
            a.e += v)),
            y !== v && (d = an(e, t, _, v) || 0),
            a._pt = {
                _next: a._pt,
                p: D || u === 1 ? D : ",",
                s: d,
                c: m - d,
                m: p && p < 4 || t === "zIndex" ? Math.round : 0
            });
        a.c = l < s.length ? s.substring(l, s.length) : ""
    } else
        a.r = t === "display" && s === "none" ? Gf : Xf;
    return cf.test(s) && (a.e = 0),
    this._pt = a,
    a
}, Il = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, Jm = function(e) {
    var t = e.split(" ")
      , r = t[0]
      , s = t[1] || "50%";
    return (r === "top" || r === "bottom" || s === "left" || s === "right") && (e = r,
    r = s,
    s = e),
    t[0] = Il[r] || r,
    t[1] = Il[s] || s,
    t.join(" ")
}, Qm = function(e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
        var r = t.t, s = r.style, o = t.u, i = r._gsap, a, l, u;
        if (o === "all" || o === !0)
            s.cssText = "",
            l = 1;
        else
            for (o = o.split(","),
            u = o.length; --u > -1; )
                a = o[u],
                Hr[a] && (l = 1,
                a = a === "transformOrigin" ? At : Se),
                Hn(r, a);
        l && (Hn(r, Se),
        i && (i.svg && r.removeAttribute("transform"),
        _o(r, 1),
        i.uncache = 1,
        Kf(s)))
    }
}, vi = {
    clearProps: function(e, t, r, s, o) {
        if (o.data !== "isFromStart") {
            var i = e._pt = new Rt(e._pt,t,r,0,0,Qm);
            return i.u = s,
            i.pr = -10,
            i.tween = o,
            e._props.push(r),
            1
        }
    }
}, po = [1, 0, 0, 1, 0, 0], td = {}, rd = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
}, Bl = function(e) {
    var t = Cr(e, Se);
    return rd(t) ? po : t.substr(7).match(lf).map(Le)
}, Ru = function(e, t) {
    var r = e._gsap || Pn(e), s = e.style, o = Bl(e), i, a, l, u;
    return r.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix,
    o = [l.a, l.b, l.c, l.d, l.e, l.f],
    o.join(",") === "1,0,0,1,0,0" ? po : o) : (o === po && !e.offsetParent && e !== is && !r.svg && (l = s.display,
    s.display = "block",
    i = e.parentNode,
    (!i || !e.offsetParent) && (u = 1,
    a = e.nextElementSibling,
    is.appendChild(e)),
    o = Bl(e),
    l ? s.display = l : Hn(e, "display"),
    u && (a ? i.insertBefore(e, a) : i ? i.appendChild(e) : is.removeChild(e))),
    t && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o)
}, Na = function(e, t, r, s, o, i) {
    var a = e._gsap, l = o || Ru(e, !0), u = a.xOrigin || 0, c = a.yOrigin || 0, f = a.xOffset || 0, h = a.yOffset || 0, d = l[0], p = l[1], _ = l[2], g = l[3], m = l[4], D = l[5], v = t.split(" "), y = parseFloat(v[0]) || 0, E = parseFloat(v[1]) || 0, b, C, k, T;
    r ? l !== po && (C = d * g - p * _) && (k = y * (g / C) + E * (-_ / C) + (_ * D - g * m) / C,
    T = y * (-p / C) + E * (d / C) - (d * D - p * m) / C,
    y = k,
    E = T) : (b = Zf(e),
    y = b.x + (~v[0].indexOf("%") ? y / 100 * b.width : y),
    E = b.y + (~(v[1] || v[0]).indexOf("%") ? E / 100 * b.height : E),
    !("xOrigin"in a) && (y || E) && (y -= b.x,
    E -= b.y)),
    s || s !== !1 && a.smooth ? (m = y - u,
    D = E - c,
    a.xOffset = f + (m * d + D * _) - m,
    a.yOffset = h + (m * p + D * g) - D) : a.xOffset = a.yOffset = 0,
    a.xOrigin = y,
    a.yOrigin = E,
    a.smooth = !!s,
    a.origin = t,
    a.originIsAbsolute = !!r,
    e.style[At] = "0px 0px",
    i && (Jr(i, a, "xOrigin", u, y),
    Jr(i, a, "yOrigin", c, E),
    Jr(i, a, "xOffset", f, a.xOffset),
    Jr(i, a, "yOffset", h, a.yOffset)),
    e.setAttribute("data-svg-origin", y + " " + E)
}, _o = function(e, t) {
    var r = e._gsap || new $f(e);
    if ("x"in r && !t && !r.uncache)
        return r;
    var s = e.style, o = r.scaleX < 0, i = "px", a = "deg", l = getComputedStyle(e), u = Cr(e, At) || "0", c, f, h, d, p, _, g, m, D, v, y, E, b, C, k, T, P, $, R, z, Y, j, H, V, J, de, w, Q, Pe, ye, le, ve;
    return c = f = h = _ = g = m = D = v = y = 0,
    d = p = 1,
    r.svg = !!(e.getCTM && ed(e)),
    l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (s[Se] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[Se] !== "none" ? l[Se] : "")),
    s.scale = s.rotate = s.translate = "none"),
    C = Ru(e, r.svg),
    r.svg && (r.uncache ? (J = e.getBBox(),
    u = r.xOrigin - J.x + "px " + (r.yOrigin - J.y) + "px",
    V = "") : V = !t && e.getAttribute("data-svg-origin"),
    Na(e, V || u, !!V || r.originIsAbsolute, r.smooth !== !1, C)),
    E = r.xOrigin || 0,
    b = r.yOrigin || 0,
    C !== po && ($ = C[0],
    R = C[1],
    z = C[2],
    Y = C[3],
    c = j = C[4],
    f = H = C[5],
    C.length === 6 ? (d = Math.sqrt($ * $ + R * R),
    p = Math.sqrt(Y * Y + z * z),
    _ = $ || R ? Yn(R, $) * Cn : 0,
    D = z || Y ? Yn(z, Y) * Cn + _ : 0,
    D && (p *= Math.abs(Math.cos(D * as))),
    r.svg && (c -= E - (E * $ + b * z),
    f -= b - (E * R + b * Y))) : (ve = C[6],
    ye = C[7],
    w = C[8],
    Q = C[9],
    Pe = C[10],
    le = C[11],
    c = C[12],
    f = C[13],
    h = C[14],
    k = Yn(ve, Pe),
    g = k * Cn,
    k && (T = Math.cos(-k),
    P = Math.sin(-k),
    V = j * T + w * P,
    J = H * T + Q * P,
    de = ve * T + Pe * P,
    w = j * -P + w * T,
    Q = H * -P + Q * T,
    Pe = ve * -P + Pe * T,
    le = ye * -P + le * T,
    j = V,
    H = J,
    ve = de),
    k = Yn(-z, Pe),
    m = k * Cn,
    k && (T = Math.cos(-k),
    P = Math.sin(-k),
    V = $ * T - w * P,
    J = R * T - Q * P,
    de = z * T - Pe * P,
    le = Y * P + le * T,
    $ = V,
    R = J,
    z = de),
    k = Yn(R, $),
    _ = k * Cn,
    k && (T = Math.cos(k),
    P = Math.sin(k),
    V = $ * T + R * P,
    J = j * T + H * P,
    R = R * T - $ * P,
    H = H * T - j * P,
    $ = V,
    j = J),
    g && Math.abs(g) + Math.abs(_) > 359.9 && (g = _ = 0,
    m = 180 - m),
    d = Le(Math.sqrt($ * $ + R * R + z * z)),
    p = Le(Math.sqrt(H * H + ve * ve)),
    k = Yn(j, H),
    D = Math.abs(k) > 2e-4 ? k * Cn : 0,
    y = le ? 1 / (le < 0 ? -le : le) : 0),
    r.svg && (V = e.getAttribute("transform"),
    r.forceCSS = e.setAttribute("transform", "") || !rd(Cr(e, Se)),
    V && e.setAttribute("transform", V))),
    Math.abs(D) > 90 && Math.abs(D) < 270 && (o ? (d *= -1,
    D += _ <= 0 ? 180 : -180,
    _ += _ <= 0 ? 180 : -180) : (p *= -1,
    D += D <= 0 ? 180 : -180)),
    t = t || r.uncache,
    r.x = c - ((r.xPercent = c && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + i,
    r.y = f - ((r.yPercent = f && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + i,
    r.z = h + i,
    r.scaleX = Le(d),
    r.scaleY = Le(p),
    r.rotation = Le(_) + a,
    r.rotationX = Le(g) + a,
    r.rotationY = Le(m) + a,
    r.skewX = D + a,
    r.skewY = v + a,
    r.transformPerspective = y + i,
    (r.zOrigin = parseFloat(u.split(" ")[2]) || !t && r.zOrigin || 0) && (s[At] = wi(u)),
    r.svg || (r.xOffset = r.yOffset = 0),
    r.force3D = jt.force3D,
    r.renderTransform = r.svg ? eD : Qf ? nd : Zm,
    r.uncache = 0,
    r
}, wi = function(e) {
    return (e = e.split(" "))[0] + " " + e[1]
}, Zi = function(e, t, r) {
    var s = it(t);
    return Le(parseFloat(t) + parseFloat(an(e, "x", r + "px", s))) + s
}, Zm = function(e, t) {
    t.z = "0px",
    t.rotationY = t.rotationX = "0deg",
    t.force3D = 0,
    nd(e, t)
}, yn = "0deg", As = "0px", vn = ") ", nd = function(e, t) {
    var r = t || this
      , s = r.xPercent
      , o = r.yPercent
      , i = r.x
      , a = r.y
      , l = r.z
      , u = r.rotation
      , c = r.rotationY
      , f = r.rotationX
      , h = r.skewX
      , d = r.skewY
      , p = r.scaleX
      , _ = r.scaleY
      , g = r.transformPerspective
      , m = r.force3D
      , D = r.target
      , v = r.zOrigin
      , y = ""
      , E = m === "auto" && e && e !== 1 || m === !0;
    if (v && (f !== yn || c !== yn)) {
        var b = parseFloat(c) * as, C = Math.sin(b), k = Math.cos(b), T;
        b = parseFloat(f) * as,
        T = Math.cos(b),
        i = Zi(D, i, C * T * -v),
        a = Zi(D, a, -Math.sin(b) * -v),
        l = Zi(D, l, k * T * -v + v)
    }
    g !== As && (y += "perspective(" + g + vn),
    (s || o) && (y += "translate(" + s + "%, " + o + "%) "),
    (E || i !== As || a !== As || l !== As) && (y += l !== As || E ? "translate3d(" + i + ", " + a + ", " + l + ") " : "translate(" + i + ", " + a + vn),
    u !== yn && (y += "rotate(" + u + vn),
    c !== yn && (y += "rotateY(" + c + vn),
    f !== yn && (y += "rotateX(" + f + vn),
    (h !== yn || d !== yn) && (y += "skew(" + h + ", " + d + vn),
    (p !== 1 || _ !== 1) && (y += "scale(" + p + ", " + _ + vn),
    D.style[Se] = y || "translate(0, 0)"
}, eD = function(e, t) {
    var r = t || this, s = r.xPercent, o = r.yPercent, i = r.x, a = r.y, l = r.rotation, u = r.skewX, c = r.skewY, f = r.scaleX, h = r.scaleY, d = r.target, p = r.xOrigin, _ = r.yOrigin, g = r.xOffset, m = r.yOffset, D = r.forceCSS, v = parseFloat(i), y = parseFloat(a), E, b, C, k, T;
    l = parseFloat(l),
    u = parseFloat(u),
    c = parseFloat(c),
    c && (c = parseFloat(c),
    u += c,
    l += c),
    l || u ? (l *= as,
    u *= as,
    E = Math.cos(l) * f,
    b = Math.sin(l) * f,
    C = Math.sin(l - u) * -h,
    k = Math.cos(l - u) * h,
    u && (c *= as,
    T = Math.tan(u - c),
    T = Math.sqrt(1 + T * T),
    C *= T,
    k *= T,
    c && (T = Math.tan(c),
    T = Math.sqrt(1 + T * T),
    E *= T,
    b *= T)),
    E = Le(E),
    b = Le(b),
    C = Le(C),
    k = Le(k)) : (E = f,
    k = h,
    b = C = 0),
    (v && !~(i + "").indexOf("px") || y && !~(a + "").indexOf("px")) && (v = an(d, "x", i, "px"),
    y = an(d, "y", a, "px")),
    (p || _ || g || m) && (v = Le(v + p - (p * E + _ * C) + g),
    y = Le(y + _ - (p * b + _ * k) + m)),
    (s || o) && (T = d.getBBox(),
    v = Le(v + s / 100 * T.width),
    y = Le(y + o / 100 * T.height)),
    T = "matrix(" + E + "," + b + "," + C + "," + k + "," + v + "," + y + ")",
    d.setAttribute("transform", T),
    D && (d.style[Se] = T)
}, tD = function(e, t, r, s, o) {
    var i = 360, a = Ze(o), l = parseFloat(o) * (a && ~o.indexOf("rad") ? Cn : 1), u = l - s, c = s + u + "deg", f, h;
    return a && (f = o.split("_")[1],
    f === "short" && (u %= i,
    u !== u % (i / 2) && (u += u < 0 ? i : -i)),
    f === "cw" && u < 0 ? u = (u + i * Fl) % i - ~~(u / i) * i : f === "ccw" && u > 0 && (u = (u - i * Fl) % i - ~~(u / i) * i)),
    e._pt = h = new Rt(e._pt,t,r,s,u,Hm),
    h.e = c,
    h.u = "deg",
    e._props.push(r),
    h
}, Hl = function(e, t) {
    for (var r in t)
        e[r] = t[r];
    return e
}, rD = function(e, t, r) {
    var s = Hl({}, r._gsap), o = "perspective,force3D,transformOrigin,svgOrigin", i = r.style, a, l, u, c, f, h, d, p;
    s.svg ? (u = r.getAttribute("transform"),
    r.setAttribute("transform", ""),
    i[Se] = t,
    a = _o(r, 1),
    Hn(r, Se),
    r.setAttribute("transform", u)) : (u = getComputedStyle(r)[Se],
    i[Se] = t,
    a = _o(r, 1),
    i[Se] = u);
    for (l in Hr)
        u = s[l],
        c = a[l],
        u !== c && o.indexOf(l) < 0 && (d = it(u),
        p = it(c),
        f = d !== p ? an(r, l, u, p) : parseFloat(u),
        h = parseFloat(c),
        e._pt = new Rt(e._pt,a,l,f,h - f,Ba),
        e._pt.u = p || 0,
        e._props.push(l));
    Hl(a, s)
};
Pt("padding,margin,Width,Radius", function(n, e) {
    var t = "Top"
      , r = "Right"
      , s = "Bottom"
      , o = "Left"
      , i = (e < 3 ? [t, r, s, o] : [t + o, t + r, s + r, s + o]).map(function(a) {
        return e < 2 ? n + a : "border" + a + n
    });
    vi[e > 1 ? "border" + n : n] = function(a, l, u, c, f) {
        var h, d;
        if (arguments.length < 4)
            return h = i.map(function(p) {
                return Fr(a, p, u)
            }),
            d = h.join(" "),
            d.split(h[0]).length === 5 ? h[0] : d;
        h = (c + "").split(" "),
        d = {},
        i.forEach(function(p, _) {
            return d[p] = h[_] = h[_] || h[(_ - 1) / 2 | 0]
        }),
        a.init(l, d, f)
    }
});
var sd = {
    name: "css",
    register: $a,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, t, r, s, o) {
        var i = this._props, a = e.style, l = r.vars.startAt, u, c, f, h, d, p, _, g, m, D, v, y, E, b, C, k;
        Su || $a(),
        this.styles = this.styles || Jf(e),
        k = this.styles.props,
        this.tween = r;
        for (_ in t)
            if (_ !== "autoRound" && (c = t[_],
            !(Ht[_] && Nf(_, t, r, s, e, o)))) {
                if (d = typeof c,
                p = vi[_],
                d === "function" && (c = c.call(r, s, e, o),
                d = typeof c),
                d === "string" && ~c.indexOf("random(") && (c = co(c)),
                p)
                    p(this, e, _, c, r) && (C = 1);
                else if (_.substr(0, 2) === "--")
                    u = (getComputedStyle(e).getPropertyValue(_) + "").trim(),
                    c += "",
                    tn.lastIndex = 0,
                    tn.test(u) || (g = it(u),
                    m = it(c)),
                    m ? g !== m && (u = an(e, _, u, m) + m) : g && (c += g),
                    this.add(a, "setProperty", u, c, s, o, 0, 0, _),
                    i.push(_),
                    k.push(_, 0, a[_]);
                else if (d !== "undefined") {
                    if (l && _ in l ? (u = typeof l[_] == "function" ? l[_].call(r, s, e, o) : l[_],
                    Ze(u) && ~u.indexOf("random(") && (u = co(u)),
                    it(u + "") || u === "auto" || (u += jt.units[_] || it(Fr(e, _)) || ""),
                    (u + "").charAt(1) === "=" && (u = Fr(e, _))) : u = Fr(e, _),
                    h = parseFloat(u),
                    D = d === "string" && c.charAt(1) === "=" && c.substr(0, 2),
                    D && (c = c.substr(2)),
                    f = parseFloat(c),
                    _ in yr && (_ === "autoAlpha" && (h === 1 && Fr(e, "visibility") === "hidden" && f && (h = 0),
                    k.push("visibility", 0, a.visibility),
                    Jr(this, a, "visibility", h ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)),
                    _ !== "scale" && _ !== "transform" && (_ = yr[_],
                    ~_.indexOf(",") && (_ = _.split(",")[0]))),
                    v = _ in Hr,
                    v) {
                        if (this.styles.save(_),
                        y || (E = e._gsap,
                        E.renderTransform && !t.parseTransform || _o(e, t.parseTransform),
                        b = t.smoothOrigin !== !1 && E.smooth,
                        y = this._pt = new Rt(this._pt,a,Se,0,1,E.renderTransform,E,0,-1),
                        y.dep = 1),
                        _ === "scale")
                            this._pt = new Rt(this._pt,E,"scaleY",E.scaleY,(D ? os(E.scaleY, D + f) : f) - E.scaleY || 0,Ba),
                            this._pt.u = 0,
                            i.push("scaleY", _),
                            _ += "X";
                        else if (_ === "transformOrigin") {
                            k.push(At, 0, a[At]),
                            c = Jm(c),
                            E.svg ? Na(e, c, 0, b, 0, this) : (m = parseFloat(c.split(" ")[2]) || 0,
                            m !== E.zOrigin && Jr(this, E, "zOrigin", E.zOrigin, m),
                            Jr(this, a, _, wi(u), wi(c)));
                            continue
                        } else if (_ === "svgOrigin") {
                            Na(e, c, 1, b, 0, this);
                            continue
                        } else if (_ in td) {
                            tD(this, E, _, h, D ? os(h, D + c) : c);
                            continue
                        } else if (_ === "smoothOrigin") {
                            Jr(this, E, "smooth", E.smooth, c);
                            continue
                        } else if (_ === "force3D") {
                            E[_] = c;
                            continue
                        } else if (_ === "transform") {
                            rD(this, c, e);
                            continue
                        }
                    } else
                        _ in a || (_ = ys(_) || _);
                    if (v || (f || f === 0) && (h || h === 0) && !Bm.test(c) && _ in a)
                        g = (u + "").substr((h + "").length),
                        f || (f = 0),
                        m = it(c) || (_ in jt.units ? jt.units[_] : g),
                        g !== m && (h = an(e, _, u, m)),
                        this._pt = new Rt(this._pt,v ? E : a,_,h,(D ? os(h, D + f) : f) - h,!v && (m === "px" || _ === "zIndex") && t.autoRound !== !1 ? Nm : Ba),
                        this._pt.u = m || 0,
                        g !== m && m !== "%" && (this._pt.b = u,
                        this._pt.r = $m);
                    else if (_ in a)
                        Km.call(this, e, _, u, D ? D + c : c);
                    else if (_ in e)
                        this.add(e, _, u || e[_], D ? D + c : c, s, o);
                    else if (_ !== "parseTransform") {
                        Du(_, c);
                        continue
                    }
                    v || (_ in a ? k.push(_, 0, a[_]) : k.push(_, 1, u || e[_])),
                    i.push(_)
                }
            }
        C && Wf(this)
    },
    render: function(e, t) {
        if (t.tween._time || !ku())
            for (var r = t._pt; r; )
                r.r(e, r.d),
                r = r._next;
        else
            t.styles.revert()
    },
    get: Fr,
    aliases: yr,
    getSetter: function(e, t, r) {
        var s = yr[t];
        return s && s.indexOf(",") < 0 && (t = s),
        t in Hr && t !== At && (e._gsap.x || Fr(e, "x")) ? r && Al === r ? t === "scale" ? Um : zm : (Al = r || {}) && (t === "scale" ? qm : Wm) : e.style && !_u(e.style[t]) ? Vm : ~t.indexOf("-") ? jm : xu(e, t)
    },
    core: {
        _removeProperty: Hn,
        _getMatrix: Ru
    }
};
Ft.utils.checkPrefix = ys;
Ft.core.getStyleSaver = Jf;
(function(n, e, t, r) {
    var s = Pt(n + "," + e + "," + t, function(o) {
        Hr[o] = 1
    });
    Pt(e, function(o) {
        jt.units[o] = "deg",
        td[o] = 1
    }),
    yr[s[13]] = n + "," + e,
    Pt(r, function(o) {
        var i = o.split(":");
        yr[i[1]] = s[i[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Pt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(n) {
    jt.units[n] = "px"
});
Ft.registerPlugin(sd);
var Va = Ft.registerPlugin(sd) || Ft;
Va.core.Tween;
function $l(n, e) {
    for (var t = 0; t < e.length; t++) {
        var r = e[t];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(n, r.key, r)
    }
}
function nD(n, e, t) {
    return e && $l(n.prototype, e),
    t && $l(n, t),
    n
}
/*!
 * Observer 3.12.3
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var tt, ti, Nt, Qr, Zr, us, od, bn, Xs, id, Mr, ar, ad, ud = function() {
    return tt || typeof window < "u" && (tt = window.gsap) && tt.registerPlugin && tt
}, ld = 1, rs = [], re = [], br = [], Gs = Date.now, ja = function(e, t) {
    return t
}, sD = function() {
    var e = Xs.core
      , t = e.bridge || {}
      , r = e._scrollers
      , s = e._proxies;
    r.push.apply(r, re),
    s.push.apply(s, br),
    re = r,
    br = s,
    ja = function(i, a) {
        return t[i](a)
    }
}, rn = function(e, t) {
    return ~br.indexOf(e) && br[br.indexOf(e) + 1][t]
}, Ks = function(e) {
    return !!~id.indexOf(e)
}, dt = function(e, t, r, s, o) {
    return e.addEventListener(t, r, {
        passive: !s,
        capture: !!o
    })
}, ft = function(e, t, r, s) {
    return e.removeEventListener(t, r, !!s)
}, Mo = "scrollLeft", Lo = "scrollTop", za = function() {
    return Mr && Mr.isPressed || re.cache++
}, Ei = function(e, t) {
    var r = function s(o) {
        if (o || o === 0) {
            ld && (Nt.history.scrollRestoration = "manual");
            var i = Mr && Mr.isPressed;
            o = s.v = Math.round(o) || (Mr && Mr.iOS ? 1 : 0),
            e(o),
            s.cacheID = re.cache,
            i && ja("ss", o)
        } else
            (t || re.cache !== s.cacheID || ja("ref")) && (s.cacheID = re.cache,
            s.v = e());
        return s.v + s.offset
    };
    return r.offset = 0,
    e && r
}, Dt = {
    s: Mo,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Ei(function(n) {
        return arguments.length ? Nt.scrollTo(n, Ue.sc()) : Nt.pageXOffset || Qr[Mo] || Zr[Mo] || us[Mo] || 0
    })
}, Ue = {
    s: Lo,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Dt,
    sc: Ei(function(n) {
        return arguments.length ? Nt.scrollTo(Dt.sc(), n) : Nt.pageYOffset || Qr[Lo] || Zr[Lo] || us[Lo] || 0
    })
}, bt = function(e, t) {
    return (t && t._ctx && t._ctx.selector || tt.utils.toArray)(e)[0] || (typeof e == "string" && tt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
}, un = function(e, t) {
    var r = t.s
      , s = t.sc;
    Ks(e) && (e = Qr.scrollingElement || Zr);
    var o = re.indexOf(e)
      , i = s === Ue.sc ? 1 : 2;
    !~o && (o = re.push(e) - 1),
    re[o + i] || dt(e, "scroll", za);
    var a = re[o + i]
      , l = a || (re[o + i] = Ei(rn(e, r), !0) || (Ks(e) ? s : Ei(function(u) {
        return arguments.length ? e[r] = u : e[r]
    })));
    return l.target = e,
    a || (l.smooth = tt.getProperty(e, "scrollBehavior") === "smooth"),
    l
}, Ua = function(e, t, r) {
    var s = e
      , o = e
      , i = Gs()
      , a = i
      , l = t || 50
      , u = Math.max(500, l * 3)
      , c = function(p, _) {
        var g = Gs();
        _ || g - i > l ? (o = s,
        s = p,
        a = i,
        i = g) : r ? s += p : s = o + (p - o) / (g - a) * (i - a)
    }
      , f = function() {
        o = s = r ? 0 : s,
        a = i = 0
    }
      , h = function(p) {
        var _ = a
          , g = o
          , m = Gs();
        return (p || p === 0) && p !== s && c(p),
        i === a || m - a > u ? 0 : (s + (r ? g : -g)) / ((r ? m : i) - _) * 1e3
    };
    return {
        update: c,
        reset: f,
        getVelocity: h
    }
}, Fs = function(e, t) {
    return t && !e._gsapAllow && e.preventDefault(),
    e.changedTouches ? e.changedTouches[0] : e
}, Nl = function(e) {
    var t = Math.max.apply(Math, e)
      , r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r
}, cd = function() {
    Xs = tt.core.globals().ScrollTrigger,
    Xs && Xs.core && sD()
}, fd = function(e) {
    return tt = e || ud(),
    !ti && tt && typeof document < "u" && document.body && (Nt = window,
    Qr = document,
    Zr = Qr.documentElement,
    us = Qr.body,
    id = [Nt, Qr, Zr, us],
    tt.utils.clamp,
    ad = tt.core.context || function() {}
    ,
    bn = "onpointerenter"in us ? "pointer" : "mouse",
    od = Fe.isTouch = Nt.matchMedia && Nt.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in Nt || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
    ar = Fe.eventTypes = ("ontouchstart"in Zr ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in Zr ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
    setTimeout(function() {
        return ld = 0
    }, 500),
    cd(),
    ti = 1),
    ti
};
Dt.op = Ue;
re.cache = 0;
var Fe = function() {
    function n(t) {
        this.init(t)
    }
    var e = n.prototype;
    return e.init = function(r) {
        ti || fd(tt) || console.warn("Please gsap.registerPlugin(Observer)"),
        Xs || cd();
        var s = r.tolerance
          , o = r.dragMinimum
          , i = r.type
          , a = r.target
          , l = r.lineHeight
          , u = r.debounce
          , c = r.preventDefault
          , f = r.onStop
          , h = r.onStopDelay
          , d = r.ignore
          , p = r.wheelSpeed
          , _ = r.event
          , g = r.onDragStart
          , m = r.onDragEnd
          , D = r.onDrag
          , v = r.onPress
          , y = r.onRelease
          , E = r.onRight
          , b = r.onLeft
          , C = r.onUp
          , k = r.onDown
          , T = r.onChangeX
          , P = r.onChangeY
          , $ = r.onChange
          , R = r.onToggleX
          , z = r.onToggleY
          , Y = r.onHover
          , j = r.onHoverEnd
          , H = r.onMove
          , V = r.ignoreCheck
          , J = r.isNormalizer
          , de = r.onGestureStart
          , w = r.onGestureEnd
          , Q = r.onWheel
          , Pe = r.onEnable
          , ye = r.onDisable
          , le = r.onClick
          , ve = r.scrollSpeed
          , Ee = r.capture
          , S = r.allowClicks
          , F = r.lockAxis
          , A = r.onLockAxis;
        this.target = a = bt(a) || Zr,
        this.vars = r,
        d && (d = tt.utils.toArray(d)),
        s = s || 1e-9,
        o = o || 0,
        p = p || 1,
        ve = ve || 1,
        i = i || "wheel,touch,pointer",
        u = u !== !1,
        l || (l = parseFloat(Nt.getComputedStyle(us).lineHeight) || 22);
        var O, G, ce, L, N, ie, Ve, x = this, Mt = 0, Sr = 0, cn = un(a, Dt), Be = un(a, Ue), fn = cn(), dn = Be(), Ts = ~i.indexOf("touch") && !~i.indexOf("pointer") && ar[0] === "pointerdown", je = Ks(a), Oe = a.ownerDocument || Qr, tr = [0, 0, 0], rr = [0, 0, 0], hn = 0, kr = function() {
            return hn = Gs()
        }, dr = function(U, fe) {
            return (x.event = U) && d && ~d.indexOf(U.target) || fe && Ts && U.pointerType !== "touch" || V && V(U, fe)
        }, wt = function() {
            x._vx.reset(),
            x._vy.reset(),
            G.pause(),
            f && f(x)
        }, pn = function() {
            var U = x.deltaX = Nl(tr)
              , fe = x.deltaY = Nl(rr)
              , He = Math.abs(U) >= s
              , I = Math.abs(fe) >= s;
            $ && (He || I) && $(x, U, fe, tr, rr),
            He && (E && x.deltaX > 0 && E(x),
            b && x.deltaX < 0 && b(x),
            T && T(x),
            R && x.deltaX < 0 != Mt < 0 && R(x),
            Mt = x.deltaX,
            tr[0] = tr[1] = tr[2] = 0),
            I && (k && x.deltaY > 0 && k(x),
            C && x.deltaY < 0 && C(x),
            P && P(x),
            z && x.deltaY < 0 != Sr < 0 && z(x),
            Sr = x.deltaY,
            rr[0] = rr[1] = rr[2] = 0),
            (L || ce) && (H && H(x),
            ce && (D(x),
            ce = !1),
            L = !1),
            ie && !(ie = !1) && A && A(x),
            N && (Q(x),
            N = !1),
            O = 0
        }, zn = function(U, fe, He) {
            tr[He] += U,
            rr[He] += fe,
            x._vx.update(U),
            x._vy.update(fe),
            u ? O || (O = requestAnimationFrame(pn)) : pn()
        }, Un = function(U, fe) {
            F && !Ve && (x.axis = Ve = Math.abs(U) > Math.abs(fe) ? "x" : "y",
            ie = !0),
            Ve !== "y" && (tr[2] += U,
            x._vx.update(U, !0)),
            Ve !== "x" && (rr[2] += fe,
            x._vy.update(fe, !0)),
            u ? O || (O = requestAnimationFrame(pn)) : pn()
        }, _n = function(U) {
            if (!dr(U, 1)) {
                U = Fs(U, c);
                var fe = U.clientX
                  , He = U.clientY
                  , I = fe - x.x
                  , ee = He - x.y
                  , q = x.isDragging;
                x.x = fe,
                x.y = He,
                (q || Math.abs(x.startX - fe) >= o || Math.abs(x.startY - He) >= o) && (D && (ce = !0),
                q || (x.isDragging = !0),
                Un(I, ee),
                q || g && g(x))
            }
        }, jr = x.onPress = function(K) {
            dr(K, 1) || K && K.button || (x.axis = Ve = null,
            G.pause(),
            x.isPressed = !0,
            K = Fs(K),
            Mt = Sr = 0,
            x.startX = x.x = K.clientX,
            x.startY = x.y = K.clientY,
            x._vx.reset(),
            x._vy.reset(),
            dt(J ? a : Oe, ar[1], _n, c, !0),
            x.deltaX = x.deltaY = 0,
            v && v(x))
        }
        , zr = x.onRelease = function(K) {
            if (!dr(K, 1)) {
                ft(J ? a : Oe, ar[1], _n, !0);
                var U = !isNaN(x.y - x.startY)
                  , fe = x.isDragging
                  , He = fe && (Math.abs(x.x - x.startX) > 3 || Math.abs(x.y - x.startY) > 3)
                  , I = Fs(K);
                !He && U && (x._vx.reset(),
                x._vy.reset(),
                c && S && tt.delayedCall(.08, function() {
                    if (Gs() - hn > 300 && !K.defaultPrevented) {
                        if (K.target.click)
                            K.target.click();
                        else if (Oe.createEvent) {
                            var ee = Oe.createEvent("MouseEvents");
                            ee.initMouseEvent("click", !0, !0, Nt, 1, I.screenX, I.screenY, I.clientX, I.clientY, !1, !1, !1, !1, 0, null),
                            K.target.dispatchEvent(ee)
                        }
                    }
                })),
                x.isDragging = x.isGesturing = x.isPressed = !1,
                f && fe && !J && G.restart(!0),
                m && fe && m(x),
                y && y(x, He)
            }
        }
        , ae = function(U) {
            return U.touches && U.touches.length > 1 && (x.isGesturing = !0) && de(U, x.isDragging)
        }, gn = function() {
            return (x.isGesturing = !1) || w(x)
        }, nr = function(U) {
            if (!dr(U)) {
                var fe = cn()
                  , He = Be();
                zn((fe - fn) * ve, (He - dn) * ve, 1),
                fn = fe,
                dn = He,
                f && G.restart(!0)
            }
        }, sr = function(U) {
            if (!dr(U)) {
                U = Fs(U, c),
                Q && (N = !0);
                var fe = (U.deltaMode === 1 ? l : U.deltaMode === 2 ? Nt.innerHeight : 1) * p;
                zn(U.deltaX * fe, U.deltaY * fe, 0),
                f && !J && G.restart(!0)
            }
        }, or = function(U) {
            if (!dr(U)) {
                var fe = U.clientX
                  , He = U.clientY
                  , I = fe - x.x
                  , ee = He - x.y;
                x.x = fe,
                x.y = He,
                L = !0,
                f && G.restart(!0),
                (I || ee) && Un(I, ee)
            }
        }, mn = function(U) {
            x.event = U,
            Y(x)
        }, qn = function(U) {
            x.event = U,
            j(x)
        }, Pr = function(U) {
            return dr(U) || Fs(U, c) && le(x)
        };
        G = x._dc = tt.delayedCall(h || .25, wt).pause(),
        x.deltaX = x.deltaY = 0,
        x._vx = Ua(0, 50, !0),
        x._vy = Ua(0, 50, !0),
        x.scrollX = cn,
        x.scrollY = Be,
        x.isDragging = x.isGesturing = x.isPressed = !1,
        ad(this),
        x.enable = function(K) {
            return x.isEnabled || (dt(je ? Oe : a, "scroll", za),
            i.indexOf("scroll") >= 0 && dt(je ? Oe : a, "scroll", nr, c, Ee),
            i.indexOf("wheel") >= 0 && dt(a, "wheel", sr, c, Ee),
            (i.indexOf("touch") >= 0 && od || i.indexOf("pointer") >= 0) && (dt(a, ar[0], jr, c, Ee),
            dt(Oe, ar[2], zr),
            dt(Oe, ar[3], zr),
            S && dt(a, "click", kr, !1, !0),
            le && dt(a, "click", Pr),
            de && dt(Oe, "gesturestart", ae),
            w && dt(Oe, "gestureend", gn),
            Y && dt(a, bn + "enter", mn),
            j && dt(a, bn + "leave", qn),
            H && dt(a, bn + "move", or)),
            x.isEnabled = !0,
            K && K.type && jr(K),
            Pe && Pe(x)),
            x
        }
        ,
        x.disable = function() {
            x.isEnabled && (rs.filter(function(K) {
                return K !== x && Ks(K.target)
            }).length || ft(je ? Oe : a, "scroll", za),
            x.isPressed && (x._vx.reset(),
            x._vy.reset(),
            ft(J ? a : Oe, ar[1], _n, !0)),
            ft(je ? Oe : a, "scroll", nr, Ee),
            ft(a, "wheel", sr, Ee),
            ft(a, ar[0], jr, Ee),
            ft(Oe, ar[2], zr),
            ft(Oe, ar[3], zr),
            ft(a, "click", kr, !0),
            ft(a, "click", Pr),
            ft(Oe, "gesturestart", ae),
            ft(Oe, "gestureend", gn),
            ft(a, bn + "enter", mn),
            ft(a, bn + "leave", qn),
            ft(a, bn + "move", or),
            x.isEnabled = x.isPressed = x.isDragging = !1,
            ye && ye(x))
        }
        ,
        x.kill = x.revert = function() {
            x.disable();
            var K = rs.indexOf(x);
            K >= 0 && rs.splice(K, 1),
            Mr === x && (Mr = 0)
        }
        ,
        rs.push(x),
        J && Ks(a) && (Mr = x),
        x.enable(_)
    }
    ,
    nD(n, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]),
    n
}();
Fe.version = "3.12.3";
Fe.create = function(n) {
    return new Fe(n)
}
;
Fe.register = fd;
Fe.getAll = function() {
    return rs.slice()
}
;
Fe.getById = function(n) {
    return rs.filter(function(e) {
        return e.vars.id === n
    })[0]
}
;
ud() && tt.registerPlugin(Fe);
/*!
 * ScrollTrigger 3.12.3
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var B, Jn, se, xe, ur, we, dd, Ci, go, ns, ri, Io, st, Bi, qa, pt, Vl, jl, Qn, hd, ea, pd, ht, _d, gd, md, Yr, Wa, Au, ls, Fu, Ou, Ya, ta, Bo = 1, gt = Date.now, ra = gt(), Qt = 0, Bs = 0, zl = function(e, t, r) {
    var s = Bt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return r["_" + t + "Clamp"] = s,
    s ? e.substr(6, e.length - 7) : e
}, Ul = function(e, t) {
    return t && (!Bt(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
}, oD = function n() {
    return Bs && requestAnimationFrame(n)
}, ql = function() {
    return Bi = 1
}, Wl = function() {
    return Bi = 0
}, mr = function(e) {
    return e
}, Hs = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, Dd = function() {
    return typeof window < "u"
}, yd = function() {
    return B || Dd() && (B = window.gsap) && B.registerPlugin && B
}, $n = function(e) {
    return !!~dd.indexOf(e)
}, vd = function(e) {
    return (e === "Height" ? Fu : se["inner" + e]) || ur["client" + e] || we["client" + e]
}, wd = function(e) {
    return rn(e, "getBoundingClientRect") || ($n(e) ? function() {
        return ui.width = se.innerWidth,
        ui.height = Fu,
        ui
    }
    : function() {
        return Or(e)
    }
    )
}, iD = function(e, t, r) {
    var s = r.d
      , o = r.d2
      , i = r.a;
    return (i = rn(e, "getBoundingClientRect")) ? function() {
        return i()[s]
    }
    : function() {
        return (t ? vd(o) : e["client" + o]) || 0
    }
}, aD = function(e, t) {
    return !t || ~br.indexOf(e) ? wd(e) : function() {
        return ui
    }
}, vr = function(e, t) {
    var r = t.s
      , s = t.d2
      , o = t.d
      , i = t.a;
    return Math.max(0, (r = "scroll" + s) && (i = rn(e, r)) ? i() - wd(e)()[o] : $n(e) ? (ur[r] || we[r]) - vd(s) : e[r] - e["offset" + s])
}, Ho = function(e, t) {
    for (var r = 0; r < Qn.length; r += 3)
        (!t || ~t.indexOf(Qn[r + 1])) && e(Qn[r], Qn[r + 1], Qn[r + 2])
}, Bt = function(e) {
    return typeof e == "string"
}, yt = function(e) {
    return typeof e == "function"
}, ni = function(e) {
    return typeof e == "number"
}, xn = function(e) {
    return typeof e == "object"
}, Os = function(e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause()
}, na = function(e, t) {
    if (e.enabled) {
        var r = e._ctx ? e._ctx.add(function() {
            return t(e)
        }) : t(e);
        r && r.totalTime && (e.callbackAnimation = r)
    }
}, Xn = Math.abs, Ed = "left", Cd = "top", Mu = "right", Lu = "bottom", On = "width", Mn = "height", Js = "Right", Qs = "Left", Zs = "Top", eo = "Bottom", $e = "padding", Wt = "margin", vs = "Width", Iu = "Height", Xe = "px", Yt = function(e) {
    return se.getComputedStyle(e)
}, uD = function(e) {
    var t = Yt(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative"
}, Yl = function(e, t) {
    for (var r in t)
        r in e || (e[r] = t[r]);
    return e
}, Or = function(e, t) {
    var r = t && Yt(e)[qa] !== "matrix(1, 0, 0, 1, 0, 0)" && B.to(e, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
      , s = e.getBoundingClientRect();
    return r && r.progress(0).kill(),
    s
}, Xa = function(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0
}, bd = function(e) {
    var t = [], r = e.labels, s = e.duration(), o;
    for (o in r)
        t.push(r[o] / s);
    return t
}, lD = function(e) {
    return function(t) {
        return B.utils.snap(bd(e), t)
    }
}, Bu = function(e) {
    var t = B.utils.snap(e)
      , r = Array.isArray(e) && e.slice(0).sort(function(s, o) {
        return s - o
    });
    return r ? function(s, o, i) {
        i === void 0 && (i = .001);
        var a;
        if (!o)
            return t(s);
        if (o > 0) {
            for (s -= i,
            a = 0; a < r.length; a++)
                if (r[a] >= s)
                    return r[a];
            return r[a - 1]
        } else
            for (a = r.length,
            s += i; a--; )
                if (r[a] <= s)
                    return r[a];
        return r[0]
    }
    : function(s, o, i) {
        i === void 0 && (i = .001);
        var a = t(s);
        return !o || Math.abs(a - s) < i || a - s < 0 == o < 0 ? a : t(o < 0 ? s - e : s + e)
    }
}, cD = function(e) {
    return function(t, r) {
        return Bu(bd(e))(t, r.direction)
    }
}, $o = function(e, t, r, s) {
    return r.split(",").forEach(function(o) {
        return e(t, o, s)
    })
}, Ke = function(e, t, r, s, o) {
    return e.addEventListener(t, r, {
        passive: !s,
        capture: !!o
    })
}, Ge = function(e, t, r, s) {
    return e.removeEventListener(t, r, !!s)
}, No = function(e, t, r) {
    r = r && r.wheelHandler,
    r && (e(t, "wheel", r),
    e(t, "touchmove", r))
}, Xl = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, Vo = {
    toggleActions: "play",
    anticipatePin: 0
}, bi = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, si = function(e, t) {
    if (Bt(e)) {
        var r = e.indexOf("=")
          , s = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
        ~r && (e.indexOf("%") > r && (s *= t / 100),
        e = e.substr(0, r - 1)),
        e = s + (e in bi ? bi[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
    }
    return e
}, jo = function(e, t, r, s, o, i, a, l) {
    var u = o.startColor
      , c = o.endColor
      , f = o.fontSize
      , h = o.indent
      , d = o.fontWeight
      , p = xe.createElement("div")
      , _ = $n(r) || rn(r, "pinType") === "fixed"
      , g = e.indexOf("scroller") !== -1
      , m = _ ? we : r
      , D = e.indexOf("start") !== -1
      , v = D ? u : c
      , y = "border-color:" + v + ";font-size:" + f + ";color:" + v + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return y += "position:" + ((g || l) && _ ? "fixed;" : "absolute;"),
    (g || l || !_) && (y += (s === Ue ? Mu : Lu) + ":" + (i + parseFloat(h)) + "px;"),
    a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
    p._isStart = D,
    p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
    p.style.cssText = y,
    p.innerText = t || t === 0 ? e + "-" + t : e,
    m.children[0] ? m.insertBefore(p, m.children[0]) : m.appendChild(p),
    p._offset = p["offset" + s.op.d2],
    oi(p, 0, s, D),
    p
}, oi = function(e, t, r, s) {
    var o = {
        display: "block"
    }
      , i = r[s ? "os2" : "p2"]
      , a = r[s ? "p2" : "os2"];
    e._isFlipped = s,
    o[r.a + "Percent"] = s ? -100 : 0,
    o[r.a] = s ? "1px" : 0,
    o["border" + i + vs] = 1,
    o["border" + a + vs] = 0,
    o[r.p] = t + "px",
    B.set(e, o)
}, Z = [], Ga = {}, mo, Gl = function() {
    return gt() - Qt > 34 && (mo || (mo = requestAnimationFrame(Lr)))
}, Gn = function() {
    (!ht || !ht.isPressed || ht.startX > we.clientWidth) && (re.cache++,
    ht ? mo || (mo = requestAnimationFrame(Lr)) : Lr(),
    Qt || Vn("scrollStart"),
    Qt = gt())
}, sa = function() {
    md = se.innerWidth,
    gd = se.innerHeight
}, $s = function() {
    re.cache++,
    !st && !pd && !xe.fullscreenElement && !xe.webkitFullscreenElement && (!_d || md !== se.innerWidth || Math.abs(se.innerHeight - gd) > se.innerHeight * .25) && Ci.restart(!0)
}, Nn = {}, fD = [], xd = function n() {
    return Ge(ne, "scrollEnd", n) || kn(!0)
}, Vn = function(e) {
    return Nn[e] && Nn[e].map(function(t) {
        return t()
    }) || fD
}, It = [], Td = function(e) {
    for (var t = 0; t < It.length; t += 5)
        (!e || It[t + 4] && It[t + 4].query === e) && (It[t].style.cssText = It[t + 1],
        It[t].getBBox && It[t].setAttribute("transform", It[t + 2] || ""),
        It[t + 3].uncache = 1)
}, Hu = function(e, t) {
    var r;
    for (pt = 0; pt < Z.length; pt++)
        r = Z[pt],
        r && (!t || r._ctx === t) && (e ? r.kill(1) : r.revert(!0, !0));
    Ou = !0,
    t && Td(t),
    t || Vn("revert")
}, Sd = function(e, t) {
    re.cache++,
    (t || !_t) && re.forEach(function(r) {
        return yt(r) && r.cacheID++ && (r.rec = 0)
    }),
    Bt(e) && (se.history.scrollRestoration = Au = e)
}, _t, Ln = 0, Kl, dD = function() {
    if (Kl !== Ln) {
        var e = Kl = Ln;
        requestAnimationFrame(function() {
            return e === Ln && kn(!0)
        })
    }
}, kd = function() {
    we.appendChild(ls),
    Fu = !ht && ls.offsetHeight || se.innerHeight,
    we.removeChild(ls)
}, Jl = function(e) {
    return go(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
        return t.style.display = e ? "none" : "block"
    })
}, kn = function(e, t) {
    if (Qt && !e) {
        Ke(ne, "scrollEnd", xd);
        return
    }
    kd(),
    _t = ne.isRefreshing = !0,
    re.forEach(function(s) {
        return yt(s) && ++s.cacheID && (s.rec = s())
    });
    var r = Vn("refreshInit");
    hd && ne.sort(),
    t || Hu(),
    re.forEach(function(s) {
        yt(s) && (s.smooth && (s.target.style.scrollBehavior = "auto"),
        s(0))
    }),
    Z.slice(0).forEach(function(s) {
        return s.refresh()
    }),
    Ou = !1,
    Z.forEach(function(s) {
        if (s._subPinOffset && s.pin) {
            var o = s.vars.horizontal ? "offsetWidth" : "offsetHeight"
              , i = s.pin[o];
            s.revert(!0, 1),
            s.adjustPinSpacing(s.pin[o] - i),
            s.refresh()
        }
    }),
    Ya = 1,
    Jl(!0),
    Z.forEach(function(s) {
        var o = vr(s.scroller, s._dir)
          , i = s.vars.end === "max" || s._endClamp && s.end > o
          , a = s._startClamp && s.start >= o;
        (i || a) && s.setPositions(a ? o - 1 : s.start, i ? Math.max(a ? o : s.start + 1, o) : s.end, !0)
    }),
    Jl(!1),
    Ya = 0,
    r.forEach(function(s) {
        return s && s.render && s.render(-1)
    }),
    re.forEach(function(s) {
        yt(s) && (s.smooth && requestAnimationFrame(function() {
            return s.target.style.scrollBehavior = "smooth"
        }),
        s.rec && s(s.rec))
    }),
    Sd(Au, 1),
    Ci.pause(),
    Ln++,
    _t = 2,
    Lr(2),
    Z.forEach(function(s) {
        return yt(s.vars.onRefresh) && s.vars.onRefresh(s)
    }),
    _t = ne.isRefreshing = !1,
    Vn("refresh")
}, Ka = 0, ii = 1, to, Lr = function(e) {
    if (e === 2 || !_t && !Ou) {
        ne.isUpdating = !0,
        to && to.update(0);
        var t = Z.length
          , r = gt()
          , s = r - ra >= 50
          , o = t && Z[0].scroll();
        if (ii = Ka > o ? -1 : 1,
        _t || (Ka = o),
        s && (Qt && !Bi && r - Qt > 200 && (Qt = 0,
        Vn("scrollEnd")),
        ri = ra,
        ra = r),
        ii < 0) {
            for (pt = t; pt-- > 0; )
                Z[pt] && Z[pt].update(0, s);
            ii = 1
        } else
            for (pt = 0; pt < t; pt++)
                Z[pt] && Z[pt].update(0, s);
        ne.isUpdating = !1
    }
    mo = 0
}, Ja = [Ed, Cd, Lu, Mu, Wt + eo, Wt + Js, Wt + Zs, Wt + Qs, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], ai = Ja.concat([On, Mn, "boxSizing", "max" + vs, "max" + Iu, "position", Wt, $e, $e + Zs, $e + Js, $e + eo, $e + Qs]), hD = function(e, t, r) {
    cs(r);
    var s = e._gsap;
    if (s.spacerIsNative)
        cs(s.spacerState);
    else if (e._gsap.swappedIn) {
        var o = t.parentNode;
        o && (o.insertBefore(e, t),
        o.removeChild(t))
    }
    e._gsap.swappedIn = !1
}, oa = function(e, t, r, s) {
    if (!e._gsap.swappedIn) {
        for (var o = Ja.length, i = t.style, a = e.style, l; o--; )
            l = Ja[o],
            i[l] = r[l];
        i.position = r.position === "absolute" ? "absolute" : "relative",
        r.display === "inline" && (i.display = "inline-block"),
        a[Lu] = a[Mu] = "auto",
        i.flexBasis = r.flexBasis || "auto",
        i.overflow = "visible",
        i.boxSizing = "border-box",
        i[On] = Xa(e, Dt) + Xe,
        i[Mn] = Xa(e, Ue) + Xe,
        i[$e] = a[Wt] = a[Cd] = a[Ed] = "0",
        cs(s),
        a[On] = a["max" + vs] = r[On],
        a[Mn] = a["max" + Iu] = r[Mn],
        a[$e] = r[$e],
        e.parentNode !== t && (e.parentNode.insertBefore(t, e),
        t.appendChild(e)),
        e._gsap.swappedIn = !0
    }
}, pD = /([A-Z])/g, cs = function(e) {
    if (e) {
        var t = e.t.style, r = e.length, s = 0, o, i;
        for ((e.t._gsap || B.core.getCache(e.t)).uncache = 1; s < r; s += 2)
            i = e[s + 1],
            o = e[s],
            i ? t[o] = i : t[o] && t.removeProperty(o.replace(pD, "-$1").toLowerCase())
    }
}, zo = function(e) {
    for (var t = ai.length, r = e.style, s = [], o = 0; o < t; o++)
        s.push(ai[o], r[ai[o]]);
    return s.t = e,
    s
}, _D = function(e, t, r) {
    for (var s = [], o = e.length, i = r ? 8 : 0, a; i < o; i += 2)
        a = e[i],
        s.push(a, a in t ? t[a] : e[i + 1]);
    return s.t = e.t,
    s
}, ui = {
    left: 0,
    top: 0
}, Ql = function(e, t, r, s, o, i, a, l, u, c, f, h, d, p) {
    yt(e) && (e = e(l)),
    Bt(e) && e.substr(0, 3) === "max" && (e = h + (e.charAt(4) === "=" ? si("0" + e.substr(3), r) : 0));
    var _ = d ? d.time() : 0, g, m, D;
    if (d && d.seek(0),
    isNaN(e) || (e = +e),
    ni(e))
        d && (e = B.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, h, e)),
        a && oi(a, r, s, !0);
    else {
        yt(t) && (t = t(l));
        var v = (e || "0").split(" "), y, E, b, C;
        D = bt(t, l) || we,
        y = Or(D) || {},
        (!y || !y.left && !y.top) && Yt(D).display === "none" && (C = D.style.display,
        D.style.display = "block",
        y = Or(D),
        C ? D.style.display = C : D.style.removeProperty("display")),
        E = si(v[0], y[s.d]),
        b = si(v[1] || "0", r),
        e = y[s.p] - u[s.p] - c + E + o - b,
        a && oi(a, b, s, r - b < 20 || a._isStart && b > 20),
        r -= r - b
    }
    if (p && (l[p] = e || -.001,
    e < 0 && (e = 0)),
    i) {
        var k = e + r
          , T = i._isStart;
        g = "scroll" + s.d2,
        oi(i, k, s, T && k > 20 || !T && (f ? Math.max(we[g], ur[g]) : i.parentNode[g]) <= k + 1),
        f && (u = Or(a),
        f && (i.style[s.op.p] = u[s.op.p] - s.op.m - i._offset + Xe))
    }
    return d && D && (g = Or(D),
    d.seek(h),
    m = Or(D),
    d._caScrollDist = g[s.p] - m[s.p],
    e = e / d._caScrollDist * h),
    d && d.seek(_),
    d ? e : Math.round(e)
}, gD = /(webkit|moz|length|cssText|inset)/i, Zl = function(e, t, r, s) {
    if (e.parentNode !== t) {
        var o = e.style, i, a;
        if (t === we) {
            e._stOrig = o.cssText,
            a = Yt(e);
            for (i in a)
                !+i && !gD.test(i) && a[i] && typeof o[i] == "string" && i !== "0" && (o[i] = a[i]);
            o.top = r,
            o.left = s
        } else
            o.cssText = e._stOrig;
        B.core.getCache(e).uncache = 1,
        t.appendChild(e)
    }
}, Pd = function(e, t, r) {
    var s = t
      , o = s;
    return function(i) {
        var a = Math.round(e());
        return a !== s && a !== o && Math.abs(a - s) > 3 && Math.abs(a - o) > 3 && (i = a,
        r && r()),
        o = s,
        s = i,
        i
    }
}, Uo = function(e, t, r) {
    var s = {};
    s[t.p] = "+=" + r,
    B.set(e, s)
}, ec = function(e, t) {
    var r = un(e, t)
      , s = "_scroll" + t.p2
      , o = function i(a, l, u, c, f) {
        var h = i.tween
          , d = l.onComplete
          , p = {};
        u = u || r();
        var _ = Pd(r, u, function() {
            h.kill(),
            i.tween = 0
        });
        return f = c && f || 0,
        c = c || a - u,
        h && h.kill(),
        l[s] = a,
        l.modifiers = p,
        p[s] = function() {
            return _(u + c * h.ratio + f * h.ratio * h.ratio)
        }
        ,
        l.onUpdate = function() {
            re.cache++,
            i.tween && Lr()
        }
        ,
        l.onComplete = function() {
            i.tween = 0,
            d && d.call(h)
        }
        ,
        h = i.tween = B.to(e, l),
        h
    };
    return e[s] = r,
    r.wheelHandler = function() {
        return o.tween && o.tween.kill() && (o.tween = 0)
    }
    ,
    Ke(e, "wheel", r.wheelHandler),
    ne.isTouch && Ke(e, "touchmove", r.wheelHandler),
    o
}, ne = function() {
    function n(t, r) {
        Jn || n.register(B) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        Wa(this),
        this.init(t, r)
    }
    var e = n.prototype;
    return e.init = function(r, s) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        !Bs) {
            this.update = this.refresh = this.kill = mr;
            return
        }
        r = Yl(Bt(r) || ni(r) || r.nodeType ? {
            trigger: r
        } : r, Vo);
        var o = r, i = o.onUpdate, a = o.toggleClass, l = o.id, u = o.onToggle, c = o.onRefresh, f = o.scrub, h = o.trigger, d = o.pin, p = o.pinSpacing, _ = o.invalidateOnRefresh, g = o.anticipatePin, m = o.onScrubComplete, D = o.onSnapComplete, v = o.once, y = o.snap, E = o.pinReparent, b = o.pinSpacer, C = o.containerAnimation, k = o.fastScrollEnd, T = o.preventOverlaps, P = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? Dt : Ue, $ = !f && f !== 0, R = bt(r.scroller || se), z = B.core.getCache(R), Y = $n(R), j = ("pinType"in r ? r.pinType : rn(R, "pinType") || Y && "fixed") === "fixed", H = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack], V = $ && r.toggleActions.split(" "), J = "markers"in r ? r.markers : Vo.markers, de = Y ? 0 : parseFloat(Yt(R)["border" + P.p2 + vs]) || 0, w = this, Q = r.onRefreshInit && function() {
            return r.onRefreshInit(w)
        }
        , Pe = iD(R, Y, P), ye = aD(R, Y), le = 0, ve = 0, Ee = 0, S = un(R, P), F, A, O, G, ce, L, N, ie, Ve, x, Mt, Sr, cn, Be, fn, dn, Ts, je, Oe, tr, rr, hn, kr, dr, wt, pn, zn, Un, _n, jr, zr, ae, gn, nr, sr, or, mn, qn, Pr;
        if (w._startClamp = w._endClamp = !1,
        w._dir = P,
        g *= 45,
        w.scroller = R,
        w.scroll = C ? C.time.bind(C) : S,
        G = S(),
        w.vars = r,
        s = s || r.animation,
        "refreshPriority"in r && (hd = 1,
        r.refreshPriority === -9999 && (to = w)),
        z.tweenScroll = z.tweenScroll || {
            top: ec(R, Ue),
            left: ec(R, Dt)
        },
        w.tweenTo = F = z.tweenScroll[P.p],
        w.scrubDuration = function(I) {
            gn = ni(I) && I,
            gn ? ae ? ae.duration(I) : ae = B.to(s, {
                ease: "expo",
                totalProgress: "+=0",
                duration: gn,
                paused: !0,
                onComplete: function() {
                    return m && m(w)
                }
            }) : (ae && ae.progress(1).kill(),
            ae = 0)
        }
        ,
        s && (s.vars.lazy = !1,
        s._initted && !w.isReverted || s.vars.immediateRender !== !1 && r.immediateRender !== !1 && s.duration() && s.render(0, !0, !0),
        w.animation = s.pause(),
        s.scrollTrigger = w,
        w.scrubDuration(f),
        jr = 0,
        l || (l = s.vars.id)),
        y && ((!xn(y) || y.push) && (y = {
            snapTo: y
        }),
        "scrollBehavior"in we.style && B.set(Y ? [we, ur] : R, {
            scrollBehavior: "auto"
        }),
        re.forEach(function(I) {
            return yt(I) && I.target === (Y ? xe.scrollingElement || ur : R) && (I.smooth = !1)
        }),
        O = yt(y.snapTo) ? y.snapTo : y.snapTo === "labels" ? lD(s) : y.snapTo === "labelsDirectional" ? cD(s) : y.directional !== !1 ? function(I, ee) {
            return Bu(y.snapTo)(I, gt() - ve < 500 ? 0 : ee.direction)
        }
        : B.utils.snap(y.snapTo),
        nr = y.duration || {
            min: .1,
            max: 2
        },
        nr = xn(nr) ? ns(nr.min, nr.max) : ns(nr, nr),
        sr = B.delayedCall(y.delay || gn / 2 || .1, function() {
            var I = S()
              , ee = gt() - ve < 500
              , q = F.tween;
            if ((ee || Math.abs(w.getVelocity()) < 10) && !q && !Bi && le !== I) {
                var te = (I - L) / Be
                  , We = s && !$ ? s.totalProgress() : te
                  , ue = ee ? 0 : (We - zr) / (gt() - ri) * 1e3 || 0
                  , Me = B.utils.clamp(-te, 1 - te, Xn(ue / 2) * ue / .185)
                  , ct = te + (y.inertia === !1 ? 0 : Me)
                  , Ye = ns(0, 1, O(ct, w))
                  , Ce = Math.round(L + Ye * Be)
                  , pe = y
                  , ir = pe.onStart
                  , be = pe.onInterrupt
                  , Lt = pe.onComplete;
                if (I <= N && I >= L && Ce !== I) {
                    if (q && !q._initted && q.data <= Xn(Ce - I))
                        return;
                    y.inertia === !1 && (Me = Ye - te),
                    F(Ce, {
                        duration: nr(Xn(Math.max(Xn(ct - We), Xn(Ye - We)) * .185 / ue / .05 || 0)),
                        ease: y.ease || "power3",
                        data: Xn(Ce - I),
                        onInterrupt: function() {
                            return sr.restart(!0) && be && be(w)
                        },
                        onComplete: function() {
                            w.update(),
                            le = S(),
                            ae && s && s.progress(Ye),
                            jr = zr = s && !$ ? s.totalProgress() : w.progress,
                            D && D(w),
                            Lt && Lt(w)
                        }
                    }, I, Me * Be, Ce - I - Me * Be),
                    ir && ir(w, F.tween)
                }
            } else
                w.isActive && le !== I && sr.restart(!0)
        }).pause()),
        l && (Ga[l] = w),
        h = w.trigger = bt(h || d !== !0 && d),
        Pr = h && h._gsap && h._gsap.stRevert,
        Pr && (Pr = Pr(w)),
        d = d === !0 ? h : bt(d),
        Bt(a) && (a = {
            targets: h,
            className: a
        }),
        d && (p === !1 || p === Wt || (p = !p && d.parentNode && d.parentNode.style && Yt(d.parentNode).display === "flex" ? !1 : $e),
        w.pin = d,
        A = B.core.getCache(d),
        A.spacer ? fn = A.pinState : (b && (b = bt(b),
        b && !b.nodeType && (b = b.current || b.nativeElement),
        A.spacerIsNative = !!b,
        b && (A.spacerState = zo(b))),
        A.spacer = je = b || xe.createElement("div"),
        je.classList.add("pin-spacer"),
        l && je.classList.add("pin-spacer-" + l),
        A.pinState = fn = zo(d)),
        r.force3D !== !1 && B.set(d, {
            force3D: !0
        }),
        w.spacer = je = A.spacer,
        _n = Yt(d),
        dr = _n[p + P.os2],
        tr = B.getProperty(d),
        rr = B.quickSetter(d, P.a, Xe),
        oa(d, je, _n),
        Ts = zo(d)),
        J) {
            Sr = xn(J) ? Yl(J, Xl) : Xl,
            x = jo("scroller-start", l, R, P, Sr, 0),
            Mt = jo("scroller-end", l, R, P, Sr, 0, x),
            Oe = x["offset" + P.op.d2];
            var K = bt(rn(R, "content") || R);
            ie = this.markerStart = jo("start", l, K, P, Sr, Oe, 0, C),
            Ve = this.markerEnd = jo("end", l, K, P, Sr, Oe, 0, C),
            C && (qn = B.quickSetter([ie, Ve], P.a, Xe)),
            !j && !(br.length && rn(R, "fixedMarkers") === !0) && (uD(Y ? we : R),
            B.set([x, Mt], {
                force3D: !0
            }),
            pn = B.quickSetter(x, P.a, Xe),
            Un = B.quickSetter(Mt, P.a, Xe))
        }
        if (C) {
            var U = C.vars.onUpdate
              , fe = C.vars.onUpdateParams;
            C.eventCallback("onUpdate", function() {
                w.update(0, 0, 1),
                U && U.apply(C, fe || [])
            })
        }
        if (w.previous = function() {
            return Z[Z.indexOf(w) - 1]
        }
        ,
        w.next = function() {
            return Z[Z.indexOf(w) + 1]
        }
        ,
        w.revert = function(I, ee) {
            if (!ee)
                return w.kill(!0);
            var q = I !== !1 || !w.enabled
              , te = st;
            q !== w.isReverted && (q && (or = Math.max(S(), w.scroll.rec || 0),
            Ee = w.progress,
            mn = s && s.progress()),
            ie && [ie, Ve, x, Mt].forEach(function(We) {
                return We.style.display = q ? "none" : "block"
            }),
            q && (st = w,
            w.update(q)),
            d && (!E || !w.isActive) && (q ? hD(d, je, fn) : oa(d, je, Yt(d), wt)),
            q || w.update(q),
            st = te,
            w.isReverted = q)
        }
        ,
        w.refresh = function(I, ee, q, te) {
            if (!((st || !w.enabled) && !ee)) {
                if (d && I && Qt) {
                    Ke(n, "scrollEnd", xd);
                    return
                }
                !_t && Q && Q(w),
                st = w,
                F.tween && !q && (F.tween.kill(),
                F.tween = 0),
                ae && ae.pause(),
                _ && s && s.revert({
                    kill: !1
                }).invalidate(),
                w.isReverted || w.revert(!0, !0),
                w._subPinOffset = !1;
                var We = Pe(), ue = ye(), Me = C ? C.duration() : vr(R, P), ct = Be <= .01, Ye = 0, Ce = te || 0, pe = xn(q) ? q.end : r.end, ir = r.endTrigger || h, be = xn(q) ? q.start : r.start || (r.start === 0 || !h ? 0 : d ? "0 0" : "0 100%"), Lt = w.pinnedContainer = r.pinnedContainer && bt(r.pinnedContainer, w), hr = h && Math.max(0, Z.indexOf(w)) || 0, Et = hr, et, rt, Dn, ko, nt, ze, pr, Hi, $u, Ss, _r, ks, Po;
                for (J && xn(q) && (ks = B.getProperty(x, P.p),
                Po = B.getProperty(Mt, P.p)); Et--; )
                    ze = Z[Et],
                    ze.end || ze.refresh(0, 1) || (st = w),
                    pr = ze.pin,
                    pr && (pr === h || pr === d || pr === Lt) && !ze.isReverted && (Ss || (Ss = []),
                    Ss.unshift(ze),
                    ze.revert(!0, !0)),
                    ze !== Z[Et] && (hr--,
                    Et--);
                for (yt(be) && (be = be(w)),
                be = zl(be, "start", w),
                L = Ql(be, h, We, P, S(), ie, x, w, ue, de, j, Me, C, w._startClamp && "_startClamp") || (d ? -.001 : 0),
                yt(pe) && (pe = pe(w)),
                Bt(pe) && !pe.indexOf("+=") && (~pe.indexOf(" ") ? pe = (Bt(be) ? be.split(" ")[0] : "") + pe : (Ye = si(pe.substr(2), We),
                pe = Bt(be) ? be : (C ? B.utils.mapRange(0, C.duration(), C.scrollTrigger.start, C.scrollTrigger.end, L) : L) + Ye,
                ir = h)),
                pe = zl(pe, "end", w),
                N = Math.max(L, Ql(pe || (ir ? "100% 0" : Me), ir, We, P, S() + Ye, Ve, Mt, w, ue, de, j, Me, C, w._endClamp && "_endClamp")) || -.001,
                Ye = 0,
                Et = hr; Et--; )
                    ze = Z[Et],
                    pr = ze.pin,
                    pr && ze.start - ze._pinPush <= L && !C && ze.end > 0 && (et = ze.end - (w._startClamp ? Math.max(0, ze.start) : ze.start),
                    (pr === h && ze.start - ze._pinPush < L || pr === Lt) && isNaN(be) && (Ye += et * (1 - ze.progress)),
                    pr === d && (Ce += et));
                if (L += Ye,
                N += Ye,
                w._startClamp && (w._startClamp += Ye),
                w._endClamp && !_t && (w._endClamp = N || -.001,
                N = Math.min(N, vr(R, P))),
                Be = N - L || (L -= .01) && .001,
                ct && (Ee = B.utils.clamp(0, 1, B.utils.normalize(L, N, or))),
                w._pinPush = Ce,
                ie && Ye && (et = {},
                et[P.a] = "+=" + Ye,
                Lt && (et[P.p] = "-=" + S()),
                B.set([ie, Ve], et)),
                d && !(Ya && w.end >= vr(R, P)))
                    et = Yt(d),
                    ko = P === Ue,
                    Dn = S(),
                    hn = parseFloat(tr(P.a)) + Ce,
                    !Me && N > 1 && (_r = (Y ? xe.scrollingElement || ur : R).style,
                    _r = {
                        style: _r,
                        value: _r["overflow" + P.a.toUpperCase()]
                    },
                    Y && Yt(we)["overflow" + P.a.toUpperCase()] !== "scroll" && (_r.style["overflow" + P.a.toUpperCase()] = "scroll")),
                    oa(d, je, et),
                    Ts = zo(d),
                    rt = Or(d, !0),
                    Hi = j && un(R, ko ? Dt : Ue)(),
                    p && (wt = [p + P.os2, Be + Ce + Xe],
                    wt.t = je,
                    Et = p === $e ? Xa(d, P) + Be + Ce : 0,
                    Et && (wt.push(P.d, Et + Xe),
                    je.style.flexBasis !== "auto" && (je.style.flexBasis = Et + Xe)),
                    cs(wt),
                    Lt && Z.forEach(function(Ps) {
                        Ps.pin === Lt && Ps.vars.pinSpacing !== !1 && (Ps._subPinOffset = !0)
                    }),
                    j && S(or)),
                    j && (nt = {
                        top: rt.top + (ko ? Dn - L : Hi) + Xe,
                        left: rt.left + (ko ? Hi : Dn - L) + Xe,
                        boxSizing: "border-box",
                        position: "fixed"
                    },
                    nt[On] = nt["max" + vs] = Math.ceil(rt.width) + Xe,
                    nt[Mn] = nt["max" + Iu] = Math.ceil(rt.height) + Xe,
                    nt[Wt] = nt[Wt + Zs] = nt[Wt + Js] = nt[Wt + eo] = nt[Wt + Qs] = "0",
                    nt[$e] = et[$e],
                    nt[$e + Zs] = et[$e + Zs],
                    nt[$e + Js] = et[$e + Js],
                    nt[$e + eo] = et[$e + eo],
                    nt[$e + Qs] = et[$e + Qs],
                    dn = _D(fn, nt, E),
                    _t && S(0)),
                    s ? ($u = s._initted,
                    ea(1),
                    s.render(s.duration(), !0, !0),
                    kr = tr(P.a) - hn + Be + Ce,
                    zn = Math.abs(Be - kr) > 1,
                    j && zn && dn.splice(dn.length - 2, 2),
                    s.render(0, !0, !0),
                    $u || s.invalidate(!0),
                    s.parent || s.totalTime(s.totalTime()),
                    ea(0)) : kr = Be,
                    _r && (_r.value ? _r.style["overflow" + P.a.toUpperCase()] = _r.value : _r.style.removeProperty("overflow-" + P.a));
                else if (h && S() && !C)
                    for (rt = h.parentNode; rt && rt !== we; )
                        rt._pinOffset && (L -= rt._pinOffset,
                        N -= rt._pinOffset),
                        rt = rt.parentNode;
                Ss && Ss.forEach(function(Ps) {
                    return Ps.revert(!1, !0)
                }),
                w.start = L,
                w.end = N,
                G = ce = _t ? or : S(),
                !C && !_t && (G < or && S(or),
                w.scroll.rec = 0),
                w.revert(!1, !0),
                ve = gt(),
                sr && (le = -1,
                sr.restart(!0)),
                st = 0,
                s && $ && (s._initted || mn) && s.progress() !== mn && s.progress(mn || 0, !0).render(s.time(), !0, !0),
                (ct || Ee !== w.progress || C) && (s && !$ && s.totalProgress(C && L < -.001 && !Ee ? B.utils.normalize(L, N, 0) : Ee, !0),
                w.progress = ct || (G - L) / Be === Ee ? 0 : Ee),
                d && p && (je._pinOffset = Math.round(w.progress * kr)),
                ae && ae.invalidate(),
                isNaN(ks) || (ks -= B.getProperty(x, P.p),
                Po -= B.getProperty(Mt, P.p),
                Uo(x, P, ks),
                Uo(ie, P, ks - (te || 0)),
                Uo(Mt, P, Po),
                Uo(Ve, P, Po - (te || 0))),
                ct && !_t && w.update(),
                c && !_t && !cn && (cn = !0,
                c(w),
                cn = !1)
            }
        }
        ,
        w.getVelocity = function() {
            return (S() - ce) / (gt() - ri) * 1e3 || 0
        }
        ,
        w.endAnimation = function() {
            Os(w.callbackAnimation),
            s && (ae ? ae.progress(1) : s.paused() ? $ || Os(s, w.direction < 0, 1) : Os(s, s.reversed()))
        }
        ,
        w.labelToScroll = function(I) {
            return s && s.labels && (L || w.refresh() || L) + s.labels[I] / s.duration() * Be || 0
        }
        ,
        w.getTrailing = function(I) {
            var ee = Z.indexOf(w)
              , q = w.direction > 0 ? Z.slice(0, ee).reverse() : Z.slice(ee + 1);
            return (Bt(I) ? q.filter(function(te) {
                return te.vars.preventOverlaps === I
            }) : q).filter(function(te) {
                return w.direction > 0 ? te.end <= L : te.start >= N
            })
        }
        ,
        w.update = function(I, ee, q) {
            if (!(C && !q && !I)) {
                var te = _t === !0 ? or : w.scroll(), We = I ? 0 : (te - L) / Be, ue = We < 0 ? 0 : We > 1 ? 1 : We || 0, Me = w.progress, ct, Ye, Ce, pe, ir, be, Lt, hr;
                if (ee && (ce = G,
                G = C ? S() : te,
                y && (zr = jr,
                jr = s && !$ ? s.totalProgress() : ue)),
                g && !ue && d && !st && !Bo && Qt && L < te + (te - ce) / (gt() - ri) * g && (ue = 1e-4),
                ue !== Me && w.enabled) {
                    if (ct = w.isActive = !!ue && ue < 1,
                    Ye = !!Me && Me < 1,
                    be = ct !== Ye,
                    ir = be || !!ue != !!Me,
                    w.direction = ue > Me ? 1 : -1,
                    w.progress = ue,
                    ir && !st && (Ce = ue && !Me ? 0 : ue === 1 ? 1 : Me === 1 ? 2 : 3,
                    $ && (pe = !be && V[Ce + 1] !== "none" && V[Ce + 1] || V[Ce],
                    hr = s && (pe === "complete" || pe === "reset" || pe in s))),
                    T && (be || hr) && (hr || f || !s) && (yt(T) ? T(w) : w.getTrailing(T).forEach(function(Dn) {
                        return Dn.endAnimation()
                    })),
                    $ || (ae && !st && !Bo ? (ae._dp._time - ae._start !== ae._time && ae.render(ae._dp._time - ae._start),
                    ae.resetTo ? ae.resetTo("totalProgress", ue, s._tTime / s._tDur) : (ae.vars.totalProgress = ue,
                    ae.invalidate().restart())) : s && s.totalProgress(ue, !!(st && (ve || I)))),
                    d) {
                        if (I && p && (je.style[p + P.os2] = dr),
                        !j)
                            rr(Hs(hn + kr * ue));
                        else if (ir) {
                            if (Lt = !I && ue > Me && N + 1 > te && te + 1 >= vr(R, P),
                            E)
                                if (!I && (ct || Lt)) {
                                    var Et = Or(d, !0)
                                      , et = te - L;
                                    Zl(d, we, Et.top + (P === Ue ? et : 0) + Xe, Et.left + (P === Ue ? 0 : et) + Xe)
                                } else
                                    Zl(d, je);
                            cs(ct || Lt ? dn : Ts),
                            zn && ue < 1 && ct || rr(hn + (ue === 1 && !Lt ? kr : 0))
                        }
                    }
                    y && !F.tween && !st && !Bo && sr.restart(!0),
                    a && (be || v && ue && (ue < 1 || !ta)) && go(a.targets).forEach(function(Dn) {
                        return Dn.classList[ct || v ? "add" : "remove"](a.className)
                    }),
                    i && !$ && !I && i(w),
                    ir && !st ? ($ && (hr && (pe === "complete" ? s.pause().totalProgress(1) : pe === "reset" ? s.restart(!0).pause() : pe === "restart" ? s.restart(!0) : s[pe]()),
                    i && i(w)),
                    (be || !ta) && (u && be && na(w, u),
                    H[Ce] && na(w, H[Ce]),
                    v && (ue === 1 ? w.kill(!1, 1) : H[Ce] = 0),
                    be || (Ce = ue === 1 ? 1 : 3,
                    H[Ce] && na(w, H[Ce]))),
                    k && !ct && Math.abs(w.getVelocity()) > (ni(k) ? k : 2500) && (Os(w.callbackAnimation),
                    ae ? ae.progress(1) : Os(s, pe === "reverse" ? 1 : !ue, 1))) : $ && i && !st && i(w)
                }
                if (Un) {
                    var rt = C ? te / C.duration() * (C._caScrollDist || 0) : te;
                    pn(rt + (x._isFlipped ? 1 : 0)),
                    Un(rt)
                }
                qn && qn(-te / C.duration() * (C._caScrollDist || 0))
            }
        }
        ,
        w.enable = function(I, ee) {
            w.enabled || (w.enabled = !0,
            Ke(R, "resize", $s),
            Y || Ke(R, "scroll", Gn),
            Q && Ke(n, "refreshInit", Q),
            I !== !1 && (w.progress = Ee = 0,
            G = ce = le = S()),
            ee !== !1 && w.refresh())
        }
        ,
        w.getTween = function(I) {
            return I && F ? F.tween : ae
        }
        ,
        w.setPositions = function(I, ee, q, te) {
            if (C) {
                var We = C.scrollTrigger
                  , ue = C.duration()
                  , Me = We.end - We.start;
                I = We.start + Me * I / ue,
                ee = We.start + Me * ee / ue
            }
            w.refresh(!1, !1, {
                start: Ul(I, q && !!w._startClamp),
                end: Ul(ee, q && !!w._endClamp)
            }, te),
            w.update()
        }
        ,
        w.adjustPinSpacing = function(I) {
            if (wt && I) {
                var ee = wt.indexOf(P.d) + 1;
                wt[ee] = parseFloat(wt[ee]) + I + Xe,
                wt[1] = parseFloat(wt[1]) + I + Xe,
                cs(wt)
            }
        }
        ,
        w.disable = function(I, ee) {
            if (w.enabled && (I !== !1 && w.revert(!0, !0),
            w.enabled = w.isActive = !1,
            ee || ae && ae.pause(),
            or = 0,
            A && (A.uncache = 1),
            Q && Ge(n, "refreshInit", Q),
            sr && (sr.pause(),
            F.tween && F.tween.kill() && (F.tween = 0)),
            !Y)) {
                for (var q = Z.length; q--; )
                    if (Z[q].scroller === R && Z[q] !== w)
                        return;
                Ge(R, "resize", $s),
                Y || Ge(R, "scroll", Gn)
            }
        }
        ,
        w.kill = function(I, ee) {
            w.disable(I, ee),
            ae && !ee && ae.kill(),
            l && delete Ga[l];
            var q = Z.indexOf(w);
            q >= 0 && Z.splice(q, 1),
            q === pt && ii > 0 && pt--,
            q = 0,
            Z.forEach(function(te) {
                return te.scroller === w.scroller && (q = 1)
            }),
            q || _t || (w.scroll.rec = 0),
            s && (s.scrollTrigger = null,
            I && s.revert({
                kill: !1
            }),
            ee || s.kill()),
            ie && [ie, Ve, x, Mt].forEach(function(te) {
                return te.parentNode && te.parentNode.removeChild(te)
            }),
            to === w && (to = 0),
            d && (A && (A.uncache = 1),
            q = 0,
            Z.forEach(function(te) {
                return te.pin === d && q++
            }),
            q || (A.spacer = 0)),
            r.onKill && r.onKill(w)
        }
        ,
        Z.push(w),
        w.enable(!1, !1),
        Pr && Pr(w),
        s && s.add && !Be) {
            var He = w.update;
            w.update = function() {
                w.update = He,
                L || N || w.refresh()
            }
            ,
            B.delayedCall(.01, w.update),
            Be = .01,
            L = N = 0
        } else
            w.refresh();
        d && dD()
    }
    ,
    n.register = function(r) {
        return Jn || (B = r || yd(),
        Dd() && window.document && n.enable(),
        Jn = Bs),
        Jn
    }
    ,
    n.defaults = function(r) {
        if (r)
            for (var s in r)
                Vo[s] = r[s];
        return Vo
    }
    ,
    n.disable = function(r, s) {
        Bs = 0,
        Z.forEach(function(i) {
            return i[s ? "kill" : "disable"](r)
        }),
        Ge(se, "wheel", Gn),
        Ge(xe, "scroll", Gn),
        clearInterval(Io),
        Ge(xe, "touchcancel", mr),
        Ge(we, "touchstart", mr),
        $o(Ge, xe, "pointerdown,touchstart,mousedown", ql),
        $o(Ge, xe, "pointerup,touchend,mouseup", Wl),
        Ci.kill(),
        Ho(Ge);
        for (var o = 0; o < re.length; o += 3)
            No(Ge, re[o], re[o + 1]),
            No(Ge, re[o], re[o + 2])
    }
    ,
    n.enable = function() {
        if (se = window,
        xe = document,
        ur = xe.documentElement,
        we = xe.body,
        B && (go = B.utils.toArray,
        ns = B.utils.clamp,
        Wa = B.core.context || mr,
        ea = B.core.suppressOverwrites || mr,
        Au = se.history.scrollRestoration || "auto",
        Ka = se.pageYOffset,
        B.core.globals("ScrollTrigger", n),
        we)) {
            Bs = 1,
            ls = document.createElement("div"),
            ls.style.height = "100vh",
            ls.style.position = "absolute",
            kd(),
            oD(),
            Fe.register(B),
            n.isTouch = Fe.isTouch,
            Yr = Fe.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
            Ke(se, "wheel", Gn),
            dd = [se, xe, ur, we],
            B.matchMedia ? (n.matchMedia = function(l) {
                var u = B.matchMedia(), c;
                for (c in l)
                    u.add(c, l[c]);
                return u
            }
            ,
            B.addEventListener("matchMediaInit", function() {
                return Hu()
            }),
            B.addEventListener("matchMediaRevert", function() {
                return Td()
            }),
            B.addEventListener("matchMedia", function() {
                kn(0, 1),
                Vn("matchMedia")
            }),
            B.matchMedia("(orientation: portrait)", function() {
                return sa(),
                sa
            })) : console.warn("Requires GSAP 3.11.0 or later"),
            sa(),
            Ke(xe, "scroll", Gn);
            var r = we.style, s = r.borderTopStyle, o = B.core.Animation.prototype, i, a;
            for (o.revert || Object.defineProperty(o, "revert", {
                value: function() {
                    return this.time(-.01, !0)
                }
            }),
            r.borderTopStyle = "solid",
            i = Or(we),
            Ue.m = Math.round(i.top + Ue.sc()) || 0,
            Dt.m = Math.round(i.left + Dt.sc()) || 0,
            s ? r.borderTopStyle = s : r.removeProperty("border-top-style"),
            Io = setInterval(Gl, 250),
            B.delayedCall(.5, function() {
                return Bo = 0
            }),
            Ke(xe, "touchcancel", mr),
            Ke(we, "touchstart", mr),
            $o(Ke, xe, "pointerdown,touchstart,mousedown", ql),
            $o(Ke, xe, "pointerup,touchend,mouseup", Wl),
            qa = B.utils.checkPrefix("transform"),
            ai.push(qa),
            Jn = gt(),
            Ci = B.delayedCall(.2, kn).pause(),
            Qn = [xe, "visibilitychange", function() {
                var l = se.innerWidth
                  , u = se.innerHeight;
                xe.hidden ? (Vl = l,
                jl = u) : (Vl !== l || jl !== u) && $s()
            }
            , xe, "DOMContentLoaded", kn, se, "load", kn, se, "resize", $s],
            Ho(Ke),
            Z.forEach(function(l) {
                return l.enable(0, 1)
            }),
            a = 0; a < re.length; a += 3)
                No(Ge, re[a], re[a + 1]),
                No(Ge, re[a], re[a + 2])
        }
    }
    ,
    n.config = function(r) {
        "limitCallbacks"in r && (ta = !!r.limitCallbacks);
        var s = r.syncInterval;
        s && clearInterval(Io) || (Io = s) && setInterval(Gl, s),
        "ignoreMobileResize"in r && (_d = n.isTouch === 1 && r.ignoreMobileResize),
        "autoRefreshEvents"in r && (Ho(Ge) || Ho(Ke, r.autoRefreshEvents || "none"),
        pd = (r.autoRefreshEvents + "").indexOf("resize") === -1)
    }
    ,
    n.scrollerProxy = function(r, s) {
        var o = bt(r)
          , i = re.indexOf(o)
          , a = $n(o);
        ~i && re.splice(i, a ? 6 : 2),
        s && (a ? br.unshift(se, s, we, s, ur, s) : br.unshift(o, s))
    }
    ,
    n.clearMatchMedia = function(r) {
        Z.forEach(function(s) {
            return s._ctx && s._ctx.query === r && s._ctx.kill(!0, !0)
        })
    }
    ,
    n.isInViewport = function(r, s, o) {
        var i = (Bt(r) ? bt(r) : r).getBoundingClientRect()
          , a = i[o ? On : Mn] * s || 0;
        return o ? i.right - a > 0 && i.left + a < se.innerWidth : i.bottom - a > 0 && i.top + a < se.innerHeight
    }
    ,
    n.positionInViewport = function(r, s, o) {
        Bt(r) && (r = bt(r));
        var i = r.getBoundingClientRect()
          , a = i[o ? On : Mn]
          , l = s == null ? a / 2 : s in bi ? bi[s] * a : ~s.indexOf("%") ? parseFloat(s) * a / 100 : parseFloat(s) || 0;
        return o ? (i.left + l) / se.innerWidth : (i.top + l) / se.innerHeight
    }
    ,
    n.killAll = function(r) {
        if (Z.slice(0).forEach(function(o) {
            return o.vars.id !== "ScrollSmoother" && o.kill()
        }),
        r !== !0) {
            var s = Nn.killAll || [];
            Nn = {},
            s.forEach(function(o) {
                return o()
            })
        }
    }
    ,
    n
}();
ne.version = "3.12.3";
ne.saveStyles = function(n) {
    return n ? go(n).forEach(function(e) {
        if (e && e.style) {
            var t = It.indexOf(e);
            t >= 0 && It.splice(t, 5),
            It.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), B.core.getCache(e), Wa())
        }
    }) : It
}
;
ne.revert = function(n, e) {
    return Hu(!n, e)
}
;
ne.create = function(n, e) {
    return new ne(n,e)
}
;
ne.refresh = function(n) {
    return n ? $s() : (Jn || ne.register()) && kn(!0)
}
;
ne.update = function(n) {
    return ++re.cache && Lr(n === !0 ? 2 : 0)
}
;
ne.clearScrollMemory = Sd;
ne.maxScroll = function(n, e) {
    return vr(n, e ? Dt : Ue)
}
;
ne.getScrollFunc = function(n, e) {
    return un(bt(n), e ? Dt : Ue)
}
;
ne.getById = function(n) {
    return Ga[n]
}
;
ne.getAll = function() {
    return Z.filter(function(n) {
        return n.vars.id !== "ScrollSmoother"
    })
}
;
ne.isScrolling = function() {
    return !!Qt
}
;
ne.snapDirectional = Bu;
ne.addEventListener = function(n, e) {
    var t = Nn[n] || (Nn[n] = []);
    ~t.indexOf(e) || t.push(e)
}
;
ne.removeEventListener = function(n, e) {
    var t = Nn[n]
      , r = t && t.indexOf(e);
    r >= 0 && t.splice(r, 1)
}
;
ne.batch = function(n, e) {
    var t = [], r = {}, s = e.interval || .016, o = e.batchMax || 1e9, i = function(u, c) {
        var f = []
          , h = []
          , d = B.delayedCall(s, function() {
            c(f, h),
            f = [],
            h = []
        }).pause();
        return function(p) {
            f.length || d.restart(!0),
            f.push(p.trigger),
            h.push(p),
            o <= f.length && d.progress(1)
        }
    }, a;
    for (a in e)
        r[a] = a.substr(0, 2) === "on" && yt(e[a]) && a !== "onRefreshInit" ? i(a, e[a]) : e[a];
    return yt(o) && (o = o(),
    Ke(ne, "refresh", function() {
        return o = e.batchMax()
    })),
    go(n).forEach(function(l) {
        var u = {};
        for (a in r)
            u[a] = r[a];
        u.trigger = l,
        t.push(ne.create(u))
    }),
    t
}
;
var tc = function(e, t, r, s) {
    return t > s ? e(s) : t < 0 && e(0),
    r > s ? (s - t) / (r - t) : r < 0 ? t / (t - r) : 1
}, ia = function n(e, t) {
    t === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = t === !0 ? "auto" : t ? "pan-" + t + (Fe.isTouch ? " pinch-zoom" : "") : "none",
    e === ur && n(we, t)
}, qo = {
    auto: 1,
    scroll: 1
}, mD = function(e) {
    var t = e.event, r = e.target, s = e.axis, o = (t.changedTouches ? t.changedTouches[0] : t).target, i = o._gsap || B.core.getCache(o), a = gt(), l;
    if (!i._isScrollT || a - i._isScrollT > 2e3) {
        for (; o && o !== we && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !(qo[(l = Yt(o)).overflowY] || qo[l.overflowX])); )
            o = o.parentNode;
        i._isScroll = o && o !== r && !$n(o) && (qo[(l = Yt(o)).overflowY] || qo[l.overflowX]),
        i._isScrollT = a
    }
    (i._isScroll || s === "x") && (t.stopPropagation(),
    t._gsapAllow = !0)
}, Rd = function(e, t, r, s) {
    return Fe.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: s = s && mD,
        onPress: s,
        onDrag: s,
        onScroll: s,
        onEnable: function() {
            return r && Ke(xe, Fe.eventTypes[0], nc, !1, !0)
        },
        onDisable: function() {
            return Ge(xe, Fe.eventTypes[0], nc, !0)
        }
    })
}, DD = /(input|label|select|textarea)/i, rc, nc = function(e) {
    var t = DD.test(e.target.tagName);
    (t || rc) && (e._gsapAllow = !0,
    rc = t)
}, yD = function(e) {
    xn(e) || (e = {}),
    e.preventDefault = e.isNormalizer = e.allowClicks = !0,
    e.type || (e.type = "wheel,touch"),
    e.debounce = !!e.debounce,
    e.id = e.id || "normalizer";
    var t = e, r = t.normalizeScrollX, s = t.momentum, o = t.allowNestedScroll, i = t.onRelease, a, l, u = bt(e.target) || ur, c = B.core.globals().ScrollSmoother, f = c && c.get(), h = Yr && (e.content && bt(e.content) || f && e.content !== !1 && !f.smooth() && f.content()), d = un(u, Ue), p = un(u, Dt), _ = 1, g = (Fe.isTouch && se.visualViewport ? se.visualViewport.scale * se.visualViewport.width : se.outerWidth) / se.innerWidth, m = 0, D = yt(s) ? function() {
        return s(a)
    }
    : function() {
        return s || 2.8
    }
    , v, y, E = Rd(u, e.type, !0, o), b = function() {
        return y = !1
    }, C = mr, k = mr, T = function() {
        l = vr(u, Ue),
        k = ns(Yr ? 1 : 0, l),
        r && (C = ns(0, vr(u, Dt))),
        v = Ln
    }, P = function() {
        h._gsap.y = Hs(parseFloat(h._gsap.y) + d.offset) + "px",
        h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)",
        d.offset = d.cacheID = 0
    }, $ = function() {
        if (y) {
            requestAnimationFrame(b);
            var J = Hs(a.deltaY / 2)
              , de = k(d.v - J);
            if (h && de !== d.v + d.offset) {
                d.offset = de - d.v;
                var w = Hs((parseFloat(h && h._gsap.y) || 0) - d.offset);
                h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + w + ", 0, 1)",
                h._gsap.y = w + "px",
                d.cacheID = re.cache,
                Lr()
            }
            return !0
        }
        d.offset && P(),
        y = !0
    }, R, z, Y, j, H = function() {
        T(),
        R.isActive() && R.vars.scrollY > l && (d() > l ? R.progress(1) && d(l) : R.resetTo("scrollY", l))
    };
    return h && B.set(h, {
        y: "+=0"
    }),
    e.ignoreCheck = function(V) {
        return Yr && V.type === "touchmove" && $() || _ > 1.05 && V.type !== "touchstart" || a.isGesturing || V.touches && V.touches.length > 1
    }
    ,
    e.onPress = function() {
        y = !1;
        var V = _;
        _ = Hs((se.visualViewport && se.visualViewport.scale || 1) / g),
        R.pause(),
        V !== _ && ia(u, _ > 1.01 ? !0 : r ? !1 : "x"),
        z = p(),
        Y = d(),
        T(),
        v = Ln
    }
    ,
    e.onRelease = e.onGestureStart = function(V, J) {
        if (d.offset && P(),
        !J)
            j.restart(!0);
        else {
            re.cache++;
            var de = D(), w, Q;
            r && (w = p(),
            Q = w + de * .05 * -V.velocityX / .227,
            de *= tc(p, w, Q, vr(u, Dt)),
            R.vars.scrollX = C(Q)),
            w = d(),
            Q = w + de * .05 * -V.velocityY / .227,
            de *= tc(d, w, Q, vr(u, Ue)),
            R.vars.scrollY = k(Q),
            R.invalidate().duration(de).play(.01),
            (Yr && R.vars.scrollY >= l || w >= l - 1) && B.to({}, {
                onUpdate: H,
                duration: de
            })
        }
        i && i(V)
    }
    ,
    e.onWheel = function() {
        R._ts && R.pause(),
        gt() - m > 1e3 && (v = 0,
        m = gt())
    }
    ,
    e.onChange = function(V, J, de, w, Q) {
        if (Ln !== v && T(),
        J && r && p(C(w[2] === J ? z + (V.startX - V.x) : p() + J - w[1])),
        de) {
            d.offset && P();
            var Pe = Q[2] === de
              , ye = Pe ? Y + V.startY - V.y : d() + de - Q[1]
              , le = k(ye);
            Pe && ye !== le && (Y += le - ye),
            d(le)
        }
        (de || J) && Lr()
    }
    ,
    e.onEnable = function() {
        ia(u, r ? !1 : "x"),
        ne.addEventListener("refresh", H),
        Ke(se, "resize", H),
        d.smooth && (d.target.style.scrollBehavior = "auto",
        d.smooth = p.smooth = !1),
        E.enable()
    }
    ,
    e.onDisable = function() {
        ia(u, !0),
        Ge(se, "resize", H),
        ne.removeEventListener("refresh", H),
        E.kill()
    }
    ,
    e.lockAxis = e.lockAxis !== !1,
    a = new Fe(e),
    a.iOS = Yr,
    Yr && !d() && d(1),
    Yr && B.ticker.add(mr),
    j = a._dc,
    R = B.to(a, {
        ease: "power4",
        paused: !0,
        scrollX: r ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
            scrollY: Pd(d, d(), function() {
                return R.pause()
            })
        },
        onUpdate: Lr,
        onComplete: j.vars.onComplete
    }),
    a
};
ne.sort = function(n) {
    return Z.sort(n || function(e, t) {
        return (e.vars.refreshPriority || 0) * -1e6 + e.start - (t.start + (t.vars.refreshPriority || 0) * -1e6)
    }
    )
}
;
ne.observe = function(n) {
    return new Fe(n)
}
;
ne.normalizeScroll = function(n) {
    if (typeof n > "u")
        return ht;
    if (n === !0 && ht)
        return ht.enable();
    if (n === !1) {
        ht && ht.kill(),
        ht = n;
        return
    }
    var e = n instanceof Fe ? n : yD(n);
    return ht && ht.target === e.target && ht.kill(),
    $n(e.target) && (ht = e),
    e
}
;
ne.core = {
    _getVelocityProp: Ua,
    _inputObserver: Rd,
    _scrollers: re,
    _proxies: br,
    bridge: {
        ss: function() {
            Qt || Vn("scrollStart"),
            Qt = gt()
        },
        ref: function() {
            return st
        }
    }
};
yd() && B.registerPlugin(ne);
/*!
 * ScrollToPlugin 3.12.3
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var vt, Ad, Ir, wr, nn, Fd, Od, Wo, Md = function() {
    return typeof window < "u"
}, Ld = function() {
    return vt || Md() && (vt = window.gsap) && vt.registerPlugin && vt
}, Id = function(e) {
    return typeof e == "string"
}, sc = function(e) {
    return typeof e == "function"
}, Do = function(e, t) {
    var r = t === "x" ? "Width" : "Height"
      , s = "scroll" + r
      , o = "client" + r;
    return e === Ir || e === wr || e === nn ? Math.max(wr[s], nn[s]) - (Ir["inner" + r] || wr[o] || nn[o]) : e[s] - e["offset" + r]
}, yo = function(e, t) {
    var r = "scroll" + (t === "x" ? "Left" : "Top");
    return e === Ir && (e.pageXOffset != null ? r = "page" + t.toUpperCase() + "Offset" : e = wr[r] != null ? wr : nn),
    function() {
        return e[r]
    }
}, vD = function(e, t, r, s) {
    if (sc(e) && (e = e(t, r, s)),
    typeof e != "object")
        return Id(e) && e !== "max" && e.charAt(1) !== "=" ? {
            x: e,
            y: e
        } : {
            y: e
        };
    if (e.nodeType)
        return {
            y: e,
            x: e
        };
    var o = {}, i;
    for (i in e)
        o[i] = i !== "onAutoKill" && sc(e[i]) ? e[i](t, r, s) : e[i];
    return o
}, Bd = function(e, t) {
    if (e = Fd(e)[0],
    !e || !e.getBoundingClientRect)
        return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
        };
    var r = e.getBoundingClientRect()
      , s = !t || t === Ir || t === nn
      , o = s ? {
        top: wr.clientTop - (Ir.pageYOffset || wr.scrollTop || nn.scrollTop || 0),
        left: wr.clientLeft - (Ir.pageXOffset || wr.scrollLeft || nn.scrollLeft || 0)
    } : t.getBoundingClientRect()
      , i = {
        x: r.left - o.left,
        y: r.top - o.top
    };
    return !s && t && (i.x += yo(t, "x")(),
    i.y += yo(t, "y")()),
    i
}, oc = function(e, t, r, s, o) {
    return !isNaN(e) && typeof e != "object" ? parseFloat(e) - o : Id(e) && e.charAt(1) === "=" ? parseFloat(e.substr(2)) * (e.charAt(0) === "-" ? -1 : 1) + s - o : e === "max" ? Do(t, r) - o : Math.min(Do(t, r), Bd(e, t)[r] - o)
}, ic = function() {
    vt = Ld(),
    Md() && vt && typeof document < "u" && document.body && (Ir = window,
    nn = document.body,
    wr = document.documentElement,
    Fd = vt.utils.toArray,
    vt.config({
        autoKillThreshold: 7
    }),
    Od = vt.config(),
    Ad = 1)
}, ws = {
    version: "3.12.3",
    name: "scrollTo",
    rawVars: 1,
    register: function(e) {
        vt = e,
        ic()
    },
    init: function(e, t, r, s, o) {
        Ad || ic();
        var i = this
          , a = vt.getProperty(e, "scrollSnapType");
        i.isWin = e === Ir,
        i.target = e,
        i.tween = r,
        t = vD(t, s, e, o),
        i.vars = t,
        i.autoKill = !!t.autoKill,
        i.getX = yo(e, "x"),
        i.getY = yo(e, "y"),
        i.x = i.xPrev = i.getX(),
        i.y = i.yPrev = i.getY(),
        Wo || (Wo = vt.core.globals().ScrollTrigger),
        vt.getProperty(e, "scrollBehavior") === "smooth" && vt.set(e, {
            scrollBehavior: "auto"
        }),
        a && a !== "none" && (i.snap = 1,
        i.snapInline = e.style.scrollSnapType,
        e.style.scrollSnapType = "none"),
        t.x != null ? (i.add(i, "x", i.x, oc(t.x, e, "x", i.x, t.offsetX || 0), s, o),
        i._props.push("scrollTo_x")) : i.skipX = 1,
        t.y != null ? (i.add(i, "y", i.y, oc(t.y, e, "y", i.y, t.offsetY || 0), s, o),
        i._props.push("scrollTo_y")) : i.skipY = 1
    },
    render: function(e, t) {
        for (var r = t._pt, s = t.target, o = t.tween, i = t.autoKill, a = t.xPrev, l = t.yPrev, u = t.isWin, c = t.snap, f = t.snapInline, h, d, p, _, g; r; )
            r.r(e, r.d),
            r = r._next;
        h = u || !t.skipX ? t.getX() : a,
        d = u || !t.skipY ? t.getY() : l,
        p = d - l,
        _ = h - a,
        g = Od.autoKillThreshold,
        t.x < 0 && (t.x = 0),
        t.y < 0 && (t.y = 0),
        i && (!t.skipX && (_ > g || _ < -g) && h < Do(s, "x") && (t.skipX = 1),
        !t.skipY && (p > g || p < -g) && d < Do(s, "y") && (t.skipY = 1),
        t.skipX && t.skipY && (o.kill(),
        t.vars.onAutoKill && t.vars.onAutoKill.apply(o, t.vars.onAutoKillParams || []))),
        u ? Ir.scrollTo(t.skipX ? h : t.x, t.skipY ? d : t.y) : (t.skipY || (s.scrollTop = t.y),
        t.skipX || (s.scrollLeft = t.x)),
        c && (e === 1 || e === 0) && (d = s.scrollTop,
        h = s.scrollLeft,
        f ? s.style.scrollSnapType = f : s.style.removeProperty("scroll-snap-type"),
        s.scrollTop = d + 1,
        s.scrollLeft = h + 1,
        s.scrollTop = d,
        s.scrollLeft = h),
        t.xPrev = t.x,
        t.yPrev = t.y,
        Wo && Wo.update()
    },
    kill: function(e) {
        var t = e === "scrollTo";
        (t || e === "scrollTo_x") && (this.skipX = 1),
        (t || e === "scrollTo_y") && (this.skipY = 1)
    }
};
ws.max = Do;
ws.getOffset = Bd;
ws.buildGetter = yo;
Ld() && vt.registerPlugin(ws);
/*!
 * strings: 3.12.3
 * https://gsap.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var wD = /(?:^\s+|\s+$)/g
  , ED = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
function Hd(n) {
    var e = n.nodeType
      , t = "";
    if (e === 1 || e === 9 || e === 11) {
        if (typeof n.textContent == "string")
            return n.textContent;
        for (n = n.firstChild; n; n = n.nextSibling)
            t += Hd(n)
    } else if (e === 3 || e === 4)
        return n.nodeValue;
    return t
}
function Qa(n, e, t, r) {
    for (var s = n.firstChild, o = [], i; s; )
        s.nodeType === 3 ? (i = (s.nodeValue + "").replace(/^\n+/g, ""),
        r || (i = i.replace(/\s+/g, " ")),
        o.push.apply(o, $d(i, e, t, r))) : (s.nodeName + "").toLowerCase() === "br" ? o[o.length - 1] += "<br>" : o.push(s.outerHTML),
        s = s.nextSibling;
    for (i = o.length; i--; )
        o[i] === "&" && o.splice(i, 1, "&amp;");
    return o
}
function $d(n, e, t, r) {
    if (n += "",
    t && (n = n.trim ? n.trim() : n.replace(wD, "")),
    e && e !== "")
        return n.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(e);
    for (var s = [], o = n.length, i = 0, a, l; i < o; i++)
        l = n.charAt(i),
        (l.charCodeAt(0) >= 55296 && l.charCodeAt(0) <= 56319 || n.charCodeAt(i + 1) >= 65024 && n.charCodeAt(i + 1) <= 65039) && (a = ((n.substr(i, 12).split(ED) || [])[1] || "").length || 2,
        l = n.substr(i, a),
        s.emoji = 1,
        i += a - 1),
        s.push(l === ">" ? "&gt;" : l === "<" ? "&lt;" : r && l === " " && (n.charAt(i - 1) === " " || n.charAt(i + 1) === " ") ? "&nbsp;" : l);
    return s
}
/*!
 * TextPlugin 3.12.3
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ns, Yo, CD = function() {
    return Ns || typeof window < "u" && (Ns = window.gsap) && Ns.registerPlugin && Ns
}, Es = {
    version: "3.12.3",
    name: "text",
    init: function(e, t, r) {
        typeof t != "object" && (t = {
            value: t
        });
        var s = e.nodeName.toUpperCase(), o = this, i = t, a = i.newClass, l = i.oldClass, u = i.preserveSpaces, c = i.rtl, f = o.delimiter = t.delimiter || "", h = o.fillChar = t.fillChar || (t.padSpace ? "&nbsp;" : ""), d, p, _, g, m, D, v, y;
        if (o.svg = e.getBBox && (s === "TEXT" || s === "TSPAN"),
        !("innerHTML"in e) && !o.svg)
            return !1;
        if (o.target = e,
        !("value"in t)) {
            o.text = o.original = [""];
            return
        }
        for (_ = Qa(e, f, !1, u),
        Yo || (Yo = document.createElement("div")),
        Yo.innerHTML = t.value,
        p = Qa(Yo, f, !1, u),
        o.from = r._from,
        (o.from || c) && !(c && o.from) && (s = _,
        _ = p,
        p = s),
        o.hasClass = !!(a || l),
        o.newClass = c ? l : a,
        o.oldClass = c ? a : l,
        s = _.length - p.length,
        d = s < 0 ? _ : p,
        s < 0 && (s = -s); --s > -1; )
            d.push(h);
        if (t.type === "diff") {
            for (g = 0,
            m = [],
            D = [],
            v = "",
            s = 0; s < p.length; s++)
                y = p[s],
                y === _[s] ? v += y : (m[g] = v + y,
                D[g++] = v + _[s],
                v = "");
            p = m,
            _ = D,
            v && (p.push(v),
            _.push(v))
        }
        t.speed && r.duration(Math.min(.05 / t.speed * d.length, t.maxDuration || 9999)),
        o.rtl = c,
        o.original = _,
        o.text = p,
        o._props.push("text")
    },
    render: function(e, t) {
        e > 1 ? e = 1 : e < 0 && (e = 0),
        t.from && (e = 1 - e);
        var r = t.text, s = t.hasClass, o = t.newClass, i = t.oldClass, a = t.delimiter, l = t.target, u = t.fillChar, c = t.original, f = t.rtl, h = r.length, d = (f ? 1 - e : e) * h + .5 | 0, p, _, g;
        s && e ? (p = o && d,
        _ = i && d !== h,
        g = (p ? "<span class='" + o + "'>" : "") + r.slice(0, d).join(a) + (p ? "</span>" : "") + (_ ? "<span class='" + i + "'>" : "") + a + c.slice(d).join(a) + (_ ? "</span>" : "")) : g = r.slice(0, d).join(a) + a + c.slice(d).join(a),
        t.svg ? l.textContent = g : l.innerHTML = u === "&nbsp;" && ~g.indexOf("  ") ? g.split("  ").join("&nbsp;&nbsp;") : g
    }
};
Es.splitInnerHTML = Qa;
Es.emojiSafeSplit = $d;
Es.getText = Hd;
CD() && Ns.registerPlugin(Es);
/*!
 * paths 3.12.3
 * https://gsap.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var bD = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig
  , xD = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig
  , TD = Math.PI / 180
  , Xo = Math.sin
  , Go = Math.cos
  , ro = Math.abs
  , Ms = Math.sqrt
  , SD = function(e) {
    return typeof e == "number"
}
  , ac = 1e5
  , qr = function(e) {
    return Math.round(e * ac) / ac || 0
};
function kD(n, e, t, r, s, o, i) {
    for (var a = n.length, l, u, c, f, h; --a > -1; )
        for (l = n[a],
        u = l.length,
        c = 0; c < u; c += 2)
            f = l[c],
            h = l[c + 1],
            l[c] = f * e + h * r + o,
            l[c + 1] = f * t + h * s + i;
    return n._dirty = 1,
    n
}
function PD(n, e, t, r, s, o, i, a, l) {
    if (!(n === a && e === l)) {
        t = ro(t),
        r = ro(r);
        var u = s % 360 * TD
          , c = Go(u)
          , f = Xo(u)
          , h = Math.PI
          , d = h * 2
          , p = (n - a) / 2
          , _ = (e - l) / 2
          , g = c * p + f * _
          , m = -f * p + c * _
          , D = g * g
          , v = m * m
          , y = D / (t * t) + v / (r * r);
        y > 1 && (t = Ms(y) * t,
        r = Ms(y) * r);
        var E = t * t
          , b = r * r
          , C = (E * b - E * v - b * D) / (E * v + b * D);
        C < 0 && (C = 0);
        var k = (o === i ? -1 : 1) * Ms(C)
          , T = k * (t * m / r)
          , P = k * -(r * g / t)
          , $ = (n + a) / 2
          , R = (e + l) / 2
          , z = $ + (c * T - f * P)
          , Y = R + (f * T + c * P)
          , j = (g - T) / t
          , H = (m - P) / r
          , V = (-g - T) / t
          , J = (-m - P) / r
          , de = j * j + H * H
          , w = (H < 0 ? -1 : 1) * Math.acos(j / Ms(de))
          , Q = (j * J - H * V < 0 ? -1 : 1) * Math.acos((j * V + H * J) / Ms(de * (V * V + J * J)));
        isNaN(Q) && (Q = h),
        !i && Q > 0 ? Q -= d : i && Q < 0 && (Q += d),
        w %= d,
        Q %= d;
        var Pe = Math.ceil(ro(Q) / (d / 4)), ye = [], le = Q / Pe, ve = 4 / 3 * Xo(le / 2) / (1 + Go(le / 2)), Ee = c * t, S = f * t, F = f * -r, A = c * r, O;
        for (O = 0; O < Pe; O++)
            s = w + O * le,
            g = Go(s),
            m = Xo(s),
            j = Go(s += le),
            H = Xo(s),
            ye.push(g - ve * m, m + ve * g, j + ve * H, H - ve * j, j, H);
        for (O = 0; O < ye.length; O += 2)
            g = ye[O],
            m = ye[O + 1],
            ye[O] = g * Ee + m * F + z,
            ye[O + 1] = g * S + m * A + Y;
        return ye[O - 2] = a,
        ye[O - 1] = l,
        ye
    }
}
function RD(n) {
    var e = (n + "").replace(xD, function(T) {
        var P = +T;
        return P < 1e-4 && P > -1e-4 ? 0 : P
    }).match(bD) || [], t = [], r = 0, s = 0, o = 2 / 3, i = e.length, a = 0, l = "ERROR: malformed path: " + n, u, c, f, h, d, p, _, g, m, D, v, y, E, b, C, k = function(P, $, R, z) {
        D = (R - P) / 3,
        v = (z - $) / 3,
        _.push(P + D, $ + v, R - D, z - v, R, z)
    };
    if (!n || !isNaN(e[0]) || isNaN(e[1]))
        return console.log(l),
        t;
    for (u = 0; u < i; u++)
        if (E = d,
        isNaN(e[u]) ? (d = e[u].toUpperCase(),
        p = d !== e[u]) : u--,
        f = +e[u + 1],
        h = +e[u + 2],
        p && (f += r,
        h += s),
        u || (g = f,
        m = h),
        d === "M")
            _ && (_.length < 8 ? t.length -= 1 : a += _.length),
            r = g = f,
            s = m = h,
            _ = [f, h],
            t.push(_),
            u += 2,
            d = "L";
        else if (d === "C")
            _ || (_ = [0, 0]),
            p || (r = s = 0),
            _.push(f, h, r + e[u + 3] * 1, s + e[u + 4] * 1, r += e[u + 5] * 1, s += e[u + 6] * 1),
            u += 6;
        else if (d === "S")
            D = r,
            v = s,
            (E === "C" || E === "S") && (D += r - _[_.length - 4],
            v += s - _[_.length - 3]),
            p || (r = s = 0),
            _.push(D, v, f, h, r += e[u + 3] * 1, s += e[u + 4] * 1),
            u += 4;
        else if (d === "Q")
            D = r + (f - r) * o,
            v = s + (h - s) * o,
            p || (r = s = 0),
            r += e[u + 3] * 1,
            s += e[u + 4] * 1,
            _.push(D, v, r + (f - r) * o, s + (h - s) * o, r, s),
            u += 4;
        else if (d === "T")
            D = r - _[_.length - 4],
            v = s - _[_.length - 3],
            _.push(r + D, s + v, f + (r + D * 1.5 - f) * o, h + (s + v * 1.5 - h) * o, r = f, s = h),
            u += 2;
        else if (d === "H")
            k(r, s, r = f, s),
            u += 1;
        else if (d === "V")
            k(r, s, r, s = f + (p ? s - r : 0)),
            u += 1;
        else if (d === "L" || d === "Z")
            d === "Z" && (f = g,
            h = m,
            _.closed = !0),
            (d === "L" || ro(r - f) > .5 || ro(s - h) > .5) && (k(r, s, f, h),
            d === "L" && (u += 2)),
            r = f,
            s = h;
        else if (d === "A") {
            if (b = e[u + 4],
            C = e[u + 5],
            D = e[u + 6],
            v = e[u + 7],
            c = 7,
            b.length > 1 && (b.length < 3 ? (v = D,
            D = C,
            c--) : (v = C,
            D = b.substr(2),
            c -= 2),
            C = b.charAt(1),
            b = b.charAt(0)),
            y = PD(r, s, +e[u + 1], +e[u + 2], +e[u + 3], +b, +C, (p ? r : 0) + D * 1, (p ? s : 0) + v * 1),
            u += c,
            y)
                for (c = 0; c < y.length; c++)
                    _.push(y[c]);
            r = _[_.length - 2],
            s = _[_.length - 1]
        } else
            console.log(l);
    return u = _.length,
    u < 6 ? (t.pop(),
    u = 0) : _[0] === _[u - 2] && _[1] === _[u - 1] && (_.closed = !0),
    t.totalPoints = a + u,
    t
}
function AD(n) {
    SD(n[0]) && (n = [n]);
    var e = "", t = n.length, r, s, o, i;
    for (s = 0; s < t; s++) {
        for (i = n[s],
        e += "M" + qr(i[0]) + "," + qr(i[1]) + " C",
        r = i.length,
        o = 2; o < r; o++)
            e += qr(i[o++]) + "," + qr(i[o++]) + " " + qr(i[o++]) + "," + qr(i[o++]) + " " + qr(i[o++]) + "," + qr(i[o]) + " ";
        i.closed && (e += "z")
    }
    return e
}
/*!
 * CustomEase 3.12.3
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Tt, Nd, Vd = function() {
    return Tt || typeof window < "u" && (Tt = window.gsap) && Tt.registerPlugin && Tt
}, uc = function() {
    Tt = Vd(),
    Tt ? (Tt.registerEase("_CE", vo.create),
    Nd = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
}, FD = 1e20, Ko = function(e) {
    return ~~(e * 1e3 + (e < 0 ? -.5 : .5)) / 1e3
}, OD = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi, MD = /[cLlsSaAhHvVtTqQ]/g, LD = function(e) {
    var t = e.length, r = FD, s;
    for (s = 1; s < t; s += 6)
        +e[s] < r && (r = +e[s]);
    return r
}, ID = function(e, t, r) {
    !r && r !== 0 && (r = Math.max(+e[e.length - 1], +e[1]));
    var s = +e[0] * -1, o = -r, i = e.length, a = 1 / (+e[i - 2] + s), l = -t || (Math.abs(+e[i - 1] - +e[1]) < .01 * (+e[i - 2] - +e[0]) ? LD(e) + o : +e[i - 1] + o), u;
    for (l ? l = 1 / l : l = -a,
    u = 0; u < i; u += 2)
        e[u] = (+e[u] + s) * a,
        e[u + 1] = (+e[u + 1] + o) * l
}, BD = function n(e, t, r, s, o, i, a, l, u, c, f) {
    var h = (e + r) / 2, d = (t + s) / 2, p = (r + o) / 2, _ = (s + i) / 2, g = (o + a) / 2, m = (i + l) / 2, D = (h + p) / 2, v = (d + _) / 2, y = (p + g) / 2, E = (_ + m) / 2, b = (D + y) / 2, C = (v + E) / 2, k = a - e, T = l - t, P = Math.abs((r - a) * T - (s - l) * k), $ = Math.abs((o - a) * T - (i - l) * k), R;
    return c || (c = [{
        x: e,
        y: t
    }, {
        x: a,
        y: l
    }],
    f = 1),
    c.splice(f || c.length - 1, 0, {
        x: b,
        y: C
    }),
    (P + $) * (P + $) > u * (k * k + T * T) && (R = c.length,
    n(e, t, h, d, D, v, b, C, u, c, f),
    n(b, C, y, E, g, m, a, l, u, c, f + 1 + (c.length - R))),
    c
}, vo = function() {
    function n(t, r, s) {
        Nd || uc(),
        this.id = t,
        this.setData(r, s)
    }
    var e = n.prototype;
    return e.setData = function(r, s) {
        s = s || {},
        r = r || "0,0,1,1";
        var o = r.match(OD), i = 1, a = [], l = [], u = s.precision || 1, c = u <= 1, f, h, d, p, _, g, m, D, v;
        if (this.data = r,
        (MD.test(r) || ~r.indexOf("M") && r.indexOf("C") < 0) && (o = RD(r)[0]),
        f = o.length,
        f === 4)
            o.unshift(0, 0),
            o.push(1, 1),
            f = 8;
        else if ((f - 2) % 6)
            throw "Invalid CustomEase";
        for ((+o[0] != 0 || +o[f - 2] != 1) && ID(o, s.height, s.originY),
        this.segment = o,
        p = 2; p < f; p += 6)
            h = {
                x: +o[p - 2],
                y: +o[p - 1]
            },
            d = {
                x: +o[p + 4],
                y: +o[p + 5]
            },
            a.push(h, d),
            BD(h.x, h.y, +o[p], +o[p + 1], +o[p + 2], +o[p + 3], d.x, d.y, 1 / (u * 2e5), a, a.length - 1);
        for (f = a.length,
        p = 0; p < f; p++)
            m = a[p],
            D = a[p - 1] || m,
            (m.x > D.x || D.y !== m.y && D.x === m.x || m === D) && m.x <= 1 ? (D.cx = m.x - D.x,
            D.cy = m.y - D.y,
            D.n = m,
            D.nx = m.x,
            c && p > 1 && Math.abs(D.cy / D.cx - a[p - 2].cy / a[p - 2].cx) > 2 && (c = 0),
            D.cx < i && (D.cx ? i = D.cx : (D.cx = .001,
            p === f - 1 && (D.x -= .001,
            i = Math.min(i, .001),
            c = 0)))) : (a.splice(p--, 1),
            f--);
        if (f = 1 / i + 1 | 0,
        _ = 1 / f,
        g = 0,
        m = a[0],
        c) {
            for (p = 0; p < f; p++)
                v = p * _,
                m.nx < v && (m = a[++g]),
                h = m.y + (v - m.x) / m.cx * m.cy,
                l[p] = {
                    x: v,
                    cx: _,
                    y: h,
                    cy: 0,
                    nx: 9
                },
                p && (l[p - 1].cy = h - l[p - 1].y);
            l[f - 1].cy = a[a.length - 1].y - h
        } else {
            for (p = 0; p < f; p++)
                m.nx < p * _ && (m = a[++g]),
                l[p] = m;
            g < a.length - 1 && (l[p - 1] = a[a.length - 2])
        }
        return this.ease = function(y) {
            var E = l[y * f | 0] || l[f - 1];
            return E.nx < y && (E = E.n),
            E.y + (y - E.x) / E.cx * E.cy
        }
        ,
        this.ease.custom = this,
        this.id && Tt && Tt.registerEase(this.id, this.ease),
        this
    }
    ,
    e.getSVGData = function(r) {
        return n.getSVGData(this, r)
    }
    ,
    n.create = function(r, s, o) {
        return new n(r,s,o).ease
    }
    ,
    n.register = function(r) {
        Tt = r,
        uc()
    }
    ,
    n.get = function(r) {
        return Tt.parseEase(r)
    }
    ,
    n.getSVGData = function(r, s) {
        s = s || {};
        var o = s.width || 100, i = s.height || 100, a = s.x || 0, l = (s.y || 0) + i, u = Tt.utils.toArray(s.path)[0], c, f, h, d, p, _, g, m, D, v;
        if (s.invert && (i = -i,
        l = 0),
        typeof r == "string" && (r = Tt.parseEase(r)),
        r.custom && (r = r.custom),
        r instanceof n)
            c = AD(kD([r.segment], o, 0, 0, -i, a, l));
        else {
            for (c = [a, l],
            g = Math.max(5, (s.precision || 1) * 200),
            d = 1 / g,
            g += 2,
            m = 5 / g,
            D = Ko(a + d * o),
            v = Ko(l + r(d) * -i),
            f = (v - l) / (D - a),
            h = 2; h < g; h++)
                p = Ko(a + h * d * o),
                _ = Ko(l + r(h * d) * -i),
                (Math.abs((_ - v) / (p - D) - f) > m || h === g - 1) && (c.push(D, v),
                f = (_ - v) / (p - D)),
                D = p,
                v = _;
            c = "M" + c.join(",")
        }
        return u && u.setAttribute("d", c),
        c
    }
    ,
    n
}();
Vd() && Tt.registerPlugin(vo);
vo.version = "3.12.3";
const HD = Tr( () => (Va.registerPlugin(ne, Fe, ws, Es, vo),
{
    provide: {
        gsap: Va,
        ScrollTrigger: ne,
        Observer: Fe,
        ScrollToPlugin: ws,
        TextPlugin: Es,
        CustomEase: vo
    }
}))
  , $D = Tr({
    name: "nuxt:chunk-reload",
    setup(n) {
        const e = Vr()
          , t = xs()
          , r = new Set;
        e.beforeEach( () => {
            r.clear()
        }
        ),
        n.hook("app:chunkError", ({error: o}) => {
            r.add(o)
        }
        );
        function s(o) {
            const a = "href"in o && o.href.startsWith("#") ? t.app.baseURL + o.href : Eo(t.app.baseURL, o.fullPath);
            O_({
                path: a,
                persistState: !0
            })
        }
        n.hook("app:manifest:update", () => {
            e.beforeResolve(s)
        }
        ),
        e.onError( (o, i) => {
            r.has(o) && s(i)
        }
        )
    }
})
  , ND = Tr(n => {
    const e = "GTM-KJVWKWTT";
    (function(t, r, s, o, i) {
        t[o] = t[o] || [],
        t[o].push({
            "gtm.start": new Date().getTime(),
            event: "gtm.js"
        });
        var a = r.getElementsByTagName(s)[0]
          , l = r.createElement(s)
          , u = o != "dataLayer" ? "&l=" + o : "";
        l.async = !0,
        l.src = "https://www.googletagmanager.com/gtm.js?id=" + i + u,
        a.parentNode.insertBefore(l, a)
    }
    )(window, document, "script", "dataLayer", e),
    n.hook("app:mounted", () => {
        const t = document.createElement("noscript");
        t.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${e}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        document.body.insertBefore(t, document.body.firstChild)
    }
    )
}
)
  , VD = [W_, X_, I0, B0, H0, V0, j0, HD, $D, ND]
  , jD = (n, e) => e.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, t => {
    var r;
    return ((r = n.params[t.slice(1)]) == null ? void 0 : r.toString()) || ""
}
)
  , Za = (n, e) => {
    const t = n.route.matched.find(s => {
        var o;
        return ((o = s.components) == null ? void 0 : o.default) === n.Component.type
    }
    )
      , r = e ?? (t == null ? void 0 : t.meta.key) ?? (t && jD(n.route, t));
    return typeof r == "function" ? r(n.route) : r
}
  , zD = (n, e) => ({
    default: () => n ? St(th, n === !0 ? {} : n, e) : e
})
  , UD = Nr({
    name: "RouteProvider",
    props: {
        vnode: {
            type: Object,
            required: !0
        },
        route: {
            type: Object,
            required: !0
        },
        vnodeRef: Object,
        renderKey: String,
        trackRootNodes: Boolean
    },
    setup(n) {
        const e = n.renderKey
          , t = n.route
          , r = {};
        for (const s in n.route)
            Object.defineProperty(r, s, {
                get: () => e === n.renderKey ? n.route[s] : t[s]
            });
        return ss(Gt, Ti(r)),
        () => St(n.vnode, {
            ref: n.vnodeRef
        })
    }
})
  , jd = (n, e, t) => (e = e === !0 ? {} : e,
{
    default: () => {
        var r;
        return e ? St(n, e, t) : (r = t.default) == null ? void 0 : r.call(t)
    }
})
  , qD = Nr({
    name: "NuxtPage",
    inheritAttrs: !1,
    props: {
        name: {
            type: String
        },
        transition: {
            type: [Boolean, Object],
            default: void 0
        },
        keepalive: {
            type: [Boolean, Object],
            default: void 0
        },
        route: {
            type: Object
        },
        pageKey: {
            type: [Function, String],
            default: null
        }
    },
    setup(n, {attrs: e, expose: t}) {
        const r = De()
          , s = qe()
          , o = Zt(Gt, null);
        t({
            pageRef: s
        });
        const i = Zt(Lc, null);
        let a;
        const l = r.deferHydration();
        return () => St(Qc, {
            name: n.name,
            route: n.route,
            ...e
        }, {
            default: u => {
                const c = XD(o, u.route, u.Component)
                  , f = o && o.matched.length === u.route.matched.length;
                if (!u.Component)
                    return a && !f ? a : void 0;
                if (a && i && !i.isCurrent(u.route))
                    return a;
                if (c && o && (!i || i != null && i.isCurrent(o)))
                    return f ? a : null;
                const h = Za(u, n.pageKey)
                  , d = !!(n.transition ?? u.route.meta.pageTransition ?? va)
                  , p = d && YD([n.transition, u.route.meta.pageTransition, va, {
                    onAfterLeave: () => {
                        r.callHook("page:transition:finish", u.Component)
                    }
                }].filter(Boolean));
                return a = jd(iu, d && p, zD(n.keepalive ?? u.route.meta.keepalive ?? N_, St(ou, {
                    suspensible: !0,
                    onPending: () => r.callHook("page:start", u.Component),
                    onResolve: () => {
                        $r( () => r.callHook("page:finish", u.Component).finally(l))
                    }
                }, {
                    default: () => St(UD, {
                        key: h,
                        vnode: u.Component,
                        route: u.route,
                        renderKey: h,
                        trackRootNodes: d,
                        vnodeRef: s
                    })
                }))).default(),
                a
            }
        })
    }
});
function WD(n) {
    return Array.isArray(n) ? n : n ? [n] : []
}
function YD(n) {
    const e = n.map(t => ({
        ...t,
        onAfterLeave: WD(t.onAfterLeave)
    }));
    return c_(...e)
}
function XD(n, e, t) {
    if (!n)
        return !1;
    const r = e.matched.findIndex(s => {
        var o;
        return ((o = s.components) == null ? void 0 : o.default) === (t == null ? void 0 : t.type)
    }
    );
    return !r || r === -1 ? !1 : e.matched.slice(0, r).some( (s, o) => {
        var i, a, l;
        return ((i = s.components) == null ? void 0 : i.default) !== ((l = (a = n.matched[o]) == null ? void 0 : a.components) == null ? void 0 : l.default)
    }
    ) || t && Za({
        route: e,
        Component: t
    }) !== Za({
        route: n,
        Component: t
    })
}
const GD = Nr({
    name: "LayoutLoader",
    inheritAttrs: !1,
    props: {
        name: String,
        layoutProps: Object
    },
    async setup(n, e) {
        const t = await Tn[n.name]().then(r => r.default || r);
        return () => St(t, n.layoutProps, e.slots)
    }
})
  , KD = Nr({
    name: "NuxtLayout",
    inheritAttrs: !1,
    props: {
        name: {
            type: [String, Boolean, Object],
            default: null
        }
    },
    setup(n, e) {
        const t = De()
          , r = Zt(Gt)
          , s = r === ki() ? Jg() : r
          , o = Qe( () => W(n.name) ?? s.meta.layout ?? "default")
          , i = qe();
        e.expose({
            layoutRef: i
        });
        const a = t.deferHydration();
        return () => {
            const l = o.value && o.value in Tn
              , u = s.meta.layoutTransition ?? $_;
            return jd(iu, l && u, {
                default: () => St(ou, {
                    suspensible: !0,
                    onResolve: () => {
                        $r(a)
                    }
                }, {
                    default: () => St(JD, {
                        layoutProps: rh(e.attrs, {
                            ref: i
                        }),
                        key: o.value,
                        name: o.value,
                        shouldProvide: !n.name,
                        hasTransition: !!u
                    }, e.slots)
                })
            }).default()
        }
    }
})
  , JD = Nr({
    name: "NuxtLayoutProvider",
    inheritAttrs: !1,
    props: {
        name: {
            type: [String, Boolean]
        },
        layoutProps: {
            type: Object
        },
        hasTransition: {
            type: Boolean
        },
        shouldProvide: {
            type: Boolean
        }
    },
    setup(n, e) {
        const t = n.name;
        return n.shouldProvide && ss(Lc, {
            isCurrent: r => t === (r.meta.layout ?? "default")
        }),
        () => {
            var r, s;
            return !t || typeof t == "string" && !(t in Tn) ? (s = (r = e.slots).default) == null ? void 0 : s.call(r) : St(GD, {
                key: t,
                layoutProps: n.layoutProps,
                name: t
            }, e.slots)
        }
    }
});
const fr = (n, e) => {
    const t = n.__vccOpts || n;
    for (const [r,s] of e)
        t[r] = s;
    return t
}
  , QD = {
    __name: "app",
    setup(n) {
        return De().hook("page:start", () => {
            window.scrollTo(0, 0)
        }
        ),
        (t, r) => {
            const s = qD
              , o = KD;
            return X(),
            ot(o, null, {
                default: Er( () => [xt(s)]),
                _: 1
            })
        }
    }
}
  , ZD = fr(QD, [["__scopeId", "data-v-85b713b0"]]);
const ey = {}
  , ty = {
    href: "/"
}
  , ry = pc('<svg class="logo" xmlns="http://www.w3.org/2000/svg" width="115" height="27" viewBox="0 0 115 27" fill="none" data-v-e3af5e5f><path d="M113.933 7.09136H113.737V6.98657H114.239V7.09136H114.042V7.63165H113.933L113.933 7.09136Z" data-v-e3af5e5f></path><path d="M114.39 6.98657H114.507L114.695 7.28943L114.883 6.98657H115V7.63165H114.891V7.16828L114.696 7.47114H114.692L114.499 7.16828V7.63165H114.392L114.39 6.98657Z" data-v-e3af5e5f></path><path d="M33.2559 8.41919H35.1694L38.2798 13.4417L41.3909 8.41919H43.3044V19.0403H41.5075V11.4235L38.2798 16.4309H38.2215L35.023 11.4538V19.0403H33.2559V8.41919Z" data-v-e3af5e5f></path><path d="M56.9888 8.41919H58.6539L64.1303 15.7628V8.41919H65.8981V19.0403H64.3933L58.7559 11.4841V19.0403H56.9888V8.41919Z" data-v-e3af5e5f></path><path d="M68.5298 8.41919H72.3416C75.5547 8.41919 77.7749 10.7106 77.7749 13.6991V13.73C77.7749 16.7192 75.5547 19.0403 72.3416 19.0403H68.5298V8.41919ZM72.3416 17.3413C74.489 17.3413 75.8911 15.8391 75.8911 13.7603V13.73C75.8911 11.6512 74.489 10.1188 72.3416 10.1188H70.3232V17.3413H72.3416Z" data-v-e3af5e5f></path><path d="M79.9473 8.41919H87.557V10.1188H81.7436V13.0165H86.8993V14.7186H81.7436V19.0427H79.9473V8.41919Z" data-v-e3af5e5f></path><path d="M89.6304 8.41919H91.4267V19.0403H89.6304V8.41919Z" data-v-e3af5e5f></path><path d="M93.4712 17.4926L94.5521 16.1601C95.5305 17.0402 96.5088 17.5405 97.7798 17.5405C98.8875 17.5405 99.5907 17.0099 99.5907 16.2079V16.1722C99.5907 15.4132 99.1826 15.0038 97.2831 14.5483C95.1072 14.0031 93.8799 13.3369 93.8799 11.3774V11.3471C93.8799 9.52636 95.3375 8.26709 97.3705 8.26709C98.8602 8.26709 100.044 8.73712 101.08 9.59965L100.117 11.0109C99.1966 10.2974 98.2765 9.92067 97.3414 9.92067C96.2919 9.92067 95.6768 10.4822 95.6768 11.1799V11.2102C95.6768 12.0297 96.1432 12.3938 98.101 12.8796C100.262 13.4247 101.387 14.2297 101.387 15.9899V16.0202C101.387 18.0081 99.8828 19.1916 97.7361 19.1916C96.1599 19.1998 94.638 18.5936 93.4712 17.4926Z" data-v-e3af5e5f></path><path d="M103.505 8.41919H105.301V12.8348H110.179V8.41919H111.976V19.0403H110.179V14.5641H105.301V19.0403H103.505V8.41919Z" data-v-e3af5e5f></path><path d="M50.7416 13.4677L52.7239 12.5882V14.5368C52.7239 16.4945 51.745 17.4957 50.1534 17.4957C48.5465 17.4957 47.5682 16.4339 47.5682 14.4611V3.57349H45.7725V14.5368C45.7725 17.6174 47.4667 19.2104 50.1248 19.2104C52.7974 19.2104 54.5208 17.6174 54.5208 14.4459V8.31921L50.7416 13.4677Z" data-v-e3af5e5f></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.6641 6.4353H16.5543L16.5559 7.02321H16.6564V6.60091L16.8387 6.87692H16.842L17.0259 6.60091V7.02321H17.1286V6.4353H17.0188L16.8414 6.71131L16.6641 6.4353ZM15.9399 6.53086H16.1244L16.1239 7.02327H16.2271V6.53086H16.4121V6.43536H15.9399V6.53086Z" data-v-e3af5e5f></path><path fill-rule="evenodd" clip-rule="evenodd" d="M25.297 0.919331H0.91435V25.4348H25.297V0.919331ZM0 0V26.3542H26.2114V0H0Z" data-v-e3af5e5f></path><path d="M13.6564 15.468L15.5417 14.6596V16.4506C15.5417 18.2499 14.6107 19.1702 13.0968 19.1702C11.5686 19.1702 10.6381 18.1942 10.6381 16.381V6.37402H8.93018V16.4506C8.93018 19.2821 10.5416 20.7462 13.0697 20.7462C15.6116 20.7462 17.2508 19.2821 17.2508 16.3671V10.7359L13.6564 15.468Z" data-v-e3af5e5f></path></svg>', 1)
  , ny = [ry];
function sy(n, e) {
    return X(),
    me("a", ty, ny)
}
const zd = fr(ey, [["render", sy], ["__scopeId", "data-v-e3af5e5f"]]);
const oy = {
    class: "nav-menu"
}
  , iy = {
    class: "nav-menu__list"
}
  , ay = {
    __name: "HeaderNav",
    setup(n) {
        const e = Oi()
          , {menusArr: t} = cr(e)
          , r = Qe( () => t.value && t.value.get("HeaderMenu"));
        return (!r.value || !t.value.length) && bo("menus-arr", () => e.getMenusArr("HeaderMenu")),
        (s, o) => {
            const i = Ai;
            return X(),
            me("nav", oy, [Xt("ul", iy, [(X(!0),
            me(ds, null, wo(W(r) || [], a => (X(),
            me("li", {
                key: a.text + a.menuType,
                class: "nav-menu__list-item"
            }, [a.active ? (X(),
            ot(i, {
                key: 0,
                class: sn(["nav-menu__list-link", {
                    "nav-menu__list-link-active": String((s._.provides[Gt] || s.$route).path).includes(a.pageSlug),
                    "nav-menu__list-link-orange": a.pageSlug === "careers"
                }]),
                to: a.link ? a.link : `/${a.pageSlug}`,
                target: a.targetLink ? "_blank" : null,
                onClick: o[0] || (o[0] = l => s.emits("link-click"))
            }, {
                default: Er( () => [au(In(a.text), 1)]),
                _: 2
            }, 1032, ["class", "to", "target"])) : at("", !0)]))), 128))])])
        }
    }
}
  , uy = fr(ay, [["__scopeId", "data-v-bc1381d0"]]);
const ly = {
    key: 0,
    class: "header-social-icons"
}
  , cy = {
    key: 0,
    class: "header-social-icons__item"
}
  , fy = ["href"]
  , dy = ["src"]
  , hy = {
    __name: "HeaderSocialIcons",
    setup(n) {
        const e = F0()
          , {data: t} = T_("socials-arr");
        return (!t.value || !t.value.length) && bo("socials-arr", () => e.fetchAllSocials()),
        (r, s) => W(t) && W(t).length ? (X(),
        me("ul", ly, [(X(!0),
        me(ds, null, wo(W(t), o => (X(),
        me(ds, {
            key: o
        }, [o.title ? at("", !0) : (X(),
        me("li", cy, [(X(),
        me("a", {
            key: o.url,
            class: "header-social-icons__link",
            href: o.url,
            target: "_blank"
        }, [o.files ? (X(),
        me("img", {
            key: 0,
            class: "header-social-icons__icon",
            src: r.$config.public.baseUrl + o.files.image,
            alt: "icon"
        }, null, 8, dy)) : at("", !0)], 8, fy))]))], 64))), 128))])) : at("", !0)
    }
}
  , Ud = fr(hy, [["__scopeId", "data-v-127538b3"]]);
const py = {
    key: 0,
    class: "header-lang-switch"
}
  , _y = ["onClick"]
  , gy = ["src", "alt"]
  , my = {
    class: "header-lang-switch__item-button-text"
}
  , Dy = {
    __name: "HeaderLangSwitch",
    async setup(n) {
        let e, t;
        const r = ki()
          , s = xs().public.baseUrl
          , o = P_("locale", {
            maxAge: 264e4
        })
          , i = To()
          , {localeLang: a, localesArr: l} = cr(i);
        [e,t] = uu( () => bo("locales", () => i.fetchLocalesArr())),
        await e,
        t();
        const u = async f => {
            if (r.params.locale !== f.code) {
                a.value = f,
                o.value = f;
                const h = r.fullPath.split("/").slice(2).join("/");
                window.location.replace(["/", a.value.code, "/", h].join(""))
            }
        }
        ;
        function c(f) {
            f.target && (f.target.classList.add("header-lang-switch__item-button-img_errored"),
            f.target.remove())
        }
        return (f, h) => W(l) && W(l).length ? (X(),
        me("ul", py, [(X(!0),
        me(ds, null, wo(W(l).sort( (d, p) => d.customOrder - p.customOrder), d => (X(),
        me("li", {
            class: "header-lang-switch__item",
            key: d
        }, [Xt("button", {
            class: sn(["header-lang-switch__item-button", [{
                "header-lang-switch__item-button_active": d.code === W(a).code
            }]]),
            onClick: p => u(d)
        }, [d.files && d.files.media ? (X(),
        me("img", {
            key: 0,
            class: "header-lang-switch__item-button-img",
            src: [W(s), d.files.media].join(""),
            alt: d.name,
            onError: c
        }, null, 40, gy)) : at("", !0), Xt("span", my, In(d.name), 1)], 10, _y)]))), 128))])) : at("", !0)
    }
}
  , qd = fr(Dy, [["__scopeId", "data-v-f6f65354"]]);
const yy = pc('<span class="bar" data-v-55966b69></span><span class="bar" data-v-55966b69></span><span class="bar" data-v-55966b69></span><span class="bar" data-v-55966b69></span><span class="bar" data-v-55966b69></span><span class="bar" data-v-55966b69></span>', 6)
  , vy = [yy]
  , wy = {
    __name: "HeaderBurger",
    props: {
        isOpen: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["burgerClick"],
    setup(n, {emit: e}) {
        const t = () => {
            e("burgerClick")
        }
        ;
        return (r, s) => (X(),
        me("button", {
            class: "burgerbtn",
            onClick: t
        }, [Xt("span", {
            class: sn(["bars build", {
                open: n.isOpen
            }])
        }, vy, 2)]))
    }
}
  , Ey = fr(wy, [["__scopeId", "data-v-55966b69"]]);
const Cy = {
    key: 0,
    class: "swiper-submenu"
}
  , by = {
    __name: "SwiperSubmenu",
    setup(n) {
        const e = Oi()
          , {menusArr: t} = cr(e);
        function r() {
            t.value.delete("menu-modal"),
            document && document.documentElement.classList.remove("scroll-off")
        }
        return (s, o) => {
            var c, f;
            const i = zd
              , a = Ai
              , l = sh
              , u = oh;
            return W(t) && W(t).has((c = (s._.provides[Gt] || s.$route).name) == null ? void 0 : c.replace("locale-", "")) ? (X(),
            me("div", Cy, [W(t).get((f = (s._.provides[Gt] || s.$route).name) == null ? void 0 : f.replace("locale-", "")) ? (X(),
            ot(i, {
                key: 0,
                class: "swiper-submenu__logo"
            })) : at("", !0), xt(u, {
                modules: ["SwiperFreeMode"in s ? s.SwiperFreeMode : W(nh)],
                "slides-per-view": "auto",
                "free-mode": !0,
                class: "swiper-submenu__list"
            }, {
                default: Er( () => {
                    var h;
                    return [(X(!0),
                    me(ds, null, wo(W(t).get((h = (s._.provides[Gt] || s.$route).name) == null ? void 0 : h.replace("locale-", "")), d => (X(),
                    ot(l, {
                        class: sn(["swiper-submenu__list-item", {
                            "swiper-submenu__list-item_active": String((s._.provides[Gt] || s.$route).hash).toLowerCase() === String(d.anchorLink).toLowerCase(),
                            "swiper-submenu__list-item_orange": ["#licensing", "#powerhouse"].includes(String(d.anchorLink).toLowerCase()),
                            "swiper-submenu__list-item_orange-non-active": d.orange_non_active
                        }]),
                        key: d.anchorLink + d.title,
                        onClick: r
                    }, {
                        default: Er( () => [xt(a, {
                            class: "swiper-submenu__list-item-link",
                            href: d.anchorLink.toLowerCase().replace("#/", "/"),
                            external: String(d.anchorLink).toLowerCase().includes("http")
                        }, {
                            default: Er( () => [au(In(d.title), 1)]),
                            _: 2
                        }, 1032, ["href", "external"])]),
                        _: 2
                    }, 1032, ["class"]))), 128))]
                }
                ),
                _: 1
            }, 8, ["modules"])])) : at("", !0)
        }
    }
}
  , xy = fr(by, [["__scopeId", "data-v-a5789d02"]]);
const Ty = {
    class: "header__container container_wide"
}
  , Sy = {
    class: "header__inner"
}
  , ky = {
    class: "header__left"
}
  , Py = {
    class: "header__controls"
}
  , Ry = {
    class: "header__container-bottom"
}
  , Ay = {
    __name: "HeaderComponent",
    setup(n) {
        const e = Oi()
          , {menusArr: t} = cr(e)
          , r = qe(null)
          , s = qe(!1);
        let o = null;
        function i() {
            r.value && document.documentElement.style.setProperty("--header-height", r.value.clientHeight + 30 + "px")
        }
        function a() {
            t.value.has("menu-modal") ? (t.value.delete("menu-modal"),
            document && document.documentElement.classList.remove("scroll-off")) : (t.value.set("menu-modal", !0),
            document && document.documentElement.classList.add("scroll-off"))
        }
        return Cs(r, l => {
            l && i()
        }
        ),
        nu(async () => {
            await $r(),
            i(),
            window.addEventListener("resize", i),
            o = new MutationObserver(i),
            o.observe(r.value, {
                childList: !0,
                subtree: !0
            })
        }
        ),
        fc( () => {
            window.removeEventListener("resize", i),
            o && o.disconnect()
        }
        ),
        (l, u) => {
            const c = zd
              , f = uy
              , h = Ud
              , d = qd
              , p = Ey
              , _ = xy;
            return X(),
            me("header", {
                ref_key: "headerEl",
                ref: r,
                class: "header"
            }, [Xt("div", Ty, [Xt("div", Sy, [Xt("div", ky, [xt(c, {
                onClick: u[0] || (u[0] = g => s.value = !1)
            }), xt(f, {
                class: "header__desktop"
            })]), Xt("div", Py, [xt(h, {
                class: "header__controls-icons"
            }), xt(d, {
                class: "header__controls-lang"
            })]), xt(p, {
                "is-open": W(t).get("menu-modal"),
                onBurgerClick: a
            }, null, 8, ["is-open"])])]), Xt("div", Ry, [xt(_, {
                class: "container_wide"
            })])], 512)
        }
    }
}
  , Fy = fr(Ay, [["__scopeId", "data-v-60bb2c74"]])
  , Oy = ["innerHTML"]
  , Wd = Nr({
    __name: "nuxt-icon",
    props: {
        name: {},
        filled: {
            type: Boolean,
            default: !1
        }
    },
    async setup(n) {
        let e, t;
        const r = n
          , s = qe("");
        let o = !1;
        async function i() {
            try {
                const l = await Object.assign({
                    "/assets/icons/404.svg": () => M( () => import("./404.e5bcab49.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/PS_4.svg": () => M( () => import("./PS_4.f261d8da.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/PS_5.svg": () => M( () => import("./PS_5.2eb7fc00.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/air.svg": () => M( () => import("./air.101b3af7.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/arrow-down-mobile.svg": () => M( () => import("./arrow-down-mobile.ed60b144.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/arrow-down.svg": () => M( () => import("./arrow-down.f2bc6767.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/arrow-left.svg": () => M( () => import("./arrow-left.17015e49.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/arrow-long-right.svg": () => M( () => import("./arrow-long-right.ea7223b5.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/arrow-right.svg": () => M( () => import("./arrow-right.094b667d.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/arrow.svg": () => M( () => import("./arrow.bd63bd8f.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/audio-button.svg": () => M( () => import("./audio-button.92612aaf.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/audio-play.svg": () => M( () => import("./audio-play.3bd17454.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/audio-stop.svg": () => M( () => import("./audio-stop.9de5b9c6.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/close.svg": () => M( () => import("./close.eb8ead8b.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/discord.svg": () => M( () => import("./discord.94371bf2.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/facebook.svg": () => M( () => import("./facebook.9fd22618.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/hook.svg": () => M( () => import("./hook.51e18201.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/hot.svg": () => M( () => import("./hot.6c16dbb9.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/img-full-screen.svg": () => M( () => import("./img-full-screen.54644c2f.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/instagram.svg": () => M( () => import("./instagram.107ab57e.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/instagramd.svg": () => M( () => import("./instagramd.56d20564.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/microsoft.svg": () => M( () => import("./microsoft.c728718c.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/nvidia.svg": () => M( () => import("./nvidia.046a56c4.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/passion.svg": () => M( () => import("./passion.363e288c.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/platforms/ps_4.svg": () => M( () => import("./ps_4.b6e0d37e.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/platforms/ps_5.svg": () => M( () => import("./ps_5.d19ea81e.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/platforms/steam.svg": () => M( () => import("./steam.414c09a2.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/platforms/xbox_one.svg": () => M( () => import("./xbox_one.ade5a555.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/platforms/xbox_sx.svg": () => M( () => import("./xbox_sx.cae4c013.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/plus.svg": () => M( () => import("./plus.38c9615b.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/powerhouse-new.svg": () => M( () => import("./powerhouse-new.18d26a5d.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/powerhouse-project.svg": () => M( () => import("./powerhouse-project.f5c8b01f.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/powerhouse.svg": () => M( () => import("./powerhouse.ec7d98aa.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/projects.svg": () => M( () => import("./projects.e5e66850.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/rating-bg.svg": () => M( () => import("./rating-bg.4cc74316.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/social/discord.svg": () => M( () => import("./discord.6b618213.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/social/instagram.svg": () => M( () => import("./instagram.74720864.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/social/linked-in.svg": () => M( () => import("./linked-in.3a146867.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/social/twitter.svg": () => M( () => import("./twitter.b30b52ba.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/social/youtube.svg": () => M( () => import("./youtube.8bb55d36.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/sorting.svg": () => M( () => import("./sorting.637dd2fd.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/sound-button.svg": () => M( () => import("./sound-button.eb889886.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/sound.svg": () => M( () => import("./sound.bf7906f0.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/steam-logo.svg": () => M( () => import("./steam-logo.5c8b0a91.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/success.svg": () => M( () => import("./success.7cac1b4b.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/svg3.svg": () => M( () => import("./svg3.3360bfe8.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/tencent.svg": () => M( () => import("./tencent.d4997aee.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/ticktok.svg": () => M( () => import("./ticktok.9bde1cd6.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/twitter.svg": () => M( () => import("./twitter.9f07c3b7.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/twitter2.svg": () => M( () => import("./twitter2.f0fe225f.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/twitter3.svg": () => M( () => import("./twitter3.72ab4276.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/union.svg": () => M( () => import("./union.2c7ab5a9.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/vk.svg": () => M( () => import("./vk.8b674cbe.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/xbox-one.svg": () => M( () => import("./xbox-one.8c636813.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/xbox-series.svg": () => M( () => import("./xbox-series.d35ff806.js"), [], import.meta.url).then(u => u.default),
                    "/assets/icons/youtube.svg": () => M( () => import("./youtube.c3cf5bf5.js"), [], import.meta.url).then(u => u.default)
                })[`/assets/icons/${r.name}.svg`]();
                l.includes("stroke") && (o = !0),
                s.value = l
            } catch {
                console.error(`[nuxt-icons] Icon '${r.name}' doesn't exist in 'assets/icons'`)
            }
        }
        return [e,t] = uu( () => i()),
        await e,
        t(),
        ih(i),
        (a, l) => (X(),
        me("span", {
            class: sn(["nuxt-icon", {
                "nuxt-icon--fill": !a.filled,
                "nuxt-icon--stroke": W(o) && !a.filled
            }]),
            innerHTML: W(s)
        }, null, 10, Oy))
    }
});
const My = {
    __name: "UiButton",
    props: {
        text: {
            type: String,
            required: !1
        },
        tag: {
            type: String,
            required: !1,
            default: () => "button"
        },
        icon: {
            type: String,
            required: !1
        },
        modifier: {
            type: String,
            required: !1,
            default: () => "red"
        },
        path: {
            type: String,
            required: !1
        },
        target: {
            type: Boolean,
            default: !1
        },
        download: {
            type: String,
            default: null
        },
        isAnimated: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["click-button"],
    setup(n, {emit: e}) {
        var m, D, v;
        const t = n
          , r = sf()
          , {randomAnimationSymbols: s} = cr(r)
          , o = Qe( () => {
            switch (t.modifier) {
            case "red":
                return "ui-button_red";
            case "white":
                return "ui-button_white";
            case "yellow":
                return "ui-button_yellow";
            default:
                return ""
            }
        }
        )
          , i = () => {
            e("click-button")
        }
          , a = qe(null)
          , l = (D = (m = s.value) == null ? void 0 : m.text) == null ? void 0 : D.split("")
          , u = qe(t.text)
          , c = qe((v = u.value) == null ? void 0 : v.split(""));
        function f(y, E) {
            return Math.floor(Math.random() * (E - y + 1) + y)
        }
        function h(y) {
            const E = [];
            for (let b = 0; b < c.value.length - y; b++) {
                const C = l[f(0, l.length - 1)];
                E.push(C)
            }
            return E
        }
        function d(y, E) {
            setTimeout( () => u.value = y, 50 * E)
        }
        function p() {
            if (t.isAnimated && (l != null && l.length) && t.text) {
                g("left");
                for (let y = 0; y <= c.value.length; y++) {
                    const E = h(y)
                      , b = c.value.slice(0, y).concat(E).join("");
                    d(b, y)
                }
            }
        }
        function _() {
            t.isAnimated && (l != null && l.length) && t.text && (g("right"),
            setTimeout( () => {
                for (let y = c.value.length; y >= 0; y--) {
                    const b = h(y).concat(c.value.slice(c.value.length - y)).join("");
                    d(b, y)
                }
            }
            , 100))
        }
        function g(y) {
            a.value.style.justifyContent = y
        }
        return Cs( () => t.text, () => u.value = t.text),
        nu( () => {
            t.isAnimated && (l != null && l.length) && t.text && a.value && (a.value.style.width = a.value.offsetWidth + "px",
            a.value.style.textWrap = "nowrap",
            a.value.style.overflow = "hidden",
            a.value.style.display = "flex")
        }
        ),
        (y, E) => {
            const b = Wd
              , C = Ai;
            return X(),
            me("div", {
                onClick: i
            }, [n.tag === "link" ? (X(),
            ot(C, {
                key: 0,
                onMouseenter: p,
                onMouseleave: _,
                to: n.path,
                class: sn(["ui-button", W(o)]),
                "no-prefetch": "",
                download: n.download ? n.download : null,
                target: n.target ? "_blank" : null
            }, {
                default: Er( () => [n.text ? (X(),
                me("span", {
                    key: 0,
                    ref_key: "textEl",
                    ref: a
                }, In(W(u)), 513)) : at("", !0), n.icon ? (X(),
                ot(b, {
                    key: 1,
                    name: n.icon,
                    class: "ui-button__icon"
                }, null, 8, ["name"])) : at("", !0)]),
                _: 1
            }, 8, ["to", "class", "download", "target"])) : (X(),
            ot(_c(n.tag), {
                key: 1,
                onMouseenter: p,
                onMouseleave: _,
                class: sn(["ui-button", W(o)]),
                href: n.path,
                target: n.target ? "_blank" : null
            }, {
                default: Er( () => [n.text ? (X(),
                me("span", {
                    key: 0,
                    ref_key: "textEl",
                    ref: a
                }, In(W(u)), 513)) : at("", !0), n.icon ? (X(),
                ot(b, {
                    key: 1,
                    name: n.icon,
                    class: "ui-button__icon"
                }, null, 8, ["name"])) : at("", !0)]),
                _: 1
            }, 40, ["class", "href", "target"]))])
        }
    }
}
  , Ly = fr(My, [["__scopeId", "data-v-655fdaf9"]]);
const Iy = n => (ah("data-v-0a0eea83"),
n = n(),
uh(),
n)
  , By = {
    key: 0,
    class: "nav-menu"
}
  , Hy = {
    class: "nav-menu__list"
}
  , $y = Iy( () => Xt("div", {
    class: "nav-menu__gradient"
}, null, -1))
  , Ny = {
    __name: "HeaderMenu",
    setup(n) {
        const e = Oi()
          , {menusArr: t} = cr(e)
          , r = Qe( () => t.value && t.value.get("HeaderMenu"))
          , s = Qe( () => t.value && t.value.get("menu-modal"));
        (!r.value || !t.value.length) && bo("menus-arr", () => e.getMenusArr("HeaderMenu"));
        function o() {
            t.value.delete("menu-modal"),
            document && document.documentElement.classList.remove("scroll-off")
        }
        return (i, a) => {
            const l = Ai
              , u = Ud
              , c = qd;
            return X(),
            ot(iu, {
                name: "fade"
            }, {
                default: Er( () => [W(s) ? (X(),
                me("nav", By, [Xt("ul", Hy, [(X(!0),
                me(ds, null, wo(W(r) || [], f => (X(),
                me("li", {
                    key: f.text + f.menuType,
                    class: "nav-menu__list-item"
                }, [f.active ? (X(),
                ot(l, {
                    key: 0,
                    class: sn(["nav-menu__list-link", {
                        "nav-menu__list-link-active": String((i._.provides[Gt] || i.$route).path).includes(f.pageSlug),
                        "nav-menu__list-link-orange": f.pageSlug === "careers"
                    }]),
                    to: f.link ? f.link : `/${f.pageSlug}`,
                    target: f.targetLink ? "_blank" : null,
                    onClick: o
                }, {
                    default: Er( () => [au(In(f.text), 1)]),
                    _: 2
                }, 1032, ["class", "to", "target"])) : at("", !0)]))), 128))]), xt(u, {
                    class: "nav-menu__icons"
                }), xt(c, {
                    class: "nav-menu__lang"
                }), $y])) : at("", !0)]),
                _: 1
            })
        }
    }
}
  , Vy = fr(Ny, [["__scopeId", "data-v-0a0eea83"]]);
const jy = {
    class: "error-page"
}
  , zy = {
    class: "error-page__content-block container"
}
  , Uy = {
    key: 0,
    class: "error-page__content-block__text"
}
  , qy = {
    __name: "error",
    async setup(n) {
        let e, t;
        const r = sf()
          , {errorText: s, errorButtonText: o} = cr(r);
        return s != null && s.text || ([e,t] = uu( () => r.fetchAllStaticTexts()),
        await e,
        t()),
        (i, a) => {
            var h, d, p, _;
            const l = Fy
              , u = Wd
              , c = Ly
              , f = Vy;
            return X(),
            me("div", jy, [xt(l), Xt("div", zy, [xt(u, {
                class: "error-page__content-block__icon",
                name: "404"
            }), (h = W(s)) != null && h.text ? (X(),
            me("p", Uy, In((d = W(s)) == null ? void 0 : d.text), 1)) : at("", !0), (p = W(o)) != null && p.text ? (X(),
            ot(c, {
                key: 1,
                text: (_ = W(o)) == null ? void 0 : _.text,
                path: `/${(i._.provides[Gt] || i.$route).params.locale}/`,
                tag: "link",
                modifier: "white",
                icon: "arrow-right"
            }, null, 8, ["text", "path"])) : at("", !0)]), xt(f)])
        }
    }
}
  , Wy = fr(qy, [["__scopeId", "data-v-d0b5c0f2"]])
  , Yy = {
    __name: "nuxt-root",
    setup(n) {
        const e = () => null
          , t = De()
          , r = t.deferHydration()
          , s = !1;
        ss(Gt, ki()),
        t.hooks.callHookWith(a => a.map(l => l()), "vue:setup");
        const o = Pi();
        lh( (a, l, u) => {
            if (t.hooks.callHook("vue:error", a, l, u).catch(c => console.error("[nuxt] Error in `vue:error` hook", c)),
            C_(a) && (a.fatal || a.unhandled))
                return t.runWithContext( () => Zn(a)),
                !1
        }
        );
        const i = !1;
        return (a, l) => (X(),
        ot(ou, {
            onResolve: W(r)
        }, {
            default: Er( () => [W(o) ? (X(),
            ot(W(Wy), {
                key: 0,
                error: W(o)
            }, null, 8, ["error"])) : W(i) ? (X(),
            ot(W(e), {
                key: 1,
                context: W(i)
            }, null, 8, ["context"])) : W(s) ? (X(),
            ot(_c(W(s)), {
                key: 2
            })) : (X(),
            ot(W(ZD), {
                key: 3
            }))]),
            _: 1
        }, 8, ["onResolve"]))
    }
}
  , lc = Yy;
globalThis.$fetch || (globalThis.$fetch = rp.create({
    baseURL: sp()
}));
let cc;
{
    let n;
    cc = async function() {
        var o, i;
        if (n)
            return n;
        const r = !!((o = window.__NUXT__) != null && o.serverRendered || ((i = document.getElementById("__NUXT_DATA__")) == null ? void 0 : i.dataset.ssr) === "true") ? ch(lc) : fh(lc)
          , s = mp({
            vueApp: r
        });
        try {
            await yp(s, VD)
        } catch (a) {
            await s.callHook("app:error", a),
            s.payload.error = s.payload.error || a
        }
        try {
            await s.hooks.callHook("app:created", r),
            await s.hooks.callHook("app:beforeMount", r),
            r.mount(V_),
            await s.hooks.callHook("app:mounted", r),
            await $r()
        } catch (a) {
            await s.callHook("app:error", a),
            s.payload.error = s.payload.error || a
        }
        return r
    }
    ,
    n = cc().catch(e => {
        console.error("Error while mounting app:", e)
    }
    )
}
export {bs as A, Nu as B, vo as C, Eo as D, Co as E, c_ as F, Gy as G, xh as H, De as I, n1 as J, s1 as K, To as L, e1 as M, Fe as O, Gt as P, ne as S, Es as T, fr as _, t1 as a, Jy as b, Ri as c, M as d, xs as e, bo as f, Zy as g, Wd as h, Ly as i, o1 as j, a1 as k, i1 as l, Qy as m, Ai as n, sf as o, F0 as p, Oi as q, Ky as r, cr as s, da as t, ki as u, Va as v, ws as w, r1 as x, Fy as y, Vy as z};