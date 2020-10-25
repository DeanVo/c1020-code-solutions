/* eslint-disable no-unused-vars */

function omit(source, keys) {
  var newObject = {};

  for (var key in source) {
    var keyMatch = false;
    for (var i = 0; i < key.length; i++) {
      if (keys[i] === key) {
        keyMatch = true;
      }
    }
    if (keyMatch === false) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
