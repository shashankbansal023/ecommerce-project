
const cart = document.querySelector('.cart-container');
const totalMRP = document.querySelector('.total-mrp');
const singleProduct = document.querySelector('.cart-container');
const totalDiscountOnCheckout = document.querySelector('.total-discount');
const totalAmount = document.querySelector('.total-amount');

function render(){
    let products = "";
    for(let i in localStorage){
        let obj = JSON.parse(localStorage.getItem(i));
        if(obj){
            const {category,brand,price,image,id} = obj;
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
                            <button>Remove from Cart</button>
                        </div>
                        <div class="price-details">
                            <span>${price.discountedPrice}</span>
                            <span class="mrp-price">${price.mrp}</span>
                            <span>${price.discount}</span>
                        </div>
                    </div>
                </div>
            </div>
            `)
        }
        
    }
    
    cart.innerHTML = products;
}

render();
renderPrice();

singleProduct.addEventListener('click',(e)=>{
    let productID = e.target.parentNode.parentNode.parentNode.parentNode.id;
    window.localStorage.removeItem(`${productID}`);
    render();
    renderPrice();
})


function renderPrice(){
    let totalDiscount = 0;
    let totalMrp = 0;
    let discountPrice = 0;
    for(let i in localStorage){
          let obj = JSON.parse(localStorage.getItem(i));
          if(obj){
              const {price} = obj;
              const {discountedPrice,mrp} = price;
              if(discountedPrice){
                discountPrice += discountedPrice; 
              }
              if(mrp){
                totalMrp+=mrp;
              }
          }  
    }

    totalDiscount = totalMrp-discountPrice;
    totalMRP.textContent = totalMrp;
    totalDiscountOnCheckout.innerHTML = totalDiscount;
    totalAmount.innerHTML = discountPrice; 
}
