/* Blocked scope 
function scope
Global scope */

/* let browserName="chrome"
function invokeBrowser() {
let browser="chrome"
if (browser=="chrome") {
    var browserName = "Edge"
    console.log("The browser inside the IF block is",browserName);
}
console.log("The browser Outside the IF block is",browserName);
}
console.log("The browser Outside the Function is",browserName);
invokeBrowser()
*/

//Global Variable
let genderType = "male"

//Function Declaration 
function printGender() {
    let color = "brown"

//If Condition
    if (genderType=="male") {
        var age=30
        let color="Pink"
        console.log("The Color inside the block is",color);  //Should print Pink
    }
    console.log("The Value of age is",age); //Should print 30
    console.log("The Color outside the block is",color); //Should print brown       
}

//Call the Function
printGender()
console.log("The Global Gender Type is",genderType); //Should print gender type Male

//Change the gendertype and validate
genderType = "female"
printGender()
console.log("The Global Gender Type is",genderType); //Should print gender type Female



