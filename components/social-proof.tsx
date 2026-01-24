"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "Michael Thompson",
    location: "Indianapolis",
    text: "Bros Home Remodeling transformed our outdated kitchen into a modern masterpiece. The attention to detail was incredible, and they finished on time and within budget. Truly exceptional work.",
    project: "Kitchen Remodel",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Sarah Mitchell",
    location: "Carmel",
    text: "We couldn't be happier with our new basement. It's become our favorite space in the house. The team was professional, clean, and truly cared about delivering quality.",
    project: "Basement Finishing",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    name: "David Chen",
    location: "Fishers",
    text: "From start to finish, the experience was seamless. They handled our complete bathroom renovation with expertise and made what could have been stressful completely effortless.",
    project: "Bathroom Renovation",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
]

export function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" ref={ref} className="py-32 md:py-40 bg-background relative overflow-hidden">
      {/* Large quote mark */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 font-serif text-[30vw] leading-none text-foreground/[0.02] pointer-events-none select-none">
        &ldquo;
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#f24d39]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground font-medium">
              Testimonials
            </span>
            <div className="w-12 h-px bg-[#f24d39]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] tracking-tight">
            Client <span className="italic text-[#f24d39]">Stories</span>
          </h2>
        </motion.div>

        {/* Testimonial */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                {/* Quote */}
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-[1.4] tracking-tight mb-12">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-border ring-offset-4 ring-offset-background">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-xl text-foreground tracking-tight">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-[13px] text-muted-foreground mt-1">
                      {testimonials[currentIndex].location}, IN — <span className="text-[#f24d39]">{testimonials[currentIndex].project}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="group relative h-12 flex items-center"
              >
                <div className={`w-12 h-px transition-all duration-500 ${
                  index === currentIndex ? "bg-[#f24d39]" : "bg-border group-hover:bg-muted-foreground"
                }`} />
                {index === currentIndex && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#f24d39] rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32 pt-16 border-t border-border"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground font-medium text-center mb-10">
            Recognized Excellence
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {["BBB A+ Rated", "Angi Super Service", "HomeAdvisor Elite", "Google 5-Star", "Houzz Best"].map((badge) => (
              <span 
                key={badge} 
                className="text-foreground/30 font-medium text-sm tracking-wider hover:text-foreground transition-colors duration-300 cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
