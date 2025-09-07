import Link from 'next/link';
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProgramCardProps {
  title: string;
  image: string;
  description: string;
  link?: string; // link is optional
}

export default function ProgramCard({ title, image, description, link = '/' }: ProgramCardProps) {  // Default link to '/' if not provided
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/mbbs.png"} // Fallback to MBBS image if image is not provided
          alt={`${title} program`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-600 text-center mb-4">{description}</p>
        <div className="text-center">
          {/* Correct usage of Link without <a> tag */}
          <Link href={link}>
            <Button
              variant="outline"
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-primary hover:text-primary-foreground"
            >
              Know More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
