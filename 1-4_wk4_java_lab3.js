
//Create Array called submission
const submission = [
    { name: "Jane", score: "95", "date": "2020-01-24", "passed": true,},
    { name: "Joe",  score: "77", "date": "2018-05-14", "passed": true, },
    { name: "Jack", score: "59", "date": "2019-07-05", "passed": false,},
    { name: "Jill", score: "88", "date": "2020-04-22", "passed": true, },
    ]
console.log(submission);  // print array submission - good
console.log(`*****(1) Out wiht old in with New - Next New Array`);  // Comments to sccreen - good
//Declare - Create a function named addSubmission
function addSubmission(newArray, newName, newScore, newDate) {
    const newPassed = (newScore > 60) ? "true" : "false";  // set var newPassed based on score
    console.log(newArray, newName, newScore, newDate, newPassed); //print to screen
    submission.push({name: newName, score: newScore, date: newDate, passed: newPassed,})
    return newArray, newName, newScore, newDate, newPassed; }
addSubmission("collins", "Barba", "89", "2002-09-21");  // print array submission - 
console.log(`***(2)***Add Barb with push`)
function deleteSubmissionByIndex(array, nindex) {
         array.splice(nindex, nindex);
        //console.log(submission);  // test the line above
        }
deleteSubmissionByIndex(submission, 1); //Get Jill to return from functijon
console.log(`***(3) Subtract By Index Joe`)
function deleteSubmissionByName(array, name) {
    const nindex = array.findIndex(array => array.name  === name);
    submission.splice(nindex);
    //console.log(submission);  // test the line above
    }
deleteSubmissionByName(submission, "Jack"); //Get Jill to return from functijon
console.log(`***(4) Subtract By Name Jack`);


