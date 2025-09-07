"use client"

import { useTheme } from "next-themes"
import Header from "@/components/Header"
import Overview from "./components/Overview"
import Advantages from "./components/Advantages"
import TypesOfPrograms from "./components/TypesOfPrograms"
import TopColleges from "./components/TopColleges"
import EntranceExams from "./components/EntranceExams"
import KnowMore from "./components/KnowMore"
import Footer from "@/components/footer"

export default function BDSPage() {
  const {  } = useTheme()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="relative h-80 w-full bg-[url('/bpt1.png')] bg-cover bg-center text-white flex justify-center items-center">
        <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
            <div className="relative container px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-4">
                <h1 className="text-6xl font-bold mb-4 font-serif">BPT</h1>
                <h2 className="text-3xl font-light">Bachelor of Phisiotherapy</h2>
            </div>
            </div>
        </div>
      </section>
      <main className="container mx-auto px-4 py-8">
        <Overview />
        <Advantages />
        <TypesOfPrograms />
        <TopColleges />
        <EntranceExams />
        <KnowMore />
      </main>
      <Footer />
    </div>
  )
}