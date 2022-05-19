'use strict';

import { animate } from './helpers';

const calc = (price) => {
  const body = document.querySelector('.okna');
  const calcBlock = document.getElementById('calc');
  const balcony = document.getElementById('calc-type');
  const glazingType = document.getElementById('calc-type-material');
  const area = document.getElementById('calc-input');

  let total = document.getElementById('calc-total');

  const countCalc = () => {
    const balconyVal = +balcony.options[balcony.selectedIndex].value;
    const areaVal = area.value;

    let glazingVal = +glazingType.options[glazingType.selectedIndex].value;
    let totaLVal = 0;
    let calcArea = 1;

    if (area.value > 99) {
      calcArea = 1.7;
    }

    if (glazingType.value > 0) {

    } else {
      glazingVal = 1;
    }

    if (balcony.value > 0 && area.value && /\d+/g.test(area.value)) {
      totaLVal = price * balconyVal * glazingVal * areaVal * calcArea;
    } else {
      totaLVal = 0
    }

    total.value = Math.round(totaLVal);

    animate({
      duration: 333,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        total = document.getElementById('calc-total');
        let start = 1;

        total.value = Math.round(totaLVal / (start / progress));
      }
    });
  }

  if (document.body.closest('.balkony')) {

    calcBlock.addEventListener('change', (e) => {
      countCalc();
    });

  }

}

export default calc