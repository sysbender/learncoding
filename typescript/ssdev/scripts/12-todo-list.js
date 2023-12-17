const todoList = [];
//  add button event listener
document.querySelector('.add-todo-button').addEventListener( 'click', ()=> addTodo() );
function handleEnterInput(event){

    if (event.key === 'Enter'){
        addTodo();
    }
}



function todoListString(){
    let result = ''
    // for( let i=0; i<todoList.length; i++ ){

    //     const {name, dueDate} = todoList[i];
    //     result += `  
    //     <span>${ name}</span>    

    //     <span>${ dueDate}</span>
    //     <button onclick=" todoList.splice(${i},1); renderTodo(); " class="delete-todo-button">Delete</button>
         
    //     `
    // }

    todoList.forEach( (todoItem , index )=>{
        const {name, dueDate} = todoItem;
        result += `  
        <span>${ name}</span>    

        <span>${ dueDate}</span>
        <button  class="delete-todo-button js-delete-todo-button">Delete</button>
   
         
        `
             // onclick=" todoList.splice(${index},1); renderTodo(); "
    })

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
    document.querySelectorAll('.js-delete-todo-button').forEach( (buttonElement, index)=>{
        buttonElement.addEventListener('click',()=>{
            deleteTodo(index);
        } )
    })
}

function deleteTodo(index){
    //
    todoList.splice(index, 1);
    renderTodo();
}
