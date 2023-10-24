import React from 'react'
import { useEffect } from 'react';
import { API_OPTIONS } from '../components/constant';
import { addTrailerVideo } from '../store/movieSlice';
import { useDispatch } from 'react-redux';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    // making the api call
    const getMovieVideo = async () => {
        
    
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS)
        const response = await data.json();
    
        const filteredData = response.results.filter((video) => video.type === 'Trailer');
        
        const trailer = filteredData.length ? filteredData[0] : response.results[0];
        dispatch(addTrailerVideo(trailer))
      }
    
      useEffect(() => {
        getMovieVideo()
      },[]);
}

export default useMovieTrailer