/* exported getInitialsOfPerson */

function getInitialsOfPerson(person) {
  var initialFirst = person.firstName[0];
  var initialSecond = person.lastName[0];
  return initialFirst + initialSecond;
}
