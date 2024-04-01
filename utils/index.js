const movieData = {
    movies: () => import('../app/data/index.json').then((module) => module.default)
}

export const getMovies = async (movie) => movieData[movie]()



export const getAllMovies = async () => {
    const movies = await getMovies("movies");
    return movies;
}


export const getMovieById = async (id) => {
    const movies = await getAllMovies();
    return movies?.results.find(movie => movie.id === parseInt(id));
}
export const getMovieIndex = async (id) => {
    const movies = await getAllMovies();

    const getMovieIndex = movies?.results.findIndex(movie => movie.id === parseInt(id))
    return getMovieIndex;
}

