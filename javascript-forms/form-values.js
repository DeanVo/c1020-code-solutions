var elContactForm = document.getElementById('contact-form');

function handleSubmit(event) {
  var newObject = {};
  event.preventDefault();
  newObject.name = elContactForm.elements.name.value;
  newObject.email = elContactForm.elements.email.value;
  newObject.message = elContactForm.elements.message.value;
  console.log('messageData: ', newObject);
  elContactForm.reset();
}

elContactForm.addEventListener('submit', handleSubmit);
