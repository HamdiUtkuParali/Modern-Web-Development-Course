// Tüm elementleri seçme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){ // Tüm event listener'lar
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);
}

function clearAllTodos() {
    if(confirm("Tümünü silmek istediğinize emin misiniz?"))
    {
        // Arayüzden temizleme
        while(todoList.firstElementChild != null)
        {
            todoList.removeChild(todoList.firstElementChild);
        }

        // Local Storage'dan temizleme
        localStorage.removeItem("todos");
    }

    
}

function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    
    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue) === -1) {
            listItem.setAttribute("style","display : none !important");
        }
        else {
            listItem.setAttribute("style","display : block");
        }
    });
}

function loadAllTodosUI() {
    let todos = getTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}

function deleteTodo(e) {
    if(e.target.className === "fa fa-remove") {
        const parentElement = e.target.parentElement.parentElement;
        parentElement.remove();
        deleteTodoFromStorage(parentElement.textContent);
        showAlert("success","Todo başarıyla silindi.");
    }
}

function deleteTodoFromStorage(deletetodo){
    let todos = getTodosFromStorage(); 
    todos.forEach(function(todo,index){
        if(todo === deletetodo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}

function addTodo(e){
    const newTodo = todoInput.value.trim();

    if(newTodo ==="") {
        // <div class="alert alert-danger" role="alert">
        // This is a danger alert—check it out!
        // </div>
        showAlert("danger","Lütfen bir todo girin.");
    }
    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success","Todo başarıyla eklendi.");
    }

    e.preventDefault();
}

function getTodosFromStorage() {
    let todos;
    if(localStorage.getItem("todos")===null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function showAlert(type,message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);

    // setTimeout
    setTimeout(function() {
        alert.remove();
    }, 1000);

}

function addTodoToUI(newTodo) { // String olarak aldığı değeri list item olarak UI'a ekleyecek.
    // List Item oluşturma
    const listItem = document.createElement("li");
    // Link oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between";
    // Text Node ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    // Todo List'e List Item'ı ekleme
    todoList.appendChild(listItem);
    todoInput.value = "";
}