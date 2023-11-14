import { useState } from 'react';
import { useEffect } from 'react';
import { MovieCard } from '../movie-card/MovieCard';
import { MovieView } from '../movie-view/MovieView';
import { LoginView } from '../login-view/LoginView';
import { SignupView } from '../signup-view/SignupView';
//Import components from React Bootstrap
import { Row, Col, Button } from 'react-bootstrap';

//Export the created MainView component
export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem('user')); //Use getItem() to retrieve "user" from localStorage
    const storedToken = localStorage.getItem('token'); //Use getItem() to retrieve "token" from localStorage
    //Create state variable, called user with initial stale "null". Use to check if user is logged in or not.
    const [user, setUser] = useState(storedUser ? storedUser : null);
    //Create state variable, called token with initial state "null". Use to store token.
    const [token, setToken] = useState(storedToken ? storedToken : null);
    //Use "useState" to declare a "state variable", called movies. Pass the initial state (which is an empty array) as an argument to the useState().
    const [movies, setMovies] = useState([]);
    //Create state variable, called selectedMovie, where the initial value of selectedMovie state is null.
    const [selectedMovie, setSelectedMovie] = useState(null);

    //Fetch data from API and populate movies state using setMovies, with the fetched movies array from myFlix API
    useEffect(() => {
        if (!token) {
            return;
        }
        fetch('https://movie-myflix-c346f5fde8cf.herokuapp.com/movies', {
            headers: { Authorization: `Bearer ${token}` },
        })
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
    }, [token]);
};
