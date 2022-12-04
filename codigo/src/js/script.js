
let db = [
    {'task' : 'Teste'},
]

const criarItem = (title) => {


    var input = document.querySelector("#newItem");
    var title = input.value;
    const item = document.createElement('div');
    item.classList.add('todoItem');
    item.innerHTML = ` 
    <div>${title}</div>
    <input class="close-button" type="button" value="X" onClick="removerItem()"></input>`

    document.querySelector('#todoList').appendChild(item);
}

const updateScreen = () =>{
    db.forEach( item => criarItem(item.task))
}

const removerItem = () => {
    var node = document.querySelector('.todoItem')
    node.parentNode.removeChild(node);
}


// const limparTarefas = () => {
//     const todoList = document.querySelector('#todoList');

//     while( todoList.firstChild){
//         todoList.removeChild(todoList.lastChild)
//     }
// }

updateScreen();


