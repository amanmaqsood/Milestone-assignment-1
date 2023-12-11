function calculateBill() {
    const costPerDish = parseFloat(document.getElementById("costInput").value);
    const numberOfPeople = parseInt(document.getElementById("peopleInput").value, 10);
    const totalBillOutput = document.getElementById("totalBillOutput");
    const billPerPersonOutput = document.getElementById("billPerPersonOutput");

    if (isNaN(costPerDish) || isNaN(numberOfPeople) || costPerDish <= 0 || numberOfPeople <= 0) {
        totalBillOutput.textContent = "Invalid input";
        billPerPersonOutput.textContent = "Invalid input";
    } else {
        const totalBill = costPerDish * numberOfPeople;
        const billPerPerson = totalBill / numberOfPeople;
        totalBillOutput.textContent = `Rs. ${totalBill.toFixed(2)}/-`;
        billPerPersonOutput.textContent = `Rs. ${billPerPerson.toFixed(2)}/-`;
    }
}
