import type React from "react"
interface EmailTemplateProps {
  name: string
  email: string
  subject: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, subject, message }) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#f9fafb",
    }}
  >
    <div
      style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ borderBottom: "3px solid #2563eb", paddingBottom: "20px", marginBottom: "30px" }}>
        <h1 style={{ color: "#1f2937", margin: "0", fontSize: "24px" }}>New Portfolio Contact</h1>
        <p style={{ color: "#6b7280", margin: "5px 0 0 0" }}>
          You have received a new message from your portfolio website
        </p>
      </div>

      <div style={{ marginBottom: "25px" }}>
        <h3 style={{ color: "#374151", margin: "0 0 10px 0", fontSize: "16px" }}>Contact Information:</h3>
        <div style={{ backgroundColor: "#f3f4f6", padding: "15px", borderRadius: "8px" }}>
          <p style={{ margin: "5px 0", color: "#4b5563" }}>
            <strong>Name:</strong> {name}
          </p>
          <p style={{ margin: "5px 0", color: "#4b5563" }}>
            <strong>Email:</strong> {email}
          </p>
          <p style={{ margin: "5px 0", color: "#4b5563" }}>
            <strong>Subject:</strong> {subject}
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "25px" }}>
        <h3 style={{ color: "#374151", margin: "0 0 10px 0", fontSize: "16px" }}>Message:</h3>
        <div
          style={{ backgroundColor: "#f9fafb", padding: "20px", borderRadius: "8px", borderLeft: "4px solid #2563eb" }}
        >
          <p style={{ color: "#374151", lineHeight: "1.6", margin: "0", whiteSpace: "pre-wrap" }}>{message}</p>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "20px", textAlign: "center" }}>
        <p style={{ color: "#9ca3af", fontSize: "14px", margin: "0" }}>
          This email was sent from your portfolio contact form at {new Date().toLocaleString()}
        </p>
      </div>
    </div>
  </div>
)
