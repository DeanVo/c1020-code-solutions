var isOn = true;
var modalButton = document.querySelector('.modal-button');
var modalContainer = document.querySelector('.modal-container');

function modalOpen() {
  isOn = !isOn;
  if (isOn) {
    modalContainer.className = 'modal-container';
  } else {
    modalContainer.className = 'modal-container show';
  }
}

modalButton.addEventListener('click', modalOpen);

var noButton = document.querySelector('.no');

function modalClose() {
  isOn = !isOn;
  if (isOn === false) {
    modalContainer.className = 'modal-container show';
  } else {
    modalContainer.className = 'modal-container';
  }
}

noButton.addEventListener('click', modalClose);
