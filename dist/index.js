"use strict";
exports.__esModule = true;
exports.vmap = function (f) { return function (ts) { return function (us) {
    return ts.map(function (t, d) { return f(t, us[d]); });
}; }; };
exports.vadd = exports.vmap(function (a, b) { return a + b; });
exports.vsub = exports.vmap(function (a, b) { return a - b; });
exports.vmul = exports.vmap(function (a, b) { return a * b; });
exports.vdiv = exports.vmap(function (a, b) { return a / b; });
exports.vsquare = function (v) { return v.map(function (x) { return x * x; }); };
exports.vsum = function (v) { return v.reduce(function (sum, x) { return x + sum; }, 0); };
exports.vproduct = function (v) { return v.reduce(function (product, x) { return x * product; }, 1); };
