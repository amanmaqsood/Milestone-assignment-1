document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', function () {
        const todoText  = todoInput.value.trim();

        if (todoText  !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = todoText ;

            // Add a delete button to remove the todo item
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', function () {
                listItem.remove();
            });

            listItem.appendChild(deleteBtn);
            todoList.appendChild(listItem);

            // Clear the input field after adding a todo
            todoInput.value = '';
        }
    });
});
