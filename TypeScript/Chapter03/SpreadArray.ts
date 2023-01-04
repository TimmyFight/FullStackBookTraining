namespace SpreadArray {
  const a = [1, 2, 3, 4];
  const b = [5, 6, 7, 8];

  const c = [...a, ...b];
  const d = a.concat(b);
  console.log('Array c before changing a', c);
  console.log('Array s before changing a', d);

  a.push(10);
  console.log('Array a', a);
  console.log('Array c after changing a', c);
  console.log('Array s after changing a', d);
}
