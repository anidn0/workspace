var submission = [
    { "name": "Jane", score: "95", "date": "2020-01-24", "passed": true,},
    { "name": "Joe",  "score": 27, "date": "2018-05-14", "passed": true, },
    { "name": "Jack", score: 59, "date": "2019-07-05", "passed": false,},
    { "name": "Jill", score: 88, "date": "2020-04-22", "passed": true, },
    ];
  // user for of loop to find adverate score.
  // total all the score
  // then get average  do not do the avergae in the for of loop.  Just use this the find all the totla and increa the count you will use inthe equation.  
  function findAverageScore(array) {
  var sum = 0;
  for(var i in array) {
      sum += array[i].score;
      
  }
  // Get the length
  var numbersCnt = array.length;
  //Return the average / mean.
  console.log(sum, numbersCnt)
  return (sum / numbersCnt);
  }
// console.log(avg);
findAverageScore(submission)
//console.log(sum, numbersCnt)
   
