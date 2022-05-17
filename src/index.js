
import modalPhone from './modules/modal';
import advSlider from './modules/slider';
import ourServices from './modules/sliderServices';
import timerForms from './modules/timer';
import validForms from './modules/validate';
import sendForm from './modules/sendForm';
import scrolling from './modules/scrolling';

modalPhone();
advSlider();
ourServices();
timerForms('20 may 2022');
validForms();
scrolling();
sendForm({ formsEl: 'form[name="action-form2"]' });
sendForm({ formsEl: 'form[name="action-form"]' });
