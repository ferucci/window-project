'use strict';

const timer = (deadline) => {
  const timerItems = document.querySelectorAll('.count-wrap');

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor(timeRemaining / 60 / 60) % 24;
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, days, hours, minutes, seconds }
  }

  const updateClock = () => {
    let getTime = getTimeRemaining();
    timerItems.forEach((item, index) => {
      item.querySelector('.count_1>span').textContent = ('0' + getTime.days).slice(-2);
      item.querySelector('.count_2>span').textContent = ('0' + getTime.hours).slice(-2);
      item.querySelector('.count_3>span').textContent = ('0' + getTime.minutes).slice(-2);
      item.querySelector('.count_4>span').textContent = ('0' + getTime.seconds).slice(-2);
    });

    if (getTime.timeRemaining > 0) {
      setTimeout(updateClock, 1000);
    } else if (getTime.timeRemaining <= 0) {
      timerItems.forEach((item, index) => {
        item.querySelector('.count_1>span').textContent = ('0' + '0');
        item.querySelector('.count_2>span').textContent = ('0' + '0');
        item.querySelector('.count_3>span').textContent = ('0' + '0');
        item.querySelector('.count_4>span').textContent = ('0' + '0');
      })
    }

  }

  updateClock()

}

export default timer;