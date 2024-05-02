//global objects
console.log();

setTimeout();
clearTimeout();

setInterval();
clearInterval();

window.console.log();

//all the above global objects set to window object or we can call it directly

var message = "";
window.message; // if we declare a variable that variable can be accessed by window object

// one more object we have global and we can access all above via global
globalThis.setTimeout(); // but variable we defined like message is not defined at global object
