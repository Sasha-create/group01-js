//ARRAYS
//to store ordered collections

//Declaration
// let arr = new Array(); //1 syntaxes for creating an empty array
// let arr = []; // 2 syntaxes for creating an empty array

// let fruits = ["Apple", "Orange", "Plum"];
// alert(fruits[0]); //Apple
// alert(fruits[1]); //Orange
// alert(fruits[2]); // Plum

//replace
// fruits[2] = 'Pear'; //
// alert(fruits)

//add a new one to the array
// fruits[3] = 'Lemon';
// alert(fruits);

//length
// alert(fruits.length); //3

//an array can store elements of any type
// let arr = ['Apple', { name: 'John' }, true, function () { alert('hello') }]
// alert(arr[1].name); // John
// alert(arr[3]()); // hello

//get last elements with "at"
// let fruits = ["Apple", "Orange", "Plum"];
// alert(fruits[fruits.length-1]); 

//methods pop/push, shift/unshift
// -push - appends an element to the end
// -shift - get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st
// -unshift - adds an element to the beginning
// -pop - takes an element from the end

// let fruits = ["Orange", "Plum"];
// alert(fruits.pop()); // remove Plum
// alert(fruits); // Apple, Orange

// fruits.push("Pear");
// alert(fruits);

// alert(fruits.shift()); //remove Apple
// alert(fruits);  // Orange. Plum

// fruits.unshift("Apple");
// alert(fruits); //Apple. Orange, Plum

//methods push and unshift can add multiple elements at once

// let fruits = ["Apple"];

// fruits.push("Orange", "Peach");
// fruits.unshift("Lemon", "Pineapple");
// alert(fruits);  //Lemon,Pineapple,Apple,Orange,Peach