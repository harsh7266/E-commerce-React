import React,{createContext, useState} from 'react'
import all_product from '../components/assets/all_product'


export const Shopcontext =createContext(null)

const getdefaultcart = () =>{
    let cart ={};
    for (let index = 0; index < all_product.length+1; index++) {
       cart[index] =0;        
    }
}
export const Shopcontextprovider = (props) =>{

    
    const[cartitems,setcartitems]=useState(getdefaultcart())
    
    const addtocart=(itemid) => {
        setcartitems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
    }
    const removefromcart=(itemid) => {
        setcartitems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }
    const contextvalue={all_product,cartitems,addtocart,removefromcart}

    return (
       <Shopcontext.Provider value={contextvalue}>
           {props.children}
       </Shopcontext.Provider>
    )
}

