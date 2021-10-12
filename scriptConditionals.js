/* 
    ? CONDITIONALS
    ? TRUTHY and FALSEY
*/

// ? Falsey
/*
    * false
    * 0
    * ``
    * undefined
    * null
    * NaN - not a number
*/

// ? EVERYTHING ELSE IS TRUTHY

console.log(-12398173 ? `true` : `false`);

// ! IF (ELSE and ELSE IF)
// checking a condition, then running a code block if the condition is met

let a = 2; 

if ( a == 0 ) {
    console.log(`sunshine`);
} else if ( a != 2 ) {
    console.log(`moonlight`);
} else {
    console.log(`boogie`);
}

let b = 10;

if ( a == 0 && b == 10 ) {
    console.log(`hello`);
}

// ! TERNARY IF
// shorthand version of an IF ELSE statement

let x = false;

if ( x == true ) {
    console.log(`x is true`);
} else {
    console.log(`x is false`);
}

console.log(x ? `x is true` : `x is false`);

// ? EQUALITY and TYPE

/*
    * type is mutable in JS
    * it will try to work out the Data Type that you want
    * this means you can compare different types and have them 'equal'
*/

console.log(1 == `1` ? `true` : `false`);

// ! javascript mutating the type so that 'ONE EQUALS ONE'
// IT IS CHECKING THE VALUE ONLY

// ? What if we want to check the DataType as well?
// TODO: USE THE STRICTLY EQUALS OPERATOR
// ===

console.log(1 === `1` ? `true` : `false`);

