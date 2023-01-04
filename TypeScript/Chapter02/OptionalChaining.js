var OptionaChainingNS;
(function (OptionaChainingNS) {
    var _a;
    var Automobile = /** @class */ (function () {
        function Automobile(wheels) {
            this.wheels = wheels;
        }
        return Automobile;
    }());
    var car = new Automobile({
        count: undefined
    });
    console.log("Auto", car);
    console.log("Informations about wheels: ", car === null || car === void 0 ? void 0 : car.wheels);
    console.log("Number of wheels: ", (_a = car === null || car === void 0 ? void 0 : car.wheels) === null || _a === void 0 ? void 0 : _a.count);
})(OptionaChainingNS || (OptionaChainingNS = {}));
