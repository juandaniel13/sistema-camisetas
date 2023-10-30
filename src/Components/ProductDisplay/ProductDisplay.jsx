import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";
function ProductDisplay(props) {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-display-img">
          <img className="product-display-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="product-display-right">
        <h2>{product.name}</h2>
        <div className="product-display-right-stars">
          {/* imágenes */}✔ ✔ ✔ ✖ ✖<p>{112}</p>
        </div>
        <div className="product-display-right-prices">
            {/* <div className="product-display-right-price-old">${product.oldPrice}</div> */}
            <div className="product-display-right-price-new">{`$ ${product.newPrice}.000`}</div>

        </div>
        <div className="product-display-right-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ex, hic minus odit porro dicta magnam. Molestiae eum quo corporis quos debitis, at et, fugit obcaecati dolorem similique voluptatibus natus.
        </div>
        <div className="product-display-right-size">
            <h2>Select Size</h2>
            <div className="product-display-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CARD</button>
        <p className="productd-isplay-right-caregory"><span>Category : <span>women, T-shirt, Cop Top</span></span></p>
        <p className="product-display-right-caregory"><span>Tags : <span>women, T-shirt, Cop Top</span></span></p>
        <p className="product-display-right-caregory"><span>Category : <span>women, T-shirt, Cop Top</span></span></p>

      </div>
    </div>
  );
}

export default ProductDisplay;
