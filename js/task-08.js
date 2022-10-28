const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
   const credentials = {
     email: email.value,
     password: password.value,
   };

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }
 
  console.log(credentials);

  event.currentTarget.reset();
}
