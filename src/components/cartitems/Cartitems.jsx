import React, { useContext } from "react";
import "./cartitems.css";
import { Shopcontext } from "../../context/Shopcontext";
import remove_icon from "../assets/cart_cross_icon.png";

export const Cartitems = () => {
  const { all_product, cartitems, removefromcart } = useContext(Shopcontext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
      <hr />
          
{/*           
      {
          all_product.map((e) =>{
            if(cartitems[e.id] >0)
            {
              return <div className="cartitems-format">
                 <img src={e.image} alt="" className="carticon-product-icon" />
                 <p>{e.name}</p>
                 <p>{e.new_price}</p>
                 <button className="cartitems-quantity">{cartitems[e.id]}</button>
                 <p>{e.new_price*cartitems[e.id]}</p>
                 <img src={remove_icon} alt=""  onClick={()=>{removefromcart(e.id)}} />
               </div>
            
            }
            return null
            
          })
      } */}
         
      
       
     
    </div>
  )
}

