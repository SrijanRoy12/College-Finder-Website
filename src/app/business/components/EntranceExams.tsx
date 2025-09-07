"use client"

import { useState } from "react"

interface EntranceExamsProps {
  activeProgram: "BBA" | "BCA"
}

export default function EntranceExams({ activeProgram }: EntranceExamsProps) {
  const exams = {
    "BBA": [
        {
            name: "DU JAT",
            description: "Delhi University Joint Admission Test (DU JAT) is conducted for admission to BBA, BMS, and related programs in Delhi University. It evaluates candidates on quantitative ability, reasoning, general awareness, and business aptitude. The exam is highly competitive and is a key gateway for business studies at DU."
        },
        {
            name: "IPU CET BBA",
            description: "Guru Gobind Singh Indraprastha University (GGSIPU) conducts the Indraprastha University Common Entrance Test (IPU CET) for BBA admissions. The test assesses students in English language, business awareness, logical reasoning, and quantitative aptitude. It is a popular entrance exam for BBA aspirants in Delhi NCR."
        },
        {
            name: "NPAT",
            description: "NMIMS Programs After Twelfth (NPAT) is an entrance exam for BBA and other undergraduate programs at NMIMS. It tests students on reasoning, proficiency in the English language, and quantitative skills. NMIMS is a reputed private university offering quality business education."
        },
        {
            name: "SET BBA",
            description: "Symbiosis Entrance Test (SET) is conducted by Symbiosis International University for BBA admissions in its affiliated institutes. The exam evaluates general English, quantitative aptitude, logical reasoning, and general awareness. It is an important test for students aspiring to study business at Symbiosis."
        }
    ],
    "BCA": [
        {
            name: "CUET",
            description: "Common University Entrance Test (CUET) is a national-level exam for admission to various undergraduate programs, including BCA, in central universities. The test evaluates candidates on logical reasoning, quantitative aptitude, and computer awareness. CUET ensures a standardized admission process for multiple universities."
        },
        {
            name: "IPU CET BCA",
            description: "Indraprastha University Common Entrance Test (IPU CET) is conducted for BCA admissions in GGSIPU-affiliated colleges. The exam tests students on mathematics, reasoning, general awareness, and IT-related aptitude. It is one of the key exams for pursuing BCA in Delhi NCR."
        },
        {
            name: "SET BCA",
            description: "Symbiosis Entrance Test (SET) is conducted by Symbiosis International University for admission to BCA programs. It assesses candidates in general English, quantitative aptitude, logical reasoning, and IT knowledge. Symbiosis is known for its quality education and industry-oriented curriculum."
        },
        {
            name: "AIMA UGAT",
            description: "AIMA Under Graduate Aptitude Test (UGAT) is a national-level entrance exam for admission to BBA, BCA, and other UG courses. The exam tests English, numerical ability, reasoning, and general knowledge. Several top universities and colleges accept UGAT scores for their BCA programs."
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

