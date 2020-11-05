var $carouselImages = document.querySelectorAll('.carousel-image');
var $circleIcon = document.querySelectorAll('.circle-icon');
var intervalID = setInterval(slideshow, 3000);
var imageIndex = 0;
// var slide = 0;

// function slideshow() {
//   for (var i = 0; i < $carouselImages.length; i++) {
//     $carouselImages[i].className = 'carousel-image hidden';
//     $circleIcon[i].className = 'fas fa-circle circle-icon';
//   }
//   slide++;
//   if (slide > $carouselImages.length) {
//     slide = 1;
//   }

//   $carouselImages[slide - 1].className = 'carousel-image view';
//   $circleIcon[slide - 1].className = 'fas fa-circle active circle-icon';
//   setTimeout(intervalID);
// }

function slideshow() {
  for (var i = 0; i < $carouselImages.length; i++) {
    if (imageIndex !== $carouselImages[i]) {
      $carouselImages[i].className = 'carousel-image hidden';
      $circleIcon[i].className = 'fas fa-circle circle-icon';
    }
  }
  imageIndex++;
  if (imageIndex > $carouselImages.length) {
    imageIndex = 1;
  }
  $carouselImages[imageIndex - 1].className = 'carousel-image view';
  $circleIcon[imageIndex - 1].className = 'fas fa-circle active circle-icon';
  setTimeout(intervalID);
}

var $chevronRight = document.querySelector('.chevron-right');
$chevronRight.addEventListener('click', slideshowRight);

function slideshowRight() {
  if (event.target.id === 'chevron-right' && imageIndex < 4) {
    imageIndex++;
  }

  $carouselImages[imageIndex].className = 'carousel-image view';
  $circleIcon[imageIndex].className = 'fas fa-circle active circle-icon';

  $carouselImages[imageIndex - 1].className = 'carousel-image hidden';
  $circleIcon[imageIndex - 1].className = 'fas fa-circle circle-icon';
}

var $chevronLeft = document.querySelector('.chevron-left');
$chevronLeft.addEventListener('click', slideshowLeft);

function slideshowLeft() {
  if (event.target.id === 'chevron-left' && imageIndex > 0) {
    imageIndex--;
  }
  $carouselImages[imageIndex].className = 'carousel-image view';
  $circleIcon[imageIndex].className = 'fas fa-circle active circle-icon';

  $carouselImages[imageIndex + 1].className = 'carousel-image hidden';
  $circleIcon[imageIndex + 1].className = 'fas fa-circle circle-icon';
}
