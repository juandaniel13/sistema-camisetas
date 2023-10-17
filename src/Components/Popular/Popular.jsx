import React from 'react'
import "../Popular/Popular.css"
import { data_product } from '../assets/nav_bar_media/data'
import Item from "../Item/Item"
function Popular() {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice ={item.newPrice} oldPrice = {item.oldPrice}/>

             })}
        </div>
    </div>
  )
}
export default Popular