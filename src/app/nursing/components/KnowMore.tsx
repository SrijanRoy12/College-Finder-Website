import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface KnowMoreProps {
  activeProgram: "B.Sc" | "M.Sc"
}

export default function KnowMore({ activeProgram }: KnowMoreProps) {
  const articles = {
    "B.Sc": [
      {
        title: "The Importance of Clinical Experience in B.Sc Nursing",
        image: "/placeholder.svg?height=200&width=300",
      },
      { title: "Career Paths After B.Sc Nursing", image: "/placeholder.svg?height=200&width=300" },
      { title: "Challenges and Rewards of B.Sc Nursing", image: "/placeholder.svg?height=200&width=300" },
    ],
    "M.Sc": [
      { title: "Advanced Nursing Practices: The Role of M.Sc Nurses", image: "/placeholder.svg?height=200&width=300" },
      { title: "Research Opportunities in M.Sc Nursing", image: "/placeholder.svg?height=200&width=300" },
      { title: "Leadership in Nursing: How M.Sc Prepares You", image: "/placeholder.svg?height=200&width=300" },
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

