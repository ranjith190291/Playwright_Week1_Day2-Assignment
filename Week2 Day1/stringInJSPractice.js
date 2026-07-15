//String Literal compare both values and Datatypes

let companyName = "Infy"
let firmName = "Infy"
console.log(companyName === firmName); //true


//String Object compares the reference

let companyName1 = new String("Infy")
let firmName1 = new String("Infy")
console.log(companyName1 === firmName1); //false

console.log(companyName1 === companyName); //false "String Literal = String Object"

console.log(companyName1.toString() === firmName1.toString()); //true

//Length = To find out the length of the String

let orderSite = "Zomato"
console.log(orderSite.length);

//String Methods
//Escape Sequence \ \t (Space) \n (Nextline)

let sentence = 'it\'s my food' //it will return like "it's my food"
console.log(sentence);
let sentence1 = 'it\'s \tmy food' //it will return like "it's  my food"
console.log(sentence1);
let sentence2 = 'it\'s my \nfood' //Food will print in the next line

//charAt - Returns the character at the Specified Index

let course = "Playwright"
console.log(course.charAt(6)); //it will print 'r'

//IndexOf - Returns the Index of the given string

console.log(course.indexOf("g")) //7

//Substring - Returns a part of the string between the start and end Indexes.

console.log(course.substring(0,4)); //Play
console.log(course.substring(4,3)); //y
console.log(course.substring(4,-1)); //Play

//concat 
// "+" '${}

let i = "101"
let j = "Elephants"
console.log("There are" + " " + i +j); //There are 101Elephants
console.log(`There are ${i} ${j}`); //There are 101 Elephants

//Slice -> Extracts the position of the string  and it accepts Negative Value

let m = "Javascript"
console.log(m.slice()); //Javascript
console.log(m.slice(0,4)); //Java
console.log(m.slice(4,0)); //
console.log(m.slice(-1)); //t
console.log(m.slice(-10,-6)); //Java

//split()

console.log(m.split()); //[ 'Javascript' ]
console.log(m.split("")); // 'J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'
console.log(m.split("a")); // [ 'J', 'v', 'script' ]









