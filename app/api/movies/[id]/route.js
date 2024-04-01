
import { getAllMovies, getMovieById, getMovieIndex } from "@/utils";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

const movies = await getAllMovies();

export async function GET(_request, { params }) {

    const movieId = params?.id;

    if (parseInt(movieId) > movies.results.length) {
        redirect('/api/movies')

    }
    const data = await getMovieById(movieId);
    return NextResponse.json(data)

}

export async function PATCH(request, { params }) {


    const movie = await request.json()

    const movieId = params?.id;


    const movieIndex = await getMovieIndex(movieId);

    movies.results[movieIndex] = movie.title

    return NextResponse.json(movies.results[movieIndex])

}


export async function DELETE(_request, { params }) {

    const movieId = params?.id;

    const movieIndex = await getMovieIndex(movieId);

    const movieToDlete = movies.results[movieIndex]

    movies.results.splice(movieToDlete, 1)

    return NextResponse.json(movieToDlete)

}