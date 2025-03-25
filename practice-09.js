//reduce/reduceRight
// let value = arr.reduce(function (accumulator, item, index, array) {
//     // ...body
// }, [initial])
// let arr = [1, 2, 3, 4, 5]
// let result = arr.reduce((sum, current) => sum + current, 0);

// alert(result); //15

//Array.isArray
// alert(Array.isArray({})); //false
// alert(Array.isArray([])); //true

//thisArg
// arr.find(func, thisArg);
// arr.filter(func, thisArg);
// arr.map(func, thisArg);

// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin(user) {
//         return user.age >= this.minAge && user.age < this.maxAge;
//     }
// };
// let users = [
//     { age: 16 },
//     { age: 20 },
//     { age: 23 },
//     { age: 30 }
// ];

// let soldiers = users.filter(army.canJoin, army);

// alert(soldiers.length); //2
// alert(soldiers[0].age); //20
// alert(soldiers[1].age); //23

//Task1
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
//split, map, join
//full description
function camelize(str) {
    return str
        .split('-') //splits 'background-color' into array ['background', 'color']
        .map(
            //capitalizes first letters of all array items except the first one
            // converts ['background', 'color'] into ['background', 'Color']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(''); // joins ['background', 'Color'] into 'backgroundColor'
}

//should be
function camelize(str) {
    return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}

//Task2
let arr = [5, 2, 1, -10, 8]
arr.sort((a, b) => b - a); //sort in decreasing order
alert(arr); //8,5,2,1,-10

//Task3
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [john, pete, mary]

let names = users.map(item => item.name);
alert(names); //John, Pete, Mary

//Task4
let numbers = [1, 1, 2, 2, 3, 4, 5, 6, 7, 7];
function removeDuplicates(array) {
    return numbers.filter((a,b) => numbers.indexOf(a) === b)//a - current, b - index
}

//Task5
let greeting = 'Hello, world!';
let upperGreeting = greeting.toUpperCase();
alert(upperGreeting); //'HELLO, WORLD!'

//Task6
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = arr1.concat(arr2);
console.log(combined); //[1,2,3,4,5,6]

//Task7
let num = [1, 2, 3, 4, 5];
let evenNumbers = arr.filter(num => num % 2 === 0);
console.log(evenNumbers); //[2,4]

//Task8
let arr3 = [1, 2, 3, 4, 5];
let found = arr.find(num => num > 3);
console.log(found); //4