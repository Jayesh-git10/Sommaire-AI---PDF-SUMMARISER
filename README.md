# 🚀 Sommaire AI — PDF Summarizer

Sommaire AI is an AI-powered web application that allows users to upload PDF documents and instantly generate concise, high-quality summaries. It is designed to save time for students, professionals, and researchers by extracting key insights from lengthy documents.

---

## ✨ Features

* 📄 Upload and summarize PDF files instantly
* 🤖 AI-powered text summarization
* 🔐 Secure authentication using Clerk
* 💳 Integrated payment system (Stripe test mode)
* ⚡ Fast and responsive UI built with Next.js
* ☁️ Fully deployed and production-ready

---

## 🧠 How It Works

1. User signs in using secure authentication
2. Uploads a PDF document
3. AI processes the content
4. Generates a concise summary
5. Optional: Unlock premium features via payment

---

## 🛠️ Tech Stack

* **Frontend:** Next.js, React, Tailwind CSS
* **Backend:** Next.js API Routes
* **Authentication:** Clerk
* **Payments:** Stripe (Test Mode)
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
https://your-project-name.vercel.app
```

---

## 📌 Future Improvements

* 📊 Better summarization accuracy using advanced models
* 👥 Collaboration and sharing features
* 🎵 Integration with other AI tools
* 📱 Mobile-first optimization

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 💡 Author

Developed by **Jayesh Sharma**

---
