//Functions
// function declaration
// function showMessage(parameter1, parameter2, ...parameterN) {
//     // body
// }

// showMessage();
// showMessage();

//local variables
// function showMessage() {
//     let message = "Hello, I'm Javascript";// local variable

//     alert(message);
// }

// showMessage();
// alert(message);

//Outer variables/Global variables
// let userName = 'John';

// // function showMessage() {
// //     let message = 'Hello, ' + userName;
// //     alert(message);
// // }

// // showMessage();// Hello, John

// function showMessage() {
//     userName = 'Bob';

//     let message = 'Hello, ' + userName;
//     alert(message);
// }

// alert(userName); //John before the function call

// showMessage();   //Hello, Bob

// alert(userName); //Bob, the value was modified by the function

//Parameters
// function showMessage(from, text) {
//     alert(from + ': ' + text);
// }

// showMessage('Anna', 'Hello');
// showMessage('Anna', "What's up?")

//*/** 
// function showMessage(from, text) {
//     from = '*' + from + '*';
//     alert(from + ': ' + text);
// }

// let from = "Ann";

// showMessage(from, "Hello");//

//Default values
// showMessage('Anna');// Anna: undefined

// function showMessage(from, text = "no text given") {
//     alert(from + ': ' + text);
// }

// showMessage("Anna");// Anna: no text given
// showMessage("Anna", undefined);// Anna: no text given

// function showMessage(from, text = anotherFunction()) { 
//     // anotherFunction()only executed if no text given
//     // its result becomes the value of text
// }

//Returning a value
// function sum(a, b) {
//     return a + b;
// }

// let result = sum(2, 5);
// alert(result);

// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm("Do you have permission from your parents?")
//     }
// }

// let age = prompt('How old are you?', 18);

// if (checkAge(age)) {
//     alert('Access granted');
// } else {
//     alert('Access denied')
// }

// function showMovie(age) {
//     if (!checkAge(age)) {
//         return;
//     }

//     alert('Showing you the movie')
// }

//Naming a function
//- "get..."
//- "calc..."
//- create...
//- check...

//OBJECTS