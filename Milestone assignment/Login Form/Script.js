const validateForm = () => {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const validationMessage = document.getElementById("validation-message");

    const email = emailInput.value;
    const password = passwordInput.value;

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email) || password.length < 8) {
        validationMessage.textContent = "Invalid email or password!";
        validationMessage.style.color = "red";
    } else {
        validationMessage.textContent = "Valid email and password.";
        validationMessage.style.color = "green";
    }
};
