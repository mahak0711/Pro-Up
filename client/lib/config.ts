// API configuration for different environments
export const API_BASE_URL = import.meta.env.VITE_API_URL || '';

// Helper function to construct API URLs
export function getApiUrl(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // If API_BASE_URL is set (production), use it
  // Otherwise use relative URLs (local dev with Vite proxy)
  return API_BASE_URL ? `${API_BASE_URL}/${cleanPath}` : `/${cleanPath}`;
}
