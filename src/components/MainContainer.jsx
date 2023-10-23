import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector((state) => state.movies ?. nowPlayingMovies);
    if(!movies) return ;
    const oneMainMovie = movies[1];

    console.log(oneMainMovie)
    const{original_title, overview} = oneMainMovie;
  return (
    <>
    <VideoTitle title={original_title} overview={overview} />
    <VideoBackground />
    </>
  )
}

export default MainContainer