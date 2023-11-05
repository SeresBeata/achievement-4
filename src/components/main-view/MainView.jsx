import { useState } from 'react';
import { useEffect } from 'react';
import { MovieCard } from '../movie-card/MovieCard';
import { MovieView } from '../movie-view/MovieView';

//Export the created MainView component
export const MainView = () => {
    //Use "useState" to declare a "state variable", called movies. Pass the initial state (which is an empty array) as an argument to the useState().
    const [movies, setMovies] = useState([]);

    //Fetch data from API and populate movies state using setMovies, with the fetched movies array from myFlix API
    useEffect(() => {
        fetch('https://movieapi-myflix.onrender.com/movies')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const moviesFromApi = data.map((movie) => {
                    return {
                        _id: movie._id,
                        title: movie.title,
                        imagePath: movie.imagePath,
                        description: movie.description,
                        releaseDate: movie.releaseDate,
                        genre: {
                            genreName: movie.genre.genreName,
                            genreDescription: movie.genre.genreDescription,
                        },
                        director: {
                            directorName: movie.director.directorName,
                            bio: movie.director.bio,
                            birth: movie.director.birth,
                            death: movie.director.death,
                        },
                        featured: movie.featured,
                    };
                });
                setMovies(moviesFromApi);
            });
    }, []);

    //Create state variable, called selectedMovie, where the initial value of selectedMovie state is null.
    const [selectedMovie, setSelectedMovie] = useState(null);

    //Use conditional statement, if selectedMovie is true, then return the MovieView child component
    if (selectedMovie) {
        return (
            <MovieView
                movie={selectedMovie}
                //Pass a function from the MainView component to MovieView as a prop called onBackClick that executes setSelectedMovies(), setting the value of selectedMovie to the initial state value, null.
                onBackClick={() => setSelectedMovie(null)}
            />
        );
    }

    //If movies array is empty, return message "The list is empty!"
    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    //Return the <h1> with the titles of movies
    return (
        <>
            <h1>Movies</h1>
            <div>
                {/* Use the map() method to iterate through movies array items*/}
                {movies.map((movie) => {
                    {
                        /* Pass data from parent component (MainView) to a child component (MovieCard) by using prop, called "movie". */
                        /* Pass a function from the MainView component to MoveCard as a prop called onMovieClick that executes setSelectedMovies(). */
                    }
                    return (
                        <MovieCard
                            key={movie._id}
                            movie={movie}
                            onMovieClick={(newSelectedMovie) =>
                                setSelectedMovie(newSelectedMovie)
                            }
                        />
                    );
                })}
            </div>
        </>
    );
};
