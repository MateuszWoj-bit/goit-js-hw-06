const body = document.querySelector('body');
const color = document.querySelector('.color');
const buttonColorChange = document.querySelector('.change-color');

const handleColorChange = () => {
  const randomColor = getRandomHexColor();
  body.setAttribute('style', `background-color:${randomColor}`);
  color.textContent = randomColor;
};

buttonColorChange.addEventListener('click', handleColorChange);
color.textContent = '#ffffff';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
