// Retrieve the cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Select the cart items container and total price container
const cartItemsDiv = document.getElementById('cart-items');
const totalPriceDiv = document.getElementById('total-price');

// Modal elements for Swish payment
const modal = document.getElementById('swish-modal');
const closeModal = document.querySelector('.close');

// Function to display cart items with "Remove" buttons
function displayCartItems() {
    cartItemsDiv.innerHTML = ''; // Clear previous items

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
        totalPriceDiv.innerHTML = '';
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>Price: ${item.price.toFixed(2)}KR</p>
            <button class="remove-item" data-index="${index}">Remove</button>
        `;
        cartItemsDiv.appendChild(cartItem);
        total += item.price;
    });

    totalPriceDiv.innerHTML = `<h3>Total: ${total.toFixed(2)}KR</h3>`;
}

// Function to remove an item from the cart
function removeItemFromCart(index) {
    cart.splice(index, 1); // Remove the item from the cart array
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    displayCartItems(); // Refresh the cart display
}

// Function to handle payment (mock)
function showSwishModal() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }
    alert("Thank you for your purchase!");
    localStorage.removeItem('cart'); // Clear the cart
    location.reload(); // Reload the page
}

// Function to show the Swish modal with the number
function showSwishModal() {
    modal.style.display = "block"; // Display the modal
}

// Function to close the modal
closeModal.addEventListener('click', () => {
    modal.style.display = "none"; // Hide the modal when the close button is clicked
});

// Close the modal if user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Hide the modal
    }
}

// Event listener for the "Pay with Swish" button
document.getElementById('pay-swish').addEventListener('click', showSwishModal);

// Add event listeners to dynamically created "Remove" buttons
cartItemsDiv.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-item')) {
        const index = event.target.dataset.index; // Get the index of the item to remove
        removeItemFromCart(index); // Remove the item from the cart
    }
});

// Display cart items on page load
window.onload = displayCartItems;

// Retrieve the cart from localStorage
let cart2 = JSON.parse(localStorage.getItem('cart')) || [];

// Select the cart items container and total price container
const cartItemsDiv2 = document.getElementById('cart-items');
const totalPriceDiv2 = document.getElementById('total-price');

// Modal elements for Swish payment
const modal2 = document.getElementById('swish-modal');
const closeModal2 = document.querySelector('.close');

// Function to display cart items with "Remove" buttons
function displayCartItems() {
    cartItemsDiv.innerHTML = ''; // Clear previous items

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
        totalPriceDiv.innerHTML = '';
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>Price: ${item.price.toFixed(2)} KR</p>
            <button class="remove-item" data-index="${index}">Remove</button>
        `;
        cartItemsDiv.appendChild(cartItem);
        total += item.price;
    });

    totalPriceDiv.innerHTML = `<h3>Total: ${total.toFixed(2)} KR</h3>`;
}

// Function to remove an item from the cart
function removeItemFromCart(index) {
    cart.splice(index, 1); // Remove the item from the cart array
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    displayCartItems(); // Refresh the cart display
}

// Function to handle payment (mock)
function handlePayment() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }
    alert("Thank you for your purchase!");
    localStorage.removeItem('cart'); // Clear the cart
    location.reload(); // Reload the page
}

// Function to show the Swish modal with the number
function showSwishModal() {
    modal.style.display = "block"; // Display the modal
}

// Function to clear the cart after Swish payment
function clearCartAfterSwish() {
    // Clear the cart from localStorage
    localStorage.removeItem('cart');
    cart = []; // Clear the cart array
    displayCartItems(); // Update the cart display to show it's empty
    alert("Thank you for using Swish! Your cart has been cleared.");
}

// Event listener to close the modal and clear the cart after Swish payment
closeModal.addEventListener('click', () => {
    modal.style.display = "none"; // Hide the modal when the close button is clicked
    clearCartAfterSwish(); // Clear the cart after the modal is closed
});

// Close the modal if user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Hide the modal
        clearCartAfterSwish(); // Clear the cart after the modal is closed
    }
}

// Event listener for the "Pay Now" button
document.getElementById('pay-now').addEventListener('click', handlePayment);

// Event listener for the "Pay with Swish" button
document.getElementById('pay-swish').addEventListener('click', showSwishModal);

// Add event listeners to dynamically created "Remove" buttons
cartItemsDiv.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-item')) {
        const index = event.target.dataset.index; // Get the index of the item to remove
        removeItemFromCart(index); // Remove the item from the cart
    }
});

// Display cart items on page load
window.onload = displayCartItems;

// Retrieve the cart from localStorage
let cart3 = JSON.parse(localStorage.getItem('cart')) || [];

// Select the cart items container and total price container
const cartItemsDiv3 = document.getElementById('cart-items');
const totalPriceDiv3 = document.getElementById('total-price');

// Function to display cart items with "Remove" buttons
function displayCartItems() {
    cartItemsDiv.innerHTML = ''; // Clear previous items

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
        totalPriceDiv.innerHTML = '';
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>Size: ${item.size}</p> <!-- Display the size -->
            <p>Price: ${item.price.toFixed(2)} KR</p>
            <button class="remove-item" data-index="${index}">Remove</button>
        `;
        cartItemsDiv.appendChild(cartItem);
        total += item.price;
    });

    totalPriceDiv.innerHTML = `<h3>Total: ${total.toFixed(2)} KR</h3>`;
}

// Function to remove an item from the cart
function removeItemFromCart(index) {
    cart.splice(index, 1); // Remove the item from the cart array
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    displayCartItems(); // Refresh the cart display
}

// Function to handle payment (mock)
function handlePayment() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }
    alert("Thank you for your purchase!");
    localStorage.removeItem('cart'); // Clear the cart
    location.reload(); // Reload the page
}

// Display cart items on page load
window.onload = displayCartItems;








// checkout.js

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        // Display each item in the cart
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="width: 100px; height: auto;">
                <p>${item.name} - ${item.color}</p>
                <p>Price: ${item.price}</p>
            `;

            cartItemsContainer.appendChild(itemElement);
        });
    }

    // Clear cart after payment
    const checkoutButton = document.getElementById('checkout-button');
    checkoutButton.addEventListener('click', function() {
        alert('Payment successful with Swish!');
        
        // Clear the cart after payment
        localStorage.removeItem('cart');
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    });
});