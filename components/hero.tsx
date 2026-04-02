"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, MapPin } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import Image from "next/image"

export function Hero() {
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact")
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="pt-24 pb-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 lg:container lg:mx-auto lg:max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <ScrollReveal>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Available for work
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
                Phan Van{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Luan</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-2xl lg:text-3xl text-blue-600 font-semibold mb-6">Web Developer</p>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Web developer with 1 year of experience in JavaScript, HTML, CSS, PHP, Laravel, and React. Proficient in
                developing responsive and interactive web applications.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 bg-transparent"
                >
                  <a href="/pdf/CV-Phan_Van_Luan.pdf" download="CV-Phan_Van_Luan.pdf">
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </a>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1000}>
              <div className="flex justify-center lg:justify-start space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open("https://github.com/luanpv2003", "_blank")}
                  className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                >
                  <Github className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={scrollToContact}
                  className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                >
                  <Mail className="w-6 h-6" />
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex justify-center lg:justify-end">
            <ScrollReveal delay={400}>
              <div className="relative">
                <div className="w-80 h-80 rounded-3xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500 bg-gradient-to-br from-blue-500 to-indigo-600 p-1">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-white">
                    <Image
                      src="/images/profile-photo.jpeg"
                      alt="Phan Van Luan - Web Developer"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover object-center"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>Nam Tu Liem, Hanoi</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
