//Date:

let myDate = new Date();
console.log(myDate);   //2024-05-21T09:44:04.674Z
console.log(myDate.toDateString()); //Tue May 21 2024
console.log(myDate.toLocaleString());  //21/5/2024, 3:16:41 pm
console.log(myDate.toLocaleDateString());  //21/5/2024
console.log(myDate.toTimeString());   //15:18:04 GMT+0530 (India Standard Time)

//console.log(new Date("01-05-2024"));
//console.log(myDate("01-05-2024"));
//console.log(Date.now());
let myStamp = Date.now();
console.log(myStamp);

/*let birthday = new Date("2000-05-08");
let day = birthday.getDate();
let month = birthday.getMonth();
let year = birthday.getFullYear();
console.log("My birthday is on:" + day + "-" + month + "-" + year);*/

let myDate1 = new Date();
console.log(myDate1.toTimeString()); 

//let myDob = new Date();
//console.log(new Date("08-05-2000"));


let currentDate = new Date(2024-5-22);

let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let birthday = new Date("2000-05-08");

let day = birthday.getDate();
let month = birthday.getMonth();
let year = birthday.getFullYear();
console.log("My birthday is on:" + day + "-" + month + "-" + year);