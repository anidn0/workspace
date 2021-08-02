var submission = [
    { "name": "Jane", "score": "95", "date": "2020-01-24",  "passed": true, address: {street:"Peach Tree",  city: "Detroit" ,state: "GA", zip: 12345}},
    { "name": "Joe",  "score": "27", "date": "2018-05-14", "passed": true, address: {street:"Rochester",  city: "Boston", state: "Mi", zip: 12223}},
    { "name": "Jack", "score": "59", "date": "2019-07-05", "passed": false, address: {street:"Penny Lane",  city: "Haven", state: "MA", zip: 19835}},
    { "name": "Jill", "score": "88", "date": "2020-04-22", "passed": true, address: {street:"Apple Drive",  city: "Decatur", state: "OH", zip: 18875}},
  
  ];
  
    function findSubmissionByState(array, state)  {
            var states = array.filter(object => object.address.state === state);
            return states;
            console.log(states);
     }
   
       
      
    findSubmissionByState(submission, "MI")
