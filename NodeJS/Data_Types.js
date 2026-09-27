//Data_Types in JavaScript

// 1. Primitive 

//Number:
let a = 10;
console.log(a);
console.log(typeof a);

a= 34.4;
console.log(a);
console.log(typeof a);

//String:
let str = "Lakshy Bhawsar";
console.log(str);
console.log(typeof str);

// Undefined:
let undf;
console.log(undf);
console.log(typeof undf);

//Symbol:
let sym = Symbol("$");
console.log(sym);
console.log(typeof sym);

//BigInt:
let bigvalue = 21494790241947907901247124709347902350790379039075039572903n;
console.log(bigvalue);
console.log(typeof bigvalue);

//Boolean:
let bool = true;
console.log(bool);
console.log(typeof bool);

//Null:
let x = null;
console.log(null);
console.log(typeof x);

// 2.non-primitive:
//object:

let obj = {id:101,name:"Lakshy Bhawsar",mobile:9392929220,address:"Navlakha Sajan Nagar"};
console.log(obj);
console.log(obj.name)
console.log(typeof obj);


//Arrays:

let arr = [18,"Virat Kohli","India","50 ODI Hundred"];
console.log(arr);
console.log(arr[2]);
console.log(typeof arr);

//Function:

const add=(a,b)=>{
    return a+b;
}
console.log(add(3,4));
console.log(typeof add);

//Date:

let d = new Date();
console.log(d);
console.log(typeof d)

//Regular expression:

let regex = /^[A-Za-z0-9]+$/;
console.log(regex);
console.log(typeof regex);