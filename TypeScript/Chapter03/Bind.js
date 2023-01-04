var A = /** @class */ (function () {
    function A() {
        this.name = "A";
    }
    A.prototype.write = function () {
        console.log("Class A, this.name: ", this.name);
    };
    return A;
}());
var B = /** @class */ (function () {
    function B() {
        this.name = "B";
    }
    B.prototype.write = function () {
        console.log("Class B, this.name: ", this.name);
    };
    return B;
}());
var a = new A();
a.write();
var b = new B();
b.write = b.write.bind(a);
b.write();
