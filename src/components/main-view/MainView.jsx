import { useState } from 'react';
import { MovieCard } from '../movie-card/MovieCard';
import { MovieView } from '../movie-view/MovieView';

//Export the created MainView component
export const MainView = () => {
    //Use "useState" to declare a "state variable", called movies. Pass the initial state (which is an array with example movie objects) as an argument to the useState().
    const [movies, setMovies] = useState([
        {
            genre: {
                genreName: 'Period Drama',
                genreDescription:
                    'A film production set in a particular historical period and characterized by the use of costumes, sets, and props that are typical or evocative of the era.',
            },
            director: {
                directorName: 'Andy Tennant',
                bio: 'An American screenwriter, film and television director, actor, and dancer.',
                birth: '1955-06-15T00:00:00.000Z',
                death: null,
            },
            _id: '652be1b30cbb884054d2291b',
            title: 'Anna and the King',
            description:
                "The story concerns Anna Leonowens, an English school teacher in Siam during the late 19th century, who becomes the teacher of King Mongkut's many children and wives.",
            releaseDate: '2000-01-27T00:00:00.000Z',
            imagePath:
                'https://upload.wikimedia.org/wikipedia/en/5/5d/Anna_and_the_king.jpg',
            featured: false,
            __v: 0,
        },
        {
            genre: {
                genreName: 'Science Fiction',
                genreDescription:
                    'Science fiction (or sci-fi) is a film genre that uses speculative, fictional science-based depictions of phenomena.',
            },
            director: {
                directorName: 'Robert Zemeckis',
                bio: 'An American film and television director, writer and producer.',
                birth: '1952-05-14T00:00:00.000Z',
                death: null,
            },
            _id: '652be67f13a27678f514b9b8',
            title: 'Back to the Future',
            description:
                "Set in 1985, it follows Marty McFly, a teenager accidentally sent back to 1955 in a time-traveling DeLorean automobile built by his eccentric scientist friend Emmett 'Doc' Brown.",
            releaseDate: '1985-07-03T00:00:00.000Z',
            imagePath:
                'https://upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg',
            featured: true,
            __v: 0,
        },
        {
            genre: {
                genreName: 'Period Drama',
                genreDescription:
                    'A film production set in a particular historical period and characterized by the use of costumes, sets, and props that are typical or evocative of the era.',
            },
            director: {
                directorName: 'Ridley Scott',
                bio: 'Sir Ridley Scott is an English filmmaker, best known for directing sci-fi, crime, and period drama films.',
                birth: '1937-11-30T00:00:00.000Z',
                death: null,
            },
            _id: '652bdcc29e8512d7fafda0ee',
            title: 'Gladiator',
            description:
                'A Roman general Maximus Decimus Meridius is betrayed when Commodus, the ambitious son of Emperor Marcus Aurelius, murders his father and seizes the throne. Reduced to slavery, Maximus becomes a gladiator.',
            releaseDate: '2000-05-05T00:00:00.000Z',
            imagePath:
                'https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png',
            featured: false,
            __v: 0,
        },
    ]);

    //Create state variable, called selectedMovie, where the initial value of selectedMovie state is null.
    const [selectedMovie, setSelectedMovie] = useState(null);

    //Use conditional statement, if selectedMovie is true, then return the MovieView child component
    if (selectedMovie) {
        return <MovieView movie={selectedMovie} />;
    }

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
