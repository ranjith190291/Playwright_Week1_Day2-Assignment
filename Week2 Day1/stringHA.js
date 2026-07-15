//Home Assignment => String

//Example 1 => To print the last word and the length of Last word

let s = "Hello World"
let lastWord = s.substring(6,11); // To get the Last word "World"
console.log("The Last word is" + " " + lastWord + " " + "and the Length is " + lastWord.length);  // Print "The Last word is World and the Length is 5"


//Example 2

let s1 = " fly me  to  the moon "
let s2 = s1.trim();
console.log(s2); //it will remove the leading and trailing spaces

let s3 = s2.substring(16,21)
console.log(s3); //moon

console.log("The Last word is " + s3 + " and the length is " + s3.length); //  Print "The Last word is moon and the length is 4"

//Another way to execute for Example 2

let str1 = " fly me  to  the moon "

let str2 = str1.split(" ")
console.log(str2);

let str3 = str2.slice(7,8)
console.log(str3);

let str4 = str3[0]
console.log(str4);

console.log("The Length of the Last word is " + str4.length);


//Example 3 => To Check of two strings are Anagrams

function isAnagram(anag1, anag2) {
    
    anag1 = anag1.split("").sort().join("")
    anag2 = anag2.split("").sort().join("")
    return anag1===anag2
}

console.log(isAnagram("listen","silent")); //true
console.log(isAnagram("hello","world")); //false






