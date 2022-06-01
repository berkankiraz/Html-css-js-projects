// all elements is selected
const form = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo") 
const todoList = document.querySelector(".list-group") 
const firstcardbody = document.querySelectorAll(".card-body")[0]
const secondcardbody = document.querySelectorAll(".card-body")[1]
const filter = document.querySelector("#filter")
const clearButton = document.querySelector("#clear-todos")
const alertdiv = document.querySelector(".alertdiv")
howmanyalert=true;

eventListener();

//all event listener
function eventListener(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodostoUI);
    secondcardbody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAll);
}
function clearAll(e){
    if(confirm("Are you sure to delete all todos ?")){
        while(todoList.firstElementChild !=null){
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");

    }


}
function filterTodos(e){
    const filtervalue = e.target.value.toLowerCase();
    const listItem = document.querySelectorAll(".list-group-item");
    listItem.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filtervalue) === -1){            //it did not find.
            listItem.setAttribute("style","display : none !important")
        }
        else{
            listItem.setAttribute("style","display : block ");
        }
    })
}
function deleteTodo(e){
    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();//it is deleted from UI
        deletetodofromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","Todo is deleted.")
    }
    
}
function deletetodofromStorage(deletetodo){
    let todos= gettodosfromStorage();
    todos.forEach(function(todo,index){
        if(todo === deletetodo){
            todos.splice(index,1); //delete value from array. 
        }

    });

    localStorage.setItem("todos",JSON.stringify(todos));

}

function loadAllTodostoUI(){
    let todos = gettodosfromStorage();
    todos.forEach(function(todo){
        addTodoUI(todo);
    });
}    
function addTodo(e){
    const newTodo = todoInput.value.trim();//get the value inside input// trim() : delete the spaces in stirng
    if(newTodo ==""){
        showAlert("danger","Please enter the todo...");
    }
    else{
        addTodoUI(newTodo);
        addTodoStorage(newTodo);
        showAlert("success","It is saved.")
    }
    e.preventDefault();
}
//get todos from storage
function gettodosfromStorage(){
    let todos;
    if(localStorage.getItem("todos")=== null){

        todos= [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));

    }
    return todos;
}
function addTodoStorage(newTodo){

    let todos = gettodosfromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function showAlert(type,message){
    if(howmanyalert){//if more than click on button,it is blocked showing more than one alert. 
        const alert = document.createElement("div");
        alert.className=`alert alert-${type}`;
        alert.textContent = message;
        firstcardbody.appendChild(alert);
        howmanyalert=false;
        setTimeout(function(){
            alert.remove();
            howmanyalert=true;
        },1000)
    }
    else{
        console.log("click more than one(empty todo)");
    }
}

function addTodoUI(newTodo){// get string and add item to UI.
    //creating list ıtem
    const listItem = document.createElement("li") ;
  
    //creating link
    const link = document.createElement("a");
    link.href = "#" ; 
    link.className="delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>" ;

    listItem.className = "list-group-item d-flex justify-content-between";
    listItem.appendChild(document.createTextNode(newTodo))
    listItem.appendChild(link);
    todoList.appendChild(listItem);
    todoInput.value = "";
          

}