import React,{useContext, useState} from "react";
import "./NavBar.css";
import logo from "../assets/nav_bar_media/logo.png";
import car_icon from "../assets/nav_bar_media/carro.png"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";


const NavBar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <img src={logo} alt="" width={50} height={50} />
      </div>
      <p>SHOPPER</p>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}} ><Link style={{textDecoration:"none"}} to="/" >Shop</Link> {menu ==="shop"?<hr/>:<></> }</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none"}} to="/mens" >Men</Link> {menu ==="mens"?<hr/>:<></> } </li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:"none"}} to="womens" >Women</Link> {menu ==="womens"?<hr/>:<></> }</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none"}} to="/kids" >Kids</Link> {menu ==="kids"?<hr/>:<></> }</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={car_icon} alt=""  width={50} height={50}/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default NavBar;
