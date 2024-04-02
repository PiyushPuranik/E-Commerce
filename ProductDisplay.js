import React, { useContext } from "react";
import "./ProductDisplay.css";
import satr_icon from "../Assets/star_icon.png";
import satr_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {

  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={satr_icon} alt="" />
          <img src={satr_icon} alt="" />
          <img src={satr_icon} alt="" />
          <img src={satr_icon} alt="" />
          <img src={satr_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          The garment is a long-sleeved, crew-neck t-shirt made from 100%
          cotton. It is available in a variety of colors, including black,
          white, blue, and red. The t-shirt is a classic fit and is true to
          size. It is perfect for everyday wear and can be dressed up or down.
          The t-shirt is machine-washable and dryer-safe.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category :</span> Women, T-Shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span> Modern, Latest</p>

      </div>
    </div>
  );
};

export default ProductDisplay;
