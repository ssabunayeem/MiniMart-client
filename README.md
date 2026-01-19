# 🛒 MiniMart – Frontend (Next.js)

MiniMart is a simple product listing web application built with **Next.js (App Router)**.  
It features a modern landing page, public product catalog, product details, and a protected page for adding new products using mock authentication.

🔗 **Live Site:** https://mini-mart-client-six.vercel.app/  
🔗 **Backend API:** https://minimart-server-f7td.onrender.com/

---

## 🚀 Features

- Modern landing page with 7 content sections
- Public product listing page
- Dynamic product details page
- Mock authentication using cookies
- Protected “Add Item” page (login required)
- Responsive UI with Tailwind CSS
- Animated UI elements for better UX

---

## 🔐 Login Credentials (Mock Authentication)

Use the following credentials to access protected routes:

- **Email:** `user@example.com`
- **Password:** `password`

---

## 🗂️ Routes Overview

| Route         | Description                        |
| ------------- | ---------------------------------- |
| `/`           | Landing page                       |
| `/login`      | Login page                         |
| `/items`      | Public product list                |
| `/items/[id]` | Product details                    |
| `/add-item`   | Protected page to add new products |

---

## 🛠️ Technologies Used

- **Next.js 15/16** (App Router)
- **JavaScript**
- **Tailwind CSS**
- **Next/Image** (with external image domains)
- **Fetch API**
- **Cookie-based authentication**

---

## ⚙️ Setup & Installation (Local)

```bash
git clone https://github.com/ssabunayeem/MiniMart-client.git
cd MiniMart-client
npm install
npm run dev
