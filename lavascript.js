console.log('if you build it, they will play');


let scenicSquares = [ 'plains', 'forest', 'desert', 'swamp', 'mountain'];
let modularTerrain = ['shrubs', 'walls', 'fences', 'ruins'];
let materials = ['flock', 'foamular', 'eXps'];

let products = ['scenicSquares', 'modularTerrain', 'materials'];
console.log( products );
console.log( scenicSquares );
console.log( modularTerrain );
console.log( materials );








//create your list in html
let squareList = document.querySelector('#square-list');
for( let item of scenicSquares ){
    console.log ( 'Scenic Style:', item);
    squareList.innerHTML += '<div>' + item + '</div>'
} //end html writing

//create your modularTerrain list in html

let modularList = document.querySelector('#modular-list');
for( let item of modularTerrain ){
    console.log( 'Style:', item );
    modularList.innerHTML += '<div>' + item + '</div>'
}// end html

let materialList = document.querySelector('#material-list');
for( let item of materials ){
    console.log( 'Type:', item );
    materialList.innerHTML += '<div>' + item + '</div>'
}// end html




