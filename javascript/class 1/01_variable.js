//declare a variable
let num = 100;
console.log(num)  //to print the output


let Num = 50;
console.log(Num);

//let second num = 1000;

let second_num = 1000;   //second_num(snakeCase)
console.log(second_num);

let secondNum = 1000;   //second_num(camelCase)
console.log(secondNum);

let decimal_num = 18.35;
console.log(decimal_num);

console.log(typeof decimal_num);

//task:
//task1 : declare a variable and assign a value to it.
//task2 : declare different variable of numbers nd assign different values to perform mathematical operations. 
//eg- +,-,*,/ and modulus.

//task-1:

let Third_num = 1200;
console.log(Third_num);

console.log(typeof Third_num)

//task-2:

let num1 = 10;
let num2 = 20;
let addition = num1 + num2;
console.log(addition);

let num3 = 10;
let num4 = 20;
let substraction = num3 - num4;
console.log(substraction);

let num5 = 10;
let num6 = 20;
let multiplication = num5 * num6;
console.log(multiplication);

let num7 = 10;
let num8 = 40;
let divide = num7 / num8;
console.log(divide);

let num9 = 10;
let num10 = 40;
let modulus = num9 % num10;
console.log(modulus);


//Answers
/*PS E:\Web_Bocket-Inetrnship\javascript\class 1> node .\01_variable.js    
100
50
1000
1000
18.35
number
1200
number
30
-10
200
0.25
10
PS E:\Web_Bocket-Inetrnship\javascript\class 1> */

//string:

//string is a collection of characters.
//string should be "------". 

let name = "Akash";
console.log("My name is:", name);

//using backtick ``;
console.log(`My name is : ${name}`);
console.log(typeof name);

//fun fact:

let numbers = "1000"; //let,var,const(keyword), =(assign operator), "1000"(value);
let strings = 1000;

console.log(typeof numbers);
console.log(typeof strings);


//bigInt :
//BigInt is a n new datatype in javascript that can be represents integers in any size.It is used to tahtare too large or small.
let BigInt = 1000000000000000000;
console.log(BigInt);

//null :
let result = null;   //null : void/empty;
console.log(result);
console.log(typeof result);


//undefined :
//let value = undefined;
let value;
console.log(value);
console.log(typeof value);

//boolean :

let isMarried = false;
console.log(typeof isMarried);  //boolean
console.log(!isMarried);

//symbol :
//symbol is a data types in js to produce unique key values and its is introduced in Es6.
//It is used to create unique identifiers for objects.


let symbol1= symbol("abc");
let symbol2 = symbol("def");
console.log(symbol1 === symbol2);


//Nan :
//Nan is a datatype in js that represtents a no numeric value.
//NaN is a special value that represents an invalid number.

let num_values1 = 100;
let num_values2 = "150";

console.log(num_values1  + num_values2);

let output = 0/0;
console.log(output);//NaN(not a number)