let idealCar = {
    name: "Mustang",
    color: "red",
    weightInPounds: 3600,

    myCar(){
        console.log( "My ideal car is a " + this.name + " with a color of " + this.color + ", but I do not want it to be over " + this.weightInPounds + " pounds.")
    }
    
}

idealCar.myCar();