const addButton = document.querySelector('button');
const inputElement = document.querySelector('.js-name-input');

let space = document.querySelector('.todo-space')

addButton.addEventListener('click', function(){
    addTodo();
    addToDiv()
    inputElement.value = ''

})

let todoList = [];



function addToDiv (){
    let todoHTML = ''

for(let i = 0; i<todoList.length; i++){
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    let html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
        todoList.splice(${i},1);
        addToDiv()
    " class="delete-button">Delete</button>
    
    
    `;
    todoHTML  += html
}

space.innerHTML = todoHTML 
localStorage.setItem('todo', JSON.stringify())

}

function addTodo(){
    
    const name = inputElement.value

    
    const dateInputElement = document.querySelector('#dueDate')
const dueDate = dateInputElement.value;
    todoList.push({
        // name: name,
        // dueDate: dueDate,
        name, 
        dueDate
    })
    console.log (todoList)
}

inputElement.addEventListener('keydown', function (event){
    if(event.key === 'Enter'){
        addTodo();
        addToDiv()
        inputElement.value = ''
    }
})
