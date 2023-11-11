// Import PropTypes
import PropTypes from 'prop-types';
//Import components from React Bootstrap
import { Button, Card } from 'react-bootstrap';

//Create MovieCard child component
//Pass data and function from parent component (MainView) to the child component (MovieCard) by using props.
//Export the created child component MovieCard, and return the title of the movies
export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <Card
            className="h-100 movie-card--bg"
            // After extracting the onMovieClick prop, call the passed function within the callback of the onClick event listener.
            onClick={() => onMovieClick(movie)}
        >
            <Card.Img variant="top" src={movie.imagePath} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Button
                    // After extracting the onMovieClick prop, call the passed function within the callback of the onClick event listener.
                    onClick={() => onMovieClick(movie)}
                    variant="link"
                >
                    Open
                </Button>
            </Card.Body>
        </Card>
    );
};

//Define all the props constraints for the MovieCard
MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired,
};
