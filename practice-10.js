//DOM tree (Document Object Model)
//BOM (Browser object Model)
//Javascript
// const ul = document.querySelector('ul');
// const button = document.querySelector('button');

// const li = document.createElement('li');
// li.textContent = 'Item2';
// ul.appendChild(li);

//BOM
//Navigator
// Browser

// console.log(navigator.userAgent);

//Platform
// console.log(navigator.platform);

//Location
//Get URL

// console.log(location.href);
// console.log(location.port);

//History
// history.back();
// history.forward();

//BOM
//Alert
// alert("hello!");


//Confirm
// const confirmResult = confirm("Do you want to learn javascipt?");
// console.log(confirmResult);


//Prompt
// const promptResult = prompt("Who you are in the real life?");
// console.log(promptResult);



// DOM
// Document navigation


// const htmlElement = document.documentElement;
// const headElement = document.head;
// const bodyElement = document.body;
// console.log(htmlElement);
// console.log(headElement);
// console.log(bodyElement);

//------------------------------------------

// Get object body
const bodyElement = document.body;

// First and last child elements
// const firstChildNode = bodyElement.firstChild;
// const lastChildNode = bodyElement.lastChild;

// console.log(firstChildNode);
// console.log(lastChildNode);


// collecten childNodes get yhe list of all children and text nodes

// const childNodes = bodyElement.childNodes;
// console.log(childNodes);

//check child elements inside the object -  hasChildNodes()
// console.log(bodyElement.hasChildNodes());

/*

childNodes is a collection

Differents from an array:
1.we can use for..of loop to iterate over a collection
2.array methods will not work because a collection is not an array
*/

// iterating a collection
// for (let node of childNodes) {
// 	console.log(node); // show all nodes
// }

// "Alive" collection


// Available just for reading

//------------------------------------------

// connaction and parents nodes

// const previousSiblingNode = bodyElement.previousSibling;
// const nextSiblingNode = bodyElement.nextSibling;
// const parentNode = bodyElement.parentNode;

// console.log(previousSiblingNode);
// console.log(nextSiblingNode);
// console.log(parentNode);


//------------------------------------------

/*
Element navigation
*/

// get collection with child nodes

// const childNodes = bodyElement.childNodes;
// console.log(childNodes);

//const bodyСhildren = bodyElement.children;
//console.log(bodyСhildren);


// First and last child elements
// const firstChild = bodyElement.firstElementChild;
// const lastChild = bodyElement.lastElementChild;
// console.log(firstChild);
// console.log(lastChild);

// neighboring parent and parent elements
// const previousSibling = bodyElement.previousElementSibling;
// const nextSibling = bodyElement.nextElementSibling;
// const parentElement = bodyElement.parentElement;

// console.log(previousSibling);
// console.log(nextSibling);
// console.log(parentElement);


//========================================================================================================================================================

// querySelectorAll(CSS)


// Search by class selector
const elemsOne = document.querySelectorAll('.lesson__list');
console.log(elemsOne);

// Search by tag selector
const elemsTwo = document.querySelectorAll('li');
console.log(elemsTwo);

// Search by mixed selector of tag and class
const elemsThree =
	document.querySelectorAll('li.lesson__item-list');
console.log(elemsThree);

// Search by tag of the first nesting level
const elemsFour =
	document.querySelectorAll('.lesson__list>li');
console.log(elemsFour);

// Search by several classes
const elemsFive =
	document.querySelectorAll('.lesson__list, .lesson__text');
console.log(elemsFive);

// Search by nested class
const elemsSix =
	document.querySelectorAll('.lesson__list .lesson__text');
console.log(elemsSix);

// Search by ID
const elemsSeven =
	document.querySelectorAll('#listItem');
console.log(elemsSeven);

// Search by attribute
const elemsEight =
	document.querySelectorAll('[data-item]');
console.log(elemsEight);

// Search by attribute with some specific value
const elemsNine =
	document.querySelectorAll('[data-item="40"]');
console.log(elemsNine);


//--------------


// querySelectorAll - a statically collection

// a certain specific object by specifying key
//const elems = document.querySelectorAll('li');
//console.log(elems[2]);

/*
for (const item of elems) {
	console.log(item);
}
*/
/*
elems.forEach(item => {
	console.log(item);
});
*/
