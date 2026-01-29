"use client"

import React, { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  const inputClasses = "w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#f24d39] transition-colors duration-300 text-[15px]"

  return (
    <section id="contact" ref={ref} className="py-32 md:py-40 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fafafa] hidden lg:block" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pr-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-[#f24d39]" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground font-medium">
                Get Started
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] tracking-tight mb-8">
              Ready to Transform <br />
              <span className="italic text-[#f24d39]">Your Home?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-lg">
              Take the first step toward your dream space. Schedule a complimentary consultation and let&apos;s bring your vision to life.
            </p>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="group">
                <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground font-medium mb-2">
                  Phone
                </p>
                <a 
                  href="tel:+13177172197" 
                  className="font-serif text-2xl text-foreground hover:text-[#f24d39] transition-colors duration-300"
                >
                  (317) 717-2197
                </a>
              </div>
              <div className="group">
                <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground font-medium mb-2">
                  Email
                </p>
                <a 
                  href="mailto:info@broshomeremodeling.com" 
                  className="font-serif text-2xl text-foreground hover:text-[#f24d39] transition-colors duration-300"
                >
                  info@broshomeremodeling.com
                </a>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground font-medium mb-2">
                  Service Area
                </p>
                <p className="font-serif text-2xl text-foreground">
                  Greater Indianapolis, IN
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-12 pt-12 border-t border-border">
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground font-medium mb-4">
                Business Hours
              </p>
              <div className="grid grid-cols-2 gap-4 text-[15px]">
                <div>
                  <p className="text-foreground">Monday - Friday</p>
                  <p className="text-muted-foreground">7:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="text-foreground">Saturday</p>
                  <p className="text-muted-foreground">8:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pl-12"
          >
            <div className="bg-background lg:bg-[#fafafa] p-8 md:p-12">
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2 tracking-tight">
                Request a Quote
              </h3>
              <p className="text-muted-foreground text-[15px] mb-10">
                Fill out the form and we&apos;ll respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className={inputClasses}
                    required
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 h-px bg-[#f24d39]"
                    initial={{ width: "0%" }}
                    animate={{ width: focusedField === "name" ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses}
                      required
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 h-px bg-[#f24d39]"
                      initial={{ width: "0%" }}
                      animate={{ width: focusedField === "email" ? "100%" : "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses}
                      required
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 h-px bg-[#f24d39]"
                      initial={{ width: "0%" }}
                      animate={{ width: focusedField === "phone" ? "100%" : "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                <div className="relative">
                  <select
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    onFocus={() => setFocusedField("project")}
                    onBlur={() => setFocusedField(null)}
                    className={`${inputClasses} cursor-pointer appearance-none`}
                    required
                  >
                    <option value="" disabled>Select Project Type</option>
                    <option value="kitchen">Kitchen Remodeling</option>
                    <option value="bathroom">Bathroom Renovation</option>
                    <option value="basement">Basement Finishing</option>
                    <option value="outdoor">Decks & Patios</option>
                    <option value="addition">Home Addition</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <motion.div 
                    className="absolute bottom-0 left-0 h-px bg-[#f24d39]"
                    initial={{ width: "0%" }}
                    animate={{ width: focusedField === "project" ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <div className="relative">
                  <textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={`${inputClasses} min-h-32 resize-none`}
                    required
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 h-px bg-[#f24d39]"
                    initial={{ width: "0%" }}
                    animate={{ width: focusedField === "message" ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full bg-[#f24d39] text-white py-5 text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#d60000] transition-colors duration-300 flex items-center justify-center gap-3 mt-8"
                >
                  Submit Request
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Your information is secure and will never be shared.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
