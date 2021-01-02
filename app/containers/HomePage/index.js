/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useEffect, useRef } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import heart from  '../../images/heart.png';

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

SwiperCore.use([Scrollbar, A11y, Autoplay, EffectFade, EffectCoverflow]);

const idealRatio = 586 / 384;

const mobileCheck = function() {
  // let check = false;
  // (function(a) {
  //   if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  // })(navigator.userAgent || navigator.vendor || window.opera);
  // let check = false;
  if (document.body.clientWidth > 767) {
    return false
  }
  return true;
};

const isMobile = mobileCheck();

export default function HomePage() {
  const [galleryHeight, setGalleryHeight] = useState('588.797px');
  const galleryRef = useRef();

  useEffect(() => {
    const width = galleryRef.current.clientWidth;
    const calculated = width * idealRatio;
    // setGalleryHeight(calculated);
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
              {/* I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you. */}
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
        <div className="col-md-12 no-padding footer">
          <h1 className="section-header">#VishakaHeartsArka</h1>
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
