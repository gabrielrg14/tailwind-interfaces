import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const HomeTemplate = () => {
    return (
        <>
            <Head>
                <title>Tailwind Interfaces</title>
            </Head>

            <main className={`h-screen bg-background`}>
                <section className="container h-full mx-auto flex flex-col lg:flex-row items-center justify-center">
                    <div className="p-4">
                        <h1 className="text-4xl text-theme font-bold font-mono mb-1">
                            Tailwind Interfaces
                        </h1>
                        <Image
                            src={"img/home/tailwind.svg"}
                            height={800}
                            width={800}
                            alt="TailwindCSS"
                            priority
                        />
                    </div>
                    <div className="grid text-center grid-cols-2 sm:grid-cols-3 gap-4 p-4">
                        <Link
                            href="/resort"
                            className="rounded-lg bg-zinc-50 border-2 border-theme p-3"
                        >
                            <h2 className="text-2xl font-semibold mb-1">
                                Resort
                            </h2>
                            <p className="text-sm">
                                A resort search landing page
                            </p>
                        </Link>
                        <Link
                            href=""
                            className="rounded-lg bg-zinc-50 border-2 border-theme p-3"
                        >
                            <h2 className="text-2xl font-semibold mb-1 opacity-50">
                                Spotify
                            </h2>
                            <p className="text-sm opacity-50">
                                Work in progress...
                            </p>
                        </Link>
                        <Link
                            href=""
                            className="rounded-lg bg-zinc-50 border-2 border-theme p-3"
                        >
                            <h2 className="text-2xl font-semibold mb-1 opacity-50">
                                Instagram
                            </h2>
                            <p className="text-sm opacity-50">Coming soon...</p>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}

export default HomeTemplate
