"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, ChevronDown } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const slides = [
    {
      video: "/logo/hero/dos.mp4",
      eyebrow: "Excellence in Every Detail",
      titleLine1: "Quality is",
      titleLine2: "Our Speciality",
    },
    {
      video: "/logo/hero/dos.mp4",
      eyebrow: "Bespoke Kitchen Design",
      titleLine1: "Culinary Spaces",
      titleLine2: "Beautifully Reimagined",
    },
    {
      video: "/logo/hero/dos.mp4",
      eyebrow: "Luxury Living",
      titleLine1: "Your Sanctuary",
      titleLine2: "Expertly Redefined",
    }
  ]

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [slides.length])

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Video Backgrounds */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[2000ms] ease-out ${
            index === currentSlide 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-105"
          }`}
        >
          <video
            ref={el => { videoRefs.current[index] = el }}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={slide.video} type="video/mp4" />
          </video>
        </div>
      ))}

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-black/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15 z-10" />

      {/* Vignette Effect */}
      <div className="absolute inset-0 z-10" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0,0,0,0.2) 100%)'
      }} />

      {/* Horizontal Lines - Cinematic Frame */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col justify-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl">
            {/* Eyebrow */}
            <div className={`overflow-hidden mb-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-[#f24d39]" />
                <span className="text-[#f24d39] text-xs font-medium tracking-[0.4em] uppercase">
                  {slides[currentSlide].eyebrow}
                </span>
              </div>
            </div>

            {/* Main Title */}
            <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="font-serif text-[clamp(3rem,10vw,8rem)] font-light text-white leading-[0.9] tracking-[-0.02em] mb-2" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
                {slides[currentSlide].titleLine1}
              </h1>
              <h1 className="font-serif text-[clamp(3rem,10vw,8rem)] font-light leading-[0.9] tracking-[-0.02em]" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
                <span className="text-white/90">{slides[currentSlide].titleLine2.split(' ')[0]}</span>
                {slides[currentSlide].titleLine2.split(' ').length > 1 && (
                  <span className="text-[#f24d39] italic"> {slides[currentSlide].titleLine2.split(' ').slice(1).join(' ')}</span>
                )}
              </h1>
            </div>

            {/* Divider Line */}
            <div className={`my-12 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 w-32' : 'opacity-0 w-0'}`}>
              <div className="h-px bg-white/20" />
            </div>

            {/* Subtitle + CTA Row */}
            <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-white/60 text-lg lg:text-xl font-light max-w-md leading-relaxed tracking-wide">
                Transforming Indiana homes with uncompromising quality and timeless design since 2009.
              </p>
              
              <div className="flex items-center gap-6">
                <Button
                  size="lg"
                  className="bg-[#f24d39] hover:bg-[#d10000] text-white text-sm tracking-[0.15em] uppercase px-10 py-7 h-auto font-medium transition-all duration-500 hover:tracking-[0.2em]"
                >
                  Begin Your Journey
                  <ArrowRight className="w-4 h-4 ml-3" />
                </Button>
                
                <a 
                  href="tel:+13177172197" 
                  className="hidden lg:flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
                >
                  <span className="flex items-center justify-center w-14 h-14 border border-white/20 group-hover:border-[#f24d39] transition-colors">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div className="text-sm">
                    <p className="text-white/40 text-xs tracking-wider uppercase mb-1">Call Us</p>
                    <p className="font-light tracking-wide">(317) 717-2197</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Counter - Right Side */}
      <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-6">
        <span className="text-white/30 text-xs tracking-widest font-light">
          {String(currentSlide + 1).padStart(2, '0')}
        </span>
        <div className="w-px h-24 bg-white/10 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-full bg-[#f24d39] transition-all duration-[10000ms] ease-linear"
            style={{ height: '100%', transform: `translateY(-${100 - ((currentSlide + 1) / slides.length) * 100}%)` }}
          />
        </div>
        <span className="text-white/30 text-xs tracking-widest font-light">
          {String(slides.length).padStart(2, '0')}
        </span>
      </div>

      {/* Bottom Stats Bar */}
      <div className={`absolute bottom-0 left-0 right-0 z-20 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between py-8 border-t border-white/10">
            {/* Stats */}
            <div className="hidden lg:flex items-center gap-16">
              <div className="group">
                <span className="block font-serif text-4xl text-white font-light tracking-tight">15<span className="text-[#f24d39]">+</span></span>
                <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase mt-2 block">Years</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="group">
                <span className="block font-serif text-4xl text-white font-light tracking-tight">500<span className="text-[#f24d39]">+</span></span>
                <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase mt-2 block">Projects</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="group">
                <span className="block font-serif text-4xl text-white font-light tracking-tight">100<span className="text-[#f24d39]">%</span></span>
                <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase mt-2 block">Satisfaction</span>
              </div>
            </div>

            {/* Scroll Indicator */}
            <button 
              onClick={scrollToContent}
              className="flex items-center gap-3 text-white/40 hover:text-white transition-colors group mx-auto lg:mx-0"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase">Explore</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>

            {/* Slide Navigation */}
            <div className="hidden lg:flex items-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="group relative p-2"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <span className={`block w-8 h-px transition-all duration-500 ${
                    index === currentSlide 
                      ? "bg-[#f24d39] w-12" 
                      : "bg-white/20 group-hover:bg-white/40"
                  }`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Text - Left Side */}
      <div className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 hidden xl:block">
        <span 
          className="text-white/20 text-[10px] tracking-[0.5em] uppercase font-light"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          Bros Home Remodeling LLC
        </span>
      </div>
    </section>
  )
}
