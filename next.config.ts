import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.fsju1-1.fna.fbcdn.net', // Servidor de FB en PR
      },
      {
        protocol: 'https',
        hostname: 'scontent.fsig5-1.fna.fbcdn.net', // Otro servidor de FB
      },
      {
        protocol: 'https',
        hostname: 'placehold.co', // Para las imágenes de prueba
      },
    ],
  },
};

export default nextConfig;