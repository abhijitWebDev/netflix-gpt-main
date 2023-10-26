import React from 'react'
import { useEffect } from 'react';
import { API_OPTIONS } from '../components/constant';
import { addTrailerVideo } from '../store/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    // fetching the movie trailer from redux
    const nowPlayingMovies = useSelector(state => state.movies.trailerVideo);

    // making the api call
    const getMovieVideo = async () => {
        
    
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS)
        const response = await data.json();
    
        const filteredData = response.results.filter((video) => video.type === 'Trailer');
        
        const trailer = filteredData.length ? filteredData[0] : response.results[0];
        dispatch(addTrailerVideo(trailer))
      }
    
      useEffect(() => {
        !nowPlayingMovies && getMovieVideo();
      },[]);
}

export default useMovieTrailer