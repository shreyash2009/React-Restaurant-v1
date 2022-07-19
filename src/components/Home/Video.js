import React from 'react'
import Promo  from '../../assets/Home/Restaurant_promo.mp4'

const Video = () => {

  return (
    <div className='Promo-vdo'>
        <video loop autoPlay muted src={Promo}  ></video>
        <div className='Videotext'>
        <h1>The Comfort</h1>
        <h1>You Crave</h1>
        </div>
    </div>
  )
}

export default Video