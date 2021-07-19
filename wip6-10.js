
//Create Array called submission
const submission = [
    { name: "Jane", score: "95", "date": "2020-01-24", "passed": true,},
    { name: "Joe",  score: "77", "date": "2018-05-14", "passed": true, },
    { name: "Jack", score: "59", "date": "2019-07-05", "passed": false,},
    { name: "Jill", score: "88", "date": "2020-04-22", "passed": true, },
    ]
console.log(submission);  // print array submission - good

// 6 ***************
function findSubmissionByName(array, name) {
       const nindex = array.findIndex(array => array.name  === name);
      console.log(nindex, name);  // test the line above
       console.log(`***# 6 is to Find By name (Jill) `);  
         }
findSubmissionByName(submission, "Jill");   
// 7 *************
function findLowestscore(array) {
    var lscore = array.reduce(function(res, obj) {
     console.log(lscore);
         return (obj.score < res.score) ? obj : res;
    });
    console.log(lscore);
    console.log(`***7 Lowest Score`);  
};
findLowestscore(submission);
// // 8 ********************
// function findAverageScore(array) {
//     var sum = 0;
//     for(var i in array) {
//         //console.log(i)
//         sum += array[i];   // THis is it
//        console.log(sum)
//     }
//     // Get the length
//     var numbersCnt = array.length;
//     //Return the average / mean.
//     console.log(sum, numbersCnt)
//     return (sum / numbersCnt);
//     }
//   // console.log(avg);
//   findAverageScore(submission);
// 9*****    

function filterPassing(array) {
    //  return a new array using the filer method
    // with passing score
    const hscore = []
    for (let i = 0; i < array.length; i++)  {
      if (array[i].score > 60) {
        hscore.push(array[i]);
        console.log(hscore);
      }
    }
    
    }
   filterPassing(submission);   
 // 10 **   
 function filter90AndAbove(array) {
    // return new array score > or equal to 90
    const hscore = []
    for (let i = 0; i < array.length; i++)  {
      if (array[i].score >= 90) {
        hscore.push(array[i]);
        console.log(hscore);
      }
    }
    
    }
filter90AndAbove(submission);

