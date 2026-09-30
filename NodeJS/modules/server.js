//import user defined module

const myFunc = require("./twoDArea");

const user = require("./user")

console.log("areaOfSquare(20)=", myFunc.areaOfSquare(20));
console.log("areaOfRectangle(23,34)=", myFunc.areaOfRectangle(23, 34));
console.log("areaOfParallelogram(18,14)=", myFunc.areaOfParallelogram(18, 14));
console.log("areaOfTrapezoid(4,6,7)=", myFunc.areaOfTrapezoid(4, 6, 7));
console.log("areaOfTriangle(9,8)=", myFunc.areaOfTriangle(9, 8));
console.log("areaOfCircle(5)=", myFunc.areaOfCircle(5));
console.log("areaOfEllipse(23,20)=", myFunc.areaOfEllipse(12, 20));



info = {
    username: "Lakshy",
    password: 92920
}


console.log(user.signup({ username: "", password: "" }))  