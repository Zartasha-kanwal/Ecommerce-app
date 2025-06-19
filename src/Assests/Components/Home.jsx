import React from 'react'
import Herosection from './Herosection'
import SaleSection from './SaleSection'
import Category from './Category'
import Sellingproduct from './Sellingproduct'
import Exploreproduct from './Exploreproduct'
import Newarrival from './Newarrival'
import Footer from './Footer'
import Header from './Header'

export default function Home() {
  return (
    <div id='home'>
      <Header/>
        <Herosection/>
        <SaleSection/>
        <Category/>
        <Sellingproduct/>
        <Exploreproduct/>
        <Newarrival/>
        <Footer/>
    </div>
  )
}
