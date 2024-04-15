import MovieCard from "@/components/MovieCard";
import { getAllMovies } from "@/utils";

export default async function HomePage() {
  const movies = await getAllMovies();

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {/* Begin Card */}

        {movies?.results.length > 0 &&
          movies?.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}

        {/* End Card */}
      </div>
    </div>
  );
}
