//Array: 

//An array in JS is data structure to store multiple values of any type aunder a single name, including number ,string, array and objects.
//An array is a collection of items stored at a contiguous memory location.
//An array is a zero-indexed meaning it starts from index( 0 ).


//How to create an array :
//let numArray = [1,2,3,45,5,10];
//console.log(numArray);   //[ 1, 2, 3, 45, 5, 10 ]
//console.log(typeof numArray); //

//let randomArray = ["Akash", "kar",24];
//console.log(randomArray);    //[ 'Akash', 'kar', 24 ]
//console.log(randomArray.length);  //3
//console.log(randomArray[0]);    //Akash

//optimize way:
//print me the last value of randomArry
//console.log(randomArray[randomArray.length - 1]);

//Modify the element:
//randomArray[1] = "Prakash";
//console.log(randomArray);


//array methods:

//push method:
//The push() method adds one more elements to the end of an array and returns the new length of the array.
let bikes = ["Pulsar","Ninja","Ktm","Truiumph","Harley"];
console.log(bikes);

bikes.push("Beneli");
console.log(bikes);

//pop method:
//The pop() method removes the last element from an array an returns that elemnet.This method changes the length of the array.
console.log(bikes.pop());  //Beneli
console.log(bikes);   //[ 'Pulsar', 'Ninja', 'Ktm' ]


let fruits = ["apple", "banana", "mango"];
fruits.push("orange");
console.log(fruits);  //[ 'apple', 'banana', 'mango', 'orange' ]

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.pop());  //5
console.log(numbers);  //[ 1, 2, 3, 4 ]

let stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
console.log(stack);  //[ 1 ]

let letters = ["a", "b"];
letters.push("c", "d");
let lastLetter = letters.pop();
console.log(letters);    //[ 'a', 'b', 'c' ]
console.log(lastLetter); //d

let myArray = [10, 20, 30];
myArray.push(40);
console.log(myArray.pop());     //Ans-40
console.log(myArray);          //Ans-[ 10, 20, 30 ]

let numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1.length);   //Ans-5


//unshift method:
//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

bikes.unshift("Yamaha");
console.log(bikes);

//Shift method:
//The Shift 
console.log(bikes.shift());
console.log(bikes);

//Slice method:
//The slice() method extracts a part of an array and returns the extracted part in a new array.

console.log(bikes.slice(1, 3));     //[ 'Ninja', 'Ktm' ]
console.log(bikes.slice(0,4));      //first index include and last index wont include.

//splice method:
//The splice() method adds/removes items to/from an array, and returns the removed item(s).
//The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

//console.log(bikes.splice(0, 4));    //start:the index at which u need to change the array
//delecount:The numbers you want to delete
//end: the index at which you need to stop changing the array.

//console.log(bikes.splice(0, 3));
console.log(bikes.splice(1, 4));

//Adding element using splice method:
bikes.splice(1, 0, "Kawasaki");
console.log(bikes);