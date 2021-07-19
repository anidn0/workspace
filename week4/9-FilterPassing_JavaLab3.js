var submission = [
    { "name": "Jane", "score": "95", "date": "2020-01-24",  "passed": true,},
    { "name": "Joe",  "score": "27", "date": "2018-05-14", "passed": true, },
    { "name": "Jack", "score": "59", "date": "2019-07-05", "passed": false,},
    { "name": "Jill", "score": "88", "date": "2020-04-22", "passed": true, },
  
  ];
  
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
 filterPassing(submission)   