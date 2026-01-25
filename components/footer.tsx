"use client"

import Link from "next/link"
import NextImage from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3">
              <NextImage src="/logo.jpg" alt="365 Migration Hub" width={60} height={60} className="rounded-lg" />
              <div className="hidden sm:block">
                <div className="font-semibold text-lg text-white dark:text-white">365 Migration Hub</div>
                <div className="text-xs text-white">MARA Registered</div>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted Australian migration experts providing clear, honest, and reliable visa support for
              individuals, families, and professionals.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <span>+61 401 560 785</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400" />
                <span>info@365migrationhub.com.au</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-teal-400" />
                <span>Sydney, Australia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/visa-types" className="text-gray-300 hover:text-white transition-colors">
                  Visa Types
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Important Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/code-of-conduct" className="text-gray-300 hover:text-white transition-colors">
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link href="/consumer-guide" className="text-gray-300 hover:text-white transition-colors">
                  Consumer Guide
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2026 365 Migration Hub. All rights reserved.</p>
            <p className="text-gray-400 text-sm text-center">
              <strong>Disclaimer:</strong> We do not guarantee visa outcomes. Results depend on individual circumstances
              and government policies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
