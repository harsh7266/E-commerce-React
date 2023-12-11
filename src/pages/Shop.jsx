import React from 'react'
import { Popular } from '../components/popular/Popular'
import { Offers } from '../components/offers/Offers'
import { Newcollections } from '../components/newcollections/Newcollections'
import { Newsletter } from '../components/newsletter/Newsletter'
import { Footer } from '../components/Footer/Footer'
export const Shop = () => {
  return (
  <>  
    
    <Newcollections/>
    <Popular></Popular>
    <Offers/>
    <Newsletter></Newsletter>
    <Footer />
  </>
  )
}


