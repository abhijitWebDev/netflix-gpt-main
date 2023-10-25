import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
  
  
  
  return (
    <div className="p-6">
      <h2 className="text-3xl py-4 text-white">{title}</h2>
      <div className='flex overflow-x-scroll'>
        {/* Movie list */}
      </div>
      <div className="flex">
        {movies && movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        )
        )}
    </div>
     
      </div>
      
  )
}

export default MovieList;