import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero-section/Hero'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import CardsContainer from './Components/Cards-container'
import Ready from './Components/Ready'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen scroll-smooth	'>

      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <CardsContainer />
      <Ready />

    </div>
  )
}

export default App