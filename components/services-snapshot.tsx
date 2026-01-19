"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { GraduationCap, Users, Heart, Scale, Building, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: GraduationCap,
    title: "Student Visa Guidance",
    description: "Complete support for student visa applications, GTE preparation, and education pathway planning.",
    color: "from-brand-blue to-brand-orange",
  },
  {
    icon: Users,
    title: "Skilled Migration & Points Test",
    description: "Expert guidance on skilled visas, points assessment, and pathway optimization.",
    color: "from-brand-orange to-yellow-500",
  },
  {
    icon: Heart,
    title: "Partner/Family Visas",
    description: "Compassionate support for partner and family reunion visa applications.",
    color: "from-rose-500 to-brand-orange",
  },
  {
    icon: Scale,
    title: "Visa Refusals & AAT Appeals",
    description: "Professional representation for visa refusals and Administrative Appeals Tribunal cases.",
    color: "from-emerald-500 to-brand-blue",
  },
  {
    icon: FileText,
    title: "Health / Character Waiver Applications",
    description: "Specialized assistance with health and character waiver applications.",
    color: "from-brand-blue to-purple-500",
  },
  {
    icon: Building,
    title: "Employer Sponsorship & Regional Visas",
    description: "Business visa solutions and regional migration opportunities.",
    color: "from-amber-500 to-brand-orange",
  },
]

export function ServicesSnapshot() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-brand-blue dark:text-white mb-4">Our Services Snapshot</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive migration services tailored to your unique situation and goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="glass p-8 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-white/5 border border-white/20 h-full transition-all duration-300 hover:shadow-2xl">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-brand-blue dark:text-white mb-4 group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white bg-transparent"
                  >
                    <Link href="/services">Learn More</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-brand-blue to-brand-orange hover:from-brand-orange hover:to-brand-blue px-8 py-4"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
