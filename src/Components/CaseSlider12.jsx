import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './CaseSlider.css';



import Dcart1 from "../../src/assets/Dcartadmin1.png"
import Dcart2 from "../../src/assets/Dcartadmin2.png"
import Dcart3 from "../../src/assets/Dcartadmin3.png"
import Dcart4 from "../../src/assets/Dcartadmin4.png"




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
          <img loading="lazy" src= {Dcart2} />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={Dcart1} />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={Dcart3} />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={Dcart4} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
