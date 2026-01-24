"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const videos = [
  "PXbf5agKXA4",
  "XoBpCA1rk5A",
  "IBT2_kZYlVU",
  "tdKW61fx2hU",
  "5Wp6og3jn_Y",
  "5fOAG-sMI9k",
  "VFeWsTTtASM",
  "OXnsC1l9Ymc",
  "72dQr8zyEUE",
  "lErdD5xgn94",
  "z_07bPalTd0",
  "nVh0gWrGnFg",
]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="gallery" ref={ref} className="py-32 md:py-40 bg-[#fafafa] relative overflow-hidden">
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
                Portfolio
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] tracking-tight">
              Recent <span className="italic text-[#f24d39]">Projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-[15px] leading-relaxed md:text-right">
            Each project represents our commitment to excellence. Explore our portfolio of completed transformations across Indiana.
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((videoId, index) => (
            <motion.div
              key={videoId}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                delay: 0.1 + index * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="aspect-video w-full"
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Project Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
