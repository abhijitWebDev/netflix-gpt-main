import React from 'react'
import { IMG_CDN_URL } from './constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 md:w-48 pr-4">
        <img src={IMG_CDN_URL + posterPath} alt="movie-poster" />
    </div>
  )
}

export default MovieCard