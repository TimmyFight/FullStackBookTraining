let val: unknown = 22;
val = "It is a chain";
val = new Array();
if (val instanceof Array) {
  val.push(20);
}

console.log(val);
