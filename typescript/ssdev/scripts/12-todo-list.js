const todoList = [];

function handleEnterInput(event){

    if (event.key === 'Enter'){
        addTodo();
    }
}



function todoListString(){
    let result = ''
    for( let i=0; i<todoList.length; i++ ){

        const {name, dueDate} = todoList[i];
        result += `  
        <span>${ name}</span>    

        <span>${ dueDate}</span>
        <button onclick=" todoList.splice(${i},1); renderTodo(); " class="delete-todo-button">Delete</button>
         
        `
    }

    return result;
}

function addTodo(){
    const todoName = document.querySelector('.js-name-input').value;
    const todoDate = document.querySelector('.js-date-input').value;
    todoList.push( {name: todoName, dueDate : todoDate} );
    document.querySelector('.js-name-input').value = ''
    console.log(todoListString());

    //document.querySelector('.js-todo-list').innerHTML = todoListString();
    renderTodo()
}

function renderTodo(){

    document.querySelector('.js-todo-list').innerHTML = todoListString();
}