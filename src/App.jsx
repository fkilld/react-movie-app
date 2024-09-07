import { useState, useEffect } from 'react'
import axios from 'axios'
import MovieList from './components/MovieList'
import MovieListHeading from './components/MovieListHeading'
import SearchBox from './components/SearchBox'
import AddFavourites from './components/AddFavourites'
import RemoveFavourites from './components/RemoveFavourites'

const App = () => {
  const [movies, setMovies] = useState([])
  const [favourites, setFavourites] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=aeb2b829`

    try {
      const response = await axios.get(url)
      if (response.data.Search) {
        setMovies(response.data.Search)
      }
    } catch (error) {
      console.error('Error fetching movies:', error)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue])

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    )

    if (movieFavourites) {
      setFavourites(movieFavourites)
    }
  }, [])

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
  }

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie]
    setFavourites(newFavouriteList)
    saveToLocalStorage(newFavouriteList)
  }

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    )

    setFavourites(newFavouriteList)
    saveToLocalStorage(newFavouriteList)
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-500 to-blue-600 p-8'>
      <div className='container mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-6'>
        <div className='flex flex-col sm:flex-row items-center justify-between mb-8'>
          <MovieListHeading heading='Movies' />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className='bg-gray-100 p-4 rounded-lg'>
          <MovieList
            movies={movies}
            handleFavouritesClick={addFavouriteMovie}
            favouriteComponent={AddFavourites}
          />
        </div>
        <div className='mt-12 mb-4'>
          <MovieListHeading heading='Favourites' />
        </div>
        <div className='bg-gray-100 p-4 rounded-lg'>
          <MovieList
            movies={favourites}
            handleFavouritesClick={removeFavouriteMovie}
            favouriteComponent={RemoveFavourites}
          />
        </div>
      </div>
    </div>
  )
}

export default App
