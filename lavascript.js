console.log('the pirate adventure');

// const theWalrus = 10; // crew needed to sail
// let crew = ['flint', 'gates', 'randall'];
// let totalCannonballs = [];
// let deadMen = [];
// let cannonBalls = 0; // need 3 cannonballs per cannon
// let cannons = 4;
// const maxCannons = 6; //max the ship can carry


// /* 
// reference of crew names 
// flint
// gates
// silver
// billy
// dufrane
// degroot
// logan
// mosiah
// singleton
// boclerk
// muldoon
// morley
// duffy
// vincent
// */

// function enoughCrew(){
//     //check to see if the boat can be manned
//     if( theWalrus === crew.length ){
//         console.log( 'in enoughCrew' );
//         return true;
//     } // end if exact crew
//     else if( theWalrus > crew.length ){
//         console.log( 'in enoughCrew' )
//         return false;
//     }// end if crew is needed
//     else if( theWalrus < crew.length) {
//         console.log( 'in enoughCrew' )
//         return true;
//     }// end if too many people on board
// }// end enoughCrew

// function hireCrew( nameOfPirate ){
//     console.log( 'in hireCrew' )
//     crew.push( nameOfPirate );
// }// end hire crew

// function cannonsArmed(){
//     if( cannonBalls >= cannons*3 ) {
//         console.log( 'in cannonsArmed' );
//         return true;
//     }// cannons are loaded
//     else {
//         console.log( 'in cannonsArmed' );
//         return false;
//     }// need more cannonballs
// }// end cannonsArmed

// // function a while loop for cannon balls?

// function reloadBalls(){
//     while( cannonBalls < totalCannonballs.length )
//     console.log( 'in reloadBalls' );
//     cannonBalls++;
//     return cannonBalls
// }// end while loop

// function readyToSail(){
//     if( enoughCrew() === true && cannonsArmed() === true ){
//         console.log( 'in readyToSail' );
//         return 'Lets get underway!'
//     }// lets get underway
//     else{
//         console.log( 'in readyToSail' );
//         return 'Need more time in Nassau'
//     }// not ready to sail
// }// end ready to sail


// BEGIN PIRATE ADVENTURE

// your ship docks at nassau. you need supplies to hunt
// add crew and ammo so the ship is ready to get under way
// console.log( readyToSail(), crew, cannonBalls );

// //hire crew
// hireCrew( 'singleton' );
// hireCrew( 'billy' );
// hireCrew( 'dufrane' );
// hireCrew( 'degroot' );
// hireCrew( 'logan' );
// hireCrew( 'mosiah' );
// hireCrew( 'boclerk' );

// //purchase cannonballs
// reloadBalls()
// reloadBalls()
// reloadBalls()
// reloadBalls()
// reloadBalls()
// reloadBalls()
// reloadBalls()
// reloadBalls()
// reloadBalls()
// reloadBalls()
// reloadBalls()
// reloadBalls()

// console.log( readyToSail(), crew, cannonBalls );

// //the walrus attacks the hispaniola
// //fires 4 cannonballs and adds 'silver' to their crew

// cannonBalls -= 4;
// hireCrew( 'silver' );

// console.log( readyToSail(), crew, cannonBalls );

// //sails back to nassau for supplies.
// reloadBalls()
// reloadBalls()
// reloadBalls()
// reloadBalls()

// // while on nassau, singleton challenges flint and dies - add to deadMen 
// //vane kills mosiah in an attempt to depose cpt. flint

// for( let i=0; i<crew.length; i++){
//     if( crew[i] === 'singleton'){
//         let theDead = crew.splice(i,1);
//         deadMen.push( theDead );
//     } else if( crew[i] === 'mosiah'){
//         let theDead = crew.splice(i,1);
//         deadMen.push( theDead );
//     }//end of mosiah
// }//end of singleton

// // recruit muldoon
// hireCrew( 'muldoon' );

// console.log( crew );
// console.log( deadMen );
// console.log( readyToSail(), crew, cannonBalls );

// // the walrus captures brysons ship, but loses two crew in the process
// // crew lost - boclerk and logan
// // cannonballs lost 1
// cannonBalls -= 1;

// for(let i=0; i<crew.length; i++){
//     if( crew[i] === 'boclerk'){
//         let theDead = crew.splice(i,1);
//         deadMen.push( theDead );
//     } else if( crew[i] === 'logan'){
//         let theDead = crew.splice(i,1);
//         deadMen.push( theDead );
//     }//end of logan
// }//end of loop    
    

// console.log( crew );
// console.log( deadMen );


console.log( 'card exercise and object literals' );

let card0 = {
    suit: 'Hearts',
    number: 10
}

let card1 = {
    suit: 'Spades',
    number: 10
}

console.log( card0, card1 );

//now check to see if card is red

// function isRed( cardToCheck ){
//     console.log( 'in isRed', cardToCheck );
//     if( cardToCheck.suit === 'Diamonds' || cardToCheck.suit === 'Hearts'){
//         return true;
//     }// card is red
//     else {
//         return false;
//     }//card is not red
// } //end isRed

// console.log( isRed( card0 ) );
// console.log( isRed( card1 ) );

//write a function and return the card that is higher

function isHigher( card0, card1 ){
    console.log( 'in isHigher', card0, card1 )
    if( card0.number > card1.number ){
        return card0;
    }// end card0 is higher
    else if( card0.number < card1.number){
        return card1;
    }// endd card1 is higher
    else if( card0 === card1 ){
        return card1;
    }//end split pot
}// end isHigher

console.log( isHigher( card0, card1 ) );
