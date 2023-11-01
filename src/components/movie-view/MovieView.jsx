//Create MovieView child component
//Pass data from parent component (MainView) to the child component (MovieView) by using prop
//Export the created child component MovieView, and return data about current movie in case of click event
export const MovieView = ({ movie }) => {
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
        </div>
    );
};
