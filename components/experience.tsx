import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "CoolMate",
      period: "August 2024 - Present",
      location: "",
      type: "Full-time",
      description:
        "Working as a frontend developer at CoolMate, Vietnam's leading men's fashion e-commerce platform, focusing on bug fixing, UI design, and building the new website version 2.",
      achievements: [
        "Fixed critical bugs and improved website stability and performance",
        "Designed and implemented modern user interfaces for better user experience",
        "Led development of CoolMate website version 2 with enhanced features",
        "Collaborated with design team to create responsive and mobile-friendly layouts",
        "Optimized frontend performance and loading speeds across all pages",
        "Implemented new product showcase and filtering systems for v2",
        "Ensured cross-browser compatibility and accessibility standards",
        "Maintained and refactored existing codebase for better maintainability",
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
    },
    {
      title: "Backend Developer",
      company: "TECHNOX Company",
      period: "January 2024 - June 2024",
      location: "",
      type: "Full-time",
      description: "Worked as a backend developer focusing on e-commerce solutions and real-time features.",
      achievements: [
        "Developed and maintained backend systems for e-commerce platform",
        "Implemented real-time chat functionality using Laravel Reverb",
        "Integrated payment gateway solutions",
        "Built advanced product search features",
        "Deployed applications on Nginx servers",
        "Collaborated with a team of 5 developers",
      ],
      technologies: ["PHP", "Laravel", "MySQL", "Nginx", "JavaScript"],
    },
    {
      title: "Intern Backend Developer",
      company: "IT Lab FPOLY",
      period: "May 2023 - December 2023",
      location: "",
      type: "Internship",
      description: "Started my professional journey as an intern, learning backend development fundamentals.",
      achievements: [
        "Learned backend development best practices",
        "Worked on various web development projects",
        "Gained experience with database design and management",
        "Collaborated with senior developers on real projects",
        "Developed problem-solving and debugging skills",
      ],
      technologies: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-5 md:px-4 bg-white/50 backdrop-blur-sm">
      <div className="lg:container lg:mx-auto lg:max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Work Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My professional journey in web development, building expertise through hands-on experience.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 300}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-gray-900 mb-2">{exp.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <div className="flex items-center">
                          <Building className="w-4 h-4 mr-2 text-blue-600" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                          <span>{exp.period}</span>
                        </div>
                        {exp.location && (
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                            <span>{exp.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-3 py-1">
                      {exp.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6 text-lg">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-blue-200 text-blue-700 hover:bg-blue-50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
