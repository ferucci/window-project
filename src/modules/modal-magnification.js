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
      const imageV = `<div class="modal-img__inner"><div>
      <img class="modal-img" style="border-radius:20px;" src="${target}">
      </div></div>`;

      if (e.target.closest('.modal-img')) {
        document.querySelectorAll('.modal-img__inner').forEach(item => {
          item.remove()
          currentSlide++;

          if (currentSlide >= imagesCollection.length) {
            currentSlide = 0
          }
          imagesCollection[currentSlide].innerHTML += imageV;
        })

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