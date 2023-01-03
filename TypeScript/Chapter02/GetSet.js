var Speaker = /** @class */ (function () {
    function Speaker(name) {
        this.name = name;
    }
    Object.defineProperty(Speaker.prototype, "Message", {
        get: function () {
            if (!this.message.includes(this.name)) {
                throw Error("Name of user is not available");
            }
            return this.message;
        },
        set: function (value) {
            var tmpMessage = value;
            if (!value.includes(this.name)) {
                tmpMessage = this.name + " " + value;
            }
            this.message = tmpMessage;
        },
        enumerable: false,
        configurable: true
    });
    return Speaker;
}());
var speaker = new Speaker("Tom");
speaker.Message = "Hello";
console.log(speaker.Message);
