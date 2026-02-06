# Email Configuration Setup

## Web3Forms - Free Email Service

This project uses **Web3Forms** for handling contact form submissions. It's completely free and doesn't require a backend.

### Setup Instructions

1. **Get your FREE Access Key:**
   - Visit: https://web3forms.com
   - Enter your email (info@broshomerjc.com)
   - Click "Get Access Key"
   - You'll receive your access key via email instantly

2. **Configure the Access Key:**
   - Open the `.env.local` file in the project root
   - Replace `YOUR_ACCESS_KEY_HERE` with your actual access key:
     ```
     NEXT_PUBLIC_WEB3FORMS_KEY=your-actual-key-here
     ```

3. **Restart the development server:**
   ```bash
   npm run dev
   ```

4. **Test the form:**
   - Go to http://localhost:3000
   - Scroll to the contact form
   - Fill it out and submit
   - You should receive an email at info@broshomerjc.com

### Features

✅ **Free Plan includes:**
- 250 submissions per month
- Email notifications
- No backend required
- Spam protection
- Custom email templates

✅ **What's configured:**
- Sends to: info@broshomerjc.com
- Subject: "New Quote Request from [Customer Name]"
- Includes all form fields: name, email, phone, project type, message

### Troubleshooting

**Form not sending?**
- Make sure you added the access key to `.env.local`
- Restart the dev server after adding the key
- Check browser console for errors

**Not receiving emails?**
- Check your spam folder
- Verify the email in your Web3Forms dashboard
- Make sure you confirmed your email with Web3Forms

### Alternative: Using a Different Email Service

If you prefer another service, you can easily swap Web3Forms with:
- **EmailJS** - https://emailjs.com (200 emails/month free)
- **Formspree** - https://formspree.io (50 submissions/month free)
- **Resend** - https://resend.com (Requires API route)
