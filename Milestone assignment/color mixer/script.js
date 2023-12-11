function mixColors() {
    const color1 = document.getElementById("color1").value;
    const color2 = document.getElementById("color2").value;
    const resultElement = document.getElementById("result");

    switch (`${color1.toLowerCase()} ${color2.toLowerCase()}`) {
        case 'red blue':
        case 'blue red':
            resultingColor = 'purple';
            break;
        case 'red yellow':
        case 'yellow red':
            resultingColor = 'orange';
            break;
        case 'blue yellow':
        case 'yellow blue':
            resultingColor = 'green';
            break;
        default:
            resultingColor = 'Invalid color combination';
    }

    resultElement.textContent = `Resulting color: ${resultingColor}`;
}
