import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "./scroll-reveal"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["JavaScript", "TypeScript", "PHP", "HTML", "CSS", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      icon: "⚛️",
      skills: ["React.js", "Laravel", "Redux", "Node.js", "Express.js", "React Query", "Socket.io"],
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "UI/UX & Styling",
      icon: "🎨",
      skills: ["Tailwind CSS", "Bootstrap", "Material-UI", "Ant Design", "Sass"],
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Git", "Docker", "Nginx", "Figma", "Postman", "Jira", "Canvas"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-5 md:px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="lg:container lg:mx-auto lg:max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technologies and tools I work with to build modern web applications.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm h-full">
                <CardHeader className="pb-4">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <CardTitle className="text-lg text-gray-900">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 hover:from-blue-200 hover:to-indigo-200 transition-all duration-300 px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
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
