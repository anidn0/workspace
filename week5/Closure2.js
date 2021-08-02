function sayHello(name) {
 const greeting = function(message) {
 return `${message} ${name}?`;
 }
 return greeting;
}
let hiAdam = sayHello("Adam");
console.log(hiAdam("How are you"));
let hiYasmine = sayHello("Yasmine");
console.log(hiYasmine("How are you"));
let hiDavid = sayHello("David");
console.log(hiDavid("How are you"));