"use client"
import { useState } from "react"

const programs = [
  {
    name: "Regular MBBS",
    description: "A 5.5-year undergraduate medical program that includes 4.5 years of academic study followed by a 1-year mandatory internship. It covers foundational subjects such as Anatomy, Physiology, Biochemistry, Pharmacology, Pathology, Microbiology, and Forensic Medicine. Clinical training begins in later years, where students gain hands-on experience in hospitals under the supervision of experienced doctors. This program is the most common route for students pursuing a career in medicine.",
  },
  {
    name: "Integrated MBBS-MD",
    description:
      "A 7-8 year accelerated program that combines the MBBS degree with a postgraduate medical specialization (MD). It is designed for students who are certain about their career path and want to streamline their education. Students complete their MBBS coursework and directly transition into a postgraduate specialization, such as Internal Medicine, Pediatrics, Surgery, or Radiology. This integrated pathway reduces the time required to achieve specialization and provides early exposure to advanced medical concepts and patient care.",
  },
  {
    name: "MBBS with Research",
    description:
      "This program blends the traditional MBBS curriculum with intensive research training, often leading to an additional degree such as MSc or PhD. It is aimed at students interested in medical research, innovation, and academic medicine. Students engage in laboratory work, clinical trials, and independent research projects alongside their medical studies. This program is ideal for those who wish to contribute to medical advancements, work in biomedical sciences, or pursue a career in academic research and teaching.",
  },
]

export default function TypesOfPrograms() {
  const [selectedProgram, setSelectedProgram] = useState(programs[0].name)

  return (
    <section className="my-12 p-6 border-2 border-black dark:border-white rounded-lg">
      <h2 className="text-4xl font-bold mb-6 font-serif">Types of MBBS Programs</h2>
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
