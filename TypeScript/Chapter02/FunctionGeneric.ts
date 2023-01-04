// const getLength = <Type, > (arg: Type): number => {
//   if(arg.hasOwnProperty("length")) {
//     return arg["length"];
//   }
//   return 0;
// }

// console.log(getLength<number>(22));
// console.log(getLength("Hello World!"));

interface HasLength {
  length: number;
}

const getLength = <T extends HasLength> (arg: T): number => {
  return arg.length;
}

// console.log(getLength<number>(22));
console.log(getLength("Hello World!"));
