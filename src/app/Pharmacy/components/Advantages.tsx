import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AdvantagesProps {
  activeProgram: "B.Pharm" | "M.Pharm"
}

export default function Advantages({ activeProgram }: AdvantagesProps) {
  const advantages = {
    "B.Pharm": [
        {
            title: "Diverse Career Opportunities",
            description: "B.Pharm graduates can work in pharmaceutical industries, hospitals, research labs, and regulatory agencies. They can pursue careers as pharmacists, drug inspectors, or medical representatives. The degree offers flexibility in choosing between clinical, research, and industrial roles."
        },
        {
            title: "Growing Pharmaceutical Industry",
            description: "The global pharmaceutical sector is expanding, leading to high demand for skilled pharmacy professionals. B.Pharm graduates have opportunities in drug manufacturing, marketing, and regulatory affairs. This industry growth ensures stability and lucrative career prospects."
        },
        {
            title: "Entrepreneurial Opportunities",
            description: "Graduates can start their own pharmacies, drug distribution firms, or pharmaceutical consultancy services. The field provides scope for independent business ventures in retail and wholesale drug supply. Knowledge of pharmaceuticals and regulations helps in setting up successful enterprises."
        },
        {
            title: "Higher Studies & Specialization",
            description: "B.Pharm graduates can pursue M.Pharm, Pharm.D, or MBA in Pharmaceutical Management. Specializations in fields like pharmacology, pharmaceutical chemistry, and clinical research enhance career prospects. Further studies open pathways for research, academia, and high-paying jobs."
        }
    ],
    "M.Pharm": [
        {
            title: "Expertise in Pharmaceutical Sciences",
            description: "M.Pharm provides in-depth knowledge of drug formulation, research methodologies, and quality control. Students specialize in areas like pharmacognosy, pharmaceutics, or medicinal chemistry. This expertise makes them valuable in R&D, academia, and the pharmaceutical industry."
        },
        {
            title: "High-Paying Career Options",
            description: "M.Pharm graduates often secure high-paying positions in pharmaceutical companies, hospitals, and research institutions. Roles include drug analysts, regulatory affairs officers, and clinical research associates. Their advanced qualifications make them eligible for senior-level roles with better salaries."
        },
        {
            title: "Opportunities in Research & Development",
            description: "Graduates can contribute to drug discovery, formulation research, and clinical trials. M.Pharm professionals are involved in developing innovative medicines, improving drug delivery systems, and ensuring safety. Their role is crucial in advancing pharmaceutical science and healthcare."
        },
        {
            title: "Pathway to PhD & Academia",
            description: "M.Pharm graduates can pursue PhDs to enter teaching and research careers in universities. Academic roles allow them to shape the future of pharmacy education and mentor upcoming professionals. Many choose to work in government or private research labs, contributing to medical advancements."
        }
    ]
}

  return (
    <Card className="mb-12">
      <CardHeader>
        <CardTitle className="text-2xl font-serif">Advantages of Getting an {activeProgram} in Pharmacy</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {advantages[activeProgram].map((advantage, index) => (
            <li key={index}>
              <strong className="font-bold">{advantage.title}:</strong> {advantage.description}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}