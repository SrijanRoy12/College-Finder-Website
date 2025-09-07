import Image from "next/image"

export default function KnowMore() {
  const articles = [
    {
      title: "The Journey of an MBBS Student: From Classroom to Clinic",
      link: "#",
      image: "/article1.png",
    },
    {
      title: "MBBS Abroad: Opportunities and Challenges",
      link: "#",
      image: "/article2.png",
    },
    {
      title: "Specializations After MBBS: Choosing the Right Path",
      link: "#",
      image: "/article3.png",
    },
    {
      title: "The Role of Technology in Modern Medical Education",
      link: "#",
      image: "/article4.png",
    },
    {
      title: "Balancing Academics and Mental Health in Medical School",
      link: "#",
      image: "/article5.png",
    },
  ]

  return (
    <section className="my-12">
      <h2 className="text-4xl font-bold mb-6 font-serif">Know More</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <a href={article.link} className="text-lg font-bold hover:underline font-verdana">
                {article.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

