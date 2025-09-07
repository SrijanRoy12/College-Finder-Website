import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface KnowMoreProps {
  activeProgram: "B.Pharm" | "M.Pharm"
}

export default function KnowMore({ activeProgram }: KnowMoreProps) {
  const articles = {
    "B.Pharm": [
      {
        title: "Key Subjects and Career Opportunities in B.Pharm",
        image: "/placeholder.svg?height=200&width=300",
      },
      { 
        title: "The Role of Pharmacists in Healthcare", 
        image: "/placeholder.svg?height=200&width=300" 
      },
      { 
        title: "Challenges and Future Scope of B.Pharm Graduates", 
        image: "/placeholder.svg?height=200&width=300" 
      },
    ],
    "M.Pharm": [
      { 
        title: "Specializations in M.Pharm: Choosing the Right Path", 
        image: "/placeholder.svg?height=200&width=300" 
      },
      { 
        title: "Research and Innovation in M.Pharm", 
        image: "/placeholder.svg?height=200&width=300" 
      },
      { 
        title: "Industry vs Academia: Career Options After M.Pharm", 
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

