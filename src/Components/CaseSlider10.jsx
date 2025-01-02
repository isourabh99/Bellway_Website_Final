import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './CaseSlider.css';



import OnlineWebStore1 from "../../src/assets/OnlineWebStore1.png"
import OnlineWebStore2 from "../../src/assets/OnlineWebStore2.png"
import OnlineWebStore3 from "../../src/assets/OnlineWebStore3.png"
import OnlineWebStore4 from "../../src/assets/OnlineWebStore4.png"



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
          <img loading="lazy" src= {OnlineWebStore1} />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={OnlineWebStore3} />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={OnlineWebStore2} />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={OnlineWebStore4} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
