var linda = {
    name: 'Linda',
    id: 1,
    isMenager: false,
    getUniqueID: function () {
        var uniqueId = linda.id + "-" + linda.name;
        if (!linda.isMenager) {
            return "wrk-" + uniqueId;
        }
        return uniqueId;
    }
};
console.log(linda.getUniqueID());
var pamela = {
    name: 'Pamela',
    id: 2,
    isMenager: true,
    getUniqueID: function () {
        var uniqueId = pamela.id + "-" + pamela.name;
        if (pamela.isMenager) {
            return "mng-" + uniqueId;
        }
        return uniqueId;
    }
};
console.log(pamela.getUniqueID());
