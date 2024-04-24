document.getElementById('todo-list').addEventListener('click',todolist );
function todolist() {


// Fetch data from the API
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(data => {
    // Get the button element where we will append the todos
    const todoList = document.getElementById('todo-list');

    // Loop through the todos and create list items
    data.forEach(todo => {
        const listItem = document.createElement('li');
        listItem.textContent = `  ${todo.title}`;
        
        // Append the list item
        todoList.appendChild(listItem);
    });
})
.catch(error => {
    console.error('Error fetching data:', error);
});
}