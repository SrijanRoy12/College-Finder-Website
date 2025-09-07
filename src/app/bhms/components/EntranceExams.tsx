"use client"
import { useState } from "react"

const exams = [
  {
    "name": "NEET",
    "description": "National Eligibility cum Entrance Test, conducted nationwide for admission to medical courses, including BHMS."
  },
  {
    "name": "KEAM",
    "description": "Kerala Engineering, Architecture & Medical exam, a state-level test for admission to medical courses including BHMS in Kerala."
  },
  {
    "name": "IPU CET",
    "description": "Indraprastha University Common Entrance Test, conducted by GGSIPU for admission to BHMS and other medical courses."
  },
  {
    "name": "BVP CET",
    "description": "Bharati Vidyapeeth Common Entrance Test for admission to BHMS and other medical programs offered by Bharati Vidyapeeth University."
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