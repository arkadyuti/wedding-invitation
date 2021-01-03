/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useEffect, useRef } from 'react';
import SwiperCore, {  Scrollbar, A11y, Autoplay, EffectFade, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import '../../css/styles.css';
import '../../css/swiper.css';

import Header from '../../components/Header';
import CountDown from '../../components/CountDown';
import A28I2408 from '../../images/us/A28I2408.jpg';
import IMG_20181117_001957 from '../../images/us/IMG_20181117_001957.jpg';
import IMG_20200115_184323 from '../../images/us/IMG_20200115_184323.jpg';
import IMG_20200214_222039 from '../../images/us/IMG_20200214_222039.jpg';
import IMG_20200214_194921 from '../../images/us/IMG_20200214_194921.jpg';
import IMG_20200214_222333 from '../../images/us/IMG_20200214_222333.jpg';
import IMG_20190822_000843 from '../../images/us/IMG_20190822_000843.jpg';
import IMG_20181231_195819 from '../../images/us/IMG_20181231_195819.jpg';
import IMG_20191231_204426 from '../../images/us/IMG_20191231_204426.jpg';
import IMG_20191127_002453 from '../../images/us/IMG_20191127_002453.jpg';
import mask from '../../images/mask.jpg';
import gify from '../../images/giffy.gif';

SwiperCore.use([Scrollbar, A11y, Autoplay, EffectFade, EffectCoverflow]);

const idealRatio = 586 / 384;

const mobileCheck = function() {
  if (document.body.clientWidth > 767) {
    return false;
  }
  return true;
};

const isMobile = mobileCheck();

export default function HomePage() {
  const [galleryHeight, setGalleryHeight] = useState('588.797px');
  const galleryRef = useRef();

  useEffect(() => {
    const width = galleryRef.current.clientWidth;
    let calculated = width * idealRatio;
    if (width < 375) {
      calculated -= 20;
    }
    setGalleryHeight(isMobile ? calculated : 562);
  }, []);

  return (
    <div className="container wedding-main">
      <div className="snowflake1">❅</div>
      <div className="snowflake1">❅</div>
      <div className="snowflake1">❆</div>
      <div className="snowflake1">❄</div>
      <div className="snowflake1">❅</div>
      <div className="snowflake1">❆</div>
      <div className="snowflake1">❄</div>
      <div className="snowflake1">❅</div>
      <div className="snowflake1">❆</div>
      <div className="snowflake1">❄</div>
      <div className="row">
        <div className="col-md-12">
          <Header/>
        </div>
        <div className="col-md-12 no-padding countdown-container">
          <div>
            <div className="content">
              {/* <Snow /> */}
              <div className="header w3-container w3-cursive">
                VISHAKA & ARKADYUTI
              </div>
              <CountDown/>
            </div>
            <div className="countdown-image"/>
          </div>
        </div>
        <div className="col-md-12 no-padding">
          <div className="section-2">
            <h4 className="header-2 w3-container w3-monospace">
              WE ARE GETTING MARRIED (:
            </h4>
            <p className="para-content">
              <b className={'bold-text'}>“Love comes from the most unexpected places.“</b><br/>
              Please join us in our happiness as we mark the beginning of our journey into a life-long bond and
              commitment.
            </p>
            <div className="horizontal-rule"/>
            <div className="bottom-text">XOXO</div>
          </div>
        </div>


        <div className={'col-md-12 photo-gallery'}>
          <h1 className="section-header w3-container w3-monospace">
            MOMENTS
          </h1>
          {/* eslint-disable-next-line react/style-prop-object */}
          <div className="gallery-container"
               ref={galleryRef}
               style={{ height: galleryHeight }}
          >
            <Swiper
              style={{ height: galleryHeight }}
              spaceBetween={0}
              slidesPerView={isMobile ? 1 : 3}
              loop
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide><GridOne/></SwiperSlide>
              <SwiperSlide><GridTwo/></SwiperSlide>
              <SwiperSlide><GridThree/></SwiperSlide>
            </Swiper>

          </div>
        </div>


        <div className="col-md-12 no-padding the-wedding">
          <h1 className="section-header">
            THE <br/>
            WEDDING
          </h1>
          <div className="desktop-wrapper">
            <div className="vertical-line"/>
            <div className="left-desktop">
              <div className="bottom-text">When</div>
              <span className="details-text">Jan 25, 2021, 9:00 AM</span>
            </div>
            <div className="right-desktop">
              <div className="bottom-text">Where</div>
              <span className="details-text"> Vrindavan Palace <br/> 79, Hoshangabad Rd, Shri Ram Colony <br/> Bhopal (Madhya Pradesh)
          </span>
            </div>
          </div>
          <a
            href="https://goo.gl/maps/NrrNFvX2qA6fTJSFA"
            target="_blank"
            className="location-cta"
          >
            <span></span>
          </a>
        </div>
        <div className="mask-container"> <img src={mask} /></div>
        <div className="gif-container">
          <img src={gify} />
        </div>
        <div className="col-md-12 no-padding footer">
          {/* <h1 className="section-header">#VishakaHeartsArka</h1> */}
          <div className="copyright">© 2021 By Arkadyuti & Vishaka.</div>
        </div>
      </div>
    </div>
  );
}

function GridThree() {
  return (
    <div className="gallery-wrapper grid-three">
      <div className="full-height one"><img src={IMG_20200214_222039}/></div>
      <div className="full-height two"><img src={IMG_20200115_184323}/></div>
      <div className="bottom-left"><img src={IMG_20190822_000843}/></div>
      <div className="top-right"><img src={IMG_20181231_195819}/></div>
    </div>
  );
}

function GridOne() {
  return (
    <div className="gallery-wrapper grid-one">
      <div className="full-width"><img src={A28I2408}/></div>
      <div className="bottom-left"><img src={IMG_20191231_204426}/></div>
      <div className="bottom-right"><img src={IMG_20191127_002453}/></div>
    </div>
  );
}

function GridTwo() {
  return (
    <div className="gallery-wrapper grid-two">
      <div className="top-left"><img src={IMG_20200214_222333}/></div>
      <div className="top-right"><img src={IMG_20181117_001957}/></div>
      <div className="full-width"><img src={IMG_20200214_194921}/></div>
    </div>
  );
}
