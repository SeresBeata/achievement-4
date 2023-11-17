//Import components from React Bootstrap
import { Row, Col, Card } from 'react-bootstrap';
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
        <Row className="justify-content-md-center justify-content-sm-center ">
            {/* Use ternary operator to check if there are favourite movies and return message, if there is no fav movie. */}
            {favoriteMovies.length === 0 ? (
                <Col lg={6} md={8} sm={10}>
                    <Card
                        style={{
                            textAlign: 'center',
                            fontWeight: 'bolder',
                            margin: '50px 15px  0 15px',
                        }}
                    >
                        <Card.Body> There is no Favourite Movie yet!</Card.Body>
                    </Card>
                </Col>
            ) : (
                //If there are fav movies, then return them as a <MovieCard>
                favoriteMovies.map((movie) => (
                    <Col
                        key={movie._id}
                        className="mb-4"
                        lg={3}
                        md={4}
                        sm={6}
                        xs={12}
                    >
                        <MovieCard movie={movie} user={user} />
                    </Col>
                ))
            )}
        </Row>
    );
};
