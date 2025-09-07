import { useState } from "react";

interface TopCollegesProps {
  activeProgram: "B.Pharm" | "M.Pharm"
}

export default function TopColleges({ activeProgram }: TopCollegesProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
    const colleges = {
      "B.Pharm": [
          { rank: 1, name: "Jamia Hamdard, New Delhi", exams: "NEET, JEE Main" },
          { rank: 2, name: "National Institute of Pharmaceutical Education and Research, Mohali", exams: "NIPER JEE" },
          { rank: 3, name: "Institute of Chemical Technology, Mumbai", exams: "MHT CET" },
          { rank: 4, name: "Manipal College of Pharmaceutical Sciences, Manipal", exams: "MET" },
          { rank: 5, name: "Birla Institute of Technology and Science, Pilani", exams: "BITSAT" },
      ],
      "M.Pharm": [
          { rank: 1, name: "National Institute of Pharmaceutical Education and Research, Mohali", exams: "NIPER JEE" },
          { rank: 2, name: "Jamia Hamdard, New Delhi", exams: "GPAT" },
          { rank: 3, name: "Institute of Chemical Technology, Mumbai", exams: "GATE, GPAT" },
          { rank: 4, name: "Manipal College of Pharmaceutical Sciences, Manipal", exams: "MET" },
          { rank: 5, name: "JSS College of Pharmacy, Mysore", exams: "GPAT" },
      ]
  };

  return (
    <section className="my-12 p-6 border-2 border-black dark:border-white rounded-lg">
      <h2 className="text-4xl font-bold mb-6 font-serif">Top 5 {activeProgram} Colleges in India</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <p className="font-verdana text-lg">
            These top colleges offer exceptional {activeProgram} Pharmacy programs, featuring cutting-edge facilities, experienced faculty, and strong industry partnerships. Admission to these institutions is highly competitive and depends on entrance exams and academic merit.
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

