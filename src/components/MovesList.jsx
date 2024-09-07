import React from 'react'

const MovieList = ({
  movies,
  favouriteComponent: FavouriteComponent,
  handleFavouritesClick,
}) => {
  return (
    <div className='flex flex-wrap justify-start'>
      {movies.map((movie, index) => (
        <div key={index} className='relative m-3'>
          <img src={movie.Poster} alt='movie' className='w-full h-auto' />
          <div
            onClick={() => handleFavouritesClick(movie)}
            className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300'
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </div>
  )
}

export default MovieList
