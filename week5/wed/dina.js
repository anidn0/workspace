// 0. Write a function that writes the numbers 0 through 10, without a loop, [0, 10)
function countToTen() {
    console.log ("0");
    console.log("1");
    console.log("2");
    console.log("3");
    console.log("4");
    console.log("5");
    console.log("6");
    console.log("7");
    console.log("8");
    console.log("9");
    console.log ("10");
}
countToTen
// 1. Write a function that writes the numbers 0 through 10, with a loop, [0, 10)
      function printTens() {
        for (let i = 0; i < 10; i = i + 1) {
          console.log(i);
        }
      }
      printTens()




function printTens1() {
    for (let i = 0; i < 10; i = i + 1) {
      console.log(i);
    }
  }
  printTens1()

// 2. Write a function that writes the numbers 1 through 10, with a loop [1, 10]


function printTens2() {
    for (let i = 1; i <= 10; i = i + 1) {
      console.log(i);
    }
  }
  printTens2()
// 3. Write a function that writes the even numbers, 0 through 100 [0, 100]
function printTens3() {
    

    for (let i = 0; i <= 100; i++) { 
        if (i % 2 === 0)  {
            console.log(i);
        }
            
    }
  }
  printTens3()
// 4. Write a function that writes the odd numbers, 0 through 100 [0, 100]
function printTens4() {
    

    for (let i = 0; i <= 100; i++) { 
        if (i % 2 != 0)  {
            console.log(i);
        }
            
    }
  }
  printTens4()
// 5. Write a function that writes the numbers 0 through 100, skipping by 5 each time
// 6. Write a function writes the numbers 100 through 0, [100, 0), counting down
// 7. Write a function that writes the even numbers 100 through 0, counting down
// 8. Write a function with three arguments, start, end, skip, that implements a loop
// 9. Write a function that returns an array with the numbers 0 through 10
// 10. Write a function with three arguments, name, age, city, that returns an object with those properties set