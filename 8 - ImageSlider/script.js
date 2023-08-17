
function _qs(name) {
    return document.querySelector(name)
}
let $ = document

let nextBtn = _qs('.next')
let prevBtn = _qs('.prev')
let sliderImage = _qs('.slider-image')

let imageSrcArray = ['./image/1.jpg' , './image/2.jpg', './image/3.jpg'] 
let imageIndex = 0
function prevImage(){
    imageIndex--
    if(imageIndex < 0){
        imageIndex = imageSrcArray.length - 1
    }
    sliderImage.setAttribute('src' , imageSrcArray[imageIndex] )

}

function nextImage(){
    imageIndex++
    if(imageIndex > imageSrcArray.length - 1){
        imageIndex = 0
    }
    sliderImage.setAttribute('src' , imageSrcArray[imageIndex] )

}

setInterval(nextImage , 3000)

prevBtn.addEventListener('click' , prevImage)
nextBtn.addEventListener('click' , nextImage)