function calculateTaxRate () {
    let x = 4;
    function miTaxrate() {
       return x;   
      
    }
 return miTaxrate;
}

let mystate = calculateTaxRate(); 
//console.log(mystate);

let maTaxrate = 2 + mystate();
console.log(maTaxrate);
let ohTaxrate = ( 5 + mystate());
console.log(ohTaxrate);
let waTaxrate = ( 4 + mystate());
console.log(waTaxrate);

calculateTaxRate()