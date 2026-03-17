import { createServerWithSocket } from "./index";

const { app, httpServer } = createServerWithSocket();
const port = process.env.PORT || 3000;

// Backend API server only - frontend is served by Vercel
// No need to serve static files in production

httpServer.listen(port, () => {
  console.log(`🚀 Backend API server running on port ${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
  console.log(`🎨 Whiteboard WebSocket: ws://localhost:${port}/whiteboard`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
