import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './CaseSlider.css';



import Shrijyothisadmin1 from "../../src/assets/Shrijyotishadmin1.png";
import Shrijyothisadmin2 from "../../src/assets/Shrijyotishadmin2.png";
import Shrijyothisadmin3 from "../../src/assets/Shrijyotishadmin3.png";
import Shrijyothisadmin4 from "../../src/assets/Shrijyotishadmin4.png";


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
          <img loading="lazy" src= {Shrijyothisadmin1} />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={Shrijyothisadmin4} />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={Shrijyothisadmin3} />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={Shrijyothisadmin2} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
