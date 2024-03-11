import React from 'react';

const about = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-t-3xl'>
        <h1 className='font-["Nue Montreal"] text-[4vw] leading-[4.5vw] tracking-tight text-[#000]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great peoople.
        </h1>
        <div className='w-full flex border-t-[1px] mt-20 pt-6 border-[#a1b562]'>
            <div className='w-1/2 '>
                <h1 className='text-7xl text-[#000]'>Our approach</h1>
                <button className='flex items-center gap-8 uppercase px-10 py-3 bg-zinc-900 rounded-full text-white mt-10'>Read more <div className='w-3 h-3  bg-zinc-100 rounded-full'></div></button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-[#e3ff7c]'> 
            </div>
        </div>
    </div>
  )
}

export default about