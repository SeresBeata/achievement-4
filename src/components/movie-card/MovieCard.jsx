//Create MovieCard child component
//Pass data and function from parent component (MainView) to the child component (MovieCard) by using props.
//Export the created child component MovieCard, and return the title of the movies
export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <div
            // After extracting the onMovieClick prop, call the passed function within the callback of the onClick event listener.
            onClick={() => {
                onMovieClick(movie);
            }}
        >
            {movie.title}
        </div>
    );
};
