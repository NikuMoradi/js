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

let colBox = _id('no-status')
let addBtn = _id('add-btn')
let removeBtns = $.querySelectorAll('.remove')

let modal = _qs('.modal')
let closeModalBtn = _qs('#close-modal')
let modalInput = _qs('#modal-input')
let modalBtn = _qs('#modal-btn')

// Modal Functions
function openModalHandler() {
    modal.classList.toggle('show');
}
function closeModalHandler() {
    modal.classList.toggle('show');
}
//Generator
function generator() {
    if (modalInput.value) {
        let newTodoDiv = $.createElement('div')
        let newremoveBtn = $.createElement('span')

        newTodoDiv.classList.add('todo')
        newremoveBtn.classList.add('remove')

        newTodoDiv.innerHTML = modalInput.value
        newremoveBtn.innerHTML = '&times;'

        newTodoDiv.append(newremoveBtn)
        colBox.append(newTodoDiv)

        newTodoDiv.setAttribute('draggable', 'true')
        newTodoDiv.setAttribute('ondragstart', 'dragStartHandler(event)')
        newTodoDiv.setAttribute('id', modalInput.value)
        modalInput.value = ''

        newremoveBtn.addEventListener('click', removeTodoHandler)
    }
}
function addTodoHandlerByClick() {
    generator();
}
function addTodoHandlerByEnter(event) {
    if (event.key === 'Enter') {
        generator()
    }
}
function removeTodoHandler(event) {
    event.target.parentElement.remove()
}


//Drag Drop functions
function dragStartHandler(event) {
    event.dataTransfer.setData('elemId', event.target.id)
}
function dragOverHandler(event) {
    event.preventDefault()
}
function onDropHandler(event) {
    let targetId = event.dataTransfer.getData('elemId')
    let targetElement = _id(targetId)
    event.target.append(targetElement)
}


//EventListeners
addBtn.addEventListener('click', openModalHandler)
closeModalBtn.addEventListener('click', closeModalHandler)
modalBtn.addEventListener('click', addTodoHandlerByClick)
document.body.addEventListener('keydown', addTodoHandlerByEnter)
//remove for default elements
removeBtns.forEach(function (btn) {
    btn.addEventListener('click' , removeTodoHandler)
})

























// function dragStartHandler(event){
//     console.log('dragged')

//     event.dataTransfer.setData('elemId', event.target.id)
// }


// function dropHandler(event){
//     console.log('dropped')
//     let targetId = event.dataTransfer.getData('elemId')
//     console.log(targetId)
//     targetElem = _id(targetId)
//     event.target.append(targetElem)
// }
// function onDragOverHandler(event){
//     event.preventDefault()
// }


// function dragStartHandler(){
//     console.log('drag Started')
// }
// function dragHandler(){
//     console.log('dragged')
// }
// function dragEndHandler(){
//     console.log('drag ended')
// }