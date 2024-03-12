import React from 'react'
import Navbar from './components/navbar'
import Landing from './components/landing'
import Marquee from './components/marquee'
import About from './components/about'
import Eyes from './components/eyes'
import Featrued from './components/featrued'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featrued />
    </div>
  )
}

export default App