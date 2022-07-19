import React from 'react'
import './Home.css'
import MenuHighData from '../../utility/MenuHighData'
import MenuHighCard from './MenuHighCard'

const MenuHigh = () => {
  return (
    <>
        <h2 className='menuHighheding'>Menu Highlights</h2>
        <div className='underLine'></div>
    <section id='MenuHighlight'>
        <div className='Highlight_container'>
            {
                MenuHighData.map((Item)=>{
                    return(
                    <MenuHighCard key={Item.id} {...Item}/>
                    )
                })
            }
        </div>
    </section>
    </>
  )
}

export default MenuHigh