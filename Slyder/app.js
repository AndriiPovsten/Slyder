let upBtn = document.querySelector('.up-button');
let downBtn = document.querySelector('.down-button');
let sidebar = document.querySelector('.sidebar');
let container = document.querySelector('.container')
let mainSlide = document.querySelector('.main-slide')
let slidesCount = mainSlide.querySelectorAll('div').length


let activSlideIndex = 0;
sidebar.style.top = `-${(slidesCount - 1 )* 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')

})
downBtn.addEventListener('click', () => {
    changeSlide('down')


})

function changeSlide(direction) {
    if (direction === 'up') {
        activSlideIndex++
        if (activSlideIndex ===slidesCount){
            activSlideIndex = 0;
        }
    } else if (direction === 'down'){
        activSlideIndex--
        if (activSlideIndex < 0) {
            activSlideIndex = slidesCount - 1
        }

    }
    let height = container.clientHeight
    mainSlide.style.transform = `translateY(-${activSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activSlideIndex * height}px)`

}