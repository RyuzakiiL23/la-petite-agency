"use client";

import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";

const Nav = () => {
  const router = useTransitionRouter();

  const routes = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About",
      url: "/about",
    },
  ];

  return (
    <nav className="p-6 bg-white" style={{ viewTransitionName: "nav" }}>
      <ul className="flex gap-4">
        {routes.map((route) => (
          <li key={route.label}>
            <Link
              href={route.url}
              onClick={(e) => {
                e.preventDefault();
                router.push(route.url, {
                  onTransitionReady: pageAnimation,
                });
              }}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: "translateX(0)",
      },
      {
        opacity: 0.5,
        scale: 1,
        transform: "translateX(-100px)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        transform: "translateX(100%)",
      },
      {
        transform: "translateX(0)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};

export default Nav;