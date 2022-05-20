'use strict';

const imageMagnification = () => {
  const imagesCollection = document.querySelectorAll('.sertificate-document');

  const overlayItem = document.querySelectorAll('.document-overlay');
  const overlayBlock = document.querySelector('.overlay');

  imagesCollection.forEach((img, index) => {

    img.classList.add('document-inner');

    img.addEventListener('click', (e) => {
      e.preventDefault();

      const target = e.target.closest('.sertificate-document');
      const imageV = `<div class="modal-img__inner">
      <img class="modal-img" style="border-radius:20px;" src="${target}">
      </div>`;

      if (e.target.closest('.modal-img')) {
        return;

      } else if (e.target.closest('.modal-img__inner')) {
        document.querySelectorAll('.modal-img__inner').forEach(item => {
          item.remove();
          overlayBlock.style.display = 'none';
        })
      } else if (img === target) {

        overlayItem.forEach((item, id) => {

          if (id === index) {
            img.innerHTML += imageV;
            overlayBlock.style.display = 'block';
          }

        });
      }

    });

  });

}

export default imageMagnification