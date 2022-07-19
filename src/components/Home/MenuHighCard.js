import React from 'react'

const MenuHighCard = ({imgurl,h1}) => {
  return (
    <div className='HighlightCard' style={{backgroundImage: `url(${imgurl})`}}>
        <div className='info'>
        <h4>{h1}</h4>
        <button>Order Now</button>
        </div>
    </div>
  )
}

export default MenuHighCard