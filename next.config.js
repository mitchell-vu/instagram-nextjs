/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'd1j8r0kxyu9tj8.cloudfront.net',
      'lh3.googleusercontent.com',
      'instagram.fhan19-1.fna.fbcdn.net',
      'instagram.fhan5-11.fna.fbcdn.net',
      'scontent-tpe1-1.cdninstagram.com',
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
