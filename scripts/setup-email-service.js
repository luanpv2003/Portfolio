// Instructions for setting up email service

console.log(`
📧 EMAIL SERVICE SETUP INSTRUCTIONS

To enable email functionality, you need to set up an email service. Here are the recommended options:

1. RESEND (Recommended for Next.js):
   - Sign up at https://resend.com
   - Get your API key
   - Add to environment variables: RESEND_API_KEY=your_key_here
   - Verify your domain or use their test domain

2. SENDGRID:
   - Sign up at https://sendgrid.com
   - Get your API key
   - Add to environment variables: SENDGRID_API_KEY=your_key_here

3. NODEMAILER with Gmail:
   - Enable 2-factor authentication on Gmail
   - Generate an app password
   - Add to environment variables:
     GMAIL_USER=your_email@gmail.com
     GMAIL_PASS=your_app_password

4. EMAILJS (Client-side):
   - Sign up at https://www.emailjs.com
   - Set up email template
   - Add public key to environment variables

Current setup:
- Form validation ✅
- Server action ✅
- Error handling ✅
- Loading states ✅
- Success/error messages ✅

Next steps:
1. Choose an email service
2. Add environment variables
3. Update the sendEmail function with your chosen service
4. Test the contact form

The form will send emails to: luanpv2003@gmail.com
`)
