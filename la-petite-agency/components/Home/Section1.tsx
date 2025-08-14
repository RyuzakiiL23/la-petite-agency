'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import Section2 from './Section2';
import Section3 from './Section3';

gsap.registerPlugin(ScrollTrigger);

export default function Section1() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll-based animation
  useGSAP(() => {
    if (!scrollRef.current) return;

    const boxes = gsap.utils.toArray<HTMLElement>(scrollRef.current.querySelectorAll('.box-scroll'));
    const screenWidth = window.innerWidth;

    boxes.forEach((box) => {
      gsap.fromTo(
        box,
        { x: screenWidth }, // Start: completely off-screen to the right
        {
          x: - screenWidth, // End: completely off-screen to the left
          ease: 'none', // Keep it linear for smooth scroll
          scrollTrigger: {
            trigger: box,
            start: 'center center', // start when box enters from bottom
            end: '+=2000', // end after scrolling 2000px
            scrub: true,
            pin: true, // Pin the box during the scroll
          },
        }
      );
    });


    ScrollTrigger.refresh();
  }, []);

  const videosRef = useRef<(HTMLVideoElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    videosRef.current[index]?.play();
  };

  const handleMouseLeave = (index: number) => {
    videosRef.current[index]?.pause();
    videosRef.current[index]!.currentTime = 0; // rewind to start
  };

  // Regular animation (runs immediately)
  // useGSAP(() => {
  //   gsap.from('.box', {
  //     x: 500,
  //     repeat: -1,
  //     yoyo: true,
  //     rotation: 360,
  //     duration: 2,
  //   });
  // }, []);

  return (
    <>
      {/* Infinite animation */}
      {/* <div className='h-[1200px] bg-white w-full'>
        <div className="app relative h-screen w-[100vw] bg-blue-400">
          <div className="box bg-pink-400 h-40 w-40 rounded-xl"></div>
          <div className="box border border-white h-40 w-40 rounded-xl"></div>
        </div>
      </div> */}

      {/* Scroll animation */}
      <div className='h-full w-full'>
        <div className='absolute left-1/2 -translate-x-1/2 bg-[#0b0913] pt-20 h-[2500px]'>
          <div className="sticky top-1/2 -translate-y-1/2 flex w-full items-center justify-center">
            <p className="text-8xl text-center text-white ">WE MAKE BRANDS <br /> UNSKIPPABLE</p>
          </div>
          <div className='absolute h-[1000px] w-full bg-linear-to-t from-[#0b0913] via-[#0b0913] to-white/0 bottom-0'></div>
        </div>
        <div className="app relative h-screen overflow-hidden" ref={scrollRef}>
          <div className="box-scroll w-fit flex gap-10 justify-center">

            {/* 1 - Game of Games - Radiant */}
            <div
              className="border border-white h-[60vh] w-[35vh] rounded-xl overflow-hidden hover:w-[45vh] hover:scale-y-110 transition-all ease-out duration-300 flex-none cursor-pointer relative"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
            >
              <video
                ref={(el) => { videosRef.current[1] = el; }}
                src="https://a.storyblok.com/f/271652/x/b395be3161/radiant_desktop_bottom_v9.mp4"
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              ></video>
              <div className="absolute bottom-0 left-0 p-4 text-white bg-gradient-to-t from-black/70 to-transparent w-full">
                <p className="text-sm font-semibold">Game of Games</p>
                <p className="text-2xl font-extrabold">Radiant</p>
                <span className="text-xs opacity-80">Coming Soon</span>
              </div>
            </div>

            {/* 2 - NFT Collection - Zigma */}
            <div
              className="border border-white h-[60vh] w-[35vh] rounded-xl overflow-hidden hover:w-[45vh] hover:scale-y-110 transition-all ease-out duration-300 flex-none cursor-pointer relative"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
            >
              <video
                ref={(el) => { videosRef.current[2] = el; }}
                src=" https://a.storyblok.com/f/271652/x/46ac7748df/zigma_desktop_bottom-lg.mp4"
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              ></video>
              <div className="absolute bottom-0 left-0 p-4 text-white bg-gradient-to-t from-black/70 to-transparent w-full">
                <p className="text-sm font-semibold">NFT Collection</p>
                <p className="text-2xl font-extrabold">Zigma</p>
                <span className="text-xs opacity-80">Coming Soon</span>
              </div>
            </div>

            {/* 3 - Metagame Portal - Nexus */}
            <div
              className="border border-white h-[60vh] w-[35vh] rounded-xl overflow-hidden hover:w-[45vh] hover:scale-y-110 transition-all ease-out duration-300 flex-none cursor-pointer relative"
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={() => handleMouseLeave(3)}
            >
              <video
                ref={(el) => { videosRef.current[3] = el; }}
                src="https://a.storyblok.com/f/271652/x/11d17389bc/zoltan_desktop_bottom-lg.mp4"
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              ></video>
              <div className="absolute bottom-0 left-0 p-4 text-white bg-gradient-to-t from-black/70 to-transparent w-full">
                <p className="text-sm font-semibold">Metagame Portal</p>
                <p className="text-2xl font-extrabold">Nexus</p>
                <span className="text-xs opacity-80">Coming Soon</span>
              </div>
            </div>

            {/* 4 - AI Agent - Azul */}
            <div
              className="border border-white h-[60vh] w-[35vh] rounded-xl overflow-hidden hover:w-[45vh] hover:scale-y-110 transition-all ease-out duration-300 flex-none cursor-pointer relative"
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={() => handleMouseLeave(4)}
            >
              <video
                ref={(el) => { videosRef.current[4] = el; }}
                src=" https://a.storyblok.com/f/271652/x/07fe87b7cb/spectre_desktop_bottom-lg.mp4"
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              ></video>
              <div className="absolute bottom-0 left-0 p-4 text-white bg-gradient-to-t from-black/70 to-transparent w-full">
                <p className="text-sm font-semibold">AI Agent</p>
                <p className="text-2xl font-extrabold">Azul</p>
                <span className="text-xs opacity-80">Coming Soon</span>
              </div>
            </div>

          </div>
        </div>
        <Section2 />
        <Section3 />
      </div>
    </>
  );
}
