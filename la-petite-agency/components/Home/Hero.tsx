import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='flex flex-col mx-auto h-screen text-9xl font-bold'>
        <div className=" text-white">That</div>
   <Image
          src='/images/CreativeOriginalBold.png'
          alt='Logo'
          width={460}
          height={460}
        />       {/* <div className=" text-primary">Creative</div> */}
        <div className=" text-white">Petite</div>
        <div className=" text-white">Agency.</div>
    </div>
  )
}
