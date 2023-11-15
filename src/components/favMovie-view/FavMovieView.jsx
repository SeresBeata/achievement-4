//Import components from React Bootstrap
import { Row, Col } from 'react-bootstrap';
import { MovieCard } from '../movie-card/MovieCard';

//Create FavMovieView child component and export it
export const FavMovieView = ({ user, movies }) => {
    //filter the movies array
    let favoriteMovies = movies.filter((m) =>
        user.favouriteMovies.includes(m._id)
    );

    console.log(favoriteMovies);

    favoriteMovies.forEach((movie) => {
        console.log(movie.title);
    });

    return (
        <Row className="justify-content-md-center justify-content-sm-center">
            {favoriteMovies.map((movie) => (
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
        </Row>
    );
};
