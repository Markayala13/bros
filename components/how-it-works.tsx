"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Schedule a complimentary in-home consultation. We'll explore your vision, assess your space, and discuss possibilities.",
  },
  {
    number: "02",
    title: "Design",
    description: "Our team crafts a bespoke design tailored to your lifestyle, complete with detailed 3D renderings and material selections.",
  },
  {
    number: "03",
    title: "Installation",
    description: "Expert craftsmen bring your vision to life with meticulous attention to detail and premium materials throughout.",
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="process" ref={ref} className="py-32 md:py-40 bg-foreground text-background relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Large number background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 font-serif text-[40vw] leading-none text-background/[0.02] pointer-events-none select-none">
        03
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#f24d39]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-background/50 font-medium">
              Our Process
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-background leading-[1.1] tracking-tight">
            Three Simple Steps to <br />
            <span className="italic text-[#f24d39]">Your Dream Home</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 1, 
                delay: 0.2 + index * 0.15,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-full w-full h-px bg-background/10 z-0" />
              )}

              <div className="border-l border-background/10 pl-8 md:pl-12 pr-8 py-12 h-full">
                {/* Number */}
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="font-serif text-6xl md:text-7xl lg:text-8xl text-background/10 leading-none group-hover:text-[#f24d39]/30 transition-colors duration-700">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl md:text-3xl text-background mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-background/60 text-[15px] leading-relaxed">
                  {step.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-8 w-8 h-px bg-background/20 group-hover:w-16 group-hover:bg-[#f24d39] transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-4 bg-[#f24d39] text-white px-10 py-5 text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#d60000] transition-colors duration-300"
          >
            Start Your Project
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <span className="text-background/40 text-sm">or</span>
          <a
            href="tel:+13177172197"
            className="text-background/80 text-sm tracking-wider hover:text-[#f24d39] transition-colors duration-300"
          >
            Call (317) 717-2197
          </a>
        </motion.div>
      </div>
    </section>
  )
}
