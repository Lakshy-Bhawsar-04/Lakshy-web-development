// let 

{
    let a = 10;
    console.log(a);
    a = 3;
    console.log(a);
}

let a = 34;
console.log(a);


{
    const c = 4;
    console.log(c)
}

const c = 56;
console.log(c);



// arrow function

const greet = (name) => {
    console.log("hello", name)
}

greet("Lakshy");

const add = (a, b) => {
    return a + b
}

console.log(add(3, 4));


const aos = side => side * side;
console.log(aos(7));


// rest  operator -

let arr = [10, 20, 30];
let newArr = [2, 4, 5, ...arr];

// let newArr = [2,4,5];
// newArr.push(arr)

console.log(arr);
console.log(newArr);


//spread operator

let data = [1001, "Lakshy Bhawsar"];

let orderDetails = [...data, "Smart Watch", 3000, "4/9/26", "8/10/27"];

console.log(data);
console.log(orderDetails);

// template literals

city = "Indore";
location = "Navlakha Sajan Nagar";

let tem = "Welcome in " + location + " at " + city;
let tem2 = `Welcome in "${location}" at ${city}`

console.log(tem);
console.log(tem2);

// Destructuring Assignment

let dataNew = [1054,"Lakshy Bhawsar","IPhone 18 PRO",250000,"5/11/26","10/11/26"];

console.log(dataNew);

let [idNew,namenew,product,price,orderdate,delDate]=dataNew;

console.log(idNew)
console.log(namenew)
console.log(product)
console.log(price)
console.log(orderdate)
console.log(delDate)


var udata = {id:2323,name:"Virat Kohli",dob:"5/11/1988"}

let {id,name,dob}=udata;

console.log(id)
console.log(name)
console.log(dob)


// Default Parameters

const Hello=(name="LAK")=>{
    console.log(`hello ${name}`)
}
Hello()
Hello("RAM")


//Enhanced Object Literals

let prod = {
    id:234356,
    name:"Men Shirt",
    price:799,
    allInfo:function(){return this.id+","+this.name+","+this.price}
}

console.log(prod);
console.log(prod.allInfo())