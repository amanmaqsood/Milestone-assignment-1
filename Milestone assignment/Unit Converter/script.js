function convertTemperature() {
    const celsiusInput = document.getElementById("celsiusInput").value;
    const fahrenheitOutput = document.getElementById("fahrenheitOutput");

    if (!isNaN(celsiusInput)) {
        const fahrenheitTemperature = (celsiusInput * 9/5) + 32;
        fahrenheitOutput.textContent = fahrenheitTemperature.toFixed(2) + " °F";
    } else {
        fahrenheitOutput.textContent = "Invalid input";
    }
}
