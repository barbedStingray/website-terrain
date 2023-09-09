let hedgeCollection = [
    {
        item: `Green Hedges`,
        image: `Hedges/Battlefield1.jpeg`,
        price: 30.00,
        pieces: 8,
        flock: [`spring`, `mossy`, `desert`],
    },
    {
        item: `Dry Hedges`,
        image: `Hedges/6inch.jpeg`,
        price: 30.00,
        pieces: 8,
        flock: [`spring`, `mossy`, `desert`],
    },
    {
        item: `Dark Hedges`,
        image: `Hedges/TopView.jpeg`,
        price: 30.00,
        pieces: 8,
        flock: [`spring`, `mossy`, `desert`],
    },
    {
        item: `Berry Bushes`,
        image: `Hedges/Battlefield4.jpeg`,
        price: 30.00,
        pieces: 8,
        flock: [`spring`, `mossy`, `desert`],
    }
]// end array
let rockWallCollection = [
    {
        item: `Grey Rocks`,
        image: `Rock Walls/Grey/Battlefield2.jpeg`,
        price: 30.00,
        pieces: 8,
        flock: [`spring`, `mossy`, `desert`],
    },
    {
        item: `Red Rocks`,
        image: `Rock Walls/Red/Battlefield1.jpeg`,
        price: 30.00,
        pieces: 8,
        flock: [`spring`, `mossy`, `desert`],
    },
    {
        item: `Short Rocks`,
        image: `Rock Walls/Grey/3inch.jpeg`,
        price: 30.00,
        pieces: 8,
        flock: [`spring`, `mossy`, `desert`],
    },
    {
        item: `Long Rocks`,
        image: `Rock Walls/Red/6inch2.jpeg`,
        price: 30.00,
        pieces: 8,
        flock: [`spring`, `mossy`, `desert`],
    }
]// end array

const productDisplay = document.querySelector(`#disp-product`);






function addHedgeProduct(arr){
    console.log(`running display of products`);

    clearAllProducts();
    
    for(let products of arr){
        productDisplay.innerHTML += `<img class="hedge" src="${products.image}"/>`;
        console.log(products);
    }
}// end addHedgeProduct


function addRockWallProduct(arr){
    console.log(`running display of products`);

    clearAllProducts();
    
    for(let products of arr){
        productDisplay.innerHTML += `<img class="rock-wall" src="${products.image}"/>`;
        console.log(products);
    }
}// end addHedgeProduct

function clearAllProducts(){
    console.log(`your inventory is clear!`);
    productDisplay.innerHTML = ``;
}

