//Reverse the String

let string="TESTLEAF"
let reverseString=""
for (let i=string.length-1; i>=0; i--) {
    reverseString = reverseString+string[i];
}
console.log(reverseString);
