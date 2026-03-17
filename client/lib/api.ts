/**
 * API utility that automatically includes authentication headers
 */

import { API_BASE_URL } from './config';

type FetchOptions = RequestInit & {
  skipAuth?: boolean;
};

/**
 * Wrapper around fetch that automatically includes the x-user-id header
 */
export async function api(url: string, options: FetchOptions = {}): Promise<Response> {
  const { skipAuth, ...fetchOptions } = options;
  
  const headers = new Headers(fetchOptions.headers);
  
  // Add Content-Type for JSON if body is present and not FormData
  if (fetchOptions.body && !(fetchOptions.body instanceof FormData)) {
    if (!headers.has('Content-Type')) {
      headers.set('Content-Type', 'application/json');
    }
  }
  
  // Add user ID header for authentication (unless explicitly skipped)
  if (!skipAuth) {
    const userId = localStorage.getItem('userId');
    if (userId) {
      headers.set('x-user-id', userId);
    }
  }
  
  // Prepend API_BASE_URL to relative URLs
  const fullUrl = url.startsWith('http') ? url : `${API_BASE_URL}${url}`;
  console.log('API call:', url, '→', fullUrl);
  
  return fetch(fullUrl, {
    ...fetchOptions,
    headers,
  });
}

/**
 * Convenience methods for common HTTP methods
 */
export const apiGet = (url: string, options?: FetchOptions) => 
  api(url, { ...options, method: 'GET' });

export const apiPost = (url: string, data?: unknown, options?: FetchOptions) =>
  api(url, {
    ...options,
    method: 'POST',
    body: data ? JSON.stringify(data) : undefined,
  });

export const apiPut = (url: string, data?: unknown, options?: FetchOptions) =>
  api(url, {
    ...options,
    method: 'PUT',
    body: data ? JSON.stringify(data) : undefined,
  });

export const apiDelete = (url: string, options?: FetchOptions) =>
  api(url, { ...options, method: 'DELETE' });
