import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './CaseSlider.css';
import admin from '../assets/LLNadmin.png'
import admin2 from '../assets/llnadmin1.png'
import admin3 from '../assets/Desiadmin3.png'
import admin4 from '../assets/Desiadmin4.png'

import TruelyMatch10 from '../assets/Truelymatch10.png'
import TruelyMatch11 from '../assets/Truelymatch11.png'
import TruelyMatch12 from '../assets/Truelymatch12.png'
import TruelyMatch13 from '../assets/Truelymatch13.png'


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img loading="lazy" src= {TruelyMatch13} />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={TruelyMatch11} />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={TruelyMatch12} />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={TruelyMatch10} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
