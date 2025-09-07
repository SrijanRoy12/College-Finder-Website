import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface KnowMoreProps {
  activeProgram: "B.Tech" | "M.Tech"
}

export default function KnowMore({ activeProgram }: KnowMoreProps) {
  const articles = {
    "B.Tech": [
        {
            title: "Top Engineering Branches in B.Tech and Their Career Prospects",
            image: "/placeholder.svg?height=200&width=300",
        },
        { 
            title: "How to Choose the Right Engineering College for B.Tech", 
            image: "/placeholder.svg?height=200&width=300" 
        },
        { 
            title: "Emerging Technologies and Their Impact on B.Tech Graduates", 
            image: "/placeholder.svg?height=200&width=300" 
        },
        { 
            title: "Internships and Placements: Maximizing Opportunities in B.Tech", 
            image: "/placeholder.svg?height=200&width=300" 
        },
        { 
            title: "Future Trends in Engineering: What B.Tech Students Should Know", 
            image: "/placeholder.svg?height=200&width=300" 
        },
    ],
    "M.Tech": [
        { 
            title: "M.Tech Specializations: Choosing the Best Fit for Your Career", 
            image: "/placeholder.svg?height=200&width=300" 
        },
        { 
            title: "Scope of Research and Innovation in M.Tech Programs", 
            image: "/placeholder.svg?height=200&width=300" 
        },
        { 
            title: "GATE vs Other Entrance Exams: How to Get Admission in M.Tech", 
            image: "/placeholder.svg?height=200&width=300" 
        },
        { 
            title: "Career Paths After M.Tech: Industry vs Academia", 
            image: "/placeholder.svg?height=200&width=300" 
        },
        { 
            title: "The Role of Artificial Intelligence and Data Science in M.Tech", 
            image: "/placeholder.svg?height=200&width=300" 
        },
    ],
}



  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-serif">Know More About {activeProgram} Engineering</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles[activeProgram].map((article, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              width={300}
              height={200}
              className="w-full"
            />
            <CardContent>
              <a href="#" className="text-lg font-semibold hover:underline">
                {article.title}
              </a>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}

