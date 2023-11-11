// Import PropTypes
import PropTypes from 'prop-types';

//Create MovieCard child component
//Pass data and function from parent component (MainView) to the child component (MovieCard) by using props.
//Export the created child component MovieCard, and return the title of the movies
export const MovieCard = ({ movie, onMovieClick }) => {
    return (
    );
};

//Define all the props constraints for the MovieCard
MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired,
};
