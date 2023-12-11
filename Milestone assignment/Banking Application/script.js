const account = {
    name: "John Doe",
    balance: 1000,
};

const displayAccountDetails = () => {
    const accountDetails = document.getElementById("account-details");
    accountDetails.innerHTML = `<p><strong>Account Holder:</strong> ${account.name}</p>
                                <p><strong>Balance:</strong> Rs. ${account.balance}/-</p>`;
};

const deposit = () => {
    const amountInput = document.getElementById("amount");
    const amount = parseFloat(amountInput.value);

    if (!isNaN(amount) && amount > 0) {
        account.balance += amount;
        displayAccountDetails();
        amountInput.value = "";
    } else {
        alert("Please enter a valid positive amount.");
    }
};

const withdraw = () => {
    const amountInput = document.getElementById("amount");
    const amount = parseFloat(amountInput.value);

    if (!isNaN(amount) && amount > 0) {
        if (amount <= account.balance) {
            account.balance -= amount;
            displayAccountDetails();
            amountInput.value = "";
        } else {
            alert("Insufficient funds.");
        }
    } else {
        alert("Please enter a valid positive amount.");
    }
};

displayAccountDetails();
