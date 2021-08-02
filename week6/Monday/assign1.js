class Vehicle{
    IsRunning; 

    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
        this.IsRunning = false;
    }
        start(){ 
            if (this.IsRunning === false ) {
            this.IsRunning = true
            }
            
          }
        stop(){
            if(this.IsRunning === true ) {
            this.IsRunning = false   
            }

        }


    

}

const vehicle = new Vehicle("DinaCar", "littleCar", "2021");
console.log(vehicle);
vehicle.start()
console.log(vehicle)
vehicle.stop()
console.log(vehicle)