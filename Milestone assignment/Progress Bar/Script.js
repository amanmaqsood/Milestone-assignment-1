document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        updateProgressBar();
    });
});

function updateProgressBar() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;
    document.getElementById('myBar').style.width = scrollPercentage + '%';
}
