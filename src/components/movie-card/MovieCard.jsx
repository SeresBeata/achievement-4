//Create MovieCard child component
//Pass data from parent component (MainView) to the child component (MovieCard) by using props
//Export the created child component MovieCard, and return the title of the movies
export const MovieCard = ({ movie }) => {
    return <div>{movie.title}</div>;
};
