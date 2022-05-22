'use strict';

const validForms = () => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    const addClass = (input) => {
      input.classList.remove('false');
      input.classList.add('success');
    }
    const removeClass = (input) => {
      input.classList.add('false');
      input.classList.remove('success');
    }

    inputs.forEach((input) => {

      let parentEl = input.parentNode;
      let errorText = document.createElement('p');
      errorText.style.cssText = `font-weight: bold; color: red; margin: 7px 0px 0px 7px;`;

      if (input === input.closest('input[name="fio"]')) {
        input.addEventListener('blur', (e) => {
          e.target.value = e.target.value.replace(/(?:^|\s|[-"'([{])+\S/g, (str) => str.toUpperCase()).replace(/[^а-яА-ЯёЁ\-\s]/g, '').replace(/\s+/g, ' ');
          if (/[а-яА-Я]/g.test(input.value)) {
            addClass(input);
            if (errorText) {
              errorText.remove();
            }
          } else {
            removeClass(input);
            errorText.textContent = "Неправильно заполнено Имя";

            parentEl.append(errorText);

          }
        });
      } else if (input === input.closest('input[name="phone"]')) {
        input.addEventListener('blur', (e) => {
          e.target.value = e.target.value.replace(/[^\d\+]+/g, '').replace(/\s+/g, ' ');
          if (/^[\+\d]{5,16}$/.test(input.value)) {
            addClass(input);
            if (errorText) {
              errorText.remove();
            }
          } else {
            removeClass(input);
            errorText.textContent = "Неправильно заполнен Телефон";

            parentEl.append(errorText);
          }
        });
      } else if (input === input.closest('input[type="hidden"]')) {
        addClass(input);
      }
    });
  });

}

export default validForms;