
let a=10;

//Addition +
console.log(a+5);

//Subtraction -
console.log(a-2);

//Multiplication *
console.log(a*4);

//Division /   => It will print the quotient
console.log(a/3);

//Modulus %    => It will print the reminder
console.log(a%3);

//Increment ++ => Post Increment
console.log(a++);
console.log(a);

//Increment ++ => Pre Increment
console.log(++a);
console.log(a);

//Decrement    => Pre Decrement
console.log(--a);
console.log(a);

//Decrement    => Post Decrement
console.log(a--);
console.log(a);

//Assignment Operators +=, -=, *=, /=, %=, **=
console.log(a+=5);
console.log(a-=5);
console.log(a*=5);
console.log(a/=5);
console.log(a%=4);
console.log(a**=5);


//Comparison Operators
//Loose Equality => Compares only the Value

console.log(5==5);
console.log(5=="5");
console.log(5==true);
console.log(5==false);
console.log(0==false);
console.log(1==true);

//Strict Equality => Compares both the value and Datatype

console.log(5===5);
console.log(5==="5");
console.log(5===true);
console.log(5===false);
console.log(0===false);
console.log(1===true);

console.log("");

//For Loop  => When we know the count
console.log("For Loop");

for (let i = 0; i < 5; i++) {
    console.log(i);
}


console.log("");
//While Loop => When we are not sure about the count
console.log("While Loop");

let i=3
while (i<=10) {
    console.log(i);
    i++
}

