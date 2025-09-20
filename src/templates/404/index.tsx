import { NextSeo } from "next-seo"
import Image from "next/image"
import Link from "next/link"

export const PageNotFoundTemplate = () => {
    return (
        <>
            <NextSeo title="404 Error" />

            <main className="h-screen bg-background">
                <section className="container h-full mx-auto flex flex-col lg:flex-row items-center justify-center">
                    <div className="flex flex-col gap-4 items-center justify-center text-center">
                        <div className="flex flex-col gap-1 mb-1">
                            <h1 className="text-4xl text-theme font-bold font-mono">
                                404 Error
                            </h1>
                            <span className="text-3xl text-theme font-bold font-mono">
                                Tailwind page or interface not found
                            </span>
                        </div>
                        <Image
                            src={"img/404/error.svg"}
                            height={600}
                            width={600}
                            alt="Error 404"
                            priority
                        />
                        <Link
                            href="/"
                            aria-label="Go to Home"
                            className="rounded-lg bg-zinc-50 border-2 border-theme p-3"
                        >
                            <button>Go to Home</button>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}
