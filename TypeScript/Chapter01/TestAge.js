var canDrive = function (user) {
    console.log("User name: ", user.name);
    if (user.age >= 18) {
        console.log("Can drive a car");
    }
    else {
        console.log("Can NOT drive a car");
    }
};
var tom = {
    name: "Tom",
    age: 22
};
canDrive(tom);
