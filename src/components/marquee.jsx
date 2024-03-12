import React from 'react'
import { motion } from 'framer-motion'

const marquee = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full py-10 rounded-t-3xl bg-[#004d43] overflow-hidden'>
        <div className='text border-t-2 border-b-2 flex whitespace-nowrap border-zinc-300'>
            <motion.h1 initial={{x:"0%"}} animate={{x:"-100%"}} transition={{ repeat:Infinity,ease:"linear",duration:"8"}} className='pr-10 text-[13vw] leading-none font-["Founders_Grotesk "] uppercase font-bold py-6 '>We are Ochi</motion.h1>
            <motion.h1 initial={{x:"0%"}} animate={{x:"-100%"}} transition={{ repeat:Infinity,ease:"linear",duration:"8"}} className='pr-10 text-[13vw] leading-none font-["Founders_Grotesk "] uppercase font-bold py-6 '>We are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default marquee