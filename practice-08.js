//Transform an array
//map

// let result = arr.map(function (item, index, array) {
//     // returns the new value instead of item
// })

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// alert(lengths); //5,7,6

//sort
// let arr = [1, 2, 15];
// arr.sort();
// alert(arr); //1,15,2

// function compareNumbers(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }

// let arr = [1, 2, 15];
// arr.sort(compareNumbers);
// alert(arr); //1,2,15

// arr.sort((a, b) => a - b);//arrow function a short version

//reverse
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// alert(arr); //5,4,3,2,1

//split and join
// let names = 'John, Bob, Mary';
// let arr = names.split(', ');
// for (let name of arr) {
//     alert(`A message to ${name}`);
// }

// let str = "test";
// alert(str.split(''));//t,e,s,t

let arr = ['John', 'Bob', 'Mary'];
let str = arr.join(';');
alert(str); //John;Bob;Mary