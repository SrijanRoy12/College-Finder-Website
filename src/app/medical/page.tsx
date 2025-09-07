"use client"

import Image from "next/image"
import ProgramCard from "./components/ProgramCard"
import Header from "@/components/Header"
import Footer from "@/components/footer"

export default function Home() {
  const programs = [
    {
      title: "MBBS",
      image: "/mbbs.png",
      description: "Bachelor of Medicine and Bachelor of Surgery",
      link : "/mbbs"
    },
    {
      title: "BDS",
      image: "/bds.png",
      description: "Bachelor of Dental Surgery",
      link : "/bds"
    },
    {
      title: "BPT",
      image: "/bpt.png",
      description: "Bachelor of Physiotherapy",
      link : "/bpt"
    },
    {
      title: "BHMS",
      image: "/bhms.png",
      description: "Bachelor of Homeopathic Medicine and Surgery",
      link : "/bhms"
    },
    {
      title: "BAMS",
      image: "/bams.png",
      description: "Bachelor of Ayurvedic Medicine and Surgery",
      link : "/bams"
    },
  ]

  return (
    <main className="min-h-screen bg-gray-100">
      <Header/>
      <div className="relative h-64 bg-black">
        <Image
          src="/medicalmain.png"
          alt="Medical background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-white text-center whitespace-pre-line">
          Medical
          <br />
          Admissions
          <br />
          <br />
          (UG)
        </h1>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {programs.slice(0, 3).map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {programs.slice(3).map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </div>
      <Footer/>
    </main>
  )
}

