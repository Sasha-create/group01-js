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

//outer variables
let userName = 'John';

// function showMessage() {
//     let message = 'Hello, ' + userName;
//     alert(message);
// }

// showMessage();// Hello, John

function showMessage() {
    userName = 'Bob';

    let message = 'Hello, ' + userName;
    alert(message);
}

alert(userName); //John before the function call

showMessage();   //Hello, Bob

alert(userName); //Bob, the value was modified by the function