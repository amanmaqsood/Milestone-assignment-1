const calculateDiscount = () => {
    const originalPrice = parseFloat(document.getElementById("originalPriceInput").value);
    const discountedPrice = parseFloat(document.getElementById("discountedPriceInput").value);
    const discountPercentageOutput = document.getElementById("discountPercentageOutput");

    if (isNaN(originalPrice) || isNaN(discountedPrice) || originalPrice <= 0 || discountedPrice <= 0) {
        discountPercentageOutput.textContent = "Invalid input";
    } else {
        const discountAmount = originalPrice - discountedPrice;
        const discountPercentage = (discountAmount / originalPrice) * 100;
        discountPercentageOutput.textContent = `${discountPercentage.toFixed(2)}%`;
    }
};
