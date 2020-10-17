import { useEffect } from "react";

/* This custom hook contain 3 params
  slideImg: the image of the slide
  slideText: the description of slide
  arrayImgs: the array of images
*/
const useSlider = (slideImg, slideText, arrayImgs) => {
  let slideCounter = 0;

  useEffect(() => {
    startSlider();
    console.log("entre");
  });

  /* 
    we can now create a new function startSlider() and handle the first slide to display 
    when the page finished loading.
  */
  const startSlider = () => {
    slideImg.current.style.backgroundImage = `linear-gradient(
        to right,
        rgba(34, 34, 34, 0.4),
        rgba(68, 68, 68, 0.4)
        ), url(${arrayImgs[0].src})`;
    slideText.current.innerHTML = arrayImgs[0].text;
  };

  /* 
    we use the same method with the function handleSlide() by applying a linear gradient to the image. 
    But this time, we receive as a parameter the number of the slide or counter if you want too, then use it 
    to show the appropriate slide on the screen.
  */
  const handleSlide = (slide) => {
    slideImg.current.style.backgroundImage = `linear-gradient(
    to right,
    rgba(34, 34, 34, 0.4),
    rgba(68, 68, 68, 0.4)
    ), url(${arrayImgs[slide - 1].src})`;
    slideText.current.innerHTML = arrayImgs[slide - 1].text;
    animateSlide(slideImg);
  };

  /* 
    Next, we call the animateSlide() method to well, 
    animate it with a nice fade-in effect.
  */

  const animateSlide = () => {
    slideImg.current.classList.add("fadeIn");
    setTimeout(() => {
      slideImg.current.classList.remove("fadeIn");
    }, 700);
  };

  /* 
  will check if the counter of the slide is equal to 0. And If it's the case, 
  it will show the last slide, otherwise, it displays the previous one.
  */

  const goToPreviousSlide = () => {
    if (slideCounter === 0) {
      handleSlide(arrayImgs.length);
      slideCounter = arrayImgs.length;
    }

    handleSlide(slideCounter);
    slideCounter--;
  };

  /* 
    The second method will do the opposite. It checks if the counter of slides is equal to 
    the last one and if it's the case, it will restart the slider, otherwise, the goToNextSlide() 
    method will show the next slide.
  */

  const goToNextSlide = () => {
    if (slideCounter === arrayImgs.length - 1) {
      startSlider();
      slideCounter = -1;
      animateSlide(slideImg);
    }

    slideImg.current.style.backgroundImage = `linear-gradient(
        to right,
        rgba(34, 34, 34, 0.4),
        rgba(68, 68, 68, 0.4)
        ),url(${arrayImgs[slideCounter + 1].src})`;
    slideText.current.innerHTML = arrayImgs[slideCounter + 1].text;
    slideCounter++;
    animateSlide(slideImg);
  };

  return { goToPreviousSlide, goToNextSlide };
};

export default useSlider;
