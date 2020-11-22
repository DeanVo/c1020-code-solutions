/* eslint-disable no-unused-vars */

function omit(source, keys) {
  var newObj = {};
  for (var key in source) {
    if (keys.includes(key) === false) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
