var elClick = document.querySelector('.task-list');

function myFunction() {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  if (event.target && event.target.nodeName === 'BUTTON') {
    var closestEl = event.target.closest('.task-list-item');
    console.log('closest .task-list-item: ', closestEl);
    closestEl.remove();
  }
}

elClick.addEventListener('click', myFunction);
