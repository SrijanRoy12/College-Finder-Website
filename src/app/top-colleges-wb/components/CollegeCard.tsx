// merit-nation\src\app\top-colleges-wb\components\CollegeCard.tsx

import Image from "next/image";
import { motion } from "framer-motion";

interface CollegeCardProps {
  name: string;
  image: string;
  applyLink: string;
}

export default function CollegeCard({ name, image, applyLink }: CollegeCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex-shrink-0 w-64 h-96 bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg relative group"
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 group-hover:opacity-0" />
      <div className="relative z-20 h-full flex items-center justify-center p-4 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="font-semibold text-white text-center text-1xl bottom-3">{name}</h3>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
        <a
          href={applyLink}
          className="px-4 py-2 rounded-full transition-colors duration-200 
                    bg-black text-white hover:bg-gray-800 
                    dark:bg-white dark:text-black dark:hover:bg-gray-300"
        >
          Apply Now
        </a>
      </div>
    </motion.div>
  )
}
