# ProUp 🚀

A modern, full-stack project management and productivity platform built with React, TypeScript, and Express. ProUp combines powerful project management tools with collaborative features, real-time updates, and an intuitive interface.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

## ✨ Features

### 📊 Project Management
- **Dashboard** - Comprehensive overview of all projects and tasks
- **Project Details** - Deep dive into individual projects with task management
- **My Tasks** - Personal task view across all projects
- **Sprint Retrospectives** - Agile sprint planning and review tools

### 📝 Productivity Tools
- **Document Editor** - Rich text editing with TipTap
- **Spreadsheet Editor** - Excel-like spreadsheet functionality with ReactGrid
- **Whiteboard** - Collaborative drawing and diagramming with tldraw
- **Journal** - Personal journaling and note-taking
- **Calendar** - Full calendar view with FullCalendar integration

### 🤝 Collaboration
- **Real-time Updates** - Socket.io powered live collaboration
- **Team Invitations** - Invite members to projects
- **Comments & Reactions** - Engage with tasks and content
- **Inbox** - Centralized notifications and messages
- **Chat Messages** - Team communication

### 🎨 Additional Features
- **Virtual Pet** - Gamification element with 3D graphics (Three.js)
- **Weekly Recap** - Productivity insights and summaries
- **Integrations** - Connect with external services
- **Dark Mode** - Theme support with next-themes

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **React Router 6** - SPA routing
- **TailwindCSS 3** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Smooth animations

### Backend
- **Express 5** - Web server framework
- **Prisma** - Type-safe ORM
- **PostgreSQL** - Production database
- **Socket.io** - Real-time communication
- **Zod** - Schema validation
- **Nodemailer** - Email functionality

### Development Tools
- **Vitest** - Unit testing
- **PNPM** - Fast package manager
- **Prettier** - Code formatting
- **SWC** - Fast TypeScript compiler

## 📁 Project Structure

```
ProUp/
├── client/                 # React SPA frontend
│   ├── pages/             # Route components
│   ├── components/        # Reusable UI components
│   ├── contexts/          # React contexts
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility libraries
│   └── App.tsx            # Main app with routing
├── server/                # Express backend
│   ├── routes/            # API route handlers
│   ├── services/          # Business logic
│   ├── middleware/        # Express middleware
│   ├── socket.ts          # Socket.io configuration
│   └── index.ts           # Server entry point
├── prisma/                # Database schema and migrations
│   ├── schema.prisma      # Prisma schema
│   └── migrations/        # Database migrations
└── api/                   # Serverless API handlers
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PNPM 10+
- PostgreSQL database

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ProUp.git
cd ProUp
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/proup"
NODE_ENV="development"
PORT=8080
```

4. **Set up the database**
```bash
pnpm db:setup
```

5. **Start the development server**
```bash
pnpm dev
```

The application will be available at `http://localhost:8080`

## 📜 Available Scripts

```bash
pnpm dev              # Start development server (client + server)
pnpm build            # Build for production
pnpm start            # Start production server
pnpm test             # Run tests with Vitest
pnpm typecheck        # TypeScript type checking
pnpm format.fix       # Format code with Prettier
pnpm db:generate      # Generate Prisma client
pnpm db:migrate       # Run database migrations
pnpm db:push          # Push schema changes to database
```

## 🗄️ Database Schema

ProUp uses Prisma with PostgreSQL and includes models for:
- **Users** - Authentication and user profiles
- **Projects** - Project management
- **Tasks** - Task tracking with priorities and statuses
- **Documents** - Rich text documents
- **Notifications** - User notifications
- **Comments** - Task and project comments
- **Invitations** - Team member invitations
- **OAuth Tokens** - Third-party integrations

## 🔐 Authentication

ProUp includes a complete authentication system:
- User registration and login
- Password reset functionality
- Email verification
- Session management

## 🌐 API Routes

All API endpoints are prefixed with `/api/`:
- `/api/auth/*` - Authentication endpoints
- `/api/projects/*` - Project management
- `/api/tasks/*` - Task operations
- `/api/documents/*` - Document CRUD
- `/api/notifications/*` - Notification handling
- And more...

## 🎨 UI Components

ProUp includes a comprehensive UI component library built with Radix UI and TailwindCSS:
- Buttons, Inputs, Forms
- Dialogs, Modals, Popovers
- Tables, Cards, Tabs
- Calendars, Date Pickers
- Charts (Recharts)
- And 40+ more components

## 🚢 Deployment

### Production Build
```bash
pnpm build
pnpm start
```

### Deployment Platforms
ProUp is configured for deployment on:
- **Vercel** - Serverless deployment
- **Netlify** - Static + serverless functions
- **Render** - Full-stack hosting

Configuration files included:
- `vercel.json` - Vercel configuration
- `netlify.toml` - Netlify configuration
- `render.yaml` - Render configuration

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

Built with:
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Prisma](https://www.prisma.io/)
- [TailwindCSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [TipTap](https://tiptap.dev/)
- [tldraw](https://tldraw.dev/)
- [FullCalendar](https://fullcalendar.io/)

---

Made with ❤️ by the ProUp team
