import type { AppProps } from "next/app"
import "styles/globals.css"

import { DefaultSeo } from "next-seo"
import SEO from "../../next-seo.config"

import { Analytics as GoogleAnalytics } from "components/Analytics"
import { Analytics as VercelAnalytics } from "@vercel/analytics/react"
import NextNProgress from "nextjs-progressbar"

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <DefaultSeo {...SEO} />
            <GoogleAnalytics />
            <VercelAnalytics />
            <NextNProgress
                color="#18a330"
                height={5}
                options={{ showSpinner: false }}
            />
            <Component {...pageProps} />
        </>
    )
}

export default App
