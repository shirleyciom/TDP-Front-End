/*
    ? OBJECTS, ARRAYS and JSON
*/

// ! OBJECTS
// * collection of data
// * in any order
// * made up of key : value pairs

let animal = new Object();

animal[`name`] = `Clifford`;
animal[`type`] = `dog`;
animal[`size`] = `big`;

console.log(animal.size);

// you can expand objects with new properties whenever you like

animal.colour = `red`;

console.log(animal.colour);

console.log(animal);

// ? Literal notation 
// quicker and easier

let vehicle = {
    "type" : "bike",
    "seats" : 1,
    "wheels" : 2
}

console.log(vehicle);
console.log(vehicle.type);

// ! ARRAYS
// objects can be stored in an array
// making an array using literal notation

let garage = [
    vehicle,
    {"type":"car","seats":5,"wheels":4}
]

console.log(garage);

// ? To iterate over an array

let x = [`a`,`b`,`c`,`d`,`e`];

// the normal way is using a standard FOR loop

for (let i = 0; i < x.length; i++) {
    //console.log(x[i]);
}

// using an ENHANCED for loop

for (let item of x) {
    console.log(item);
}

// ? ARRAY OBJECT METHODS
// some methods that you can use with arrays to carry out functionality 

// reverse
console.log( x.reverse() );

// join
// converts array to string joined by argument string
console.log( x.join(`.><.`) );

// ! JSON
// LITERAL notation for Objects
// JavaScript Object Notation

let newJSON = {
    "name" : "Cameron",
    "age" : 28
}

// ? JSON to string
let str = JSON.stringify(newJSON);
console.log(str);

// ? string to JSON
let unSTR = JSON.parse(str);
console.log(unSTR);