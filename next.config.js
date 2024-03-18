/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined
}

module.exports = nextConfig
