import React, { createContext, useState } from 'react'
import {data_product  as all_products} from "../Components/assets/nav_bar_media/data";

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};

    for(let i = 0; i < all_products.length+1; i++){
        cart[i] = 0;
    }
    return cart
}


const ShopContextProvider = (props)=>{
    const [cartItems, setCartItems] = useState(getDefaultCart)
    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_products.find((product)=>{product.id===Number(item)})
                totalAmount += itemInfo.newPrice *cartItems[item];
            }
            return totalAmount;
        }
    }

    const getTotalCartItems = ()=>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item]
            }
        }
        return totalItem;
    }

    const contextValue = {all_products,cartItems, addToCart, removeFromCart,getTotalCartAmount, getTotalCartItems};
    
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;