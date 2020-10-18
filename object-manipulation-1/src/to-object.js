/* eslint-disable no-unused-vars */

function toObject(keyValuePair) {
  var newObj = {};
  var property = keyValuePair[0];
  var value = keyValuePair[1];
  newObj[property] = value;
  return newObj;
}
