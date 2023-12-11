function findHighestMarks() {
    const mark1 = parseFloat(document.getElementById("mark1").value) || 0;
    const mark2 = parseFloat(document.getElementById("mark2").value) || 0;
    const mark3 = parseFloat(document.getElementById("mark3").value) || 0;
    const mark4 = parseFloat(document.getElementById("mark4").value) || 0;
    const mark5 = parseFloat(document.getElementById("mark5").value) || 0;

    // Create an array of student marks
    const marksArray = [mark1, mark2, mark3, mark4, mark5];

    // Find the highest marks using the ternary operator
    const highestMarks = marksArray.reduce((max, mark) => mark > max ? mark : max, 0);

    // Display the result
    document.getElementById("result").textContent = `The highest marks in the class are: ${highestMarks}`;
}
