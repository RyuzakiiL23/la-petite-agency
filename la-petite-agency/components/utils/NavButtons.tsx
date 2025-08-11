import React from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";

export default function NavButtons({ tx, iconSize }: { tx: string, iconSize?: string }) {
  return (
    <div className="group inline-flex items-center cursor-pointer">
      <span className="relative">{tx}</span>
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
        <IoArrowUpCircleOutline className={iconSize} />
      </div>
    </div>
  );
}
