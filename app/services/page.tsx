"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GraduationCap, Users, Heart, Scale, Building, FileText, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: GraduationCap,
    title: "Student Visa Services",
    description: "Comprehensive support for your Australian education journey",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Student Visa (Subclass 500) applications",
      "Genuine Temporary Entrant (GTE) preparation",
      "Education pathway planning",
      "Course selection guidance",
      "Financial requirement assessment",
      "Health insurance assistance",
    ],
  },
  {
    icon: Users,
    title: "Skilled Migration",
    description: "Expert guidance for skilled professionals seeking permanent residency",
    color: "from-purple-500 to-pink-500",
    features: [
      "Skills assessment coordination",
      "Points test optimization",
      "Expression of Interest (EOI) preparation",
      "State nomination applications",
      "Regional visa pathways",
      "Post-graduation visa transitions",
    ],
  },
  {
    icon: Heart,
    title: "Partner & Family Visas",
    description: "Compassionate support for family reunion applications",
    color: "from-rose-500 to-orange-500",
    features: [
      "Partner visa applications (onshore & offshore)",
      "Relationship evidence compilation",
      "Parent visa applications",
      "Child visa applications",
      "Family reunion planning",
      "Interview preparation",
    ],
  },
  {
    icon: Scale,
    title: "Visa Refusals & Appeals",
    description: "Professional representation for complex cases",
    color: "from-emerald-500 to-teal-500",
    features: [
      "Administrative Appeals Tribunal (AAT) representation",
      "Refusal analysis and strategy development",
      "Fresh application preparation",
      "Ministerial intervention requests",
      "Judicial review applications",
      "Case law research and application",
    ],
  },
  {
    icon: Building,
    title: "Business & Employer Sponsored Visas",
    description: "Solutions for businesses and sponsored employees",
    color: "from-indigo-500 to-purple-500",
    features: [
      "Temporary Skill Shortage (TSS) visas",
      "Employer Nomination Scheme (ENS)",
      "Regional Sponsored Migration Scheme (RSMS)",
      "Business Innovation and Investment visas",
      "Labour agreements",
      "Sponsorship obligations guidance",
    ],
  },
  {
    icon: FileText,
    title: "Migration Waivers",
    description: "Specialized assistance with waiver applications",
    color: "from-amber-500 to-orange-500",
    features: [
      "Health waiver applications",
      "Character waiver applications",
      "Public Interest Criterion waivers",
      "Compelling circumstances applications",
      "Medical assessments coordination",
      "Supporting documentation preparation",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-teal-700 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-float"
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
            Our{" "}
            <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">Services</span>
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive migration services tailored to your unique situation and goals
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass p-8 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-white/5 border border-white/20 h-full hover:shadow-2xl transition-all duration-300">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{service.title}</h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600"
                  >
                    <Link href="/contact">
                      Get Started <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Migration Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a personalized consultation and let our experts guide you through the process.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <Link href="/contact">Book Your Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
