var tabContainer = document.querySelector('.tab-container');
var tabList = document.querySelectorAll('.tab');
var viewList = document.querySelectorAll('.view');

function myFunction() {

  if (event.target && event.target.matches('.tab')) {

    for (var i = 0; i < tabList.length; i++) {

      if (tabList[i] === event.target) {
        tabList[i].className = 'tab active';
      } else {
        tabList[i].className = 'tab';
      }
    }
    var dataAttribute = event.target.getAttribute('data-view');

    for (var x = 0; x < viewList.length; x++) {
      if (viewList[x].getAttribute('data-view') === dataAttribute) {
        viewList[x].className = 'view';
      } else {
        viewList[x].className = 'view hidden';
      }
    }
  }
}

tabContainer.addEventListener('click', myFunction);
