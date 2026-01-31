"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Users, Award, Globe, Heart } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-brand-orange animate-gradient" />

      {/* Floating background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-orange/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Trusted{" "}
              <span className="bg-gradient-to-r from-brand-orange to-yellow-300 bg-clip-text text-transparent">
                Australian Migration
              </span>{" "}
              Experts
            </motion.h1>

            <motion.p
              className="text-xl text-blue-100 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Providing clear, honest, and reliable visa support for individuals, families, and professionals.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-brand-orange to-yellow-500 hover:from-yellow-500 hover:to-brand-orange text-white px-8 py-4 text-lg"
              >
                <Link href="/contact">
                Speak With a Registered Agent <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              {/* <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm bg-transparent"
              >
                <Link href="/contact">Speak With a Registered Agent</Link>
              </Button> */}
            </motion.div>

            {/* Trust indicators */}
            {/* <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-white">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-blue-200">Successful Visas</div>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold">MARA</div>
                <div className="text-sm text-blue-200">Registered</div>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-blue-200">Support</div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Floating glass cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-1 gap-6">
              {/* Main card */}
              <motion.div
                className="glass p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-4">Why Choose Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 text-brand-orange" />
                    <span>MARA-Registered Agent</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Award className="w-5 h-5 text-brand-orange" />
                    <span>Over 10 Years of Expertise in Australian Education Sector</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Globe className="w-5 h-5 text-brand-orange" />
                    <span>Multilingual Support</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Heart className="w-5 h-5 text-brand-orange" />
                    <span>End-to-End Case Management</span>
                  </div>
                </div>
              </motion.div>

              {/* Secondary cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="glass p-6 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Users className="w-8 h-8 text-brand-orange mb-3" />
                  <h4 className="text-white font-semibold mb-2">Education & Career Guidance</h4>
                  <p className="text-blue-100 text-sm">Comprehensive support for your journey</p>
                </motion.div>

                <motion.div
                  className="glass p-6 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Globe className="w-8 h-8 text-brand-orange mb-3" />
                  <h4 className="text-white font-semibold mb-2">Culturally Inclusive</h4>
                  <p className="text-blue-100 text-sm">Understanding diverse backgrounds</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
