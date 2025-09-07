"use client";
import { useState } from "react";
import Link from "next/link";

export default function TopColleges() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const colleges = [
    {
      "rank": 1,
      "name": "Bharati Vidyapeeth University, Pune",
      "exams": "BVP CET"
    },
    {
      "rank": 2,
      "name": "Sri Sri University, Cuttack",
      "exams": "Sri Sri University Entrance Test"
    },
    {
      "rank": 3,
      "name": "Jamia Hamdard University, New Delhi",
      "exams": "Jamia Hamdard Entrance Exam"
    },
    {
      "rank": 4,
      "name": "Aligarh Muslim University (AMU), Aligarh",
      "exams": "AMU Entrance Exam"
    },
    {
      "rank": 5,
      "name": "National Institute of Ayurveda, Jaipur",
      "exams": "NEET-UG"
    }
  ];

  return (
    <section className="my-12 p-6 border-2 border-black dark:border-white rounded-lg">
      <h2 className="text-4xl font-bold mb-6 font-serif">Top 5 BAMS Colleges in India</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <p className="font-verdana text-lg">    
            These top institutions offer excellent BAMS programs, providing students with quality education in Ayurveda and promising career prospects in the field of holistic healthcare and natural healing.
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
