import React from 'react'

function  Item({image, name, newPrice,oldPrice}) {
  return (
    <div className='item'>
      <img src={image}></img>
      <p>{name}</p>
      <div className='item-prices'>
        <div className='item-price-new'></div>
        {newPrice}
      </div>
      <div className='item-price-old'>
        {oldPrice}
      </div>
    </div>
  )
}

export default Item