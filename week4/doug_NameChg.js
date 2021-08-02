//Create Array called submission
const submission = [
    { name: "Jane", score: "95", "date": "2020-01-24", "passed": true,},
    { name: "Joe",  score: "77", "date": "2018-05-14", "passed": true, },
    { name: "Jack", score: "59", "date": "2019-07-05", "passed": false,},
    { name: "Jill", score: "88", "date": "2020-04-22", "passed": true, },
    ]
console.log(submission);  // print array submission - good
console.log(`*****(1) Out wiht old in with New - Next New Array`);  // Comments to sccreen - good



function findSubmissionByName(array, name) {
      const nindex = array.findIndex(array => array.name  === name);
      console.log(nindex, name);  // test the line above
      console.log(`***# 6 is to Find By name (Jill) `);  
         }
findSubmissionByName(submission, "Jill");   