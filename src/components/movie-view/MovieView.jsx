// Import PropTypes
import PropTypes from 'prop-types';
//Import components from React Bootstrap
import { Button } from 'react-bootstrap';
//Import from react-router-dom
import { Link } from 'react-router-dom';
//Import from react-router
import { useParams } from 'react-router';

//Create MovieView child component
//Pass data and function from parent component (MainView) to the child component (MovieView) by using props
//Export the created child component MovieView, and return data about current movie in case of click event
export const MovieView = ({ movies }) => {
    //Use useParams() to access the movieId URL param
    const { movieId } = useParams();

    //Use find() to get the targeted movie
    const movie = movies.find((m) => m._id === movieId);

    return (
        <div>
            <div>
                <img
                    className="movie-view--img"
                    src={movie.imagePath}
                    alt="Poster of the movie."
                />
            </div>
            <div
                style={{
                    textAlign: 'center',
                    paddingTop: '20px',
                    paddingBottom: '20px',
                }}
            >
                <h3>
                    {/* <span>Title: </span> */}
                    <span>{movie.title}</span>
                </h3>
            </div>
            <div>
                <p>
                    <span
                        style={{
                            color: 'white',
                            fontWeight: 'bold',
                            paddingRight: '10px',
                        }}
                    >
                        Genre:{' '}
                    </span>
                    <span>{movie.genre.genreName}</span>
                </p>
            </div>
            <div>
                <p>
                    <span
                        style={{
                            color: 'white',
                            fontWeight: 'bold',
                            paddingRight: '10px',
                        }}
                    >
                        Release Date:{' '}
                    </span>
                    {/* To convert an ISO date to the date format yyyy-mm-dd. */}
                    <span>{movie.releaseDate.split('T')[0]}</span>
                </p>
            </div>
            <div>
                <p>
                    <span
                        style={{
                            color: 'white',
                            fontWeight: 'bold',
                            paddingRight: '10px',
                        }}
                    >
                        Director:{' '}
                    </span>
                    <span>{movie.director.directorName}</span>
                </p>
            </div>
            <div>
                <p
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        paddingRight: '10px',
                    }}
                >
                    Description:
                </p>
                <p>{movie.description}</p>
            </div>
            <div>
                {/* to convert "featured" boolean to string*/}
                {/* <span>Featured: </span>
                <span>{movie.featured.toString()}</span> */}
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '20px',
                }}
            >
                {/* Redirect the user back to the main view with <Link>. */}
                <Link to={`/`}>
                    <Button style={{ fontWeight: 'bolder' }}>BACK</Button>
                </Link>
            </div>
        </div>
    );
};

//Define all the props constraints for the MovieView
MovieView.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            imagePath: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            genre: PropTypes.shape({
                genreName: PropTypes.string.isRequired,
            }),
            description: PropTypes.string.isRequired,
            director: PropTypes.shape({
                directorName: PropTypes.string.isRequired,
            }),
            featured: PropTypes.bool.isRequired,
        })
    ).isRequired,
};
