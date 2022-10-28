const textInput = document.querySelector('#validation-input');
const inputRequiredChars = Number.parseInt(textInput.getAttribute('data-length'));

textInput.addEventListener('blur', () => {  
  if (textInput.value.length === inputRequiredChars) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  }
  else {
    textInput.classList.add('invalid');
  }
});
