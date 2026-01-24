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
                src="/logo/logo.png"
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
              {["Fb", "Ig", "Yt", "Li"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 border border-background/20 flex items-center justify-center text-background/50 text-xs tracking-wider hover:border-[#f24d39] hover:text-[#f24d39] transition-all duration-300"
                >
                  {social}
                </a>
              ))}
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
                href="tel:+13107175612" 
                className="block text-background/60 hover:text-[#f24d39] transition-colors duration-300 text-[15px]"
              >
                (310) 717-5612
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
