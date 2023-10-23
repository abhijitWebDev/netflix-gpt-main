
import useNowPlayingMovies from '../hooks/useNowPlayingMovies' // importing the useNowPlayingMovies hook
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';




const Browse = () => {
  useNowPlayingMovies();
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