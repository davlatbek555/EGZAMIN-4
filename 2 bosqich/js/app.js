const nextButton = document.querySelector('.slider-button__next');
const prevButton = document.querySelector('.slider-button__prev');
const sliderTrack = document.querySelector('.slider-track');
const sliderSlides = document.querySelectorAll('.slider-slide');
const sliderPagination = document.querySelector('.slider-pagination')
const slider = document.querySelector('.slider')

const sliderSlide = sliderSlides[0]

let sliderLength = sliderSlides.length
let moveWidth = sliderSlide.clientWidth
let activeSlide = 0


function checkDisabled(){
    if(activeSlide === sliderLength - 1){
        nextButton.removeAttribute('disabled');
        prevButton.removeAttribute('disabled');
    }
}


function moveSlide(){
    sliderTrack.style.transform = `translateX(-${moveWidth * activeSlide}px)`;
    checkDisabled()
    generateBullet()
}

nextButton.addEventListener('click', function(){
    if(activeSlide === sliderLength - 1){
        activeSlide = 0
    }else{
        activeSlide++
    }
    moveSlide()
})

prevButton.addEventListener('click', function(){
    if(activeSlide === 0){
        activeSlide = sliderLength - 1
    }else{
        activeSlide--
    }
    moveSlide()
})



function generateBullet(){
    sliderPagination.innerHTML = ''
    for(let i = 0; i < sliderLength; i++){
        let button = document.createElement('button');
        button.setAttribute('class', activeSlide === i ? 'slider-bullet slider-bullet__active': 'slider-bullet');

        button.addEventListener('click', function(){
            activeSlide = i
            moveSlide()
        })

        sliderPagination.appendChild(button)
    }
}



checkDisabled()
generateBullet()

function createAutoplay(){
    return setInterval(function(){
        activeSlide++
        if(activeSlide === sliderLength){
            activeSlide = 0
        }else if(activeSlide === 0){
            activeSlide = sliderLength - 1
        }
    
        moveSlide()
    }, 3000)
}
