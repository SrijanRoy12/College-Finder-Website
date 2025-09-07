interface OverviewProps {
  activeProgram: "B.Sc" | "M.Sc"
}

export default function Overview({ activeProgram }: OverviewProps) {
  const overviews = {
    "B.Sc": `B.Sc Nursing is a 4-year undergraduate program that provides students with comprehensive knowledge and skills in nursing care. This program prepares students for various roles in healthcare settings, including hospitals, clinics, and community health centers. Students learn about anatomy, physiology, pharmacology, and patient care techniques, along with practical training through clinical rotations.`,
    "M.Sc": `M.Sc Nursing is a 2-year postgraduate program that builds upon the foundation of B.Sc Nursing. This advanced program focuses on specialized areas of nursing, research methodologies, and leadership skills. Students can choose from various specializations such as Medical-Surgical Nursing, Pediatric Nursing, Psychiatric Nursing, and more. The program prepares nurses for advanced practice roles, teaching positions, and leadership in healthcare organizations.`,
  }

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-serif mb-4">Overview of {activeProgram} Nursing</h2>
      <p className="text-lg font-verdana">{overviews[activeProgram]}</p>
    </section>
  )
}

