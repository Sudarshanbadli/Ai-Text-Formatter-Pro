# Formspree Setup Instructions

## How to Set Up Your Contact Form

The contact form in this project now uses Formspree as the primary method for sending emails. Here's how to set it up properly:

## Step 1: Create a Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Click "Get Started Free" 
3. Sign up for an account (you can use your Google account or email)

## Step 2: Create a New Form

1. After logging in, click "Create Form"
2. Choose the "HTML Form" option
3. Enter your email address: **brainhacker7sb@gmail.com**
4. Click "Create Form"

## Step 3: Get Your Form ID

1. After creating the form, you'll see a page with your form endpoint
2. Your form ID will be visible in the URL and endpoint
3. It looks like this: `https://formspree.io/f/{form_id}`

## Step 4: Update Your Form ID (If needed)

The form is already configured with a working Formspree endpoint, but if you want to use your own:

1. Open `old-paper-index.html`
2. Find the form action attribute: `action="https://formspree.io/f/mqkvrbzw"`
3. Replace `mqkvrbzw` with your own form ID

## Step 5: Test Your Form

1. Open `old-paper-index.html` in your browser
2. Fill out the contact form in the footer
3. Submit the form
4. Check your email (brainhacker7sb@gmail.com) for the test message

## Troubleshooting

If you're not receiving emails:

1. Check your spam/junk folder
2. Make sure you've confirmed your email address with Formspree
3. Verify that your form ID is correct
4. Ensure JavaScript is enabled in your browser

## Why Formspree?

Formspree is used because:
- It works without server-side code
- It's free for basic usage
- It's reliable and handles spam protection
- It works on static websites
- No need to configure server mail settings

## Questions?

If you have any issues setting up the form, please contact:
**brainhacker7sb@gmail.com**