import { NextSeo } from "next-seo"
import Image from "next/image"
import Link from "next/link"

const HomeTemplate = () => {
    return (
        <>
            <NextSeo
                title="Tailwind Interfaces"
                description="Interfaces (re)created using TailwindCSS to practice the framework."
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content: "Tailwind, Interfaces, CSS, Framework, Pages"
                    }
                ]}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/`}
            />

            <main className="h-screen bg-background">
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
                            href="/spotify"
                            className="rounded-lg bg-zinc-50 border-2 border-theme p-3"
                        >
                            <h2 className="text-2xl font-semibold mb-1">
                                Spotify
                            </h2>
                            <p className="text-sm">
                                Spotify Desktop App Homepage
                            </p>
                        </Link>
                        <Link
                            href="/instagram"
                            className="rounded-lg bg-zinc-50 border-2 border-theme p-3"
                        >
                            <h2 className="text-2xl font-semibold mb-1">
                                Instagram
                            </h2>
                            <p className="text-sm">Instagram Web feed</p>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}

export default HomeTemplate
