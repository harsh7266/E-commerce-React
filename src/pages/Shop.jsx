import React from 'react'
import { Hero } from '../components/hero/Hero'
import { Popular } from '../components/popular/Popular'
import { Offers } from '../components/offers/Offers'
import { Newcollections } from '../components/newcollections/Newcollections'
import { Newsletter } from '../components/newsletter/Newsletter'
import { Footer } from '../components/Footer/Footer'
export const Shop = () => {
  return (
  <>  
    <Hero></Hero>
    <Popular></Popular>
    <Offers/>
    <Newcollections/>
    <Newsletter></Newsletter>
    <Footer />
  </>
  )
}


