var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractNamespace;
(function (AbstractNamespace) {
    var Vehicle = /** @class */ (function () {
        function Vehicle(numberOfWheels) {
            this.numberOfWheels = numberOfWheels;
        }
        Vehicle.prototype.showNumberOfWheels = function () {
            console.log("Number of wheels in the vehicle: ".concat(this.numberOfWheels));
        };
        return Vehicle;
    }());
    var Motorcycle = /** @class */ (function (_super) {
        __extends(Motorcycle, _super);
        function Motorcycle() {
            return _super.call(this, 2) || this;
        }
        Motorcycle.prototype.updateNumberOfWheels = function (newNumberOfWheels) {
            this.numberOfWheels = newNumberOfWheels;
            console.log("Motorcycle has: ".concat(this.numberOfWheels, " wheels now"));
        };
        return Motorcycle;
    }(Vehicle));
    var Automobile = /** @class */ (function (_super) {
        __extends(Automobile, _super);
        function Automobile() {
            return _super.call(this, 4) || this;
        }
        Automobile.prototype.updateNumberOfWheels = function (newNumberOfWheels) {
            this.numberOfWheels = newNumberOfWheels;
            console.log("Auto has: ".concat(this.numberOfWheels, " wheels now"));
        };
        Automobile.prototype.showNumberOfWheels = function () {
            console.log("Number of wheels in the auto: ".concat(this.numberOfWheels));
        };
        return Automobile;
    }(Vehicle));
    var motorcycle = new Motorcycle();
    motorcycle.updateNumberOfWheels(1);
    var auto = new Automobile();
    auto.showNumberOfWheels();
    auto.updateNumberOfWheels(3);
})(AbstractNamespace || (AbstractNamespace = {}));
