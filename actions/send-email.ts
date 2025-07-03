"use server"

export async function sendEmail(prevState: any, formData: FormData) {
  // Check if formData exists
  if (!formData) {
    return {
      success: false,
      message: "Form data is missing. Please try again.",
    }
  }

  try {
    const name = formData.get("name")?.toString() || ""
    const email = formData.get("email")?.toString() || ""
    const subject = formData.get("subject")?.toString() || ""
    const message = formData.get("message")?.toString() || ""

    // Validate the form data
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      return {
        success: false,
        message: "Please fill in all fields.",
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      }
    }

    // Simulate email processing
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Log the message details (in production, this would be sent via email service)
    console.log("📧 New Contact Form Submission:")
    console.log("================================")
    console.log(`Name: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Subject: ${subject}`)
    console.log(`Message: ${message}`)
    console.log(`Timestamp: ${new Date().toLocaleString()}`)
    console.log("================================")

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error processing form:", error)
    return {
      success: false,
      message: "Sorry, there was an error processing your message. Please try again later.",
    }
  }
}
