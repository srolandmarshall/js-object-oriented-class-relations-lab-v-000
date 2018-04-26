let store = {drivers: [], passengers: [], trips: []};

let driverID = 0;
let passengerID = 0;
let tripID = 0;

class Driver {
  constructor(name) {
    this.id = ++driverID;
    this.name = name;
    store.drivers.push(this);
  };

  trips(){
    return store.trips.filter(trip=>{
      return trip.driverId == this.id;
    });
  }
  passengers(){
  return this.trips().map(trip => {
    return trip.passenger();
  })
}//passengers()
};

class Passenger {
  constructor(name){
    this.id = ++passengerID;
    this.name = name;

    store.passengers.push(this);
  }; //class passenger

  trips(){
    return store.trips.filter(trip=>{
      return trip.passengerId == this.id;
    });
  }; //trips()

  drivers() {
    return this.trips().map(trip => {
      return trip.driver();
    });
  }; //drivers()
};

class Trip {
  constructor(driver, passenger){
    this.id = ++tripID;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  };

driver(){
   return store.drivers.find(driver => {
     return driver.id === this.driverId;
   })
 };

 passenger(){
   return store.passengers.find(passenger => {
     return passenger.id === this.passengerId;
   })
 };
};//Trip
