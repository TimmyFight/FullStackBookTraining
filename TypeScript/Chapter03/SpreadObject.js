var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var SpreadObject;
(function (SpreadObject) {
    var A = /** @class */ (function () {
        function A() {
            this.aname = "A";
        }
        return A;
    }());
    var B = /** @class */ (function () {
        function B() {
            this.bname = "B";
        }
        return B;
    }());
    var a = new A();
    var b = new B();
    var c = __assign(__assign({}, a), b);
    var d = Object.assign(a, b);
    console.log("By spread operator: ", c);
    console.log("By assign: ", d);
    a.aname = 'a1';
    console.log("After changed a.aname. By spread operator: ", c);
    console.log("After changed a.aname. By assign: ", d);
})(SpreadObject || (SpreadObject = {}));
