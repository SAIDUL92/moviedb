import MovieDetails from "@/components/MovieDetails";

const MovieDetailsPage = ({ params: { id, lang } }) => {
    return (
        <MovieDetails id={id} lang={lang} />
    )

}

export default MovieDetailsPage