import SplineFile from '@/components/SplineFile'
import React from 'react'

export default function page() {
    return (
        <div className='h-fit w-full relative overflow-hidden rotate'>
            {/* <div className='absolute h-10 w-40 bg-[#0b0913] rounded-full bottom-4 text-white border-white border right-4'>
            <div className='flex justify-center items-center h-full'>
                Ryu
            </div>
        </div> */}
            <div className='w-[125[vw] h-[60vw] rotating mx-[-40vw] '>
                <SplineFile />
            </div>
        </div>
    )
}
