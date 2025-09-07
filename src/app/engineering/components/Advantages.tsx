import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AdvantagesProps {
  activeProgram: "B.Tech" | "M.Tech"
}

export default function Advantages({ activeProgram }: AdvantagesProps) {
  const advantages = {
    "B.Tech": [
        {
            title: "Wide Range of Specializations",
            description: "B.Tech offers diverse specializations like Computer Science, Mechanical, Civil, Electrical, and more. This allows students to choose a field that aligns with their interests and career goals. Specializations cater to various industries, ensuring vast career opportunities."
        },
        {
            title: "High Demand in the Job Market",
            description: "Engineering graduates are in high demand across multiple industries, including IT, manufacturing, construction, and automotive. Companies actively seek skilled engineers for roles in design, development, and project management. The degree provides strong employability prospects."
        },
        {
            title: "Opportunities for Innovation & Research",
            description: "B.Tech students engage in hands-on projects, research work, and internships that foster innovation. They can contribute to technological advancements in AI, robotics, renewable energy, and more. Engineering education nurtures problem-solving and critical-thinking skills."
        },
        {
            title: "Higher Studies & Career Growth",
            description: "Graduates can pursue M.Tech, MBA, or certifications in specialized fields for career advancement. Higher studies open doors to roles in research, management, and academia. Many engineers also explore opportunities in entrepreneurship and startups."
        }
    ],
    "M.Tech": [
        {
            title: "Advanced Technical Knowledge",
            description: "M.Tech provides in-depth expertise in specialized engineering fields like AI, cybersecurity, VLSI, and structural engineering. This advanced knowledge makes graduates highly valuable in research and development. It also strengthens problem-solving abilities for complex engineering challenges."
        },
        {
            title: "Better Career Prospects & Salaries",
            description: "M.Tech graduates have access to high-paying jobs in multinational companies, research organizations, and government sectors. Many secure senior roles in engineering, project management, and consultancy. The degree enhances career stability and long-term growth."
        },
        {
            title: "Opportunities in Research & Development",
            description: "M.Tech graduates play a crucial role in cutting-edge research and technological innovations. They contribute to advancements in automation, nanotechnology, aerospace, and more. Many work in R&D labs, improving existing technologies or developing new ones."
        },
        {
            title: "Pathway to PhD & Academia",
            description: "Graduates can pursue a PhD for careers in academia, teaching, and research. Many universities and research institutions prefer M.Tech graduates for faculty and scientist roles. This path allows professionals to contribute to technological education and future innovations."
        }
    ]
}


  return (
    <Card className="mb-12">
      <CardHeader>
        <CardTitle className="text-2xl font-serif">Advantages of Getting a {activeProgram} in Engineering</CardTitle>
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