import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector((state) => state.movies ?. nowPlayingMovies);
    if(!movies) return ;
    const oneMainMovie = movies[5];
    const{original_title, overview, id} = oneMainMovie;
  return (
    <>
    <VideoTitle title={original_title} overview={overview} />
    <VideoBackground movieId={id} />
    </>
  )
}

export default MainContainer