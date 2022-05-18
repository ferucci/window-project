'use strict';

const scrolling = () => {

  // Реализовать бургер

  const btnScrollUp = document.querySelector('.smooth-scroll');

  const scrollArea = () => {
    let scroll = window.pageYOffset
    let mainScreenHeight = document.documentElement.clientHeight

    if (scroll > mainScreenHeight) {
      btnScrollUp.style.opacity = 1;
    } else {
      btnScrollUp.style.opacity = 0;
    }
  }

  const backToTop = () => {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -70);
      setTimeout(backToTop, 0);
    }
  }

  window.addEventListener('scroll', scrollArea);
  btnScrollUp.addEventListener('click', backToTop);
}

export default scrolling;