"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, ArrowRight } from "lucide-react"

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#gallery" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#testimonials" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-black/95 backdrop-blur-md py-4 shadow-sm'
        : 'bg-black md:bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo/logo.png"
              alt="Bros Home Remodeling LLC"
              width={480}
              height={160}
              className="h-32 w-auto sm:h-40"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:opacity-60 ${
                  isScrolled ? 'text-white/90' : 'text-white/90'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="tel:+13107175612" 
              className={`flex items-center gap-2 text-xs tracking-wider transition-colors duration-500 ${
                isScrolled ? 'text-white/70 hover:text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(310) 717-5612</span>
            </a>
            <Button 
              className={`text-[10px] tracking-[0.2em] uppercase px-6 py-5 h-auto font-medium transition-all duration-500 ${
                isScrolled 
                  ? 'bg-[#f24d39] text-white hover:bg-[#d10000]' 
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
              }`}
            >
              Free Consultation
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                className={`transition-colors duration-500 ${
                  isScrolled ? 'text-white' : 'text-white'
                }`}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-96 bg-white border-none">
              <div className="flex flex-col h-full pt-12">
                <nav className="flex flex-col gap-1">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="py-4 border-b border-border/50 text-2xl font-serif font-normal text-foreground hover:text-[#f24d39] transition-colors flex items-center justify-between group"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-muted-foreground font-sans tracking-wider">0{index + 1}</span>
                    </Link>
                  ))}
                </nav>
                
                <div className="mt-auto pb-8">
                  <div className="mb-8">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Contact</p>
                    <a href="tel:+13107175612" className="flex items-center gap-3 text-foreground text-lg font-light">
                      <Phone className="w-4 h-4" />
                      (310) 717-5612
                    </a>
                  </div>
                  
                  <Button className="w-full bg-[#f24d39] text-white hover:bg-[#d10000] text-xs tracking-[0.2em] uppercase py-6 h-auto">
                    Get Free Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
