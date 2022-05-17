'use strict';

const scrolling = () => {
  // Реализовать бургер
  const btnScrollUp = document.querySelector('.smooth-scroll');

  btnScrollUp.addEventListener('click', (e) => {
    scrollTo({ top: 0, behavior: 'smooth' });
  });
}

export default scrolling;