function calculateCost() {
    const daysRented = parseInt(document.getElementById("daysInput").value, 10);
    const carType = document.getElementById("carTypeInput").value;
    const totalCostOutput = document.getElementById("totalCostOutput");

    if (!isNaN(daysRented) && daysRented > 0) {
        const rentalCostPerDay = getRentalCostPerDay(carType);
        const totalCost = rentalCostPerDay * daysRented;
        totalCostOutput.textContent = `Rs. ${totalCost}/-`;
    } else {
        totalCostOutput.textContent = "Invalid input";
    }
}

function getRentalCostPerDay(carType) {
    switch (carType.toLowerCase()) {
        case 'economy':
            return 4000;
        case 'midsize':
            return 10000;
        case 'luxury':
            return 20000;
        default:
            return 0;
    }
}
