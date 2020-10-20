var userClicks = 0;
var lightbulbButton = document.querySelector('.lightbulb');
var background = document.querySelector('.lightbulb-container');

function lightbulbSwitch() {
  userClicks++;
  if (userClicks % 2 === 0) {
    lightbulbButton.className = 'lightbulb on';
    background.className = 'lightbulb-container';
  } else {
    lightbulbButton.className = 'lightbulb off';
    background.className = 'lightbulb-container black';
  }
}

lightbulbButton.addEventListener('click', lightbulbSwitch);
