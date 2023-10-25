import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies)
  return (
    <div className=" bg-black">
      {/* 
      1 Movie list popular
      2 Movie list now playing
      3 movie list top rated
      4 movie list upcoming
      5 movie list trending
      6 movie list by genre
       */}
       <div className='-mt-60 pl-12 relative z-20'>
       <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
       <MovieList title={"Popular"} movies={movies.popularMovies} />
       <MovieList title={"Top rated"} movies={movies.topRatedMovies} />
       <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
       </div>
       
    </div>
  )
}

export default SecondaryContainer