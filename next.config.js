/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined
}

module.exports = {
    ...nextConfig,
    async headers() {
        const headers = []
        if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
            headers.push({
                headers: [
                    {
                        key: "X-Robots-Tag",
                        value: "index, follow"
                    }
                ],
                source: "/:path*"
            })
        }
        return headers
    }
}
