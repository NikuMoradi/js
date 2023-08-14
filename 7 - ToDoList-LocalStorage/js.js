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


let tasksArray = []


function generatore() {

    let newTaskTitle = todoInput.value
    let taskObject = {
        id: tasksArray.length + 1,
        taskTitle: newTaskTitle,
        complete: false
    }
    tasksArray.push(taskObject)
    setArrayinLocalStorage(tasksArray);
    tasksObjGenerator(tasksArray)



    function setArrayinLocalStorage(array) {
        localStorage.setItem('taskArray', JSON.stringify(array))
    }

    function tasksObjGenerator(array) {
        array.forEach(function (obj) {
            //li
            let newLi = $.createElement('li')
            newLi.classList.add('item')

            //li btns
            let newBtnsDiv = $.createElement('div')
            newBtnsDiv.classList.add('li-btns')

            let newStatusBtn = $.createElement('input')
            newStatusBtn.classList.add('status-btn')
            newStatusBtn.setAttribute('type', 'submit')
            newStatusBtn.value = 'Complete'

            let newDeleteBtn = $.createElement('input')
            newDeleteBtn.classList.add('delete-btn')
            newDeleteBtn.setAttribute('type', 'submit')
            newDeleteBtn.value = 'Delete'

            //span
            let newTodoSpan = $.createElement('span')
            newTodoSpan.classList.add('span')
            newTodoSpan.innerHTML = obj.taskTitle
            //apppneds
            newBtnsDiv.append(newStatusBtn, newDeleteBtn)
            newLi.append(newTodoSpan, newBtnsDiv)
            itemsUl.append(newLi)
            todoInput.value = ''

        })

    }

}

// function getArrayfromLocalStorage(){
//     let localStorageTasks = JSON.parse(localStorage.getItem('taskArray'))
//     console.log(localStorageTasks)
//     if(localStorageTasks){
//         tasksArray = localStorageTasks
//     }else{
//         tasksArray = []
//     }
//     generatore(tasksArray)
// }
function addToListHandlerByClick() {
    generatore()
}

function addToListHandlerByEnter(event) {
    if (event.key === 'Enter') {
       generatore();
    }
}
// function clearAll(){
//     tasksArray=[]
//     tasksObjGenerator[tasksArray]
//     localStorage.clear()
// }
//eventListeners
addBtn.addEventListener('click', addToListHandlerByClick)
$.body.addEventListener('keydown', addToListHandlerByEnter)
// clearBtn.addEventListener('click',clearAll)











