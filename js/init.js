document.addEventListener('DOMContentLoaded', ()=>{
    let mainCarouselWidth = document.querySelector(".slider_carousel").clientWidth;
    let rightSlide = document.querySelector(".arrow_.right_arrow");
    let leftSlide = document.querySelector('.arrow_.left_arrow');
    let sliderHolder = document.querySelector(".slider_");
    let sliderNumber = 1;
    let sliderWrapper = document.querySelectorAll('.slider_ .slider_wrapper');
    let sliderWrapperLength = sliderWrapper.length;
    let totalWidthOfSlider = sliderWrapperLength*mainCarouselWidth;
    let dots_wrapper = document.querySelector('.dots_wrapper');
    
    
    sliderHolder.style.width = `${totalWidthOfSlider}px`;
    


    // creating the dots button
    for(i=0; i < sliderWrapperLength; i++){
        let buttonWrap = document.createElement("div");
        buttonWrap.className = "button";
        dots_wrapper.append(buttonWrap);
    }

    let buttons = document.querySelectorAll('.button');
    buttons[0].style.backgroundColor = "blue";
    const resetDotsBg = () =>{
        buttons.forEach((button)=>{
            button.style.backgroundColor = "transparent";
        });
    }
    buttons.forEach((button, i)=>{
        button.addEventListener('click', ()=>{
            resetDotsBg();
            sliderHolder.style.transform = `translateX(-${i*mainCarouselWidth}px)`;
            sliderNumber = i;
            button.style.backgroundColor = "blue";
        })
    })

    const changeDotsColor = () =>{
        resetDotsBg();
        buttons[sliderNumber-1].style.backgroundColor = "blue";
    }
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
            changeDotsColor();
        } else {
            firstSlide();
            changeDotsColor();
        }
        // console.log('sliderNumber', sliderNumber);
        // console.log('nextSlideNum', `translateX(-${sliderNumber*mainCarouselWidth}px)`);
    }
    
    // this function is the prev slide
    
    const prevSlide = () =>{
        if(sliderNumber > 1){
            updateSlidePosition((sliderNumber-2)*mainCarouselWidth);
            sliderNumber--;
            changeDotsColor();
        }else{
            lastSlide();
            changeDotsColor();
        }
        
        // console.log('prevSlideNum', sliderNumber);
    }
    const firstSlide = () => {
        setTimeout(() => {
            updateSlidePosition(0);
            sliderNumber = 1;
            changeDotsColor();
        }, 100); // Adjust delay as necessary to match your transition duration
    };
    const lastSlide = () => {
        sliderHolder.style.transform = `translateX(-${(sliderWrapperLength - 1)*mainCarouselWidth}px)`;
        sliderNumber = sliderWrapperLength;
    }
    
    rightSlide.addEventListener('click', ()=>{
        nextSlide();
    });
    leftSlide.addEventListener('click', ()=>{
        prevSlide();
    });


});
