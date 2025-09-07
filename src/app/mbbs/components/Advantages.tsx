export default function Advantages() {
    const advantages = [
      {
        title: "Respected and noble profession",
        description: "Doctors are highly regarded in society for their commitment to saving lives and improving health.",
      },
      {
        title: "Wide range of career opportunities",
        description:
          "MBBS graduates can choose from various specializations or pursue careers in research, public health, or medical administration.",
      },
      {
        title: "Job security and stability",
        description:
          "The constant demand for healthcare professionals ensures a stable career with numerous job prospects.",
      },
      {
        title: "Opportunity to make a positive impact",
        description:
          "As a doctor, you have the power to significantly improve people's lives and contribute to community health.",
      },
      {
        title: "Continuous learning and growth",
        description:
          "The medical field is ever-evolving, offering constant opportunities for professional development and learning.",
      },
      {
        title: "Global career prospects",
        description:
          "An MBBS degree opens doors to international career opportunities and the chance to work in diverse healthcare systems.",
      },
    ]
  
    return (
      <section className="my-12">
        <h2 className="text-4xl font-bold mb-6 font-serif">Advantages of Getting an MBBS</h2>
        <div className="space-y-6">
          {advantages.map((advantage, index) => (
            <div key={index} className="font-verdana">
              <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
              <p className="text-lg">{advantage.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  