const valueInput = document.querySelector('#font-size-control');
const output = document.querySelector('#text');
output.setAttribute('style', `font-size:${valueInput.value}px`);
valueInput.addEventListener('input', event => {
  const size = event.currentTarget.value;
  output.setAttribute('style', `font-size:${size}px`);
});
