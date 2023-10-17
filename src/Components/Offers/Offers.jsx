import React from 'react'
import "../Offers/Offers.css"
import exclusive_image from "../assets/nav_bar_media/logo.jpg"

function Offers() {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>check now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt=""  height={100} width={100}/>
        </div>
    </div>
  )
}

export default Offers