import Image from 'next/image'
import React from 'react'

export default function Section2() {
  return (
        <div className='h-full w-full mb-20  flex justify-center mt-[1300px] z-50 relative '>
          <div className='flex flex-col items-center mx-auto text-7xl md:text-9xl font-bold'>
            <div className=" text-white">That</div>
            <div className='relative md:w-[490px] w-[330px] md:h-32 h-24'>
              <Image
                src='/images/CreativeOriginalBold.png'
                alt='Logo'
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            {/* <div className=" text-primary">Creative</div> */}
            <div className=" text-white">Petite</div>
            <div className=" text-white">Agency.</div>
          </div>
        </div>
  )
}
