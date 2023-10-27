// Local Storage

// SetItem

/*
localStorage.setItem("hareket","burpee");
localStorage.setItem("tekrar",50);
*/

//GetItem

/*
const value = localStorage.getItem("tekrar");
console.log(value);
console.log(typeof(value));
*/

//Clear Local Storage

/*
localStorage.clear()
*/

// Array SetItem ve GetItem

/*
const todos = ["Todo 1","Todo 2","Todo 3"];
localStorage.setItem("todos",JSON.stringify(todos));

const value = JSON.parse(localStorage.getItem("todos"));
console.log(value);
*/