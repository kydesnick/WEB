import "./entry.89c17163.js";
const l = r => {
    const o = new Date(r);
    let t = o.getDate();
    t < 10 && (t = "0" + t);
    let e = o.getMonth() + 1;
    e < 10 && (e = "0" + e);
    let a = o.getFullYear() % 100;
    return a < 10 && (a = "0" + a),
    t + "." + e + "." + a
}
;
export {l as f};
