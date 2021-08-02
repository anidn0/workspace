var submission = [
    { "name": "Jane", "score": "95", "date": "2020-01-24",  "passed": true, street:"Peach Tree",  city: "Detroit" ,state: "GA", zip: 12345} ,
    { "name": "Joe",  "score": "27", "date": "2018-05-14", "passed": true, street:"Rochester",  city: "Boston", state: "Mi", zip: 12223},
    { "name": "Jack", "score": "59", "date": "2019-07-05", "passed": false, street:"Penny Lane",  city: "Haven", state: "MA", zip: 19835},
    { "name": "Jill", "score": "88", "date": "2020-04-22", "passed": true, street:"Apple Drive",  city: "Decatur", state: "OH", zip: 18875},
  
  ];
  
  function findSubmissionByState(array, state)  {

    const index = array.find(array => array.state  === state);
    console.log(state); 
    console.log(`***Find Mi ******`);  
       }
      
    findSubmissionByState(submission, "MI")
