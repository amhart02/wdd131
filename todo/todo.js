const addTodo = (event) => {
    if (event.key === 'Enter') {
        const todoItem = document.getElementById('todoInput').value;
        if (todoItem) {
            const todoList = document.getElementById('todoList');
            const todoItemElement = document.createElement('li');
            todoItemElement.innerText = todoItem;
            todoList.appendChild(todoItemElement);
            document.getElementById('todoInput').value = '';
        }
    }
};

document.getElementById('todoInput').addEventListener('keypress', addTodo)