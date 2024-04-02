import React from "react";
import "./RelatedProducts.css";
import data_product from "../Assets/data";
import Item from "../Assets/Items/Item";

const RelatedProducts = () => {
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} mew_price={item.new_price} old_price={item.old_price}/>
            // <div key ={i}>
            //   <span>{item.id}</span>
            //   <span image={item.image}>{item.image}</span>
            // </div>
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
