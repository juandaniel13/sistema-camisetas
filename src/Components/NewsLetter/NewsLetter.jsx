import React from 'react'
import "./NewsLetter.css"
function NewsLetter() {
  return (
    <div className='news-letter'> 
        <h2>Get Exclusive Offers on your email</h2>
        <p>Subscribe to our newleter and stay update</p>
        <div>
            <input type="text" placeholder='Your email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter