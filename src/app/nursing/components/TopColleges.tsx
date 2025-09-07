import { useState } from "react";

interface TopCollegesProps {
  activeProgram: "B.Sc" | "M.Sc"
}

export default function TopColleges({ activeProgram }: TopCollegesProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const colleges = {
    "B.Sc": [
      { rank: 1, name: "All India Institute of Medical Sciences, New Delhi", exams: "AIIMS Entrance Exam" },
      { rank: 2, name: "Christian Medical College, Vellore", exams: "CMC Entrance Exam" },
      { rank: 3, name: "Manipal College of Nursing, Manipal", exams: "UGET" },
      { rank: 4, name: "Kasturba Medical College, Manipal", exams: "UGET" },
      { rank: 5, name: "St. John's College of Nursing, Bangalore", exams: "College Entrance Exam" },
    ],
    "M.Sc": [
      { rank: 1, name: "All India Institute of Medical Sciences, New Delhi", exams: "AIIMS Entrance Exam" },
      { rank: 2, name: "Christian Medical College, Vellore", exams: "CMC Entrance Exam" },
      { rank: 3, name: "Manipal College of Nursing, Manipal", exams: "Manipal University Entrance Test" },
      { rank: 4, name: "Rajiv Gandhi University of Health Sciences, Karnataka", exams: "PGET" },
      { rank: 5, name: "Baba Farid University of Health Sciences, Punjab", exams: "BFUHS Entrance Exam" },
    ],
  }

  return (
    <section className="my-12 p-6 border-2 border-black dark:border-white rounded-lg">
      <h2 className="text-4xl font-bold mb-6 font-serif">Top 5 {activeProgram} Colleges in India</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <p className="font-verdana text-lg">
            These top colleges offer excellent {activeProgram} Nursing programs with state-of-the-art facilities,
            experienced faculty, and strong industry connections. Admission to these institutions is highly competitive
            and based on entrance exams and academic performance.
          </p>
        </div>
        <div className="md:w-2/3">
          <table className="w-full border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-black text-white dark:bg-black dark:text-white">
                <th className="border border-gray-300 dark:border-gray-600 p-2 font-verdana">NIRF Ranking</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2 font-verdana">College Names</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2 font-verdana">Exams Accepted</th>
              </tr>
            </thead>
            <tbody>
              {colleges[activeProgram].map((college, index) => (
                <tr
                  key={college.rank}
                  className={`even:bg-gray-50 dark:even:bg-gray-800 transition-all duration-300 ${
                    hoveredIndex !== null && hoveredIndex !== index ? "blur-sm" : "blur-none"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <td className="border border-gray-300 dark:border-gray-600 p-2 font-verdana">{college.rank}</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 font-verdana">
                      <span className="cursor-pointer hover:text-blue-500 font-bold transition-all duration-300">
                        {college.name}
                      </span>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 font-verdana">{college.exams}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

