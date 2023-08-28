console.log('more review');

function minNumber(val1, val2){
    return Math.min(val1, val2);
}

minNumber(342, 1235);
console.log( minNumber(6, 1));


function evenOrOdd(num){
    if( num % 2 === 0 ){
        return true;
    } else {
        return false;
    }// end boolean
}// end function

console.log( evenOrOdd(-2) );

//bean counting

let mPoppins = 'supercalifragilisticexpialdocious'
let charCount = 0;

function ltrCount(x){
    for(let i = 0; i < mPoppins.length; i++){
        if( mPoppins[i] === x ){
            charCount++;
        }
    }
    return 'The letter ' + x + ' appears ' + charCount + ' times!';
}

console.log( ltrCount('i') );
console.log( charCount );