"use client"
import { useState } from "react"

const exams = [
  {
    name: "NEET",
    description: "National Eligibility cum Entrance Test is the primary entrance exam for BDS admissions in India.",
  },
  {
    name: "AIIMS",
    description: "All India Institute of Medical Sciences conducts its own entrance exam for BDS admissions.",
  },
  {
    name: "JIPMER",
    description: "Jawaharlal Institute of Postgraduate Medical Education & Research holds a separate entrance test.",
  },
  {
    name: "State CETs",
    description: "Various states conduct their own Common Entrance Tests for BDS admissions in state colleges.",
  },
]

export default function EntranceExams() {
  const [selectedExam, setSelectedExam] = useState(exams[0].name)

  return (
    <section className="my-12 p-6 border-2 border-black dark:border-white rounded-lg">
      <h2 className="text-4xl font-bold mb-6 font-serif">Top MBBS Entrance Exams</h2>
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