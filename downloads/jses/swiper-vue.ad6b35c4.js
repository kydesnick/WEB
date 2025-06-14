function ki(e, t) {
    const n = Object.create(null)
      , i = e.split(",");
    for (let s = 0; s < i.length; s++)
        n[i[s]] = !0;
    return t ? s => !!n[s.toLowerCase()] : s => !!n[s]
}
const le = {}
  , Lt = []
  , He = () => {}
  , Al = () => !1
  , Bl = /^on[^a-z]/
  , gn = e => Bl.test(e)
  , Vi = e => e.startsWith("onUpdate:")
  , ce = Object.assign
  , ji = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , zl = Object.prototype.hasOwnProperty
  , ee = (e, t) => zl.call(e, t)
  , Y = Array.isArray
  , Ot = e => Wt(e) === "[object Map]"
  , jt = e => Wt(e) === "[object Set]"
  , bs = e => Wt(e) === "[object Date]"
  , Dl = e => Wt(e) === "[object RegExp]"
  , U = e => typeof e == "function"
  , ae = e => typeof e == "string"
  , cn = e => typeof e == "symbol"
  , ie = e => e !== null && typeof e == "object"
  , Wi = e => ie(e) && U(e.then) && U(e.catch)
  , ur = Object.prototype.toString
  , Wt = e => ur.call(e)
  , Fl = e => Wt(e).slice(8, -1)
  , fr = e => Wt(e) === "[object Object]"
  , Yi = e => ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , rn = ki(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Yn = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
}
  , Rl = /-(\w)/g
  , We = Yn(e => e.replace(Rl, (t, n) => n ? n.toUpperCase() : ""))
  , Nl = /\B([A-Z])/g
  , Yt = Yn(e => e.replace(Nl, "-$1").toLowerCase())
  , Xn = Yn(e => e.charAt(0).toUpperCase() + e.slice(1))
  , ni = Yn(e => e ? `on${Xn(e)}` : "")
  , un = (e, t) => !Object.is(e, t)
  , At = (e, t) => {
    for (let n = 0; n < e.length; n++)
        e[n](t)
}
  , zn = (e, t, n) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        value: n
    })
}
  , Dn = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , dr = e => {
    const t = ae(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let ws;
const wi = () => ws || (ws = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Xi(e) {
    if (Y(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const i = e[n]
              , s = ae(i) ? Vl(i) : Xi(i);
            if (s)
                for (const r in s)
                    t[r] = s[r]
        }
        return t
    } else {
        if (ae(e))
            return e;
        if (ie(e))
            return e
    }
}
const $l = /;(?![^(]*\))/g
  , Hl = /:([^]+)/
  , kl = /\/\*[^]*?\*\//g;
function Vl(e) {
    const t = {};
    return e.replace(kl, "").split($l).forEach(n => {
        if (n) {
            const i = n.split(Hl);
            i.length > 1 && (t[i[0].trim()] = i[1].trim())
        }
    }
    ),
    t
}
function Gi(e) {
    let t = "";
    if (ae(e))
        t = e;
    else if (Y(e))
        for (let n = 0; n < e.length; n++) {
            const i = Gi(e[n]);
            i && (t += i + " ")
        }
    else if (ie(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
const jl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Wl = ki(jl);
function pr(e) {
    return !!e || e === ""
}
function Yl(e, t) {
    if (e.length !== t.length)
        return !1;
    let n = !0;
    for (let i = 0; n && i < e.length; i++)
        n = St(e[i], t[i]);
    return n
}
function St(e, t) {
    if (e === t)
        return !0;
    let n = bs(e)
      , i = bs(t);
    if (n || i)
        return n && i ? e.getTime() === t.getTime() : !1;
    if (n = cn(e),
    i = cn(t),
    n || i)
        return e === t;
    if (n = Y(e),
    i = Y(t),
    n || i)
        return n && i ? Yl(e, t) : !1;
    if (n = ie(e),
    i = ie(t),
    n || i) {
        if (!n || !i)
            return !1;
        const s = Object.keys(e).length
          , r = Object.keys(t).length;
        if (s !== r)
            return !1;
        for (const l in e) {
            const a = e.hasOwnProperty(l)
              , o = t.hasOwnProperty(l);
            if (a && !o || !a && o || !St(e[l], t[l]))
                return !1
        }
    }
    return String(e) === String(t)
}
function qi(e, t) {
    return e.findIndex(n => St(n, t))
}
const Nu = e => ae(e) ? e : e == null ? "" : Y(e) || ie(e) && (e.toString === ur || !U(e.toString)) ? JSON.stringify(e, hr, 2) : String(e)
  , hr = (e, t) => t && t.__v_isRef ? hr(e, t.value) : Ot(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce( (n, [i,s]) => (n[`${i} =>`] = s,
    n), {})
} : jt(t) ? {
    [`Set(${t.size})`]: [...t.values()]
} : ie(t) && !Y(t) && !fr(t) ? String(t) : t;
let _e;
class mr {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = _e,
        !t && _e && (this.index = (_e.scopes || (_e.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = _e;
            try {
                return _e = this,
                t()
            } finally {
                _e = n
            }
        }
    }
    on() {
        _e = this
    }
    off() {
        _e = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, i;
            for (n = 0,
            i = this.effects.length; n < i; n++)
                this.effects[n].stop();
            for (n = 0,
            i = this.cleanups.length; n < i; n++)
                this.cleanups[n]();
            if (this.scopes)
                for (n = 0,
                i = this.scopes.length; n < i; n++)
                    this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const s = this.parent.scopes.pop();
                s && s !== this && (this.parent.scopes[this.index] = s,
                s.index = this.index)
            }
            this.parent = void 0,
            this._active = !1
        }
    }
}
function $u(e) {
    return new mr(e)
}
function Xl(e, t=_e) {
    t && t.active && t.effects.push(e)
}
function Gl() {
    return _e
}
function Hu(e) {
    _e && _e.cleanups.push(e)
}
const Ui = e => {
    const t = new Set(e);
    return t.w = 0,
    t.n = 0,
    t
}
  , gr = e => (e.w & at) > 0
  , vr = e => (e.n & at) > 0
  , ql = ({deps: e}) => {
    if (e.length)
        for (let t = 0; t < e.length; t++)
            e[t].w |= at
}
  , Ul = e => {
    const {deps: t} = e;
    if (t.length) {
        let n = 0;
        for (let i = 0; i < t.length; i++) {
            const s = t[i];
            gr(s) && !vr(s) ? s.delete(e) : t[n++] = s,
            s.w &= ~at,
            s.n &= ~at
        }
        t.length = n
    }
}
  , Fn = new WeakMap;
let tn = 0
  , at = 1;
const xi = 30;
let Ne;
const vt = Symbol("")
  , Ei = Symbol("");
class Ki {
    constructor(t, n=null, i) {
        this.fn = t,
        this.scheduler = n,
        this.active = !0,
        this.deps = [],
        this.parent = void 0,
        Xl(this, i)
    }
    run() {
        if (!this.active)
            return this.fn();
        let t = Ne
          , n = rt;
        for (; t; ) {
            if (t === this)
                return;
            t = t.parent
        }
        try {
            return this.parent = Ne,
            Ne = this,
            rt = !0,
            at = 1 << ++tn,
            tn <= xi ? ql(this) : xs(this),
            this.fn()
        } finally {
            tn <= xi && Ul(this),
            at = 1 << --tn,
            Ne = this.parent,
            rt = n,
            this.parent = void 0,
            this.deferStop && this.stop()
        }
    }
    stop() {
        Ne === this ? this.deferStop = !0 : this.active && (xs(this),
        this.onStop && this.onStop(),
        this.active = !1)
    }
}
function xs(e) {
    const {deps: t} = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++)
            t[n].delete(e);
        t.length = 0
    }
}
let rt = !0;
const yr = [];
function Xt() {
    yr.push(rt),
    rt = !1
}
function Gt() {
    const e = yr.pop();
    rt = e === void 0 ? !0 : e
}
function Te(e, t, n) {
    if (rt && Ne) {
        let i = Fn.get(e);
        i || Fn.set(e, i = new Map);
        let s = i.get(n);
        s || i.set(n, s = Ui()),
        br(s)
    }
}
function br(e, t) {
    let n = !1;
    tn <= xi ? vr(e) || (e.n |= at,
    n = !gr(e)) : n = !e.has(Ne),
    n && (e.add(Ne),
    Ne.deps.push(e))
}
function Ue(e, t, n, i, s, r) {
    const l = Fn.get(e);
    if (!l)
        return;
    let a = [];
    if (t === "clear")
        a = [...l.values()];
    else if (n === "length" && Y(e)) {
        const o = Number(i);
        l.forEach( (d, f) => {
            (f === "length" || f >= o) && a.push(d)
        }
        )
    } else
        switch (n !== void 0 && a.push(l.get(n)),
        t) {
        case "add":
            Y(e) ? Yi(n) && a.push(l.get("length")) : (a.push(l.get(vt)),
            Ot(e) && a.push(l.get(Ei)));
            break;
        case "delete":
            Y(e) || (a.push(l.get(vt)),
            Ot(e) && a.push(l.get(Ei)));
            break;
        case "set":
            Ot(e) && a.push(l.get(vt));
            break
        }
    if (a.length === 1)
        a[0] && Si(a[0]);
    else {
        const o = [];
        for (const d of a)
            d && o.push(...d);
        Si(Ui(o))
    }
}
function Si(e, t) {
    const n = Y(e) ? e : [...e];
    for (const i of n)
        i.computed && Es(i);
    for (const i of n)
        i.computed || Es(i)
}
function Es(e, t) {
    (e !== Ne || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
function Kl(e, t) {
    var n;
    return (n = Fn.get(e)) == null ? void 0 : n.get(t)
}
const Jl = ki("__proto__,__v_isRef,__isVue")
  , wr = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(cn))
  , Zl = Ji()
  , Ql = Ji(!1, !0)
  , eo = Ji(!0)
  , Ss = to();
function to() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function(...n) {
            const i = te(this);
            for (let r = 0, l = this.length; r < l; r++)
                Te(i, "get", r + "");
            const s = i[t](...n);
            return s === -1 || s === !1 ? i[t](...n.map(te)) : s
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function(...n) {
            Xt();
            const i = te(this)[t].apply(this, n);
            return Gt(),
            i
        }
    }
    ),
    e
}
function no(e) {
    const t = te(this);
    return Te(t, "has", e),
    t.hasOwnProperty(e)
}
function Ji(e=!1, t=!1) {
    return function(i, s, r) {
        if (s === "__v_isReactive")
            return !e;
        if (s === "__v_isReadonly")
            return e;
        if (s === "__v_isShallow")
            return t;
        if (s === "__v_raw" && r === (e ? t ? bo : Cr : t ? Tr : Sr).get(i))
            return i;
        const l = Y(i);
        if (!e) {
            if (l && ee(Ss, s))
                return Reflect.get(Ss, s, r);
            if (s === "hasOwnProperty")
                return no
        }
        const a = Reflect.get(i, s, r);
        return (cn(s) ? wr.has(s) : Jl(s)) || (e || Te(i, "get", s),
        t) ? a : me(a) ? l && Yi(s) ? a : a.value : ie(a) ? e ? _r(a) : es(a) : a
    }
}
const io = xr()
  , so = xr(!0);
function xr(e=!1) {
    return function(n, i, s, r) {
        let l = n[i];
        if (Rt(l) && me(l) && !me(s))
            return !1;
        if (!e && (!Rn(s) && !Rt(s) && (l = te(l),
        s = te(s)),
        !Y(n) && me(l) && !me(s)))
            return l.value = s,
            !0;
        const a = Y(n) && Yi(i) ? Number(i) < n.length : ee(n, i)
          , o = Reflect.set(n, i, s, r);
        return n === te(r) && (a ? un(s, l) && Ue(n, "set", i, s) : Ue(n, "add", i, s)),
        o
    }
}
function ro(e, t) {
    const n = ee(e, t);
    e[t];
    const i = Reflect.deleteProperty(e, t);
    return i && n && Ue(e, "delete", t, void 0),
    i
}
function lo(e, t) {
    const n = Reflect.has(e, t);
    return (!cn(t) || !wr.has(t)) && Te(e, "has", t),
    n
}
function oo(e) {
    return Te(e, "iterate", Y(e) ? "length" : vt),
    Reflect.ownKeys(e)
}
const Er = {
    get: Zl,
    set: io,
    deleteProperty: ro,
    has: lo,
    ownKeys: oo
}
  , ao = {
    get: eo,
    set(e, t) {
        return !0
    },
    deleteProperty(e, t) {
        return !0
    }
}
  , co = ce({}, Er, {
    get: Ql,
    set: so
})
  , Zi = e => e
  , Gn = e => Reflect.getPrototypeOf(e);
function wn(e, t, n=!1, i=!1) {
    e = e.__v_raw;
    const s = te(e)
      , r = te(t);
    n || (t !== r && Te(s, "get", t),
    Te(s, "get", r));
    const {has: l} = Gn(s)
      , a = i ? Zi : n ? ns : fn;
    if (l.call(s, t))
        return a(e.get(t));
    if (l.call(s, r))
        return a(e.get(r));
    e !== s && e.get(t)
}
function xn(e, t=!1) {
    const n = this.__v_raw
      , i = te(n)
      , s = te(e);
    return t || (e !== s && Te(i, "has", e),
    Te(i, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
}
function En(e, t=!1) {
    return e = e.__v_raw,
    !t && Te(te(e), "iterate", vt),
    Reflect.get(e, "size", e)
}
function Ts(e) {
    e = te(e);
    const t = te(this);
    return Gn(t).has.call(t, e) || (t.add(e),
    Ue(t, "add", e, e)),
    this
}
function Cs(e, t) {
    t = te(t);
    const n = te(this)
      , {has: i, get: s} = Gn(n);
    let r = i.call(n, e);
    r || (e = te(e),
    r = i.call(n, e));
    const l = s.call(n, e);
    return n.set(e, t),
    r ? un(t, l) && Ue(n, "set", e, t) : Ue(n, "add", e, t),
    this
}
function _s(e) {
    const t = te(this)
      , {has: n, get: i} = Gn(t);
    let s = n.call(t, e);
    s || (e = te(e),
    s = n.call(t, e)),
    i && i.call(t, e);
    const r = t.delete(e);
    return s && Ue(t, "delete", e, void 0),
    r
}
function Ms() {
    const e = te(this)
      , t = e.size !== 0
      , n = e.clear();
    return t && Ue(e, "clear", void 0, void 0),
    n
}
function Sn(e, t) {
    return function(i, s) {
        const r = this
          , l = r.__v_raw
          , a = te(l)
          , o = t ? Zi : e ? ns : fn;
        return !e && Te(a, "iterate", vt),
        l.forEach( (d, f) => i.call(s, o(d), o(f), r))
    }
}
function Tn(e, t, n) {
    return function(...i) {
        const s = this.__v_raw
          , r = te(s)
          , l = Ot(r)
          , a = e === "entries" || e === Symbol.iterator && l
          , o = e === "keys" && l
          , d = s[e](...i)
          , f = n ? Zi : t ? ns : fn;
        return !t && Te(r, "iterate", o ? Ei : vt),
        {
            next() {
                const {value: c, done: u} = d.next();
                return u ? {
                    value: c,
                    done: u
                } : {
                    value: a ? [f(c[0]), f(c[1])] : f(c),
                    done: u
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Qe(e) {
    return function(...t) {
        return e === "delete" ? !1 : this
    }
}
function uo() {
    const e = {
        get(r) {
            return wn(this, r)
        },
        get size() {
            return En(this)
        },
        has: xn,
        add: Ts,
        set: Cs,
        delete: _s,
        clear: Ms,
        forEach: Sn(!1, !1)
    }
      , t = {
        get(r) {
            return wn(this, r, !1, !0)
        },
        get size() {
            return En(this)
        },
        has: xn,
        add: Ts,
        set: Cs,
        delete: _s,
        clear: Ms,
        forEach: Sn(!1, !0)
    }
      , n = {
        get(r) {
            return wn(this, r, !0)
        },
        get size() {
            return En(this, !0)
        },
        has(r) {
            return xn.call(this, r, !0)
        },
        add: Qe("add"),
        set: Qe("set"),
        delete: Qe("delete"),
        clear: Qe("clear"),
        forEach: Sn(!0, !1)
    }
      , i = {
        get(r) {
            return wn(this, r, !0, !0)
        },
        get size() {
            return En(this, !0)
        },
        has(r) {
            return xn.call(this, r, !0)
        },
        add: Qe("add"),
        set: Qe("set"),
        delete: Qe("delete"),
        clear: Qe("clear"),
        forEach: Sn(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(r => {
        e[r] = Tn(r, !1, !1),
        n[r] = Tn(r, !0, !1),
        t[r] = Tn(r, !1, !0),
        i[r] = Tn(r, !0, !0)
    }
    ),
    [e, n, t, i]
}
const [fo,po,ho,mo] = uo();
function Qi(e, t) {
    const n = t ? e ? mo : ho : e ? po : fo;
    return (i, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? i : Reflect.get(ee(n, s) && s in i ? n : i, s, r)
}
const go = {
    get: Qi(!1, !1)
}
  , vo = {
    get: Qi(!1, !0)
}
  , yo = {
    get: Qi(!0, !1)
}
  , Sr = new WeakMap
  , Tr = new WeakMap
  , Cr = new WeakMap
  , bo = new WeakMap;
function wo(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function xo(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : wo(Fl(e))
}
function es(e) {
    return Rt(e) ? e : ts(e, !1, Er, go, Sr)
}
function Eo(e) {
    return ts(e, !1, co, vo, Tr)
}
function _r(e) {
    return ts(e, !0, ao, yo, Cr)
}
function ts(e, t, n, i, s) {
    if (!ie(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const r = s.get(e);
    if (r)
        return r;
    const l = xo(e);
    if (l === 0)
        return e;
    const a = new Proxy(e,l === 2 ? i : n);
    return s.set(e, a),
    a
}
function Bt(e) {
    return Rt(e) ? Bt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Rt(e) {
    return !!(e && e.__v_isReadonly)
}
function Rn(e) {
    return !!(e && e.__v_isShallow)
}
function Mr(e) {
    return Bt(e) || Rt(e)
}
function te(e) {
    const t = e && e.__v_raw;
    return t ? te(t) : e
}
function Pr(e) {
    return zn(e, "__v_skip", !0),
    e
}
const fn = e => ie(e) ? es(e) : e
  , ns = e => ie(e) ? _r(e) : e;
function Ir(e) {
    rt && Ne && (e = te(e),
    br(e.dep || (e.dep = Ui())))
}
function Lr(e, t) {
    e = te(e);
    const n = e.dep;
    n && Si(n)
}
function me(e) {
    return !!(e && e.__v_isRef === !0)
}
function he(e) {
    return Or(e, !1)
}
function ku(e) {
    return Or(e, !0)
}
function Or(e, t) {
    return me(e) ? e : new So(e,t)
}
class So {
    constructor(t, n) {
        this.__v_isShallow = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = n ? t : te(t),
        this._value = n ? t : fn(t)
    }
    get value() {
        return Ir(this),
        this._value
    }
    set value(t) {
        const n = this.__v_isShallow || Rn(t) || Rt(t);
        t = n ? t : te(t),
        un(t, this._rawValue) && (this._rawValue = t,
        this._value = n ? t : fn(t),
        Lr(this))
    }
}
function To(e) {
    return me(e) ? e.value : e
}
const Co = {
    get: (e, t, n) => To(Reflect.get(e, t, n)),
    set: (e, t, n, i) => {
        const s = e[t];
        return me(s) && !me(n) ? (s.value = n,
        !0) : Reflect.set(e, t, n, i)
    }
};
function Ar(e) {
    return Bt(e) ? e : new Proxy(e,Co)
}
function Vu(e) {
    const t = Y(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = Br(e, n);
    return t
}
class _o {
    constructor(t, n, i) {
        this._object = t,
        this._key = n,
        this._defaultValue = i,
        this.__v_isRef = !0
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return Kl(te(this._object), this._key)
    }
}
class Mo {
    constructor(t) {
        this._getter = t,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0
    }
    get value() {
        return this._getter()
    }
}
function ju(e, t, n) {
    return me(e) ? e : U(e) ? new Mo(e) : ie(e) && arguments.length > 1 ? Br(e, t, n) : he(e)
}
function Br(e, t, n) {
    const i = e[t];
    return me(i) ? i : new _o(e,t,n)
}
class Po {
    constructor(t, n, i, s) {
        this._setter = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this.__v_isReadonly = !1,
        this._dirty = !0,
        this.effect = new Ki(t, () => {
            this._dirty || (this._dirty = !0,
            Lr(this))
        }
        ),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !s,
        this.__v_isReadonly = i
    }
    get value() {
        const t = te(this);
        return Ir(t),
        (t._dirty || !t._cacheable) && (t._dirty = !1,
        t._value = t.effect.run()),
        t._value
    }
    set value(t) {
        this._setter(t)
    }
}
function Io(e, t, n=!1) {
    let i, s;
    const r = U(e);
    return r ? (i = e,
    s = He) : (i = e.get,
    s = e.set),
    new Po(i,s,r || !s,n)
}
function lt(e, t, n, i) {
    let s;
    try {
        s = i ? e(...i) : e()
    } catch (r) {
        qt(r, t, n)
    }
    return s
}
function De(e, t, n, i) {
    if (U(e)) {
        const r = lt(e, t, n, i);
        return r && Wi(r) && r.catch(l => {
            qt(l, t, n)
        }
        ),
        r
    }
    const s = [];
    for (let r = 0; r < e.length; r++)
        s.push(De(e[r], t, n, i));
    return s
}
function qt(e, t, n, i=!0) {
    const s = t ? t.vnode : null;
    if (t) {
        let r = t.parent;
        const l = t.proxy
          , a = n;
        for (; r; ) {
            const d = r.ec;
            if (d) {
                for (let f = 0; f < d.length; f++)
                    if (d[f](e, l, a) === !1)
                        return
            }
            r = r.parent
        }
        const o = t.appContext.config.errorHandler;
        if (o) {
            lt(o, null, 10, [e, l, a]);
            return
        }
    }
    Lo(e, n, s, i)
}
function Lo(e, t, n, i=!0) {
    console.error(e)
}
let dn = !1
  , Ti = !1;
const ye = [];
let je = 0;
const zt = [];
let Ge = null
  , ht = 0;
const zr = Promise.resolve();
let is = null;
function Dr(e) {
    const t = is || zr;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function Oo(e) {
    let t = je + 1
      , n = ye.length;
    for (; t < n; ) {
        const i = t + n >>> 1;
        pn(ye[i]) < e ? t = i + 1 : n = i
    }
    return t
}
function qn(e) {
    (!ye.length || !ye.includes(e, dn && e.allowRecurse ? je + 1 : je)) && (e.id == null ? ye.push(e) : ye.splice(Oo(e.id), 0, e),
    Fr())
}
function Fr() {
    !dn && !Ti && (Ti = !0,
    is = zr.then(Nr))
}
function Ao(e) {
    const t = ye.indexOf(e);
    t > je && ye.splice(t, 1)
}
function Rr(e) {
    Y(e) ? zt.push(...e) : (!Ge || !Ge.includes(e, e.allowRecurse ? ht + 1 : ht)) && zt.push(e),
    Fr()
}
function Ps(e, t=dn ? je + 1 : 0) {
    for (; t < ye.length; t++) {
        const n = ye[t];
        n && n.pre && (ye.splice(t, 1),
        t--,
        n())
    }
}
function Nn(e) {
    if (zt.length) {
        const t = [...new Set(zt)];
        if (zt.length = 0,
        Ge) {
            Ge.push(...t);
            return
        }
        for (Ge = t,
        Ge.sort( (n, i) => pn(n) - pn(i)),
        ht = 0; ht < Ge.length; ht++)
            Ge[ht]();
        Ge = null,
        ht = 0
    }
}
const pn = e => e.id == null ? 1 / 0 : e.id
  , Bo = (e, t) => {
    const n = pn(e) - pn(t);
    if (n === 0) {
        if (e.pre && !t.pre)
            return -1;
        if (t.pre && !e.pre)
            return 1
    }
    return n
}
;
function Nr(e) {
    Ti = !1,
    dn = !0,
    ye.sort(Bo);
    const t = He;
    try {
        for (je = 0; je < ye.length; je++) {
            const n = ye[je];
            n && n.active !== !1 && lt(n, null, 14)
        }
    } finally {
        je = 0,
        ye.length = 0,
        Nn(),
        dn = !1,
        is = null,
        (ye.length || zt.length) && Nr()
    }
}
function zo(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const i = e.vnode.props || le;
    let s = n;
    const r = t.startsWith("update:")
      , l = r && t.slice(7);
    if (l && l in i) {
        const f = `${l === "modelValue" ? "model" : l}Modifiers`
          , {number: c, trim: u} = i[f] || le;
        u && (s = n.map(m => ae(m) ? m.trim() : m)),
        c && (s = n.map(Dn))
    }
    let a, o = i[a = ni(t)] || i[a = ni(We(t))];
    !o && r && (o = i[a = ni(Yt(t))]),
    o && De(o, e, 6, s);
    const d = i[a + "Once"];
    if (d) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[a])
            return;
        e.emitted[a] = !0,
        De(d, e, 6, s)
    }
}
function $r(e, t, n=!1) {
    const i = t.emitsCache
      , s = i.get(e);
    if (s !== void 0)
        return s;
    const r = e.emits;
    let l = {}
      , a = !1;
    if (!U(e)) {
        const o = d => {
            const f = $r(d, t, !0);
            f && (a = !0,
            ce(l, f))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(o),
        e.extends && o(e.extends),
        e.mixins && e.mixins.forEach(o)
    }
    return !r && !a ? (ie(e) && i.set(e, null),
    null) : (Y(r) ? r.forEach(o => l[o] = null) : ce(l, r),
    ie(e) && i.set(e, l),
    l)
}
function Un(e, t) {
    return !e || !gn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    ee(e, t[0].toLowerCase() + t.slice(1)) || ee(e, Yt(t)) || ee(e, t))
}
let ge = null
  , Kn = null;
function $n(e) {
    const t = ge;
    return ge = e,
    Kn = e && e.type.__scopeId || null,
    t
}
function Wu(e) {
    Kn = e
}
function Yu() {
    Kn = null
}
function Do(e, t=ge, n) {
    if (!t || e._n)
        return e;
    const i = (...s) => {
        i._d && Hs(-1);
        const r = $n(t);
        let l;
        try {
            l = e(...s)
        } finally {
            $n(r),
            i._d && Hs(1)
        }
        return l
    }
    ;
    return i._n = !0,
    i._c = !0,
    i._d = !0,
    i
}
function ii(e) {
    const {type: t, vnode: n, proxy: i, withProxy: s, props: r, propsOptions: [l], slots: a, attrs: o, emit: d, render: f, renderCache: c, data: u, setupState: m, ctx: E, inheritAttrs: b} = e;
    let C, y;
    const p = $n(e);
    try {
        if (n.shapeFlag & 4) {
            const g = s || i;
            C = Oe(f.call(g, g, c, r, m, u, E)),
            y = o
        } else {
            const g = t;
            C = Oe(g.length > 1 ? g(r, {
                attrs: o,
                slots: a,
                emit: d
            }) : g(r, null)),
            y = t.props ? o : Ro(o)
        }
    } catch (g) {
        on.length = 0,
        qt(g, e, 1),
        C = oe(Ee)
    }
    let h = C;
    if (y && b !== !1) {
        const g = Object.keys(y)
          , {shapeFlag: S} = h;
        g.length && S & 7 && (l && g.some(Vi) && (y = No(y, l)),
        h = Ke(h, y))
    }
    return n.dirs && (h = Ke(h),
    h.dirs = h.dirs ? h.dirs.concat(n.dirs) : n.dirs),
    n.transition && (h.transition = n.transition),
    C = h,
    $n(p),
    C
}
function Fo(e) {
    let t;
    for (let n = 0; n < e.length; n++) {
        const i = e[n];
        if (Ht(i)) {
            if (i.type !== Ee || i.children === "v-if") {
                if (t)
                    return;
                t = i
            }
        } else
            return
    }
    return t
}
const Ro = e => {
    let t;
    for (const n in e)
        (n === "class" || n === "style" || gn(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , No = (e, t) => {
    const n = {};
    for (const i in e)
        (!Vi(i) || !(i.slice(9)in t)) && (n[i] = e[i]);
    return n
}
;
function $o(e, t, n) {
    const {props: i, children: s, component: r} = e
      , {props: l, children: a, patchFlag: o} = t
      , d = r.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && o >= 0) {
        if (o & 1024)
            return !0;
        if (o & 16)
            return i ? Is(i, l, d) : !!l;
        if (o & 8) {
            const f = t.dynamicProps;
            for (let c = 0; c < f.length; c++) {
                const u = f[c];
                if (l[u] !== i[u] && !Un(d, u))
                    return !0
            }
        }
    } else
        return (s || a) && (!a || !a.$stable) ? !0 : i === l ? !1 : i ? l ? Is(i, l, d) : !0 : !!l;
    return !1
}
function Is(e, t, n) {
    const i = Object.keys(t);
    if (i.length !== Object.keys(e).length)
        return !0;
    for (let s = 0; s < i.length; s++) {
        const r = i[s];
        if (t[r] !== e[r] && !Un(n, r))
            return !0
    }
    return !1
}
function ss({vnode: e, parent: t}, n) {
    for (; t && t.subTree === e; )
        (e = t.vnode).el = n,
        t = t.parent
}
const Hr = e => e.__isSuspense
  , Ho = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, i, s, r, l, a, o, d) {
        e == null ? ko(t, n, i, s, r, l, a, o, d) : Vo(e, t, n, i, s, l, a, o, d)
    },
    hydrate: jo,
    create: rs,
    normalize: Wo
}
  , Xu = Ho;
function hn(e, t) {
    const n = e.props && e.props[t];
    U(n) && n()
}
function ko(e, t, n, i, s, r, l, a, o) {
    const {p: d, o: {createElement: f}} = o
      , c = f("div")
      , u = e.suspense = rs(e, s, i, t, c, n, r, l, a, o);
    d(null, u.pendingBranch = e.ssContent, c, null, i, u, r, l),
    u.deps > 0 ? (hn(e, "onPending"),
    hn(e, "onFallback"),
    d(null, e.ssFallback, t, n, i, null, r, l),
    Dt(u, e.ssFallback)) : u.resolve(!1, !0)
}
function Vo(e, t, n, i, s, r, l, a, {p: o, um: d, o: {createElement: f}}) {
    const c = t.suspense = e.suspense;
    c.vnode = t,
    t.el = e.el;
    const u = t.ssContent
      , m = t.ssFallback
      , {activeBranch: E, pendingBranch: b, isInFallback: C, isHydrating: y} = c;
    if (b)
        c.pendingBranch = u,
        $e(u, b) ? (o(b, u, c.hiddenContainer, null, s, c, r, l, a),
        c.deps <= 0 ? c.resolve() : C && (o(E, m, n, i, s, null, r, l, a),
        Dt(c, m))) : (c.pendingId++,
        y ? (c.isHydrating = !1,
        c.activeBranch = b) : d(b, s, c),
        c.deps = 0,
        c.effects.length = 0,
        c.hiddenContainer = f("div"),
        C ? (o(null, u, c.hiddenContainer, null, s, c, r, l, a),
        c.deps <= 0 ? c.resolve() : (o(E, m, n, i, s, null, r, l, a),
        Dt(c, m))) : E && $e(u, E) ? (o(E, u, n, i, s, c, r, l, a),
        c.resolve(!0)) : (o(null, u, c.hiddenContainer, null, s, c, r, l, a),
        c.deps <= 0 && c.resolve()));
    else if (E && $e(u, E))
        o(E, u, n, i, s, c, r, l, a),
        Dt(c, u);
    else if (hn(t, "onPending"),
    c.pendingBranch = u,
    c.pendingId++,
    o(null, u, c.hiddenContainer, null, s, c, r, l, a),
    c.deps <= 0)
        c.resolve();
    else {
        const {timeout: p, pendingId: h} = c;
        p > 0 ? setTimeout( () => {
            c.pendingId === h && c.fallback(m)
        }
        , p) : p === 0 && c.fallback(m)
    }
}
function rs(e, t, n, i, s, r, l, a, o, d, f=!1) {
    const {p: c, m: u, um: m, n: E, o: {parentNode: b, remove: C}} = d;
    let y;
    const p = Yo(e);
    p && t != null && t.pendingBranch && (y = t.pendingId,
    t.deps++);
    const h = e.props ? dr(e.props.timeout) : void 0
      , g = {
        vnode: e,
        parent: t,
        parentComponent: n,
        isSVG: l,
        container: i,
        hiddenContainer: s,
        anchor: r,
        deps: 0,
        pendingId: 0,
        timeout: typeof h == "number" ? h : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !0,
        isHydrating: f,
        isUnmounted: !1,
        effects: [],
        resolve(S=!1, O=!1) {
            const {vnode: I, activeBranch: T, pendingBranch: x, pendingId: N, effects: _, parentComponent: L, container: D} = g;
            if (g.isHydrating)
                g.isHydrating = !1;
            else if (!S) {
                const q = T && x.transition && x.transition.mode === "out-in";
                q && (T.transition.afterLeave = () => {
                    N === g.pendingId && u(x, D, M, 0)
                }
                );
                let {anchor: M} = g;
                T && (M = E(T),
                m(T, L, g, !0)),
                q || u(x, D, M, 0)
            }
            Dt(g, x),
            g.pendingBranch = null,
            g.isInFallback = !1;
            let z = g.parent
              , J = !1;
            for (; z; ) {
                if (z.pendingBranch) {
                    z.effects.push(..._),
                    J = !0;
                    break
                }
                z = z.parent
            }
            J || Rr(_),
            g.effects = [],
            p && t && t.pendingBranch && y === t.pendingId && (t.deps--,
            t.deps === 0 && !O && t.resolve()),
            hn(I, "onResolve")
        },
        fallback(S) {
            if (!g.pendingBranch)
                return;
            const {vnode: O, activeBranch: I, parentComponent: T, container: x, isSVG: N} = g;
            hn(O, "onFallback");
            const _ = E(I)
              , L = () => {
                g.isInFallback && (c(null, S, x, _, T, null, N, a, o),
                Dt(g, S))
            }
              , D = S.transition && S.transition.mode === "out-in";
            D && (I.transition.afterLeave = L),
            g.isInFallback = !0,
            m(I, T, null, !0),
            D || L()
        },
        move(S, O, I) {
            g.activeBranch && u(g.activeBranch, S, O, I),
            g.container = S
        },
        next() {
            return g.activeBranch && E(g.activeBranch)
        },
        registerDep(S, O) {
            const I = !!g.pendingBranch;
            I && g.deps++;
            const T = S.vnode.el;
            S.asyncDep.catch(x => {
                qt(x, S, 0)
            }
            ).then(x => {
                if (S.isUnmounted || g.isUnmounted || g.pendingId !== S.suspenseId)
                    return;
                S.asyncResolved = !0;
                const {vnode: N} = S;
                Li(S, x, !1),
                T && (N.el = T);
                const _ = !T && S.subTree.el;
                O(S, N, b(T || S.subTree.el), T ? null : E(S.subTree), g, l, o),
                _ && C(_),
                ss(S, N.el),
                I && --g.deps === 0 && g.resolve()
            }
            )
        },
        unmount(S, O) {
            g.isUnmounted = !0,
            g.activeBranch && m(g.activeBranch, n, S, O),
            g.pendingBranch && m(g.pendingBranch, n, S, O)
        }
    };
    return g
}
function jo(e, t, n, i, s, r, l, a, o) {
    const d = t.suspense = rs(t, i, n, e.parentNode, document.createElement("div"), null, s, r, l, a, !0)
      , f = o(e, d.pendingBranch = t.ssContent, n, d, r, l);
    return d.deps === 0 && d.resolve(!1, !0),
    f
}
function Wo(e) {
    const {shapeFlag: t, children: n} = e
      , i = t & 32;
    e.ssContent = Ls(i ? n.default : n),
    e.ssFallback = i ? Ls(n.fallback) : oe(Ee)
}
function Ls(e) {
    let t;
    if (U(e)) {
        const n = $t && e._c;
        n && (e._d = !1,
        fs()),
        e = e(),
        n && (e._d = !0,
        t = Be,
        ll())
    }
    return Y(e) && (e = Fo(e)),
    e = Oe(e),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n => n !== e)),
    e
}
function kr(e, t) {
    t && t.pendingBranch ? Y(e) ? t.effects.push(...e) : t.effects.push(e) : Rr(e)
}
function Dt(e, t) {
    e.activeBranch = t;
    const {vnode: n, parentComponent: i} = e
      , s = n.el = t.el;
    i && i.subTree === n && (i.vnode.el = s,
    ss(i, s))
}
function Yo(e) {
    var t;
    return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== !1
}
function Gu(e, t) {
    return Jn(e, null, t)
}
function Xo(e, t) {
    return Jn(e, null, {
        flush: "post"
    })
}
const Cn = {};
function yt(e, t, n) {
    return Jn(e, t, n)
}
function Jn(e, t, {immediate: n, deep: i, flush: s, onTrack: r, onTrigger: l}=le) {
    var a;
    const o = Gl() === ((a = de) == null ? void 0 : a.scope) ? de : null;
    let d, f = !1, c = !1;
    if (me(e) ? (d = () => e.value,
    f = Rn(e)) : Bt(e) ? (d = () => e,
    i = !0) : Y(e) ? (c = !0,
    f = e.some(g => Bt(g) || Rn(g)),
    d = () => e.map(g => {
        if (me(g))
            return g.value;
        if (Bt(g))
            return gt(g);
        if (U(g))
            return lt(g, o, 2)
    }
    )) : U(e) ? t ? d = () => lt(e, o, 2) : d = () => {
        if (!(o && o.isUnmounted))
            return u && u(),
            De(e, o, 3, [m])
    }
    : d = He,
    t && i) {
        const g = d;
        d = () => gt(g())
    }
    let u, m = g => {
        u = p.onStop = () => {
            lt(g, o, 4)
        }
    }
    , E;
    if (kt)
        if (m = He,
        t ? n && De(t, o, 3, [d(), c ? [] : void 0, m]) : d(),
        s === "sync") {
            const g = Ra();
            E = g.__watcherHandles || (g.__watcherHandles = [])
        } else
            return He;
    let b = c ? new Array(e.length).fill(Cn) : Cn;
    const C = () => {
        if (p.active)
            if (t) {
                const g = p.run();
                (i || f || (c ? g.some( (S, O) => un(S, b[O])) : un(g, b))) && (u && u(),
                De(t, o, 3, [g, b === Cn ? void 0 : c && b[0] === Cn ? [] : b, m]),
                b = g)
            } else
                p.run()
    }
    ;
    C.allowRecurse = !!t;
    let y;
    s === "sync" ? y = C : s === "post" ? y = () => ve(C, o && o.suspense) : (C.pre = !0,
    o && (C.id = o.uid),
    y = () => qn(C));
    const p = new Ki(d,y);
    t ? n ? C() : b = p.run() : s === "post" ? ve(p.run.bind(p), o && o.suspense) : p.run();
    const h = () => {
        p.stop(),
        o && o.scope && ji(o.scope.effects, p)
    }
    ;
    return E && E.push(h),
    h
}
function Go(e, t, n) {
    const i = this.proxy
      , s = ae(e) ? e.includes(".") ? Vr(i, e) : () => i[e] : e.bind(i, i);
    let r;
    U(t) ? r = t : (r = t.handler,
    n = t);
    const l = de;
    ct(this);
    const a = Jn(s, r.bind(i), n);
    return l ? ct(l) : ot(),
    a
}
function Vr(e, t) {
    const n = t.split(".");
    return () => {
        let i = e;
        for (let s = 0; s < n.length && i; s++)
            i = i[n[s]];
        return i
    }
}
function gt(e, t) {
    if (!ie(e) || e.__v_skip || (t = t || new Set,
    t.has(e)))
        return e;
    if (t.add(e),
    me(e))
        gt(e.value, t);
    else if (Y(e))
        for (let n = 0; n < e.length; n++)
            gt(e[n], t);
    else if (jt(e) || Ot(e))
        e.forEach(n => {
            gt(n, t)
        }
        );
    else if (fr(e))
        for (const n in e)
            gt(e[n], t);
    return e
}
function qu(e, t) {
    const n = ge;
    if (n === null)
        return e;
    const i = ti(n) || n.proxy
      , s = e.dirs || (e.dirs = []);
    for (let r = 0; r < t.length; r++) {
        let[l,a,o,d=le] = t[r];
        l && (U(l) && (l = {
            mounted: l,
            updated: l
        }),
        l.deep && gt(a),
        s.push({
            dir: l,
            instance: i,
            value: a,
            oldValue: void 0,
            arg: o,
            modifiers: d
        }))
    }
    return e
}
function Ve(e, t, n, i) {
    const s = e.dirs
      , r = t && t.dirs;
    for (let l = 0; l < s.length; l++) {
        const a = s[l];
        r && (a.oldValue = r[l].value);
        let o = a.dir[i];
        o && (Xt(),
        De(o, n, 8, [e.el, a, e, t]),
        Gt())
    }
}
function qo() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Ut( () => {
        e.isMounted = !0
    }
    ),
    yn( () => {
        e.isUnmounting = !0
    }
    ),
    e
}
const Le = [Function, Array]
  , jr = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Le,
    onEnter: Le,
    onAfterEnter: Le,
    onEnterCancelled: Le,
    onBeforeLeave: Le,
    onLeave: Le,
    onAfterLeave: Le,
    onLeaveCancelled: Le,
    onBeforeAppear: Le,
    onAppear: Le,
    onAfterAppear: Le,
    onAppearCancelled: Le
}
  , Uo = {
    name: "BaseTransition",
    props: jr,
    setup(e, {slots: t}) {
        const n = bn()
          , i = qo();
        let s;
        return () => {
            const r = t.default && Yr(t.default(), !0);
            if (!r || !r.length)
                return;
            let l = r[0];
            if (r.length > 1) {
                for (const b of r)
                    if (b.type !== Ee) {
                        l = b;
                        break
                    }
            }
            const a = te(e)
              , {mode: o} = a;
            if (i.isLeaving)
                return si(l);
            const d = Os(l);
            if (!d)
                return si(l);
            const f = Ci(d, a, i, n);
            Hn(d, f);
            const c = n.subTree
              , u = c && Os(c);
            let m = !1;
            const {getTransitionKey: E} = d.type;
            if (E) {
                const b = E();
                s === void 0 ? s = b : b !== s && (s = b,
                m = !0)
            }
            if (u && u.type !== Ee && (!$e(d, u) || m)) {
                const b = Ci(u, a, i, n);
                if (Hn(u, b),
                o === "out-in")
                    return i.isLeaving = !0,
                    b.afterLeave = () => {
                        i.isLeaving = !1,
                        n.update.active !== !1 && n.update()
                    }
                    ,
                    si(l);
                o === "in-out" && d.type !== Ee && (b.delayLeave = (C, y, p) => {
                    const h = Wr(i, u);
                    h[String(u.key)] = u,
                    C._leaveCb = () => {
                        y(),
                        C._leaveCb = void 0,
                        delete f.delayedLeave
                    }
                    ,
                    f.delayedLeave = p
                }
                )
            }
            return l
        }
    }
}
  , Ko = Uo;
function Wr(e, t) {
    const {leavingVNodes: n} = e;
    let i = n.get(t.type);
    return i || (i = Object.create(null),
    n.set(t.type, i)),
    i
}
function Ci(e, t, n, i) {
    const {appear: s, mode: r, persisted: l=!1, onBeforeEnter: a, onEnter: o, onAfterEnter: d, onEnterCancelled: f, onBeforeLeave: c, onLeave: u, onAfterLeave: m, onLeaveCancelled: E, onBeforeAppear: b, onAppear: C, onAfterAppear: y, onAppearCancelled: p} = t
      , h = String(e.key)
      , g = Wr(n, e)
      , S = (T, x) => {
        T && De(T, i, 9, x)
    }
      , O = (T, x) => {
        const N = x[1];
        S(T, x),
        Y(T) ? T.every(_ => _.length <= 1) && N() : T.length <= 1 && N()
    }
      , I = {
        mode: r,
        persisted: l,
        beforeEnter(T) {
            let x = a;
            if (!n.isMounted)
                if (s)
                    x = b || a;
                else
                    return;
            T._leaveCb && T._leaveCb(!0);
            const N = g[h];
            N && $e(e, N) && N.el._leaveCb && N.el._leaveCb(),
            S(x, [T])
        },
        enter(T) {
            let x = o
              , N = d
              , _ = f;
            if (!n.isMounted)
                if (s)
                    x = C || o,
                    N = y || d,
                    _ = p || f;
                else
                    return;
            let L = !1;
            const D = T._enterCb = z => {
                L || (L = !0,
                z ? S(_, [T]) : S(N, [T]),
                I.delayedLeave && I.delayedLeave(),
                T._enterCb = void 0)
            }
            ;
            x ? O(x, [T, D]) : D()
        },
        leave(T, x) {
            const N = String(e.key);
            if (T._enterCb && T._enterCb(!0),
            n.isUnmounting)
                return x();
            S(c, [T]);
            let _ = !1;
            const L = T._leaveCb = D => {
                _ || (_ = !0,
                x(),
                D ? S(E, [T]) : S(m, [T]),
                T._leaveCb = void 0,
                g[N] === e && delete g[N])
            }
            ;
            g[N] = e,
            u ? O(u, [T, L]) : L()
        },
        clone(T) {
            return Ci(T, t, n, i)
        }
    };
    return I
}
function si(e) {
    if (vn(e))
        return e = Ke(e),
        e.children = null,
        e
}
function Os(e) {
    return vn(e) ? e.children ? e.children[0] : void 0 : e
}
function Hn(e, t) {
    e.shapeFlag & 6 && e.component ? Hn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function Yr(e, t=!1, n) {
    let i = []
      , s = 0;
    for (let r = 0; r < e.length; r++) {
        let l = e[r];
        const a = n == null ? l.key : String(n) + String(l.key != null ? l.key : r);
        l.type === xe ? (l.patchFlag & 128 && s++,
        i = i.concat(Yr(l.children, t, a))) : (t || l.type !== Ee) && i.push(a != null ? Ke(l, {
            key: a
        }) : l)
    }
    if (s > 1)
        for (let r = 0; r < i.length; r++)
            i[r].patchFlag = -2;
    return i
}
function Jo(e, t) {
    return U(e) ? ( () => ce({
        name: e.name
    }, t, {
        setup: e
    }))() : e
}
const bt = e => !!e.type.__asyncLoader;
function Uu(e) {
    U(e) && (e = {
        loader: e
    });
    const {loader: t, loadingComponent: n, errorComponent: i, delay: s=200, timeout: r, suspensible: l=!0, onError: a} = e;
    let o = null, d, f = 0;
    const c = () => (f++,
    o = null,
    u())
      , u = () => {
        let m;
        return o || (m = o = t().catch(E => {
            if (E = E instanceof Error ? E : new Error(String(E)),
            a)
                return new Promise( (b, C) => {
                    a(E, () => b(c()), () => C(E), f + 1)
                }
                );
            throw E
        }
        ).then(E => m !== o && o ? o : (E && (E.__esModule || E[Symbol.toStringTag] === "Module") && (E = E.default),
        d = E,
        E)))
    }
    ;
    return Jo({
        name: "AsyncComponentWrapper",
        __asyncLoader: u,
        get __asyncResolved() {
            return d
        },
        setup() {
            const m = de;
            if (d)
                return () => ri(d, m);
            const E = p => {
                o = null,
                qt(p, m, 13, !i)
            }
            ;
            if (l && m.suspense || kt)
                return u().then(p => () => ri(p, m)).catch(p => (E(p),
                () => i ? oe(i, {
                    error: p
                }) : null));
            const b = he(!1)
              , C = he()
              , y = he(!!s);
            return s && setTimeout( () => {
                y.value = !1
            }
            , s),
            r != null && setTimeout( () => {
                if (!b.value && !C.value) {
                    const p = new Error(`Async component timed out after ${r}ms.`);
                    E(p),
                    C.value = p
                }
            }
            , r),
            u().then( () => {
                b.value = !0,
                m.parent && vn(m.parent.vnode) && qn(m.parent.update)
            }
            ).catch(p => {
                E(p),
                C.value = p
            }
            ),
            () => {
                if (b.value && d)
                    return ri(d, m);
                if (C.value && i)
                    return oe(i, {
                        error: C.value
                    });
                if (n && !y.value)
                    return oe(n)
            }
        }
    })
}
function ri(e, t) {
    const {ref: n, props: i, children: s, ce: r} = t.vnode
      , l = oe(e, i, s);
    return l.ref = n,
    l.ce = r,
    delete t.vnode.ce,
    l
}
const vn = e => e.type.__isKeepAlive
  , Zo = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(e, {slots: t}) {
        const n = bn()
          , i = n.ctx;
        if (!i.renderer)
            return () => {
                const p = t.default && t.default();
                return p && p.length === 1 ? p[0] : p
            }
            ;
        const s = new Map
          , r = new Set;
        let l = null;
        const a = n.suspense
          , {renderer: {p: o, m: d, um: f, o: {createElement: c}}} = i
          , u = c("div");
        i.activate = (p, h, g, S, O) => {
            const I = p.component;
            d(p, h, g, 0, a),
            o(I.vnode, p, h, g, I, a, S, p.slotScopeIds, O),
            ve( () => {
                I.isDeactivated = !1,
                I.a && At(I.a);
                const T = p.props && p.props.onVnodeMounted;
                T && Se(T, I.parent, p)
            }
            , a)
        }
        ,
        i.deactivate = p => {
            const h = p.component;
            d(p, u, null, 1, a),
            ve( () => {
                h.da && At(h.da);
                const g = p.props && p.props.onVnodeUnmounted;
                g && Se(g, h.parent, p),
                h.isDeactivated = !0
            }
            , a)
        }
        ;
        function m(p) {
            li(p),
            f(p, n, a, !0)
        }
        function E(p) {
            s.forEach( (h, g) => {
                const S = Oi(h.type);
                S && (!p || !p(S)) && b(g)
            }
            )
        }
        function b(p) {
            const h = s.get(p);
            !l || !$e(h, l) ? m(h) : l && li(l),
            s.delete(p),
            r.delete(p)
        }
        yt( () => [e.include, e.exclude], ([p,h]) => {
            p && E(g => nn(p, g)),
            h && E(g => !nn(h, g))
        }
        , {
            flush: "post",
            deep: !0
        });
        let C = null;
        const y = () => {
            C != null && s.set(C, oi(n.subTree))
        }
        ;
        return Ut(y),
        Qn(y),
        yn( () => {
            s.forEach(p => {
                const {subTree: h, suspense: g} = n
                  , S = oi(h);
                if (p.type === S.type && p.key === S.key) {
                    li(S);
                    const O = S.component.da;
                    O && ve(O, g);
                    return
                }
                m(p)
            }
            )
        }
        ),
        () => {
            if (C = null,
            !t.default)
                return null;
            const p = t.default()
              , h = p[0];
            if (p.length > 1)
                return l = null,
                p;
            if (!Ht(h) || !(h.shapeFlag & 4) && !(h.shapeFlag & 128))
                return l = null,
                h;
            let g = oi(h);
            const S = g.type
              , O = Oi(bt(g) ? g.type.__asyncResolved || {} : S)
              , {include: I, exclude: T, max: x} = e;
            if (I && (!O || !nn(I, O)) || T && O && nn(T, O))
                return l = g,
                h;
            const N = g.key == null ? S : g.key
              , _ = s.get(N);
            return g.el && (g = Ke(g),
            h.shapeFlag & 128 && (h.ssContent = g)),
            C = N,
            _ ? (g.el = _.el,
            g.component = _.component,
            g.transition && Hn(g, g.transition),
            g.shapeFlag |= 512,
            r.delete(N),
            r.add(N)) : (r.add(N),
            x && r.size > parseInt(x, 10) && b(r.values().next().value)),
            g.shapeFlag |= 256,
            l = g,
            Hr(h.type) ? h : g
        }
    }
}
  , Ku = Zo;
function nn(e, t) {
    return Y(e) ? e.some(n => nn(n, t)) : ae(e) ? e.split(",").includes(t) : Dl(e) ? e.test(t) : !1
}
function Qo(e, t) {
    Xr(e, "a", t)
}
function ea(e, t) {
    Xr(e, "da", t)
}
function Xr(e, t, n=de) {
    const i = e.__wdc || (e.__wdc = () => {
        let s = n;
        for (; s; ) {
            if (s.isDeactivated)
                return;
            s = s.parent
        }
        return e()
    }
    );
    if (Zn(t, i, n),
    n) {
        let s = n.parent;
        for (; s && s.parent; )
            vn(s.parent.vnode) && ta(i, t, n, s),
            s = s.parent
    }
}
function ta(e, t, n, i) {
    const s = Zn(t, e, i, !0);
    ls( () => {
        ji(i[t], s)
    }
    , n)
}
function li(e) {
    e.shapeFlag &= -257,
    e.shapeFlag &= -513
}
function oi(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}
function Zn(e, t, n=de, i=!1) {
    if (n) {
        const s = n[e] || (n[e] = [])
          , r = t.__weh || (t.__weh = (...l) => {
            if (n.isUnmounted)
                return;
            Xt(),
            ct(n);
            const a = De(t, n, e, l);
            return ot(),
            Gt(),
            a
        }
        );
        return i ? s.unshift(r) : s.push(r),
        r
    }
}
const Je = e => (t, n=de) => (!kt || e === "sp") && Zn(e, (...i) => t(...i), n)
  , na = Je("bm")
  , Ut = Je("m")
  , Gr = Je("bu")
  , Qn = Je("u")
  , yn = Je("bum")
  , ls = Je("um")
  , ia = Je("sp")
  , sa = Je("rtg")
  , ra = Je("rtc");
function la(e, t=de) {
    Zn("ec", e, t)
}
const os = "components";
function Ju(e, t) {
    return Ur(os, e, !0, t) || e
}
const qr = Symbol.for("v-ndc");
function Zu(e) {
    return ae(e) ? Ur(os, e, !1) || e : e || qr
}
function Ur(e, t, n=!0, i=!1) {
    const s = ge || de;
    if (s) {
        const r = s.type;
        if (e === os) {
            const a = Oi(r, !1);
            if (a && (a === t || a === We(t) || a === Xn(We(t))))
                return r
        }
        const l = As(s[e] || r[e], t) || As(s.appContext[e], t);
        return !l && i ? r : l
    }
}
function As(e, t) {
    return e && (e[t] || e[We(t)] || e[Xn(We(t))])
}
function Qu(e, t, n, i) {
    let s;
    const r = n && n[i];
    if (Y(e) || ae(e)) {
        s = new Array(e.length);
        for (let l = 0, a = e.length; l < a; l++)
            s[l] = t(e[l], l, void 0, r && r[l])
    } else if (typeof e == "number") {
        s = new Array(e);
        for (let l = 0; l < e; l++)
            s[l] = t(l + 1, l, void 0, r && r[l])
    } else if (ie(e))
        if (e[Symbol.iterator])
            s = Array.from(e, (l, a) => t(l, a, void 0, r && r[a]));
        else {
            const l = Object.keys(e);
            s = new Array(l.length);
            for (let a = 0, o = l.length; a < o; a++) {
                const d = l[a];
                s[a] = t(e[d], d, a, r && r[a])
            }
        }
    else
        s = [];
    return n && (n[i] = s),
    s
}
function ef(e, t, n={}, i, s) {
    if (ge.isCE || ge.parent && bt(ge.parent) && ge.parent.isCE)
        return t !== "default" && (n.name = t),
        oe("slot", n, i && i());
    let r = e[t];
    r && r._c && (r._d = !1),
    fs();
    const l = r && Kr(r(n))
      , a = al(xe, {
        key: n.key || l && l.key || `_${t}`
    }, l || (i ? i() : []), l && e._ === 1 ? 64 : -2);
    return !s && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    r && r._c && (r._d = !0),
    a
}
function Kr(e) {
    return e.some(t => Ht(t) ? !(t.type === Ee || t.type === xe && !Kr(t.children)) : !0) ? e : null
}
const _i = e => e ? dl(e) ? ti(e) || e.proxy : _i(e.parent) : null
  , ln = ce(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => _i(e.parent),
    $root: e => _i(e.root),
    $emit: e => e.emit,
    $options: e => as(e),
    $forceUpdate: e => e.f || (e.f = () => qn(e.update)),
    $nextTick: e => e.n || (e.n = Dr.bind(e.proxy)),
    $watch: e => Go.bind(e)
})
  , ai = (e, t) => e !== le && !e.__isScriptSetup && ee(e, t)
  , oa = {
    get({_: e}, t) {
        const {ctx: n, setupState: i, data: s, props: r, accessCache: l, type: a, appContext: o} = e;
        let d;
        if (t[0] !== "$") {
            const m = l[t];
            if (m !== void 0)
                switch (m) {
                case 1:
                    return i[t];
                case 2:
                    return s[t];
                case 4:
                    return n[t];
                case 3:
                    return r[t]
                }
            else {
                if (ai(i, t))
                    return l[t] = 1,
                    i[t];
                if (s !== le && ee(s, t))
                    return l[t] = 2,
                    s[t];
                if ((d = e.propsOptions[0]) && ee(d, t))
                    return l[t] = 3,
                    r[t];
                if (n !== le && ee(n, t))
                    return l[t] = 4,
                    n[t];
                Mi && (l[t] = 0)
            }
        }
        const f = ln[t];
        let c, u;
        if (f)
            return t === "$attrs" && Te(e, "get", t),
            f(e);
        if ((c = a.__cssModules) && (c = c[t]))
            return c;
        if (n !== le && ee(n, t))
            return l[t] = 4,
            n[t];
        if (u = o.config.globalProperties,
        ee(u, t))
            return u[t]
    },
    set({_: e}, t, n) {
        const {data: i, setupState: s, ctx: r} = e;
        return ai(s, t) ? (s[t] = n,
        !0) : i !== le && ee(i, t) ? (i[t] = n,
        !0) : ee(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (r[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: i, appContext: s, propsOptions: r}}, l) {
        let a;
        return !!n[l] || e !== le && ee(e, l) || ai(t, l) || (a = r[0]) && ee(a, l) || ee(i, l) || ee(ln, l) || ee(s.config.globalProperties, l)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : ee(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function tf(e, t, n) {
    const i = bn();
    if (n && n.local) {
        const s = he(e[t]);
        return yt( () => e[t], r => s.value = r),
        yt(s, r => {
            r !== e[t] && i.emit(`update:${t}`, r)
        }
        ),
        s
    } else
        return {
            __v_isRef: !0,
            get value() {
                return e[t]
            },
            set value(s) {
                i.emit(`update:${t}`, s)
            }
        }
}
function kn(e) {
    return Y(e) ? e.reduce( (t, n) => (t[n] = null,
    t), {}) : e
}
function nf(e, t) {
    return !e || !t ? e || t : Y(e) && Y(t) ? e.concat(t) : ce({}, kn(e), kn(t))
}
function sf(e) {
    const t = bn();
    let n = e();
    return ot(),
    Wi(n) && (n = n.catch(i => {
        throw ct(t),
        i
    }
    )),
    [n, () => ct(t)]
}
let Mi = !0;
function aa(e) {
    const t = as(e)
      , n = e.proxy
      , i = e.ctx;
    Mi = !1,
    t.beforeCreate && Bs(t.beforeCreate, e, "bc");
    const {data: s, computed: r, methods: l, watch: a, provide: o, inject: d, created: f, beforeMount: c, mounted: u, beforeUpdate: m, updated: E, activated: b, deactivated: C, beforeDestroy: y, beforeUnmount: p, destroyed: h, unmounted: g, render: S, renderTracked: O, renderTriggered: I, errorCaptured: T, serverPrefetch: x, expose: N, inheritAttrs: _, components: L, directives: D, filters: z} = t;
    if (d && ca(d, i, null),
    l)
        for (const M in l) {
            const F = l[M];
            U(F) && (i[M] = F.bind(n))
        }
    if (s) {
        const M = s.call(n, n);
        ie(M) && (e.data = es(M))
    }
    if (Mi = !0,
    r)
        for (const M in r) {
            const F = r[M]
              , k = U(F) ? F.bind(n, n) : U(F.get) ? F.get.bind(n, n) : He
              , Z = !U(F) && U(F.set) ? F.set.bind(n) : He
              , se = hl({
                get: k,
                set: Z
            });
            Object.defineProperty(i, M, {
                enumerable: !0,
                configurable: !0,
                get: () => se.value,
                set: ue => se.value = ue
            })
        }
    if (a)
        for (const M in a)
            Jr(a[M], i, n, M);
    if (o) {
        const M = U(o) ? o.call(n) : o;
        Reflect.ownKeys(M).forEach(F => {
            cs(F, M[F])
        }
        )
    }
    f && Bs(f, e, "c");
    function q(M, F) {
        Y(F) ? F.forEach(k => M(k.bind(n))) : F && M(F.bind(n))
    }
    if (q(na, c),
    q(Ut, u),
    q(Gr, m),
    q(Qn, E),
    q(Qo, b),
    q(ea, C),
    q(la, T),
    q(ra, O),
    q(sa, I),
    q(yn, p),
    q(ls, g),
    q(ia, x),
    Y(N))
        if (N.length) {
            const M = e.exposed || (e.exposed = {});
            N.forEach(F => {
                Object.defineProperty(M, F, {
                    get: () => n[F],
                    set: k => n[F] = k
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    S && e.render === He && (e.render = S),
    _ != null && (e.inheritAttrs = _),
    L && (e.components = L),
    D && (e.directives = D)
}
function ca(e, t, n=He) {
    Y(e) && (e = Pi(e));
    for (const i in e) {
        const s = e[i];
        let r;
        ie(s) ? "default"in s ? r = On(s.from || i, s.default, !0) : r = On(s.from || i) : r = On(s),
        me(r) ? Object.defineProperty(t, i, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: l => r.value = l
        }) : t[i] = r
    }
}
function Bs(e, t, n) {
    De(Y(e) ? e.map(i => i.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Jr(e, t, n, i) {
    const s = i.includes(".") ? Vr(n, i) : () => n[i];
    if (ae(e)) {
        const r = t[e];
        U(r) && yt(s, r)
    } else if (U(e))
        yt(s, e.bind(n));
    else if (ie(e))
        if (Y(e))
            e.forEach(r => Jr(r, t, n, i));
        else {
            const r = U(e.handler) ? e.handler.bind(n) : t[e.handler];
            U(r) && yt(s, r, e)
        }
}
function as(e) {
    const t = e.type
      , {mixins: n, extends: i} = t
      , {mixins: s, optionsCache: r, config: {optionMergeStrategies: l}} = e.appContext
      , a = r.get(t);
    let o;
    return a ? o = a : !s.length && !n && !i ? o = t : (o = {},
    s.length && s.forEach(d => Vn(o, d, l, !0)),
    Vn(o, t, l)),
    ie(t) && r.set(t, o),
    o
}
function Vn(e, t, n, i=!1) {
    const {mixins: s, extends: r} = t;
    r && Vn(e, r, n, !0),
    s && s.forEach(l => Vn(e, l, n, !0));
    for (const l in t)
        if (!(i && l === "expose")) {
            const a = ua[l] || n && n[l];
            e[l] = a ? a(e[l], t[l]) : t[l]
        }
    return e
}
const ua = {
    data: zs,
    props: Ds,
    emits: Ds,
    methods: sn,
    computed: sn,
    beforeCreate: we,
    created: we,
    beforeMount: we,
    mounted: we,
    beforeUpdate: we,
    updated: we,
    beforeDestroy: we,
    beforeUnmount: we,
    destroyed: we,
    unmounted: we,
    activated: we,
    deactivated: we,
    errorCaptured: we,
    serverPrefetch: we,
    components: sn,
    directives: sn,
    watch: da,
    provide: zs,
    inject: fa
};
function zs(e, t) {
    return t ? e ? function() {
        return ce(U(e) ? e.call(this, this) : e, U(t) ? t.call(this, this) : t)
    }
    : t : e
}
function fa(e, t) {
    return sn(Pi(e), Pi(t))
}
function Pi(e) {
    if (Y(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function we(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function sn(e, t) {
    return e ? ce(Object.create(null), e, t) : t
}
function Ds(e, t) {
    return e ? Y(e) && Y(t) ? [...new Set([...e, ...t])] : ce(Object.create(null), kn(e), kn(t ?? {})) : t
}
function da(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = ce(Object.create(null), e);
    for (const i in t)
        n[i] = we(e[i], t[i]);
    return n
}
function Zr() {
    return {
        app: null,
        config: {
            isNativeTag: Al,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let pa = 0;
function ha(e, t) {
    return function(i, s=null) {
        U(i) || (i = ce({}, i)),
        s != null && !ie(s) && (s = null);
        const r = Zr()
          , l = new Set;
        let a = !1;
        const o = r.app = {
            _uid: pa++,
            _component: i,
            _props: s,
            _container: null,
            _context: r,
            _instance: null,
            version: Na,
            get config() {
                return r.config
            },
            set config(d) {},
            use(d, ...f) {
                return l.has(d) || (d && U(d.install) ? (l.add(d),
                d.install(o, ...f)) : U(d) && (l.add(d),
                d(o, ...f))),
                o
            },
            mixin(d) {
                return r.mixins.includes(d) || r.mixins.push(d),
                o
            },
            component(d, f) {
                return f ? (r.components[d] = f,
                o) : r.components[d]
            },
            directive(d, f) {
                return f ? (r.directives[d] = f,
                o) : r.directives[d]
            },
            mount(d, f, c) {
                if (!a) {
                    const u = oe(i, s);
                    return u.appContext = r,
                    f && t ? t(u, d) : e(u, d, c),
                    a = !0,
                    o._container = d,
                    d.__vue_app__ = o,
                    ti(u.component) || u.component.proxy
                }
            },
            unmount() {
                a && (e(null, o._container),
                delete o._container.__vue_app__)
            },
            provide(d, f) {
                return r.provides[d] = f,
                o
            },
            runWithContext(d) {
                mn = o;
                try {
                    return d()
                } finally {
                    mn = null
                }
            }
        };
        return o
    }
}
let mn = null;
function cs(e, t) {
    if (de) {
        let n = de.provides;
        const i = de.parent && de.parent.provides;
        i === n && (n = de.provides = Object.create(i)),
        n[e] = t
    }
}
function On(e, t, n=!1) {
    const i = de || ge;
    if (i || mn) {
        const s = i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : mn._context.provides;
        if (s && e in s)
            return s[e];
        if (arguments.length > 1)
            return n && U(t) ? t.call(i && i.proxy) : t
    }
}
function rf() {
    return !!(de || ge || mn)
}
function ma(e, t, n, i=!1) {
    const s = {}
      , r = {};
    zn(r, ei, 1),
    e.propsDefaults = Object.create(null),
    Qr(e, t, s, r);
    for (const l in e.propsOptions[0])
        l in s || (s[l] = void 0);
    n ? e.props = i ? s : Eo(s) : e.type.props ? e.props = s : e.props = r,
    e.attrs = r
}
function ga(e, t, n, i) {
    const {props: s, attrs: r, vnode: {patchFlag: l}} = e
      , a = te(s)
      , [o] = e.propsOptions;
    let d = !1;
    if ((i || l > 0) && !(l & 16)) {
        if (l & 8) {
            const f = e.vnode.dynamicProps;
            for (let c = 0; c < f.length; c++) {
                let u = f[c];
                if (Un(e.emitsOptions, u))
                    continue;
                const m = t[u];
                if (o)
                    if (ee(r, u))
                        m !== r[u] && (r[u] = m,
                        d = !0);
                    else {
                        const E = We(u);
                        s[E] = Ii(o, a, E, m, e, !1)
                    }
                else
                    m !== r[u] && (r[u] = m,
                    d = !0)
            }
        }
    } else {
        Qr(e, t, s, r) && (d = !0);
        let f;
        for (const c in a)
            (!t || !ee(t, c) && ((f = Yt(c)) === c || !ee(t, f))) && (o ? n && (n[c] !== void 0 || n[f] !== void 0) && (s[c] = Ii(o, a, c, void 0, e, !0)) : delete s[c]);
        if (r !== a)
            for (const c in r)
                (!t || !ee(t, c)) && (delete r[c],
                d = !0)
    }
    d && Ue(e, "set", "$attrs")
}
function Qr(e, t, n, i) {
    const [s,r] = e.propsOptions;
    let l = !1, a;
    if (t)
        for (let o in t) {
            if (rn(o))
                continue;
            const d = t[o];
            let f;
            s && ee(s, f = We(o)) ? !r || !r.includes(f) ? n[f] = d : (a || (a = {}))[f] = d : Un(e.emitsOptions, o) || (!(o in i) || d !== i[o]) && (i[o] = d,
            l = !0)
        }
    if (r) {
        const o = te(n)
          , d = a || le;
        for (let f = 0; f < r.length; f++) {
            const c = r[f];
            n[c] = Ii(s, o, c, d[c], e, !ee(d, c))
        }
    }
    return l
}
function Ii(e, t, n, i, s, r) {
    const l = e[n];
    if (l != null) {
        const a = ee(l, "default");
        if (a && i === void 0) {
            const o = l.default;
            if (l.type !== Function && !l.skipFactory && U(o)) {
                const {propsDefaults: d} = s;
                n in d ? i = d[n] : (ct(s),
                i = d[n] = o.call(null, t),
                ot())
            } else
                i = o
        }
        l[0] && (r && !a ? i = !1 : l[1] && (i === "" || i === Yt(n)) && (i = !0))
    }
    return i
}
function el(e, t, n=!1) {
    const i = t.propsCache
      , s = i.get(e);
    if (s)
        return s;
    const r = e.props
      , l = {}
      , a = [];
    let o = !1;
    if (!U(e)) {
        const f = c => {
            o = !0;
            const [u,m] = el(c, t, !0);
            ce(l, u),
            m && a.push(...m)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(f),
        e.extends && f(e.extends),
        e.mixins && e.mixins.forEach(f)
    }
    if (!r && !o)
        return ie(e) && i.set(e, Lt),
        Lt;
    if (Y(r))
        for (let f = 0; f < r.length; f++) {
            const c = We(r[f]);
            Fs(c) && (l[c] = le)
        }
    else if (r)
        for (const f in r) {
            const c = We(f);
            if (Fs(c)) {
                const u = r[f]
                  , m = l[c] = Y(u) || U(u) ? {
                    type: u
                } : ce({}, u);
                if (m) {
                    const E = $s(Boolean, m.type)
                      , b = $s(String, m.type);
                    m[0] = E > -1,
                    m[1] = b < 0 || E < b,
                    (E > -1 || ee(m, "default")) && a.push(c)
                }
            }
        }
    const d = [l, a];
    return ie(e) && i.set(e, d),
    d
}
function Fs(e) {
    return e[0] !== "$"
}
function Rs(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : e === null ? "null" : ""
}
function Ns(e, t) {
    return Rs(e) === Rs(t)
}
function $s(e, t) {
    return Y(t) ? t.findIndex(n => Ns(n, e)) : U(t) && Ns(t, e) ? 0 : -1
}
const tl = e => e[0] === "_" || e === "$stable"
  , us = e => Y(e) ? e.map(Oe) : [Oe(e)]
  , va = (e, t, n) => {
    if (t._n)
        return t;
    const i = Do( (...s) => us(t(...s)), n);
    return i._c = !1,
    i
}
  , nl = (e, t, n) => {
    const i = e._ctx;
    for (const s in e) {
        if (tl(s))
            continue;
        const r = e[s];
        if (U(r))
            t[s] = va(s, r, i);
        else if (r != null) {
            const l = us(r);
            t[s] = () => l
        }
    }
}
  , il = (e, t) => {
    const n = us(t);
    e.slots.default = () => n
}
  , ya = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
        const n = t._;
        n ? (e.slots = te(t),
        zn(t, "_", n)) : nl(t, e.slots = {})
    } else
        e.slots = {},
        t && il(e, t);
    zn(e.slots, ei, 1)
}
  , ba = (e, t, n) => {
    const {vnode: i, slots: s} = e;
    let r = !0
      , l = le;
    if (i.shapeFlag & 32) {
        const a = t._;
        a ? n && a === 1 ? r = !1 : (ce(s, t),
        !n && a === 1 && delete s._) : (r = !t.$stable,
        nl(t, s)),
        l = t
    } else
        t && (il(e, t),
        l = {
            default: 1
        });
    if (r)
        for (const a in s)
            !tl(a) && !(a in l) && delete s[a]
}
;
function jn(e, t, n, i, s=!1) {
    if (Y(e)) {
        e.forEach( (u, m) => jn(u, t && (Y(t) ? t[m] : t), n, i, s));
        return
    }
    if (bt(i) && !s)
        return;
    const r = i.shapeFlag & 4 ? ti(i.component) || i.component.proxy : i.el
      , l = s ? null : r
      , {i: a, r: o} = e
      , d = t && t.r
      , f = a.refs === le ? a.refs = {} : a.refs
      , c = a.setupState;
    if (d != null && d !== o && (ae(d) ? (f[d] = null,
    ee(c, d) && (c[d] = null)) : me(d) && (d.value = null)),
    U(o))
        lt(o, a, 12, [l, f]);
    else {
        const u = ae(o)
          , m = me(o);
        if (u || m) {
            const E = () => {
                if (e.f) {
                    const b = u ? ee(c, o) ? c[o] : f[o] : o.value;
                    s ? Y(b) && ji(b, r) : Y(b) ? b.includes(r) || b.push(r) : u ? (f[o] = [r],
                    ee(c, o) && (c[o] = f[o])) : (o.value = [r],
                    e.k && (f[e.k] = o.value))
                } else
                    u ? (f[o] = l,
                    ee(c, o) && (c[o] = l)) : m && (o.value = l,
                    e.k && (f[e.k] = l))
            }
            ;
            l ? (E.id = -1,
            ve(E, n)) : E()
        }
    }
}
let et = !1;
const _n = e => /svg/.test(e.namespaceURI) && e.tagName !== "foreignObject"
  , Mn = e => e.nodeType === 8;
function wa(e) {
    const {mt: t, p: n, o: {patchProp: i, createText: s, nextSibling: r, parentNode: l, remove: a, insert: o, createComment: d}} = e
      , f = (y, p) => {
        if (!p.hasChildNodes()) {
            n(null, y, p),
            Nn(),
            p._vnode = y;
            return
        }
        et = !1,
        c(p.firstChild, y, null, null, null),
        Nn(),
        p._vnode = y,
        et && console.error("Hydration completed but contains mismatches.")
    }
      , c = (y, p, h, g, S, O=!1) => {
        const I = Mn(y) && y.data === "["
          , T = () => b(y, p, h, g, S, I)
          , {type: x, ref: N, shapeFlag: _, patchFlag: L} = p;
        let D = y.nodeType;
        p.el = y,
        L === -2 && (O = !1,
        p.dynamicChildren = null);
        let z = null;
        switch (x) {
        case Nt:
            D !== 3 ? p.children === "" ? (o(p.el = s(""), l(y), y),
            z = y) : z = T() : (y.data !== p.children && (et = !0,
            y.data = p.children),
            z = r(y));
            break;
        case Ee:
            D !== 8 || I ? z = T() : z = r(y);
            break;
        case Ft:
            if (I && (y = r(y),
            D = y.nodeType),
            D === 1 || D === 3) {
                z = y;
                const J = !p.children.length;
                for (let q = 0; q < p.staticCount; q++)
                    J && (p.children += z.nodeType === 1 ? z.outerHTML : z.data),
                    q === p.staticCount - 1 && (p.anchor = z),
                    z = r(z);
                return I ? r(z) : z
            } else
                T();
            break;
        case xe:
            I ? z = E(y, p, h, g, S, O) : z = T();
            break;
        default:
            if (_ & 1)
                D !== 1 || p.type.toLowerCase() !== y.tagName.toLowerCase() ? z = T() : z = u(y, p, h, g, S, O);
            else if (_ & 6) {
                p.slotScopeIds = S;
                const J = l(y);
                if (t(p, J, null, h, g, _n(J), O),
                z = I ? C(y) : r(y),
                z && Mn(z) && z.data === "teleport end" && (z = r(z)),
                bt(p)) {
                    let q;
                    I ? (q = oe(xe),
                    q.anchor = z ? z.previousSibling : J.lastChild) : q = y.nodeType === 3 ? fl("") : oe("div"),
                    q.el = y,
                    p.component.subTree = q
                }
            } else
                _ & 64 ? D !== 8 ? z = T() : z = p.type.hydrate(y, p, h, g, S, O, e, m) : _ & 128 && (z = p.type.hydrate(y, p, h, g, _n(l(y)), S, O, e, c))
        }
        return N != null && jn(N, null, g, p),
        z
    }
      , u = (y, p, h, g, S, O) => {
        O = O || !!p.dynamicChildren;
        const {type: I, props: T, patchFlag: x, shapeFlag: N, dirs: _} = p
          , L = I === "input" && _ || I === "option";
        if (L || x !== -1) {
            if (_ && Ve(p, null, h, "created"),
            T)
                if (L || !O || x & 48)
                    for (const z in T)
                        (L && z.endsWith("value") || gn(z) && !rn(z)) && i(y, z, null, T[z], !1, void 0, h);
                else
                    T.onClick && i(y, "onClick", null, T.onClick, !1, void 0, h);
            let D;
            if ((D = T && T.onVnodeBeforeMount) && Se(D, h, p),
            _ && Ve(p, null, h, "beforeMount"),
            ((D = T && T.onVnodeMounted) || _) && kr( () => {
                D && Se(D, h, p),
                _ && Ve(p, null, h, "mounted")
            }
            , g),
            N & 16 && !(T && (T.innerHTML || T.textContent))) {
                let z = m(y.firstChild, p, y, h, g, S, O);
                for (; z; ) {
                    et = !0;
                    const J = z;
                    z = z.nextSibling,
                    a(J)
                }
            } else
                N & 8 && y.textContent !== p.children && (et = !0,
                y.textContent = p.children)
        }
        return y.nextSibling
    }
      , m = (y, p, h, g, S, O, I) => {
        I = I || !!p.dynamicChildren;
        const T = p.children
          , x = T.length;
        for (let N = 0; N < x; N++) {
            const _ = I ? T[N] : T[N] = Oe(T[N]);
            if (y)
                y = c(y, _, g, S, O, I);
            else {
                if (_.type === Nt && !_.children)
                    continue;
                et = !0,
                n(null, _, h, null, g, S, _n(h), O)
            }
        }
        return y
    }
      , E = (y, p, h, g, S, O) => {
        const {slotScopeIds: I} = p;
        I && (S = S ? S.concat(I) : I);
        const T = l(y)
          , x = m(r(y), p, T, h, g, S, O);
        return x && Mn(x) && x.data === "]" ? r(p.anchor = x) : (et = !0,
        o(p.anchor = d("]"), T, x),
        x)
    }
      , b = (y, p, h, g, S, O) => {
        if (et = !0,
        p.el = null,
        O) {
            const x = C(y);
            for (; ; ) {
                const N = r(y);
                if (N && N !== x)
                    a(N);
                else
                    break
            }
        }
        const I = r(y)
          , T = l(y);
        return a(y),
        n(null, p, T, I, h, g, _n(T), S),
        I
    }
      , C = y => {
        let p = 0;
        for (; y; )
            if (y = r(y),
            y && Mn(y) && (y.data === "[" && p++,
            y.data === "]")) {
                if (p === 0)
                    return r(y);
                p--
            }
        return y
    }
    ;
    return [f, c]
}
const ve = kr;
function xa(e) {
    return sl(e)
}
function Ea(e) {
    return sl(e, wa)
}
function sl(e, t) {
    const n = wi();
    n.__VUE__ = !0;
    const {insert: i, remove: s, patchProp: r, createElement: l, createText: a, createComment: o, setText: d, setElementText: f, parentNode: c, nextSibling: u, setScopeId: m=He, insertStaticContent: E} = e
      , b = (v, w, P, B=null, A=null, H=null, j=!1, $=null, V=!!w.dynamicChildren) => {
        if (v === w)
            return;
        v && !$e(v, w) && (B = Ie(v),
        ue(v, A, H, !0),
        v = null),
        w.patchFlag === -2 && (V = !1,
        w.dynamicChildren = null);
        const {type: R, ref: X, shapeFlag: W} = w;
        switch (R) {
        case Nt:
            C(v, w, P, B);
            break;
        case Ee:
            y(v, w, P, B);
            break;
        case Ft:
            v == null && p(w, P, B, j);
            break;
        case xe:
            L(v, w, P, B, A, H, j, $, V);
            break;
        default:
            W & 1 ? S(v, w, P, B, A, H, j, $, V) : W & 6 ? D(v, w, P, B, A, H, j, $, V) : (W & 64 || W & 128) && R.process(v, w, P, B, A, H, j, $, V, Ye)
        }
        X != null && A && jn(X, v && v.ref, H, w || v, !w)
    }
      , C = (v, w, P, B) => {
        if (v == null)
            i(w.el = a(w.children), P, B);
        else {
            const A = w.el = v.el;
            w.children !== v.children && d(A, w.children)
        }
    }
      , y = (v, w, P, B) => {
        v == null ? i(w.el = o(w.children || ""), P, B) : w.el = v.el
    }
      , p = (v, w, P, B) => {
        [v.el,v.anchor] = E(v.children, w, P, B, v.el, v.anchor)
    }
      , h = ({el: v, anchor: w}, P, B) => {
        let A;
        for (; v && v !== w; )
            A = u(v),
            i(v, P, B),
            v = A;
        i(w, P, B)
    }
      , g = ({el: v, anchor: w}) => {
        let P;
        for (; v && v !== w; )
            P = u(v),
            s(v),
            v = P;
        s(w)
    }
      , S = (v, w, P, B, A, H, j, $, V) => {
        j = j || w.type === "svg",
        v == null ? O(w, P, B, A, H, j, $, V) : x(v, w, A, H, j, $, V)
    }
      , O = (v, w, P, B, A, H, j, $) => {
        let V, R;
        const {type: X, props: W, shapeFlag: G, transition: K, dirs: Q} = v;
        if (V = v.el = l(v.type, H, W && W.is, W),
        G & 8 ? f(V, v.children) : G & 16 && T(v.children, V, null, B, A, H && X !== "foreignObject", j, $),
        Q && Ve(v, null, B, "created"),
        I(V, v, v.scopeId, j, B),
        W) {
            for (const ne in W)
                ne !== "value" && !rn(ne) && r(V, ne, null, W[ne], H, v.children, B, A, pe);
            "value"in W && r(V, "value", null, W.value),
            (R = W.onVnodeBeforeMount) && Se(R, B, v)
        }
        Q && Ve(v, null, B, "beforeMount");
        const re = (!A || A && !A.pendingBranch) && K && !K.persisted;
        re && K.beforeEnter(V),
        i(V, w, P),
        ((R = W && W.onVnodeMounted) || re || Q) && ve( () => {
            R && Se(R, B, v),
            re && K.enter(V),
            Q && Ve(v, null, B, "mounted")
        }
        , A)
    }
      , I = (v, w, P, B, A) => {
        if (P && m(v, P),
        B)
            for (let H = 0; H < B.length; H++)
                m(v, B[H]);
        if (A) {
            let H = A.subTree;
            if (w === H) {
                const j = A.vnode;
                I(v, j, j.scopeId, j.slotScopeIds, A.parent)
            }
        }
    }
      , T = (v, w, P, B, A, H, j, $, V=0) => {
        for (let R = V; R < v.length; R++) {
            const X = v[R] = $ ? it(v[R]) : Oe(v[R]);
            b(null, X, w, P, B, A, H, j, $)
        }
    }
      , x = (v, w, P, B, A, H, j) => {
        const $ = w.el = v.el;
        let {patchFlag: V, dynamicChildren: R, dirs: X} = w;
        V |= v.patchFlag & 16;
        const W = v.props || le
          , G = w.props || le;
        let K;
        P && ft(P, !1),
        (K = G.onVnodeBeforeUpdate) && Se(K, P, w, v),
        X && Ve(w, v, P, "beforeUpdate"),
        P && ft(P, !0);
        const Q = A && w.type !== "foreignObject";
        if (R ? N(v.dynamicChildren, R, $, P, B, Q, H) : j || F(v, w, $, null, P, B, Q, H, !1),
        V > 0) {
            if (V & 16)
                _($, w, W, G, P, B, A);
            else if (V & 2 && W.class !== G.class && r($, "class", null, G.class, A),
            V & 4 && r($, "style", W.style, G.style, A),
            V & 8) {
                const re = w.dynamicProps;
                for (let ne = 0; ne < re.length; ne++) {
                    const fe = re[ne]
                      , Re = W[fe]
                      , Pt = G[fe];
                    (Pt !== Re || fe === "value") && r($, fe, Re, Pt, A, v.children, P, B, pe)
                }
            }
            V & 1 && v.children !== w.children && f($, w.children)
        } else
            !j && R == null && _($, w, W, G, P, B, A);
        ((K = G.onVnodeUpdated) || X) && ve( () => {
            K && Se(K, P, w, v),
            X && Ve(w, v, P, "updated")
        }
        , B)
    }
      , N = (v, w, P, B, A, H, j) => {
        for (let $ = 0; $ < w.length; $++) {
            const V = v[$]
              , R = w[$]
              , X = V.el && (V.type === xe || !$e(V, R) || V.shapeFlag & 70) ? c(V.el) : P;
            b(V, R, X, null, B, A, H, j, !0)
        }
    }
      , _ = (v, w, P, B, A, H, j) => {
        if (P !== B) {
            if (P !== le)
                for (const $ in P)
                    !rn($) && !($ in B) && r(v, $, P[$], null, j, w.children, A, H, pe);
            for (const $ in B) {
                if (rn($))
                    continue;
                const V = B[$]
                  , R = P[$];
                V !== R && $ !== "value" && r(v, $, R, V, j, w.children, A, H, pe)
            }
            "value"in B && r(v, "value", P.value, B.value)
        }
    }
      , L = (v, w, P, B, A, H, j, $, V) => {
        const R = w.el = v ? v.el : a("")
          , X = w.anchor = v ? v.anchor : a("");
        let {patchFlag: W, dynamicChildren: G, slotScopeIds: K} = w;
        K && ($ = $ ? $.concat(K) : K),
        v == null ? (i(R, P, B),
        i(X, P, B),
        T(w.children, P, X, A, H, j, $, V)) : W > 0 && W & 64 && G && v.dynamicChildren ? (N(v.dynamicChildren, G, P, A, H, j, $),
        (w.key != null || A && w === A.subTree) && rl(v, w, !0)) : F(v, w, P, X, A, H, j, $, V)
    }
      , D = (v, w, P, B, A, H, j, $, V) => {
        w.slotScopeIds = $,
        v == null ? w.shapeFlag & 512 ? A.ctx.activate(w, P, B, j, V) : z(w, P, B, A, H, j, V) : J(v, w, V)
    }
      , z = (v, w, P, B, A, H, j) => {
        const $ = v.component = La(v, B, A);
        if (vn(v) && ($.ctx.renderer = Ye),
        Oa($),
        $.asyncDep) {
            if (A && A.registerDep($, q),
            !v.el) {
                const V = $.subTree = oe(Ee);
                y(null, V, w, P)
            }
            return
        }
        q($, v, w, P, A, H, j)
    }
      , J = (v, w, P) => {
        const B = w.component = v.component;
        if ($o(v, w, P))
            if (B.asyncDep && !B.asyncResolved) {
                M(B, w, P);
                return
            } else
                B.next = w,
                Ao(B.update),
                B.update();
        else
            w.el = v.el,
            B.vnode = w
    }
      , q = (v, w, P, B, A, H, j) => {
        const $ = () => {
            if (v.isMounted) {
                let {next: X, bu: W, u: G, parent: K, vnode: Q} = v, re = X, ne;
                ft(v, !1),
                X ? (X.el = Q.el,
                M(v, X, j)) : X = Q,
                W && At(W),
                (ne = X.props && X.props.onVnodeBeforeUpdate) && Se(ne, K, X, Q),
                ft(v, !0);
                const fe = ii(v)
                  , Re = v.subTree;
                v.subTree = fe,
                b(Re, fe, c(Re.el), Ie(Re), v, A, H),
                X.el = fe.el,
                re === null && ss(v, fe.el),
                G && ve(G, A),
                (ne = X.props && X.props.onVnodeUpdated) && ve( () => Se(ne, K, X, Q), A)
            } else {
                let X;
                const {el: W, props: G} = w
                  , {bm: K, m: Q, parent: re} = v
                  , ne = bt(w);
                if (ft(v, !1),
                K && At(K),
                !ne && (X = G && G.onVnodeBeforeMount) && Se(X, re, w),
                ft(v, !0),
                W && Mt) {
                    const fe = () => {
                        v.subTree = ii(v),
                        Mt(W, v.subTree, v, A, null)
                    }
                    ;
                    ne ? w.type.__asyncLoader().then( () => !v.isUnmounted && fe()) : fe()
                } else {
                    const fe = v.subTree = ii(v);
                    b(null, fe, P, B, v, A, H),
                    w.el = fe.el
                }
                if (Q && ve(Q, A),
                !ne && (X = G && G.onVnodeMounted)) {
                    const fe = w;
                    ve( () => Se(X, re, fe), A)
                }
                (w.shapeFlag & 256 || re && bt(re.vnode) && re.vnode.shapeFlag & 256) && v.a && ve(v.a, A),
                v.isMounted = !0,
                w = P = B = null
            }
        }
          , V = v.effect = new Ki($, () => qn(R),v.scope)
          , R = v.update = () => V.run();
        R.id = v.uid,
        ft(v, !0),
        R()
    }
      , M = (v, w, P) => {
        w.component = v;
        const B = v.vnode.props;
        v.vnode = w,
        v.next = null,
        ga(v, w.props, B, P),
        ba(v, w.children, P),
        Xt(),
        Ps(),
        Gt()
    }
      , F = (v, w, P, B, A, H, j, $, V=!1) => {
        const R = v && v.children
          , X = v ? v.shapeFlag : 0
          , W = w.children
          , {patchFlag: G, shapeFlag: K} = w;
        if (G > 0) {
            if (G & 128) {
                Z(R, W, P, B, A, H, j, $, V);
                return
            } else if (G & 256) {
                k(R, W, P, B, A, H, j, $, V);
                return
            }
        }
        K & 8 ? (X & 16 && pe(R, A, H),
        W !== R && f(P, W)) : X & 16 ? K & 16 ? Z(R, W, P, B, A, H, j, $, V) : pe(R, A, H, !0) : (X & 8 && f(P, ""),
        K & 16 && T(W, P, B, A, H, j, $, V))
    }
      , k = (v, w, P, B, A, H, j, $, V) => {
        v = v || Lt,
        w = w || Lt;
        const R = v.length
          , X = w.length
          , W = Math.min(R, X);
        let G;
        for (G = 0; G < W; G++) {
            const K = w[G] = V ? it(w[G]) : Oe(w[G]);
            b(v[G], K, P, null, A, H, j, $, V)
        }
        R > X ? pe(v, A, H, !0, !1, W) : T(w, P, B, A, H, j, $, V, W)
    }
      , Z = (v, w, P, B, A, H, j, $, V) => {
        let R = 0;
        const X = w.length;
        let W = v.length - 1
          , G = X - 1;
        for (; R <= W && R <= G; ) {
            const K = v[R]
              , Q = w[R] = V ? it(w[R]) : Oe(w[R]);
            if ($e(K, Q))
                b(K, Q, P, null, A, H, j, $, V);
            else
                break;
            R++
        }
        for (; R <= W && R <= G; ) {
            const K = v[W]
              , Q = w[G] = V ? it(w[G]) : Oe(w[G]);
            if ($e(K, Q))
                b(K, Q, P, null, A, H, j, $, V);
            else
                break;
            W--,
            G--
        }
        if (R > W) {
            if (R <= G) {
                const K = G + 1
                  , Q = K < X ? w[K].el : B;
                for (; R <= G; )
                    b(null, w[R] = V ? it(w[R]) : Oe(w[R]), P, Q, A, H, j, $, V),
                    R++
            }
        } else if (R > G)
            for (; R <= W; )
                ue(v[R], A, H, !0),
                R++;
        else {
            const K = R
              , Q = R
              , re = new Map;
            for (R = Q; R <= G; R++) {
                const Ce = w[R] = V ? it(w[R]) : Oe(w[R]);
                Ce.key != null && re.set(Ce.key, R)
            }
            let ne, fe = 0;
            const Re = G - Q + 1;
            let Pt = !1
              , gs = 0;
            const Jt = new Array(Re);
            for (R = 0; R < Re; R++)
                Jt[R] = 0;
            for (R = K; R <= W; R++) {
                const Ce = v[R];
                if (fe >= Re) {
                    ue(Ce, A, H, !0);
                    continue
                }
                let ke;
                if (Ce.key != null)
                    ke = re.get(Ce.key);
                else
                    for (ne = Q; ne <= G; ne++)
                        if (Jt[ne - Q] === 0 && $e(Ce, w[ne])) {
                            ke = ne;
                            break
                        }
                ke === void 0 ? ue(Ce, A, H, !0) : (Jt[ke - Q] = R + 1,
                ke >= gs ? gs = ke : Pt = !0,
                b(Ce, w[ke], P, null, A, H, j, $, V),
                fe++)
            }
            const vs = Pt ? Sa(Jt) : Lt;
            for (ne = vs.length - 1,
            R = Re - 1; R >= 0; R--) {
                const Ce = Q + R
                  , ke = w[Ce]
                  , ys = Ce + 1 < X ? w[Ce + 1].el : B;
                Jt[R] === 0 ? b(null, ke, P, ys, A, H, j, $, V) : Pt && (ne < 0 || R !== vs[ne] ? se(ke, P, ys, 2) : ne--)
            }
        }
    }
      , se = (v, w, P, B, A=null) => {
        const {el: H, type: j, transition: $, children: V, shapeFlag: R} = v;
        if (R & 6) {
            se(v.component.subTree, w, P, B);
            return
        }
        if (R & 128) {
            v.suspense.move(w, P, B);
            return
        }
        if (R & 64) {
            j.move(v, w, P, Ye);
            return
        }
        if (j === xe) {
            i(H, w, P);
            for (let W = 0; W < V.length; W++)
                se(V[W], w, P, B);
            i(v.anchor, w, P);
            return
        }
        if (j === Ft) {
            h(v, w, P);
            return
        }
        if (B !== 2 && R & 1 && $)
            if (B === 0)
                $.beforeEnter(H),
                i(H, w, P),
                ve( () => $.enter(H), A);
            else {
                const {leave: W, delayLeave: G, afterLeave: K} = $
                  , Q = () => i(H, w, P)
                  , re = () => {
                    W(H, () => {
                        Q(),
                        K && K()
                    }
                    )
                }
                ;
                G ? G(H, Q, re) : re()
            }
        else
            i(H, w, P)
    }
      , ue = (v, w, P, B=!1, A=!1) => {
        const {type: H, props: j, ref: $, children: V, dynamicChildren: R, shapeFlag: X, patchFlag: W, dirs: G} = v;
        if ($ != null && jn($, null, P, v, !0),
        X & 256) {
            w.ctx.deactivate(v);
            return
        }
        const K = X & 1 && G
          , Q = !bt(v);
        let re;
        if (Q && (re = j && j.onVnodeBeforeUnmount) && Se(re, w, v),
        X & 6)
            Ct(v.component, P, B);
        else {
            if (X & 128) {
                v.suspense.unmount(P, B);
                return
            }
            K && Ve(v, null, w, "beforeUnmount"),
            X & 64 ? v.type.remove(v, w, P, A, Ye, B) : R && (H !== xe || W > 0 && W & 64) ? pe(R, w, P, !1, !0) : (H === xe && W & 384 || !A && X & 16) && pe(V, w, P),
            B && Pe(v)
        }
        (Q && (re = j && j.onVnodeUnmounted) || K) && ve( () => {
            re && Se(re, w, v),
            K && Ve(v, null, w, "unmounted")
        }
        , P)
    }
      , Pe = v => {
        const {type: w, el: P, anchor: B, transition: A} = v;
        if (w === xe) {
            Ze(P, B);
            return
        }
        if (w === Ft) {
            g(v);
            return
        }
        const H = () => {
            s(P),
            A && !A.persisted && A.afterLeave && A.afterLeave()
        }
        ;
        if (v.shapeFlag & 1 && A && !A.persisted) {
            const {leave: j, delayLeave: $} = A
              , V = () => j(P, H);
            $ ? $(v.el, H, V) : V()
        } else
            H()
    }
      , Ze = (v, w) => {
        let P;
        for (; v !== w; )
            P = u(v),
            s(v),
            v = P;
        s(w)
    }
      , Ct = (v, w, P) => {
        const {bum: B, scope: A, update: H, subTree: j, um: $} = v;
        B && At(B),
        A.stop(),
        H && (H.active = !1,
        ue(j, v, w, P)),
        $ && ve($, w),
        ve( () => {
            v.isUnmounted = !0
        }
        , w),
        w && w.pendingBranch && !w.isUnmounted && v.asyncDep && !v.asyncResolved && v.suspenseId === w.pendingId && (w.deps--,
        w.deps === 0 && w.resolve())
    }
      , pe = (v, w, P, B=!1, A=!1, H=0) => {
        for (let j = H; j < v.length; j++)
            ue(v[j], w, P, B, A)
    }
      , Ie = v => v.shapeFlag & 6 ? Ie(v.component.subTree) : v.shapeFlag & 128 ? v.suspense.next() : u(v.anchor || v.el)
      , Kt = (v, w, P) => {
        v == null ? w._vnode && ue(w._vnode, null, null, !0) : b(w._vnode || null, v, w, null, null, null, P),
        Ps(),
        Nn(),
        w._vnode = v
    }
      , Ye = {
        p: b,
        um: ue,
        m: se,
        r: Pe,
        mt: z,
        mc: T,
        pc: F,
        pbc: N,
        n: Ie,
        o: e
    };
    let _t, Mt;
    return t && ([_t,Mt] = t(Ye)),
    {
        render: Kt,
        hydrate: _t,
        createApp: ha(Kt, _t)
    }
}
function ft({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}
function rl(e, t, n=!1) {
    const i = e.children
      , s = t.children;
    if (Y(i) && Y(s))
        for (let r = 0; r < i.length; r++) {
            const l = i[r];
            let a = s[r];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[r] = it(s[r]),
            a.el = l.el),
            n || rl(l, a)),
            a.type === Nt && (a.el = l.el)
        }
}
function Sa(e) {
    const t = e.slice()
      , n = [0];
    let i, s, r, l, a;
    const o = e.length;
    for (i = 0; i < o; i++) {
        const d = e[i];
        if (d !== 0) {
            if (s = n[n.length - 1],
            e[s] < d) {
                t[i] = s,
                n.push(i);
                continue
            }
            for (r = 0,
            l = n.length - 1; r < l; )
                a = r + l >> 1,
                e[n[a]] < d ? r = a + 1 : l = a;
            d < e[n[r]] && (r > 0 && (t[i] = n[r - 1]),
            n[r] = i)
        }
    }
    for (r = n.length,
    l = n[r - 1]; r-- > 0; )
        n[r] = l,
        l = t[l];
    return n
}
const Ta = e => e.__isTeleport
  , xe = Symbol.for("v-fgt")
  , Nt = Symbol.for("v-txt")
  , Ee = Symbol.for("v-cmt")
  , Ft = Symbol.for("v-stc")
  , on = [];
let Be = null;
function fs(e=!1) {
    on.push(Be = e ? null : [])
}
function ll() {
    on.pop(),
    Be = on[on.length - 1] || null
}
let $t = 1;
function Hs(e) {
    $t += e
}
function ol(e) {
    return e.dynamicChildren = $t > 0 ? Be || Lt : null,
    ll(),
    $t > 0 && Be && Be.push(e),
    e
}
function lf(e, t, n, i, s, r) {
    return ol(ul(e, t, n, i, s, r, !0))
}
function al(e, t, n, i, s) {
    return ol(oe(e, t, n, i, s, !0))
}
function Ht(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function $e(e, t) {
    return e.type === t.type && e.key === t.key
}
const ei = "__vInternal"
  , cl = ({key: e}) => e ?? null
  , An = ({ref: e, ref_key: t, ref_for: n}) => (typeof e == "number" && (e = "" + e),
e != null ? ae(e) || me(e) || U(e) ? {
    i: ge,
    r: e,
    k: t,
    f: !!n
} : e : null);
function ul(e, t=null, n=null, i=0, s=null, r=e === xe ? 0 : 1, l=!1, a=!1) {
    const o = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && cl(t),
        ref: t && An(t),
        scopeId: Kn,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: r,
        patchFlag: i,
        dynamicProps: s,
        dynamicChildren: null,
        appContext: null,
        ctx: ge
    };
    return a ? (ds(o, n),
    r & 128 && e.normalize(o)) : n && (o.shapeFlag |= ae(n) ? 8 : 16),
    $t > 0 && !l && Be && (o.patchFlag > 0 || r & 6) && o.patchFlag !== 32 && Be.push(o),
    o
}
const oe = Ca;
function Ca(e, t=null, n=null, i=0, s=null, r=!1) {
    if ((!e || e === qr) && (e = Ee),
    Ht(e)) {
        const a = Ke(e, t, !0);
        return n && ds(a, n),
        $t > 0 && !r && Be && (a.shapeFlag & 6 ? Be[Be.indexOf(e)] = a : Be.push(a)),
        a.patchFlag |= -2,
        a
    }
    if (Da(e) && (e = e.__vccOpts),
    t) {
        t = _a(t);
        let {class: a, style: o} = t;
        a && !ae(a) && (t.class = Gi(a)),
        ie(o) && (Mr(o) && !Y(o) && (o = ce({}, o)),
        t.style = Xi(o))
    }
    const l = ae(e) ? 1 : Hr(e) ? 128 : Ta(e) ? 64 : ie(e) ? 4 : U(e) ? 2 : 0;
    return ul(e, t, n, i, s, l, r, !0)
}
function _a(e) {
    return e ? Mr(e) || ei in e ? ce({}, e) : e : null
}
function Ke(e, t, n=!1) {
    const {props: i, ref: s, patchFlag: r, children: l} = e
      , a = t ? Ma(i || {}, t) : i;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: a,
        key: a && cl(a),
        ref: t && t.ref ? n && s ? Y(s) ? s.concat(An(t)) : [s, An(t)] : An(t) : s,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: l,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== xe ? r === -1 ? 16 : r | 16 : r,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Ke(e.ssContent),
        ssFallback: e.ssFallback && Ke(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}
function fl(e=" ", t=0) {
    return oe(Nt, null, e, t)
}
function of(e, t) {
    const n = oe(Ft, null, e);
    return n.staticCount = t,
    n
}
function af(e="", t=!1) {
    return t ? (fs(),
    al(Ee, null, e)) : oe(Ee, null, e)
}
function Oe(e) {
    return e == null || typeof e == "boolean" ? oe(Ee) : Y(e) ? oe(xe, null, e.slice()) : typeof e == "object" ? it(e) : oe(Nt, null, String(e))
}
function it(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ke(e)
}
function ds(e, t) {
    let n = 0;
    const {shapeFlag: i} = e;
    if (t == null)
        t = null;
    else if (Y(t))
        n = 16;
    else if (typeof t == "object")
        if (i & 65) {
            const s = t.default;
            s && (s._c && (s._d = !1),
            ds(e, s()),
            s._c && (s._d = !0));
            return
        } else {
            n = 32;
            const s = t._;
            !s && !(ei in t) ? t._ctx = ge : s === 3 && ge && (ge.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        U(t) ? (t = {
            default: t,
            _ctx: ge
        },
        n = 32) : (t = String(t),
        i & 64 ? (n = 16,
        t = [fl(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function Ma(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const i = e[n];
        for (const s in i)
            if (s === "class")
                t.class !== i.class && (t.class = Gi([t.class, i.class]));
            else if (s === "style")
                t.style = Xi([t.style, i.style]);
            else if (gn(s)) {
                const r = t[s]
                  , l = i[s];
                l && r !== l && !(Y(r) && r.includes(l)) && (t[s] = r ? [].concat(r, l) : l)
            } else
                s !== "" && (t[s] = i[s])
    }
    return t
}
function Se(e, t, n, i=null) {
    De(e, t, 7, [n, i])
}
const Pa = Zr();
let Ia = 0;
function La(e, t, n) {
    const i = e.type
      , s = (t ? t.appContext : e.appContext) || Pa
      , r = {
        uid: Ia++,
        vnode: e,
        type: i,
        parent: t,
        appContext: s,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new mr(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(s.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: el(i, s),
        emitsOptions: $r(i, s),
        emit: null,
        emitted: null,
        propsDefaults: le,
        inheritAttrs: i.inheritAttrs,
        ctx: le,
        data: le,
        props: le,
        attrs: le,
        slots: le,
        refs: le,
        setupState: le,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return r.ctx = {
        _: r
    },
    r.root = t ? t.root : r,
    r.emit = zo.bind(null, r),
    e.ce && e.ce(r),
    r
}
let de = null;
const bn = () => de || ge;
let ps, It, ks = "__VUE_INSTANCE_SETTERS__";
(It = wi()[ks]) || (It = wi()[ks] = []),
It.push(e => de = e),
ps = e => {
    It.length > 1 ? It.forEach(t => t(e)) : It[0](e)
}
;
const ct = e => {
    ps(e),
    e.scope.on()
}
  , ot = () => {
    de && de.scope.off(),
    ps(null)
}
;
function dl(e) {
    return e.vnode.shapeFlag & 4
}
let kt = !1;
function Oa(e, t=!1) {
    kt = t;
    const {props: n, children: i} = e.vnode
      , s = dl(e);
    ma(e, n, s, t),
    ya(e, i);
    const r = s ? Aa(e, t) : void 0;
    return kt = !1,
    r
}
function Aa(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = Pr(new Proxy(e.ctx,oa));
    const {setup: i} = n;
    if (i) {
        const s = e.setupContext = i.length > 1 ? za(e) : null;
        ct(e),
        Xt();
        const r = lt(i, e, 0, [e.props, s]);
        if (Gt(),
        ot(),
        Wi(r)) {
            if (r.then(ot, ot),
            t)
                return r.then(l => {
                    Li(e, l, t)
                }
                ).catch(l => {
                    qt(l, e, 0)
                }
                );
            e.asyncDep = r
        } else
            Li(e, r, t)
    } else
        pl(e, t)
}
function Li(e, t, n) {
    U(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ie(t) && (e.setupState = Ar(t)),
    pl(e, n)
}
let Vs;
function pl(e, t, n) {
    const i = e.type;
    if (!e.render) {
        if (!t && Vs && !i.render) {
            const s = i.template || as(e).template;
            if (s) {
                const {isCustomElement: r, compilerOptions: l} = e.appContext.config
                  , {delimiters: a, compilerOptions: o} = i
                  , d = ce(ce({
                    isCustomElement: r,
                    delimiters: a
                }, l), o);
                i.render = Vs(s, d)
            }
        }
        e.render = i.render || He
    }
    ct(e),
    Xt(),
    aa(e),
    Gt(),
    ot()
}
function Ba(e) {
    return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs,{
        get(t, n) {
            return Te(e, "get", "$attrs"),
            t[n]
        }
    }))
}
function za(e) {
    const t = n => {
        e.exposed = n || {}
    }
    ;
    return {
        get attrs() {
            return Ba(e)
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function ti(e) {
    if (e.exposed)
        return e.exposeProxy || (e.exposeProxy = new Proxy(Ar(Pr(e.exposed)),{
            get(t, n) {
                if (n in t)
                    return t[n];
                if (n in ln)
                    return ln[n](e)
            },
            has(t, n) {
                return n in t || n in ln
            }
        }))
}
function Oi(e, t=!0) {
    return U(e) ? e.displayName || e.name : e.name || t && e.__name
}
function Da(e) {
    return U(e) && "__vccOpts"in e
}
const hl = (e, t) => Io(e, t, kt);
function Ae(e, t, n) {
    const i = arguments.length;
    return i === 2 ? ie(t) && !Y(t) ? Ht(t) ? oe(e, null, [t]) : oe(e, t) : oe(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Ht(n) && (n = [n]),
    oe(e, t, n))
}
const Fa = Symbol.for("v-scx")
  , Ra = () => On(Fa)
  , Na = "3.3.4"
  , $a = "http://www.w3.org/2000/svg"
  , mt = typeof document < "u" ? document : null
  , js = mt && mt.createElement("template")
  , Ha = {
    insert: (e, t, n) => {
        t.insertBefore(e, n || null)
    }
    ,
    remove: e => {
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, n, i) => {
        const s = t ? mt.createElementNS($a, e) : mt.createElement(e, n ? {
            is: n
        } : void 0);
        return e === "select" && i && i.multiple != null && s.setAttribute("multiple", i.multiple),
        s
    }
    ,
    createText: e => mt.createTextNode(e),
    createComment: e => mt.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => mt.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, i, s, r) {
        const l = n ? n.previousSibling : t.lastChild;
        if (s && (s === r || s.nextSibling))
            for (; t.insertBefore(s.cloneNode(!0), n),
            !(s === r || !(s = s.nextSibling)); )
                ;
        else {
            js.innerHTML = i ? `<svg>${e}</svg>` : e;
            const a = js.content;
            if (i) {
                const o = a.firstChild;
                for (; o.firstChild; )
                    a.appendChild(o.firstChild);
                a.removeChild(o)
            }
            t.insertBefore(a, n)
        }
        return [l ? l.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
};
function ka(e, t, n) {
    const i = e._vtc;
    i && (t = (t ? [t, ...i] : [...i]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
function Va(e, t, n) {
    const i = e.style
      , s = ae(n);
    if (n && !s) {
        if (t && !ae(t))
            for (const r in t)
                n[r] == null && Ai(i, r, "");
        for (const r in n)
            Ai(i, r, n[r])
    } else {
        const r = i.display;
        s ? t !== n && (i.cssText = n) : t && e.removeAttribute("style"),
        "_vod"in e && (i.display = r)
    }
}
const Ws = /\s*!important$/;
function Ai(e, t, n) {
    if (Y(n))
        n.forEach(i => Ai(e, t, i));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const i = ja(e, t);
        Ws.test(n) ? e.setProperty(Yt(i), n.replace(Ws, ""), "important") : e[i] = n
    }
}
const Ys = ["Webkit", "Moz", "ms"]
  , ci = {};
function ja(e, t) {
    const n = ci[t];
    if (n)
        return n;
    let i = We(t);
    if (i !== "filter" && i in e)
        return ci[t] = i;
    i = Xn(i);
    for (let s = 0; s < Ys.length; s++) {
        const r = Ys[s] + i;
        if (r in e)
            return ci[t] = r
    }
    return t
}
const Xs = "http://www.w3.org/1999/xlink";
function Wa(e, t, n, i, s) {
    if (i && t.startsWith("xlink:"))
        n == null ? e.removeAttributeNS(Xs, t.slice(6, t.length)) : e.setAttributeNS(Xs, t, n);
    else {
        const r = Wl(t);
        n == null || r && !pr(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n)
    }
}
function Ya(e, t, n, i, s, r, l) {
    if (t === "innerHTML" || t === "textContent") {
        i && l(i, s, r),
        e[t] = n ?? "";
        return
    }
    const a = e.tagName;
    if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
        e._value = n;
        const d = a === "OPTION" ? e.getAttribute("value") : e.value
          , f = n ?? "";
        d !== f && (e.value = f),
        n == null && e.removeAttribute(t);
        return
    }
    let o = !1;
    if (n === "" || n == null) {
        const d = typeof e[t];
        d === "boolean" ? n = pr(n) : n == null && d === "string" ? (n = "",
        o = !0) : d === "number" && (n = 0,
        o = !0)
    }
    try {
        e[t] = n
    } catch {}
    o && e.removeAttribute(t)
}
function qe(e, t, n, i) {
    e.addEventListener(t, n, i)
}
function Xa(e, t, n, i) {
    e.removeEventListener(t, n, i)
}
function Ga(e, t, n, i, s=null) {
    const r = e._vei || (e._vei = {})
      , l = r[t];
    if (i && l)
        l.value = i;
    else {
        const [a,o] = qa(t);
        if (i) {
            const d = r[t] = Ja(i, s);
            qe(e, a, d, o)
        } else
            l && (Xa(e, a, l, o),
            r[t] = void 0)
    }
}
const Gs = /(?:Once|Passive|Capture)$/;
function qa(e) {
    let t;
    if (Gs.test(e)) {
        t = {};
        let i;
        for (; i = e.match(Gs); )
            e = e.slice(0, e.length - i[0].length),
            t[i[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Yt(e.slice(2)), t]
}
let ui = 0;
const Ua = Promise.resolve()
  , Ka = () => ui || (Ua.then( () => ui = 0),
ui = Date.now());
function Ja(e, t) {
    const n = i => {
        if (!i._vts)
            i._vts = Date.now();
        else if (i._vts <= n.attached)
            return;
        De(Za(i, n.value), t, 5, [i])
    }
    ;
    return n.value = e,
    n.attached = Ka(),
    n
}
function Za(e, t) {
    if (Y(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(i => s => !s._stopped && i && i(s))
    } else
        return t
}
const qs = /^on[a-z]/
  , Qa = (e, t, n, i, s=!1, r, l, a, o) => {
    t === "class" ? ka(e, i, s) : t === "style" ? Va(e, n, i) : gn(t) ? Vi(t) || Ga(e, t, n, i, l) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : ec(e, t, i, s)) ? Ya(e, t, i, r, l, a, o) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i),
    Wa(e, t, i, s))
}
;
function ec(e, t, n, i) {
    return i ? !!(t === "innerHTML" || t === "textContent" || t in e && qs.test(t) && U(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || qs.test(t) && ae(n) ? !1 : t in e
}
function cf(e) {
    const t = bn();
    if (!t)
        return;
    const n = t.ut = (s=e(t.proxy)) => {
        Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(r => zi(r, s))
    }
      , i = () => {
        const s = e(t.proxy);
        Bi(t.subTree, s),
        n(s)
    }
    ;
    Xo(i),
    Ut( () => {
        const s = new MutationObserver(i);
        s.observe(t.subTree.el.parentNode, {
            childList: !0
        }),
        ls( () => s.disconnect())
    }
    )
}
function Bi(e, t) {
    if (e.shapeFlag & 128) {
        const n = e.suspense;
        e = n.activeBranch,
        n.pendingBranch && !n.isHydrating && n.effects.push( () => {
            Bi(n.activeBranch, t)
        }
        )
    }
    for (; e.component; )
        e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el)
        zi(e.el, t);
    else if (e.type === xe)
        e.children.forEach(n => Bi(n, t));
    else if (e.type === Ft) {
        let {el: n, anchor: i} = e;
        for (; n && (zi(n, t),
        n !== i); )
            n = n.nextSibling
    }
}
function zi(e, t) {
    if (e.nodeType === 1) {
        const n = e.style;
        for (const i in t)
            n.setProperty(`--${i}`, t[i])
    }
}
const tt = "transition"
  , Zt = "animation"
  , ml = (e, {slots: t}) => Ae(Ko, tc(e), t);
ml.displayName = "Transition";
const gl = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
ml.props = ce({}, jr, gl);
const dt = (e, t=[]) => {
    Y(e) ? e.forEach(n => n(...t)) : e && e(...t)
}
  , Us = e => e ? Y(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;
function tc(e) {
    const t = {};
    for (const L in e)
        L in gl || (t[L] = e[L]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: i, duration: s, enterFromClass: r=`${n}-enter-from`, enterActiveClass: l=`${n}-enter-active`, enterToClass: a=`${n}-enter-to`, appearFromClass: o=r, appearActiveClass: d=l, appearToClass: f=a, leaveFromClass: c=`${n}-leave-from`, leaveActiveClass: u=`${n}-leave-active`, leaveToClass: m=`${n}-leave-to`} = e
      , E = nc(s)
      , b = E && E[0]
      , C = E && E[1]
      , {onBeforeEnter: y, onEnter: p, onEnterCancelled: h, onLeave: g, onLeaveCancelled: S, onBeforeAppear: O=y, onAppear: I=p, onAppearCancelled: T=h} = t
      , x = (L, D, z) => {
        pt(L, D ? f : a),
        pt(L, D ? d : l),
        z && z()
    }
      , N = (L, D) => {
        L._isLeaving = !1,
        pt(L, c),
        pt(L, m),
        pt(L, u),
        D && D()
    }
      , _ = L => (D, z) => {
        const J = L ? I : p
          , q = () => x(D, L, z);
        dt(J, [D, q]),
        Ks( () => {
            pt(D, L ? o : r),
            nt(D, L ? f : a),
            Us(J) || Js(D, i, b, q)
        }
        )
    }
    ;
    return ce(t, {
        onBeforeEnter(L) {
            dt(y, [L]),
            nt(L, r),
            nt(L, l)
        },
        onBeforeAppear(L) {
            dt(O, [L]),
            nt(L, o),
            nt(L, d)
        },
        onEnter: _(!1),
        onAppear: _(!0),
        onLeave(L, D) {
            L._isLeaving = !0;
            const z = () => N(L, D);
            nt(L, c),
            rc(),
            nt(L, u),
            Ks( () => {
                L._isLeaving && (pt(L, c),
                nt(L, m),
                Us(g) || Js(L, i, C, z))
            }
            ),
            dt(g, [L, z])
        },
        onEnterCancelled(L) {
            x(L, !1),
            dt(h, [L])
        },
        onAppearCancelled(L) {
            x(L, !0),
            dt(T, [L])
        },
        onLeaveCancelled(L) {
            N(L),
            dt(S, [L])
        }
    })
}
function nc(e) {
    if (e == null)
        return null;
    if (ie(e))
        return [fi(e.enter), fi(e.leave)];
    {
        const t = fi(e);
        return [t, t]
    }
}
function fi(e) {
    return dr(e)
}
function nt(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set)).add(t)
}
function pt(e, t) {
    t.split(/\s+/).forEach(i => i && e.classList.remove(i));
    const {_vtc: n} = e;
    n && (n.delete(t),
    n.size || (e._vtc = void 0))
}
function Ks(e) {
    requestAnimationFrame( () => {
        requestAnimationFrame(e)
    }
    )
}
let ic = 0;
function Js(e, t, n, i) {
    const s = e._endId = ++ic
      , r = () => {
        s === e._endId && i()
    }
    ;
    if (n)
        return setTimeout(r, n);
    const {type: l, timeout: a, propCount: o} = sc(e, t);
    if (!l)
        return i();
    const d = l + "end";
    let f = 0;
    const c = () => {
        e.removeEventListener(d, u),
        r()
    }
      , u = m => {
        m.target === e && ++f >= o && c()
    }
    ;
    setTimeout( () => {
        f < o && c()
    }
    , a + 1),
    e.addEventListener(d, u)
}
function sc(e, t) {
    const n = window.getComputedStyle(e)
      , i = E => (n[E] || "").split(", ")
      , s = i(`${tt}Delay`)
      , r = i(`${tt}Duration`)
      , l = Zs(s, r)
      , a = i(`${Zt}Delay`)
      , o = i(`${Zt}Duration`)
      , d = Zs(a, o);
    let f = null
      , c = 0
      , u = 0;
    t === tt ? l > 0 && (f = tt,
    c = l,
    u = r.length) : t === Zt ? d > 0 && (f = Zt,
    c = d,
    u = o.length) : (c = Math.max(l, d),
    f = c > 0 ? l > d ? tt : Zt : null,
    u = f ? f === tt ? r.length : o.length : 0);
    const m = f === tt && /\b(transform|all)(,|$)/.test(i(`${tt}Property`).toString());
    return {
        type: f,
        timeout: c,
        propCount: u,
        hasTransform: m
    }
}
function Zs(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map( (n, i) => Qs(n) + Qs(e[i])))
}
function Qs(e) {
    return Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function rc() {
    return document.body.offsetHeight
}
const ut = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return Y(t) ? n => At(t, n) : t
}
;
function lc(e) {
    e.target.composing = !0
}
function er(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const tr = {
    created(e, {modifiers: {lazy: t, trim: n, number: i}}, s) {
        e._assign = ut(s);
        const r = i || s.props && s.props.type === "number";
        qe(e, t ? "change" : "input", l => {
            if (l.target.composing)
                return;
            let a = e.value;
            n && (a = a.trim()),
            r && (a = Dn(a)),
            e._assign(a)
        }
        ),
        n && qe(e, "change", () => {
            e.value = e.value.trim()
        }
        ),
        t || (qe(e, "compositionstart", lc),
        qe(e, "compositionend", er),
        qe(e, "change", er))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ""
    },
    beforeUpdate(e, {value: t, modifiers: {lazy: n, trim: i, number: s}}, r) {
        if (e._assign = ut(r),
        e.composing || document.activeElement === e && e.type !== "range" && (n || i && e.value.trim() === t || (s || e.type === "number") && Dn(e.value) === t))
            return;
        const l = t ?? "";
        e.value !== l && (e.value = l)
    }
}
  , oc = {
    deep: !0,
    created(e, t, n) {
        e._assign = ut(n),
        qe(e, "change", () => {
            const i = e._modelValue
              , s = Vt(e)
              , r = e.checked
              , l = e._assign;
            if (Y(i)) {
                const a = qi(i, s)
                  , o = a !== -1;
                if (r && !o)
                    l(i.concat(s));
                else if (!r && o) {
                    const d = [...i];
                    d.splice(a, 1),
                    l(d)
                }
            } else if (jt(i)) {
                const a = new Set(i);
                r ? a.add(s) : a.delete(s),
                l(a)
            } else
                l(vl(e, r))
        }
        )
    },
    mounted: nr,
    beforeUpdate(e, t, n) {
        e._assign = ut(n),
        nr(e, t, n)
    }
};
function nr(e, {value: t, oldValue: n}, i) {
    e._modelValue = t,
    Y(t) ? e.checked = qi(t, i.props.value) > -1 : jt(t) ? e.checked = t.has(i.props.value) : t !== n && (e.checked = St(t, vl(e, !0)))
}
const ac = {
    created(e, {value: t}, n) {
        e.checked = St(t, n.props.value),
        e._assign = ut(n),
        qe(e, "change", () => {
            e._assign(Vt(e))
        }
        )
    },
    beforeUpdate(e, {value: t, oldValue: n}, i) {
        e._assign = ut(i),
        t !== n && (e.checked = St(t, i.props.value))
    }
}
  , cc = {
    deep: !0,
    created(e, {value: t, modifiers: {number: n}}, i) {
        const s = jt(t);
        qe(e, "change", () => {
            const r = Array.prototype.filter.call(e.options, l => l.selected).map(l => n ? Dn(Vt(l)) : Vt(l));
            e._assign(e.multiple ? s ? new Set(r) : r : r[0])
        }
        ),
        e._assign = ut(i)
    },
    mounted(e, {value: t}) {
        ir(e, t)
    },
    beforeUpdate(e, t, n) {
        e._assign = ut(n)
    },
    updated(e, {value: t}) {
        ir(e, t)
    }
};
function ir(e, t) {
    const n = e.multiple;
    if (!(n && !Y(t) && !jt(t))) {
        for (let i = 0, s = e.options.length; i < s; i++) {
            const r = e.options[i]
              , l = Vt(r);
            if (n)
                Y(t) ? r.selected = qi(t, l) > -1 : r.selected = t.has(l);
            else if (St(Vt(r), t)) {
                e.selectedIndex !== i && (e.selectedIndex = i);
                return
            }
        }
        !n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}
function Vt(e) {
    return "_value"in e ? e._value : e.value
}
function vl(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t
}
const uf = {
    created(e, t, n) {
        Pn(e, t, n, null, "created")
    },
    mounted(e, t, n) {
        Pn(e, t, n, null, "mounted")
    },
    beforeUpdate(e, t, n, i) {
        Pn(e, t, n, i, "beforeUpdate")
    },
    updated(e, t, n, i) {
        Pn(e, t, n, i, "updated")
    }
};
function uc(e, t) {
    switch (e) {
    case "SELECT":
        return cc;
    case "TEXTAREA":
        return tr;
    default:
        switch (t) {
        case "checkbox":
            return oc;
        case "radio":
            return ac;
        default:
            return tr
        }
    }
}
function Pn(e, t, n, i, s) {
    const l = uc(e.tagName, n.props && n.props.type)[s];
    l && l(e, t, n, i)
}
const fc = ["ctrl", "shift", "alt", "meta"]
  , dc = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button"in e && e.button !== 0,
    middle: e => "button"in e && e.button !== 1,
    right: e => "button"in e && e.button !== 2,
    exact: (e, t) => fc.some(n => e[`${n}Key`] && !t.includes(n))
}
  , ff = (e, t) => (n, ...i) => {
    for (let s = 0; s < t.length; s++) {
        const r = dc[t[s]];
        if (r && r(n, t))
            return
    }
    return e(n, ...i)
}
  , df = {
    beforeMount(e, {value: t}, {transition: n}) {
        e._vod = e.style.display === "none" ? "" : e.style.display,
        n && t ? n.beforeEnter(e) : Qt(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: i}) {
        !t != !n && (i ? t ? (i.beforeEnter(e),
        Qt(e, !0),
        i.enter(e)) : i.leave(e, () => {
            Qt(e, !1)
        }
        ) : Qt(e, t))
    },
    beforeUnmount(e, {value: t}) {
        Qt(e, t)
    }
};
function Qt(e, t) {
    e.style.display = t ? e._vod : "none"
}
const yl = ce({
    patchProp: Qa
}, Ha);
let an, sr = !1;
function pc() {
    return an || (an = xa(yl))
}
function hc() {
    return an = sr ? an : Ea(yl),
    sr = !0,
    an
}
const pf = (...e) => {
    const t = pc().createApp(...e)
      , {mount: n} = t;
    return t.mount = i => {
        const s = bl(i);
        if (!s)
            return;
        const r = t._component;
        !U(r) && !r.render && !r.template && (r.template = s.innerHTML),
        s.innerHTML = "";
        const l = n(s, !1, s instanceof SVGElement);
        return s instanceof Element && (s.removeAttribute("v-cloak"),
        s.setAttribute("data-v-app", "")),
        l
    }
    ,
    t
}
  , hf = (...e) => {
    const t = hc().createApp(...e)
      , {mount: n} = t;
    return t.mount = i => {
        const s = bl(i);
        if (s)
            return n(s, !0, s instanceof SVGElement)
    }
    ,
    t
}
;
function bl(e) {
    return ae(e) ? document.querySelector(e) : e
}
function rr(e) {
    return e !== null && typeof e == "object" && "constructor"in e && e.constructor === Object
}
function hs(e, t) {
    e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach(n => {
        typeof e[n] > "u" ? e[n] = t[n] : rr(t[n]) && rr(e[n]) && Object.keys(t[n]).length > 0 && hs(e[n], t[n])
    }
    )
}
const wl = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function Fe() {
    const e = typeof document < "u" ? document : {};
    return hs(e, wl),
    e
}
const mc = {
    document: wl,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(e) {
        return typeof setTimeout > "u" ? (e(),
        null) : setTimeout(e, 0)
    },
    cancelAnimationFrame(e) {
        typeof setTimeout > "u" || clearTimeout(e)
    }
};
function be() {
    const e = typeof window < "u" ? window : {};
    return hs(e, mc),
    e
}
function gc(e) {
    const t = e;
    Object.keys(t).forEach(n => {
        try {
            t[n] = null
        } catch {}
        try {
            delete t[n]
        } catch {}
    }
    )
}
function Di(e, t) {
    return t === void 0 && (t = 0),
    setTimeout(e, t)
}
function wt() {
    return Date.now()
}
function vc(e) {
    const t = be();
    let n;
    return t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
}
function Fi(e, t) {
    t === void 0 && (t = "x");
    const n = be();
    let i, s, r;
    const l = vc(e);
    return n.WebKitCSSMatrix ? (s = l.transform || l.webkitTransform,
    s.split(",").length > 6 && (s = s.split(", ").map(a => a.replace(",", ".")).join(", ")),
    r = new n.WebKitCSSMatrix(s === "none" ? "" : s)) : (r = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
    i = r.toString().split(",")),
    t === "x" && (n.WebKitCSSMatrix ? s = r.m41 : i.length === 16 ? s = parseFloat(i[12]) : s = parseFloat(i[4])),
    t === "y" && (n.WebKitCSSMatrix ? s = r.m42 : i.length === 16 ? s = parseFloat(i[13]) : s = parseFloat(i[5])),
    s || 0
}
function In(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object"
}
function yc(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11)
}
function Me() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0])
      , t = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < arguments.length; n += 1) {
        const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
        if (i != null && !yc(i)) {
            const s = Object.keys(Object(i)).filter(r => t.indexOf(r) < 0);
            for (let r = 0, l = s.length; r < l; r += 1) {
                const a = s[r]
                  , o = Object.getOwnPropertyDescriptor(i, a);
                o !== void 0 && o.enumerable && (In(e[a]) && In(i[a]) ? i[a].__swiper__ ? e[a] = i[a] : Me(e[a], i[a]) : !In(e[a]) && In(i[a]) ? (e[a] = {},
                i[a].__swiper__ ? e[a] = i[a] : Me(e[a], i[a])) : e[a] = i[a])
            }
        }
    }
    return e
}
function Ln(e, t, n) {
    e.style.setProperty(t, n)
}
function xl(e) {
    let {swiper: t, targetPosition: n, side: i} = e;
    const s = be()
      , r = -t.translate;
    let l = null, a;
    const o = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none",
    s.cancelAnimationFrame(t.cssModeFrameID);
    const d = n > r ? "next" : "prev"
      , f = (u, m) => d === "next" && u >= m || d === "prev" && u <= m
      , c = () => {
        a = new Date().getTime(),
        l === null && (l = a);
        const u = Math.max(Math.min((a - l) / o, 1), 0)
          , m = .5 - Math.cos(u * Math.PI) / 2;
        let E = r + m * (n - r);
        if (f(E, n) && (E = n),
        t.wrapperEl.scrollTo({
            [i]: E
        }),
        f(E, n)) {
            t.wrapperEl.style.overflow = "hidden",
            t.wrapperEl.style.scrollSnapType = "",
            setTimeout( () => {
                t.wrapperEl.style.overflow = "",
                t.wrapperEl.scrollTo({
                    [i]: E
                })
            }
            ),
            s.cancelAnimationFrame(t.cssModeFrameID);
            return
        }
        t.cssModeFrameID = s.requestAnimationFrame(c)
    }
    ;
    c()
}
function ze(e, t) {
    return t === void 0 && (t = ""),
    [...e.children].filter(n => n.matches(t))
}
function El(e, t) {
    t === void 0 && (t = []);
    const n = document.createElement(e);
    return n.classList.add(...Array.isArray(t) ? t : [t]),
    n
}
function Ri(e) {
    const t = be()
      , n = Fe()
      , i = e.getBoundingClientRect()
      , s = n.body
      , r = e.clientTop || s.clientTop || 0
      , l = e.clientLeft || s.clientLeft || 0
      , a = e === t ? t.scrollY : e.scrollTop
      , o = e === t ? t.scrollX : e.scrollLeft;
    return {
        top: i.top + a - r,
        left: i.left + o - l
    }
}
function bc(e, t) {
    const n = [];
    for (; e.previousElementSibling; ) {
        const i = e.previousElementSibling;
        t ? i.matches(t) && n.push(i) : n.push(i),
        e = i
    }
    return n
}
function wc(e, t) {
    const n = [];
    for (; e.nextElementSibling; ) {
        const i = e.nextElementSibling;
        t ? i.matches(t) && n.push(i) : n.push(i),
        e = i
    }
    return n
}
function st(e, t) {
    return be().getComputedStyle(e, null).getPropertyValue(t)
}
function Wn(e) {
    let t = e, n;
    if (t) {
        for (n = 0; (t = t.previousSibling) !== null; )
            t.nodeType === 1 && (n += 1);
        return n
    }
}
function xt(e, t) {
    const n = [];
    let i = e.parentElement;
    for (; i; )
        t ? i.matches(t) && n.push(i) : n.push(i),
        i = i.parentElement;
    return n
}
function di(e, t) {
    function n(i) {
        i.target === e && (t.call(e, i),
        e.removeEventListener("transitionend", n))
    }
    t && e.addEventListener("transitionend", n)
}
function Ni(e, t, n) {
    const i = be();
    return n ? e[t === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")) : e.offsetWidth
}
let pi;
function xc() {
    const e = be()
      , t = Fe();
    return {
        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior"in t.documentElement.style,
        touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch)
    }
}
function Sl() {
    return pi || (pi = xc()),
    pi
}
let hi;
function Ec(e) {
    let {userAgent: t} = e === void 0 ? {} : e;
    const n = Sl()
      , i = be()
      , s = i.navigator.platform
      , r = t || i.navigator.userAgent
      , l = {
        ios: !1,
        android: !1
    }
      , a = i.screen.width
      , o = i.screen.height
      , d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
    let f = r.match(/(iPad).*OS\s([\d_]+)/);
    const c = r.match(/(iPod)(.*OS\s([\d_]+))?/)
      , u = !f && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
      , m = s === "Win32";
    let E = s === "MacIntel";
    const b = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !f && E && n.touch && b.indexOf(`${a}x${o}`) >= 0 && (f = r.match(/(Version)\/([\d.]+)/),
    f || (f = [0, 1, "13_0_0"]),
    E = !1),
    d && !m && (l.os = "android",
    l.android = !0),
    (f || u || c) && (l.os = "ios",
    l.ios = !0),
    l
}
function Sc(e) {
    return e === void 0 && (e = {}),
    hi || (hi = Ec(e)),
    hi
}
let mi;
function Tc() {
    const e = be();
    let t = !1;
    function n() {
        const i = e.navigator.userAgent.toLowerCase();
        return i.indexOf("safari") >= 0 && i.indexOf("chrome") < 0 && i.indexOf("android") < 0
    }
    if (n()) {
        const i = String(e.navigator.userAgent);
        if (i.includes("Version/")) {
            const [s,r] = i.split("Version/")[1].split(" ")[0].split(".").map(l => Number(l));
            t = s < 16 || s === 16 && r < 2
        }
    }
    return {
        isSafari: t || n(),
        needPerspectiveFix: t,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
    }
}
function Cc() {
    return mi || (mi = Tc()),
    mi
}
function _c(e) {
    let {swiper: t, on: n, emit: i} = e;
    const s = be();
    let r = null
      , l = null;
    const a = () => {
        !t || t.destroyed || !t.initialized || (i("beforeResize"),
        i("resize"))
    }
      , o = () => {
        !t || t.destroyed || !t.initialized || (r = new ResizeObserver(c => {
            l = s.requestAnimationFrame( () => {
                const {width: u, height: m} = t;
                let E = u
                  , b = m;
                c.forEach(C => {
                    let {contentBoxSize: y, contentRect: p, target: h} = C;
                    h && h !== t.el || (E = p ? p.width : (y[0] || y).inlineSize,
                    b = p ? p.height : (y[0] || y).blockSize)
                }
                ),
                (E !== u || b !== m) && a()
            }
            )
        }
        ),
        r.observe(t.el))
    }
      , d = () => {
        l && s.cancelAnimationFrame(l),
        r && r.unobserve && t.el && (r.unobserve(t.el),
        r = null)
    }
      , f = () => {
        !t || t.destroyed || !t.initialized || i("orientationchange")
    }
    ;
    n("init", () => {
        if (t.params.resizeObserver && typeof s.ResizeObserver < "u") {
            o();
            return
        }
        s.addEventListener("resize", a),
        s.addEventListener("orientationchange", f)
    }
    ),
    n("destroy", () => {
        d(),
        s.removeEventListener("resize", a),
        s.removeEventListener("orientationchange", f)
    }
    )
}
function Mc(e) {
    let {swiper: t, extendParams: n, on: i, emit: s} = e;
    const r = []
      , l = be()
      , a = function(f, c) {
        c === void 0 && (c = {});
        const u = l.MutationObserver || l.WebkitMutationObserver
          , m = new u(E => {
            if (t.__preventObserver__)
                return;
            if (E.length === 1) {
                s("observerUpdate", E[0]);
                return
            }
            const b = function() {
                s("observerUpdate", E[0])
            };
            l.requestAnimationFrame ? l.requestAnimationFrame(b) : l.setTimeout(b, 0)
        }
        );
        m.observe(f, {
            attributes: typeof c.attributes > "u" ? !0 : c.attributes,
            childList: typeof c.childList > "u" ? !0 : c.childList,
            characterData: typeof c.characterData > "u" ? !0 : c.characterData
        }),
        r.push(m)
    }
      , o = () => {
        if (t.params.observer) {
            if (t.params.observeParents) {
                const f = xt(t.hostEl);
                for (let c = 0; c < f.length; c += 1)
                    a(f[c])
            }
            a(t.hostEl, {
                childList: t.params.observeSlideChildren
            }),
            a(t.wrapperEl, {
                attributes: !1
            })
        }
    }
      , d = () => {
        r.forEach(f => {
            f.disconnect()
        }
        ),
        r.splice(0, r.length)
    }
    ;
    n({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
    i("init", o),
    i("destroy", d)
}
var Pc = {
    on(e, t, n) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof t != "function")
            return i;
        const s = n ? "unshift" : "push";
        return e.split(" ").forEach(r => {
            i.eventsListeners[r] || (i.eventsListeners[r] = []),
            i.eventsListeners[r][s](t)
        }
        ),
        i
    },
    once(e, t, n) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof t != "function")
            return i;
        function s() {
            i.off(e, s),
            s.__emitterProxy && delete s.__emitterProxy;
            for (var r = arguments.length, l = new Array(r), a = 0; a < r; a++)
                l[a] = arguments[a];
            t.apply(i, l)
        }
        return s.__emitterProxy = t,
        i.on(e, s, n)
    },
    onAny(e, t) {
        const n = this;
        if (!n.eventsListeners || n.destroyed || typeof e != "function")
            return n;
        const i = t ? "unshift" : "push";
        return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e),
        n
    },
    offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners)
            return t;
        const n = t.eventsAnyListeners.indexOf(e);
        return n >= 0 && t.eventsAnyListeners.splice(n, 1),
        t
    },
    off(e, t) {
        const n = this;
        return !n.eventsListeners || n.destroyed || !n.eventsListeners || e.split(" ").forEach(i => {
            typeof t > "u" ? n.eventsListeners[i] = [] : n.eventsListeners[i] && n.eventsListeners[i].forEach( (s, r) => {
                (s === t || s.__emitterProxy && s.__emitterProxy === t) && n.eventsListeners[i].splice(r, 1)
            }
            )
        }
        ),
        n
    },
    emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsListeners)
            return e;
        let t, n, i;
        for (var s = arguments.length, r = new Array(s), l = 0; l < s; l++)
            r[l] = arguments[l];
        return typeof r[0] == "string" || Array.isArray(r[0]) ? (t = r[0],
        n = r.slice(1, r.length),
        i = e) : (t = r[0].events,
        n = r[0].data,
        i = r[0].context || e),
        n.unshift(i),
        (Array.isArray(t) ? t : t.split(" ")).forEach(o => {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(d => {
                d.apply(i, [o, ...n])
            }
            ),
            e.eventsListeners && e.eventsListeners[o] && e.eventsListeners[o].forEach(d => {
                d.apply(i, n)
            }
            )
        }
        ),
        e
    }
};
function Ic() {
    const e = this;
    let t, n;
    const i = e.el;
    typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = i.clientWidth,
    typeof e.params.height < "u" && e.params.height !== null ? n = e.params.height : n = i.clientHeight,
    !(t === 0 && e.isHorizontal() || n === 0 && e.isVertical()) && (t = t - parseInt(st(i, "padding-left") || 0, 10) - parseInt(st(i, "padding-right") || 0, 10),
    n = n - parseInt(st(i, "padding-top") || 0, 10) - parseInt(st(i, "padding-bottom") || 0, 10),
    Number.isNaN(t) && (t = 0),
    Number.isNaN(n) && (n = 0),
    Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n
    }))
}
function Lc() {
    const e = this;
    function t(_) {
        return e.isHorizontal() ? _ : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[_]
    }
    function n(_, L) {
        return parseFloat(_.getPropertyValue(t(L)) || 0)
    }
    const i = e.params
      , {wrapperEl: s, slidesEl: r, size: l, rtlTranslate: a, wrongRTL: o} = e
      , d = e.virtual && i.virtual.enabled
      , f = d ? e.virtual.slides.length : e.slides.length
      , c = ze(r, `.${e.params.slideClass}, swiper-slide`)
      , u = d ? e.virtual.slides.length : c.length;
    let m = [];
    const E = []
      , b = [];
    let C = i.slidesOffsetBefore;
    typeof C == "function" && (C = i.slidesOffsetBefore.call(e));
    let y = i.slidesOffsetAfter;
    typeof y == "function" && (y = i.slidesOffsetAfter.call(e));
    const p = e.snapGrid.length
      , h = e.slidesGrid.length;
    let g = i.spaceBetween
      , S = -C
      , O = 0
      , I = 0;
    if (typeof l > "u")
        return;
    typeof g == "string" && g.indexOf("%") >= 0 ? g = parseFloat(g.replace("%", "")) / 100 * l : typeof g == "string" && (g = parseFloat(g)),
    e.virtualSize = -g,
    c.forEach(_ => {
        a ? _.style.marginLeft = "" : _.style.marginRight = "",
        _.style.marginBottom = "",
        _.style.marginTop = ""
    }
    ),
    i.centeredSlides && i.cssMode && (Ln(s, "--swiper-centered-offset-before", ""),
    Ln(s, "--swiper-centered-offset-after", ""));
    const T = i.grid && i.grid.rows > 1 && e.grid;
    T && e.grid.initSlides(u);
    let x;
    const N = i.slidesPerView === "auto" && i.breakpoints && Object.keys(i.breakpoints).filter(_ => typeof i.breakpoints[_].slidesPerView < "u").length > 0;
    for (let _ = 0; _ < u; _ += 1) {
        x = 0;
        let L;
        if (c[_] && (L = c[_]),
        T && e.grid.updateSlide(_, L, u, t),
        !(c[_] && st(L, "display") === "none")) {
            if (i.slidesPerView === "auto") {
                N && (c[_].style[t("width")] = "");
                const D = getComputedStyle(L)
                  , z = L.style.transform
                  , J = L.style.webkitTransform;
                if (z && (L.style.transform = "none"),
                J && (L.style.webkitTransform = "none"),
                i.roundLengths)
                    x = e.isHorizontal() ? Ni(L, "width", !0) : Ni(L, "height", !0);
                else {
                    const q = n(D, "width")
                      , M = n(D, "padding-left")
                      , F = n(D, "padding-right")
                      , k = n(D, "margin-left")
                      , Z = n(D, "margin-right")
                      , se = D.getPropertyValue("box-sizing");
                    if (se && se === "border-box")
                        x = q + k + Z;
                    else {
                        const {clientWidth: ue, offsetWidth: Pe} = L;
                        x = q + M + F + k + Z + (Pe - ue)
                    }
                }
                z && (L.style.transform = z),
                J && (L.style.webkitTransform = J),
                i.roundLengths && (x = Math.floor(x))
            } else
                x = (l - (i.slidesPerView - 1) * g) / i.slidesPerView,
                i.roundLengths && (x = Math.floor(x)),
                c[_] && (c[_].style[t("width")] = `${x}px`);
            c[_] && (c[_].swiperSlideSize = x),
            b.push(x),
            i.centeredSlides ? (S = S + x / 2 + O / 2 + g,
            O === 0 && _ !== 0 && (S = S - l / 2 - g),
            _ === 0 && (S = S - l / 2 - g),
            Math.abs(S) < 1 / 1e3 && (S = 0),
            i.roundLengths && (S = Math.floor(S)),
            I % i.slidesPerGroup === 0 && m.push(S),
            E.push(S)) : (i.roundLengths && (S = Math.floor(S)),
            (I - Math.min(e.params.slidesPerGroupSkip, I)) % e.params.slidesPerGroup === 0 && m.push(S),
            E.push(S),
            S = S + x + g),
            e.virtualSize += x + g,
            O = x,
            I += 1
        }
    }
    if (e.virtualSize = Math.max(e.virtualSize, l) + y,
    a && o && (i.effect === "slide" || i.effect === "coverflow") && (s.style.width = `${e.virtualSize + g}px`),
    i.setWrapperSize && (s.style[t("width")] = `${e.virtualSize + g}px`),
    T && e.grid.updateWrapperSize(x, m, t),
    !i.centeredSlides) {
        const _ = [];
        for (let L = 0; L < m.length; L += 1) {
            let D = m[L];
            i.roundLengths && (D = Math.floor(D)),
            m[L] <= e.virtualSize - l && _.push(D)
        }
        m = _,
        Math.floor(e.virtualSize - l) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - l)
    }
    if (d && i.loop) {
        const _ = b[0] + g;
        if (i.slidesPerGroup > 1) {
            const L = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / i.slidesPerGroup)
              , D = _ * i.slidesPerGroup;
            for (let z = 0; z < L; z += 1)
                m.push(m[m.length - 1] + D)
        }
        for (let L = 0; L < e.virtual.slidesBefore + e.virtual.slidesAfter; L += 1)
            i.slidesPerGroup === 1 && m.push(m[m.length - 1] + _),
            E.push(E[E.length - 1] + _),
            e.virtualSize += _
    }
    if (m.length === 0 && (m = [0]),
    g !== 0) {
        const _ = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
        c.filter( (L, D) => !i.cssMode || i.loop ? !0 : D !== c.length - 1).forEach(L => {
            L.style[_] = `${g}px`
        }
        )
    }
    if (i.centeredSlides && i.centeredSlidesBounds) {
        let _ = 0;
        b.forEach(D => {
            _ += D + (g || 0)
        }
        ),
        _ -= g;
        const L = _ - l;
        m = m.map(D => D <= 0 ? -C : D > L ? L + y : D)
    }
    if (i.centerInsufficientSlides) {
        let _ = 0;
        if (b.forEach(L => {
            _ += L + (g || 0)
        }
        ),
        _ -= g,
        _ < l) {
            const L = (l - _) / 2;
            m.forEach( (D, z) => {
                m[z] = D - L
            }
            ),
            E.forEach( (D, z) => {
                E[z] = D + L
            }
            )
        }
    }
    if (Object.assign(e, {
        slides: c,
        snapGrid: m,
        slidesGrid: E,
        slidesSizesGrid: b
    }),
    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
        Ln(s, "--swiper-centered-offset-before", `${-m[0]}px`),
        Ln(s, "--swiper-centered-offset-after", `${e.size / 2 - b[b.length - 1] / 2}px`);
        const _ = -e.snapGrid[0]
          , L = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map(D => D + _),
        e.slidesGrid = e.slidesGrid.map(D => D + L)
    }
    if (u !== f && e.emit("slidesLengthChange"),
    m.length !== p && (e.params.watchOverflow && e.checkOverflow(),
    e.emit("snapGridLengthChange")),
    E.length !== h && e.emit("slidesGridLengthChange"),
    i.watchSlidesProgress && e.updateSlidesOffset(),
    !d && !i.cssMode && (i.effect === "slide" || i.effect === "fade")) {
        const _ = `${i.containerModifierClass}backface-hidden`
          , L = e.el.classList.contains(_);
        u <= i.maxBackfaceHiddenSlides ? L || e.el.classList.add(_) : L && e.el.classList.remove(_)
    }
}
function Oc(e) {
    const t = this
      , n = []
      , i = t.virtual && t.params.virtual.enabled;
    let s = 0, r;
    typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
    const l = a => i ? t.slides[t.getSlideIndexByData(a)] : t.slides[a];
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach(a => {
                n.push(a)
            }
            );
        else
            for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                const a = t.activeIndex + r;
                if (a > t.slides.length && !i)
                    break;
                n.push(l(a))
            }
    else
        n.push(l(t.activeIndex));
    for (r = 0; r < n.length; r += 1)
        if (typeof n[r] < "u") {
            const a = n[r].offsetHeight;
            s = a > s ? a : s
        }
    (s || s === 0) && (t.wrapperEl.style.height = `${s}px`)
}
function Ac() {
    const e = this
      , t = e.slides
      , n = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
    for (let i = 0; i < t.length; i += 1)
        t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - n - e.cssOverflowAdjustment()
}
function Bc(e) {
    e === void 0 && (e = this && this.translate || 0);
    const t = this
      , n = t.params
      , {slides: i, rtlTranslate: s, snapGrid: r} = t;
    if (i.length === 0)
        return;
    typeof i[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    let l = -e;
    s && (l = e),
    i.forEach(o => {
        o.classList.remove(n.slideVisibleClass)
    }
    ),
    t.visibleSlidesIndexes = [],
    t.visibleSlides = [];
    let a = n.spaceBetween;
    typeof a == "string" && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * t.size : typeof a == "string" && (a = parseFloat(a));
    for (let o = 0; o < i.length; o += 1) {
        const d = i[o];
        let f = d.swiperSlideOffset;
        n.cssMode && n.centeredSlides && (f -= i[0].swiperSlideOffset);
        const c = (l + (n.centeredSlides ? t.minTranslate() : 0) - f) / (d.swiperSlideSize + a)
          , u = (l - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - f) / (d.swiperSlideSize + a)
          , m = -(l - f)
          , E = m + t.slidesSizesGrid[o];
        (m >= 0 && m < t.size - 1 || E > 1 && E <= t.size || m <= 0 && E >= t.size) && (t.visibleSlides.push(d),
        t.visibleSlidesIndexes.push(o),
        i[o].classList.add(n.slideVisibleClass)),
        d.progress = s ? -c : c,
        d.originalProgress = s ? -u : u
    }
}
function zc(e) {
    const t = this;
    if (typeof e > "u") {
        const f = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * f || 0
    }
    const n = t.params
      , i = t.maxTranslate() - t.minTranslate();
    let {progress: s, isBeginning: r, isEnd: l, progressLoop: a} = t;
    const o = r
      , d = l;
    if (i === 0)
        s = 0,
        r = !0,
        l = !0;
    else {
        s = (e - t.minTranslate()) / i;
        const f = Math.abs(e - t.minTranslate()) < 1
          , c = Math.abs(e - t.maxTranslate()) < 1;
        r = f || s <= 0,
        l = c || s >= 1,
        f && (s = 0),
        c && (s = 1)
    }
    if (n.loop) {
        const f = t.getSlideIndexByData(0)
          , c = t.getSlideIndexByData(t.slides.length - 1)
          , u = t.slidesGrid[f]
          , m = t.slidesGrid[c]
          , E = t.slidesGrid[t.slidesGrid.length - 1]
          , b = Math.abs(e);
        b >= u ? a = (b - u) / E : a = (b + E - m) / E,
        a > 1 && (a -= 1)
    }
    Object.assign(t, {
        progress: s,
        progressLoop: a,
        isBeginning: r,
        isEnd: l
    }),
    (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e),
    r && !o && t.emit("reachBeginning toEdge"),
    l && !d && t.emit("reachEnd toEdge"),
    (o && !r || d && !l) && t.emit("fromEdge"),
    t.emit("progress", s)
}
function Dc() {
    const e = this
      , {slides: t, params: n, slidesEl: i, activeIndex: s} = e
      , r = e.virtual && n.virtual.enabled
      , l = o => ze(i, `.${n.slideClass}${o}, swiper-slide${o}`)[0];
    t.forEach(o => {
        o.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass)
    }
    );
    let a;
    if (r)
        if (n.loop) {
            let o = s - e.virtual.slidesBefore;
            o < 0 && (o = e.virtual.slides.length + o),
            o >= e.virtual.slides.length && (o -= e.virtual.slides.length),
            a = l(`[data-swiper-slide-index="${o}"]`)
        } else
            a = l(`[data-swiper-slide-index="${s}"]`);
    else
        a = t[s];
    if (a) {
        a.classList.add(n.slideActiveClass);
        let o = wc(a, `.${n.slideClass}, swiper-slide`)[0];
        n.loop && !o && (o = t[0]),
        o && o.classList.add(n.slideNextClass);
        let d = bc(a, `.${n.slideClass}, swiper-slide`)[0];
        n.loop && !d === 0 && (d = t[t.length - 1]),
        d && d.classList.add(n.slidePrevClass)
    }
    e.emitSlidesClasses()
}
const Bn = (e, t) => {
    if (!e || e.destroyed || !e.params)
        return;
    const n = () => e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
      , i = t.closest(n());
    if (i) {
        let s = i.querySelector(`.${e.params.lazyPreloaderClass}`);
        !s && e.isElement && (i.shadowRoot ? s = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame( () => {
            i.shadowRoot && (s = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),
            s && s.remove())
        }
        )),
        s && s.remove()
    }
}
  , gi = (e, t) => {
    if (!e.slides[t])
        return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading")
}
  , $i = e => {
    if (!e || e.destroyed || !e.params)
        return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0)
        return;
    t = Math.min(t, n);
    const i = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView)
      , s = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
        const l = s
          , a = [l - t];
        a.push(...Array.from({
            length: t
        }).map( (o, d) => l + i + d)),
        e.slides.forEach( (o, d) => {
            a.includes(o.column) && gi(e, d)
        }
        );
        return
    }
    const r = s + i - 1;
    if (e.params.rewind || e.params.loop)
        for (let l = s - t; l <= r + t; l += 1) {
            const a = (l % n + n) % n;
            (a < s || a > r) && gi(e, a)
        }
    else
        for (let l = Math.max(s - t, 0); l <= Math.min(r + t, n - 1); l += 1)
            l !== s && (l > r || l < s) && gi(e, l)
}
;
function Fc(e) {
    const {slidesGrid: t, params: n} = e
      , i = e.rtlTranslate ? e.translate : -e.translate;
    let s;
    for (let r = 0; r < t.length; r += 1)
        typeof t[r + 1] < "u" ? i >= t[r] && i < t[r + 1] - (t[r + 1] - t[r]) / 2 ? s = r : i >= t[r] && i < t[r + 1] && (s = r + 1) : i >= t[r] && (s = r);
    return n.normalizeSlideIndex && (s < 0 || typeof s > "u") && (s = 0),
    s
}
function Rc(e) {
    const t = this
      , n = t.rtlTranslate ? t.translate : -t.translate
      , {snapGrid: i, params: s, activeIndex: r, realIndex: l, snapIndex: a} = t;
    let o = e, d;
    const f = u => {
        let m = u - t.virtual.slidesBefore;
        return m < 0 && (m = t.virtual.slides.length + m),
        m >= t.virtual.slides.length && (m -= t.virtual.slides.length),
        m
    }
    ;
    if (typeof o > "u" && (o = Fc(t)),
    i.indexOf(n) >= 0)
        d = i.indexOf(n);
    else {
        const u = Math.min(s.slidesPerGroupSkip, o);
        d = u + Math.floor((o - u) / s.slidesPerGroup)
    }
    if (d >= i.length && (d = i.length - 1),
    o === r) {
        d !== a && (t.snapIndex = d,
        t.emit("snapIndexChange")),
        t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = f(o));
        return
    }
    let c;
    t.virtual && s.virtual.enabled && s.loop ? c = f(o) : t.slides[o] ? c = parseInt(t.slides[o].getAttribute("data-swiper-slide-index") || o, 10) : c = o,
    Object.assign(t, {
        previousSnapIndex: a,
        snapIndex: d,
        previousRealIndex: l,
        realIndex: c,
        previousIndex: r,
        activeIndex: o
    }),
    t.initialized && $i(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) && (l !== c && t.emit("realIndexChange"),
    t.emit("slideChange"))
}
function Nc(e, t) {
    const n = this
      , i = n.params;
    let s = e.closest(`.${i.slideClass}, swiper-slide`);
    !s && n.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(a => {
        !s && a.matches && a.matches(`.${i.slideClass}, swiper-slide`) && (s = a)
    }
    );
    let r = !1, l;
    if (s) {
        for (let a = 0; a < n.slides.length; a += 1)
            if (n.slides[a] === s) {
                r = !0,
                l = a;
                break
            }
    }
    if (s && r)
        n.clickedSlide = s,
        n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(s.getAttribute("data-swiper-slide-index"), 10) : n.clickedIndex = l;
    else {
        n.clickedSlide = void 0,
        n.clickedIndex = void 0;
        return
    }
    i.slideToClickedSlide && n.clickedIndex !== void 0 && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide()
}
var $c = {
    updateSize: Ic,
    updateSlides: Lc,
    updateAutoHeight: Oc,
    updateSlidesOffset: Ac,
    updateSlidesProgress: Bc,
    updateProgress: zc,
    updateSlidesClasses: Dc,
    updateActiveIndex: Rc,
    updateClickedSlide: Nc
};
function Hc(e) {
    e === void 0 && (e = this.isHorizontal() ? "x" : "y");
    const t = this
      , {params: n, rtlTranslate: i, translate: s, wrapperEl: r} = t;
    if (n.virtualTranslate)
        return i ? -s : s;
    if (n.cssMode)
        return s;
    let l = Fi(r, e);
    return l += t.cssOverflowAdjustment(),
    i && (l = -l),
    l || 0
}
function kc(e, t) {
    const n = this
      , {rtlTranslate: i, params: s, wrapperEl: r, progress: l} = n;
    let a = 0
      , o = 0;
    const d = 0;
    n.isHorizontal() ? a = i ? -e : e : o = e,
    s.roundLengths && (a = Math.floor(a),
    o = Math.floor(o)),
    n.previousTranslate = n.translate,
    n.translate = n.isHorizontal() ? a : o,
    s.cssMode ? r[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -a : -o : s.virtualTranslate || (n.isHorizontal() ? a -= n.cssOverflowAdjustment() : o -= n.cssOverflowAdjustment(),
    r.style.transform = `translate3d(${a}px, ${o}px, ${d}px)`);
    let f;
    const c = n.maxTranslate() - n.minTranslate();
    c === 0 ? f = 0 : f = (e - n.minTranslate()) / c,
    f !== l && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t)
}
function Vc() {
    return -this.snapGrid[0]
}
function jc() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function Wc(e, t, n, i, s) {
    e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    i === void 0 && (i = !0);
    const r = this
      , {params: l, wrapperEl: a} = r;
    if (r.animating && l.preventInteractionOnTransition)
        return !1;
    const o = r.minTranslate()
      , d = r.maxTranslate();
    let f;
    if (i && e > o ? f = o : i && e < d ? f = d : f = e,
    r.updateProgress(f),
    l.cssMode) {
        const c = r.isHorizontal();
        if (t === 0)
            a[c ? "scrollLeft" : "scrollTop"] = -f;
        else {
            if (!r.support.smoothScroll)
                return xl({
                    swiper: r,
                    targetPosition: -f,
                    side: c ? "left" : "top"
                }),
                !0;
            a.scrollTo({
                [c ? "left" : "top"]: -f,
                behavior: "smooth"
            })
        }
        return !0
    }
    return t === 0 ? (r.setTransition(0),
    r.setTranslate(f),
    n && (r.emit("beforeTransitionStart", t, s),
    r.emit("transitionEnd"))) : (r.setTransition(t),
    r.setTranslate(f),
    n && (r.emit("beforeTransitionStart", t, s),
    r.emit("transitionStart")),
    r.animating || (r.animating = !0,
    r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(u) {
        !r || r.destroyed || u.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
        r.onTranslateToWrapperTransitionEnd = null,
        delete r.onTranslateToWrapperTransitionEnd,
        n && r.emit("transitionEnd"))
    }
    ),
    r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))),
    !0
}
var Yc = {
    getTranslate: Hc,
    setTranslate: kc,
    minTranslate: Vc,
    maxTranslate: jc,
    translateTo: Wc
};
function Xc(e, t) {
    const n = this;
    n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`,
    n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : ""),
    n.emit("setTransition", e, t)
}
function Tl(e) {
    let {swiper: t, runCallbacks: n, direction: i, step: s} = e;
    const {activeIndex: r, previousIndex: l} = t;
    let a = i;
    if (a || (r > l ? a = "next" : r < l ? a = "prev" : a = "reset"),
    t.emit(`transition${s}`),
    n && r !== l) {
        if (a === "reset") {
            t.emit(`slideResetTransition${s}`);
            return
        }
        t.emit(`slideChangeTransition${s}`),
        a === "next" ? t.emit(`slideNextTransition${s}`) : t.emit(`slidePrevTransition${s}`)
    }
}
function Gc(e, t) {
    e === void 0 && (e = !0);
    const n = this
      , {params: i} = n;
    i.cssMode || (i.autoHeight && n.updateAutoHeight(),
    Tl({
        swiper: n,
        runCallbacks: e,
        direction: t,
        step: "Start"
    }))
}
function qc(e, t) {
    e === void 0 && (e = !0);
    const n = this
      , {params: i} = n;
    n.animating = !1,
    !i.cssMode && (n.setTransition(0),
    Tl({
        swiper: n,
        runCallbacks: e,
        direction: t,
        step: "End"
    }))
}
var Uc = {
    setTransition: Xc,
    transitionStart: Gc,
    transitionEnd: qc
};
function Kc(e, t, n, i, s) {
    e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
    const r = this;
    let l = e;
    l < 0 && (l = 0);
    const {params: a, snapGrid: o, slidesGrid: d, previousIndex: f, activeIndex: c, rtlTranslate: u, wrapperEl: m, enabled: E} = r;
    if (r.animating && a.preventInteractionOnTransition || !E && !i && !s)
        return !1;
    const b = Math.min(r.params.slidesPerGroupSkip, l);
    let C = b + Math.floor((l - b) / r.params.slidesPerGroup);
    C >= o.length && (C = o.length - 1);
    const y = -o[C];
    if (a.normalizeSlideIndex)
        for (let h = 0; h < d.length; h += 1) {
            const g = -Math.floor(y * 100)
              , S = Math.floor(d[h] * 100)
              , O = Math.floor(d[h + 1] * 100);
            typeof d[h + 1] < "u" ? g >= S && g < O - (O - S) / 2 ? l = h : g >= S && g < O && (l = h + 1) : g >= S && (l = h)
        }
    if (r.initialized && l !== c && (!r.allowSlideNext && (u ? y > r.translate && y > r.minTranslate() : y < r.translate && y < r.minTranslate()) || !r.allowSlidePrev && y > r.translate && y > r.maxTranslate() && (c || 0) !== l))
        return !1;
    l !== (f || 0) && n && r.emit("beforeSlideChangeStart"),
    r.updateProgress(y);
    let p;
    if (l > c ? p = "next" : l < c ? p = "prev" : p = "reset",
    u && -y === r.translate || !u && y === r.translate)
        return r.updateActiveIndex(l),
        a.autoHeight && r.updateAutoHeight(),
        r.updateSlidesClasses(),
        a.effect !== "slide" && r.setTranslate(y),
        p !== "reset" && (r.transitionStart(n, p),
        r.transitionEnd(n, p)),
        !1;
    if (a.cssMode) {
        const h = r.isHorizontal()
          , g = u ? y : -y;
        if (t === 0) {
            const S = r.virtual && r.params.virtual.enabled;
            S && (r.wrapperEl.style.scrollSnapType = "none",
            r._immediateVirtual = !0),
            S && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0,
            requestAnimationFrame( () => {
                m[h ? "scrollLeft" : "scrollTop"] = g
            }
            )) : m[h ? "scrollLeft" : "scrollTop"] = g,
            S && requestAnimationFrame( () => {
                r.wrapperEl.style.scrollSnapType = "",
                r._immediateVirtual = !1
            }
            )
        } else {
            if (!r.support.smoothScroll)
                return xl({
                    swiper: r,
                    targetPosition: g,
                    side: h ? "left" : "top"
                }),
                !0;
            m.scrollTo({
                [h ? "left" : "top"]: g,
                behavior: "smooth"
            })
        }
        return !0
    }
    return r.setTransition(t),
    r.setTranslate(y),
    r.updateActiveIndex(l),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", t, i),
    r.transitionStart(n, p),
    t === 0 ? r.transitionEnd(n, p) : r.animating || (r.animating = !0,
    r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(g) {
        !r || r.destroyed || g.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
        r.onSlideToWrapperTransitionEnd = null,
        delete r.onSlideToWrapperTransitionEnd,
        r.transitionEnd(n, p))
    }
    ),
    r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)),
    !0
}
function Jc(e, t, n, i) {
    e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
    const s = this;
    let r = e;
    return s.params.loop && (s.virtual && s.params.virtual.enabled ? r = r + s.virtual.slidesBefore : r = s.getSlideIndexByData(r)),
    s.slideTo(r, t, n, i)
}
function Zc(e, t, n) {
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0);
    const i = this
      , {enabled: s, params: r, animating: l} = i;
    if (!s)
        return i;
    let a = r.slidesPerGroup;
    r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const o = i.activeIndex < r.slidesPerGroupSkip ? 1 : a
      , d = i.virtual && r.virtual.enabled;
    if (r.loop) {
        if (l && !d && r.loopPreventsSliding)
            return !1;
        if (i.loopFix({
            direction: "next"
        }),
        i._clientLeft = i.wrapperEl.clientLeft,
        i.activeIndex === i.slides.length - 1 && r.cssMode)
            return requestAnimationFrame( () => {
                i.slideTo(i.activeIndex + o, e, t, n)
            }
            ),
            !0
    }
    return r.rewind && i.isEnd ? i.slideTo(0, e, t, n) : i.slideTo(i.activeIndex + o, e, t, n)
}
function Qc(e, t, n) {
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0);
    const i = this
      , {params: s, snapGrid: r, slidesGrid: l, rtlTranslate: a, enabled: o, animating: d} = i;
    if (!o)
        return i;
    const f = i.virtual && s.virtual.enabled;
    if (s.loop) {
        if (d && !f && s.loopPreventsSliding)
            return !1;
        i.loopFix({
            direction: "prev"
        }),
        i._clientLeft = i.wrapperEl.clientLeft
    }
    const c = a ? i.translate : -i.translate;
    function u(y) {
        return y < 0 ? -Math.floor(Math.abs(y)) : Math.floor(y)
    }
    const m = u(c)
      , E = r.map(y => u(y));
    let b = r[E.indexOf(m) - 1];
    if (typeof b > "u" && s.cssMode) {
        let y;
        r.forEach( (p, h) => {
            m >= p && (y = h)
        }
        ),
        typeof y < "u" && (b = r[y > 0 ? y - 1 : y])
    }
    let C = 0;
    if (typeof b < "u" && (C = l.indexOf(b),
    C < 0 && (C = i.activeIndex - 1),
    s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (C = C - i.slidesPerViewDynamic("previous", !0) + 1,
    C = Math.max(C, 0))),
    s.rewind && i.isBeginning) {
        const y = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
        return i.slideTo(y, e, t, n)
    } else if (s.loop && i.activeIndex === 0 && s.cssMode)
        return requestAnimationFrame( () => {
            i.slideTo(C, e, t, n)
        }
        ),
        !0;
    return i.slideTo(C, e, t, n)
}
function eu(e, t, n) {
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0);
    const i = this;
    return i.slideTo(i.activeIndex, e, t, n)
}
function tu(e, t, n, i) {
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    i === void 0 && (i = .5);
    const s = this;
    let r = s.activeIndex;
    const l = Math.min(s.params.slidesPerGroupSkip, r)
      , a = l + Math.floor((r - l) / s.params.slidesPerGroup)
      , o = s.rtlTranslate ? s.translate : -s.translate;
    if (o >= s.snapGrid[a]) {
        const d = s.snapGrid[a]
          , f = s.snapGrid[a + 1];
        o - d > (f - d) * i && (r += s.params.slidesPerGroup)
    } else {
        const d = s.snapGrid[a - 1]
          , f = s.snapGrid[a];
        o - d <= (f - d) * i && (r -= s.params.slidesPerGroup)
    }
    return r = Math.max(r, 0),
    r = Math.min(r, s.slidesGrid.length - 1),
    s.slideTo(r, e, t, n)
}
function nu() {
    const e = this
      , {params: t, slidesEl: n} = e
      , i = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let s = e.clickedIndex, r;
    const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
    if (t.loop) {
        if (e.animating)
            return;
        r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
        t.centeredSlides ? s < e.loopedSlides - i / 2 || s > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(),
        s = e.getSlideIndex(ze(n, `${l}[data-swiper-slide-index="${r}"]`)[0]),
        Di( () => {
            e.slideTo(s)
        }
        )) : e.slideTo(s) : s > e.slides.length - i ? (e.loopFix(),
        s = e.getSlideIndex(ze(n, `${l}[data-swiper-slide-index="${r}"]`)[0]),
        Di( () => {
            e.slideTo(s)
        }
        )) : e.slideTo(s)
    } else
        e.slideTo(s)
}
var iu = {
    slideTo: Kc,
    slideToLoop: Jc,
    slideNext: Zc,
    slidePrev: Qc,
    slideReset: eu,
    slideToClosest: tu,
    slideToClickedSlide: nu
};
function su(e) {
    const t = this
      , {params: n, slidesEl: i} = t;
    if (!n.loop || t.virtual && t.params.virtual.enabled)
        return;
    ze(i, `.${n.slideClass}, swiper-slide`).forEach( (r, l) => {
        r.setAttribute("data-swiper-slide-index", l)
    }
    ),
    t.loopFix({
        slideRealIndex: e,
        direction: n.centeredSlides ? void 0 : "next"
    })
}
function ru(e) {
    let {slideRealIndex: t, slideTo: n=!0, direction: i, setTranslate: s, activeSlideIndex: r, byController: l, byMousewheel: a} = e === void 0 ? {} : e;
    const o = this;
    if (!o.params.loop)
        return;
    o.emit("beforeLoopFix");
    const {slides: d, allowSlidePrev: f, allowSlideNext: c, slidesEl: u, params: m} = o;
    if (o.allowSlidePrev = !0,
    o.allowSlideNext = !0,
    o.virtual && m.virtual.enabled) {
        n && (!m.centeredSlides && o.snapIndex === 0 ? o.slideTo(o.virtual.slides.length, 0, !1, !0) : m.centeredSlides && o.snapIndex < m.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
        o.allowSlidePrev = f,
        o.allowSlideNext = c,
        o.emit("loopFix");
        return
    }
    const E = m.slidesPerView === "auto" ? o.slidesPerViewDynamic() : Math.ceil(parseFloat(m.slidesPerView, 10));
    let b = m.loopedSlides || E;
    b % m.slidesPerGroup !== 0 && (b += m.slidesPerGroup - b % m.slidesPerGroup),
    o.loopedSlides = b;
    const C = []
      , y = [];
    let p = o.activeIndex;
    typeof r > "u" ? r = o.getSlideIndex(o.slides.filter(I => I.classList.contains(m.slideActiveClass))[0]) : p = r;
    const h = i === "next" || !i
      , g = i === "prev" || !i;
    let S = 0
      , O = 0;
    if (r < b) {
        S = Math.max(b - r, m.slidesPerGroup);
        for (let I = 0; I < b - r; I += 1) {
            const T = I - Math.floor(I / d.length) * d.length;
            C.push(d.length - T - 1)
        }
    } else if (r > o.slides.length - b * 2) {
        O = Math.max(r - (o.slides.length - b * 2), m.slidesPerGroup);
        for (let I = 0; I < O; I += 1) {
            const T = I - Math.floor(I / d.length) * d.length;
            y.push(T)
        }
    }
    if (g && C.forEach(I => {
        o.slides[I].swiperLoopMoveDOM = !0,
        u.prepend(o.slides[I]),
        o.slides[I].swiperLoopMoveDOM = !1
    }
    ),
    h && y.forEach(I => {
        o.slides[I].swiperLoopMoveDOM = !0,
        u.append(o.slides[I]),
        o.slides[I].swiperLoopMoveDOM = !1
    }
    ),
    o.recalcSlides(),
    m.slidesPerView === "auto" && o.updateSlides(),
    m.watchSlidesProgress && o.updateSlidesOffset(),
    n) {
        if (C.length > 0 && g)
            if (typeof t > "u") {
                const I = o.slidesGrid[p]
                  , x = o.slidesGrid[p + S] - I;
                a ? o.setTranslate(o.translate - x) : (o.slideTo(p + S, 0, !1, !0),
                s && (o.touches[o.isHorizontal() ? "startX" : "startY"] += x,
                o.touchEventsData.currentTranslate = o.translate))
            } else
                s && (o.slideToLoop(t, 0, !1, !0),
                o.touchEventsData.currentTranslate = o.translate);
        else if (y.length > 0 && h)
            if (typeof t > "u") {
                const I = o.slidesGrid[p]
                  , x = o.slidesGrid[p - O] - I;
                a ? o.setTranslate(o.translate - x) : (o.slideTo(p - O, 0, !1, !0),
                s && (o.touches[o.isHorizontal() ? "startX" : "startY"] += x,
                o.touchEventsData.currentTranslate = o.translate))
            } else
                o.slideToLoop(t, 0, !1, !0)
    }
    if (o.allowSlidePrev = f,
    o.allowSlideNext = c,
    o.controller && o.controller.control && !l) {
        const I = {
            slideRealIndex: t,
            direction: i,
            setTranslate: s,
            activeSlideIndex: r,
            byController: !0
        };
        Array.isArray(o.controller.control) ? o.controller.control.forEach(T => {
            !T.destroyed && T.params.loop && T.loopFix({
                ...I,
                slideTo: T.params.slidesPerView === m.slidesPerView ? n : !1
            })
        }
        ) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({
            ...I,
            slideTo: o.controller.control.params.slidesPerView === m.slidesPerView ? n : !1
        })
    }
    o.emit("loopFix")
}
function lu() {
    const e = this
      , {params: t, slidesEl: n} = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled)
        return;
    e.recalcSlides();
    const i = [];
    e.slides.forEach(s => {
        const r = typeof s.swiperSlideIndex > "u" ? s.getAttribute("data-swiper-slide-index") * 1 : s.swiperSlideIndex;
        i[r] = s
    }
    ),
    e.slides.forEach(s => {
        s.removeAttribute("data-swiper-slide-index")
    }
    ),
    i.forEach(s => {
        n.append(s)
    }
    ),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0)
}
var ou = {
    loopCreate: su,
    loopFix: ru,
    loopDestroy: lu
};
function au(e) {
    const t = this;
    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
        return;
    const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    t.isElement && (t.__preventObserver__ = !0),
    n.style.cursor = "move",
    n.style.cursor = e ? "grabbing" : "grab",
    t.isElement && requestAnimationFrame( () => {
        t.__preventObserver__ = !1
    }
    )
}
function cu() {
    const e = this;
    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0),
    e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
    e.isElement && requestAnimationFrame( () => {
        e.__preventObserver__ = !1
    }
    ))
}
var uu = {
    setGrabCursor: au,
    unsetGrabCursor: cu
};
function fu(e, t) {
    t === void 0 && (t = this);
    function n(i) {
        if (!i || i === Fe() || i === be())
            return null;
        i.assignedSlot && (i = i.assignedSlot);
        const s = i.closest(e);
        return !s && !i.getRootNode ? null : s || n(i.getRootNode().host)
    }
    return n(t)
}
function du(e) {
    const t = this
      , n = Fe()
      , i = be()
      , s = t.touchEventsData;
    s.evCache.push(e);
    const {params: r, touches: l, enabled: a} = t;
    if (!a || !r.simulateTouch && e.pointerType === "mouse" || t.animating && r.preventInteractionOnTransition)
        return;
    !t.animating && r.cssMode && r.loop && t.loopFix();
    let o = e;
    o.originalEvent && (o = o.originalEvent);
    let d = o.target;
    if (r.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(d) || "which"in o && o.which === 3 || "button"in o && o.button > 0 || s.isTouched && s.isMoved)
        return;
    const f = !!r.noSwipingClass && r.noSwipingClass !== ""
      , c = e.composedPath ? e.composedPath() : e.path;
    f && o.target && o.target.shadowRoot && c && (d = c[0]);
    const u = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`
      , m = !!(o.target && o.target.shadowRoot);
    if (r.noSwiping && (m ? fu(u, d) : d.closest(u))) {
        t.allowClick = !0;
        return
    }
    if (r.swipeHandler && !d.closest(r.swipeHandler))
        return;
    l.currentX = o.pageX,
    l.currentY = o.pageY;
    const E = l.currentX
      , b = l.currentY
      , C = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection
      , y = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
    if (C && (E <= y || E >= i.innerWidth - y))
        if (C === "prevent")
            e.preventDefault();
        else
            return;
    Object.assign(s, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
    l.startX = E,
    l.startY = b,
    s.touchStartTime = wt(),
    t.allowClick = !0,
    t.updateSize(),
    t.swipeDirection = void 0,
    r.threshold > 0 && (s.allowThresholdMove = !1);
    let p = !0;
    d.matches(s.focusableElements) && (p = !1,
    d.nodeName === "SELECT" && (s.isTouched = !1)),
    n.activeElement && n.activeElement.matches(s.focusableElements) && n.activeElement !== d && n.activeElement.blur();
    const h = p && t.allowTouchMove && r.touchStartPreventDefault;
    (r.touchStartForcePreventDefault || h) && !d.isContentEditable && o.preventDefault(),
    r.freeMode && r.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(),
    t.emit("touchStart", o)
}
function pu(e) {
    const t = Fe()
      , n = this
      , i = n.touchEventsData
      , {params: s, touches: r, rtlTranslate: l, enabled: a} = n;
    if (!a || !s.simulateTouch && e.pointerType === "mouse")
        return;
    let o = e;
    if (o.originalEvent && (o = o.originalEvent),
    !i.isTouched) {
        i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", o);
        return
    }
    const d = i.evCache.findIndex(I => I.pointerId === o.pointerId);
    d >= 0 && (i.evCache[d] = o);
    const f = i.evCache.length > 1 ? i.evCache[0] : o
      , c = f.pageX
      , u = f.pageY;
    if (o.preventedByNestedSwiper) {
        r.startX = c,
        r.startY = u;
        return
    }
    if (!n.allowTouchMove) {
        o.target.matches(i.focusableElements) || (n.allowClick = !1),
        i.isTouched && (Object.assign(r, {
            startX: c,
            startY: u,
            prevX: n.touches.currentX,
            prevY: n.touches.currentY,
            currentX: c,
            currentY: u
        }),
        i.touchStartTime = wt());
        return
    }
    if (s.touchReleaseOnEdges && !s.loop) {
        if (n.isVertical()) {
            if (u < r.startY && n.translate <= n.maxTranslate() || u > r.startY && n.translate >= n.minTranslate()) {
                i.isTouched = !1,
                i.isMoved = !1;
                return
            }
        } else if (c < r.startX && n.translate <= n.maxTranslate() || c > r.startX && n.translate >= n.minTranslate())
            return
    }
    if (t.activeElement && o.target === t.activeElement && o.target.matches(i.focusableElements)) {
        i.isMoved = !0,
        n.allowClick = !1;
        return
    }
    if (i.allowTouchCallbacks && n.emit("touchMove", o),
    o.targetTouches && o.targetTouches.length > 1)
        return;
    r.currentX = c,
    r.currentY = u;
    const m = r.currentX - r.startX
      , E = r.currentY - r.startY;
    if (n.params.threshold && Math.sqrt(m ** 2 + E ** 2) < n.params.threshold)
        return;
    if (typeof i.isScrolling > "u") {
        let I;
        n.isHorizontal() && r.currentY === r.startY || n.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : m * m + E * E >= 25 && (I = Math.atan2(Math.abs(E), Math.abs(m)) * 180 / Math.PI,
        i.isScrolling = n.isHorizontal() ? I > s.touchAngle : 90 - I > s.touchAngle)
    }
    if (i.isScrolling && n.emit("touchMoveOpposite", o),
    typeof i.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (i.startMoving = !0),
    i.isScrolling || n.zoom && n.params.zoom && n.params.zoom.enabled && i.evCache.length > 1) {
        i.isTouched = !1;
        return
    }
    if (!i.startMoving)
        return;
    n.allowClick = !1,
    !s.cssMode && o.cancelable && o.preventDefault(),
    s.touchMoveStopPropagation && !s.nested && o.stopPropagation();
    let b = n.isHorizontal() ? m : E
      , C = n.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
    s.oneWayMovement && (b = Math.abs(b) * (l ? 1 : -1),
    C = Math.abs(C) * (l ? 1 : -1)),
    r.diff = b,
    b *= s.touchRatio,
    l && (b = -b,
    C = -C);
    const y = n.touchesDirection;
    n.swipeDirection = b > 0 ? "prev" : "next",
    n.touchesDirection = C > 0 ? "prev" : "next";
    const p = n.params.loop && !s.cssMode
      , h = n.swipeDirection === "next" && n.allowSlideNext || n.swipeDirection === "prev" && n.allowSlidePrev;
    if (!i.isMoved) {
        if (p && h && n.loopFix({
            direction: n.swipeDirection
        }),
        i.startTranslate = n.getTranslate(),
        n.setTransition(0),
        n.animating) {
            const I = new window.CustomEvent("transitionend",{
                bubbles: !0,
                cancelable: !0
            });
            n.wrapperEl.dispatchEvent(I)
        }
        i.allowMomentumBounce = !1,
        s.grabCursor && (n.allowSlideNext === !0 || n.allowSlidePrev === !0) && n.setGrabCursor(!0),
        n.emit("sliderFirstMove", o)
    }
    let g;
    i.isMoved && y !== n.touchesDirection && p && h && Math.abs(b) >= 1 && (n.loopFix({
        direction: n.swipeDirection,
        setTranslate: !0
    }),
    g = !0),
    n.emit("sliderMove", o),
    i.isMoved = !0,
    i.currentTranslate = b + i.startTranslate;
    let S = !0
      , O = s.resistanceRatio;
    if (s.touchReleaseOnEdges && (O = 0),
    b > 0 ? (p && h && !g && i.currentTranslate > (s.centeredSlides ? n.minTranslate() - n.size / 2 : n.minTranslate()) && n.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }),
    i.currentTranslate > n.minTranslate() && (S = !1,
    s.resistance && (i.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + i.startTranslate + b) ** O))) : b < 0 && (p && h && !g && i.currentTranslate < (s.centeredSlides ? n.maxTranslate() + n.size / 2 : n.maxTranslate()) && n.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: n.slides.length - (s.slidesPerView === "auto" ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10)))
    }),
    i.currentTranslate < n.maxTranslate() && (S = !1,
    s.resistance && (i.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - i.startTranslate - b) ** O))),
    S && (o.preventedByNestedSwiper = !0),
    !n.allowSlideNext && n.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
    !n.allowSlidePrev && n.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
    !n.allowSlidePrev && !n.allowSlideNext && (i.currentTranslate = i.startTranslate),
    s.threshold > 0)
        if (Math.abs(b) > s.threshold || i.allowThresholdMove) {
            if (!i.allowThresholdMove) {
                i.allowThresholdMove = !0,
                r.startX = r.currentX,
                r.startY = r.currentY,
                i.currentTranslate = i.startTranslate,
                r.diff = n.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
                return
            }
        } else {
            i.currentTranslate = i.startTranslate;
            return
        }
    !s.followFinger || s.cssMode || ((s.freeMode && s.freeMode.enabled && n.freeMode || s.watchSlidesProgress) && (n.updateActiveIndex(),
    n.updateSlidesClasses()),
    s.freeMode && s.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(i.currentTranslate),
    n.setTranslate(i.currentTranslate))
}
function hu(e) {
    const t = this
      , n = t.touchEventsData
      , i = n.evCache.findIndex(h => h.pointerId === e.pointerId);
    if (i >= 0 && n.evCache.splice(i, 1),
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type) && !(["pointercancel", "contextmenu"].includes(e.type) && (t.browser.isSafari || t.browser.isWebView)))
        return;
    const {params: s, touches: r, rtlTranslate: l, slidesGrid: a, enabled: o} = t;
    if (!o || !s.simulateTouch && e.pointerType === "mouse")
        return;
    let d = e;
    if (d.originalEvent && (d = d.originalEvent),
    n.allowTouchCallbacks && t.emit("touchEnd", d),
    n.allowTouchCallbacks = !1,
    !n.isTouched) {
        n.isMoved && s.grabCursor && t.setGrabCursor(!1),
        n.isMoved = !1,
        n.startMoving = !1;
        return
    }
    s.grabCursor && n.isMoved && n.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
    const f = wt()
      , c = f - n.touchStartTime;
    if (t.allowClick) {
        const h = d.path || d.composedPath && d.composedPath();
        t.updateClickedSlide(h && h[0] || d.target, h),
        t.emit("tap click", d),
        c < 300 && f - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)
    }
    if (n.lastClickTime = wt(),
    Di( () => {
        t.destroyed || (t.allowClick = !0)
    }
    ),
    !n.isTouched || !n.isMoved || !t.swipeDirection || r.diff === 0 || n.currentTranslate === n.startTranslate) {
        n.isTouched = !1,
        n.isMoved = !1,
        n.startMoving = !1;
        return
    }
    n.isTouched = !1,
    n.isMoved = !1,
    n.startMoving = !1;
    let u;
    if (s.followFinger ? u = l ? t.translate : -t.translate : u = -n.currentTranslate,
    s.cssMode)
        return;
    if (s.freeMode && s.freeMode.enabled) {
        t.freeMode.onTouchEnd({
            currentPos: u
        });
        return
    }
    let m = 0
      , E = t.slidesSizesGrid[0];
    for (let h = 0; h < a.length; h += h < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
        const g = h < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        typeof a[h + g] < "u" ? u >= a[h] && u < a[h + g] && (m = h,
        E = a[h + g] - a[h]) : u >= a[h] && (m = h,
        E = a[a.length - 1] - a[a.length - 2])
    }
    let b = null
      , C = null;
    s.rewind && (t.isBeginning ? C = s.virtual && s.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (b = 0));
    const y = (u - a[m]) / E
      , p = m < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    if (c > s.longSwipesMs) {
        if (!s.longSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.swipeDirection === "next" && (y >= s.longSwipesRatio ? t.slideTo(s.rewind && t.isEnd ? b : m + p) : t.slideTo(m)),
        t.swipeDirection === "prev" && (y > 1 - s.longSwipesRatio ? t.slideTo(m + p) : C !== null && y < 0 && Math.abs(y) > s.longSwipesRatio ? t.slideTo(C) : t.slideTo(m))
    } else {
        if (!s.shortSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo(m + p) : t.slideTo(m) : (t.swipeDirection === "next" && t.slideTo(b !== null ? b : m + p),
        t.swipeDirection === "prev" && t.slideTo(C !== null ? C : m))
    }
}
function lr() {
    const e = this
      , {params: t, el: n} = e;
    if (n && n.offsetWidth === 0)
        return;
    t.breakpoints && e.setBreakpoint();
    const {allowSlideNext: i, allowSlidePrev: s, snapGrid: r} = e
      , l = e.virtual && e.params.virtual.enabled;
    e.allowSlideNext = !0,
    e.allowSlidePrev = !0,
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
    const a = l && t.loop;
    (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !a ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.params.loop && !l ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout),
    e.autoplay.resizeTimeout = setTimeout( () => {
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
    }
    , 500)),
    e.allowSlidePrev = s,
    e.allowSlideNext = i,
    e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
}
function mu(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
    t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
    e.stopImmediatePropagation())))
}
function gu() {
    const e = this
      , {wrapperEl: t, rtlTranslate: n, enabled: i} = e;
    if (!i)
        return;
    e.previousTranslate = e.translate,
    e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
    let s;
    const r = e.maxTranslate() - e.minTranslate();
    r === 0 ? s = 0 : s = (e.translate - e.minTranslate()) / r,
    s !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1)
}
function vu(e) {
    const t = this;
    Bn(t, e.target),
    !(t.params.cssMode || t.params.slidesPerView !== "auto" && !t.params.autoHeight) && t.update()
}
let or = !1;
function yu() {}
const Cl = (e, t) => {
    const n = Fe()
      , {params: i, el: s, wrapperEl: r, device: l} = e
      , a = !!i.nested
      , o = t === "on" ? "addEventListener" : "removeEventListener"
      , d = t;
    s[o]("pointerdown", e.onTouchStart, {
        passive: !1
    }),
    n[o]("pointermove", e.onTouchMove, {
        passive: !1,
        capture: a
    }),
    n[o]("pointerup", e.onTouchEnd, {
        passive: !0
    }),
    n[o]("pointercancel", e.onTouchEnd, {
        passive: !0
    }),
    n[o]("pointerout", e.onTouchEnd, {
        passive: !0
    }),
    n[o]("pointerleave", e.onTouchEnd, {
        passive: !0
    }),
    n[o]("contextmenu", e.onTouchEnd, {
        passive: !0
    }),
    (i.preventClicks || i.preventClicksPropagation) && s[o]("click", e.onClick, !0),
    i.cssMode && r[o]("scroll", e.onScroll),
    i.updateOnWindowResize ? e[d](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", lr, !0) : e[d]("observerUpdate", lr, !0),
    s[o]("load", e.onLoad, {
        capture: !0
    })
}
;
function bu() {
    const e = this
      , t = Fe()
      , {params: n} = e;
    e.onTouchStart = du.bind(e),
    e.onTouchMove = pu.bind(e),
    e.onTouchEnd = hu.bind(e),
    n.cssMode && (e.onScroll = gu.bind(e)),
    e.onClick = mu.bind(e),
    e.onLoad = vu.bind(e),
    or || (t.addEventListener("touchstart", yu),
    or = !0),
    Cl(e, "on")
}
function wu() {
    Cl(this, "off")
}
var xu = {
    attachEvents: bu,
    detachEvents: wu
};
const ar = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function Eu() {
    const e = this
      , {realIndex: t, initialized: n, params: i, el: s} = e
      , r = i.breakpoints;
    if (!r || r && Object.keys(r).length === 0)
        return;
    const l = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
    if (!l || e.currentBreakpoint === l)
        return;
    const o = (l in r ? r[l] : void 0) || e.originalParams
      , d = ar(e, i)
      , f = ar(e, o)
      , c = i.enabled;
    d && !f ? (s.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`),
    e.emitContainerClasses()) : !d && f && (s.classList.add(`${i.containerModifierClass}grid`),
    (o.grid.fill && o.grid.fill === "column" || !o.grid.fill && i.grid.fill === "column") && s.classList.add(`${i.containerModifierClass}grid-column`),
    e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach(y => {
        if (typeof o[y] > "u")
            return;
        const p = i[y] && i[y].enabled
          , h = o[y] && o[y].enabled;
        p && !h && e[y].disable(),
        !p && h && e[y].enable()
    }
    );
    const u = o.direction && o.direction !== i.direction
      , m = i.loop && (o.slidesPerView !== i.slidesPerView || u)
      , E = i.loop;
    u && n && e.changeDirection(),
    Me(e.params, o);
    const b = e.params.enabled
      , C = e.params.loop;
    Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev
    }),
    c && !b ? e.disable() : !c && b && e.enable(),
    e.currentBreakpoint = l,
    e.emit("_beforeBreakpoint", o),
    n && (m ? (e.loopDestroy(),
    e.loopCreate(t),
    e.updateSlides()) : !E && C ? (e.loopCreate(t),
    e.updateSlides()) : E && !C && e.loopDestroy()),
    e.emit("breakpoint", o)
}
function Su(e, t, n) {
    if (t === void 0 && (t = "window"),
    !e || t === "container" && !n)
        return;
    let i = !1;
    const s = be()
      , r = t === "window" ? s.innerHeight : n.clientHeight
      , l = Object.keys(e).map(a => {
        if (typeof a == "string" && a.indexOf("@") === 0) {
            const o = parseFloat(a.substr(1));
            return {
                value: r * o,
                point: a
            }
        }
        return {
            value: a,
            point: a
        }
    }
    );
    l.sort( (a, o) => parseInt(a.value, 10) - parseInt(o.value, 10));
    for (let a = 0; a < l.length; a += 1) {
        const {point: o, value: d} = l[a];
        t === "window" ? s.matchMedia(`(min-width: ${d}px)`).matches && (i = o) : d <= n.clientWidth && (i = o)
    }
    return i || "max"
}
var Tu = {
    setBreakpoint: Eu,
    getBreakpoint: Su
};
function Cu(e, t) {
    const n = [];
    return e.forEach(i => {
        typeof i == "object" ? Object.keys(i).forEach(s => {
            i[s] && n.push(t + s)
        }
        ) : typeof i == "string" && n.push(t + i)
    }
    ),
    n
}
function _u() {
    const e = this
      , {classNames: t, params: n, rtl: i, el: s, device: r} = e
      , l = Cu(["initialized", n.direction, {
        "free-mode": e.params.freeMode && n.freeMode.enabled
    }, {
        autoheight: n.autoHeight
    }, {
        rtl: i
    }, {
        grid: n.grid && n.grid.rows > 1
    }, {
        "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column"
    }, {
        android: r.android
    }, {
        ios: r.ios
    }, {
        "css-mode": n.cssMode
    }, {
        centered: n.cssMode && n.centeredSlides
    }, {
        "watch-progress": n.watchSlidesProgress
    }], n.containerModifierClass);
    t.push(...l),
    s.classList.add(...t),
    e.emitContainerClasses()
}
function Mu() {
    const e = this
      , {el: t, classNames: n} = e;
    t.classList.remove(...n),
    e.emitContainerClasses()
}
var Pu = {
    addClasses: _u,
    removeClasses: Mu
};
function Iu() {
    const e = this
      , {isLocked: t, params: n} = e
      , {slidesOffsetBefore: i} = n;
    if (i) {
        const s = e.slides.length - 1
          , r = e.slidesGrid[s] + e.slidesSizesGrid[s] + i * 2;
        e.isLocked = e.size > r
    } else
        e.isLocked = e.snapGrid.length === 1;
    n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
}
var Lu = {
    checkOverflow: Iu
}
  , Hi = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
};
function Ou(e, t) {
    return function(i) {
        i === void 0 && (i = {});
        const s = Object.keys(i)[0]
          , r = i[s];
        if (typeof r != "object" || r === null) {
            Me(t, i);
            return
        }
        if (e[s] === !0 && (e[s] = {
            enabled: !0
        }),
        s === "navigation" && e[s] && e[s].enabled && !e[s].prevEl && !e[s].nextEl && (e[s].auto = !0),
        ["pagination", "scrollbar"].indexOf(s) >= 0 && e[s] && e[s].enabled && !e[s].el && (e[s].auto = !0),
        !(s in e && "enabled"in r)) {
            Me(t, i);
            return
        }
        typeof e[s] == "object" && !("enabled"in e[s]) && (e[s].enabled = !0),
        e[s] || (e[s] = {
            enabled: !1
        }),
        Me(t, i)
    }
}
const vi = {
    eventsEmitter: Pc,
    update: $c,
    translate: Yc,
    transition: Uc,
    slide: iu,
    loop: ou,
    grabCursor: uu,
    events: xu,
    breakpoints: Tu,
    checkOverflow: Lu,
    classes: Pu
}
  , yi = {};
let ms = class Xe {
    constructor() {
        let t, n;
        for (var i = arguments.length, s = new Array(i), r = 0; r < i; r++)
            s[r] = arguments[r];
        s.length === 1 && s[0].constructor && Object.prototype.toString.call(s[0]).slice(8, -1) === "Object" ? n = s[0] : [t,n] = s,
        n || (n = {}),
        n = Me({}, n),
        t && !n.el && (n.el = t);
        const l = Fe();
        if (n.el && typeof n.el == "string" && l.querySelectorAll(n.el).length > 1) {
            const f = [];
            return l.querySelectorAll(n.el).forEach(c => {
                const u = Me({}, n, {
                    el: c
                });
                f.push(new Xe(u))
            }
            ),
            f
        }
        const a = this;
        a.__swiper__ = !0,
        a.support = Sl(),
        a.device = Sc({
            userAgent: n.userAgent
        }),
        a.browser = Cc(),
        a.eventsListeners = {},
        a.eventsAnyListeners = [],
        a.modules = [...a.__modules__],
        n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
        const o = {};
        a.modules.forEach(f => {
            f({
                params: n,
                swiper: a,
                extendParams: Ou(n, o),
                on: a.on.bind(a),
                once: a.once.bind(a),
                off: a.off.bind(a),
                emit: a.emit.bind(a)
            })
        }
        );
        const d = Me({}, Hi, o);
        return a.params = Me({}, d, yi, n),
        a.originalParams = Me({}, a.params),
        a.passedParams = Me({}, n),
        a.params && a.params.on && Object.keys(a.params.on).forEach(f => {
            a.on(f, a.params.on[f])
        }
        ),
        a.params && a.params.onAny && a.onAny(a.params.onAny),
        Object.assign(a, {
            enabled: a.params.enabled,
            el: t,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return a.params.direction === "horizontal"
            },
            isVertical() {
                return a.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: a.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                evCache: []
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }),
        a.emit("_swiper"),
        a.params.init && a.init(),
        a
    }
    getSlideIndex(t) {
        const {slidesEl: n, params: i} = this
          , s = ze(n, `.${i.slideClass}, swiper-slide`)
          , r = Wn(s[0]);
        return Wn(t) - r
    }
    getSlideIndexByData(t) {
        return this.getSlideIndex(this.slides.filter(n => n.getAttribute("data-swiper-slide-index") * 1 === t)[0])
    }
    recalcSlides() {
        const t = this
          , {slidesEl: n, params: i} = t;
        t.slides = ze(n, `.${i.slideClass}, swiper-slide`)
    }
    enable() {
        const t = this;
        t.enabled || (t.enabled = !0,
        t.params.grabCursor && t.setGrabCursor(),
        t.emit("enable"))
    }
    disable() {
        const t = this;
        t.enabled && (t.enabled = !1,
        t.params.grabCursor && t.unsetGrabCursor(),
        t.emit("disable"))
    }
    setProgress(t, n) {
        const i = this;
        t = Math.min(Math.max(t, 0), 1);
        const s = i.minTranslate()
          , l = (i.maxTranslate() - s) * t + s;
        i.translateTo(l, typeof n > "u" ? 0 : n),
        i.updateActiveIndex(),
        i.updateSlidesClasses()
    }
    emitContainerClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el)
            return;
        const n = t.el.className.split(" ").filter(i => i.indexOf("swiper") === 0 || i.indexOf(t.params.containerModifierClass) === 0);
        t.emit("_containerClasses", n.join(" "))
    }
    getSlideClasses(t) {
        const n = this;
        return n.destroyed ? "" : t.className.split(" ").filter(i => i.indexOf("swiper-slide") === 0 || i.indexOf(n.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el)
            return;
        const n = [];
        t.slides.forEach(i => {
            const s = t.getSlideClasses(i);
            n.push({
                slideEl: i,
                classNames: s
            }),
            t.emit("_slideClass", i, s)
        }
        ),
        t.emit("_slideClasses", n)
    }
    slidesPerViewDynamic(t, n) {
        t === void 0 && (t = "current"),
        n === void 0 && (n = !1);
        const i = this
          , {params: s, slides: r, slidesGrid: l, slidesSizesGrid: a, size: o, activeIndex: d} = i;
        let f = 1;
        if (typeof s.slidesPerView == "number")
            return s.slidesPerView;
        if (s.centeredSlides) {
            let c = r[d] ? r[d].swiperSlideSize : 0, u;
            for (let m = d + 1; m < r.length; m += 1)
                r[m] && !u && (c += r[m].swiperSlideSize,
                f += 1,
                c > o && (u = !0));
            for (let m = d - 1; m >= 0; m -= 1)
                r[m] && !u && (c += r[m].swiperSlideSize,
                f += 1,
                c > o && (u = !0))
        } else if (t === "current")
            for (let c = d + 1; c < r.length; c += 1)
                (n ? l[c] + a[c] - l[d] < o : l[c] - l[d] < o) && (f += 1);
        else
            for (let c = d - 1; c >= 0; c -= 1)
                l[d] - l[c] < o && (f += 1);
        return f
    }
    update() {
        const t = this;
        if (!t || t.destroyed)
            return;
        const {snapGrid: n, params: i} = t;
        i.breakpoints && t.setBreakpoint(),
        [...t.el.querySelectorAll('[loading="lazy"]')].forEach(l => {
            l.complete && Bn(t, l)
        }
        ),
        t.updateSize(),
        t.updateSlides(),
        t.updateProgress(),
        t.updateSlidesClasses();
        function s() {
            const l = t.rtlTranslate ? t.translate * -1 : t.translate
              , a = Math.min(Math.max(l, t.maxTranslate()), t.minTranslate());
            t.setTranslate(a),
            t.updateActiveIndex(),
            t.updateSlidesClasses()
        }
        let r;
        if (i.freeMode && i.freeMode.enabled && !i.cssMode)
            s(),
            i.autoHeight && t.updateAutoHeight();
        else {
            if ((i.slidesPerView === "auto" || i.slidesPerView > 1) && t.isEnd && !i.centeredSlides) {
                const l = t.virtual && i.virtual.enabled ? t.virtual.slides : t.slides;
                r = t.slideTo(l.length - 1, 0, !1, !0)
            } else
                r = t.slideTo(t.activeIndex, 0, !1, !0);
            r || s()
        }
        i.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
        t.emit("update")
    }
    changeDirection(t, n) {
        n === void 0 && (n = !0);
        const i = this
          , s = i.params.direction;
        return t || (t = s === "horizontal" ? "vertical" : "horizontal"),
        t === s || t !== "horizontal" && t !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${s}`),
        i.el.classList.add(`${i.params.containerModifierClass}${t}`),
        i.emitContainerClasses(),
        i.params.direction = t,
        i.slides.forEach(r => {
            t === "vertical" ? r.style.width = "" : r.style.height = ""
        }
        ),
        i.emit("changeDirection"),
        n && i.update()),
        i
    }
    changeLanguageDirection(t) {
        const n = this;
        n.rtl && t === "rtl" || !n.rtl && t === "ltr" || (n.rtl = t === "rtl",
        n.rtlTranslate = n.params.direction === "horizontal" && n.rtl,
        n.rtl ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
        n.el.dir = "rtl") : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
        n.el.dir = "ltr"),
        n.update())
    }
    mount(t) {
        const n = this;
        if (n.mounted)
            return !0;
        let i = t || n.params.el;
        if (typeof i == "string" && (i = document.querySelector(i)),
        !i)
            return !1;
        i.swiper = n,
        i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === "SWIPER-CONTAINER" && (n.isElement = !0);
        const s = () => `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let l = ( () => i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(s()) : ze(i, s())[0])();
        return !l && n.params.createElements && (l = El("div", n.params.wrapperClass),
        i.append(l),
        ze(i, `.${n.params.slideClass}`).forEach(a => {
            l.append(a)
        }
        )),
        Object.assign(n, {
            el: i,
            wrapperEl: l,
            slidesEl: n.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : l,
            hostEl: n.isElement ? i.parentNode.host : i,
            mounted: !0,
            rtl: i.dir.toLowerCase() === "rtl" || st(i, "direction") === "rtl",
            rtlTranslate: n.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || st(i, "direction") === "rtl"),
            wrongRTL: st(l, "display") === "-webkit-box"
        }),
        !0
    }
    init(t) {
        const n = this;
        if (n.initialized || n.mount(t) === !1)
            return n;
        n.emit("beforeInit"),
        n.params.breakpoints && n.setBreakpoint(),
        n.addClasses(),
        n.updateSize(),
        n.updateSlides(),
        n.params.watchOverflow && n.checkOverflow(),
        n.params.grabCursor && n.enabled && n.setGrabCursor(),
        n.params.loop && n.virtual && n.params.virtual.enabled ? n.slideTo(n.params.initialSlide + n.virtual.slidesBefore, 0, n.params.runCallbacksOnInit, !1, !0) : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, !1, !0),
        n.params.loop && n.loopCreate(),
        n.attachEvents();
        const s = [...n.el.querySelectorAll('[loading="lazy"]')];
        return n.isElement && s.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
        s.forEach(r => {
            r.complete ? Bn(n, r) : r.addEventListener("load", l => {
                Bn(n, l.target)
            }
            )
        }
        ),
        $i(n),
        n.initialized = !0,
        $i(n),
        n.emit("init"),
        n.emit("afterInit"),
        n
    }
    destroy(t, n) {
        t === void 0 && (t = !0),
        n === void 0 && (n = !0);
        const i = this
          , {params: s, el: r, wrapperEl: l, slides: a} = i;
        return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"),
        i.initialized = !1,
        i.detachEvents(),
        s.loop && i.loopDestroy(),
        n && (i.removeClasses(),
        r.removeAttribute("style"),
        l.removeAttribute("style"),
        a && a.length && a.forEach(o => {
            o.classList.remove(s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass),
            o.removeAttribute("style"),
            o.removeAttribute("data-swiper-slide-index")
        }
        )),
        i.emit("destroy"),
        Object.keys(i.eventsListeners).forEach(o => {
            i.off(o)
        }
        ),
        t !== !1 && (i.el.swiper = null,
        gc(i)),
        i.destroyed = !0),
        null
    }
    static extendDefaults(t) {
        Me(yi, t)
    }
    static get extendedDefaults() {
        return yi
    }
    static get defaults() {
        return Hi
    }
    static installModule(t) {
        Xe.prototype.__modules__ || (Xe.prototype.__modules__ = []);
        const n = Xe.prototype.__modules__;
        typeof t == "function" && n.indexOf(t) < 0 && n.push(t)
    }
    static use(t) {
        return Array.isArray(t) ? (t.forEach(n => Xe.installModule(n)),
        Xe) : (Xe.installModule(t),
        Xe)
    }
}
;
Object.keys(vi).forEach(e => {
    Object.keys(vi[e]).forEach(t => {
        ms.prototype[t] = vi[e][t]
    }
    )
}
);
ms.use([_c, Mc]);
const _l = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopedSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideNextClass", "slidePrevClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];
function Tt(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object" && !e.__swiper__
}
function Et(e, t) {
    const n = ["__proto__", "constructor", "prototype"];
    Object.keys(t).filter(i => n.indexOf(i) < 0).forEach(i => {
        typeof e[i] > "u" ? e[i] = t[i] : Tt(t[i]) && Tt(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : Et(e[i], t[i]) : e[i] = t[i]
    }
    )
}
function Ml(e) {
    return e === void 0 && (e = {}),
    e.navigation && typeof e.navigation.nextEl > "u" && typeof e.navigation.prevEl > "u"
}
function Pl(e) {
    return e === void 0 && (e = {}),
    e.pagination && typeof e.pagination.el > "u"
}
function Il(e) {
    return e === void 0 && (e = {}),
    e.scrollbar && typeof e.scrollbar.el > "u"
}
function Ll(e) {
    e === void 0 && (e = "");
    const t = e.split(" ").map(i => i.trim()).filter(i => !!i)
      , n = [];
    return t.forEach(i => {
        n.indexOf(i) < 0 && n.push(i)
    }
    ),
    n.join(" ")
}
function Au(e) {
    return e === void 0 && (e = ""),
    e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
}
function Bu(e) {
    let {swiper: t, slides: n, passedParams: i, changedParams: s, nextEl: r, prevEl: l, scrollbarEl: a, paginationEl: o} = e;
    const d = s.filter(x => x !== "children" && x !== "direction" && x !== "wrapperClass")
      , {params: f, pagination: c, navigation: u, scrollbar: m, virtual: E, thumbs: b} = t;
    let C, y, p, h, g, S, O, I;
    s.includes("thumbs") && i.thumbs && i.thumbs.swiper && f.thumbs && !f.thumbs.swiper && (C = !0),
    s.includes("controller") && i.controller && i.controller.control && f.controller && !f.controller.control && (y = !0),
    s.includes("pagination") && i.pagination && (i.pagination.el || o) && (f.pagination || f.pagination === !1) && c && !c.el && (p = !0),
    s.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || a) && (f.scrollbar || f.scrollbar === !1) && m && !m.el && (h = !0),
    s.includes("navigation") && i.navigation && (i.navigation.prevEl || l) && (i.navigation.nextEl || r) && (f.navigation || f.navigation === !1) && u && !u.prevEl && !u.nextEl && (g = !0);
    const T = x => {
        t[x] && (t[x].destroy(),
        x === "navigation" ? (t.isElement && (t[x].prevEl.remove(),
        t[x].nextEl.remove()),
        f[x].prevEl = void 0,
        f[x].nextEl = void 0,
        t[x].prevEl = void 0,
        t[x].nextEl = void 0) : (t.isElement && t[x].el.remove(),
        f[x].el = void 0,
        t[x].el = void 0))
    }
    ;
    s.includes("loop") && t.isElement && (f.loop && !i.loop ? S = !0 : !f.loop && i.loop ? O = !0 : I = !0),
    d.forEach(x => {
        if (Tt(f[x]) && Tt(i[x]))
            Et(f[x], i[x]),
            (x === "navigation" || x === "pagination" || x === "scrollbar") && "enabled"in i[x] && !i[x].enabled && T(x);
        else {
            const N = i[x];
            (N === !0 || N === !1) && (x === "navigation" || x === "pagination" || x === "scrollbar") ? N === !1 && T(x) : f[x] = i[x]
        }
    }
    ),
    d.includes("controller") && !y && t.controller && t.controller.control && f.controller && f.controller.control && (t.controller.control = f.controller.control),
    s.includes("children") && n && E && f.virtual.enabled && (E.slides = n,
    E.update(!0)),
    s.includes("children") && n && f.loop && (I = !0),
    C && b.init() && b.update(!0),
    y && (t.controller.control = f.controller.control),
    p && (t.isElement && (!o || typeof o == "string") && (o = document.createElement("div"),
    o.classList.add("swiper-pagination"),
    o.part.add("pagination"),
    t.el.appendChild(o)),
    o && (f.pagination.el = o),
    c.init(),
    c.render(),
    c.update()),
    h && (t.isElement && (!a || typeof a == "string") && (a = document.createElement("div"),
    a.classList.add("swiper-scrollbar"),
    a.part.add("scrollbar"),
    t.el.appendChild(a)),
    a && (f.scrollbar.el = a),
    m.init(),
    m.updateSize(),
    m.setTranslate()),
    g && (t.isElement && ((!r || typeof r == "string") && (r = document.createElement("div"),
    r.classList.add("swiper-button-next"),
    r.innerHTML = t.hostEl.constructor.nextButtonSvg,
    r.part.add("button-next"),
    t.el.appendChild(r)),
    (!l || typeof l == "string") && (l = document.createElement("div"),
    l.classList.add("swiper-button-prev"),
    l.innerHTML = t.hostEl.constructor.prevButtonSvg,
    l.part.add("button-prev"),
    t.el.appendChild(l))),
    r && (f.navigation.nextEl = r),
    l && (f.navigation.prevEl = l),
    u.init(),
    u.update()),
    s.includes("allowSlideNext") && (t.allowSlideNext = i.allowSlideNext),
    s.includes("allowSlidePrev") && (t.allowSlidePrev = i.allowSlidePrev),
    s.includes("direction") && t.changeDirection(i.direction, !1),
    (S || I) && t.loopDestroy(),
    (O || I) && t.loopCreate(),
    t.update()
}
function cr(e, t) {
    e === void 0 && (e = {}),
    t === void 0 && (t = !0);
    const n = {
        on: {}
    }
      , i = {}
      , s = {};
    Et(n, Hi),
    n._emitClasses = !0,
    n.init = !1;
    const r = {}
      , l = _l.map(o => o.replace(/_/, ""))
      , a = Object.assign({}, e);
    return Object.keys(a).forEach(o => {
        typeof e[o] > "u" || (l.indexOf(o) >= 0 ? Tt(e[o]) ? (n[o] = {},
        s[o] = {},
        Et(n[o], e[o]),
        Et(s[o], e[o])) : (n[o] = e[o],
        s[o] = e[o]) : o.search(/on[A-Z]/) === 0 && typeof e[o] == "function" ? t ? i[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : n.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : r[o] = e[o])
    }
    ),
    ["navigation", "pagination", "scrollbar"].forEach(o => {
        n[o] === !0 && (n[o] = {}),
        n[o] === !1 && delete n[o]
    }
    ),
    {
        params: n,
        passedParams: s,
        rest: r,
        events: i
    }
}
function zu(e, t) {
    let {el: n, nextEl: i, prevEl: s, paginationEl: r, scrollbarEl: l, swiper: a} = e;
    Ml(t) && i && s && (a.params.navigation.nextEl = i,
    a.originalParams.navigation.nextEl = i,
    a.params.navigation.prevEl = s,
    a.originalParams.navigation.prevEl = s),
    Pl(t) && r && (a.params.pagination.el = r,
    a.originalParams.pagination.el = r),
    Il(t) && l && (a.params.scrollbar.el = l,
    a.originalParams.scrollbar.el = l),
    a.init(n)
}
function Du(e, t, n, i, s) {
    const r = [];
    if (!t)
        return r;
    const l = o => {
        r.indexOf(o) < 0 && r.push(o)
    }
    ;
    if (n && i) {
        const o = i.map(s)
          , d = n.map(s);
        o.join("") !== d.join("") && l("children"),
        i.length !== n.length && l("children")
    }
    return _l.filter(o => o[0] === "_").map(o => o.replace(/_/, "")).forEach(o => {
        if (o in e && o in t)
            if (Tt(e[o]) && Tt(t[o])) {
                const d = Object.keys(e[o])
                  , f = Object.keys(t[o]);
                d.length !== f.length ? l(o) : (d.forEach(c => {
                    e[o][c] !== t[o][c] && l(o)
                }
                ),
                f.forEach(c => {
                    e[o][c] !== t[o][c] && l(o)
                }
                ))
            } else
                e[o] !== t[o] && l(o)
    }
    ),
    r
}
const Fu = e => {
    !e || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
}
;
function bi(e, t, n) {
    e === void 0 && (e = {});
    const i = []
      , s = {
        "container-start": [],
        "container-end": [],
        "wrapper-start": [],
        "wrapper-end": []
    }
      , r = (l, a) => {
        Array.isArray(l) && l.forEach(o => {
            const d = typeof o.type == "symbol";
            a === "default" && (a = "container-end"),
            d && o.children ? r(o.children, a) : o.type && (o.type.name === "SwiperSlide" || o.type.name === "AsyncComponentWrapper") ? i.push(o) : s[a] && s[a].push(o)
        }
        )
    }
    ;
    return Object.keys(e).forEach(l => {
        if (typeof e[l] != "function")
            return;
        const a = e[l]();
        r(a, l)
    }
    ),
    n.value = t.value,
    t.value = i,
    {
        slides: i,
        slots: s
    }
}
function Ru(e, t, n) {
    if (!n)
        return null;
    const i = f => {
        let c = f;
        return f < 0 ? c = t.length + f : c >= t.length && (c = c - t.length),
        c
    }
      , s = e.value.isHorizontal() ? {
        [e.value.rtlTranslate ? "right" : "left"]: `${n.offset}px`
    } : {
        top: `${n.offset}px`
    }
      , {from: r, to: l} = n
      , a = e.value.params.loop ? -t.length : 0
      , o = e.value.params.loop ? t.length * 2 : t.length
      , d = [];
    for (let f = a; f < o; f += 1)
        f >= r && f <= l && d.push(t[i(f)]);
    return d.map(f => (f.props || (f.props = {}),
    f.props.style || (f.props.style = {}),
    f.props.swiperRef = e,
    f.props.style = s,
    Ae(f.type, {
        ...f.props
    }, f.children)))
}
const mf = {
    name: "Swiper",
    props: {
        tag: {
            type: String,
            default: "div"
        },
        wrapperTag: {
            type: String,
            default: "div"
        },
        modules: {
            type: Array,
            default: void 0
        },
        init: {
            type: Boolean,
            default: void 0
        },
        direction: {
            type: String,
            default: void 0
        },
        oneWayMovement: {
            type: Boolean,
            default: void 0
        },
        touchEventsTarget: {
            type: String,
            default: void 0
        },
        initialSlide: {
            type: Number,
            default: void 0
        },
        speed: {
            type: Number,
            default: void 0
        },
        cssMode: {
            type: Boolean,
            default: void 0
        },
        updateOnWindowResize: {
            type: Boolean,
            default: void 0
        },
        resizeObserver: {
            type: Boolean,
            default: void 0
        },
        nested: {
            type: Boolean,
            default: void 0
        },
        focusableElements: {
            type: String,
            default: void 0
        },
        width: {
            type: Number,
            default: void 0
        },
        height: {
            type: Number,
            default: void 0
        },
        preventInteractionOnTransition: {
            type: Boolean,
            default: void 0
        },
        userAgent: {
            type: String,
            default: void 0
        },
        url: {
            type: String,
            default: void 0
        },
        edgeSwipeDetection: {
            type: [Boolean, String],
            default: void 0
        },
        edgeSwipeThreshold: {
            type: Number,
            default: void 0
        },
        autoHeight: {
            type: Boolean,
            default: void 0
        },
        setWrapperSize: {
            type: Boolean,
            default: void 0
        },
        virtualTranslate: {
            type: Boolean,
            default: void 0
        },
        effect: {
            type: String,
            default: void 0
        },
        breakpoints: {
            type: Object,
            default: void 0
        },
        spaceBetween: {
            type: [Number, String],
            default: void 0
        },
        slidesPerView: {
            type: [Number, String],
            default: void 0
        },
        maxBackfaceHiddenSlides: {
            type: Number,
            default: void 0
        },
        slidesPerGroup: {
            type: Number,
            default: void 0
        },
        slidesPerGroupSkip: {
            type: Number,
            default: void 0
        },
        slidesPerGroupAuto: {
            type: Boolean,
            default: void 0
        },
        centeredSlides: {
            type: Boolean,
            default: void 0
        },
        centeredSlidesBounds: {
            type: Boolean,
            default: void 0
        },
        slidesOffsetBefore: {
            type: Number,
            default: void 0
        },
        slidesOffsetAfter: {
            type: Number,
            default: void 0
        },
        normalizeSlideIndex: {
            type: Boolean,
            default: void 0
        },
        centerInsufficientSlides: {
            type: Boolean,
            default: void 0
        },
        watchOverflow: {
            type: Boolean,
            default: void 0
        },
        roundLengths: {
            type: Boolean,
            default: void 0
        },
        touchRatio: {
            type: Number,
            default: void 0
        },
        touchAngle: {
            type: Number,
            default: void 0
        },
        simulateTouch: {
            type: Boolean,
            default: void 0
        },
        shortSwipes: {
            type: Boolean,
            default: void 0
        },
        longSwipes: {
            type: Boolean,
            default: void 0
        },
        longSwipesRatio: {
            type: Number,
            default: void 0
        },
        longSwipesMs: {
            type: Number,
            default: void 0
        },
        followFinger: {
            type: Boolean,
            default: void 0
        },
        allowTouchMove: {
            type: Boolean,
            default: void 0
        },
        threshold: {
            type: Number,
            default: void 0
        },
        touchMoveStopPropagation: {
            type: Boolean,
            default: void 0
        },
        touchStartPreventDefault: {
            type: Boolean,
            default: void 0
        },
        touchStartForcePreventDefault: {
            type: Boolean,
            default: void 0
        },
        touchReleaseOnEdges: {
            type: Boolean,
            default: void 0
        },
        uniqueNavElements: {
            type: Boolean,
            default: void 0
        },
        resistance: {
            type: Boolean,
            default: void 0
        },
        resistanceRatio: {
            type: Number,
            default: void 0
        },
        watchSlidesProgress: {
            type: Boolean,
            default: void 0
        },
        grabCursor: {
            type: Boolean,
            default: void 0
        },
        preventClicks: {
            type: Boolean,
            default: void 0
        },
        preventClicksPropagation: {
            type: Boolean,
            default: void 0
        },
        slideToClickedSlide: {
            type: Boolean,
            default: void 0
        },
        loop: {
            type: Boolean,
            default: void 0
        },
        loopedSlides: {
            type: Number,
            default: void 0
        },
        loopPreventsSliding: {
            type: Boolean,
            default: void 0
        },
        rewind: {
            type: Boolean,
            default: void 0
        },
        allowSlidePrev: {
            type: Boolean,
            default: void 0
        },
        allowSlideNext: {
            type: Boolean,
            default: void 0
        },
        swipeHandler: {
            type: Boolean,
            default: void 0
        },
        noSwiping: {
            type: Boolean,
            default: void 0
        },
        noSwipingClass: {
            type: String,
            default: void 0
        },
        noSwipingSelector: {
            type: String,
            default: void 0
        },
        passiveListeners: {
            type: Boolean,
            default: void 0
        },
        containerModifierClass: {
            type: String,
            default: void 0
        },
        slideClass: {
            type: String,
            default: void 0
        },
        slideActiveClass: {
            type: String,
            default: void 0
        },
        slideVisibleClass: {
            type: String,
            default: void 0
        },
        slideNextClass: {
            type: String,
            default: void 0
        },
        slidePrevClass: {
            type: String,
            default: void 0
        },
        wrapperClass: {
            type: String,
            default: void 0
        },
        lazyPreloaderClass: {
            type: String,
            default: void 0
        },
        lazyPreloadPrevNext: {
            type: Number,
            default: void 0
        },
        runCallbacksOnInit: {
            type: Boolean,
            default: void 0
        },
        observer: {
            type: Boolean,
            default: void 0
        },
        observeParents: {
            type: Boolean,
            default: void 0
        },
        observeSlideChildren: {
            type: Boolean,
            default: void 0
        },
        a11y: {
            type: [Boolean, Object],
            default: void 0
        },
        autoplay: {
            type: [Boolean, Object],
            default: void 0
        },
        controller: {
            type: Object,
            default: void 0
        },
        coverflowEffect: {
            type: Object,
            default: void 0
        },
        cubeEffect: {
            type: Object,
            default: void 0
        },
        fadeEffect: {
            type: Object,
            default: void 0
        },
        flipEffect: {
            type: Object,
            default: void 0
        },
        creativeEffect: {
            type: Object,
            default: void 0
        },
        cardsEffect: {
            type: Object,
            default: void 0
        },
        hashNavigation: {
            type: [Boolean, Object],
            default: void 0
        },
        history: {
            type: [Boolean, Object],
            default: void 0
        },
        keyboard: {
            type: [Boolean, Object],
            default: void 0
        },
        mousewheel: {
            type: [Boolean, Object],
            default: void 0
        },
        navigation: {
            type: [Boolean, Object],
            default: void 0
        },
        pagination: {
            type: [Boolean, Object],
            default: void 0
        },
        parallax: {
            type: [Boolean, Object],
            default: void 0
        },
        scrollbar: {
            type: [Boolean, Object],
            default: void 0
        },
        thumbs: {
            type: Object,
            default: void 0
        },
        virtual: {
            type: [Boolean, Object],
            default: void 0
        },
        zoom: {
            type: [Boolean, Object],
            default: void 0
        },
        grid: {
            type: [Object],
            default: void 0
        },
        freeMode: {
            type: [Boolean, Object],
            default: void 0
        },
        enabled: {
            type: Boolean,
            default: void 0
        }
    },
    emits: ["_beforeBreakpoint", "_containerClasses", "_slideClass", "_slideClasses", "_swiper", "_freeModeNoMomentumRelease", "activeIndexChange", "afterInit", "autoplay", "autoplayStart", "autoplayStop", "autoplayPause", "autoplayResume", "autoplayTimeLeft", "beforeDestroy", "beforeInit", "beforeLoopFix", "beforeResize", "beforeSlideChangeStart", "beforeTransitionStart", "breakpoint", "breakpointsBase", "changeDirection", "click", "disable", "doubleTap", "doubleClick", "destroy", "enable", "fromEdge", "hashChange", "hashSet", "init", "keyPress", "lock", "loopFix", "momentumBounce", "navigationHide", "navigationShow", "navigationPrev", "navigationNext", "observerUpdate", "orientationchange", "paginationHide", "paginationRender", "paginationShow", "paginationUpdate", "progress", "reachBeginning", "reachEnd", "realIndexChange", "resize", "scroll", "scrollbarDragEnd", "scrollbarDragMove", "scrollbarDragStart", "setTransition", "setTranslate", "slideChange", "slideChangeTransitionEnd", "slideChangeTransitionStart", "slideNextTransitionEnd", "slideNextTransitionStart", "slidePrevTransitionEnd", "slidePrevTransitionStart", "slideResetTransitionStart", "slideResetTransitionEnd", "sliderMove", "sliderFirstMove", "slidesLengthChange", "slidesGridLengthChange", "snapGridLengthChange", "snapIndexChange", "swiper", "tap", "toEdge", "touchEnd", "touchMove", "touchMoveOpposite", "touchStart", "transitionEnd", "transitionStart", "unlock", "update", "virtualUpdate", "zoomChange"],
    setup(e, t) {
        let {slots: n, emit: i} = t;
        const {tag: s, wrapperTag: r} = e
          , l = he("swiper")
          , a = he(null)
          , o = he(!1)
          , d = he(!1)
          , f = he(null)
          , c = he(null)
          , u = he(null)
          , m = {
            value: []
        }
          , E = {
            value: []
        }
          , b = he(null)
          , C = he(null)
          , y = he(null)
          , p = he(null)
          , {params: h, passedParams: g} = cr(e, !1);
        bi(n, m, E),
        u.value = g,
        E.value = m.value;
        const S = () => {
            bi(n, m, E),
            o.value = !0
        }
        ;
        h.onAny = function(T) {
            for (var x = arguments.length, N = new Array(x > 1 ? x - 1 : 0), _ = 1; _ < x; _++)
                N[_ - 1] = arguments[_];
            i(T, ...N)
        }
        ,
        Object.assign(h.on, {
            _beforeBreakpoint: S,
            _containerClasses(T, x) {
                l.value = x
            }
        });
        const O = {
            ...h
        };
        if (delete O.wrapperClass,
        c.value = new ms(O),
        c.value.virtual && c.value.params.virtual.enabled) {
            c.value.virtual.slides = m.value;
            const T = {
                cache: !1,
                slides: m.value,
                renderExternal: x => {
                    a.value = x
                }
                ,
                renderExternalUpdate: !1
            };
            Et(c.value.params.virtual, T),
            Et(c.value.originalParams.virtual, T)
        }
        Qn( () => {
            !d.value && c.value && (c.value.emitSlidesClasses(),
            d.value = !0);
            const {passedParams: T} = cr(e, !1)
              , x = Du(T, u.value, m.value, E.value, N => N.props && N.props.key);
            u.value = T,
            (x.length || o.value) && c.value && !c.value.destroyed && Bu({
                swiper: c.value,
                slides: m.value,
                passedParams: T,
                changedParams: x,
                nextEl: b.value,
                prevEl: C.value,
                scrollbarEl: p.value,
                paginationEl: y.value
            }),
            o.value = !1
        }
        ),
        cs("swiper", c),
        yt(a, () => {
            Dr( () => {
                Fu(c.value)
            }
            )
        }
        ),
        Ut( () => {
            f.value && (zu({
                el: f.value,
                nextEl: b.value,
                prevEl: C.value,
                paginationEl: y.value,
                scrollbarEl: p.value,
                swiper: c.value
            }, h),
            i("swiper", c.value))
        }
        ),
        yn( () => {
            c.value && !c.value.destroyed && c.value.destroy(!0, !1)
        }
        );
        function I(T) {
            return h.virtual ? Ru(c, T, a.value) : (T.forEach( (x, N) => {
                x.props || (x.props = {}),
                x.props.swiperRef = c,
                x.props.swiperSlideIndex = N
            }
            ),
            T)
        }
        return () => {
            const {slides: T, slots: x} = bi(n, m, E);
            return Ae(s, {
                ref: f,
                class: Ll(l.value)
            }, [x["container-start"], Ae(r, {
                class: Au(h.wrapperClass)
            }, [x["wrapper-start"], I(T), x["wrapper-end"]]), Ml(e) && [Ae("div", {
                ref: C,
                class: "swiper-button-prev"
            }), Ae("div", {
                ref: b,
                class: "swiper-button-next"
            })], Il(e) && Ae("div", {
                ref: p,
                class: "swiper-scrollbar"
            }), Pl(e) && Ae("div", {
                ref: y,
                class: "swiper-pagination"
            }), x["container-end"]])
        }
    }
}
  , gf = {
    name: "SwiperSlide",
    props: {
        tag: {
            type: String,
            default: "div"
        },
        swiperRef: {
            type: Object,
            required: !1
        },
        swiperSlideIndex: {
            type: Number,
            default: void 0,
            required: !1
        },
        zoom: {
            type: Boolean,
            default: void 0,
            required: !1
        },
        lazy: {
            type: Boolean,
            default: !1,
            required: !1
        },
        virtualIndex: {
            type: [String, Number],
            default: void 0
        }
    },
    setup(e, t) {
        let {slots: n} = t
          , i = !1;
        const {swiperRef: s} = e
          , r = he(null)
          , l = he("swiper-slide")
          , a = he(!1);
        function o(c, u, m) {
            u === r.value && (l.value = m)
        }
        Ut( () => {
            !s || !s.value || (s.value.on("_slideClass", o),
            i = !0)
        }
        ),
        Gr( () => {
            i || !s || !s.value || (s.value.on("_slideClass", o),
            i = !0)
        }
        ),
        Qn( () => {
            !r.value || !s || !s.value || (typeof e.swiperSlideIndex < "u" && (r.value.swiperSlideIndex = e.swiperSlideIndex),
            s.value.destroyed && l.value !== "swiper-slide" && (l.value = "swiper-slide"))
        }
        ),
        yn( () => {
            !s || !s.value || s.value.off("_slideClass", o)
        }
        );
        const d = hl( () => ({
            isActive: l.value.indexOf("swiper-slide-active") >= 0,
            isVisible: l.value.indexOf("swiper-slide-visible") >= 0,
            isPrev: l.value.indexOf("swiper-slide-prev") >= 0,
            isNext: l.value.indexOf("swiper-slide-next") >= 0
        }));
        cs("swiperSlide", d);
        const f = () => {
            a.value = !0
        }
        ;
        return () => Ae(e.tag, {
            class: Ll(`${l.value}`),
            ref: r,
            "data-swiper-slide-index": typeof e.virtualIndex > "u" && s && s.value && s.value.params.loop ? e.swiperSlideIndex : e.virtualIndex,
            onLoadCapture: f
        }, e.zoom ? Ae("div", {
            class: "swiper-zoom-container",
            "data-swiper-zoom": typeof e.zoom == "number" ? e.zoom : void 0
        }, [n.default && n.default(d.value), e.lazy && !a.value && Ae("div", {
            class: "swiper-lazy-preloader"
        })]) : [n.default && n.default(d.value), e.lazy && !a.value && Ae("div", {
            class: "swiper-lazy-preloader"
        })])
    }
};
function vf(e) {
    let {swiper: t, extendParams: n, on: i, emit: s} = e;
    const r = Fe()
      , l = be();
    t.keyboard = {
        enabled: !1
    },
    n({
        keyboard: {
            enabled: !1,
            onlyInViewport: !0,
            pageUpDown: !0
        }
    });
    function a(f) {
        if (!t.enabled)
            return;
        const {rtlTranslate: c} = t;
        let u = f;
        u.originalEvent && (u = u.originalEvent);
        const m = u.keyCode || u.charCode
          , E = t.params.keyboard.pageUpDown
          , b = E && m === 33
          , C = E && m === 34
          , y = m === 37
          , p = m === 39
          , h = m === 38
          , g = m === 40;
        if (!t.allowSlideNext && (t.isHorizontal() && p || t.isVertical() && g || C) || !t.allowSlidePrev && (t.isHorizontal() && y || t.isVertical() && h || b))
            return !1;
        if (!(u.shiftKey || u.altKey || u.ctrlKey || u.metaKey) && !(r.activeElement && r.activeElement.nodeName && (r.activeElement.nodeName.toLowerCase() === "input" || r.activeElement.nodeName.toLowerCase() === "textarea"))) {
            if (t.params.keyboard.onlyInViewport && (b || C || y || p || h || g)) {
                let S = !1;
                if (xt(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && xt(t.el, `.${t.params.slideActiveClass}`).length === 0)
                    return;
                const O = t.el
                  , I = O.clientWidth
                  , T = O.clientHeight
                  , x = l.innerWidth
                  , N = l.innerHeight
                  , _ = Ri(O);
                c && (_.left -= O.scrollLeft);
                const L = [[_.left, _.top], [_.left + I, _.top], [_.left, _.top + T], [_.left + I, _.top + T]];
                for (let D = 0; D < L.length; D += 1) {
                    const z = L[D];
                    if (z[0] >= 0 && z[0] <= x && z[1] >= 0 && z[1] <= N) {
                        if (z[0] === 0 && z[1] === 0)
                            continue;
                        S = !0
                    }
                }
                if (!S)
                    return
            }
            t.isHorizontal() ? ((b || C || y || p) && (u.preventDefault ? u.preventDefault() : u.returnValue = !1),
            ((C || p) && !c || (b || y) && c) && t.slideNext(),
            ((b || y) && !c || (C || p) && c) && t.slidePrev()) : ((b || C || h || g) && (u.preventDefault ? u.preventDefault() : u.returnValue = !1),
            (C || g) && t.slideNext(),
            (b || h) && t.slidePrev()),
            s("keyPress", m)
        }
    }
    function o() {
        t.keyboard.enabled || (r.addEventListener("keydown", a),
        t.keyboard.enabled = !0)
    }
    function d() {
        t.keyboard.enabled && (r.removeEventListener("keydown", a),
        t.keyboard.enabled = !1)
    }
    i("init", () => {
        t.params.keyboard.enabled && o()
    }
    ),
    i("destroy", () => {
        t.keyboard.enabled && d()
    }
    ),
    Object.assign(t.keyboard, {
        enable: o,
        disable: d
    })
}
function Ol(e, t, n, i) {
    return e.params.createElements && Object.keys(i).forEach(s => {
        if (!n[s] && n.auto === !0) {
            let r = ze(e.el, `.${i[s]}`)[0];
            r || (r = El("div", i[s]),
            r.className = i[s],
            e.el.append(r)),
            n[s] = r,
            t[s] = r
        }
    }
    ),
    n
}
function yf(e) {
    let {swiper: t, extendParams: n, on: i, emit: s} = e;
    n({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    }),
    t.navigation = {
        nextEl: null,
        prevEl: null
    };
    const r = b => (Array.isArray(b) ? b : [b]).filter(C => !!C);
    function l(b) {
        let C;
        return b && typeof b == "string" && t.isElement && (C = t.el.querySelector(b),
        C) ? C : (b && (typeof b == "string" && (C = [...document.querySelectorAll(b)]),
        t.params.uniqueNavElements && typeof b == "string" && C.length > 1 && t.el.querySelectorAll(b).length === 1 && (C = t.el.querySelector(b))),
        b && !C ? b : C)
    }
    function a(b, C) {
        const y = t.params.navigation;
        b = r(b),
        b.forEach(p => {
            p && (p.classList[C ? "add" : "remove"](...y.disabledClass.split(" ")),
            p.tagName === "BUTTON" && (p.disabled = C),
            t.params.watchOverflow && t.enabled && p.classList[t.isLocked ? "add" : "remove"](y.lockClass))
        }
        )
    }
    function o() {
        const {nextEl: b, prevEl: C} = t.navigation;
        if (t.params.loop) {
            a(C, !1),
            a(b, !1);
            return
        }
        a(C, t.isBeginning && !t.params.rewind),
        a(b, t.isEnd && !t.params.rewind)
    }
    function d(b) {
        b.preventDefault(),
        !(t.isBeginning && !t.params.loop && !t.params.rewind) && (t.slidePrev(),
        s("navigationPrev"))
    }
    function f(b) {
        b.preventDefault(),
        !(t.isEnd && !t.params.loop && !t.params.rewind) && (t.slideNext(),
        s("navigationNext"))
    }
    function c() {
        const b = t.params.navigation;
        if (t.params.navigation = Ol(t, t.originalParams.navigation, t.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
        }),
        !(b.nextEl || b.prevEl))
            return;
        let C = l(b.nextEl)
          , y = l(b.prevEl);
        Object.assign(t.navigation, {
            nextEl: C,
            prevEl: y
        }),
        C = r(C),
        y = r(y);
        const p = (h, g) => {
            h && h.addEventListener("click", g === "next" ? f : d),
            !t.enabled && h && h.classList.add(...b.lockClass.split(" "))
        }
        ;
        C.forEach(h => p(h, "next")),
        y.forEach(h => p(h, "prev"))
    }
    function u() {
        let {nextEl: b, prevEl: C} = t.navigation;
        b = r(b),
        C = r(C);
        const y = (p, h) => {
            p.removeEventListener("click", h === "next" ? f : d),
            p.classList.remove(...t.params.navigation.disabledClass.split(" "))
        }
        ;
        b.forEach(p => y(p, "next")),
        C.forEach(p => y(p, "prev"))
    }
    i("init", () => {
        t.params.navigation.enabled === !1 ? E() : (c(),
        o())
    }
    ),
    i("toEdge fromEdge lock unlock", () => {
        o()
    }
    ),
    i("destroy", () => {
        u()
    }
    ),
    i("enable disable", () => {
        let {nextEl: b, prevEl: C} = t.navigation;
        if (b = r(b),
        C = r(C),
        t.enabled) {
            o();
            return
        }
        [...b, ...C].filter(y => !!y).forEach(y => y.classList.add(t.params.navigation.lockClass))
    }
    ),
    i("click", (b, C) => {
        let {nextEl: y, prevEl: p} = t.navigation;
        y = r(y),
        p = r(p);
        const h = C.target;
        if (t.params.navigation.hideOnClick && !p.includes(h) && !y.includes(h)) {
            if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === h || t.pagination.el.contains(h)))
                return;
            let g;
            y.length ? g = y[0].classList.contains(t.params.navigation.hiddenClass) : p.length && (g = p[0].classList.contains(t.params.navigation.hiddenClass)),
            s(g === !0 ? "navigationShow" : "navigationHide"),
            [...y, ...p].filter(S => !!S).forEach(S => S.classList.toggle(t.params.navigation.hiddenClass))
        }
    }
    );
    const m = () => {
        t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),
        c(),
        o()
    }
      , E = () => {
        t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),
        u()
    }
    ;
    Object.assign(t.navigation, {
        enable: m,
        disable: E,
        update: o,
        init: c,
        destroy: u
    })
}
function en(e) {
    return e === void 0 && (e = ""),
    `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
}
function bf(e) {
    let {swiper: t, extendParams: n, on: i, emit: s} = e;
    const r = "swiper-pagination";
    n({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: p => p,
            formatFractionTotal: p => p,
            bulletClass: `${r}-bullet`,
            bulletActiveClass: `${r}-bullet-active`,
            modifierClass: `${r}-`,
            currentClass: `${r}-current`,
            totalClass: `${r}-total`,
            hiddenClass: `${r}-hidden`,
            progressbarFillClass: `${r}-progressbar-fill`,
            progressbarOppositeClass: `${r}-progressbar-opposite`,
            clickableClass: `${r}-clickable`,
            lockClass: `${r}-lock`,
            horizontalClass: `${r}-horizontal`,
            verticalClass: `${r}-vertical`,
            paginationDisabledClass: `${r}-disabled`
        }
    }),
    t.pagination = {
        el: null,
        bullets: []
    };
    let l, a = 0;
    const o = p => (Array.isArray(p) ? p : [p]).filter(h => !!h);
    function d() {
        return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && t.pagination.el.length === 0
    }
    function f(p, h) {
        const {bulletActiveClass: g} = t.params.pagination;
        p && (p = p[`${h === "prev" ? "previous" : "next"}ElementSibling`],
        p && (p.classList.add(`${g}-${h}`),
        p = p[`${h === "prev" ? "previous" : "next"}ElementSibling`],
        p && p.classList.add(`${g}-${h}-${h}`)))
    }
    function c(p) {
        const h = p.target.closest(en(t.params.pagination.bulletClass));
        if (!h)
            return;
        p.preventDefault();
        const g = Wn(h) * t.params.slidesPerGroup;
        if (t.params.loop) {
            if (t.realIndex === g)
                return;
            const S = t.realIndex
              , O = t.getSlideIndexByData(g)
              , I = t.getSlideIndexByData(t.realIndex)
              , T = x => {
                const N = t.activeIndex;
                t.loopFix({
                    direction: x,
                    activeSlideIndex: O,
                    slideTo: !1
                });
                const _ = t.activeIndex;
                N === _ && t.slideToLoop(S, 0, !1, !0)
            }
            ;
            if (O > t.slides.length - t.loopedSlides)
                T(O > I ? "next" : "prev");
            else if (t.params.centeredSlides) {
                const x = t.params.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(t.params.slidesPerView, 10));
                O < Math.floor(x / 2) && T("prev")
            }
            t.slideToLoop(g)
        } else
            t.slideTo(g)
    }
    function u() {
        const p = t.rtl
          , h = t.params.pagination;
        if (d())
            return;
        let g = t.pagination.el;
        g = o(g);
        let S, O;
        const I = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length
          , T = t.params.loop ? Math.ceil(I / t.params.slidesPerGroup) : t.snapGrid.length;
        if (t.params.loop ? (O = t.previousRealIndex || 0,
        S = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : typeof t.snapIndex < "u" ? (S = t.snapIndex,
        O = t.previousSnapIndex) : (O = t.previousIndex || 0,
        S = t.activeIndex || 0),
        h.type === "bullets" && t.pagination.bullets && t.pagination.bullets.length > 0) {
            const x = t.pagination.bullets;
            let N, _, L;
            if (h.dynamicBullets && (l = Ni(x[0], t.isHorizontal() ? "width" : "height", !0),
            g.forEach(D => {
                D.style[t.isHorizontal() ? "width" : "height"] = `${l * (h.dynamicMainBullets + 4)}px`
            }
            ),
            h.dynamicMainBullets > 1 && O !== void 0 && (a += S - (O || 0),
            a > h.dynamicMainBullets - 1 ? a = h.dynamicMainBullets - 1 : a < 0 && (a = 0)),
            N = Math.max(S - a, 0),
            _ = N + (Math.min(x.length, h.dynamicMainBullets) - 1),
            L = (_ + N) / 2),
            x.forEach(D => {
                const z = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(J => `${h.bulletActiveClass}${J}`)].map(J => typeof J == "string" && J.includes(" ") ? J.split(" ") : J).flat();
                D.classList.remove(...z)
            }
            ),
            g.length > 1)
                x.forEach(D => {
                    const z = Wn(D);
                    z === S ? D.classList.add(...h.bulletActiveClass.split(" ")) : t.isElement && D.setAttribute("part", "bullet"),
                    h.dynamicBullets && (z >= N && z <= _ && D.classList.add(...`${h.bulletActiveClass}-main`.split(" ")),
                    z === N && f(D, "prev"),
                    z === _ && f(D, "next"))
                }
                );
            else {
                const D = x[S];
                if (D && D.classList.add(...h.bulletActiveClass.split(" ")),
                t.isElement && x.forEach( (z, J) => {
                    z.setAttribute("part", J === S ? "bullet-active" : "bullet")
                }
                ),
                h.dynamicBullets) {
                    const z = x[N]
                      , J = x[_];
                    for (let q = N; q <= _; q += 1)
                        x[q] && x[q].classList.add(...`${h.bulletActiveClass}-main`.split(" "));
                    f(z, "prev"),
                    f(J, "next")
                }
            }
            if (h.dynamicBullets) {
                const D = Math.min(x.length, h.dynamicMainBullets + 4)
                  , z = (l * D - l) / 2 - L * l
                  , J = p ? "right" : "left";
                x.forEach(q => {
                    q.style[t.isHorizontal() ? J : "top"] = `${z}px`
                }
                )
            }
        }
        g.forEach( (x, N) => {
            if (h.type === "fraction" && (x.querySelectorAll(en(h.currentClass)).forEach(_ => {
                _.textContent = h.formatFractionCurrent(S + 1)
            }
            ),
            x.querySelectorAll(en(h.totalClass)).forEach(_ => {
                _.textContent = h.formatFractionTotal(T)
            }
            )),
            h.type === "progressbar") {
                let _;
                h.progressbarOpposite ? _ = t.isHorizontal() ? "vertical" : "horizontal" : _ = t.isHorizontal() ? "horizontal" : "vertical";
                const L = (S + 1) / T;
                let D = 1
                  , z = 1;
                _ === "horizontal" ? D = L : z = L,
                x.querySelectorAll(en(h.progressbarFillClass)).forEach(J => {
                    J.style.transform = `translate3d(0,0,0) scaleX(${D}) scaleY(${z})`,
                    J.style.transitionDuration = `${t.params.speed}ms`
                }
                )
            }
            h.type === "custom" && h.renderCustom ? (x.innerHTML = h.renderCustom(t, S + 1, T),
            N === 0 && s("paginationRender", x)) : (N === 0 && s("paginationRender", x),
            s("paginationUpdate", x)),
            t.params.watchOverflow && t.enabled && x.classList[t.isLocked ? "add" : "remove"](h.lockClass)
        }
        )
    }
    function m() {
        const p = t.params.pagination;
        if (d())
            return;
        const h = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length;
        let g = t.pagination.el;
        g = o(g);
        let S = "";
        if (p.type === "bullets") {
            let O = t.params.loop ? Math.ceil(h / t.params.slidesPerGroup) : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && O > h && (O = h);
            for (let I = 0; I < O; I += 1)
                p.renderBullet ? S += p.renderBullet.call(t, I, p.bulletClass) : S += `<${p.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${p.bulletClass}"></${p.bulletElement}>`
        }
        p.type === "fraction" && (p.renderFraction ? S = p.renderFraction.call(t, p.currentClass, p.totalClass) : S = `<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`),
        p.type === "progressbar" && (p.renderProgressbar ? S = p.renderProgressbar.call(t, p.progressbarFillClass) : S = `<span class="${p.progressbarFillClass}"></span>`),
        t.pagination.bullets = [],
        g.forEach(O => {
            p.type !== "custom" && (O.innerHTML = S || ""),
            p.type === "bullets" && t.pagination.bullets.push(...O.querySelectorAll(en(p.bulletClass)))
        }
        ),
        p.type !== "custom" && s("paginationRender", g[0])
    }
    function E() {
        t.params.pagination = Ol(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination"
        });
        const p = t.params.pagination;
        if (!p.el)
            return;
        let h;
        typeof p.el == "string" && t.isElement && (h = t.el.querySelector(p.el)),
        !h && typeof p.el == "string" && (h = [...document.querySelectorAll(p.el)]),
        h || (h = p.el),
        !(!h || h.length === 0) && (t.params.uniqueNavElements && typeof p.el == "string" && Array.isArray(h) && h.length > 1 && (h = [...t.el.querySelectorAll(p.el)],
        h.length > 1 && (h = h.filter(g => xt(g, ".swiper")[0] === t.el)[0])),
        Array.isArray(h) && h.length === 1 && (h = h[0]),
        Object.assign(t.pagination, {
            el: h
        }),
        h = o(h),
        h.forEach(g => {
            p.type === "bullets" && p.clickable && g.classList.add(...(p.clickableClass || "").split(" ")),
            g.classList.add(p.modifierClass + p.type),
            g.classList.add(t.isHorizontal() ? p.horizontalClass : p.verticalClass),
            p.type === "bullets" && p.dynamicBullets && (g.classList.add(`${p.modifierClass}${p.type}-dynamic`),
            a = 0,
            p.dynamicMainBullets < 1 && (p.dynamicMainBullets = 1)),
            p.type === "progressbar" && p.progressbarOpposite && g.classList.add(p.progressbarOppositeClass),
            p.clickable && g.addEventListener("click", c),
            t.enabled || g.classList.add(p.lockClass)
        }
        ))
    }
    function b() {
        const p = t.params.pagination;
        if (d())
            return;
        let h = t.pagination.el;
        h && (h = o(h),
        h.forEach(g => {
            g.classList.remove(p.hiddenClass),
            g.classList.remove(p.modifierClass + p.type),
            g.classList.remove(t.isHorizontal() ? p.horizontalClass : p.verticalClass),
            p.clickable && (g.classList.remove(...(p.clickableClass || "").split(" ")),
            g.removeEventListener("click", c))
        }
        )),
        t.pagination.bullets && t.pagination.bullets.forEach(g => g.classList.remove(...p.bulletActiveClass.split(" ")))
    }
    i("changeDirection", () => {
        if (!t.pagination || !t.pagination.el)
            return;
        const p = t.params.pagination;
        let {el: h} = t.pagination;
        h = o(h),
        h.forEach(g => {
            g.classList.remove(p.horizontalClass, p.verticalClass),
            g.classList.add(t.isHorizontal() ? p.horizontalClass : p.verticalClass)
        }
        )
    }
    ),
    i("init", () => {
        t.params.pagination.enabled === !1 ? y() : (E(),
        m(),
        u())
    }
    ),
    i("activeIndexChange", () => {
        typeof t.snapIndex > "u" && u()
    }
    ),
    i("snapIndexChange", () => {
        u()
    }
    ),
    i("snapGridLengthChange", () => {
        m(),
        u()
    }
    ),
    i("destroy", () => {
        b()
    }
    ),
    i("enable disable", () => {
        let {el: p} = t.pagination;
        p && (p = o(p),
        p.forEach(h => h.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass)))
    }
    ),
    i("lock unlock", () => {
        u()
    }
    ),
    i("click", (p, h) => {
        const g = h.target
          , S = o(t.pagination.el);
        if (t.params.pagination.el && t.params.pagination.hideOnClick && S && S.length > 0 && !g.classList.contains(t.params.pagination.bulletClass)) {
            if (t.navigation && (t.navigation.nextEl && g === t.navigation.nextEl || t.navigation.prevEl && g === t.navigation.prevEl))
                return;
            const O = S[0].classList.contains(t.params.pagination.hiddenClass);
            s(O === !0 ? "paginationShow" : "paginationHide"),
            S.forEach(I => I.classList.toggle(t.params.pagination.hiddenClass))
        }
    }
    );
    const C = () => {
        t.el.classList.remove(t.params.pagination.paginationDisabledClass);
        let {el: p} = t.pagination;
        p && (p = o(p),
        p.forEach(h => h.classList.remove(t.params.pagination.paginationDisabledClass))),
        E(),
        m(),
        u()
    }
      , y = () => {
        t.el.classList.add(t.params.pagination.paginationDisabledClass);
        let {el: p} = t.pagination;
        p && (p = o(p),
        p.forEach(h => h.classList.add(t.params.pagination.paginationDisabledClass))),
        b()
    }
    ;
    Object.assign(t.pagination, {
        enable: C,
        disable: y,
        render: m,
        update: u,
        init: E,
        destroy: b
    })
}
function wf(e) {
    let {swiper: t, extendParams: n, on: i, emit: s} = e;
    const r = be();
    n({
        zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
        }
    }),
    t.zoom = {
        enabled: !1
    };
    let l = 1, a = !1, o, d;
    const f = []
      , c = {
        originX: 0,
        originY: 0,
        slideEl: void 0,
        slideWidth: void 0,
        slideHeight: void 0,
        imageEl: void 0,
        imageWrapEl: void 0,
        maxRatio: 3
    }
      , u = {
        isTouched: void 0,
        isMoved: void 0,
        currentX: void 0,
        currentY: void 0,
        minX: void 0,
        minY: void 0,
        maxX: void 0,
        maxY: void 0,
        width: void 0,
        height: void 0,
        startX: void 0,
        startY: void 0,
        touchesStart: {},
        touchesCurrent: {}
    }
      , m = {
        x: void 0,
        y: void 0,
        prevPositionX: void 0,
        prevPositionY: void 0,
        prevTime: void 0
    };
    let E = 1;
    Object.defineProperty(t.zoom, "scale", {
        get() {
            return E
        },
        set(M) {
            if (E !== M) {
                const F = c.imageEl
                  , k = c.slideEl;
                s("zoomChange", M, F, k)
            }
            E = M
        }
    });
    function b() {
        if (f.length < 2)
            return 1;
        const M = f[0].pageX
          , F = f[0].pageY
          , k = f[1].pageX
          , Z = f[1].pageY;
        return Math.sqrt((k - M) ** 2 + (Z - F) ** 2)
    }
    function C() {
        if (f.length < 2)
            return {
                x: null,
                y: null
            };
        const M = c.imageEl.getBoundingClientRect();
        return [(f[0].pageX + (f[1].pageX - f[0].pageX) / 2 - M.x - r.scrollX) / l, (f[0].pageY + (f[1].pageY - f[0].pageY) / 2 - M.y - r.scrollY) / l]
    }
    function y() {
        return t.isElement ? "swiper-slide" : `.${t.params.slideClass}`
    }
    function p(M) {
        const F = y();
        return !!(M.target.matches(F) || t.slides.filter(k => k.contains(M.target)).length > 0)
    }
    function h(M) {
        const F = `.${t.params.zoom.containerClass}`;
        return !!(M.target.matches(F) || [...t.hostEl.querySelectorAll(F)].filter(k => k.contains(M.target)).length > 0)
    }
    function g(M) {
        if (M.pointerType === "mouse" && f.splice(0, f.length),
        !p(M))
            return;
        const F = t.params.zoom;
        if (o = !1,
        d = !1,
        f.push(M),
        !(f.length < 2)) {
            if (o = !0,
            c.scaleStart = b(),
            !c.slideEl) {
                c.slideEl = M.target.closest(`.${t.params.slideClass}, swiper-slide`),
                c.slideEl || (c.slideEl = t.slides[t.activeIndex]);
                let k = c.slideEl.querySelector(`.${F.containerClass}`);
                if (k && (k = k.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
                c.imageEl = k,
                k ? c.imageWrapEl = xt(c.imageEl, `.${F.containerClass}`)[0] : c.imageWrapEl = void 0,
                !c.imageWrapEl) {
                    c.imageEl = void 0;
                    return
                }
                c.maxRatio = c.imageWrapEl.getAttribute("data-swiper-zoom") || F.maxRatio
            }
            if (c.imageEl) {
                const [k,Z] = C();
                c.originX = k,
                c.originY = Z,
                c.imageEl.style.transitionDuration = "0ms"
            }
            a = !0
        }
    }
    function S(M) {
        if (!p(M))
            return;
        const F = t.params.zoom
          , k = t.zoom
          , Z = f.findIndex(se => se.pointerId === M.pointerId);
        Z >= 0 && (f[Z] = M),
        !(f.length < 2) && (d = !0,
        c.scaleMove = b(),
        c.imageEl && (k.scale = c.scaleMove / c.scaleStart * l,
        k.scale > c.maxRatio && (k.scale = c.maxRatio - 1 + (k.scale - c.maxRatio + 1) ** .5),
        k.scale < F.minRatio && (k.scale = F.minRatio + 1 - (F.minRatio - k.scale + 1) ** .5),
        c.imageEl.style.transform = `translate3d(0,0,0) scale(${k.scale})`))
    }
    function O(M) {
        if (!p(M) || M.pointerType === "mouse" && M.type === "pointerout")
            return;
        const F = t.params.zoom
          , k = t.zoom
          , Z = f.findIndex(se => se.pointerId === M.pointerId);
        Z >= 0 && f.splice(Z, 1),
        !(!o || !d) && (o = !1,
        d = !1,
        c.imageEl && (k.scale = Math.max(Math.min(k.scale, c.maxRatio), F.minRatio),
        c.imageEl.style.transitionDuration = `${t.params.speed}ms`,
        c.imageEl.style.transform = `translate3d(0,0,0) scale(${k.scale})`,
        l = k.scale,
        a = !1,
        k.scale > 1 && c.slideEl ? c.slideEl.classList.add(`${F.zoomedSlideClass}`) : k.scale <= 1 && c.slideEl && c.slideEl.classList.remove(`${F.zoomedSlideClass}`),
        k.scale === 1 && (c.originX = 0,
        c.originY = 0,
        c.slideEl = void 0)))
    }
    function I(M) {
        const F = t.device;
        if (!c.imageEl || u.isTouched)
            return;
        F.android && M.cancelable && M.preventDefault(),
        u.isTouched = !0;
        const k = f.length > 0 ? f[0] : M;
        u.touchesStart.x = k.pageX,
        u.touchesStart.y = k.pageY
    }
    function T(M) {
        if (!p(M) || !h(M))
            return;
        const F = t.zoom;
        if (!c.imageEl || !u.isTouched || !c.slideEl)
            return;
        u.isMoved || (u.width = c.imageEl.offsetWidth,
        u.height = c.imageEl.offsetHeight,
        u.startX = Fi(c.imageWrapEl, "x") || 0,
        u.startY = Fi(c.imageWrapEl, "y") || 0,
        c.slideWidth = c.slideEl.offsetWidth,
        c.slideHeight = c.slideEl.offsetHeight,
        c.imageWrapEl.style.transitionDuration = "0ms");
        const k = u.width * F.scale
          , Z = u.height * F.scale;
        if (k < c.slideWidth && Z < c.slideHeight)
            return;
        if (u.minX = Math.min(c.slideWidth / 2 - k / 2, 0),
        u.maxX = -u.minX,
        u.minY = Math.min(c.slideHeight / 2 - Z / 2, 0),
        u.maxY = -u.minY,
        u.touchesCurrent.x = f.length > 0 ? f[0].pageX : M.pageX,
        u.touchesCurrent.y = f.length > 0 ? f[0].pageY : M.pageY,
        Math.max(Math.abs(u.touchesCurrent.x - u.touchesStart.x), Math.abs(u.touchesCurrent.y - u.touchesStart.y)) > 5 && (t.allowClick = !1),
        !u.isMoved && !a) {
            if (t.isHorizontal() && (Math.floor(u.minX) === Math.floor(u.startX) && u.touchesCurrent.x < u.touchesStart.x || Math.floor(u.maxX) === Math.floor(u.startX) && u.touchesCurrent.x > u.touchesStart.x)) {
                u.isTouched = !1;
                return
            }
            if (!t.isHorizontal() && (Math.floor(u.minY) === Math.floor(u.startY) && u.touchesCurrent.y < u.touchesStart.y || Math.floor(u.maxY) === Math.floor(u.startY) && u.touchesCurrent.y > u.touchesStart.y)) {
                u.isTouched = !1;
                return
            }
        }
        M.cancelable && M.preventDefault(),
        M.stopPropagation(),
        u.isMoved = !0;
        const ue = (F.scale - l) / (c.maxRatio - t.params.zoom.minRatio)
          , {originX: Pe, originY: Ze} = c;
        u.currentX = u.touchesCurrent.x - u.touchesStart.x + u.startX + ue * (u.width - Pe * 2),
        u.currentY = u.touchesCurrent.y - u.touchesStart.y + u.startY + ue * (u.height - Ze * 2),
        u.currentX < u.minX && (u.currentX = u.minX + 1 - (u.minX - u.currentX + 1) ** .8),
        u.currentX > u.maxX && (u.currentX = u.maxX - 1 + (u.currentX - u.maxX + 1) ** .8),
        u.currentY < u.minY && (u.currentY = u.minY + 1 - (u.minY - u.currentY + 1) ** .8),
        u.currentY > u.maxY && (u.currentY = u.maxY - 1 + (u.currentY - u.maxY + 1) ** .8),
        m.prevPositionX || (m.prevPositionX = u.touchesCurrent.x),
        m.prevPositionY || (m.prevPositionY = u.touchesCurrent.y),
        m.prevTime || (m.prevTime = Date.now()),
        m.x = (u.touchesCurrent.x - m.prevPositionX) / (Date.now() - m.prevTime) / 2,
        m.y = (u.touchesCurrent.y - m.prevPositionY) / (Date.now() - m.prevTime) / 2,
        Math.abs(u.touchesCurrent.x - m.prevPositionX) < 2 && (m.x = 0),
        Math.abs(u.touchesCurrent.y - m.prevPositionY) < 2 && (m.y = 0),
        m.prevPositionX = u.touchesCurrent.x,
        m.prevPositionY = u.touchesCurrent.y,
        m.prevTime = Date.now(),
        c.imageWrapEl.style.transform = `translate3d(${u.currentX}px, ${u.currentY}px,0)`
    }
    function x() {
        const M = t.zoom;
        if (!c.imageEl)
            return;
        if (!u.isTouched || !u.isMoved) {
            u.isTouched = !1,
            u.isMoved = !1;
            return
        }
        u.isTouched = !1,
        u.isMoved = !1;
        let F = 300
          , k = 300;
        const Z = m.x * F
          , se = u.currentX + Z
          , ue = m.y * k
          , Pe = u.currentY + ue;
        m.x !== 0 && (F = Math.abs((se - u.currentX) / m.x)),
        m.y !== 0 && (k = Math.abs((Pe - u.currentY) / m.y));
        const Ze = Math.max(F, k);
        u.currentX = se,
        u.currentY = Pe;
        const Ct = u.width * M.scale
          , pe = u.height * M.scale;
        u.minX = Math.min(c.slideWidth / 2 - Ct / 2, 0),
        u.maxX = -u.minX,
        u.minY = Math.min(c.slideHeight / 2 - pe / 2, 0),
        u.maxY = -u.minY,
        u.currentX = Math.max(Math.min(u.currentX, u.maxX), u.minX),
        u.currentY = Math.max(Math.min(u.currentY, u.maxY), u.minY),
        c.imageWrapEl.style.transitionDuration = `${Ze}ms`,
        c.imageWrapEl.style.transform = `translate3d(${u.currentX}px, ${u.currentY}px,0)`
    }
    function N() {
        const M = t.zoom;
        c.slideEl && t.activeIndex !== t.slides.indexOf(c.slideEl) && (c.imageEl && (c.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
        c.imageWrapEl && (c.imageWrapEl.style.transform = "translate3d(0,0,0)"),
        c.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),
        M.scale = 1,
        l = 1,
        c.slideEl = void 0,
        c.imageEl = void 0,
        c.imageWrapEl = void 0,
        c.originX = 0,
        c.originY = 0)
    }
    function _(M) {
        const F = t.zoom
          , k = t.params.zoom;
        if (!c.slideEl) {
            M && M.target && (c.slideEl = M.target.closest(`.${t.params.slideClass}, swiper-slide`)),
            c.slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? c.slideEl = ze(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : c.slideEl = t.slides[t.activeIndex]);
            let $ = c.slideEl.querySelector(`.${k.containerClass}`);
            $ && ($ = $.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
            c.imageEl = $,
            $ ? c.imageWrapEl = xt(c.imageEl, `.${k.containerClass}`)[0] : c.imageWrapEl = void 0
        }
        if (!c.imageEl || !c.imageWrapEl)
            return;
        t.params.cssMode && (t.wrapperEl.style.overflow = "hidden",
        t.wrapperEl.style.touchAction = "none"),
        c.slideEl.classList.add(`${k.zoomedSlideClass}`);
        let Z, se, ue, Pe, Ze, Ct, pe, Ie, Kt, Ye, _t, Mt, v, w, P, B, A, H;
        typeof u.touchesStart.x > "u" && M ? (Z = M.pageX,
        se = M.pageY) : (Z = u.touchesStart.x,
        se = u.touchesStart.y);
        const j = typeof M == "number" ? M : null;
        l === 1 && j && (Z = void 0,
        se = void 0),
        F.scale = j || c.imageWrapEl.getAttribute("data-swiper-zoom") || k.maxRatio,
        l = j || c.imageWrapEl.getAttribute("data-swiper-zoom") || k.maxRatio,
        M && !(l === 1 && j) ? (A = c.slideEl.offsetWidth,
        H = c.slideEl.offsetHeight,
        ue = Ri(c.slideEl).left + r.scrollX,
        Pe = Ri(c.slideEl).top + r.scrollY,
        Ze = ue + A / 2 - Z,
        Ct = Pe + H / 2 - se,
        Kt = c.imageEl.offsetWidth,
        Ye = c.imageEl.offsetHeight,
        _t = Kt * F.scale,
        Mt = Ye * F.scale,
        v = Math.min(A / 2 - _t / 2, 0),
        w = Math.min(H / 2 - Mt / 2, 0),
        P = -v,
        B = -w,
        pe = Ze * F.scale,
        Ie = Ct * F.scale,
        pe < v && (pe = v),
        pe > P && (pe = P),
        Ie < w && (Ie = w),
        Ie > B && (Ie = B)) : (pe = 0,
        Ie = 0),
        j && F.scale === 1 && (c.originX = 0,
        c.originY = 0),
        c.imageWrapEl.style.transitionDuration = "300ms",
        c.imageWrapEl.style.transform = `translate3d(${pe}px, ${Ie}px,0)`,
        c.imageEl.style.transitionDuration = "300ms",
        c.imageEl.style.transform = `translate3d(0,0,0) scale(${F.scale})`
    }
    function L() {
        const M = t.zoom
          , F = t.params.zoom;
        if (!c.slideEl) {
            t.params.virtual && t.params.virtual.enabled && t.virtual ? c.slideEl = ze(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : c.slideEl = t.slides[t.activeIndex];
            let k = c.slideEl.querySelector(`.${F.containerClass}`);
            k && (k = k.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
            c.imageEl = k,
            k ? c.imageWrapEl = xt(c.imageEl, `.${F.containerClass}`)[0] : c.imageWrapEl = void 0
        }
        !c.imageEl || !c.imageWrapEl || (t.params.cssMode && (t.wrapperEl.style.overflow = "",
        t.wrapperEl.style.touchAction = ""),
        M.scale = 1,
        l = 1,
        c.imageWrapEl.style.transitionDuration = "300ms",
        c.imageWrapEl.style.transform = "translate3d(0,0,0)",
        c.imageEl.style.transitionDuration = "300ms",
        c.imageEl.style.transform = "translate3d(0,0,0) scale(1)",
        c.slideEl.classList.remove(`${F.zoomedSlideClass}`),
        c.slideEl = void 0,
        c.originX = 0,
        c.originY = 0)
    }
    function D(M) {
        const F = t.zoom;
        F.scale && F.scale !== 1 ? L() : _(M)
    }
    function z() {
        const M = t.params.passiveListeners ? {
            passive: !0,
            capture: !1
        } : !1
          , F = t.params.passiveListeners ? {
            passive: !1,
            capture: !0
        } : !0;
        return {
            passiveListener: M,
            activeListenerWithCapture: F
        }
    }
    function J() {
        const M = t.zoom;
        if (M.enabled)
            return;
        M.enabled = !0;
        const {passiveListener: F, activeListenerWithCapture: k} = z();
        t.wrapperEl.addEventListener("pointerdown", g, F),
        t.wrapperEl.addEventListener("pointermove", S, k),
        ["pointerup", "pointercancel", "pointerout"].forEach(Z => {
            t.wrapperEl.addEventListener(Z, O, F)
        }
        ),
        t.wrapperEl.addEventListener("pointermove", T, k)
    }
    function q() {
        const M = t.zoom;
        if (!M.enabled)
            return;
        M.enabled = !1;
        const {passiveListener: F, activeListenerWithCapture: k} = z();
        t.wrapperEl.removeEventListener("pointerdown", g, F),
        t.wrapperEl.removeEventListener("pointermove", S, k),
        ["pointerup", "pointercancel", "pointerout"].forEach(Z => {
            t.wrapperEl.removeEventListener(Z, O, F)
        }
        ),
        t.wrapperEl.removeEventListener("pointermove", T, k)
    }
    i("init", () => {
        t.params.zoom.enabled && J()
    }
    ),
    i("destroy", () => {
        q()
    }
    ),
    i("touchStart", (M, F) => {
        t.zoom.enabled && I(F)
    }
    ),
    i("touchEnd", (M, F) => {
        t.zoom.enabled && x()
    }
    ),
    i("doubleTap", (M, F) => {
        !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && D(F)
    }
    ),
    i("transitionEnd", () => {
        t.zoom.enabled && t.params.zoom.enabled && N()
    }
    ),
    i("slideChange", () => {
        t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && N()
    }
    ),
    Object.assign(t.zoom, {
        enable: J,
        disable: q,
        in: _,
        out: L,
        toggle: D
    })
}
function xf(e) {
    let {swiper: t, extendParams: n, on: i, emit: s, params: r} = e;
    t.autoplay = {
        running: !1,
        paused: !1,
        timeLeft: 0
    },
    n({
        autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1
        }
    });
    let l, a, o = r && r.autoplay ? r.autoplay.delay : 3e3, d = r && r.autoplay ? r.autoplay.delay : 3e3, f, c = new Date().getTime, u, m, E, b, C, y;
    function p(M) {
        !t || t.destroyed || !t.wrapperEl || M.target === t.wrapperEl && (t.wrapperEl.removeEventListener("transitionend", p),
        x())
    }
    const h = () => {
        if (t.destroyed || !t.autoplay.running)
            return;
        t.autoplay.paused ? u = !0 : u && (d = f,
        u = !1);
        const M = t.autoplay.paused ? f : c + d - new Date().getTime();
        t.autoplay.timeLeft = M,
        s("autoplayTimeLeft", M, M / o),
        a = requestAnimationFrame( () => {
            h()
        }
        )
    }
      , g = () => {
        let M;
        return t.virtual && t.params.virtual.enabled ? M = t.slides.filter(k => k.classList.contains("swiper-slide-active"))[0] : M = t.slides[t.activeIndex],
        M ? parseInt(M.getAttribute("data-swiper-autoplay"), 10) : void 0
    }
      , S = M => {
        if (t.destroyed || !t.autoplay.running)
            return;
        cancelAnimationFrame(a),
        h();
        let F = typeof M > "u" ? t.params.autoplay.delay : M;
        o = t.params.autoplay.delay,
        d = t.params.autoplay.delay;
        const k = g();
        !Number.isNaN(k) && k > 0 && typeof M > "u" && (F = k,
        o = k,
        d = k),
        f = F;
        const Z = t.params.speed
          , se = () => {
            !t || t.destroyed || (t.params.autoplay.reverseDirection ? !t.isBeginning || t.params.loop || t.params.rewind ? (t.slidePrev(Z, !0, !0),
            s("autoplay")) : t.params.autoplay.stopOnLastSlide || (t.slideTo(t.slides.length - 1, Z, !0, !0),
            s("autoplay")) : !t.isEnd || t.params.loop || t.params.rewind ? (t.slideNext(Z, !0, !0),
            s("autoplay")) : t.params.autoplay.stopOnLastSlide || (t.slideTo(0, Z, !0, !0),
            s("autoplay")),
            t.params.cssMode && (c = new Date().getTime(),
            requestAnimationFrame( () => {
                S()
            }
            )))
        }
        ;
        return F > 0 ? (clearTimeout(l),
        l = setTimeout( () => {
            se()
        }
        , F)) : requestAnimationFrame( () => {
            se()
        }
        ),
        F
    }
      , O = () => {
        t.autoplay.running = !0,
        S(),
        s("autoplayStart")
    }
      , I = () => {
        t.autoplay.running = !1,
        clearTimeout(l),
        cancelAnimationFrame(a),
        s("autoplayStop")
    }
      , T = (M, F) => {
        if (t.destroyed || !t.autoplay.running)
            return;
        clearTimeout(l),
        M || (y = !0);
        const k = () => {
            s("autoplayPause"),
            t.params.autoplay.waitForTransition ? t.wrapperEl.addEventListener("transitionend", p) : x()
        }
        ;
        if (t.autoplay.paused = !0,
        F) {
            C && (f = t.params.autoplay.delay),
            C = !1,
            k();
            return
        }
        f = (f || t.params.autoplay.delay) - (new Date().getTime() - c),
        !(t.isEnd && f < 0 && !t.params.loop) && (f < 0 && (f = 0),
        k())
    }
      , x = () => {
        t.isEnd && f < 0 && !t.params.loop || t.destroyed || !t.autoplay.running || (c = new Date().getTime(),
        y ? (y = !1,
        S(f)) : S(),
        t.autoplay.paused = !1,
        s("autoplayResume"))
    }
      , N = () => {
        if (t.destroyed || !t.autoplay.running)
            return;
        const M = Fe();
        M.visibilityState === "hidden" && (y = !0,
        T(!0)),
        M.visibilityState === "visible" && x()
    }
      , _ = M => {
        M.pointerType === "mouse" && (y = !0,
        !(t.animating || t.autoplay.paused) && T(!0))
    }
      , L = M => {
        M.pointerType === "mouse" && t.autoplay.paused && x()
    }
      , D = () => {
        t.params.autoplay.pauseOnMouseEnter && (t.el.addEventListener("pointerenter", _),
        t.el.addEventListener("pointerleave", L))
    }
      , z = () => {
        t.el.removeEventListener("pointerenter", _),
        t.el.removeEventListener("pointerleave", L)
    }
      , J = () => {
        Fe().addEventListener("visibilitychange", N)
    }
      , q = () => {
        Fe().removeEventListener("visibilitychange", N)
    }
    ;
    i("init", () => {
        t.params.autoplay.enabled && (D(),
        J(),
        c = new Date().getTime(),
        O())
    }
    ),
    i("destroy", () => {
        z(),
        q(),
        t.autoplay.running && I()
    }
    ),
    i("beforeTransitionStart", (M, F, k) => {
        t.destroyed || !t.autoplay.running || (k || !t.params.autoplay.disableOnInteraction ? T(!0, !0) : I())
    }
    ),
    i("sliderFirstMove", () => {
        if (!(t.destroyed || !t.autoplay.running)) {
            if (t.params.autoplay.disableOnInteraction) {
                I();
                return
            }
            m = !0,
            E = !1,
            y = !1,
            b = setTimeout( () => {
                y = !0,
                E = !0,
                T(!0)
            }
            , 200)
        }
    }
    ),
    i("touchEnd", () => {
        if (!(t.destroyed || !t.autoplay.running || !m)) {
            if (clearTimeout(b),
            clearTimeout(l),
            t.params.autoplay.disableOnInteraction) {
                E = !1,
                m = !1;
                return
            }
            E && t.params.cssMode && x(),
            E = !1,
            m = !1
        }
    }
    ),
    i("slideChange", () => {
        t.destroyed || !t.autoplay.running || (C = !0)
    }
    ),
    Object.assign(t.autoplay, {
        start: O,
        stop: I,
        pause: T,
        resume: x
    })
}
function Ef(e) {
    let {swiper: t, extendParams: n, emit: i, once: s} = e;
    n({
        freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: .02
        }
    });
    function r() {
        if (t.params.cssMode)
            return;
        const o = t.getTranslate();
        t.setTranslate(o),
        t.setTransition(0),
        t.touchEventsData.velocities.length = 0,
        t.freeMode.onTouchEnd({
            currentPos: t.rtl ? t.translate : -t.translate
        })
    }
    function l() {
        if (t.params.cssMode)
            return;
        const {touchEventsData: o, touches: d} = t;
        o.velocities.length === 0 && o.velocities.push({
            position: d[t.isHorizontal() ? "startX" : "startY"],
            time: o.touchStartTime
        }),
        o.velocities.push({
            position: d[t.isHorizontal() ? "currentX" : "currentY"],
            time: wt()
        })
    }
    function a(o) {
        let {currentPos: d} = o;
        if (t.params.cssMode)
            return;
        const {params: f, wrapperEl: c, rtlTranslate: u, snapGrid: m, touchEventsData: E} = t
          , C = wt() - E.touchStartTime;
        if (d < -t.minTranslate()) {
            t.slideTo(t.activeIndex);
            return
        }
        if (d > -t.maxTranslate()) {
            t.slides.length < m.length ? t.slideTo(m.length - 1) : t.slideTo(t.slides.length - 1);
            return
        }
        if (f.freeMode.momentum) {
            if (E.velocities.length > 1) {
                const T = E.velocities.pop()
                  , x = E.velocities.pop()
                  , N = T.position - x.position
                  , _ = T.time - x.time;
                t.velocity = N / _,
                t.velocity /= 2,
                Math.abs(t.velocity) < f.freeMode.minimumVelocity && (t.velocity = 0),
                (_ > 150 || wt() - T.time > 300) && (t.velocity = 0)
            } else
                t.velocity = 0;
            t.velocity *= f.freeMode.momentumVelocityRatio,
            E.velocities.length = 0;
            let y = 1e3 * f.freeMode.momentumRatio;
            const p = t.velocity * y;
            let h = t.translate + p;
            u && (h = -h);
            let g = !1, S;
            const O = Math.abs(t.velocity) * 20 * f.freeMode.momentumBounceRatio;
            let I;
            if (h < t.maxTranslate())
                f.freeMode.momentumBounce ? (h + t.maxTranslate() < -O && (h = t.maxTranslate() - O),
                S = t.maxTranslate(),
                g = !0,
                E.allowMomentumBounce = !0) : h = t.maxTranslate(),
                f.loop && f.centeredSlides && (I = !0);
            else if (h > t.minTranslate())
                f.freeMode.momentumBounce ? (h - t.minTranslate() > O && (h = t.minTranslate() + O),
                S = t.minTranslate(),
                g = !0,
                E.allowMomentumBounce = !0) : h = t.minTranslate(),
                f.loop && f.centeredSlides && (I = !0);
            else if (f.freeMode.sticky) {
                let T;
                for (let x = 0; x < m.length; x += 1)
                    if (m[x] > -h) {
                        T = x;
                        break
                    }
                Math.abs(m[T] - h) < Math.abs(m[T - 1] - h) || t.swipeDirection === "next" ? h = m[T] : h = m[T - 1],
                h = -h
            }
            if (I && s("transitionEnd", () => {
                t.loopFix()
            }
            ),
            t.velocity !== 0) {
                if (u ? y = Math.abs((-h - t.translate) / t.velocity) : y = Math.abs((h - t.translate) / t.velocity),
                f.freeMode.sticky) {
                    const T = Math.abs((u ? -h : h) - t.translate)
                      , x = t.slidesSizesGrid[t.activeIndex];
                    T < x ? y = f.speed : T < 2 * x ? y = f.speed * 1.5 : y = f.speed * 2.5
                }
            } else if (f.freeMode.sticky) {
                t.slideToClosest();
                return
            }
            f.freeMode.momentumBounce && g ? (t.updateProgress(S),
            t.setTransition(y),
            t.setTranslate(h),
            t.transitionStart(!0, t.swipeDirection),
            t.animating = !0,
            di(c, () => {
                !t || t.destroyed || !E.allowMomentumBounce || (i("momentumBounce"),
                t.setTransition(f.speed),
                setTimeout( () => {
                    t.setTranslate(S),
                    di(c, () => {
                        !t || t.destroyed || t.transitionEnd()
                    }
                    )
                }
                , 0))
            }
            )) : t.velocity ? (i("_freeModeNoMomentumRelease"),
            t.updateProgress(h),
            t.setTransition(y),
            t.setTranslate(h),
            t.transitionStart(!0, t.swipeDirection),
            t.animating || (t.animating = !0,
            di(c, () => {
                !t || t.destroyed || t.transitionEnd()
            }
            ))) : t.updateProgress(h),
            t.updateActiveIndex(),
            t.updateSlidesClasses()
        } else if (f.freeMode.sticky) {
            t.slideToClosest();
            return
        } else
            f.freeMode && i("_freeModeNoMomentumRelease");
        (!f.freeMode.momentum || C >= f.longSwipesMs) && (t.updateProgress(),
        t.updateActiveIndex(),
        t.updateSlidesClasses())
    }
    Object.assign(t, {
        freeMode: {
            onTouchStart: r,
            onTouchMove: l,
            onTouchEnd: a
        }
    })
}
export {Zu as $, Gl as A, Hu as B, Vu as C, Rt as D, Uu as E, Ma as F, fs as G, al as H, Do as I, oe as J, Ku as K, lf as L, of as M, ul as N, xe as O, Qu as P, fl as Q, Nu as R, Xu as S, ml as T, Gi as U, af as V, sf as W, Ef as X, gf as Y, mf as Z, Gu as _, he as a, Wu as a0, Yu as a1, la as a2, hf as a3, pf as a4, Xi as a5, qu as a6, df as a7, cf as a8, yf as a9, ef as aa, ea as ab, Qo as ac, bf as ad, xf as ae, ff as af, nf as ag, tf as ah, uf as ai, vf as aj, wf as ak, ls as b, te as c, Jo as d, hl as e, Ut as f, bn as g, rf as h, On as i, yn as j, Ae as k, Ju as l, Eo as m, Dr as n, na as o, cs as p, $u as q, es as r, ku as s, ju as t, To as u, Na as v, yt as w, Pr as x, me as y, Bt as z};