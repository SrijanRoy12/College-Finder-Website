"use client"

import { useState } from "react"

interface EntranceExamsProps {
  activeProgram: "B.Pharm" | "M.Pharm"
}

export default function EntranceExams({ activeProgram }: EntranceExamsProps) {
  const exams = {
    "B.Pharm": [
        {
            name: "GPAT",
            description: "The Graduate Pharmacy Aptitude Test (GPAT) is a national-level entrance exam conducted by the National Testing Agency (NTA). It is used for admission to B.Pharm programs in various colleges across India. The exam tests candidates' knowledge of pharmaceutical sciences, including chemistry, pharmacology, and pharmaceutics."
        },
        {
            name: "WBJEE Pharmacy",
            description: "West Bengal Joint Entrance Examination (WBJEE) offers admission to B.Pharm programs in colleges across West Bengal. The exam assesses candidates in Physics, Chemistry, and Mathematics or Biology. It serves as a gateway for students aspiring to enter pharmacy education in the state."
        },
        {
            name: "MHT CET Pharmacy",
            description: "Maharashtra Common Entrance Test (MHT CET) is a state-level exam for B.Pharm admissions in Maharashtra. It evaluates students based on their knowledge of Physics, Chemistry, and Biology or Mathematics. The test is essential for securing a seat in top pharmacy colleges in the state."
        }
    ],
    "M.Pharm": [
        {
            name: "GPAT",
            description: "Graduate Pharmacy Aptitude Test (GPAT) is a national-level entrance exam for M.Pharm admissions in India. It is conducted by NTA and is used by AICTE-approved institutions. The exam tests advanced knowledge in pharmacy subjects and provides eligibility for scholarships and financial aid."
        },
        {
            name: "NIPER JEE",
            description: "National Institute of Pharmaceutical Education and Research Joint Entrance Exam (NIPER JEE) is conducted for admission to M.Pharm and PhD programs in prestigious NIPER institutes. The exam covers pharmaceutical sciences, chemistry, and biology. NIPER institutes are renowned for their research and industry collaborations."
        },
        {
            name: "APPGECET Pharmacy",
            description: "Andhra Pradesh Post Graduate Engineering Common Entrance Test (AP PGECET) is a state-level entrance exam for M.Pharm admissions in Andhra Pradesh. It assesses students in pharmaceutical sciences and related subjects. The exam is necessary for securing admission to government and private institutions in the state."
        }
    ]
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

