import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import {API_OPTIONS} from '../components/constant';
import { addPopularMovies } from '../store/movieSlice';

const fetchPopularMovies = async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.results;
};

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(state => state.movies.popularMovies);

  const { data: movies, isError, isLoading } = useQuery('popularMovies', fetchPopularMovies, {
    enabled: !popularMovies,
    onSuccess: (data) => {
      dispatch(addPopularMovies(data));
    },
  });

  return { movies, isError, isLoading };
};

export default usePopularMovies;