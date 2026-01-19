"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowRight, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const categories = ["All", "Student Visas", "Skilled Migration", "Partner Visas", "Policy Updates", "Tips & Guides"]

const blogPosts = [
  {
    id: 1,
    title: "5 Mistakes to Avoid in Your Student Visa Application",
    excerpt:
      "Learn about the most common mistakes that lead to student visa refusals and how to avoid them in your application.",
    content:
      "Student visa applications can be complex, and small mistakes can lead to costly refusals. Here are the top 5 mistakes we see regularly...",
    category: "Student Visas",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/placeholder.svg?height=300&width=500&text=Student+Visa+Tips",
    featured: true,
  },
  {
    id: 2,
    title: "Changes to Skilled Migration in 2024",
    excerpt:
      "Stay updated with the latest changes to Australia's skilled migration program and how they might affect your application.",
    content: "The Australian government has announced several changes to the skilled migration program for 2024...",
    category: "Policy Updates",
    author: "Michael Chen",
    date: "2024-01-10",
    readTime: "7 min read",
    image: "/placeholder.svg?height=300&width=500&text=Policy+Updates",
    featured: true,
  },
  {
    id: 3,
    title: "Partner Visa: Onshore vs Offshore Applications",
    excerpt:
      "Understanding the differences between onshore and offshore partner visa applications to choose the right path.",
    content:
      "Choosing between an onshore or offshore partner visa application is one of the first decisions you'll need to make...",
    category: "Partner Visas",
    author: "Emma Rodriguez",
    date: "2024-01-08",
    readTime: "6 min read",
    image: "/placeholder.svg?height=300&width=500&text=Partner+Visa+Guide",
    featured: false,
  },
  {
    id: 4,
    title: "How to Improve Your Points Score for Skilled Migration",
    excerpt: "Practical strategies to increase your points score and improve your chances of receiving an invitation.",
    content:
      "The points test is crucial for skilled migration visas. Here are proven strategies to maximize your score...",
    category: "Skilled Migration",
    author: "David Kim",
    date: "2024-01-05",
    readTime: "8 min read",
    image: "/placeholder.svg?height=300&width=500&text=Points+Test+Tips",
    featured: false,
  },
  {
    id: 5,
    title: "Understanding the GTE Requirement for Student Visas",
    excerpt:
      "A comprehensive guide to the Genuine Temporary Entrant requirement and how to address it in your application.",
    content: "The GTE requirement is one of the most challenging aspects of student visa applications...",
    category: "Student Visas",
    author: "Lisa Wang",
    date: "2024-01-03",
    readTime: "10 min read",
    image: "/placeholder.svg?height=300&width=500&text=GTE+Guide",
    featured: false,
  },
  {
    id: 6,
    title: "Regional Migration: Opportunities and Requirements",
    excerpt: "Explore the benefits and requirements of regional migration pathways to permanent residency.",
    content:
      "Regional migration offers excellent opportunities for those willing to live and work in regional Australia...",
    category: "Skilled Migration",
    author: "James Thompson",
    date: "2024-01-01",
    readTime: "6 min read",
    image: "/placeholder.svg?height=300&width=500&text=Regional+Migration",
    featured: false,
  },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-blue to-brand-orange overflow-hidden">
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
            Migration{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">Blog</span>
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay informed with the latest migration news, tips, and insights from our expert team
          </motion.p>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-white/5 border border-white/20 text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-brand-blue dark:text-white mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get the latest migration updates and tips delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input type="email" placeholder="Enter your email address" className="flex-1" />
              <Button className="bg-gradient-to-r from-brand-blue to-brand-orange hover:from-brand-orange hover:to-brand-blue text-white">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-brand-blue dark:text-white mb-4">Featured Articles</h2>
              <p className="text-gray-600 dark:text-gray-300">Our most popular and important articles</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-white/5 border border-white/20 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-4 h-4 text-brand-orange" />
                    <span className="text-brand-orange text-sm font-medium">{post.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-blue dark:text-white mb-3 group-hover:text-brand-orange transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>

                  <Button
                    asChild
                    variant="outline"
                    className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white bg-transparent"
                  >
                    <Link href={`/blog/${post.id}`}>
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-brand-blue dark:text-white mb-4">Latest Articles</h2>
            <p className="text-gray-600 dark:text-gray-300">Stay updated with our latest insights and guides</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-white/5 border border-white/20 hover:shadow-xl transition-all duration-300 group h-full"
              >
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4 text-brand-orange" />
                  <span className="text-brand-orange text-sm font-medium">{post.category}</span>
                </div>

                <h3 className="text-xl font-bold text-brand-blue dark:text-white mb-3 group-hover:text-brand-orange transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>

                <Button
                  asChild
                  variant="outline"
                  className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white bg-transparent"
                >
                  <Link href={`/blog/${post.id}`}>
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.article>
            ))}
          </div>
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
            <h2 className="text-4xl font-bold text-white mb-6">Need Personalized Advice?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              While our blog provides valuable insights, every migration case is unique. Get personalized advice from
              our expert team.
            </p>
            <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-4 text-lg">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
