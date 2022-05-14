'use strict';

const slider = () => {

  const benefitsItems = document.querySelectorAll('.benefits__item');
  const benefitsArrows = document.querySelector('.benefits-arrows');
  const benefitsInner = document.querySelector('.benefits-inner');
  const benefitsWrap = document.querySelector('.benefits-wrap');

  let position = 0;
  let itemWidth;
  let movePosition;

  const calcItems = (slideToShow = 1, slideToScroll = 1) => {

    itemWidth = benefitsInner.clientWidth / slideToShow;
    movePosition = slideToScroll * itemWidth;

    benefitsItems.forEach((item) => {
      item.style.minWidth = itemWidth;
    });

    return { itemWidth, movePosition }
  }

  const prevSlide = () => {
    position += movePosition;
    definePosition();
    checkBtn();
  }

  const nextSlide = () => {
    position -= movePosition;
    definePosition();
    checkBtn();
  }

  const definePosition = () => {
    benefitsWrap.style.cssText += `transform: translateX(${position}px)`;
  }

  const checkBtn = () => {

    if (position > 0 || position < -1080) {
      benefitsWrap.style.cssText = `transform: translateX(${0}px)`;
      position = 0;
    }

  }

  const showItems = () => {
    const clientWidth = document.documentElement.clientWidth;

    if (clientWidth < 576) {
      benefitsInner.style.maxWidth = `185px`;
    }

  }

  benefitsArrows.addEventListener('click', (e) => {

    if (e.target.closest('button.benefits__arrow--left')) {

      calcItems(1, 1);
      prevSlide();
    } else if (e.target.closest('button.benefits__arrow--right')) {
      calcItems(1, 1);
      nextSlide();
    }

  });

  showItems()

}


export default slider;
