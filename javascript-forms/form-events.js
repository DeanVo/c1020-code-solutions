function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('input value: ', event.target.value);
}

var formName = document.querySelector('#user-name');
var formEmail = document.querySelector('#user-email');
var formMessage = document.querySelector('#user-message');

formName.addEventListener('focus', handleFocus);
formName.addEventListener('blur', handleBlur);
formName.addEventListener('input', handleInput);

formEmail.addEventListener('focus', handleFocus);
formEmail.addEventListener('blur', handleBlur);
formEmail.addEventListener('input', handleInput);

formMessage.addEventListener('focus', handleFocus);
formMessage.addEventListener('blur', handleBlur);
formMessage.addEventListener('input', handleInput);
