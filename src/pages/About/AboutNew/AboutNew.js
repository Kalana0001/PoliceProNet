import React from 'react'
import './AboutNew.css'
import imgx from'../../../Images/t5.jpg'

function AboutNew() {
  return (
    <div className ="hero">
         <img src={imgx} alt="Description" className="about-image" />
        <div className="hero-text">
            <h1 className='heroh1'>  About  Us</h1>
            <p className='herop'>Our Commitment to Community Safety</p>
            </div>
    </div>
  )
}

export default AboutNew;