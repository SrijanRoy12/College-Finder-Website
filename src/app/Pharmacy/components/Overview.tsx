interface OverviewProps {
  activeProgram: "B.Pharm" | "M.Pharm"
}

export default function Overview({ activeProgram }: OverviewProps) {
  const overviews = {
    "B.Pharm": `B.Pharm is a 4-year undergraduate program that provides students with knowledge of pharmaceutical sciences and drug formulations. The course covers subjects like pharmacology, medicinal chemistry, pharmaceutics, and pharmacognosy. Students gain hands-on experience through laboratory work, internships, and industrial training in pharmaceutical companies. The program prepares graduates for careers in drug manufacturing, quality control, regulatory affairs, and retail pharmacy. B.Pharm also serves as a foundation for higher studies like M.Pharm or Pharm.D, leading to specialized career opportunities.`,

    "M.Pharm": `M.Pharm is a 2-year postgraduate program that provides advanced knowledge in pharmaceutical sciences, research, and drug development. The course offers specializations such as pharmaceutics, pharmacology, pharmaceutical chemistry, and pharmacognosy. Students engage in research projects, clinical trials, and industrial training to develop expertise in their chosen field. This program prepares graduates for careers in R&D, regulatory affairs, academia, and leadership roles in the pharmaceutical industry. M.Pharm also serves as a stepping stone for PhD programs and high-level research opportunities in drug discovery and formulation sciences.`
  }


  return (
    <section className="mb-12">
      <h2 className="text-3xl font-serif mb-4">Overview of {activeProgram}</h2>
      <p className="text-lg font-verdana">{overviews[activeProgram]}</p>
    </section>
  )
}

