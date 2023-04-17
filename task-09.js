function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)
  
  }`;
}

const changeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const bodyEl = document.querySelector('body');


changeColor.addEventListener('click', () => {

 spanColor.textContent = getRandomHexColor();
 bodyEl.style.backgroundColor = spanColor.textContent; 
});