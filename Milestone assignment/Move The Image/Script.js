document.addEventListener('DOMContentLoaded', function () {
    const movingImage = document.getElementById('movingImage');
    let positionX = 50;
    let positionY = 50;
    const step = 5; // Adjust the step size for smoother/faster movement

    document.addEventListener('keydown', function (event) {
        // Get the key code from the event
        const keyCode = event.code;

        // Update the position based on the arrow key pressed
        switch (keyCode) {
            case 'ArrowUp':
                positionY -= step;
                break;
            case 'ArrowDown':
                positionY += step;
                break;
            case 'ArrowLeft':
                positionX -= step;
                break;
            case 'ArrowRight':
                positionX += step;
                break;
        }

        // Update the style to move the image
        movingImage.style.top = `${positionY}%`;
        movingImage.style.left = `${positionX}%`;
    });
});
