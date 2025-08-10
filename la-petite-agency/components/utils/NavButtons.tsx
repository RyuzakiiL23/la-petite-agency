import React from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";

export default function NavButtons({ tx }: { tx: string }) {
  return (
    <div className="group inline-flex items-center cursor-pointer text-xl">
      <span className="relative text-4xl">{tx}</span>
      <div
        className="
        top-0
          opacity-0 
          -translate-x-4 
          rotate-0
          transition-all 
          duration-500 
          ease-out
          group-hover:opacity-100 
          group-hover:translate-x-2
          group-hover:rotate-90
        "
      >
        <IoArrowUpCircleOutline className="ml-1" />
      </div>
    </div>
  );
}
