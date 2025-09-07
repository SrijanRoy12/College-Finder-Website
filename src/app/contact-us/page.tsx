"use client"

import ContactForm from "./contact-form"
import Header from "@/components/Header"   
import Footer from "@/components/footer"

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-900 dark:to-indigo-950 flex flex-col lg:flex-row">
        <div className="lg:flex-1 bg-indigo-600 dark:bg-indigo-900 text-white p-8 lg:p-12 flex flex-col justify-between">
            <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">Contact Us</h1>
            <p className="text-lg lg:text-xl mb-6 lg:mb-8" style={{fontFamily: 'Verdana' , fontStyle: 'italic'}}>
                At Merit Nations, we&apos;re dedicated to guiding you toward your dream college and career—whether it&apos;s a top-tier B-School, an elite Engineering institute, a prestigious Medical college, or an MBA program that aligns with your aspirations.
            </p>
            </div>
            <div className="space-y-4">
            <p className="flex items-center text-base lg:text-lg">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 dark:stroke-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
                </svg>
                admissions@example.edu
            </p>
            <p className="flex items-center text-base lg:text-lg">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 dark:stroke-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
                </svg>
                +1 (555) 123-4567
            </p>
            </div>
        </div>
        <div className="lg:flex-1 p-8 lg:p-12 overflow-y-auto">
            <ContactForm />
        </div>
        </div>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-1l md:text-2l">
                    <u>INDIA ADMISSIONS</u>
                </h2>
                <p className="mx-auto max-w-full text-primary-foreground/80 md:text-xl">
                    UG COURSE : MBBS | BDS | NURSING | B.Tech | B.Pharma | BBA | BCA | LLB 
                    <br />
                    PG COURSE : MD | MDS | M.PHARM | MBA | MCA | MCI | DCI | INC | BCI | PCI | AICTE APPROVED
                </p>
                <div className="w-full text-primary-foreground/80">
                    <p className="mx-auto max-w-full text-primary-foreground/80 sm:text-l text-center">
                    ALL ADMISSIONS ARE SUBJECT TO GOVT. OF INDIA AND COLLEGE GUIDELINE
                    </p>

                    {/* Full-width divider */}
                    <div className="w-full px-4">
                    <div className="border-t border-white dark:border-black my-4 w-full"></div>
                    </div>

                    <p className="mx-auto max-w-full text-primary-foreground/80 md:text-xl text-center">
                    P.S. - Abacus, Newtown, Action Area, IIE, Kolkata - 700161, 3rd Floor, Unit-311
                    <br />
                    Contact No. : +91 9810921650
                    </p>
                </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
  )
}

