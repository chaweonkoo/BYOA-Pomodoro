/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This is important for GitHub Pages
  basePath: '/BYOA-Pomodoro',
}

module.exports = nextConfig 