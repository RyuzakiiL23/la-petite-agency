'use client';

import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import Image from 'next/image';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(SplitText);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const lines = containerRef.current.querySelectorAll('.hero-line');

    gsap.fromTo(
      lines,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'back.out(1.7)',
        stagger: 0.2 // delay between each line
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className='flex flex-col mx-auto text-9xl font-bold overflow-hidden'
    >
      <div className="hero-line text-white">That</div>

      <div className='hero-line relative w-[490px]  h-32 '>
        <Image
          src='/images/CreativeOriginalBold.png'
          alt='Logo'
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className="hero-line text-white">Petite</div>
      <div className="hero-line text-white">Agency.</div>
    </div>
  );
}
