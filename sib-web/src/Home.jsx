import React from 'react'
import Header from './Header'
import HomeBanner from './HomeBanner'
import About from './About'
import Digital from './Digital'
import OurFact from './OurFact'
import PricingCarousel from './PricingCarousel'
import Footer from './Footer'
import OurClient from './OurClient'
import Certification from './Certification'
import StrategySection from './StrategySection'
import BlogSection from './BlogSection'

const Home = () => {
  return (
    <>
    <Header/>
    <HomeBanner/>
    <About/>
    <Digital/>
    <StrategySection/>
    <OurFact/>
    <Certification/>
    <BlogSection/>
    <PricingCarousel/>
    <Footer/>
    
    </>
  )
}

export default Home