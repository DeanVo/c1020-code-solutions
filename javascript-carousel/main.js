var $carouselImages = document.querySelectorAll('.carousel-image');
var $circleIcon = document.querySelectorAll('.circle-icon');
var intervalID = setInterval(toggleRight, 3000);
var imageIndex = 0;
var $chevronRight = document.querySelector('.chevron-right');
var $chevronLeft = document.querySelector('.chevron-left');

function changeImage(index) {
  for (var i = 0; i < $carouselImages.length; i++) {
    $carouselImages[i].className = 'carousel-image hidden';
    $circleIcon[i].className = 'fas fa-circle circle-icon';

    if (i === index) {
      $carouselImages[i].className = 'carousel-image view';
      $circleIcon[i].className = 'fas fa-circle active circle-icon';
    }
  }
}

function toggleRight() {
  if (imageIndex >= $carouselImages.length - 1) {
    imageIndex = -1;
  }
  imageIndex++;
  changeImage(imageIndex);
  resetTimer();
}

$chevronRight.addEventListener('click', toggleRight);

function toggleLeft() {
  if (imageIndex === 0) {
    imageIndex = 1;
  }

  imageIndex--;
  changeImage(imageIndex);
  resetTimer();
}

$chevronLeft.addEventListener('click', toggleLeft);

function resetTimer() {
  clearInterval(intervalID);
  intervalID = setInterval(toggleRight, 3000);
}
