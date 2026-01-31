"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, ChevronDown, ChevronUp, Star } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const categories = ["All", "Student Visas", "Skilled Migration", "Partner Visas", "General", "Appeals"]

const faqs = [
  {
    id: 1,
    category: "General",
    question: "Why should I use a Registered Migration Agent?",
    answer:
      "A MARA-registered migration agent has the legal authority to provide immigration advice and represent you before the Department of Home Affairs. We stay updated with constantly changing immigration laws, have experience with complex cases, and can significantly improve your chances of success while saving you time and stress.",
    featured: true,
  },
  {
    id: 2,
    category: "Student Visas",
    question: "What is GS and how important is it?",
    answer:
      "Genuine Student (GS) is a requirement for student visas where you must demonstrate that you genuinely intend to stay in Australia temporarily for study purposes. It's crucial as it's one of the main reasons for student visa refusals. We help you prepare a compelling GS statement that addresses your circumstances, study plans, and future intentions.",
    featured: true,
  },
  {
    id: 3,
    category: "Skilled Migration",
    question: "Can I apply for PR after studying in Australia?",
    answer:
      "Yes, there are several pathways to permanent residency after studying in Australia. The most common routes include the Temporary Graduate visa (485) followed by skilled migration visas like the Skilled Independent (189), Skilled Nominated (190), or Regional visas (491). Your eligibility depends on your qualifications, work experience, English proficiency, and points score.",
    featured: true,
  },
  {
    id: 4,
    category: "Student Visas",
    question: "How much money do I need to show for a student visa?",
    answer:
    "You need to demonstrate you have sufficient funds to cover your first-year tuition fees and living costs (currently $29,710 for a single applicant). You also need to show additional funds for travel costs, health insurance and dependents, if applicable. You can show this through bank statements, education loans, or financial support from parents/sponsors. The exact amount depends on your course duration and family situation. ",
    featured: false,
  },
  {
    id: 5,
    category: "Partner Visas",
    question: "What's the difference between onshore and offshore partner visas?",
    answer:
      "Onshore partner visas (820/801) are for applicants already in Australia, while offshore partner visas (309/100) are for those outside Australia. Onshore applicants can usually remain in Australia during processing and may be eligible for work rights. Processing times and requirements are similar, but the location determines which visa you must apply for.",
    featured: false,
  },
  {
    id: 6,
    category: "Skilled Migration",
    question: "How is the points test calculated?",
    answer:
      "The points test considers age (maximum 30 points), English proficiency (maximum 20 points), skilled employment (maximum 20 points), educational qualifications (maximum 20 points), Australian study (5-10 points), and other factors like partner skills, professional year, or community language credentials. You need at least 65 points to submit an EOI.",
    featured: false,
  },
  {
    id: 7,
    category: "General",
    question: "How long does visa processing take?",
    answer:
      "Processing times vary significantly by visa type and individual circumstances. Student visas typically take 1-4 months, partner visas 12-29 months, and skilled migration visas 8-12 months. These are indicative timeframes and can change based on application complexity, document quality, and Department workload.",
    featured: false,
  },
  {
    id: 8,
    category: "Appeals",
    question: "What can I do if my visa is refused?",
    answer:
      "If your visa is refused, you may have options including: applying for a new visa with additional evidence, requesting Ministerial Intervention, or appealing to the Administrative Review Tribunal (ART) if eligible. The best option depends on the refusal reasons and your specific circumstances. Time limits apply, so it's important to seek advice quickly.",
    featured: false,
  },
  {
    id: 9,
    category: "Student Visas",
    question: "Can I work while on a student visa?",
    answer:
      "Yes, student visa holders can work up to 48 hours per fortnight during study periods and unlimited hours during scheduled course breaks. Your family members may also be eligible for work rights. However, you must maintain satisfactory academic progress and comply with all visa conditions.",
    featured: false,
  },
  {
    id: 10,
    category: "Skilled Migration",
    question: "Do I need a skills assessment?",
    answer:
      "Yes, most skilled migration visas require a positive skills assessment from the relevant assessing authority for your occupation. This confirms your qualifications and experience are suitable for your nominated occupation. Different occupations have different assessing authorities and requirements.",
    featured: false,
  },
  {
    id: 11,
    category: "Partner Visas",
    question: "What evidence do I need for a partner visa?",
    answer:
      "You need to demonstrate a genuine and continuing relationship through four key areas: financial aspects (joint bank accounts, shared expenses), household (living together, shared responsibilities), social context (recognition by family/friends), and commitment (future plans, communication records). The more evidence across all areas, the stronger your application.",
    featured: false,
  },
  {
    id: 12,
    category: "General",
    question: "What are the English language requirements?",
    answer:
      "English requirements vary by visa type. Common tests include IELTS, PTE Academic, TOEFL iBT, and Cambridge English. Student visas typically require IELTS 6.0-7.0, skilled migration visas require 6.0-8.0 depending on points claimed, and partner visas may require functional English (IELTS 4.5) in some cases.",
    featured: false,
  },
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredFAQs = filteredFAQs.filter((faq) => faq.featured)
  const regularFAQs = filteredFAQs.filter((faq) => !faq.featured)

  const toggleExpanded = (id: number) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const FAQItem = ({ faq, featured = false }: { faq: (typeof faqs)[0]; featured?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`glass p-6 rounded-xl backdrop-blur-sm bg-white/60 dark:bg-white/5 border border-white/20 ${
        featured ? "ring-2 ring-brand-orange/50" : ""
      }`}
    >
      <button
        onClick={() => toggleExpanded(faq.id)}
        className="w-full text-left flex items-center justify-between gap-4 group"
      >
        <div className="flex items-start gap-3">
          {featured && <Star className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />}
          <div>
            <span className="text-xs font-medium text-brand-orange uppercase tracking-wide">{faq.category}</span>
            <h3 className="text-lg font-semibold text-brand-blue dark:text-white group-hover:text-brand-orange transition-colors">
              {faq.question}
            </h3>
          </div>
        </div>
        {expandedItems.includes(faq.id) ? (
          <ChevronUp className="w-5 h-5 text-brand-orange flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
        )}
      </button>

      {expandedItems.includes(faq.id) && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 pl-8"
        >
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
        </motion.div>
      )}
    </motion.div>
  )

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
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">Questions</span>
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find answers to common questions about Australian visas and migration processes
          </motion.p>
        </div>
      </section> */}

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-brand-orange text-white"
                    : "border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured FAQs */}
      {featuredFAQs.length > 0 && (
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-brand-blue dark:text-white mb-4">Most Asked Questions</h2>
              <p className="text-gray-600 dark:text-gray-300">These are the questions we get asked most frequently</p>
            </motion.div>

            <div className="grid gap-6">
              {featuredFAQs.map((faq) => (
                <FAQItem key={faq.id} faq={faq} featured={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular FAQs */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regularFAQs.length > 0 ? (
            <div className="grid gap-6">
              {regularFAQs.map((faq) => (
                <FAQItem key={faq.id} faq={faq} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">No FAQs found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Still Have Questions?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our expert migration agents are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-4 text-lg">
                <a href="/contact">Contact Us</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-blue px-8 py-4 text-lg bg-transparent"
              >
                <a href="tel:+61401234567">Call Now</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
