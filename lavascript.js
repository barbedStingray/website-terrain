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

let fenceCollection = [
    {
        item: `Cool Fences`,
        image: `Fences/Battlefield1.jpeg`,
        price: 30.00,
        pieces: 8,
        flock: [`spring`, `mossy`, `desert`],
    },
    {
        item: `All Fences`,
        image: `Fences/AllPieces.jpeg`,
        price: 30.00,
        pieces: 8,
        flock: [`spring`, `mossy`, `desert`],
    },
    {
        item: `Short fences`,
        image: `Fences/2inch.jpeg`,
        price: 30.00,
        pieces: 8,
        flock: [`spring`, `mossy`, `desert`],
    },
    {
        item: `Long fences`,
        image: `Fences/6inchPass.jpeg`,
        price: 30.00,
        pieces: 8,
        flock: [`spring`, `mossy`, `desert`],
    }
]// end array

const productDisplay = document.querySelector(`#disp-product`);

// display hedges on page
function addDisplayProduct(arr){

    clearAllProducts();
    console.log(`running display of hedges`);

    
    for(let products of arr){
        productDisplay.innerHTML += 
        `<div id="terrain-display">
        <h4 class="product-name">${products.item}</h4>
        <img id="${products.item}" src="${products.image}"/>`;
        console.log(products);
    }
}// end addHedgeProduct


// clearing the page of products
function clearAllProducts(){
    console.log(`your inventory is clear!`);
    productDisplay.innerHTML = ``;
}

