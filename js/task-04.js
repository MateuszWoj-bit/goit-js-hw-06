const buttonDecrement = document.querySelector('button:first-child');
const buttonIncrement = document.querySelector('button:last-child');
let counterValue = 0;

const handleDecrement = () => {
  counterValue--;
  document.getElementById('value').innerHTML = counterValue;
};
const handleIncrement = () => {
  counterValue++;
  document.getElementById('value').innerHTML = counterValue;
};

buttonDecrement.addEventListener('click', handleDecrement);
buttonIncrement.addEventListener('click', handleIncrement);
