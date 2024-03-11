import React from 'react'

const featrued = () => {
  return (
    <div className='w-full py-10 '>
      <div className='w-full px-20 pb-10 border-b-[1px] border-[#ccc]'>
        <h1 className='text-7xl tracking-tighter'> Featchure Project</h1>
      </div>
      <div className='w-full px-20'>
        <div className='card w-full flex gap-10 mt-10'>

          <div className='cardcontainer relative w-1/2  h-[75vh] bg-red-500 rounded-xl '>
            
            <div className='w-full h-full bg-green-500'>
            <h1 className=' text-6xl absolute left-[80%] top-1/2 z-[99] translate-x-[50%] tr bg-zinc-700 leading-0 tracking-tighter py-1'>Ankit </h1>
              <img src="https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='h-full w-full hover:scale-[0.8] transition' alt="" />
            </div>
          </div>
          <div className=' cardcontainer relative w-1/2  h-[75vh] bg-red-500 rounded-xl overflow-hidden'>
            <div className='w-full h-full bg-green-500'>
              <img src="https://img.freepik.com/premium-photo/radha-krishna-4k_1028264-6.jpg" className='h-full w-full hover:scale-[0.8] transition' alt="" />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default featrued