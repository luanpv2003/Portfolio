"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact")
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-16 px-5 md:px-4">
      <div className="lg:container lg:mx-auto lg:max-w-6xl">
        <div className="text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
            Phan Van Luan
          </div>
          <p className="text-gray-300 text-lg mb-8">Web Developer • Building the future, one line of code at a time</p>

          <div className="flex justify-center space-x-6 mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("https://github.com/luanpv2003", "_blank")}
              className="text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToContact}
              className="text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </Button>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 flex items-center justify-center">
              © 2025 Phan Van Luan. Made with
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
