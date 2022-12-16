import React from 'react'
import Hero from '../components/home/hero/Hero'
import classes from '../components/home/Home.module.css';
import Landing1 from '../components/home/landing1/Landing1';
import Landing2 from '../components/home/landingSpeaker/LandingSpeaker';
import LandingEarphone from '../components/home/landingEarphone/LandingEarphone';
import BestGear from '../components/bestGear/BestGear';
import Menu2 from '../components/home/menu2/Menu2';

const Home = () => {
  return (
    <div className={classes.home}>
      <Hero/>
      <Menu2/>
      <Landing1/>
      <Landing2/>
      <LandingEarphone/>
      <BestGear/>
    </div>
  )
}

export default Home