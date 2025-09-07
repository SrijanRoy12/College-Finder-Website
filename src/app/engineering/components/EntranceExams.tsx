"use client"

import { useState } from "react"

interface EntranceExamsProps {
  activeProgram: "B.Tech" | "M.Tech"
}

export default function EntranceExams({ activeProgram }: EntranceExamsProps) {
  const exams = {
    "B.Tech": [
        {
            name: "JEE Main",
            description: "The Joint Entrance Examination (JEE) Main is a national-level entrance exam conducted by the National Testing Agency (NTA). It is the primary gateway for admission to NITs, IIITs, and other centrally funded technical institutions. The exam assesses candidates in Physics, Chemistry, and Mathematics. JEE Main also serves as a qualifying exam for JEE Advanced, which is required for admission to IITs."
        },
        {
            name: "JEE Advanced",
            description: "JEE Advanced is the second stage of the JEE examination process and is conducted by one of the IITs under the guidance of the Joint Admission Board (JAB). It is mandatory for admission into the prestigious Indian Institutes of Technology (IITs). The exam tests students on their deep understanding of Physics, Chemistry, and Mathematics, with a strong emphasis on problem-solving and application-based learning."
        },
        {
            name: "BITSAT",
            description: "The Birla Institute of Technology and Science Admission Test (BITSAT) is an online entrance exam conducted by BITS Pilani for admission to its B.Tech programs across Pilani, Goa, and Hyderabad campuses. The test evaluates candidates in Physics, Chemistry, Mathematics, English, and Logical Reasoning. BITSAT is known for its unique question pattern and emphasis on speed and accuracy."
        },
        {
            name: "WBJEE",
            description: "The West Bengal Joint Entrance Examination (WBJEE) is a state-level entrance exam conducted for admission to B.Tech programs in colleges across West Bengal. It tests candidates on Physics, Chemistry, and Mathematics. WBJEE is an essential examination for students seeking admission to engineering institutions in the state."
        },
        {
            name: "MHT CET",
            description: "Maharashtra Common Entrance Test (MHT CET) is a state-level engineering entrance exam conducted by the Maharashtra government. It is used for admission to B.Tech programs in government and private colleges across the state. The exam assesses candidates in Physics, Chemistry, and Mathematics (PCM) and is known for its syllabus similarity with the Maharashtra State Board curriculum."
        },
        {
            name: "VITEEE",
            description: "The Vellore Institute of Technology Engineering Entrance Examination (VITEEE) is an online exam conducted by VIT University for admission to its B.Tech programs. The test covers subjects like Mathematics, Physics, Chemistry, English, and Aptitude. VITEEE is known for its adaptive test pattern and widespread acceptance across VIT campuses."
        }
    ],
    "M.Tech": [
        {
            name: "GATE",
            description: "The Graduate Aptitude Test in Engineering (GATE) is a national-level entrance exam jointly conducted by IISc Bangalore and the IITs. It is the most widely accepted exam for admission to M.Tech programs in IITs, NITs, and other prestigious engineering institutions. GATE scores are also used for PSU recruitments. The exam assesses candidates' in-depth knowledge of their undergraduate engineering subjects."
        },
        {
            name: "TANCET",
            description: "The Tamil Nadu Common Entrance Test (TANCET) is conducted by Anna University for admission to M.Tech programs in Tamil Nadu colleges. The exam evaluates students' proficiency in engineering mathematics, technical knowledge, and analytical skills. TANCET is widely accepted by state universities and private institutions in Tamil Nadu."
        },
        {
            name: "AP PGECET",
            description: "Andhra Pradesh Post Graduate Engineering Common Entrance Test (AP PGECET) is a state-level entrance exam for admission to M.Tech programs in Andhra Pradesh. The exam is conducted by Andhra University and tests candidates on engineering subjects, mathematics, and logical reasoning. It is an alternative for students who do not appear for GATE but wish to pursue postgraduate engineering studies in the state."
        },
        {
            name: "TS PGECET",
            description: "Telangana State Post Graduate Engineering Common Entrance Test (TS PGECET) is conducted by Osmania University for admission to M.Tech programs in Telangana. The test covers core engineering concepts and problem-solving abilities. It provides opportunities for students to enter top engineering colleges in Telangana without GATE scores."
        },
        {
            name: "CUET PG (Engineering)",
            description: "The Common University Entrance Test for Postgraduate (CUET PG) is conducted by NTA and is accepted by several central universities for admission to M.Tech programs. The exam evaluates technical knowledge, logical reasoning, and analytical skills. CUET PG provides an alternative pathway for students aiming for M.Tech in central universities."
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

