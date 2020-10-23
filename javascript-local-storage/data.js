/* exported todos */

var todos = [];
var previousTodosJson = localStorage.getItem('javascript-local-storage');

if (previousTodosJson !== null) {
  todos = JSON.parse(previousTodosJson);
}

window.addEventListener('beforeunload', function (event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});
