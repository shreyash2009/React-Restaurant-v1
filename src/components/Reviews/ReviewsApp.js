import React, { useEffect } from 'react'
import './Review.css'
import ReviewSlider from './ReviewSlider'
import LiveReview from './LiveReview'
const ReviewsApp = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (<>
    <ReviewSlider/>
    <LiveReview/>
    </>
  )
}

export default ReviewsApp