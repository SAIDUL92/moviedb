import MovieDetails from "@/components/MovieDetails";
import { getMovieIndex } from "@/utils";

const MovieDetailsPage = async ({ params: { id, lang } }) => {
  const movieId = await getMovieIndex(id);

  if (movieId === -1) {
    return (
      <p className="text-center p-5">This movie with {id} id was not found!</p>
    );
  } else {
    return <MovieDetails id={id} lang={lang} />;
  }
};

export default MovieDetailsPage;
