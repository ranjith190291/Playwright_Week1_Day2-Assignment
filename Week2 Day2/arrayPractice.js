//Array Practice

//Default sort()-converts the numbers into string and then compares using ascii value/unicode

let arr1 = [3,6,2,8]
console.log(arr1.sort());

let arr2=[2,100,20]
console.log(arr2.sort())//[ 100, 2, 20 ]

let arr3=[true, "welcome",45] //ascii value for t=116, w-119,4=52
console.log(arr3.sort());//[ 45, true, 'welcome' ]

//ascending and descending using arrow function

let arr4 = [4,2,5,9,7]
console.log(arr4.sort((a,b)=>a-b)); //ascending order [ 2, 4, 5, 7, 9 ]
console.log(arr4.sort((a,b)=>b-a)); //descending order

//reverse() > reverse the array

let rev = [2,3,4,5,6,7]
console.log(rev.reverse()); //[ 7, 6, 5, 4, 3, 2 ]

//Join() => Converts array into String

let jo = [5,4,7,8]
console.log(jo.join('-')); // 5-4-7-8

//spread operator (joins 2 arrays)

let spr1 = [3,4,6]
let spr2 = [4,9,8]
let spread = [... spr1, ...spr2]
console.log(spread); // [ 3, 4, 6, 4, 9, 8 ]

//includes=> to check the element is present in the array.

console.log(rev.includes(6)); // true
console.log(rev.includes(1)); // false


//for_of-> loops through the value

let fo = [2,7,86,4,0]
for(let lp of fo){
    console.log(lp);
    
}

/* O/p of for_of 

2
7
86
4
0 */



