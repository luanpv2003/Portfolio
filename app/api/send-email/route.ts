import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, attachments = [] } = await request.json()

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 },
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email address",
        },
        { status: 400 },
      )
    }

    // Prepare attachments for Resend (if any)
    const resendAttachments = attachments.map((file: any) => ({
      filename: file.name,
      content: file.content,
      content_type: file.type,
    }))

    // Create attachment list for email content
    const attachmentList =
      attachments.length > 0
        ? attachments.map((file: any) => `📎 ${file.name} (${(file.size / 1024).toFixed(1)} KB)`).join("\n")
        : ""

    // Prepare email data according to Resend API documentation
    const emailData = {
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["luanpv2003@gmail.com"],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background-color: white; padding: 32px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
            
            <!-- Header -->
            <div style="border-bottom: 3px solid #2563eb; padding-bottom: 24px; margin-bottom: 32px;">
              <h1 style="color: #1f2937; margin: 0; font-size: 28px; font-weight: 700;">📧 New Portfolio Contact</h1>
              <p style="color: #6b7280; margin: 8px 0 0 0; font-size: 16px;">You have received a new message from your portfolio website</p>
            </div>
            
            <!-- Contact Information -->
            <div style="margin-bottom: 28px;">
              <h3 style="color: #374151; margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">👤 Contact Information</h3>
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 4px 0; color: #4b5563; font-weight: 600; width: 80px;">Name:</td>
                    <td style="padding: 4px 0; color: #1f2937;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #4b5563; font-weight: 600;">Email:</td>
                    <td style="padding: 4px 0; color: #1f2937;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #4b5563; font-weight: 600;">Subject:</td>
                    <td style="padding: 4px 0; color: #1f2937; font-weight: 500;">${subject}</td>
                  </tr>
                </table>
              </div>
            </div>
            
            <!-- Message Content -->
            <div style="margin-bottom: 28px;">
              <h3 style="color: #374151; margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">💬 Message</h3>
              <div style="background-color: #f9fafb; padding: 24px; border-radius: 8px; border-left: 4px solid #2563eb;">
                <p style="color: #374151; line-height: 1.7; margin: 0; white-space: pre-wrap; font-size: 15px;">${message}</p>
              </div>
            </div>
            
            ${
              attachments.length > 0
                ? `
            <!-- Attachments -->
            <div style="margin-bottom: 28px;">
              <h3 style="color: #374151; margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">📎 Attachments (${attachments.length})</h3>
              <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                <p style="color: #92400e; line-height: 1.6; margin: 0; font-size: 14px; white-space: pre-line;">${attachmentList}</p>
              </div>
            </div>
            `
                : ""
            }
            
            <!-- Action Button -->
            <div style="text-align: center; margin-bottom: 28px;">
              <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" 
                 style="display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">
                📧 Reply to ${name}
              </a>
            </div>
            
            <!-- Footer -->
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center;">
              <p style="color: #9ca3af; font-size: 13px; margin: 0;">
                📅 Sent from your portfolio contact form on ${new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
            
          </div>
        </div>
      `,
      text: `
New Portfolio Contact

Contact Information:
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

${attachments.length > 0 ? `\nAttachments (${attachments.length}):\n${attachmentList}` : ""}

---
This email was sent from your portfolio contact form on ${new Date().toLocaleString()}.
Reply directly to this email to respond to ${name}.
      `,
      reply_to: email,
      ...(resendAttachments.length > 0 && { attachments: resendAttachments }),
    }

    // Send email using Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })

    const result = await response.json()

    if (!response.ok) {
      console.error("Resend API error:", result)
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email. Please try again later.",
          error: result,
        },
        { status: response.status },
      )
    }

    console.log("✅ Email sent successfully:", {
      emailId: result.id,
      to: emailData.to,
      subject: emailData.subject,
      attachments: attachments.length,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: `Thank you for your message${attachments.length > 0 ? ` and ${attachments.length} attachment${attachments.length > 1 ? "s" : ""}` : ""}! I'll get back to you soon.`,
      emailId: result.id,
    })
  } catch (error) {
    console.error("❌ Error in send-email API:", error)
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 },
    )
  }
}
