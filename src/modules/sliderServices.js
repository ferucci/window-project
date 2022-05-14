'use strict';

const ourServicesSlider = () => {
  const innerBlock = document.getElementById('services');
  const wrapSlider = innerBlock.querySelector('.row');
  const sliderItems = wrapSlider.querySelectorAll('.services__item');
  const sliderArrows = wrapSlider.querySelectorAll('.services-arrows');

  const toggleClass = () => {
    sliderItems.forEach((item, index) => {
      sliderItems[index].classList.toggle('services__item--active');
    });
  }

  sliderArrows.forEach((btn, id) => {
    btn.addEventListener('click', (e) => {
      if (document.documentElement.clientWidth > 576) {
        if (e.target.closest('.services__arrow--right')) {
          toggleClass();
        } else if (e.target.closest('.services__arrow--left')) {
          toggleClass();
        }
      } else {

      }
    });
  });
}

export default ourServicesSlider;