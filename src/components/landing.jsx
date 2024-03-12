import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const landing = () => {
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.2" className='w-full h-screen  pt-1'>
            <div className='textstructure mt-48 px-20'>
                {["We Create", "eye opening", "Presentations"].map((item, index) => {
                    return <div className='masker '>
                        <div className='w-fit flex'>
                            {index===1 && 
                            (<motion.div initial={{width:"0"}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:"1.2"}} className='w-[9vw] h-[5.5vw] bg-red-500 mt-[1.5vw]'></motion.div>)}
                            <h1 className='font-["Founders_Grotesk "] text-[7.5vw] uppercase leading-[7.5vw] tracking-tight font-medium'>{item}</h1>
                        </div>
                    </div>
                })}
            </div>
            <div className='border-t-2 border-zinc-800 mt-10 flex justify-between item-center py-5 px-20'>
                {["my Name is ankit", "i have done BCA"].map((item, index) => (
                    <p className='text-md font-light tracking-tighter leading-none'>{item}</p>
                ))}

                <div className='start flex justify-center items-center gap-5'>
                    <div className="px-10 py-2 border-[1px] border-zinc-500 rounded-full font-light text-sm capitalize"> start the project
                    </div>
                    <div className='w-10 h-10 flex justify-center items-center rounded-full border-[1px] border-zinc-500'>
                        <span className='rotate-[45deg]'><FaArrowUpLong /></span>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default landing