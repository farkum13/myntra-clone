let bagItems ;
onLoad();

function onLoad(){
    let bagItemsStr=localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsonHomePage();

    displayBagIcon();
}

function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if(bagItems.length>0){
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    }
    else{
        bagItemCountElement.style.visibility = 'hidden';
    }
}

function displayItemsonHomePage(){
    let itemsContainerElement=document.querySelector('.items-container');
    if(!itemsContainerElement)
            return;
    let innerHTML = ' ';
    items.forEach(item => {
        innerHTML+= `
            <div class="item-container">
                <img class="item-img" src="${item.image}" alt="Product 1">
                <div class="rating">${item.rating.stars} &#11088 | ${item.rating.count} </div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">Rs ${item.current_price}</span>
                    <span class="original-price">Rs ${item.original_price}</span>
                    <span class="discount">(${item.discount_percentage}% OFF)</span>
                </div>
                <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
            </div>`
    });

    itemsContainerElement.innerHTML=innerHTML;
}



/*let item = {
    item_image: 'images/1.jpg',
    rating: {
        stars : 4.5,
        noOfReviews : 1400,
    },
    comapny_name : 'Carlton London',
    item_name : 'Rhodium Plated CZ Floral Studs',
    current_price : 606,
    original_price : 1045,
    discount_percentage : 42,
}*/



/*itemsContainerElement.innerHTML=`
            <div class="item-container">
                <img class="item-img" src="${item.item_image}" alt="Product 1">
                <div class="rating">${item.rating.stars} &#11088 | ${item.rating.noOfReviews/1000}k </div>
                <div class="company-name">${item.comapny_name}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">Rs ${item.current_price}</span>
                    <span class="original-price">Rs ${item.original_price}</span>
                    <span class="discount">(${item.discount_percentage}% OFF)</span>
                </div>
                <button class="btn-add-bag">Add to Bag</button>
            </div> `;*/