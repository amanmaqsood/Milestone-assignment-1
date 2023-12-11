function removeAndDisplay() {
    const cartInput = document.getElementById("cartInput").value;
    const cartArray = cartInput.split(',').map(item => item.trim());

    // Remove duplicates using the removeDuplicates function
    const resultCart = removeDuplicates(cartArray);

    document.getElementById("originalCart").textContent = `Original Cart: [${cartArray.join(', ')}]`;
    document.getElementById("resultCart").textContent = `Cart without Duplicates: [${resultCart.join(', ')}]`;
}

function removeDuplicates(cart) {
    const uniqueCart = new Set(cart);
    return [...uniqueCart];
}
