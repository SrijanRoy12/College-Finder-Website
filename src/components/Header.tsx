"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [letterColors, setLetterColors] = useState(
    "MERIT NATIONS".split("").map(() => "hsl(0, 100%, 50%)")
  )
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!mounted) return;
    const interval = setInterval(() => {
      setLetterColors(prevColors => 
        prevColors.map((_, index) => 
          `hsl(${(Date.now() / 10 + index * 20) % 360}, 100%, 50%)`
        )
      )
    }, 100)
    return () => clearInterval(interval)
  }, [mounted])

  // Function to add delay before closing the dropdown
  let dropdownTimeout: NodeJS.Timeout
  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout)
    setIsDropdownOpen(true)
  }
  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => setIsDropdownOpen(false), 300) // Delay for smooth effect
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Merit Nations Logo" width={65} height={65} />
          <span className="font-bold text-xl">
            {"MERIT NATIONS".split("").map((letter, index) => (
              <span
                key={index}
                style={{ color: letterColors[index] }}
                className="inline-block transition-colors duration-300"
              >
                {letter}
              </span>
            ))}
          </span>
        </Link>

        {/* Mobile Menu and Theme Toggle */}
        <div className="flex items-center md:hidden space-x-2">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Institutions Dropdown with delay and proper interaction */}
          <div 
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center text-sm font-medium hover:underline underline-offset-4">
              Institutions <ChevronDown className="w-4 h-4 ml-1" />
            </button>

            {isDropdownOpen && (
              <div 
                className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg border py-2 transition-opacity duration-300"
                onMouseEnter={handleMouseEnter} // Keep open when hovering dropdown
                onMouseLeave={handleMouseLeave} // Only close when mouse leaves dropdown area
              >
                <Link 
                  href="/top-colleges-wb" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Top Colleges in West Bengal
                </Link>
                <Link 
                  href="/top-colleges-dl" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Top Colleges in Delhi
                </Link>
                <Link 
                  href="/top-colleges-pu" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Top Colleges in Pune
                </Link>
                <Link 
                  href="/top-colleges-bl" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Top Colleges in Banglore
                </Link>
              </div>
            )}
          </div>

          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about-us">
            About Us
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#success-stories">
            Success Stories
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#resources">
            Resources
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact-us">
            Contact Us
          </Link>
        </nav>

        {/* Desktop Right Side Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button>Get Started</Button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-sm md:hidden">
            <nav className="flex flex-col p-6 space-y-6 bg-background">
              {/* Institutions Dropdown in Mobile Menu */}
              <div className="relative">
                <button 
                  className="flex justify-between items-center text-lg font-medium p-3 w-full text-left hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Institutions <ChevronDown className="w-4 h-4" />
                </button>
                {isDropdownOpen && (
                  <div className="flex flex-col space-y-2 pl-4">
                    <Link 
                      href="/top-colleges-wb" 
                      className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Top Colleges in West Bengal
                    </Link>
                    <Link 
                      href="/top-colleges-dl" 
                      className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Top Colleges in Delhi
                    </Link>
                    <Link 
                      href="/top-colleges-pu" 
                      className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Top Colleges in Pune
                    </Link>
                    <Link 
                      href="/top-colleges-bl" 
                      className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Top Colleges in Bangalore
                    </Link>
                  </div>
                )}
              </div>
              <Link className="text-lg font-medium hover:bg-accent p-3 rounded-lg transition-colors" href="/#services" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link className="text-lg font-medium hover:bg-accent p-3 rounded-lg transition-colors" href="/about-us" 
              onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              <Link className="text-lg font-medium hover:bg-accent p-3 rounded-lg transition-colors" href="/#success-stories" onClick={() => setIsMenuOpen(false)}>
                Success Stories
              </Link>
              <Link className="text-lg font-medium hover:bg-accent p-3 rounded-lg transition-colors" href="/#resources" onClick={() => setIsMenuOpen(false)}>
                Resources
              </Link>
              <Link className="text-lg font-medium hover:bg-accent p-3 rounded-lg transition-colors" href="/contact-us" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
              <div className="flex justify-between items-center mt-4">
                <Button>Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
