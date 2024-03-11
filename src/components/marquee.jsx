import React from 'react'
import { motion } from 'framer-motion'

const marquee = () => {
  return (
    <div className='w-full py-20 rounded-t-3xl bg-[#004d43] overflow-hidden'>
        <div className='text border-t-2 border-b-2 flex whitespace-nowrap border-zinc-300'>
            <motion.h1 className='text-[13vw] leading-none font-["Founders_Grotesk "] uppercase font-bold py-10 '>We are Ochi</motion.h1>
            <motion.h1 className='text-[13vw] leading-none font-["Founders_Grotesk "] uppercase font-bold py-10 '>We are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default marquee