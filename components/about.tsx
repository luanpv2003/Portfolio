import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Zap } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function About() {
  return (
    <section id="about" className="py-20 px-5 md:px-4 bg-white/50 backdrop-blur-sm">
      <div className="lg:container lg:mx-auto lg:max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating beautiful, functional, and user-centered digital experiences. I bring ideas to
              life through clean code and modern design.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                As a dedicated web developer with 1 year of hands-on experience, I specialize in building modern,
                responsive applications using cutting-edge technologies. My journey in web development has been driven
                by curiosity and a passion for solving complex problems.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                I have experience working with both frontend and backend technologies, from creating interactive user
                interfaces with React to building robust server-side applications with Laravel and Node.js. I believe in
                writing clean, maintainable code and staying updated with the latest industry trends.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {["React", "Laravel", "JavaScript", "TypeScript", "PHP", "Node.js", "MySQL", "MongoDB"].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium hover:shadow-md transition-shadow duration-300"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ScrollReveal delay={400}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Frontend Development</h3>
                  <p className="text-gray-600">
                    Building responsive and interactive user interfaces with React, Redux, and modern CSS frameworks.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-50 to-purple-50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Backend Development</h3>
                  <p className="text-gray-600">
                    Creating robust server-side applications with Laravel, Node.js, and database management.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={800}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Stack</h3>
                  <p className="text-gray-600">End-to-end web application development from concept to deployment.</p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={1000}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-pink-50 to-red-50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance</h3>
                  <p className="text-gray-600">
                    Optimizing applications for speed, scalability, and exceptional user experience.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
