function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const operator = document.getElementById("operator").value;
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultElement = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Please enter valid numbers.";
        resultElement.style.color = "red";
        return;
    }

    switch (operator) {
        case '+':
            resultElement.textContent = `Result: ${num1 + num2}`;
            break;
        case '-':
            resultElement.textContent = `Result: ${num1 - num2}`;
            break;
        case '*':
            resultElement.textContent = `Result: ${num1 * num2}`;
            break;
        case '/':
            if (num2 === 0) {
                resultElement.textContent = "Cannot divide by zero.";
                resultElement.style.color = "red";
            } else {
                resultElement.textContent = `Result: ${num1 / num2}`;
            }
            break;
        default:
            resultElement.textContent = "Invalid operator. Please use +, -, *, /";
            resultElement.style.color = "red";
    }
}
