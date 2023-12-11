const generateRandomNumber = () => {
    const min = 1;
    const max = 100;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    const randomNumberDisplay = document.getElementById("randomNumberDisplay");
    randomNumberDisplay.textContent = `Generated Number: ${randomNumber}`;
};
