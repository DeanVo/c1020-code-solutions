/* eslint-disable no-console */

let count = 3;
const intervalID = setInterval(countdown, 1000);

function countdown() {
  console.log(count);
  count--;
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
}
