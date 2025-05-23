// 1. Create an array of numbers and use map() to double each number.
// let nums = [1, 2, 3];
// let doubled = nums.map(n => n * 2);
// console.log(doubled); //2,4,6

// 2. Filter an array of numbers to include only even numbers.
// let nums = [1, 2, 3, 4, 5];
// let evens = nums.filter(n => n % 2 === 0);
// console.log(evens); //2, 4

// 3. Use reduce() to calculate the sum of all numbers in an array.
// let nums = [1, 2, 3, 4];
// let sum = nums.reduce((acc, n) => acc + n);
// console.log(sum); //10

// 4. Find the first element in an array that is greater than 50.
// let nums = [10, 60, 20, 80];
// let firstElemGreater = nums.find(n => n > 50);
// console.log(firstElemGreater); //60

// 5. Check if at least one element in an array is negative using some().
// let nums = [1, -2, 3];
// let hasNegative = nums.some(n => n < 0);
// console.log(hasNegative); //true

// 6. Check if all elements in an array are strings using every().
// let arr = ['a', 'b', 'c'];
// let allStrings = arr.every(el => typeof el === 'string');
// console.log(allStrings); //true

// 7. Sort an array of strings alphabetically.
// let fruits = ['banana', 'apple', 'cherry'];
// fruits.sort();
// console.log(fruits);// 'apple', 'banana', 'cherry'

// 8. Reverse an array of numbers.
// let nums = [1, 2, 3];
// nums.reverse();
// console.log(nums); //3,2,1

// 9. Remove duplicates from an array using filter() and indexOf().
// let nums = [1, 2, 2, 3, 3];
// let unique = nums.filter((v, i, arr) => arr.indexOf(v) === i);
// console.log(unique);//1,2,3

// 10. Count the number of occurrences of a specific element in an array.
// let items = ['a', 'b', 'a', 'c', 'a'];
// let countA = items.filter(x => x === 'a').length;
// console.log(countA); //3

// 11. Convert an array of strings to uppercase using map().
// let words = ['hello', 'world'];
// let upper = words.map(w => w.toUpperCase());
// console.log(upper); //['HELLO', 'WORLD']

// 12. Use forEach() to log each element with its index.
// let nums = [10, 20, 30];
// nums.forEach((v, i) => console.log(`Index ${i}: ${v}`));

// 13. Flatten a 2D array into a 1D array using reduce().
// let arr = [[1, 2], [3, 4]];
// let flatten = arr.reduce((acc, v) => acc.concat(v));
// console.log(flatten); // [1,2,3,4]

// 14. Find the maximum value in an array using reduce().
// let nums = [5, 10, 15];
// let max = nums.reduce((a, b) => Math.max(a, b));
// console.log(max); //15

// 15. Sort an array of numbers in descending order.
// let nums = [3, 1, 4];
// nums.sort((a, b) => b - a);
// console.log(nums);//[4,3,1]

// 16. Combine two arrays into one using concat().
// let a = [1, 2];
// let b = [3, 4];
// let combined = a.concat(b);
// console.log(combined); // [1,2,3,4]

// 17. Get an array of unique values from an array using Set and spread syntax.
// let nums = [1, 2, 2, 3];
// let unique = [...new Set(nums)];
// console.log(unique); // [1,2,3]

// 18. Get the last element of an array without using pop().
// let nums = [10, 20, 30];
// let last = nums[nums.length - 1];
// console.log(last); // 30

// 19. Use slice() to get the first 3 elements of an array.
// let nums = [1, 2, 3, 4, 5];
// let firstThree = nums.slice(0, 3);
// console.log(firstThree); // [1,2,3]

// 20. Use splice() to insert an element at the 2nd index.
// let nums = [1, 2, 4, 5];
// nums.splice(2, 0, 3);
// console.log(nums); // [1,2,3,4,5]

// 21. Remove the first element of an array using shift().
// let nums = [1, 2, 3, 4];
// nums.shift();
// console.log(nums); // [2,3,4]

// 22. Add a new element to the start of an array using unshift().
// let numbers = [2, 3, 4];
// numbers.unshift(1);
// console.log(numbers);// [1,2,3,4]

// 23. Check if an array includes a certain value using includes().
// let nums = [1, 2, 3];
// console.log(nums.includes(2)); //true

// 24. Find the index of a specific element using indexOf().
// let items = ['a', 'b', 'c'];
// console.log(items.includes('b')); //1

// 25. Join an array of words into a sentence using join().
// let words = ['hello', 'world'];
// console.log(words.join(' ')); 

// 26. Use map() to extract a property from an array of objects.
// let users = [{ name: 'Alice' }, { name: 'Bob' }];
// let names = users.map(u => u.name);
// console.log(names);

// 27. Group objects by a property using reduce().
// let items = [
//     { type: 'fruit', name: 'apple' },
//     { type: 'fruit', name: 'banana' },
//     { type: 'veg', name: 'carrot' },
//     { type: 'fruit', name: 'orange' },
//     { type: 'veg', name: 'potatoes' }
    
// ]

// let grouped = items.reduce((acc, item) => {
//     (acc[item.type] = acc[item.type] || []).push(item.name);
//     return acc;
    
// }, {});
// console.log(grouped); //fruit: (3) ['apple', 'banana', 'orange']; veg: (2) ['carrot', 'potatoes']

// 28. Filter out falsy values (false, 0, null, etc.) from an array.
// let arr = [false, 0, 1, 'a', null, 5, 'world'];
// let truthy = arr.filter(Boolean);
// console.log(truthy); // [1, 'a', 5, 'world']

// 29. Use some() to check if any string in an array contains a specific substring.
// let arr = ['hello', 'world', 'javascript']; // 'js'
// let hasJS = arr.some(str => str.includes('js'));
// console.log(hasJS); //false

// 30. Chunk an array into smaller arrays of a specific size.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let size = 2;
// let chunks = [];
// for (let i = 0; i < arr.length; i += size){
//     chunks.push(arr.slice(i, i + size));
// }
// console.log(chunks); //[[1, 2], [3, 4], [5, 6], [7, 8]]

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let size = 4;
let chunks = [];
for (let i = 0; i < arr.length; i += size){
    chunks.push(arr.slice(i, i + size));
}
console.log(chunks); // [[1, 2, 3, 4], [5, 6, 7, 8]]