function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log('event.target', elClick);
}

var elClick = document.querySelector('.click-button');
elClick.addEventListener('click', handleClick, false);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log(event);
  console.log('event.target', elHover);
}

var elHover = document.querySelector('.hover-button');
elHover.addEventListener('mouseover', handleMouseOver, false);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log('event.target', elDoubleClick);
}

var elDoubleClick = document.querySelector('.double-click-button');
elDoubleClick.addEventListener('dblclick', handleDoubleClick, false);
