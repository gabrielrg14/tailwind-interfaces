import { DefaultSeoProps } from "next-seo"

const config: DefaultSeoProps = {
    defaultTitle: "Tailwind Interfaces",
    themeColor: "#18a330",
    additionalLinkTags: [
        {
            rel: "shortcut icon",
            href: "/favicon.ico",
            sizes: "512x512"
        },
        {
            rel: "apple-touch-icon",
            href: "/favicon.ico",
            sizes: "512x512"
        },
        {
            rel: "manifest",
            href: "/manifest.json"
        }
    ],
    additionalMetaTags: [
        {
            name: "google-site-verification",
            content: "11r8K6MLmUAgq8eTWLXk49GhEiZuybZx1h8kIyO6PX8"
        },
        {
            name: "google",
            content: "notranslate"
        }
    ],
    openGraph: {
        type: "website",
        locale: "en",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
        siteName: "Tailwind Interfaces"
    }
}

export default config
