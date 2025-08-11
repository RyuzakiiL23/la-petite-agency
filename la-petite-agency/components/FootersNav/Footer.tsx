import Image from "next/image";
import Link from "next/link";
import NavButtons from "../utils/NavButtons";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t-2 rounded-2xl border-white text-white relative py-14">
      <div className="container mx-auto flex flex-col md:justify-between gap-8">
        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row gap-6">
          {[
            { name: "OUR WORKS", href: "/our-work" },
            { name: "ABOUT US", href: "/about-us" },
            { name: "JOIN US", href: "/join-us" },
            { name: "BLOG", href: "/blog" },
          ].map((link) => (
            <li key={link.name} className="flex items-center gap-2 text-3xl">
              <Link href={link.href} >
                <NavButtons tx={link.name} iconSize="text-xl" />
                {/* Arrow Icon */}
              </Link>
            </li>
          ))}
        </nav>
      </div>

      <div className="w-full border-b container mx-auto my-6"></div>

      <div className="container mx-auto flex justify-between items-center gap-8">
        {/* Social Links */}
        <ul className="flex items-center gap-4 text-xl ">
          <li className="cursor-pointer">
            <FaInstagram/>
          </li>
          <li className="cursor-pointer">
            <FaLinkedin/>
          </li>
        </ul>
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/LogoDark.png"
            alt="That Lot Logo"
            width={135}
            height={40}
          />
        </Link>
      </div>

      <div className="w-full border-b container mx-auto my-6"></div>

      {/* Bottom Bar */}
      <div className="container mx-auto mt-6 flex flex-col md:flex-row  justify-between gap-4 pt-4 text-sm">
        <p>© Copyright That Lot 2025, part of The Weber Shandwick Collective.</p>
        <div className="flex items-center gap-4">
          <Link href="/terms-of-use" className="hover:underline">
            Terms of Use
          </Link>
          <Link href="/modern-slavery-act-statement" className="hover:underline">
            Modern Slavery Act Statement
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
