const MovieList = ({
  movies,
  favouriteComponent: FavouriteComponent,
  handleFavouritesClick,
}) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
      {movies.map((movie, index) => (
        <div key={index} className='relative aspect-[2/3] overflow-hidden'>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 flex flex-col justify-between p-2 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300'>
            <div
              onClick={() => handleFavouritesClick(movie)}
              className='self-end'
            >
              <FavouriteComponent />
            </div>
            <div className='text-white text-sm'>
              <h3 className='font-bold truncate'>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MovieList
