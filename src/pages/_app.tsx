import type { AppProps } from "next/app"
import "styles/globals.css"

import { Analytics as VercelAnalytics } from "@vercel/analytics/react"
import NextNProgress from "nextjs-progressbar"

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
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
