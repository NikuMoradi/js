
let $ = document
let playBtn = $.querySelectorAll(".fa")
let audios = $.querySelectorAll("audio")

let musicName;
playBtn.forEach(function(music){
    music.addEventListener('click' , function(event){
        musicName = event.target.dataset.name
        audios.forEach(function(audio){
            if(audio.dataset.name === musicName){
                audio.currentTime = 0
                audio.play()
            }else{
                audio.pause()
            }
        })
    })
});