/*
    VARIABLES and DATA TYPES

    * types in JavaScript are dynamic and mutable
    * they are decided at runtime
    * they are stored in memory as plaintext
    
    ? Variables
    * 'let' is your standard variable
    * 'const' is a constant
    * 'var' is the old way of declaring variables
    ! var is depreciated
    * we use camelCase for naming
    * sometimes preceding a variable is an underscore _ or a dollar sign $
    
    ? Data Types
    * two 'types' of types
    * primatives and objects
    
    * objects have object
    * primatives have boolean, number, string, null, undefined, bigint, symbol 

*/

let myBoolean = true;
console.log(myBoolean);

let myNumber = 4;
console.log(myNumber);

let myString = `this is a string`;
console.log(myString);

let myBigInt = 9999999999999999n; // ? this is a numeric literal
console.log(myBigInt);

let myBrokenBigInt = 9999999999999999;
console.log(myBrokenBigInt);

let mySymbol = Symbol(`description of symbol`);
console.log(mySymbol);

let myNull = null;
console.log(myNull);

let myUndefined;
console.log(myUndefined);

/*
    * null and undefined are different
    * null is EMPTY
    * undefined has not been initialised (no real value)
*/

console.log(typeof(myNull));
console.log(typeof(myUndefined));

// ? OBJECTS

// collection of properties
// mutable

let myObject = {
    key : `value`,
    a : `b`
}

// made up of key : value pairs

console.log(myObject);

// ? STRING CONCATENATION
// * joining strings end-to-end
// * it is memory intensive because you create multiple strings!

let stringOne = `41 + 13 = `;
let result = 41 + 13;
console.log(stringOne + result);

// ? STRING INTERPOLATION
// * can use just one string
// * we use string (template) literals as placeholders

let stringTwo = `41 + 13 = ${41 + 13}`;
console.log(stringTwo);