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
        fetch('https://movieapi-myflix.onrender.com/movies', {
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

    //Use ternary operator depending on what to return:
    return (
        <Row className="justify-content-md-center justify-content-sm-center">
            {/*Use ternary operator: if no user is logged in, then return the LoginView and SignupView child component. 
            With it the user have to login in before being able to see the movies of MyFlix. */}
            {!user ? (
                <Col lg={4} md={6} sm={12} xs={12}>
                    <h3>Login:</h3>
                    <LoginView
                        onLoggedIn={(user, token) => {
                            setUser(user);
                            setToken(token);
                        }}
                    />
                    or
                    <h3>Signup:</h3>
                    <SignupView />
                </Col>
            ) : selectedMovie ? (
                //Use ternary operator: if selectedMovie is true, then return the MovieView child component
                <Col
                    lg={6}
                    md={8}
                    sm={12}
                    xs={12}
                    style={{ border: '1px solid green' }}
                    className="movie-view--bg"
                >
                    <MovieView
                        movie={selectedMovie}
                        //Pass a function from the MainView component to MovieView as a prop called onBackClick that executes setSelectedMovies(), setting the value of selectedMovie to the initial state value, null.
                        onBackClick={() => setSelectedMovie(null)}
                    />
                </Col>
            ) : movies.length === 0 ? (
                // Use ternary operator: if movies array is empty, return message "The list is empty!"
                <div>The list is empty!</div>
            ) : (
                //Return the heading with the titles of movies
                <>
                    <h1>Movies</h1>
                    {/* Use the map() method to iterate through movies array items*/}
                    {movies.map((movie) => (
                        //Pass data from parent component (MainView) to a child component (MovieCard) by using prop, called "movie".
                        //Pass a function from the MainView component to MoveCard as a prop called onMovieClick that executes setSelectedMovies().
                        <Col
                            key={movie._id}
                            className="mb-4"
                            lg={3}
                            md={4}
                            sm={6}
                            xs={12}
                        >
                            <MovieCard
                                movie={movie}
                                onMovieClick={(newSelectedMovie) => {
                                    setSelectedMovie(newSelectedMovie);
                                }}
                            />
                        </Col>
                    ))}

                    <Button //Create btn for logout: nullify the token when the logout button is clicked. And clear the localStorage too.
                        onClick={() => {
                            setUser(null);
                            setToken(null);
                            localStorage.clear();
                        }}
                    >
                        Logout
                    </Button>
                </>
            )}
        </Row>
    );
};
