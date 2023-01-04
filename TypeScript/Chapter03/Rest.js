function doSomething(a, ...otherParameters) {
  console.log(
    `First parameter: ${a} Rest: ${otherParameters} Last parameter: ${
      otherParameters[otherParameters.length - 1]
    }`
  );
}

doSomething(1, 2, 3, 4, 5, 6, 7, 8, 9);
