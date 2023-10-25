
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies' // importing the useNowPlayingMovies hook
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import {Header} from './index';




const Browse = () => {
  const gptSearch = useSelector(state => state.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <>
      {/*
      Maincontainer
       -Video play
       - video background
      Another main container
       - Movie list * n
       - Card * n
       
     
        */}
        {gptSearch ? (<GptSearch />) : <>
        <MainContainer />
        <SecondaryContainer />
      
        </>}
      
    </>
  )
}

export default Browse