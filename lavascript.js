console.log('time for a roadtrip!');

const seatsInCar = 5;
let passengers = [];
let tankFull = false;

function enoughSeats(){
    console.log('in enoughSeats');
    //check if seatsInCar >= passengers.length
    if( seatsInCar >= passengers.length ){
        return true;
    }// end enough seats
    else {
        return false;
    }// end not enough seats
}// end enough seats

function getInCar ( nameOfPassenger ){
    console.log( 'in getInCar', nameOfPassenger );
    // push the passenger into the passengers array
    passengers.push( nameOfPassenger );
    return passengers;
}// end getInCar

function readyForRoadTrip(){
    console.log( 'in readyForRoadTrip' )
    if( enoughSeats() && tankFull ){
        return true;
    } // end tank full
    else{
        return false;
    }// end tank not full
}// end ready for trip


getInCar('ben');
getInCar('star lord');
getInCar('kate');
getInCar('lorien');
getInCar('keely');

console.log( passengers );
console.log( 'enough seats?', enoughSeats() );
console.log( 'are we ready to go?', readyForRoadTrip() );