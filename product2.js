// Get product data from localStorage (from index.html)
const product = JSON.parse(localStorage.getItem('selectedProduct'));

// Elements from the HTML
const productImage = document.getElementById('product-image');
const productName = document.getElementById('product-name');
const productPrice = document.getElementById('product-price');
const sizeSelection = document.getElementById('size');

// Display the product information
productImage.src = product.image;
productName.textContent = product.name;
productPrice.textContent = `Price: ${product.price.toFixed(2)} KR`;

// Handle "Add to Cart" button click
document.getElementById('add-to-cart').addEventListener('click', () => {
    const selectedSize = sizeSelection.value; // Get the selected size

    // Create an item object with size information
    const itemToAdd = {
        name: product.name,
        price: product.price,
        image: product.image,
        size: selectedSize // Include the selected size
    };

    // Get the current cart from localStorage or create an empty one
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item to the cart
    cart.push(itemToAdd);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`Added ${product.name} (Color: ${selectedSize}) to the cart!`);
});