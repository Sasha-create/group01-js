//Loops: while and for
//while syntax:

// while (condition) {
//     // code
//     // so-called "loop body"
// }

// let i = 0;
// while (i < 3) {
//     alert(i);
//     i++;
// }

// let i = 3;
// while (i) {
//     alert(i);
//     i--;
// }

//The "do...while" loop syntax:
// do {
//     //loop body
// } while (condition);

// let i = 0;
// do {
//     alert(i)
//     i++;
// } while (i < 3);

//The "for" loop syntax:
// for (begin; condition; step){
//     // ...loop body ...
// }

// for (let i = 0; i < 3; i++){
//     alert(i)
// }

// run begin
// let i = 0;
// // if condition -> run body and run step
// if (i < 3) { alert(i); i++ }
// // if condition -> run body and run step
// if (i < 3) { alert(i); i++ }
// // if condition -> run body and run step
// if (i < 3) { alert(i); i++ }
// // ...finish, because now i == 3

//Breaking the loop
// let sum = 0;
// while (true) {
//     let value = +prompt("Enter a number", '');

//     if (!value) break;

//     sum += value;
// }
// console.log('Sum: ' + sum);

//Continue to the next iteration
// for (let i = 0; i < 10; i++){
//     if (i % 2 == 0) continue; // if true, skip the remaining part of the body
//     // 2, 4, 6, 8
//     alert(i); // 1, 3, 5, 7, 9
// }

//Labels for break/continue

//The "switch" statement
//The syntax
// switch (x) {
//     case 'value1': // if(x === 'value1')
//     ...
//         [break]
        
//     case 'value2': // if(x === 'value2')
//     ...
//         [break]

//     default:
//     ...
//         [break]
// }

// let a = 2 + 2;

// switch (a) {
//     case 2:
//         alert('Too small');
//         break;
//     case 3:
//         alert('almost!');
//         break;
//     case 4:
//         alert('Exactly!');
//         break;
//     case 5:
//         alert('Too big');
//         break;
//     default:
//         alert("I dont know answer")
// }

//Grouping of "case"
// let a = 3;

// switch (a) {
//     case 3:
//         alert('Right!');
//         break;
    
//     case 4:
//     case 5:
//         alert('Wrong!');
//         alert("why dont you take a math class?");
//         break;
    
//     default:
//         alert('strange result');
// }


//Functions
// function declaration
function showMessage(parameter1, parameter2, ...parameterN) {
    // body
}

showMessage();
showMessage();