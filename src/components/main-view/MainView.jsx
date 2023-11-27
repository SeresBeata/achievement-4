import { useState } from 'react';
import { useEffect } from 'react';
import { MovieCard } from '../movie-card/MovieCard';
import { MovieView } from '../movie-view/MovieView';
import { LoginView } from '../login-view/LoginView';
import { SignupView } from '../signup-view/SignupView';
//Import components from React Bootstrap
import { Row, Col, Button, Card, ListGroup } from 'react-bootstrap';
//import from react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//import navbar child component
import { NavigationBar } from '../navigation-bar/NavigationBar';
//import ProfileView child component
import { ProfileView } from '../profile-view/ProfileView';
//import FavMovieView child component
import { FavMovieView } from '../favMovie-view/FavMovieView';
//import UpdateProfileView child component
import { UpdateProfileView } from '../updateProfile-view/UpdateProfileView';
//import DeleteProfileView child component
import { DeleteProfileView } from '../deleteProfile-view/DeleteProfileView';
//import from react-youtube
import YouTube from 'react-youtube';
//import scss
import './main-view.scss';

//Export the created MainView component
export const MainView = () => {
    //adds backdrop for login view and gets rid of it once user logs in
    useEffect(() => {
        if (!user) {
            document.body.classList.add('login-backdrop');
        } else {
            document.body.classList.remove('login-backdrop');
        }
    });

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
    //Create variable that holds initial number of movies to be shown and for the number of additional movies to show each time the user clicks the load more button.
    const imagePerRow = 4;
    //Create state variable, called "next", which stores the initial number of movies to be shown and update the state on load more button click.
    const [next, setNext] = useState(imagePerRow);

    //filter movies by genre
    //drama
    const dramaSearch = movies.filter(
        (movie) => movie.genre.genreName === 'Period Drama'
    );
    const dramaGenreSearch = movies.filter(
        (movie) => movie._id === '652be2cf7a989d00e1a05b67'
    );
    //sci-fi
    const scifiSearch = movies.filter(
        (movie) => movie.genre.genreName === 'Science Fiction'
    );
    const scifiGenreSearch = movies.filter(
        (movie) => movie._id === '652be67f13a27678f514b9b8'
    );
    //hero
    const heroSearch = movies.filter(
        (movie) => movie.genre.genreName === 'Superhero Film'
    );
    const heroGenreSearch = movies.filter(
        (movie) => movie._id === '652beb2b712c744fccad1afd'
    );
    //fantasy
    const fantasySearch = movies.filter(
        (movie) => movie.genre.genreName === 'Fantasy'
    );
    const fantasyGenreSearch = movies.filter(
        (movie) => movie._id === '652bec178118f503255d2f57'
    );

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

    //Create the handleMoreImage function that will run each time the load more button is clicked.
    const handleMoreImage = () => {
        setNext(next + imagePerRow);
    };

    //Create show-less function that reloads the page
    const handleShowLess = () => {
        window.location.reload();
    };

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
                id="top"
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
                                        lg={4}
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
                                    //if movies array is empty, return hourglass
                                    <Col>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                margin: '30px 0 0 0',
                                                fontSize: '50px',
                                            }}
                                        >
                                            ⏳
                                        </div>
                                    </Col>
                                ) : (
                                    <>
                                        {/* Create show-less btn and give it a onClick handler called handleShowLess.  */}
                                        {next === movies.length && (
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Button
                                                    onClick={handleShowLess}
                                                    style={{
                                                        width: '150px',
                                                        color: '#635f5f',
                                                        border: 'solid 1px #635f5f',
                                                        background:
                                                            'rgba(0, 0, 0, 0.6)',
                                                        fontWeight: 'bolder',
                                                        textTransform:
                                                            'uppercase',
                                                        margin: '10px 0 30px 0',
                                                    }}
                                                >
                                                    Show less
                                                </Button>
                                            </div>
                                        )}
                                        {/* Use the map() method to iterate through movies array items*/}
                                        {movies.slice(0, next).map((movie) => (
                                            //return the MovieCard child component
                                            <Col
                                                key={movie._id}
                                                className="mb-4"
                                                lg={3}
                                                md={4}
                                                sm={6}
                                                xs={12}
                                            >
                                                <MovieCard
                                                    user={user}
                                                    movie={movie}
                                                    token={token}
                                                    setUser={setUser}
                                                />
                                            </Col>
                                        ))}
                                        {/* Create a load more button and give it a onClick handler called handleMoreImage . */}
                                        {next < movies.length && (
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Button
                                                    onClick={handleMoreImage}
                                                    style={{
                                                        width: '150px',
                                                        color: '#635f5f',
                                                        border: 'solid 1px #635f5f',
                                                        background:
                                                            'rgba(0, 0, 0, 0.6)',
                                                        fontWeight: 'bolder',
                                                        textTransform:
                                                            'uppercase',
                                                        margin: '10px 0 20px 0',
                                                    }}
                                                    className="main-btn--load"
                                                >
                                                    Load more
                                                </Button>
                                            </div>
                                        )}
                                        {/* Create go-to-top btn by using href of <a>. Use id of <NavigationBar> at href. */}
                                        {next === movies.length && (
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <a
                                                    href="#top"
                                                    style={{
                                                        color: '#635f5f',
                                                        fontWeight: 'bolder',
                                                        textTransform:
                                                            'uppercase',
                                                        textDecoration: 'none',
                                                    }}
                                                >
                                                    <Button
                                                        style={{
                                                            width: '150px',
                                                            color: '#635f5f',
                                                            border: 'solid 1px #635f5f',
                                                            background:
                                                                'rgba(0, 0, 0, 0.6)',
                                                            fontWeight:
                                                                'bolder',
                                                            textTransform:
                                                                'uppercase',
                                                            margin: '10px 0 20px 0',
                                                        }}
                                                    >
                                                        Go to the Top
                                                    </Button>
                                                </a>
                                            </div>
                                        )}
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
                                            token={token}
                                            setUser={setUser}
                                        />
                                    </Col>
                                )}
                            </>
                        }
                    />
                    {/* Create route to update-profile */}
                    <Route
                        path="users/update/:userId"
                        element={
                            <>
                                {/* Use ternary operator: if user is "falsy" then navigate to "/login". */}
                                {!user ? (
                                    //Use replace options property, to redirect to "/login".
                                    <Navigate to="/login" replace />
                                ) : (
                                    //return the UpdateProfileView child component
                                    <Col>
                                        <UpdateProfileView
                                            user={user}
                                            token={token}
                                        />
                                    </Col>
                                )}
                            </>
                        }
                    />
                    {/* Create route to delete-profile */}
                    <Route
                        path="users/delete/:userId"
                        element={
                            <>
                                {/* Use ternary operator: if user is "falsy" then navigate to "/login". */}
                                {!user ? (
                                    //Use replace options property, to redirect to "/login".
                                    <Navigate to="/login" replace />
                                ) : (
                                    //return the DeleteProfileView child component
                                    <Col>
                                        <DeleteProfileView
                                            user={user}
                                            token={token}
                                            setUser={setUser}
                                        />
                                    </Col>
                                )}
                            </>
                        }
                    />
                    {/* Create route for filtered movies by genre */}
                    <Route
                        path="movies/moviesbygenres/period-drama"
                        element={
                            <>
                                {/* Use ternary operator: if user is "falsy" then navigate to "/login". */}
                                {!user ? (
                                    //Use replace options property, to redirect to "/login".
                                    <Navigate to="/login" replace />
                                ) : (
                                    //return period drama movies

                                    <>
                                        {dramaGenreSearch.map((movie) => (
                                            <div
                                                key={movie._id}
                                                style={{
                                                    textAlign: 'center',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Card
                                                    style={{
                                                        marginBottom: '20px ',
                                                    }}
                                                >
                                                    <ListGroup variant="flush">
                                                        <ListGroup.Item>
                                                            <h2>
                                                                {
                                                                    movie.genre
                                                                        .genreName
                                                                }
                                                            </h2>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item>
                                                            <div>
                                                                {
                                                                    movie.genre
                                                                        .genreDescription
                                                                }
                                                            </div>
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                </Card>
                                            </div>
                                        ))}

                                        {dramaSearch.map((movie) => (
                                            //return the MovieCard child component
                                            <Col
                                                key={movie._id}
                                                className="mb-4"
                                                lg={3}
                                                md={4}
                                                sm={6}
                                                xs={12}
                                            >
                                                <MovieCard
                                                    user={user}
                                                    movie={movie}
                                                    token={token}
                                                    setUser={setUser}
                                                />
                                            </Col>
                                        ))}
                                    </>
                                )}
                            </>
                        }
                    />
                    <Route
                        path="movies/moviesbygenres/sci-fi"
                        element={
                            <>
                                {/* Use ternary operator: if user is "falsy" then navigate to "/login". */}
                                {!user ? (
                                    //Use replace options property, to redirect to "/login".
                                    <Navigate to="/login" replace />
                                ) : (
                                    //return period drama movies

                                    <>
                                        {scifiGenreSearch.map((movie) => (
                                            <div
                                                key={movie._id}
                                                style={{
                                                    textAlign: 'center',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Card
                                                    style={{
                                                        marginBottom: '20px ',
                                                    }}
                                                >
                                                    <ListGroup variant="flush">
                                                        <ListGroup.Item>
                                                            <h2>
                                                                {
                                                                    movie.genre
                                                                        .genreName
                                                                }
                                                            </h2>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item>
                                                            <div>
                                                                {
                                                                    movie.genre
                                                                        .genreDescription
                                                                }
                                                            </div>
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                </Card>
                                            </div>
                                        ))}

                                        {scifiSearch.map((movie) => (
                                            //return the MovieCard child component
                                            <Col
                                                key={movie._id}
                                                className="mb-4"
                                                lg={3}
                                                md={4}
                                                sm={6}
                                                xs={12}
                                            >
                                                <MovieCard
                                                    user={user}
                                                    movie={movie}
                                                    token={token}
                                                    setUser={setUser}
                                                />
                                            </Col>
                                        ))}
                                    </>
                                )}
                            </>
                        }
                    />
                    <Route
                        path="movies/moviesbygenres/hero"
                        element={
                            <>
                                {/* Use ternary operator: if user is "falsy" then navigate to "/login". */}
                                {!user ? (
                                    //Use replace options property, to redirect to "/login".
                                    <Navigate to="/login" replace />
                                ) : (
                                    //return period drama movies

                                    <>
                                        {heroGenreSearch.map((movie) => (
                                            <div
                                                key={movie._id}
                                                style={{
                                                    textAlign: 'center',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Card
                                                    style={{
                                                        marginBottom: '20px ',
                                                    }}
                                                >
                                                    <ListGroup variant="flush">
                                                        <ListGroup.Item>
                                                            <h2>
                                                                {
                                                                    movie.genre
                                                                        .genreName
                                                                }
                                                            </h2>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item>
                                                            <div>
                                                                {
                                                                    movie.genre
                                                                        .genreDescription
                                                                }
                                                            </div>
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                </Card>
                                            </div>
                                        ))}

                                        {heroSearch.map((movie) => (
                                            //return the MovieCard child component
                                            <Col
                                                key={movie._id}
                                                className="mb-4"
                                                lg={3}
                                                md={4}
                                                sm={6}
                                                xs={12}
                                            >
                                                <MovieCard
                                                    user={user}
                                                    movie={movie}
                                                    token={token}
                                                    setUser={setUser}
                                                />
                                            </Col>
                                        ))}
                                    </>
                                )}
                            </>
                        }
                    />
                    {/* Create route for filtered movies by fantasy genre */}
                    <Route
                        path="movies/moviesbygenres/fantasy"
                        element={
                            <>
                                {/* Use ternary operator: if user is "falsy" then navigate to "/login". */}
                                {!user ? (
                                    //Use replace options property, to redirect to "/login".
                                    <Navigate to="/login" replace />
                                ) : (
                                    //return fantasy movies

                                    <>
                                        {fantasyGenreSearch.map((movie) => (
                                            <div
                                                key={movie._id}
                                                style={{
                                                    textAlign: 'center',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Card
                                                    style={{
                                                        marginBottom: '20px ',
                                                    }}
                                                >
                                                    <ListGroup variant="flush">
                                                        <ListGroup.Item>
                                                            <h2>
                                                                {
                                                                    movie.genre
                                                                        .genreName
                                                                }
                                                            </h2>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item>
                                                            <div>
                                                                {
                                                                    movie.genre
                                                                        .genreDescription
                                                                }
                                                            </div>
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                </Card>
                                            </div>
                                        ))}

                                        {fantasySearch.map((movie) => (
                                            //return the MovieCard child component
                                            <Col
                                                key={movie._id}
                                                className="mb-4"
                                                lg={3}
                                                md={4}
                                                sm={6}
                                                xs={12}
                                            >
                                                <MovieCard
                                                    user={user}
                                                    movie={movie}
                                                    token={token}
                                                    setUser={setUser}
                                                />
                                            </Col>
                                        ))}
                                    </>
                                )}
                            </>
                        }
                    />
                    {/* Create route to trailer */}
                    <Route
                        path="/trailer"
                        element={
                            <>
                                {/* Use ternary operator: if user is "falsy" then navigate to "/login". */}
                                {!user ? (
                                    //Use replace options property, to redirect to "/login".
                                    <Navigate to="/login" replace />
                                ) : (
                                    //return video as <iframe>
                                    <Col>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                margin: '20px 0 30px 0',
                                            }}
                                        >
                                            <h1> 📽️ Upcoming releases 🎬</h1>
                                        </div>

                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <iframe
                                                width="560"
                                                height="315"
                                                src="https://www.youtube.com/embed/ewc7TV4Ucbg?si=nGuWk7fjbgigQfa6"
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                margin: '20px 0 30px 0',
                                            }}
                                        >
                                            <div>
                                                <span
                                                    style={{
                                                        fontSize: '50px',
                                                    }}
                                                >
                                                    🍿
                                                </span>
                                                Don't miss out on the best!{' '}
                                                <span
                                                    style={{
                                                        fontSize: '50px',
                                                    }}
                                                >
                                                    🥤
                                                </span>
                                            </div>
                                        </div>
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
