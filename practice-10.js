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
// const elemsOne = document.querySelectorAll('.lesson__list');
// console.log(elemsOne);

// Search by tag selector
// const elemsTwo = document.querySelectorAll('li');
// console.log(elemsTwo);

// Search by mixed selector of tag and class
// const elemsThree =
// 	document.querySelectorAll('li.lesson__item-list');
// console.log(elemsThree);

// Search by tag of the first nesting level
// const elemsFour =
// 	document.querySelectorAll('.lesson__list>li');
// console.log(elemsFour);

// Search by several classes
// const elemsFive =
// 	document.querySelectorAll('.lesson__list, .lesson__text');
// console.log(elemsFive);

// Search by nested class
// const elemsSix =
// 	document.querySelectorAll('.lesson__list .lesson__text');
// console.log(elemsSix);

// Search by ID
// const elemsSeven =
// 	document.querySelectorAll('#listItem');
// console.log(elemsSeven);

// Search by attribute
// const elemsEight =
// 	document.querySelectorAll('[data-item]');
// console.log(elemsEight);

// Search by attribute with some specific value
// const elemsNine =
// 	document.querySelectorAll('[data-item="40"]');
// console.log(elemsNine);


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
//---------------------

// .querySelector(CSS);
/*
return the first element 
*/

// const lessonList = document.querySelectorAll('.lesson__list')[0];
// const lessonList = document.querySelector('.lesson__list');
// console.log(lessonList);

//---------------------

//.getElementById(ID)

// const elem = document.getElementById('listItem');
// console.log(elem);

/*
1. id - must be unique
2. the search is only inside the object
*/

//.getElementsBy*
//.getElementsByTagName(tag)

// const elems = document.getElementsByTagName('li');
// console.log(elems);

//-------


// .getElementsByClassName(className)


// const elems = document.getElementsByClassName('lesson__item-list');
// console.log(elems);

//-------

// .getElementsByName
// const elems = document.getElementsByName('list');
// console.log(elems);

// Static collection
// const listStatic = document.querySelectorAll('.lesson__item-list');

// Alive collection
// const listLive = document.getElementsByClassName('lesson__item-list');

// console.log(listStatic);
// console.log(listLive);


// create new HTML-object
// const lessonList = document.querySelector('.lesson__list');
// lessonList.insertAdjacentHTML(
// 	"beforeend",
// 	'<li class="lesson__item-list">New TITLE</li>'
// );

//---------------------

//closest
// const elem = document.querySelector('.lesson__item-sub-list');
// const parentList = elem.closest('.lesson__list');
// console.log(parentList);

//matches
// const elems = document.querySelectorAll('.lesson__item-list');
// for (let elem of elems) {
// 	if (elem.matches('[class$="lesson__item-list_red"]')) {
// 		console.log('Red');
// 	} else if (elem.matches('[class$="lesson__item-list_blue"]')) {
// 		console.log('Blue');
// 	}
// }

//change document
//innerHTML

//get object
// const textElement = document.querySelector('.lesson__text');

//get content object "how it is" with HTML
// const textElementContent = textElement.innerHTML;
// console.log(textElementContent);

//change content object
// textElement.innerHTML = `Free coding life`;

//add content object
// textElement.innerHTML =
// 	`<p>${textElementContent}</p> <p>Create
// 	<span>Spider</span> web!</p>`;

// console.log(textElement.innerHTML);

//outerHTML

// const textElement = document.querySelector('.lesson__text');
// const textElementContent = textElement.outerHTML;
// console.log(textElementContent);


// textElement.outerHTML = `<p>${textElementContent}</p> <p>Create
// 	<span>Spider</span> web!</p>`;;

// console.log(textElement.outerHTML);

//textContent
// const textElement = document.querySelector('.lesson__text');
// const textElementContent = textElement.textContent;
// console.log(textElementContent);

// textElement.textContent = `<p>${textElementContent}</p> <p>Create <span>Spider</span> web!</p>`;

// console.log(textElement.textContent);

// data
// content text node/comment

// // get object
// const textElement = document.querySelector('.lesson__text');
// const getComment = textElement.nextSibling;

// console.log(getComment);
// console.log(getComment.data);


// change text node/comment
// getComment.data = 'Hello there';
// console.log(getComment.data);


//=====================

// Сreate elements and nodes

// creat new element(tag)
// const newElement = document.createElement('div');

// fill new element
// newElement.innerHTML = `Free coding classes`;
// console.log(newElement);

// create new text node
// const newText = document.createTextNode('Hello!!!');
// console.log(newText);

//===================
//PRACTICE
// document.querySelectorAll('p').forEach(p => {
// 	p.style.width = "300px";
// 	p.style.backgroundColor = "yellow";
// 	p.style.border = "2px solid #4CAF50";
// 	p.style.borderWidth = "10px";
// 	p.style.padding = "12px";
// })

// Add new element...

//...before object
//textElement.before(newElement);
// const textElement = document.getElementById("textElement");
// const newElement = document.createElement("span");
// newElement.textContent = "Inserted";
// textElement.before(newElement);

//...after object
//textElement.after(newElement);
// const textElement = document.getElementById("textElement");
// const newElement = document.createElement("span");
// newElement.textContent = "Inserted";
// textElement.after(newElement);


//...inside and on the start object
//textElement.prepend(newElement);
// const textElement = document.getElementById("textElement");
// const newElement = document.createElement("span");
// newElement.textContent = "Inserted";
// textElement.prepend(newElement);

//...inside and on the end object
//textElement.append(newElement);
// const textElement = document.getElementById("textElement");
// const newElement = document.createElement("span");
// newElement.textContent = "Inserted";
// textElement.append(newElement, "we check append method");

// Add a few elements the same time
//textElement.append(newElement, "Hello!");



// insertAdjacentHTML/Text/Element

// Get object
// const textElement = document.querySelector('.lesson__text');

// Add text, HTML, element
// textElement.insertAdjacentHTML(
// 	'afterend',
// 	`<p>Freelance is
// 	<span class="yellow">OUR</span> life!</p>`
// );

/*
"beforebegin",
"afterbegin",
"beforeend",
"afterend"
*/

// function addTodo() {
// 	const list = document.getElementById("todo-list");

//     list.insertAdjacentHTML(
// 	'afterbegin',
// 	`<li>Learn insertAdjacentHTML, insertAdjacentText, insertAdjacentElement</li>`
// )
// }

//=======================

// cloneNode

/*
when we need copy element
*/

// Get object
// const textElement = document.querySelector('.lesson__text');
// Clone whitout siblings 
//const cloneTextElement = textElement.cloneNode();

// Deep clone with content 
// const cloneTextElement = textElement.cloneNode(true);

// const lessonBlock = document.querySelector('.lesson');
// lessonBlock.append(cloneTextElement);

// Remove nodes

// Get object
// const textElement = document.querySelector('.lesson__text');
// Remove object
// textElement.remove();