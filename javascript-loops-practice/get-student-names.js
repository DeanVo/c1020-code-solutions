/* exported getStudentNames */

function getStudentNames(students) {
  var values = [];
  var x;
  for (var i = 0; i < students.length; i++) {
    for (x in students[i]) {
      values.push(students[i][x]);
    }
  }
  return values;
}
