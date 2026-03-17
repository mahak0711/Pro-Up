# Deployment Guide

This guide covers deploying your full-stack app with:
- **Frontend**: Vercel (React SPA)
- **Backend**: Render (Express + Prisma)
- **Database**: Neon PostgreSQL

## Prerequisites

1. GitHub account with your code pushed
2. Neon PostgreSQL database (you already have this)
3. Vercel account
4. Render account

---

## Step 1: Deploy Backend to Render

### 1.1 Create Render Account
- Go to https://render.com
- Sign up with your GitHub account

### 1.2 Create New Web Service
1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository: `mahak0711/Pro-Up`
3. Render will detect `render.yaml` automatically

### 1.3 Configure Environment Variables
Add these environment variables in Render dashboard:

| Key | Value |
|-----|-------|
| `DATABASE_URL` | Your Neon PostgreSQL connection string |
| `JWT_SECRET` | Any random string (e.g., `your-secret-key-12345`) |
| `NODE_ENV` | `production` |

**Important**: Use the same `DATABASE_URL` from your Neon database.

### 1.4 Deploy
1. Click **"Create Web Service"**
2. Wait for deployment to complete (~5 minutes)
3. Copy your Render URL (e.g., `https://proup-backend.onrender.com`)

---

## Step 2: Configure Frontend for Production

### 2.1 Add Environment Variable to Vercel
1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add:
   - **Key**: `VITE_API_URL`
   - **Value**: Your Render backend URL (e.g., `https://proup-backend.onrender.com`)
   - **Environments**: Production, Preview, Development

### 2.2 Redeploy Frontend
1. Go to **Deployments** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**

---

## Step 3: Update CORS on Backend (if needed)

If you get CORS errors, update `server/index.ts` to allow your Vercel domain:

```typescript
app.use(cors({
  origin: ['https://your-app.vercel.app', 'http://localhost:8080'],
  credentials: true
}));
```

---

## Local Development

For local development, the app will continue to work as before:
- Frontend: `http://localhost:8080` (Vite dev server)
- Backend: Integrated with Vite (no separate server needed)
- Database: Your local SQLite or Neon PostgreSQL

Run: `pnpm dev`

---

## Architecture

```
┌─────────────────┐
│  Vercel         │
│  (Frontend SPA) │
│  React + Vite   │
└────────┬────────┘
         │
         │ API calls via VITE_API_URL
         │
         ▼
┌─────────────────┐
│  Render         │
│  (Backend API)  │
│  Express + Node │
└────────┬────────┘
         │
         │ Prisma ORM
         │
         ▼
┌─────────────────┐
│  Neon           │
│  (PostgreSQL)   │
└─────────────────┘
```

---

## Troubleshooting

### Frontend shows 405 errors
- Make sure `VITE_API_URL` is set in Vercel environment variables
- Redeploy frontend after adding the variable

### Backend won't start on Render
- Check environment variables are set correctly
- Verify `DATABASE_URL` is valid
- Check Render logs for errors

### Database connection errors
- Ensure `DATABASE_URL` includes `?sslmode=require`
- Run migrations: Render will run `pnpm db:migrate:deploy` automatically

---

## Cost

- **Vercel**: Free tier (hobby plan)
- **Render**: Free tier (spins down after inactivity, cold starts ~30s)
- **Neon**: Free tier (0.5 GB storage)

**Total**: $0/month for hobby projects! 🎉
