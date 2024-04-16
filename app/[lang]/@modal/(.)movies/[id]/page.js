
import Modal from "@/components/Modal";
import MovieDetails from "@/components/MovieDetails";
import { notFound } from "next/navigation";

const MovieDetailsModalPage = ({ params: { id, lang } }) => {

    if (id > 4) {
        notFound(id)
    }
    return (
        <Modal>
            <MovieDetails id={id} lang={lang} />
        </Modal>

    )

}

export default MovieDetailsModalPage



