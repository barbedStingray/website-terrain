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

const addHedge = document.querySelector(`#disp-product`);

function addTerrainProduct(arr){
    for(let i=0; i<arr.length; i++){
        addHedge.innerHTML += `<img class="hedge" src="${arr[i].image}"/>`;
        console.log(`${arr[i].item}`);
    }
}// end addHedgeProduct

// addTerrainProduct(hedgeCollection);
// addTerrainProduct(hedgeCollection);