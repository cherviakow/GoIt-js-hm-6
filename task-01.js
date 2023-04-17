const navEl = document.querySelectorAll('li.item');
const numbersEl = navEl.length;
console.log('Numbers of categories:', numbersEl);

const navTitle = document.querySelector('h2');
const navTitileEl = navTitle.textContent;
console.log('Category:', navTitileEl);


const categoryItemsEl = document.querySelectorAll('.item ul');
categoryItemsEl.forEach(element =>{
  console.log('Elements:', element.children.length);
});
