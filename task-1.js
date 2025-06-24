//DOM-tree methods for Task 1-10
//Task 1
// const ulCategories = document.querySelector('ul#categories');
// const ulCategoriesElemCount = ulCategories.children.length;

// console.log(`In list ${ulCategoriesElemCount} categories`);

// const liElements = ulCategories.querySelectorAll('li.item');
// [].forEach.call(liElements, liNodeElement => {
//     console.log(`Categories: ${liNodeElement.querySelector('h2').textContent}`);
//     console.log(`${liNodeElement.querySelector('ul').children.length}`)
// })

//Task 2
// const menu = [
//     "pizza",
//     "pasta",
//     "macaronies with cheese",
//     "lasagna",
//     "Ratatouille",
//     "hamburger"
// ]

// const menuList = document.getElementById('menu');
// console.log(menuList);

// const menuItems = menu.map(food => {
//     const item = document.createElement('li');
//     item.textContent = food;
//     return item;
// });

// menuList.append(...menuItems);

//Task 3
const images = [
    {
        url: './images/horses.jpg',
        alt: 'horses',
    },
    {
        url: './images/sakura.jpg',
        alt: 'sakura',
    },{
        url: './images/winter.jpg',
        alt: 'winter',
    }
]

const pinterestList = document.querySelector('ul#pinterest');

const imagesList = images.map(el => {
    const newLiElement = document.createElement('li');
    newLiElement.insertAdjacentHTML(
        'beforeend',
        `<img src="${el.url}" alt="${el.alt}">`,
    );
    return newLiElement;
});

pinterestList.append(...imagesList);