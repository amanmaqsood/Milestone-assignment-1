document.addEventListener('DOMContentLoaded', function () {
    const colorChangeBtn = document.getElementById('colorChangeBtn');
    
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#34495e', '#1abc9c', '#d35400'];

    colorChangeBtn.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * colors.length);
        document.body.style.backgroundColor = colors[randomIndex];
    });
});
