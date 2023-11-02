import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {API_OPTIONS} from '../components/constant';
import { addUpcomingMovies } from '../store/movieSlice';
import { useQuery } from 'react-query';


const fetchTopRatedMovies = async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.results;

}


const useUpcomingMovies = () => {

 const dispatch = useDispatch();
  const upcomingMovies = useSelector(state => state.movies.upcomingMovies);

  const { data: movies, isError, isLoading } = useQuery('upcomingMovies', fetchTopRatedMovies, {
    enabled: !upcomingMovies,
    onSuccess: (data) => {
      dispatch(addUpcomingMovies(data));
    },
  });
  return { movies, isError, isLoading };
}

export default useUpcomingMovies;