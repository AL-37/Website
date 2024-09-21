// Get all product boxes
const productBoxes = document.querySelectorAll('.product-box');

// Add click event to each product box
productBoxes.forEach(box => {
    box.addEventListener('click', () => {
        // Extract product details from the data attributes
        const productDetails = {
            name: box.dataset.name,
            price: parseFloat(box.dataset.price),
            image: box.dataset.image
        };

        // Store the selected product in localStorage
        localStorage.setItem('selectedProduct', JSON.stringify(productDetails));

        // Redirect to the product page
        window.location.href = 'product2.html';
    });
});