`use strict`;

//////excersis 1 & 3
// let a = 100; 
// while (a <= 200) {

//     a++; 
//     console.log(`a = ${a}`);
// }

//changing the statement to a for loop 
//excersise 3

for (let a = 100; a <=200; a++){

    console.log(`a = ${a}`);
}

///excersise 2

let b = 100; 

while(b <= 200) {

    if(b % 2 == 0){

        console.log("_");
    }
    else {
        console.log("*"); 
        }

        b ++; 
}

////excersise 4

for (let i = 0; i < 10; i++) 
{
        for (let s = 1; s <= 10; s++) {
      console.log(s);
    }
 }

 //excersise 5

//  let today = new Date();
//  let day = today.getDay();
//   switch (day) {
//     case 0:
//         console.log(`Today is Sunday`);
//         break; 
//      case 6: 
//         console.log(`Today is Saturday`);
//         break; 
//     case 1:
//         console.log(`Its Monday`);
//         case 2:
//             console.log(`Its Tuesday`);
//             case 3:
//                 console.log(`Its Wed`);
//                 case 4:
//                     console.log(`Its Thus`);
//                     case 5:
//                         console.log(`Its Fri`);
//                         break;
//             default:
//                 console.log(`Not a valid day at all try again!`);
//                 break;            
//   } 


  //Solution to Q5

let now = new Date(); 
let day = now.getDay();
switch (day) {
  case 0:
    console.log(`It's Sunday`);
    break;
  case 6:
    console.log(`It's Saturday`);
    break;
  case 1:
    console.log(`It's Monday`);
  case 2:
  case 3:
  case 4:
  case 5:
    console.log(`It's a weekday`);
    break;
  default:
    console.log(`Excuse me?`);
    break;
 }