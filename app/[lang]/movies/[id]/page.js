import MovieDetails from "@/components/MovieDetails";
import { notFound } from "next/navigation";

const MovieDetailsPage = ({ params: { id, lang } }) => {
    if (id > 4) {
        notFound()
    }
    return (
        <MovieDetails id={id} lang={lang} />
    )

}

export default MovieDetailsPage