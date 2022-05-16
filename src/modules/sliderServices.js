'use strict';

const ourServicesSlider = () => {
  const innerBlock = document.getElementById('services');
  const wrapSlider = innerBlock.querySelector('.row');
  const sliderItems = wrapSlider.querySelectorAll('.services__item');
  const sliderArrows = wrapSlider.querySelectorAll('.services-arrows');

  let currentSlide = 0;

  if (document.documentElement.clientWidth < 576) {
    sliderItems[0].classList.add('services__item--active');
    sliderItems[1].classList.remove('services__item--active');
  }

  const prevSlide = () => {
    sliderItems[currentSlide].classList.remove('services__item--active');
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = sliderItems.length;
    }
    sliderItems[currentSlide].classList.add('services__item--active');
  }

  const nextSlide = () => {
    sliderItems[currentSlide].classList.remove('services__item--active');
    currentSlide++;

    if (currentSlide >= sliderItems.length) {
      currentSlide = 0;
    }
    sliderItems[currentSlide].classList.add('services__item--active');
  }

  const toggleClass = () => {
    sliderItems.forEach((item, index) => {
      sliderItems[index].classList.toggle('services__item--active');
      console.log(sliderItems[index]);
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
        if (e.target.closest('.services__arrow--right')) {
          nextSlide(sliderItems, currentSlide, 'services__item--active');
        } else if (e.target.closest('.services__arrow--left') && currentSlide !== 0) {
          prevSlide(sliderItems, currentSlide, 'services__item--active');
        }
      }
    });
  });
}

export default ourServicesSlider;