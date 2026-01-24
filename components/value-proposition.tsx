"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const values = [
  {
    number: "01",
    title: "Licensed & Insured",
    description: "Complete protection for your investment with comprehensive coverage and full state licensing.",
  },
  {
    number: "02",
    title: "On-Time Delivery",
    description: "Precise timelines honored. Every project completed within the agreed schedule, guaranteed.",
  },
  {
    number: "03",
    title: "Premium Craftsmanship",
    description: "15+ years of excellence. Meticulous attention to detail with only the finest materials.",
  },
]

export function ValueProposition() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 md:py-40 bg-background relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

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
            <span className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground font-medium">
              Why Choose Us
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] tracking-tight text-balance">
            Indiana&apos;s Most <span className="italic text-[#f24d39]">Trusted</span> Remodeling Team
          </h2>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 1, 
                delay: 0.2 + index * 0.15,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="group bg-background p-10 md:p-12 relative"
            >
              {/* Number */}
              <span className="absolute top-10 right-10 font-serif text-6xl md:text-7xl text-foreground/[0.03] font-bold leading-none group-hover:text-[#f24d39]/10 transition-colors duration-700">
                {value.number}
              </span>

              {/* Content */}
              <div className="relative">
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#f24d39] font-medium block mb-6">
                  {value.number}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {value.description}
                </p>

                {/* Hover line */}
                <div className="mt-8 h-px bg-border overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#f24d39] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
