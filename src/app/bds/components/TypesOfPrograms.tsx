"use client"
import { useState } from "react"

const programs = [
  {
    name: "General BDS",
    description: "The standard 5-year program covering all aspects of dental surgery and oral health.",
  },
  {
    name: "Integrated BDS-MDS",
    description: "A 6-year program that combines bachelor's and master's degrees for advanced specialization.",
  },
  {
    name: "BDS with Research",
    description: "Emphasizes research methodologies and scientific writing alongside regular BDS curriculum.",
  },
  {
    name: "International BDS",
    description: "Designed for international students, often including language courses and cultural orientation.",
  },
]

export default function TypesOfPrograms() {
  const [selectedProgram, setSelectedProgram] = useState(programs[0].name)

  return (
    <section className="my-12 p-6 border-2 border-black dark:border-white rounded-lg">
      <h2 className="text-4xl font-bold mb-6 font-serif">Types of BDS Programs</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          {programs.map((program) => (
            <button
                key={program.name}
                onClick={() => setSelectedProgram(program.name)}
                className={`block w-full text-left p-4 mb-2 rounded-full border-2 border-black dark:border-white
                transition-all duration-300 ease-in-out
                ${
                    selectedProgram === program.name
                    ? "bg-black dark:bg-white text-white dark:text-black"
                    : "bg-transparent hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white"
                }`}
            >
                {program.name}
            </button>          
          ))}
        </div>
        <div className="md:w-2/3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2 font-verdana">{selectedProgram}</h3>
          <p className="font-verdana">{programs.find((p) => p.name === selectedProgram)?.description}</p>
        </div>
      </div>
    </section>
  )
}
