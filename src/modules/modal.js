'use strict';

const modal = () => {
  const headerModal = document.querySelector('.header-modal');
  const servicesModal = document.querySelector('.services-modal');
  const overlay = document.querySelector('.overlay');
  const body = document.querySelector('body');

  const refurbishmentModal = document.querySelector('#order');
  const utpButton = document.querySelector('a[href="#order"]');


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
    } else if (e.target === utpButton) {
      openModal(refurbishmentModal)
      refurbishmentModal.style.cssText = `display: block;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999;`
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
      if (refurbishmentModal) {
        refurbishmentModal.style.display = 'none';
      }

    }
    return;
  });
};

export default modal;