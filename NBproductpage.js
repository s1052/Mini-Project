// Array of 15 Puma sneaker objects
const sneakers = [
    { id: 1, name: "NEW BALANCE BB550'WHITE'", price: 12999, image: "sneaker1.jpg" },
    { id: 2, name: "NW BALANCE 327'BLUE'", price: 10999, image: "sneaker2.jpg" },
    { id: 3, name: "NEW BALANCE </br> WMN'S 327", price: 10999, image: "sneaker3.jpg" },
    { id: 4, name: "NEW BALANCE 530", price: 10999, image: "sneaker4.jpg" },
    { id: 5, name: "NEW BALANCE </br> WMN'S 574", price: 10999, image: "sneaker5.jpg" },
    { id: 6, name: "NEW BALANCE 574", price: 9999, image: "sneaker6.jpg" },
    { id: 7, name: "NEW BALANCE </br> 574 LEGACY", price: 11990, image: "sneaker7.jpg" },
    { id: 8, name: "NEW BALANCE WMN'S BB550", price: 12999, image: "sneaker8.jpg" },
    { id: 9, name: "NEW BALANCE 327", price: 10999, image: "sneaker9.jpg" },
    { id: 10, name: "NEW BALANCE 997R", price: 11999, image: "sneaker10.jpg" },
    
    
];

function loadProducts() {
    const productList = document.getElementById('product-list');
   
    const limitedSneakers = sneakers.slice(0, 12);

    // limitedSneakers.forEach(sneaker => {
    //     const productItem = document.createElement('div');
    //     productItem.classList.add('product-item');

    //     // productItem.innerHTML = `
    //     //     <img src="images/${sneaker.image}" alt="${sneaker.name}">
    //     //     <h3>${sneaker.name}</h3>
    //     //     <p>$${sneaker.price}</p>
    //     //     <button onclick="addToCart(${sneaker.id})">Add to Cart</button>
    //     // `;

        productList.appendChild(productItem);
    }


window.onload = loadProducts;