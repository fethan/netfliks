import React from 'react';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;

    return (
        <>
            {
                props.movies.map((movie, index) => (
                    <div className="image-container d-flex justify-content-start m-3">
                        <img src={movie.Poster} alt='movie'></img>
                        <div onClick={props.handleFavouritesClick} className="overlay d-flex align-items-center justify-content"></div>
                        <FavouriteComponent />
                    </div>
                ))
            }
        </>
    );
}

export default MovieList;