"use client"

import { useState } from "react"

interface EntranceExamsProps {
  activeProgram: "B.Sc" | "M.Sc"
}

export default function EntranceExams({ activeProgram }: EntranceExamsProps) {
  const exams = {
    "B.Sc": [
      {
        name: "NEET",
        description:
          "National Eligibility cum Entrance Test is a national level entrance exam for admission to various undergraduate medical courses, including B.Sc Nursing.",
      },
      {
        name: "AIIMS",
        description:
          "All India Institute of Medical Sciences conducts its own entrance exam for admission to B.Sc Nursing programs in AIIMS institutions.",
      },
      {
        name: "JIPMER",
        description:
          "Jawaharlal Institute of Postgraduate Medical Education & Research conducts an entrance exam for admission to its B.Sc Nursing program.",
      },
    ],
    "M.Sc": [
      {
        name: "PGIMER",
        description:
          "Postgraduate Institute of Medical Education and Research conducts an entrance exam for admission to its M.Sc Nursing program.",
      },
      {
        name: "AIIMS",
        description:
          "All India Institute of Medical Sciences conducts a separate entrance exam for admission to its M.Sc Nursing programs.",
      },
      {
        name: "JIPMER",
        description:
          "Jawaharlal Institute of Postgraduate Medical Education & Research conducts an entrance exam for admission to its M.Sc Nursing program.",
      },
    ],
  }

  const [selectedExam, setSelectedExam] = useState(exams[activeProgram][0].name)

  return (
    <section className="my-12 p-6 border-2 border-black dark:border-white rounded-lg">
      <h2 className="text-4xl font-bold mb-6 font-serif">Top {activeProgram} Entrance Exams</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          {exams[activeProgram].map((exam) => (
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
          <p className="font-verdana">{exams[activeProgram].find((e) => e.name === selectedExam)?.description}</p>
        </div>
      </div>
    </section>
  )
}

