/* eslint-disable no-console, no-unused-vars, dot-notation */

var student = {
  firstName: 'Dean',
  lastName: 'Vo',
  age: 24
};

console.log('student object: ', student);

var fullName = student.firstName + ' ' + student.lastName;

console.log('fullName value: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Client Service Administrator';

console.log('livesInIrvine value: ', student.livesInIrvine);
console.log('previousOccupation value: ', student.previousOccupation);

var vehicle = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2019
};

vehicle['color'] = 'Black';
vehicle['isConvertible'] = false;

console.log('color value: ', vehicle['color']);
console.log('isConvertible value: ', vehicle['isConvertible']);
console.log('vehicle object value: ', vehicle);

var pet = {
  name: 'Dog',
  type: 'Fish'
};

delete pet.name;
delete pet.type;

console.log('pet object value: ', pet);
