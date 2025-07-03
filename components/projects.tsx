import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Users, Calendar } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function Projects() {
  const projects = [
    {
      title: "CoolMate E-Commerce Platform",
      description:
        "Vietnam's leading men's fashion e-commerce platform where I worked as a Frontend Developer, focusing on bug fixing, UI design, and building the new website version 2 with enhanced user experience and modern features.",
      image: "/placeholder.svg?height=300&width=500",
      role: "Frontend Developer",
      teamSize: "Frontend Team",
      duration: "August 2024 - Present",
      features: [
        "Designed and implemented modern user interfaces for better UX",
        "Fixed critical bugs and improved website stability",
        "Led development of CoolMate website version 2",
        "Built responsive product showcase and filtering systems",
        "Optimized frontend performance and loading speeds",
        "Implemented cross-browser compatibility and accessibility",
        "Created interactive shopping cart and checkout flow",
        "Developed mobile-first responsive design approach",
      ],
      technologies: [
        "React.js",
        "Redux Toolkit",
        "TanStack Query",
        "Vue.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      liveUrl: "https://www.coolmate.me",
      githubUrl: "#",
      highlights: ["E-Commerce Platform", "Website V2", "UI/UX Design"],
    },
    {
      title: "E-Commerce Platform (muagi.vn)",
      description:
        "A comprehensive e-commerce solution with real-time features, payment integration, and advanced search capabilities. Built as part of a collaborative team project at TECHNOX.",
      image: "/placeholder.svg?height=300&width=500",
      role: "Backend Developer",
      teamSize: "5 members",
      duration: "February 2024 - June 2024",
      features: [
        "Real-time chat functionality using Laravel Reverb",
        "Payment gateway integration for secure transactions",
        "Advanced product search by seller name and product name",
        "Database analysis and design optimization",
        "Nginx server deployment and configuration",
        "Comprehensive debugging and troubleshooting",
      ],
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap", "Nginx", "Laravel Reverb"],
      liveUrl: "https://muagi.vn",
      githubUrl: "#",
      highlights: ["Real-time Features", "Payment Integration", "Team Collaboration"],
    },
    {
      title: "FPOLY Social Website",
      description:
        "A social networking platform developed during my internship at IT Lab FPOLY, featuring user interactions, content sharing, and community building functionalities for students and faculty.",
      image: "/placeholder.svg?height=300&width=500",
      role: "Backend Developer",
      teamSize: "4 members",
      duration: "2023",
      features: [
        "User registration and authentication system",
        "Post creation and content sharing functionality",
        "Real-time notifications and messaging",
        "User profile management and customization",
        "Friend connections and social interactions",
        "Content moderation and admin dashboard",
      ],
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "jQuery", "HTML", "CSS"],
      liveUrl: "#",
      githubUrl: "#",
      highlights: ["Social Platform", "Real-time Features", "Community Building"],
    },
  ]

  return (
    <section id="projects" className="py-20 px-5 md:px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="lg:container lg:mx-auto lg:max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work that demonstrates my technical skills and problem-solving abilities.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Sticky Image Section */}
                <div className={`lg:sticky lg:top-24 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center relative">
                      <div className="text-6xl opacity-30">🚀</div>
                      {/* Floating badges */}
                      <div className="absolute top-4 left-4">
                        <div className="flex flex-wrap gap-2">
                          {project.highlights.map((highlight, hIndex) => (
                            <Badge key={hIndex} className="bg-blue-600 text-white shadow-lg">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      {/* Tech stack preview */}
                      <div className="absolute bottom-4 right-4">
                        <div className="flex flex-wrap gap-1 max-w-48">
                          {project.technologies.slice(0, 3).map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs bg-white/80 text-gray-700">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="secondary" className="text-xs bg-white/80 text-gray-700">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Content Section */}
                <div className={`space-y-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1 text-blue-600" />
                        <span>{project.teamSize}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 text-blue-600" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-blue-600 font-semibold text-lg mb-6">{project.role}</p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">{project.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 text-xl">Key Features:</h4>
                    <div className="grid gap-3">
                      {project.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start group">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                          <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 text-xl">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 bg-transparent"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
