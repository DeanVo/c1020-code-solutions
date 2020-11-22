/* eslint-disable no-unused-vars */

function invert(source) {
  var newObj = {};
  var keys = [];
  var values = [];

  for (var key in source) {
    keys.push(key);
    values.push(source[key]);
  }

  for (var i = 0; i < keys.length; i++) {
    newObj[values[i]] = keys[i];
  }
  return newObj;
}
