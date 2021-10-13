//excersise 1
function shirley() {
    let s = 'shirl'; 
    if ( s == "shirl") {
        let j = "john";
    }
    console.log(s);
console.log(j);
}
shirley();

//answer - this should throw an IUncaught Reference error as shirley is not defined 


// //QA Answer 
// function submit() {
//     let x = "foo";
//     if (x == "foo") {
//       let y = "boo";
//     }
//     console.log(x); // 'foo'
//     console.log(y); // 'Reference error'
//   }
//   submit();




//Excersise2 
// function doSomething() {
//     console.log(a);
//     console.log(foo());
//     let a = 1;
//     function foo() {
//       return 2;
//     }
//   }
//   doSomething();

  //this is incorrect as this is a reference error - the variable is doSomething not declared 