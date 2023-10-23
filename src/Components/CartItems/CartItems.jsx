import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";

function CartItems() {
  const { all_products, cartItems, removeFromCart,getTotalCartAmount  } = useContext(ShopContext);
  return (
    <div className="cart-items">
      <div className="cart-items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((el) => {
        if (cartItems[el.id] > 0) {
          return (
            <div>
              <div className="cart-items-format cart-items-format-main">
                {/*                 <img  className="cart-icon-product-icon" src="" alt="" /> */}
               <img  className="cart-icon-product-icon" src={el.image} alt="" />
                <p>{el.name}</p>
                <p>${el.newPrice}</p>
                <button className="cart-items-quantity">{cartItems[el.id]}</button>
                <p>${el.newPrice*cartItems[el.id]}</p>
                {/* insert image */}
                <span className="cart-items-remove-icon" onClick={() => {removeFromCart(el.id);}}>✖</span>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart-items-down">
        <div className="cart-items-total">
            <h2>Cart Totals</h2>
            <div>
                <div className="cart-items-total items">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-items-total-item">
                    <p>Shopping Free</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cart-items-total-item">
                    <h3>Total</h3>
                    <h3>${0}</h3>
                </div>
            </div>
            <button>PROCED TO CHECKOUT</button>
        </div>
        <div className="cart-items-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-items-prombox">
                <input type="text" placeholder="promo code"/>
                <button>Submit</button>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default CartItems;
