"use client"

import { useState } from "react"

interface TypesOfProgramsProps {
  activeProgram: "B.Tech" | "M.Tech"
}

export default function TypesOfPrograms({ activeProgram }: TypesOfProgramsProps) {
  const programs = {
    "B.Tech": [
        {
            name: "Computer Science and Engineering (CSE)",
            description: "Focuses on programming, algorithms, data structures, and software development. Students learn about artificial intelligence, cybersecurity, and cloud computing. This specialization is crucial for developing innovative software solutions and advancing technology."
        },
        {
            name: "Mechanical Engineering",
            description: "Covers the principles of mechanics, thermodynamics, and materials science. Students explore the design and manufacturing of machines, engines, and industrial systems. This field plays a key role in automotive, aerospace, and manufacturing industries."
        },
        {
            name: "Electrical and Electronics Engineering (EEE)",
            description: "Deals with the study of electrical circuits, power systems, and electronic devices. Students learn about renewable energy, embedded systems, and automation. This specialization is essential for advancements in power distribution and electronics."
        },
        {
            name: "Civil Engineering",
            description: "Focuses on infrastructure development, construction technology, and structural design. Students learn about urban planning, environmental engineering, and transportation systems. This specialization plays a vital role in sustainable infrastructure and urban development."
        },
        {
            name: "Information Technology (IT)",
            description: "Covers software development, networking, database management, and cybersecurity. Students explore topics like cloud computing, blockchain, and web development. This field is crucial for digital transformation and business automation."
        }
    ],
    "M.Tech": [
        {
            name: "Artificial Intelligence and Machine Learning",
            description: "Focuses on AI algorithms, deep learning, and data science applications. Students explore neural networks, natural language processing, and robotics. This specialization is driving innovation in automation, healthcare, and financial sectors."
        },
        {
            name: "VLSI Design and Embedded Systems",
            description: "Involves the design of integrated circuits, microprocessors, and embedded software. Students learn about semiconductor technology and system-on-chip (SoC) development. This specialization is critical for the electronics and semiconductor industries."
        },
        {
            name: "Structural Engineering",
            description: "Covers the analysis and design of buildings, bridges, and infrastructure projects. Students explore material mechanics, earthquake-resistant structures, and construction technology. This specialization is essential for civil engineering and large-scale construction projects."
        },
        {
            name: "Thermal Engineering",
            description: "Focuses on heat transfer, thermodynamics, and energy systems. Students study power plants, HVAC systems, and renewable energy sources. This specialization is crucial for energy efficiency and sustainability in engineering."
        },
        {
            name: "Cybersecurity and Forensics",
            description: "Deals with network security, ethical hacking, and digital forensics. Students learn about cryptography, malware analysis, and risk management. This specialization is vital for protecting digital infrastructure and combating cyber threats."
        }
    ]
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

