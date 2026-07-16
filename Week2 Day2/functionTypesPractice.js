//Callback Function => One function is passing an argument for the another function

function Add(a,b,Callback) {   //Parameters

    let addition = a+b
    console.log("The Sum of the value is ", addition);
    Callback(addition)  //Argument to Sub function
    
}

function Sub(c) {  //Parameter Sub

    console.log("The Substraction of the value is ", c-1);
    
    
}
Add(2,4,Sub)  //Arguments


//Arrow function

const funcArrow = (a,b)=>a-b
console.log(funcArrow(4,2));

//Square the value

const square = (num)=>num*num
console.log(square(3));


//function expression/Anynomous function

let funExp=function(){
console.log("This is an function expression");

}
funExp()


//Named function or function declaration

function sum(a1,b1){

    let c1 = a1+b1
    return c1;

}

console.log(sum(3,4));
