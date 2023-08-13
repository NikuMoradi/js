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
let navBar = _id('navbar')
let scrollBtn = _qs('button')


function changeNavBar(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20){
        navBar.className="color-2"
    }else{
        navBar.className="color-1"
    }
}

function scrollTopHandler(){
    window.scrollTo(0 , 0)
}

document.addEventListener('scroll', changeNavBar)
scrollBtn.addEventListener('click', scrollTopHandler)
