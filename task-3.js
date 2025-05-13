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
function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}
console.log(isPalindrome("racecar")); //true