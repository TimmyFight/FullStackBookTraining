const oldEnough = (age: number): never | boolean => {
  if (age > 59) {
    throw Error('Age must be greater than 59');
  } else if (age <= 18) {
    return false;
  }
  return true;
}

console.log(oldEnough(18));
