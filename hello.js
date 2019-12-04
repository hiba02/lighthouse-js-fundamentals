const sayHello = function (name) {
  console.log("Hello, world, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

const sayHelloToConsole = function (name) {
  return "Hello, " + name;
}
const greeting = sayHelloToConsole("John");
console.log(greeting);
