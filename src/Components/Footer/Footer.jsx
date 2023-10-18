import React from 'react'
import "./Footer.css"
import footer_logo from "../assets/nav_bar_media/logo.jpg"
import media_icon from "../assets/nav_bar_media/carro.png"
function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li>Companny</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer social-icon">
            <div className="footer-icons-container">
                <img src={media_icon} alt=""  width={80} height={80}/>
            </div>
        </div>
        <div className="footer social-icon">
            <div className="footer-icons-container">
                <img src={media_icon} alt=""  width={80} height={80}/>
            </div>
        </div>
        <div className="footer social-icon">
            <div className="footer-icons-container">
                <img src={media_icon} alt=""  width={80} height={80}/>
            </div>
        </div>
        <div className="footer social-icon">
            <div className="footer-icons-container">
                <img src={media_icon} alt=""  width={80} height={80}/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer