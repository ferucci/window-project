
import modal from './modules/modal';
import advSlider from './modules/slider';
import ourServices from './modules/sliderServices';
import timerForms from './modules/timer';
import validForms from './modules/validate';
import sendForm from './modules/sendForm';
import scrolling from './modules/scrolling';
import calc from './modules/calc';
import modalMagnification from './modules/modal-magnification';
import reviews from './modules/reviews';

modal();
advSlider();
ourServices();
scrolling();
calc(300);
modalMagnification();
reviews();
timerForms('10 june 2022');
validForms();
sendForm({
  formsEl: 'form[name="callback-form"]',
  calcElem: [
    {
      type: 'number',
      id: 'calc-total'
    }
  ]
});
sendForm({
  formsEl: 'form[name="application-form"]',
  calcElem: [
    {
      type: 'number',
      id: 'calc-total'
    }
  ]
});
sendForm({
  formsEl: 'form[name="action-form2"]',
  calcElem: [
    {
      type: 'number',
      id: 'calc-total'
    }
  ]
});
sendForm({
  formsEl: 'form[name="action-form"]',
  calcElem: [
    {
      type: 'number',
      id: 'calc-total'
    }
  ]
});

