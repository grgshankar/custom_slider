document.addEventListener('DOMContentLoaded', ()=>{
    let mainCarouselWidth = document.querySelector(".slider_carousel").clientWidth;
    let rightSlide = document.querySelector(".arrow_.right_arrow");
    let leftSlide = document.querySelector('.arrow_.left_arrow');
    let sliderHolder = document.querySelector(".slider_");
    let sliderNumber = 1;
    let sliderWrapper = document.querySelectorAll('.slider_ .slider_wrapper');
    let sliderWrapperLength = sliderWrapper.length;
    let totalWidthOfSlider = sliderWrapperLength*mainCarouselWidth;
    
    
    sliderHolder.style.width = `${totalWidthOfSlider}px`;
    
    // giving dynamic width value to each slider image holder div
    sliderWrapper.forEach(wrapper=>{
        wrapper.style.width = `${totalWidthOfSlider / sliderWrapperLength}px`;
        wrapper.style.height = `${totalWidthOfSlider / sliderWrapperLength}px`;
    });
    
     // Function to update the slide position
     const updateSlidePosition = (position) => {
        sliderHolder.style.transform = `translateX(-${position}px)`;
    };
    // this function is for the next slide
    const nextSlide = () =>{
        if (sliderNumber < sliderWrapperLength) {
            updateSlidePosition(sliderNumber * mainCarouselWidth);
            sliderNumber++;
        } else {
            firstSlide();
        }
        console.log('sliderNumber', sliderNumber);
        console.log('nextSlideNum', `translateX(-${sliderNumber*mainCarouselWidth}px)`);
    }
    
    // this function is the prev slide
    
    const prevSlide = () =>{
        if(sliderNumber > 1){
            sliderHolder.style.transform = `translateX(-${(sliderNumber-2)*mainCarouselWidth}px)`;
            sliderNumber--;
        }else{
            lastSlide();
        }
        
        console.log('prevSlideNum', sliderNumber);
    }
    const firstSlide = () => {
        setTimeout(() => {
            updateSlidePosition(0);
            sliderNumber = 1;
        }, 100); // Adjust delay as necessary to match your transition duration
    };
    const lastSlide = () => {
        sliderHolder.style.transform = `translateX(-${(sliderWrapperLength - 1)*mainCarouselWidth}px)`;
        sliderNumber = sliderWrapperLength;
    }
    
    rightSlide.addEventListener('click', nextSlide);
    leftSlide.addEventListener('click', prevSlide);
})
