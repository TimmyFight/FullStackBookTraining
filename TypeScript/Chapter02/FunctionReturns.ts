const runMore = (distance: number): number => {
  return distance + 10
};

const sleepIn = (hours: number): void => {
  console.log("I slept " + hours + " hours");
};

const eat = (calories: number) => {
  console.log("I ate " + calories + " calories");
};

let ate = eat(100);
console.log(ate);
let slept = sleepIn(7);
console.log(sleepIn);

console.log(runMore(15));
