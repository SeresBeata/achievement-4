// Import PropTypes
import PropTypes from 'prop-types';
//Import components from React Bootstrap
import { Button, Card } from 'react-bootstrap';
//Import from react-router-dom
import { Link } from 'react-router-dom';

//Create MovieCard child component
//Pass data and function from parent component (MainView) to the child component (MovieCard) by using props.
//Export the created child component MovieCard, and return the title of the movies
export const MovieCard = ({ movie }) => {
    return (
        <Card className="h-100 movie-card--bg">
            {/* Redirect the user to the selected movie with <Link>. */}
            <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
                <Card.Img variant="top" src={movie.imagePath} />
            </Link>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
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
