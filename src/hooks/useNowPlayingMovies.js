import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import {API_OPTIONS} from '../components/constant';
import { addNowPlayingMovies } from '../store/movieSlice';

const fetchNowPlayingMovies = async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.results;
};

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(state => state.movies.nowPlayingMovies);

  const { data: movies, isError, isLoading } = useQuery('nowPlayingMovies', fetchNowPlayingMovies, {
    enabled: !nowPlayingMovies,
    onSuccess: (data) => {
      dispatch(addNowPlayingMovies(data));
    },
  });

  return { movies, isError, isLoading };
};

export default useNowPlayingMovies;