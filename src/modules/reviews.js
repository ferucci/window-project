'use strict';

const reviews = () => {
  const reviewsSection = document.querySelector('#reviews');
  const reviewsBlock = document.querySelector('.comments-container');
  const reviewsItem = document.querySelectorAll('.comment-item');

  let reviewInner = reviewsSection.querySelector('.comments-container');

  let block = document.createElement('div')
  let userInner;
  let interval = 20000
  let intervalId
  let currentSlide = 0

  const iterateUsers = (users) => {
    const usersReview = users.comments;

    usersReview.forEach(user => {

      if (user.image === '') {
        user.image = 'unnamed.png'
      }

      switch (user.id) {
        case 0:
          userInner = `<div class="review-margin-bottom row comment-item">
          <div class="col-xs-3 col-sm-2">
            <div class="review-user">
              <img src="images/users/${user.image}" alt="" class="img-responsive avatar">
            </div>
          </div>
          <div class="col-xs-9 col-sm-9">
            <div class="review-inner review-green review-arrow review-arrow-left">
              <p class="text-normal">${user.author}</p>
              <p>${user.comment}</p>
            </div>
          </div>
          </div>`
          break;
        case 1:
          userInner += `<div class="review-margin-bottom row comment-item">
          <div class="col-xs-9 col-sm-9">
            <div class="review-inner review-gray review-arrow review-arrow-right">
              <p class="text-normal">${user.author}</p>
              <p>${user.comment}</p>
            </div>
          </div>
          <div class="col-xs-3 col-sm-2">
            <div class="review-user">
              <img src="images/users/${user.image}" alt="" class="img-responsive avatar">
            </div>
          </div>
          </div>`
          break;
        case 2:
          userInner += `<div class="row comment-item">
          <div class="col-xs-3 col-sm-2">
            <div class="review-user">
              <img src="images/users/${user.image}" alt="" class="img-responsive avatar">
            </div>
          </div>
          <div class="col-xs-9 col-sm-9">
            <div class="review-inner review-orange review-arrow review-arrow-left">
              <p class="text-normal">${user.author}</p>
              <p>${user.comment}</p>
            </div>
          </div>
          </div>`
          break;
      }

      reviewInner.innerHTML = userInner

    });

  }

  const changingItems = (users) => {
    let arr = users.comments

    if (arr[currentSlide].image === '') {
      arr[currentSlide].image = 'unnamed.png'
    }

    if (currentSlide === 1 || currentSlide === 2) {
      arr[currentSlide].comment = `Отлично всё сделано, побольше бы таких профессионалов на рынке!
      Установили окна быстро и аккуратно. Приятно было пообщаться и узнать новые рекомендации о правильной эксплуатации `;
      arr[currentSlide].author = `Венчурные капиталисты`
      arr[currentSlide].image = 'unnamed.png'
    }

    if (arr.length > 2) {
      userInner = `
      <div class="col-xs-3 col-sm-2">
        <div class="review-user">
        
          <img src="images/users/${arr[currentSlide].image}" alt="" class="img-responsive avatar">
        </div>
      </div>
      <div class="col-xs-9 col-sm-9">
        <div class="review-inner review-green review-arrow review-arrow-left">
          <p class="text-normal">${arr[currentSlide].author}</p>
          <p>${arr[currentSlide].comment}</p>
        </div>
      </div>
      `
      reviewInner.childNodes[0].innerHTML = userInner

      currentSlide++
      if (currentSlide >= arr.length) {
        currentSlide = 0
      }
    } else {
      clearInterval(intervalId)
    }

  }


  document.addEventListener('DOMContentLoaded', () => {
    reviewInner = reviewsSection.querySelector('.comments-container');
    block = document.createElement('div')
    block.style.width = '100%'
    block.innerHTML = '<img src="./images/Spin-0.8s-200px.gif" style="display: block; width: 25%; text-align: center; margin: 0 auto;" alt="" />';
    reviewInner.append(block)
    innHtml()
  }, false)

  const innHtml = () => {

    const getReviews = () => {
      return fetch('./comments.json').then(res => res.json())
    }
    getReviews().then(users => {
      iterateUsers(users)
    })

    getReviews().then(users => {
      intervalId = setInterval(() => {
        changingItems(users)
      }, interval);
    })
  }






}

export default reviews




