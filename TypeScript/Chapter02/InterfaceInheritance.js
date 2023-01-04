var InterfaceNamespace;
(function (InterfaceNamespace) {
    var Motorcycle = /** @class */ (function () {
        function Motorcycle(name) {
            this.name = name;
        }
        Motorcycle.prototype.updateNumberOfWheels = function (newNumberOfWheels) {
            this.numberOfWheels = newNumberOfWheels;
            console.log("Number of wheels updated to: " + this.numberOfWheels);
        };
        Motorcycle.prototype.showNumberOfWheels = function () {
            console.log("Number of wheels: " + this.numberOfWheels);
        };
        Motorcycle.prototype.getFullName = function () {
            return "MC-" + this.name;
        };
        return Motorcycle;
    }());
    var motor = new Motorcycle("small-motorcycle");
    console.log(motor.getFullName());
})(InterfaceNamespace || (InterfaceNamespace = {}));
