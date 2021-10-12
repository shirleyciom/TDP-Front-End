
//excersise 1

let strictA = true;
let strictB = 1; 

console.log(strictA == strictB); // true
console.log(strictA === strictB); // false 
 

//excersise 2
console.log(strictA != strictB); //false 
console.log(strictA !== strictB); //true 


//excersise 3

let age = 16

if (age >=18 && age <=65) {
    console.log("Current age within Range");
} else if (age < 18) {
    console.log("Underage");
} else {
    console.log("age unknown to us");
}
 
//ANSWER from QA 

// let age = 10;

// if (age >= 18 && age <= 65) {
//   console.log("Age is in range");
// } else if (age < 18) {
//   console.log("Underage");
// } else {
//   console.log("Catch all else");
// }
 
//excersis4 

 let age2 = 1
  let actualage = age2 >=50 ? "person is either 50 or over" : "They are under 50"; 
 console.log(actualage);

 
 // answer from QA 
 let age = 100;
let result = age >= 50 ? "50 or over" : "Under 50";
console.log(result);