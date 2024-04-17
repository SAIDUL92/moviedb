import { getDictionary } from "@/app/[lang]/dictionaries";

async function Footer({ lang }) {
    const dictinary = await getDictionary(lang);
    return (
        <footer className="py-6 md:py-8 mt-8">
            <div className="container mx-auto">
                <p className="text-center text-sm text-black/30 dark:text-[#EEEEEE]/60">
                    {dictinary.copyRight}
                </p>
            </div>
        </footer>


    )
}

export default Footer