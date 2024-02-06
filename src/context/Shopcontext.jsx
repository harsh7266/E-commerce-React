import React,{createContext, useState} from 'react'
import all_product from '../components/assets/all_product'


export const Shopcontext =createContext(null)

export const Shopcontextprovider = (props) =>{

    const getdefaultcart = () =>{
        let cart =[];
        for (let i = 0; i < all_product.length+1; i++) {
           cart[i] =0;        
        }
        return cart;
    }

    
    const[cartitems,setcartitems]=useState(getdefaultcart())
    
    const addtocart=(itemId) => {
        setcartitems((prev)=>({...prev,   [itemId]:prev[itemId]+1}   ))
    }
    const removefromcart=(itemId) => {
        setcartitems((prev)=>({...prev,   [itemId]:prev[itemId]-1}   ))
    }
    const getTotalcartamount=()=> {
        let totalamount=0;
        for(const item in cartitems)
        {
            if(cartitems[item]>0)
            {
                let iteminfo=all_product.find((product)=>product.id===Number(item))
                totalamount += cartitems[item] * iteminfo.new_price;
            }
        }
        return totalamount;
    }
    const getTotalcartitem=()=>{
        let totalitem =0 ;
        for(const item in cartitems){
        
            if(cartitems[item]>0)
            {
                totalitem+=cartitems[item];

            }
        }
        return totalitem;
    }
    const contextvalue={getTotalcartamount,getTotalcartitem,all_product,cartitems,addtocart,removefromcart}

    return (
       <Shopcontext.Provider value={contextvalue}>
           {props.children}
       </Shopcontext.Provider>
    )
}


