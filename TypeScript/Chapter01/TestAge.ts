interface User {
  name: string;
  age: number;
}

const canDrive = (user: User) => {
  console.log("User name: ", user.name);
  if (user.age >= 18) {
    console.log("Can drive a car");
  } else {
    console.log("Can NOT drive a car");
  }
}

const tom: User = {
  name: "Tom",
  age: 22,
}

canDrive(tom);
