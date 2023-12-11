function doubleQuantities(cart) {
    // Use map to create a new array with doubled quantities
    return cart.map(quantity => quantity * 2);
}

// Example usage:
const originalCart = [1, 2, 3, 4, 5];
const correctedCart = doubleQuantities(originalCart);

// Display original cart
const originalCartList = document.getElementById("originalCart");
originalCart.forEach(quantity => {
    const listItem = document.createElement("li");
    listItem.textContent = quantity;
    originalCartList.appendChild(listItem);
});

// Display corrected cart
const correctedCartList = document.getElementById("correctedCart");
correctedCart.forEach(quantity => {
    const listItem = document.createElement("li");
    listItem.textContent = quantity;
    correctedCartList.appendChild(listItem);
});
