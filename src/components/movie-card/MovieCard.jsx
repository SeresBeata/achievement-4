// Import PropTypes
import PropTypes from 'prop-types';
//Import components from React Bootstrap
import { Button, Card } from 'react-bootstrap';
//Import from react-router-dom
import { Link } from 'react-router-dom';
//Import scss
import './movie-card.scss';
//Import useState()
import { useState } from 'react';
//Import useEffect()
import { useEffect } from 'react';

//Create MovieCard child component
//Pass data and function from parent component (MainView) to the child component (MovieCard) by using props.
//Export the created child component MovieCard, and return the title of the movies
export const MovieCard = ({ user, movie, token, setUser }) => {
    // Create state variable, called isFavorite, where the initial state is "fav-movie-list"
    const [isFavorite, setIsFavorite] = useState(
        JSON.stringify(user.favouriteMovies).includes(movie._id)
    );

    console.log(
        JSON.stringify(user.favouriteMovies) + '\n\n' + JSON.stringify(movie)
    );

    //Use fetch() to add movie to fav-movie-list
    const addFavoriteMovie = () => {
        fetch(
            `https://movie-myflix-c346f5fde8cf.herokuapp.com/users/${user._id}/${movie._id}`,
            { method: 'POST', headers: { Authorization: `Bearer ${token}` } }
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log('Failed to add fav movie');
                }
            })
            .then((user) => {
                if (user) {
                    //alert('successfully added to favorites');
                    localStorage.setItem('user', JSON.stringify(user));
                    setUser(user);
                    setIsFavorite(true);
                }
            })
            .catch((error) => {
                alert(error);
            });
    };

    //Use fetch() to remove movie from fav-movie-list
    const removeFavoriteMovie = () => {
        fetch(
            `https://movie-myflix-c346f5fde8cf.herokuapp.com/users/${user._id}/${movie._id}`,
            { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } }
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    alert('Failed');
                }
            })
            .then((user) => {
                if (user) {
                    //alert('successfully deleted from favorites');
                    localStorage.setItem('user', JSON.stringify(user));
                    setUser(user);
                    setIsFavorite(false);
                }
            })
            .catch((error) => {
                alert(error);
            });
    };

    return (
        <Card className="h-100 movie-card--bg">
            {/* Redirect the user to the selected movie with <Link>. */}
            <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
                <Card.Img variant="top" src={movie.imagePath} />
            </Link>
            <Card.Body>
                <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <Card.Title>{movie.title}</Card.Title>
                    <div>
                        {/* Use ternary operator to check if the movie is one of the favourite movies, if yes, then return "full-red-heart". */}
                        {isFavorite ? (
                            <Button
                                className="btn-fav-movie"
                                variant="link"
                                onClick={removeFavoriteMovie}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    fill="red"
                                    className="bi bi-heart-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                    />
                                </svg>
                            </Button>
                        ) : (
                            <Button
                                className="btn-fav-movie"
                                variant="link"
                                onClick={addFavoriteMovie}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    fill="red"
                                    className="bi bi-heart"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                            </Button>
                        )}
                    </div>
                </div>
                {/* Redirect the user to the selected movie with <Link>. */}
                <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
                    <Button variant="link">Open</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

//Define all the props constraints for the MovieCard
MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
};
