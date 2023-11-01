import { useState } from 'react';

//Export the created MainView component
export const MainView = () => {
    //Use "useState" to declare a "state variable", called movies. Pass the initial state (which is an array with example movie objects) as an argument to the useState().
    const [movies, setMovies] = useState([
        { id: 1, title: 'movie-1', genre: 'drama' },
        { id: 2, title: 'movie-2', genre: 'sci-fi' },
        { id: 3, title: 'movie-3', genre: 'comedy' },
    ]);

    //If movies array is empty, return message "The list is empty!"
    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    //Return the <h1> with the titles and genres of example movies
    return (
        <>
            <h1>Movies</h1>
            <div>
                {/* Use the map() method to iterate through movies array items*/}
                {movies.map((movie) => {
                    return (
                        <div key={movie.id}>
                            <span>Title: {movie.title}</span>
                            <span> Genre: {movie.genre}</span>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
