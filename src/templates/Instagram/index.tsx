import { NextSeo } from "next-seo"
import Image from "next/image"

const InstagramTemplate = () => {
    return (
        <>
            <NextSeo
                title="Instagram"
                description="Instagram Web Feed interface redesign using Tailwind CSS."
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content: `Instagram, Web, Feed, Interface, Redesign, Tailwind, CSS`
                    }
                ]}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/instagram`}
            />

            <div className="flex relative">
                <header className="md:hidden fixed z-10 left-0 top-0 h-16 w-full bg-white border-b border-gray-300">
                    <nav className="h-full flex items-center justify-between gap-4 px-4 mr-auto">
                        <a href="#">
                            <Image
                                src="/img/instagram/instagram.svg"
                                width={100}
                                height={100}
                                alt="Instagram"
                            />
                        </a>
                        <div className="flex items-center gap-4">
                            <a href="#" className="group">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-7 h-7 group-hover:scale-105 duration-150"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                    />
                                </svg>
                            </a>
                            <div className="relative">
                                <a href="#" className="group">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-7 h-7 group-hover:scale-105 duration-150"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                                        />
                                    </svg>
                                </a>
                                <div className="w-5 h-5 absolute -top-1 -right-1 flex items-center justify-center rounded-full bg-red-500">
                                    <span className="text-xs text-white">
                                        1
                                    </span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>

                <footer className="md:hidden fixed z-10 left-0 bottom-0 w-full bg-white border-t border-gray-300">
                    <nav className="flex justify-evenly">
                        <a href="#" className="group p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-7 h-7 group-hover:scale-105 duration-150"
                            >
                                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                        </a>
                        <a href="#" className="group p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-7 h-7 group-hover:scale-105 duration-150"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                        <a href="#" className="group p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-7 h-7 group-hover:scale-105 duration-150"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </a>
                        <a href="#" className="group p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-7 h-7 group-hover:scale-105 duration-150"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                                />
                            </svg>
                        </a>
                        <a href="#" className="group p-3">
                            <Image
                                src="/img/home/profile.jpg"
                                className="rounded-full overflow-hidden group-hover:scale-105 duration-150"
                                width={28}
                                height={28}
                                alt="Profile picture"
                            />
                        </a>
                    </nav>
                </footer>

                <aside className="fixed left-0 top-0 h-full hidden md:flex flex-col w-20 xl:w-60 2xl:w-80 border-r border-gray-300 py-8 px-3">
                    <a href="#" className="p-3 hidden xl:block">
                        <Image
                            src="/img/instagram/instagram.svg"
                            width={100}
                            height={100}
                            alt="Instagram"
                        />
                    </a>
                    <a
                        href="#"
                        className="group flex items-center justify-center p-3 rounded-lg hover:bg-zinc-100 xl:hidden"
                    >
                        <Image
                            src="/img/instagram/logo.svg"
                            className="group-hover:scale-105 duration-150"
                            width={24}
                            height={24}
                            alt="Instagram"
                        />
                    </a>
                    <nav className="flex-1 space-y-1 mt-6">
                        <a
                            href="#"
                            className="group flex items-center justify-center xl:justify-start gap-4 p-3 rounded-lg hover:bg-zinc-100"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-7 h-7 group-hover:scale-105 duration-150"
                            >
                                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                            <span className="text-black font-bold hidden xl:block">
                                Home
                            </span>
                        </a>
                        <a
                            href="#"
                            className="group flex items-center justify-center xl:justify-start gap-4 p-3 rounded-lg hover:bg-zinc-100"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-7 h-7 group-hover:scale-105 duration-150"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="hidden xl:block">Search</span>
                        </a>
                        <a
                            href="#"
                            className="group flex items-center justify-center xl:justify-start gap-4 p-3 rounded-lg hover:bg-zinc-100"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-7 h-7 group-hover:scale-105 duration-150"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                                />
                            </svg>
                            <span className="hidden xl:block">Explore</span>
                        </a>
                        <a
                            href="#"
                            className="group flex items-center justify-center xl:justify-start gap-4 p-3 rounded-lg hover:bg-zinc-100"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-7 h-7 group-hover:scale-105 duration-150"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                                />
                            </svg>
                            <span className="hidden xl:block">Reels</span>
                        </a>
                        <a
                            href="#"
                            className="group flex items-center justify-center xl:justify-start gap-4 p-3 rounded-lg hover:bg-zinc-100"
                        >
                            <div className="relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-7 h-7 group-hover:scale-105 duration-150"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                                    />
                                </svg>
                                <div className="w-5 h-5 absolute -top-1 -right-1 flex items-center justify-center rounded-full bg-red-500">
                                    <span className="text-xs text-white">
                                        1
                                    </span>
                                </div>
                            </div>
                            <span className="hidden xl:block">Messages</span>
                        </a>
                        <a
                            href="#"
                            className="group flex items-center justify-center xl:justify-start gap-4 p-3 rounded-lg hover:bg-zinc-100"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-7 h-7 group-hover:scale-105 duration-150"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                            <span className="hidden xl:block">
                                Notifications
                            </span>
                        </a>
                        <a
                            href="#"
                            className="group flex items-center justify-center xl:justify-start gap-4 p-3 rounded-lg hover:bg-zinc-100"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-7 h-7 group-hover:scale-105 duration-150"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span className="hidden xl:block">Create</span>
                        </a>
                        <a
                            href="#"
                            className="group flex items-center justify-center xl:justify-start gap-4 p-3 rounded-lg hover:bg-zinc-100"
                        >
                            <Image
                                src="/img/home/profile.jpg"
                                className="rounded-full overflow-hidden group-hover:scale-105 duration-150"
                                width={28}
                                height={28}
                                alt="Profile picture"
                            />
                            <span className="hidden xl:block">Profile</span>
                        </a>
                    </nav>
                    <nav>
                        <a
                            href="#"
                            className="group flex items-center justify-center xl:justify-start gap-4 p-3 rounded-lg hover:bg-zinc-100"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-7 h-7 group-hover:scale-105 duration-150"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                            <span className="hidden xl:block">More</span>
                        </a>
                    </nav>
                </aside>

                <section className="flex gap-16 py-20 md:py-12 md:pl-20 xl:pl-60 2xl:pl-80 mx-auto">
                    <main className="flex-1">
                        <div className="w-80 sm:w-full overflow-x-hidden mx-auto">
                            <ul className="relative flex gap-4 mb-10">
                                <li className="shrink-0 text-xs text-center cursor-pointer">
                                    <div className="rounded-full bg-gradient-to-tr from-yellow-300 to-fuchsia-600 p-0.5 mb-1">
                                        <div className="rounded-full bg-white p-0.5">
                                            <Image
                                                src="/img/instagram/person_1.jpg"
                                                className="rounded-full overflow-hidden border border-gray-300"
                                                width={56}
                                                height={56}
                                                alt="person_1 profile picture"
                                            />
                                        </div>
                                    </div>
                                    <span>person_1</span>
                                </li>
                                <li className="shrink-0 text-xs text-center cursor-pointer">
                                    <div className="rounded-full bg-gradient-to-tr from-yellow-300 to-fuchsia-600 p-0.5 mb-1">
                                        <div className="rounded-full bg-white p-0.5">
                                            <Image
                                                src="/img/instagram/person_2.jpg"
                                                className="rounded-full overflow-hidden border border-gray-300"
                                                width={56}
                                                height={56}
                                                alt="person_2 profile picture"
                                            />
                                        </div>
                                    </div>
                                    <span>person_2</span>
                                </li>
                                <li className="shrink-0 text-xs text-center cursor-pointer">
                                    <div className="rounded-full bg-gradient-to-tr from-yellow-300 to-fuchsia-600 p-0.5 mb-1">
                                        <div className="rounded-full bg-white p-0.5">
                                            <Image
                                                src="/img/instagram/person_3.jpg"
                                                className="rounded-full overflow-hidden border border-gray-300"
                                                width={56}
                                                height={56}
                                                alt="person_3 profile picture"
                                            />
                                        </div>
                                    </div>
                                    <span>person_3</span>
                                </li>
                                <li className="shrink-0 text-xs text-center cursor-pointer">
                                    <div className="rounded-full bg-green-500 p-0.5 mb-1">
                                        <div className="rounded-full bg-white p-0.5">
                                            <Image
                                                src="/img/instagram/person_4.jpg"
                                                className="rounded-full overflow-hidden border border-gray-300"
                                                width={56}
                                                height={56}
                                                alt="person_4 profile picture"
                                            />
                                        </div>
                                    </div>
                                    <span>person_4</span>
                                </li>
                                <li className="shrink-0 text-xs text-center cursor-pointer">
                                    <div className="rounded-full bg-gradient-to-tr from-yellow-300 to-fuchsia-600 p-0.5 mb-1">
                                        <div className="rounded-full bg-white p-0.5">
                                            <Image
                                                src="/img/instagram/person_5.jpg"
                                                className="rounded-full overflow-hidden border border-gray-300"
                                                width={56}
                                                height={56}
                                                alt="person_5 profile picture"
                                            />
                                        </div>
                                    </div>
                                    <span>person_5</span>
                                </li>
                                <li className="shrink-0 text-xs text-center cursor-pointer">
                                    <div className="rounded-full bg-gradient-to-tr from-yellow-300 to-fuchsia-600 p-0.5 mb-1">
                                        <div className="rounded-full bg-white p-0.5">
                                            <Image
                                                src="/img/instagram/person_6.jpg"
                                                className="rounded-full overflow-hidden border border-gray-300"
                                                width={56}
                                                height={56}
                                                alt="person_6 profile picture"
                                            />
                                        </div>
                                    </div>
                                    <span>person_6</span>
                                </li>
                                <li className="shrink-0 text-xs text-center cursor-pointer">
                                    <div className="rounded-full bg-gradient-to-tr from-yellow-300 to-fuchsia-600 p-0.5 mb-1">
                                        <div className="rounded-full bg-white p-0.5">
                                            <Image
                                                src="/img/instagram/person_7.jpg"
                                                className="rounded-full overflow-hidden border border-gray-300"
                                                width={56}
                                                height={56}
                                                alt="person_7 profile picture"
                                            />
                                        </div>
                                    </div>
                                    <span>person_7</span>
                                </li>
                                <li className="shrink-0 text-xs text-center cursor-pointer">
                                    <div className="rounded-full bg-gradient-to-tr from-yellow-300 to-fuchsia-600 p-0.5 mb-1">
                                        <div className="rounded-full bg-white p-0.5">
                                            <Image
                                                src="/img/instagram/person_8.jpg"
                                                className="rounded-full overflow-hidden border border-gray-300"
                                                width={56}
                                                height={56}
                                                alt="person_8 profile picture"
                                            />
                                        </div>
                                    </div>
                                    <span>person_8</span>
                                </li>
                                <div className="w-6 h-6 absolute top-5 right-4 rounded-full flex items-center p-1 bg-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6 cursor-pointer"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-2 mb-5 pb-5 max-w-md mx-auto border-b border-gray-300">
                            <div className="flex items-center justify-between text-sm px-2 sm:px-0">
                                <div className="flex items-center gap-2.5">
                                    <div className="rounded-full bg-gradient-to-tr from-yellow-300 to-fuchsia-600 p-0.5">
                                        <div className="rounded-full bg-white p-0.5">
                                            <Image
                                                src="/img/instagram/person_1.jpg"
                                                className="rounded-full overflow-hidden cursor-pointer border border-gray-300"
                                                width={32}
                                                height={32}
                                                alt="person_1 profile picture"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="space-x-2">
                                            <a
                                                href="#"
                                                className="text-black hover:text-black/50 font-semibold"
                                            >
                                                person_1
                                            </a>
                                            <span className="text-zinc-500">
                                                • 4h
                                            </span>
                                        </div>
                                        <a href="#" className="text-xs">
                                            Dog Land
                                        </a>
                                    </div>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 hover:text-black/50 cursor-pointer"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                    />
                                </svg>
                            </div>
                            <Image
                                src="/img/instagram/feed_1.jpg"
                                className="rounded-sm"
                                width={640}
                                height={640}
                                alt="Photo of person_1 on feed"
                            />
                            <div className="flex flex-col gap-1 px-2 sm:px-0">
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-7 h-7 text-red-500 cursor-pointer"
                                        >
                                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-7 h-7 hover:text-black/50 cursor-pointer"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-7 h-7 hover:text-black/50 -rotate-45 cursor-pointer"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                            />
                                        </svg>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-7 h-7 hover:text-black/50 cursor-pointer"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                                        />
                                    </svg>
                                </div>
                                <span className="text-sm">
                                    Liked by{" "}
                                    <a
                                        href="#"
                                        className="text-black font-semibold"
                                    >
                                        person_2
                                    </a>{" "}
                                    and{" "}
                                    <a
                                        href="#"
                                        className="text-black font-semibold"
                                    >
                                        2,204 others
                                    </a>
                                </span>
                                <div className="text-sm">
                                    <a
                                        href="#"
                                        className="text-black font-semibold"
                                    >
                                        person_1
                                    </a>
                                    <span className="ml-1">My boy</span>
                                </div>
                                <a
                                    href="#"
                                    className="text-xs text-black font-semibold"
                                >
                                    See translation
                                </a>
                                <a href="#" className="text-sm text-zinc-500">
                                    View all 54 comments
                                </a>
                                <div className="flex items-center justify-between">
                                    <div className="text-sm">
                                        <a
                                            href="#"
                                            className="text-black font-semibold"
                                        >
                                            person_2
                                        </a>
                                        <span className="ml-1">
                                            He is so cute 😍
                                        </span>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 cursor-pointer text-zinc-500 hover:text-zinc-500/50"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                        />
                                    </svg>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-sm">
                                        <a
                                            href="#"
                                            className="text-black font-semibold"
                                        >
                                            person_3
                                        </a>
                                        <span className="ml-1">
                                            The most beautiful thing in this
                                            world 🥺
                                        </span>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-4 h-4 cursor-pointer text-red-500"
                                    >
                                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                    </svg>
                                </div>
                                <div className="flex items-center justify-between text-zinc-500 text-sm">
                                    <input
                                        type="text"
                                        placeholder="Add a comment..."
                                        className="w-full outline-none"
                                    />
                                    <a href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4 hover:text-zinc-500/50"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mb-5 pb-5 max-w-md mx-auto border-b border-gray-300">
                            <div className="flex items-center justify-between text-sm px-2 sm:px-0">
                                <div className="flex items-center gap-2.5">
                                    <div className="rounded-full bg-gradient-to-tr from-yellow-300 to-fuchsia-600 p-0.5">
                                        <div className="rounded-full bg-white p-0.5">
                                            <Image
                                                src="/img/instagram/person_2.jpg"
                                                className="rounded-full overflow-hidden cursor-pointer border border-gray-300"
                                                width={32}
                                                height={32}
                                                alt="person_2 profile picture"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="space-x-2">
                                            <a
                                                href="#"
                                                className="text-black hover:text-black/50 font-semibold"
                                            >
                                                person_2
                                            </a>
                                            <span className="text-zinc-500">
                                                • 13h
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 hover:text-black/50 cursor-pointer"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                    />
                                </svg>
                            </div>
                            <Image
                                src="/img/instagram/feed_2.jpg"
                                className="rounded-sm"
                                width={640}
                                height={640}
                                alt="Photo of person_2 on feed"
                            />
                            <div className="flex flex-col gap-1 px-2 sm:px-0">
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-7 h-7 hover:text-black/50 cursor-pointer"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-7 h-7 hover:text-black/50 cursor-pointer"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-7 h-7 hover:text-black/50 -rotate-45 cursor-pointer"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                            />
                                        </svg>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-7 h-7 hover:text-black/50 cursor-pointer"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                                        />
                                    </svg>
                                </div>
                                <a
                                    href="#"
                                    className="text-sm text-black font-semibold"
                                >
                                    171 likes
                                </a>
                                <div className="text-sm">
                                    <a
                                        href="#"
                                        className="text-black font-semibold"
                                    >
                                        person_2
                                    </a>
                                    <span className="ml-1">My happiness</span>
                                </div>
                                <a
                                    href="#"
                                    className="text-xs text-black font-semibold"
                                >
                                    See translation
                                </a>
                                <a href="#" className="text-sm text-zinc-500">
                                    View all 4 comments
                                </a>
                                <div className="flex items-center justify-between text-zinc-500 text-sm">
                                    <input
                                        type="text"
                                        placeholder="Add a comment..."
                                        className="w-full outline-none"
                                    />
                                    <a href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4 hover:text-zinc-500/50"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 mb-5 pb-5 max-w-md mx-auto border-b border-gray-300">
                            <div className="flex items-center justify-between text-sm px-2 sm:px-0">
                                <div className="flex items-center gap-2.5">
                                    <div className="rounded-full bg-gradient-to-tr from-yellow-300 to-fuchsia-600 p-0.5">
                                        <div className="rounded-full bg-white p-0.5">
                                            <Image
                                                src="/img/instagram/person_3.jpg"
                                                className="rounded-full overflow-hidden cursor-pointer border border-gray-300"
                                                width={32}
                                                height={32}
                                                alt="person_3 profile picture"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="space-x-2">
                                            <a
                                                href="#"
                                                className="text-black hover:text-black/50 font-semibold"
                                            >
                                                person_3
                                            </a>
                                            <span className="text-zinc-500">
                                                • 20h
                                            </span>
                                        </div>
                                        <a href="#" className="text-xs">
                                            In the sparkle of your eyes
                                        </a>
                                    </div>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 hover:text-black/50 cursor-pointer"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                    />
                                </svg>
                            </div>
                            <Image
                                src="/img/instagram/feed_3.jpg"
                                className="rounded-sm"
                                width={640}
                                height={640}
                                alt="Photo of person_3 on feed"
                            />
                            <div className="flex flex-col gap-1 px-2 sm:px-0">
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-7 h-7 text-red-500 cursor-pointer"
                                        >
                                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-7 h-7 hover:text-black/50 cursor-pointer"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-7 h-7 hover:text-black/50 -rotate-45 cursor-pointer"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                            />
                                        </svg>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-7 h-7 hover:text-black/50 cursor-pointer"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                                        />
                                    </svg>
                                </div>
                                <span className="text-sm">
                                    Liked by{" "}
                                    <a
                                        href="#"
                                        className="text-black font-semibold"
                                    >
                                        person_4
                                    </a>{" "}
                                    and{" "}
                                    <a
                                        href="#"
                                        className="text-black font-semibold"
                                    >
                                        1,007 others
                                    </a>
                                </span>
                                <div className="text-sm ">
                                    <a
                                        href="#"
                                        className="text-black font-semibold"
                                    >
                                        person_3
                                    </a>
                                    <span className="ml-1">
                                        That smile melts me away
                                    </span>
                                </div>
                                <a
                                    href="#"
                                    className="text-xs text-black font-semibold"
                                >
                                    See translation
                                </a>
                                <a href="#" className="text-sm text-zinc-500">
                                    View all 20 comments
                                </a>
                                <div className="flex items-center justify-between">
                                    <div className="text-sm ">
                                        <a
                                            href="#"
                                            className="text-black font-semibold"
                                        >
                                            person_4
                                        </a>
                                        <span className="ml-1">
                                            My God, what a beautiful smile!
                                        </span>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 cursor-pointer text-zinc-500 hover:text-zinc-500/50"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                        />
                                    </svg>
                                </div>
                                <div className="flex items-center justify-between text-zinc-500 text-sm">
                                    <input
                                        type="text"
                                        placeholder="Add a comment..."
                                        className="w-full outline-none"
                                    />
                                    <a href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4 hover:text-zinc-500/50"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 max-w-md mx-auto">
                            <div className="flex items-center justify-between text-sm px-2 sm:px-0">
                                <div className="flex items-center gap-2.5">
                                    <div className="rounded-full bg-green-500 p-0.5">
                                        <div className="rounded-full bg-white p-0.5">
                                            <Image
                                                src="/img/instagram/person_4.jpg"
                                                className="rounded-full overflow-hidden cursor-pointer border border-gray-300"
                                                width={32}
                                                height={32}
                                                alt="person_4 profile picture"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="space-x-2">
                                            <a
                                                href="#"
                                                className="text-black hover:text-black/50 font-semibold"
                                            >
                                                person_4
                                            </a>
                                            <span className="text-zinc-500">
                                                • 2d
                                            </span>
                                        </div>
                                        <a href="#" className="text-xs">
                                            In Paradise
                                        </a>
                                    </div>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 hover:text-black/50 cursor-pointer"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                    />
                                </svg>
                            </div>
                            <Image
                                src="/img/instagram/feed_4.jpg"
                                className="rounded-sm"
                                width={640}
                                height={640}
                                alt="Photo of person_4 on feed"
                            />
                            <div className="flex flex-col gap-1 px-2 sm:px-0">
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-7 h-7 hover:text-black/50 cursor-pointer"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-7 h-7 hover:text-black/50 cursor-pointer"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-7 h-7 hover:text-black/50 -rotate-45 cursor-pointer"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                            />
                                        </svg>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-7 h-7 hover:text-black/50 cursor-pointer"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                                        />
                                    </svg>
                                </div>
                                <a
                                    href="#"
                                    className="text-sm text-black font-semibold"
                                >
                                    503 likes
                                </a>
                                <div className="text-sm ">
                                    <a
                                        href="#"
                                        className="text-black font-semibold"
                                    >
                                        person_4
                                    </a>
                                    <span className="ml-1">
                                        Don&apos;t stop playing even for 1
                                        minute 😂
                                    </span>
                                </div>
                                <a
                                    href="#"
                                    className="text-xs text-black font-semibold"
                                >
                                    See translation
                                </a>
                                <a href="#" className="text-sm text-zinc-500">
                                    View all 2 comments
                                </a>
                                <div className="flex items-center justify-between text-zinc-500 text-sm">
                                    <input
                                        type="text"
                                        placeholder="Add a comment..."
                                        className="w-full outline-none"
                                    />
                                    <a href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4 hover:text-zinc-500/50"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>

                    <aside className="hidden lg:flex max-w-xs mt-2">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <a href="#">
                                        <Image
                                            src="/img/home/profile.jpg"
                                            className="rounded-full overflow-hidden"
                                            width={56}
                                            height={56}
                                            alt="Profile picture"
                                        />
                                    </a>
                                    <div className="flex flex-col">
                                        <a
                                            href="#"
                                            className="text-sm text-black font-semibold"
                                        >
                                            gabriel_rapucci
                                        </a>
                                        <span className="text-sm text-zinc-500 font-normal">
                                            Gabriel Rapucci Gonzalez
                                        </span>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="text-xs text-blue-400 font-semibold"
                                >
                                    Switch
                                </a>
                            </div>
                            <div className="flex justify-between">
                                <h3 className="text-sm text-zinc-500 font-semibold">
                                    Suggested for you
                                </h3>
                                <a
                                    href="#"
                                    className="text-xs text-black hover:text-black/50 font-semibold"
                                >
                                    See All
                                </a>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <a href="#">
                                        <Image
                                            src="/img/instagram/person_9.jpg"
                                            className="rounded-full overflow-hidden"
                                            width={32}
                                            height={32}
                                            alt="person_9 profile picture"
                                        />
                                    </a>
                                    <div className="flex flex-col">
                                        <a
                                            href="#"
                                            className="text-sm text-black font-semibold"
                                        >
                                            person_9
                                        </a>
                                        <span className="text-xs text-zinc-500 font-normal">
                                            Followed by person_1
                                        </span>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="text-xs text-blue-400 hover:text-blue-900 font-semibold"
                                >
                                    Follow
                                </a>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <a href="#">
                                        <Image
                                            src="/img/instagram/person_10.jpg"
                                            className="rounded-full overflow-hidden"
                                            width={32}
                                            height={32}
                                            alt="person_10 profile picture"
                                        />
                                    </a>
                                    <div className="flex flex-col">
                                        <a
                                            href="#"
                                            className="text-sm text-black font-semibold"
                                        >
                                            person_10
                                        </a>
                                        <span className="text-xs text-zinc-500 font-normal">
                                            Followed by person_2
                                        </span>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="text-xs text-blue-400 hover:text-blue-900 font-semibold"
                                >
                                    Follow
                                </a>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <a href="#">
                                        <Image
                                            src="/img/instagram/person_11.jpg"
                                            className="rounded-full overflow-hidden"
                                            width={32}
                                            height={32}
                                            alt="person_11 profile picture"
                                        />
                                    </a>
                                    <div className="flex flex-col">
                                        <a
                                            href="#"
                                            className="text-sm text-black font-semibold"
                                        >
                                            person_11
                                        </a>
                                        <span className="text-xs text-zinc-500 font-normal">
                                            Followed by person_3 + 2 more
                                        </span>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="text-xs text-blue-400 hover:text-blue-900 font-semibold"
                                >
                                    Follow
                                </a>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <a href="#">
                                        <Image
                                            src="/img/instagram/person_12.jpg"
                                            className="rounded-full overflow-hidden"
                                            width={32}
                                            height={32}
                                            alt="person_12 profile picture"
                                        />
                                    </a>
                                    <div className="flex flex-col">
                                        <a
                                            href="#"
                                            className="text-sm text-black font-semibold"
                                        >
                                            person_12
                                        </a>
                                        <span className="text-xs text-zinc-500 font-normal">
                                            Followed by person_4 + 3 more
                                        </span>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="text-xs text-blue-400 hover:text-blue-900 font-semibold"
                                >
                                    Follow
                                </a>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <a href="#">
                                        <Image
                                            src="/img/instagram/person_13.jpg"
                                            className="rounded-full overflow-hidden"
                                            width={32}
                                            height={32}
                                            alt="person_13 profile picture"
                                        />
                                    </a>
                                    <div className="flex flex-col">
                                        <a
                                            href="#"
                                            className="text-sm text-black font-semibold"
                                        >
                                            person_13
                                        </a>
                                        <span className="text-xs text-zinc-500 font-normal">
                                            Followed by person_5 + 4 more
                                        </span>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="text-xs text-blue-400 hover:text-blue-900 font-semibold"
                                >
                                    Follow
                                </a>
                            </div>
                            <div className="text-xs text-gray-400/80 font-normal">
                                <ul className="flex flex-wrap my-5">
                                    <li className="after:content-['\00B7'] after:mx-1">
                                        <a href="#" className="hover:underline">
                                            About
                                        </a>
                                    </li>
                                    <li className="after:content-['\00B7'] after:mx-1">
                                        <a href="#" className="hover:underline">
                                            Help
                                        </a>
                                    </li>
                                    <li className="after:content-['\00B7'] after:mx-1">
                                        <a href="#" className="hover:underline">
                                            Press
                                        </a>
                                    </li>
                                    <li className="after:content-['\00B7'] after:mx-1">
                                        <a href="#" className="hover:underline">
                                            API
                                        </a>
                                    </li>
                                    <li className="after:content-['\00B7'] after:mx-1">
                                        <a href="#" className="hover:underline">
                                            Jobs
                                        </a>
                                    </li>
                                    <li className="after:content-['\00B7'] after:mx-1">
                                        <a href="#" className="hover:underline">
                                            Privacy
                                        </a>
                                    </li>
                                    <li className="after:content-['\00B7'] after:mx-1">
                                        <a href="#" className="hover:underline">
                                            Terms
                                        </a>
                                    </li>
                                    <li className="after:content-['\00B7'] after:mx-1">
                                        <a href="#" className="hover:underline">
                                            Locations
                                        </a>
                                    </li>
                                    <li className="after:content-['\00B7'] after:mx-1">
                                        <a href="#" className="hover:underline">
                                            Language
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">
                                            Meta Verified
                                        </a>
                                    </li>
                                </ul>
                                <span>© 2023 INSTAGRAM FROM META</span>
                            </div>
                        </div>
                    </aside>
                </section>
            </div>
        </>
    )
}

export default InstagramTemplate
