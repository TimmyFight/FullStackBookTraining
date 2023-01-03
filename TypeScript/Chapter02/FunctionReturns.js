var runMore = function (distance) {
    return distance + 10;
};
var sleepIn = function (hours) {
    console.log("I slept " + hours + " hours");
};
var eat = function (calories) {
    console.log("I ate " + calories + " calories");
};
var ate = eat(100);
console.log(ate);
var slept = sleepIn(7);
console.log(sleepIn);
console.log(runMore(15));
