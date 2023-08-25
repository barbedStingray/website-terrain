console.log('if you build it, they will play');

function actualMath( num0, num1 ){
    console.log( 'in actualMath', num0, num1 );
    let answer = num0 + num1;
    return answer;
}

function logger() {
    console.log( 'in logger' );
}// end logger

function mathExample(){
    console.log( 'in mathExample' );
    let answer = 3 * 9;
    return answer;
}

function returner(){
    console.log( 'in returner' );
    return true;
}

logger();
returner();
console.log( 'running returner:', returner());
console.log( 'running mathExample:', mathExample());
console.log( 'running actualMath 4, 2', actualMath(4, 2));
console.log( 'running actualMath 234, 123', actualMath(234, 123));
console.log( 'running actualMath 82, 37', actualMath(82, 37));
console.log( 'running actualMath 239, 082', actualMath(239, 82));