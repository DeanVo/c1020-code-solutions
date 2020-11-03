function ExampleConstructor() {
  console.log('value of ExampleConstructor prototype: ', ExampleConstructor.prototype);
  console.log('typeof ExampleConstructor prototype: ', typeof ExampleConstructor.prototype);
}

var constructor = new ExampleConstructor();
console.log('value of constructor: ', constructor);

var constructorInstance = constructor instanceof ExampleConstructor;
console.log('value of constructorInstance: ', constructorInstance);
