"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  GraduationCap,
  Users,
  Heart,
  Building,
  Plane,
  UserCheck,
  ChevronDown,
  ChevronUp,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const visaCategories = [
  {
    id: "student",
    icon: GraduationCap,
    title: "Student Visas",
    description: "Study in Australia with comprehensive visa support",
    color: "from-brand-blue to-brand-orange",
    visas: [
      {
        subclass: "500",
        name: "Student Visa",
        description: "For international students studying full-time in Australia",
        requirements: [
          "Enrollment in a registered course",
          "Genuine Student (GS)",
          "English language proficiency",
          "Financial capacity",
          "Health and character requirements",
          "Overseas Student Health Cover (OSHC)",
        ],
        processingTime: "1-4 months",
        cost: "From AUD $650",
      },
      {
        subclass: "590",
        name: "Student Guardian Visa",
        description: "For guardians of international students under 18",
        requirements: [
          "Relationship to student under 18",
          "Financial capacity to support yourself and student",
          "Health insurance",
          "Character requirements",
          "No other dependents under 6 years",
        ],
        processingTime: "2-4 months",
        cost: "From AUD $650",
      },
    ],
  },
  {
    id: "graduate",
    icon: UserCheck,
    title: "Graduate Visas",
    description: "Work in Australia after completing your studies",
    color: "from-brand-orange to-yellow-500",
    visas: [
      {
        subclass: "485",
        name: "Temporary Graduate Visa",
        description: "Allows recent graduates to work in Australia temporarily",
        requirements: [
          "Recently completed Australian qualification",
          "Under 35/50 years of age",
          "English language proficiency",
          "Health and character requirements",
          "Adequate health insurance",
        ],
        processingTime: "4-6 months",
        cost: "From AUD $1,730",
      },
    ],
  },
  {
    id: "skilled",
    icon: Users,
    title: "Skilled Migration",
    description: "Permanent residency for skilled professionals",
    color: "from-purple-500 to-brand-blue",
    visas: [
      {
        subclass: "189",
        name: "Skilled Independent Visa",
        description: "Points-based permanent visa for skilled workers",
        requirements: [
          "Occupation on relevant skilled occupation list",
          "Positive skills assessment",
          "Competent English (IELTS 6.0 equivalent)",
          "Under 45 years of age",
          "Meet points test (minimum 65 points)",
          "Health and character requirements",
        ],
        processingTime: "8-12 months",
        cost: "From AUD $4,640",
      },
      {
        subclass: "190",
        name: "Skilled Nominated Visa",
        description: "State/territory nominated permanent visa",
        requirements: [
          "State/territory nomination",
          "Occupation on relevant skilled occupation list",
          "Positive skills assessment",
          "Competent English",
          "Under 45 years of age",
          "Meet points test (minimum 65 points)",
        ],
        processingTime: "8-12 months",
        cost: "From AUD $4,640",
      },
      {
        subclass: "491",
        name: "Skilled Work Regional Visa",
        description: "Regional provisional visa leading to permanent residency",
        requirements: [
          "State/territory or family nomination",
          "Occupation on relevant skilled occupation list",
          "Positive skills assessment",
          "Competent English",
          "Under 45 years of age",
          "Meet points test (minimum 65 points)",
        ],
        processingTime: "8-11 months",
        cost: "From AUD $4,640",
      },
    ],
  },
  {
    id: "employer",
    icon: Building,
    title: "Employer Sponsored",
    description: "Work visas sponsored by Australian employers",
    color: "from-emerald-500 to-brand-blue",
    visas: [
      {
        subclass: "482",
        name: "Temporary Skill In Demand (SID)",
        description: "Temporary work visa for skilled workers",
        requirements: [
          "Employer sponsorship",
          "Nomination by employer",
          "Relevant skills and qualifications",
          "English language proficiency",
          "Health and character requirements",
          "Genuine temporary entrant requirement",
        ],
        processingTime: "2-4 months",
        cost: "From AUD $1,330",
      },
      {
        subclass: "186",
        name: "Employer Nomination Scheme",
        description: "Permanent employer-sponsored visa",
        requirements: [
          "Employer nomination",
          "Relevant skills and experience",
          "Under 45 years of age (unless exempt)",
          "Competent English",
          "Health and character requirements",
          "Meet skill level requirements",
        ],
        processingTime: "8-12 months",
        cost: "From AUD $4,640",
      },
      {
        subclass: "407",
        name: "Training Visa",
        description: "For individuals undertaking workplace-based training to enhance skills in their nominated occupation in Australia",
        requirements: [
          "Sponsored by an approved Australian organisation",
          "Genuine intention to undertake the training",
          "Training must be directly related to the nominated occupation",
          "Meet health and character requirements",
          "Provide evidence of an approved training plan and training provider",
          "Must have sufficient funds for stay and living expenses",
        ],
        processingTime: "3–6 months",
        cost: "From AUD $405",
      },
    ],
  },
  {
    id: "partner",
    icon: Heart,
    title: "Partner & Family",
    description: "Visas for partners and family members",
    color: "from-rose-500 to-brand-orange",
    visas: [
      {
        subclass: "820/801",
        name: "Partner Visa (Onshore)",
        description: "For partners of Australian citizens/residents in Australia",
        requirements: [
          "Genuine and continuing relationship",
          "Partner is Australian citizen/resident",
          "Meet health and character requirements",
          "Relationship evidence across 4 key areas",
          "Financial support evidence",
        ],
        processingTime: "20-29 months",
        cost: "From AUD $8,850",
      },
      {
        subclass: "309/100",
        name: "Partner Visa (Offshore)",
        description: "For partners of Australian citizens/residents outside Australia",
        requirements: [
          "Genuine and continuing relationship",
          "Partner is Australian citizen/resident",
          "Meet health and character requirements",
          "Relationship evidence",
          "Outside Australia when applying",
        ],
        processingTime: "12-29 months",
        cost: "From AUD $8,850",
      },
      {
        subclass: "300",
        name: "Prospective Marriage Visa (Offshore)",
        description: "For fiancés/fiancées of Australian citizens, Australian permanent residents, or eligible New Zealand citizens outside Australia",
        requirements: [
          "Genuine intention to marry the sponsor within 9 months",
          "Sponsor is an Australian citizen, permanent resident, or eligible New Zealand citizen",
          "Meet health and character requirements",
          "Provide evidence of a genuine and ongoing relationship",
          "Provide financial and personal commitment evidence",
          "Must be outside Australia at the time of application and visa grant",
        ],
        processingTime: "12–20 months",
        cost: "From AUD $8,850",
      },
      {
        subclass: "103",
        name: "Parent Visa (Offshore)",
        description: "For parents of Australian citizens, permanent residents, or eligible New Zealand citizens outside Australia",
        requirements: [
          "Applicant must be outside Australia at the time of application",
          "Child is an Australian citizen, permanent resident, or eligible New Zealand citizen",
          "Meet health and character requirements",
          "Must meet the balance-of-family requirement (majority of children living in Australia)",
          "Provide financial support and parent–child relationship evidence",
          "Visa processing times can be very long",
        ],
        processingTime: "Very long (often 20+ years)",
        cost: "From AUD $6,625",
      },
      {
        subclass: "804",
        name: "Aged Parent Visa (Onshore)",
        description: "For aged parents of Australian citizens, permanent residents, or eligible New Zealand citizens who are in Australia",
        requirements: [
          "Applicant must be inside Australia at the time of application",
          "Child is an Australian citizen, permanent resident, or eligible New Zealand citizen",
          "Meet health and character requirements",
          "Must meet the balance-of-family requirement",
          "Applicant must meet the age criteria as defined by the Department of Home Affairs",
          "Provide financial support and parent–child relationship evidence",
          "Visa processing times can be very long",
        ],
        processingTime: "Very long (often 20+ years)",
        cost: "From AUD $6,625",
      },
    ],
  },
  {
    id: "visitor",
    icon: Plane,
    title: "Visitor Visas",
    description: "Tourism and short-term visit visas",
    color: "from-cyan-500 to-brand-blue",
    visas: [
      {
        subclass: "600",
        name: "Visitor Visa",
        description: "For tourism, business visits, or visiting family",
        requirements: [
          "Genuine intention to visit temporarily",
          "Sufficient funds for stay",
          "Health insurance (recommended)",
          "Character requirements",
          "Strong ties to home country",
        ],
        processingTime: "15-30 days",
        cost: "From AUD $150",
      },
    ],
  },
]

