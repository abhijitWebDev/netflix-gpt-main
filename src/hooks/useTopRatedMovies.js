import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {API_OPTIONS} from '../components/constant';
import { addTopRatedMovies } from '../store/movieSlice';
import { useQuery } from 'react-query';

const fetchTopRatedMovies = async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.results;

}
const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(state => state.movies.topRatedMovies);

    const { data: movies, isError, isLoading } = useQuery('topRatedMovies', fetchTopRatedMovies, {
      enabled: !topRatedMovies,
      onSuccess: (data) => {
        dispatch(addTopRatedMovies(data));
      },
    });
    return { movies, isError, isLoading };
 
}

export default useTopRatedMovies