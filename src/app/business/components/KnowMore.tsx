import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface KnowMoreProps {
  activeProgram: "BBA" | "BCA"
}

export default function KnowMore({ activeProgram }: KnowMoreProps) {
  const articles = {
    "BBA": [
        {
            title: "Top Career Opportunities After a BBA Degree",
            image: "/placeholder.svg?height=200&width=300",
        },
        { 
            title: "The Importance of Business Management Skills in Today’s Economy", 
            image: "/placeholder.svg?height=200&width=300" 
        },
        { 
            title: "BBA vs Other Management Degrees: Which One is Right for You?", 
            image: "/placeholder.svg?height=200&width=300" 
        },
    ],
    "BCA": [
        { 
            title: "Career Opportunities After a BCA Degree", 
            image: "/placeholder.svg?height=200&width=300" 
        },
        { 
            title: "The Role of Programming and Software Development in BCA", 
            image: "/placeholder.svg?height=200&width=300" 
        },
        { 
            title: "Emerging Trends in Computer Applications and IT Careers", 
            image: "/placeholder.svg?height=200&width=300" 
        },
    ],
}


  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-serif">Know More About {activeProgram} Nursing</CardTitle>
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

