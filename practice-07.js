//Iterables
//for..of
// let range = {
//     from: 1,
//     to: 5
// };
// //symbol.iterator
// range[Symbol.iterator] = function () {
//     return {
//         current: this.from,
//         last: this.to,

//         next() {
//             //it should return the value as an object{done:.., value:...}
//             if (this.current <= this.last) {
//                 return { done: false, value: this.current++ };
//             } else {
//                 return{done: true}
//             }
//         }
//     }
// }

// for (let num of range) {
//     alert(num); //1,2,3,4,5
// }

// //String is iterable
// for (let char of "test") {
//     alert(char); //t, e, s, t
// }

// let str = 'T6';
// for (let char of str) {
//     alert(char); // T, 6
// }

//Calling an iterator explicitly
// let str = 'Hello';
// let iterator = str[Symbol.iterator]();

// while (true) {
//     let result = iterator.next();
//     if (result.done) break;
//     alert(result.value); // H, e, l, l, o
// }

// //Iterables and array-likes
// //example the object that is array-like, but not iterable:
// let arrayLike = {
//     0: "Hello",
//     1: "World",
//     length: 2
// };

// for(let item of arrayLike){}

//Array.from
// let arrayLike = {
//     0: "Hello",
//     1: "World",
//     length: 2
// };

// let arr = Array.from(arrayLike);
// alert(arr.pop())


//Variation1
// let str = 'T6';
// let chars = Array.from(str);

// alert(chars[0]); //T
// alert(chars[1]); //6
// alert(chars.length); //2

//Variation2
// let str = 'T6';

// let chars = [];
// for (let char of str) {
//     chars.push(char);
// }
// alert(chars);


//Map and Set
//Map methods and properties are:
//  - new Map() - creates the map
//  - map.set(key, value) - stores the value by the key
//  - map.get(key) - returns the value by the key. undefined if key does not exist in map
//  - map.has(key) - returns true if the key exist, false otherwise
//  - map.delete(key) - removes element by the key
//  - map.clear() - removes everything from the map
//  - map.size - returns the current element count

//Iteration over Map
//  - map.keys() - returns an iterable for keys
//  - map.values() - returns an iterable for values
//  - map.entries() - returns an iterable for entries [key, value], it's used by default in for..of

//Set methods:
//  - new Set([iterable]) - creates the set
//  - set.add(value) - adds a value, returns the set itself
//  - set.delete(value) - removes the value
//  - set.has(value) - returns true if the value exists in the set, otherwise false
//  - set.clear() - removes evrything from the set
//  - set.size - is the elements count

//Iteration over Set
//  - set.keys() - returns an iterable for values
//  - set.values() - same as set.keys()
//  - set.entries() - returns an iterable for entries [value, value]


//Splice, slice, concat, forEach, indexOf/lastIndexOf, includes, find, findIndex/findLastIndex, filter, map, sort(fn), reverse, join, Array.isArray, reduce
//splice
// let arr = ["I", "study", "JavaScript", "right", "now"];
// // arr.splice(1, 1); //from index 1 remove 1 element
// // alert(arr); //["I", "JavaScript"]

// arr.splice(5, 0, "quick");
// alert(arr);

//slice
// let arr = ["t", "e", "s", "t"];
// alert(arr.slice(1, 3)); //e,s
// alert(arr.slice(-2)); //s,t

//concat
// let arr = [1, 2];
// alert(arr.concat([3, 4])); // 1,2,3,4
// alert(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

//forEach
// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     alert(`${item} is at index ${index} in ${array}`)
// })

//indexOf/lastIndexOf, includes
// - arr.indexOf(item, from) - looks for item starting from index from, and returns the index where it was found
// - arr.includes(item, from) - looks for item starting from index from, returns true if found
// let arr = [1, 0, false, 5, 9, "yes"];

// alert(arr.indexOf(0)); //1
// alert(arr.indexOf(9)); //4
// alert(arr.indexOf(false)); //2
// alert(arr.indexOf("yes")); //5
// alert(arr.indexOf(null)); //-1

// alert(arr.includes(1)); // true

// let fruits = ['Apple', 'Orange', 'Apple'];

// alert(arr.indexOf('Apple')); //0
// alert(arr.lastIndexOf('Apple')); //2

//find, findIndex/findLastIndex
let result = arr.find(function (item, index, array) {
    //if true is returned, item is returned and iteration is stopped
    // for falsy scenario returns undefined
});
// - item is the element
// - index is its index
// - array is the array itself

// let users = [{ id: 1, name: "John" },{ id: 2, name: "Bob" },{ id: 3, name: "Mary" }, { id: 4, name: "John" }];

// // let user = users.find(item => item.id == 1);
// // alert(user.name); //John

// alert(users.findIndex(user => user.name == 'John')); //0
// alert(users.findLastIndex(user => user.name == 'John')); //3

//filter
// let users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Bob" },
//     { id: 3, name: "Mary" },
//     { id: 4, name: "John" }
// ];

// let someUsers = users.filter(item => item.id < 3);
// alert(someUsers.length); //2

