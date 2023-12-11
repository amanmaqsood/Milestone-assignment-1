const calculateTotalCost = (cart) => {
    if (!Array.isArray(cart) || cart.length === 0) {
        return 'Invalid cart. Please provide a non-empty array of items.';
    }

    const totalCost = cart.reduce((acc, item) => {
        if (typeof item === 'object' && 'unitPrice' in item && 'quantity' in item) {
            return acc + item.unitPrice * item.quantity;
        } else {
            console.log('Invalid item in the cart:', item);
            return acc;
        }
    }, 0);

    return totalCost;
};

const customerCart = [
    { unitPrice: 20, quantity: 3 },
    { unitPrice: 15, quantity: 2 },
    { unitPrice: 10, quantity: 4 }
];

// Display cart items
const cartList = document.getElementById("cartList");
customerCart.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.quantity} x Rs. ${item.unitPrice}/- per item`;
    cartList.appendChild(listItem);
});

// Display total order price
const totalOrderPrice = calculateTotalCost(customerCart);
const totalPriceOutput = document.getElementById("totalPriceOutput");
totalPriceOutput.textContent = `Total: Rs. ${totalOrderPrice.toFixed(2)}/-`;
