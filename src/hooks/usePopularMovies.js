import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {API_OPTIONS} from '../components/constant';
import { addPopularMovies } from '../store/movieSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(state => state.movies.popularMovies);

 const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    const json = await data.json();
    dispatch(addPopularMovies(json.results));

  };
  

  useEffect(() => {
    !popularMovies && getPopularMovies();
  },[]);
}

export default usePopularMovies