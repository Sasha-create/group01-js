//DOM tree (Document Object Model)
//BOM (Browser object Model)
//Javascript
const ul = document.querySelector('ul');
const button = document.querySelector('button');

const li = document.createElement('li');
li.textContent = 'Item2';
ul.appendChild(li);