"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/footer"
import Overview from "./components/Overview"
import Advantages from "./components/Advantages"
import TypesOfPrograms from "./components/TypesOfPrograms"
import TopColleges from "./components/TopColleges"
import EntranceExams from "./components/EntranceExams"
import KnowMore from "./components/KnowMore"
import Image from "next/image"

export default function NursingPage() {
  const [activeProgram, setActiveProgram] = useState<"B.Sc" | "M.Sc">("B.Sc")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="relative h-64 bg-black">
        <Image
            src="/medicalmain.png"
            alt="Medical background"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
        />
            <h1 className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-white text-center whitespace-pre-line">
                Nursing
                <br />
                Admissions
            </h1>
        </div>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-center space-x-4">
          <button
            onClick={() => setActiveProgram("B.Sc")}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeProgram === "B.Sc"
                ? "bg-black text-white"
                : "bg-white text-black border border-black hover:bg-gray-100"
            }`}
          >
            B.Sc Nursing
          </button>
          <button
            onClick={() => setActiveProgram("M.Sc")}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeProgram === "M.Sc"
                ? "bg-black text-white"
                : "bg-white text-black border border-black hover:bg-gray-100"
            }`}
          >
            M.Sc Nursing
          </button>
        </div>
        <Overview activeProgram={activeProgram} />
        <Advantages activeProgram={activeProgram} />
        <TypesOfPrograms activeProgram={activeProgram} />
        <TopColleges activeProgram={activeProgram} />
        <EntranceExams activeProgram={activeProgram} />
        <KnowMore activeProgram={activeProgram} />
      </main>
        <Footer />
    </div>
  )
}

