export const isDev = process.env.NODE_ENV === 'development';

export const ORIGIN_URL =
  process.env.NEXT_PUBLIC_ORIGIN_URL ||
  (isDev ? 'http://localhost:3000' : 'https://your-production-domain.com');
