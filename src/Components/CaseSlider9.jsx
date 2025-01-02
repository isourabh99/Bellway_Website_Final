import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './CaseSlider.css';



import OneAppPluse1 from "../../src/assets/OneAppPlase1.png";
import OneAppPluse2 from "../../src/assets/OneAppPlase2.png";
import OneAppPluse3 from "../../src/assets/OneAppPlase3.png";
import OneAppPluse4 from "../../src/assets/OneAppPlase4.png";




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
          <img loading="lazy" src= {OneAppPluse1} />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={OneAppPluse3} />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={OneAppPluse4} />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={OneAppPluse2} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
