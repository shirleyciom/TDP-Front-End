/*
    TODO: FUNCTIONS!
    * a block of code that does a thing!
    * it is envoked or run when something calls it
    * DRY principles
    * they can take arguments
    * functions are globally scoped
*/

function hello(message) {
    // execute code in here
    console.log(message);
}

hello(`Greetings world!`);

// ? RETURNS

// * when a function reaches a return statement
// * it stops

let bye = false;

function goodbye() {
    console.log(`goodbye`);
    return bye = true;
}

goodbye();

// variable returns

function sum(a, b) {
    return a+b;
}

console.log(
    sum(11111,4)
);

// ! ARROW FUNCTIONS

// greeting = (message) => {
//     return console.log(message);
// }

// greeting = (message) => console.log(message);

greeting = message => console.log(message);

greeting(`greetings!`);