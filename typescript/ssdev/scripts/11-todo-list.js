const todoList = [];

function handleEnterInput(event){

    if (event.key === 'Enter'){
        addTodo();
    }
}



function todoListString(){
    let result = ''
    for( let i=0; i<todoList.length; i++ ){
        result += `<li  class="js-todo-list-style">${todoList[i]}</li>`
    }

    return `<ul>${result}</ul>`;
}

function addTodo(){
    const todoName = document.querySelector('.js-name-input').value;
    todoList.push(todoName);
    document.querySelector('.js-name-input').value = ''
    console.log(todoListString());

    document.querySelector('.js-todo-list').innerHTML = todoListString();
}