import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FaBars } from 'react-icons/fa6'
import NavButtons from '../utils/NavButtons'

export default function Nav() {
  return (
    <div className='flex justify-between w-full p-10'>
        <Image
          src='/images/LogoDark.png'
          alt='Logo'
          width={140}
          height={140}
        />
     <Sheet>
      <SheetTrigger asChild>
        <Button className='h-14 w-14 hover:text-black text-3xl cursor-pointer' variant="menu"><FaBars /></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>
          </SheetDescription>
        </SheetHeader>
       <div className="h-full w-full flex flex-col justify-center text-4xl text-[#332E4D] space-y-5 pl-14">
    <NavButtons tx="OUR WORK" iconSize='text-2xl' />
    <div className="w-4/5 border-t border-[#332E4D]/30" />
    <NavButtons tx="ABOUT US" iconSize='text-2xl' />
    <div className="w-4/5 border-t border-[#332E4D]/30" />
    <NavButtons tx="JOIN US" iconSize='text-2xl' />
    <div className="w-4/5 border-t border-[#332E4D]/30" />
    <NavButtons tx="BLOG" iconSize='text-2xl' />
  </div>
      </SheetContent>
    </Sheet>
    </div>
  )
}
