const submission = [
    { "name": "Jane", "score": "95", "date": "2020-01-24",  "passed": true,},
    { "name": "Joe",  "score": "27", "date": "2018-05-14", "passed": true, },
    { "name": "Jack", "score": "59", "date": "2019-07-05", "passed": false,},
    { "name": "Jill", "score": "88", "date": "2020-04-22", "passed": true, },
    ];
  
  
  function findSubmissionByName(array, name) {
  return array.find(item => item.name === name);
  }


function findLowestScore(array)   {
let lowest = array[0];

array.forEach(item => {    
    .score < lowest.score) {
if (item.score )
}

}
  
    // const result = submission.reduce(function(res, obj) {
    //     return (obj.score < res.score) ? obj : res;
    // });
    
    // console.log(result);