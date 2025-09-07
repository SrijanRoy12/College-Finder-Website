"use client"
import { useState } from "react"

const programs = [
  {
    name: "General MBA",
    description: "A two-year postgraduate program that provides a broad understanding of business management, leadership, and strategic decision-making. It covers core subjects such as Marketing, Finance, Operations, Human Resources, and Business Analytics. This program is ideal for individuals seeking managerial roles across various industries.",
  },
  {
    name: "Executive MBA (EMBA)",
    description: "Designed for working professionals with significant experience, this program focuses on leadership development and advanced business strategies. It is typically shorter in duration and offers flexible schedules such as weekend or online classes. EMBA programs help professionals transition into senior management or executive roles.",
  },
  {
    name: "MBA in Finance",
    description: "A specialized MBA that focuses on financial management, investment strategies, risk assessment, and corporate finance. It prepares students for careers in banking, investment firms, financial consulting, and corporate finance departments. The curriculum includes subjects like Financial Modeling, Mergers & Acquisitions, and Portfolio Management.",
  },
  {
    name: "MBA in Marketing",
    description: "This specialization emphasizes branding, market research, digital marketing, and consumer behavior analysis. It prepares students for careers in advertising, sales, product management, and brand management. The curriculum includes courses on Market Strategy, Consumer Insights, and Digital Advertising.",
  },
  {
    name: "MBA in Human Resource Management",
    description: "Focuses on workforce management, talent acquisition, employee engagement, and organizational development. It prepares students for HR roles such as HR Manager, Talent Acquisition Specialist, and Training & Development Manager. Key subjects include Organizational Behavior, Labor Laws, and Performance Management.",
  },
  {
    name: "MBA in Business Analytics",
    description: "Combines data analytics, statistical modeling, and business intelligence to drive data-driven decision-making. It prepares students for roles in analytics, consulting, and business strategy. Key courses include Data Visualization, Predictive Analytics, and Machine Learning for Business.",
  },
  {
    name: "MBA in Healthcare Management",
    description: "Designed for professionals looking to enter the healthcare industry, this specialization covers hospital administration, healthcare policy, and medical supply chain management. It prepares students for roles in hospitals, pharmaceuticals, and healthcare consulting. Key subjects include Healthcare Operations, Medical Ethics, and Health Informatics.",
  },
]

export default function TypesOfPrograms() {
  const [selectedProgram, setSelectedProgram] = useState(programs[0].name)

  return (
    <section className="my-12 p-6 border-2 border-black dark:border-white rounded-lg">
      <h2 className="text-4xl font-bold mb-6 font-serif">Types of MBA Programs</h2>
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
