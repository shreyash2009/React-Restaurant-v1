import React, { useState } from 'react'
import Categories from './Categories'
import FoodItems from './FoodItems'
import FoodData from '../../utility/FoodData'
import './Menu.css'
const allCategories = ["all", ...new Set(FoodData.map((item)=>item.category))]
const MenuApp = () => {
    const [categories,setCategories] = useState(allCategories);
    const [itemList, setItemList] = useState(FoodData);
    const filterItem = (category)=>{
        if (category === 'all') {
            setItemList(FoodData);
            return;
          }
          const newItems = FoodData.filter((item) => item.category === category);
          setItemList(newItems);
    }
  return (

<section id="Menu_container">
    <h1>Our Menu</h1>
    <div className='underline'></div>
    <div className='Menu-container'>
        <Categories categories={categories} filterItem={filterItem}/>
        <FoodItems foodData={itemList}/>
    </div>

</section>  )
}

export default MenuApp