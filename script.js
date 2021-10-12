/*
USE STRICT and CONSOLE

* ECMA Script 5 - european computer manufacturers association
* ES6 we no longer need to use 'use strict'
* if you used to use bad syntax or protected keywords it wouldn't throw errors, now it does
* you can't accidentally create a global variable
* can't assign values to a non-writable property
* can't use protected keywords
*/

`use strict`;

//! protected keyword example
// let let = 2;

console.log(`Hello world!`);

// ? There are a few types of console outputs we can use!

let text = `this is a message`;

console.log(text);

console.info(text);

console.warn(text);

console.error(text);

// you can also use the console to output objects! and all other datatypes.

// you can also style the console however you like!

console.log(`%c` + text, `color: black; background-color: white; font-size: 20px; padding: 5px;`);

// you can call more than one style
// but you have to call them in order!

console.log(`%c` + text + ` ` + `%c` + text, `color:red;`, `color:green;`);