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

import '../../css/styles.css';
import '../../css/swiper.css';
import Header from '../../components/Header';
import Slide1 from '../../components/Slide1';
import Slider2 from '../../components/Slider2';
import CountDown from '../../components/CountDown';
import img1 from '../../images/wedding_1.jpg';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function HomePage() {
  return (
    <div className={'container wedding-main'}>
      <div class="snowflake1">
      ❅
      </div>
      <div class="snowflake1">
      ❅
      </div>
      <div class="snowflake1">
      ❆
      </div>
      <div class="snowflake1">
      ❄
      </div>
      <div class="snowflake1">
      ❅
      </div>
      <div class="snowflake1">
      ❆
      </div>
      <div class="snowflake1">
      ❄
      </div>
      <div class="snowflake1">
      ❅
      </div>
      <div class="snowflake1">
      ❆
      </div>
      <div class="snowflake1">
      ❄
      </div>
      <div className={'row'}>
        <div className={'col-md-12'}>
          <Header/>
        </div>
        <div className={'col-md-12 no-padding'}>
          <div>
            <div className="content">
              {/* <Snow /> */}
              <div className="header w3-container w3-cursive">VISHAKA & ARKADYUTI</div>
              <CountDown/>
            </div>
            <div className={'countdown-image'}></div>
          </div>
        </div>
        <div className={'col-md-12 no-padding'}>
          <div className="section-2">
            <h1 className="section-header w3-container w3-monospace">OUR STORY</h1>
            <h4 className="header-2 w3-container w3-monospace">WE ARE GETTING MARRIED (:</h4>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double
              click me to add your own content and make changes to the font. I’m a great place for you to tell a story
              and
              let your users know a little more about you.
            </p>
            <div className="horizontal-rule"></div>
            <div className="bottom-text">XOXO</div>
          </div>
        </div>
        <div className={'col-md-12 no-padding the-wedding'}>
          <h1 className="section-header">THE <br/>WEDDING</h1>
          <div className="bottom-text">When</div>
          <span className={"details-text"}>Jan 25, 2021, 9:00 AM</span>

          <div className="bottom-text">Where</div>
          <span className={"details-text"}>Vrindavan Palace <br/> 79, Hoshangabad Rd, Shri Ram Colony <br/> Bhopal (Madhya Pradesh)</span>
          <a href={"https://goo.gl/maps/NrrNFvX2qA6fTJSFA"} target={"_blank"} className={"location-cta"}><span></span></a>
        </div>
        <div className={'col-md-12 no-padding footer'}>
          <h1 className="section-header">#VishakaHeartsArka</h1>
          <div className="copyright">© 2021 By Vishaka & Arkadyuti.</div>
        </div>
      </div>


    </div>
  );
}
