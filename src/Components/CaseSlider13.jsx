import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './CaseSlider.css';



import cashbackcouponadmin1 from "../../src/assets/cashbackcouponadmin1.png"
import cashbackcouponadmin2 from "../../src/assets/cashbackcouponadmin2.png"
import cashbackcouponadmin3 from "../../src/assets/cashbackcouponadmin3.png"
import cashbackcouponadmin4 from "../../src/assets/cashbackcouponadmin4.png"




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
          <img loading="lazy" src= {cashbackcouponadmin1} />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={cashbackcouponadmin2} />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={cashbackcouponadmin3} />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={cashbackcouponadmin4} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
