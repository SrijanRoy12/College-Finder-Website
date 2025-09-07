"use client"
import { useState } from "react"

const exams = [
  {
    name: "CAT",
    description:
      "Common Admission Test (CAT) is the most widely accepted MBA entrance exam in India, conducted by the IIMs for admission to top business schools.",
  },
  {
    name: "XAT",
    description:
      "Xavier Aptitude Test (XAT) is conducted by XLRI and is accepted by over 700 MBA colleges in India, including top private business schools.",
  },
  {
    name: "GMAT",
    description:
      "Graduate Management Admission Test (GMAT) is an internationally recognized exam used for admission to MBA programs worldwide, including in India.",
  },
  {
    name: "MAT",
    description:
      "Management Aptitude Test (MAT) is conducted by AIMA and is accepted by various business schools for admission to MBA and PGDM programs.",
  },
  {
    name: "NMAT",
    description:
      "NMAT by GMAC is an entrance exam for admission to NMIMS and other top MBA programs in India and abroad, offering flexibility in scheduling.",
  },
  {
    name: "SNAP",
    description:
      "Symbiosis National Aptitude Test (SNAP) is conducted for admission to Symbiosis International University’s MBA programs across multiple campuses.",
  },
]

export default function EntranceExams() {
  const [selectedExam, setSelectedExam] = useState(exams[0].name)

  return (
    <section className="my-12 p-6 border-2 border-black dark:border-white rounded-lg">
      <h2 className="text-4xl font-bold mb-6 font-serif">Top MBA Entrance Exams</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          {exams.map((exam) => (
            <button
              key={exam.name}
              onClick={() => setSelectedExam(exam.name)}
              className={`block w-full text-left p-4 mb-2 rounded-full border-2 border-black dark:border-white
                transition-all duration-300 ease-in-out
                ${
                  selectedExam === exam.name
                    ? "bg-black dark:bg-white text-white dark:text-black"
                    : "bg-transparent hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white"
                }`}
            >
              {exam.name}
            </button>
          ))}
        </div>
        <div className="md:w-2/3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2 font-verdana">{selectedExam}</h3>
          <p className="font-verdana">{exams.find((e) => e.name === selectedExam)?.description}</p>
        </div>
      </div>
    </section>
  )
}