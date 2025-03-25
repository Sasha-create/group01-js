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