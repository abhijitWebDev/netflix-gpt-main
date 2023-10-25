
import useNowPlayingMovies from '../hooks/useNowPlayingMovies' // importing the useNowPlayingMovies hook
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';




const Browse = () => {
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
        <MainContainer />
        <SecondaryContainer />
      
    </>
  )
}

export default Browse