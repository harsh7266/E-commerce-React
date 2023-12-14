import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { Shopcontext } from '../context/Shopcontext'

import { Productdisplay } from '../components/Productdisplay/Productdisplay'
import { Descriptionbox } from '../components/description/Descriptionbox'
import { Relatedproducts } from '../components/related products/Relatedproducts'

export const Product = () => {
  const {all_product} = useContext(Shopcontext)
  const {productId} = useParams();
  const product=all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      
      <Productdisplay product={product}/>
      <Descriptionbox />
      <Relatedproducts />
    </div>
  )
}


