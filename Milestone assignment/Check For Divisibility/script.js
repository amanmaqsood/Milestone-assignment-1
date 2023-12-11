function printDivisibleNumbers(arr) {
    const resultList = document.getElementById("resultList");

    for (let i = 0; i < arr.length; i++) {
        // Check if the number is divisible by 2
        if (arr[i] % 2 === 0) {
            continue; // Skip to the next iteration if divisible by 2
        }

        // Check if the number is divisible by 3
        if (arr[i] % 3 === 0) {
            const listItem = document.createElement("li");
            listItem.textContent = arr[i];
            resultList.appendChild(listItem);
        }
    }
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15];
printDivisibleNumbers(numbersArray);
