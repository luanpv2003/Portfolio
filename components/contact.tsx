"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, CheckCircle, AlertCircle, Copy, Paperclip, X } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { useState, useRef } from "react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)
  const [copied, setCopied] = useState(false)
  const [attachments, setAttachments] = useState<File[]>([])
  const formRef = useRef<HTMLFormElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("luanpv2003@gmail.com")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const validFiles = files.filter((file) => {
      // Limit file size to 10MB
      if (file.size > 10 * 1024 * 1024) {
        setSubmitStatus({
          success: false,
          message: `File "${file.name}" is too large. Maximum size is 10MB.`,
        })
        return false
      }
      return true
    })

    setAttachments((prev) => [...prev, ...validFiles])
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate form
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setSubmitStatus({
        success: false,
        message: "Please fill in all fields.",
      })
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setSubmitStatus({
        success: false,
        message: "Please enter a valid email address.",
      })
      setIsSubmitting(false)
      return
    }

    try {
      // Convert files to base64 for sending
      const attachmentPromises = attachments.map(async (file) => {
        return new Promise<{ name: string; content: string; type: string; size: number }>((resolve) => {
          const reader = new FileReader()
          reader.onload = () => {
            const base64 = (reader.result as string).split(",")[1]
            resolve({
              name: file.name,
              content: base64,
              type: file.type,
              size: file.size,
            })
          }
          reader.readAsDataURL(file)
        })
      })

      const attachmentData = await Promise.all(attachmentPromises)

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
          attachments: attachmentData,
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus({
          success: true,
          message: result.message,
        })
        formRef.current?.reset()
        setAttachments([])
      } else {
        setSubmitStatus({
          success: false,
          message: result.message || "Failed to send email. Please try again.",
        })
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus({
        success: false,
        message: "Network error. Please check your connection and try again.",
      })
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 px-5 md:px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="lg:container lg:mx-auto lg:max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together
              to bring your ideas to life.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal delay={200}>
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Email</p>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-600">luanpv2003@gmail.com</p>
                      <Button variant="ghost" size="sm" onClick={copyEmail} className="h-6 w-6 p-0 hover:bg-blue-100">
                        <Copy className="w-3 h-3" />
                      </Button>
                      {copied && <span className="text-xs text-green-600">Copied!</span>}
                    </div>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">0968768464</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">Tay Mo, Nam Tu Liem, Hanoi</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">GitHub</p>
                    <a
                      href="https://github.com/luanpv2003"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      github.com/luanpv2003
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Send a Message</CardTitle>
                <p className="text-gray-600">Your message will be sent directly to my email!</p>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      required
                      disabled={isSubmitting}
                      className="border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300 disabled:opacity-50"
                    />
                    <Input
                      name="email"
                      placeholder="Your Email"
                      type="email"
                      required
                      disabled={isSubmitting}
                      className="border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300 disabled:opacity-50"
                    />
                  </div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    required
                    disabled={isSubmitting}
                    className="border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300 disabled:opacity-50"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    required
                    disabled={isSubmitting}
                    className="border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300 disabled:opacity-50"
                  />

                  {/* File Upload Section */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-gray-700">Attachments (Optional)</label>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={isSubmitting}
                        className="text-blue-600 border-blue-200 hover:bg-blue-50"
                      >
                        <Paperclip className="w-4 h-4 mr-2" />
                        Add Files
                      </Button>
                    </div>

                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      onChange={handleFileSelect}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif,.zip,.rar"
                    />

                    {/* Attachment List */}
                    {attachments.length > 0 && (
                      <div className="space-y-2">
                        {attachments.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
                          >
                            <div className="flex items-center space-x-3">
                              <Paperclip className="w-4 h-4 text-gray-500" />
                              <div>
                                <p className="text-sm font-medium text-gray-900 truncate max-w-48">{file.name}</p>
                                <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                              </div>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeAttachment(index)}
                              disabled={isSubmitting}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                        <p className="text-xs text-gray-500">
                          Maximum file size: 10MB. Supported formats: PDF, DOC, TXT, Images, ZIP
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Status Message */}
                  {submitStatus && (
                    <div
                      className={`p-4 rounded-lg flex items-start gap-3 ${
                        submitStatus.success
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                    >
                      {submitStatus.success ? (
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      )}
                      <span className="text-sm leading-relaxed">{submitStatus.message}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Email...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                        {attachments.length > 0 && (
                          <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded">
                            +{attachments.length} file{attachments.length > 1 ? "s" : ""}
                          </span>
                        )}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
