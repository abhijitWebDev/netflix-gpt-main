import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {API_OPTIONS} from '../components/constant';
import { addNowPlayingMovies } from '../store/movieSlice';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

 const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));

  };
  

  useEffect(() => {
    getNowPlayingMovies();
  },[]);


}

export default useNowPlayingMovies;