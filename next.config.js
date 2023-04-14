/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  future: { webpack5: true },
  images: {
    domains: ["img.pokemondb.net"],
  },
};

module.exports = nextConfig;
