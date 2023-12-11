document.addEventListener('DOMContentLoaded', function () {
    let list = document.getElementById("list");
    let btn = document.getElementById("add-item");
    let message = document.getElementById("message");
    let nextItemIndex = 0;
    let items = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'];

    function addItem() {
        if (nextItemIndex < items.length) {
            let newItem = document.createElement("li");
            newItem.textContent = items[nextItemIndex];
            list.appendChild(newItem);
            nextItemIndex++;
        } else {
            message.innerText = "All items have been added";
        }
    }

    btn.addEventListener('click', addItem);
});
