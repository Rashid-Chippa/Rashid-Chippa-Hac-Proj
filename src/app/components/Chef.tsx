import React from 'react'
import Image from 'next/image'
function Component5() {
  return (
    <><div className='pt-0 '>
<div className='text-center pb-14  '>

          <h1 className=' pt-9 font-great-vibes  text-[32px]  md:text-[32px]  text-custom-yellow '> Food Category</h1>
          <h1 className='  font-bold text-[30px] md:font-bold md:text-[48px]  text-white '><span className='text-custom-yellow'>Ch</span>oose Food Items</h1>
</div>
      </div>
      
{/* cards */}
      <div className=' lg:flex lg:items-center lg:justify-center md:gap-y-7  lg:gap-x-7'>
              <div className="flex flex-col items-center justify-center  xl:flex xl:flex-row xl:items-center gap-y-7 xl:justify-center md:gap-x-3 xl:gap-x-7 ">
                  <div className='relative'>
                      <div className='absolute left-0 bottom-0 px-9 bg-white '>
                        <p className='text-[18px] text-start text-black'>D.Estwood</p>
                        <p className='text-[14px] text-start text-custom-gray-4 '>Chef</p>
                      </div>
                      <Image src={"/images/p1.svg"} height={380} width={300} alt='img' className='rounded-xl' />
                  </div>
                  <div className='relative'>
                      <div className='absolute left-0 bottom-0 px-9 bg-white'>
                        <p className='text-[18px] text-start text-black'>D.Estwood</p>
                        <p className='text-[14px] text-start text-custom-gray-4 '> Chef</p>
                      </div>
                      <Image src={"/images/p2.svg"} height={380} width={300} alt='img' className='rounded-xl' />
                  </div>
              </div>
              <div className=" hidden lg:flex flex-col items-center justify-center xl:flex-row xl:items-center gap-y-7 xl:justify-center md:gap-x-3 xl:gap-x-7">
              <div className='relative'>
                      <div className='absolute left-0 bottom-0 px-9 bg-white'>
                        <p className='text-[18px] text-start text-black'>D.Estwood</p>
                        <p className='text-[14px] text-start text-custom-gray-4 '> Chef</p>
                      </div>
                      <Image src={"/images/p3.svg"} height={380} width={300} alt='img' className='rounded-xl' />
                  </div>
                  <div className='relative'>
                      <div className='absolute left-0 bottom-0 px-9 bg-white'>
                        <p className='text-[18px] text-start text-black'>D.Estwood</p>
                        <p className='text-[14px] text-start text-custom-gray-4 '>Chef</p>
                      </div>
                      <Image src={"/images/p4.svg"} height={380} width={300} alt='img' className='rounded-xl' />
                  </div>
              </div>


          </div>
              <div className='space-x-3 mt-9 pb-8 flex items-center justify-center lg:flex lg:items-center  lg:justify-center'>
              <button className=' border-[2px] py-3 px-8  rounded-3xl  border-yellow-500    text-white bg-red-700'>See More</button>
      </div>

    
    </>
  )
}

export default Component5 