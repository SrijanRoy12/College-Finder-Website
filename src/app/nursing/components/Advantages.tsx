import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AdvantagesProps {
  activeProgram: "B.Sc" | "M.Sc"
}

export default function Advantages({ activeProgram }: AdvantagesProps) {
  const advantages = {
    "B.Sc": [
      {
        title: "Career Opportunities",
        description: "Wide range of job opportunities in hospitals, clinics, and healthcare facilities.",
      },
      {
        title: "Global Demand",
        description: "High demand for qualified nurses worldwide, offering international career prospects.",
      },
      {
        title: "Personal Growth",
        description: "Develop empathy, communication skills, and critical thinking abilities.",
      },
      {
        title: "Specialization Options",
        description: "Opportunity to specialize in various fields of nursing after graduation.",
      },
    ],
    "M.Sc": [
      {
        title: "Advanced Practice Roles",
        description: "Qualify for advanced nursing positions such as Nurse Practitioner or Clinical Nurse Specialist.",
      },
      {
        title: "Research Opportunities",
        description: "Engage in nursing research and contribute to evidence-based practice.",
      },
      {
        title: "Leadership Positions",
        description: "Prepare for leadership and management roles in healthcare organizations.",
      },
      {
        title: "Teaching Prospects",
        description: "Opportunity to pursue a career in nursing education at colleges and universities.",
      },
    ],
  }

  return (
    <Card className="mb-12">
      <CardHeader>
        <CardTitle className="text-2xl font-serif">Advantages of Getting an {activeProgram} in Nursing</CardTitle>
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