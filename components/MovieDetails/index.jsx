import { getDictionary } from "@/app/[lang]/dictionaries";
import { getAllMovies } from "@/utils";
import Image from "next/image";

async function MovieDetails({ id, lang }) {
  const dictinary = await getDictionary(lang);
  const movies = await getAllMovies();

  const movie =
    movies?.results.length > 0 &&
    movies?.results.find((movie) => {
      return movie.id === parseInt(id);
    });

  return (
    <section>
      <div>
        <Image
          className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
          src={movie?.backdrop_path}
          width={1222}
          height={500}
          alt="Image"
        />
      </div>
      <div className="grid grid-cols-12 py-12 gap-8">
        <div className="col-span-2">
          <Image
            src={movie?.poster_path}
            width={177}
            height={272}
            alt="Image"
          />
        </div>
        <div className="col-span-8">
          <h2 className="font-bold text-slate-300 text-2xl">
            {movie?.original_title}
          </h2>
          <p className="my-2 text-slate-400 italic">{movie?.overview}</p>
          <ul className="text-slate-300 space-y-2 my-8">
            <li>{dictinary.releaseDate} : {movie?.release_date}</li>
            <li>{dictinary.averageVote} : {movie?.vote_average}</li>
            <li>{dictinary.voteCount} : {movie?.vote_count}</li>
            <li>{dictinary.popularity} : {movie?.popularity}</li>
          </ul>
        </div>
        <div className="col-span-2 space-y-4">
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            {dictinary.streamInHD}
          </button>
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            {dictinary.downloadInHd}
          </button>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;
