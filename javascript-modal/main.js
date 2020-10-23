var modalButton = document.querySelector('.modal-button');
var modalContainer = document.querySelector('.modal-container');

function modalOpen() {
  modalContainer.className = 'modal-container show';
}

modalButton.addEventListener('click', modalOpen);

var noButton = document.querySelector('.no');

function modalClose() {
  modalContainer.className = 'modal-container';
}

noButton.addEventListener('click', modalClose);
