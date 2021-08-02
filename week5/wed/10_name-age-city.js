
const information = [{ name: "Jane", age: "22", city: "Detroit",} ] ;

function addNameAgeCity(newName, newAge, newCity)  {


       console.log(newName, newAge, newCity);
       information.push({name: newName, age: newAge, city: newCity,});
       return newName, newAge, newCity;
       
}
console.log(information);
addNameAgeCity("Fox", "37", "Vinyard Haven");
console.log(information);

// function addSubmission(newArray, newName, newScore, newDate) {
//     const newPassed = (newScore > 60) ? "true" : "false";  // set var newPassed based on score
//     console.log(newArray, newName, newScore, newDate, newPassed); //print to screen
//     submission.push({name: newName, score: newScore, date: newDate, passed: newPassed,})
//     return newArray, newName, newScore, newDate, newPassed; }
// addSubmission("collins", "Barba", "89", "2002-09-21");  // print array submission - 
// console.log(`***(2)***Add Barb with push`)