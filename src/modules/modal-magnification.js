'use strict';

const imageMagnification = () => {
  const imagesCollection = document.querySelectorAll('.sertificate-document');

  const overlayItem = document.querySelectorAll('.document-overlay');
  const overlayBlock = document.querySelector('.overlay');

  let currentSlide = 0;

  imagesCollection.forEach((img, index) => {

    img.classList.add('document-inner');

    img.addEventListener('click', (e) => {
      e.preventDefault();

      const target = e.target.closest('.sertificate-document');
      const imageLargeShow = `<div class="modal-img__inner"><span class="sertificate-btn sertificate-btn--left"></span>
      <img class="modal-img" style="border-radius:20px;" src="${target}">
      <span class="sertificate-btn sertificate-btn--right"></span></div>`;

      if (e.target.closest('.modal-img') ||
        e.target.matches('span.sertificate-btn--left')) {
        document.querySelectorAll('.modal-img__inner').forEach(item => {
          item.remove()
          currentSlide++;

          if (currentSlide >= imagesCollection.length) {
            currentSlide = 0
          }
          imagesCollection[currentSlide].innerHTML += imageLargeShow;
        })

      } else if (e.target.matches('span.sertificate-btn--right')) {
        document.querySelectorAll('.modal-img__inner').forEach(item => {
          item.remove()
          currentSlide--;

          if (currentSlide < 0) {
            currentSlide = imagesCollection.length - 1;
          }
          imagesCollection[currentSlide].innerHTML += imageLargeShow;
        })

      } else if (e.target.closest('.modal-img__inner')) {
        document.querySelectorAll('.modal-img__inner').forEach(item => {
          item.remove();
          overlayBlock.style.display = 'none';
        })
      } else if (img === target) {

        overlayItem.forEach((item, id) => {

          if (id === index) {
            img.innerHTML += imageLargeShow;
            overlayBlock.style.display = 'block';
          }

        });
      }

    });

  });

}

export default imageMagnification