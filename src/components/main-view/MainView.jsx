import { useState } from 'react';
import { useEffect } from 'react';
import { MovieCard } from '../movie-card/MovieCard';
import { MovieView } from '../movie-view/MovieView';
import { LoginView } from '../login-view/LoginView';
import { SignupView } from '../signup-view/SignupView';
//Import components from React Bootstrap
import { Row, Col, Button } from 'react-bootstrap';
//import from react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//import navbar child component
import { NavigationBar } from '../navigation-bar/NavigationBar';
//import ProfileView child component
import { ProfileView } from '../profile-view/ProfileView';
//import FavMovieView child component
import { FavMovieView } from '../favMovie-view/FavMovieView';

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

    //Use state-based router & ternary operator depending on what to return:
    return (
        <BrowserRouter>
            {/* Create Navbar */}
            <NavigationBar //Nullify the token when the logout button is clicked. And clear the localStorage too.
                user={user}
                onLoggedOut={() => {
                    setUser(null);
                    setToken(null);
                    localStorage.clear();
                }}
            />
            <Row className="justify-content-md-center justify-content-sm-center">
                <Routes>
                    {/* Use the <Route> components of react-router-dom for state-based router.  */}
                    {/* Create 4 routes for signup, login, selected-movie and all-movies  */}
                    <Route
                        path="/signup"
                        element={
                            <>
                                {/* Use ternary operator: if user is "truthy" then navigate to "/", if user is "falsy", then return the SignupView child component. */}
                                {user ? (
                                    <Navigate to="/" />
                                ) : (
                                    <Col lg={4} md={6} sm={12} xs={12}>
                                        {/* <h3>Signup:</h3> */}
                                        <SignupView />
                                    </Col>
                                )}
                            </>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <>
                                {/* Use ternary operator: if user is "truthy" then navigate to "/", if user is "falsy", then return the LoginView child component. */}
                                {user ? (
                                    <Navigate to="/" />
                                ) : (
                                    <Col lg={4} md={6} sm={12} xs={12}>
                                        {/* <h3>Login:</h3> */}
                                        <LoginView
                                            onLoggedIn={(user, token) => {
                                                setUser(user);
                                                setToken(token);
                                            }}
                                        />
                                    </Col>
                                )}
                            </>
                        }
                    />
                    <Route
                        path="/movies/:movieId"
                        element={
                            <>
                                {/* Use ternary operator: if user is "falsy" then navigate to "/login". */}
                                {!user ? (
                                    //Use replace options property, to redirect to "/login".
                                    <Navigate to="/login" replace />
                                ) : movies.length === 0 ? (
                                    //if movies array is empty, return message "The list is empty!
                                    <Col>The list is empty!</Col>
                                ) : (
                                    //return the MovieView child component
                                    <Col
                                        lg={6}
                                        md={8}
                                        sm={12}
                                        xs={12}
                                        className="movie-view--bg"
                                    >
                                        <MovieView movies={movies} />
                                    </Col>
                                )}
                            </>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <>
                                {/* Use ternary operator: if user is "falsy" then navigate to "/login". */}
                                {!user ? (
                                    //Use replace options property, to redirect to "/login".
                                    <Navigate to="/login" replace />
                                ) : movies.length === 0 ? (
                                    //if movies array is empty, return message "The list is empty!
                                    <Col>The list is empty!</Col>
                                ) : (
                                    <>
                                        {/* Use the map() method to iterate through movies array items*/}
                                        {movies.map((movie) => (
                                            //return the MovieCard child component
                                            <Col
                                                key={movie._id}
                                                className="mb-4"
                                                lg={3}
                                                md={4}
                                                sm={6}
                                                xs={12}
                                            >
                                                <MovieCard movie={movie} />
                                            </Col>
                                        ))}
                                    </>
                                )}
                            </>
                        }
                    />
                    {/* Create further routes for profile, favMovie, update-profile and del-account: */}
                    <Route
                        path="users/:userId"
                        element={
                            <>
                                {/* Use ternary operator: if user is "falsy" then navigate to "/login". */}
                                {!user ? (
                                    //Use replace options property, to redirect to "/login".
                                    <Navigate to="/login" replace />
                                ) : (
                                    //return the ProfileView child component
                                    <Col>
                                        <ProfileView user={user} />
                                    </Col>
                                )}
                            </>
                        }
                    />
                    <Route
                        path="users/favMovies/:userId"
                        element={
                            <>
                                {/* Use ternary operator: if user is "falsy" then navigate to "/login". */}
                                {!user ? (
                                    //Use replace options property, to redirect to "/login".
                                    <Navigate to="/login" replace />
                                ) : (
                                    //return the favMovieView child component
                                    <Col>
                                        <FavMovieView
                                            user={user}
                                            movies={movies}
                                        />
                                    </Col>
                                )}
                            </>
                        }
                    />
                </Routes>
            </Row>
        </BrowserRouter>
    );
};
