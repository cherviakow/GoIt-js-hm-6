const inputSize = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');


inputSize.addEventListener('input', changeSize);

function changeSize(event){
spanText.style.fontSize = `${event.currentTarget.value}px`
};