function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const box = document.querySelector('#boxes');
const buttonCreate = document.querySelector('button:nth-child(2)');
const buttonDelete = document.querySelector('button:nth-child(3)');
const input = document.querySelector('input');

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    const div = document.createElement('div');
    let height = 30 + (i - 1) * 10;
    let width = 30 + (i - 1) * 10;
    const randomColor = getRandomHexColor();
    div.setAttribute(
      'style',
      `background-color:${randomColor}; width:${width}px; height:${height}px`
    );
    box.append(div);
  }
}
function destroyBoxes() {
  box.innerHTML = '';
}

const handleCreation = () => {
  let value = Number.parseInt(input.value);
  createBoxes(value);
};
const handleDestruction = () => {
  destroyBoxes();
};

buttonCreate.addEventListener('click', handleCreation);
buttonDelete.addEventListener('click', handleDestruction);