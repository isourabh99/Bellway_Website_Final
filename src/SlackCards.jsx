import React from 'react'
import './SlackCard.css'
import './SlackCard.js'
const SlackCards = () => {
  return (
    <>
      <div class="space space--small"></div>
      <div class="cards">
        <div class="card" data-index="0">
          <div class="card__inner">
            <div class="card__image-container">
              <img
                loading="lazy"
                class="card__image"
                src="https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100"
                alt=""
              />
            </div>
            <div class="card__content">
              <h1 class="card__title">Card Title</h1>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                dicta error nam eaque. Eum fuga laborum quos expedita iste saepe
                similique, unde possimus quia at magnam sed cupiditate?
                Reprehenderit, harum!
              </p>
            </div>
          </div>
        </div>
        <div class="card" data-index="0">
          <div class="card__inner">
            <div class="card__image-container">
              <img
                loading="lazy"
                class="card__image"
                src="https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100"
                alt=""
              />
            </div>
            <div class="card__content">
              <h1 class="card__title">Card Title</h1>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                dicta error nam eaque. Eum fuga laborum quos expedita iste saepe
                similique, unde possimus quia at magnam sed cupiditate?
                Reprehenderit, harum!
              </p>
            </div>
          </div>
        </div>
        <div class="card" data-index="0">
          <div class="card__inner">
            <div class="card__image-container">
              <img
                loading="lazy"
                class="card__image"
                src="https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100"
                alt=""
              />
            </div>
            <div class="card__content">
              <h1 class="card__title">Card Title</h1>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                dicta error nam eaque. Eum fuga laborum quos expedita iste saepe
                similique, unde possimus quia at magnam sed cupiditate?
                Reprehenderit, harum!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="space"></div>
    </>
  );
}

export default SlackCards