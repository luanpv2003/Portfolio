"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-blue-100 z-50">
      <div className="px-5 md:px-4 py-4 lg:container lg:mx-auto lg:max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">PL</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-blue-100">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
