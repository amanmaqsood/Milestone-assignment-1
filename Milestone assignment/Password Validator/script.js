function checkPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const resultMessage = document.getElementById("result");

    if (password === confirmPassword) {
        resultMessage.textContent = "Password Matched. Password validation Successful";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "Password didn't match. Password validation unsuccessful";
        resultMessage.style.color = "red";
    }
}
