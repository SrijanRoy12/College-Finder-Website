"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/footer"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="container mx-auto px-6 py-16">
        {/* Page Title */}
        <motion.h1
          className="text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>

        {/* Mission & Approach Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <motion.h2
              className="text-4xl font-semibold mb-4 text-primary"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Our Mission
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              At College Admission Experts, we are dedicated to guiding students through the complex college admission
              process. Our mission is to empower students to reach their full potential and gain admission to their
              dream colleges.
            </motion.p>

            <motion.h2
              className="text-4xl font-semibold mt-6 mb-4 text-primary"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Our Approach
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              We believe in a personalized approach, tailoring our services to each student&apos;s unique strengths,
              interests, and goals. Our team of experienced consultants provides expert guidance on every aspect of the
              college application process.
            </motion.p>
          </div>

          {/* Right-side Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Image
              src="/cover2.png"
              alt="College students"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* Our Team Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <h2 className="text-4xl font-semibold mb-12 text-center text-primary">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Jane Doe", role: "Founder & Lead Consultant" },
              { name: "John Smith", role: "Essay Specialist" },
              { name: "Emily Brown", role: "Admissions Strategist" },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.2 }}
              >
                <Image
                  src={`/profile.png?height=150&width=150&text=${member.name}`}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 border-4 border-primary"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Admissions Information Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground mt-20 rounded-lg shadow-lg">
          <div className="container px-6 md:px-12">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-4xl font-bold tracking-tighter">
                <u>INDIA ADMISSIONS</u>
              </h2>
              <p className="max-w-3xl text-lg md:text-xl">
                UG COURSE: MBBS | BDS | NURSING | B.Tech | B.Pharma | BBA | BCA | LLB 
                <br />
                PG COURSE: MD | MDS | M.PHARM | MBA | MCA | MCI | DCI | INC | BCI | PCI | AICTE APPROVED
              </p>
              <div className="w-full">
                <p className="text-lg">
                  ALL ADMISSIONS ARE SUBJECT TO GOVT. OF INDIA AND COLLEGE GUIDELINES
                </p>
                <div className="w-full px-4">
                  <div className="border-t border-white dark:border-gray-400 my-6 w-full"></div>
                </div>
                <p className="text-lg">
                  P.S. - Abacus, Newtown, Action Area, IIE, Kolkata - 700161, 3rd Floor, Unit-311
                  <br />
                  <span className="font-semibold">Contact No.:</span> +91 9810921650
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
