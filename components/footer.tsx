"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const services = [
  "Kitchen Remodeling",
  "Bathroom Renovation",
  "Basement Finishing",
  "Decks & Patios",
  "Home Additions",
  "Roofing",
]

const areas = [
  "Indianapolis",
  "Carmel",
  "Fishers",
  "Noblesville",
  "Westfield",
  "Zionsville",
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Large brand watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[20vw] leading-none text-background/[0.02] pointer-events-none select-none whitespace-nowrap">
        BROS HOME
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-24 relative">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="mb-6">
              <Image
                src="/logo/logo-v3.png"
                alt="Bros Home Remodeling LLC"
                width={520}
                height={180}
                className="h-48 w-auto"
              />
            </div>
            <p className="text-background/50 text-[15px] leading-relaxed mb-8 max-w-xs">
              Transforming Indiana homes with exceptional craftsmanship and unwavering commitment to quality since 2009.
            </p>
            
            {/* Social */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1CwQEsqFmm/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-background/20 flex items-center justify-center text-background/50 hover:border-[#f24d39] hover:text-[#f24d39] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/broshome24?igsh=N3J2d293ZnR4azln"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-background/20 flex items-center justify-center text-background/50 hover:border-[#f24d39] hover:text-[#f24d39] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://vm.tiktok.com/ZS91tfcJQUnmv-C86nJ/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-background/20 flex items-center justify-center text-background/50 hover:border-[#f24d39] hover:text-[#f24d39] transition-all duration-300"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2 md:col-start-6">
            <p className="text-[11px] tracking-[0.3em] uppercase text-background/40 font-medium mb-6">
              Services
            </p>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    href="#services" 
                    className="text-background/60 hover:text-[#f24d39] transition-colors duration-300 text-[15px]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.3em] uppercase text-background/40 font-medium mb-6">
              Areas
            </p>
            <ul className="space-y-3">
              {areas.map((area) => (
                <li key={area}>
                  <span className="text-background/60 text-[15px]">{area}, IN</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="text-[11px] tracking-[0.3em] uppercase text-background/40 font-medium mb-6">
              Contact
            </p>
            <div className="space-y-4">
              <a 
                href="tel:+13177172197" 
                className="block text-background/60 hover:text-[#f24d39] transition-colors duration-300 text-[15px]"
              >
                (317) 717-2197
              </a>
              <a 
                href="mailto:info@broshomeremodeling.com" 
                className="block text-background/60 hover:text-[#f24d39] transition-colors duration-300 text-[15px]"
              >
                info@broshomeremodeling.com
              </a>
              <p className="text-background/60 text-[15px]">
                Greater Indianapolis Area<br />
                Indiana, USA
              </p>
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-[#f24d39] text-white px-6 py-3 text-xs tracking-[0.15em] uppercase font-medium mt-8 hover:bg-[#d60000] transition-colors duration-300"
            >
              Get Quote
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/30 text-xs tracking-wider">
              &copy; {new Date().getFullYear()} Bros Home Remodeling LLC. All rights reserved.
            </p>
            <div className="flex gap-8 text-xs tracking-wider">
              <Link href="#" className="text-background/30 hover:text-background/60 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-background/30 hover:text-background/60 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-background/30 hover:text-background/60 transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
