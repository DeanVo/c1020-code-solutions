var $headerCount = document.querySelector('h1');
var intervalID = setInterval(countdown, 500);

function countdown() {
  $headerCount.textContent--;

  if ($headerCount.textContent === '0') {
    $headerCount.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}
