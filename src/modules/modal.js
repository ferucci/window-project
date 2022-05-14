'use strict';

const modal = () => {
  // const btnCall = document.querySelector('div.button>a');
  const headerModal = document.querySelector('.header-modal');
  const overlay = document.querySelector('.overlay');
  // const modalCloseBtn = document.querySelector('.header-modal__close');
  const body = document.querySelector('body');

  const openHeaderModal = () => {
    headerModal.style.display = 'block';
    overlay.style.display = 'block';
  };

  body.addEventListener('click', (e) => {
    if (!e.target.closest('a.btn-block')) {
      return;
    }
    e.preventDefault();
    openHeaderModal();
  });

  body.addEventListener('click', (e) => {
    if (e.target.closest('.header-modal__close') || e.target.closest('.overlay')) {
      headerModal.style.display = 'none';
      overlay.style.display = 'none';
    }
    return;
  });
};

export default modal;