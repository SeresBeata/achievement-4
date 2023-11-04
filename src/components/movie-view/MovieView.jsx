// Import PropTypes
import PropTypes from 'prop-types';

//Create MovieView child component
//Pass data and function from parent component (MainView) to the child component (MovieView) by using props
//Export the created child component MovieView, and return data about current movie in case of click event
export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div>
            <div>
                <img src={movie.imagePath} alt="Poster of the movie." />
            </div>
            <div>
                <h3>
                    <span>Title: </span>
                    <span>{movie.title}</span>
                </h3>
            </div>
            <div>
                <p>
                    <span>Genre: </span>
                    <span>{movie.genre.genreName}</span>
                </p>
            </div>
            <div>
                <p>
                    <span>Release Date: </span>
                    {/* To convert an ISO date to the date format yyyy-mm-dd. */}
                    <span>{movie.releaseDate.split('T')[0]}</span>
                </p>
            </div>
            <div>
                <p>
                    <span>Director: </span>
                    <span>{movie.director.directorName}</span>
                </p>
            </div>
            <div>
                <p>Description:</p>
                <p>{movie.description}</p>
            </div>
            <div>
                <button
                    //Call the function prop onBackClick when the button click occurs.
                    onClick={onBackClick}
                >
                    Back
                </button>
            </div>
        </div>
    );
};

//Define all the props constraints for the MovieView
MovieView.propTypes = {
    movie: PropTypes.shape({
        imagePath: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        genre: PropTypes.shape({
            genreName: PropTypes.string.isRequired,
        }),
        description: PropTypes.string.isRequired,
        director: PropTypes.shape({
            directorName: PropTypes.string.isRequired,
        }),
    }).isRequired,
    onBackClick: PropTypes.func.isRequired,
};
