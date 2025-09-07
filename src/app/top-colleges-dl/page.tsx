"use client"

import { useState } from "react"
import Section from "./components/Section"
import { collegeSections } from "./data/collegeSections"
import Header from "@/components/Header"
import Footer from "@/components/footer"

export default function CollegesInWestBengal() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-8 transition-colors duration-300">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Top Colleges in Delhi
        </h1>

        <div className="space-y-12">
          {collegeSections.map((section, index) => (
            <Section
              key={section.title}
              title={section.title}
              colleges={section.colleges}
              direction={index % 2 === 0 ? "left" : "right"}
              isActive={activeSection === section.title}
              onHover={() => setActiveSection(section.title)}
              onLeave={() => setActiveSection(null)}
            />
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
