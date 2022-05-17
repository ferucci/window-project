'use strict';

const sendForms = ({ formsEl }) => {
  const form = document.querySelector(formsEl);
  const statusBlock = document.createElement('div');

  const loadText = 'Загрузка';
  const errorText = 'Ошибка';
  const successText = 'Данные отправлены. Наш менеджер с вами свяжится в ближайшее время.'

  const valid = (list) => {
    let success = true;

    list.forEach(input => {
      if (!input.classList.contains('success') ||
        input.value === '') {
        success = false;
      }
    });

    return success;
  }

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(resolve => resolve.json());
  }

  const submitForm = () => {

    const formElems = form.querySelectorAll('input');

    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((value, key) => {
      formBody[key] = value;
    });

    if (valid(formElems)) {
      sendData(formBody).then(data => {
        statusBlock.style.color = '#eee';
        statusBlock.textContent = successText;
        formElems.forEach((item, id) => {
          if (id < 2) {
            item.value = '';
          }
        });

      }).catch(error => { statusBlock.textContent = errorText });
    } else {
      statusBlock.textContent = errorText;
      statusBlock.style.color = 'red';
      console.log('Данные не валидны');
    }
  }

  try {
    if (!form) {
      throw new Error('Данная форма не существует.')
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm();

      setTimeout(() => statusBlock.remove(), 4000);
    });
  } catch (error) {
    console.log(error.message);
  }

};

export default sendForms;