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
let audioElem = _qs('audio')
let time= _qs('#time')
let musicSrc = [
    "Sabr Dashte Bash.mp3",
    "kavir.mp3",
    "dire.mp3"
]

let audioIndex = 0


function playHandler(){
    audioElem.play()
    
    setInterval(function(){
        time.innerHTML ='0:'+ Math.floor(audioElem.currentTime)
    },1000)

}

function pauseHandler(){
    audioElem.pause()

}

function durationHandler(){
    console.log(audioElem.duration)
}
function rateHandler(){
    audioElem.playbackRate =2
}

function nextMusicHandler(){
    audioIndex++
    if(audioIndex>musicSrc.length - 1){
        audioIndex = 0
    }
    audioElem.setAttribute('src' , musicSrc[audioIndex])
    playHandler()
}
function perviuosMusicHandler(){
    audioIndex--
    if(audioIndex<0){
        audioIndex = musicSrc.length - 1
    }
    audioElem.setAttribute('src' , musicSrc[audioIndex])
    playHandler()
}

function timeMinusHandler(){
    audioElem.currentTime -= 5
}
    
function timePlusHandler(){
    audioElem.currentTime += 5
}
    
