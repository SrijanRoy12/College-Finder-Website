export default function Advantages() {
  const advantages = [
    {
      title: "Career Advancement Opportunities",
      description: "An MBA enhances leadership skills and opens doors to managerial and executive positions across industries.",
    },
    {
      title: "High Salary Potential",
      description: "MBA graduates often receive higher salaries compared to non-MBA professionals, making it a lucrative career choice.",
    },
    {
      title: "Diverse Career Options",
      description: "An MBA allows professionals to work in various fields such as finance, marketing, operations, human resources, and entrepreneurship.",
    },
    {
      title: "Entrepreneurial Skills Development",
      description: "MBA programs provide essential business knowledge and networking opportunities for aspiring entrepreneurs.",
    },
    {
      title: "Global Networking Opportunities",
      description: "Students connect with industry leaders, alumni, and peers, building strong professional networks worldwide.",
    },
    {
      title: "Industry-Relevant Knowledge",
      description: "MBA programs incorporate real-world case studies and market trends to prepare students for dynamic business environments.",
    },
  ]  
  
    return (
      <section className="my-12">
        <h2 className="text-4xl font-bold mb-6 font-serif">Advantages of Getting an MBA</h2>
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
  
  