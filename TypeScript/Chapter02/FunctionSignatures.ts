type Run = (miles: number) => boolean;

const runner: Run = (miles: number): boolean => {
  if (miles < 10) {
    return false;
  } else {
    return true;
  }
};

console.log(runner(9));
