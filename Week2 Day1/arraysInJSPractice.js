//Arrays => Collection of Heterogeneous DataTypes
//push(), pop(), shift(), unshift(), slice(), splice()

//Index > Starts from 0
//length > It is a property and starts from 1

let array = ["Ran", "Lav", "Mittu"]
console.log(array); // [ 'Ran', 'Lav', 'Mittu' ]
console.log(array[2]); // Mittu
console.log(array.length); //3

array[3] = "DR"
array[4] = "Selva"
console.log(array); // [ 'Ran', 'Lav', 'Mittu', 'DR', 'Selva' ]
console.log(array.length); //5

//Push() > Adds one or more elements at the end of array

console.log(array.push("Din","Taru")); //7
console.log(array); // [ 'Ran', 'Lav', 'Mittu', 'DR', 'Selva', 'Din', 'Taru' ]

//pop() > Remove only 1 element at the end of array

console.log(array.pop()); // Taru
console.log(array); // [ 'Ran', 'Lav', 'Mittu', 'DR', 'Selva', 'Din' ]

//unshift() > Add 1 or more elements at the start of the array

console.log(array.unshift("Taru",123));
console.log(array);

//shift() > Remove 1 element at the start of array

console.log(array.shift()); //Taru
console.log(array); // [123, 'Ran', 'Lav', 'Mittu', 'DR',  'Selva', 'Din']

//slice() => Extracts the portion of the array and it will not alter the original array

console.log(array.slice(0,2)); // [ 123, 'Ran' ]
console.log(array); // [123, 'Ran', 'Lav', 'Mittu', 'DR',  'Selva', 'Din']

//splice() => Add or remove the elements and also it will modify the Original array

console.log(array.splice(0,1,"Taru")); // [ 123 ]
console.log(array); // ['Taru', 'Ran', 'Lav', 'Mittu', 'DR',  'Selva', 'Din']














