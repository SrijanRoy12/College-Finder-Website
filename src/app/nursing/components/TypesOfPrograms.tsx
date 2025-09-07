"use client"

import { useState } from "react"

interface TypesOfProgramsProps {
  activeProgram: "B.Sc" | "M.Sc"
}

export default function TypesOfPrograms({ activeProgram }: TypesOfProgramsProps) {
  const programs = {
    "B.Sc": [
      {
        name: "General Nursing",
        description: "Covers a broad range of nursing skills and knowledge applicable to various healthcare settings.",
      },
      {
        name: "Community Health Nursing",
        description: "Focuses on providing healthcare services to communities and promoting public health.",
      },
      {
        name: "Mental Health Nursing",
        description: "Specializes in caring for patients with mental health disorders and psychological issues.",
      },
    ],
    "M.Sc": [
      {
        name: "Medical-Surgical Nursing",
        description: "Advanced study of adult health nursing, focusing on complex medical and surgical conditions.",
      },
      {
        name: "Pediatric Nursing",
        description: "Specializes in the care of children from infancy through adolescence.",
      },
      {
        name: "Psychiatric Nursing",
        description:
          "Advanced study of mental health nursing, including therapeutic interventions and management of psychiatric disorders.",
      },
    ],
  }

  const [selectedProgram, setSelectedProgram] = useState(programs[activeProgram][0].name)

  return (
    <section className="my-12 p-6 border-2 border-black dark:border-white rounded-lg">
      <h2 className="text-4xl font-bold mb-6 font-serif">Types of {activeProgram} Programs</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          {programs[activeProgram].map((program) => (
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
          <p className="font-verdana">{programs[activeProgram].find((p) => p.name === selectedProgram)?.description}</p>
        </div>
      </div>
    </section>
  )
}

