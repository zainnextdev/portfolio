/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  transpilePackages: ['framer-motion'],
  images: {
    loader: 'default', // Keep the default loader
    // This line tells Next.js to use sharp instead of squoosh
    // Note: This might not be explicitly needed in the latest versions if sharp is installed,
    // but it's good to be explicit.
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;