//Operators in JavaScript

// Unary Operators  ->  ++ , --

let a = 10;
console.log("value of a = ", a);
console.log("PreIncrement value of ++a = ", ++a);
console.log("PostIncrement value of a++ = ", a++);
console.log("value of a = ", a);

let b = 10;
console.log("value of b = ", b);
console.log("Predecrement value of --b = ", --b);
console.log("Postdecrement value of b-- = ", b--);
console.log("value of b = ", b);

//Binary Operators ->
// Arithmetic Operators -> +,-,*,**,/,%

let u = 4, v = 3;
console.log("value of u+v = ", u + v);
console.log("value of u-v = ", u - v);
console.log("value of u*v = ", u * v);
console.log("value of u**v = ", u ** v);
console.log("value of u/v = ", u / v);
console.log("value of u%v = ", u % v);


//Rational Operators   < , > , <= , >= , == , === , != , !==

let x = 2, y = 3;
console.log("value of x<y = ", x < y);
console.log("value of x>y = ", x > y);
console.log("value of x<=y = ", x <= y);
console.log("value of x>=y = ", x >= y);
console.log("value of x==y = ", x == y);
console.log("value of x===y = ", x === y);
console.log("value of x!=y = ", x != y);
console.log("value of x!==y = ", x !== y);

// Logical Operators -> &&,||,!

let p = 23, q = 34, r = 67;
if (p > q && p > r) {
    console.log("p is greater =", p);
}
else if (q > p && q > r) {
    console.log("q is greater =", q);

}
else {
    console.log("r is greater =", r);
}


let busPass = "Yes" , ticket = "No";
if(busPass==="Yes" || ticket === "Yes"){
    console.log("You are eligible for traveling");
}
else{
    console.log("You are not eligible for traveling")
}


let password = "1234";

if(password != "lakshy03"){
    console.log("password is incorrect")
}
else{
    console.log("password is correct")
}

// Bitwise Operators ->  &,|,~,^,<<,>>,>>>

let m=1,n=2;
console.log("m&n = ",m&n);
console.log("m|n = ",m|n);
console.log("~m = ",~m);
console.log("~n = ",~n);
console.log("m^n = ",m^n);
console.log("m<<n = ",m<<n);
console.log("m>>n = ",m>>n);
console.log("m>>>n = ",m>>>n);

// Assignment Operators -> =, +=, -=, *=, **=, /=, %=
let c=2;
console.log("value of c = ",c);

c+=7;
console.log("value of c +=7 = ",c);
c-=5;
console.log("value of c -=5 = ",c);
c *=2;
console.log("value of c *=2 = ",c);
c**=2;
console.log("value of c **=2 = ",c);
c/=4;
console.log("value of c /=4 = ",c);
c%=2;
console.log("value of c %=2 = ",c);

