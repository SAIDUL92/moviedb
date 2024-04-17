import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";
import Link from "next/link";

async function SideBar({ lang }) {
    const dictinary = await getDictionary(lang);
    return (
        <aside>
            <ul className="space-y-2">
                <li>
                    <Link
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
                        href="#"
                    >
                        <Image src="/assets/icons/trending.svg" width={24} height={24} alt="Image" />
                        <span>{dictinary.trending}</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        href="#"
                    >
                        <Image
                            src="/assets/icons/newRelease.svg"
                            width={24}
                            height={24}
                            alt="Image"
                        />
                        <span>{dictinary.newReleases}</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        href="#"
                    >
                        <Image
                            src="/assets/icons/commingSoon.svg"
                            width={24}
                            height={24}
                            alt="Image"
                        />
                        <span>{dictinary.ComingSoon}</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        href="#"
                    >
                        <Image src="/assets/icons/favourite.svg" width={24} height={24} alt="Image" />
                        <span>{dictinary.Favourites}</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        href="#"
                    >
                        <Image
                            src="/assets/icons/watchLater.svg"
                            width={24}
                            height={24}
                            alt="Image"
                        />
                        <span>{dictinary.WatchLater}</span>
                    </Link>
                </li>
            </ul>
        </aside>


    )
}

export default SideBar