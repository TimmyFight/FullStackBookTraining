// const getLength = <Type, > (arg: Type): number => {
//   if(arg.hasOwnProperty("length")) {
//     return arg["length"];
//   }
//   return 0;
// }
var getLength = function (arg) {
    return arg.length;
};
// console.log(getLength<number>(22));
console.log(getLength("Hello World!"));
