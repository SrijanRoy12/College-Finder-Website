interface OverviewProps {
  activeProgram: "BBA" | "BCA"
}

export default function Overview({ activeProgram }: OverviewProps) {
  const overviews = {
    "BBA": `BBA is a 3-year undergraduate program that provides students with a strong foundation in business administration and management principles. The course covers subjects like finance, marketing, human resources, business analytics, and entrepreneurship. Students gain practical exposure through internships, case studies, and industry projects, helping them develop problem-solving and leadership skills. The program prepares graduates for careers in corporate management, banking, consulting, and entrepreneurship. BBA also serves as a stepping stone for higher studies like MBA, offering opportunities for specialization and career advancement.`,

    "BCA": `BCA is a 3-year undergraduate program focused on computer applications, programming, and software development. The curriculum includes subjects like data structures, web development, database management, artificial intelligence, and networking. Students gain practical experience through coding projects, internships, and industry collaborations, enhancing their technical and problem-solving skills. The program prepares graduates for careers in IT companies, software development, cybersecurity, and system administration. BCA also lays the foundation for higher studies like MCA or specialized certifications in emerging technologies like cloud computing and blockchain.`,
}


  return (
    <section className="mb-12">
      <h2 className="text-3xl font-serif mb-4">Overview of {activeProgram}</h2>
      <p className="text-lg font-verdana">{overviews[activeProgram]}</p>
    </section>
  )
}

