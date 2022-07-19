import React, {useEffect}from 'react'
import Video from './Video'
import Service from './Service'
import MenuHigh from './MenuHigh'
import './Home.css'

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
    <Video />
    <MenuHigh/>
    <Service/>
</>
  )
}

export default Home