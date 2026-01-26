"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Kitchen",
    subtitle: "Remodeling",
    description: "Transform the heart of your home with bespoke cabinetry, premium countertops, and artisan finishes.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
  },
  {
    number: "02",
    title: "Bathroom",
    subtitle: "Renovation",
    description: "Create your personal sanctuary with luxury fixtures, heated floors, and spa-inspired design.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80",
  },
  {
    number: "03",
    title: "Basement",
    subtitle: "Finishing",
    description: "Unlock hidden potential with fully finished living spaces, home theaters, and guest suites.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
  },
  {
    number: "04",
    title: "Outdoor",
    subtitle: "Living",
    description: "Extend your lifestyle outdoors with composite decking, patios, and outdoor kitchens.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  },
  {
    number: "05",
    title: "Siding",
    subtitle: "Installation",
    description: "Enhance your home's curb appeal and protection with premium siding materials and expert craftsmanship.",
    image: "/img/IMG-20260124-WA0084.jpg",
  },
]

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" ref={ref} className="py-32 md:py-40 bg-[#fafafa] relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-[#f24d39]" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground font-medium">
                Our Services
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] tracking-tight">
              Complete Home <br />
              <span className="italic text-[#f24d39]">Transformation</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-[15px] leading-relaxed md:text-right">
            From concept to completion, we handle every aspect of your renovation with precision, care, and unwavering attention to detail.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-px">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 1, 
                delay: 0.1 + index * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="group cursor-pointer"
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-0 py-10 md:py-0 md:h-[200px] items-center border-t border-border hover:bg-background transition-colors duration-500">
                {/* Number */}
                <div className="md:col-span-1 md:pl-6">
                  <span className="text-[11px] tracking-[0.3em] text-muted-foreground font-medium">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-3">
                  <h3 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight leading-none">
                    {service.title}
                    <span className="block text-[#f24d39] italic">{service.subtitle}</span>
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-4 md:px-8">
                  <p className="text-muted-foreground text-[15px] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Image */}
                <div className="md:col-span-3 md:px-4">
                  <div className="relative h-32 md:h-[140px] overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
                    />
                  </div>
                </div>

                {/* Arrow */}
                <div className="md:col-span-1 flex justify-end md:pr-6">
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:bg-[#f24d39] group-hover:border-[#f24d39] transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 pt-12 border-t border-border"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground font-medium mb-8">
            Also Available
          </p>
          <div className="flex flex-wrap gap-4">
            {["Roofing", "Drywall", "Floor Painting", "Home Additions", "Exterior Work", "Concrete"].map((service) => (
              <span 
                key={service} 
                className="px-6 py-3 border border-border text-sm text-foreground hover:bg-foreground hover:text-background transition-all duration-300 cursor-pointer"
              >
                {service}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
