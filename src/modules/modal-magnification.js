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
      const imageV = `<img class="modal-img" style="border-radius:20px;" src="${target}">`;

      if (e.target.closest('.modal-img')) {
        return;
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

  overlayBlock.addEventListener('click', () => {
    document.querySelectorAll('.modal-img').forEach(item => {
      item.remove();
    })
  });



}

export default imageMagnification