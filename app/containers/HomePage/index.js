/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import heart from  '../../images/heart.png';

import "../../css/styles.css";
import "../../css/swiper.css";
import Header from '../../components/Header';
import Slide1 from '../../components/Slide1';
import Slider2 from '../../components/Slider2';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function HomePage() {
  return (
    <>
      <Header />
      <Slide1 />
      <div className="section-2">
        <h1 className="w3-container w3-monospace">OUR STORY</h1>
        <h4 className="header-2 w3-container w3-monospace">WE ARE GETTING MARRIED (:</h4>
        <p>
        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you. 
        </p>
        <div className="horizontal-rule"></div>
        <div className="bottom-text w3-container w3-monospace">XOXO</div>
      </div>
      {/* <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slider2 />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper> */}
    </>
  );
}
