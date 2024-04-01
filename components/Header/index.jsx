import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header>
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <Link href="/">
                    <Image src="/assets/logo.svg" width={139} height={26} alt="image" />
                </Link>
                <ul className="flex items-center space-x-5">
                    <li>
                        <Link
                            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                            href="#"
                        >
                            <Image src="/assets/ring.svg" width={24} height={24} alt="image" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                            href="#"
                        >
                            <Image src="/assets/icons/sun.svg" width={24} height={24} alt="image" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                            href="#"
                        >
                            <Image src="/assets/shopping-cart.svg" width={24} height={24} alt="image" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Header