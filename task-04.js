const counters = document.querySelectorAll('[button]');
counterValue = 0;

const minusEl = document.querySelector('[data-action="decrement"]');
minusEl.classList.add('btn-minus');
const minusBtn = document.querySelector('.minus-btn');

const plusEl = document.querySelector('[data-action="increment"]');
plusEl.classList.add('btn-plus');
const plusBtn = document.querySelector('.plus-btn');

const spanEl = document.querySelector('#value');
spanEl.classList.add('counter_value');



plusEl.onclick = function(){
    counterValue ++;
    spanEl.innerHTML = counterValue;
};

minusEl.onclick = function(){
  counterValue --;
  spanEl.innerHTML = counterValue;
};
