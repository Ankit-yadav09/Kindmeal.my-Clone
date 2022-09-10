import React from 'react'
import Intro from '../../components/Intro'
import Middle from '../../components/Middle'
import BannerHome from './BannerHome'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
        <BannerHome/>
        <Middle/>
        <Intro/>
        <Footer/>
    </div>
  )
}

export default Home