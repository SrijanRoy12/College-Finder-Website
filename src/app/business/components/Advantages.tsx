import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AdvantagesProps {
  activeProgram: "BBA" | "BCA"
}

export default function Advantages({ activeProgram }: AdvantagesProps) {
  const advantages = {
    "BBA": [
        {
            title: "Strong Business Foundation",
            description: "BBA provides fundamental knowledge in business, management, finance, and marketing. It prepares students for leadership roles by developing strategic thinking and problem-solving skills. The program lays the groundwork for further studies like an MBA or professional certifications."
        },
        {
            title: "Diverse Career Opportunities",
            description: "Graduates can pursue careers in banking, consulting, marketing, HR, and entrepreneurship. The degree opens doors to roles such as business analyst, marketing executive, and financial consultant. Its broad curriculum ensures adaptability across multiple industries."
        },
        {
            title: "Entrepreneurial Skills Development",
            description: "BBA helps students develop entrepreneurial skills such as business planning, risk assessment, and financial management. Many graduates start their own ventures or join family businesses with enhanced business acumen. The course also provides networking opportunities with industry experts and entrepreneurs."
        },
        {
            title: "Higher Studies & Specialization",
            description: "BBA graduates can opt for an MBA or specialized master’s degrees in finance, marketing, or international business. Advanced studies enhance career prospects, leading to managerial and executive-level positions. Specializations help in securing roles in multinational corporations and government organizations."
        }
    ],
    "BCA": [
        {
            title: "High Demand in the IT Sector",
            description: "BCA graduates are sought after in the rapidly growing IT industry. They can work in software development, system administration, and IT consulting. The demand for tech professionals ensures job stability and lucrative salary packages."
        },
        {
            title: "Diverse Career Paths",
            description: "Graduates can work as software developers, data analysts, cybersecurity experts, or system administrators. The program also opens opportunities in gaming, artificial intelligence, and blockchain technology. The versatility of BCA makes it a preferred choice for tech enthusiasts."
        },
        {
            title: "Foundation for Advanced Studies",
            description: "BCA serves as a stepping stone for higher education in computer science and technology. Graduates can pursue MCA, MBA in IT, or certifications like AWS, Data Science, or Cybersecurity. Higher studies lead to better career growth and specialized expertise."
        },
        {
            title: "Opportunities in Freelancing & Startups",
            description: "BCA graduates can work independently as freelancers in web development, software engineering, and digital solutions. They can also launch startups in tech-driven businesses such as app development or cloud computing. The course equips students with the skills to create innovative digital solutions."
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