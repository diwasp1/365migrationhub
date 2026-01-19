"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, Heart, Lightbulb, Users, Target } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Empathy",
    description: "We understand that migration is a deeply personal journey filled with hopes, dreams, and challenges.",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: Lightbulb,
    title: "Transparency",
    description: "Clear communication and honest advice are the foundations of our client relationships.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "Our MARA-registered agents bring years of experience and continuous professional development.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Commitment",
    description: "We are dedicated to achieving the best possible outcomes for every client we serve.",
    color: "from-emerald-500 to-teal-500",
  },
]

const milestones = [
  { year: "2014", event: "Founded 365 Migration Hub with a vision to provide honest migration advice" },
  { year: "2016", event: "Achieved MARA registration and expanded our service offerings" },
  { year: "2018", event: "Reached 100+ successful visa outcomes across various categories" },
  { year: "2020", event: "Adapted to digital consultations during global challenges" },
  { year: "2022", event: "Celebrated 300+ successful visa applications" },
  { year: "2024", event: "Milestone of 500+ successful visa outcomes and growing" },
]

const stats = [
  { number: "500+", label: "Successful Visas" },
  { number: "10+", label: "Years Experience" },
  { number: "50+", label: "Countries Served" },
  { number: "98%", label: "Client Satisfaction" },
]

export default function AboutPage() {
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
            About{" "}
            <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">
              365 Migration Hub
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Led by a registered migration agent with a background in law and education consultancy, supporting over 500
            successful visa outcomes.
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                365 Migration Hub is led by a registered migration agent with extensive experience in law and education
                consultancy. Our team combines legal expertise with a deep understanding of the Australian education
                system to provide comprehensive migration solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We pride ourselves on our client-first approach, ensuring that every individual receives personalized
                attention and tailored advice based on their unique circumstances and goals.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.number}</div>
                    <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass p-8 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-white/5 border border-white/20">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="365 Migration Hub Team"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Our Commitment to Excellence
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Every member of our team is committed to maintaining the highest standards of professional service
                  while providing the personal touch that makes your migration journey as smooth as possible.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve our clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="text-center group"
              >
                <div className="glass p-8 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-white/5 border border-white/20 h-full">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A timeline of our growth and commitment to serving the migration community
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <div className="glass p-6 rounded-xl backdrop-blur-sm bg-white/60 dark:bg-white/5 border border-white/20">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{milestone.year}</div>
                    <p className="text-gray-700 dark:text-gray-300">{milestone.event}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full border-4 border-white dark:border-gray-900"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Target className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              To be a migration agency recognised for its honesty, success rate, and client-first approach across
              Australia. We envision a future where every migration journey is supported by expert guidance, cultural
              understanding, and unwavering commitment to success.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
