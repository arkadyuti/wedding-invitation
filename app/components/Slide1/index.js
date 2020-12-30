/**
 *
 * Slide1
 *
 */

import React, { memo } from 'react';
import img1 from '../../images/wedding_1.jpg';
import CountDown from "../../components/CountDown";
import "../../css/styles.css";


const Snowflake = (props) => {
  return (
    <p className='Snowflake' id={`item${props.id}`} style={props.style}>
      *
    </p>
  )
}

const Snow = () => {
  const snow = () => {
    let animationDelay = '0s';
    let fontSize = '100px';
    let arr = Array.from('Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!!')
    return arr.map((el, i) => {
      animationDelay = `${(Math.random() * 16).toFixed(2)}s`;
      fontSize = `${(Math.floor(Math.random() * 10) + 10)}px`;
      let style = {
        animationDelay,
        fontSize
      }
      return (<Snowflake key={i} id={i} style={style} />)
    })
  }

  return (
    <div className='App'>
      {snow()}
    </div>
  )

}

function Slide1() {
  return (
    <div>
      <div className="content">
        {/* <Snow /> */}
        <div className="header w3-container w3-cursive">VISHAKA & ARKADYUTI</div>
        <CountDown />
      </div>
      <img src={img1} className="background-image" />
    </div>
  );
}

Slide1.propTypes = {};

export default memo(Slide1);
