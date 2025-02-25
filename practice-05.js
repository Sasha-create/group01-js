//OBJECTS
// let user = {       //an object
//     name: "John",  //key "name" store value "John"
//     age: 30,       //key "age" store value 30
//     "likes bird": true,
// }

// alert(user.name);
// alert(user.age);

// user.isAdmin = true;

// delete user.age;

// let user = {};

// //set
// user["likes birds"] = true;

// //get
// alert(user["likes birds"]); //true

// //delete
// delete user["likes birds"];

// let key = "likes birds";
// user[key] = true;  //same as user["likes birds" = true]

//computed properties

// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {
//     [fruit]: 5, //the name of the property is taken from the variable fruit
// };

// alert(bag.apple); // 5 if fruit = "apple"

//Property value shorthand
// function makeUser(name, age) {
//     return {
//         name,
//         age,
//     }
// }

// let user = makeUser("John", 30);
// alert(user.name); //John


//Property names limitations
// these properties are all right
// let obj = {
//     0: "test",  //same as "0": "test"
//     for: 1,
//     let: 2,
//     return: 3
// };

// alert(obj.for + obj.let + obj.return); // 6

// //both alerts access the same property
// alert(obj["0"]); //test
// alert(obj[0]);   //test


//"in" operator
// "key" in object

// let user = {
//     name: John,
//     age: 30
// }

// // alert("age" in user); //true
// // alert("blabla" in user); //false

// let key = "age";
// alert(key in user); //true

//"for ... in" loop
// for (key in object) {
//     // body
// }

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// }

// for (let key in user) {
//     //keys
//     alert(key); //name, age, isAdmin
//     //values for the keys
//     alert(user[key]); //John. 30, true
// }

//Object methods
// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// }

// user.sayHi = function () {
//     alert("Hello");
// };

// user.sayHi(); //Hello

// user = {
//     sayHi: function () {
//         alert("Hello");
//     }
// };

// user = {
//     sayHi() {
//         alert("Hello")
//     }
// };

//"this" in methods
// let user = {
//     name: "John",
//     age: 30

//     sayHi() {
//         alert(this.name); //"this" is the "current object"
//         //alert(user.name)
//     }
// };

// user.sayHi(); //John

// let user = {
//     name: "John",
//     age: 30

//     sayHi() {
//         alert(user.name)
//     }
// };

// let admin = user;
// user = null;
// admin.sayHi(); //TypeError

//Arrow functions have no "this"
// let user = {
//     firstName: "John",
//     sayHi() {
//         let arrow = () => alert(this.firstName);
//         arrow();
//     }
// };
// user.sayHi(); //John

//Constructor, operator "new"
// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User("Jack");

// alert(user.name); //Jack
// alert(user.isAdmin); //false

//Return from constructor
    function BigUser() {
        this.name = "John";
        return { name: "Bill" };  // <- returns this object
    }

alert(new BigUser().name);  // Bill got that object

function SmallUser() {
        this.name = "John";
        return;  // <- returns this object
    }

alert(new SmallUser().name);  // John