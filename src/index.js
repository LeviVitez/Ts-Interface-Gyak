"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Football_golokszama;
class Football {
    constructor(winner, golokszama) {
        _Football_golokszama.set(this, void 0);
        this.winner = winner;
        __classPrivateFieldSet(this, _Football_golokszama, golokszama, "f");
    }
    result() {
        console.log(this.toString());
    }
    toString() {
        return this.wi + " (" + this.hossz + " s)";
    }
}
_Football_golokszama = new WeakMap();
