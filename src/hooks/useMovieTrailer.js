import React from 'react'
import { useEffect } from 'react';
import { API_OPTIONS } from '../components/constant';
import { addTrailerVideo } from '../store/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';

const fetchMovieTrailer = async (movieId) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  const filteredData = data.results.filter((video) => video.type === 'Trailer');
  return filteredData.length ? filteredData[0] : data.results[0];
};

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(state => state.movies.trailerVideo);

  const { data: trailer, isError, isLoading } = useQuery(['movieTrailer', movieId], () => fetchMovieTrailer(movieId), {
    enabled: !nowPlayingMovies,
    onSuccess: (data) => {
      dispatch(addTrailerVideo(data));
    },
  });

  return { trailer, isError, isLoading };
};

export default useMovieTrailer;