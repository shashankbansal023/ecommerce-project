
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
        <div class='single-product' id=${id}>  
            <div class="product-img">
                <img src=${image}>
            </div>
            <div class="product-details">
                <div class="product-intro">
                    <p class="brand-name">${brand}</p>
                    <p class="category">${category}</h1>
                </div>
                    <div class="product-description"> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem expedita explicabo
                commodi sunt vel, placeat soluta est alias. In, et minima! Accusamus maiores libero 
                eligendi aliquam distinctio nam! Voluptate, eveniet?
                </div>
                <div class="product-footer">
                    <div class="remove-button">
                        <button class="remove-btn">Remove from Cart</button>
                    </div>
                    <div class="price-details">
                        <span>Rs.${discountedPrice}</span>
                        <span class="mrp-price">Rs.${mrp}</span>
                        <span>${discount}</span>
                    </div>
                    <div class="quantity">
                    <label for="quantity">Quantity </label>
                    <input type="number" id="quantity${id}" value=${quantity} name="quantity" min="1" max="10">
                </div>
                </div>
            </div>
        </div>
        `)

    }
    
    cart.innerHTML = products;
}

render();
renderPrice();

cart.addEventListener('click',(e)=>{

    if(e.target.classList.value=== "remove-btn"){
        
        let productID = e.target.parentNode.parentNode.parentNode.parentNode.id;
        let updatedCartItems = JSON.parse(localStorage.getItem('cart'));
        updatedCartItems = updatedCartItems.filter(item=> item.id!=productID);
        localStorage.setItem('cart',JSON.stringify(updatedCartItems));
        render();
        renderPrice();
    }
    
})

cart.addEventListener('change',(e)=>{
    let productID = e.target.parentNode.parentNode.parentNode.parentNode.id;
    let cartItems = JSON.parse(localStorage.getItem('cart'));
    let updatedCartItems = cartItems.map(item=>{
        if(item.id== productID){
            item["quantity"] = e.target.value;
        }
        return item;
    }) 
    localStorage.setItem('cart',JSON.stringify(updatedCartItems));
    render();
    renderPrice();
})



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
