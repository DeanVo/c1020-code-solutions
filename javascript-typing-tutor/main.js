var $typingSpan = document.querySelectorAll('span');
var index = 0;

function typingInstructor(e) {
  if (event.key === $typingSpan[index].textContent) {
    $typingSpan[index].className = 'correct';
    $typingSpan[index + 1].className = 'underline';
    index++;
  } else {
    $typingSpan[index].className = 'incorrect underline-red';
  }
}

document.addEventListener('keydown', typingInstructor);

// commit
