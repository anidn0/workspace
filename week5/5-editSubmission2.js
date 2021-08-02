const submission = [
    { name: "Jane", score: "95", "date": "2020-01-24", "passed": true,},
    { name: "Joe",  score: "77", "date": "2018-05-14", "passed": true, },
    { name: "Jack", score: "59", "date": "2019-07-05", "passed": false,},
    { name: "Jill", score: "88", "date": "2020-04-22", "passed": true, },
    ]
console.log(submission);  // print array submission - good

function editSubmission(array, index, score) { // #5
     const item = array[index];
        item.score = score;
        if (score >= 60) {
        item.passed = passed >= 60 ? true : false;
     
    };
     
};
editSubmission(submission, 1, 20);
console.log(`Change Jack from 59 to 81 *** 5**`);
console.log(submission);