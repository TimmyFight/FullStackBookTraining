var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var SpreadArray;
(function (SpreadArray) {
    var a = [1, 2, 3, 4];
    var b = [5, 6, 7, 8];
    var c = __spreadArray(__spreadArray([], a, true), b, true);
    var d = a.concat(b);
    console.log('Array c before changing a', c);
    console.log('Array s before changing a', d);
    a.push(10);
    console.log('Array a', a);
    console.log('Array c after changing a', c);
    console.log('Array s after changing a', d);
})(SpreadArray || (SpreadArray = {}));
