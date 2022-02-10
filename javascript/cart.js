
const cart = document.querySelector('.cart-container');
const totalMRP = document.querySelector('.total-mrp');
const totalDiscountOnCheckout = document.querySelector('.total-discount');
const totalAmount = document.querySelector('.total-amount');


function render(){

    let products = "";
    let cartItems = JSON.parse(localStorage.getItem('cart'));
    for(let item of cartItems){
        const {category,brand,price,image,id,quantity} = item;
        const {mrp = "",discount="",discountedPrice=""} = price;

    products+=(`
        <div class='single-product row mb-3' id=${id}>  
            <div class="product-img m-0 p-2 col-4">
                <img src=${image}>
            </div>

            <div class="product-details col">
                <div class="product-intro">
                    <div class="brand-name">${brand}</div>
                    <div class="category">${category}</h1>
                </div>

                <div class="product-footer ">
                    <div class="price-quantity-box">
                        <div class="price-details">
                            <span>Rs.${discountedPrice}</span>
                            <span class="mrp-price">Rs.${mrp}</span>
                            <span>${discount}</span>
                        </div>
                    

                        <div class="quantity-counter-box row d-flex justify-content-around" id="quantity-counter-box-${id}">
                            <div class="input-group quantity-counter col-6 mb-2" style='width:30%'>
                                    <button onclick="decrementQuantity(${id})" class="col btn btn-secondary" type="button" id="button-addon1-${id}">-</button>
                                        <input  id="quantity-count-${id}" type="text"  class="col form-control" value=${quantity} placeholder="">
                                    <button onclick="incrementQuantity(${id})" class="col btn btn-info" type="button" id="button-addon2-${id}">+</button>
                            </div>
                            <div class="remove-button col-6">
                                <button class="btn btn-danger" onclick="removeItem(${id})">Remove from Cart</button>
                            </div>
                            
                        </div>
                    </div> 

                </div>
            </div>
        </div>
    </div>
        `)

    }
    if(!cartItems.length){
        products = (`
            <div class="empty-cart">
                <img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp">
                <div class="empty-cart-text">
                    <p>It feels so light. </p>
                    <p> Add items to the cart</p>
                </div>
            </div>
        `)
        document.querySelector('.checkout').innerHTML = "";
    }
    cart.innerHTML = products;
}

render();
renderPrice();

function removeItem(productID){

    let cartItems = JSON.parse(localStorage.getItem('cart'));
    let updatedCartItems = cartItems.filter(item=> item.id!=productID);
    localStorage.setItem('cart',JSON.stringify(updatedCartItems));
    render();
    renderPrice();
}


function incrementQuantity(id){

    let quantityCount = document.getElementById(`quantity-count-${id}`); 

    if(quantityCount.value < 10){
        quantityCount.value++;
    }

    let cart = JSON.parse(localStorage.getItem('cart'));
    let newCart = cart.map(item=> {
        if(item.id== id){
            item["quantity"] = quantityCount.value;
        }
        return item;
    })
    localStorage.setItem('cart',JSON.stringify(newCart));
    render();
    renderPrice();

}

function decrementQuantity(id){

    let quantityCount = document.getElementById(`quantity-count-${id}`);
 
    if(quantityCount.value > 1){
        quantityCount.value--;
    }

    let cart = JSON.parse(localStorage.getItem('cart'));
    let newCart = cart.map(item=> {
        if(item.id== id){
            item["quantity"] = quantityCount.value;
        }
        return item;
    })
    localStorage.setItem('cart',JSON.stringify(newCart));
   render();
   renderPrice();
}


function renderPrice(){ 

    let priceObject = {
        totalDiscount:0,
        totalMrp : 0,
        discountPrice:0
    }
    let cartItems = JSON.parse(localStorage.getItem('cart'));

    let totalPriceDetails = cartItems.reduce((accumulator,currentValue)=>{
        const {price,quantity} = currentValue;
        const {mrp,discountedPrice} = price;
        
        accumulator["totalMrp"] += Number(mrp)*Number(quantity);
        accumulator["discountPrice"]+=Number(discountedPrice)*Number(quantity);
        return accumulator;
    },priceObject)
   
    totalPriceDetails["totalDiscount"] = totalPriceDetails["totalMrp"] - totalPriceDetails["discountPrice"];

    const {totalDiscount , totalMrp, discountPrice} = totalPriceDetails;
    totalMRP.textContent = totalMrp;
    totalDiscountOnCheckout.innerHTML = totalDiscount;
    totalAmount.innerHTML = discountPrice; 
}

function orderPlaced(){
    cart.innerHTML = `
        <div class="order-placed">
            <img src= "https://www.orbitclinics.com/wp-content/uploads/Order-Placed-Icon.jpg">
            <div class= "">
                <p>ORDER PLACED
            </div>
        </div>
    `
    document.querySelector('.checkout').innerHTML = "";
}