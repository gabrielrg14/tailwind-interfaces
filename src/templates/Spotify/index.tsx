import Head from "next/head"
import Image from "next/image"

const SpotifyTemplate = () => {
    return (
        <>
            <Head>
                <title>Spotify</title>
            </Head>

            <div className="h-screen flex flex-col text-zinc-50">
                <div className="flex flex-1 pb-52 sm:pb-24 md:pb-20 bg-zinc-950">
                    <aside className="w-24 sm:w-44 md:w-56 xl:w-72 bg-zinc-950 p-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <nav className="space-y-5 mt-4">
                            <a
                                href="#"
                                className="flex items-center gap-3 text-sm font-semibold text-zinc-50 hover:text-zinc-50"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                </svg>
                                <span className="hidden sm:block">Home</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-50"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="hidden sm:block">Search</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-50"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 -rotate-90"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                                    />
                                </svg>
                                <span className="hidden sm:block">
                                    Your Library
                                </span>
                            </a>
                        </nav>

                        <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2">
                            <a
                                href="#"
                                className="text-sm text-zinc-400 hover:text-zinc-100"
                            >
                                Rock
                            </a>
                            <a
                                href="#"
                                className="text-sm text-zinc-400 hover:text-zinc-100"
                            >
                                Hard Rock
                            </a>
                            <a
                                href="#"
                                className="text-sm text-zinc-400 hover:text-zinc-100"
                            >
                                Punk Rock
                            </a>
                            <a
                                href="#"
                                className="text-sm text-zinc-400 hover:text-zinc-100"
                            >
                                Heavy Metal
                            </a>
                            <a
                                href="#"
                                className="text-sm text-zinc-400 hover:text-zinc-100"
                            >
                                Power Metal
                            </a>
                            <a
                                href="#"
                                className="text-sm text-zinc-400 hover:text-zinc-100"
                            >
                                Thrash Metal
                            </a>
                        </nav>
                    </aside>

                    <main className="flex-1 p-6 bg-zinc-900">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <button className="rounded-full bg-black/50 p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-7 h-7"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 19.5L8.25 12l7.5-7.5"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className="rounded-full bg-black/50 p-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    disabled
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-7 h-7"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer bg-black/100 text-zinc-400 hover:text-zinc-50 hover:scale-105">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-8 h-8 p-1.5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                                            clipRule="evenodd"
                                        />
                                        <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                                    </svg>
                                </div>
                                <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer border-2 border-black hover:scale-105">
                                    <Image
                                        src="/img/spotify/profile.jpg"
                                        width={360}
                                        height={640}
                                        alt="Profile picture"
                                    />
                                </div>
                            </div>
                        </div>

                        <h1 className="font-bold text-3xl mt-10">
                            Good Afternoon
                        </h1>

                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
                            <a
                                href="#"
                                className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition"
                            >
                                <Image
                                    src="/img/spotify/rock.jpg"
                                    width={100}
                                    height={100}
                                    alt="AC/DC album cover"
                                />
                                <strong>Rock</strong>
                                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible hover:bg-green-400 hover:scale-105">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </a>
                            <a
                                href="#"
                                className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition"
                            >
                                <Image
                                    src="/img/spotify/hard_rock.jpg"
                                    width={100}
                                    height={100}
                                    alt="Guns N' Roses album cover"
                                />
                                <strong>Hard Rock</strong>
                                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible hover:bg-green-400 hover:scale-105 duration-75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </a>
                            <a
                                href="#"
                                className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition"
                            >
                                <Image
                                    src="/img/spotify/punk_rock.jpg"
                                    width={100}
                                    height={100}
                                    alt="Green Day album cover"
                                />
                                <strong>Punk Rock</strong>
                                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible hover:bg-green-400 hover:scale-105 duration-75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </a>
                            <a
                                href="#"
                                className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition"
                            >
                                <Image
                                    src="/img/spotify/heavy_metal.jpg"
                                    width={100}
                                    height={100}
                                    alt="Iron Maiden album cover"
                                />
                                <strong>Heavy Metal</strong>
                                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible hover:bg-green-400 hover:scale-105 duration-75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </a>
                            <a
                                href="#"
                                className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition"
                            >
                                <Image
                                    src="/img/spotify/power_metal.jpg"
                                    width={100}
                                    height={100}
                                    alt="Helloween album cover"
                                />
                                <strong>Power Metal</strong>
                                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible hover:bg-green-400 hover:scale-105 duration-75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </a>
                            <a
                                href="#"
                                className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition"
                            >
                                <Image
                                    src="/img/spotify/thrash_metal.jpg"
                                    width={100}
                                    height={100}
                                    alt="Metallica album cover"
                                />
                                <strong>Thrash Metal</strong>
                                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible hover:bg-green-400 hover:scale-105 duration-75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </a>
                        </div>

                        <h2 className="font-bold text-2xl mt-10">
                            Made for Gabriel
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-6 mt-5">
                            <a
                                href="#"
                                className="bg-white/5 group max-w-xs p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 transition"
                            >
                                <div className="relative">
                                    <Image
                                        src="/img/spotify/heavy_metal.jpg"
                                        width={300}
                                        height={300}
                                        alt="Iron Maiden album cover"
                                    />
                                    <button className="absolute bottom-2 right-2 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black invisible group-hover:visible hover:bg-green-400 hover:scale-105 duration-75">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <strong className="font-semibold">
                                    Daily Mix 1
                                </strong>
                                <span className="text-sm text-zinc-400">
                                    Iron Maiden, Judas Priest, Motörhead and
                                    more
                                </span>
                            </a>
                            <a
                                href="#"
                                className="bg-white/5 group max-w-xs p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 transition"
                            >
                                <div className="relative">
                                    <Image
                                        src="/img/spotify/thrash_metal.jpg"
                                        width={300}
                                        height={300}
                                        alt="Metallica album cover"
                                    />
                                    <button className="absolute bottom-2 right-2 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black invisible group-hover:visible hover:bg-green-400 hover:scale-105 duration-75">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <strong className="font-semibold">
                                    Daily Mix 2
                                </strong>
                                <span className="text-sm text-zinc-400">
                                    Metallica, Anthrax, Megadeth and more
                                </span>
                            </a>
                            <a
                                href="#"
                                className="bg-white/5 group max-w-xs p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 transition"
                            >
                                <div className="relative">
                                    <Image
                                        src="/img/spotify/hard_rock.jpg"
                                        width={300}
                                        height={300}
                                        alt="Guns N' Roses album cover"
                                    />
                                    <button className="absolute bottom-2 right-2 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black invisible group-hover:visible hover:bg-green-400 hover:scale-105 duration-75">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <strong className="font-semibold">
                                    Daily Mix 3
                                </strong>
                                <span className="text-sm text-zinc-400">
                                    Guns N&apos; Roses, Scorpions, Deep Purple
                                    and more
                                </span>
                            </a>
                            <a
                                href="#"
                                className="bg-white/5 group max-w-xs p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 transition"
                            >
                                <div className="relative">
                                    <Image
                                        src="/img/spotify/power_metal.jpg"
                                        width={300}
                                        height={300}
                                        alt="Helloween album cover"
                                    />
                                    <button className="absolute bottom-2 right-2 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black invisible group-hover:visible hover:bg-green-400 hover:scale-105 duration-75">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <strong className="font-semibold">
                                    Daily Mix 4
                                </strong>
                                <span className="text-sm text-zinc-400">
                                    Helloween, DragonForce, Angra and more
                                </span>
                            </a>
                            <a
                                href="#"
                                className="bg-white/5 group max-w-xs p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 transition"
                            >
                                <div className="relative">
                                    <Image
                                        src="/img/spotify/rock.jpg"
                                        width={300}
                                        height={300}
                                        alt="AC/DC album cover"
                                    />
                                    <button className="absolute bottom-2 right-2 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black invisible group-hover:visible hover:bg-green-400 hover:scale-105 duration-75">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <strong className="font-semibold">
                                    Daily Mix 5
                                </strong>
                                <span className="text-sm text-zinc-400">
                                    AC/DC, Red Hot Chili Peppers, The White
                                    Stripes and more
                                </span>
                            </a>
                            <a
                                href="#"
                                className="bg-white/5 group max-w-xs p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 transition"
                            >
                                <div className="relative">
                                    <Image
                                        src="/img/spotify/punk_rock.jpg"
                                        width={300}
                                        height={300}
                                        alt="Green Day album cover"
                                    />
                                    <button className="absolute bottom-2 right-2 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black invisible group-hover:visible hover:bg-green-400 hover:scale-105 duration-75">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <strong className="font-semibold">
                                    Daily Mix 6
                                </strong>
                                <span className="text-sm text-zinc-400">
                                    Green Day, The Offspring, blink-182 and more
                                </span>
                            </a>
                        </div>
                    </main>
                </div>

                <footer className="fixed left-0 bottom-0 w-full bg-black border-t border-zinc-700 px-4 py-3 flex flex-col sm:flex-row items-center gap-6 justify-between">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/img/spotify/heavy_metal.jpg"
                            className="text-center cursor-pointer"
                            width={56}
                            height={56}
                            alt="Iron Maiden album cover"
                        />
                        <div className="flex flex-col">
                            <strong className="text-sm font-semibold cursor-pointer hover:underline">
                                The Trooper - 2015 Remaster
                            </strong>
                            <span className="text-xs text-zinc-400 cursor-pointer hover:underline hover:text-zinc-100">
                                Iron Maiden
                            </span>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-green-500 cursor-pointer hover:scale-105"
                        >
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <div className="flex items-center gap-5 text-zinc-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 hover:text-zinc-50"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                                />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 hover:text-zinc-50"
                            >
                                <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-10 h-10 text-zinc-50 hover:scale-105 duration-75"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                                    clipRule="evenodd"
                                />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 hover:text-zinc-50"
                            >
                                <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 hover:text-zinc-50"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                                />
                            </svg>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-xs text-zinc-400">0:36</span>
                            <div className="group w-44 md:w-56 xl:w-96 h-1 rounded-full bg-zinc-600">
                                <div className="relative w-1/6 h-1 bg-zinc-50 group-hover:bg-green-500">
                                    <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-zinc-50 invisible group-hover:visible"></div>
                                </div>
                            </div>
                            <span className="text-xs text-zinc-400">4:12</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-end flex-wrap gap-3 text-zinc-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 hover:text-zinc-50"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                            />
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 hover:text-zinc-50"
                        >
                            <path d="M5.625 3.75a2.625 2.625 0 100 5.25h12.75a2.625 2.625 0 000-5.25H5.625zM3.75 11.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3 15.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3.75 18.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" />
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 hover:text-zinc-50"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
                                clipRule="evenodd"
                            />
                        </svg>

                        <div className="group flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 hover:text-zinc-50"
                            >
                                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                                <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                            </svg>
                            <div className="w-24 h-1 rounded-full bg-zinc-600">
                                <div className="relative w-2/6 h-1 bg-zinc-50 group-hover:bg-green-500">
                                    <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-zinc-50 invisible group-hover:visible"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default SpotifyTemplate