export default function VisaTypesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [expandedVisa, setExpandedVisa] = useState<string | null>(null)

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      {/* <section className="relative py-20 bg-gradient-to-br from-brand-blue to-brand-orange overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Australian{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">Visa Types</span>
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore different visa categories and find the right pathway for your Australian journey
          </motion.p>
        </div>
      </section> */}

      {/* Visa Categories */}
      <section className="py-10 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-blue dark:text-white mb-4">Visa Categories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Click on any category to explore specific visa types and requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
              >
                <div
                  className={`glass p-8 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-white/5 border  border-white/20 shadow-md h-full transition-all duration-300 hover:shadow-2xl ${
                    selectedCategory === category.id ? "ring-2 ring-brand-orange" : ""
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-brand-blue dark:text-white mb-4 group-hover:text-brand-orange transition-colors">
                    {category.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{category.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-brand-orange font-medium">
                      {category.visas.length} visa{category.visas.length > 1 ? "s" : ""} available
                    </span>
                    {selectedCategory === category.id ? (
                      <ChevronUp className="w-5 h-5 text-brand-orange" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Visa Information */}
      {selectedCategory && (
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {visaCategories
              .filter((category) => category.id === selectedCategory)
              .map((category) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-brand-blue dark:text-white mb-4">{category.title}</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                      Detailed information about each visa type
                    </p>
                  </div>

                  <div className="border rounded-xl">
                    {category.visas.map((visa, index) => (
                      <motion.div
                        key={visa.subclass}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="glass p-6 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-white/5 border border-white/20"
                      >
                        <div className="grid lg:grid-cols-3  border p-6 rounded-xl">
                          <div className="lg:col-span-2">
                            <div className="flex items-center gap-4 mb-4">
                              <span className="bg-brand-orange text-white px-3 py-1 rounded-lg text-sm font-bold">
                                Subclass {visa.subclass}
                              </span>
                              <h3 className="text-2xl font-bold text-brand-blue dark:text-white">{visa.name}</h3>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                              {visa.description}
                            </p>

                            <div>
                              <h4 className="text-lg font-semibold text-brand-blue dark:text-white mb-4">
                                Key Requirements:
                              </h4>
                              <ul className="space-y-2">
                                {visa.requirements.map((requirement, reqIndex) => (
                                  <li key={reqIndex} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">{requirement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
{/* 
                          <div className="space-y-6">
                            <div className="glass p-6 rounded-xl backdrop-blur-sm bg-brand-blue/5 border border-brand-blue/20">
                              <h4 className="font-semibold text-brand-blue dark:text-white mb-2">Processing Time</h4>
                              <p className="text-gray-600 dark:text-gray-300">{visa.processingTime}</p>
                            </div>

                            <div className="glass p-6 rounded-xl backdrop-blur-sm bg-brand-orange/5 border border-brand-orange/20">
                              <h4 className="font-semibold text-brand-blue dark:text-white mb-2">Application Cost</h4>
                              <p className="text-gray-600 dark:text-gray-300">{visa.cost}</p>
                            </div>

                            <Button
                              asChild
                              className="w-full bg-gradient-to-r from-brand-blue to-brand-orange hover:from-brand-orange hover:to-brand-blue text-white"
                            >
                              <a href="/contact">Get Expert Help</a>
                            </Button>
                          </div> */}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
          </div>
        </section>
      )}

      {/* Visa Selector Tool */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-blue dark:text-white mb-4">
              Not Sure Which Visa is Right for You?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Our expert migration agents can help you identify the best visa pathway based on your unique circumstances
              and goals.
            </p>

            <div className="glass p-8 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-white/5 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-brand-blue dark:text-white mb-6">Free Visa Assessment</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Book a consultation with our MARA-registered agents to discuss your options and create a personalized
                migration strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="flex-1 bg-brand-orange hover:bg-brand-blue text-white"
                >
                  <a href="/contact">Book Free Assessment</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="flex-1 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white bg-transparent"
                >
                  <a href="tel:+61401560785">Call Now</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
