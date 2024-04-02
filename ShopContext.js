import React, { createContext, useState } from "react";
import all_product from "../components/Assets/all_product";
// import CartItems from "../components/CartItems/CartItems";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    if (!cartItems || !Array.isArray(all_product) || all_product.length === 0) {
      return 0; // Return 0 if cartItems is empty or all_products is not valid
    }
  
    const totalAmount = Object.keys(cartItems).reduce((acc, itemId) => {
      const itemQuantity = cartItems[itemId];
      const itemInfo = all_product.find((product) => product.id === parseInt(itemId));
  
      if (itemQuantity > 0 && itemInfo) {
        acc += itemInfo.new_price * itemQuantity;
      }
  
      return acc;
    }, 0);
  
    return totalAmount;
  };
  
  

  const getTotalCartItems = () => {
    let totalItem = 0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0)
      {
        totalItem+= cartItems[item];
      }
    }
    return totalItem;
  }
  
  const contextValue = {getTotalCartItems,getTotalCartAmount ,all_product, cartItems, addToCart, removeFromCart};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
