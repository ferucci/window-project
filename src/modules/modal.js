'use strict';

const modal = () => {
  const headerModal = document.querySelector('.header-modal');
  const servicesModal = document.querySelector('.services-modal');
  const overlay = document.querySelector('.overlay');
  const body = document.querySelector('body');

  const openModal = (item) => {
    item.style.display = 'block';
    overlay.style.display = 'block';
  };

  body.addEventListener('click', (e) => {
    if (e.target.closest('a.btn-block')) {
      e.preventDefault();
      openModal(headerModal);
    } else if (e.target.closest('.service-button')) {
      openModal(servicesModal);
    }
    return;

  });

  body.addEventListener('click', (e) => {
    if (e.target.closest('.header-modal__close') || e.target.closest('.overlay') &&
      headerModal.style.display == 'block') {
      headerModal.style.display = 'none';
      overlay.style.display = 'none';
    }
    else if (e.target.closest('.services-modal__close') || e.target.closest('.overlay')) {
      servicesModal.style.display = 'none';
      overlay.style.display = 'none';
    }
    return;
  });
};

export default modal;