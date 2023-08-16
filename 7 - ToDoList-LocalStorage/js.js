function _id(id_name) {
    return document.getElementById(id_name)
}
function _class(class_name) {
    return document.getElementsByClassName(class_name)
}
function _tag(tag_name) {
    return document.getElementsByTagName(tag_name)
}
function _qs(name) {
    return document.querySelector(name)
}
let $ = document

let todoInput = _qs('.todo-input')
let addBtn = _qs('.add-btn')
let clearBtn = _qs('.clear-btn')
let itemsUl = _qs('.items')


let todosArray = []
//add todo btn
function addNewTodo() {
    let newTodoTitle = todoInput.value
    let newTodoObj = {
        id: todosArray.length + 1,
        title: newTodoTitle,
        complete: false
    }
    todosArray.push(newTodoObj)
    setLocalStorage(todosArray)
    todosGenerator(todosArray)
    todoInput.focus()

}
function addNewTodoByClick(event) {
    if (event.key === 'Enter') {
        addNewTodo();
    }
}
//clear todo list btn
function clearAll() {
    todosArray = []
    itemsUl.innerHTML = ''
    localStorage.removeItem('todos')
}


//delete btn
function removeTodo(todoId) {
    localStorageTodos = JSON.parse(localStorage.getItem('todos'))
    todosArray = localStorageTodos
    let selectedTodoIndex = todosArray.findIndex(function (todo) {
        return todo.id === todoId
    })
    todosArray.splice(selectedTodoIndex, 1)
    setLocalStorage(todosArray)
    todosGenerator(todosArray)
}
//complete btn
function changeStatusTodo(todoId) {
    localStorageTodos = JSON.parse(localStorage.getItem('todos'))
    todosArray = localStorageTodos
    todosArray.forEach(function (todo) {
        if (todo.id === todoId) {
            todo.complete = !todo.complete
        }
    })
    setLocalStorage(todosArray)
    todosGenerator(todosArray)
}
//localStorage
function setLocalStorage(todosList) {
    localStorage.setItem('todos', JSON.stringify(todosList))
}

function getLocalStorage() {
    let localStorageTodos = JSON.parse(localStorage.getItem('todos'))
    if (localStorageTodos) {
        todosGenerator(localStorageTodos)
    }
}
//Generator
function todosGenerator(todosList) {
    itemsUl.innerHTML = ''
    todosList.forEach(function (todo) {
        let newLi = $.createElement('li')
        newLi.classList.add('item')

        let newBtnsDiv = $.createElement('div')
        newBtnsDiv.classList.add('li-btns')

        let newStatusBtn = $.createElement('input')
        newStatusBtn.classList.add('status-btn')
        newStatusBtn.setAttribute('type', 'submit')
        newStatusBtn.value = 'Complete'
        newStatusBtn.setAttribute('onclick', 'changeStatusTodo(' + todo.id + ')')



        let newDeleteBtn = $.createElement('input')
        newDeleteBtn.classList.add('delete-btn')
        newDeleteBtn.setAttribute('type', 'submit')
        newDeleteBtn.value = 'Delete'
        newDeleteBtn.setAttribute('onclick', 'removeTodo(' + todo.id + ')')

        let newTodoSpan = $.createElement('span')
        newTodoSpan.classList.add('span')
        newTodoSpan.innerHTML = todo.title

        if (todo.complete) {
            newStatusBtn.value = 'UnCompleted'
            newTodoSpan.classList += ' completed'
        }

        newBtnsDiv.append(newStatusBtn, newDeleteBtn)
        newLi.append(newTodoSpan, newBtnsDiv)
        itemsUl.append(newLi)

        todoInput.value = ''
    })
}





window.addEventListener('load', getLocalStorage)
addBtn.addEventListener('click', addNewTodo)
clearBtn.addEventListener('click', clearAll)
todoInput.addEventListener('keydown', addNewTodoByClick)




























// function getLocalStorage() {
//     let localStorageTodos = JSON.parse(localStorage.getItem('todos'))
//     if (localStorageTodos) {
//         todosArray = localStorageTodos
//     } else {
//         todosArray = []
//     }
//     todosGenerator(todosArray)
// }










