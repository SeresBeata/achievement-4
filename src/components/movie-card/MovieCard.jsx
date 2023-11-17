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
export const MovieCard = ({ user, movie }) => {
    // Create state variable, called isFavorite, where the initial state is "false"
    const [isFavorite, setIsFavorite] = useState(false);

    //Set the isFavorite state variable to "true", if there is fav movie of the current user
    useEffect(() => {
        //console.log(user.favouriteMovies);
        if (user.favouriteMovies && user.favouriteMovies.includes(movie._id)) {
            setIsFavorite(true);
        }
    }, [user]);
    console.log(isFavorite);

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
                        {/* Use ternary operator to check if the movie is one of the favourite movies, if yes, then return "red-heart". */}
                        {isFavorite ? (
                            <i className="fa-solid fa-heart fav-movie--clicked"></i>
                        ) : (
                            <i className="fa-solid fa-heart fav-movie--btn"></i>
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
