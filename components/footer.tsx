"use client"

import Link from "next/link"
import NextImage from "next/image"
import {
  Phone,
  Mail,
  MapPin,
  FacebookIcon,
  Instagram,
  Music2,
  Youtube
} from "lucide-react";

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
            <p className="text-gray-300 my-3 max-w-md">
              MARA Registration Number : 2619180
            </p>
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
                <Link href="https://www.mara.gov.au/tools-for-agents-subsite/Files/code-of-conduct-march-2022.pdf" target="_" className="text-gray-300 hover:text-white transition-colors">
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link href="https://www.mara.gov.au/get-help-visa-subsite/FIles/consumer_guide_english.pdf" target="_" className="text-gray-300 hover:text-white transition-colors">
                  Consumer Guide
                </Link>
              </li>
              <li>
                <Link href="https://www.homeaffairs.gov.au/help-and-support/departmental-forms/online-forms/border-watch?offenceType=immigration" target="_" className="text-gray-300 hover:text-white transition-colors">
                Report Unlawful Immigration Assistance 
                </Link>
              </li>
            
            </ul>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/365migrationhub" target="_" className="text-gray-400 hover:text-white transition-colors">
                  <FacebookIcon className="w-6 h-6" />
                </a>
                <a href="https://www.youtube.com/@365migrationhub" target="_" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="https://www.tiktok.com/@365.migration.hub" target="_" className="text-gray-400 hover:text-white transition-colors">
                  <Music2 className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/365migrationhub/" target="_" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>


    {/* Bottom bar Disclaimer */}
    <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col justify-between gap-4">
          <p className="text-gray-400 text-sm ">
              <strong>Acknowledgement of Country :</strong> 365 Migration Hub Pty Ltd acknowledges the Traditional Custodians of Country throughout Australia and pays respect to Aboriginal and Torres Strait Islander peoples, their cultures, and Elders past, present, and emerging..
            </p>
            <p className="text-gray-400 text-sm ">
              <strong>Disclaimer:</strong> The information on this website is general in nature only and does not constitute immigration advice. Migration laws and policies may change at any time. You should contact 365 Migration Hub Pty Ltd before relying on this information. Immigration assistance and legal advice are provided only after a written service agreement is in place. We are not responsible for any loss arising from reliance on this content.
            </p>
           
          </div>
        </div>
        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="justify-between items-center gap-4 text-center">
            <p className="text-gray-400 text-sm">© 2026 365 Migration Hub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
