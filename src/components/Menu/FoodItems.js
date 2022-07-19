import React from "react";

const FoodItems = ({ foodData }) => {
  return (
    <div className='section-center'>
    {foodData.map((item) => {
      const { id, name, imgurl, desc, price } = item;
      return (
        <article key={id} className='menu-item'>
          <img src={imgurl} alt={name} className='photo' />
          <div className='item-info'>
            <header>
              <h4>{name}</h4>
              <h4 className='price'>Rs.{price}</h4>
            </header>
            <p className='item-text'>{desc}</p>
            <button>Order Now</button>
          </div>
        </article>
      );
    })}
  </div>
    
  );
};

export default FoodItems;
