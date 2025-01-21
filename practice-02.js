//interaction: alert, prompt, confirm

//alert
// alert("Bob")

//prompt
// result = prompt(title, [default]);
// let age = prompt('How old are you?', 100);

// alert(`You are ${age} years old!`);

//confirm
// result = confirm(question);

// let isBoss = confirm("Are you the boss?");

// alert(isBoss);

// Type Conversions
// String Conversion
// let value = true;
// alert(typeof value);// boolean

// value = String(value);// now value is a string "true"
// alert(typeof value); // string

//Numeric Conversion
// alert("6" / "2"); //3, strings are converted to numbers

// let str = "123";
// alert(typeof str); // string

// let num = Number(str); // becomes a number 123

// alert(typeof num); // number

//Boolean Conversion rule: "", 0, an empty string, null, undefined, NaN -> false
// alert(Boolean(1));// true
// alert(Boolean(0));// false

// alert(Boolean("hello")); // true
// alert(Boolean("")); // false

// Logical operators: || (OR), && (AND), ! (NOT), ??(Nullish Coalescing)
// result = a || b;

// let hour = 9;

// if (hour < 10 || hour > 18) {
//     alert('The office is closed.')
// }

// result = a && b;
// let hour = 12;
// let minute = 30;

// if (hour == 12 && minute == 30) {
//     alert('The time is 12:30');
// }

// result = !value;
// alert(!true);//false
// alert(!0); //true

// alert(!!"not-empty string"); //true
// alert(!!null); //false

// let user;
// alert(user ?? "Anonymous"); // Anonymous (user is undefined)

// let user = "John";
// alert(user ?? "Anonymous"); // John (user is not null/undefined)

//Conditional branching: if, '?'
// let year = prompt('Is it 2025?');
// if (year == 2025) {
//     alert("Yes, you are right!");
//     alert("That's correct!");
// }

// if (0) {  //0 is falsy
//     ...
// }
// if (1) {  // 1 is truthy
//     ...
// }

