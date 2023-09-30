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
    const todo = todoList[i];
    let html = `<p>${todo}</p>`;
    todoHTML  += html
}

space.innerHTML = todoHTML

}

function addTodo(){
    
    const name = inputElement.value

    todoList.push(name)
    console.log (todoList)

}

inputElement.addEventListener('keydown', function (event){
    if(event.key === 'Enter'){
        addTodo();
        addToDiv()
        inputElement.value = ''
    }
})
