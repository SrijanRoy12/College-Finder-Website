interface OverviewProps {
  activeProgram: "B.Tech" | "M.Tech"
}

export default function Overview({ activeProgram }: OverviewProps) {
  const overviews = {
    "B.Tech": `B.Tech (Bachelor of Technology) is a 4-year undergraduate engineering program that equips students with technical knowledge, problem-solving skills, and hands-on experience in various engineering disciplines. The course covers fundamental subjects such as mathematics, physics, and computer programming, along with specialized topics based on the chosen branch like computer science, mechanical, civil, electrical, or electronics engineering. Students undergo practical training, internships, and projects to gain industry exposure. B.Tech graduates have diverse career opportunities in software development, manufacturing, infrastructure, research, and emerging fields like artificial intelligence and robotics. The program also serves as a foundation for higher studies such as M.Tech or MBA, enabling advanced specialization and career growth.`,

    "M.Tech": `M.Tech (Master of Technology) is a 2-year postgraduate program designed for engineering graduates to gain advanced expertise in their respective fields. The course offers specializations such as computer science, electronics, mechanical, civil, and artificial intelligence, allowing students to develop in-depth knowledge and research skills. M.Tech programs focus on innovation, problem-solving, and project-based learning, often involving collaboration with industries and research organizations. Graduates are well-prepared for careers in R&D, academia, high-tech industries, and leadership roles in engineering companies. M.Tech also provides a strong foundation for pursuing a PhD and contributing to cutting-edge research and technological advancements.`  
}

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-serif mb-4">Overview of {activeProgram}</h2>
      <p className="text-lg font-verdana">{overviews[activeProgram]}</p>
    </section>
  )
}

