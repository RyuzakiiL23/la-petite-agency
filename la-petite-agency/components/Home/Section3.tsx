'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function Section3() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Your content array — just edit this to add/change items
  const itemsData = [
    {
      title: 'Radiant Skies',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sapien sit amet lorem varius malesuada.',
      image: '/images/blog1.jpg',
    },
    {
      title: 'Golden Horizon',
      description:
        'Curabitur ullamcorper nisl vel mauris bibendum, nec egestas metus bibendum.',
      image: '/images/blog2.jpg',
    },
    {
      title: 'Urban Shadows',
      description:
        'Suspendisse potenti. Aenean tincidunt nunc non odio luctus, sed bibendum neque imperdiet.',
      image: '/images/blog3.png',
    },
    {
      title: 'Azure Dreams',
      description:
        'Nam convallis est id nulla feugiat, at ultricies nulla feugiat.',
      image: '/images/blog4.jpg',
    },
    {
      title: 'Crimson Peak',
      description:
        'Fusce et augue vel dui viverra interdum sed non felis.',
      image: '/images/blog5.jpg',
    },
    // {
    //   title: 'Emerald Whisper',
    //   description:
    //     'Donec luctus erat at risus pulvinar, ut malesuada justo cursus.',
    //   image: '/images/blog5.jpg',
    // },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll('.image-card');

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6 md:px-20 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-[5vh]">
        {itemsData.map((item, index) => (
          <div
            key={index}
            className="image-card overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full aspect-[16/9] object-cover rounded-xl"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="line-clamp-3 text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
