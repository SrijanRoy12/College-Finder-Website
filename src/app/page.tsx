"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight, ChevronLeft, GraduationCap, Stethoscope, Briefcase, CheckCircle, Calendar, Pill } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/footer"
import Slider from "react-slick"

// You need to import slick carousel styles for the carousel to work properly
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { motion } from "framer-motion"

// Define custom arrow components
interface CustomArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  currentSlide?: number;
  slideCount?: number;
}

const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick, ...props }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-primary dark:bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-primary/80 dark:hover:bg-gray-700 transition-all duration-300"
    style={{ zIndex: 10 }}
  >
    <ChevronLeft className="h-6 w-6" />
  </button>
);

const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick, ...props }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-primary dark:bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-primary/80 dark:hover:bg-gray-700 transition-all duration-300"
    style={{ zIndex: 10 }}
  >
    <ChevronRight className="h-6 w-6" />
  </button>
);


export default function HomePage() {
  const {} = useTheme()
  const [mounted, setMounted] = useState(false)

    const collegeDetails = [
    {
      image: "/college1.png",
      name: "IIT Delhi",
      description: "Hauz Khas in Delhi, India",
      link: "https://home.iitd.ac.in/"
    },
    {
      image: "/college2.png",
      name: "IIT Bombay",
      description: "Mumbai, Maharashtra, India",
      link: "https://www.iitb.ac.in/"
    },
    {
      image: "/college3.png",
      name: "IIT Madras",
      description: "Chennai, Tamil Nadu, India",
      link: "https://study.iitm.ac.in/ds/aboutIITM.html"
    },
    {
      image: "/college4.png",
      name: "IIMA Ahmedabad",
      description: "Ahmedabad, Gujarat, India",
      link: "https://www.iima.ac.in/"
    },
    {
      image: "/college5.png",
      name: "IIT Kanpur",
      description: "Kanpur, Uttar Pradesh, India",
      link: "https://www.iitk.ac.in/"
    }
  ]

  

  const services = [
    {
      icon: <GraduationCap className="h-12 w-12 text-primary" />,
      title: "Engineering Admissions",
      description: "Guidance for top engineering programs worldwide.",
      link: "/engineering",
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-primary" />,
      title: "Medical Admissions",
      description: "Expert support for medical school applications.",
      link: "/medical",
    },
    {
      icon: <Briefcase className="h-12 w-12 text-primary" />,
      title: "MBA Admissions",
      description: "Tailored assistance for top MBA programs.",
      link: "/mba",
    },
    {
      icon: <Briefcase className="h-12 w-12 text-primary" />,
      title: "Business Administration Admission",
      description: "Guidance for BBA and BCA admissions.",
      link: "/business",
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-primary" />,
      title: "Nursing Admission",
      description: "Comprehensive support for B.Sc & M.Sc Nursing programs.",
      link: "/nursing",
    },
    {
      icon: <Pill className="h-12 w-12 text-primary" />,
      title: "Pharmacy Admission",
      description: "Admission guidance for B.Pharm & M.Pharm courses.",
      link: "/Pharmacy",
    },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } }, // Mobile: Show 1 slide at a time
    ],
  }

  const timelineItems = [
    { title: "15+ Years of Experience", desc: "Proven track record of success in admissions consulting." },
    { title: "95% Success Rate", desc: "Our students consistently get into their top-choice programs." },
    { title: "Personalized Approach", desc: "Tailored strategies to highlight your unique strengths." },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/cover.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Empowering Your Future, One Admission at a Time
                </h1>
                <p className="mx-auto font-bold max-w-[700px] text-white/80 md:text-xl">
                  Expert guidance for Engineering, Medical, and MBA admissions to help you achieve your dreams.
                </p>
              </div>
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Request a Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Our Services Section with Carousel */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Our Services
            </h2>
            <Slider {...settings}>
              {services.map((service, index) => (
                <Card key={index} className="flex flex-col items-center text-center p-6 space-y-4">
                  {service.icon}
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <Link href={service.link}>
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </Card>
              ))}
            </Slider>
          </div>
        </section>

        {/* Top Colleges Section with Carousel */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Top Colleges We Work With
            </h2>
            <Slider {...settings}>
              {collegeDetails.map((college, index) => (
                <div key={index} className="p-4">
                  <Card className="flex flex-col items-center text-center p-6 space-y-4 h-full">
                    <div className="w-[300px] h-[250px] bg-white shadow-lg rounded-2xl overflow-hidden mb-4">
                      <Image
                        src={college.image}
                        alt={`${college.name} logo`}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{college.name}</h3>
                    <p className="text-muted-foreground">{college.description}</p>
                    <Link href={college.link}>
                      <Button variant="default" className="mt-4">Apply Now</Button>
                    </Link>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="w-full py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
          <div className="container px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">
              Why Choose Us?
            </h2>
            <div className="relative flex items-center overflow-x-auto no-scrollbar pb-10">
              {/* Animated Progress Line */}
              <motion.div
                className="absolute top-1/2 left-0 h-[4px] w-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-green-400 dark:to-blue-500"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5 }}
              ></motion.div>
              {/* Grid Wrapper */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-24">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Badge Icon */}
                    <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg bg-indigo-500 dark:bg-green-500 dark:shadow-green-400/40 shadow-indigo-400/40">
                      <CheckCircle className="h-7 w-7 text-white" />
                    </div>

                    {/* Card */}
                    <div className="p-6 rounded-lg shadow-xl border backdrop-blur-lg mt-6 bg-white/70 border-gray-200 shadow-indigo-500/20 dark:bg-gray-900/80 dark:border-gray-700 dark:shadow-green-400/20">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

      {/* Success Stories - Cool Carousel */}
      <section id="success-stories" className="w-full py-16 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-16">
            Success Stories
          </h2>
          <Slider {...sliderSettings} className="mx-auto max-w-4xl">
            {[
              { name: "Jane Doe", university: "Harvard University", image: "/profile.png" },
              { name: "John Smith", university: "MIT", image: "/profile.png" },
              { name: "Emily Brown", university: "Stanford University", image: "/profile.png" },
            ].map((student, index) => (
              <div key={index} className="p-6">
                <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg text-center flex flex-col items-center">
                  <Image src={student.image} alt={student.name} width={100} height={100} className="rounded-full mb-4" />
                  <h3 className="text-xl font-bold">{student.name}</h3>
                  <p className="text-sm text-muted-foreground">Admitted to {student.university}</p>
                  <p className="mt-4 text-muted-foreground">
                    &quot;MERIT NATIONS helped me achieve my dream of studying at a top university. Their guidance was invaluable!&quot;
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

        {/* Helpful Resources Section */}
        <section id="resources" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Helpful Resources
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="flex flex-col items-center text-center p-6 space-y-4">
                <Calendar className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Application Deadlines</h3>
                <p className="text-muted-foreground">Stay on top of your application deadlines.</p>
                <Button variant="outline">View Deadlines</Button>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 space-y-4">
                <GraduationCap className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Scholarship Opportunities</h3>
                <p className="text-muted-foreground">Find scholarships and funding options for your education.</p>
                <Button variant="outline">View Scholarships</Button>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 space-y-4">
                <Briefcase className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Career Counseling</h3>
                <p className="text-muted-foreground">Get expert advice on career opportunities.</p>
                <Button variant="outline">Learn More</Button>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Journey?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Let&apos;s work together to make your college admission dreams a reality.
              </p>
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Get Started Today
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
