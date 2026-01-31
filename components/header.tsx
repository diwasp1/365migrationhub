"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Visa Types", href: "/visa-types" },
  { name: "FAQs", href: "/faq" },
  // { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top contact bar */}
      <div className="hidden md:block bg-brand-blue text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <strong>+61 401 560 785</strong>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <strong >info@365migrationhub.com.au</strong>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <strong>Sydney, Australia</strong>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <strong className="text-xs">Mon – Fri: 9AM – 8PM | Weekend & After Hours By Appointment</strong>
          </div>
        </div>
      </div>
      {/* top visa  */}
      <div className="hidden md:block bg-brand-blue text-white py-4 text-m border-t text-center">
  <span className="animate-blink">
   <a href="/contact">
   Not sure about your visa options? : Book a free 15-minute online consultation and let’s talk through your migration plans.
    </a> 
  </span>
</div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass backdrop-blur-xl shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/logo.jpg" alt="365 Migration Hub" width={60} height={60} className="rounded-lg" />
              <div className="hidden sm:block">
                <div className="font-semibold text-lg text-brand-blue dark:text-white">365 Migration Hub</div>
                <div className="text-xs text-brand-orange">MARA Registered</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-brand-orange ${
                    pathname === item.href ? "text-brand-orange" : "text-brand-blue dark:text-gray-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA and Theme Toggle */}
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
              <Button
                asChild
                className="bg-brand-orange hover:bg-brand-blue text-white"
              >
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button onClick={() => setIsOpen(!isOpen)} className="text-brand-blue dark:text-gray-300">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden glass backdrop-blur-xl border-t border-white/20">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block text-base font-medium transition-colors hover:text-brand-orange ${
                    pathname === item.href ? "text-brand-orange" : "text-brand-blue dark:text-gray-300"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-brand-orange hover:bg-brand-blue text-white"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Book Consultation
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
