import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from '../../components/HomePageComponents/HeroSection'
import OurChef from '../../components/HomePageComponents/OurChef'
import MenuSection from '../../components/HomePageComponents/MenuSection'

const Home = () => {
  return (
    <div>
         <Helmet>
        <title>Home</title>
      </Helmet>
      <HeroSection/>
      <OurChef/>
      <MenuSection/>
    </div>
  )
}

export default Home