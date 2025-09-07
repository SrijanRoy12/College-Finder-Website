"use client";
import { useState } from "react";
import Link from "next/link";

export default function TopColleges() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const colleges = [
    { rank: 1, name: "Indian Institute of Management Ahmedabad (IIMA)", exams: "CAT" },
    { rank: 2, name: "Indian Institute of Management Bangalore (IIMB)", exams: "CAT" },
    { rank: 3, name: "Indian Institute of Management Calcutta (IIMC)", exams: "CAT" },
    { rank: 4, name: "Indian School of Business (ISB), Hyderabad", exams: "GMAT, GRE" },
    { rank: 5, name: "Indian Institute of Management Lucknow (IIML)", exams: "CAT" },
]

  return (
    <section className="my-12 p-6 border-2 border-black dark:border-white rounded-lg">
      <h2 className="text-4xl font-bold mb-6 font-serif">Top 5 MBA Colleges in India</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <p className="font-verdana text-lg">
            These top business schools in India offer excellent MBA programs and are renowned for their high-quality education, industry-oriented curriculum, and strong corporate connections.
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
              {colleges.map((college, index) => (
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
                    <Link href={`/college/${college.rank}`}>
                      <span className="cursor-pointer hover:text-blue-500 font-bold transition-all duration-300">
                        {college.name}
                      </span>
                    </Link>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 font-verdana">{college.exams}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
