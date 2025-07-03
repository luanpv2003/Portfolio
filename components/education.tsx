import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, User, Calendar, MapPin } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function Education() {
  const education = [
    {
      institution: "FPT Polytechnic Ha Noi",
      degree: "Web Development",
      gpa: "9.0",
      classification: "High Distinction",
      period: "2021 - 2023",
      location: "Hanoi, Vietnam",
      achievements: [
        "Top 150 Best student with highest grade (Fall 2021, Spring 2022, Summer 2022, Spring 2023)",
        "Graduated with High Distinction classification",
        "Maintained excellent academic performance throughout the program",
        "Specialized in modern web development technologies and frameworks",
      ],
      highlights: ["GPA 9.0", "High Distinction", "Top 150 Student"],
    },
  ]

  return (
    <section id="education" className="py-20 px-5 md:px-4 bg-gray-50">
      <div className="lg:container lg:mx-auto lg:max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Education & Awards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My academic journey and achievements that laid the foundation for my professional career.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <ScrollReveal key={index} delay={index * 300}>
              <Card className="border-0 shadow-lg bg-white p-8">
                <CardContent className="p-0">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <GraduationCap className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{edu.institution}</h3>
                      </div>

                      <div className="flex flex-wrap items-center gap-6 text-gray-600">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2 text-gray-400" />
                          <span>{edu.degree}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {edu.highlights.map((highlight, hIndex) => (
                        <Badge
                          key={hIndex}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Academic Performance */}
                    <div className="bg-blue-50 rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-6">Academic Performance</h4>

                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">GPA:</span>
                          <span className="text-4xl font-bold text-blue-600">{edu.gpa}/10</span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">Classification:</span>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 px-3 py-1">
                            {edu.classification}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-6">Key Achievements:</h4>
                      <ul className="space-y-4">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                            <span className="text-gray-700 leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
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
