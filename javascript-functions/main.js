function convertMinutesToSeconds(minutes) {
  var seconds = 60;
  return minutes * seconds;
}

console.log('convert minutes to seconds - 5: ', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name + '.';
}

console.log('greeting - Beavis: ', greet('Beavis'));

function getArea(width, height) {
  return width * height;
}

console.log('get area - 17, 42:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}

console.log('get first name of object - LeLouche Lamperouge: ', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var arrayLength = array.length;
  var lastIndex = arrayLength - 1;
  return array[lastIndex];
}

console.log('get last element in array: ', getLastElement(['propane', 'and', 'propane', 'accessories']));
