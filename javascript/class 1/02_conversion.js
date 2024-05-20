//number:

let num1 = 100;
let num2 = 200;
console.log("Num1",num1);
console.log("Num2",num2);   //tradition method
console.log(typeof num1);
//using bacticks
console.log(`Num1 ${num1} and Num2 ${num2}`);

//Number to string conversion :

let conversion_num1 = String(num1);
console.log(typeof conversion_num1);   //String

//String to Number conversion :

let conversion_num2 = Number(num1);
console.log(typeof conversion_num2);   //Number

let con_num1 = "100"
let con_num2 = "200"
console.log(typeof con_num1);
console.log(typeof con_num2);

//without using constructor function we can convert
console.log(typeof +con_num1);
console.log(typeof +con_num2);

