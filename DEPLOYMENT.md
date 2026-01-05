# Deployment Guide

This guide will walk you through deploying your **EduLux Course Platform**:
1.  **Frontend** (React) to [Vercel](https://vercel.com)
2.  **Backend** (Node.js/Express) to [Render](https://render.com)
3.  **Database** (MongoDB Atlas) - Already set up!

---

## 1. Push to GitHub

First, you need to push your local code to a GitHub repository.

1.  **Create a New Repository** on [GitHub](https://github.com/new).
    *   Name it something like `edulux-course-platform`.
    *   Initialize it as **Public** or **Private** (Private recommended).
    *   **Do not** add a README, .gitignore, or license (we already have them).

2.  **Open your Terminal** in VS Code (root directory) and run:

    ```bash
    git init
    git add .
    git commit -m "Initial commit for deployment"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/edulux-course-platform.git
    git push -u origin main
    ```
    *(Replace `YOUR_USERNAME` and the URL with your actual repo URL)*

---

## 2. Deploy Backend (Render)

We will deploy the `server` folder as a Web Service.

1.  Log in to [Render](https://dashboard.render.com/).
2.  Click **New +** -> **Web Service**.
3.  Connect your GitHub repository.
4.  Configure the settings:
    *   **Name**: `edulux-api` (or similar)
    *   **Region**: Choose strictly the one closest to you (e.g., Singapore, Oregon).
    *   **Branch**: `main`
    *   **Root Directory**: `server` (Important!)
    *   **Runtime**: `Node`
    *   **Build Command**: `npm install`
    *   **Start Command**: `npm start`
    *   **Plan**: Free

5.  **Environment Variables** (Scroll down to "Environment"):
    *   Add `MONGODB_URI`: Paste your MongoDB Atlas connection string (from your `.env`).
    *   Add `NODE_ENV`: `production`
    *   Add `PORT`: `10000` (Render uses this port internally, or let it default).
    *   Add `EMAIL_USER` / `EMAIL_PASS`: Your email credentials if you want emails to work.

6.  Click **Create Web Service**.
    *   Wait for deployment. Once live, copy the **Service URL** (e.g., `https://edulux-api.onrender.com`).
    *   **Keep this URL safe!** You need it for the frontend.

---

## 3. Deploy Frontend (Vercel)

We will deploy the `client` folder.

1.  Log in to [Vercel](https://vercel.com/dashboard).
2.  Click **Add New...** -> **Project**.
3.  Import your GitHub repository.
4.  Configure the settings:
    *   **Framework Preset**: Vite
    *   **Root Directory**: Click "Edit" and select `client`.
    *   **Build Command**: `vite build` (Default)
    *   **Output Directory**: `dist` (Default)
    *   **Install Command**: `npm install` (Default)

5.  **Environment Variables**:
    *   Add `VITE_API_URL`: Paste your **Render Backend URL** (e.g., `https://edulux-api.onrender.com/api`).
    *   **Important**: Make sure to add `/api` at the end if your backend routes are prefixed with `/api`.

6.  Click **Deploy**.
    *   Vercel will build and deploy your site.
    *   Once done, you'll get a production URL (e.g., `https://edulux-platform.vercel.app`).

---

## 4. Final Configuration

1.  **(Optional) Update Admin/CORS**:
    *   If you added strict CORS settings in `server.js`, you might need to update the allowed origin to your new Vercel URL.
    *   Currently, we are using `cors()` which defaults to allowing all, so it should work out of the box!

2.  **Test the Live Site**:
    *   Visit your Vercel URL.
    *   Try browsing courses.
    *   Try adding to cart and verifying payment.
    *   Check if images load (uploading images might be tricky on free Render plans as they wipe disk on restart. For production, you'd typically use AWS S3 or Cloudinary. For now, uploads will disappear if the server restarts).

**Enjoy your live platform!** 🚀
