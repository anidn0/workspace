console.log('Hello World');
//  ******************************
function greeting1() {
        console.log("Hello Detroit");
}
greeting1(); //Hello
//  ******************************
function greetings2() {
    return `Hello Ondina`;
}
let message = greetings2();
console.log(message); 
greetings2(); //Hello

//  ******************************
function sum(num1, num2) {
    return num1 + num2;
} 
let result = sum(2, 3);
console.log(result); //5
//  ******************************

function printAll() {
    for(let i = 0; i < arguments.length; i++)
    {
        console.log(arguments[i]);
    }
} 
printAll(1, 2, 3, 4, 5); // 1 2 3 4 5
printAll(10, 20); // 10 20


//  ******************************

function greeting3() {
    let message3 = ‘Hello’;
    let sayHi = function hi() {
    let message3 = ‘Hi’;
    };
    sayHi();
    console.log(message3); // Hello
    }
    greeting3();
   

//  ******************************


//  ******************************


//  ******************************


//  ******************************
