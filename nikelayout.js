// Array of 15 Puma sneaker objects
const sneakers = [
    { id: 1, name: "Puma Suede Classic", price: 120, image: "sneaker1.jpg" },
    { id: 2, name: "Puma RS-X3", price: 150, image: "sneaker2.jpg" },
    { id: 3, name: "Puma Future Rider", price: 110, image: "sneaker3.jpg" },
    { id: 4, name: "Puma Cali Star", price: 135, image: "sneaker4.jpg" },
    { id: 5, name: "Puma Basket", price: 125, image: "sneaker5.jpg" },
    { id: 6, name: "Puma Thunder Spectra", price: 160, image: "sneaker6.jpg" },
    { id: 7, name: "Puma Ignite Limitless", price: 140, image: "sneaker7.jpg" },
    { id: 8, name: "Puma Cell Alien", price: 145, image: "sneaker8.jpg" },
    { id: 9, name: "Puma RS-X Tech", price: 155, image: "sneaker9.jpg" },
    { id: 10, name: "Puma Defy", price: 135, image: "sneaker10.jpg" },
    { id: 11, name: "Puma LQDCell", price: 170, image: "sneaker11.jpg" },
    { id: 12, name: "Puma Ralph Sampson", price: 130, image: "sneaker12.jpg" },
    { id: 13, name: "Puma X-Ray", price: 120, image: "sneaker13.jpg" },
    { id: 14, name: "Puma RS-2K", price: 140, image: "sneaker14.jpg" },
    { id: 15, name: "Puma Enzo 2", price: 110, image: "sneaker15.jpg" }
];

// Function to load products into the grid
function loadProducts() {
    const productList = document.getElementById('product-list');

    sneakers.forEach(sneaker => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        productItem.innerHTML = `
            <img src="images/${sneaker.image}" alt="${sneaker.name}">
            <h3>${sneaker.name}</h3>
            <p>$${sneaker.price}</p>
            <button onclick="addToCart(${sneaker.id})">Add to Cart</button>
        `;

        productList.appendChild(productItem);
    });
}

// Function to add product to cart
let cartCount = 0;

function addToCart(id) {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    
}

// Load products on page load
window.onload = loadProducts;