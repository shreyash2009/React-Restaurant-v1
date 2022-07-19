import React from 'react'
import ServiceData from '../../utility/Home_sData'
import ServiceCard from './ServiceCard'
const Service = () => {
    
  return (
    <section id='Services'>
        <h2>Our Services</h2>
        <div className='underLine'></div>
    <div className='Service_container'>
        {
            ServiceData.map((service)=>{
                return(
                    <ServiceCard key={service.id} {...service}/>
                )
            })
        }
    </div>
    </section>
  )
}

export default Service