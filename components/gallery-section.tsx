"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const images = [
  "/img/IMG-20260124-WA0084.jpg",
  "/img/IMG-20260124-WA0087.jpg",
  "/img/IMG-20260124-WA0088.jpg",
  "/img/IMG-20260124-WA0089.jpg",
  "/img/IMG-20260124-WA0091.jpg",
  "/img/IMG-20260124-WA0092.jpg",
  "/img/IMG-20260124-WA0093.jpg",
  "/img/IMG-20260124-WA0096.jpg",
  "/img/IMG-20260124-WA0098.jpg",
  "/img/IMG-20260124-WA0099.jpg",
  "/img/IMG-20260124-WA0100.jpg",
  "/img/IMG-20260124-WA0101(1).jpg",
  "/img/IMG-20260124-WA0103.jpg",
  "/img/IMG-20260124-WA0104.jpg",
  "/img/IMG-20260124-WA0108.jpg",
  "/img/IMG-20260124-WA0109.jpg",
  "/img/IMG-20260124-WA0110.jpg",
  "/img/IMG-20260124-WA0111.jpg",
  "/img/IMG-20260124-WA0112.jpg",
  "/img/IMG-20260124-WA0113.jpg",
  "/img/IMG-20260124-WA0114.jpg",
]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setCurrentIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    return () => { emblaApi.off("select", onSelect) }
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    emblaApi?.scrollTo(index)
  }, [emblaApi])

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

        {/* Mobile Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="flex-[0_0_85%] min-w-0 pl-4 first:pl-0"
                >
                  <div
                    className="relative aspect-[4/3] overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedImage(src)}
                  >
                    <Image
                      src={src}
                      alt={`Project ${index + 1}`}
                      fill
                      className="object-cover grayscale-[30%] group-active:grayscale-0 transition-all duration-500"
                      sizes="85vw"
                    />
                    <div className="absolute inset-0 bg-black/10 group-active:bg-transparent transition-colors duration-300" />

                    {/* Image Number */}
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white/80 text-[10px] tracking-[0.3em] font-medium">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
            {/* Counter */}
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl text-foreground">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-muted-foreground text-sm">/</span>
              <span className="text-muted-foreground text-sm">
                {String(images.length).padStart(2, '0')}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="flex-1 mx-8">
              <div className="h-px bg-border relative">
                <div
                  className="absolute top-0 left-0 h-full bg-[#f24d39] transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={scrollPrev}
                className="w-12 h-12 border border-border flex items-center justify-center hover:bg-foreground hover:border-foreground hover:text-background transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                className="w-12 h-12 border border-border flex items-center justify-center hover:bg-foreground hover:border-foreground hover:text-background transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1,
                  delay: 0.1 + index * 0.03,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Project ${index + 1}`}
                  fill
                  className="object-cover grayscale-[30%] group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-white text-[10px] tracking-[0.3em] font-medium">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase">
                      View
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 z-10 w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image */}
          <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
            <div className="relative w-full h-full max-w-6xl">
              <Image
                src={selectedImage}
                alt="Project detail"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="container mx-auto flex items-center justify-between">
              <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">
                Bros Home Remodeling
              </span>
              <span className="text-white/60 text-[10px] tracking-[0.2em]">
                Click anywhere to close
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}
