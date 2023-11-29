import React, { useContext } from "react";
import "./cartitems.css";
import { Shopcontext } from "../../context/Shopcontext";
import remove_icon from "../assets/cart_cross_icon.png";

export const Cartitems = () => {
  const { getTotalcartamount,all_product, cartitems, removefromcart } = useContext(Shopcontext);
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
      {all_product.map((e)=>{
        if(cartitems[e.id]>0)
        {
          return <div>
                 <div className="cartitems-format cartitems-format-main">
                 <img src={e.image} alt="" className="carticon-product-icon" />
                 <p>{e.name}</p>
                 <p>${e.new_price}</p>
                 <button className='cartitems-quantity'>{cartitems[e.id]}</button>
                 <p>${e.new_price*cartitems[e.id]}</p>
                 <img className="cartitems-remove-icon" src={remove_icon} alt="" onClick={()=>{removefromcart(e.id)}} />
                 </div>
                 <hr/>
          </div>
        }
        return null;
      })}
     <div className="caritems-down">

     <div className="cartitems-total">
        <h1>cart totals</h1>
        <div>
          <div className="cartitems-total-item">
          <p>subtotal</p>
          <p>${getTotalcartamount()}</p>
          </div>
          <hr/>
          <div className="cartitems-total-item">
          <p>shipping fee</p>
          <p>Free</p>
          </div>
          <hr/>
          <div className="cartitems-total-item">
          <h3>Total</h3>
          <p>${getTotalcartamount()}</p>
          </div>
        </div>
        <button>Proceed to checkout</button>
     </div>

     </div>
    </div>
  )
}


