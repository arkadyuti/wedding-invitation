/**
 *
 * Slider2
 *
 */

import React, { memo } from 'react';
import img2 from "../../images/wedding_2.jpg";
import CountDown from "../../components/CountDown";
import "../../css/styles.css";

function Slider2() {
  return (
    <div>
      <div className="content">
        <div className="header w3-container w3-monospace">VISHAKA & ARKADYUTI</div>
        <CountDown />
      </div>
      <img src={img2} className="background-image" />
    </div>
  );
}

Slider2.propTypes = {};

export default memo(Slider2);
