//check Even or Odd
// let num = 8;
// if (num % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

//find Maximum of three numbers
// let a = 5, b = 10, c = 15;
// let max = Math.max(a, b, c);
// console.log(max); //15

//palindrome
//racecar, LOL, mum, mom, level,madam
// function isPalindrome(str) {
//     return str === str.split("").reverse().join("");
// }
// console.log(isPalindrome("racecar")); //true

//filter out negative numbers
// let nums = [1, -2, 3, -4];
// const positives = nums.filter(n => n >= 0);
// console.log(positives);

//filter out positive numbers
// let nums = [1, -2, 3, -4];
// const negative = nums.filter(n => n < 0);
// console.log(negative);

//check if all elements are even
let nums = [2, 4, 6];
const allEven = nums.every(n => n % 2 === 0);
console.log(allEven); //true

//find first even number