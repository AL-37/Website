// Get all the products
const products = document.querySelectorAll('.product');

// Retrieve the cart from localStorage or initialize it as empty
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add a product to the cart
function addToCart(product) {
    const productName = product.dataset.name;
    const productPrice = parseFloat(product.dataset.price);

    // Add product to the cart
    cart.push({
        name: productName,
        price: productPrice
    });

    // Save the cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} added to cart.`);
}

// Add event listeners to each product for clicking
products.forEach(product => {
    product.addEventListener('click', () => addToCart(product));
});


// Get all product items
const productItems = document.querySelectorAll('.item');

// Add click event to each product item
productItems.forEach(item => {
    item.addEventListener('click', () => {
        // Extract product details from the data attributes
        const productDetails = {
            name: item.dataset.name,
            price: parseFloat(item.dataset.price),
            image: item.dataset.image
        };

        // Store the selected product in localStorage
        localStorage.setItem('selectedProduct', JSON.stringify(productDetails));

        // Redirect to the product page
        window.location.href = 'product.html';
    });
});