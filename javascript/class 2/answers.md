1- Print your birthday in the console using the Date object.
ans-  
let birthday = new Date("2000-05-08");
let day = birthday.getDate();
let month = birthday.getMonth();
let year = birthday.getFullYear();
console.log("My birthday is on:" + day + "-" + month + "-" + year);

output-My birthday is on:8-4-2000

2- Print the current time in the console using the Date object.
ans-
let myDate1 = new Date();
console.log(myDate1.toTimeString());

output-23:55:11 GMT+0530 (India Standard Time)

3-Print your current age in the console using the Date object.
ans-

output-

4-What does the push method do in JavaScript arrays?
ans- The push() method adds one more elements to the end of an array and returns the new length of the array.
ex-
let bikes = ["Pulsar","Ninja","Ktm"];
bikes.push("Beneli");
console.log(bikes);

5-What does the pop method do in JavaScript arrays?
ans-The pop() method removes the last element from an array an returns that elemnet.This method changes the length of the array.
ex-
let bikes = ["Pulsar","Ninja","Ktm"];
console.log(bikes.pop()); //Beneli
console.log(bikes); //[ 'Pulsar', 'Ninja', 'Ktm' ]

6-Given the array let fruits = ["apple", "banana", "mango"];, what will be the result of fruits.push("orange");?
ans-
let fruits = ["apple", "banana", "mango"];
fruits.push("orange");
console.log(fruits); //[ 'apple', 'banana', 'mango', 'orange' ]

7-Given the array let numbers = [1, 2, 3, 4, 5];, what will let last = numbers.pop(); do?
ans-
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.pop()); //5
console.log(numbers); //[ 1, 2, 3, 4 ]

8-let stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
console.log(stack); //Ans-[ 1 ]

9-let letters = ["a", "b"];
letters.push("c", "d");
let lastLetter = letters.pop();
console.log(letters); //Ans-[ 'a', 'b', 'c' ]
console.log(lastLetter); //Ans-d

10-How can you check the length of an array after using push or pop?
ans-
let numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1.length);   //Ans-5

11-let myArray = [10, 20, 30];
myArray.push(40);
console.log(myArray.pop());     //Ans-40
console.log(myArray);          //Ans-[ 10, 20, 30 ]



Dt-22/05/24
Exercise 1: Manipulate an Array

Create an array of numbers.
Add a number to the end.
Remove the first number.

Ans-
let myArray2 = [1,2,3,4,5,6];
//console.log(myArray2);   //[ 1, 2, 3, 4, 5, 6 ]
//myArray2.pop();          //[ 1, 2, 3, 4, 5 ]
myArray2.shift();          //[ 2, 3, 4, 5, 6 ]
console.log(myArray2);