document.addEventListener('DOMContentLoaded', function () {
    const paragraph = document.getElementById('paragraph');

    const words = paragraph.innerText.split(' ');

    words.forEach(function (word) {
        if (word.length > 8) {
            // Create a span element for each highlighted word
            const span = document.createElement('span');
            span.textContent = word;
            span.classList.add('highlight');

            // Replace the original word with the highlighted span
            paragraph.innerHTML = paragraph.innerHTML.replace(word, span.outerHTML);
        }
    });
});
