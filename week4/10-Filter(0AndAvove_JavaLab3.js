var submission = [
    { "name": "Jane", "score": "95", "date": "2020-01-24",  "passed": true,},
    { "name": "Joe",  "score": "27", "date": "2018-05-14", "passed": true, },
    { "name": "Jack", "score": "59", "date": "2019-07-05", "passed": false,},
    { "name": "Jill", "score": "88", "date": "2020-04-22", "passed": true, },
  
  ];
  
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
filter90AndAbove(submission)
