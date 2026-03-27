# 🚀 Sommaire AI — PDF Summarizer

Sommaire AI is an AI-powered web application that allows users to upload PDF documents and instantly generate concise, high-quality summaries using advanced language models. It is designed to save time for students, professionals, and researchers by extracting key insights from lengthy documents.

---

## ✨ Features

* 📄 Upload and summarize PDF files instantly
* 🤖 AI-powered text summarization (multi-model support)
* 🔐 Secure authentication using Clerk
* 💳 Integrated payment system (Stripe test mode)
* ⚡ Fast and responsive UI built with Next.js
* ☁️ Fully deployed and production-ready

---

## 🧠 How It Works (Application Flow)

1. 🔐 **Authentication**
   Users sign up or log in securely using Clerk

2. 💳 **Subscription / Payment**
   Users choose between **Basic** and **Pro** plans via Stripe (test mode)

3. 📄 **PDF Upload**
   Users upload PDF files using UploadThing

4. 🤖 **AI Processing Pipeline**

   * PDF content is extracted and processed using LangChain
   * The processed text is sent to AI models
   * Summarization is performed using:

     * OpenAI API
     * Google Gemini API

5. 📑 **Summarized Output**
   The system generates a concise and structured summary for the user

---

## 🛠️ Tech Stack

* **Frontend:** Next.js, React, Tailwind CSS
* **Backend:** Next.js API Routes
* **Authentication:** Clerk
* **Payments:** Stripe (Test Mode)
* **File Uploads:** UploadThing
* **AI Processing:** LangChain
* **AI Models:** OpenAI API, Google Gemini API
* **Deployment:** Vercel

---

## 🔑 Environment Variables

Create a `.env.local` file and add:

```env
NEXT_PUBLIC_ORIGIN_URL=http://localhost:3000
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_public_key
CLERK_SECRET_KEY=your_clerk_secret
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_public_key
OPENAI_API_KEY=your_openai_key
GEMINI_API_KEY=your_gemini_key
UPLOADTHING_SECRET=your_uploadthing_secret
```

---

## 💳 Test Payment Details

Use Stripe test card:

```
Card Number: 4242 4242 4242 4242
Expiry: Any future date
CVC: Any 3 digits
```

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/Jayesh-git10/Sommaire-AI---PDF-SUMMARISER
cd sommaire-ai
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

---

## 🌍 Deployment

The app is deployed on Vercel and accessible via:

```
https://sommaire-ai-pdf-summariser.vercel.app
```

---

## 📌 Future Improvements

* 📊 Improved summarization using advanced AI models
* 👥 Collaboration and document sharing
* 📱 Mobile-first optimization
* 📈 Analytics for document insights

---

## 💡 Author

Developed by **Jayesh Sharma**
