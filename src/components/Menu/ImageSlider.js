import React, { useEffect, useState } from 'react'
import SlidesData from '../../utility/SlideData'
import './Menu.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
const ImageSlider = () => {
  // console.log(SlidesData[0].imgurl)
  const [curr,setCurr]= useState(0);
  const len = SlidesData.length-1;
  const prevSlide = ()=>{
    setCurr(curr===0 ? len : curr-1)
  }
  const nextSlide = ()=>{
    setCurr(curr===len ? 0 : curr+1)
  }
  useEffect(()=>{
    let slider = setInterval(() => {
      setCurr(curr===len ? 0 : curr+1);
    }, 5000)
    return()=>{
      clearInterval(slider);
    }
  },[curr]);
  
  return (
    <div className='Slider-container' style={{backgroundImage: `url(${SlidesData[curr].imgurl})`}}>
      <div className='SlideContent'>
      <FaArrowAltCircleLeft className='btn' onClick={prevSlide}/>
      <h3>Our Speciality</h3>
      <FaArrowAltCircleRight className='btn' onClick={nextSlide}/>
      </div>
      </div>

  )
}

export default ImageSlider