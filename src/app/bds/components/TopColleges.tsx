"use client";
import { useState } from "react";
import Link from "next/link";

export default function TopColleges() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const colleges = [
    { rank: 1, name: "Maulana Azad Institute of Dental Sciences, New Delhi", exams: "NEET" },
    { rank: 2, name: "Saveetha Dental College and Hospital, Chennai", exams: "NEET" },
    { rank: 3, name: "Manipal College of Dental Sciences, Manipal", exams: "NEET" },
    { rank: 4, name: "Dr. D. Y. Patil Dental College and Hospital, Pune", exams: "NEET" },
    { rank: 5, name: "King George's Medical University, Lucknow", exams: "NEET" },
  ];

  return (
    <section className="my-12 p-6 border-2 border-black dark:border-white rounded-lg">
      <h2 className="text-4xl font-bold mb-6 font-serif">Top 5 BDS Colleges in India</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <p className="font-verdana text-lg">
          These top institutions offer excellent BDS programs recognized for their quality education and facilities.
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
