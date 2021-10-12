/* 
    ? ASI and ITERATION

    * Automatic
    * Semi-colon
    * Insertion
    
    Javascript automatically inserts semi-colons for us.
    This can lead to unwanted behaviour 
*/

// multi-line maths (no semi-colons)

let a = 1
let b = 1

a
++ // increment by one
b

//console.log(`a = ${a}, b = ${b}`)

// TODO: fix this! :)

let c = 1;
let d = 1;

c;
++d;

//console.log(`c = ${c}, d = ${d}`);

// ? ITERATION

// * LOOPS

// ! FOR loop
// use a counter
// run while a condition is met

for(let i = 0; i < 10; i++){
    console.log(`i = ${i}`);
}

// ! WHILE loop
// works with booleans
// runs until a condition is no longer true

let condition = true;
let increment = 0;

while(condition) {
    console.log(`increment me!`)
    increment++;

    if(increment == 3) {
        condition = false;
    }
}

// ! DO-WHILE loop
// like a while loop but ALWAYS RUNS AT LEAST ONCE

let con = false;
let inc = 0;

do {
    console.log(`do while loop!`)
    inc++;

    if(inc == 3) {
        con = false;
    }
} while(con);


// ! SWITCH CASES
// run until break or return
// more effective than large if-else trees

let num = 12;

switch(num) {
    case 0:
        console.log(`we're at zero`);
        break;
    case 1:
        console.log(`number is 1`);
    case 4:
        console.log(`4 now`);
    case 10:
        console.log(`at the end`);
        break;
    default:
        console.log(`this is the default`);
}