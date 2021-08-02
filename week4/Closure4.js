var submission = [
    { "name": "Jane", "score": "95", "date": "2020-01-24",  "passed": true, address: {street:"Peach Tree",  city: "Detroit" ,state: "GA", taxRate: .4}},
    { "name": "Joe",  "score": "27", "date": "2018-05-14", "passed": true, address: {street:"Rochester",  city: "Boston", state: "Mi", taxRate: 6}},
    { "name": "Jack", "score": "59", "date": "2019-07-05", "passed": false, address: {street:"Penny Lane",  city: "Haven", state: "MA", taxRate: 0}},
    { "name": "Jill", "score": "88", "date": "2020-04-22", "passed": true, address: {street:"Apple Drive",  city: "Decatur", state: "OH", ztaxRate: 5}},
  
  ];
  
function parent() {
    let x = 0;
    function child() {
            

     Return x;   
    }
 return child;
    
}