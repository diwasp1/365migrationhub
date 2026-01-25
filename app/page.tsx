import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSnapshot } from "@/components/services-snapshot"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSnapshot />
      <Testimonials />


      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to take the next step?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your Australian migration journey today with our expert guidance and personalized support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              <Link href="/contact">Book Consultation</Link>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Download Free Guide
            </button>
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  )
}
