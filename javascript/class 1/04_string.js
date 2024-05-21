//string :
let name1 = "Akash";
let name2 = "kar";
let sentence = "He is a good boy";

//empty string " "
console.log(name1 +" "+name2 +"\n" + sentence );

//charAt() : Function
//it return the character at the specified index in a string.

console.log(sentence.charAt(1));
console.log(sentence.charAt(10));

//length :
console.log(sentence.length);
let lengthCheck = "lorem iidsxbwicbwkcbwdkcbdk isclnswcdwbck isosanlaksnxkjdsc sisi";
console.log(sentence.lengthCheck);

//split :
//console.log(sentence.split(" "));
console.log(sentence.toUpperCase()); //HE IS A GOOD BOY
console.log(lengthCheck.trim());
console.log(lengthCheck);


//valueof :
let stringObj = new String('foo');

console.log(stringObj.valueOf());

//toString :
let stringObj2 = new String('akash');
console.log(stringObj2.toString());

//substring()
let str = 'Akash';
console.log(str.substring(3));

//concat :
let str1 = 'Hello';
let str2 = 'World';

console.log(str1.concat(' ', str2));

//endsWith() :
let str3 = 'Is this a question?';

console.log(str3.endsWith('a'));
console.log(str3.endsWith('question?'));

//replace() :
let paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", 'Akash'));

//slice( ):
let str4 = 'The quick brown fox jumps over the lazy dog.';

console.log(str4.slice(15));