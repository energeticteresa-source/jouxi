let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert("Item added to your jewelry box!");
}
