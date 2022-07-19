import React, { useEffect } from 'react'
import './Menu.css'
import ImageSlider from './ImageSlider'
import MenuApp from './MenuApp'
import Video from '../Home/Video'
const Menu = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
    <ImageSlider/>
    <MenuApp/>
    </>
  )
}

export default Menu