var isOn = true;
var isOff = true;
var modalButton = document.querySelector('.modal-button');
var modalContainer = document.querySelector('.modal-container');

function modalOpen() {
  if (isOn) {
    modalContainer.className = 'modal-container show';
  }
}

modalButton.addEventListener('click', modalOpen);

var noButton = document.querySelector('.no');

function modalClose() {
  if (isOff) {
    modalContainer.className = 'modal-container';
  }
}

noButton.addEventListener('click', modalClose);
