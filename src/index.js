
import modal from './modules/modal';
import advSlider from './modules/slider';
import ourServices from './modules/sliderServices';
import timerForms from './modules/timer';
import validForms from './modules/validate';
import sendForm from './modules/sendForm';
import scrolling from './modules/scrolling';
import calc from './modules/calc';

modal();
advSlider();
ourServices();
scrolling();
calc(300);
timerForms('20 may 2022');
validForms();
sendForm({
  formsEl: 'form[name="action-form2"]',
  calcElem: [
    {
      type: 'input',
      id: 'calc-total'
    }
  ]
});
sendForm({
  formsEl: 'form[name="action-form"]',
  calcElem: [
    {
      type: 'input',
      id: 'calc-total'
    }
  ]
});
