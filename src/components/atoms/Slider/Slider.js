import React, { Component, useEffect, useState } from 'react';
import './Slider.css';
import carrr1 from '../../../Images/slide1.jpg';
import carrr2 from '../../../Images/slide2.jpg';
import carrr3 from '../../../Images/slide3.jpg';
import carrr4 from '../../../Images/slide4.jpg';
import carrr5 from '../../../Images/slide5.jpg';

const Slider = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextCounter = counter >= 4 ? 1 : counter + 1;
      setCounter(nextCounter);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  return (
    <span className="slidesection" >
      <div className="slider">
        <div className="slides" >
          <input type="radio" name="radio-btn" id="radio1" checked={counter === 1} />
          <input type="radio" name="radio-btn" id="radio2" checked={counter === 2} />
          <input type="radio" name="radio-btn" id="radio3" checked={counter === 3} />
          <input type="radio" name="radio-btn" id="radio4" checked={counter === 4} />

          <div className="slide first">
            <img src={carrr1} alt="" />
          </div>
          <div className="slide">
            <img src={carrr2} alt="" />
          </div>
          <div className="slide">
            <img src={carrr3} alt="" />
          </div>
          <div className="slide">
            <img src={carrr4} alt="" />
          </div>
          <div className="slide">
            <img src={carrr5} alt="" />
          </div>

          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
        </div>
        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
        </div>
      </div>
    </span>
  );
};

export default Slider;
