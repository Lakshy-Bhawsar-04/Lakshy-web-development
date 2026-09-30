//Find Even numbers: 

let arr =  [2,,5,7,9,8,4,3,6];

for(let i = 0; i<arr.length; i++){
    if(arr[i]%2==0){
        // console.log(`${arr[i]} is Even`);
        console.log(arr[i] ,"is Even");
    }
}

//Find sum of numbers

let arr1 = [2,3,56,6,23,53,8];
let sum = 0;

for(let i = 0;i<arr1.length;i++){
    sum = sum + arr1[i];
}
console.log("Sum is :",sum);