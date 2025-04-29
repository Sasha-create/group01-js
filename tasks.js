// Basic Iteration & Transformation

// 1)Use forEach to log each element of an array.
[1, 2, 3].forEach(num => console.log(num));

// 2)Use map to double each number in an array.
let doubled = [1, 2, 3].map(num => num * 2);

// 3)Use map to extract the names from an array of objects.
// let users = [
//     { name: "Alice" },
//     { name: "Bob" }
// ]
// let names = users.map(user => user.name);

// 4)Use filter to get only even numbers from an array.
let evens = [1, 2, 3, 4].filter(num => num % 2 === 0);

// 5)Use filter to get all users older than 18.
let adults = [{ age: 12 }, { age: 22 }].filter(user => user.age > 18);

// 6)Use find to get the first negative number in an array.
let negative = [1, 2, 3, -2, 1].find(num => num < 0);

// 7)Use some to check if there is any number greater than 100.
let greater = [10, 50, 100, 150].some(num => num > 100);

// 8)Use every to check if all numbers are positive.
let positive = [1, 2, 3].every(num => num > 0);

// Aggregation & Reduction

// 9)Use reduce to calculate the sum of all numbers.
const sum = [1, 2, 3, 4].reduce((acc, val) => acc + val, 0);

// 10)Use reduce to find the maximum number in an array.
let max = [4, 5, 12, 7].reduce((a, b) => a > b ? a : b);

// 11)Use reduce to count how many times each value occurs in an array.
let count = ['a', 'b', 'a'].reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
}, {});

// 12)Use reduce to flatten an array of arrays.
let flat = [[1, 2], [3, 4]].reduce((a, b) => a.concat(b), []); //[1,2,3,4]

// Cleaning & Manipulation

// 13)Use filter(Boolean) to remove all falsy values from an array.
let remove = [0,1,false, 2,"", 3].filter(Boolean)

// 14)Use map and trim() to clean up an array of messy strings.
let messy = [" hello ", " world "].map(str => str.trim());

// 15)Use flat() to flatten a nested array (1 level deep).
let oneLevel = [1, [2, 3], [4]].flat();

// 16)Use flat(Infinity) to flatten a deeply nested array.
let deep = [1, [2, [3, [4]]]].flat(Infinity);

// 17)Use splice() to remove the third item in an array.
let arr = [0, 1, 2, 3, 4].splice(2, 1)

// 18)Use slice() to get the last 3 elements of an array.
let lastThree = [1, 2, 3, 4, 5].slice(-3);

// 19)Use concat() to merge two arrays.
let combined = [1, 2].concat([3, 4]);

// Searching & Sorting

// 20)Use includes() to check if a value exists in an array.
// let users = ["Anna", "Isabella", "Oleksandra"];
// console.log(users.includes("Anna")); //true

// 21)Use indexOf() to find the index of a specific element.
// let users = ["Anna", "Isabella", "Oleksandra"];
// console.log(users.indexOf("Isabella")); //1

// 22)Use findIndex() to locate the index of an object with a specific property.
// let users = [
//     { name: "Anna", age: 20 },
//     { name: "Isabella", age: 15 }
// ];
// let index = users.findIndex(user => user.name === "Anna");
// console.log(index); //0

// 23)Use sort() to sort an array of numbers ascending.
let numbers = [2, 10, 1, 3, 12];
numbers.sort((a, b) => a - b);
console.log(numbers); //[1, 2, 3, 10, 12]

// 24)Use sort() with a compare function to sort an array of objects by age.
let users = [
    { name: "Anna", age: 20 },
    { name: "Isabella", age: 15 }
];
users.sort((a, b) => a.age - b.age);
console.log(users); 
//[{ name: "Isabella", age: 15 }, { name: "Anna", age: 20 }]
    

//  ES6+ Methods

// 25)Use Array.from() to create an array from a string.
let str = "hello";
let letters = Array.from(str);
console.log(letters); //["h", "e", "l", "l", "o"]

// 26)Use Array.isArray() to check if a value is an array.
console.log(Array.isArray([1, 2, 3])); //true
console.log(Array.isArray("not an array")); //false

// 27)Use Array.fill() to create an array of 10 zeros.
let zeros = new Array(10).fill(0);
console.log(zeros); //[0,0,0,0,0,0,0,0,0,0]

// 28)Use Array.of() to create an array from individual arguments.
// let array = Array.of(1, 2, 3);
// console.log(array); //[1,2,3]

// 29)Use entries() to iterate with index-value pairs.
let animals = ["cat", "dog", "bird"];
for (let [index, value] of animals.entries()) {
    console.log(index, value);
};
// 0 cat
// 1 dog
// 2 bird

// 30)Use keys() and values() to get keys and values of an array.
let array = ["a", "b", "c"];
for (let key of array.keys()) {
    console.log(key); //0, 1, 2
}
for (let value of array.values()) {
    console.log(value); //"a", "b", "c"
}