//excersise 1 


let darthVader = {
    alleigence: "Empire",
    weapon : "lightsaber", 
    sith :"true"
};
console.log(darthVader); 

//excersise 2

console.log(`DarthVaders allegience is to the ${darthVader.alleigence}`);
console.log(`Darth Vadars weapon is choice is ${darthVader.weapon}`);
console.log(`darthvadars is a silth ${darthVader.sith}`); 
console.log(`darthvadar is a jedi ${darthVader.sith ? "FALSE" : "TRUE"}`);

//excersise 3
//Create an array with the name myArray with 2 elements hello,everyone..

//Next print the length of the array

//Next use the push() method to add 3 elements to the array

//Next print the length of the array

//Next use shift() to remove an element

//Finally print the contents of the array using a for of loop.

let hello = ["hello", "everybody"];

console.log(hello.length);

hello.push("intheworld"); 

console.log(hello.length);

hello.shift("intheworld");

console.log(hello.length);

for (let eachElement of hello) {

    console.log(eachElement); 
}

hello.push("hello", "I", "lovelife",);
console.log(hello); 
 //TDP answer
//1.
let myArray = ["hello",'everyone'];
//2.
 console.log(myArray.length);
//3.
 myArray.push("goodbye");
//4.
 console.log(myArray.length);
//5.
 myArray.shift();
//6.
 for(let eachElement of myArray) {
     console.log(eachElement);
 }
