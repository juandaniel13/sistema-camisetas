import React, { createContext } from 'react'
import {data_product  as all_prodcucts} from "../Components/assets/nav_bar_media/data";

export const ShopContext = createContext(null);

const ShopContextProvider = (props)=>{
    const contextValue = {all_prodcucts};
    
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;