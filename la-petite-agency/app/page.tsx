'use client'
import Hero from "@/components/Home/Hero";
import dynamic from "next/dynamic";

const ClientSideComp = dynamic(() => import("@/components/Home/Section1"), {
  ssr: false
});

export default function Home() {
  return (
    <>
      <div className="h-screen w-full flex justify-center ">
        <Hero />
      </div>
      <ClientSideComp />
    </>
  );
}
