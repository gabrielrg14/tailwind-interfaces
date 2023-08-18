import Head from "next/head"
import Image from "next/image"

const ResortTemplate = () => {
    return (
        <>
            <Head>
                <title>Resort</title>
            </Head>

            <div className="min-h-screen bg-gray-50 text-gray-600">
                <header>
                    <nav className="container max-w-5xl flex items-center justify-between mx-auto px-4 h-28 sm:h-24 text-black">
                        <div className="text-2xl font-bold">Resort</div>

                        <ul className="flex flex-col items-end sm:flex-row space-x-4">
                            <li>
                                <a href="" className="text-lg hover:underline">
                                    How to book
                                </a>
                            </li>
                            <li>
                                <a href="" className="text-lg hover:underline">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="" className="text-lg hover:underline">
                                    Information
                                </a>
                            </li>
                            <li>
                                <a href="" className="text-lg hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>

                <section
                    style={{
                        background: `url("/img/resort/banner.png")`,
                        height: "450px"
                    }}
                >
                    <div className="container max-w-5xl mx-auto px-4 h-full flex items-center justify-center">
                        <div>
                            <div className="text-white text-center">
                                <h1 className="text-4xl mb-1">
                                    Where you want to go?
                                </h1>
                                <p className="text-lg">
                                    Choose the state and city to find the best
                                    resorts.
                                </p>
                            </div>

                            <div className="mt-5">
                                <form className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    <select className="bg-gray-50 px-3 py-2 border border-gray-300 text-gray-500 rounded">
                                        <option value="">Choose state</option>
                                    </select>

                                    <select className="bg-gray-50 px-3 py-2 border border-gray-300 text-gray-500 rounded">
                                        <option value="">Choose city</option>
                                    </select>

                                    <button className="inline-flex col-span-2 sm:col-span-1 items-center justify-center bg-orange-400 text-black font-medium px-3 py-2 rounded">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="w-4 h-4 mr-2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                            />
                                        </svg>
                                        Search resorts
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container max-w-5xl mx-auto px-4 py-10">
                    <div className="flex flex-col-reverse lg:flex-row items-center">
                        <div className="lg:pr-10">
                            <p className="text-sm text-gray-400 font-medium">
                                FEATURED RESORT
                            </p>
                            <h3 className="text-2xl">
                                Ecoresort Beach - Bahia
                            </h3>
                            <p className="text-sm text-gray-400 font-medium mt-2">
                                5 star quality hotel
                            </p>
                            <div className="text-sm text-gray-500 font-semibold my-4">
                                <p className="mb-4">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Quasi nihil neque a odit,
                                    recusandae, maxime et excepturi dolorum
                                    fugiat eos consectetur reprehenderit numquam
                                    repellendus accusamus nemo non veritatis
                                    ipsa officia. Dicta labore voluptate
                                    perferendis autem provident dolore dolor,
                                    quam quisquam quibusdam repellat quia
                                    aliquam eum similique voluptas earum nam
                                    impedit?
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi delectus saepe
                                    laborum aperiam, fugit quod voluptatibus.
                                    Porro odio quos ipsum vel cumque. Magnam
                                    beatae atque quidem et ad eum ducimus ipsum
                                    accusamus minus molestias. Amet mollitia
                                    iste, accusantium officiis maiores non
                                    voluptate iure impedit qui doloremque nihil
                                    veniam consectetur temporibus?
                                </p>
                            </div>
                            <a
                                href=""
                                className="inline-flex items-center bg-orange-400 text-black font-medium px-3 py-2 rounded"
                            >
                                Request reservation
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4 ml-2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div className="flex-shrink-0 lg:ml-auto mb-5 lg:mb-0">
                            <Image
                                src={"/img/resort/featured.png"}
                                height={285}
                                width={453}
                                alt="Featured resort"
                            />
                        </div>
                    </div>
                </section>

                <section className="container max-w-5xl mx-auto px-4">
                    <h3 className="text-2xl text-center text-gray-500 font-semibold mb-8">
                        Discover more resorts
                    </h3>
                    <div className="md:grid md:grid-cols-4 md:grid-rows-2 md:gap-6 space-y-4 md:space-y-0">
                        <div className="relative md:col-span-2 md:row-span-2 rounded-lg overflow-hidden">
                            <div className="absolute bottom-0 text-white font-bold pl-4 pb-4 z-20">
                                Beach Park Resort
                            </div>
                            <Image
                                src={"/img/resort/shadow.png"}
                                height={52}
                                width={1140}
                                alt="Text shadow"
                                className="absolute bottom-0 h-40 z-10"
                            />
                            <Image
                                src={"/img/resort/resort-1.jpeg"}
                                height={460}
                                width={840}
                                alt="Beach Park Resort"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="relative md:col-span-2 md:h-60 rounded-lg overflow-hidden">
                            <div className="absolute bottom-0 text-white font-bold pl-4 pb-4 z-20">
                                Salinas do Maragogi Resort
                            </div>
                            <Image
                                src={"/img/resort/shadow.png"}
                                height={52}
                                width={1140}
                                alt="Text shadow"
                                className="absolute bottom-0 h-40 z-10"
                            />
                            <Image
                                src={"/img/resort/resort-2.jpeg"}
                                height={575}
                                width={1024}
                                alt="Salinas do Maragogi Resort"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="relative rounded-lg overflow-hidden">
                            <div className="absolute bottom-0 text-white font-bold pl-4 pb-4 z-20">
                                Grand Palladium
                            </div>
                            <Image
                                src={"/img/resort/shadow.png"}
                                height={52}
                                width={1140}
                                alt="Text shadow"
                                className="absolute bottom-0 h-40 z-10"
                            />
                            <Image
                                src={"/img/resort/resort-3.jpeg"}
                                height={720}
                                width={1280}
                                alt="Grand Palladium"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="relative rounded-lg overflow-hidden">
                            <div className="absolute bottom-0 text-white font-bold pl-4 pb-4 z-20">
                                Arraial d&apos;Ajuda Ecoresort
                            </div>
                            <Image
                                src={"/img/resort/shadow.png"}
                                height={52}
                                width={1140}
                                alt="Arraial d'Ajuda Ecoresort"
                                className="absolute bottom-0 h-40 z-10"
                            />
                            <Image
                                src={"/img/resort/resort-4.jpeg"}
                                height={600}
                                width={900}
                                alt="Resort 4"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                <section className="container max-w-5xl mx-auto px-4 py-10 flex justify-center">
                    <form className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <select className="bg-gray-50 px-3 py-2 border border-gray-300 text-gray-500 rounded">
                            <option value="">Choose state</option>
                        </select>

                        <select className="bg-gray-50 px-3 py-2 border border-gray-300 text-gray-500 rounded">
                            <option value="">Choose city</option>
                        </select>

                        <button className="inline-flex col-span-2 sm:col-span-1 items-center justify-center bg-orange-400 text-black font-medium px-3 py-2 rounded">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-4 h-4 mr-2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                            Search resorts
                        </button>
                    </form>
                </section>

                <footer className="border-t border-gray-300">
                    <div className="container max-w-5xl mx-auto p-4 flex items-center justify-between h-24 text-black">
                        <div className="text-2xl text-gray-400 font-bold">
                            Resort
                        </div>

                        <div className="flex space-x-4">
                            <a href="">
                                <Image
                                    src={"/img/resort/facebook.png"}
                                    height={25}
                                    width={25}
                                    alt="Facebook"
                                />
                            </a>
                            <a href="">
                                <Image
                                    src={"/img/resort/instagram.png"}
                                    height={25}
                                    width={25}
                                    alt="Instagram"
                                />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default ResortTemplate
