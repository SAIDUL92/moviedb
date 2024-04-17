import Modal from "@/components/Modal";
import MovieDetails from "@/components/MovieDetails";
import { getMovieIndex } from "@/utils";

const MovieDetailsModalPage = async ({ params: { id, lang } }) => {

  const movieId = await getMovieIndex(id);

  if (movieId === -1) {
    return (
      <Modal>
        <p className="text-center p-5">
          This movie with {id} id was not found!
        </p>
      </Modal>
    );
  } else {
    return (
      <Modal>
        <MovieDetails id={id} lang={lang} />
      </Modal>
    );
  }
};

export default MovieDetailsModalPage;
