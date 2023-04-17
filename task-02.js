const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listHTML = document.querySelector('#ingredients');

const listEl = ingredients.map((ingridient) => `<li class="list-item">${ingridient}</li>`).join('');

listHTML.innerHTML = listEl;



// const listEl = document.querySelectorAll('#ingredients');
// console.log(listEl);

// const elements = ingredients.map(ingridient =>{
//   const liEl = document.createElement('li');
//   liEl.classList.add('item');
//   liEl.textContent = ingridient;

//   return liEl;
// })
// console.log(elements);

