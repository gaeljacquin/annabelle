import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    port: `${process.env.PORT ?? '3000'}`,
    author: 'Gaël Jacquin',
    linktree: 'https://linktr.ee/gaeljacquin',
    profilePic: '/gael-himself.webp',
    serverUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ahacverhpougzlzojfyo.supabase.co',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
