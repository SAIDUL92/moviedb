
import Image from "next/image";
import Rating from "../Rating";
import { getDictionary } from "@/app/[lang]/dictionaries";
import Link from "next/link";

async function MovieCard({ movie, lang }) {
  const dictinary = await getDictionary(lang);
  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <Image
        className="w-full object-cover"
        src={movie.poster_path}
        width={305}
        height={368}
        alt="Image"
      />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{movie.original_title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">{movie.title}</p>
        <div className="flex items-center space-x-1 mb-5">
          <Rating maxRaiting={Math.floor(movie.vote_average)} />
        </div>
        <Link
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href={`/${lang}/movies/${movie.id}`
          }
        >
          <Image src="/assets/tag.svg" width={19} height={19} alt="Image" />
          <span>{dictinary.Details}</span>
        </Link>
      </figcaption>
    </figure >
  );
}


export default MovieCard;
